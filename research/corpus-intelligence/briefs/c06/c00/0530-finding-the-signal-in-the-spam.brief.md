# arxiv-program/research/2026-09-21/arxiv-deep/0530-finding-the-signal-in-the-spam.md
## What it is (1-2 sentences)
Deep read of Shejole et al. (2026, arXiv:2608.10045v1): joint estimation of item rewards and worker reliability from pairwise comparisons — a Boltzmann-rational extension of Bradley–Terry–Luce (worker competency β_s scales the reward difference), fit with a Pólya-Gamma EM algorithm with a rank-1 matrix-sensing convergence proof. Verdict in file: ADAPT — portable to fusing heterogeneous prediction sources into one BT team-rating layer, with adversarial/spammer handling reduced to analyst-source reliability weights.
## Key metrics/methods (formulas where given, else "not specified")
- P(w≻l;s) = σ(β_s(r_w − r_l)); β=1 ideal, β=0 spammer, β=−1 adversarial.
- EM: E-step κᵢ = tanh(ηᵢ/2)/(2ηᵢ), ηᵢ = β_{s_i}(r_{w_i}−r_{l_i}); M-step β_s = (Σ d_i)/(2Σ κ_i d_i²) closed form; rewards via Hr = b, Σr=0 (conjugate gradient); Pólya-Gamma ω_i ~ PG(1,0).
- Identifiability: center rewards + unit-RMS normalization with compensatory β rescaling each iteration; β clipped to [−1,1]; rewards init 0, β init 0.8.
- Theory: M-step as rank-1 matrix sensing min ‖A(βrᵀ)−u‖², RIP when N ≥ C·MK/δ²·ln(2/η); every local minimum near-global; EM monotonically increases likelihood.
## Data sources named
Synthetic (N 2k–100k); FaceAge (IMDB-WIKI-SbS: K=9,150 items, M=4,091 workers, N=250,249 comparisons; spammers pre-removed); Passage/Reading Difficulty (K=472, M=624, N=11,763); spammer-injection study (4 archetypes, up to 44.4% of annotators). Code: https://github.com/KaustubhShejole/BoRa_EM.
## Findings (numbers and facts, not vibes)
- FaceAge: BoRaEM accuracy 79.21% / weighted 87.36% / τ=0.5795 / 6.55 s — best, narrowly ahead of HBTL (79.20/87.35/0.5793, 83.1 s) and plain BT (79.01/87.20/0.5754, 0.89 s); gaps are ~0.04% but BoRaEM is 10–25× faster than competence-modeling competitors.
- Spammer injection 0%→44.4%: BoRaEM/HBTL/HTCV remain best across all four archetypes; BARP/BT/RC degrade substantially.
- Synthetic: competence-modeling methods stable at all N; BoRaEM more robust than CrowdBT at sparse N < 4000; all decay as per-worker observations thin.
- Limitations flagged: synthetic draws come from the fitted model (best-case); real-data gains over plain BT are tiny (+0.20%); β∈[−1,1] adversarial regime not operative for analysts (use β∈[0,1], where non-competence methods are comparatively better); RIP needs uniform sampling NFL reality lacks; method optimizes rank, not calibrated probabilities — needs a separate logistic calibration step.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: learned per-source reliability weights inside the rating estimator — the first corpus method to jointly estimate source reliability with the ratings themselves (GSE's ratings are single-source or fixed/ad-hoc weights); adjacent to the 2026-09-18 reverse-engineering mission's heterogeneous-analyst aggregation.
## Engine-actionable? (yes/no + one-line what)
yes — port BoRaEM to multi-source team-rating fusion (teams as items, sources as workers: market-implied, Sagarin, PFF, analyst models) with β∈[0,1], then logistic-calibrate; adopt only if it beats plain BT by ≥0.002 Brier on held-out 2025 with stable β ranks (rank corr ≥ 0.8 across windows).
