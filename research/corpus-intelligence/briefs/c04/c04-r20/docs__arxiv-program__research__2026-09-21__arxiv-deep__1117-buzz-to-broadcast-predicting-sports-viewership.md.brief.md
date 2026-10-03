# docs/arxiv-program/research/2026-09-21/arxiv-deep/1117-buzz-to-broadcast-predicting-sports-viewership.md
## What it is (1-2 sentences)
A deep-read ledger of arXiv:2412.10298v1 (Trotter 2024), a paper predicting sports broadcast viewership from pre-event social-media engagement. Verdict: **ADAPT** — the 72-hour pre-event social-buzz feature engineering is reusable for GSE content prioritization, but the paper's R²=0.99 is an artifact of a random split plus sport one-hot encoding and must be rebuilt with temporal validation before any use.

## Key metrics/methods (formulas where given, else "not specified")
- Features (exact): total Reddit posts, total comments, total scores in the 72h pre-event window; mean TextBlob sentiment; mean VADER sentiment; one-hot encoded sport.
- Preprocessing: target transformed with log1p, `y' = ln(1+y)`; IQR outlier removal; min-max scaling; random 80/20 split (random_state=42); 5-fold GridSearchCV.
- Model: Gradient Boosting Regressor. Grid: n_estimators {100, 200}, learning_rate 0.05, max_depth {3, 5}, min_samples_split {2, 5}, subsample {0.8, 1.0}.
- No novel equations. Evaluation metrics: MAE, RMSE, R² on the test split.
- Ledger's rebuild prescription (fixing the paper): temporal split (train ≤2023, test 2024); held-sport-out validation; replace raw one-hot with a hierarchical model (sport random effects) or drop sport and use team Elo + market size; model GBR with the paper's grid as starting point; target log1p(viewership).
- Improvement experiment (ledger): hierarchical Bayesian model with sport-level and team-level random effects plus buzz features as population-level predictors — models what the paper's one-hot was secretly doing (pooling viewership tiers) while letting buzz explain within-tier variation.

## Data sources named
- Reddit engagement via the **PullPush API** (capped at **100 results per query**); queries cover the 72 hours before each event.
- Viewership numbers per event from public ratings reports (per the paper; source not specified in the ledger).
- Supplementary code and data links stated in the paper's appendix; exact URLs not preserved in the extracted text — consult the PDF's link annotations.
- Related internal read: `1094-driving-engagement-in-daily-fantasy-sports.md` (engagement, but DFS-contest focused — distinct task).
- Reproducible test dataset proposed: 2023–2024 NFL regular-season games; 72h pre-game social features; target = TV viewership (public ratings). Baselines: (a) sport/team-mean, (b) the paper's exact pipeline (to reproduce the inflated R²), (c) the fixed pipeline.

## Findings (numbers and facts, not vibes)
- Paper's reported test results: **MAE 1.27 million**, **RMSE 2.33 million**, **R² = 0.99**.
- Ledger's central flaw: random split on time-ordered event data — events from the same season/sport appear in both train and test, so the model memorizes sport-level viewership tiers rather than learning buzz→viewership.
- Sport one-hot + Super Bowl-scale outliers (~100M+ viewers) makes R²=0.99 nearly mechanical: the model learns "Super Bowl = big" from the one-hot, not from Reddit.
- PullPush's 100-results/query cap truncates exactly the highest-buzz events, biasing the key feature downward where it matters most; IQR outlier removal may have deleted the most informative events; event dataset is tiny and highly stratified (counts not prominently reported).
- Acceptance gate: adopt the feature recipe only if the *fixed* pipeline beats the team-mean baseline by ≥15% MAE on the 2024 forward test AND held-sport-out R² > 0.5; reject if the signal disappears once the sport one-hot and random split are removed.
- Effort estimate: ~1–2 engineer-weeks (data collection is the long pole).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 72h pre-game social-buzz feature recipe (post/comment/score volumes + TextBlob/VADER sentiment) reusable for predicting per-game audience/engagement to allocate clip-production and posting effort across the NFL slate: **OTHER** (content-ops/intelligence — no on-field behavior).
- Validation integrity lesson: random splits on time-ordered sports data + tier-memorizing categoricals inflate R² (0.99 artifact); temporal + held-sport-out validation required — this generalizes to any GSE temporal modeling: **OTHER** (methodology doctrine).
- Hierarchical-Bayesian-with-random-effects design as the honest replacement for raw sport/team one-hots: **OTHER** (modeling doctrine).
- No QB behavioral, coaching, OL, trust-signal, or scheme content.

## Engine-actionable? (yes/no + one-line what)
Yes — rebuild the paper's 72h buzz feature pipeline with a temporal (train ≤2023 / test 2024) and held-sport-out design to predict per-game viewership/engagement for NFL content-prioritization, gated on beating a team-mean baseline by ≥15% MAE.
