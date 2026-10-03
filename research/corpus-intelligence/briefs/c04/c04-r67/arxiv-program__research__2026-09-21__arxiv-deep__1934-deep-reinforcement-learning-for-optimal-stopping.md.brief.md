# arxiv-program/research/2026-09-21/arxiv-deep/1934-deep-reinforcement-learning-for-optimal-stopping.md
## What it is (1-2 sentences)
A paper (Fathan & Delage, HEC Montréal, arXiv:2105.08877) framing optimal stopping (when to exercise a Bermudan put) as deep RL and comparing DDQN, C51, and IQN — finding distributional methods (C51/IQN) win on real S&P 500 price paths. Reader verdict is ADOPT, as the first formal machinery in the corpus for bet-timing (when during the week to place a bet as lines move, or when to cash out live).
## Key metrics/methods (formulas where given, else "not specified")
- Risk-neutral GBM discretization: S_t = S_{t−1} e^{(r−σ²/2)Δt + σ√Δt ε}, ε∼N(0,1).
- Optimal stopping as RL: state = price history/time-to-maturity, actions = {exercise, wait}, reward = payout at exercise; EROP (Expected Relative Option Payout for ATM put, horizon T=38 days) and EOR (Expected Option Return vs GBM-calibrated price).
- Algorithms: DDQN, C51 (categorical distributional), IQN; prioritized replay/dueling "degraded the results for IQN and C51 during tests and hence their use was omitted"; custom epsilon-annealing (fast early, decelerating).
- Validation: three disjoint stages — Valid_HP (hyperparameters), Valid_Model (algorithm selection), Test (single final evaluation, strictly future period, partially different stocks). Benchmarks: Rand, First (τ=0), Last (τ=T), binomial tree model.
## Data sources named
- Synthetic: GBM risk-neutral paths for an at-the-money Bermudan put with daily exercise; ground truth from binomial tree.
- Real: 111 S&P 500 stocks, random dates 2014-03-27 → 2019-12-10; Train = 60 stocks × 2014-03-27→2016-03-29 (733 trading days); Valid_HP = same stocks × 2016-03-29→2017-11-10 (183 days); Valid_Model = 51 other stocks × 2014-03-27→2017-11-10; Test = all 111 stocks × 2017-11-11→2019-12-10 (522 days, strictly future).
- "All our data, implementations, and experiments" at the authors' site (link in paper §1).
## Findings (numbers and facts, not vibes)
- Black-Scholes pricing: "IQN successfully identifies nearly optimal prices" vs binomial-tree ground truth.
- S&P 500 exercise: "both C51 and IQN outperform DDQN in the Valid_HP set ... confirmed in the Valid_Model set which points to C51 as the best model."
- Test set (Table 2): best IQN achieves "on average a 2.91% relative option payout compared to exercising on the last day which achieves 2.17%, and the binomial tree model approach that achieves 2.53%."
- EOR: "C51 achieves a 22.0% return on average which is 8% higher than any of the competing classical benchmark."
- Summary claims: "(1) deep RL adapts to high-volatility stochastic environments; (2) C51 and IQN outperform DDQN at higher compute cost; (3) C51 slightly outperforms IQN on real stock data."
- Limitations in file: no transaction costs; real-data test is one 522-day mostly-bull window; EOR edge is vs classical exercise benchmarks, not vs market price; single put-option setting.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Bet-timing as optimal stopping (state = edge vs market, hours to kickoff, line-movement velocity, book spread, bankroll; actions = {bet now, wait}) — INFERENCE from the file's GSE spec; OTHER.
- Live cash-out as the same stopping formulation with in-play win probability as the underlying — INFERENCE from the file's GSE spec; OTHER.
- Three-stage validation protocol (HP/Model/Test, test strictly future) as a protocol upgrade for all GSE backtests — OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — Train C51 stopping agent on 2021–2023 line-movement histories for bet timing (First/Last/Rand/heuristic benchmarks, paper's three-stage protocol); adopt iff it beats the best timing benchmark by ≥1.5pp of CLV per bet on a strictly-future test window with realized ROI no worse than bet-at-open.
