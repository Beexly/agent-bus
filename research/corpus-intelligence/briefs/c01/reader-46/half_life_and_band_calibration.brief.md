# docs/fantasy/research/2026-09-28/half-life-and-band-calibration.md
## What it is (1-2 sentences)
Research memo from a 5-year walk-forward half-life sweep plus uncertainty-band calibration for the fantasy projection model (33,962 REG player-weeks, seasons 2020-2026; scripts `.hermes/scratch/halflife.py` 75m31s, `bandwidth.py`), including a self-correction of an earlier n=1 generalization about McCaffrey.

## Key metrics/methods (formulas where given, else "not specified")
- Recency weighting: exponential decay with half-life H weeks; pooled walk-forward (train < Y, score Y) MAPE + medAE%.
- Band: `band = proj * (1 ± z*CV)`; spec z=1.0.
- Coverage table z: 0.50→58.7%, 0.75→77.7%, 1.00→92.5%, 1.50→98.9%, 2.50→100.0%.
- z-to-coverage curve: 95%→z=1.18→±96%; 90%→0.96→±78%; 80%→0.79→±64%; 68%→0.62→±51%; 50%→0.41→±34%.
- Honest per-player volatility signal: corr(predicted SD, realized SD)=+0.5366 (n=373), per-game units; corr(CV, realized SD)=−0.3477 was an artifact (confounded ratio vs absolute), as was an earlier ~17x season-vs-weekly unit inflation.
- Decisions: half-life stays 6, band multiplier stays 1.0 — both backed by measured curves.

## Data sources named
Internal GSE fantasy projection model player-week data (33,962 REG player-weeks, 2020–2026); no external provider named.

## Findings (numbers and facts, not vibes)
- Pooled walk-forward MAPE (n=1892): H=5→0.5093 (medAE 29.80), H=6→0.4949 (28.37), H=8→0.4838 (26.22, best pooled), H=12→0.4887 (23.99), H=52→0.5774 (20.28).
- H=6 is within 2.3% of best pooled MAPE; pooled winner H=8 is the worst of the short half-lives in 2025 (0.5706 vs H=5's 0.5295); long half-lives collapse on the most recent holdout (H=52: 2021 0.4239 → 2025 1.0425).
- MAPE and median disagree in direction: MAPE prefers H=8, median absolute error prefers H=52 (20.28%) — MAPE punishes the tail (a 2-point dud vs 8-point projection = 233% error).
- Band at spec z=1 contains 92.5% of realized season totals — "a floor/ceiling that contains 92.5% of outcomes says 'maybe' about every player equally."
- Honest width of NFL fantasy scoring: even 50%-coverage band = ±34% of projection; narrow fantasy floor/ceiling cannot be built from this signal; a 25% band is unsupported for any player.
- Per-position per-player volatility (predicted SD vs realized SD): RB r=+0.6251 (n=88, pred 6.4, real 4.9); WR r=+0.5699 (n=147, pred 6.3, real 5.3); TE r=+0.2957 (n=84, pred 5.0, real 4.2); QB r=+0.0636 (n=48, pred 8.8, real 7.5).
- QB band is essentially the positional prior restated — the model cannot distinguish QB-specific uncertainty from average QB volatility.
- Self-corrections recorded: (1) earlier claim that H=6 is "structurally pessimistic on a player coming off a bad season" was an n=1 over-generalization (McCaffrey), not supported by the 5-year walk-forward; (2) interpolation loop searched for descending coverage while coverage ascends with z, breaking the target lookup (coverage table was correct).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: QB per-player volatility is unmodeled by this signal (r=+0.06 vs +0.57–0.63 for RB/WR) — drafting a QB floor/ceiling from this model presents a prior as a player's own uncertainty. Do not publish player-specific QB bands from this signal.
- OTHER: positional band-calibration insight (RB/WR bands carry real signal; TE weak at +0.30); honest-coverage product decision still open (90%-honest band = ±78% looks "useless" next to a feed's ±25%).

## Engine-actionable? (yes/no + one-line what)
Yes — wire the measured z-coverage curve into band display logic and suppress QB-specific uncertainty bands; pair with CALIBRATION_PROTOCOL's claim-gate for any band productization.
