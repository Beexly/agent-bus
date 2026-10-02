# arxiv-program/research/2026-09-21/arxiv-deep/1783-when-in-doubt-abstain-impact.md
## What it is (1-2 sentences)
Stackelberg game analysis (arXiv:2510.13327) of how an abstention option affects a principal whose classifier is published and agents strategically manipulate features in response; proves abstention never hurts and shows strategic agents force wider abstention bands.
## Key metrics/methods (formulas where given, else "not specified")
- Theorem 3.1: adding the abstention option cannot increase the principal's loss, even with strategic agents.
- Theorem 3.3: optimal threshold under strategic agents T̄* > T* (truthful case) — abstain more when the other side reacts.
- Simulation finding: turning point at abstention cost c = 0.5 — beyond it abstaining costs more than a random guess.
- Noise comparative statics: unconstrained T* rises monotonically with σ; constrained T̄* first dips (moderate noise weakens manipulation) then rises at high σ.
## Data sources named
Simulation-only: 100,000 samples per threshold; x ~ Uniform[−2,2]; thresholds 0.01–2.0 in 0.01 steps; defaults γ = 0.4444 (manipulation cost/benefit), c = 0.3 (abstention cost), σ = 0.5 (label noise); metric ΔH (harm reduction from the abstention option).
## Findings (numbers and facts, not vibes)
- T̄* (strategic) consistently higher than T* (truthful) across the sweep — Theorem 3.3 confirmed numerically; ΔH > 0 throughout.
- File's ledger verdict: ADAPT — the "abstain more when the other side is strategic" theorem is a stress-test lens for GSE's public picks, since books/market react to posted edges; but the paper's manipulators are loan-applicant-style feature manipulators, not bookmakers, so the turning point must be re-estimated on real line data.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: market microstructure / public-card risk — raise the pick gate threshold as post-publication line movement grows; find the empirical k* (line-move distance) where posted-pick edge at the bettable line turns negative.
- TRUST-SIGNAL: abstention-as-hedge discipline for the public card.
## Engine-actionable? (yes/no + one-line what)
Yes — build a market-response stress test (sweep line-move k = 0, 0.5, 1.0, 1.5 against posted picks, elevate gate thresholds, find turning point k*; two-tier publicity option: post full card privately, public only the movement-resilient subset).
