# arxiv-program/research/2026-09-21/arxiv-deep/1736-overinference-weak-signals-underinference-strong-signals.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2109.09871 (Augenblick, Lazarus & Thaler, 2021), which formalizes overinference from weak signals and underinference from strong signals, derives a DGP-agnostic Bayesian test (expected belief movement must equal expected uncertainty reduction), and finds sports betting markets overreact early and underreact late — NBA crossover at end of Q3 — across >5M Betfair transactions in five sports. Verdict ADAPT: port the excess-movement statistic to NFL live odds as a clock-aware in-game mispricing detector.
## Key metrics/methods (formulas where given, else "not specified")
- Perceived signal strength Ŝ = k·S^β, β ∈ (0,1); fitted k=0.88, β=0.76 (Study 1a); overinference when S < S* = k^{1/(1−β)}, underinference above.
- Proposition 2: E[M_{t1,t2}] = E[R_{t1,t2}] for any DGP under Bayesian updating, where M = Σ squared belief changes (movement), R = drop in perceived variance u_t(π) = (1−π_t)π_t (uncertainty reduction). Excess movement = M − R; >0 = overinference, <0 = underinference.
- Empirical: aggregate movement vs uncertainty reduction in 24 time windows per sport (each 1/24 of average game length); simulation: 1M replications of T=27 random-walk game DGP under four updating models.
## Data sources named
Lab: 500 participants each in Studies 1a/1b (bookbag-and-poker-chips); 500 basketball fans (naturalistic NBA); Inpredictable NBA win-prob calculator; Betfair transaction prices 2006–2014, five sports (soccer, basketball, baseball, ice hockey, American football), >5M transactions across ~260k events, first transaction per minute, in-play only, contract closest to 0.5 prior; S&P 500 index options daily, ~20-year span.
## Findings (numbers and facts, not vibes)
- All five sports: movement > uncertainty reduction early; movement drops below uncertainty reduction late — basketball crossover at end of Q3, mirroring the naturalistic experiment; four of five sports stay negative after crossing (hockey returns only in final period). (OTHER: in-game live-betting bias)
- Options: positive excess movement until a few weeks before expiry, then reverses within two weeks of expiry; total movement averaged over a contract is too high. (OTHER: parallel bias in options markets)
- Lab: robust underinference for strong signals (diagnosticity p ≥ 2/3, consistent with prior literature); overinference for weak signals (novel); perceived strength rises monotonically with true strength. (OTHER)
- Limitations from file: prices-as-beliefs joint test; speculative trading can generate excess movement even if individuals are Bayesian; signal strength proxied by time-to-maturity (monotone proxy, microstructure confounds possible); Betfair 2006–2014 market structure is dated; football included but figures emphasize basketball; no out-of-sample trading test. (TRUST-SIGNAL: replicate the sign pattern on NFL data before trading)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Early-over/late-under sign pattern across all five sports: OTHER (live-betting rule: fade Q1–Q2 moves, follow Q4 moves; calibrate the crossover point on NFL data)
- NBA crossover at end of Q3: OTHER (starting prior for NFL crossover location; NFL's discrete scoring may shift it)
- DGP-agnostic test (E[M]=E[R]): OTHER (portable to any NFL live probability stream without a model of the game DGP)
- Lab diagnosticity threshold p ≥ 2/3 for underinference: OTHER (informative prior on which NFL signals count as "strong")
- Improvement idea — condition on leverage (one-possession game minutes) rather than clock time: OTHER (bias likely scales with leverage-weighted signal strength)
- Dated Betfair data, joint price/belief test, basketball-weighted evidence: TRUST-SIGNAL (NFL replication required: excess movement significantly positive Q1–Q2, negative Q4, p < 0.05, plus ≥1.5pp CLV improvement with ≥300 game-quarters, else REJECT)
## Engine-actionable? (yes/no + one-line what)
yes — build an in-game excess-movement monitor on NFL live implied probs (rolling M vs R per clock window) to fade early moves and follow late moves, gated on replicating the sign pattern on NFL in-play data first.
