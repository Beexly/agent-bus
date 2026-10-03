# docs/arxiv-program/research/2026-09-21/arxiv-deep/0941-intransitive-dominance-tennis-gnn.md
## What it is (1-2 sentences)
Paper ledger (Clegg & Cartlidge, arXiv:2510.20454): spectral GNN (MagNet) on temporal directed H2H graphs captures intransitive dominance cycles (A>B, B>C, C>A) that scalar ratings miss, and shows Pinnacle systematically misprices high-intransitivity tennis matches. ADAPT verdict: skip MagNet, adapt the evidence-weighted intransitivity measure I* and the dominance-score construction to NFL matchups.

## Key metrics/methods (formulas where given, else "not specified")
- Dominance score: D_n^s(u,v) = Σαβφg / Σαβφ, games won g weighted by surface similarity α, prestige β, time decay φ_k = exp(−λ(τ_n−τ_k)); λ=0.38 tuned.
- Intransitivity via Hodge decomposition: A_uv[i,j] = log(w_ij/(1−w_ij)); I = (1+‖cyclic‖_F)/(1+‖transitive‖_F); evidence-weighted I* = I·√(Σαβφ).
- MagNet: magnetic Laplacian spectral GCN, q=0.25, Chebyshev K=2, L=2 layers (4-hop), 64 hidden, lr 0.003, wd 1e-4, dropout 0.3, label smoothing 0.19; retrain 30 epochs every 38 snapshots.
- Betting: Kelly f* = (p̂o−1)/(o−1) with bankroll reset; threshold γ=2.55 tuned on validation; annualised Sharpe S = (P̄/σ_P)·√365.25; Wunderlich-Memmert bootstrap p-value.

## Data sources named
tennis-data.co.uk (16,663 men's + 16,447 women's matches, 2014-01-01–2025-06-08, Slams/Tour Finals/1000/500 tiers); Pinnacle Sports odds (Shin 1993 margin removal); tennisexplorer.com (player attributes).

## Findings (numbers and facts, not vibes)
- Test (2023-01-01–2025-06-08, 8,375 matches): model 65.7% acc / 0.215 Brier; Weighted Elo 66.4% / 0.212; Pinnacle 69.0% / 0.196 — bookmaker superior overall.
- Women's tennis +11.5% more intransitive than men's (3.02 vs 2.71). Brier gap vs Pinnacle narrows 68.3% from Bin 0 (+0.023) to Bin 3 (+0.007); beats WElo in moderate/high-intransitivity bins; Spearman ρ=+0.049, p<0.001.
- Betting (γ≥2.55): Kelly ROI +3.26% over 1,903 bets, Sharpe 0.61, p=0.005; unit +1.14% over 2,063 bets, p=0.022 (both survive Bonferroni α=0.025). Unfiltered: −5.49% Kelly. At extreme intransitivity the strategy turns negative — bookmakers efficient where evidence is thickest.
- Tuned weights: α_hg=0.37 (hard↔grass transfer high), clay isolated (α_hc=0.01); β^1000=0.85, β^Finals=0.94, β^500=0.69.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: first quantitative evidence in the corpus that stylistic-matchup complexity is a market blind spot — markets misprice high-intransitivity games, maps to GSE's market-microstructure/CLV lane.
- **SCHEME**: proposed NFL analog — scheme cycles (e.g., Shanahan wide-zone vs Fangio two-high vs power-run) as the carrier of football intransitivity; build I* on coach-scheme nodes, not teams.

## Engine-actionable? (yes/no + one-line what)
Yes — add evidence-weighted I* (Hodge cyclic/transitive ratio × √evidence) as a matchup-interaction feature on common-opponent subgraphs, and adopt the Kelly-with-reset + validation-tuned-threshold + bootstrap-significance protocol as the template for any GSE "spot" betting system.
