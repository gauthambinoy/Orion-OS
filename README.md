# Orion OS

> An AI-first, image-based Linux desktop — faster, more secure, and more useful out
> of the box than Windows or macOS, without selling a single byte of user data.

[![License: GPL-3.0-or-later](https://img.shields.io/badge/License-GPL_3.0--or--later-blue.svg)](LICENSE)
[![Status: pre-alpha (M2 complete, M3 next)](https://img.shields.io/badge/status-pre--alpha%20%28M2%20%E2%9C%93%2C%20M3%20next%29-yellow.svg)](ORION_DEVELOPMENT_PLAN.md#62-milestone-status)

Orion OS is a [Universal Blue](https://universal-blue.org/)-based atomic Linux
desktop built around **KDE Plasma 6** with a local-first AI runtime baked into
every part of the experience: launcher, clipboard, terminal, file manager,
search, photos, voice. Cloud AI is opt-in, per-feature, with hard spend caps.

## Why Orion?

- **AI native, not AI bolted-on** — every shell surface has AI hooks
- **Local-first, hybrid optional** — 100% offline by default; you opt in to cloud
- **Atomic + signed + rollback** — an update can never brick your machine
- **Hardware-tier aware** — the right model and tuning auto-selected for your box
- **Beautiful by default** — KDE Plasma 6 with curated themes and layouts
- **Verifiable claims** — every privacy/perf/security promise is a CI test
- **Zero telemetry** — ever

## The 12 hero features (v1.0)

Orion Copilot · NL Launcher · Screen Sense · Voice Control · AI Clipboard ·
AI Terminal · Semantic File Search · Personal RAG · Photo Super-Actions ·
Translate Overlay · Meeting Capture · Smart Focus & Power.

## Status

Pre-alpha. The repo, a signed bootable image, and the security baseline are in
place. We are now entering **milestone M3 — performance & tier**. There is still
no end-user-installable release; the first user-installable target is
`v0.4.0-beta` (M4). Track progress in the
[Master Development Plan](ORION_DEVELOPMENT_PLAN.md).

| Milestone | Tag | Status |
|---|---|---|
| M0 — Repo bootstrap | `v0.0.1` | ✅ done |
| M1 — First bootable image | `v0.1.0-alpha` | ✅ done |
| M2 — Security baseline | `v0.2.0-alpha` | ✅ done |
| M3 — Performance & tier | `v0.3.0-alpha` | 🟡 next up |
| M4 — AI runtime core | `v0.4.0-beta` | ⬜ pending |
| M5 — Hero features 1/4 | `v0.5.0-beta` | ⬜ pending |
| M6 — Hero features 2/4 | `v0.6.0-beta` | ⬜ pending |
| M7 — Hero features 3/4 | `v0.7.0-beta` | ⬜ pending |
| M8 — Hero features 4/4 | `v0.8.0-rc1` | ⬜ pending |
| M9 — Onboarding & polish | `v0.9.0-rc2` | ⬜ pending |
| M10 — Public 1.0 launch | `v1.0.0` | ⬜ pending |

See the [full ledger](ORION_DEVELOPMENT_PLAN.md#62-milestone-status).

## Documentation

- [Master Development Plan](ORION_DEVELOPMENT_PLAN.md) — the constitution of the
  project. Read this before contributing or running an AI agent against the repo.

## License

[GPL-3.0-or-later](LICENSE). Orion OS is free software and will always be.
