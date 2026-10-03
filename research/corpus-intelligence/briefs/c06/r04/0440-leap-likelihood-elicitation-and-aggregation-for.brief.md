# arxiv-program/research/2026-09-21/arxiv-deep/0440-leap-likelihood-elicitation-and-aggregation-for.md
## What it is (1-2 sentences)
LEAP replaces a monolithic LLM forecast with per-evidence-item isolated LLM calls that emit likelihood parameters, combined via a deterministic tempered conjugate-Bayesian update with dependency clustering and leave-one-out per-item auditability; it improves calibration and scoring-rule metrics across all 5 base models and 4 external agent frameworks.
## Key metrics/methods (formulas where given, else "not specified")
- Posterior: P(θ|E) ∝ P0(θ) ∏_{i∈R} Pi(ei|θ) (conditional-independence working assumption).
- Continuous: τ_post = τ0 + ηΣτi; μ_post = (μ0τ0 + ηΣμiτi)/τ_post. Single-choice: log π_post(k) ∝ α log π0(k) + ηΣ w_i log L_i(k). Multi-choice: logit π_post(k) = logit π0(k) + ηΣ w_i ℓ_i(k).
- LOO contribution: Δj = μ_post − μ_post^{(-j)} (continuous) / signed top-option shift (single-choice).
- Safeguards: dependency clustering (one representative per source group), outlier rejection (>4 prior σ from μ0), reliability sampling (R repeats, agreement shrinks likelihoods), η default 1.0, role weights w_i∈[0.05,1.5].
- Metrics: FutureX composite, Accuracy, Brier (eq. 13), Spherical (eq. 14), NCRPS, ECE/Adaptive ECE, overconfidence gap.
## Data sources named
Constructed benchmark of 347 tasks: 157 FutureX forecasting tasks, 99 GAIA info-seeking tasks, 91 BrowseComp tasks; 266 single-choice, 29 multi-choice, 52 continuous; 60-task diagnostic subset. Evidence from ReAct agent loop (budget 10 turns) with temporal isolation audit. Code: https://github.com/layingfish/LEAP.
## Findings (numbers and facts, not vibes)
- FutureX gains (Monolithic→LEAP): DeepSeek-V3.2 0.4895→0.6701; Gemini-3.1-Flash-Lite 0.6004→0.7069; Claude-Haiku-4.5 0.6211→0.6569; GPT-5.4-mini 0.6456→0.7222; Grok-4.20-Fast 0.6533→0.7503.
- External frameworks macro-average: FutureX +9.8, Accuracy +4.7, Brier −16.5 (0.4806→0.3157), Spherical +14.1, NCRPS −12.9.
- Calibration (GPT-5.4-mini): ECE 0.1840→0.0876, overconfidence 0.3167→0.1500 (both halved); horizon 7→60 days gains rise 6.8→11.9 pts.
- Ablation: removing the prior drops FutureX below Monolithic (0.6427 vs 0.6512) — prior is the load-bearing component.
- Cost: 11,508 tokens/task vs 5,733; median latency 10.4s vs 6.2s.
- Dossier verdict: ADAPT — mechanism ports to fusing qualitative news evidence into GSE's quantitative pick engine.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: per-item LOO auditability of what moved a pick probability; fusing injury/beat-writer/weather news into engine priors.
## Engine-actionable? (yes/no + one-line what)
yes — Build a news-fusion layer: engine probability as prior, isolated LLM likelihood elicitation per news item, closed-form Bayesian posterior + LOO audit trail; adopt on 2024–2025 if Brier improves ≥0.010 and ECE improves ≥25% relative.
