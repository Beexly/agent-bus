# docs/arxiv-program/research/2026-09-21/arxiv-deep/0980-competitive-balance-uoh-europe.md
## What it is (1-2 sentences)
Full-read ledger of Manasis, Ntzoufras & Reade (2015), arXiv:1507.00634v2: "Competitive Balance Measures and the Uncertainty of Outcome Hypothesis in European Football" — tests which of 17 competitive-balance indices best explains fan attendance across 8 European leagues over ~60 years. Verdict in file: ADAPT — the level-weighted (title/top-K/relegation) index family is a new feature-engineering idea for prize-level competitive intensity.
## Key metrics/methods (formulas where given, else "not specified")
- 17 indices: 7 seasonal (NAMSI, HHI*, AGini, NCR1, ACRK, NCRI, SCRKI); 6 between-seasons (DNt, Kendall τ, DN1, ADNK, DNI, SDNKI); 4 new bi-dimensional (DC1, ADCK, DCI, SDCKI).
- Example: DC1 = (NCR1+DN1)/2 = (P1 − 2r1) / [4(N−1)] (Eq. 1), P1 = champion points, r1 = |rank change| across seasons.
- ADCK (Eq. 2): ADCK = (1/[2K])·[Σ_{i=1}^K w_i(P_i − 2r_i) − C_K] + 1/2, K = UEFA-qualifying places; weights w_i decline down the table; bottom-I teams weighted above mid-table but below top-K.
- All indices normalized to [0,1]: 0 = perfect balance, 1 = complete imbalance. UOH supported iff coefficient < 0.
- Model: A(L)·lnATT_it = C_i + B_1(L)·lnCB_it + B_2(L)·lnPOP_it + B_3(L)·lnRGNI_it + B_4(L)·lnUN_it, reparametrized ADL(3) in levels+differences (CIPS panel unit-root tests → lnATT non-stationary), estimated by EGLS-SUR with White cross-section covariance; country fixed effects + country-specific trends.
- Three-level league structure: (a) championship title, (b) K European-qualification places, (c) I relegation places.
## Data sources named
- 8 leagues: Belgium (53 seasons, from 1966/67), England (60), France (60), Germany (56, from 1963/64), Greece (60), Italy (60), Norway (57, from 1962/63), Sweden (60); seasons 1959/60–2018/19. Unbalanced panel, n=8, T≈53–60; 442 pooled observations after adjustment. Per league-season: final table (points, rankings → indices), average attendance per game (lnATT), lnPOP, lnRGNI, unemployment, post-1997/98 dummy d97 (Bosman + Champions League reform), time trend.
- No code or dataset download; index formulas fully specified in text + appendix.
## Findings (numbers and facts, not vibes)
- Long-run elasticities (index → attendance): lnADCK −0.414%***; lnSDCKI −0.395%***; lnDC1 −0.303%***; seasonal lnACRK −0.274%***; lnNCR1 −0.253%***; lnSCRKI −0.246%***; between-seasons lnSDNKI −0.314%***, lnADNK −0.301%***, lnDN1 −0.044%***.
- Conventional indices all insignificant: NAMSI −0.093, HHI* −0.043, AGini +0.035, τ −0.020 (ns). DNt +0.137**, DNI +0.174%***, DCI +0.175%*** have the wrong (anti-UOH) sign — relegation-level competition reduces attendance.
- Adjusted R² ≈ 0.25–0.30 (Table 4 with ADCK: R²_adj = 0.250); RESET p>0.10; Jarque-Bera overall p=0.30.
- Economic controls: population elasticity ≈ 8.4–9.8; income ≈ 0.4–0.56; unemployment ≈ −0.09 to −0.18 (equilibrium ≈ −0.15% at 7.5% EU unemployment); d97 ≈ +0.07 to +0.118 (~10% attendance boost from Bosman + UCL reform).
- Practical magnitude: ADCK best→worst season swings — England 0.373 (1961/62) → 0.783 (2018/19) = +6,352 fans/game; Greece 0.517 → 0.837 = +1,096 fans/game; Germany +6,043; Italy +4,192.
- Greece worst (2018/19) vs best (1985/86) competitive-balance seasons = 13.8% annual attendance swing.
- Core empirical lesson: fans respond to top-K (qualification) races, not overall balance; bottom-team races reduce attendance.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Race-concentration (top-K), not overall balance, moves fan/market attention → weekly "prize-level competitive intensity" features (division-title race, wild-card race, #1-pick race concentration over remaining-schedule strength-adjusted win probabilities) for live totals / engagement models — OTHER.
- ADCK-style declining weights by prize rank is a template for "stakes weighting" of games in late-season model ensemble training — OTHER.
- Conventional balance indices (HHI*, Gini) all insignificant — do not use generic HHI-based parity features; use level-weighted race indices — TRUST-SIGNAL (negative guidance).
## Engine-actionable? (yes/no + one-line what)
yes — Build weekly NFL prize-level competitive-intensity indices (division-title race concentration, wild-card race concentration, #1-draft-pick race concentration, ADCK-style declining prize weights) over strength-adjusted remaining-schedule win probabilities as features in late-season/live totals and engagement models; reproducible test is regressing weekly TV ratings/betting-handle proxy on race-concentration indices 2002–2025 with team/week fixed effects, expecting negative coefficients mirroring ADCK's −0.414 elasticity.
