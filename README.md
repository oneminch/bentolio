# Bentolio

A minimal portfolio template and Nuxt layer built with Nuxt 4, Tailwind CSS 4, and GSAP.

All content and basic styling are configured via `app/app.config.ts`.

![Screenshot](/public/screenshot.png)

> For the original Astro version (not actively updated), check the [`astro`](https://github.com/oneminch/bentolio/tree/astro) branch.

## Features

- **Nuxt Layer**: Modern DX, serverless-friendly, and SSG by default
- **Tailwind CSS 4**: Zero-config utility classes with CSS-first authoring
- **GSAP animations**: Smooth entrance animations and micro‑interactions
- **Dark Mode**: Toggle via `@nuxtjs/color-mode` (class strategy)
- **Icons**: `@nuxt/icon` with Iconify collections (e.g., `ph`, `simple-icons`)
- **Type‑safe app config**: Autocompletion and validation for your site data
- **Static generation**: Pre‑rendered pages for easy deployment to any static host
- **OG Image**: Automatically generated OG image via `nuxt-og-image`

## Configure Your Portfolio

To use as a template, you can simply clone and update the files to your liking.

Alternatively, you can also use it as a Nuxt layer:

```bash
npm i -D @minch/bentolio
```

```ts
export default defineNuxtConfig({
  extends: ["@minch/bentolio"]
});
```

Have a look at [.playground](/.playground/) to see how to set up as a layer.

All page content lives in `app/app.config.ts` and is fully typed (see `app/utils/types.ts`). Edit the example values to your own:

```ts
// app/app.config.ts (excerpt)
export default defineAppConfig({
  style: {
    roundedStyle: "rounded-medium"
  },
  portfolio: {
    name: "Your Name",
    subtitle: "What you do",
    // company: "[COMPANY]",
    avatar: "/profile.jpg",
    bio: {
      // Prefer html for rich content; fallback to text if html is empty
      html: "I'm a <span class='font-bold text-theme'>Full‑Stack</span> Dev...",
      text: "I'm a Full‑Stack Dev..."
    },
    socials: {
      GitHub: {
        socialMediaIcon: "simple-icons:github",
        profileUrl: "https://github.com/your-handle",
        socialMediaBgColor: "bg-black!",
        socialMediaBorderColor: "border-black!",
        socialMediaTextColor: "text-white!"
      }
      // X, LinkedIn, Bluesky are also supported
    },
    cta: {
      contact: "you@example.com",
      location: "Your City",
      link: { url: "https://your-site.com", label: "Portfolio" }
    }
  }
});
```

Supported social keys by default: `"X" | "LinkedIn" | "Bluesky" | "GitHub"`. To add more networks, extend the `SocialMediaKey` union and the `socials` mapping in `app/utils/types.ts`. The layout is designed to only display 4 social links by default.

### Assets

- Replace `public/profile.jpg` with your own avatar.
- Update `public/favicon.svg`, `public/og-image.png`, `public/logo.svg` and `public/logo.svg` if desired.
- OG image can be auto-generated using the `nuxt-og-image` module.

### Theming and Styles

- Tailwind entry is `app/assets/css/tailwind.css`.
- Primary color is set via CSS theme variable:

```css
@import "@minch/bentolio/tailwind";

/*  Change `--color-theme` to customize your accent. */
@theme {
  --color-theme: var(--color-lime-500);
}
```

### Animations

- GSAP is provided via a Nuxt plugin (`$gsap`). See `app/layouts/default.vue` for entrance animations.
- Elements with the `animate-element` utility class will animate in on page load. The initial state and transitions are defined in `app/assets/css/tailwind.css`.
- The waving hand emoji animation is controlled via the `#wave` id in CSS.

## Deployment

This template is configured for static generation via `routeRules` in `nuxt.config.ts`.

## Credit

The design is inspired by [@TomIsLoading](https://twitter.com/TomIsLoading)'s Bento Grid from [Hover.dev](https://hover.dev).
