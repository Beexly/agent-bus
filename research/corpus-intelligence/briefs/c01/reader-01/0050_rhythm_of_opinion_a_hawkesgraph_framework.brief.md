# arxiv-program/research/2026-09-21/arxiv-deep/0050-rhythm-of-opinion-a-hawkesgraph-framework.md
## What it is (1-2 sentences)
Research ledger (deep read, 2026-09-21) on arXiv:2504.15072v1, coupling a high-dimensional Hawkes process with a GNN for Weibo comment-volume/sentiment-propagation forecasting. Ledger verdict: REJECT — no sports content, no baselines, no code/data.
## Key metrics/methods (formulas where given, else "not specified")
- Hawkes intensity: λ_ω(t) = μ_ω + Σ_{ω'∈Ω} Σ_{j: t_j^{ω'}<t} α_{ω,ω'}·e^{−β_{ω,ω'}(t−t_j^{ω'})}; MLE via point-process log-likelihood; stability condition Σ_{ω'} α_{ω,ω'}/β_{ω,ω'} < 1; forecast N̂_ω(T,T+Δ)=∫_T^{T+Δ} λ_ω(t)dt.
- GNN: node features = Hawkes intensities + normalized sentiment dist q_c(v); message passing h_v^{(t+1)}=σ(W_1 h_v+Σ_{u∈N(v)} W_2 e_{uv} h_u^{(t)}); sentiment softmax P(c|v); losses L_sentiment, L_struct, L_total=λ_1 L_sentiment+λ_2 L_struct (λ_1, λ_2 values: **not stated**).
- Metrics: Sentiment Accuracy (SA), Structural Consistency Accuracy (SCA). **No baselines, no ablations.**
## Data sources named
VISTA dataset (new, introduced by paper): 159 Weibo trending topics (2024–early 2025), 47,207 posts, 327,015 second-level comments, 29,578 third-level comments; 11 sentiment classes (Angry…Elated); GLM-4-plus annotation, Cohen's κ=0.85 spot-check; train/val/test 127/16/16 topics. No download URL; code only "promised".
## Findings (numbers and facts, not vibes)
- SA at 15%/20%/25% data: val 19.75/24.12/29.31, test 18.31/22.19/26.99. SCA test: 21.22/26.98/35.76. Results scale with data; test SA ≈27% best is weak; nothing to compare against.
- Hawkes processes are a flagged GSE gap, but this paper's task (Chinese social-media comment propagation) has zero NFL applicability — sports is just one dataset domain.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (machinery reference only): standard Hawkes intensity form λ(t)=μ+Σ α·e^{−β(t−t_j)} + stability condition Σ α/β<1 is reusable as a recipe for in-game scoring-event cascades, betting line-movement cascades, or injury/substitution cascades — but the paper itself contributes no sports Hawkes work; a sports-specific Hawkes paper would be the ADAPT candidate.
- TRUST-SIGNAL: self-referential evaluation (model vs itself at 3 data fractions, zero baselines) is exactly the kind of evidence Garrett's "never park things / audit receipts" standard rejects; flags what NOT to adopt.
## Engine-actionable? (yes/no + one-line what)
No — rejected; nothing to build. If a Hawkes lane opens later, start from the equation form in §4 with NFL event data (scoring runs, line moves), not from this paper.
