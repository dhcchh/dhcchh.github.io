---
title: "NLP to Decode Customer Frustration with Coffee Machines"
description: "A coffee machine's YouTube video had a 13:1 like-to-dislike ratio, but the comments told a different story. Building a BERT + regex pipeline to surface the 55% negative sentiment hiding behind the metrics."
pubDate: 2025-06-04
draft: false
tags: ["nlp", "sentiment-analysis", "python", "bert"]
cover: "/blog/nlp-decode-customer-frustration-coffee-machines/dashboard-screenshot.png"
---

Recently, I had to descale my Nespresso Vertuo Pop coffee machine for the first time. Descaling is giving your coffee machine a deep clean, flushing out all the mineral buildup so it keeps brewing properly.

I figured it would be straightforward. Spoiler: it wasn't. There were no instruction manuals, so I turned to [Nespresso's YouTube video](https://www.youtube.com/watch?v=5oJq8CVoHBw) for guidance. Big mistake. The video was a mess — too many steps, vague explanations, and nothing works the way it was supposed to. After growing increasingly frustrated, I called customer support. 17 minutes later, with the help of a very patient rep, I finally managed to get the descaling done.

![Was too frustrated with the descaling process to take pictures of it](/blog/nlp-decode-customer-frustration-coffee-machines/descaling-machine.png)

### The Hidden Problem: Metrics vs. reality

What really surprised me, though, was the like-to-dislike ratio on that video — 3600 likes to 279 + 1 dislikes (13:1), and 1.1 million views. At first, I genuinely wondered if I was just being dumb? But then I scrolled down to the comments, and sure enough, they were full of people just as confused and frustrated as I was. Turns out I wasn't alone, the video was just that bad.

Despite the positive-looking stats, the video failed to serve its purpose. It didn't help me descale my machine, it sent me down a frustrating path that ended in a call to customer support. What should have been a simple task ended up costing me over an hour and a half of my day.

#### The Business Impact: Cost of misleading metrics

From a business perspective, a Nespresso manager might look at the metrics and feel confident that it's doing its job, and conclude that there is no need for further analyses. That surface-level data can be dangerously misleading. If you actually read the comments, a very different story emerges. Frustration, confusion and in some cases, anger, all emotions that leads to customer churn in the long run.

That disconnect between perceived and actual effectiveness really stood out to me. It's inspired me to start an NLP project of my own; a tool to help companies like Nespresso go beyond basic engagement stats and truly understand customer sentiment at scale. There's real value in surfacing insights that metrics alone can't capture.

### Building the Solution

As someone new to NLP, I set out to build a system that could automatically analyse YouTube comments and extract actionable business insights.

I wanted to be able to determine how the population felt about the video, and their issues faced with their requested features. This was formulated into 2 goals.

1. Sentiment Analysis: For sentiment analysis, I decided to go with BERT (Bidirectional Encoder Representations from Transformers) as it requires the least preprocessing.
2. Extracting common problems and requested features: Finding a way to extract customer requested features and issues was more challenging. Initially I tried more advanced methods like TF-IDF with Clustering but that did not work out. Eventually, I settled on a simple method — Regular Expression Matching.

Ultimately, the goal was to create structured data from unstructured data to generate business insights.

### The Technical Challenge

The goal was simple: analyse customer feedback in YouTube comments to identify pain points. But simple goals often hide complex implementations.

**The core challenges:**

- Extract and process comments via YouTube API
- Clean messy social media text for analysis (where applicable)
- Apply sentiment analysis that actually works on real-world data
- Extract business-specific insights (not just "positive" or "negative")
- Present findings in a way stakeholders can act on

### Architecture

I structured the pipeline with clear separation of concerns:

**Key Components:**

- YouTubeDataLoader: Calling the YouTube API to retrieve video statistics and comments, with rate limiting. For this part I am unable to retrieve the dislike value due to Google's policies, it will be hardcoded with a value of 280 (based on the last known count).
- BERTYouTubeCommentCleaner: BERT-optimized text preprocessing
- BERTSentimentAnalyzer: Transformer-based sentiment classification
- FeatureExtractor: Extracting specific features customers request for and the common issues faced
- Pipeline: End-to-end orchestration
- Streamlit Dashboard: For displaying the business insights

### Sentiment Analysis: BERT

**Model Selection: Domain-Specific Training**

I decided to use this specific version of BERT [`cardiffnlp/twitter-roberta-base-sentiment-latest`](https://huggingface.co/cardiffnlp/twitter-roberta-base-sentiment-latest) — a RoBERTa model. It was fine tuned on a large corpus of Twitter data, which is quite similar to what you may find in YouTube comments.

**Preprocessing for RoBERTa**

I researched preprocessing best practices for this version of BERT and found that minimal cleaning is actually optimal. BERT models are trained on natural language, so aggressive preprocessing destroys the contextual understanding they rely on.

```python
def roberta_text_cleaning(self, text):
    cleaned = re.sub(r'https?://\S+', '[URL]', text)
    cleaned = re.sub(r'@\w+', '[USER]', cleaned)
    return cleaned
```

This approach replaces any URL with [URL], and usernames with [USER], removing noise and preserving the structure of the text.

**Confidence Scoring**

RoBERTa like many AI models are not perfect and can misclassify comments. Fortunately, I was able to utilise its confidence scoring mechanism (score is between 0 and 1, with 0 being zero confidence and 1 being 100% certainty that a classification is correct) to check where it did not perform as well.

```python
def analyze_confidence_distribution(self):
    """Flag low confidence predictions for manual review"""
    very_low = self.df[self.df['sentiment_confidence'] < 0.5]
    if len(very_low) / len(self.df) > 0.2:  # >20% very low confidence
        print("Warning: High proportion of uncertain predictions")
```

With this, we will be able to catch the edge cases where the sentiment may not be classified correctly.

#### **Model Validation**

Initially, I opted to do sampling from all confidence levels but found that medium and high confidence classifications were generally correct.

```python
def analyze_confidence_distribution(self):
    """
    Analyze confidence score patterns to identify potential issues.

    Returns:
        Dictionary with confidence analysis results
    """
    conf_stats = self.df['sentiment_confidence'].describe()

    # Confidence level buckets
    very_low = self.df[self.df['sentiment_confidence'] < 0.5]
    low = self.df[(self.df['sentiment_confidence'] >= 0.5) & (self.df['sentiment_confidence'] < 0.7)]
    medium = self.df[(self.df['sentiment_confidence'] >= 0.7) & (self.df['sentiment_confidence'] < 0.9)]
    high = self.df[self.df['sentiment_confidence'] >= 0.9]
```

In this case a passing threshold of confidence is at 0.7, if a comment has a prediction confidence of < 0.7, it means that the comment ought to be reviewed.

To account for all of the comments, I decided to go with a sampling approach.

```python
def create_low_confidence_validation_sample(self, confidence_threshold=0.7):
    """Focus manual validation where model is uncertain"""
    low_conf = self.df[self.df['sentiment_confidence'] < confidence_threshold]
    # Create validation sample for human review
    return validation_df
```

Initially I found that high and medium confidence predictions were accurate. Furthermore, about 75% of the predictions were medium or higher (At least 70% confidence).

This just leaves about 60 comments where the model is uncertain in its predictions. This is possible due to the small size of the dataset. However, a larger dataset will require more robust methods.

Consider this comment that was classified as "Neutral" with a low confidence threshold :

> "So I lock the machine, press the button 3 times within 2 seconds, then put a pod in then eject it, lock then unlock, press and hold the button for 7 seconds, then unplug the machine turn the breaker off, turn everything back on while holding the button for 2–3 seconds. Do 3 jumping jacks and 5 burpees. Congratulations your machine is descaled. the descaling agent is deadly"

This is clearly satirical criticism of the overly complex process, but the model missed it possibly due to the following reasons:

- The instructional structure reads like genuine help.
- No obvious negative keywords appear.
- "Congratulations" sounds positive to algorithms.

Human readers immediately recognise the sarcasm through absurd escalation ("jumping jacks and burpees") and dramatic warnings.

Here's another instance of humour that BERT failed to grasp. It was classified as neutral with a low confidence threshold too.

> Now I understand why people will drive 5 miles, stand in line waiting to pay $5 for a cup of coffee. It's less painful.

Such instances are manually adjusted to the correct classification.

### Extracting user problems and requested features: Regex matching

**The Real Challenge: Regex Pattern Development**

To my surprise, the hardest part wasn't the ML — it was crafting Regex patterns that could reliably identify business-specific issues. However, grasping the Regex library was tricky. Take this as an example:

```python
# Initial naive attempt
r'descaling button'  # Misses "descaling mode button"

# Improved pattern
r'descaling.*button'  # Catches variations with .* wildcard
```

This pattern matches "descaling" followed by "button" with anything in between. The .* wildcard catches variations like "descaling mode button", "descaling process button", or "descaling cycle button" without needing separate patterns for each.

I refined patterns by analysing high-engagement comments first, since these likely represent shared frustrations that didn't get individual comments. A comment with 50 likes often reflects what 50+ other customers were thinking.

```python
self.categories = {
    'descaling_button_request': [
        r'descaling.*button',
        r'just put.*button.*machine',
        r'add.*descaling.*button'
    ],
    'app_improvements': [
        r'app.*should.*button',
        r'app.*descaling.*mode'
    ],
    'complexity_complaints': [
        r'(?:overly|too|so).*complicated',
        r'most complicated.*process'
    ]
}
```

This then paved a way for me to create a structure to detect specific business issues, allowing vague complaints into specific product feedback: "47 customers want a dedicated descaling button" is more actionable than "sentiment is 60% negative."

### Results: What the Data Actually Revealed

After running the pipeline, we get our results and we can run the dashboard.

![A screenshot of part of the Streamlit dashboard](/blog/nlp-decode-customer-frustration-coffee-machines/dashboard-screenshot.png)

Analyzing the Nespresso descaling video confirmed my suspicions. Despite the initial positive engagement metrics, the sentiment of the comments told a different story.

**Sentiment Reality Check:**

- 55% negative sentiment in comments (vs. 13:1 like-to-dislike ratio)
- Comments with negative sentiment receive significantly more engagement (likes)
- Top issues: complexity complaints (18 mentions), descaling button requests (23 mentions)

**Business Insights:**

- Customers want a simpler descaling process
- Multiple requests for dedicated descaling button
- App integration suggestions for guided descaling
- Clear demand for better instructional content

**Risk Assessment:**

- High negative sentiment with high engagement = amplified dissatisfaction
- Based on my own experience requiring a 17-minute support call, and seeing similar frustration patterns in comments, there's likely a correlation worth investigating.

### The Bigger Picture

This project started with personal frustration but revealed a broader opportunity. Companies often have access to rich customer feedback data but lack the tools to extract actionable insights at scale.

Traditional sentiment analysis tells you *what* customers feel. Business-focused NLP tells you *why* they feel it and *what* to do about it.

The next time you see positive engagement metrics on customer-facing content, remember: the real insights might be hiding in the comments section, waiting for someone to ask the right questions.

**The Repository is available on [my GitHub](https://github.com/dhcchh/youtube-customer-insights) with detailed documentation for replication and extension.**

*Building this taught me that the most valuable data science projects often start with personal pain points. What's frustrating you that could be solved with data?*

#### Resources

Some resources that I utilised to help with learning in this project:

- [Mastering BERT: A Comprehensive Guide from Beginner to Advanced in Natural Language Processing (NLP)](https://medium.com/@shaikhrayyan123/a-comprehensive-guide-to-understanding-bert-from-beginners-to-advanced-2379699e2b51)
- [StatQuest YouTube Video (BERT)](https://medium.com/@shaikhrayyan123/a-comprehensive-guide-to-understanding-bert-from-beginners-to-advanced-2379699e2b51)
- [Regex cheatsheet (DataCamp)](https://media.datacamp.com/legacy/image/upload/v1665049611/Marketing/Blog/Regular_Expressions_Cheat_Sheet.pdf)
- [Google Cloud Documentation (Python)](https://developers.google.com/youtube/v3/quickstart/python)
