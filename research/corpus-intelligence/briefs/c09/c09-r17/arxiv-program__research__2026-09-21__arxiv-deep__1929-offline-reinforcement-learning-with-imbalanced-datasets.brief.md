# arxiv-program/research/2026-09-21/arxiv-deep/1929-offline-reinforcement-learning-with-imbalanced-datasets.md
## What it is (1-2 sentences)
Full-paper research ledger on Li Jiang et al. (2023) "Offline Reinforcement Learning with Imbalanced Datasets" (arXiv:2307.02752), verdict ADAPT. It proves uniform-penalty CQL degrades under Zipf/power-law imbalanced state coverage and proposes RB-CQL (retrieval-augmented CQL) as the fix; the ledger maps this to GSE's thin-regime weeks (Thanksgiving/Christmas slates, extreme-weather, massive line-move weeks) where GSE's offline RL dataset is imbalanced.
## Key metrics/methods (formulas where given, else "not specified")
- Imbalance parameterized by a power-law exponent over behavior-policy state visitation d^{π_β}(s); D4RL variants graded Easy → Medium → Hard → Hard+.
- Failure mechanism: CQL's penalty is "a constant for every state-action pair," so under imbalance it over-penalizes rare states and amplifies distributional shift.
- RB-CQL: build auxiliary dataset D_aux of related experiences; retrieval similarity Sim(s_ori^i, s_aux^i) via MIPS (exp inner product over Enc(s)) or Euclidean distance; augment CQL Bellman updates with retrieved (s,a,r,s′) tuples.
## Data sources named
D4RL (AntMaze medium, MuJoCo locomotion) with 95% and 97% random-dataset ratios; imbalance levels Easy/Medium/Hard/Hard+. No code stated in paper.
## Findings (numbers and facts, not vibes)
- AntMaze-medium Easy→Hard: RB-CQL robust ("especially from Easy to Medium without any performance drop"); CQL decreases from 60 to 20; TD3+BC decreases from 20 to 0; gap grows with imbalance.
- MuJoCo locomotion: RB-CQL outperforms others at 95% and 97% random dataset ratios.
- Failure boundary: all algorithms including RB-CQL fail on the extremely hard AntMaze Hard+ task.
- Authors' limitations: retrieval "requires huge computation sources from the CPU"; high-dimensional inputs needing embedding networks not studied.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — offline RL decision-policy lane (stake sizing / pick policy under imbalanced slate regimes); qualifies ledger 1923 (CQL).
## Engine-actionable? (yes/no + one-line what)
yes — build D_aux of historical weeks, FAISS-index encoded slate states, train RB-CQL upweighting thin regimes; ADOPT iff 2024 thin-regime-week ROI beats plain CQL by ≥3pp with overall ROI no worse than −1pp.
