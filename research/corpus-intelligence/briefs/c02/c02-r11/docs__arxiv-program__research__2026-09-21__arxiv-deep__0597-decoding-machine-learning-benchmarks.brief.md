# docs/arxiv-program/research/2026-09-21/arxiv-deep/0597-decoding-machine-learning-benchmarks.md

## What it is (1-2 sentences)
A full-text read of arXiv:2007.14870v2 (Cardoso et al. 2020) using Item Response Theory (IRT) — borrowed from psychometrics — to diagnose whether the OpenML-CC18 classifier benchmark is a good test set: instances are "items," classifiers are "respondents," and 3PL IRT jointly estimates item difficulty/discrimination/guessing and classifier ability, with Glicko-2 tournaments summarizing pairwise True-Score comparisons into a global ranking. The file's verdict is ADAPT: treat historical game-weeks as items and engine model versions as respondents, ranking models by difficulty-adjusted ability instead of raw accuracy.

## Key metrics/methods (formulas where given, else "not specified")
- 3PL IRT (Eq. 1): P(U_ij=1|θ_j) = c_i + (1−c_i) / (1 + e^{−a_i(θ_j−b_i)}), U_ij ∈ {0,1} response, θ_j ability, b_i difficulty (location), a_i discrimination (slope), c_i guessing (casual hit). 2PL drops c_i=0; 1PL drops a_i=1.
- True-Score = Σ_i P(correct) over items = a test-like total grade per classifier per dataset.
- Standard cutoffs (Adedoyin & Mokobi): difficult if b_i > 1, highly discriminating if a_i > 0.75, high guessing if c_i > 0.2.
- Glicko-2 round-robin: each dataset is a "classification period"; pairwise True-Score comparisons (1/0/0.5) update rating R, deviation RD, volatility σ; rating interval [R−2RD, R+2RD] ≈ 95% CI; defaults R=1500, RD=350, σ=0.06.
- Fitting: 3PL per dataset via R's ltm package (rpy2) — Birnbaum two-step, Catsim for proficiency. decodIRT tool: 3 scripts (data/models → IRT parameters → analysis/ranking), https://github.com/LucasFerraroCardoso/IRT_OpenML.
- Assumptions: unidimensional ability per classifier; items conditionally independent given ability; difficulty/discrimination constant across the respondent pool; 500-instance test cap doesn't distort parameter estimates.

## Data sources named
- OpenML-CC18: 72 datasets mid-2018; 60 actually evaluated (11 too large for the pipeline, "Pc4" failed IRT estimation — 83% coverage, biased toward smaller datasets).
- Classifiers: 12 sklearn defaults (GaussianNB, BernoulliNB, KNN k∈{2,3,5,8}, DecisionTree, RF{3,5,default}, SVM, MLP), 120 MLPs of increasing depth 1–120 (for response diversity), plus 7 artificial classifiers (3 random, majority, minority, pessimal, optimal) as sanity anchors.
- 70/30 stratified splits; test capped at 500 instances for IRT estimation; response matrix = each classifier's correct/incorrect on each test instance.

## Findings (numbers and facts, not vibes)
- Of 60 datasets, 49 (81.67%) have <27% difficult instances; only 7 have >50% difficult; only ~12% of instances overall are difficult. [OTHER]
- 31/60 datasets have ≥80% very-discriminating instances — CC18 discriminates good from bad classifiers but rarely stresses them. [OTHER]
- Difficulty and discrimination are inversely related: the hardest datasets (tic-tac-toe, credit-approval, optdigits) are the least discriminating; the most discriminating (banknote-authentication, analcatdata_authorship, texture) are easy. [TRUST-SIGNAL — a single benchmark can't simultaneously stress models and rank them; pick the right item pool for the job]
- Glicko-2 final ratings: optimal 1732.56, MLP 1718.65, RF 1626.60, RF(5) 1606.69, RF(3) 1575.26, DecisionTree 1571.46, SVM 1569.48, KNN(3) 1554.15, GaussianNB 1530.86, KNN(2) 1528.41, KNN(5) 1526.10, BernoulliNB 1494.87, KNN(8) 1457.78, minority 1423.01 … pessimal 1270.46. All RD ≈ 30–33, all volatility ≈ 0.06–0.077 (low). [OTHER]
- MLP sits within RD range of 3rd/4th place — positions 1–4 not statistically separable (Nemenyi heatmap: top-3 don't differ from each other or from several lower classifiers; Friedman p ≈ 9.36×10^{−80} for real classifiers). [TRUST-SIGNAL — the "MLP wins" headline overstates separability]
- Negative-discrimination instances (where weak classifiers score higher) corrupt True-Scores — the paper flags them but doesn't fix them; datasets rich in such instances may be actively bad benchmarks. [TRUST-SIGNAL]
- Default hyperparameters only: rankings reflect "innate ability by design," not optimized performance; hyperparameter tuning could reorder the board. [TRUST-SIGNAL]
- Glicko-2 tournament treats every dataset as equal weight — no weighting by dataset size or importance. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- IRT difficulty-adjusted model ranking (items = historical game-weeks/picks, respondents = engine model versions): TRUST-SIGNAL — the corpus's engine-benchmark lane compares models on raw accuracy/EPA/calibration with no difficulty adjustment; a model that nails hard games looks the same as one padding stats on easy ones, so IRT's b_i/a_i decomposition is a direct upgrade to backtest comparisons.
- True-Score + Glicko-2 multi-model ranking: TRUST-SIGNAL — a principled engine-version ranking across seasons (RD/volatility give uncertainty on the ranking, which raw win-rate leaderboards lack).
- Inverse difficulty/discrimination relationship: TRUST-SIGNAL — for engine selection, curate the backtest item pool deliberately: high-discrimination games for ranking versions, hard games for stress-testing; one pool can't do both.
- Negative-discrimination items corrupt True-Scores: TRUST-SIGNAL — quarantine or remove games where bad models score higher before fitting (acceptance gate: reject the IRT layer if >10% of games show negative discrimination).
- Money-weighted Glicko-2 "classification periods" (weight by handle or model edge): OTHER — turns the descriptive benchmark tool into a model-selection criterion for deployment (test whether money-weighted ranking predicts next-season ROI better than unweighted).
- Difficulty parameters vs pregame market uncertainty (closing line vs model edge): TRUST-SIGNAL — diagnostic experiment: difficulty should correlate with market uncertainty; if it doesn't, the item pool or model is mis-specified.

## Engine-actionable? (yes/no + one-line what)
Yes — build an IRT evaluation layer over engine backtest history (picks = items, model versions = respondents), rank versions by Glicko-2 difficulty-adjusted ability, and use per-pick difficulty metadata to diagnose which game types are systematically hard items; adopt only if difficulty spread is real and at least one version changes rank vs raw accuracy.
