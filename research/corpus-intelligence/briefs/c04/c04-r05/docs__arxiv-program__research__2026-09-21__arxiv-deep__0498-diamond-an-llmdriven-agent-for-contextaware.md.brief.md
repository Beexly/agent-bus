# docs/arxiv-program/research/2026-09-21/arxiv-deep/0498-diamond-an-llmdriven-agent-for-contextaware.md
## What it is (1-2 sentences)
Deep-read ledger of Kang, Kwon, Lee & Kim (2026) "DIAMOND: An LLM-Driven Agent for Context-Aware Baseball Highlight Summarization" (arXiv:2506.02351v1): a three-stage pipeline (Preparation: structured logs + sabermetrics → Decision: LLM contextual scoring over a 5-play sliding window → Reflection: user-preference re-ranking) for selecting baseball highlights, beating WPA-only ranking and NAVER AI. Verdict: ADAPT as GSE's automated key-moment selector for NFL content production, swapping baseball WPA/WE/LI for nflverse EPA/WPA/leverage.
## Key metrics/methods (formulas where given, else "not specified")
- WE(s) = W_s/N_s; WPA = WE_after − WE_before; LI = |ΔWE|/Avg(|ΔWE|).
- Scoring: WPA → 1–60 importance bands (≥0.15 abs WPA + late/crucial = 40–60; 0.05–0.15 = 20–39; <0.05 = 1–19); LLM narrative adjustment +1 to +20; Leverage Index correction ΔR = R_WPA − R_LI — top rank-difference plays get up to +20 points decreasing 1/rank.
- LLM: Mistral-Large-Instruct-2411 via vLLM (4×A100), temperature 0, top-p 0.1, 10k token limit, constrained prompting; prompts fully specified in paper Appendices B.1–B.3.
- Reflection: user preferences (final-inning emphasis, player/thematic focus, comeback/walk-off boosting); top-K selection (K tuned per game, F1 peaks at K≈60).
## Data sources named
5 KBO League games (2 blowouts, 2 close, 1 comeback) with structured play-by-play logs + precomputed WE/WPA/LI; ground truth = manually annotated official broadcast highlights (68–99 plays/game, 7.5–13.5 min GT length); videos from Naver Sports / TVING. No public dataset release; no code release.
## Findings (numbers and facts, not vibes)
- DIAMOND′ (overlapping games): P 0.814 / R 0.886 / F1 0.848. DIAMOND full: 0.748 / 0.846 / 0.793. WPA-only: 0.635 / 0.716 / 0.673. NAVER AI: 0.818 / 0.292 / 0.429 (high precision but misses 70% of key moments).
- Ablation: −Reflection 0.700 / 0.856 / 0.765 — Preparation+Decision stages give +9.2pp F1 over WPA-only; Reflection adds +2.8pp.
- Per game type: Close1 0.723, Close2 0.842, Comeback 0.680, Blowout1 0.578, Blowout2 0.719 (close games best; blowouts mixed).
- Expert preference (3 TVING curators, employees of the authors' own company — COI unaddressed; 66.6% = 2 of 3): DIAMOND preferred on narrative coherence 66.6%, scene diversity 66.6%, informativeness 66.6%, overall 66.6%; key-moment coverage 50/50.
- Limitations flagged: n=5 games (no CIs, no significance tests); ground truth = entertainment-optimized broadcast highlights (optimizing F1 against them trains mimicry of TV producers); K tuned post-hoc per game to match NAVER video length; hallucination risk acknowledged but unmeasured; scoring bands hand-set, not learned; post-game only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- Automated first pass for weekly recap content and clip selection for @GalaxySportsHQ: ranked play list with narrative blurbs → feeds recap-post and video-script pipeline — OTHER (content tooling).
- NFL port: |WPA| bands recalibrated (e.g., |WPA| ≥ 0.08 = high-impact), LI-correction for high-leverage/low-WPA plays (4th-down stops, goal-line stands), Reflection with GSE preferences (primetime/close-game weighting, star-player focus, upset/comeback theming); top-K ≈ 10–12 plays — OTHER.
- No QB behavior, coaching, OL, trust-quote, or scheme content in the file.
## Engine-actionable? (yes/no + one-line what)
Yes — port to NFL (3–5 days, trivial LLM cost): test on 20 stratified 2024 games vs. WPA-only top-K and top-EPA selector; adopt iff F1 beats WPA-only by ≥5pp AND blinded narrative preference ≥60%, else ship the WPA+LI selector alone (paper's own ablation shows the statistical stages carry most of the +9.2pp); never use it for anything predictive.
