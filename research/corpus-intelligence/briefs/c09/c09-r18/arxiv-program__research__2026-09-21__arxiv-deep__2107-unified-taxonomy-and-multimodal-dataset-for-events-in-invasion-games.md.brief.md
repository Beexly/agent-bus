# arxiv-program/research/2026-09-21/arxiv-deep/2107-unified-taxonomy-and-multimodal-dataset-for-events-in-invasion-games.md
## What it is (1-2 sentences)
Research ledger on a unified hierarchical event taxonomy for invasion games (arXiv:2108.11149) plus multimodal gold-standard datasets (EIGD-S soccer, EIGD-H handball); verdict ADAPT for unifying NFL charting sources and building a gold-standard NFL event-label set.
## Key metrics/methods (formulas where given, else "not specified")
- Taxonomy (3 paths, mutually exclusive within path): game-status-changing events (referee decisions vs static-ball actions), ball possession changes, individual ball events (reception → release; intentional pass/shot vs unintentional interference/self-induced).
- Metrics: tIoU (duration events); Nearest Neighbor Matching (NNM, many-to-one, positive bias) vs proposed Sequence Consistent Matching (SCM, penalizes count mismatches); temporal Average Precision (tAP) over tolerance areas; baseline I3D (ResNet-50, Kinetics-400) with per-event NMS/filter/threshold tuned by grid search on F1.
## Data sources named
EIGD-S / EIGD-H at https://github.com/mm4spa/eigd (125 min per sport: 5 matches × 5 sequences × 5 min; video 1280×720 @ 30 fps + audio + positional data @ 20 Hz for handball); PDD-S (4 matches from a private data provider, used only for the provider-quality case study).
## Findings (numbers and facts, not vibes)
- Event counts (Table 1, expert): EIGD-S — possession change 171, reception 923, release 1531, pass 1346 (of which intercepted 83), shot 31; EIGD-H — reception 2268, release 2470, pass 2292, shot 175, goal 86.
- Human agreement high at top hierarchy levels, decreasing with depth; experienced vs inexperienced annotators differ only slightly on the base taxonomy (expert knowledge not required at base level).
- Provider case study (PDD-S): low agreement between precise expert and data-provider annotations for pass/shot/game-status events, attributed to imprecise real-time manual annotation by providers. Numeric Table 2–3 cells did not extract (flagged, not filled).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: principled NFL event taxonomy (whistle/dead-ball vs live; possession changes; snap/handoff/throw/catch/tackle) plus an expert-vs-provider audit protocol — directly relevant to the props-reverse-engineering lane comparing charting sources (FTN/PFF/SIS) and to quantifying label noise for training data (provider disagreement rate → label smoothing).
## Engine-actionable? (yes/no + one-line what)
Yes — audit one charting source against expert re-annotation on ~10 NFL games; gate: accept if ≥5% label disagreement found on a high-leverage event type (pass/rush/TD attribution), and use the taxonomy to label the multimodal corpus feeding video/track models.
