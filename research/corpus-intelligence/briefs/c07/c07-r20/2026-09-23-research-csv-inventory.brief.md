# engine/research/misc/2026-09-23-research-csv-inventory.md
## What it is (1-2 sentences)
A 2026-09-23 inventory of research CSVs from the wire-nfl-mlb pass, splitting them into already-wired fair-value sources (with exact file/function pointers) vs. six unused high-value NFL Week 2/3 CSVs, plus the wiring rule: no CSV becomes a fair-value source without a calibrated mapping to win probability.
## Key metrics/methods (formulas where given, else "not specified")
- Wired: `powerRatingsToIndependentFairValue` (6-source mean of FPI / nfelo / Inpredictable / Unexpected Points / FTN DVOA / PFF, points-vs-average composite) in `packages/prediction-engine/src/power-ratings-fair-value.ts`, provenance `research_power_ratings`; `winPctVsAverageToIndependentFairValue` (market-implied tiers, caller-supplied `teamrankings` provenance); MLB late-week: `standingsWinPctToIndependentFairValue` / `standingsWinPctToWinProbs` in `packages/prediction-engine/src/standings-strength.ts` (Bradley-Terry / logit + HFA, source label `mlb_standings`).
- Rule: descriptive team rates (explosive play, PROE, series results) belong in the factor/signal layer, not the independent blend; keep provenance labels distinct per corpus so the ensemble de-duplicates.
- Skellam/Poisson cover path already present in engine. No new formulas given.
## Data sources named
SamHoppen composite power ratings, benbbaldwin objective power ratings, MLB standings win%, GridironInfo series results / first-downs-by-down / avg drive start position; engine modules above; unused CSVs live in `docs/research/2026-09-22/full-tables/`.
## Findings (numbers and facts, not vibes)
- Six unused high-value NFL Week 2/3 CSVs named with wiring reasons: `samhoppen-explosive-play-rates-week2-partial.csv` (needs calibrated mapping), `samhoppen-epa-per-drive-tiers-week2-partial.csv` (would double-count vs already-wired power ratings), `samhoppen-proe-leaders-week2-partial.csv` (PROE already modeled as signal A8 in `signals/tactical/early-down-pass-rate-momentum.ts` — leave as signal), `gridironinfo-series-results-week2-partial.csv` (totals, not ML), `gridironinfo-first-downs-by-down-week2-partial.csv` (descriptive), `gridironinfo-avg-drive-start-position-week2-partial.csv` (hidden-yardage prior, small).
- MLB late-week fair-value path is CLOSED/already live — no new work required.
- Power-ratings path is NFL-oriented in practice (`NFL_NAME_TO_ABBR`) but sport-keyed math; no MLB extension needed for late-week fair values.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- PROE as a play-calling aggressiveness residual already wired as signal — SCHEME.
- Explosive-play differential as team-strength residual candidate — SCHEME.
- Hidden-yardage / field-position prior — OTHER (totals features).
- No QB-BEHAVIOR, COACHING, OL, or TRUST-SIGNAL content.
## Engine-actionable? (yes/no + one-line what)
Yes — six unused Week 2/3 CSVs with exact file pointers and wiring blockers; a builder can pick them up using the stated rule (calibrated win-prob mapping first, descriptive rates to the signal layer).
