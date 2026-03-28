import { defineContentConfig, defineCollection } from '@nuxt/content';
import { z } from 'zod';
import { useNuxt } from "@nuxt/kit";
import { join } from "path";

const { options } = useNuxt()
const cwd = join(options.rootDir, "content")

export default defineContentConfig({
	collections: {
		posts: defineCollection({
			type: 'page',
			source: {
				cwd,
				include: 'posts/**',
			},
			schema: z.object({
				published_on: z.optional(z.string())
			})
		}),
		projects: defineCollection({
			type: 'data',
			source: {
				cwd,
				include: 'projects.json',
			},
			schema: z.object({
				projects: z.array(z.object({
					title: z.string(),
					description: z.string(),
					repoUrl: z.string(),
					homepageUrl: z.string(),
					iconUrl: z.optional(z.string())
				}))
			})
		})
	}
});
