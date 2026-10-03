# arxiv-program/research/2026-09-21/arxiv-deep/0984-suspense-surprise-european-football.md
## What it is (1-2 sentences)
Full-text ADAPT verdict on arXiv 2506.21253v1 (2025), Flepp/Pawlowski/Richardson (U. Zurich, U. Tübingen), "Suspense and Surprise in European Football" — replaces classical outcome uncertainty (UOH) with two within-match belief-path entertainment metrics from Ely, Frankel & Kamenica (2015, JPE), validated on 25,389 real men's matches (2010/11–2023/24), 725 women's matches (2023/24), and 13.26M simulated matches.

## Key metrics/methods (formulas where given, else "not specified")
- Surprise = Σ_{t=1}^{90} sqrt((p_t^H−p_{t−1}^H)² + (p_t^D−p_{t−1}^D)² + (p_t^A−p_{t−1}^A)²) — backward-looking belief shift summed over 90 minute-periods (verbatim from file).
- Suspense = Σ_{t=1}^{90} sqrt(Σ_{j∈{H,D,A}} [p_{t+1}^{HS}((p_{t+1}^j|HS_{t+1})−p_t^j)² + p_{t+1}^{AS}((p_{t+1}^j|AS_{t+1})−p_t^j)²]) — forward-looking variance of next-period beliefs given a home-score or away-score event (verbatim from file).
- In-play outcome model: X ~ Poisson(λH), Y ~ Poisson(λA), independent; team scoring rates distributed across 90 minutes via league-specific empirical minute-by-minute goal distributions; red cards adjust rates for the remainder (penalized team × 2/3, opponent × 1.2, per Vecer et al. 2009); per minute goals drawn as Gt ~ Bernoulli(p_t^S); 100,000 simulations per minute → 9M simulated minutes per match; injury time folded into minutes 45/90 so every match is exactly 90 periods.
- Scoring-rate calibration (Buraimo et al. 2020): optimization choosing (λH, λA) to match overround-removed closing 1X2 implied probabilities AND over/under (0.5–5.5) implied probabilities — market-anchored rates.
- Benchmark: perfectly balanced matches (λH=λA) at 10th (0.5) and 90th (2.5) percentiles of empirical goals/team/match → benchmark ranges: suspense [6.03, 6.89] (low-scoring 6.89, high-scoring 6.03), surprise [1.17, 1.74] (low 1.17, high 1.74).
- Trends: OLS of ln(suspense)/ln(surprise) on continuous season + top-team × season interactions, SEs clustered at home–away pair level.
- TV-demand regression: ln(audience) on ln(suspense), ln(surprise); n=790 televised EPL matches (Sky/BT, 2013/14 2nd half–2018/19) merged with Buraimo et al. (2022) audience data.

## Data sources named
- fbref.com — match events (goal/red-card timing).
- oddsportal.com — pre-match closing 1X2 odds + over/under odds (0.5–5.5).
- EPL empirical minute-by-minute goal distribution (for simulation scoring rates).
- Buraimo et al. (2022) audience data — TV-demand validation (790 matches).
- Buraimo et al. (2020) — scoring-rate calibration procedure.
- Vecer et al. (2009) — red-card rate multipliers (2/3, 1.2).
- Ely, Frankel & Kamenica (2015, JPE) — suspense/surprise metric definitions.
- Simulated: 1,326 unique (λH, λA) combos (each ∈ [0,5] in 0.1 steps) × 10,000 matches = 13,260,000 hypothetical matches.
- Women's data: 725 matches 2023/24, five top divisions (England 132, Germany 132, Spain 240, Italy 90, France 131; Italy/France playoffs excluded, one suspended match excluded).

## Findings (numbers and facts, not vibes)
- Simulation trade-off: suspense peaks at λH=λA=0.5 and is ZERO at (0,0) even though perfectly balanced (balance ≠ uncertainty); surprise increases strictly with equal scoring rates (max at 5,5). Raising one team's rate while holding the other fixed moves suspense and surprise in OPPOSITE directions (e.g., λH 1→1.5 at λA=1: suspense ↓, surprise ↑).
- Empirical levels (Table 2): top-5 average suspense 5.85 (SD 2.14) — significantly BELOW the benchmark lower bound 6.03 (p<0.01) in every league; average surprise 1.41 (SD 0.80) — inside the benchmark range. EPL lowest suspense (5.74), Ligue 1 highest (5.99). Top-team matches (especially Man City, Bayern, PSG) drag suspense down; non-top-team matches sit at/inside the benchmark.
- Baseline comparison: classical outcome-uncertainty (absolute difference in pre-match win probabilities) correlates only −0.39 with suspense and −0.18 with surprise, and is NON-SIGNIFICANT in the TV-demand regression.
- TV demand (Appendix A): ln(suspense) β=0.042 (p=0.015), ln(surprise) β=0.050 (p=0.004) on ln(audience). First PC of both (83% variance) also significant. UNCERTAIN: "suspense loses significance when surprise is included (small N)" — per file limitations.
- Trends: EPL suspense −0.6%/season overall, driven entirely by Man City matches (−3.9%/season suspense, −2.5%/season surprise; City won 7 titles in sample). Bundesliga −0.7%/season suspense, −0.5%/season surprise, NOT top-team driven. La Liga INCREASES: +0.6%/season baseline, Real Madrid +4.5%/season, Barcelona +5.6%/season suspense (+2.8%/+4.5% surprise). Serie A flat except Inter (−2.2%/−2.0%). Ligue 1 PSG −3.1%/season suspense, −2.4%/season surprise.
- Women's 2023/24: suspense 4.93, surprise 1.24 — lower than men's, wider spread; Barcelona Liga F extreme: suspense 1.57, surprise 0.37 (won every match but one draw) — single most dominant team-season in either sample.
- Bottom line for policy: despite documented declines in classical balance metrics, suspense/surprise levels and trends "do not suggest an urgent need for regulatory intervention" in men's football.
- Reproducible-test gates in file: on 2023/24 EPL reproduction — (a) league mean suspense < 6.03 (paper's 14-season EPL mean: 5.74), (b) league mean surprise ∈ [1.17,1.74] (paper: 1.38), (c) Man City matches lowest mean suspense of any club, (d) correlation of computed suspense with paper's reported league means within ±0.5. Numeric gate (both conditions required): mean suspense < 6.03 AND mean surprise ∈ [1.17,1.74].
- Improvement-experiment targets: EPV-enriched surprise explains ≥10% more variance in ln(audience) than goal-only version (ΔR² ≥ 0.10 × baseline); top-quintile expected-surprise slates show ≥15% higher payout variance in DFS simulations.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Demand-side entertainment instrument: gives GSE a computable "match entertainment engine" (pre-match expected suspense/surprise from GSE's own win-probability model) for content prioritization and watch-guide features ("most suspenseful matches of the weekend," "lowest-surprise mismatch alerts"). Serves the content lane, not prediction.
- OTHER — Expected-surprise as a "chaos index" for DFS slate selection: high-surprise slates = more lineup differentiation value (proposed backtest target: ≥15% higher payout variance in top-quintile slates). Serves the calibration/sizing lane and the DFS process system (2026-09-27).
- COACHING — Club-level dominance conclusions: dominant-coach/club eras (Man City −3.9%/season suspense, PSG −3.1%/season, Bayern/Inter declines) measurably depress match-level suspense — connects to coaching-tendency analysis of super-team eras and their watchability impact. Also the file's policy claim ("no urgent need for regulatory intervention" despite balance declines) reframes the competitive-balance debate for GSE's NFL league-structure thinking.
- TRUST-SIGNAL — UNCERTAIN: the TV-demand validation is n=790 EPL-only, 2013–2019, and suspense loses significance when surprise is included; treat the demand proxy as a content-scheduling heuristic, not a trust-verified demand signal.
- Contradiction/contrast flagged by the paper itself: classical outcome uncertainty (the standard UOH measure) is NON-SIGNIFICANT for demand while in-play dynamics are significant — a direct empirical refutation of pre-match-uncertainty-as-demand-proxy that the corpus's balance papers (0980/0981/0982/0983, ledgers 0978/0979) assume. Serves calibration of how GSE thinks about "close game" narratives.
- Referenced works: 0982 (Basini et al. 2023, SBM competitive balance), 0983 (Avila-Cano & Triguero-Ruiz 2023, DCB), ledgers 0978/0979 (2008.05417/1902.10067 market-odds forecasting papers), Buraimo et al. 2020/2022, Vecer et al. 2009, Ely/Frankel/Kamenica 2015 JPE.

## Engine-actionable? (yes/no + one-line what)
Yes — build a pre-match expected-suspense/expected-surprise ("chaos index") per fixture from GSE's win-probability model for content prioritization and DFS slate differentiation, validated against the numeric gate (EPL mean suspense < 6.03, surprise ∈ [1.17,1.74]).
