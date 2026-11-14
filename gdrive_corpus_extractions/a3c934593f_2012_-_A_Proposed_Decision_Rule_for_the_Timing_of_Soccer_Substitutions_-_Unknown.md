---
source: "2012 - A Proposed Decision Rule for the Timing of Soccer Substitutions - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 24
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6621
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided PDF (Myers 2011/2012 "A Proposed Decision Rule for the Timing of Soccer Substitutions"). I need to produce output with exact XML sections:

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
- >= 1,000-word depth across sections.

Let me plan content carefully.

THINK_TRACE (>=400 words): Multi-hop derivation.
- Data: training n=485 observations (155 EPL, 172 Serie A, 158 La Liga) [PAGE 5]. Variables: goal differential before/after each sub, home/away, timing. No formation. No attack/defend distinction [PAGE 6].
- Exploratory: Table 1 means: sub1 mean 56.38 median 59 mode 45 stdev 15.6 N=484; sub2 mean 70.23 median 71 mode 70 stdev 11.75 N=464; sub3 mean 80.58 median 82 mode 90 stdev 8.22 N=403 [PAGE 6]. Histogram Figure 1 [PAGE 7]. Figure 2: majority use 3 subs [PAGE 8].
- Table 2: performance according to # subs [PAGE 8]: Down: 3 subs 24.20% N=123 vs <2 subs 9.52% N=21. Tied: 3 subs 72.85% N=151 vs <2 subs 61.11% N=18. Note small sample for <2 subs.
- Hypothesis tests: independent substitutions between games, minimal correlation within game [PAGE 8]. H1: timing varies by score position. ANOVA Table 3 [PAGE 9]: Down sub1 avg 53.69, tied 51.07, up 59.61 p=9.09E-06; sub2 down 64.65 tied 68.21 up 73.44 p=1.28E-10; sub3 down 76.87 tied 80.19 up 84.06 p=4.10E-14. Interpretation: hold subs later when ahead, earlier when tied/behind.
- H2: home/away. Table 4 [PAGE 10]: sub1 away 53.8 home 55.27 p=0.341; sub2 away 68.09 home 69.61 p=0.182; sub3 away 79.79 home 81.33 p=0.06.
- H3: league type. Table 5 [PAGE 10]: first sub English 57.77 Italian 52.06 Spanish 55.07 p=0.011; second p=0.657; third p=0.275.
- Data mining: SAS Enterprise Miner decision tree. Training 485 obs. Binary improvement variable defined differently by state: behind -> increase score state; tied -> goal differential (positive win, zero tie, negative loss); ahead -> binary win preserved [PAGE 11].
- Table 6 decision tree splits [PAGE 12]: if down: sub1 split 57.5, avg target below 0.41 above 0.18 p=0.052; sub2 split 72.5, below 0.30 above 0.06 p=0.057; sub3 split 78.5, below 0.24 above 0.07 p=0.134. Translation: before 58th minute improvement 41% vs 18%; before 73rd 30% vs 6%; before 79th 24% vs 7%. No minimum point identified; recommend waiting until halftime though no statistical evidence [PAGE 12].
- No significant splits for tied or ahead -> timing less critical when not behind [PAGE 12].
- Proposed rule Figure 3 [PAGE 13]: behind approaching 58th make at least 1st sub; behind approaching 73rd make at least 2nd; if equalize/go ahead by critical point, 2nd can be withheld; if return to behind before 79th, use both 2nd and 3rd prior to 79th; if fall behind after 80th no specific recommendation [PAGE 13-14].
- Instance definition [PAGE 13]: opportunity where team falls behind and can apply rule prior to at least one of three critical points. Max two instances per game.
- Validation sample: 1284 instances from EPL, La Liga, Serie A, Bundesliga, MLS, World Cup 2010 [PAGE 14]. Duplication in training/test but "enough to jeopardize" — likely typo meaning "not enough to jeopardize"? Text: "There is some duplication in the training data and test data, but enough to jeopardize the validity of the study." Hmm verbatim says "but enough to jeopardize" which seems odd; probably meant "not enough." I should cite verbatim and flag gray zone.
- Success definition: improve goal differential from first moment sub adheres to rule to end of match [PAGE 14]. Discard first-half injury subs, red cards [PAGE 14]. Failure: hold at least one substitute after at least one critical moment; success if goal differential improved from beginning of earliest critical moment bypassed to end [PAGE 14].
- Table 7 [PAGE 15]: rule followed: 186 successes, 254 failures, 440 instances, success rate 42.27%. No rule: 173 successes, 670 failures, 843 instances, rate 20.52%. Total 1283 (rounding from 1284). 95% CI: rule 38%-47%, no rule 17%-24%. Participation rate 34.29% [PAGE 15].
- Table 8 by league [PAGE 15-16]: Serie A 52.50% w/rule vs 17.83% w/o, participation 38.28%; World Cup 45.45% vs 14.29%, participation 44.00%; Bundesliga 43.28% vs 25.00%, participation 27.54%; EPL 40.00% vs 21.59%, participation 23.81%; MLS 36.36% vs 19.35%, participation 41.51%; La Liga 32.35% vs 21.13%, participation 32.38%. All statistically better [PAGE 16].
- Appendices team-level: Mourinho Inter 7 instances, 85.71% participation, 83.33% success; Juventus Ferrara 11 instances 18.18% participation, 50% success w/ rule, 11.11% w/o [PAGE 16]. Bayern Van Gaal 8 instances 62.50% participation 80% success; Dortmund Klopp 9 instances 22.22% participation, 100% success w/ rule (2/2) but 0/7 w/o [PAGE 16-17]. Liverpool Benitez 9 instances 11.11% participation, 1/1 success w/ rule, 0/8 w/o [PAGE 17]. Portsmouth Grant 21 instances 19.05% participation, 50% w/ rule (2/4), 17.65% w/o (3/17) [PAGE 17]. Tenerife Arcanada 16 instances 0% participation, 12.50% success, relegated [PAGE 18].
- Gray zones: small N for <2 subs in Table 2 (N=21 down, N=18 tied) [PAGE 8]; p-values for decision tree splits marginal (0.052, 0.057, 0.134) [PAGE 12]; no minimum point [PAGE 12]; test/train duplication ambiguous [PAGE 14]; no re-entry rule; fatigue unmeasured directly; no formation variable [PAGE 5]; no attack/defend sub distinction [PAGE 6]; single binary improvement definition conflates goals and points?; no confidence intervals for individual league rates in Table 8 beyond claim "statistically better"; survivorship bias in team-level narratives (managers sacked vs kept confounded by many factors).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Need equations.
Let:
- Let G_t^{(k)} be goal differential (goals for minus goals against) for the focal team immediately before substitution k, k∈{1,2,3}.
- Let τ_k ∈ [0,90] be match minute of substitution k.
- Score state s ∈ {D,T,A} = {down, tied, ahead}, where D: G<0, T: G=0, A: G>0 relative to opponent.
- Improvement indicator I_k: if s=D, I_k=1 iff G_{end} > G_{before sub k} (strict increase in differential); if s=T, I_k=1 iff G_{end}>0, 0 if G_end=0 (preserve tie), -? binary so maybe I_k=1 iff win; they said positive = win, zero = preserved tie, negative = loss but target variable is goal differential; for binary maybe improvement = positive? Need to be careful. Text: "When a team is tied, the target variable is goal differential. Positive goal differential indicates that a team was able to win as a result of a substitution; zero goal differential indicates that they preserved a tie, and negative goal differential indicates that team ends with a loss after a substitution." So target is goal differential, not binary. But decision tree avg target is proportion? Table 6 avg target 0.31 etc. So they likely converted to binary improvement. I'll formalize as they describe but note the mapping.
- If s=A, I_k=1 iff win preserved (G_end>0), 0 if tie or loss.
- Decision rule R: if s=D and τ_1<58 then sub1; if still D and τ_2<73 then sub2; if D returns before τ_3<79 then sub2 and sub3 before 79.
- Empirical success probability: \hat{p}_R = 186/440 = 0.4227, \hat{p}_{\neg R} = 173/843 ≈ 0.2052. Difference Δ = 0.2175 (21.75 percentage points). Relative improvement: \hat{p}_R/\hat{p}_{\neg R} ≈ 2.06.
- Confidence interval via Wald: \hat{p} ± z_{0.975}\sqrt{\hat{p}(1-\hat{p})/n}. For rule: 0.4227 ± 1.96√(0.4227·0.5773/440) = 0.4227 ± 1.96√(0.000555) = 0.4227 ± 1.96·0.02356 = 0.4227 ± 0.0462 → [0.3765, 0.4689] ≈ [38%,47%] matches text [PAGE 15]. For no rule: 0.2052 ± 1.96√(0.2052·0.7948/843) = 0.2052 ± 1.96√(0.0001934)=0.2052 ± 1.96·0.01391=0.2052 ± 0.0273 → [0.1779,0.2325] ≈ [18%,23%] but text says 17%-24%; close (maybe exact/Clopper-Pearson). I can present formula and note approximation matches reported CI.
- ANOVA F-statistic not given; only p-values. Table 3 means and p-values [PAGE 9].
- Table 6 conditional probabilities: P(I=1|τ_1<58, D)=0.41, P(I=1|τ_1≥58, D)=0.18; P(I=1|τ_2<73,D)=0.30, P(I=1|τ_2≥73,D)=0.06; P(I=1|τ_3<79,D)=0.24, P(I=1|τ_3≥79,D)=0.07. p-values 0.052, 0.057, 0.134 — note third not significant at α=0.05.
- Units: minutes (min), dimensionless proportions, counts N. No betting odds.
- Breakdown/singularity regimes: τ≥90 capped (injury time charted as 90) [PAGE 7]; first-half subs mostly injury/red card [PAGE 7,12]; red cards and first-half injuries discarded [PAGE 14]; if behind after 80th minute no recommendation [PAGE 14]; tied/ahead no significant splits -> rule not applicable [PAGE 12]; small sample <2 subs [PAGE 8]; p-values marginal for split 1 and 2, non-significant for split 3 [PAGE 12].

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Hirotsu & Wright (2002) dynamic programming / Markov process model for optimal timing of substitution/tactical decisions, EPL data, variables home/away, time remaining, formation [PAGE 4]. Hirotsu et al. (2009) game theory non-zero-sum game, formation changes based on home/away, time, goal differential, opponent formation [PAGE 4]. Corral et al. (2007) survival analysis Spanish league 2004-2005: first sub timing based on goal differential; behind sub earlier; defensive subs later, offensive earlier [PAGE 4-5]. Myers extends by focusing solely on timing, decision trees, practical rule, validation across competitions.
- Davenport (2007) / Competing on Analytics: Pedro Martinez pitch count 2003 ALCS, performance drop after 7 innings/105 pitches, opposing BA .231 (91-105) vs .370 (106-120), Grady Little ignored threshold, Red Sox lost, fired; next year won WS [PAGE 5]. Analogy: soccer managers overvalue starters, undervalue substitutes/relievers.
- Kuper & Szymanski (2009) Soccernomics penalty kick tendencies, Germany 2006 vs Argentina, Chelsea 2008 vs Man U [PAGE 3]. AC Milan analytics injury prevention, average age 31 (2007 CL), backline 32.5 (2009-10) [PAGE 3-4]. Sam Allardyce Bolton video analysis [PAGE 4]. Match Analysis, Opta [PAGE 4].
- Multi-week traps: season-long narrative traps — managerial sacking (Ferrara at Juventus, Benitez at Liverpool, Grant at Portsmouth, Arcanada at Tenerife) correlated with low rule participation but confounded by squad quality, injuries, fixture congestion, regression to mean across a 38-game EPL or 34-game Bundesliga season. The paper treats each match instance as independent [PAGE 8] but within-game substitution times minimally correlated; across a season, same manager/team repeated instances violate independence and create multi-week habit traps: a manager who habitually withholds subs (e.g., Portsmouth 19.05% participation, Tenerife 0%) compounds exposure to the 17-24% failure baseline rather than the 38-47% rule success band. The "critical point" clock (58/73/79) resets each match; a multi-week trap is applying the rule rigidly across weeks without updating for opponent strength, red cards, or fixture congestion (Champions League midweek, international breaks). Also survival bias: teams that follow rule and succeed may retain managers; correlation presented causally.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: When behind, managers regress to "starter loyalty" — holding starters because they produced the lead earlier or because they fear disrupting flow [PAGE 9 intuition]. This is a crisis-induced habit: under threat (losing), they become more conservative when ahead (hold subs later) but the paper notes when tied/behind they become "risk-seeking" by subbing earlier [PAGE 9]. Yet actual behavior: only 34.29% participation [PAGE 15]; many managers (Everton 0%, Bolton 7.14%, Sunderland 7.69%, Tenerife 0%) fail to sub even when behind [Appendices]. This is habit regression to status quo bias under pressure.
- Counter-trap: The opposing team, when tied or ahead, has no clear counter-strategy per the paper [PAGE 14]: "The opposing team would be tied or ahead, therefore, there is no clear strategy that could be employed to combat the effects from the team from behind following the decision rule." But recursive theory of mind says the opponent can anticipate the rule: if trailing team is known to sub at 58/73/79, the leading manager can preemptively adjust formation, waste time, or prepare defensive subs; the rule's assumption of independence from opponent strategy is a fixed-point failure. The counter-trap is to bait the trailing team into early subs (before 58) when the down-split p=0.052 is marginal, then exploit fatigue of the introduced substitute in the final 15 minutes (third sub capped at 90, injury time) [PAGE 7].
- Clock: The three critical points are minute-based (58, 73, 79) derived from decision-tree splits on a sample with mean sub times 56.38/70.23/80.58 [PAGE 6]. The clock is absolute match time, not game-state time. Singularity: after 80th minute, if a team falls behind, no specific recommendation [PAGE 14]; third sub split at 78.5 has p=0.134 (not significant) [PAGE 12], so the 79th-minute boundary is statistically weak. The clock also ignores stoppage time: subs in injury time charted as 90 [PAGE 7], compressing late-game variance.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: FIFA three-sub limit, no re-entry [PAGE 3]. Once used, a sub cannot return; hard constraint. The rule consumes subs early (sub1 before 58, sub2 before 73) potentially leaving no sub for injury after 80th minute — physical veto: if a starter suffers a non-traumatic soft-tissue injury (hamstring) at minute 84 and all three subs already expended per the rule, the team plays with 10 or risks further injury. The paper discards first-half injury subs and red cards [PAGE 14] but does not model second-half injury risk.
- Biomechanical layer: Performance drop due to fatigue is asserted but not directly measured; no player-load, GPS, heart-rate, or sprint data. The Pedro Martinez analogy [PAGE 5] is baseball pitch count, not soccer. Soccer players conditioned for 90 minutes [PAGE 5]; claim "performance levels may drop later in matches" [PAGE 5] lacks within-subject biomechanical validation in this paper. Veto: without measured neuromuscular fatigue (e.g., countermovement jump drop, high-speed running distance decline), the "fresh substitute injects energy" claim is an unobserved mediator.
- Weather/environmental layer: No weather variables (temperature, humidity, pitch condition) collected [PAGE 5-6 variables listed]. Heat stress accelerates fatigue and may shift optimal sub timing earlier than 58/73/79. Cold or wet conditions alter injury risk. Veto: the rule's external validity is limited to the competitions/seasons sampled; a match in extreme heat (e.g., World Cup 2010 in South Africa winter — mild; but MLS summer heat) may violate the minute thresholds.
- Adjudication: The rule is vetoed when (i) red card or first-half injury occurs (discarded) [PAGE 14]; (ii) team is tied or ahead (no significant split) [PAGE 12]; (iii) all subs exhausted before an acute injury event; (iv) match context (continental travel, midweek fixture) implies accumulated fatigue not captured by minute clock.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable counterfactual veto scenarios with predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Likely wants verifiable scenarios.
Scenario 1: Team behind at minute 56, rule says sub before 58. Counterfactual veto: manager withholds sub until minute 70 (after 58 split). Prediction: based on Table 6, improvement probability drops from 0.41 to 0.18 for first sub when behind; at aggregate level (Table 7) success rate falls from 42.27% toward 20.52%. Verifiable: track EPL/La Liga matches 2024-25 where trailing team fails to sub by 58; measure goal differential change from minute 58 to final. Predict success rate ≤24% (upper bound of no-rule CI) vs ≥38% for rule-followers.
Scenario 2: All three subs used before minute 79 per rule (sub1 <58, sub2 <73, sub3 <79), then starter sustains hamstring at minute 83 while still behind. Counterfactual veto: rule forces exhaustion of substitution budget; physical no-reentry rule [PAGE 3] means team must play shorthanded or risk injured player. Prediction: goal differential in final 7 minutes worsens by at least one goal relative to matched counterfactual with one sub reserved (conservative estimate: expected goal differential change ΔG ≤ -0.5 given trailing state and one fewer player). Verifiable: matches with 3 subs before 75 and an injury-time substitution opportunity missed due to no-reentry.
Scenario 3: Team trailing after 80th minute (e.g., concedes at 82). Rule explicitly gives no specific recommendation [PAGE 14]; third sub split p=0.134 not significant and capped at 90 [PAGE 7]. Counterfactual: apply rule mechanically and sub at 83 anyway. Prediction: no statistically significant improvement signal; success rate indistinguishable from baseline (~20.5%) or worse due to late disruption; in fact Table 6 shows τ_3≥79 improvement only 0.07 vs 0.24 before 79 (weak). Verifiable: trailing teams making first/only sub after minute 80 should show improvement rate ≈7% (consistent with sub3 late split) not 38-47%.

Need to avoid betting lines entirely. No odds/spreads/moneylines/totals.

Word count: Need >=1000 words across sections. I'll write substantial each.

Citations: Use [PAGE N] verbatim quotes where relevant.

Let's draft with careful LaTeX.

Ensure no toy equations: all equations formal, with units and assumptions stated.

Need to include verbatim quotes with page markers. Example: "There is a statistically significant difference for each of the three subs" [PAGE 9]. "managers tend to hold onto subs later when the team is ahead" [PAGE 9]. etc.

Let's compose.

Structure: six XML sections in order. Each with content.

THINK_TRACE >=400 words. I'll write ~500+ words.

SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX with definitions, equations, page citations, breakdown. Include units, assumptions, singularity/breakdown regimes.

RETROCAUSAL_GENEALOGY: historical lineage + multi-week traps.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.

Let's write carefully to exceed 1000 words total. I'll aim each section robust.

Double-check no mention of "odds", "spread", "moneyline", "total", "betting", "line". Avoid "odds ratio" even. Use "probability", "proportion", "success rate". Good.

Also avoid invented ratios like Force/Fatigue. All equations formal.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain begins with a structural constraint: FIFA permits exactly three substitutions with no re-entry, making each substitution a scarce, irreversible allocation decision [PAGE 3]. From this constraint Myers builds an empirical object: a training sample of 485 observations drawn from ESPN Soccernet—155 English Premier League, 172 Serie A, and 158 La Liga matches—tracking goal differential before and after each substitution, home/away status, and substitution minute; formation is excluded as difficult to track and subjective, and no distinction is made between attacking and defensive substitutions because box scores lack sufficient player-role context [PAGE 5–6].

The first hop is descriptive. Table 1 reports substitution-time summary statistics: first sub mean 56.38 min (median 59, mode 45, SD 15.6, N=484); second sub mean 70.23 min (median 71, mode 70, SD 11.75, N=464); third sub mean 80.58 min (median 82, mode 90, SD 8.22, N=403) [PAGE 6]. Figure 1 shows the first-sub distribution is skewed by first-half substitutions, mostly injury-related, with mass at the 45-minute halftime stoppage; the third-sub distribution is left-skewed and capped at 90 minutes because injury-time substitutions are charted as minute 90 [PAGE 7]. Figure 2 shows most teams use all three substitutions [PAGE 8].

The second hop is conditional performance. Table 2 cross-tabulates win/tie percentage by scenario and number of subs. When down: 3 subs → 24.20% (N=123) versus fewer than 2 subs → 9.52% (N=21). When tied: 3 subs → 72.85% (N=151) versus fewer than 2 subs → 61.11% (N=18). The “fewer than 2 subs” cells are small (N=21 and N=18), a gray zone that weakens causal claims about substitution volume itself [PAGE 8].

The third hop tests timing determinants. Assuming substitutions are independent between games and minimally correlated within a game [PAGE 8], one-way ANOVA (Table 3) shows score position significantly affects all three substitution minutes: Sub 1 down 53.69 / tied 51.07 / up 59.61 (p=9.09E-06); Sub 2 down 64.65 / tied 68.21 / up 73.44 (p=1.28E-10); Sub 3 down 76.87 / tied 80.19 / up 84.06 (p=4.10E-14) [PAGE 9]. The stated interpretation is that managers hold substitutes later when ahead and bring them on earlier when tied or behind, becoming “risk-seeking” when the score state must improve [PAGE 9]. Home/away (Table 4) shows no significant difference for subs 1–2 and a marginal p=0.06 for sub 3 (away 79.79 vs home 81.33) [PAGE 10]. League type (Table 5) shows a significant first-sub difference (English 57.77 vs Italian 52.06 vs Spanish 55.07, p=0.011) but not for subs 2 (p=0.657) or 3 (p=0.275) [PAGE 10].

The fourth hop is the decision-tree data mine. SAS Enterprise Miner is run on the 485 training observations. The target is redefined by score state: when behind, improvement = increase in goal differential from before to after the substitution; when tied, target = goal differential (positive = win, zero = tie preserved, negative = loss); when ahead, target = binary win preserved [PAGE 11]. Table 6 reports splits only for the behind state: sub1 split at 57.5 min with improvement 0.41 below vs 0.18 above (p=0.052); sub2 split at 72.5 with 0.30 below vs 0.06 above (p=0.057); sub3 split at 78.5 with 0.24 below vs 0.07 above (p=0.134, not significant at α=0.05) [PAGE 12]. These translate to the verbal rule: down teams improve 41% before minute 58 vs 18% at or after; 30% before minute 73 vs 6% at or after; 24% before minute 79 vs 7% at or after [PAGE 12]. No minimum timing is identified, and the paper advises waiting until halftime though admits “there is no statistical evidence to support this claim” [PAGE 12]. No significant splits emerge for tied or ahead states, so timing is deemed non-critical there [PAGE 12].

The fifth hop is the proposed rule (Figure 3): if behind approaching minute 58, make at least the first sub; if still behind approaching minute 73, make at least the second; if the team equalizes or leads by a critical point, the second may be withheld, but if it falls behind again before minute 79, both second and third subs should be used before minute 79; if a team falls behind after minute 80, there is no specific recommendation [PAGE 13–14]. An “instance” is an opportunity where a team falls behind and can apply the rule before at least one critical point; max two instances per game [PAGE 13].

The sixth hop is validation on 1,284 instances across EPL, La Liga, Serie A, Bundesliga, MLS, and World Cup 2010 [PAGE 14]. Success is defined as improved goal differential from the first rule-adherent substitution to match end; first-half injury subs and red-card matches are discarded [PAGE 14]. There is an ambiguous sentence: “There is some duplication in the training data and test data, but enough to jeopardize the validity of the study” [PAGE 14]—likely a typo for “not enough,” but verbatim it asserts a validity threat that is never quantified, a gray zone.

Table 7 reports rule-followers: 186 successes / 254 failures / 440 instances = 42.27%; non-followers: 173 / 670 / 843 = 20.52%; total 1,283 instances (one off from 1,284, unreconciled). Reported 95% confidence limits: rule 38%–47%, no rule 17%–24%; participation rate 34.29% [PAGE 15]. Table 8 decomposes by competition: Serie A 52.50% vs 17.83% (participation 38.28%); World Cup 45.45% vs 14.29% (44.00%); Bundesliga 43.28% vs 25.00% (27.54%); EPL 40.00% vs 21.59% (23.81%); MLS 36.36% vs 19.35% (41.51%); La Liga 32.35% vs 21.13% (32.38%) [PAGE 15–16]. All are claimed statistically better. Appendices give team-level participation and success, with managerial narratives (Mourinho/Inter high participation; Ferrara/Juventus, Benitez/Liverpool, Grant/Portsmouth, Arcanada/Tenerife low) [PAGE 16–18].

Gray-zone audit summary: (i) marginal tree split p-values (0.052, 0.057, 0.134) mean the 79-minute third-sub boundary is not statistically secure; (ii) no within-subject fatigue measure exists—energized-substitute claims are inferred, not biomechanically observed; (iii) independence assumptions are strong given repeated managers/teams across a season; (iv) weather, pitch, travel, and opponent strength are absent; (v) the “enough to jeopardize” duplication sentence is self-contradictory/unquantified; (vi) Table 2’s “<2 subs” cells are small. These regimes delimit where the rule breaks down.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, assumptions, and breakdown regimes.

Let the focal team’s goal differential immediately before substitution \(k\) be \(G^{(k)}\), with goals for minus goals against, dimensionless (goals). Let match time be \(\tau_k \in [0,90]\) minutes (min), where injury-time substitutions are charted as \(\tau=90\) [PAGE 7]. Let score state \(s \in \{D,T,A\}\) denote down (\(G<0\)), tied (\(G=0\)), ahead (\(G>0\)) relative to the opponent. FIFA imposes the hard constraint \(K \le 3\) substitutions with no re-entry [PAGE 3].

Improvement indicator \(I_k\), defined differently by state [PAGE 11]:
\[
I_k =
\begin{cases}
\mathbb{1}\{G^{(\text{end})} > G^{(k)}\}, & s=D \quad \text{(strict differential increase)}\\
\mathbb{1}\{G^{(\text{end})} > 0\}, & s=T \quad \text{(win; } G^{(\text{end})}=0 \text{ preserves tie; } G^{(\text{end})}<0 \text{ loss)}\\
\mathbb{1}\{G^{(\text{end})} > 0\}, & s=A \quad \text{(win preserved; tie or loss = 0)}
\end{cases}
\]
Units: \(I_k\) is a dimensionless Bernoulli variable. The decision-tree “avg target” entries in Table 6 are empirical conditional means \(\hat{p}=E[I_k\mid \cdot]\) [PAGE 12].

Substitution-time empirical distributions (training, N=485) [PAGE 6–7]:
\[
\begin{array}{c|ccc|c}
 & \text{mean (min)} & \text{median (min)} & \text{mode (min)} & N\\
\hline
k=1 & 56.38 & 59 & 45 & 484\\
k=2 & 70.23 & 71 & 70 & 464\\
k=3 & 80.58 & 82 & 90 & 403
\end{array}
\]

ANOVA results for score-position effect on \(\tau_k\) [PAGE 9, Table 3]:
\[
\begin{array}{c|ccc|c}
 & D & T & A & p\text{-value}\\
\hline
\tau_1 & 53.69 & 51.07 & 59.61 & 9.09\times10^{-6}\\
\tau_2 & 64.65 & 68.21 & 73.44 & 1.28\times10^{-10}\\
\tau_3 & 76.87 & 80.19 & 84.06 & 4.10\times10^{-14}
\end{array}
\]
F-statistics and degrees of freedom are not reported, so effect size beyond p-values cannot be reconstructed; assumption: independence between games, minimal within-game correlation [PAGE 8].

Home/away two-sample t-tests [PAGE 10, Table 4]:
\[
(\bar\tau_{1,away},\bar\tau_{1,home},p)=(53.80,55.27,0.341),\quad
(\bar\tau_{2,away},\bar\tau_{2,home},p)=(68.09,69.61,0.182),\quad
(\bar\tau_{3,away},\bar\tau_{3,home},p)=(79.79,81.33,0.06).
\]

League-type ANOVA first sub [PAGE 10, Table 5]:
\[
(\bar\tau_{1,ENG},\bar\tau_{1,ITA},\bar\tau_{1,ESP},p)=(57.77,52.06,55.07,0.011),\quad p_2=0.657,\quad p_3=0.275.
\]

Decision-tree splits for state \(D\) [PAGE 12, Table 6], with critical minutes \(c_1=58\), \(c_2=73\), \(c_3=79\):
\[
\begin{array}{c|cc|c}
k & \text{split } c_k & \hat p(I_k=1\mid \tau_k<c_k,D) & \hat p(I_k=1\mid \tau_k\ge c_k,D)\\
\hline
1 & 57.5 \text{ min} & 0.41 & 0.18 \quad (p=0.052)\\
2 & 72.5 \text{ min} & 0.30 & 0.06 \quad (p=0.057)\\
3 & 78.5 \text{ min} & 0.24 & 0.07 \quad (p=0.134)
\end{array}
\]
Note \(p_3=0.134>\alpha=0.05\): the 79-minute boundary lacks conventional significance. Verbal rendering from text: “teams that were down prior to the first sub improved 41% of the time when substituting before the 58th minute … while subbing at the 58th minute or later only led to an improvement 18% of the time” [PAGE 12].

Validation sample: \(N=1{,}284\) instances [PAGE 14], Table 7 [PAGE 15]:
\[
\begin{array}{c|ccc|c}
\text{Policy} & \text{successes} & \text{failures} & \text{instances} & \text{success rate}\\
\hline
\text{Rule} & 186 & 254 & 440 & 0.4227\\
\neg\text{Rule} & 173 & 670 & 843 & 0.2052\\
\text{Total} & 359 & 924 & 1{,}283 & 0.2798
\end{array}
\]
Absolute lift: \(\Delta = 0.4227-0.2052 = 0.2175\) (21.75 percentage points). Relative lift: \(0.4227/0.2052 \approx 2.06\).

Reported Wald-style 95% confidence limits [PAGE 15]:
\[
\hat p \pm z_{0.975}\sqrt{\hat p(1-\hat p)/n}:\quad
0.4227\pm1.96\sqrt{\frac{0.4227(0.5773)}{440}} \approx 0.4227\pm0.0462 \Rightarrow [0.3765,0.4689]\approx[38\%,47\%],
\]
\[
0.2052\pm1.96\sqrt{\frac{0.2052(0.7948)}{843}} \approx 0.2052\pm0.0273 \Rightarrow [0.1779,0.2325],
\]
which brackets the text’s [17%,24%] interval (small differences attributable to rounding/exact method not specified). Participation rate: \(440/1284 = 0.3429\) [PAGE 15].

By competition [PAGE 15–16, Table 8], success-with-rule vs success-without-rule:
Serie A \(0.5250\) vs \(0.1783\); World Cup \(0.4545\) vs \(0.1429\); Bundesliga \(0.4328\) vs \(0.2500\); EPL \(0.4000\) vs \(0.2159\); MLS \(0.3636\) vs \(0.1935\); La Liga \(0.3235\) vs \(0.2113\). Participation rates: Serie A \(0.3828\), World Cup \(0.4400\), Bundesliga \(0.2754\), EPL \(0.2381\), MLS \(0.4151\), La Liga \(0.3238\). No confidence intervals are provided for individual league rates, so cross-league “statistically better” claims rest on unreported standard errors.

Breakdown / singularity regimes where the rule is undefined or vetoed:
1. \(\tau > 80\) min and state becomes \(D\): “no specific recommendation” [PAGE 14].
2. Third-split \(p=0.134\): the \(c_3=79\) min cutoff is not statistically significant; injury-time cap at \(\tau=90\) compresses late variance [PAGE 7,12].
3. First-half injury substitutions and red-card matches are discarded from validation [PAGE 14]; the rule consumes the no-reentry budget early, creating a physical veto if acute injury occurs after all three subs are expended.
4. States \(T\) and \(A\): no significant tree splits, so timing is “not as critical” and other criteria should dominate [PAGE 12].
5. Small-sample cells in Table 2 (\(N=21\) down, \(N=18\) tied for <2 subs) limit generalization about substitution volume [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week behavioral traps.

The paper sits inside a sparse analytical genealogy. Hirotsu and Wright (2002) used dynamic programming and a Markov process model of association football to determine optimal timing of substitution and tactical decisions from English Premier League data, incorporating home/away, time remaining, and formation [PAGE 4]. Hirotsu et al. (2009) modeled tactical changes as a non-zero-sum game based on home/away, time remaining, goal differential, and opponent formation [PAGE 4]. Corral et al. (2007) performed survival analysis on the 2004–2005 Spanish league, finding that teams behind substitute earlier than tied or ahead teams, defensive subs occur later and offensive subs earlier, while noting results may not universalize across leagues [PAGE 4–5]. Myers’s contribution is narrower and more prescriptive: isolate timing alone, use decision trees for interpretability, and produce explicit minute-based thresholds (58, 73, 79) with a validation sample across six competitions [PAGE 13–15].

The paper imports an external analogy from baseball via Davenport (2007): Pedro Martinez’s 2003 ALCS performance, where opposing batters hit .231 on pitches 91–105 but .370 on pitches 106–120; manager Grady Little kept Martinez past the analytically derived threshold, the Yankees rallied in the 8th, Boston lost the series, and Little was fired; the Red Sox won the World Series the next year [PAGE 5]. The implied syllogism is that soccer managers similarly “overvalue starters and undervalue substitutes,” a claim restated in the conclusion [PAGE 18]. Other contextual references include Kuper and Szymanski (2009) on penalty-kick tendency tracking (Germany vs. Argentina 2006; Chelsea vs. Manchester United 2008) [PAGE 3], AC Milan’s analytics-driven injury prevention with veteran squads averaging age 31 (2007 Champions League) and a 32.5-year-old backline (2009–10) [PAGE 3–4], Sam Allardyce’s video analysis at Bolton [PAGE 4], and the commercial analytics providers Match Analysis and Opta [PAGE 4].

Multi-week traps arise because the paper analyzes match instances as independent [PAGE 8] while the underlying agents—managers and squads—persist across a season. A manager who habitually withholds substitutes (e.g., Tenerife’s Arcanada at 0.00% participation across 16 instances [PAGE 18], Portsmouth’s Grant at 19.05% [PAGE 17], Everton 0.00%, Sunderland 7.69%, Bolton 7.14% in the EPL appendix [PAGE 19]) compounds exposure to the no-rule success band (17%–24%) over 38 league games rather than the rule band (38%–47%). This creates a season-long compounding trap: small per-instance differences aggregate into large standings gaps, yet the paper attributes managerial dismissals (Ferrara, Benitez, Grant, Arcanada) partly to rule non-adherence without isolating squad quality, injuries, fixture congestion, or regression to the mean [PAGE 16–18]. Conversely, a single lucky success while violating the rule (e.g., Dortmund’s Klopp went 2/2 when following the rule but 0/7 when not [PAGE 16–17]) can reinforce a false habit of late substitution, producing a counter-adaptive regression: the manager learns the wrong policy from a small, noisy sample.

A second multi-week trap is fixture congestion. The rule’s clock is absolute match minute, reset each game [PAGE 13]. It does not account for midweek Champions League/Europa League fixtures, international travel, or compressed schedules that accumulate fatigue before the 58th minute, meaning the optimal substitution minute in week \(t+1\) may be earlier than in week \(t\) even at identical score states. Because the training data pool leagues without a fatigue-carryover covariate [PAGE 5–6], the rule cannot distinguish a fresh Saturday kickoff from a Tuesday match after Wednesday travel. This intertemporal omission is the core retro-causal vulnerability: the same minute threshold is applied across weeks whose physiological states differ materially.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus the clock.

Crisis habit regression. When a team falls behind, the paper’s own ANOVA says managers substitute earlier (down: 53.69/64.65/76.87 min for subs 1–3) than when ahead (59.61/73.44/84.06) [PAGE 9], yet the aggregate participation rate in the validated rule is only 34.29% [PAGE 15]. This discrepancy is crisis habit regression: under threat, managers regress to starter loyalty and status-quo bias, “hold onto subs later when the team is ahead” and fear disrupting flow, even when behind [PAGE 9]. The appendix team tables show extreme regressors—Tenerife (0/16), Portsmouth (4/21), Liverpool (1/9), Juventus (2/11)—who default to withholding substitutions precisely in the down-state instances where the decision tree identifies the largest conditional lift (0.41 vs 0.18 for sub 1; 0.30 vs 0.06 for sub 2) [PAGE 12, 16–18]. The regression is self-reinforcing: because failure rates are high without the rule (17%–24%), repeated crisis failures confirm the manager’s intuition that substitutions “don’t matter,” while the occasional success without the rule (e.g., Juventus 1/9 when not following [PAGE 16]) is overweighted via availability.

Counter-trap. The paper asserts that when the focal team follows the rule while behind, “the opposing team would be tied or ahead, therefore, there is no clear strategy that could be employed to combat the effects” [PAGE 14]. This is a fixed-point error in recursive theory of mind. A rational opposing manager, anticipating that the trailing team will substitute at minutes 58, 73, and 79, can preemptively counter: introduce fresh defensive legs before the expected substitution wave, alter shape to neutralize the incoming substitute’s expected impact, or manage game tempo to compress the trailing team’s window. The decision tree treats the opponent’s strategy as exogenous noise [PAGE 14], but if both teams converge on minute-based substitution rules, the timing advantage is arbitraged away. The counter-trap is therefore to bait the trailing team into using its second substitute before minute 73 when its score state temporarily improves, leaving it with only one sub if it falls behind again before minute 79—exactly the rule’s own contingency, now weaponized against it [PAGE 13].

The clock. The decision rule is an absolute-minute clock (58, 73, 79) fitted to training means of 56.38, 70.23, and 80.58 [PAGE 6], not a game-state clock keyed to possession, territory, or fatigue. Its singularities are sharp: the third-sub split at 78.5 minutes has \(p=0.134\) [PAGE 12], so the 79-minute boundary is statistically fragile; after minute 80, falling behind triggers “no specific recommendation” [PAGE 14]; and injury-time substitutions are all charted as minute 90, erasing stoppage-time resolution [PAGE 7]. A recursive manager should therefore treat the clock as a Bayesian prior, not a deterministic trigger: the prior is strongest for the first two splits (\(p=0.052, 0.057\), marginally significant) and weakest for the third (\(p=0.134\)), and it should be down-weighted whenever the opponent’s substitution pattern reveals anticipation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proofs.

Physical layer (laws of the game). The hard constraints are three substitutions and no re-entry [PAGE 3]. The rule’s logic expends substitutions early: sub 1 before minute 58, sub 2 before minute 73, and potentially sub 3 before minute 79 if the team re-enters a down state [PAGE 13]. The physical veto triggers when a starter suffers an acute non-traumatic injury (e.g., hamstring strain) at minute 84 after all three substitutions are already expended. Because no re-entry is permitted, the team must either play the injured player at elevated re-injury risk or continue with ten effective outfield players; neither contingency appears in the data model [PAGE 5–6], which only discards first-half injury substitutions and red-card events from validation [PAGE 14]. Formal veto condition: if \(K=3\) and \(\max(\tau_k)<79\) and an acute injury occurs at \(\tau_{inj}\in(79,90]\), the rule’s feasible set is empty and the substitution constraint binds.

Biomechanical layer. The paper asserts that “performance levels may drop later in matches” and that “a fresh substitute can inject some needed energy,” but it measures neither player load nor neuromuscular fatigue [PAGE 5,18]. The only fatigue analogue is the baseball pitch-count story (Martinez, pitches 91–120) [PAGE 5], which does not transfer to soccer’s continuous, non-thrower physiology. Without GPS-derived high-speed running distance, sprint count, or countermovement-jump degradation, the mediator “starter fatigue versus substitute freshness” is unobserved. Formal veto condition: if within-match player-specific fatigue \(F_i(\tau)\) is not measured and no re-entry is allowed, the causal claim \(E[I_k\mid \text{early sub},D] > E[I_k\mid \text{late sub},D]\) cannot be attributed to fatigue; it may reflect opponent tactical regression, score-state mean reversion, or referee stoppage-time allocation. The rule is therefore biomechanically under-identified.

Weather and environmental layer. No meteorological variables (temperature, humidity, wet-bulb globe temperature, pitch hardness, wind) are collected [PAGE 5–6]. Heat stress accelerates glycogen depletion and neuromuscular fatigue, which would shift the optimal substitution minute earlier than 58/73/79 in hot conditions; cold or wet conditions alter muscle-tendon stiffness and injury risk, which would shift substitution timing later or toward injury-replacement patterns. Formal veto condition: if wet-bulb globe temperature exceeds competition safety thresholds or pitch condition is rated poor, the minute thresholds derived from temperate EPL/Serie A/La Liga/World Cup 2010 matches [PAGE 14–15] lose external validity; the rule’s singularity regime extends to any match outside the sampled environmental envelope.

Adjudication hierarchy. When layers conflict, the physical layer (FIFA substitution cap, no re-entry) is absolute and overrides the statistical rule; the biomechanical layer downgrades the rule from “prescriptive” to “prior” absent player-load data; the weather layer restricts the rule’s domain to conditions similar to the training and validation competitions. A team should therefore follow the rule only when \(K<3\) remains available at the critical minute, no red card or first-half injury has voided the instance [PAGE 14], and the environmental and fixture context matches the sampled competitions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with testable predictions.

Scenario 1 — First-sub veto after minute 58 while down.
Setup: A team is behind entering minute 56 and has all three substitutions available. The rule prescribes sub 1 before minute 58; the counterfactual veto is the manager withholding until minute 70 (after the \(c_1=58\) split). Verification data: match-level event logs from a top league season (e.g., EPL 2024–25) identifying all instances where a trailing team makes its first substitution at \(\tau_1 \ge 58\) with no red card or first-half injury. Prediction: conditional improvement \(E[I_1\mid D,\tau_1\ge58]\) should collapse toward the late-split value of 0.18 from Table 6 [PAGE 12], and at aggregate level the success rate should approach the no-rule band (17%–24% [PAGE 15]) rather than the rule band (38%–47%). Observable outcome: goal differential from minute 58 to final match state improves in no more than ~24% of veto instances, verifiable by comparing \(\Delta G = G_{end}-G_{58}\) across veto vs compliant groups. Null to reject: veto group improvement rate \(\le 0.24\).

Scenario 2 — Budget-exhaustion veto with acute late injury.
Setup: A team behind follows the rule aggressively—sub 1 before 58, sub 2 before 73, sub 3 before 79—exhausting all three substitutions. At minute 84, while still behind, a starter sustains a soft-tissue injury requiring removal. The counterfactual veto: reserve one substitution by not following the sub-3-before-79 directive, preserving a replacement for \(\tau\in(80,90]\). Verification data: matches where all three subs are used before minute 79 and an injury-time substitution opportunity is foreclosed by the no-reentry cap [PAGE 3]. Prediction: because no replacement can enter, expected goal differential in the final six minutes should worsen by at least half a goal relative to a matched counterfactual with a sub reserved: \(\mathbb{E}[\Delta G_{84\to90}\mid K=3,\text{injury}] - \mathbb{E}[\Delta G_{84\to90}\mid K=2,\text{injury}] \le -0.5\) goals, with the trailing team playing numerically or functionally disadvantaged. Observable outcome: veto (rule-following to exhaustion) group concedes or fails to score at a rate producing \(\Delta G\le -0.5\) in the injury-time window. Null to reject: no difference in late-minute goal differential between exhausted-budget and reserved-budget trailing teams.

Scenario 3 — Post-80-minute down-state veto (rule silence).
Setup: A team concedes at minute 82 and is behind with one substitution remaining. The rule explicitly gives “no specific recommendation” for falling behind after minute 80 [PAGE 14], and the third-sub split at 78.5 min was not significant (\(p=0.134\)) [PAGE 12]. The counterfactual veto: applying the rule mechanically anyway and substituting at minute 83. Verification data: all instances in a season where a team first falls behind after minute 80 and makes its only/remaining substitution at \(\tau\in(80,90]\). Prediction: improvement rate should match the late third-sub split of 0.07 from Table 6 [PAGE 12] or the general no-rule baseline (~20.5% [PAGE 15]), not the rule band of 38%–47%; specifically \(P(\text{improve}\mid D,\tau_{sub}>80) \le 0.24\). Observable outcome: goal differential from minute 82 to final improves in at most ~7–24% of such late-substitution instances. Null to reject: post-80 substitution success rate \(>0.24\).
</RLVR_COUNTERFACTUAL_VETOES>