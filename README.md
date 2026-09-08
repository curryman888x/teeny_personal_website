# teeny personal website

Personal site for Tyler Ni. **Static** — a React + TypeScript single page, built
with Vite, deployed to GitHub Pages. No server at runtime.

All page content lives in one file: **`frontend/src/content.ts`**.

> `backend/` is a FastAPI service kept in the repo as a reference/portfolio piece.
> It is **not** part of the live site and nothing in `frontend/` calls it.

## Prerequisites

- [Node.js](https://nodejs.org/) 20+ and npm

## Run it locally

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
```

Other commands:

| Task | Command |
| --- | --- |
| Dev server | `cd frontend && npm run dev` |
| Typecheck + production build | `cd frontend && npm run build` (emits `frontend/dist/`) |
| Preview the build | `cd frontend && npm run preview` |
| Lint | `cd frontend && npm run lint` |

## Layout

```
frontend/
├── public/                served as-is at the site root
│   ├── img/               hero.jpg, portrait.jpg, logos/, projects/, gallery/
│   └── resume.pdf         (add this — a scrubbed copy)
├── src/
│   ├── content.ts         ← ALL page content lives here
│   ├── types.ts           shapes for content.ts
│   ├── base.ts            asset() helper (handles the GitHub Pages base path)
│   ├── components/        Nav, Hero, About, Education, Experience,
│   │                      Projects, Gallery, Contact, SectionHeading, Logo
│   ├── App.tsx            section order
│   ├── main.tsx
│   └── styles.css         one stylesheet
└── vite.config.ts

.github/workflows/deploy.yml   builds frontend/ and publishes to GitHub Pages
```

## Editing content

Open **`frontend/src/content.ts`** and edit the `content` object: name, hero,
about + "More Details" rows, education, experience, projects, optional photo
gallery, contact links, skills. Types in `types.ts` keep you honest.

### Images and the résumé

Drop files in **`frontend/public/`** and reference them from `content.ts` by a
path with **no leading slash** (e.g. `img/logos/nyu.png`). Missing images
degrade to a lettered placeholder, so you can fill them in over time.

Expected files (all optional):

| Path | Used for |
| --- | --- |
| `img/hero.jpg` | full-screen hero background (falls back to a gradient) |
| `img/portrait.jpg` | circular photo in About |
| `img/logos/*.png` | school / company marks |
| `img/projects/*.png` | project card previews |
| `img/gallery/*.jpg` | optional carousel (uncomment `gallery` in `content.ts`) |
| `resume.pdf` | the "Resume ↓" link in About — use a copy without home address / phone |

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and deploys on every push to `main`.

The workflow's `actions/configure-pages` step enables Pages automatically on the
first run. If that step can't (org policy, permissions), enable it by hand:
repo **Settings → Pages → Build and deployment → Source: GitHub Actions**, then
re-run the job. Until Pages is enabled the `deploy` job fails with
`404 ... Ensure GitHub Pages has been enabled` — making the repo public is not
enough, the source still has to be set.

> **Private repo:** GitHub Pages for a private repository requires a paid plan
> (GitHub Pro / Team / Enterprise). On the free plan, either make the repo
> public or deploy the static build elsewhere — **Cloudflare Pages** and
> **Netlify** both host from a private repo for free, auto-deploy on push, and
> just need build command `npm run build`, output dir `frontend/dist`, and
> (for Cloudflare) build root `frontend`. Set `VITE_BASE=/` for those.

The workflow builds with `VITE_BASE=/teeny_personal_website/`, so the site lands
at `https://curryman888x.github.io/teeny_personal_website/`.

- **User site instead** (`curryman888x.github.io`): rename the repo to
  `curryman888x.github.io` and change `VITE_BASE` to `/` in the workflow.
- **Custom domain**: set `VITE_BASE: /`, add `frontend/public/CNAME` containing
  the domain, and point DNS at GitHub Pages.

## Contact form (optional)

The Contact section always shows email + social links. To also render a working
message form, create a [Formspree](https://formspree.io) form and set its
endpoint as a repository variable / build env `VITE_FORMSPREE_ENDPOINT`
(add it to the `npm run build` step's `env:` in the workflow). Without it, the
form simply isn't shown.

## PII / the repo

The repo is private. `.gitignore` still blocks `/*.pdf` at the repo root so the
original résumé upload sitting there can't be committed by accident — put a
scrubbed copy at `frontend/public/resume.pdf` instead. Anything in
`frontend/public/` ships to the live (public) site, so don't put a file there
you wouldn't hand to a visitor.
