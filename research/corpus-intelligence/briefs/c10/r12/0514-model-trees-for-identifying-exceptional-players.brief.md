# arxiv-program/research/2026-09-21/arxiv-deep/0514-model-trees-for-identifying-exceptional-players.md
## What it is (1-2 sentences)
Deep-read of arXiv:1802.08765v1 (Schulte, Liu, Li, 2018): logistic regression model trees that discover data-driven groups of comparable NHL draft prospects and fit a per-leaf model predicting P(plays ≥1 NHL game in 7 years) as a success ranking. Corpus verdict: ADAPT — the zero-inflation solution and interpretable per-group weights transfer to NFL draft modeling.
## Key metrics/methods (formulas where given, else "not specified")
- Logistic regression model tree (LMT): tree partitions feature space; each leaf fits logistic regression p_i = P(g_i > 0) (played ≥1 NHL game in 7 years). Built with LogitBoost (Friedman et al. 2000) via Weka LMT; final leaf weights refit by maximum likelihood for interpretability.
- Zero-inflation solution: predict balanced binary outcome instead of game counts (M5P linear regression tree collapsed to a stump on CSS rank, SRC 0.4); probability doubles as success ranking.
- Explanation: log-odds difference vs group mean = Σ_j w_j (x_ij − x̄_gj); strongest/weakest features = argmax/argmin of w_j(x_ij − x̄_gj).
- Spearman rank correlation: ρ = 1 − 6Σd_i² / (n(n²−1)) (no ties); with ties, Pearson correlation of ranks.
- Validation: temporal out-of-sample — train on 3 draft years, test on a later draft year; metric SRC between model ranking and actual-games ranking; also classification accuracy and Pearson-of-ranks.
## Data sources named
NHL Entry Draft prospects 1998–2008 (excl. goalies): nhl.com, eliteprospects.com, draftanalyst.com, David Wilson's NHL performance dataset. Full dataset stated at https://github.com/liuyejia/Model_Trees_Full_Dataset (not verified). ~50% of draft picks never play an NHL game (Tingling et al. 2011). Features: DraftAge, Country (CAN/USA/EURO pooled), Position, Overall pick, CSS_rank (unranked → 1 + max rank of draft year), draft-year regular-season + playoff stats (GP, G, A, P, PIM, PlusMinus), weight/height.
## Findings (numbers and facts, not vibes)
- LMT ranking beats draft order in all four splits. SRC (draft order / LMT accuracy / LMT SRC): train 1998–2000 → 2001: 0.43 / 82.27% / 0.83; → 2002: 0.30 / 85.79% / 0.85. Train 2004–2006 → 2007: 0.46 / 81.23% / 0.84; → 2008: 0.51 / 63.56% / 0.71.
- GAM (Schuckers, not directly comparable): 0.53, 0.54, 0.69, 0.71 across the four test years — competitive with LMT.
- 2008 test split shows sharp accuracy drop (63.56% vs 81–86%) — uninvestigated regime sensitivity.
- Learned groups (2004–2006 tree): CSS rank <12 → 82% play ≥1 game; CSS ≥12 & regular-season points <12 → 16%; points ≥12 then plus-minus negative → 37%, neutral → 61%, positive → 92% (with >10 playoff assists, n=13). Median games in the positive-plus-minus/high-assist group = 128.
- Group weights: CSS rank −17.9 (Group 1); regular-season points +14.2 (Group 2); regular-season plus-minus +13.16 (Group 3); regular-season goals +3.59 (Group 5, 64.8% forwards) vs −2.17 (Group 2, 61.6% defensemen).
- Case studies: Kyle Cumiskey (unranked by CSS, model's top in group, drafted 222nd, 132 NHL games, 2015 Stanley Cup); Brad Marchand (CSS 80, top of group 6); Milan Lucic (tops Group 5); Sidney Crosby, Patrick Kane top Group 1.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Zero-inflation trick (binary P(plays ≥1) as ranking proxy) transfers to NFL draft/rookie-hit modeling: OTHER.
- Per-group logistic weights yield interpretable strongest/weakest-feature explanations per prospect vs their comparable cohort — draft content material: OTHER.
- CSS rank dominating the root split means the model partly re-learns scouting consensus: TRUST-SIGNAL.
- Sharp 2008 accuracy drop (63.56%) uninvestigated — temporal regime sensitivity caution for any NFL adaptation: TRUST-SIGNAL.
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL logistic model tree (college production + combine/RAS + draft slot → P(plays ≥1 snap in 4 yrs)) as GSE's first draft-prospect model, gated on beating draft-order SRC by ≥0.10 on 2019–2024 test drafts.
