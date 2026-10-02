# research/2026-09-21/arxiv-deep/2209-decentralized-collective-world-model-for-emergent-REJECT.md
## What it is (1-2 sentences)
A full-paper REJECT ledger for arXiv:2504.03353 (Nomura, Aoki, Taniguchi & Horii, 2025) on decentralized collective world models with emergent inter-agent communication; rejected because the paper's own experiments show decentralized emergent communication is second-best to centralized models, and GSE trains/serves on centralized NGS tracking data so the motivating constraint doesn't apply.
## Key metrics/methods (formulas where given, else "not specified")
- Model: per-agent RSSM world models with representation q(s_t^k|s_{t−1}^k,m_{t−1},a_{t−1}^k), transition p(s_t^k|s_{t−1}^k,m_{t−1},a_{t−1}^k), observation p(o_t^k|s_t^k), plus shared message variable m_t.
- Key approximation: joint message posterior incalculable in decentralized systems → Product-of-Experts p(m_t)≈C∏_k p(m_t^k), q(m_t|{s_t^k})≈C∏_k q(m_t^k|s_t^k) (eq. 3), with bidirectional message exchange and contrastive learning for message alignment.
- Dec-POMDP formalization; CPC variational objective with message variable.
- Policies trained by behavioral cloning on pre-generated expert cooperative data — NO RL skill acquisition; world model not used for planning/imagination.
- Evaluation: 100 trials per condition; metric = mean max cross-correlation ± std between drawn trajectories and ideal hypotrochoid; message quality via RSA (Spearman correlation between message dissimilarity matrices and true trajectory).
## Data sources named
Synthetic two-agent trajectory-drawing task (hypotrochoid drawings; point P random per trial; observation binned into finite-bin Dec-POMDP conditions). No real-world data, no public dataset. No code or data released.
## Findings (numbers and facts, not vibes)
- Conditions: Markov Game (full observability), BC (behavioral cloning + communication), EC (proposed emergent communication), NC (no communication).
- Full observability: all conditions comparable (communication unnecessary).
- Dec-POMDP: BC > EC > NC; EC beats NC increasingly as bins decrease, but w/ vs w/o communication (Fig. 5) shows "minimal differences" with overlapping std except at bin=1.
- Abstract concedes emergent communication achieves "the second-best coordination after centralized models."
- RSA: emergent messages structurally reflect environment state (positive signaling) — a representation result, not a performance result.
- GSE overlap: ledgers 2207/2208 already cover centralized aggregation (hub attention, Perceiver) for the same multi-agent coordination problem, with quantitative wins not second-best.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the negative architectural decision is the intel — decentralized emergent-communication multi-agent models underperform centralized aggregation (BC > EC > NC), which endorses the existing centralized NGS tracking pipeline and rejects a decentralized redesign. No QB/coaching/OL/trust-signal content.
## Engine-actionable? (yes/no + one-line what)
No — REJECT stands: no concrete NFL implementation passed a numeric gate; the only action is preserving the rejection gate (revisit only if a follow-up shows emergent-communication world models beating centralized aggregation on a ≥10-agent continuous-control task with full observability available).
