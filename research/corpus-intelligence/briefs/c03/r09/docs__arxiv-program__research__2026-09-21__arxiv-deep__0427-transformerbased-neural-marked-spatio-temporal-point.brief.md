# docs/arxiv-program/research/2026-09-21/arxiv-deep/0427-transformerbased-neural-marked-spatio-temporal-point.md
## What it is (1-2 sentences)
Deep-read ledger of Yeung, Sit & Fujii (2023), *Transformer-Based Neural Marked Spatio Temporal Point Process Model for Football Match Events Analysis* (arXiv:2302.09276v1): models football match events (time, 20-zone location, 5 action classes) jointly as a neural marked spatio-temporal point process with a transformer-encoded 40-event history and dependent t→zone→action forecast heads, and derives a holistic possession-utilization metric (HPUS). Verdict: ADAPT — port the point-process framework to NFL drive sequences and adapt HPUS into a drive-utilization score; fills the map's named gap on Hawkes/self-exciting scoring models.

## Key metrics/methods (formulas where given, else "not specified")
- Joint factorization: f(·) = ∏_i f_t(t_i|H_i)·f_z(z_i|t_i,H_i)·f_m(m_i|t_i,z_i,H_i) (t→z→m order chosen by grid search)
- History encoding: trailing seqlen=40 events → embeddings + positional encoding → transformer encoder → 31-d history vector H_i
- Loss: L(θ) = Σ_i [10 × RMSE_{t_i} + CEL_{z_i} + CEL_{m_i}], trained end-to-end with Adam
- HAS = sqrt(E(Zone|H)·E(Action|Zone,H))/t, t floored at 1 (Eq. 7)
- E(Zone|H) = 0·P(Area_0) + 5·P(Area_1) + 10·P(Area_2) (Eq. 8); E(Action|Zone,H) = 0·P(poss loss) + 5·P(dribble/pass) + 10·P(cross/shot) (Eq. 9)
- HPUS = Σ_i φ(n+1−i)·HAS_i with φ(x) = exp(−0.3(x−1)) (Eqs. 11–12); HPUS++ restricts to possessions ending in attack
- Class weights: weight_i = n_samples / (n_classes × n_samples_in_class_i) (Eq. 13); dribble weight ×1.16 post-hoc tweak

## Data sources named
WyScout Open Access Dataset, 2017/18 season, top five European leagues (Premier League, La Liga, Ligue 1, Serie A, Bundesliga); train/validation Bundesliga-only (73/7 matches), test all five leagues (178 matches); xG for validation from understat.com; code at https://github.com/calvinyeungck/Football-Match-Event-Forecast; hardware 2× AMD EPYC 7F72, 1× RTX A6000

## Findings (numbers and facts, not vibes)
- Validation total loss: NMSTPP 4.40 vs fine-tuned Seq2Event-Transformer 4.48 vs Uni-LSTM 4.51 vs Modified Seq2Event 4.57 vs AR(2)+transition-prob 6.98; NMSTPP best on zone CEL (2.04) and action CEL (1.33), tied best RMSE_t (0.10); 79K params, 49 min train
- Dependent heads beat independent (4.40 vs 4.44); 20-zone features equal raw (x,y) features (RMSE_t 0.10, CEL_action 1.33 both) with better explainability; forecast order affects action CEL by up to 0.11
- HPUS verification (2017/18 Premier League, n=20 teams): correlation with final ranking −0.78 (goals −0.84, xG −0.81); HPUS correlates 0.92 with goals and 0.92 with xG without using goal data
- Limitations: train/val Bundesliga-only vs five-league test (undiscussed domain shift); 0/5/10 HAS weights and 0.3 φ decay are hand-chosen, not tuned; self-attention heatmap "validation" is a non-result; sequences mix both teams' events; dribble ×1.16 tweak post-hoc
- NFL transfer: drives are the natural possession analogue; plays map to (time, field zone, play-type) marks

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Transformer point-process on play sequences = first complete neural excitation template for game-flow momentum, superseding the DMD/AR(1) negative result in the 2026-09-13 discovery lane — OTHER
- Drive-utilization score (DUS) adapted from HPUS as no-score-data drive-efficiency feature for the WP model + content ("most efficient drives that didn't score") — SCHEME, TRUST-SIGNAL
- Zone-discretization (20 zones) losing nothing vs raw coordinates — OTHER
- Dependent forecast heads t→zone→play-type as architecture prior for NFL sequencing — OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — build NFL neural drive point process on nflverse 2018–2025 (trailing 40 plays → transformer → dependent t→zone→play-type heads); adopt if it beats AR(2) by ≥0.10 and LSTM by ≥0.03 total loss on 2024 holdout AND DUS correlates ≥0.70 with team offensive EPA/play; then learn the HAS weights and φ decay by cross-validation rather than using the paper's hand choices.
