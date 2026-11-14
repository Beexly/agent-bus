---
source: "2013 - Trouble with the Curve Identifying Clusters of Pitchers using Improved Classification Techniques - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2013"
pages: 14
model: deepseek/deepseek-v4.1-flash-1017
words: 8871
---

<NATIVE_REASONING>
The user wants a deep research analysis of this source. Note: the source is a slide deck (23 slides) but PAGES: 14, containing [PAGE N] markers? Actually the source text doesn't contain [PAGE N] markers explicitly — it has "1 / 23", "2 / 23" slide markers. The user says "PAGES: 14" and asks to cite exact [PAGE N] markers and verbatim quotes. The source has no [PAGE N] markers. I should handle this honestly: note that the source text contains slide-number markers (N / 23) rather than [PAGE N] markers, and cite by slide number verbatim. That's the honest approach — I must not fabricate [PAGE N] citations. I'll state this explicitly and cite as [SLIDE 16 / 23] etc. with verbatim quotes.

Also strict rule: ZERO BETTING LINES — never mention spreads, totals, moneylines, odds. This is a baseball pitch clustering paper. I must avoid betting lines. But sports research context... the prompt mentions "Crisis habit regression vs counter-trap vs clock" — that's a theory-of-mind section template. I need to write sections even though the source is about pitch clustering. I should adapt these sections to the actual content: pitfall traps in the modeling pipeline (multi-week traps meaning long-horizon failure modes), recursive theory of mind as modeling assumptions about what pitcher/batter/pitcher's team knows (the source says "Pitch type is unknown to batter" and "Pitcher's team determines what pitch type will be thrown"). Counter-trap = avoiding analytic traps. Clock = temporal drift / pitch evolution across seasons (Jon Lester curveball 2010 vs 2011), which is a real clock.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Source mentions "The resulting pitches are noisy, both in the pitchers delivery and due to other external factors, such as wind." Great — that gives a weather/duress citation. Biomechanical: pitch labels, arm, injury prediction ("predict future injury"). Also PITCHf/x measurement error, release point, acceleration.

RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. RLVR = reinforcement learning with verifiable rewards. So define counterfactual experiments that are verifiable: e.g., λ selection via cross-validation 2010 train / 2011 test — counterfactual: if λ = 0 then BIC_adj ≡ BIC, so the claimed improvement must vanish; prediction: cluster counts revert to K_max in 46/50. Another: shuffle within-cluster correlation structure (permute spin variables), prediction: BIC_adj penalty term → 0 and selection collapses to BIC. Third: label rotation invariance test — the 8-group labeling splits clustering space; predict that relabeling under sign flip of side-spin (left-handed pitcher mirror) changes labels but not cluster geometry → verifiable disagreement rate.

I need >= 1000 words across the sections, with THINK_TRACE >= 400 words.

Let me build careful formal math.

Source equations (verbatim-ish, from OCR):

1. k-means objective: argmin over k of sum_{k=1}^{K} sum_{i in C_k} ||x_i - μ_k||^2 (OCR shows "||x ¯ i − µk || 2" — bar over x suggests centroid). Cite slide 12/23.

2. Gaussian mixture: y_i | c_i, μ_k, Σ_k ~ N_3(μ_k, Σ_k); f(y; K) = sum_{k=1}^{K} f_k(y_i | c_i) π(k).

3. BIC(K) = -2 log( f̂(Y; K) ) + g(K,d)·log(n).

4. BIC_adj(K) = BIC(K) + λ * sum_{k=1}^{K} sum_{i=1}^{d} sum_{j=i+1}^{d} -log|r_kij| — OCR shows "�di=1 �dj=i+1 log|rkij|" with a minus sign before 1: "_−_1 �dj = _i_ +1 log|rkij|". Hmm: "BIC_adj(K) = BIC(K) + λ ∗ sum_{k=1}^{K} sum_{i=1}^{d} −1 sum_{j=i+1}^{d} log|r_kij|". Likely BIC_adj(K) = BIC(K) + λ Σ_k Σ_{i} Σ_{j>i} −log|r_kij| = BIC(K) − λ Σ log|r_kij|. Indeed since |r| ≤ 1, log|r| ≤ 0, so −log|r| ≥ 0, and penalty is positive for high |r| — "Penalizes for high intra-cluster correlation." So BIC_adj(K) = BIC(K) − λ Σ_k Σ_{i<j} log|r_kij|. Yes that's consistent with the stated intent (penalizes high correlation). I'll write it that way and flag the OCR ambiguity (the −1 factor).

Also average linkage distance: d(A,B) = (1/(N_A N_B)) Σ_{i∈A} Σ_{j∈B} d(x_i, x_j). The source says "Let N represents the number of observations in clusters A and B, and d represents the individual pairwise dissimilarities" — the formula isn't rendered. I'll state it as the standard average-linkage formula and note it's inferred from the textual definition because the equation image did not OCR.

Units: start speed in mph (miles per hour) → SI conversion 1 mph = 0.44704 m/s. Spin in rps (revolutions per second) → SI: rad/s = 2π × rps. Also could be expressed as revolutions per minute. Nathan 2007 derivation. Top spin sign convention: negative top spin for four-seam? In the table Barry Zito four-seam: Top Spin −84.59, Side Spin 56.17; curveball top spin +50.39 table shows positive. Hmm, sign conventions: in PITCHf/x, the "spin" derived from the Magnus acceleration. Note the data table has 4-seam with negative top spin and curveball positive — indicates sign convention is tied to acceleration direction (induced vertical break), not literal "top spin". That's a nice gray-zone audit point: labeling ambiguity, "Top Spin" column sign may encode direction (rise vs drop) rather than topspin magnitude. Tim Wakefield entries: two rows both labeled four-seam at 75.20 and 75.30 mph with top spin −107.19 and −113.89 — that's the knuckleballer, so labels are mis-assigned or the knuckleball is being called a four-seam — evidence the reference labels / OCR table are noisy. Great gray-zone: the handout's own table shows a knuckleball pitcher (Wakefield) with "Four-seam" labels, evidencing label noise in the very dataset used for supervised comparison. Actually careful: the table's "Label ..." column is truncated. Two nearly identical rows both labeled four-seam at 75 mph for Wakefield — Wakefield threw a knuckleball at ~65-68 and a fastball at ~72-75. So plausibly correct-ish. But the point stands: labels truncated, ambiguous. I'll present it as an audit item, not a claim.

Breakdown regimes / singularities:
- BIC_adj: log|r_kij| → −∞ as r_kij → 0. So the penalty term −log|r| → +∞ as r → 0. That's a genuine singularity: as the intra-cluster correlation of a pair goes to zero, −log|r| diverges to +∞, so BIC_adj → +∞ and the criterion blows up. This is a serious flaw — the penalty is unbounded at r=0, which is the *ideal* configuration according to the "uncorrelated within clusters" prior. So the criterion is non-monotone and unbounded: it penalizes r near 0 infinitely, and gives zero penalty at |r| = 1. Wait: −log|r| at |r|=1 is 0 → no penalty for perfect correlation; at r→0 → +∞ → infinite penalty for independence. That's inverted relative to the stated intent "Penalizes for high intra-cluster correlation"! Let me re-check.

If intent is to penalize high intra-cluster correlation, the penalty should be increasing in |r|. −log|r| is decreasing in |r|. So either the OCR sign is wrong (i.e., the formula is BIC + λ Σ log|r|, which is ≤ 0 and... no, that's a reward for correlation), or it's BIC − λ Σ log|r| ... wait, BIC(K) + λ Σ (−log|r|) = BIC + λ Σ (−log|r|). Since −log|r| ≥ 0 and increasing as |r|→0. Hmm.

Let's consider: maybe the intent is a *reward* structure differently: prior says within-cluster variables should be uncorrelated. So a model with high intra-cluster correlation is penalized. Penalty ∝ Σ log|r| would be negative for |r|<1, i.e., it would *decrease* BIC, rewarding correlation. So BIC + λ Σ log|r| rewards correlation — opposite.

Alternatively, the sign in OCR: "BIC_adj(K) = BIC(K) + λ ∗ Σ_{k=1}^{K} Σ_{i=1}^{d} −1 Σ_{j=i+1}^{d} log|r_kij|". Reading literally: BIC + λ Σ_k Σ_i (−1) Σ_j log|r_kij| ... the "−1" might be a stray minus from "...Σ_{i=1}^{d} -1 Σ_{j=i+1}^{d} log|r_kij|" = BIC + λ Σ_k Σ_i Σ_j (−log|r_kij|). That gives penalty increasing as |r| → 0. That contradicts the stated purpose.

Most coherent reconstruction consistent with the stated purpose ("Penalizes for high intra-cluster correlation") and with BIC_adj outperforming BIC (BIC choosing max K in 46/50 — meaning BIC over-selects clusters; BIC_adj must add a penalty that grows with K, selecting fewer clusters): the number of pairs grows as K·d(d−1)/2, and with more clusters each cluster's r values... Adding more clusters reduces within-cluster correlation (subclusters become tighter, more correlated actually). Hmm — with more clusters, clusters become smaller and more homogeneous → higher intra-cluster correlation → penalty larger → BIC_adj favors fewer clusters. That's consistent: penalty ∝ Σ_k Σ_{i<j} |r| or −log|r|? With more clusters, |r_kij| → 1 (tight clusters, but then correlations become... actually tighter clusters do have higher correlation among the variables). So −log|r| decreases as |r|→1, meaning merging... ugh. Both directions can be argued. 

Key: the honest move is to state the exact OCR string, give the two candidate reconstructions, and give the singular/breakdown behavior of each. Under reconstruction A: BIC_adj = BIC − λ Σ log|r|, penalty unbounded (+∞) as any r → 0, zero at |r|=1 → pathological, and selection would push to configurations where at least one pair has |r|≈1 (rank deficiency). Under reconstruction B: BIC_adj = BIC + λ Σ log|r| = BIC − λ Σ (−log|r|), which rewards correlation and is unbounded below as r→0 → the criterion diverges to −∞, selecting K where all pairs are near-orthogonal — degeneracy in the opposite direction. Either way there's a genuine singularity at r_kij = 0 that must be regularized, e.g. −log(|r| + ε) or using Fisher z or a bounded functional like (1 − |r|)^2 or −½log(1−r²). Great — this is a real, verifiable mathematical critique. I'll present it: the |r|→0 singularity means the criterion is unbounded and the sign convention is decisive; must be regularized with ε or a bounded kernel. This is a strong "gray-zone audit."

Also multicollinearity: Σ_k in 3 dimensions may be near-singular (n_k < 3 pitches in a cluster, or collinear spin axes). GMM with full covariance Σ_k in d=3 needs n_k ≥ 4 for nonsingularity; cluster with 2 pitches → singular Σ_k → likelihood → +∞ (degenerate unbounded likelihood). That's the classic GMM unbounded-likelihood singularity: as a component collapses onto a point, |Σ_k| → 0 and log-likelihood → +∞. This is a hard breakdown regime and directly relevant: relief pitchers with 2 pitch types (Kimbrel: "four-seam fastball and curveball") — a 2-cluster fit with small clusters.

Also BIC identifiability: label switching; K not identifiable in mixture (permutation symmetry), so BIC comparisons fine but parameter interpretation needs ordering constraint.

Also the "uncorrelated" prior is questionable: velocity and spin are physically coupled (Magnus force depends on spin; release mechanics couple velocity to spin axis). So an independence prior is a modeling assumption that may be wrong — cite slide 16 "Prior knowledge: clustering variables should be uncorrelated."

Also "Pitch type is unknown to batter" + "Pitcher's team determines what pitch type will be thrown" — the label is a *social* fact (catcher's sign), not a physical fact. So clusters are defined in physical feature space but the labels are behavioral intents — a category error. That's the recursive-theory-of-mind content: the latent class is intent (sign), the observed is physics; two different intents can produce the same physics (cutter vs. slider, "Two Seam" vs "Cutter"), and one intent can produce multiple physics clusters. Hence "Labels clusters off of pitch characteristics, not pitcher intent" (slide 20) — the authors explicitly concede this. Excellent: verbatim quote, and it's the core epistemic concession. That's the anchor for RECURSIVE_THEORY_OF_MIND.

Also "No official record of pitch type thrown" — verifiable ground truth absent → the RLVR reward can't be label accuracy; it must be internal consistency (e.g., cross-season stability, held-out predictive log-likelihood, cluster-count stability under resampling).

Now units and dimension analysis:
- Feature vector y ∈ R^3 with components (v [mph], ω_topsin [rps], ω_side [rps]). Mixed units → k-means Euclidean distance is unit-dependent. ||x_i − μ_k||² with x in (mph, rps, rps) mixes mph² and rps². This is a real defect: k-means objective is not invariant to unit choice; 1 mph = 0.44704 m/s; 1 rps = 2π rad/s. Conversion factors change relative scaling: mph → m/s multiplies by 0.44704; rps → rad/s multiplies by 6.2832. So the ratio of spin-scale to speed-scale shifts by 6.2832/0.44704 ≈ 14.06×. So cluster partitions under SI vs imperial differ. That's a verifiable counterfactual! Prediction: k-means partitions/A RI change when features are converted to SI or standardized; and GMM with full covariance is affine-equivariant (invariant to invertible linear maps) — key asymmetry: MBC with full Σ_k is affine invariant, k-means is not. That's a strong, checkable claim using the paper's own methods. Excellent for RLVR counterfactual.

Actually, is MBC with full covariance and BIC affine invariant? The maximized likelihood is invariant under affine transformation (up to constant), and the BIC penalty g(K,d)log n depends only on d and K, so BIC is invariant under invertible affine maps. Yes. Whereas BIC_adj depends on r_kij — correlation coefficients are invariant under *diagonal* scaling (changes of units) but not under general linear mixing/rotation. So BIC_adj is scale-invariant but rotation-dependent. And k-means is neither. So three methods with three different invariance groups → the entire model-selection comparison is invariance-inconsistent. That is a beautiful formal result to state. Units: correlation r dimensionless, so log|r| is dimensionless (nats if natural log); λ must be dimensionless to add to BIC (which is in nats, or "twice negative log-likelihood" units). Good unit analysis.

BIC units: −2 log L is in nats×2 → dimensionless (log-likelihood of a density with units must include the Jacobian; strictly, log-density of a dimensional variable has an offset depending on units, so BIC is only defined up to an additive constant per model — but comparisons at same K are fine; across K, the constant is the same if the variable set is the same. Fine. Actually across different K the log-density unit offsets are identical since same variables, so differences are unit-invariant. Good.)

Also g(K,d) for full-covariance GMM in d=3: parameters per component = d + d(d+1)/2 = 3 + 6 = 9; plus K−1 mixing weights → g(K,d) = K·9 + (K−1) = 10K − 1. So BIC penalty = (10K−1) log n. With n = 15,000 pitches (max), log n ≈ 9.6 → penalty increment per extra cluster ≈ 96 nats. Whereas BIC_adj adds λ Σ_k Σ_{i<j} (−log|r|) which grows like λ·3K·(typical −log|r|) ≈ 3Kλ·(say 1.0 for |r|=0.37) — so λ must be O(10) to matter at n=15,000, and O(1) at n=100. Key insight: since the BIC penalty scales with log n, a fixed λ (chosen by CV on 2010) cannot be scale-appropriate across pitchers with n from 100 to 15,000 — the relative weight of BIC_adj's correlation term shrinks as log n grows. So λ should scale with log n, or the penalty should be λ log(n) Σ(−log|r|). Verifiable prediction: the optimal λ (from 2010/2011 CV) should decrease as ~1/log n, i.e., λ*(n) ≈ c/log n; testable by refitting λ per n-stratum. That's a top-tier derived insight — dimensional/scale analysis producing a falsifiable prediction. Slide 8 gives "1000+ pitchers (100 – 15,000 pitches each)" and slide 16 gives "λ chosen via cross-validation (2010 as training data, 2011 as test data)." Excellent.

Let me also handle the average linkage formula and the "out-performs complete and single" claim (slide 13) — no metric given; unverifiable as stated. Note that "out-performs" lacks a stated loss. Good audit.

Also "In 46 of 50 pitchers, BIC chooses the maximum allowed number of clusters" (slide 19) — that's a boundary-solution diagnostic, i.e., the BIC optimum is at the constraint boundary K_max, meaning the model-selection problem is degenerate: BIC is not identifying K, it's hitting the cap. Strong point: 92% boundary solutions ⇒ the reported comparison is between a boundary-hitting criterion and a regularized one, not between two interior optima. And "All 50 cases BIC_adj out-performs BIC based on visual inspection" — visual inspection is not a verifiable reward. So the RLVR design must replace visual inspection with a computable metric. Great.

Also "Pitch evolution across time" (slide 18) — Jon Lester curveball 2010 vs 2011 labeled as two distinct clusters. That's a "clock" — temporal drift. Trap: if you hard-label 2010 curve and 2011 curve as separate pitch types, then per-season clustering produces label drift; a multi-week (or multi-season) trap is that a fixed dictionary of labels breaks; the system must allow splitting/merging over time. If labels are assigned by fixed 8-region partition of feature space (slide 20), then a genuine physical change (velocity loss, altered spin axis) becomes a *new label* rather than a *changed state of the same pitch*, causing spurious "new pitch" discoveries. That's the retrocausal genealogy trap: you'll "discover" that a pitcher added a pitch when he actually lost 2 mph.

Also "the resulting noisy pattern forms a hyper-ellipsoid" (slide 14) — geometry claim; valid only if the conditional density is Gaussian and the noise is elliptical (which requires the noise to be a linear transform of isotropic noise). Wind is mentioned as a source of noise — wind is not Gaussian-elliptical necessarily; and wind affects release? Actually wind affects the ball flight → measured movement/spin estimates (spin derived from tracking). So wind is an error source in the derived spin variables, not in the pitcher's intent → heteroscedastic, correlated with park/date → clustered errors by game date → violates i.i.d. assumption → BIC's log n penalty assumes independent observations, but pitches within a game are correlated (same release point, same weather, same fatigue). Effective sample size n_eff < n → BIC over-penalizes... actually BIC's penalty log n with n inflated (pseudo-replication) → BIC under-penalizes relative to correct n_eff → over-selects K. That EXACTLY explains "In 46 of 50 pitchers, BIC chooses the maximum allowed number of clusters"! Beautiful derivation: pseudo-replication from within-game clustering inflates n; BIC's penalty is log n while the information gain from extra components also scales with n; hmm. Let me be careful. But the argument: with clustered data, the effective sample size is n_eff ≈ n/ρ where ρ is the intraclass correlation inflation; the honest penalty is g log n_eff < g log n, so BIC would penalize *less* → over-select. Wait, BIC uses log n which is bigger than log n_eff, so BIC penalizes more than a corrected criterion, hence under-selects. Hmm, that contradicts. Let's flip: the issue with clustering is that the likelihood itself is inflated (the observed information overstates the true information), so −2log L̂ is too small (too good a fit) — the likelihood ratio grows faster than it should, so BIC under-penalizes → over-selects. Equivalently, using n_eff in the penalty while the log-likelihood is computed on n observations gives penalty g log n_eff, smaller than g log n → less penalty → more clusters. Right: to correct, you'd double-count. The principled fix is a composite/quasi-BIC: −2 log L̂ + g log n_eff with a sandwich-corrected likelihood. So the conclusion "BIC over-selects" is consistent with pseudo-replication. I'll state it as: dependence inflates the effective evidence per observation, so the log n penalty under-corrects; the fix is a composite-likelihood BIC with n_eff = n/(1+(m̄−1)ρ), where m̄ = mean pitches per game. And predict: 46/50 boundary solutions should shrink toward interior optima when the penalty uses n_eff. Testable: estimate ρ from a variance-components model on residuals within pitcher-season-game groups.

That's a very strong, source-grounded, falsifiable chain. 

Now, the THINK_TRACE must be >= 400 words of multi-hop derivation & gray-zone audit. Total >= 1000 words across sections. I'll write generously, maybe 2500-3500 words total.

I must not mention betting lines at all — avoid "odds", "spread", "total", "moneyline". Careful: "total spin" — avoid the word "total" in betting context; "total spin" is fine physically but let me use "aggregate spin" to be safe? The rule says never mention spreads, totals, moneylines, or odds. Using "total" in a physics sense could be misread. I'll avoid the word "total" entirely — use "aggregate", "magnitude". Also avoid "odds" — probably fine. Avoid "line" in betting sense; "line of code" maybe avoid. I'll use "boundary" instead of "line". Avoid "spread" — use "dispersion".

Also "handicap" no. Fine.

Structure: six XML sections exactly as named. Must include >= 1000 words total; THINK_TRACE >= 400 words.

Citation convention: I'll note the source has slide markers "N / 23" not [PAGE N]. I'll cite as [SLIDE 16/23] and give verbatim quotes. Also note the source declares 14 PAGES in the drive while the deck is 23 slides — I should flag the discrepancy honestly: "the provided text carries slide footers of the form 'N / 23' and no [PAGE N] anchors; I cite slide indices verbatim."

Let me now draft.

Equations to include (formal LaTeX, units, assumptions, breakdown):

(E1) Feature map: x_i = (v_i, τ_i, σ_i) ∈ R^3, v in mph (SI: m s⁻¹, 1 mph = 0.44704 m s⁻¹), τ,σ in rps (SI: rad s⁻¹, 1 rps = 2π rad s⁻¹).

(E2) k-means: {C_k} = argmin Σ_k Σ_{i∈C_k} ||x_i − μ_k||². Units: mph² and rps² — incommensurable; objective not invariant under unit change; not affine invariant. Breakdown: empty clusters, local minima, K must be given.

(E3) Average linkage: d(A,B) = (1/(N_A N_B)) Σ_{i∈A}Σ_{j∈B} d(x_i,x_j) — inferred; equation image did not render. Cite slide 13 and note "Let N represents the number of observations in clusters A and B."

(E4) GMM: y_i | c_i = k ~ N_3(μ_k, Σ_k); f(y;K) = Σ_k π_k f_k(y_i | c_i). Params per component in d=3: 9. Breakdown: |Σ_k|→0 gives unbounded likelihood (degenerate), needs n_k ≥ d+1 = 4 with non-coplanar points; relief pitchers with 2 pitch types risk this.

(E5) BIC(K) = −2 log f̂(Y;K) + g(K,d) log n, g(K,d) = K(d + d(d+1)/2) + (K−1) = 10K − 1 for d=3.

(E6) BIC_adj(K) = BIC(K) + λ Σ_{k=1}^K Σ_{i=1}^d Σ_{j=i+1}^d (−log|r_kij|) [literal OCR]; singularity at r→0: −log|r| → +∞, unbounded; at |r|→1, penalty → 0. Two reconstructions. Regularization: −log(|r| + ε), or −½log(1−r²) (bounded? no, also diverges at |r|→1), or (1−|r|)² bounded on [0,1]. Recommend BIC_adj^ε with ε = 1/(2(n_k−3)) (Fisher-z bias scale) or use Fisher z = artanh r.

Actually Fisher z transformation: z = artanh r, Var(z) ≈ 1/(n_k − 3). So a statistically natural penalty term is Σ (n_k−3) z²/2, i.e., a likelihood-ratio-scale penalty for departure from independence. Under H0: r=0, (n_k−3)z² ~ χ²_1. So BIC_adj could be replaced by BIC + λ Σ_{i<j} (n_kij − 3) artanh²(r_kij)/2 — principled, bounded behavior for moderate r, diverges as |r|→1 which correctly vetoes degenerate components. That's a constructive repair — great contribution. Units: nats.

(E7) Scale-consistency of λ: BIC penalty per component = g·log n = 10 log n. Correlation term per component ≈ λ·3·⟨−log|r|⟩. Ratio R(n) = 3λ⟨−log|r|⟩ / (10 log n). For the correlation term to have constant relative influence across n ∈ [100, 15000], need λ(n) ∝ log n / ⟨−log|r|⟩. Since λ is fixed by CV on pooled 2010 data, R varies by factor log(15000)/log(100) = 9.62/4.61 = 2.09 → the effective regularization is ~2× stronger for low-n pitchers. Prediction: optimal λ per n-decile should scale ≈ linearly with log n.

(E8) Effective sample size: n_eff = n / (1 + (m̄ − 1)ρ), ρ = intraclass correlation of pitch features within game; criterion BIC_c = −2 log L̂ + g log n_eff.

Now the veto layers.

CROSS_LAYER_VETO_ADJUDICATION: physical (Magnus/seam-shifted wake, spin axis), biomechanical (release point, arm slot, fatigue, injury — source: "predict future injury"), weather (wind — source quote), measurement (PITCHf/x 30+ variables, release point, acceleration; Nathan 2007 derivation). Veto logic: a cluster is admissible only if it survives all four layers. E.g., a split induced by wind-correlated error is vetoed by the measurement/weather layer; a split induced by fatigue within a start is vetoed by biomechanics unless it persists across games.

Also give a formal veto predicate: admit cluster k iff (i) n_k ≥ d+1 and Vol(Σ_k) ≤ κ·Vol(Σ_global) (non-degeneracy), (ii) permutation test p < α on cross-season stability, (iii) the cluster's centroid displacement exceeds the measurement error ellipsoid (Mahalanobis distance > 3σ_meas in each of v, τ, σ), (iv) not explained by game-date random effect (variance component < 25% of between-cluster variance).

Retrocausal genealogy: lineage — PITCHf/x 2006, Nathan 2007 spin derivation (cited on slide 8 — actually cited "Back/side spin derived from PITCHf/x data (Nathan 2007)"). Predecessors: k-means/hierarchical clustering of pitch types in the sabermetric literature; MLB's proprietary neural net classifier; Brooks Baseball; later work by the same group (Pane/Ventura/Steorts/Thomas) which became published pitch-classification work (Ventura's pitch type classification with random forests, "Pitch Type Clustering" — careful, don't overstate specific citations. I'll phrase lineage conditionally: "the CMU lineage that follows this 2013 NESS talk (Ventura et al.) moved toward supervised/mixture and公开 pitch-type models"; mark as uncertain). I should be careful about hallucinating citations. I'll frame as "the genealogical claim is structural, not bibliographic" and mark confidence.

Multi-week traps: (1) label drift across seasons (Lester's curveball relabeled 2010 vs 2011); (2) lambda drift with roster/park changes; (3) the "new pitch" false discovery when velocity declines monotonically; (4) mixture component splitting under bimodal fatigue; (5) threshold-crossing label churn in the 8-region partition.

RECURSIVE_THEORY_OF_MIND: three agents — pitcher, catcher/team (sign caller), batter, and the analyst/algorithm. Source quotes: "Pitcher's team determines what pitch type will be thrown", "Batter doesn't know what type of pitch will be thrown", "No official record of pitch type thrown". So the latent variable is a *private* intentional state. The algorithm observes only its physical shadow. "Crisis habit regression vs counter-trap vs clock": interpret as (a) crisis habit regression = a pitcher under duress reverts to his dominant pitch mix → the mixture weights π(k) shift, not the component means; a clustering method keyed on means will miss it; (b) counter-trap = the analyst's counter-strategy of adding more clusters to "capture" the shift, which is exactly the boundary-solution pathology; (c) clock = within-game, within-season drift. So: decompose the observable into π-shift (behavioral) vs μ-shift (physical) vs Σ-shift (mechanical dispersion). Discriminant: a duress/fatigue signal moves μ (velocity down, spin axis drift) and Σ (wider), while a strategic shift moves π only. Prediction: the cluster count should be constant across a start while π(k) varies — if K changes within a game, it's a measurement artifact, not strategy. That's testable and verifiable.

RLVR_COUNTERFACTUAL_VETOES: three scenarios with predictions and verification procedures.

1. λ=0 collapse: BIC_adj(λ=0) ≡ BIC identically. Prediction: at λ=0 the selected K for the 50-pitcher sample must reproduce the reported 46/50 boundary solutions within the stated K_max; if it does not, the reported 46/50 is not attributable to the criterion and the claim "BIC_adj out-performs BIC" loses its mechanism. Verifiable: recompute K̂(λ=0) and compare to K_max saturation rate; ≥92% agreement required.

2. Invariance discordance: MBC with full Σ_k and BIC is invariant under invertible affine maps of y; k-means is not; BIC_adj is invariant only under diagonal scaling. Prediction: converting mph→m/s and rps→rad/s (a diagonal change of units with ratio 6.2832/0.44704 ≈ 14.06) leaves the MBC/BIC partition bit-identical, leaves BIC_adj's penalty unchanged (r is scale-free), but shifts k-means' ARI against the MBC partition by a pre-registered amount (> 0.15) for at least 20% of pitchers. If k-means partitions are unchanged, the reported k-means panels are unit-artifacts; if BIC_adj's selected K changes under diagonal rescaling, the implementation does not match the stated formula.

3. Degenerate component veto: for the 2-pitch relief archetype (Kimbrel: "four-seam fastball and curveball"), a K=3 fit can achieve |Σ_3|→0. Prediction: unconstrained MBC will return at least one component with n_k ≤ 3 or with eigenvalue ratio > 10³ in > 10% of pitchers; adding the admissibility veto (n_k ≥ 4, eigenvalue ratio ≤ 10³) reduces BIC-selected K̂ by ≥ 1 component for those pitchers and increases held-out (2011) log-likelihood per pitch. Falsification: if held-out log-likelihood decreases, the degenerate components carry genuine signal and the veto is wrong.

Maybe also a fourth: n_eff penalty test. But three required; I can add a bonus one — "3 verifiable RLVR veto scenarios" — I'll do exactly 3, maybe with a 4th labeled optional. Keep to 3 to satisfy "3".

Now the SOURCE_OPERATORS_AND_EQUATIONS section needs page citations. I'll use [SLIDE N/23] since no [PAGE N]. I must explain that clearly once and then be consistent.

Let me also flag: DRIVE SOURCE path says "Unknown Authors" but the deck names Michael A. Pane, joint work with Samuel L. Ventura, Rebecca C. Steorts, Andrew C. Thomas (slide 1). Metadata error — worth noting as a provenance audit item. Also the drive says PAGES: 14 while deck is 23 slides → likely page/slide mismatch. Honest flagging builds trust.

Also note "[EMAIL]" redactions — emails replaced by placeholder, so contact info is not verifiable.

Word count: aim THINK_TRACE ~600-700 words; other sections ~350-500 each; total ~2800-3200. Good.

Let me write it now, carefully, with LaTeX.

Avoid the words: odds, spread, total, moneyline, line (as betting). Use "boundary" for K_max. I'll say "maximum allowed number of clusters" quoting source.

One more check on "g(K,d)": source says "g(K,d)·log(n) is the penalty term" without giving g's form. I'll derive it and mark it as derived, not quoted.

For d=3 full covariance: per component μ (3) + Σ (6) = 9, plus π (K−1) → g(K,3) = 9K + K − 1 = 10K − 1. Good.

BIC numeric: log(15000) = 9.616; log(100) = 4.605. 10 log n: 96.2 vs 46.1 nats per extra component. So an extra pitch type must improve the fit by ~96 nats at n=15000. With n=15000 and a genuinely distinct third pitch comprising say 10% of pitches (1500), the fit gain easily exceeds 96 nats, so over-selection is plausible → consistent with 46/50 saturation. Nice numeric.

Also compute: for a 2-cluster vs 3-cluster comparison with n=15000, penalty difference = 10 log n = 96.2. Likelihood gain from splitting a Gaussian into two: roughly (n p log(1/ (something)))... skip. But I can note the condition: split rewarded iff 2Δlog L > 96.2.

For n=100 (minimum), penalty = 46.1, so more clusters are cheaper at low n — combined with λ fixed, low-n pitchers are more likely to over-select: predicts saturation rate decreasing in n. Verifiable.

Alright. Also need "exact singularity/breakdown regimes" — I'll enumerate R1–R7.

Write now. Also include unit table maybe.

Let me be careful in the RETROCAUSAL_GENEALOGY to distinguish verified from inferred. Use markers like [CONF: high/med/low].

Length check — I'll write it fully.
</NATIVE_REASONING>

# GSE + GSI Frontier Reasoning Foundry — Analysis Record

**Provenance audit (must be stated before any citation):** The supplied text carries **slide footers of the form `N / 23`**, not `[PAGE N]` anchors. I therefore cite as `[SLIDE N/23]` with verbatim quotes; I will not manufacture `[PAGE N]` markers that do not exist in the source. Two metadata defects are logged: (i) the drive path attributes the deck to "Unknown Authors," while `[SLIDE 1/23]` names **"Michael A. Pane ... joint work with Samuel L. Ventura, Rebecca C. Steorts, and Andrew C. Thomas"**; (ii) the drive declares `PAGES: 14` while the document self-identifies as a 23-slide deck — a page/slide normalization mismatch that would corrupt any automated page-level citation index. All e-mail fields are redacted to `[EMAIL]`, so contact-path claims are unverifiable.

---

<THINK_TRACE>

**Hop 1 — What is the actual estimand?** The deck promises: "1 Identify groups of pitches with similar characteristics using features of the PITCHf/x database. 2 Label each group with a pitch type (e.g. four-seam fastball)" `[SLIDE 9/23]`. Step 1 is unsupervised density estimation in $\mathbb{R}^3$; step 2 is a *semantic* assignment to a *private intentional state*. The deck concedes the ground truth is absent: "No official record of pitch type thrown" `[SLIDE 7/23]`. So the object being estimated is not a physical kind but an agent's decision. Any reward signal built on this pipeline cannot be label accuracy against truth; it must be *internal consistency* (cross-season stability, held-out likelihood, cluster-count stability under resampling). This single observation constrains every downstream design choice and is the hinge of the whole audit.

**Hop 2 — The feature space is dimensionally inhomogeneous.** The clustering variables are "Three variables: velocity, top-spin, side-spin" `[SLIDE 11/23]`, i.e. $x_i=(v_i,\tau_i,\sigma_i)$ with $v$ in mph (SI: $1\ \mathrm{mph}=0.44704\ \mathrm{m\,s^{-1}}$) and $\tau,\sigma$ in rps (SI: $1\ \mathrm{rps}=2\pi\ \mathrm{rad\,s^{-1}}$). The k-means objective `[SLIDE 12/23]` is $\arg\min \sum_k\sum_{i\in C_k}\lVert x_i-\mu_k\rVert^2$ — a sum of $\mathrm{mph}^2$ and $\mathrm{rps}^2$ terms. These are incommensurable, so the minimizer is a function of the unit system. Converting to SI rescales the spin axes by $2\pi/0.44704\approx 14.06$ relative to velocity. The partition is therefore not a property of the data; it is a property of the data *and* the reporting convention. This is a hard, checkable defect, and it is asymmetric: a Gaussian mixture with full covariance $\Sigma_k$ is invariant under invertible affine maps (the maximized likelihood differs only by the Jacobian, a constant across $K$), so **MBC is unit-invariant while k-means is not**. The deck's head-to-head method panels are thus invariance-inconsistent.

**Hop 3 — The adjusted criterion has an unregularized log-singularity.** `[SLIDE 16/23]` states: "We develop $BIC_{adj}$: Penalizes for high intra-cluster correlation," and renders $BIC_{adj}(K)=BIC(K)+\lambda\sum_{k=1}^{K}\sum_{i=1}^{d}-1\sum_{j=i+1}^{d}\log|r_{kij}|$, with "$K$ is the number of clusters, $d$ is the number of variables, and $r$ is correlation." Reading the OCR literally gives a penalty proportional to $\sum_{i<j}(-\log|r_{kij}|)$. That function is **unbounded above as $|r|\to 0$** and **vanishes at $|r|=1$** — precisely inverted relative to the stated intent, since the declared prior is that "Velocity, side and top-spin should be uncorrelated within clusters" `[SLIDE 16/23]`, so the *ideal* configuration is the singular point of the penalty. Two reconstructions are admissible (I derive both below); on either one, a pair near orthogonality drives the criterion to $+\infty$ or $-\infty$, and cluster selection becomes degenerate. The criterion is salvageable only with an explicit regularization, and the deck does not disclose one. This is the single most consequential gray-zone finding: the central contribution is stated in a form that is mathematically undefined at its own target.

**Hop 4 — Why does plain BIC saturate?** `[SLIDE 19/23]`: "In 46 of 50 pitchers, BIC chooses the maximum allowed number of clusters." A 92% boundary-solution rate is not a mild preference; it is non-identification. Two mechanisms compose. First, the penalty magnitude: with $d=3$ and full covariance, $g(K,3)=10K-1$, so an extra component must buy $10\log n$ nats — $\approx 96.2$ nats at $n=15{,}000$ and $\approx 46.1$ nats at $n=100$ `[SLIDE 8/23]` gives the range "100 – 15,000 pitches each." A genuine third pitch thrown 10% of the time (1,500 pitches) clears 96 nats trivially, so over-selection is expected whenever a real third mode exists. Second, pseudo-replication: pitches within a game share release point, weather ("external factors, such as wind" `[SLIDE 14/23]`) and fatigue state. Positive intraclass correlation $\rho$ means the honest evidence per observation is $n_{eff}=n/(1+(\bar m-1)\rho)<n$, so $\log n$ overstates the information content of the sample and the criterion under-penalizes. The 46/50 saturation is thus *predicted* by the deck's own numbers, and the fix is a composite-likelihood criterion, not a correlation penalty.

**Hop 5 — The $\lambda$ is not scale-free.** `[SLIDE 16/23]`: "$\lambda$ chosen via cross-validation (2010 as training data, 2011 as test data)." A single pooled $\lambda$ multiplies a penalty whose per-component size is $O(\lambda)$ against a BIC penalty of size $O(\log n)$. The influence ratio therefore shifts by $\log(15000)/\log(100)=2.09$ across the pitcher population. Low-$n$ pitchers are systematically more over-regularized in relative terms, which yields the sharp prediction that optimum $\lambda$ should grow roughly linearly in $\log n$ when estimated per sample-size stratum. The deck does not stratify, so its CV is misspecified in a way that a later analyst can detect from a single refit.

**Hop 6 — Degeneracy in the mixture itself.** `[SLIDE 14/23]`: "$y_i|c_i,\mu_k,\Sigma_k\sim N_3(\mu_k,\Sigma_k)$." The unbounded-likelihood pathology is unaddressed: as $|\Sigma_k|\to 0$, $\log f\to+\infty$. With clusters requiring at least $d+1=4$ non-coplanar points for a non-singular covariance, the two-pitch relief archetype — "Craig Kimbrel (Relief Pitcher) throws a four-seam fastball and curveball" `[SLIDE 6/23]` — is exactly the case where a $K=3$ fit will collapse a component onto two or three points. The reported "visual inspection" validation `[SLIDE 19/23]` cannot detect this, because a collapsed component plots as a tight, plausible-looking smudge.

**Hop 7 — The label map is a partition, not a classifier.** `[SLIDE 20/23]`: "Split each clustering space into 8 groups and label cluster based on where they fall. Labels clusters off of pitch characteristics, not pitcher intent." This is an explicit concession that step 2 is a geometric binning, so a monotone velocity decline across seasons can push a pitcher's curveball across a bin boundary and manufacture a "new pitch." Combined with `[SLIDE 18/23]`, which displays "Curveball 2010" and "Curveball 2011" as *distinct clusters for Jon Lester*, the system already exhibits label drift under physical change. That is the multi-season trap, and it is visible in the deck's own figures.

</THINK_TRACE>

---

<SOURCE_OPERATORS_AND_EQUATIONS>

**Citation convention:** slide-footers `N / 23` only; no `[PAGE N]` anchors exist in the supplied text (see provenance audit).

### E1. Feature map and units
$$x_i=(v_i,\ \tau_i,\ \sigma_i)\in\mathbb{R}^3,\qquad [v]=\mathrm{mph}\equiv 0.44704\ \mathrm{m\,s^{-1}},\quad [\tau]=[\sigma]=\mathrm{rps}\equiv 2\pi\ \mathrm{rad\,s^{-1}}$$
Source: "Three variables: velocity, top-spin, side-spin" `[SLIDE 11/23]`; "30+ variables: velocity, release point, acceleration, etc." and "Back/side spin derived from PITCHf/x data (Nathan 2007)" `[SLIDE 8/23]`. Assumption: $\tau,\sigma$ are *derived* quantities, hence carry propagated tracking error, not direct measurement error. **Breakdown B1:** the standardized ratio $\sigma_{\text{spin-scale}}/\sigma_{\text{speed-scale}}$ changes by $2\pi/0.44704\approx 14.06$ under SI conversion, so any Euclidean or diagonal-covariance method returns unit-dependent output.

### E2. k-means objective (quoted form)
$$\{\hat C_k\}=\arg\min_{C_1,\dots,C_K}\ \sum_{k=1}^{K}\sum_{i\in C_k}\lVert x_i-\mu_k\rVert^2,\qquad \mu_k=\frac{1}{|C_k|}\sum_{i\in C_k}x_i$$
Source: `[SLIDE 12/23]`, "Let $x_1,\dots,x_n\in\mathbb{R}^3$ and $C_1,\dots,C_K$ clusters with $\mu_k$ for each cluster." **Units:** incommensurable ($\mathrm{mph}^2+\mathrm{rps}^2$). **Breakdown B2:** empty clusters; local minima; not affine-invariant; $K$ must be supplied externally. **Invariance group:** identity only (not even diagonal scaling).

### E3. Average linkage (reconstructed — equation image did not render)
$$d(A,B)=\frac{1}{N_A N_B}\sum_{i\in A}\sum_{j\in B}d(x_i,x_j)$$
Source: `[SLIDE 13/23]`, "**Average Linkage (out-performs complete and single)** Let N represents the number of observations in clusters A and B, and d represents the individual pairwise dissimilarities. The distance between clusters A and B:" — the displayed formula is absent from the OCR. **Audit flag:** the claim "out-performs" carries **no stated loss functional**, no sample size, and no uncertainty; it is not a verifiable claim as written. **Breakdown B3:** average linkage is monotone but not scale-consistent when the two blocks have unequal $N_A,N_B$ under non-Euclidean $d$.

### E4. Gaussian mixture (quoted form)
$$y_i\mid c_i=k\ \sim\ \mathcal{N}_3(\mu_k,\Sigma_k),\qquad f(y;K)=\sum_{k=1}^{K}f_k(y_i\mid c_i)\,\pi(k)$$
Source: `[SLIDE 14/23]`, plus the geometric warrant: "The resulting pitches are noisy, both in the pitchers delivery and due to other external factors, such as wind. The resulting noisy pattern forms a hyper-ellipsoid." **Parameter count (derived, not stated):** per component $d+d(d+1)/2=3+6=9$; plus $K-1$ weights, so
$$g(K,3)=9K+(K-1)=10K-1 .$$
**Breakdown B4 (unbounded likelihood):** $\Sigma_k\to\text{singular}\Rightarrow \log f\to+\infty$; a component needs $n_k\ge d+1=4$ affinely independent points. **Breakdown B5 (label switching):** $K!$-fold permutation symmetry; the mixture density is identifiable but the parameter vector is not, so any per-cluster $\mu_k$ trajectory across seasons (`[SLIDE 18/23]`) is only interpretable after an explicit matching constraint.

### E5. BIC (quoted form)
$$BIC(K)=-2\log\hat f(Y;K)+g(K,d)\cdot\log(n)$$
Source: `[SLIDE 14/23]`, "where $\hat f(Y)$ is the likelihood for K compoments, and $g(K,d)\cdot\log(n)$ is the penalty term" [sic]. **Units:** nats (twice negative log-likelihood). **Numeric consequence:** per extra component $10\log n$; at $n=15{,}000$, $9.616\times10=96.2$ nats; at $n=100$, $4.605\times10=46.1$ nats. **Breakdown B6 (pseudo-replication):** with within-game intraclass correlation $\rho$ and mean pitches per game $\bar m$,
$$n_{eff}=\frac{n}{1+(\bar m-1)\rho}<n \quad\Rightarrow\quad \text{honest penalty } g\log n_{eff} < g\log n,$$
so the criterion's own evidence term is inflated and $K$ is over-selected — consistent with "In 46 of 50 pitchers, BIC chooses the maximum allowed number of clusters" `[SLIDE 19/23]`.

### E6. Adjusted BIC — literal OCR and two reconstructions
Quoted string `[SLIDE 16/23]`: `BIC_adj(K) = BIC(K) + λ ∗ Σ_{k=1}^{K} Σ_{i=1}^{d} −1 Σ_{j=i+1}^{d} log|r_kij|`, with "$\lambda$ chosen via cross-validation (2010 as training data, 2011 as test data)."

**Reconstruction A** (absorbs the stray `−1` into the summand):
$$BIC_{adj}(K)=BIC(K)+\lambda\sum_{k=1}^{K}\sum_{i=1}^{d}\sum_{j=i+1}^{d}\bigl(-\log|r_{kij}|\bigr)$$
**Reconstruction B** (reads `−1` as a floor/offset):
$$BIC_{adj}(K)=BIC(K)+\lambda\sum_{k=1}^{K}\sum_{i=1}^{d}\sum_{j=i+1}^{d}\log|r_{kij}|$$

**Singularity analysis (exact).** Since $|r_{kij}|\le 1$, $-\log|r_{kij}|\ge 0$ and $-\log|r|\to+\infty$ as $|r|\to 0^{+}$, while $-\log|1|=0$. Under A the penalty is **maximal at independence and zero at perfect collinearity** — the inverse of the declared prior "clustering variables should be uncorrelated ... within clusters" `[SLIDE 16/23]`, and it rewards rank-deficient components. Under B the criterion is **unbounded below** as any pair approaches orthogonality, so $K$ selection diverges. Both reconstructions are admissible from the OCR; neither is usable without regularization. **Units:** $r$ is dimensionless, so $\log|r|$ is in nats and $\lambda$ must be dimensionless — a constraint the deck never states.

**Constructive repair (derived).** Replace the unbounded functional with the Fisher-$z$ quadratic form, which is the correct likelihood-ratio scale for testing $H_0:r=0$:
$$BIC_{adj}^{\,\varepsilon}(K)=BIC(K)+\lambda\sum_{k=1}^{K}\sum_{i<j}\frac{n_{kij}-3}{2}\,\bigl[\operatorname{artanh}(r_{kij})\bigr]^{2},\qquad (n_{kij}-3)\operatorname{artanh}^2(r_{kij})\sim\chi^2_1\ \text{under }H_0 .$$
This is bounded for $|r|\lesssim 0.9$, diverges as $|r|\to1$ (correctly vetoing degenerate components), and is finite at $r=0$. The naive alternative $-\log(|r|+\varepsilon)$ is acceptable only with $\varepsilon$ disclosed and tied to sample size, e.g. $\varepsilon=(2(n_k-3))^{-1}$.

### E7. Scale-consistency condition on $\lambda$ (derived from E5+E6)
Relative influence per component:
$$R(n)=\frac{3\lambda\,\langle-\log|r|\rangle}{10\log n}.$$
For $R$ constant over $n\in[100,15000]$, need $\lambda^{\star}(n)\propto \log n/\langle-\log|r|\rangle$. Since the deck uses one pooled $\lambda$ `[SLIDE 16/23]`, $R$ varies by $9.616/4.605=2.09\times$ across the population — a **falsifiable** misspecification.

### E8. Admissibility predicate (veto algebra)
A cluster $k$ is admissible iff
$$\underbrace{n_k\ge d+1}_{\text{non-degenerate}}\ \wedge\ \underbrace{\lambda_{\max}(\Sigma_k)/\lambda_{\min}(\Sigma_k)\le 10^{3}}_{\text{non-collapsed}}\ \wedge\ \underbrace{D_M(\mu_k,\mu_{k'})>3\sigma_{\text{meas}}}_{\text{resolves measurement}}\ \wedge\ \underbrace{\frac{\sigma^2_{\text{game date}}}{\sigma^2_{\text{between}}}\le 0.25}_{\text{not a weather/fatigue artifact}} .$$

</SOURCE_OPERATORS_AND_EQUATIONS>

---

<RETROCAUSAL_GENEALOGY>

**Lineage, stated with confidence grades.** The deck's own citation chain is thin and explicit: "PITCHf/x used by Major League Baseball since 2006" and "Back/side spin derived from PITCHf/x data (Nathan 2007)" `[SLIDE 8/23]`. Everything upstream of that — optical tracking, the two-plane fit that recovers initial velocity and spin-induced acceleration — is inherited infrastructure, not contribution. The deck positions itself against three contemporaneous competitors: MLB's supervised classifier ("MLB uses proprietary labeled dataset and classification. Labeled dataset not publicly available, and may be inaccurate" `[SLIDE 10/23]`), Brooks Baseball ("Current Methods (MLB-AM and Brooks Baseball)" `[SLIDE 2/23]`), and generic unsupervised baselines (k-means, hierarchical, MBC) `[SLIDE 11/23]`. [CONF: high — these are verbatim self-positionings.]

**Forward genealogy.** The named author set (Pane, Ventura, Steorts, Thomas, CMU Statistics) is the same group that subsequently pushed pitch classification toward supervised and interpretable models; the deck itself signals the handoff: "Will be available on FanGraphs," "Currently fine-tuning and updating CLUMPD method and application," "Explore new baseball applications using clustering results" `[SLIDE 23/23]`, and a paper version at `repository.cmu.edu/hsshonors` `[SLIDE 23/23]`. [CONF: medium — the structural succession is documented in-deck; I do not assert specific downstream publications, titles, or venues, because the supplied text contains none.] The genealogically decisive artifact is the **CLUMPD application** (`[SLIDE 2/23]`, `[SLIDE 21/23]`, "updates daily" `[SLIDE 22/23]`): once the method is shipped as a daily-updating service, the criterion becomes load-bearing infrastructure, and its $\log|r|$ singularity is no longer a theoretical blemish but a recurring production failure mode.

**Multi-week / multi-season traps (each anchored in a quote):**

1. **Label drift under physical decline.** "$BIC_{adj}$ ... Result of MBC: Identify pitch evolution across time" with "Curveball 2010 | Curveball 2011" as separate color codes `[SLIDE 18/23]`. Trap: an $O(2\ \mathrm{mph})$ velocity loss shifts a centroid across a bin boundary in the 8-group partition `[SLIDE 20/23]`; the system reports a *new pitch* where the correct report is *same pitch, degraded state*. Over multiple seasons this compounds into phantom repertoire expansion. Countermeasure: forbid relabeling unless the centroid displacement exceeds the measurement-error ellipsoid E8 and the change persists across ≥ 3 starts.

2. **$\lambda$ drift.** A single CV-chosen $\lambda$ (`[SLIDE 16/23]`) is fitted on 2010 and applied to an open-ended future. Because $R(n)\propto\lambda/\log n$ (E7), any change in the pitch-count distribution — a shift in reliever usage, an innings-limit regime, expanded video coverage — silently re-tunes the effective regularization. Trap horizon: one to three seasons. Detection: monitor the realized $K$ distribution by $n$-decile; a monotone trend in $\hat K$ versus $\log n$ is the signature.

3. **The 46/50 saturation recurrence.** "All 50 cases $BIC_{adj}$ out-performs $BIC$ based on visual inspection" `[SLIDE 19/23]`. "Visual inspection" is not reproducible across weeks, so the comparison cannot be re-audited when new data arrives. Trap: the acceptance test decays into institutional memory. Countermeasure: replace with a held-out (2011) log-likelihood-per-pitch and a permutation-based cluster-stability statistic.

4. **Repertoire-shaped test-set composition.** The evaluation pools "1051 pitchers" `[SLIDE 19/23]` with wildly different $n$ and different true $K$ (`[SLIDE 6/23]`: Zito's five pitches versus Kimbrel's two). Pooled accuracy-like claims are dominated by high-$n$ starters, so a two-pitch reliever's degeneracy (E4/B4) is diluted out of the aggregate.

5. **Provenance decay.** The drive record already mislabels authorship and page count. Over multi-week horizons, a daily-updating public artifact with a redacted contact field `[SLIDE 23/23]` will accumulate unattributable revisions. Any downstream replication must pin the specific CLUMPD prototype snapshot.

</RETROCAUSAL_GENEALOGY>

---

<RECURSIVE_THEORY_OF_MIND>

**The three-agent epistemic structure (all quotes verbatim).** The deck states the private-state problem in three consecutive bullets `[SLIDE 7/23]`: "Pitcher's team determines what pitch type will be thrown"; "Batter doesn't know what type of pitch will be thrown"; "No official record of pitch type thrown." Formally, let $s_i\in\{1,\dots,K\}$ be the *intent* (sign selection, a joint pitcher–catcher decision) and $x_i$ the observed physical vector. The analyst sees only $x_i$; the batter sees only a prefix of the flight; the pitcher's team holds $s_i$. The clustering problem estimates $p(x\mid s)$ and inverts it, but the inversion is non-identifiable exactly when two intents are physically coincident — the cutter/slider and two-seam/sinker degeneracies that any pitch-classification practitioner confronts. The deck concedes this by fiat: "Labels clusters off of pitch characteristics, not pitcher intent" `[SLIDE 20/23]`. **Verdict:** the algorithm models the *shadow* of intent, and the label layer is a geometric binning, not a theory of the pitcher's mind. Any claim that a cluster is a "pitch type" is an over-attribution; the defensible claim is "pitch shape class."

**Crisis habit regression.** Under duress (fatigue, men on base, high leverage), a pitcher does not invent a new pitch — he reverts to his dominant, most-rehearsed shape. In mixture language this is a **shift in the mixing weights $\pi(k)$ with the component parameters $(\mu_k,\Sigma_k)$ approximately fixed**, plausibly with modest $\Sigma_k$ inflation from mechanical dispersion. The deck's machinery is entirely keyed to $\mu_k$ geometry and $K$, and reports nothing about $\pi(k)$ dynamics — so the most behaviorally informative signal in the data is the one the method structurally cannot emit. This is a genuine, source-grounded blind spot, not a rhetorical one.

**The counter-trap.** The analyst's natural response to a shifted pitch mix is to add a component to "capture" it. That is precisely the failure mode diagnosed in E5/B6: the likelihood gain from an extra component is large (96 nats is cheap at $n=15{,}000$), so the criterion complies, and the deck's own diagnostic — "In 46 of 50 pitchers, BIC chooses the maximum allowed number of clusters" `[SLIDE 19/23]` — is the observed footprint of that compliance. The counter-trap is therefore: *every* behavioral change gets misread as a repertoire change. The correct discriminant is stated in E8: strategy moves $\pi$; mechanics move $\mu$ and inflate $\Sigma$; measurement error moves nothing persistently.

**The clock.** Two nested clocks are in play. The *fast clock* is within-game fatigue: velocity decays and release point drifts over 100 pitches. The *slow clock* is between-season evolution, made explicit by the Lester panel with "Curveball 2010" and "Curveball 2011" appearing as separate clusters `[SLIDE 18/23]`. A method with a fixed bin dictionary `[SLIDE 20/23]` and a fixed $\lambda$ `[SLIDE 16/23]` has no clock at all — it is a snapshot machine applied to a non-stationary process.

**Testable prediction (recursive structure ⇒ observable).** Within a single start, $K$ should be **approximately constant** while $\hat\pi(k)$ varies monotonically with pitch count and leverage proxy; $\hat\mu_k$ for the dominant pitch should drift downward in velocity with a slope bounded by published aging/fatigue rates. If instead $\hat K$ rises within a game, the cause is measurement artifact or component collapse (B4), not strategy. This converts a theory-of-mind statement into a numerical invariant with an explicit falsifier.

</RECURSIVE_THEORY_OF_MIND>

---

<CROSS_LAYER_VETO_ADJUDICATION>

**Layer 1 — Measurement/derivation (highest precedence).** Top- and side-spin are not measured; they are inferred: "Back/side spin derived from PITCHf/x data (Nathan 2007)" `[SLIDE 8/23]`. A derived quantity inherits the tracking fit's error, and that error is *anisotropic* in $(\tau,\sigma)$. **Veto proof:** a cluster whose centroid separation satisfies $D_M(\mu_k,\mu_{k'})\le 3\sigma_{\text{meas}}$ in the derived-spin subspace is not evidence of two pitch types regardless of how clean it looks in the scatter. The deck's own table exposes the fragility: two Tim Wakefield rows at `75.20` and `75.30` mph with top-spin `-107.19` and `-113.89` and side-spin `50.23`/`46.10` are both rendered as "Four-seam" `[SLIDE 8/23]`, with the label column truncated ("Label<br>...") — i.e. near-duplicate physical inputs carry ambiguous reference labels. The comparison baseline is therefore not clean.

**Layer 2 — Physical/aerodynamic.** Movement is a deterministic function of spin axis and rate; therefore velocity and spin are *physically coupled*, which directly contradicts the modeling prior "Velocity, side and top-spin should be uncorrelated within clusters" `[SLIDE 16/23]`. **Veto proof:** the declared independence prior is not a fact about baseball; it is a modeling convenience. Any penalty built on it (E6) is penalizing a correlation that physics guarantees, so $BIC_{adj}$ must be understood as a *regularizer toward a false null*, not as a likelihood correction. This is the strongest cross-layer contradiction in the document and it undermines the interpretation of $\lambda$ as anything but a tuning knob.

**Layer 3 — Biomechanical.** The deck's stated payoff is "predict future injury" `[SLIDE 7/23]`, which imports a biomechanical commitment: that cluster membership or cluster transition carries load-bearing information about tissue stress. **Veto proof:** a cluster split attributable to within-start fatigue (declining velocity, drifting release point — both listed among the "30+ variables: velocity, release point, acceleration" `[SLIDE 8/23]`) is a *state* difference, not a *type* difference; admitting it as a pitch type contaminates any downstream injury model with a tautology. Required control: the split must persist across ≥ 3 starts at fixed pitch count.

**Layer 4 — Weather/environmental.** Explicit textual warrant: "The resulting pitches are noisy, both in the pitchers delivery and due to other external factors, such as wind" `[SLIDE 14/23]`. Wind is not i.i.d. across pitches — it is constant within a game and correlated with park and date. **Veto proof:** this is the generative mechanism behind the pseudo-replication term $\rho$ in E5/B6. A variance-components fit with a game-date random effect that attributes $>25\%$ of between-cluster variance to date is a weather artifact and is vetoed under E8.

**Adjudication order and irreversibility.** Physical (L2) sets the admissible prior structure; Measurement (L1) sets the resolution floor; Weather (L4) sets the effective sample size; Biomechanical (L3) sets the temporal persistence requirement. A cluster that fails any single layer is rejected — the layers do not trade off, because each failure mode is independently sufficient to manufacture a spurious cluster. Applied to the deck's headline result, the 46/50 saturation `[SLIDE 19/23]` fails L4 (pseudo-replication) and L1 (degenerate components are unresolvable), which means the reported comparison is between a boundary-hitting criterion and a singular-but-regularized one — not between two well-posed selectors.

</CROSS_LAYER_VETO_ADJUDICATION>

---

<RLVR_COUNTERFACTUAL_VETOES>

Each scenario is a **verifiable** reward test: a deterministic procedure, a pre-registered threshold, and a prediction that can fail. All use only quantities the deck discloses.

### Veto 1 — The $\lambda=0$ collapse test
**Construction.** E6 reduces identically to E5 at $\lambda=0$: $BIC_{adj}(K)\big|_{\lambda=0}\equiv BIC(K)$. So the entire claimed advantage must vanish at $\lambda=0$.
**Procedure.** Recompute $\hat K$ for the 50-pitcher sample `[SLIDE 19/23]` at $\lambda=0$ under the deck's own $K_{\max}$.
**Prediction.** $\hat K(\lambda=0)$ equals $K_{\max}$ for $\ge 46$ of 50 pitchers (agreement rate $\ge 0.92$). Any selected $K$ strictly interior at $\lambda=0$ for a majority of pitchers falsifies the attribution of the 46/50 result to the correlation penalty and forces re-attribution to the likelihood term or the $K_{\max}$ cap.
**Why it is a veto, not a check.** If $\lambda=0$ does not reproduce saturation, the deck's causal claim — "New criterion for choosing the number of clusters" `[SLIDE 22/23]` — loses its mechanism, and the criterion cannot be described as doing what it claims.

### Veto 2 — The unit-invariance discordance test
**Construction.** Under $v\mapsto 0.44704\,v$ and $(\tau,\sigma)\mapsto 2\pi(\tau,\sigma)$ (a diagonal map with ratio $\approx 14.06$): k-means (E2) is **not** invariant; MBC with full $\Sigma_k$ plus BIC (E4–E5) **is** invariant; $BIC_{adj}$ (E6), built on scale-free $r$, **is** invariant.
**Procedure.** Refit all three on imperial and SI representations for the same 50 pitchers; compute adjusted Rand index (ARI) between partitions.
**Prediction.** (a) MBC partition ARI $=1.000$ exactly, up to numerical tolerance $10^{-9}$; (b) $BIC_{adj}$'s selected $K$ is identical in both unit systems; (c) k-means ARI against the MBC partition shifts by $>0.15$ for at least 20% of pitchers. **Falsifiers:** if k-means is unchanged, the deck's k-means panels are unit artifacts being presented as structure; if $BIC_{adj}$'s $\hat K$ changes under a purely diagonal rescaling, the implementation does not match the stated formula and the reported results are from a different criterion than the one published.

### Veto 3 — The degenerate-component admissibility test
**Construction.** For the two-pitch archetype `[SLIDE 6/23]` ("Craig Kimbrel (Relief Pitcher) throws a four-seam fastball and curveball"), an unconstrained $K=3$ fit can drive $|\Sigma_3|\to0$ (E4/B4) with a tiny $n_3$.
**Procedure.** Fit unconstrained MBC; record $\min_k n_k$ and $\max_k \lambda_{\max}(\Sigma_k)/\lambda_{\min}(\Sigma_k)$. Then re-fit with the E8 predicate enforced ($n_k\ge4$, eigenvalue ratio $\le10^3$). Score both by **2011 held-out log-likelihood per pitch** — the same split the deck already uses for $\lambda$ `[SLIDE 16/23]`, which makes this test free of new data requirements.
**Prediction.** Unconstrained fits return at least one component with $n_k\le3$ or eigenvalue ratio $>10^3$ in $>10\%$ of the 1051 pitchers `[SLIDE 19/23]`; enforcing the predicate lowers $\hat K$ by $\ge1$ for those pitchers **and increases** 2011 held-out log-likelihood per pitch.
**Falsifier.** If held-out log-likelihood *decreases* under the veto, the collapsed components carry genuine out-of-sample signal and the veto is wrong — the degeneracy would then be a real,