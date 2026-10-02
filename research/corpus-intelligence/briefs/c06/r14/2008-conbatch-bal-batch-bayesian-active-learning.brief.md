# arxiv-program/research/2026-09-21/arxiv-deep/2008-conbatch-bal-batch-bayesian-active-learning.md

## What it is (1-2 sentences)
Ledger digest of Morato, Andriotis, Khademi (2025) "ConBatch-BAL: Batch Bayesian Active Learning under Budget Constraints" (arXiv:2507.04929, Delft University of Technology). Verdict: ADAPT — two deployable budget-constrained batch acquisition heuristics (dynamic thresholding + greedy knapsack) that reached accuracy targets with 20–80% fewer AL iterations than random; adapted as GSE's weekly charting-budget queue rule.

## Key metrics/methods (formulas where given, else "not specified")
- Constrained batch objective (Eq. 2): argmax_{x₁:ₙ⊆D_pool} a({x₁,…,xₙ}, p(ω|D_train)) s.t. c(x₁,…,xₙ) ≤ c_max, n ≤ n_max.
- Batch-BALD acquisition (Eq. 4): 𝕀(y₁:ₙ; ω | x₁:ₙ, D_train) = ℍ(y₁:ₙ|x₁:ₙ,D_train) − 𝔼_{p(ω|D_train)}[ℍ(y₁:ₙ|x₁:ₙ,ω,D_train)].
- Dynamic thresholding (Alg. 1): at step i admit only candidates with c(x) ≤ c_th,i = c_max,i / (n_max − (i−1)); threshold adapts as remaining budget shrinks.
- Greedy (Alg. 2): at each step pick top-ranked candidate among those with c(x) ≤ remaining c_max; both ≡ greedy Batch-BALD in the infinite-budget limit.
- Cost models: distance, distance_return (travel-distance configs), area_cost (non-sequential, per-area costs 1–100).
- GSE port: c(x) = dollar charting cost per game (nflverse-only ≈ $0, FTN per-game price, manual all-22 labor $/game); batch = weekly charting queue with dollar cap c_max and slot cap n_max; dynamic-threshold rule vs greedy challenger; sequential-cost analog = context-switch cost (charting a second game from same team/week is cheaper).

## Data sources named
build6k (~6,000 georeferenced Rotterdam building aerial images, binary energy-efficiency classes, CC BY 4.0), nieman17k (~17,000 building aerial images, 7 typology classes), mnist6k (6,000 MNIST digits randomly geolocated); images via PDOK web service with Rotterdam municipality open data; DINOv2 (ViT-S/14 distilled) embeddings.

## Findings (numbers and facts, not vibes)
- distance config: ConBatch-BAL reaches accuracy targets with 20–43% fewer AL iterations than random on build6k and 50–80% fewer on nieman17k; under 100-m batch constraint random fails to reach 71% accuracy on nieman17k within 800 iterations; on mnist6k both strategies hit 97% in <400 iterations vs >600 for random under 100-m budget.
- ConBatch-BAL under the 2-km constraint outperforms the unconstrained random baseline on all datasets (average unconstrained batch travel ≈ 25 km).
- area_cost: greedy beats dynamic thresholding on build6k/nieman17k (thresholding starves the expensive-but-informative area); opposite on mnist6k (diversity lets thresholding win). distance_return ≈ distance.
- Complexity dominated by MI: O(|D_pool|·T·n_sim·K·n_max); 6–12 h per experiment on Xeon/4-CPU/10GB node; fine-tuning DINOv2's last two layers gained only 1–2%.
- Adoption gate in ledger: winning rule must beat cost-blind top-k at equal weekly dollar budget by ≥0.005 held-out log-loss on a simulated 8 weeks of 2024, with no single-week collapse (>2× average per-dollar regret). Effort ~3 days.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Weekly charting-budget allocation: admit only games with cost ≤ remaining budget / remaining slots (OTHER)
- Context-switch cost modeling: second game from same team/week is cheaper — order-dependent cost structure (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — deploy the two queue rules (dynamic-threshold vs greedy) on top of existing acquisition scorers with GSE's dollar cost model for the weekly film-charting queue.
