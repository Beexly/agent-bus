# data/EDGE_SUPREMACY_DOCTRINE.md
## What it is (1-2 sentences)
Doctrine-level map of all 8 edge classes (information, model, market microstructure, behavioral, game-theoretic, temporal, portfolio/correlation, meta), plus the "Machine v2" hypothesis-fleet → verifier → validation-bench pipeline, the H0 NFL battle order, and legality rules.
## Key metrics/methods (formulas where given, else "not specified")
- Universal equation: EV = Σ (p_true − p_implied) × payout; edges either improve p (classes 1–2, 5) or exploit how p_implied is produced/moved (classes 3–4, 6–8).
- Not specified (no formulas): alt-ladder coherence (detect non-monotone/impossible densities in a book's alt-line ladder), cross-derivative coherence (game ↔ 1H ↔ team totals ↔ props under one joint distribution), steam classification (info moves vs liability moves), boost/promo scanner, settlement-rule arbitrage, public-tax maps, incentive calendar, exact SGP pricing via joint simulation, correlation-aware Kelly sizing.
## Data sources named
Official league transaction feeds (elevations/activations/waivers), practice reports (DNP–LP–FP), METAR/NOAA weather, GSE's own line archive, settled results, joint simulation output, promo pages via clearance engine.
## Findings (numbers and facts, not vibes)
- H0 battle order (12 items) ranked by expected CLV per token before ~Sep 10 kickoff; kneel/garbage-time model jumps the line (fixes shape of attempt/pass-yds props for every favorite from week 1).
- Edge density is inverse to handle (C3.7 attention-allocation targeting): obscure props, lower-tier games, secondary leagues outperform.
- Rule changes are recurring scheduled edges — leagues change rules every year; precedent: pitch-clock era stolen-base explosion mispriced for months.
- Second-order self-model (C8.3): learn regimes (weather, backup QBs, low-snap games) where own p is least trustworthy; scale stakes accordingly.
- Edge genealogy library (C8.2): timestamped hypothesis → retirement log becomes a time-series of how books learn; described as the asset a competitor cannot buy.
- Kneel-outs delete pass attempts for big favorites; hurry-up garbage time inflates trailing QBs — attempt props are systematically shape-wrong without an end-state model.
- Key numbers: NFL margins concentrate on 3 and 7; books price derivatives off smooth approximations.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: garbage-time inflation of trailing QBs (attempt props shape error); coach decision models on distributions not just means (C5.2).
- COACHING: 4th-down aggressiveness, pace preferences, red-zone play-calling fingerprints; "incentive calendar" (tanking/rest/auditioning states re-project usage wholesale).
- SCHEME: end-of-game absorbing states (kneel-outs, hurry-up) as explicit game-state model component.
- TRUST-SIGNAL: event-salience overreaction (televised performance → next-week line inflation) is a measurable fade signal.
- OTHER: doctrine/strategy document — CLV-per-token ranking, hypothesis production pipeline, legal clearance rules; not itself a data source.
## Engine-actionable? (yes + what)
Yes — implement C2.1 kneel/garbage-time end-state model for attempt props (small build, week-1 payoff); build C3.1 alt-ladder coherence scanner and C3.5 boost scanner (code once, run daily at zero marginal cost); maintain C5.1 incentive calendar as standing per-team state machine.
