# docs/arxiv-program/research/2026-09-21/arxiv-deep/1137-g-score-fantasy-basketball.md
## What it is (1-2 sentences)
Deep-read of arXiv:2307.02188, "G-score Fantasy Basketball": replaces the industry-standard Z-score draft ranking with a G-score that adds each player's own period-to-period variance (κ·τ²) to the valuation denominator, so volatile players are discounted relative to consistent ones at the same mean. Verdict ADAPT — ports directly to NFL fantasy/DFS value-over-replacement; called the most portable idea in its wave.
## Key metrics/methods (formulas where given, else "not specified")
- Z-score baseline: z = (μ(q) − μ) / σ (μ = population mean, σ = cross-player SD).
- G-score, counting stats: G = (μM(q) − μM) / √(σM² + κ·τM²); turnovers: G = (μM − μM(q)) / √(σM² + κ·τM²); percentage stats: G = (μA/μA(p))·(μR(q) − μR) / √(σR² + κ·τR²).
- κ estimated ≈ 1.04 on 2022–23 NBA weekly data (player's own variance counts ~as much as cross-player variance).
- G-denominator as fraction of Z-denominator (real data): steals 44%, FG% 56%, FT% 58%, turnovers 62%, points 65%, blocks 68%, rebounds 69%, threes 72%, assists 75%.
## Data sources named
Author-collected real 2022–23 NBA weekly player statistics (distribution source not fully specified). Simulation: 12-team, 13-player, 20-week head-to-head leagues; 1,000 simulated seasons per draft seat; player weekly performances drawn from fitted distributions. No public code or data link.
## Findings (numbers and facts, not vibes)
- G-score drafter vs Z-score field: 32.5% Most Categories wins, 21.4% Each Category wins (baseline 1/12 = 8.33%).
- Z-score drafter vs G-score field: 0.4% Most Categories, 0.5% Each Category — near-total domination by G-score within the author's simulator.
- Caveats: simulation assumes static distributions (no injuries/form/schedule), random teammates (no positional scarcity), all games count equally; no real-draft validation; simulator's assumptions favor the variance-aware method by construction; κ may not transfer across sports.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR (adjacent): week-to-week variance τ is computed per player, so this framework directly rewards quantifying QB volatility — e.g., boom/bust QBs get discounted in cash-game-style valuations vs steady ones.
- OTHER: the core contribution is a player-valuation formula (value = (mean − replacement) / √(cross-player variance + κ·player volatility)), plus the contest-type insight that variance should be penalized in cash games but rewarded in GPPs (sign flip on the τ term).
## Engine-actionable? (yes/no + one-line what)
Yes — compute weekly mean μ(q) and week-to-week SD τ(q) from nflverse 3-season rolling logs for every fantasy-relevant player, build G-value = (μ(q) − replacement) / √(σ² + κ·τ²) per position for DFS value tiers and draft rankings, then re-estimate κ for NFL and backtest G-rankings vs Z-rankings/ADP on 2024–2025 actual weekly scores (gate: ≥12% simulated league win rate, beat Z by ≥5 pp).
