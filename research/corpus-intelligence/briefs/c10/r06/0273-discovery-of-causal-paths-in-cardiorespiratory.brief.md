# arxiv-program/research/2026-09-21/arxiv-deep/0273-discovery-of-causal-paths-in-cardiorespiratory.md
## What it is (1-2 sentences)
A 2018 application paper (Młyńczak & Krysztofiak, arXiv:1807.03152) running six off-the-shelf R causal-discovery algorithms on resting ECG + breathing parameters of 100 elite Olympic athletes. The reader's verdict is REJECT: no novel method, no NFL-transferable data, no use in game-outcome modeling.
## Key metrics/methods (formulas where given, else "not specified")
- Breathing regularity: BR = (100 − 20·(tanh(σ_iRR/iRR̄) + tanh(σ_InsT/InsT̄) + tanh(σ_ExpT/ExpT̄) + tanh(σ_InsV/InsV̄) + tanh(σ_ExpV/ExpV̄))) [%].
- Bayesian correlation pre-screen: cor(X,Y) = β̂·σ(Y)/σ(X), significant at MPE > 0.9.
- Generalized correlation: r*_{y|x} = sign(r_xy)·√(1 − E{(Y−E(Y|X))²}/var(Y)); |r*_{x|y}| > |r*_{y|x}| suggests direction.
- Six methods: Generalized Correlations, CAM (selGAM pruning), FGES, GFCI, Hill-Climbing, Tabu Search; Sobel mediation follow-ups.
## Data sources named
National Centre for Sports Medicine, Warsaw — 116 elite athletes pre-Rio 2016, 100 analyzed (32 female, ages 24.6±6.4); single-lead ECG + impedance pneumography (Pneumonitor 2), 250 Hz, 6-min supine + 6-min standing. Dataset/R script promised as journal supplement; no URL found.
## Findings (numbers and facts, not vibes)
- Supine: 5/6 methods agree cInsT → cExpT; 5/6 agree cInsV → cExpV; all methods agree cExpV → cExpT and cInsV → cExpT; 3 methods find cardiac–respiratory links (CAM: cInsV→RMSSD, cExpV→RMSSD; CAM/HC: HR→cInsT; Tabu: HR→cExpT). Cardiac direction ambiguous (GC/CAM: RMSSD→HR vs HC/Tabu: opposite).
- Standing: 3/6 confirm cInsV → cExpV; 3 methods (GC, HC, Tabu) support ciRR → HR.
- Mediation: five candidate 3-node paths tested via Sobel — none statistically significant.
- Authors' own summary: cardiorespiratory path discovery "appears ambiguous"; effects "mild".
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Cross-method agreement protocol (report only edges supported by ≥3 of 6 discovery algorithms across constraint/score/asymmetry families) is a reusable cheap robustness screen for any future DAG-based variable selection. [OTHER]
## Engine-actionable? (yes/no + one-line what)
No — physiology data is unobtainable for NFL players and findings map to no product; the agreement protocol is a method note only.
