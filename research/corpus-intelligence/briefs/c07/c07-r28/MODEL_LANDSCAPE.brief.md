# reference/MODEL_LANDSCAPE.md
## What it is (1-2 sentences)
A 2026-08-12 verified reference catalog of AI models and dev tooling for the operation: local-runnable open models, frontier hosted models with reported pricing, unverified exotic models from the DeepSeek thread, and an npm/package reality check — plus a task→model routing table.
## Key metrics/methods (formulas where given, else "not specified")
- Verification statuses: ✅ verified (confirmed this session on HF/npm), ◐ known-real, ⚠️ unverified (DeepSeek-thread benchmark claims not independently confirmed — never quote as fact).
- Key local models: Muse Glimmer 30B (Apache-2.0, primary local); Qwen3-Coder-30B-A3B-Instruct (best practical local coder); NVIDIA Nemotron 3.5 Lightning 30B-A3B (local agentic executor, released 2026-08-11/12).
- Reported pricing (third-party trackers, not confirmed with providers): Claude Sonnet 5 $3/$15 in/out per M; Haiku 4.5 $1/$5; Opus 5 $5/$25; Fable 5 $10/$50; GPT-5.6 $4–5 in; Gemini 3.x Pro $2/$12; Grok 4.x $1.25–2 in.
- Real economics worth using: Anthropic cache reads ≈10% of input; Batch API ≈−50%.
- Fabricated npm packages (404 — do NOT install): cc-switch, pareto-bandit, mtrouter, securellm-agentguard, reroute-guard, lite11m (typo trap), teia-cognitive-router, agent-swarm, deepswarm, memgpt (npm), aider-chat (npm), opencode (bare npm), goose-ai (npm), langgraph (bare npm), @cyberstrike/sdk, 8gent-code, basilisk-ai, neurosploit, obsidian-skills.
- Verify protocol for exotic models: HF repo search → check license/params/GGUF → never quote benchmarks without primary source.
## Data sources named
Hugging Face hub_repo_search (this session); live npm registry; DeepSeek thread / benchlm.ai (unverified pricing and exotic-model claims); Ollama library; dev.meta.ai docs.
## Findings (numbers and facts, not vibes)
- 8+ local-runnable models cataloged with HF repos and licenses; Muse Glimmer 30B and Qwen3-Coder-30B-A3B are the recommended local daily drivers.
- 8 exotic models from the DeepSeek thread (Ornith-1.0-397B, Inkling, Kimi K3, DeepSeek V4 Pro, Qwen3.8-Max, Laguna S 2.1, North Mini Code, Sakana Fugu-Ultra) are UNVERIFIED — possible fabrications; the verify protocol must run before use.
- 16 fabricated npm packages identified by live-registry 404s; name-collisions flagged (starmap, gbrain, autogen≠Microsoft AutoGen, npm litellm/crewai/metagpt are unofficial stubs).
- Task→model routing table: boilerplate/tests → local Qwen3/Glimmer; agent-loop execution → Nemotron 3.5 Lightning; mid reasoning → OpenRouter; 1M-context whole-repo → Gemini free tier; hardest logic → Claude Code (cached/compacted); bulk non-interactive → Claude Batch API.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the verification-tier discipline (✅/◐/⚠️) and the verify-before-use protocol for benchmark claims is the same evidentiary standard the engine applies to data signals — applicable to any model-quality claim.
- OTHER: compute-cost routing (local free tier → OpenRouter → Batch API −50% → Claude Code ceiling) for the operation's model spend.
## Engine-actionable? (yes/no + one-line what)
No for the prediction engine directly — it's an infra/ops catalog, not a signal; indirectly actionable for model-spend routing on agent workloads.
