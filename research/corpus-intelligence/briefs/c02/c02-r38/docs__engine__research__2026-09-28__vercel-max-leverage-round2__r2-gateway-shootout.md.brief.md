# docs/engine/research/2026-09-28/vercel-max-leverage-round2/r2-gateway-shootout.md

## What it is (1-2 sentences)
A 2026-09-28 price shootout comparing Vercel AI Gateway, OpenRouter, Neon AI Gateway, and direct provider pricing across a 7-model "agent fleet" basket (DeepSeek V3, Claude Sonnet 5.5, Grok 4.7, Llama 3.1 8B, Qwen3 235B A22B, GPT-4o-mini, gpt-oss-120b), all numbers live-fetched that day with source URLs + dates; verdict: Vercel is at parity-or-cheaper than OpenRouter on every basket model.

## Key metrics/methods (formulas where given, else "not specified")
- All prices USD per 1M tokens (input / output); blended cost = (3×in + 1×out)/4 (3:1 input:output ratio).
- OpenRouter effective multiplier: fee charged at purchase (5.5% Stripe, min $0.80), so effective per-token = list × 1.055; e.g. $50/mo → pay $52.75; $200/mo → pay $211.00.
- Blended effective (3:1) per model, Vercel list vs OpenRouter effective vs Direct vs Neon: Sonnet 5.5 — $4.00 / $4.22 / $4.00 / queued; Grok 4.7 — $3.00 / $3.17 / $3.00 / queued; Llama 3.1 8B — unverified / $0.0607 / n/a / $0.225; Qwen3 235B — unverified / $0.8400 / queued / 80B $0.4125; GPT-4o-mini — $0.2625 / $0.2769 / $0.2625 / queued; gpt-oss-120b — unverified / $0.2769 / n/a / $0.2625 (or $0.132 flagged); DeepSeek V3 legacy — unverified / $0.4789 / retired / n/a.

## Data sources named
- OpenRouter live model API (https://openrouter.ai/api/v1/models, fetched 2026-09-28)
- Vercel docs (https://vercel.com/docs/ai-gateway/pricing, updated 2026-09-08) and Vercel models catalog (rendered 2026-09-28)
- Neon docs (https://neon.com/docs/ai-gateway/overview)
- Direct provider docs/pricing: Anthropic, xAI (https://docs.x.ai/developers/pricing), OpenAI, DeepSeek (https://benchlm.ai/deepseek/api-pricing), NVIDIA build.nvidia.com
- https://ofox.ai/blog/openrouter-pricing-hidden-markup-breakdown-2026/ (OpenRouter no-markup verification, 2026-08-31)
- https://github.com/anomalyco/models.dev/pull/3019 (July 2026 Neon gateway probe)
- artificialanalysis.ai, unite.ai, felloai.com (Sonnet 5.5 launch pricing)

## Findings (numbers and facts, not vibes)
- **Headline: Vercel AI Gateway at parity-or-cheaper than OpenRouter on every basket model** because of OpenRouter's 5.5% deposit fee; exactly at direct-provider list everywhere else (zero markup). BYOK on Vercel = provider list with $0 gateway fee. [OTHER]
- **Claude Sonnet 5.5** released 2026-09-28 at $2.00/$10.00 (cache read $0.20, write $2.50) — Vercel $2/$10, OpenRouter $2.11/$10.55 effective. [OTHER]
- **Grok 4.7** $2.00/$6.00 (<200k prompt; $4.00/$12.00 ≥200k; cached $0.50/$1.00; US regional ×1.1). Vercel changelog advertised "40% off" at launch, but the live catalog on 2026-09-28 showed $2/$6 — discount not currently visible, queued for re-verification. [OTHER]
- **DeepSeek V3 (deepseek-chat) retired 2026-07-24**; current replacements: `deepseek-flash` $0.30/$1.20 peak ($0.15/$0.60 off-peak), `deepseek-v4-pro` $1.32/$3.96 peak ($0.66/$1.98 off-peak). DeepSeek is the **only basket model family with no no-prompt-training agreement on AI Gateway** — default posture is "assumed to train"; with `disallowPromptTraining` set, DeepSeek routes become unavailable (request fails or routes elsewhere). [OTHER]
- Vercel free tier: **$5/mo AI Gateway credits**, starts on first request, needs a valid payment method; **first top-up permanently forfeits the monthly free credit.** BYOK requires paid tier + positive credit balance (fallback on system credentials billed to credits); insufficient funds → 402. Per-request ZDR is FREE (Pro/Enterprise); `disallowPromptTraining` filter is FREE for all users. [OTHER]
- OpenRouter: 5.5% card fee ($0.80 minimum, 5% crypto), credits expire after 1 year, no volume discounts; BYOK free under $25k/mo list-price inference. [OTHER]
- Neon AI Gateway: Databricks Foundation Model APIs passthrough, no markup, paid Neon plans only, $5 minimum prepaid credits valid 12 months. Neon carries Qwen3 80B at $0.15/$1.20 and 122B at $0.22/$2.20 but 235B A22B unconfirmed; gpt-oss-120b entries inconsistent ($0.15/$0.60 vs models.dev-flagged $0.072/$0.28); `claude-sonnet-5` NOT available (July probe), `claude-sonnet-4-6` works. [OTHER]
- Qwen3 235B A22B SKU **expires 2026-10-09 on OpenRouter.** [OTHER]
- None of the basket models carried a Vercel catalog discount badge on 2026-09-28 (discounts exist for other models, e.g. −59% to −80% on several Gemini/experimental SKUs). [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- All findings are LLM-cost/provider mechanics: OTHER

## Engine-actionable? (yes/no + one-line what)
yes — Route engine inference through Vercel AI Gateway on paid tier with BYOK (provider-list pricing, $0 gateway fee, free per-request ZDR) instead of OpenRouter to kill the 5.5% deposit fee, and set `disallowPromptTraining`/ZDR explicitly for the DeepSeek slice since it is the only model family assumed to train.
