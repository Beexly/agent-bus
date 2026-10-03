# governance/EU_AI_ACT_EVIDENCE_PACK.md
## What it is (1-2 sentences)
An honest working note (dated 2026-07-23, not a legal instrument) defining the EU AI Act evidence pack as an inventory of already-existing artifacts (AI-invocation receipts, SrqcVersion rows, `docs/formal/SRQC_STATUS.md`, `COMPLIANCE_MATRIX.md`), assembled by `apps/web/lib/governance/evidence-pack.ts` / `scripts/governance/export-evidence-pack.ts` into a timestamped JSON export.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
`AgentReceipt`-style Prisma rows (absent), `srqc_version` table / `SrqcVersion` model (exists, M5, needs live `DATABASE_URL`), `docs/formal/SRQC_STATUS.md` (absent), `docs/governance/COMPLIANCE_MATRIX.md` (absent), `apps/web/lib/governance/use-case-classifier.ts` (`hintTier`, always flags `needsCounsel: true`).
## Findings (numbers and facts, not vibes)
- At build time (branch `feat/eu-evidence-enforce-ramp`, 2026-07-23), every optional source was absent or unreachable, so a generated pack is expected to contain zero items — stated as correct behavior, not a bug.
- Explicitly NOT a declaration of conformity, NOT CE marking, NOT high-risk certification, NOT legal advice; every pack carries the disclaimer "Evidence inventory only. Not a declaration of EU AI Act conformity, CE marking, or high-risk certification."
- No AI Act conformity assessment (internal or third-party) had taken place; scope/risk tier undetermined by counsel.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
OTHER: governance/compliance posture for the platform, no sports intelligence.
## Engine-actionable? (yes/no + one-line what)
No — compliance inventory mechanics only.
