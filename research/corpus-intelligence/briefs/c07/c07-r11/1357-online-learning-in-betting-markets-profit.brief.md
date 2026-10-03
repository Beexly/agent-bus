# arxiv-program/research/2026-09-21/arxiv-deep/1357-online-learning-in-betting-markets-profit.md
## What it is (1-2 sentences)
A cs.GT paper (Zhu, Soen, Cheung, Xie, 2024) on how a bookmaker should set prices online against sequentially arriving Kelly bettors: it gives a stochastic-approximation algorithm for unfair-odds profit maximization and a Follow-the-Leader algorithm for fair odds with O(√(T log T)) regret, proving profit-maximization and information-elicitation are fundamentally incompatible. Ledger verdict: ADAPT — but the bookmaker-side framing must be inverted since GSE is the bettor, not the house.
## Key metrics/methods (formulas where given, else "not specified")
- SA update (unfair odds): a_{t+1} = a_t + η_t(p̄_t − a_t − G(a_t)); Thm. 4.4: E[u_T] ≥ u_t(a♯,b♯) − 7L_u·T^{−1/2}.
- Fair-odds closed form: a⋆ = √(g·E[p_t]) / (√(g·E[p_t]) + √((1−g)(1−E[p_t]))) (eq. 27); Thm. 5.1: u_t(a_T,b_T) ≥ u_t(a⋆,b⋆) − L·T^{−1/2}·√log(1/δ) w.p. ≥ 1−δ; Cor. 5.2: REGRET(T) = O(√(T log T)).
- Core economic insight: bookmaker profit hinges on deviation between bettor-belief distribution and true beliefs; heavier tails in bettor beliefs ⇒ higher profit.
## Data sources named
- No real-world data — theory plus simulations: 10^5 = 100,000 Kelly bettors with mixture beliefs p_t = sigmoid(s_t), s_t ∼ 0.25·N(2,1) + 0.75·N(−1,1); g = 0.5; η_{t+1} = 300/(t+5000); baseline = risk-balancing heuristic (Levitt 2004).
- Code: https://github.com/haiqingzhu543/Betting-Market-Simulation-2024
## Findings (numbers and facts, not vibes)
- Algorithm 1: regret ≤ 10² over 10^5 iterations under all four initializations; risk-balancing regret larger by more than an order of magnitude and keeps increasing.
- For t ≥ 10⁴ SA price trajectories stay within the innermost profit contour (converge to global maximizer when unique).
- FTL converges to a point between bookmaker belief g=0.5 and crowd's average belief; LMSR dynamics approximately converge to crowd's average belief — "the bookmaker exploits the bias of bettors to maximise the profit."
- With multiple modes on each side of g, Algorithm 1 can get stuck at local maximizers (the "worst local maximizer" guarantee bites).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (market microstructure: book-shading prediction — time GSE releases before anticipated line shading; flag markets where the margin already prices in informed flow)
- OTHER (baseline: fair-odds FTL price as a "market-consensus" probability baseline to compare against engine probabilities)
- OTHER (method inversion: estimate bookmaker-implied belief g from opening→closing line movement as an edge-detection signal)
## Engine-actionable? (yes/no + one-line what)
yes — build a defensive "book-shading monitor" from GSE's pick-release timestamps joined to line-movement data, plus the FTL-consensus price as a baseline; adoption bar: flagged "already shaded" games show ≥2 points worse realized CLV over one NFL season.
