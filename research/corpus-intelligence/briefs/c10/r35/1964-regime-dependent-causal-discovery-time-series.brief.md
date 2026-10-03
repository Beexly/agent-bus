# arxiv-program/research/2026-09-21/arxiv-deep/1964-regime-dependent-causal-discovery-time-series.md
## What it is (1-2 sentences)
Deep-read ledger of Kretschmer et al. (2020), Regime-PCMCI: jointly learns regime assignment and per-regime causal graphs from observational time series by alternating between (a) PCMCI causal discovery on regime subsets and (b) constrained regime learning, without knowing regimes in advance. Verdict in file: ADAPT — the direct answer to ledger 1963's stationarity limitation; detects when football's causal structure itself changes (injuries, coordinator changes, weather-regime playoffs).

## Key metrics/methods (formulas where given, else "not specified")
- Alternating optimization (Alg. 1): Step 1 — fix regime weights {Γ(t)}, run PCMCI on {x_t : γ_k(t) ≥ 0.5} (eq. 11) → per-regime parents {P_k} and coefficients {Φ_k} (eq. 13); Step 2 — fix graphs, solve for Γ(t) minimizing L(Γ,P) = Σ_t Σ_k γ_k(t)·d(x_t − Ĝ_t(P_k; Φ_k)) (eq. 8), subject to Σ_k γ_k(t)=1, γ_k(t)∈[0,1] (eq. 9) and persistence Σ_t |γ_k(t+1)−γ_k(t)| ≤ N_C (eq. 10)
- Tuning: N_C ≈ T/(N_M·N_K) (N_M = expected regime duration, domain-knowledge driven); N_K selected via AICc (eq. 18)
- Multiple random restarts: N_A annealing runs × N_Q optimization iterations, keep lowest-prediction-error runs (ε̂, eq. A.4)
- GSE spec in file: team-week panel or league-week aggregates (T≈300+), ~15 core indicators (EPA components, pressure, turnovers, injury counts, pace), ParCorr CI test, N_K∈{2,3}, N_M≈6 weeks, offline quarterly with a live regime classifier (logistic on recent indicators) as the only online component

## Data sources named
Synthetic toy series (N_X=2 low-dim + higher-dim, regime changes in sign/direction/lag/magnitude/autocorrelation); real: ENSO relative Niño3.4 (NOAA) + All-India Rainfall (IITM), monthly 1871–2016 (2×1740 months). tigramite provides PCMCI; no public code for the regime wrapper. Proposed GSE data: nflverse team-week panel.

## Findings (numbers and facts, not vibes)
- Sign-change synthetic case: regime reconstruction matches truth 99.6% of time steps (97% averaged over realizations); TPR=0.99, FPR=0.01; per-link coefficient error 0.028 (9%)
- Across cases: "TPR is always very close to 1" despite regime-learning errors; FPR above known-regime reference (misassignments cause false positives/negatives)
- N_K=3 experiments (N_R=100 each): TPR_all=0.98 vs TPR^ref_all=1.0; FPR_all=0.05 vs FPR^ref_all=0.01; ΔΦ=0.033 vs ΔΦ^ref=0.020
- AICc correctly selects N_K in the {2,3} test scenarios (Fig. 8)
- ENSO–AIR real data (N_K=2, N_C=292, α=0.01, α_PC=0.2, τmax=2, N_A=100, N_Q=100): top 13 annealing runs all find ENSO→AIR link in one regime only, standardized effect −0.4 (one SD ENSO increase → 0.4 SD AIR decrease), regime 1 peaks June–September; regime 2 near-independent — matches documented climatology
- Runtime: low-dim N_K=3 experiments took ~45 minutes (hardware unspecified) — scaling pain noted at d≈30

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Regime-dependent causal graphs (e.g., post-injury offensive scheme shifts, mid-season coordinator changes): COACHING (scheme-causal structure changes under coaching disruption); QB-BEHAVIOR (QB-injury-spell weeks as the "disrupted" regime anchor — file's acceptance test requires the classifier to recover ≥70% of documented QB-injury-spell weeks)
- Persistence constraint N_C ≈ T/(N_M·N_K): OTHER (methodological — needs sports-specific regime-duration priors since injury/coordinator regimes are irregular)
- Backward-looking detection (not online; needs streaming variant): OTHER (deployment caveat — offline quarterly + live regime classifier is the workaround)
- Hierarchical extension (league-level + team-level regimes, automated "narrative detector" e.g. "Team X's offensive causal graph changed in Week 9"): SCHEME / COACHING (content + engine feature)

## Engine-actionable? (yes/no + one-line what)
Yes — implement Regime-PCMCI on the league-week panel (2015–2023 fit, test 2024–2025) and adopt regime-specific feature graphs iff they beat pooled-PCMCI graphs by ≥0.003 Brier on held-out game-outcome prediction AND AICc selects N_K ≥ 2 in ≥60% of seasons AND the "disrupted" regime classifier recovers ≥70% of documented QB-injury-spell weeks; proposed improvement: hierarchical league+team regime model testable via AICc comparison.
