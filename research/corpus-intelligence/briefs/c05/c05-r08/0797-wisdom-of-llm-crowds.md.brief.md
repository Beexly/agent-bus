# arxiv-program/research/2026-09-21/arxiv-deep/0797-wisdom-of-llm-crowds.md

## What it is (1-2 sentences)
Paper ledger for arXiv:2607.18269v1 (Douven) testing whether wisdom-of-crowds transfers to LLM ensembles: 15 LLMs elicited on 254 binary Manifold Markets questions, comparing classical vs learned aggregators and quantifying training-cutoff contamination. Verdict: ADAPT — weight models by error decorrelation (not accuracy), keep biased sources as contrastive negative weights, enforce cutoff hygiene.

## Key metrics/methods (formulas where given, else "not specified")
- Aggregators: arithmetic/harmonic/geometric/log-odds mean, median; MLP 15→64(ReLU, dropout 0.2)→32(ReLU, dropout 0.2)→sigmoid (Adam lr 5e-3, 25 epochs, BCE); logistic regression L2 λ=0.01; symbolic regression (SymbolicRegression.jl, 50 runs)
- Metrics: Brier score (primary), accuracy, AUC; sign/Wilcoxon/permutation tests; Spearman rank correlation
- Contamination: within- vs outside-cutoff accuracy differentials, probability extremity |p−0.5| Welch t-tests, cutoff-matched market baselines
- LR weight diagnostic: absolute weight vs error decorrelation (negative mean pairwise Pearson correlation of squared errors), r_s = +0.482

## Data sources named
- Manifold Markets play-money binary questions, resolved June 2024–March 2026, ≥75 unique traders; clean subset: 94 items resolving after 1 Sept 2025 (post all training cutoffs)
- 15 LLMs: Mistral 7B, LLaMA 3.1 8B, Gemma 2 9B, Phi-4 14B, Qwen 2.5 7B (Ollama) + GPT-5.2/5.4/5.4 Mini, DeepSeek-chat, Gemini Flash-Lite/Flash/Pro, Claude Haiku 4.5/Sonnet 4.6/Opus 4.6
- Code/data: https://osf.io/8dng6/overview?view_only=3c535d46fe924def902e5579983313cc

## Findings (numbers and facts, not vibes)
- Clean-94 aggregation Brier: arithmetic mean 0.313, median 0.343, MLP 0.264 (15.6% reduction), logistic regression 0.241 (23% reduction) — LR beats every individual model and all classical methods
- MLP vs arithmetic mean: sign test 62/94, p=.002; Wilcoxon z=−2.48, p=.013; permutation p=.049
- Mechanism: LR weight vs individual Brier rank r_s=−0.075 (not accuracy); 9 of 15 models get negative weights (used contrastively); models selected 100% of SR runs include both best (Sonnet, Opus, Flash, Gemini Pro, GPT-5.4 Mini) and worst locals (Qwen 2.5 7B, LLaMA 3.1 8B, Phi-4 14B) — U-shape consistent with complementary error patterns
- Best low-complexity formula: σ(p_Gemini Pro − p_Claude Haiku), a pure model-disagreement signal; BS 0.231 on 203 full items (12.9% reduction vs 15-model arithmetic mean 0.265)
- Contamination: accuracy differentials +0.05 to +0.26 (Claude Sonnet +0.256); full-vs-clean ranking Spearman ρ=0.532; cloud–local mean gap collapsed 35.8% → 8.9% on clean items
- Human market vs LLMs: final market BS 0.098 vs LLM mean 0.266 (2.72×); cutoff-matched LLM 1.61–2.64× worse (mean 1.95×)
- Clean subset only 94 items — individual rankings underpowered

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Three-way weighting doctrine: weight what disagrees productively, what has realized edge, what errs independently — OTHER
- Negative-weight (contrastive) treatment of systematically-biased sources (e.g., market lines over-shading public teams) rather than pruning them — OTHER
- Training-cutoff hygiene for LLM/news-derived signals (35.8% → 8.9% cautionary collapse) — TRUST-SIGNAL
- Pairwise disagreement features σ(p_A − p_B) (engine−market disagreement) — OTHER

## Engine-actionable? (yes/no + one-line what)
yes — fit L2 logistic aggregation on GSE's source probabilities with error-decorrelation diagnostics, keep negative-weight sources contrastively, gate at ≥5% Brier improvement over arithmetic mean on held-out season.
