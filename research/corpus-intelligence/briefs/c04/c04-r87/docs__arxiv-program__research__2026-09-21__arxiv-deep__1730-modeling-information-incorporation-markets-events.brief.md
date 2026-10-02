# docs/arxiv-program/research/2026-09-21/arxiv-deep/1730-modeling-information-incorporation-markets-events.md
## What it is (1-2 sentences)
Deep-read ledger of Pennock, Debnath, Glover & Giles (UAI 2002, arXiv:1301.0594): a dynamic model of information incorporation in prediction markets under the forecast-accuracy assumption (prices are martingales; winner-state updates scale with conditional variance), plus a log-likelihood-space movement analysis and an entropy-loss text-mining pipeline for detecting and explaining market-moving events. Verdict in the file: ADAPT — the formal CLV justification plus variance-scaled update dynamics give GSE a principled steam-move surprise score and a news-attribution pipeline.

## Key metrics/methods (formulas where given, else "not specified")
- Forecast-accuracy assumption (martingale): E[p_t | p_{t−1} = a] = a.
- Winner-conditioned update: E[p_t | E, p_{t−1} = a] = a + Var(p_t | p_{t−1} = a)/a — price changes proportional to conditional uncertainty.
- Log-likelihood space: work with logit(p) = ln(p/(1−p)); price changes in this space approximately symmetric, power-law distributed; winner/loser movement ratio predicted ≈ e^ε (ε = log-likelihood step size), empirically "reasonably close."
- Coin-flip information-arrival simulation: 22 synthetic markets, n=1200 flips; market value = (1/n) Σ flips; log score rises linearly with time, accelerating near resolution.
- Expected entropy loss (information gain) for term w: E[IG] = Σ P(w) · KL(class distribution | w || class distribution) — ranks event-explaining words/phrases around market-move dates.
- Assumptions: prices are unbiased forecasts (no favorite-longshot bias, no risk premia); information arrives exogenously; text corpora contain the causal events; log-score is the right accuracy measure.

## Data sources named
22 Iowa Electronic Markets (IEM) election markets (price histories); event corpora: 622 ny.politics newsgroup posts, 480 us.politics posts, 127 sci.space.news posts, 189 Washington Post articles about Giuliani. No public code or data artifact linked in the paper.

## Findings (numbers and facts, not vibes)
- Results are qualitative only: log-score linearity, late acceleration, winner/loser movement ratio "reasonably close" to predicted e^ε (no exact ratio quoted), power-law increment distribution (exponent not numerically fitted).
- Three event case studies: manual verification that top entropy-loss terms correspond to real known events; no precision/recall numbers.
- Limitations per the file: old, small, political-market sample (2002-era); no held-out prediction test; retrospective and outcome-conditioned (the winner-state equation conditions on knowing the winner); the martingale assumption fails under favorite-longshot bias and time-varying risk premia documented in sports markets.
- File's GSE reproducible test: on The Odds API 2025 NFL moneyline/spread histories (hourly, open to kickoff), variance-normalized surprise score S = Δlogit(p)/sqrt(Var_t); ADAPT confirmed if surprise-flagged moves predict remaining move-to-close direction at ≥55% accuracy (baseline 50%) with ≥200 flagged events; REJECT if continuation-rate gap vs raw move-size flags < 5pp.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the variance-normalized surprise score is a principled trust filter distinguishing information-driven steam moves from noise (flag steam only when |Δlogit| exceeds k × variance-predicted scale); the entropy-loss attribution pipeline attributes flagged moves to news events — trust-signal provenance for line moves.
- OTHER: CLV / line-movement methodology proper.

## Engine-actionable? (yes/no + one-line what)
yes — build a CLV surprise score on The Odds API line history (variance-normalized logit-move flags, scheduled-information-aware: injury reports Wed–Fri, inactives 90 min pre-kick) plus an entropy-loss news-attribution scan over a ±30-minute window around surprise moves; ~1 week for the score, ~2 weeks for the attribution pipeline per the file's spec.
