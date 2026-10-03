# arxiv-program/research/2026-09-21/arxiv-deep/0414-whos-good-this-year-comparing-the.md
## What it is (1-2 sentences)
Deep-read of arXiv:1501.07179v1 (Wolfson & Koopmeiners 2015): compares how much information each game provides about team strength across NFL, NBA, NHL, MLB by fitting Bradley–Terry and margin-of-victory models on random within-season subsamples (12.5%–87.5%, 100 reps each) and predicting the rest. The reader's verdict is ADAPT — port the sample-sufficiency/plateau analysis, not the model.
## Key metrics/methods (formulas where given, else "not specified")
- Bradley–Terry: logit(π_{i,j}) = β_i − β_j + α (α = home advantage); margin-of-victory: μ_{i,j} = δ_i − δ_j + λ.
- Accuracy of the model vs. always-pick-home baseline, compared via odds ratios.
- Assumptions: one constant strength parameter per team-season (no injuries/trades/form); random subsamples representative ("reduce the influence of temporal trends"); constant home advantage per league-season; games independent given strengths.
## Data sources named
Public game scores: NFL 2004–2012; NBA 2003-04 to 2012-13; NHL 2005-06 to 2012-13; MLB 2006–2012. Game date, home/away, scores only — no player-level or situational data.
## Findings (numbers and facts, not vibes)
- NBA: most predictable; up to 70% accuracy with 87.5% training; home teams won ~60% (largest home edge); accuracy plateaued — "no better when 75% of games were included than when 25% were" (plateau ~25–30 games).
- NFL: accuracy kept improving as more games were added — no within-season plateau.
- MLB: never exceeded 58% even with 140 games (7/8 season) as training; NHL: never exceeded 60% (only 2005-06, when home win probability was 58%). Both rarely more than 2–3 pp better than always-picking-home; in 2007-08 and 2011-12, always-home beat the half-season paired-comparison models.
- Odds ratio vs always-home at 87.5% training: NBA 1.41, NFL 1.46, NHL 1.09, MLB 1.06.
- Per-game pp accuracy gain at 87.5% training: NBA 0.34, NFL 1.4, NHL 0.13, MLB 0.053.
- Margin of victory added virtually nothing in the NBA ("slightly worse predictions during the 05-06 season").
- Central design flaw for deployment (per file): random within-season splits use future games to estimate strength — lookahead bias by construction; measures information content, not forecastability.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- NFL-specific finding (each game adds ~1.4 pp accuracy; no within-season plateau) is the actionable one: NFL team ratings need continuous updating all season — no "settled" week (OTHER).
- The portable contribution is the sample-sufficiency/plateau analysis itself: GSE's corpus has no stabilization/half-life analysis for its in-season NFL priors (TRUST-SIGNAL — a missing calibration artifact).
- MOV adds nothing in the NBA per-game but the league-level result doesn't transfer to NFL margins without testing (OTHER — INFERENCE: don't extrapolate the NBA MOV finding to NFL spreads).
## Engine-actionable? (yes/no + one-line what)
Yes — run the paper's plateau analysis correctly: chronological rolling-origin evaluation on 2015–2024 nflverse data with decay-weighted Bradley–Terry (sweep half-lives 2/4/8/16 weeks/infinite) to produce an empirical stabilization curve that sets the prior half-life for GSE's in-season team ratings and a deployable "ratings have settled after week X" rule.
