// Vite sets BASE_URL from `base` in vite.config.ts. It always ends with "/".
// Root deploy -> "/", GitHub project page -> "/teeny_personal_website/".
const BASE = import.meta.env.BASE_URL;

/** Resolve a path stored in content.ts (relative to frontend/public/) to a URL. */
export function asset(path: string): string {
  return BASE + path.replace(/^\/+/, "");
}
