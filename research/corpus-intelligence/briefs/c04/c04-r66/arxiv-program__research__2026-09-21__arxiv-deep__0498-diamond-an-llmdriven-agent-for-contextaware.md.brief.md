# docs/arxiv-program/research/2026-09-21/arxiv-deep/0498-diamond-an-llmdriven-agent-for-contextaware.md
## What it is (1-2 sentences)
Deep-read of Kang et al. (2026, arXiv:2506.02351v1, TVING/CJ/SNU) — "DIAMOND," an LLM-driven agent for baseball highlight selection combining sabermetric scoring (WE/WPA/Leverage Index) with LLM contextual reasoning over a 5-play sliding window, plus a user-preference reflection stage. Ledger verdict: ADAPT the three-stage pipeline (Preparation → Decision → Reflection) as GSE's automated key-moment selector for NFL content production, swapping baseball metrics for nflverse EPA/WPA/leverage.

## Key metrics/methods (formulas where given, else "not specified")
- WE(s) = W_s/N_s; WPA = WE_after − WE_before; LI = |WE_after − WE_before| / Avg(|WE_after − WE_before|).
- Stage 1 (Preparation): game-log standardization; sabermetrics from precomputed tables; LLM contextual analysis per play with sliding window of 5 prior plays + WPA (Mistral-Large-Instruct-2411, 4×A100 via vLLM, temperature 0, top-p 0.1, 10k token limit, constrained prompting).
- Stage 2 (Decision): WPA transformed to 1–60 importance score (≥0.15 abs WPA + late/crucial = 40–60; 0.05–0.15 = 20–39; <0.05 = 1–19); LLM narrative adjustment +1 to +20 (strategic/momentum/visual significance); Leverage Index correction ΔR = R_WPA − R_LI — top rank-difference plays get up to +20 points decreasing 1/rank.
- Stage 3 (Reflection): user preferences (final-inning emphasis, player/thematic focus, comeback/walk-off boosting); top-K selection (K tuned per game, F1 peaks at K≈60).
- Full prompts in Appendices B.1–B.3 (reproducible). Assumptions: WE tables stationary; 5-play window captures narrative context; low-temperature LLM decoding deterministic enough for scoring; top-K with K matched to commercial highlight length is a fair comparison; ground-truth broadcast highlights are the right target; F1 on play-ID overlap measures highlight quality.
- NFL port (file's own spec): nflverse pbp → structured play records; leverage = |ΔWP|/avg|ΔWP|; recalibrated |WPA| bands (e.g., |WPA|≥0.08 = high-impact); cheap instruction model (temp 0) with 5-prior-play window writing 1–2 sentence narrative justifications + strategic adjustment (+1..+10 scaled); LI-correction for high-leverage/low-WPA plays (4th-down stops, goal-line stands); GSE preferences (primetime/close-game weighting, star-player focus, upset/comeback theming); K≈10–12 plays per recap thread.

## Data sources named
5 KBO League games (20230616 Doosan–LG, 20230919 SSG–Hanwha, 20240925 Lotte–Kia, 20160409 Hanwha–NC, 20160825 SK–KT): 2 blowouts, 2 close games, 1 comeback. Inputs: structured play-by-play logs + precomputed WE/WPA/LI. Ground truth: manually annotated official broadcast highlights (68–99 plays/game, GT highlight length 7.5–13.5 min). Videos from Naver Sports / TVING; links in Appendix C, not a downloadable dataset. No code released. NFL port names nflverse pbp (wp/wpa columns).

## Findings (numbers and facts, not vibes)
- DIAMOND′ (overlapping games): P 0.814 / R 0.886 / F1 0.848. DIAMOND full: 0.748 / 0.846 / 0.793. WPA-only: 0.635 / 0.716 / 0.673. NAVER AI: 0.818 / 0.292 / 0.429 (high precision, misses ~70% of key moments).
- Ablation: −Reflection 0.700 / 0.856 / 0.765 — Preparation+Decision stages give +9.2pp F1 over WPA-only; Reflection adds +2.8pp.
- Per game type: Blowout1 0.578, Blowout2 0.719, Close1 0.723, Close2 0.842, Comeback 0.680 (close games best; blowouts mixed).
- Experts preferred DIAMOND on narrative coherence 66.6%, scene diversity 66.6%, informativeness 66.6%, overall 66.6%; key-moment coverage 50/50. (Reader flags: n=3 curators, all TVING employees — 66.6% = 2 of 3, conflict of interest unaddressed.)
- Limitations: n=5 games — every headline number rests on five KBO games; no CIs, no significance tests; "42.9% → 84.8%" abstract claim compares DIAMOND′ against NAVER on a different K-matching basis; ground truth = broadcast highlights (entertainment products, optimizing against TV producers); K tuned per game then F1 peaks at K=60 — post-hoc K-selection; hallucination risk acknowledged but unmeasured; scoring bands are hand-set heuristics, not learned; post-game only, real-time out of scope.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Automated key-moment selector for NFL content: top-K plays with narrative blurbs feeding the recap-post and video-script pipeline for @GalaxySportsHQ (3–5 days; LLM cost trivial at ~150 plays/game × short prompts) — OTHER (content tooling; INFERENCE: nothing predictive — selects entertaining plays, not informative ones, and the paper never claims otherwise).
- LI-correction surfacing high-leverage/low-WPA plays (4th-down stops, goal-line stands) — OTHER (content signal; INFERENCE: loosely touches coaching moments but no coaching analysis in the paper).

## Engine-actionable? (yes/no + one-line what)
Yes (as a content tool, not a model) — port the pipeline to NFL with recalibrated WPA bands and LI correction, and adopt only if the 20-game NFL test beats WPA-only selection on F1 (≥5pp) and blinded narrative preference (≥60%); otherwise ship the WPA+LI selector alone.
