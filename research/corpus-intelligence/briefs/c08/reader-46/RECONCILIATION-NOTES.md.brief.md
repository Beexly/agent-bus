# docs/arxiv-program/research/2026-09-21/arxiv-program/state/RECONCILIATION-NOTES.md

## What it is (1-2 sentences)
A short 2026-09-21 reconciliation note resolving arXiv ID coverage between the existing-research-map and the 865-paper sweep corpus / manifest-500, plus a tracker bug fix.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified (no formulas; bookkeeping note).

## Data sources named
- existing-research-map.md (64 unique arXiv IDs — earlier "63" was a miscount, corrected here)
- 865-paper sweep corpus
- manifest-500
- reserve-100.jsonl

## Findings (numbers and facts, not vibes)
- existing-research-map.md contains 64 unique arXiv IDs (not 63).
- 42 of the 64 are in the 865-paper sweep corpus → excluded from manifest-500.
- The remaining 22 were never in the corpus → no action needed.
- 10 pilot IDs excluded from the manifest.
- Reserve pool: 97 eligible IDs after manifest selection (reserve-100.jsonl).
- Tracker bug fixed: a phantom-completion bug had marked manifest group 41–50 group4 as complete; reset to pending.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Corpus-hygiene note only — no football intelligence content; relevant solely for research-program bookkeeping (no double-counting papers, no phantom completions).

## Engine-actionable? (yes/no + one-line what)
No — bookkeeping reconciliation only; nothing to wire into the engine.
