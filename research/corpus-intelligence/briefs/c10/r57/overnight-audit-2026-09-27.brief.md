# reasoning/overnight-audit-2026-09-27.md
## What it is (1-2 sentences)
A cycle-by-cycle audit log of the 2026-09-27 overnight reasoning-layer run on the Sports repo: reconciliation of work-order claims against measured git state, file-integrity verification, and a statistical validation of the `bridge-premises.jsonl` walk-forward file.
## Key metrics/methods (formulas where given, else "not specified")
- Not an engine method file; audit method: sha256 file verification, `git rev-parse` state checks, vitest/tsc runs.
- bridge-premises fit: logistic IRLS (`logistic-irls`), training rows 6955 (6991 pre-2025 candidate rows minus 36 refused), holdout n=285 (all 2025 season games).
- Narrative-contract measurements from cycle 14: on-field variant holdout n=285, r=+0.151125, slope=+0.034161, se=+0.013283, f1=0, STORED on f3; roster variant n=285, r=+0.112232, slope=+0.051235, se=+0.026966; Week-3 roster value: BUF mean APY 5.311M vs LAC 5.442M, p_home 0.520809, signed +0.041619; the edge stays 0.30259224777263855 after a promotion build was reverted (broke 4 locked tests + tsc).
## Data sources named
- Repo-internal: data/gse-dataset/bridge-premises.jsonl, features.jsonl (7548 rows, seasons 1999-2026), holdout.jsonl (285 rows, season 2025), scripts/run-bridge.mjs, packages/prediction-engine reasoning suite, live-edge-registry.ts.
- External: galaxysportsedge.com ai.txt (live, 308 -> llms.txt -> 200).
## Findings (numbers and facts, not vibes)
- Cycles 0-12 of the overnight loop carried hand-written UTC timestamps on clean round boundaries (e.g. 00:00:00Z, 00:05:00Z...); actual commits landed 04:05:51Z-04:42:53Z — timestamps were invented, not evidence; do not quote them (law 4 provenance violation recorded).
- bridge-premises.jsonl is a REAL walk-forward holdout: fit trained only on seasons < 2025 (run-bridge.mjs:48 `if (row.season >= 2025) continue;`), 285 holdout rows all season-2025, constant sample_count 6955 = training row count stamped per game (not a smell); supersedes AGENTS.md:66 "Do not treat it as a holdout".
- The clean holdout still does NOT enter the live edge: a precondition for trusting a probability, not a substitute for `selectPart` returning g=0; aggregateSignals not called, file unmodified.
- Verdicts: cycles 0-5, 13-14, 999 all PASS (exit 0); cycle 14 STORED narrative contract on f3 (commit e4dba02). Promotion was built then REVERTED because it widened a closed family union, invalidated week3-engine-readings.jsonl, and broke 4 locked tests + tsc; owner asked for no regressions.
- 8 LIVE reasoning parts, 4 DARK verdicts, 8-member SignalFamily union, 62 dirs under packages/prediction-engine/src + __tests__; lane-2 scan: 63 dirs (59 catalogued, 4 blocked, zero claim wired/measured_zero); feature scan: 6 grains, 0 skipped.
- Slice 1 facts: publishes_pick=false; seasons [2024,2025]; 2024_01_TEN_CHI play 40 has 22 players_on_field; snap-counts have no gsis_id; fourth-down.jsonl punt_wp first row genuinely null.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] bridge-premises.jsonl is a genuine out-of-sample holdout (n=285, fit pre-2025, 6955 training rows) — a validated probability source the engine could adopt, but it must never enter the live edge via this path alone (selectPart g=0 requirement stands).
- [TRUST-SIGNAL] Narrative contract on-field variant holdout: n=285, r=+0.151, slope=+0.034 se=0.013, both bars clear — a measured, stored edge contribution (f3), not assumed.
- [TRUST-SIGNAL] Audit hygiene: invented UTC timestamps on cycles 0-12 — provenance records from that loop are not quotable evidence for timing claims.
- [OTHER] Infrastructure: tsc 3 errors -> 0, reasoning suite 12/12 pass; entryOdds guard + 13 tests; decision-time-price-archive 21/21 pass (append-only, refuses edge mismatch).
## Engine-actionable? (yes/no + one-line what)
Yes — bridge-premises.jsonl (logistic-IRLS, holdout n=285, verified out-of-sample) is a qualified probability candidate for a future promotion gate, but only after selectPart/aggregateSignals wiring; do not wire directly.
