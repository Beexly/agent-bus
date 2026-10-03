# arxiv-program/research/2026-09-21/arxiv-deep/1618-executable-arbitrage-and-market-efficiency-in-prediction-markets.md
## What it is (1-2 sentences)
ADAPT-ledgered deep read of arXiv:2608.00666 measuring whether deterministic payoff identities in Polymarket's negative-risk (multi-outcome) markets produce *executable* (not theoretical) arbitrage — via depth-aware, fee-adjusted edge measurement and actor-level exploitation across settlement vs. converter channels.
## Key metrics/methods (formulas where given, else "not specified")
- Subset identity: Σ_{k∈S} N_k ≡ (|S|−1)·1 + Σ_{j∈Q\S} Y_j (Eq. 1)
- Settlement edges: Δ^settle_Y(t) = 1 − Σ_i a_t(Y_i); Δ^settle_N(t) = (|Q|−1) − Σ_i a_t(N_i) (Eq. 2)
- Converter edge: Δ^{N→Y}_S(t) = (|S|−1) + Σ_{j∈Q\S} b_t(Y_j) − Σ_{k∈S} a_t(N_k) (Eq. 3); reverse edge Δ^{Y→N}_S(t) = Σ_k b_t(N_k) − Σ_{j∈Q\S} a_t(Y_j) − (|S|−1) (Eq. 4, no protocol path)
- Reverse adapter: qΣ_{j∈Q\S}Y_j + (|S|−1)q·1 ≡ qΣ_{i∈S}N_i (Eq. 5)
- Edges measured depth-aware via joint depth-walking across component markets, fee-adjusted with conservative taker assumption; violation episodes = maximal consecutive positive-edge sequences with survival function Ŝ_D(τ)
- Actor-level: conversion bundles (NO inputs matched to CLOB buys within ~5 blocks, YES outputs tracked ~150 blocks, Π^conv = V_out − C_in); settlement baskets (complete within ≤10 min, FIFO)
## Data sources named
Three non-overlapping panels: (i) FPMM regime — 51 outcome sets, 235 binary markets, ~53,000 trades, pool states reconstructed via Polygon RPC; (ii) CLOB actor panel — 32,702 events, 259M trades through 2025-12-31, Goldsky subgraph conversion traces, PolygonScan cross-checks; (iii) Level-2 CLOB order books, hour-stratified, 2026-04-14 to 2026-05-19, replayed event-time; pmxt order-book archive v2, HuggingFace Polymarket_data dataset; no code released
## Findings (numbers and facts, not vibes)
- Profit: ~$1.118M mechanism-linked total — $1.086M converter-enabled (97%), $32,283 settlement-based (excludes a judged-coordinated $381,748 anomaly cluster, 3 addresses, Dec 12 2025)
- Violation asymmetry (CLOB): 2,098 positive YES-side episodes vs. 36 positive NO-side episodes — violations concentrate on the unsupported protocol side
- Persistence: median exact duration 16.15 s (YES, n=253) vs. 7.99 s (NO, n=5); 366/624 (58.7%) episodes window-spanning (≥50 min); FPMM ~40% of episodes persist >50 min, some >1 day
- Settlement baskets: CLOB 5,923 baskets, $28,644 total; FPMM 67 baskets, $3,639 (one actor 76%)
- Converter concentration: top-10 addresses ≈75% of profit; median profit/conversion decayed $1.00 (through Jul 2024) → $0.20 (late 2024–2025) → $0.08 (early 2026) — intensifying competition
- Same-condition YES/NO deviations excluded after 308,416,666-message WebSocket validation found only 20 isolated API-sync inconsistencies
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Payoff-space vs. protocol-executable distinction: replace any naive mid-price-sum bound check with Eqs. 2–4 depth-aware framework: OTHER
- Direction-aware enforcement prior from the 2,098-vs-36 asymmetry — unsupported legs close slowly (FPMM-like, 40% >50 min), both-legs-liquid closes in seconds: TRUST-SIGNAL
- $1.00→$0.20→$0.08 competition-decay curve as the half-life prior for any GSE arb strategy: OTHER
- Basket-completion detector as real-time signal that others are arbing, before GSE's own depth-walk flags it: OTHER
- Predictive extension proposed: model episode *openings* from pre-violation features (one-sided depth depletion, spread widening) to front-run the 16 s median closure: OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — implement the executable-edge monitor (Eqs. 2–4, depth-aware, fee-adjusted, direction-aware) as GSE's standard for multi-outcome market arb monitoring; reject settlement-basket strategies ($32k total says capital lock-up isn't worth it) and treat as measurement infrastructure + competition intelligence, not a strategy source.
