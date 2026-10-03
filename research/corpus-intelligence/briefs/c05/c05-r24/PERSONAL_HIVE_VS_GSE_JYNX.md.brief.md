# docs/ops/PERSONAL_HIVE_VS_GSE_JYNX.md
## What it is (1-2 sentences)
Separation doctrine between the founder's personal zero-cost research hive (Ollama, CrewAI, OpenClaw on laptop + iPhone) and GSE production (Jynx + crons + Neon): two systems, one founder — copy the mindset (free-first, skip paid SaaS), never the stack. Explicitly forbids putting CrewAI / Ollama / OpenClaw into `Beexly/Sports`.
## Key metrics/methods (formulas where given, else "not specified")
not specified — architecture/run-order notes only, no formulas.
## Data sources named
- Personal: `ollama` + `qwen2.5:7b` (or `llama3.2:3b` if RAM-tight), GitHub Actions free tier, Consensus voting MCP
- GSE: Cerebras free → AWS/Azure/Vertex Claude credits → cash Anthropic; Sports monorepo CI + Vercel
## Findings (numbers and facts, not vibes)
- Personal machine order: `ollama` + `qwen2.5:7b`; minimal CrewAI 2-agent crew (skip freeCodeCamp mega-clone until day 2); OpenClaw gateway → Ollama → pair iPhone; hive-mind-mcp optional later; NEVER point OpenClaw at GSE secrets or Neon.
- GSE after #334 (Claude Code RCA): build ERROR since #324 (cipher `kind === "code"`) fixed on main; TEAM_GAME_LOG undrained → drain wired (#334); prod public SHA lag → re-check Vercel Production READY after #334; Stripe webhook → medusajs domain is a FOUNDER Stripe audit; analytics off = expected until env flags.
- Leverage table: free-first/skip-paid-SaaS already on GSE (free-lane + credit clouds, no LangSmith); GitHub Actions free tier already on Sports; clear skip-list (AMP, Studio, Platform) kept; Consensus voting MCP = personal research only, NOT for pick settlement.
- One rule: personal hive builds YOUR leverage at $0; GSE ships PRODUCT with Jynx + free credits; crossing wires = wrong costs, wrong trust, wrong deploy surface.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: "no LLM on board/settlement truth" — the same honesty boundary that keeps model outputs out of settlement facts.
- OTHER: personal/prod infra separation doctrine; no football signal.
## Engine-actionable? (yes/no + one-line what)
No — infrastructure doctrine; no model content.
