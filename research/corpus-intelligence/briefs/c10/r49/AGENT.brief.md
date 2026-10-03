# ops/AGENT.md
## What it is (1-2 sentences)
Append-only shared status log for the multi-agent fleet (Hermes, Grok CLI/CoS, Motif, Lane Watcher, Claude) recording one block per material change with status tags, standing operating rules, and the MOVE-37 research audit trail.
## Key metrics/methods (formulas where given, else "not specified")
Status tags: CLEAN | BLOCK | FAKE-EDGE | OWNER_GATE. Standing rules: no second Hermes if watchdog.pid live; no Odds event-odds or historical from bots; do not market PUBLIC_PICKS as PROVEN/CLV; email Baxley.Garrett@gmail.com only on BLOCK/FAKE-EDGE/OWNER_GATE. Covariate design contract (Hermes H0 slice): key = gsisId|season|week|statType, week=0 dropped, week t predicts t+1, null → null fail-closed (never impute), grain `week_t_for_tplus1`, y-axis fields (expectedCompletionPct/avgExpectedYac/expectedRushYards/cpoe/ryoe) absent by construction. MOVE-37 kill criteria: pre-registered sign flip or OOS ΔLL below 0.002 nats/attempt threshold.
## Data sources named
The Odds API v4; Neon (P1001 incident); Kalshi public API; NGS weekly means (covariate bus); player_stats 2015–2024; snap_counts 2015–2024.
## Findings (numbers and facts, not vibes)
- 2026-08-22: Hermes shipped 4 flagship covariate binds — bus (13 tests), SEP→aDOT catch (6 tests), YAC, CPOE→completion — all fail-closed: nulls dropped, never 3.0 yards; full suite 2870/2872 passed (2 pre-existing ENOENT path mismatches, unrelated). [QB-BEHAVIOR]
- CPOE comp bind Qodo follow-up: `gseCpoe` changed from raw number to CovariateCell so consumers can distinguish GSE-CPOE from vendor CPOE; season-level (week=0) CPOE refused as `cpoe_as_of_boundary`. [QB-BEHAVIOR]
- 2026-09-03: PR #689 dual-audit verified fixes (C-64 settle-backfill no-clobber, C-65 capReached decidable, C-66 UNPUBLISHED-signal-only floor fallback, C-67 score-pair fill, C-68 rename, C-69 cold-start retry); gates at close: test:fast 251/251, cron route tests 49/49, guardrails 26/26. [OTHER]
- 2026-09-14/15 MOVE-37 architect verdict (Motif): Minis 13-compound battery 0/13 at game level — closing line absorbs every public pre-kickoff compound; game-level branch formally closed. Props lab: all three hypotheses KILLED on pre-registered lines — H1/L1 c=+0.082 sign flip, OOS ΔLL mean −0.00003 vs 0.002 threshold, 90% CI contains 0; H2/L2 revenge FE = −0.366494 targets/game (sign opposite hypothesis), confounded with post-transfer role decline; H3/L5 pooled c₃=+0.046342, 90% CI [−0.197212, +0.289896] covers 0. [SCHEME]
- Infra finding (kept): numpy/BLAS thread-pool collapse on emulated Minis CPU was the real blocker; OMP_NUM_THREADS=1 cut one fit 2.32s → 0.35s, 200-iteration benchmark >100s → 3.96s; frozen 3,200-refit procedure ~15 min not 3.5h. [OTHER]
- Rule preserved from 2026-08-22: avgSeparation bound from bus weekly mean (not arrival); avgYac bound from bus weekly mean (not per-target arrival YAC) — honest grain, never arrival-level claims. [QB-BEHAVIOR]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
Findings tagged QB-BEHAVIOR (CPOE/aDOT/YAC covariate binds, fail-closed grain discipline), SCHEME (MOVE-37 compounding closure), OTHER (infra, audit fixes).
## Engine-actionable? (yes/no + one-line what)
Yes — the leak-safe weekly-grain covariate bus contract (week_t_for_tplus1, fail-closed nulls, named provenance) is the wiring pattern for any NGS feature binds; and the MOVE-37 closure rules out game-level compounding from public pre-kickoff information as an edge source.
