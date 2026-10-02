# docs/arxiv-program/research/2026-09-21/arxiv-deep/1933-pretrained-llm-adapted-with-lora-as-decision-transformer.md
## What it is (1-2 sentences)
Read-notes on a 2024 paper (Suyeol Yun, arXiv:2411.17900) that uses a pretrained GPT-2 as the backbone of a Decision Transformer, fine-tuned with LoRA, to learn quantitative-trading policies from offline expert trajectories. Verdict in file: ADAPT — upgrades the ledger-1924 Decision-Transformer staking plan by warm-starting from a pretrained sequence model instead of training from scratch.
## Key metrics/methods (formulas where given, else "not specified")
- Standard DT formulation: trajectory τ=(R̂_1,s_1,a_1,…,R̂_T,s_T,a_T); autoregressive next-action prediction conditioned on returns-to-go.
- LoRA: W = W_0 + BA with low-rank update (rank r ≪ d); W_0 frozen at GPT-2 pretrained values; only the small LoRA parameters update.
- Objective: supervised action-matching loss on expert trajectories ("encourages the model to generate actions that closely match the expert actions in the offline dataset").
- Evaluation metrics: cumulative return %, maximum drawdown %, Sharpe ratio.
## Data sources named
Simulated trading of 29 DJIA constituent stocks. Phase 1: five RL algorithms (A2C, DDPG, PPO, TD3, SAC) trained as experts on 2009-01-01 → 2020-07-01 (~2,892 trading days). Phase 2: expert trajectories collected as offline training set. Phase 3: evaluation 2020-07-01 → 2021-10-29 (~335 trading days). Market data: DJIA constituents (public via standard vendors). Replication code stated as public (URL not extracted in the notes).
## Findings (numbers and facts, not vibes)
- A2C-expert block (Table 2, test period; return % / MDD % / Sharpe): Expert 34.69/−9.12/1.60; **DT-LoRA-GPT2 43.72±2.04/−8.42±0.57/1.76±0.08**; DT-LoRA-Random 38.66±0.43/−9.42±0.18/1.80±0.02; CQL 48.00±3.75/−9.32/2.23±0.10; IQL 40.26±3.24/−10.12±0.58/1.84±0.15; BC 40.10±1.22/−8.24±0.43/1.71±0.11.
- DDPG-expert block: Expert 48.44/−9.33/2.26; DT-LoRA-GPT2 47.98±1.35/−9.47±0.21/2.22±0.04; DT-LoRA-Random 42.88±1.89/(rest cut off in extraction).
- GPT-2 initialization consistently beats random initialization (43.72 vs 38.66 on A2C; 47.98 vs 42.88 on DDPG).
- DT-LoRA-GPT2 beats the expert it learned from on A2C trajectories and matches it on DDPG.
- CQL is the strongest baseline on raw return/Sharpe in the A2C block — value-based offline RL still competitive despite the pretraining gain.
- Caveats noted: single 335-day bull-market recovery test window; offline data high-quality by construction; single author, ICAIF '24 workshop paper; GPT-2 is tiny/old so the transfer claim with modern models is untested.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: staking-policy architecture — DT with returns-to-go prompting (prompt target season return, decrement weekly) as an alternative to CQL; GSE implementation uses season-episode trajectories (weekly R̂_t, s_t, stake-vector a_t), LoRA rank 8–16, fine-tune on 2019–2023 seasons with a random-init control.
- OTHER: the pretrained-vs-random control experiment is a methodological template — any pretrained-sequence claim must beat its random-init twin (gate: ≥1pp ROI) before adopting the complexity.
## Engine-actionable? (yes/no + one-line what)
Yes — warm-start the Decision-Transformer staking model (ledger 1924) from a pretrained causal LM + LoRA instead of from scratch, and ADOPT only if it beats the random-init twin by ≥1pp ROI and beats fractional-Kelly by ≥2pp on the 2024 holdout.
