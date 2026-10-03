# arxiv-program/research/2026-09-21/arxiv-deep/1143-rethinking-player-evaluation-gax-beyond.md
## What it is (1-2 sentences)
A double-machine-learning framework (Bajons & Kook 2025, arXiv:2509.20083) that converts observed-minus-expected metrics (goals above expectation, GAX) into player-effect estimates with valid frequentist inference, via residualization against a propensity model. Ships a worked NFL application: residualized completion percentage above expectation (rCPAE) for the 2022/23 season using nflfastR.
## Key metrics/methods (formulas where given, else "not specified")
- Traditional: GAX_p := Σ_j (Y_j − ĥ(Z_j)) X_jp (eq. 1)
- Residualized: rGAX_p := Σ_j (Y_j − ĥ(Z_j)) (X_jp − f̂_p(Z_j)) (eq. 5), the GCM/double-ML statistic (Shah & Peters 2020; Chernozhukov et al. 2017). Implementation: xgboost for ĥ, out-of-bag-tuned ranger RF for propensity f̂_p, p-values/CIs via the comets R package.
- Proposition 1 (double robustness): β = 0 iff E[Cov(Y, X_p | Z)] = 0 — test consistent for direction of player effect even if one nuisance regression is misspecified. Product-rate condition: product of nuisance errors must be oP(N^-1). Code: https://github.com/Rob2208/rGAX_and_beyond.
## Data sources named
Soccer: StatsBomb top-5 European leagues 2015/16 — 45,197 shots, 4,308 goals, 728 shooters (≥20 shots); 13,269 shots on target, 147 keepers. NBA: 2022/23 hoopR, 150 players ≥300 shots. NFL: 2022/23 nflfastR, QBs ≥300 attempts, nflfastR CP model as ĥ. Injury: Liverpool 2017/18–2018/19 via injurytools (28 players, 42 player-season rows, 33 events).
## Findings (numbers and facts, not vibes)
- Soccer: corr(GAX, rGAX) = 0.998; all ten top rGAX players had one-sided 95% CIs excluding zero; Messi and Ronaldo were top-60 but NOT statistically significant that season.
- Robustness slopes (all-data metric on restricted-data metric): rGAX 0.936 (SE 0.005) vs GAX 0.757 (0.005); vs low-frequency model: rGAX 0.879 vs GAX 0.612 — residualization is substantially more robust to xG-model misspecification.
- Goalkeeping: corr(GSAX, rGSAX) = 0.999; top 8 keepers had significant negative effects on scoring likelihood.
- NBA: corr(qSI, rqSI) = 0.984 (binary), 0.964 (score value).
- NFL rCPAE 2022/23 (CPAE rank | rCPAE rank): Geno Smith (1|1), Mahomes (2|2), Burrow (3|3), Herbert (4|4), Cousins (6|5), Hurts (5|6), Prescott (7|7), Dalton (8|8), Murray (11|9), Allen (12|10), Brissett (13|11), Tagovailoa (9|12), Lawrence (10|13), Rodgers (15|14), Stafford (14|15); corr(CPAE, rCPAE) = 0.997.
- Injury: corr(IAX, rIAX) = 0.98; no player showed substantial elevated injury proneness (correctly null on tiny n).
- Caveat: correlation ≈ 1 with raw metrics everywhere — marginal value is the uncertainty quantification (CIs/p-values), not new rankings. Figures in the paper are not multiplicity-corrected; authors prescribe Bonferroni-Holm/BH/BY for decision use.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- rCPAE with valid CIs corrects selection bias in QB accuracy metrics (QB-BEHAVIOR): elite QBs face different pass-difficulty distributions — the propensity f̂_p term adjusts for situational selection (e.g., scheme-generated easy throws), a correction raw CPOE leaderboards lack.
- Residualized yards-above-expectation extension to receiving/rushing (SCHEME): propensity = target/carry share under context — separates player effect from playcall-distribution effects (COACHING-adjacent signal on scheme design).
- Messi/Ronaldo non-significance (TRUST-SIGNAL): published above-expectation leaderboards without uncertainty are exactly the "assert, don't test" failure mode — rank-order claims need CIs before they become products or posts.
- Robustness slopes (TRUST-SIGNAL): residualized metrics survive misspecification of the expectation model ~20 points better — metric stability under model swap is the bar for internal QB grades.
## Engine-actionable? (yes/no + one-line what)
Yes — build a weekly rCPAE QB leaderboard with one-sided 95% CIs + BH-corrected q-values on nflfastR 2019–2026 data, with the scheme-vs-accuracy decomposition (accuracy effect vs situational-selection effect) as the headline product feature; gate on reproducing the paper's top-10 ordering (±2 rank tolerance).
