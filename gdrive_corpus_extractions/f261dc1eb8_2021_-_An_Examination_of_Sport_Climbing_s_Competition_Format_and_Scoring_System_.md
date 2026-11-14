---
source: "2021 - An Examination of Sport Climbing's Competition Format and Scoring System - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2021"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4136
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about sport climbing's competition format and scoring system. I need to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, looking at the source text provided, it says PAGES: 8 but the actual content seems to have page markers 1-10 in the text. Let me look carefully.

The source text includes:
- Page 1: Abstract, affiliations, intro start
- Page 2: Section 1.2 continues
- Page 3: Section 2 Simulation Study
- Page 4: Figure 1, Figure 2 references
- Page 5: Section 3 Analysis, Table 1
- Page 6: Figure 4 reference
- Page 7: Section 3.2 Leave-one-climber-out
- Page 8: Figure 5 reference, Section 4 Conclusion
- Page 9: References
- Page 10: References continued

Wait, the user says PAGES: 8 but the content shows pages up to 10. I should cite based on what's visible. The visible page numbers in the text are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. But user says PAGES: 8. I'll cite the page markers that appear in the text: [PAGE 1], [PAGE 2], etc. up to where relevant. Since user specified 8 pages but text shows more, I should probably cite exactly what's in the provided text. I'll use [PAGE N] markers corresponding to the visible page numbers in the source text.

Let me plan each section:

**THINK_TRACE (>=400 words):**
Deep multi-hop derivation and gray-zone audit.
- Analyze rank-product scoring: S_i = R_i^S * R_i^B * R_i^L
- Simulation: 10,000 simulations, uniform random ranks
- Advancement probability given winning any discipline: 99.48% (qualification), 85.01% (finals)
- Score targets: qualification avg 435 for 8th rank; medals avg 10, 21, 34
- Correlation analysis: Kendall's tau speed=0.147 (p=0.386), bouldering=0.432 (p=0.00735), lead=0.463 (p=0.00378)
- PCA: bouldering and load on PC1, speed on PC2
- IIA violation: 2018 Youth Olympics Women's Final, Krasovskaia exclusion causes Meul to move from 4th to 2nd
- Gray zones: uniform rank assumption ignores skill correlation (bouldering/lead correlated), small n=20 bootstrapping CIs wide, IIA violation depends on discrete rank re-computation, product scoring creates non-linear sensitivity to low ranks (1*20*20=400 vs 10*10*10=1000)
- Multi-hop: speed disadvantage -> correlation evidence -> PCA separation -> IIA violation -> format change for Paris 2024

**SOURCE_OPERATORS_AND_EQUATIONS:**
Formal LaTeX equations, units, page citations, breakdown.
- Define S_i = R_i^S × R_i^B × R_i^L [PAGE 2]
- R_i ∈ {1,...,20} qualification, {1,...,8} finals [PAGE 2]
- Advancement probability: P(advance | win any discipline) = 0.9948 [PAGE 3]
- P(medal | win any discipline) = 0.8501 [PAGE 3]
- Expected scores: E[S | rank_qual=8] ≈ 435 [PAGE 3]
- E[S | gold] ≈ 10, E[S | silver] ≈ 21, E[S | bronze] ≈ 34 [PAGE 3]
- Kendall's tau: τ_speed = 0.147, p=0.386, CI (-0.191, 0.469) [PAGE 5]
- τ_bouldering = 0.432, p=0.00735, CI (0.107, 0.691) [PAGE 5]
- τ_lead = 0.463, p=0.00378, CI (0.112, 0.753) [PAGE 5]
- Units: ranks dimensionless ordinal, seconds for speed time, count for tops/holds
- Singularity/breakdown: rank=1 creates floor effect; product scoring undefined for missing ranks; small sample bootstrap CI instability; ties not addressed
- No betting lines.

**RETROCAUSAL_GENEALOGY:**
Historical/scientific lineage & multi-week traps.
- Arrow (1951) Social Choice and Individual Values [PAGE 7, References]
- Luce (1959) Individual Choice Behavior [PAGE 7, References]
- Kendall (1938) Biometrika [PAGE 10, References]
- Efron & Tibshirani (1986) Statistical Science [PAGE 9, References]
- Hammond (2007) Public Choice [PAGE 10, References]
- Boudreau et al. (2018) Public Choice [PAGE 9, References]
- Westera (2006) New Studies in Athletics [PAGE 10, References]
- Blanchard (2016) Climbing Magazine interviews [PAGE 1]
- Goh (2020) Olympics.com Paris 2024 confirmation [PAGE 8, References]
- Multi-week traps: if format persists, speed specialists drop out, correlation structure changes, IIA violations compound across qualification->finals, re-ranking after disqualification creates path dependency

**RECURSIVE_THEORY_OF_MIND:**
Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: climbers revert to discipline specialization under pressure (speed climbers focus on speed, boulder/lead on their discipline)
- Counter-trap: organizers might think adding speed makes it "complete" but it actually creates a lottery for speed specialists who are dominated in other disciplines
- Clock: Tokyo 2020 format -> Paris 2024 split (lead+boulder combined, speed separate) validates the paper's findings
- Athletes' recursive beliefs: knowing speed is disadvantage, speed climbers may not qualify or may underperform intentionally in non-speed events

**CROSS_LAYER_VETO_ADJUDICATION:**
Physical/biomechanical/weather veto proof.
- Biomechanical: speed climbing is explosive, anaerobic, standardized route; bouldering is power-strength, problem solving; lead is endurance, route reading. Different muscle fiber recruitment, energy systems.
- Physical wall properties: speed wall is 15m, standardized, IFSC certified; bouldering 4.5m; lead 15m+ with clipping. Different holds, angles.
- Weather: not directly applicable (indoor), but gym temperature/humidity affects friction differently across disciplines.
- Veto proof: The scoring system cannot veto the physiological specificity; speed training does not transfer to bouldering/lead hold-reaching.
- No betting lines.

**RLVR_COUNTERFACTUAL_VETOES:**
3 verifiable RLVR veto scenarios + predictions.
- Veto 1: If a climber wins speed (rank 1) but places 20th in bouldering and lead, score = 400. Under rank-sum, score = 41. Under product, they advance (top 8 likely) but the score is dominated by the 1. Prediction: removal of speed weight reduces speed specialist medal probability.
- Veto 2: If a discipline winner is removed post-hoc (IIA test), medal rankings reshuffle. Prediction: any system satisfying IIA must use rank-sum or Borda count, not product.
- Veto 3: If bouldering and lead are combined (as Paris 2024) and speed separate, correlation between remaining two disciplines (τ ≈ 0.43-0.46) means combined score better reflects general climbing ability. Prediction: speed specialist medal count drops to near zero in combined event, increases in speed-only event.

Need to ensure >= 1,000 words total across sections. Each section should be substantial. THINK_TRACE needs >=400 words.

I need to be careful not to mention betting lines (spreads, totals, moneylines, odds). The paper mentions "probability" which is fine as it's not betting odds. I should avoid saying "odds" in the betting sense. I can use "probability" in the statistical sense.

Also "ZERO TOY EQUATIONS" - I must state formal LaTeX equations, not make up fake ratios. I'll use the actual equations from the paper and formal statistical definitions.

Let me draft carefully with page citations. The source text shows page numbers at bottom: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. I'll cite these.

Word count target: let's aim for roughly:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~300 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total: ~1850 words. Good.

Let's write.

For THINK_TRACE:
Start with the rank-product operator. Define the probability space. Discuss simulation assumptions (uniformly distributed ranks, independence across disciplines). Note gray zone: independence is false because bouldering and lead are correlated (τ=0.432, 0.463). The simulation assumed uniform random assignment independently per discipline, which misestimates advancement probabilities when skills are correlated. The 99.48% advancement given a win is derived under independence; with positive correlation between bouldering and lead, a climber strong in one is likely strong in the other, changing the joint distribution of products. The expected score thresholds (435 for 8th qual, 10/21/34 for medals) are simulation means under the null of no skill. The empirical Kendall's tau analysis rejects independence for speed (p=0.386, CI includes zero) but not for bouldering/lead. PCA confirms speed loads on PC2 separately. IIA violation: rank-product is not invariant to removal of irrelevant alternatives because re-ranking changes multiplicative weights non-uniformly. Example: Krasovskaia (5th) removed; Meul (4th -> 2nd). The product operator creates a discontinuity at rank=1 because 1 × x × y = x × y, so a win in one discipline effectively deletes that dimension's penalty. Gray zone: small sample n=20 for bootstrapped CIs leads to wide intervals; Figure 3 scatterplots are descriptive not inferential beyond Table 1; leave-one-climber-out uses n=6 from Youth Olympics, not directly transportable to n=20 Tokyo.

Need to ensure no betting language. "Probability" is fine.

For SOURCE_OPERATORS_AND_EQUATIONS:
LaTeX:
Score: $S_i = R_i^{S} \cdot R_i^{B} \cdot R_i^{L}$
Domain: $R_i^{(d)} \in \{1, \dots, N\}$, $N=20$ qualification, $N=8$ finals.
Advancement: $A_i = \mathbb{1}\{S_i \leq S_{(8)}\}$ where $S_{(8)}$ is 8th order statistic.
$P(A_i=1 | \max_d \mathbb{1}\{R_i^{(d)}=1\}=1) = 0.9948$ [PAGE 3]
$P(M_i=1 | \text{win any}) = 0.8501$ [PAGE 3]
Expected scores: $\mathbb{E}[S | \text{rank}=8] \approx 435$ [PAGE 3]; $\mathbb{E}[S | \text{gold}] \approx 10$, etc. [PAGE 3]
Kendall's tau: $\tau = \frac{C-D}{\sqrt{(C+D+T_x)(C+D+T_y)}}$ but I should just report values, not invent formula if not given. Actually Kendall's tau formula is standard but I should cite [PAGE 5] for values.
Units: ranks dimensionless ordinal; speed time seconds (SI); bouldering tops count; lead holds count.
Breakdown/singularity: rank product undefined if any rank missing; rank=1 creates absorbing lower bound; product scoring is sensitive to outliers because multiplication amplifies high ranks (20 × 20 × 20 = 8000 vs 1 × 1 × 20 = 20). Ties not handled in provided text.

For RETROCAUSAL_GENEALOGY:
Arrow (1951) IIA [PAGE 7]; Luce (1959) choice axiom [PAGE 7]; Kendall (1938) rank correlation [PAGE 10]; Efron & Tibshirani (1986) bootstrap [PAGE 9]; Hammond (2007) cross-country rank-sum violations [PAGE 10]; Boudreau et al. (2018) NCAA cross country [PAGE 9]; Westera (2006) decathlon [PAGE 10]; Blanchard (2016) climber interviews [PAGE 1]; Goh (2020) Paris 2024 split [PAGE 8/References].
Multi-week traps: over a season, repeated IIA violations cause athletes to strategically withdraw from disciplines where they are weak, altering the rank distribution and making the product score a function of who shows up rather than pure performance. Correlation between bouldering and lead means removing one changes PC1 structure.

For RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under Olympic pressure, athletes regress to discipline-specific training habits (speed climbers train speed, not bouldering). Counter-trap: IOC/IFSC believed combining all three tests "complete" climber, but it traps speed specialists into events where they cannot transfer skill, creating a false equivalence. Clock: Tokyo 2020 (combined) -> Paris 2024 (split lead+boulder, speed separate) is the empirical falsification of the combined format hypothesis within one Olympic cycle.

For CROSS_LAYER_VETO_ADJUDICATION:
Biomechanical specificity: speed climbing uses repetitive explosive movement on a fixed 15m route; anaerobic alactic, ~5-6 seconds. Bouldering: maximal strength, dynamic movements, 4.5m wall, ~4 min per problem, ATP-PC and glycolytic. Lead: sustained endurance, route reading, 15+m, clipping, aerobic+anaerobic. No biomechanical veto can be overcome by scoring; a speed specialist cannot "out-rank" physiological specificity via product scoring. Physical layer: IFSC speed wall is standardized; boulders and lead routes are set differently each competition, introducing route-setting variance not captured by rank product. Weather: indoor, but temperature/humidity affects skin friction differentially (speed uses specific shoe rubber, lead demands sustained friction). These are orthogonal to scoring and cannot be vetoed by rank arithmetic.

For RLVR_COUNTERFACTUAL_VETOES:
1. Veto scenario: Remove speed discipline from combined product (set $R_i^S=1$ for all or drop it). Prediction: advancement probability for speed specialists drops from ~99.48% (conditional on winning speed) to baseline determined by bouldering/lead only; median qualification score for pure speed climbers rises above 435, eliminating them from finals.
2. Veto scenario: Enforce IIA by prohibiting re-ranking after removal (keep original ranks with gaps). Prediction: medal order in 2018 Youth Olympics Women's Final remains Lettner > Lukan > Lammer regardless of Krasovskaia removal; Meul stays 4th. Verifiable by replaying Figure 5 panel 5 with frozen ranks.
3. Veto scenario: Replace product with rank-sum ($S_i = R_i^S + R_i^B + R_i^L$). Prediction: correlation of overall rank with speed increases (because speed no longer multiplied away by low ranks in other disciplines), reducing the speed disadvantage; the empirical Kendall's tau for speed would shift from 0.147 toward the bouldering/lead range (~0.43-0.46) in a re-simulation.

I need to ensure total word count is over 1000. Let's write it out fully.

Check for any betting terms: I won't use "odds", "spread", "moneyline", "total", "line", "bet", "wager". I will use "probability" and "chance" in the statistical sense.

Page citations: [PAGE 1], [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 9], [PAGE 10]. Even though user said PAGES: 8, the text clearly shows page numbers up to 10. I'll cite what's visible. Actually looking at the provided source text, page numbers are embedded: "1" after abstract, "2" after section 1.2, etc. I'll cite those exact markers.

Let me write the response now.
</NATIVE_REASONING>

<THINK_TRACE>
The central object of study is the rank-product operator $S_i = R_i^{S} \cdot R_i^{B} \cdot R_i^{L}$ [PAGE 2], where each discipline rank is an ordinal draw from $\{1,\dots,N\}$ with $N=20$ in qualification and $N=8$ in finals [PAGE 2]. The simulation study [PAGE 3] executes 10,000 Monte Carlo replications under the null hypothesis that ranks are independently and uniformly distributed across disciplines for every participant. Under that null, the conditional advancement probability $P(\text{top }8 \mid \text{win any discipline})$ is estimated at 0.9948, and the conditional medal probability $P(\text{top }3 \text{ in finals} \mid \text{win any discipline})$ is 0.8501 [PAGE 3]. These figures are not betting odds; they are frequentist simulation frequencies under a specific independence assumption.

The first gray zone is that the independence assumption is empirically false. Table 1 [PAGE 5] reports Kendall’s tau for speed versus overall rank as $\tau = 0.147$ with $p = 0.386$ and bootstrapped 95% CI $(-0.191, 0.469)$, indicating insufficient evidence of association for speed, whereas bouldering ($\tau = 0.432$, $p = 0.00735$) and lead ($\tau = 0.463$, $p = 0.00378$) are meaningfully associated with final placement [PAGE 5]. Figure 4’s PCA biplot [PAGE 6] shows bouldering tops and lead holds reached loading on the same principal component (PC1), while speed time loads orthogonally on PC2. Thus the simulation’s independent uniform ranks misrepresent the joint distribution: a climber strong in bouldering is likely strong in lead, inflating the effective concentration of low products in that subspace and altering advancement probabilities relative to the i.i.d. null.

A second gray zone concerns the product operator’s singularity at rank 1. Because $1 \cdot x \cdot y = x \cdot y$, winning one discipline formally removes that dimension’s penalty, creating a floor effect that makes scores like $1 \cdot 20 \cdot 20 = 400$ superior to $10 \cdot 10 \cdot 10 = 1000$ [PAGE 2]. The paper notes this rewards high finishes and ignores poor ones [PAGE 2], but the mathematical implication is asymmetric sensitivity: the product is bounded below by 1 and has no upper bound beyond $N^3 = 8000$ for $N=20$, so variance explodes with high ranks while low ranks are compressed.

The expected score thresholds derived from simulation—approximately 435 for 8th place in qualification [PAGE 3], and 10, 21, 34 for gold, silver, bronze [PAGE 3]—are means under the null and should not be treated as deterministic cutoffs. With only $n=20$ climbers in the Tokyo women’s qualification case study [PAGE 5], the bootstrapped confidence intervals for Kendall’s tau are wide, and the leave-one-climber-out analysis draws from a $n=6$ Youth Olympics final [PAGE 7], limiting transportability to the senior Olympic $n=20$ / $n=8$ structure. The IIA violation demonstrated in Figure 5 [PAGE 7]—removing 5th-place Krasovskaia promotes 4th-place Meul to silver—shows the ranking is path-dependent on the competitor set, a formal violation of Arrow’s IIA condition [PAGE 7] and Luce’s choice axiom [PAGE 7]. Multi-hop, this chain implies: speed is biomechanically orthogonal [PAGE 6], the scoring system amplifies that orthogonality into disadvantage [PAGE 5], and the system is non-IIA [PAGE 7], jointly validating athlete concerns [PAGE 1] and foreshadowing the Paris 2024 split into separate speed and combined lead+boulder events [PAGE 8].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let competitor $i$’s discipline ranks be $R_i^{S}, R_i^{B}, R_i^{L} \in \{1,\dots,N\}$, where $N=20$ for qualification and $N=8$ for finals [PAGE 2]. The combined score is
$$
S_i = R_i^{S} \times R_i^{B} \times R_i^{L}.
$$
Units: ranks are dimensionless ordinal positions; underlying performance variables are measured in seconds for speed time, count of tops for bouldering, and count of holds reached for lead [PAGE 5].

Advancement indicator:
$$
A_i = \mathbb{1}\!\left\{ S_i \leq S_{(8)} \right\},
$$
where $S_{(8)}$ is the eighth-lowest order statistic of the qualification scores [PAGE 2]. Simulation estimates from 10,000 replications under independent uniform ranks:
$$
P(A_i=1 \mid \exists d: R_i^{(d)} = 1) = 0.9948,
\qquad
P(\text{medal} \mid \exists d: R_i^{(d)} = 1) = 0.8501
$$
[PAGE 3].

Expected score targets from simulation:
$$
\mathbb{E}[S \mid \text{qualification rank}=8] \approx 435,
\quad
\mathbb{E}[S \mid \text{gold}] \approx 10,\;
\mathbb{E}[S \mid \text{silver}] \approx 21,\;
\mathbb{E}[S \mid \text{bronze}] \approx 34
$$
[PAGE 3].

Kendall’s rank correlation coefficients between overall rank and discipline rank [PAGE 5]:
$$
\tau_{\text{speed}} = 0.147,\; p = 0.386,\; 95\%\text{ CI } (-0.191,\; 0.469),
$$
$$
\tau_{\text{bouldering}} = 0.432,\; p = 0.00735,\; 95\%\text{ CI } (0.107,\; 0.691),
$$
$$
\tau_{\text{lead}} = 0.463,\; p = 0.00378,\; 95\%\text{ CI } (0.112,\; 0.753).
$$

Breakdown / singularity regimes: (1) the product is undefined if any discipline rank is missing; (2) at $R=1$ the multiplicative penalty vanishes for that dimension, creating a non-linear floor; (3) maximum score under $N=20$ is $20^3 = 8{,}000$, so the distribution is right-skewed and sensitive to high-rank outliers; (4) ties are not addressed in the provided text; (5) bootstrapped CIs with $n=20$ are unstable and wide [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Arrow (1951), *Social Choice and Individual Values*, which introduced the independence of irrelevant alternatives (IIA) criterion [PAGE 7, References], and Luce (1959), *Individual Choice Behavior*, which formalized Luce’s choice axiom in probability theory [PAGE 7, References]. The authors connect IIA to sports ranking by asking whether removal of a losing climber should preserve the original winner [PAGE 7]. For ordinal association they employ Kendall’s tau (Kendall, 1938, *Biometrika*) [PAGE 10, References] and bootstrap confidence intervals (Efron & Tibshirani, 1986, *Statistical Science*) [PAGE 9, References]. Precedents in rank-based sports scoring include Hammond (2007) on cross-country rank-sum violations of social choice principles [PAGE 10, References] and Boudreau et al. (2018) on NCAA cross country [PAGE 9, References]; by contrast, decathlon and heptathlon use sums of raw performances rather than ranks (Westera, 2006) [PAGE 10, References], and CrossFit uses rank-based points summed across events (CrossFit, 2021) [PAGE 9, References].

Athlete-side priors enter via Blanchard (2016), *Climbing Magazine* interviews with 15 pro climbers, including Lynn Hill’s analogy to “asking a middle distance runner to compete in the sprint” and Courtney Woods’s warning that speed climbers face the largest disadvantage [PAGE 1]. The policy consequence appears in Goh (2020), confirming Paris 2024 will award two medal sets per gender: combined lead+boulder and speed-only [PAGE 8, References; PAGE 8 conclusion].

Multi-week trap: if a federation retains the rank-product format across a season, the IIA violation compounds. Removing a low-ranked climber between qualification and finals re-ranks all survivors, so the medal order becomes a function of the entry list rather than invariant performance. Over repeated events, speed specialists rationally reduce exposure to bouldering and lead, degrading the depth of the speed discipline within the combined event and making the product score increasingly dominated by bouldering–lead generalists. The correlation structure observed at Tokyo ($\tau \approx 0.43$–$0.46$ for bouldering/lead vs. overall) [PAGE 5] implies that bouldering and lead are not independent trials; therefore the simulation’s independent-uniform null is a misspecified generative model for real competition, and its 99.48% advancement figure is an upper-bound idealization rather than an empirical guarantee.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under Olympic selection pressure, athletes regress to discipline-specific training habits. A speed climber’s crisis response is to train speed repetitions on the standardized 15m wall, not to acquire lead route-reading or bouldering problem-solving; a boulderer regresses to power moves and zone attempts; a lead climber regresses to endurance volume and hold-reaching. Because the rank-product score multiplies ranks, a speed specialist who regresses to speed-only preparation will likely post ranks near 20 in bouldering and lead, yielding a product such as $1 \times 20 \times 20 = 400$ or worse, while a generalist posting $10 \times 10 \times 10 = 1000$ loses despite more balanced performance [PAGE 2]. The scoring system therefore punishes the very crisis habit (specialization) that athletes rationally adopt.

Counter-trap: the IOC/IFSC design trap was the belief that a “triathlon” format identifies the most complete climber. The counter-trap is that the product operator does not measure completeness; it measures the absence of catastrophic failure in any single dimension, and because speed is biomechanically orthogonal [PAGE 6], speed specialists cannot convert speed excellence into compensatory rank in the other two disciplines. The trap is sprung when the combined score declares a speed specialist non-competitive despite a discipline win, because the product lets one low rank annihilate the benefit of a first-place finish.

Clock: the temporal falsification is compressed into one Olympic cycle. Tokyo 2020 used the combined rank-product format [PAGE 1]; the present paper identifies speed disadvantage and IIA violation [PAGE 5, PAGE 7]; Paris 2024 announced separate speed medals and a combined lead+boulder event [PAGE 8]. The clock thus runs from theoretical critique (2021 CMSAC) to format revision (2024 Olympics) in roughly three years, a rapid institutional feedback loop validating the paper’s recursive claim that athletes’ concerns were empirically grounded.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Biomechanical layer: speed climbing is an explosive, alactic anaerobic event on a fixed, IFSC-standardized 15m route with a touchpad finish, lasting roughly five to six seconds. Bouldering is maximal strength and dynamic coordination on a 4.5m wall, with scoring by tops and zones/attempts. Lead climbing is sustained aerobic–anaerobic endurance on a 15m+ route requiring clipping and route reading, scored by highest hold reached [PAGE 5]. These are distinct motor and energy-system domains; no rank arithmetic can veto the physiological specificity that speed training does not transfer to lead hold-reaching or bouldering top-outs.

Physical layer: the speed wall is fixed and identical across competitions, whereas boulders and lead routes are reset each event, introducing route-setting variance that is not represented in the rank product. A climber’s rank reflects route-setting idiosyncrasy as well as ability, and re-ranking after a removal (IIA test) propagates this variance non-uniformly through the product [PAGE 7]. Temperature and humidity affect skin friction and shoe rubber performance differentially across disciplines—speed requires precise, repeatable foot placement on a standardized surface, while lead demands sustained friction over many holds—yet these environmental variables are orthogonal to the scoring operator and cannot be corrected by post-hoc rank manipulation.

Veto proof: the scoring system cannot override the cross-layer constraint that a speed specialist is physiologically mismatched to bouldering and lead. Because $S_i$ is a pure function of ranks, it has no term for route difficulty, wall angle, temperature, or muscle fiber type. Therefore the rank-product format is structurally blind to the biomechanical and physical realities that drive the observed Kendall’s tau separation between speed and the other two disciplines [PAGE 5] and the PCA separation of speed onto PC2 [PAGE 6].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 (drop speed multiplicative weight). Counterfactual: remove the speed factor from the combined score, i.e. $S_i' = R_i^{B} \times R_i^{L}$ or set $R_i^{S} = 1$ for all $i$. Verifiable prediction: under the original product, a speed specialist who wins speed but ranks 20th in bouldering and lead scores $1 \times 20 \times 20 = 400$ and advances with 99.48% conditional probability [PAGE 3]. Under the vetoed score, that same climber scores $20 \times 20 = 400$ but loses the discipline-win floor effect; the median qualification score for pure speed climbers rises above the 435 threshold for 8th place [PAGE 3], eliminating them from finals unless they improve bouldering/lead ranks.

Veto scenario 2 (enforce IIA with frozen ranks). Counterfactual: prohibit re-ranking after a climber drops out; retain original discipline ranks with gaps so removal of a lower-ranked athlete cannot alter medal order. Verifiable prediction: in the 2018 Youth Olympics Women’s Final [PAGE 7], panel 5 of Figure 5 shows 5th-place Krasovskaia’s removal promoting 4th-place Meul to silver. Under the IIA-enforcing veto, Meul remains 4th and the original medal order (Lettner, Lukan, Lammer) is preserved. This is directly testable by re-computing Figure 5 with frozen ranks.

Veto scenario 3 (replace product with rank-sum). Counterfactual: replace $S_i = R_i^{S} R_i^{B} R_i^{L}$ with $S_i' = R_i^{S} + R_i^{B} + R_i^{L}$. Verifiable prediction: because rank-sum does not multiply away a low rank in one discipline by high ranks in others, the conditional disadvantage of speed specialists diminishes. Re-simulating under independent uniform ranks would shift the empirical Kendall’s tau between overall rank and speed rank away from 0.147 toward the bouldering/lead range of approximately 0.43–0.46 [PAGE 5], reducing the speed disadvantage and making the overall ranking more sensitive to balanced performance across all three disciplines.
</RLVR_COUNTERFACTUAL_VETOES>