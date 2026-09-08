"""FastAPI application: routes and app wiring."""

import json
from pathlib import Path

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.config import settings
from app.data import PROFILE
from app.models import ContactRequest, ContactResponse, Profile

app = FastAPI(title="teeny personal website API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/profile", response_model=Profile)
def get_profile() -> Profile:
    return PROFILE


@app.post("/api/contact", response_model=ContactResponse)
def submit_contact(payload: ContactRequest) -> ContactResponse:
    response = ContactResponse()
    record = {
        "received_at": response.received_at.isoformat(),
        **payload.model_dump(),
    }
    log_path = Path(settings.contact_log_path)
    with log_path.open("a", encoding="utf-8") as fh:
        fh.write(json.dumps(record) + "\n")
    return response
