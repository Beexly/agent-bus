# arxiv-program/research/2026-09-21/arxiv-deep/0015-topological-data-analysis-and-graph-theoretic-tennis.md
## What it is (1-2 sentences)
Full-paper deep read of arXiv:2607.23509 (Univ. of Evansville STAT 391 course project, 2026): topological data analysis (lower-star filtration) + modified Katz similarity on head-to-head graphs for ATP match prediction. Verdict: **ADAPT** — not the TDA pipeline (adds only 0.2pp at 242h compute), but the recency-weighted Katz digraph rating is a cheap portable network-rating primitive.
## Key metrics/methods (formulas where given, else "not specified")
- Katz: directed edge X→Y if X beat Y in a set, weight Σ 1/(1+e^{1.5(c−year)}) over X's set wins vs Y; modified Katz similarity →S(i,j) = Σ β^k A^k[i,j] (cutoff 4, β=0.3); KatzScore(i,j) = →S(i,j) − →S(j,i); logistic P(Player1 wins) = 1/(1+e^{−(−0.004794 + 0.429513·KatzScore)}).
- Lower-star filtration: sublevel sets K_t = {σ: g(σ) ≤ t}; vertex function g(v) = v_p²/(m_p·m)·w, w = (1+e^{−3.25})/(1+e^{0.5(18.5−y)}); MBD(X_m) = (1/C(9,2)) Σ_{i<j} (1/999) Σ_{s=1}^{999} 1_{B_{ij}(s)}(X_m(s)); Randić index Σ 1/√(deg(u)deg(v)); 26 features + Δrank; classifiers LR, RF (500 trees, depth 10), XGBoost.
- Validation: 70/30 stratified split (65,885 matches); Katz: 5-fold CV on 2000–2022 (n=9,023 usable), temporal holdout 2023–2025 (19,262 sets).
## Data sources named
Kaggle ATP singles dataset 2000–2025 (public domain, user dataset, not linked in text), 65,834 matches; contemporaneous ATP rankings (no leakage by construction).
## Findings (numbers and facts, not vibes)
- Large-scale lower-star: LR 0.652/0.691 AUC; RF 0.662/0.719 (prec 0.664, rec 0.657, F1 0.660); XGB 0.661/0.718. Pilot (n=1,200): XGB 61.27% (α=0.27 threshold, +6.27pp over α=0.5); external 35-match tournament 57.14% (20/35).
- Feature importance: rankings 36.3%, centrality diffs 25.5%, TDA combined 24.0% (direct stats 17.0%, MBD 7.0%); VAB 7.3%, HNAV 6.0%, HWNAV 5.9%, OW-HNPV 4.9%.
- TDA ablation: no-TDA baseline 0.660/0.718 → combined 0.662/0.719 — TDA adds ≈0.2pp at ~242h compute (13.18 s/match) on Intel Core Ultra 9 285H / 64GB.
- β₁ (loop) features had zero variance (triangle elimination artifact) and were excluded; β₂ never computed.
- Katz CV (2000–2022): acc 0.6461 ± 0.0131, AUC 0.6911 ± 0.0159, log loss 0.6494. Test 2023–2025 (19,262 sets): acc 0.6248, AUC 0.6659, log loss 0.6550 (2023: 0.6193; 2024: 0.6324; 2025: 0.6221).
- Topology-only (no rankings): 63.56% acc, AUC 0.691 (−2.52pp vs full).
- Limitations: cold-start players unanalyzable; temporal weighting may bias to young players; no surfaces/recent-form/psychology; no calibration analysis.
- File's GSE spec: ADAPT only the Katz primitive for NFL — nodes=teams, edges weighted by recency sigmoid (cutoff 4, β=0.3), KatzScore(home−away) as a team-strength feature beside EPA ratings; cost minutes (n=32). Do not port TDA. Adoption test: 2015–2025 NFL, KatzScore as additive feature, adopt iff ≥0.5pp AUC or meaningful log-loss lift on 2023–2025 chronological holdout. Improvement: margin-weighted edge variant (point differential × recency).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (team-strength feature engineering): modified-Katz temporal digraph rating — transitive-closure strength measure distinct from Elo's pairwise updates — as an NFL team-strength feature candidate.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the modified-Katz recency-weighted digraph rating (nodes=teams, cutoff 4, β=0.3) as a candidate team-strength feature with the file's ≥0.5pp-AUC adoption gate; explicitly skip the TDA pipeline.
