# arxiv-program/research/2026-09-21/arxiv-deep/1058-probabilistic-match-classification-incentives.md
## What it is (1-2 sentences)
Full read of arXiv 2601.09673v3 (Csató & Gyimesi): a **probabilistic match-classification model** for low-scoring sports — defines each team's gain/loss from offensive play via simulated prize probabilities under W/D/L outcomes, derives an indifference threshold, sorts matches into **six classes** (competitive, unimportant, offensive-incentive, defensive-incentive, collusion-vulnerable, asymmetric) with an **incentive strength κ** (distance from indifference), and shows tournament format changes the class mix. Verdict in file: **ADAPT** — match class is a model input, not a narrative overlay; companion to ledger 1056's attacking-incentive work.

## Key metrics/methods (formulas where given, else "not specified")
- For each team and each result (W/D/L): simulated prize probability P(prize | result).
- Gain from offensive play: G = P(prize | W) − P(prize | D); loss: L = P(prize | D) − P(prize | loss avoided) (per the paper's prize structure).
- Indifference threshold: the (G, L) point where a team is indifferent between attacking and defending.
- Incentive strength κ = distance from indifference (six classes from the two teams' (G, L) positions).
- Simulation: 500 pre-final-round scenarios × 1,000 final-round outcomes; fixed Elo strengths; independent Poisson scores; complete vs incomplete round-robin designs compared on class mix.

## Data sources named
Simulation study only; scenario space built from UEFA-style tournament structures. Code/data not stated in paper.

## Findings (numbers and facts, not vibes)
- Incomplete round robins produce **fewer unimportant matches but more offensive and more defensive/collusion-vulnerable matches** than complete ones (directional result; no hard numeric given in file).
- Collusion-vulnerable fixtures identified where standard form analysis fails (mutually beneficial draws).
- Limitations: static pre-match incentives (no in-match updating); naïve/level-1 behavior assumed (teams maximize own prize probability, no strategic interaction); simplified prizes, fixed Elo, trained on old UEFA formats; six classes are a discretization of a continuous incentive space.
- Verdict: **ADAPT**; numeric gate: on historical final-round group matches, high-κ offensive-class fixtures must show elevated total goals and collusion-vulnerable fixtures anomalous scoreline clustering vs competitive-class matches — if classes don't separate real outcomes, keep taxonomy as content only.
- Improvement experiments in file: (1) dynamic in-play (G, L) recomputation; (2) game-theoretic best-response layer for collusion-vulnerable fixtures; (3) use GSE's calibrated outcome model instead of fixed Elo for prize simulations; success = dynamic match class improves in-play goal-expectancy log-loss and flags ≥1 historically suspicious fixture the static model misses.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: Match-class + κ as pre-match features for goal-expectancy and 1X2 soccer models — condition scoring/outcome probabilities on the probabilistically computed class; pair with ledger 1056's attacking-incentive surfaces as one pipeline.
- OTHER: Integrity overlay — collusion-vulnerable fixture flagging for GSE's market-integrity awareness and content; staking caution on flagged fixtures.

## Engine-actionable? (yes/no + one-line what)
Yes — before each round, simulate prize probabilities under W/D/L per team with GSE's own outcome model, compute (G, L) and κ per match, and feed match class + κ into goal-expectancy/1X2 models, flagging collusion-vulnerable fixtures.
