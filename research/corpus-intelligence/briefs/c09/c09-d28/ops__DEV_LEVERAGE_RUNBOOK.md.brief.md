# ops/DEV_LEVERAGE_RUNBOOK.md
## What it is (1-2 sentences)
Dev-workflow cost-control runbook: route coding work by difficulty across three tiers (local Ollama free tier, OpenRouter mid tier, Claude Code hard tier) to end Claude-limit burn for a solo developer, with supply-chain warnings about fabricated/trap packages.
## Key metrics/methods (formulas where given, else "not specified")
- Routing model: mechanical edits/tests → local model ($0); mid-tier reasoning/multi-file → OpenRouter (pay-per-token, cheap); genuinely hard 5–10% → Claude Code (cached, controlled).
- Claude burn-cut tactics: prompt caching (~10% billing on cache reads), /compact + fresh sessions, subagent fan-out, Batch API (−50%), right-size Sonnet/Haiku vs Opus/Fable.
- ~80% of daily edits (renames, boilerplate, test scaffolds, docstrings, mechanical refactors, file explanations) run at $0 on local models.
## Data sources named
- Verified-real tools named: Ollama + qwen3-coder:30b (MoE 30B total / 3B active); Aider via `pip install aider-chat`; OpenCode (`npm i -g opencode-ai`); OpenRouter with `openrouter/z-ai/glm-5.2` (zai-org/GLM-5.2, MIT) or `openrouter/auto`; meta-models/Muse-Glimmer-30B-GGUF (Apache-2.0, ~17GB K-quant).
## Findings (numbers and facts, not vibes)
- Explicit typo/trap warnings: `brew install --cask cc-switch`, `npm install lite11m@1.84.0`, `securellm-agentguard`, `@cyberstrike/sdk`, `basilisk-ai`, `teia-cognitive-router` are 404s or typosquats — supply-chain risk.
- Correct install paths: LiteLLM is Python (`pip install litellm`), not npm; npm `litellm` is an unrelated stale JS port; npm `crewai` is unofficial; npm `autogen` is a build tool, not the framework.
- Do not proxy a Claude Pro/Max subscription as an OpenAI-style endpoint — ToS violation and fraud-detection risk.
- The runbook changes nothing in the repo and adds no dependencies; keep coding agents and model routers off the machine-side only, never as app dependencies.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: dev-ops cost discipline for the builder-agent fleet (relevant to Garrett's 9/30 cost-discipline mandate with Sonnet 5.5 as the expensive coding model).
## Engine-actionable? (yes/no + one-line what)
No — builder workflow only; applies to how coding agents spend, not to the engine.
