# public/

Files here are served **as-is at the site root** and copied verbatim into
`dist/` at build time. Reference them by absolute URL — no import needed.

| Put here | Reference as |
| --- | --- |
| `resume.pdf` | `<a href="/resume.pdf">` |
| `favicon.svg` | `<link rel="icon" href="/favicon.svg">` in `index.html` |
| `og-image.png` | `<meta property="og:image" content="/og-image.png">` |
| `resources/talk-slides.pdf` | `<a href="/resources/talk-slides.pdf">` |

Use this for downloads and files linked by a stable URL. For images that appear
*inside* components, prefer `../src/assets/` so Vite can hash and optimize them.

Note: the repo is private, but **anything in here is served by the deployed
site** to whoever visits it. That's usually the point (a résumé link is meant to
be downloaded) — just don't put a file here you wouldn't hand to a site visitor.
If your résumé PDF carries a home address / phone number, drop those first.
