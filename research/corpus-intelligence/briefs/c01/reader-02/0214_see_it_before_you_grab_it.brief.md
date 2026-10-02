# arxiv-program/research/2026-09-21/arxiv-deep/0214-see-it-before-you-grab-it.md
## What it is (1-2 sentences)
A full-paper read of a basketball broadcast-video rebound-anticipation study (arXiv:2512.15386v1) introducing the TEAM architecture (X3D backbone + transformer encoder + CLS token) for predicting OREB vs DREB before the rebound occurs. The reader's verdict was REJECT for GSE: no NFL transfer path, dataset permission-gated, and the only portable piece is the generic video-anticipation recipe.
## Key metrics/methods (formulas where given, else "not specified")
- Offline setup: video trimmed exactly tau_a seconds before action; binary OREB/DREB classification. Online setup: untrimmed sliding clips; predict OREB/DREB/no-rebound in a fixed anticipation window.
- Loss: weighted multi-class CE with class weights [0.49, 0.49, 0.02] (DREB, OREB, background); frame-wise spotting CE weights [0.49999, 0.49999, 0.00002].
- TEAM: X3D_m backbone -> learnable positional embeddings + CLS token -> 2 transformer-encoder layers (8 heads, FFN inner 512, dropout 0.1, GELU) -> MLP head. Pre-train on rebound classification (D_25K), fine-tune anticipation with few unfrozen params (~13%). Spotting post-processing: temporal smoothing window 7, threshold 0.7, NMS 2.5 s.
- Metrics: classification accuracy; spotting mAP@delta (delta in {1,2,3} s); online macro-averaged F1 over 3 classes.
## Data sources named
Self-curated NBA Rebounds dataset (100,000 video clips from NBA Stats, 10 seasons, 30 teams, 800+ players, ~300 hours; 2,000 manually annotated with frame timestamps). Dataset NOT publicly released (NBA permission not granted). No public benchmark comparison possible.
## Findings (numbers and facts, not vibes)
- Classification test accuracy 0.881 (DREB P/R/F1 0.89/0.87/0.88; OREB 0.87/0.89/0.88).
- Online anticipation best macro-F1 0.287 (OREB 0.290, DREB 0.284); TEAM beats vanilla X3D (0.202) at all clip lengths; transformer (0.287) >> X3D (0.202) >> LSTM (0.169).
- Classification-init pre-training (0.287) beats Kinetics-400 init (0.271); X3D_m (3.79M params) ~ equals ConvNeXt_Tiny (28.5M params) at 7.5x fewer params.
- Pseudo-labeling with 1.5K or 16K samples gives NO consistent gain (negative result).
- AI vs 5-person basketball-expert panel: tau_a=0.5 s, AI acc 0.60 vs humans 0.71; tau_a=1.5 s, AI 0.59 vs humans 0.59 (AI F1 0.56 vs 0.48 since humans default to DREB prior).
- LayerCAM: model activations peak in last 2-3 frames and focus on players, NOT the ball; humans use ball trajectory when visible.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (video/CV research): generic event-anticipation architecture recipe; no NFL analog in current data regime.
- TRUST-SIGNAL: honest negative result (pseudo-labeling no gain) and permission-gated dataset demonstrate data-access as the binding constraint on video lanes.
## Engine-actionable? (yes/no + one-line what)
No — REJECT verdict stands; no NFL video event-anticipation lane exists, dataset unusable; revisit only if GSE opens an All-22 video anticipation lane with licensable footage.
