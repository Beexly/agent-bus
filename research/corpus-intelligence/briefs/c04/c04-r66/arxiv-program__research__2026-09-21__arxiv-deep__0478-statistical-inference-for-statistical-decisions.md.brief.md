# docs/arxiv-program/research/2026-09-21/arxiv-deep/0478-statistical-inference-for-statistical-decisions.md
## What it is (1-2 sentences)
Deep-read of Manski (2019, arXiv:1909.06853v1) — the earlier draft of the paper fully read as ledger 0477 (arXiv:1912.08726v4, Feb 2021); the later version's front matter states it supersedes this draft. Ledger verdict: REJECT as a separate adaptation target — unique findings are folded into 0477's experiments instead.

## Key metrics/methods (formulas where given, else "not specified")
- Wald SDT: SDF c(ψ): Ψ→C evaluated ex ante by state-dependent expected welfare (E_s{w[c(ψ),s]}, s∈S), then ranked by maximin, MMR, or subjective-average-welfare criteria. Criteria (1)–(3) without data; statistical versions (4)–(6) over feasible SDFs Γ.
- Inference-based SDFs: point-estimate as-if optimization c[s(ψ)] = argmax w[c,s(ψ)] (eq. 9); the empirical distribution as estimate of the state (Goldberger's analogy principle); the empirical success (ES) rule (pick treatment with highest sample mean); set-estimate as-if problems (1^N)–(3^N) acting as if the state space is the estimated set S(ψ) (confidence sets, estimated identification regions).
- Binary choice: regret = R_{c(ψ)s}·|w(a,s)−w(b,s)|, eqs. (7)–(8); Neyman-Pearson convention: Q_s[c(ψ)=b]≤α for s∈S_a, α=0.05 typical.
- ES-rule max-regret bounds (Manski & Tetenov 2016, Props. 1–2), K arms, outcome range M, n/arm balanced: (10) (2e)^{−½}M(K−1)n^{−½}; (11) M(ln K)^{½}n^{−½}.
- MMR fractional allocation with missing data (Manski 2007b, eq. 12): z*(b)=1 if (e_a−y_{1a})p_a+(y_{0b}−e_b)p_b+(y_{1a}−y_{0b})<0; =0 if symmetric condition; else [e_bp_b+y_1(1−p_b)−e_ap_a−y_0(1−p_a)]/[(y_1−y_0)(2−p)] (eq. 13); sample analog (14)/(16) is finite-sample MMR when p is known (Prop. 2, uses E[z_N(b)]=z*(b)).
- Midpoint predictor max regret: ¼[P(δ=1)²/N + P(δ=0)²]. STATA program wald_mse (Manski & Tabord-Meehan 2017) for numerical max regret of midpoint predictors.
- Distinctive framing addition vs 0477: the [inference → decision] separation — GSE model builders and the betting desk are separated exactly this way (the desk sees reported edges, not training data).

## Data sources named
No new dataset. Worked examples: (i) hypothetical cancer treatment choice — status quo mean lifespan 1 year; innovation either 1/3 year or 5 years; conventional trial test with Type I error prob 0.05, Type II 0.20; (ii) Manski & Tetenov (2016) numerical comparison of ES rule vs one-sided two-sample z-test: balanced trial, N=145 per arm, binary outcome, state space [0,1]² discretized by grid; (iii) Dominitz & Manski (2017) missing-data prediction; (iv) Manski (2007b) missing-data treatment allocation. No sports data.

## Findings (numbers and facts, not vibes)
- Cancer example: conventional test (α=0.05, β=0.20) → Type I regret 1/30 yr, Type II regret 4/5 yr, max regret 4/5 yr; reversed test (α=0.20, β=0.05) → regrets 2/15 and 1/5 yr, max regret 1/5 yr — the unconventional test has 4× smaller max regret (reader flags: artifact of the extreme 1/3-vs-5-year asymmetry in a stylized two-point state space).
- Manski & Tetenov (2016), N=145/arm: ES rule max regret 0.01 vs one-sided z-test 0.05; ES regret peaks at effect size ≈±0.03 (error prob ≈0.35); z-test regret peaks at effect size ≈0.08 (error prob ≈0.6).
- ES-rule bounds: (10) tighter for K=2,3 treatments; (11) tighter for K≥4.
- Curious finite-sample result (Prop. 2): under its assumptions there is no MMR advantage to large sample size — one observation per treatment is as good as the full sample (reader flags: rests on artificial setting where p is known).
- Cautions: the superseded draft's results are refined/replaced in v4; maximin dismissed as "ultrapessimistic" on verbal argument plus one example; set-estimate program (1^N)–(3^N) motivated only asymptotically (§5.4 confidence sets "a topic for future research"); evaluating inference-based SDFs still requires the burdensome middle operation (max over S).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Unique content folded into 0477's experiments: (a) reversed-α intuition → asymmetric-threshold bet/no-bet rule weighted by stake-weighted loss magnitudes; (b) ES-rule large-deviations bounds (10)/(11) as analytical guardrails on multi-pick selection; (c) as-if MMR Kelly stakes from conformal/calibration confidence sets as S(ψ); (d) portfolio allocation of bankroll fractions across K simultaneous +EV bets under interval-uncertain win probabilities (extension of eq. 13) — OTHER (staking/decision methodology).
- The [inference → decision] institutional separation mirroring GSE's builder/desk split — OTHER (organizational/process framing).

## Engine-actionable? (yes/no + one-line what)
No (as a separate target) — do not build from this draft; accept the folded-in items only if they improve on ledger 0477's framework (asymmetric-threshold rule must beat "bet if edge > 0" on walk-forward log growth at equal max regret; bounds (10)/(11) must be non-vacuous at real GSE sample sizes).
