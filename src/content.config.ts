import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

const docs = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './content',
  }),
  schema: docsSchema({
    extend: z.object({
      department: z.enum(['banking', 'hr', 'sales']).optional(),
      level: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
      experience: z.enum(['copilot-chat', 'researcher', 'analyst']).optional(),
    }),
  }),
});

export const collections = { docs };