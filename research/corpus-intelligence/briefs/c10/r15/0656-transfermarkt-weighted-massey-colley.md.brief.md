# arxiv-program/research/2026-09-21/arxiv-deep/0656-transfermarkt-weighted-massey-colley.md
## What it is (1-2 sentences)
Deep-read ledger of Brown et al. (arXiv:2411.09085, 2024) on predicting outcomes across four tiers of English soccer with time-weighted Colley and market-valuation-weighted Massey ratings (Transfermarkt crowd-sourced player values as a market prior). Verdict recorded as ADAPT — the transferable idea is a roster-value-weighted least-squares rating (salary/market prior + Massey solution); fresh-search replacement for rejected 2505.21275v1.
## Key metrics/methods (formulas where given, else "not specified")
- Colley: r_i = (w_i + 1)/(t_i + 2); (2 + t_i) r_i = 1 + (w_i − l_i)/2 + S (Eqs. 1–3).
- Massey: r_i − r_j = y_k (margin); Mr = p; r_i = p_i/G_i + Σ_j (g_ij r_j)/G_i — rating = avg point spread + avg opponent rating (Eqs. 4–6).
- Time-weighted Colley: W_k = exp((t_k − t_0)/(t_f − t_0)); weighted wins/totals w*_i, t*_i; (2 + t*_i) r*_i = 1 + (w*_i − l*_i)/2 + S* (Eqs. 11–14). Draws discounted (no merit) — improved predictions vs awarding half-wins.
- Transfermarkt-weighted Massey: WLS X^T W X r* = X^T W y (Eq. 16); home advantage as extra parameter y_k = r_i − r_j + r_h x_k (Eq. 17); final rating r = r̂ + r_TM — equal-weighted sum of WLS solution and Box-Cox-transformed, [0,1]-standardized average Transfermarkt lineup value.
- Transfermarkt regression: ordered probit y*_ijg = (h_ig − h_jg)β_h + (TM_ig − TM_jg)β_TM + ε (Eq. 10), TM = log lineup market value.
- Evaluation metrics: Kendall's τ = (n_c − n_d)/(n_c + n_d) for end-of-season ranking; Brier B = (p_w−w)² + (p_d−d)² + (p_l−l)² for match outcomes (Eq. 8).
- File's proposed GSE adaptation: NFL salary-weighted Massey — time-weighted WLS Massey on nflverse margins (home term per Eq. 17) + market prior from active-roster cap dollars / positional salary z-scores (Box-Cox, standardized), combined as r = λ r̂ + (1−λ) r_TM with λ OPTIMIZED on walk-forward log-loss (not the paper's ad-hoc 0.5). Proposed improvement experiment: per-team adaptive weight λ_i = σ(a + b·(games played)_i + c·(roster turnover)_i), fit on walk-forward log-loss (INFERENCE: untested proposal, not a paper result).
## Data sources named
- English PL, Championship, League One, League Two 2010–2024: 204 unique teams, 47,198 games; standings (ESPN), match data (Football-Data.co.uk), lineup market valuations (Transfermarkt, scraped). Extension: top 2 German + top 4 Scottish leagues (Scottish L1/L2 excluded — no valuations).
- Proposed GSE data: nflverse margins 2015–2024 + OverTheCap/Spotrac salary data.
## Findings (numbers and facts, not vibes)
- End-of-season Kendall's τ: T.M.-weighted Massey best everywhere — PL 0.5887, Championship 0.2737, League One 0.2881, League Two 0.1655 (vs unweighted Massey 0.5498/0.2118/0.2426/0.1061; Colley lower).
- In-season Brier (PL): Betting Odds 0.1842 < T.M.-weighted Massey 0.1888 = T.M. Regression 0.1888 < Massey 0.1912 < Colley 0.1945 < Null 0.2121. Same ordering in all leagues; weighted > unweighted; Massey > Colley.
- Pairwise t-tests: T.M. Massey − Massey = −0.0024 (PL, significant); Betting Odds − T.M. Reg = −0.0044 to −0.0065 (odds still best).
- Substantive finding 1: the PL-vs-lower-league predictability gap DISAPPEARS after removing dominant teams (Big Six / Bayern / Old Firm) — the gap is team disparity, not forecasting skill. Same pattern in Germany/Scotland.
- Substantive finding 2: wisdom-of-crowd test FAILS — Transfermarkt values with no user discussion (lower leagues, moderator-set) predict just as well relative to odds as heavily-discussed ones; predictive power comes from values tracking salaries/contracts, not crowd wisdom.
- Draws: 24% (PL) to 27% (League One) of matches; discounting draws in Colley improved predictions.
- Limitations recorded: equal 0.5 weighting of r̂ and r_TM is arbitrary (authors flag weight optimization as future work); Transfermarkt values partly endogenous; lower-league valuations sparse; dominant-team removal is crude.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Market-prior weighting: r = r̂ + r_TM beats plain Massey on Kendall's τ in every league (e.g., PL 0.5887 vs 0.5498) → OTHER (new rating-form mechanism for GSE: salary/cap prior as roster-value overlay, strongest in weeks 1–4 and for high-turnover rosters).
- Wisdom-of-crowd test FAILS — predictive power = values track salaries/contracts → TRUST-SIGNAL (calibration of what the market-prior signal actually measures: contract economics, not sentiment).
- Predictability gap across leagues disappears after removing dominant teams → TRUST-SIGNAL (disparity-vs-skill calibration rule: residualize team-strength disparity before comparing GSE accuracy across divisions/conferences).
- Betting odds still best on Brier (0.1842 vs 0.1888) → TRUST-SIGNAL (honest baseline anchoring — odds remain the bar).
- Brier ordering weighted > unweighted and Massey > Colley consistent across all leagues → OTHER (robust method-ranking evidence).
## Engine-actionable? (yes/no + one-line what)
yes — build a salary/cap-weighted time-decayed Massey for NFL (λ tuned on walk-forward log-loss, not 0.5) as an early-season/roster-turnover ratings overlay, plus adopt the disparity-audit practice for cross-division accuracy comparisons.
