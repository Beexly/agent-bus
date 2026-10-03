# docs/arxiv-program/research/2026-09-21/arxiv-program/index/IMPROVEMENT-LEDGER.md

## What it is (1-2 sentences)
The GSE Improvement Ledger: converts all 1,251 arXiv papers in the research corpus into concrete proposed engine changes, each with a numeric acceptance gate, an owner (Hermes/Mimo/Motif-lab), a doctrine, and a lane. 6,599 lines, organized into buckets INGEST / MODEL / CALIBRATE / DECIDE / INVENT / MONITOR with small/medium/large-effort tiers.

## Key metrics/methods (formulas where given, else "not specified")
- Bucket counts: INGEST 506 / MODEL 531 / CALIBRATE 88 / DECIDE 107 / INVENT 19 / MONITOR 0 (sums to 1,251).
- Owners: Hermes 405, Mimo 494, Motif-lab 352 (sums to 1,251).
- Doctrines: PROPRIETARY_EDGE 881, SITUATIONAL 152, INFRA 118, BASELINE 100 (sums to 1,251).
- Every entry carries a numeric ADOPT/ADAPT/REJECT gate, e.g.: smoothed BOA beats plain BOA by ≥1% margin MAE; fractional-Kelly tuned fraction must show ruin% ≤1% and median wealth ≥110% of flat betting; ENIR ≥15% lower ECE than best of {IsoRegC, temperature scaling}; EnbPI early-season (weeks 1–4) coverage beats ICP by ≥3pp; rankECE split-half |Δ|<0.005; geometric-mean aggregation 77.1% vs 21.3% (from the wisdom-of-crowds entry); DTVW diversity weights need ≥2% CRPS gate; CRPS-trained margin model needs ≥5% relative CRPS improvement with ≤2% MAE degradation.
- Notable recurring gates: log-loss deltas in the 0.002–0.01 range, Brier improvements of 0.002–0.005, ECE/Coverage bands at ±1.5–3pp of nominal.

## Data sources named
- nflverse / nflfastR play-by-play (primary backtest corpus across entries)
- NGS tracking data (10 Hz, 22 players + ball)
- FTN charting data (coverage shells, route concepts)
- The Odds API, oddsPapi, APIVault (line-move / odds history)
- Polymarket / Kalshi (prediction-market microstructure, ILS, dislocation detection)
- Neon picks DB (model v5.2.7, 3,411-pick history referenced for Kelly/robust-sizing tests)
- DK ownership projections (DFS field simulation)
- NOAA/GEFS ensembles (weather calibration)

## Findings (numbers and facts, not vibes)
- 1,251 papers each mapped to an actionable engine change with a pass/fail numeric gate — this is the master wiring backlog, not a reading list.
- Dominant doctrines: 881 of 1,251 entries are PROPRIETARY_EDGE (engine differentiators), only 100 are BASELINE (table stakes).
- Highest-density quick wins cluster in CALIBRATE small-effort (45 entries): ENIR, CQR repair (cqr.ts), EnbPI, ACI/PID conformal controllers, rankECE headline metric, post-sort isotonization, CSR abstention (alpha=0.10/90% intervals), CRPSmod, twCRPS tail calibration.
- DECIDE bucket (107) is heavily sizing/staking: fractional/drawdown-Kelly (2107.08827, verdict ADOPT), KellyBench-style GSEBench harness with a 100%-of-bets staking-contract test, beta-Kelly decomposition, Wasserstein-robust Kelly, Cover-Robbins global stake multiplier.
- INVENT (19) contains the AI-Scientist nightly discovery loop (2408.06292v3): production promotion gate = ≥3 agent-generated signals clearing ΔBrier ≥ 0.002 on the 2025 holdout with byte-identical reproducibility, reviewer-agent/human agreement ≥80% on a 20-idea calibration set.
- World-model/simulator entries converge on shared-state multi-agent architectures (Khora 2608.08600 is in the ledger with gates: +2s position error ≤1.5 yards; counterfactual re-roll outcome-rate shifts within 10% relative of real-play base rates).
- MONITOR bucket is 0 — no paper was classified as monitor-only; everything maps to a build or calibration action.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: The ledger's gate discipline (every change gated on a numeric backtest delta) is the engine-honesty backbone; the skill-vs-luck panel (0.02-over-100-games 2-sigma rule before public "sharper than market" claims) is a public-trust guardrail.
- COACHING: 4th-down/decision-quality entries — Decision Quality Error (DQE) metric with cross-season stability gate r≥0.3; delta-WP indifference frontiers for go/punt/FG; micro-counterfactual 4th-down coach metric (|r|≥0.5 vs season EPA/drive).
- SCHEME: Counterfactual play simulators (Khora-for-plays, GSE-Dream, MARIE, Gamma-World) with concrete error gates — the what-if scheme-analysis stack.
- OTHER: This is the authoritative wiring backlog for the engine; every entry names an owner and a numeric ship gate.

## Engine-actionable? (yes/no + one-line what)
Yes — this IS the engine action list: execute entries in priority order (CALIBRATE small-effort quick wins first), each gated by its own numeric acceptance test.
