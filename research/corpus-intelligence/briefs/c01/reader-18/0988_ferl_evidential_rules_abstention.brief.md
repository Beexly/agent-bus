# arxiv-program/research/2026-09-21/arxiv-deep/0988-ferl-evidential-rules-abstention.md
## What it is (1-2 sentences)
A 2026 arXiv paper (2608.05859v1, Fumanal-Idocin & Andreu-Perez) introducing FERL (Fast Evidential Rule Learning): a fuzzy rule-tree learner whose predictions are natively Dempster–Shafer evidential in one deterministic pass, yielding a point label, a credal set, abstention (set = whole frame), and an OOD signal — with attribute-level anomaly attribution.

## Key metrics/methods (formulas where given, else "not specified")
- Fuzzy splits: μ_θ,h(x_f) = min(1,max(0,(θ+h−x_f)/(2h))); θ = median of bootstrap (B=25) per-resample Gini-optimal cuts; h = γ·MAD; greedy growth with rule budget R (compact ≤15, medium ≤50, deep ≤200), max depth (5/12), patience, min gain δ; split subsample cap 10,000 (only when N>50k).
- Evidential output (closed form, leaves-only for deep variant): m̃(Θ)=Π_o(1−φ_o); m̃({c})=Π_o(1−φ_o+φ_o p_o(c))−Π_o(1−φ_o); normalize by Z; Bel(c)=m({c}), Pl(c)=m({c})+m(Θ); ignorance-margin set S(x)={c : m({c}) ≥ max_j m({j}) − m(Θ)} — classes within the ignorance margin of the best class; abstention ⟺ S(x)=Θ. Firing strength φ_o(x) becomes mass on the class distribution, residual 1−φ_o(x) mass on ignorance.
- Repeated Dempster combination of nested (ancestor+descendant) nodes monotonically shrinks ignorance (Z′≥a ⇒ ignorance cannot grow with an added source) — hence deep trees combine leaves only.
- Gini-descent proposition: G(p)−αG(p_L)−(1−α)G(p_R)=α(1−α)∥p_L−p_R∥²₂≥0; routing-mass conservation Σ_ℓ φ_ℓ=1.
- Geometric OOD: bounded-support memberships crop fuzzy sets to the node-observed feature range; routing-mass loss decomposes per node/feature, naming the responsible attribute; near-OOD via per-node diagonal-Gaussian models of unsplit features (firing-weighted Mahalanobis).
- Lipschitz stability (Proposition 1): unnormalised masses are O(KDλ)-Lipschitz; on Z≥τ, ∥BetP(·|x)−BetP(·|x′)∥₁ ≤ κKDλ/τ·∥x−x′∥∞; local robustness certificate: predicted class unchanged for ∥x−x′∥∞ < Δ(x)/(2L_T).

## Data sources named
30 KEEL tabular datasets (146–19,020 samples, 6–64 features, 2–11 classes), stratified 5-fold; OOD via leave-one-class-out; concept-bottleneck CUB-200 and AwA2; graded covariate shift perturbation levels k. No sports or temporal data. Code release promised but pending.

## Findings (numbers and facts, not vibes)
- 30 KEEL datasets: FERL-deep 83.23% acc (best rule learner, statistically significant vs all rule learners, Holm-corrected Wilcoxon; indistinguishable from LR 81.13 only); AURC 9.21 (vs RF 6.26, GB 6.60). Structured deltas: wins on curved low-dim boundaries (banana +32.8 over LR), loses on oblique high-dim linear (twonorm −11.9, vehicle −7.7) — intrinsic to rule learning.
- Leaves-only Dempster ablation: acc 83.18, coverage 92.31, ignorance 22.93 — beats all-node (acc 80.62, ignorance 0.07, coverage 80.69) and Denœux's cautious rule (acc 69.58, over-conservative).
- Set-valued (u65/u80 utility-discounted accuracy, Zaffalon 2012): FERL-deep 0.80/0.83 vs NCC 0.79/0.80; determinacy 0.74, coverage 0.92, mean size 1.70; MLP-Conformal covers 0.95 but with sets of 2.17.
- OOD leave-one-class-out: FERL-deep AUROC 77.66 vs kNN-distance 77.38, Mahalanobis 74.42, Isolation Forest 70.33; rejects 36.47% of novel-class inputs at 95% retained acceptance — matches dedicated detectors with no separate detector.
- Geometric-OOD toggle: firing-based AUROC 47.03→99.29, ignorance-based 23.19→98.62; in-distribution firing unchanged (99.67).
- Concept-bottleneck: per-concept isotonic calibration lifts CUB-200 59.38→65.18%; AwA2 AUPR-Out 68.3 (best), novel-class rejection 57.2%.
- Graded covariate shift (k=1): FERL DS-conformal keeps 77.3% coverage by widening sets (1.35→4.10) vs global conformal falling to 55.0% at fixed size 1.09.
- Cost: median fit 0.26 s (one CPU), scores a fold in 1.5 ms — 10× faster than FURIA, 500× faster than FUCS at inference.
- Baselines: CART, C4.5, FIGS, FURIA, FUCS (DS), RRL, RL-Net, NeuRules, SamRuLe, LR, NCC, CDT, EDL, MLP-Conformal (APS α=0.1), RF, GB; OOD: Mahalanobis, kNN distance, Isolation Forest, softmax entropy.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Abstention architecture for the pick pipeline: FERL abstention layer (≤50 rules) on matchup features → publish only singletons, abstain when S(x)=Θ or ignorance exceeds threshold; dual-gate with 0987's conformal guarantees (FERL rejects on evidence grounds, conformal on guarantee grounds).
- (TRUST-SIGNAL) Attribute-attributed abstention: routing-mass decomposition names the anomalous feature when abstaining/OOD-flagging (e.g., "total moved 4 points off the training manifold while spread stayed fixed") — auditable uncertainty for the desk.
- (OTHER) Lipschitz robustness certificate Δ(x)/(2L_T): certify which published picks are stable to line movement; gate stake size on it.
- (COACHING) INFERENCE: under coaching-driven regime shifts, FERL sets widen (1.35→4.10 in the paper) instead of silently breaking — graceful degradation under scheme/tenure transitions; untested on sports data (paper's missing piece).

## Engine-actionable? (yes/no + one-line what)
Yes — build a FERL-medium abstention layer on GSE pick features (publish singletons only, abstain on S(x)=Θ), with the Lipschitz line-movement certificate gating stake size and attribute-attribution explaining every abstention; validate under temporal sports shift (regular season → playoffs) where sets should widen ≥30% while coverage degrades ≤10 pts.
