# ADR-0001: Pull P#10.3 (project website) forward to enable §8.1 audience-building

## Status

**Accepted**, 2026-04-18.

Approved by @gauthambinoy in the Copilot CLI session that produced this
ADR. Implementation lands in the same PR.

## Context

Plan §8.1 ("Audience-building") is unambiguous: it must start at **P#0.1,
not v1.0**. The primary channel is a "Devlog blog (Astro on Cloudflare
Pages)" with weekly long-form posts and per-commit micro-posts. The §8.6
"100/100" success criteria includes 5,000 Discord members and 30,000
devlog readers within 90 days post-launch — numbers that require an
audience already in place at launch, not built from zero on day one.

However, the platform that hosts that devlog — `web: project website
(Astro + Cloudflare Pages)` — sits in the §6.3 ledger as **P#10.3**, a
late-M10 push scheduled roughly 14 months after P#0.1. Concretely:

- We are at M1 P#1.5 today (2026-04-18).
- P#10.3 is ~80 commits away in the ledger order.
- Without a public site, there is nowhere canonical to publish a devlog.
- §8.1 also lists Mastodon, Bluesky, Lemmy, YouTube, Reddit and a
  newsletter — every one of those *links to* the site as the canonical
  source of truth. Until the site exists, those channels have nothing to
  point at.

The strict reading of §6.3 ordering and §7.1 ("agents work on one push at
a time, never invent new commits") forbids touching P#10.3 early without
this ADR. Per §9.3 an ADR is exactly the right mechanism.

## Decision

**Pull only P#10.3 forward to be executed during M1.** All other M10
pushes (P#10.1, 10.2, 10.4–10.8) stay in their original ledger position.

The early-pulled P#10.3 ships:

1. A minimal Astro 4 project under `web/`.
2. A `devlog/` Astro content collection ready to receive posts.
3. One seed devlog post that announces the public devlog and links to
   `ORION_DEVELOPMENT_PLAN.md`.
4. A static-output build that drops to `web/dist/`, compatible with the
   default Cloudflare Pages "framework preset: Astro" with no extra
   configuration required at the Pages dashboard.
5. Conservative HTTP security headers via `web/public/_headers`
   (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
   `Permissions-Policy`).

The CI workflow that builds `web/` on every PR and the workflow that
deploys to Cloudflare Pages are deliberately **out of scope** of this
ADR; they will land as a follow-up PR still owned by the P#10.3 ledger
slot. This keeps the early pull-forward minimally invasive.

## Alternatives considered

1. **Wait until M10 as planned.** Rejected: makes §8.1's pre-launch
   audience targets mathematically unreachable. A 30,000-reader devlog
   cannot be built in the days between P#10.3 (~M10 mid) and P#10.6
   (v1.0 tag).

2. **Use a third-party blog platform** (Substack, Medium, dev.to,
   Hashnode). Rejected: every one of those platforms ships analytics
   and trackers by default, contradicting the plan's "no telemetry,
   ever" pillar (§5.1) and the verifiable-claims pillar (§4). It also
   creates a migration debt at v1.0 when we'd move to our own site
   anyway.

3. **Add a *new* commit (e.g. P#0.9 "early devlog scaffold")** and
   leave P#10.3 unchanged. Rejected: this duplicates work, splits the
   "project website" concept across two ledger entries, and clutters
   the M0 row that is otherwise frozen and tagged. The cleaner shape
   is "one ledger row, one website, just executed earlier".

4. **Pull all of M10 forward.** Rejected on technical grounds: the
   release tag (P#10.6), CHANGELOG (P#10.2), release-signing pipeline
   (P#10.5) and update-channel rollout (P#10.8) all depend on
   M2–M9 artefacts that do not yet exist.

## Consequences

### Positive

- §8.1 audience-building can start in the same PR that lands this ADR.
- The first devlog post can be the public announcement of the project.
- Proving the Astro + Cloudflare Pages deploy story 13+ months early
  de-risks the original M10 launch window.
- Contributors who want to write a devlog post during M2–M9 now have a
  trivial workflow: drop a Markdown file in `web/src/content/devlog/`.

### Negative / accepted trade-offs

- **No website CI on first landing.** The build is verified locally
  only. Mitigated by the immediate follow-up PR that adds a `web` job
  to the lint workflow (or a sibling `web.yml`).
- **One new top-level dependency (`astro`).** Per §7.6 agents must
  never add a new dependency without an ADR; this ADR is that
  authorisation. Astro is the exact framework chosen by the plan in
  P#10.3 itself, so the dependency is plan-pre-approved — only the
  *timing* is what this ADR moves.
- **`docs/adr/` is itself new.** §9.3 references the ADR process but no
  ledger row creates the directory. Bootstrapping it as part of
  ADR-0001 is the natural place: the first ADR creates the home for
  all future ADRs.
- **The §6.3 ledger now has a row (P#10.3) marked `✅` out of order.**
  A reader scanning M0→M10 sequentially will see a green row in the
  middle of pending work. Mitigated by a footnote on the row pointing
  to this ADR.
- **Sets a precedent for "early-pull" ADRs.** Future maintainers may be
  tempted to invoke ADR-0001 by analogy. Mitigated: §9.3 still
  requires explicit maintainer approval per ADR, and the bar for
  "this single thing genuinely unblocks a different milestone" is
  easy to apply as a sniff test in review.

## Implementation notes (for the same PR)

- New directory: `web/` (Astro project root).
- New directory: `docs/adr/`.
- Plan file: `ORION_DEVELOPMENT_PLAN.md` is updated in the same PR (per
  §9.3) — only the §6.3 P#10.3 row gains a `✅` and an ADR-0001
  footnote, and the "Last revised" header date is bumped. No other
  edits.
- The ledger row count for M10 (8 pushes, §6.2) is unchanged: P#10.3
  still counts as one of the 8, just done earlier.
- The §6.2 status of M10 stays `⬜ pending` until P#10.1, 10.2, 10.4–8
  also land.
