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
    paragraphs: [
      "Hey there 👋, I’m Ding Hao, a Data Engineer with a BSc in Economics. I first got interested in data through econometrics, then explored it further through internships and personal projects. My data-analytics internships involved more data-engineering work than I expected, and I found I enjoyed that part most. That is what drew me deeper into data engineering.",
      "At university, grades were never my priority. They are a superficial and short-lived signal; what really matters is learning continuously, building things, and gaining experience. This is now my guiding principle in developing my tech career.",
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
    title: "Blog",
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
        "My first full-time data engineering role. I build offline pipelines with Spark SQL, Xiaomi’s internal DAG scheduling platform, and extensive use of Iceberg and Hive tables.",
        "Governance and privacy are a big focus, especially supporting a Chinese company in privacy-sensitive markets like North America and Europe.",
        "Building a backend app for governed data access. My first real exposure to API development, Java, and Spring Boot.",
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
        "Owned analytics end to end on Wise’s Send High Volume team. This covered pipelines and product analysis.",
        "Got hands-on with Snowflake, dbt, and Airflow. Did plenty of pipeline optimisation work.",
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
        "Project came about with my interest in exploring the stock market. Decided to structure the it in 2 different areas to learn two specalities.",
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
