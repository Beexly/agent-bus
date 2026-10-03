# arxiv-program/research/2026-09-21/arxiv-deep/1102-bayesian-framework-analyzing-alleged-cheating.md
## What it is (1-2 sentences)
Deep-read ledger of Boonstra & Meester 2409.08172 (a Bayesian competing-hypotheses likelihood-ratio framework for testing alleged cheating via hidden signaling codes). Verdict: ADAPT — the LR machine is directly reusable as GSE's integrity/anomaly-monitoring detector (e.g., line movement, referee anomalies).
## Key metrics/methods (formulas where given, else "not specified")
- Likelihood ratio LR = P(observed signal sequence | cheating model with signal probability p) / P(same sequence | honest base-rate model); update prior odds to posterior odds via Bayes factor
- Assumptions: trials conditionally independent given the hypothesis; signaling probability p known/estimable; per-episode binary cheating indicator
## Data sources named
- Publicly reported play records (exact URLs not recorded); bridge bidding-code case: n=85, m=83, h=45, p=0.9; Astros trash-can case: n=267, m=201, b=85, p=0.8; additional Astros series vs Minnesota, Toronto, White Sox
## Findings (numbers and facts, not vibes)
- Bridge case LR ≈ 4 × 10^19; Astros case LR ≈ 3.4 × 10^30; Astros vs Minnesota order 10^9; vs Toronto order 10^23; vs White Sox order 10^12
- Limitations per the file: retrospective selection bias (scandals selected because suspicion existed; no multiple-comparison control); results extremely sensitive to assumed p; trials treated as independent though game contexts have dependence; no code/data released
- Proposed reproducible test: 2024 NFL opening-to-closing line moves from GSE's odds data, H0 = symmetric random walk, H1 = informed-money drift with p=0.65, tested on 2025 weeks 1–3 vs a z-score>3 baseline
- Acceptance gate in the file: ADOPT if the LR detector catches ≥ as many labeled anomalous games as the z-score baseline with ≤ 1/2 the false-positive rate
- Improvement experiment: extend to a hierarchical model over referees/crews with partial pooling of p and the honest baseline
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING (indirect: referee/crew anomaly detection overlaps with coaching-tendency baselines — an "honest H0" baseline per crew); OTHER (market-integrity anomaly detection for line moves and odds). No QB behavior, OL, trust-signal, or scheme content.
## Engine-actionable? (yes/no + one-line what)
Yes — build a rolling anomaly monitor over line-movement and referee-flag streams computing LR/posterior odds per game with alert thresholds calibrated on clean seasons, adopted only if it beats a z-score baseline on equal detection rate at half the false-positive rate.
