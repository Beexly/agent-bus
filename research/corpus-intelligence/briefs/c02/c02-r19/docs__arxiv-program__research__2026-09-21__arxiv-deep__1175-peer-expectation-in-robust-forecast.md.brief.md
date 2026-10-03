# docs/arxiv-program/research/2026-09-21/arxiv-deep/1175-peer-expectation-in-robust-forecast.md
## What it is (1-2 sentences)
Kong (2024), arXiv:2402.06062v1 — theory paper asking how much worst-case regret an aggregator can cut by also eliciting each expert's expectation of *other experts'* forecasts ("peer expectations"), beyond the classical level-one minimax regret floor of 0.0225. Ledger verdict: ADAPT (not a reject); ledger completed 2026-09-21, full text read.
## Key metrics/methods (formulas where given, else "not specified")
- Regret definition: R(f, pi) = excess Brier loss over the Bayesian aggregator knowing pi (binary state, quadratic loss), same as the level-one literature (ledger 1174).
- Proposed aggregators over (forecast x_i, peer-expectation p_i) pairs: average expectation, weighted expectation, weighted hard sigmoid; plus a dedicated C.I.I.D. (conditionally independent identically distributed) aggregator and hard-sigmoid variant.
- Level-one lower bound cited: 0.0225. Refinement-ordered (Blackwell-informativeness) setting: peer expectations drive minimax regret to 0 (theorem, not numerical).
- Reported worst-case regrets (starred = Matlab numerical estimates, not proved maxima): two conditionally independent experts — average expectation 0.0072*, weighted expectation 0.0040*, weighted hard sigmoid 0.00255*, information-theoretic lower bound 0.00144. C.I.I.D. — dedicated aggregator 0.00391*, hard sigmoid 0.00211*.
- Assumptions stated: experts truthfully report forecast and peer expectation; binary state; squared loss; conditionally independent (or C.I.I.D.) signals; refinement ordering for the zero-regret theorem. Strategic misreporting and correlated signals are out of scope. Note: iterating higher-order expectations may converge to the prior under stated assumptions, with XOR as an explicit counterexample where it does not.
## Data sources named
No real data. Synthetic numerical experiments computed in Matlab over discretized information-structure families (two conditionally independent experts; C.I.I.D. setting). No code/data link given.
## Findings (numbers and facts, not vibes)
- Refinement-ordered setting: peer expectations achieve regret 0 vs the level-one floor of 0.0225 (theorem). [OTHER]
- Two conditionally independent experts: weighted hard sigmoid regret 0.00255* vs average expectation 0.0072* — the weighted hard sigmoid is the best reported rule, above the 0.00144 lower bound. [OTHER]
- C.I.I.D. setting: hard sigmoid 0.00211* beats the dedicated C.I.I.D. aggregator 0.00391*. [OTHER]
- The paper claims peer expectations cut regret by roughly an order of magnitude vs the 0.0225 level-one floor; all gains are worst-case regrets inside synthetic discretized games, not accuracy gains on real panels. [OTHER]
- GSE translation proposed in the ledger (not the paper): use each engine component's "expectation" of market/median-model forecast as the peer proxy (computable offline, no elicitation needed) and aggregate with the weighted hard-sigmoid rule. [TRUST-SIGNAL]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Peer-expectation / "forecast of forecasts" aggregator concept for the model combiner — TRUST-SIGNAL
- Weighted hard-sigmoid rule over (forecast, peer-expectation) pairs — OTHER
- Order-of-magnitude regret reduction claim (synthetic only) — OTHER
- Higher-order expectation iteration not universally safe (XOR counterexample) — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — implement the weighted hard-sigmoid aggregator over per-component forecasts plus a peer proxy (component's historical deviation from consensus / market consensus), backtest walk-forward on 2024–2025 picks history vs the current combiner with an adoption gate of ≥0.002 Brier improvement (Diebold-Mariano p<0.05).
