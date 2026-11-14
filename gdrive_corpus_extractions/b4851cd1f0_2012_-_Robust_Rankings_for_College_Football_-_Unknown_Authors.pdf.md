---
source: "2012 - Robust Rankings for College Football - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 22
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4025
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about robust rankings for college football (Colley Matrix method) and produce a response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully analyze the source text provided (22 pages of a paper by Samuel Burer, 2012, "Robust Rankings for College Football").

Key content from source:
- Colley Matrix (CM) method: C := 2I + Diag((W+WT)e) - (W+WT), b := e + 1/2(W-WT)e, Cr = b. [PAGE 5]
- Data: 2006-2011 regular seasons, no postseason. 2010: 3,960 games, 730 teams, 120 FBS, 772 games involving at least one FBS team, n=195 teams rated (FBS + outside opponents). [PAGE 7-8]
- Sensitivity analysis: top t=25 teams, bottom teams with winning percentage < ω=0.3. Inconsequential games between bottom teams. Switch measure δ(W, W') = sum over i in T of |π_i - π'_i|. [PAGE 8-9]
- Figure 1 histograms: L=1 mean=5.1, median=4, min=0, max=20, stdev=4.9. L=2 mean=6.5, median=4, min=0, max=28, stdev=6.3. [PAGE 10]
- Table 1: 2007 example, Marshall-Rice switch, δ=20. [PAGE 11]
- Robust method CM+: MINLP, min_r max_{Δ∈D(Γ)} ||Cr - b'||_p, p=2. Γ is number of switched inconsequential games to protect against. [PAGE 12-13]
- Equation transformations, constraint generation, CPLEX solution <1 minute typically. [PAGE 13-14]
- Results: Γ=0 same as CM. Γ sufficiently large (≥N) completely insensitive. Γ=5: Figure 4 histograms L=1 mean=1.8, median=0, min=0, max=10, stdev=2.4. L=2 mean=2.5, median=2, min=0, max=14, stdev=2.8. [PAGE 16-17]
- Figure 5 bubble plots show CM+ below x=y line mostly. Worst-case CM switch measures ~15-20 for L=1, 20-25 for L=2 reduced. [PAGE 17-18]
- Conclusion: computation typically less than a minute. [PAGE 18]

I need to produce >=1000 words total across sections. Each section must be present.

Let me plan:

THINK_TRACE (>=400 words): Deep multi-hop derivation. Discuss the logical chain from Colley Matrix linear system -> sensitivity to inconsequential games -> robust optimization formulation -> MINLP -> constraint generation -> empirical validation. Gray-zone audit: ambiguities in definition of inconsequential (ω=0.3), Γ selection, handling of non-FBS teams (n=195 but only FBS ranked), p-norm choice (p=2 vs p=∞ footnote), omitted games vs switched games distinction, computational scaling with N and Γ, tie handling, sorting after deleting non-FBS teams from r, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX for W, C, b, D, D(L), δ, MINLP (4), (5), (6), subproblem. Units: dimensionless ratings, switch measure is integer rank-shift sum (unitless count), Γ dimensionless integer, ω dimensionless probability/winning percentage. Page citations [PAGE 5], [PAGE 9], [PAGE 12], etc. Breakdown regimes: Γ=0 recovers CM; Γ≥N complete insensitivity; C positive definite/diagonally dominant; D(Γ) cardinality sum binomial; solve time <1 minute typical but hours for large N, Γ.

RETROCAUSAL_GENEALOGY: Historical lineage: Colley Matrix [12], BCS usage since 1998, 2010 LSU/Boise State glitch (omitted Appalachian State-Western Illinois FCS game), Chartier et al. [9] sensitivity/stability, robust optimization [7], Bertsimas & Sim [8], El Ghaoui & Lebret [13]. Multi-week traps: weekly recalculation, Γ conservatism vs stability, top-3 confirmation in 2008, non-monotonic rank trends, stabilization at Γ≥7 in 2008.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: when rankings face a crisis (2010 BCS glitch), operators revert to patching data rather than robust formulation. Counter-trap: CM+ protects against switched inconsequential games but not omitted games; user might over-trust robustness and ignore data quality. Clock: rankings recalculated ~once per week, computation <1 min, so time is not a barrier but Γ must be set before knowing which games switch.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since this is sports ranking, physical layer is the actual game outcomes (win/loss). Weather doesn't enter the model explicitly (only win-loss). Biomechanical not relevant. Veto proof: The model assumes no ties, win matrix W, schedule fixed. If a game is omitted (data error), CM+ does not protect (explicitly stated). If weather causes cancellation, that's a schedule change, not a win-loss switch, outside model scope. Veto: any perturbation outside D(Γ) (e.g., changing consequential games, omitting games, changing schedule) invalidates robustness guarantee.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
1. Scenario: Γ=0 but user believes robust; prediction: switch measure identical to CM, max δ=20 for L=1 (from Figure 1). Veto triggers if claimed robustness with Γ=0.
2. Scenario: Omitted FCS game (like 2010 LSU/Boise State); prediction: CM+ offers no protection because omitted games not in D(Γ) and model explicitly excludes omission handling [PAGE 4-5]. Veto triggers if robustness claimed against data omissions.
3. Scenario: Γ < actual number of switched inconsequential games L; prediction: partial sensitivity reduction but not complete; e.g., Γ=5, L=2 gives mean δ=2.5 vs CM mean 6.5, but worst case still 14. Veto triggers if complete insensitivity expected for Γ < N.

Need to ensure no betting lines. The paper mentions BCS, rankings, bowls, national champion. No spreads/totals/moneylines/odds. I must not mention any.

Word count: Need >=1000 across sections. Let's aim for ~1500+ total to be safe.

Need exact XML section names. No markdown outside? Probably fine to just output the XML sections. I should make sure each section is substantive.

Let me draft carefully.

THINK_TRACE: >400 words. I'll write maybe 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Include equations.

RETROCAUSAL_GENEALOGY: Historical.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: Veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

I need to cite [PAGE N] markers. The source text has markers like --- [PAGE 1 of 22] ---. I should reference them as [PAGE 5], etc.

Let's write.

Check for toy equations: I won't invent fake ratios. I'll use the actual equations from the paper.

Check word count: I'll write generously.

Let's compose.

THINK_TRACE:
- Start with derivation chain.
- W matrix definition.
- C matrix and b vector.
- Positive definiteness -> unique r.
- Sensitivity measure δ.
- Distributions H(L,y).
- Robust formulation MINLP.
- Transformation to convex QP with constraint generation.
- Computational regime.
- Gray zones: ω threshold, Γ choice, n includes non-FBS but ranking only FBS, p=2 footnote about p=∞ ambiguity, omitted vs switched games, non-monotonic ranks, stabilization.
- Word count target ~500.

SOURCE_OPERATORS_AND_EQUATIONS:
- LaTeX block.
- Units: W_ij count (dimensionless integer), C dimensionless, b dimensionless, r dimensionless rating, δ integer rank displacement (unitless), Γ dimensionless integer, ω dimensionless in [0,1], N total inconsequential games count.
- Page citations.
- Breakdown: C invertible iff diagonally dominant positive definite; Γ=0 recovers CM; Γ≥N complete insensitivity; cardinality |D(Γ)| = sum_{γ=0}^Γ binom(N,γ); solve time <1 min typical but scales poorly.

RETROCAUSAL_GENEALOGY:
- Colley 2002, BCS 1998, 1990 split national title, 2010 LSU/Boise State glitch, Chartier et al. 2011, robust optimization lineage Ben-Tal et al. 2009, Bertsimas & Sim 2004, El Ghaoui & Lebret 1997.
- Multi-week traps: weekly recalculation, Γ set ex ante, top-k stability vs whole roster volatility, non-monotonic Γ path.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: After 2010 glitch, reaction was to fix data omission (better data handling), not robustify ranking algorithm. Paper explicitly says omission not handled because preventable by careful data handling [PAGE 4]. This is regression to procedural patch rather than structural robustness.
- Counter-trap: User sets Γ high believing bulletproof; CM+ only handles switched inconsequential games within D(Γ), not omitted games, consequential game flips, or schedule changes.
- Clock: Computation <1 minute [PAGE 14], weekly recalculation feasible; but Γ must be fixed before week's results; if actual switches exceed Γ, robustness degrades gracefully but not guaranteed.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: actual game result (win/loss) is the atomic input; model has no point differential, weather, injuries, biomechanics.
- Veto conditions: (1) omitted game not in W at all — outside model scope [PAGE 4-5]; (2) game between top teams (consequential) switched — not in I, Δ constrained to zero [PAGE 9]; (3) schedule change / cancellation — alters C matrix, violating assumption that C fixed [PAGE 12-13]; (4) ties — prohibited by definition [PAGE 5].
- Weather veto: since only win-loss binary outcome used, a weather-delayed game that ends as a win/loss enters identically; a canceled game changes schedule and C, which is not robustified.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Γ=0 robustness claim. Prediction: δ distribution identical to CM (Figure 1: mean 5.1, max 20 for L=1). Veto if operator claims robustness with Γ=0.
- Scenario 2: Omitted game (2010 FCS omission). Prediction: CM+ provides zero protection; LSU/Boise State swap .0063 BCS margin can still occur [PAGE 4-5]. Veto if robustness claimed against missing data.
- Scenario 3: Γ=5, L=2 actual switches beyond protection. Prediction: mean δ drops from 6.5 (CM) to 2.5 (CM+), max from 28 to 14 [PAGE 10, 17]; not zero. Veto if complete insensitivity expected for Γ<N.

Need to ensure total word count >=1000. Let's write substantial content.

I'll now produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain begins with the Colley Matrix (CM) linear algebra on [PAGE 5]. Let W be the n×n win matrix with W_ij equal to the number of times team i beat team j, W_ii=0, and no ties. Define C := 2I + Diag((W+W^T)e) − (W+W^T) and b := e + ½(W−W^T)e, where e is the all-ones vector. Because C is diagonally dominant and positive definite, C^−1 exists, and the ratings vector r is the unique solution of Cr=b. Sorting r in descending order yields the ranking permutation π. This is the baseline against which all robustness claims are measured.

The first logical hop is the definition of “inconsequential.” On [PAGE 8–9], the authors fix t=25 (top teams) and ω=0.3 (bottom teams by winning percentage). The bottom set B consists of teams whose win fraction is below ω; an inconsequential game is any game between two members of B; the set I contains all such unordered pairs. Crucially, T (top 25) and B never intersect in the 2006–2011 data, so the perturbation is structurally isolated from the elite by construction. The perturbation set D allows Δ to alter only entries corresponding to pairs in I, with Δ_ij + Δ_ji = 0 to preserve win/loss consistency, and −W_ij ≤ Δ_ij ≤ W_ji to prevent inventing games that did not occur. The switch measure δ(W,W′) = Σ_{i∈T}|π_i − π′_i| is an integer, unitless rank-displacement norm over the top 25.

The second hop is empirical sensitivity. Enumerating all Δ∈D(L) for L=1 and L=2 across seasons yields the histograms in Figure 1 on [PAGE 10]. For one switched game, mean δ=5.1, median=4, max=20, stdev=4.9; for two games, mean=6.5, median=4, max=28, stdev=6.3. Table 1 on [PAGE 11] gives a worst-case 2007 example where switching Marshall–Rice (both below 30% winning percentage) moves West Virginia down four spots and yields δ=20, illustrating that a “far away” game can propagate through strength-of-schedule terms in C and b to reshuffle the top quartile.

The third hop is the robust reformulation CM+ on [PAGE 12–13]. For user-chosen Γ≥0, the method solves min_r max_{Δ∈D(Γ)} ||Cr − b′||_2. Because C depends only on the schedule and Δ+Δ^T=0, C′=C exactly; only b′=b + ½(Δ−Δ^T)e changes [PAGE 12]. Squaring the norm and introducing auxiliary variable t converts the inner maximization into a family of linear constraints indexed by specific Δ̄∈D(Γ), yielding a strictly convex quadratic program (6). Since |D(Γ)| = Σ_{γ=0}^{Γ} binom(N,γ) where N is the total number of inconsequential games, explicit enumeration is intractable for large N; the paper therefore uses constraint generation: solve a restricted QP, then solve a subproblem over Δ to find a violated constraint, and repeat until the subproblem’s optimal value is nonpositive [PAGE 13]. CPLEX solves typical instances in under a minute [PAGE 14].

Gray-zone audit: (1) ω=0.3 is user-adjustable; changing it redefines B and I, altering N and the robustness guarantee. (2) Γ is not statistically calibrated; no distribution over switches is assumed, so Γ is purely conservative intuition [PAGE 6]. (3) The data rate all n teams (including non-FBS opponents) but delete non-FBS entries before sorting FBS rankings [PAGE 8], meaning C and b are season-wide while the displayed ranking is a induced sub-order. (4) A footnote on [PAGE 12] notes the original p=∞ formulation created ambiguous alternative optima, motivating the switch to p=2; this is a modeling choice, not a theorem. (5) Omitted games are explicitly excluded from scope because they are deemed a data-handling failure rather than a ranking failure [PAGE 4–5], so CM+ does not protect against the 2010 LSU/Boise State FCS omission. (6) Rank trends vs Γ are non-monotonic and stabilize only after sufficient Γ (e.g., Γ≥7 in 2008, [PAGE 13]), so intermediate Γ values can reorder mid-tier teams without improving elite stability.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, page citations, and breakdown regimes.

Win matrix (count dimensionless integer):
W_{ij} := number of times team i beat team j, \quad W_{ii}=0,\quad W_{ij}=W_{ji}=0 \text{ if unplayed}. \quad [\text{PAGE 5}]

Colley system:
C := 2I + \operatorname{Diag}((W+W^T)e) - (W+W^T) \qquad [\text{PAGE 5, Eq. (1)}]
b := e + \frac{1}{2}(W-W^T)e \qquad [\text{PAGE 5, Eq. (2)}]
Cr = b, \quad r := C^{-1}b. \quad [\text{PAGE 5}]

C is diagonally dominant and positive definite; C^{-1} exists. Ratings r are dimensionless real numbers sorted descending to obtain permutation π. [PAGE 5]

Bottom and top sets:
B := \{ i : \frac{\sum_j W_{ij}}{\sum_j(W_{ij}+W_{ji})} < \omega \}, \quad \omega=0.3. \quad [\text{PAGE 8}]
T := \{ i : \pi_i \le t \}, \quad t=25. \quad [\text{PAGE 8}]

Inconsequential pair set:
I := \{ (i,j) \in B\times B : i<j,\; W_{ij}+W_{ji} > 0 \}. \quad [\text{PAGE 8}]

Perturbation set:
D := \{ \Delta \in \mathbb{Z}^{n\times n} : \Delta_{ij}=\Delta_{ji}=0 \;\forall (i,j)\notin I;\; \Delta_{ij}+\Delta_{ji}=0 \;\forall (i,j)\in I;\; -W_{ij}\le \Delta_{ij}\le W_{ji} \;\forall (i,j)\in I \}. \quad [\text{PAGE 9}]

Switch count:
D(L) := \{ \Delta\in D : \sum_{i<j} |\Delta_{ij}| \le L \}, \quad |D(L)| = \sum_{\ell=0}^{L} \binom{N}{\ell}, \quad N := \sum_{(i,j)\in I}(W_{ij}+W_{ji}). \quad [\text{PAGE 9}]

Switch measure (unitless integer rank displacement):
\delta(W,W') := \sum_{i\in T} |\pi_i - \pi'_i|. \quad [\text{PAGE 9}]

Empirical distributions (merged 2006–2011):
H(1,·): mean=5.1, median=4, min=0, max=20, stdev=4.9. \quad [\text{PAGE 10}]
H(2,·): mean=6.5, median=4, min=0, max=28, stdev=6.3. \quad [\text{PAGE 10}]

Robust MINLP (p=2):
\min_r \max_{\Delta\in D(\Gamma)} \|Cr - b'\|_2, \quad b' = b + \frac{1}{2}(\Delta-\Delta^T)e. \quad [\text{PAGE 12, Eqs. (3)–(4)}]

Convex reformulation with auxiliary t:
\min_{r,t} \|Cr-b\|_2 + t \quad \text{s.t.} \quad (b-Cr)^T(\bar\Delta-\bar\Delta^T)e + \frac{1}{4}\|(\bar\Delta-\bar\Delta^T)e\|_2 \le t \;\; \forall \bar\Delta\in D(\Gamma). \quad [\text{PAGE 13, Eq. (6)}]

Constraint-generation subproblem:
\max_{\Delta\in D(\Gamma)} (b-C\bar r)^T(\Delta-\Delta^T)e + \frac{1}{4}\|(\Delta-\Delta^T)e\|_2 - \bar t. \quad [\text{PAGE 13}]

Breakdown and singularity regimes:
• Γ=0: CM+ reduces exactly to CM (no robustness) [PAGE 6, PAGE 14].
• Γ ≥ N: robust rankings are completely insensitive to any switched inconsequential game; the scenario set is identical before and after perturbation [PAGE 14].
• C invertibility: guaranteed by diagonal dominance/positive definiteness; breaks only if the schedule structure makes C singular (not observed in FBS data because every FBS team plays ≥1 game) [PAGE 5].
• Computational: CPLEX 12.2 in Matlab R2010b solves typical instances in <1 minute on a 2.4 GHz Core 2 Quad with 4 GB RAM; larger N and Γ may require minutes to hours [PAGE 14].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week operational traps.

Lineage. The Colley Matrix (CM) originates in Colley’s 2002 manuscript [12] and was adopted as one of six computer rankings in the Bowl Championship Series (BCS), implemented from 1998 to resolve split national championships such as the 1990 season [PAGE 3]. The paper’s immediate motivation is the December 2010 BCS glitch in which a missing FCS playoff game (Appalachian State–Western Illinois) in Colley’s data set swapped LSU and Boise State at ranks 9–10, moving them across a BCS margin of only .0063 and also swapping Alabama/Nebraska at 17–18 [PAGE 4–5]. This demonstrates that a single omitted game between non-FBS teams can perturb the FBS top tier because C and b couple every team through shared opponents in the linear solve.

Scientific ancestry. The robustness formulation draws on robust optimization [7] (Ben-Tal, El Ghaoui, Nemirovski, 2009), the Bertsimas–Sim “price of robustness” budget-of-uncertainty paradigm [8] (2004), and robust solutions to uncertain least-squares systems [13] (El Ghaoui & Lebret, 1997). The authors also contrast with Chartier et al. [9] (2011), who studied CM stability under a hypothetical perfect season and found stability in idealized settings but instability in real-world data [PAGE 4].

Multi-week traps. In practice, college football rankings are recalculated roughly once per week during the season [PAGE 18]. This creates three traps:

1. Ex ante Γ lock-in. Γ must be selected before the week’s games are known. If the user picks Γ=3 but five inconsequential games flip that week, the robustness guarantee degrades; there is no online re-calibration of Γ within the paper’s framework.

2. Mid-tier volatility vs. elite stability. Figure 2 (2008 season, [PAGE 13]) shows the top-3 teams (Oklahoma, Florida, Texas) are invariant across Γ=0…10, but teams ranked 4–25 shift among themselves in non-monotonic ways (e.g., Utah/Texas Tech swap; Oklahoma St./Virginia Tech swap at Γ=6–10). A weekly consumer focusing only on the top-3 may falsely infer the whole ranking is stable.

3. Stabilization delay. Ranks stabilize only for sufficiently large Γ (Γ≥7 in the 2008 chart). Setting Γ too low produces a false sense of robustness because the top few teams appear fixed while the 10–25 band is still reshuffling.

The genealogical lesson is that robustness is not inherited from the CM’s mathematical elegance; it must be purchased with a user-chosen conservatism budget Γ and validated season by season.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. After the 2010 LSU/Boise State omission crisis, the natural institutional habit is procedural patching: improve data collection so FCS games are not omitted. The authors explicitly adopt this stance, stating they do not handle omitted games because “accidental omission can be prevented by more careful data handling” [PAGE 4]. This is a regression to data-quality hygiene rather than algorithmic robustness. The recursive implication is that operators will trust CM+ only against the specific threat model (switched inconsequential games) and will remain blind to the very omission-style failure that motivated the research.

Counter-trap. The counter-trap is over-trust in the Γ budget. A decision-maker may set Γ=5, observe Figure 4’s reduced switch measures (L=1: mean=1.8, max=10; L=2: mean=2.5, max=14 [PAGE 17]), and conclude the ranking is “robust” in a general sense. The trap is that CM+ guarantees nothing about (a) games between top contenders, which are excluded from I by construction [PAGE 8–9], (b) omitted games, which alter W’s support and thus C [PAGE 4–5], or (c) more than Γ switched inconsequential games. If an operator treats Γ as a statistical confidence level rather than a worst-case budget, they will misread the bubble plot in Figure 5 [PAGE 17]—where most CM+ points lie below the x=y CM line—as proof of universal insensitivity, when it is merely partial attenuation.

Clock. The computation clock is favorable: CM+ solves in typically under a minute [PAGE 14], so weekly recalculation is feasible. However, the decision clock is asymmetric: Γ is fixed before outcomes are observed, whereas the actual number of switched inconsequential games L is revealed only after the week completes. If L > Γ, the robust ratings vector r is still optimal for the assumed uncertainty set D(Γ), but the realized perturbation lies outside that set, and no performance bound applies. The recursive theory of mind therefore predicts that operators will under-set Γ during quiet weeks (to avoid rank churn) and be exposed when an unexpected cluster of bottom-team upsets occurs.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, weather, and structural veto adjudication.

Physical layer. The atomic input to CM+ is the binary win–loss outcome of each scheduled game [PAGE 5]. The model contains no point differential, no margin of victory, no player-level biomechanics, no injury status, and no weather covariate. Consequently, any physical event that changes the *schedule*—a weather cancellation, a postponement, or a forfeit—alters W’s support and the matrix C itself. Because the proof that C′=C relies on Δ+Δ^T=0 holding for a fixed schedule [PAGE 12], a schedule change is outside the robustness domain and triggers an immediate veto: CM+ has no guarantee.

Weather veto. A weather-delayed game that is eventually played and yields a win/loss enters the model identically to any other game; weather is not a separate layer. A canceled game removes a row/column interaction from W and W^T, changing Diag((W+W^T)e) and thus C. This is not a perturbation Δ∈D(Γ); it is a structural model break.

Biomechanical layer. Not represented. Player fatigue, travel, and rest are exogenous to the linear system. Any veto based on biomechanical imbalance (e.g., a team playing three games in twelve days) is invisible to CM+ and cannot be adjudicated inside the model.

Structural veto conditions (hard vetoes):
1. Omitted game: if a game exists in reality but is missing from W, C and b are mis-specified. The paper explicitly excludes this case [PAGE 4–5]. Veto: no robustness claim.
2. Consequential game flip: if a game involving at least one top-25 team (or any team outside B) switches, Δ is constrained to zero for that pair [PAGE 9], so CM+ does not protect the top tier against relevant upsets. Veto: elite rankings remain sensitive to top-vs-top or top-vs-bottom flips.
3. Tie: ties are disallowed by definition [PAGE 5]; a tie game cannot be encoded in W. Veto: model inapplicable.
4. Γ exhaustion: if actual switched inconsequential games exceed Γ, the realized Δ∉D(Γ). Veto: worst-case bound no longer holds; only empirical degradation is observed (Figure 4 shows reduced but non-zero δ for Γ=5) [PAGE 17].

Veto proof summary: CM+ is veto-proof only within the narrow tube of (i) fixed schedule, (ii) binary win/loss outcomes, (iii) switched games restricted to pairs in I, and (iv) at most Γ such switches. Any departure—weather cancellation, data omission, consequential upset, or Γ under-specification—voids the guarantee.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning verifiable reward) veto scenarios with predictions.

Scenario 1 — Zero-budget false robustness.
Setup: Operator deploys CM+ with Γ=0 but publicly labels the output “robust rankings.” Ground truth: Γ=0 implies D(0)={0}, so CM+ is algebraically identical to CM [PAGE 6, PAGE 14]. Prediction: Under L=1 switched inconsequential game, the switch-measure distribution matches Figure 1 exactly: mean δ=5.1, median=4, max=20, stdev=4.9 [PAGE 10]. Veto condition: If an auditor injects one Marshall–Rice-style switch and observes δ≥5 on average or a max near 20, the Γ=0 robustness claim is falsified. Verifiable metric: δ(W,W′) > 0 for non-trivial switches occurs with probability 1 under CM (since mean=5.1), contradicting any claimed insensitivity.

Scenario 2 — Omitted-game injection (2010 replication).
Setup: Remove one FCS–FCS game from the 2010 data set (mimicking the Appalachian State–Western Illinois omission) and recompute CM+ with Γ=5. Ground truth: The paper excludes omitted games from scope and notes the omission switched LSU/Boise State across a .0063 BCS margin [PAGE 4–5]. Prediction: CM+ ratings will change because C depends on the schedule; removing a game alters Diag((W+W^T)e) and (W+W^T), so C itself is not invariant. The switch measure δ for the FBS top 25 will be non-zero and potentially large (the historical analog moved multiple top-20 teams). Veto condition: If the system claims protection against “single-game data errors” and returns identical top-25 rankings after the omission, the claim is falsified; CM+ offers no omission robustness. Verifiable metric: Change in FBS top-25 membership or rank order after omission must be detectable.

Scenario 3 — Budget exceedance (Γ < actual L).
Setup: 2007 season, Γ=5, but inject L=2 switched inconsequential games drawn from I. Ground truth: Figure 4 (Γ=5) shows for L=2: mean δ=2.5, median=2, max=14, stdev=2.8 [PAGE 17]; Figure 1 (CM baseline, L=2) shows mean=6.5, max=28 [PAGE 10]. Prediction: CM+ will attenuate sensitivity relative to CM (most bubble points below x=y in Figure 5 [PAGE 17]) but will not achieve zero switch measure; worst-case δ remains 14, not 0. Veto condition: If an operator expects complete insensitivity (δ=0) for all L=2 instances because Γ=5 “sounds large,” the claim is falsified whenever δ>0, which occurs for a majority of non-trivial switches (mean=2.5). Verifiable metric: P(δ=0) < 1 under Γ=5, L=2; specifically, median δ=2 > 0.
</RLVR_COUNTERFACTUAL_VETOES>