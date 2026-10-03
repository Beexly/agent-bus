# docs/arxiv-program/research/2026-09-21/arxiv-deep/1612-signal-credibility-index-prediction-markets.md
## What it is (1-2 sentences)
Ledger of arXiv:2604.27041 (Nechepurenko 2026): the Signal Credibility Index (SCI) — a microstructure-grounded diagnostic classifying prediction-market price jumps into informed updating vs. liquidity pressure vs. disagreement vs. concentrated manipulation, as SCI = persistence × consensus × breadth, with weighted Cobb-Douglas and time-varying extensions, validated by Monte Carlo including adversarial regimes. Verdict in the ledger: ADAPT — re-weighted toward information content rather than coordination credibility and recalibrated on NFL book data; its headline failure mode (whale Type II error) is precisely the sharp-money case GSE cares about.
## Key metrics/methods (formulas where given, else "not specified")
- ℓ_t = log[p_t/(1−p_t)]; r_t = ℓ_{t+1} − ℓ_t (Eq. 1).
- PR(t,w) = |ℓ_t − ℓ_{t−w}| / Σ_{τ=t−w+1}^{t} |ℓ_τ − ℓ_{τ−1}| ∈ [0,1] (Eq. 3); =1 iff monotone, →0 on perfect reversal.
- TS_s = 1 − |B_s − S_s|/(B_s + S_s) (Eq. 4); 0 = one-sided consensus, 1 = balanced disagreement.
- HHI_s^flow = Σ_j (|Δv_{j,s}| / Σ_j′ |Δv_{j′,s}|)² on trader net position changes over the post-shock window (Eq. 5).
- SCI_s = PR_s (1−TS_s) (1−HHI_s^flow) ∈ [0,1] (Eq. 6).
- Weighted: SCI_s^(α) = PR^α1 (1−TS)^α2 (1−HHI^flow)^α3 (Σα_i = 3) (Eq. 7); anchors: balanced (1,1,1); persistence-weighted (1.5,1,0.5) HFT; breadth-weighted (0.5,1,1.5) political markets.
- Time-varying: SCI(t;w) = PR(t,w) (1−TS(t,w)) (1−HHI^flow(t,w)) (Eq. 8); w = 60 min default (rolling); alarm rule 1[SCI(t;w) > τ]; sustained alarms >60 min = genuinely persistent signals.
- Operational classifier Ŷ_s(τ) = 1{SCI_s > τ}, Youden-optimal τ* = 0.27 on the simulation universe.
- Implementation: 5-min binned prices, Lee–Ready (1991) tick rule for aggressive volume, trader-level signed flow, multi-wallet clustering before HHI, report HHI with/without clustering; no-trade window → SCI = 0.
- Assumptions: logit returns = log-likelihood-ratio updates; trader flows reconstructable from ledgers; target is coordination credibility, explicitly NOT pure information content.
## Data sources named
No empirical dataset — validation is Monte Carlo: each path = 4 hours of 5-min bins (48 bins), p_0^+ = 0.72 (0.62 baseline + 0.10 shock, calibrated to three June–July 2024 election shocks in Tsang & Yang 2026a); eight DGPs (informed, liquidity, disagreement, whale_informed, noisy_broad, manip_then_info, persistent_two_sided, coord_manip_broad; N=2,000 each in Exp 1–2, N=1,500 in Exp 3); seed 20260429. The "2024 election shocks" application is simulation-derived, explicitly not on-chain data. Code: https://github.com/ForesightFlow/signal-credibility-index.
## Findings (numbers and facts, not vibes)
- Exp 1 (3-DGP): AUC = 0.984, 95% CI [0.981, 0.986]; τ* = 0.27, TPR = 0.92, FPR = 0.05. Component means — informed: PR 0.50, TS 0.11, HHI 0.04, SCI 0.451 (sd 0.125); liquidity: 0.22, 0.17, 0.10, 0.163 (0.076); disagreement: 0.14, 0.97, 0.02, 0.005 (0.006).
- Exp 2 (OOD stress): whale_informed (label 1): mean SCI 0.231, P(SCI>τ*) = 0.376 → Type II error; coord_manip_broad (label 0): mean SCI 0.399, P(SCI>τ*) = 0.827 → Type I error; manip_then_info 0.368/0.830 correct; noisy_broad 0.008/0.000 correct; persistent_two_sided 0.015/0.000 correct. Combined OOD AUC = 0.763 [0.753, 0.773].
- Exp 3 (8-DGP classifiers): logistic regression AUC 0.908 [0.904, 0.913] > SCI 0.847 [0.840, 0.853] > additive 0.812 > PR-only 0.809 > 1−TS-only 0.742 > 1−HHI-only 0.516. LR coefficients: β_PR = +6.29, β_{1−TS} = +3.99, β_{1−HHI} = −4.84 — concentration positively associated with informed updating, opposite the SCI's weighting.
- Exp 4: AUC = 0.91 (w=60), 0.95 (120), 0.98 (180), 0.99 (240); τ* stable 0.25–0.27.
- Illustrative election shocks (simulated, not empirical): debate SCI 0.165 → liquidity pressure; assassination attempt 0.448 → informed updating; Biden dropout 0.005 → disagreement.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Steam-move classification diagnostic for sportsbooks: the first decomposable move-classifier in the corpus (fills the open gap in GSE's market-microstructure coverage: "steam-move predictability… thin"); dovetails with ledgers 1608 (arb/inefficiency), 1609 (dislocation detector), 1611 (updating gaps → drift) as the "was this move real?" scoring layer.
- [OTHER] Critical re-weighting per the ledger: GSE's target is information content (is this steam real?), not coordination credibility — deploy SCI_info with fitted NFL weights (expect β_HHI ≥ 0: concentrated = sharp) alongside SCI_coord for the content lane (which moves are safe to cite publicly without amplifying a whale artifact); the two flavors should rank moves differently (Spearman < 0.6) if the distinction is operational.
- [OTHER] Port recipe: shock = ≥1.5-point spread or ≥4-cent moneyline move; PR on logit-transformed implied probabilities; TS from cross-book direction; HHI_flow rebuilt as cross-book breadth HHI (share of total line movement per book); track SCI(t;60min), sustained alarms >60 min trigger the steam-follow workflow.
## Engine-actionable? (yes/no + one-line what)
Yes — adapt the replication code to odds data (~3–4 days: cross-book breadth measure + labeling one NFL season of steam moves), fitting both SCI_info and SCI_coord; acceptance gate: fitted weights on ≥300 labeled moves achieve AUC ≥ 0.70 for move-side cover prediction, with the two flavors diverging (Spearman < 0.6).
