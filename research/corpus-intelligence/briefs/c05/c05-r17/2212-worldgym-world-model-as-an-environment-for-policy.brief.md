# arxiv-program/research/2026-09-21/arxiv-deep/2212-worldgym-world-model-as-an-environment-for-policy.md
## What it is (1-2 sentences)
A full-text ledger of arXiv:2506.00613 (WorldGym, Quevedo et al. 2025), which tests whether a learned world model (latent Diffusion Transformer on robot video) can serve as an offline policy-evaluation environment, scoring arbitrary control policies with rankings that correlate with real-world performance. Verdict: ADAPT; this is the corpus's only ledger addressing the *evaluation* side rather than simulator construction.
## Key metrics/methods (formulas where given, else "not specified")
- Policy value ρ(π) = E[R(s_H, g)] (eq. 1); world-model estimate ρ̂(π) via Monte Carlo rollouts in learned model T̂ with learned reward R̂ (eq. 2). Multi-task POMDP formalism with sparse {0,1} rewards.
- Reward: GPT-4o as VLM judge on generated frames + language instruction, partial-credit criteria (0/0.5/1).
- Metrics: Pearson r between world-model and real success rates; mean absolute gap; rank consistency across versions/sizes/checkpoints.
- Key finding: real-vs-world-model success rates Pearson r = 0.78 (p < 0.001) per task; mean rates differ by 3.3% on average.
- Caveats: realistic object interaction remains weak; an earlier abstract reported in-distribution underestimation / OOD overestimation (same off-distribution pathology as ledger 2211's MuZero finding); no uncertainty quantification on ρ̂(π).
## Data sources named
Open-X Embodiment robot dataset (Bridge, RT-1, VIOLA, Berkeley UR5, Google Robot); real-world trial first-frames from Kim et al. (OpenVLA) — 10 trials × tasks. Code/videos: https://world-model-eval.github.io.
## Findings (numbers and facts, not vibes)
- RT-1-X: 18.5% real vs 15.5% world-model; Octo: 20.0% vs 23.8%; OpenVLA: 70.6% vs 67.4%.
- Rankings preserved across RT-1-X < Octo < OpenVLA, Octo-Small 1.5 < Octo-Base 1.5, OpenVLA v0.1 < OpenVLA 7B, and training checkpoints 2K→18K / 10K→60K.
- OOD: OpenVLA confused carrot-vs-orange by proximity (shape confusion); distracted by on-screen carrot image in 15% of trials; color classification "pick red/blue" — OpenVLA 100%, others near chance.
- Compute: days of real eval vs <1 hr on a single GPU.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: ledger pairs with 2211 (MuZero audit) — trust *rankings* of policies in a simulator, never absolute point values; paper documents in-dist underestimation / OOD overestimation bias.
- OTHER: ledger proposes a "GridironGym" offline policy-evaluation harness for GSE: Monte Carlo game trajectories from real initial game states, learned outcome head as reward, validation by Spearman rank correlation vs real backtest.
## Engine-actionable? (yes/no + one-line what)
Yes — acceptance gate spec is written: ADOPT the offline evaluation harness for deployment decisions if Spearman ρ ≥ 0.7 vs held-out backtest rankings AND it identifies the best challenger on ≤50% of real-game sample, with bias correction on absolute values.
