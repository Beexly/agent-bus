# docs/arxiv-program/research/2026-09-21/arxiv-deep/0719-finabstain-uncertainty-calibrated-multimodal-rag.md

## What it is (1-2 sentences)
Research-ledger read of arXiv:2607.24875v1 (Torres, Cheng & Huang, 2026): an explicit research PROPOSAL (not executed study) for FinAbstain, an uncertainty-calibrated multimodal RAG selective-forecasting framework — all reported numbers are explicitly labeled simulated, so only the architecture transfers: a composite hybrid uncertainty score, a dual-timestamp point-in-time retrieval rule, and a preregistered chronological evaluation blueprint. Verdict in file: ADAPT — framework-only.

## Key metrics/methods (formulas where given, else "not specified")
- Point-in-time evidence: ℰ_{i,t} = ∪_{m∈M} {e^(m)_j : τ^pub_j ≤ t, τ^ing_j ≤ t} (Eq. 1) — dual timestamp (publication AND ingestion ≤ t), immutable snapshots, indicators recomputed only from bars ending at t.
- Agent disagreement: D_{i,t} = (2/(A(A−1))) Σ_{a<b} JSD(p_{a,i,t} ∥ p_{b,i,t}) (Eq. 2).
- Relevance-weighted contradiction: C_{i,t} = Σ_{j<k} r_j r_k q_{jk} / (Σ_{j<k} r_j r_k + ε) (Eq. 3).
- Hybrid uncertainty: U_{i,t} = σ(w₀ + w_D D + w_C C + w_S S + w_R R + w_H H + w_G G) (Eq. 4), where S = 1−sampling agreement, R = 1−retrieval relevance (retrieval deficiency), H = predictive entropy, G = recent calibration gap; weights validation-fitted.
- Controller: ŷ = argmax_y p̄(y) if U ≤ θ else ⊥ (Eq. 5); θ selected on validation for minimum selective risk at minimum coverage c_min.
- Coverage Cov(θ) = (1/n)Σ g_θ; selective Risk(θ) = Σ g_θ ℓ / (Σ g_θ + ε) (Eq. 6); ECE = Σ_b (|I_b|/n)|acc(I_b) − conf(I_b)| (Eq. 7).
- Trading metrics: net return r^net = z_t r_{t+1} − κ|z_t − z_{t−1}|, Sharpe, MDD, costs at 5/10/20 bps, block-bootstrap CIs.
- Role-separated agents (fundamental, news sentiment, technical, risk/counterargument, verifier) analyze independently (no anchoring), then a weighted aggregation pass. Calibration suite: raw max-prob, temperature scaling, isotonic regression, split conformal (nonconformity 1−p̄_y). Mandatory human review when contradiction exceeds a safety threshold.
- Assumptions: exchangeability for conformal coverage (weakened by regimes — coverage reported by regime/month); agent independence after independent analysis; timestamp precision and licensed-news availability.

## Data sources named
- Planned only (not executed): S&P 100 constituents 2015–2024, survivorship-aware; SEC EDGAR 10-K/10-Q/8-K, earnings-call transcripts, licensed news, OHLCV, MACD, RSI, moving averages, volatility. Table I counts explicitly labeled "simulated planning values, not observations." Tasks: 1-day/5-day abnormal-return direction (bullish/neutral/bearish), 20-day volatility interval. No sports data. No code stated.

## Findings (numbers and facts, not vibes)
- ALL NUMBERS SIMULATED — the paper's own section is labeled simulated, not empirical. Per the file: under the simulated scenario, FinAbstain selective accuracy 0.688 at 72% coverage vs calibrated-no-abstention 0.606 at 100%; ECE 0.026 vs raw 0.128; Sharpe 1.08 vs 0.57; MDD 0.112 vs 0.171. Simulated ablations: removing disagreement/contradiction/calibration each degrades selective accuracy and ECE. These illustrate the intended hypothesis; they are NOT findings.
- The paper's own limitations (honest, extensive): all numbers simulated; irreducible market uncertainty remains; LLM rationales are not causal; conformal validity degrades under temporal dependence; needs frozen data manifest, prompt registry, model hashes, independent audit before any performance claim. Single timestamp-precision assumption; no news corpus yet (licensed news pending).
- Corpus note: the composite uncertainty score (Eq. 4) is genuinely new in this corpus — complements ledgers 0714/0715/0716 (abstention signals) and 0717 (gate diagnostic) as a composite score + chronological evaluation blueprint.
- GSE gate (per file): ADOPT if 2025 held-out shows hybrid U beats temperature-scaling-only and MC-Dropout-only on selective hit rate at 80% coverage by ≥1pp with w_D, w_C > 0; REJECT if w_D/w_C fit at ~0 (mechanism doesn't transfer).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Composite hybrid uncertainty U (disagreement + contradiction + sampling + retrieval deficiency + entropy + calibration gap) formalizes what GSE currently handles heuristically across evidence agents (injury, weather, line movement) — a single fitted abstention score for the publish/post gate — **TRUST-SIGNAL**
- Dual-timestamp point-in-time rule (Eq. 1): every news/injury evidence item needs publication timestamp ≤ game-lock AND recorded ingestion timestamp — directly adoptable backtest-integrity rule; the file's proposed test verifies the filter catches a known backtest leak case — **TRUST-SIGNAL**
- Contradiction term C gives a principled formalization of cross-source evidence conflict — GSE's current heuristic conflict handling should be replaced by a fitted term — **TRUST-SIGNAL**
- Controller spec: predict when U ≤ θ, else abstain / request evidence / reduce exposure by 1−U / route to human — maps to GSE's pick-tiering and Garrett-review routing — **TRUST-SIGNAL**
- The paper's most durable contribution per the file may be the preregistered chronological evaluation protocol (frozen data manifest, prompt registry, final test touched once, block-bootstrap CIs, Table-II metric suite: selective accuracy, abstention precision) — propose as GSE's standing evaluation standard — **OTHER** (evaluation methodology)
- Simulated-only results mean nothing is transferable as measured lift — any claim built on these numbers is void — **TRUST-SIGNAL** (negative: do not cite as evidence)

## Engine-actionable? (yes/no + one-line what)
yes — Implement hybrid uncertainty U (Eq. 4) across GSE's evidence agents with validation-fitted weights as the post/abstain controller, and enforce the dual-timestamp (publication ≤ game-lock, ingestion recorded) point-in-time rule on all news/injury inputs to harden backtest integrity.
