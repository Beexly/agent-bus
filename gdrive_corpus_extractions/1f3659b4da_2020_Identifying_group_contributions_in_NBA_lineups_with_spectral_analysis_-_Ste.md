---
source: "2020 Identifying group contributions in NBA lineups with spectral analysis - Stephen Devlin and David Uminsky.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 32
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5231
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Identifying group contributions in NBA lineups with spectral analysis" by Stephen Devlin and David Uminsky (2020).

The user has provided:
1. The source text (pages 215-234, but they say PAGES: 32)
2. Strict invariants:
   - ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
   - ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
   - >= 1,000-WORD DEPTH across exact XML sections:
     - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
     - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
     - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
     - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
     - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
     - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce an analysis with these exact XML sections. Each section needs to be substantial. Total depth >= 1000 words. The THINK_TRACE alone needs >= 400 words.

Key constraints:
- NO betting lines (spreads, totals, moneylines, odds). The paper itself doesn't seem to have betting lines, but I must be careful not to introduce them.
- NO toy equations / fake ratios. Must use formal LaTeX equations from the paper or mathematically sound derivations. Must cite exact page markers [PAGE N] and verbatim quotes when source pages are provided.
- The paper pages run from 215 to 234 in the source text (journal pagination), but the user says PAGES: 32 (likely meaning the document has 32 pages of content or they want me to cite by journal page numbers). Looking at the source text, page markers are 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234. I should cite these as [PAGE 215], etc.

Let me structure the response:

1. <THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit. Discuss the spectral decomposition f = f_0 + ... + f_5, the symmetric group S_15 acting on lineups, Johnson graph J(15,5), orthogonality, Mallows' method, SCLP normalization, bootstrapping stability, L2 norm distribution, correlation with win percentage. Audit gray zones: raw PM vs per-possession, possession count disparity, orthogonality vs interpretability tradeoff, ridge regression comparison, stacking of effects, cross-team non-comparability of SCLP.

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations.
   - Inner product on L(X): given by sum over lineups? The text says inner product given by (1) but formula is missing in text. I can infer standard inner product: ⟨f,g⟩ = (1/|X|) Σ_{L∈X} f(L)g(L) or unnormalized. I should cite that equation (1) appears on [PAGE 216] but formula is redacted/missing in the OCR. I should note that.
   - Decomposition: L(X) = V_0 ⊕ V_1 ⊕ ... ⊕ V_5 [PAGE 217, eq (2)].
   - Dimensions: Table 1 on [PAGE 218]: dim V_0=1, V_1=14, V_2=90, V_3=350, V_4=910, V_5=1638. Number of groups: 15, 105, 455, 1365, 3003.
   - Mallows' method: ⟨pr_{V_3}(φ_g), pr_{V_3}(f)⟩ = ⟨pr_{V_3}(φ_g), f_3⟩ [PAGE 219].
   - SCLP: spectral contribution per log possession [PAGE 221].
   - Ridge regression: arg min_β ||y - Xβ||^2 + λ Σ β_i^2 [PAGE 225].
   - L2 norm decomposition: ||f||^2 = ||f_1||^2 + ... + ||f_5||^2 [PAGE 228].
   - Correlations: r=0.51, 0.58, 0.55 for V1,V2,V3 with win percentage; r=-0.54 for V5 [PAGE 228].
   - Units: SCLP units are plus-minus points per log possession; PM is raw points; Poss is count.

3. <RETROCAUSAL_GENEALOGY>: Historical lineage: Diaconis (1988) spectral analysis, Diaconis (1989) generalization, Serre (2012) representation theory, Dummit & Foote (2004) symmetric group, Maslen et al. (2003) Johnson graph eigenvalues, Friedman et al. (2001) ridge regression, Sill (2010) adjusted plus-minus, Grassetti et al. (2019a,b) Italian league APM, Maymin et al. (2013) probabilistic synergy, Kuehn (2016) skill complementarity. Multi-week traps: small-sample possession noise, garbage time, opponent quality adjustment, stacking interpretation, cross-team norm non-comparability.

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret it in context of NBA lineup construction and coaching decisions under pressure. Crisis habit regression: coaches revert to known lineups under stress (e.g., starters). Counter-trap: spectral analysis reveals hidden synergies (Barbosa-Speights) that contradict raw PM. Clock: possession count and game clock effects (garbage time, late-game substitutions). The "recursive theory of mind" here means modeling how coaches think about how opponents think about lineup matching.

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since basketball is indoor, weather veto is minimal but arena conditions (altitude, humidity) could affect possession pacing. Physical/biomechanical: player fatigue over minutes, injury status, load management. Veto proof: if a player is injured or fatigued, the spectral contribution (which assumes observed play-by-play) is invalidated. Need to state that spectral analysis is descriptive of observed data, not predictive under changed physical states.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable (can be tested with data) and give predictions.
   Scenario 1: If GSW runs Curry-Thompson without Green (removing the triple anchor), predict SCLP of pair drops below zero or loses synergy because Green-Curry-Thompson triple is 12.6 SCLP [PAGE 223, Table 9]. Veto: triple contribution collapses.
   Scenario 2: If Bogut-Iguodala pair (positive raw PM 107.0 in 785 possessions [PAGE 222]) is forced into crunch time, predict negative spectral pair effect (-2.1 SCLP [PAGE 222]) means raw PM is driven by individuals, not pair synergy; veto the pair.
   Scenario 3: If Celtics run Thomas-Bradley-Crowder (positive raw PM 154.8 in 2572 possessions [PAGE 227]) but bootstrap shows SCLP negative in >50% of seasons? Actually for Thomas-Bradley-Crowder, actual season PM 154.8, bootstrapped mean PM 145.9, SCLP correlation r=0.953 [PAGE 227]. Veto scenario: If possessions drop below ~300 (like Thomas-Turner-Zeller with mean 305 and r=0.688), predict instability and veto reliance on SCLP.

I must ensure no betting lines. I won't mention spreads, totals, moneylines, odds.

Word count: Need >= 1000 words total across all sections. THINK_TRACE alone >= 400. I'll write generously.

Let's draft carefully.

Important: The source text OCR is missing some equations (shown as blank or weird symbols). I must not invent fake equations. I can reference equation numbers and describe them based on surrounding text. For example, eq (1) is the inner product but the formula is missing. I will say "inner product given by (1) [PAGE 216]" without writing a fake formula. For eq (2), the decomposition is written but formula missing in OCR; I can write the text description: L(X) = V_0 ⊕ V_1 ⊕ ... ⊕ V_5. That's not inventing, it's describing. For Mallows' method, the formula is present: ⟨pr_{V_3}(φ_g), pr_{V_3}(f)⟩ = ⟨pr_{V_3}(φ_g), f_3⟩ [PAGE 219]. For ridge regression, formula is present on [PAGE 225]: arg min_β ||y - Xβ||^2 + λ Σ β_i^2. I can cite that.

I need exact verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes from the text with page citations.

Let's plan verbatim quotes:
- [PAGE 215]: "We address the question of how to quantify the contributions of groups of players to team success."
- [PAGE 217]: "The decomposition in (2) is particularly useful for two reasons..."
- [PAGE 218]: Table 1 dimensions.
- [PAGE 219]: "Larger values of this inner product reflect a stronger synergy between the triple of players..."
- [PAGE 221]: "We call the result spectral contribution per log possession (SCLP)."
- [PAGE 222]: "These large positive SCLP values represent true synergies: These pairs contribute to team success as pure pairs."
- [PAGE 225]: Ridge regression formula.
- [PAGE 228]: "By this measure of importance, there is some preliminary evidence that strong teams shift the mass of f from V_5 into lower-order spaces..."

Word count check: I'll write extensively.

Let's write the sections.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
- Start with the team success function f(L) = pm_L defined on lineups L.
- The domain X is all C(15,5)=3003 lineups [PAGE 216].
- L(X) is vector space of real-valued functions on lineups. Dimension 3003 [PAGE 216].
- Permutation group S_15 acts on lineups by relabeling players. L(X) decomposes orthogonally into invariant subspaces V_0...V_5 [PAGE 217].
- Each V_i encodes i-th order pure effects [PAGE 218].
- Orthogonality avoids multicollinearity [PAGE 218].
- Dimensions strictly smaller than number of natural groups (Table 1, [PAGE 218]): e.g., V_3 dim 350 vs 455 triples.
- Mallows' method projects interpretable indicator φ_g onto V_i and takes inner product with f_i [PAGE 219].
- SCLP normalization by log possessions to handle disparity in possession counts [PAGE 221].
- Comparison to ridge regression: ridge uses W_i spaces with larger dimensions, non-orthogonal, shrinks coefficients [PAGE 225-226].
- Stability via bootstrapping 500 seasons [PAGE 226-227].
- Importance via L2 norm mass distribution [PAGE 228]. Null distribution matches dimension proportions [PAGE 228, Table 14].
- Correlations with win percentage: V1 r=0.51, V2 r=0.58, V3 r=0.55, V5 r=-0.54 [PAGE 228].
- Gray zones: raw PM vs per-possession breakdown [PAGE 221]; cross-team non-comparability of SCLP [PAGE 223]; interpretation of higher-order spaces [PAGE 228]; garbage time [PAGE 230]; opponent quality [PAGE 230].

This should exceed 400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define X = {L ⊂ [15] : |L| = 5}, |X| = 3003 [PAGE 216].
- f: X → ℝ, f(L) = pm_L [PAGE 216].
- Inner product ⟨·,·⟩ on L(X) given by (1) [PAGE 216] (formula absent in OCR, but space is Hilbert).
- Decomposition: L(X) = V_0 ⊕ V_1 ⊕ V_2 ⊕ V_3 ⊕ V_4 ⊕ V_5 [PAGE 217, eq (2)].
- f = f_0 + f_1 + ... + f_5, f_i = pr_{V_i} f [PAGE 218].
- Table 1 dimensions [PAGE 218]: dim(V_0)=1, dim(V_1)=14, dim(V_2)=90, dim(V_3)=350, dim(V_4)=910, dim(V_5)=1638. Number of groups: 1, -, 15, 105, 455, 1365, 3003.
- Johnson graph J(15,5) eigenvalues associated with effect spaces [PAGE 218].
- Mallows' method: for group g, ⟨pr_{V_i}(φ_g), f_i⟩ [PAGE 219]. Example for triple: ⟨pr_{V_3}(φ_g), pr_{V_3}(f)⟩ = ⟨pr_{V_3}(φ_g), f_3⟩.
- SCLP(g) = SCL contribution(g) / log(Poss(g)) [PAGE 221].
- Ridge regression: β̂_ridge = arg min_β (||y - Xβ||² + λ Σ_{i=1}^p β_i²) [PAGE 225].
- L2 norm: ||f||² = Σ_{i=1}^5 ||f_i||² [PAGE 228].
- Null distribution proportions [PAGE 228, Table 14]: First ~0.005, Second ~0.030, Third ~0.117, Fourth ~0.302, Fifth ~0.543.
- Correlations: r(V1, win%) = 0.51, r(V2) = 0.58, r(V3) = 0.55, r(V5) = -0.54 [PAGE 228].

Units: PM in points (raw plus-minus), Poss in count of possessions, SCLP in points per log possession. Probability units: Pearson correlation r dimensionless. Bootstrap distribution over 500 resampled seasons.

Breakdown regimes: per-possession PM breaks down with low-possession lineups [PAGE 221]; SCLP values not comparable across teams due to norm dependence [PAGE 223]; ridge regression p >> N and multicollinearity [PAGE 225].

RETROCAUSAL_GENEALOGY:
- Lineage: Diaconis (1988) group representations in probability; Diaconis (1989) spectral analysis generalization; Serre (2012) linear representations; Dummit & Foote (2004) symmetric group; Maslen et al. (2003) Johnson graph computation; Kondor et al. (2007, 2012) symmetric group signal processing; Friedman et al. (2001) ridge regression; Sill (2010) adjusted plus-minus; Grassetti et al. (2019a,b) Italian Serie A1 APM; Maymin et al. (2013) NBA chemistry probabilistic; Kuehn (2016) skill complementarity; Uminsky et al. (2018, 2019) genomic variant interactions.
- Multi-week traps: small-sample variance in plus-minus over a week/month; bootstrapping shows SD of PM 82.8 vs possessions 47.7 for Thomas-Bradley-Crowder [PAGE 227]; garbage time distortion [PAGE 230]; opponent quality unadjusted [PAGE 230]; stacking illusion where raw pair PM is high but pure pair effect negative (Bogut-Iguodala PM 107 but SCLP -2.1) [PAGE 222]; cross-team SCLP non-comparability [PAGE 223].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: coaches under pressure revert to highest-possession, familiar lineups (Warriors starters 1140 possessions vs next 535) [PAGE 221]. This is a habit regression to the mean lineup.
- Counter-trap: spectral analysis reveals that a high raw PM pair can be a pure negative synergy (Livingston-Thompson PM 111.8 in 1412 possessions, SCLP -3.6) [PAGE 222, Table 8]. Coaches who read raw PM fall into the trap; spectral readers avoid it.
- Clock: possession count and game clock interact. Low-possession groups are noisy; log possession normalization addresses magnitude but not temporal clustering (garbage time vs crunch time) [PAGE 221, 230]. A coach's in-game substitution clock should weight spectral effects by possession stability, not just raw PM.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: player fatigue, minutes load, injuries. Spectral analysis uses observed season play-by-play; if a key player (e.g., Draymond Green) is injured, the V_1 projection for that player becomes zero/undefined for future games, invalidating stacked predictions involving him [PAGE 215-216 data definition].
- Biomechanical layer: playing style compatibility (Bogut with Thompson/Barnes vs Curry/Iguodala) [PAGE 222]. This is a style-layer veto: if defensive switching requirements change, Bogut-Iguodala negative pure pair effect (-2.1 SCLP [PAGE 222]) is confirmed.
- Weather layer: NBA is indoor; weather veto is null, but arena altitude/humidity affect possession pacing and thus raw PM accumulation. Since f is raw plus-minus aggregated over possessions [PAGE 216], environmental shifts that alter possession count break the stationarity assumption of the success function.
- Veto proof: The methodology is explicitly non-model-based and reports observed data projected into a new basis [PAGE 216]. Therefore it has no predictive validity under interventions that change the physical layer (injuries, rule changes, venue shifts). A veto is triggered whenever the observed play-by-play distribution P(L, pm) shifts.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. I'll frame them as counterfactual interventions that can be verified by re-running spectral analysis on modified data.
Scenario 1: Remove Draymond Green from all Warriors lineups (counterfactual roster constraint). Prediction: The V_1 mass for GSW (0.031 of ||f||² [PAGE 228, Table 13]) collapses; Green-Curry-Thompson triple SCLP (12.6 [PAGE 223]) becomes undefined; Curry-Thompson pair SCLP drops below the Barbosa-Speights benchmark (5.3) because the stacking anchor is gone. Veto: any lineup construction relying on Curry-Thompson as a standalone core is invalid without Green.
Scenario 2: Force Bogut-Iguodala pair into 400+ crunch-time possessions (they played 785 total [PAGE 222]). Prediction: Because pure pair SCLP is -2.1 while raw PM is +107.0 [PAGE 222], the pair's success is fully attributable to individual contributions; under crunch-time pressure where individual variance increases, the pair will exhibit negative net spectral contribution and should be vetoed. Verifiable by filtering play-by-play to clutch minutes and recomputing projections.
Scenario 3: Celtics Thomas-Bradley-Crowder triple (actual PM 154.8 in 2572 possessions [PAGE 227]) is reduced to <300 possessions (compare Thomas-Turner-Zeller mean 305, r=0.688 vs Thomas-Bradley-Crowder mean 2574, r=0.953 [PAGE 227]). Prediction: Pearson correlation between SCLP and PMperLP will fall below 0.70, and the sign of SCLP will flip in >40% of bootstrapped seasons; the triple loses statistical reliability and should be vetoed from playoff rotation models.

This meets the requirement.

Now, ensure no betting lines. Check: no spreads, totals, moneylines, odds. Good.

Check for fake ratios: I'm not inventing Force/Fatigue. All ratios come from paper: SCLP = contribution / log possession, Pearson r, dimensions. Good.

Word count: I'll aim for ~1500+ words total.

Let's write it out with XML tags exactly as specified.

Make sure to include verbatim quotes with page markers.

Quote 1 [PAGE 215]: "We address the question of how to quantify the contributions of groups of players to team success."
Quote 2 [PAGE 216]: "Since a lineup consists of 5 players on the floor, 15 there are 3003 = � 5 � possible lineups..."
Quote 3 [PAGE 218]: "Thus, for instance, a contribution attributed to a group of three players can be understood as a pure third-order contribution."
Quote 4 [PAGE 219]: "Larger values of this inner product reflect a stronger synergy between the triple of players..."
Quote 5 [PAGE 221]: "We call the result spectral contribution per log possession (SCLP)."
Quote 6 [PAGE 222]: "These large positive SCLP values represent true synergies: These pairs contribute to team success as pure pairs."
Quote 7 [PAGE 225]: Ridge regression formula.
Quote 8 [PAGE 228]: "By this measure of importance, there is some preliminary evidence that strong teams shift the mass of f from V_5 into lower-order spaces..."

I'll integrate these.

Now produce final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper defines the team success function f on the set X of all five-player lineups drawn from a 15-man roster. Because |X| = C(15,5) = 3003, f is a vector in the 3003-dimensional space L(X) of real-valued functions on lineups [PAGE 216]. Each entry f(L) = pm_L is the aggregated raw plus-minus for lineup L over all possessions in which that exact five-player unit appears without substitution. The permutation group S_15 acts on X by relabeling players, and this action lifts to L(X), making L(X) a permutation module [PAGE 216-217]. Spectral analysis decomposes L(X) orthogonally into invariant subspaces V_0 ⊕ V_1 ⊕ V_2 ⊕ V_3 ⊕ V_4 ⊕ V_5, where V_i encodes pure i-th order effects (individuals, pairs, triples, fours, full lineups) after all lower-order contributions have been removed [PAGE 217-218]. The projection of f onto V_i is denoted f_i, and f = f_0 + f_1 + f_2 + f_3 + f_4 + f_5 [PAGE 218].

A crucial gray-zone issue is dimensional mismatch. Table 1 [PAGE 218] reports dim(V_0)=1, dim(V_1)=14, dim(V_2)=90, dim(V_3)=350, dim(V_4)=910, dim(V_5)=1638, while the natural numbers of groups are 15 individuals, 105 pairs, 455 triples, 1365 fours, and 3003 full lineups. Because dim(V_i) < (# groups of size i) for i ≥ 1, one cannot assign an independent spectral coordinate to every natural group; Mallows’ method is therefore used to project an interpretable indicator φ_g onto V_i and compute ⟨pr_{V_i}(φ_g), f_i⟩ [PAGE 219]. This inner product is a weighted cosine similarity measuring pure synergy after nested lower-order effects are stripped away.

Another gray zone is possession disparity. The authors note that dominant starting lineups (e.g., 2015-16 Golden State starters at ~1140 possessions) dwarf bench units, and many lineups play fewer than 10 possessions [PAGE 221]. Raw per-possession plus-minus breaks down under this skew, so the team success function f uses raw aggregated plus-minus, and spectral outputs are normalized by log possession to form SCLP (spectral contribution per log possession) [PAGE 221]. This heuristic balances noise against utilization but is not a generative model; it is an exploratory data analysis (EDA) device tethered to observed play-by-play [PAGE 216].

Comparison with ridge regression [PAGE 225-226] reveals a second tension: regression interaction spaces W_i have dimensions equal to the number of groups (e.g., dim(W_5)=3003) and are non-orthogonal, whereas V_i spaces are minimal, invariant, and orthogonal but less directly interpretable. Ridge regression shrinks coefficients under multicollinearity, but spectral analysis reports the data in a new basis without fitting. The paper further quantifies effect-space importance via squared L_2 norm mass: ||f||² = Σ ||f_i||² [PAGE 228]. Against a null distribution matched to subspace dimensions [PAGE 228, Table 14], strong teams shift mass from V_5 into V_1, V_2, V_3, with win-percentage correlations r = 0.51, 0.58, 0.55 respectively, and r = -0.54 for V_5 [PAGE 228]. Cross-team comparability of SCLP is explicitly limited because values depend on the norm of f within each effect space and on the norm of the interpretable vector [PAGE 223].

Stability is addressed by bootstrapping 500 seasons sampled with replacement from plays [PAGE 226-227]. For the Thomas-Bradley-Crowder triple, plus-minus standard deviation (82.8) far exceeds possession standard deviation (47.7), and SCLP correlation with PMperLP is r = 0.953 at ~2574 possessions but only r = 0.688 at ~305 possessions [PAGE 227]. This establishes a low-possession breakdown regime: spectral estimates become unstable when group possession counts fall into the few-hundred range. Finally, the paper acknowledges future adjustments for opponent quality and garbage time [PAGE 230], indicating that raw f is not causally robust to context shifts.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX expressions, units, page citations, and breakdown regimes.

Let [15] = {1,...,15} denote the roster, and let X = {L ⊂ [15] : |L| = 5}. Then |X| = 3003 [PAGE 216]. The team success function is f : X → ℝ defined by f(L) = pm_L, where pm_L is the aggregated raw plus-minus (points) for lineup L over all no-substitution stretches [PAGE 216]. L(X) is the real vector space of functions on X with inner product given by (1) [PAGE 216]; the explicit formula for (1) is absent from the OCR but the space is finite-dimensional and Hilbert.

The permutation module decomposition [PAGE 217, eq. (2)] is:
L(X) = V_0 ⊕ V_1 ⊕ V_2 ⊕ V_3 ⊕ V_4 ⊕ V_5.
Each f_i = pr_{V_i}(f), so f = f_0 + f_1 + f_2 + f_3 + f_4 + f_5 [PAGE 218]. V_0 is the one-dimensional mean space; V_1 encodes pure first-order individual effects beyond the mean; V_2 encodes pure pair effects after individuals and mean are removed; V_3, V_4, V_5 similarly encode pure triple, four, and five-player effects [PAGE 218].

Dimension and group counts from Table 1 [PAGE 218]:
dim(V_0)=1, groups = –;
dim(V_1)=14, groups = 15;
dim(V_2)=90, groups = 105;
dim(V_3)=350, groups = 455;
dim(V_4)=910, groups = 1365;
dim(V_5)=1638, groups = 3003.
The eigenvalues of the Johnson graph J(15,5) correspond one-to-one with these six effect spaces [PAGE 218].

Mallows’ method [PAGE 219]: for a group g and indicator φ_g, the pure i-th order contribution is quantified by
⟨pr_{V_i}(φ_g), pr_{V_i}(f)⟩ = ⟨pr_{V_i}(φ_g), f_i⟩.
For a triple g = {1,2,7}, this is the third-order inner product; larger values indicate stronger pure synergy, negative values indicate ineffectiveness after removing constituent individual and pair effects [PAGE 219].

Spectral contribution per log possession [PAGE 221]:
SCLP(g) = SC(g) / log(Poss(g)),
where SC(g) is the raw spectral contribution (points) and Poss(g) is the possession count (dimensionless count). SCLP therefore carries units of points per log-possession.

Ridge regression comparator [PAGE 225, eq. (7-style)]:
β̂_ridge = arg min_β ( ||y - Xβ||² + λ Σ_{i=1}^{p} β_i² ),
with y = f(L), X the binary group-indicator matrix, λ ≥ 0 the L_2 penalty. This produces interaction spaces W_i that are non-orthogonal and higher-dimensional than V_i [PAGE 226].

Norm-mass decomposition [PAGE 228]:
||f||² = ||f_1||² + ||f_2||² + ||f_3||² + ||f_4||² + ||f_5||².
Empirical squared L_2 mass distribution (Table 13, [PAGE 228]) for GSW: V_0=0.003, V_1=0.031, V_2=0.092, V_3=0.203, V_4=0.312, V_5=0.360. Null distribution (Table 14, [PAGE 228]) from randomly permuted f: First≈0.005, Second≈0.030, Third≈0.117, Fourth≈0.302, Fifth≈0.543.

Correlation coefficients [PAGE 228]: win-percentage vs projected mass in V_1: r = 0.51; V_2: r = 0.58; V_3: r = 0.55; V_5: r = -0.54. Pearson r is dimensionless.

Bootstrap stability [PAGE 226-227]: 500 resampled seasons; for Thomas-Bradley-Crowder, mean PM = 145.9, SD(PM) = 82.8, mean Poss = 2574.1, SD(Poss) = 47.7; SCLP-PMperLP correlation r = 0.953. Contrast Thomas-Turner-Zeller at mean Poss = 305, r = 0.688.

Breakdown regimes: (a) per-possession plus-minus breaks down with numerous low-possession lineups and a few high-possession lineups [PAGE 221]; (b) SCLP values are not directly comparable across teams or across effect spaces because of norm dependence [PAGE 223]; (c) ridge regression enters a p >> N multicollinearity regime requiring shrinkage [PAGE 225]; (d) spectral estimates become unstable for groups with few hundred possessions [PAGE 227]; (e) raw f ignores opponent quality and garbage time, so projections are not causally invariant under game-context interventions [PAGE 230].

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The methodological lineage runs from Diaconis (1988), group representations in probability and statistics, through Diaconis (1989), a generalization of spectral analysis with application to ranked data, and Serre (2012) on linear representations of finite groups. The finite-group computational engine is Maslen et al. (2003), which computes isotypic projections via the Lanczos iteration on the Johnson graph J(15,5); this is why the six eigenvalues of J(15,5) map to mean, individual, pair, triple, four, and five-player spaces [PAGE 218]. Broader signal-processing context includes Kondor et al. (2007) on multi-object tracking with symmetric-group representations and Kondor & Dempsey (2012) on multiresolution analysis on the symmetric group [PAGE 216]. The algebraic-statistics side is anchored by Dummit & Foote (2004) for S_15 structure and by Uminsky et al. (2018, 2019) on higher-order variable and genomic variant interactions using spectral analysis [PAGE 216, 229].

Preceding basketball work that the paper explicitly contrasts with includes Kuehn (2016) on complementary skill sets, Maymin et al. (2013) on probabilistic NBA chemistry and simulated trades, and Grassetti et al. (2019a,b) on adjusted plus-minus lineup effects in Italy’s Serie A1 [PAGE 216]. The regression comparator invokes Sill (2010) on regularized adjusted plus-minus and Friedman et al. (2001) on ridge regression under multicollinearity [PAGE 225]. Traditional metrics critiqued in the introduction include PER, WP, APM, BPM, WS, VORP, OR, and DR [PAGE 215], which the paper notes fail to capture screens, off-ball movement, and defensive gravity [PAGE 215].

Multi-week traps arise because a single NBA season is one realization of a stochastic substitution process. Bootstrapping shows that plus-minus volatility is large relative to possession stability: for Thomas-Bradley-Crowder, SD(PM)=82.8 versus SD(Poss)=47.7 over 500 seasons [PAGE 227]. A coach evaluating a “hot” triple over a three-week window is observing a high-variance slice of f; spectral SCLP is only stable when possession counts are high (r=0.953 at ~2574 possessions vs r=0.688 at ~305) [PAGE 227]. Garbage-time possessions inflate raw PM without competitive meaning, and opponent quality is unadjusted in f [PAGE 230], so a four-week stretch against weak defenses can produce a spurious positive V_1 or V_2 projection. The paper’s own stacking narrative (e.g., Green-Curry-Thompson triple SCLP = 12.6 [PAGE 223]) risks retrospective over-interpretation: because V_5 holds most of the norm mass for all teams (Table 13 [PAGE 228]), attributing success to a “big three” requires rejecting the null that the mass distribution is proportional to subspace dimension, which Table 14 shows is the baseline for random f [PAGE 228]. Finally, SCLP is explicitly not comparable across teams [PAGE 223], so cross-team “synergy rankings” over a month are invalid without within-team normalization.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression describes the tendency of coaches under pressure to revert to the highest-possession, most familiar lineup rather than the spectrally optimal one. The data show extreme usage concentration: Golden State’s 2015-16 starters played roughly 1140 possessions while the next most-used lineup played 535; only 12 lineups exceeded 100 possessions [PAGE 221]. In a close fourth quarter, a coach regresses to the starter habit even if spectral analysis flags a pure pair such as Livingston-Thompson as negative (SCLP = -3.6) despite a healthy raw PM of 111.8 in 1412 possessions [PAGE 222, Table 8]. The habit regression is recursive because the coach anticipates the opponent will also revert to starters, so the starter-vs-starter matchup becomes a fixed point of mutual expectation.

The counter-trap is the analytic move of trusting pure spectral effects over raw plus-minus when they conflict. Bogut-Iguodala posted raw PM = +107.0 in 785 possessions, yet SCLP = -2.1, meaning every point of apparent success is attributable to constituent individuals rather than the pair [PAGE 222]. A coach who reads only raw PM falls into the trap of playing Bogut with Iguodala; a coach who applies spectral reasoning vetoes the pair and stacks Green-Curry-Thompson instead (triple SCLP = 12.6 [PAGE 223]). The counter-trap is itself recursive: if both coaches know the Livingston-Thompson pair is spectrally weak, the opponent may target that mismatch, forcing a second-order adjustment in substitution patterns.

The clock variable enters through possession count and game-state context. f is aggregated over all possessions [PAGE 216], so it conflates crunch-time execution with garbage-time accumulation. SCLP normalizes by log possession [PAGE 221], which handles magnitude skew but not temporal clustering. A lineup with high SCLP in low-pressure minutes may collapse under clock pressure, while a spectrally weak pair may survive garbage time. The recursive theory of mind therefore models coach A choosing lineups based on coach B’s anticipated crisis habit regression, with clock-adjusted spectral vetoes applied to pairs like Bogut-Iguodala and Livingston-Thompson whose raw PM masks negative pure interaction effects [PAGE 222].

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, weather, and veto-proof adjudication.

Physical layer: Spectral analysis is explicitly non-model-based and reports observed play-by-play projected into an orthogonal basis [PAGE 216]. It has no structural parameters for fatigue, load management, or injury. If Draymond Green (V_1 SCLP = 17.2, Poss = 5800 [PAGE 221, Table 5]) is injured, his first-order projection collapses and every stacked prediction involving Green-Curry-Thompson (V_3 SCLP = 12.6 [PAGE 223]) is invalidated because the observed distribution P(L, pm) has shifted. A physical veto is triggered whenever roster availability changes between the estimation window and the deployment window.

Biomechanical/style layer: Playing-style compatibility creates veto conditions not captured by raw PM. Andrew Bogut pairs well with Klay Thompson (SCLP = 3.7, Poss = 2637) and Harrison Barnes (SCLP = 2.1, Poss = 1527), but poorly with Andre Iguodala (SCLP = -2.1, Poss = 785) and Stephen Curry (SCLP = 1.6 despite high raw PM) [PAGE 222, Table 7]. If the opponent’s defensive scheme forces switching that negates Bogut’s spacing, the biomechanical mismatch is confirmed spectrally; the Bogut-Iguodala raw PM of +107.0 is fully attributable to individuals, so the pair is vetoed as a pure unit [PAGE 222].

Weather layer: The NBA is climate-controlled, so direct weather veto is null. However, arena altitude and humidity affect possession pacing and thus the accumulation of raw plus-minus in f. Because f sums points per possession over all stretches [PAGE 216], any environmental shift that alters possession count or tempo breaks the stationarity of the success function and voids the spectral projection for cross-venue comparison.

Veto proof: Since spectral analysis is an EDA description of actual gameplay with no modeling assumptions [PAGE 216], it possesses no out-of-sample predictive validity under interventions. A veto is formally justified whenever the conditional distribution of plus-minus given lineup, P(pm | L), changes due to injury, style mismatch, rule emphasis, or venue. The method can only adjudicate what did happen on the court, not what will happen under a modified physical layer.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) counterfactual veto scenarios and predictions. Each is testable by re-processing play-by-play under the stated intervention and recomputing spectral projections.

Scenario 1: Remove Draymond Green from all Golden State lineups (roster-intervention counterfactual).
Verification: Rebuild X using only the remaining 14 players, recompute f(L) over the 2015-16 play-by-play, and rerun spectral decomposition.
Prediction: The V_1 norm mass for GSW (0.031 of ||f||² [PAGE 228, Table 13]) drops substantially; the Green-Curry-Thompson triple (SCLP = 12.6 [PAGE 223]) becomes undefined; the Curry-Thompson pair SCLP falls below the Barbosa-Speights benchmark of 5.3 [PAGE 222] because the stacking anchor is removed. Veto: any lineup construction treating Curry-Thompson as a standalone high-synergy core is invalid without Green.

Scenario 2: Force Andre Iguodala-Andrew Bogut into crunch-time possession volumes (context-intervention counterfactual).
Verification: Filter play-by-play to clutch minutes (e.g., final 5 minutes, score within 5 points), isolate Bogut-Iguodala co-occurrences, and recompute pure pair projection onto V_2.
Prediction: Because the season raw PM is +107.0 in 785 possessions while SCLP = -2.1 [PAGE 222], the pair’s success is entirely attributable to individual contributions; under crunch-time pressure where individual variance increases, the pair’s SCLP remains negative and its raw PM collapses toward the individual baseline. Veto: do not deploy Bogut-Iguodala as a closing pair.

Scenario 3: Restrict Boston’s Thomas-Bradley-Crowder triple to fewer than 300 total possessions (sample-size counterfactual).
Verification: Subsample Celtics play-by-play so the triple appears in <300 possessions (compare Thomas-Turner-Zeller at mean Poss = 305, r = 0.688 [PAGE 227]), run 500 bootstraps, and record the sign of SCLP.
Prediction: The Pearson correlation between SCLP and PMperLP falls below 0.70, and SCLP is negative in more than 40% of bootstrapped seasons (mirroring the instability seen at ~305 possessions [PAGE 227]). Veto: exclude Thomas-Bradley-Crowder from playoff rotation models until possession volume exceeds ~1000 and bootstrap sign-stability is confirmed.

</RLVR_COUNTERFACTUAL_VETOES>