# fable/demo/DEMO_DATA_DICTIONARY.md

## What it is (1-2 sentences)
A field-level data dictionary for fable's fixture-only demo surface: 7 fields describing synthetic fixture records used by a forensic report. The fixture is deliberately small so it can be reviewed in GitHub, and every data-bearing field is explicitly synthetic or fixture text.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas, metric definitions, or computation methods are given. The dictionary is purely descriptive.

## Data sources named
None named as real sources. The dictionary explicitly labels: `source_id` = "Source registry id used for legal posture"; `source_freshness` = "Fixture text describing freshness posture"; `market_open_probability` = "Synthetic market-open probability"; `current_model_probability` = "Synthetic current model probability"; `event_timestamp` = "Synthetic event time."

## Findings (numbers and facts, not vibes)
- Exactly **7 fields** documented: `fixture_id`, `source_id`, `source_freshness`, `market_open_probability`, `current_model_probability`, `event_timestamp`, `features`.
- **0 real data values**: all 3 probability/time fields are explicitly synthetic; `source_freshness` is "fixture text"; `source_id` exists for "legal posture" (i.e., compliance signaling, not a live source).
- `fixture_id` is a "Stable id for the fixture-only demo" — the demo identity layer is deterministic.
- `features` = "Derived fixture features used by the forensic report" — the demo pipeline does include a feature-derivation step feeding a forensic report, but on fixture inputs only.
- INFERENCE: This dictionary corroborates blocker #10 in BLOCKERS.md (public demos must remain fixture-only until approved data and source freshness are proven) — the fixture-only posture is load-bearing across the fable demo surface, and the `source_*` fields are legal-posture theater on synthetic data, not live provenance.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The demo's provenance fields (`source_id`, `source_freshness`) are fixture placeholders — any demo output citing them as live provenance would be misleading; verification of claims must ignore demo-surface "freshness" signals.
- OTHER: Forensic-report pipeline shape (fixture → derived features → report) documented; useful as the expected demo artifact structure for QC review.

## Engine-actionable? (yes/no + one-line what)
yes — Never ingest demo-surface probabilities (`market_open_probability`, `current_model_probability`) as real signals; they are synthetic by definition, and demo forensic reports carry no weight in model evaluation.
