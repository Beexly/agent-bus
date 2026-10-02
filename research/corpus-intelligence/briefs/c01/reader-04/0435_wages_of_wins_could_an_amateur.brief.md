# arxiv-program/research/2026-09-21/arxiv-deep/0435-wages-of-wins-could-an-amateur.md
## What it is (1-2 sentences)
Full-paper ledger read of Zimmermann (arXiv:1702.05982v1): single-season flat-$100 backtests of naive ML classifiers against Vegas money-lines across NCAAB, NBA 2016, and NFL, demonstrating that high accuracy ≠ high pay-out — what matters is which games you get right (underdogs and pick'ems pay). Reader verdict: ADAPT the selection doctrine (pay-out-weighted model selection), not the stale models or 2016 lines.
## Key metrics/methods (formulas where given, else "not specified")
- Pay-out rules: favorite correct → $10000/FAV-Line; underdog correct → $DOG-Line; pick'em correct → $10000/110 = $90.90; incorrect → −$100; pick'em swing per game $190.90
- Classifiers: Naïve Bayes (Weka default, kernel estimator), MLP/ANN (Weka default), Random Forest, simplified Ken Pomeroy Pythagorean predictor; flat $100 stakes on every game
- Diagnostics: correct-pick breakdown by money-line class (favorites/underdogs/pick'ems); cumulative winnings curves; "Vegas" baseline = always bet the money-line favorite with best/expected/worst pick'em handling
## Data sources named
Money-lines from vegasinsider.com (most conservative line per game); NCAAB/NBA — Ken Pomeroy adjusted efficiencies, win%, MOV, point differential; NFL — box-score "Basic Averages" normalized to 65 possessions + opponent averages + "Adjusted Averages" + SRS; author blog scientificdm.wordpress.com for NFL representation details
## Findings (numbers and facts, not vibes)
- NCAAB (67 games): NB accuracy 0.6865, pay-out +$293.52; ANN 0.6417, −$605.92; KP 0.7014, −$231.34. Vegas baseline: 0.7419 acc / +$30.26 (no pick'ems). NB got 39 favorites + 5 underdogs + 2/5 pick'ems right; KP got 43 favorites + 0 underdogs + 4/5 pick'ems — higher accuracy, worse pay-out
- NBA 2016: Vegas 0.7121 acc / −$2,374.16 (no pick'ems); no classifier ended net positive; KP got only 12/109 pick'ems right, NB got 48/109 (0.44)
- NFL: Vegas 0.6441 acc / −$1,215.69; NB pay-out better than even best-case Vegas in the regular season; ANN lower accuracy but good pay-out (98 favs, 29 dogs, 15/28 pick'ems vs SRS 111 favs, 18 dogs, 14/28 — "trades off accuracy on favorites against accuracy on underdogs"); all models peaked before season end; following NB to end of regular season forfeited >$600
- Paper's conclusions: "Maybe!" — NCAAB volatile (few games); NBA winnable only with entry timing; NFL could pay "decently" especially stopping early; "the safest model seems to be a Naïve Bayes predictor"
- Limitations: single-season backtests, no multi-season validation or CIs; no train/test discipline; flat $100 every-game staking is a strawman (no Kelly, no abstention); "when to start/stop" observations are pure hindsight; 2016-era markets far less efficient than 2026
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: evaluation/selection doctrine — report every GSE model version's correct-pick breakdown by market class (favorite/underdog/pick'em) plus implied flat-stake pay-out at closing lines, alongside accuracy/log-loss; shift the pick-selection layer from accuracy to expected pay-out (pay-out-weighted log-loss); adjacent to the calibration lane (CQR, temperature scaling) and the Kelly bet-sizing gap (#1)
- OTHER: pre-registered confidence-thresholded betting (bet only when model edge > threshold) backtested on 2020–2025, replacing the paper's hindsight "entry timing" observation
## Engine-actionable? (yes/no + one-line what)
Yes — build the pay-out-by-market-class diagnostic harness (3–4 days: harness + pay-out-weighted objective + threshold backtest on 2020–2025 closing money-lines from The Odds API); adopt the pay-out-weighted selection doctrine if the pay-out-optimized variant beats the accuracy-optimized variant by ≥$500/season at flat $100 stakes (or ≥2 pp ROI) on 2024–2025 holdout, gains concentrated in underdog/pick'em hits.
