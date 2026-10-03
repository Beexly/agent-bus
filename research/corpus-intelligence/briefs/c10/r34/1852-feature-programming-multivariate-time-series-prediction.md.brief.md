# arxiv-program/research/2026-09-21/arxiv-deep/1852-feature-programming-multivariate-time-series-prediction.md
## What it is (1-2 sentences)
A programmable, hyperparameter-free feature-generation framework for multivariate time series that models increments as spin-gas Glauber dynamics and uses three operators (Difference, Window, Shift) arranged in a 0th/1st/2nd-order (position/momentum/acceleration) hierarchy to deterministically generate extended features with no search, LLM, or training in the loop.
## Key metrics/methods (formulas where given, else "not specified")
- Operators: Difference[s1,s2] (smooth then subtract), Window[s,lookback] (max/min/mean over fixed lookback), Shift[s,Δτ] (arbitrary time displacement); default program K=45 extended features, lookbacks [7,25].
- Spin-gas dynamics: X_{t+Δt} = X_t + c·Σ σ_{t+lδt}; extended sufficient statistics φe(X) = (σi,t, δσi,t/δt, δδσi,t/δtδt).
- Metrics used: out-of-sample R² and Pearson correlation.
## Data sources named
Taxi (NYC TLC trip records, 1000 locations, 30-min intervals), Electricity (UCI Load Diagrams, 370 customers, hourly), Traffic (UCI PEM-SF, 440 Bay Area highways, hourly), Synthetic (derived from Taxi). Temporal SNR: Synthetic 1.60, Taxi 1.27, Electricity 2.98, Traffic 1.32.
## Findings (numbers and facts, not vibes)
- One-step-ahead: basic+extended beats basic-only everywhere except electricity-LSTM; R² improvements 1.3–5.85%. Taxi (noisiest): +4.3/5.9/3.4% R² for MLP/CNN/LSTM; +2.3/3.4/3.0% Pearson.
- Multi-horizon (predict 20 from length-20): +88+% R² and +27+% Pearson on average — gains widen with horizon.
- Simple models on extended features ≈ SOTA models (TCN, TFT, N-BEATS) on raw features; weakest base model gains most (TFT on Taxi R² 54.58→61.31, +12.3% relative).
- Generation time negligible vs training: Taxi 24.34s vs 5,461.75s (MLP); Traffic 218.23s vs 23,883.94s.
- No feature selection/pruning mechanism exists; 80/20 random split (not walk-forward) used — noted as hygiene weakness.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] 0th/1st/2nd-order hierarchy (position/momentum/acceleration) maps to sports panels: raw weekly stats → momentum differentials → acceleration of form; deterministic, zero inference cost, fully reproducible.
- [OTHER] Customization template allows discretionary injection of handcrafted features (weather, rest differentials, market-implied ratings) at each order — human domain knowledge composed with automated generation.
- [TRUST-SIGNAL] Multi-horizon result analogizes to predicting a team's next-N-game trajectory (e.g., season win total) from first N games.
## Engine-actionable? (yes/no + one-line what)
yes — Port as standing NFL panel feature program: implement Difference/Window/Shift as causal pandas operators with 3/4/8-week lookbacks, YAML template of order lists, plus a pruning stage (paper lacks one) and walk-forward validation; accept if ≥0.003 held-out log-loss improvement on 2025 games.
