# arxiv-program/research/2026-09-21/arxiv-deep/0626-kelly-criterion-under-probability-uncertainty.md
## What it is (1-2 sentences)
Deep-ledger read of Smoczynski & Tomkins (arXiv:1701.02814v2, Decision Analysis 2018) on optimal betting under parameter uncertainty. It finds the expected-log-wealth Kelly (integrating over posterior probability uncertainty via Monte Carlo) combined with a mild chance constraint beats both standard plug-in Kelly and fractional Kelly, and recommends GSE replace plug-in Kelly sizing with uncertainty-aware sizing.

## Key metrics/methods (formulas where given, else "not specified")
- Kelly program: max Σ_h π_h log(x_h O_h + w − Σ_i x_i) s.t. Σx ≤ w, x ≥ 0.
- Probability model: multinomial logit π_h = exp(β'v_h)/Σ_i exp(β'v_i); uncertainty β ~ N(β̂, Σ) with sandwich covariance.
- Chance constraint: max t s.t. P(t ≤ Σ_h π_h log(...)) ≥ 1−α; tested at α = 0.4, 0.25, 0.1.
- Evaluation metric: expected exponential return E[log(w_i / w_{i−1})] under the true probabilities.

## Data sources named
Simulated data only — four experiments × 2,500 trials with known true parameters (E1: n=2, odds 1.1; E2: n=2, odds 1.2; E3: n=10, odds 2; E4: n=30, odds 4). Matlab R2017a with fmincon; 1M MC samples (n=2), 2M (n=10/30). No real betting data.

## Findings (numbers and facts, not vibes)
- Total expected return over experiments: (T) 27.463 | (S) 18.134 | (F) 13.268 | (Elb) 18.206 | (Emc) 18.471 | (CCx) α=0.40: 18.253 | α=0.25: 16.454 | α=0.10: 12.158 | (ECCx) α=0.40: 18.484.
- (Emc) and (ECCx) at α=0.4 beat plug-in Kelly in every single experiment; (ECCx) α=0.4 is best overall.
- Estimation error cost: true-probability Kelly 27.463 vs plug-in 18.134 — a third of growth lost to estimation error.
- Fractional Kelly (13.268) is the worst of the serious methods in this simulation.
- α=0.10 chance constraint is "overly aggressive... dampening long term growth" (12.158).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: staking/bankroll sizing methodology — pure sizing paper, no on-field intelligence.
- TRUST-SIGNAL: chance constraint P(true expected log return > 0) ≥ 1−α is a principled no-bet gate; uncertainty-aware sizing formalizes the idea that noisier probabilities deserve smaller stakes.
- OTHER: calibration overlap — better-calibrated probabilities shrink Σ, which is exactly what lets uncertainty-aware Kelly converge toward full Kelly.

## Engine-actionable? (yes/no + one-line what)
Yes — replace plug-in Kelly with Monte-Carlo expected-log-wealth sizing (Emc) plus a chance constraint at α=0.4 as starting value, first in the paper-trading harness; acceptance gate is a chronological 3,411-pick backtest requiring terminal log-wealth ≥ plug-in Kelly's with max drawdown no worse.
