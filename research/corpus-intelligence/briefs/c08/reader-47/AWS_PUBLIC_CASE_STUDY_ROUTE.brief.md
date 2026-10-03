# docs/aws/AWS_PUBLIC_CASE_STUDY_ROUTE.md

## What it is (1-2 sentences)
A local route artifact documenting the GSE case-study page that translates the local AWS governance layer into reader-facing copy (route /case-studies/aws-governed-sports-intelligence) while explicitly disclaiming AWS approval, cloud deployment, funding, or release readiness. Public-safe: shadow only, no AWS resources created, no credentials, no cost.

## Key metrics/methods (formulas where given, else "not specified")
Not specified (no metrics or formulas in the file). Methods named: six Well-Architected pillars mapped to GSE controls -- Operational excellence (runbooks, guardrails, review queues, promotion packets), Security (source-rights fences, payload filters, API key hash contracts, raw-key absence checks), Reliability (replay harnesses, idempotency checks, duplicate rejection), Performance efficiency (typed evidence seams, bounded payloads), Cost optimization (local-first fixtures, no-spend gates), Sustainability (synthetic fixtures, hash-only patterns). Visual QA result: HTTP 200 on local dev server, desktop and mobile screenshots captured and reviewed.

## Data sources named
Code: apps/web/app/case-studies/aws-governed-sports-intelligence/page.tsx; apps/web/lib/aws-case-study/public-case-study.ts; apps/web/__tests__/aws-case-study-page.test.ts; apps/web/__tests__/commercial-pages-launch-qa.test.ts. Evidence pointers: docs/fable/aws/AWS_OPERATING_INTELLIGENCE_RUNBOOK.md, docs/api/API_V1_SHADOW_SEAM.md, docs/api/API_V1_ABUSE_RESPONSE_FIXTURES.md, docs/api/API_V1_LIVE_ROUTE_PROMOTION_PACKET.md, docs/aws/AWS_SHADOW_BOUNDARY.md, infra/aws-shadow/README.md. Local QA: reports/launch-page-visual-qa/2026-07-06/README.md.

## Findings (numbers and facts, not vibes)
- Live-action locks all false: cloud resources created false, paid resources false, credentials used false, deployment approved false, funding approval claimed false, release readiness claimed false.
- Evidence boundary rule: public probability, win-rate, business-outcome, and calibration claims require settled proof outside this route.
- Verification commands named: test workspace apps/web for aws-case-study-page and commercial-pages-launch-qa; typecheck @sports/web; guard:aws-compatibility-index.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Claim-safety posture for public surfaces (evidence required before public probability/win-rate claims) -- TRUST-SIGNAL
- Governance vocabulary and live-action locks -- OTHER (infra governance)

## Engine-actionable? (yes/no + one-line what)
No -- infra/governance artifact with no model, signal, or data content; only follow-up is to keep future case-study expansion behind the same claim-safety checks.
