# docs/ops/JYNX_MARKET_TIER_MAP.md
## What it is (1-2 sentences)
A model-routing cost map (Jynx) for the Jul 27–Aug 2 window, assigning model tiers (Haiku/Sonnet/Opus) to GSE surfaces and defining rules for when market-trending models may (or may not) be promoted into the free lane, cloud credit paths, or production trust surfaces.
## Key metrics/methods (formulas where given, else "not specified")
- Tier↔surface map: Haiku (`claude-haiku-4-5-20251001`) → brief, calibration-insight; Sonnet (`claude-sonnet-4-6`) → studio, journal, content, model-court; Opus (`claude-opus-4-8`) → model-court (recommended). 39 free models in the free-lane map (`JYNX_OPEN_WEIGHT_FREE_MAP.md`).
- Law: unset env = current MODELS defaults; no silent flip to unmapped Opus 5. `CLAUDE_PROVIDER=auto`, `CONTENT_FREE_LANE_ENABLED=true`.
## Data sources named
- Public market rankers (e.g. LM Market Cap style "hot / gainers"); cloud credit paths: Bedrock, Azure Foundry, Vertex (`BEDROCK_MODEL_MAP` / `AZURE_FOUNDRY_MODEL_MAP` / `VERTEX_MODEL_MAP`); related docs: `model-router.ts`, `JYNX_COST_STACK.md`, `JYNX_OPEN_WEIGHT_FREE_MAP.md`, `CLOUD_CREDIT_LAUNCH_MAP.md`.
## Findings (numbers and facts, not vibes)
- Market-heat reactions: Claude Opus 5/4.8/4.7 "hot" → quality ceiling for model-court/deep work only after `MODEL_OPUS` + cloud map; GPT-5.5/5.4 Pro batch → cash/credit hosts only, not free-lane for public claims; GPT-3.5/Nova/old Qwen "losers" → do not add to free-lane for quality theater.
- Hard rules: don't chase "Claude Fable 5 batch" into production free-lane; don't swap defaults to GPT/Gemini for trust surfaces (board copy, receipts); don't conflate GSE `/fable` evidence lab with Anthropic's "Fable" model SKU; don't pay list price while Activate/Foundry/Vertex/free-lane credits sit idle.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (TRUST-SIGNAL) Policy that trust surfaces (board copy, receipts) must not use swapped-in cheaper models without mapping — protects public-facing prediction credibility; calibration-insight runs on the cheap tier (Haiku).
- (OTHER) Cost-routing ops; no football content.
## Engine-actionable? (yes/no + one-line what)
No — model-cost routing policy; only engine-adjacent note is that calibration-insight content is Haiku-tier and trust surfaces are protected from silent model swaps.
