# docs/fable/github/ISSUE_02_PUBLIC_DATA_FORENSIC_DEMO.md
## What it is (1-2 sentences)
A GitHub issue spec for a fixture-only "public-data forensic demo" that shows what GSE would flag, with the explicit design goal of producing a visible, reproducible review artifact without claiming fake ROI.

## Key metrics/methods (formulas where given, else "not specified")
not specified.

## Data sources named
Demo fixture (fixture-only, not live data). Candidate files: `docs/fable/demo/*`, `scripts/fable-demo-forensic-report.ts`.

## Findings (numbers and facts, not vibes)
- Acceptance criteria: (1) demo fixture validates, (2) report states what is and is not claimed, (3) reproduction command works.
- Test plan: `npm run fable:demo` plus the FABLE evidence harness test.
- Stated risk: readers may mistake fixture output for live data.
- Owner decision needed: approval for any live-data demo.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No QB/coaching/OL/scheme/trust-signal content present. [OTHER]

## Engine-actionable? (yes/no + one-line what)
no — process/dev-spec doc; governs evidence/demo hygiene rather than engine behavior.
