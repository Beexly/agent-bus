# arxiv-program/research/2026-09-21/arxiv-deep/0012-a-statistical-and-machine-learning-framework.md
## What it is (1-2 sentences)
Deep read (full text) of Jimerson (2026, arXiv:2609.06610), a 13-game single-team NLL box-lacrosse xG study comparing 9 statistical/ML specs with shot-level attribution to shooters, passers, and pickers. Verdict in file: REJECT — best xG model beats a constant base-rate predictor by only ~1%, data/code proprietary, no transfer to any GSE lane.
## Key metrics/methods (formulas where given, else "not specified")
- Equations quoted: distance d_i = √((85−x_i)²+y_i²); angle θ_i = atan2(|y_i|, 85−x_i)·180/π; LOGO split (13 game folds); LogLoss −(1/N)Σ[y_i log p_i + (1−y_i) log(1−p_i)]; Brier (1/N)Σ(p_i−y_i)²; ECE Σ_b (n_b/N)|ȳ_b−p̄_b| (10 bins); attribution OI_p = xG_p + xA_p; xPV_i = p̂_i^obs − p̂_i^{no-pick} (counterfactual, "not a causal treatment effect").
- Best (baseline RF): log loss 0.4189 (+1.22% vs base-rate 0.4241), Brier 0.1260, ROC AUC 0.604, AP 0.214, ECE 0.026; 4 of 9 specs beat the constant benchmark, 5 did not.
## Data sources named
Proprietary manual video annotation (Shot-Plotter app) of 13 Rochester Knighthawks games (Jan–Apr 2026): 1,006 shot attempts (151 goals, 587 saved, 203 missed, 65 blocked; 15.01% goal rate); not publicly available.
## Findings (numbers and facts, not vibes)
- Rich contextual annotation (≈17 features including two-man-action roles and qualifying pick types) adds ~1% over a constant base rate at n=1,006; game-level log loss ranged 0.295–0.597 (SD 0.086494) — variation dwarfs spec differences.
- xPV diagnostics: mean |xPV| 0.0222 vs null mean 0.0236 (indistinguishable from noise); xPV totals correlate with raw pick count at Spearman ρ=0.98.
- Coordinate noise: ±1 ft → mean |ΔxG| 0.0116; ±3 ft → 0.0227 (xG SD 0.0717); no inter-rater reliability assessed.
- Author's own caveats: model selection on the same CV used for comparison (descriptive, not confirmatory); code and data retained proprietary.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: cautionary analogue — the +1% result over base rate is a pricing discipline lesson for any NFL manual-charting effort; the transferable piece is the LOGO-CV + base-rate-benchmark + permutation-diagnostic discipline (require any charted feature to beat a constant benchmark game-held-out before entering the engine).
## Engine-actionable? (yes/no + one-line what)
no — lacrosse outside all GSE lanes; keep only the methodological gate (charted features must clear a base-rate LOGO benchmark).
