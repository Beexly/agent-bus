# dfs/research/2026-09-25/youtube-builder-research/README.md
## What it is (1-2 sentences)
Index README for Garrett's independent-builder research lane (Sept 25): an 11-file inventory of YouTube/LinkedIn link grading, datasets/APIs, builder dossiers, and fullspec wiring handoffs for independent modelers (incl. @ethandojo's XGBoost recipe), all oriented to "learn the method, re-implement as GSE's own output."
## Key metrics/methods (formulas where given, else "not specified")
Not specified for this index file — it inventories files. Notable methods referenced in the inventoried files: Excel LADZ model (SOS-adjusted ratings, 12-game window, Bayesian prior blending, ~10% HFA, generalized-Poisson TDs, 5k Monte Carlo sims in Excel); 18-build V1–V8/W1–W6/D1–D4 handoff (leakage probes, seal-last-season holdout, CV movement primitive, deterministic replay, generalized-Poisson TD model, calibration gates, closing-line benchmark, ATS ablation, MIT anytime-TD, luck-neutralized EPA, PropLine, weather vintage, Sleeper, cfbfastR).
## Data sources named
nflverse + nflreadpy (spine), cfbfastR (CFB gap), PropLine (prop settlement + Pinnacle-anchored no-vig lines), ESPN undocumented feeds (free keyless fallback), Open-Meteo + NWS (leakage-safe weather). Honest gap noted: no free historical Pinnacle open/close source found.
## Findings (numbers and facts, not vibes)
- 11 files inventoried covering: 39-link video grading (LEARN/SKIP/FOLLOW-UP/BLOCKED-429), datasets/APIs, 18 ranked second-wave builder leads, 15 independent builders ranked by plug-and-play value, tier-1 and tier-2 fullspec wiring handoffs, @ethandojo NFL build handoffs (XGBoost recipe reverse-engineered), 18-build v3 implementation handoff, Excel LADZ assessment.
- Status: the 39-link grading completed 2026-09-25; the creator-pipeline lane was paused by Garrett ("forget jev for now").
- Standing doctrine: learn methods from builders, re-implement as GSE's own output, MIT-with-attribution only, never copied code.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Method-intake/re-implementation doctrine as the governing rule — OTHER (research program governance)
- PropLine + Pinnacle-anchored no-vig lines as props data spine — TRUST-SIGNAL
- Weather vintage + Sleeper + cfbfastR as data intake builds — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — routes the implementer to the fullspec handoff files (tier-1 builds 1–6, tier-2 builds 7–15, ethandjojo XGBoost recipe, 18-build v3 spec) for wiring; intake only, no builds done here.
