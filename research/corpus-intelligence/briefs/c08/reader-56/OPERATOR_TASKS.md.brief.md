# docs/ops/OPERATOR_TASKS.md
## What it is (1-2 sentences)
A living checklist of human-only operator tasks (console-level actions agents cannot perform), sourced from Claude Code setup audits v6.0/v7.0 (2026-09-02) plus remediation, each carrying a stable short id checked by `scripts/check-operator-tasks.mjs` (`npm run ops:tasks`). Also documents the stale-picks unpublish decision and the history-squashed baseline migration.
## Key metrics/methods (formulas where given, else "not specified")
not specified
## Data sources named
Claude Code setup audits v6.0/v7.0; `scripts/check-operator-tasks.mjs`; Neon MCP; claude.ai Connectors UI; GitHub org Settings (Billing, Code security, Branches); `.mcp.json`; `.claude/settings.json`; PR #684; `scripts/ops/lib/stale-pending-picks-selection.ts`; `npm run ops:stale-picks:unpublish`.
## Findings (numbers and facts, not vibes)
- 11 operator tasks tracked; only 1 resolved (ACTIONS-BILLING, GitHub Actions minutes restored 2026-09-02; daily-smoke runs #103–#105 green). Open: NEON-RO (Neon connector write-mode), CONN-PRUNE (unrelated connectors cost ~95k tokens of tool schemas per session, per EFFICIENCY_AUDIT_2026-08-13.md), PUSH-PROTECT, BRANCH-PROTECT, SANDBOX-NET (fail-closed flip pending), NEXT-MAJOR (Next 14 → 15/16 upgrade; dependency-audit waivers for `next` and bundled `postcss` reviewed by 2027-01-15), HENRYGD-REG, PRE-COMMIT-BRAND, MCP-VERCEL-KEY (lowercase `vercel` key in `.mcp.json` bypasses `mcp__Vercel__*` confirmation rules).
- **STALE-PICKS**: 20 stale published PENDING picks (2026-09-05) on unstarted NFL/NCAAF games last refreshed in May/June (model v5.0.0 and v5.2.6) will be graded at kickoff on months-old pinned lines unless unpublished; founder decision recorded 2026-09-05: unpublish all the tool selects (isPublished=false; rows never deleted); apply pending at file time.
- Baseline migration squashed 53-file history into one idempotent baseline migration; CI replay + drift check made blocking on 2026-09-02 (`claude/final-launch`); owner production-confirm step open.
- henrygd NCAA API: OWNER-APPROVED free-first primary for NCAA facts but has no source-rights-registry row, so `checkClearance()` denies it; NCAA football settlement currently single-source (ESPN) and never CONFIRMED by consensus until registry row is added (`approved_public_logged_off`, facts only, `storage_allowed: false`).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: stale PENDING picks on months-old pinned lines must leave the public record before kickoff grading, or they corrupt the canonical sample and calibration surface — integrity of the public win/loss record.
- TRUST-SIGNAL: single-source NCAA football settlement (ESPN only, no henrygd consensus check) weakens result verification; settling football results without consensus is a trust risk.
- OTHER: ops/ledger discipline — stable task ids, read-only health checks, and a documented unpublish-vs-void distinction (voids must flow through the settlement outbox contract).
## Engine-actionable? (yes/no + one-line what)
No — operator console tasks and process records; the stale-picks unpublish is already decided and is an operator-run command, not engine work.
