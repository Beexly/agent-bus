# arxiv-program/research/2026-09-21/arxiv-deep/1954-footbots-motion-prediction.md
## What it is (1-2 sentences)
FootBots (arXiv:2406.19852, Kognia Sports Intelligence / CSIC-UPC): an encoder-decoder transformer for multi-agent motion prediction in soccer using permutation-equivariant set attention (no agent ordering) with sequentially decoupled temporal (SAB_T) and social (SAB_S) attention blocks. Its distinctive feature is Conditioned Motion Prediction (CMP): predicting a subset of agents given known/predicted futures of others (e.g., predict players given the ball, offense given defense).

## Key metrics/methods (formulas where given, else "not specified")
- Set Attention Block (SAB, Lee et al.): transformer encoder block WITHOUT positional encoding over the agent set → permutation equivariance
- Encoder: FFN + temporal positional encoding → SAB_T (temporal dynamics) → SAB_S (social interactions), sequentially decoupled (cheaper than joint temporal-social attention) → context tensor C
- Decoder: Multi-Attention Block Decoder (MABD) with cross-attention; decoder input H depends on task: H = C_{t−T:t} for MP; H = FFN(X^C_{t+1:t+T}) ∪ C^P_{t−T:t} for CMP (condition on known future of subset C, predict subset P)
- CMP variants: predict players given ball; offense given ball+defense; defense given ball+offense; ball given all players
- MHA: softmax(QK^T/√d_k)V; MP: f(X_{0:t}) = X_{t+1:t+T}; CMP: f(X^P_{0:t} | X^C)
- Assumptions (stated): permutation equivariance required (varying player compositions); T ≤ t (prediction horizon ≤ observation length); temporal and social attention can be decoupled sequentially without loss
- Metrics: trajectory prediction error (ADE/FDE-style); qualitative + quantitative CMP analysis

## Data sources named
LaLiga 2022–2023 real tracking data + a tailored synthetic dataset for controlled social-attention analysis. 2D player/ball trajectories; prediction horizon ~4 seconds (T ≤ t constraint). Video demo: https://youtu.be/9kaEkfzG3L8 (stated). No code-release statement extracted.

## Findings (numbers and facts, not vibes)
- FootBots "outperforms baselines in motion prediction and excels in conditioned tasks" on LaLiga data (paper claims; exact numeric tables not extracted from text).
- Baselines beaten: non-social RNN, social pooling, GNN+recurrent, GAT+TCN, prior transformer sports models.
- Synthetic-dataset insights confirm the social attention mechanism's effectiveness and the value of CMP.
- Limitations: SOCCER, ~4s horizons (NFL plays are 4–7s but the tactical structure — downs, line of scrimmage — differs); 2D only, no velocity/acceleration features mentioned; CMP conditioning is on ground-truth future of the conditioning set — at deployment we'd condition on HYPOTHESIZED futures (counterfactual), a harder task.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: CMP reframed for football — predict ball-carrier trajectory given all blockers/defenders (broken-tackle analysis); predict receivers given QB+ball (route-concept evaluation). Counterfactual CMP ("what if the QB throws to the flat instead of deep?" → predict defensive reactions) is the core of a play-design/what-if content engine.
- SCHEME: CMP "predict defense given offensive routes" is a coverage-diagnosis tool; improvement experiment adds down/distance/yardline/formation embeddings to context tensor C — expected biggest gains on CMP (e.g., predicting defense given offense improves when the model knows it's 3rd-and-long).
- OTHER: transformer alternative to the GNS-1953 message-passing approach for the same within-play tracking problem — competing solutions; ADOPT the winner on 2024 NGS ADE/FDE (acceptance test: beat independent-LSTM baseline on ADE by ≥15% AND CMP error within 20% of MP error).

## Engine-actionable? (yes/no + one-line what)
yes — "GSE-FootBots": permutation-equivariant 22-players+ball tracking model with decoupled temporal/social set attention, feeding predicted trajectories into the 1953 event head for play outcomes, plus counterfactual CMP for the what-if engine (acceptance: event-head likelihood of counterfactual reactions within 2× of real plays).
