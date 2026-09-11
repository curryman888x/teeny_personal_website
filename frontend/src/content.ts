import type { SiteContent } from "./types";

/**
 * Everything the site renders lives here. Edit this file to update the page.
 *
 * Image / file paths are relative to `frontend/public/` — drop the file there
 * and reference it without a leading slash (e.g. "img/logos/nyu.png"). Missing
 * images degrade gracefully (a lettered placeholder), so you can fill them in
 * over time.
 */
export const content: SiteContent = {
  name: "Tyler Ni",

  hero: {
    greeting: "Hi, I'm",
    image: "img/hero.jpg", // add frontend/public/img/hero.jpg (falls back to a gradient)
  },

  about: {
    heading: "About Me",
    body:
      "Hey! I'm Tyler. I studied at NYU Stern — a B.S. in Business with concentrations " +
      "in Finance and Computing & Data Science, plus Computer Science. I've built data " +
      "and ML infrastructure across internships and full-time work: real-time pricing " +
      "engines, agentic LLM pipelines, and the workflow orchestration and observability " +
      "that keep them reliable. I like building software tools that serve a concrete " +
      "purpose. I'm about to join Palo Alto Networks as a software engineer.",
    portrait: "img/portrait.jpg", // add frontend/public/img/portrait.jpg
    resumeFile: "resume.pdf", // frontend/public/resume.pdf (scrubbed — no address/phone)
    details: [
      { label: "Name", value: "Tyler Ni" },
      { label: "Location", value: "Redwood Shores, CA" },
      { label: "Hobbies", value: "Violin, soccer, climbing" },
      { label: "Favorite Food", value: "Braised pork rice (滷肉飯)" },
      { label: "Current Show", value: "Bleach: Thousand-Year Blood War" },
    ],
  },

  education: [
    {
      school: "New York University — Stern School of Business",
      degree: "B.S. in Business (Finance, Computing & Data Science) · Computer Science",
      start: "Aug 2021",
      end: "May 2025",
      logo: "img/logos/nyu.png",
      courseGroups: [
        {
          label: "Relevant coursework",
          courses:
            "Fundamentals of Machine Learning, Programming & Data Science, " +
            "Statistics / Regression, Data Structures",
        },
      ],
      notes: ["Cumulative GPA 3.7 · Dean's List"],
    },
  ],

  experience: [
    {
      company: "Palo Alto Networks",
      role: "Software Engineer (incoming)",
      location: "Santa Clara, CA",
      start: "Soon",
      end: "Present",
      logo: "img/logos/palo-alto-networks.webp",
      blurb: "Joining as a software engineer — more to come.",
    },
    {
      company: "C.H. Robinson",
      role: "Data Science Intern → Software Engineer I → Software Engineer II",
      location: "Redwood City, CA",
      start: "Jun 2025",
      end: "Sep 2026",
      logo: "img/logos/ch-robinson.png",
      blurb: "Data/ML platform work — pricing engines, workflow orchestration, LLM pipelines.",
      highlights: [
        "Real-time pricing engine over historical moved-load data using geospatial lane " +
          "queries and percentile-based costing with confidence scoring.",
        "Distributed workflow + observability framework: step-level execution, structured " +
          "error classification, Kafka-based event logging.",
        "Multi-agent LLM pipeline (LangGraph, RAG over PGVector) for automated peer " +
          "financial-document analysis.",
      ],
    },
    {
      company: "HP",
      role: "Technical Business Analyst Intern",
      location: "Vancouver, WA",
      start: "May 2024",
      end: "Aug 2024",
      logo: "img/logos/hp.webp",
      blurb: "Forecasting and a hardware-auth demo for the print business.",
      highlights: [
        "Prophet time-series models forecasting HP+ PaaS unit loss.",
        "Databricks SQL dashboards over 10B+ rows informing investment decisions.",
        "Full-stack auth system on a Raspberry Pi (Node.js, C++, Flask) on AWS for IoT " +
          "device comms; explored post-quantum (SPHINCS+) signatures.",
      ],
    },
    {
      company: "Openprise",
      role: "Software Engineering Intern",
      location: "San Mateo, CA",
      start: "May 2023",
      end: "Sep 2023",
      logo: "img/logos/openprise.jpg",
      blurb: "ML classification and an LLM support chatbot.",
      highlights: [
        "Improved bot task-classification accuracy ~30% with a " +
          "CountVectorizer / TF-IDF / LogisticRegression pipeline.",
        "Built a multimodal LLM support chatbot (PDF + video) and its React front end.",
      ],
    },
  ],

  projects: [
    {
      name: "boba_joints",
      subtitle: "A weekly-refreshed census of NYC boba shops",
      description:
        "Discovers shops from Yelp's bubbletea category over an adaptive geo-grid, links " +
        "them to NYC DOHMH inspection records by name + distance, and assigns boroughs via " +
        "PostGIS. Runs as a GitHub Actions cron against a persistent Neon Postgres, with " +
        "contract checks and drift warnings on every ingest. Streamlit + Plotly dashboard.",
      tech: ["Python", "PostGIS", "SQLAlchemy", "Alembic", "Streamlit", "GitHub Actions", "Neon"],
      url: "https://bobajoints-dhemy8pwj2epnyv2iyv9je.streamlit.app/",
      repo: "https://github.com/curryman888x/boba_joints",
      image: "img/projects/boba.png",
    },
    {
      name: "LangAlpha",
      subtitle: "A multi-agent system for equity research",
      description:
        "Orchestrates a supervisor, planner, and specialized agents (researcher, market, " +
        "browser, coder, analyst, reporter) over LangGraph to turn a plain-language question " +
        "about a stock into a structured report. Pulls quantitative data from Polygon and " +
        "Yahoo Finance and qualitative context from Tavily and news APIs, runs deep web " +
        "research with Playwright when needed, and persists runs in MongoDB. FastAPI service, " +
        "packaged with Docker Compose.",
      tech: ["Python", "LangGraph", "LangChain", "FastAPI", "MongoDB", "Playwright", "Docker"],
      repo: "https://github.com/Chen-zexi/LangAlpha",
      image: "img/projects/langalpha.png",
    },
  ],

  // Optional photo section, like the reference site's "Baseball" carousel. Add
  // images under frontend/public/img/gallery/ and uncomment:
  // gallery: {
  //   title: "Outside Work",
  //   intro: "A few photos.",
  //   images: [
  //     { src: "img/gallery/1.jpg", alt: "..." },
  //     { src: "img/gallery/2.jpg", alt: "..." },
  //   ],
  // },

  contact: {
    heading: "Contact Me!",
    blurb: "The fastest way to reach me is email.",
    email: "tan4742@stern.nyu.edu",
    links: [
      { label: "GitHub", url: "https://github.com/curryman888x" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/tyler-ni/" },
    ],
  },

  // Shown as a tag row under the About section. Empty = hidden.
  skills: [],
};
