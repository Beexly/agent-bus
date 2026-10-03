# arxiv-deep/0410-analyzing-ingame-movements-of-soccer-players.md
## What it is (1-2 sentences)
Gyarmati & Hefeeda (2016, arXiv:1603.05583v1) mine 660,848 sparse movement vectors derived from Opta ball-event data for the 2012/13 La Liga season (542 players) via mini-batch K-means (K=200) clustering, then build per-player cluster-histogram profiles and compute uniqueness (distance to M=5 nearest neighbors) and temporal consistency scores. The headline result is a scouting claim: Rubén Castro (Real Betis, market value €4.5M) sits at cosine distance 0.079 from Cristiano Ronaldo (€100M), i.e., a near-identical movement profile at 4.5% of the price.

## Key metrics/methods (formulas where given, else "not specified")
- Movement vector schema: (x1, y1, x2, y2, T, s, b) — start (x1,y1) at time T, end (x2,y2), speed s = displacement/inter-event interval, ball-possession flag b.
- Extraction: connect consecutive ball events involving the same player into movement vectors (sparse positions only at ball events).
- Clustering: mini-batch K-means, K=200, over all movement vectors.
- Player profile: normalized histogram of cluster assignments (200-dim frequency vector).
- Similarity: cosine distance between profile vectors; nearest neighbors = most similar players.
- Uniqueness: U_i = Σ_{j=1}^{M} d_{ij}, M=5 (d_{ij} = cosine distance to j-th nearest neighbor). Verbatim from file.
- Consistency: C_i^k = (1/N) Σ_t D(c_i^k, c_i^t) — average distance between period k's profile and all other periods' profiles.
- High-speed filter: movements at ≥14 km/h analyzed separately (soccer-industry speed category).

## Data sources named
- Opta event data (proprietary), 2012/13 La Liga season: >300,000 passes, nearly 10,000 shots → 660,848 derived movement vectors, 542 players.
- Market values table (source not named): Cristiano Ronaldo €100M, Rubén Castro €4.5M.

## Findings (numbers and facts, not vibes)
- 660,848 movement vectors; 542 players; mean 1,219 movements/player (max 4,998); mean movement length 19.4 m (max 100 m — flagged as a sparse-sampling artifact, not a sprint).
- K=200 clusters; no sensitivity analysis or cluster-stability check reported.
- Ronaldo→Castro cosine distance = 0.079 (Table 1 scouting example); market values €100M vs €4.5M.
- Top-10 uniqueness table (Table 2): Lionel Messi uniqueness 0.860 (3,809 movements), consistency 0.30 ("high uniqueness and high consistency"); Cristiano Ronaldo uniqueness 0.55, consistency 0.51 ("just an average player" in these terms).
- No formal validation, holdout, or baseline comparison; evaluation is illustrative case studies only.
- Uniqueness conflates versatility with distinctiveness (paper itself notes unique players often play multiple positions/sides).
- Cosine distance on 200-dim histograms is dominated by common clusters; rare-but-distinctive movements are downweighted.
- Core validity threat: speed = displacement/inter-event time over gaps of seconds to minutes is not physical speed; "high-speed movements" rest on this coarse inference.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER — player role-archetype mining from sparse data:** the movement-vector clustering → normalized cluster-histogram profile → cosine similarity pipeline is directly portable to NFL play-by-play/charting data where NGS coordinates are absent (college, historical NFL). Serves the QB-behavioral profiles and player-archetype programs as a no-tracking-case feature source: role-archetype labels feed target-share and yards-after-catch models.
- **TRUST-SIGNAL — draft-prospect / free-agent comp finding:** the Ronaldo→Castro (0.079) example is the template for "similar player" scouting lists — cheap replacements with similar role profiles. UNCERTAIN: the paper never validates that similar-profile players actually substitute for each other; the comp claim is illustrative, not tested.
- **COACHING — consistency profiling:** the C_i^k consistency metric across season halves gives a player-role stability measure; unstable profiles could flag scheme changes or usage shifts mid-season. OTHER: needs the GSE acceptance gate (ARI ≥ 0.5 half-to-half stability) before being trusted.

## Engine-actionable? (yes/no + one-line what)
Yes — ADOPT the action-vector clustering archetype pipeline as a GSE feature source IF half-to-half profile stability reaches ARI ≥ 0.5 AND archetype indicators lift target-share regression out-of-sample R² by ≥ 0.02 on the 2024 season; else reject as sparse-data artifact. Estimated effort: 1 week for a single engineer (nflverse + FTN charting, K≈50).

## References named in file
- Gyarmati, L. & Hefeeda, M. (2016). arXiv:1603.05583v1 — the paper itself.
- Internal: docs/research/2026-09-18-ngs-replacement-spec.md; arXiv:2305.10262 (STRAIN tracking work); GSE 27-family NGS/tracking taxonomy (existing-research map 2026-09-21).
- No other papers cited in the brief.
