# arxiv-program/research/2026-09-21/arxiv-deep/0028-asia-cup-2025-a-structured-t20.md
## What it is (1-2 sentences)
Dataset paper (Raza & Ali, arXiv:2512.19740v1, 2025) releasing a structured 19-match x 61-variable CSV of the 2025 Asia Cup T20 cricket tournament with exploratory analysis only; verdict REJECT.
## Key metrics/methods (formulas where given, else "not specified")
No equations, no model, no prediction, no hypothesis testing — EDA only (toss-impact, batting performance, boundary distributions).
## Data sources named
ESPNcricinfo public scorecards + Asian Cricket Council official information; Zenodo DOI 10.5281/zenodo.17228056 (CC-BY 4.0); EDA code at github.com/kousarraza/AsiaCup2025 (not downloaded/verified).
## Findings (numbers and facts, not vibes)
- Dataset: 19 matches x 61 attributes (match ID, teams, playing XI, toss, results, totals, wickets, overs, extras, powerplay, boundaries, stage/group).
- EDA results are figure-referenced only (Figs. 1-3) with NO numeric values in the text.
- 19 matches from a single tournament is statistically unusable for model training; cricket-only, zero NFL/NCAA applicability.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No findings with engine relevance: OTHER
## Engine-actionable? (yes/no + one-line what)
no — rejected paper, no method, no model, no transferable artifact; generic lesson (structured per-event CSVs + Zenodo archival) is already standard in the nflverse pipeline.
