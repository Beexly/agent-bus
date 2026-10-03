# arxiv-program/research/2026-09-21/arxiv-deep/0954-players-movements-team-shooting-basketball.md
## What it is (1-2 sentences)
A full-text read ledger for arXiv:1805.02501 (Metulini, 2018), "Players Movements and Team Shooting Performance: a Data Mining approach for Basketball," which segments games into phases by k-means clustering of millisecond time instants on player-dyad distances and links positioning configurations to shooting success. The ledger proposes porting the unsupervised phase-discovery pipeline to NFL tracking data.
## Key metrics/methods (formulas where given, else "not specified")
- k-means over time instants, objects = milliseconds, similarity = vector of pairwise player-dyad distances; k chosen by between-deviance/total-deviance (BD/TD) ratio (elbow: 5→6 increment ≈ 11–12%, 6→7 ≈ 6–7%, so k=6 consistently across five lineups).
- 2-D multidimensional scaling (MDS) of average between-player distances for cluster characterization; profile plots of average dyad distances per cluster.
- Phase labeling by mean x-position of the five players (transition when avg x in [−4,+4] around half court).
- Cluster transition matrix: relative frequencies of cluster switches at consecutive instants, diagonal zeroed, columns sum to 100%.
- Shots associated to the cluster active at the shot moment; FG% per cluster.
## Data sources named
Three Italian Basketball Cup Final Eight games captured by MYagonism (accelerometer microchips, machine-triangulated, Kalman-filtered, millisecond resolution; x,y,z in pixels of 1 cm² + velocity + acceleration) — proprietary, not public. After filtering breaks/timeouts/free throws: CS1 206,332 rows, CS2 232,544 rows, CS3 201,651 rows. Shots coded by watching game video (no play-by-play). No public code.
## Findings (numbers and facts, not vibes)
- k=6 replicated across all five lineups; consistent structure: a couple of small clusters (<10% of observations) with large average distances, 2–3 larger clusters (≥20%) with below-average distances.
- CS1 lineup 1 cluster sizes: C1 13.31%, C2 19.76%, C3 3.40%, C4 29.80%, C5 6.41%, C6 27.31%; C1/C2/C6 offense, C4 defense, C3+C5 transition-heavy (e.g., C6: O 71.52%, TR 10.53%, D 17.95%).
- Clusters switch every ~2 s (309 switches in 8:21 of game time) — micro-configurations, not tactics.
- Shooting (CS1 lineup 1): 15 attempts, 7 made = 46.67%; C6: 8 attempts, 5 made = 62.5%; 14 of 15 shots in offensive clusters. MDS shows player 3 isolated weak side in C6.
- Reader notes the 62.5% "best configuration" claim rests on 15 shots with no test; Wilson interval on 5/8 ≈ (30%, 87%) — anecdotal.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: unsupervised formation-phase discovery from tracking data — per-team "formation-phase fingerprint" (which spacing configurations they live in and the EPA distribution within each) built from pre-snap/snap frames.
- OTHER (engine architecture): the cluster transition matrix is a Markov structure over phases; improvement experiment proposes GMM + HMM over cluster sequence to smooth phases and predict EPA on holdout games.
## Engine-actionable? (yes/no + one-line what)
Yes — run k-means over frames on 22-player dyad distances from NFL tracking data (BD/TD elbow), associate EPA/snap per cluster, build per-team formation-phase fingerprints; numeric gate: on ≥3 games at least one cluster shows mean EPA/snap ≥0.15 above game mean on ≥30 plays with the elbow replicating at same k ±1.
