# docs/ops/BRIER_OPTIMIZATION_TECHNIQUES.md
## What it is (1-2 sentences)
An ops playbook for minimizing the GSE prediction engine's Brier score via the Murphy decomposition, covering selective publishing, dead-group pausing, calibration-map policy, and an integrity condition for the paused set.

## Key metrics/methods (formulas where given, else "not specified")
- Murphy identity: BS = E[(P−Y)²] ≈ REL − RES + UNC.
- Live metrics (2026-08-10): Brier ~0.2478, ECE ~0.0357, RES ~0.005, REL ~0.004, UNC ~0.25; floor target 0.22.
- Gap analysis: need RES − REL ≳ UNC − 0.22 ≈ 0.03, so RES must rise ~6–10×.
- Calibrated shortcut: BS = UNC − Var[P]; need Var[P|A_δ] ≳ 0.03.
- Selective publishing: only publish picks with |p−0.5| ≥ δ; paused set A_δᶜ = {|P−0.5|<δ}.
- Integrity condition on paused set: BS_paused ≈ UNC_paused ≈ 0.25. If BS_paused ≪ 0.25 → discarding skill (δ too large). If BS_paused ≫ 0.25 → hiding bad region (fix model).
- Dual objective: (1) maximize RES subject to Brier ≤ min(0.26, baseline+0.03); (2) prefer integrity-ok candidates; (3) never recommend probability stretch p' = 0.5 + k(p−0.5).
- Techniques/code map: independent trueProb (`build-independent-fair-values.ts`), evidence shrink + market-anchor blend (`live-calibration-p.ts`), selective publish (`selective-publish.ts`), integrity-guarded δ / segmented Murphy (`segmented-murphy.ts`), dead-group pause (`ranking-pause-apply.ts`), Brier-OGD ensemble (`brier-ogd-ensemble.ts`, shadow), Platt/Temp/Beta/Isotonic+CIR bake-off (apply OFF), stretch explicitly forbidden.
- What will NOT hit 0.22 alone: calibration maps (REL already ~0.004), more product surface/UI, inventing PROVEN or lowering floors, probability stretch.
- Law: `PERFORMANCE_STATS` OFF, maps OFF, `AUTO_PUBLISH` false, free-path ABSENT-only, no invent PROVEN.

## Data sources named
Independent trueProb models, market-anchor odds (denser books via THE_ODDS_API_KEY), multi-model ensemble member signals, RPCP surface fields (`integrityStatus`, `pausedBrier`, `publishedVarP`, `varPGap`).

## Findings (numbers and facts, not vibes)
- Live Brier ~0.2478 vs floor 0.22; gap is resolution (0.005) vs needed ~0.03.
- REL is already ~0.004, so calibration maps alone cannot close the gap.
- Selective publishing runtime ON; dead-group pause coded with durable founder-yes; Brier-OGD ensemble in shadow; maps default OFF.
- Integrity condition formalizes that a paused set scoring far below 0.25 means δ is discarding skill, and far above 0.25 means the model is hiding a bad region.
- Bake-off order: Raw → Temperature → Platt IRLS → Isotonic PAVA/CIR → hierarchical EB-τ.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None QB/behavior/scheme related — all tagged OTHER (model calibration, selective publishing, integrity gating).

## Engine-actionable? (yes/no + one-line what)
Yes — re-verify the selective-publish δ and paused-set integrity metrics still pass on current data; resolution is the binding constraint on calibration.
