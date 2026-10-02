# docs/ops/EFFICIENCY_AUDIT_2026-08-13.md

## What it is (1-2 sentences)
An efficiency audit from 2026-08-13 triggered by a session that consumed 321k of 1M context (32%), measuring where the context budget goes (the MCP connector tax dominates), fixing a CI guardrail chain where `&&` short-circuiting hid 17 of 25 guards, and codifying workflow rules from two failed multi-agent runs.

## Key metrics/methods (formulas where given, else "not specified")
not specified

## Data sources named
Session context breakdown, CI job output ("All guardrails" job), DeepSeek transcript fetch, two subagent workflow runs, tools/model-advisor CLI.

## Findings (numbers and facts, not vibes)
- Context breakdown per session: MCP tools 95.2k tokens (7.5k loaded + 87.7k deferred, 220 tools); custom agents 12.5k; system tools 11.2k + 17.6k deferred; skills 12.8k; memory files 6.3k; system prompt 4.0k. [OTHER]
- ~95k of tool definitions (~9.5% of a 1M window) load before any tool is called; this session used only 3 MCP servers (github, Claude_Code_Remote, Hugging_Face) plus WebSearch/WebFetch. [OTHER]
- Largest unused connectors by tool count: Roboflow (141), Ahrefs (134), Make (97), Higgsfield (81), Intuit QuickBooks (72), Miro (65), Linear (53), Era_Context (48), Airtable (43), Postman (41), ConnectMachine (40), Atlassian (40), Lovable (39). [OTHER]
- Action: prune connectors to a working set → expected recovery of ~75-80k tokens/session; account-level action, not repo-fixable. [OTHER]
- CI fix: guardrails script was a 25-long `&&` chain; after the v5.2.6 MODEL_VERSION bump it halted at model-freeze in position 2, so 17 guards ran dark behind one red one; fixed by scripts/guardrails/run-all.mjs — 25 of 25 guards run in 9.2s, 20 pass, all 17 previously-dark guards pass. [OTHER]
- npm wrapper costs ~1.2s per script call vs ~800ms direct (2003ms vs 800ms); prefer node scripts/guardrails/X.mjs in loops. [OTHER]
- Workflow failure 1: first recon workflow hit StructuredOutput retry cap — 343k subagent tokens, 1 of 7 agents usable; rule: keep schemas loose when the agent must also browse. [OTHER]
- Workflow failure 2: synthesis agent returned {} after 4 research agents succeeded — ~500k subagent tokens produced 4 usable payloads; rule: final synthesis step returns prose, no forced schema. [OTHER]
- Model routing table: mechanical work local (Ollama); agent-loop execution steps via Nemotron 3.5 Lightning 30B-A3B locally or its :free OpenRouter route; mid-tier reasoning via OpenRouter free tier (19 routes at $0/$0); bulk non-interactive via Claude Batch API (−50%); Claude Pro Max reserved for hard architecture/novel logic. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No substantive sports-intelligence findings (all tags: none apply — session economics and CI hygiene only).

## Engine-actionable? (yes/no + one-line what)
no — no prediction-model content; its value is operational (the guardrail-chain fix and loose-schema workflow rules apply to agent orchestration, not the engine).
