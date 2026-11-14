---
source: "2018 Modeling the NCAA basketball tournament selection process using a decision tree - Shouvik Dutta and Sheldon H. Jacobson.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 7
model: deepseek/deepseek-v4.1-flash-1017
words: 8822
---

<NATIVE_REASONING>
We need answer. Need follow prompt: GSE + GSI Frontier Reasoning Foundry. Need produce >=1000 words across exact XML sections. Need zero betting lines. No spreads/totals/moneylines/odds. Zero toy equations. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need sections exact. Need deep multi-hop derivation & gray-zone audit >=400 words in THINK_TRACE. Need SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX units page citations breakdown. RETROCAUSAL_GENEALOGY historical/scientific lineage & multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions.

Need likely analyze paper. Need perhaps construct operators/equation from decision tree and RPI/Pyth. No betting lines. Need be careful "DRIVE SOURCE" file path. We can cite pages. Need mention exact quotes. Need maybe derive decision tree as lexicographic/boolean operator. Need formal LaTeX, units. Need include assumptions, singularity regimes. Need discuss limitations: no margin of victory, selection not exact, human factor. Need not provide betting advice. Could frame as GSE/GSI reasoning audit of paper. Need "Frontier Reasoning Foundry" perhaps make rigorous.

Need include all XML tags. Need no fake ratios. Need maybe equations: RPI formula as in paper [PAGE 2] with weights dimensionless. Pomeroy pyth formula [PAGE 2]. Decision tree predicates with thresholds. Need define pairwise score S_ij = 1 if T(i,j) = i else 0; wins W_i = sum_{j≠i} S_ij. Candidate set definition. Accuracy: one false positive per year. Need formal. Units: rankings ordinal dimensionless; win/loss counts dimensionless; RPI weighted proportion dimensionless; Pyth probability dimensionless in [0,1]. Need assumptions: candidate set excludes high seeds; pairwise comparison transitive? Actually tree may be nontransitive, so aggregation can create cycles. Singularity: thresholds exact equality; ties; missing data; non-transitive cycles; RPI OWP zero denominator if no games? Need mention exact singularity/breakdown regimes. Need cite quotes: "all but one team selected by our method was invited" page 1 abstract; "The RPI metric is used..." page 2; "RPI = (WP ∗0.25) + (OWP ∗0.5) + (OOWP ∗0.25)" page 2; "pyth = ..." page 2; "The number 12 was chosen because..." page 4; "the committee selection process is not an exact science" page 6; "no single year where our method selected every team correctly" page 6; "RPI is highly distinguishing" page 6; "top 50 wins ... avoiding 200+ losses" page 2; "RPI is used to determine which teams are considered, but is not a determining factor" page 2. Need cite exact [PAGE N] markers and verbatim quotes. We can include quotes.

Need ensure word count. Need sections total >1000. THINK_TRACE >=400. Let's draft around 2500 words. But desired oververbosity 5. Need enough depth. Exact XML sections. No extra outside? We can have only XML sections. Need maybe include "ZERO BETTING LINES" no odds. Avoid words "bet", "betting", "odds", "spread", "moneyline", "total" maybe "totals" avoid. "score" okay. Avoid "over/under". Avoid any sports wagering. We can mention "no wagering". Hmm zero betting lines means never mention. So don't mention betting at all. Avoid "odds". Use "pairwise victory count" not score? "Score" can be okay but maybe not. We can use "pairwise tally". Avoid "line". "spread" not use. "totals" not use.

Need formal equations. Let's design.

Paper's decision tree conditions from Table 2 [PAGE 5]:
1 RPI difference >45
2 Difference of (RPI Top50 Wins - 200+ Losses)>2
3 RPI difference >30
4 RPI difference >12 and Pomeroy difference >12
5 Pomeroy difference >18
6 Difference in RPI Top100 games played >5
7 Difference in last 12 games >3 and RPI difference <15
8 Difference in min SOS >90
9 RPI difference >15
10 Difference of Top50 wins - 200+ losses >0
11 Choose team with better Pomeroy.

Need define signed differences d_rpi(i,j) = r_i - r_j? Need orient: lower rank is better. If one team has much better RPI, choose that team. Since lower RPI ordinal is better. Define advantage A_rpi(i,j)=r_j - r_i (positive means i better). But threshold "RPI difference >45" likely absolute difference and choose better. We can define δ_R(i,j)=R_j - R_i, where lower rank better, so δ>45 means i better by at least 46? Strict >. Similarly δ_P = P_j - P_i. Top50 wins minus 200+ losses: B_i = W50_i - L200_i. δ_B = B_i - B_j. Min SOS lower better: M_i = min(SOS_i, NCSOS_i). δ_M = M_j - M_i (positive i better). Last12 value L_i = wins-last12 - losses-last12. δ_L = L_i - L_j. Top100 games G_i. δ_G = G_i - G_j. Need lexicographic decision function returns i if predicate true else evaluate next; if false and maybe symmetric? The tree likely compare pair and choose stronger. Need state T(i,j) = i if first condition with advantage; else T(j,i)? To avoid fallthrough, at final condition choose better Pomeroy. Need explicit.

Define I_i cardinal? Let R_i ordinal RPI rank (1 best). P_i Pomeroy rank. B_i = T50_i - L200_i. M_i = min(SOS_i, NCSOS_i). L_i = W12_i - L12_i. G_i = G100_i. Define δ_X(i,j)=X_j-X_i for rank-like lower better; δ_B=B_i-B_j; δ_G=G_i-G_j; δ_L=L_i-L_j; δ_M=M_j-M_i.

Then decision operator:
D(i,j)=
i if δ_R>45
else i if δ_B>2
else i if δ_R>30
else i if (δ_R>12 ∧ δ_P>12)
else i if δ_P>18
else i if δ_G>5
else i if (δ_L>3 ∧ δ_R<15) [But δ_R<15? Need if RPI difference <15 means absolute? In oriented δ_R? If δ_R = R_j - R_i, "RPI difference <15" might mean |R_i-R_j|<15, not signed. If δ_R positive i better; condition "similar RPI" could be |δ_R|<15. But if i better by >15, earlier condition caught. Here after threshold? Actually condition says "Difference in last 12 games >3 and RPI difference <15" - likely absolute difference <15. Define abs. But if δ_R negative? If i worse RPI and better last12, could choose i if RPI close. Use |R_i-R_j|<15. Need mention ordinal. ]
else i if δ_M>90
else i if δ_R>15
else i if δ_B>0
else i if P_i<P_j (better Pomeroy)
else j? If tie? Need tie-break. For equal Pomeroy, maybe deterministic index or no selection. Need mention tie singularity.

Need note the tree as reported is not necessarily exhaustive orientation; our formalization is faithful reconstruction, not code from authors. Need avoid claiming exact. "Reconstructed operator".

Need units: R_i, P_i ordinal ranks (dimensionless ordinal); B_i count; G_i count; L_i count; M_i ordinal SOS rank dimensionless; δ dimensionless counts. RPI formula weights dimensionless, RPI dimensionless. Pyth formula: AdjO and AdjD are points per 100 possessions? Actually adjusted offensive efficiency estimate of points scored per 100 possessions, AdjD points allowed per 100 possessions. Ratio AdjO^10.25/(AdjO^10.25+AdjD^10.25) dimensionless. Exponent 10.25 dimensionless. Need note if AdjO, AdjD nonnegative; if both zero denominator zero (breakdown). If one zero? If AdjO=0 and AdjD>0 => pyth=0. If AdjD=0 and AdjO>0 => pyth=1. If both zero undefined. If negative impossible. RPI: WP weighted wins/games; OWP average; OOWP average. If games=0 WP undefined; if no opponents OWP undefined. Weights sum 1. Need maybe "RPI ∈ [0,1.4?]"? Wait WP can be >1? Home win 0.6, neutral 1, away 1.4; WP = weighted wins / number games. If all away wins, weighted wins = 1.4*G, WP=1.4. Thus RPI can exceed 1? OWP similarly. But they call percentage. Actually weighted wins / games can max 1.4. So RPI not bounded by 1 under this weighting. Need mention. "Despite 'percentage' label, weighted WP can exceed 1 if all wins away; RPI is not a probability." Important. Units dimensionless but not probability. If all games away wins, WP=1.4. Then RPI max? 0.25*1.4+0.5*?+0.25*? Could exceed 1. But if OWP/OOWP also weighted, max 1.4. RPI max 1.4. Not probability. Need mention.

Pyth formula from paper: pyth = AdjO^10.25 / (AdjO^10.25 + AdjD^10.25). They wrote AdjO10.25 maybe superscript. Need quote exact: "pyth = AdjO10.25 / AdjO10.25 + AdjD10.25" Actually page text: 
pyth =
AdjO10.25
AdjO10.25 + AdjD10.25
(2)
Likely exponent. Need cite. Need state with LaTeX.

Need source operators and equations:
- RPI operator with units and page citation.
- Pomeroy pyth operator.
- Pairwise decision tree operator as lexicographic.
- Aggregation W_i = sum_{j in C, j≠i} 1[D(i,j)=i].
- Selection set S = top k by W_i? They choose teams with most pairwise victories. k is number of at-large candidates? Not explicit. Need state k = number of available at-large slots among candidate bubble set? The paper candidate set includes teams seeded 10+ at-large and NIT 1-2 seeds. They selected? They didn't specify exact k. We can define S_m = {i: W_i among top m}. Need m selected based on candidate count? Need note not fully specified in paper; assumption. Could say "the paper reports selections, not a closed-form m; for audit we denote m as the number of available at-large berths represented in candidate set and flag this as a reconstruction assumption." Good.

Accuracy: In each year 2012-2016 all but one selected correctly. False positive one per year. Need maybe formal: error_y = |S_y Δ A_y|? They say one team allowed into tournament that did not actually make it, but selected all others correctly. That implies actual selections all included except one? Need Table 3: Predicted Selections 10 teams includes Texas, Purdue, South Florida, NC State, California, Colorado State, BYU? Wait table formatting messy. Actual Non-Selections 1 team: Seton Hall? Hmm. Need not dive. Use quote.

Need RETROCAUSAL_GENEALOGY: Historical/scientific lineage: RPI, BPI, Pomeroy, Sagarin; committee process public but weights unknown; decision tree as interpretable model; lineage from linear weighted ratings, pairwise comparison, lexicographic decision rules, social choice/ranking aggregation; Spearman correlation table. Multi-week traps: last 12 games as recency proxy can be unstable; selection Sunday information timing; injury reports not included; conference tournament performance; overfitting to 2012-2016; thresholds tuned by experimentation; exact equality and tie regimes; human eye test. Need mention "crisis habit regression vs counter-trap vs clock" in RECURSIVE_THEORY_OF_MIND. Need interpret: "crisis habit regression" = committee under time pressure regresses to salient heuristics (RPI, top-50 wins, 200+ losses); "counter-trap" = model builds elaborate proxy to avoid RPI but RPI remains embedded; "clock" = last 12 games / Selection Sunday recency. Need discuss recursive theory of mind: model of committee members modeling each other? Committee members rank teams, all-but-two threshold; they anticipate other members' ballots; strategic consideration? Need not overdo. Need align with paper: committee process: each member identifies 36 teams, all-but-two threshold, remaining filtered via ballots, ranked and added four at a time [PAGE 1-2]. Need quote. This is social choice. Recursive ToM: each member's ballot depends on beliefs about peers and public metrics; model's decision tree is a theory of committee's mind. Crisis habit regression: under uncertainty, committee falls back to RPI/top50/200+ losses; counter-trap: claiming RPI not determining but RPI embedded; clock: last 12 games and timing. Need mention exact conditions. Need multi-hop.

Need CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. This is weird for basketball selection paper. Need interpret cross-layer veto: physical constraints (player availability, injury reports, fatigue, travel, venue, weather) can veto metric-only selection. Need prove via source omissions: paper says committee has injury reports, coach availability [PAGE 2]; model excludes injury reports, margin of victory, etc. Weather? Basketball indoor, weather affects travel? Need be careful: "weather veto" maybe not central; but prompt demands physical/biomechanical/weather veto proof. We can say "For an indoor sport, direct weather veto is weak; the admissible cross-layer channel is travel/logistics and schedule disruption, not on-court aerodynamic weather." Need prove no included variable captures biomechanical load/injury/weather. Use source: "injury reports, coach availability" are available but not in tree [PAGE 2]; tree uses RPI, top50 wins, 200+ losses, SOS, top100 games, last12, Pomeroy [PAGE 4-5]. Therefore any selection that hinges on injury or availability is outside model and can veto predicted selection. Need cite "there seems to be some human factor involved that uses information outside the available numbers" [PAGE 6]. Need mention biomenchanical: last 12 games proxy for form but not actual load; back-to-back? NCAA schedule? Could mention minutes, injury, fatigue, travel. Weather: indoor game, but travel delays and campus closures can alter preparation; not captured. Need "veto proof" maybe formal: if E_i external state vector has nonzero causal effect and model omits it, then predictive sufficiency fails; counterfactual selection can flip. Need not provide actual data. Need state "veto is proven by source's own admission of omitted factors, not by a new empirical estimate."

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Need scenarios that would falsify/validate model. RLVR = reinforcement learning with verifiable rewards? Need propose 3 verifiable veto scenarios with predictions. Need make them testable against data. No betting lines. Need avoid wagering. Could be:
1. Threshold equality/tie stress test: Re-run 2012-2016 with all strict inequalities made inclusive (≥ instead of >) and deterministic tie-breaking. Prediction: selections change for at least one bubble team because thresholds are boundary-sensitive; if no change, tree's robustness to threshold equality is supported. Verifiable by code and public brackets.
2. Drop last-12-games condition: Recompute pairwise tallies without condition 7. Prediction: at least one of the five years changes which single false positive occurs or increases disagreement; because paper says last 12 chosen via experimental data exploration [PAGE 4]. Verify by rerunning and comparing to actual selections.
3. Add injury/availability binary for committee-known absent players: If model includes a simple binary (e.g., star player unavailable) and retrains/lexicographic, prediction: at least one of the one-error cases per year is resolved without degrading other years? Hmm harder verifiable? Need precise. Maybe "replace Pomeroy with BPI/Sagarin" since high correlation 0.991-0.994 [PAGE 4 Table 1]; prediction: near-identical selections, disagreement ≤1 team per year; if larger, correlation does not imply decision equivalence. Verifiable by rerun.
Need 3 scenarios with predictions. Need "RLVR" maybe reward verification. We can define each scenario with a binary verifiable reward: exact match on held-out years, or number of changed selections. Need mention "no line". Fine.

Need "counterfactual vetoes" maybe: scenarios that veto the model if failed. Need include predictions. Need make them verifiable. Could include threshold perturbation, leave-one-year-out, swap ranking system. Need 3.

Need ensure XML exact. We can include equations in LaTeX. Need cite pages. Need word count. Let's plan structure:

<THINK_TRACE>
Paragraphs >=400 words. Start with source read: paper's objective, process, features, tree, results. Multi-hop derivation: (1) committee process -> candidate set -> pairwise comparison -> decision tree -> aggregation -> selection. (2) RPI formula and issue. (3) Pomeroy pyth and correlation. (4) tree conditions and thresholds. (5) results and error. Gray-zone audit: unknown weights, nonpublic ranking, candidate set restriction, no seeding, no injury, no margin, threshold tuning, overfitting, transitivity/cycles, tie/equality, RPI embedded, "all but one" not perfect. Include quotes. Need >=400; likely 700.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX. Include RPI, pyth, decision operator, aggregation, selection, accuracy. Units, assumptions, singularity/breakdown. Page citations and quotes. Maybe subsections as bullets but inside XML. Need not use markdown? Fine.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage, traps. Cite pages. Mention RPI, BPI, Pomeroy, Sagarin, Spearman correlations. Multi-week traps: recency, conference tournaments, injury reports, public statements vs revealed preferences. Maybe 300 words.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Committee process. Quotes. 300 words.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. 300 words. Cite source omissions. Formal veto condition. 
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios + predictions. 300 words. 
</RLVR_COUNTERFACTUAL_VETOES>

Need avoid "betting lines". Don't use "odds". "Prediction" okay. Avoid "total" maybe "totals" not. But "total" appears in math? Could use "sum". Avoid "moneyline". "spread" avoid. "line" maybe not. "bet" no. "wager" no. "odds" no. "over/under" no.

Need exact quotes. Use [PAGE N]. Ensure quotes verbatim. Let's list quotes:
PAGE 1: "Each year, 68 teams are invited to participate in the NCAA basketball tournament." and "Of these 68 teams, 36 are given an at-large bid by a selection committee rather than automatically qualifying." and abstract "we ﬁnd that in each year all but one team selected by our method was invited to the tournament." Note source has ligature "ﬁnd". Use exact maybe "we find" not verbatim? We need verbatim. Could quote "we ﬁnd that in each year all but one team selected by our method was invited to the tournament." Use ligature. 
Page 1: "any team which at least all-but-two committee members select for inclusion will be added to the tournament." 
Page 1: "The remaining teams are taken from the lists for inclusion and consideration and filtered down via another series" continues page 2 "of ballots. Finally, those teams are ranked by each committee member, and the highest ranked teams are added to the tournament four at a time." 
Page 2: "it was long thought that the Rating Performance Index (RPI) was a large factor in the selection process (Ezekowitz, 2013), but recent statements from committee members state that the RPI is used to determine which teams are considered, but is not a determining factor (Stephens, 2015)." Good.
Page 2: "Other statements by committee members suggest the importance of acquiring top-50 wins (wins against a team with a top-50 RPI) and avoiding 200+ losses (losses against a team with an RPI of over 200) (Katz, 2016)." Good.
Page 2: RPI formula quote. "RPI = (WP ∗0.25) + (OWP ∗0.5) + (OOWP ∗0.25)" and "where WP is Winning Percentage, OWP is Opponents’ Winning Percentage, and OOWP is Opponents’ Opponents’ Winning Percentage." 
Page 2: "The WP is calculated as number of wins / number of games, where a home win is counted as 0.6, a neutral win is 1, and an away win is 1.4." 
Page 2: "75% of the RPI value is dependent on opponent strength to some degree." 
Page 2: pyth formula quote. "pyth = AdjO10.25 / AdjO10.25 + AdjD10.25" Not exact due denominator. We can present equation and cite. Quote "His ratings combine the adjusted offensive efficiency (AdjO) and adjusted defensive efficiency (AdjD) which are an estimate of the points scored (for offense) or allowed (for defense) per 100 possessions against the average defense (or offense)." 
Page 3-4: "Since the correlation coefficient was so large, using all of the ranking systems would provide only marginally more information than using just one; therefore, for the sake of simplicity, we opted to only use the Pomeroy rankings." 
Page 4: "The number 12 was chosen because the last 12 games is a statistic tracked and provided by ESPN." 
Page 4: "The inclusion of recent games and games against the top 100 teams was decided by doing some data exploration." 
Page 4: "We were also aiming to have our process resemble the actual process of the selection committee as closely as possible, and therefore aimed to use only statistics that the committee is known to use." 
Page 5: Table 2 conditions. Quote maybe not entire. "RPI difference > 45" etc. Need cite exact. 
Page 5: "The goal was to create a tree without relying on complex conditions, since increasingly complex conditions could result in the tree being less generalizable and applicable to future years." 
Page 6: "In each of the five years, our method allowed one team into the tournament that did not actually make the tournament, but selected all the others correctly." 
Page 6: "there was no single year where our method selected every team correctly." 
Page 6: "this leads to the conclusion that the committee selection process is not an exact science - there seems to be some human factor involved that uses information outside the available numbers." Need exact: "This leads to the conclusion that the committee selection process is not an exact science - there seems to be some human factor involved that uses information outside the available numbers." 
Page 6: "In this tree, we can see that the RPI is highly distinguishing - it appears in two of the top three conditions." 
Page 7: "despite the statements fo the committee that RPI is not heavily used for selection, it seems to be either very important or a very good indicator." Note typo "fo". Use exact maybe. 
Page 7: "The largest gain, however, would come from more statements by the selection committee on exactly what information they use and value." Good.

Need cite Table 1 correlation: "BPI 0.967, Pomeroy 0.965, Sagarin 0.968" etc? Actually table:
RPI vs BPI 0.967
RPI vs Pomeroy 0.965
RPI vs Sagarin 0.968
BPI vs Pomeroy 0.991
BPI vs Sagarin 0.994
Pomeroy vs Sagarin 0.994
Need cite [PAGE 4] Table 1. Could mention.

Need formal decision operator. Need ensure no "toy equations". These are source-derived. Need define "unit". Use "dimensionless ordinal" etc. Need maybe "LaTeX" in XML. Good.

Need "singularity/breakdown regimes" exact. In SOURCE_OPERATORS_AND_EQUATIONS include bullet list:
- RPI breakdown: N_i=0 or N_opp=0; weighted WP >1 not probability; OWP/OOWP undefined if opponents' games zero; missing data; official RPI formula version not fully specified? The paper gives current formula but not exact treatment of neutral? It does. 
- Pyth breakdown: AdjO=AdjD=0 denominator zero; if either negative invalid; exponent large amplifies small differences; proprietary inputs not reproducible.
- Decision tree breakdown: exact equality at thresholds (strict >); ties in all conditions; missing values; non-transitive pairwise outcomes causing cycles; candidate set restricted; aggregation top m not fully specified; ordinal conversion by year prevents cross-year comparability; last12 and top100 thresholds tuned.
Need mention "strict inequalities" mean equality falls through; if all conditions false, final Pomeroy; if Pomeroy tie, undefined. Good.

Need "assumptions" list. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" formal:
Let y_i be actual selection, \hat y_i model. Let X_i included vector, Z_i omitted physical vector. Model assumes P(y_i=1|X_i,Z_i)=P(y_i=1|X_i). Veto if exists i with same X but different Z causing y flip. Source itself reports human factor [PAGE 6] and available injury/coach availability [PAGE 2]. For indoor sport weather direct effect small; only through travel/logistics. Biomechanical: last12 is performance proxy, not load/injury; no minutes, rest, injury. Therefore cross-layer veto is admissible. Need "proof" not empirical but logical from source. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" formal:
Define reward R(θ)= (1/5)Σ_y 1[S_y(θ)=A_y] maybe exact match; or error count. Verifiable. Scenario 1 threshold equality audit: change > to ≥ and tie-break by lower Pomeroy. Prediction: at least one year changes false positive or exact match; if invariant, thresholds are robust. 
Scenario 2 leave-one-year-out threshold tuning: choose thresholds using four years, test fifth. Prediction: exact-match error increases relative to in-sample because paper's tree was experimentally built; at least one held-out year has ≥2 disagreements. Could be too strong? Paper says all but one each year in-sample. We can predict "held-out error ≥ in-sample error + 1 in at least one fold" plausible.
Scenario 3 ranking-system swap: replace Pomeroy with BPI/Sagarin. Given correlations 0.991-0.994 [PAGE 4], prediction: selection set changes by ≤1 team per year; if >1, correlation not sufficient for decision equivalence. This is verifiable by rerun.
Need maybe "counterfactual veto" each: if prediction fails, model property vetoed. Good. Need include "verifiable reward" and "prediction".

Need ensure no use of "score" in betting sense. "pairwise tally" okay. "victory count" okay. "ranking" okay.

Need maybe mention "GSE + GSI Frontier Reasoning Foundry" but not necessary. Could frame as "Audit object". Need not include outside XML. But maybe include a title? The XML sections only.

Need word count. Let's draft carefully.

Potential issue: ">= 1,000-word depth across these exact XML sections" means total content >1000. We'll exceed. Need THINK_TRACE >=400. Good.

Need exact XML tags. The tags:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need no markdown headings? Fine.

Let's write.

Need ensure equation LaTeX not broken. Use \( \) inside XML. Good.

Need cite page markers exact. Use [PAGE 1] etc. Include quotes. Need not overquote.

Let's compose THINK_TRACE:

"Source is Dutta & Jacobson 2018, pages 7. The object is not a physical model but a selection model. The paper begins with institutional fact: 68 teams, 36 at-large [PAGE 1]. Committee procedure: each member identifies 36 teams; all-but-two threshold; remaining lists filtered via ballots; ranked; highest added four at a time [PAGE 1-2]. The unknown is weights/ranking. Paper's model: candidate set bubble teams: at-large seeded 10+ and NIT 1-2 seeds [PAGE 4-5]; pairwise decision tree; pairwise victories; top teams selected. Feature set: RPI, Pomeroy, top50 wins, 200+ losses, SOS, top100 games, last12. They excluded BPI/Sagarin due high correlation [PAGE 3-4]. Results: all but one each year 2012-2016 [PAGE 1,6]. Gray zones: no exact year; human factor [PAGE 6]; RPI highly distinguishing [PAGE 6]; statements vs revealed. Multi-hop: RPI formula -> top50/200+ are RPI-defined -> RPI embedded; Pomeroy pyth -> AdjO/AdjD per 100 possessions; decision tree lexicographic; aggregation can be nontransitive; threshold tuning; candidate restriction; no seeding; no injury. Need audit... " Good.

Need maybe mention "RPI not a probability" important.

Now SOURCE_OPERATORS_AND_EQUATIONS with formal. Need maybe use align environment. Keep XML safe? `<` in equations? Avoid `<` unescaped? XML text with `<` may be parsed as tag. Since output just text, but to be safe use `&lt;`? The instruction expects XML sections; if we put `<` inside it might break XML. Use LaTeX with `\lt`? Better avoid raw `<` and `>`? But conditions use >. In XML text, `>` is allowed, `<` not. Need use `&lt;` for less-than. But they asked exact XML sections. We should escape `<` as `&lt;` if inside. Use `&gt;`? `>` okay but can use `&gt;`. For readability, use `\ge` etc. LaTeX `\leq` no raw <. Use words. For conditions, use `\delta_R&...`? Hmm.

If we use `\( \delta_R > 45 \)` raw `>` is okay in XML. `<` not. We can use `\delta_R \lt 15`? LaTeX \lt yields < symbol. Use `\lt` to avoid raw <. But in text "RPI difference <15" use `\lt`. Good. Use `\geq` no raw. Use `\Delta` etc. For set notation `\{i: W_i \geq ...\}` no raw. Good. Use `\mathbb{1}`. Need maybe `\sum_{j\in C, j\neq i}`. `\neq` no raw. Good.

Need define D(i,j) piecewise with \begin{cases} ... \end{cases}. Use `\text{if }`. Use `\&`? In LaTeX `\land`. Fine.

Need ensure no `&` unescaped? In XML, `&` must be `&amp;`. Equations with `&` alignment can break. Avoid align with `&`. Use `\begin{aligned}`? It has `&`. Could use separate display equations. Avoid `&` entirely. Use `\begin{cases}` doesn't need `&`? Actually cases uses `&` to align. Could avoid cases environment? Use piecewise with `\begin{array}{ll}` has `&`. Hmm. XML requires `&amp;`. We can escape `&` as `&amp;`. That's okay. But might be messy. Alternatively use prose and equations. Need formal LaTeX. We can write equations without alignment ampersands:
\[
D(i,j)=i \text{ if } \delta_R(i,j)>45
\]
Then "else if..." lines. That's formal enough. Or use `\begin{cases}` with `&amp;`. We can do `&amp;` inside XML. But maybe not necessary.

Need include `\operatorname{RPI}_i = 0.25 \mathrm{WP}_i + 0.5 \mathrm{OWP}_i + 0.25 \mathrm{OOWP}_i`. Units dimensionless. Good.

Need define weighted WP: `\mathrm{WP}_i = \frac{0.6 H_i + 1.0 N_i + 1.4 A_i}{H_i+N_i+A_i}`? The paper says home win counted 0.6, neutral win 1, away win 1.4. It doesn't mention home losses? It says "where a home win is counted as 0.6, a neutral win is 1, and an away win is 1.4." It might weight wins only? Actually RPI formula often weights wins and losses? The paper says WP calculated as number of wins / number of games, where a home win is counted as 0.6, neutral win 1, away win 1.4. It may mean wins weighted and losses? Hmm. Need not over-specify. Write `\mathrm{WP}_i = W_i^{\text{weighted}}/G_i` where `W_i^{\text{weighted}} = 0.6 H_i + 1.0 N_i + 1.4 A_i` under the paper's stated win weights; note paper does not fully specify loss treatment. But quote says number of wins / number of games. Actually if home win counted 0.6, neutral win 1, away win 1.4, then WP = weighted wins / games. This is odd. We'll state exactly as source and flag ambiguity. Good.

Need "OOWP average of each opponent's OWP". Good.

Pyth: `\mathrm{pyth}_i = \frac{\mathrm{AdjO}_i^{10.25}}{\mathrm{AdjO}_i^{10.25}+\mathrm{AdjD}_i^{10.25}}`. Units: AdjO and AdjD points per 100 possessions; exponent dimensionless; pyth dimensionless in [0,1] if positive. Good.

Decision tree:
Define `R_i` lower better; `P_i` lower better; `B_i = W50_i - L200_i`; `M_i = min(SOS_i, NCSOS_i)` lower better; `G_i` count; `L_i = W12_i - L12_i`. Define:
`\delta_R(i,j)=R_j-R_i` etc. `\delta_B(i,j)=B_i-B_j`; `\delta_G(i,j)=G_i-G_j`; `\delta_L(i,j)=L_i-L_j`; `\delta_M(i,j)=M_j-M_i`.
Then D(i,j) returns i if:
- δ_R >45
- else δ_B >2
- else δ_R >30
- else δ_R >12 and δ_P >12
- else δ_P >18
- else δ_G >5
- else δ_L >3 and |R_i-R_j| \lt 15
- else δ_M >90
- else δ_R >15
- else δ_B >0
- else P_i \lt P_j
- else tie undefined / deterministic index.
Need note in paper Table 2 order? It lists conditions in order. Yes. Note "RPI difference >12 and Pomeroy difference >12" and "Difference in last 12 games >3 and RPI difference <15" (absolute). Good.

Pairwise wins: `T_i = \sum_{j\in C\setminus\{i\}} \mathbf{1}[D(i,j)=i]`. If D(i,j)=j then no point; if tie no point. Selection `\hat S_y = \operatorname{Top}_m \{T_i\}`. But if nontransitive, pairwise wins may not correspond to total order. Need state.

Accuracy: `E_y = |\hat S_y \triangle A_y|`; reported `E_y=2`? Wait "all but one team selected correctly" means one false positive and no false negatives? Actually if selected all others correctly and one extra, symmetric difference =1? Let's parse: "allowed one team into the tournament that did not actually make the tournament, but selected all the others correctly." That means predicted set = actual set ∪ {one extra}; no actual team omitted. Then symmetric difference =1. But tables show Actual Non-Selections 1 team (Seton Hall) and Predicted Selections includes? Hmm table may indicate one predicted selection was non-selection. So E=1. But "all but one team selected by our method was invited" could mean one predicted team not invited; actual invited all selected? So false positive 1, false negative 0. We can say "reported one false positive per year, with no reported false negative in the text; formal symmetric-difference error is 1 under that reading." Need careful. Paper says "all but one team selected by our method was invited" [PAGE 1] and "allowed one team into the tournament that did not actually make the tournament, but selected all the others correctly" [PAGE 6]. That is one false positive, zero false negative. Use E_y=1. Good.

Need "singularity/breakdown regimes" list. Include "strict inequality boundary: equality at 45, 30, 12, 18, 5, 3, 15, 90, 2, 0 not defined by paper; our D falls through." Good. "Pomeroy tie in final default: no selection if equal; paper doesn't specify." "Non-transitive cycles: D may have cycles because lexicographic thresholds are not guaranteed transitive; pairwise tally can depend on candidate set inclusion." Good. "Candidate set selection: only bubble teams; high seeds assumed would be selected, not tested." "Ordinal conversion by year: no cross-year comparability; thresholds are rank differences not raw metric differences." "RPI formula weights: not probability; if all away wins, WP=1.4; RPI not bounded by 1; if denominator zero undefined." Good.

Need "RETROCAUSAL_GENEALOGY": Let's write 300 words. Mention prehistory: RPI as linear weighted composite, Pomeroy as Pythagorean expectation, BPI/Sagarin proprietary. The paper's decision tree is a retrocausal reconstruction: it infers committee's revealed preference from outcomes. It reverse-engineers from 2012-2016, not prospectively. Historical lineage: linear rating systems (RPI) -> efficiency ratings (Pomeroy) -> ensemble/correlation pruning -> interpretable rule lists. Multi-week traps: Selection Sunday recency, conference tournament week, injury reports, public statements vs behavior; "last 12" chosen because ESPN tracks it, not because theory; data exploration; overfitting thresholds to years. Need mention "multi-week traps" maybe:
- Recency trap: last 12 games may be noisy and includes conference tournament; a team hot for 2 weeks can dominate.
- Public-statement trap: committee says RPI not determining, but top50/200+ are RPI-defined, so RPI embedded.
- Candidate-set trap: bubble-team sample induces selection bias; high seeds not evaluated.
- Cross-year trap: ordinal by year helps but thresholds fixed across years may not transfer.
- Post hoc trap: thresholds experimentally adapted; no single year perfect; adapting one year hurts others [PAGE 6]. Good.

Need "RECURSIVE_THEORY_OF_MIND": 300 words. Discuss committee members' ballots: each identifies 36, all-but-two threshold, remaining filtered via ballots, ranked, added four at a time [PAGE 1-2]. This is recursive: each member's ranking depends on beliefs about other members' lists and public metrics. Model's tree is a "theory of committee's mind". Crisis habit regression: under time pressure and uncertainty, committee regresses to salient heuristics: RPI, top50 wins, 200+ losses. Counter-trap: model tries to avoid RPI by using Pomeroy and other metrics, but RPI remains in top50/200+ and early tree conditions; source says RPI highly distinguishing [PAGE 6]. Clock: last 12 games and Selection Sunday timeline; recency proxy. Need mention "counter-trap" as if model's attempt to correct RPI weakness by including Pomeroy is partially defeated by correlation and RPI-defined features. "Clock" also all-but-two threshold creates timing/strategic voting. Need maybe "crisis habit regression vs counter-trap vs clock" explicitly label. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": 300 words. Formal veto condition. Source says committee has injury reports, coach availability [PAGE 2]; tree doesn't include. It includes last 12 games as proxy but not physical load. Weather for indoor basketball: direct weather not a primary on-court variable; only travel/logistics. Biomechanical: injury, fatigue, minutes, rest. If two teams have identical X but different Z and committee sees Z, model's conditional independence fails. Prove via source admission "human factor involved that uses information outside the available numbers" [PAGE 6]. Therefore cross-layer veto is valid. Need "physical/biomechanical/weather veto proof" maybe say "The veto is not a claim that weather changes jump shots indoors; it is a claim that travel disruption and player availability can change selection evidence." Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. Need precise predictions. Use "verifiable reward" maybe define `R = 1` if exact selection set equals actual for a year else 0; or `E_y`. Scenario 1: threshold equality audit. Prediction: at least one year's predicted set changes; if not, strictness not material. Scenario 2: leave-one-year-out threshold selection. Prediction: held-out error >= in-sample+1 in at least one fold; if not, thresholds generalize better than expected. Scenario 3: swap Pomeroy with BPI/Sagarin. Prediction: symmetric difference ≤1 per year because correlations 0.991-0.994; if >1, decision-tree thresholds amplify small ranking differences. Need "counterfactual veto" - if prediction fails, which claim is vetoed. Good.

Need ensure >=1000 words. We'll write substantial. Need no mention "odds" etc. Avoid "line". In RLVR use "threshold boundary". Good.

Let's now produce final with XML. Need be careful with XML escaping: Use `&lt;` for `<` in text. Use `&gt;` maybe optional. Use `&amp;` for ampersand in LaTeX if any. Avoid raw `&` in equations. For "RPI difference > 45" raw > okay. For "RPI difference <15" use `\lt` in LaTeX or `&lt;` in text. Use `\lt` in math. In prose use "less than" to avoid. Good.

Need include "verbatim quotes" with exact text. Use quotation marks. Some quotes have `ﬁ` ligature; we can use normal "find" maybe not exact. To be safe, quote with normal letters? The source text uses "ﬁnd" in abstract. If we quote "we find", technically not verbatim. Use "we ﬁnd" with ligature? We can copy. But final may render. Use exact from source: "we ﬁnd that in each year all but one team selected by our method was invited to the tournament." Good. Use "fo" typo exact if quoting. Fine.

Need include page markers exactly [PAGE N]. Good.

Let's draft final.

Check for "toy equations": We have formal source-derived. Good.

Potential issue: "zero betting lines" – we don't mention. Good.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We don't. We define source-derived. Good.

Potential issue: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We do.

Need maybe include "Assumptions" in SOURCE_OPERATORS. Good.

Let's write final now.
</NATIVE_REASONING>

<THINK_TRACE>
The source is Dutta and Jacobson’s 2018 paper on modeling the NCAA men’s basketball tournament selection process with a decision tree. The audit object is not a physical performance model but a revealed-preference reconstruction: the paper tries to mimic the committee that awards at-large bids. The institutional frame is explicit: “Each year, 68 teams are invited to participate in the NCAA basketball tournament. Of these 68 teams, 36 are given an at-large bid by a selection committee rather than automatically qualifying” [PAGE 1]. The committee procedure is partly public: each member identifies 36 teams, and “any team which at least all-but-two committee members select for inclusion will be added to the tournament” [PAGE 1]; remaining teams are filtered through ballots, ranked by each member, and “the highest ranked teams are added to the tournament four at a time” [PAGE 1–2]. The unknown is the ranking rule: which data are used, how they are weighted, and how much is qualitative.

The paper’s multi-hop logic is: restrict the candidate pool to bubble teams, compare every pair with a decision tree, count pairwise victories, and select the teams with the most pairwise victories. The candidate pool is not all Division I teams; it is “the teams in the NCAA tournament with a seed of ten or higher who had been granted an at-large bid into the tournament and the one and two-seeded teams in the National Invitation Tournament (NIT)” [PAGE 5]. That is a deliberate gray-zone sample: teams near the at-large boundary. The model uses RPI, Pomeroy, top-50 wins, 200+ losses, strength of schedule, games against top-100 teams, and last-12-game record. The paper explains that BPI, Sagarin, and Pomeroy were highly correlated, and “for the sake of simplicity, we opted to only use the Pomeroy rankings” [PAGE 3–4]. The reported result is striking but not perfect: “in each year all but one team selected by our method was invited to the tournament” [PAGE 1], and “In each of the five years, our method allowed one team into the tournament that did not actually make the tournament, but selected all the others correctly” [PAGE 6].

The first gray-zone issue is that RPI is both explicitly included and implicitly embedded. The paper quotes committee statements that “the RPI is used to determine which teams are considered, but is not a determining factor” [PAGE 2], yet top-50 wins and 200+ losses are defined by RPI rank, and strength of schedule is also RPI-linked. The paper later admits: “In this tree, we can see that the RPI is highly distinguishing - it appears in two of the top three conditions” [PAGE 6]. This is a revealed-preference contradiction: the stated de-emphasis of RPI does not imply low causal weight if RPI is encoded in the features the committee actually discusses. The second gray-zone issue is threshold tuning. The tree’s conditions are lexicographic and threshold-heavy: RPI difference greater than 45, then top-50 wins minus 200+ losses greater than 2, then RPI difference greater than 30, then joint RPI/Pomeroy differences greater than 12, then Pomeroy difference greater than 18, then top-100 games greater than 5, then last-12 difference greater than 3 with RPI difference less than 15, then minimum SOS difference greater than 90, then RPI difference greater than 15, then top-50 minus 200+ losses greater than 0, then better Pomeroy [PAGE 5, Table 2]. These thresholds are experimentally chosen, not derived from a likelihood or a structural model. The paper says the goal was “to create a tree without relying on complex conditions, since increasingly complex conditions could result in the tree being less generalizable and applicable to future years” [PAGE 5]. That is an interpretability-generalization tradeoff, but it also means exact equality, missing data, and candidate-set boundaries are undefined.

The third gray-zone issue is aggregation. Pairwise comparison can be non-transitive. If the tree says A beats B, B beats C, and C beats A, then pairwise victory counts are not a total order. The paper does not report a transitivity audit. The fourth issue is omitted human and physical information. The paper notes committee access to “injury reports, coach availability, and other tracked metrics” [PAGE 2], but the tree does not include injury or availability. It uses last-12 record as a form proxy, but that is not a biomechanical load model. The paper’s own conclusion is that “the committee selection process is not an exact science - there seems to be some human factor involved that uses information outside the available numbers” [PAGE 6]. Therefore the decision tree is best read as an interpretable revealed-preference approximation, not a sufficient causal model. The final audit stance: the paper supplies a useful lexicographic operator and a strong empirical demonstration of RPI’s encoded importance, but its thresholds, candidate restriction, non-transitivity, and omitted physical/availability layers are real breakdown regimes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s first operator is the RPI composite. The paper states: “RPI = (WP ∗0.25) + (OWP ∗0.5) + (OOWP ∗0.25)” [PAGE 2], with “WP is Winning Percentage, OWP is Opponents’ Winning Percentage, and OOWP is Opponents’ Opponents’ Winning Percentage” [PAGE 2]. Formally, for team \(i\),
\[
\mathrm{RPI}_i = 0.25\,\mathrm{WP}_i + 0.5\,\mathrm{OWP}_i + 0.25\,\mathrm{OOWP}_i,
\]
where the weights \(0.25,0.5,0.25\) are dimensionless and sum to \(1\). The paper says “The WP is calculated as number of wins / number of games, where a home win is counted as 0.6, a neutral win is 1, and an away win is 1.4” [PAGE 2]. Thus \(\mathrm{WP}_i = W_i^{\mathrm{weighted}}/G_i\) under the paper’s stated win weights. Units: \(\mathrm{RPI}_i\) is dimensionless, but it is not a probability, because away wins are weighted at \(1.4\); a team with only away wins can have \(\mathrm{WP}_i=1.4\). The paper also notes that “75% of the RPI value is dependent on opponent strength to some degree” [PAGE 2]. Assumptions: opponent sets are complete and nonempty; the weighting of losses is not fully specified in the quoted formula; and the “percentage” label should not be read as a bounded probability.

The second operator is Pomeroy’s Pythagorean rating. The paper says Pomeroy combines “adjusted offensive efficiency (AdjO) and adjusted defensive efficiency (AdjD) which are an estimate of the points scored (for offense) or allowed (for defense) per 100 possessions against the average defense (or offense)” [PAGE 2]. The stated form is:
\[
\mathrm{pyth}_i =
\frac{\mathrm{AdjO}_i^{10.25}}
{\mathrm{AdjO}_i^{10.25}+\mathrm{AdjD}_i^{10.25}}.
\]
Units: \(\mathrm{AdjO}_i\) and \(\mathrm{AdjD}_i\) are points per 100 possessions; the exponent \(10.25\) is dimensionless; \(\mathrm{pyth}_i\) is dimensionless and lies in \([0,1]\) when both inputs are positive. Breakdown regimes: if \(\mathrm{AdjO}_i=\mathrm{AdjD}_i=0\), the denominator is zero and the ratio is undefined; if either input is negative, the fractional power is not real; if one input is zero and the other positive, the ratio is a boundary value \(0\) or \(1\). Because BPI and Sagarin formulas are proprietary, the paper’s choice of Pomeroy is a reproducibility compromise, not a complete rating-system audit.

The third operator is the paper’s pairwise decision tree. For teams \(i,j\), let \(R_i\) be RPI ordinal rank, \(P_i\) be Pomeroy ordinal rank, \(B_i=W50_i-L200_i\), \(M_i=\min(\mathrm{SOS}_i,\mathrm{NCSOS}_i)\), \(G_i\) be top-100 games played, and \(L_i=W12_i-L12_i\). Lower \(R\), \(P\), and \(M\) are better. Define signed advantages
\[
\delta_R(i,j)=R_j-R_i,\quad
\delta_P(i,j)=P_j-P_i,\quad
\delta_B(i,j)=B_i-B_j,
\]
\[
\delta_G(i,j)=G_i-G_j,\quad
\delta_L(i,j)=L_i-L_j,\quad
\delta_M(i,j)=M_j-M_i.
\]
A faithful lexicographic reconstruction of Table 2 [PAGE 5] is: \(D(i,j)=i\) if \(\delta_R(i,j)>45\); else if \(\delta_B(i,j)>2\); else if \(\delta_R(i,j)>30\); else if \(\delta_R(i,j)>12\) and \(\delta_P(i,j)>12\); else if \(\delta_P(i,j)>18\); else if \(\delta_G(i,j)>5\); else if \(\delta_L(i,j)>3\) and \(|R_i-R_j|\lt 15\); else if \(\delta_M(i,j)>90\); else if \(\delta_R(i,j)>15\); else if \(\delta_B(i,j)>0\); else if \(P_i\lt P_j\); else the comparison is a tie and must be resolved by an external rule. The paper’s Table 2 intuitions include “If one team has a much better RPI, choose that team,” “One top 50 win is negated by one 200+ loss,” and “If a decision has not been made yet, default to the team with better Pomeroy rank” [PAGE 5]. Units: \(R,P,M\) are ordinal ranks; \(B,G,L\) are counts; all thresholds are dimensionless rank/count differences. Assumptions: strict inequalities are intended; ordinal conversion is by year; missing values are absent; and the final Pomeroy tie is not defined in the paper.

The fourth operator is pairwise aggregation:
\[
T_i=\sum_{j\in C\setminus\{i\}}\mathbf{1}\{D(i,j)=i\},
\]
where \(C\) is the candidate bubble set and \(\mathbf{1}\) is the indicator function. The paper says “the stronger of the two teams ... was given one victory. Then, the teams with the most pair-wise victories were chosen for the tournament” [PAGE 4]. If \(m\) at-large berths are represented in \(C\), then
\[
\widehat S_y=\operatorname{Top}_m\{T_i:i\in C\}.
\]
The reported error is one false positive per year: “our method allowed one team into the tournament that did not actually make the tournament, but selected all the others correctly” [PAGE 6]. Formalized as symmetric difference \(E_y=|\widehat S_y\triangle A_y|\), the text supports \(E_y=1\) under the reading that no actual invitee was omitted. Singularity and breakdown regimes are explicit: exact equality at any threshold falls through because the tree uses strict inequalities; all-false comparisons require a Pomeroy tie-break; equal Pomeroy ranks are undefined; missing data break the predicate; non-transitive pairwise outcomes can create cycles; the candidate set excludes high-seeded teams, so the model is not a full-field selector; and the ordinal-by-year conversion prevents cross-year threshold comparability. The paper itself warns that adapting the tree to get every team right in one year “caused the other years to become significantly less accurate” [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s scientific lineage is the lineage of sports rating systems and interpretable ranking aggregation. RPI is a linear weighted composite of winning percentage, opponents’ winning percentage, and opponents’ opponents’ winning percentage [PAGE 2]. Pomeroy is a Pythagorean expectation built from adjusted offensive and defensive efficiency per 100 possessions [PAGE 2]. BPI and Sagarin are proprietary alternatives, but the paper reports high pairwise Spearman correlations: RPI–BPI \(0.967\), RPI–Pomeroy \(0.965\), RPI–Sagarin \(0.968\), BPI–Pomeroy \(0.991\), BPI–Sagarin \(0.994\), and Pomeroy–Sagarin \(0.994\) [PAGE 4, Table 1]. The paper therefore treats the ranking systems as near-redundant and chooses Pomeroy “for the sake of simplicity” [PAGE 3–4]. The decision tree is a retrocausal reconstruction: it is fit to 2012–2016 outcomes and then interpreted as a model of committee preference. That is not prospective theory; it is reverse-engineering from revealed selections. The paper admits the limit: “there was no single year where our method selected every team correctly” [PAGE 6], and “there seems to be some human factor involved that uses information outside the available numbers” [PAGE 6].

The multi-week traps are historical and procedural. First, the recency trap: the last 12 games are included because “the last 12 games is a statistic tracked and provided by ESPN” [PAGE 4], not because a 12-game window is theoretically privileged. A team’s conference tournament run can dominate this window, making a two-week hot streak look like a season-long property. Second, the public-statement trap: committee statements say RPI is considered but not determining [PAGE 2], yet top-50 wins, 200+ losses, and SOS are RPI-defined or RPI-linked. The paper later concludes that “despite the statements fo the committee that RPI is not heavily used for selection, it seems to be either very important or a very good indicator” [PAGE 7]. Third, the candidate-set trap: the model only evaluates at-large teams seeded ten or higher and NIT one- and two-seeds [PAGE 5]. High-seeded teams are assumed to be selected, so the tree is not tested on the full field. Fourth, the overfitting trap: the tree’s thresholds were selected by “experimenting with various combinations of factors” [PAGE 5], and adapting one year degraded other years [PAGE 6]. Fifth, the timing trap: Selection Sunday is the clock, but injury reports, coach availability, and late-returning players are available to the committee [PAGE 2] and are not in the tree. The historical lineage therefore supports a cautious reading: the paper recovers a plausible lexicographic rule, but the rule is a post hoc approximation whose stability across future multi-week windows is unproven.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The committee process is inherently recursive. Each member identifies 36 teams; “any team which at least all-but-two committee members select for inclusion will be added to the tournament” [PAGE 1]; remaining teams are filtered through ballots; and “the highest ranked teams are added to the tournament four at a time” [PAGE 1–2]. A member’s ballot is not a pure function of team quality; it depends on beliefs about other members’ ballots, public metrics, and the all-but-two threshold. The model’s decision tree is therefore a theory of the committee’s collective mind, not a direct measurement of each member’s utility function.

Crisis habit regression appears when uncertainty is high: under time pressure, the committee regresses to salient, publicly defensible heuristics. The paper’s tree places RPI early and repeatedly, and the authors observe that “RPI is highly distinguishing - it appears in two of the top three conditions” [PAGE 6]. The second condition, top-50 wins minus 200+ losses, is also RPI-defined [PAGE 2]. So the “crisis” behavior is not irrational: it is a low-variance habit that survives public scrutiny. The counter-trap is the model’s attempt to correct RPI’s weaknesses by adding Pomeroy, top-100 games, and last-12 form. That correction is only partial. Pomeroy is highly correlated with BPI and Sagarin [PAGE 4, Table 1], and RPI remains embedded in the early tree. The attempt to avoid RPI therefore becomes a counter-trap: the model adds sophistication but still returns to RPI-coded features as the first discriminator. The clock is the Selection Sunday timeline and the last-12 window. The last-12 condition is a recency heuristic: “If both teams have a similar RPI, pick the one that has done better in the past 12 games” [PAGE 5]. That is a clock effect, not a biomechanical law. The recursive theory-of-mind reading is that the committee anticipates public reaction and peer ballots, so its revealed rule should be lexicographic, thresholded, and partially RPI-anchored. The model captures that surface, but it cannot capture the members’ private beliefs about injuries, coach availability, or “eye test” information [PAGE 2, PAGE 6].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is valid because the paper’s own feature list is incomplete relative to the committee’s information set. The committee has access to “box scores, head-to-head results, results against common opponents, conference schedules, overall and non-conference strength of schedule, road record, injury reports, coach availability, and other tracked metrics” [PAGE 2]. The decision tree includes RPI, Pomeroy, top-50 wins, 200+ losses, SOS, top-100 games, and last-12 record [PAGE 4–5]; it does not include injury reports, coach availability, minutes, rest, travel, or player-level availability. The paper’s conclusion is explicit: “there seems to be some human factor involved that uses information outside the available numbers” [PAGE 6].

Formally, let \(X_i\) be the included vector and \(Z_i\) be the omitted physical/biomechanical/logistical vector. The model’s sufficiency assumption is
\[
\Pr(Y_i=1\mid X_i,Z_i)=\Pr(Y_i=1\mid X_i).
\]
A cross-layer veto exists if there are two teams with the same or near-same \(X\) but different \(Z\), and the committee’s selection \(Y\) flips because of \(Z\). The source supplies the admission that \(Z\) exists in the committee’s information set [PAGE 2] and that the model misses a human factor [PAGE 6]. Therefore the sufficiency assumption is not supported.

The physical layer is player availability and injury. A star player’s absence changes team strength, but the tree sees only last-12 wins and losses. The biomechanical layer is fatigue, minutes, rest, and travel load. The last-12 record is a performance proxy, not a load measurement. The weather layer is weaker for an indoor sport, but it is not zero: weather can disrupt travel, campus closures, and preparation. The correct adjudication is not that weather changes indoor shooting directly; it is that weather/logistics can alter the physical state and availability that the committee observes. Thus the cross-layer veto is proven by source-level omission, not by a new empirical claim: any selection whose rationale depends on injury, availability, fatigue, or travel is outside the tree’s conditional information set and can veto the tree’s prediction.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: threshold-equality audit. Re-run the 2012–2016 tree with every strict inequality changed to a weak inequality and with a deterministic tie-break by lower Pomeroy rank. Verifiable reward: for each year, compute \(E_y=|\widehat S_y\triangle A_y|\) against the published actual selections; also count the number of changed predicted selections. Prediction: at least one year changes its false-positive team or changes \(E_y\), because the tree is threshold-heavy and the paper does not specify equality behavior. If no year changes, the strictness of the thresholds is empirically immaterial; if years change, the tree is boundary-sensitive and the original strict-inequality convention is a hidden modeling choice. This vetoes any claim that the reported one-error result is robust to threshold coding.

Scenario 2: leave-one-year-out threshold selection. For each year \(y\in\{2012,\ldots,2016\}\), choose the tree’s thresholds using the other four years, then test on year \(y\). Verifiable reward: held-out \(E_y\) and the number of years with \(E_y\geq2\). Prediction: at least one held-out fold has \(E_y\) greater than the in-sample one-error result, because the paper’s tree was built by “experimenting with various combinations of factors” [PAGE 5] and because adapting one year made other years “significantly less accurate” [PAGE 6]. If every held-out fold still gives \(E_y=1\), the thresholds generalize better than the paper’s own warning suggests. If a fold gives \(E_y\geq2\), the one-error result is partly in-sample fit and the generalizability claim is vetoed.

Scenario 3: ranking-system swap. Replace Pomeroy with BPI and then with Sagarin in the final default and in the Pomeroy-threshold predicates, holding all else fixed. Verifiable reward: symmetric difference between the swapped model’s predicted set and the original Pomeroy model’s predicted set, plus \(E_y\) against actual selections. Prediction: because BPI–Pomeroy and Sagarin–Pomeroy correlations are \(0.991\) and \(0.994\) [PAGE 4, Table 1], the predicted set should change by at most one team per year in most years. If the swap produces larger changes, the decision tree is amplifying small rank differences through hard thresholds, and the claim that the ranking systems are near-redundant is vetoed at the decision-rule level even if the correlation is high. These three scenarios are verifiable by recomputation, require no private data beyond the published selections and rankings, and directly test the paper’s threshold, generalization, and ranking-redundancy assumptions.
</RLVR_COUNTERFACTUAL_VETOES>