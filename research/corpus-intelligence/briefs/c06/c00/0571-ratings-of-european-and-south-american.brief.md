# arxiv-program/research/2026-09-21/arxiv-deep/0571-ratings-of-european-and-south-american.md
## What it is (1-2 sentences)
Deep read of Shelopugin & Sirotkin (2023, arXiv:2310.11459v1): Glicko-2 for European/South American soccer clubs with four modifications (draw-aware expectation with bias correction, separate pandemic-era home advantage, promotion/relegation initialization + season-start drift, post-season mean normalization), benchmarked against a LightGBM Poisson goal model. Verdict in file: ADAPT — the modifications port to an NFL Glicko-2 team-strength model; the soccer tables are irrelevant.
## Key metrics/methods (formulas where given, else "not specified")
- Skellam PMF: p(k,μ1,μ2) = exp(−(μ1+μ2))·(μ1/μ2)^(k/2)·I_k(2√(μ1μ2)).
- Modified Glicko-2 expectation: E(μ,μ_j,φ_j,d,s) = exp(g(φ_j)(μ−μ_j)) / (1 + exp(g(φ_j)(μ−μ_j)) + exp(d+s)); s = LightGBM draw prob, d = bias correcting Poisson underestimation of draws (Dixon–Coles style).
- Home update: μ' = μ + φ'^2·g(φ_j)·(s_j − E(μ+h, μ_j, φ_j, d, s)), with separate h_p for pandemic (Mar 2020–Jun 2021), constraint h > h_p.
- Promotion init: r(μ_init+μ_new, φ, σ) if promoted (μ_new<0), else r(μ_init, φ, σ); season-start: r(μ+μ_l, φ+φ_s, σ) on league change; post-season global-mean normalization (anti-inflation).
- All params {μ_init, μ_new, μ_l, φ_s, h, h_p, φ, σ, d} fit per league by minimizing match-outcome log-loss.
## Data sources named
Proprietary flashscore.com scrape: ~366,000 matches, 2010/11–2022/23, European/South American first+second divisions + cups + Champions League/Copa Libertadores; train 2010/11–2020/21, test 2021/22–2022/23 (60,091 matches, season-blocked). Code: github.com/andreyshelopugin/GlickoSoccer.
## Findings (numbers and facts, not vibes)
- Test log-loss: modified Glicko-2 0.5832 vs LightGBM 0.5896, CatBoost 0.5931, original Glicko-2 0.5949 (best; Δ≈0.0064 vs LightGBM, ~1.1% relative; no SEs/CIs reported).
- Interpretation table: rating diff 0 → 35.7/28.6/35.7 (win/draw/loss); 100 → 49.9/25.7/24.3; 200 → 63.8/20.5/15.7; 500 → 90.5/6.0/3.5; 800 → 98.1/1.2/0.7.
- Summer-2023 tables: Man City 2237.7 (top Europe), Palmeiras 1961.0 (top South America); league averages: England 2118.8, Germany 2069.9, Brazil 1868.4, Argentina 1779.9.
- Limitations: draw-probability s fed from LightGBM trained on the same matches (no leakage firewall); no ablation of which modification drives the gain; "stability within season" assumed but contradicted by roster churn.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: φ (rating deviation) is a per-team uncertainty signal GSE's point ratings lack; the anti-inflation normalization and regime-dependent HFA are governance-grade modeling practices.
- OTHER: modified Glicko-2 for NFL — port HFA-inside-expectation, season-start φ-bump + roster-turnover drift μ_l (≥40% roster turnover proxy for league change), post-season mean normalization; skip the draw term (no NFL draws); output weekly (μ, φ) per team.
## Engine-actionable? (yes/no + one-line what)
yes — implement NFL Glicko-2 with the three portable modifications; adopt if it beats both unmodified Glicko-2 and GSE's Elo baseline by ≥0.004 mean log-loss on the 2021–2025 test block.
