# docs/arxiv-program/research/2026-09-21/arxiv-deep/0979-nba-point-spread-cover-study.md

## What it is (1-2 sentences)
Ledger deep-read of Mateos (2019), arXiv:1902.10067 — asks whether NBA teams' season win percentage systematically predicts point-spread cover rate, testing if extreme win-% teams escape the 2.54% house edge (1990-91 to 2015-16). Verdict in file: ADAPT (weak) — methodologically thin, but the structural idea (lines shaded toward elite teams, so extreme bad teams carry contrarian ATS value) is worth testing on NFL/CFB.

## Key metrics/methods (formulas where given, else "not specified")
- House edge defined as 2.54% around 50% (i.e., −110 odds; true −110 breakeven is 52.38%, so reported "profits" are overstated ~2.4 pp in absolute terms).
- Running average (cover side): **H̄_Cpct = (1/T_Hw) Σ_{i=0}^{T_Hw−1} t_c(t_Hw − i)**, where t_c = team cover %, starting at highest-win% team; mirror formula for no-cover side from the lowest-win% team.
- Deltas: Δw = final-score point differential; Δc = ATS error vs line (favourite's perspective); Δo = error vs total-points line.
- Reported "correlation" W/L↔C/N ≈ 0.2, W/L↔O/U ≈ −0.04, computed nonstandardly as "proportion of extreme outliers" — not Pearson.
- "Profit" computed as deviation from 50%, not actual bankroll ROI at −110.

## Data sources named
- NBA regular-season betting lines + final scores, 1990-91 through 2015-16, collected from local sportsbooks (Mexico, US, UK, Austria).
- Train: 1990-91 → 2013-14 (24 seasons, 27/29/30-team eras); test: 2014-15, 2015-16.
- Appendix with per-season results (linked, not archived); no raw dataset download; author's SPXS Sports Picks Expert System (particlerobots.com).

## Findings (numbers and facts, not vibes)
- Eras with groups escaping the house-edge band: 27-team era — 6 best teams cover beyond +2.54%, 7 worst fail beyond −2.54%; 29-team era — 7 best / 8 worst; 30-team era — 5 best / 10 worst. [OTHER]
- Training cumulative deviation sums: no-cover side (12 worst teams) Σ = 15.92% (best cell: most-losing team 44.68% cover → 2.92%); cover side (12 best teams) Σ = 13.35% (best cell: most-winning team 55.48% → 3.08%). [TRUST-SIGNAL: win-loss% strongly proxies line-shading direction; use with caution, numbers are deviation-from-50% not ROI]
- Test set 2014-15/2015-16 (ex-ante rule, 3 worst / 2 best): worst teams no-cover 44.44% (3.16%), 43.64% (3.96%), 45.25% (2.35%) → Σ = 9.47%; best teams cover 57.14% (4.74%), 57.61% (5.21%) → Σ = 9.95%. [OTHER]
- Over/under: no systematic edge; only tendencies — high-win% teams go under ≈1.3% more than over; low-win% teams go over ≈1.2% more (both inside house-edge band). [OTHER]
- Zero significance tests, no confidence intervals; tiny test sample (3 + 2 teams × 2 seasons); extreme cutoffs selected retrospectively on training data (circular, partially mitigated by 2-season holdout).
- File's bottom line: answer to the title question is essentially "no, and bad teams are shaded against" — line-shading toward elite/popular teams, consistent with known favourite-longshot-type biases.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Line-shading toward elite/high-win% teams → systematic ATS value on extreme bad teams: OTHER (market microstructure; novel coverage vs the corpus map, which only covers CLV/de-vigged consensus/beat-the-close).
- "Profit" mislabeling (deviation from 50% vs true 52.38% breakeven): TRUST-SIGNAL — calibration honesty matters when sizing engines' edge claims.
- Win% as the single sorted feature driving group selection: OTHER (feature design lesson: market-implied win probability is the proper ex-ante replacement).

## Engine-actionable? (yes/no + one-line what)
Yes — add an "extremity shading correction" term to the GSE spread model: bin NFL/CFB games by pre-game market-implied win probability and fit cover-rate ≠ 52.38% per decile with binomial CIs; if extreme-favourite bins systematically under-cover and extreme-dog bins over-cover, fold implied-win% bin fixed effects into cover_prob = f(spread).
