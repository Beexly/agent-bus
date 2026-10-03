# docs/ops/hermes/README.md
## What it is (1-2 sentences)
A handoff-package README for the Hermes "Laguna" coding agent: an index of four files (CONTINUOUS.md as the one to paste, LAUNCH.md for setup/morning review, AUDIT_PROMPT.md with the 28-probe audit, BUILD_QUEUE.md with full per-task specs) plus the design rationale for the overnight-run safety model.
## Key metrics/methods (formulas where given, else "not specified")
not specified (process doc; the only numeric content is the "two-strike cap" per task and the 28-probe audit count).
## Data sources named
None (internal handoff artifacts; ledger at `handoff/LEDGER.md`).
## Findings (numbers and facts, not vibes)
- CONTINUOUS.md is the single paste-and-walk-away prompt: ground truth → audit → reports → build → launch prep → standing orders; ledger-driven so an interrupted run resumes from `handoff/LEDGER.md`.
- Safety design constraint: `.claude/settings.json` and `scripts/guardrails/agent-bash-guard.mjs` block dangerous shell commands but only apply to Claude Code, so Hermes safety rails are (1) explicit allow/off-limits lists and a hard git-push ban in the prompt text, (2) exit-code-based mechanical verification, (3) human review of the diff as the actual merge gate.
- Both prompts are written for a model meaningfully weaker than the one that wrote them: judgment replaced with lookup tables; every task has a two-strike cap.
- Supersession map: `docs/ops/HERMES_OVERNIGHT_PROTOCOL.md` (T2–T3-only draft) superseded by BUILD_QUEUE.md; `docs/ops/HERMES_AUDIT_CHARTER.md` design rationale → AUDIT_PROMPT.md executable form; `docs/intelligence/NEXT_LEVEL_BUILD_SPEC.md` tasks T2/T3 implemented as H9/H10 (T4–T6 remain change-proposal-gated, absent from queue).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — agent-operations handoff documentation; not football intelligence.
## Engine-actionable? (yes/no + one-line what)
no — process doc for the Hermes handoff, no football/engine intelligence content.
