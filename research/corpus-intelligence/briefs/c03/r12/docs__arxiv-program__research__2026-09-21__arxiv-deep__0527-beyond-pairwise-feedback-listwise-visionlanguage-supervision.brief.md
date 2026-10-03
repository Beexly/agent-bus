# docs/arxiv-program/research/2026-09-21/arxiv-deep/0527-beyond-pairwise-feedback-listwise-visionlanguage-supervision.md
## What it is (1-2 sentences)
A full-paper research ledger (arXiv:2608.25350v1, read in full, 2,866 lines) on using VLMs to produce listwise (K=3,4,5) preference rankings to train a Plackett-Luce reward model for robotic manipulation via RL; verdict: REJECT — robotic manipulation with zero sports-relevant claim, data, or transfer path.
## Key metrics/methods (formulas where given, else "not specified")
Plackett-Luce joint likelihood: P_ψ[σ^(1)≻…≻σ^(K)] = ∏_{k=1}^{K} exp(r̂_ψ(σ^(k))) / Σ_{j=k}^{K} exp(r̂_ψ(σ^(j))), segment reward r̂_ψ(σ) = Σ_t r̂_ψ(s_t, a_t); trained via negative log-likelihood. K-wise Bradley-Terry (rank-broken into C(K,2) implied pairwise comparisons); BT-Pairwise (K=2); RL-VLM-F two-stage VLM baseline. Soft Actor-Critic policy updated after reward relabeling of a 100,000-image replay buffer. Success rate (mean ± SEM across 5 seeds) per task.
## Data sources named
Meta-World simulation benchmark (Sawyer robotic arm; tasks: Drawer Open, Door Close, Button Press), GPT-5.6 Luna as the ranking VLM; no sports data of any kind.
## Findings (numbers and facts, not vibes)
- Best PL config (K=4) achieved 86% mean final success rate (Drawer Open 86±3.7, Door Close 48±19.3, Button Press 41±18.4), matching the Oracle baseline on Drawer Open.
- BT-Kwise K=5: Drawer Open 89±7.1; PL K=5: Door Close 54±13.2; BT-Kwise K=4: Button Press 45±8.2. No single ranking size or formulation dominates universally.
- PL likelihood preserves a nominally significant improvement over BT-Kwise only for Button Press at K=5; significance claims described as "nominal" by the authors.
- VLM joint visual reasoning degrades with longer rankings (K tradeoff reported, not assumed).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 86% success / best-config-per-task results: OTHER (robotics benchmark only; no sports analogue).
- PL joint likelihood vs rank-broken BT comparison: OTHER (method is a robotics supervision-efficiency study; the PL equation is already in the standard sports-rating toolkit and the paper advances no sports theory around it).
- No QB-BEHAVIOR / COACHING / OL / TRUST-SIGNAL / SCHEME connections — none exist in the paper.
## Engine-actionable? (yes/no + one-line what)
No — robotics control paper; the only mathematically shared object (Plackett-Luce ranking) is already in the engine's standard toolkit, and the paper contributes nothing sports-actionable.
