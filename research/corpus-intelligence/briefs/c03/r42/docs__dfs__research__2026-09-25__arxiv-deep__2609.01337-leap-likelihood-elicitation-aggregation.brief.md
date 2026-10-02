# docs/dfs/research/2026-09-25/arxiv-deep/2609.01337-leap-likelihood-elicitation-aggregation.md
## What it is (1-2 sentences)
Full-text deep read (verdict: ADAPT) of arXiv:2609.01337 "LEAP: Likelihood Elicitation and Aggregation for LLM-based Probabilistic Forecasting" (Chen et al., Sep 2026), which replaces a monolithic LLM forecast call with a pipeline of evidence-isolated elicitation plus deterministic tempered Bayesian aggregation with dependency clustering, reliability shrinkage, and per-evidence leave-one-out contribution audits — plus an adversarial limitations section and a complete GSE implementation spec.
## Key metrics/methods (formulas where given, else "not specified")
- Task schema: T = (q, tfreeze, τ, O); posterior P(θ|E) ∝ P0(θ) ∏_{i∈R} Pi(ei|θ) with conditional independence assumption (repaired by dependency clustering on canonicalised dependency keys).
- Continuous: τpost = τ0 + η Σ_{i∈R} τi; µpost = (1/τpost)(µ0τ0 + η Σ_{i∈R} µiτi); Δj = µpost − µpost^(−j).
- Single-choice: log πpost(k) ∝ α log π0(k) + η Σ_{i∈R} wi log Li(k), softmax; Δj = πpost(k̂) − πpost^(−j)(k̂).
- Multi-choice: logit πpost(k) = logit π0(k) + η Σ_{i∈R} wi ℓi(k); Δj = Σ_k |πpost(k) − πpost^(−j)(k)|.
- Scoring: Brier = (1/N) Σ_i (1/Ki) Σ_k (pik − yik)²; Spherical = (1/N) Σ_i (Σ_k pik yik)/√(Σ_k p²ik √(Σ_k y²ik)); NCRPSi = min(1, CRPSi/max(|vi|,1)); ECE = gap between top-option confidence and empirical accuracy.
- Fixed likelihood maps (Appendix B): continuous observation relative SDs {0.08, 0.18, 0.45} by type × tier multipliers (A 0.80 / B 0.95 / C 1.15 / other 1.10) × strength (strong 0.85 / weak 1.20) × reliability (high 0.85 / low 1.15) × target_match × recency, clamped [0.03, 1.25]; discrete: support 0.90 / oppose 0.08 / neutral 0.12 (direct), verifier 0.99/0.01, fallback 0.85/0.12/0.35; role weights wi ∈ [0.05, 1.5], η = 1.0 default.
- Safeguards: dependency clustering (85.3% retained with source-key clustering); reliability sampling (agreement shrinks likelihood toward neutral, never inflates); outlier rejection |µi − µ0| > 4σ0 for continuous.
## Data sources named
Constructed 347-task evaluation-only benchmark: FutureX (160 initial → 157 retained), GAIA (103 → 99, text-only mirror), BrowseComp (100 → 91); 60-task diagnostic subset; 5 base models (DeepSeek-V3.2, Gemini-3.1-Flash-Lite, Claude-Haiku-4.5, GPT-5.4-mini, Grok-4.20-Fast) + 4 external agent CLI frameworks (DeerFlow, Hermes, OpenClaw, MiroFlow); code at https://github.com/layingfish/LEAP (stated, not verified); scoring rule from Zeng et al. (2026).
## Findings (numbers and facts, not vibes)
- LEAP beats Monolithic on all 5 base models: FutureX gains 3.6–18.1 points, Spherical gains 2.5–15.1 points, accuracy up on all five, NCRPS improved on all five (gains >50 points on GPT-5.4-mini, >30 on Gemini-3.1-Flash-Lite). Brier improved on only 3 of 5 models (DeepSeek-V3.2 and Gemini-3.1-Flash-Lite slightly worse/tied).
- Calibration: ECE 0.1840 → 0.0876, Adaptive ECE 0.1765 → 0.0912, overconfidence 0.3167 → 0.1500 (roughly halved); at 7/30/60-day horizons the FutureX gain grows 6.8 → 11.9 points.
- Ablation (FutureX/Brier/ECE): Monolithic 0.6512/0.2689/0.1840; LEAP w/o prior 0.6427/0.2808/0.2134 (below Monolithic — prior is the single most important component); w/o dependency clustering 0.7089/0.2299/0.1578; w/o reliability sampling 0.7136/0.2215/0.1219; full LEAP 0.7284/0.2057/0.0876.
- Cost: full LEAP uses ~2× tokens/task (11,508 vs 5,733) and p95 latency 27.8s vs 12.1s; run-to-run σ median ≈ 0.010; LEAP-vs-Monolithic ordering preserved in 48/50 cells.
- η sensitivity is flat (0.5 → 0.7181, 1.0 → 0.7284, 2.0 → 0.7210 FutureX); linear opinion pooling (0.6808) loses to LEAP (0.7284).
- Limitations (adversarial): no train/dev/test split discipline; no significance testing; conditional independence patched only for near-duplicate keys; blind-LLM prior is unprincipled; Brier gains partly from anti-overconfidence rather than better discrimination; GAIA/BrowseComp are not real forecasting tasks.
- GSE implementation spec included: new module `packages/prediction-engine/src/leap-aggregation.db.ts`, 6-fixture reproducible test (posterior 0.9184 on canonical case), adoption gate: Brier ≥5% better, ECE ≥30% better, CLV not worse; closing line as deterministic verifier source.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- LEAP aggregation machinery as calibration-first upgrade for GSE's multi-market ensemble (TRUST-SIGNAL, OTHER).
- ECE halved (0.184→0.088) — the strongest numeric argument for adoption (TRUST-SIGNAL).
- Leave-one-out Δj audit trail per evidence item — standing source-triage mechanism (TRUST-SIGNAL).
- Prior-is-everything ablation: invest in empirical priors, not blind priors (TRUST-SIGNAL).
- Reliability-shrinkage-only (never inflate) weighting discipline (TRUST-SIGNAL).
## Engine-actionable? (yes/no + one-line what)
Yes — build the deterministic Bayesian aggregation module (prior + tempered per-source likelihoods + dependency clustering + reliability shrinkage + LOO audit) as a calibration-first replacement for the multi-market ensemble, gated on Brier/ECE/CLV backtest.
