# engine/research/misc/2026-09-23-research-csv-inventory.md
## What it is (1-2 sentences)
A 2026-09-23 inventory of research CSVs from the wire-nfl-mlb pass, tracking which have been wired into independent fair values and which are unused, with named file pointers so a later task can pick each up without re-discovery. Everything is either already wired or named with its location — no stubs.

## Key metrics/methods (formulas where given, else "not specified")
- Wired fair-value module: `packages/prediction-engine/src/power-ratings-fair-value.ts` (`powerRatingsToIndependentFairValue`, `winPctVsAverageToIndependentFairValue`), provenance labels `research_power_ratings`, `teamrankings`.
- MLB late-week path: `packages/prediction-engine/src/standings-strength.ts` (`standingsWinPctToIndependentFairValue`, `standingsWinPctToWinProbs`) converting standings win% to independent ML fair values via "Bradley-Terry / logit + HFA", source label `mlb_standings`. Skellam/Poisson cover path already present in engine.
- 6-source power-rating mean named: FPI / nfelo / Inpredictable / Unexpected Points / FTN DVOA / PFF.
- Wiring rule: "Do not wire a CSV as a fair-value source until it has a calibrated mapping to a win probability (the power-ratings module is the template). Descriptive team rates (explosive, PROE, series results) belong in the factor/signal layer, not the independent blend. Keep provenance labels distinct per corpus so the ensemble can de-duplicate."
- No formulas, no R²/p-values/accuracy figures in this file — it is an inventory, not a methods doc.

## Data sources named
- SamHoppen composite power ratings (points-vs-average); benbbaldwin objective power ratings (win% vs avg); MLB standings win% logistic.
- 6 power-rating constituents: FPI, nfelo, Inpredictable, Unexpected Points, FTN DVOA, PFF.
- Unused CSVs under `docs/research/2026-09-22/full-tables/` (index: `README.md`): `samhoppen-explosive-play-rates-week2-partial.csv`, `samhoppen-epa-per-drive-tiers-week2-partial.csv`, `samhoppen-proe-leaders-week2-partial.csv`, `gridironinfo-series-results-week2-partial.csv`, `gridironinfo-first-downs-by-down-week2-partial.csv`, `gridironinfo-avg-drive-start-position-week2-partial.csv`. Same inventory pattern applies to other Week-2 tables in that directory's README; composite power ratings CSVs are the ones already consumed.

## Findings (numbers and facts, not vibes)
### Wired into independent fair values
- SamHoppen composite power ratings (points-vs-average) → `powerRatingsToIndependentFairValue` in `packages/prediction-engine/src/power-ratings-fair-value.ts`; 6-source mean (FPI / nfelo / Inpredictable / Unexpected Points / FTN DVOA / PFF); provenance `research_power_ratings`.
- benbbaldwin objective power ratings (win% vs avg) → same file (`winPctVsAverageToIndependentFairValue`); market-implied tiers; provenance caller-supplied (`teamrankings` / research label).
- MLB standings win% logistic → `standings-strength.ts` (`standingsWinPctToIndependentFairValue`); "This is the MLB late-week fair-value path"; source default `mlb_standings`; already live for late-week MLB independent ML fair values.
### Unused research CSVs (high-value, NFL Week 2/3)
- `samhoppen-explosive-play-rates-week2-partial.csv` → explosive-play differential as a team-strength residual (spread/total feature). Not wired: team-level rate, not a direct win-prob scale; needs a calibrated mapping before it can be a fair-value source.
- `samhoppen-epa-per-drive-tiers-week2-partial.csv` → EPA/drive net tier as a second efficiency rating scale. Not wired: same family as power ratings already wired; wiring would double-count unless the ensemble treats it as a separate source with its own provenance.
- `samhoppen-proe-leaders-week2-partial.csv` → PROE as a play-calling aggressiveness residual. Not wired as fair-value source: already modeled in `signals/tactical/early-down-pass-rate-momentum.ts` (Factor A8) as a signal, not a fair-value source; "Leave as signal."
- `gridironinfo-series-results-week2-partial.csv` → drive-anatomy outcome mix (TD / first down / FG / punt / TO) as a scoring-environment feature. Not wired: descriptive, not a rating; feeds totals work, not ML fair values.
- `gridironinfo-first-downs-by-down-week2-partial.csv` → down-level conversion profile. Same: descriptive feature, not a rating scale.
- `gridironinfo-avg-drive-start-position-week2-partial.csv` → hidden-yardage / field-position prior. Small, situational.
### MLB late-week fair-value path: CLOSED (already live)
- No new work required. `standingsWinPctToIndependentFairValue` / `standingsWinPctToWinProbs` in `standings-strength.ts` convert standings win% to independent ML fair values (Bradley-Terry / logit + HFA), source label `mlb_standings`. Power-ratings path is NFL-oriented in practice (`NFL_NAME_TO_ABBR` in the consumer) but the math is sport-keyed and does not need an MLB extension for late-week fair values. Skellam/Poisson cover path is separate and already present in the engine.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING (calibration/sizing lane): PROE as a play-calling aggressiveness residual is explicitly kept in the factor/signal layer (`signals/tactical/early-down-pass-rate-momentum.ts`, Factor A8) rather than the fair-value blend — this is the coaching-tendencies intake pattern: aggressiveness signals adjust situational edges, they do not become independent fair-value sources. Serves the coaching-tendencies program.
- OTHER (engine-wiring lane): the inventory draws a hard architectural line that governs the wiring backlog: fair-value sources require a calibrated mapping to win probability (power-ratings module is the template); descriptive team rates (explosive-play rate, EPA/drive tiers, series results, first-down-by-down profiles, drive-start position) belong in the factor/signal layer. The EPA/drive CSV is a double-counting trap — same family as the already-wired power ratings, so wiring it needs its own provenance label or the ensemble de-duplicates. Directly serves the engine wiring/weighting backlog.
- OTHER (trust/signal provenance): "Keep provenance labels distinct per corpus so the ensemble can de-duplicate" — the provenance discipline (`research_power_ratings`, `teamrankings`, `mlb_standings`) is how the trust-target intake de-duplicates sources; any new wired CSV must carry a distinct provenance label.
- UNCERTAIN: the 2026-09-23 file dates are NFL Week 2/3 CSVs; whether later weeks' CSVs exist or were wired is outside this file's scope — treat "unused" as of 2026-09-23, not current state.

## Engine-actionable? (yes/no + one-line what)
Yes — unused CSVs in `docs/research/2026-09-22/full-tables/` each have a named target layer (explosive-play differential → spread/total feature; EPA/drive tier → separate fair-value source with distinct provenance; series-results mix → totals feature); the blockers are calibrated win-prob mappings and provenance labels, not discovery.
