# arxiv-program/research/2026-09-21/arxiv-deep/0910-player-chemistry-joint-impact-soccer.md
## What it is (1-2 sentences)
A full-text read ledger for arXiv:2003.01712v1 (Bransen & Van Haaren, 2020), "Player Chemistry: Striving for a Perfectly Balanced Soccer Team." It defines measurable player-pair chemistry — Joint Offensive Impact (JOI) and Joint Defensive Impact (JDI) — and predicts chemistry for pairs who never played together, with an NFL GSE adaptation spec (JOI/dropback for QB-receiver pairs, chemistry-aware DFS stacking optimizer).
## Key metrics/methods (formulas where given, else "not specified")
- JOI_m(p,q) = Σ_k V(I^k_m(p,q)) + Σ_l V(I^l_m(q,p)) over consecutive-action interactions; JOI90 = 90·Σ_m JOI_m / Σ_m MINS_m(p,q). V = VAEP (value of on-ball action by scoring/conceding probability delta).
- JDI_m(p,q) = Σ_o (E[OI_m(o)] − OI_m(o))·RESP_m(p,q,o)·MINS_m(p,q,o)/90; RESP from inverse Euclidean distance of default positions on 5×5 pitch grid, averaged over the pair.
- E[OI_m(p)] = per-90 season-to-date average with Bayesian shrinkage to a position-specific prior below 700 minutes (weights linear in minutes/700).
- Prediction: CatBoost (500 trees depth 7 JOI; 1000 trees depth 5 JDI); features = age/position-line/height/weight/nationality/region/language, physical indicators (duel strength, speed, work rate), 22 role scores, same-culture flags, matches played together. Train 2015/16–16/17 (355,671 pairs), val 17/18 (185,927), test 18/19–Dec 2019 (234,408); pairs required ≥700 min together.
- Team Builder: mixed-integer program (PuLP) maximizing Σ_pΣ_q (α·E[JOI90] + (1−α)·E[JDI90])·x_p·x_q, 11 players, 1 GK, 3–5 DEF, 3–5 MID, 1–3 FWD.
## Data sources named
Wyscout match event data (2015/16 → Dec 2019): 361 seasons, 106 competitions, 106,496 matches, 2,154 teams, 38,447 players, converted to SPADL1 via the socceraction package. Enriched with SciSports SciSkill/Potential, 22 Player Role scores, Physical Performance Indicators, player-pair metadata. Code: https://github.com/SciSports-Labs/player-chemistry (open).
## Findings (numbers and facts, not vibes)
- JOI prediction RMSE 0.04464 vs mean baseline 0.05448 (~18% reduction) — real signal.
- JDI prediction RMSE 0.88906 vs baseline 0.89075 — essentially null; the defensive chemistry prediction barely beats the mean. The ledger treats predicted JDI as unproven (measurement usable descriptively).
- Top JOI90: Salah–Firmino (2017/18 UCL) 0.7077 (highest in dataset); Suárez–Messi (2015/16) 0.6497; Nagasato–Kerr (2019 NWSL) 0.6096.
- Feature importance: Player Role scores dominate (Mobile Striker, Deep-Lying Playmaker, Ball-Playing Defender for JOI; Holding Midfielder, Ball-Winning Defender for JDI); matches-played-together matters most early, diminishing after ~50 matches; cultural features (same nationality/language) have limited predictive power.
- Case: Özil's JOI collapsed after Sánchez's 2018 departure; Team Builder picks Bayern Munich as Ziyech's best fit; Alderweireld > Koulibaly for City's offensive chemistry partly via long passing + 41 shared Belgium caps.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: JOI is a quantified measure of on-field trust/chemistry between pairs — ports directly to QB–pass-catcher trust dynamics (which receivers a QB actually produces with vs who merely shares the field).
- OTHER (DFS/engine methods): formalized stacking metric (JOI/dropback) for new QB–WR/TE combos (trades, rookie QBs, injuries) via the unseen-pair predictor; Team Builder analog = chemistry-aware DFS lineup optimizer maximizing Σ predicted pair JOI under salary cap.
- OTHER (engine architecture): the Bayesian 700-minute shrinkage rule is a reusable prior-blend template for low-sample NFL entities.
## Engine-actionable? (yes/no + one-line what)
Yes — build NFL JOI/dropback for QB–receiver pairs (drive-level interaction definition) and a gradient-boosting unseen-pair predictor for new combos, feeding DFS stacks and prop models; numeric gate: Spearman ρ ≥ 0.40 vs actual next-season JOI on unseen pairs AND top-decile-JOI stacks outscore baseline stacks by ≥5% in backtest.
