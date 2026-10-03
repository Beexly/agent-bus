# arxiv-program/research/2026-09-21/arxiv-deep/0016-betting-against-integrity-inplay-market-dynamics.md
## What it is (1-2 sentences)
Deep ledger of Winkelmann et al. (arXiv:2605.30209, 2026) on a hurdle state-space model of live-betting stake dynamics in Serie B; verdict ADAPT — it builds only the expected-volume model and explicitly defers the fraud-detection application to future work.
## Key metrics/methods (formulas where given, else "not specified")
- Hurdle SSM: Pr(y_t=0)=pi_t (pi_t=1 when market closed); log(y_t)|y_t>0 ~ N(mu_t, sigma); mu_t = nu_t + s_t; s_t = phi s_{t-1} + x_t^{(2)'}omega + sigma_s eps_t, |phi|<1.
- Exact likelihood intractable: Kitagawa-style fine discretization (~m=100 intervals) approximates SSM as large HMM; likelihood via forward algorithm; BFGS maximisation in Python.
- pi_t = logit^-1(alpha_0 + alpha_1*gini + alpha_2*gini^2 + alpha_3*minute + interactions); mu_t covariates: avg stakes, pre-match implied prob, own/opponent red cards, score diff, minute + minute^2, halftime.
- State process covariates: goal-surprise tiers (surprising = scorer's pre-match win prob <= 0.25; slightly 0.25-0.5; unsurprising > 0.5), xg_diff, halftime. Validation = AIC comparison of nested models, 95% CIs; no holdout, no detection-rate results.
## Data sources named
Proprietary Tipico live records, three Serie B seasons (2018/19-2020/21): 1,097 matches, 32 teams, 1 Hz aggregated to 1-minute; mirrored home/away -> 235,882 team-minute observations; 9.8% market-closed, 9.4% zero-stakes-on-open; fbref xG; not released, no code.
## Findings (numbers and facts, not vibes)
- Baseline: phi-hat = 0.986, sigma_s-hat = 0.215, sigma-hat = 0.924, pi-hat = 0.094 (matches empirical 0.094); DeltaAIC = 160,747 vs hurdle without state process — overwhelming support for latent dynamics.
- Full model: opponent red card beta_4 = 1.075 [1.004;1.146]; own red card beta_3 = -0.414; score diff 0.420; halftime 0.210 (~23.7% elevated halftime stakes); surprising goal omega_1 = 0.285 [0.257;0.313]; unsurprising goal omega_3 = -0.379; xg_diff omega_4 = 0.001 (not significant — differs from Bundesliga).
- Descriptive: stakes peak first 10 minutes, rise at halftime and late second half; favorites 1.98 avg stakes vs 1.34 underdogs; zero-stake minutes correlate with Gini (0.41) and minute (0.23).
- NO detection results: the paper produces no precision/recall or flagged matches; draws ignored on an asserted-not-tested "less prone to fraud" assumption.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hurdle-ARX(1) SSM machinery maps onto NFL live-odds feeds for expected-move baseline; residuals -> steam-move/stale-line edge detection: OTHER
- High-persistence latent activity (phi ~ 0.986) and surprise-tier goal effects -> calibrate NFL live-model covariates (key events, score state, time): OTHER
- No detection evaluation -> TRUST-SIGNAL
## Engine-actionable? (yes/no + one-line what)
yes — port hurdle-SSM to NFL live odds (The Odds API, odds-movement volatility as volume proxy); ADOPT as a live-betting edge signal only if top-1% minute-game residual cells predict line moves above chance.
