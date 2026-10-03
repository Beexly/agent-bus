# docs/arxiv-program/research/2026-09-21/arxiv-deep/0719-finabstain-uncertainty-calibrated-multimodal-rag.md

## What it is (1-2 sentences)
Ledger of arXiv:2607.24875v1 (Torres et al. 2026), "FinAbstain" — an explicit research PROPOSAL (not executed study) for a selective financial-forecasting system: point-in-time multimodal retrieval, role-separated LLM agents, a composite hybrid uncertainty score, and an abstention controller, plus a preregistered evaluation blueprint. Ledger verdict: ADAPT as framework-only — all results are labeled simulated; what transfers is the architecture, the hybrid uncertainty score, and the dual-timestamp backtest-integrity rule.

## Key metrics/methods (formulas where given, else "not specified")
- Point-in-time evidence: ℰ_{i,t} = ∪_{m∈M} {e^(m)_j : τ^pub_j ≤ t, τ^ing_j ≤ t} (publication AND ingestion timestamps ≤ t).
- Agent disagreement: D_{i,t} = (2/(A(A−1))) Σ_{a<b} JSD(p_{a,i,t} ∥ p_{b,i,t}).
- Relevance-weighted contradiction: C_{i,t} = Σ_{j<k} r_j r_k q_{jk} / (Σ_{j<k} r_j r_k + ε).
- Hybrid uncertainty: U_{i,t} = σ(w₀ + w_D D + w_C C + w_S S + w_R R + w_H H + w_G G), where S = 1−sampling agreement, R = 1−retrieval relevance (retrieval deficiency), H = predictive entropy, G = recent calibration gap; weights validation-fitted.
- Controller: ŷ = argmax_y p̄(y) if U ≤ θ else ⊥ (abstain); θ selected on validation for minimum selective risk at minimum coverage c_min.
- Coverage Cov(θ) = (1/n)Σ g_θ; selective Risk(θ) = Σ g_θ ℓ / (Σ g_θ + ε); ECE = Σ_b (|I_b|/n)|acc(I_b) − conf(I_b)|.
- Trading metrics: net return r^net = z_t r_{t+1} − κ|z_t − z_{t−1}|, Sharpe, MDD, costs at 5/10/20 bps, block-bootstrap CIs.

## Data sources named
Planned (not executed): S&P 100 constituents, 2015–2024, survivorship-aware; SEC EDGAR 10-K/10-Q/8-K, earnings-call transcripts, licensed news, OHLCV, MACD, RSI, moving averages, volatility. Table I counts explicitly labeled "simulated planning values, not observations." No sports data. No code stated.

## Findings (numbers and facts, not vibes)
- All simulated (paper's own label — NOT empirical findings): FinAbstain selective accuracy 0.688 at 72% coverage vs calibrated-no-abstention 0.606 at 100%; ECE 0.026 vs raw 0.128; Sharpe 1.08 vs 0.57; MDD 0.112 vs 0.171. Ablations (simulated): removing disagreement/contradiction/calibration each degrades selective accuracy and ECE; the "no temporal filter" row was intentionally contaminated and excluded (demonstrates why scores alone can't certify a backtest). These illustrate the intended hypothesis; they are not findings.
- GSE mapping in the ledger: GSE's multi-agent evidence lanes (injury, weather, line movement) map to the paper's agent roles; the contradiction term C formalizes cross-source conflict GSE currently handles heuristically.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hybrid uncertainty score (disagreement JSD + evidence contradiction + sampling consistency + retrieval deficiency + entropy + calibration gap, validation-fitted weights) as a publish-gate controller for each candidate pick: TRUST-SIGNAL
- Dual-timestamp point-in-time rule (publication ≤ t AND ingestion ≤ t) as a backtest-integrity rule for GSE's news/injury data: TRUST-SIGNAL
- Role-separated independent agents (fundamental, sentiment, technical, risk/counterargument, verifier) with a weighted aggregation pass, no anchoring: OTHER
- Preregistered chronological evaluation blueprint (chronological split, validation-only thresholds, final test touched once, block-bootstrap CIs) as GSE's standing evaluation standard: TRUST-SIGNAL

## Engine-actionable? (yes/no + one-line what)
Yes — implement the hybrid uncertainty U for each candidate pick (fit weights via logistic regression on realized correctness on 2023–2024 picks), enforce the dual-timestamp check on all news/injury inputs, and adopt iff the hybrid U beats temperature-scaling-only and MC-Dropout-only baselines on selective hit rate at 80% coverage by ≥1pp on 2025 held-out with positive fitted weights on w_D and w_C.
