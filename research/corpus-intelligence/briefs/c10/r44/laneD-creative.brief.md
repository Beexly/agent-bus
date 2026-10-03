# engine/research/2026-09-28/hf-leverage-round2/laneD-creative.md
## What it is (1-2 sentences)
Lane D of the 2026-09-28 HuggingFace leverage program: five verified assessments (all numbers live-checked 2026-09-28 via HF Hub API) — Spaces as marketing, AutoTrain's state, ZeroGPU training reality, Hub competitive signal, and the "cracked/uncensored models" question — each ending in a founder-frame verdict.
## Key metrics/methods (formulas where given, else "not specified")
No formulas. Key numbers: top Hub Spaces by likes — deepsite 16,610, open_llm_leaderboard 14,122, ai-comic-factory 11,282, Kolors-Virtual-Try-On 10,192, FLUX.1-dev 9,562, mteb/leaderboard 7,698, dalle-mini 5,735, IllusionDiffusion 5,461. Sports Spaces are a ghost town: most-liked sports Space has 10 likes; most-liked NFL/fantasy space 1–2 likes (seh363/Fantasy-Football-Expected-Points, 1 like). HF DA ~73, ~29M monthly visits. AutoTrain: officially UNMAINTAINED (docs banner: "no longer maintained... use Axolotl, TRL, or transformers.Trainer"); hosted no-code path ran paid Space GPUs (~$1.05/hr A10G; RoBERTa-base 1,811 rows <15 min, <$1). ZeroGPU quotas: free 5 min/day, PRO ($9/mo) 40 min/day, per-call hard wall-clock kill at declared duration, no GPU persistence between calls; hardware RTX Pro 6000 Blackwell slices. Distillation wave: FastH3 4-step DMD2 of MiniMax H3; FastWan 3-step, 16 FPS on H100, 60–90× denoising speedups; MiniMax-H3 3.63M downloads; Ternary-Bonsai-2-27B 3.45M downloads; timesfm-3.0 902 likes/1.29M downloads (only trending time-series model); Nvidia→HF $12.93B acquisition announced Sept 3, 2026.
## Data sources named
HF Hub API (/api/spaces, /api/models, sort=likes/trendingScore, 2026-09-28); ZeroGPU docs; AutoTrain docs; hao-ai-lab/fastvideo docs; vLLM blog 2026-09-01; shattered.io, tech-insider.org, aiforensics.org (July 2026 NCII investigation).
## Findings (numbers and facts, not vibes)
- Spaces as marketing: "organic HF discovery for a sports Space ≈ zero." Recommended play: build a projections/rankings explorer Space as free hosted product surface (public URL, Gradio, drive traffic externally from X); treat SEO as a lottery ticket, not top-of-funnel; Kit-client demos YES for B2B but not consumer brands (HF URL is tech-visible — conflicts with Vow & Post tech-invisible doctrine).
- AutoTrain is dead: DO NOT adopt — build fine-tune tooling on maintained Axolotl/TRL/Trainer instead.
- ZeroGPU training plan: KILL — 5 min/day free in ≤300s chunks with no persistence is "engineering theater" vs. ~$1/hr rented A10G; train the <2M movement model on real compute (A10G or GCP trial).
- Competitive: distillation commoditizes any "faster/cheaper model" moat within weeks — build where distillation can't reach (proprietary calibration data, X distribution, workflow lock-in), never the model layer.
- Abliterated/uncensored models: they exist at scale on HF (e.g., Huihui-Qwen3.8-27B 935 likes, one Sept 16 audit found 49 live uncensored repos) but verdict = STAY OUT — zero of his three lanes gain anything; refusal behavior, if it ever breaks an agent loop, gets fixed with prompt/harness engineering on API models.
- Sharp watch item: google/timesfm-3.0-pytorch (902 likes, 1.29M downloads) — only trending time-series model; watch for engine temporal modeling; nothing sports-specific exists.
- Policy risk note: July 2026 AI Forensics NCII-abuse Spaces investigation + Sept 2026 Nvidia acquisition = HF policy could tighten without warning.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- timesfm-3.0 as time-series watch item for engine temporal modeling — OTHER (model surveillance).
- Distillation half-life of model-layer moats — OTHER (competitive moat framing).
- Uncensored-model stay-out verdict (no predictive gain, brand/ToS cost) — TRUST-SIGNAL.
- AutoTrain unmaintained = don't build revenue paths on abandoned tooling — TRUST-SIGNAL.
- Spaces as demo/product surface with public-doctrine compliance (projections + rankings only, zero internals, zero NGS names) — OTHER (surface strategy).
## Engine-actionable? (yes/no + one-line what)
Yes — put google/timesfm-3.0-pytorch on the engine's temporal-modeling watchlist (the only trending time-series foundation model; zero sports competition on the Hub), and build the Gradio projections/rankings explorer Space as product surface while driving traffic externally from X.
