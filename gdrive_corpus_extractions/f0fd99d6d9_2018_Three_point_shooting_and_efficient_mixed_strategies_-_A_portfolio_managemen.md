---
source: "2018 Three point shooting and efficient mixed strategies - A portfolio management approach - Mark Fichman and John O’Brien.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 14
model: deepseek/deepseek-v4.1-flash-1017
words: 9622
---

<NATIVE_REASONING>
We need answer request. User gives source text pages. We need produce analysis according to GSE+GSI Frontier Reasoning Foundry strict XML sections. Need no betting lines; no odds spreads totals moneylines. Need >=1000 words total, exact XML sections. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need formal LaTeX equations units, assumptions, singularity/breakdown regimes. Need deep multi-hop derivation, gray-zone audit >=400 words in THINK_TRACE. Need source operators/equations with page citations, breakdown. Retro causal genealogy historical/scientific lineage and multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes: 3 verifiable RLVR veto scenarios + predictions. Need likely no specific DRIVE source context? They ask "DRIVE SOURCE:" with paper only. We need analyze paper. It's sports analytics, no actual matchup. We need maybe produce "research derivation" not betting. Need not mention betting lines. We can discuss shot mix, risk, SML, Sharpe. Need be rigorous.

Need decide structure. We need include at least 1000 words across sections, likely much more. Need exact XML tags. Need formal LaTeX. Need page citations and verbatim quotes. Need cite exact [PAGE N] markers. Need mention source pages. We should quote exact phrases from source. Need ensure quotes verbatim. Let's collect relevant quotes and equations.

Need not use "odds". We can mention "no wagering lines" maybe not. Avoid all betting terms. We can say no line. Better not mention "betting lines" at all maybe.

Need parse paper. Key equations:
Sharpe Ratio SR = μ/σ. Maximize w.r.t. ω: μ/σ subject to ∑_j ω_j=1, ω_j ≥0. Page 5. Expected points μ = s^T ω^T \bar p = 2 α2 p2 + 3 α3 p3. Page 5. Volatility σ = sqrt(ω^T Σ ω), with formula σ = sqrt(4 α2^2 σ2^2 + 9 α3^2 σ3^2 + 12 α2 α3 r σ2 σ3). Wait text: "σ = sqrt(4α2^2σ2^2 + 9α3^2σ3^2 + 12α2α3rσ2σ3)^0.5" but the second and third terms: σ2, σ3 not squared? Text says "where 4 equals 2 points squared, 9 equals 3-points squared and 12 is 2*2*3 to cover the off diagonal terms." Actually if covariance = r σ2 σ3, variance terms are 4 α2^2 σ2^2 + 9 α3^2 σ3^2 + 2*2*3 α2 α3 r σ2 σ3 = 12... yes. The OCR might show "9α2_3σ2_3" ambiguous. We can present exact formal. Need note variance p = p(1-p)/n, normal via CLT. They say "variance of p is normally distributed and equal to p*(1-p)/n." Actually variance of p-hat = p(1-p)/n. They note not Bernoulli parameter. Correlation r computed across teams. Covariance = r σ2 σ3. In formula text uses rσ2σ3. Need correct.

SML: E(ρ_j)=β_j E(ρ_M). Beta = Cov(shot type payoff, optimal mixed strategy payoff)/Var(optimal mixed strategy payoff). Also equivalently ratio of average payoffs relative to EMS. Page 6.

Defensive SR preference: smaller defensive SR preferred. SML slope offensive steeper better; defensive slope? They say defensive SML defined in points given up; lower? Actually in Table 1 defense SML coefficients negative for winning percentage? Wait Table 1: Offense SML positive, Defense SML negative. It says "smaller SR implies expected points per unit risk lower for team playing against defense" and "steeper rays dominate flatter rays. The opposite applies to defensive SML as it is defined in terms of points given up." Need carefully derive.

Important: source says "For offense a larger SR is preferred ... The opposite applies to the defensive SR, because a smaller SR implies that the expected points per unit of risk is lower for the team playing against the defense." Page 4. In Table 1 defense SML negative coefficient predicting win%; because good defense maybe smaller defensive SML slope? Wait in example Miami defensive SML=0.91 vs Orlando 0.96. Miami best, lower defensive SML. Also higher defensive SR? Miami defensive SR=13.79 vs Orlando 13.54; Wait they say "A high offensive (low defensive) SR is preferred to a low offensive (high defensive) SR." Miami defensive SR=13.79, Orlando=13.54. If low defensive preferred, Orlando lower 13.54 better than Miami? Contradiction? Let's re-read: "A high offensive (low defensive) SR is preferred to a low offensive (high defensive) SR because offensive SR measures expected points per unit risk and defensive SR measures expected points given up per unit risk." Then Miami vs Orlando: Miami higher offensive SR than Orlando. "As a result, Miami will have a higher expected points per unit of risk than Orlando in its efficient mixed strategy." They don't discuss defensive SR explicitly in example? Actually Miami defensive SR 13.79 > Orlando 13.54, if low defensive preferred then Orlando better, but Miami best. But Table 1 defense Sharpe ratio not significant. Maybe defensive SR is expected points given up per unit risk, so low is good; but Miami's defensive SR higher maybe because risk lower? Hmm. Need present as source states and note gray zone/possible ambiguity. Table 2 road defense Sharpe ratio negative coefficient for home winning? Let's inspect Table 2: Home Team winning: Road Team defense Sharpe ratio -0.256**, SML 14.616***. Home Team defense Sharpe ratio -0.065, SML -11.167**. That suggests higher opponent defensive SR reduces home win? Wait "Road Team defense" if opponent defense has higher SR, less home win. If defensive SR is points given up per unit risk, lower better for defense. So higher road defensive SR means worse defense, should increase home win, but coefficient negative? Hmm maybe sign interpretation tricky. Need avoid overclaim. Need use source's statements and note gray-zone audit: defensive SR sign interpretation in source is not fully consistent? Let's inspect.

Page 4: "For offense a larger SR is preferred to smaller ... The opposite applies to the defensive SR, because a smaller SR implies that the expected points per unit of risk is lower for the team playing against the defense." So for defense, smaller SR is better? Wait "expected points per unit of risk is lower for the team playing against the defense" = defensive SR is opponent's expected points per unit risk? If smaller, opponent lower, good. So low defensive SR better. But Table 1 defense SML coefficient negative and defensive SR not significant. Example Miami defensive SR 13.79 vs Orlando 13.54: if low better, Orlando slightly better. But Miami won. Could be other factors. The paper says "Miami compared to Orlando reinforces these insights" but not specifically SR. Fine.

Need cross-layer veto: physical/biomechanical/weather. For basketball 3-point shooting: biomechanical constraints (force-velocity, release angle, arc, fatigue), weather not applicable indoor, but travel/altitude? We need "veto proof" maybe use physical constraints that could veto modeled shot mix. We need not have actual game. We can enumerate veto layers: biomechanical accuracy variance, fatigue and repeated high-effort jumpers, rule geometry (22 ft corner vs 23'9"), indoor environment. Weather veto: indoor NBA controlled, but travel/altitude? Weather not direct; if outdoor/arena HVAC? We can state no weather input in model; weather cannot veto except venue/air conditioning? Need tie to source: source notes line distances and rule changes [PAGE 5]. Physical veto proof: shot variance p(1-p)/n and covariance constraints; if p2,p3 at boundaries, σ→0, SR undefined/infinite, singular. If r=±1 perfect correlation, portfolio volatility can zero for certain weights, SR singular. If p=0 or p=1, variance zero. Need assumptions: risk-averse mean-variance utility, no transaction costs? shots limited, independence of attempts? CLT. Break down regimes: n small, p near 0/1, r=±1, σ=0, nonstationary rule changes, team heterogeneity.

Need retrocausal genealogy: history from 1954 shot clock [PAGE 1], 1979 3-point line [PAGE 1], 1994-97 line shortening [PAGE 4/5], MPT Markowitz 1952, Sharpe 1964, CAPM Bodie et al. 2013, Oliver 2004. Multi-week traps: learning curve over weeks/seasons; rule change lag; variance changes not immediate; correlation across teams; selection bias; overfitting; in-season vs postseason sample; "The change was not instantaneous because time is required to adjust tactics, personnel and training" [PAGE 1]. Need "multi-week traps" maybe adaptation periods: after rule changes, behavior doesn't adjust instantaneously; 3-point shooting took decades; 1994 line change immediate? Paper says teams immediately started shooting more [PAGE 4]; but shot clock took 5 seasons [PAGE 1]. Multi-week trap: treating current p as stable during lineup changes, injuries, fatigue, playoffs; correlation estimated across 22-30 teams only annual, not weekly. We can propose rolling estimates with regularization and veto if nonstationary.

Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need interpret in sports strategy: crisis habit regression = team reverts to inefficient 2-point heavy or 3-point jacking under pressure; counter-trap = opponent anticipates and adjusts defense (protect paint/crowd line) [PAGE 3]; clock = shot clock/game clock constraints, late-game risk aversion. Need recursive: coach models opponent's model of coach's mix; if opponent expects regression to 2s, they pack paint; counter-trap is to maintain efficient mix or use counter-actions. Clock: late-clock low-variance 2? Need tie to paper: "NBA coaches have 82 games and over 6000 shot attempts" [PAGE 13], "high stakes reveal risk aversion" [PAGE 3]. Need maybe no gambling.

Need RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. RLVR = reinforcement learning from verifiable rewards? Need design counterfactual tests that would veto model. Scenarios:
1. Recompute SR optimal mix under r=0 vs estimated r; if predicted proportion not sensitive but actual diverges, veto covariance mechanism. Prediction: if r negative, optimal 3P share higher for given μ/σ? Need derive. Need formal.
2. Rule change to 22 ft: if σ3 decreases and μ3 increases, optimal α3 increases. Veto if α3 does not increase given sufficient post-change sample. Source says teams immediately shot more [PAGE 4]. Prediction with future line change.
3. Playoff SML slope predictive: if out-of-sample playoff games, offensive SML positive and defensive SML negative for winning? Source Table 2: Home offense SML 11.268***; Road offense SML -7.972**; Home defense SML -11.167**; Road defense SML 14.616***. Need interpret. Prediction: higher home offensive SML increases home win; higher road defensive SML increases home win? Wait road defense SML coefficient +14.616 for home winning: higher road defensive SML (points given up per risk? worse? maybe higher defensive SML = worse defense) increases home win. Home defense SML -11.167: higher home defensive SML decreases home win. So for defense, higher SML is bad. Thus good defense has lower defensive SML. In example Miami defensive SML 0.91 < Orlando 0.96, good. Okay. Defensive SR? Table 2 road defense Sharpe ratio -0.256: higher road defensive SR decreases home win; if higher defensive SR = better defense? Wait road defense better should decrease home win, so higher road defensive SR is better for road defense? But page 4 said low defensive SR preferred. Hmm maybe defensive SR is expected points given up per unit risk; higher? Let's infer: Table 2 road defense Sharpe ratio negative: if road team defense SR higher, home team less likely to win. That implies higher road defensive SR is better defense. Table 1 defense SR not significant. Page 4 statement contradictory? Let's examine: Maybe "The opposite applies to the defensive SR, because a smaller SR implies that the expected points per unit of risk is lower for the team playing against the defense." Wait if defensive SR = expected points given up per unit risk by defense? Smaller means defense gives up fewer points per risk, good. Then higher road defensive SR = worse road defense, should increase home win. But Table 2 negative. Unless coefficient is for road team's offensive? No table labels: Road Team defense Sharpe ratio -0.256**. Hmm.

Could be because defensive SR is not simply "good"; maybe risk matters: lower SR can mean lower expected points but also lower risk? Let's not dwell. In final, cite source's directional statements and table signs cautiously. Need avoid asserting inconsistent sign. We can state "the paper's stated preference for a lower defensive SR [PAGE 4] coexists with example and table signs that require careful coding; any deployment must pre-register sign conventions." This is a gray-zone audit. Good.

Need include exact quotes. Need ensure quotes are verbatim. Let's list quotes:
- [PAGE 1] "there has been an increasing trend for the percentage of 3-point shots used by teams in the NBA, increasing from virtually none (3.05 % to be precise) in the 1979-80 season when the shot was introduced in the NBA to 28.4 % in the 2015-16 season"
- [PAGE 1] "The change was not instantaneous because time is required to adjust tactics, personnel and training of basketball players to the shot clock."
- [PAGE 2] "if only expected points from a shot type matter then we would observe 100% 3-point shots since 1987, which obviously did not happen."
- [PAGE 3] "Suppose the coach chooses just to shoot 3-point shots? Then the defense adapts to that by crowding the 3-point line and making those shots as difficult as possible."
- [PAGE 4] "maximizing the Sharpe Ratio (SR), which is defined here as the expected points divided by the volatility of points."
- [PAGE 4] "For offense a larger SR is preferred to smaller because this implies that the expected points per unit of risk is higher. The opposite applies to the defensive SR, because a smaller SR implies that the expected points per unit of risk is lower for the team playing against the defense."
- [PAGE 5] "In 1994, the NBA moved the 3-point line closer to the basket (uniformly 22 ft. instead of 23 ft. 9 in.). As a result, the risk (i.e., variance) from taking 3-point shots was reduced, and expected points increased."
- [PAGE 5] "The variance of p is normally distributed and equal to p*(1-p)/n." Actually page 5 says "the variance of p is normally distributed and equal to p*(1-p)/n." Weird. Quote exact.
- [PAGE 6] "E(ρj)=βjE(ρM)" maybe.
- [PAGE 6] "Shot type betas are estimated in two equivalent ways, relative to each team’s efficient mixed strategy."
- [PAGE 8] "NBA coaches have exhibited highly efficient 2- and 3-point shot selection strategies."
- [PAGE 10] "the four SML slope coefficients (offensive, defensive, home and away) are all highly significant (p < 0.01)."
- [PAGE 13] "NBA teams seem to manage risk very efficiently relative to the objective function used in this paper."
Need cite page markers exactly.

Need structure:
<THINK_TRACE> >=400 words. Deep multi-hop derivation and gray-zone audit. We need include derivation: define p2,p3, α2, α3=1-α2. μ=2 α p2 + 3(1-α) p3. σ^2=4 α^2 σ2^2 + 9(1-α)^2 σ3^2 + 12 α(1-α) r σ2 σ3. SR=μ/σ. First-order condition. Derive dμ/dα=2p2-3p3. dσ^2/dα = 8ασ2^2 -18(1-α)σ3^2 +12(1-2α)rσ2σ3. FOC: (dμ/dα)σ - μ(1/(2σ))dσ^2/dα =0 -> (dμ/dα) σ^2 = (μ/2) dσ^2/dα. Could simplify. Need maybe provide in equations section. In think trace can mention. Need singularity: σ=0. If p2=p3=0, μ=0, SR undefined 0/0. If σ=0 and μ>0, SR infinite, constrained optimum at zero-risk asset. If r=1 and σ2/σ3 relation, variance can be square of linear combo; if 2ασ2 -3(1-α)σ3=0 for r=1? Let's derive: variance = (2ασ2 -3α3σ3)^2 when r=1? Actually 4α^2σ2^2 +9α3^2σ3^2 -12αα3σ2σ3 = (2ασ2 -3α3σ3)^2 for r=1? Cross term -12, yes if variance formula with +12 r... For r=1 positive cross term; if r=-1, variance = (2ασ2+3α3σ3)^2? Wait covariance term +12αα3 r σ2σ3. For r=1, variance = (2ασ2+3α3σ3)^2? Since (a+b)^2 = a^2+b^2+2ab, here a=2ασ2, b=3α3σ3, cross 2ab=12αα3σ2σ3. So r=1 gives positive cross, variance=(2ασ2+3α3σ3)^2. For r=-1, variance=(2ασ2-3α3σ3)^2, can zero at 2ασ2=3α3σ3. Yes. Good. For r=-1, perfect hedging can create zero volatility; SR singular. That matches paper: negative correlation between shot types pronounced [PAGE 4? Page 4 says negative correlation? Actually page 7: "The negative correlation between 2- and 3-point shot successes is pronounced". Page 7. But Fig 3 shows correlations? It says correlations between shot types over time; graph maybe 0.4 to -0.8? It says negative correlation pronounced. So r negative. For r=-1, zero variance possible. Need mention.

Gray-zone audit: source uses annual aggregate p estimated from n shots, CLT variance p(1-p)/n; but actual shot outcomes are Bernoulli with p parameter? They explicitly avoid Bernoulli because p random. But p_hat variance formula uses p(1-p)/n. Need note: treating p as random is hierarchical; if p itself random, variance of p_hat is E[p(1-p)]/n + Var(p) under beta-binomial, not simply p(1-p)/n. That's a potential inconsistency. Good audit. Also Sharpe ratio with estimated p and σ; ratio bias, need bootstrap. Defensive SR sign coding. Team-level data only 30 teams per year; r estimated across teams but used for individual team? Page 5: "we compute Pearson correlation coefficient r between 2- and 3-point shots from each team’s total shot statistics per regular season year... using each team as an observation." Then for individual team, EMS computed from variance/covariance matrix where covariance estimated by correlation between shot types estimated from 30 teams. So same r for all teams? Actually "where covariance is estimated by computing the correlation between shot types estimated from the 30 teams, multiplied by product of shot type standard deviations" [PAGE 6]. That means team-specific σ but common r. That is a gray zone: r not team-specific. Need mention.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need include equations and proof. We can define biomechanical shot success probability p_i(θ) with release angle, velocity, fatigue. If p_i outside model support, veto. Weather: indoor venue, no direct weather; but travel/altitude can affect fatigue. Need source doesn't model weather; so weather veto is not applicable to indoor NBA unless arena environment changes. We can state "No source page models weather; therefore any weather variable is an out-of-model veto, not a predictor." Need "veto proof": use physical constraints to veto impossible optimal weights: α3 cannot be negative or exceed 1; if model outputs α3>1 due to unconstrained optimization, veto. If 3P accuracy falls below 2P expected points? Actually if 3p3 < 2p2, risk-neutral says all 2s, but risk-averse may still take 3s if covariance negative. Need not. Physical: shot distance line 22 ft corner vs 23'9" [PAGE 5], so 3P variance not homogeneous; corner 3 lower distance. Model aggregates all 3s; if team-specific corner mix shifts, variance changes. Veto if corner share changes > threshold and p3 not adjusted. Biomechanical: arc/entry angle; fatigue reduces p3 more due to longer distance. Need maybe no data.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Mention 1954 shot clock, 1979 3-point line, 1994-97 line change, Markowitz 1952, Sharpe 1964, CAPM, Oliver 2004. Multi-week traps: learning curve, rule change lag, sample size, annual correlations. Need maybe "retrocausal" meaning model back-projects current efficient mix onto past? We can discuss how 1979-2014 data used to infer "near optimal" [PAGE 13]. But retrocausal genealogy: MPT from finance to basketball; CAPM; shot market line. Multi-week traps: 3-point percentage variance declines slowly; teams adapt over seasons not weeks; using current 3P% to predict next week's optimal mix overreacts. Need mention "The change was not instantaneous..." [PAGE 1].

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need define:
- Crisis habit regression: under stress, team reverts to prior dominant strategy (e.g., 2P-heavy) despite efficient mix. Could be modeled as α_t = (1-λ)α*_t + λ α_habit under high leverage; λ increases with game clock pressure. This is a testable deviation from EMS. Source says professional golfers/football coaches show risk aversion under high stakes [PAGE 3]. NBA added risky choice [PAGE 3]. Prediction: late-game/playoff high leverage increases 2P share or decreases 3P share relative to EMS, even if EMS says otherwise.
- Counter-trap: opponent anticipates regression and crowds paint/3-point line. Source: "Suppose coach chooses just to shoot 3-point shots? Then defense adapts..." [PAGE 3]. If coach expects opponent to expect regression, optimal is to maintain mix or feint. Recursive theory of mind: level-0 random, level-1 exploits habit, level-2 exploits counter, etc. Need not overdo.
- Clock: shot clock/game clock. Source mentions shot clock changed pace [PAGE 1]. Late clock reduces action time, may increase forced 3s? Need derive. Need maybe "clock" as game clock and shot clock. Crisis habit regression vs counter-trap vs clock: We can define a control variable τ (seconds remaining) and test interaction. Prediction: as τ decreases, variance of shot quality increases; if 3P attempts forced, p3 drops; model's α* shifts. Need no betting.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need make them verifiable: use held-out seasons, pre-registered metrics, source data. Scenario 1: covariance ablation. Compute EMS under estimated r vs r=0. Prediction: if paper's mechanism is correct, estimated-r EMS tracks actual 3P share better than r=0; veto if difference in out-of-sample MAE not improved. Source Fig 4 vs 5: "gap between actual and predicted is widening" under independence [PAGE 8]. So prediction: actual 3P share closer to EMS with estimated correlations than independence baseline. Veto if not.
Scenario 2: rule-change natural experiment 1994-97. Prediction: shortening line reduces σ3 and increases μ3 -> optimal α3 rises; actual rises. Source says teams immediately shot more [PAGE 4]. Veto if EMS fails to predict direction or actual not respond.
Scenario 3: playoff SML slope out-of-sample. Prediction: home offensive SML and away defensive SML? Need exact signs from Table 2. We can state pre-registered: in multilevel logit, home-team offensive SML slope should be positive for home win; road-team offensive SML negative? Table 2 shows Home Team offense SML 11.268*** positive; Road Team offense SML -7.972** negative; Road Team defense SML 14.616*** positive; Home Team defense SML -11.167** negative. So prediction: higher home offensive SML raises home win probability; higher road defensive SML raises home win probability (because higher defensive SML = worse road defense? Wait source's sign convention: Table 2 coefficient for Road Team defense SML positive means higher road defensive SML increases home winning. If defensive SML is points given up per risk, higher = worse defense, so yes). Higher home defensive SML lowers home win. Higher road offensive SML lowers home win. Veto if signs reverse in new seasons or confidence intervals include zero. But source says four SML slope coefficients all highly significant [PAGE 10]. Good.
Need maybe "RLVR" means reward based on verifiable outcomes; predictions can be scored by log loss. We can include metrics: log loss, Brier, MAE, direction accuracy. Need no betting.

Need ensure total >=1000 words. Our final will be maybe 3000+ words. Desired oververbosity 5, but user asked depth. Need produce exact XML sections. We can include LaTeX. Need not use markdown? XML sections. We can use paragraphs. Must include exact tags. Only those sections? They asked exact XML sections. We can include all tags in order. Need no extra outside? We can start with <THINK_TRACE>... </THINK_TRACE> etc. Need ensure no markdown bullet? Fine.

Need be careful: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." We must avoid words "odds", "spread", "total", "moneyline". Even in "no betting lines" maybe avoid. Don't mention. We can mention "wagering" maybe? Avoid. "betting" perhaps avoid. The user says ZERO BETTING LINES, not zero word betting. But safe avoid all gambling terms. We can say "no market lines" maybe no. Better not reference gambling at all. The final should be pure sports analytics. Avoid "line" as in betting? The paper uses 3-point line, shot market line. That's okay not betting line. "market line" is SML not betting. Need not mention "spread". Use "3-point arc" maybe to avoid confusion? But paper uses "3-point line"; it's fine. But "Shot Market Line" is not betting. No "odds". Good.

Need maybe include "units": points per shot, probability, dimensionless Sharpe ratio, points per unit risk. Sharpe ratio units? Expected points divided by volatility of points (points), so dimensionless. But if μ is expected points per shot? Actually μ = expected points from mixed strategy per shot; σ in points; SR dimensionless. In paper, SR values 16.33 etc? Wait if μ around 1 point per shot, σ maybe 0.06? SR ~16. Yes. Units: points per shot / points per shot = dimensionless. But paper says "expected points per unit of risk" maybe dimensionless. Need state. Beta dimensionless. SML slope? E(ρj)=βj E(ρM): both expected points, beta dimensionless, slope of SML? If plotted E(points) vs beta, slope units points per beta? But paper's "slope of SML" dimensionless? In table slope ~0.944, maybe E(ρj)/E(ρM)? Actually SML slope maybe ratio? They report ~0.944, 1.03, so dimensionless? In CAPM SML slope = E(R_M)-R_f; here risk-free zero, slope = E(ρ_M) maybe points. But they call slope 1.03. Hmm. Could be slope of line of expected points vs beta: since beta ~1, expected points ~1, slope ~1 point per beta. Beta dimensionless, so slope points? But values ~1, could be points per unit beta. But they call "slope of Shot Market Line" 1.03. We'll state "SML slope has units of expected points per unit beta; beta is dimensionless, so the reported numeric slope is in points per beta." But source says "steeper SML implies expected points per unit risk higher" [PAGE 7]. Actually slope maybe expected points vs beta. Need not over-specify units maybe "reported dimensionless in the paper's normalization" but formal. Better: In equation E(ρ_j)=β_j E(ρ_M), if β dimensionless, E(ρ) in points, then slope E(ρ_M) has units points per beta. But table slopes ~1, plausible expected points per shot. We can state "The paper's tabulated SML slope is a normalized slope; operationally it is points per unit beta." Need not.

Need include exact LaTeX for first-order condition:
Let a = α2, b=α3=1-a. μ(a)=2a p2+3(1-a)p3. σ(a)=[4a^2 σ2^2+9(1-a)^2 σ3^2+12a(1-a) r σ2 σ3]^{1/2}. SR(a)=μ/σ. Interior FOC:
(2p2-3p3)σ^2 = (1/2)(2a p2+3(1-a)p3)[8aσ2^2 -18(1-a)σ3^2 +12(1-2a)rσ2σ3].
Boundary: a=0 if dSR/da<0 at 0? Actually maximize, check endpoints and interior. Need mention.

Need derive comparative statics: if σ3 decreases or p3 increases, α3* generally increases. Source says as riskiness of 3P declines, 3P should be taken more frequently [PAGE 4-5]. But not automatic with covariance; negative r can increase hedging demand. Need mention.

Need "exact singularity/breakdown regimes": σ=0; p=0 or 1; n=0; r=±1 with zero variance; nonstationary; multicollinearity? With two assets only. If p2=p3=0 then μ=0 and σ=0? If p=0 variance p(1-p)/n=0; yes. If p=1 variance 0. If σ2=σ3=0, σ=0. If r=-1 and 2aσ2=3(1-a)σ3, zero variance. If r=1 no zero variance unless negative weights but constraints nonnegative; with positive weights variance positive. If σ=0 and μ>0, SR infinite; optimization degenerates to max μ among zero-vol assets. If μ<0? Not relevant.

Need physical veto proof: 
- α3 ∈ [0,1] constraint; if optimization suggests α3>1, infeasible.
- p3 ≤ p2? No, 3P accuracy lower than 2P. But expected 3P points can exceed 2P. If p3 < (2/3)p2, then risk-neutral all 2s; but risk-averse can still hold 3s for hedging only if r<0 and risk reduction benefit outweighs lower mean. If p3 below physical floor (near zero), variance p(1-p)/n small but mean low; EMS may still choose nonzero due to negative correlation? Actually if p3=0, σ3=0, 3P has zero variance and zero mean; it's useless except hedging? With zero variance and zero mean, covariance zero, so no. If p3 very low, variance low, could be hedging. Need not.
- Biomechanical: p3 declines with distance and fatigue; if measured p3 is from different line distance, Veto. Source notes line moved 22 ft vs 23'9" [PAGE 5]. If current arena corner 3 proportion changes, aggregate p3 not transferable. Weather: indoor controlled; no weather term; if outdoor or HVAC anomaly, out-of-model. Maybe mention altitude/travel affects fatigue but not in source.

Need "Recursive theory of mind" maybe include formal recursive level:
At level k, coach's action a_k = argmax_{a∈[0,1]} SR(a | p,σ,r, defense_k), where defense_k = best response to expected a_{k-1}. This is a fictitious play. Crisis habit regression: a_t = (1-λ)a*_t + λ a_habit with λ = λ0 + λ1 f(clutch) + λ2 f(clock). Counter-trap: if opponent defense_k crowds 3P line, p3 decreases and σ3? Actually crowding line makes shots difficult; p3 decreases; if p3 decreases, EMS α3 may decrease. But counter-trap: coach may use 2P if defense crowds 3P; but if defense expects that, they protect paint. Need mixed strategy Nash equilibrium. The paper's "efficient mixed strategy" not game-theoretic equilibrium? It says game theoretic analysis of realized shot distributions [PAGE 3]. But it is portfolio optimization, not full best-response. We can note that. Need "clock" variable: shot clock introduced 1954 [PAGE 1] changed pace. Late clock forces lower p; model assumes p constant. Veto if late-clock p differs. Prediction: as seconds remaining decrease, observed α3 may deviate from EMS; if deviations are systematic and not due to p changes, habit regression model gets reward. Need no actual data.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe table-like. Need include "proof" that veto layers are independent:
- Physical geometry: 3P distance 22 ft corner or 23'9" elsewhere; if model aggregates without location weights, p3 and σ3 are biased. Veto if line geometry changes.
- Biomechanical: fatigue reduces force production; longer shots more sensitive. We can define fatigue index F; p3(F)=p3(0)-κF, p2(F)=p2(0)-κ'F with κ>κ'. If F exceeds threshold such that p3 falls below (2/3)p2, risk-neutral mean advantage disappears; EMS may shift to 2s. But risk aversion could keep 3s. Prediction: back-to-back games or overtime reduce 3P accuracy more than 2P. Veto if not.
- Weather: NBA indoor; no direct weather. But if arena temperature/humidity affects ball grip, it's out-of-model. Source no weather data. Weather cannot veto paper's core because paper's data indoor. If a question asks weather, veto because no source support. Good.

Need maybe "multi-week traps" in genealogy: The paper's annual data means within-season adaptation over weeks is not modeled. If applying to next weeks, need rolling window; otherwise stale p. Rule changes take multiple weeks to manifest? Source says 1994 immediate, shot clock 5 seasons. So multi-week traps: overreact to one week's 3P variance; ignore learning curve; use annual r in weekly decisions; playoffs small sample; team composition changes. Need mention.

Need be concise but deep. Need final with all sections. Let's draft carefully.

Need ensure exact XML tags. We can use paragraphs. Need maybe include equations in LaTeX. Need cite [PAGE N] exactly. When quoting, use quotation marks and [PAGE N]. Ensure quotes verbatim. Let's verify quotes:

Page 4: "maximizing the Sharpe Ratio (SR), which is defined here as the expected points divided by the volatility of points." Yes.
Page 5: "The variance of p is normally distributed and equal to p*(1-p)/n." Actually text: "the variance of p is normally distributed and equal to p*(1-p)/n." We can quote. Wait it says "and the variance of p is normally distributed and equal to p*(1-p)/n." The phrase "variance is normally distributed" is odd; quote exactly maybe okay. We can say source states "the variance of p is normally distributed and equal to p*(1-p)/n" [PAGE 5], and flag it as a wording/assumption gray zone. Good.

Page 8: "NBA coaches have exhibited highly efficient 2- and 3-point shot selection strategies." Yes.
Page 13: "NBA teams seem to manage risk very efficiently relative to the objective function used in this paper." Yes.

Need maybe cite [PAGE 6] for SML equation: "E(ρj)=βjE(ρM)" exactly? Text: "E (ρj) = βjE (ρM)" with rho? It uses ρ maybe. We can write. Quote "E (ρj) = βjE (ρM)" [PAGE 6]. Fine.

Need no mention "spreads" etc. Avoid "betting" word. Use "predictions" not "picks". Good.

Potential issue: User says "DRIVE SOURCE: ... PAGES: 14 SOURCE TEXT:" They expect analysis of source. We should not ask questions. Provide final.

Need maybe include "GSE + GSI" terms? Not necessary.

Let's plan final:

<THINK_TRACE>
Paragraphs: define problem, derive, multi-hop. Need >=400 words. We'll write ~700 words.
- The paper maps shot mix to portfolio. α2,α3, p2,p3.
- Multi-hop: p estimates -> μ,σ,r -> SR -> optimal α -> SML betas -> predictive regressions -> playoff tests -> Oliver factors. 
- Gray-zone audit: p random vs Bernoulli, annual aggregation, r common across teams, defensive SR sign, small n, endpoints, ratio bias, in-sample vs out-of-sample, playoffs 670 games? Table 2 N=670. Source says 7 years? It says 2007-2014, 15 series per year in each of 7 years; N=670. Need not.
- Singularities.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal equations with units, assumptions, page citations, breakdown. Include all equations. Use LaTeX. Cite quotes.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage and traps. ~400 words.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. ~400 words.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. ~400 words.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios + predictions. ~500 words.
</RLVR_COUNTERFACTUAL_VETOES>

Need total >1000. We'll be ~3000.

Need ensure no "odds". Use "pre-registered". Good.

Let's write with precision.

Need maybe include "units: probability p dimensionless; μ points per shot; σ points per shot; SR dimensionless; beta dimensionless; SML slope points per beta." But paper's SML slope in table ~1, maybe points per beta. Good.

Need mention "n shots" number of attempts; variance units p^2? p(1-p)/n dimensionless. σ2,σ3 are standard deviations of shot success probability? Wait in formula μ = s^T ω^T \bar p, p probabilities. σ = sqrt(ω^T Σ ω), Σ variance covariance matrix of shot type points. So σ2, σ3 in formula are standard deviations of points from shot type? They use σ2 and σ3 in volatility formula, and rσ2σ3 covariance of points. But they also say variance of p = p(1-p)/n. There is a unit mixing: p variance versus points variance. The formula with 4 and 9 squares point values times variance of probability. So σ2 and σ3 in formula are standard deviations of probability? Let's parse: μ = 2 α2 p2 + 3 α3 p3. If p2 random with variance p2(1-p2)/n2, then points from 2P = 2*Bernoulli, variance 4 p2(1-p2) per shot? But for probability estimate across season? Hmm. The paper's σ2,σ3 likely standard deviations of shot type points? In formula they multiply by 4 and 9, so if σ2 is std dev of probability, then 4σ2^2 is variance of points. They say "σ = sqrt(ω^T Σ ω), Σ=variance covariance matrix of shot type points". Then formula "4α2^2σ2^2 +9α3^2σ3^2 +12..." where 4 equals 2 points squared, 9 equals 3-points squared and 12 is 2*2*3 to cover off diagonal terms. That implies σ2 and σ3 are std devs of probabilities? Wait if Σ is variance covariance matrix of shot type points, then variance of 2-point points is σ2^2 (already includes 2^2). Then formula would be α2^2σ2^2 + α3^2σ3^2 +2αα3rσ2σ3, not with 4 and 9. Since they include 4 and 9, σ2,σ3 must be std dev of success probability (dimensionless), and point variance is (2)^2 σ2^2. But they also say Σ variance covariance matrix of shot type points. There's a unit inconsistency. We should flag in gray-zone audit. Good. In formal section, define σ2,σ3 as the source uses them in equation: standard deviations of shot-type success probabilities, with multipliers 2^2 and 3^2 converting to points; but note source labels Σ as variance-covariance of shot type points [PAGE 5], creating a unit ambiguity. This is important. Need cite exact quote. Let's quote "σ = sqrt(ωT ω), =variance covariance matrix of shot type points" maybe OCR. Text: "σ = √ ωT  ω, =variance covariance matrix of shot type points". We can quote "variance covariance matrix of shot type points" [PAGE 5]. Then formula includes 4 and 9. Flag.

Need exact formula: σ = [4 α2^2 σ2^2 + 9 α3^2 σ3^2 + 12 α2 α3 r σ2 σ3]^{0.5}. But if σ2,σ3 are probability std devs, cross term should be 2*(2ασ2)*(3α3σ3)r =12 αα3 r σ2σ3. Yes. Good.

Need mention "variance of p = p(1-p)/n" [PAGE 5] but if p is random, not exact. Good.

Need "singularity/breakdown regimes": 
- σ=0. If p2,p3 ∈ {0,1} or n→∞? Actually variance p(1-p)/n →0 as n→∞, so SR may diverge as sample size grows even though p uncertain. This is a serious breakdown: using p(1-p)/n as variance of p makes risk shrink with n, so SR scales sqrt(n); not appropriate for forecast risk. Need flag. That's a great gray-zone audit. The paper uses season aggregate n, so SR values depend on n. If n huge, σ small, SR large. But for team level n ~6000 shots, SR ~16. This is sample-size artifact. Need mention. This is a formal breakdown: estimated Sharpe ratio can be inflated by sample size; it is not risk of next shot but estimation precision. The source says "variance of p ... equal to p*(1-p)/n" [PAGE 5]. If n is number of shots used to estimate p, then SR = μ/σ ∝ √n. That means comparisons across teams with different n or seasons? All teams similar n, but still. This is critical. We can mention in THINK_TRACE and SOURCE_OPERATORS. Good.

Need maybe "defensive SR sign" gray zone. We'll include.

Need "RLVR counterfactual vetoes" include sample-size artifact veto: if SR ranking changes when n is fixed to common value, then SR predictive power is sample-size artifact. Prediction: normalize n or use Bayesian posterior predictive variance; if SML still predicts, good; if not, veto SR but not SML. That could be one scenario. But need 3 scenarios. We have covariance, rule-change, playoff SML. Could add sample-size as part of scenario 1? Need exactly 3 scenarios. We'll do three: (1) covariance ablation and sample-size normalization; (2) rule-change; (3) playoff SML sign. Good.

Need "verifiable RLVR veto" meaning reward function can verify against data. We can state "veto if pre-registered metric fails." Good.

Need maybe "counter-trap vs clock" prediction: In high-leverage late clock, if α3 deviates from EMS, is it because p3 decreases? We can propose test: estimate p3 by clock bucket; if α3 deviation is fully explained by p3, then no habit regression; if residual remains, habit. That's a counterfactual. Could include in recursive section.

Need "cross-layer veto" maybe include "weather" proof: indoor NBA, no weather variable in source. If weather question arises, veto source-based claim. Use "weather is not a source operator" and "only venue HVAC/travel fatigue could proxy." Good.

Need "retrocausal genealogy" multi-week traps: 
- From 1954 shot clock to 1979 3P to 1994-97 line changes. 
- MPT Markowitz 1952 and Sharpe 1964; CAPM; SML. 
- The paper's retrocausal claim "NBA as a league exhibits near optimal risk allocation from 1979 to 2013" [PAGE 13]. But it uses data after 1979 to estimate optimal mix; cannot infer coaches used MPT. It is an as-if model. Multi-week trap: treating as-if optimality as intentional optimization. 
- Learning curve: 3P variance declined 1979-1995, then settled [PAGE 8]. A weekly model might overfit the steep learning phase. 
- Rule changes: 1994 line move immediate; shot clock took 5 seasons. So adaptation half-life differs by rule. Need rolling windows.

Need "Recursive theory of mind" maybe include "crisis habit regression" as risk aversion under high stakes; source notes golfers/football coaches loss aversion [PAGE 3]. NBA coaches maybe efficient overall [PAGE 8]. Crisis habit regression would be deviation in playoffs; but paper says SML slopes predict playoffs [PAGE 10]. We can say the paper does not test in-game crisis; it tests season-level. So any crisis narrative is an out-of-source extension. Need be transparent. Good.

Need "Cross-layer veto" include "physical/biomechanical/weather veto proof" maybe:
1. Physical geometry: 3P line at 23'9" and 22' corners [PAGE 5]; if a venue changes line, p3 and σ3 shift. Veto if not adjusted.
2. Biomechanical: longer shot requires greater force and arc; fatigue increases variance. If back-to-back/overtime, p3 drop > p2; model's constant p assumption fails. Prediction: 3P accuracy decreases more than 2P in high-fatigue games. Veto if no differential.
3. Weather: indoor, no direct. But if arena temperature/humidity affects ball grip, it's out-of-model. Veto source claims about weather because no source data. Good.

Need maybe "physical veto proof" use equation: If p3 < (2/3)p2, 3P expected points lower than 2P; but risk-averse EMS may still hold 3P only if r<0 and σ reduction offsets. We can derive condition: At α3=0, marginal SR derivative? For α3 to be positive, need dSR/dα3 at 0 >0. Let's derive. Let a=α3, α2=1-a. μ=2(1-a)p2+3a p3 = 2p2 + a(3p3-2p2). σ^2 = 4(1-a)^2σ2^2 +9a^2σ3^2 +12a(1-a)rσ2σ3. At a=0, σ=2σ2. dμ/da = 3p3-2p2. dσ^2/da at 0 = -8σ2^2 +12rσ2σ3. FOC at boundary: dSR/da at 0 = (dμ/da)/σ - μ/(2σ^3)dσ^2/da = [(3p3-2p2)(2σ2) - (2p2)/(4σ2^2? Wait compute). At a=0, σ=2σ2, μ=2p2. dSR/da = (Δμ σ - μ/(2σ)Δσ^2)/σ^2. = Δμ/(2σ2) - (2p2)/(2*2σ2) * Δσ^2 / (4σ2^2)? Let's not. Simplify: dSR/da at 0 = Δμ/(2σ2) - (2p2) Δσ^2/(8σ2^3) = [Δμ*4σ2^2 - 2p2 Δσ^2]/(8σ2^3)? Hmm. We only need condition for interior α3>0: dSR/da at 0 >0. This can happen even if Δμ<0 if Δσ^2<0 (negative covariance reduces risk). That shows risk-averse can hold 3P despite lower mean. Good. We can state. This is a formal proof of risk hedge. Good.

Need maybe "SML" equation: E(ρ_j)=β_j E(ρ_M). Beta dimensionless. In paper, for basketball risk-free rate zero, so SML passes origin [PAGE 7]. Quote "the offensive shot pricing model originates at the origin (i.e., risk free rate equals zero)." [PAGE 7]. Good.

Need "source operators and equations" include Sharpe, expected points, volatility, beta, SML, fractional logit? Maybe not necessary but mention regression model? The section asks formal LaTeX, units, page citations, breakdown. Include core equations. Could include Papke-Wooldridge fractional regression? Not necessary but maybe mention as operator. But we have enough.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe mention "weather veto proof" with "No source page provides weather variables; therefore any weather-based adjustment is an out-of-model prior and cannot be used to override the source's operators without new data." Good.

Need "RLVR counterfactual vetoes" predictions verifiable:
Scenario 1: Compute actual 3P share y_t. Fit EMS with estimated r vs r=0. Metric: out-of-sample MAE 1995-2014. Prediction: estimated-r EMS lower MAE than independence. Veto if ΔMAE ≥0 or CI includes 0. Also normalize n to avoid sample-size artifact. If SR predictive power vanishes but SML remains, then SR is not needed. 
Scenario 2: Natural experiment 1994-95 line shortening. Prediction: Δα3_optimal >0 and actual Δα3 >0; if not, veto. Source says "Teams immediately started shooting significantly more 3-point shots" [PAGE 4]. Good.
Scenario 3: Playoff multilevel logit 2007-2014. Prediction: home offense SML positive, road offense SML negative, home defense SML negative, road defense SML positive; all four significant p<0.01 [PAGE 10]. Veto if signs reverse or joint Wald χ² fails. Good.

Need maybe include "RLVR reward = log score of home win + Gaussian log score of point differential + MAE of 3P share". Good.

Need final answer only XML sections. Ensure no markdown code fences? It's okay. Need not wrap in <?xml? Probably not. Use exact tags. Need no extra preamble.

Let's craft final now. Need be careful with words. We'll include quotes. Need exact page markers. We'll use [PAGE 5] etc. The source text has [PAGE 1 of 14], but user says cite exact [PAGE N] markers. Use [PAGE 1], [PAGE 2] etc. Good.

Need maybe "verbatim quotes" not too many but enough. Ensure quotes exactly as source. For page 1, quote "increasing from virtually none (3.05 % to be precise) in the 1979-80 season when the shot was introduced in the NBA to 28.4 % in the 2015-16 season" — source has "increasing from virtually none (3.05 % to be precise) in the 1979-80 season when the shot was introduced in the NBA to 28.4 % in the 2015-16 season". Good.
Page 5 quote "In 1994, the NBA moved the 3-point line closer to the basket (uniformly 22 ft. instead of 23 ft. 9 in.). As a result, the risk (i.e., variance) from taking 3-point shots was reduced, and expected points increased." Good.
Page 8 quote "NBA coaches have exhibited highly efficient 2- and 3-point shot selection strategies." Good.
Page 13 quote "NBA teams seem to manage risk very efficiently relative to the objective function used in this paper." Good.
Page 10 quote "the four SML slope coefficients (offensive, defensive, home and away) are all highly significant (p < 0.01)." Good.

Need no "odds". Check final for "odds" substring? Avoid. "good" contains "ood" but not odds. "periods" no. "methods" no. We can use "predictions" not "bets". Fine.

Need maybe "moneyline" not. Good.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central move is a multi-hop analogy: shot attempts are portfolio weights, shot types are risky assets, and the coach chooses a mix that maximizes expected points per unit of point volatility. I audit the chain hop by hop. First, shot-type success probabilities \(p_2,p_3\) are estimated from finite samples; the paper states that “the variance of p is normally distributed and equal to p*(1-p)/n” [PAGE 5]. Second, those probabilities map to expected points \(\mu=2\alpha_2p_2+3\alpha_3p_3\) and to volatility \(\sigma=\sqrt{\omega^T\Sigma\omega}\), with the paper’s two-shot expansion carrying factors \(4=2^2\), \(9=3^2\), and \(12=2\cdot2\cdot3\) [PAGE 5]. Third, the efficient mix is obtained by “maximizing the Sharpe Ratio (SR), which is defined here as the expected points divided by the volatility of points” [PAGE 4]. Fourth, team-level CAPM-like betas are computed relative to the efficient mixed strategy and mapped through a “Shot Market Line” \(E(\rho_j)=\beta_j E(\rho_M)\) [PAGE 6]. Fifth, SML slopes are used in fractional regressions and multilevel playoff models, where “the four SML slope coefficients (offensive, defensive, home and away) are all highly significant (p < 0.01)” [PAGE 10].

The derivation is not merely descriptive. If only expected points mattered, the paper notes, “if only expected points from a shot type matter then we would observe 100% 3-point shots since 1987, which obviously did not happen” [PAGE 2]. The variance/covariance term is therefore the load-bearing operator: a risk-averse coach may hold 3-point attempts even when their mean is not dominant, provided the covariance structure improves the portfolio’s risk-return frontier. But this is exactly where the gray zone appears. The source says \(\Sigma\) is the “variance covariance matrix of shot type points” [PAGE 5], yet the explicit formula multiplies probability standard deviations by \(2^2\) and \(3^2\), creating a unit ambiguity between probability variance and point variance. A second gray zone is sample-size dependence: if \(\sigma_p^2=p(1-p)/n\), then \(\mathrm{SR}=\mu/\sigma\) scales approximately with \(\sqrt{n}\), so a large season sample can inflate the Sharpe ratio without any change in next-possession risk. The source’s SR values should therefore be read as estimation-precision-adjusted ratios, not as physical per-shot risk ratios, unless \(n\) is normalized or a posterior predictive variance is used.

Additional audit points: the correlation \(r\) is estimated across teams within a season, not for each team’s own shot-mix covariance [PAGE 5], so a common \(r\) may be imposed on heterogeneous teams. The defensive SR direction is stated as “the opposite” of offense [PAGE 4], but table and example sign conventions require explicit coding before deployment; the paper’s own discussion says lower defensive SR is preferred, while its Miami/Orlando example reports Miami’s defensive SR as 13.79 and Orlando’s as 13.54 [PAGE 6], so the defensive SR is not a clean standalone ranking variable in that example. Finally, the singularity regimes are real: \(\sigma=0\) when \(p_2,p_3\in\{0,1\}\), or when \(n\to\infty\) under the \(p(1-p)/n\) approximation, or when \(r=-1\) and \(2\alpha_2\sigma_2=3\alpha_3\sigma_3\); at those points SR is undefined or infinite, and the optimizer must switch to boundary/constrained logic. The paper’s conclusion that “NBA teams seem to manage risk very efficiently relative to the objective function used in this paper” [PAGE 13] is therefore best treated as an as-if portfolio-efficiency claim, not proof that coaches literally solve MPT.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(j\in\{2,3\}\) index shot types. Let \(\alpha_2,\alpha_3\ge 0\) be portfolio weights with \(\alpha_2+\alpha_3=1\), and let \(p_2,p_3\in[0,1]\) be success probabilities. The source’s expected-points operator is
\[
\mu=\mathbf{s}^T\omega^T\bar p
=2\alpha_2p_2+3\alpha_3p_3,
\]
with units of points per shot attempt. The source defines the risk operator as
\[
\sigma=\sqrt{\omega^T\Sigma\omega},
\qquad
\sigma=
\left[
4\alpha_2^2\sigma_2^2
+9\alpha_3^2\sigma_3^2
+12\alpha_2\alpha_3r\sigma_2\sigma_3
\right]^{1/2},
\]
where the paper explains that “4 equals 2 points squared, 9 equals 3-points squared and 12 is 2*2*3 to cover the off diagonal terms” [PAGE 5]. If \(\sigma_2,\sigma_3\) are read as probability standard deviations, the multipliers convert to point units; if \(\Sigma\) is read literally as the “variance covariance matrix of shot type points” [PAGE 5], then the multipliers are already embedded and the formula is unit-inconsistent. This is a formal breakdown regime, not a cosmetic issue.

The efficient mixed strategy is the solution to
\[
\max_{\omega}\ \frac{\mu}{\sigma}
\quad\text{subject to}\quad
\sum_j\omega_j=1,\qquad \omega_j\ge 0,
\]
which the source calls maximizing the Sharpe Ratio, “defined here as the expected points divided by the volatility of points” [PAGE 4]. With \(a=\alpha_3=1-\alpha_2\), the interior first-order condition is
\[
(3p_3-2p_2)\sigma^2
=
\frac{1}{2}\mu
\left[
8(1-a)\sigma_2^2
-18a\sigma_3^2
+12(1-2a)r\sigma_2\sigma_3
\right],
\]
plus the boundary checks \(a=0\), \(a=1\). At \(a=0\), a positive marginal SR can occur even when \(3p_3-2p_2<0\), provided the covariance term reduces risk enough; this is the mathematical reason a risk-averse portfolio can hold 3-point attempts despite a lower expected-points mean.

The source’s probability-variance operator is
\[
\widehat{\operatorname{Var}}(\hat p)=\frac{\hat p(1-\hat p)}{n},
\]
quoted as “the variance of p is normally distributed and equal to p*(1-p)/n” [PAGE 5]. Units are probability squared. The breakdown regimes are: \(n=0\); \(\hat p=0\) or \(\hat p=1\); \(\sigma=0\); \(r=-1\) with \(2\alpha_2\sigma_2=3\alpha_3\sigma_3\); and any regime where \(\mu=0\) while \(\sigma=0\), giving \(0/0\). The source also uses the CAPM-like Shot Market Line
\[
E(\rho_j)=\beta_j E(\rho_M),
\]
with \(\beta_j=\operatorname{Cov}(\rho_j,\rho_M)/\operatorname{Var}(\rho_M)\), dimensionless, and the source notes betas “are estimated in two equivalent ways, relative to each team’s efficient mixed strategy” [PAGE 6]. The offensive SML is said to originate at the origin because the basketball risk-free rate is zero [PAGE 7]; therefore SML slopes are in expected points per unit beta. The source’s empirical claim is that “NBA coaches have exhibited highly efficient 2- and 3-point shot selection strategies” [PAGE 8], but the operator breaks down when line geometry changes, when \(p\) is nonstationary within a season, or when \(r\) is borrowed from league-level cross-sections rather than team-specific covariance.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from Markowitz’s 1952 portfolio selection and Sharpe’s 1964 capital-asset pricing into the paper’s “modern portfolio theory (MPT) and the Capital Asset Pricing Model (CAPM)” framing [PAGE 2]. The basketball lineage runs from the 1954 shot clock, which the paper says changed scoring from 79.5 to 93.1 points per game and eventually pushed every team over 100 points within five seasons [PAGE 1], to the 1979 introduction of the 3-point shot, when the league’s 3-point share was “virtually none (3.05 % to be precise)” and rose to “28.4 % in the 2015-16 season” [PAGE 1]. The retrocausal move is to project the later efficient-mix logic backward onto 1979–2014 and claim that observed league behavior closely tracked a risk-return frontier. The paper’s wording is careful but strong: it finds the NBA “exhibits near optimal risk allocation from 1979 to 2013” [PAGE 13]. That is an as-if reconstruction, not evidence that coaches in 1979 were solving a mean-variance program.

The most important historical break is the 1994–97 line experiment. The paper states: “In 1994, the NBA moved the 3-point line closer to the basket (uniformly 22 ft. instead of 23 ft. 9 in.). As a result, the risk (i.e., variance) from taking 3-point shots was reduced, and expected points increased” [PAGE 4]. That is a natural experiment for the model: lower \(\sigma_3\) and higher \(\mu_3\) should raise the optimal \(\alpha_3\), and the paper says teams “immediately started shooting significantly more 3-point shots” [PAGE 4]. The contrast with the 1954 shot clock is instructive: the shot-clock change took years to diffuse through personnel and training, while the line change produced a faster tactical response. A multi-week trap is therefore to assume a single adaptation half-life. Rule changes that alter geometry can move behavior quickly; changes that require player development move slowly. Another trap is estimating \(r\) from a league cross-section and then applying it to a single team over a short window; the paper’s \(r\) is computed “using each team as an observation” with 22 to 30 teams per year [PAGE 5], so weekly team-level covariance is not directly identified. A third trap is the learning-curve phase: the paper says 3-point variance declined steeply through roughly 1995 and then stabilized [PAGE 8], so a rolling model trained on the 1980s would overstate future 3-point risk. The correct retrocausal discipline is to treat the model as a conditional frontier whose parameters drift with rule geometry, player skill, and defensive adaptation—not as a fixed law that can be back-projected without regime indicators.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper is not a full game-theoretic best-response model, but it contains the ingredients for a recursive coach-defense loop. The coach chooses a mix; the defense observes and adapts. The source states: “Suppose the coach chooses just to shoot 3-point shots? Then the defense adapts to that by crowding the 3-point line and making those shots as difficult as possible” [PAGE 3]. That is a level-1 response. A level-2 coach anticipates that crowding and counter-traps by maintaining enough 2-point threat to prevent the defense from overcommitting; a level-3 defense anticipates the counter-trap and protects the paint while still closing the arc. In formal terms, let \(a_t=\alpha_{3,t}\). A simple recursive response system is
\[
a_t=\arg\max_{a\in[0,1]}\operatorname{SR}\!\left(a\mid p_2(a),p_3(a),r,\text{defense}_{t-1}\right),
\]
where \(\text{defense}_{t-1}\) is the opponent’s best response to the coach’s prior mix. This is fictitious play, not a one-shot optimization.

Crisis habit regression is the failure mode in which high leverage or late-clock pressure collapses the mix back to a prior habit:
\[
a_t=(1-\lambda_t)a_t^{*}+\lambda_t a_{\text{habit}},
\qquad
\lambda_t=\lambda_0+\lambda_1\,\mathbf{1}_{\text{clutch}}+\lambda_2\,\mathbf{1}_{\text{late clock}}.
\]
The paper gives indirect support for risk aversion under stakes: professional golfers show loss aversion and football coaches avoid fourth-down risk even when the expected-value calculation favors aggression [PAGE 3]. It also says the 3-point shot introduced “a new and risky choice for coaches and players” [PAGE 3]. So the testable crisis prediction is not “teams shoot fewer 3s” in general; it is that \(a_t\) deviates from the within-season efficient \(a_t^{*}\) in high-leverage states, after controlling for changes in \(p_3\). If late-clock 3-point accuracy falls, the deviation may be rational; if the deviation remains after conditioning on \(p_3\), it is habit regression.

The counter-trap is to make the opponent’s adaptation costly. If the defense crowds the arc because it expects habit regression to 3-point volume, the coach can attack the paint; if the defense protects the paint because it expects a counter-trap, the coach can revert to the arc. The clock layer is separate: the shot clock and game clock change the time available to generate a shot, and the paper notes that the 1954 shot clock “quickly changed the pace of the game, increasing scoring and ending stalling tactics” [PAGE 1]. A late-clock model must let \(p_2,p_3\) vary with seconds remaining; otherwise the optimizer treats a forced shot as if it were a free-flowing one. The verifiable recursive prediction is: in high-leverage late-clock possessions, the residual deviation of \(\alpha_3\) from \(\operatorname{SR}\)-optimal should be positive for habit regression only if it survives controls for shot quality, player identity, and opponent defensive rating. If the residual vanishes once \(p_3\) is conditioned on clock, then the “crisis” is not a psychological habit but a physical shot-quality shift.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer can veto the model whenever the geometry changes without a corresponding parameter update. The source fixes the NBA 3-point distance as “23′ 9″ away from the basket excepting in the corners of the basketball court, where the distance is shorter (22 feet)” and notes the 1994–97 exception [PAGE 5]. Because a corner 3 is physically shorter, a team’s aggregate \(p_3\) and \(\sigma_3\) depend on its corner-3 share. If the corner share shifts materially, the model’s \(p_3\) estimate is not transferable. Veto condition: if the fraction of 3-point attempts from the shorter corner arc changes by more than a pre-registered threshold and the model does not re-estimate \(p_3,\sigma_3\), the efficient-mix prediction is invalid. This is a physical-geometry veto, not a statistical preference.

The biomechanical layer vetoes the assumption of constant shot probabilities under fatigue. A longer shot requires more force and a higher release arc; repeated high-intensity jumping and late-game fatigue should reduce \(p_3\) more than \(p_2\) if the biomechanical cost scales with distance. The source does not estimate a fatigue term, so the correct adjudication is: the paper’s core result is valid for season-aggregate, rested, indoor play; it is not a within-game fatigue model. Veto proof: if back-to-back games, overtime, or high-minute rotations produce a statistically significant differential decline in \(p_3\) relative to \(p_2\), then a constant-\(p\) efficient mix is misspecified for that game state. A simple test is \(\Delta p_3-\Delta p_2<0\) with a confidence interval excluding zero; if confirmed, the optimizer must use state-dependent \(p_3(F)\) and \(\sigma_3(F)\), where \(F\) is a fatigue index. The paper’s own distinction between season-level shot distributions and within-game behavior supports this boundary: it says the analysis is over “a series of possessions such as a game or a season” and is not asking “on any particular possession, what type of shot a team should attempt” [PAGE 2].

The weather layer is a veto only by exclusion. The source uses NBA indoor data and contains no weather variable; therefore any weather-based adjustment is an out-of-model prior and cannot be used to override the paper’s operators without new data. Indoor arena temperature, humidity, and air flow could in principle affect ball grip and shooting touch, but the paper does not estimate them. The adjudication is: weather is not a valid cross-layer input for this source; if an external analysis introduces weather, it must first show a measured effect on \(p_2,p_3,\sigma_2,\sigma_3,r\) and then re-run the SR optimization. Otherwise the weather claim is vetoed as unsupported. The same logic applies to travel and altitude: they may proxy fatigue, but they are not in the source’s parameter set. Physical and biomechanical variables can veto the model; weather, as given here, cannot enter it.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — covariance ablation and sample-size normalization. Pre-register a held-out test from 1995–2014. Compute two efficient 3-point shares each year: one using the estimated cross-team correlation \(r\), and one imposing independence \(r=0\), as the paper does when it compares “Actual versus optimal 3-point proportions (independence condition)” [PAGE 8]. Score each against the actual league 3-point share by out-of-sample MAE and by directional hit rate. Also normalize \(n\) to a common value or replace \(p(1-p)/n\) with a posterior predictive variance, because otherwise SR scales with sample size. Prediction: the estimated-\(r\) efficient share should have lower MAE than the independence baseline, consistent with the paper’s claim that the gap under independence widens as mixed strategy becomes more important [PAGE 8]. Veto: if \(\Delta\mathrm{MAE}\ge 0\) or the bootstrap interval includes zero, the covariance mechanism is not verifiably improving prediction; if SR loses predictive power after \(n\)-normalization but SML slopes retain it, then veto SR as a standalone operator while retaining SML.

Scenario 2 — rule-change natural experiment. Use the 1994–95 through 1996–97 line shortening as a pre-registered shock. The source says the closer line “reduced” 3-point variance and “increased” expected points, and that teams “immediately started shooting significantly more 3-point shots”