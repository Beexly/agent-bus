# docs/arxiv-program/research/2026-09-21/arxiv-deep/0141-counterfactual-optimization-of-baseball-pitch-sequences.brief.md
## What it is (1-2 sentences)
Counterfactual optimization of baseball pitch sequences: a Transformer predicts in-play probability for putaway pitches, then each final pitch (and setup pitch) is replaced with every feasible alternative to find the sequence minimizing that probability, with per-pitch gains translated into season-level K/9, ERA, and opponent-SLG estimates via regression. The ledger verdict is ADAPT — the two-stage micro-decision → macro-stat bridge pattern transfers to NFL coaching-decision counterfactuals even though the baseball specifics do not.
## Key metrics/methods (formulas where given, else "not specified")
- Base model: two-pathway Transformer encoder — 6×7 pitch-sequence matrix (7 per-pitch features: horizontal/vertical location, effective speed, spin rate, spin axis, horizontal/vertical movement) → linear projection → learnable positional embeddings → Transformer encoder blocks → masked mean pooling → dense; 15-dim context vector (count, outs, inning, top/bottom, runners, score differential, times-through-order, batter's prior-season K/HR/ISO/BA/OPS) → separate dense; concatenated → sigmoid output: P(in-play) for final pitch.
- Hyperparameters: embedding 256, 4 heads, feedforward 512, 2 encoder blocks, 64/32 dense units; LR 1e-4, batch 512, ≤200 epochs, early stopping on validation AUC (patience 10); binary crossentropy, Adam; classification threshold 0.43 (maximizing validation F1).
- Counterfactual: p* = argmin_{p′ ∈ feasible alternatives} f̂(x_{p′}, c) — every pitch type × 6×6 location grid (horizontal −0.708…0.708 ft; vertical normalized 0.00–1.00 in 0.20 steps), holding sequence and context fixed; 8,981 in-zone final-pitch samples.
- Season-level bridge: ŝ = g(Θ) (linear regression from pitcher mean adjusted output to stat), Δs = ŝ* − ŝ = g(Θ*) − g(Θ).
- Adjusted output: q̂_{x,z} = p̂_{x,z} + λ·SLG_{x,z}, λ = 1.25 (scanned 0.0–2.0 in 0.25 steps to maximize summed |correlations| across the three season stats). Velocity bands: high >92.5 mph, medium 86.7–92.5, low <86.7 mph; SLG computed per band × 40 location areas.
- Command proxied by averaging-window sizes 3/4/5 on the location grid.
## Data sources named
- MLB Statcast pitch-level data, 2018–2025 regular seasons (excluding shortened 2020), via pybaseball (public).
- 100,669 plate appearances from 265 pitchers; train 84,182 (2018–2024), test 16,487 (2025); validation = 10% of train. Screening: min-IP pitchers; PAs ending after two strikes with swing-out or fair-territory in-play.
- Code: https://github.com/takamido/Pitch_sequence_analysis.
## Findings (numbers and facts, not vibes)
- Base model test (2025, 16,487 samples, threshold 0.43): accuracy 0.756, precision 0.755, recall 0.879, F1 0.812, ROC AUC 0.811. Confusion: actual in-play — 3,774 predicted in-play, 2,827 predicted swing-out; actual swing-out — 1,194 predicted in-play, 8,692 predicted swing-out. Best-of-8 tuning run: validation AUC 0.808 (range 0.801–0.808).
- Pitcher-level mean adjusted-output ↔ season-stat correlations (n=52): K/9 r = −0.788; oSLG r = 0.491; ERA r = 0.466.
- Estimated season-stat gains from final-pitch optimization (command windows 3/4/5): K/9 +3.54 / +1.80 / +1.26; ERA −1.28 / −0.65 / −0.45; oSLG −0.06 / −0.03 / −0.02. Setup-pitch optimization (narrow/wide): K/9 +1.23 / +1.10; ERA −0.44 / −0.40; oSLG −0.02 / −0.02.
- Reference spreads of the 52 target pitchers: 1.48 (K/9), 0.90 (ERA), 0.04 (oSLG) — paper argues gains are large relative to these.
- Optimized pitch-type frequencies: four-seam 3,063→1,868; sinker 1,399→112; changeup 1,105→2,047; slider 989→1,720; curveball 595→821; cutter 452→611. Setup combos: middle-velocity pairings up (middle–fast 542→909, middle–slow 420→715); LO–LO 1,090→732; HI–LO 386→832.
- Caveats in the file: all counterfactual gains are measured inside the model's own predictions (no ground-truth validation); no batter adaptation (optimized strategies concentrate on a few combos); window-3 gains may reflect command, not sequencing; single-objective (strikeout) only; season bridge fit on n=52 pitchers; "setup pitch" assumption questionable for unintentional balls.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: the two-stage counterfactual framework is the template for per-coach decision-quality estimation (swap the actual 4th-down call for the model's optimal one, hold context fixed, aggregate per coach, bridge to season wins/EPA via regression).
- OTHER: micro→macro regression-bridge methodology; command-vs-strategy confounding (window-size effect) as an NFL analogue to separating play-call quality from execution quality; no-batter-adaptation warning applies to any NFL opponent-adjustment lane.
## Engine-actionable? (yes/no + one-line what)
Yes — port the micro-counterfactual → season-stat bridge to NFL 4th-down coaching decisions on nflverse pbp (estimate per-coach Δwins upper bounds), treating estimates as upper bounds per the paper's own caveats.
