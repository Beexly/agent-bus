# arxiv-program/research/2026-09-21/arxiv-deep/0565-analyzing-and-forecasting-success-in-the.md
## What it is (1-2 sentences)
Score-driven dynamic Plackett–Luce ranking model — team strengths split into fixed effects (long-term level) + mean-reverting AR(1) dynamic component + regression covariates, fitted by (penalized) ML — applied to 45 Men's World Championship and 48 World Junior Championship ice-hockey editions with rolling one-step-ahead forecasting evaluation. Ledger verdict: ADAPT — the model architecture ports directly to NFL season-standings/seeding forecasting; the penalized-vs-static fitting discipline is the portable lesson.
## Key metrics/methods (formulas where given, else "not specified")
- PL probability (Eq. 1): P[y|f]=Π_{r=1}^N exp f_{r^th}/Σ_{s=r}^n exp f_{s^th}; log-likelihood ℓ(f|y) = Σ_i f_i − Σ_{r=1}^N ln(Σ_{s=r}^N exp f_{s^th}) (Eq. 3).
- Score (Eq. 5): ∇_i(f|y) = 1 − Σ_{r=1}^{y(i)} exp(f_i)/Σ_{s=r}^N exp(f_{s^th}); E[∇]=0, Var(∇)=Fisher information.
- Strength dynamics (Eq. 7): f_{i,t} = ω_i + Σ_j β_j x_{i,t,j} + u_{i,t}, u_{i,t} = φu_{i,t−1} + 1_{i∈P_{t−1}} α∇_i(f_{t−1}|y_{t−1}); strengths computed only for participants P_t; non-participants' u tracked, decaying toward 0 when φ∈(−1,1); identification Σ_i ω_i = 0 (Eq. 9).
- Penalized log-likelihood (Eq. 11): L_Pen(θ) = Σ_t ℓ(f_t|y_t) − λΣ_tΣ_{i∈P_t} f_{i,t}². Standard errors ŝe[θ̂] = √diag[−T·H(θ̂)^{−1}] (Eq. 10).
- Fitting discipline (§4.4): bound φ∈[0,1), α≥0 — unbounded MLE drifts to a spurious persistent model (φ→1) with negative α whose standard errors collapse to ≈0; use multiple starting points (same pathology unreported in Holý & Zouhar 2022).
## Data sources named
IIHF (iihf.com) tournament results/hosting: WC 45 editions 1976–2024 (missing 1980, 1984, 1988, 2020), 24 teams retained; WJC 48 editions 1977–2024, 15 teams retained. Physical characteristics from Elite Prospects (eliteprospects.com). Code: github.com/vladimirholy/ice-hockey-wc (R; Sbplx algorithm from nloptr, adapted from the `gasmodel` package).
## Findings (numbers and facts, not vibes)
- EDA: WC lag-1 rank autocorrelation 0.715 (stable), WJC 0.566; WC–U18 0.523; WJC–U18 0.542; WC–WJC concurrent 0.585.
- WC final model (AIC 1531.978 vs static 1577.664; Table 3): Last WJC 0.853***, Last WC 0.674**, Avg. Age −0.191*** (younger better), IIHF Exp. 0.053***, NHL Exp. 0.002* — IIHF coefficient ~25× the NHL coefficient despite 11× fewer games/season; hosting insignificant; φ = 0.736.
- WJC final model (AIC 888.157 vs static 913.877; Table 4): hosting 0.488**–0.673*** significant in every model; past results insignificant; Height −0.142* (shorter better), Weight 0.123* (heavier better); IIHF Exp. 0.897***; φ = 0.796–0.850.
- Forecasting (16 rolling one-step-ahead editions, λ=0.01 optimal for both; Tables 5–6): WC — final model avg. log-lik −22.783 vs static −23.321; P(champion) 0.166, P(medals) 0.045, P(playoffs) 0.027, MAE 1.999, RMSE 2.627. WJC — log-lik −10.794 vs −11.004; P(champion) 0.212, P(medals) 0.071, P(playoffs) 0.303, MAE 1.353, RMSE 1.805. **Without penalization (λ=0) the static model beats the final model** — penalization is required for the covariate model to win.
- NHL-experience finding is confounded: WC runs during the NHL playoffs, so WC rosters systematically miss the best NHL players (selection, not causation).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- f = ω (fixed intrinsic level) + βx (short-term covariates) + AR(1) u (medium-term deviations), with φ∈[0,1) bounds and penalized ML → [OTHER] portable architecture for NFL pre-season standings/seeding forecasting (32 teams, 2002–2025; pre-season odds, roster age/experience as covariates).
- Unpenalized static wins; penalized (λ=0.01) dynamic wins → [TRUST-SIGNAL] fitting discipline: always fit static vs penalized-dynamic head-to-head on rolling one-step-ahead log-likelihood before shipping any covariate standings model.
- φ∈[0,1), α≥0 bounds + multiple starts (unbounded MLE finds a spurious persistent negative-α model with SEs ≈0) → [OTHER] implementation trap to encode in any re-fit of this architecture.
- WJC (0.853***) out-predicts last WC (0.674**) for future WC → [OTHER] lagged lower-league outcomes can beat the most recent top-league observation; test NFL analogues (college pipeline, prior-season depth) rather than defaulting to last-season rank [INFERENCE].
- Lag-1 autocorrelation 0.715 (WC) vs 0.566 (WJC) → [OTHER] establishes the persistence scale a dynamic component must capture; φ estimates (0.736–0.850) mirror it.
## Engine-actionable? (yes/no + one-line what)
Yes — fit the score-driven dynamic PL on NFL conference standings with pre-season covariates (prior rank, market odds, roster age/experience) under φ∈[0,1)/α≥0 bounds, gated on beating static on 2015–2025 rolling log-likelihood by ≥0.05/season.
