# arxiv-program/research/2026-09-21/arxiv-deep/1052-bayesian-inmatch-soccer-forecasting.md

## What it is (1-2 sentences)
A full-paper deep-read ledger (arXiv:2303.12401v2, Divekar/Deb/Roy 2023; 31 pages, 1,892 lines read in full) on real-time in-match soccer win/draw/loss forecasting via 90 minute-indexed Gibbs-sampled Bayesian ordered-probit models conditioned on starting-XI strength and live events. Verdict recorded: ADAPT — the right live-probability architecture (married to a flawed non-chronological evaluation the GSE adaptation must fix with rolling-origin validation).

## Key metrics/methods (formulas where given, else "not specified")
- Ordered multinomial probit: latent z = Xβ + ε, ε ~ N(0,1); observed outcome loss/draw/win via cutpoints γ_1 < γ_2.
- 90 separate Gibbs-sampled models (one per minute index), each conditioning on game state at that minute: starting-XI strength differential, current score, red cards, other live events.
- Evaluation: sensitivity (recall) per outcome class at each minute.
- Paper's flaw: 90/10 train-test split is NOT chronological — random holdout in time-ordered data leaks future information into training; ledger's adaptation replaces with rolling-origin validation (train seasons < t, test season t).
- GSE improvement: replace 90 independent models with a hierarchical Bayesian structure (minute coefficients shrunk toward neighbors); port to NFL with play-indexed probits on nflverse (down/distance/yardline/score/time replacing minute index).

## Data sources named
- 3,040 English Premier League matches, seasons 2008/09–2015/16; starting lineups (XI strength), minute-level event data.
- nflverse play-by-play (proposed for the NFL port only).
- Static pre-match-probability-plus-score baseline (numeric-gate comparator).

## Findings (numbers and facts, not vibes)
- Minute-75 sensitivity: 0.781 (win), 0.635 (draw), 0.632 (loss) — on the non-chronological 90/10 split; ledger flags these as optimistic, never to be used as an upper bound.
- Draw sensitivity (0.635) lags win sensitivity (0.781) substantially; draws remain hard even for the live model.
- 90 separate models is computationally heavy and ignores cross-minute smoothness.
- Novel vs corpus: existing research map covers in-game soccer win probability (1906.05029) and conformal win probability (2208.08598) — neither uses Bayesian ordered-probit with minute-indexed Gibbs models + starting-XI strength. GSE overlap: none.
- Numeric gate: ADAPT iff under rolling-origin validation the Bayesian probit beats the static pre-match-probability-plus-score baseline on log-loss; if the live model adds nothing once the split is chronological, adaptation fails.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: live win-probability engine — minute/play-indexed Bayesian ordered-probit with lineup-strength and live-event covariates is the right architecture for live betting; NFL port uses play-indexed probits on nflverse.
- COACHING: ordered probit naturally handles three-outcome structure — relevant to 1X2 and to NFL derivatives with push/draw possibilities; minute-indexed sensitivity curves quantify when in-game information overtakes pre-match information (win/loss asymmetry: 0.781 vs 0.632 at minute 75).
- QB-BEHAVIOR (INFERENCE): the NFL port's play-indexed covariates (down, distance, yardline, score, time) are exactly the situational features QB behavioral profiles condition on — the probit framework can surface situational INT/win-rate dynamics per QB.

## Engine-actionable? (yes/no + one-line what)
Yes — build a live win-probability surface (soccer first, NFL second): hierarchical Bayesian ordered-probit indexed by minute/play with lineup strength + live events, evaluated strictly under rolling-origin validation, gated on beating the pre-match-plus-score baseline on log-loss.
