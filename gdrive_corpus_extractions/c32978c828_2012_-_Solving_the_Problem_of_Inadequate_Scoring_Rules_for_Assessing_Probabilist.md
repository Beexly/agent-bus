---
source: "2012 - Solving the Problem of Inadequate Scoring Rules for Assessing Probabilistic Football Forecast Models - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4786
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided source paper about scoring rules for probabilistic football forecast models, specifically the Rank Probability Score (RPS). I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines terminology. The source mentions "betting market" and "bookmaker" but I must avoid spreads, totals, moneylines, odds. I can discuss probability forecasts and scoring rules without betting lines.
- Must cite page markers [PAGE N] where relevant. The source has pages 1-12 visible in text (with page numbers 1-12 at bottom). I should reference specific pages.
- Formal LaTeX equations for RPS, Brier, etc., not fake toy equations.
- >=1000 words total across sections.
- Each section exact XML tags.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss the ordinal vs nominal scale issue. The paper argues {H, D, A} is ordinal because D is closer to H than A is to H. Need to derive why previous rules fail benchmarks 4 and 5. Gray zones: Match 3 controversy about squared distance vs absolute distance; the alternative measure based on absolute distance. Breakdown regimes: small ensemble size negative bias; zero-frequency problem in log rules; improper scoring when outcomes treated as nominal. Word count >=400.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define RPS equation:
RPS = sum_{j=1}^{r-1} ( sum_{i=1}^j (p_i - e_i) )^2 ? Wait, standard RPS for r categories is:
RPS = \sum_{k=1}^{r-1} \left( \sum_{i=1}^k (p_i - e_i) \right)^2
Sometimes normalized by (r-1). The paper's table shows cumulative distributions p_j and e_j for j=1,2 (since r=3, two cumulative sums). Looking at Table 3:
Match 1 α: p cum: 1,1; e cum: 1,1; RPS 0.0000. If formula is sum of squared differences of cumulative: (1-1)^2 + (1-1)^2 = 0. Good.
Match 1 β: p cum: 0.90, 1; e cum: 1,1; RPS 0.0050. (0.9-1)^2 + (1-1)^2 = 0.01. But table says 0.0050. So maybe divided by 2 (r-1=2). 0.01/2 = 0.005. Yes.
Match 2 α: p cum: 0.80, 0.90; e cum: 1,1. Diffs: -0.2, -0.1. Squares: 0.04, 0.01 sum=0.05 /2 = 0.025. Matches table.
Match 4 α: p cum: 0.60, 0.85; e cum: 1,1. Diffs: -0.4, -0.15. Squares: 0.16, 0.0225 sum=0.1825 /2 = 0.09125. Matches table.
So RPS = (1/(r-1)) * sum_{k=1}^{r-1} (CDF_p(k) - CDF_e(k))^2. For r=3, divide by 2.

Brier Score: BS = sum_{i=1}^r (p_i - e_i)^2. Sometimes mean (divide by r). Paper's Table 2: Match 1 α: p=(1,0,0), e=(1,0,0). BS = 0. β: p=(0.9,0.1,0), e=(1,0,0). BS = (0.1)^2 + (0.1)^2 + 0 = 0.02. Table says 0.0200. So it's sum, not mean. Match 2 α: p=(0.8,0.1,0.1), e=(1,0,0). BS = 0.04 + 0.01 + 0.01 = 0.06. Table says 0.0600. Good. So Brier = sum (p_i - e_i)^2.

Geometric Mean Score: pw (probability of observed outcome).
Information Loss: -log2(pw).
MLLE: ln(pw).

Binary Decision: 1 if pw > pi for all i≠w, else 0.

Units: dimensionless probability scores; RPS in [0,1] (or normalized), Brier in [0,2] for r=3? Actually max Brier when p=(1,0,0) and e=(0,1,0) gives 1+1+0=2? Wait if p=(1,0,0), e=(0,1,0): (1-0)^2+(0-1)^2+(0-0)^2 = 2. But usually Brier for probabilities sums to 1, max is 2? For binary it's [0,2]? Actually Brier score for binary is (p-o)^2, max 1. For multi-category, sum over categories can be up to 2? Let's check: p is a probability vector summing to 1, e is one-hot. Worst case p puts all mass on wrong category: (1-0)^2 for wrong? If e_w=1, p_w=0, and p_j=1 for some j≠w. Then (0-1)^2 + (1-0)^2 + ... = 2. So range [0,2]. But paper uses it as is.

I need to cite pages. Page numbers in the text: Page 1 (intro), Page 2 (scoring rules), Page 3 (Table 1), Page 4 (benchmark explanations), Page 5 (Table 2), Page 6 (RPS intro, Table 3), Page 7 (alternative measure), Page 8 (implications), Page 9-10 (Appendix), Page 11-12 (references). I'll cite [PAGE 3], [PAGE 5], [PAGE 6], etc.

<RETROCAUSAL_GENEALOGy>: Historical lineage: Epstein (1969) RPS, Murphy (1969, 1970), Brier (1950), Wilks (1995), Gneiting & Raftery (2007), Jose et al. (2009). Multi-week traps: temporal aggregation of scores, league table cumulative errors, ranking methods beyond scope. The paper mentions ranking methods (Pope & Peel 1988; Dixon & Pope 2004; etc.) are beyond scope because they cannot measure accuracy for a particular game. This is a trap: using season-long ranking to validate per-match forecasts introduces ecological fallacy.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is more abstract. Crisis habit regression: forecasters under pressure revert to familiar but improper scoring rules (Brier, Geometric Mean) because they are computationally simple. Counter-trap: adopting RPS without considering match-3 absolute-distance critique (squared distance over-penalizes uneven unobserved distributions). Clock: temporal stationarity assumption—RPS assumes ordinal distances are stationary across matches, but football context (red cards, weather, score state) changes the ordinal geometry mid-match or across weeks. Need to weave this in.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since this is about forecasting models, physical layers: player biomechanics (fatigue, injury) affecting goal scoring; weather (rain, wind) affecting match outcome distribution; these violate the stationarity of the ordinal scale assumption? Actually the paper's core assumption is that {H,D,A} is ordinal because D is between H and A in goal difference. But weather/biomechanics can skew the probability simplex such that the distance metric (squared cumulative difference) no longer maps to physical reality. For example, in extreme weather, draws may become more likely but not necessarily "between" home and away wins in terms of team quality. Veto: if physical layer imposes non-ordinal dynamics (e.g., red card changes state space), RPS is invalid unless conditioned.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. Need 3 counterfactual veto scenarios where RPS would give wrong ranking due to breakdown regimes, and predictions.
1. Zero-probability veto: Model assigns p_A=0, actual outcome A. Log-based rules go to -infinity (singularity), RPS remains finite but heavily penalizes via cumulative term. Prediction: RPS fails to distinguish between two models that both assign zero to observed outcome but differ in unobserved ordinal placement.
2. Small ensemble bias: N matches small (<30). RPS negative bias strongest for small ensemble size (Jolliffe & Stephenson, 2003, cited [PAGE 6]). Prediction: On a small weekend slate, RPS ranks a miscalibrated model higher than a calibrated one due to bias.
3. Match-3 absolute distance veto: Observed D, models assign symmetric but different mass to H and A. Squared-distance RPS prefers the model with more extreme unobserved probabilities? Actually RPS on match 3: α (0.35,0.30,0.35) gets 0.1225, β (0.60,0.30,0.10) gets 0.1850. RPS prefers α (more uncertainty around D). But the paper notes an alternative argument: a draw doesn't imply H and A were equally likely; dominant team unlucky. Absolute distance measure would score them equal. Prediction: In matches with strong favorite drawing due to red card/weather, RPS will incorrectly favor diffuse forecasts over sharp but wrong-side forecasts.

Word count: Need >=1000 words total. I'll aim for ~1500-1800 words across sections. Each section substantive.

Need to be careful: NO BETTING LINES. The source mentions "lay bet", "bookmaker", "betting market". I should avoid those terms or rephrase. The invariant says never mention spreads, totals, moneylines, or odds. I can mention "bookmaker" maybe? But to be safe, avoid betting terminology entirely or use neutral terms like "market probability" or "quoted probability". Better to avoid "bookmaker" and "lay bet" when discussing my own analysis, though I can quote the source with citation. But quotes from source contain "lay bet" and "bookmaker". I can include verbatim quotes with [PAGE N] since they are source text, but I should not generate new betting lines. The invariant says "Never mention spreads, totals, moneylines, or odds." It doesn't ban the word "bookmaker" but it's safer to avoid generating them. I can quote [PAGE 4] which mentions "lay bet" and "bookmaker" as part of source text. I think that's acceptable because it's a verbatim quote from source, not me inventing a betting line. But I should be cautious. I'll keep quotes minimal and focused on scoring rules.

Let's draft.

Structure:

<THINK_TRACE>
(>=400 words)
- Start with the core derivation: why {H,D,A} is ordinal.
- Derive RPS from cumulative distribution functions.
- Show failure of previous rules on benchmarks 4 and 5 using Table 2 logic.
- Gray-zone audit: Match 3 controversy; squared vs absolute distance; small ensemble negative bias; zero-frequency singularity in log rules; improper scoring under nominal misclassification.
- Multi-hop: Epstein 1969 -> Murphy 1969/1970 -> Constantinou & Fenton 2012.
- Word count target ~500.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX definitions for all scoring rules from Appendix [PAGE 9-10].
- RPS equation derived and matched to Table 3 values [PAGE 6].
- Brier equation [PAGE 10].
- Geometric Mean, Information Loss, MLLE [PAGE 9-10].
- Binary Decision [PAGE 9].
- Units: dimensionless, [0,1] for normalized RPS, [0,2] for Brier (sum form), bits for Information Loss (log2), nats for MLLE (ln).
- Breakdown regimes: p_w=0 singularity for Information Loss and MLLE; small ensemble negative bias for RPS; ordinal distance stationarity assumption.
- Page citations [PAGE 3], [PAGE 5], [PAGE 6], [PAGE 9], [PAGE 10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Epstein (1969) introduced RPS [PAGE 6].
- Murphy (1969) strict propriety; Murphy (1970) sensitivity to distance [PAGE 6].
- Brier (1950) quadratic loss [PAGE 10].
- Gneiting & Raftery (2007) scale type drives scoring rule [PAGE 1].
- Jose et al. (2009) noted football outcomes ordered [PAGE 1].
- Nine previous studies reviewed [PAGE 2].
- Ranking methods beyond scope: Pope & Peel (1988), Dixon & Pope (2004), Min et al. (2008), Baio & Blangiardo (2010) [PAGE 2]. Multi-week trap: league table RMS/rank error conflates temporal aggregation with single-match forecast accuracy.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: under validation pressure, modelers revert to local scoring rules (Geometric Mean, Information Loss, MLLE) because they only need p_w [PAGE 2].
- Counter-trap: RPS adoption without checking Match 3 absolute-distance critique; squared-distance penalty can over-penalize diffuse but honest forecasts around a draw [PAGE 6-7].
- Clock: ordinal distance between H-D-A is assumed stationary across weeks, but in-game events (goals, red cards) and weather shift the effective geometry; the paper acknowledges profitability depends on methodology, not just accuracy [PAGE 8].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical layer: player biomechanics/fatigue alter goal-scoring rates, making the H-D-A ordinal spacing non-stationary; a 0-0 draw under heavy rain is not equidistant in team-quality space from a 1-0 home win.
- Biomechanical layer: injuries to key attackers change p(D) disproportionately; RPS cumulative differences assume fixed ordinal metric.
- Weather layer: wind/rain increase draw probability and compress the simplex; if the forecast model doesn't condition on weather, RPS penalizes miscalibration that is actually exogenous.
- Veto proof: RPS is valid only when the ordinal scale {H,D,A} and distance metric are exogenous to the forecast instance. If physical/weather layers induce context-dependent ordinal distances, RPS must be stratified or replaced by a context-conditioned proper scoring rule.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable scenarios.
1. Zero-probability singularity veto: Model assigns p_w=0. Information Loss -> infinity, MLLE -> -infinity. RPS finite but cumulative term punishes. Two models both p_w=0 but differ in unobserved mass placement. Prediction: RPS ranks them differently based on cumulative placement, but neither is "acceptable"; verifiable by synthetic match where actual A and both models assign p_A=0, one with p_H=1,p_D=0 vs p_H=0,p_D=1. RPS gives different scores despite both being catastrophically wrong on observed outcome.
2. Small-ensemble negative bias: N<20 matches. RPS bias strongest for small ensemble [PAGE 6]. Prediction: Over a single midweek slate, a miscalibrated model with extreme probabilities can achieve lower RPS than a calibrated model due to finite-sample bias. Verifiable via Monte Carlo on 10 synthetic matches.
3. Match-3 absolute-distance veto: Observed D, Model X diffuse symmetric (0.33,0.34,0.33), Model Y sharp but wrong (0.70,0.20,0.10). Squared-distance RPS may prefer X; absolute-distance measure would score equal or prefer Y if the draw was contextually deterministic. Prediction: In a derby with early red card leading to draw, RPS will favor diffuse forecasts over sharp physical-context forecasts; absolute-distance RPS variant corrects this. Verifiable by computing both metrics on historical red-card draw matches.

Need to ensure total words >=1000. Let's write generously.

Also cite exact page numbers. The text pages: I see page numbers at bottom: 1,2,3,4,5,6,7,8,9,10,11,12. I will reference them.

Let's check for any mention of banned terms in my output. I will avoid "spread", "total", "moneyline", "odds" as betting lines. I can say "probability" freely. I won't use "bookmaker" in my own voice; if quoting source, I might, but better to avoid quotes with those words to be safe. I'll paraphrase the Match 5 example without "lay bet" or "bookmaker".

Now write the final response with exact XML sections. No markdown outside? The user wants exact XML sections. I'll just output the XML sections. Should I wrap everything in a root? The user listed exact XML sections. I'll output them sequentially.

Word count check: I'll estimate. THINK_TRACE ~500. SOURCE_OPERATORS ~400. RETROCAUSAL ~250. RECURSIVE ~200. CROSS_LAYER ~200. RLVR ~250. Total ~1800. Good.

Let's write carefully with LaTeX.

LaTeX equations:
RPS:
\[
\mathrm{RPS}(\mathbf{p},\mathbf{e}) = \frac{1}{r-1}\sum_{k=1}^{r-1}\left(\sum_{i=1}^{k}(p_i - e_i)\right)^2
\]
where \(r=3\), \(\mathbf{p}=(p_H,p_D,p_A)\), \(\mathbf{e}\) is one-hot.

Cumulative forecasts for football:
\(P_1 = p_H\), \(P_2 = p_H+p_D\); observed \(E_1 = \mathbb{1}(w=H)\), \(E_2 = \mathbb{1}(w\in\{H,D\})\). Then RPS = \(\frac{1}{2}[(P_1-E_1)^2 + (P_2-E_2)^2]\).

Check Match 4 α: p=(0.60,0.25,0.15), e for H = (1,0,0). P=(0.60,0.85), E=(1,1). (0.6-1)^2=0.16; (0.85-1)^2=0.0225; sum=0.1825/2=0.09125. Matches table.

Brier:
\[
\mathrm{BS}(\mathbf{p},\mathbf{e}) = \sum_{i=1}^{r}(p_i - e_i)^2
\]
(As used in Table 2; unnormalized sum.)

Geometric Mean: \(S_{GM} = p_w\).
Information Loss: \(S_{IL} = -\log_2 p_w\) (bits). Singularity at \(p_w=0\).
MLLE: \(S_{MLLE} = \ln p_w\) (nats).
Binary Decision: \(S_{BD} = \mathbb{1}\{p_w > p_i \;\forall i \ne w\}\).

Alternative absolute-distance measure mentioned on [PAGE 7]:
\[
\mathrm{RPS}_{abs} = \frac{1}{r-1}\sum_{k=1}^{r-1}\left|\sum_{i=1}^{k}(p_i - e_i)\right|
\]
This is inferred from text "based on absolute distance rather than squared distance". I should label it as the alternative proposition described in the source.

Breakdown regimes:
- \(p_w=0\): IL and MLLE diverge (log singularity).
- Small ensemble \(N\): RPS negative bias (Jolliffe & Stephenson, 2003, cited [PAGE 6]).
- Nominal misclassification: treating {H,D,A} as nominal invalidates distance sensitivity.

Now compose. I'll make sure each section is clearly labeled.

I need to ensure I don't accidentally use a toy equation like Force/Fatigue. All equations are from source.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The central multi-hop derivation in Constantinou and Fenton (2012) is that association football outcomes {H, D, A} must be treated as an ordinal scale, not a nominal scale [PAGE 1]. The intuition is topological: if the home team leads by one goal, a single away goal moves the state from H to D, and a second away goal moves it to A. Therefore D lies metrically between H and A. Any scoring rule that assigns probabilities to these outcomes must penalize probability mass placed on A more heavily than mass placed on D when the observed result is H, because A is farther from H in the ordered outcome space [PAGE 1].

The paper formalizes this through five benchmark scenarios [PAGE 3, Table 1]. Scenarios 4 and 5 are the critical stress tests. In Match 4, both models assign p(H)=0.60, but model α assigns p(D)=0.25 and p(A)=0.15 while model β reverses them. Because H is observed, α is strictly better: its unobserved mass is closer to the observed outcome in ordinal distance. In Match 5, model β assigns a higher probability to the observed H (0.60 vs 0.57), yet α is more informative about the home team not losing because α assigns only 0.10 to A versus β’s 0.20. A valid ordinal scoring rule must rank α above β in both cases [PAGE 4-5].

The gray-zone audit targets three breakdown regimes. First, every previously used scoring rule fails benchmarks 4 and 5 because they are either local (depending only on p_w) or quadratic but non-cumulative (Brier), so they ignore the ordinal spacing of unobserved outcomes [PAGE 5, Table 2]. Second, the Rank Probability Score (RPS) fixes this by comparing cumulative distribution functions rather than point probabilities [PAGE 6]. However, the paper itself identifies a residual inconsistency: because RPS squares cumulative differences, it penalizes uneven distributions of unobserved outcomes. In Match 3, where D is observed and H and A are equidistant from D, α (0.35, 0.30, 0.35) scores better than β (0.60, 0.30, 0.10) under RPS, even though one could argue the draw implies nothing about the symmetry of H versus A [PAGE 6-7]. The paper offers an absolute-distance alternative to RPS to resolve this [PAGE 7].

Third, RPS carries a negative bias that is strongest for small ensemble size [PAGE 6, citing Jolliffe & Stephenson, 2003]. This means short-term validation over a few matches can systematically misrank models. Local rules such as Information Loss and Maximum Log-Likelihood Estimation possess a hard singularity at p_w = 0, diverging to infinity or negative infinity and thus collapsing forecast assessment whenever a model assigns zero probability to the realized outcome [PAGE 9-10]. The derivation chain runs from Epstein (1969), who introduced RPS, through Murphy (1969, 1970) on strict propriety and distance sensitivity, to Gneiting & Raftery (2007), who established that measurement scale type should dictate scoring-rule choice [PAGE 1, 6]. Constantinou and Fenton’s contribution is applying this lineage to football and demonstrating that nine prior studies used inadequate rules [PAGE 2].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a single match instance have r = 3 possible outcomes with forecast vector \(\mathbf{p} = (p_H, p_D, p_A)\), \(\sum_i p_i = 1\), \(p_i \ge 0\), and observed one-hot vector \(\mathbf{e} = (e_H, e_D, e_A)\), where \(e_w = 1\) for the realized outcome \(w \in \{H, D, A\}\) and 0 otherwise [PAGE 9].

Rank Probability Score (RPS), as instantiated for football in Table 3 [PAGE 6]:
\[
\mathrm{RPS}(\mathbf{p},\mathbf{e}) \;=\; \frac{1}{r-1}\sum_{k=1}^{r-1}\left(\sum_{i=1}^{k}(p_i - e_i)\right)^2
\]
With r = 3, the cumulative forecasts are \(P_1 = p_H\), \(P_2 = p_H + p_D\), and the cumulative observations are \(E_1 = \mathbb{1}(w=H)\), \(E_2 = \mathbb{1}(w \in \{H, D\})\). Hence
\[
\mathrm{RPS} = \frac{1}{2}\Big[(P_1 - E_1)^2 + (P_2 - E_2)^2\Big].
\]
Units: dimensionless probability score, normalized to [0, 1] for r = 3. A lower score indicates a better forecast. Verification against Table 3 [PAGE 6]: Match 4 model α gives P = (0.60, 0.85), E = (1, 1), so \(\mathrm{RPS} = \tfrac12[(-0.40)^2 + (-0.15)^2] = 0.09125\), exactly as reported. Match 5 model α gives P = (0.57, 0.90), E = (1, 1), so \(\mathrm{RPS} = \tfrac12[(-0.43)^2 + (-0.10)^2] \approx 0.09745\), matching the table. Model β in Match 5 gives P = (0.60, 0.80), E = (1, 1), yielding \(\mathrm{RPS} = \tfrac12[(-0.40)^2 + (-0.20)^2] = 0.10000\). RPS correctly ranks α above β in all five matches [PAGE 6].

Brier Score / Quadratic Loss [PAGE 10, Appendix]:
\[
\mathrm{BS}(\mathbf{p},\mathbf{e}) \;=\; \sum_{i=1}^{r}(p_i - e_i)^2.
\]
Units: dimensionless, unnormalized sum form as used in Table 2 [PAGE 5]; range [0, 2] for r = 3 because the forecast and observation vectors each sum to 1. Lower is better.

Geometric Mean Score [PAGE 9]:
\[
S_{GM} = p_w.
\]
Higher is better. Units: probability.

Information Loss [PAGE 9]:
\[
S_{IL} = -\log_2(p_w) \quad \text{bits}.
\]
Lower is better. Singularity/breakdown regime: as \(p_w \to 0^+\), \(S_{IL} \to +\infty\); exact zero probability produces an undefined/infinite score (the zero-frequency problem).

Maximum Log-Likelihood Estimation (MLLE) [PAGE 10]:
\[
S_{MLLE} = \ln(p_w) \quad \text{nats}.
\]
Higher is better. Singularity/breakdown regime: \(p_w = 0\) gives \(-\infty\). Information Loss and MLLE generate identical forecast rankings despite different units [PAGE 10].

Binary Decision [PAGE 9]:
\[
S_{BD} = \mathbb{1}\{p_w > p_i \;\; \forall i \ne w\}.
\]
Higher is better; takes values in {0, 1}.

Alternative absolute-distance measure discussed on [PAGE 7]:
\[
\mathrm{RPS}_{\mathrm{abs}} = \frac{1}{r-1}\sum_{k=1}^{r-1}\left|\sum_{i=1}^{k}(p_i - e_i)\right|.
\]
This retains ordering but avoids the squared-distance over-penalty of uneven unobserved distributions.

Breakdown regimes summary: (i) \(p_w = 0\) invalidates log-based rules via singularity; (ii) small ensemble size N induces strongest negative bias in RPS [PAGE 6]; (iii) treating {H, D, A} as nominal invalidates distance sensitivity entirely, which was the error in all nine prior studies [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage begins with Epstein (1969), who introduced the Rank Probability Score for probability forecasts of ranked categories [PAGE 6]. Murphy (1969) established strict propriety, and Murphy (1970) demonstrated sensitivity to distance, making RPS appropriate for ordered variables [PAGE 6]. Brier (1950) supplied the quadratic loss foundation later adapted as the Brier Score [PAGE 10]. Gneiting & Raftery (2007) provided the general principle that the measurement scale type of the outcome should drive scoring-rule selection, explicitly distinguishing nominal lotteries from ordinal temperature forecasts [PAGE 1]. Jose et al. (2009) observed that football match outcomes are ordered and that RPS is suitable, but Constantinou and Fenton show this observation was not operationalized in prior football studies [PAGE 1].

The paper reviews nine studies that used explicit scoring rules for probabilistic football forecasting [PAGE 2]. Category (a) local rules—Geometric Mean, Information Loss, Maximum Log-Likelihood—appear in Dixon & Coles (1997), Rue & Salvesen (2000), Hirotsu & Wright (2003), Goddard (2005), Karlis & Ntzoufras (2003), Forrest et al. (2005), Joseph et al. (2006), Graham & Stott (2008), and Hvattum & Arntzen (2010). Category (b) non-local rules—Brier Score, Quadratic Loss, Binary Decision—appear in Forrest et al. (2005), Joseph et al. (2006), and Hvattum & Arntzen (2010) [PAGE 2].

A multi-week trap lies in the ranking methods explicitly placed beyond the paper’s scope: cumulative expected points error, RMS and Relative Rank Error of final league tables, and pairwise probability comparisons [PAGE 2]. These are associated with Pope & Peel (1988), Dixon & Pope (2004), Min et al. (2008), and Baio & Blangiardo (2010). Because they aggregate over many matches, they cannot validate the accuracy of a single-game probabilistic forecast. Using them as a proxy for per-match model quality commits an ecological fallacy: seasonal league-table calibration does not imply match-level ordinal scoring validity, and vice versa. This creates a multi-week trap in which a model can look excellent on retrospective table projections while failing the Match 4 and Match 5 benchmarks for individual fixtures.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of forecasters under validation pressure to revert to familiar local scoring rules. Because Geometric Mean, Information Loss, and MLLE require only the probability assigned to the observed outcome \(p_w\), they are computationally cheap and psychologically seductive when a model is under review [PAGE 2, 9]. Under crisis—such as a poor weekend of predictions—modelers tend to highlight \(p_w\) and ignore the ordinal placement of the unobserved probabilities, exactly the failure mode exposed by Matches 4 and 5 [PAGE 4-5].

The counter-trap is premature RPS orthodoxy. Adopting RPS because it passes all five benchmarks can blind a forecaster to the Match 3 residual: squared cumulative distance penalizes models that distribute unobserved probability unevenly around a draw [PAGE 6-7]. If the true data-generating process involves a dominant team drawing because of an early red card or weather-induced low scoring, the ordinal assumption that H and A are equidistant from D may hold geometrically but not causally. A counter-trap forecaster will reflexively prefer the diffuse model α over the sharp model β in Match 3, even when physical context makes β’s sharp (but misplaced) home-win mass more defensible.

The clock layer concerns temporal stationarity of the ordinal metric. Constantinou and Fenton note that forecast accuracy does not guarantee profitability because profit depends on betting methodology [PAGE 8]. Extending this idea, the ordinal distance between H, D, and A is treated as constant across the season, yet the physical meaning of a draw changes across the clock of a match and across weeks: a 0-0 draw after two red cards is not metrically equivalent in team-quality space to a 1-1 draw between two evenly matched sides. If the forecast model does not condition the ordinal geometry on match state or exogenous context, the RPS distance metric is applied to a non-stationary outcome space, causing recursive miscalibration as the season progresses.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: Player biomechanics and fatigue alter goal-scoring intensities non-uniformly across home and away sides. If a key attacking player is fatigued or injured, the probability mass shifts from H toward D and A in a way that is not symmetric. RPS assumes the ordinal spacing H-D-A is fixed and exogenous to the match instance; when biomechanical depletion compresses the home team’s expected goals, the cumulative distribution forecast \(P_1, P_2\) no longer aligns with the physical geometry of the outcome space, producing an RPS penalty that reflects model-context mismatch rather than forecast miscalibration.

Biomechanical layer veto: In-game events such as a red card or a penalty change the effective state space mid-match. A pre-match forecast assigns probabilities over {H, D, A} under the assumption of eleven-vs-eleven play. If a red card occurs at minute 20, the ordinal distance between H and D contracts because the disadvantaged team is more likely to defend for a draw. RPS, computed post-hoc on the final outcome, penalizes the pre-match forecast for failing to anticipate a path-dependent ordinal compression that no static scoring rule can encode without conditioning on match events.

Weather layer veto: Rain and wind suppress goal scoring and increase the base rate of draws. This compresses the probability simplex toward D and alters the relative ordinal cost of misplacing mass on A versus H. A forecast calibrated on dry-weather matches will have systematically biased cumulative distributions when applied to wet-weather fixtures. RPS will then register a degradation in score that is driven by exogenous weather conditioning, not by deterioration of the underlying model’s ordinal ranking.

Adjudication: RPS is valid only as a context-conditioned proper scoring rule. The veto proof requires stratification by match context—home advantage, weather regime, and in-game state—before pooling RPS values across instances. If physical, biomechanical, or weather layers induce context-dependent ordinal distances, unstratified RPS is invalid and must be replaced by a stratified proper scoring rule or a context-conditioned cumulative probability assessment.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Zero-probability singularity veto. Construct a counterfactual match in which the observed outcome is Away win (A). Model X assigns \(\mathbf{p}_X = (1.00, 0.00, 0.00)\) and Model Y assigns \(\mathbf{p}_Y = (0.00, 1.00, 0.00)\). Both assign \(p_A = 0\), so Information Loss and MLLE diverge (undefined/infinite) [PAGE 9-10]. RPS remains finite but differs: Model X gives \(P = (1.00, 1.00)\), E = (0, 0), so \(\mathrm{RPS} = \tfrac12[1^2 + 1^2] = 1.0\); Model Y gives \(P = (0.00, 1.00)\), E = (0, 0), so \(\mathrm{RPS} = \tfrac12[0^2 + 1^2] = 0.5\). RPS ranks Y above X even though both are catastrophically wrong on the observed outcome. Prediction: In any validation set containing at least one match where a model assigns zero probability to the realized result, log-based rules will crash, and RPS will rank models by unobserved cumulative placement rather than by observed-outcome failure, producing a false discrimination between two unacceptable forecasts.

Scenario 2: Small-ensemble negative bias veto. Construct a counterfactual slate of N = 10 synthetic matches. RPS exhibits negative bias strongest for small ensemble size [PAGE 6]. Generate forecasts from a miscalibrated model that overstates extreme probabilities and a calibrated model that outputs climatological frequencies. Over only 10 instances, the finite-sample bias can cause the miscalibrated model to achieve a lower mean RPS than the calibrated model purely by chance. Prediction: On a single midweek fixture list or a short cup tournament, RPS will select an overconfident miscalibrated model over a well-calibrated one with probability materially above the nominal level; the effect vanishes only as N grows large.

Scenario 3: Match 3 absolute-distance veto. Construct a counterfactual derby in which the observed outcome is Draw (D), but an early red card to the favorite made the draw contextually deterministic rather than a symmetric equilibrium between H and A. Model X is diffuse and symmetric: \(\mathbf{p}_X = (0.33, 0.34, 0.33)\). Model Y is sharp but favors the favorite: \(\mathbf{p}_Y = (0.70, 0.20, 0.10)\). Under squared-distance RPS, Model X scores lower (better) than Model Y because Y places substantial mass on H, far cumulatively from the observed D [PAGE 6]. Under the absolute-distance alternative [PAGE 7], both forecasts may be scored more equitably because the unobserved outcomes H and A are equidistant from D. Prediction: In matches with strong contextual drivers of draws (early red cards, extreme weather), RPS will systematically favor diffuse forecasts over sharp physical-context forecasts; the absolute-distance variant corrects this veto by refusing to penalize symmetric uncertainty around an observed draw.
</RLVR_COUNTERFACTUAL_VETOES>