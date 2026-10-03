# docs/intelligence/NEXT_LEVEL_INTELLIGENCE_MASTER_PLAN.md
## What it is (1-2 sentences)
Planning/control artifact (2026-08-12, author "Fable 5") debunking an AI-generated "Sports Intelligence OS — Ultimate Handbook": its model list was mostly real but its install script, package list, and orchestrator code were fabricated/typosquat, so it issued a hard do-not-run warning and redirected to extending the repo's already-built governed systems (Jynx router, AI Control Plane, provider registry). It also untangles dev-workflow intelligence (how you code cheaper) from product intelligence (how the app reasons about picks).

## Key metrics/methods (formulas where given, else "not specified")
- not specified (no sports-math formulas; architecture/governance plan).
- Jynx router tiers: cheap/sonnet/opus mapped per surface; provider registry with reserved `local` economic class + `local-none` route (dormant, owner-gated).
- Claude Code cost controls: prompt caching (~10% of input on cache hits), `/compact`, subagent fan-out, Batch API (−50%), cheaper tier for cheap surfaces.
- Phases: 0 (dev runbook, $0), 1 (router legibility in cockpit + `eval:prompts` quality harness), 2 (governed shadow-only local-inference lane via ADR), 3 (weekly shadow-vs-live calibration regression on settled outcomes through the model-promotion gate), 4 (governed ambition engine emitting human-ratified proposals only).

## Data sources named
- Verified live on Hugging Face: Muse Glimmer 30B (`meta-models/Muse-Glimmer-30B`, Apache-2.0, ~29.6B dense + ~1.8B ViT, 128K ctx, released 2026-08-10; GGUF ~17GB for Ollama), GLM-5.2 (`zai-org/GLM-5.2`, MIT, 2.5M downloads), Qwen3-Coder-30B-A3B-Instruct (Apache-2.0, "best practical local coding model"), Qwen2.5-Coder-32B/7B, DeepSeek-Coder-V2, Codestral.
- Unverified (do not quote benchmarks): Ornith-1.0-397B, Inkling, Kimi K3, DeepSeek V4 Pro, Qwen3.8-Max, GPT-5.6 Sol/Terra, Laguna, North Mini Code, Sakana Fugu-Ultra.
- npm supply-chain: fabricated names include `cc-switch`, `lite11m` (typo of litellm — supply-chain trap), `pareto-bandit`, `securellm-agentguard`, `@cyberstrike/sdk`, `basilisk-ai`, `8gent-code`, `neurosploit`, `memgpt`, `aider-chat`, `opencode`, `goose-ai`; real ones: `ruflo`, `claude-mem`, `adaptive-memory-multi-model-router` (A3M), `@blockrun/clawrouter`, `portkey-ai`, `9router`, `chromadb`, `worldmonitor`.

## Findings (numbers and facts, not vibes)
- Handbook verdict: "real-models / fake-plumbing" — all 33 installer package names checked against live npm registry; most were hard 404s, name-collisions (`starmap` = StrongMap, `gbrain` = 2022 GPU-ML lib, `autogen` = gyp generator not Microsoft AutoGen), or unofficial JS ports (npm `litellm` = stale hobby port, `crewai` = unofficial reimplementation, `metagpt` = placeholder stub).
- Handbook's Ollama tag `muse-glimmer:30b-mlx` is wrong (MLX is Apple's format; Ollama serves the GGUF K-quant).
- Warning: tools re-exposing a Claude Pro/Max subscription as an OpenAI-style endpoint risk violating Anthropic ToS and have triggered fraud-detection charges.
- Handbook's assumed scripts (`npm run benchmark | rsi-validate | distill | redteam | audit-verify`) do not exist; repo actually has `eval:prompts`, `agent:eval`, `free:doctor`, ~40 `guard:*` scripts.
- Repo already built (production): Jynx governed multi-lane planner (free Cerebras → Bedrock → Anthropic), AI Control Plane with budget + audit + claim governance, free-first data architecture with `paidCallJustified()` spend guard, autonomy kernel, BAEE Bayesian ensemble + shadow prediction engine, model-promotion gate, bitemporal event-sourcing.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Always verify AI-supplied tool/model lists against live registries before install — TRUST-SIGNAL (supply-chain/fabrication audit discipline).
- Jynx tiered routing (cheap/sonnet/opus per surface) + shadow-vs-live weekly calibration regression through a promotion gate — TRUST-SIGNAL (model-quality governance pattern for any engine surface).
- Phased build: research → wire → weight → calibrate → test → polish, with shadow-only promotion gates — OTHER (matches GSE wire-first sequencing doctrine).

## Engine-actionable? (yes/no + one-line what)
Yes — keep local/dev AI tooling off the production dependency tree; any model-threshold promotion for engine signals must run through the shadow-vs-live regression + promotion gate pattern described in Phase 3.
