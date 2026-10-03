# ops/evals/studio-betting-education-thin-evidence.md
## What it is (1-2 sentences)
Eval spec (created 2026-05-22, status pending-runner) for the Galaxy Studio refusal path: a bootstrap-state game (TOR @ BOS, MLB, evidence health D, 2 books, no signals, bootstrapShare 1.0, no published pick) triggers a thin-evidence refusal `CreatorAsset` — with no Claude API call made.

## Key metrics/methods (formulas where given, else "not specified")
- Refusal trigger: `evidenceHealth.overall` low AND `pickSignalSnapshots.length` empty; refusal `CreatorAsset` has `body` exactly matching the refusal copy ("Evidence is thin — no asset generated. The model has not scored this game yet. Check back closer to game time."), `citations: []`, `publicReady: false`, `complianceScan: { status: 'green' }`.

## Data sources named
None (fixture game state; the point is absence of evidence).

## Findings (numbers and facts, not vibes)
- Refusal is checked in `build-assets.ts` BEFORE the Claude API call (cost-saving + refusal-is-explicit principle) — 7 pass criteria including "no `claudeApi.complete()` call recorded in test mocks" and UI renders the refusal prominently, not as an error toast.
- Forbidden: hedged-but-published assets ("We don't have much data, but here's what we'd say..."), marking refusals `publicReady: true`, and telling the operator to "try another template" — refusal is final per template-game pair.
- Refusal copy is clean by construction (compliance green — it contains no banned vocabulary).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Refuse-default thin-evidence honesty (no hedged generation, no sunk-cost API call) — **TRUST-SIGNAL**
- Cost discipline (refusal before spend) — **OTHER**

## Engine-actionable? (yes/no + one-line what)
No — product refusal-flow eval; the thin-evidence doctrine is already engine-adjacent (bootstrap gating) but this file adds no new research.
