# arxiv-program/research/2026-09-21/arxiv-deep/0770-visualization-of-unstructured-sports-data-cricket.md
## What it is (1-2 sentences)
An arXiv 2024 (IIT Guwahati) paper applying correspondence analysis (CA) to 1,088,570 ball-by-ball cricket short-text commentaries to mine per-player strength/weakness "rules" (e.g., "Smith attacks leg-stump deliveries") and cluster similar players via t-SNE on rule vectors. Verdict: ADAPT as an NLP template — mine unstructured text (play-by-play descriptions, beat-writer reports) for per-player tendency rules instead of relying only on structured box scores.
## Key metrics/methods (formulas where given, else "not specified")
- Confrontation matrix N (batting-response × bowling-delivery co-occurrence from unigram/bigram features; 19 batting × 12 bowling features).
- Dependency via independence-axiom violation: P(bf ∩ wf) = α·P(bf)·P(wf); α=1 independent, α<1 dependent.
- Correspondence Analysis: SVD of normalized, centered N → principal components F (batting), G (bowling); minimizes Σ squared distance of feature points to reduced subspace.
- Strength rule (batsman): batting feature = attacked; bowling partner = argmax_j ⟨F_attacked, G_j⟩; weakness rule mirrored (beaten). Bowler rules mirrored (strength = opponent beaten).
- t-SNE on 31-dim per-player rule vectors for similar-strength/similar-weakness clustering; contribution biplots for visualization.
## Data sources named
Corpus of 1,088,570 international cricket ball-by-ball commentaries; 264 batsmen + 264 bowlers from 12 countries; data, code, results for 500+ players stated as publicly available (links in paper). Expert ground truth: Sanjay Manjrekar ESPNCricinfo video (2017-06-01).
## Findings (numbers and facts, not vibes)
- Steve Smith CA-derived rules matched domain expert verbatim in substance: strengths = (i) attacks leg-stump deliveries, (ii) attacks slow deliveries; weaknesses = (i) beaten by swinging deliveries, (ii) beaten by move-away deliveries.
- Procrustes train/test biplot stability Δ²₁₂ (lower = better): Joe Root 0.09, Dimuth Karunaratne 0.11, Steve Smith 0.17, Cheteshwar Pujara 0.27, Dean Elgar 0.28, Virat Kohli 0.30, David Warner 0.47, Kane Williamson 0.47.
- t-SNE clusters found: short-pitched-ball attackers (Warner, Collingwood), leg-line attackers (Smith, Kayes, Edwards), beaten-by-away-movement cluster.
- Max 228 rules/player (19×12); 12+12 evaluated, 4 dominant presented.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Tendency-rule mining from text ports to NFL: nflverse play descriptions → per-player strength/weakness rules, e.g. WR weakness-vs-CB strength matchups predicting target-share shortfalls (SCHEME)
- Similar-player clustering on rule vectors → comp-based DFS/prop projections, cheap comps with same tendency profile (OTHER)
- Beat-writer/injury-report text → availability signals (TRUST-SIGNAL)
## Engine-actionable? (yes/no + one-line what)
Yes — build a CA-based tendency-rule miner on nflverse play-by-play descriptions (≥150 routes/season) extracting top-2 strength/weakness rules per player with Procrustes cross-season stability gate (median Δ² ≤ 0.35).
