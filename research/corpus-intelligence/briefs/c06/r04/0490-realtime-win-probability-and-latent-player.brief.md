# arxiv-program/research/2026-09-21/arxiv-deep/0490-realtime-win-probability-and-latent-player.md
## What it is (1-2 sentences)
Maps discrete basketball scores to a continuous "T-score" dominance measure, models its in-game evolution as a Brownian T-process to derive a closed-form real-time win probability, and defines "Intervals on Fire" (IoF) to quantify players' flow-based contributions (STATS X) beyond static metrics; dossier verdict ADAPT — port the closed-form WP derivation and IoF design to NFL drive-level data.
## Key metrics/methods (formulas where given, else "not specified")
- T-score: symmetrized ratio T(a,b)=(2−b/a)1{a≥b}+(a/b)1{b>a}, c=1 (eq. 2.1); also log-ratio, relative-difference, normalized (a−b)/√(a+b+κ) variants.
- Team: T^k=α0+F_α(S^k)+ε^k; TFS:=α0 (pre-game strength), TSS^k:=F_α(S^k). Player: PCS^{k,j}=α0/J+α0·(PSS^{k,j}−TSS^k/J)/D^k·1{D^k>0} (eq. 3.7), Σ_j PCS=α0.
- Closed-form WP: PW_t=1−Φ((c−T_*(t,a,b))/√((1−t)(τ²+σ²))), τ²=Σα_i² (eq. 5.2); sensitivity ∂PW_t/∂S_i=φ(·)·α_i/√((1−t)(τ²+σ²)) (5.3).
- IoF: union of intervals where Δ_mT/Δ>δ (δ = fourth-largest per-game rate of change); X-index X_δ^{k,j}=player court time during IoF; STATS X=h(X), paper uses h(x)=δx.
- Estimation: least squares (eq. 7.1) for α_{0:8}, AIC stepwise; 8 STATS (PTs, FGM, 3FGM, DR, OR, AS, TO, FD).
## Data sources named
Japanese B.League 2022–23 (regular season, n=60 games/team; official B.League data + contract-restricted Data Stadium minute-by-minute play-by-play + box scores, not public). Test apps: two Chiba Jets 2022–23 playoff games (lost 73–88 to Ryukyu 2023/5/28; won 94–66 vs Alvark Tokyo 2023/4/30).
## Findings (numbers and facts, not vibes)
- TFS vs win rate ρ=0.989 (in-sample circular per dossier: α0 fitted on the same outcomes). Chiba α0=1.140517 (53–7, .883); Niigata α0=0.874814 (13–47, .216).
- Chiba OLS (n=60): PTs α1=0.062776 (SE 0.020391, p=0.003); DR α5=0.056412 (SE 0.013568, p=0.0001); FGM/3FGM/OR/AS/TO/FD all insignificant (p 0.27–0.68).
- Player eval (Ryukyu game): PCS top Togashi 0.2091; STATS X top Edwards 0.059 (PCS only 0.0858) — rank orders differ across PCS/PTS/EFF/PER ("total statistical output ≠ dynamic contribution").
- No WP accuracy metric anywhere (no Brier, no calibration curve, no baseline); T_* anchor explicitly ad hoc; δ arbitrary per game.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: analytic in-game win-probability family (alternative to empirical WP grids) + flow-interval player evaluation.
## Engine-actionable? (yes/no + one-line what)
yes — Adapt Brownian closed-form WP to drive-aggregated nflverse data as an analytic alternative to the nfl4th WP grid, plus IoF-style snap-participation flow ratings; gate: holdout Brier ≤ nfl4th grid (within 0.0005) on 2023–2024, calibrated in all deciles.
