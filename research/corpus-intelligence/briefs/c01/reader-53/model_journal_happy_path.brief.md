# docs/ops/evals/model-journal-happy-path.md

## What it is (1-2 sentences)
Eval spec (pending-runner, created 2026-05-22 by claude) for the model-journal weekly-draft: Claude writes an 800–1500-word markdown essay from a `JournalWeekData` object with 7 structural sections, and a compliance scanner must return green. Lists extensive forbidden behaviors (no win-rate claims, no marketing adjectives, no first-person singular, no AI-powered language, no emoji).

## Key metrics/methods (formulas where given, else "not specified")
- Input fixture: isoWeek 21, 2026; modelVersion 'v6.0.5'; settledPicksCount 14 ('BOS -3.5 W, CLE -7 W, LAL +145 L, MIN +6 L, TOR +1.5 W, ...'); autopsyCount 4 ('INJURY_SHOCK on LAL+145, VARIANCE on MIN+6, ...'); pre-mortems '11 of 14 CALLED; 3 INCOMPLETE'; factor change 'consensus weight tuned 0.18→0.20 in v6.0.5'; '23 gates this week; most common reason: EDGE_BELOW_THRESHOLD'; forward look 'NFL Week 12 has 4 division games with rest-day imbalances'.
- Essay structure (7 sections): cold open; week in numbers; what got right; what got wrong; pre-mortem performance; what's changing; forward look. Word count 800–1500; `##` headings; ≥2 specific game IDs; ≥1 factor name; reference v6.0.5 weight change; reference NFL Week 12 forward look.
- Forbidden: aggregate win-rate claims; banned vocab (AI-powered/AI-driven/powered by AI/multimodal/L1); first-person singular; marketing adjectives; hedging; comparisons to other operators; emoji; marketing CTA.
- Cost: one call counts against $50/month Model Journal budget; one call should cost under $1.

## Data sources named
- None (fixture data only).

## Findings (numbers and facts, not vibes)
- Factor weight example: consensus weight 0.18 → 0.20 in v6.0.5 (fixture, not a verified real value).
- Autopsy taxonomy example: INJURY_SHOCK, VARIANCE (fixture).
- Gate reason example: EDGE_BELOW_THRESHOLD (fixture).
- Status: pending-runner.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the autopsy taxonomy (INJURY_SHOCK, VARIANCE) and pre-mortem called-vs-missed discipline are a methodology pattern the engine could mirror for pick autopsies; values are fixture-only.
- No QB, coaching, OL, or scheme material.

## Engine-actionable? (yes/no + one-line what)
**No** — eval spec with synthetic fixture data; the autopsy/pre-mortem taxonomy pattern is noted but not directly ingestible.
