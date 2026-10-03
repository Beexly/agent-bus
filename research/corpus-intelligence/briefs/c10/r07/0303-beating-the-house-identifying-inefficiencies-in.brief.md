# arxiv-program/research/2026-09-21/arxiv-deep/0303-beating-the-house-identifying-inefficiencies-in.md
## What it is (1-2 sentences)
Deep-read ledger of Sathya Ramesh et al. (2019), arXiv:1910.08858, "Beating the House: Identifying Inefficiencies in Sports Betting Markets." It asks whether a bets-only-on-observable-bookmaker-prices algorithm (cross-casino spread panel → historical spread-conditioned win probability → +EV moneyline screen) generates positive returns across NFL, NBA, NCAAF, NCAAB, and WNBA moneylines. Verdict: ADAPT — the historical-spread → win-probability non-parametric mapping plus max-payout EV screen is a portable market-mispricing detector, but the hyperparameter grid-search and best-line assumption need hardening.

## Key metrics/methods (formulas where given, else "not specified")
- `P(Win | PS) = Historical Win % of Teams with Point Spread = PS` — empirical, non-parametric; no normality assumption; uses only games concluded before the game being priced.
- Aggregation over the casino spread panel: "Simple" = mean of π over unique spreads; "Weighted" = spread-frequency-weighted mean.
- `Expected Value = [P(Winning) × Payout] − P(Losing)` on a $1 bet, using the **maximum** moneyline payout across the 16-casino panel.
- Two hyperparameters: Epsilon Threshold ε (bet outside the (0.5−ε, 0.5+ε) band = always take the favorite) and EV Threshold τ (bet only if EV > τ); chosen per sport to maximize Total Return = ROI × N.
- Bootstrap: 10,000 resamples per sport, grid-searching ε (step 0.01) and τ (step 0.001) inside each resample; 95% percentile + high-density CIs and one-sided 99% CIs with Bonferroni correction.

## Data sources named
- 16 Las Vegas casino sportsbooks via vegasinsider.com (spread + moneyline panels; older line movements from archive.org/web snapshots).
- Historical spread→outcome data 1990–2017 from "a variety of sites" (not individually named). College games restricted to Power-Five members; preseason/exhibition excluded; 2009–2017 bet window.

## Findings (numbers and facts, not vibes)
- Sample sizes (total games): NFL 922, NBA 4019, NCAAF 951, NCAAB 1140, WNBA 255.
- Pure +EV bets (no thresholds), Simple strategy ROI: NFL 10.81% (742 bets), NBA 3.42%, NCAAF −2.49%, NCAAB −1.10%, WNBA 4.38%.
- With optimal ε + τ, Simple ROI: NFL 16.57% (τ=0.013, 567 bets), NBA 9.04%, NCAAF 7.29%, NCAAB 4.07%, WNBA 17.01%.
- Year-by-year variance is extreme: NFL Simple 2011 +76.03% vs 2013 −15.16%; all-leagues ROI peaked 29.09% (2015); many negative years per sport.
- Bootstrap: all ROI and ε 95% CIs exclude zero; Bonferroni-corrected one-sided 99% CIs exclude zero (e.g., NFL Simple ROI CI (8.11, 82.85)).
- Limitations flagged in the ledger: ε/τ tuned in-sample on the same 2009–2017 data used to report ROI (no true holdout); EV uses the unachievable panel-maximum payout; stationarity assumed for 1990–2017 table; thin WNBA (255 games) and NCAAB samples.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Cross-casino line dispersion → +EV moneyline screen is a new market-microstructure capability for the odds lane — OTHER (market microstructure; gap #3: when public models beat liquid closes).
- The empirical `P(Win|PS)` table itself (calibration asset) is the durable output, independent of the in-sample ROI claims — OTHER (odds-lane feature).
- Caveat that the "inefficiency" is really cross-book dispersion, not fundamental mispricing — TRUST-SIGNAL (do not overclaim edge; ledger explicitly rejects the tuned ROI numbers as evidence until walk-forward confirms).

## Engine-actionable? (yes/no + one-line what)
Yes — build empirical per-book spread→win-probability tables (half-point buckets, The Odds API + nflverse) and a de-vigged-consensus EV screen, but with walk-forward ε/τ tuning and achievable-line (second-best consensus) realism instead of the paper's in-sample arg-max and panel-max payout.
