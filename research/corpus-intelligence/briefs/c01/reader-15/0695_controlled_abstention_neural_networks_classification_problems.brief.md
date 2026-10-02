# arxiv-program/research/2026-09-21/arxiv-deep/0695-controlled-abstention-neural-networks-classification-problems.md
## What it is (1-2 sentences)
Deep read of Barnes & Barnes (2021), arXiv:2104.08281v1 — "Controlled Abstention Neural Networks" (CAN) for classification: a network with an extra abstention output trained with the "NotWrong" loss (penalize being wrong, not failing to be right) plus a PID controller that holds the abstention fraction at a user-specified setpoint. Ledger verdict: ADAPT — the NotWrong loss is the classification-side abstention loss, beats the DAC loss of Thulasidasan et al. (2019) head-to-head; prefer it for GSE's cover/no-cover classification head.

## Key metrics/methods (formulas where given, else "not specified")
- Baseline CE: ℒ_C(x_{i,j}) = −log p_{i,j}.
- NotWrong loss (Eq. 3): ℒ_NW(x_j) = −log(p_j + p_{k+1}) − α log q, where q = 1 − p_{k+1} = Σ_{m=1}^k p_m, p_{k+1} = abstention-class output. First term = likelihood of "not being wrong" (correct + abstain); second term = abstention penalty.
- DAC loss (Thulasidasan): ℒ_DAC(x_j) = −q log(p_j/q) − α log q. Difference: DAC's first log is likelihood of being *correct*; NotWrong's is likelihood of *not being wrong*. Authors show NotWrong has larger negative derivatives ∂ℒ/∂a_j (wrt the correct-class logit) in the relevant phase-space region → "puts more energy into learning the correct answer."
- α PID-controlled (velocity algorithm, 6-batch/192-sample windows, same as ledger 0694) to hit user-specified abstention setpoints; setpoints swept 0.05–0.95.
- Publish rule for GSE: publish iff argmax ≠ abstain class (equivalently p_abstain below calibrated τ).

## Data sources named
Synthetic climate benchmark (Mamalakis et al. 2021, public), targets binned into k=10 decile classes. Three synthetic use cases: badClasses (20% label corruption in classes 4–5; 8k/5k/5k), mixedLabels (5% uniform corruption; 8k/5k/5k), fooENSO (35% corrupt overall, 29% "tranquil" strong-El-Niño clean; 32k/5k/5k, deeper net 500-250-20). Oracle baseline (corrupted samples removed pre-training) on mixedLabels; 50 random-init runs per configuration.

## Findings (numbers and facts, not vibes)
- CAN beats the best baseline ANN at matched coverage for most setpoints in all three use cases; maximum accuracy improvement **+0.045 (4.5%)**.
- mixedLabels: best CAN models match ORACLE accuracy at 40–80% coverage — abstention "nearly ideal" at skipping corrupted samples.
- Strategy decomposition: fooENSO wins via better learning on clean samples (strategy #2); badClasses wins via both better corrupt-sample identification and better learning (#1+#2).
- NotWrong > DAC loss on these use cases (Supp. S2, S3).
- LRP interpretability: CAN's correct predictions concentrate relevance on the true mechanism region (ENSO box).
- No real-data validation — all synthetic; setpoints calibrated on validation may not transfer across seasons.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — The pick-posting abstention mechanism for GSE: a trainable abstention head on the ATS/moneyline classification head ("don't publish" as a class) rather than post-hoc thresholding.
- OTHER — The strategy-decomposition diagnostic (#1 identify unreliable games vs #2 learn reliable games better) determines whether the abstention head is a filter in front of the production model or a full replacement — directly testable on GSE data by splitting "anomalous" (late line move >2 pts, backup QB, extreme weather) vs "clean" games.
- OTHER — LRP/gradient attribution on abstained games as a check that the network keys on real unreliability features (backup QB, weather) rather than spurious ones.

## Engine-actionable? (yes/no + one-line what)
Yes — spec included: add abstention output to GSE's cover/no-cover head with ℒ_NW = −log(p_correct + p_abstain) − α log(1 − p_abstain), α PID-controlled to target publish fraction; gate: beat baseline+post-hoc-threshold on 2025 test covered-set accuracy by ≥2pp (p<0.05) and match/beat the DAC-loss variant; shares infra with the 0694 regression CAN.
