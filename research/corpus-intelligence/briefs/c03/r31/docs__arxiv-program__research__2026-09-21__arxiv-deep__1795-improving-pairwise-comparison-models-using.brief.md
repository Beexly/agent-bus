# docs/arxiv-program/research/2026-09-21/arxiv-deep/1795-improving-pairwise-comparison-models-using.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:1807.09236v1 (Ragain, Peysakhovich, Ugander, 2018), which applies Empirical Bayes (James–Stein) shrinkage to Bradley-Terry-Luce team-strength MLEs with a pairwise-uncertainty-driven shrinkage direction, tested on NFL/NBA/MLB and survey data. Verdict: ADAPT — fills the rating-regularization gap for GSE's small-data early-season NFL ratings.

## Key metrics/methods (formulas where given, else "not specified")
- BTL choice rule: p_{ij} = γᵢ/(γᵢ + γⱼ); ℓ(γ;𝒟) = Σ log(γ_{i_k}) − log(γ_{i_k} + γ_{j_k}).
- James–Stein: γ̂_JS = (I − Σ(Σ+A)⁻¹)γ̂_MLE + Σ(Σ+A)⁻¹u.
- Inversion-free shrinkage: R̂ = (I + AS)⁻¹, S = N·𝒥(γ̂_MLE,𝒟) or N·ℐ(γ̂_MLE,𝒟) (observed/expected Fisher — no Σ inversion needed).
- Prior covariance: A_{ii} = γ̂_{MLE,i}(1−γ̂_{MLE,i})/(n(n+1)), A_{ij} = γ̂_{MLE,i}γ̂_{MLE,j}/(n+1); shrink target uᵢ = 1/n (Dirichlet A).
- Ledoit–Wolf: Σ̂_SHR = (1−ν)Σ̂_S + νσ̄I, σ̄ = (1/n)Σᵢσ̂ᵢ.
- Six covariance estimators compared: observed/expected Fisher + four bootstraps (blocked/non-blocked × parametric/non-parametric), with Ledoit–Wolf diagonal shrinkage on bootstraps; I-LSR (Mayr et al. 2015) for the MLE, Dirichlet(10⁻⁶) prior for strong connectivity.
- Core theoretical point: Pr(𝒟) = Pr(B^𝒟)(Π p_{ij}) — the matchup-distribution term is unmodeled in standard choice models.

## Data sources named
NFL2016 (256 games, 32 teams, 16 games/team); NBA2016 (1,260 games, 30 teams, 82 games/team); MLB2016 (214,865 at-bats, 787 batters + 309 pitchers, strongly-connected component, Retrosheet cited); semi-synthetic NFL2016 schedule with known ground-truth skills (1,000 draws); AllOurIdeas (143,704 comparisons among 67 figures). No data/code links in paper.

## Findings (numbers and facts, not vibes)
- [SCHEME] Semi-synthetic NFL schedule (expected Fisher): parameter MSE reduced 51% (α = 0.51); pairwise-probability error reduced 12% (β = 0.12).
- [SCHEME] NFL2016 win% MSE: MLE 0.0591 → parametric blocked bootstrap Σ̂_{b,p} 0.0491 (−16.8%); expected Fisher 0.0499 (−15.5%); observed Fisher 0.0525 (−11.1%).
- [SCHEME] NFL2016 matchup-level Brier MSE: Fisher −5.4%/−7.2%; parametric bootstraps −9.2% each; non-parametric bootstraps ≈ −1% (useless — cannot resample single-occurrence matchups).
- [SCHEME] NBA2016 win% MSE: 0.0104 → 0.0094 (−9.1%, best: parametric non-blocked); matchup gains <1% (82-game seasons need less shrinkage).
- [SCHEME] MLB2016 Rasch (train 5%/test 95%): 0.0209 → 0.0173 (−17.2%, expected Fisher); correctly contracts batters/pitchers to separate baselines and accounts for pitcher strength faced.
- [SCHEME] Practical guidance: parametric bootstrap when feasible (best); Fisher when bootstrap intractable; blocked for static schedules (NFL), non-blocked for irregular ones; non-parametric bootstrap fails on sparse NFL-like data.
- [SCHEME] The paper's NFL2016 experiment is literally GSE's problem: 256 games, 32 teams, weak inter-conference connectivity; cross-conference pairs carry the highest uncertainty.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [SCHEME] Shrinkage wrapper for team ratings: post-process each ratings update with R̂ = (I + AS)⁻¹, S = N·expected-Fisher from the season matchup graph, γ̂_SHR = (I−R̂)γ̂_MLE + R̂u (u = league average). Zero change to the rating model — ~2 days, ratings pipeline exists, 32-node graph trivial.
- [SCHEME] Cross-conference uncertainty diagnostic: use diag(Σ̂) to flag high-variance pairs (early-season AFC-vs-NFC) and widen published probability intervals / reduce stake sizing there — links to the abstention/sizing lane.
- [SCHEME] Player-level extension: Rasch variant with separate shrink targets per position group (mirrors MLB batter/pitcher treatment).
- [SCHEME] Novel improvement experiment: the NFL schedule is known in advance — compute expected Fisher from the unplayed schedule and shrink to minimize expected future-prediction variance, not in-sample variance; test weeks 1–4 ratings predicting weeks 5–17, 2023–2025, success = Brier improvement ≥0.004 over the retrospective method.
- [SCHEME] Gate: adopt permanently if shrunk ratings beat unshrunk on rest-of-season Brier in ≥2 of 3 seasons (2023–2025) with ECE within 0.003; reject if gains vanish once margin-of-victory/home-field enter the likelihood.
## Engine-actionable? (yes/no + one-line what)
Yes — add Fisher-shrinkage post-processing to team ratings (especially early-season / cross-conference) and keep the Fisher-uncertainty diagnostic as a standing model-health metric.
