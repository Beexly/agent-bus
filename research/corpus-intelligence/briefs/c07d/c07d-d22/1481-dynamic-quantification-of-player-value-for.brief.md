# arxiv-program/research/2026-09-21/arxiv-deep/1481-dynamic-quantification-of-player-value-for.md
([1481] Dynamic quantification of player value for fantasy basketball — arXiv:2409.09884v1, Zach Rosenof 2024)

## What it is (1-2 sentences)
An H-scoring framework for head-to-head fantasy category leagues: a dynamic draft algorithm that re-optimizes strategy parameters (category weights, flex shares) for *every candidate pick* via gradient descent, beating static ranking lists — and implicitly learning to "punt" categories. Ledger verdict: ADAPT — first dynamic draft-pick optimizer in the corpus, directly mappable to NFL DFS lineup construction.

## Key metrics/methods (formulas where given, else "not specified")
- **H-scoring framework:** three functions — X(j): distribution of category-total differentials vs opponents given strategy params j; W(j): category win probs = CDF of X(j) at 0; V(j): format objective. Procedure: (1) optimize j per candidate player (gradient descent), (2) draft the player with max V(j).
- **H0 implementation:** j = (jC category weights summing to 1; jU, jG, jF flex-share vectors). X-scores = G-scores with player-to-player variance terms zeroed: **Xp = (mp−mμ)/mτ**; percentage stats **Xp = (aq/aμ)(rq−rμ)/rτ**.
- Team differential: **X(j) = N(Xs + Xp + Xδ − XOm, 2N + (N−K−1)Xσ²)**; Xδ(j) from a multivariate-normal future-pick model: **Xδ(jC) = (N−K−1)·Σ·(vjCᵀ − jCvᵀ)·Σ·(…)** (Appx. B; γ, ω fit empirically) + μCP positional adjustment.
- Positional structure enforced via assignment problem (modified Jonker-Volgenant, scikit-learn) with rewards μCjC; flex bonuses **0.0001** (guard/forward), **0.0002** (utility).
- Win probs: **wc = ½[1 + erf(μ/(σ√2))]**.
- Objectives: Each Category **V = Σc wc**; Most Categories **V = Σ over the 256 winning scenarios** (9-cat: C(9,5)+C(9,6)+C(9,7)+C(9,8)+C(9,9)=256; ≤2048 ops/player) of **Πc[f(s,c)wc + (1−f)(1−wc)] + ½·ties**; gradient weighted by "tipping-point" probabilities T(j,c₁).
- Gradient: **∇V = Σ PDFc(X(j))·∇X(j)** (Each Category).
- Optimization: Adam; j initialized as mixture of default weights v and previous round's optimum (first round: v perturbed toward candidate's stats; jC=v gives undefined gradient so perturbation is mandatory); jC re-normalized to sum 1 after each step.
- Appendix computation: "most categories" win probability via pruned scenario tree — **634 multiplications, a 69% reduction**; even-category case halves the gradient weight.
- Auction extension (A.1–A.2): H-score → dollars via cash-equivalence (replacement-player + cash-level sweep); team decomposition X(j) = Xs+Xp−Xos + MR + LD + Xδ(j): M extra players × R replacement profile, L extra dollars × D per-dollar category benefit; R estimated from highest G-score undrafted player (turnovers handled with inverted sign, ×−71 vs ×17 for other categories across 9 categories); D = above-replacement value / remaining money pool.
- Future-pick distribution (B): xδq ≈ correlated Gaussian; closed-form Xδ(jC) via expected maximum of normals (Royston 1982) and Gaussian conditioning (jlewk 2022), scaled by (N−K−1) remaining picks.
- Assumptions (§3.1, audited §5.2): fixed positional structure; player distributions known exactly and static; all players share week-to-week variance (mτ counting, rτ percentage); future-pick means ~ multivariate normal; percentage stats ≈ counting stats in X-score basis; category independence; maximize expected performance; opponents' unknown picks ~ random; future-pick aggregate variance = 0; local optima suffice.
- Validation: H0 drafter at each of 12 draft seats vs 11 G-score drafters; 1000 simulated 20-week seasons per seat per season (20 seasons); standard error ≤ ~1.6%; ω=0.7, γ=0.25.
- ADAPT bar (ledger §13): H-score lineups must beat static-ranked lineups on ROI with ≥2× cash-rate baseline improvement; if the optimizer collapses to static rankings, record the negative.
- Improvement experiments: (a) player-specific variance from the engine; (b) week-to-week stat correlations via Gaussian copula; (c) multi-start optimization; (d) upside-quantile (top-1% payout) objective for GPP.

## Data sources named
Simulated NBA fantasy seasons 2004-05 through 2023-24 (20 seasons). Each simulated season: player weekly performances sampled from actual historical weeks (injured weeks excluded; ≥10 weeks required); 12 teams × 13 players; 20-week seasons; 1000 simulated seasons per draft seat; weekly head-to-head winners by most categories. Positional eligibility from Yahoo fantasy basketball. 996? No — that figure is from 1504; here: 12 draft seats × 20 seasons × 1000 simulations. No code released; methods fully specified; uses scikit-learn's assignment solver.

## Findings (numbers and facts, not vibes)
- Each Category format: H0 mean season-win rate **21.8%** vs 8.3% random-chance baseline (seat means 15.6%–31.7%); better at higher draft seats; worst cell **3.2%** (2013-14, pick 11).
- Most Categories format: **37.7%** mean season-win rate (seat means 32.9%–46.1%).
- Emergent behavior: category win-rate histograms show mass slightly above 50% plus a lower mode at 0% — H0 **implicitly learns punting**; "soft-punting": most weights slightly above 100%, ~20% of weights below 0.95 (≈1–2 punted categories at ~75% weight); rarely pushes any category to 100%.
- Calibration: expected vs actual category win rates match closely above ~10%; distortions below (over-predicts assists/3s/blocks, under-predicts turnovers/FT%).
- ω/γ empirical fits: slopes **0.37 (R² 47%)** and **0.87 (R² 46%)** vs assumed **0.25/0.7** — the assumed future-pick model parameters were off by roughly 1.5× and the model still won.
- Turnovers: NOT down-weighted by default (contrary to analyst folk wisdom); gradient analysis (Tab. 4) shows turnovers ≈ as important as other counting stats — CONTRADICTION with conventional fantasy-basketball analyst wisdom, flagged as such by the author.
- Limitations (author's §5.2, all acknowledged): simulated opponents use static G-scores (not adaptive humans); known/static distributions; equal-variance and category-independence assumptions violated in reality (blocks are heavy-tailed); no trades/waivers/injuries mid-season; no Rotisserie (1.32×10⁷⁸ orderings infeasible); local optima; playoff-week scheduling ignored.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER — DFS program (direct, strongest connection):** This is the first dynamic optimizer in the corpus — all existing DFS/lineup material is static-projection based. The ledger's spec maps it to NFL DFS (`gse_hscore.py`): categories → stat differentials vs field, picks → lineup slots under a salary cap (knapsack/ILP replaces the assignment problem), j → per-position exposure targets + stack/correlate weights optimized per candidate on V = P(cashes) or expected GPP payout from the engine's player-score distributions, opponents → ownership-weighted field chalk. The emergent soft-punting result is the mechanism: the optimizer should *learn contrarian low-owned differentiation implicitly* via tipping-point-weighted gradients rather than via a hand-coded fade rule — directly serving Garrett's weekly DFS packet / GPP construction lane and his 2026-09-25 directive to understand real winning-lineup construction from data.
- **TRUST-SIGNAL — calibration lane:** The calibration result (expected vs actual win rates match above ~10%, distort below) is a quantitative calibration diagnostic GSE can mirror when validating its own DFS contest-simulation probabilities — the same shape (good mid-range, distorted tails) is what to check for in GSE's cash-rate/P(win) estimates.
- **OTHER — season-long fantasy / rankings program:** The per-candidate re-optimization method generalizes to season-long draft strategy (re-optimizing roster-construction weights per pick), though the paper's validation is fantasy-basketball H2H only — UNCERTAIN transfer until backtested on NFL season-long formats.

## Engine-actionable? (yes/no + one-line what)
**Yes** — prototype `gse_hscore.py`: per-candidate gradient-descent lineup optimizer on the engine's player-score distributions, backtested vs static-ranked lineups on cash rate, ROI, and GPP top-0.1% rate, with the §13 ADAPT bar (≥2× cash-rate baseline improvement).
