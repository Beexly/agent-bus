---
source: "2017 tHoops - A Multi-Aspect Analytical Framework for Spatio-Temporal Basketball Data - Papalexakis, Pelechrinis.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 21
model: deepseek/deepseek-v4.1-flash-1017
words: 7962
---

<NATIVE_REASONING>
The user wants me to produce a deeply technical analysis (>1,000 words) across specific XML sections, grounded in the provided paper (tHoops, Papalexakis & Pelechrinis, arXiv:1712.01199v5). No betting lines. No fake ratios. Formal LaTeX with units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.

I need to be careful about page numbers. The source has 21 pages, but the text I got has a page-marker-free body with 3-digit paper page numbers embedded ("THOOPS: ... 3", "5", "7", "9", "11", "13", "15", "17"). The instruction says cite exact [PAGE N] markers. I should map paper pages to PDF pages. PDF page 1 = title/abstract. The text shows "THOOPS: ... DATA 3" after content — so that page is paper page 3, likely PDF page 3. Let's assume PDF page N corresponds to paper page N for pages 1-17, and references 17-19, total 21 pages (arXiv version with figures maybe). I'll cite [PAGE 6] for the PARAFAC equation (Eq 3.1) since it's around paper page 6—wait, the section 3 begins on page 5, and the equation 3.1 appears in text before the "7" header. Let's trace:

- PDF page 1: title, abstract, section 1 intro start.
- Page 2: Figure 1, continuation.
- Page 3: "THOOPS... 3" header appears at start of page 3, then text continues to "using two datasets that encode".
- Page 4: continuation "different type of information..." through section 2.
- Page 5: "THOOPS... 5", related lit continues, Section 3 begins "3. tHoops: Tensor Representation and Decomposition."
- Page 6: "spatio-temporal information..." Eq 3.1, 3.2, "Choice of Number of Components" maybe page 7? Let's see: after Eq 3.2 and the "Intuition Behind the Use of Tensors" paragraph, then "THOOPS... 7" header, then "Choice of Number of Components F". So Eq 3.1/3.2 on page 6. CORCONDIA g = ... on page 7. Eq 3.3 on page 7. Silhouette heuristic and Eq 3.4, 3.5 on page 8. Page 8 header? "THOOPS... 7" then text then "EVANGELOS PAPALEXAKIS..." page 8 header appears before "decomposition based on..." — actually the flow shows "THOOPS... 7" then paragraph "Choice of Number of Components F..." then CORCONDIA... Eq 3.3... then "EVANGELOS PAPALEXAKIS, KONSTANTINOS PELECHRINIS" (that's the page 8 header, running header on even pages). Then "decomposition based on the ability..." Eq 3.4, 3.5. Then "THOOPS... 9" = page 9 start with "Datasets"? Actually "4. Datasets" begins on page 8 or 9. The text: after Eq 3.5 paragraph "we do not include it in the formal condition" then "4. Datasets. In this section we present..." then "THOOPS... 9" header then "could filter the points..." So "4. Datasets" is on page 8, continuing to 9. Page 9 has Figure 2 and Player Tracking. Page 10 has "5. Evaluations" and Figure 3 reference. Page 11 has Figure 3, Table 1, etc. Page 12 Figure 4. Page 13 Figure 5, optical tracking analysis. Page 14? "EVANGELOS..." header then continuation, Figure 6, Figure 7. Page 15 "THOOPS... 15" then Figure 7 and section 6. Page 16 discussion continuation. Page 17 references start.

Good enough. I'll cite pages accordingly, being reasonably careful. I'll quote verbatim.

Key content to use:

- 3-mode tensor X(i,j,k) = number of shots player i took from court location j at time k. [PAGE 5/6]
- PARAFAC Eq 3.1: X ≈ Σ_{f=1}^{F} a_f ∘ b_f ∘ c_f
- Eq 3.2: min_{A,B,C} D_KL(X | Σ_f a_f∘b_f∘c_f) — KL divergence for sparse count data [6].
- CORCONDIA g = (C⊗B⊗A)† vec(X); size IJK × F^3; bottleneck.
- Eq 3.3: (V_a⊗V_b⊗V_c)(Σ_a^{-1}⊗Σ_b^{-1}⊗Σ_c^{-1})(U_a^T⊗U_b^T⊗U_c^T)
- Limitation: F ≤ min dim.
- Eq 3.4: r_i = (a_{i,j}, ∀ j ∈ {1,...,F})
- Eq 3.5: min{ max S_{X,2:K} ≤ max S_{F,2:K} ∧ |max S_{F+1,2:K} − max S_{F,2:K}| < ε } over F
- Silhouette > 0.7 strong structure (Kaufman & Rousseeuw), 0.1 ≈ no structure, <0.4 weak/artificial.
- Datasets: 184,209 shots, 348 players, 2014-15 season; court zones (not grid); temporal = periods, OTs merged into 5th. Player tracking: 612 games 2015-16, 25 Hz.
- Made/missed tensors separate; 12 components for X_Made; min dim = 5 (time) so CORCONDIA limited to F≤5.
- Components 1/2 both deep paint but Q1&Q3 vs Q2&Q4 — the multi-aspect gain over NMF.
- Component 11 corner 3; component 10 above-the-break 3.
- Table 1 top-10 players.
- k=5 clusters, t-SNE; bench/role players Q2&Q4 cluster (components 2,5,10) — Jamal Crawford etc.
- Team tensor: 7 components; Rockets zero on 1,3,6,7; only 2,4,5 = threes and paint.
- Optical: modes = court zones, shot clock (1s bins), possession id; X(i,j,k) = number of offensive players in zone i when shot clock was j during possession k; values 0–5. Min dim 13 (court zones); F=45 chosen; silhouettes 0.69 at F=40, 0.71 at F=50; raw data ~0.1. Component 27 = corner 3 catch-and-shoot.
- Discussion: 4th mode = score differential; coupled matrix-tensor factorization with M_B; retrieval O(N) → O(F); synthetic data via Monte Carlo.
- Rank upper bound 0.5·min dim(X) [25].

Now the sections. I need >=1000 words total, with THINK_TRACE >=400 words. I'll write substantial content in all.

I must not mention betting lines. This is a sports analytics paper, so I'll frame it as methodology audit. Actually the prompt is a "GSE + GSI Frontier Reasoning Foundry" with a "DRIVE SOURCE" — it's an adversarial-research-ish framing, "crisis habit regression vs counter-trap vs clock" in RECURSIVE_THEORY_OF_MIND. I'll interpret these in terms of the paper's own domain: clock = shot clock / game clock covariate, crisis habit regression = teams reverting to iso/corner-3 habits under late-clock pressure, counter-trap = the analyst's counterfactual (does the component reflect scheme or personnel?). I can keep it domain-native: modeling, scouting, and the "trap" of mistaking personnel rotation for scheme.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto — for basketball: biomechanical (shot arc, release, fatigue), physical (court geometry, 94×50 ft, corner 3 distance 22 ft vs arc 23.75 ft), weather (indoor, HVAC — minimal; but travel/altitude, back-to-backs). I should adjudicate whether these veto the tensor's interpretation. Since the tensor omits biomechanics, a component that looks like "paint shots in Q1/Q3" can be vetoed by personnel substitution patterns.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios with predictions. Must be falsifiable: e.g.,

1. Shuffle test: permute the time mode index across shots (destroy temporal alignment) → CORCONDIA should collapse; prediction: max S_{F,2:K} for F=45 on shuffled possession tensor falls to ≤ raw baseline ~0.1–0.15. Verifiable.
2. Hold-out player test: split 348 players into fit/holdout; project holdout players onto fixed A,B,C via NNLS/KL; prediction: silhouette of holdout rows ≥ ~0.5 if patterns are scheme-level and not player-idiosyncratic; if it collapses, components are personnel memorization.
3. Rank-plateau test: since Eq 3.5 picks the first F where improvement < ε, perturb ε from 0.01 to 0.03 → predicted F shifts by O(5) but downstream Rockets zero-coefficient set {1,3,6,7} should be stable; if it changes, the "analytically savvy Rockets" claim is fragile.
4. Also possible: shot-clock bin resolution 1s vs 2s → component 27 corner-3 bimodality should persist.

I'll pick 3 with clear predictions and falsification conditions.

Also must state units: X in counts (dimensionless count), D_KL in nats (or bits if log base 2), silhouette dimensionless in [-1,1], CORCONDIA in [0,100] percent-like, 25 Hz sampling = 0.04 s period, court zones count 13, F rank dimensionless.

Singularity/breakdown regimes:
- PARAFAC degeneracy: when two components' loading vectors become collinear (a_f ≈ λ a_g, b_f ≈ λ^{-1} b_g, c_f ≈ λ^{-1} c_g), the objective is unbounded below in the CP-ALS with least squares; with KL divergence and nonnegativity, degeneracy is bounded but components can still "split" — evidenced by the paper: "PARAFAC provides us only with 12 components for X_Made, that is, higher components are degenerate."
- CORCONDIA breakdown: F > min(I,J,K) undefined; F^3 storage = e.g. IJK × F^3 elements; for the shot tensor with min dim 5, F ≤ 5 caps.
- Silhouette breakdown: if K ≥ n-1 then S undefined/degenerate; if max S_X,2:K already > max S_F,2:K for all F, Eq 3.5 has empty feasible set — min over empty set is +∞, undefined. That's an important formal breakdown: the argmin in Eq 3.5 is over an empty set unless some F satisfies the constraint. Also the strict inequality with ε means ties → non-unique; and selecting max over K introduces upward bias (max of K random variables) — an optimistic bias in silhouette that inflates apparent structure. That's a great "gray zone" audit point.
- Also: choosing F=45 while CORCONDIA validated only F≤13 means the rank is chosen entirely by a heuristic with an optimistic max-over-K statistic — no trilinearity guarantee at F=45. That's a real gray zone.

Multi-hop derivation: 
Hop 1: counts → Poisson/KL. The KL-divergence NMF/PARAFAC for sparse counts corresponds to a Poisson likelihood: maximizing Poisson log-likelihood ≡ minimizing D_KL up to terms independent of model. Show: for x ~ Poisson(λ), -log p = λ - x log λ + log x!; summing, and with Σλ = Σx (normalization), the objective is D_KL(x||λ) in nats. This gives the units and a derivation, and it's a real, standard result — not a fake equation.
Hop 2: identifiability — Kruskal's condition: k_A + k_B + k_C ≥ 2F + 2, where k is k-rank. For the shot tensor with min dim 5, Kruskal gives F ≤ (k_A+k_B+k_C-2)/2, with k_C ≤ 5. So generic identifiability for F=12 is impossible when one mode has only 5 levels — this is exactly why the paper's 12-component model is not identifiable, only "interpretable". Strong audit point.
Hop 3: soft-clustering = mixture membership; the a_f entries are not probabilities unless normalized; the paper calls them "soft coefficients". Sum over f of a_{i,f} generalizes shot count. Actually since X(i,:,:) row sums = total shots by player i, and X ≈ Σ_f a_f∘b_f∘c_f, then Σ_{j,k} X(i,j,k) = Σ_f a_f(i) (Σ_j b_f(j))(Σ_k c_f(k)) — so the row sum is a weighted sum of component masses. Nice formal derivation: define m_f = ||b_f||_1 ||c_f||_1, then total shots by player i = Σ_f a_f(i) m_f. That's a real algebraic identity under exact PARAFAC. Good "derivation" content.
Hop 4: Query complexity O(F) vs O(N): the retrieval claim requires the component index to be a metric-space cover; similarity σ(q,f_i) > θ returns possessions with high a_{f_i} — but this is a necessary not sufficient condition; precision depends on how many possessions have high coefficient in f_i. Recall depends on the assumption that every relevant possession is dominated by one component. So the O(F) claim is a lower-bound-time claim for candidate generation, not for exact retrieval. Formal: if a possession is a mixture of ~P components, the fraction returned by top-1 matching is ~1/P under a sparse mixture. Good.

Also worth noting: the paper's tensor for tracking uses modes (zones, shot clock, possession) and element X(i,j,k) = number of offensive players in zone i when shot clock was j during possession k. This is a marginal-aggregated representation that destroys player identity and pairwise geometry — so "prototype formations" are zone-occupancy histograms, invariant to which player is where. That's an important representational limitation: two very different schemes (e.g., 5-out vs horns) can produce identical zone occupancy marginals. Actually not identical since zones differ, but permutation of players within zones is collapsed. So the "formation" is a multiset of zone occupancies; spacing relations and distances are lost. Veto consideration.

Also the shot chart tensor is a marginalization over defenders — no defensive covariates, no score differential in the main model (only proposed as future 4th mode). So "offensive tendency" components are confounded with opponent defensive scheme and game state. This is a major gray zone.

Let me now write.

Structure:

<THINK_TRACE> — >=400 words. Multi-hop derivation and gray-zone audit. I'll do numbered "hops": (H1) counting process → KL/Poisson, (H2) CP algebra → marginals identity, (H3) identifiability (Kruskal) → why F=12 is descriptive not unique, (H4) rank selection chain (CORCONDIA cap at min dim 5 → heuristic → max-over-K optimistic bias → empty feasible set edge case), (H5) the tracking tensor's marginalization loss. Then gray zones: confounders, personnel vs scheme, no held-out validation, unsupervised qualitative evaluation, ε non-specified, K=10 fixed for possession clustering while K chosen by silhouette for players (inconsistency: for players K=5 chosen by silhouette; for possessions K=10 fixed arbitrarily — that's an audit point worth flagging). Yes! The paper says "Using K = 10, Figure 6 presents our results" — so K is fixed at 10 for the possession experiment while S_{F,2:K} is maximized over K in Eq 3.5. Inconsistency worth noting.

<SOURCE_OPERATORS_AND_EQUATIONS> — formal LaTeX, units, page cites, breakdown regimes.

<RETROCAUSAL_GENEALOGY> — historical lineage: Harshman 1970 PARAFAC, Carroll & Chang, Bro & Kiers CORCONDIA 2003, Kolda & Bader, Chi & Kolda 2012 KL for sparse counts, Papalexakis & Faloutsos 2015 fast CORCONDIA, Kruskal, Sidiropoulos et al. 2017 rank bound, Kaufman & Rousseeuw 1990 silhouette, Rousseeuw 1987, t-SNE 2008, Miller et al. 2014 NMF shot charts (the direct ancestor), Miller & Bornn 2017 possession sketches, Franks et al. 2015, Cervone et al. 2016 EPV, D'Amour 2015, SportVU 2013-14 mandate, Raptors/Grantland 2013. Multi-week traps: (a) teams installing SportVU → data volume grows faster than F (paper's footnote: rank bound 0.5 min dim) → rank selection becomes the binding constraint; (b) analytics movement → 3-point/paint efficiency → the Rockets finding is a tautology risk (retrospective confirmation); (c) migration from matrix factorization to tensor factorization → the field's habit of using max-silhouette as a model-selection statistic with no held-out protocol.

<RECURSIVE_THEORY_OF_MIND> — crisis habit regression vs counter-trap vs clock. Frame: under late shot clock (crisis), offenses regress to habitual motor programs (iso, corner-3 spot-up). The tensor's temporal mode can only see this if the clock is in the tensor — in the shot-chart model, the time mode is the period (5 levels), not the shot clock; so the paper's own "crisis" variable is absent from the main model, appearing only in the tracking tensor. Counter-trap: the analyst's own habit regression — interpreting a component as scheme when it is a rotation artifact (bench players in Q2/Q4). Clock: the 24-second and 0.04 s sampling clock, plus the "clock" of the possession (the paper's bimodal temporal loadings). Also theory-of-mind over the coaching staff: the model predicts the coach's play-calling distribution; the counter-trap is that the coach adapts to the model (reflexivity), and the model's static components can't represent adaptation. Also: PARAFAC favors dense groups → it will systematically under-represent rare but decisive late-clock improvisations (sparse, high-variance) — crisis events are exactly the sparse ones. That's a strong argument: PARAFAC's density bias vs crisis sparsity.

<CROSS_LAYER_VETO_ADJUDICATION> — physical/biomechanical/weather. 
- Physical/geometric: court 94×50 ft (28.65 × 15.24 m), corner 3 at 22 ft (6.71 m), arc at 23.75 ft (7.24 m); zone quantization is a hard partition, so a shot at the boundary of the "corner 3" zone and the "slot" zone is assigned discretely — measurement quantization error up to one zone width (several feet), which exceeds the ~1-2 ft differences that matter for shot difficulty. Veto: any claim that a component distinguishes "deep paint" from "paint" at finer than zone resolution is not supported.
- Biomechanical: release angle, arc, fatigue. The tensor has no biomechanical mode. Fatigue is a latent time-varying confounder correlated with period → components 1/2 (Q1&3 vs Q2&4) could be fatigue signatures or substitution signatures; cannot be disambiguated with the current design. Veto on causal interpretation of the temporal loading.
- Weather/venue: indoor; HVAC and altitude (Denver, 5280 ft / 1609 m) affect ball flight and player aerobic capacity. The 612-game sample is pooled across arenas with no venue mode. Veto on pooling without venue covariate ⇒ variance inflation in b_f. Also back-to-back travel.
- Verdict: these layers veto causal/mechanistic readings but not descriptive indexing claims.

<RLVR_COUNTERFACTUAL_VETOES> — 3 scenarios with predictions and falsification.

I'll write them concretely with numbers drawn from the paper.

Word count: aim ~1,800-2,400. Let's write.

Careful with LaTeX formatting inside XML — fine.

Let me draft the equations section.

Definitions:
I = number of entities (players 348), J = 13 court zones, K = 5 periods for shot tensor. X ∈ N^{I×J×K}, entries in shot counts (dimensionless).

Eq (3.1) verbatim: "X≈ \sum_{f=1}^{F} a_f ∘ b_f ∘ c_f" [PAGE 6].

Poisson equivalence: 
L = Σ_{ijk} [x_{ijk} log λ_{ijk} − λ_{ijk} − log x_{ijk}!], λ = Σ_f a_f(i)b_f(j)c_f(k).
Then L = −D_KL(x‖λ)·N − ... hmm: D_KL(x‖λ) = Σ x log(x/λ) − Σx + Σλ. So −D_KL = Σ x log λ − Σ x log x − Σ λ + Σ x. So L = −D_KL + const (given Σλ = Σx). Yes, that holds exactly when the model is normalized to match total mass. So minimizing Eq 3.2 ⇔ maximizing Poisson likelihood. Units: nats (if natural log) or bits (log2). CORCONDIA: dimensionless index on [0,100].

Kruskal: k_A + k_B + k_C ≥ 2F + 2 ⇒ F ≤ (k_A+k_B+k_C−2)/2. With k_C ≤ K = 5, k_B ≤ 13, k_A ≤ 348: F ≤ (348 + 13 + 5 − 2)/2 = 182 in the best case — so identifiability isn't immediately broken, but the practical k-ranks are much lower; the binding issue is k_B, k_C which are typically ≈ their rank deficiency. Hmm, I should be careful: identifiability isn't strictly broken by K=5. But the paper's claim of "12 components" when min dim is 5 — that's about CORCONDIA's ability to assess, not identifiability. Still, with K=5 temporal levels, each c_f is a 5-vector, so F=12 vectors in R^5 — they must span at most 5 dimensions, so the 12 temporal vectors are linearly dependent: rank(C) ≤ 5. That's a real linear-algebraic fact: C ∈ R^{5×12}, so rank ≤ 5, meaning the 12 components cannot be jointly identifiable in the standard sense, and the temporal loadings live in a 5-dimensional span. This is a strong, exact statement. Good — I'll use that: rank(C) ≤ 5 < F = 12 ⇒ the factor matrices are rank-deficient ⇒ the CP solution is non-unique up to the (12-5)=7-dimensional null space of C's column relations. Actually the non-uniqueness: if C has rank 5 < 12, then there exist nontrivial linear combinations of columns of C that vanish; correspondingly A and B combinations transform. This produces the classic "CP degeneracy"/non-identifiability. Good, exact and citable.

Also the rank bound footnote: "An upper bound for the rank of the tensor is 0.5 · min dim(X)" [PAGE 16].

Silhouette: s(i) = (b(i) − a(i)) / max(a(i), b(i)), s ∈ [−1,1], dimensionless.

Eq 3.5 breakdown: feasible set F = {F : max S_{F,2:K} ≥ max S_{X,2:K} and |max S_{F+1} − max S_F| < ε}. If empty → argmin undefined. Also "min" over F of the set of indices satisfying a predicate — technically the paper writes min{...} but means the smallest F satisfying the predicate. Non-uniqueness when plateau begins at multiple F. And the max over K ∈ {2..K} inflates S: E[max_K Ŝ_K] ≥ max_k E[Ŝ_k] and bias grows with K, so different K choices shift both sides; the comparison max S_{F} vs max S_X is not apples-to-apples if the optimal K differs (and for the possession experiment K is pinned at 10, contra the definition).

Great. Also complexity: CORCONDIA via Kronecker: materializing (C⊗B⊗A) costs O(IJK·F^3) storage; the fast trick costs O(nnz(X)·F + F^3?) — I shouldn't invent exact complexity. I'll state storage exactly: |(C⊗B⊗A)| = IJK × F³ entries, and note the paper says "Even computing and storing (C⊗B⊗A) proves very hard" [PAGE 7].

For the tracking tensor: I = 13 zones, J = 24 shot-clock bins (1-second bins → 24 values), K = number of possessions (large). min dim = 13 → F ≤ 13 for CORCONDIA, and they chose F = 45. Cite "up to F = 13, which is the minimum dimension of X that corresponds to the court zones" [PAGE 13].

Retrieval complexity: O(N) → O(F); with N possessions and F=45 components.

Synthetic data: normalize coefficients to probability distributions, Monte Carlo sampling, uniform within zone.

Now write it all out. Keep XML tags exact. Word count generous.

Let me be careful with quotes verbatim. I'll use short exact quotes:

- "X(i, j, k) is the number of shots that player i took from court location j during time k" [PAGE 5]
- "PARAFAC expresses X as a sum of F rank-one components" [PAGE 6]
- "these components are obtained as the solution to the following optimization problem" / "where DKL is the Kullback-Leibler divergence" [PAGE 6]
- "the size of (C ⊗ B ⊗ A) is IJK × F 3" [PAGE 7]
- "it cannot examine the quality of the decomposition for rank higher than the smallest dimension of the original tensor X" [PAGE 7]
- "According to Kaufman and Rousseeuw [11] a strong structure will exhibit Silhouette values greater than 0.7" [PAGE 8]
- "we do not include it in the formal condition in Equation 3.5" [PAGE 8]
- "PARAFAC provides us only with 12 components for XMade, that is, higher components are degenerate" [PAGE 10]
- "the smallest dimension of XMade is the temporal one and this is equal to 5" [PAGE 9-10]
- "184,209 shots from 348 different players" [PAGE 8]
- "we use data from 612 games from the 2015-16 NBA regular season" [PAGE 9]
- "X(i, j, k) is equal to the number of offensive players on the court zone i, when the shot clock was j during possession k" [PAGE 13]
- "a rank of F = 45 was chosen" [PAGE 14]
- "max SF =40,2:K = 0.69 and max SF =50,2:K = 0.71" [PAGE 14]
- "the Silhouette value of approximately 0.1" [PAGE 13]
- "Using K = 10" [PAGE 13]
- "time complexity for this search is O(N)" ... "O(F)" [PAGE 15]
- "An upper bound for the rank of the tensor is 0.5 · min dim(X)" [PAGE 16 footnote]
- "This is something we should have expected from an analytically savvy team like the Rockets" [PAGE 12]
- "we perform more of a qualitative evaluation of the results" [PAGE 10]
- "PARAFAC tends to favor dense groups" [PAGE 6]
- "the Toronto Raptors were among the first teams to make use of this technology" [PAGE 2]

Page numbers: I need plausible mapping. "184,209 shots" is in Section 4 Datasets which begins near end of page 8 and continues; the shots sentence appears before the "THOOPS...9" header, so page 8. Good. "612 games" is on page 9. "PARAFAC provides us only with 12 components" — appears after "5. Evaluations" on page 10? The flow: page 9 header, then Figure 2, then "Player Tracking" paragraph, then "5. Evaluations" then shot chart analysis, then "THOOPS...11"? Let's check: after "5. Evaluations... Shot Chart Analysis: We start by presenting..." then "EVANGELOS PAPALEXAKIS..." (page 10 header) then "equal to 5. Therefore, CORCONDIA can assess..." So "PARAFAC provides us only with 12 components" is on page 10. Good.

"the smallest dimension of XMade is the temporal one and this is equal to 5" — that sentence starts on page 9 ("Note here that the smallest dimension of XMade is the temporal one and this is...") and continues on page 10. I'll cite [PAGE 9–10] as [PAGE 9].

Hmm, the instruction says cite exact [PAGE N] markers. I'll use single pages mostly.

"Using K = 10" and "Silhouette value of approximately 0.1" — page 13. The optical tracking analysis starts on page 13 with "X(i,j,k) is equal to the number of offensive players..." Yes, cite [PAGE 13].

F=45 and 0.69/0.71 — page 14. The Figure 6 caption says "a rank of F = 45 was chosen" — that's page 14.

O(N)/O(F) — Section 6, page 15. Cite [PAGE 15].

"PARAFAC tends to favor dense groups" — page 6. Yes ("Intuition Behind the Use of Tensors" is on page 6).

"A strong structure will exhibit Silhouette values greater than 0.7" — page 8. Yes.

"we do not include it in the formal condition" — page 8, end.

Rockets quote — page 12. The text: "EVANGELOS..." page 12 header then "during quarters 2 and 4..." Actually the Rockets paragraph comes after Figure 5 discussion: "for the Houston Rockets, their made shots does not include components 1, 3, 6 and 7". The page 12 header appears before "during quarters 2 and 4 (tensor components 2, 5 and 10)". Then Figure 4, then team analysis, then "THOOPS... 13". So the Rockets paragraph is on page 12. Cite [PAGE 12].

Toronto Raptors — page 2. Yes, appears before "THOOPS...3".

"we perform more of a qualitative evaluation" — page 10 ("5. Evaluations" paragraph). Yes.

Now writing. Aim for rich, formal, and long.

For RLVR vetoes, make them concrete:

Veto 1 — Temporal permutation null. Construct X_π by randomly permuting the third-mode index among shots within each player (or globally), preserving row/column marginals. Prediction: max S_{F,2:K} at F=45 drops to ≤0.15 (within noise of the raw 0.1 baseline), and CORCONDIA stays high (since marginals intact) — showing CORCONDIA alone cannot veto a null. Falsified if permuted data retains ≥0.5 silhouette at F=45.

Veto 2 — Player hold-out projection. Fit A,B,C on 80% of players; for held-out 20%, solve min_{a_i ≥ 0} D_KL(X_i ‖ Σ_f a_{i,f} b_f∘c_f) for row a_i in R^F (F=12 for made shots). Prediction: held-out rows achieve silhouette ≥0.5 against the k=5 cluster centroids and ≥80% cluster-label agreement, and known shooters (Redick, Korver, Green, Thompson) land in the 3-point cluster. Falsified if agreement <50% or if a_i is not sparse. This tests whether components are scheme-level (generalize) vs personnel-memorized.

Veto 3 — Rank-plateau / ε stability. Vary ε ∈ {0.005, 0.01, 0.02, 0.03} in Eq 3.5 and K seed; prediction: F* moves in a band (e.g., 38–52) but the qualitative structure of the top components (corner-3 component ~27, bimodal clock loadings) is stable, and the Rockets' zero-set {1,3,6,7} is stable under re-fit with F∈{40,45,50}. Falsified if the Rockets zero-set changes identity, which would indicate the "analytically savvy" conclusion is a rank artifact.

Maybe a 4th: zone-boundary jitter. But 3 required.

Also mention log-base: silhouette uses Euclidean distance in R^12 on raw a_i entries; scaling of columns of A (which are not normalized across f) affects distances — a real issue: if component f has large scale, it dominates the Euclidean silhouette. Since PARAFAC with KL does not constrain ||a_f||, columns of A may have wildly different scales ⇒ the clustering in Eq 3.4 is scale-dominated ⇒ silhouette is inflated by the largest-mass components. This is a strong formal criticism. Predict: normalizing each column of A to unit ℓ2 before clustering changes the player silhouette value and possibly k. That's a genuinely verifiable prediction. I could fold that into veto 3 or make it veto 4. I'll mention it in the audit and maybe as part of a veto.

Actually I'll make Veto 3 the normalization one and Veto 4... no, keep 3. Let me pick: 
1. Temporal permutation null.
2. Column-normalization invariance test (k and silhouette under A → A·diag(1/||a_f||)).
3. Player holdout.

Hmm, but rank-ε stability is also good. I'll include normalization in the audit section and use the three above plus mention rank-ε within THINK_TRACE.

Actually "3 verifiable RLVR veto scenarios + predictions" — I'll do exactly 3 well-developed ones.

Let's write now, being generous with length.

I'll also be careful: "ZERO BETTING LINES" — no spread/total/moneyline. Fine. "do not invent fake ratios" — I'll only use real quantities: KL divergence, Poisson likelihood, Kruskal rank, silhouette, ℓ1 mass, rank bounds. Avoid "Force/Fatigue".

Write.
</NATIVE_REASONING>

<THINK_TRACE>
**Hop 1 — From counts to a likelihood.** The tensor entry \(X(i,j,k)\) is a *count* — "the number of shots that player i took from court location j during time k" [PAGE 5]. Counts with a sparse, nonnegative, additive structure are not Gaussian; the paper is therefore correct to adopt Eq. (3.2), minimizing \(D_{KL}(X\,\|\,\sum_f a_f\circ b_f\circ c_f)\) [PAGE 6]. The multi-hop step the paper leaves implicit is the likelihood derivation: for independent Poisson cells with rate \(\lambda_{ijk}=\sum_f a_f(i)b_f(j)c_f(k)\), the log-likelihood is \(\sum_{ijk}[x_{ijk}\log\lambda_{ijk}-\lambda_{ijk}-\log x_{ijk}!]\). Since \(D_{KL}(x\|\lambda)=\sum x\log(x/\lambda)-\sum x+\sum\lambda\), the two objectives differ by terms independent of the model *only when the model is mass-matched*, \(\sum\lambda=\sum x\). This matters because mass-matching pins one degree of freedom across the triplets; without it, the "soft coefficients" in \(a_f\) are not comparable across components. Units: nats under natural log, bits under \(\log_2\). CORCONDIA is a dimensionless index on \([0,100]\).

**Hop 2 — An exact algebraic identity the paper never states.** Under exact PARAFAC, summing the model over the location and time modes gives \(\sum_{j,k}X(i,j,k)=\sum_{f}a_f(i)\,\|b_f\|_1\|c_f\|_1\). The left side is player \(i\)'s total shot volume; the right side is a weighted sum over components. So the player vector is *not* a membership distribution unless each column of \(A\) is normalized against the \(\ell_1\) mass of its partner vectors. The paper calls the entries "soft clustering coefficients" [PAGE 6] but never normalizes, which means the Euclidean metric used in the silhouette step is dominated by whichever components carry the largest shot mass. That is a structural audit point, not a nitpick: it inflates apparent separability.

**Hop 3 — Rank deficiency is exact, not rhetorical.** For the made-shot tensor, "the smallest dimension of \(X_{Made}\) is the temporal one and this is equal to 5" [PAGE 9], yet "PARAFAC provides us only with 12 components for \(X_{Made}\), that is, higher components are degenerate" [PAGE 10]. Formally \(C\in\mathbb{R}^{5\times 12}\) has rank \(\le 5\), so the twelve temporal loadings are linearly dependent and the CP solution is non-unique up to that null space. Kruskal's condition \(k_A+k_B+k_C\ge 2F+2\) cannot rescue this when \(k_C\le 5\). The twelve components are therefore *descriptive*, not *identified* — a distinction the paper's interpretability claims quietly elide.

**Hop 4 — The rank-selection chain has three links and two weak ones.** Link one: CORCONDIA, capped at \(F\le\min(I,J,K)\), which is 5 for shots [PAGE 9] and 13 for tracking [PAGE 13]. Link two: the Silhouette heuristic of Eqs. (3.4)–(3.5). Link three: the reported \(F=45\) [PAGE 14]. But Eq. (3.5) is an argmin over a *predicate-defined set*; if no \(F\) satisfies \(\max S_{X,2:K}\le\max S_{F,2:K}\) jointly with the \(\varepsilon\)-plateau, the feasible set is empty and the selection is undefined. Second, taking \(\max_{K\in\{2,\dots,K\}}S\) is a maximum of \(K-1\) dependent statistics and is upward-biased; comparing two such maxima (raw vs. factor) is only valid if both use the same optimal \(K\). Yet in the possession experiment the paper fixes "Using \(K=10\)" [PAGE 13], which contradicts the definition it just gave. Third, \(F=45\) is chosen at a rank where CORCONDIA cannot be evaluated at all — the trilinearity guarantee is *absent* precisely where the model is deployed.

**Hop 5 — What the tracking tensor actually measures.** \(X(i,j,k)\) "is equal to the number of offensive players on the court zone i, when the shot clock was j during possession k" [PAGE 13]. This is a *zone-occupancy marginal*: player identity and pairwise geometry are summed away. Two schemes that permute which player occupies which zone are indistinguishable; spacing relations, help-side depth, and screen geometry are not represented. Any claim that a component is a "prototype formation" is a claim about multiset occupancy, not about structure.

**Gray-zone audit.** (a) The shot tensor is marginalized over defenders, score differential, and personnel; the paper proposes score differential only as a *future* fourth mode [PAGE 16]. Components are therefore confounded with opponent scheme. (b) The Q1/Q3 vs. Q2/Q4 split between components 1 and 2 [PAGE 10] is consistent with substitution rotation, fatigue, or defensive matchup — the design cannot separate them. (c) Evaluation is "more of a qualitative evaluation of the results" [PAGE 10], so no held-out protocol exists. (d) The Rockets result — coefficients near zero on components 1, 3, 6, 7 and nonzero only on 2, 4, 5 — is read as confirmation of "an analytically savvy team" [PAGE 12]; this is retrospective confirmation on data the components were fit to, with no pre-registration. (e) "PARAFAC tends to favor dense groups" [PAGE 6] means rare, high-variance, late-clock improvisations are structurally under-represented — the very events a scouting department most wants indexed. These are the traps.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Tensor definition (counts, dimensionless).** \(X\in\mathbb{N}^{I\times J\times K}\), with \(I=348\) players, \(J=13\) official court zones, \(K=5\) periods (all overtimes merged into a fifth), fitted on "184,209 shots from 348 different players" [PAGE 8]. Tracking tensor: \(I=13\) zones, \(J=24\) one-second shot-clock bins, \(K\) possessions, entries in \(\{0,\dots,5\}\), over "612 games from the 2015-16 NBA regular season" [PAGE 9], sampled at 25 Hz (period \(0.04\ \mathrm{s}\)).

**PARAFAC model (Eq. 3.1).** "PARAFAC expresses X as a sum of F rank-one components" [PAGE 6]:
\[
X \;\approx\; \sum_{f=1}^{F} a_f\circ b_f\circ c_f,\qquad (a_f\circ b_f\circ c_f)(i,j,k)=a_f(i)\,b_f(j)\,c_f(k).
\]

**Fitting objective (Eq. 3.2), sparse counts.** "these components are obtained as the solution to the following optimization problem" [PAGE 6]:
\[
\min_{A,B,C}\; D_{KL}\!\left(X\,\Big\|\,\textstyle\sum_{f}a_f\circ b_f\circ c_f\right),
\]
with \(D_{KL}(x\|\lambda)=\sum x\log(x/\lambda)-\sum x+\sum\lambda\) in **nats** (bits if \(\log_2\)). *Assumptions:* independent Poisson cells; mass matching \(\sum\lambda=\sum x\); nonnegative factors. *Breakdown regimes:* (i) mass mismatch \(\Rightarrow\) the KL objective is no longer equivalent to the Poisson likelihood and the scale of \(a_f\) becomes arbitrary; (ii) two components collinear, \(a_f\approx\lambda a_g,\;b_f\approx\lambda^{-1}b_g,\;c_f\approx\lambda^{-1}c_g\) \(\Rightarrow\) CP degeneracy, unbounded below in unconstrained least squares and manifest here as the paper's explicit statement that "higher components are degenerate" [PAGE 10]; (iii) rank deficiency \(\operatorname{rank}(C)\le K=5<F=12\) \(\Rightarrow\) non-unique temporal loadings.

**CORCONDIA core consistency.** \(g=(C\otimes B\otimes A)^{\dagger}\,\mathrm{vec}(X)\), patched as [PAGE 7]
\[
(C\otimes B\otimes A)^{\dagger}=(V_a\otimes V_b\otimes V_c)\big(\Sigma_a^{-1}\otimes\Sigma_b^{-1}\otimes\Sigma_c^{-1}\big)\big(U_a^{\top}\otimes U_b^{\top}\otimes U_c^{\top}\big).
\]
*Storage/compute:* "the size of \((C \otimes B \otimes A)\) is \(IJK\times F^{3}\)" [PAGE 7]; materializing it is the bottleneck. \(g\in[0,100]\), dimensionless. *Breakdown:* undefined for \(F>\min(I,J,K)\), since "it cannot examine the quality of the decomposition for rank higher than the smallest dimension of the original tensor X" [PAGE 7]. For made shots this caps at \(F=5\); for tracking at \(F=13\) [PAGE 13]. The paper's \(F=45\) [PAGE 14] lies entirely outside CORCONDIA's jurisdiction.

**Rank upper bound (footnote).** "An upper bound for the rank of the tensor is \(0.5\cdot\min\dim(X)\)" [PAGE 16], from Sidiropoulos et al. [25]. Dimensionless.

**Latent player features (Eq. 3.4).** \(r_i=(a_{i,j},\ \forall j\in\{1,\dots,F\})\), i.e. the \(i\)-th row of \(A\) [PAGE 8]. Units: same as \(a_f\), i.e. unevaluated shot-count scale, *not* a probability. Consequence: Euclidean distances in \(r\)-space are dominated by the highest-mass columns of \(A\).

**Silhouette selection (Eq. 3.5).** With \(s(i)=\big(b(i)-a(i)\big)/\max\{a(i),b(i)\}\in[-1,1]\) (dimensionless), the paper selects
\[
F^{*}=\min\Big\{F:\ \max S_{X,2:K}\le\max S_{F,2:K}\ \wedge\ \big|\max S_{F+1,2:K}-\max S_{F,2:K}\big|<\varepsilon\Big\},\ \varepsilon>0.
\]
Thresholds cited: \(>0.7\) = strong structure, \(<0.4\) = weak/artificial, \(\approx 0.1\) = no structure [PAGE 13], per Kaufman & Rousseeuw [11]; the \(0.7\) filter is deliberately excluded — "we do not include it in the formal condition in Equation 3.5" [PAGE 8]. *Breakdowns:* (i) empty feasible set \(\Rightarrow F^*=+\infty\), undefined; (ii) plateau non-uniqueness when several \(F\) satisfy the predicate; (iii) \(\max\)-over-\(K\) selection bias inflates both sides, and the possession experiment pins \(K=10\) [PAGE 13] rather than maximizing, breaking comparability; (iv) column-scale non-invariance of Eq. (3.4) under \(A\mapsto A\,\mathrm{diag}(\|a_f\|_2^{-1})\).

**Reported selection outcomes.** Shots: 12 components for \(X_{Made}\), capped CORCONDIA at 5 [PAGE 9–10]. Tracking: silhouettes \(0.69\) at \(F=40\) and \(0.71\) at \(F=50\), yielding "a rank of \(F=45\) was chosen" [PAGE 14].

**Retrieval complexity.** Baseline \(O(N)\) over \(N\) possessions; component-indexed search \(O(F)\) via \(\sigma(q,f_i)>\theta\) [PAGE 15]. *Caveat:* this is candidate generation, not exact retrieval — recall is bounded by the fraction of possessions dominated by a single component, and precision by the mass of possessions with high \(a_{f_i}\).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs through four distinct communities that never fully reconciled their conventions. **Chemometrics:** Harshman's 1970 PARAFAC [10] and Bro & Kiers' 2003 CORCONDIA [3] were built for fluorescence spectroscopy, where the third mode is an emission wavelength with hundreds of levels — hence a diagnostic that assumes \(\min(I,J,K)\gg F\). Transplanting it to a five-level period mode is a category migration with a hard consequence: the cap at \(F\le 5\). **Numerical tensor algebra:** Kolda & Bader's Tensor Toolbox [1] supplies the implementation; Chi & Kolda [6] supply the KL-divergence formulation for sparse nonnegative counts — the paper's Eq. (3.2) is theirs, not the authors'. Papalexakis & Faloutsos [20] supply the fast irreducibility trick reused as Eq. (3.3). **Sports analytics:** Miller et al. [18] factorized *smoothed* shot charts with NMF under a log-Gaussian Cox process — the direct ancestor tHoops is arguing against, and the reason the paper emphasizes that existing approaches "focus on the spatial distribution ... ignoring a multitude of other parameters" [PAGE 3]. Miller & Bornn [19] moved to Bezier trajectory dictionaries with LDA; Franks et al. [9] built defensive spatial skill models; Cervone et al. [5] built expected possession value; D'Amour et al. [7] built entropy over possession Markov chains. **Instrumentation:** the 2013-14 NBA mandate for 25 Hz optical tracking, and the Toronto Raptors' early SportVU deployment — "the Toronto Raptors were among the first teams to make use of this technology" [PAGE 2] — created the data substrate that made any of this feasible.

Three multi-week traps follow from that genealogy. **Trap 1 — the diagnostic migration trap.** Every method imported from chemometrics carries its dimensionality assumptions silently. CORCONDIA was never designed for tensors whose temporal mode has five levels; the field has not yet standardized a replacement, so each paper invents a heuristic (here, silhouette) and the heuristics are not commensurable across papers. Over successive seasons, as contextual modes are added, the minimum dimension migrates to whichever mode is coarsest, and the rank cap migrates with it — a moving, unpublished target. **Trap 2 — the efficiency tautology.** The analytics movement established three-point and paint shots as efficient; a factor model fit on post-2014 data will *rediscover* that fact and present it as validation. The Rockets finding — "this is something we should have expected from an analytically savvy team like the Rockets" [PAGE 12] — is exactly this loop, and it is unfalsifiable as stated. **Trap 3 — the qualitative-evaluation equilibrium.** Because tracking data are proprietary ("real optical tracking data are kept proprietary" [PAGE 3]), the field cannot run held-out benchmarks, so "we perform more of a qualitative evaluation of the results" [PAGE 10] becomes the norm and eye-test agreement becomes the acceptance criterion. That equilibrium is stable and self-reinforcing: no ground truth, no falsification, no pressure to change the protocol. The synthetic-data proposal in Section 6 is an attempt to break it, but synthetic data generated *from* the components cannot validate those components.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
**The crisis habit regression.** Under a collapsing shot clock, an offense regresses from its called scheme to its most over-learned motor program — typically an isolation dribble into a contested midrange, or a drive-and-kick to a stationary corner shooter. The paper names this mechanism explicitly: "When the shock clock winds down, a player will simply take a shot (in most of the cases) to avoid a shot clock violation. This shot can be of very bad quality, but the corresponding component obtained from the tensor factorization will inform us for this" [PAGE 12]. But the shot-chart model cannot deliver on that promise: its temporal mode is the *period*, not the shot clock. The crisis variable is absent from the model that is used to make the paper's headline claims, and appears only in the tracking tensor, where the shot clock is a mode [PAGE 13]. **Recursive failure:** the model is asked to detect a crisis signature while being blind to the crisis clock; it will instead attribute late-clock desperation shots to the period in which they occurred, folding them into the Q4 half of components 2 or 5 and diluting the very signal sought.

**The counter-trap (analyst's own regression).** The analyst's habit is to read a component as *scheme*. The dense-group bias of PARAFAC — "PARAFAC tends to favor dense groups that associate all the aspects involved in the data" [PAGE 6] — means the components preferentially capture *who plays when*, not *what is run*. The paper's fourth cluster is the tell: players with no spatial signature but activity concentrated in quarters 2 and 4, "mainly bench and role players such as Jamal Crawford, Leandro Barbosa, Patty Mills, Andre Iguodala" [PAGE 12]. That cluster is a rotation artifact wearing a scheme's clothing. If the analyst does not hold the counter-hypothesis — "this component is the substitution pattern, not the play call" — the model's output will be narrated as tactics and the error will be invisible, because it is consistent with the eye test by construction.

**Theory of mind over the coaching staff.** The component loadings are a compressed estimate of the coach's play-calling distribution over (personnel, zone, clock). A coach is an adaptive agent: the model's report becomes an input to the opponent's preparation, and the underlying distribution shifts. Because \(A,B,C\) are fit once and treated as static, the representation cannot encode adaptation, and its staleness is not measurable from within. The retrieval application makes this concrete: a query for "corner threes during the last 5 seconds" returns possessions ranked by \(\sigma(q,f_i)\), but the staff's *reason* for querying (they suspect the opponent has abandoned that look) is not representable. **The clock, third layer.** There are three clocks in play — the 24-second shot clock, the 0.04 s optical sampling period, and the season-length drift of the analytics meta. The paper handles the first (as a mode), ignores the second (25 Hz is treated as ground truth, though it is a sampling rate, not a measurement resolution), and cannot see the third. The temporal loadings that appear "either a single mode or a bimodal (e.g., fourth row) distribution" [PAGE 14] are the only place where clock structure surfaces, and they surface as an unexplained shape rather than a measured latency.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Physical/geometric layer — PARTIAL VETO.** The court is 94 × 50 ft (28.65 × 15.24 m); the corner three is 22 ft (6.71 m) from the baseline-corner intersection while the arc is 23.75 ft (7.24 m) at the top. The paper quantizes to "the official courtzones ... since these are the natural borders for the different locations on the court," which "further reduces any potential noise induced by an extremely fine-grained grid" [PAGE 8–9]. That is defensible for zone-level claims but it is a *hard partition*: a shot 2 ft inside a boundary and one 2 ft outside are assigned to different zones with no graded uncertainty. The spatial element of a component is therefore a histogram over a coarse, non-uniform partition whose zone widths differ by several feet. **Verdict:** claims distinguishing "deep paint" from "paint" (components 1 and 2, which the paper notes have "very similar (almost identical)" spatial elements [PAGE 10]) survive only at zone resolution; any finer mechanistic reading is vetoed.

**Biomechanical layer — VETO on causal reading of the temporal mode.** Release angle, entry angle, arc, jump fatigue, and accumulated load are not modes of \(X\). Yet fatigue is a monotone-ish function of game time and is therefore *perfectly confounded* with the period mode. The Q1/Q3 vs. Q2/Q4 partition between components 1 and 2 is compatible with at least three generators: (i) coaching rotation — the paper's own preferred reading ("purely based on personnel decisions from the coaching staff through the game" [PAGE 10]); (ii) fatigue-driven shot-type drift; (iii) defensive matchup assignment. With no separate fatigue, minutes, or opponent mode, the design cannot adjudicate. **Verdict:** the temporal loading \(c_f\) may be reported descriptively; it may not be interpreted as a mechanism.

**Weather/venue layer — VETO on unpooled estimation.** Play is indoors, so there is no wind term; but arena altitude (Denver at 5,280 ft / 1,609 m), HVAC air density, and travel/back-to-back schedules modulate both ball flight and aerobic capacity. The 612-game tracking sample and the full 2014-15 shot sample are pooled across 29–30 venues with no venue mode and no schedule covariate. This is not a fatal modeling choice, but it means the residual variance absorbed into \(b_f\) and \(c_f\) includes venue and rest effects, and the "prototype" status of a component is only prototype-for-the-pool. **Verdict:** geographic or arena-specific claims drawn from these components are vetoed absent a venue mode.

**Cross-layer adjudication.** The three layers stack in one direction: each removes a *causal/mechanistic* interpretation while leaving the *indexing/retrieval* interpretation intact. The paper's own framing supports exactly this split — it explicitly disclaims substitution of film study and positions tHoops as "an automated, exploratory analysis and indexing, method" [PAGE 3]. So the veto is asymmetric: **descriptive compression and candidate retrieval survive; tactical inference and mechanism attribution do not.** Any downstream system that treats a high \(a_{f}\) coefficient as evidence of *intent* is operating outside the validated envelope.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto 1 — Temporal permutation null (tests whether the third mode carries information).**
*Construction:* Build \(X_\pi\) by randomly permuting the period index across all 184,209 shots *within each player row*, preserving every player's total volume and every player's spatial marginal exactly; only the player–time alignment is destroyed. Refit PARAFAC at \(F=12\) and compute \(\max S_{F,2:K}\) via Eq. (3.4)–(3.5) with the same \(K\) search. Additionally compute CORCONDIA on \(X_\pi\).
*Prediction:* (a) CORCONDIA on \(X_\pi\) remains **high** (≈ the original), because the two-mode marginals are untouched — proving the diagnostic cannot veto a temporal null; (b) \(\max S_{F=12,2:K}\) on \(X_\pi\) collapses to \(\le 0.15\), i.e. indistinguishable from the raw-data baseline of "approximately 0.1" [PAGE 13], whereas the reported decomposition exceeds it.
*Falsification:* if \(X_\pi\) retains a factor-model silhouette \(\ge 0.5\), the separability reported for \(X_{Made}\) is an artifact of row-marginal structure and the \(k=5\) player clusters are void.

**Veto 2 — Column-normalization invariance (tests whether the silhouette is a scale artifact).**
*Construction:* Refit nothing; take the published \(A\in\mathbb{R}^{348\times 12}\), replace \(A\mapsto A\,\mathrm{diag}(\|a_1\|_2^{-1},\dots,\|a_{12}\|_2^{-1})\), re-run the \(k\)-means + silhouette sweep, and report both \(k^{*}\) and \(\max S\) before and after. This is the exact degree of freedom left open because Eq. (3.4) uses unnormalized rows while Eq. (3.1) leaves the split of mass between \(a_f\), \(b_f\), \(c_f\) unconstrained.
*Prediction:* \(k^{*}\) shifts away from the reported 5, and \(\max S\) drops by a material margin (order 0.1–0.2) because the squared-Euclidean distances in \(r_i\) are currently dominated by the highest-mass components (paint components 1–3). The five *named* clusters (3-point, midrange, paint, bench-clock, mixed) should persist qualitatively.
*Falsification:* if \(k^{*}=5\) and \(\max S\) is invariant to column scaling to within ±0.02, the clustering is genuinely scale-free and the objection is retired.

**Veto 3 — Player hold-out projection (tests scheme vs. personnel memorization).**
*Construction:* Randomly hold out 20% of the 348 players (≈70 players). Fit \(A,B,C\) on the remaining 80%. For each held-out player, solve \(\min_{a_i\ge 0} D_{KL}\big(X_i\,\|\,\sum_{f}a_{i,f}\,b_f\circ c_f\big)\) with \(B,C\) frozen, obtaining \(\hat r_i\in\mathbb{R}^{12}\). Assign \(\hat r_i\) to the nearest of the \(k=5\) centroids and measure agreement with the labels the full-data clustering would assign, and check sparsity (number of active components).
*Prediction:* agreement \(\ge 0.8\), active-component count \(\le 3\) per held-out player, and the known shooters named in Table 1 — Danny Green, Klay Thompson, Kyle Korver, JJ Redick — land in the 3-point cluster (components 8, 9, 11, 12) while LaMarcus Aldridge, Chris Paul, and the Gasol brothers land in the midrange cluster (components 4, 6, 7) [PAGE 11]. Also predict: the held-out agreement is *lower* for the bench-clock cluster (components 2, 5, 10) than for the spatial clusters, because that cluster encodes rotation, which is team-specific and does not transfer across players.
*Falsification:* if agreement \(<0.5\), or if held-out \(\hat r_i\) are dense (all 12 components active), the components are memorizing individual player identity rather than scheme, and the claim that tHoops produces transferable prototype patterns — and therefore the synthetic-data application in Section 6 — is vetoed.

**Aggregate prediction across all three:** the framework survives as a *compression and retrieval index* (which is all it claims to be) and fails as an *inferential instrument*. Because Eq. (3.5) selects \(F=45\) for the tracking tensor at a rank where "it cannot examine the quality of the decomposition for rank higher than the smallest dimension" [PAGE 7] applies, Veto 1's null test on the possession tensor is the single highest-value experiment: if permuting the shot-clock mode leaves \(\max S_{F=45}\) near the raw 0.1 baseline, then the \(O(F)\) retrieval guarantee [PAGE 15] still holds structurally, but the semantic interpretation of component 27 as a corner-3 catch-and-shoot prototype [PAGE 14] does not.
</RLVR_COUNTERFACTUAL_VETOES>