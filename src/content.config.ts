import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      kicker: z.string(),
      order: z.number(),
      lead: z.string().optional(),
      tools: z.array(z.string()).default([]),
      // number of gallery columns on desktop
      columns: z.number().min(1).max(4).default(3),
      // 'card' = white framed tiles (posters, screenshots); 'bare' = transparent art on the paper
      tone: z.enum(['card', 'bare']).default('card'),
      // text on the left or the right of the gallery
      align: z.enum(['left', 'right']).default('left'),
      links: z
        .array(z.object({ label: z.string(), href: z.string() }))
        .default([]),
      images: z.array(
        z.object({
          src: image(),
          alt: z.string(),
          // external URL (video, Drive, YouTube). Opens in a new tab instead of the lightbox.
          href: z.string().optional(),
          kind: z.enum(['image', 'video']).default('image'),
          // how many grid columns the tile spans on desktop
          span: z.number().min(1).max(4).default(1),
          // CSS aspect-ratio for the tile, e.g. "3 / 4", "16 / 9", "1 / 1", or "auto" for the image's natural size.
          // Defaults to 3 / 4 for single-column tiles and 16 / 9 for wider ones.
          aspect: z.string().optional(),
          // 'cover' fills the tile (crops); 'contain' shows the whole image on a white mat (logos, odd ratios)
          fit: z.enum(['cover', 'contain']).default('cover'),
        }),
      ),
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
