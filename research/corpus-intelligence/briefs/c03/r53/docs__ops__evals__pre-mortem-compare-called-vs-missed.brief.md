# docs/ops/evals/pre-mortem-compare-called-vs-missed.md
## What it is (1-2 sentences)
Acceptance eval (status: pending-runner) for the pre-mortem comparator `comparePreMortem({bullets, rootCause, lessonTags})`: it maps an authored LossAutopsy's root cause back onto the published pre-mortem bullets via a `ROOT_CAUSE_TO_FACTORS` table, tagging each bullet CALLED or DID_NOT_HAPPEN and the root cause as called/missed, with coverage COMPLETE/INCOMPLETE — closing the feedback loop between predicted risks and actual outcomes.
## Key metrics/methods (formulas where given, else "not specified")
- Mapping table `ROOT_CAUSE_TO_FACTORS`: INJURY_SHOCK → ['restAdvantage']; STALE_LINE → ['lineMovement','consensus']; WEATHER → [] (no factor template covers it — always reads MISSED).
- Scenario A (MISSED): rootCause WEATHER → called: [], didNotHappen: [restAdvantage, venueForm, lineMovement], missed: ['WEATHER'], coverage: 'INCOMPLETE'.
- Scenario B (CALLED): rootCause INJURY_SHOCK → called: ['restAdvantage'], didNotHappen: [venueForm, lineMovement], missed: [], coverage: 'COMPLETE'.
- Scenario C (multi-factor): STALE_LINE with bullets containing lineMovement but not consensus → called: ['lineMovement'] (match on one mapped factor suffices), coverage 'COMPLETE'.
- Narrative summaries via `summarizeComparison(result, friendlyName)`; forbidden behaviors: no input mutation, no dual tagging, COMPLETE requires ≥1 CALLED bullet, no excuses for incomplete coverage.
## Data sources named
`comparePreMortem` / `summarizeComparison` (pre-mortem-pipeline comparator); LossAutopsy records (rootCause, lessonTags: 'late-injury','feed-latency','weather-flag').
## Findings (numbers and facts, not vibes)
- Pre-mortem bullets carry {factorKey, severityRank, text}; coverage metric is exact-set tagging, not probabilistic.
- The spec self-corrected mid-document: the initial INJURY_SHOCK scenario was re-spec'd because INJURY_SHOCK maps to restAdvantage which IS in the bullets (should be CALLED), so the true MISSED case uses WEATHER (maps to []) — a genuine gap the eval flags: weather has no factor template.
- Gap inventory INFERENCE: root causes with empty mappings (like WEATHER) reveal missing pre-mortem factor templates to author.
- Lesson tags named: late-injury, feed-latency, weather-flag.
- Eval status: pending-runner (written 2026-05-22 by claude).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Predicted-risk vs actual-cause feedback loop with called/missed tagging [TRUST-SIGNAL]
- WEATHER maps to no factor template — coverage gap in the pre-mortem factor library [OTHER]
- Late-injury/feed-latency lesson tags as miss drivers [OTHER]
## Engine-actionable? (yes/no + one-line what)
YES — aggregate called/missed rates per factorKey over settled picks to score the pre-mortem factor library's predictive coverage and author templates for the systematic gaps (weather first).
