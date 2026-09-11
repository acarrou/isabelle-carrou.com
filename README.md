# Isabelle Carrou – Portfolio site

Single-page portfolio for Isabelle, built with [Astro 5](https://astro.build) + Tailwind 4.
The look is taken from her portfolio PDF: warm paper background, condensed uppercase headlines (Anton), Poppins body text.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Dev server at `localhost:4321`              |
| `npm run build`   | Production build to `./dist/`               |
| `npm run preview` | Preview the production build locally        |

## Editing content

Everything Isabelle would want to change lives in three places:

- `src/data/profile.ts` – name, title, blurb, email, LinkedIn, tools, skills, education.
- `src/content/projects/*.md` – one file per project. Frontmatter holds the title, kicker, tools, links
  and the image list (with optional `href` for a Drive/YouTube link and `kind: video` for reels).
  The markdown body is the project write-up. `order` controls position, `align` flips text left/right,
  `columns` sets the gallery grid, `tone: bare` drops the white frame (used for the Roots of Waste cutouts).
- `src/content/jobs/*.md` – resume entries.

Artwork lives in `src/assets/work/<project>/` and is optimised at build time. Drop new images there and
reference them from the project file. PDFs (resume + full portfolio) live in `public/`.

The original PDFs the site was built from are kept in `source-pdfs/`.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
The custom domain is `isabelle-carrou.com` (`public/CNAME` + `site` in `astro.config.mjs`).
