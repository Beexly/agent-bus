# docs/ops/archive/root-museum/BUILD_LOG.md
## What it is (1-2 sentences)
Full build log of the Glass Ledger + Edge Engine autonomous build (2026-07-16) on branch `claude/glass-ledger-edge-engine`: a leak-free edge lab (Phase 0), honesty engine (Phase 1), Glass Ledger + open verifier (Phase 2), edge models (Phase 3), and inert frontier fusion (Phase 4), with real-data acceptance runs and a post-build intel reconciliation.
## Key metrics/methods (formulas where given, else "not specified")
- Phase 0: as-of feature store with `assertNoLookahead()` (leak = runtime error); sport-agnostic purged+embargoed walk-forward splits + sealed forward holdout (founder token); proportional + Shin devig (bisection); Wilson + Clopper-Pearson LCBs; placebo gate using self-calibrating within-run outcome-permutation null (median p across runs), one-sided rule (positive placebo EV only = leak verdict).
- Phase 1: OOF calibration (beta tails + isotonic middle, cross-fit selection by held-out Brier reliability-resolution decomposition, NOT ECE); logit-pool falsifiable edge test Y ~ logit(q) + β·logit(p), Newton MLE, CI∋0 ⇒ FIRE_NOTHING; inductive Venn-Abers, fire ⇔ LCB(e) > τ.
- Phase 2: append-only hash-chained ledger, publish-before-kickoff enforced, open recompute verifier; Kelly with λ≈0.3 fractional, James-Stein haircut, Ledoit-Wolf shrinkage, self-disarm below 50 settled.
- Phase 3: close-distillation, HB props model, residual GBM.
- Phase 4: precision-weighted signal fusion, ACI, Learn-then-Test (inert).
## Data sources named
nflverse games (CC-BY-4.0; 2019-2025), MLB Stats API loader (odds honestly null until archive accumulates), the Odds API forward-accumulating line archive, 111,329 real player-weeks for props validation.
## Findings (numbers and facts, not vibes)
- Phase 0 acceptance (seed 20260716, exit 0): 1,871 games loaded (2019-2025); 2025 season SEALED (272 games, never evaluated); 1,508 eval rows. Placebo gate PASSED: median permutation p=0.015 on NEGATIVE median EV (−0.0912). MI probe: I(score; Y | q_close) = 0.0095 nats, p=0.060 — schedule features carry no measurable information beyond the close. Real-run EV-vs-close = −0.113 ± 0.048 (fired 851/1056), labeled NOT claimable.
- Phase 1 acceptance (exit 0): logit-pool β = −0.082 ± 0.351, CI [−0.770, +0.606] → FIRE_NOTHING; τ=null → zero coverage honestly reported; Venn-Abers marginal coverage HOLDS (realized 0.540 in [0.519, 0.552] ± 0.05).
- Phase 3 acceptance: distillation beats baseline 6/6 walk-forward folds (mean R² 0.596 vs baseline on real closes); props HB validated (Brier 0.2189 < climatology 0.2285, decile calibration fully monotone).
- Side-finding: raw nfldata `spread_line` is POSITIVE=home-favored (r=+0.43 vs result; 2007 NE 16-0 home games all strongly positive) — possible pre-existing sign bug in `historical-replay.ts` flagged for review, not touched.
- Founder authorized push: `claude/glass-ledger-edge-engine` (214d5cad) on origin; intel reconciliation in `reports/edge-lab/INTEL-RECONCILIATION-2026-07-16.md`.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: append-only Merkle-sealed pick ledger with open recompute verifier; every public number carries Wilson/CP LCB; display guard THROWS when metrics lack coverage/LCB/CLV/walk-forward provenance; honest NO (FIRE_NOTHING, zero coverage) accepted as a valid outcome.
- OTHER: Shin devig over proportional for favorite-longshot correction; grouping-loss/MI probes before model builds; no look-ahead by construction; sealed holdout discipline.
## Engine-actionable? (yes/no + one-line what)
Yes — the entire edge-lab harness (as-of store, purged walk-forward, Shin devig, logit-pool FIRE_NOTHING gate, grouping-loss/MI probes, open verifier) is the standing pattern for validating any engine probability claim before publish.
