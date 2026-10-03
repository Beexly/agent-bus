# docs/arxiv-program/research/2026-09-21/arxiv-deep/1215-nash-bargaining-over-margin-loans-to.md
## What it is (1-2 sentences)
Garivaltis (2019), arXiv:1904.06628 — game-theoretic finance paper deriving the interest rate that emerges from Nash bargaining between a broker and a Kelly gambler over margin loans, and how the negotiated rate affects the gambler's optimal leverage and growth rate. Ledger verdict: REJECT — broker-vs-gambler bargaining with no sports data, no prediction or calibration content, and no deployable sizing beyond standard continuous-time Kelly; it must be replaced (replacement ledger 1360).
## Key metrics/methods (formulas where given, else "not specified")
- Continuous-time Kelly gambler with borrowing: optimal leverage b*(r_L) = (μ − r_L)/σ² given loan rate r_L.
- Nash-bargained outcome: gambler sizes as if borrowing at the broker's call rate, b* = (μ − r)/σ².
- Total non-cooperation rule: r_L* = (3/4)·r + (1/4)·(ν − σ²/2).
- Assumptions: continuous-time GBM market, symmetric Nash bargaining, broker funds at r, no credit constraints beyond the bargained rate, no transaction costs.
## Data sources named
No dataset. A single illustrative numerical example with assumed parameters: volatility σ = 15%, risk-free/broker cost of funds r = 3%, expected arithmetic return ν = 9%. No empirical data of any kind.
## Findings (numbers and facts, not vibes)
- Quoted exactly from the paper's illustrative example (σ = 15%, r = 3%, ν = 9%; outputs of assumed parameters, not measured results): optimal leverage b* = 3.17; negotiated loan rate r_L* = 4.2%; net interest margin 1.2%; gambler growth 12%/year; broker profit 2.6% of client equity/year. [OTHER]
- The only sizing content, b* = (μ − r)/σ², is the standard Merton/continuous-time Kelly fraction, already textbook and already discussed in ledgers 1210/1220. [OTHER]
- The bargaining apparatus contributes nothing to prediction accuracy, calibration, fantasy, or deployable sports stake sizing; GSE has no margin-lending product and no broker-negotiation surface (sportsbooks do not offer negotiable margin loans). [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Continuous-time Kelly fraction b* = (μ − r)/σ² — OTHER (standard, already in ledgers 1210/1220)
- Nash-bargained loan rate example (4.2% rate, 1.2% margin) — OTHER (inapplicable to sportsbooks)
- INFERENCE: encouraging leveraged sports betting would contradict GSE's responsible-play stance.
## Engine-actionable? (yes/no + one-line what)
no — REJECT: the paper is about broker margin-loan pricing, not prediction or sports sizing; nothing to build, and it does not count toward the 750-valuable target (replaced by ledger 1360).
