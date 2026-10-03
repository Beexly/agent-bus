# ops/archive/leverage/FOUNDER_COWORK_PROMPT_CREDITS_ACTIVATION.md
## What it is (1-2 sentences)
A paste-into-Cowork prompt (2026-07-08) turning a fresh Claude session into an operations co-pilot for Garrett's non-dilutive credits-activation sprint — a prioritized queue of applications (Anthropic, AWS Activate, Google for Startups, Neon, accelerators) with integrity rules and an engineering handoff back to the coding session.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — this is a human-side ops prompt; no modeling metrics or formulas.
## Data sources named
The Odds API (real odds/line data as source of truth); nflverse play-by-play (CPOE/RYOE/xYAC NFL expected-metrics IP, validated against Next Gen Stats).
## Findings (numbers and facts, not vibes)
- Credit targets: Anthropic "Claude for Startups"; AWS Activate tiers (Founders ~$1k, Portfolio $25k–$100k, GenAI up to $300k); Google for Startups ($10k Anthropic partner-model credit for Vertex AI Model Garden, Enhanced Support up to $12k, Redis Cloud up to $25k); Neon self-funded startup tier (~$1k credits ≈ a year of Postgres); accelerators (Vercel AI Accelerator, Google for Startups Accelerator AI-First) as multipliers unlocking Vercel $30k, GitHub $10k, Redis $10k, Neon $100k.
- Architecture rule: all Claude traffic must run on AWS Bedrock **InvokeModel** to stay credit-eligible; Marketplace billing and Claude-on-Azure are NOT eligible.
- Product facts restated: deterministic engines, calibrated 0–100 confidence, 7 governed production Claude surfaces (pick explainers, model-court Q&A, public journals, calibration insights, editorial drafts, brand studio, loss autopsies), Stripe tiers Free / Pro $14.99 / Elite $24.99 founding rates.
- Universal fine-print watchlist: credits expire (~12 months, never retroactive); one-per-lifetime redemptions (Stripe, Vercel); Google anti-stacking clauses; no commitments signed while on credits.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — startup credits/ops playbook; only tangentially sports (nflverse CPOE/RYOE/xYAC IP, Next Gen Stats validation).
## Engine-actionable? (yes/no + one-line what)
No — founder credits-ops document; the only engine-relevant fact (nflverse expected-metrics IP: CPOE/RYOE/xYAC validated against Next Gen Stats) is already catalogued elsewhere.
