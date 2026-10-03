# arxiv-deep/0691-verifiable-rewards-calibrated-probabilistic-forecasting.md
## What it is (1-2 sentences)
Read-and-ledger of Singh, Reddy & Chopra (2026), "Verifiable Rewards for Calibrated Probabilistic Forecasting" (arXiv:2607.00164v1): trains an LLM forecaster (Qwen2.5-7B) via RLVR on NFL in-game win probability using a reward of 1 minus squared error against a state-conditioned **empirical-rate teacher** p̂(x) instead of the realized binary outcome. Verdict: ADAPT — the empirical-rate-as-teacher calibration trick and the "converging estimators = information ceiling" diagnostic transfer to GSE; the RLVR/LLM machinery does not.

## Key metrics/methods (formulas where given, else "not specified")
- Brier score: `(p − y)²`, strictly proper; minimized in expectation uniquely by the true conditional rate η(x) = Pr(win|x).
- Reward (Eq. 1): `r = 1 − (p − p̂(x))²` (rate target). Naive alternative: `r = 1 − (p − y)²` (realized outcome).
- Empirical-Bayes bucket: `p̂ = (w + M·p̂_parent)/(n + M)`, pseudocount M = 25, hierarchical shrinkage from global rate downward.
- Empirical-rate teacher construction: training plays binned by score margin (14 bins, edges ±1, ±4, ±7, ±10, ±14, ±21), time remaining (7 bins, edges 2, 5, 10, 15, 30, 45 min), pregame spread (9 bins, edges ±0.5, ±3, ±7, ±10); bin value = fraction of training plays the possession team won; sparse bins shrunk toward coarser parents. Test plays read targets from the training-season table only.
- Murphy decomposition of Brier into reliability (calibration), resolution (sharpness), uncertainty (base rate).
- ECE and MCE over 10 equal-width bins; paired bootstrap over plays (10⁴ resamples).
- RLVR training details (not directly reusable, recorded for completeness): GRPO, LoRA rank 16 / α=32 / dropout 0.05, bfloat16, 250 steps, 20-step warmup, 8 completions/state at temperature 0.9, token-level loss, single on-policy update per step, 16 micro-batch gradient accumulation, reward scaling ON, TRL vLLM importance-sampling correction disabled; direct variant lr 2×10⁻⁵, KL coefficient 0.01 (48-token outputs); masked-CoT variant lr 3×10⁻⁵, KL coefficient 0 (640-token reasoning, gradient masked to final "Probability: NN%" answer span).

## Data sources named
- NFL regular-season play-by-play, 2015–2024, public **nflfastR** data. Splits disjoint by season: train 2015–2022 = 40,246 states; selection 2023 = 5,241; test 2024 = 5,185. No game in two splits.
- Input features: score margin, quarter + time remaining, down & distance, field position, team in possession, public pregame point spread. Prompt contains the pregame spread only; live market win probability withheld from model AND reward, used only at evaluation.
- Reference ceiling: betting market via Štrumbelj 2014 odds→probability conversion. Baselines: nflverse win-probability model, GBM on full feature set, zero-shot DeepSeek-V4.
- Code: https://github.com/jasper-research/nfl-rlvr-release; data + adapters: https://doi.org/10.5281/zenodo.21082572. Per-play predictions released; reproducible without GPU.

## Findings (numbers and facts, not vibes)
- Test 2024 (n=5,185 plays): Direct RLVR Brier **0.1443** [0.1394, 0.1491], ECE **0.0292**, MCE 0.0596, acc 0.784, resolution 0.1058.
- Masked-CoT RLVR: Brier 0.1522 [0.1466, 0.1577], ECE 0.0293, MCE 0.0684, acc 0.777.
- DeepSeek-V4 zero-shot: 0.1438 [0.1392, 0.1483], ECE 0.0430, acc 0.790.
- Empirical-rate teacher p̂: 0.1432 [0.1384, 0.1480], ECE 0.0437.
- Market: **0.1355** [0.1307, 0.1403], ECE 0.0273, MCE 0.0824, acc 0.799, resolution 0.1148.
- Untrained base Qwen2.5-7B: direct 0.2057/0.0569; CoT 0.1681/0.0687. nflverse WP: 0.1562/0.0188. GBM all features: 0.1584/0.0260.
- Coarse teacher on 2024: Brier 0.143 vs market 0.136. Adding field position + down did not improve it (2023: 0.1534/0.0099 vs coarse 0.1532/0.0117).
- Paired differences: Direct−Masked = −0.0079* [−0.0101, −0.0057]; Direct−Market = +0.0088* [0.0068, 0.0107]; Direct−DeepSeek-V4 = +0.0005 [−0.0019, 0.0028] (not significant).
- Three static estimators (direct, DeepSeek-V4, teacher) converge ≈0.143–0.144 and trail the market by the same 0.008 — the gap is resolution/information, not calibration.
- Reward-target ablation (in-training n=128): realized outcome → Brier 0.166, ECE 0.10; ½y+½p̂ blend → 0.181/0.121 (worse on both); empirical rate → **0.154/0.050**.
- Full-completion CoT training (same reward): Brier 0.25→0.34, ECE 0.19→0.30 — decalibration driven by gradient on reasoning tokens, not the reward.
- Blinded judge (250 plays): inconsistent completions fall 22.4% (base) → 4.4% (masked); full-completion RL leaves base rate unchanged; masked prompt alone (no training) = 6.8%.
- Direct model is better calibrated than its own teacher: ECE 0.029 vs 0.044 (policy smooths the bucketed target).
- Authors' own §7 caveat: method works "only where the public state already carries most of the predictive signal, and where outcomes are dense and resolved quickly enough to estimate a reliable empirical rate; sparse or long-horizon events would weaken both the reward and the comparison against a market."
- Teacher ceiling: a model trained on p̂ can never be better calibrated than p̂'s information content (smoothness gains only).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **CALIBRATION/SIZING (OTHER):** The empirical-rate teacher is a concrete, cheap upgrade for GSE's probability calibration lane: calibrate the calibrator (Platt/isotonic/temperature) against hierarchical-empirical-bayes bucket rates p̂ = (w + 25·p̂_parent)/(n + 25) instead of against binary outcomes, removing the Bernoulli noise that makes per-pick calibration gradients unstable. The ablation numbers (ECE 0.050 vs 0.10 for outcome-targeted reward) quantify the payoff; the ledger's GSE implementation spec (buckets over model-probability decile × days-to-kickoff × spread × league, M=25) is engine-ready and serves the calibration/sizing program. Engine-actionable regardless of the LLM setting.
- **TRUST-SIGNAL (converging-estimators-as-ceiling diagnostic):** The finding that engine + simple baseline + teacher all converge ≈0.143–0.144 while trailing the market by a fixed +0.0088 is a transferable diagnostic: when GSE's engine, a dumb tabular baseline, and an empirical-rate teacher converge on the same Brier while trailing the closing line, the residual is live-market information (injuries, steam) — stop spending model capacity there and instead ingest it (injury feeds, line-movement features). This is a **trust-target intake** mechanism: it tells the engine when its published probabilities have hit an information ceiling, which is exactly what a trust signal should certify.
- **OTHER (QC of analyst write-ups):** The blinded-judge result (22.4%→4.4% inconsistent completions under masked objectives) suggests a QC metric for GSE analyst-style write-ups — "does the stated pick follow from the analysis" — cheap and assumption-light.
- UNCERTAIN: external validity to reasoning-first models (paper used non-thinking Qwen2.5-7B); blinded judge is itself an LLM with audited-but-subjective flags.
- CONTRADICTION: none with known corpus results; complements the CQR conformal work and the calibration lane (ledger 0723 temperature scaling).

## Engine-actionable? (yes/no + one-line what)
**Yes** — build the empirical-rate teacher table on GSE's historical pick outcomes (M=25 hierarchical backoff) and refit the probability calibrator against teacher rates instead of binary outcomes; add the convergence-vs-market diagnostic to flag information-ceiling regimes. No LLM/RLVR machinery needed; ~2–4 days per the ledger's spec, with an acceptance gate of ≥20% relative ECE reduction vs isotonic-on-outcomes with Brier no worse than +0.002.

Referenced files/papers/datasets: nflfastR (2015–2024 NFL play-by-play); Štrumbelj (2014) odds→probability conversion; nflverse win-probability model; Qwen2.5-7B-Instruct; TRL + vLLM; DeepSeek-V4; GitHub jasper-research/nfl-rlvr-release; Zenodo DOI 10.5281/zenodo.21082572; Murphy Brier decomposition; corpus cross-refs: conformal CQR work, ledger 0700 (conformal abstention), calibration lane (0723/0724).
