# docs/ops/HEDGE_ADAPTIVE_DELTA.md
## What it is (1-2 sentences)
Shadow-advisory logic exploration (2026-08-10) for Hedge/exponential-gradient adaptive-δ: m experts each use a threshold δ_j; the runtime selective publish filter is δ=0.08 live while Hedge computes a regret-bounded recommended δ in shadow (never auto-writes SELECTIVE_PUBLISH_DELTA).
## Key metrics/methods (formulas where given, else "not specified")
- On sample (p,y): if |p−0.5| ≥ δ_j → publish, loss = Brier (p−y)²; else sit-out, loss = 0.25 ≈ UNC (coin-flip).
- Hedge/EG update: w_{t+1,j} ∝ w_{t,j}·exp(−η·ℓ_{t,j}); regret O(√(T ln m)) vs best fixed δ in hindsight.
- Analysis fields: recommendedDelta (argmax final Hedge weight), bestFixedDelta, regretVsBestFixed (≤0 good), weightOnRecommended, publishedBrier/sitOutBrier, integrityStatus ∈ {ok, warn_sitout_skill, insufficient_n}.
- Law: BS_paused ≈ UNC is the integrity condition (segmented Murphy); sit-out Brier ≪ UNC means middle has skill → do NOT raise δ.
## Data sources named
Modules: `adaptive-delta-hedge.ts`, `adaptive-delta-analysis.ts`, OCO pipeline step 3.
## Findings (numbers and facts, not vibes)
- Decision matrix: integrity warn_sitout_skill → don't raise selective δ, fix mid-p ranking; recommended δ > live δ + integrity ok → optional founder trial of higher δ after RES re-measure; recommended δ < live δ → live may be too aggressive, re-check published Brier; n < 40 → keep current δ.
- Live selective δ=0.08 is the runtime publish filter (default ON); dead-group pause is separate durable (RANKING_PAUSE_APPLY).
- Integrity condition stated two ways: "Sit-out Brier ≈ UNC" and "BS_paused ≈ UNC" (segmented Murphy) — both meaning the sat-out middle must be unskilled for δ to be safe.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Selective publishing by confidence distance from 0.5 with a regret-bounded adaptive δ is the pick-publication selectivity mechanism: TRUST-SIGNAL (publish integrity — sit-out discipline) and OTHER (publish-gate math). The "fix mid-p ranking, not δ" rule points at mid-confidence model discrimination: INFERENCE — suggests mid-range probability ranking is the weakest band.
## Engine-actionable? (yes/no + one-line what)
Yes — run the Hedge δ exploration on current settled rows: if sit-out Brier ≈ UNC and recommended δ > 0.08, trial a higher selective δ to cut publish-side Brier; if warn_sitout_skill fires, the mid-p ranking needs repair before any δ move.
