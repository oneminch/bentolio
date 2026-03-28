import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		rootAttrs: {
			id: "app"
		},
		head: {
			link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }]
		}
	},

	build: {
		transpile: ["gsap"]
	},

	components: [
		{
			path: join(currentDir, "./app/components"),
			pathPrefix: false
		}
	],

	colorMode: { classSuffix: "" },

	compatibilityDate: "2025-05-15",

	css: [join(currentDir, "./app/assets/css/tailwind.css")],

	alias: {
		"@minch/bentolio/tailwind": join(
			currentDir,
			"./app/assets/css/tailwind.css"
		)
	},

	devtools: { enabled: true },

	icon: {
		mode: "svg",
		clientBundle: {
			scan: true,
			icons: ["ph:sun-duotone", "ph:moon-duotone"]
		}
	},

	modules: [
		"@nuxt/eslint",
		"@nuxt/icon",
		"@nuxtjs/color-mode",
		// "nuxt-og-image",
		"@nuxt/content",
		"shadcn-nuxt"
	],

	routeRules: {
		"/**": { prerender: true }
	},

	vite: {
		plugins: [tailwindcss()]
		, optimizeDeps: {
			include: [
				'@vue/devtools-core',
				'@vue/devtools-kit',
				'@vueuse/core',
				'class-variance-authority',
				'reka-ui',
				'clsx',
				'tailwind-merge',
			]
		}
	}
});
