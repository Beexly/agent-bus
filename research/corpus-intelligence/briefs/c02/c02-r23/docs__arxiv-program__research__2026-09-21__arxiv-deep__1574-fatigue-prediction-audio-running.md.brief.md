# docs/arxiv-program/research/2026-09-21/arxiv-deep/1574-fatigue-prediction-audio-running.md
## What it is (1-2 sentences)
An arXiv paper (arXiv:2205.04343, Univ. of Augsburg / Univ. Hospital Tübingen, 2022) attempting to predict self-reported running fatigue (Borg RPE 6–20) from smartphone armband audio in outdoor conditions. Ledger verdict: REJECT — body-worn audio modality GSE cannot obtain, subject-dependent splits inflate the headline result, and the signal is weak (CCC 0.287) even under the inflated protocol.
## Key metrics/methods (formulas where given, else "not specified")
- Model: CNN14 (Kong et al., VGG-style: 6×2 conv blocks, 3×3 kernels, max-pool, dropout 0.2, temporal mean+max pooling, 2 linear layers) on 30 s log-Mel spectrograms (64 bins, 32 ms window, 10 ms hop). Two variants: random init vs AudioSet-pretrained weights.
- Loss: concordance correlation coefficient (CCC) between predicted and reported RPE (standard for self-reported auditory regression). Metrics: MAE, CCC.
- Training: 50 epochs, batch 24, SGD lr 0.001 + Nesterov 0.9 + weight decay 0.0001; best epoch on dev.
- Assumptions (stated): RPE constant over ±15 s windows around each spoken answer; fatigue carriers are footstep energy (0–100 Hz bursts) and breathing energy (~2000 Hz); subject-dependent splits acceptable (the ledger disputes this).
## Data sources named
KIRun dataset (new, not released): 48 runners (21M/27F, ages 21–60), 185 sessions (1–5 per subject, ~45 min each) across Germany; modalities: audio (smartphone on armband, 16 kHz/16-bit stereo→mono, 5 phone models), heart rate, knee/foot biomechanical sensors — only audio analyzed. Labels: spoken RPE (6–20), wellbeing (−5–5), surface, elicited every 3–5 min via app; 15 h labeled audio from 133 h raw. Ethics approved (Univ. Hospital Tübingen), registered DRKS00025380. Splits: 56/23/21% train/dev/test, subject-DEPENDENT. External IMU reference cited: Opdebeeck et al. 2018, MAE 2.03.
## Findings (numbers and facts, not vibes)
- CNN14-pretrained: MAE 2.35, CCC 0.287; CNN14-random: MAE 3.48, CCC 0.208. [OTHER]
- Subject-dependent train/dev/test splits: sessions from the same runner appear in train and test, letting the model learn runner identity (voice, gait acoustics, device) rather than fatigue — the "identity bias" flaw the sibling 1573 paper cites Tello et al. 2024 to reject as invalidating. [OTHER]
- Fairness: age 51–60 worst MAE despite good representation; 41–50 (most underrepresented) among the best; sex performance roughly equal; pretrained init flips some age×sex orderings vs random init (underspecification side-effect per D'Amour et al. 2020). [OTHER]
- Individual test-runner MAEs reach up to ~5.0 vs global 2.35 — heavy individual variation. [OTHER]
- No code or dataset link given (KIRun not released); pretrained CNN14 weights are public (Kong's audioset_tagging_cnn); not reproducible end-to-end from the paper. [OTHER]
- GSE overlap section states: GSE has no body-worn audio from players and no product surface for runner fatigue; transferable pieces (AudioSet transfer learning, CCC loss, age×sex fairness stratification) are generic ML practice, not paper-specific. [OTHER]
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Fatigue→injury linkage (overuse injuries strike 29–79% of runners yearly): OTHER (player-health/fatigue modeling)
- Identity-bias warning — subject-dependent splits inflate performance; apply as a negative audit test on GSE's own workload models: OTHER (methodological caution, TRUST-adjacent model-audit practice)
- No portable assets beyond generic transfer learning: OTHER
## Engine-actionable? (yes/no + one-line what)
No — body-worn audio modality is unobtainable for NFL players and no public-football analogue exists; its only value is cautionary (use its subject-dependent-split failure mode as a negative test when auditing GSE workload models).
