export type ProjectCategory = 'All' | 'GenAI & Agents' | 'Cloud & Backend' | 'Data & ML';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  period: string;
  role: string;
  summary: string;
  impactMetric: string;
  impactLabel: string;
  highlights: string[];
  architectureFlow: string[];
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export const PORTFOLIO_CONFIG = {
  name: 'Md Shabaz Khan',
  shortName: 'Shabaz Khan',
  title: 'Generative AI & Backend Systems Engineer',
  tagline:
    'Building production multi-agent workflows, hybrid & graph-based RAG pipelines, and resilient cloud backends.',
  aboutSummary:
    'Generative AI Engineer and Data Science Consultant with 2+ years of experience shipping production AI applications. I specialize in multi-agent orchestration (LangGraph, structured function calling), hybrid & Neo4j Graph-RAG retrieval, LLM reliability engineering, and event-driven cloud APIs across Azure and GCP.',
  location: 'India',
  availability: 'Open to AI Engineer & Backend Roles',
  email: 'sk8789490031@gmail.com',
  // Update these URLs with your actual profile links and optional resume PDF in public/
  githubUrl: 'https://github.com/',
  linkedinUrl: 'https://www.linkedin.com/',
  resumeUrl: '', // e.g. '/Md_Shabaz_Khan_Resume.pdf' once placed inside public/
  // Optional Formspree endpoint (e.g. 'https://formspree.io/f/your-id'). Leave empty to use mailto fallback.
  formspreeEndpoint: '',
  profileImage: '/profile.jpg',
};

export const HERO_METRICS = [
  { value: '2+ yrs', label: 'Production AI & Data' },
  { value: '99.9%', label: 'API System Uptime' },
  { value: '100+', label: 'Concurrent AI Sessions' },
  { value: '40%', label: 'Workflow Efficiency Gain' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'lesson-agent-edu',
    title: 'GenAI Education Platform & LessonAgent',
    subtitle: 'Multi-Agent Orchestration + Neo4j Graph-RAG',
    category: 'GenAI & Agents',
    period: 'Oct 2025 – Present',
    role: 'Data Science Consultant @ FnMathLogic',
    summary:
      'Architected a production teacher-guide generation platform powered by LessonAgent — a multi-agent orchestration framework combining hybrid vector/keyword search, Neo4j knowledge graphs, and resilient Azure OpenAI pipelines.',
    impactMetric: '40% / 99.9%',
    impactLabel: 'Efficiency Gain & System Uptime',
    highlights: [
      'Designed LessonAgent with task decomposition, context management, and agent coordination — improving processing speed by 30%.',
      'Built hybrid retrieval pipelines in Azure AI Search (keyword + vector) and graph-based retrieval via Neo4j knowledge graphs for deeper contextual reasoning.',
      'Engineered Azure OpenAI infrastructure with retry mechanisms, rate-limit handling, and fallback strategies.',
      'Deployed event-driven APIs using Azure Functions and Azure Storage achieving 99.9% system uptime.',
    ],
    architectureFlow: [
      'Event-Driven Trigger (Azure Functions)',
      'Task Decomposition (LessonAgent)',
      'Hybrid Search (Azure AI Search) + Graph Traversal (Neo4j)',
      'Resilient LLM Synthesis (Azure OpenAI w/ Fallback)',
    ],
    techStack: [
      'Python',
      'Azure OpenAI',
      'Azure AI Search',
      'Neo4j',
      'Cypher',
      'LangGraph',
      'Azure Functions',
      'Azure Storage',
    ],
  },
  {
    id: 'help-support-bot',
    title: 'Autonomous Help & Support Agent',
    subtitle: 'Confidence-Routed Hybrid RAG & Token Auditing',
    category: 'GenAI & Agents',
    period: 'Oct 2025 – Present',
    role: 'Data Science Consultant @ FnMathLogic',
    summary:
      'Engineered an autonomous multi-turn support agent using structured function calling to synthesize numbered platform UI walkthroughs with citations and full token telemetry.',
    impactMetric: 'End-to-End',
    impactLabel: 'Token & Verification Auditing',
    highlights: [
      'Built autonomous multi-turn agent workflows with Azure OpenAI (gpt-5.4-nano-2) and structured function calling.',
      'Implemented hybrid RAG retrieval in Azure AI Search combining text-embedding-3-small vectors with BM25 keyword matching.',
      'Designed confidence-based query routing between verified FAQs and dynamically synthesized documentation responses.',
      'Instrumented token usage auditing across embeddings, verification gates, and agent iterations to optimize context-window overhead.',
    ],
    architectureFlow: [
      'User Query',
      'Hybrid Retrieval (text-embedding-3-small + BM25)',
      'Confidence Gate (Verified FAQ vs. Dynamic Synthesis)',
      'Structured Function Calling + Token Auditor',
    ],
    techStack: [
      'Azure OpenAI',
      'Azure AI Search',
      'BM25',
      'text-embedding-3-small',
      'Function Calling',
      'Python',
      'REST APIs',
    ],
  },
  {
    id: 'interview-chatbot',
    title: 'AI Interview & Evaluation Backend',
    subtitle: 'High-Concurrency GenAI Hiring System',
    category: 'Cloud & Backend',
    period: 'Aug 2024 – Sep 2025',
    role: 'Analyst @ FnMathLogic',
    summary:
      'Developed and containerized a scalable GenAI interview automation system with dynamic questioning, structured LLM rubric evaluation, and Firebase user/media management.',
    impactMetric: '100+ / 30%',
    impactLabel: 'Concurrent Sessions & Screening Saved',
    highlights: [
      'Built dynamic interview flows and LLM-based evaluation pipelines using prompt engineering and structured scoring.',
      'Reduced manual candidate screening effort by 30% with consistent automated contextual feedback.',
      'Deployed a containerized Python backend on GCP Cloud Run supporting 100+ concurrent interview sessions.',
      'Integrated Firebase Authentication, Firestore Database, and Storage for user state and media handling.',
    ],
    architectureFlow: [
      'Candidate Session (Firebase Auth)',
      'Containerized API (GCP Cloud Run)',
      'Dynamic Questioning & Scoring (OpenAI API)',
      'Evaluation & Media Persistence (Firestore / Storage)',
    ],
    techStack: [
      'Python',
      'OpenAI API',
      'GCP Cloud Run',
      'Docker',
      'Firebase Auth',
      'Firestore',
      'Firebase Storage',
      'REST APIs',
    ],
  },
  {
    id: 'vision-deployment',
    title: 'Computer Vision Inference Platform',
    subtitle: 'Cloud Model Serving & Interactive Frontend',
    category: 'Cloud & Backend',
    period: 'Aug 2024 – Sep 2025',
    role: 'Analyst @ FnMathLogic',
    summary:
      'Deployed a computer vision model on Google Cloud Platform with an integrated backend inference pipeline, secure Firebase media storage, and user-facing web interface.',
    impactMetric: 'GCP + Web',
    impactLabel: 'End-to-End Inference Pipeline',
    highlights: [
      'Configured GCP cloud infrastructure and backend APIs to serve computer vision model inference reliably.',
      'Built an interactive frontend interface allowing users to submit inputs and inspect model predictions.',
      'Integrated Firebase services for authenticated access and secure media artifact storage.',
    ],
    architectureFlow: [
      'Frontend Input Upload',
      'Firebase Auth & Media Storage',
      'Backend Inference API (GCP)',
      'Structured Prediction Output',
    ],
    techStack: ['GCP', 'Python', 'Firebase', 'REST APIs', 'Frontend UI'],
  },
  {
    id: 'bi-analytics-pipelines',
    title: 'Automated KPI & BI Analytics Suite',
    subtitle: 'SQL Optimization & Executive Dashboards',
    category: 'Data & ML',
    period: 'Aug 2024 – Sep 2025',
    role: 'Analyst @ FnMathLogic',
    summary:
      'Designed KPI-driven automated reporting frameworks and optimized SQL data models across Power BI and Apache Superset for operational visibility.',
    impactMetric: '40% / 30%',
    impactLabel: 'Less Manual Effort & Faster Queries',
    highlights: [
      'Built interactive business and operational KPI dashboards in Power BI and Apache Superset.',
      'Automated reporting pipelines, cutting manual reporting effort by 40%.',
      'Optimized SQL queries and underlying data models, improving dashboard execution time by 30%.',
    ],
    architectureFlow: [
      'Operational Data Sources',
      'Optimized SQL Data Models',
      'Automated KPI Pipelines',
      'Power BI & Apache Superset Dashboards',
    ],
    techStack: ['SQL', 'Python', 'Power BI', 'Apache Superset', 'Data Modeling'],
  },
  {
    id: 'healthcare-nlp',
    title: 'Healthcare NLP Classification Pipeline',
    subtitle: 'Feature Engineering & Model Evaluation',
    category: 'Data & ML',
    period: 'Aug 2024 – Sep 2025',
    role: 'Analyst @ FnMathLogic',
    summary:
      'Developed end-to-end NLP preprocessing, TF-IDF vectorization, and supervised text classification pipelines for healthcare datasets.',
    impactMetric: '+15%',
    impactLabel: 'Classification Accuracy Lift',
    highlights: [
      'Cleaned and analyzed large healthcare and NLP text datasets to uncover actionable patterns.',
      'Engineered domain features and TF-IDF representations, improving classification accuracy by 15%.',
      'Benchmarked multiple supervised ML models and presented findings to technical and business stakeholders.',
    ],
    architectureFlow: [
      'Raw Healthcare Text',
      'Preprocessing & Cleaning',
      'TF-IDF Vectorization & Feature Engineering',
      'Model Benchmarking & Reporting',
    ],
    techStack: ['Python', 'NLP', 'TF-IDF', 'Scikit-learn', 'Pandas', 'SQL'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    company: 'FnMathLogic Consulting Services',
    role: 'Data Science Consultant (GenAI & Backend)',
    period: 'Oct 2025 – Present',
    summary:
      'Leading architecture and production delivery of multi-agent GenAI platforms, hybrid + knowledge-graph RAG pipelines, and event-driven cloud backends.',
    highlights: [
      'Architected LessonAgent multi-agent orchestration and RAG pipelines for an EdTech platform (+40% efficiency, +30% speed, 99.9% API uptime).',
      'Built hybrid search (Azure AI Search vector + BM25) and Neo4j Graph-RAG workflows with entity linking and Cypher queries.',
      'Engineered Azure OpenAI fault-tolerance (retries, rate-limit handling, fallbacks) and end-to-end token auditing.',
    ],
    tags: ['Azure OpenAI', 'LangGraph', 'Neo4j', 'Azure AI Search', 'Azure Functions'],
  },
  {
    company: 'FnMathLogic Consulting Services',
    role: 'Analyst (AI Systems, Cloud & Analytics)',
    period: 'Aug 2024 – Sep 2025',
    summary:
      'Built and deployed containerized GenAI and CV applications on GCP alongside high-impact NLP classification pipelines and BI reporting systems.',
    highlights: [
      'Shipped a containerized GenAI Interview ChatBot on GCP Cloud Run supporting 100+ concurrent sessions (-30% manual screening).',
      'Deployed a computer vision inference solution on GCP with Firebase authentication, storage, and frontend integration.',
      'Improved healthcare NLP classification accuracy by 15% and reduced manual BI reporting effort by 40% via SQL optimization.',
    ],
    tags: ['GCP Cloud Run', 'OpenAI API', 'Firebase', 'Python', 'SQL', 'Power BI'],
  },
];

export const EDUCATION = {
  institution: 'Birla Institute of Technology, Mesra',
  degree: 'Integrated M.Sc. in Mathematics and Computing',
  period: '2019 – 2024',
  score: 'CGPA: 76.10%',
  leadership: [
    {
      title: 'Bitotsav — Security Member',
      year: '2023',
      detail: 'Coordinated with a core volunteer team to manage security operations for BIT Mesra’s flagship fest.',
    },
    {
      title: 'EPAC — Volunteer',
      year: 'Campus Initiative',
      detail: 'Participated in an environmental sustainability drive, planting over 100 trees on campus.',
    },
  ],
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'genai',
    title: 'Generative AI & Agents',
    description: 'Designing stateful, reliable multi-agent workflows and structured LLM pipelines.',
    skills: [
      'Azure OpenAI',
      'OpenAI API',
      'Agentic AI',
      'Multi-Agent Systems',
      'LangGraph',
      'Function Calling',
      'Prompt Engineering',
      'LLM Evaluation',
      'Token Auditing',
    ],
  },
  {
    id: 'rag',
    title: 'RAG & Hybrid Search',
    description: 'Combining dense embeddings with lexical retrieval and confidence routing.',
    skills: [
      'RAG Pipelines',
      'Azure AI Search',
      'Hybrid Search',
      'Vector Search',
      'BM25',
      'Semantic Search',
      'Embeddings',
      'text-embedding-3-small',
    ],
  },
  {
    id: 'knowledge',
    title: 'Knowledge Systems',
    description: 'Connecting structured domain knowledge with LLM reasoning.',
    skills: ['Neo4j', 'Knowledge Graphs', 'Graph-Based RAG', 'Entity Linking', 'Cypher'],
  },
  {
    id: 'backend',
    title: 'Cloud & Backend',
    description: 'Event-driven serverless APIs, containerized services, and auth/storage.',
    skills: [
      'Python',
      'REST APIs',
      'Azure Functions',
      'Azure Storage',
      'GCP Cloud Run',
      'Firebase Auth & Firestore',
      'Event-Driven Architecture',
      'C / C++',
    ],
  },
  {
    id: 'ml',
    title: 'Machine Learning & NLP',
    description: 'Classical ML modeling, text classification, and rigorous evaluation.',
    skills: [
      'NLP',
      'Supervised Learning',
      'Text Classification',
      'TF-IDF',
      'Feature Engineering',
      'Logistic Regression',
      'Model Evaluation',
    ],
  },
  {
    id: 'data',
    title: 'Data & BI Engineering',
    description: 'Query optimization, KPI frameworks, and executive reporting.',
    skills: ['SQL', 'Pandas', 'NumPy', 'PySpark', 'Power BI', 'Apache Superset', 'Git & GitHub', 'Postman'],
  },
];
