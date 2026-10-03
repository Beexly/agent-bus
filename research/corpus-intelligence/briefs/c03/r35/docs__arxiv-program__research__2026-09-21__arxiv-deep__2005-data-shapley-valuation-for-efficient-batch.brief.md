# docs/arxiv-program/research/2026-09-21/arxiv-deep/2005-data-shapley-valuation-for-efficient-batch.md
## What it is (1-2 sentences)
Deep-read ledger of Ghorbani, Zou, Esteva (2021) "Data Shapley Valuation for Efficient Batch Active Learning" (arXiv:2104.08312): Active Data Shapley (ADS) pre-selection filter in front of diversity-based batch AL (Coreset/BADGE/K-Medians) using linear-time KNN-Shapley values + class-conditional regressor interpolation, giving ~6x speedup with preserved or improved accuracy and robustness to noisy/domain-shifted pools. Verdict: ADAPT - use Shapley data valuation to filter harmful training games and value GSE's data feeds.
## Key metrics/methods (formulas where given, else "not specified")
- Data Shapley: phi(z) = sum_{i=0}^{N-1} sum_{s subset of N-{z}, |s|=i} [v(s U {z}) - v(s)] / C(N-1, |s|) (axiomatic: null-element, symmetry, linearity).
- Permutation form: phi(z) = E_{pi~Pi}[v(s_pi^z U {i}) - v(s_pi^z)].
- KNN-Shapley: exact linear-time DP (Jia et al. 2019) on KNN in pre-logit representation space.
- Distributional Shapley interpolation: per-class KNN regressors on labeled points' Shapley values predict unlabeled values; optimistic aggregation Shapley(x^u) := max_c Shapley((x^u, y_c)) (max beat mean/weighted-mean).
- Pre-select top 2-10x batch (30% CIFAR-10, 20% CINIC-10/Tiny ImageNet, 10% large noisy pools), run diversity method on subset only.
## Data sources named
- CIFAR-10 (50k), CINIC-10 (250k), Tiny ImageNet (100k, 200 classes), SVHN (70k + 500k extra), Cheap-10 (500k Bing web-scraped images).
## Findings (numbers and facts, not vibes)
- ADS gives 2.6-8x speedup of the diversity step across methods/datasets (6x average; ~6.4x curated); gains grow with pool size (diversity methods ~O(n^3)).
- Table 1 first-iteration accuracy preserved or improved with ADS: e.g., BADGE 63.9/95.0/70.4/-vs BADGE+ADS 64.3/95.4/70.4/-/-; Coreset+ADS 63.4/93.4/64.7/34.4/86.4; K-Medians+ADS 63.3/95.5/65.2/34.1/85.4 (Cheap-10/SVHN/CINIC-10/TinyIN/CIFAR-10).
- Noisy regimes: domain shift (CINIC-10 pool, CIFAR-10 test) - ADS-Coreset top; 80% Beta-noise-corrupted SVHN-extra pool - ADS-Coreset best; Cheap-10 - ADS-Coreset "significantly outperforms" all AL methods.
- Toy result: removing low-Shapley minority-cluster points then sampling representatively beats uncertainty-only, representativeness-only, random.
- Paper caveat: pipeline depends on quality of value estimation; KNN-Shapley values only the prediction head (ignores representation-learning contribution).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Negative-Shapley training points are identifiable and harmful: TRUST-SIGNAL (data-trust: drop/down-weight COVID-season or bad-injury-data games)
- Value-per-dollar acquisition proposed (phi(x)/cost(x) for charting-budget games): TRUST-SIGNAL (spend efficiency on data acquisition)
- Optimistic max-over-classes aggregation beat mean/weighted-mean: OTHER
- Feed valuation as block-Shapley (which feed to renew/upgrade): TRUST-SIGNAL (third-party feed ROI: OddsPapi, FTN charting, tracking)
## Engine-actionable? (yes/no + one-line what)
Yes - run a KNN-Shapley training-game audit on engine features (nflverse 2022-2024, cover head) to drop the negative-value decile and retrain; gate: >=0.003 log-loss gain on 2024 held-out vs full data and vs random-decile removal.
