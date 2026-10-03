# arxiv-program/research/2026-09-21/arxiv-deep/1711-sprint-density-altitude.md
## What it is (1-2 sentences)
Deep read of Mureika (2005), arXiv:physics/0505118 — a numerical-simulation study of how air temperature, barometric pressure, and humidity alter 100 m sprint times through aerodynamic drag; verdict ADAPT. The density-altitude framework plus quantified corrections give GSE a citable air-density correction for player-speed metrics and kick/punt distance modeling beyond venue elevation.

## Key metrics/methods (formulas where given, else "not specified")
- F_drag ∝ ρ(T, P, RH)·(v−w)², air density from ideal-gas + humidity correction; numerically integrated per condition
- Parameter sweep: T = 15–35°C, RH = 0–100%, P = 85–105 kPa, wind −3…+3 m/s vs a standard race (no wind, sea-level, 25°C)
- Core concept: **density altitude** — hot/humid air simulates higher physical altitude (less drag → faster times)

## Data sources named
- No empirical dataset — purely simulated; sprint power model from Mureika (Can. J. Phys. 2001) with hydrodynamic drag added; no out-of-sample empirical validation

## Findings (numbers and facts, not vibes)
- Temperature alone: 0.02 s differential over the 15–35°C range (small; within timing noise for a single race)
- Humidity × temperature combined matters more (hot saturated air much less dense than cold dry air)
- Combined extremes: 0.1+ s variation between 85 kPa/100% RH/35°C and 105 kPa/0%/15°C — after wind correction — at the same venue/altitude
- Direction: heat/humidity → higher density altitude → less drag → faster times (same sign as physical altitude)
- Wind/altitude corrections under these conditions match earlier literature (internal consistency check)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: weather→physics correction layer — density altitude computed per stadium from game-day T/P/RH as a correction feature for NGS player-speed metrics (top speed, acceleration) before cross-game comparison; expected effect ~0.1–0.3% (aggregate-detectable only)
- OTHER: kicking model — density altitude fed into the kick/punt distance model alongside wind (highest-leverage application); completes the air-density trilogy with ledger 1699 (humidor ball aerodynamics) and 1712 (ball restitution)
- OTHER: caution — assumes drag is the only T/P/RH pathway; ignores physiology (heat effects on the athlete dominate for endurance)

## Engine-actionable? (yes/no + one-line what)
yes — Build weather/density_altitude.py computing per-game ρ(T,P,RH) once, feeding ball-flight (kick/punt), athlete-drag (NGS speed normalization), and ball-restitution models; acceptance gate: density altitude significant with correct sign in NGS top-speed regression AND improves kick-distance model RMSE on 2024 holdout.
