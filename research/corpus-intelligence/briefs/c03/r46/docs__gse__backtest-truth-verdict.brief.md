# docs/gse/backtest-truth-verdict.md
## What it is (1-2 sentences)
The GSE backtest truth record (as of 2026-06-29 finish-line re-execution): the model does NOT beat naive — `BACKTEST_TRUTH` in `apps/web/lib/gse/waitlist-copy.ts` holds `beatsNaive: false`, surfaced verbatim on the public waitlist page and enforced by a drift-guard test, CI no-claim scanner, and standing public-copy prohibitions.
## Key metrics/methods (formulas where given, else "not specified")
- `BACKTEST_TRUTH = { samples: 10_301, modelMae: 5.18, naiveMae: 4.9999, beatsNaive: false }` — model MAE 5.18 > naive MAE 4.9999 ⇒ model loses to naive.
- Drift-guard test in `__tests__/gse-waitlist.test.ts` (part of 49 passing) fails the build if page text and the constant drift apart.
- CI no-claim scanner (`compliance-scanner/rules`) blocks positive-claim phrases in copy, the 50 content drafts, the assembled page, emails, and research briefs.
## Data sources named
- Source of truth: `apps/web/lib/gse/waitlist-copy.ts`.
- Drift-guard: `__tests__/gse-waitlist.test.ts`.
- Scanner: `compliance-scanner/rules`.
## Findings (numbers and facts, not vibes)
- 10,301 samples: model MAE 5.18 vs naive MAE 4.9999; `beatsNaive === false` re-verified this run — no change to backtest truth was made.
- Forbidden still in force: no win-rate, ROI, accuracy, edge, or profit claims anywhere public; no "beats the market / beats naive" language; no published picks / performance launch; waitlist collects interest only, makes no performance promise.
- The number lives in one module; the page renders it; a test fails the build on drift.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- model MAE 5.18 > naive 4.9999 on 10,301 samples, published verbatim on the waitlist → [TRUST-SIGNAL: honest calibration-state labeling — negative result disclosed, not hidden]
- Drift-guard test + CI no-claim scanner as enforcement → [TRUST-SIGNAL: evidence-discipline infrastructure; sacred invariant `beatsNaive=false` cannot silently change]
- Public-copy prohibitions (no win-rate/edge/ROI claims, no published picks) → [TRUST-SIGNAL: compliance posture until the engine actually beats naive]
## Engine-actionable? (yes/no + one-line what)
yes — as a calibration gate: no performance claim, public pick, or launch activity is permitted until a new backtest flips `beatsNaive`; the current model is below the naive baseline and any "progress" must be measured against it.
