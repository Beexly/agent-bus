# docs/calibration-proposals/2026-09-05-market-anchored-display-probability-v5.2.8.md
## What it is (1-2 sentences)
A 2026-09-05 design proposal (status PROPOSED) arguing that the only honest public win probability is the market-anchored one — each book's quoted price converted to implied probability, averaged across books in the snapshot, normalised to sum to one (proportional de-vig), fixed at publish time in the pick's immutable proof receipt — while the 0-100 `confidence` selection score must never be shown as a percent.
## Key metrics/methods (formulas where given, else "not specified")
- Market-anchored win probability: each book's quoted price per side → implied probability → average across books in snapshot → normalise two-sided to sum to one (proportional de-vig). Formula form not written as a closed equation; arithmetic described in prose.
- De-vig method: PROPORTIONAL (receipt tag `MARKET_FAIR_METHOD_TAG = "proportional_devig_v1"`). NOT Shin-per-book median (`consensusNoVig`) — the Shin swap was measured and withdrawn (section 3c).
- Calibration floors (unchanged): Brier 0.22, ECE 0.05, Murphy reliability 0.05, n 100, eligibility streak 3 consecutive green runs; `expectedFromConfidence` published on /calibration; display calibrator is isotonic regression (PAVA), monotone non-decreasing by construction.
## Data sources named
- Production `provenPath.scoreBakeoff` (2026-09-05): confidence Brier 0.2689 / ECE 0.116; independent trueProb 0.2593 / 0.1009; marketFairProb 0.234 / 0.053 with reliability 0.0046.
- Read-only SQL over settled MONEYLINE picks (isPublished, !isBootstrap, WIN|LOSS): n=150, Brier 0.1692, Murphy REL 0.0050, ECE 0.0552; ECE misses floor by 0.005.
- Evidence refresh 2026-09-13 (n 2,385 confidence rows; n 1,390 rankingP rows; n 622 marketFairProb rows): conf 80+ band — n 235, claimed 0.8663, realized 0.5191, gap -0.3472, SE 0.0326, z = -10.7; confidence-as-probability Brier on 80+ band = 0.3617 (a constant 0.5 scores 0.25). Confidence is non-monotone in outcome: realized win rate peaks at conf 75-79 (0.6146) and falls to 0.4643 by conf 90-94, below the 0.5280 of the lowest band — so isotonic calibration cannot fix it (it can flatten but never invert a curve).
- rankingP (n 1,390): monotone, calibratable; over-confident in upper-middle band (0.68-0.76: claimed 0.7138, realized 0.5828).
- marketFairProb (n 622, bookmakerCount ≥ 2): monotone, every band gap within 0.07 (e.g. 0.90-0.99: n 50, claimed 0.9399, realized 0.8800, Brier 0.1047).
- Shin vs proportional head-to-head (n 621): ALL paired Brier diff +0.002151 (t = 1.798); MONEYLINE diff +0.012808 (t = 1.797) — not significant; the entire moneyline Shin advantage lives in 11 rows with |gap| > 0.1 (degenerate/lopsided books); excluding those 11, Shin is slightly worse (-0.001361, t = -1.125).
- Closing-line moneyline corpus: Brier 0.2106 on n=2,750. 610 settled moneyline picks lack receipts but can carry publish-time market probability from the append-only odds table (WP-28).
- Calibration eligibility cron fires every 6 hours; GREEN reached 12-18 hours after probability source switch.
## Findings (numbers and facts, not vibes)
- Confidence displayed as a probability is measurably wrong: ≥80 confidence tail wins 43.7% while claiming 86.2% (n=167, inverted verdict); on its most confident picks the forecast is worse than saying nothing (Brier 0.3617 vs 0.25 for a constant 0.5).
- Structural reason: confidence is non-monotone in realized outcome, so no monotone calibrator (isotonic/PAVA) can repair it — the fix is to stop treating it as a probability, which is what this proposal does.
- The market-anchored proportional de-vig probability is the only measured number that clears the floors, is monotone, and is exactly what receipts already carry (label verified against `scoring.ts` scoreMoneylinePick and `process-sport.ts` receipt mint).
- Decision recorded: DO NOT swap to Shin-per-book median — paired test fails significance and the advantage comes from 11 pathological books. Receipts must name their method (`proportional_devig_v1`). MODEL_VERSION stays v5.2.7 (no scoring path changes; a gratuitous bump would reset the deployed-version calibration slice to n 0 and defer PROVEN).
- Signal-slate picks (no book behind them) publish NO percentage; `independent_estimate` basis in the API is reserved and NEVER emitted (a test pins it).
- PublicPick API gains `winProbability: { value, basis: "market_devig", books, method } | null`; `pModel` retired and pinned to null; spread/total calibration reported per market, never pooled with moneylines (pooled Brier floor 0.22 unreachable since spread/total cover probabilities sit near 0.25 by construction).
- Deferred: signal-slate confidence rework (needs its own measurement and proposal; confidence 70 PREMIUM threshold unchanged); Shin as committed fair (measured, rejected).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — the core thesis: publish only numbers that are verifiable by the customer (receipt-committed, recomputable by hand); never render confidence as a probability; explicit relabeling of the public calibration claim.
- SCHEME — the calibration ladder itself (floors, eligibility streak, per-market reporting) is the engine's honesty architecture; moneyline vs spread/total market separation by construction of Brier ≈ 0.25.
- OTHER — engine probability hygiene (proportional vs Shin de-vig, isotonic-regression limits, receipt method tagging for like-with-like verification).
## Engine-actionable? (yes/no + one-line what)
Yes — publishes the exact production-verified calibration facts: proportional de-vig beats Shin (paired Brier diff +0.0022, t=1.80, not significant), confidence-as-probability is inverted at the top (80+ band z=-10.7, Brier 0.3617), and rankingP is monotone/calibratable — all directly usable to wire which probability the engine displays and how it reports calibration.
