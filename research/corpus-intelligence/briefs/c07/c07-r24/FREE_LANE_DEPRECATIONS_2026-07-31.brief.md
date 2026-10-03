# ops/FREE_LANE_DEPRECATIONS_2026-07-31.md
## What it is (1-2 sentences)
A 2026-07-31 verified deprecation notice and free-tier LLM roster correction: the Groq `llama-3.3-70b-versatile` model (the internal LLM default) shuts down 2026-08-16 and must be replaced with `openai/gpt-oss-120b`, plus a deprecation table for six other free-tier models and an ordering law for free LLM routing.
## Key metrics/methods (formulas where given, else "not specified")
not specified (infra doc; one table of model IDs, providers, shutdown dates, replacements). Noted deltas: free-tier TPM drops 12K → 8K while TPD doubles to 200K; max_completion_tokens doubles to 65,536; reasoning models' thinking tokens bill against the output budget; `llama-3.1-8b-instant` replacement `openai/gpt-oss-20b` has "14x less RPD".
## Data sources named
Provider primary sources (Groq email 2026-06-17; aistudio.google.com/rate-limit); Groq, Google AI Studio, Cerebras, Cloudflare Workers AI (@cf/baai/bge-m3 embeddings, ~9.3M tokens/day free), OpenRouter, GitHub Models, Anthropic.
## Findings (numbers and facts, not vibes)
- `llama-3.3-70b-versatile` (Groq) dies 2026-08-16; replacement `openai/gpt-oss-120b`; gpt-oss-120b is a reasoning model so thinking tokens consume the output budget.
- `llama-3.1-8b-instant` (Groq) dies 2026-08-16 → `openai/gpt-oss-20b`; `embedding-2-preview` (Google) died 2026-08-10 → `gemini-embedding-2`; `zai-glm-4.7` (Cerebras) dies 2026-08-17 → none announced; `qwen/qwen3-32b` and `llama-4-scout-17b-16e-instruct` (Groq) already dead 2026-07-17; `gemini-2.5-flash/-lite/-pro` (Google) die 2026-10-16 → `gemini-3.6-flash`.
- Do NOT substitute `qwen/qwen3.6-27b` (preview tier, evaluation-only, 16,384 output cap) for a production default.
- Cerebras is no longer a free tier (verified payment method required; $5 credit expires after 30 days) — demote or drop.
- Google stopped publishing free-tier rate limits (per-account); any hardcoded Gemini RPM/RPD came from a blog, not Google — let 429 handling drive failover.
- Best free embed line: Cloudflare Workers AI @cf/baai/bge-m3 (~9.3M tokens/day, no card) — primary embed lane. Ruled out as router lanes: HF free inference ($0.10/mo credits), Together AI (no free tier), Mistral (limits undocumented).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Free-tier LLM roster ordering law (Local → Cloudflare embed → Groq → Gemini → OpenRouter/GitHub Models → Cerebras → Anthropic last) [OTHER]
- Groq Services Agreement 4.2 forbids training on inputs/outputs; Google trains on free-tier content — privacy-relevant routing input [OTHER, INFERENCE: relevant to internal-only data doctrines]
## Engine-actionable? (yes/no + one-line what)
no — infra/LLM-ops doc, no engine modeling content (already-landed routing config, action date long past).
