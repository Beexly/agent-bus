# ops/hermes/LAUNCH.md
## What it is (1-2 sentences)
The launch guide for the Hermes autonomous builder agent: run the 28 read-only audit probes first, then the 11-task build queue, on separate nights. It documents model choices, setup, morning-review gates, and what was verified versus assumed.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Baselines measured 2026-08-13: typecheck = exactly 3 known errors (issue #421), lint exit 0, guardrails 22/25 with exactly 3 named failures (model-freeze #419, api-v1-boundary #420, ai-transport-import-boundary). The two failing errors live in execute-autonomy-cycle.ts, ranking-power-control.ts, proven-path-seed.ts.
## Data sources named
Hermes CLI agent (builder); AUDIT_PROMPT.md (28 read-only probes); BUILD_QUEUE.md (11 tasks: six zero-risk reports/single-line changes, five code tasks); models: stealth/ox-alpha on OpenRouter (1,048,576 token context, 131,072 max output, multimodal, free window from 2026-08-21), Ollama qwen3-coder:30b fallback, OpenRouter free routes poolside/laguna-s-2.1:free (262K ctx) and nvidia/nemotron-3.5-lightning:free (1M ctx) — free-route cap 50 requests/day with no credits, 1,000/day after $10 lifetime credit; branch claude/fable-5-ultracode-plan-ptru4e.
## Findings (numbers and facts, not vibes)
- The safety hook (.claude/settings.json + scripts/guardrails/agent-bash-guard.mjs) blocks dangerous shell commands ONLY for Claude Code; Hermes never sees it, so every rail is text in the prompt, exit-code checks, and founder diff review.
- Both prompts forbid git push entirely; the founder pushes after reading the diff. The pre-commit secret scan installs via npm install and the prompts ban --no-verify.
- Free route limits (50/day no credit, 1,000/day with $10 lifetime) were read from OpenRouter on 2026-08-13 and are noted as changeable; the doc's own unverified list: Hermes CLI flags, Laguna/local-qwen task behavior, Windows/Git Bash behavior.
- Morning-review command set includes checking git status prints nothing after audit (handoff/ is gitignored) and re-verifying typecheck stays at 3 errors and guards at 22/25 after the build.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ops/governance — documents the agent-rail architecture (prompt-text rails + exit codes + human diff review) that governs how engine work gets built; no model/sport intelligence.
## Engine-actionable? (yes/no + one-line what)
no — operations/governance doc for agent-runner setup, not engine input.
