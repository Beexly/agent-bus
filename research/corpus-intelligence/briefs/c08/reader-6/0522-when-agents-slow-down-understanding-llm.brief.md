# docs/arxiv-program/research/2026-09-21/arxiv-deep/0522-when-agents-slow-down-understanding-llm.md

## What it is (1-2 sentences)
Liu et al. (2026, arXiv:2609.15309): measures how LLM agent performance scales with test-time compute via "Elo-per-token" — Bradley-Terry ratings of (system, token-budget) checkpoints — proving a distribution-free reference (independent sampling gains exactly 400 Elo per decade of compute) and deriving an inflection-point rule for splitting a fixed token budget across parallel sessions. File verdict: **ADAPT** — the Elo-per-token framework ports to GSE as a cross-scale way to rate model versions/lineup builds and allocate Monte-Carlo/model-seed compute; the agent-scaling conclusions themselves are not sports-relevant.

## Key metrics/methods (formulas where given, else "not specified")
- Session → best-so-far trajectory: S_τ(b) = max{score_i : tokens_i ≤ b}.
- Checkpoint players p_{a,b} = (system a, budget b); within-task pairwise games y ∈ {1, ½, 0}; cross-task aggregation by Bradley-Terry: E[y_pq] = 1/(1 + 10^(−(r_p−r_q)/400)), one player anchored at 1000, MLE via minorization–maximization (Hunter 2004), λ=21 symmetric pseudo-games per pair; session-level bootstrap (500 replicates) for 95% CIs.
- Theorem 3.1 (sampling reference): for i.i.d. continuous scores, population Elo(best-of-n) − Elo(best-of-m) = 400 log10(n/m) ⇒ s_ref = 400 Elo/decade (proof: Pr(M_n > M_m) = n/(n+m)).
- Inflection point: b_inf = sup{b : dr/d log10 b > 400}; allocation rule K = max(1, ⌊B/b_inf⌉) parallel sessions.
- Theorem 6.1: if post-inflection slope < s_ref, frozen-state repeated sampling from the b_inf state asymptotically outgains continuing the session. Theorem 6.2: K sessions to b_inf, best-of-K ⇒ +400 log10 K Elo over one session. Theorem 7.1 (sticky-basin): basin means i.i.d. from π, within-basin N(μ,σ²); lim_{T→∞} Pr(M_{cT} > M_T) = 1/2 — basin choice dominates depth.
- Nested allocation experiment: 5 disjoint groups of 10 Kimi Code sessions on Polyomino Packing (budgets 100M/50M/33.3M/25M/20M/10M), 20,000 random session-to-group assignments averaged.

## Data sources named
- Four open-ended benchmarks, 14 tasks total, deterministic evaluators with continuous scores: FrontierCS (4 algorithm/CS problems), ALE-Bench (AHC031/038/040 rehosted heuristic contests), MLS-Bench (clustering design + neural-architecture search), FlashInfer-Bench (5 GPU kernels: GEMM, paged GQA/MLA attention, MoE, RMSNorm).
- Agents: Kimi Code (K2.7), Codex (GPT-5.5), Claude Code (Opus 4.8), Gemini CLI (Gemini 3.5 Flash); 5 independent sessions × (system, task), up to 100M cache-inclusive tokens per task.
- Humans: submission histories of top-50 finishers from AtCoder Heuristic Contests (7 long contests pooled; AHC014/038/040/031 rejudged; validity filter: prefix-max scores must reproduce official top-50 standings ≥90% pairwise).
- Intervention arms: AdaEvolve + GEPA (5 runs × 4M uncached tokens), TTT-Discover test-time RL (gpt-oss-20b, 5 runs, 6.6M generated tokens), Qwen3.5 size sweep (27B, 35B-A3B, 122B-A10B, 397B-A17B).
- Code: github.com/agent-tts/Agent-TTS-Code (per §1 header).

## Findings (numbers and facts, not vibes)
- All four agent systems improve 100K→100M tokens on all benchmarks, but pooled self-Elo slopes fall below 400 Elo/decade at the largest budgets (concave in log compute).
- Humans: top-10 and top-50 cohorts convex in log contest time across 7 pooled AHCs (superlinear); on AHC014 joint-Elo, both agents flatten within their 72h runs while top-10 humans overtake them over days.
- Interventions: AdaEvolve leads Kimi Code by >300 Elo near 100K tokens, all three within ~20 Elo at 1M+ (early gain, same diminishing shape); TTT-Discover briefly superlinear then decays to reference; no strategy sustains superlinear self-Elo.
- Allocation (Polyomino Packing, Kimi K2.7): b_inf = 38M ⇒ predicted K=3 at 100M; 3 sessions gain +264 joint-Elo over 1×100M and +355 over 10×10M; session-bootstrap 90% intervals [+135, +412] vs 1 session, [+226, +618] vs 10; 3-way highest in 79% of replicates. MLS-Bench replication: b_inf = 58M; 1/2/3-session allocations statistically indistinguishable, two-session gain over ten sessions spans [−56, +326] (inconclusive).
- Size sweep (Qwen3.5, Polyomino, 50M budget): 397B-A17B starts 525 Elo above dense-27B at 500K but gains least after (+278 vs +552 for 27B over two decades); best-raw scores cluster 0.67–0.71 regardless of size; best-per-trial spread falls 0.184 (27B) → 0.024 (397B).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: transfers as meta-ML machinery, not a sports method — (a) a "GSE model arena" rating engine model versions/feature-set variants/optimizer seeds pairwise across weekly-slate tasks with joint-Elo (production anchored at 1000), solving the real problem that slate ROI and prop log-loss live on different scales; (b) a 400-Elo-per-decade-style compute-efficiency null for randomized improvement loops (Monte Carlo lineup search, stochastic optimizer restarts) with a restart-vs-extend stopping policy.
- TRUST-SIGNAL: Bradley-Terry ratings with bootstrap CIs could feed the model-approval gate — but only if cross-week rating stability is demonstrated first (acceptance gate: CI width <150 Elo on version gaps).

## Engine-actionable? (yes/no + one-line what)
Yes — build the model arena (Bradley-Terry MM fit + bootstrap CIs + nightly arena harness on weekly slate results) and the restart-allocation rule for the DFS optimizer and backtest runner (~2–3 days); accept only if cross-week ratings are stable and the sampling-reference check matches within ±20% on the restart experiment.
