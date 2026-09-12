import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Accent colours available to projects (defined in src/styles/global.css)
export const accents = ['sage', 'coral', 'butter', 'sky', 'lilac', 'blush', 'slate'] as const;

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kicker: z.string(),
      order: z.number(),
      accent: z.enum(accents).default('sage'),
      // 'work' = job/internship, 'personal' = personal or school project. A divider is shown when the group changes.
      group: z.enum(['work', 'personal']).default('personal'),
      lead: z.string().optional(),
      tools: z.array(z.string()).default([]),
      // Short factual bullets shown in a "Highlights" box (no numbers needed)
      highlights: z.array(z.string()).default([]),
      // Measurable outcomes, e.g. { value: "+40%", label: "event attendance" }. Add these as Isabelle gets numbers.
      results: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      // true = work not yet public; renders a compact card without a gallery
      pending: z.boolean().default(false),
      // show in the featured grid at the top of the page
      featured: z.boolean().default(false),
      // number of gallery columns on desktop
      columns: z.number().min(1).max(4).default(3),
      // 'card' = white framed tiles (posters, screenshots); 'bare' = transparent art on the background
      tone: z.enum(['card', 'bare']).default('card'),
      // text on the left or the right of the gallery
      align: z.enum(['left', 'right']).default('left'),
      links: z
        .array(z.object({ label: z.string(), href: z.string() }))
        .default([]),
      images: z
        .array(
          z.object({
            src: image(),
            alt: z.string(),
            // external URL (video, Drive, YouTube). Videos play inline; other links open in a new tab.
            href: z.string().optional(),
            kind: z.enum(['image', 'video']).default('image'),
            // how many grid columns the tile spans on desktop
            span: z.number().min(1).max(4).default(1),
            // CSS aspect-ratio for the tile, e.g. "3 / 4", "16 / 9", "1 / 1", or "auto" for the image's natural size.
            aspect: z.string().optional(),
            // 'cover' fills the tile (crops); 'contain' shows the whole image on a white mat (logos, odd ratios)
            fit: z.enum(['cover', 'contain']).default('cover'),
          }),
        )
        .default([]),
    }),
});

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    date: z.string(),
    order: z.number(),
    current: z.boolean().default(false),
  }),
});

export const collections = { projects, jobs };
