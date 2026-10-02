# reddit-feed-engine.md
## What it is (1-2 sentences)
A short status note for "StatKing" (a media/source-intelligence component) covering rights-gating of sources, candidate scale modeling at 500,000+ URLs, and the next step of replacing generated fixtures with authorized production feeds.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified: no formulas, no scoring methods, no metrics beyond a scale figure.
- Candidate scale modeled: 500,000+ URLs, with paginated review and triage.
- Source lifecycle states: active/open, activation/license, reference, and candidate-only records stay distinct.
- Rule: sources are rights-gated before display, storage, redistribution, training, or expert-signal conversion.
## Data sources named
- None named. Reddit is implied by the filename only (the body never names a subreddit, API, or feed). StatKing is named as the owning surface ("StatKing now treats this area as part of the Source Graph + Media Intelligence hardening foundation").
## Findings (numbers and facts, not vibes)
- Only concrete number in the file: 500,000+ candidate URLs modeled.
- Current state is fixtures: "replace generated fixtures with authorized production feeds and premium UX" is the stated next step — so as of this file, production feeds are NOT live.
- Rights-gating applies to five operations: display, storage, redistribution, training, expert-signal conversion.
- The file is a planning/status note, not a method spec — no findings about Reddit signals themselves.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Rights-gating before expert-signal conversion: TRUST-SIGNAL (INFERENCE: licensing/rights discipline before Reddit-derived signals enter any model)
- Paginated review/triage at 500k+ URL scale: OTHER (INFERENCE: human-in-the-loop curation infrastructure, not a signal per se)
## Engine-actionable? (yes/no + one-line what)
No — planning/status note only; no metrics, formulas, or live feeds to consume (fixtures still pending replacement by authorized production feeds).
