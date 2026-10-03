# arxiv-program/research/2026-09-21/arxiv-deep/0602-measuring-spatial-allocative-efficiency-in-basketball.md
## What it is (1-2 sentences)
Sandholtz, Mortensen & Bornn (2020) introduce spatial allocative efficiency: an NBA lineup is efficient at a court location if players' FG% ranks match their FGA-rate ranks (best shooter takes the most shots), scored by lineup points lost (LPL) and player LPL contribution (PLC) metrics; a permutation test shows lineups minimize LPL beyond random, and a game-level regression finds 1 LPL point costs 0.62 actual points. The deep read's verdict is ADAPT — port the rank-matching allocation framework to NFL target/touch allocation (target share vs per-route efficiency) and play-call mix vs situational EPA.

## Key metrics/methods (formulas where given, else "not specified")
- FG% surfaces (Bayesian hierarchical, INLA): logit(π_j(s)) = β'x + Z_j(s), x = [intercept, position, distance, position×distance]; Z_j(s) = w_j'ΛΨ(s): GP with D=16 deterministic NMF bases + mesh interpolation basis; CAR prior shrinking player weights to 5 nearest neighbors in NMF loading space; court gridded 1ft×1ft (M=2350 cells).
- FGA-rate surfaces: per-player, per-lineup log-Gaussian Cox process log λ(s) = β₀ + Z(s), INLA; rescaled to observed attempts, per-36-min normalized.
- Rank correspondence R^A − R̂^ξ ∈ [−4,4] per cell (FG% ranks 1–5 vs FGA ranks); negative = over-usage, positive = under-usage. Key finding: aggregate FGA vs PPS looks flat/slightly negative but conditioning on court region flips it positive everywhere — a Simpson's paradox motivating the spatial treatment.
- LPL: redistribute shot vector A_i to A*_i via rank-matching permutation g(·) (FGA ranks → FG% ranks): LPL_i = Σ_j v_i·ξ_ij·(A*_ij − A_ij); per-shot LPL^Shot_i = LPL_i/Σ_j A_ij; A*_i constrained to be a permutation of A_i (total attempts preserved).
- PLC: PLC_ij = LPL_i × (A*_ij − A_ij)/Σ_j|A*_ij − A_ij|; positive = undershooting, negative = overshooting.
- Game regression: Score_abg = μ + α_a + β_b + γ·I(Home_ag) + θ·TGLPL_ag + ε_abg (3 regions: restricted area, mid-range, 3pt), Bayesian HMC in Stan; ε ~ N(0,σ²).
- Permutation test: observed total LPL vs 500 random allocations per starting lineup; one-sided p̂ = fraction < 0.

## Data sources named
2016–17 NBA regular season: 224,567 shots by 433 players from NBA stats API (shotchartdetail + playbyplayv2); lineup construction code github.com/jwmortensen/pbp2lineup; demo github.com/nsandholtz/lpl; players with <5 shots treated as replacement players. Empirical appendix: 12 discrete regions with ad hoc +1 make/+4 misses anchor.

## Findings (numbers and facts, not vibes)
- Permutation test (starting lineups): GSW and POR p̂ = 0.000 (best allocative efficiency); CLE p̂ = 0.002; SAC p̂ = 0.442 (worst); most lineups p̂ < 0.15 — offenses minimize LPL beyond defenses' ability to prevent it.
- Game regression: θ posterior mean = −0.62, 95% HPD (−1.08, −0.17) — each LPL point costs 0.62 actual points; Houston lost ~1 point/game (most efficient), Washington >3 points/game (least); 10% of 2016–17 games decided by ≤2 points.
- Cavs: total LPL = 0.68 per 36 min; Kyrie Irving under-utilized from 3; LeBron over-shooting mid-range top-of-key (negligible LPL density there).
- Utah case: Derrick Favors' mid-range baseline/elbow shots (1500+ shots, 0.76 PPS 2013–17) flagged by PLC; the Jazz's "stretch four" fix (21 threes in 4 seasons → 141 in 2017–19, at 0.66 PPS) was misguided.
- Westbrook OKC: 45.5% average usage in four elimination games 2017–19 (e.g., 46 points on 43 attempts in a 96–91 Game 6 loss); positive corner-3 PLC looks like under-usage, but those shots are created by his drives — LPL ignores shot creation and game-theoretic predictability (diagnostic, not prescriptive).
- Limitations: FG% lineup-independence assumption (gravity effects; worse in NFL where coverage concentrates); no usage/skill curve (efficiency assumed constant under redistribution — Oliver 2004/Goldman & Rao 2011 flagged); observational regression (θ absorbs unobserved quality); no out-of-sample prediction.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: NFL "Target Allocation Efficiency" (TAE) metric — per-team-week, rank receivers by efficiency (EPA/target, YPRR) vs allocation (target share/TPRR) stratified by route-depth × field zone (3×3 cells); NFL LPL = expected EPA lost = Σ_j (EPA/target)_j × (optimal_targets_j − actual_targets_j) with the permutation constraint; receiver TPC (target points contribution) flags over/under-targeted players — props-relevant.
- COACHING: play-calling efficiency — rank run/pass mix or target distribution across downs/distances/field zones against situational EPA; weekly "over/under-targeted" lists + team play-calling grades as props/coaching content.
- QB-BEHAVIOR: shot-creation blind spot (Westbrook drive-and-kick) analogizes to a QB creating open targets via scrambles/play-action — a naive LPL port would punish the creator; needs the usage-curve guardrail.
- TRUST-SIGNAL: usage-curve improvement — estimate per-receiver target-share→efficiency curves and replace rank-permutation optimum with constrained optimization max Σ_j targets_j·eff_j(targets_j) s.t. Σ targets_j = total; avoids dumping targets onto a player whose efficiency collapses under volume (bracket coverage).

## Engine-actionable? (yes/no + one-line what)
yes — build weekly per-team TAE (target rank vs efficiency rank by route-depth × field zone on nflverse) for props edges and play-calling grades, gated on a game-level regression test (θ < 0, 95% CI excludes 0, ≥0.5 points out-of-sample RMSE gain); ~4–5 days empirical version first.
