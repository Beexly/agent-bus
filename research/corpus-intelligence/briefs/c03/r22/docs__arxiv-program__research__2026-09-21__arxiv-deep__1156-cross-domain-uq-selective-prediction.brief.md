# docs/arxiv-program/research/2026-09-21/arxiv-deep/1156-cross-domain-uq-selective-prediction.md
## What it is (1-2 sentences)
Deep read of arXiv:2603.08907 (Basu 2026): a nine-family ablation of concentration-inequality bounds for selective prediction with finite-sample risk control (RCPS), plus Transfer-Informed Betting (TIB) — warm-starting a WSR betting bound with a data-rich sibling market's risk profile — for certifying thin markets. Verdict: ADAPT, with a concrete bound-selection recipe for GSE's certification layer.
## Key metrics/methods (formulas where given, else "not specified")
- RCPS threshold rule: τ* = min{τ_k : R̂(τ_k) + C_k(n,δ) ≤ α}. Hoeffding+union: C_H = √(ln(K/δ)/(2n)); LTT: C_LTT = √(ln(1/δ)/(2n)) (ln K eliminated); Empirical Bernstein: C_EB = √(2V̂ln(3K/δ)/n) + 3ln(3K/δ)/n; Clopper-Pearson: UCB_CP(S,n,δ) = F_Beta(S+1,n−S)^{−1}(1−δ); WSR wealth K_t(m) = Π(1+λ_i(X_i−m)), UCB_WSR = sup{m: K_n(m)<1/δ}.
- TIB blending: μ̂^TIB_t = w_t·R̂_source + (1−w_t)·μ̂_t, w_t = n_eff/(n_eff+t), n_eff=50 default. Theorem 1: TIB wealth stays a supermartingale (valid for all source–target divergences); convergence |UCB_TIB−UCB_WSR| = O(n_eff/(n_eff+n)). Machine-checked in Lean 4 (18 lemmas, 0 sorry).
- Nine bound families ablated: Hoeffding+union, Empirical Bernstein+union, LTT+Hoeffding, LTT+Empirical Bernstein, Clopper-Pearson+LTT, WSR betting+LTT, Wasserstein DRO, CVaR, PAC-Bayes-λ.
- Bound-selection recipe by n_cal: n≳500 → WSR+LTT; 120≲n≲500 → LTT+Empirical Bernstein; n≲120 → TIB warm-started from a sibling market (e.g., NFL spread → NCAAF spread), n_eff=50.
## Data sources named
Four intent-classification benchmarks: MASSIVE (1,102 test, n_cal=549), NyayaBench v2 (280 test, n_cal=134), CLINC-150 (22,500, simulated confidence scores, n_cal=11,250), Banking77 (13,083, simulated, n_cal=6,468). Classifier SetFit + all-MiniLM-L6-v2. Transfer uses MASSIVE as source for NyayaBench v2 target.
## Findings (numbers and facts, not vibes)
- LTT is the single largest improvement: MASSIVE α=0.10 — LTT+Hoeffding 94.0% coverage vs Hoeffding+union 73.8% (27% relative); correction 0.079→0.046.
- WSR+LTT tightest non-transfer: MASSIVE 96.0% at α=0.10; NyayaBench v2 18.5% vs LTT+Hoeffding 3.4% (5.4×); at α=0.20, 41.1% vs 14.4%.
- TIB: NyayaBench α=0.10 18.5% (5.4× over LTT+Hoeffding 3.4%); PAC-Bayes transfer only method feasible at α=0.01 (3.4%).
- Progressive trust: LTT feasible at n=150 (62.1%±8.6%); Hoeffding+union infeasible until n=400 (58.2%±4.3%) — 250-example gap.
- Rule of thumb: n≈120 verified examples per domain for LTT; ≈350 for Hoeffding.
- Calibration: ECE 0.515→0.040 (MASSIVE, T=10.0); 0.423→0.077 (NyayaBench, T=2.97). RCPS valid on raw scores; calibration widens usable τ range.
- Validity: zero guarantee violations across 9 methods × 18 configs × 2 primary benchmarks.
- Subgroup: only check_calendar (n_cal=167) per-intent feasible (60.7%); rest need ~120+/class.
- Rejection: Wasserstein DRO and CVaR strictly more conservative by design — REJECT for standard certification path.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Bound-selection recipe + TIB for thin markets: TRUST-SIGNAL (risk certification of pick claims).
- LTT 27% relative coverage gain over Hoeffding+union: TRUST-SIGNAL.
- n≈120/domain feasibility threshold; progressive-trust market graduation: TRUST-SIGNAL.
- Temperature scaling before threshold selection (ECE→0.04): TRUST-SIGNAL.
- Conformal-vs-selective comparison settles framework choice for single-pick posting (RCPS point-prediction risk, not conformal sets): TRUST-SIGNAL.
- Multi-source TIB blend (weighted by inverse W1 distance) as improvement experiment: TRUST-SIGNAL.
## Engine-actionable? (yes/no + one-line what)
yes — Implement the bound-selection recipe (WSR+LTT / LTT+EB / TIB) in GSE's per-market certification layer with progressive-trust graduation, certifying thin markets via sibling-market transfer.
