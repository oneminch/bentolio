import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';
import { useNuxt } from '@nuxt/kit';
import { join } from 'path';

const { options } = useNuxt();
const cwd = join(options.rootDir, 'content');

export default defineContentConfig({
  collections: {
    posts: defineCollection({
      type: 'page',
      source: {
        cwd,
        include: 'posts/**'
      },
      schema: z.object({
        date: z.optional(z.string())
      })
    })
  }
});
