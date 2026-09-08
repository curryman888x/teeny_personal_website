"""Entry point for `uv run dev`."""

import uvicorn


def dev() -> None:
    uvicorn.run(
        "app.main:app",
        host="127.0.0.1",
        port=8000,
        reload=True,
    )


if __name__ == "__main__":
    dev()
