# docs/fable/aws/AWS_LABELING_REALITY_CHECK.md
## What it is (1-2 sentences)
A reality-check note stating that all labeling work is local-only (manifest + cost simulation); no AWS labeling job or vendor workforce exists, and AWS Ground Truth is research-only until source rights, label/workforce policy, budget cap, and owner approval exist.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
`apps/web/lib/fable/labeling.ts` and `labeling.test.ts` (implemented local code); AWS Ground Truth (future research only).
## Findings (numbers and facts, not vibes)
- Current state: local manifest only; local cost simulation only; no AWS labeling job; no vendor workforce.
- Any future Ground Truth job requires: source rights, label policy, workforce policy, budget cap, owner approval.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — labeling infra posture note; no sports content.
## Engine-actionable? (yes/no + one-line what)
No — documents a not-yet-live path; the only action is reading local `labeling.ts` if a labeling pipeline is ever needed.
