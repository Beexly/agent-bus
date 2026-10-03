# docs/predictions/research/misc/prediction-market-ecosystem-triage-2026-08-09.md
## What it is (1-2 sentences)
A 2026-08-09 triage of the prediction-market tooling ecosystem (Oddpool catalog + Awesome-Prediction-Market-Tools harvest) into four GSE buckets — steal the pattern (A), internal research only (B), competitive scan (C), hard hold (D) — under the standing law that GSE builds no public Polymarket product.
## Key metrics/methods (formulas where given, else "not specified")
not specified — catalog triage, no metrics or formulas.
## Data sources named
Oddpool (oddpool.com) catalog paste; Awesome-Prediction-Market-Tools GitHub harvest; tools named: Polyseer, PolyRadar, PolyOracle, Octagon AI, Alphascope, PolyRouter, Dome, PMXT, pykalshi, Probalytics, Marketlens, TREMOR, Verso, Synthesis, Metaforecast, Oddpool, Matchr, Nevua, PolyAlertHub, Aeon, YN Signals, PredictFolio/PredScan/PolyWallet, Hashdive, Dune dashboards, Wethr, DeepNewz, Boring News, PolyNoob, PROPHET newsletter, Sportstensor, BillyBets, oracle3, Simmer, MiroShark, Gamma/Polymarket data, TurbineFi, Predly, plus C-list trading agents and whale-copy bots (Polytrader, PolyCopy, PolyTrack, ArbBets, etc.).
## Findings (numbers and facts, not vibes)
- Bucket A (steal the pattern, highest GSE ROI): multi-agent evidence reports (Polyseer multi-agent research → Bayesian aggregate → cited report + confidence; Octagon fully-cited sources), cross-venue data infra (PolyRouter single-key normalized schema; pykalshi WS/retries/rate limits; Probalytics tick-level books in ClickHouse/Parquet), aggregator/terminal UX (Verso Bloomberg-style terminal; Synthesis cross-market price compare), ops alerts (Aeon scheduled monitor pattern), calibration analytics (alexmccullough Dune price-bucket calibration; Hashdive Smart Scores).
- Bucket B (internal research only, env-gated): oracle3 (Wang Transform + constraint arb + Kelly, research math only), Simmer, MiroShark, Polymarket/Gamma data with INDEPENDENT_POLYMARKET default OFF.
- Bucket D (hard hold, do not productize): execution/autonomous bet agents, arbitrage scanners, copy-trade/whale tips, accuracy theater ("98%"/"89% alert accuracy"), DeFi leverage on PM, fake market generators, insider-trading framing.
- Seven concrete integrity-safe next builds listed: evidence-report shape (Polyseer/Octagon), Aeon-style ops shift alerts, pykalshi-grade resilience, Metaforecast/Verso UX cues, Probalytics export path (`export:settled-picks`), Sportstensor lesson (keep stacking independent estimators), Adjacent News RSS pairing.
- GSE differentiation statement: sports model signals + calibration floors + free spine + honest dark/quiet — not PM execution; almost all competitors claim edge/whale/arb/auto-trade.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Evidence-report shape (cited sources + confidence band + "not PROVEN" footer) as content-engine target. [TRUST-SIGNAL — cited, confidence-banded content with honest proof gating]
- Price-bucket calibration analytics (Dune alexmccullough) and composite skill scores (Hashdive) as diagnostics for confidence separation. [TRUST-SIGNAL — calibration diagnostics]
- Kalshi remains the only exchange-shaped independent soft-failed into ranking; Polymarket stays env-gated internal — exchange-derived independent fair values as a model input, never a product. [OTHER — independent fair-value data policy]
## Engine-actionable? (yes/no + one-line what)
Yes — steal the pattern: add fully-cited evidence-report shape to the content engine and Dune-style price-bucket calibration diagnostics to internal scoring, with no PM product.
