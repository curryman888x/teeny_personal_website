import type { ContactPayload, Profile } from "./types";

const BASE = import.meta.env.VITE_API_BASE_URL ?? "";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...init,
  });
  if (!res.ok) {
    let detail = res.statusText;
    try {
      const body = await res.json();
      detail = typeof body.detail === "string" ? body.detail : JSON.stringify(body.detail);
    } catch {
      // response had no JSON body; keep the status text
    }
    throw new Error(detail || `Request failed (${res.status})`);
  }
  return res.json() as Promise<T>;
}

export function getProfile(): Promise<Profile> {
  return request<Profile>("/api/profile");
}

export function submitContact(payload: ContactPayload): Promise<{ ok: boolean }> {
  return request<{ ok: boolean }>("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
