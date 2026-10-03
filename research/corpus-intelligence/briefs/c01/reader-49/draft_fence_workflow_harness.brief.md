# ops/DRAFT_FENCE_WORKFLOW_HARNESS.md
## What it is (1-2 sentences)
Design doc for a pre-publication draft-fence workflow harness (TypeScript) that routes content and API drafts through source-rights, commercial-copy, disclosure, responsible-gaming, API payload-rights, and restricted-tracking-data gates before any human review. Status: complete for local draft composition; no content published, no API route exposed, no live integration created.
## Key metrics/methods (formulas where given, else "not specified")
- Code: `apps/web/lib/workflows/draft-fence-workflow.ts`; tests: `apps/web/__tests__/draft-fence-workflow.test.ts`.
- `createDraftFenceReviewPacket()` serializes a run into a review artifact (packet id, run id, blockers/warnings/fix hints, stage summary, inspected source ids, owner checklist, live-action locks).
- Terminal states: `BLOCKED` (fence blocked; manual review cannot approve until repaired) and `NEEDS_MANUAL_REVIEW` (automated fences passed, owner review still required). There is deliberately no PUBLISHED/SENT/LIVE terminal state.
- Hard outputs on every run: `publishAllowed: false`, `routeExposureAllowed: false`, `externalSendAllowed: false`, `liveIntegrationAllowed: false`, `manualReviewGate.required: true`, `manualReviewGate.passed: false`.
- Workflow kinds: `content` gates = source rights, commercial copy, restricted tracking data, affiliate disclosure, responsible gaming; `api` gates = source rights, API payload rights, restricted tracking data.
- `createMemoryDraftFenceReviewPacketLedger()`: append-only in-memory ledger; duplicate packet ids fail closed; status filters for BLOCKED/NEEDS_MANUAL_REVIEW.
- Fixtures: safe No-Bet Clinic draft, unsafe tout-claim draft, partner mention without disclosure, safe derived nflverse API packet, blocked raw-vendor API packet.
- First-month media queue fixtures: 90 content drafts over 30 days (daily watch posts, long video, short-form, newsletter, founder build-log, board-meeting formats) + 30 manual partner-outreach batches at 10 targets/day; all publish/send locks closed.
- Covered failures proven by tests: banned tout copy blocks; partner/affiliate language without nearby disclosure blocks; sportsbook/DFS/deposit language blocks without structured responsible-gaming review; unsafe API payload rights block; protected payload values are never echoed in results.
## Data sources named
None as external data feeds; internal fixtures reference nflverse-derived API packets and raw-vendor API payloads as rights categories.
## Findings (numbers and facts, not vibes)
- 90 content drafts / 30 review packets in the first-month fixture queue; 10 partner-outreach targets/day.
- Even with `ownerDecision = APPROVED_FOR_DRAFT_USE`, `manualReviewRequired: true`, `publishAllowed: false`, `approvalIsAutomatic: false` — the harness cannot approve publish, send, route exposure, or live integration by design.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: content-governance and data-rights plumbing; the NGS "restricted tracking data" gate and the tout-copy blocklist are relevant to the public/private surface doctrine but carry no QB/coaching/OL signals.
## Engine-actionable? (yes/no + one-line what)
No — governance harness only; no predictive features or signal data.
