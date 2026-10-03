# arxiv-program/research/2026-09-21/drive-deep/galaxy-sports-edge-research-audit.md
## What it is (1-2 sentences)
A 1,126-line deep read (2026-09-21) of a Drive docx that fuses two documents: (A) a methodology-quality audit of the ~1,300-row triaged arXiv corpus (58 "high" dossiers) against inflation and false positives, and (B) a system audit of GSE itself scoring true launch readiness at 29.00/100 (not the prior internal 38), with a DO NOT OPEN verdict on the customer board.
## Key metrics/methods (formulas where given, else "not specified")
- Launch Readiness Index: Composite = Σ w_i·S_i over 8 dimensions (weights: calibration 0.20, CLV 0.15, NFL physical model 0.15, NCAAF 0.10, MLB 0.10, fantasy/props 0.10, ops 0.10, hygiene 0.10). Composite = 2.40+4.20+6.30+0.00+2.50+3.40+2.00+8.20 = 29.00.
- Architectural anchor (1701.05976): Bayesian state-space on market-implied margins; team strength θ evolves between seasons AR(1) with σ²_between, within season random walk σ²_within; per-sport game noise σ_game estimated independently — a single global calibration layer is "mathematically unsound."
- Conformal formulas quoted: CQR score E_i = max(q_lo − Y_i, Y_i − q_hi); q̂ = ⌈(n+1)(1−α)⌉/n; fail-closed rule: if n < ⌈1/α⌉ − 1 → "No-Bet"/abstain, never clamp quantiles; linear-QR coverage bias ≈ α − (α−0.5)·d/n.
- CLV reporting contract: CLV_Decided = matched beats close / total decided bets with verified close = 40.8% (95% CI [0.377, 0.441]) vs 52.4% break-even floor; CLV_System = / total published recommendations = 23.2% (95% CI [0.212, 0.253]).
- Audit-standard thresholds: ECE ≤ 0.025; Brier < 0.204 over n ≥ 1,000; 90% interval coverage 0.90 ± 0.015; CLV beat-rate > 52.4%.
## Data sources named
nflverse 2020–2025; 14,251-fixture NFL corpus (1999–2025); Hermes 2025 fold (n=272); KL3 ordering duel (n=689); KL-series UX confidence sample (n=2,385). Vendors: CFBD, cfbfastR (MIT), Sportradar / The Odds API, Pinnacle / Circa feeds, ESPN Analytics via nflverse (CC-BY 4.0). Repos: github.com/bigfour/competitiveness (JAGS), github.com/springcoil/TutorialPyMCRugby (frozen PyMC3 → needs PyMC v5 migration).
## Findings (numbers and facts, not vibes)
- Tree B 14,251 NFL fixtures: closing line CRPS 7.109 (best); DAVE k=8 CRPS 7.500; pooled EPA 7.573; core Elo 7.576. DAVE beats Elo only Weeks 1–4 (+0.326); underperforms Weeks 5–18 (−0.187), with starting QB changes (−0.171), in blowouts (−0.442).
- Pooled OLS scale 36.61 vs Hermes 2025 fold 45.42 (unweighted 41.01 flagged as miscalibration anti-pattern); EPA activation must use scale 45.42, HFA 2.10 — hard-fail if scale < 30.0.
- QB-change residual variance τ² = 1.379 vs kill threshold 1.50 → killed. Hawkes branching n̂ = 0 (momentum rejected), kickoff inhibition 0.448. Wind −3.007 yds/mph on passing yardage; rain 30.1% incomplete vs 27.6% baseline. Red-zone TD VMR 1.82–1.92 (Negative Binomial confirmed, Poisson rejected). Spread×Total Spearman ρ = 0.016 → independence; post-cover live total drag: Over rate 0.538 after 14-pt cover → keep as exploitable.
- W5–W8 features (Wasserstein, DFA, Intrinsic Dimension, Permutation Entropy): 12/12 failed → permanently killed.
- Production: displayed confidence Brier 0.3617, z = −10.7 (anti-predictive); marketFairProb Brier 0.2189 < rankingP 0.2462 < confidence 0.2741 (n=689); CLV 23.2% [0.212, 0.253] vs 52.4% floor.
- LSTM + Brier loss → Brier 0.159 vs Transformer + BCE (AUC 0.847, worse calibration) on NCAA (2508.02725) — direct evidence for Brier-loss training.
- VERSA: 18.81% of K-League event logs had state-transition inconsistencies.
- Triaged paper verdicts: 1701.05976 Accurate (anchor); 2501.17711 Heavily Inflated (keep only Zero-Inflated Compound Poisson head); 1607.00379 Heavily Inflated (frozen 2014 PyMC3 tutorial, downgrade High→Low); ten dead-domain papers excluded (biomechanics, telecom, astrophysics, fluid dynamics, materials, MRI, nuclear physics, heliophysics, UI studies, e-commerce recsys).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QB-change residual variance τ²=1.379 below 1.50 kill threshold → QB-change variance scaling killed as a feature.
- TRUST-SIGNAL: anti-predictive displayed confidence (z=−10.7) is the engine's central calibration failure; doc mandates marketFairProb (Shin/Power devigged) as the sort key until the model demonstrably beats the close; fail-closed conformal rules (No-Bet on n < ⌈1/α⌉−1) are the production abstention mechanism.
- OTHER: ten dead-domain exclusions are the corpus-quality filter; dual-CLV reporting contract (23.2% / 40.8%) is the honesty standard; production gating: n ≥ 100 settled games before NFL PASS recommendations, n ≥ 1,000 to claim calibration.
## Engine-actionable? (yes/no + one-line what)
Yes — decouple performance engine from market pricing engine (never train team strength on closing lines), retrain probability heads under Brier loss not BCE, and per-sport independent σ_game with independent calibration layers.
