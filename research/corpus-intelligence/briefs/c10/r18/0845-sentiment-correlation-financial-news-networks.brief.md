# arxiv-program/research/2026-09-21/arxiv-deep/0845-sentiment-correlation-financial-news-networks.md
## What it is (1-2 sentences)
Full-text ledger (read 2026-09-21) of Wan et al., arXiv:2011.06430v2 — builds a news co-occurrence network of 87 companies from 7 years of Reuters news, applies Louvain community detection and entity-level sentiment, and runs an event study showing sentiment shocks propagate to network neighbors and coincide with significant abnormal returns/volatility (Mann–Whitney, p<0.01). Verdict: ADAPT — the network-diffusion framing ports to NFL news (a QB injury story moving teammates' and opponents' betting markets).
## Key metrics/methods (formulas where given, else "not specified")
- Louvain modularity (quoted): Q = (1/2m) Σ_{i,j} (e_{ij} − k_i k_j / 2m) δ(C_i, C_j)
- Edge weight e_{ij} = cosine similarity of news-coverage row vectors (company × article counts)
- Volatility proxy (quoted): σ(t) ≈ |log(P(t)/P(t−1))|
- Event study: sentiment events → group sentiment change and CAR vs H0=0 via Mann–Whitney U (red p<0.01, orange 0.01≤p<0.05); post-event volatility vs stationary pre-event distribution
- Entity extraction via NCRF++ NER (char-CNN + word-LSTM + CRF, trained on CoNLL 2003)
## Data sources named
Reuters financial news 2007–2013 (27 quarters); daily Bloomberg prices for the 87 companies; 9 Bloomberg sectors as reference; NER via NCRF++. No code or data links (Gephi for visualization). Reuters/Bloomberg proprietary — method replicable on any news+price feed.
## Findings (numbers and facts, not vibes)
- 145 frequent orgs → 87 companies with Bloomberg tickers in 9 sectors
- 7 Louvain groups vs 9 Bloomberg sectors; median in-sector edge weight 0.0157 vs out-sector 0.00229
- Sentiment propagation: positive relation between company-level sentiment shocks and group sentiment for several groups; asymmetric in Group 1 (financials): negative shocks propagate significantly, positive ones don't; same asymmetry in Groups 3, 5, 6; symmetric in consumer groups 2 and 4
- Market moves: few significant pre-event CAR deviations; post-event CAR diverges — positive sentiment → upward drift, negative → decline; both event types elevate volatility, lingering for days in some groups
- No single headline effect size quoted — results are figure-based significance patterns, not point estimates
- Study is associational, not a trading strategy; no predictive backtest
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- News co-occurrence network with cosine-similarity edges + Louvain communities (7 groups ≈ 9 sectors): OTHER (market/odds intelligence method)
- Sentiment-shock propagation to network neighbors at p<0.01: TRUST-SIGNAL
- Negative-shock propagation asymmetry (financials: negative propagates, positive doesn't): TRUST-SIGNAL (calibrates how to weight negative vs positive NFL news sentiment)
- Entity-level sentiment pipeline (NCRF++ NER + per-article sentiment): OTHER (method)
- Event-study discipline: manual causality check sampling event-day articles to exclude pure market-commentary pieces: TRUST-SIGNAL (guards against circularity in sports news sentiment)
## Engine-actionable? (yes/no + one-line what)
Yes — build an NFL news co-occurrence network (entities = teams/players from ESPN/beat-writer text; Louvain groups ≈ divisions/conferences) with entity-level daily sentiment and run an event study on line moves, gating adoption on whether QB sentiment events move lines beyond official injury-designation dummies (1–2 weeks effort per the ledger).
