---
id: bypass-ad-blockers-for-vercel-analytics-nuxt
title: How to Bypass Ad Blockers for Vercel Analytics in Nuxt
description: This article goes over how to bypass ad-blockers for Vercel Analytics in a Nuxt application.
tags:
  - nuxt
  - vercel-analytics
  - middleware
image: /content/cover/bypass-ad-blockers-for-vercel-analytics-nuxt.png
date: "2025-06-24"
head:
  meta:
    - name: robots
      content: index, follow
    - name: author
      content: Dawit (@oneminch)
    - property: og:type
      content: article
    - name: twitter:card
      content: summary_large_image
---

## The Problem: Analytics Blocked by Ad Blockers

Vercel Analytics offers a seamless & privacy-friendly way to track page views and performance for apps hosted on the platform. However, many ad blockers and VPN providers recognize and block requests to known analytics endpoints, such as `/_vercel/insights/script.js`, which could result in missing valuable data from users.

## The Solution: Proxying Analytics with Nuxt Middleware

By proxying your analytics through a unique, project-specific endpoint rather than the default one, these blocklists can be avoided. Nuxt allows you to create custom endpoints directly within your application with its powerful server middleware feature powered by Nitro. You can use this feature to proxy Vercel Analytics requests through a unique path, effectively disguising them from most blockers.

### Create a Proxy Middleware

First, set up a server middleware in your Nuxt project that intercepts requests to a custom path (e.g., `/my-analytics/`) and forwards them to the real Vercel Analytics endpoint.

Create a file at `server/middleware/analytics-proxy.ts` (Nuxt will auto-register it as a server middleware):

```ts
// server/middleware/analytics-proxy.ts
import { defineEventHandler, proxyRequest } from "h3";

export default defineEventHandler(async (event) => {
  // Only handle requests starting with your custom analytics path
  if (event.node.req.url?.startsWith("/my-analytics/")) {
    // Replace your custom prefix with the real Vercel Analytics endpoint
    const targetPath = event.node.req.url.replace(
      "/my-analytics",
      "/_vercel/insights"
    );

    return proxyRequest(event, `https://yourdomain.com${targetPath}`);
  }
});
```

This middleware listens for requests to `/my-analytics/` and proxies them to the actual analytics endpoint.

### Inject the Analytics Script

Next, update your app to load the analytics script from your new path. In your main layout or a Nuxt plugin, use the `useHead` composable:

```js
// app.vue
useHead({
  script: [
    {
      src: "/my-analytics/script.js",
      async: true,
      "data-endpoint": "/my-analytics"
    }
  ]
});
```

This ensures your app loads the analytics script from the custom path, which is then transparently proxied to Vercel.

Since the script is loaded using `useHead`, the `@vercel/analytics` package is no longer needed.

### Verify and Adjust

You can visit the network tab from your browser’s developer tools to confirm that requests to `/my-analytics/script.js` and related endpoints are not being blocked by ad blockers. If they are, you can try changing the custom path to something even less conspicuous.

That's it. Thanks for reading.
