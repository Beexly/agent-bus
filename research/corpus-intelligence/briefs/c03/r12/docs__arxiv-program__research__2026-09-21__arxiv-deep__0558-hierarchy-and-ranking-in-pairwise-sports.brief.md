# docs/arxiv-program/research/2026-09-21/arxiv-deep/0558-hierarchy-and-ranking-in-pairwise-sports.md
## What it is (1-2 sentences)
A full-paper research ledger (arXiv:2508.19848v1; PDF extract of 2,438 lines read) measuring hierarchy (flow hierarchy, global reaching centrality, random-walk hierarchy) and 3-cycle enrichment in pairwise-contest networks across tennis (353,088 matches, 1968–2024) and fencing (2015–2024); verdict: ADAPT — adopt the cycle-enrichment diagnostic, not the hierarchy measures as features.
## Key metrics/methods (formulas where given, else "not specified")
Three hierarchy measures on yearly directed win graphs (winner→loser): flow hierarchy (FH), global reaching centrality from 2-reach (2RC/GRC), random-walk hierarchy (RWC/RWH) — formulas not stated in closed form in the extract. Cycle analysis: 3-cycle density (cycles / all node triads); cycle-vs-feedforward-loop ratio; cycle enrichment = observed 3-cycles vs expected under resampled outcomes from a ranking score's implied win probabilities. Prediction: five scores per player (2RC, RWC, official federation score SFS, Elo recomputed on elite-only subset, reversed PageRank RPR) mapped to win probability via a fitted score-difference function f(score_A − score_B), parameters fit on trailing years (bookmaker-style walk-forward). Metrics: FM = mean 1[wrong] (0.5 baseline = random; p=0.5 counts half a mistake), SE = mean(p − outcome)² (0.25 = random), LE = average linear error.
## Data sources named
Jeff Sackmann public tennis data (men's Grand Slams/tour events/Davis Cup 1968–2024: 194,996 men's, 158,092 women's matches); Anya Post-Michaelsen fencing database (foil/épée/sabre × men/women, Olympics/Worlds/Grand Prix/World Cups/Zone Championships, 2015–2024; 43,571–73,068 bouts per category). No code released.
## Findings (numbers and facts, not vibes)
- Men's tennis prediction (Table 4): FM — ELO 0.344 (best), 2RC 0.345, RPR 0.345, SFS 0.356, RWC 0.450; SE — ELO 0.213 (best), RPR 0.217, 2RC 0.219, SFS 0.224, RWC 0.245. Network measures match but do not beat (degraded, elite-only) Elo.
- Women's tennis FM: 2RC 0.347, ELO comparable. Fencing: official fencing ranking (SFS) beats Elo on the most accurate measures — official fencing points are more efficient than tennis ranking points.
- Real networks show large hierarchy gaps vs Erdős–Rényi nulls for all three measures; vs configuration model, FH and RWH higher, GRC mixed.
- Elimination-format networks have lower hierarchy and more 3-cycles than round-robin/pool-phase networks (more circular win-loss patterns; pool hierarchies more decisive).
- Key diagnostic idea: cycle enrichment — observed 3-cycles vs the count implied by a rating's win probabilities — diagnoses whether upsets exceed what the ranking predicts.
- Caveats: the "Elo" beaten/tied is recomputed on an elite-only subset (not real Elo); yearly score snapshots ignore within-year form; NFL yearly win graphs are sparse (~256 edges on 32 nodes) so hierarchy measures would be schedule-dominated; no betting-market baseline or CLV/ROI analysis.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Cycle-enrichment diagnostic (observed vs rating-implied 3-cycles) as a quarterly calibration check: TRUST-SIGNAL — positive enrichment = ratings overconfident in hierarchy / understate parity; negative = ratings under-confident.
- Elimination vs pool format cycle finding: OTHER (format-specific, no NFL analogue; playoff single-elimination graphs too sparse to apply).
- Network measures ≈ degraded Elo: OTHER (GSE's ratings already do what 2RC/RPR do; no feature to import).
## Engine-actionable? (yes/no + one-line what)
Yes — build a standing quarterly cycle-enrichment diagnostic: simulate each season's NFL schedule 10k times from GSE rating-implied win probabilities, z-score the observed 3-cycle count against the sim null, and use persistent |z|>2 as a signal to adjust rating uncertainty.
