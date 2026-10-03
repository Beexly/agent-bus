# arxiv-program/research/2026-09-21/arxiv-deep/2046-autoalpha-hierarchical-evolutionary.md
## What it is (1-2 sentences)
Research ledger on AutoAlpha (arXiv:2002.08245), a hierarchical evolutionary algorithm for mining formulaic alpha factors in quantitative finance; verdict ADAPT for porting to a sports signal-mining grammar. It introduces an "effective root gene" hierarchy, PCA-similarity Quality-Diversity search, and warm-start/parent-offspring replacement to prevent premature convergence.
## Key metrics/methods (formulas where given, else "not specified")
- PCA-similarity(i,j) = Pearson(PC1(A^{(i)}), PC1(A^{(j)})) where A^{(i)} = (a^{(i)}_{t,s})_{T×n} is an alpha's value matrix; complexity O(npT) → O(pT) via power method; penalization threshold 0.9 (validation: PCA-similarity > 0.7 → MAE vs true similarity 0.092; > 0.9 → MAE 0.125).
- AR = exp{365/T′ × log(S_T/S_0)} − 1; SR = (R_p − R_f)/σ_p, R_f = 0; mining fitness = IC (information coefficient); "diverse effective" = IC > 0.05.
## Data sources named
CSI 300 (mining/train), CSI 800 (backtest pool); train 2010-01-01–2017-08-31, test 2017-09-01–2019-07-31; holding periods h=1 and h=5 days; transaction cost 0.3%; top-10 daily portfolio; baselines: Alpha101 formulas, gplearn, SFM deep learning, market.
## Findings (numbers and facts, not vibes)
- Diverse alphas with IC > 0.05 (h=1): AutoAlpha 434 vs gplearn 35 vs Alpha101 0; avg IC of top-50: 7.50% vs 6.10% vs 1.02%.
- Backtest AR/SR (h=1): AutoAlpha 90.0%/3.39 vs gplearn 61.8%/2.34 vs Alpha101 29.5%/1.06 vs SFM −60.0%/−2.05 vs market −4.1%/−0.20 (market-relative in brackets: 98.2%/6.02).
- Top-1 alpha IC: 8.36% train / 7.10% test (h=1, hs300), generalizes to zz800 at 8.41%/7.47%.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: hierarchical GP + PCA-QD diversity search is a sports-signal mining method — the ledger's implementation spec targets a sports operator grammar (e.g., seed root genes like ts_rank(EPA_margin, 4)) and PCA-similarity deduplication of weekly team-value matrices.
## Engine-actionable? (yes/no + one-line what)
Yes — port PCA-QD (fitness → 0 if PCA-similarity > 0.9 vs any recorded signal) into the engine's signal-mining pipeline to multiply diverse test-surviving signals (~12× observed in finance) and prevent formula convergence.
