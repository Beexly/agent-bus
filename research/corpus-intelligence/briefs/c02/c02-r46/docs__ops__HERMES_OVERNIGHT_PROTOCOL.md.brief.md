# docs/ops/HERMES_OVERNIGHT_PROTOCOL.md
## What it is (1-2 sentences)
An overnight execution protocol letting a free local coding agent (Hermes Agent driving an Ollama model such as qwen3-coder:30b) execute only Tasks T2 (cockpit api-costs UI) and T3 (eval:prompts harness) from NEXT_LEVEL_BUILD_SPEC.md on branch claude/fable-5-ultracode-plan-ptru4e, under hard rules where any ambiguity resolves to "stop and journal," never "improvise."
## Key metrics/methods (formulas where given, else "not specified")
- Two-strike rule: if the same gate failure survives 2 fix attempts, revert changed files, journal the failure, move on.
- Gate sequence per increment: `npm run typecheck && npm run lint && npm test` — all green required before local commit.
- Morning review (10 min): read handoff/OVERNIGHT_JOURNAL.md, `git log --oneline origin/<branch>..HEAD`, re-run all gates, read the diff; then either push or `git reset --hard origin/<branch>`.
- No formulas specified.
## Data sources named
- Specs: docs/intelligence/NEXT_LEVEL_BUILD_SPEC.md (tasks T2, T3), docs/intelligence/NEXT_LEVEL_INTELLIGENCE_MASTER_PLAN.md §§7–8, CLAUDE.md, companion charter HERMES_AUDIT_CHARTER.md, model routing table docs/reference/MODEL_LANDSCAPE.md §E.
## Findings (numbers and facts, not vibes)
- Scope: T2 and T3 only. T1 (model-advisor) already implemented and verified. T4–T6 are change-proposal-gated and forbidden for unattended runs. (OTHER)
- Hard rules: never `npm install <pkg>` / edit package.json; never modify apps/web/lib/ai-control-plane/**, packages/db/prisma/**, scripts/guardrails/**, .github/**, sealed/DORMANT-headered files, docs/intelligence/**, docs/ops/**; never push; never --force/--no-verify/reset; never touch git config, secrets, .env*, or anything outside the repo; never fabricate data, scores, prices, or test results.
- The companion charter widens the allow-list for Phase A hardening to tools/model-advisor/** and handoff/** (report/summary files only); three prohibitions stay absolute: no package.json edits, no auth.ts/auth-session/RBAC edits, tests co-located with the hardened file only.
- Never unattended ever: fabricated-handbook installer, provider-registry activation, Prisma/schema changes, guard edits, Stripe/paywall code, scraping jobs, publishing content, docs/adr approval-gated items.
- Journal is the morning source of truth: handoff/OVERNIGHT_JOURNAL.md with timestamps, tasks, files touched, gate results, commits (hashes + messages), tests added, skips with reasons, and exact human verification commands.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "NEVER fabricate data, scores, prices, or test results" is a hard-rule trust mechanism for unattended execution — (TRUST-SIGNAL)
- Sealed/DORMANT files, guardrails, prisma schema, and docs/ops are immutable to the agent — governance layering keeps eval/score surfaces out of reach — (TRUST-SIGNAL)
- Local tier attempts, frontier tier closes (MODEL_LANDSCAPE.md §E routing) — capability routing as cost control — (OTHER)
## Engine-actionable? (yes/no + one-line what)
no — this is build-ops governance, not an engine signal; the reusable part is the no-fabrication + gated-scope pattern for any future unattended work.
