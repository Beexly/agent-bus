# arxiv-program/research/2026-09-21/arxiv-deep/1360-application-of-the-kelly-criterion-to.md
## What it is (1-2 sentences)
Deep read of Meister (2024, arXiv:2412.14144): a theoretical paper asking (a) how large the gap can be between prediction-market prices and participants' mean beliefs under Kelly-optimal behavior, and (b) how misestimated win probability vs. miscalculated Kelly fraction differentially affect growth rate in a finite-horizon double-or-nothing game, quantified via KL divergence. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Kelly-optimal fraction for an all-or-nothing contract: f = (Q−P)/(1+Q) = (q−p)/(1−p), where P = p/(1−p), Q = q/(1−q) (q = subjective belief, p = market price).
- Market clearing: Σ_i C_i·f_i(p, q_i) = 0; mean belief = capital-weighted Σ C_i·q_i.
- Modified payout: U_α(q,p,f) = (1−q)·log(1−f) + q·log(1 + f·(p/(1−p))^α); f = (P̂_α − Q)/(Q+1), P̂_α = (p/(1−p))^α.
- Chernoff bound F(k,N,p) ≤ exp(−N·D(k/N‖p)); k_Q(f) = (Q − N·log(1−f))/(log(1+f) − log(1−f)).
- Probability misestimation cost: D(k/N‖p+ε) − D(k/N‖p) = ((p − k/N)/(p(1−p)))·ε + O(ε²) — linear in ε.
- Fraction miscalculation cost: U(p, 2p−1+ε) − U(p, 2p−1) = −ε²/(4p(1−p)) + O(ε³) — quadratic in ε.
- Assumptions: log-utility investors, no fees, no naked shorts, market clears as a black box.
## Data sources named
None — pure theory; motivating context only: Polymarket during the 2024 US election campaign (several billion dollars wagered, per the paper). No empirical dataset.
## Findings (numbers and facts, not vibes)
- No empirical numbers (theoretical paper). Key exact results: optimal all-or-nothing Kelly fraction f = (q−p)/(1−p).
- Price–belief gap can be wide even in toy two-investor cases: e.g., if all investors hold 0%/100% beliefs, "even the minutest imbalance drives the price to zero or one, but the expectation value does not need to budge much from 1/2."
- Gap bounds (certain-investor toy): E_− ∈ [0, 1/2] for p < 1/2, [1/2, 1] for p > 1/2, = 1/2 at p = 1/2; E_+ = p.
- Error asymmetry: misjudging the probability costs linearly in ε; miscalculating the Kelly fraction costs quadratically — probability accuracy matters more than sizing precision.
- No empirical test of the gap bounds on Polymarket data; modified payout sketched, not optimized; binary contracts only; local (small-ε) sensitivity analysis.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Prices ≠ probabilities: the price–belief gap can be enormous, so a calibrated model has structural edge — theoretical backbone for calibration-first doctrine (TRUST-SIGNAL)
- f = (q−p)/(1−p) closed form to certify GSE's kelly-investigation.ts binary fixed-odds module against (OTHER)
- Linear-vs-quadratic result → resource-allocation rule: sizing precision deprioritized relative to calibration work (OTHER)
## Engine-actionable? (yes/no + one-line what)
Yes — (1) add a unit test asserting kelly-investigation's binary fixed-odds fraction equals (q−p)/(1−p) exactly (small effort); (2) build a price-vs-belief gap monitor flagging high-gap markets as potential manipulation/illiquidity to skip; (3) document the calibration-first-vs-sizing resource rule; reproducible test: perturb calibrated probabilities ±ε vs fractions ±ε on GSE 2025–2026 backtest picks and confirm the linear-vs-quadratic growth asymmetry empirically.
