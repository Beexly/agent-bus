# docs/arxiv-program/research/2026-09-21/arxiv-deep/0457-decision-synthesis-in-monetary-policy.md
## What it is (1-2 sentences)
Deep-read ledger of Chernis, Koop, Tallman & West (2024) "Decision Synthesis in Monetary Policy" — introduces Bayesian Predictive Decision Synthesis (BPDS): combine models by weighting on realized *decision* outcomes, not just predictive fit, using decision-dependent weights, outcome calibration functions, and entropic tilting to target expected scores. Verdict: ADAPT — the decision-utility model-weighting doctrine ports to GSE's multi-model ensemble.

## Key metrics/methods (formulas where given, else "not specified")
- BPDS mixture: f(y|x) proportional to sum_j pi_j(x) alpha_j(y|x) p_j(y|x,M_j); pi_j(x)=decision-dependent model probabilities; alpha_j(y|x)=outcome-dependent calibration modifiers; equivalent reweighted form f(y|x)=sum pi_tilde_j(x) f_j with f_j=alpha_j p_j/a_j, pi_tilde_j=k(x) pi_j a_j.
- Entropic (exponential) tilting: alpha_j=exp{tau(x)'s(y,x)} so that E_f[s(y,x)]=m_f(x); tau(x) solved numerically per candidate decision.
- Bounded score functions: s_{jh}(y_h)=exp{-(y_h-y*)^2/(2z_y^2)} with z=d/sqrt(-2 log eps), eps=0.4, d_y=2, d_g=2, d_x=1.
- Case-study utility (dual mandate): U(y,g,x) = -sum_{h=1:8} {theta(y_h-y*)^2 + (1-theta)(g_h-g*)^2 + (x_h-x_{h-1})^2}, y*=2% inflation, g*=2.5% GDP growth.
- Importance-sampling ESS monitored as tilting-feasibility diagnostic.

## Data sources named
US macroeconomic quarterly data 1990–2024 (GDP growth, inflation, Federal Funds rate); three monetary-policy VARs (3-variable, larger VAR, time-varying-parameter VAR, 5 lags, sign restrictions); pseudo-real-time sequential forecasting, horizons k=8 quarters.

## Findings (numbers and facts, not vibes)
- Expected utility: BPDS exceeded BMA in virtually every period (Figure 8); gap largest pre-financial-crisis when BPDS/BMA recommendations diverged most; BPDS recommendations more constrained (less extreme) than BMA.
- BPDS predictive mixtures less dispersed than BMA (BMA more heavy-tailed, especially long horizons) — the score function penalizes extreme inflation outcomes.
- Both BMA and BPDS typically recommended larger rate changes than policymakers actually implemented.
- Importance-sampling ESS stayed 90–95% pre-COVID; collapsed during the COVID recession (targets unrealistic given the state) but recovered; mixture ESS stayed above individual-model ESS throughout.
- No formal statistical test of utility differences — evidence is graphical/trajectory-based.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Weight ensemble members by realized *decision* outcomes (CLV/ROI of recommended picks), not predictive fit — OTHER (ensemble doctrine).
- Decision-dependent weights pi_j(x) varying by bet type/market — OTHER (engine architecture).
- Outcome calibration alpha_j(y|x): upweight models in outcome regions where they excel — OTHER (ensemble architecture).
- Bounded score functions + entropic tilting with ESS feasibility monitoring — OTHER (staking/slate optimization mechanic).
- BPDS >= BMA on utility with less extreme recommendations — TRUST-SIGNAL (risk-management evidence).

## Engine-actionable? (yes/no + one-line what)
Yes — weight GSE sub-models by historical betting decision utility (realized CLV/ROI by bet type) rather than predictive fit, gate by walk-forward >=1.0% ROI or >=0.5% CLV beat vs fit-weighted combination with no worse drawdown.
