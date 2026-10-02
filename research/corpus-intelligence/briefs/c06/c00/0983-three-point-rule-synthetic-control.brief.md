# arxiv-program/research/2026-09-21/arxiv-deep/0983-three-point-rule-synthetic-control.md
## What it is (1-2 sentences)
Deep read of Sharma (2025, arXiv:2510.15405): a synthetic-control-method (SCM) causal study of whether England's 1981 switch from 2 to 3 points per win increased competitive balance — first SCM use in football, per the author — using a Distance-to-Competitive-Balance (DCB) index. Verdict in file: ADAPT — the value is methodological (a fully-specified SCM blueprint with placebo/leave-one-out discipline), not topical; the −0.051 headline is secondary.
## Key metrics/methods (formulas where given, else "not specified")
- DCB(s) = √[(HHI − HHI_min)/(HHI_max − HHI_min)], HHI = Σ_i s_i² with s_i = team's share of total points; normalized 0 (balanced) to 1 (concentrated); regime-invariant across 2-point vs 3-point eras.
- SCM: choose donor weights G* = argmin_G (X1 − X0G)'V(X1 − X0G), g_i ≥ 0, Σg_i = 1; synthetic England = Y0G*; ATE = actual − synthetic DCB averaged 1981–1993; V = predictor-importance matrix chosen by pre-treatment RMSE minimization.
- Predictors: avg win/draw shares, team count, two-period DCB lags; V weights: DCB(1969) 0.3485, DCB(1965) 0.2119, avg win share 0.1587, team count 0.1544, avg draw share 0.0777, DCB(1979) 0.0488; donor weights: France 0.6010, Spain 0.3350, Netherlands 0.0650 (Germany/Italy zero).
## Data sources named
Match-level data for 6 European leagues (England, Germany, Spain, Netherlands, Italy, France), 1963/64–1993/94, aggregated to league level; pre-treatment 1963–1980 (18 seasons), post 1981–1993 (13 seasons); donor pool = 5 non-English leagues. Data NOT public ("obtained from the authors upon request"); numeric tables are placeholders ("[Insert table N here]") — all numbers from running text.
## Findings (numbers and facts, not vibes)
- Main ATE (SCM): −0.051 on DCB — the rule increased competitive balance; alternative specs: −0.0571 to −0.073; DID (equal donor weights): −0.0545 (near-identical).
- Placebos: donor-league ATEs Dutch 0.0097, Spanish 0.0124, French 0.0026, German −0.0219, Italian 0.0145 (all near zero); placebo year 1969: −0.0175; leave-one-out unchanged; NAMSI-hat alternate index: −0.0297 (same direction).
- Goals per match ATE: −0.0131, no significant change — the rule changed point dispersion without changing scoring volume (contrasts with Moschini (2010) 35-country panel: more goals, fewer draws — a genuine tension).
- Proposed mechanism (asserted, not tested): higher win reward → more aggressive play, especially by lower-end teams, dispersing points.
- Limitations: data not public; thin donor pool (60% on France, hard to justify comparability); other 1981–1993 shocks (post-Heysel ban, attendance collapse); single treated unit.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: a reusable synthetic-control toolkit for GSE's league-analytics layer — quantify any rule/format shock (NFL overtime-rule changes, playoff expansion, NBA play-in) on balance metrics with donor pools of unaffected leagues/eras; DCB as a regime-invariant competitive-balance metric; plugs into season-preview content ("what rule changes actually did to parity") and long-horizon simulation calibration.
## Engine-actionable? (yes/no + one-line what)
yes — implement gse_causal/scm.py (SCM optimization + V-selection + placebo/LOO diagnostics + DCB/NAMSI-hat calculators); accept the toolkit if replicating the paper's qualitative pattern from public final-table data yields ATE in [−0.10, −0.02] with every placebo donor ATE smaller in absolute value than England's.
