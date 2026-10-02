# arxiv-program/research/2026-09-21/arxiv-deep/0435-wages-of-wins-could-an-amateur.md
## What it is (1-2 sentences)
A full-paper research note on Zimmermann (2017), arXiv:1702.05982v1 — flat $100 bets on every game of NCAAB tournament, NBA 2016, and NFL seasons using simple Weka classifiers against Vegas money-lines, demonstrating that high accuracy ≠ high pay-out: what pays is getting underdogs and pick'ems right, not favorites. Verdict: ADAPT the doctrine (optimize for pay-out, not raw accuracy) as a training objective for GSE's pick-selection layer; the classifiers and 2016-era lines are stale.

## Key metrics/methods (formulas where given, else "not specified")
- Pay-out rules: favorite correct → $10000/FAV-Line; underdog correct → $DOG-Line; pick'em correct → $10000/110 = $90.90; incorrect → −$100. Pick'em swing per game: $190.90.
- Classifiers: Naïve Bayes (Weka, kernel estimator), MLP/ANN (Weka default), Random Forest, simplified Ken Pomeroy Pythagorean predictor. Flat $100 stakes, no Kelly, no abstention, no line shopping.
- Proposed acceptance gate: ADOPT pay-out-weighted selection if on 2024–2025 holdout the pay-out-optimized variant beats the accuracy-optimized variant by ≥$500/season at flat $100 stakes (or ≥2 pp ROI), gain concentrated in underdog/pick'em hits.

## Data sources named
- vegasinsider.com money-lines (most conservative line per game); Ken Pomeroy adjusted efficiencies + win%/MOV/point differential; NFL "Basic Averages" normalized to 65 possessions + opponent-adjusted averages + SRS.
- GSE spec: The Odds API closing money-lines (already in stack); nflverse team features.

## Findings (numbers and facts, not vibes)
- NCAAB (n=67 games): NB 0.6865 acc / +$293.52; ANN 0.6417 / −$605.92; KP 0.7014 / −$231.34 (KP got 43 favorites + 0 underdogs + 4/5 pick'ems; NB got 39 favorites + 5 underdogs + 2/5 pick'ems — "this makes all the financial difference"). Vegas always-favorite: 0.7419 / +$30.26 (no pick'ems); with 5 pick'ems expected case 0.7313 / +$7.51.
- NBA 2016: Vegas 0.7121 / −$2,374.16 (no pick'ems); with 115 pick'ems expected −$1,857.30. No classifier net positive. KP got 725 regular-season favorites but only 12/109 pick'ems; NB got 48/109 pick'ems (0.44).
- NFL: Vegas 0.6441 / −$1,215.69; NB accuracy comparable to Vegas but pay-out better than even best-case Vegas in the regular season (98 favs, 29 dogs, 15/28 pick'ems vs SRS's 111/18/14 — "trades off accuracy on favorites against accuracy on underdogs"); all models peaked before season end (NB gave back >$600 by regular-season end).
- Conclusion: "Maybe!" — NCAAB too volatile, NBA winnable only with entry timing, NFL decent if stopped early; "the safest model seems to be a Naïve Bayes predictor."
- Limitations: single-season backtests (NCAAB n=67 noise-dominated); no train/test discipline; "when to start/stop" observations are pure hindsight; flat-stakes-every-game is a strawman.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: directly load-bearing for the engine's pick-evaluation doctrine — accuracy-vs-pay-out decomposition, favorite/dog/pick'em correct-pick breakdown as a model-selection criterion, pay-out-weighted training objective, confidence-thresholded abstention, fractional-Kelly sizing (connects to map gap #1), CLV as co-objective.
- TRUST-SIGNAL: none in file.
- QB-BEHAVIOR / COACHING / OL / SCHEME: none in file.

## Engine-actionable? (yes/no + one-line what)
Yes — for every GSE model version, report the correct-pick breakdown by market class (favorite/underdog/pick'em) and implied flat-stake pay-out at closing lines alongside accuracy/log-loss; shift the pick-selection training objective toward expected pay-out and pre-registered confidence-thresholded betting.
