# Isabelle Carrou – Portfolio site

Single-page portfolio for Isabelle, built with [Astro 5](https://astro.build) + Tailwind 4.
Warm, colour-forward layout built for marketing/social hiring managers: work above the fold, results and highlights per project, inline video. Headlines use Anton (from her portfolio PDF), body is Poppins.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Dev server at `localhost:4321`              |
| `npm run build`   | Production build to `./dist/`               |
| `npm run preview` | Preview the production build locally        |

## Editing content

Everything Isabelle would want to change lives in three places:

- `src/data/profile.ts` – name, title, intro, availability line, email, LinkedIn, tools, skills, education.
- `src/assets/profile.jpg` – optional. Drop a square headshot here and it appears in the hero and about section.
- `src/content/projects/*.md` – one file per project. Frontmatter holds the title, kicker, tools, links
  and the image list (with optional `href` for a Drive/YouTube link and `kind: video` for reels).
  The markdown body is the project write-up. `order` controls position, `align` flips text left/right,
  `columns` sets the gallery grid, `tone: bare` drops the white frame (used for the Roots of Waste cutouts).
  `accent` picks the section colour, `highlights` are short factual bullets, `results` are metric tiles (`{ value: "+40%", label: "attendance" }`),
  `pending: true` renders a compact card for work that isn't public yet, `featured: true` puts the first image in the top grid.
  Video images (`kind: video`) with a YouTube or Google Drive `href` play inline in the lightbox; Drive files must be shared as "anyone with the link".
- `src/content/jobs/*.md` – resume entries.

Artwork lives in `src/assets/work/<project>/` and is optimised at build time. Drop new images there and
reference them from the project file. PDFs (resume + full portfolio) live in `public/`. The resume is generated from `resume/resume.html` (styled) or `resume/resume-simple.html` (plain) with headless Chrome `--print-to-pdf`; copy the output over `public/Isabelle-Carrou-Resume.pdf`.

The original PDFs the site was built from are kept in `source-pdfs/`.

## Deploying

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`.
The custom domain is `isabelle-carrou.com` (`public/CNAME` + `site` in `astro.config.mjs`).
