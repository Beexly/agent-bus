# docs/arxiv-program/research/2026-09-21/arxiv-deep/2134-chronos-2-univariate-universal-forecasting.md

## What it is (1-2 sentences)
Chronos-2 (arXiv:2510.15821v1, AWS lineage): a pretrained time-series foundation model that handles univariate, multivariate, and covariate-informed forecasting in one zero-shot model — via **group attention** across related series (a game = margin + total + player stat targets + weather/rest covariates as one group) and a direct **21-quantile** multi-step forecast head. Read verdict in the file: **ADOPT** — the strongest verdict in this chunk; "the closest thing in this lane to a deployable GSE probabilistic forecaster."

## Key metrics/methods (formulas where given, else "not specified")
- Group attention: a transformer layer aggregating information across series in the same *group* at each patch index; a group = related series (few-shot), variates of a multivariate series, or targets+covariates; group IDs → 2D attention mask; no positional embeddings within the group layer. Pipeline: robust scaling → time-index + mask meta-features → non-overlapping patches → alternating time-attention and group-attention layers.
- Quantile head: direct multi-step forecast Ẑ ∈ ℝ^{H×D×|Q|} over **21 quantiles Q = {0.01, 0.05, 0.1, …, 0.9, 0.95, 0.99}** — extreme quantiles (0.01/0.99) for tail risk, anomaly detection, risk-aware forecasting.
- Quantile regression loss: L = Σ_{q∈Q} [q·max(z−ẑ^q,0) + (1−q)·max(ẑ^q−z,0)], averaged over steps/items, computed on target dims only (covariate/missing entries excluded).
- Training: two stages — pretrain at context 2048, then extend to **8192** with more output patches. Model: base 120M parameters evaluated in the paper.
- Assumptions: robust scaling handles outliers; group attention's O(G²) cost is manageable for small groups (a game's targets+covariates ≈ 10–20 series); 21-quantile grid approximates the full distribution; synthetic multivariate structure transfers to real covariate relationships.

## Data sources named
Training: synthetic datasets imposing diverse multivariate structures on univariate series + real pretraining data (Chronos lineage); heterogeneous batches mixing univariate, multivariate, and covariate-informed tasks. Evaluation: three public benchmarks — **fev-bench** (multivariate + covariate-informed), **GIFT-Eval**, **Chronos Benchmark II** — plus energy and retail case studies. Baselines: TiRex, TimesFM-2.5, Toto-1.0, COSMIC, Moirai-2.0, Chronos-Bolt, TabPFN-TS, Sundial, statistical ensemble, AutoARIMA/ETS/Theta, naive variants. Weights/code via the authors' release — verify at implementation (Chronos GitHub/Hugging Face org).

## Findings (numbers and facts, not vibes)
- fev-bench (Table 3; win rate / skill / runtime / leakage / failures): **Chronos-2: 90.7% / 47.3 / 3.6s / 0% / 0** — top on win rate and skill, zero leakage, zero failures. TiRex 80.8/42.6/1.4s/1%/0; TimesFM-2.5 75.9/42.3/16.9s/8%/0; Toto-1.0 66.6/40.7/90.7s/8%/0; COSMIC 65.6/39.0/34.4s/0%/0; Moirai-2.0 61.1/39.3/2.5s/**28%**/0; Chronos-Bolt 60.3/38.9/1.0s/0%/0.
- Chronos-2 leads by ~10 pts of win rate over the next best; Moirai-2.0's 28% leakage disqualifies its score; TimesFM-2.5/Toto carry 8% leakage. SOTA on all three benchmarks; covariate tasks won "by a wide margin."
- Limitations noted by the reader: 120M params, 3.6s/task — fine for batch, heavy for real-time per-game refresh across hundreds of props; O(G²) in group size needs group-size discipline for full player-prop groups; synthetic multivariate pretraining may not match sports covariate relationships (fine-tuning required); 21 quantiles ≠ full distribution; key-number discreteness unmodeled.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — native multivariate probabilistic game forecaster: one group = one game (margin + total + QB/RB/WR stat targets + weather/rest/injury covariates) → consistent spread/total/prop pricing from one model, no cross-model disagreement.

## Engine-actionable? (yes/no + one-line what)
Yes — fine-tune Chronos-2-base (120M) on NFL/NCAA game groups 2002–2024 (targets: margin, total, key player stat lines; covariates: rolling EPA, line history, weather, rest, travel, dome, starters), then serve batch per game (~16 games × 3.6s ≈ 1 min/slate) → 21-quantile joint distributions → consistent spread/total/prop pricing, with empirical coverage calibration (conformal layer if needed). Effort 3–5 engineer-weeks. ADOPT for joint game pricing if fine-tuned joint scaled-quantile-loss skill beats independent univariate-per-target baselines over 2022–2024 AND 80%/95% interval coverage is within ±4 pts of nominal on every target; REJECT for live pricing on any leakage-audit flag. Improvement axis: cross-game groups (whole slate as one group) to capture correlated week effects (e.g., a windy Sunday suppressing totals league-wide).
