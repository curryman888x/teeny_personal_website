# syntax=docker/dockerfile:1
# Dev image for the FastAPI backend. Source is bind-mounted by compose, so this
# mostly exists to provide the interpreter + installed dependencies.
FROM python:3.11-slim

COPY --from=ghcr.io/astral-sh/uv:0.7.3 /uv /uvx /bin/

# Keep the virtualenv OUTSIDE /app so the compose bind-mount over /app can't
# shadow it with the host's (macOS-built) .venv.
ENV UV_PROJECT_ENVIRONMENT=/opt/venv \
    UV_COMPILE_BYTECODE=1 \
    UV_LINK_MODE=copy \
    PATH=/opt/venv/bin:$PATH

WORKDIR /app

# Dependency layer — cached unless the lockfile changes.
COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-install-project

# Project code (shadowed by the bind-mount at runtime; present for standalone runs).
COPY . .
RUN uv sync --frozen

EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
