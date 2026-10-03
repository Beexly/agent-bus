# fable/aws/AWS_PLUGIN_TO_REPO_CROSSWALK.md

## What it is (1-2 sentences)
A crosswalk table (updated 2026-07-03) mapping each AWS-plugin rule / intelligence layer to its repo coverage path, test coverage path, status, evidence, fixes needed, and whether an owner decision is needed.

## Key metrics/methods (formulas where given, else "not specified")
- Claim statuses in the evidence ledger: proven, partial, unsupported, false, blocked, or owner/legal gated.
- Action risk tiers 0–5 encoded locally in `apps/web/lib/fable/aws-decision-engine.ts`; blast-radius scoring collapses cost, IAM, data, production risk to highest risk.
- No formulas.

## Data sources named
- Evidence ledger: `docs/fable/evidence/CLAIM_EVIDENCE_LEDGER.json`; claim scanner: `.github/workflows/fable-evidence.yml`; source-rights registry: `apps/web/lib/scraping/source-rights-registry.ts`; per-source AWS-storage flag flagged as a future addition to the source registry (legal owner).

## Findings (numbers and facts, not vibes)
- 18 plugin-rule rows; statuses: mostly "covered," with IAM intelligence, deployment intelligence, agentic firebreak, and final handoff format at "partial."
- Data-rights intelligence row: storage/partner-share blocks without known data rights; owner decisions needed for several rows (cost intelligence budget artifact, IAM changes, deploy scripts wiring, paid AWS budgets).
- "FABLE/GSE AWS context" row: AWS is framed as evidence/MLOps/governance/partner architecture, not proof of model edge — claims stay downgraded.
- Local readiness vs live AWS readiness: reports say no live AWS resources were created; keep final reports explicit.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pure governance crosswalk; no QB, coaching, OL, scheme, or trust-signal content → tag: OTHER. The only engine-adjacent signal is the "AWS is not proof of model edge" framing, which protects against infra-as-evidence claims.

## Engine-actionable? (yes/no + one-line what)
No — governance crosswalk only; useful solely as a record that the evidence ladder and claim statuses (proven/partial/unsupported/false/blocked) are the house standard for treating engine claims.
