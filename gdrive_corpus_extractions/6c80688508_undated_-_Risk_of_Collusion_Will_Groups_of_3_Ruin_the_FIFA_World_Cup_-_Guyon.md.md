---
source: "undated - Risk of Collusion Will Groups of 3 Ruin the FIFA World Cup - Guyon.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 24
model: deepseek/deepseek-v4.1-flash-1017
words: 7914
---

<NATIVE_REASONING>
We need answer to user. They provided source text and instructions: GSE + GSI Frontier Reasoning Foundry. Need produce answer with exact XML sections, >=1000 words, no betting lines, formal LaTeX, SI/information/probability units, assumptions, singularities/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need analyze source. It's a paper about collusion risk groups of 3. Need use page markers [PAGE N] exact? Source text has page numbers embedded (1,2,...). User says PAGES: 24. But source text actual appears pages 1-30? Hmm. Need cite exact [PAGE N] markers and verbatim quotes. We need infer page markers from source. They included page numbers at boundaries. Need cite exact quotes from paper. Must satisfy all sections. Need avoid betting lines. Need include formal equations. Need maybe mention no wagering. Need not say odds. We can discuss probabilities.

Need be careful "DRIVE SOURCE: ... PAGES: 24" but source text includes more pages? It says PAGES: 24 maybe intended 24 pages? Yet text page numbers go to 30. Need cite [PAGE N] where N from source page numbers. Use exact [PAGE 1] etc. Verbatim quotes should be exact from text. Need avoid excessive quotes? Allowed. Need at least 1000 words across sections. Need XML tags exactly. No markdown? It says exact XML sections. We can include XML tags. Need likely answer is a research audit. We can structure exactly.

Need parse source key equations. Need formalize p_RMF. Source has formulas omitted in text due PDF images. We need reconstruct. Proposition 3? Not visible fully. Table 3 not shown. Need state equations from text: dXY = 1 - pXY - pYX. p≤0 = p<0 + p0. pRMF = ? Text gives in perfect competitive balance p_RMF = 1/3 + 2/9*p≤0 when p=1/3? Let's derive from Table 3? Need maybe formal equation. Source says "In the case of perfect competitive balance, [formula omitted] and p≤0 > 1/2... Then dAB=dAC=dBC=1-2p and [formula] When p=1/3, pRMF = 1/3 + 2/9*p≤0. Assuming p≤0 = 0.6, we get pRMF = 7/15. For p=3/8, pRMF=1/4 + 9/32*p≤0 = 67/160 ~42%." Need reconstruct general p_RMF formula. Let's derive from Table 3 probabilities.

We need possible situations for A after Match 2:
1 A two wins: prob pAB pAC? Wait schedule: Team A plays B first and C second? Table 1: A vs B Match1, C vs? In group of 3: Match1 A vs B; Match2 A vs C; Match3 B vs C (probably). A is team playing first two. Need probabilities: pAB = A beats B, pAC = A beats C, pBA = B beats A, pCA = C beats A, dAB draw A-B, dAC draw A-C. Team A after match2: outcomes:
- A wins both: pAB pAC. safe.
- A win draw: pAB dAC or dAB pAC. safe.
- A win loss: pAB pCA (A wins vs B and loses vs C) or pBA? Actually A loses to B and wins vs C: pAC pBA. Risk if GDA <=0. Need probability pAB pCA * P(GDA≤0 | A one win one loss?) + pBA pAC * same? Source defines p≤0 conditional given A has one win and one loss. But if A wins B and loses C, conditional may same? It assumes same p≤0. So probability one win loss = pAB pCA + pBA pAC. times P(GDA≤0) = p≤0. Aggravated = p<0 + p0,i<j = p<0 + p0,i<j. Let's call p*.
- A two draws: dAB dAC. Always RMF. Aggravated? no? In 3-1-0 two draws risk not aggravated? Table says risk only. 
- A draw loss: dAB pCA (draw B, lose C) or pBA dAC. Always RMF.
- two losses: pBA pCA safe.

Thus p_RMF = pAB pCA p≤0 + pBA pAC p≤0 + dAB dAC + dAB pCA + pBA dAC. Equivalently p≤0(pAB pCA + pBA pAC) + dAB dAC + dAB pCA + pBA dAC. Check perfect balance pAB=pBA=pAC=pCA=p, dAB=dAC=d=1-2p. Then p_RMF = p≤0( p^2+p^2) + d^2 + d p + p d = 2p^2 p≤0 + d^2 + 2pd. Simplify d=1-2p. d^2+2pd = d(d+2p)=d(1)=1-2p. So p_RMF = (1-2p)+2p^2 p≤0. For p=1/3: 1-2/3=1/3; 2*(1/9)=2/9 => 1/3+2/9 p≤0. Matches. For p=3/8: 1-3/4=1/4; 2*(9/64)=18/64=9/32. matches. Great.

Aggravated p_RMF* = p* (pAB pCA + pBA pAC) maybe plus? Does two draws not aggravated. one draw loss not aggravated. So p_RMF* = (p<0+p0,i<j)(pAB pCA + pBA pAC). In perfect balance = 2p^2 p*. Fine. For 16 groups p_RMF(16)=1-(1-p_RMF)^16 if independent. Expected groups =16 p_RMF.

Need mention singularities: p=1/2? d=0; p_RMF maybe? If dAB=dAC=1 maximal risk=1. If p=1/2, d=0, p_RMF=2p^2 p≤0 = 0.5 p≤0? But p≤0? Hmm. Max risk when draws certain. Minimal risk 0 if conditions. Breakdown regimes: p_RMF=1 if dAB=dAC=1 (all A matches draw certain). p_RMF=0 if no collusion possibility (A surely wins both? Or pAB=1 and pCA=0 etc). p≤0 >1/2 in perfect balance? Note. Need discuss independence assumptions, no draw dependencies, p≤0 conditional not independent; 3-0 system invalid to simply replace pXY with pXY+1/2 dXY due conditional sign dependence. Need cite [PAGE 12]? Let's map pages.

Need map quotes to page numbers. Source text has page numbers:
- Page 1 begins title and intro, ends "traditional".
- Page 2 begins "groups of four..." and includes disgrace Gijon, Denmark-France, Japan-Poland. Ends "74th".
- Page 3 continues Japan-Poland, examples, intro sections. Ends "develops".
- Page 4 continues related work, section 2, risk definition. Ends "4".
Wait page number at bottom. We need use [PAGE N] for exact pages. The text: after "we use notation..." The page 4 includes Section 2 and Proposition? Let's parse.
At top line after page 3? Actually source text has page markers as standalone numbers:
1 at after intro first paragraph? Let's enumerate:
- After first paragraph "groups of four that have been continuously used since 1950.<sup>1</sup> Like..." then blank and "1" maybe page 1 footer. So [PAGE 1] encompasses title through that line. Page 2 starts "groups of four..."? Wait no page 1 ends before "groups of four"? Actually text: "but that the group stage will use 16 groups of three instead of the traditional \n\n\n\n1 \n\n\n\ngroups of four that have been continuously used since 1950." So page 1 ends "traditional"; page 2 starts "groups of four..." and continues through Japan-Poland at "74th". Then page 3 starts "minute..." includes intro. Then page 4? Let's list page footers:
1 after "traditional"
2 after "74th"
3 after "develops"
4 after "4"
5 after "5"
6 after "6"
7 after "7"
8 after "8"
9 after "9"
10 after "10"
11 after "11"
12 after "12"
13 after "13"
14 after "14"
15 after "15"
16 after "16"
17 after "17"
18 after "18"
19 after "19"
20 after "20"
21 after "21"
22 after "22"
23 after "23"
24 after "24"
25 after "25"
26 after "26"
27 after "27"
28 after "28"
29 after "29"
30 after "30"
Despite PAGES 24, source has 30 pages. Need cite as [PAGE 1] etc. The "PAGES: 24" may conflict; we can cite actual page numbers in text. It says exact [PAGE N] markers and verbatim quotes. Use [PAGE 4] etc.

Need ensure quotes exact. We can quote phrases:
- "the risk of match fixing (or collusion)" [PAGE 2? Actually page 2? Let's locate: intro says "A more serious issue is the subject of this article: the risk of match fixing (or collusion). As soon as Match 2 is finished..." This appears page 2? Wait page 2 starts "groups of four..." after footnote? Let's reconstruct: Page 1 has title, abstract, section 1 start, FIFA 48 decision, first paragraph. It ends "...traditional". Page 2 starts "groups of four ..." and includes schedule imbalance, risk, Gijon, Denmark-France, Japan-Poland up to 74th. Actually the risk paragraph appears on page 2. Good.
- "the team that plays the first two group games should be the a priori strongest team in the group" [PAGE 3? Actually abstract? Intro says Section 4 shows this? It appears in abstract? "we show that in order to minimize this risk, the team that plays the first two group games should be the a priori strongest team in the group." That is in abstract [PAGE 1]. Also Section 4 later [PAGE 10]. Need cite.
- "It is not too late for FIFA to review the format of the 2026 World Cup." [PAGE 27].
- "the 2026 FIFA World Cup will violate fair-play principles" [PAGE 3].
- "the risk of match fixing is maximal, equal to 1, in the case where dAB = dAC = 1." [PAGE 8].
- "forbidding draws does not eliminate the risk of collusion." [PAGE 8? It appears after Remark 4 on page 8? Let's check: Page 7 has Proposition 3 and perfect balance examples. Page 8 begins "The next two remarks..." includes Remark 4, banning draws, "Note that forbidding draws does not eliminate the risk of collusion." Then Remark 5, Corollary 6, Proposition 7, examples. So [PAGE 8].
- "Team A should be the a priori strongest team in the group ... Team A should not be the middle team." [PAGE 8? Remark 5 after conditions. It says this on page 8 maybe. Section 4 page 10. 
- "the risk of collusion is about 15% in any given group, if Team A is the a priori strongest in the group, but it climbs to around 50% otherwise." [PAGE 10].
- "the 3-2-1-0 point system does not do a better job at decreasing the risk of collusion than the 3-0 point system." Abstract [PAGE 1] and conclusion [PAGE 26].
- "deliberately losing the penalty shootout" [PAGE 12 or 20]. 
Need cite exact pages. Need maybe include quote with Page 12? The paper page 12 has "aggravated risk of match fixing on penalties" definition. Good.

Need produce XML. Need no markdown? It's okay to use plain text within tags. Need use LaTeX equations. Need mention SI/information/probability units. The paper is probability; units are dimensionless probability [0,1], not SI. We can state all quantities are dimensionless probabilities; entropy/information if needed? The instruction says "SI/information/probability units". So we can say probabilities dimensionless; if converting to information, use bits via H = -log2 p. But don't overdo. Need formal LaTeX equations. Need assumptions. Need exact singularity regimes. Need at least 1000 words. Need include multi-hop derivation and gray-zone audit in THINK_TRACE >=400 words. Need other sections maybe 100-200 each. Need >1000 total. Need maybe 1400 words. Desired oververbosity 5. Need not too long but >=1000.

Need probably answer as a "risk audit" of the paper. We should not mention betting lines at all. Avoid "odds" even in phrase. We can mention "probability". Need not mention spreads etc. They said zero betting lines: never mention spreads, totals, moneylines, or odds. So avoid "odds" entirely. Use probability only.

Need think about "retrocausal genealogy": historical/scientific lineage & multi-week traps. Need discuss historical examples: 1982 Gijon, 2004 Denmark-Sweden, 2017 Peru-Colombia, 2018 Denmark-France, Japan-Poland; multi-week traps in tournament schedule. "Retrocausal" means backwards causal lineage? We can frame: past collusion cases reveal future design risks; rules create incentives; multi-week traps: group stage odd size prevents simultaneous final matches; schedule A/B/C rest asymmetries; seeding bracket half traps; point systems create penalty-shootout elimination; alternate formats. Need mention "multi-week traps" maybe tournament duration 32 vs 35/38 days; group final simultaneous impossible. Need cite pages.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need discuss teams' recursive beliefs: B and C know A's result, know each other's incentives; tacit collusion without explicit agreement; Denmark quote "We just needed one point..." [PAGE 2]; Japan-Poland. Counter-trap: FIFA simultaneous kickoff; but groups of three make impossible; flexible schedule doesn't help; seeding bracket. Clock: last group match timing; 16 groups mean many clocks; rest days. Need mention 3-0/3-2-1-0 penalty shootouts create subgame where team can deliberately lose. This is recursive theory of mind: team knows losing penalty eliminates A at no cost. Need cite [PAGE 12] and [PAGE 20].
Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need adapt to sports: physical (rest days, travel, heat) and biomechanical? For soccer, biomechanical fatigue from schedule imbalance, weather? Paper doesn't discuss weather. Need state no direct weather/biomechanical data in source; veto proof means cannot infer physical veto from source. Need be careful: "Physical/biomechanical/weather veto proof" likely from prompt template. We need adjudicate cross-layer veto: The paper's probability model does not include physical/biomechanical/weather variables; any claim that weather or biomechanics veto collusion is not supported. We can state assumptions: independence of Match1/2 results ignores fatigue, injury, heat, travel; schedule imbalance via rest days can alter probabilities; no source evidence for weather. Need cite pages where rest days schedule imbalance [PAGE 2] and schedule impact [PAGE 9-10]. Since no weather mention, state "no page citation because absent". Is that okay? It asks proof. We can say "veto not proven; source abstains." Need formalize: p_RMF depends on pXY, dXY, p≤0; physical/weather variables enter only through those probabilities; no independent veto term. If we introduce V_phys, it is not in paper. This is gray-zone audit.
Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need define RLVR = Reinforcement Learning from Verifiable Rewards? Need provide counterfactual veto scenarios: e.g., if all final group matches simultaneous, then no pre-known result; but in groups of 3 impossible. Predict: p_RMF lower? Actually if simultaneous B-C and A? A not playing final. So no. Need 3 scenarios that could veto paper's claim:
1. If FIFA implements Format 4 (16 groups of 3, all advance; group winners bye, runners-up/third playoff) then risk eliminated because no elimination by B-C collusion. Predict p_RMF=0 in group stage under format, but new incentives? 
2. If team A is strongest and p≤0→0, then p_RMF→0? But not exactly if dAB dAC etc. Conditions. Predict if A surely wins both (pAB=pAC=1) then p_RMF=0. 
3. If dAB=dAC=1, p_RMF=1 maximal. This is not veto but counterfactual. Need "RLVR veto scenarios" meaning verifiable reward signals can veto hypothesis. We can frame as falsification scenarios with predictions. Need 3:
- Scenario A: All group final matches are synchronized and no prior result known (not possible in 3-team group). Prediction: if true, last-match collusion mechanism absent; p_RMF should fall to 0 for that mechanism. But paper's groups of three cannot satisfy. This vetoes any design claiming synchronized final round fixes 3-team groups.
- Scenario B: Format 3 (only group winners advance). Prediction: two-team collusion to eliminate A yields no benefit because only one advances; p_RMF (definition requiring both B,C advance) = 0; but new dead rubber/unmotivated B trap. Cite [PAGE 24? Format 3 page 24? Actually page 24? Let's locate: Format 3 appears page 24? The source page 24 starts "Format 1..."? Wait page 23 has "Alternate formats" and Table 12. Page 24 begins "Format 1: 12 groups of four..."? Actually page 24 includes Formats 1-5? Let's see: After page 23, page 24 starts "Format 1: 12 groups of four." and ends "playing during the knockout stage if they advance. They would have to wait until the last match..." Hmm. Format 3 and 4 are on page 24. Need cite [PAGE 24] for Format 3. 
- Scenario C: Introduce performance-based seeding (Format 5) so B/C still have incentive to win even if qualified. Prediction: collusion less likely because losing penalty or drawing may worsen bracket. But paper says significantly decreasing, not eliminating. Cite [PAGE 24? Format 5]. Need check page: Format 5 starts on page 24 and continues page 25? The text: "Format 5: 16 groups of three, seed knockout bracket based on performance across groups. ... This format raises logistics ... teams and fans could not plan ahead ... The teams that play this last match may be unfairly advantaged ... more soccer-free days ... length tournament." This spans page 24-25? Page 24 footer appears after "playing during the knockout stage if they advance. They would have to wait until the last match of the last group to know..." Actually page 24 ends mid-format 5? Wait sequence: page 23 has "Table 12 summarizes..." and then page 24 starts "Format 1..." It includes Formats 1-5 up to "playing during the knockout stage if they advance. They would have to wait until the last match of the last group to know when, where, and against who they will play in the round of 32. The teams that play this last match may be unfairly advantaged, as they would know who their opponent in the round of 32 would be, depending on the result of this last match. Also, more soccer-free days would be needed between the group stage and the round of 32 to ensure a minimum of rest days to all the teams that advance, which would lengthen the tournament." Then page 25 starts "Format 6..." So Format 5 on page 24. Good.
Need predictions maybe with p_RMF values. For Format 4, paper says "It would indeed eliminate the risk of collusion." [PAGE 24]. Good.
Need "SOURCE_OPERATORS_AND_EQUATIONS" cite exact equation dXY and p≤0. Include p_RMF general formula and p_RMF(16). Need state "All quantities are dimensionless probabilities in [0,1]; information units if desired: I(p) = -log_2 p bits." But p_RMF formula from source not explicitly shown general? We can derive from Table 3/proposition. The paper's Proposition 3 omitted in text due image. We can say "reconstructed from the stated components and the paper's numerical checks." Need avoid claiming verbatim if formula omitted. Need cite numerical checks [PAGE 7]. Use exact quotes: "dXY = 1 - pXY - pYX" [PAGE 6]; "p≤0 = p<0 + p0" [PAGE 6]; "When p = 1/3, pRMF = 1/3 + 2/9*p≤0" [PAGE 7]. Good.

Need "THINK_TRACE" deep multi-hop derivation and gray-zone audit >=400 words. Need show derivation of p_RMF from possible cases, schedule selection, point systems, format alternates. Need mention gray-zone: model ignores dependence, strategic effort, bracket preferences, p≤0 conditional; risk definition not actual fixing; suspicion may damage even if no fix; probability not causal; no weather. Need be careful to not overstate. Need include exact page citations. Let's craft.

Need maybe include "PAGE" markers exact. Since source text includes page numbers at footers, use [PAGE 1], [PAGE 2], etc. Need quote verbatim. Use quotation marks. Need not use fake quotes. Ensure exact wording:
- "Risk of match fixing occurs exactly in the following cases:" [PAGE 4? Actually Proposition 1 is on page 5? Let's locate. Page 4 has Section 2 and definition. Page 5 has Proposition 1. At page 4 footer after "4". Page 5 begins "We assume that, like..."? Wait page 4 ends with "FIFA is likely to continue to implement this rule.<sup>2</sup> We say that the risk of match fixing is aggravated..."? Let's reconstruct:
Page 3 ends "develops" after related work.
Page 4 starts "Bayesian locally-optimal design..." and continues related work, section 2, definition, examples, assumption 3-1-0, criteria. Ends at footer 4 after "For instance, this seemed to be the case of England and Belgium...". Actually page 4 includes Section 2 start and definition. Page 5 begins "We assume that, like for the most recent World Cups..." and Proposition 1. So Proposition 1 is [PAGE 5]. Good.
- "The two teams who play the last game in the group know exactly what results will let them advance..." Abstract [PAGE 1]. Use exact: "The two teams who play the last game in the group know exactly what results will let them advance to the knockout stage." [PAGE 1].
- "Risk of match fixing occurs when a result qualifies both of them at the expense of the third team of the group" [PAGE 1].
- "As soon as Match 2 is finished ... Teams B and C will know what results of Match 3 will let them advance" [PAGE 2]. Exact quote: "As soon as Match 2 is finished (see Table 1), Teams B and C will know what results of Match 3 will let them advance to the knockout stage." [PAGE 2].
- "the team that plays the first two group games should be the a priori strongest team in the group" [PAGE 3? Actually intro section 1 near end: "In particular, we show that in order to minimize this risk, the team that plays the first two group games should be the a priori strongest team in the group." This is page 3? Let's see page 3 includes intro end and Section 2? Actually page 3 starts "minute..." and includes examples, article outline, related work start. It ends "develops". The sentence about Section 4 is in article outline on page 3: "Section 4 investigates ... In particular, we show..." Wait page 3 contains article outline? Let's check: after Japan-Poland examples, "In this article, we quantify..." and section outline. Yes page 3. So cite [PAGE 3] for that quote. Abstract also [PAGE 1].
- "the risk of collusion is about 15% in any given group ... climbs to around 50% otherwise" [PAGE 10]. Exact.
- "the risk of match fixing is maximal, equal to 1, in the case where dAB = dAC = 1." [PAGE 8].
- "forbidding draws does not eliminate the risk of collusion." [PAGE 8].
- "the 3-0 point system increases the probability of an aggravated risk of collusion" [PAGE 15]. Exact: "Therefore the 3-0 point system increases the probability of an aggravated risk of collusion." [PAGE 15].
- "the global risk of collusion is higher in the 3-2-1-0 point system than in the 3-0 point system" [PAGE 20]. Exact: "However, surprisingly, the global risk of collusion is higher in the 3-2-1-0 point system than in the 3-0 point system: pRMF<sup>3210</sup> = pRMF<sup>30</sup> + ¼*dABdAC ≥ pRMF<sup>30</sup> ." [PAGE 20].
- "deliberately losing the penalty shootout" [PAGE 12]. Exact: "a team can decide to eliminate another team at no cost by deliberately loosing a penalty shootout." Note source misspells "loosing". Use [sic]? Could quote exact with [sic]. Good.
- Format 4 "It would indeed eliminate the risk of collusion." [PAGE 24].
- Format 5 "significantly decreasing the risk of collusion" [PAGE 24? Actually "thus significantly decreasing the risk of collusion." on page 24. Good.
- Format 7 "Since results of the first group stage are carried over, teams have no incentive to collude." [PAGE 25? It appears page 25. Good.
- Conclusion "the introduction of groups of three is a terrible step back in the history of the World Cup." [PAGE 26? Actually page 26? Conclusion starts page 26. Exact: "Our arguments shows that the introduction of groups of three is a terrible step back in the history of the World Cup." [PAGE 26].
Need maybe cite "risk of its repetition very high" [PAGE 26]. Good.

Need also discuss "multi-week traps": schedule includes rest days A/B/C [PAGE 2]; group stage can be 32 days vs alternatives 35/38 [PAGE 23-25]. The paper mentions "current format ... 32 days" and formats 4/6 38/35 days. Need cite [PAGE 23/24/25]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe state: physical layer: rest-day imbalance [PAGE 2]; biomechanical: no data in source; weather: absent. The veto proof: any cross-layer variable must modify pXY,dXY,p≤0; no independent term in model; therefore weather/biomechanics cannot "veto" the collusion mechanism unless they alter those probabilities. This is rigorous. Need formal LaTeX: p_RMF = f(p_AB, p_BA, p_AC, p_CA, p_≤0); V_phys not in equation. If V_phys = 0? Hmm. We can state "No source-supported V_weather term exists; the paper's model is closed over result probabilities." Use "breakdown regime" if probabilities not stationary. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable veto scenarios with predictions. We can list numbered. Need ensure predictions are measurable. Use "Prediction: p_RMF=0 under definition; new risk may appear if only group winner advances (dead rubber)." "Prediction: p_RMF ≤ baseline? Format 5 reduces but not eliminates." "Prediction: if dAB=dAC=1, p_RMF=1." That's a maximal-risk boundary not veto. But "veto" maybe scenario that would falsify paper. Need 3:
1. Simultaneous final match with no prior information: would veto last-match collusion mechanism. Prediction: p_RMF=0 for that mechanism; but infeasible in 3-team groups. Cite [PAGE 2] "not possible with groups that have an odd number of teams."
2. Only group winner advances: veto two-advance collusion. Prediction: p_RMF=0 under definition; but dead rubber risk. Cite Format 3 [PAGE 24].
3. Format 7 carry-over results: veto because teams have no incentive to collude. Prediction: p_RMF→0 or no incentive; cite [PAGE 25] "teams have no incentive to collude."
Need maybe include point system ban draws: Prediction 3-0 lowers p_RMF but increases aggravated; not a veto. Could use as counterfactual if FIFA bans draws: p_RMF^30 < p_RMF^310 but p_RMF*pen >0. But verify. The prompt asks 3 verifiable RLVR veto scenarios + predictions. I can include those and maybe note they are testable by simulation. Need not mention RLVR details? Could define "reward-verifiable veto" as outcome check. Fine.

Need answer in XML tags. Need no other text outside? It says exact XML sections. We can output only tags. Need include all sections. The tags names: <THINK_TRACE>, <SOURCE_OPERATORS_AND_EQUATIONS>, <RETROCAUSAL_GENEALOGY>, <RECURSIVE_THEORY_OF_MIND>, <CROSS_LAYER_VETO_ADJUDICATION>, <RLVR_COUNTERFACTUAL_VETOES>. Need maybe include <ANSWER>? No, exact sections. Just those tags. Need ensure >=1000 words. Let's draft around 1500-1800 words. Need word count. We can estimate.

Need be mindful "STRICT INVARIANTS: ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I will not use those words. Avoid "odds" even in "odds". Use "probability". Avoid "betting" maybe mention "no wagering"? Better not. Avoid "moneyline" etc. No "spread". Good.

Need use "SI/information/probability units": In SOURCE section, say: "All probabilities are dimensionless in [0,1]; no SI base unit applies. If mapped to information, I(p)=-log_2 p bits." This satisfies.

Need exact LaTeX equations. Use \( \) or \[ \]. In XML, backslashes okay. Need maybe escape &? No ampersand? We can avoid ampersand. Use "and" not &. Need avoid < in text? In XML, < inside tags could be parsed? Since final is plain text, but to be safe, use words "less than" or LaTeX \le. The tags themselves use < >. Inside, avoid raw "<" in formulas? Use \(p \le 0\). Good. Avoid "&". Use "and". Use ">"? XML text can include >. Less-than problematic. Use \le. Good.

Need cite pages with [PAGE N]. Use exact quotes. Need maybe include "verbatim" not necessary. Use quotes.

Need "THINK_TRACE" >=400 words. Let's write ~500 words. It should include derivation and audit. Need not be too repetitive. Let's craft:

Start: The paper's object is a 3-team round robin with two qualifiers. Define A first two matches, B first+last, C last two. After Match 2, B/C know A's final status. Proposition 1 says RMF cases: A has draw+loss, two draws, or win+loss with GD_A≤0. Aggravated if win+loss and GD_A<0 or GD_A=0 and i<j. Derive probability: p_RMF = p≤0(pAB pCA+pBA pAC)+dAB dAC+dAB pCA+pBA dAC. Check perfect balance p=1/3 yields 1/3+2/9 p≤0. Then 16 groups p=1-(1-p)^16 ~0.99996. Then schedule: A=S lowers to 15% vs 50. Point systems: 3-0 reduces p_RMF but increases aggravated and creates penalty-collusion; 3-2-1-0 reduces vs 3-1-0 but not vs 3-0? Wait paper says 3-2-1-0 global risk higher than 3-0 but lower than 3-1-0. Need state correctly: "Compared with 3-10, 3-21-0 slightly smaller; compared with 3-0, higher by ¼ dAB dAC." Good. Gray-zone: risk ≠ actual fixing; independence; p≤0 conditional; dXY; schedule unfair; no weather. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS": formal. Include assumptions:
A1 independence of Match1 and Match2 results.
A2 pXY fixed; dXY=1-pXY-pYX.
A3 p≤0 conditional on A having one win and one loss; p0 split etc.
A4 3-1-0 points; tie-breakers.
A5 no bracket-half preference? Paper assumes incentive to finish first but notes may prefer second.
Equations:
p_RMF = p_{\le0}(p_{AB}p_{CA}+p_{BA}p_{AC}) + d_{AB}d_{AC}+d_{AB}p_{CA}+p_{BA}d_{AC}.
p_RMF* = (p_{<0}+p_{0,i<j})(p_{AB}p_{CA}+p_{BA}p_{AC}).
p_RMF(16)=1-(1-p_RMF)^16.
E[#groups]=16 p_RMF.
Perfect balance: d=1-2p; p_RMF=(1-2p)+2p^2 p≤0; p=1/3 => 1/3+2/9 p≤0; p=3/8 => 1/4+9/32 p≤0=67/160.
3-0: p_RMF^30 = p_RMF^310 - 1/2 dAB dAC - 1/2(pBA dAC + dAB pCA)? Wait from text: "decreases ... by 1/2 dABdAC" and "by ½*(pBAdAC + dABpCA)" so p_RMF^30 = p_RMF^310 - 1/2 dAB dAC - 1/2(pBA dAC + dAB pCA). But note in 3-0 system probabilities pXY^30 = pXY + ½ dXY. The text says tempting but not correct. So don't state exact simple formula with same p. Use qualitative and quote. For 3-2-1-0: p_RMF^3210 = p_RMF^30 + 1/4 dAB dAC. This formula appears [PAGE 20]. Good.
Breakdown regimes:
- Max p_RMF=1 if dAB=dAC=1 [PAGE 8].
- Min p_RMF=0 under pAB=1 and (pCA=0 or p≤0=0), etc. [PAGE 8].
- Corollary p_RMF>0 if all probabilities positive [PAGE 8].
- 3-0 invalid substitution due conditional sign of GDA [PAGE 12]. 
- Penalty aggravated: 2m ≤ n condition [PAGE 13/14? Text says "There is an aggravated risk ... if and only if 2m ≤ n." Page 13? Actually page 13 has this? It starts page 13 "2. GDA <0..." and condition. So [PAGE 13]. Good.
Need cite exact quote: "we cannot assume that, in the case where Team A has 3 points after Match 2, the sign of the goal difference of A is an independent random variable." [PAGE 12]. Good.

Need "RETROCAUSAL_GENEALOGY": lineage. Mention Gijon 1982 led FIFA simultaneous last matches; but odd groups prevent. Denmark-Sweden 2004; Peru-Colombia 2017; Denmark-France, Japan-Poland 2018. The paper's lineage: Kendall and Lenten; Csato; Chater et al.; Truta; Krumer et al. Multi-week traps: 32-day limit, 104 games, 35/38 days, rest days, bracket half preferences England/Belgium. Cite pages. Need maybe quote "To prevent this to happen again, FIFA decided that all teams in a given group would play their last group match at the same time, which of course is not possible with groups that have an odd number of teams, in particular with groups of three." [PAGE 2]. Excellent. Use that.

Need "RECURSIVE_THEORY_OF_MIND": team mental models. B/C after Match 2 know. Tacit coordination. Denmark manager quote [PAGE 2]. Counter-trap: simultaneous kickoff impossible; flexible schedule doesn't help [PAGE 25]. Clock: last match, penalty shootout clock. 3-0 and 3-2-1-0 create "at no cost" penalty loss. Quote [PAGE 12]. Need maybe mention "crisis habit regression" as historical pattern: teams revert to safe draws. Use phrase. Counter-trap: Format 5 performance seeding; Format 7 carry-over. Clock: rest days A/B/C. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather. State source has no weather/biomechanical model; rest-day asymmetry [PAGE 2] is only physical-layer variable. Veto proof: The collusion event is a logical event given results and tie-breakers; physical variables cannot veto it unless they change pXY/dXY/p≤0. The model's equation has no separate V_phys term. Weather/biomechanical fatigue could shift probabilities but not eliminate logical cases; e.g., if dAB=dAC=1 then p_RMF=1 regardless of weather. For penalty system, fatigue might alter shootout outcomes but equal chance assumption is stated? Paper assumes equal chances [PAGE 12]. Cross-layer veto would require evidence not in source. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios:
1. "Simultaneous final group kickoff with no prior information" — infeasible in 3-team groups. Prediction: last-match pre-known-result mechanism p=0; paper's p_RMF would not apply; design veto. Cite [PAGE 2].
2. "Only group winner advances (Format 3)" — prediction: two-advance collusion p_RMF=0 under paper's definition; but dead rubber and unmotivated B risk remain [PAGE 24]. This is a veto of the two-team collusion mechanism but not of fairness issues.
3. "Format 7 carry-over results" — prediction: teams have no incentive to collude because first-stage results carry over; p_RMF→0 in second group stage; total 96 games, longer [PAGE 25]. Or Format 4 "all teams advance" eliminates risk [PAGE 24]. Need 3 scenarios. Use Format 4 instead of 7? Both. Need include predictions.
Could also include point-system counterfactual: If FIFA bans draws, predict p_RMF^30 < p_RMF^310 but p_RMF*pen >0; verifiable by formula/table. But prompt asks veto scenarios. Maybe include as one scenario. Let's do:
1. Format 4 (all advance) — eliminates risk; prediction p_RMF=0 but new bye/timing issues.
2. Format 7 (carry-over) — no incentive; prediction p_RMF→0; total 96 games.
3. Simultaneous final match — infeasible for odd groups; prediction mechanism vanishes but not implementable. Or "only group winner" — prediction p_RMF=0 but dead rubber. Need exactly 3. Maybe include "3-0 draw ban" as veto? It doesn't eliminate; so not veto. The prompt likely wants "RLVR counterfactual vetoes" meaning scenarios that would invalidate the model/claim. Use scenarios that would veto the risk claim. Need predictions. Good.

Need maybe define "RLVR" in answer? Not necessary but can say "Each veto is a verifiable counterfactual: if the rule change is implemented, the predicted probability event is checkable by simulation or enumeration." Good.

Need ensure no word "odds". Avoid. Use "probability". Avoid "spread". Good.

Need use "SI/information/probability units" in source. Good.

Need final answer only XML. Let's draft carefully. Need not include markdown. Use plain text.

Need count words. Let's estimate. THINK_TRACE ~600. SOURCE ~450. RETRO ~250. RECURSIVE ~250. CROSS ~200. RLVR ~250. Total ~2000. Good.

Need ensure no raw "<" inside text except tags. In formulas, use \le not <. Use "less than" if needed. Use "p_{\le 0}". Good. Use "\( \)" no <.

Need avoid ampersand. Use "and". In XML, ampersand is problematic; avoid "&" entirely. Use "and". Good.

Need maybe include "PAGE" citations inside each section. Good.

Need exact quotes:
- "the risk of match fixing (or collusion)" [PAGE 2].
- "The two teams who play the last game in the group know exactly what results will let them advance to the knockout stage." [PAGE 1].
- "Risk of match fixing occurs when a result qualifies both of them at the expense of the third team of the group" [PAGE 1].
- "As soon as Match 2 is finished ... Teams B and C will know what results of Match 3 will let them advance to the knockout stage." [PAGE 2]. Use ellipsis inside quote? Verbatim? Ellipsis indicates omission. Fine. Could quote full: "As soon as Match 2 is finished (see Table 1), Teams B and C will know what results of Match 3 will let them advance to the knockout stage." Exact.
- "To prevent this to happen again, FIFA decided that all teams in a given group would play their last group match at the same time, which of course is not possible with groups that have an odd number of teams, in particular with groups of three." [PAGE 2]. Exact (grammar as source).
- "We just needed one point, we were up against one of the best teams in the world at counterattacks, so we would have been stupid to open up a lot of space. We stood back and got the result we needed, it was a 0-0 and we're very pleased with that" [PAGE 2]. Exact? Source has "we're" yes.
- "the team that plays the first two group games should be the a priori strongest team in the group" [PAGE 3]. Exact? In source: "the team that plays the first two group games should be the a priori strongest team in the group." Yes.
- "the risk of collusion is about 15% in any given group, if Team A is the a priori strongest in the group, but it climbs to around 50% otherwise." [PAGE 10]. Exact.
- "The probability that there is a risk of match fixing is maximal, equal to 1, in the case where dAB = dAC = 1." [PAGE 8]. Exact? Source: "The probability that there is a risk of match fixing is maximal, equal to 1, in the case where dAB = dAC = 1." Yes.
- "forbidding draws does not eliminate the risk of collusion." [PAGE 8]. Exact.
- "Therefore the 3-0 point system increases the probability of an aggravated risk of collusion." [PAGE 15]. Exact.
- "the global risk of collusion is higher in the 3-2-1-0 point system than in the 3-0 point system" [PAGE 20]. Exact.
- "a team can decide to eliminate another team at no cost by deliberately loosing a penalty shootout." [PAGE 12]. Exact? Source: "where a team can decide to eliminate another team at no cost by deliberately loosing a penalty shootout." Yes. Use [sic] after loosing maybe.
- "It would indeed eliminate the risk of collusion." [PAGE 24]. Exact.
- "Since results of the first group stage are carried over, teams have no incentive to collude." [PAGE 25]. Exact.
- "the introduction of groups of three is a terrible step back in the history of the World Cup." [PAGE 26]. Exact? Source: "Our arguments shows that the introduction of groups of three is a terrible step back in the history of the World Cup." Yes.
- "It is not too late for FIFA to review the format of the 2026 World Cup." [PAGE 27]. Exact.
- "the 2026 FIFA World Cup will violate fair-play principles" [PAGE 3]. Exact? Source: "which reinforces the idea that the 2026 FIFA World Cup will violate fair-play principles." Yes.

Need "multi-week traps" maybe use "32 days" quote? Source: "Both the current format (1998-2018, 64 games) and the three-team group format (80 games) can be completed in 32 days." [PAGE 23]. Exact. Use.

Need "CROSS_LAYER" no quote? Use rest days quote: "Team B will enjoy more rest days between their two group matches than Teams A and C" [PAGE 2]. Exact. Use.

Need "RECURSIVE" quote Denmark. Good.

Need ensure no "odds" word. I won't.

Need final XML. Let's compose.

Potential issue: "SOURCE_OPERATORS_AND_EQUATIONS" needs "exact singularity/breakdown regimes." Include:
- dXY = 1 - pXY - pYX; must have pXY+pYX ≤ 1; if >1 invalid probability (breakdown). 
- p≤0 = p<0+p0; p0 = p0,i≥j + p0,i<j. 
- p_RMF formula. 
- Max p_RMF=1 if dAB=dAC=1. 
- Min p_RMF=0 conditions. 
- Corollary p_RMF>0 if all p positive. 
- 3-0 system substitution invalid because sign GD not independent. 
- 3-0 penalty aggravated condition 2m≤n. 
- 3-2-1-0 formula. 
Good.

Need mention "information units" maybe "I(p) = -log_2 p bits" but not overdo. Good.

Need final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s causal object is not “a collusion” but the prior event that makes collusion feasible: after Match 2, Teams B and C know whether some Match 3 result lets both advance at Team A’s expense. The abstract states the mechanism plainly: “The two teams who play the last game in the group know exactly what results will let them advance to the knockout stage” and “Risk of match fixing occurs when a result qualifies both of them at the expense of the third team of the group” [PAGE 1]. Section 1 repeats the timing: “As soon as Match 2 is finished (see Table 1), Teams B and C will know what results of Match 3 will let them advance to the knockout stage” [PAGE 2]. The paper therefore defines a risk event, not an observed corrupt act, and warns that even suspicion can damage the tournament because outcome uncertainty is central to sport [PAGE 2].

The multi-hop derivation runs as follows. Team A plays the first two group matches against B and C. Proposition 1 enumerates the post-Match-2 states in which B and C can jointly eliminate A. The risk cases are: A has one draw and one loss; A has two draws; or A has one win and one loss with nonpositive goal difference, \(GD_A \le 0\) [PAGE 5]. Aggravation occurs in the win-loss branch when \(GD_A<0\), or when \(GD_A=0\) and \(i<j\), where \(i\) is the goals against A by the team A beat and \(j\) is A’s goals in its loss [PAGE 5]. This matters because aggravation means B or C can still win the group after losing the last match, weakening the incentive to attack.

To convert logic into probability, define \(p_{XY}\) as the probability X beats Y and \(d_{XY}=1-p_{XY}-p_{YX}\) as the draw probability [PAGE 6]. Define \(p_{\le 0}=p_{<0}+p_0\), the conditional probability that A’s goal difference is nonpositive given A has one win and one loss [PAGE 6]. The risk cases yield the reconstructed group-level probability
\[
p_{\rm RMF}=p_{\le0}\left(p_{AB}p_{CA}+p_{BA}p_{AC}\right)+d_{AB}d_{AC}+d_{AB}p_{CA}+p_{BA}d_{AC}.
\]
The numerical checks in the source confirm this: under perfect balance with \(p=1/3\), \(p_{\rm RMF}=1/3+(2/9)p_{\le0}\); with \(p=3/8\), \(p_{\rm RMF}=1/4+(9/32)p_{\le0}=67/160\approx42\%\) [PAGE 7]. Across 16 independent groups, \(p_{\rm RMF}(16)=1-(1-p_{\rm RMF})^{16}\), which gives about \(0.99996\) for \(p_{\rm RMF}=7/15\) [PAGE 8]. The model’s gray zone is that independence of Match 1 and Match 2 is assumed, \(p_{\le0}\) is conditional rather than primitive, and “risk” is not “fixing.” The source itself notes that teams may prefer second place for bracket reasons, so the “win the group” incentive is not absolute [PAGE 4]. Schedule choice is the largest lever: if Team A is the a priori strongest, group risk is about 15%; otherwise it climbs to around 50% [PAGE 10]. Point-system fixes are not free: banning draws may reduce risk but creates penalty-shootout elimination paths [PAGE 12], [PAGE 15]. The audit must therefore separate logical feasibility, strategic incentive, and observed behavior.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All quantities are dimensionless probabilities in \([0,1]\); no SI base unit applies. If a probability is mapped to information, use \(I(p)=-\log_2 p\) bits. The model assumes independent Match 1 and Match 2 results and fixed match-result probabilities [PAGE 6]. Define
\[
d_{XY}=1-p_{XY}-p_{YX},\qquad p_{\le0}=p_{<0}+p_0,\qquad p_0=p_{0,i\ge j}+p_{0,i<j}.
\]
The paper states these definitions explicitly [PAGE 6]. The group-level risk probability reconstructed from Proposition 1 and Table 3 is
\[
p_{\rm RMF}=p_{\le0}\left(p_{AB}p_{CA}+p_{BA}p_{AC}\right)+d_{AB}d_{AC}+d_{AB}p_{CA}+p_{BA}d_{AC}.
\]
The aggravated-risk probability is
\[
p_{\rm RMF^*}=\left(p_{<0}+p_{0,i<j}\right)\left(p_{AB}p_{CA}+p_{BA}p_{AC}\right).
\]
The tournament-level probability for 16 independent groups is
\[
p_{\rm RMF}(16)=1-\left(1-p_{\rm RMF}\right)^{16},
\]
and the expected number of groups with risk is \(16p_{\rm RMF}\) [PAGE 8]. Under perfect competitive balance, \(d=1-2p\) and
\[
p_{\rm RMF}=(1-2p)+2p^2p_{\le0}.
\]
The source checks \(p=1/3\) and \(p=3/8\), giving \(1/3+(2/9)p_{\le0}\) and \(1/4+(9/32)p_{\le0}=67/160\) [PAGE 7]. Boundary regimes: \(p_{\rm RMF}=1\) is maximal when \(d_{AB}=d_{AC}=1\) [PAGE 8]; \(p_{\rm RMF}=0\) is minimal under conditions such as \(p_{AB}=1\) and either \(p_{CA}=0\) or \(p_{\le0}=0\) [PAGE 8]; and \(p_{\rm RMF}>0\) if all relevant probabilities are strictly positive [PAGE 8]. For the 3-0 system, the paper warns that one cannot simply replace \(p_{XY}\) by \(p_{XY}+\tfrac12 d_{XY}\) because “we cannot assume that, in the case where Team A has 3 points after Match 2, the sign of the goal difference of A is an independent random variable” [PAGE 12]. In the 3-0 system, an aggravated penalty risk occurs iff \(2m\le n\) in the relevant goal-difference branch [PAGE 13]. For 3-2-1-0, the source states
\[
p_{\rm RMF}^{3210}=p_{\rm RMF}^{30}+\tfrac14 d_{AB}d_{AC}\ge p_{\rm RMF}^{30}
\]
[PAGE 20]. The breakdown condition for the algebraic model is \(p_{XY}+p_{YX}>1\), which makes \(d_{XY}\) negative and invalid as a probability.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage is explicit. The “disgrace of Gijon” is the 1982 West Germany–Austria match in which both teams were satisfied with a 1-0 result that eliminated Algeria [PAGE 2]. The retrocausal lesson is that FIFA responded by making final group matches simultaneous: “To prevent this to happen again, FIFA decided that all teams in a given group would play their last group match at the same time, which of course is not possible with groups that have an odd number of teams, in particular with groups of three” [PAGE 2]. Thus the older safeguard is structurally unavailable in the 2026 three-team design. The paper also traces Denmark–Sweden at UEFA Euro 2004, Peru–Colombia in 2017, Denmark–France in 2018, and Japan–Poland in 2018 [PAGE 2], [PAGE 3]. These cases show a lineage from explicit mutual benefit to tacit non-aggression, which is the gray zone the model formalizes.

The scientific genealogy includes Kendall and Lenten on tacit collusion and rule-induced unintended consequences, Csato on perverse incentives, Chater et al. and Truta on competitiveness in three-team groups, and Krumer et al. on fairness under perfect balance [PAGE 3]. The multi-week trap is tournament architecture: the current 64-game format and the 80-game three-team group format can fit in 32 days, while 12 groups of four would require 104 games and at least another week [PAGE 23]. Alternative formats trade duration against collusion: Format 4 totals 96 matches and could fit in 38 days [PAGE 24]; Format 6 totals 88 games in about 35 days [PAGE 25]; Format 7 totals 96 games and lasts at least one more week [PAGE 25]. The trap is that a “short” group stage creates odd groups and non-simultaneous final matches, while a “fair” group stage lengthens the event. Bracket-half preferences, such as England and Belgium in 2018, add another multi-round incentive trap [PAGE 4].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive structure is: B and C know A’s result; each knows the other knows; each knows that a mutually satisfactory result can eliminate A; and each can infer the other’s cost of attacking. The source’s Denmark manager quote is the habit-regression signal: “We just needed one point, we were up against one of the best teams in the world at counterattacks, so we would have been stupid to open up a lot of space. We stood back and got the result we needed, it was a 0-0 and we're very pleased with that” [PAGE 2]. This is not an explicit pact; it is a shared preference for the current score. The counter-trap is the simultaneous final kickoff, but it fails for odd groups [PAGE 2]. Flexible scheduling also does not solve the two-advance case [PAGE 25]. The clock effect is different: in three-team groups, Match 3 is the last clock, and B and C see A’s final position before kickoff. Penalty-shootout systems add a second clock: a team can draw after 90 minutes and then choose whether to win or lose the shootout. The paper warns that a team can “decide to eliminate another team at no cost by deliberately loosing a penalty shootout” [PAGE 12]. Format 5, performance-based knockout seeding, counters the habit by making group performance determine the bracket, but it introduces logistics and timing problems [PAGE 24]. Format 7 carries results over, so teams “have no incentive to collude” in the second group stage [PAGE 25].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source has no weather or biomechanical submodel. The only physical-layer variable it names is rest-day asymmetry: “Team B will enjoy more rest days between their two group matches than Teams A and C” [PAGE 2]. There is no page evidence for a weather veto, heat veto, or biomechanical injury veto. The rigorous adjudication is therefore negative: a physical or weather factor cannot be inserted as an independent “veto” unless it changes \(p_{XY}\), \(d_{XY}\), or \(p_{\le0}\). The risk equation is closed over result probabilities. For example, if \(d_{AB}=d_{AC}=1\), the source states the risk is maximal at 1 [PAGE 8]; no weather term appears to reduce that logical event. Rest-day asymmetry may shift probabilities, but it does not remove the post-Match-2 information set. Penalty systems assume equal shootout chances [PAGE 12]; fatigue could alter that assumption, but the source does not quantify it. Thus the cross-layer veto proof fails: physical/weather claims are unsupported by the source and cannot override the formal collusion event without additional evidence.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Counterfactual: enforce simultaneous final group matches with no prior result known. Prediction: the specific Match 3 pre-known-result mechanism is eliminated, so the paper’s \(p_{\rm RMF}\) should not apply to that last-match channel. The veto is verifiable but infeasible for three-team groups: the source says simultaneous last matches are “not possible with groups that have an odd number of teams, in particular with groups of three” [PAGE 2]. Prediction: if FIFA claims odd-group simultaneity fixes collusion, reject the claim.

2. Counterfactual: adopt Format 3, 16 groups of three with only group winners advancing. Prediction: the two-team collusion event defined by the paper collapses to zero because B and C cannot both advance by eliminating A. The source says this “would eliminate the risk of collusion” but lists dead rubbers and unmotivated-team fairness problems [PAGE 24]. Verifiable prediction: \(p_{\rm RMF}=0\) under the paper’s definition, while new fairness risks remain.

3. Counterfactual: adopt Format 7, 16 groups of three followed by eight groups of four with carried-over results. Prediction: second-stage teams have no incentive to collude because first-stage results carry over; the source states “Since results of the first group stage are carried over, teams have no incentive to collude” [PAGE 25]. Verifiable prediction: collusion risk in the second group stage falls toward zero, but the tournament expands to 96 games and at least one more week [PAGE 25]. A simulation or rule-enumeration check can verify whether the carried-over-results mechanism removes the B-C joint-elimination channel.
</RLVR_COUNTERFACTUAL_VETOES>