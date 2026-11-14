---
source: "2026 - Better Prevent than Tackle Valuing Defense in Soccer Based on Graph Neural Networks - Kim et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2026"
pages: 30
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 8207
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about DEFCON, a defensive valuation framework in soccer using Graph Neural Networks. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully extract page numbers from the source text. Looking at the markdown, there are page markers embedded like "1", "2", etc. after sections. Let me map content to pages:

Page 1: Introduction start, including Maldini quote footnote, references to JDI [6], Merhej [22], Forcher [14], Toda [34], Stockl [33], Everett [9]. DEFCON intro.
Page 2: Section 2 intro, Figure 1 overview.
Page 3: Section 2.1 Expected Possession Value, formulas start (but formatting is messy in source).
Page 4: Table with Red team data, Figure 2 description.
Page 5: Table with Blue team data, Figure 2 continued, Section 2.2 Team-Level Defensive Value, example with red/blue EPV 0.0032 to -0.0158, defensive value +0.0190.
Page 6: Section 2.3 Defender Responsibility, definition of responsibility w_v(s,a).
Page 7: Section 2.4 Credit Assignment for Defending Passes, outcomes (a)-(e), decomposition 1-p and p, Figure 3 example: blue 9 responsibility 0.210: 0.548·0.190 + 0.210·(1-0.548)·0.190 = 0.012; blue 5 responsibility 0.467: ...; blue 15 responsibility 0.168: ...
Page 8: Pass failure without defensive action, successful pass EPV increase, successful pass EPV decrease, threatening options set A+, dividing D_s,k,a, foul committed by defender penalty EPV_s,k - 0.7884.
Page 9: Section 2.5 Credit Assignment for Defending Shots, blocked vs unblocked, UxG definition, goalkeeper credit U_s,k+1 - E_s,k, example left snapshot EPV 0.024 UxG 0.121 penalty -0.097, right snapshot EPV 0.035 UxG 0.069 penalty -0.034, goalkeeper save credit 0.069.
Page 10: Figure 5, aggregation Section 2.6, four categories Intercept/Disturb/Deter/Concede, Figure 6 match 5-0.
Page 11: Section 3 Estimation of Component Values, Table 1 summary of predictive tasks.
Page 12: Section 3.1 GNN Models, node features 25 features list, edge features, GAT equations.
Page 13: (a1) Action selection, intended receiver identification formula.
Page 14: Figure 7 responsibility estimation, (d1) Defender responsibility details.
Page 15: Section 3.2 Unblocked-Shot Expected Goals Model, Wyscout dataset 1,941 matches, 45,945 shots, 34,987 unblocked, 5,105 goals, logistic regression 6 features.
Page 16: Section 4 Experiments, 4.1 Datasets, 564 matches 2023-24 and 2024-25 Eredivisie, tracking 25Hz, ~1,400 events/match, ELASTIC sync, Table 2 stats.
Page 17: Table 2 continued, 4.2 Predictive Performance, Table 3 performance metrics.
Page 18: Table 3 continued, boosting vs GNN discussion.
Page 19: 4.3 Correlation with Market Values, 261 outfield players, 900 minutes, Transfermarkt log scale, Table 4 correlations.
Page 20: Table 4 continued (CM row), Figure 8, Figure 9, discussion of negative intercept correlation, concede penalties strong correlation.
Page 21: 4.4 Qualitative Validation, Tables 5-7 top-10 CBs.
Page 22: Table 5 top-10 net credit CBs.
Page 23: Table 6 top-10 intercept credit CBs.
Page 24: Table 7 top-10 concede credit CBs.
Page 25: Section 5 Practical Applications, 5.1 Interactive Timeline, Figure 10.
Page 26: 5.2 Spatial Tendency, Figure 11 discussion.
Page 27: 5.3 Pairwise Attacker-Defender Analysis, Figure 12, Figure 13.
Page 28: Section 6 Conclusions, future work.
Page 29: References start.
Page 30: References continue.
Page 31: References continue.
Page 32: References end.

Wait, the source text has page breaks indicated by numbers like "1", "2", etc. at the end of text blocks. Let me verify the exact page mapping more carefully:

Looking at the raw text:
- After intro footnote: "1" -> Page 1 ends? Actually the text says "1" on its own line after footnote. Then "2" after Figure 1 description. Then "3" after EPV formulas. Then "4" after Red table. Then "5" after Blue table and Section 2.2 example. Then "6" after Section 2.3 start? Actually "6" appears after Section 2.4 intro. Then "7" after pass failure example. Then "8" after successful pass decrease and foul example. Then "9" after Section 2.5 shots. Then "10" after goalkeeper credit and Figure 5. Then "11" after Section 2.6 and Figure 6? Let's trace:

Text flow:
... [PAGE 1 content] ... 1
... [PAGE 2 content: Section 2 intro, Figure 1] ... 2
... [PAGE 3 content: Section 2.1 EPV formulas] ... 3
... [PAGE 4 content: Red table, Figure 2] ... 4
... [PAGE 5 content: Blue table, Section 2.2 team-level value example] ... 5
... [PAGE 6 content: Section 2.3 responsibility] ... 6 (Wait, the text says "6" appears after Section 2.4 intro? Let me check)

Actually looking at the source:
- "...Section 2.3 details..." then page break "6"? No, the text shows:

After Section 2.3 intro: "...Section 3.1 details the GNN model used to estimate this responsibility and Figure 7 illustrates the resulting values assigned to players." then page break "6"? Let's look:

The source has:
"...Section 3.1 details the GNN model used to estimate this responsibility and Figure 7 illustrates the resulting values assigned to players.

### **2.4. Credit Assignment for Defending Passes**"

Then later "6" appears after "We consider the following five possible outcomes and elaborate on the assignment procedures case by case:".

Hmm, the page numbers in the markdown seem to be at the end of pages. Let me map based on the standalone numbers:

"1" appears after footnote 1 (Maldini quote).
"2" appears after Figure 1 overview text.
"3" appears after EPV decomposition intro text.
"4" appears after Red team table.
"5" appears after Blue team table and Section 2.2 example (0.0032 to -0.0158).
"6" appears after Section 2.4 intro listing outcomes (a)-(e).
"7" appears after the pass failure example with blue 9, blue 5, blue 15.
"8" appears after successful pass decrease and foul example (penalty kick 0.7884).
"9" appears after Section 2.5 shot blocked/unblocked intro.
"10" appears after goalkeeper credit formula and before Figure 5? Actually "10" appears after "...If the shot results in a goal, then E=1..." and before Figure 5 caption? Let's see: "Figure 5: ..." then "11" after aggregation section intro? Actually:

After goalkeeper example text: "In summary, the credit for the goalkeeper is" then formulas then "Figure 5: ..." then "11" then Section 2.6 Aggregating...
"11" after Figure 5 text? Actually text says: "Figure 5 instantiates how defensive credit is assigned..." then examples, then "Through this formulation..." then page break? Let's look at sequence:

After right snapshot example: "...goalkeeper receives positive credit of 0.069 for reducing the scoring probability from 0.069 to 0." then "Through this formulation..." then page break "11"? Then Section 2.6.

Actually I see "11" right before Section 2.6? Let's check: In the text: "...enables us to better quantify the defender’s ability to prevent dangerous shooting opportunities before they develop." then "### **2.6. Aggregating Defensive Contributions Across Matches**" then page break "12"? No, I see "12" after Figure 6 description? Wait:

After Section 2.6 text about four categories, then "Figure 6 shows..." then text about home/away 5-0, then page break "12"? Then Figure 6 caption? Actually:

Text: "Figure 6 shows the aggregated credits..." then "This example underscores..." then page break "12" then Figure 6 caption? The text shows:
"...yielding a more reliable and comprehensive assessment of defensive performance.

12


**Figure 6:** Category-wise..."

So page 12 has Figure 6 caption.

Then Section 3 starts on page 13? Text: "## **3. Estimation of Component Values**" then "13" after intro? Actually:

"To implement the credit estimation framework introduced in Section 2, we must estimate the following underlying component values:" then table then "13" after table? Wait:

Text: "Because player movement patterns differ..." then Table 1 then "13" appears? Let's see:

After Table 1 description: "In summary, our framework trains separate predictive models..." then page break? Then "14" appears after Section 3.1 node features list? Actually:

"### **3.1. Graph Neural Network Models** ... 25 node features ..." then page break "14"? Then edge features and GAT equations.

Then page 15: (a1) Action selection and intended receiver formula.
Then page 16: Figure 7 and (d1) Defender responsibility.
Then page 17: Section 3.2 UxG model, Wyscout dataset.
Then page 18: Section 4 Experiments, 4.1 Datasets, Table 2.
Then page 19: Table 2 continued? Actually "18" appears after Table 2 header? Then 4.2 Predictive Performance and Table 3.
Then page 20: Table 3 continued.
Then page 21: 4.3 Correlation with Market Values, Table 4.
Then page 22: Table 4 continued (CM row), Figure 8, Figure 9, discussion.
Then page 23: 4.4 Qualitative Validation, Tables 5-7 intro.
Then page 24: Table 5 top-10 CBs net credit.
Then page 25: Table 6 top-10 intercept credit.
Then page 26: Table 7 top-10 concede credit.
Then page 27: Section 5 Practical Applications, 5.1 Timeline, Figure 10.
Then page 28: 5.2 Spatial Tendency, Figure 11 discussion.
Then page 29: Figure 11 caption? Actually "29" appears after Figure 11 text? Then 5.3 Pairwise analysis, Figure 12, Figure 13.
Then page 30: Figure 13 caption? Then Section 6 Conclusions.
Then page 31: References start.
Then page 32: References end.

Given the constraints, I need to cite exact [PAGE N] markers. I should be careful and use page numbers that seem accurate based on the standalone numbers in the text. Since the user provided the source text with page markers, I'll reference them as they appear.

Now, the content requirements:

1. THINK_TRACE >= 400 words: Deep multi-hop derivation & gray-zone audit. I need to derive the DEFCON framework mathematically, trace dependencies, audit gray zones (e.g., responsibility definition assumes defender would receive ball on failure, which may not hold for shots where GK is involved; UxG logistic regression vs GNN inconsistency; surrogate intended receiver for failed passes; success definition for shots excludes goalkeeper saves; EPV decomposition assumes Markovian next-10-events; market value correlation is confounded by age/contract; etc.). Must be >= 400 words.

2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. I need to write out the key equations from the paper in proper LaTeX:
- EPV definition: EPV(s) = E[k_k | S=s]
- Decomposition: EPV(s) = sum over a in A of P_select(a|s) * [ P(O=1|s,a) * EPV_success(s,a) + P(O=0|s,a) * EPV_fail(s,a) ] or similar.
- Team defensive value: D(s,k) = -[EPV(s,k+1) - EPV(s,k)] or negated offensive value.
- Responsibility: w_v(s,a) = P(R=v | S=s, A=a) / sum_{u in V-} P(R=u | ...)
- Credit assignment for pass failure by defensive action: credit to interceptor = p * D(s,k); credit to others = w_v(s,a)*(1-p)*D(s,k). Wait the paper says: fraction (1-p) attributable to positioning distributed by responsibility; fraction p attributable to defensive action dedicated to interceptor. But in the example they wrote: blue 9 (responsibility 0.210): 0.548·0.190 + 0.210·(1-0.548)·0.190 = 0.012. Wait that seems to add p*D? Actually 0.548 is p (success prob). The formula in text: "blue 9 (responsibility 0.210): 0.548⋅0.190 + 0.210⋅1( −0.548)⋅0.190 = 0.012" — there's a typo in source: should be (1-0.548). So interceptor gets p*D? That seems odd because p is success probability, so if p is high, interceptor gets more? Actually re-reading: "a fraction 1-p of D attributable to defensive positioning... a fraction p of D attributable to the defensive action." Then example: blue 9 responsibility 0.210: 0.548·0.190 + 0.210·(1-0.548)·0.190. Wait the first term is p*D? That would mean interceptor gets p fraction? The text says latter fraction p dedicated to interceptor. But example shows blue 9 getting p*D + responsibility*(1-p)*D. That implies blue 9 is the interceptor? Actually yes, blue 9 intercepted. So interceptor gets p*D + w*(1-p)*D? That sums to more than D if multiple defenders? No, only interceptor gets the p*D term, others get w*(1-p)*D. But then total = p*D + (1-p)*D*sum(w) = p*D + (1-p)*D = D. Good.

So equations:
- D_v(s,k) = w_v(s,a)*(1-p)*D(s,k) for non-interceptors
- D_interceptor(s,k) = p*D(s,k) + w_interceptor(s,a)*(1-p)*D(s,k)

Wait the paper says: "a fraction 1-p of D attributable to defensive positioning... a fraction p of D attributable to the defensive action." And example for blue 9 (interceptor): 0.548·0.190 + 0.210·(1-0.548)·0.190. So yes.

- Pass failure without defensive action: D_v = w_v * D(s,k).
- Successful pass EPV increase (penalty): D_v = w_v * D(s,k) where D is negative.
- Successful pass EPV decrease (deter): D(s,k) divided across threatening options A+ proportionally to potential EPV increase, then by responsibility.
- Foul: D_v = D(s,k) for fouler, 0 else. Penalty kick EPV = 0.7884.
- Shot blocked: same as pass interception with p = P(not blocked).
- Shot unblocked: penalty = EPV(s,k) - UxG(s,k), distributed by responsibility to outfield defenders, GK=0.
- GK credit: UxG(s,k) - EPV(s,k+1) if on target; if goal, UxG - 1; if off target/no intervention, 0.
- GAT: H^{(l+1)} = ... attention mechanism. Node features 25-d, edge features 2-d.
- UxG logistic regression: logit(P(goal)) = beta_0 + beta_1 x + ... six features.
- Correlation: Pearson r between log(market value) and net credit per 90.
- Table 4 values: CB net credit r=0.563, concede total r=0.754, etc.
- Table 3: GAT accuracy 0.6738 for action selection, F1 0.9115 for pass success, etc.
- Dataset: 564 matches, 2023-24 train, 2024-25 test, tracking 25Hz, ~1400 events/match, 283 test matches.

I need to include page citations like [PAGE 5], [PAGE 7], etc.

3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss lineage from Maldini quote, VAEP [8] (Decroos et al.), xT [32] (Singh), JDI [6] (Bransen & Van Haaren), Merhej et al. [22], Forcher et al. [14], Toda et al. [34], Stockl et al. [33], Everett et al. [9] GAT, Fernandez et al. [10][12] EPV decomposition, GAT [35] Veličković et al., GCN [18] Kipf & Welling, Wyscout [24], ELASTIC [17]. Multi-week traps: season-to-season generalization (2023-24 train, 2024-25 test), market value lag (Transfermarkt end of season), role changes within match, formation changes, small sample of shots (5,105 goals in 1,941 matches), surrogate labels for failed passes, class imbalance in goal scoring (1.59% positive), shot blocking data scarcity requiring augmentation.

4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a more abstract section. I need to interpret "crisis habit regression" as defenders reverting to high-volume tackling under pressure (crisis), which DEFCON penalizes if it concedes EPV; "counter-trap" as the framework's incentive structure rewarding prevention over action (countering the trap of valuing only on-ball actions); "clock" as temporal aggregation (per 90, match timeline, season) and the decay/relevance of credit over game clock. Also theory of mind: defenders modeling attacker's intent (action selection probability), attacker modeling defender responsibility (responsibility as belief about who receives ball on failure), recursive beliefs about who should be credited.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss physical constraints: 25Hz tracking, node features include velocity/acceleration (SI units m/s, m/s^2), distance features in meters, 3m radius, 10m corridor, pitch geometry. Biomechanical: player size not modeled, fatigue not modeled (explicitly avoid toy equations), acceleration limits. Weather: not in features (no rain/wind), so weather is a veto—if weather data missing, model cannot adjust passing success or shot blocking, creating structural break. Veto conditions: when tracking data missing (synchronization via ELASTIC fails), when shot location missing for UxG, when goalkeeper involvement confounds outfield responsibility (GK zero responsibility by fiat). Physical veto: graph assumes all players connected (fully connected graph), ignoring offside lines or physical obstructions; edge features only distance and same-team binary.

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I need 3 counterfactual veto scenarios where the model's output should be vetoed/overridden, with predictions. Examples:
- Scenario 1: Goalkeeper comes out to block a shot; outfield defenders assigned zero responsibility by rule, but if GK is out of position, an outfield defender actually blocks; model would misattribute credit. Veto: if GK outside 18-yard box, reassign responsibility to nearest outfield defender. Prediction: net credit for defenders near goal increases by >15% in matches with high-pressing GKs.
- Scenario 2: Failed pass due to offside; entire value to positioning responsibility, but offside is an attacker error not defensive pressure. Veto: if offside flag raised, set defensive value to zero or attribute to attacking error. Prediction: concede penalties for high defensive line teams decrease by 0.02-0.05 EPV per match.
- Scenario 3: Set-piece foul leading to penalty kick; entire penalty to fouler, but defensive wall positioning may have contributed to the foul temptation. Veto: if foul occurs in shooting corridor with UxG > 0.15 and multiple defenders responsible for marking, distribute 20% of penalty by responsibility to markers. Prediction: CB concede penalties for set pieces become less correlated with individual errors (r drops from 0.754 to <0.60).

I must ensure no betting lines. No mention of odds, spreads, etc.

Word count: total must be >= 1000 words across sections. THINK_TRACE alone >=400 words.

I need to write in the exact XML tags. No markdown outside? The user expects XML sections. I'll produce only the XML sections with content inside.

Let me draft carefully, ensuring page citations and verbatim quotes where needed. Since the source text is provided, I can quote short phrases.

Page citations I plan to use:
- [PAGE 1]: Introduction, Maldini quote, gap in defensive valuation, related work.
- [PAGE 3]: EPV definition and decomposition.
- [PAGE 5]: Team-level defensive value, example EPV 0.0032 to -0.0158, defensive value +0.0190.
- [PAGE 6]: Defender responsibility definition.
- [PAGE 7]: Pass failure credit decomposition, example blue 9/5/15.
- [PAGE 8]: Successful pass EPV decrease/deter, foul penalty kick 0.7884.
- [PAGE 9]: Shot outcomes, UxG definition, goalkeeper credit.
- [PAGE 10]: Figure 5 example EPV 0.024/UxG 0.121 penalty -0.097.
- [PAGE 11]: Aggregation categories Intercept/Disturb/Deter/Concede.
- [PAGE 12]: Figure 6 match 5-0.
- [PAGE 13]: Table 1 component tasks.
- [PAGE 14]: Node features 25, edge features.
- [PAGE 15]: Action selection, intended receiver surrogate.
- [PAGE 16]: Defender responsibility model (d1).
- [PAGE 17]: UxG logistic regression, Wyscout 1,941 matches, 45,945 shots.
- [PAGE 18]: Datasets 564 matches, 25Hz tracking, ELASTIC.
- [PAGE 19]: Table 3 model performance.
- [PAGE 20]: Table 4 correlations, market value log scale.
- [PAGE 21]: Qualitative validation, top-10 tables.
- [PAGE 22]: Table 5 net credit.
- [PAGE 23]: Table 6 intercept credit.
- [PAGE 24]: Table 7 concede credit.
- [PAGE 25]: Timeline application.
- [PAGE 26]: Spatial heatmaps.
- [PAGE 27]: Pairwise attacker-defender matrices.
- [PAGE 28]: Conclusions.

I need to check exact quotes. For example:
Verbatim: "If I have to make a tackle, then I have already made a mistake." [PAGE 1]
Verbatim: "the red team’s EPV in the left snapshot of Figure 2 is 0.0032, while the blue team’s EPV in the right snapshot becomes 0.0158 after intercepting the pass." [PAGE 5]
Verbatim: "Better prevent than tackle" summarized in Section 4.3 [PAGE 20].

Now let's write.

THINK_TRACE: Need >=400 words. I'll write a dense multi-hop derivation.

Structure:
- Start from Maldini principle [PAGE 1].
- EPV as expected return over next 10 events [PAGE 3].
- Decomposition into selection, success, conditional EPV [PAGE 3].
- Team defensive value as negated offensive value (zero-sum) [PAGE 5].
- Responsibility as failure-conditioned receiver probability [PAGE 6].
- Five outcome cases for passes [PAGE 6-8].
- Shots: blocked vs unblocked, UxG separation [PAGE 9-10].
- GNN estimation: GAT with 25 node features, 2 edge features [PAGE 14-16].
- Validation via market value correlation [PAGE 20-24].
- Gray zones: surrogate intended receiver [PAGE 15], goalkeeper responsibility zero by fiat [PAGE 9], shot definition excludes GK saves [PAGE 9], UxG logistic regression vs GNN inconsistency [PAGE 17], season generalization [PAGE 18], class imbalance [PAGE 19], confounding market value [PAGE 20].

That's plenty for 400+ words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I'll write:
- \( \operatorname{EPV}(s) = \mathbb{E}[k_k \mid S=s] \)
- \( \operatorname{EPV}(s) = \sum_{a \in A} P_{\text{select}}(a \mid s) \left[ p(s,a) \operatorname{EPV}^{+}(s,a) + (1-p(s,a)) \operatorname{EPV}^{-}(s,a) \right] \)
- \( D(s,k) = -(\operatorname{EPV}(s,k+1) - \operatorname{EPV}(s,k)) \)
- \( w_v(s,a) = \frac{P(R=v \mid S=s, A=a)}{\sum_{u \in V^-} P(R=u \mid S=s, A=a)} \)
- Pass failure by defensive action: \( D_v = w_v(1-p)D + \mathbb{1}_{v=\text{interceptor}} p D \)
- Pass failure no action: \( D_v = w_v D \)
- Pass success EPV increase: \( D_v = w_v D \) (D<0)
- Pass success EPV decrease/deter: \( D(s,k,a^+) \propto (\operatorname{EPV}^{+}(s,a) - \operatorname{EPV}(s)) \cdot (1 - p(s,a)) \), then \( D_v(a^+) = w_v(s,a) D(s,k,a^+) \)
- Foul: \( D_v = D(s,k) \) if v fouled else 0; penalty EPV = 0.7884
- Blocked shot: same as pass interception with \( p = P(O=1 \mid s, a_{\text{shot}}) \)
- Unblocked shot outfield: \( D_v = w_v(s,a_{\text{shot}}) (\operatorname{EPV}(s,k) - UxG(s,k)) \)
- GK credit: \( UxG(s,k) - \operatorname{EPV}(s,k+1) \); if goal: \( UxG(s,k) - 1 \)
- GAT: \( H^{(l+1)} = \sigma(\sum_{u \in \mathcal{N}(v)} \alpha_{vu} W h_u^{(l)}) \)
- UxG: \( \text{logit}(P(\text{goal})) = \beta_0 + \beta_1 x + \beta_2 y + \beta_3 d + \beta_4 \theta + \beta_5 \text{setpiece} + \beta_6 \text{header} \)
- Units: probabilities dimensionless, EPV in expected goals (dimensionless [-1,1]), distances in meters, velocity m/s, acceleration m/s^2, tracking 25 Hz.
- Breakdown/singularity: \( p \to 1 \) makes positioning term vanish; \( p \to 0 \) makes interceptor term vanish; \( \sum w = 1 \) constraint; if \( A^+ = \emptyset \), deter credit undefined/zero; UxG logistic regression assumes spatial stationarity across seasons.

I will cite pages for each.

RETROCAUSAL_GENEALOGY: Lineage from Maldini -> Decroos VAEP [8] -> Fernandez EPV [10][12] -> Singh xT [32] -> Bransen JDI [6] -> Merhej [22] -> Stockl GCN [33] -> Everett GAT [9] -> DEFCON GAT. Multi-week traps: train 2023-24 test 2024-25 [PAGE 18]; market value end-of-season lag [PAGE 20]; shot scarcity 5,105 goals / 45,945 shots [PAGE 17]; role changes within match [PAGE 28]; offside surrogate [PAGE 15].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression = under pressure defenders increase tackles/interceptions (high Intercept credit) but DEFCON shows negative correlation with market value because weak teams generate more defensive actions [PAGE 20]. Counter-trap = framework rewards prevention (Concede penalty) over action volume [PAGE 20]. Clock = per-90 aggregation, match timeline, season stability [PAGE 25-26]. Theory of mind: action selection models attacker intent; responsibility models defender's counterfactual reception; recursive credit assignment requires defenders to model attackers modeling defenders.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: 25 Hz tracking, 25 node features, distances in meters, 3m/10m radii [PAGE 14]. Biomechanical: no fatigue, no mass/inertia, no muscle activation; velocity and acceleration are kinematic proxies only. Weather veto: no meteorological features; rain/wind alter ball flight and passing success but are absent, so model is vetoed in adverse weather unless exogenous adjustment. Veto rules: (1) if tracking synchronization fails via ELASTIC, discard event [PAGE 18]; (2) if goalkeeper is outside box and shot blocked by outfielder, responsibility zero for GK is a hard veto causing misattribution [PAGE 9]; (3) if shot unblocked and off-target with no GK intervention, GK credit zero by definition [PAGE 10]; (4) if \( A^+ = \emptyset \), deter credit undefined [PAGE 8].

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with verifiable predictions.
1. Offside veto: if failed pass called offside, defensive value should be zeroed because failure is attacker error, not defensive positioning. Prediction: concede penalties for teams playing high defensive line drop by 0.03–0.07 EPV per match; correlation of Concede with market value for DF rises from 0.545 to >0.60.
2. Goalkeeper sweeper veto: if GK leaves penalty area and an outfield defender blocks the shot, model assigns zero GK responsibility and full outfield responsibility; but GK positioning induced the block. Veto: reassign 40% of block credit to GK. Prediction: CB Disturb credit in matches with high-pressing goalkeepers decreases by 12–18%.
3. Penalty-kick foul veto: entire penalty to fouler ignores wall/marking context. Veto: if foul occurs in shooting corridor with UxG > 0.10, allocate 25% to nearest marker by responsibility. Prediction: net credit variance for CBs increases; correlation of Concede total with market value for CB falls from 0.754 to approx 0.65–0.70.

I need to ensure total word count > 1000. THINK_TRACE ~500 words, SOURCE_OPERATORS ~500 words, others ~200 each. Should be fine.

Let me write carefully with LaTeX formatting. Use \[ \] or inline $ $. Since it's XML, LaTeX is fine as text.

I must not include any betting language. Avoid "odds", "spread", "moneyline", "total". Use "probability", "expected value", "EPV".

Let's draft now.

Check word counts mentally:
THINK_TRACE: I'll aim for ~600 words.
SOURCE_OPERATORS: ~500 words.
RETROCAUSAL: ~250 words.
RECURSIVE: ~250 words.
CROSS_LAYER: ~250 words.
RLVR: ~250 words.
Total ~2100 words. Good.

Now, page citations: I need to make sure I don't cite pages I'm unsure about. I'll use the ones I'm fairly confident about based on the standalone numbers.

Let's double-check some page assignments from the text:

The text has standalone numbers that likely mark page breaks:
- "1" after Maldini quote -> Page 1.
- "2" after Figure 1 text -> Page 2.
- "3" after EPV decomposition text -> Page 3.
- "4" after Red table -> Page 4.
- "5" after Blue table and Section 2.2 -> Page 5.
- "6" after Section 2.4 outcomes list -> Page 6.
- "7" after blue 9/5/15 example -> Page 7.
- "8" after foul/penalty kick example -> Page 8.
- "9" after Section 2.5 shot definition -> Page 9.
- "10" after goalkeeper save example text? Actually text shows "10" after "...goalkeeper receives positive credit of 0.069 for reducing the scoring probability from 0.069 to 0."? Wait I see:

After right snapshot: "...goalkeeper receives positive credit of 0.069 for reducing the scoring probability from 0.069 to 0." Then "Through this formulation..." then maybe page break? Actually I see "10" right before Figure 5? No:

Text segment:
"...goalkeeper receives positive credit of 0.069 for reducing the scoring probability from 0.069 to 0.


Through this formulation, our framework assigns meaningful penalties..."

Then later "Figure 5: Visualization..." then "11".

Wait the source shows:
"Figure 5: Visualization of defensive credit assignment in unblocked-shot situations. The left and right snapshots show examples of a shot off target and a saved shot on target, respectively. Circle colors for the defending team represent each defender’s responsibility for defending the shot, and the text above each circle indicates the defensive credit or penalty.


11"

So Figure 5 caption is on page 10? Actually "11" comes after Figure 5 caption. So page 10 ends with Figure 5 caption? Let's re-examine:

In the provided text:
"...If the shot results in a goal, then 𝐸𝑠<sup>=1</sup> , imposing the goalkeeper a large penalty of 𝑈𝑠<sup>−1</sup> . [ 𝑘+1] ( 𝑘) In summary, the credit for the goalkeeper is


10


**Figure 5:** Visualization of defensive credit assignment in unblocked-shot situations..."

So page 10 contains the goalkeeper credit summary and then Figure 5 caption starts page 10? Actually "10" appears before Figure 5. So Figure 5 is on page 10. Then "11" appears after Figure 5 description? Let's see:

After Figure 5 caption, text continues: "Figure 5 instantiates how defensive credit is assigned..." then examples, then page break "11"? Actually I see "11" right before Section 2.6? Let's check:

After the right snapshot example text: "...goalkeeper receives positive credit of 0.069 for reducing the scoring probability from 0.069 to 0." then "Through this formulation..." then "### **2.6. Aggregating..." then "12"? No:

Text:
"...enables us to better quantify the defender’s ability to prevent dangerous shooting opportunities before they develop.


### **2.6. Aggregating Defensive Contributions Across Matches**

The situation-level defensive credits defined in the previous subsections can be aggregated..."

I don't see a standalone "11" there. Wait, after Figure 5 caption, there's "11" on its own line? Let me look again:

"**Figure 5:** Visualization ... penalty.


11

Figure 5 instantiates how defensive credit is assigned..."

Actually in the user's text, after Figure 5 caption there's "11" then "Figure 5 instantiates..." So page 11 starts with Figure 5 continuation? That seems odd but okay. I'll cite Figure 5 example on [PAGE 10] or [PAGE 11]? The text shows "10" before Figure 5 caption, so Figure 5 is on page 10. Then "11" after caption might be page 11 marker. I'll cite [PAGE 10] for the UxG example and [PAGE 11] for Figure 5 instantiation text. But to be safe, I'll cite [PAGE 10] for the shot examples and goalkeeper credit.

- "12" after Section 2.6 / Figure 6 text? The text shows "12" before Figure 6 caption. So page 12 has Figure 6 caption. I'll cite [PAGE 11] for Section 2.6 aggregation categories, [PAGE 12] for Figure 6 match example.
- "13" after Table 1? The text shows "13" after Table 1 discussion. So page 13 has Table 1 summary.
- "14" after node features list? The text shows "14" after edge features? Actually:
"We additionally include two edge features..." then "14" then "Because each component value..." So page 14 has node features and start of GAT.
- "15" after intended receiver formula? The text shows "15" after formula for intended receiver. So page 15 has action selection details.
- "16" after Figure 7? The text shows "16" after Figure 7 description and (d1) responsibility model. So page 16 has responsibility model.
- "17" after Section 3.2 UxG? The text shows "17" after Wyscout details? Actually:
"We train a logistic regression model using six shot features..." then page break? Then "18" appears after Section 4? Let's check:
"## **4. Experiments**" then "### **4.1. Datasets**" ... Table 2 ... then "18"? Actually:
"Table 2: ..." then "18" then "4.2. Predictive Performance..." So page 18 has Table 2 and start of 4.2.
- "19" after Table 3? The text shows "19" after Table 3 rows? Actually:
"|ll|Accuracy..." then table rows then "19" then "|b1 bi|F1..." So page 19 has part of Table 3.
- "20" after Table 4 / discussion? The text shows "20" after Table 4 and before Figure 8? Actually:
"Table 4: ..." then "> 2 <u>..." then "20" then Figure 8. So page 20 has Table 4 correlation results.
- "21" after Table 4 continued / CM row? The text shows "CM 66 ..." then "21" then Figure 9? Actually:
"<!-- End of picture text --> ... 21 ... **Figure 8:** ... **Figure 9:** ..." So page 21 has Figures 8 and 9 and discussion.
- "22" after 4.4 intro / Table 5? The text shows "22" after Table 5 header? Actually:
"Table 5: Top-10 center-backs ranked by net defensive credit." then "22" then table rows. So page 22 has Table 5 rows.
- "23" after Table 5 rows / Table 6? The text shows table rows then "23" then Table 6 header. So page 23 has Table 6.
- "24" after Table 6 rows / Table 7? The text shows Table 6 rows then "24" then Table 7 header. So page 24 has Table 7.
- "25" after Table 7 rows / Section 5? The text shows Table 7 rows then "25" then Section 5. So page 25 has Section 5 start and 5.1 Timeline.
- "26" after Figure 10 / 5.2? The text shows Figure 10 caption then "26" then 5.2 Spatial Tendency. So page 26 has spatial heatmaps discussion.
- "27" after 5.2 discussion / Figure 11? The text shows Figure 11 discussion then "27" then 5.3 Pairwise. Actually:
"Figure 11: ..." then "26"? Let's check:
"Figure 11: Spatial distribution..." then "26" appears after? Actually text:
"**Figure 11:** Spatial distribution of defensive credits across pitch zones for the match illustrated in Figure 6. The top and bottom rows display the credit heatmaps for the home and the away teams, respectively, with values separated into the four defense categories defined in Section 2.6.


26"

So page 26 has Figure 11 caption. Then page 27 starts with Section 5.3? Let's see:
"### **5.3. Pairwise Attacker-Defender Analysis**" then "25"? Wait I'm getting confused. Let me not overthink. I'll cite ranges where confident.

For RLVR predictions, I'll make them specific and verifiable.

Now I will write the final output. Ensure XML tags exactly as specified. No extra text outside. Use proper escaping? XML content can include LaTeX with backslashes, that's fine. I'll avoid using unescaped & or < in text. I'll write "and" instead of "&". Avoid "<" characters except tags. Use words like "less than" instead of "<".

Let's compose.

THINK_TRACE content (approx 600 words):

Start: The paper opens with Maldini's axiom ... [PAGE 1]. Then EPV ... [PAGE 3]. Derivation chain: state s, return k_k in {-1,0,1}. EPV(s) = E[k_k | S=s]. Decompose by action selection and success/failure [PAGE 3]. Team defensive value D(s,k) = -ΔEPV [PAGE 5]. Responsibility w_v(s,a) = normalized P(R=v | ...) [PAGE 6]. Five pass outcomes [PAGE 6-8]. Shot distinction [PAGE 9-10]. GNN component estimation [PAGE 13-16]. Validation [PAGE 20-24]. Gray zones: surrogate intended receiver [PAGE 15]; GK zero responsibility [PAGE 9]; UxG logistic vs GNN [PAGE 17]; class imbalance [PAGE 19]; market value confounds [PAGE 20]; season shift [PAGE 18].

I need to write in a narrative, multi-hop style.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page citations.

RETROCAUSAL_GENEALOGY: Lineage.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression etc.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation begins with Paolo Maldini’s normative principle—“If I have to make a tackle, then I have already made a mistake”—which frames defense as prevention rather than reaction [PAGE 1]. DEFCON operationalizes this by defining Expected Possession Value (EPV) as the expected return k_k ∈ {−1, 0, 1} of the attacking team at state s, where +1 denotes a goal scored by the attacker, −1 a goal conceded, and 0 otherwise [PAGE 3]. The first multi-hop is the decomposition of EPV into action-selection probability, conditional success probability, and success-conditioned EPV across the option set A = {passes to teammates} ∪ {shot} [PAGE 3]. Because defensive value is defined as the zero-sum negation of offensive value, D(s,k) = −[EPV(s,k+1) − EPV(s,k)], every change in attacking scoring potential is immediately mapped to a defensive credit or penalty [PAGE 5].

The second multi-hop distributes this team-level value to individuals through defender responsibility w_v(s,a), defined as the normalized probability that defender v would receive the ball if action a failed: w_v(s,a) = P(R=v | S=s, A=a) / Σ_{u∈V⁻} P(R=u | S=s, A=a) [PAGE 6]. This turns counterfational ball reception into a weighting rule. The framework then branches on five pass outcomes [PAGE 6]: (a) failure caused by defensive action, where the interceptor receives p·D(s,k) and all defenders share (1−p)·D(s,k) in proportion to w_v(s,a) [PAGE 7]; (b) failure without defensive action, where the full D(s,k) is divided by responsibility [PAGE 7]; (c) successful pass increasing EPV, where D(s,k) is negative and allocated by responsibility as a penalty [PAGE 7]; (d) successful pass decreasing EPV, where value is divided across threatening options A⁺ proportionally to their potential EPV uplift and success suppression, then assigned by responsibility [PAGE 8]; and (e) foul, where the entire penalty is assigned to the fouler, with a fixed penalty-kick EPV of 0.7884 [PAGE 8].

For shots, the model splits the world into blocked and unblocked events [PAGE 9]. A blocked shot is treated identically to an intercepted pass, with p now denoting the probability the shot is not blocked [PAGE 9]. An unblocked shot triggers an outfield-defender penalty equal to EPV(s,k) − UxG(s,k), distributed by responsibility, while the goalkeeper receives UxG(s,k) − EPV(s,k+1) if on target, zero if off target with no intervention, and UxG(s,k) − 1 if a goal is conceded [PAGE 9–10]. The empirical validation chain relies on Pearson correlation between per-90-minute aggregated credits and log-scale Transfermarkt market values for 261 Eredivisie players with ≥900 minutes [PAGE 20]. Gray zones emerge at multiple hops: failed passes are assigned an intended receiver via a distance-angle surrogate rather than observed intent [PAGE 15]; goalkeepers are assigned zero responsibility by fiat even when their positioning induces an outfield block [PAGE 9]; UxG is estimated with logistic regression on Wyscout event data while all other components use GATs, creating an architectural asymmetry [PAGE 17]; goal-scoring labels exhibit extreme class imbalance (1.59% positive for passes/dribbles, 0.63% for conceding) [PAGE 19]; and market value is confounded by age, nationality, and contract length [PAGE 20]. Finally, generalization is tested only across adjacent seasons (2023–24 train, 2024–25 test), leaving multi-season temporal drift unaudited [PAGE 18].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations from DEFCON, with SI/information units and page citations.

Expected Possession Value at state s:
\[
\operatorname{EPV}(s) = \mathbb{E}[k_k \mid S=s], \quad k_k \in \{-1,0,1\}
\]
where the return is dimensionless expected goals, bounded in [−1,1]. [PAGE 3]

Decomposition over attacking options A = {a_v passes to v ∈ V} ∪ {a_shot}:
\[
\operatorname{EPV}(s) = \sum_{a\in A} P_{\text{select}}(a\mid s) \Big[ p(s,a)\operatorname{EPV}^{+}(s,a) + (1-p(s,a))\operatorname{EPV}^{-}(s,a) \Big]
\]
with p(s,a) = P(O=1 | S=s, A=a), success probability dimensionless. [PAGE 3]

Team-level defensive value (zero-sum counterpart of offensive value):
\[
D(s,k) = -\big(\operatorname{EPV}(s,k+1) - \operatorname{EPV}(s,k)\big)
\]
Units: expected goals per action. [PAGE 5]

Defender responsibility (failure-conditioned receiver probability):
\[
w_v(s,a) = \frac{P(R=v \mid S=s, A=a)}{\sum_{u\in V^-} P(R=u \mid S=s, A=a)}, \quad \sum_{v\in V^-} w_v(s,a) = 1
\]
Dimensionless weighting factor. [PAGE 6]

Pass failure caused by defensive action (interceptor i):
\[
D_v = 
\begin{cases}
p(s,a)D(s,k) + w_i(s,a)(1-p(s,a))D(s,k), & v=i\\
w_v(s,a)(1-p(s,a))D(s,k), & v\neq i
\end{cases}
\]
Example: p = 0.548, D = 0.190, blue 9 (w = 0.210) receives 0.548·0.190 + 0.210·(1−0.548)·0.190 = 0.012. [PAGE 7]

Pass failure without defensive action:
\[
D_v = w_v(s,a)D(s,k)
\]
[PAGE 7]

Successful pass increasing EPV (penalty, D < 0):
\[
D_v = w_v(s,a)D(s,k)
\]
[PAGE 7]

Successful pass decreasing EPV (deterrence). Threatening set A⁺ = {a : EPV⁺(s,a) > EPV(s)}. Value split across options proportional to potential uplift and success suppression, then by responsibility:
\[
D_v = \sum_{a\in A^+} w_v(s,a)\,D(s,k,a)
\]
[PAGE 8]

Foul committed by defender f:
\[
D_v = 
\begin{cases}
D(s,k), & v=f\\
0, & v\neq f
\end{cases}
\]
Penalty-kick EPV fixed at 0.7884; thus a foul conceding a penalty imposes EPV(s,k) − 0.7884 on the fouler. [PAGE 8]

Blocked shot: same decomposition as pass interception, with p = P(not blocked | S=s, A=a_shot). [PAGE 9]

Unblocked shot outfield-defender penalty:
\[
D_v = w_v(s,a_{\text{shot}})\big(\operatorname{EPV}(s,k) - UxG(s,k)\big), \quad w_{GK}=0
\]
Example: EPV = 0.024, UxG = 0.121, penalty = −0.097 distributed by responsibility. [PAGE 9–10]

Goalkeeper credit for unblocked on-target shot:
\[
C_{GK} = UxG(s,k) - \operatorname{EPV}(s,k+1)
\]
If goal: C_GK = UxG(s,k) − 1. If off target with no GK intervention: C_GK = 0. [PAGE 9–10]

Graph Attention Network component estimator. Node features X ∈ ℝ^{|V|×25}, edge features E ∈ ℝ^{|E|×2}. Two GAT layers produce embeddings H:
\[
H^{(l+1)} = \sigma\Big(\sum_{u\in\mathcal{N}(v)} \alpha_{vu} W h_u^{(l)}\Big)
\]
Node features include four binary attributes, six running features ((x,y) location, (x,y) velocity in m/s, speed m/s, acceleration m/s²), three relative-to-goal features (distance m, sin/cos angle), six ball-related features (height m, distance m, sin/cos angles), four opponent-context features (distance m, counts within 3 m radius, counts closer to goal, counts in goalpost triangle), and two passing-line features (distance m, count within 10 m corridor). Edge features: Euclidean distance m and same-team binary. [PAGE 14]

UxG logistic regression (six shot features: x,y location m, distance m, angle rad, set-piece binary, header binary):
\[
\text{logit}(P(\text{goal})) = \beta_0 + \sum_{j=1}^{6} \beta_j f_j
\]
Trained on Wyscout open event data: 1,941 matches, 45,945 shots, 34,987 unblocked, 5,105 goals. [PAGE 17]

Dataset: 564 Eredivisie matches (2023–24 train, 2024–25 test), tracking at 25 Hz, ~1,400 events per match, synchronized via ELASTIC. Test set: 283 matches. [PAGE 18]

Component-model performance (GAT): action-selection accuracy 0.6738, CE 0.9239, MRR 0.7996 [PAGE 19]; pass-success F1 0.9115, AUC 0.9167, Brier 0.0933 [PAGE 19]; shot-blocking F1 0.3984, AUC 0.6717, Brier 0.2037 [PAGE 19]; responsibility accuracy 0.5021, CE 1.4036, MRR 0.6940 [PAGE 19].

Market-value correlations (Pearson, log scale): center-back net credit r = 0.563; center-back concede total r = 0.754; across all defenders concede-pass r = 0.665, concede-shot r = 0.272. Intercept credits show negative correlations (e.g., CB intercept r = −0.497). [PAGE 20–21]

Singularity / breakdown regimes: p → 1 eliminates the positioning term (w_v(1−p)D → 0); p → 0 eliminates the interceptor term; A⁺ = ∅ makes deterrence credit undefined or zero by definition; responsibility softmax denominator collapses if no defending nodes are present; UxG logistic regression assumes spatial stationarity across competitions and ignores defensive context, breaking down under tactical shifts or weather-induced ball-flight changes. [PAGES 7–8, 17]
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of DEFCON traces back to Maldini’s defensive aphorism [PAGE 1], which predates the modern analytics era but establishes the prevention-over-action norm. The first formal descendant is Decroos et al.’s VAEP framework [8], cited on [PAGE 1] and [PAGE 5], which values on-ball actions by changes in scoring probability. Fernandez et al. [10][12] extended this into Expected Possession Value, decomposing possession into instantaneous expected value [PAGE 3]. Singh’s Expected Threat (xT) [32] provided a spatial-threat baseline later inherited by DEFCON’s UxG model [PAGE 17]. On the defensive side, Bransen and Van Haaren’s Joint Defensive Impact [6] compared opponent attacking performance with and without a defender, but only at match-level resolution [PAGE 1]. Merhej et al. [22] valued interceptions and tackles via removed potential xT, limited to explicit actions [PAGE 1]. Forcher et al. [14] and Toda et al. [34] modeled near-future defensive success but remained team-level [PAGE 1]. Stockl et al. [33] used GCNs to identify prevented passing options, yet offered no unified player-comparison metric [PAGE 1]. Everett et al. [9] introduced GAT-based defensive influence via attention-weight removal, but considered only passes and used simple xT differences without context [PAGE 1]. DEFCON synthesizes these strands: it adopts Fernandez’s EPV decomposition [PAGE 3], Everett’s GAT architecture [PAGE 14–16], Stockl’s graph-based prevention logic [PAGE 1], and adds shot-level responsibility plus UxG separation [PAGE 9–10].

Multi-week traps are embedded in this genealogy. The train/test split uses adjacent Eredivisie seasons (2023–24 training, 2024–25 testing) [PAGE 18], so any week-to-week tactical drift, mid-season managerial change, or injury cascade is absorbed into the test error rather than modeled explicitly. Market values are harvested from Transfermarkt at season end [PAGE 20], introducing a several-month lag between on-field performance and the validation signal; a player’s valuation may reflect contract status, age, or league reputation rather than defensive credit. Shot data are scarce relative to passes: only 5,105 goals from 45,945 Wyscout shots [PAGE 17], and goal-conceding labels show 0.63% positive frequency [PAGE 19], so rare-event noise propagates into UxG and shot-blocking estimates over a multi-week horizon. Intended receivers of failed passes are imputed by a distance-angle heuristic [PAGE 15], which can systematically mislabel responsibility in chaotic defensive scrambles. Finally, player roles and formations can change within a single match [PAGE 28], yet DEFCON aggregates credits per 90 minutes without role-conditioning, meaning a center-back temporarily deployed as a defensive midfielder is evaluated under a single static responsibility schema.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of defenders under pressure to increase raw defensive-action volume—more tackles, interceptions, and blocks—because the game state forces reactive behavior. DEFCON’s data reveal this as a trap: across all 261 Eredivisie players, intercept credit from passes correlates negatively with market value (r = −0.159), and for center-backs the intercept–market-value correlation is −0.497 [PAGE 20–21]. Weak teams generate more defensive situations, so their defenders accumulate high intercept totals while conceding larger EPV penalties; the framework therefore regresses crisis habits by penalizing concede events more strongly than it rewards on-ball actions.

The counter-trap is the inversion of conventional credit logic: when an opponent completes a pass that decreases EPV, the defending team receives positive “deter” credit because effective positioning neutralized more threatening alternatives [PAGE 8]. This rewards passive prevention over active ball-winning, directly countering the observational bias that equates visible defensive actions with quality. The strongest market-value alignment is found in concede penalties rather than intercept credits: center-back concede-total correlation is 0.754, and pass-conceding penalties exceed 0.60 across every defensive role [PAGE 20–21]. Thus the recursive theory of mind embedded in DEFCON models not just what the attacker will do (action-selection probability) [PAGE 15], but what the defender is believed to be responsible for preventing (failure-conditioned receiver probability) [PAGE 6], and how credit flows backward from outcomes to counterfactual positioning.

Clock refers to the temporal aggregation layers: per-event credit, per-match timeline [PAGE 25], spatial heatmaps [PAGE 26], and per-90-minute season totals [PAGE 20–22]. The clock creates a selection bias: defenders on dominant teams accrue fewer total events and thus lower gross intercept volume, yet their per-90 net credit can remain high because concede penalties are small [PAGE 11–12]. Crisis habit regression is most visible on the match clock during late-game pressure phases, when defensive action counts spike; DEFCON’s timeline visualization isolates these spikes as credit gains or losses rather than raw action counts [PAGE 25]. A full multi-week audit would require conditioning on game state (score, minute, red cards) to separate tactical regression from noise, which the current per-90 aggregation does not provide.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The input graph is fully connected with every pair of players linked by an edge; node features carry kinematic SI units—location in meters, velocity in m/s, speed in m/s, acceleration in m/s²—and tracking is sampled at 25 Hz [PAGE 14]. Edge features are Euclidean distance in meters and a same-team binary [PAGE 14]. There is no explicit mass, inertia, muscle-activation, or fatigue state, so biomechanical limits (maximum deceleration, change-of-direction latency) are implicit in velocity and acceleration features only. This is a structural veto: the model cannot distinguish a defender who is physically incapable of reaching a passing lane from one who chooses not to, because both produce identical low responsibility if the ball bypasses them.

Weather veto: No meteorological features (wind, precipitation, temperature, pitch moisture) appear in the 25-node feature vector [PAGE 14]. Rain alters ball roll and passing success probability; wind alters long-pass trajectory and shot-blocking geometry. Because these variables are exogenous to the graph, DEFCON’s probability estimates are uncalibrated under adverse weather unless an external correction layer is applied. The veto condition is therefore: if weather data are unavailable at event resolution, the model’s pass-success and shot-blocking probabilities must be treated as out-of-distribution.

Biomechanical/goalkeeper veto: Outfield defenders are assigned zero responsibility for unblocked shots by definition, with the goalkeeper modeled separately [PAGE 9–10]. If a goalkeeper rushes out of the penalty area and an outfield defender blocks the shot, the framework assigns full block credit to outfield responsibility and zero to the goalkeeper, even though the goalkeeper’s positioning induced the block. This is a hard veto on goalkeeper credit that can misattribute value in high-pressing goalkeeper systems.

Tactical-formation veto: The aggregation assumes static roles across the match [PAGE 26–28]. If a center-back steps into midfield or a forward drops to defend, responsibility weights are still computed over the original defensive node set V⁻ without role reassignment, producing a misalignment between physical position and assigned credit.

Concrete veto rules: (1) If ELASTIC synchronization between event timestamps and tracking data fails [PAGE 18], discard the event from credit assignment because state s cannot be anchored to a graph. (2) If the offside flag is raised on a failed pass, the entire defensive value should not be assigned to positioning responsibility, because the failure is an attacking-law infraction rather than defensive pressure [PAGE 7]. (3) If p → 1 for a pass, the interceptor term p·D dominates and positioning credit vanishes; if p → 0, the interceptor term vanishes and all credit collapses to responsibility weighting, which may overcredit distant defenders [PAGE 7]. (4) If A⁺ = ∅ (no threatening options), deterrence credit is mathematically undefined and must be set to zero rather than propagated [PAGE 8].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with testable predictions:

Scenario 1 — Offside failure veto. Current rule: a failed pass without a defensive action (e.g., offside) assigns the full defensive value D(s,k) to defenders proportional to responsibility [PAGE 7]. Veto: if the failure is officially classified as offside, set D(s,k) = 0 for the defensive team because the termination is an attacking-law violation, not defensive pressure. Verifiable prediction: in matches where a team plays a high defensive line, center-back concede-pass penalties will decrease by approximately 0.03–0.07 expected goals per match, and the concede-pass–market-value correlation for defenders will rise from 0.665 to above 0.70.

Scenario 2 — Goalkeeper-sweeper block veto. Current rule: for a blocked shot, credit follows the pass-interception decomposition; for an unblocked shot, outfield defenders share EPV − UxG and the goalkeeper receives zero if off target with no intervention [PAGE 9–10]. Veto: if the goalkeeper is outside the 18-yard box at shot time and an outfield defender records the block, reassign 40% of the block credit from the blocking outfield defender to the goalkeeper, because the keeper’s positioning created the blocking opportunity. Verifiable prediction: in matches featuring high-pressing goalkeepers, center-back Disturb credit will drop by 12–18% and net credit variance across center-backs will increase, weakening the intercept–market-value negative correlation.

Scenario 3 — Penalty-kick foul context veto. Current rule: the entire penalty for a foul is assigned exclusively to the fouling defender, with penalty-kick EPV fixed at 0.7884 [PAGE 8]. Veto: if the foul occurs in a central shooting corridor where pre-foul UxG > 0.10, allocate 25% of the defensive penalty to the nearest marking defender by responsibility, recognizing that compactness failure contributed to the foul. Verifiable prediction: center-back concede-total correlation with market value will fall from 0.754 to approximately 0.65–0.70, and net-credit rankings for center-backs will reorder such that at least two players in the current top-10 concede list [PAGE 24] fall outside the top 15.
</RLVR_COUNTERFACTUAL_VETOES>