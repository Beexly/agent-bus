# arxiv-program/research/2026-09-21/arxiv-deep/1630-generalizing-the-kelly-strategy.md
## What it is (1-2 sentences)
Deep read of a 2016 paper (arXiv:1611.09130) generalizing the Kelly criterion along three axes — finite horizon, wealth held outside the betting account, and general concave utility — with a recombining-binomial implementation that cuts complexity from exponential to O(f²).
## Key metrics/methods (formulas where given, else "not specified")
Dynamic programming on a finite-horizon binomial lattice: at each step choose the stake maximizing expected utility of total (inside + outside) wealth at the horizon. One-step log-utility closed form: f* = (2p−1)(1 + w/g), where w = outside wealth, g = current gambling bankroll. Recombining-binomial implementation: O(f²) instead of exponential in horizon. Worked example: p=.6 coin-flip, w=1000, horizon 25 flips → first-bet fraction ≈.659 of gambling bankroll (vs .2 for plain Kelly without outside wealth). Assumptions: binomial outcomes per step; known p; outside wealth fixed and accessible; user-specified concave utility.
## Data sources named
No external dataset; analytical derivation plus the worked 25-flip example.
## Findings (numbers and facts, not vibes)
Outside wealth dramatically raises the optimal fraction under log utility: .659 first bet vs .2 for standard Kelly in the worked example (p=.6, w=1000, 25 flips). The paper flags that this is dangerous if w is not truly available to cover losses — a .659 first bet is a ruin machine if reserves are illusory. Binary-outcome only; the (2p−1)(1+w/g) closed form is one-step log-utility; multi-step and non-log utilities need the lattice. No miscalibrated-p analysis; assumes w constant over horizon.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Bankroll management — gives GSE a sizing rule that accounts for reserves held outside the betting account, plus finite-horizon shaping for fixed-length campaigns (17-week NFL season) instead of infinite-horizon Kelly.
## Engine-actionable? (yes/no + one-line what)
Yes — add an "outside reserves" parameter to GSE's staking config (default 0 = current behavior), implement the recombining-binomial finite-horizon solver for binary picks, and cap the (1+w/g) inflation factor (e.g., max 2×) as a safety rail; acceptance gate: capped generalized-Kelly replay beats half-Kelly's final bankroll with max drawdown no more than 10% worse.
