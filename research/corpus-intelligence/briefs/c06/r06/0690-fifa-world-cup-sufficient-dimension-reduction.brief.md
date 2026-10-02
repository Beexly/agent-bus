# arxiv-program/research/2026-09-21/arxiv-deep/0690-fifa-world-cup-sufficient-dimension-reduction.brief.md
## What it is (1-2 sentences)
Rezaei & Samadi (2026) test whether recent Elo-rating history contains predictive signal beyond the current rating by applying categorical sufficient dimension reduction (SIR/SAVE) to lagged monthly Elo differences, then feeding the SDR scores into a Poisson goal regression — every SDR model beats every non-SDR baseline on out-of-sample 2018+2022 World Cup matches.
## Key metrics/methods (formulas where given, else "not specified")
- K=6 lagged monthly Elo differences per match, whitened (x̃ = Σ̂_X^{-1/2}(x−x̄)); SIR kernel M̂_SIR = Σ_c π̂_c x̄_c x̄_cᵀ; SAVE kernel M̂_SAVE = Σ_c π̂_c (I_K − Σ̂_c)²; top d=2 eigenvectors → scores z = Bᵀx̃.
- Poisson double regression: log λ^H_m = μ^H + Σ_j ξ_j z_{m,j} + δ^H N_m + η_1 Ḡ^+_h + η_2 Ḡ^−_a (home; mirror for away).
- Elo update: R′_h = R_h + κΓ(S_h − E_h), κ ∈ {60 WC finals, 35 continental, 25 qualifiers, 20 friendlies}; ζ=100 home advantage.
- Primary metric: ranked probability score (RPS); uniform forecast expected RPS = 2/9.
## Data sources named
github.com/martj42/international_results — 49,257 international matches 1872–2026. 2026 tournament forecast via N=5,000 Monte Carlo replications with official 48-team bracket.
## Findings (numbers and facts, not vibes)
- Combined RPS on 128 WC matches (2018+2022): SIR d=2 0.127 (acc 0.688); SAVE d=2 0.127 (acc 0.680); SIR d=1 0.129; SAVE d=1 0.129; ensemble M7 0.209; current-Elo Poisson M3 0.212; ARIMA-Elo M4 0.213. Every SDR model beats every non-SDR model.
- The first direction carries almost all the gain; the second adds a small draw-probability refinement.
- ARIMA orders across 47 WC teams: 30 chose (0,1,0); NNAR(1,1,2) dominant (81% of teams).
- 2026 forecast: Spain champion 16.6% (SAVE) / 16.5% (SIR); illustrative final Spain–Argentina 50.7/49.3 (now verifiable against realized 2026 outcomes — INFERENCE: the flag is the ledger's, noting the opportunity).
- Caveats flagged in file: only 128 test matches; SDR models trained on a richer sub-population (WC-qualified teams only) — part of the gap may be population selection, not the trajectory signal; SIR ≈ LDA here (class-mean alignment).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: SDR-of-rating-history pipeline transfers to GSE — replace GSE's single current-rating-difference feature with 2 SIR/SAVE scores computed from 6 lagged weekly rating differences for the ATS/total heads.
## Engine-actionable? (yes/no + one-line what)
yes — Build a per-team weekly rating-history panel (K=6 lagged rating differences, whitened), compute SIR/SAVE top-2 scores, swap them into the game-outcome head vs current-difference-only baseline; adopt if 2025 test log-loss drops ≥0.005.
