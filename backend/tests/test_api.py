from fastapi.testclient import TestClient

from app.config import settings
from app.main import app

client = TestClient(app)


def test_health():
    resp = client.get("/api/health")
    assert resp.status_code == 200
    assert resp.json() == {"status": "ok"}


def test_profile_shape():
    resp = client.get("/api/profile")
    assert resp.status_code == 200
    body = resp.json()
    assert body["name"]
    assert isinstance(body["experience"], list)
    assert isinstance(body["projects"], list)


def test_contact_ok(tmp_path, monkeypatch):
    log = tmp_path / "messages.jsonl"
    monkeypatch.setattr(settings, "contact_log_path", str(log))

    resp = client.post(
        "/api/contact",
        json={"name": "Jane", "email": "jane@example.com", "message": "hi"},
    )
    assert resp.status_code == 200
    assert resp.json()["ok"] is True
    assert log.read_text().count("\n") == 1


def test_contact_rejects_bad_email():
    resp = client.post(
        "/api/contact",
        json={"name": "Jane", "email": "not-an-email", "message": "hi"},
    )
    assert resp.status_code == 422
