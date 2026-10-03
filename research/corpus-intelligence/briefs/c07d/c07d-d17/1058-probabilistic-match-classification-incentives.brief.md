# arxiv-program/research/2026-09-21/arxiv-deep/1058-probabilistic-match-classification-incentives.md
## What it is (1-2 sentences)
Full-text ADAPT verdict on arXiv:2601.09673v3, Csató/Gyimesi, "A probabilistic match classification model for low-scoring sports" (25 pages, full PDF read) — formalizes match classification by incentive structure (six classes + incentive strength κ) from simulated prize probabilities under W/D/L outcomes, and tests via simulation whether tournament format (complete vs incomplete round robin) changes the class mix.

## Key metrics/methods (formulas where given, else "not specified")
- For each team and each possible result (W/D/L): simulated prize probability P(prize | result).
- Gain from offensive play: G = P(prize | W) − P(prize | D); loss: L = P(prize | D) − P(prize | loss avoided) (definitions per the paper's prize structure, as stated in file).
- Indifference threshold: the (G, L) point where a team is indifferent between attacking and defending.
- Six match classes from the two teams' (G, L) positions: competitive, unimportant, offensive-incentive, defensive-incentive, collusion-vulnerable, asymmetric.
- Incentive strength κ = distance from indifference (quantifies how far a match is from indifference).
- Simulation: 500 pre-final-round scenarios × 1,000 final-round outcome simulations; fixed Elo strengths; independent Poisson scores; UEFA-style tournament structures (scenario space); complete vs incomplete round-robin designs compared on class mix.
- No code or data released in the paper (file: "Not stated in the paper").

## Data sources named
- Simulation study only; scenario space built from UEFA-style tournament structures. No external empirical datasets. Fixed Elo strengths and independent Poisson scores are the paper's own simulation setup, not named external sources.

## Findings (numbers and facts, not vibes)
- Directional result (no hard numeric given in the file): incomplete round robins produce FEWER unimportant matches but MORE offensive and MORE defensive/collusion-vulnerable matches than complete ones.
- Core lesson (file): "match class is a model input, not a narrative overlay."
- Limitations (file): static pre-match incentives — no in-match updating (a team leading 2–0 has different incentives than the pre-match class says); naïve/level-1 behavior assumed (teams maximize own prize probability without strategic interaction); simplified prizes, fixed Elo, trained on old UEFA formats; six classes are a discretization of a continuous incentive space.
- Leakage: ex-ante simulation from pre-round standings — no result leakage; prize structure is simplified; real prize gradients are richer.
- GSE overlap (file): none in the tracked corpus; the map has no match-classification or incentive-taxonomy coverage; ledger 1053's stakeless probabilities are binary and ex-ante-schedule-based, while this paper's classification is continuous, prize-based, and scenario-conditioned. Incentive strength κ as a model feature is novel for the corpus. Companion to ledger 1056's attacking-incentive work (2509.13141 attacking-incentive surfaces feed naturally into this classification's gain computation — implement as one pipeline).
- Reproducible test (file): reimplement the (G, L) computation and six-class taxonomy on a UEFA-style scenario set; verify that incomplete round-robin designs yield fewer unimportant but more offensive and defensive/collusion-vulnerable matches than complete round robins (matching the paper's directional results).
- Numeric gate (ADAPT iff): match class predicts scoring behavior — on historical final-round group matches, high-κ offensive-class fixtures must show elevated total goals and collusion-vulnerable fixtures must show anomalous scoreline clustering (e.g., mutually beneficial draws) vs competitive-class matches; if classes don't separate real outcomes, keep the taxonomy as content only.
- Improvement experiments (file): (1) make incentives dynamic — recompute (G, L) in-play as scores evolve; (2) replace level-1 behavior with a game-theoretic best-response layer for collusion-vulnerable fixtures; (3) use GSE's calibrated outcome model instead of fixed Elo for the prize simulations. Success criterion: dynamic match class improves in-play goal-expectancy log-loss and flags at least one historically suspicious fixture the static model misses.
- Replacement chain note: this was a fresh-search replacement for 1311.1131v1 ("Compatible Weighted Proper Scoring Rules"), which was already in done-ids.txt (assigned duplicate, not a REJECT). Selected from 25 fresh arXiv queries (2026-09-21) over sports scheduling, tournament design, fixture congestion; verified clear of done-ids.txt (version-stripped ID 2601.09673 = 0 hits).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME — Match class as a model INPUT for goal expectancy and outcome probabilities: condition GSE's soccer 1X2 and goal-expectancy models on the probabilistically computed class + κ. Incentives change how teams play (offensive-incentive → more attacking → higher totals; defensive-incentive → lower totals) — a scheme-level adjustment layer on top of form analysis. Serves the model pipeline's adjustment layer (currently the gap per the total-signal doctrine).
- COACHING — Coaching decisions are the mechanism: (G, L) positions reflect what a coach rationally wants from the fixture; high-κ offensive fixtures should correlate with aggressive lineup/tactical choices. Connects to coaching-tendency intake for situational aggressiveness (rest-vs-attack in final group rounds, playoff-seeding-locked games).
- TRUST-SIGNAL — Collusion-vulnerable classification is the trust signal: fixtures where standard form analysis FAILS because mutually beneficial scorelines exist get a model flag and a staking caution. Directly useful for market-integrity awareness and content. This is the file's most GSE-distinctive contribution — the only collusion-detection recipe in the corpus.
- OTHER — UNCERTAIN: the paper's static, level-1, fixed-Elo, simplified-prize setup means the published class-mix result (fewer unimportant but more offensive/collusion-vulnerable under incomplete round robins) is a simulation property, not an empirically verified fact — the file's own numeric gate requires classes to separate real outcomes before the taxonomy earns model-input status.
- OTHER — NFL translation: the natural NFL analogues are rest-vs-seed final-week games, tanking-adjacent fixtures, and playoff-scenario games — the same (G, L) machinery applies with playoff-prize probabilities under W/D/L, feeding the engine's situational-adjustment layer.

## Engine-actionable? (yes/no + one-line what)
Yes — compute per-match (G, L) and κ from prize-probability simulations under W/D/L and feed match class + κ into goal-expectancy/1X2 models, flagging collusion-vulnerable fixtures for staking caution, gated on high-κ offensive fixtures showing elevated totals vs competitive class on historical final-round matches.
