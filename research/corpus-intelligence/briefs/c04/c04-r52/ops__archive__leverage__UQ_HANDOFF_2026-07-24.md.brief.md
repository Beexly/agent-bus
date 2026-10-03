# docs/ops/archive/leverage/UQ_HANDOFF_2026-07-24.md
## What it is (1-2 sentences)
The 2026-07-24 "Universe of Uncertainty Quantification & Honesty Stack" coding-agent handoff: the complete synthesis of an extended research session prescribing priority-ordered pure-TypeScript modules to add/complete (Venn-Abers calibration family, Mondrian conformal, multicalibration, sports taxonomy, Edge Lab agent roles) plus integration and testing expectations.

## Key metrics/methods (formulas where given, else "not specified")
- Cross Venn-Abers (CVAP): K-fold IVAP + geometric-mean aggregation in log-space with Neumaier summation (exact formulas deferred to session notes; TypeScript sketches referenced, not in file).
- Aggregation module: `logSpaceGeometricMeanAggregation` (Neumaier), arithmetic mean aggregator, multiprobability → single point (midpoint / lower / minimax).
- LWT-MCPS: Levene-Welch tree + KNN feature augmentation + per-leaf CPD; Brown-Forsythe preferred split quality; start with split-quality function + leaf assignment, full production tree grower deferred.
- Multicalibration: iterative group × bin audit + local isotonic (or Venn-Abers) patch, min-sample guards, soft blending λ; implement only the binary / group-indicator special case of the 2025 van der Laan & Alaa Venn-multicalibration framework first.
- Sports taxonomy: concrete Tier-1 / Tier-2 group functions (home/away, favorite/underdog, rest buckets, intersections) + diagnostics (size, coverage, width per category).
- Property tests required: multiprobability width ≥ 0, p0 ≤ p1 after ordering, coverage diagnostics on synthetic exchangeable data.

## Data sources named
- None external; all modules consume engine internals, synthetic exchangeable data (for property tests), and replay harnesses.
- Partnership approach named for sports-science AI companies: Catapult, VALD, Kitman Labs, Stats Perform, etc. — honesty layer on top of their data.
- Non-code artifacts synthesized in-session (to place in docs/): competitive teardown of sports-science AI companies; TradingAgents-style multi-agent Edge Lab map (Market Microstructure Analyst, Feature Analyst, Placebo Analyst, Calibration Analyst, Decision Agent, Risk/Honesty Guardian, Glass Ledger); highest-leverage revenue action plan; top AI agent systems by category with GSE transfer notes.

## Findings (numbers and facts, not vibes)
- Already present in repo at handoff time (do not rewrite): `calibration/ivap.ts` (solid Inductive Venn-Abers + linear-time PAV), `conformal-intervals.ts`, `edge-lab/selective-gate.ts`, calibration maps, placebo, Glass Ledger/Pedersen.
- Ten priority-ordered modules prescribed: 1) extract linear-time weighted PAV into `calibration/pav.ts`; 2) `calibration/cvap.ts`; 3) `calibration/aggregation.ts`; 4) `calibration/local-isotonic-patch.ts`; 5) `conformal/mondrian.ts`; 6) `conformal/levene-welch.ts`; 7) LWT-MCPS sketch; 8) `calibration/multicalib-audit-patch.ts`; 9) Venn-multicalibration notes (binary/group-indicator first); 10) `conformal/sports-taxonomy.ts`.
- Immediate next actions: polish `pav.ts` + Neumaier helpers; implement `cvap.ts` + `aggregation.ts`; add sports taxonomy + basic Mondrian residual manager; typed Edge Lab agent-role interface file + thin orchestrator stub; write the partnership one-pager into `docs/ops/sports-science-partnerships.md`; verify against existing conformal/selective-gate/ledger tests.
- Integration points: wire IVAP/CVAP multiprobability into `selective-gate.ts` (width and lower endpoint as primary No-Bet signals); record full multiprobability + taxonomy category + conformal set into Glass Ledger/Pedersen commitments; walk-forward diagnostics for per-category coverage and interval width; pure TypeScript, no external ML libs for core UQ primitives.
- Testing: unit tests for PAV/IVAP edges, geometric aggregation incl. extreme probabilities, Mondrian category assignment, local isotonic patch min-sample behavior; do not re-implement core PAV or IVAP — extend and test.
- Design principles: finite-sample honesty first; No-Bet first-class; everything affecting a displayed probability/decision recomputable from the Glass Ledger; pure functions and explicit data structures over hidden mutable state.
- This handoff's intellectual output was designed, not yet verified: the coding agent's job was verification, wiring, tests, production hardening — not rediscovery.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Sports taxonomy group functions (home/away, favorite/underdog, rest buckets, intersections) — these are matchup-scheme categories the engine uses for per-category coverage diagnostics; tagged SCHEME (matchup-context grouping) and OTHER for the rest (calibration infra).
- Selective-gate No-Bet signals (multiprobability width and lower endpoint) — OTHER (decision infrastructure, no signals).
- No QB, OL, coaching, or trust-signal data — all other findings OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — one-line: the prescribed sports-taxonomy module (home/away, favorite/underdog, rest-bucket intersections with per-category size/coverage/width diagnostics) is the concrete per-situation calibration framework for engine confidence; the IVAP/CVAP→selective-gate wiring spec tells exactly how width and lower endpoint become No-Bet signals.
