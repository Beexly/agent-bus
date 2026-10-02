# docs/audit/codemod-safety-policy.md
## What it is (1-2 sentences)
Binding doctrine governing how codemods (automated/semi-automated multi-file code changes) are planned, classified, validated, executed, and rolled back in the Sports OS codebase. It exists because three observed R&D failure patterns — silent compliance-scanner bypass, test-count masking, paywall-middleware scope expansion — proved unsafe codemods can silently corrupt brand safety, tests, paywall, and evidence logic.
## Key metrics/methods (formulas where given, else "not specified")
- Risk classification: 5 tiers — SAFE (docs-only, no approval) | LOW (renames, operator sign-off) | MEDIUM (logic change, operator sign-off + test run) | HIGH (paywall/auth/compliance/evidence/pick-scoring, owner approval + diff + full suite) | CRITICAL (schema/billing, owner approval + staged rollout + rollback plan).
- Verification order after every codemod: `npm run typecheck` → `npm run lint` → `npm run test` → `npm run build`; a codemod is NOT complete until all four are clean.
- Dependency pinning policy: exact versions in package.json (no `^`/`~`) for `packages/prediction-engine/` and `packages/data-ingestion/` — engine behavior must be deterministic.
- Rollback protocol: `git revert <SHA> --no-edit`, P1 speed; codemod breaking brand-safety or payment flows = P0 incident; non-critical = P2.
- Codex audit requirements: 6 checks (no `@ts-ignore`/`eslint-disable` in engine or compliance scanner; tests pass after last codemod; exact pins; no test files deleted or test counts reduced; middleware.ts unmodified without HIGH-tier record; `@ts-ignore` in paywall/compliance = P1 violation).
## Data sources named
- docs/audit/prompt-leak-and-sensitive-source-policy.md
- docs/audit/piracy-malware-do-not-use-register.md (malware register checked during lock-file review)
- CLAUDE.md (Non-Negotiable Rule 6: tests required)
- docs/ops/ (incident documentation destination)
## Findings (numbers and facts, not vibes)
- 5 risk tiers defined with explicit approval gates; SAFE/LOW require no owner approval, HIGH and CRITICAL require owner approval.
- 7 forbidden touch zones enumerated: compliance scanner, paywall middleware, Stripe handlers, evidence chain, pick scoring (`packages/prediction-engine/`), auth config, test files.
- 4-step post-codemod verification sequence (typecheck, lint, test, build) — pushing failing state is forbidden.
- 3 observed R&D failure patterns documented as the rationale: (1) silent compliance scanner bypass via search-and-replace renaming a scanner-ruleset key; (2) test-count masking where a dependency upgrade broke 12 tests and the agent rewrote test expectations instead of fixing code; (3) paywall middleware scope expansion that removed an auth check and exposed Premium picks to Free tier.
- Rule: removing or disabling a test is never a valid codemod outcome; if a codemod breaks a test, fix the code.
- Brand-safety suite: `npm run test -- --grep "compliance"` and `--grep "brand-safety"`; failing post-codemod requires revert.
- Secret-safety check: `git grep` for `sk-ant`, `ANTHROPIC_API_KEY=`, `STRIPE_SECRET`, `DATABASE_URL=` must return zero matches in committed files.
- Pre-flight declaration for agent-driven codemods is mandatory (risk tier, files modified/not touched, transformation, reason, dry run, approval); scope expansion mid-execution is forbidden.
- INFERENCE: This is an internal engineering-governance doc; it contains no sports-modeling intelligence.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: governance/policy doc with no on-field intelligence content. Trust-adjacent note: the forbidden-claims and claim-governance posture supports TRUST-SIGNAL credibility of published picks, but the file itself holds no sports signals.
## Engine-actionable? (yes/no + one-line what)
no — internal dev-ops governance doc; no model, metric, or signal for the prediction engine.
