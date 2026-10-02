# arxiv-program/research/2026-09-21/arxiv-deep/0244-datadriven-analysis-for-understanding-team-sports.md
## What it is (1-2 sentences)
A full-paper read of Fujii's 2021 survey (arXiv:2102.07545v2) on data-driven understanding of multi-agent behaviors in invasion team sports (basketball, soccer), organized into interpretable-feature extraction vs behavior-generation/simulation families. Verdict was REJECT: zero novel methods/results, the Koopman/DMD signature family was already empirically rejected in the MOVE-37 lane (DMD momentum p=0.89, AR(1) wins), and the RL content is dominated by paper 0243's concrete treatment.
## Key metrics/methods (formulas where given, else "not specified")
- Survey formalism only: single-agent trajectory P=(p_1,...,p_m), p_i in R^d; multi-agent P_K with p_{K,i} in R^{Kxd}; relation sequences R_i in R^{KxK} with R_{i,k,l}=h(p_{i,k},p_{i,l}). No new equations or theorems.
- Taxonomy: rule-based (social-force, Voronoi control, pass networks), unsupervised (PCA/t-SNE/NMF, DMD/Koopman spectral, Fréchet/DTW trajectory clustering, Hungarian role assignment), supervised (LDA/logistic/SVM on hand-crafted, end-to-end nets, matrix/tensor factors, Poisson point processes), simulation (rule-based, pattern-based RNN/VAE/GAN/GNN, planning-based VAEP/EPV/Voronoi, inverse RL).
- Explicit validation caveat quoted: unsupervised methods "do not use objective variables (labeled data), it is sometimes difficult to validate them quantitatively."
## Data sources named
No new dataset. Survey of published work using multi-agent trajectory data and discrete action sequences from basketball and soccer; open-source soccer simulator [125] and 3v3 basketball simulator [126] cited; no NFL data.
## Findings (numbers and facts, not vibes)
- None of its own: cited results summarized qualitatively without reproduced numbers.
- The DMD/Koopman family (the author's own line) is the same DMD-momentum approach the MOVE-37 lane falsified (p=0.89, AR(1) beats DMD).
- No tracking method discussed that is not already covered by the corpus's NGS tracking taxonomy (27-family, STRAIN).
- Sport/data mismatch: all concrete methods are basketball/soccer tracking; NFL relevance asserted only in passing.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (bibliography only): a citation pointer for the NGS-replacement lane (especially [19] partial-observation policy learning, [104-106] permutation-equivariant GNNs) — a literature-search task, not an implementation.
- TRUST-SIGNAL: negative confirmation — reinforces the in-repo falsification of Koopman/DMD momentum modeling; no further DMD momentum experiments without new justification.
## Engine-actionable? (yes/no + one-line what)
No — REJECT; survey with no novel methods, no equations, no empirical results; keep only as a bibliography pointer for tracking-data representation literature.
