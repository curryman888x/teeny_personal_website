# teeny personal website

Personal site for Tyler Ni. Two pieces:

| Piece | Stack | Location |
| --- | --- | --- |
| Frontend | React 19 + TypeScript + Vite | [`frontend/`](./frontend) |
| Backend | Python 3.11 + FastAPI, managed with [uv](https://docs.astral.sh/uv/) | [`backend/`](./backend) |

The frontend renders the site and talks to the backend over a small JSON API
(`/api/profile` for the page content, `/api/contact` for the contact form).

## Prerequisites

- [Node.js](https://nodejs.org/) 20+ and npm
- [uv](https://docs.astral.sh/uv/getting-started/installation/) 0.5+

## Quick start

Two ways: Docker (one command, nothing installed on the host but Docker) or
native (lighter, faster reloads).

### Option A — Docker Compose

```bash
docker compose up --build
```

Brings up both services with your source bind-mounted, so edits on the host
reload inside the containers:

- frontend → http://localhost:5173 (Vite dev server, HMR)
- backend → http://localhost:8000 (FastAPI, `--reload`; docs at `/docs`)

Stop with `Ctrl+C`, then `docker compose down`. If file-change reloads feel
unreliable on macOS/Windows, set `CHOKIDAR_USEPOLLING=1` (frontend) /
`WATCHFILES_FORCE_POLLING=1` (backend) in `compose.yaml`.

### Option B — native

Run each in its own terminal.

#### Backend

```bash
cd backend
uv sync                 # create .venv and install deps from the lockfile
uv run dev              # FastAPI on http://localhost:8000  (docs at /docs)
```

#### Frontend

```bash
cd frontend
npm install
npm run dev             # Vite on http://localhost:5173
```

The Vite dev server proxies `/api/*` to `http://localhost:8000`, so start the
backend first (or the profile fetch will just fall back to nothing until it is up).

## Layout

```
teeny_personal_website/
├── compose.yaml             local dev stack (frontend + backend)
├── frontend/
│   ├── public/             served at site root, copied as-is (resume.pdf, favicon, …)
│   │   └── resources/      misc downloadable files
│   ├── src/
│   │   ├── assets/         images imported into components (Vite hashes/optimizes)
│   │   ├── components/     Hero, Experience, Projects, ContactForm
│   │   ├── api.ts          typed fetch helpers
│   │   ├── types.ts        shared response shapes
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── styles.css      single stylesheet, themed with CSS variables
│   ├── index.html
│   ├── Dockerfile          dev image (Vite dev server)
│   └── vite.config.ts      dev proxy /api -> backend
└── backend/
    ├── app/
    │   ├── main.py           FastAPI app + routes
    │   ├── config.py         settings (env-driven)
    │   ├── models.py         Pydantic request/response models
    │   └── data.py           profile content  <-- edit your bio/experience here
    ├── tests/test_api.py
    ├── Dockerfile            dev image (uv + FastAPI)
    └── pyproject.toml
```

## Editing your content

Most of what shows on the page comes from **`backend/app/data.py`**. Update the
`PROFILE` object there (name, tagline, about, experience, projects, links) and the
frontend picks it up on next load.

## Static assets (images, résumé, downloads)

Two homes, by how the file is used:

| Kind | Location | How to reference |
| --- | --- | --- |
| Downloads / files linked by stable URL — résumé PDF, slide decks, favicon, OG image | `frontend/public/` | absolute URL: `<a href="/resume.pdf">`, `href="/resources/deck.pdf"` |
| Images rendered *inside* a component | `frontend/src/assets/` | `import photo from "./assets/me.jpg"` — Vite hashes and optimizes it |

Both are committed and deploy with the frontend build. The repo is private, but
whatever lands in `public/` is downloadable from the live site — fine for a
résumé link, just strip a home address / phone number from the PDF first if it
has one. See `frontend/public/README.md`.

## Common tasks

| Task | Command |
| --- | --- |
| Whole stack (Docker) | `docker compose up --build` |
| Backend dev server | `cd backend && uv run dev` |
| Run backend tests | `cd backend && uv run pytest` |
| Lint/format backend | `cd backend && uv run ruff check . && uv run ruff format .` |
| Add a backend dep | `cd backend && uv add <pkg>` |
| Frontend dev server | `cd frontend && npm run dev` |
| Typecheck + build frontend | `cd frontend && npm run build` |
| Lint frontend | `cd frontend && npm run lint` |

## Building for production

```bash
cd frontend && npm run build      # emits frontend/dist/
```

Serve `frontend/dist/` as static files (Netlify, Vercel, GitHub Pages, S3, …) and
deploy the backend separately (`uv run uvicorn app.main:app` behind a real ASGI
server). Point the frontend at the deployed API by setting `VITE_API_BASE_URL` at
build time, and set `CORS_ORIGINS` on the backend to your site's origin.

## Configuration

### Backend (`backend/.env`, optional — see `.env.example`)

| Var | Default | Purpose |
| --- | --- | --- |
| `CORS_ORIGINS` | `http://localhost:5173` | Comma-separated allowed origins |
| `CONTACT_LOG_PATH` | `contact_messages.jsonl` | Where `/api/contact` appends submissions |

### Frontend (`frontend/.env`, optional)

| Var | Default | Purpose |
| --- | --- | --- |
| `VITE_API_BASE_URL` | `` (same origin / dev proxy) | Base URL of the API in production |
| `VITE_PROXY_TARGET` | `http://localhost:8000` | Where the dev-server proxy sends `/api` (compose sets this to `http://backend:8000`) |

## Keeping PII out of the repo

`.gitignore` excludes `*.pdf` and anything matching `*resume*` / `*cv*` so a
résumé dropped in the working tree never gets committed. If you ever *do* commit
one by accident, removing it in a later commit is not enough — rewrite history
(`git filter-repo`) before pushing anywhere public.
