# docs/ops/LAUNCH_DECISION_2026-09-04.md
## What it is (1-2 sentences)
A 2026-09-04 launch-decision memo reporting the first honest backtest measurement of the engine (1999–2025 NFL, 15,939 settled picks) after fixing a corpus-poisoning spread-sign bug, finding −5.48% ROI and zero discriminative power of confidence against the closing line, and recommending launching on transparency/CLV proof rather than a win-rate claim.
## Key metrics/methods (formulas where given, else "not specified")
- Backtest: 1999–2025 NFL regular season, 6,967 games, 15,939 settled picks, 0 lookahead errors, graded against closing line with synthetic book depth.
- AUC = P(winning pick scored higher than losing pick); 0.5 = coin flip; permutation-tested.
- `tier = confidence >= PREMIUM_CONFIDENCE_THRESHOLD ? "PREMIUM" : "FREE"` (`scoring.ts:541, :750, :945`); premium/free win-rate gap z = −1.19, p = 0.235 (not significant).
- Wilson lower bound used for the 11 market-shape segment break-even tests.
## Data sources named
- nflverse (`spread_line`, positive = home favored) backfill; supporting detail `docs/data/NFL_REPLAY_CALIBRATION_2026-09-04.md`; PRs #695 (spread-sign fix + 27-season replay), #698 (discrimination analysis), #692/#694/#696/#697; CFBD lines considered for open/close archive.
## Findings (numbers and facts, not vibes)
- Corpus-poisoning bug: nflverse `spread_line` sign convention (positive = home favored) was forwarded raw into a repo convention (negative = home favored), so every backfilled SPREAD pick was on the wrong team; proven on the 16-0 2007 Patriots (engine published WAS −15.0 vs NE ML −1225 on the same game). Fixed in #695; all numbers post-date the fix.
- Market ROI: SPREAD 6,778 picks, 48.86% win rate, −6.53% ROI; TOTAL 6,868, 49.49%, −5.44%; MONEYLINE 2,001, 76.71% win, −1.96% ROI; all 15,647, 52.70% win, −5.48% ROI. Honest single number: −5.48% per unit staked.
- Discrimination: confidence AUC=0.4965 (p=0.4113); |line| magnitude 0.4982 (p=0.7156); rest differential 0.5019 (p=0.6346); week of season 0.5073 (p=0.1329) — 13,646 picks, nothing ranks outcomes; textbook market-efficiency result measured in-house.
- No segment escapes: 11 market shapes tested (favourite/underdog, four spread bands, over/under, four total bands); zero cleared break-even on Wilson lower bound.
- Untested, not disproven (entry = close by construction): CLV against earlier lines (untestable — no open+close lines archive), Edge Index ELITE/STRONG/SOLID/LEAN ladder (replay priced both sides −110 so every pick grades LEAN), consensus/market depth.
- Decision: recommend option A (launch on proof — timestamped picks, published reliability curve, CLV ledger, factor trail; charge for transparency/tooling) with B (keep paid tier dark until ≥100 settled + published calibration) as fallback; C (launch as planned charging for an unsubstantiated confidence sort) flagged as asymmetric downside.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (TRUST-SIGNAL) Engine confidence does not rank outcomes (AUC 0.4965) and premium vs free gap is not significant — directly bears on whether public confidence tiers can be trusted as calibrated probabilities.
- (OTHER) The nflverse spread-sign poisoning is a data-integrity caution for any engine backtest ingestion: sign-convention mismatch silently inverted every backfilled spread pick.
- (SCHEME) INFERENCE: rest differential AUC 0.5019 (p=0.6346) shows no discrimination of ATS winners — a COACHING-relevant input that measured as dead against the close.
## Engine-actionable? (yes/no + one-line what)
Yes — establishes the baseline measurement the engine must beat: −5.48% ROI and non-discriminative confidence against the close; CLV vs opening lines is the named untested avenue, requiring an open+close lines archive.
