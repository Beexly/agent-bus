# docs/arxiv-program/research/2026-09-21/arxiv-deep/1825-llm-sr-scientific-equation-discovery-via-programming-with-llms.md
## What it is (1-2 sentences)
LLM-SR (Shojaee et al., arXiv 2404.18400): an LLM proposes equation PROGRAM skeletons (Python functions with placeholder params), an off-the-shelf optimizer (numpy+BFGS / torch+Adam) fits params, and an islands-model experience buffer evolves the population; it beats pure symbolic-regression search especially on out-of-domain extrapolation. GSE verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
f* = argmax_f E_d[Score_T(f,D)]; fitness s = Score_T(f,D) = −MSE(ŷ, y). Islands model: P_t^i ← P_t^i ∪ {(f,s): s > s_best^i}; cluster sampling P_i = exp(s_i/τ_c)/Σ exp(s_i'/τ_c); program sampling P(f_i) ∝ exp(−l̃_i/τ_p) (favors high score + short programs). Iteration: sample k examples → update prompt → LLM generates b skeletons → evaluate → buffer. Metric = Normalized MSE (NMSE), ID and OOD splits; baselines gplearn (pop 500, 2M gens), PySR, DSR, uDSR, LMX, FunSearch all run 2M+ iterations vs LLM-SR's 2.5K iterations.
## Data sources named
Four custom anti-memorization benchmarks: Oscillation 1, Oscillation 2, E. coli bacterial-growth (real experimental microbiology data, dB/dt = f_B(B)·f_S(S)·f_T(T)·f_pH(pH)), Stress–Strain (real experimental materials data). Feynman-120 used as memorization control.
## Findings (numbers and facts, not vibes)
LLM-SR (GPT-3.5 and Mixtral-8x7B backbones) consistently outperforms all SR baselines on all 4 benchmarks, ID and OOD, at 2.5K vs 2M+ iterations. E. coli OOD: LLM-SR NMSE ~0.0037 vs all baselines >1 (worse than predicting the mean). Discovered equations recover true symbolic terms better than baselines and come with LLM-generated term explanations. Ablations: multi-island > single-island; skeleton+optimizer decoupling essential; numpy+BFGS best for few-param problems, torch+Adam for large-scale. Memorization control: on Feynman-120 the method solves problems in <20 iterations (recitation evidence — hence custom benchmarks).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: LLM-prior + evolution architecture for inventing sports metrics (GSE-SR); analyst-prose prior replaces physics priors; prompt must forbid known metrics (passer rating, QBR, EPA) to defeat recitation.
- OTHER: memorization warning — LLM asked to "invent a QB metric" recites passer rating; QB-BEHAVIOR relevant only as the domain where the guard applies.
- OTHER: islands experience buffer with Boltzmann best-score/short-program sampling is a reusable GSE search skeleton.
## Engine-actionable? (yes/no + one-line what)
Yes — build "GSE-SR": LLM proposes metric skeletons from analyst-prose specs, scipy BFGS fits on nflverse train, islands buffer evolves, scored on OOD future seasons vs PySR baseline with a novelty (not-recitation) gate.
