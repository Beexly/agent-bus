# arxiv-program/research/2026-09-21/arxiv-deep/0230-supervised-learning-for-table-tennis-match.md
## What it is (1-2 sentences)
Chiang & Denes (arXiv:2303.16776v1, 2023): supervised classifiers (logistic regression, random forest, SVM, MLP) predicting professional table-tennis singles winners from TTNet automated video captures, with an ablation study of hand-crafted advantage-differential features. File verdict: ADAPT — port the advantage-differential feature pattern (RANKDIFF, SA/SRA/FHA, BALANCE) and the "exclude-target-match aggregate" anti-overfit check as NFL matchup-feature-engineering templates; the domain is not useful.

## Key metrics/methods (formulas where given, else "not specified")
- Four scikit-learn classifiers on standardized (zero mean, unit std) features:
  - Logistic regression: liblinear solver, L2 penalty, C = 1.0 (best after grid search).
  - Random forest: 200 trees, max depth 80, max features 4, min samples per leaf 4.
  - SVM: linear, RBF, polynomial, sigmoid kernels tried; linear kernel, C = 0.2 best.
  - MLP: hidden layer size 2, max_iter 200, solver 'lbfgs', relu activation, constant learning rate.
- Hyperparameter tuning: brute-force grid search; best combo = highest accuracy on validation set under 5-fold CV.
- Two input regimes: (a) per-match vectors including live in-match stats; (b) aggregate features = average over all past AND future matches of the player excluding the target match (robustness/overfit check).
- Equations (faithfully transcribed in file):
  - Target: y_i = {1 if P wins; −1 if P loses} (eq 1).
  - RANKDIFF = {RANK_a − RANK_b for player a; RANK_b − RANK_a for player b} (eq 2); non-linearity: RANKDIFF set to 0 when both players ranked over 100 (rank differences unreliable for low-ranked players).
  - BALANCE = (|SA| + |SRA| + |FHA|) / 3 (eq 3).
  - Logistic loss: ℓ(p) = −(1/n) Σ_i [p_i log((y_i+1)/2) + (1−p_i) log(1 − y_i/2)] (eq 4).
  - Accuracy = (tp+tn)/(tp+tn+fp+fn) (eq 5); precision = tp/(tp+fp), recall = tp/(tp+fn) (eq 6); F1 = 2·precision·recall/(precision+recall) (eq 7).
- Features: base = SP (% points won on serve), RP (% on receive), LRP (% long rally), SRP (% short rally), FHP (% forehand), BHP (% backhand), RANK (ITTF rank). Engineered: RANKDIFF, SA = SP − RP (serve advantage), SRA = short-rally minus long-rally win %, FHA = forehand minus backhand win %, BALANCE (well-roundedness = mean of |SA|,|SRA|,|FHA|).
- Each match maps to two (x, y) pairs — one from each player's perspective. 5-fold CV; overall split 72:18:10 train:validation:test; folds appear random, not time-ordered.

## Data sources named
- Automatic captures from TTNet (Voeikov et al. 2020), released by OSAI (2020, https://osai.ai/), used with OSAI permission. Tokyo 2020 Olympics + Tischtennis-Bundesliga (German league) men's and women's singles.
- Per-rally schema: ball-bounce location (9 grid cells per table half), winning shot location, forehand/backhand usage, rally length (short vs long = ≥5 shots), serve/receive outcomes, error types; player ITTF rankings at match time.
- Sample size: NOT reported (file flags this as a weakness). Samples with missing entries removed. No code link, no dataset download.

## Findings (numbers and facts, not vibes)
- Table 3 (post-tuning; validation acc ± SE, test acc/F1): LR val 0.699±0.024 / F1 0.705±0.023; test acc 0.722, F1 0.706. Random forest val 0.677±0.032 / F1 0.688±0.033; test 0.667/0.684. SVM linear val 0.696±0.029; test 0.639/0.629. SVM RBF val 0.700±0.025; test 0.667/0.600. SVM polynomial val 0.705±0.021; test 0.611/0.563. SVM sigmoid val 0.705±0.017; test 0.694/0.621. MLP val 0.696±0.019 / F1 0.708±0.020; test 0.694/0.703.
- Pre-tuning (Table 2): LR test acc 0.694; MLP test acc 0.583; sigmoid-SVM test acc 0.694. Tuning mattered (MLP 0.583 → 0.694).
- Feature ablation (Table 4, validation acc/F1): with derived features LR 0.699/0.705 vs without 0.631/0.668; SVM-RBF 0.700/0.677 vs 0.500/0.591 (random-level collapse without features); MLP 0.696/0.708 vs 0.639/0.683. All models worse without derived features.
- Exclude-target-match aggregate (Table 5, test acc): LR 0.639, RF 0.667, MLP 0.667 (range 61–67%) — comparable to live features, taken as evidence against overfitting.
- Feature importance (RF, Gini): RANKDIFF most important.
- Severe leakage caveat: feature vectors include in-match statistics from the target match itself (SP, RP, rally stats observed during match i used to predict match i). Authors acknowledge ("predicting the outcome from all these features post-match is a trivial task"); headline ~70% numbers computed on post-match features — leaky for a "prediction" claim.
- The "robustness" check averages over all past AND FUTURE matches excluding the target — future matches are lookahead leakage in a strict pre-match sense; measures player-strength encoding, not honest forecasting.
- Sample size never reported — test set (10%) may be tiny; LR 0.722 vs MLP 0.694 likely statistically indistinguishable.
- CV folds random, not time-ordered — strength drift uncontrolled. No betting-odds baseline, no ROI, no calibration (acc/F1 only).
- File's reproducible test for NFL: nflverse PBP 2021–2024 team-game level; paired-differential features (pass/rush EPA diff, 1st-2nd vs 3rd-4th down EPA diff, home/road EPA diff) + BALANCE as leave-one-game-out rolling aggregates; LR (C=1.0) on leaky vs LOO features; success = LOO retains ≥95% of leaky accuracy (paper's Table-5 parity criterion, 61–67% vs ~70%).
- File's acceptance gate: adopt if (a) BALANCE-style features rank top-half of RF Gini importance on NFL data, and (b) LOO features lose ≤5pp accuracy vs leaky features; reject if differentials add nothing over existing EPA aggregates, or if the LOO audit reveals GSE's current matchup features leak target-game data.
- File's improvement experiment: replace hand-crafted differentials with learned advantage embeddings (neural module over paired situational EPA vectors, distilled to closed-form features); extend BALANCE to team-level "dimensionality" score (PCA effective-rank of situational EPA vector) and test whether one-dimensional teams are systematically overpriced by markets.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — feature engineering (matchup lane): the paired advantage-differential pattern (SA = serve minus receive win %; SRA = short minus long rally; FHA = forehand minus backhand) ports directly to NFL situational differentials: pass-vs-run EPA differential, short-vs-long down EPA differential, home/road EPA split differential, early-vs-late down efficiency gaps. The file's GSE map check found repo has DVOA-style opponent adjustments and gse-lab unit matchups but NO explicit advantage-differential construction pattern — this is an extension, serves the matchup/engine feature-engineering program. One-line NFL BALANCE = mean of absolute situational differentials ("team well-roundedness") is a candidate new engine feature.
- TRUST-SIGNAL — validation hygiene: the "exclude-target-match aggregate" anti-overfit protocol ports as a leave-one-game-out (LOO) leakage audit for every matchup-level feature in the props/engine pipeline — verify model accuracy parity between target-game-included and LOO aggregates (file's criterion: ≤5pp accuracy loss). Directly serves calibration/sizing: a cheap audit that catches target-game leakage before a feature prices a market. Flag as a candidate standard step in the feature-ship gate.
- COACHING — the BALANCE concept (well-roundedness vs one-dimensional strength) connects to coaching-tendency analysis: a team with extreme situational differentials is predictable/scheme-exploitable. The file's PCA effective-rank extension (test whether one-dimensional teams are overpriced by markets) serves the market-pricing lane, not a program named here — tag COACHING/SCHEME-adjacent: extreme pass/rush EPA differentials are a coaching-tendency signal.
- OTHER — RANKDIFF non-linearity (zeroing differences when both >100 — unreliable at the tails) ports as a saturation rule for Elo-difference features: clip or zero small differences between closely-rated teams, matching GSE's known Elo work.
- UNCERTAIN: the paper's own Table-5 "robustness" numbers (61–67%) rest on future-match leakage, so the portability evidence is weaker than presented; the NFL LOO test must exclude future games to be honest.
- CONTRADICTION (with naive reading): the file's headline ~70% accuracies cannot be cited as prediction performance — they are post-match-feature numbers; only the pattern, not the numbers, transfers.

## Engine-actionable? (yes/no + one-line what)
Yes — implement NFL paired-differential features (pass/rush EPA, down-splits, home/road) + BALANCE well-roundedness metric and a leave-one-game-out aggregate parity audit (≤5pp accuracy loss) for every matchup feature in the engine pipeline.
