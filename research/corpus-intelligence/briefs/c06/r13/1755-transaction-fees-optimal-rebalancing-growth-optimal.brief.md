# arxiv-program/research/2026-09-21/arxiv-deep/1755-transaction-fees-optimal-rebalancing-growth-optimal.md
## What it is (1-2 sentences)
Kelly growth-optimal portfolio paper (arXiv:1009.3753) studying how proportional transaction fees change optimal rebalancing: it finds **partial rebalancing** (transfer only a fraction ε of the required amount each period) beats intermittent rebalancing (resize every T periods). Adjudicated ADAPT — gives GSE a principled stake-smoothing rule for the Kelly sizer, remapped from transfer fees to vig + stake churn.
## Key metrics/methods (formulas where given, else "not specified")
- Binary return model: x(t+1) = x(t)(1+r_1) w.p. 1/2+P_1; x(t)(1−r_1) w.p. 1/2−P_1 (Eq. 1); fee = proportional α|X| on transferred volume.
- Fee-inclusive rebalancing condition (Eq. 8): f[W(1+fr)−αX] = fW(1+r)−X; transfer volume X_{r>0} = Wrf(1−f)/(1−αf).
- Optimal rebalancing period T* derived analytically for lognormal returns, generalized numerically to broad distributions and GARCH(1,1); heuristic T ≈ 1/ε for partial rebalancing (transfer εX per step, ε ∈ (0,1]).
## Data sources named
Simulated only: binary-return asset, lognormal returns (analytic), broad stationary distributions, GARCH(1,1)-generated correlated returns. No real-market data.
## Findings (numbers and facts, not vibes)
- Under fees, interior-optimal T*>1 (constant rebalancing is no longer optimal).
- Interior-optimal ε beats the optimal-T intermittent rebalancing at both fee levels studied (paper's exact claim: "optimal growth rates are achieved for ε inside (0,1]… outperform the optimal values obtained with intermittent rebalancing for both studied values of α").
- Same pattern under GARCH(1,1) correlated returns. No single headline number — results are in figures (growth rate vs T, vs ε curves). The standard vig (−110 ≈ 4.55%) is GSE's "fee" (INFERENCE: this is the ledger's mapping, stated in the file).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (TRUST-SIGNAL) Damped stake updates reduce stake whipsaw after wins/losses — stake-churn cost is real under vig, and ε<1 smoothing is a confidence-consistent sizing discipline.
- (OTHER) Bankroll engine: a new stake-smoothing rule the existing research map lists as missing.
## Engine-actionable? (yes/no + one-line what)
Yes — implement ε-damped Kelly stake updates (s_t = s_{t−1} + ε(s*_t − s_{t−1}), grid ε ∈ {0.2,0.4,0.6,0.8,1.0} maximizing terminal log growth net of vig); adopt if tuned ε<1 beats ε=1 by ≥2% annualized.
