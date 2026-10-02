# docs/arxiv-program/research/2026-09-21/arxiv-deep/1136-future-value-football-players.md

## What it is (1-2 sentences)
Ledger of arXiv:2212.11041v1 (Baouan et al., 2022), which asks which performance stats and player characteristics predict a footballer's TransferMarkt market value two years ahead, per position. Verdict: ADAPT — the per-position Lasso/RF recipe with log-value targets, per-unit-time normalization, and a league-average-value anchor is a portable template for GSE's future-value projections (dynasty fantasy, award futures); the soccer specifics don't transfer, the methodology does.

## Key metrics/methods (formulas where given, else "not specified")
- Per-position models (8 positions: GK, FB, CD, CDM, MD, AM, WG, FWD; n=1,227–4,112).
- Lasso: standard L1 least squares, (α̂,β̂) = argmin Σ(yᵢ−α−Σβⱼxᵢⱼ)² + λΣ|βⱼ|; λ 0.004–0.01 set to retain 10–15 features (λ chosen by 5-fold CV then raised for sparsity). Random Forest: 100 trees, max depth 6, grid-searched.
- Target: log market value. Feature engineering: stats summed over window ÷ total minutes (per-unit-time); successful/attempted ratios; squares of age, height, goals/min, assists/min, shots/min; league average value (log, demeaned); top-20-youth-academy boolean.
- Prediction window: performance aggregated over [1460,730] days before the value date → predict value at value date (2-year horizon; 1-year for young players).
- Validation: 5-fold CV per position; metrics MSE and CV-R² = 1 − MSE_cv/VAR(y); NOT time-ordered (limitation).
- GSE spec: per-position (QB/RB/WR/TE) Lasso + RF predicting log(DK salary or projected fantasy points) N weeks ahead from per-snap/per-route normalized nflverse + FTN charting stats, with team-strength anchor (log team implied total or PFF unit grade) as league_avg_value analogue; rolling-origin time splits.

## Data sources named
- Wyscout: 111 in-game stats; 2,646,549 player-games; 36,882 players; 45 leagues (first divisions of 37 countries + lower divisions); 2015–March 2022.
- TransferMarkt: 415,890 recorded values for 33,439 players (2000–2022); second dataset 21,898 players × 26 identity features. Intersection: 12,133 players.
- GSE-side data named: nflverse 2021–2025 + DraftKings salaries; young-player model applied to 60 Golden Boy 2022 nominees.

## Findings (numbers and facts, not vibes)
- With league-average-value feature — Lasso CV-R²: GK 48.5%, FB 55.4%, CD 57.7%, CDM 60.0%, CM 61.5%, AM 55.9%, WG 57.4%, FWD 58.0%. RF: 53.8%, 54.1%, 58.1%, 61.2%, 61.5%, 52.8%, 54.3%, 57.4%. Lasso and RF perform similarly.
- Without league-average-value: R² drops to ~35–44% — league anchor contributes roughly 20 points of R².
- Top features everywhere: league_avg_value, total_minutes_on_field, age (age_sq negative); top-20 academy flag helps modestly. Position notables: long-pass volume has NEGATIVE coefficient for CBs/DMs (modern build-up preference); goals scored not selected for forwards (collinear with touches-in-box/linkup features).
- Golden Boy 2022: predicted top-13 included 9 of the jury's top-10 (Pedri predicted #2 but ineligible as prior winner); Kendall correlation predicted-vs-jury 0.38 vs present-value-vs-jury 0.24 — model beats the current market at matching expert judgment.
- Limitations: CV not time-ordered; λ manually raised to force 10–15 features (researcher degrees of freedom); TransferMarkt values crowd-influenced (popularity treated as noise); age² misses veteran aging curve (Figure 6 — needs small λ for bell-shaped prime); soccer-specific features; 2-year horizon long for betting/fantasy.
- Acceptance gate proposed: per-position models must beat pooled model by ≥3 points of R² on ≥3 of 4 skill positions AND beat current-salary naive baseline, with time-ordered validation.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Dynasty fantasy lane: template for per-position rest-of-season value models → dynasty trade-value charts and "buy-low" flags where model value ≫ market salary.
- [OTHER] Award futures: model-vs-OROY-odds comparison lane (model beats crowd at ranking young talent — same structure as OROY markets).
- [OTHER] Improvement experiment: fit age as a spline (not age + age²) to capture the late-career cliff — the segment where fantasy markets misprice most.

## Engine-actionable? (yes/no + one-line what)
yes — Build per-position (QB/RB/WR/TE) Lasso+RF log-value models on per-snap normalized nflverse stats with a team-strength anchor, gated by rolling-origin R² vs pooled and naive baselines (spec in §11–14 of the file).
