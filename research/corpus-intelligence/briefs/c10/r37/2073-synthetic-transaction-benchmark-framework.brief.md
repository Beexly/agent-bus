# arxiv-program/research/2026-09-21/arxiv-deep/2073-synthetic-transaction-benchmark-framework.md
## What it is (1-2 sentences)
Karst et al. (WITS 2024 workshop, arXiv:2412.14730): a benchmark paper, not a new generator — a PRISMA systematic review (1,216 → 30 papers) plus a five-category evaluation framework (fidelity / synthesis / efficiency / privacy / graph structure) head-to-head testing CTGAN, DoppelGANger, WGAN, TVAE, and FinDiff (ledger 2065's paper) on 5.2M real + 4.2M simulated transactions; file verdict is ADAPT as the lane's acceptance rubric.
## Key metrics/methods (formulas where given, else "not specified")
- Column-wise fidelity: KS statistic (higher = more similar). Row-wise fidelity: Pearson correlation between column pairs.
- Synthesis: fraction of generated records NOT replicating originals within a 1% margin (Sattarov et al. 2023 method).
- Efficiency: mean training seconds over 30 hyperparameter runs (100k samples → 10k synthetic).
- Privacy: 5th percentile of DCR (median Euclidean distance synthetic→original) and NNDR (nearest/second-nearest distance ratio); higher = lower re-identification risk.
- Graph structure: NetSimile score (Berlingerio et al. 2012), higher = more similar networks.
- Review finding: GANs are 70% of proposed architectures but only 50% of post-2023 top performers — field shifting toward diffusion/VAE.
## Data sources named
(1) Real anonymized bank transactions, one month, 5,202,003 rows (5,201,946 after cleaning), features undisclosed (source/target tokens, amount, transfer details); (2) IBM-simulated public dataset, 4,211,370 rows. Graph embeddings per Abu-El-Haija et al. 2018. Hyperparameter search on 100k-row subset (30 runs), final models on full data. WGAN-GP is 62% of WGAN variants per the review.
## Findings (numbers and facts, not vibes)
- Real data (Table 1): FinDiff column fidelity 0.95429 / row fidelity 0.98524 (beats TVAE by 6.41%/1.18%; beats CTGAN 0.87787/0.95258); synthesis 0.84101 (diffusion copies more; DGAN/WGAN 1.0); DCR 0.00033 (worst privacy) but NNDR 0.98781; efficiency 625s.
- DGAN: DCR 1.81121 (best privacy), synthesis 1.0, column fidelity 0.47808 (worst). CTGAN: fidelity 0.878/0.953, synthesis 0.99998, DCR 0.01968, slowest 2267s (65.3% slower than non-GANs). WGAN: fastest GAN 538s, worst column fidelity 0.24064, graph collapsed to single cluster (NetSimile = NaN on real data — reported, not hidden).
- IBM simulated (Table 2): same ranking at lower absolute fidelity (FinDiff 0.43746/0.95798); privacy scores drop to 0.0 DCR for CTGAN/FinDiff/TVAE.
- All models fail graph replication: real-graph self-similarity 8.026 vs synthetic ~30.
- Verdicts: DGAN for privacy-first sharing; FinDiff/TVAE for augmentation fidelity; CTGAN for balanced general use.
- Leakage notes: "FinDiff wins fidelity" partially circular (framework adapted from Sattarov et al. 2023, FinDiff's own paper); ~16% of FinDiff records within 1% of a real record; no downstream task utility metric (no TSTR).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Five-category (+ TSTR utility as sixth) evaluation harness as mandatory acceptance gate for any synthetic data entering engine training (TRUST-SIGNAL)
- NetSimile graph-structure check: synthetic NFL data must preserve the season matchup graph (who played whom, home/away) (OTHER)
- Diffusion (FinDiff) beats GANs on fidelity but copies ~16% of records — the fidelity/privacy tradeoff quantified (OTHER)
## Engine-actionable? (yes/no + one-line what)
Yes — implement the five-category harness (KS, Pearson, 1%-margin synthesis, DCR/NNDR, NetSimile on the season matchup graph) + TSTR log-loss, run every lane generator through it as the mandatory six-category acceptance rubric before synthetic data enters training.
