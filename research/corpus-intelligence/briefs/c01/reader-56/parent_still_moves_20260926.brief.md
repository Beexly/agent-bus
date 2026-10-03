# reasoning/parent-still-moves-20260926.md
## What it is (1-2 sentences)
Founder's 2026-09-26 gating memo for LAC at BUF: audits which candidate engine parts could still move the prediction sum, applies the `selectPart` Tchebycheff scalarizer, and keeps the eight existing LIVE parts — `publishes_pick` stays false, no new prior, applied identically to all sixteen week-3 games.
## Key metrics/methods (formulas where given, else "not specified")
- `selectPart` (packages/prediction-engine/src/reasoning/part-selector.ts): minimize Tchebycheff against ideal point (0,0,0), λ = (0.5, 0.3, 0.2). f1 = 0 when |r| ≥ 0.08 and |slope| > se, else 1 (honesty); f2 = 1 if the direction already has a representative (duplication); f3 = 1 if the week-3 game has no row (missing data). g = max(λ_i f_i). DARK if duplication or honesty is the winning term; STORED if only missing row fails; g = 0 is the only path to a new LIVE part.
- Candidate walk-forwards that failed: officials crew effect r=-0.093, slope=-0.0101, se=0.0103 (2024 crew means |mean|>se in 7 of 17 crews applied to 2025 n=113; |slope| not > se, sign flipped, and LAC@BUF referee null → DARK); weather wind slope -0.135/mph se 0.1618 (n=349 outdoor games) and temp slope +0.0294/°F se 0.0388 — both inside one SE → DARK; coaching fourth-down go rate 2025 walk-forward r=-0.0136 on 255 games (|r| < 0.08 → DARK).
- Live parts that stayed: on_field_efficiency (signed 1.000, 0.140 pts); scheme_play_design (0.034, 0.004; drive-start sibling capped 0.15, 2025 r=+0.186, n=272); availability (LAC 6 out, BUF 2 out; 0.667, 0.080); schedule_and_body (rest_diff = 3, slope +0.4108 margin pts/extra day, se 0.2535, n=544; 0.088, 0.007); historical_strength/Elo (0.556, 0.044); trench_personnel qb_hit/dropback (0.749, 0.037; 2025 walk-forward r=0.241, n=250); chemistry (0.000, 0.000 — Herbert/Allen still snap leaders); airwave (questionable/doubtful skill, prior 0.05; -0.208, -0.010).
- Final edge for LAC at BUF: 0.30259224777263855, persisted to `packages/prediction-engine/src/reasoning/live-edge-registry.ts`. Market context: spread +7, total 49.5.
## Data sources named
- `docs/reasoning/week3-engine-readings.md` (live parts); `games.rest_diff`; `games.referee`; `schedules.weather`; `contracts` (not joined — no r/slope/se stored, prior 0.03 stays dark); `nfl4th` (coaching sibling); injury reports (availability); SiriusXM airwave (questionable/doubtful skill wire).
## Findings (numbers and facts, not vibes)
- Rest differential effect: +0.4108 margin points per extra day of rest (se 0.2535, n=544) — cleared |slope| > se, so it stays live; travel does not get a second live body signal.
- Officials rejected: referee home-margin effect had r=-0.093 (clears 0.08) but |slope| (0.0101) < se (0.0103), sign flipped, and crew null for LAC@BUF → DARK.
- Weather rejected: wind and temperature slopes both inside one standard error → DARK; no week-3 row play-by-play weather column = same family.
- Coaching (fourth-down go rate) rejected: r=-0.0136 over 255 games, below the 0.08 bar → DARK; nfl4th is the named sibling, not a second signal.
- Narrative/contract candidate: no contract table joined — the 0.03 prior stays dark ("do not invent a salary").
- Persisted parts: eight LIVE, edge 0.30259224777263855 for LAC at BUF; calibration meters (Brier, ECE, Kelly, Bradley-Terry) stay meters, never parts.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fourth-down go rate as coaching grain (r=-0.0136, rejected at |r|<0.08): COACHING (defines the engine's coaching family and the bar a new coaching signal must clear).
- `nfl4th` as named sibling blocking duplicate coaching signals: COACHING, SCHEME.
- Trench representative: qb_hit per dropback, 2025 walk-forward r=0.241 n=250: OL (sack/pressure attribution family representative).
- Availability outs (LAC 6 out, BUF 2 out) vs questionable/doubtful airwave split: OTHER (injury-report intake discipline — questionable skill players counted once, via airwave, not double-counted in availability).
- Tchebycheff scalarizer with λ=(0.5,0.3,0.2), |r|≥0.08 + |slope|>se honesty bar, duplication-as-failure doctrine: OTHER (the engine's anti-duplication gate).
## Engine-actionable? (yes/no + one-line what)
yes — Codify the selectPart gate (|r|≥0.08, |slope|>se, no duplicate family, week-3 row present) as the promotion rule for every new signal family, with the eight persisted parts and their signed weights as the current edge sum.
