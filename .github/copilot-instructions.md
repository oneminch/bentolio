# Bentolio — Project Guidelines

Bentolio is a minimal portfolio template and Nuxt layer built with Nuxt 4, Tailwind CSS 4, and GSAP. All content and styling are configured via `app/app.config.ts` and typed with `app/utils/types.ts`.

## Architecture & Configuration

- **Single source of truth**: All portfolio content (name, bio, socials, CTA) lives in `app/app.config.ts`
- **Type-safe config**: Extend and validate configuration in `app/utils/types.ts` (SocialMediaKey, portfolio schema, etc.)
- **Layered design**: The project is a Nuxt layer—components, pages, and utils are auto-imported; users extend via `extends: ["@minch/bentolio"]` in their `nuxt.config.ts`
- **Static by default**: Pre-rendered pages via `routeRules` in `nuxt.config.ts` for easy deployment

## Styling & Theming

- **Tailwind CSS 4**: Entry point is `app/assets/css/tailwind.css`
- **Rounded style utility**: Configurable via `style.roundedStyle` in app.config (e.g., "rounded-medium")
- **Primary color customization**: Users override `--color-theme` CSS variable in their `tailwind.css`:
  ```css
  @theme {
    --color-theme: var(--color-lime-500);
  }
  ```
- **Dark mode**: Implemented via `@nuxtjs/color-mode` with class strategy

## Animations & Interactions

- **GSAP plugin**: Available as `$gsap` in components (initialized via `app/plugins/gsap.client.ts`)
- **Entrance animations**: Elements with `animate-element` class animate on page load
- **Initial state & transitions**: Defined in `app/assets/css/tailwind.css`
- **Wave emoji**: Animated via `#wave` ID in CSS

## Vue & Components

- **Composition API with `<script setup>`**: All `.vue` files must use `<script setup>` syntax exclusively
- **Strongly typed props/emits**: Use `defineProps` and `defineEmits` with explicit types (no implicit `any`)
- **Example structure**:
  ```vue
  <script setup lang="ts">
  import type { SocialMediaKey } from '@/utils/types'
  
  interface Props {
    icon: SocialMediaKey
    label: string
  }
  
  defineProps<Props>()
  </script>
  
  <template>
    <div><!-- component content --></div>
  </template>
  ```
- **Auto-imports**: Components, composables, and utilities are auto-imported via Nuxt—no manual imports needed

## Layout & Components

- **Default layout**: `app/layouts/default.vue` handles page structure and entrance animations
- **Page structure**: 
  - Home page: `app/pages/index.vue`
  - Projects: `app/pages/projects.vue`
  - Posts: `app/pages/posts/[..slug].vue` (dynamic catch-all) and `app/pages/posts/index.vue`
- **Section components**: Located in `app/components/section/` (header, hero, about, works, footer, miscellany)
- **Utility components**: Social media links, theme toggle, work items, OG images

## Supported Features

- **Icons**: `@nuxt/icon` with Iconify (e.g., `ph:*`, `simple-icons:*`)
- **Social media**: Built-in support for X, LinkedIn, Bluesky, GitHub (extensible via `app/utils/types.ts`)
- **OG images**: Auto-generated via `nuxt-og-image` (customize or replace `public/og-image.png`)

## Content Types

All configured in `app/app.config.ts`:

```typescript
export default defineAppConfig({
  style: { roundedStyle: "rounded-medium" },
  portfolio: {
    name: string,
    subtitle: string,
    avatar: string,  // Path to avatar image
    bio: { html?: string, text: string },  // HTML for rich content, fallback to text
    socials: Record<SocialMediaKey, SocialMediaProfile>,
    cta: { contact: string, location: string, link: { url: string, label: string } }
  }
});
```

## Deployment

- **Static site generation**: Pre-renders entire site at build time
- **Serverless-friendly**: No runtime server required
- **From any static host**: Netlify, Vercel, GitHub Pages, etc.
- **Build step**: `nuxt generate` outputs to `.output/public/`

## When Modifying

1. **Adding socials**: Update `SocialMediaKey` union and socials mapping in `app/utils/types.ts`, then define styles in `app/app.config.ts`
2. **Changing layout**: Edit `app/layouts/default.vue` or section components in `app/components/section/`
3. **Animations**: Adjust in `app/assets/css/tailwind.css` and GSAP plugin
4. **Styling**: Customize Tailwind theme variables in user's `tailwind.css` or adjust in component classes
5. **Icons**: Replace with different Iconify collection names in `app/app.config.ts` (e.g., `tabler:github`)

## Key Principles

- **Configuration > Code**: Update app.config.ts before modifying components
- **Type safety**: Always extend types in types.ts when adding new portfolio properties; use explicit types in Vue components
- **Composition API first**: All new components must use `<script setup>` with TypeScript
- **CSS-first theming**: Use CSS variables and Tailwind utilities, avoid hardcoded colors
- **Performance**: Keep animations smooth with GSAP and minimal re-renders (SSG + static assets)
- **No tests yet**: Currently, this project does not have automated tests configured
