# docs/arxiv-program/research/2026-09-21/arxiv-deep/1195-playing-fast-not-loose-evaluating-team.md
## What it is (1-2 sentences)
Yu, Boucher, Bornn & Javan (2019), arXiv:1902.02020v1 — descriptive ice-hockey tracking study measuring team-level pace of play from SPORTLOGiQ spatio-temporal possession data, with zonal and player-level pace analysis. Ledger verdict: REJECT (wrong sport, proprietary unreplicable data, purely descriptive, no forecast, no calibration, no market test; replacement ledger beyond the 1348–1353 allocation had not been assigned at ledger time).
## Key metrics/methods (formulas where given, else "not specified")
- Pace defined arithmetically (no formal equations stated): distance traveled by the puck between successive same-team possession events divided by elapsed time, decomposed into φT (total speed), φEW (east-west), φNS (north-south), φN (north-only; backward movement counted as zero).
- Analysis is zonal (offensive/defensive/neutral zone) and spatial via a polygrid: rink divided into 668 cells of 5×5 feet, 2D Gaussian smoothing with σ = 0.5, producing team-vs-league-average differential pace maps.
- Player-level pace with WOWY (with-or-without-you) on/off splits (minimum 200 minutes 5v5).
- No predictive model trained; no train/validation/test split, no out-of-sample prediction, no backtest.
## Data sources named
SPORTLOGiQ proprietary spatio-temporal event dataset: ~3,650 events per game, 21 primary event types, 89 subtypes, with X/Y coordinates, timestamps, possession state. Coverage: NHL, AHL, SHL 2016/17–2017/18; NHL 2018/19 through November 24, 2018. Pass analysis subset: 0.50 million 5v5 passes. Proprietary and unreplicable — no public URL, no data release, no code release.
## Findings (numbers and facts, not vibes)
- φT highest in the neutral zone; offensive/defensive zones ~10–13% slower. [OTHER]
- OZ forward pace (φN) 35% slower than DZ and 43% slower than NZ — offered as explanation for the previously reported negative correlation between forward pace and offense. [OTHER]
- Second period ("long change"): DZ forward pace up ~7%, odd-man rushes up ~35%. [OTHER]
- Zone entries: high-danger entries 24.3 ft/s vs dump-ins 21.6 ft/s (~13% faster). [OTHER]
- Pre-shot pace quintiles 10 → 42 ft/s: true shooting 2.9% → 4.1% (+38%), with shot distance constant at ~37–40 ft. [OTHER]
- Passes: failed receptions occur at significantly higher speeds than successful ones (exception: slot passes); 0.50M passes analyzed. [OTHER]
- Leagues: AHL φT 1–2% slower than NHL; SHL slower in DZ/OZ but faster in NZ (rink-dimension effects). [OTHER]
- Players: McDavid fastest in OZ (driven by φNS); Jagr slowest (−13.7% OZ WOWY). [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All findings are hockey-operations (coaching, player evaluation) — tagged OTHER across the board; nothing transfers to NFL spreads/totals/fantasy/calibration per the ledger.
- INFERENCE: the descriptive pace-quintile methodology has no calibration or prediction content usable in the GSE engine.
## Engine-actionable? (yes/no + one-line what)
no — REJECT at the problem/sport level: hockey-only continuous-flow sport, proprietary unreplicable data, no predictive model; GSE's situation-neutral pace metric already covers the football-relevant notion.
