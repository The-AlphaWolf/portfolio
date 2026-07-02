# Arijit Paul — Portfolio

Terminal-inspired personal portfolio built with **Next.js (App Router)**,
**Tailwind CSS**, and **Framer Motion**, exported as a fully static site —
no server required, ready for **GitHub Pages**.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build the static export

```bash
npm run build
```

The site is written to `out/` as plain static files (`output: 'export'` in
[next.config.ts](next.config.ts)). Preview it with any static server, e.g.:

```bash
npx serve out
```

## Deploy to GitHub Pages

### Option A — GitHub Actions (recommended, zero config)

1. Create a GitHub repo and push this project to its `main` branch:
   ```bash
   git init
   git add -A
   git commit -m "Portfolio site"
   git remote add origin https://github.com/<user>/<repo>.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Build and deployment → Source: "GitHub Actions"**.
3. Push to `main` (or run the workflow manually). The included
   [.github/workflows/deploy.yml](.github/workflows/deploy.yml) builds the
   export and publishes it.

The workflow figures out the correct `basePath` automatically — it works for
both a project site (`https://<user>.github.io/<repo>/`) and a user site
(`https://<user>.github.io/`) without editing any config.

### Option B — manual build & upload

GitHub Pages project sites are served from a sub-path (`/<repo-name>`), so
Next.js needs a `basePath` baked in at build time. It is read from the
`NEXT_PUBLIC_BASE_PATH` env var (see [next.config.ts](next.config.ts)):

```bash
# For https://<user>.github.io/<repo-name>/
NEXT_PUBLIC_BASE_PATH=/repo-name npm run build

# For a user site (https://<user>.github.io/) just:
npm run build
```

> **Windows note:** Git Bash rewrites arguments starting with `/` into
> Windows paths. Either prefix the command with `MSYS_NO_PATHCONV=1`, or in
> PowerShell run: `$env:NEXT_PUBLIC_BASE_PATH = "/repo-name"; npm run build`

Then publish the `out/` folder (e.g. push it to a `gh-pages` branch and point
**Settings → Pages** at it). The `public/.nojekyll` file is included so Pages
serves the `_next/` assets folder correctly.

## Where to edit content

All copy and links live in `src/data/` — components don't hardcode content:

| File | Contains |
| --- | --- |
| `src/data/site.ts` | Name, tagline, email/phone, GitHub/LinkedIn URLs, **Formspree endpoint**, about bio, hero terminal lines |
| `src/data/experience.ts` | Experience timeline entries |
| `src/data/projects.ts` | Project cards (update the placeholder `repo` URLs) |
| `src/data/skills.ts` | Skill groups |
| `src/data/education.ts` | Education entries |
| `src/data/posts.ts` | **Placeholder blog posts** — swap in real ones here |

Other common tweaks:

- **Contact form**: create a free form at [formspree.io](https://formspree.io)
  and paste its endpoint into `formspreeEndpoint` in `src/data/site.ts`.
- **Photo**: add an image to `public/` and follow the commented `<Image>`
  swap instructions in `src/components/Hero.tsx`.
- **Resume**: replace `public/resume.pdf`.
- **Theme colors**: design tokens in `src/app/globals.css` (`@theme` block).

## Structure

```
src/
  app/         layout (metadata, font), page (section order), globals.css, icon.svg
  components/  Nav, Hero, About, Experience, Projects, Skills,
               Education, Blog, Contact, Footer + shared Section/Reveal/TypingTerminal
  data/        all content (see table above)
public/        resume.pdf, .nojekyll
```
