# fable/demo/PUBLIC_DATA_FORENSIC_REPORT.md
## What it is (1-2 sentences)
A 2026-07-03 forensic-report spec proving the FABLE public-data demo is reproducible from a checked-in NFL fixture — computing a model-vs-market probability delta with explicit uncertainty flags and explicit non-claims.

## Key metrics/methods (formulas where given, else "not specified")
- Probability delta definition: `abs(current_model_probability - market_open_probability)`. Fixture values: `abs(0.59 - 0.48) = 0.11`.
- Command: `npm run fable:demo`; fixture path docs/fable/demo/fixture-public-forensic.json; fixture identity `fixture-nfl-public-001`.
- Falsification rules: change fixture probabilities → delta must change deterministically; remove required fields → schema parsing must fail; add live-source claims without evidence → `npm run fable:claims` fails.
- Live-public mode requires: `GSE_FABLE_LIVE_PUBLIC_DEMO_ENABLED=true`, approved public source list, source-rights registry entry, no secrets in logs, network-safe fetch, replayable output, owner approval. Current setting: `GSE_FABLE_LIVE_PUBLIC_DEMO_ENABLED=false`.

## Data sources named
- Checked-in fixture docs/fable/demo/fixture-public-forensic.json (synthetic); no live scraping, no proprietary data, no keys, no paid provider calls.

## Findings (numbers and facts, not vibes)
- Exact fixture output: `probability_delta: 0.11`, `uncertainty_flag: true`, gse_flags = ["model-market probability disagreement", "public event timing changed after market open", "depth chart instability requires review"], would_not_claim = ["betting edge", "prediction superiority", "live market accuracy", "official tracking-data equivalence"].
- What the demo proves: fixture parses, delta computes as expected, output carries uncertainty + explicit non-claims, public event timing and depth-chart instability can be represented as review flags.
- What it does not prove: live market accuracy, model improvement, data rights for any live source, live feed freshness, official tracking-data equivalence, production deployment.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration/honesty machinery — the probability-delta-vs-market-open metric and explicit would-not-claim list are directly applicable to engine confidence reporting and calibration tracking (e.g., flag "model-market probability disagreement" as a review signal for QB props).

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the `abs(model_prob - market_open_prob)` delta + explicit non-claim pattern as the engine's honest calibration/disagreement reporting standard.
