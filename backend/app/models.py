"""Pydantic models for API requests and responses."""

from datetime import UTC, datetime

from pydantic import BaseModel, EmailStr, Field


class Link(BaseModel):
    label: str
    url: str


class ExperienceItem(BaseModel):
    company: str
    role: str
    location: str | None = None
    start: str
    end: str  # e.g. "Present"
    highlights: list[str] = Field(default_factory=list)


class ProjectItem(BaseModel):
    name: str
    description: str
    tech: list[str] = Field(default_factory=list)
    url: str | None = None  # live demo / primary link
    repo: str | None = None  # source code


class Profile(BaseModel):
    name: str
    tagline: str
    about: str
    location: str | None = None
    email: EmailStr | None = None
    links: list[Link] = Field(default_factory=list)
    experience: list[ExperienceItem] = Field(default_factory=list)
    projects: list[ProjectItem] = Field(default_factory=list)
    skills: list[str] = Field(default_factory=list)


class ContactRequest(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(min_length=1, max_length=5000)


class ContactResponse(BaseModel):
    ok: bool = True
    received_at: datetime = Field(default_factory=lambda: datetime.now(UTC))
