# arxiv-program/research/2026-09-21/arxiv-deep/1971-ml4c-supervised-v-structure-orientation.md
## What it is (1-2 sentences)
Deep read (ledger completed 2026-09-22, verdict ADAPT) of Microsoft Research's ML4C (arXiv:2110.00637), a *supervised* causal learning method that orients edges in a causal graph by training a binary classifier on whether each unshielded triple (UT: X–Z–Y, X,Y nonadjacent) is a v-structure (X→Z←Y), using "latent vicinity" features; oriented v-structures plus Meek rules yield the CPDAG. Positioned as the orientation layer that fills the gap left by skeleton-producing methods (ledgers 1962–1966) and PCMCI+, which leaves contemporaneous links unoriented.

## Key metrics/methods (formulas where given, else "not specified")
- ML4C-Learner: binary classifier on per-UT feature vectors; label = v-structure/not from ground-truth DAGs. Classified v-structures get oriented; v-structures + Meek rules → CPDAG output.
- Theoretical justification: by Markov completeness, v-structures are invariant across the Markov equivalence class and fully determine the CPDAG given the skeleton; an identifiable UT *is* a v-structure — so one classifier serves both paradigm phases (identifiability determination + orientation classification).
- Featurization ("latent vicinity"): for each UT, features from its vicinity (neighbors in the skeleton) capturing conditional dependencies and "structural entanglement", designed to reveal the asymmetry distinguishing v-structures from non-v-structures.
- Discriminative predicate formalism (Lemmas 4.2/4.3): weak predicates (false ⟹ non-v-structure) and strong predicates (sound and complete); PC and Majority-PC recast as hand-crafted special-case classifiers, also asymptotically correct — ML4C learns a better mechanism than the hand-crafted ones. Asymptotic correctness proved via this formalism.
- Evaluation metrics: SHD (structural Hamming distance) + UT-level F1 vs 4 supervised competitors (Jarfo, D2C, RCC, NCC) and 12 unsupervised (PC, CPC, MPC, GMB, GES, GS, HC, CDS, GNIP, DGNN, BLIP, GRSP).
- Assumptions: discrete data; Markov, faithfulness, causal sufficiency (standard); skeleton available (tolerance to misspecification studied empirically).

## Data sources named
- Training: labeled synthetic discrete datasets generated from known DAGs (UTs labeled v-structure/non-v-structure from ground truth).
- Test: bnlearn benchmark networks (discrete): child (20 nodes / 25 edges), insurance (27 nodes / 52 edges), plus others in Table 1.
- Learnability studies: varied sample sizes (robustness), imperfect skeleton inputs (tolerance), weak vs strong predicate comparisons (reliability).
- Code: https://github.com/microsoft/ML4C (stated). bnlearn benchmarks public. Training synthesis recipe described in paper.
- Cross-referenced corpus items: ledgers 1962–1966 (skeleton / partial-orientation methods), ledger 1967 (quantitative-probing hit rate — orientations must improve it), PCMCI+, existing-research map at ~/workspace/arxiv-sweep/existing-research-map.md (which had nothing on supervised causal learning).

## Findings (numbers and facts, not vibes)
Table 1 (SHD / UT-level F1):
- child (20 nodes/25 edges): ML4C 0 / 1.0 vs PC 22 / .12, CPC 13 / .12, GMB 9 / .74, GES 15 / .47, GS 13 / .59.
- insurance (27 nodes/52 edges): ML4C 5 / .89 vs PC 36 / .39, GMB 19 / .76, GES 34 / .46, GS 28 / .56.
- Paper: "ML4C significantly outperforms all competitors, with the highest average F1-score and consistent performance across all datasets"; rank-by-SHD and rank-by-F1 rows put ML4C first.
- Learnability studies: ML4C-Learner beats individual weak/strong predicates (reliability); robust across sample sizes where CI-test-based methods degrade; tolerates imperfect skeletons.
- SCL theory: supervised causal learning targeting a non-identifiable edge is no better than random guessing (the paper's motivating observation for its two-phase paradigm).
- Headline numbers used good skeletons; the tolerance study reruns with imperfect skeletons for fairness.
- Limitations flagged by the paper itself: sample bias in synthetic training data is an explicitly named failure mode ("could be worse due to sample bias"); many edges remain undirected — the identifiability ceiling the paper itself establishes; bnlearn networks are small, clean, discrete.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER — causal graph wiring lane] ML4C is the purpose-built orientation layer for the engine's causal-discovery program: ledgers 1962–1966 produce skeletons / partial orientations, PCMCI+ orients lagged links by time but leaves contemporaneous links largely unoriented (Markov equivalence); ML4C orients unshielded triples in the learned skeleton. This serves the causal-wiring/calibration program — orientations must earn their keep by improving the quantitative-probing hit rate (ledger 1967), a calibration/sizing-adjacent validation.
- [OTHER — continuous-data extension hypothesis] The ledger's improvement experiment proposes continuous ML4C: replace discrete featurization with vicinity features computed from continuous CI-test statistics (partial correlation profiles, GPDC residuals), training the UT classifier directly on continuous synthetic SEMs — this would let the engine orient the PCMCI+ skeleton natively without a lossy discretization step. Serves the tracking/wiring lane for the engine's continuous signal stack.
- [OTHER — synthetic-training methodology] The paper's explicit "sample bias in training data" failure mode transfers directly to engine training discipline: any supervised orienter trained on synthetic DAGs must deliberately vary the synthetic distribution (edge densities, noise levels) to blunt the bias — the GSE implementation spec already plans 5000 synthetic football-plausible DAGs (layered: game-context → efficiency → scoring → outcome; 20–35 nodes, sparse) for this reason. Serves the engine-building/calibration program.
- [QB-BEHAVIOR / OL — domain-check anchors] The reproducible test requires oriented v-structures to recover known colliders at ≥80%, e.g. offensive EPA → win ← defensive EPA, and pressure → sacks ← coverage quality — these collider structures encode QB-behavior (pressure response) and OL/DL-interaction mechanics the engine should treat as ground-truth orientation anchors. Serves the QB-behavioral-profile and OL-intake programs.

## Engine-actionable? (yes/no + one-line what)
Yes — ADAPT the supervised orienter to orient contemporaneous UTs in the consensus skeleton from ledgers 1962–1966 (train on ~5000 football-plausible synthetic DAGs, ~4 engineer-days), gated on held-out synthetic UT-F1 ≥ 0.8, cross-season orientation agreement ≥ 0.7, ≥80% known-collider recovery, and strictly positive lift on ledger-1967 probe hit rate.
