# arxiv-program/research/2026-09-21/arxiv-deep/0614-syncrank-robust-ranking-constrained-ranking-and.md
## What it is (1-2 sentences)
Deep-read ledger of Cucuringu (2015) "Sync-Rank": robust ranking via SO(2) angular synchronization (eigenvector and SDP relaxations), with extensions for constrained ranking, rank aggregation across multiple rating systems, and locally-consistent partial rankings. Verdict: ADAPT the eigenvector-based aggregation (EIG-AGG) for fusing GSE's multiple rating sources into one consensus ranking.

## Key metrics/methods (formulas where given, else "not specified")
- Pairwise rank offsets mapped to angles: Θ_ij from C_ij (Eq. 34); Hermitian matrix H_ij = e^{iΘ_ij} (Eq. 22); ranking from top eigenvector phases, then sorted.
- Upsets: Q^(u) = Σ_{i<j} 1_{sign(C_ij Ĉ_ij)=−1} (lower better); correlation scores Q^(s) = Σ C_ij sign(Ĉ_ij), Q^(w) = Σ C_ij Ĉ_ij (higher better); Kendall correlation vs official standings.
- Rank aggregation: H̄ = Σ_{u=1..k} H^(u) (Eq. 60–61), EIG-AGG/SDP-AGG.
- Phase transition for recovery: 1−η > 1/√n (Eq. 21); ER-graph variant 1−η > √(n⁵/(8m³)).
- Witness/superiority score S_ij from witness counts W_ij (Eq. 36–37, SYNC-SUP variant); adjusted Rank-Centrality (Eq. 15–16).

## Data sources named
EPL 2011–2014 (20 teams, home+away round robin); Halo 2 beta (535 players after filtering, 6,109 edges, Microsoft/Bungie data); NCAA basketball 1985–2014; synthetic n=100 with MUN/ERO noise models. No code or data URLs; all datasets public except Halo 2.

## Findings (numbers and facts, not vibes)
- EPL 2013–14 (C^nw input; upsets / Q^(s)/100 / Q^(w)/1000 / Kendall): SVD 66/9.5/9.5/0.69; LS 44/10.3/10.0/0.87; SER 44/10.0/9.9/0.80; SYNC 44/10.3/10.0/0.87; SYNC-SDP 44/10.3/10.0/0.87; RC 46/10.2/10.0/0.86.
- Halo 2: LS, SYNC, RC achieve lowest upsets and best Q^(s) across all four input constructions.
- NCAA 1985–2014: SYNC-SUP on upsets is "twice as good as any of the other methods"; SVD and SER clearly worst.
- Rank-aggregation synthetics: SDP-AGG best on cardinal MUN, EIG-AGG/SDP-AGG best on cardinal ERO; on ordinal ERO dense graphs, Serial-Rank averaging beats sync methods by 2–3 orders of magnitude at η ≤ 0.2 (documented failure mode).
- All results are in-sample (unsupervised ranking, no held-out prediction).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: rating-fusion method — fuses k rating systems (engine, Elo, market-implied, FPI) into a consensus power ranking; outlier/anchor teams flagged via angular residuals.
- OTHER: evaluation discipline — warns against trusting external correlation metrics (official standings) while optimizing in-sample consistency; applicable to GSE model evaluation.

## Engine-actionable? (yes/no + one-line what)
Yes — implement EIG-AGG weekly fusion of GSE's rating sources (engine win probs, Elo, market-implied, FPI) as a consensus power ranking + disagreement/outlier detector, gated on a walk-forward test (consensus log loss beating best single source by ≥0.002, weekly fusion <30s).
