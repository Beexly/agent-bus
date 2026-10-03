# arxiv-program/research/2026-09-21/arxiv-deep/0555-are-penalty-shootouts-better-than-a.md
## What it is (1-2 sentences)
Hypothesis-testing study of all 268 UEFA club-competition penalty shootouts (2000/01–2025/26): two-sided binomial tests plus Elo-strength logistic regressions ask whether kicking order, venue, psychological momentum, or team strength predict the winner — concluding shootouts are "equivalent to a perfect lottery." Ledger verdict: ADAPT — the binomial + Elo-logistic protocol should be run on NFL overtime before GSE builds any OT feature.
## Key metrics/methods (formulas where given, else "not specified")
- Two-sided binomial tests: X ~ Binomial(n, 0.5); two-sided p-values; 95% CI bands around 50%.
- Logistic regression: P(win) = 1/(1 + exp(−(β_0 + β_1 · strength_diff + β_2 · venue))), following Wunderlich et al. 2020.
- Momentum proxy: which team scored the last goal; venue: mild (nominal home) and strict (proper two-legged home) definitions; strength: Football Club Elo Ratings (authors prefer Elo to betting odds, citing odds biases).
- Robustness: all tests repeated on first-20-season vs last-6-season subsamples; 26 rolling-window logistic regressions starting in each season.
## Data sources named
All 268 penalty shootouts in UEFA club competitions (Champions League, Europa League, Conference League incl. qualifiers), 2000/01–2025/26; 139 of 268 (51.9%) in the last six seasons (COVID one-legged qualifiers 2020/21, abolition of the away-goals rule, new Conference League). Strength from Football Club Elo Ratings. UEFA match records public; compiled 268-shootout dataset not linked. No code released.
## Findings (numbers and facts, not vibes)
- None of the five binomial tests (first-mover, home-mild, home-strict, momentum ×2) is significant even at the 10% level (Figure 3, Table A.1).
- Team-strength null: favorites with ≥100 Elo points more than the opponent fail to win 50% of shootouts (Figure 4, Table A.2) — directly contradicting Arrondel et al. 2019, Krumer 2020, Wunderlich et al. 2020, Pipke 2025, who found ~20pp advantages and ≤60% win prob for strong favorites in broader domestic-cup-heavy samples.
- Logistic regressions: venue and strength coefficients insignificant regardless of strength measure; rolling-window estimates stable.
- Sole exception: 2020–2025 one-legged matches, home teams won only 7 of 20 (35%), significant below 50% at the 10% level — attributed to choking under pressure (Harb-Wu & Krumer 2019); disappears under the strict venue definition. Note: with ~268 observations and 26 rolling specifications, this blip is multiple-comparison noise [INFERENCE].
- Author caveats: logistic regressions are in-sample and may overfit; n=268 is small for detecting modest effects (a true 55% first-mover edge has limited power); homogeneous elite-vs-elite sample is both the innovation and the limitation.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Null results across all five tiebreak tests (n=268) → [COACHING] high-leverage tiebreaks can be pure noise; do not price coach "clutchness" into picks without evidence.
- Elite-vs-elite homogeneity erased all strength effects → [OTHER] caution for NFL postseason OT: small-gap games may carry no exploitable edge — test before encoding.
- The single 7/20 one-legged home blip (10% significance, one subsample of 26 specs) → [TRUST-SIGNAL] marginal blips across many specs are multiple-comparison noise, not an edge.
- Method template (binomial on toss/first-possession win rates + Elo-strength logistic regressions) → [OTHER] the exact protocol to run on NFL OT before wiring any OT feature.
## Engine-actionable? (yes/no + one-line what)
Yes — run the identical binomial + Elo-logistic protocol on nflverse 2012–2025 OT games (first-possession win rate, toss winner, Elo-diff bins, playoff vs regular-season split) and only encode an OT edge if first-possession differs from 50% at 5% significance after controlling for Elo.
