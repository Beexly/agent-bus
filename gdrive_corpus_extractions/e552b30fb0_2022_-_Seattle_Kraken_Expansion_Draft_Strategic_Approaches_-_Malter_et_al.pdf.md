---
source: "2022 - Seattle Kraken Expansion Draft Strategic Approaches - Malter et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2022"
pages: 24
model: deepseek/deepseek-v4.1-flash-1017
words: 6766
---

<NATIVE_REASONING>
We need answer to user. Need produce GSE + GSI Frontier Reasoning Foundry with strict invariants. Need analyze source PDF pages? User provides source text pages 24. Need produce >=1000 words across exact XML sections. Zero betting lines; no spreads/totals/moneylines/odds. No toy equations. Need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need sections:
<THINK_TRACE> deep multi-hop derivation & gray-zone audit >=400 words.
<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need likely context? User drives source. Need answer as frontier reasoning foundry. It might be about sports analytics paper. Need derive strategic approaches. Need not mention betting. Need cite pages exact quotes. Need formal equations maybe expansion draft constraints, protection probability, value, expected goals, Corsi, Fenwick save pct, GSAA. Need use units: dimensionless probabilities, goals, goals/60, games, USD, years, etc. Need be careful not invent toy equations? "Formal LaTeX equations" is allowed. Avoid fake ratios like Force/Fatigue. We can formulate decision-theoretic expected utility and constrained optimization. Need exact singularity/breakdown regimes: when correlations break due to AHL/injury/contract/rookie exemption/team depth/trade/goalie overlap; when denominators zero (TOI=0, GP=0); when sample sizes low; when collinearity causes identifiability failure; when protection labels are endogenous. Need page citations and verbatim quotes.

Need include >=1000 words. Desired oververbosity 5. Need robust. Need sections exact XML. Need within <THINK_TRACE> >=400 words. Can be longer. Need all sections. Need no betting lines. Mention no betting. Avoid "odds" word? Invariant says never mention odds. Better not mention word "odds" at all? It says never mention spreads, totals, moneylines, or odds. Avoid "odds" string maybe. Also avoid "moneyline". "Contract" okay. "Cap" okay.

Need maybe answer as report. Need cite exact [PAGE 2], [PAGE 3], etc. Verbatim quotes with quotation marks. Need include source pages exactly. We can quote short phrases.

Need ensure no fake ratios. Equations should have definitions, units, assumptions, breakdown regimes. Could write:
Protection label \(P_i\in\{0,1\}\). Estimate \(p_i = \Pr(P_i=1 \mid x_i)\); probabilistic units dimensionless. Use logistic model \(p_i = \sigma(\beta_0 + \beta^\top x_i)\). Breakdown: separation, collinearity, small n, label leakage/exemption. The paper doesn't fit logistic model but correlates. We can present formalization of source operators not invented? Maybe okay as formal analysis. Need not be toy. Include exact source-derived variables: TOI/GP, PTS/60, Corsi, Fenwick save, GSAA. Units:
TOI/GP minutes/game; PTS/60 points per 60 minutes; Corsi = shot attempt differential at even strength, count or per-60; FSv% dimensionless fraction; xFSv% expected; dFSv% difference; GSAA goals saved above average (goals). Cap hit USD; cap percentage. Need equations:
Could define Corsi differential \(C_i = \sum_{t\in EV} (SA^{\text{for}}_{i,t} - SA^{\text{against}}_{i,t})\), unit shot attempts; Corsi/60 \(C_{60,i}= C_i / (TOI_i/60)\), shot attempts per 60 min. Breakdown if TOI_i=0.
Fenwick save percentage \(FSv\%_i = 1 - \frac{GF^*_i}{FF_i}\)? Need exact? Fenwick save percentage usually (Fenwick shots against - goals against)/Fenwick shots against at even strength? Or save percentage on unblocked shots. Define \(FSv\%_i = (F_i - G_i)/F_i\) dimensionless; \(F_i>0\), breakdown F=0. Need not overclaim exact. The paper calls FSv% Fenwick save percentage; dFSv% delta; xFSv% expected. GSAA = goals saved above average. Could define \(GSAA_i = \sum_{\text{shots}} [\Pr(\text{save}\mid x_s)-\bar{\Pr}(\text{save}\mid x_s)]\) or goals saved above average; units goals. Need maybe avoid fake? It's standard. We can state as formalization of reported metric.

Expansion selection optimization:
Variables \(z_{i,t}\in\{0,1\}\) select player i from team t. Constraints: one per team \(\sum_{i\in \mathcal P_t} z_{i,t}=1\) for 30 teams except VGK exempt. Position minima: F>=14, D>=9, G>=3; total 30 picks? Actually one per 30 teams except VGK exempt => 30? NHL has 32 teams incl Seattle? 2021: 30 teams selectable? VGK exempt, Seattle itself not select. There are 31 other teams incl VGK? NHL 2021: 31 existing teams, Seattle expansion, VGK exempt, so selects from 30 teams. Yes. Need total 30 selections. Min 14F/9D/3G = 26; remaining 4 any. Max 30. Cap hit sum between 60% and 100% of 2020-21 upper limit. Contract minimum 20 under contract. Position. Protected lists. Player eligibility: NMC must protected unless waived; <=2 NHL seasons exempt; expose requirements. Need use source pages [2][3]. Need exact quotes.

Need multi-hop derivation:
- Source studies VGK 2017 protection correlates to infer Seattle 2021.
- Need translate protected labels into Seattle selection strategy under constraints.
- Stat correlations: TOI/GP, PTS/60, Corsi, FSv%, GSAA; outliers due to AHL, injury, contract, rookie exemption, depth, trade, UFA.
- Formal decision: maximize value under constraints; value not just protected; unprotected players may be undervalued due to exogenous reasons (rookies exempt? Actually unprotected outliers like McDavid/Matthews were exempt, not actually available? In source they're unprotected in protection data but exempt; thus not selectable. Need note eligibility veto.) This is key: outliers are not necessarily proof of undervaluation; many are exempt (<=2 seasons) so not available. Source page 3 quote "All players who have two or less seasons in the NHL at the end of the 2020-2021 season are exempt from the expansion draft." Page 9 lists McDavid/Matthews etc as unprotected outliers due to 1st/2nd year. That is an eligibility veto, not Seattle target. Need mention.
- Players with NMC must be protected, so they reduce exposed pool; teams may buy out/waive to protect younger. Page 17 Beauchemin bought out NMC.
- Expose requirements force teams to expose certain players; Seattle can exploit required exposure vs chosen protection. Need maybe define exposure constraint.
- Cap floor/ceiling: cap hit between 60 and 100% upper limit. This may force selecting some higher cap players. Need not betting.
- Risk: source's conclusion advanced hockey data not best general predictor because too specific but good comparing; teams favor younger and better contracts; exceptions injury/depth/AHL. Page 23 quotes.

Need "gray-zone audit" within THINK_TRACE: identify ambiguity, leakage, endogeneity, survivorship, small sample, collinearity, position-specific, goalie overlap. Need exact singularity/breakdown regimes in source operators section.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Need discuss lineage from hockey analytics: Corsi/Fenwick/expected goals/GSAA, Rob Vollman, Hockey Abstract, Hockey Reference, NHL.com. Page 24 quotes. Multi-week traps: overfitting to VGK 2017, treating protected status as value, ignoring expansion rules changes? Actually rules same. Multi-week traps: narrative traps, hindsight, AHL dominance, injury return, contract status, team depth, goalie tandem. Need mention over multiple weeks, scouts must update injury/contract/trade info; using stale protected lists. Also "multi-week traps" maybe in sports research context: regress to habit over weeks. We can frame as scouting/analysis traps persisting weeks until deadline. Need no betting.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need discuss decision-maker under crisis (expansion draft) falls back to habit: protect veterans/known names, over-weight TOI, recent performance, avoid risk; counter-trap: Seattle should exploit habit by targeting undervalued young/contract-efficient/role players; clock: trade deadlines, free agency, draft day, contract expiry, injury timelines. Need mention recursive: Seattle modeling GM's model of Seattle? Actually expansion draft: teams protect; Seattle predicts exposed lists. Need recursive theory of mind: each team anticipates Seattle's valuation and may expose bait, Seattle anticipates that. Need "crisis habit regression" = under uncertainty/timer, GMs revert to veteran protection despite analytics; "counter-trap" = don't overcorrect by chasing outliers; "clock" = constraint deadlines and injury return. Need formal? In section can be prose.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need discuss physical/biomechanical vetoes: injury (lower-body surgery, wrist surgery, knee injury, 59 games missed), age decline, contract cap, NMC, eligibility, team depth. Weather? Hockey indoor, weather not direct; travel/climate? Need "weather veto proof": no weather operator in source; any weather-based inference is vetoed unless arena/travel/climate data with causal model. Need state physical/biomechanical vetoes: injury history overrides TOI/PTS; AHL dominance not transferable; goalie workload; age curve; contract status; medical clearance; cap. Need proof? "veto proof" maybe demonstrate that a statistical candidate is vetoed if injury/exemption/contract condition. Use examples: Quick lower body injury missed 59 games; Markstrom backup; Stolarz knee; Varlamov veteran; McDavid/Matthews exempt; Panarin second year; Marleau UFA; Beauchemin NMC buyout; Dumba depth; de Haan expiring; Skjei rookie. Need cite pages. Weather not present; state no evidence in source, so weather cannot be used as positive or negative; only if physical environment (ice quality, travel) measured. But invariant says physical/biomechanical/weather veto proof. Need maybe "weather veto proof" as audit: source has no weather variable; thus any weather claim is invalid. Need exact.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR? Reinforcement Learning from Verifiable Rewards? Need craft 3 counterfactual veto scenarios with predictions. Need be verifiable: scenario, veto condition, prediction. Avoid betting. Could be:
1. Eligibility veto: If a player has <=2 NHL seasons at end 2020-21, then despite being listed "unprotected" in VGK data, veto selection; prediction Seattle does not select McDavid/Matthews/Nylander/Reinhart-type exempt players; exposed-pool count excludes them. Source pages 3, 9.
2. Medical veto: If player missed 60+ consecutive games due to potential career-ending injury or has season-ending surgery, selection value is discounted/vetoed absent medical clearance; prediction Quick/Stolarz-like cases not selected as primary value unless cap/mentorship; page 3, 21. Need careful: Quick was protected in source, not selected. We can say in expansion simulation, a player with lower-body injury missing 59 games (Quick) would be vetoed from "high-value starter" bucket; page 21 exact quote.
3. Contract/NMC/Expiry veto: If contract expires and player becomes UFA or NMC requires protection/buyout, selection probability reduced unless extension; prediction de Haan/Panik/Marleau-type expiring players not selected as core; page 13,17,3. Also cap floor: if sum cap <60% or >100%, selection set invalid; prediction any proposed 30-player set below 60% or above 100% rejected; page 3. Need three scenarios. Maybe include cap veto as one. Need "verifiable RLVR vetoes" - maybe each has a checkable assertion. Need predictions.

Need include "ZERO BETTING LINES" - avoid wagering terms. Also "odds" word not use. I must ensure not saying "odds." Avoid "bet." Could mention "probabilistic" but not odds. Avoid "total" maybe invariant says totals as betting line. But "total cap hit" is okay? It says never mention totals? "spreads, totals, moneylines, or odds." It might be okay to say "total cap hit" as hockey term? To be safe, use "aggregate cap hit" not "total". Avoid "over/under." Avoid "spread." "Money" in contract okay? "moneylines" no. Need not mention "betting" even? It says zero betting lines. We can say "No wagering or line variables are used." But includes "wagering" not banned? Better avoid any betting terms entirely. But maybe mention "No betting lines" in answer? The invariant says never mention betting lines. Avoid.

Need exact XML tags. Need >=1000 words. Need maybe around 2000-2500 words. Desired oververbosity 5. Need not too huge. But must satisfy depth. We can write ~2200 words. Need sections exact. Need include page citations and quotes.

Let's plan content.

Start maybe:
<THINK_TRACE>
[>=400 words] Need deep multi-hop derivation & gray-zone audit. Write 600-800 words. Include:
- Source's objective: infer Seattle expansion draft strategy from VGK protected/unprotected data. Formal problem: constrained selection under rules. Multi-hop:
  1. Parse rules [PAGE 2-3]: one player from each of 30 teams; VGK exempt; min 14F/9D/3G; min 20 under contract; protection formats; NMC; exempt <=2 seasons; exposure criteria; 60-100% cap.
  2. Build exposed pool = eligible players not protected and not exempt; protection probability model from 2017 labels; but labels are not value.
  3. Position-specific stat operators: TOI/GP, PTS/60, Corsi, FSv%, GSAA. Outliers are not random: AHL, injury, contract, rookie exemption, team depth, trade, UFA. Need audit: protected outliers may be protected for reasons not captured; unprotected outliers may be exempt/expiring/not available. So using outliers as targets is invalid.
  4. Derive selection value \(V_i = \mathbb E[G_i]\) maybe wins above replacement; constraints. Use robust expected utility with risk penalty and cap. Need no fake ratio. Maybe define \(U_i = \alpha \hat{W_i} - \lambda \sigma_i + \beta \text{cap\_efficiency}_i - \gamma \text{medical\_risk}_i\), with units wins. That's formal but maybe toy? It is decision utility, okay. But SOURCE_OPERATORS section for equations. In THINK_TRACE can mention.
- Gray-zone: correlation vs causation; protected label includes team preference and rule constraints; data from 2016-17 and 2018-19; applying to 2021; small sample by position; goalie metrics overlap; exposure requirements force exposure; NMC reduce pool; cap floor can force picks; trade/extension dynamics; injury timeline; team depth. Need quote Page 23 "Advanced hockey data is not the best as a general predictor..." and Page 20 overlap quote.
- Conclusion: use stats for comparing within position and within comparable contract/health/eligibility, not general predictor; Seattle should target solid 2nd-3rd line players or unproven risky depending timeline [Page 23].
Need ensure >=400 words. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown. Need enumerate operators. Use equations:
1. Protection label and conditional probability:
\(P_{i}\in\{0,1\}\), \(p_i=\Pr(P_i=1\mid x_i)\), dimensionless [0,1]. Assumption iid conditional? Actually no. Breakdown: label leakage due to NMC/exemption; small n; separation; collinearity; position pooling invalid.
2. TOI/GP: \(T_i = \frac{\sum_{g=1}^{G_i} t_{i,g}}{G_i}\) minutes/game. Breakdown \(G_i=0\) undefined; AHL/partial season confounds; injuries.
3. PTS/60: \(R_i = \frac{60 \cdot \text{PTS}_i}{\text{TOI}_i}\) points per 60 min. Breakdown TOI=0; low TOI variance; role usage; PDO? Could mention PDO = shooting% + save% dimensionless. Paper uses PDO. Need maybe include.
4. Corsi: \(C_i = \sum_{e\in EV} (SA^{F}_{i,e} - SA^{A}_{i,e})\), shot attempts. Corsi/60 = \(60 C_i / TOI_i\). Breakdown TOI=0; score effects, zone starts, teammate effects, missing context.
5. Fenwick save percentage: \(F\!Sv\%_i = (F_i - G_i)/F_i\), dimensionless; \(F_i\) unblocked shot attempts against. Breakdown F_i=0; low shots; team system; overlap with games/TOI/shots [Page 20 quote].
6. GSAA: \(GSAA_i = \sum_{s=1}^{S_i} [\Pr(\text{save}\mid x_s)-\bar{\Pr}(\text{save}\mid x_s)]\) goals saved above average; units goals. Breakdown S_i small; model misspecification; backup usage; injury.
7. Expected goals? Paper mentions Expected Goals For [Page 8]. Could define \(xG_i = \sum_{s} \Pr(\text{goal}\mid x_s)\), goals; xGF. Breakdown model etc. Maybe not necessary but page 8.
8. Contract cap feasibility: \(C_{\min}=0.60 C_{\text{upper}}\), \(C_{\max}=1.00 C_{\text{upper}}\); \( \sum_i z_i h_i \in [C_{\min},C_{\max}]\), USD. Breakdown cap projections, retained salary, bonus, buyouts. Need cite Page 3 quote "60% and 100%".
9. Selection set constraints:
\(\sum_{i\in \mathcal P_t} z_{i,t}=1\) for each t in 30 selectable teams; VGK exempt. \(\sum_i z_i \ge 20\) under contract? Actually min 20 under contract; \(\sum_i z_i n_i\ge 20\). Positions \(\sum_i z_i F_i \ge14\), D>=9, G>=3. \(z_i=0\) if not eligible/exempt/NMC? NMC are protected unless waived; if NMC player exposed? Actually must be protected unless waive. So only in exposed pool if waived. Breakdown infeasible if exposure constraints not met by teams or cap floor.
10. Exposure constraint for each team: expose at least 2F and 1D under contract 2021-22 with games conditions; 1G under contract or RFA. Formalize? Could include \(E_{t,F}\ge2, E_{t,D}\ge1, E_{t,G}\ge1\). Breakdown if teams fail? League enforces.
Need exact quotes [PAGE 2], [PAGE 3], etc.

Need "exact singularity/breakdown regimes": mention denominators zero, sample size, collinearity, label leakage, eligibility/exemption, NMC, cap infeasibility, injury, AHL confounding, position-specific pooling, goalie overlap. Include a paragraph "Breakdown regimes" with bullets.

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps. Need discuss lineage:
- Hockey analytics lineage: Rob Vollman's Hockey Abstract 2016-17 player data; Hockey Reference advanced 2018-19; NHL.com protected list [Page 24]. Corsi/Fenwick are shot-attempt metrics from early 2000s; expected goals and GSAA quantify shot quality/goalie performance; expansion draft precedent VGK 2017. Source's method retrofits 2017 protection labels to 2021. Need "retrocausal" maybe the source uses future? Actually retrocausal genealogy: VGK 2017 protection outcomes are used as training labels for Seattle 2021. This is backward causation because 2017 labels inform future selection, but rules and team contexts changed. Multi-week traps:
  - Overfitting to 2017 protected list over weeks; team strategies adapt; exposed lists differ.
  - Treating protected outliers as undervalued; but many are exempt/UFAs [Page 9,13,17,21].
  - Ignoring contract timeline; multi-week updates around free agency and expansion deadline.
  - Using AHL dominance as NHL signal; source notes AHL outliers [Page 9,17].
  - Goalie overlap; using raw shots/games creates collinearity [Page 20].
  - Assuming "advanced data" general predictor; source conclusion says not best general predictor [Page 23].
Need mention scientific lineage: Moneyball analogy? Wharton Moneyball Academy. The paper's design: correlation and outlier analysis, not causal. Need cite pages.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Need write ~300-400 words. Interpret:
- Recursive theory of mind: Seattle models each GM's protection decision; each GM models Seattle's likely picks; both anticipate. At deadline, crisis habit regression: GMs protect veterans, high TOI, recent reputation, avoid exposing NMC, favor known contracts; Seattle can counter-trap by selecting efficient young/role players or cap/value players but must not overcorrect into unproven/risky outliers.
- Counter-trap: If Seattle assumes every exposed player is undervalued, it falls into trap; many exposed due to exemption/contract/injury. Need verify eligibility and medical.
- Clock: expansion draft timer, contract expiry, RFA/UFA status, injury return, trade market, AHL call-ups. Use multi-week clock to update.
- Recursive equilibrium: teams may expose bait (players with high raw points but bad contract) to entice Seattle; Seattle should not chase protected-status residual. Need mention "NMC buyout" as team action. Use source [Page 17] Beauchemin bought out NMC to protect younger players; [Page 21] Miller went to free agency; [Page 13] Panik/Marleau expiring. 
- Counter-trap predictions: Seattle should prefer younger players with good contracts; source conclusion [Page 23]. But if win-now, draft solid 2nd-3rd line players not unproven; if slow, unproven/risky and draft picks/veterans. Need quote.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Need ~300 words.
- Physical: injury history and medical status veto statistical value. Examples page 21 Quick lower body missed 59 games; Stolarz knee; Page 17 Myers lower-body surgery, Gudbranson wrist surgery; Page 3 career-ending injury 60+ consecutive games. Need exact quotes.
- Biomechanical: age, workload, role; TOI/GP not pure skill; PTS/60 low sample; goalie workload and backup status (Markstrom backup to Miller [Page 21]; Varlamov veteran over Pickard [Page 21]). Contract/NMC/cap are institutional vetoes; treat as hard constraints not soft.
- Weather: source contains no weather variable; indoor hockey; any weather claim is unsupported and should be vetoed. If weather enters, must be via travel/climate/arena effects measured with causal design; not infer from source. Need "proof" state: no page supports weather; [PAGE 24] sources are hockey stats and protected lists only. So weather cannot override eligibility/injury/cap.
- Veto logic: candidate must pass eligibility (<=2 seasons exempt), NMC/exposure, medical, cap, position, contract. If any hard veto, remove before ranking.

<RLVR_COUNTERFACTUAL_VETOES>
Need 3 verifiable RLVR veto scenarios + predictions. Write each:
1. Eligibility counterfactual: Candidate appears as "unprotected outlier" in 2017 data (e.g., McDavid, Matthews, Nylander, Reinhart [Page 9]) but has <=2 NHL seasons at end 2020-21 -> exempt [Page 3]. Veto selection. Prediction: in any Seattle board that uses 2017 protected-label residuals, those names must be removed from exposed pool; algorithm's selected set unchanged or shifts to eligible players. Verification: check NHL seasons and exposed list; check constraints.
2. Medical counterfactual: Candidate has season-ending lower-body/wrist/knee surgery or misses 59+ games [Page 21] or 60+ consecutive games potential career-ending injury [Page 3]. Veto from core selection unless medical clearance/mentor role. Prediction: if medical flag =1, expected value ranking drops below healthy comparable; selection probability near zero for high-cap core role; if selected, role/contract differs. Verification: injury reports, games missed, cap hit, role.
3. Contract/NMC/cap counterfactual: Candidate is UFA/RFA expiring or NMC requires protection/buyout; or aggregate cap hit outside 60-100%. Veto as core. Predictions: expiring players like Panik/Marleau/de Haan not selected as core absent extension [Page 13,17]; any 30-player set below 60% or above 100% rejected [Page 3]; NMC players only available if waived or bought out [Page 3,17]. Verification: contract status, cap sum, NMC list.
Need maybe 4? Exactly 3. Each with prediction. Need no betting. Good.

Need ensure "RLVR" maybe explain as "verifiable reward" not betting. Fine.

Need mention "PAGE 5 correlations blanks" maybe no stats given. Page 5 lists correlations but text blank. Need note missing values? The source text shows "CENTER: RIGHT WING..." with no correlation numbers. We can say paper reports categories but not numerical coefficients in extracted text; treat as qualitative. Good audit. Need cite [PAGE 5]. This is important: no exact correlation coefficients available; use qualitative. Need mention in THINK_TRACE or SOURCE. Could mention source's correlation table is blank in provided text, so no numeric coefficients can be quoted; formal operators are from surrounding pages. Good.

Need word count. Let's draft carefully. Need XML sections exact. Need avoid "odds" string. Check final. Need not include "betting" string? It says zero betting lines. I can avoid. Avoid "spread", "total", "moneyline", "odds". Use "aggregate cap hit" not total. Avoid "over/under". Avoid "wager". Good.

Need no fake ratios like Force/Fatigue. Our equations are legitimate. Need not invent fake ratios. Need state assumptions and breakdown regimes. Good.

Need include exact verbatim quotes. Use quotes from source. Need exact [PAGE N] markers. I can use quotes:
- [PAGE 2]: "Seattle will select one player from each of the thirty teams (VGK is exempt)" and "Minimum 14 forwards, 9 defense, and 3 goalies"; "Minimum 20 players under contract in the 2020-2021 season"
- [PAGE 3]: "Players with no move clauses (NMCs) in their contract must be protected with one of the teams protection slots, unless the player agrees to waive their NMC."; "All players who have two or less seasons in the NHL at the end of the 2020-2021 season are exempt from the expansion draft."; "Players selected for the Expansion team must have a total cap hit value of between 60% and 100% of the 2020-21 salary cap upper limit." Avoid "total" quote? It contains total. Invariant says never mention totals as betting lines. Quoting source "total cap hit" is not betting line. But to be safe maybe use ellipsis? We can quote exact? It says verbatim quotes. "total cap hit value" is not betting line. Fine. But if strict "never mention totals" maybe avoid? Hmm. The invariant says "Never mention spreads, totals, moneylines, or odds." It might parse "totals" as betting totals. "total cap hit" is not betting. But to avoid risk, quote with "aggregate" paraphrase not verbatim? Need exact quotes when source pages provided. We can quote other phrases. But if we use "total cap hit" it might trigger? It is in source. I think okay because context NHL cap. But if strict, maybe quote "60% and 100% of the 2020-21 salary cap upper limit" without "total". Need exact quote? Could use bracketed ellipsis: "Players selected ... must have [an aggregate] cap hit value of between 60% and 100%..." But not verbatim. Better maybe avoid that quote, paraphrase. But must cite exact quote; can quote other page 3. We need cap equation; paraphrase source. Fine.
- [PAGE 20]: "The best predictor of whether a goalie was protected or not was a combination of games played and Fenwick save percentage."; "shots against had a similar correlations to time on ice, shots against, and Fenwick shots against, but that is because if you play more games, you spend more time on the ice and face more shots." Use exact? It has grammar. Quote exactly maybe.
- [PAGE 23]: "Advanced hockey data is not the best as a general predictor of Protected players because it is often too specific, yet it is very good for comparing players"; "For the most part teams protect their best players, but they favor younger players and better contracts"; "There are also exceptions due to injury, depth, and AHL prowess"; "If Seattle wants to be competitive in their first year (Like VGK), they should draft a group of solid 2nd - 3rd line players that aren’t unproven."; "If Seattle wants to become competitive more slowly they should draft more unproven, risky players that they think teams undervalue." Need exact.
- [PAGE 9]: "Connor Mcdavid was a second year player in the 2016-2017 season."; "Auston Matthews was a rookie."; "William Nylander was second year player."; "Sam Reinhart was a second year player."
- [PAGE 13]: "Artemi Panarin was a second year player in the 2016-2017 season."; "Richard Panik was on a one year contract that expired in the next season and he was a UFA."; "Patrick Marleau was on a three year contract that ended the next season and he was a UFA."
- [PAGE 17]: "Matt Dumba wasn’t protected due to the defensive depth of the Wild and their better defensive prospects."; "Francois Beauchemin was quite old and was bought out of a NMC clause to protect younger players."; "Calvin de Haan was on an expiring three year contract. He would become a UFA the next season."
- [PAGE 21]: "Quick suffered a lower body injury in the season opener and missed 59 games"; "Stolarz played in AHL for half the season, and also had a knee injury"; "Markstrom played backup to Ryan Miller, who went to free agency."; "Miller was the starter, but went to free agency at the end of the season. He signed with the Ducks."
- [PAGE 24]: sources.
Need maybe quote Page 2 protection formats: "8 skaters and 1 goalie, or" and "7 forwards, 3 defiance, and 1 goalie" (typo defiance). Use exact? Maybe not.

Need ensure sections order exact. Use XML tags. Need include <THINK_TRACE> etc. No markdown? Can use XML and prose. Fine.

Need maybe mention "The provided text lacks numeric correlation coefficients on [PAGE 5]" because the table is empty. Good.

Need word count maybe 2500. Let's draft.

Potential issue: "formal LaTeX equations" in XML. Use \(...\) and \[...\]. Fine.

Need "SI/information/probability units": Use units for each. For probability dimensionless; information maybe bits? We can include entropy \(H(P)=-\sum p\log_2 p\) bits. Maybe not necessary but invariant says SI/information/probability units. We can include "protection label entropy in bits" maybe too extra. But include a small equation: \(H(P)=-\sum_{k=0}^1 p_k \log_2 p_k\) bits; breakdown p=0 or1. That addresses information units. Also units for cap USD, time minutes, goals. Good.

Need "exact singularity/breakdown regimes": Include subsection within SOURCE_OPERATORS. Could be bullet list. Need mention "denominator zero" etc. Good.

Need no "toy equations" - all standard. Good.

Need "multi-hop derivation" in THINK_TRACE. Use "Hop 1... Hop 6..." maybe. Great.

Need "gray-zone audit" in THINK_TRACE. Use "Gray-zone audit:" with bullets. Great.

Need "retrocausal genealogy" historical/scientific lineage. Use maybe "The paper is a retroductive use of VGK 2017 protection decisions as training labels for Seattle 2021." Good.

Need "crisis habit regression vs counter-trap vs clock" in RECURSIVE. Use subheads.

Need "physical/biomechanical/weather veto proof" in CROSS. Good.

Need "3 verifiable RLVR veto scenarios + predictions." Good.

Need final answer only, no extra.

Let's write with enough depth. Ensure no banned words. Check for "odds": avoid. "spread": avoid. "total": avoid except maybe "total cap hit" in quote? I might use "aggregate cap hit" paraphrase. But quote from page 3 has "total cap hit value" if I use. To be safe, don't quote that phrase; paraphrase with citation. Use "cap hit value between 60% and 100%..." without total. But exact quote? It says when source pages provided, cite exact [PAGE N] markers and verbatim quotes. We can quote other exact phrases. Good. Avoid word "total" entirely? I can avoid "total" even in "total 30 picks" use "30 selections". "aggregate cap hit" okay. Avoid "totals". Good.

Need avoid "over" in "over 60%" maybe use "above". Fine.

Need avoid "money" maybe "money" not betting? "Moneyball" is title. It's not line. Could mention "Moneyball" as historical lineage; maybe okay. But invariant only moneylines. Avoid "money" if possible? But "Wharton Moneyball Academy" is source. Could mention but "Moneyball" not line. Fine. Maybe no need.

Need mention "NHL" okay. "VGK" okay.

Need "zero betting lines" maybe don't mention. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
Hop 1: The source frames the Seattle problem as a constrained selection problem, not a ranking problem. The Kraken select “one player from each of the thirty teams (VGK is exempt)” with positional minima of “Minimum 14 forwards, 9 defense, and 3 goalies” and “Minimum 20 players under contract in the 2020-2021 season” [PAGE 2]. Protection rules allow either “8 skaters and 1 goalie” or “7 forwards, 3 defiance, and 1 goalie” [PAGE 2]; NMC players “must be protected with one of the teams protection slots, unless the player agrees to waive their NMC,” and players with “two or less seasons in the NHL at the end of the 2020-2021 season are exempt from the expansion draft” [PAGE 3]. These rules mean the exposed pool is endogenous: teams choose protections under constraints, and Seattle chooses from the residual. A raw “protected vs unprotected” correlation is therefore not a value equation.

Hop 2: The paper’s statistical operators are position-specific. For centers it emphasizes TOI/GP and expected goals for [PAGE 6–8]; for wings it uses points vs. shots taken [PAGE 12]; for defense it uses TOI/GP vs. Corsi shots [PAGE 16]; for goalies the “best predictor ... was a combination of games played and Fenwick save percentage” [PAGE 20]. The extracted correlation table on [PAGE 5] is blank in the provided text, so the numeric coefficients cannot be audited from this source; only the qualitative claims and named operators are citable.

Hop 3: The outlier audit is the key multi-hop move. Protected outliers such as Curtis Lazar, Rocco Grimaldi, Scott Laughton, and Ryan Carpenter are explained by AHL time [PAGE 9]; protected wing outliers include AHL/KHL dominance and enforcer roles [PAGE 13]; protected defense outliers include AHL performance and season-ending surgery [PAGE 17]; protected goalie outliers include AHL time, knee injury, lower-body injury, and backup status [PAGE 21]. Unprotected outliers include players who were exempt as rookies/second-year players, expiring UFAs, team-depth casualties, or NMC buyouts [PAGE 9, 13, 17, 21]. Thus “unprotected” is not synonymous with “undervalued”: many unprotected names were never selectable or were selectable only under contract/medical risk.

Hop 4: The Seattle decision therefore requires a hard-veto layer before any value ranking. A candidate must pass eligibility (not exempt by two-or-fewer NHL seasons), exposure/NMC status, medical viability, position, contract/cap feasibility, and the cap-hit band between “60% and 100% of the 2020-21 salary cap upper limit” [PAGE 3]. Only then should the position-specific statistical operators be used for comparison. The paper’s own conclusion is exactly this gray-zone: “Advanced hockey data is not the best as a general predictor of Protected players because it is often too specific, yet it is very good for comparing players” [PAGE 23]. That is a comparative, within-position, within-contract, within-health claim—not a universal predictor.

Hop 5: The strategy branches are also explicit. For a win-now path, Seattle should “draft a group of solid 2nd - 3rd line players that aren’t unproven” [PAGE 23]; for a slower build, it should “draft more unproven, risky players that they think teams undervalue” and “try to trade for draft picks and pick some older veterans to influence the younger players” [PAGE 23]. These are different objective functions under the same constraints. Mixing them—chasing raw points from exposed veterans while also chasing speculative youth—creates an incoherent roster and cap plan.

Gray-zone audit: (a) Protection labels contain team preference, not pure ability; (b) the training data are from the VGK 2017 draft and 2018–19 data, while the target is 2021 [PAGE 24]; (c) exposure requirements force teams to expose specific forwards/defense/goalies [PAGE 3], so “unprotected” can be rule-induced; (d) goalie metrics overlap heavily because “if you play more games, you spend more time on the ice and face more shots” [PAGE 20]; (e) injury and AHL status are not small noise—they are structural alternatives that break the correlation; (f) the cap band can force or forbid selections independently of player quality; (g) NMC buyouts, trades, and expiring contracts change availability over the weeks before the draft. The correct use of the paper is therefore a veto-aware, position-conditioned comparison engine, not a protected-player classifier.

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(P_i\in\{0,1\}\) be the observed protection label for player \(i\), and let \(p_i=\Pr(P_i=1\mid x_i)\) be the conditional protection probability. \(p_i\) is dimensionless, \(p_i\in[0,1]\). A formal audit quantity is the binary entropy
\[
H(P_i)=-p_i\log_2 p_i-(1-p_i)\log_2(1-p_i)\quad [\text{bits}],
\]
with breakdown at \(p_i=0\) or \(p_i=1\) (zero entropy, no discriminative information). Assumptions: labels are comparable across teams and positions; breakdown regimes include position pooling, label leakage from NMC/exemption rules, small samples, separation, and collinearity among TOI, games, shots, and goals.

Time on ice per games played, following the source’s “Time On Ice per Games Played” operator [PAGE 6], is
\[
T_i=\frac{1}{G_i}\sum_{g=1}^{G_i} t_{i,g}\quad [\text{min}\cdot\text{game}^{-1}],
\]
where \(G_i\) is games played and \(t_{i,g}\) is minutes in game \(g\). Breakdown: \(G_i=0\) makes \(T_i\) undefined; partial AHL/NHL seasons and injuries confound the interpretation, as the source notes for Lazar, Grimaldi, Laughton, Carpenter [PAGE 9] and for Stolarz’s AHL time and knee injury [PAGE 21].

Points per 60 minutes, used in the Schenn/Thomas and Garland/Hinostroza comparisons [PAGE 10, 14], is
\[
R_i=\frac{60\cdot \mathrm{PTS}_i}{\mathrm{TOI}_i}\quad [\text{points}\cdot(60\ \text{min})^{-1}],
\]
with breakdown at \(\mathrm{TOI}_i=0\), low TOI variance, role/usage effects, and small scoring samples. PDO is a dimensionless shooting-plus-save percentage proxy; it should not be treated as a causal skill without shot-quality controls.

Corsi, described as “shot attempt differential while at even strength play” [PAGE 16], can be written as
\[
C_i=\sum_{e\in EV}\left(SA^{\mathrm{for}}_{i,e}-SA^{\mathrm{against}}_{i,e}\right)\quad [\text{shot attempts}],
\]
and Corsi per 60 as
\[
C_{60,i}=\frac{60C_i}{\mathrm{TOI}_i}\quad [\text{shot attempts}\cdot(60\ \text{min})^{-1}].
\]
Breakdown: \(\mathrm{TOI}_i=0\); score effects, zone starts, teammate quality, and deployment are omitted; the source itself uses Corsi only as a comparative graph against TOI/GP [PAGE 16].

Fenwick save percentage for goalies, reported as \(FSv\%\) [PAGE 22], is formalized as
\[
FSv\%_i=\frac{F_i-G_i}{F_i}\quad [\text{dimensionless fraction}],
\]
where \(F_i\) is unblocked shot attempts against and \(G_i\) is goals against over the relevant sample. Breakdown: \(F_i=0\); low-shot samples; team system effects; and the source’s warning that shots against, TOI, games, and Fenwick shots overlap: “that is because if you play more games, you spend more time on the ice and face more shots” [PAGE 20].

Goals saved above average, reported as \(GSAA\) [PAGE 22], can be formalized as
\[
GSAA_i=\sum_{s=1}^{S_i}\left[\Pr(\text{save}\mid x_s)-\bar{\Pr}(\text{save}\mid x_s)\right]\quad [\text{goals}],
\]
where \(S_i\) is shot attempts faced and \(x_s\) are shot/context covariates. Breakdown: small \(S_i\), model misspecification, backup usage, and injury. Expected Fenwick save percentage, \(xFSv\%\), and delta Fenwick save percentage, \(dFSv\%\), are the corresponding expected and residual quantities in dimensionless fraction or percentage terms [PAGE 22]; they inherit the same sample-size and model-dependence breakdowns.

The selection problem is a constrained binary program. Let \(z_i\in\{0,1\}\) indicate selection, \(\mathcal P_t\) the eligible exposed players from team \(t\), and \(h_i\) the cap hit in USD. For the 30 selectable teams,
\[
\sum_{i\in\mathcal P_t} z_i=1\quad \forall t,\qquad
\sum_i z_i F_i\ge 14,\quad
\sum_i z_i D_i\ge 9,\quad
\sum_i z_i G_i\ge 3,
\]
\[
\sum_i z_i n_i\ge 20,\qquad
0.60C_{\text{upper}}\le \sum_i z_i h_i\le 1.00C_{\text{upper}},
\]
where \(F_i,D_i,G_i\) are position indicators, \(n_i\) is the under-contract indicator, and \(C_{\text{upper}}\) is the 2020–21 salary-cap upper limit in USD. The source states the one-player-per-team rule and positional minima [PAGE 2], the under-contract minimum [PAGE 2], and the “60% and 100% of the 2020-21 salary cap upper limit” band [PAGE 3]. Breakdown regimes: infeasible cap band, insufficient exposed players at a position, NMC forced protections, exemption of young players, and medical/contract updates between projection and draft day.

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is the hockey-analytics chain that runs from shot-attempt accounting (Corsi/Fenwick) through expected-goals and goalie goals-saved measures. Its cited data sources are “Hockeyabstract.com - Rob Vollman’s 2016-17 NHL Player Data,” “Hockey-reference.com - Advanced 2018-19 NHL Player Data,” and “NHL.com - 2018-19 General Player Data and NHL Vegas Expansion Draft Protected Player List” [PAGE 24]. The retrocausal move is explicit: 2017 Vegas protection decisions are used as labels to infer how Seattle should read 2021 exposure. That is useful as a comparative prior, but it is not a clean causal estimate: team strategies, contract structures, prospect depth, and medical information change across the multi-week pre-draft window.

Historical traps that persist across weeks: (1) treating “protected” as a skill label rather than a team-constrained choice; (2) treating “unprotected outlier” as a Seattle target when the player is exempt or expiring, e.g. McDavid/Matthews/Nylander/Reinhart as first- or second-year players [PAGE 9] and Panarin as a second-year player [PAGE 13]; (3) over-weighting AHL dominance as NHL-transferable skill, as with protected AHL/KHL outliers [PAGE 9, 13, 17]; (4) ignoring NMC buyouts and team depth, as with Beauchemin and Dumba [PAGE 17]; (5) ignoring goalie overlap and workload, where games, TOI, shots, and Fenwick are collinear [PAGE 20]; (6) assuming a general predictor when the source concludes the opposite [PAGE 23]. The scientific lineage supports comparative use—within position, within health, within contract—not a universal protected-player score.

<RECURSIVE_THEORY_OF_MIND>
Recursive theory of mind appears at three levels. Level 1: Seattle models each team’s protection model. Level 2: each team models Seattle’s likely selection and may expose bait—high raw points with bad contract, or a veteran whose reputation exceeds future surplus. Level 3: Seattle must model the other teams’ anticipation of Seattle’s model, so a naive “take the best unprotected player” rule is exploitable. Crisis habit regression is the observed fallback under deadline pressure: protect veterans, high-TOI names, recent reputation, and NMC players; the source’s own conclusion says teams “favor younger players and better contracts” but still have “exceptions due to injury, depth, and AHL prowess” [PAGE 23]. The counter-trap is not to chase every exposed outlier; it is to separate rule-induced exposure (exempt youth, expiring UFAs, NMC buyouts, injury) from genuine surplus. The clock matters: contract expiry, RFA/UFA status, medical return, AHL call-ups, and trade windows change the exposed pool over multiple weeks. A player who looks exposed in one week may be extended, traded, bought out, or medically cleared later. Seattle should use the clock to update hard vetoes first and statistical comparisons second.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical vetoes override statistical resemblance. The source reports “Quick suffered a lower body injury in the season opener and missed 59 games” [PAGE 21], “Stolarz played in AHL for half the season, and also had a knee injury” [PAGE 21], Myers had “a lower-body injury that required surgery, ending his season,” and Gudbranson had “a season ending wrist injury that lead to surgery” [PAGE 17]. The rules also allow exemption for “potential career-ending injuries who have missed the previous 60+ consecutive games due to an injury” [PAGE 3]. These are hard medical vetoes against core-role selection without clearance. Biomechanically, age and workload are not linear value: the McDonagh/Shattenkirk comparison uses age, contract, plus-minus, PIM, GP, and TOI/GP [PAGE 18], and the goalie comparison uses age, contract, Sv%, FSv%, xFSv%, dFSv%, and GSAA [PAGE 22]. A goalie’s backup role can suppress raw games and wins, as with Markstrom “backup to Ryan Miller” [PAGE 21]. Institutional vetoes—NMC protection, UFA expiry, cap band—are equally hard: Beauchemin was “bought out of a NMC clause to protect younger players” [PAGE 17], and Panik/Marleau were UFAs on expiring contracts [PAGE 13]. Weather is not an operator in the source: the cited data are player statistics and protected lists [PAGE 24], and the game context is indoor hockey. Therefore any weather-based inference must be vetoed as unsupported; it cannot override eligibility, medical, contract, or cap evidence unless a separate measured environmental model exists. The adjudication order is: eligibility/exemption → NMC/exposure → medical → contract/cap → position → statistical comparison.

<RLVR_COUNTERFACTUAL_VETOES>
1. Eligibility counterfactual veto. If a candidate is listed as an “unprotected outlier” in the 2017 data but has “two or less seasons in the NHL at the end of the 2020-2021 season,” the candidate is exempt [PAGE 3]. The source itself labels McDavid, Matthews, Nylander, and Reinhart as unprotected outliers because they were first- or second-year players [PAGE 9]. Prediction: any Seattle board that carries those names as selectable must remove them before ranking; the selected set must shift to eligible exposed players, and the count of selectable players from that team must exclude exempt youth. Verification: check NHL season totals at the end of 2020–21 and the official exposed list.

2. Medical counterfactual veto. If a candidate has a season-ending surgery, a 59-game lower-body absence, or a 60+ consecutive-game injury absence under the career-ending-injury provision [PAGE 3, 17, 21], then the candidate is vetoed from the core-value bucket unless independent medical clearance and a revised role are documented. Prediction: a high-cap injured player with strong raw save percentage or TOI will rank below a healthy comparable in Seattle’s core selection; if selected, the pick is justified by cap/mentorship or a reduced role, not by the raw stat. Verification: injury reports, games missed, surgery date, medical clearance, and post-selection role.

3. Contract/NMC/cap counterfactual veto. If a candidate is an expiring UFA/RFA, requires NMC protection, or pushes the selected roster outside the “60% and 100% of the 2020-21 salary cap upper limit” band [PAGE 3], the candidate is vetoed as a core pick absent an extension or cap-clearing move. The source shows the pattern: Panik and Marleau were UFAs on expiring contracts [PAGE 13], de Haan was on an expiring contract and would become a UFA [PAGE 17], and Beauchemin’s NMC was bought out [PAGE 17]. Prediction: Seattle’s final set must satisfy the cap band exactly; any proposed 30-player set below 60% or above 100% is rejected, and expiring players are selected only with an extension/role rationale. Verification: cap-hit arithmetic in USD, contract expiry status, NMC clauses, and the final expansion list.