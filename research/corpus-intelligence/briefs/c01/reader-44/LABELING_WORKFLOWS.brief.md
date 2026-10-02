# fable/LABELING_WORKFLOWS.md

## What it is (1-2 sentences)
Short spec of the local-only human-labeling workflow for FABLE: a Zod-backed local manifest schema plus a local cost simulator, explicitly flagging that no AWS Ground Truth job, no labeling vendor, and no paid resources exist.

## Key metrics/methods (formulas where given, else "not specified")
- Allowed local pattern: (1) generate a manifest from uncertainty-ranked or rights-review candidates; (2) review locally; (3) store reviewed labels only after source rights and data-retention policy allow; (4) record cost assumptions separately from actual spend.
- Manifest flags: `provider: local`, `priced: false`. No formulas.

## Data sources named
- New local workflow file: `apps/web/lib/fable/labeling.ts`. No data sources named.

## Findings (numbers and facts, not vibes)
- What exists: Zod-backed local manifest schema; local cost simulator for manual labeling/review; explicit local/priced-false flags.
- What does not exist: no AWS Ground Truth job; no labeling-vendor integration; no paid resource activation; no AWS account mutation.
- Connects directly to the second-pass gap-fills (Q2) finding that labeled data for football-specific classifiers (formations, routes, play boundaries) is the moat — this workflow is the local mechanism by which such labels would be generated and costed, with rights review gated in.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Labeling infrastructure is the prerequisite for building the formation/route/play-boundary dataset that would feed coaching/scheme tendency profiles → tag: SCHEME (labeling pipeline as future scheme-intelligence producer).
- No QB, OL, coaching, or trust-signal content present → tag: OTHER otherwise.

## Engine-actionable? (yes/no + one-line what)
Yes — pair this manifest + cost-simulator pattern with the Q2 CV feasibility read: uncertainty-ranked local labeling is exactly how the "labeled data as a byproduct of the content pipeline" moat gets built for formation/route classification.
