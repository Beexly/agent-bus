# docs/arxiv-program/research/2026-09-21/arxiv-deep/1740-per-market-information-leakage-order-flow-skill.md
## What it is (1-2 sentences)
Deep-read ledger of Nechepurenko (arXiv:2605.02287): a comparative methodology paper unifying three April-2026 Polymarket informed-trading detection approaches — a composite statistical screen ($143M anomalous profit over 210k+ wallet–market pairs), an event-level sign-randomization test classifying 3.14% of accounts as persistent "skilled winners" (54,477 accounts, 44% out-of-sample retention), and the Information Leakage Score (ILS) framework for per-market information front-loading — into a two-layer surveillance design (market-level ILS screen → account-level skill classification). Verdict in the file: ADAPT — gives GSE an informed-flow surveillance blueprint for sports markets; replicate sports-only before operationalizing.

## Key metrics/methods (formulas where given, else "not specified")
- Layer 1 (per-market) ILS: front-loading statistic comparing pre-announcement price drift to post-announcement drift (exact estimator in approach [3], summarized not re-derived); paper's combination sketch: ILS flags suspect markets.
- Layer 2 (account-level) sign randomization: per account, permute trade signs (long/short) 10,000 times holding magnitudes/timing fixed; realized P&L vs the 10,000-draw null distribution → skill p-value; accounts above the null = "skilled winners" (persistent directional skill conditional on opportunity selection).
- Insider heuristic: single-event lifecycle + conviction (position size relative to account) + recent account creation — catches the single-event population the skill classifier excludes by design.
- Key methodological point: sign randomization tests persistent directional skill, not insider trading per se; platform-wide pooling across sports/politics/crypto is mechanism-ambiguous without category-conditioned decomposition (the paper's own central critique); the sign-randomization null assumes opportunity selection is skill-independent (acknowledged).

## Data sources named
No new dataset — comparative methodology over three April-2026 approaches' reported numbers: composite screen >210,000 wallet–market pairs ($143M anomalous profit); sign randomization on full Polymarket transaction history 2023–2025 (1.72M accounts, 210,322 markets, $13.76B volume, 10,000 sign randomizations per account); insider heuristic on 1,950 flagged accounts; ILS case: Iran conflict cluster — 18 related markets, >$832M cumulative volume (only 1 of 18 met all ILS pipeline conditions). Code/classifications: unreleased (paper reproduces nothing independently). Category mix: sports 42.05% of markets / 35.37% of volume; politics 7.52% / 35.85%; crypto 36.96% / 18.73%.

## Findings (numbers and facts, not vibes)
- Sign randomization: 54,477 skilled winners (3.14% of 1.72M accounts), 44% out-of-sample retention; 110,703 unskilled losers (6.4%); lucky winners 29.0%; unlucky losers 61.4%; makers 0.1%. Skilled winners + makers (<3.5% of accounts) capture >30% of gains.
- Composite screen: $143M anomalous profit over 210k+ wallet–market pairs.
- Insider heuristic: 1,950 accounts; mean profit $15,012.92, median $2,758.29; imbalance → next price move t=2.54, → outcomes t=8.65.
- ILS Iran case: ILS_dl = +0.113 vs resolution proxy −0.331 (0.444 apart); Iran conflict cluster >$832M volume across 18 markets; only 1/18 met all ILS conditions (pipeline is brittle on real data).
- Sports is 42.05% of markets / 35.37% of volume — directly GSE's domain.
- Limitations: no independent replication; insider heuristic has unknown precision vs any labeled set; ILS needs reliable public-event timestamps (for routine NFL games the "announcement" is the game itself — looser mapping).
- File's GSE gate: on 2024 Polymarket NFL data, ADAPT confirmed if the sports-only replication achieves ≥35% out-of-sample retention of the skilled-winner label AND high-ILS markets show ≥4pp better move→outcome prediction than unflagged markets (≥54% at n ≥ 200); REJECT if retention <25% or ILS flags show no outcome edge.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the skilled-winner watchlist is a trust filter for line moves — weight line moves by whether they originate from persistently skilled accounts; the category-conditioning critique is a trust warning (pooled labels are mechanism-ambiguous across sports/politics/crypto).
- OTHER: market microstructure / informed-flow surveillance capability (GSE tracks line moves today, not who moves them).

## Engine-actionable? (yes/no + one-line what)
yes — build a sports-only surveillance stack on public Polymarket/Kalshi NFL data: per-market ILS (pre-kickoff or pre-news-timestamp drift vs post) → 10,000-draw sign-randomization skill screen → timing-conditioned (pre-game vs in-game specialist) watchlist used to weight line moves; gate on replicating ≥35% retention and ≥4pp outcome edge before operationalizing; ~2–3 weeks per the file's spec.
