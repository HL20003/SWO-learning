---
title: Project Architecture
description: Architecture and content model for the Copilot use case portal.
---

## Rendering Model

Astro generates static pages at build time. Starlight provides the documentation layout, responsive navigation, dark mode, locale switcher, and Pagefind search.

The `docs` collection uses Astro's `glob()` loader with the repository-root `content/` directory. Starlight's `docsSchema()` validates each page, and `processedDirs` enables Starlight Markdown features for those files.

## Content Model

Each use case is a Markdown or MDX page. Its frontmatter identifies the department, experience, and complexity level. Vietnamese pages use the root locale; English translations live under `content/en/` and share the same relative path.

## Runtime Boundaries

The current portal is static and contains sample prompts only. It does not authenticate users, access tenant files, or call Microsoft Graph. Any future Graph integration must use an approved Microsoft identity flow and keep confidential credentials on a server-side service.