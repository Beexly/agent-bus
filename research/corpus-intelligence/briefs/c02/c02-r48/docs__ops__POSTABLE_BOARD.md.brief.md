# docs/ops/POSTABLE_BOARD.md
## What it is (1-2 sentences)
The canonical pre-post gatekeeping protocol for the @GalaxySportsHQ public picks operation: one writer refreshes a verified "postable" board from the Neon DB, and no agent may draft or post a public pick unless it appears on the current board. The current board snapshot (refreshed 2026-09-14 ~19:05 CT) lists 2 postable MLB run-line plays and a detailed kill list.
## Key metrics/methods (formulas where given, else "not specified")
- Provenance checklist (all must pass): `booksCount >= 1`; `consensusPct` not a pinned constant; `lineGeneratedAt` fresh (restamp-without-refresh is a known defect); `independentEdge.decision !== "PASS"`; kickoff in future at post time.
- Confidence-ladder rule: when confidence spread is driven by pinned constants, post as the day's board, not a confidence ladder.
- IE shrinkage example: Diamondbacks -1.5 IE SPEAK raw +9.9%, shrunk +6.0%; Padres -1.5 IE SPEAK raw +12.0%, shrunk +7.2% (shrinkage formula not specified).
- MLB run-line consensusPct pinned at exactly 1.0000 ("structurally always true for a 1.5 line, zero discriminating information").
- Engine slate: 14 picks across 9 games (13 MLB + 1 NFL), 5 premium / 9 free; model v5.2.7.
- Both postable plays verified live at 11 books, lines from `odds_line_snapshots` captured 2026-09-14 22:47Z; picks generated 2026-09-13 ~20:00Z.
## Data sources named
- Neon Postgres (picks + games + odds_line_snapshots), direct DB pull; credential used transiently per Garrett's paste, never stored.
- Live book lines: 11 books (individual books not named) for Diamondbacks -1.5 (-1.5 +135 to +162) and Padres -1.5 (-1.5 -136 to -145).
- Independent edge source: SOLO (`skellam_cover`, single source).
- Companion live-check session via public API (2026-09-14 ~18:55 CT superseded refresh).
## Findings (numbers and facts, not vibes)
- [QB-BEHAVIOR N/A — no QB content] Chiefs ML (MNF vs Broncos, kickoff 19:15 CT) KILLED: `bookmakerCount` = 0, elo-only — DB-confirmed. (TRUST-SIGNAL)
- Padres ML (@ Rockies) KILLED: `independentEdge.decision` = PASS with rawEdge -0.0069, CONTRADICTS — "we pass rather than fade the market"; standing regression fixture with Steelers ML -285. (TRUST-SIGNAL)
- Angels ML, Diamondbacks ML, Cubs ML, Tigers ML KILLED: zero books, model signal only. (TRUST-SIGNAL)
- UNDER 8.0 Orioles @ Mets KILLED twice: first pitch 18:10 CT already passed (no backdating) + stale line (generated 9/13, restamped 9/14). (TRUST-SIGNAL)
- Standing kill from 2026-09-13: Giants ML killed (zero books + elo-only); Chargers ML killed (line generated 2026-05-22 — 4-month stale line defect). (TRUST-SIGNAL)
- Dissent log: (none) — protocol requires dated dissent note + escalation to Garrett instead of unilateral action. (OTHER)
- 2026-09-13 board expired: all games completed; postable picks today were only the 2 MLB run lines, both PREMIUM tier — public posting is Garrett's call. (OTHER)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Provenance checklist as trust-signal gate: zero-book elo-only signals and stale lines are hard kills — TRUST-SIGNAL
- "Pass rather than fade the market" (IE PASS on Padres ML, rawEdge -0.0069) — TRUST-SIGNAL
- Confidence-ladder rule (don't sell 91 vs 72 when the gap is a pinned constant) — TRUST-SIGNAL, OTHER (publication ethics)
- One-writer-per-refresh board protocol — OTHER (ops)
## Engine-actionable? (yes — adopt the provenance checklist verbatim as the pre-publish gate: booksCount >= 1, line freshness check against lineGeneratedAt not dataFreshnessAt, IE decision != PASS, no backdating after kickoff.)
