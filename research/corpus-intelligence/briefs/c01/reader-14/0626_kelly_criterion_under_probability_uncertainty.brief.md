# arxiv-program/research/2026-09-21/arxiv-deep/0626-kelly-criterion-under-probability-uncertainty.md
## What it is (1-2 sentences)
Research ledger (ADAPT verdict) on Smoczynski & Tomkins, "Optimal betting under parameter uncertainty: improving the Kelly criterion" (arXiv:1701.02814v2, Decision Analysis 2018). Pure simulation study: standard Kelly maximizes expected log wealth on point-estimate probabilities, but integrating the objective over the posterior of those probabilities — plus a mild chance constraint — beats both plug-in Kelly and fractional Kelly.

## Key metrics/methods (formulas where given, else "not specified")
- Standard Kelly program (P): max Σ_h π_h log(x_h O_h + w − Σ_i x_i) s.t. Σx ≤ w, x ≥ 0.
- Probability model: multinomial logit π_h = exp(β'v_h) / Σ_i exp(β'v_i); uncertainty β ~ N(β̂, Σ) with sandwich covariance.
- Variants tested: (S) plug-in Kelly on estimated π; (F) fractional Kelly; (Elb)/(Emc) expected-log-wealth over β posterior (lower-bound approx / Monte Carlo); (CCx) chance constraint max t s.t. P(t ≤ Σ_h π_h log(x_h O_h + w − Σ_i x_i)) ≥ 1−α, tested at α = 0.4, 0.25, 0.10 (exact two-outcome solution CC2 in appendix; CCN approx for n > 2); (ECCx) expected log wealth + chance constraint.
- Evaluation metric: expected exponential return E[log(w_i / w_{i−1})] under TRUE probabilities (simulation-only metric).

## Data sources named
None real — simulated data only: 4 experiments × 2,500 trials (E1: n=2 outcomes, odds 1.1; E2: n=2, odds 1.2; E3: n=10, odds 2; E4: n=30, odds 4). Matlab R2017a, fmincon; 1,000,000 MC samples for n=2, 2,000,000 for n=10/30.

## Findings (numbers and facts, not vibes)
- Total expected return summed over experiments (paper's Table 2): (T) true-probability Kelly 27.463 | (S) plug-in 18.134 | (F) fractional 13.268 | (Elb) 18.206 | (Emc) 18.471 | (CCx) α=0.40: 18.253 | (CCx) α=0.25: 16.454 | (CCx) α=0.10: 12.158 | (ECCx) α=0.40: 18.484 (best overall).
- (Emc) and (ECCx) at α=0.4 beat plug-in Kelly in EVERY single experiment; (Elb), (Emc), (CCx), (ECCx) at α=0.4 all beat plug-in overall.
- Estimation error cost: (T) 27.463 vs (S) 18.134 — roughly one-third of achievable growth lost to estimation error alone.
- Fractional Kelly (13.268) was the worst of the serious methods — the paper's data do not flatter the folk remedy.
- Small α (0.10) is "overly aggressive... dampening long term growth" (12.158); constraint level must be calibrated per application.
- Ledger's GSE spec: replace plug-in Kelly with Emc sizing (maximize mean log-wealth over MC samples from calibrated uncertainty) + chance constraint starting at α=0.4; proposed reproducible test = backtest on the engine's 3,411 chronological picks, gating on terminal log-wealth ≥ plug-in Kelly AND max drawdown no worse.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — staking/sizing methodology (bankroll management), no QB/coaching/OL/scheme content.

## Engine-actionable? (yes/no + one-line what)
Yes — swap GSE's plug-in Kelly for uncertainty-aware Emc sizing (MC over calibrated probability uncertainty + chance constraint at α=0.4), validated first on the chronological 3,411-pick backtest.
