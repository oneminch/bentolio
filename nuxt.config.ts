import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    // "nuxt-og-image",
    '@nuxt/content',
    'shadcn-nuxt'
  ],

  components: [
    {
      path: join(currentDir, './app/components'),
      pathPrefix: false
    }
  ],

  devtools: { enabled: true },
  app: {
    rootAttrs: {
      id: 'app'
    },
    head: {
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
    }
  },

  css: [join(currentDir, './app/assets/css/tailwind.css')],

  colorMode: { classSuffix: '' },

  content: {
    build: {
      markdown: {
        toc: { depth: 1, searchDepth: 2 },
        highlight: {
          theme: 'github-dark',
          langs: ['js', 'md', 'py']
        }
      }
    }
  },

  alias: {
    '@minch/bentolio/tailwind': join(
      currentDir,
      './app/assets/css/tailwind.css'
    )
  },

  build: {
    transpile: ['gsap']
  },

  routeRules: {
    '/**': { prerender: true },
    '/posts': { redirect: { to: '/#works', statusCode: 301 } }
  },

  compatibilityDate: '2025-05-15',

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@vueuse/core',
        'class-variance-authority',
        'reka-ui',
        'clsx',
        'tailwind-merge'
      ]
    }
  },

  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
        semi: true,
        commaDangle: 'never',
        indent: 'tab'
      }
    }
  },

  icon: {
    mode: 'svg',
    clientBundle: {
      scan: true,
      icons: ['ph:sun-duotone', 'ph:moon-duotone']
    }
  }
});
