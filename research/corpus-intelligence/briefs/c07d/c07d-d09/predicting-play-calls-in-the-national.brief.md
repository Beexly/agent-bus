# arxiv-deep/0431-predicting-play-calls-in-the-national.md
## What it is (1-2 sentences)
Ötting (2020, arXiv:2003.10791v1) fits per-team 2-state hidden Markov models with covariate-driven multinomial-logit transitions to NFL run/pass play-call sequences (318,691 plays, 2009–2018), testing whether latent pass-propensity "regimes" beat static classifiers. The HMM reaches weighted-average out-of-sample accuracy 0.715 on the full 2018 holdout season vs ~0.67 for earlier pbp-only baselines and ~0.75 for player-data models — but the marginal value of the HMM over a static covariate-only logistic is never tested, so the headline number does not establish that streak structure helps.

## Key metrics/methods (formulas where given, else "not specified")
- Per-team 2-state HMM (N=2, Bernoulli state-dependent emissions), fitted individually per team (no pooling). N=2 chosen to avoid numerical instability given per-team sample sizes (not AIC-validated).
- Transition probabilities (verbatim): γ_ij^(p) = exp(η_ij^(p)) / Σ_{k=1}^N exp(η_ik^(p)); η_ij^(p) = β_0^(ij) + Σ_{l=1}^K β_l^(ij) x_l^(p) if i≠j, else 0.
- Match likelihood (verbatim): L = δ P(y_{m,1}) Γ^{(m,2)} P(y_{m,2}) … Γ^{(m,P_m)} P(y_{m,P_m)} 1.
- Full likelihood: L = Π_{m=1}^M [same] (matches assumed independent).
- Forecast (verbatim): Pr(y_{P+1}=y | y^(P)) = [δ P(y_1) Γ^{(2)} P(y_2) … Γ^{(P)} P(y_P) Γ^{(y)} P(y) 1] / [δ P(y_1) Γ^{(2)} P(y_2) … Γ^{(P)} P(y_P) 1]; argmax class is the forecast (Zucchini et al. 2016).
- Likelihood via forward algorithm; numerically maximized with nlm() in R; initial distribution δ estimated (not stationary).
- Covariate selection: AIC forward selection per team, including interactions: ydstogo×scorediff, downs×ydstogo, shotgun×ydstogo, nohuddle×scorediff, nohuddle×shotgun.
- Forecasting cost: <1 second per match; fit cost ~7 hours per team for forward selection on a standard desktop.

## Data sources named
- Kaggle play-by-play NFL dataset: regular seasons 2009–2018; 2,526 of 2,560 matches; each match split into two per-team-offense time series → 5,052 time series, 318,691 plays. Train: 2009–2017 (2,302 matches, 289,191 plays); test: 2018 (224 matches, 29,500 plays). Field goals/kickoffs ignored; public Kaggle data; team-level only, pre-2019.
- Comparison studies: Heiny & Blevins (2011), Teich et al. (2016) (~0.67 pbp-only); Lee et al. (2017), Joash Fernandes et al. (2019) (~0.75 with player data).
- Method reference: Zucchini et al. (2016), Hidden Markov Models for Time Series (R implementation).

## Findings (numbers and facts, not vibes)
- Observation y_{m,p} ∈ {0,1}: 1=pass, 0=run; overall 58.4% passes. Covariate means: ydstogo 8.634; down1 0.443, down2 0.333, down3 0.209, down4 0.015; shotgun 0.525; no-huddle 0.087; scorediff mean −1.458; goaltogo 0.057; yardline90 0.033.
- Weighted-average out-of-sample accuracy on 2018: 0.715 (vs ~0.67 pbp-only baselines; vs ~0.75 with player data; vs 58.4% naive pass-rate baseline).
- Per-team accuracy range: 0.602 (Seattle Seahawks) to 0.779 (New England Patriots) (Figure 5).
- Run precision: 0.532 (Green Bay Packers) – 0.763 (Houston Texans); run recall: 0.324 (Baltimore Ravens) – 0.886 (Los Angeles Rams).
- Pass precision: 0.559 (Seattle Seahawks) – 0.9 (Los Angeles Rams); pass recall: 0.664 (Los Angeles Rams) – 0.922 (Pittsburgh Steelers).
- AIC-selected covariate sets differ slightly per team. No cross-validation reported.
- Validation design is honest: strict temporal split, clean 2018 holdout, per-team fitting — no leakage. But no plain-logistic-with-same-covariates baseline is shown, so the HMM's marginal value over a static model is unproven.
- Limitations: sample-era bias (data ends 2018, pre-modern pass-happy era and pre-nflverse; shotgun/pass relationships stale); binary target ignores scrambles, sacks-as-pass-attempts, penalties, RPOs; per-team fits discard cross-team info (Seahawks 0.602 suggests partial pooling would help); no player/personnel covariates (author admits personnel is the main missing input); static 2009–2017 fit applied to all of 2018 with no online updating (author notes dynamic updating would improve results); 2 states chosen for numerical convenience, no N=2 vs 3 AIC comparison.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **COACHING — team run/pass tendency modeling:** the per-team HMM is the template for modeling coaching play-call tendencies; AIC-selected covariate sets differ per team, which is itself a coaching-fingerprint signal (which covariates drive each team's transitions reveals play-calling logic). Serves the coaching-tendencies program. Note: the 0.602 (Seahawks) to 0.779 (Patriots) accuracy spread shows some coaching staffs are far more predictable than others — predictability itself is a scoutable coaching trait.
- **SCHEME — pass-propensity regime states:** the latent 2-state (extendable to 3: neutral / pass-heavy comeback / run-heavy kill-clock) structure models in-game script regimes; decoded state sequences can feed prop projections (does being in the pass-heavy state shift WR target share beyond covariates?) and game-script-conditioned props. Serves the calibration/sizing program and the in-play/live spread & total lane (map gap #7).
- **QB-BEHAVIOR — attempt-share adjustment for props:** pre-snap pass probability feeds prop projection adjustments (attempts share) — QB pass-attempt volume is downstream of the team's play-call regime, so tendency modeling conditions QB volume forecasts.
- **OTHER — online-updating gap:** the paper's static 2009–2017 fit is its own flagged weakness; the GSE port refits weekly (exponential forgetting), which directly connects to the adaptive-prediction file 0451's meta-learning lane — weekly refit is the simple version of 0451's online meta layer.
- UNCERTAIN: whether the HMM adds anything over a static covariate-only logistic — the paper never isolates this; the GSE gate requires ≥0.5 pp accuracy AND ≥0.005 log-loss improvement on 2025 holdout, concentrated in late-game/script situations, else keep only the logistic tendency model.

## Engine-actionable? (yes/no + one-line what)
Yes — ADOPT the per-team HMM (2–3 states, hierarchical partial pooling, personnel covariates from nflverse, weekly refit) as in-game/prop input IF it beats a gradient-boosted covariate-only logistic baseline by ≥0.5 pp accuracy AND ≥0.005 log-loss on the 2025 holdout; else keep the logistic tendency model only. Effort: 3–5 days (nflverse pbp 2015–2025; Stan/hmmlearn + weekly refit harness).

## References named in file
- Ötting (2020). arXiv:2003.10791v1 — the paper itself.
- Heiny & Blevins (2011); Teich et al. (2016); Lee et al. (2017); Joash Fernandes et al. (2019) — comparison accuracy studies.
- Zucchini et al. (2016), Hidden Markov Models for Time Series — method/implementation reference.
- Kaggle NFL play-by-play dataset (data source).
- Internal: GSE map gaps (in-play/live spread & total modeling, gap #7); props-consensus work (script model tie-in).
