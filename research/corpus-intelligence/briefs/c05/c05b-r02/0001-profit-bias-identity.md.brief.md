# docs/arxiv-program/research/2026-09-21/arxiv-deep/0001-profit-bias-identity.md

## What it is (1-2 sentences)
A full-text research brief (ledger completed 2026-09-21, read as PDF with supplementary info and references) on Dmochowski (2026), arXiv:2609.06739v1 — an exact, assumption-light identity decomposing a sportsbook's expected profit on a two-outcome market into hold, book shading × public lean, and outcome covariance — tested on 1,139 MLB run-line games. **Verdict: ADOPT** — the decomposition gives GSE a mathematically airtight auditing framework for any public-money / CLV / book-bias analysis.

## Key metrics/methods (formulas where given, else "not specified")
Core identities (quoted exactly as in the paper):
- `E[π(s)] = (1+φ)Q(s) − φ` — book's expected profit per unit of handle, where φ is the vig parameter (φ = 0 is fair odds) and Q(s) is the public's probability of backing the losing side at spread s.
- `Q(s) = b_{h,L}(s)P(M<s) + b_{v,L}(s)P(M>s)`
- `Q(s) = 1/2 + 2θ(s)λ(s) + 2F_m(s)F̄_m(s)δ(s)` (symmetric vig, no pushes) — λ(s) = the book's "shading" (price deviation from no-vig fair price as a function of public money); δ(s) = the public's directional prediction error / bias; θ(s) = weighting tied to the margin distribution F_m.
- `E[π(s)] = (1−φ)/2 + 2(1+φ)[θ(s)λ(s) + F_m(s)F̄_m(s)δ(s)]`
- General asymmetric-vig form: `E[π(s)] = h + Dθ(s)λ(s) + DF_m(s)F̄_m(s)δ(s)`, where h = hold, D = scaling constant.
- Public-belief model: `Y = X + ε + V` (public's perceived outcome = true signal X + noise ε + bias V); book's margin model `M = X + U`.
- Empirical methods: (1) pooled bootstrap test of public's losing-side share ≠ 50%; (2) same test stratified by favorite identity (home favorite vs away favorite); (3) hourly dynamics of losing-side share; (4) local projections of home bet share on price changes and the reverse regression (tests price-follows-money vs money-follows-prices); (5) reconstruction of per-game book profit from splits + prices vs theoretical hold; (6) margin-model calibration checks (average mispricing, largest local departure vs calibrated simulation); (7) bounds on the three profit components.
- Assumptions: two-outcome market; book sets prices and public money shares taken as given (no equilibrium model of how the book chooses s); margin distribution F_m estimated from historical margins; symmetric vig and no pushes in the main decomposition (general form relaxes this); split percentages proxy handle shares (reconstructed, not observed); local projections assume linearity and are mostly noncausal.

## Data sources named
- **DraftKings Network run-line betting splits** — hourly percentage of bets and handle on home/away run line at each price point; sparse (not every game has a full hourly series); accessed via public-facing splits pages; true handle-weighted quantities not observable to outsiders.
- **ESPN scoreboard API** — final scores; realized margin M and home/away cover indicators (public).
- **The Odds API** — named in the GSE implementation spec for historical NFL prices (Garrett's 20K credits/month plan).
- **nflverse** — named in the implementation spec for NFL margins/outcomes in the replication test.

## Findings (numbers and facts, not vibes)
- Sample: **1,139 MLB games, 2026-05-31 through 2026-08-28**.
- Pooled home-share gap: **56.4% versus 50.6%, difference 5.8 percentage points, bootstrap p = 0.0004, n_L = 584, n_W = 555** — pooled, the public backs the losing side significantly more often.
- Stratified (authors' key result — the pooled effect **disappears**): home favorites **−1.5 pp, p = 0.51, n = 608**; away favorites **+0.6 pp, p = 0.79, n = 531**.
- Hourly dynamics: home underdogs' losing-side share **46.9% ± 2.6 to 52.0% ± 2.1** (rises toward first pitch); home favorites **54.4% ± 2.4 to 53.8% ± 2.0** (flat).
- Local projections (price → home share): one-percentage-point price increase lowers home share by ~0.2 points; peak **β = −0.20, t = −3.11, p = 0.002, n = 1090**.
- Reverse (share → price): **|β| ≤ 0.010, all p > 0.27, n = 1103** — no evidence prices chase money within hourly data; money chases (or reacts to) prices.
- Reconstructed mean book profit: **5.20%, 95% CI [0.88, 9.35]**, vs **4.39%** theoretical hold, N = 1,139; per-game SD **73.8%**.
- Favorite lean: **+29.6 pp for home favorites, −24.5 pp for visitor favorites** (public leans toward the favorite; sign flips with favorite identity).
- Margin-model calibration: average mispricing **+0.48 pp, 95% CI [−2.42, +3.38]**; largest local departure **5.8 pp vs 9.4 pp** under calibrated simulation, **p = 0.54** (no evidence of miscalibration).
- Component bounds: aligned shading **at most 3.7 pp**; outcome covariance **at most 5.2 pp**; shading-profit slope **1.35% of handle per percentage point of shading**.
- Stated limitations (authors'): one book, one sport, one market; reconstructed rather than handle-weighted profit; sparse split data; mostly noncausal; two-outcome markets only.
- No code, no data download, no replication package. No out-of-sample prediction performed.
- GSE implementation spec in the file: pull public split feeds + The Odds API for NFL spreads/totals 2024–2026, nflverse outcomes; reconstruct identity per game; compute every public-bias statistic pooled AND stratified by favorite identity (ship only stratified); replicate local projections on intraday odds + splits; nightly batch pipeline; effort estimate **2–3 days** for NFL spread/total reconstruction prototype.
- ADOPT gate: adopt if on 2024–2025 NFL spreads/totals the pipeline reproduces the pooled-vs-stratified contrast (pooled gap shrinks to |gap| < 2 pp, p > 0.10 under stratification) OR finds a surviving stratified gap (|gap| ≥ 3 pp, p < 0.05, a genuine tradable public-bias signal), and the three-component attribution is computable for ≥ 90% of games without manual intervention. REJECT as reference-only if split coverage < 60% of games or component magnitudes swing > 10 pp across bootstrap resamples.
- Improvement experiment proposed: replace reconstructed handle with actual handle proxies (bet% vs handle% divergence measures exactly the covariance between bet size and outcome conditional on side — bounded at ≤ 5.2 pp but never measured); extend the identity to three-outcome markets (1X2/EPL draws) by adding a push/draw state — not derived in the paper.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL** — The favorite-identity stratification gate is a calibration-honesty method: any "public is biased" analysis must condition on who is favored, or it manufactures phantom bias from composition effects — directly applies to GSE's own CLV/public-bias work.
- **OTHER** — Market microstructure: the exact profit decomposition (hold + shading×lean + outcome covariance) is an audit framework for public-money/CLV/book-bias analysis; the local-projection direction test (price-follows-money vs money-follows-prices) is replicable on GSE's intraday odds data; extension to three-outcome markets (EPL 1X2) proposed as novel work.

## Engine-actionable? (yes/no + one-line what)
Yes — replicate the decomposition on NFL spreads/totals using The Odds API + nflverse + public splits (2–3 day prototype), with the ADOPT gate requiring the pooled-vs-stratified losing-side-share test on 2024–2025 NFL data and shipping only favorite-identity-stratified bias numbers.
