# reasoning/narrative-cross-validation-2026-09-27.md
## What it is (1-2 sentences)
Two independent agent lanes (snap-weighted vs. player-slot-weighted constructions) measured the same `narrative_contract` feature — mean team APY (contract intensity) gap — against home wins, and both cleared the honesty bars on a 2025 holdout, converging on verdict STORED, g=0.2, winning term f3. This cross-validation promoted narrative_contract from DARK (16 failed attempts) to a measured signal, with lane B's player-slot construction declared canonical.
## Key metrics/methods (formulas where given, else "not specified")
Feature: mean APY gap between teams. Lane A (snap-weighted, snaps joined to rosters): training r=0.23071486948840408; holdout (n=285) r=0.24637068951161498, slope=0.8304928047049019, se=0.19420308361768532. Lane B (player-slot weighted via `players_on_field` + jersey-number-to-gsis crosswalk): training r=0.31023913820488336; holdout r=0.1511247312921503, slope=0.03416118167229238, se=0.013282727356504953. Both: |r|>=0.08 and |slope|>se clear; training rows n=1942; verdict STORED, g=0.2, f3. Honest-bar context: this same family was DARK on 16 recorded attempts the night before (engine-dashboard.md).
## Data sources named
nflverse participation (`players_on_field`), snap counts, rosters, contracts; 2025 holdout scored by coefficients fitted on 2018-2024 only. Lane B resolved 7,800,652 of 7,952,525 player slots (98.09%) to contract+team via the crosswalk.
## Findings (numbers and facts, not vibes)
- Both lanes agree on direction: **negative**, i.e., higher-contract-intensity teams (more $ on field) lose more often as the home team — LAC@BUF pair: LAC mean APY 7.51 (3,370 snaps) vs BUF 10.66 (3,552 snaps), signed gap -0.2204; at the 0.03 prior this pulls the LAC edge DOWN, not up. Neither lane found a construction favoring LAC.
- Magnitude is unstable: slope 0.83 vs 0.034 (factor of 24) depending on weighting — the honest reading is that the effect is real out-of-sample but magnitude depends on construction; scalarizer applies g=0.2 not g=0.
- Lane B's crosswalk made early seasons usable: before it, `players_on_field` was jersey numbers (2018-2022) vs GSIS ids (2023-2025), capping all-season personnel numbers near 0.38.
- Neither lane wrote a registry row: parts-registry stays at 8 rows; LAC edge recomputes to exactly 0.30259224777263855; on 2026_03_ATL_GB (the one published 2026 week-3 game) selectPart returns LIVE, g=0.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the strongest honest-measurement artifact in the batch — two independent lanes, different joins, different n, same verdict; refuses to pick the larger magnitude; records magnitude disagreement as a measurement property, not a license.
- OTHER: contract-intensity (mean APY gap) is a team-resource signal; direction (expensive team underperforms as home favorite) is a fade-the-payroll lean with cross-validated out-of-sample support.
- COACHING: not directly a coaching signal, but roster-construction (who gets paid) is a front-office signal orthogonal to on-field coaching.
## Engine-actionable? (yes/no + one-line what)
Yes — lane B's player-slot-weighted mean-APY-gap construction (98.09% slot resolution via jersey-to-gsis crosswalk) is cleared for wiring as a STORED part with g=0.2 once a week-3 row exists, with the direction documented (pulls the LAC edge down, not up).
