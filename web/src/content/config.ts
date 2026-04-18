import { defineCollection, z } from 'astro:content';

const devlog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1).max(120),
    date: z.coerce.date(),
    summary: z.string().min(1).max(280),
    push: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { devlog };
