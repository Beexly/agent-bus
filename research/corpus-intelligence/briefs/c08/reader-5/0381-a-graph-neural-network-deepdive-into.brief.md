# docs/arxiv-program/research/2026-09-21/arxiv-deep/0381-a-graph-neural-network-deepdive-into.md
## What it is (1-2 sentences)
Deep read (arXiv:2411.17450, U.S. Soccer Federation) of per-frame Graph Neural Networks on tracking + event data that predict whether a soccer counterattack will succeed; gender-specific models beat the pooled model, with fully open code and data.

## Key metrics/methods (formulas where given, else "not specified")
- Graph per frame: nodes = players + ball; 10 node features (x,y; velocity x/y; speed; angle of motion; distance to goal; angle to goal; distance to ball; angle to ball; attacking flag); edge features (sin/cos inter-player angles, normalized distances); adjacency: teammates connected, all players connected to ball.
- Architecture: 3× CrystalConv layers → Global Average Pool → Dense+ReLU → Dropout → Sigmoid. No equations reproduced in the paper.
- Training: balanced 70% train (50/50), women 100 epochs / men & combined 200; evaluation: log-loss, ROC-AUC, ECE, permutation feature importance (15 shuffles/feature, AUC drop). Balanced label; imbalanced release: 210,000 frames, ~5% success.

## Data sources named
StatsPerform on-ball event data + SkillCorner broadcast tracking (10 Hz, quality ≥4/5), 632 games (MLS 2022, NWSL 2022, international women 2020–2022); 20,863 frames total (women: 3,720; men: 17,143). Open release: github.com/USSoccerFederation/ussf_ssac_23_soccer_gnn + `unravelsports` package.

## Findings (numbers and facts, not vibes)
- Test log-loss / ROC-AUC: women 0.48 / 0.83; men 0.51 / 0.78; combined 0.56 / 0.76; naive 0.69 / 0.50 — gender-specific beats pooled on smaller samples.
- ECE: men 0.15, women 0.18 (the paper calls this "well calibrated"; the reader notes it is mediocre).
- Top features: byline-to-byline speed and angle to goal (both genders); defending players' features matter more than attackers'.
- Counterfactual run search: rotating a winger's run 30° inward raised success 47.4% → 49.2%; both wingers rotated together 47.4% → 51.2%.
- Context: 7.5% of 2022 MLS shots came from counterattacks → 9.7% of goals; NWSL 6.2% → 9.5%.
- Limitations named: label is forward-looking (frame inherits sequence's eventual outcome — value model, not a forecast); no validation set; same-sequence frames may straddle train/test; success proxy is box entry, not goals.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME — train separate models per scheme family (Shanahan-tree, Air Raid, Erhardt-Perkins) rather than one global model; the subpopulation win is the paper's core transferable finding.
- QB-BEHAVIOR — per-frame NGS GNN predicting play success (EPA>0 / explosive / TD) from 22 players + ball; counterfactual velocity-rotation search for optimal ball-carrier runs / pursuit angles (coaching + content).
- OTHER — post-turnover (INT/fumble) return-success model as the direct counterattack analog.

## Engine-actionable? (yes/no + one-line what)
Yes — replicate the CrystalConv per-frame success GNN on NGS frames (unravelsports as template), with scheme-family-specific models vs pooled; gate on ≥0.02 AUC over pooled and ECE ≤0.10 after recalibration.
