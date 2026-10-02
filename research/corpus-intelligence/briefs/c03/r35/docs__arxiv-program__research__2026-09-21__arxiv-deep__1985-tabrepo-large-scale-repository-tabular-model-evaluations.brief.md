# docs/arxiv-program/research/2026-09-21/arxiv-deep/1985-tabrepo-large-scale-repository-tabular-model-evaluations.md
## What it is (1-2 sentences)
Deep-read ledger of Salinas & Erickson (2024) "TabRepo" (arXiv:2311.02971): a dense repository of 786,000 precomputed model evaluations (1,310 configs x 200 datasets) enabling offline AutoML analysis and zero-shot portfolio learning via greedy complementarity selection. Verdict: ADAPT - warm-start each season's model search with a learned portfolio of complementary configs instead of full HPO re-runs.
## Key metrics/methods (formulas where given, else "not specified")
- Portfolio greedy selection: j_1 = argmin_{j_1} E_i[l_{i,j_1}]; j_n = argmin_{j_n} E_i[min_{k<=n} l_{i,j_k}] (Caruana-style greedy complementarity).
- Normalized error = (l_method - l_topline)/(l_baseline - l_topline), topline=top score, baseline=median, clipped to [0,1].
- Zero-shot protocol: evaluate only portfolio members on a new task, pick best, optionally Caruana-ensemble them.
## Data sources named
- TabRepo dataset of evaluations (public; exact download URL not extracted).
- OpenML-style generic tabular datasets (200 classification+regression); open-source baselines AutoGluon, Auto-sklearn2, LightAutoML, FLAML.
## Findings (numbers and facts, not vibes)
- Portfolio (ensemble): normalized error 0.365, rank 168.7, fit 6275.5s, infer 0.050s/row vs AutoGluon 0.389/208.2/5583.1s/0.062s; AutoSklearn2 0.455 (14415.9s fit); LightAutoML 0.466; FLAML 0.5+ (4h budget, 200 tasks).
- CatBoost dominates with defaults; FT-Transformer and LightGBM runners-up; 4h tuning + ensembling improves every family; ensembling lets LightGBM match CatBoost.
- No single model is best everywhere (dataset-dependent winners on rank cluster map).
- Reference cost context: full AMLB evaluation of one method ~40,000 CPU hours.
- Paper caveats noted: transfer assumes offline task distribution matches new tasks; untested under distribution shift (NFL non-stationarity).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Portfolio-ensemble beats AutoGluon on 200 generic tabular tasks while using zero-shot offline learning: OTHER
- CatBoost default-strength + LightGBM catches CatBoost only via ensembling: OTHER (model-selection signal: GSE's tabular engine should default-test CatBoost, keep LightGBM ensemble path)
- No single model best everywhere across 200 tasks: OTHER (supports season-conditioned model selection)
- ADOPT gate proposed: portfolio matches full-search log-loss within 0.002 using <=25% compute, >=60% member overlap between offseason derivations: OTHER
## Engine-actionable? (yes/no + one-line what)
Yes - build a permanent "GSE-TabRepo" evaluations log table (every config x season/market task with OOF predictions) and derive a ~15-30 config greedy portfolio each offseason for zero-shot season model selection (roll 5-season windows against regime shift).
