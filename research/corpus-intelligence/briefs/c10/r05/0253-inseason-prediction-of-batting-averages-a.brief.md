# arxiv-program/research/2026-09-21/arxiv-deep/0253-inseason-prediction-of-batting-averages-a.md
## What it is (1-2 sentences)
Brown (2008, Annals of Applied Statistics; full-text read): the canonical field test of empirical-Bayes/Bayes shrinkage estimators for in-season MLB batting-average prediction, fit on first-half (or first-three-months) 2005 data and validated against the already-concluded season's actual second-half data. The ledger's verdict is REJECT — the canonical shrinkage lesson is foundational statistics already absorbed in GSE's calibration/ML lanes, and the MLB binomial-average setting has no NFL transfer path.
## Key metrics/methods (formulas where given, else "not specified")
- Variance-stabilizing transform: X_i = arcsin(√((H_i+1/4)/(N_i+1/2))), θ_i = arcsin(√p_i), giving X_i ~ N(θ_i, σ_i²) with σ_i² = 1/(4N_i) (Eqs. 3.1–3.2).
- Constant-ability assumption: θ_ji = θ_i across halves (Eq. 3.3); validated in Section 7 including a no-hot-hand finding.
- Validation: SSPE[δ] = Σ_{i∈S1∩S2} (X_2i − δ_i)² (Eq. 3.4); oracle-adjusted TSE[δ]; normalized TSE*[δ] = TSE[δ]/TSE[δ_0] with naive estimator δ_0(X_1i) = X_1i as the unit baseline (Eq. 3.5); parallel raw-average-scale TSE*_R; weighted TWSE (Eq. 5.1).
- Estimators compared: naive (4.1); grand mean (4.2); parametric EB method-of-moments with θ_i ~ N(μ, τ²) and Bayes form θ_i^Bayes = μ + τ²/(τ²+σ_1i²)·(X_1i − μ) (Eqs. 4.3–4.4); parametric EB maximum-likelihood; nonparametric EB (Robbins' 1951/1956 idea via Brown 1971); harmonic-prior Bayes; James–Stein (minimaxity verified for the observed {N_1i} arrays).
## Data sources named
MLB 2005 monthly batting records (hits H_i, at-bats N_i, pitcher/nonpitcher status); restricted to batters with ≥11 first-half at-bats (P=567 for estimation, 499 also qualifying in the second half for validation; subgroups 486 nonpitchers / 81 pitchers). Public baseball records; prior seasons deliberately excluded by the ground rules.
## Findings (numbers and facts, not vibes)
- All batters, TSE* (naive=1): grand mean 0.852; EB(MM) 0.593; EB(ML) 0.902; NPEB 0.508; harmonic prior 0.884; James–Stein 0.525. Best order: NPEB, J–S, EB(MM); EB(ML) and HB mediocre — attributed to {θ_i} being a two-component mixture rather than normal, and N–X correlation hurting EB(ML)/HB most.
- Subgroup TSE*: nonpitchers — naive 1, mean 0.378, EB(MM) 0.387, EB(ML) 0.398, NPEB 0.372, harmonic 0.391, J–S 0.359; pitchers (X̄_1=0.396, N̄_1=25.1 vs nonpitchers X̄_1=0.528, N̄_1=157.8) — naive 1, mean 0.127, EB(MM) 0.129, EB(ML) 0.117, NPEB 0.212, harmonic 0.128, J–S 0.164. Within homogeneous subgroups the grand mean is nearly unbeatable; NPEB suffers at pitcher N=81 with 4× heteroscedasticity.
- Under weighted TWSE, James–Stein is best (0.502).
- Simulations: pairwise TSE* differences have SD 0.05–0.20 — fine-grained estimator rankings may not be stable across seasons.
- N–X correlation violates every estimator's motivating assumptions: R² = 0.25 overall, 0.19 nonpitchers (pitchers have few ABs and low averages).
- Section 7: binomial-model assumption empirically adequate; no hot-hand effect found (conditional on the constant-ability framework).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Shrinkage-estimator doctrine already assumed in GSE's calibration/ML lanes; within-homogeneous-subgroup grand-mean near-unbeatable — OTHER (methodology, duplicate lesson; keep only as a citable precedent)
- N–X correlation (playing-time vs skill) as an assumption-violation to check in any NFL small-sample estimator — TRUST-SIGNAL (INFERENCE: the analogous NFL confound is snap-count/attempt-volume vs talent)
## Engine-actionable? (yes/no + one-line what)
No — foundational shrinkage statistics with no NFL transfer (binomial exchangeable-trial structure has no football analogue); REJECT stands, reconsider only as a citable precedent if GSE ever needs a documented field test for choosing a shrinkage estimator.
