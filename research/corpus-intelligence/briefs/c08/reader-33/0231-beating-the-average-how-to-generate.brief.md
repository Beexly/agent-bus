# docs/arxiv-program/research/2026-09-21/arxiv-deep/0231-beating-the-average-how-to-generate.md
## What it is (1-2 sentences)
Deep read of arXiv:2303.16648 — analysis of the German TOTO 13er Wette soccer lottery deriving exact coverage-sizing formulas for multi-entry contest portfolios; verdict ADAPT for the safety-level coverage math (new capability: no pick'em/parlay portfolio-sizing math exists in the corpus), not the lottery venue.
## Key metrics/methods (formulas where given, else "not specified")
- Binomial P(x) = C(y,x) p^x (1−p)^{y−x} (y=13); hypergeometric Q(kx in n) = C(Mx,kx)·C(N−Mx,n−kx)/C(N,n); multivariate hypergeometric for joint (k10..k13).
- Key derived formula: Q(kx≥1 in n) = 1 − (1 − ΣxMx/N)^n → n = N[1 − (1−Q)^{1/ΣxMx}] (Eq 15), valid under ΣxMx ≪ (N−n); 13-strike closed form n = N·Q.
- Sequential-bet math: P(4×fail) = U^4; P(≥1 success) = 1 − U^4. Expected profit = expected return − total fees.
- Hit-rate ladder: random 33.33% → tipster ~43% → better-team 50.98% → home-win ~50.4% → prediction markets/odds 52–57%.
## Data sources named
TOTO 13er Wette mechanics (13 matches, €0.50/tip + €0.50/voucher, payouts at 10+ strikes); 1.5-year average weekly lottery returns; Bundesliga 2021/22 (306 matches, "better team wins" 50.98%); Bundesliga 1963/64–2021/22 home-win 50.36%; Spann & Skiera (2009) hit rates; no code released.
## Findings (numbers and facts, not vibes)
- At p=1/3 (N=1,594,323): ≥10 strikes needs n = 1,397 (Q=90%) → 5,580 (Q=99.99%); 13 strikes needs 1,434,891 → 1,594,164. Full coverage costs €863,592 ≫ €107,813 expected return.
- At p=1/2 (N=8,192): ≥10 strikes n = 50 (90%) → 198 (99.99%); ≥11: 203→781; ≥12: 1,243→3,949; 13: 7,373→8,191.
- Expected profits at p=50%: ≥11 strikes €324 (Q=90%) → €10 (Q=99.99%); ≥12: €5,775 → €4,309; 13: €103,819 → €103,376; ≥10 profitable only at Q=90% (€21).
- Sequential strategy: four 90%-safety bets → P(≥1 success) 99.99%, worst-case spend 4×€674=€2,696 for €6,449 expected return (€3,753 expected profit over 3–4 months).
- No live P&L presented — all profits are expectations vs 1.5-year-average returns with no variance modeling; N=(1/p)^13 combinatorics for p>1/3 is a heuristic construct; independence across matches assumed; regulatory barriers (€1,000/month limits, manual filing) gut the high-profit cells.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Coverage-sizing formula n = N[1 − (1−Q)^{1/ΣMx}] → OTHER (exact portfolio sizing for "≥x of m correct" contests: survivor pools, pick'em pools, parlay ladders)
- Expected-profit = return − fees tabulated by tier and safety → OTHER (contest-entry business-case math, fills corpus gap #1-adjacent: no coverage-sizing work exists)
- Heterogeneous-p_i Poisson-binomial generalization (proposed improvement) → OTHER (the GSE edge: replace uniform-p with calibrated engine probabilities)
## Engine-actionable? (yes/no + one-line what)
Yes — build a "coverage calculator" module: given m engine picks with calibrated per-pick hit rates (Poisson-binomial generalization of Eq 15), payout tiers, entry cost, and safety Q, output portfolio entry count and combination construction; adopt if 10,000-draw simulation empirical coverage matches Q within ±1 pp.
