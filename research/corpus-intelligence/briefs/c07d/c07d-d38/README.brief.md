# dfs/research/2026-09-25/youtube-builder-research/README.md
## What it is (1-2 sentences)
An index/README for Garrett's 2026-09-25 independent-builder video research lane ("find other people like that Ethan guy"), mirroring the agent-bus handoff files into the Sports repo so all cloud agents share the corpus. It catalogs 10 files (video grading, datasets/APIs inventory, builder leads, indie-model dossiers, and multiple implementation handoffs) plus status notes.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — index file, no formulas. Status notes: the 39-link video grading completed 2026-09-25 in this corpus; the creator-pipeline lane (full-account scrape → transcribe → classify) was paused by Garrett ("forget jev for now").

## Data sources named
- `Beexly/agent-bus` (`inbox/from-motif/`) — handoff originals mirrored from here.
- Files listed: `sewer-dive-video-batch-2026-09-25.md` (39 YouTube/LinkedIn links graded: 25 batch-1 + 14 batch-2; LEARN / SKIP / FOLLOW-UP / BLOCKED-429 verdicts; transcripts were IP-blocked so verdicts rest on descriptions + web search, tagged DESCRIPTION / SEARCH / INFERENCE), `sewer-dive-datasets-apis-2026-09-25.md` (datasets/APIs inventory), `sewer-dive-new-builders-2026-09-25.md` (18 ranked second-wave builder leads), `indie-model-builders-dossier-2026-09-25.md` (15 builders ranked by plug-and-play value), `handoff-indie-builders-v2-fullspec-2026-09-25.md` and `handoff-indie-builders-v2b-fullspec-2026-09-25.md` (Tier-1 and builds 7–15 wiring handoffs), `handoff-ethandojo-nfl-builds-2026-09-25.md` and `handoff-ethandojo-nfl-builds-v2-fullspec-2026-09-25.md` (@ethandojo NFL builds; XGBoost recipe reverse-engineered from his content), `handoff-video-model-builds-v3-fullspec-2026-09-25.md` (18-build implementation handoff: V1–V8 video kernels, W1–W6 second-wave builders, D1–D4 data intake, plus 8-item follow-up queue), `excel-ladz-assessment-2026-09-25.md` (Excel LADZ model assessment).

## Findings (numbers and facts, not vibes)
- 39 links graded (25 batch-1 + 14 batch-2).
- Top kernels named from the video batch: ELO-leakage anti-pattern (GreenCode), seal-the-last-season holdout (rugby model series), YOLOv8 + optical-flow tracking pipeline.
- Top dataset picks from the companion inventory file: nflverse + nflreadpy (spine), cfbfastR (CFB gap), PropLine (prop settlement + Pinnacle-anchored no-vig lines), ESPN undocumented feeds (free keyless fallback), Open-Meteo + NWS (leakage-safe weather). Honest gap: no free historical Pinnacle open/close source found.
- Excel LADZ model facts: SOS-adjusted ratings, 12-game window, Bayesian prior blending, ~10% HFA, generalized-Poisson TDs, 5k Monte Carlo sims in Excel via Power Query (TeamRankings + PFR data). No published track record; workbook behind $27.50/mo Patreon — learn the method, don't take the file.
- v3 handoff structure: 18 builds total (V1–V8 video kernels: leakage probes, seal-last-season holdout, CV movement primitive, deterministic replay, model CSV contract, generalized-Poisson TD model, feature recipe, process checklist; W1–W6 second-wave builders: calibration gates, closing-line benchmark, ATS ablation, MIT anytime-TD, luck-neutralized EPA, WP event replay; D1–D4 data intake: PropLine, weather vintage, Sleeper, cfbfastR). Plus 8-item follow-up queue.
- Standing doctrine noted: all material is method-intake for re-implementation (learn from builders' methods, produce GSE's own output — never copied code).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The sealed-split / leakage-probe kernels (GreenCode ELO-leakage anti-pattern, seal-last-season holdout) are direct validation-hygiene inputs for the trust-target intake and calibration program — evidence gates only admit leakage-free signals.
- OTHER: YOLOv8 + optical-flow + perspective-transform CV tracking pipeline is the primitive for deriving NGS-like movement metrics from broadcast video — feeds the tracking lane (see evidence-first-intelligence-spine intake lane for NGS replacement).
- OTHER: The dataset inventory (nflverse spine, PropLine no-vig lines, Open-Meteo/NWS vintage weather, cfbfastR) feeds total-signal intake — D1–D4 data intake wiring.
- OTHER: @ethandojo's reverse-engineered XGBoost recipe and the 18-build handoff feed engine wiring backlog; generalized-Poisson TD models feed props/anytime-TD modeling.

## Engine-actionable? (yes/no + one-line what)
Yes — this index maps the 10-file companion corpus; the v3 18-build handoff and the datasets/APIs inventory are the actionable intake targets (PropLine settlement lines, weather vintage join, seal-last-season holdout adoption).
