# arxiv-program/research/2026-09-21/arxiv-deep/0701-distributional-regression-reject-option.md
## What it is (1-2 sentences)
Theory and plug-in procedure for the reject option in distributional regression: abstain from estimating the full conditional distribution Y|X when uncertainty is too high, with the optimal rule at a fixed, exactly controlled rejection rate ε (Dombry, Zaoui, 2025, arXiv:2503.23782v1). Ledger verdict: ADAPT — the optimal reject rule at a fixed rejection rate is exactly the GSE publish-gate problem: fix a sit-out fraction ε and reject the highest-CRPS-entropy distributional predictions.
## Key metrics/methods (formulas where given, else "not specified")
- Risk: R_λ(Γ_F) = E[CRPS(F_X,Y)·1{Γ_F(X)≠re}] + λ·r(Γ_F).
- CRPS(H,y) = ∫(H(u) − 1{y≤u})²du; average-CRPS decomposition: CRPS̄(H,K) = ent(K) + Div(H,K) with ent(K) = ∫K(u)(1−K(u))du, Div(H,K) = ∫(H(u)−K(u))²du (Lemma 5); E[CRPS(F*_X,Y)|X] = ent(F*_X) (Lemma 1).
- Optimal rule (Prop. 1): Γ*_λ(X) = F*_X iff ent(F*_X) ≤ λ, else reject. At fixed rate ε (Prop. 3): Γ*_ε = Γ*_{λ_ε} with λ_ε = G_ent^{-1}(1−ε), achieving exactly r = ε.
- Semi-supervised plug-in: labeled D_n fits F̂_{n,X} (distributional KNN or distributional random forest); unlabeled D_N calibrates the entropy CDF Ĝ; randomization ζ ~ U[0,u] ensures exact rate attainment.
- Rejection-rate control is distribution-free: E[|r(Γ̂_ε) − ε|] ≤ CN^{-1/2} (Prop. 5).
- Plug-in entropy for weighted-average estimators: ent(F̂_{n,X}) = Σ_iΣ_j w_i w_j (Y_j−Y_i)1{Y_i<Y_j} (Lemma 6).
- Excess risk (Thm. 1): ≤ 2E[Div(F̂,F*)] + E[|ent(F̂)−ent(F*)|] + MC/√N + u; distributional KNN rate ≲ n^{-h/(2h+d)} + N^{-1/2} for d≥2 (Cor. 3).
- Assumptions: ent(F*_X) has a continuous distribution (needed for exact ε); ent bounded by M; W_1-regular conditional laws.
## Data sources named
Three UCI regression benchmarks: QSAR Aquatic Toxicity (546×8, target 0.12–10.05, low heteroscedasticity), Airfoil Self-Noise (1503×5, target 103–140, strong heteroscedasticity), Concrete Compressive Strength (1030×8, target 2.33–82.6 MPa, strong heteroscedasticity). No sports data. Split: 50% labeled train / 20% unlabeled calibration / 30% test. Code: https://github.com/ZaouiAmed/DistributionalRegression_RejectOption; R packages KernelKnn, DRF, ScoringRule. No sports evaluation.
## Findings (numbers and facts, not vibes)
- Airfoil DRF: Err 1.53(0.05) at ε=0 → 1.11(0.06) at ε=0.5 → 0.78(0.09) at ε=0.9.
- Rejection rates track targets almost exactly: ε=0.1 → r̂=0.10(0.02); ε=0.5 → r̂=0.50(0.04); ε=0.9 → r̂=0.90(0.02), even with only 20% unlabeled data (100 repetitions, mean ± std).
- Concrete DRF: Err 3.55(0.14) at ε=0 → 1.92(0.22) at ε=0.9; QSAR DRF: 0.65(0.04) → 0.37(0.09).
- DRF uniformly beats distributional KNN on error; authors conclude calibration of the entropy threshold matters more than the estimator choice.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Publish/withhold gate at a fixed sit-out fraction (e.g., ε=0.15): reject games with highest CRPS-entropy MOV distributions: TRUST-SIGNAL
- A/B against the 0700 conformal abstention gate (coverage guarantee vs fixed-rate optimality): TRUST-SIGNAL
- Regime-conditional rejection budgets (larger ε for division games, weather, short rest): OTHER
- Semi-supervised calibration on unlabeled recent games: OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — fit a distributional model of NFL margin of victory, compute CRPS entropy per game (Lemma 6 for DRF, entropy head for NN), calibrate λ_ε on a rolling unlabeled window for a target sit-out rate (e.g., 15%), and publish picks only when ent(F̂_{n,x}) ≤ λ_ε; ADOPT if |r̂−ε| ≤ 2pp with ≥1pp published-game ROI lift over the no-gate baseline and lower CRPS error (~1 week effort).
