# docs/arxiv-program/research/2026-09-21/arxiv-deep/1352-anatomy-of-decentralized-prediction-market.md
## What it is (1-2 sentences)
Philipp D. Dubach (arXiv:2604.24366v2, 2026): a pre-registered, tick-level cross-sectional study of Polymarket limit-order-book microstructure, joining 30.29 billion order-book events to 255.43 million on-chain trades across 600 pre-registered markets — documenting a longshot spread premium, uniform-grid depth, category-conditional spreads, and a hard measurement finding that feed-inferred trade direction agrees with on-chain truth only ~59%. Ledger verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Equity-microstructure measures ported to prediction markets: quoted/effective/realized half-spreads, Glosten–Harris spread decomposition (S^(eff)_(1/2) = c + φ), Kyle's λ, Amihud, Roll, Abdi-Ranaldo; maker Herfindahl; wash-share lower bound; depth-vs-time-to-close regression.
- Trade direction inferred from the feed via the STRICT algorithm (matching resting-size decrements to buckets), validated against on-chain aggressor sign from makerAssetId/takerAssetId.
- Pre-registration: selection rule, seed, and categorization committed with a SHA-256 hash before analysis; market-clustered bootstrap CIs; 60-second-grid sensitivity tests (1–300 s).
## Data sources named
Off-chain archive: 30,287,264,368 WebSocket order-book events (price_change 99.2%, book_snapshot 0.8%) over 52 days (2026-02-21–2026-04-15), 623.8 GB, 385,198 distinct markets; on-chain scrape: 255,425,405 OrderFilled events from the CTF Exchange V1 contract, 2026-02-28–2026-03-27; panel: 600 pre-registered markets (top-100 by USDC volume $4.56M–$96.0M + random-500 with ≥100 trades; Crypto 58%, Sports 24% = 142 markets). Replication package: https://github.com/philippdubach/polymarket-microstructure, archived at Zenodo DOI 10.5281/zenodo.19811426.
## Findings (numbers and facts, not vibes)
- Longshot spread premium (SF1): median quoted half-spread ~400 bps in mid probability deciles, 650–900 bps below 0.10 probability — an order of magnitude wider than racetrack longshot premia, read as an inventory-risk constraint. (TRUST-SIGNAL — wide spread = thin confidence, not mispricing, for low-probability prices)
- Depth profile (SF2): median top-of-book share 0.136 vs 0.10 uniform null; median KL from uniform 0.087 vs 2.30 for a fully top-heavy book — depth is layered, not top-heavy; only 9% of markets are top-heavy (L1 > 0.5). (OTHER — execution sizing on these venues)
- Maker concentration (SF4): median maker HHI 0.031 (~32 effective makers); p90 0.119; max 0.40. (OTHER — venue liquidity structure)
- Category effective half-spreads (SF5, medians): Sports 0.0075, Geopolitics 0.0001, Other −0.0004, Crypto −0.0393 prob pp (wide within-category IQRs). (TRUST-SIGNAL — sports prices carry real trading cost)
- Wash share (SF7, lower bound by construction): median self-counterparty share 0.97%, p99 10.6%, max 22.2%. (OTHER — market-quality filter)
- Depth regression (SF8): log duration +0.222 (SE 0.073), log p(1−p) −1.02 (SE 0.180), log volume +0.41 (SE 0.046); time-to-close coefficient +0.008 (t = 0.08) — no residual effect. (OTHER — depth dynamics)
- Direction-inference failure: feed-inferred direction agrees with on-chain ground truth only ~59% (volume-weighted 0.592, 95% CI [0.542, 0.659]; panel mean 0.615, CI [0.579, 0.653]) vs ~80% Lee-Ready on equities. (TRUST-SIGNAL — feed-only microstructure measures on Polymarket are direction-blind; source direction from on-chain OrderFilled events only)
- Instability: effective half-spread sign-flips on 67%/50% of comparable markets across two windows; Kyle's λ on 60%/43%. (TRUST-SIGNAL — microstructure measures are window-fragile)
- Glosten–Harris on top-100 with on-chain signs: median effective half-spread ≈ −0.0003 prob pp — essentially zero systematic spread. (TRUST-SIGNAL — top sports/crypto markets are competitively priced)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Longshot spread premium → bias-aware reading of low-probability Polymarket/Kalshi sports prices: weight them lower in GSE signal fusion when spreads are wide. (TRUST-SIGNAL)
- Direction-inference failure → methodological guardrail: any GSE microstructure measure on Polymarket must source direction from on-chain events, never the feed. (TRUST-SIGNAL)
- Depth-profile and wash-share statistics → limit-order execution sizing and venue-quality filtering. (OTHER)
- No QB-BEHAVIOR, COACHING, OL, or SCHEME content in this file.
## Engine-actionable? (yes/no + one-line what)
yes — Replicate the eight stylized facts on sports-only (NFL/CFB) markets, build a per-sport longshot-spread-premium curve to discount low-probability market prices in signal fusion, use depth profiles for limit-order sizing, adopt the wash-share lower-bound detector as a market-quality filter, and run a Polymarket-vs-Pinnacle Hasbrouck information-share test to set source weights (per ledger §11–14).
