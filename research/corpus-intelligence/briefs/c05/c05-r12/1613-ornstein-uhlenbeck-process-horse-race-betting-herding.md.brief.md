# arxiv-program/research/2026-09-21/arxiv-deep/1613-ornstein-uhlenbeck-process-horse-race-betting-herding.md

## What it is (1-2 sentences)
Research ledger on "Ornstein–Uhlenbeck Process for Horse Race Betting" (Sugawara, Mori 2026, arXiv:2503.16470) — derives the time-inhomogeneous Ornstein–Uhlenbeck process for betting-odds convergence from a microscopic model of herder vs. informed bettors, and estimates a time-varying informed-bettor fraction r_inf(n) on 3,450 JRA races. The ledger's verdict is ADAPT: a parametric, fittable model of how betting markets converge toward efficiency as the event approaches — port from vote-share to NFL line-movement data to locate when "sharp money" takes over.

## Key metrics/methods (formulas where given, else "not specified")
- Micro rule: f_n(z) = r_inf(n)·q + (1−r_inf(n))·z (convex mix of informed f_inf=q and herder f_herd=z).
- SDE: dZ(n,q) = −[r_inf(n)(Z−q)/(n+1)] dn + [√(q(1−q))/((n+1)√Δt)] dW(n,q); potential U_n(z) = r_inf(n)/[2(n+1)](z−q)²; closed-form solution + MSE decomposition; log-MSE approx ln(MSE(n)/MSE(1)) ≈ (−2r_1 + 4Δr/(N−1)) ln((n+1)/2) − 2((n−1)/(N−1))Δr.
- Constant r_inf: MSE ∼ power law (exponent 2r_1 for r_1<1/2, 1 for r_1>1/2, log correction at 1/2 — "super-normal transition"). Linear r_inf(n) = r_1 + (n−1)/(N−1)·Δr: crossover to exponential decay at n > n_c = (N−1)/(2Δr) + 1 when Δr > 0.
- Estimation: regress (n+1)(Z(r,h,n+1)−Z(r,h,n)) = −r_inf (Z(r,h,n)−q(r,h)) at n ∈ {1,…,50}; macro validation = empirical log-MSE ratio vs Eq. 10 in four q-strata.

## Data sources named
JRA 2008 win-bet data: 3,450 races, 50,180 horses, 3,453 winners; final pools 5.9×10⁴–1.46×10⁷ (mean ≈3.0×10⁵); 14–401 announcements per race (mean ≈80); odds→vote share via JRA formula O = max(1.1, 0.788/Z) inverted with +0.05 truncation adjustment; normalized time n[r,i] = 100×t/T (n=1 ≈ 480 min to post, n=50 ≈ 20 min). Analysis code: https://github.com/LABO-M/Ornstein-Uhlenbeck-Process-for-Horse-Race-Betting.

## Findings (numbers and facts, not vibes)
- Informed fraction: r_inf(n) = 0.334 + [(n−1)/49]·0.658, R² = 0.90 (all horses); at n=50, r_inf = 0.992, herder fraction 0.008 — reverses prior assumption: herders decrease over time, market becomes more efficient approaching post.
- q-strata: q<0.01 (25.6%) and 0.01–0.1 (52.2%) match theory closely; q≥0.4 favorites (1.6%) converge slower than theory (MSE slope ≈ −0.5 vs theoretical 2r_inf = 0.8): persistent herding on favorites → slower convergence → favorite–longshot bias (favorites undervalued).
- Crossover n_c ≈ 77 (N=100, Δr=0.658). Low per-n regression R² acknowledged (q-heterogeneity, n↔real-time mismatch).
- Caveats in file: pari-mutuel vote-share ≠ fixed-odds line (herder rule needs re-derivation for NFL); n is pool-normalized not clock-normalized; MSE(100) ≡ 0 by construction so only n ≤ 50 analyzed; no holdout or forecasting test; single year/jurisdiction, win market only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — market microstructure: per the existing-research map (lines 47, 143), GSE has line-movement/steam and CLV-as-label lanes but nothing modeling the dynamics of convergence toward close — this fills open gap #3 (market microstructure in sports betting). CLV measures whether the close was efficient; this models how fast efficiency arrives.
- TRUST-SIGNAL — the fitted r_inf(n) curve is a "market-efficiency clock" for timing GSE's own releases (publish before the market gets efficient) and weighting CLV evaluations; the improvement experiment (delayed-herder class, stale-line arbitrage window detector) is a direct betting-edge asset.
- QB-BEHAVIOR — N/A.

## Engine-actionable? (yes/no + one-line what)
Yes — ~1 week: build per-game-week consensus spread-implied probability series from GSE's odds captures (open→kickoff), fit r_inf(n) via the paper's regression, identify n_c (the "sharp crossover"), replicate the favorite/underdog r_inf(n) split to test for an NFL favorite–longshot herding signature; gate on R² ≥ 0.5 with positive Δr and a statistically different favorite/underdog trajectory (Wald p < 0.05).
