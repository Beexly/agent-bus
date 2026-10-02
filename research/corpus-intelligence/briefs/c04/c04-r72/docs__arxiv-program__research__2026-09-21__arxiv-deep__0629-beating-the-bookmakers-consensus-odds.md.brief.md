# docs__arxiv-program__research__2026-09-21__arxiv-deep__0629-beating-the-bookmakers-consensus-odds
## What it is (1-2 sentences)
Kaunitz, Zhong & Kreiner, arXiv:1710.02824v2 — a quantitative betting strategy treating bookmakers' consensus odds (inverse of mean odds) as the true probability and betting only when some individual bookmaker's max offered price exceeds consensus fair value (margin α = 0.05), validated through a four-rung ladder: simulation → realistic simulation → paper trading → real-money betting. Ledger verdict: ADAPT (template for GSE's line-shopping/CLV framework, with the p=0.089 asterisk).
## Key metrics/methods (formulas where given, else "not specified")
- Consensus probability = inverse of the mean odds across bookmakers (wisdom-of-crowds fair price).
- Betting rule: bet the book offering argmax odds o_max where the edge condition vs. consensus-implied fair value holds with adjustment α = 0.05 (asserted, not optimized; no sensitivity analysis).
- No formal equations beyond the rule's arithmetic. Assumptions: consensus mean odds are an unbiased estimate of true probability; max odds obtainable at quoted size; bookmaker margins symmetric enough to invert the mean cleanly.
## Data sources named
- Historical odds: 479,440 games, 818 leagues/divisions, 32 bookmakers, January 2005 – June 2015 (commercial aggregator, not named as downloadable).
- Strategy data: closing odds and 1–5-hour pre-game odds snapshots; live deployment via a real-time dashboard odds aggregator.
- Code: https://github.com/Lisandro79/BeatTheBookie (stated in paper).
## Findings (numbers and facts, not vibes)
- Closing-odds simulation: 56,435 bets, 44.4% accuracy, 3.5% return (random bettor baseline: 38.9% accuracy, −3.32% return).
- Realistic 1–5h pre-game simulation: 31,074 games → 6,994 bets, 47.6% accuracy, 9.9% return (random: 38.4%, 0.2%).
- Paper trading: 407 bets, 44.4% accuracy, 5.5% return. Real betting: 265 bets, ~47% accuracy, $957.50 profit, 8.5% return.
- Combined paper+real: 672 bets, 45.5% accuracy, $2,086 profit, 6.2% return; random comparison p = 0.089 (marginal significance, authors' own test).
- Authors' own frictions: ~30% of dashboard odds were stale (unbettable); bookmaker limits introduced nonrandom selection bias (executed bets not a random subset of signals).
- File notes: mean-odds consensus treats sharp and soft books equally; 2005–2015 data pre-modern odds-screen era; this is a line-shopping edge, not a prediction edge — requires multi-book execution infrastructure.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the authors' honest reporting — p = 0.089 stated outright, stale-odds rate quantified (~30%), limit-driven selection bias disclosed; a template for honest edge reporting.
- OTHER: market-dispersion monetization — turns GSE's existing props-consensus work (2026-09-17 props-consensus/) into a decision rule with a published validation ladder (simulation → realistic → paper-trade → real money) that the consensus lane currently lacks; CLV as the leading indicator.
## Engine-actionable? (yes/no + one-line what)
Yes — build a nightly consensus engine on Garrett's multi-book odds feeds (mean/max odds at 1–5h pre-kick), flag positive-EV signals beyond an α margin, and paper-trade one full season before any staking; adopt only if backtest ROI ≥ 2% over ≥ 500 signals with positive mean CLV.
