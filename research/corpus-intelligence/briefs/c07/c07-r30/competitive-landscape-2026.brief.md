# strategy/competitive-landscape-2026.md
## What it is (1-2 sentences)
A 2026-06 (updated 2026-06-16) teardown of four competitor segments in sports-betting intelligence, grounded in live research with source links, concluding GSE's real moat is latent honesty infrastructure (CLV, de-vig, calibration, edge engine) rather than missing code.

## Key metrics/methods (formulas where given, else "not specified")
Repo functions named (formulas not printed in doc): `removeVig`, `americanToImpliedProbability`, `computeSpreadClv/Total/Moneyline`, `gradePickClv`, `deriveClosingSnapshotFromOdds`, `assessEdge`. Reported market calibration baseline: Brier 0.2111, ECE 0.0180 over 5,281 games (closing line as predictor). Industry facts cited: long-run win rates above ~55–57% at -110 are vanishingly rare; 65%+ advertised claims almost always manipulated/small-sample; sharp-tool pricing ~$20/mo entry to $200–400/mo for real +EV/arb feeds.

## Data sources named
Odds sources: The Odds API ingestion, 100–150+ books referenced via competitors (OddsJam, Outlier, Unabated). Source list at doc end: Action Network, RotoWire, OddsJam, BettingNews, Outlier.bet, Pikkit, PinnacleOddsDropper, sports-ai.dev, ReadWrite, BBB scam alert, Nolan Dalla, 8rain Station, OddsShopper, Caan Berry, OddsPlays.

## Findings (numbers and facts, not vibes)
- Four segments: (1) pick/tout services — model misaligned (paid at purchase, not at win); documented scams: cherry-picked/fabricated records, split-pick scam, always-on premium pick; the real tell is CLV, which they never show. (2) Sharp/+EV tools (OddsJam, Outlier.bet, Unabated) — strategy is self-limiting: books reduce limits or ban consistent +EV bettors; arbitrage isn't risk-free (voided legs); margins tightening ("+EV is dead in 2025" per industry voices); pricing $20–$400/mo; built for $1,000+/week pros. (3) AI prediction sites (BetIdeas, Zcode, Sportsprediction.ai, Leans.ai, SportBot) — market accuracy claims 60–85%; category reviewers: most publish picks with no methodology, no accuracy tracking, no calibration; no CLV, no reliability curve, no audit. (4) Bet trackers (Pikkit BookSync, Action Network BetSync) — verify the user's bets from 30+ books; strong on honesty but grade P/L not CLV.
- Shipped since teardown (2026-06-16): public CLV report (`/clv`, gated like win rate); line shop (`/observatory`, best price/line per side across books, `buildBestLines`, unit-tested); user CLV tracking (`/track`, glass-box ledger: CLV, ROI, own Brier calibration); education moat in progress (consensus → line shop → CLV explainers).
- Priority order: (1) CLV report surface (gated); (2) best-line/book context per pick; (3) honest-education content moat; (4) user CLV-tracking.
- Doctrinal avoids: always-on daily premium pick; pushing +EV/arbitrage as user strategy; unverifiable accuracy/win-rate claims; sharp-terminal clutter.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL (dominant): CLV as the only sharp-accepted skill benchmark; calibration baselines; gated-until-defensible claims; factor trail; loss-complete Vault; Merkle proof-of-record as the honest alternative to NFT proof-of-ownership.
- OTHER: competitive positioning and product strategy; COACHING/QB-BEHAVIOR/OL/SCHEME: none (no football signal).

## Engine-actionable? (yes/no + one-line what)
yes — two concrete calibrations: market closing-line baseline Brier 0.2111 / ECE 0.0180 over 5,281 games is the bar the GSE model's calibration must beat, and `assessEdge` (independent estimators must diverge from book AND agree, founder-gated) is the disciplined +EV/edge protocol to wire when calibration is ready.
