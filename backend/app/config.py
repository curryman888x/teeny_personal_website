"""Runtime configuration, driven by environment variables / a local .env file."""

from typing import Annotated

from pydantic import field_validator
from pydantic_settings import BaseSettings, NoDecode, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    # NoDecode: hand the raw env string to the validator below instead of letting
    # pydantic-settings try to JSON-decode it. Accepts a comma-separated list,
    # e.g. CORS_ORIGINS="http://localhost:5173,https://tylerni.dev"
    cors_origins: Annotated[list[str], NoDecode] = ["http://localhost:5173"]

    # Contact submissions are appended here as JSON lines. Swap for a real store later.
    contact_log_path: str = "contact_messages.jsonl"

    @field_validator("cors_origins", mode="before")
    @classmethod
    def _split_origins(cls, value: object) -> object:
        if isinstance(value, str):
            return [item.strip() for item in value.split(",") if item.strip()]
        return value


settings = Settings()
