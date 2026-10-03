# docs/arxiv-program/research/2026-09-21/arxiv-deep/0859-multimodal-attention-stock-prediction.md

## What it is (1-2 sentences)
A Multi-modal Attention Network (MMAN) that predicts 5-day stock movements by fusing social-media text (credibility-weighted by poster reputation via a Transformer decoder) with numeric price-history features (via bidirectional inter-intra attention), beating the best baseline by +1.33pp accuracy (59.87% → 61.20%). The deep-read ledger verdict is ADAPT only for two transferable ideas — credibility-weighted social-text attention and time-dispersion positional encoding — not the stock pipeline wholesale; the paper's missing chronological split is an unresolved leakage risk.

## Key metrics/methods (formulas where given, else "not specified")
- Embedding: text via Deep Averaging Network with flatten (not sum) → C^s ∈ R^{n×d}; social-impact features → Linear → A^e ∈ R^{n×d}; price history via 3D-CNNpred → H ∈ R^{n×d}.
- Encoder: Transformer encoder on text with time-based positional encoding using relative post-time dispersion: PE(t,2i)=sin(t/c^{2i/d}), PE(t,2i+1)=cos(t/c^{2i/d}), c=10000.
- Credibility fusion: C = TransDecoder(A^e_q, A^e_k, C^e_v) — social-impact features as queries/keys, encoded text as values.
- Inter-attention: H^{itv} = softmax(H_q C_k^T/√d) C_v (eq. 14), symmetric for text; channel gates: G_H = σ(Linear(Avg_Pool(C^{itd}))); Ĥ^{itd}_q = (1+G_H) ⊙ H^{itd}_q; intra-attention: H^{inu} = softmax(Ĥ_q Ĥ_k^T/√d) H^{itd}_v; H^{ind} = Linear(H^{itd}+H^{inu}); FM = Avg_Pool(H^{ind} ⊙ C^{ind}).
- Loss: margin loss Loss_k = Y_k max(0, m^+ − ‖Ŷ_k‖)² + λ(1−Y_k) max(0, ‖Ŷ_k‖ − m^−)² with λ=0.5, m^+=0.9, m^−=0.1; total = ΣLoss_k + 0.0005(FM − Re(Ŷ))² (reconstruction regularization).
- New-word entropy/MI tokenization for Chinese text; BM25 key-sentence extraction; training: Adam lr 0.001 linear decay, batch 64, latent dim 512, max text 64 words, max 96 texts, dropout 0.2, weight decay 0.001.

## Data sources named
- Social corpora: scraped from Xueqiu (xueqiu.com, Chinese financial forum); texts in window [t−l+1, t], l = 14 days; max 96 texts per window; top 150 stocks by popularity.
- Historical trending: daily OHLCV; per-post 64-day price trend window (t_i−63 to t_i); 7 daily features (open, close, high, low, volume + high−low and open−close dispersions).
- Social impact features A_t: poster's fans, followers, #posted texts, concerned-stocks vector, poster profit per stock (credibility signal), likes/retweets/replies; stock-name similarity S_i.
- Labels: Y_t = 1 if p_{t+Δt} ≥ p_t else 0, p_{t+Δt} = mean adjusted close from d+1 to d+w, w = 5 days; samples with |movement| < 0.75% dropped.

## Findings (numbers and facts, not vibes)
- Table 2 accuracy/MCC: RF 53.13%/0.0129; HAN 55.96%/0.0447; StockNet 57.35%/0.0621; Adv-LSTM 57.93%/0.0672; MHACN 58.84%/0.0721; CapTE (best baseline) 59.87%/0.0976; MMAN-oH (hist only) 56.67%/0.0583; MMAN-oC (text only) 59.49%/0.0737; MMAN-nA (no social-impact) 60.06%/0.0850; MMAN-nH (no history) 60.46%/0.0937; MMAN (full) 61.20%/0.1193. **[OTHER]**
- Full MMAN beats best baseline CapTE by +1.33pp accuracy (59.87% → 61.20%) and MCC 0.0976 → 0.1193. **[OTHER]**
- Ablations: social-impact credibility features add +1.14pp (60.06% → 61.20%); history adds +0.74pp (60.46% → 61.20%); text+history fusion beats either alone. **[OTHER — the credibility-ablation ordering is the numeric gate for adoption]**
- Virtual trading Jan–Mar 2021 (no transaction costs): MMAN profits exceed CapTE and buy-and-hold market in all 6 reported industries; commerce industry max return "over 12%"; abstract claims 9.13% trading profits — the file flags this as reported, not reconcilable with Table 3's dollar figures. **[OTHER]**
- Caveats per the file: no explicit chronological train/test split described — temporal leakage risk (61.20% potentially optimistic); Chinese-language corpus; ±0.75% threshold drops hard samples, flattering accuracy; 3-month trading window; inter-intra attention is heavy for ~1pp gains.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Credibility-weighted analyst-text fusion: for each NFL game, collect X posts from GSE's inventoried analyst accounts (86+ accounts with verification data) in the pre-game window; encode with a sentence transformer; per-poster credibility features (historical pick accuracy, CLV of past calls, follower counts) supply attention queries/keys over text values — the paper's eq. 13 pattern applied to the market lane. **OTHER**
- Time-based positional encoding with post-time-to-kickoff dispersion instead of token position — posts closer to kickoff carry fresher information. **OTHER**
- Fuse text embeddings with numeric line-movement features (open→current spread/total deltas, steam flags) via cross-attention to predict closing-line direction / steam direction — **OTHER**.
- The file's own leakage hygiene note (no chronological split = treat 61.20% as optimistic; do not adopt ±0.75% sample-dropping) is an evaluation-integrity standard — **TRUST-SIGNAL**.

## Engine-actionable? (yes/no + one-line what)
Yes — pilot credibility-weighted X-analyst-text + line-movement fusion (poster track record as attention queries/keys, time-to-kickoff positional encoding, strict walk-forward splits) to predict closing-line direction, starting with a simplified credibility-gated cross-attention block; do not adopt if the credibility ablation (+1.14pp ordering) fails to reproduce on walk-forward data.
