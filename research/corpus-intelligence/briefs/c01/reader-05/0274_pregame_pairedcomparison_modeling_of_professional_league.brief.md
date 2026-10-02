# arxiv-program/research/2026-09-21/arxiv-deep/0274-pregame-pairedcomparison-modeling-of-professional-league.md
## What it is (1-2 sentences)
A research-deep brief of arXiv:2609.08060 (Guan & Tung, 2026): pre-game win-probability forecasting for professional League of Legends maps, comparing a minimal one-stage logistic model (EWMA form + ridge-shrunk stable team strengths, fit end-to-end on log-loss) against a two-stage composite mixed model, classical benchmarks, and Polymarket prices. Verdict: ADAPT — port the architecture to NFL game-outcome forecasting and adopt the leakage-proof market-benchmark protocol.
## Key metrics/methods (formulas where given, else "not specified")
- One-stage model: pi = expit(β0 + γFP·1[blue is first-pick_i] + βB·E^B_b(i)(ti) − βR·E^R_r(i)(ti) + θ_b(i) − θ_r(i)); penalized log-loss −Σ[Oi·log pi + (1−Oi)·log(1−pi)] + τ/2·‖θ‖², fit by L-BFGS. EWMA form: E^B_b(i)(ti) = (1−λ)·E^B_b(i)(t−) + λ·x(t−).
- Key equivalence: ridge penalty τ is exactly the MAP estimate of a logistic GLMM with θt ~ N(0, σ²θ); τ ↔ 1/σ²θ. Unseen teams get θ=0.
- Two-stage rival: Yi = 0.50·Oi + 0.25·Δg/σg + 0.15·Δk/σk + 0.10·ΔT/σT composite; REML variance components, BLUP reliability κt = σ̂²θ/(σ̂²θ+σ̂²/nt); Platt map p = expit(c0 + c1·Ŷ).
- RPS = (1/(r−1))·Σᵢ(Σⱼ≤ᵢpj − Σⱼ≤ᵢej)², reducing exactly to Brier (pb−O)² for 2-outcome markets; baseline 0.25 = uninformative.
- Validation: global 80/20 time split + per-game walk-forward refit (≥500 minimum), paired Diebold–Mariano tests on per-game score differences (di = sᴬi − sᴮi, t = d̄/SE), Bonferroni ×8 across leagues; random CV declared invalid; market backtest leakage-proof via id-keyed exclusion of the predicted game from its own window (not timestamp cutoff), anchored to first telemetry frame.
## Data sources named
5,893 games collected / 5,135 retained (need first-pick assignment): lolesports broadcast telemetry (unofficial endpoints via community API docs), Leaguepedia MediaWiki Cargo DB (patch ids, rosters, first-pick draft assignment — sole source of the draft covariate), Polymarket API (per-map prices, benchmark only, never in fitting). No code repository or data URL provided.
## Findings (numbers and facts, not vibes)
- Holdout Brier (nte=912): proposed 0.2230 vs two-stage 0.2257 vs Cattelan dynamic 0.2351 vs Stefani static 0.2301 vs BLUP-static boundary 0.2268. Decomposition: dynamic-only 0.2351 → static-only 0.2268 → both blocks 0.2257 → one-stage 0.2230; BLUP shrinkage alone worth 0.0033.
- Walk-forward (4,605 games): proposed 0.2207 vs candidate 0.2215 (paired Δ=+0.0008, p=0.40, score corr. 0.944) vs Cattelan 0.2319.
- Parsimony wins: d-ablation monotone-degrading 0.2230 < 0.2242 < 0.2258 for d=1,4,10 because end-game features are mutually correlated 0.89–0.96.
- Native calibration: walk-forward slope 0.995, intercept −0.009 (no calibration step); candidate's in-sample Platt slope 0.67 on holdout.
- vs Polymarket (928 matched maps): parity on per-game contracts (Δ=+0.005, 95% CI −0.004 to +0.014; +0.006 proposed); market ahead on 136 decider maps (series-winner fallback prices), Δ=+0.0093/+0.0097, p=0.025 both; deficit concentrated on Worlds.
- Ablation flatness: λ ∈ {0.1…0.9} moves walk-forward Brier 0.0002 total; selected (λ,τ)=(0.9,4) ↔ σ̂θ=0.5 log-odds.
- Thin-league diagnostic: LCP proposed 0.2648 vs two-stage 0.3055 — ridge identifiable where REML goes singular.
- Spearman between end-of-training team ranking and test win rates: 0.438 (proposed θ) vs 0.436 (BLUPs), 50 teams.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: engine probability calibration — require walk-forward calibration slope ∈ [0.9,1.1], intercept ∈ [−0.05,0.05] before probabilities enter content/CLV; the paper's 0.995 slope is the bar; no Platt-step patching allowed.
- OTHER: market-benchmark protocol for GSE — id-keyed backtests vs de-vigged consensus moneylines, staleness filters on line timestamps, walk-forward coherence check, paired DM tests with Bonferroni across slices.
- COACHING: INFERENCE — the home/rest/division covariates proposed as NFL analogs of the first-pick schedule-assigned covariate could absorb coaching-edge effects (rest differential, divisional familiarity); not measured in the paper.
- OTHER: caution — d-ablation shows richer box-score-margin features *hurt* due to near-collinearity with the outcome; relevant to any GSE margin-based feature engineering.
## Engine-actionable? (yes/no + one-line what)
Yes — port the one-stage logistic (EWMA same-venue form + ridge team strengths, home/rest/division covariates, L-BFGS on log-loss) to the NFL game panel and gate adoption on beating static-ridge and form-only boundaries by paired DM p<0.05 with calibration slope ∈ [0.9,1.1].
