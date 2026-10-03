# reference/MODEL_LANDSCAPE.md
## What it is (1-2 sentences)
A verified model/tooling reference catalog (dated 2026-08-12) of local-runnable open models, frontier hosted models with reported pricing, unverified exotic models from a DeepSeek thread, npm/pip tooling reality-check (real vs fabricated), and a task→model routing table — a documentation reference, not runtime data.

## Key metrics/methods (formulas where given, else "not specified")
- Verification legend: ✅ verified (confirmed via Hugging Face hub_repo_search or live npm registry), ◐ known-real (pre-2026-cutoff, high confidence, not re-checked), ⚠️ unverified (DeepSeek-thread claims, treat benchmarks as marketing).
- Local models: Muse Glimmer 30B (meta-models/Muse-Glimmer-30B, Apache-2.0, ~29.6B dense + ~1.8B ViT, 128K context, GGUF ~17GB K-quant — note: handbook's `muse-glimmer:30b-mlx` tag is wrong, MLX is Apple's format, Ollama serves GGUF); Qwen3-Coder-30B-A3B-Instruct (Apache-2.0, 30B/3B-active MoE); NVIDIA Nemotron 3.5 Lightning (nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16, NVIDIA Open Model License — ⚠️ read before commercial use, released 2026-08-11/12, GGUF from unsloth/ggml-org/bartowski, also on OpenRouter + build.nvidia.com); Qwen3-Coder-Next (Apache-2.0); Qwen2.5-Coder-32B/7B (128K); DeepSeek-Coder-V2 (MIT-style, long context); Codestral (Mistral non-commercial, 22B, 32K); GLM-5.2 (zai-org/GLM-5.2, MIT, large MoE — API/OpenRouter unless serious VRAM).
- Hosted frontier reported pricing (input/output per M tokens, unconfirmed): Claude Fable 5 $10/$50 1M context; Claude Opus 5 $5/$25 1M; Claude Sonnet 5 $3/$15 1M; Claude Haiku 4.5 $1/$5; GPT-5.6 (Sol/Terra) $4–5/$9.60–30; Gemini 3.x Pro $2/$12 1M+ (generous free tier reported); Grok 4.x $1.25–2/$2.50–6 (0.5–2M context).
- Real Anthropic economics (stated as real, worth using): cache reads ≈ 10% of input; Batch API ≈ −50%.
- Exotic ⚠️ unverified: Ornith-1.0-397B (DeepReinforce), Inkling (Thinking Machines), Kimi K3 (Moonshot), DeepSeek V4 Pro, Qwen3.8-Max, Laguna S 2.1 (Poolside), North Mini Code (Cohere), Sakana Fugu-Ultra. Verify protocol: search HF for exact repo id → check license/params/GGUF → never quote benchmarks without primary source.
- Tooling real (dev-workflow only): ruflo (=ruvnet/claude-flow), claude-mem, @blockrun/clawrouter, adaptive-memory-multi-model-router (A3M), 9router, portkey-ai, chromadb, worldmonitor; Aider = pip aider-chat; OpenCode = opencode-ai (npm); LangGraph JS = @langchain/langgraph; LiteLLM = pip litellm.
- Fabricated (npm 404, do NOT install): cc-switch, pareto-bandit, mtrouter, securellm-agentguard, reroute-guard, lite11m (typo trap), teia-cognitive-router, @cyberstrike/sdk, 8gent-code, basilisk-ai, neurosploit, agent-swarm, deepswarm, obsidian-skills, memgpt (npm), aider-chat (npm), opencode (bare npm), goose-ai (npm), langgraph (bare npm).
- Name-collisions (do NOT install expecting AI): starmap (data-structure lib), gbrain (2022 GPU-ML lib), autogen (gyp build tool, NOT Microsoft AutoGen); litellm/crewai/metagpt on npm are unofficial JS ports/stubs, not the real Python tools.
- Task→model routing table: boilerplate/renames/tests/docstrings → local Qwen3-Coder-30B / Muse Glimmer; agent-loop execution → local Nemotron 3.5 Lightning (3B active = cheap/fast); multi-file refactor → OpenRouter (GLM-5.2/DeepSeek/Qwen); whole-repo 1M context → Gemini free tier; hardest logic/architecture → Claude Code (cached, compacted); bulk non-interactive → Claude Batch API (−50%).

## Data sources named
- Hugging Face hub_repo_search (this session, 2026-08-12); live npm registry; DeepSeek thread; benchlm.ai and other third-party trackers (reported pricing); dev.meta.ai/docs/muse-glimmer and the Ollama library; docs/intelligence/NEXT_LEVEL_BUILD_SPEC.md (model-advisor tool spec); the dev runbook §3 (cache/Batch API).

## Findings (numbers and facts, not vibes)
- 30B-class local models (~29.6B dense, 3B-active MoE variants) are the zero-marginal-cost tier; Muse Glimmer 30B GGUF is ~17GB K-quant.
- Anthropic: cache reads ≈ 10% of input cost; Batch API ≈ −50% cost — flagged as real, usable economics.
- Nemotron 3.5 Lightning released 2026-08-11/12, purpose-built for high-volume agent-loop execution steps while a bigger model plans; available local (GGUF), OpenRouter, and build.nvidia.com.
- Codestral is Mistral (non-commercial) licensed — check before commercial use; Nemotron is NVIDIA Open Model License (also flagged); Qwen3-Coder/Qwen3-Coder-Next/GLM-5.2 are Apache-2.0/MIT (safe).
- The ⚠️ exotic list (Ornith-1.0-397B, Inkling, Kimi K3, DeepSeek V4 Pro, Qwen3.8-Max, Laguna S 2.1, North Mini Code, Sakana Fugu-Ultra) may be fabricated — HF repo-id search is the 30-second verification gate.
- npm supply-chain caution: `lite11m` is a typo trap of litellm; `opencode` bare npm and `aider-chat` npm are NOT the real tools (real: opencode-ai npm, aider-chat pip); `autogen` on npm is a gyp build tool, not Microsoft AutoGen.
- Dated 2026-08-12; pricing columns explicitly "reported by third-party trackers, not confirmed with providers" — refresh manually with dated sourced updates.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER:** This is infrastructure intelligence, not a sports signal — the routing table (local Nemotron for agent-loop execution, Batch API −50% for bulk evals, cache ≈10% for Claude Code) is directly relevant to the machine-discovery lane and continuous-learning engine: it defines the cheapest correct compute for backtests, evals, and the nightly calibration loops. Program served: machine-discovery / continuous-learning infra.
- **OTHER:** The ⚠️-unverified exotic models and fabricated-npm list serve the trust-target intake negatively: never wire benchmarks from the DeepSeek thread into the engine without HF verification; the npm 404 list protects builder agents from installing malicious packages. Program served: agent-fleet security posture.
- **OTHER:** CONTRADICTION-risk flag: several named models (Claude Fable 5, GPT-5.6 Sol/Terra, Kimi K3) postdate or extend beyond standard 2026 knowledge — the file's own ⚠️/◐/✅ tagging is the corrective mechanism; treat all ◐ rows as high-confidence but re-checkable, not verified-fact.

## Engine-actionable? (yes/no + one-line what)
Yes — batch API −50% and cache-read ≈10% economics plus the local Nemotron routing are directly actionable for the engine's backtest/eval compute budget.
