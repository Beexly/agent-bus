# ops/MURPHY_COMPONENTS_EXPLORE.md
## What it is (1-2 sentences)
A compact exploration note decomposing production's live Brier score into Murphy components (REL/RES/UNC) to identify which component blocks the PROVEN calibration gate. Conclusion: RES (resolution) near zero is the blocker; fix by selective publish, better features, dropping dead groups.

## Key metrics/methods (formulas where given, else "not specified")
- Identity: Raw Brier = mean((p-y)^2). Binned: Brier ≈ REL − RES + UNC (gap = within-bin variance). No binning scheme specified in file (bin count/strategy INFERENCE: not given; the launch doc uses 10 equal-width bins for ECE elsewhere, but that is not stated here).
- Code: `probability-calibration.ts` `brierDecomposition`; `murphy-components-explore.ts`.
- Work order: 1) RES — selective publish, better features, drop dead groups; 2) REL — only after RES moves: Platt IRLS / Temp / Isotonic; 3) never lower floors to greenwash UNC/REL.

## Data sources named
None named in the file (live production picks corpus; source datasets not specified).

## Findings (numbers and facts, not vibes)
1. Live production components: Brier 0.275 (fails floor ≤0.22); REL 0.026 (moderate miscalibration); RES 0.002 (near zero — blocking PROVEN); UNC 0.250 (base-rate dominated).
2. Reading: RES ≈ 0 means the probabilities carry almost no discrimination — the model distinguishes picks no better than the base rate, while UNC 0.250 dominating confirms base-rate-driven outcomes.
3. Prioritized fix sequence is discrimination first (RES), recalibration (REL via Platt IRLS/temperature/isotonic) only after, and an explicit anti-greenwashing rule: never lower floors.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Murphy REL/RES/UNC decomposition as the calibration diagnostic and PROVEN gate: TRUST-SIGNAL — calibration rigor.
- "Resolution before recalibration" ordering (fix RES via selective publish/features/dead-group pruning before Platt/Temp/Isotonic): TRUST-SIGNAL + OTHER — the modeling order of operations that the engine's calibration lane must follow.
- Anti-greenwashing rule (never lower floors): TRUST-SIGNAL.
- No QB/OL/coaching/scheme content. OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — engine calibration diagnostics must report Murphy REL/RES/UNC components, treat RES ≈ 0 as the blocker signal (fix via selective publish, better features, dead-group pruning), and sequence recalibration (Platt/temperature/isotonic) only after resolution moves.
