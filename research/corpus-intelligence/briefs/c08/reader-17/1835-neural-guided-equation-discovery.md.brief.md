# docs/arxiv-program/research/2026-09-21/arxiv-deep/1835-neural-guided-equation-discovery.md
## What it is (1-2 sentences)
Neural-Guided Equation Discovery (Brugger et al., arXiv 2503.16953): the MGMT system (Multi-Task Grammar-Guided MCTS) ablates design choices for neural-guided symbolic regression — encoders, supervised vs RL training, grammar-rules vs token actions, and risk-seeking/AmEx MCTS variants — producing transferable design rules for any equation-discovery loop. GSE verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
PUCT with c=10; risk-seeking backprop: Q(s,a) ← max over children instead of mean; AmEx-MCTS as second MCTS adaptation; contrastive auxiliary loss λ=0.1 for tabular dataset embeddings (100 rows/dataset). Grammar rules as MCTS actions (not tokens). Caps per Table 3: depth 10, nodes 25, constants 5. Validation: module ablation across 7 encoders (MLP 144,717 / LSTM 82,381 / Bi-LSTM 44,400 / CNN 113,189 / NPT 12,037,627 / Text Transformer 41,546,701 params) × training modes × action spaces × MCTS variants; Nguyen benchmark (500 equations).
## Data sources named
Synthetic equation-discovery tasks generated per grammar; Nguyen benchmark (500 test equations); tabular datasets embedded via contrastive auxiliary task.
## Findings (numbers and facts, not vibes)
Supervised learning outperforms RL in nearly all module combinations (headline negative result for RL-SR). Grammar-rules-as-actions beats tokens ("easy but effective way to introduce domain knowledge"). NPT best on the contrastive tabular-embedding auxiliary task, but simpler LSTMs win end-to-end in MGMT — auxiliary-task wins don't transfer (12M-param NPT loses to 82K-param LSTM in the real loop). Risk-seeking MCTS and AmEx-MCTS both improve over classic MCTS. No comparison against PySR/DSR/LLM-SR (internal ablations only); AmEx-MCTS mechanism table-only in extraction; RL hyperparameters barely discussed.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: three portable rules for GSE-SR (1825) — grammar/operator-whitelist-constrained proposals beat free generation; score island-model program families by best-fitness (risk-seeking), not mean; supervised/imitation guidance over RL for any neural proposer.
- OTHER: "learned dataset embeddings for warm-starts" idea — train a small encoder contrastively on (nflverse table slice → discovered skeleton) pairs to warm-start new metric-discovery tasks (transfer across GSE's metric portfolio).
- OTHER: cautionary — 41.5M-param transformer beat by 82K LSTM end-to-end; prefer small encoders inside the loop.
## Engine-actionable? (yes/no + one-line what)
Yes — add grammar-constrained decoding (operator whitelist, depth/nodes/constants caps) and best-aggregation scoring to GSE-SR; ADOPT gate given: valid-program rate +≥10pp with no OOD-NMSE regression.
