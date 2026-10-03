# arxiv-program/research/2026-09-21/arxiv-deep/1158-bayesian-best-arm-identification-abstention.md
## What it is (1-2 sentences)
Deep read of arXiv:2606.29203 (Huang, Hou, Tan 2026, "Bayesian Best-Arm Identification with Abstention: A Polynomial-to-Exponential Phase Transition"). In fixed-budget Bayesian best-arm identification with a terminal abstention budget alpha, undetected error decays exponentially E_T(alpha) = exp(-alpha^2 T/(8 kappa_nu^2) + o(alpha^2 T)) vs only polynomial Omega(T^{-1/2}) for forced decisions; the optimal PGWS protocol allocates evaluation budget inversely proportional to squared posterior gaps. Verdict ADAPT, scoped to engine-version evaluation/shipping decisions, not game prediction.
## Key metrics/methods (formulas where given, else "not specified")
- PGWS (Posterior Gap Weighted Sampling with Abstention): Gaussian posteriors mu_i|F_t ~ N(M_i(t), V_i(t)); forced exploration until each arm pulled >= sqrt(t+1); else sample arm i with p_i(t) proportional to Delta_hat_i(t)^{-2} (inverse squared posterior-mean gap to leader).
- Terminal statistic: R_T = min_{j != b_hat_T} (M_{b_hat_T}(T) - M_j(T))^2 / (V_{b_hat_T}(T) + V_j(T)); abstain iff R_T < r_{T,alpha}, the lower alpha-quantile of R_T under the Bayesian law (Monte-Carlo calibrated); large-T approximation r^{asy}_{T,alpha} = alpha^2 T / (8 kappa_nu^2).
- Hardness: kappa_nu = sum_{i!=j} int f_i(x) f_j(x) prod_{k!=i,j} F_k(x) dx = (1/(sigma_0 sqrt(pi))) sum_{i<j} w_ij exp(-(nu_i-nu_j)^2/(4 sigma_0^2)); P_nu(Gamma <= eps) = kappa_nu eps + o(eps).
- Phase transition (Thms 2.1, 3.1, Cor 3.2): (1/(alpha^2 T)) log E_T(alpha) -> -1/(8 kappa_nu^2).
- Forced decision (Thm 3.3): liminf sqrt(T)*E_T(0) >= sqrt(2/pi)*kappa_nu (polynomial only).
- Posterior certification (Lemma 2.1): E_T(PGWS(alpha)) <= (K-1)e^{-r_{T,alpha}}.
- Frequentist (Thm 3.4): abstention improves only lower-order terms: exp(-Delta^2 T/8 - Delta z_alpha sqrt(T)/2 - z_alpha^2/2 + O(log T)) - the phase transition is exclusively Bayesian.
- Beyond Gaussian (Thm 4.1): same exponent -1/(8 kappa^2) for regular one-parameter exponential families, kappa in Fisher-Rao coordinates s(mu) = int sqrt(I(v)) dv; Beta-Bernoulli example s(mu) = 2 arcsin sqrt(mu).
- Assumptions: known product prior; continuous prior (unique best arm a.s.); Gaussian or regular exponential-family rewards; iterated limit T -> inf then alpha -> 0.
## Data sources named
Theory + Gaussian simulations only. Experiments: K=5 arms, prior mu_i ~ N(nu_i, sigma_0^2), nu=[5,5,3,3,2], sigma_0=1, rewards N(mu_i,1). Calibration: M_cal=10^5 prior simulations; evaluation: M_test=10^6 independent prior draws. Methods: PGWS(alpha) for alpha in {0, 0.01, 0.03, 0.05}, Unif(alpha), BayesElim (Atsidakou et al. 2023, forced decision). No code, no real data.
## Findings (numbers and facts, not vibes)
- Phase transition visible: PGWS(alpha>0) undetected-error curves approximately affine on log scale (exponential); forced-decision PGWS(0) and BayesElim decay polynomially slower (Figure 1a).
- Calibration exact: empirical abstention tracks alpha across all T, not overly conservative (Figure 1b).
- PGWS(alpha) achieves significantly lower undetected error than Unif(alpha) at every alpha in {0, 0.01, 0.05} across all budgets (Figure 2) - near-tie instances dominate Bayes error, resolved by concentrating samples on leader + closest challenger.
- Limitations: asymptotic regime (finite-T behavior only empirical); known prior required - misspecification breaks optimality claim; frequentist caveat (Thm 3.4) - if GSE evaluation is fixed-instance rather than Bayesian-average, abstention buys only lower-order improvements; terminal decision only (no sequential early stopping); five-arm Gaussian simulations, no real-data validation.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: evaluation-budget allocation + ship/abstain gate for competing engine versions; complements brief 1153's safe-policy-improvement LCB ship-gate (1153 decides whether to ship; this adds how to spend the evaluation budget - inverse-gap weighting - and exact abstention calibration).
## Engine-actionable? (yes/no + one-line what)
Yes — implement PGWS evaluation for challenger engine versions (p_i proportional to 1/gap^2, forced exploration floor) with a Monte-Carlo-calibrated abstain-from-shipping gate (alpha=0.05) cross-checked against 1153's LCB gate, ~3 days; ADOPT allocation rule only if inverse-gap weighting reaches ship-decision confidence with >=20% fewer evaluation weeks than equal-split, and the gate blocks >=1 historically-bad ship while passing good ones; REJECT the asymptotic exponent as a decision criterion (GSE lives at finite T).
