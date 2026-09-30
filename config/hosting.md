---
title: Hosting Options
description: Deployment notes for Azure Static Web Apps and Cloudflare Pages.
---

## Output

Astro builds this portal as a static site in `dist/`. It has no server-side runtime requirement for the current content library.

## Azure Static Web Apps

Connect the repository to Azure Static Web Apps. Use the project directory `copilot-portal` as the app location and `dist` as the output location after running `npm run build`.

The `public/staticwebapp.config.json` file is copied into the build output to add response headers. No SPA fallback is configured because Astro prerenders each documentation route as its own HTML page.

## Cloudflare Pages

Connect the repository to Cloudflare Pages, set the project root to `copilot-portal`, use `npm run build` as the build command, and set `dist` as the build output directory.

Cloudflare Workers are only needed if the portal later adds server-side API routes or authorization flows. Do not put Microsoft Graph client secrets in browser code.