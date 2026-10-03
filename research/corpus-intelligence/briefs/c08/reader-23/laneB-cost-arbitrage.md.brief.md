# docs/engine/research/2026-09-28/hf-leverage-round2/laneB-cost-arbitrage.md
## What it is (1-2 sentences)
A live-verified (2026-09-28) cost comparison of inference providers (HF Inference Providers router, OpenRouter, NVIDIA NIM free tier, Groq, OpenAI, ZeroGPU, GCP spot) across three fleet workloads: 8B-class chat, transcription batch, and embeddings batch.
## Key metrics/methods (formulas where given, else "not specified")
Price tables per 1M tokens / per audio-minute / per GPU-hour, all verified live from provider pricing pages and APIs on 2026-09-28. Worked examples: 1M tokens/day 50/50 in-out mix ($/day, $/30 days); 10k transcription min/month; 10M-token embeddings one-shot. Key verdicts: Groq whisper-large-v3-turbo ($0.00067/audio-min) is ~9× cheaper than OpenAI whisper-1 ($0.006/min); HF→Novita/DeepInfra Llama-3.1-8B is ~2× cheaper than OpenRouter ($0.90–1.05/mo vs $1.95/mo at 1M tok/day); self-hosted L4 spot only beats API above ~8B tokens/mo (at 30M/mo it is ~274× more expensive); ZeroGPU overflow = $6/hr ≈ ~$13.90/1M tokens, ~400× the Novita rate.
## Data sources named
HF Inference Providers docs (18 partner roster named); openrouter.ai/api/v1/models (live); novita.ai/pricing; deepinfra.com/pricing; together.ai/pricing; openpaths plan/stt-providers.md (STT figures); fal pricing gist (azer); NVIDIA free-tier terms (developer forum, mvalentsev probe 2026-09-24); huggingface/mlclaw COSTS.md; promoclock HF profile (asOf 2026-09-17); HF ZeroGPU docs; sparecores (GCP g2-standard-4 observed 2026-09-28); huggingface.co/pricing.
## Findings (numbers and facts, not vibes)
- HF router charges no markup; routing via `model:provider` suffix or `:cheapest`/`:fastest` policies.
- Provider choice inside HF matters more than HF-vs-OpenRouter: Together Llama-8B ($0.14/$0.14) is worse than OpenRouter ($0.05/$0.08); always route `:cheapest` or pin Novita/DeepInfra.
- OpenRouter catalog (460 models scanned) has no embedding models and no Whisper/STT — only gpt-audio tokens ($2.50/$10 per 1M audio tokens).
- ZeroGPU free: 5 GPU-min/day caller quota (fixed 24h window from first use, reserve-then-settle on declared duration; default 60s duration rejects callers once remaining quota < 60s); PRO: 40 min/day; ceiling ~36k and ~240–360k 8B tokens/day respectively.
- HF free tier: $0.10/mo credits (≈2.9M 8B tokens/mo); PRO $9/mo: $2 credits ≈ 57M tokens/mo.
- NVIDIA NIM free: 40 RPM, 10k req/day, no card; flaky by reputation (404ing keys, model-ID renames, no SLA) — first-in-cascade with fallback only.
- NVIDIA announced a $12.93B agreement to acquire HF on 2026-09-03 (NIM/HF lanes may converge).
- GCP $300/90-day credit: FINAL phase only per Garrett's directive.
- OpenRouter credit top-ups carry ~5.5% fee ($0.80 min).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — infra cost arbitrage; no sports signals. Cost-stack knowledge for fleet ops only.
## Engine-actionable? (yes/no + one-line what)
Yes — move paid chat fallback from OpenRouter to HF router (Novita/DeepInfra), move transcription batch to Groq whisper-large-v3-turbo direct, use HF→Novita BGE-M3 ($0.10 one-shot) or free CPU for embeddings.
