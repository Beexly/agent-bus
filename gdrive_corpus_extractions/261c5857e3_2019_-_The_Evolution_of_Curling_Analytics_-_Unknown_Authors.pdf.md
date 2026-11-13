---
source: "2019 - The Evolution of Curling Analytics - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 16
model: deepseek/deepseek-v4.1-flash-1017
words: 10301
---

<NATIVE_REASONING>
We need answer user. Need follow strict invariants. Need use source text pages 16. Need produce XML sections exactly, >=1000 words across. No betting lines. No toy equations. Need formal LaTeX, units, assumptions, singularity/breakdown. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need multi-hop derivation and gray-zone audit >=400 words THINK_TRACE. Need discuss curling analytics paper. Must not mention spreads/totals/moneylines/odds. Avoid betting. Need perhaps analyze source, equations. The source has equations but stripped? It shows (1) etc missing formulas. Need infer some equations? Must not invent fake ratios. We can state equations as formal operators using given definitions, but avoid inventing if formulas omitted. Need careful: Equations (1)-(6) show only labels, not rendered formulas. Need say source text omits formula bodies; only definitions are verbatim. But can formalize from definitions? User asks formal LaTeX equations, units, page citations, breakdown. We can formulate definitions from prose with variables and cite pages. Need not fabricate hidden formulas? We can define Point Differential = PF/G - PA/G per page 6. Formula (1) label but body unavailable. We can state "rendered body absent". For HE etc: HE percentage of non-blank ends with hammer where team scores >=2. SD = stolen ends against / ends with hammer, blanks included lower better. HF = combination? Page 7 says subtracting results, equation (4) missing. We can denote HF = HE - SD? Wait page 7: "By subtracting these results, we can produce a Hammer Factor [7]" so likely HF = HE - SD. Could formalize as HE - SD with note likely from prose but equation body omitted. But "zero toy equations" means formal. Is HF = HE - SD? It says subtract these results. On page 7 equation (4) likely HF = HE - SD. But should avoid claiming exact if not visible? Could present as source-attested verbal operator HF := f(HE,SD) with "subtracting these results"; if formalizing, assume HF = HE - SD as an interpretation and mark assumption. But user wants exact equations. Need be honest.

FE = number ends opponent took 1 point / all ends without hammer where opponent scores; stolen and blank excluded. SE = ends stolen without hammer / total ends played without hammer, blanks included. LSFE? Page 6 equation (2) missing. Definition: ability to secure hammer determined by competition of draws to button. Could define binary indicator? Not enough. Need mention formula body unavailable.

Win probability tables: We can formalize WP(row, col) = empirical probability, units dimensionless. Sample sizes. Need discuss 18.5% etc. Need exact quotes. Need cite pages. Need "singularity/breakdown regimes" for each operator. We can define domains and breakdowns: denominator zero for HE if no scored non-blank hammer ends; SD denominator zero if no hammer ends; FE denominator zero if no scoring opponent ends without hammer; SE denominator zero if no ends without hammer; WP sparse sample cells large variance; point differential censoring due concessions and mixed 8/10 end. Need mention no fake ratios. Use SI/information/probability units. Probability dimensionless; entropy bits if using information. Include Laplace smoothing? Could mention.

Need sections:
<THINK_TRACE> deep multi-hop derivation & gray-zone audit >=400 words. Need include reasoning and audit. Could be 600-800 words. Need cite pages and quotes. Must be in XML. Need not include hidden chain? User asks THINK_TRACE. We can provide a concise audit, not actual private chain? The instruction says deep multi-hop derivation. We can provide summary reasoning, not private chain. Need satisfy. Include multi-hop: data -> WP -> decision thresholds -> scenario 1. Scenario 1: One down with hammer last shot final end. They assume single point chance 95%. WP tied without hammer one end remains 25.1 men, 31.9 women. Attempt double if chance >? Let's verify threshold. Current: down 1, last shot. Options: draw/hit single -> tie, go extra end without hammer, WP = 25.1% men (31.9 women). Attempt double: if make, win = 100%; if miss, maybe score one? They say threshold >24% men, 30% women. Derivation: p*1 + (1-p)*0.251 = 0.251? Set equal to 0.251? Then p = 0? Wait no. If make double, win probability 1. If fail, likely score one and go extra end without hammer = 0.251. Expected WP = p*1 + (1-p)*0.251. Compare to routine draw WP = 0.95*0.251 + 0.05*? If draw chance 95%, miss maybe lose? If routine draw success 95% yields tie without hammer 25.1; fail yields 0? Then WP = .95*.251 = .23845. Set p + (1-p)*.251 > .23845 => .749p > -.01255? p > -0.0168? Hmm not 24%. Wait maybe compare attempt double WP = p*1 + (1-p)*0.251 vs routine = 0.95*0.251 + 0.05*0? = .23845. Then p > -0.0168, so any positive p. Not matching. They say "attempt double if better than 24% chance". Let's rederive: If attempt double, if miss maybe they score one? Actually final end down 1. If choose draw for single, game tied, extra end without hammer WP 25.1. If attempt double: if make win (100%). If miss, maybe no point -> lose (0%)? Wait "There is also some small chance of scoring one with the double attempt, and this supports the decision to try the more difficult shot." If miss double but score one? Hmm if you attempt double takeout and remove both red, staying sit two and win. If miss, maybe you can still score one? Actually if you don't remove both, maybe you get one and tie? Let's compute threshold using routine WP = .95*.251? No, if routine draw success 95% gives tie without hammer 25.1, and 5% miss gives loss 0, so WP_draw = .95*.251 + .05*0 = .23845. Attempt double: if make win 1; if fail maybe lose? Then WP_attempt = p*1 + (1-p)*0 = p. Set p > .23845 = 23.845% ~24%. Ah yes. They compare attempt double (fail = lose) vs draw success probability 95% yielding 25.1. Actually draw success gives WP .251, weighted by .95 = .238. So threshold p > .238. Yes. They ignore small chance scoring one. Good. For women threshold .95*.319 = .30305 ~30%. Good. Need mention.

Scenario 2: one up without hammer second last end. Their WPy values. Hit and stay/roll out blank -> 58.7%. Hit and roll: 20% perfect -> Red scores one point WPy 74.9; 80% blank WPy 58.7 => .620. Equation (7): (.2)(.749)+(.8)(.587)=.620. Draw around centre: .4*.413 + .5*.749 + .1*.867 = .627. Need verify: .4*.413=.1652; .5*.749=.3745; .1*.867=.0867 total .6264 = 62.6, paper says .627 or 62.7 (round). Good. Need formal. Scenario 3: tied without hammer first shot 3 ends remaining. WPy values. Red last shot blank vs take one: "teams will nearly always blank in this situation, even though it’s mathematically incorrect to do so." Need analyze: If Red last shot can blank or take single. For Red? Yellow tied without hammer. If Red blanks, WPy for Yellow 38.5%. If Red scores 1, WPy for Yellow 36.6%. So from Yellow perspective blank better than Red scoring 1? Wait blank WPy = 38.5 > 36.6. But for Red, if Red can choose blank vs score 1, Red wants minimize Yellow WP, so Red should take 1 (Yellow WP 36.6) rather than blank (38.5). Yet teams blank; mathematically incorrect for Red. Need mention. But careful: if Red has hammer, tied. Red's WP? Yellow WP blank 38.5 => Red WP 61.5. Yellow WP Red scores 1 36.6 => Red WP 63.4. Red should take 1 to increase own WP. They blank. Good.

Need include "clock" in recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need discuss in curling: under time/chess clock? The paper mentions chess timer ticking, skip makes 80 decisions. Need discuss habits: teams default to blanking/taking one, traditional strategy. Counter-trap: opponent's analytics may exploit predictable blank rates; using change analysis. Clock: shot clock/decision time, pre-planning. Need section.

Need cross-layer veto adjudication: Physical/biomechanical/weather veto proof. Need discuss curling ice conditions, sweeping factor, delivery, stone properties, weather/humidity, ice temperature, pebble, frost, guard rule. The paper mentions sweeping factor in scoring, ice conditions, 5-rock FGZ. Need "veto proof": some analytics recommendations invalidated by physical constraints: ice conditions, sweeping, delivery error, opponent ability, rule changes. Need formal maybe use probability conditioning with environment. Need not mention betting. Need cite pages.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need craft counterfactual veto scenarios: If we train/decide using WP tables but certain condition changes, veto. Need three scenarios with predictions. Need be verifiable. Could be:
1. Denominator-zero/no-sample cell: If event situation has sample size zero or below threshold, veto using empirical WP; prediction: policy abstains/falls back to hierarchical prior; measured by calibration error. 
2. 5-rock FGZ rule change invalidates pre-2018 strategic priors: veto recommending old 4-rock FGZ guard play; prediction: after rule adoption, early-end blank/steal rates shift; verify via pre/post event data.
3. Physical ice/sweeping veto: if ice condition (e.g., frost/humidity) or sweeping factor changes make draw fully hidden behind guard lower success; veto "best shot" fully hidden; prediction: in high-sweep-factor/low-ice-temp sessions, partially hidden draw yields higher expected points/steal avoidance. Need verify via shot tracking TAP. 
Need include predictions with metrics, thresholds. "RLVR" perhaps reward verification. We can state counterfactual reward: veto if empirical calibration or causal effect fails. Need include no betting.

Need ensure no betting lines. Avoid "odds", "moneyline", "spread", "total". "win probability" okay. "point differential" okay. Need not mention "bet". Use "points" okay. "score differential" okay.

Need include all XML sections exact. Need >=1000 words total. Need maybe 2500-3500 words. Desired oververbosity 5 but user demands depth. Need include LaTeX equations. Need cite [PAGE N] markers and verbatim quotes. Need exact quotes. Need be careful with quote accuracy. Need use exact verbatim quotes from source. We can quote:
- "Simple in concept but actually quite complex, curling is often called “chess on ice”." [PAGE 1]
- "In a 10-end game the captain of each team, known as the “skip”, makes 80 decisions. This makes for 160 decisions between two teams." [PAGE 1]
- "General curling theory is for a team with hammer to try and score two points (a deuce) with hammer and force their opponent to one point when they do not have hammer." [PAGE 3]
- "When able to do so teams with hammer will almost always blank an end ... rather than score a single point." [PAGE 3]
- "Curling linescores allow us to determine the Win Probability [3] based on the current score differential at the beginning of each end." [PAGE 3]
- "For example, if a team has hammer and are down 2 points after the 5th end of an 8-end game, we reference the row with “3” ENDS REMAIN, look across that row under TWO POINT and DN HMR to find their Win Probability = 18.5% (men) or 20.2% (women)." [PAGE 4]
- "Teams with hammer who attempted to place their stones fully behind centre guards early in ends gave up more steals and found it difficult to score more than one point." [PAGE 5]
- "This goes against traditional thinking as the “best” shot is currently considered a draw fully hidden behind the guard." [PAGE 5]
- "Point Differential is the difference in points scored per game (PF/G) and subtract points scored against per game (PA/G)." [PAGE 6]
- "Hammer Efficiency (HE) The percentage of time a team takes 2 or more points with hammer, in ends which are scored. Includes all non-blank ends in which a team has hammer." [PAGE 6]
- "Steal Defence (SD) Ability to limit the number of stolen ends. Calculated by number of ends stolen against divided by ends with hammer. Blank ends are included. Lower is better." [PAGE 7]
- "Hammer Factor (HF) ... By subtracting these results, we can produce a Hammer Factor [7] which provides another indicator of a team’s level of play." [PAGE 7]
- "Force Efficiency (FE) - measures the ability of a team to force their opponent to one point. Calculated by number of ends in which the opponent took 1 point divided by all ends without hammer where the opponent scores. Stolen and blank ends are not included in the calculation." [PAGE 8]
- "Steal Efficiency (SE) - the percentage of ends a team steals one or more points. It's calculated by dividing ends stolen without hammer by the total ends played without hammer, Blank ends are included." [PAGE 8]
- Scenario 1 quote: "On average, Yellow should attempt the double take-out if they have a better than 24% (30% for women) chance of making the double." [PAGE 12]
- "It is interesting to note, on Red’s last shot, faced with blanking the end or taking a single point, teams will nearly always blank in this situation, even though it’s mathematically incorrect to do so." [PAGE 14]
- "Curling has recently adopted a new rule which restricts an opponent’s guard being removed until the 6th stone delivered in the end (known as the 5-rock Free Guard Zone or FGZ)." [PAGE 14]
- "Eventually we will be able to collect every shot – its direction, speed, rotation, eventual location, linked to each game and situation." [PAGE 15]

Need formal equations. Let's define:
Let \(E_H\) be set of ends with hammer; \(E_{\bar H}\) without. Let \(B\) blank indicator. 
Point differential: \( \Delta P/G = PF/G - PA/G \) units points game^{-1}. [PAGE 6]. Breakdown: concession censoring; mixed 8/10 ends; no adjustment.
HE: \[
\mathrm{HE} = \frac{\sum_{e\in E_H} \mathbf{1}[S_e\ge 2, S_e>0]}{\sum_{e\in E_H}\mathbf{1}[S_e>0]}
\]
where \(S_e\) points scored by hammer team in end e; denominator non-blank ends. Unit dimensionless proportion. Breakdown denominator zero if no scored hammer ends. Source says includes all non-blank ends. Good.
SD: \[
\mathrm{SD} = \frac{\sum_{e\in E_H}\mathbf{1}[\text{opponent steals in }e]}{|E_H|}
\]
blank included in denominator. Lower better. Unit proportion. Breakdown if \(|E_H|=0\).
HF: Source equation body missing. If using prose "subtracting these results", a reconstruction is \(\mathrm{HF} = \mathrm{HE}-\mathrm{SD}\) (dimensionless difference). Must mark "equation (4) body is absent in supplied text; this is a reconstruction from verbatim prose, not an independent invention." Is that acceptable? It is formal and cited. Need avoid fake ratio. Difference okay. But if source equation not visible, maybe present "\(\mathrm{HF} := \mathcal{S}(\mathrm{HE},\mathrm{SD})\)" with \(\mathcal{S}\) as subtraction per [PAGE 7]. But that's not useful. Could state both: "source-rendered operator: \(\mathrm{HF} = \mathrm{HE} - \mathrm{SD}\) under the prose 'subtracting these results'; if the omitted body differs, treat this as a marked reconstruction and veto exact numeric replication." Good.
FE: \[
\mathrm{FE} = \frac{\sum_{e\in E_{\bar H}}\mathbf{1}[S^{opp}_e=1]}{\sum_{e\in E_{\bar H}}\mathbf{1}[S^{opp}_e>0]}
\]
where \(S^{opp}_e\) points opponent scores; stolen and blank excluded. Unit proportion.
SE: \[
\mathrm{SE} = \frac{\sum_{e\in E_{\bar H}}\mathbf{1}[\text{team steals in }e]}{|E_{\bar H}|}
\]
blank included. Unit proportion.
WP: \( \mathrm{WP}(r,c,s) = \frac{n_{\text{win}}(r,c,s)}{n(r,c,s)} \) empirical; dimensionless probability. [PAGE 3-4]. Sample sizes for cells. Breakdown zero cells.
Scenario 2 equations:
\( \mathrm{WP}_{hit/roll} = p_{roll} \mathrm{WP}_{force1} + (1-p_{roll}) \mathrm{WP}_{blank}\) with p=0.2; = .2*.749 + .8*.587 = .620. Unit probability.
\( \mathrm{WP}_{draw} = p_2 \mathrm{WP}_{red2}+p_1 \mathrm{WP}_{red1}+p_s \mathrm{WP}_{steal}\) = .4*.413+.5*.749+.1*.867=.627. Need note sums to 1. If probabilities not sum to 1, invalid; here .4+.5+.1=1. Good.
Scenario 1 threshold:
\( \mathrm{WP}_{draw} = q \cdot \mathrm{WP}_{tie,\bar H} + (1-q)\cdot 0\) with q=0.95. \( \mathrm{WP}_{double} = p \cdot 1 + (1-p)\cdot 0\). Set p > q*WP_tie. Men: .95*.251=.23845 ~24%; women .95*.319=.30305~30%. Good. Mention if scoring one on miss included, threshold lower; paper says supports decision [PAGE 12].
Need "singularity/breakdown regimes" for equations: denominators zero, empirical cells zero/sparse, mixed game length, concession, manual judging. Need mention "breakdown" exact.

Need maybe include information units: Probability dimensionless [0,1]; entropy in bits if needed. We can state "All WP and efficiency quantities are dimensionless proportions; if converted to information, \(H=-\sum p\log_2 p\) bits." But maybe not necessary. User asks SI/information/probability units. Include: points game^{-1}, dimensionless proportions, probability [0,1], sample count \(n\) integer. For "information" maybe mention decision value in bits? Could include optional: "A decision's expected information value can be measured in bits, but the paper does not report bits." Need not overdo.

Need "gray-zone audit": identify ambiguities: equations missing, manual judging, small samples, first end all tied, mixed 8/10, concessions, rule change, physical ice. Need cite.

Need "RETROCAUSAL_GENEALOGY": Historical/scientific lineage & multi-week traps. Need discuss chess on ice, 1959 Scotch Cup bad sportsmanship blanking, 2003-2014 weighted end value, 2006 Black Book, 2014 End Game, 2018 Olympics, 5-rock FGZ, AI University of Alberta, SportVu/Second Spectrum. Multi-week traps: small-sample overreaction, survivorship from top 20, conflating OOM ranking with strength of schedule, treating first-end blank rates as stable when rule/ice changes, overlooking manual judging drift. Need cite pages. Multi-week maybe "multi-week training traps" or "multi-week traps" could mean over multiple weeks of data? Need interpret. We can discuss traps over multi-week sample: recency bias, pooling across events, schedule heterogeneity. Good.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Need frame as opponent modeling. In curling, skip decisions under clock; crisis (down 2 late) regress to habits (take one/blank, conservative), counter-trap (opponent knows blank rate; can exploit by forcing), clock (time pressure reduces search; pre-planning). Need cite: "some of the best teams in the world stop and consider several options (while a chess timer is ticking away) when pre-planning could help clarify the correct decision much faster." [PAGE 1]. "Teams can analyze results from an opponent’s first end performances and determine the likely situations they will face at the beginning of the game [8]." [PAGE 9]. Change Analysis quotes [PAGE 10-11]. Need formal recursive ToM: \( \pi_i(a|s) = f(\text{habit}, \text{belief about opponent}, \text{time})\). Not toy? We can state qualitative, not fake ratio. Maybe formal Bayesian: \(b_i(\theta_{-i}|h_t)\) posterior over opponent type; policy maximizes expected WP under time cost. But avoid fake ratio. Could use decision-theoretic:
\[
a_t = \arg\max_a \mathbb{E}_{s_{t+1}\sim T(\cdot|s_t,a)}[\mathrm{WP}(s_{t+1})] - \lambda c(a)
\]
But \(\lambda\) time cost? Is that toy? It's standard MDP with cost, not fake ratio. But user says zero toy equations; formal equations okay. Need maybe include this as "decision-theoretic sketch, not from paper." But avoid overcomplicate. Could just describe without equations. Need section.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need discuss layers: analytics WP layer, shot execution layer (delivery, sweeping, ice), biomechanical (slide, balance, rotation), weather/environment (humidity, ice temp, frost). Veto proof: If physical layer changes success probabilities, WP table conditional on score/end is insufficient. Need use source: "What are the conditions of the ice and how will that effect our chance of making this shot and each subsequent shot?" [PAGE 1]; "sweeping factor and degree of difficulty" [PAGE 1]; "Teams with hammer who attempted to place their stones fully behind centre guards early in ends gave up more steals..." [PAGE 5]; 5-rock FGZ rule [PAGE 14]. Need formulate conditional WP:
\[
\mathrm{WP}_{true}(s) = \sum_{\omega} P(\omega|s) \mathrm{WP}(s,\omega)
\]
where \(\omega\) ice/weather/physical state. If \(\omega\) not captured, marginal table is biased. Veto if \(|\hat{\mathrm{WP}} - \mathrm{WP}_{true}| > \epsilon\). Need maybe formal but not fake. Could define \(\omega\) as environmental hidden variable; not from paper. It's a standard conditioning equation. Good. Breakdown: if ice changes mid-game or sweeping factor correlates with team, marginalization invalid.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need explain RLVR maybe "reinforcement learning with verifiable reward" not in source. We can define: A veto scenario is a counterfactual where policy recommendation from paper-derived statistics is rejected unless verification passes. Need three. Each with prediction and verification metric. Need ensure no betting. Use predictive metrics: calibration error, log loss, blank rate shift, steal rate, shot success. Need cite pages.

Need exact XML sections. Could include a short opening? User wants exact XML sections. Probably just output XML tags. Need include only those five sections? They list exact XML sections. We should output them in order. Could include all in one root? Not specified. Use exact tags. Need no markdown? XML tags. Could include LaTeX inside.

Need ensure >=1000 words. We can produce maybe 3000 words. Need not be too massive but enough.

Need meticulous citations [PAGE N]. Use exact markers. For quotes, use quotation marks. Need not overquote. Use "verbatim". Ensure quotes exact from source. Need maybe cite every section.

Potential issue: "ZERO BETTING LINES" includes "win probability" okay. Avoid "odds". Avoid "bet". Avoid "moneyline". Avoid "spread". Avoid "total". "point differential" okay. "score differential" okay. "force one" okay. "take one" okay. No "over/under". Good.

Need "ZERO TOY EQUATIONS": Avoid inventing "Force/Fatigue". Our equations are formal and source-derived. For HF reconstruction, note ambiguity. For scenario 1 threshold equation, source-derived. For conditional WP, standard but mark as audit operator not source. That's okay? The invariant says never invent fake ratios. We can state "audit operator (not a source equation)" for environmental marginalization. Fine.

Need "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We'll include many. Need ensure exact page numbers: Page 1 intro, Page 2 table, Page 3 WP, Page 4 example, Page 5 shot tracking, Page 6 stats, Page 7 SD/HF, Page 8 FE, Page 9 first end, Page 10 tables, Page 11 change analysis, Page 12 scenario 1, Page 13 scenario 2, Page 14 scenario 3/rule, Page 15 conclusion, Page 16 refs. Good.

Need maybe address "Unknown Authors" but source says Kevin Palmer, Gerry Geurts, Jason Gunnlaugson. We can mention authors? Not necessary. But source header says names. Could mention "paper by Palmer, Geurts, and Gunnlaugson" [PAGE 1]. Good.

Need "multi-hop derivation": In THINK_TRACE, explain chain:
1. Data: linescores + shooting percentages + manual judging [PAGE 1-2].
2. State: score differential, ends remaining, hammer [PAGE 3-4].
3. WP empirical table [PAGE 3-4].
4. Decision: compare expected WP of actions [PAGE 12-14].
5. Strategic priors: blank vs take one [PAGE 3].
6. Audit: equations missing, sample sizes, manual judging, physical conditions, rule change.
Need include gray-zone audit with exact breakdown regimes. This can satisfy.

Need maybe include "Source operators and equations" section with definitions and formal LaTeX. Need include "Equation bodies (1)-(6) are not present in supplied text" important. We must not pretend. We'll say: "The supplied extraction shows labels (1)-(6) but omits rendered bodies; I reconstruct only from verbatim prose and mark reconstructions." This is key. For WP table equations, no body. We can define empirical estimator. Good.

Need "singularity/breakdown regimes": For each operator, list:
- \(PF/G\): undefined if no games; censored by concessions; mixed lengths; not causal.
- HE: denominator zero if no non-blank scored hammer ends; small denominator; blank definition "no stones situated in the rings after all 16 shots" [PAGE 3].
- SD: denominator \(|E_H|=0\); lower better; blanks included.
- HF: if reconstructed as HE-SD, can be negative; not a proportion; equation body missing.
- FE: denominator zero if opponent never scores without hammer; excludes steals/blanks; selection bias.
- SE: denominator zero if no ends without hammer; blanks included; conflates attempt and execution.
- WP: zero/sparse cells; empirical frequencies not causal; first ends all tied; mixed 8/10; events not random sample.
- Scenario threshold: if q not 0.95 or miss outcomes nonzero, thresholds change; if physical conditions alter double success, need conditional p.
Need include units.

Need "RETROCAUSAL_GENEALOGY": Historical lineage: "chess on ice" [PAGE 1]; 1959 Scotch Cup bad sportsmanship [PAGE 3]; 2003-2014 weighted value [PAGE 3]; 2006 Black Book references [PAGE 16]; 2014 End Game [PAGE 16]; 2018 Olympic gold examples [PAGE 15]; 5-rock FGZ [PAGE 14]; AI University of Alberta and SportVu/Second Spectrum [PAGE 15]. Multi-week traps: overfitting to 2017/18 top-20 OOM sample; schedule heterogeneity (teams play 50-100 games) [PAGE 5]; strength of schedule in development [PAGE 5]; first-end samples (Team Jones 76, Homan 32, Sinclair 50) [PAGE 9-10]; multi-week data drift from rule change. Good.

Need "RECURSIVE_THEORY_OF_MIND": Need "crisis habit regression vs counter-trap vs clock." Define:
- Crisis habit regression: when down late, skips revert to traditional "blank rather than take one" or "take one" habits; paper notes teams nearly always blank even mathematically incorrect [PAGE 14]; with time pressure, "stop and consider several options (while a chess timer is ticking away) when pre-planning could help clarify the correct decision much faster" [PAGE 1].
- Counter-trap: Opponent analyzes first-end blank rates and change analysis to predict likely shot calls [PAGE 9-11]. A team can be trapped by its own predictable habit; e.g., Team Jones blanking 9.2% vs Homan 43.8% [PAGE 9-10]. If opponent knows, they can choose strategy to exploit.
- Clock: decision time. Pre-game analysis reduces decision search. Need mention recursive ToM: skip models opponent modeling them; if they know you know, deception. Formal: \(b_i(\theta_{-i})\) posterior; but no need. Use "counter-trap" as opponent's model of your habit. Need mention "crisis habit regression" maybe under fatigue/time. "Clock" can be chess timer. Need cite.

Need "CROSS_LAYER_VETO_ADJUDICATION": Need physical/biomechanical/weather veto proof:
- Physical: stone direction, speed, rotation, eventual location [PAGE 15]; ice conditions [PAGE 1]; sweeping factor [PAGE 1].
- Biomechanical: delivery, release, balance, sweeping ability; shot difficulty judged manually [PAGE 1-2]; "degree of difficulty" and "sweeping factor" [PAGE 1].
- Weather: humidity/temperature/frost not in paper but ice conditions. Need be careful not to cite unsupported. We can say "source does not report weather variables; this is a veto audit outside the paper." That's okay. Need not invent source quotes. But user asks cross-layer veto. We can mention "if humidity/ice temperature changes..." as audit, not source claim. Use "not reported in source" explicitly.
- Veto proof: If physical state \(\omega\) changes, the empirical WP table \(WP(s)\) is a marginal over \(\omega\). It cannot be used as causal policy unless \(P(\omega|s)\) stable. Need formal:
\[
\mathrm{WP}(s)=\sum_\omega \mathrm{WP}(s,\omega)P(\omega|s)
\]
If \(P(\omega|s)\) shifts, \(\mathrm{WP}(s)\) not invariant. Veto if environment shift exceeds calibration tolerance. This is formal. Units probability. Breakdown if \(\omega\) hidden or confounded with team. Good.
- Rule change 5-rock FGZ is a structural veto: old data from 4-rock FGZ [PAGE 14] not exchangeable. Need mention.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable. Need maybe define "RLVR" in this context: "Reinforcement Learning with Verifiable Rewards" or "reinforcement learning veto rule." We can state "RLVR veto = if a policy uses paper-derived operator and a verifiable counterfactual violates its assumptions, the policy must abstain or reweight." Need 3 scenarios:
1. Zero-denominator operator veto: For team with no non-blank scoring ends with hammer, HE undefined. Prediction: any policy that imputes HE=0 will misrank; verification: denominator < 5 or zero; require Bayesian smoothing; measure calibration/log loss. Could be verifiable by checking counts. Prediction: with denominator <5, out-of-sample calibration error > 0.1? Need not exact? Could specify "log loss improves by >=0.02 when using smoothed prior." Good.
2. Rule-change exchangeability veto: 4-rock vs 5-rock FGZ. Prediction: pre-2018 first-end blank/steal distributions not exchangeable with 2018/19; detect via two-sample test (KS or chi-square) on blank rates. If p<0.01 or effect >5 percentage points, veto old policy. Verify with event data. Good.
3. Physical environment veto: fully hidden draw "best shot" claim contradicted by shot tracking [PAGE 5]. Prediction: under high sweeping factor / certain ice, partially hidden draw yields higher expected end points or lower steal rate than fully hidden. Verification: TAP shot tracking, randomized or observational with controls; compute expected points difference > 0 with confidence. Veto if fully hidden not superior. Good.
Maybe another: Scenario 1 threshold if opponent skill not average: WP table average; if Red/opponent skill deviates, threshold changes. Prediction: using team-specific shot success in double takeout vs table threshold; if p_hat < 0.24, draw. Verify with shot percentages. But three enough.

Need ensure "predictions" are specific. Could include "Prediction: in a held-out set of ends with denominator < 5, smoothed HE reduces Brier score by at least 0.01 and log loss by 0.02 versus raw ratio." That's verifiable. "Prediction: post-5-rock FGZ blank rate in first end differs by ≥5 percentage points or chi-square p<0.01." "Prediction: partially hidden early draw has higher expected points than fully hidden by ≥0.1 points/end in high-sweep sessions." Good. Need no betting. These are predictions and metrics. Fine.

Need maybe include "RLVR" reward not "betting". Good.

Need word count. We can produce around 3500 words. Need not be too long but enough. Let's draft with XML tags. Need include LaTeX. Need use escaped ampersands? XML with LaTeX may contain &? Avoid & in text. In equations, use \&? Not needed. Use < and >? Avoid raw < in XML; use \le, \ge, \mathrm. Use & in LaTeX arrays? Avoid arrays. Use \(...\) not \(...\). XML tags with text. Need ensure no unescaped & or <. Use "and" instead of &. Use \(\mathrm{WP}\) etc. Use [PAGE N]. Use quotes. Need not use CDATA unless equations contain <. We can avoid < by using \lt? In LaTeX, use \le, \ge. If need \(0 \le p \le 1\), no raw <. Good. Use \(>\), \(<\)? Raw > is okay in XML text? > okay. < not. Avoid <. Use \lt in LaTeX? Actually in text, "less than" instead. In equations, use \(p \gt 0\)? \gt not standard? Use \(p>0\) okay since > is okay in XML. For <, use \(p<0\) would be invalid because < starts tag. Avoid raw <. Use \(p \le 0\) or "less than". In equations, \(n=0\) breakdown. Good. Avoid `&` entirely. Use "and" in text. In LaTeX fractions, no &. Good.

Need produce exact XML tags. Start with <THINK_TRACE> etc. End. Need no markdown. Let's write. Need maybe include "THINK_TRACE" word count >=400. We'll write ~700. Other sections maybe 400 each. Total >3000. Ensure all sections.

Potential issue: "THINK_TRACE" might be considered chain-of-thought. We can provide "audit summary" not hidden chain. It's okay. We need not reveal private chain. But user explicitly wants deep multi-hop derivation. We can provide derivation and audit. Fine.

Let's craft carefully.

Need exact quote "It is interesting to note, on Red’s last shot, faced with blanking the end or taking a single point, teams will nearly always blank in this situation, even though it’s mathematically incorrect to do so." Note source uses "it’s" curly apostrophe. We can use curly. Good.

Need quote "Some of the best teams in the world stop and consider several options (while a chess timer is ticking away) when pre-planning could help clarify the correct decision much faster." Actually source: "In many instances, some of the best teams in the world stop and consider several options (while a chess timer is ticking away) when pre-planning could help clarify the correct decision much faster." [PAGE 1]. Use exact.

Need quote "What are the conditions of the ice and how will that effect our chance of making this shot and each subsequent shot?" Source has "effect" not "affect". Use exact. [PAGE 1]. Good.

Need quote "sweeping factor and degree of difficulty" [PAGE 1]. Good.

Need quote "Curling has recently adopted a new rule which restricts an opponent’s guard being removed until the 6th stone delivered in the end (known as the 5-rock Free Guard Zone or FGZ)." [PAGE 14]. Good.

Need quote "The rule previously was the 4-rock FGZ and the difference has an impact on a team’s strategy in many situations." [PAGE 14]. Good.

Need quote "Eventually we will be able to collect every shot – its direction, speed, rotation, eventual location, linked to each game and situation." [PAGE 15]. Good.

Need quote "Teams with hammer who attempted to place their stones fully behind centre guards early in ends gave up more steals and found it difficult to score more than one point." [PAGE 5]. Good.

Need quote "This goes against traditional thinking as the “best” shot is currently considered a draw fully hidden behind the guard." [PAGE 5]. Good.

Need quote "General curling theory is for a team with hammer to try and score two points (a deuce) with hammer and force their opponent to one point when they do not have hammer." [PAGE 3]. Good.

Need quote "When able to do so teams with hammer will almost always blank an end (no score, with no stones situated in the rings after all 16 shots) to hold hammer into the next end, rather than score a single point." [PAGE 3]. Good.

Need quote "Curling linescores allow us to determine the Win Probability [3] based on the current score differential at the beginning of each end." [PAGE 3]. Good.

Need quote "The data is collected from major events such as World Championships, Olympic Games, Olympic Qualifying events, Canadian Championships, Grand Slams, and World Curling Tour events." [PAGE 3]. Good.

Need quote "Sample sizes are included in the tables below the percentages (for example 1783-0 is 1783 instances of this situation)." [PAGE 3]. Good.

Need quote "Teams can analyze the results from an opponent’s first end performances and determine the likely situations they will face at the beginning of the game [8]." [PAGE 9]. Good.

Need quote "Blanking at 9.2% is very low (some teams blank nearly 50% of their ends)." [PAGE 9]. Good. "Blanking at 43.8% is very high (compare to Table 5 above)." [PAGE 10]. Good.

Need quote "When tied after the first end, this team has 18% blank ends with hammer and drops to 7% (from 17%) without hammer." [PAGE 11]. Good.

Need quote "Team Epping has a very high number of blank ends in most situations." [PAGE 11]. Good.

Need quote "On average, Yellow should attempt the double take-out if they have a better than 24% (30% for women) chance of making the double." [PAGE 12]. Good.

Need quote "There is also some small chance of scoring one with the double attempt, and this supports the decision to try the more difficult shot." [PAGE 12]. Good.

Need quote "If the result is a Blank, Yellow’s Win Probability, WPy = 58.7%" [PAGE 13]. Good.

Need quote "Hit and roll is a difficult shot to make perfectly and, in most cases, will result in a simple shot to blank the end." [PAGE 13]. Good.

Need quote "A freeze is also a very difficult shot. We would estimate it to be more difficult than the hit and roll so WPy will be below .620." [PAGE 13]. Good.

Need quote "In this case, if Yellow is confident they can avoid Red scoring 2 less than 40% of the time, the draw around the centre would be the correct choice." [PAGE 13-14]. Actually source page 13 ends "Estimates: Red scores 2 = 40%" then page 14 continues. Quote across pages? Use [PAGE 13-14]. Good.

Need quote "A steal is clearly advantageous, but teams aggressively attempting to steal will put more rocks in play and increase chance of a multiple score end, which is a less desirable result." [PAGE 14]. Good.

Need quote "Historically, teams in this position would place a centre guard, but in this situation, it can be better to place the first stone into the top rings, above the button." [PAGE 14]. Good.

Need quote "It is interesting to note, on Red’s last shot, faced with blanking the end or taking a single point, teams will nearly always blank in this situation, even though it’s mathematically incorrect to do so." [PAGE 14]. Good.

Need quote "The stats played a major part because we knew how to play them to put them in an uncomfortable situation." [PAGE 15]. Good.

Need quote "There is more analysis that can be done even with the data available today." [PAGE 15]. Good.

Need maybe quote "Other curling research is in development, some of which disregards historical game data. Mike Bowling and Zaheen Ahmad at the University of Alberta have been working on an artificial intelligence program for curling." [PAGE 15]. Good.

Need include "Not in source" for weather. Fine.

Now construct.

Need maybe include a note at top? The user asked exact XML sections. We can just start. XML tags can contain LaTeX with backslashes. Good.

Let's compose final. Ensure no `&` character. Use "and". Avoid `<` raw. In LaTeX use `\le` for ≤. Use `\ge`. Use `\cdot`. Use `\mathbf{1}`. Use `\sum`. Use `\frac`. Use `\mathrm`. Use `\bar H`. Use `\omega`. Use `\mathbb{E}`. Good.

Potential XML issue: `\bar H` okay. `\mathbf{1}[...]` brackets okay. `\text{...}` okay. `\arg\max` okay. No ampersands. Curly quotes okay. `–` okay. `–` not issue. `’` okay. Need avoid `&` in "R&D" no. Good.

Need maybe escape `%`? In XML no issue. In LaTeX `%` comments but we don't use. Good.

Need "≥" use `\ge` in LaTeX or word. Fine.

Need "source extraction" quote. Good.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The audit chain begins with the paper’s own data model. The source says curling is “Simple in concept but actually quite complex” and is “often called ‘chess on ice’” [PAGE 1]. The decision unit is the shot: “In a 10-end game the captain of each team, known as the ‘skip’, makes 80 decisions. This makes for 160 decisions between two teams” [PAGE 1]. That sentence matters because it establishes the correct analytical granularity: a policy is not evaluated at game level only; it is evaluated over a sequence of shot decisions embedded in ends, score differentials, hammer states, and ice conditions. The first multi-hop step is therefore: linescore data produce score-state histories; score-state histories condition win-probability tables; win-probability tables condition in-game shot choices; shot choices alter later score states. The paper explicitly says “Curling linescores allow us to determine the Win Probability [3] based on the current score differential at the beginning of each end” [PAGE 3]. The second hop is that the paper’s strategy priors are not merely descriptive. It states “General curling theory is for a team with hammer to try and score two points (a deuce) with hammer and force their opponent to one point when they do not have hammer” [PAGE 3]. It then says “When able to do so teams with hammer will almost always blank an end ... rather than score a single point” [PAGE 3]. Those claims generate testable operators: blank rate, hammer efficiency, steal defence, force efficiency, and steal efficiency. The third hop is decision-theoretic: if a team is one down with hammer on the last shot of the final end, the routine draw for one leads to a tied game with an extra end without hammer. The paper gives the relevant probabilities: “Win Probability (WP) tied without hammer and one end remains is 25.1% for men and 31.9% for women” [PAGE 12]. With a 95% routine single, the draw branch has expected value \(0.95 \times 0.251 \approx 0.238\) for men and \(0.95 \times 0.319 \approx 0.303\) for women. The double-takeout branch wins if made; setting \(p\) equal to the break-even probability gives \(p \approx 0.24\) for men and \(p \approx 0.30\) for women, matching “better than 24% (30% for women)” [PAGE 12]. The paper adds that “There is also some small chance of scoring one with the double attempt, and this supports the decision to try the more difficult shot” [PAGE 12]. That sentence lowers the effective threshold slightly if the miss branch is not zero. The fourth hop is the gray-zone audit. The supplied extraction shows equation labels (1) through (6) but omits the rendered bodies on pages 6–8. I therefore treat the prose definitions as the primary evidence and mark any reconstruction. Point Differential is explicitly “the difference in points scored per game (PF/G) and subtract points scored against per game (PA/G)” [PAGE 6], but the paper also warns that “This current statistic for Point Differential does not account for these situations” involving concession and mixed 8-end and 10-end games [PAGE 6]. Hammer Efficiency is “the percentage of time a team takes 2 or more points with hammer, in ends which are scored” [PAGE 6]. Steal Defence is “number of ends stolen against divided by ends with hammer. Blank ends are included. Lower is better” [PAGE 7]. Force Efficiency is “number of ends in which the opponent took 1 point divided by all ends without hammer where the opponent scores. Stolen and blank ends are not included” [PAGE 8]. Steal Efficiency is “ends stolen without hammer by the total ends played without hammer, Blank ends are included” [PAGE 8]. Hammer Factor is the least exact because the source says only “By subtracting these results, we can produce a Hammer Factor [7]” [PAGE 7]; the formula body is absent. A reconstruction \(\mathrm{HF}=\mathrm{HE}-\mathrm{SD}\) is plausible from “subtracting,” but it must be flagged as a reconstruction, not a verbatim equation. The gray-zone audit also catches sample-size and selection traps: the paper reports “Sample sizes are included in the tables below the percentages (for example 1783-0 is 1783 instances of this situation)” [PAGE 3], but many cells will be sparse; the data come from “major events such as World Championships, Olympic Games, Olympic Qualifying events, Canadian Championships, Grand Slams, and World Curling Tour events” [PAGE 3], not a randomized league. Teams also play unequal schedules; the paper notes “some barely 50, others over 100” games and that “a lower ranked team who rarely competes against higher competition having similar or even better statistics” [PAGE 5]. Finally, the 5-rock Free Guard Zone rule creates a structural break: “The rule previously was the 4-rock FGZ and the difference has an impact on a team’s strategy in many situations” [PAGE 14]. Any policy fitted before that rule is under an exchangeability veto until tested. The audit conclusion is that the paper’s operators are useful descriptive and decision-aiding devices, but exact recommendation use requires conditioning on denominator adequacy, opponent skill, event mix, rule regime, and physical ice state.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source extraction exposes labels (1)–(6) but not the rendered equation bodies on pages 6–8. I therefore distinguish source-verbatim definitions from reconstructed formalizations. All probability and efficiency quantities below are dimensionless proportions in \([0,1]\); point differential has units of points per game; sample counts \(n\) are integers. A win probability is a probability unit; if converted to information, \(H(p)=-p\log_2 p-(1-p)\log_2(1-p)\) bits, but the paper does not report bits.

Point Differential. The paper defines it as “the difference in points scored per game (PF/G) and subtract points scored against per game (PA/G)” [PAGE 6]. Formal source-consistent operator:
\[
\Delta P/G = \frac{\text{points for}}{\text{games}} - \frac{\text{points against}}{\text{games}} = \mathrm{PF/G}-\mathrm{PA/G}.
\]
Units: points game\(^{-1}\). Breakdown regime: undefined if games \(=0\); biased by concession because “a team to quit at any time” and “This current statistic for Point Differential does not account for these situations” [PAGE 6]; also not comparable across mixed 8-end and 10-end games without normalization.

Hammer Efficiency (HE). Verbatim: “The percentage of time a team takes 2 or more points with hammer, in ends which are scored. Includes all non-blank ends in which a team has hammer” [PAGE 6]. Let \(E_H\) be ends with hammer, \(S_e\) the hammer team’s points in end \(e\). Then
\[
\mathrm{HE} = \frac{\sum_{e\in E_H}\mathbf{1}[S_e\ge 2]}{\sum_{e\in E_H}\mathbf{1}[S_e>0]}.
\]
Units: dimensionless proportion. Breakdown: denominator zero if a team has no scored non-blank hammer ends; small denominators make HE unstable and non-comparable; blank definition is “no score, with no stones situated in the rings after all 16 shots” [PAGE 3].

Steal Defence (SD). Verbatim: “Ability to limit the number of stolen ends. Calculated by number of ends stolen against divided by ends with hammer. Blank ends are included. Lower is better” [PAGE 7]. With \(A_e\) an indicator that the opponent steals in end \(e\),
\[
\mathrm{SD} = \frac{\sum_{e\in E_H}\mathbf{1}[A_e]}{|E_H|}.
\]
Units: dimensionless proportion. Breakdown: \(|E_H|=0\); blanks inflate the denominator by design; lower is better but a low SD can reflect conservative play rather than superior execution.

Hammer Factor (HF). Verbatim: “By subtracting these results, we can produce a Hammer Factor [7] which provides another indicator of a team’s level of play” [PAGE 7]. The equation body is absent. A marked reconstruction from “subtracting” is
\[
\mathrm{HF} = \mathrm{HE} - \mathrm{SD}.
\]
Units: dimensionless difference. Breakdown: if the omitted source equation uses a different standardization, this reconstruction is not numerically identical; HF is not a proportion and can be negative; it inherits denominator zeros from HE and SD.

Force Efficiency (FE). Verbatim: “measures the ability of a team to force their opponent to one point. Calculated by number of ends in which the opponent took 1 point divided by all ends without hammer where the opponent scores. Stolen and blank ends are not included in the calculation” [PAGE 8]. Let \(E_{\bar H}\) be ends without hammer and \(O_e\) the opponent’s points. Then
\[
\mathrm{FE} = \frac{\sum_{e\in E_{\bar H}}\mathbf{1}[O_e=1]}{\sum_{e\in E_{\bar H}}\mathbf{1}[O_e>0]}.
\]
Units: dimensionless proportion. Breakdown: denominator zero if the opponent never scores in ends without hammer; exclusion of steals and blanks creates selection bias; a high FE can coexist with a high steal-against rate if the team is aggressive.

Steal Efficiency (SE). Verbatim: “the percentage of ends a team steals one or more points. It's calculated by dividing ends stolen without hammer by the total ends played without hammer, Blank ends are included” [PAGE 8]. With \(T_e\) an indicator that the team steals in end \(e\),
\[
\mathrm{SE} = \frac{\sum_{e\in E_{\bar H}}\mathbf{1}[T_e]}{|E_{\bar H}|}.
\]
Units: dimensionless proportion. Breakdown: \(|E_{\bar H}|=0\); blanks are included; SE conflates tactical intent, execution, and opponent weakness.

Win Probability (WP). Verbatim: “Curling linescores allow us to determine the Win Probability [3] based on the current score differential at the beginning of each end” [PAGE 3]. The paper’s estimator is empirical:
\[
\mathrm{WP}(r,c,s,d) = \frac{n_{\mathrm{win}}(r,c,s,d)}{n(r,c,s,d)},
\]
where \(r\) is ends remaining, \(c\) is hammer or steal state, \(s\) is score differential, and \(d\) is men or women. Units: probability. Breakdown: \(n=0\) cells; sparse cells produce high variance; sample composition is event-selected, not random; first ends are all tied and therefore mix first-end strategy with tied-state strategy; mixed 8-end and 10-end games require separate conditioning. The paper’s example is explicit: “if a team has hammer and are down 2 points after the 5th end of an 8-end game, we reference the row with ‘3’ ENDS REMAIN, look across that row under TWO POINT and DN HMR to find their Win Probability = 18.5% (men) or 20.2% (women)” [PAGE 4].

Scenario 1 break-even. Let \(q\) be the routine single success probability and \(\mathrm{WP}_{\bar H}\) the tied-without-hammer, one-end-remaining win probability. If routine success wins the draw branch and routine failure loses, then
\[
\mathrm{WP}_{\mathrm{draw}} = q\,\mathrm{WP}_{\bar H}, \qquad
\mathrm{WP}_{\mathrm{double}} = p.
\]
Setting equal gives \(p=q\,\mathrm{WP}_{\bar H}\). With \(q=0.95\), men \(0.95\times0.251\approx0.238\), women \(0.95\times0.319\approx0.303\), matching “better than 24% (30% for women)” [PAGE 12]. Breakdown: if the miss branch retains a small single-point chance, the threshold falls; if ice or opponent skill changes \(p\), the table threshold is not causal.

Scenario 2 expected values. The paper gives “If the result is a Blank, Yellow’s Win Probability, WPy = 58.7%” and “If Red is forced to one point, WPy = 74.9%” [PAGE 13]. For hit and roll, “Estimate a perfect hit and roll as 20% and assume if made Red will always score one point” [PAGE 13], so
\[
\mathrm{WP}_{\mathrm{hit/roll}} = 0.2(0.749)+0.8(0.587)=0.620.
\]
For draw around the centre guard, the paper’s estimates are Red scores two \(=40\%\), Red scores one \(=50\%\), Yellow steals \(=10\%\) [PAGE 13–14], so
\[
\mathrm{WP}_{\mathrm{draw}} = 0.4(0.413)+0.5(0.749)+0.1(0.867)=0.627.
\]
Units: probability. Breakdown: if the three probabilities do not sum to one, the expression is invalid; if estimates are opponent-average rather than team-specific, the result is not a personalized policy; if physical ice changes the outcome distribution, re-estimate.

Scenario 3. Tied without hammer with three ends remaining, the paper lists “Blank End, WPy = 38.5%,” “Yellow Steals, WPy = 63.4%,” “Red Scores 1, WPy = 36.6%,” “Red Scores 2, WPy = 17.5%” [PAGE 14]. The source then says: “It is interesting to note, on Red’s last shot, faced with blanking the end or taking a single point, teams will nearly always blank in this situation, even though it’s mathematically incorrect to do so” [PAGE 14]. The arithmetic is the audit: for Yellow, blank is 38.5% and Red scoring one is 36.6%; therefore Red’s choice of taking one raises Red’s win complement from 61.5% to 63.4%. Blanking is worse for Red. This is a prime gray-zone case where habit contradicts the table.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicit in the paper and in its references. The “chess on ice” framing [PAGE 1] is not decorative: it positions curling as a sequential decision problem with incomplete execution, like chess with physical error. The paper also records the historical norm that blanking rather than taking one “has been accepted in living memory for generations,” while noting that “it was considered bad sportsmanship by Scotland fans during the first men’s World Championship in 1959 (then known as the Scotch Cup)” [PAGE 3]. That is a retrocausal signal: today’s “standard” strategic habit is historically contingent. The paper’s own prior work includes a weighted value of each end from “season 2003 to 2014” [PAGE 3] and references “Palmer, K. ‘The End Game’ research paper, 2014” [PAGE 16] plus Black Book editions from 2005 and 2006 [PAGE 16]. The modern measurement layer includes “CurlingZone developed advanced scoring which uses a 0 to 5 scale and incorporates sweeping factor and degree of difficulty” [PAGE 1], which is a direct ancestor of later shot-tracking proposals. The 2018 Olympic examples are the adoption proof: Sweden coach Maria Prytz is quoted, “He is incredibly skilled at tactics and numbers, so he can look at different teams and explain how they play in different modes” [PAGE 15], and Agnes Knochenhauer says, “The stats played a major part because we knew how to play them to put them in an uncomfortable situation” [PAGE 15]. Team Shuster’s Matt Hamilton describes being shown “where we sat (among) elite players at certain things, like with the hammer/without the hammer, up by one with the hammer/down by one with the hammer” [PAGE 15]. That is a lineage from descriptive statistics to opponent-specific preparation. The forward genealogy is equally clear: “Eventually we will be able to collect every shot – its direction, speed, rotation, eventual location, linked to each game and situation” [PAGE 15], with SportVu and Second Spectrum as NBA analogies. The paper also records an alternative lineage: “Mike Bowling and Zaheen Ahmad at the University of Alberta have been working on an artificial intelligence program for curling,” and “Games have no issue with physical accuracy, a card played is always successful, but a delivered stone has many possible locations after it’s stopped” [PAGE 15]. That contrast between discrete-game AI and physical-execution AI is a central genealogical fork.

Multi-week traps are visible in the paper’s own data architecture. First, schedule heterogeneity: teams “play varying amounts of games in a season (some barely 50, others over 100)” and “a lower ranked team who rarely competes against higher competition having similar or even better statistics” [PAGE 5]. A multi-week rolling ranking that does not adjust for opponent strength can drift. The paper admits “We have been working on a strength of schedule calculation” [PAGE 5], meaning the published top-20 OOM comparison is an imperfect match. Second, event-mix drift: the data draw from World Championships, Olympics, Olympic Qualifying, Canadian Championships, Grand Slams, and World Curling Tour events [PAGE 3], and a 7th Grand Slam event “similar to match-play golf incorporates a very different game strategy and statistical outcome” [PAGE 5]. Pooling across weeks and events without event fixed effects creates a trap. Third, first-end sample traps: Team Jones has 76 first-end observations with hammer and blanks 9.2%, while Team Homan has 32 observations and blanks 43.8% [PAGE 9–10]; Team Sinclair without hammer has 50 observations and blanks 48% [PAGE 10]. These are not enormous samples, and “some teams blank nearly 50% of their ends” [PAGE 9] means the first-end distribution is highly team-specific. A multi-week scouting report that treats these percentages as stable constants will overfit. Fourth, rule-regime drift: the 5-rock FGZ replaced the 4-rock FGZ, and “There were limited events played in this format prior to 2018/19 Season and time is required to collect the data necessary to provide useful analysis” [PAGE 14]. Any multi-week model crossing that boundary must be re-estimated or vetoed. Fifth, manual judging drift: shooting percentages are “calculated based on a manual judging procedure,” with “varied level of skill from volunteers who provide these numbers,” producing “disagreement on the validity of these percentages from game to game or event to event” [PAGE 1–2]. A multi-week trend in shooting percentage may be a trend in judging, not play. The genealogy therefore supports the paper’s operators as historical instruments, but warns against treating them as timeless constants.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive problem is that a skip’s policy is both a response to the opponent and a signal to the opponent. The paper’s first-end scouting examples make this concrete. Team Jones with hammer blanks 9.2% of first ends, and the paper says “This lets an opponent know the likelihood of where this team will place its first few shots of the end. In this case, Team Jones will likely place a corner guard if their opponent goes into the rings, rather than hitting the open stone” [PAGE 9]. Team Homan with hammer blanks 43.8%, and the paper infers “In this case, Team Homan will likely hit an open stone if their opponent goes into the rings” [PAGE 10]. Team Sinclair without hammer blanks 48%, and the paper infers “Team Sinclair will very likely put the first stone into the rings rather than a guard” [PAGE 10]. That is recursive theory of mind in operational form: an opponent can model your habit, then choose a first-end structure that makes your habit uncomfortable. The paper’s Change Analysis tables extend this to score states: “When tied after the first end, this team has 18% blank ends with hammer and drops to 7% (from 17%) without hammer. This indicates they will be very aggressive when tied without hammer and either want to steal or force” [PAGE 11]. The opponent who knows this can prepare a counter-trap: if you expect aggression without hammer, you can set guards to turn their aggression into a multiple-score end; if you expect conservatism, you can force them into low-event ends. The counter-trap is not deception in the abstract; it is a conditional policy based on the opponent’s historical action distribution.

Crisis habit regression is the failure mode under score pressure and clock pressure. The paper notes that “some of the best teams in the world stop and consider several options (while a chess timer is ticking away) when pre-planning could help clarify the correct decision much faster” [PAGE 1]. Under time stress, a team may regress to the inherited habit rather than the table-optimal action. The clearest example is Scenario 3: “teams will nearly always blank in this situation, even though it’s mathematically incorrect to do so” [PAGE 14]. The habit is “blank rather than take one” from [PAGE 3], but the table says Red should take one because Yellow’s WP is lower at 36.6% than at 38.5% [PAGE 14]. This is a crisis habit regression: the traditional rule overrides the local arithmetic. A second habit regression is “some teams appear to have the same approach every game, either very conservative with few stones in play or aggressive with more stones in play” [PAGE 9]. Under pressure, teams may default to that same approach even when the score state calls for a different risk level. The counter-trap for an opponent is to identify the default and build a game plan that punishes it. The clock layer is the mediator: with more pre-game analysis, the skip can retrieve a prepared policy instead of searching under time pressure. The paper’s own workflow—pre-game first-end analysis, Change Analysis, opponent preparation—is a clock-management strategy. The recursive theory of mind therefore has three layers: (1) self-model: what is my habit under this score and time state; (2) opponent-model: what does the opponent believe about my habit, and what action does that belief induce; (3) counterfactual model: if I deviate, does the opponent’s counter-trap still work? The paper’s data cannot fully answer layer 2 and layer 3 because it mostly records outcomes, not beliefs. But the first-end and change tables are enough to show that habits are observable, stable enough to scout, and therefore exploitable. The correct audit is not “use the table” but “use the table conditionally, then ask whether the opponent is already pricing your habit.”
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical-layer veto is the strongest because the paper’s operators are score-state operators, while curling outcomes are generated by stone motion on ice. The paper itself asks: “What are the conditions of the ice and how will that effect our chance of making this shot and each subsequent shot?” [PAGE 1]. It also says the advanced scoring scale “incorporates sweeping factor and degree of difficulty” [PAGE 1]. Those are not cosmetic covariates. If ice temperature, pebble, frost, humidity, or sweeping effectiveness change, the mapping from a called shot to an outcome distribution changes. A win-probability table conditioned only on ends remaining, hammer, and score differential is a marginal over hidden physical states:
\[
\mathrm{WP}(s)=\sum_{\omega}\mathrm{WP}(s,\omega)P(\omega\mid s),
\]
where \(\omega\) denotes the physical-environment state. Units: probability. Breakdown regime: if \(P(\omega\mid s)\) shifts between events, weeks, or teams, the marginal \(\mathrm{WP}(s)\) is not invariant; if \(\omega\) is correlated with team identity because one team has better sweepers or a delivery style suited to the ice, the table is confounded. The veto rule is: do not use \(\mathrm{WP}(s)\) as a causal action value unless the environment shift is bounded or the policy is re-estimated within \(\omega\). The paper’s shot-tracking finding is a direct physical-layer warning: “Teams with hammer who attempted to place their stones fully behind centre guards early in ends gave up more steals and found it difficult to score more than one point. When the team hid only part of the stone, their opponents did not counter with nearly as aggressive tactics. This goes against traditional thinking as the ‘best’ shot is currently considered a draw fully hidden behind the guard” [PAGE 5]. That is a physical-tactical interaction: the “best” shot under one model of guard placement is not the best under observed opponent responses. Biomechanically, the delivery and sweeping layer determines whether the called shot is even executable at the required accuracy. The paper’s manual scoring uses “degree of difficulty” and “sweeping factor” [PAGE 1], but the manual judging is variable: “varied level of skill from volunteers who provide these numbers” [PAGE 1]. That creates an execution-measurement veto: a high shooting percentage may reflect easier called shots or lenient judging, not better biomechanical execution. The weather layer is not reported in the source text. That absence is itself a veto: any policy that applies the paper’s WP tables to a new venue without measuring ice and atmospheric conditions is assuming exchangeability that the paper does not establish. The 5-rock FGZ rule is a structural-layer veto as well: “Curling has recently adopted a new rule which restricts an opponent’s guard being removed until the 6th stone delivered in the end (known as the 5-rock Free Guard Zone or FGZ). The rule previously was the 4-rock FGZ and the difference has an impact on a team’s strategy in many situations” [PAGE 14]. Because the rule changes the legal action set, data from the 4-rock regime are not exchangeable with 5-rock data for guard-removal decisions. The cross-layer adjudication is therefore: physical and biomechanical layers can veto a score-state recommendation when they alter the action-outcome distribution; weather and ice can veto when unmeasured; rule layers can veto when the legal action set changes. The paper’s own conclusion supports this cautious reading: “There is more analysis that can be done even with the data available today” [PAGE 15], and the real opportunity is “a data pool of shot information” [PAGE 15]. Until that data pool includes physical covariates, the score-state operators are descriptive priors, not universal causal laws.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR here means a reinforcement-learning verification rule: a paper-derived recommendation is allowed only if a counterfactual check with verifiable outcomes passes. The veto is not rhetorical; each scenario has a measurable prediction and a rejection criterion.

Veto 1: Denominator-zero efficiency imputation. Source basis: HE is defined over “ends which are scored” and “Includes all non-blank ends in which a team has hammer” [PAGE 6]; FE divides by “all ends without hammer where the opponent scores” [PAGE 8]. Counterfactual: a policy receives a team with \(n_{\mathrm{HE}}=0\) or \(n_{\mathrm{FE}}=0\) and imputes HE \(=0\) or FE \(=0\). Veto: any zero-denominator ratio must be replaced by a hierarchical prior or abstention, because the operator is undefined, not zero. Prediction: on held-out events, a smoothed estimator will reduce Brier score by at least 0.01 and log loss by at least 0.02 relative to raw zero-imputation in cells with denominator less than 5. Verification: count denominators, compare calibration curves and proper scoring rules on held-out seasons. If the prediction fails, the veto is withdrawn for that operator.

Veto 2: Rule-regime exchangeability. Source basis: “The rule previously was the 4-rock FGZ and the difference has an impact on a team’s strategy in many situations” [PAGE 14], and “There were limited events played in this format prior to 2018/19 Season and time is required to collect the data necessary to provide useful analysis” [PAGE 14]. Counterfactual: a policy trained on pre-2018 first-end blank rates recommends a guard-removal action in the 5-rock FGZ regime. Veto: the policy must abstain from that action or reweight until the post-rule distribution is tested. Prediction: the first-end blank rate and steal rate will shift by at least 5 percentage points, or a two-sample test will reject exchangeability at \(p<0.01\), when comparing 4-rock and 5-rock events. Verification: event-level blank and steal counts before and after the rule; chi-square or Kolmogorov–Smirnov test on end outcomes. If no shift is detected, the veto is relaxed for that action class.

Veto 3: Physical shot-shape veto against the “fully hidden draw” prior. Source basis: “Teams with hammer who attempted to place their stones fully behind centre guards early in ends gave up more steals and found it difficult to score more than one point” [PAGE 5], and “This goes against traditional thinking as the ‘best’ shot is currently considered a draw fully hidden behind the guard” [PAGE 5]. Counterfactual: a policy recommends a fully hidden draw as the default early-end shot under high sweeping-factor or adverse ice conditions. Veto: the policy must compare fully hidden versus partially hidden placement using shot-tracking outcomes, not tradition. Prediction: in sessions with high sweep factor or degraded ice, partially hidden early draws will produce a higher expected end score or a lower steal-against rate than fully hidden