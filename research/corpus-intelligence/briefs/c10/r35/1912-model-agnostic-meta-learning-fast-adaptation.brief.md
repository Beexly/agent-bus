# arxiv-program/research/2026-09-21/arxiv-deep/1912-model-agnostic-meta-learning-fast-adaptation.md
## What it is (1-2 sentences)
Deep-read ledger of Finn, Abbeel & Levine (2017), Model-Agnostic Meta-Learning (MAML): meta-learns a network initialization θ explicitly optimized so that a few gradient steps on K new-task examples produce good generalization. Verdict in file: ADAPT — the direct template for GSE's new-regime margin adaptation (e.g., rookie QB adapter).

## Key metrics/methods (formulas where given, else "not specified")
- Meta-objective: min_θ Σ_{T_i∼p(T)} ℒ_{T_i}(f_{θ−α∇_θℒ_{T_i}(f_θ)}) (Eq. 1)
- Inner update: θ′_i = θ − α∇_θℒ_{T_i}(f_θ); outer update: θ ← θ − β∇_θΣ_{T_i}ℒ_{T_i}(f_{θ′_i})
- First-order approximation (drop second derivatives, evaluate meta-gradient at θ′_i): "nearly the same" accuracy at ~33% compute speedup
- RL instantiation (Eq. 4): −E[Σ_t R_i(x_t,a_t)]; REINFORCE inner, TRPO outer — flagged as not portable to GSE's offline weekly setting; supervised instantiation is the relevant one

## Data sources named
Synthetic sine waves (amplitude U[0.1,5.0], phase U[0,π], x∈[−5,5]); Omniglot; miniImageNet; MuJoCo locomotion (half-cheetah, ant) + 2D navigation via rllab. Code: github.com/cbfinn/maml, github.com/cbfinn/maml_rl.

## Findings (numbers and facts, not vibes)
- Sine regression: adapts "with only 5 datapoints" where pretrain+fine-tune fails without catastrophic overfitting; when K points lie in one half of the input range, MAML still infers amplitude/phase in the other half (learned periodic structure, not local interpolation); continues improving over additional gradient steps without overfitting despite being trained for one-step performance. (INFERENCE from reader: exact scalar MSE deltas not printed — qualitative claim.)
- Omniglot 5-way: 98.7 ± 0.4% (1-shot), 99.9 ± 0.1% (5-shot); 20-way: 95.8 ± 0.3% / 98.9 ± 0.2% — narrowly above matching nets, memory modules, MANN; uses fewer overall parameters than matching nets and meta-learner LSTM.
- miniImageNet 5-way: 48.70 ± 1.84% (1-shot), 63.11 ± 0.92% (5-shot) vs meta-learner LSTM 43.44/60.60, matching nets 43.56/55.31, fine-tune 28.86/49.79. First-order approx: 48.07 ± 1.75% / 63.15 ± 0.91% — "nearly the same."
- RL: cheetah/ant adapt to new goal velocities/directions in "two or three gradient steps"; 2D navigation adapts in a single gradient update. Pretraining "in some cases worse than random initialization."

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 5-point structural extrapolation (periodic structure from half-range data): OTHER (meta-learning mechanism for regime adaptation — the "rookie QB adapter" template: fine-tune a league-wide meta-init on K∈{2,4} observed games)
- First-order approx same accuracy at 33% less compute: OTHER (production feasibility — adaptation is just a few gradient steps per team per week)
- No-overfit behavior over extra gradient steps despite one-step training: OTHER (safety property for online weekly recalibration)
- Pretraining worse than random init on RL tasks: OTHER (cautionary — "fit on all history" baselines can hurt; supports explicit meta-training)

## Engine-actionable? (yes/no + one-line what)
Yes — meta-train a small tabular MLP (game features → margin) over historical team-seasons as tasks (support = first K games, query = rest), meta-train with K∈{2,4} using the first-order approximation, adopt iff it beats pretrain+fine-tune by ≥0.02 Brier on 2023–2025 new-regime (rookie QB, new HC) win prediction with performance non-decreasing over 1→5 inner steps.
