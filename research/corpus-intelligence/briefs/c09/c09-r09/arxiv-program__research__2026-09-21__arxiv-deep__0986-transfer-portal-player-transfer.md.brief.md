# arxiv-program/research/2026-09-21/arxiv-deep/0986-transfer-portal-player-transfer.md
## What it is (1-2 sentences)
A full-text read ledger for arXiv:2201.11533 (Dinsdale & Gallagher, 2022), "Transfer Portal: Accurately Forecasting the Impact of a Player Transfer in Soccer" — an end-to-end deep-learning system forecasting how a specific player's per-90 output changes when moving to a specific team/league. The ledger gives a complete four-module rebuild spec for a GSE transfer-fit forecaster (fantasy/DFS content, dynasty trade tools).
## Key metrics/methods (formulas where given, else "not specified")
- Four grouped multi-head TensorFlow NNs (e.g., xG+shots in one group): shared dense layer per group → per-target heads. Hyperparameters (learning rate, batch size, dropout, hidden units) tuned with HyperOpt Bayesian optimization. Windows: N=1000 (player), M=3000 (team-position), prior→data blend constant c=1000, 1,000-minute target horizon, 13 targets in 4 groups.
- Hierarchical ability (Power Ranking): Team ability = E_continent + E_country + E_league + E_team (Elo components), rescaled 0–100 daily; only the highest affected hierarchy level updates per match.
- Prior blend: X'_{i,j,g} = (1−w_{j,g})P_{i,j} + w_{j,g}R_{i,j,g}, w_{j,g} = min(1, (Σ minutes)/c); nested prior order: ability → team/team-position → player; RAG (red/amber/green) flags prior-dependence.
- Shortlist score: Σ_k (weight_k × normalized predicted metric_k) / Σ_k weight_k, weights ∈ [0,1] user-set.
- 13 target KPIs: shots, xG, xA, take-ons, crosses, penalty-area entries, total/short (<32m)/long (≥32m)/attacking-third passes, defensive actions in own/middle/opposition thirds.
## Data sources named
Training: 26,000 samples (transfer + non-transfer) across 32 domestic leagues since 2017, targets = per-90 metrics over first 1,000 minutes at new club (or next 1,000 for non-transfers). Test: 2,659 historic transfers + 8,677 non-transfers. Ability system: daily ratings since 1990 across 195 countries, 423 leagues, 20,000+ teams — claimed largest soccer ratings system in existence. Opta event data, proprietary; no public data or code.
## Findings (numbers and facts, not vibes)
- 49% average MSE improvement over the naive baseline (player's most recent rolling average carried forward) on transfers; 21% on transfers+non-transfers combined.
- xG/90: 54% MSE reduction (Figure 10 calibration: slight over-prediction at low xG, slight under-prediction at high xG).
- Per-target improvement range: 37% (crosses) to 61% (short passes) — team-style-sensitive metrics gain most.
- Case studies: Gakpo's shots/90 dropped from 59th to 27th percentile moving PSV→Rennes; "Hot or Not" rumors: Mbappé→Real Hot, Kane→City Hot, de Jong→United Not (outputs slashed up to 50% by style mismatch), Adeyemi→Dortmund Hot, Mooy→Celtic Hot, Healey→Brighton Tepid, Sterling→Barça Tepid.
- Reader's caveat: 49% is against a deliberately weak strawman baseline, not a competent transfer model; evaluation is retrospective on completed transfers (selection bias); no uncertainty quantification — point forecasts only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (player valuation/content): transfer-fit forecaster for NFL/NBA trade and free-agency content ("what does Player X look like on Team Y"), DFS slate analysis when players change teams, dynasty fantasy trade tools, "Hot-or-Not" rumor social content.
- OTHER (engine architecture): the hierarchical Elo (195 countries/423 leagues) is the most ambitious ability-rating construction in the corpus; the nested prior-blend equation is directly reusable for low-minute entities (breakout rookies).
- SCHEME: per-target improvement pattern (team-style metrics gain most; individual metrics like take-ons transfer) tells the engine which metrics to context-adjust vs carry forward on a team change.
## Engine-actionable? (yes/no + one-line what)
Yes — build the four-module transfer-fit forecaster (GSE ability hierarchy, rolling per-90 features with N=1000/M=3000 windows, prior blend c=1000 with RAG flags, grouped multi-head NNs); numeric gate: ≥25% mean MSE improvement over the carry-forward baseline across the 13 KPIs on a held-out transfer test set.
