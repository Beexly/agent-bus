# arxiv-program/research/2026-09-21/arxiv-deep/0045-transforming-football-data-into-objectcentric-event.md
## What it is (1-2 sentences)
Deep read of Chan et al. (2025, arXiv:2507.12504v1): a process-mining framework paper transforming soccer tracking + event data into object-centric event logs (OCEL) with a spatial grid dimension. Verdict in file: REJECT — no predictive model, no quantitative results, no path to betting-relevant quantities.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no mathematical models or equations; the contribution is a data-transformation schema (3 event classes: game-based, ball, position-based; 6 object types: match, team, possession, player, grid position, ball; 6×4 = 24 grid cells A1–F4).
## Data sources named
Metrica Sports public sample data: 3 matches of 25 Hz tracking; only 2 used → 37,358 events, 813 objects, 747 possessions. Code: https://github.com/VitoChan01/Soccer.
## Findings (numbers and facts, not vibes)
- Pipeline: reproject traces to grid (Pandas) → event engineering → merge movement + game events → enrich (travel distance, durations, score) → OCEL via PM4Py.
- Results are entirely qualitative: directly-follows graphs on 4 goal possessions (e.g., "set piece activities are always followed by playing a pass") and one spatial instance map (possession AA156: recovery at B3, shot at F2); authors themselves flag likely data errors ("a recovery activity leading to an out ball and, subsequently, a goal… likely caused by erroneous data").
- Zero quantitative metrics, no baseline comparison, soccer only, workshop paper (OBJECTS 2025).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: distant conceptual curiosity only — the object-centric possession representation could inspire a sequence-mining representation of NFL drives, but the paper gives no method for extracting predictive signal from such logs.
## Engine-actionable? (yes/no + one-line what)
no — nothing to implement: no model, no parameters, no prediction target.
