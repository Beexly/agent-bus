# arxiv-program/research/2026-09-21/arxiv-deep/0811-causal-feature-selection-contextual-multi-armed.md
## What it is (1-2 sentences)
Ledger read of arXiv:2409.13888 (Zhao & Jiang, 2024) introducing HIE (Heterogeneous Incremental Effect) and HDD (Heterogeneous Distribution Divergence) — model-free feature screens that rank context features by the heterogeneous treatment effect they induce across bandit arms rather than outcome correlation. Verdict: ADAPT — cheap pre-screen for GSE's pick-selection/abstention bandits, but scores must be re-derived for win/loss/ROI rewards and de-confounded for GSE's non-randomized pick logs.
## Key metrics/methods (formulas where given, else "not specified")
- HIE: FI_HIE(x) = Σ_b (N_b/N)·(P_{w_b}(Y=1) − P_{w*}(Y=1)), w_b = argmax per-bin arm, w* global winner (features binned into m_x bins).
- HDD: FI_HDD(x) = Σ_b (N_b/N)·D_b(P_{b_1},…,P_{b_k}) − D(P_1,…,P_k), D_b = pairwise KL Σ_{i,j}(N_{b_i}N_{b_j}/N_b²)·Σ_v P_{b_i}(Y=v)·log(P_{b_i}(Y=v)/P_{b_j}(Y=v)) over binary outcomes.
- Combined: FI(x) = α1·ĤI_HIE(x) + α2·ĤI_HDD(x), min-max normalized.
## Data sources named
Synthetic: CausalML HTE data generator, 10 trials × 50,000 samples, 3 arms, 10 features (5 true HTE-important, 2 correlational-but-non-HTE, 3 irrelevant). Real: online randomized Roblox recommender experiment, 4 arms, 600,000 samples (proprietary); offline-matching reward evaluation; one synthetic random feature added as negative control.
## Findings (numbers and facts, not vibes)
- Compute time per trial (10 features × 50,000 samples): HIE+HDD 2.7s vs LinUCB 647.3s vs nonlinear LinUCB 665.5s vs CohortMAB 82.5s — model-free screen ~240x faster than LinUCB-based selection, ~30x faster than CohortMAB.
- Synthetic: HIE/HDD/combined "effectively select the true important features" producing higher downstream CMAB reward across LinUCB, nonlinear LinUCB, and Cohort Thompson Sampling (figure-reported, no exact numbers).
- Real: importance scores align with downstream CMAB rewards; irrelevant random feature ranked lowest; HIE "more sensitive — dropping to the lowest for unimportant features" (figure-reported, qualitative).
- Paper claims model-free HIE/HDD match or beat model-embedded selection on downstream reward with no model-misspecification risk; no p-values or CIs stated.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (feature selection): HTE-based screen for features that change WHICH pick/arm is optimal — natural feeder for pick-selection and abstention bandits; pairs with ledger 0810 (AMS/changepoint bandit).
- TRUST-SIGNAL: acceptance-gate pattern — check HIE/HDD ranks a known-spurious correlate (e.g., raw team win%) below true HTE features like line-movement buckets before trusting the screen.
- OTHER (causal): biggest transfer risk is GSE has no randomized pick-assignment log, so naive per-bin arm-conditional probabilities would measure selection artifacts, not HTE — needs inverse-propensity weighting from the engine's posting policy or restriction to pre-filter all-model-output games.
## Engine-actionable? (yes/no + one-line what)
Yes — build HIE/HDD binary-reward feature screen over engine predictions DB (arms = {bet, skip}) with IPS de-confounding, feeding top-k features into a LinUCB/Thompson pick selector tested time-ordered on 2025 holdout by ROI.
