# docs/fable/README.md
## What it is (1-2 sentences)
The index document for the FABLE/NFL evidence layer: a repo-native evidence machine separating lawful, measured, falsifiable work from unsupported claims, with a reviewer entry point, scope anchors, and explicit proven/unproven lists.

## Key metrics/methods (formulas where given, else "not specified")
Not specified — no formulas. Verification commands: `npm run fable:evidence`; FABLE web tests (evidence-harness.test.ts, public-summary.test.ts, next-config-policy.test.ts, public-copy-scan-strong.test.ts).

## Data sources named
- NFL data/metrics anchored to `apps/web/lib/nflverse`, `apps/web/lib/metrics`, `packages/data-ingestion/src/nflverse-*`.
- Calibration anchored to `packages/prediction-engine/src/probability-calibration.ts`, `calibration-map.ts`, `calibration-drift.ts`.
- Source rights anchored to `apps/web/lib/scraping/source-rights-registry.ts`.

## Findings (numbers and facts, not vibes)
- Proven: source status adapted from the existing rights registry; FABLE uncertainty, labeling, drift, parity, AWS gate, and evidence harness primitives have targeted tests; AWS deploy/paid-resource/decision-engine gates default off for risky action; a public `/fable` route can summarize local evidence ledgers with no live AWS calls or unsupported claims.
- Not proven: any model-performance gain; any broad competitive claim; any live AWS deployment or paid labeling setup; any legal clearance beyond source-specific registry evidence.
- AWS posture: research and decision records only; all AWS work no-cost/local unless the owner explicitly approves a gated spike.
- Needs approval: AWS deploys, paid resources, external-source automation, ML runtime additions, partner demos, any public claim using unsupported historical phrases.
- New FABLE primitives live in `apps/web/lib/fable`; public summary in `apps/web/lib/fable/public-summary.ts` rendered via `apps/web/app/fable/page.tsx`.
- Navigation chain: Root README → docs/fable/README.md → INDEX.md → evidence/EVIDENCE_INDEX.md → master/MASTER_FINAL_REPORT.md.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All content is evidence-layer/process documentation — OTHER. No QB, coaching, OL, trust-signal, or scheme content.

## Engine-actionable? (yes/no + one-line what)
No — documentation index only; anchors to existing surfaces (nflverse, calibration) are map pointers, not new findings.
