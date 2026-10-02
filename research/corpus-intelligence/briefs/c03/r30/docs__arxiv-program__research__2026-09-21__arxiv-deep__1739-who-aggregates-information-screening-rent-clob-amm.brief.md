# docs/arxiv-program/research/2026-09-21/arxiv-deep/1739-who-aggregates-information-screening-rent-clob-amm.md
## What it is (1-2 sentences)
Ledger entry for arXiv:2609.20017 (Zang, Andrade, Nakajima 2026): a screening-rent equilibrium model of how CLOB and AMM prediction markets coexist — informed flow routes to the LMSR/AMM while CLOB makers earn "screening rent" carrying the under-priced side to settlement — grounded in Polymarket transaction data (588M trades, $67B volume). Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- No-pickoff screening floor (Lemma 1): two-sided YES quote is pickoff-proof iff YES ask ≥ 1/2 + σ and YES bid ≤ 1/2 − σ; executable premium s_D ≥ s_D^floor ≡ μ_F − μ_D; screening band s_D ∈ [s_D^floor, s̄_D).
- LMSR (Lemma 2): fee-adjusted marginal price P_X = p_X/(1−τ); informed traders buy below posterior → adverse selection for the LP.
- Proposition 1 (Convention-A equilibrium): for 0 < σ < 1/2, unique state-contingent continuation policy; screening binds; routing share α*_F(L) increasing in L.
- Set premium decomposition: premium = [Σ_j mid_j − 1] + Σ_j (ask_j − mid_j); multi-outcome set premium coefficient on log n = +0.060 per log n (p<0.001).
## Data sources named
Akey et al. (2026) full Polymarket record: 588M trades, $67B volume, all categories, account-by-account P&L; authors' transaction-level sample: Polymarket Bitcoin 5-minute up/down contracts — 738,393 trades across 275 markets in ~24 hours, $10.38M notional, 15,134 accounts (makers vs retail by quoting behavior); multi-outcome reconstruction: 16,036 validated multi-outcome events (2–10 outcomes) from component binary books; 8.4M consecutive-trade pairs for staleness correction; fees: 1.8% taker, 0% maker.
## Findings (numbers and facts, not vibes)
- Makers earn at resolution, not on the spread: 91.4% of persistent makers' profit arrives at settlement (<9% pre-settlement); makers +$45.3K vs retail −$66.7K (BTC 5-min sample).
- One-sided edge: ≈+$70K buying vs ≈+$2.6K selling; +$52.4K in [0.50,0.80], +$24.8K in [0.80,1.00]; positions resolve favorably 56.8% of the time.
- Regime flip: pooled mid-band gaps +0.043 (longshot)/−0.037 (favorite); trending markets +0.225/−0.071; flippy markets −0.205/+0.066 — a $0.29 side wins ~7% when trending, ~37% when flippy.
- Set premium: +0.060 per log n (p<0.001), 96% in the committed-markup term; NO-side replication +0.048; placebo reproduces ~half (partly mechanical); book-center lifetime average flat (+0.002, p=0.52) but +0.02 to +0.08 per log n at fixed age/horizon (widest at 7–30 days).
- Limitations: transaction sample is one contract type over ~24h; no AMM in transaction samples; maker/retail classification heuristic; crypto microstructure may not transfer to NFL books.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Venue-aware line lens: CLOB/book quotes inside the signal band are pickoff-exposed (informed flow — follow); persistent screened lines reflect recreational tail demand (fadeable) — new to GSE, which currently treats all line moves symmetrically: OTHER
- Regime-conditional favorite-longshot mispricing (sign flips trending vs flippy): OTHER
- Screening-band classifier distinguishing informed vs screened book moves for line-shopping and CLV weighting: TRUST-SIGNAL
- One-sided edge: buy-pressure moves carry the informed signal, sell-pressure moves more noise (improvement experiment hypothesis): OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — build a screening-band line classifier on multi-book NFL snapshots (inside-band book moves = informative/follow; screened persistent lines = recreational/down-weight in consensus) plus a trending/flippy regime-conditional favorite-longshot adjustment, validated against close-direction prediction.
