# docs/arxiv-program/research/2026-09-21/arxiv-deep/1002-crowdsourced-classification-reject-spammers.md
## What it is (1-2 sentences)
Deep read of arXiv:1710.09901 (Li & Varshney 2017) on optimal crowdsourced classification when workers may skip (reject option) and some are spammers who answer randomly. It derives reliability-weighted voting weights that discount workers who "always answer" (where completing spammers concentrate).
## Key metrics/methods (formulas where given, else "not specified")
- Optimal worker weight (Prop. 1, Cauchy–Schwarz equality): W_w = [(W−M)·μⁿ + (M_A / (2^N (1−m)^N))·δ(n−N)]⁻¹, where W=total workers, M=spammers, μ=E[correctness-given-definitive-answer], m=E[skip probability], n=definitive answers submitted, δ=Dirac delta (second term discounts the all-answers cohort).
- Closed-form P(correct classification) = [1/2 + (1/2)Σ_S (W choose ℚ)(F(ℚ)−F′(ℚ)) + (1/4)Σ_{S′} (W choose ℚ)(F(ℚ)−F′(ℚ))]^N over answer-partition space ℚ.
- Spammers modeled as two types via a Shah & Zhou "double or nothing" payment mechanism: M_A complete ALL microtasks (random guesses), M_0 skip ALL; M_A/M_0 jointly MLE-estimated from counts (W_{N+G}=answered-all, W_0=skipped-all) using gold-standard questions.
- Simulation setup: W=50 workers, N=⌈log₂M⌉ binary microtasks of equal difficulty, G=3 gold questions; skip prob p~U(0,1), correctness ρ~U(x,1) so crowd quality μ ranges 0.5→1.0.
## Data sources named
No real data — pure simulation (Monte Carlo over parameter grid; no real dataset, no MTurk experiment).
## Findings (numbers and facts, not vibes)
- With 14/50 spammers (Fig. 1), the spammer-robust rule beats honest-crowd-optimal weights and simple majority vote across crowd quality μ∈(0.5,1); at μ=0.5 all three rules merge (weights cannot help under pure noise). Exact numbers are chart-read, not tabulated.
- In Fig. 2 (μ=0.75, M_0=M_A varying), the honest-crowd rule W_w=μ^(−n) beats majority at few spammers but degrades sharply as completing-spammers grow — because it upweights large-n workers, i.e., exactly the completing spammers.
- The δ(n−N) term in the optimal weight is the operative spammer defense: it specifically penalizes the "answered everything" cohort.
- Limitations: simulation-only; equiprobable H_0/H_1 and equal-difficulty assumptions; "all N bits must be correct" success criterion is brittle; no comparison to Dawid–Skene EM or GLAD baselines; gold questions can be detected by spammers.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Spammer-robust reliability weighting as a portable ensemble rule (TRUST-SIGNAL)
- Always-answer/low-edge ensemble members = spammer-like, deserve a multiplicative discount (TRUST-SIGNAL)
- Abstention (skip) behavior as a reliability signal: members that abstain when unsure carry higher weight (OTHER)
## Engine-actionable? (yes/no + one-line what)
yes — Adapt as the pick-board ensemble vote-weighting rule: treat each ensemble member as a worker emitting pick (definitive) or skip (abstain), estimate per-member hit-rate-given-pick μ̂ and abstention rate m̂ from the 3,411-pick Neon DB, and discount always-pick/coin-flip members; numeric gate: ≥+2.0 pp hit rate vs baseline on Weeks 4–8 (n≈400+, one-sided binomial p<0.05).
