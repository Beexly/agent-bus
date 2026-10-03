# docs/arxiv-program/research/2026-09-21/arxiv-deep/0714-bounded-abstention-pairwise-learning-rank.md
## What it is (1-2 sentences)
Ferrara et al. (2025) give BALToR, a model-agnostic plug-in rule for bounded abstention in pairwise learning-to-rank: accept the fraction c of pairs with the lowest estimated conditional risk, using the c-th calibration risk quantile as the threshold. Ledger verdict: ADAPT — the plug-in conditional-risk abstention rule is directly portable to GSE's pick-selection/abstention pipeline; the "coverage budget" framing converts to a posted-pick volume constraint.
## Key metrics/methods (formulas where given, else "not specified")
- Selective risk: R_l(f,g) = E[l(f(X,X'),Y)·g(X,X')]/φ(g); coverage φ(g) = E[g(X,X')]; optimize subject to φ(g) ≥ c
- β = inf{a: ∫∫_{r(x,x')<a} p(x,x') dx dx' ≥ c} (c-th conditional-risk quantile); selection g(x,x') = 1 iff (1 − max_y p̂(y|x,x')) < β̂_c, randomized acceptance on the β level set (Theorems 3.1–3.2; symmetric loss ⇒ (x,x') and (x',x) rejected consistently)
- Proposition 3.3: for the Bayes ranker under 0-1 loss, conditional risk = 1 − max_y p(y|x,x')
- Tie-adjusted Bradley-Terry: P̂(Y=1|x,x') = e^{s(x)}/(e^{s(x)} + θe^{s(x')}); tie parameter θ = 2·n_pairs/n_no-ties − 1 (Rao & Kupper 1967)
- Thurstone-Mosteller: P̂(Y=1) = Φ(s(x)−s(x')−ε)
- Baselines: entropy-based abstainer, random abstainer; metrics: accuracy on selected pairs, empirical coverage vs target c, SelRate class-distribution bias check
## Data sources named
Web-30k (>30,000 queries, ~125 docs/query, 136 features); OHSUMED (106 queries, 16,140 query-doc pairs, 25-dim features); MQ2007 (1,700 queries, 46 features) — five default folds each; base rankers LambdaMART (XGBoost/CatBoost/LightGBM defaults). Code: https://github.com/Ambress92/Bounded-Abstention-LTR.
## Findings (numbers and facts, not vibes)
- MQ2007 (XGBoost/LambdaMART): full-coverage ≈ .679±.004 (BT) / .683±.004 (TM); at c=.70, BALToR ≈ .706±.004 (BT) / .713±.004 (TM); random abstainer flat; entropy erratic
- Web-30k: BALToR-BT ≈ .476±.001 at c=.70 vs ≈ .471±.002 at full coverage (tiny +0.005); BALToR-TM ≈ .477±.001 vs ≈ .470±.003
- OHSUMED: BALToR-BT ≈ .578±.07 at c=.70 vs ≈ .562±.06 full; high inter-fold variance
- Coverage fidelity: empirical coverage within ≈ .001 of target on MQ2007/Web-30k, ≈ .002 max on OHSUMED
- SelRate stable across coverages (MQ2007 class-0 ≈ .718–.725±.005, ±1 classes ≈ .138–.143±.007) — no concentration of rejections in any class
- Paper's own caveat: IR ranking baselines are weak in absolute terms (0.47–0.71), so lift magnitudes are illustrative; selective prediction adds little on top of strong classifiers (Franc et al. 2023; Pugnana et al. 2024)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: new capability relative to GSE's conformal abstention stack (CQR, conformal win probability, grouping loss, LRD dashboard) — a provably optimal pairwise abstention rule with a coverage budget, no engine-model retraining required (plug-in); tie-adjusted BT probability estimation connects to the sports pairwise literature (Bradley-Terry Elo unification, ledger 0004)
## Engine-actionable? (yes/no + one-line what)
Yes — BALToR plug-in on engine picks: calibrate β̂_c on 2020–2023 engine picks (time-ordered), conditional risk = 1 − P(edge sign correct) via calibrated BT-style model on historical edge buckets (tie = push/closing-line margin), select at target coverage c (e.g., 0.70 of candidate picks); adopt into the posting pipeline only if 2024–2025 test beats random selection by ≥1.5pp hit rate at c=0.70 with empirical coverage within 0.02 of target. (~2–3 days + backtest harness.)
