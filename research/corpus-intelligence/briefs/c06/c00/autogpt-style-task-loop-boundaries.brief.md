# agents/autogpt-style-task-loop-boundaries.md
## What it is (1-2 sentences)
Binding doctrine (Prompt 4 — Final Wave) defining three loop zones (Zone 1: safe/autonomous; Zone 2: pre-declared; Zone 3: hard-stop requiring human approval) plus scope-containment rules, termination criteria, and a no-stopping work ladder for any autonomous agent loop operating in Sports OS.
## Key metrics/methods (formulas where given, else "not specified")
not specified (no formulas; operational doctrine). Key enumerations: Zone 3 includes posting to external platforms (permanently forbidden), DB writes without approved migration, new API routes, auth changes, dependency adds, file deletions. Termination triggers include: validation failure undiagnosable in 2 attempts; unauthorized Zone 3 action = P0 incident.
## Data sources named
None. Cross-references docs/agents/agent-action-policy.md, docs/audit/agentic-owasp-controls.md, docs/audit/codemod-safety-policy.md, CLAUDE.md, CLAUDE_CODEX_SEAMLESS_OPERATING_PROTOCOL.md.
## Findings (numbers and facts, not vibes)
- Zone 1 actions: file reads, DB SELECTs, typecheck/lint/test, git status/log/diff, reading env var names (not values).
- Zone 2: modifying existing files, new TS source in apps/web, DB migrations only with pre-approved schema, commits to non-main branches — all require pre-declaration of files/rationale/rules, not human confirmation.
- No-stopping ladder when blocked: implementation → tests → docs/spec → audit report → file inventory → next-agent handoff; never end with only "I can't."
- Codex audit requirements: confirm no agent-controlled auto-publish endpoint, no scheduled worker doing Zone 3 actions without operator trigger, model has no direct DB write access.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: agent-ops governance — this constrains how any autonomous loop (including model-training/data pipelines) may act; TRUST-SIGNAL: the "auto-publish permanently forbidden" rule underpins honest public claims.
## Engine-actionable? (yes/no + one-line what)
no — internal agent governance; does not change model math, but governs how engine automation may be built.
