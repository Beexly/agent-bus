# arxiv-program/research/2026-09-21/arxiv-deep/0324-a-machine-learning-framework-for-off.md
## What it is (1-2 sentences)
A deep-read ledger of Groom et al. (2026, arXiv:2601.00748) on off-ball defensive evaluation in soccer corners: a label-free covariate-dependent HMM infers man/zone roles from tracking data, then role-conditioned ghosting counterfactuals attribute defensive credit (Group Coverage Advantage). Verdict in the file: ADAPT — the CDHMM role inference + role-conditioned ghosting + GCA method stack ports directly to NFL pass-coverage evaluation on NGS tracking data.
## Key metrics/methods (formulas where given, else "not specified")
- CDHMM: per-defender latent states = K=10 man-marking + 1 zonal. Emissions: zonal `D_{t,j} ~ N(μ_z, Σ_z)` (Hungarian zone assignment); man-marking `D_{t,j} ~ N(γ_o^{(l)} O_{t,k} + γ_g^{(l)} G, σ²^{(l)})`, γ_o+γ_g=1, per 3m×3m pitch bin (marking tightness higher near goal).
- Covariate-dependent transitions: man self `p_m = σ(β_m⊤X^{(m,k)})`; switch to another attacker `(1−p_m)·softmax(β_s)`; man→zonal prohibited (=0, coach-imposed); covariates: distance, tangential relative velocity `v^⊥`, heading alignment cos θ, convergence metric `(v_{t,k}−v_{t,j})⊤(p_{t,k}−p_{t,j})/(‖p_{t,k}−p_{t,j}‖+ε)`, heights/weights, Mahalanobis zone distance.
- Training: EM with L-BFGS-B ≤100 iters for β (λ_m=λ_z=100, λ_s=1000); 10 models × 15 iterations per team×delivery, best by observation likelihood.
- First-contact GNNs: MLP+GATv2×4 (8 heads, dim 4) on 22-node graph vs D2-equivariant TacticAI reimplementation; weighted cross-entropy.
- Credit metrics: OBPR_j = Σ γ_{tjk}·(1−Pr(atk)); counterfactuals — Reception Suppression (10), Recovery Gain (11), Threat Suppression (12), Counterattack Value (13); **Group Coverage Advantage** GCA_{tj} = min_{k′∈K_{jt}} E_{x|k′}[Σ_k Pr(atk|x)] − Σ_k Pr(atk|d_{tj}) (1)/(18).
- Coach-facing: context-aware man-marking attention CA_k, attacker evasiveness ES(k) = φ_goal(t_c)·Δd, effective attackers exp(H), switch rate.
## Data sources named
- EPL player tracking (25 fps) + synchronized event logs, four seasons 2020/21–2023/24; 14,678 corner sequences (13,752 after excluding short corners). Proprietary — NOT shareable; code not public.
## Findings (numbers and facts, not vibes)
- First-contact prediction top-3 accuracy: human analysts 23.75% ± 4.52%; GNN (100% data) canonicalised 48.07% vs TacticAI reimpl 47.43% (paired t-test p=0.0088) — ~202%/200% of human baseline; at 50% data 44.81% vs 45.22% (p=0.2472).
- Corners ~10/match; 11% of 2024/25 EPL goals (StatsBomb event data).
- GCA: Cohen's d < 0.11 inswing vs outswing (negligible mean difference); delivery type changes GCA shape/volatility, not mean (KS p=1.24×10⁻⁴³ vs MWU p=8.96×10⁻¹⁷ for |K|=1); outswinging = higher-entropy situations; GCA variance expands with |K| (1→5).
- Sensitivity: β_m, β_z converge quickly; β_s (switching) stays variable (rare events); inswing models achieve higher normalized likelihood than outswing.
- Stated limitations: OBPR uses smoothed posteriors (future leakage — authors flag forward probabilities as the causally-safe variant); no uninvolved state; geometric durations; man→zonal zero imposed by coach fiat; TacticAI replication gap (47% vs original 75%) attributed to annotation differences; no held-out-team generalization test.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: the CDHMM is a label-free machinery for inferring coverage-scheme roles (man vs zone, which receiver, which zone landmark) from NGS tracking — directly builds a coverage-role taxonomy for NFL defenses. INFERENCE: this is the mechanism for automated scheme profiling of all 32 teams without human charting.
- COACHING: coach-facing metrics (attention, evasiveness, switch rate) are template patterns for DB/coverage coaching profiles; team-specific CDHMMs fitted per delivery-type mirror per-team coverage tendencies.
- TRUST-SIGNAL: the GCA framework is a counterfactual "better than the best ghost of the same role" metric — a calibrated way to credit coverage value; the ledger's acceptance gate is ≥85% Viterbi-vs-hand-label role agreement plus ≥0.05 incremental R² over PFF coverage grade.
- OTHER: role-conditioned ghosting extends the repo's existing coverage-matchup tables and NFL "ghost" literature with opponent-adjusted, role-specific baselines.
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL "Coverage Role Ghosting" module on NGS tracking: per-team/pooled CDHMM over coverage snaps (states = man-vs-receiver k + zone landmarks), ported GCA on a target-probability model, producing a per-DB coverage value-added metric for opponent adjustments and matchup content.
