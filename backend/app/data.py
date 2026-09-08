"""Page content.

This is the one file you'll edit most often. Everything the frontend renders
comes from the `PROFILE` object below. Keep it truthful and current.
"""

from app.models import ExperienceItem, Link, Profile, ProjectItem

PROFILE = Profile(
    name="Tyler Ni",
    tagline="Software engineer. Incoming SWE at Palo Alto Networks.",
    about=(
        "I build full-stack systems with a lean toward data and ML infrastructure — "
        "pricing engines, agentic pipelines, and the orchestration/observability glue "
        "that keeps them honest. NYU Stern '25 (CS + Finance). Soon joining Palo Alto "
        "Networks as a software engineer."
    ),
    location="Redwood Shores, CA",
    email="tan4742@stern.nyu.edu",
    links=[
        Link(label="GitHub", url="https://github.com/curryman888x"),
        Link(label="LinkedIn", url="https://www.linkedin.com/in/tyler-ni/"),
        Link(label="Email", url="mailto:tan4742@stern.nyu.edu"),
    ],
    experience=[
        ExperienceItem(
            company="Palo Alto Networks",
            role="Software Engineer (incoming)",
            location="Santa Clara, CA",
            start="Soon",
            end="Present",
            highlights=[
                "Joining as a software engineer — details to come.",
            ],
        ),
        ExperienceItem(
            company="C.H. Robinson",
            role="Software Engineer",
            location="Redwood City, CA",
            start="Jun 2025",
            end="2026",
            highlights=[
                "Built a real-time pricing engine over historical moved-load data using "
                "geospatial lane queries and percentile-based costing with confidence scoring.",
                "Built a distributed workflow + observability framework with step-level "
                "execution, structured error classification, and Kafka-based event logging.",
                "Shipped a multi-agent LLM pipeline (LangGraph, RAG over PGVector) for "
                "automated peer financial-document analysis.",
            ],
        ),
        ExperienceItem(
            company="HP",
            role="Technical Business Analyst Intern",
            location="Vancouver, WA",
            start="May 2024",
            end="Aug 2024",
            highlights=[
                "Prophet time-series models forecasting HP+ PaaS unit loss.",
                "Databricks SQL dashboards over 10B+ rows informing investment decisions.",
                "Full-stack auth system on a Raspberry Pi (Node.js, C++, Flask) deployed on "
                "AWS for IoT device communication; explored post-quantum (SPHINCS+) signatures.",
            ],
        ),
        ExperienceItem(
            company="Openprise",
            role="Software Engineering Intern",
            location="San Mateo, CA",
            start="May 2023",
            end="Sep 2023",
            highlights=[
                "Improved bot task-classification accuracy ~30% with a "
                "CountVectorizer/TF-IDF/LogisticRegression pipeline.",
                "Built a multimodal LLM support chatbot (PDF + video) and its React "
                "front end for project creation.",
            ],
        ),
    ],
    projects=[
        ProjectItem(
            name="boba_joints",
            description="A weekly-refreshed census of NYC boba shops — location, open/closed "
            "status, and rough first-operating date. Discovers shops from Yelp's bubbletea "
            "category over an adaptive geo-grid, links them to NYC DOHMH inspection records by "
            "name + distance, and assigns boroughs via PostGIS. Runs as a GitHub Actions cron "
            "against a persistent Neon Postgres, with contract checks and drift warnings on "
            "every ingest; Streamlit + Plotly dashboard.",
            tech=[
                "Python",
                "PostgreSQL / PostGIS",
                "SQLAlchemy",
                "Alembic",
                "Streamlit",
                "Plotly",
                "Docker",
                "GitHub Actions",
                "Neon",
            ],
            url="https://bobajoints-dhemy8pwj2epnyv2iyv9je.streamlit.app/",
            repo="https://github.com/curryman888x/boba_joints",
        ),
        ProjectItem(
            name="This website",
            description="React + TypeScript front end, FastAPI backend, uv-managed. "
            "Content is served from a small JSON API.",
            tech=["React", "TypeScript", "Vite", "FastAPI", "uv"],
        ),
    ],
    skills=[
        "Python",
        "TypeScript",
        "React",
        "FastAPI",
        "PostgreSQL",
        "Kafka",
        "LangGraph",
        "PyTorch",
        "SQL",
        "C / C++",
    ],
)
