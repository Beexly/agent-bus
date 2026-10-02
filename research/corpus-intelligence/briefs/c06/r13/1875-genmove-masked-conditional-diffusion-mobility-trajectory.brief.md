# arxiv-program/research/2026-09-21/arxiv-deep/1875-genmove-masked-conditional-diffusion-mobility-trajectory.md
## What it is (1-2 sentences)
GenMove (arXiv:2501.13347): one masked conditional diffusion model that unifies mobility-trajectory generation, recovery, and prediction — five mask strategies encode the task, a conditional controller enables controllable generation, and it zero-shot transfers to unseen users. Adjudicated ADAPT: the only generative (diffusion) method in the trajectory lane, giving GSE synthetic rare-play generation, missing-frame recovery, and controllable counterfactual play generation.
## Key metrics/methods (formulas where given, else "not specified")
- Mask conditioning: e_co = e_all ⊙ m (conditional observation), e_ta^0 = e_all ⊙ (1−m) (task target); 5 strategies (Random/recovery, Terminal/prediction, Complete/generation, Sequential, Circadian) mixed by adjustable ratios; user embedding p_u = LSTM_φ(h_u), controller p_u = f_ξ(r_u) (flow-based).
- Classifier-free guidance: ε̃_θ = (1+ω)ε_θ(e_ta^t,t|e_co,p_u) − ωε_θ(e_ta^t,t|e_co,∅); training loss L(θ) = E‖ε − ε_θ(e_ta^t,t|e_co,p_u)‖²; 1000 diffusion steps; Transformer noise predictor (4 layers, 8 heads) on 128-dim embeddings; evaluation: generation (JSD on Distance/Radius/Duration/Daily-loc/Density/Trip), recovery (Recall, MAP, Distance), prediction (Accuracy@k).
## Data sources named
ISP: 90K+ users, Shanghai, 1 week, cellular base-station trajectories; MME: 6K+ users, Nanchang, 1 week, region-ID trajectories; 70/10/20 user split; proprietary carrier data, no code link stated. 8× RTX 2080 Ti; 5 runs averaged.
## Findings (numbers and facts, not vibes)
- Generation: ~13% average improvement over baselines (TimeGEO, MoveSim, VOLUNTEER, PateGail, DiffTraj) across JSD metrics; recovery ~6% improvement on Distance.
- Next-location prediction: only close to the best baseline — the paper honestly admits generality costs single-task peak performance.
- Long-term prediction (8 steps): significantly outperforms all baselines, gap widening with horizon; scarcity-constrained prediction: best.
- Zero-shot (unseen users): Accuracy@5 +18% (scarcity-constrained), ~+20% (long-term 8-step) vs best baseline. Mask-ratio analysis: optimal at 0.8, not 1.0 — multi-task training helps single tasks. Exact table values figure-rendered (qualitative margins reported).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (COACHING) Controllable counterfactual play generation ("generate a red-zone play with these properties"; formation/personnel controller replacing radius-of-gyration; blitz-exploit adversarial scenarios) — a direct coaching tool per the file's improvement experiment.
- (QB-BEHAVIOR) INFERENCE — synthetic augmentation of data-scarce plays (game-winning drives, trick plays) and missing-frame recovery for tracking gaps; zero-shot-to-unseen-users maps to unseen players/teams for early-season prediction with new personnel.
- (SCHEME) INFERENCE — formation-conditioned generation testing whether the model learns formation-conditional play distributions (charted-concept JSD ≤0.20 target), i.e., a generative scheme library.
## Engine-actionable? (yes/no + one-line what)
Yes — train masked conditional diffusion on NFL 10Hz tracking (football-native masks + player/team embeddings); adopt only if generated-play JSD ≤0.15 on yards-gained (vs ≥0.25 Markov) AND zero-shot long-horizon prediction on unseen teams beats the best baseline by ≥10% Accuracy@5.
