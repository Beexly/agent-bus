# docs/arxiv-program/research/2026-09-21/arxiv-deep/0478-statistical-inference-for-statistical-decisions.md
## What it is (1-2 sentences)
Deep-read ledger of Manski (2019) "Statistical inference for statistical decisions" (arXiv:1909.06853v1): the earlier, superseded draft of the Wald statistical-decision-theory framework, arguing inference-based SDFs ([data → inference → decision]) are practical substitutes for fully general Wald SDFs. Verdict: REJECT as a separate adaptation target — the file explicitly notes it is superseded by ledger 0477's v4 paper (arXiv:1912.08726v4, Feb 2021); unique findings fold into 0477's improvement experiments.
## Key metrics/methods (formulas where given, else "not specified")
- Wald SDF criteria: maximize subjective average welfare; maximin; minimax regret; statistical versions over feasible SDFs Γ (eqs. 1–8).
- As-if optimization: c[s(ψ)] ∈ argmax w[c, s(ψ)] (eq. 9); empirical distribution as state estimate (Goldberger's analogy principle); empirical success (ES) rule.
- ES-rule max-regret bounds (Manski & Tetenov 2016), K arms, outcome range M, n/arm: (2e)^{−½}M(K−1)n^{−½} (eq. 10, tighter for K=2,3); M(ln K)^{½}n^{−½} (eq. 11, tighter for K≥4).
- MMR fractional allocation with missing data (Manski 2007b, eqs. 12–13): z*(b) closed form with sample analog (14)/(16) finite-sample MMR when p is known.
- Distinctive framing: [inference → decision] separation mirrors GSE's builder/desk split (desk sees reported edges, not training data).
## Data sources named
No new dataset. Worked examples: (i) hypothetical cancer treatment choice (status quo 1 yr; innovation 1/3 yr or 5 yrs; conventional test α=0.05, β=0.20); (ii) Manski & Tetenov (2016) trial N=145 per arm, balanced; (iii) Dominitz & Manski (2017) missing-data prediction; (iv) Manski (2007b) missing-data treatment allocation. STATA program wald_mse (STATA Journal 17, 723-735) for max-regret computation.
## Findings (numbers and facts, not vibes)
- Cancer example: conventional test → Type I regret 1/30 yr, Type II regret 4/5 yr, max regret 4/5 yr; reversed test (α=0.20, β=0.05) → 2/15 and 1/5 yr, max regret 1/5 yr — the unconventional test has 4× smaller max regret (reader's caveat: the asymmetry is an artifact of the extreme 1/3-vs-5-year setup).
- Manski & Tetenov (2016), N=145/arm: ES rule max regret 0.01 vs one-sided z-test 0.05; ES regret peaks at effect size ≈±0.03 (error prob ≈0.35); z-test regret peaks at effect size ≈0.08 (error prob ≈0.6).
- Curious finite-sample result (Prop. 2): under its assumptions there is no MMR advantage to large sample size — one observation per treatment as good as the full sample (reader's caveat: rests on p known, says nothing about real trials).
- Maximin dismissed as "ultrapessimistic" on Savage's verbal argument plus one example, not on generality (reader's adversarial note).
- The set-estimate program (1^N)–(3^N) is only motivated asymptotically; confidence-set-based as-if decisions are explicitly "a topic for future research" (§5.4).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- Folded into 0477's framework: asymmetric bet/no-bet thresholds (the "reversed-α" intuition for large-loss underdog ML vs. small-loss spread positions), ES-rule bounds (10)/(11) as analytical guardrails on multi-pick selection, as-if MMR Kelly stakes from calibration confidence sets — OTHER (decision/staking theory).
- No QB behavior, coaching, OL, trust-quote, or scheme content in the file.
## Engine-actionable? (yes/no + one-line what)
No (as a standalone) — superseded draft; gate: the folded-in items count only if they improve on 0477's framework (asymmetric-threshold rule must beat "bet if edge > 0" on walk-forward log growth at equal max regret; bounds (10)/(11) must be non-vacuous on real GSE sample sizes).
