# docs/arxiv-program/research/2026-09-21/arxiv-deep/0558-hierarchy-and-ranking-in-pairwise-sports.md

## What it is (1-2 sentences)
Deep-read ledger of arXiv:2508.19848v1 (Asztalos, Balázs, Palla, Vicsek 2026) measuring hierarchy (flow hierarchy, global reaching centrality, random-walk hierarchy) and 3-cycle structure in tennis/fencing pairwise-contest networks, and comparing network-based prediction scores against Elo and official rankings. Verdict: ADAPT — not the hierarchy features (don't beat Elo), but the cycle-enrichment diagnostic: compare observed 3-cycle abundance in the NFL win graph against the cycle count implied by GSE's rating-based win probabilities, as a check on model-implied parity and upset frequency.

## Key metrics/methods (formulas where given, else "not specified")
- Hierarchy measures on yearly directed win graphs: flow hierarchy (FH), global reaching centrality from 2-reach (GRC/2RC), random-walk hierarchy (RWH/RWC) — defined verbally/by reference, no closed forms in extract.
- Cycle analysis: 3-cycle density (cycles / all node triads) and cycle-vs-feedforward-loop ratio; cycle *enrichment* = observed 3-cycles vs expected under resampled outcomes from a given ranking score's implied win probabilities.
- Prediction: five scores per player (2RC, RWC, SFS official ranking, recomputed Elo, reversed PageRank) mapped to win probabilities via a fitted score-difference function, fit on trailing years, predict next year. Metrics: fraction of mistakes (FM; 0.5 = random), average squared error (SE; 0.25 = random), average linear error (LE); p=0.5 counted as half a mistake.

## Data sources named
- Men's/women's tennis 1968–2024: 194,996 men's matches, 158,092 women's (Jeff Sackmann public data; Grand Slams, tour events, Davis Cup). Fencing foil/épée/sabre × men/women 2015–2024: 43,571–73,068 bouts per category (Anya Post-Michaelsen data). Elite events only.

## Findings (numbers and facts, not vibes)
- Men's tennis prediction (Table 4): FM — ELO 0.344 (best), 2RC 0.345, RPR 0.345, SFS 0.356, RWC 0.450; SE — ELO 0.213 (best), RPR 0.217, 2RC 0.219, SFS 0.224, RWC 0.245.
- Women's tennis FM: 2RC 0.347, ELO comparable. Fencing: official ranking (SFS) beats Elo on the most accurate measures.
- Structural: real networks show large hierarchy gaps vs Erdős–Rényi nulls for all three measures; vs configuration model, FH and RWH higher, GRC mixed.
- Format effect: elimination (single-elim/DE phase) networks have *lower* hierarchy and *more* 3-cycles than round-robin/pool-phase networks — elimination formats produce more circular win-loss patterns.
- Adversarial notes: the recomputed Elo is not real Elo (elite-only subset) — flattering to the network measures; yearly snapshots ignore within-year form; NFL yearly win graphs are extremely sparse (~256 edges on 32 nodes), so hierarchy measures would be noise-dominated.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Network hierarchy measures ≈ Elo and do not beat it: TRUST-SIGNAL (evidence against adopting network-science ratings as features; GSE's ratings already do this job).
- Cycle-enrichment diagnostic (observed vs rating-implied 3-cycles) as parity check: OTHER (new corpus capability; positive enrichment = ratings overconfident in hierarchy → widen uncertainty).
- Format effect (elimination = more circular outcomes): SCHEME (tournament format shapes upset structure — relevant to playoff/survivor pool contexts; INFERENCE).

## Engine-actionable? (yes/no + one-line what)
Yes — build the per-season 3-cycle enrichment z-score (observed cycles vs 10k simulations from GSE's rating-implied win probabilities on nflverse 2002–2025) as a standing quarterly model diagnostic; adoption gate: |z| > 2 in ≥ 3 of the last 6 seasons.
