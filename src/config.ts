export const siteConfig = {
  name: "Ding Hao",
  title: "Data Engineer", // fallback if titles array is empty
  titles: ["Data Engineer", "Analytics Engineer", "Data Platform Engineer"], // animated typewriter titles
  description: "Ding Hao's Portfolio Website",
  accentColor: "#1d4ed8",
  theme: {
    enableDarkMode: true,
    defaultTheme: 'system' // 'light', 'dark', or 'system'
  },
  social: {
    email: "chandinghao@yahoo.com",
    linkedin: "https://www.linkedin.com/in/dhchan/",
    github: "https://github.com/dhcchh",
    medium: "https://medium.com/@chdinghao",
  },
  resumePath: "", // Path to your resume file in the public folder (empty = hidden; add path to show again)
  aboutMe:
    "I studied Economics but found my way into data through building things and solving problems hands-on. \n\n On the side, I'm diving deep into distributed systems—Spark, Iceberg, and the infrastructure that powers large-scale data platforms. I also write about my projects on Medium/GitHub when I find interesting problems worth sharing.",
  skills: [],
  experience: [
    {
      company: "Xiaomi",
      companyColor: "#FF6700", // Xiaomi orange
      title: "Data Engineer",
      dateRange: "Starting Aug 2026",
      bullets: [
        "My first full-time role, starting this August. It marks the step from internships into building data systems full-time as an engineer, and I'm really looking forward to getting started and the work ahead.",
      ],
      skills: [],
    },
    {
      company: "Wise",
      companyColor: "#9FE870", // Wise light green
      title: "Product Analytics Intern",
      dateRange: "Mar 2026 - Jul 2026",
      bullets: [
        "On the Send High Volume team, I worked the full analytics stack end-to-end. I built data pipelines with dbt, transforming raw transaction data into analytics-ready models, and refactored existing models to run more efficiently and reduce compute cost. On top of that foundation, I ran analytics into high-value customer segments and their transaction patterns, turning those findings into insights that helped drive product and business direction, and built dashboards that gave stakeholders self-serve visibility into how those segments were performing.",
      ],
      skills: ["dbt", "Airflow", "Git", "SQL", "Python", "Data Modeling", "Lightdash", "Apache Superset"],
    },
    {
      company: "ByteDance",
      companyColor: "#5AA7FF", // ByteDance light blue
      title: "Data Analyst Intern",
      dateRange: "Jan 2026 - Mar 2026",
      bullets: [
        "I worked on fraud detection for new user registrations, running exploratory analysis to surface behavioral signals (IP geolocation, device fingerprinting, velocity patterns) indicative of spam account creation, which established baseline fraud rates and feature candidates for a risk scoring framework. To do this at scale, I developed HiveSQL queries to extract and analyze 1M+ daily user records, performing quantile analysis across device and IP distributions to pinpoint anomalous registration patterns.",
      ],
      skills: ["SQL", "Python", "Hive", "Spark"],
    },
    {
      company: "Razer",
      companyColor: "#44D62C", // Razer green
      title: "Data Analyst Intern",
      dateRange: "Jul 2025 - Dec 2025",
      bullets: [
        "This was where I got my first real exposure to analytics engineering at scale. I built data transformation pipelines with dbt and AWS Redshift, focusing on the transformation layer (the T in ETL) by building and maintaining dbt models that turned raw data into analytics-ready datasets for different business teams. On the presentation side, I built Apache Superset dashboards to track recommendation engine performance and surface key business metrics to stakeholders (CTR, moving averages of revenue, etc.), which taught me how production data systems actually operate day to day.",
      ],
      skills: ["dbt", "AWS Redshift", "AWS Sagemaker", "Apache Superset", "SQL", "bash (Ubuntu)"],
    },
    {
      company: "Ocean Network Express (ONE)",
      companyColor: "#E91E8C", // ONE magenta/pink
      title: "Data Analyst Intern",
      dateRange: "Jun 2024 - Dec 2024",
      bullets: [
        "My first data internship, where I optimized truck routes using a CI/CD pipeline on GCP with Python and SQL, cutting distance by 5% and saving $500K+ annually. Getting there meant tracing undocumented data sources through SQL query analysis on a legacy Oracle Database to enable accurate route optimization. I also built an internal AI showcase portal on Google Sites that increased AI adoption by 30% across the company. More than the technical work, this shaped how I approach problems, always leading with the business value first.",
      ],
      skills: ["GCP BigQuery", "GCP VertexAI", "Python", "SQL"],
    },
  ],
  education: [
    {
      school: "Singapore Management University",
      degree: "Bachelor of Science in Economics",
      dateRange: "2022 - 2026",
      description: "Discovered my passion for data first through Econometrics and later through hands-on projects. Also did many courses outside of my Economics major to deepen my data skills.",
      relevantCoursework: [
        "IS460: Machine Learning & Applications",
        "IS459: Big Data Architecture",
        "IS428: Visual Analytics for Business Intelligence",
        "IS105: Business Data Management",
        "DSA212: Data Analytics with R",
        "DSA211: Statistical Learning with R",
        "DSA201: Statistical Inference for Data Science",
        "IS115: Algorithms & Programming",
        "COR-IS1704: Computational Thinking & Programming",
        "ECON207: Intermediate Econometrics"
      ]
    }
  ],
  certifications: [
    // Example format:
    // {
    //   name: "AWS Solutions Architect",
    //   issuer: "Amazon Web Services",
    //   dateObtained: "Jan 2025",
    //   credentialUrl: "https://...",
    //   image: "/certs/aws-sa.png", // optional: path to cert image/badge in public folder
    // },
  ],
  projects: [
    {
      name: "Card Payments Analytics",
      dateRange: "Dec 2026",
      description:
        "Completed as part of Wise's hiring process, this project involves building a data analytics platform to analyze card payment transactions using SQL and Python. \n\n Was a good opportunity for me to practice my data analytics skills. For a detailed walkthrough of the project, check out the GitHub repository by clicking the box.",
      github: "https://github.com/dhcchh/card-payments-analytics",
      articles: [], // Array of { title: "", link: "" }
      skills: ["SQL", "Python", "DuckDB", "Data Analytics", "Data Visualisation"],
    },
    {
      name: "Machine Learning for Credit Card Fraud Detection",
      dateRange: "Aug 2025 - Dec 2025",
      description:
        "Done as part of my Machine Learning coursework (IS460) at SMU. Had interest in a form of fraud detection and settled on credit card fraud detection.\n\n Built a system using Neural Network, VAE, and CatBoost ensemble that saved $20K+ over the baseline Logistic Regression model. Optimized for production with 0.75 PRAUC and 0.82 recall. ",
      github: "https://github.com/dhcchh/Machine-Learning-for-Credit-Card-Fraud-Detection",
      articles: [], // Array of { title: "", link: "" }
      skills: ["Machine Learning", "Deep Learning", "Python", "PyTorch"],
    },
    {
      name: "SMU BIA x ISD Datathon 2025",
      dateRange: "Jan 2025 - Feb 2025",
      description:
        "Built a risk intelligence system for Singapore's Internal Security Department using LLM-powered document extraction. Engineered prompt pipelines with Claude Haiku 3.0 on AWS Bedrock to structure unstructured WikiLeaks and news data.\n\nDelivered interactive Plotly Dash dashboards to visualize trends, relationships, and risks for ISD decision-making. Managed to make it into finals (top 10 out of 80 teams).",
      github: "https://github.com/dhcchh/Team-xgboosted---SMU-BIA-Datathon-2025",
      articles: [],
      skills: ["AWS Bedrock", "Transformers", "Python", "Plotly Dash"],
    },
    {
      name: "YouTube Customer Sentiment Analysis",
      dateRange: "May 2025 - Jun 2025",
      description: "Inspired by issues with my Nespresso machine, the tutorial video sucked and I took a long time to get the issue fixed. The surface level metrics (1.3mil views, 13:1 LDR ratio) shocked me but the comments told a different story. \n\n As a result, I built an end-to-end NLP pipeline analyzing 250 YouTube comments using RoBERTa transformer model, uncovering 55% negative sentiment hidden behind positive engagement metrics. \n\n Also used regex pattern matching to extract actionable insights - 23 complexity complaints and 18 feature requests - then created a Streamlit dashboard to show the gap between surface KPIs and actual customer satisfaction and present areas for future improvements.",
      github: "https://github.com/dhcchh/youtube-customer-insights",
      articles: [{ title: "NLP to Decode Customer Frustration with Coffee Machines", link: "https://medium.com/@chdinghao/nlp-to-decode-customer-frustration-with-coffee-machines-b0317c907fb8" }],
      skills: ["Natural Language Processing", "Python", "Transformers", "Streamlit"],
    },
    {
      name: "SPY Analytics and Forecasting",
      dateRange: "Aug 2024 - Dec 2024",
      description: "Project came about with my interest in exploring the stock market. Decided to structure the it in 2 different areas to learn two specalities. \n\n First, I analyzed SPY's historical and inflation-adjusted returns alongside Federal Reserve data to understand long-term investment performance. Then, I applied time-series techniques like stationarity testing (ADF) and differencing to prep the data, then built a weighted ensemble model (LSTM-PyTorch, Prophet, Monte Carlo) to forecast SPY log returns over the next 20 years with confidence intervals.",
      github: "github.com/dhcchh/SPY-Analytics-Forecasting-Project",
      articles: [
        { title: "Nominal Returns", link: "https://medium.com/@chdinghao/spy-analytics-forecasting-part-1-consistent-returns-3cfe49e7b9b5" },
        { title: "Real Returns", link: "https://medium.com/@chdinghao/spy-analytics-forecasting-part-2-hedging-against-inflation-a52a48b9469b" },
        { title: "Forecasting Future Returns", link: "https://medium.com/@chdinghao/spy-analytics-forecasting-part-3-forecasting-future-returns-3c3cb650beef" },
      ],
      skills: ["Time Series Analysis", "Python", "Prophet", 'Data Visualisation', "Machine Learning", 'Deep Learning'],
    },
    {
      name: "VCT eSports Manager Hackathon",
      dateRange: "Aug 2024 - Oct 2024",
      description: "My first exposure to AI Engineering and building an AI product. We constructed a Retrieval-Augmented Generation (RAG) app for eSports team-building using AWS Bedrock, S3, and Lambda. \n\n Engineered custom chunking strategies with Cohere v3 Embeddings for both structured (csv) and unstructured data (md), then set up vector retrieval pipelines with Pinecone to enhance LLM-based player selection. Deployed on Streamlit Cloud for seamless user interaction.",
      github: "https://github.com/dhcchh/vct-hackathon-esports-manager",
      articles: [],
      skills: ["AWS Bedrock", "Pinecone", "AWS Lambda", "Streamlit", "Python", "RAG"],
    },
  ],
};
