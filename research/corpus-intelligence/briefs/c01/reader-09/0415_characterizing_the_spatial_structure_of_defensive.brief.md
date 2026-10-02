# arxiv-program/research/2026-09-21/arxiv-deep/0415-characterizing-the-spatial-structure-of-defensive.md
## What it is (1-2 sentences)
A full-paper research note on Franks et al. (2015), arXiv:1405.0231v3 — decomposing NBA defensive skill spatially from optical tracking data, using an HMM to infer defender-to-receiver assignments and splitting defender value into shot-frequency suppression vs shot-efficiency suppression. Verdict: ADAPT — port the HMM assignment inference and the frequency/efficiency decomposition to NFL coverage analysis.

## Key metrics/methods (formulas where given, else "not specified")
- Defender canonical location: μ_{tk} = γ_o O_{tk} + γ_b B_t + γ_h H, with γ_o + γ_b + γ_h = 1; fitted EM estimates: 0.62 O_{tk} + 0.11 B_t + 0.27 H (±0.02/0.01/0.02); transition parameter ρ in 0.96–0.99 across games.
- Frequency model: multinomial over (shooter, region); Efficiency model: logistic regression for make probability with shrinkage toward defender-type means (CAR-style).
- Court discretization: log-Gaussian Cox process for shot intensity + NMF → 6 spatial bases (first 5 used).
- Validation: 10-fold cross-validated log-likelihood across four model variants; acceptance gate proposed: each component half-to-half correlation r ≥ 0.35 on 2023–2024 CBs AND ≥ 0.02 out-of-sample EPA/target R² gain over passer-rating-allowed baseline.

## Data sources named
- 2013–14 NBA optical player-tracking data at 25 frames/second (proprietary).
- ~150,000 shooter–region observations (frequency model); ~115,000 shot possessions (efficiency model).
- NFL port spec: NGS player tracking 2022–2025 (10 Hz) joined with nflverse targets/completions/EPA.

## Findings (numbers and facts, not vibes)
- Headline result: frequency suppression and efficiency suppression are nearly uncorrelated, distinct skills — Roy Hibbert ranks 1st and 4th in paint efficiency suppression but 161st in both paint frequency bases; Dwight Howard ranks 11th/2nd in paint frequency suppression but 50th/117th in efficiency.
- 10-fold CV log-likelihoods (full vs no-shrinkage vs no-defense vs no-spatial): shooter −25,474.93 / −25,571.41 / −25,725.17 / −26,342.83; full −41,461.74 / −41,646.81 / −41,904.48; efficiency −3,202.09 / −3,221.44 / −3,239.12 / −3,270.99.
- Confounds: team scheme absorbs into defender effects (e.g., funnel-to-center centers); HMM forces one-to-one matchups (help/double-teams not explicit); no out-of-season stability validation.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: frequency-vs-efficiency decomposition maps directly to NFL coverage — target-avoidance vs target-suppression as distinct CB/safety skills; route-type-conditioned defender effects proposed as the GSE matchup-grade foundation.
- QB-BEHAVIOR: target-avoidance by coverage defender feeds WR/CB matchup models — a QB who never targets a CB's side gives indirect evidence of coverage quality.
- OTHER: probabilistic defender-assignment inference (HMM on tracking data) is a new capability for the GSE corpus; needs a zone-aware extension since zone coverage makes one-to-one assignment ill-defined.
- TRUST-SIGNAL: none in file.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the two-component coverage decomposition (target-rate suppression vs completion/EPA suppression per defender) on NGS tracking + nflverse for weekly CB/safety leaderboards and WR/CB prop matchup features.
