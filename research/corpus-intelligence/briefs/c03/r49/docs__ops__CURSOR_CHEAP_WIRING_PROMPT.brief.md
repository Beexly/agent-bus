# docs/ops/CURSOR_CHEAP_WIRING_PROMPT.md
## What it is (1-2 sentences)
A 2026-09-23 cost-management prompt for wiring unused GSE modules: a cost law directing additive wiring work to free models (OpenCode Zen) instead of expensive Cursor compute, a pinned model-surface priority table, and a strict paste-in prompt for a bounded worker agent.
## Key metrics/methods (formulas where given, else "not specified")
Caps embedded in the paste-in prompt: max 25 calls per run, max 6 new file pairs, max ~24k input tokens per turn; stop if tests red or caps hit. Per item: create exactly 2 new files (module + colocated test), JSDoc with arXiv id + acceptance gate, disabled-by-default flag; behavior-change needs go to WIRING-PLAN.md "NEEDS HUMAN CALL" and are skipped.
## Data sources named
docs/ops/HANDOFF_CURSOR_2026-09-22.md; docs/research/2026-09-21/wiring/IMPLEMENTED.md; docs/research/2026-09-21/wiring/WIRING-PLAN.md; IMPROVEMENT-LEDGER.jsonl (id source of truth; searched with grep/rg, never catted whole).
## Findings (numbers and facts, not vibes)
- Surface priority A→E: OpenCode Zen (`opencode/space-bunny-free` → `opencode/big-pickle` → `opencode/mimo-v2.6-flash-free`) default; OpenRouter `:free` optional (key-live only); NVIDIA NIM (e.g. `nvidia/google/gemma-3-12b-it`); Grok Bot for orchestrate/triage/money; Cursor CloudAgent last resort (`composer-2.5` fast then Gemini Flash/Kimi/nano/Haiku — never Opus / Muse Spark High / Sol / thinking-high).
- OpenRouter stealth/space-bunny-alpha path declared STALE; Zen is truth (`gse-cheap-cursor-wiring` skill + FREE_MODEL_LANES.md).
- Cursor $200 spend cap must NOT be raised; additive unused-module wiring burns OpenCode Zen free, not Cursor Opus.
- Worker rule: additive only; never read AGENTS.md (too large), full CLAUDE.md, IMPROVEMENT-LEDGER.jsonl whole, .env, prisma schema/migrations; apps/web/app/** off-limits unless the item names a file.
- Commit convention: `wiring: <arxiv_id> additive module+test` on worker branch; no force-push; no main.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Disabled-by-default flag + additive-only rule on all new wiring: TRUST-SIGNAL (production safety via explicit opt-in).
- Cheap-model delegation ladder (free rows first, paid only as last resort): OTHER (infra cost discipline; relevant to the coding-agent budget discipline mandate).
- No QB-BEHAVIOR, COACHING, OL, or SCHEME findings.
## Engine-actionable? (yes/no + one-line what)
no — Pure ops/build-cost machinery; useful context for agent budgeting but contains no model, metric, or calibration content for the prediction engine.
