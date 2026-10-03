# arxiv-program/research/2026-09-21/arxiv-deep/0766-how-proper-scoring-rules-shape-llm.brief.md
## What it is (1-2 sentences)
Turtel et al. (2026) train GPT-OSS-120b with Dr. GRPO using five different strictly proper scoring rules as terminal rewards on 8,041 binary news-event forecasting questions, showing the reward choice reshapes forecasters' calibration, discrimination, probability-scale use, and error structure — log-loss-trained models are best calibrated, Brier-trained models discriminate best.
## Key metrics/methods (formulas where given, else "not specified")
- Rewards: S_log = y log p + (1−y)log(1−p) (1); S_Brier = −(p−y)² (2); S_spherical (3); beta family S_{α,β}(p,y) = −y∫_p¹(1−q)w(q)dq −(1−y)∫_0^p q w(q)dq, w_{α,β} beta density, at (2,8) (weights low-p region) and (8,8) (weights near 0.5) (4–5).
- Training: rank-32 LoRA, K=8 rollouts, advantage A_i = S_m(p_i,y) − (1/K)Σ_j S_m(p_j,y) (no std-normalization, no KL penalty) (7).
- Metrics: Brier, ECE (10 bins) (6), log score, AUC-ROC, bias–information–noise (BIN) decomposition (Satopää et al. 2021, latent-normal); paired question-level bootstrap CIs (2,000 resamples).
## Data sources named
8,041 binary forecasting questions from news events (Jul 2024–Jan 2026) via Lightning Rod proprietary SDK (not public); temporal-masking protocol ("future-as-label"); split 7,076 train / 965 held-out; positive rates 27.0% train / 28.5% eval; horizons 7–90 days.
## Findings (numbers and facts, not vibes)
- Pooled-5 results (Brier↓, ECE↓, log↑, AUC↑): Log — Brier 0.1653***, ECE 0.0434 (best), log −0.5132 (best), AUC 0.7407; Brier — 0.1648*** (best Brier), ECE 0.0568, log −0.5185, AUC 0.7511 (best); Spherical — 0.1680***; Beta(2,8) — 0.1677***; Beta(8,8) — 0.1731**, ECE 0.0954 (worst); base — Brier 0.1861, ECE 0.1099.
- BIN contributions (% of model-implied base Brier): Brier-trained has the largest information contribution (3.70); log-trained has the largest positive noise contribution (2.60) and near-unit posterior probability of lower noise than every other variant.
- Beta(8,8) generated ~7× the tokens of spherical despite identical budgets (uncontrolled token-compute confound); single seed per condition (authors flag stochasticity).
- Headline lesson: proper rules share the same population incentive but are NOT interchangeable as training objectives.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: (a) BIN decomposition as a diagnostic for why a GSE model variant wins — select variants whose gains come from information (portable) vs noise (fragile) vs bias; (b) beta-weighted binary objectives to emphasize specific probability regions (Beta(2,8) for underdog/ML value, Beta(8,8) near 50% for close spreads); (c) reward-diverse ensemble members (log/Brier/beta-trained) with complementary error profiles.
## Engine-actionable? (yes/no + one-line what)
yes — Add BIN columns to GSE's model scoreboard (attribute champion-vs-challenger Brier gains to bias/information/noise), and train three identical-feature binary win-probability variants (log-loss, Brier, Beta(2,8) objectives) on 2022–2024 with 2025 weeks 1–8 evaluation; adopt beta objectives if any non-log variant wins by ≥0.003 Brier with ≥50% of the gain from the information component.
