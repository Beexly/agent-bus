# arxiv-program/research/2026-09-21/arxiv-deep/1971-ml4c-supervised-v-structure-orientation.md
## What it is (1-2 sentences)
ML4C (arXiv:2110.00637, Microsoft Research): supervised causal learning that orients edges in a causal skeleton by training a binary classifier (ML4C-Learner) to decide whether each Unshielded Triple (UT: X–Z–Y with X,Y nonadjacent) is a v-structure (X→Z←Y), using "latent vicinity" features (neighbors' conditional dependencies + structural entanglement). Since v-structures fully determine the CPDAG given the skeleton (Markov completeness), one classifier serves both identifiability-determination and orientation; v-structures + Meek rules → oriented CPDAG.

## Key metrics/methods (formulas where given, else "not specified")
- UT definition, v-structure, Markov equivalence (same skeleton + same v-structures ⟺ equivalent)
- Discriminative predicate formalism (Lemmas 4.2/4.3): weak predicates (false ⟹ non-v-structure) vs strong predicates (sound and complete); PC and Majority-PC recast as hand-crafted special-case classifiers, also asymptotically correct — ML4C learns a better mechanism
- Two-phase SCL paradigm: (1) determine identifiability; (2) classify orientation — an identifiable UT IS a v-structure, so one classifier does both
- Asymptotic correctness proved via discriminative predicates (proof sketch in paper)
- Assumptions: discrete data; Markov, faithfulness, causal sufficiency (standard); skeleton available (tolerance to misspecification studied)
- Metrics: Structural Hamming Distance (SHD) + UT-level F1, vs 4 supervised competitors (Jarfo, D2C, RCC, NCC) and 12 unsupervised (PC, CPC, MPC, GMB, GES, GS, HC, CDS, GNIP, DGNN, BLIP, GRSP)

## Data sources named
Training: synthetic discrete datasets generated from known DAGs (UTs labeled v-structure/non-v-structure from ground truth). Test: bnlearn benchmark networks (discrete): child (20 nodes/25 edges), insurance (27/52), plus others in Table 1. Code: https://github.com/microsoft/ML4C (stated).

## Findings (numbers and facts, not vibes)
- child (20/25) — SHD / UT-level F1: ML4C 0 / 1.0 vs PC 22 / .12, CPC 13 / .12, GMB 9 / .74, GES 15 / .47, GS 13 / .59
- insurance (27/52): ML4C 5 / .89 vs PC 36 / .39, GMB 19 / .76, GES 34 / .46, GS 28 / .56
- "ML4C significantly outperforms all competitors, with the highest average F1-score and consistent performance across all datasets"; rank-by-SHD and rank-by-F1 put ML4C first
- Learnability: ML4C-Learner beats individual weak/strong predicates (reliability); robust across sample sizes where CI-test-based methods degrade; tolerates imperfect skeletons
- Limitations: discrete data only (sports indicators are continuous — discretization loses information; v-structure theory stated for discrete case); supervised = needs training DAGs, transfer depends on synthetic distribution matching reality ("sample bias" flagged as failure mode); skeleton errors propagate (headline numbers use good skeletons); only orients what v-structures + Meek rules can reach — many edges stay undirected (honest identifiability ceiling)

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the orientation layer — ledgers 1962–1966 produce skeletons / partial orientations; PCMCI+ orients lagged links by time but leaves contemporaneous links largely unoriented (Markov equivalence); ML4C is purpose-built for exactly that gap (orient UTs in the learned skeleton).
- COACHING (INFERENCE): oriented contemporaneous colliders (e.g., offensive EPA → win ← defensive EPA; pressure → sacks ← coverage quality) attribute which levers actually drive outcomes vs which are confounded — INFERENCE that this could rank coaching-actionable levers, not stated in the paper.
- TRUST-SIGNAL: edges the orienter leaves undirected stay undirected — an honest identifiability ceiling is itself a trust signal for the causal graphs shown internally.

## Engine-actionable? (yes/no + one-line what)
yes — train a football-plausible-DAG synthesizer (5000 synthetic discrete DAGs, 20–35 nodes, layered game-context → efficiency → scoring → outcome), train ML4C-Learner on UT labels, orient the consensus skeleton from ledgers 1962–1966 (team-season indicators discretized to tertiles); gate on held-out synthetic UT-F1 ≥ 0.8 AND cross-season orientation agreement ≥ 0.7 AND ≥80% of hand-labeled known colliders recovered AND strictly better quantitative-probing hit rate (ledger 1967) vs the unoriented skeleton.
