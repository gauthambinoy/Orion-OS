# `web/` — Orion OS project website

Static [Astro 4](https://astro.build) site that powers
[orion-os.dev](https://orion-os.dev), the canonical home for
announcements, the devlog, and links to releases.

Pulled forward from milestone M10 to M1 per
[ADR-0001](../docs/adr/0001-pull-p10-3-website-forward.md), so that the
audience-building work mandated by `ORION_DEVELOPMENT_PLAN.md` §8.1 can
start at P#0.1 instead of v1.0.

## Local development

Requires Node.js ≥ 18.17 (Astro 4 minimum).

```sh
cd web
npm install
npm run dev      # http://localhost:4321
npm run build    # writes static output to web/dist/
npm run preview  # serve web/dist/ locally
```

## Adding a devlog post

Drop a Markdown file in `src/content/devlog/`:

```md
---
title: "My post"
date: 2026-04-25
summary: "One-sentence summary used on the index and in feeds."
push: "P#1.5"   # optional — links the post to a ledger row
draft: false
---

Body in Markdown.
```

The `slug` is derived from the file name (e.g.
`2026-04-25-my-post.md` → `/devlog/2026-04-25-my-post`).

## Deployment

Cloudflare Pages, framework preset **Astro**, build command
`npm run build`, output `web/dist`. The deploy workflow itself is a
follow-up still owned by ledger row P#10.3 — see ADR-0001 §"Decision".

## No telemetry

Zero analytics, zero trackers, zero third-party scripts. This is a
hard constraint of the project (see plan §5.1) and applies to the
website too. If you are adding a feature that "just needs a tiny
script tag", stop and open an issue first.
