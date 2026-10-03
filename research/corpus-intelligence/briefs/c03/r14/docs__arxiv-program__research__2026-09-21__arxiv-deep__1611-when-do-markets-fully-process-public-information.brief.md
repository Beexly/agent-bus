# docs/arxiv-program/research/2026-09-21/arxiv-deep/1611-when-do-markets-fully-process-public-information.md
## What it is (1-2 sentences)
Deep read of Angelini & De Angelis (2026), arXiv:2606.07811 — tests whether real-time prediction markets (Kalshi NBA winner contracts) incorporate public information fully on impact or gradually, using an out-of-sample public-information benchmark win probability to measure an "updating gap" that predicts future price drift.
## Key metrics/methods (formulas where given, else "not specified")
- Main price p_it = (bid_it + ask_it)/2; spread_it = ask_it − bid_it.
- Benchmark q_it = Pr(Y_i = 1 | I_it) from logit on pre-game close, score margin, |margin|, clock, period dummies, home status, recent net scoring, margin×clock interactions — estimated out-of-sample via five-fold game-level cross-fitting.
- Efficient updating regression: Δp_it = α + βΔq_it + ΓX_it + η_it; efficient ⇒ β = 1.
- Updating gap: Gap_it = Δq_it − Δp_it; drift regression: p_{i,t+h} − p_it = α_i + δ_t + ρ Gap_it + ε_{i,t+h} (h = 1,2,5,10,15 min), also net of future benchmark changes.
- Salience/illiquidity interaction: λ_it = 1 + α_S·Salience + α_L·Illiquidity + α_SL·Salience·Illiquidity; UR_it = sign(Δq_it)(Δq_it − Δp_it) on standardized salience and illiquidity indices.
- Metrics: Brier score, MAE, calibration slope/intercept, AUPRC-equivalent executed-style returns (buy ask / sell bid).
## Data sources named
Kalshi exchange one-minute quote/volume/open-interest data for NBA winner contracts; timestamped NBA play-by-play (e.g., stats.nba.com / nba_api). Sample: 1,438 games, 2,876 team-level contracts, 409,512 contract-minutes, 2025-04-15 to 2026-05-25.
## Findings (numbers and facts, not vibes)
- Pre-game: Brier falls 0.204 → 0.199 over final 24h (improvement 0.0046***); calibration slopes ≈ 1 (0.977 at 24h, 0.985 at close). Benchmark Brier 0.164 vs Kalshi live midpoint 0.164 vs pre-game close 0.211.
- Efficient updating β on Δq_it = 0.630 (no controls), 0.638 (controls); H0: β = 1 rejected p < 0.001 — a 10pp benchmark change ⇒ ≈6.4pp market move. Quote-quality subsamples: β 0.656–0.663; clutch situations β ≈ 0.51.
- Directional responsiveness: net points +0.0281/−0.0284 per minute; made 3pt +0.0370/−0.0377; lead change +0.0451/−0.0455; 10–0 run ±0.028.
- Drift (Gap → future): raw ρ = 0.150/0.164/0.195/0.196/0.236 at h = 1/2/5/10/15 min; net-of-benchmark ρ = 0.379/0.414/0.459/0.458/0.484 — all ***. A 10pp gap ⇒ 4.6pp drift at 5 min net of benchmark.
- Salience × illiquidity: Salience −0.0026***, Illiquidity +0.0015***/+0.0008***, Salience×Illiquidity +0.0014***. Event-specific: 8–0 run −0.0102***, turnover −0.0064***, lead change −0.0060***.
- Drift interactions: Gap ρ = 0.502/0.514/0.549 (5/10/15 min); Gap×Salience +0.023***/+0.013**/+0.025***; Gap×Illiquidity −0.022/−0.032/−0.037**.
- Economic gate: executable-style returns (buy at ask, sell at bid) are NEGATIVE — midpoint drift is absorbed by trading costs. Not a frictionless arbitrage.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- β = 0.64 (markets underreact to public info; gap predicts drift): TRUST-SIGNAL — a measurable market-inefficiency signal for weighting market price vs GSE win probability in-play.
- Salience reduces underreaction, illiquidity increases it, and their interaction is positive: TRUST-SIGNAL — liquidity-gated salience weighting rule.
- Executable returns negative net of spreads: OTHER — midpoint drift is not a free bet; only cross-book stale-price plays (soft book catching up while sharp book moved) are potentially executable.
- 0.64 coefficient is Kalshi/NBA-specific; NFL sportsbook markets differ (no public CLOB, wider spreads): OTHER — functional form transfers, magnitudes do not (per the file's own leakage section).
## Engine-actionable? (yes/no + one-line what)
Yes — build GSE's own out-of-sample in-play NFL win-probability benchmark (nflverse play-by-play logit, cross-fit by game) and run the Gap → drift audit to calibrate a liquidity-gated drift-follow signal and a market-vs-model blending weight.
