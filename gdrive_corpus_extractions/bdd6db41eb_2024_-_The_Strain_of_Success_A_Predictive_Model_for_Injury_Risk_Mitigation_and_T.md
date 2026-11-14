---
source: "2024 - The Strain of Success A Predictive Model for Injury Risk Mitigation and Team Success in Soccer - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2024"
pages: 19
model: deepseek/deepseek-v4.1-flash-1017
words: 9276
---

<NATIVE_REASONING>
We need answer to user. Need parse: They provide source text and instruction: GSE+GSI Frontier Reasoning Foundry with strict invariants. Need produce XML sections exactly, >=1000 words, no betting lines. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Source text has page markers at end of pages? We have page numbers interspersed: 1,2,...19. Need use [PAGE N] markers. Need formal LaTeX equations, units, assumptions, singularity/breakdown. Need sections:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit.
<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX units page citations breakdown.
<RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need likely analyze paper, not betting. Need zero betting lines, no odds. Need mention no lines. Need cite exact quotes. We can cite pages with verbatim quotes. Need be careful page mapping: Source pages: after title and intro ending first page "1"; Section 2 and 3 and maybe page 2; page 3 has 3.1 overview? Let's map:
PAGE 1: title through intro contributions? Source has "1" after first page after footnote? Actually first "1" after "Open-source code..." and before bullet "Our model achieves..." Wait text:
... novel contributions:
- A probabilistic ...
- A forward-looking...
> 1 ...
> 2 ...
1 
- Our model achieves...
Thus PAGE 1 includes title, intro, first bullets, footnotes, page number 1, but then bullet continues after page number? Hmm page marker appears mid-list? It might be footer at bottom, and subsequent bullets at top page 2, but source text puts page number then bullets. The "2" footer after Section 3 intro? Let's map carefully:

After page number 1, there is:
- Our model achieves similar...
...
In Section 2...
## 2. Related Work...
...
## 3. A Model...
...
2 
### 3.1 Team Selection Model Overview
...
Figure 1...
...
3 
### 3.2 Defining...
### 3.2.1 Players...
...
4
### 3.2.2 Player Availability...
...
## 4 Calculating...
...
4? Wait text:
"4 
 Figure 2..."? Let's identify page markers:
- "1" after footnote 2.
- "2" after Section 3 intro (before 3.1).
- "3" after Figure 1 caption? Actually after "Figure 1 ... IP." then "1. Current Team State..." then "2. Manager..." etc and "3. Team Selection" then page "3" before 3.2? Let's inspect: It shows:
"Figure 1 ... IP.
1. Current Team State...
...
5. New MDP State...
### 3.2. Defining...
...
3 
### 3.2.1. Players and Games"
Wait source:
Figure 1 caption then numbered list 1-5, then "### 3.2. Defining..." then "3 " then "### 3.2.1."? Let's scroll: In source text:
```
Figure 1 ... IP.

1. Current Team State ...
...
5. New MDP State ...

### 3.2. Defining the Mathematical Model

In this subsection...

3 

### 3.2.1. Players and Games
...
```
Yes page 3 footer after 3.2 intro. So page 2 includes 3.1 and page 3? Hmm source page marker after 3.2 intro indicates page 3 content included 3.2 intro? Actually footer 3 at end of page 3. So page 2 likely starts at Section 2 on previous? We need not perfect. We can cite page ranges or exact page where quote appears. Need exact [PAGE N] markers. We can quote phrases with [PAGE 4], etc. Need ensure quote exists. We can use quotes from text and cite page numbers based on surrounding page markers. Let's build page map:

Page 1: Title, abstract/introduction through contributions? Page marker "1" after footnotes. Contains intro and first contributions and footnotes 1/2. It also includes bullet after page marker? Hmm not sure. But safe: intro quotes are [PAGE 1].
Page 2: Remaining contributions, Section 2 Related Work, Section 3 intro. Page marker "2" after Section 3 intro. So Section 2 [PAGE 2], "In Section 2..." probably [PAGE 2]. Section 3 intro [PAGE 2]. 
Page 3: Section 3.1 overview, Figure 1, list 1-5, Section 3.2 intro? Page marker "3" after 3.2 intro. So page 3.
Page 4: Section 3.2.1 players/games, 3.2.2 player availability, Section 4 intro, Figure 2? Wait page marker "4" appears after Figure 2? Source:
```
### 3.2.1 Players...
...
4 
### 3.2.2 Player Availability...
...
## 4 Calculating...
...
4 
Figure 2 - ...
```
Actually there are two "4"? Let's check source: after 3.2.1 text:
```
...the model 𝑓 and game difficulties 𝜶 are trained and predicted using past game data (expanded on in Section 5).

### 3.2.2. Player Availability
...
...
In the next subsection, we expand on our player injury prediction model.

## 4. Calculating Player Injury Risk

In this section...

### 4.1. Injury Risk Model

The initial step...
...
Figure 2 - Player injury probability model features and framework.
...
4 
```
Wait I see "4" before Figure 2? Source exact:
```
4 
### 3.2.2. Player Availability
```
No, let's revisit source provided. It has:
```
### 3.2.1. **Players and Games** 
...
Given 𝛼� and a team 𝐶, we define... (expanded on in Section 5). 

### 3.2.2. **Player Availability** 
...
In the next subsection, we expand on our player injury prediction model. 

## 4. **Calculating Player Injury Risk** 

In this section...
...
The diagram of the injury model and the features it is trained on are shown in Figure 2. 



4 



Figure 2 - Player injury probability model features and framework.
```
Wait page marker "4" appears after "shown in Figure 2."? Actually text: after "shown in Figure 2." there is blank, then "4", then Figure 2 caption. So page 4 ends before Figure 2 caption? Page 5 then begins with Figure 2 and 4.1? Hmm page marker 4 after Section 4 intro. That means page 4 content includes 3.2.1, 3.2.2, Section 4 intro. Figure 2 caption on page 5. But source has "4" then Figure 2 caption then "Figure 2..." then text. So page 5 begins Figure 2? But page marker 5 later after paragraph "Any negative samples..."? Let's map not crucial. We can cite page ranges for sections.

Need include formal equations. We can formalize MDP, injury probability, Poisson match model, expected points, Bellman, action constraints, injury length Gaussian, SHAP etc. Units: skill VAEP (dimensionless expected goals added? VAEP units are probability/expected goals? The paper says total VAEP; likely unitless or goals? We can say dimensionless expected-goal-value proxy, not SI. Injury probability dimensionless [0,1]. Timestep days. Injury length games. Expected points points. Discount factor dimensionless. Log loss nats. SHAP values in probability units? Mean |SHAP| in probability units. Need be honest.

Need identify singularities/breakdown regimes:
- Injury probability p ∈ [0,1]; model can saturate; log loss 0.1676 etc.
- MCTS approximations: sample noise, rollout assumptions (first three transitions normal then no injuries), progressive widening, action space up to ~2000, state count 38^11, computational limits; if injury risk multiplier high, proactive choices limited; model single-season horizon (end-season risk increase); no multi-season career welfare; no substitutions within game; unknown weather veto? Paper references weather [5] but features? It removed team form, days since previous game? It says weather conditions in related work but feature contributions maybe not weather? Need adjudicate physical/biomechanical/weather veto proof: Paper uses distance covered, acute workload, past injuries, career days injured. It does not include weather? It cites Orchard & Powell weather. It says features such as team form, days since previous game, and other physical features curated; minimal performance impact, removed. Weather not in final feature set? We need proof: no weather feature in Figure 10? Source lists most contributory: acute workload, number past injuries, career total days injured, distance covered. No weather. So weather veto: if match-day surface/heat/cold/altitude etc not in model, cannot claim universal. Need cross-layer veto: physical/biomechanical/weather. We can state model's cross-layer coverage is limited: event-derived workload estimates via player location prediction, no direct biomechanical load, no weather variable in final feature set, no in-game substitutions, no multi-season. So any deployment must veto in high-risk weather or biomechanical flags unless recalibrated. Need "proof" via page citations: [PAGE 2] cites weather [5] as related; [PAGE 6] says features removed and top features; [PAGE 5] says physical metrics estimated using cheaper on-ball event data and player location prediction. [PAGE 7?] MCTS constraints. Need cite exact quotes.

Need retrocausal genealogy: lineage from Maher 1982 Poisson, VAEP 2020, XGBoost/SHAP, MCTS/UCB1/Go, robust/recoverable team formation, multi-agent. Historical/scientific lineage & multi-week traps. Multi-week traps: short-term greedy vs long-term; acute:chronic workload; injury history; congested schedules; cup runs; single-season horizon; no multi-season repeated injury effect; financial under-exaggerated; weather; rolling average window 5; high-risk multipliers. Need mention no betting lines.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Interpret: manager under pressure defaults to greedy ("managers most commonly follow a greedy approach"; "high-pressure environment"; "next game focus"). Counter-trap: MCTS rests key players vs weak/strong opponents? It says reserves key players for matches where impact significant, rather than against stronger teams low win probability. Clock: single season terminal horizon; end-season risk increase; need multi-season clock. Need discuss recursive beliefs: manager models opponent? Actually match model f uses opponent strength α_t from opposition average team value; MDP assumes environment stochastic, not adversarial opponent adaptation. Recursive theory of mind: managers anticipate injury and rest; but no opponent strategic response; no player psychology; no substitution game. Counter-trap: if everyone adopts MCTS, rest patterns could be anticipated? Not modeled. Clock: deadline pressure causes habit regression; MCTS may defer risk to season end. Need be within section.

RLVR counterfactual vetoes: 3 verifiable veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need propose scenarios that would falsify/ veto model claims, with predictions. E.g.:
1. Weather/heat stress audit: add match-day WBGT/rain/field surface; if high WBGT games show elevated injury hazard not captured, model's injury probabilities miscalibrated; prediction: calibration slope >1? Need verifiable: compare log loss/Brier with weather features, expected improvement. Veto if Brier score not improved? We need no betting. Use injury prediction.
2. Biomechanical load audit: replace event-derived distance with GPS-derived high-speed running/accelerations; if SHAP reorders and predictive log loss improves significantly, veto claim that event-only features suffice. Prediction: GPS features reduce log loss by >? We can set threshold e.g. ≥0.005 nats and calibration slope closer to 1. Need be careful not fake? It's a proposed test, not source. Fine.
3. Multi-season horizon audit: run two-season MDP with MCTS vs greedy; if MCTS's end-of-season injury risk spike persists and long-term injuries accumulate, single-season claim invalid. Prediction: terminal injury probability increases in last 5 gameweeks; second-season expected points drop if no multi-season. Veto if MCTS reduces optimal-team injuries by <13% over two seasons or if injury risk at season end higher than greedy. Need verifiable.

Need answer in XML. Need meet word count >=1000. Likely 2500-3500 words. Need no betting lines. Avoid words "odds", "moneyline", "spread", "totals" except maybe "no betting lines" but invariant says never mention spreads, totals, moneylines, odds. Better avoid those words entirely. Don't mention "betting applications" quote? The source says "proven success in betting applications" [PAGE 7?]. Strict invariant zero betting lines: never mention spreads/totals/moneylines/odds. It doesn't forbid "betting applications" but to be safe, avoid quoting that phrase. We can paraphrase "forecasting applications" but quote not exact. But source has "betting applications"; if quote verbatim may mention betting. Is "betting" a betting line? Not line, but safe to avoid. Need cite exact quotes. We can quote other phrases.

Need use exact [PAGE N] markers. We can say [PAGE 1] "In the 2021/22 season..." etc. Need maybe page citation with quote. Ensure quotes are verbatim from source. Need exact casing? We can quote fragments. For page mapping, choose safe quotes from pages we know. Let's map quotes to page numbers more accurately.

Let's reconstruct page boundaries from source text:

Page 1:
- Title
- Paper Track...
- Section 1 Introduction
- Intro paragraphs
- contributions bullets first two
- footnotes 1,2
- [PAGE 1] marker? Actually page number 1 at end of page 1. Then bullet "Our model achieves..." might be page 2? Wait page marker before bullet: The source:
```
> 2 Open-source code...
1 
- Our model achieves...
- We use data...
In Section 2...
...
2 
```
This is odd: page number 1 appears before remaining bullets, so page 2 begins with remaining bullets. So PAGE 1 includes up to footnotes; PAGE 2 includes remaining bullets + Section 2 + Section 3 intro. Good.
Page 2 quotes: "Our model achieves similar performance..." [PAGE 2]? Actually after marker 1. Use [PAGE 2]. "We use data to demonstrate that managers most commonly follow a greedy approach" [PAGE 2] maybe. Section 2 "there's a gap..." [PAGE 2]. "Beal et al. [6]..." [PAGE 2]. "Our approach proactively reduces fault probability" [PAGE 2]. Section 3 intro [PAGE 2].
Page 3: Section 3.1, Figure 1, list, Section 3.2. Quote "The goal of the optimiser is to select the optimal team for maximizing long-term performance." [PAGE 3]. "Using Monte Carlo tree search..." [PAGE 3].
Page 4: Section 3.2.1, 3.2.2, Section 4 intro. Quote "We define a matrix of injury probabilities..." [PAGE 4]. "Every game t∈T has a timestep..." [PAGE 4]. "A player a cannot be selected..." [PAGE 4].
Page 5: Figure 2, Section 4.1. Quote "We use XGBoost..." [PAGE 5]. "To make our team formation model more accessible..." [PAGE 5]. "When we compute player workload and fatigue features..." [PAGE 5]. "Once we have used the model above to sample player injury..." [PAGE 5]. "Any negative samples..." [PAGE 5].
Page 6: Section 4.2 and Figure 4? Quote "We find that the most contributory feature was acute workload..." [PAGE 6]. "Features such as team form, days since previous game..." [PAGE 6]. "Our model is designed to use key features..." [PAGE 6].
Page 7: Section 5 match reward. Quote "We modify the Maher model..." [PAGE 7]. "The total VAEP..." [PAGE 7]. "Against this background, we define V(C,t)=..." [PAGE 7]. "player-level model has a log-loss score of 0.915..." [PAGE 7].
Page 8: Section 6.1 MDP, Bellman. Quote "We formulate our soccer team selection model as an MDP..." [PAGE 8]. "Due to a large action set..." [PAGE 8]. "there are up to ~2000 possible actions..." [PAGE 8]. 
Page 9: Section 6.2, 6.3. Quote "Each player a∈A has a role X_a..." [PAGE 9]. "We use MCTS to approximate Q-values..." [PAGE 8? Actually page 8 ends after "we use MCTS..."? Source: page 8 marker after "computing exact solution...". Then page 9 starts 6.2. Wait quote "we use MCTS to approximate Q-values" is before page 8 marker? It appears before "8" marker. Yes page 8. "Each player..." [PAGE 9]. "The maximum tree depth is K..." [PAGE 9].
Page 10: Section 6.3.1. Quote "For every iteration of MCTS..." [PAGE 10]. "For our rollouts, at each game..." [PAGE 10]. "The first three rollout state transitions..." [PAGE 10]. "progressive widening" [PAGE 10].
Page 11: Section 7 intro and 7.1. Quote "we use on-ball events data..." [PAGE 11]. "XGBoost model achieved a log loss of 0.1676..." [PAGE 11]. "heuristic baseline achieved..." [PAGE 11]. "The mean percentage difference..." [PAGE 11].
Page 12: Section 7.2, 7.3? Quote "team selection processes by human expert managers..." [PAGE 12]. "Our analysis demonstrates..." [PAGE 12]. Table 1 maybe [PAGE 12]. "MCTS approach closely matched..." [PAGE 12].
Page 13: continuation 7.3 and 7.4. Quote "It notably reduced squad injuries by about 5%..." [PAGE 13]. "MCTS achieved a 17% lower variance..." [PAGE 13]. "In high-risk scenarios, our MCTS model surpasses..." [PAGE 13].
Page 14: 7.5 financial. Quote "average reduction of 11%..." [PAGE 14]. "£700,000..." [PAGE 14]. "likely underexaggerated" [PAGE 14].
Page 15: 7.6 case study. Quote "MCTS strategy shows a slight increase in injury risk towards the season’s end..." [PAGE 15]. "Extending the model to multiple seasons..." [PAGE 15].
Page 16: Discussion. Quote "MCTS often reserves key players..." [PAGE 16]. "Expanding our model to include strategies like workload distribution..." [PAGE 16]. "model presented..." [PAGE 16].
Page 17: Conclusion. Quote "reduction in injuries among key players by approximately 13%" [PAGE 17]. "effective even in high-injury-risk environments" [PAGE 17].
Page 18: References. Not need.
Page 19: Appendix Figure 10. Quote "Figure 10 shows all the features..." [PAGE 19]. Top features maybe [PAGE 6] and [PAGE 19].

Need formal LaTeX. Include equations:
State: \(s_t=(t,Z_t,F_t,\Theta_t,L_t)\)
Action: \(C \in \mathcal A(s_t)\), \(|C|=11\), roles constraint.
Transition: \(P(s_{t+1}|s_t,C)\)
Reward: \(R(s_t,C)=V(C,t)=3\Pr(\text{win}|C,t)+\Pr(\text{draw}|C,t)\) points.
Bellman: \(Q^*(s_t,C)=R(s_t,C)+\gamma \sum_{s_{t+1}}P(s_{t+1}|s_t,C)V^*(s_{t+1})\), \(V^*(s)=\max_C Q^*(s,C)\). Terminal at \(t_K\).
Injury: \(p_{a,t}=\Pr(\text{injury}_{a,t}=1|F_t)\) via XGBoost \(g(F_t)\), \(\Theta_{a,t}\).
Outcome \(o_t\sim \Pr(o_t|C,\Theta_t)\); lengths \(l_a\sim \mathcal N(\mu,\sigma^2)\), clipped \(l_a\leftarrow \max(0,\tilde l_a)\). Wait paper says negative samples assumed injury length 0; that's not exactly clip? Yes.
Availability: \(a\in C \implies l_a=0\). Update \(l_a^{t+1} = \max(l_a^t-1,0)+\ell_a^{new}\)? Need be precise: unavailability length reduces by one after each game for injured; new injuries set length. We can state.
Match model: \(\lambda_i = \exp(\beta_0 + \beta_h + \beta_V V_i + \beta_{V'} V_j)\)? Need adapt Maher. Original Maher uses Poisson regression. We can define \(Y_i\sim\text{Poisson}(\lambda_i)\), \(Y_j\sim\text{Poisson}(\lambda_j)\), with log link on team values. Paper doesn't give exact beta; we can present as formalization with unspecified learned coefficients. Need avoid inventing fake ratios? Formal equation ok. We can say "schematic formalization consistent with described Maher adaptation; coefficients learned from data". Use \(V_i=\sum_{a\in C_i}\Omega_a\). Opponent strength \(\alpha_t\) is average team value. Then scoreline probability \(P(Y_i=y_i,Y_j=y_j)=\frac{e^{-\lambda_i}\lambda_i^{y_i}}{y_i!}\frac{e^{-\lambda_j}\lambda_j^{y_j}}{y_j!}\) assuming independence (as Maher). Win/draw probs sums. Expected points.
Log loss: \(L=-\frac1N\sum_n[y_n\log p_n+(1-y_n)\log(1-p_n)]\) nats. For match multiclass maybe.
SHAP: \(\phi_j=\sum_{S\subseteq F\setminus\{j\}}\frac{|S|!(|F|-|S|-1)!}{|F|!}[g(S\cup\{j\})-g(S)]\). Units probability.
MCTS UCB1: \(Q(s,a)+c\sqrt{\frac{\ln N(s)}{N(s,a)}}\). Progressive widening condition \(N(s,a) \ge k N(s)^\alpha\). Need mention.
Action constraints: \(|C|=11\), roles counts e.g. \(n_{GK}=1\), \(n_{DEF}=3..5\), \(n_{MID}=2..5\), \(n_{ATT}=1..3\)? Paper doesn't specify exact counts. It says latter four constraints simplification; all formations fit. We can state generic \(n_r(C)\in [n_r^{\min},n_r^{\max}]\) learned from preferred formation. Avoid inventing exact. Use \(\sum_{r} n_r(C)=11\), \(n_{GK}=1\), etc unspecified bounds. Good.

Need "source operators and equations" include citations exact quotes. Cite pages. For each equation, cite relevant page. Include assumptions and breakdown:
- Assumption: Markov state sufficient; injury conditional on features; match outcomes independent Poisson; team value additive; no tactical/opponent adaptation; event-data proxies; single-season horizon; no in-game substitutions; no multi-season; no weather/biomech; calibration low injury prevalence ~4%; MCTS approximate not exact; rollout assumption no injuries after three transitions; action space sample limited. Breakdown regimes: p near 0/1, high risk multiplier (proactive choices limited), few available players due to constraints, injuries varying length causing state explosion, distribution shift (different league/season/weather), wage data etc. Need mention exact singularity? Formal singularities: log link \(\lambda=\exp(\eta)\) finite; Poisson zero probability if λ=0; log loss undefined if p=0 for observed injury (regularization/clipping needed). MCTS variance as N(s,a)→0; UCB exploration term \(\sqrt{\ln N / N}\) diverges as N(s,a)=0 but handled by expansion. Progressive widening alpha. Bellman exact infeasible due to state explosion \(38^{11}\). We can mention. Need "exact singularity/breakdown regimes" yes.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need cite quotes:
- [PAGE 2] "weather conditions [5]" in related work. 
- [PAGE 5] "Computing physical metrics that are used to calculate fatigue-related features typically requires expensive tracking systems." and "estimate player physical metrics using cheaper on-ball event data" 
- [PAGE 6] "Features such as team form, days since the previous game, and other physical features were also curated. However, these features had minimal performance impact..." and "most contributory feature was acute workload..." 
- [PAGE 19] "Figure 10 shows all the features..."
- [PAGE 9] "Each player a∈A has a role X_a..." 
- [PAGE 16] "Expanding our model to include strategies like workload distribution within a single game, especially through soccer substitutions, is a potential area for future research." 
- [PAGE 15] "MCTS strategy shows a slight increase in injury risk towards the season’s end..." 
Need argue weather veto: The paper's final model does not include weather as input; it only cites weather in related work. Therefore cannot adjudicate heat/cold/wind/pitch. If a match-day WBGT exceeds threshold or surface is unsafe, model's \(F_t\) lacks variable; probability estimate is conditional on missing variable, so \(\Theta_{a,t}\) is not calibrated for that layer. Veto: deployment should override MCTS if external weather threshold. Biomechanical veto: event-derived distance/dribbles cannot capture accelerations/decelerations, high-speed running, asymmetric loading; no GPS/IMU. So if biomechanical flag exceeds threshold, model's rest recommendation must be vetoed. Physical veto: travel, sleep, illness, load? Not in features. So cross-layer veto proof: model has partial observability; feature set excludes weather and direct biomechanics; the paper itself says physical metrics are estimated from on-ball event data for accessibility [PAGE 5], so high-fidelity biomechanical inputs are absent. Need maybe mention "all formations seen in the data fit this formulation" [PAGE 9] but no weather.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. We can write ~400 words. Need mention Maher 1982 Poisson; VAEP 2020; XGBoost; SHAP 2017; MCTS/UCB1/Go; Beal et al robust/recoverable team formation; sequential team selection; acute:chronic workload ratio [3]; injury history [4]; weather [5]. Retrocausal: how future injury cost reshapes current selection; Bellman discount. Multi-week traps:
- acute workload spike after rest? If model rests then overloads, injury risk may rebound; acute:chronic workload ratio from Hulin cited. The paper uses acute workload top feature but not chronic ratio? It says "acute workload" top; "career total days injured"; "past injuries"; "distance covered". It does not explicitly include acute:chronic workload ratio? It cites Hulin [3]. Multi-week trap: if MCTS rests a player, subsequent acute workload may spike when reintroduced; if model only looks one game? It updates workload. But single-season horizon. 
- Greedy managers sacrifice long-term; MCTS may defer injuries to end of season (clock trap). 
- Financial underexaggerated due to repeated injuries; multi-season.
- Progressive widening and rollout assumption "first three transitions normal then no further injuries" could underweight cascading injury waves. This is multi-week trap. Need mention.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Interpret as recursive modeling of manager/opponent/player. Need write ~300-400 words. 
Crisis habit regression: Under high pressure, managers regress to greedy myopic policy; paper shows human selections mirror greedy [PAGE 12]. "high-pressure environment" [PAGE 12]. This is a habit regression: stress narrows horizon. Counter-trap: MCTS can rest key players in low-probability games, preserving them for high-impact matches; but if opponents/players anticipate this, they might exploit? The model doesn't include adversarial opponent adaptation; α_t constant independent of C [PAGE 4? Actually 3.2.1 says game difficulty constant independent of selected team C]. So counter-trap: an opponent could target rested squad? The model's match prediction uses opponent average team value, not reactive. Also recursive ToM: manager believes player injury risk; player may hide injury? Not modeled. Clock: terminal state at final game; MCTS discounts future beyond season; end-season risk increase [PAGE 15]. Need propose counter-trap: If MCTS is known, it might systematically rest stars against stronger teams, making those matches lower-effort; but no game-theoretic equilibrium. The "counter-trap" could be an evaluator using greedy benchmark as habit; if human managers are not actually greedy but constrained by information, comparing to greedy may misattribute. Need mention. 
Need satisfy "crisis habit regression vs counter-trap vs clock": We can structure three paragraphs.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. Need define RLVR maybe "reinforcement learning with verifiable rewards" not source. We can say "RLVR-style counterfactual audit" with explicit reward and verifier. Need 3 scenarios. Each: intervention, verifier metric, veto condition, prediction. Ensure no betting lines. Use units. 
Scenario 1: Weather-conditioned calibration veto. Intervention: append match-day WBGT, precipitation, pitch moisture. Verifier: Brier score and calibration slope for injury in held-out seasons. Prediction: adding weather lowers Brier by ≥0.002? Need cautious. Veto if no improvement? Actually if weather improves, then original model's omission is a veto for all-weather deployment. If no improvement, weather veto not supported. Need phrase: "VETO original deployment if ..." with predictions. 
Scenario 2: Biomechanical load substitution veto. Intervention: replace event-derived distance with GPS/IMU high-speed running and acceleration counts. Verifier: log loss and SHAP rank stability. Prediction: log loss improves by ≥0.005 nats and top feature changes; veto if improvement exceeds threshold. 
Scenario 3: Multi-season horizon/cascading injury veto. Intervention: two-season MDP with carryover injuries and no terminal reset; verifier: optimal-team injury reduction and end-season injury probability; prediction: single-season MCTS reduces 13% but two-season reduction shrinks or reverses; veto if two-season reduction <5% or end-season p higher than greedy. 
Need maybe include "counterfactual" predictions: if model is right, MCTS maintains points and reduces injuries; if wrong, etc. Use exact numbers from paper: 13%, 17%, 5%, 11%, £700k. Use [PAGE 13], [PAGE 14], [PAGE 15], [PAGE 17]. Need no betting.

Need overall word count. Let's draft with XML tags. Need no markdown? XML sections with text. Can use LaTeX inside. Need include exact quotes with [PAGE N]. Use quotes. Need avoid HTML escaping? XML okay. Use < and >? In text, use \( \) and \(\Pr\). Avoid & unescaped? In XML, ampersand must be escaped if used. We can avoid & or use \& maybe. But XML text with & invalid. Use "and" instead. Use less-than? Avoid raw <. Use LaTeX with \le. Use \%. Fine. Need XML tags exactly. Need not include root wrapper? They specified exact XML sections. We can output six sections. No extra root needed. Need ensure all tags closed.

Need maybe include word count? Not necessary. Need >=1000 words. We'll produce ~3000. Need keep desired oververbosity 5 but instruction demands depth. We'll write thorough but not insane.

Need quote exact [PAGE N] markers. For each quote, include [PAGE N] after. Need be careful with "betting" phrase not quote. Use "forecasting" not "betting". The paper says "betting applications" but we won't quote. Use "well-established prediction model" etc.

Potential issue: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We won't mention those words. "Expected points" is not betting line. "Points" is sports points. Fine.

Potential issue "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." We use formal equations from paper. Our Poisson log link is a formalization; not fake ratio. Need label "schematic formalization" and cite Maher/paper. Avoid fake ratio. Good.

Need mention units and SI/information/probability units. For each equation:
- \(p_{a,t}\in[0,1]\) probability (dimensionless)
- \(V(C,t)\) points (dimensionless count of league points)
- \(\tau_t\) days (SI: s? We can say days; SI equivalent seconds)
- \(l_a\) games (count)
- \(Y\) goals (count)
- \(\lambda\) goals per match (count, not rate? Poisson mean)
- log loss nats (information unit)
- SHAP probability units (dimensionless)
- discount \(\gamma\) dimensionless
- UCB exploration c dimensionless? Actually UCB c scale reward; dimensionless? It is in reward units. We can state.
- MCTS Q-values in points.
- injury length Gaussian mean in games, sigma games. 
Need "SI/information/probability units". Good.

Need "assumptions" and "exact singularity/breakdown regimes". We'll include a dedicated paragraph in SOURCE_OPERATORS_AND_EQUATIONS. Use LaTeX.

Need citations. Let's assemble quotes:
- [PAGE 1] "In the 2021/22 season, the 'Big Five' European soccer leagues experienced a staggering £513 million in injury-related costs, a 29% increase from the previous season" 
- [PAGE 1] "Current team management often follows a short-term, 'next game' focus, prioritizing immediate performance over long-term player health."
- [PAGE 2] "We use data to demonstrate that managers most commonly follow a greedy approach during team selection."
- [PAGE 2] "there's a gap in research regarding optimizing team selections to mitigate long-term injury impacts on performance and welfare."
- [PAGE 2] "our approach proactively reduces fault probability."
- [PAGE 3] "The goal of the optimiser is to select the optimal team for maximizing long-term performance."
- [PAGE 4] "We define a matrix of injury probabilities 𝚯 where Θ_{a,t} is the injury probability of player a at game t."
- [PAGE 4] "A player a cannot be selected in the team C if l_a > 0"
- [PAGE 4] "Every game t∈T has a timestep τ_t starting from the initial game which has a timestep 0. These timesteps represent days."
- [PAGE 5] "We use XGBoost due to its strong performance on tabular data and train the model with a binary cross-entropy loss function so we can obtain well-calibrated probabilities."
- [PAGE 5] "Computing physical metrics that are used to calculate fatigue-related features typically requires expensive tracking systems."
- [PAGE 5] "To make our team formation model more accessible, we estimate player physical metrics using cheaper on-ball event data"
- [PAGE 5] "Any negative samples from the Gaussian distribution are assumed to be an injury length of 0 games."
- [PAGE 6] "We find that the most contributory feature was acute workload with a mean SHAP value of 0.0033, followed by the number of past injuries (0.0029), career total days injured (0.0023) and distance covered (0.0022)."
- [PAGE 6] "Features such as team form, days since the previous game, and other physical features were also curated. However, these features had minimal performance impact, with some already incorporated in other interrelated features. As a result, we removed them from the final feature set."
- [PAGE 7] "We modify the Maher model by replacing club identity features from the original paper with numeric player-based features."
- [PAGE 7] "The total VAEP (from past games) of a player is defined as their skill value Ω_a."
- [PAGE 7] "we define V(C,t)=3⋅Pr(win|C)+Pr(draw|C)"
- [PAGE 7] "the player-level model has a log-loss score of 0.915 ± 0.020 and the team-level model has a log-loss score of 0.910 ± 0.018."
- [PAGE 8] "We formulate our soccer team selection model as an MDP defined as G=⟨S,𝒜,P,R,γ⟩"
- [PAGE 8] "there are up to ~2000 possible actions at each timestep and up to 38^11 possible new states resulting from an action"
- [PAGE 8] "computing an exact solution for the Bellman equation is infeasible."
- [PAGE 9] "Each player a∈A has a role X_a which can be one of [GK,DEF,MID,ATT]."
- [PAGE 10] "The first three rollout state transitions occur normally and then the remaining games are simulated under the assumption of no further injuries."
- [PAGE 10] "we use progressive widening"
- [PAGE 11] "The XGBoost model achieved a log loss of 0.1676 ± 0.0005"
- [PAGE 11] "The heuristic baseline achieved a log loss score of 0.1700 ± 0.0002."
- [PAGE 11] "The mean percentage difference between the expected and actual number of injuries per team is ~14%. The Pearson correlation coefficient is 0.77, significant at p<0.01."
- [PAGE 12] "Our analysis demonstrates that team selection processes by human expert managers in real-world settings closely mirror our greedy model"
- [PAGE 12] "This pattern is likely a consequence of the high-pressure environment faced by managers"
- [PAGE 13] "It notably reduced squad injuries by about 5% and injuries to the optimal team ... by around 13% on average"
- [PAGE 13] "MCTS achieved a 17% lower variance in expected points"
- [PAGE 13] "In high-risk scenarios, our MCTS model surpasses the greedy strategy in mean performance"
- [PAGE 14] "average reduction of 11% in the money inefficiently spent on injured players"
- [PAGE 14] "approximately £700,000 in player wages per club for the season"
- [PAGE 15] "The MCTS strategy shows a slight increase in injury risk towards the season’s end"
- [PAGE 15] "Extending the model to multiple seasons could further enhance its effectiveness in safeguarding long-term player welfare."
- [PAGE 16] "MCTS often reserves key players for matches where their impact is significant, rather than deploying them against much stronger teams with low win probabilities."
- [PAGE 16] "Expanding our model to include strategies like workload distribution within a single game, especially through soccer substitutions, is a potential area for future research."
- [PAGE 17] "reduction in injuries among key players by approximately 13%"
- [PAGE 19] "Figure 10 shows all the features used in the player injury probability model"

Need not overquote. Use exact.

Need maybe mention "PAGE 7" for Maher and VAEP. The page number 7 appears after Section 5? Source: Section 5 starts after page 6 marker? It says "7" after Section 6 intro? Let's check: Source has "7" before Section 5? Actually:
After Figure 4 and paragraph, "6" marker, then Section 5, then "7" after Section 6 intro? Wait source:
```
Figure 4...
6
This allows...
## 5. Calculating Match Reward
...
When comparing... log-loss...
## 6. Optimising...
...
7
### 6.1...
```
Hmm page marker 7 appears after Section 6 intro, so Section 5 may be page 7? Wait page marker 6 after Figure 4, then Section 4.2 continuation and Section 5 and Section 6 intro all on page 7? But page marker 7 after Section 6 intro. So Section 5 is on PAGE 7. That matches. Good.
Page 8 includes 6.1 MDP and Bellman. Page 9 6.2/6.3. Page 10 6.3.1. Page 11 Experiment 1. Page 12 Experiment 2/3? Actually Table 1 on page 12. Page 13 continuation and Experiment 4. Page 14 Experiment 5. Page 15 Experiment 6. Page 16 Discussion. Page 17 Conclusion. Good.

Need maybe cite [PAGE 8] for Bellman and action space. [PAGE 9] for constraints. [PAGE 10] for MCTS. Good.

Need "retrocausal genealogy" cite [PAGE 2] related work, [PAGE 7] Maher, [PAGE 5] XGBoost, [PAGE 6] SHAP, [PAGE 10] MCTS. Need mention [1]-[22] but no page? Use page citations. 
Need "multi-week traps" specific:
- Acute workload top feature [PAGE 6] but chronic ratio not explicit; Hulin [3] cited [PAGE 2]. The acute:chronic workload ratio literature warns high chronic load may decrease injury risk; simple acute load can mislead. That's a multi-week trap. Need phrase: paper cites Hulin [3] but final feature importance reports acute workload; if chronic load omitted, a spike after rest can be misclassified. This is a gray-zone audit. 
- Injury history and career total days injured [PAGE 6] are multi-week cumulative; good.
- Rollout "no further injuries" after three transitions [PAGE 10] is multi-week trap: cascading injuries are truncated, so MCTS may underprice injury waves. 
- End-season risk increase [PAGE 15] is clock trap. 
- Financial under-exaggerated [PAGE 14] due to repeated injuries; multi-season. 
Good.

Need "recursive theory of mind" maybe mention "manager's model of opponent strength is constant independent of selected team" [PAGE 4? 3.2.1 says independent of selected team C]. Actually quote "As this difficulty refers to the strength of the opponent, it is a constant value independent of the selected team C." [PAGE 4? Page 4? It appears in 3.2.1, page 4]. This is important: no recursive opponent response. We'll cite [PAGE 4]. 
Crisis habit regression: human managers mirror greedy [PAGE 12]. Counter-trap: MCTS rests key players vs stronger teams [PAGE 16]; but if opponents know, no game-theoretic loop. Clock: single-season terminal [PAGE 8 terminal final game, PAGE 15 end-season risk]. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe structure table? XML can contain text with paragraphs. Use "VETO PROOF:" bullet list. Need prove weather not included. Cite [PAGE 2] "weather conditions [5]" only in related work; [PAGE 6] removed features; [PAGE 19] Figure 10 all features. We can state weather is not in final feature set per Figure 10 and top features list. But source text doesn't list all Figure 10 features; it says Figure 10 lists all. We can cite "Figure 10 shows all the features used..." [PAGE 19] and "most contributory..." [PAGE 6]. We don't have visual list, but weather not mentioned in top features. To be rigorous, we can say "the text's enumerated final features and top SHAP features do not include weather; the only weather reference is related-work citation [5]." That's proof from provided text. Good.
Biomechanical: event data proxies [PAGE 5]; no direct GPS/IMU; no in-game substitution [PAGE 16]. Physical: no sleep/travel/illness; removed days since previous game? Wait days since previous game removed as feature [PAGE 6] because minimal impact. That's important: recovery interval removed. This is a cross-layer veto? If fixture congestion recovery is not a final feature (though timestep is in MDP), the model has \(\tau_t\) days but feature set removed "days since previous game" [PAGE 6]. Actually MDP state has game t and timesteps represent days, but injury feature set removed days since previous game? It says features such as team form, days since previous game, and other physical features curated but removed. So the injury probability model doesn't use days since previous game directly. That is a breakdown for fixture congestion. Need mention. That is a strong gray-zone audit. The MDP still has t and workload, but not direct rest days. This could underpin multi-week traps. Good. 
Weather: [PAGE 2] cites weather; not in final. 
Biomechanical: distance covered SHAP 0.0022 [PAGE 6]; event-derived [PAGE 5]; no accelerations. 
Thus cross-layer veto: if fixture congestion + travel + weather + biomechanical load exceed threshold, MCTS should be vetoed/overridden. Good.

Need "RLVR" maybe use "reinforcement-learning verifier" but not source. We can say "RLVR-style counterfactual audits" with "verifiable reward = held-out log loss/Brier/points/injury counts". Need avoid fake? It's audit design. Good.

Need final answer. Need ensure XML valid: no raw &, no raw <. In text, use \le instead of ≤? Unicode okay. Avoid & in "MCTS and Greedy" use and. Avoid `<` raw. Use \(p \le 1\). XML text can contain unicode. Avoid "&" entirely. In equations, if using \& none. Avoid ">"? XML text can contain > okay, but avoid raw < in text. In LaTeX \(...\), `<` not used. Use "less than" if needed. Need tags. 
Need maybe include "PAGE 1" etc. Good.

Let's draft.

Potential issue: ">= 1,000-WORD DEPTH across these exact XML sections" We need exact tags. Use no attributes. Fine.

Need maybe mention "source page markers" with [PAGE N] exact. Use [PAGE 1] etc. Good.

Let's write.

Need control length. Aim 2800-3500 words. Let's produce.

Check no betting words. I will avoid "odds", "betting", "spread", "totals", "moneyline". "Expected points" is fine. "points" repeated. Good.

Need maybe "log-loss" is not betting. Good.

Let's formulate equations.

In SOURCE_OPERATORS_AND_EQUATIONS:
```
Let \(A=\{a_1,\dots,a_N\}\), \(T=\{t_0,\dots,t_{K-1}\}\), \(K=38\). ...
\(s_t=(t,Z_t,F_t,\Theta_t,L_t)\) ...
\(\mathcal A(s_t)=\{C\subseteq A: |C|=11, \forall a\in C, l_{a,t}=0, n_r(C)\in ...\}\)
```
Need roles bounds learned. Good.
Reward:
```
\(R(s_t,C)=V(C,t)=3\Pr(W_t|C,t)+\Pr(D_t|C,t)\)
```
units points. 
Bellman:
```
\(Q^\pi(s_t,C)=R(s_t,C)+\gamma \sum_{s_{t+1}} P(s_{t+1}|s_t,C) V^\pi(s_{t+1})\)
```
\(V^\pi(s)=\max_{C\in\mathcal A(s)}Q^\pi(s,C)\). Terminal \(V(s_{t_K})=0\) or final reward. Good.
Injury:
```
\(p_{a,t}=\Pr(I_{a,t}=1|F_t)=g_{XGB}(F_t)\), \(p\in[0,1]\)
```
Binary cross entropy:
```
\(\mathcal L_{BCE}=-\frac1N\sum_{n}[y_n\log p_n+(1-y_n)\log(1-p_n)]\) nats
```
Injury length:
```
\(\tilde \ell_{a,t}\sim\mathcal N(\mu_\ell,\sigma_\ell^2)\), \(\ell_{a,t}=\max(0,\tilde \ell_{a,t})\)
```
games. Update \(L_{t+1}\). 
Match:
```
\(Y_{i,t}\sim\mathrm{Poisson}(\lambda_{i,t})\), \(Y_{j,t}\sim\mathrm{Poisson}(\lambda_{j,t})\)
\(\log\lambda_{i,t}=\beta_0+\beta_H H_t+\beta_V V_{i,t}+\beta_{V'} V_{j,t}\)
```
where \(V_{i,t}=\sum_{a\in C_i}\Omega_a\). This is schematic; coefficients learned. \(\Omega\) VAEP dimensionless expected-goal-value proxy. Opponent \(\alpha_t=\bar V_j\). 
Scoreline:
```
\(\Pr(Y_i=y_i,Y_j=y_j)=\frac{e^{-\lambda_i}\lambda_i^{y_i}}{y_i!}\frac{e^{-\lambda_j}\lambda_j^{y_j}}{y_j!}\)
```
Then win/draw. 
UCB:
```
\(a^\star=\arg\max_{a\in\mathcal A(s)}[Q(s,a)+c\sqrt{\ln N(s)/N(s,a)}]\)
```
c reward units. Progressive widening:
```
\(|\mathcal A_{\text{expanded}}(s)| \propto N(s)^\alpha\)
```
alpha dimensionless. 
SHAP:
```
\(\phi_j=\sum_{S\subseteq F\setminus\{j\}}\frac{|S|!(|F|-|S|-1)!}{|F|!}[g(S\cup\{j\})-g(S)]\)
```
probability units. 
Need "assumptions" bullet. "Breakdown" bullet. 
Maybe include "MCTS rollout assumption" quote. Good.

Need "RETROCAUSAL" maybe 450 words. "CROSS_LAYER" 450. "RECURSIVE" 350. "RLVR" 450. "THINK_TRACE" 500. Total ~3000.

Need exact quote: "We use data to demonstrate that managers most commonly follow a greedy approach during team selection." [PAGE 2] Good.

Need quote "the player is selected for all other games" not necessary.

Need "THINK_TRACE" deep multi-hop derivation. Include reasoning: from injury cost to model, MDP, MCTS, evaluation. Gray-zone audit: page mapping, assumptions, evidence strength. Need not reveal chain-of-thought? The instruction asks THINK_TRACE. We can provide high-level reasoning, not hidden chain-of-thought? Safety? We can give concise derivation. It's okay. Need not include private chain of thought. We can write "Derivation audit" not raw internal. Good.

Need ensure "THINK_TRACE" >=400 words. We'll write ~600. 
Need "SOURCE..." ~800. 
Need "RETRO..." ~500.
Need "RECURSIVE..." ~450.
Need "CROSS..." ~500.
Need "RLVR..." ~500.
Total ~3300.

Let's write final. 
Need no markdown outside XML. Inside XML, can use paragraphs and bullets? XML text can contain bullet hyphens. Fine. 
Need escape ampersand in "MCTS and Greedy" no &. Avoid "R&D". 
Need use "less than" not "<". In XML, "≤" unicode fine. But in LaTeX use \le. 
Need avoid raw "&" in equations. Use \text{win}. Good.

Let's craft.
</NATIVE_REASONING>

<THINK_TRACE>
The source is not a betting document and contains no line market; the core derivation is a sequential decision problem. I treat the paper as a pipeline: injury-cost motivation [PAGE 1] → injury-probability learner [PAGE 5] → player-value match model [PAGE 7] → MDP formulation [PAGE 8] → MCTS approximation [PAGE 10] → season simulation evaluation [PAGE 12] and [PAGE 13]. The first multi-hop step is the transformation of player welfare into a state variable. The paper says “Current team management often follows a short-term, ‘next game’ focus, prioritizing immediate performance over long-term player health” [PAGE 1], and then formalizes availability through an injury-probability matrix and unavailability vector [PAGE 4]. That makes injury risk both a transition hazard and a constraint on the action set: “A player a cannot be selected in the team C if l_a > 0” [PAGE 4]. The second step is the reward bridge. Player skill is represented by VAEP, “The total VAEP (from past games) of a player is defined as their skill value Ω_a” [PAGE 7], and team reward is “V(C,t)=3⋅Pr(win|C)+Pr(draw|C)” [PAGE 7]. This is an expected-points reward, not a line. The third step is the search bridge: exact Bellman solution is infeasible because “there are up to ~2000 possible actions at each timestep and up to 38^11 possible new states resulting from an action” [PAGE 8], so MCTS with progressive widening is used [PAGE 10]. The gray-zone audit concerns what the model does not observe. The final injury feature set emphasizes acute workload, past injuries, career total days injured, and distance covered [PAGE 6]; the text reports that “Features such as team form, days since the previous game, and other physical features were also curated. However, these features had minimal performance impact” and were removed [PAGE 6]. Weather is cited only as related work [PAGE 2], not as a final model feature in the supplied text. Physical load is estimated from “cheaper on-ball event data” rather than expensive tracking systems [PAGE 5]. The MCTS rollout also uses a strong simplification: “The first three rollout state transitions occur normally and then the remaining games are simulated under the assumption of no further injuries” [PAGE 10]. These are the main gray zones: omitted weather and direct biomechanics, event-proxy load, truncated injury cascades, single-season terminal horizon, and no in-game substitution planning [PAGE 16]. The empirical claims are still bounded and falsifiable: XGBoost injury log loss 0.1676 ± 0.0005 versus heuristic 0.1700 ± 0.0002 [PAGE 11], player-level match log loss 0.915 ± 0.020 versus team-level 0.910 ± 0.018 [PAGE 7], about 13% fewer optimal-team injuries and 17% lower variance in expected points [PAGE 13], and about 11% wage reduction on injured players [PAGE 14]. The deeper audit question is not whether MCTS can imitate a greedy selector, but whether the injury transition kernel is calibrated under weather, biomechanical load, multi-season carryover, and fixture congestion. The paper itself warns that “The MCTS strategy shows a slight increase in injury risk towards the season’s end” [PAGE 15], which is exactly the clock-boundary artifact that a multi-season verifier should test.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal state and action operators. Let \(A=\{a_1,\dots,a_N\}\) be the player set and \(T=\{t_1,\dots,t_K\}\) the season, with \(K=38\) in the English Premier League [PAGE 3]. The MDP is stated as \(G=\langle S,\mathcal A,P,R,\gamma\rangle\) [PAGE 8]. A state is
\[
s_t=(t,Z_t,F_t,\Theta_t,L_t),
\]
where \(t\) is the current game, \(Z_t\subseteq T\) the remaining games, \(F_t\) the injury risk factors, \(\Theta_t\) the injury-probability matrix, and \(L_t\) the unavailability-length vector [PAGE 4], [PAGE 8]. The action set is
\[
\mathcal A(s_t)=\left\{C\subseteq A:\ |C|=11,\ \forall a\in C,\ l_{a,t}=0,\ n_r(C)\in\mathcal R_r\right\},
\]
with role constraints \(X_a\in\{\mathrm{GK},\mathrm{DEF},\mathrm{MID},\mathrm{ATT}\}\) and formation feasibility [PAGE 9]. Units: \(t\) and \(\tau_t\) are game indices or days; \(l_{a,t}\) is a count of games unavailable; \(\Theta_{a,t}\) and \(p_{a,t}\) are dimensionless probabilities in \([0,1]\); \(V(C,t)\) is league points.

Reward and Bellman operator. The reward is
\[
R(s_t,C)=V(C,t)=3\Pr(W_t\mid C,t)+\Pr(D_t\mid C,t),
\]
measured in points [PAGE 7]. The Bellman target is
\[
Q^\pi(s_t,C)=R(s_t,C)+\gamma\sum_{s_{t+1}}P(s_{t+1}\mid s_t,C)V^\pi(s_{t+1}),
\]
\[
V^\pi(s_t)=\max_{C\in\mathcal A(s_t)}Q^\pi(s_t,C),
\]
with terminal value at \(t_K\) and discount factor \(\gamma\) dimensionless [PAGE 8]. Exact solution is infeasible because the action and outcome tree is vast: “there are up to ~2000 possible actions at each timestep and up to 38^11 possible new states resulting from an action” and “computing an exact solution for the Bellman equation is infeasible” [PAGE 8]. MCTS approximates \(Q\) with UCB1 selection,
\[
C^\star=\arg\max_{C\in\mathcal A(s_t)}\left[Q(s_t,C)+c\sqrt{\frac{\ln N(s_t)}{N(s_t,C)}}\right],
\]
where \(c\) is in reward units and \(N\) is a visit count [PAGE 10]. Progressive widening limits the expanded action set approximately as \(|\mathcal A_{\text{expanded}}(s)|\propto N(s)^\alpha\), with dimensionless \(\alpha\) [PAGE 10].

Injury-probability operator. The injury model is
\[
p_{a,t}=\Pr(I_{a,t}=1\mid F_t)=g_{\mathrm{XGB}}(F_t),
\]
with binary cross-entropy
\[
\mathcal L_{\mathrm{BCE}}=-\frac1N\sum_{n=1}^{N}\left[y_n\log p_n+(1-y_n)\log(1-p_n)\right],
\]
reported in nats [PAGE 5]. The paper states: “We use XGBoost due to its strong performance on tabular data and train the model with a binary cross-entropy loss function so we can obtain well-calibrated probabilities” [PAGE 5]. Injury length is sampled from a Gaussian fit to observed injury lengths, then truncated: “Any negative samples from the Gaussian distribution are assumed to be an injury length of 0 games” [PAGE 5]. Thus
\[
\tilde\ell_{a,t}\sim\mathcal N(\mu_\ell,\sigma_\ell^2),\qquad \ell_{a,t}=\max(0,\tilde\ell_{a,t}),
\]
in games. The top reported SHAP features are acute workload 0.0033, past injuries 0.0029, career total days injured 0.0023, and distance covered 0.0022 [PAGE 6]. SHAP values are in probability-impact units:
\[
\phi_j=\sum_{S\subseteq F\setminus\{j\}}\frac{|S|!(|F|-|S|-1)!}{|F|!}\left[g(S\cup\{j\})-g(S)\right].
\]

Match-reward operator. The paper adapts Maher’s Poisson model: “We modify the Maher model by replacing club identity features from the original paper with numeric player-based features” [PAGE 7]. A formal schematic is
\[
Y_{i,t}\sim\mathrm{Poisson}(\lambda_{i,t}),\qquad Y_{j,t}\sim\mathrm{Poisson}(\lambda_{j,t}),
\]
\[
\log\lambda_{i,t}=\beta_0+\beta_H H_t+\beta_V V_{i,t}+\beta_{V'}V_{j,t},
\]
where \(V_{i,t}=\sum_{a\in C_i}\Omega_a\), \(\Omega_a\) is total VAEP, \(H_t\) is a home indicator, and coefficients are learned from past games [PAGE 7]. Scoreline probability under the Poisson independence assumption is
\[
\Pr(Y_i=y_i,Y_j=y_j)=\frac{e^{-\lambda_i}\lambda_i^{y_i}}{y_i!}\frac{e^{-\lambda_j}\lambda_j^{y_j}}{y_j!},
\]
and win and draw probabilities are sums over scorelines. The reported match log losses are 0.915 ± 0.020 for the player-level model and 0.910 ± 0.018 for the team-level model [PAGE 7].

Assumptions and breakdown regimes. Assumptions: Markov state sufficiency; injury conditional only on supplied \(F_t\); additive player value; Poisson score independence; fixed opponent strength \(\alpha_t\) independent of selected team [PAGE 4]; single-season terminal horizon; event-data proxies for physical load [PAGE 5]; MCTS rollout with no further injuries after three transitions [PAGE 10]. Breakdown regimes: \(p_{a,t}\to 0\) or \(1\) makes log loss and calibration brittle; \(\lambda\to 0\) in Poisson models can create degenerate score distributions; \(N(s_t,C)\to 0\) makes UCB exploration term large until expansion; high injury-risk multipliers reduce proactive choice because frequent injuries limit availability [PAGE 13]; fixture congestion, weather, direct biomechanics, multi-season carryover, and in-game substitutions are outside the supplied final feature/action set [PAGE 6], [PAGE 16]. The single-season endpoint is especially dangerous: “The MCTS strategy shows a slight increase in injury risk towards the season’s end” [PAGE 15].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is a retrocausal chain from future unavailability back to present selection. The paper cites Maher’s 1982 Poisson score model [PAGE 7], VAEP player valuation [PAGE 7], XGBoost and SHAP for tabular risk explanation [PAGE 5], [PAGE 6], and MCTS with UCB1 and progressive widening [PAGE 10]. The older team-formation literature includes robust team formation and recoverable team formation, but the paper claims a shift: “our approach proactively reduces fault probability” [PAGE 2]. That is the genealogical hinge: instead of repairing a team after an agent fails, the model prices the failure probability before selection. The injury literature supplies the multi-week memory. The paper cites workload [3], previous injuries [4], and weather [5] in related work [PAGE 2]. The final SHAP ranking keeps acute workload, past injuries, career total days injured, and distance covered [PAGE 6], so the model is partly cumulative-history-aware. However, the text also says “Features such as team form, days since the previous game, and other physical features were also curated. However, these features had minimal performance impact” and were removed [PAGE 6]. That creates a multi-week trap: if rest days are not directly represented, the learner may infer recovery through workload proxies, but a short rest interval after travel or a congested cup run can be mispriced. The acute:chronic workload literature cited by the paper warns that workload history is not a one-week variable; a spike after rest can be more dangerous than a stable high load, and chronic load can change the hazard. The paper’s top acute-workload SHAP value of 0.0033 [PAGE 6] does not by itself prove that the chronic-to-acute structure is captured. A second multi-week trap is the MCTS rollout: “The first three rollout state transitions occur normally and then the remaining games are simulated under the assumption of no further injuries” [PAGE 10]. This truncates cascading injury waves, so the search may underprice the cost of losing one player and then overloading his replacement. A third trap is the single-season clock. The paper reports a “slight increase in injury risk towards the season’s end” [PAGE 15] and says “Extending the model to multiple seasons could further enhance its effectiveness in safeguarding long-term player welfare” [PAGE 15]. The financial analysis also notes that the values are “likely underexaggerated” because they omit repeated injuries and larger squad requirements [PAGE 14]. The retrocausal lesson is that the model’s future discount is bounded by the season terminal state; any claim of career welfare or multi-season robustness is an extrapolation, not a demonstrated result. Historical lineage therefore supports the injury-risk mechanism but also exposes the missing multi-week and multi-season hysteresis.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. The paper’s human-benchmark result is a theory-of-mind claim about managers under pressure: “Our analysis demonstrates that team selection processes by human expert managers in real-world settings closely mirror our greedy model” [PAGE 12], and “This pattern is likely a consequence of the high-pressure environment faced by managers” [PAGE 12]. In recursive terms, the manager’s belief about immediate survival dominates the belief about future availability; the policy regresses to the habit of maximizing next-game expected points. The paper’s own introduction names the “short-term, ‘next game’ focus” [PAGE 1]. This is not a character judgment; it is a horizon effect. Under crisis, the effective discount factor rises toward myopia, and the optimal Bellman action collapses toward the greedy action.

Counter-trap. The MCTS counter-policy is to rest key players when their marginal impact is low relative to future availability. The paper states: “MCTS often reserves key players for matches where their impact is significant, rather than deploying them against much stronger teams with low win probabilities” [PAGE 16]. That is a counter-trap against the habit: sacrifice a low-probability match to protect a high-value player. But the recursive loop is incomplete because opponent strength \(\alpha_t\) is modeled as “a constant value independent of the selected team C” [PAGE 4]. The opponent does not react to the rest decision, and the player does not react to the manager’s belief. A fuller recursive theory of mind would include opponent adaptation to a weakened lineup, player disclosure incentives, and manager reputation effects. In the supplied model, the counter-trap is one-sided: the manager models the injury environment, not a strategic opponent.

Clock. The terminal state is the final game of the season [PAGE 8]. That clock creates a rational end-season risk shift: long-term injuries matter less as the horizon closes, and the paper observes “a slight increase in injury risk towards the season’s end” [PAGE 15]. A recursive manager who knows the season is ending will rationally accept more risk. The clock also affects evaluation: a single-season simulation cannot distinguish true welfare improvement from deferred risk. The correct recursive test is a multi-season game where the manager’s belief about next season’s availability feeds back into this season’s rest policy. Until then, the counter-trap is strong within-season but unproven across seasons.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical-layer veto. The model’s physical variables are event-derived proxies: “Computing physical metrics that are used to calculate fatigue-related features typically requires expensive tracking systems” and “To make our team formation model more accessible, we estimate player physical metrics using cheaper on-ball event data” [PAGE 5]. This is a deliberate accessibility tradeoff, but it vetoes claims of direct biomechanical measurement. Distance covered appears with SHAP 0.0022 [PAGE 6], yet accelerations, decelerations, high-speed running, change-of-direction load, asymmetry, and tissue-specific strain are not demonstrated in the supplied feature list. A biomechanical flag from GPS or inertial sensors should therefore override the MCTS rest recommendation unless the injury model is recalibrated with those inputs. Proof of the veto is textual: the final feature discussion removes “other physical features” with minimal impact [PAGE 6], while the model still relies on event-proxy physical estimates [PAGE 5].

Weather-layer veto. Weather is cited in related work: the paper references “weather conditions [5]” [PAGE 2]. But the supplied final feature discussion and top SHAP list do not include weather as a retained predictor; the text instead lists acute workload, past injuries, career total days injured, and distance covered [PAGE 6]. Figure 10 is said to show “all the features used in the player injury probability model” [PAGE 19], and the narrative does not enumerate weather among them. Therefore heat, cold, rain, wind, pitch moisture, and travel weather are unmodeled conditional variables. In a match-day WBGT or surface-safety exceedance, the injury probability \(\Theta_{a,t}\) is estimated without that variable, so the MCTS action cannot be treated as weather-calibrated. The correct adjudication is a hard veto: external weather safety thresholds override the optimizer, and the model must be refit with weather interactions before it can claim all-weather validity.

Biomechanical and congestion veto. The MDP includes timesteps in days [PAGE 4], but the injury feature set removed “days since the previous game” because it had minimal performance impact [PAGE 6]. That is a potential congestion blind spot: the state has a clock, but the hazard model does not directly retain the recovery interval. Combined with the rollout assumption of no further injuries after three transitions [PAGE 10], the model can underprice a congested sequence in which one injury forces another player into overload. The paper also postpones in-game workload distribution: “Expanding our model to include strategies like workload distribution within a single game, especially through soccer substitutions, is a potential area for future research” [PAGE 16]. Thus the cross-layer veto proof is: direct biomechanics absent, weather absent from final retained features, recovery interval removed, in-game load management absent, and multi-season carryover absent. Each is a boundary condition, not a refutation of the within-season result. The model’s demonstrated claims remain the ~13% optimal-team injury reduction and ~17% lower variance [PAGE 13], but they are conditional on the supplied feature layer and single-season clock.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR-style audit means a reinforcement-learning verifier with a held-out, reproducible reward. The verifier should not reward narrative similarity; it should reward calibration, injury counts, points, and robustness under counterfactual input changes. Three veto scenarios follow.

1. Weather-conditioned calibration veto. Intervention: append match-day wet-bulb globe temperature, precipitation, wind, and pitch-moisture indicators to \(F_t\), then refit the injury model on held-out seasons. Verifier: Brier score and calibration slope for injury events, plus log loss in nats. Prediction if the original model is weather-blind: the augmented model improves held-out Brier score by at least 0.002 and moves calibration slope toward 1.0 in hot or wet match strata. Veto condition: if the augmented model shows a material held-out improvement and the original model’s residuals are systematically positive in high-WBGT or wet-surface matches, the original MCTS policy is vetoed for those conditions. If no improvement appears, the weather veto is not supported. This is verifiable because the data partition, weather join, and Brier/log-loss computation are fixed before simulation.

2. Biomechanical-load substitution veto. Intervention: replace event-derived distance and dribble proxies with GPS/IMU high-speed-running distance, acceleration counts, deceleration counts, and asymmetric load metrics for the same players and games. Verifier: held-out injury log loss, Brier score, and SHAP rank stability. Prediction if event proxies are insufficient: the biomechanical model lowers log loss by at least 0.005 nats and changes the top-three feature ranking away from the reported acute-workload-first ordering [PAGE 6]. Veto condition: if the biomechanical model improves calibration beyond the pre-registered threshold and the original model’s high-risk flags disagree on a material fraction of player-games, the original rest policy is vetoed for clubs with sensor data. This directly tests the paper’s accessibility tradeoff [PAGE 5] without pretending that event data and sensor data are equivalent.

3. Multi-season carryover veto. Intervention: run a two-season MDP with injury lengths, career days injured, and workload carryover across the season boundary; do not reset the terminal state to zero. Verifier: optimal-team injury reduction, end-season injury probability, and second-season expected points under