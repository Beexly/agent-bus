# docs/ops/hermes/AGENT-CHARTERS.md

## What it is (1-2 sentences)
Charter (issued 2026-09-18 by the architect session on the founder's direction) dividing work across three model domains: (1) the rulers/learning loop (tracks D,E,F — "can we prove what we claim?"), (2) the signal plane (tracks A,B,C — "does the engine see everything it could?"), (3) the adversary/customer surface (track G — "what here is not true?"). Goal stated once: "The most accurate and best-calibrated fantasy and prediction sports company in the world, where accuracy is proved rather than asserted."

## Key metrics/methods (formulas where given, else "not specified")
- Architecture: 7 tracks, 69 workstreams; 65 concurrent-safe, 5 founder-only.
- Calibration/estimator methodology named: `edge-lab/walk-forward.ts` (purge, embargo, sealed holdout); `edge-lab/trials-registry.ts` (hash chain, Benjamini-Hochberg control); `placebo.ts`, `logit-pool.ts`, `logistic.ts`, `calibration-blend.ts` (all never run at time of writing); `evidence-readiness-matrix.ts` (13 factor keys with trust, sample, age floors, called by nothing); `packages/feature-store` point-in-time validated, zero registered features; `gate_decisions` had no writer in 94 days.
- Domain 2's situational layer (engine blind to): opponent-adjusted EPA split dropback and rush, turnover occurrence vs recovery, OL-vs-DL pressure matchup, QB efficiency as EPA per dropback + CPOE, officials, weather, rest and travel, market microstructure, coaching tendencies, schedule spot, venue.
- Measurement examples: 38 SLA warnings from `node scripts/ops/check-agent-ledger.mjs`; 11 UNPUSHED rows owned by hermes (C-336–C-345 launch items L1–L9 + CLV census + session audit); 36 OPEN rows with evidence and no owner (S-1, C-18–C-41, C-85–C-112, C-184, C-225, C-262, C-263, C-271, C-295, C-296, C-302, ARCH-13).
- Four named bug classes: literal-date-pinned test rotting vs `new Date()`; test asserting the bug it was written to catch; ledger row DONE with failing acceptance test (C-104, fails 3 of 3); count asserted rather than enumerated (partial-mock count drifted 19→22).
- Blockers measured: main has no branch protection (404 on protection API); `UNPUSHED` chronic state; blocked-write permission surface (Write of new files denied in headless sessions, Edit of approved files succeeds).
- Quality bar: pre-registration before any predictive claim with kill line + false-discovery level; dumb-baseline duel; market duel; observation/inference/speculation separated and labelled.
- Track E7 (not started at charter time): full closing-value attribution test that would explain "the 29.4-point gap behind the 23.0 percent against 52.4 percent ESTABLISHED blocker".
- Four rules: one writer per artifact TYPE; unverifiable items escalated never dropped; no model grades its own work; every number carries the command that produced it.
- Five founder-only acts: flip env flag/gate; bump MODEL_VERSION; apply SQL/migrate; issue rights ruling; publish an uncertified number.

## Data sources named
- None (internal repo/tooling documentation only).

## Findings (numbers and facts, not vibes)
- The learning loop is fully built and entirely unwired: every ruler/estimator instrument exists in the repo and none is scheduled or called at runtime.
- Engine blind spots enumerated for capture: opponent-adjusted EPA split dropback/rush, turnover occurrence vs recovery, OL-vs-DL pressure matchup, QB efficiency (EPA per dropback + CPOE), officials, weather, rest/travel, market microstructure, coaching tendencies, schedule spot, venue.
- Ledger rows C-104 marked DONE with 3-of-3 failing acceptance test; ledger guard exits 0 with 38 SLA warnings.
- Nine launch items complete but existing on exactly one laptop (UNPUSHED) — single largest stranded capacity block.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: engine blind to "coaching tendencies" — capture layer queued, not wired (Track B/C situational layer).
- OL: engine blind to "OL-vs-DL pressure matchup" — explicitly named as a situational signal to capture.
- QB-BEHAVIOR: QB efficiency defined as EPA per dropback + CPOE listed as engine metric family; no data, just the spec.
- SCHEME: opponent-adjusted EPA split dropback vs rush named as capture target.
- OTHER: process document; no actual sports data.

## Engine-actionable? (yes/no + one-line what)
**Yes** — wires the engine's known blind spots: QB efficiency (EPA/dropback + CPOE), OL-vs-DL pressure matchup, coaching tendencies, opponent-adjusted EPA splits, turnover occurrence vs recovery.
