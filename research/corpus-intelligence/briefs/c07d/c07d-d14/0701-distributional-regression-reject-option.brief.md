# arxiv-deep/0701-distributional-regression-reject-option.md
## What it is (1-2 sentences)
Read-and-ledger of Dombry & Zaoui (2025), "Distributional regression with reject option" (arXiv:2503.23782v1): extends the reject option (abstention) to distributional regression with an **optimal** rule at a fixed, exactly controlled rejection rate ε — reject when the predictive distribution's CRPS entropy exceeds a threshold λ_ε. Verdict: ADAPT — the optimal fixed-rate reject rule is exactly GSE's publish-gate problem, complementing the conformal threshold of ledger 0700.

## Key metrics/methods (formulas where given, else "not specified")
- CRPS: `CRPS(H,y) = ∫(H(u) − 1{y≤u})²du`.
- Average-CRPS decomposition: `CRPS̄(H,K) = ent(K) + Div(H,K)` with `ent(K) = ∫K(u)(1−K(u))du`, `Div(H,K) = ∫(H(u)−K(u))²du` (Lemma 5). Lemma 1: `E[CRPS(F*_X,Y)|X] = ent(F*_X)`.
- Risk with rejection cost: `R_λ(Γ_F) = E[CRPS(F_X,Y)·1{Γ_F(X)≠re}] + λ·r(Γ_F)`.
- Optimal rule (Prop. 1): `Γ*_λ(X) = F*_X` iff `ent(F*_X) ≤ λ`, else reject.
- Fixed-rate rule (Prop. 3): `Γ*_ε = Γ*_{λ_ε}` with `λ_ε = G_ent^{-1}(1−ε)`, achieving exactly `r = ε`.
- Excess risk (Thm. 1): `E[ℰ_{λ_ε}(Γ̂_ε)] ≤ 2E[Div(F̂_{n,X},F*_X)] + E[|ent(F̂_{n,X})−ent(F*_X)|] + MC/√N + u`; Cor. 1: `≤ 3E[W_1(F̂_{n,X},F*_X)] + MC/√N + u`; distributional KNN rate `≲ n^{-h/(2h+d)} + N^{-1/2}` for d≥2 (Cor. 3).
- Plug-in entropy for weighted-average estimators: `ent(F̂_{n,X}) = Σ_iΣ_j w_i w_j (Y_j−Y_i)1{Y_i<Y_j}` (Lemma 6).
- Rejection-rate control is distribution-free: `E[|r(Γ̂_ε) − ε|] ≤ CN^{-1/2}` (Prop. 5); randomization ζ ~ U[0,u] ensures exact rate attainment.
- Assumptions: ent(F*_X) has a continuous distribution (needed for exact ε); ent bounded by M; W_1-regular conditional laws for KNN rates.
- Estimation: labeled D_n fits F̂_{n,X} (distributional KNN or distributional random forest, DRF); unlabeled D_N calibrates the entropy CDF Ĝ (semi-supervised plug-in).

## Data sources named
- Three UCI regression benchmarks (no sports data): QSAR Aquatic Toxicity (546×8, target 0.12–10.05, low heteroscedasticity); Airfoil Self-Noise (1503×5, target 103–140, strong heteroscedasticity); Concrete Compressive Strength (1030×8, target 2.33–82.6 MPa, strong heteroscedasticity).
- Split: 50% labeled train / 20% unlabeled calibration / 30% test.
- Code: https://github.com/ZaouiAmed/DistributionalRegression_RejectOption; R packages `KernelKnn`, `DRF`, `ScoringRule`. Experiments: 100 repetitions, mean ± std, ε swept over {0, 0.1, …, 0.9}.

## Findings (numbers and facts, not vibes)
- Airfoil DRF: Err 1.53(0.05) at ε=0 → 1.11(0.06) at ε=0.5 → 0.78(0.09) at ε=0.9.
- Concrete DRF: Err 3.55(0.14) at ε=0 → 1.92(0.22) at ε=0.9. QSAR DRF: 0.65(0.04) → 0.37(0.09).
- Rejection rates track targets almost exactly with only 20% unlabeled calibration data: ε=0.1 → r̂=0.10(0.02); ε=0.5 → r̂=0.50(0.04); ε=0.9 → r̂=0.90(0.02).
- DRF uniformly beats distributional KNN on error; authors conclude calibration of the entropy threshold matters more than the estimator choice.
- Limitations: KNN minimax rate n^{-h/(2h+d)} suffers the curse of dimensionality; Lemma 6's plug-in is only for local-average estimators (no closed form for neural/GNN distributional models — would need a separate entropy head); exact-ε claim is asymptotic (Assumption 1 continuity fails if entropy distribution has atoms, e.g., degenerate distributions in NFL score mixtures); no comparison against simply thresholding predictive variance.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL (OTHER — publish/withhold gate):** This is the theoretically optimal version of GSE's sit-out decision. For a probabilistic GSE engine, the publish statistic is CRPS entropy of the MOV (margin-of-victory) conditional distribution: publish iff `ent(F̂_x) ≤ λ_ε` at a fixed sit-out fraction ε (e.g., 15–20%), with the distribution-free rate guarantee E[|r̂−ε|] ≤ CN^{-1/2}. This serves the **trust-target intake** program directly: only calibrated, publishable picks reach the trust surface, and the sit-out rate is controllable to a contract number rather than vibes.
- **CALIBRATION/SIZING (OTHER):** Pairs with ledger 0700 (conformal abstention: coverage guarantee + ROC-optimal threshold) — the two are the natural A/B candidates for the publish gate; 0700 gives coverage guarantees, 0701 gives the optimal rule for a fixed rejection budget. Also pairs with 0745 (weighted CPS under shift) for the interval layer behind the gate.
- **OTHER (regime-conditional extension):** The ledger's improvement experiment proposes a *regime-conditional* rejection budget — larger sit-out fractions in high-entropy regimes (division games, heavy weather, short rest) — attacking the paper's single-global-λ limitation; this is a coaching/schedule-context application (COACHING-adjacent, marked OTHER since it conditions on game context rather than coaching behavior).
- UNCERTAIN: exact-ε attainment under NFL score-mixture atoms (degenerate entropy values); whether CRPS-entropy abstention beats simple predictive-variance thresholding (not tested in the paper).

## Engine-actionable? (yes/no + one-line what)
**Yes** — fit a distributional MOV model (DRF/quantile), compute CRPS entropy per game via Lemma 6, calibrate λ_ε for ε∈{0.15–0.2} on a rolling unlabeled window, publish only below threshold; A/B vs the 0700 conformal gate with acceptance gate |r̂−ε| ≤ 2pp and ≥1pp ROI lift over no-gate. ~1 week per spec.

Referenced files/papers/datasets: UCI QSAR/Airfoil/Concrete; Bair-style semi-supervised plug-in; R `ScoringRule`, `KernelKnn`, `DRF`; GitHub ZaouiAmed/DistributionalRegression_RejectOption; corpus cross-ref ledger 0700 (conformal abstention).
