# arxiv-program/research/2026-09-21/arxiv-deep/1954-footbots-motion-prediction.md
## What it is (1-2 sentences)
FootBots (arXiv:2406.19852, Kognia Sports Intelligence / CSIC-UPC, 2024) — an encoder-decoder transformer for multi-agent motion prediction in soccer using permutation-equivariant set attention (SAB) with decoupled temporal (SAB_T) and social (SAB_S) attention blocks, plus CONDITIONED motion prediction (CMP: predict a subset of agents given others' futures). Verdict: ADAPT — the architecture for 22-player NFL tracking, with CMP mapping directly to GSE's "what-if" play simulation.

## Key metrics/methods (formulas where given, else "not specified")
- Set Attention Block (SAB, Lee et al.): transformer encoder block WITHOUT positional encoding over the agent set → permutation equivariance (no agent ordering needed).
- Encoder: FFN + temporal positional encoding → SAB_T (temporal dynamics) → SAB_S (social interactions), sequentially decoupled (cheaper than joint temporal-social attention) → context tensor C.
- Decoder: Multi-Attention Block Decoder (MABD) with cross-attention; decoder input H depends on task: H = C_{t−T:t} for MP; H = FFN(X^C_{t+1:t+T}) ∪ C^P_{t−T:t} for CMP (condition on known future of subset C, predict subset P).
- Tasks: MP: f(X_{0:t}) = X_{t+1:t+T}. CMP: f(X^P_{0:t} | X^C) with conditioning subsets.
- Attention: MHA: softmax(QK^T/√d_k)V; SAB = MHA block without positional encoding (permutation equivariant).
- Assumptions (stated): permutation equivariance required (varying player compositions); T ≤ t (prediction horizon ≤ observation length); temporal and social attention can be decoupled sequentially without loss.
- CMP tasks in paper: predict players given ball position; predict offense given ball+defense; predict defense given ball+offense; predict ball given all players.
- Evaluation metrics: trajectory prediction error (ADE/FDE-style); qualitative + quantitative CMP analysis.

## Data sources named
LaLiga 2022–2023 real tracking data + a tailored synthetic dataset for controlled social-attention analysis. 2D player/ball trajectories; prediction horizon ~4 seconds (T ≤ t constraint). Baselines: non-social RNN, social pooling, GNN+recurrent, GAT+TCN, prior transformer sports models. Video demo: https://youtu.be/9kaEkfzG3L8 (stated). GSE-side dataset in spec: NGS tracking 2018–2024; train 2018–2023, test 2024; baselines independent LSTMs + GNS-1953.

## Findings (numbers and facts, not vibes)
- FootBots "outperforms baselines in motion prediction and excels in conditioned tasks" on LaLiga data (paper claims; exact numeric tables not extracted from the text — UNCERTAIN on magnitudes).
- Synthetic-dataset insights confirm the social attention mechanism's effectiveness and the value of CMP.
- No code-release statement extracted from the text.
- Limitations: (i) SOCCER, ~4s horizons — American football plays are 4–7s but the tactical structure (downs, line of scrimmage) differs; (ii) 2D only, no velocity/acceleration features mentioned; (iii) CMP conditioning is on GROUND-TRUTH future of the conditioning set — at GSE deployment we'd condition on HYPOTHESIZED futures (counterfactual), which is a harder task; (iv) no numeric results extracted.
- Complements 1953 (GNS message passing): FootBots is the TRANSFORMER alternative for the same within-play tracking problem — set attention instead of graph message passing. No overlap with existing GSE work. The CMP framing is unique in the lane: no other paper does conditioned (subset-given-subset) motion prediction.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR (strong): counterfactual CMP is the core of a QB "what-if" engine — condition on a HYPOTHESIZED ball trajectory ("what if the QB throws to the flat instead of deep?") and predict defensive reactions, or predict receivers' routes given QB+ball (route-concept evaluation). The paper's (d) task "predict receivers given QB+ball" maps 1:1 onto route-concept evaluation; (a) "predict ball-carrier trajectory given all blockers/defenders" maps to broken-tackle analysis. Serves the QB-behavioral profile program (what QBs actually create vs what scheme dictates).
- COACHING (strong): CMP task (c) "predict defense given offensive routes" is coverage diagnosis — a direct coaching-tendency tool: given what the offense showed, what does the defense do? Running this counterfactually over a playbook yields a coverage-response map per defensive coordinator. The improvement experiment — adding down/distance/yardline/formation embeddings to context tensor C — explicitly exploits the fact that NFL motion is strongly conditioned on game situation (unlike soccer's continuous flow), and expects the biggest gains on CMP tasks (e.g., predicting defense given offense improves when the model knows it's 3rd-and-long). Serves coaching tendencies.
- OL (moderate): the social-attention block (SAB_S) over 22 agents models blocker-defender interactions explicitly — (b) "predict offense given ball+defense" inverted gives pass-rush/pressure diagnosis; block-scheme evaluation emerges from CMP task (a) (predict ball-carrier given blockers+defenders). Serves the OL tracking lane via interaction modeling rather than aggregate pressure stats.
- TRUST-SIGNAL: the acceptance gate is a head-to-head — ADOPT whichever of FootBots vs GNS-1953 wins on 2024 NGS ADE/FDE (they're competing solutions to the same within-play tracking problem); ADOPT CMP for the what-if content engine if counterfactual conditioning produces plausible reactions (event-head likelihood within 2× of real plays). REJECT social attention if the ablation shows temporal-only is as good (interactions don't matter at this granularity).
- SCHEME (uncertain): if CMP conditioning on hypothesized futures proves plausible, the model becomes a play-design tool (test a route concept against predicted coverage reactions before Sunday) — but the paper conditions on ground truth, so this is an extension gap (INFERENCE), not an established capability.
- OTHER (architecture): decoupled temporal/social attention is cheaper than joint temporal-social attention with no stated loss — a compute-savings fact for any GSE tracking build.

## Engine-actionable? (yes/no + one-line what)
Yes — prototype the FootBots SAB_T/SAB_S architecture on NGS tracking 2018–2024 with down-aware situational embeddings as the stated improvement, and A/B it against GNS-1953 on 2024 ADE/FDE (≥15% ADE win vs independent-LSTM baseline is the success bar); CMP counterfactuals feed the what-if content engine.
