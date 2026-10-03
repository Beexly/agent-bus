# arxiv-program/research/2026-09-21/arxiv-deep/0250-adjusted-plusminus-for-nhl-players-using.md
## What it is (1-2 sentences)
Deep-dive of Macdonald (2012): regression-based adjusted plus-minus (APM) for NHL skaters via ridge regression, fitting on high-frequency proxy outcomes (shots, Fenwick, Corsi) rescaled to expected goals per 60 minutes for stability. Ledger verdict: REJECT — the shift-stint design needs per-play full lineups that nflverse lacks (near-total collinearity among fixed 11-man NFL units); portable sub-ideas already standard.
## Key metrics/methods (formulas where given, else "not specified")
- Model: y = β_0 + Σ_j β_j X_j + Σ_j δ_j D_j + ζ_off Z_off + ζ_def Z_def (Eq. 10), i.e. y = Xβ (Eq. 11); X_j/D_j = skater on offense/defense indicators; Z_off/Z_def = zone-start faceoff dummies; shift-duration weights; 36 per-player estimates (offense/defense × EV/PP/SH × 4 outcomes).
- Ridge objective: Q = (y − Xβ)ᵀ(y − Xβ) + λβᵀβ (Eq. 16), solved via (XᵀX + λI)β̂ = Xᵀy (Eq. 18).
- λ chosen per model as max of: (1) randomized generalized cross-validation (Girard 1991 trace estimator), (2) trace-curve stabilization point, (3) Hoerl–Kennard–Baldwin λ_HKB = p·MSE/(β̂ᵀβ̂) (Eq. 23), (4) λ bringing all VIFs below 10 (ridge VIF = diagonal of (XᵀX+λI)⁻¹XᵀX(XᵀX+λI)⁻¹, Eq. 24). Displayed models λ ≈ 0.5.
- Proxy outcomes: goals, shots, Fenwick (shots+misses), Corsi (shots+misses+blocks) per 60 minutes; proxies rescaled to expected goals/60 by league-average goals-per-shot/Fenwick/Corsi computed per situation over four seasons (~10 shots per goal).
- Stability check: Pearson correlation of per-60 estimates across seasons (≥500 EV min / ≥150 special-teams min).
## Data sources named
- Every shift of every NHL game, four seasons (2007-08 through 2010-11): N = 2,324,528 observations at even strength, N = 461,022 special teams; shift start/end, players on ice, zone-start faceoff, goals/shots/missed/blocked; empty-net removed. No code/data link stated.
## Findings (numbers and facts, not vibes)
- Shots-based SEs ~0.05–0.08, roughly 2.5–3× smaller than goals-based SEs (~0.18–0.20) — the paper's central numerical result (e.g., Ovechkin EV offense: G 0.46 (0.18), S 0.45 (0.07), F 0.53 (0.06), C 0.63 (0.05)).
- Four-season offensive leaders (G_off goals/season): Crosby 23 (S_off 12, F_off 13, C_off 14), Toews 18, Ovechkin 17 (S 17, F 20, C 24), D. Sedin 16, Thornton 16; per-60 EV offense (SE): Crosby 0.83 (0.20), Ovechkin 0.46 (0.18), Datsyuk 0.53 (0.19).
- Ridge beats OLS on year-to-year correlation for EV offense (goals) and for shots/Fenwick/Corsi in all three displayed panels, except SH defense where ridge-goals ≈ OLS.
- Trace-curve: Datsyuk's PP offense estimate flips from negative (λ=0 OLS) to elite-positive at λ=0.5; Lidstrom's OLS ≈ 4.0 goals/60 collapses under ridge.
- Award agreement: Datsyuk #1 defensive forward (G_def 12) and #1 overall (G 27), matching actual 2007-08–2009-10 Selke wins; face-validity only — no out-of-sample prediction of future performance, team outcomes, or decisions anywhere in the paper.
- Leakage caveats: league-average shooting% rescaling erases finishing skill (Ovechkin C_off 24 vs G_off 17 shows how much rescaling moves conclusions); max-of-four λ heuristic is ad hoc; shift-level i.i.d. ignores score effects and goalie quality.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- No actionable NFL port: nflverse play-by-play does not record which 22 players are on the field per play, and NFL 11-man units are near-perfectly collinear — the design matrix cannot be built (OTHER)
- Portable sub-ideas are duplicates: ridge/L2 shrinkage is routine in GSE's ML lanes, and "noisy high-frequency proxy rescaled to target unit" is already the engine's EPA-per-play-vs-points principle (OTHER)
## Engine-actionable? (yes/no + one-line what)
no — data gap (no per-play full NFL lineups) plus portable ideas already standard; rejected unless a full-lineup feed appears AND pilot ridge-APM beats snap-weighted EPA stability by ≥0.05 year-to-year correlation.
