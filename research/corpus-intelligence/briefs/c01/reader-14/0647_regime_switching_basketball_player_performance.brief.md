# arxiv-program/research/2026-09-21/arxiv-deep/0647-regime-switching-basketball-player-performance.md
## What it is (1-2 sentences)
Research ledger (ADAPT verdict) on Zuccolotto et al., "Modelling Basketball Players' Performance and Interactions Between Teammates with a Regime Switching Approach" (arXiv:1912.10417, 2019). A three-step pipeline — Markov-switching decomposition of shot performance into good/bad regimes, ARIMAX measurement of teammate co-presence effects on regime probability, signed teammate-interaction network validated against team scoring intensity — proposed as a direct transfer to NFL DFS stacking (which on-field player combinations boost/suppress each other's fantasy regimes).

## Key metrics/methods (formulas where given, else "not specified")
- Step 1 (performance regimes): shooting intensity φ̃_ij = 1/t_ij; match-adjusted φ_ij = φ̃_ij/φ(m_ij); shot efficiency E_ij = x_ij − p_ij (x_ij = make indicator, p_ij = match goal % by shot type); combined performance ψ_ij = φ̂_ij · E_ij after Nadaraya–Watson Gaussian-kernel smoothing (bandwidth = 25th percentile of player's shots/match). Regime variable: ψ̂_ij,Δ(k) = sgn(ψ̂_ij − ψ̂_i(j−1))·|ψ̂_ij − ψ̂_i(j−1)|^k; two-state Markov switching E(ψ̂_ij,Δ(k)|R_ij=r) = Ψ^r_i, r ∈ {G,B}; first-order Markov Pr(R_ij|R_i(j−1)); Gaussian densities per regime; EM estimation (R package MSwM); filtered π_ijr|j and smoothed π_ijr probabilities. Ergodic probabilities π_iG = (1−π_iBB)/(2−π_iGG−π_iBB); average persistence δ_iG = 1/(1−π_iGG), δ_iB = 1/(1−π_iBB).
- Step 2 (teammate interactions): ARIMAX on filtered good-regime probability: π_ijG|j = ε_j + Σ_l α_l π_i(j−l)G|j−l + Σ_l γ_l ε_{j−l} + β_ih C_ijh, where C_ijh = 1 if teammate h on court at shot j; orders via Hyndman auto-ARIMA. Significant β_ih → directed signed edges (positive = blue, negative = red, thickness ∝ |β_ih|); network metrics: density, reciprocity, eigenvector centrality, in/out degree, signed strength degrees (Barrat et al. 2004).
- Step 3 (team impact): intensity of scored points ISP(η) = (1/2400)·Σ_t w_t scaled to 40 min; compare ISP40 for network-selected player pairs/triples vs comparison subsamples.
- Ledger's GSE adaptation: Step 1 on QB per-drive EPA-above-expectation (nflverse); Step 2 with co-presence dummies (WR2 in route tree, etc.); Step 3 validated on joint DFS fantasy output of lineup combos; improvement proposal = joint hierarchical model with time-varying transition probabilities π_GB(j) = logit^−1(γ_0 + Σ_h γ_h C_ijh) (Kim 1994 extension), avoiding two-stage error propagation.

## Data sources named
Play-by-play web-scraped from FIBA (www.fiba.basketball.com): 20 games of Iberostar Tenerife, 2016/2017 Basketball Champions League (one match dropped, missing lineup data). Shot-level: time since last shot/court entry, shot type (2P/3P/FT), made/missed, match goal % by shot type, lineup composition per shot. GSE adaptation targets nflverse play-by-play (2022–2024) with per-play personnel.

## Findings (numbers and facts, not vibes)
- Regime parameters (k=0.5): e.g., Doornekamp Ψ^G=0.1410, Ψ^B=−0.1274, π_GG=0.8288, π_BB=0.8429; Vazquez Ψ^G=0.2671, Ψ^B=−0.3373. Unconditional good-regime probabilities 0.41–0.58; average persistence 3.0–12.3 shots (White ~11.6–12.3 shots).
- Significant teammate effects: White→Doornekamp +0.0880; Doornekamp→Vazquez +0.1202; Vazquez→San Miguel +0.1406; San Miguel→Vazquez +0.1013; negatives: Grigonis→Doornekamp −0.0623, Grigonis→Abromaitis −0.0801, San Miguel→Doornekamp −0.0844, White→San Miguel −0.0667.
- Network: density 0.2619; reciprocity 0.3636; Doornekamp & Vazquez most central (eigenvector 1.0).
- Team impact: Doornekamp on court → +5.65 points/40min; network-selected pairs: White+Doornekamp +3.33, Doornekamp+Vazquez +12.86, Vazquez+San Miguel +19.10 vs San Miguel alone and +9.54 vs Vazquez alone; triples rules +0.46 to +8.90. ALL differences positive — ledger flags this as a selection/cherry-picking red flag.
- Limitations noted in ledger: k-amplification is ad hoc (k ≤ 0.6 makes ALL players "significantly switch"); in-sample only, no holdout; one team, 20 games, no opponent-quality controls; ARIMAX on bounded [0,1] filtered probabilities without logit transform.
- Ledger's acceptance gates: regimes significant for ≥50% of QBs with ≥200 drives with persistence 2–20 drives; top-20 positive QB→WR synergy pairs must replicate ≥ +1.5 fantasy pts/game on 2024 holdout (paired t-test p < 0.05); negative pairs ≤ −1.0.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR — hot/cold regime classification on per-drive QB performance; per-personnel transition matrices ("with WR2 active, QB's hot-regime persistence increases by x drives").
- TRUST-SIGNAL — signed teammate synergy network is a behavioral/interaction signal: which player pairings raise or lower each other's good-regime probability (directly applicable to trust-target modeling and inactive-player confidence adjustments).
- COACHING — substitution/lineup-decision guidance is the paper's stated use case; ports to personnel-package and rotation decisions.
- OTHER — DFS stacking optimizer constraints (require positive-synergy pairs, penalize negative ones); same-game parlay correlation inputs.

## Engine-actionable? (yes/no + one-line what)
Yes — adapt the pipeline to nflverse: Markov-switching on QB per-drive EPA-above-expectation → ARIMAX synergy edges QB↔WR → signed network feeding DFS stack constraints and pick-confidence adjustments when synergistic teammates are inactive, with the ledger's 2022–23 fit / 2024 holdout gates (+1.5 pts/game, p<0.05) as the build test.
