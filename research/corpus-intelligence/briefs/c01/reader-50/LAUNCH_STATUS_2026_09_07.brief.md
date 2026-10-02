# ops/LAUNCH_STATUS_2026-09-07.md
## What it is (1-2 sentences)
Launch-readiness status snapshot for the Galaxy Sports Edge web product as of 2026-09-07: the money path, pick surface, settlement, and scheduling are measured green; the only launch blocker is that branch `claude/sports-launch-round2-fixes-hk7kv9` (40 commits ahead of origin/main, fast-forward mergeable) is not on main, and C-113 (free score persister graded a later game with an earlier game's FINAL, publishing WIN/LOSS before first pitch) is fixed on the branch but not deployed.

## Key metrics/methods (formulas where given, else "not specified")
Calibration gate metrics from the production truth surface (not specified formula in file, reported values):
- ECE = 0.0505 vs PROVEN floor 0.05 (RED; moved 0.0524 → 0.0505, n = 467, Brier 0.1896, Murphy reliability 0.0050, consecutiveGreen 0 of 3)
- Confidence-tail three-round investigation: pooled ≥80-confidence picks won 52.1% claiming 86.7% (n 211) — refuted as retired-version contamination; v5.2.7 (deployed) ≥80 MONEYLINE: claimed 87.1%, actual 87.3% (n 63, "essentially perfect")
- v5.2.7 SPREAD: 46.9% actual vs 61.8% claimed (n 256) — flagged a category error because `confidence/100` is deliberately not a win probability for spread/total (`apps/web/lib/calibration/compute.ts:74-88`), which are priced ~50% by construction
- v5.2.7 SPREAD confidence bands actual: 48.9 / 40.0 / 52.2 / 38.1 percent; top band worst but n 21, gap −0.84 SE, not statistically significant
- Production row counts: 2,268,217 spread rows and 2,316,785 total rows scanned for the C-132 fabricated-`-110` check (0 affected)

## Data sources named
- `/api/ops/public-surface-truth` (production truth surface, read live 15:45 UTC)
- Read-only SQL over the board (next 7 days: 274 upcoming games, 123 with ≥1 published pick, 221 published picks: NCAAF 104 games/114 picks, MLB 91/59, NFL 45/23, MLS 34/25)
- 72-hour `marketCoverage` window read (thin slice, misleading — corrected by the 7-day query)
- Settlement health: 0 of 2661 overdue, `stalePendingPicks.count` 0

## Findings (numbers and facts, not vibes)
- Real defects live in production data (agent cannot fix, AGENTS.md law 7 forbids agent DB writes): C-114 — 87 picks graded before kickoff, 63 inside the ECE sample; C-125 — 355 of 725 published MLB SPREAD picks carry a run line no book offers; C-118 — 148 published soccer moneyline picks wrong by construction on a three-way market (code fix already in); C-115 — 80 of 585 published settled TOTAL picks contradict the final score on their own game row, root cause still unknown (only defect that may still be creating bad rows)
- Shipped this session on the branch: C-117 fix (board collapse keyed on `pickType`, alias filters on 3 fallback queries, `take` 100 → 500), C-131 (settle-backfill writes counted via `writeNotApplied`/`WRITE_NOT_APPLIED` instead of vanishing; `KICKOFF_MOVED` no longer measures age against a gone kickoff), C-132 (scorer no longer fabricates a `-110` price), ledger updates; typecheck 0, lint 0, guardrails 26/26; all 52 PR #717 review threads replied/resolved
- Founder-only console actions still open: R-1 (~25 Hermes credentials exposed in an August session transcript, not rotated — highest severity item); F-20 (Stripe webhook events); F-19 (Founding Payment Links); F-22 (live checkout + refund test); F-18 (Terms URL + `STRIPE_TERMS_CONSENT_ENABLED` ordering); F-23 (`@GalaxySportsAI` handle contradicts "We're not AI" brand claim)
- Odds path: `freeSpine.oddsPath` all 7 sport cells single-cleared via metered paid key; `oddsInserting.dualPath.credits` paceOk false, projected exhaustion 2026-09-16

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: This is ops/calibration docs, not football intelligence — no QB, coaching, OL, or scheme material.
- TRUST-SIGNAL (minor): explicit honesty posture — `PERFORMANCE_STATS_ENABLED`/`STATS_PUBLIC` deliberately OFF, UI renders uncalibrated confidence as "72/100" never "72%", `/api/v1/probabilities` ships `claimPosture: "experimental_research_grade_not_verified_roi"`. Public claims dark until ECE earns PROVEN. (Engine-posture precedent: never publish uncalibrated numbers.)

## Engine-actionable? (yes/no + one-line what)
No — launch-ops status, not engine signal. The calibration metrics (ECE/Brier on v5.2.7 MONEYLINE at n 63, 87.3% realized) are a useful calibration-state datapoint but belong to the already-owned PROVEN gate, not new signal.
