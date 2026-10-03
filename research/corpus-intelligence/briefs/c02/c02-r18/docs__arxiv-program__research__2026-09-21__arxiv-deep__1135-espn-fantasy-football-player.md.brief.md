# docs/arxiv-program/research/2026-09-21/arxiv-deep/1135-espn-fantasy-football-player.md

## What it is (1-2 sentences)
Deep read (ledger #1135) of arXiv:2111.02859 (Baughman et al., IBM/Disney/ESPN) on large-scale diverse combinatorial optimization for ESPN fantasy football trade packages. Verdict in file: ADAPT — strip the quantum theater (XGB 95.70% beats every quantum model; simulators ran on classical hardware) and keep boom/bust ratios, the value-vs-cost 0-1 knapsack, and positional-importance opportunity costing for GSE's DFS lineup optimizer.

## Key metrics/methods (formulas where given, else "not specified")
- Boom ratio: fraction of games with scoring above the 85th percentile of the position (Eq. 2). Bust ratio: fraction below the 15th percentile (Eq. 3).
- Season-long projection valuation PV = CDF_normal(ESPN per-position mean µ, SD σ; player projection x) (Eq. 4).
- SME decay: v = α1·tier1 + α2·tier2 + α3·tier3 + e^(−weeks/D)·tier4 (Eq. 5, brand/ADP decay).
- Tradability cost pre_pc = mean(position importance, projection ratio at position, projection ratio overall, positional rank) (Eq. 17), normalized to [0,1].
- Team dissimilarity: θ = cos⁻¹(t1·t2 / ‖t1‖‖t2‖) (Eq. 18); sorted descending from 90°.
- Knapsack: maximize Σ norm_pval·x, x ∈ {0,1}, s.t. Σ norm_pcost·x ≤ α·C_opp^max (Eqs. 19–22); α = user risk parameter.
- Parity/pain/impact metrics (Eqs. 23–25); 15 rule-based filters + 4 learned thresholds + 11-layer DNN upside predictor.
- GSE spec in file: add boom/bust descriptors from nflverse 3-season rolling game logs; reformulate DK optimizer as 0-1 knapsack with bust-risk constraint Σ (bust_ratio·x) ≤ τ; contest-adaptive risk α (top-heavy GPP → higher α). Effort ~1 week.

## Data sources named
- 4,733 exemplars from ESPN-rated trades (FEAT sessions); 146 predictors per trade; 24 ESPN/IBM experts; 10 FEAT sessions (~500 ratings each), ratings 1–10 averaged, ≥4 = good trade; train 3,786 / test 946.
- Deployment: 2020 season — 2M trade proposals, 240M insights, 55M interactions; 2021 — 2.5M trades/day; 525→600 K8s pods on OpenShift.
- Proprietary ESPN data; Qiskit quantum simulators (classical emulation); no public code or data.

## Findings (numbers and facts, not vibes)
- Model accuracy: XGB 95.70%; Hybrid QNN CNN-PI 94.30%; QSVM-PI 85.50%; QSVM-ALE 85.50%; VQC-PI 57.3% — classical XGB wins outright. [OTHER: model benchmarking]
- Diversity: Hybrid QNN highest % rank difference (79.96%) vs classical/SME. [OTHER: ensemble diversity]
- Trade quality: 2020 deployment 76.9% high-quality; 2021 (three paradigms + filters) 97.3% — but quality is expert ratings, not league outcomes. [OTHER: human-expert evaluation]
- Per-paradigm 2021 accuracy: quantum-classical 98.2%, classical 96.9%; mean ratings classical 6.24, quantum 6.22, SME 6.11. [OTHER: model comparison]
- Human validation: kappa 70% inter-rater agreement, blinded compute type (A/B/C). [TRUST-SIGNAL: validation rigor]
- Scale: 239M proposals/55M interactions (2020); 2.5M trades/day (2021); 200 req/s at <1s latency. [OTHER: scale proof]
- Limitations noted: quantum ran on classical simulators with 14-feature tiers (21 features took 22 hrs/tier) — no quantum advantage demonstrated; 95.7% XGB accuracy on 4,733 exemplars smells of overfitting to rater idiosyncrasies; no out-of-time validation; personalization weights w1–w4 values not reported.
- Reproducible test gate in file: bust-constrained lineups must match current-optimizer mean within 2% AND improve top-1% tail hit rate by ≥15% relative on a 6-week holdout (2025 DK main slates).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Boom ratio (>85th pct) / bust ratio (<15th pct) as standard player descriptors for ceiling/floor modeling: [OTHER — directly usable in QB/player valuation for DFS]
- Value-vs-cost 0-1 knapsack with bust-risk constraint as the optimizer formulation: [OTHER — DFS lineup construction]
- Contest-adaptive risk parameter α (GPP vs cash-game risk split): [OTHER — contest strategy]
- 97.3% quality claim rests on expert opinion, not outcomes — cautionary note on human-rating benchmarks: [TRUST-SIGNAL]

## Engine-actionable? (yes/no + one-line what)
yes — Add boom/bust ratios as standard player descriptors and extend the DK optimizer to a bust-risk-constrained knapsack with contest-adaptive α, gated on the 6-week holdout test (mean within 2%, top-1% rate +15% relative); reject the quantum ensemble and expert-rating training paradigm.
