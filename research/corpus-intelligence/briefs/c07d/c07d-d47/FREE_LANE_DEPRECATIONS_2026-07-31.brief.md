# ops/FREE_LANE_DEPRECATIONS_2026-07-31.md
## What it is (1-2 sentences)
Verified 2026-07-31 deprecation audit of the free-tier LLM/inference "lane" against provider primary sources: Groq's `llama-3.3-70b-versatile` dies 2026-08-16 (16 days out), with the mandated replacement `openai/gpt-oss-120b` and three non-cosmetic behavior changes; plus a full deprecation table, free-tier roster corrections, and the standing provider ordering law.

## Key metrics/methods (formulas where given, else "not specified")
Formulas: not specified. Parameter values (verbatim from file):
- `INTERNAL_LLM_BASE_URL=https://api.groq.com/openai/v1` (unchanged)
- `INTERNAL_LLM_MODEL=openai/gpt-oss-120b` (was `llama-3.3-70b-versatile`)
- Free-tier TPM drops **12K → 8K**; TPD **doubles to 200K**; `max_completion_tokens` **doubles to 65,536**
- `gpt-oss-120b` is a reasoning model; thinking tokens bill against the output budget — anywhere `max_tokens` is sized tightly needs review
- Groq announced the shutdown by email **2026-06-17**; notice explicitly covers free-tier usage
- Do NOT substitute `qwen/qwen3.6-27b` — preview tier, evaluation-only, **16,384 output cap**
- Best free line item: Cloudflare Workers AI `@cf/baai/bge-m3` embeddings, **~9.3M tokens/day free**, no credit card → make it the primary embed lane
- Ruled out as router lanes: Hugging Face free inference (**$0.10/mo credits**), Together AI (no free tier), Mistral (limits undocumented)
- Ordering law: **Local first → Cloudflare embed → Groq** (no card; Services Agreement 4.2 forbids training on inputs/outputs) → **Gemini** (Google trains on free-tier content) → **OpenRouter/GitHub Models** (failover) → **Cerebras** → **Anthropic** (last)

## Data sources named
- Provider primary sources (Groq deprecation notice email 2026-06-17; Google rate-limit page aistudio.google.com/rate-limit)
- Groq Services Agreement 4.2 (no training on inputs/outputs)
- aistudio.google.com/rate-limit (per-account Gemini free-tier limits)

## Findings (numbers and facts, not vibes)
- Deprecation table (model, provider, shutdown, replacement):
  - `llama-3.3-70b-versatile`, Groq, **2026-08-16**, → `openai/gpt-oss-120b`
  - `llama-3.1-8b-instant`, Groq, **2026-08-16**, → `openai/gpt-oss-20b` (**14x less RPD**)
  - `embedding-2-preview`, Google, **2026-08-10**, → `gemini-embedding-2`
  - `zai-glm-4.7`, Cerebras, **2026-08-17**, → none announced
  - `qwen/qwen3-32b`, Groq, **2026-07-17**, → ALREADY DEAD
  - `llama-4-scout-17b-16e-instruct`, Groq, **2026-07-17**, → ALREADY DEAD
  - `gemini-2.5-flash/-lite/-pro`, Google, **2026-10-16**, → `gemini-3.6-flash`
- Cerebras is no longer a free tier: requires a verified payment method before API access activates; **$5 credit expires after 30 days** — demote or drop
- Google stopped publishing free-tier rate limits; per-account at aistudio.google.com/rate-limit. Any hardcoded Gemini RPM/RPD came from a blog, not Google — **let 429 handling drive failover**
- Free-tier TPM change 12K→8K means bursty callers will see **429s that never fired before**
- gpt-oss-120b's thinking tokens bill against the output budget (tight max_tokens budgets need review)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **[OTHER — infra/cost intelligence]:** The Cloudflare Workers AI `@cf/baai/bge-m3` line item (~9.3M tokens/day free, no credit card) is the primary embed lane for the whole engine — directly relevant to the continuous-learning intake lane (embedding research corpus chunks at scale without spend). Any embedding volume planning should budget against this 9.3M/day ceiling, not against paid lanes.
- **[OTHER — data-posture/TRUST-SIGNAL-adjacent]:** Groq's Services Agreement 4.2 forbids training on inputs/outputs while Gemini's free tier trains on content — this is the standing ordering law's privacy rationale. Any proprietary engine data routed through LLM lanes should prefer Groq over Gemini for exactly this reason; feeds anything that touches NGS/internal data.
- **[OTHER — operational reliability]:** The gpt-oss-120b reasoning-token behavior change (thinking bills against output budget) is a concrete 429/truncation risk for any agent lane that sizes max_tokens tightly — including the agent-bus handoffs and calibration pipelines. UNCERTAIN whether subsequent files updated all call sites after the 2026-08-16 cutover.

## Engine-actionable? (yes/no + one-line what)
**Yes** — verify no lingering `llama-3.3-70b-versatile`/`llama-3.1-8b-instant` references remain post-2026-08-16 and set Cloudflare `@cf/baai/bge-m3` as the primary embedding lane per the ordering law.
