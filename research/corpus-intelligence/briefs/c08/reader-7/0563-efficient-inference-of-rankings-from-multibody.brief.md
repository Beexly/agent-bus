# docs/arxiv-program/research/2026-09-21/arxiv-deep/0563-efficient-inference-of-rankings-from-multibody.md
## What it is (1-2 sentences)
Derives a Newman-style fast iteration for fitting the Plackett–Luce model to multi-body (multi-entity) comparisons and shows on 9 datasets that modeling the true multi-body structure predicts better than pairwise projections. Portable to NFL division standings (each division-season is an ordered 4-team hyperedge) and to playoff seeding (K=7 ordered hyperedge).

## Key metrics/methods (formulas where given, else "not specified")
- PL: P(ω⃗|π⃗) = ∏_{r=1}^{K−1} π_{ω_r}/Σ_{q=r}^{K} π_{ω_q} (eq. 1); normalization ∏_i π_i = 1
- Newman rearranged iteration (eq. 9): π′_s = [Σ_{K,r<K} Σ_{ω⃗∈Ω_s^{K,r}} z(ω⃗)·(Σ_{i=r+1}^{K}π_{ω_i}/Σ_{i=r}^{K}π_{ω_i})] / [Σ_{K,r} Σ z(ω⃗)·Σ_{v=1}^{r−1} 1/Σ_{i=v}^{K}π_{ω_i}]
- Convergence criterion: A = sqrt((1/N)Σ_s (π_s/(1+π_s) − π′_s/(1+π′_s))²) ≤ 10⁻⁶
- Position-1-breaking PL: P(ω⃗|π⃗) = π_{ω_1}/Σ_{q=1}^{K} π_{ω_q} (eq. 14); pairwise projections pPL (eqs. 16–17)
- Logistic prior P(π⃗) = ∏_i π_i/(1+π_i)² guarantees convergence on disconnected hypergraphs (eqs. 12–13)

## Data sources named
Synthetic hypergraphs (N=1000, M=10k/100k, K∈[2,10]); FIFA World Cup 1930–2022 (N=83, M=364 rounds, Wikipedia); UEFA Champions League 1992–2024 (N=174, M=674); sushi preferences (preflib 00014); AGH course selection (preflib 00009); APA elections 2009 (preflib 00028); Network Science collaborations (OpenAlex 1999–2023). Code+data: github.com/jackyeung99/higher_order_ranking.

## Findings (numbers and facts, not vibes)
- Speed-up (Zermelo → Newman, iterations to convergence, 10⁻⁶): synthetic 9× (103→11) and 15× (169→11); FWC 6× (50→9); UCL 5× (60→11); sushi-10 1.8×; sushi-100 3×; AGH 70× (534→7.6); APA 2.2×; NS 6× (144→24).
- Held-out (20%) log-likelihood: full PL consistently beats pairwise-projected pPL on synthetic and every real dataset except APA 2009 (equal — authors question whether APA is genuinely multi-body). Position-1-breaking PL ≥ its pPL variant everywhere.
- Gap largest where full ranking order is informative (survey data); small for FWC/UCL where most comparisons are pairwise.
- Top-10 (Table 2): FWC — Brazil, Germany, Italy, Argentina, Netherlands, France, Croatia, England, Sweden, Czechoslovakia; UCL — Real Madrid, Bayern, Barcelona, Liverpool, Chelsea, Man City, Juventus, Milan, PSG, Atlético; NS — Vespignani top (senior author on all 28 co-authored papers).
- Limitations (from file): held-out events are random 20%, not time-ordered (temporal leakage inflates both); logistic prior is doing unacknowledged shrinkage; NFL games are strictly pairwise so the PL-vs-pPL finding applies only to standings/seedings, not game outcomes.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: position-1-breaking PL for NFL division-winner modeling — each division-season is a natural ordered 4-team hyperedge; richer variant on playoff seedings (K=7 per conference).
- OTHER: Newman rearranged iteration as a drop-in 5–70× faster BT/PL fitter wherever iterative score fitting is used.

## Engine-actionable? (yes/no + one-line what)
Yes — build NFL division hypergraph (8 divisions × 2002–2025 = 192 ordered 4-team hyperedges), fit position-1-breaking PL with logistic prior to pre-season division odds; adopt for division-winner modeling if it matches market log-loss within 0.02 and beats pairwise BT on top-1 hit rate on 2021–2025 time-ordered test; swap BT/PL fitters to Newman iteration as a pure speed win.
