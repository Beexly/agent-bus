# docs/arxiv-program/research/2026-09-21/arxiv-deep/0457-decision-synthesis-in-monetary-policy.md
## What it is (1-2 sentences)
A full-paper read of Chernis, Koop, Tallman & West (2024, arXiv:2406.03321v2) on Bayesian Predictive Decision Synthesis (BPDS) for central banks — weighting ensemble models by realized *decision* outcomes (utility achieved), not just predictive fit. Verdict in the file: ADAPT — the decision-utility model-weighting doctrine ports directly to GSE's multi-model ensemble and pick construction.

## Key metrics/methods (formulas where given, else "not specified")
- BPDS mixture: f(y|x) ∝ Σ_{j=0:J} π_j(x) α_j(y|x) p_j(y|x, M_j).
- Decision-dependent model probabilities π_j(x): weights vary over the decision space; incorporate past predictive fit AND past decision outcomes.
- Calibration functions α_j(y|x): outcome-dependent weight modifiers; equivalent reweighted-mixture form f(y|x) = Σ π̃_j(x) f_j(y|x, M_j), f_j = α_j p_j / a_j, π̃_j = k(x)π_j a_j.
- Entropic (exponential) tilting: α_j = exp{τ(x)′s(y,x)} with bounded score functions, solving E_f[s(y,x)] = m_f(x) (target expected score) via τ(x) per candidate decision x.
- Case-study utility (dual mandate): U(y,g,x) = −Σ_{h=1:8} {θ(y_h−y*)² + (1−θ)(g_h−g*)² + (x_h−x_{h−1})²}, y*=2% inflation, g*=2.5% GDP growth, plus rate-smoothing.
- Bounded scores: s_{jh}(y_h) = exp{−(y_h−y*)²/(2z_y²)} etc., bandwidths z = d/√(−2log ε), ε=0.4, d_y=2, d_g=2, d_x=1.
- Conditional forecasting extension: candidate decisions weighted by predicted plausibility before assessing implications (small interventions upweighted to sidestep Lucas critique).
- Computation: outer-loop particle-swarm optimization over decisions, inner per-model trust-region optimization (PDFO, derivative-free), posterior simulation, importance-sampling ESS diagnostics for tilting feasibility.

## Data sources named
US macroeconomic data 1990–2024 (quarterly): GDP growth, inflation (prices), Federal Funds rate. Three monetary-policy VARs (3-variable; larger VAR; time-varying-parameter VAR), each 5 lags, identified with sign restrictions. No sports data.

## Findings (numbers and facts, not vibes)
- Expected utility: BPDS exceeded BMA in virtually every period (graphical, no formal test); substantially higher pre-financial-crisis, similar after; BPDS recommendations showed greater concordance with actual policy decisions and were more constrained (less extreme) than BMA.
- BPDS predictive mixtures are less dispersed than BMA (BMA more heavy-tailed, especially at long horizons).
- Both BMA and BPDS typically recommended larger rate changes than policymakers actually implemented.
- Importance-sampling ESS of the tilted mixture stayed 90–95% pre-COVID (small, desirable tilting); collapsed during the COVID recession but recovered; decisions during that window were still "sensible"; mixture ESS stayed above individual-model ESS throughout.
- Horizons k=8 quarters; ε=0.4, d_y=2, d_g=2, d_x=1; 5 VAR lags.
- Limitations noted in file: no statistical test of BPDS > BMA; historical-decision benchmark admitted "not necessarily good" (circularity risk); heavy compute per time point; target expected scores m_f(x) are a free choice with no automatic selection rule; continuous-path decisions vs GSE's discrete bet/no-bet decisions.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Weight models by realized decision utility (CLV/ROI of recommended picks) rather than predictive fit alone → [OTHER] ensemble doctrine: complements GSE's single-model calibration (CQR, Platt/isotonic) with a model-combination rule.
- Decision-dependent weights π_j(x): a totals model gets more weight on totals decisions → [OTHER] per-market/per-bet-type ensemble weighting.
- Outcome calibration α_j(y|x): upweight models in outcome regions where they excel (e.g., high-total games) → [OTHER] regime-conditional model weighting.
- Entropic tilting to a target expected score + ESS collapse diagnostic → [TRUST-SIGNAL] feasibility check: if ESS collapses, the target is unrealistic — shrink it.
- BPDS less extreme/more constrained than BMA → [OTHER] stake recommendation constraint as a byproduct of the framework.
- "Virtually every period" utility claim is visual, no formal test → [TRUST-SIGNAL] treat as suggestive, not proven.

## Engine-actionable? (yes/no + one-line what)
Yes — implement BPDS-style ensemble: weight sub-models by historical betting utility by bet type, add outcome-region calibration, use bounded score functions on edge/drawdown/smoothness with ESS monitoring; backtest vs BMA-style fit-weighting on the 3,411-pick v5.2.7 history (2–3 weeks effort).
