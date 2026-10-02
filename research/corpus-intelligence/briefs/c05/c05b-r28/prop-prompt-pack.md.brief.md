# research/2026-09-24/prop-prompt-pack.md
## What it is (1-2 sentences)
Drafted-anytime-TD and home-run-hitter LLM prompt templates (JSON-output, calibration-gated) meant for validation/alpha research and content, not the pick path — the engine's `picks` table holds SPREAD/MONEYLINE/TOTAL only, so no prop market exists yet.
## Key metrics/methods (formulas where given, else "not specified")
- Anytime-TD inputs: routes/run, target share, red-zone targets (last 4), snaps, goal-line carries; matchup inputs: opp red-zone TD allowed rate, opp DVOA vs position, game total; weather (temp, wind); inactives. Output JSON: `p_anytime_td` (0.00–1.00), `fair_odds`, `edge_vs_line`, `top_factors`, `kill_factors`.
- Home-run inputs: barrels/PA, hard-hit%, avg exit velocity, launch-angle sweet-spot%, pitcher HR/9, FB%, HR allowed to L/R handedness, park HR factor, wind dir/mph, temp, humidity, batting order, OBP ahead.
- Calibration rule: honest probabilities over confident-sounding ones. Two-model routing (cheap router for volume, frontier for shortlist), referencing the "56%-cheaper local-router pattern."
- Validation protocol: log every output + public line at kickoff/first pitch, no post-hoc editing; preregistered success criterion = **positive CLV vs closing lines over n=100 graded props** (CLV, not win rate); exact binomial/McNemar on CLV sign; publish failures; cut rule — no edge after preregistered n = prompt pack dies, no threshold tuning after the fact.
## Data sources named
Engine factorBreakdown; public injury feeds; public weather feeds; @thelocktalk posts (2026-09-03 "8 AI prompts for NFL anytime-TD props", 2026-06-28 "3 AI prompts for likely home-run hitters" — comment-gated, originals not recoverable; this pack drafted fresh).
## Findings (numbers and facts, not vibes)
- The engine has NO prop market — these prompts serve (a) validation/alpha research against public prop lines, (b) GSE content for the faceless/Shorts pipeline.
- Preregistered n=100 graded props for the CLV test; success measured by CLV sign via exact binomial/McNemar, never win rate.
- Local-router pattern cited as 56% cheaper than frontier for volume work.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: preregistered evaluation with a kill rule is itself a trust mechanism — publish failures, commit the log, don't tune after seeing the answer.
- OTHER: prompt-engineering playbook for structured probabilistic output from LLMs (JSON schema + calibration rule).
- OTHER: evaluation methodology — CLV over win rate for prop-edge measurement.
## Engine-actionable? (yes/no + one-line what)
Yes — drop the two prompt templates into the content/alpha-research lane and run the preregistered n=100 CLV protocol the day a prop market or public-line source is wired.
