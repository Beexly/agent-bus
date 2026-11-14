---
source: "2026 - WINSCORE revisited - A model-based evaluation of player performance in the NBA and EuroLeague - Carta, Favero.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Sports Analytics/2026"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4573
---

<NATIVE_REASONING>
The user wants a deep, multi-hop reasoning analysis of the provided source text (a paper about WINSCORE revisited). I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes about the source:
- The source is a reconstructed HTML/text extraction, not a PDF. Page numbers may not be explicitly visible in the text provided. I need to infer page numbers or cite sections carefully. The text says "PAGES: 12" but no explicit page markers are visible in the markdown. I should cite [PAGE N] where reasonable based on section flow, but since no page breaks are visible, I may need to estimate page distribution or note that page markers are absent from the extraction. However, the instruction says "When source pages are provided, cite exact [PAGE N] markers". The source text doesn't have explicit [PAGE N] markers. I should probably cite section numbers or note that the HTML extraction lacks page breaks. But to comply, I might assign approximate pages based on the 12-page structure: Abstract/Intro (~1-2), Related Lit (~2-3), Data Analysis (~3-4), Specification (~4-5), Validation (~5-7), Simulation (~6-7), Team to Players Season (~7-9), Single Game (~9-11), Conclusion (~11-12). I will use [PAGE N] estimates but be careful. Actually, better to say "the extraction lacks explicit page breaks; page references below are inferred from the 12-page layout" or just use section headers. But the user explicitly asked for exact [PAGE N] markers when source pages are provided. Since pages are provided as a count (12) but not markers, I'll infer page ranges based on typical academic paper layout and state that they are inferred.

Wait, I must not invent fake ratios or toy equations. I must use formal LaTeX equations from the text.

Let me plan each section:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive WINSCORE from possession accounting: EP ≈ AP.
- Equation (1): W = β0 + β1(PTS/EP - PTSA/AP) + u.
- Explain why this is nonlinear transformation avoiding collinearity.
- Multi-hop: EP formula includes 0.45*FTA + TOV - ORB. AP includes OTOV + DRB + TEAMR + OFG + 0.45*OFT.
- The 0.45 factor is a conventional box-score reconstruction for possessions (from literature, likely Oliver/Kubatko).
- Gray zones: 0.45 is conventional, not derived; TEAMR reconstructed; end-of-period possessions; single-game role misassignment; caliper ±10% arbitrary window width; aggregation identity (7) used as diagnostic but not enforced; measurement-oriented not causal; no ML benchmark.
- Stability claim vs universal structural invariance disclaimer.
- Word count target: 400+.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- List all equations (1) through (10) with LaTeX.
- Units: wins (count), win percentage (dimensionless [0,1]), efficiency differential (points per possession), minutes (seconds or minutes), statistics (counts).
- Page citations: infer pages.
- Breakdown of variables.
- Breakdown regimes: end-of-period possessions, low-minute extrapolation (MIN_j → 0), caliper window empty (N^Δ_j = 0 singularity), EuroLeague vs NBA slope difference.
- Exact singularity/breakdown regimes: when MIN_k window empty; when EP=0 (division by zero in efficiency ratio); when role has no comparable players.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Hollinger (2002), Oliver (2004), Berri & Eschker (2005), Berri et al. (2006), PIR (ACB 1991), Rosenbaum (2004) APM, Ilardi & Barzilai (2008), Kubatko et al. (2007), Sill (2010), Mizon & Richard (1986) encompassing, Petridis & Pelechrinis (2026) L-RAPM, Iatropoulos et al. (2025).
- Multi-week traps: stability across eras (1992-2005 vs 2021-25) is not universal structural invariance; cross-league stability not external validity; caliper matching is descriptive not causal; playing-time endogeneity persists.
- Word count not specified but should be substantive.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This is a more abstract section. Need to interpret "crisis habit regression" as teams/players reverting to naive metrics under pressure; "counter-trap" as the paper's structural correction; "clock" as possession accounting/season clock.
- Discuss how under crisis (contract negotiations, weekly MVP), stakeholders regress to PIR (equal weights) despite its flaws. Counter-trap: WINSCORE's endogenous weights and possession accounting. Clock: game clock, possession clock, season clock (82 vs 34 games), extrapolation over minutes.
- The caliper addresses the clock (minutes played) but introduces selection bias.
- Word count substantive.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- This is tricky for basketball. Physical layer: possession rules (jump ball, end of period), court time, fouls, blocks. Biomechanical: player movement, fatigue (but no fake ratios). Weather: indoor sport, minimal weather veto; travel, arena altitude, crowd noise as exogenous factors.
- Vetoes: end-of-period possessions break EP≈AP; injuries/substitutions break role assignment; single-game misassignment; referee foul calls (PF/FD endogeneity).
- No betting lines.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some evaluation framework. Need 3 scenarios where the model would be vetoed (fail verification).
- Scenario 1: Low-minute edge case explosion (MIN_j → 0, projection factor → ∞). Prediction: WINSCORE^B produces implausible outliers (e.g., -38.598 for 5.3 min). Veto: caliper must exclude or the metric is unverifiable.
- Scenario 2: Empty caliper window (N^Δ_j = 0). Prediction: OWINSEFF^{adj,M} undefined; metric cannot be computed. Veto: requires fallback.
- Scenario 3: EP = 0 or AP = 0 (team with no field goal attempts? Impossible in real game but possible in data errors or truncated samples). Prediction: division by zero in efficiency ratio; model breaks down.
- Or: Opponent adjustment in single-game relies on exact rank matching; if odd number of players or missing opponent, veto.
- Or: EuroLeague vs NBA competitive balance claim (higher variance in EuroLeague efficiency) could be vetoed if variance is driven by fewer games (34 vs 82) and smaller sample noise.
- Each needs verifiable condition + prediction.

Word count total >= 1000 words across sections. THINK_TRACE alone >=400.

Let's draft carefully.

I need to avoid betting lines entirely. No mentions of spreads, odds, moneylines, totals.

No toy equations. Use only equations from source.

Citations: I'll use [PAGE N] inferred. Since the text is continuous, I'll approximate:
- Abstract/Intro: [PAGE 1-2]
- Related Literature: [PAGE 2-3]
- Section 3: [PAGE 3-4]
- Section 4.1/Table 1: [PAGE 4-5]
- Section 4.2/Table 2-4: [PAGE 5-6]
- Section 4.3/Table 5: [PAGE 6-7]
- Section 4.4: [PAGE 7]
- Section 5: [PAGE 7-9]
- Section 6/Table 8: [PAGE 9-11]
- Section 7-8: [PAGE 11-12]

I should note these are inferred due to lack of explicit page breaks in the HTML extraction.

Let's write.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I must ensure total word count >= 1000. Let's aim for ~150-200 words per section except THINK_TRACE which is 400+. Actually THINK_TRACE needs >=400. Others can be ~150-200 each. Total will exceed 1000 easily.

Let's begin drafting content.

THINK_TRACE content:
Start with the structural derivation. The paper defines EP and AP. EP = FGA + 0.45 FTA + TOV - ORB. AP = OTOV + DRB + TEAMR + OFG + 0.45 OFT. The restriction EP ≈ AP is accounting, not behavioral. The stochastic equation (1) links win differential to efficiency differential. The key nonlinear transformation: PTS/EP and PTSA/AP collapse 13+ box-score stats into two ratios. This avoids the collinearity trap of unrestricted regression where ORB appears negatively correlated with wins because it proxies for missed FGs.

Multi-hop: Because β1 multiplies the difference of two ratios, the marginal value of a made 3-pointer is not fixed; it raises PTS (numerator) and EP (denominator via FGA). Thus the weight is endogenous and context-dependent. Simulation in Table 5 derives weights by perturbing one statistic while holding others at averages, capturing feedbacks (e.g., made 3 costs a possession). This is distinct from PIR's fixed unit weights.

Gray-zone audit: (1) The 0.45 FTA coefficient is a conventional reconstruction from box-score literature, not estimated here; if the true free-throw possession cost differs, EP/AP accounting drifts. (2) TEAMR is reconstructed, not observed, introducing measurement error absorbed into u_it. (3) End-of-period possessions cause EP ≠ AP; the authors claim these average out at season level (Appendix B.1), but single-game applications inherit residual mismatch. (4) The ±10% caliper window is arbitrary in width though not in principle; if N_j^Δ is empty, OWINSEFF^{adj,M} is undefined (singularity). (5) Playing-time endogeneity is acknowledged but not causally identified; the caliper is a matching heuristic, not an instrument. (6) The encompassing tests show WINSCORE subsumes PIR in-sample, but the paper explicitly disclaims universal structural invariance and does not benchmark against ML/tracking models. (7) Aggregation identity Σ WINSCORE ≈ team wins is used diagnostically; the Berri-type version systematically over-predicts because low-minute edge cases contaminate role benchmarks (e.g., guard mean flips from -0.506 to +0.039).

I need to hit 400 words. I'll expand on each.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations:
(1) W_it = β0 + β1( PTS_it/EP_it - PTSA_it/AP_it ) + u_it, u ~ N.I.D(0, σ²). Units: W in wins (count), efficiency diff in points per possession (pts/poss), β1 in wins per (pts/poss).
EP = FGA + 0.45·FTA + TOV - ORB. Units: possessions (count).
AP = OTOV + DRB + TEAMR + OFG + 0.45·OFT.
EP ≈ AP (possession accounting restriction).
Table 1 slopes: NBA 1994-2005 β1=257.16 (wins scale), NBA 2021-24 β1=237.38, EuroLeague β1=78.46. For win % scale: 3.13, 2.89, 2.30 (win % per pts/poss).
Intercepts: ~n/2.
Equation (3) encompassing: W = δ1 Ŵ^WS + δ2 Ŵ^PIR + ε.
Table 4 coefficients.
Equation (4) linearized: W^WS = n/2 + WINSEFF - OWINSEFF.
Equation (5)-(6) Berri player measure.
Equation (8)-(9) caliper.
Equation (10) single-game.
Table 5 weights: e.g., 3PM +0.054 wins (NBA 2021-24), missed FG -0.032, ORB +0.032, etc.
Page citations: inferred.
Breakdown regimes: EP=0 division by zero; MIN_j→0 projection factor →∞; caliper window empty; role misassignment in single-game; EuroLeague 34-game season vs NBA 82-game season changes intercept scaling.

RETROCAUSAL_GENEALOGY:
Lineage: PIR (ACB 1991) → Berri & Eschker (2005), Berri et al. (2006) WINSCORE → Oliver (2004) Four Factors/possession → Hollinger (2002) → regression/APM strand (Rosenbaum 2004; Ilardi & Barzilai 2008; Kubatko et al. 2007; Sill 2010) → encompassing (Mizon & Richard 1986) → modern L-RAPM (Petridis & Pelechrinis 2026) and box-score plus-minus (OBPM/DBPM/BPM/VORP). Multi-week traps: stability across 1992-2005 and 2021-25 NBA plus EuroLeague is not universal invariance; league-specific parameters; competitive balance inference (EuroLeague slope smaller due to higher efficiency variance) could reverse with larger samples; single-game role reclassification (BC/FC) may misassign under tactical flexibility; caliper matching depends on stable role definitions across weeks.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure (contract talks, weekly MVP, playoff seeding), stakeholders revert to PIR because it is simple, absolute, and familiar. This is a habit regression to an incoherent weighting scheme. Counter-trap: WINSCORE's endogenous simulation weights and opponent-adjusted benchmarks are the structural escape, but they require disciplined data pipelines and resist the urge to overlay PIR-style narrative weights. Clock: possession clock (24s), game clock, season clock (82 vs 34 games) govern extrapolation; MIN_j/TOTMIN_j anchors wins to court time. The caliper matches on realized court time, treating minutes as an observable determinant of opportunity. However, the clock also creates the endogeneity trap: coaches allocate minutes based on unobserved ability, so low-minute players are selected on the dependent variable. Recursive theory of mind: coaches anticipate analyst metrics, adjust rotations, which changes the very minutes the metric uses to benchmark players—an unmodeled feedback loop.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: possession boundaries defined by rules (jump ball, end of period, made basket with defensive rebound). End-of-period possessions violate EP≈AP; the model assumes they average out at season level but not necessarily within a single game or a coach's stint. Biomechanical layer: fatigue and substitution patterns affect MIN_j; no fake fatigue ratio is invented. The model treats minutes as exogenous to the box-score statistic conditional on role, but minutes are biomechanically constrained (player cannot play >48 mins regulation, >5 overtime). Weather layer: indoor sport, no direct weather veto; indirect effects via travel, arena altitude, crowd noise, and referee tendencies (home-court PF/FD differentials) enter through PF and FD endogeneity. Veto proof: if PF and FD are referee-influenced and correlated with home advantage, the opponent-adjusted WINSEFF absorbs venue effects imperfectly. Single-game role reclassification (BC/FC) vetoes if injuries force unconventional lineups (e.g., small-ball center playing FC against traditional BC), breaking rank matching.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable veto scenarios + predictions.
Scenario 1: Low-minute singularity. Condition: player j with MIN_j ≤ 5 minutes records one scoring event (e.g., 3PM). Standard Berri projection scales by 1/MIN_j, yielding WINSEFF explosion (as in Querejeta, 5.3 min → -38.598). Verifiable: recompute WINSCORE^B for all players ≤10 min; if |WINSCORE| > 10 wins for any such player, veto. Prediction: without caliper, role benchmarks are contaminated and aggregate identity (7) fails (e.g., BER 5 actual vs 15.5 predicted).
Scenario 2: Empty caliper window. Condition: N_j^Δ = 0 because no same-role player has minutes within [0.9 MIN_j, 1.1 MIN_j] (rare minutes totals, e.g., 7 minutes in a league where role minutes cluster at 20 or 30). Verifiable: count players with empty windows; if >0, OWINSEFF^{adj,M} undefined. Prediction: metric is not computable for those players; requires fallback to global role mean or exclusion.
Scenario 3: EP = 0 or AP = 0 in a team-game observation. Condition: a team records zero FGA, zero FTA, zero TOV, zero ORB (impossible in completed basketball but possible in data truncation or forfeit/withdrawal records). Verifiable: scan team-game file for EP=0. Prediction: division by zero in PTS/EP; β1 unidentified for that observation; model breakdown. Alternative soft veto: if EP or AP < 1 (e.g., only one possession due to end-of-period quirks), efficiency ratio has extreme variance and β1 standard errors explode.

Make sure no betting lines. Check: no spread, total, moneyline, odds.

Now, word count. Let's write fully.

I'll be careful with [PAGE N] markers. Since none are visible, I'll state "page references are inferred from the 12-page layout because the HTML extraction contains no explicit page breaks" in the source section, then use [PAGE N].

Let's draft each section with enough length.

THINK_TRACE: I'll write around 500 words.

SOURCE_OPERATORS_AND_EQUATIONS: around 250-300 words with LaTeX.

RETROCAUSAL_GENEALOGY: around 200 words.

RECURSIVE_THEORY_OF_MIND: around 200 words.

CROSS_LAYER_VETO_ADJUDICATION: around 200 words.

RLVR_COUNTERFACTUAL_VETOES: around 200 words.

Total > 1000.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation begins with the possession-accounting restriction, which the authors treat not as a behavioral hypothesis but as a mechanical implication of basketball rules. Employed possessions for team i at time t are defined as EP_{i,t} = FGA_{i,t} + 0.45·FTA_{i,t} + TOV_{i,t} − ORB_{i,t}, while acquired possessions are AP_{i,t} = OTOV_{i,t} + DRB_{i,t} + TEAMR_{i,t} + OFG_{i,t} + 0.45·OFT_{i,t}. The near-equality EP_{i,t} ≈ AP_{i,t} therefore collapses the box-score identity into a possession balance. The stochastic equation (1), W_{i,t} = β_0 + β_1( PTS_{i,t}/EP_{i,t} − PTSA_{i,t}/AP_{i,t} ) + u_{i,t}, with u_{i,t} ∼ N.I.D(0, σ²), is the only equation carrying free parameters. β_0 scales to n/2 (expected wins for an average team over n games) and β_1 translates the efficiency differential into wins.

The critical multi-hop inference is that the model avoids unrestricted regression collinearity by mapping dozens of correlated box-score statistics through two nonlinear efficiency ratios before estimation. Because a made three-point field goal simultaneously raises PTS (numerator) and consumes a possession via FGA inside EP (denominator), its marginal contribution is not a fixed constant; it is endogenous to the efficiency differential. This directly refutes PIR’s equal-weight logic: a missed field goal and a missed free throw are not equivalent because their opportunity costs in possessions differ, and offensive rebounds appear negatively correlated with wins in naive regressions only because they proxy for missed field goals. The authors’ simulation procedure in Section 4.3 attributes weights by perturbing one statistic while holding others at their averages, thereby capturing feedback effects (e.g., one more three-point made gives three points at the cost of employing a possession).

Gray-zone audit. First, the 0.45 free-throw possession coefficient is a conventional box-score reconstruction imported from prior literature, not estimated within this paper; if the true value deviates, the EP/AP restriction drifts and measurement error enters u_{i,t}. Second, TEAMR is reconstructed rather than observed, so season-level averaging is required for the discrepancy to wash out (Appendix B.1); single-game applications inherit residual mismatch. Third, end-of-period possessions break EP ≈ AP locally; the authors claim these average out at season level but do not prove within-game invariance. Fourth, the playing-time caliper imposes a ±10% window around MIN_j; this width is arbitrary in practice even if the matching principle is not, and an empty window N_j^Δ = 0 renders OWINSEFF^{adj,M} undefined. Fifth, playing-time endogeneity is acknowledged but not causally identified: coaches allocate minutes based on unobserved ability, so low-minute players are selected on the dependent variable, and the caliper is a matching heuristic, not an instrument. Sixth, the encompassing tests show WINSCORE subsumes PIR within the sampled leagues and eras, yet the paper explicitly disclaims universal structural invariance and declines any machine-learning or tracking-data benchmark. Seventh, the aggregation identity Σ_j WINSCORE_{j,i} ≈ team wins_i is used diagnostically; the Berri-type aggregation systematically over-predicts because low-minute edge cases contaminate role benchmarks (the 2024–25 EuroLeague guard mean flips from −0.506 to +0.039 once edge cases are removed). These gray zones confine the model to a measurement-oriented, descriptive interpretation rather than a causal structural claim.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations, with page references inferred from the 12-page layout (the HTML extraction contains no explicit page breaks; [PAGE N] denotes approximate location).

Possession accounting (Section 4.1, [PAGE 4]):
EP_{i,t} = FGA_{i,t} + 0.45·FTA_{i,t} + TOV_{i,t} − ORB_{i,t}
AP_{i,t} = OTOV_{i,t} + DRB_{i,t} + TEAMR_{i,t} + OFG_{i,t} + 0.45·OFT_{i,t}
EP_{i,t} ≈ AP_{i,t}
Units: all terms are count statistics summed to possessions (dimensionless possession count). The 0.45 coefficient is a conventional free-throw possession conversion, not an estimated parameter here.

Stochastic team-win equation (Section 4.1, Eq. 1, [PAGE 4]):
W_{i,t} = β_0 + β_1( PTS_{i,t}/EP_{i,t} − PTSA_{i,t}/AP_{i,t} ) + u_{i,t}, u_{i,t} ∼ N.I.D(0, σ²)
Units: W in wins (count); PTS/EP and PTSA/AP in points per possession (pts·poss⁻¹); β_1 in wins per (pts·poss⁻¹); β_0 in wins, expected ≈ n/2.

Encompassing regression (Section 4.2, Eq. 3, [PAGE 5]):
W_{i,t} = δ_1 Ŵ^{WS}_{i,t} + δ_2 Ŵ^{PIR}_{i,t} + ε_{i,t}
Results (Table 4, [PAGE 5]): WINSCORE coefficients 0.92 / 0.77 / 1.08 (NS NBA, 2021–24, EuroLeague), not statistically different from one; PIR coefficients 0.08 / 0.23 / −0.08, not statistically different from zero; joint hypothesis δ_1 = 1, δ_2 = 0 never rejected.

Linearized player interpretation (Section 4.4, Eq. 4, [PAGE 6]):
W^{WS}_{i,t} = n/2 + WINSEFF_{i,t} − OWINSEFF_{i,t}
WINSEFF_{i,t} = SCSTAT_{i,t} + POSSTAT_{i,t} + PFBLKA_{i,t}
with SCSTAT, POSSTAT, PFBLKA defined via weights w from Table 5 ([PAGE 6]). Units: simulated impact in wins per event.

Table 5 weights (NBA 2021–24, [PAGE 6]): 3PM +0.054; 2PM +0.025; FT +0.015; missed FG −0.032; missed FT −0.014; ORB +0.032; DRB +0.032; TOV −0.032; STL +0.032; PF −0.014; BLK +0.015; AST +0.020. EuroLeague values scale by possession-variance differences (slope 78.46 vs 237.38 for NBA in wins regression, Table 1 [PAGE 4]).

Berri-type player measure (Section 5, Eqs. 5–6, [PAGE 7–8]):
WINSCORE^{B}_j = WINSEFF_j − OWINSEFF^{adj,B}_j + (MIN_j/TOTMIN_j)·(0.5·G/5)
OWINSEFF^{adj,B}_j = (1/N_role(j) Σ_{k∈role(j)} WINSEFF_k · TOTMIN_k/MIN_k) · (MIN_j/TOTMIN_j)
Aggregation identity (Eq. 7): Σ_j WINSCORE^{B}_{j,i} ≈ team wins_i. Units: wins; MIN in minutes played; G = season games (82 NBA, 34 EuroLeague).

Caliper correction (Section 5, Eqs. 8–9, [PAGE 8]):
WINSCORE^{M}_j = WINSEFF_j − OWINSEFF^{adj,M}_j + (MIN_j/TOTMIN_j)·(0.5·G/5)
OWINSEFF^{adj,M}_j = (1/N_j^Δ) Σ_{k∈role(j), MIN_k ∈ [0.9·MIN_j, 1.1·MIN_j]} WINSEFF_k

Single-game measure (Section 6, Eq. 10, [PAGE 9–10]):
WINSCORE^{r}_{j,1} = WINSEFF^{r}_{j,1} − WINSEFF^{r}_{j,2}(MIN^{r}_{j,1}/MIN^{r}_{j,2}) + (MIN^{r}_{j,1}/TOTMIN^{r}_{j,1})·(0.5/5)

Breakdown / singularity regimes: (i) EP_{i,t} = 0 or AP_{i,t} = 0 makes the efficiency ratio undefined (division by zero); (ii) MIN_j → 0 makes the projection factor (MIN_j/TOTMIN_j)^{-1} mechanically explode, generating extreme projected WINSEFF (e.g., Querejeta, 5.3 min → −38.598 in Table 6c [PAGE 8]); (iii) N_j^Δ = 0 makes the caliper mean undefined; (iv) end-of-period possessions locally violate EP ≈ AP, so single-game or short-window efficiency estimates inherit residual mismatch; (v) EuroLeague’s 34-game season vs NBA’s 82-game season changes intercept scaling and standard errors, so slope comparisons (Table 1) are conditional on season length.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper situates WINSCORE inside a multi-decade genealogy of basketball measurement. The Performance Index Rating (PIR) originates in the Spanish ACB League in 1991 and was adopted by the EuroLeague as its weekly MVP criterion, embedding equal unit weights into contract negotiations and public discourse (Wen et al. 2023, cited [PAGE 3]). Berri and Eschker (2005) and Berri et al. (2006) introduced WINSCORE as a possession-based alternative, but the authors note its interpretation remained operational rather than explicitly model-based ([PAGE 2]). Oliver (2004) established possessions as the fundamental unit and the Four Factors; Hollinger (2002) contributed early efficiency concepts. The regression strand includes Rosenbaum (2004) adjusted plus-minus, Ilardi and Barzilai (2008), Kubatko et al. (2007), and Sill (2010) regularization, with modern descendants Iatropoulos et al. (2025) and Petridis and Pelechrinis (2026) L-RAPM ([PAGE 2]). The encompassing-test methodology draws on Mizon and Richard (1986) ([PAGE 5]).

Multi-week traps. The stability claim across the 1992–2005 NBA sample, the post-COVID 2021–24 NBA sample, and the 2022–25 EuroLeague sample is explicitly framed as robustness within available data, not universal structural invariance ([PAGE 1]). The EuroLeague slope is significantly smaller (Chow-type test, Appendix B.2), which the authors attribute to higher variance of the efficiency measure and interpret as greater NBA competitive balance (Zimbalist 2002); this inference could reverse with longer panels or different variance decompositions. The single-game role reclassification into back-court/front-court is designed to avoid season-long positional misassignment, but tactical flexibility and injuries can still force unconventional matchups that break the rank-matching logic ([PAGE 9–10]). The caliper matching window assumes role and minutes are sufficient observables for opportunity, ignoring roster construction, coaching philosophy, and opponent-specific game plans that vary week to week. Consequently, historical stability across leagues and eras does not license extrapolation to other competitions, cups, or women’s basketball without re-estimation, as the authors’ own future-work agenda acknowledges ([PAGE 11–12]).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of coaches, agents, and media to revert to PIR under decision pressure—contract negotiations, weekly MVP awards, and playoff seeding—because PIR is absolute, simple, and requires no opponent or playing-time context. This is a regression to an incoherent weighting scheme: missed field goals and missed free throws receive identical unit weights despite different possession opportunity costs, and offensive rebounds enter with the same sign as defensive rebounds even though they correlate with missed shots ([PAGE 3]).

The counter-trap is WINSCORE’s structural reframing: weights are derived endogenously by simulation rather than imposed a priori, and player value is computed relative to an opponent-adjusted, role-matched benchmark rather than as an absolute tally. However, the counter-trap is only stable if analysts resist the temptation to overlay narrative weights onto the simulated coefficients. The single-game illustration shows PIR and WINSCORE can diverge sharply—Parra holds Barcelona’s fourth-highest PIR but its lowest WINSCORE because his head-to-head opponent Diouf outperformed him ([PAGE 10])—which is precisely the kind of counter-intuitive output that invites manual override under crisis conditions.

The clock operates at three layers. The possession clock (24 seconds) defines the unit of analysis; the game clock determines TOTMIN per team per game; the season clock (82 NBA games vs 34 EuroLeague games) scales the intercept β_0 to n/2 and governs the MIN_j/TOTMIN_j extrapolation factor. The caliper matches players on realized court time, treating minutes as an observable proxy for coaching opportunity. Yet minutes are endogenously allocated by coaches who observe unobserved ability, injury risk, and matchup fit. This creates a recursive theory-of-mind problem: if coaches anticipate that analysts will benchmark players using caliper-matched WINSCORE, they may adjust rotations to game the metric (e.g., shielding low-minute players from tough opponents or inflating minutes for contract reasons), which changes the very conditioning set the metric relies upon. The paper explicitly disclaims causal identification and limits itself to measurement-oriented description ([PAGE 7], [PAGE 11]), but the recursive loop remains unmodeled.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. Possession boundaries are defined by basketball rules: a possession ends on turnover, made field goal, free-throw sequence completion, or defensive rebound; an offensive rebound starts a new play but not a new possession. End-of-period possessions violate EP_{i,t} ≈ AP_{i,t} locally because the ball may be dead when the period expires. The authors assert these discrepancies average out at season level (Appendix B.1), but no within-game veto condition is provided, so single-game efficiency ratios can be biased by end-of-quarter shot selection and clock management.

Biomechanical layer. No fatigue ratio or biomechanical state variable is introduced; doing so would violate the zero toy-equation invariant. Minutes played (MIN_j) act as a mechanical constraint: a player cannot exceed 48 regulation minutes plus overtime, and substitution patterns are bounded by roster size and foul trouble. Low-minute players are biomechanically feasible but strategically selected; the projection factor 1/MIN_j explodes as minutes approach zero, generating the edge-case outliers in Table 6c ([PAGE 8]).

Weather layer. Basketball is indoor, so direct weather vetoes (wind, precipitation, temperature) do not apply. Indirect environmental vetoes include arena altitude, travel fatigue, crowd noise, and referee tendencies that influence personal fouls (PF) and fouls drawn (FD). Because PF and FD enter the opponent-adjusted WINSEFF auxiliary terms (w_{PF}·(PF − FD)), venue-correlated officiating differentials can contaminate the opponent adjustment without being explicitly modeled. Home-court PF/FD asymmetry is therefore a latent veto on cross-venue comparability.

Veto adjudication. The model passes physical-layer vetoes only at season aggregation; single-game EP/AP mismatches are a conditional fail. It passes biomechanical vetoes only if low-minute players are excluded or caliper-matched; raw extrapolation fails. It passes weather vetoes trivially (indoor sport) but fails indirect officiating vetoes unless PF/FD endogeneity is addressed. No betting lines, spreads, or odds are invoked anywhere.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) veto scenarios with counterfactual predictions:

Scenario 1 — Low-minute projection singularity. Verifiable condition: recompute WINSCORE^{B} for every player with MIN_j ≤ 10 minutes in the 2024–25 EuroLeague file; flag any player whose absolute projected WINSEFF exceeds 5 wins. Counterfactual prediction: the veto triggers (e.g., Querejeta at 5.3 minutes yields −38.598 in Table 6c [PAGE 8]), and the role-level benchmark mean is biased; without the caliper correction, Σ WINSCORE^{B} systematically over-predicts team wins (BER: 5 actual vs 15.5 predicted; TEL: 11 actual vs 28.0 predicted in Table 7 [PAGE 8–9]).

Scenario 2 — Empty caliper window. Verifiable condition: for each player j, count same-role peers k with MIN_k ∈ [0.9·MIN_j, 1.1·MIN_j]; flag players with N_j^Δ = 0. Counterfactual prediction: OWINSEFF^{adj,M}_j is undefined (division by zero in Eq. 9 [PAGE 8]); the metric cannot be computed for those players, requiring either fallback to the global role mean or explicit exclusion. The veto triggers for rare minute totals (e.g., a guard with 7 minutes when all other guards cluster at 20–30 minutes).

Scenario 3 — Zero-denominator possession observation. Verifiable condition: scan the team-game panel for EP_{i,t} = 0 or AP_{i,t} = 0 (no field-goal attempts, free throws, turnovers, or offensive rebounds in a recorded game). Counterfactual prediction: PTS/EP or PTSA/AP involves division by zero, β_1 is unidentified for that observation, and the stochastic equation (1) breaks down ([PAGE 4]). A soft variant triggers when EP or AP < 1 (e.g., a single end-of-period possession), where the efficiency ratio exhibits extreme variance and β_1 standard errors explode, invalidating inference for that game.
</RLVR_COUNTERFACTUAL_VETOES>