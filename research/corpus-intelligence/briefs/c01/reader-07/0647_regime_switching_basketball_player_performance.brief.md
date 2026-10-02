# arxiv-program/research/2026-09-21/arxiv-deep/0647-regime-switching-basketball-player-performance.md
## What it is (1-2 sentences)
Deep-ledger read of Zuccolotto et al. (arXiv:1912.10417) on a three-step pipeline for basketball performance: Markov-switching good/bad regime decomposition, ARIMAX teammate co-presence effects on regime probabilities, and a signed teammate interaction network validated by lineup scoring intensity. Verdict ADAPT — the pipeline transfers to NFL DFS stacking to quantify which on-field player combinations raise or lower each other's fantasy-regime probability.

## Key metrics/methods (formulas where given, else "not specified")
- Shooting intensity φ̃_ij = 1/t_ij; match-adjusted φ_ij = φ̃_ij/φ(m_ij); shot efficiency E_ij = x_ij − p_ij; performance ψ_ij = φ̂_ij·E_ij after Nadaraya–Watson Gaussian-kernel smoothing.
- Regime differences ψ̂_ij,Δ(k) = sgn(ψ̂_ij − ψ̂_i(j−1))·|ψ̂_ij − ψ̂_i(j−1)|^k; two-state Markov switching E(ψ̂_ij,Δ(k)|R_ij=r) = Ψ^r_i, r ∈ {G,B}; EM estimation (R MSwM); filtered/smoothed regime probabilities.
- Ergodic good-regime probability π_iG = (1−π_iBB)/(2−π_iGG−π_iBB); persistence δ_iG = 1/(1−π_iGG), δ_iB = 1/(1−π_iBB).
- Teammate effects via ARIMAX: π_ijG|j = ε_j + Σ_l α_l π_i(j−l)G|j−l + Σ_l γ_l ε_{j−l} + β_ih C_ijh, C_ijh = 1 if teammate h on court at shot j; significant β_ih (p<0.1/0.05) → signed network edges; network metrics: density, reciprocity, eigenvector centrality, signed strength degrees (Barrat et al. 2004).
- Team impact: ISP(η) = (1/2400)Σ_t w_t, scaled to per-40-minutes.

## Data sources named
Web-scraped FIBA play-by-play (www.fiba.basketball.com): 20 games of Iberostar Tenerife, 2016/2017 Basketball Champions League (one match dropped for missing lineup data). R packages MSwM, forecast (auto-ARIMA), igraph. No author code repo linked.

## Findings (numbers and facts, not vibes)
- Regime parameters (k=0.5): Doornekamp Ψ^G=0.1410, Ψ^B=−0.1274, π_GG=0.8288, π_BB=0.8429; Vazquez Ψ^G=0.2671, Ψ^B=−0.3373.
- Unconditional good-regime probabilities 0.41–0.58; regime persistence 3.0–12.3 shots; White persists 11.6–12.3 shots.
- Significant teammate effects: White→Doornekamp +0.0880*, Doornekamp→Vazquez +0.1202*, Vazquez→San Miguel +0.1406*, San Miguel→Vazquez +0.1013*; negatives: Grigonis→Doornekamp −0.0623, Grigonis→Abromaitis −0.0801, San Miguel→Doornekamp −0.0844, White→San Miguel −0.0667.
- Network: density 0.2619; reciprocity 0.3636; Doornekamp & Vazquez most central (eigenvector 1.0).
- Team impact: Doornekamp on court → +5.65 pts/40min; pairs White+Doornekamp +3.33, Doornekamp+Vazquez +12.86, Vazquez+San Miguel +19.10 vs San Miguel alone and +9.54 vs Vazquez alone; triples +0.46 to +8.90 — ALL differences positive, flagged in the ledger as a selection/cherry-picking red flag.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: Markov-switching hot/cold regime decomposition ports to QB per-drive EPA-above-expectation regimes — a formal "streaky vs stable" behavioral profile per QB.
- SCHEME: teammate co-presence dummies map to NFL personnel groupings (WR2 in route tree, backup RB on 3rd down); signed synergy network = statistical basis for DFS stacking and same-game parlay correlation inputs.
- TRUST-SIGNAL: positive-synergy pairs boost pick confidence; key synergistic teammate inactives are a confidence adjustment input.
- OTHER: in-sample-only evidence (no holdout) plus the k-factor amplification artifact (k ≤ 0.6 makes ALL players "significantly switch") are INFERENCE-derived cautions from the ledger — the method needs the proposed k=1 fix and out-of-sample gate before use.

## Engine-actionable? (yes/no + one-line what)
Yes — build the adapted three-step pipeline on nflverse play-by-play (regime-switch QB per-drive EPA, personnel-conditioned regime model, synergy network for DFS stacking constraints), but only accept after the two-test gate: regimes significant for ≥50% of QBs with persistence 2–20 drives, and top-20 positive synergy pairs replicate out-of-sample at ≥+1.5 fantasy pts/game with paired t-test p<0.05.
