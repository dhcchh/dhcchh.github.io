export const siteConfig = {
  name: "Ding Hao",
  title: "Data Engineer",
  intro: {
    paragraphs: [
      "Hey there 👋, I’m Ding Hao, a Data Engineer with a BSc in Economics. I first got interested in data through econometrics, then explored it further through internships and personal projects. My data-analytics internships involved more data-engineering work than I expected, and I found I enjoyed that part most. That is what drew me deeper into data engineering.",
      "At university, what actually hooked me was building things — check out my <a href=\"/projects\">projects</a> and <a href=\"/blog\">blog</a> — and teaching myself whatever a problem needed, well beyond the syllabus. Grades were never the priority; they're a superficial, short-lived signal. Learning continuously, building things, and gaining real experience is what built my skillset, and it's still the principle driving my tech career. Breaking into the tech/data job market in 2026 only confirmed I had it right.",
    ],
    learningIntro:
      "I’m working towards becoming a better data engineer by learning more about:",
    learningTopics: [
      "Java backend development and APIs",
      "The JVM and how systems work under the hood",
      "Streaming systems",
      "Cloud data infrastructure",
    ],
    closing:
      "I’m balancing that with a 9–6, and while I’m not always as consistent as I’d like to be, this is where I’ll share what I’m learning and building along the way.",
  },
  description: "Ding Hao's Portfolio Website",
  accentColor: "#1d4ed8",
  theme: {
    enableDarkMode: true,
    defaultTheme: "system", // 'light', 'dark', or 'system'
  },
  social: {
    email: "chandinghao@yahoo.com",
    linkedin: "https://www.linkedin.com/in/dhchan/",
    github: "https://github.com/dhcchh",
  },
  blog: {
    // Used for the /blog index heading, meta description and RSS feed.
    // The Blog nav link stays hidden until the first non-draft post exists in
    // src/content/blog/.
    title: "Documenting my work and learning",
    navLabel: "Blog",
    description:
      "Random thoughts, personal projects, and things I’m learning along the way.",
  },
  experience: [
    {
      company: "Xiaomi",
      title: "Data Engineer",
      dateRange: "Aug 2026 - Present",
      bullets: [
        "My first full-time data engineering role. I build offline pipelines with Spark SQL, Xiaomi’s internal DAG scheduling platform, and extensive use of Iceberg and Hive tables.",
        "Governance and privacy are a big focus, especially supporting a Chinese company in privacy-sensitive markets like North America and Europe.",
        "Building a backend app (Feishu, Xiaomi Internal BPM & Cloud Platform) for governed data access. My first real exposure to API development, Java, and Spring Boot.",
        "Interviewed in Chinese and now work closely with Chinese stakeholders. My Chinese has improved a lot too 😁",
      ],
      skills: [
        "Apache Iceberg",
        "Apache Doris",
        "Spark SQL",
        "Java",
        "Spring Boot",
        "Data Modeling",
      ],
    },
    {
      company: "Wise",
      title: "Product Analyst Intern",
      dateRange: "Mar 2026 - Jul 2026",
      bullets: [
        "Worked across the full analytics lifecycle on Wise’s Send High Volume team—from building data pipelines and analysing product performance to creating visualisation tools and communicating insights to stakeholders.",
        "Got more hands-on experience with Snowflake, dbt, and Airflow, and made cool charts with Lightdash and Superset.",
        "Did plenty of pipeline optimisation work. Refactored a 1,000-line dbt model to accommodate additional business logic and make it more efficient.",
        "Learned more about the growth side of fintech and high-value customer behaviour.",
        "Ran analyses that helped improve the team’s product line.",
        "First time working across time zones. Also got a memorable month-long sponsored Europe trip 🔥",
      ],
      skills: [
        "dbt",
        "Snowflake",
        "Airflow",
        "Python",
        "SQL",
        "Dimensional Modeling",
        "MCP",
      ],
    },
    {
      company: "ByteDance",
      title: "Payments Risk Analyst Intern",
      dateRange: "Jan 2026 - Mar 2026",
      bullets: [
        "Payments risk for TikTok LIVE and how card payments work behind the scenes.",
        "Thinking about signals versus noise when deciding what is genuinely suspicious.",
        "Building signals to stop bot-created accounts before they could be used for fraud.",
        "First exposure to a Chinese company’s data ecosystem.",
        "Really enjoyed the free lunches.",
      ],
      skills: ["PySpark", "Spark SQL", "HiveSQL", "Python", "Hive"],
    },
    {
      company: "Razer",
      title: "Data Analyst Intern",
      dateRange: "Jul 2025 - Dec 2025",
      bullets: [
        "First exposure to software-engineering practices: versioning dbt projects with Git.",
        "Learning to work in a Linux environment through WSL.",
        "First look at a professional AWS data ecosystem.",
        "Seeing Airflow and scheduled data pipelines in practice.",
      ],
      skills: [
        "dbt",
        "AWS Redshift",
        "Apache Superset",
        "Python",
        "SQL",
        "bash (Ubuntu)",
      ],
    },
    {
      company: "Ocean Network Express (ONE)",
      title: "Data Analyst Intern",
      dateRange: "Jun 2024 - Dec 2024",
      bullets: [
        "First data internship and first look at how data could shape day-to-day logistics decisions.",
        "Working through 300-line SQL queries and unfamiliar functions. It made me much more comfortable with SQL.",
        "First exposure to GCP, production data pipelines, and the container-routing workflow behind them.",
        "Navigating an object-oriented Python codebase I did not initially understand. It was a big step in becoming a better Python developer.",
        "Learning to begin with the business problem. An early look at how AI could improve operational processes.",
      ],
      skills: ["GCP", "Python", "SQL", "CI/CD"],
    },
  ],
  projects: [
    {
      name: "Crypto Market Intelligence Pipeline",
      dateRange: "Jan 2026 - Apr 2026",
      description:
        "Done as part of my Big Data Analytics coursework (IS459) at SMU. An end-to-end crypto analytics pipeline for retail-trader style insights. Airflow ingests OHLC data from Kraken into S3, dbt transforms it through Glue/Athena into marts for daily volume, returns, drawdown, and volatility regimes, and Grafana dashboards surface the results.",
      github: "https://github.com/dhcchh/crypto-market-data-pipeline",
      articles: [], // Array of { title: "", link: "" }
      skills: ["Airflow", "dbt", "AWS Glue", "AWS Athena", "AWS S3", "Grafana", "Python"],
    },
    {
      name: "Card Payments Analytics",
      dateRange: "Dec 2025",
      description:
        "Completed as part of Wise's hiring process. Was a good opportunity for me to practice my data analytics skills. Managed to utilise new Python packages too. See link below for the GitHub repo.",
      github: "https://github.com/dhcchh/card-payments-analytics",
      articles: [], // Array of { title: "", link: "" }
      skills: [
        "SQL",
        "Python",
        "DuckDB",
        "Data Analytics",
        "Data Visualisation",
      ],
    },
    {
      name: "Machine Learning for Credit Card Fraud Detection",
      dateRange: "Aug 2025 - Dec 2025",
      description:
        "Done as part of my Machine Learning coursework (IS460) at SMU. Had interest in a form of fraud detection and settled on credit card fraud detection. Tinkered around with ML evaluation metrics, different models from Tree based to deep learning and custom loss functions.",
      github:
        "https://github.com/dhcchh/Machine-Learning-for-Credit-Card-Fraud-Detection",
      articles: [], // Array of { title: "", link: "" }
      skills: ["Machine Learning", "Deep Learning", "Python", "PyTorch"],
    },
    {
      name: "SMU BIA x ISD Datathon 2025",
      dateRange: "Jan 2025 - Feb 2025",
      description:
        "Built a risk intelligence system for Singapore's Internal Security Department that turned unstructured WikiLeaks and news data into clear, searchable insights. Created interactive dashboards to visualise trends, relationships, and risks for decision-making. Made it to the finals, placing in the top 10 out of 80 teams.",
      github:
        "https://github.com/dhcchh/Team-xgboosted---SMU-BIA-Datathon-2025",
      articles: [],
      skills: ["AWS Bedrock", "Transformers", "Python", "Plotly Dash"],
    },
    {
      name: "YouTube Customer Sentiment Analysis",
      dateRange: "May 2025 - Jun 2025",
      description:
        "Inspired by issues with my Nespresso machine, the tutorial video sucked and I took a long time to get the issue fixed. The surface level metrics (1.3mil views, 13:1 LDR ratio) shocked me but the comments told a different story.",
      github: "https://github.com/dhcchh/youtube-customer-insights",
      articles: [
        {
          title: "Read the case study",
          link: "/blog/nlp-decode-customer-frustration-coffee-machines",
        },
      ],
      skills: [
        "Natural Language Processing",
        "Python",
        "Transformers",
        "Streamlit",
      ],
    },
    {
      name: "SPY Analytics and Forecasting",
      dateRange: "Aug 2024 - Dec 2024",
      description:
        "Project came about with my interest in exploring the stock market. Decided to structure it in two different areas to learn two specialities.",
      github: "https://github.com/dhcchh/SPY-Analytics-Forecasting-Project",
      articles: [
        {
          title: "Read the case study",
          link: "/blog/spy-analytics-and-forecasting",
        },
      ],
      skills: [
        "Time Series Analysis",
        "Python",
        "Prophet",
        "Data Visualisation",
        "Machine Learning",
        "Deep Learning",
      ],
    },
    {
      name: "VCT eSports Manager Hackathon",
      dateRange: "Aug 2024 - Oct 2024",
      description:
        "Built an AI assistant that helped users build VALORANT eSports teams. It searched player statistics and tournament data to answer questions and recommend players based on a team's needs. Created for the AWS × Riot Games VCT 2025 Hackathon.",
      github: "https://github.com/dhcchh/vct-hackathon-esports-manager",
      articles: [
        {
          title: "Read the case study",
          link: "/blog/vct-esports-manager-hackathon-our-attempt",
        },
      ],
      skills: [
        "AWS Bedrock",
        "Pinecone",
        "AWS Lambda",
        "Streamlit",
        "Python",
        "RAG",
      ],
    },
  ],
};
