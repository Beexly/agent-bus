# arxiv-program/research/2026-09-21/arxiv-deep/0988-ferl-evidential-rules-abstention.md
## What it is (1-2 sentences)
Full read of Fumanal-Idocin & Andreu-Perez (2026, arXiv:2608.05859v1): FERL — Fast Evidential Rule Learning — a fuzzy rule-tree learner whose predictions are natively Dempster–Shafer evidential, yielding point labels, credal sets, abstention, and OOD signals in one deterministic pass with no post-hoc calibration. Ledger verdict: ADAPT — the abstention lane's interpretable mechanism, complementary to conformal guarantees.

## Key metrics/methods (formulas where given, else "not specified")
- Fuzzy splits μ_θ,h(x_f) = min(1,max(0,(θ+h−x_f)/(2h))); θ = median of bootstrap (B=25) Gini-optimal cuts; h = γ·MAD; greedy growth with rule budget R (≤15/50/200), max depth (5/12), min gain δ
- Per-node mass: m_o({c}) = φ_o·p_o(c), m_o(Θ) = 1−φ_o; combined closed form m̃(Θ)=Π_o(1−φ_o); m̃({c})=Π_o(1−φ_o+φ_o·p_o(c))−Π_o(1−φ_o); normalize by Z
- Credal set S(x) = {c : m({c}) ≥ max_j m({j}) − m(Θ)}; abstention ⟺ S(x)=Θ; Bel(c)=m({c}), Pl(c)=m({c})+m(Θ)
- Leaves-only Dempster combination for deep trees (nested-node combination monotonically shrinks ignorance — dependence argument); bounded-support OOD: firing-mass decomposition names the responsible attribute
- Lipschitz stability (Prop 1): ∥BetP(·|x)−BetP(·|x′)∥₁ ≤ κKDλ/τ·∥x−x′∥∞ on Z≥τ; robustness certificate: class unchanged for ∥x−x′∥∞ < Δ(x)/(2L_T)

## Data sources named
- 30 KEEL tabular datasets (146–19,020 samples, 6–64 features, 2–11 classes), stratified 5-fold; CUB-200 and AwA2 concept-bottleneck sets; no sports or temporal data demonstrated

## Findings (numbers and facts, not vibes)
- 30 KEEL: FERL-deep 83.23% acc (best rule learner, significant vs all rule learners, Holm-corrected Wilcoxon; ≈ LR 81.13); AURC 9.21 (vs RF 6.26, GB 6.60); still 2.4 pts behind RF 86.6
- Set-valued: FERL-deep u65/u80 0.80/0.83 vs NCC 0.79/0.80; coverage 0.92, mean set size 1.70 (MLP-Conformal covers 0.95 but with size 2.17)
- OOD (leave-one-class-out): AUROC 77.66 vs kNN-distance 77.38, Mahalanobis 74.42, Isolation Forest 70.33 — matches dedicated detectors with no separate detector; rejects 36.47% of novel-class inputs at 95% retained acceptance
- Bounded-support toggle: geometric-OOD firing AUROC 47.03→99.29, ignorance-based 23.19→98.62; in-distribution firing unchanged (99.67)
- Under graded covariate shift (k=1): DS-conformal keeps 77.3% coverage by widening sets (1.35→4.10) vs global conformal falling to 55.0% at fixed size 1.09
- Cost: FERL-deep fits in median 0.26 s (one CPU), scores a fold in 1.5 ms — 10× faster than FURIA, 500× faster than FUCS at inference
- Structure: wins on curved low-dim boundaries (banana +32.8 over LR); loses on oblique high-dim linear (twonorm −11.9) — intrinsic to axis-parallel rule learning

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — native abstention (S(x)=Θ) + attribute-level anomaly attribution ("total moved 4 pts off manifold while spread fixed") gives auditable, explainable no-publish decisions — strongest trust-signal mechanism in this chunk
- OTHER — pick-selection dual-gate (FERL evidence-grounded abstention + conformal guarantee-based rejection); Lipschitz certificate gates stake sizing on line-move stability; graceful degradation under regime shift (sets widen instead of silently breaking — playoffs/weather regimes)

## Engine-actionable? (yes/no + one-line what)
Yes — build a FERL abstention layer over matchup features (Elo diff, rest, injuries, weather, market moves): publish only singleton sets, abstain when S(x)=Θ or ignorance exceeds threshold, and use the routing-mass decomposition to name the anomalous feature on every abstention
