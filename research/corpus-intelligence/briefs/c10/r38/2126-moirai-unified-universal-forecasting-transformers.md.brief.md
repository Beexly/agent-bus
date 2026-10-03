# arxiv-program/research/2026-09-21/arxiv-deep/2126-moirai-unified-universal-forecasting-transformers.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2402.02592v2 (Woo et al. 2024), the Moirai time-series foundation model paper — a masked-encoder transformer pretrained on LOTSA (27B+ observations, 9 domains) with multi-scale patching and any-variate attention, emitting mixture-distribution forecasts trained by NLL. Verdict: ADAPT — the strongest architectural template for joint multi-stat sports forecasting, but the value is in the architecture/training recipe, not the released weights.

## Key metrics/methods (formulas where given, else "not specified")
- Any-variate flattening: X ∈ ℝ^{T×V} → patches with variate-index attention bias, attention over (time × variate) tokens; O((T·V)²).
- Multi-scale patches: series split at patch sizes {p_1,…,p_k}, embeddings concatenated.
- Output: p(y) = Σ_m π_m · Dist(y; θ_m) (mixture of Student-t/Gaussian), trained with −log p(y_future); future-known covariates via patching scheme.
- Metrics: CRPS (probabilistic), MSIS, sMAPE/MASE.

## Data sources named
LOTSA (Large-scale Open Time Series Archive: energy, transport, climate, cloud ops, web, sales, economics/finance, healthcare, nature; sub-hourly to yearly; sources include Monash, LibCity, UCR/UEA). Evaluation: Monash benchmark, ETT, Electricity, Weather, Traffic. Code/weights: github.com/SalesforceAIResearch/uni2ts.

## Findings (numbers and facts, not vibes)
- Electricity benchmark CRPS (lower better): Moirai-Large 0.050, Moirai-Base 0.055, Moirai-Small 0.072 vs TiDE 0.048, PatchTST 0.052, TFT 0.050, DeepAR 0.065, AutoARIMA 0.327, SeasonalNaive 0.070. Moirai-Large matches the best supervised models; scaling helps monotonically; Small lags.
- Zero-shot competitive across Monash; fine-tuning closes remaining gaps.
- Limitations: mixture-of-t output cannot express discrete key-number mass (margins landing exactly 3/7); any-variate attention is O((T·V)²), exploding for joint team+player modeling; LOTSA is generic — sports zero-shot transfer is speculative.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Joint forecasting of margin + total + QB EPA + RB/WR usage as variates gives consistent spread/total/prop pricing from one model instead of independent models disagreeing (TRUST-SIGNAL).
- Key-number discrete head (point masses at margins {3,7,10}) as a high-leverage pricing improvement idea targeting games lined near 3/7 (OTHER).

## Engine-actionable? (yes/no + one-line what)
Yes — run the 1-day zero-shot probe (Moirai-Base on NFL weekly multivariate series vs GSE engine, CRPS) then seasonally fine-tune with future-known covariates (rest, dome, spread) for joint spread/total pricing; accept gate: joint margin CRPS ≤ best univariate variant AND total CRPS ≤ best univariate variant on 2021–2024.
