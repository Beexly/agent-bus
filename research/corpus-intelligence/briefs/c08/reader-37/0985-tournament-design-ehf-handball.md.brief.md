# docs/arxiv-program/research/2026-09-21/arxiv-deep/0985-tournament-design-ehf-handball.md
## What it is (1-2 sentences)
Paper ledger (Csató, arXiv:1811.11850v1): simulation study of hybrid tournament formats showing deliberately unbalanced groups (EHF handball CL's D(8+6): 8 top teams in big groups, 6 weaker in small) raise match quality AND outcome uncertainty vs traditional equal groups (D(4×7)) without sacrificing fairness. ADAPT verdict: build a configurable tournament-format simulator swapping the rank model for GSE's calibrated win probabilities — content + DFS slate-design tool.

## Key metrics/methods (formulas where given, else "not specified")
- Match model: p_ij = 1/(1+((i+β)/(j+β))^α), teams pre-ranked 1..28, β=24, α ∈ {3,4,5}; 1,000,000 independent runs per design.
- Metrics: (a) avg pre-tournament rank of Final Four finishers (selection efficiency); (b) expected quality = Σ(rank_i + rank_j) over matches (lower = stronger); (c) expected competitive balance = Σ|rank_i − rank_j| (lower = more uncertain); (d) per-team matches/wins; (e) fairness = expected-prize ratios (5/3/2/1 for 1st–4th) between adjacent ranks.
- Seeding variants: /S seeded (pots by rank), /R random (44×Rnd+(28−i) rerank noise); identification variants: perfect vs erroneous (9th-strongest misidentified as 17th — tanking-incentive check).

## Data sources named
Fully synthetic — no real match data (handball-specific forecasting deliberately avoided); simulator validated at p_ij=0.5 and deterministic extremes; convergence verified at 10^6 runs. No code released.

## Findings (numbers and facts, not vibes)
- Selection efficiency (Table A.1, α=4, seeded): avg rank of Final Four #1: D(8+6)/S 3.138 vs D(4×7)/S 3.332; #2: 4.163 vs 4.540; #3: 4.202 vs 4.602; #4: 5.710 vs 6.401.
- Expected quality: 48.43 vs 55.17 (seeded); expected competitive balance: 10.59 vs 20.11 (seeded) — mismatch severity nearly halved. 200 matches vs 212.
- Fairness: expected-prize ratios ≥ 1 (stronger never disadvantaged on average); single violation at α=5 (team 17 > team 16 in D(8+6)/S), eliminated by random seeding. Erroneous-ID tanking check: misranked 9th team earns LOWER expected prize than 10th — no incentive to tank seeding.
- Under homogeneity, D(8+6) looks unfair ex post: QF reach prob 7/16 (top group) vs 1/12 (bottom group) — 5.25× advantage.
- Robustness: patterns hold across α=3,4,5 and erroneous identification. Proposes a UCL redesign (top groups from Pots 1+2, bottom from Pots 3+4) with concrete 2018/19 re-draw.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER**: format engineering is the supply side of competitive balance — no other corpus paper addresses tournament design; complements the balance-measurement papers (0980–0984). Content angle: "which playoff format gives the best teams the fairest shot" (CFP expansion, NBA play-in, UCL Swiss model); DFS slate design via expected quality + uncertainty maximization.

## Engine-actionable? (yes/no + one-line what)
Yes — build a configurable tournament-format simulator (group/KO specs, seeding, Monte Carlo with convergence diagnostics, metric battery: selection efficiency, quality, uncertainty, fairness, tanking checks) fed by GSE's calibrated win probabilities for format-analysis content and DFS slate design.
