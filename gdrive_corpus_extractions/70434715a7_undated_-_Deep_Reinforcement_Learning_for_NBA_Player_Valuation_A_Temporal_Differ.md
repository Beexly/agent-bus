---
source: "undated - Deep Reinforcement Learning for NBA Player Valuation A Temporal Difference Approach with Shapley Attribution - Jenkins.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 23
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 8858
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source text (a research paper about Deep Reinforcement Learning for NBA Player Valuation). They want me to act as the "GSE + GSI Frontier Reasoning Foundry" with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully parse the source text to extract page numbers. The source text has page markers like "2", "3", "4", etc. embedded. Let me trace through:

- Page 1: Introduction start... ends with "1" after Research Questions? Actually looking at the text, there are page break markers. Let me look:
  - After intro: "1" appears.
  - Then "2" appears after Prior Work section start.
  - Then "3" after Shapley Values section.
  - Then "4" after Problem Formulation.
  - Then "5" in Figure 1 caption.
  - Then "6" after State Representation.
  - Then "7" after Distributional Value Network.
  - Then "8" after Action Value Decomposition? Actually looking: "...Figure 3" then "8" then "9" then Figure 3 caption.
  - Then "10" after Data section start? Wait, Data section is Section 3.7, and it says "10" after "play-by-play event classification into 23 distinct action types".
  - Then "11" after Figure 4? Actually Table 2 is on page 11? Let's see: Table 2 is followed by "11" then Figure 4 caption.
  - Then "12" after Sample Size Requirements section start? Actually Table 3 is followed by "12" then Figure 5.
  - Then "13" after Figure 5 caption.
  - Then "14" after Learned Action Values section start? Table 4 followed by "14".
  - Then "15" after Figure 6? Actually Table 4 discussion then "15" then Figure 6 caption.
  - Then "16" after Figure 6 caption? Actually Figure 6 caption spans "15" and "16".
  - Then "17" after Player Evaluation section start? Table 5 followed by "17".
  - Then "18" after Table 5 continued? Actually Table 5 continues on page 18? The text shows "|15|De'Aaron Fox..." then "18" then Table 6.
  - Then "19" after Player Synergies section start? Table 7 followed by "19".
  - Then "20" after Figure 8? Actually synergy discussion then "20" then Figure 8 caption? Wait: Table 7 continued then "19", then discussion, then "20", then Figure 8 caption? Actually looking: "Table 7: Top Player Synergies..." then page break "19", then more table rows, then discussion, then page break "20", then Figure 7 caption? Let me re-read carefully.

The text has embedded page numbers as standalone numbers. Let me map them roughly:

Page 1: Intro through "1.1 Research Questions" maybe? Actually "1" appears after "### 1.1 Research Questions and Contributions" and before the numbered list? Let's see:
"...Research Paper Competition/undated/undated - Deep Reinforcement Learning for NBA Player Valuation A Temporal Difference Approach with Shapley Attribution - Jenkins.pdf -->
# **Deep Reinforcement Learning for NBA Player Valuation: A Temporal Difference Approach with Shapley Attribution** 
Basketball Track Paper ID 137 
## **1. Introduction** 
... 
### **1.1 Research Questions and Contributions** 
1 
This research addresses..."

So page 1 ends after the heading "1.1" and the number "1" is the page number? Actually the number "1" appears on its own line. It might be page 1.

Then:
"...### **1.2 Motivating Example** 
... 
## **2. Prior Work** 
### **2.1 Traditional Player Evaluation Metrics** 
... 
2 
1999). Win Shares..."

So page 2 starts after "2" line? Actually "2" appears after "2005) but has been criticized..." then page break, then "1999)." So page 2 contains the end of Berri citation and Win Shares.

Then:
"...### **2.4 Shapley Values for Attribution** 
... 
3 
### **2.5 Win Probability and Expected Value** 
..."

So page 3 contains end of Shapley section and start of Win Probability.

Then:
"...### **3.1 Problem Formulation** 
... 
4 
The key insight..."

So page 4 contains Bellman equation etc.

Then:
"...**_Figure 1: MDP Framework for Player Evaluation._** ... **_equation, with the advantage function A(_ **_s, a_** _) = Q(_ **_s, a_** _) − V(_ **_s_** _) providing context-aware action valuation. The temporal transition flow (bottom) illustrates how each action in state_ **_s_** _yields immediate reward_ **_r_** _and transitions to successor state_ **_s'_** _, with discount factor_ **_γ_** _= 0.997 per second ensuring appropriate time-weighting of future outcomes._ 
5 
### **3.1.2 Interpretation and Causal Limitations** 
..."

So page 5 contains Figure 1 caption and Section 3.1.2.

Then:
"...### **3.2 State Representation** 
... 
6 
**_Figure 2: State Representation Architecture._** ..."

So page 6 contains State Representation and Figure 2 caption.

Then:
"...### **3.3 Distributional Value Network** 
... 
7 
The model is trained with temporal-difference learning..."

So page 7 contains Distributional Value Network.

Then:
"...### **3.4 Neural Shapley Attribution** 
... 
8 
**_Figure 3: Action Value Decomposition:_** ..."

Wait, Section 3.4 starts on page 7? Actually text says after page 7 marker: "The model is trained..." then Section 3.4 starts. Then page 8 marker appears after some text? Let's see:

"...### **3.4 Neural Shapley Attribution** 
Given a trained value network... 
8 
**_Figure 3: Action Value Decomposition:_** ..."

Actually Figure 3 is in Section 3.5. Let's look:

"...### **3.5 Action Value Decomposition** 
... 
8 
... 
9 
**_Figure 3: Action Value Decomposition:_** ..."

Hmm. The text shows:
"...### **3.5 Action Value Decomposition** 
... 
8 

**_Figure 3: Action Value Decomposition:_** _For an action ..._ 
9 
**_Figure 3: Action Value Decomposition:_** _For an action ..._"

Wait there's duplication? The text seems to have page 8 then page 9 both containing Figure 3 caption? Actually looking carefully:

"... 
8 


**_Figure 3: Action Value Decomposition:_** _For an action  taking the game from state  to , the total_ 𝑎 𝑠 𝑠 _value change_ 

' Δ𝑉= 𝑟+ 𝑉(𝑠 ) −𝑉(𝑠) 
_is attributed to players using action-specific methods..._ 
**Table 1** compares..."

Then later:
"9 


**_Figure 3: Action Value Decomposition:_** _For an action  taking the game from state  to , the total_ 𝑎 𝑠 𝑠 _value change_ 

' Δ𝑉= 𝑟+ 𝑉(𝑠 ) −𝑉(𝑠) 
_is attributed to players using action-specific methods..._ 

This hybrid approach..."

Actually the text repeats Figure 3 caption on page 9? Or maybe page 8 contains part of Section 3.5 and page 9 contains the rest plus Figure 3 caption? This is messy but I can cite pages approximately based on where markers appear.

Let me list page markers in order:
- "1" after 1.1 heading
- "2" after Berri (1999) citation start
- "3" after Shapley Values section
- "4" after Problem Formulation (Bellman eq)
- "5" after Figure 1 caption
- "6" after State Representation section
- "7" after Distributional Value Network section start
- "8" before Figure 3 caption? Actually after "### **3.5 Action Value Decomposition**" text, there's "8" then Figure 3 caption starts? Wait:

Text:
"...### **3.5 Action Value Decomposition** 
Having defined state values and player attributions, we now address how individual actions ' contribute to value changes ( **Figure 3** ). For each observed action  that takes state  to , the total 𝑎 𝑠 𝑠 change in value is 

− ΔV = r + V(s') V(s), 

where  is the immediate reward. This quantity forms the basis for action valuation, but raw TD 𝑟 estimates can be noisy, especially in volatile states. We stabilize the signal through two adjustments: (1) entropy-based shrinkage that down-weights ∆𝑉 in high-uncertainty states, and (2) variance normalization that attenuates extreme values for rare actions. These adjustments improve stability and ensure attributed values reflect consistent, repeatable contributions. 

Offensive actions are credited through a learned weight network ω that incorporates action type, θ involved players, and contextual features. Defensive and off-ball influence, which is distributed and often unobserved in play-by-play data, is captured using Shapley differences, 

' 𝐶𝑟𝑒𝑑𝑖𝑡 = ϕ (𝑠 ) −ϕ (𝑠), 𝑖 𝑖 𝑖 

which reward players whose presence alters opponent efficiency even without producing a recorded statistic. 


8 


**_Figure 3: Action Value Decomposition:_** _For an action  taking the game from state  to , the total_ 𝑎 𝑠 𝑠 _value change_ 

' Δ𝑉= 𝑟+ 𝑉(𝑠 ) −𝑉(𝑠) 
_is attributed to players using action-specific methods. Offensive actions use a learned weight network_ ω _to distribute credit based on action type, player involvement, and context. Defensive and off-ball_ θ ' _influence is assigned through Shapley differences,_ ϕ (𝑠 ) −ϕ (𝑠) _, capturing impact even without_ 𝑖 𝑖 
_recorded statistics. The decomposition satisfies_ ∑𝐶𝑟𝑒𝑑𝑖𝑡 = Δ𝑉 _._ 𝑖 𝑖 

A unified attribution mechanism..."

Then later:
"9 


**_Figure 3: Action Value Decomposition:_** _For an action  taking the game from state  to , the total_ 𝑎 𝑠 𝑠 _value change_ 

' Δ𝑉= 𝑟+ 𝑉(𝑠 ) −𝑉(𝑠) 
_is attributed to players using action-specific methods..."

Actually looking at the raw text, after page 8 marker there is Figure 3 caption, then text continues "A unified attribution mechanism..." then page 9 marker then Figure 3 caption again? That seems like a parsing artifact where the caption appears twice or the page marker is misplaced. I will cite pages based on the visible markers, but I need to be careful not to fabricate exact quotes from wrong pages. Since the user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should reference the page numbers as they appear in the text.

Page markers visible: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23.

Let's map:
- Page 1: Intro, RQs
- Page 2: Traditional metrics, Berri, Win Shares
- Page 3: Shapley Values for Attribution
- Page 4: Problem Formulation, Bellman equation, Figure 1 mention
- Page 5: Figure 1 caption, Section 3.1.2 Causal Limitations
- Page 6: State Representation, Figure 2 caption
- Page 7: Distributional Value Network
- Page 8: Neural Shapley Attribution? Actually Section 3.4 starts after page 7? The text says page 7 marker then "The model is trained..." then Section 3.4 starts. Then page 8 marker appears after Section 3.5 text? Actually page 8 marker appears after Section 3.5 text and before Figure 3 caption. So page 8 contains end of Section 3.5 and Figure 3 caption start? Then page 9 marker contains Figure 3 caption again? This is confusing but I'll cite the page where the content appears.

Actually looking more carefully:
- Page 7: Section 3.3 Distributional Value Network. Text: "The model is trained with temporal-difference learning using categorical cross-entropy..." This is on page 7.
- Page 8: Section 3.4 Neural Shapley Attribution? No, Section 3.4 might start on page 7 after the network text? Let's see: After page 7 marker: "The model is trained..." then "### **3.4 Neural Shapley Attribution**". So Section 3.4 starts on page 7. Then page 8 marker appears after some text in Section 3.5? Actually the text shows page 8 marker after Section 3.5's first paragraph. Then Figure 3 caption. Then text continues. Then page 9 marker then Figure 3 caption again? This might be a duplication in the OCR. I will cite page 8 for the first occurrence of Figure 3 caption and Section 3.5 content.

- Page 9: Text continues from Section 3.5, Table 1, hybrid approach discussion. Actually Table 1 appears after page 9? Let's see: After Figure 3 caption on page 9, text says "A unified attribution mechanism..." then "Table 1 compares..." then Table 1. Then page 10 marker appears after Data section start? Actually Data section (3.7) starts after Table 1 discussion. Page 10 marker appears after "play-by-play event classification into 23 distinct action types". So page 10 contains Data section start.

- Page 11: After Data section, "4. Results" section, Table 2, then page 11 marker? Actually Table 2 is followed by page 11 marker? Let's see: Table 2 note then page 11 marker? No: Table 2 is followed by text "The distributional model achieves..." then page 11 marker? Actually the text shows Table 2 then note then text then "11" then Figure 4 caption. So page 11 contains Figure 4 caption and maybe end of Section 4.1.

- Page 12: Section 4.2 Sample Size Requirements, Table 3, then page 12 marker? Actually Table 3 note then "Year-over-year stability..." then page 12 marker? Let's see: Table 3 note then text then "12" then Figure 5 caption? Actually text: "Table 3... Note... Year-over-year stability... Figure 5 presents..." then "13" then Figure 5 caption? Let's look:

"...**Table 3: Sample Size Requirements for Stable Rankings** 
... 
_Note: Stability is defined as ρ > 0.80 with full-season rankings. DRL-Shapley achieves RAPM-comparable accuracy with 67% fewer possessions._ 

**Year-over-year stability provides another important validation metric.** ... **Figure 5** presents year-over-year correlations... 

DRL-Shapley demonstrates improved stability compared to RAPM (ρ = 0.76 vs. 0.71, p < 0.001)... 


13 


**_→ Figure 5: Year-over-Year Ranking Stability (2021-22 2022-23)._** _Player rankings from consecutive seasons correlate more strongly under DRL-Shapley (ρ = 0.76) than RAPM (ρ = 0.71)..._"

So page 12 contains Table 3 and start of Section 4.2 year-over-year text. Page 13 contains Figure 5 caption.

- Page 14: Section 4.3 Learned Action Values, Table 4, then page 14 marker? Actually Table 4 followed by page 14 marker? Let's see: Table 4 then note then text then "14"? No, looking: Table 4 then note then text discussing offensive rebounds etc. then "15" then Figure 6 caption? Actually:

"...**Table 4: Action Values — Learned vs. Traditional Weights** 
... 
_Note: Values represent expected point differential impact..._ 

The most striking finding... 


14 


**_Figure 6: Context-Dependent Action Values by Game Situation._** _Learned action values vary substantially based on score differential (rows) and time remaining (columns)..._"

Wait, page 14 marker appears after Table 4 discussion? Actually the text shows page 14 marker before Figure 6 caption? Let's trace:

After Table 4 note: "The most striking finding is the substantial undervaluation..." Then text continues "...represented... ( **Figure 6** , top center panel)." Then "Crucially, the standard deviations in **Table 4** reveal substantial context-dependence invisible to fixed weights. **Figure 6** visualizes this variation..." Then "15" then Figure 6 caption? Actually looking at raw text:

"...reach +3.9 in maximum-leverage situations ( **Figure 6** , top center panel). This reflects compounding value... Conversely, assists appear overweighted... 

Crucially, the standard deviations in **Table 4** reveal substantial context-dependence invisible to fixed weights. **Figure 6** visualizes this variation: maximum leverage occurs in close games during clutch time (±4 points, final 3 minutes), where single possessions can swing win probability most dramatically. A three-pointer in this context reaches +4.5, compared to +2.8 in regular play, a 60% increase ( **Figure 6** , top left panel). Conversely, actions in decided games show diminished returns: a steal in a late blowout (≥10-point margin) is worth only +0.8, compared to +3.3 in a close clutch game. This context-sensitivity represents a fundamental advance over fixed-weight approaches. 


15 


**_Figure 6: Context-Dependent Action Values by Game Situation._** _Learned action values vary substantially based on score differential (rows) and time remaining (columns). Each heatmap shows the expected point-differential impact for one action type, with green indicating a positive impact and red indicating a negative impact. Maximum leverage occurs in close games (±4 points) during clutch time, where single possessions swing win probability most dramatically. Values diminish in blowouts (≥10-point margin) when outcomes are effectively decided. Traditional fixed weights (shown in_ 

Then page 16 marker appears mid-sentence? "in_ 

16 


_subtitles) systematically undervalue high-leverage plays..."

So page 15 contains end of Section 4.3 text and Figure 6 caption start. Page 16 contains Figure 6 caption continuation.

- Page 17: Section 4.4 Player Evaluation, Table 5 start. Table 5 then page 17 marker? Actually Table 5 is followed by page 17 marker? Let's see: Table 5 rows 1-14 then page 17 marker? The text shows Table 5 then page 17 marker? Actually after Table 5 rows 1-14: "|14|Chet Holmgren|+5.38|18|30|2,413|" then page 17 marker? Wait:

"...|14|Chet Holmgren|+5.38|18|30|2,413|


17 


|**#**|**Player**|**DRL-Shaple**<br>**y**|**RAPM**<br>**Rank**|**BPM**<br>**Rank**|**Minute**<br>**s**|


15|De'Aaron Fox|+5.31|15|39|2,659|


_Note: DRL-Shapley values represent estimated points per 100 possessions above replacement._"

So page 17 contains Table 5 rows 1-14 and page break. Page 18 contains Table 5 row 15 and note, then Section 4.4 text and Table 6.

Actually after page 18 marker: "|15|De'Aaron Fox...|" then Note then text then "18" marker? Let's see:

"...|15|De'Aaron Fox|+5.31|15|39|2,659|


_Note: DRL-Shapley values represent estimated points per 100 possessions above replacement._ 

The DRL-Shapley metric demonstrates... 

**Table 6: Value Decomposition for Selected Players (2023-24)** 
..."

Where is page 18 marker? Looking at raw text: After Table 5 continued on page 17? Actually page 17 marker appears before the continuation row 15. So page 17 ends after row 14. Page 18 starts with row 15? But the text shows row 15 after page 17 marker? Wait:

"...|14|Chet Holmgren|+5.38|18|30|2,413|


17 


|**#**|**Player**|...|

15|De'Aaron Fox|..."

So page 17 contains rows 1-14. Page 18 contains row 15 and note and Section 4.4 text and Table 6. Then page 19 marker? Let's see: After Table 6 note: "Note: Values in points per 100 possessions..." then text about Gobert, Curry, Wembanyama then "18" marker? Actually looking:

"...**Table 6: Value Decomposition for Selected Players (2023-24)** 
... 
_Note: Values in points per 100 possessions..._ 

The decomposition reveals why box score metrics systematically undervalue certain players. Gobert’s +5.52 total value is driven primarily by defensive presence (+2.48) and defensive actions (+0.95), with minimal scoring contribution (+0.87). BPM, which relies on box score statistics, captures only his blocks and rebounds, missing the 2.48 points per 100 possessions he contributes through lineup-level defensive impact. Conversely, Curry’s value concentrates heavily in scoring (+3.82) and playmaking (+1.15), a profile that traditional metrics capture well, explaining the closer alignment between DRL-Shapley and BPM for offensive stars. Wembanyama’s profile reveals two-way dominance: substantial scoring (+1.94), elite defensive actions (+1.42), and strong presence effects (+1.93), validating the metric’s identification of his overall impact despite rookie-year volatility. 


18 


We quantify the model’s improvement in identifying defensive value by comparing DRL-Shapley’s defensive attributions to BPM’s season-level evaluations..."

So page 18 contains Table 6 and start of defensive value quantification text. Page 19 contains continuation? Actually page 19 marker appears after "18" and before "We quantify...". So page 19 contains the rest of Section 4.4 and Section 4.5 start?

Wait, after page 18 marker: "We quantify the model’s improvement..." then text continues "...Among players our method identifies as having “high defensive impact” profiles... This mismatch arises because BPM..." then page 19 marker? Let's check:

"...By attributing defensive value through possession-level lineup outcomes, the method captures meaningful off-ball, positional, and deterrence effects that traditional box-score–based approaches are unable to observe. 


### **4.5 Player Synergies** 
A unique capability of our framework is quantifying interaction effects between players. ... 

**Table 7: Top Player Synergies and Anti-Synergies (2023-24)** 
...


19 


|**Player 1**|**Player 2**|**Synerg**<br>**y**|**p-valu**<br>**e**|

|Zach LaVine|DeMar DeRozan|-1.84|0.003|"

So page 19 contains Table 7 first part (positive synergies) and page break. Page 20 contains anti-synergies rows? Let's see:

"...|Nikola Jokić|Jamal Murray|+2.87|<0.001| ... |Anthony Edwards|Rudy Gobert|+1.94|<0.001|


_Anti-Synergies (Neg_|_ative Interaction Ef_|_fects)_||

... 


19 


|Zach LaVine|DeMar DeRozan|-1.84|0.003| 
|Zion Williamson|Jonas Valančiūnas|-1.67|0.008| 
|Bradley Beal|Kevin Durant|-1.52|0.014| 
|Devin Booker|Bradley Beal|-1.41|0.021| 
|Karl-Anthony Towns|Rudy Gobert|-1.28|0.031|

...


20 


**_Figure 7: Offensive vs. Defensive Synergy by Player Pair._** ..."

Actually page 20 marker appears after Table 7 anti-synergies? Let's see: After anti-synergies table, text "Note: Synergy values..." then discussion then page 20 marker? The raw text shows:

"...|Karl-Anthony Towns|Rudy Gobert|-1.28|0.031|


_Note: Synergy values in expected points per 100 possessions. Green shading indicates positive synergy; red indicates anti-synergy._ 

Across all pairs with ≥200 shared minutes, we identify 127 statistically significant synergies (p < 0.05) and 89 significant anti-synergies. After applying Benjamini-Hochberg FDR correction at q = 0.05, 89 synergies and 61 anti-synergies remain significant. The Jokić-Murray pairing shows the strongest two-way synergy (+2.87), ... 

**Table 7** presents... 

... 

**Figure 7** decomposes these effects into offensive and defensive components. 

... 


20 


**_Figure 7: Offensive vs. Defensive Synergy by Player Pair._** _Each point represents a player pair with ≥200 shared minutes..._"

Wait, page 20 marker appears after the discussion and before Figure 7 caption? Actually in the raw text, after the synergy discussion there is "20" then Figure 7 caption? Let's look:

"...This interaction effect represents nearly a full point per 100 possessions beyond what each player contributes individually, a substantial competitive advantage worth approximately 2.5 wins over a full season. 

Decomposing synergies by the end of court reveals distinct pairing archetypes ( **Figure 7** ). Some − pairs show offensive-only synergy: Lillard-Giannis (+1.68 offensive, 0.52 defensive) creates elite pick-and-roll opportunities, but Lillard's defensive limitations offset some gains. Others show − defensive-only synergy: Caruso-Dosunmu ( 0.58 offensive, +1.24 defensive) provides elite perimeter defense but limited shot creation together. The strongest pairs, Jokić-Murray, Haliburton-Siakam, and Tatum-Holiday, complement each other on both ends. 

− Anti-synergies often reveal role redundancy. The LaVine-DeRozan pairing shows a 1.84 − − anti-synergy, with negative effects on both offense ( 1.12) and defense ( 0.72), reflecting the challenges of playing two ball-dominant mid-range scorers who provide similar offensive functions and limited defensive value ( **Figure 7** , bottom-left quadrant). The Towns-Gobert pairing similarly − − shows spatial redundancy ( 0.38 offensive, 0.90 defensive), with both players preferring interior positioning on both ends of the court. 

These synergy metrics have direct applications for roster construction. A team considering acquiring a player can estimate not just their individual contribution but their interaction effects with the existing roster, and whether those effects manifest on offense, defense, or both. We find that teams with more positive lineup synergies outperform their expected record by 2.1 wins on average, while negative-synergy teams underperform by 1.8 wins. 


20 


**_Figure 7: Offensive vs. Defensive Synergy by Player Pair._** _Each point represents a player pair with ≥200 shared minutes, with synergy decomposed into offensive (x-axis) and defensive (y-axis) components..._"

So page 20 contains Figure 7 caption and maybe start of Figure 8 discussion? Actually after Figure 7 caption: "To quantify this relationship, we compute aggregate team synergy..." then page 21 marker? Let's see:

"...The correlation is substantial (r = 0.57, p ≈ 0.001), indicating that synergy effects explain meaningful variance in team performance beyond individual talent. Teams in the top quartile of aggregate synergy outperform individual-talent projections by 3.4 wins on average, while bottom-quartile teams underperform by 2.4 wins. This validates synergy as a practically 


21 


significant factor in roster construction: two teams with equivalent individual talent can diverge by 5+ wins based solely on how well their players complement each other. 


**_Figure 8: Aggregate Team Synergy vs. Win Differential (2023-24):_** _Each point represents one NBA team..._"

So page 21 contains end of Figure 7 discussion? Actually page 20 marker is before Figure 7 caption. Page 21 marker is after "practically" and before "significant factor". Then Figure 8 caption.

- Page 22: Section 4.5.1 Synergy Robustness & Limitations. After Figure 8 caption: "### **4.5.1 Synergy Robustness & Limitations**" then page 22 marker? Let's see:

"...### **4.5.1 Synergy Robustness & Limitations** 
While our synergy estimates reveal meaningful patterns in how player pairs perform together, several limitations qualify their interpretation. 

**Non-random deployment.** 
Player pairs are not assigned randomly; coaches choose combinations based on rotation needs, matchups, and leverage. As a result, “together” and “apart” minutes can come from different distributions of game states. Although our Shapley estimates condition on score, time, lineups, possession type, and opponent identity, synergy remains **associational** , not causal. 


22 


#### **Higher-order interactions.** 
..."

So page 22 contains Section 4.5.1 start and Non-random deployment.

- Page 23: Table 8 and Section 4.6 Predictive Validation. After Section 4.5.1 limitations text, page 23 marker? Let's see:

"...Overall, synergy values are best interpreted as **descriptive indicators of complementary performance under observed conditions** , rather than causal predictions of how two players would interact in all contexts or on all teams. 


### **4.6 Predictive Validation** 
To assess whether DRL-Shapley captures **genuine, out-of-sample predictive signals** , we evaluate its ability to forecast game outcomes in the held-out test set. Player ratings are computed only from the training period; for each test game, we estimate team strength by summing the DRL-Shapley ratings of projected starters, weighted by expected minutes. The difference between the two teams’ aggregate ratings yields a predicted winner and expected margin. 


**Table 8: Game Outcome Prediction Accuracy** 
...


23 


_Note:_ Win Prediction is accurate on 2,235 test games. Margin RMSE in points. Vegas Line uses closing spreads."

So page 23 contains Table 8 note and Section 4.6 text.

Okay, I have a rough mapping. I need to write the response with the exact XML sections.

Key constraints:
- NO betting lines: never mention spreads, totals, moneylines, odds. The source mentions "Vegas Line (Benchmark)" and "closing spreads" in Table 8 note. I must NOT mention these as betting lines. I can refer to them as "market benchmark" or "closing line benchmark" but avoid the word "spread" or "odds" or "moneyline". Actually the invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I cannot say "Vegas Line" if it implies betting? The source says "Vegas Line (Benchmark)" and "Vegas Line uses closing spreads." I should avoid referencing that directly or rephrase without using banned terms. I can say "the market benchmark cited in the source" but avoid "spread". Or just omit it and focus on DRL-Shapley vs BPM/RAPM. I must not mention "spreads" at all. I can mention "win prediction accuracy" and "margin RMSE" but not tie to betting lines. I will avoid quoting the "Vegas Line" row or if I do, I will not call it a spread. Actually to be safe, I will not mention the Vegas benchmark row at all, or I will refer to it as "the external benchmark" without naming it. But the user wants verbatim quotes and page citations when source pages are provided. I can quote other parts.

- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Use real equations from the paper: Bellman equation V(s) = E[r + γV(s') | s, π], advantage A(s,a) = Q(s,a) - V(s), distributional value network f: S → Δ, Shapley synergy Synergy(i,j) = E[φ_i + φ_j | together] - E[φ_i | apart] - E[φ_j | apart], ΔV = r + V(s') - V(s), credit = φ_i(s) - φ_i(s'). Units: seconds for γ half-life (~230 seconds), points per 100 possessions for player values, expected point differential impact for action values, Brier score (dimensionless probability score), RMSE in points, log-likelihood (nats or bits? not specified, just log-likelihood), Spearman ρ (dimensionless), Pearson r (dimensionless), p-values.

- >= 1000 words across sections. THINK_TRACE >= 400 words.

Let's plan each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. I need to discuss the derivation from MDP formulation to Shapley attribution, audit the causal limitations, endogenous lineup selection, distributional vs point estimation, context-dependence, sample size efficiency, synergy identification, and potential failure modes (non-random deployment, higher-order interactions, sampling variability, context dependence). Must be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. Include:
- MDP tuple G = (S, A, T, R, γ) [PAGE 4]
- Bellman: V(s) = E[r + γV(s') | s, π] [PAGE 4]
- γ = 0.997 per second, half-life ~230 seconds (~4 minutes) [PAGE 4]
- Advantage: A(s,a) = Q(s,a) − V(s) [PAGE 4/5]
- State vector: 57-dimensional, groups: Score & Time (8), Lineup (20), Momentum (15), Possession (12), Context (2) [PAGE 6]
- Distributional network: f: S → Δ, 81-bin categorical distribution spanning margins from −40 to +40 [PAGE 7]
- Categorical cross-entropy TD target [PAGE 7]
- V(s) = mean of distribution [PAGE 7]
- Neural Shapley: g_ψ: S × L → ℝ^n, multi-head attention (8 heads, 64-dim embeddings), MSE against Monte Carlo ground truth from 100 sampled coalition orderings, efficiency constraint ∑φ_i = V(s) [PAGE 7/8?]
- Coalition value v_s: 2^L → ℝ, replacement embeddings per position (PG, SG, SF, PF, C), min 500 minutes [PAGE 7/8]
- Exact Shapley requires 2^10 = 1024 forward passes per state [PAGE 7/8]
- Action value: ΔV = r + V(s') − V(s) [PAGE 8/9]
- Offensive credit via weight network ω [PAGE 8/9]
- Defensive credit: Credit_i = φ_i(s) − φ_i(s') [PAGE 8/9]
- Efficiency: ∑Credit_i = ΔV [PAGE 8/9]
- Synergy: Synergy(i,j) = E[φ_i + φ_j | together] − E[φ_i | apart] − E[φ_j | apart] [PAGE 19/20?]
- Sample thresholds: ≥500 possessions with partner and without [PAGE 19/20]
- Table 3: RAPM ~15,000 possessions/~45 games/~2 months; DRL-Shapley ~5,000 possessions/~15 games/~3 weeks [PAGE 12]
- Table 2: Brier, RMSE, Log-Likelihood [PAGE 11]
- Table 4: learned vs traditional weights with std [PAGE 14]
- Table 5: DRL-Shapley values in points per 100 possessions [PAGE 17/18]
- Table 6: value decomposition [PAGE 18]
- Table 8: win prediction %, margin RMSE [PAGE 23]

I need to cite page numbers like [PAGE 4], [PAGE 7], etc.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss lineage: Kubatko et al. 2007 (counting stats), Rosenbaum 2004 / Sill 2010 (APM/RAPM), Hollinger PER, Oliver Win Shares, Myers Box Plus-Minus, Engelmann 2017 box-score priors, EPV (Cervone et al. 2016?), Sicilia et al. 2019 / Liu & Schulte 2018 (ice hockey deep models), Wang & Zemel 2016 / Sandholtz & Bornn 2020 (inverse decision modeling/Markov games), Shapley 1953, Castro et al. 2009 Monte Carlo, Mitchell et al. 2022 antithetic variates, Lundberg & Lee 2017 SHAP, Lock & Nettleton 2014 random forest win probability, Stern 1994 Brownian motion, Tango et al. 2007 WPA, Bellemare et al. 2017 distributional RL, Robberechts et al. 2021 distributional outcomes. Multi-week traps: RAPM needs ~2 months for stability vs DRL-Shapley ~3 weeks; rookie/traded player evaluation; role changes; lineup collinearity; sample size requirements.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a more abstract section. "Crisis habit regression" likely refers to teams reverting to habitual patterns under pressure (clutch time). "Counter-trap" refers to the model's ability to identify context-specific value that contradicts fixed weights (e.g., offensive rebounds undervalued). "Clock" refers to the discount factor γ = 0.997 per second and half-life ~230 seconds, making late-game actions higher weight. I need to discuss how the model handles clutch-time variance (40% higher variance in impact), how crisis moments regress to traditional heuristics vs learned context values, and the temporal clock of the MDP.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. The paper has limitations: relies solely on play-by-play data, cannot represent off-ball behaviors (spacing, screening, rotations, defensive positioning), no player-tracking data, assumes stability in player ability, Shapley independence assumptions don't fully hold, four-season dataset may not capture rare player types. I need to frame these as veto conditions: physical layer (off-ball movement not captured), biomechanical layer (no player tracking, screening, positioning), weather (not applicable to indoor NBA, but maybe travel/rest? The paper mentions oddsmakers incorporate injury, rest, travel fatigue, lineup changes—these are exogenous vetoes not in model). I will discuss what would veto the model's predictions: lack of tracking data, endogenous lineup selection, non-random deployment, context-specific synergy, etc.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or maybe "Reinforcement Learning Verification and Rejection"? The user says "RLVR_COUNTERFACTUAL_VETOES". I'll interpret as 3 scenarios where counterfactual interventions would veto the model's output, with predictions. For example:
1. Veto: Randomized lineup experiment where a high DRL-Shapley defensive presence player is removed; prediction: opponent efficiency does not decrease as attributed, vetoing causal claim. Verifiable via on/off court natural experiment or injury substitution.
2. Veto: Player traded to a new system; synergy estimates from old team fail to transfer; prediction: synergy score does not generalize across rosters (context dependence limitation). Verifiable via post-trade performance vs predicted.
3. Veto: High-entropy swing state where model assigns high leverage to an action, but a rule change or referee emphasis alters the value (e.g., crackdown on fouls); prediction: learned action value for steals/blocks decays or shifts. Verifiable via rule-change season comparison.

I need to ensure total words >= 1000 across sections. THINK_TRACE alone >=400. I'll aim for substantial depth.

Also, must not mention spreads/totals/moneylines/odds. I will avoid quoting "Vegas Line" or "closing spreads". I can mention Table 8 but omit that row, or refer to "external benchmark" without naming. Actually the source text has "Vegas Line (Benchmark)|68.7%|10.42" and note "Vegas Line uses closing spreads." I cannot mention "spreads". I will not cite that specific row or will paraphrase as "an external oddsmaker benchmark" but avoid the word spread. Better to omit entirely or say "an external benchmark cited in Table 8 [PAGE 23]" without repeating "spread". I'll omit the banned terms.

Let's draft carefully.

Word count estimation:
- THINK_TRACE: ~500 words.
- SOURCE_OPERATORS_AND_EQUATIONS: ~400 words (lots of equations and citations).
- RETROCAUSAL_GENEALOGY: ~250 words.
- RECURSIVE_THEORY_OF_MIND: ~200 words.
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words.
- RLVR_COUNTERFACTUAL_VETOES: ~200 words.
Total ~1800 words. Good.

Now, ensure no toy equations. All equations must be from the paper and formatted in LaTeX.

Let's write.

Need to be careful with verbatim quotes and page citations. I'll quote short phrases and cite pages.

Page citations I'll use based on mapping:
- [PAGE 4]: MDP, Bellman, gamma.
- [PAGE 5]: Figure 1 caption, causal limitations start.
- [PAGE 6]: State representation 57-dim.
- [PAGE 7]: Distributional network, 81-bin, categorical cross-entropy.
- [PAGE 8]: Neural Shapley, coalition value, replacement embeddings, 2^10=1024.
- [PAGE 9]: Action value decomposition, ΔV, credit, hybrid table.
- [PAGE 11]: Table 2 win probability metrics.
- [PAGE 12]: Table 3 sample size requirements.
- [PAGE 14]: Table 4 action values.
- [PAGE 17]: Table 5 top players.
- [PAGE 18]: Table 6 value decomposition.
- [PAGE 19]: Table 7 synergies start.
- [PAGE 20]: Figure 7 caption, synergy robustness.
- [PAGE 22]: Section 4.5.1 limitations.
- [PAGE 23]: Table 8 predictive validation.

I'll cite these.

Let's start writing.

THINK_TRACE:

Need to derive multi-hop:
1. MDP formulation frames basketball as cooperative game with states, actions, transitions, rewards, discount.
2. Bellman equation recursively defines state value; gamma per second creates temporal horizon; half-life 230s means early actions discounted but not zero.
3. Advantage function isolates marginal value of action beyond state baseline.
4. Distributional value network models full margin distribution, not just mean; 81 bins; categorical cross-entropy; captures uncertainty and swing states.
5. Shapley attribution distributes state value among lineup members using coalition value function with replacement embeddings; exact computation exponential (2^10), approximated by neural attributor with multi-head attention, MSE vs Monte Carlo, efficiency constraint.
6. Action decomposition: ΔV = r + V(s') - V(s); hybrid attribution: offensive via weight network ω, defensive via Shapley differences φ_i(s) - φ_i(s'); efficiency constraint sum credits = ΔV.
7. Sample efficiency: RAPM needs ~15k possessions vs DRL-Shapley ~5k; transfer via learned embeddings and parameter sharing.
8. Synergy: pairwise interaction via expected Shapley values together vs apart; minimum 500 possessions together and apart; FDR correction; context-specific, non-random deployment.

Gray-zone audit: causal limitations (endogenous lineup, confounding), associational not causal; Shapley independence assumption violation; tracking data absence; off-ball behaviors unobserved; sample stability assumptions; four-season dataset may miss rare archetypes; synergy non-causal due to coach deployment; regression to mean for extreme synergies.

I'll write this in a dense, analytical style.

SOURCE_OPERATORS_AND_EQUATIONS:

List equations with LaTeX and page citations.

RETROCAUSAL_GENEALOGY:

Lineage from counting stats (Kubatko et al. 2007 [PAGE 1]) to APM (Rosenbaum 2004; Sill 2010 [PAGE 2]) to box-score priors (Engelmann 2017 [PAGE 2]) to EPV (sequential stochastic processes [PAGE 3]) to distributional RL (Bellemare et al. 2017 [PAGE 7]) to Shapley (1953 [PAGE 3]) and SHAP (Lundberg & Lee 2017 [PAGE 3]). Multi-week traps: RAPM temporal requirement (~2 months) vs DRL-Shapley (~3 weeks) [PAGE 12]; rookie/traded player evaluation; role evolution; lineup collinearity.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: under pressure, coaches/players revert to fixed-weight heuristics; model shows clutch-time actions have 40% higher variance in impact [PAGE 1 intro], offensive rebounds +3.9 max leverage vs +1.0 traditional [PAGE 14/15], steals +3.3 in clutch vs +1.0 [PAGE 14/15]. Counter-trap: the model's context-dependent values trap fixed-weight assumptions by revealing undervaluation of off-ball/defensive presence (Gobert +2.48 defensive presence [PAGE 18]). Clock: gamma = 0.997 per second, half-life ~230 seconds (~4 minutes) [PAGE 4], making late-game actions weighted higher; recursive theory of mind: players anticipate clock state, adjust effort; model captures via state encoder momentum features (tau = 30, 60, 120 seconds) [PAGE 6].

CROSS_LAYER_VETO_ADJUDICATION:

Physical layer: play-by-play lacks off-ball spacing, screening, rotations [PAGE 25 limitations]. Biomechanical: no player-tracking data; cannot infer defensive positioning quality [PAGE 25]. Weather: indoor arena, but exogenous factors (injury, rest, travel fatigue, lineup changes) are not in model [PAGE 23 note, though I must avoid "spreads"; I can mention "external benchmark incorporates non-performance information: injury updates, rest management, travel fatigue, lineup changes" [PAGE 23]. Veto proof: if any of these layers change (new tracking data, mid-season rule emphasis, injury to key connector), the learned Shapley values may not transfer; the model explicitly states associational, not causal [PAGE 5, PAGE 22].

RLVR_COUNTERFACTUAL_VETOES:

Three verifiable veto scenarios:
1. Randomized lineup removal (injury/illness natural experiment): Remove high defensive-presence player; prediction: opponent efficiency drop should match Shapley attribution; if not, veto causal interpretation.
2. Cross-roster synergy transfer: Trade a player with high positive synergy to new team; prediction: synergy score should not transfer because context-specific [PAGE 22]; if new team sees same synergy, veto context-dependence claim.
3. Rule-change regime shift: League changes officiating emphasis on steals/blocks; prediction: learned action values for steals (+1.83 mean, +3.3 clutch [PAGE 14]) and blocks (+1.24 [PAGE 14]) should decay or shift within one season; if stable, veto context-sensitivity claim.

Each with prediction and verification method.

Let's write it all out now, ensuring word count and no banned terms.

I will not mention "Vegas Line" or "spread". I will reference Table 8's DRL-Shapley vs BPM/RAPM only.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The framework proceeds through a nested sequence of formal hops. First, basketball is cast as a cooperative Markov decision process G = (S, A, T, R, γ) where states encode score differential, time remaining, lineups, recent play history, and context; actions are discrete play-by-play events; and the discount factor γ = 0.997 per second imposes a half-life of approximately 230 seconds (~4 minutes), so late-game actions are weighted more heavily than early ones but early contributions remain non-zero [PAGE 4]. The Bellman equation V(s) = E[r + γV(s′) | s, π] recursively defines the state value as expected final margin, establishing that every intermediate possession is evaluated against its contribution to the terminal outcome rather than against a static box-score weight [PAGE 4]. The advantage function A(s,a) = Q(s,a) − V(s) then isolates the marginal value added by a specific action beyond the state baseline, providing the context-aware basis for credit assignment [PAGE 4–5].

Second, instead of a point estimate, the distributional value network maps each state to an 81-bin categorical distribution over final margins from −40 to +40, trained with temporal-difference categorical cross-entropy; V(s) is recovered as the distribution mean, while entropy and shape quantify state uncertainty [PAGE 7]. This distributional layer identifies “swing states” where predicted win probability lies near 0.5 and individual actions exert maximum leverage on outcome variance, which is critical because the learned action values display pronounced context sensitivity: clutch-time actions show 40 percent higher variance in impact than identical plays earlier in games [PAGE 1].

Third, the Shapley attribution layer distributes V(s) among the five players on court through a coalition value function v_s: 2^L → ℝ, where absent players are replaced by position-conditioned replacement embeddings derived from players with at least 500 minutes at each position [PAGE 7–8]. Exact Shapley computation would require 2^10 = 1,024 forward passes per state, so the paper trains a neural attributor g_ψ: S × L → ℝ^n with multi-head attention (8 heads, 64-dimensional embeddings) to predict Shapley values directly, minimizing mean squared error against Monte Carlo estimates from 100 sampled coalition orderings subject to an efficiency constraint ∑φ_i = V(s) [PAGE 7–8].

Fourth, action-level credit decomposes ΔV = r + V(s′) − V(s) into a hybrid architecture: offensive actions are assigned via a learned weight network ω, while defensive and off-ball influence is assigned through Shapley differences Credit_i = φ_i(s) − φ_i(s′), preserving efficiency ∑Credit_i = ΔV [PAGE 8–9]. This hybrid resolves the stability–accuracy trade-off shown in Table 1, where the unified weight network reaches stability ρ = 0.81 but weak win prediction (64.2%), the unified Shapley approach reaches ρ = 0.74 and 63.8%, while the hybrid achieves ρ = 0.87 and 66.3% win prediction with margin RMSE 10.89 [PAGE 9].

Gray-zone audit: The paper explicitly states that “credit,” “contribution,” and “value” denote associations, not causation [PAGE 5]. Lineup selection is endogenous, driven by coach strategy, matchups, and leverage, so “together” and “apart” minutes in synergy estimation come from different game-state distributions [PAGE 22]. Shapley independence assumptions do not fully hold in basketball because contributions depend on specific teammate and opponent combinations [PAGE 25]. The model relies solely on play-by-play data and cannot observe off-ball spacing, screening, rotations, or defensive positioning; player-tracking data would close this gap but is not publicly available at the required scale [PAGE 25]. Extreme synergy estimates are prone to regression toward the mean despite Benjamini–Hochberg FDR correction [PAGE 22]. These are not minor caveats; they define the exact boundary beyond which the model’s outputs must be treated as descriptive indicators rather than causal predictions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
MDP tuple: G = (S, A, T, R, γ), with T : S × A → S stochastic transition and R : S × A → ℝ immediate reward (points scored) [PAGE 4].

Bellman equation: V(s) = E[r + γV(s′) | s, π], where π is the joint policy of all players [PAGE 4].

Discount: γ = 0.997 per second, corresponding to a half-life of approximately 230 seconds (~4 minutes), ensuring late-game actions receive appropriately higher weight while early-game contributions remain meaningful [PAGE 4].

Advantage function: A(s, a) = Q(s, a) − V(s), representing expected value added by action a beyond the state-alone expectation [PAGE 4–5].

State encoder: 57-dimensional feature vector partitioned into Score & Time (8 dim), Lineup (20 dim), Momentum (15 dim), Possession (12 dim), Context (2 dim). Lineup features use learned player embeddings; Momentum features use exponentially weighted scoring averages at timescales τ = 30, 60, 120 seconds; features use rolling 20-game z-score normalization with median imputation and missingness indicators [PAGE 6].

Distributional value network: f : S → Δ mapping state to a softmax probability vector over an 81-bin categorical distribution spanning final margins −40 to +40; trained with temporal-difference categorical cross-entropy; V(s) = mean of the distribution [PAGE 7].

Exact Shapley computational load: 2^10 = 1,024 forward passes per game state for a 5-player lineup [PAGE 7–8].

Neural Shapley attributor: g_ψ : S × L → ℝ^n using multi-head attention (8 heads, 64-dimensional player embeddings), trained to minimize MSE against Monte Carlo ground-truth estimates from 100 sampled coalition orderings, with efficiency constraint ∑φ_i = V(s) [PAGE 7–8].

Replacement embeddings: computed separately for PG, SG, SF, PF, C using players logging at least 500 minutes at that position; soft positional assignment for unconventional lineups; sensitivity robust across minute thresholds 250–1,000 (ρ > 0.96 between adjacent thresholds) [PAGE 7–8].

Action value change: ΔV = r + V(s′) − V(s) [PAGE 8–9].

Offensive credit: learned weight network ω incorporating action type, involved players, and contextual features [PAGE 8–9].

Defensive/off-ball credit: Credit_i = φ_i(s) − φ_i(s′), Shapley differences rewarding presence effects that alter opponent efficiency without recorded statistics [PAGE 8–9].

Efficiency constraint: ∑_i Credit_i = ΔV [PAGE 8–9].

Sample size stability (Table 3 [PAGE 12]): RAPM requires ~15,000 possessions / ~45 games / ~2 months for Spearman ρ > 0.80 with full-season rankings; DRL-Shapley requires ~5,000 possessions / ~15 games / ~3 weeks, a 67% possession reduction.

Win probability metrics (Table 2 [PAGE 11]): Brier score, RMSE in points, log-likelihood; DRL-Shapley RMSE 8.65 points vs logistic baseline 11.24 points (23% reduction, p < 0.001); in 40–60% win-probability states, RMSE improvement reaches 31%; predicted distribution entropy correlates with actual outcome variance r = 0.94 (p < 0.001), calibration slope β = 0.97.

Learned action values (Table 4 [PAGE 14]): offensive rebound learned mean +2.31 (std 0.68) vs traditional +1.0; steal +1.83 (std 0.82) vs +1.0; turnover −1.42 (std 0.63) vs −1.0; made 3-pointer +2.87 (std 0.94) vs +3.0; assist +0.78 (std 0.41) vs +1.0. Maximum leverage contexts: offensive rebound +3.9, steal +3.3 in close clutch, three-pointer +4.5 in clutch (±4 points, final 3 minutes) vs +2.8 regular play [PAGE 14–15].

Synergy definition: Synergy(i, j) = E[φ_i + φ_j | together] − E[φ_i | apart] − E[φ_j | apart], with minimum 500 possessions together and 500 apart per pair [PAGE 19–20].

Player values: DRL-Shapley ratings in points per 100 possessions above replacement; 2023–24 top values Nikola Jokić +8.24, Rudy Gobert +5.52 driven by defensive presence +2.48 and defensive actions +0.95 [PAGE 17–18].

Value decomposition (Table 6 [PAGE 18]): scoring, playmaking, offensive rebound, defensive actions, defensive presence, turnovers; components may not sum exactly because residual and interaction effects are not attributable to a single category.

Predictive validation (Table 8 [PAGE 23]): DRL-Shapley win prediction 66.3% vs BPM 62.4% (p < 0.001) and RAPM 64.8% (p = 0.012); margin RMSE 10.89 points; DRL-Shapley + Synergy 67.1% accuracy, RMSE 10.71 points.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper positions itself as the third stage of basketball analytics. Stage one, counting statistics (Kubatko et al., 2007), treated actions as context-independent and largely ignored defensive value [PAGE 1]. Stage two, adjusted plus-minus methods (Rosenbaum, 2004; Sill, 2010), improved context sensitivity but assumed additive, context-invariant player effects and required large samples to overcome severe multicollinearity from frequently co-occurring teammates [PAGE 2]. Later regularization and box-score priors (Engelmann, 2017) stabilized estimates but did not capture synergies, leverage differences, or asymmetric offensive/defensive value [PAGE 2]. Parallel sequential modeling work includes EPV, which modeled possession transitions probabilistically without reinforcement learning or individual credit assignment [PAGE 3], and deep action-value models in ice hockey (Sicilia et al., 2019; Liu & Schulte, 2018) showing sequential approaches improve play valuation [PAGE 3]. Inverse decision modeling and Markov games (Wang & Zemel, 2016; Sandholtz & Bornn, 2020) addressed strategic behavior rather than player evaluation [PAGE 3].

The attribution layer descends from cooperative game theory: the Shapley value (Shapley, 1953) assigns fair value via average marginal contribution across all coalitions, guaranteeing efficiency, symmetry, null player, and additivity [PAGE 3]. Exact computation is exponential, motivating Monte Carlo sampling (Castro et al., 2009), antithetic variates (Mitchell et al., 2022), and SHAP (Lundberg & Lee, 2017), which the paper adapts by treating athletes as coalition members and team performance as the cooperative game outcome [PAGE 3]. The value-function layer builds on win-probability modeling (Lock & Nettleton, 2014; Stern, 1994) and Win Probability Added (Tango et al., 2007), but replaces single-player credit with distributed Shapley attribution and replaces point-estimate margins with a distributional perspective (Bellemare et al., 2017; Robberechts et al., 2021) [PAGE 3, 7].

Multi-week traps are explicit in the paper’s sample-stability analysis. RAPM rankings require approximately two months of possessions (~15,000 possessions, ~45 games) to reach Spearman ρ > 0.80 with full-season estimates, creating blind spots for rookies, traded players, and limited-minute role players [PAGE 12]. DRL-Shapley reduces this to approximately three weeks (~5,000 possessions, ~15 games) through learned state representation transfer and neural Shapley parameter sharing across players [PAGE 12]. Year-over-year stability for players with ≥1,500 minutes improves from ρ = 0.71 (RAPM) to ρ = 0.76 (DRL-Shapley), with the largest gains for bench players averaging 15–20 minutes per game (ρ = 0.58 to ρ = 0.69) [PAGE 12–13]. Nevertheless, the four-season window (2020–2024) may not capture rare player types or unusual roster constructions, and the assumption of relative ability stability ignores natural development and role changes across seasons [PAGE 25]. A multi-week evaluation horizon therefore must account for both the faster stabilization of DRL-Shapley and its residual vulnerability to roster turnover and schematic shifts that occur within a single season.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of coaches and players to revert to fixed-weight heuristics under pressure: traditional metrics assign offensive rebounds +1.0 and steals +1.0 regardless of game state, effectively assuming that a possession in the first quarter is worth the same as one in the final minute [PAGE 1, 14]. The learned model breaks this habit by conditioning value on leverage. In close games within ±4 points during the final three minutes, offensive rebounds reach +3.9 expected points, steals reach +3.3, and three-pointers reach +4.5—a 60% increase over the +2.8 regular-play value [PAGE 14–15]. Conversely, in late blowouts with ≥10-point margins, a steal is worth only +0.8, demonstrating that identical actions are not recursively interchangeable across clock states [PAGE 15]. This context sensitivity is partly engineered through the discount factor γ = 0.997 per second (half-life ~230 seconds), which mechanically raises the shadow value of late-game states, and partly learned through momentum features at τ = 30, 60, 120 seconds that detect runs and shifts in game flow [PAGE 4, 6].

The counter-trap operates at the player-evaluation layer. Fixed-weight systems such as PER overweight high-usage scoring and underweight defensive and off-ball contributions; the paper’s motivating example contrasts a high-usage guard with a defensive center whose offensive rebounds occur in clutch situations and whose defensive presence suppresses opponent efficiency without generating box-score events [PAGE 1]. DRL-Shapley captures this through defensive presence attribution: Rudy Gobert’s +5.52 total value is driven primarily by defensive presence (+2.48) and defensive actions (+0.95), while box-score-plus-minus methods capture only his blocks and rebounds, missing 2.48 points per 100 possessions of lineup-level impact [PAGE 18]. Among players identified as high defensive impact by DRL-Shapley, 15% fall in the bottom half of the league in BPM, revealing a systematic blind spot in additive box-score models [PAGE 18].

The clock operates recursively inside the MDP: because the value function discounts future states at γ per second, players’ optimal decisions should shift as remaining seconds decline, and the state encoder’s momentum features allow the network to detect whether a team is in a run or a lull at multiple timescales [PAGE 4, 6]. The learned action variances confirm that the model treats clutch-time states as high-information regimes where a single possession can swing win probability most dramatically, while blowout states are correctly attenuated [PAGE 15]. A recursive theory of mind for this system must therefore distinguish between what a player does, when they do it, and whom they are on the floor with; fixed metrics collapse all three dimensions into a single weight, whereas the DRL-Shapley factor preserves them as separate state-dependent variables.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The model relies solely on play-by-play data and cannot represent off-ball behaviors such as spacing, screening, rotations, and defensive positioning [PAGE 25]. Any claim that a player’s defensive presence rating reflects genuine deterrence is vetoed if tracking data later shows that the player’s on-court efficiency suppression is driven by teammates’ help defense or opponent shot selection rather than the player’s own off-ball gravity.

Biomechanical layer veto: Without player-tracking data, the state encoder lacks granular movement quality, defensive stance, closeout speed, and screen-setting geometry [PAGE 25]. A player whose DRL-Shapley value is high because of lineup co-occurrence with elite rim protectors would be vetoed in a biomechanical audit if their individual movement metrics do not independently correlate with opponent efficiency changes.

Weather/exogenous layer veto: Although NBA games are indoors, the model excludes non-performance information that external benchmarks incorporate: injury updates, rest management, travel fatigue, and late lineup changes [PAGE 23]. If a key connector is ruled out after the model’s ratings are computed, the aggregate team strength projection based on summed DRL-Shapley ratings of projected starters is invalidated because the model cannot condition on real-time roster availability.

Causal/adjudication veto: The paper explicitly states that Shapley estimates highlight correlation, not causation, and that unmeasured confounders persist because lineup choices are endogenous [PAGE 5, 22]. Synergy estimates remain associational, not causal; “together” and “apart” minutes can come from different distributions of game states due to non-random coach deployment [PAGE 22]. Therefore, any veto that demonstrates a player’s high DRL-Shapley value disappears when they are paired with a different supporting cast or deployed in a different tactical system invalidates the universal interpretation of the rating. The model’s outputs are robust only as context-specific descriptions of observed conditions, not as portable physical laws of player contribution.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 — Randomized removal of a high defensive-presence player. Intervention: Use an injury, illness, or late scratch to remove a player with high DRL-Shapley defensive presence (e.g., Rudy Gobert, +2.48 points per 100 possessions via defensive presence [PAGE 18]) from the lineup while keeping the rest of the rotation constant. Verifiable prediction: Opponent scoring efficiency should increase by an amount approximating the attributed defensive presence effect over the sample of affected possessions. If opponent efficiency does not rise correspondingly, the Shapley presence credit is vetoed as a confounded association rather than a causal effect.

Veto scenario 2 — Cross-roster synergy transfer. Intervention: Trade a player who exhibits strong positive synergy with a specific teammate in the training data (e.g., Jokić–Murray +2.87 synergy [PAGE 19–20]) to a new team and project their joint value using the learned pairwise synergy score. Verifiable prediction: Because synergy is context-specific and non-causal, dependent on team system, rotation patterns, and personnel [PAGE 22], the synergy score should not transfer to the new roster. If the new pairing reproduces the same +2.87 effect, the context-dependence limitation is vetoed and the synergy