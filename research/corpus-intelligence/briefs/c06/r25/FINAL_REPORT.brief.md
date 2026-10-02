# ops/archive/root-museum/FINAL_REPORT.md
## What it is (1-2 sentences)
The 2026-07-16 final report of an autonomous "Glass Ledger + Edge Engine" build on branch `claude/glass-ledger-edge-engine` (18 commits): a leak-free feature foundation, an honesty/calibration gate engine, an append-only tamper-evident CLV ledger with an independent verifier, and three edge models — everything built INERT, founder-gated, and shadow-off.

## Key metrics/methods (formulas where given, else "not specified")
- Phase 0 leak-free foundation: shuffled-time placebo (permutation EV-vs-close driven to ~0; placebo median permutation p=0.015 on a NEGATIVE EV, no positive leak signature); mutual information MI = 0.0095 nats, p=0.060 (modest features carry nothing beyond the close).
- Phase 1 honesty engine: coverage-stamped selective rate with Wilson LCB; Mondrian Venn-Abers marginal coverage HOLDS (0.540 within [0.519, 0.552] ± 0.05); logit-pool β CI [−0.770, +0.606] → FIRE_NOTHING (τ=null, zero coverage). Calibration: OOF beta-tails + isotonic middle + monotone envelope, Brier-decomposition selection.
- Phase 2 Glass Ledger: append-only SHA-256 hash chain, publish-before-kickoff enforced at append and re-verified independently; `recompute.ts` verifier (valid export → exit 0 REPRODUCED; tampered history → exit 2 with broken seq named).
- Phase 3 edge models: closing-line distillation (Var≈0.04 target) beating baseline 6/6 walk-forward folds (mean R² 0.596); HB props closed-form EB Gamma-Poisson/NegBinomial — Brier 0.2189 < climatology 0.2285 on 111,329 real player-weeks, decile calibration fully monotone (0 inversions); residual GBM (pinball, monotone, line as fixed offset) test-pinned at val loss 0.978× noise floor.
- Staking: fractional Kelly + James-Stein haircut + Ledoit-Wolf + CLV deflator; stakes exactly 0 below 50 settled.
- Devig: proportional + Shin; intervals via Wilson/Clopper-Pearson. Walk-forward: sport-agnostic purged/embargoed; SEALED 2025 holdout (272 games, opens only with founder token).

## Data sources named
nflverse (1,871 games, 2019–2025); MLB Stats API (MLB odds honestly null — declared as a data boundary, not filled).

## Findings (numbers and facts, not vibes)
- ≈30 modules/scripts; 219 edge-lab + surface tests, all green. Branch pushed 2026-07-16 at `214d5cad`.
- Three real bugs in the author's own gate designs found by tests and fixed at root: beatable synthetic close; correlated-luck false positive; non-monotone calibration blend.
- Phase 1 fired NOTHING with the reference features — the logit-pool β falsification test concluded the market already knows everything they know (reported as the product working, not a failure).
- Price-CLV honestly unclaimed: no free licensed source carries historical decision-time prices; the OddsLineSnapshot line archive accumulates forward only after `LINE_ARCHIVE_ENABLED=true` flips, and per the intel note should flip only after the Pinnacle/eu snapshot leg lands (the PRIMARY CLV benchmark).
- Founder-gated activations list: line-archive migration apply; `PUBLISH_LEDGER=true` + founder-run external anchoring (OpenTimestamps/public gist — code builds the payload, never sends); sealed-2025-holdout token at sign-off.
- Competitor-intel reconciliation (`INTEL-RECONCILIATION-2026-07-16.md`): affiliate posture P0, DFS patent FTO P0, named reviewer before PUBLISH_LEDGER, pricing ceiling — all accepted founder decisions.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the Glass Ledger (hash-chained, publicly verifiable CLV record), the falsification-first gate design, and the "fired NOTHING = product working" refusal doctrine are the engine's core honesty machinery.
- OTHER: calibration methodology (Venn-Abers, logit-pool β test, HB props) — engine modeling, not football strategy.

## Engine-actionable? (yes/no + one-line what)
yes — this IS the engine's calibration core; execute the founder-gated activation list (line archive, ledger wiring, holdout token) and port the OOF/Venn-Abers/β-falsification stack into the current engine.
