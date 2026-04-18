---
title: "Hello, world — the Orion OS devlog is live"
date: 2026-04-18
summary: "Why this site exists 13 months earlier than the plan said it would, and what to expect from the devlog between here and v1.0."
push: "P#10.3 (early per ADR-0001)"
draft: false
---

If you are reading this, the [project website](/) is live — which, per
the [master plan](https://github.com/gauthambinoy/Orion-OS/blob/main/ORION_DEVELOPMENT_PLAN.md),
was not supposed to happen until milestone **M10**, sometime around the
v1.0 launch. We are at milestone **M1**.

So why is it here now? Because the same plan, in §8.1, also says the
audience-building work has to start at the very first push, not at the
last one. You cannot grow a 30,000-reader devlog in the last week
before a release. The devlog has to exist first, and the website has
to exist before the devlog can.

The formal authorisation for pulling the website forward is
[ADR-0001](https://github.com/gauthambinoy/Orion-OS/blob/main/docs/adr/0001-pull-p10-3-website-forward.md).
Read it for the full reasoning; the short version is: this is one
ledger row (P#10.3) executed early, not a new commitment.

## What the devlog will be

- **Long-form posts** for milestones, ADRs, design decisions,
  retrospectives, and anything that benefits from more than 500
  characters.
- **Build-in-public.** Every push to `main` is a ledger row, and the
  reasoning behind interesting ones will land here.
- **Honest.** When something does not work, it will say so.
- **No telemetry.** This site has zero analytics, zero trackers, zero
  third-party scripts — same rule as the OS itself.

## What it will not be

- A roadmap teaser channel — the plan is the roadmap, and it is in
  the repo.
- A press-release feed — releases live on the GitHub Releases page.
- A comments section — replies happen on Mastodon, Bluesky, Lemmy and
  the GitHub Discussions tab, so moderation does not become its own
  full-time job.

See you at the next push.
