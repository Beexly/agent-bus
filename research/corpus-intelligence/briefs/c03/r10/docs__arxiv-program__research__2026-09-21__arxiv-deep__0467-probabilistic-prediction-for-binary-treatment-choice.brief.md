# docs/arxiv-program/research/2026-09-21/arxiv-deep/0467-probabilistic-prediction-for-binary-treatment-choice.md
## What it is (1-2 sentences)
A full-paper read of Manski (2021, arXiv:2110.00864v1) on Wald statistical decision theory for binary choices — using minimax regret (MMR) over as-if optimization with estimated probabilities, and critiquing ML metrics (accuracy/AUC/calibration) that ignore the decisions predictions induce. Verdict in the file: ADAPT — the minimax-regret framework ports directly to GSE's publish/bet/abstain decisions under probability uncertainty.

## Key metrics/methods (formulas where given, else "not specified")
- Wald SDF framework: states of nature s, sampling distributions Q_s, statistical decision functions φ(ψ); evaluation by maximum regret max_s E_s[R_s(φ)], not Bayes risk.
- Clinical normalization: U(A,0)=1, U(A,1)=0, U_B ∈ (0,1); threshold rule p_x* = 1 − U_B: choose B iff p_x > p_x*.
- Regret: R_s[φ(ψ)] = |(1−p_s) − U_B| · e[p_s, φ(ψ), U_B], where e = probability the rule chooses the inferior treatment.
- No-data MMR = min[(1−p_m) − U_B, U_B − (1−p_M)]; uninformative-data randomized rule with q = [U_B − (1−p_M)]/(p_M − p_m).
- One-observation maximum regret = ¼·max[(1−U_B)², U_B²].
- Hoeffding bound: max_s E_s[R_s(n/N)] ≤ δ + max[(1−p_m) − U_B, U_B − (1−p_M)]·exp(−2Nδ²); bounded-variation pooled-sample extension (δ+α_1λ) + max(gaps)·exp[−2(N_0+N_1)δ²].
- Weighted (kernel) estimators with optimized weights; ecological inference via constrained least squares for group-level-only data.

## Data sources named
No real dataset. Stylized clinical setup (illustrative two-covariate example: p_{m0}=0.2, p_{M0}=0.6, λ_±=±0.1, U_{0B}=0.6); Monte Carlo (20,000 draws on 50×50 parameter grid); ecological-inference example with constrained least squares. All numbers are synthetic/proof-of-concept.

## Findings (numbers and facts, not vibes)
- ITP weighted-estimator example (Table 1, exact): sample sizes (N_0,N_1) and minimized maximum regret at optimal weight — (10,10): 0.030 at w=0.751; (5,15): 0.034 at 0.863; (15,5): 0.023 at 0.752; (20,20): 0.021 at 0.858; (10,30): 0.026 at 0.911; (30,10): 0.016 at 0.800. Optimal weights favor own-group sample but borrow substantially from the other group.
- Ecological example: maximum regret 0.011 for (10,10) and 0.008 for (20,20).
- One-observation max regret closed form: ¼·max[(1−U_B)², U_B²].
- Limitations noted in file: no real data (clinical framing is a vehicle); single-threshold utility can't express Kelly growth/risk limits/correlated simultaneous bets; MMR needs a known probability interval [p_m, p_M], which in sports must itself be estimated (reintroducing the assumed-away uncertainty); 50×50 grid scales badly to rich feature spaces; critique of ML metrics lands harder on biostatistics than on GSE (GSE already evaluates CLV/ROI/Kelly growth).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fills the repo's named Gap #1: Kelly mentioned 12× in repo, zero papers read → [OTHER] decision-theoretic complement to Kelly: MMR minimizes worst-case regret under probability uncertainty (engine vs market disagreement where neither is known right).
- "Evaluate decisions, not probability accuracy" → [TRUST-SIGNAL] doctrine: pick/abstain policy judged by decision quality, not calibration beauty alone.
- As-if optimization critique (plug estimate in, act as if true) → [OTHER] directly challenges GSE's habit of plugging engine prob into Kelly as if true.
- Optimal weighted-estimator weights (0.75–0.91 favoring own group, borrowing from other) → [OTHER] template for optimally blending engine and market probabilities before thresholding.
- Synthetic-only numbers → [TRUST-SIGNAL] treat Table 1 weights as illustration, not as fitted GSE parameters.
- Binary-decision limit vs GSE's portfolio of correlated bets → [OTHER] extension needed: portfolio (multi-bet) minimax regret with Kelly-growth utility.

## Engine-actionable? (yes/no + one-line what)
Yes — frame publish/bet/pass as Manski's binary choice: compute maximum regret of the current as-if threshold over a calibrated engine-vs-market disagreement interval, adopt regret-optimal blended-probability thresholds, and extend to portfolio regret across simultaneous correlated bets (2–3 engineer-weeks).
