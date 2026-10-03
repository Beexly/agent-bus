# docs/arxiv-program/research/2026-09-21/arxiv-deep/0860-causalstock-news-driven-prediction.md
## What it is (1-2 sentences)
Ledger of arXiv:2411.06391 (Li et al. 2024, Renmin/Peking/KAUST): CausalStock — an end-to-end framework pairing an LLM-based Denoised News Encoder (5-dimension scoring rubric) with lag-dependent temporal causal discovery and a functional causal model for news-driven stock movement prediction. Verdict ADAPT — the news-scoring rubric and the causal formalism, not the full ELBO machinery; fills GSE gaps #12 (text/news as features) and #3 (market microstructure).
## Key metrics/methods (formulas where given, else "not specified")
- Denoised News Encoder: LLM scores each news text on 5 dims — correlation (0–10), sentiment polarity (−1..1), significance/importance (0–10), potential price impact (0–10), duration of impact (0–10) → 5-dim vector embedded per stock-day.
- Temporal causal graph G = [G_1,…,G_L] ∈ R^{L×D×D}, G_{l,ji}=1 iff X_{t−l}^j → X_t^i; lag-dependent posterior p(G|X_{<T}) = p(G_1|X_{T−1}) ∏_{l=2}^L p(G_l|G_{l−1}, X_{T−l}).
- Variational posterior q_φ(G) = product of Bernoullis per edge with logits coupled across lags by 3-layer MLPs h_u, h_v; Gumbel-softmax gradients; separate causal weight graph Ĝ for causal degree.
- FCM: y_T^i = f_i(Pa_G^i(<T)) + z_T^i, z_T^i ~ N(0,(σ^i)²); output through logistic sigmoid. Loss: ℒ = (1/D)(−ELBO + λ·BCE), λ = 0.01.
- Hyperparams: lr 1e−5, lag L=5, price-encoder hidden 4, batch 32, news w=20 words / l=10 news/day; trained on 4× Tesla V100.
- Investment simulation: top-3 predicted stocks equal weight, daily rebalance; APV^t = ∏(1+r^i), Sharpe ratio.
## Data sources named
Six public benchmarks, chronological splits, US+China+Japan+UK: ACL18 (US, Yahoo Finance+Twitter, train 2015/10/01, test 2016/01/01); CMIN-US (110 stocks, train 2018/01/01–2021/04/30, test 2021/09/01–2021/12/31); CMIN-CN (300 stocks); KDD17 (50 stocks, 11 price feats); NI225 (51 stocks); FTSE100 (24 stocks). No code stated; LLM prompts fully specified in Appendix A.
## Findings (numbers and facts, not vibes)
- News-driven ACC/MCC: CausalStock 63.42±0.0039/0.2172 (ACL18) vs best baseline CMIN 62.69/0.2090; CMIN-US 54.64/0.0481 vs 53.43/0.0460; CMIN-CN 56.19/0.1417 vs 55.28/0.1110.
- No-news: KDD17 56.09/0.1235 vs DTML 53.53/0.0733 (+2.56pp); NI225 53.01/0.0640; FTSE100 52.88/0.0534.
- Investment sim: ACL18 SR 0.369/APV 1.32 vs CMIN 0.357/1.24, market 0.107/1.07.
- Ablations (ACL18 ACC): w/o TCD 51.08 (MCC 0.0102 — causal module carries ~12pp, removal collapses to coin-flip); w/o news 58.10; lag-independent 59.19 (−4.23pp vs full); variable-dependent TCD 63.50 but O(L·D⁴) vs O(L·D²) — rejected as impractical.
- News encoders: GPT-3.5 denoised 63.42 > Llama denoised 62.82 > FinGPT denoised 61.92; denoised beats raw embeddings for the same LLM.
- Causal strength = G ⊙ Ĝ; Spearman corr(market value, causal strength): ACL18 0.7939 (p=0.006), FTSE100 0.8909 (p=0.0005).
- Example denoised scores: AAPL 5G-delay news → sentiment −0.7, impact 9; TSLA delivery milestone → sentiment +0.7.
- Limitations (authors' Appendix E): no time-varying graph; Bernoulli captures edge existence only; "accurate prediction ⇒ reliable causal graph" asserted not proven; LLM scoring used models with cutoffs after some test periods (possible indirect leakage — paper does not address).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] 5-dimension news rubric adapted to NFL news: correlation-to-game (0–10), sentiment toward team/player (−1..1), significance (starter vs depth injury), expected line impact (0–10), duration in days — score beat-writer articles + injury reports with a frozen open LLM; 5-dim vectors as features alongside engine probabilities.
- [OTHER] Lag-dependent TCD for steam graphs: nodes = sportsbooks (Pinnacle, Circa, BetMGM, DraftKings, FanDuel…), directed lagged edges in spread/total time series (5–15 min buckets, L=5); inject known relationships via the G^p prior slot (e.g., Pinnacle-leads priors); learn "who moves first" per market.
- [OTHER] Ablation-first adoption order: news encoder first, causal graph second; require the w/o-TCD collapse to reproduce on GSE line data.
- [OTHER] Improvement experiment: time-varying causal graphs via online updating (books change risk desks mid-season); graded multi-level causal edges instead of Bernoulli existence.
- [TRUST-SIGNAL] Numeric gate: the paper's w/o-TCD ablation (63.42% → 51.08% ACC) is the bar the causal module must reproduce on GSE data, or it stays out.
## Engine-actionable? (yes/no + one-line what)
Yes — rebuild the Appendix A 5-dim news scorer with a frozen open LLM on one NFL season of injury/beat news, and learn book-level steam-leadership graphs (Pinnacle → followers expected); keep only what survives the w/o-TCD ablation test.
