# docs/arxiv-program/research/2026-09-21/arxiv-deep/2124-moment-family-open-time-series-foundation.md

## What it is (1-2 sentences)
MOMENT (arXiv:2402.03885v2): a family of *open* encoder-only time-series foundation models (40M/125M/385M parameters) pretrained with a masked-prediction objective on a large public multi-domain corpus ("Time Series Pile"), claimed to match task-specific models across forecasting, classification, anomaly detection, and imputation via linear probing or fine-tuning. Read verdict in the file: **ADAPT** — the open masked-pretraining design plus the corpus recipe is the right template for a GSE sports model, but its evaluation is point-forecast oriented and the sports corpus must be built from scratch.

## Key metrics/methods (formulas where given, else "not specified")
- Architecture: encoder-only T5-style transformer with patching — fixed input length 512, patch length 8, stride 8 → 64 tokens; **reversible instance normalization (RevIN)** applied before patching; channel-independent multivariate handling (each channel independently, no cross-channel attention); random patch masking during pretraining.
- Pretraining objective: masked time-series prediction — reconstruct randomly masked patches from context; loss L = (1/|M|)Σ_{j∈M} ||ŷ_j − y_j||² (MSE over masked patches only). RevIN: x̃ = (x − μ)/σ per instance, reversible at output. Forecasting fine-tuning: standard MSE on future window.
- Sizes: MOMENT-small 40M, MOMENT-base 125M, MOMENT-large 385M. Downstream adaptation: (i) linear probing (frozen encoder + linear head), (ii) fine-tuning (all weights), (iii) zero-shot via forecasting head. Multi-task heads: forecasting (linear decoder), classification, anomaly (reconstruction error), imputation.

## Data sources named
- Time Series Pile (public release): aggregated from the Monash forecasting archive, TSB-UAD anomaly archive, UCR/UEA classification archives, and the Informer benchmark — billed as the largest public collection of time series for pretraining. Long-horizon subset: 25,959,994 observations over 1,247 series; classification subset: 634,084,943 observations over 290,226 series.
- Evaluation: long-horizon forecasting (ETTm2/ETTh2/Electricity/Weather/Traffic from the Informer suite, horizons 96/192/336/720), short-horizon (M4), classification (UCR), anomaly detection (TSB-UAD). Baselines: TimesNet, N-HiTS, N-BEATS, Informer/Autoformer/FEDformer family, PatchTST, statistical (NPTS, ARIMA).
- Code/weights claimed released at github.com/mononito/MOMENT (verify at implementation).

## Findings (numbers and facts, not vibes)
- Long-horizon forecasting: MOMENT-large competitive with TimesNet/PatchTST across horizons; within top ranks on MSE/MAE tables — encoder-only masked pretraining matches supervised SOTA without per-dataset architecture tuning. (Exact per-dataset numbers live in the paper's tables.)
- Zero-shot forecasting head: non-trivial transfer, below fine-tuned performance (expected).
- Classification/anomaly/imputation: pretrained encoder transfers across all four tasks with linear probes — the "one backbone, many heads" claim.
- Fine-tuning vs linear probing: full fine-tune generally best for forecasting; linear probe suffices for classification.
- Ablation: removing RevIN or random masking degrades transfer; larger models (385M) beat 40M on forecasting.
- Limitations noted by the reader: fixed 512-length input (17-game NFL seasons need upsampling); channel-independent — cannot learn cross-series structure (QB EPA ↔ WR usage ↔ team margin) without new attention; point-forecast MSE/MAE evaluation, no calibrated uncertainty; no sports sequences in pretraining; masked-reconstruction weaker than autoregressive objectives for multi-step forecasting in some of the paper's own ablations.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — pretrained sequence-backbone infrastructure; the Time Series Pile *data recipe* (aggregating heterogeneous public series into one pretraining corpus) is directly reusable for a sports pretraining corpus.

## Engine-actionable? (yes/no + one-line what)
Yes — build a "Sports Time Series Pile" (NFL/NCAA team margins + totals 2002–2024, player weekly usage/fantasy points, NGS-derived team metrics, odds-line histories, fixed windows), then MOMENT-style masked pretraining (base 125M to start) with forecasting + classification heads, evaluated walk-forward. ADOPT only if fine-tuned beats N-BEATS by ≥2% MSE on a two-season holdout AND pretraining contributes ≥1 pt of that gain (else a simpler model ships) AND margin MAE beats GSE's current engine. Effort ~5–7 engineer-weeks. Improvement axis: cross-variate attention variant to test how much sports structure channel-independence leaves on the table.
