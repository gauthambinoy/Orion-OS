# Architecture Decision Records

This directory holds Orion OS Architecture Decision Records (ADRs).

ADRs are the only legitimate way to deviate from
[`ORION_DEVELOPMENT_PLAN.md`](../../ORION_DEVELOPMENT_PLAN.md). Per plan §9.3,
any change to:

- §5 (architecture / stack),
- §5.2 (the 12 hero features),
- §5.5 (release-blocking quality gates), or
- the §6.3 commit-by-commit ledger order

requires an ADR proposed in a PR, with at least one maintainer approval
(two post-v1.0). When accepted, the plan file is updated in the same PR.

## File naming

`NNNN-<short-slug>.md` — four-digit zero-padded sequence, lowercase
hyphenated slug. Numbers are never reused; superseded ADRs stay on disk
and are linked from their replacement.

## Template

Each ADR has these five sections in this order, per plan §9.3:

1. **Context** — what is the situation that forces a decision?
2. **Decision** — what did we choose?
3. **Alternatives** — what else did we consider, and why did we reject it?
4. **Consequences** — what becomes easier, what becomes harder?
5. **Status** — Proposed / Accepted / Superseded / Withdrawn, with date.

ADR-0001 is itself a worked example until a second ADR motivates a
dedicated `TEMPLATE.md`.

## Index

| # | Title | Status |
|---|---|---|
| [0001](./0001-pull-p10-3-website-forward.md) | Pull P#10.3 (project website) forward to enable §8.1 audience-building | Accepted, 2026-04-18 |
