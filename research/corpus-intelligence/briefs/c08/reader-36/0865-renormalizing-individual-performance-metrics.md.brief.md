# docs/arxiv-program/research/2026-09-21/arxiv-deep/0865-renormalizing-individual-performance-metrics.md
## What it is (1-2 sentences)
Full-text read of arXiv:2004.08428 (Petersen & Penner, 2020), which builds a statistical "deflator" for cross-era sports-record comparison: per-opportunity prowess P_i(t) = x_i(t)/y_i(t) with league-average baseline ⟨P(t)⟩, renormalizing metrics to common-era units, validated by Dickey–Fuller stationarity tests and cross-era distribution collapse. Verdict: ADAPT — sport-agnostic method directly applicable to cross-era NFL stat normalization for props/fantasy and era-neutral backtesting.

## Key metrics/methods (formulas where given, else "not specified")
- Prowess: P_i(t) ≡ x_i(t)/y_i(t) (successes per opportunity); league average ⟨P(t)⟩ ≡ Σ_i x_i(t)/Σ_i y_i(t) (eq. 1).
- Renormalization: x_i^D(t) ≡ x_i(t)·P_baseline/⟨P(t)⟩ (eq. 2); career X_i^D = Σ_{s=1}^{L_i} x_i^D(s) (eq. 3). Baselines: P_baseline = ⟨P(2009)⟩ for HR, all-year mean P̄ for other metrics.
- Stationarity test: Dickey–Fuller (AR with drift) on ⟨P(t)⟩, ⟨x(t)⟩, ⟨x^D(t)⟩ series.
- Distribution collapse: kernel-density PDFs of season metrics across eras; career PDFs fit by MLE to Gamma P_Γ(X|α,X_c) ∝ X^{−α}exp(−X/X_c) (eq. 4, α ∈ [0.4, 0.7]) and Log-Series P_LS(X|p) ∝ p^X/X (eq. 5). HR Log-Series fit p = 0.996975 → X_c ≈ 331.
- Opportunity thresholds y_c: 100 AB (batters), 100 IPO (pitchers), 24 min (NBA).

## Data sources named
Sean Lahman's Baseball Archive (MLB 1871–2009: ~17,000 careers; 13.4M at-bats, 10.5M innings-pitched-in-outs); databasebasketball.com (NBA 1946–2008: ~4,000 careers; 24.3M minutes). ~104,000 career-years total. No code link.

## Findings (numbers and facts, not vibes)
- Dickey–Fuller: HR ⟨P(t)⟩ stat −3.7, p = 0.57 (non-stationary) → renormalized ⟨HR^D(t)⟩ stat −31.5, p = 0.0004 (stationary). NBA points: −6.4, p = 0.3 → −22.2, p = 0.003. Wins/Hits already stationary — no renormalization needed.
- Distribution collapse: renormalized season PDFs collapse across eras — HR up to x^D ≈ 35; NBA points up to x^D ≈ 2500 (vs ~1000 nominal). Career P(X) vs P(X^D) nearly invariant → re-ranking is local, not bulk era reordering.
- Rank examples: Ruth's 1921 59 HR → 214 renormalized HR (2009 units, all-time season #1); career HR renormalized #1 Ruth (1215) vs nominal #1 Bonds (762 → renormalized #8, 502); Rodman's 1991–92 1530 rebounds (nominal #28) → renormalized #1 (1691).
- HR per-AB up 5× from 1919 to 2001; NBA assist prowess peaked 1984, −25% by 2008.
- Log-Series fits MLB career distributions better than Gamma; Gamma fits NBA.
- Limitations: right-censoring; 1973 DH-rule artifact; extreme tails don't collapse; league-average deflator ignores position/specialization trends.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — era-adjusted player features: compute per-opportunity prowess for NFL counting stats (yards/attempt, yards/route, EPA/play) as seasonal league averages; renormalize to a common baseline before using as prop/fantasy features, so the model doesn't mistake era inflation for player skill.
- TRUST-SIGNAL — Dickey–Fuller stationarity gate on every candidate feature's league-average time series; non-stationary features get deflated, stationary ones pass through. NFL analogues: scoring inflation, 17-game season, 2015 XP move, kickoff rule changes.
- OTHER — backtest deflation: renormalize historical betting results/lines by era scoring environment so cross-era backtests (2005–2025) aren't rewarded for era trends. Improvement idea: position-aware deflators (rule changes hit positions asymmetrically, e.g., illegal-contact enforcement inflates WR but not RB prowess).

## Engine-actionable? (yes/no + one-line what)
Yes — implement prowess-deflator era adjustment for NFL player features (gate: renormalized feature series must pass DF p < 0.05 while raw fails, plus era-PDF collapse), and apply to backtest deflation.
