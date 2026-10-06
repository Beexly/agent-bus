# Fleet note: Kats multi-sport deep-dive + OpenDots Review Board (2026-10-06)

## Kats — revised verdict (multi-sport)

Owner corrected the football-only first pass. Deep-dive is repo-verified and on the Sports branch:
`docs/research/2026-10-05/kats-multisport-deepdive-2026-10-05.md` (branch `motif/kats-evaluation-2026-10-05`).

**Net:** MLB is Kats' best sport (162-game series, full suite), NBA/NHL the sweet spot (82), soccer fits via transfer-window changepoints + fixture-congestion regressors. NFL is the *weakest* forecasting fit and the *strongest* detection fit (intraday line series are long).

**ADOPT (priority order):** TSFeatures (per-sport config) → changepoint suite BOCPD/CUSUM/StatSig (cross-sport regime engine) → backtesters + empirical intervals (as-of-fenced walk-forward) → Prophet (only multi-seasonality model) → VAR/multivariate anomaly (cross-book lines, SGP edge) → harmonic regression (gappy series) → simulators (synthetic anomaly injection for detector testing).

**WATCH:** `globalmodel/` neural net, meta-learner framework (needs a built labeled corpus — quarter-scale asset).

**Hard gotchas (verified in source):** vendor, never `pip install` (numpy<1.22/pandas<=1.3.5 pins nuke the env); OutlierDetector silently does `asfreq("D")` + polynomial interpolation when freq can't be inferred — across an offseason it fabricates data, feed per-season series only; TSFeatures windowed groups return NaN on 17-game NFL series (use short-safe `selected_features`); backtest partitions must be season-aware (splitter enforces time order, doesn't know seasons).

**For builders:** the vendoring path means extracting `tsfeatures`, `detectors`, `utils/backtesters` + `datapartition` modules into the repo per the re-implementation rule. Prophet is optional (heavy Stan build); everything else on the ADOPT list doesn't need it.

## OpenDots — live on Motif's VM, keys pending

Server up at 127.0.0.1:4310 (host-native, no Docker on VM; computers + voice OFF at launch). Seeded: "GSE Signal Desk" + "Kit Closer" dots (both approval-walled), plus a **Review Board** space with four adversarial reviewer dots per owner's order ("best teammates on the best items"):

- **Merge Sheriff** — adversarial PR review: reads the actual diff, catches rename-not-remove, unrelated changes, missing test assertions, secrets.
- **Numbers Cop** — every number sourced, calibration honesty, point-in-time discipline, units-not-dollars, no lock language.
- **Voice Judge** — Garrett-human voice scoring with rewrites; hard-rejects suspended slogan.
- **Research Auditor** — citation verification, methodology checks, UNVERIFIED labeling.

Doctrine: they rule, they don't execute. Economics: review passes run on cheap OpenRouter flash models — near-free vs Grok/paid agents. Jules builds, dots review.

**Blocker:** needs owner's two taps — `INTELLIGENCE_API_KEY` (`npx copilotkit@latest login` + `project select`) and `OPENAI_API_KEY` in `~/workspace/opendots/.env`. Plan once live: daily scheduled PR sweep for the Sheriff; PR review via link (public) or pasted diff (private). Dot definitions kept at `~/workspace/opendots/seed-dots/`.

## Standing correction (owner, 2026-10-06)

Engine scope is multi-sport (NFL, NBA, MLB, NHL, soccer minimum). Time-series tooling and engine evaluations are mapped per sport by default — football-first evals are a bug, not a shortcut. Content focus (NFL/NCAA first) is a publishing priority, not an engine boundary.
