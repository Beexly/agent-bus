# arxiv-program/research/2026-09-21/arxiv-deep/1709-stadium-grass-heating-cps.md
## What it is (1-2 sentences)
A cyber-physical-systems paper (Schmidt et al., NEC Labs Europe, arXiv:1807.05059) on energy-efficient under-soil grass heating at Frankfurt's Commerzbank Arena, achieving 66–85% energy savings across three winters of live experiments. GSE value: the heating-degree-day (HDD) weather-normalization technique with median-based bootstrap inference is a portable, principled way to compare team/stadium performance across different weather regimes — the CPS control machinery itself does not transfer.
## Key metrics/methods (formulas where given, else "not specified")
- HDD = max(T_HDD,base − T̄_external, 0), T_HDD,base = 7°C; weather-normalized energy Q_grass,HDD7 = Q_grass/HDD; zero-HDD days excluded.
- Medians (not means) for robustness; Student-t CIs when Shapiro-Wilk passes, else bootstrap percentile with 10,000 replicates.
- Under-Performance Ratio (UPR) = fraction of time T_root below minimum; events defined by 6 h uniform histories (87 activation events).
- MLP vs Deep Belief Network for 36-step T_root trajectory prediction, with/without weather forecast, 5-fold CV; grid-searched hyperparameters (on the test set — noted flaw).
## Data sources named
BMS data at 10-min resolution since Aug 2013 (~13,500 variables; T_root at 15 cm, T_external, supply set-point, heating indicator, energy Q_grass); Frankfurt airport weather forecasts; Commerzbank Arena winters 2013/14–2015/16; 2013/14 status-quo baseline (795 MWh). No public dataset or code.
## Findings (numbers and facts, not vibes)
- 66% savings of median daily weather-normalized energy (95% CI) in winter 2014/15 → 775 MWh / 148 t CO₂ per heating season; predictive nighttime heating at lowered target band reached 85% → 1 GWh / 197 t CO₂ in 2015/16, with target temperatures still met.
- Grass heating consumed up to 50% of the arena's peak thermal supply.
- DBN beat MLP by < 0.1 K; best 6-hour point RMSE 0.4 K with uniform cooling history; weather-forecast input gave only small gains (delayed T_external impact on soil).
- Prior literature: daily-mean air temperature is the DOMINANT meteorological variable for soil temperature; solar radiation, humidity, wind, precipitation play minor roles.
- Target bands: 12–14°C (2014/15, 2 K safety margin) → 10–12°C (2015/16).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: weather-normalized medians with bootstrap 95% CIs is a fairer, more honest basis for cross-season/before-after team comparisons than raw means; teams whose ranking moves ≥3 places under normalization are weather-artifacts in current ratings (INFERENCE from the spec's design).
- OTHER: air-temperature-dominance finding is direct feature-selection evidence for GSE's surface/field-condition and weather models (lead with air temp, treat solar/humidity/wind/precip as secondary); complements 1699's raw before/after with the normalization machinery for fair before/after across weather regimes.
## Engine-actionable? (yes/no + one-line what)
Yes — add weather-severity normalization (Cold-Degree-Days below 40°F, wind-exposure sums, precip flags) and median-bootstrap CIs to the team-rating pipeline, adopting only if normalization moves ≥10% of team-season EPA rankings by ≥2 places.
