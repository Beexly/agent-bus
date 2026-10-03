# arxiv-program/research/2026-09-21/arxiv-deep/1709-stadium-grass-heating-cps.md
## What it is (1-2 sentences)
A full-text read of Schmidt et al. (NEC Laboratories Europe, 2018), arXiv:1807.05059, on a data-driven cyber-physical system controlling under-soil grass heating at Frankfurt's Commerzbank Arena across the winters of 2013/14–2015/16. Verdict in the ledger: ADAPT — the heating-degree-day (HDD) weather-normalization technique with median-based bootstrap inference is portable for comparing team/stadium performance across weather regimes, and the air-temperature-dominance finding is direct feature-selection evidence; the CPS/control machinery itself does not transfer.

## Key metrics/methods (formulas where given, else "not specified")
- Heating degree days: HDD = max(T_HDD,base − T̄_external, 0), with T_HDD,base = 7°C (German standard; equals the system's activation threshold)
- Weather-normalized energy: Q_grass,HDD7 = Q_grass/HDD; zero-HDD days excluded
- Medians (not means) used for robustness; Student-t CIs when Shapiro-Wilk passes, else bootstrap percentile with 10,000 replicates
- Under-Performance Ratio (UPR) = fraction of time T_root below minimum
- Seven control strategies tested (reactive → predictive → context-aware)
- MLP vs Deep Belief Network for 6-hour T_root trajectory prediction (36 steps), with and without perfect weather forecast, 5-fold CV, grid-searched hyperparameters
- Assumes daily-mean-temp HDD represents the relevant thermal forcing given soil thermal inertia; event-independence via 6 h cooling/heating histories

## Data sources named
- Building-management-system (BMS) data at 10-min resolution since Aug 2013 (~13,500 variables; relevant: T_root at 15 cm depth, T_external, supply set-point T_Gset, heating indicator HDI, energy Q_grass); Commerzbank Arena, Frankfurt; winters 2013/14–2015/16
- Frankfurt airport weather forecasts
- Heating/cooling events defined by 6 h uniform histories (87 activation events under the strict definition)
- Prior literature cited: daily-mean air temperature is the dominant meteorological variable for soil temperature; solar radiation, humidity, wind, precipitation play minor roles
- Code: Python/Theano implementations described, not shared; BMS data proprietary; no public dataset

## Findings (numbers and facts, not vibes)
- 66% savings of median daily weather-normalized energy (95% CI) in winter 2014/15 vs the 2013/14 status-quo baseline (795 MWh) → 775 MWh / 148 t CO₂ per average heating season
- Predictive nighttime heating at a lowered target band reached 85% savings → 1 GWh / 197 t CO₂ in 2015/16, with target temperatures still met
- Grass heating consumed up to 50% of the arena's peak thermal supply (the bottleneck motivating the work)
- DBN beat MLP by < 0.1 K; best 6-hour point RMSE 0.4 K with uniform cooling history
- Weather-forecast input gave only small gains (delayed T_external impact on soil due to thermal inertia)
- Target bands: 12–14°C (2014/15, 2 K safety margin) → 10–12°C (2015/16)
- Prior-literature feature-selection evidence: daily-mean air temperature DOMINATES soil temperature; solar radiation, humidity, wind, precipitation are minor — proposed as GSE's feature-selection rule for surface/field-condition models: lead with air temperature, treat solar/humidity/wind/precip as secondary
- Acceptance gate stated: ADOPT weather-normalized medians in the team-rating pipeline if normalization changes ≥ 10% of team-season EPA rankings by ≥ 2 places AND bootstrap CIs are tighter than raw-mean CIs on average; REJECT if rankings barely move
- Improvement experiment proposed: combine with 1703 (lagged precipitation effects) — build a weather-normalized EPA+ metric where each game's EPA is divided by a fitted weather-severity index (cold + wind + precip terms, coefficients from 1703-style mixed model), then test whether weather-normalized EPA predicts next-game spread cover better than raw EPA (2024 holdout, logistic regression); hypothesis: normalized EPA adds 1–2 pp accuracy on outdoor games
- Limitations flagged: hyperparameters grid-searched "on the test set" (test-set tuning — leakage); single stadium; no soil-humidity sensing; energy-regression on events unsatisfactory (omitted); HDD base-temperature choice is use-case-specific and degree-day stats are fragile near the threshold (authors' own warning)
- Complements ledger 1699: 1699 did a raw before/after, this paper supplies the normalization machinery for fair before/after across weather regimes

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The HDD-style weather-severity normalization (Cold-Degree-Days below 40°F, Wind-Exposure = Σ max(wind−12,0), Precip-Flag days) applied to team EPA produces a weather-normalized efficiency signal whose ranking moves ≥ 3 places flag teams as weather-artifacts in current ratings — serves the trust-target intake by separating genuine team strength from weather-noise, so the engine down-weights spurious "cold-weather team" narratives.
- OTHER: Median-with-bootstrap-95%-CI (10k replicates, percentile method) reporting replaces raw means whenever comparing team efficiency across seasons or before/after a change (rule, coordinator, stadium) — serves the calibration/sizing program by tightening uncertainty estimates and changing ≥ 10% of team-season rankings by ≥ 2 places if weather confounding is material.
- OTHER: The air-temperature-dominance finding is direct feature-selection evidence for the engine's weather/totals lane: lead surface and field-condition models with air temperature and treat solar/humidity/wind/precip as secondary features — reduces feature dimensionality with literature backing.
- QB-BEHAVIOR: UNCERTAIN — the paper contains nothing about QB behavior directly; the only plausible connection is that weather-normalized team EPA strips weather noise from the team-strength signal feeding QB contextual adjustments, but this is INFERENCE, not a file finding.

## Engine-actionable? (yes/no + one-line what)
Yes — add `weather/normalize.py` with HDD-analog weather-severity indices and median-bootstrap 95% CIs for cross-weather team comparisons, gated on ≥ 10% of team-season EPA rankings moving ≥ 2 places.
