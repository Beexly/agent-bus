# docs/arxiv-program/research/2026-09-21/arxiv-deep/2084-reflexion-language-agents-verbal-reinforcement.md
## What it is (1-2 sentences)
Deep read of arXiv:2303.11366v4 (Shinn et al. 2023) — Reflexion: LLM agents learn from failures via verbal reinforcement (binary/scalar feedback → LLM-written textual self-reflection → bounded persistent memory as context for the next trial), no gradient updates. Verdict: ADAPT — micro-loop for the GSE executor agent.
## Key metrics/methods (formulas where given, else "not specified")
- Triad: Actor M_a (CoT/ReAct), Evaluator M_e (scores trajectory; exact-match / hand-written heuristics / LLM-as-judge), Self-Reflection M_sr (writes nuanced textual lesson)
- Loop: r_t = M_e(τ_t); sr_t = M_sr({τ_t, r_t}, mem); mem ← mem ∪ {sr_t}, |mem| ≤ Ω (Ω = 1–3; 3 for AlfWorld/HotPotQA, 1 for programming)
## Data sources named
AlfWorld (134 environments), HotPotQA (100 questions sampled), HumanEval (164), MBPP, MultiPL-E Rust translations, LeetcodeHardGym (40 hard, post-cutoff). Code released by authors.
## Findings (numbers and facts, not vibes)
- AlfWorld: ReAct+Reflexion solves 130/134 (heuristic self-eval); ReAct-only converges at 22% hallucination rate with no long-term recovery; Reflexion eliminates almost all possession-confusion failures
- HotPotQA: Reflexion improves over baselines by headline 22% AlfWorld / 20% HotPotQA / 11% HumanEval; retry-only baselines solve ZERO new failed tasks on later trials at temperature 0.7; CoT(GT) still wrong on 39% even with ground-truth context; self-reflection adds 8% absolute over episodic memory alone
- Programming pass@1: HumanEval Python 91.0 (Reflexion) vs GPT-4 80.1 vs prev-SOTA 65.8; HumanEval Rust 68.0 vs 60.0; LeetcodeHard Python 15.0 vs 7.5; MBPP Python underperforms (77.1 vs 80.1) — explained by false-positive self-generated tests: P(fail | tests pass) = 16.3% MBPP vs 1.4% HumanEval
- Ablation (hardest-50 HumanEval Rust): full Reflexion 0.68; reflection WITHOUT grounded signal 0.52 (worse than 0.60 baseline — reflection without a trustworthy evaluator is actively harmful); test-gen only 0.60 (no gain)
- Key limit: reflection is only as good as the evaluator; no formal success guarantee; sliding-window memory crude (paper suggests vector/SQL stores)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Verbal-reflection loop for executor trial-and-error → OTHER
- "Reflection without a grounded evaluator is actively harmful" (0.52 < 0.60) → TRUST-SIGNAL (evaluator integrity is load-bearing)
- Permutation-based evaluator-reliability check (sign-flip/permute target; flag suspect evaluator output) → TRUST-SIGNAL
- Reflection consolidation into durable "doctrine" entries every 5 trials → OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — wrap the nflverse backtest executor in the Actor–(deterministic)Evaluator–Self-Reflection triad with bounded memory (Ω=3) in SQLite, plus a permutation-based evaluator-reliability check before any reflection is trusted; ~1–2 days on top of the 2082 harness.
