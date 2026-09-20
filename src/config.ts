interface Certification {
  name: string;
  issuer: string;
  dateObtained?: string;
  credentialUrl: string;
  image?: string;
}

export const siteConfig = {
  name: "Ding Hao",
  title: "Data Engineer",
  intro: {
    headline: "Behind the data.",
    emphasis: "Beyond the numbers.",
    description:
      "I'm Ding Hao, a data engineer with roots in economics. I build data platforms, untangle messy problems, and turn what I learn into things that work.",
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
    medium: "https://medium.com/@chdinghao",
  },
  blog: {
    // Used for the /blog index heading, meta description and RSS feed.
    // The Blog nav link stays hidden until the first non-draft post exists in
    // src/content/blog/.
    title: "Writing",
    description:
      "Notes on data engineering, distributed systems, and things I build.",
  },
  aboutMe:
    "I studied Economics but found my way into data through building things and solving problems hands-on. \n\n On the side, I'm diving deep into distributed systems—Spark, Iceberg, and the infrastructure that powers large-scale data platforms. I also write about my projects on Medium/GitHub when I find interesting problems worth sharing.",
  skills: [],
  experience: [
    {
      company: "Xiaomi",
      title: "Data Engineer",
      dateRange: "Aug 2026 - Present",
      bullets: [
        "My first full-time role. I'm building offline data pipelines on Apache Iceberg, Doris, and Spark SQL that process around 10 TB a day of SEA eCommerce transaction data, partitioned to power stakeholder reporting. I'm also architecting GDPR-compliant pipelines in Java and Spring Boot, with PII hashing on defined TTLs, to serve governed data access to seven business units across Xiaomi's mobile and IoT divisions. It's the step from internships into building data systems full-time as an engineer, and I'm looking forward to the work ahead.",
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
        "On the Send High Volume team, I worked the full analytics stack end-to-end. I refactored a 2B+ row dbt model on Snowflake that kept timing out, cutting its runtime from 5 hours to 1.5 through incremental materialisation, watermark-based filtering, and partition-aligned merge keys. I designed star-schema fact and dimension models with proper slowly-changing-dimension handling so three stakeholder teams could work off a single governed layer, and wrote Airflow DAGs in Python to keep everything refreshed with dependency and failure handling. On that foundation I ran deep-dive analyses into high-value customer segments and their transaction patterns by region, surfacing metric shifts that shaped product and business decisions. I also built an MCP server that exposes the dbt semantic layer to LLM agents, so governed metrics can be queried in natural language while the correct join paths and definitions stay enforced.",
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
        "I worked on fraud detection for new user registrations. I engineered PySpark and HiveSQL pipelines over 20TB-scale registration and event data, producing partitioned Hive feature tables with quantile aggregations across device and IP distributions for fraud scoring. Getting that to run at scale meant tuning the SparkSQL execution with partition pruning, broadcast joins, and skew handling on high-cardinality IP and device joins, which brought runtime down by 20%. The behavioral features I built from it (IP geolocation, device fingerprinting, velocity patterns) were adopted directly into the production fraud risk scoring framework.",
      ],
      skills: ["PySpark", "Spark SQL", "HiveSQL", "Python", "Hive"],
    },
    {
      company: "Razer",
      title: "Analytics Engineering Intern",
      dateRange: "Jul 2025 - Dec 2025",
      bullets: [
        "This was where I got my first real exposure to analytics engineering at scale. I delivered stakeholder reporting on 10TB+ of internal data through dbt and Apache Superset, cutting dashboard load times by half and shortening the product team's decision cycles. I also diagnosed data-quality issues in software-usage datasets with Python and SQL, then specified the fixes and handed them off to the data engineering team. It taught me how production data systems actually operate day to day.",
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
        "My first data internship, where I cut logistics costs by $500K+ a year by encoding domain constraints like Hazmat routing rules into a route-optimization model that reduced total route distance by 5%. I built the CI/CD pipeline around it on GCP with Python and SQL so fleet decisions could happen in real time, improving processing speed by 10%. More than the technical work, this shaped how I approach problems, always leading with the business value first.",
      ],
      skills: ["GCP", "Python", "SQL", "CI/CD"],
    },
  ],
  education: [
    {
      school: "Singapore Management University",
      degree: "Bachelor of Science in Economics",
      dateRange: "2022 - 2026",
      description:
        "Discovered my passion for data first through Econometrics and later through hands-on projects. Also did many courses outside of my Economics major to deepen my data skills.",
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
        "ECON207: Intermediate Econometrics",
      ],
    },
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
  ] as Certification[],
  projects: [
    {
      name: "Card Payments Analytics",
      dateRange: "Dec 2026",
      description:
        "Completed as part of Wise's hiring process, this project involves building a data analytics platform to analyze card payment transactions using SQL and Python. \n\n Was a good opportunity for me to practice my data analytics skills. For a detailed walkthrough of the project, check out the GitHub repository by clicking the box.",
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
        "Done as part of my Machine Learning coursework (IS460) at SMU. Had interest in a form of fraud detection and settled on credit card fraud detection.\n\n Built a system using Neural Network, VAE, and CatBoost ensemble that saved $20K+ over the baseline Logistic Regression model. Optimized for production with 0.75 PRAUC and 0.82 recall. ",
      github:
        "https://github.com/dhcchh/Machine-Learning-for-Credit-Card-Fraud-Detection",
      articles: [], // Array of { title: "", link: "" }
      skills: ["Machine Learning", "Deep Learning", "Python", "PyTorch"],
    },
    {
      name: "SMU BIA x ISD Datathon 2025",
      dateRange: "Jan 2025 - Feb 2025",
      description:
        "Built a risk intelligence system for Singapore's Internal Security Department using LLM-powered document extraction. Engineered prompt pipelines with Claude Haiku 3.0 on AWS Bedrock to structure unstructured WikiLeaks and news data.\n\nDelivered interactive Plotly Dash dashboards to visualize trends, relationships, and risks for ISD decision-making. Managed to make it into finals (top 10 out of 80 teams).",
      github:
        "https://github.com/dhcchh/Team-xgboosted---SMU-BIA-Datathon-2025",
      articles: [],
      skills: ["AWS Bedrock", "Transformers", "Python", "Plotly Dash"],
    },
    {
      name: "YouTube Customer Sentiment Analysis",
      dateRange: "May 2025 - Jun 2025",
      description:
        "Inspired by issues with my Nespresso machine, the tutorial video sucked and I took a long time to get the issue fixed. The surface level metrics (1.3mil views, 13:1 LDR ratio) shocked me but the comments told a different story. \n\n As a result, I built an end-to-end NLP pipeline analyzing 250 YouTube comments using RoBERTa transformer model, uncovering 55% negative sentiment hidden behind positive engagement metrics. \n\n Also used regex pattern matching to extract actionable insights - 23 complexity complaints and 18 feature requests - then created a Streamlit dashboard to show the gap between surface KPIs and actual customer satisfaction and present areas for future improvements.",
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
        "Project came about with my interest in exploring the stock market. Decided to structure the it in 2 different areas to learn two specalities. \n\n First, I analyzed SPY's historical and inflation-adjusted returns alongside Federal Reserve data to understand long-term investment performance. Then, I applied time-series techniques like stationarity testing (ADF) and differencing to prep the data, then built a weighted ensemble model (LSTM-PyTorch, Prophet, Monte Carlo) to forecast SPY log returns over the next 20 years with confidence intervals.",
      github: "https://github.com/dhcchh/SPY-Analytics-Forecasting-Project",
      articles: [],
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
        "My first exposure to AI Engineering and building an AI product. We constructed a Retrieval-Augmented Generation (RAG) app for eSports team-building using AWS Bedrock, S3, and Lambda. \n\n Engineered custom chunking strategies with Cohere v3 Embeddings for both structured (csv) and unstructured data (md), then set up vector retrieval pipelines with Pinecone to enhance LLM-based player selection. Deployed on Streamlit Cloud for seamless user interaction.",
      github: "https://github.com/dhcchh/vct-hackathon-esports-manager",
      articles: [],
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
