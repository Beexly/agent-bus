# arxiv-program/research/2026-09-21/arxiv-deep/0240-the-reaction-to-news-in-live.md
## What it is (1-2 sentences)
Deep-dive of Ötting, Michels, Langrock & Deutscher (2021), the first study of live-betting market reaction at the stakes level (not odds level): a state-space model of 1 Hz bookmaker stakes around goals, testing whether bettors overreact to surprising in-game news. Ledger verdict: ADAPT the ARX-ZAGA state-space design to NFL in-play odds-velocity proxies; the proprietary stake data itself is unreplicable.
## Key metrics/methods (formulas where given, else "not specified")
- Observed stakes y_t ~ ZAGA(μ_t, σ, π_t) (zero-adjusted gamma = gamma + point mass at zero): f(y_t) = π_t if y_t=0; (1−π_t)h(y_t) if y_t>0, h = gamma parameterized by mean μ_t, SD σ.
- μ_t = exp(α_0 + g_t); latent state g_t = φ g_{t−1} + η_t, η_t ~ iid N(0, σ_g²), |φ|<1; g_1 ~ N(0, σ_g/√(1−φ²)).
- Zero probability: π_t = logit⁻¹(γ_0 + γ_1·gini_t + γ_2·gini_t² + γ_3·int_t + γ_4·gini_t·int_t + γ_5·gini_t²·int_t) if market open; π_t = 1 if closed.
- Final ARX(1) state: g_t = φ g_{t−1} + β_1·halftime_t + β_2·ginidiff_t + Σ_{j=3}^{5} β_j·(1/goalteam^{(j)}_t) + σ_g η_t, j = surprising / slightly / unsurprising goals; 1/goalteam encodes rapid decay.
- Goal surprise bins by pre-goal odds: surprising (odds >4.00, implied <25%), slightly surprising (2.00–4.00, 25–50%), unsurprising (<2.00, >50%).
- Estimation: Kitagawa (1987) midpoint-rule discretization to m=150 bins over [−4,4] → m-state HMM; likelihood via forward algorithm ℒ_approx = δP(y_1)ΓP(y_2)…ΓP(y_T)1, O(Tm²); numerically maximized in R via nlm() with many random starts; m≥50 validated near-exact.
## Data sources named
- Proprietary large European bookmaker: 1 Hz stakes aggregated to 15-second intervals on match-outcome bets, all 306 German Bundesliga 2018/19 matches (612 series = home/away per match; 274,778 intervals; 969 goals, avg 3.2/match; stakes masked by undisclosed scaling constant). No code/data release.
- Static covariates: clubelo.com Elo ratings (mean 1675, SD 104.2, range 1469–1980); kickoff-time dummies.
## Findings (numbers and facts, not vibes)
- Baseline: φ̂ = 0.985, 95% CI [0.984, 0.986] (very strong serial correlation in latent market activity); σ̂_g = 0.227 [0.223, 0.230]; π̂ = 0.074 [0.072, 0.075] matching empirical zero proportion 0.072.
- News effects (final model): β̂_3 (surprising goal) = 0.531 [0.494, 0.567]; β̂_4 (slightly) = 0.218 [0.176, 0.261]; β̂_5 (unsurprising) = 0.034 [0.001, 0.067] — surprising-goal effect >15× the unsurprising effect (0.531 vs 0.034); bettors overreact to surprising news even though odds already shortened.
- β̂_2 (ginidiff) = −0.094 [−0.099, −0.089]: activity rises when the match becomes MORE uncertain than at kickoff; eloteam α̂_1 = 0.439 [0.393, 0.485] (better teams attract more money); saturdayaft ω̂_2 = −0.260 [−0.431, −0.088] (stakes higher without parallel matches); halftime β̂_1 = 0.002 [0.000, 0.005].
- ΔAIC = 217,117 in favor of the state-space formulation over the no-state regression.
- Model checks: predicts no stakes in 7.3% of intervals vs true 7.2%; correctly predicts 96.5% of intervals where stakes were placed; 3-minute post-goal stake sums match 500-run Monte Carlo expectations across surprise categories.
- Limitations: no out-of-sample test; 612 series modeled independently (home/away series of the same match interact — authors flag; bivariate VAR proposed not fit); odds↔stakes endogeneity unidentified; single bookmaker, single season.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Overreaction-to-surprising-news → contrarian timing rule: after a surprising in-game event (e.g., underdog TD), public overreaction moves lines too far; fade the move for live value — testable via post-event 15-minute line-reversion regression (OTHER — market microstructure)
- The paper's full estimation recipe (Kitagawa binning → HMM forward algorithm) is a reusable continuous-latent-state SSM harness for any engine use (OTHER)
- Individual-bettor-heterogeneity extension: decompose the observable into ticket count vs handle share where public split data exists — retail-ticket-driven spikes with flat handle = cleaner contrarian fade (TRUST-SIGNAL, INFERENCE: authors flag bettor heterogeneity as the key limitation; the retail-vs-sharp decomposition design is the deep-dive's extension)
## Engine-actionable? (yes/no + one-line what)
yes — fit the ARX(1)+ZAGA design on NFL in-play odds-velocity with surprise classified by nflfastR win probability (paper's exact odds bins), gated on β̂_surprising > 0 with 95% CI excluding zero AND a contrarian fade rule showing ≥+0.5% mean CLV per surprising event (p<0.05, n≥100) on a 2024 holdout.
