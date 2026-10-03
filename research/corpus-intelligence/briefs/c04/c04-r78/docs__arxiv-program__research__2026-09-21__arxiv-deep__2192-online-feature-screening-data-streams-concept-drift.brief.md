# docs/arxiv-program/research/2026-09-21/arxiv-deep/2192-online-feature-screening-data-streams-concept-drift.md
## What it is (1-2 sentences)
Five classical screening criteria (T-score, Fisher, Gini, Chi-square, mutual information) rebuilt as one-pass online algorithms with sparse-input handling and a fading-factor drift adaptation, so feature relevance is re-ranked incrementally as streaming data lands without a full recompute. The quantile-summary machinery provably matches offline scores (zero rank error at ε < 0.01), and adaptation beats no-adaptation on drifting streams and on 3.2M-feature URL data.

## Key metrics/methods (formulas where given, else "not specified")
- T_j = (μ₁−μ₂)/√(σ₁²/n₁ + σ₂²/n₂); Fisher_j = Σ_c n_c(μ_c−μ)² / Σ_c n_c σ_c² — mean-variance methods via exact running averages (μ_nj, MS_nj; variance = MS − μ²)
- MI, Chi-square, Gini from bin counts; ε-approximate quantile summary (Greenwald-Khanna-style, multi-level sub-summaries, PRUNE/MERGE) with exact weight preservation adjustment; on-demand aggregation into K=5 bins
- ε-approximate guarantee: |r̃⁺(x) − r̃⁻(x) − w̃(x)| ≤ ε·w(Q); their PRUNE adjustment drives LHS to zero
- Drift: fading factor α ∈ (0,1) penalizes history (μ_n = α(n−1)μ_{n−1} + x_n; sparse variant uses time anchors and universal weight maps); fading applied to tuple weights in quantile summaries
- Minibatch 250 to amortize per-feature summary visits; operating point ε = 0.001

## Data sources named
- Online-vs-offline parity: Gisette (5000×7000), Dexter (20000×600), Madelon (500×2600), Dorothea (100000×1150), SMK-CAN-187 (19993×187), GLI-85 (22283×85), URL Day0 (74110×16000), KDD12 (48957×16000)
- Drift: synthetic 1000-D stream, 100 true features, 100k samples, true-feature indices shifting every l samples
- Realistic: 20NewsGroups (723,066 binary features, 11,862 time-ordered emails), URL days 0–99 (3.2M features, 2M samples)
- Authors' implementations in MATLAB 2018b; no public repo link extracted

## Findings (numbers and facts, not vibes)
- Parity: bin-count differences → 0 for ε ≤ 0.001 on all 7 datasets; score difference ratio DR = 0 at ε ≤ 0.001; top-10% rank mismatch = 0 at ε < 0.01 even on hardest sets. Mean-variance methods are incrementally exact.
- Speed: online quantile (ε=0.001) vs offline — url: 19,094 vs 130,177 ms (~7×); dorothea: 4,285 vs 11,961 ms; gisette: 1,176 vs 4,018 ms. But at ε=0.0005 url explodes to 934,553 ms — worse than offline; precision has a sharp cost cliff.
- Drift (synthetic): with adaptation (α=0.9) strictly dominates without at every shift rate; even at the fastest shift (true set changes every 250 samples), adaptation detects all 100 true features with fewer selected features; tuning α compensates faster drift.
- 20NewsGroups + SparseFSA: MI with adaptation: error 0.061 vs 0.064 no-screening vs 0.062 without adaptation; random 70k: 0.144.
- URL (3.2M feats) + SGD: T-score with adaptation: 0.0073 vs 0.0080 no-screening vs 0.0097 without adaptation; Fisher with adaptation 0.0072 vs 0.0092. Screening runtime 63–205 s vs SparseFSA training 12,484 s — screening ~2% of training cost.
- Limitations: univariate screening ignores interactions (a feature useless alone but lethal in combination is dropped); fading factor hand-set (α=0.9), no automatic drift detection; K=5 bins fixed — coarse for heavy-tailed metrics; real-data wins small in absolute terms (0.061 vs 0.064); classification-only framing (GSE's log-loss targets need scores re-derived).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: The engine's always-on feature monitor — maintain online T-score/Fisher/MI over the pooled feature streams (gse-lab + catch22 + signatures + cross features) with fading memory, emitting a re-ranked feature list + drift flags (rank moved > 20 places week-over-week) each Tuesday as the weekly refresh begins. Nothing in the engine does incremental screening today — selection is batch and manual.
- TRUST-SIGNAL: drift-triggered reselection (swap production feature set only when top-40 Jaccard similarity between consecutive months < 0.7) turns continuous adaptation into an auditable regime-change detector — each feature-set change is an event the pick desk can backtest and explain.
- INFERENCE: feature relevance drifts across NFL eras; the fading-factor machinery formalizes "which signals matter NOW" without a full recompute — relevant to regime shifts like coaching changes or rule changes.

## Engine-actionable? (yes/no + one-line what)
Yes — implement online T-score/Fisher with fading (and quantile-summary MI at K=8, ε=0.001) as a weekly feature monitor over the chronological game stream, emitting re-ranked features + regime-drift flags into the Tuesday refresh; ~3 engineer-days, with a pre-registered accept gate (faded top-40 matches-or-beats full-history offline top-40 on 2019–2024 walk-forward log-loss, rank-mismatch < 1% parity on static snapshot).
