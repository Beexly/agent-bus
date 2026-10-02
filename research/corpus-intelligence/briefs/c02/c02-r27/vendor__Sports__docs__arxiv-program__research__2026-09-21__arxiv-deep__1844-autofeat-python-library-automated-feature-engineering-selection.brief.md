# vendor/Sports/docs/arxiv-program/research/2026-09-21/arxiv-deep/1844-autofeat-python-library-automated-feature-engineering-selection.md

## What it is (1-2 sentences)
The autofeat Python library paper (Horn, Pack, Rieger; arXiv:1901.07329, JMLR) generates tens of thousands of nonlinear features from raw inputs (SISSO-inspired symbolic expansion with SymPy) and selects a small robust subset via L1 + noise-filter + chunked + stability voting, so an interpretable linear model reaches competitive accuracy on small scientific datasets.

## Key metrics/methods (formulas where given, else "not specified")
- No equations stated (algorithmic paper). Named mathematics: Buckingham π-theorem for dimensionless feature construction; L1-regularized linear models (LassoLARS, L1 logistic regression) for sparse selection; SymPy symbolic simplification for redundancy elimination.
- Feature engineering: alternating steps — Step A applies transforms {log(x), √x, 1/x, x², x³, |x|, exp(x), 2^x, sin(x), cos(x)}; Step B combines pairs with {+, −, ·}. Growth: 3 raw features → step 1 ~20, step 2 ~750, step 3 4000+ features.
- Physical units: dimensionally "legal" features only via Pint; dimensionless π-groups via Buckingham π-theorem.
- Selection: (1) drop features highly correlated with original/simpler ones; (2) noise filtering — fit L1 model on real + synthetic noise features (shuffled copies or N(0,1)), keep only real features with |coefficient| exceeding the largest noise coefficient; (3) chunked selection — chunks each < n/2 features, refit per chunk plus promising set; (4) stability — repeat on subsamples, keep most-frequently-selected, correlation-prune. Result: typically a few dozen features retained from several thousand.

## Data sources named
Five regression datasets (Table 1), from scikit-learn package + UCI ML Repository: diabetes (442×10), boston (506×13), concrete (1030×8), airfoil (1503×5), wine quality (6497×12). Standard train/test folds; no time dimension. Library: github.com/cod3licious/autofeat (pip-installable, scikit-learn API).

## Findings (numbers and facts, not vibes)
- Table 2 (R², train / test): diabetes — RR 0.541/0.383, RF 0.598/0.354, AFR1 0.553/0.400, AFR2 0.591/0.353, AFR3 0.638/**−12.4** (catastrophic overfit: 32,161 features from 442 samples); boston — RR 0.736/0.748, AFR2 0.893/0.791, AFR3 0.932/0.048 (54,631 features, 506 samples); concrete — RF 0.985/0.892, AFR2 0.913/0.868 (best non-RF test); airfoil — RF 0.991/0.934, AFR2 0.863/0.842; wine quality — RF 0.931/0.558, AFR2 0.397/0.384. [OTHER]
- 2 engineering steps is the sweet spot; 3 steps overfits catastrophically when features ≫ samples. Paper summary: AFR beats ridge on most datasets, does not reach RF. [OTHER]
- Table 3: AFR1 selects 2–11 features; AFR2 selects 8–80 from 530–10,528 engineered; AFR3 selects 16–44 from 2,355–55,648 engineered. [OTHER]
- Most-selected feature forms (Table 4): ratios like x₁/x₂, 1/(x₁x₂), products x₁·x₂², exp(x₁)/x₂, log(x₁)/x₂, |x₁−log(x₂)|. [OTHER]
- Limitations named: no time-awareness anywhere (pooled selection/engineering leaks on temporal data); single train/test split, no CV, no significance tests, no error bars (several "wins" over ridge within noise, e.g., diabetes AFR1 0.400 vs RR 0.383); combine step has no division operator (ratios arise via 1/x); one-hot-then-engineer for categoricals explodes dimensionality; Pint unit legality unused in reported experiments. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Noise-filter rule (keep |coef| > max noise |coef|) → OTHER: cheapest credible false-discovery control for GSE's auto-generated feature pools; knockoff-style FDR=10% with within-block shuffling is the proposed upgrade respecting temporal structure.
- Unit-legality idea (Pint/Buckingham) → OTHER: sports dimensional check (never add a rate to a count, never subtract a probability from EPA) — a type system for engineered sports features.
- Interpretability story: linear model on selected features yields attributable coefficients ("this pick moved because pressure-adjusted efficiency index rose") → TRUST-SIGNAL: publishable reasoning for GSE's public write-ups, unlike GBM importances.
- 2-steps-sweet-spot / AFR3 −12.4 warning → TRUST-SIGNAL: cap the engineered pool relative to n; gate acceptance on selection being lossless (≤0.002 log-loss degradation).
- Complements OpenFE (1842) and DIFER (1843) as the selection + interpretability layer → OTHER.

## Engine-actionable? (yes/no + one-line what)
yes — Build "GSE-AutoFeat-Select" as the selection/discovery-report layer: 2-step SymPy expansion with a sports unit-type system, L1-logistic noise-filter + chunked + stability selection, gated on lossless selection (≤0.002 log-loss degradation vs full pool) and a linear model on selected features beating the hand-built linear baseline by ≥0.003 log-loss.
