# backend

FastAPI service for the personal website, managed with [uv](https://docs.astral.sh/uv/).

```bash
uv sync            # install deps into .venv from uv.lock
uv run dev         # dev server with reload on http://localhost:8000
uv run pytest      # tests
uv run ruff check .
```

Interactive API docs: http://localhost:8000/docs

## Routes

| Method | Path | Description |
| --- | --- | --- |
| GET | `/api/health` | Liveness probe |
| GET | `/api/profile` | All page content (name, about, experience, projects, links) |
| POST | `/api/contact` | Accept a contact-form submission; appends to `CONTACT_LOG_PATH` |

## Where the content lives

Edit [`app/data.py`](./app/data.py). It's a plain Pydantic object — change the
fields and the frontend reflects it on reload.
