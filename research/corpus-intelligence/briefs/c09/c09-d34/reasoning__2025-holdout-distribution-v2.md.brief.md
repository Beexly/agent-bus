# reasoning/2025-holdout-distribution-v2.md
## What it is (1-2 sentences)
Machine-generated audit of the 2025 NFL season game-probability holdout: for each of 285 games (weeks 1–18 plus playoffs, weeks 19–22), it records the pregame-context probability from `data/gse-dataset/bridge-premises.jsonl` and classifies the evidentiary status of that single probability per game.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas; the classification rule is qualitative: a single probability source is not agreement, not a cause, and not a pick)
## Data sources named
`data/gse-dataset/bridge-premises.jsonl` (the bridge file; supplied one pregame-context probability per game, sample_count 6955 on 2025 week-1 games, e.g. 0.8507 for 2025_01_DAL_PHI). `home_win` explicitly noted as NOT an input.
## Findings (numbers and facts, not vibes)
- Conclusion counts over 285 games: INSUFFICIENT = 0, WITHHELD = 0, ASSOCIATION_ONLY = 285 (i.e., every game).
- Reason for ASSOCIATION_ONLY on all 285: one probability source — "Not agreement, not a cause, and not a pick."
- Per-game rows list game_id, conclusion, sources (=1 for all), summary probability, withheld reasons (empty).
- Extreme single-source probabilities recorded: highest 2025_18_ARI_LA 0.8725, 2025_04_NO_BUF 0.8823, 2025_08_TEN_IND 0.8763; lowest 2025_12_SEA_TEN 0.1894, 2025_03_GB_CLE 0.2386, 2025_13_LA_CAR 0.2461, 2025_06_PHI_NYG 0.2466, 2025_17_SEA_CAR 0.2478.
- INFERENCE: the file treats these probabilities as unusable for pick decisions without independent corroboration.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — engine calibration/causal-honesty governance: a single pregame probability per game is insufficient evidence for a publishable pick; agreement requires multiple independent sources.
## Engine-actionable? (yes/no + one-line what)
Yes — enforce the "no single-source picks" gate in the aggregation layer: a game-probability signal without independent corroboration stays ASSOCIATION_ONLY, never becomes a published pick.
