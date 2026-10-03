# arxiv-program/research/2026-09-21/arxiv-deep/1074-binary-classifier-calibration-enir.md

## What it is (1-2 sentences)
A full-paper deep-read ledger (arXiv:1511.05191, Naeini/Cooper 2015, read cover to cover) on ENIR — binary classifier calibration via an ensemble of near-isotonic regression models spanning IsoRegC to the saturated fit, combined with BIC-weighted selective Bayesian averaging — beating IsoRegC and BBQ across 40 datasets. Verdict recorded: ADAPT — a tuning-free, O(N log N) upgrade to GSE's binary calibration stack that strictly generalizes the existing IsoRegC (λ→∞ member) and relaxes its brittle monotonicity assumption.

## Key metrics/methods (formulas where given, else "not specified")
- IsoRegC: p̂_iso = argmin ½Σ(p_i−z_i)² s.t. p_1≤…≤p_N (Eq. 1; [0,1] constraint redundant).
- Near-isotonic: p̂_λ = argmin ½Σ(p_i−z_i)² + λΣ(p_i−p_{i+1})ν_i (Eq. 3), ν_i = 1(p_i>p_{i+1}); λ=0 → saturated fit p_i=z_i; λ→∞ → IsoRegC (excluded from ensemble at λ=0).
- mPAVA (Tibshirani et al. 2011): singleton bins at λ=0; bin estimate p̂_Bi(λ) = (Σz_j − λν_i + λν_{i−1})/|B_i| (Eq. 6); merge-never-splits theorem → linear-in-λ between breakpoints; next merge λ* = min_i λ_{i,i+1} (Eqs. 8–9). O(N log N) time, O(N) memory.
- Ensemble: P(z=1|y) = Σ_i [Score(M_i)/Σ_j Score(M_j)] · P(z=1|y,M_i), Score = BIC (Schwarz 1978); scores outside [0,1] squashed via f(x)=1/(1+e^(−x)).
- Metrics (Eq. 10): MCE = max_k|o_k−e_k|; ECE = Σ_k P(k)|o_k−e_k| (K=10 bins); percent-gain CIs X=(enir−method)/method.
- Validation: 40 UCI/LibSVM datasets × 3 base classifiers (LR, SVM, NB) × 10 runs of 10-fold CV; Friedman + Holm step-down at 0.05 on average ranks; baselines IsoRegC, BBQ (Platt excluded as dominated, ACP LR-only, ABB O(N²) intractable).
- Dataset sizes: Min 42 / Q1 683 / Median 1861 / Q3 8973 / Max 581012; minority-class share Min 0.009 / Q1 0.076 / Median 0.340 / Q3 0.443 / Max 0.500.

## Data sources named
- Simulated 2-D circular-classification dataset (1000 train + 1000 test; black oval = quadratic-kernel SVM boundary) — deliberately violates IsoRegC monotonicity.
- 40 public UCI/LibSVM datasets (spect, adult, breast, pageblocks, pendigits, ad, mamography, satimage, australian, code rna, colon cancer, covtype, letter unbalanced/balanced, diabetes, duke, fourclass, german numer, gisette scale, heart, ijcnn1, ionosphere scale, liver disorders, mushrooms, sonar scale, splice, svmguide1, svmguide3, coil 2000, balance, breast cancer, leu, w1a, thyroid sick, scene, uscrime, solar, car 34, car 4, protein homology).
- GSE-side data named in spec: engine historical predicted probabilities + outcomes per market (2020–2024 train, 2025 holdout, time-ordered).

## Findings (numbers and facts, not vibes)
- Simulation, linear SVM (AUC/ACC/RMSE/ECE/MCE — SVM→IsoReg→BBQ→ENIR): 0.52/0.64/0.52/0.28/0.78 → 0.65/0.64/0.46/0.35/0.60 → 0.85/0.78/0.39/0.05/0.13 → 0.85/0.79/0.38/0.05/0.12. IsoRegC *worsens* ECE (0.28→0.35) under monotonicity violation; ENIR matches BBQ.
- Simulation, quadratic SVM: AUC all 1.00; ECE 0.14→0.01/0.01/0.00 (IsoReg/BBQ/ENIR); MCE 0.36→0.04/0.05/0.03.
- Real data average ranks (lower better; * = ENIR statistically superior): LR RMSE 1.925*/2.625*/1.450, ECE 2.125/1.975/1.900, MCE 2.475*/1.750/1.775; SVM RMSE 1.850/2.475*/1.675, MCE 2.550*/1.625/1.825; NB RMSE 2.200*/2.375*/1.425, ECE 2.475*/2.075*/1.450, MCE 2.563*/1.850/1.588.
- Percent-gain 95% CIs vs base classifier: AUC LR [−0.008,0.003], SVM [−0.010,0.003], NB [−0.010,0.000] — worst case ≤1% AUC loss; RMSE LR [−0.124,−0.016], SVM [−0.310,−0.176], NB [−0.196,−0.100]; ECE LR [−0.389,−0.153], SVM [−0.768,−0.591], NB [−0.514,−0.274] (NB's 30.5–55.2% ECE reduction is the headline); MCE SVM [−0.591,−0.340], NB [−0.552,−0.305].
- Net paper claim: ENIR "commonly performs statistically significantly better than the other methods, and never worse"; discrimination preserved (no AUC loss beyond noise).
- Complexity: training O(N log N), test O(M log B) per instance (M = ensemble size, B = bins) — same class as IsoRegC.
- Leakage notes in ledger: BIC weights scored in-sample (label information leaks into weight selection → re-score on inner holdout); for GSE, time-ordered data must be fit on trailing windows with forward holdout evaluation.
- Numeric gate: adopt only if ENIR achieves ≥15% lower ECE than the best of {IsoRegC, temperature scaling} averaged across spread/ML/total on the time-ordered 2025 holdout, with no AUC loss (any ΔAUC<0 is a hard fail).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: binary calibration upgrade for engine probabilities (cover/no-cover, ML win, total over, TD scorers) — strictly generalizes the in-repo IsoRegC, fixes its monotonicity weakness on noisy sports score mappings.
- OTHER (method improvement, from ledger): replace in-sample BIC weights with out-of-fold log-loss weights (exp(−CV log-loss)) — ties ensemble weights to the calibration objective and closes the in-sample optimism leak.

## Engine-actionable? (yes/no + one-line what)
Yes — implement mPAVA + ENIR as a post-hoc calibration layer on engine raw probs per market, fit weekly on a trailing window, gated on ≥15% ECE reduction vs {IsoRegC, temperature scaling} on a time-ordered 2025 holdout with zero AUC degradation.
