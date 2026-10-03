# docs/arxiv-program/research/2026-09-21/arxiv-deep/0860-causalstock-news-driven-prediction.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2411.06391 (CausalStock, Li et al. 2024) on end-to-end lag-dependent temporal causal discovery with an LLM-based denoised news encoder for stock movement prediction. Verdict ADAPT: two portable ideas — the 5-dimension LLM news-scoring rubric (for NFL news features, gap #12) and lag-dependent causal graphs (for directed cross-book line-movement/steam graphs, gap #3); the full FCM/ELBO stack is heavy for the gain.
## Key metrics/methods (formulas where given, else "not specified")
- LLM-based Denoised News Encoder scores each text on 5 dims: correlation (0–10), sentiment polarity (−1..1), significance/importance (0–10), potential price impact (0–10), duration of impact (0–10).
- Lag-dependent graph posterior: p(G|X_<T) = p(G_1|X_{T−1}) ∏_{l=2}^L p(G_l|G_{l−1}, X_{T−l}); G = [G_1,…,G_L] ∈ R^{L×D×D}; variational q_φ(G) as Bernoulli per lag-edge with 3-layer MLPs h_u, h_v coupling logits across lags; Gumbel-softmax gradients.
- FCM: y_T^i = f_i(Pa_G^i(<T)) + z_T^i, z_T^i ~ N(0,(σ^i)^2); f_i via logistic sigmoid over causally-masked aggregation; loss ℒ = (1/D)(−ELBO + λ·BCE), λ = 0.01.
- Grid-searched hyperparams: lr 1e−5 ∈ [1e−3,1e−4,1e−5,1e−6]; lag L=5 ∈ [3,5,7,9]; batch 32; price-encoder hidden 4; ζ/ℓ/ψ 3-layer MLPs hidden 332.
## Data sources named
Six public benchmarks: ACL18 (US), CMIN-US (110 stocks), CMIN-CN (300), KDD17 (US, 50), NI225 (JP, 51), FTSE100 (UK, 24); news from Yahoo Finance + Twitter/Wind; 11 price features; all chronological train/val/test splits.
## Findings (numbers and facts, not vibes)
- News task ACC/MCC: ACL18 CausalStock 63.42/0.2172 vs CMIN 62.69/0.2090; CMIN-US 54.64/0.0481 vs best baseline 53.72/0.0103; CMIN-CN 56.19/0.1417 vs 55.28/0.1110. No-news: KDD17 56.09/0.1235 vs DTML 53.53/0.0733 (+2.56pp).
- Ablations (ACL18 ACC): w/o TCD 51.08 (MCC 0.0102 — causal module carries ~12pp); w/o news 58.10; lag-independent 59.19 (−4.23pp); variable-dependent 63.50 but O(L·D⁴), rejected.
- News encoders: GPT-3.5 denoised 63.42 > Llama denoised 62.82 > FinGPT denoised 61.92; raw embeddings worse than denoised for same LLM.
- Explainability: Spearman corr(market value, causal strength) ACL18 0.7939 (p=0.006), FTSE100 0.8909 (p=0.0005).
- Leakage caveat named: LLM knowledge cutoffs postdate some test periods; prefer frozen open models.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 5-dim news rubric → structured NFL beat-writer/injury-report feature extractor (correlation-to-game, sentiment, injury significance, expected line impact, duration) → OTHER (news features, gap #12)
- Lag-dependent causal discovery on book-level line time series → "who leads" steam-propagation graph (Pinnacle→followers), with G^p prior slot for known lead-lag → OTHER (market microstructure, gap #3)
- Ablation-first adoption gate (replicate w/o-TCD collapse before trusting machinery) → OTHER (methodology)
## Engine-actionable? (yes/no + one-line what)
yes — build the 5-dim LLM news scorer for one NFL season of injury/beat news and the book-level lagged line-movement causal graph, gated on the w/o-TCD ablation reproducing a material drop.
