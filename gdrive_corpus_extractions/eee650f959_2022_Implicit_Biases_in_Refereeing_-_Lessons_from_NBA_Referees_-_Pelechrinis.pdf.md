---
source: "2022 Implicit Biases in Refereeing - Lessons from NBA Referees - Pelechrinis.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 10
model: deepseek/deepseek-v4.1-flash-1017
words: 8142
---

<NATIVE_REASONING>
We need answer as GSE + GSI Frontier Reasoning Foundry. Need follow invariants. Need produce exact XML sections with >=1000 words total, THINK_TRACE >=400 words. No betting lines/odds. Need analyze source pages with exact citations [PAGE N] verbatim quotes. Need not mention spreads/totals/moneylines/odds. Need formal LaTeX, units, assumptions, singularity/breakdown regimes. Need retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication physical/biomechanical/weather veto proof, RLVR counterfactual vetoes 3 scenarios predictions.

We need infer task? User gives drive source and source text. They likely expect deep analysis of paper. We need synthesize. We must not provide betting advice. Need focus on implicit biases in NBA refereeing. Need cite exact [PAGE N] markers and verbatim quotes. Need include operators/equations formal. Need derive. We need ensure no betting lines. Avoid even "point spread" etc. We can mention scoring margin? Paper says games within 5 points. Is that a betting line? It's not line, but maybe avoid. We can mention "within five points" from source? Could be construed? Invariant says never mention spreads, totals, moneylines, odds. "within 5 points" is not a betting line, but to be safe we can cite as "close games defined by source as within five points" maybe okay. Avoid "home court advantage points" from Sagarin? It mentions 2.74 points; could be interpreted as margin, not betting line. We can mention but maybe not necessary. No odds.

Need produce rigorous critique. We need analyze paper:
- Home bias wg = β - δ.
- β = number INC when committing home + IC when committing visitor. δ = INC when committing visitor + IC when committing home.
- Simulate decisions based on precision/recall by violation type. Precision = CC/(CC+IC), recall = CC/(CC+INC). Decision boundaries for r: IC/(IC+INC+CC), (IC+INC)/(sum), 1. Need units: counts, probability dimensionless. net whistle gain count per game/season? They say situations. Need state assumptions: exchangeability under null, base rates stable within violation type, independent calls, no CNC, no ref identity in L2M, etc.
- Meta-test binomial: P = sum_{p=r}^M C(M,p) α^p(1-α)^(M-p). Assumption tests uncorrelated, α=0.05. Breakdown when tests correlated, small N, multiple comparisons, selection top percentile, nonstationarity, zero-inflation.
- Racial bias Δτ = τ_diff - τ_same, tech fouls per 48 min. Simulate ref call rate and recipient weighted by playing time. Distribution. p ~ 33% for Δτ>0.0022. Breakdown: low counts 0.0204 vs 0.0182 per 48 min, 5419 techs, 92% white/Black, 3.6% missing refs, only personal technicals, no foul calls. Need caution.

Need "retrocausal genealogy": historical/scientific lineage: Price & Wolfers 2010, Pope Price Wolfers 2018, Mocan & Osborne-Christenson 2022, Chen et al gambler's fallacy, Moskowitz & Wertheim impact aversion, Schirrmeister heuristics, Slovic affect heuristic, Huther & Kleiner judge assignment. Multi-week traps: publication awareness reduces bias; COVID empty arenas and coach challenge confounds; L2M CNC definition drift 6.4 to 14 per game; seasonal changes; selection of players top 10%; multiple testing; use of technical fouls as proxy; media narratives; "star bias" not causal. Multi-week traps maybe "trap" in research design: treating L2M as random sample, ignoring CNC, pooling seasons, using wrong denominator, omitted referee identity, home bias conflated with crowd/coach challenge/COVID.

Need "Recursive theory of mind": crisis habit regression vs counter-trap vs clock. Interpret as referee decision under time pressure: split-second heuristics, home crowd, star players, affect heuristic; crisis habit regression means under high stress revert to heuristics (home/star). Counter-trap: awareness/coach challenge/review reduces bias; "clock" as time pressure and L2M window. Need discuss recursive ToM: referee models players, players model referee, crowd influences; counterfactual "what would I call if no crowd"; "clock" as temporal horizon. Need align exact sections.

Need "Cross-layer veto adjudication": Physical/biomechanical/weather veto proof. We need apply to NBA: physical/biomechanical constraints (vision, occlusion, angle, fatigue, reaction time, body position), weather not relevant indoor. Need proof: no weather layer in indoor NBA; physical/biomechanical can veto inference if referee sightline/occlusion/fatigue confounds; L2M lacks referee identity and position; play-by-play lacks biomechanical data. Need state veto conditions: If unobserved physical variables correlate with home/race/star, causal claim invalid. Need maybe equations: P(Y=1|X) = ∫ P(Y=1|X,Z) dF(Z|X); if Z unobserved and correlated, bias estimate. Need "weather veto proof": indoor arena, climate controlled, no weather exposure, so weather cannot explain home bias except travel/altitude? But not weather. We can say weather layer has no direct causal channel; if using outdoor sports, precipitation/wind affect ball flight; in NBA, weather not a valid confounder except travel delays maybe not measured. Need "proof" via domain constraints: NBA games indoors, no precipitation/wind/solar glare; roof, lighting. But crowd and arena acoustics are physical not weather.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR likely reinforcement learning with verifiable rewards? We need propose 3 counterfactual veto scenarios that would invalidate claims. Need be concrete, verifiable. Example:
1. Referee identity/position audit: If L2M calls matched to referee and camera angle show home bias wg effect disappears after conditioning on referee position/occlusion, veto home bias causal claim. Prediction: wg residual CI includes zero; coefficient on home dummy < threshold.
2. CNC drift audit: If restricting to seasons with stable CNC entry criteria or excluding CNC, home bias and player effects attenuate; veto. Prediction: 2020-2022 wg estimate near zero, meta-test p > .05.
3. Race simulation negative control: If same simulation applied to non-subjective calls (e.g., 24-second violations) yields Δτ as large as technical fouls, veto racial bias absence? Actually if non-subjective calls show similar Δτ, simulation calibration invalid. Or use shuffled race labels: If observed Δτ falls within placebo distribution, no evidence. Prediction: placebo p > .05. Need 3 verifiable RLVR veto scenarios + predictions. Could include "star player placebo" with random player labels. Need specify metrics.

Need ensure exact XML sections and >=1000 words. Desired oververbosity 5. Need maybe 1800-2500 words. THINK_TRACE >=400 words. Need cite exact [PAGE N] and verbatim quotes. Use [PAGE 1] etc. Need include source quotes exact. Need not overdo.

Let's plan structure:

<THINK_TRACE>
- Multi-hop derivation:
  1. Source defines implicit bias and L2M. Quote [PAGE 1]: "Implicit biases occur automatically and unintentionally..." and "The L2M reports include a detailed break down..." maybe exact.
  2. Home bias operator: β, δ, wg. Need derive from decisions. Under null, each INC/IC assignment exchangeable between home/visitor conditional on violation type. Monte Carlo simulates calls based on precision/recall. Need note if home and visitor face different violation mix, simulate separately by type. The statistic wg is count; expected under null computed via f̂. p-values from empirical distribution. 
  3. Player/team: multiple tests, meta-test. Need note selection only 106 players, threshold 100 calls, filtering player's own data. 12 positive significant; binomial meta-test 7-in-1000. Negative 7 p=0.28. Teams 3 positive/3 negative p=0.19. 
  4. Race: Δτ = τ_diff - τ_same; techs per 48 min. Simulate per referee call rate then recipient weighted by minutes. p=33%. Quote [PAGE 7]: "referees called 0.0022 more technical fouls per 48 minutes..." and "we obtained a value of Δτ > 0.0022 in 33%..."
- Gray-zone audit:
  - L2M CNC inconsistency: quote [PAGE 2] "during the 2015 season there were 6.4 CNC entries per game, while during the 2022 season there were almost 14 CNC entries per game." This means CNC excluded.
  - Missing referee identity in L2M: quote [PAGE 2] "the L2M reports do not have information with regards to which referee made the call." Race uses techs because of this.
  - Only 3% foul calls incorrect vs 12% non-calls: quote [PAGE 2] "only 3% of the foul calls (a total of 210) is incorrect." "1,399 for approximately 12% of all fouls". This affects power and proxy.
  - Home bias reduction confounded by COVID and coach challenge: quote [PAGE 6] "NBA finished the 2020 season in a bubble with no fans..." and "introduction of coaches challenge". Need state not causal.
  - Player bias not team: star composition but not all stars. Quote [PAGE 7] "the composition ... points to a bias towards 'star' players. Nevertheless, given the fact that there are other star players that do not experience the same net benefit..." 
  - Race: technical fouls are rare, 1 per 450 games; not statistically significant. Quote [PAGE 7] "1 more technical foul per 450 games approximately."
- Need state threshold for "almost eliminated": Table 2 p=0.49 both 2020-2022 wg-E=8.94 (0.02%). But no odds. Fine.
- Include exact equations maybe in source section.

Need ensure no "betting lines". Avoid "home court advantage points" maybe can mention "Sagarin ratings" without value? But source has 2.74/1.75 points. To avoid any "points" as line? It's not betting. But we can omit.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX equations:
  - β_h = N_INC(commit=h) + N_IC(commit=a), δ_h = N_INC(commit=a) + N_IC(commit=h), wg_h = β_h - δ_h. Units: counts (dimensionless integer), per game or season. Under null E[wg_h]=0 if exchangeable. The empirical p = Pr_{f̂}(wg* ≥ wg_obs) or two-sided.
  - Precision π_v = CC_v/(CC_v+IC_v), recall ρ_v = CC_v/(CC_v+INC_v). Note these are probabilities in [0,1]. Decision boundaries: r~U(0,1); if r< IC/(IC+INC+CC) -> IC; if in [IC/S, (IC+INC)/S) -> INC; else CC. S=IC+INC+CC. This is per violation type v. Assumption: counts positive; if denominator 0 or sparse, boundary undefined -> breakdown. Need mention Bayesian average alternative [PAGE 8] quote "an alternative is to use the Bayesian average for the decision boundaries."
  - Meta-test P_meta = sum_{p=r}^M binom(M,p) α^p(1-α)^{M-p}. Units probability. Assumptions independence, fixed α, all M tests valid. Breakdown: correlated tests due to shared players/teams/seasons/referees; selection on top percentile; α not calibrated; effect heterogeneity.
  - Race: τ_same = T_same / (48 * player-minutes? Actually per 48 mins). Need define: τ_g = N_tech,g / (48 * M_g)?? Let's be precise. They say technical fouls per 48 mins called from referees to opposite race players: 0.0204, same 0.0182. So τ_g = (number of technical fouls by refs on players of group g) / (total player-minutes of group g with those refs) * 48? Or per 48 min. Need define with exposure E_g in player-minutes. τ_g = 48 * N_g / E_g, units techs per 48 player-minutes. Δτ = τ_diff - τ_same, units techs per 48 player-minutes. Null Δτ=0. Simulation: for each referee, estimate call rate λ_r = techs per game; draw Bernoulli(λ_r) for game; if yes, choose recipient among players with probability proportional to minutes. Then compute Δτ* distribution. p = Pr(Δτ* ≥ 0.0022) = 0.33. Assumptions: exchangeability of players within race conditional on minutes; no position/role/behavior; low counts; 92% Black/white; missing refs 3.6%.
  - Could include causal estimand: Δ_home = E[Y|home]-E[Y|away] but not identifiable due to unobserved referee. Maybe no.
  - Singularity/breakdown regimes: denominators zero; sparse violation types with N small (table has many N<20) causing noisy base rates; nonstationarity; correlated tests; race group composition; technical foul rarity; L2M selection only close games; CNC definition drift. Need exact singularity: if CC+IC+INC=0 for a violation type, simulation boundary is 0/0 undefined; if no exposure E_g=0, τ undefined. If no same-race or diff-race exposure, Δτ undefined. If tests perfectly correlated, binomial meta-test invalid; if M small, no power. If home/away violation mix differs, need type-specific simulation; otherwise Simpson's paradox.

<RETROCAUSAL_GENEALOGY>
- Lineage:
  - Price & Wolfers 2010 found opposite-race crews more fouls [PAGE 1] quote: "players get called for more fouls when officiated by an opposite-race crew..." 
  - Pope, Price, Wolfers 2018 revisit: bias before publication, gone after; awareness reduces bias [PAGE 1] quote: "during the first period there was still a significant racial bias ... while this bias was no longer present in the second period."
  - Mocan & Osborne-Christenson 2022: no biases for incorrectly called fouls, in-group biases for non-called fouls [PAGE 1].
  - Chen et al gambler's fallacy in baseball umpires [PAGE 1]; Moskowitz & Wertheim impact aversion [PAGE 1]; Schirrmeister et al heuristics [PAGE 1]; Slovic affect heuristic [PAGE 5].
  - Huther & Kleiner judge assignment [PAGE 9] quote maybe.
- Multi-week traps:
  - Publication/awareness: bias may decline after study; one-shot audit not stable.
  - COVID empty arenas and coach challenge confound [PAGE 6].
  - L2M CNC drift; don't use CNC [PAGE 2].
  - Technical foul proxy for race: rare, subjective, but only personal techs; excludes non-calls; no referee identity in L2M [PAGE 2].
  - Multiple testing and meta-test assumptions.
  - "Star" bias: composition of significant players but not all stars; do not overgeneralize.
  - Playoff vs regular season; home bias more pronounced playoffs [PAGE 6].
  - Data matching inconsistencies: "several inconsistencies among the two datasets, particularly with regards to the game clock" [PAGE 2]. Need quote.
  - Season 2020 bubble no fans; 2021 empty arenas; fans limited midseason; playoffs closer to capacity [PAGE 6]. This means 2020-2022 is not clean no-crowd period.
- Avoid betting.

<RECURSIVE_THEORY_OF_MIND>
- Need discuss crisis habit regression vs counter-trap vs clock.
- Define model: referee decision D_t = f(S_t, H_t, C_t, R_t, ε_t) where S=stimulus, H=habit/heuristic, C=crowd/context, R=recursive beliefs about players/teams. Under time pressure, habit weight increases. Crisis habit regression: high stress/ambiguity increases reliance on home/star/affect heuristics. Counter-trap: awareness, replay, coach challenge, L2M public accountability can override habit. Clock: last two minutes, split-second, clock pressure; L2M window is selected on clock and closeness, so estimates are local to high-pressure. Recursive ToM: referee anticipates player reactions; players anticipate referee tendencies; crowd models referee; referee models crowd. Star players may receive benefit because referees expect star to be fouled? Or because star complaints influence? Need not overclaim. Need counter-trap: if referee knows bias, may overcorrect; public L2M may create accountability; coach challenge provides counterfactual review. Clock: "clock" as both temporal pressure and selection window. Need state predictions: home bias should be larger in playoffs (higher stress) [PAGE 6], smaller in empty arenas (reduced social pressure) [PAGE 6], player effects positive only (star/affect) [PAGE 7], no race effect due to awareness or low base rate [PAGE 7]. But be careful: race no evidence not proof of absence; power low.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto proof:
  - NBA indoor, weather not operative. Weather veto: no precipitation, wind, solar glare; arena climate control; only travel/altitude maybe, not weather. So weather cannot explain home/race/star bias. But if travel fatigue affects referee, not weather. Need state "weather layer vetoes outdoor inference but is non-identifiable in NBA; absence of weather variation is a design strength, not a confound."
  - Physical/biomechanical: referee position, angle, occlusion, reaction time, fatigue, visual acuity, distance. These can cause missed calls and incorrect calls. L2M lacks referee identity/position; play-by-play has referee for technicals but no biomechanics. Need equations: observed decision D = g(P, V, B, ε), where P physical sightline, V violation type, B biomechanical state. If P correlates with home/race/star, then E[wg|home] includes physical channel. Veto condition: if adding P/B covariates reduces effect to null, causal implicit-bias interpretation vetoed. Need "proof" via necessary condition: For home bias to be attributable to implicit bias, conditional independence D ⟂ Home | V, P, B, Referee must fail; but data cannot test because P,B unobserved. Therefore inference is associational, not mechanistic. This is a veto. For race, need same: if referee-player race correlates with assignment to positions/minutes/behavior, Δτ confounded. But simulation controls racial composition and minutes, not behavior. Veto if technical fouls are provoked by player behavior correlated with race; then Δτ not bias. Need mention 92% white/Black and 3.6% missing.
  - Weather proof: indoor arena eliminates direct weather; but if arena roof leaks? No. We can say no weather covariate needed; any weather claim is non-identifiable and should be vetoed.
  - Cross-layer adjudication: physical layer vetoes strong causal claims; statistical layer can still report association. Need exact quotes: [PAGE 2] "L2M reports do not have information with regards to which referee made the call"; [PAGE 3] play-by-play provides referee for technical fouls; [PAGE 8] "These base rates might be noisy when we have very little data points..." Use.

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable scenarios:
  1. Referee-position/occlusion audit: Match L2M calls to referee and camera geometry. Metric: residual home wg after conditioning on distance/angle/occlusion and referee fixed effects. Prediction: if residual 95% interval includes 0 and effect size <0.2 count/game, veto home-bias causal claim. If not, pass.
  2. CNC-definition drift and season-stability audit: Re-estimate home and player effects excluding CNC and using only seasons with stable CNC entry rates (e.g., 2018-2022) and Bayesian averaged boundaries. Prediction: home 2015-2019 effect remains positive with p<0.05; 2020-2022 p>0.05; player positive meta-test p<0.01. If home effect vanishes in stable period, veto season-pooled claim. For player, if top positive set changes by >50%, veto.
  3. Placebo/negative-control race and star audit: Randomly permute race labels and player identities within same minutes/positions; recompute Δτ and player wg. Prediction: observed Δτ=0.0022 below 95th percentile of placebo (p>0.05) and observed 12 positive players exceed placebo count (p<0.001). If observed Δτ exceeds placebo 95th percentile, veto "no racial bias"; if observed positive count not above placebo, veto player bias. Need maybe separate scenarios. They want 3 verifiable RLVR veto scenarios + predictions. Could combine. Need be precise and verifiable.

Need ensure no betting lines. Avoid "home court advantage" maybe okay? It's not betting. But "home court advantage" is a sports term, not line. We can mention but no odds. Avoid "moneyline" etc.

Need include citations exact. Use [PAGE 1] etc. We need quote verbatim. Ensure exact text from source. We can copy. Need not overquote. But need cite exact markers. Could include quotes in each section.

Need maybe mention "This manuscript is for review purposes only."? Not needed.

Need write answer with XML tags exactly. We can include LaTeX. Need total >=1000 words. Likely 2000. Need THINK_TRACE >=400 words. We'll count mentally. Need not include markdown outside XML? User asks exact XML sections. We can output only XML sections. Use all tags. No extra. Need ensure tags match: <RETROCAUSAL_GENEALOGY>, <RECURSIVE_THEORY_OF_MIND>, <CROSS_LAYER_VETO_ADJUDICATION>, <RLVR_COUNTERFACTUAL_VETOES>. The last tag in prompt has typo? It says <RLVR_COUNTERFACTUAL_VETOES> then closing? Actually opening <RLVR_COUNTERFACTUAL_VETOES> and no closing? We'll use proper closing </RLVR_COUNTERFACTUAL_VETOES>. Need include <SOURCE_OPERATORS_AND_EQUATIONS>. Good.

Need ensure "ZERO BETTING LINES" — don't mention "point spread", "total", "moneyline", "odds". Avoid "p-value" not odds. Fine.

Let's draft carefully.

Start with <THINK_TRACE>. Need at least 400 words. We'll write ~700. Include derivation and audit. Use [PAGE] citations. Need exact quotes. Good.

Need include "CROSS_LAYER_VETO_ADJUDICATION" section with physical/biomechanical/weather veto proof. Need "proof" maybe formal. We'll state a necessary-condition proof.

Need "RLVR" maybe define as "reward-verifiable counterfactual veto" not required. We'll call "RLVR-style verifiable counterfactual". Good.

Potential issue: "GSE + GSI Frontier Reasoning Foundry" maybe expects answers in specific style. We'll be rigorous.

Let's formulate equations:

Home:
\[
\beta_h = N_{\mathrm{INC}}(c=h)+N_{\mathrm{IC}}(c=a),\quad
\delta_h=N_{\mathrm{INC}}(c=a)+N_{\mathrm{IC}}(c=h),\quad
wg_h=\beta_h-\delta_h.
\]
Units: counts per game/season. Under null \( \mathbb{E}_{0}[wg_h]=0\) conditional on violation type and exposure. Empirical p:
\[
p_h=\Pr_{\hat f_{wg}}(|wg_h^*|\ge |wg_h^{\mathrm{obs}}|).
\]

Sim:
\[
S_v=IC_v+INC_v+CC_v,\quad
r\sim U(0,1).
\]
Boundaries as above. Need mention if \(S_v=0\) singular. If \(CC_v+IC_v=0\) precision undefined; if \(CC_v+INC_v=0\) recall undefined. Breakdown.

Meta:
\[
P_{\rm meta}=\sum_{p=r}^{M}\binom{M}{p}\alpha^p(1-\alpha)^{M-p}.
\]
Units probability. Assumptions.

Race:
\[
\tau_g = \frac{48 N_g}{E_g},\quad \Delta\tau=\tau_{\rm diff}-\tau_{\rm same}.
\]
Units techs per 48 player-minutes. \(E_g\) total player-minutes. Null \(\Delta\tau=0\). Simulation p = Pr(Δτ* ≥ 0.0022)=0.33. Need mention observed from source [PAGE 7].

Need maybe include "precision and recall rates" formal:
\[
\pi_v=\frac{CC_v}{CC_v+IC_v},\quad \rho_v=\frac{CC_v}{CC_v+INC_v}.
\]
Units dimensionless.

Need "singularity/breakdown regimes":
- \(S_v=0\): simulation boundary undefined.
- \(E_g=0\): race rate undefined.
- \(CC_v+IC_v=0\) or \(CC_v+INC_v=0\): precision/recall undefined.
- \(M\) small or correlated tests: binomial meta-test invalid.
- Nonstationary CNC entry criteria: [PAGE 2] quote.
- L2M lacks referee identity: [PAGE 2] quote.
- Technical foul rarity: [PAGE 7] quote.
- Missing referee demographics: 3.6% games [PAGE 7].
- Only close games, last two minutes: selection.

Need maybe include "source operators" with exact quotes:
- [PAGE 1] "Implicit biases occur automatically and unintentionally and are particularly present when we have to make split second decisions."
- [PAGE 1] "The L2M reports include a detailed break down of the events that took place during the last 2 minutes of close games, defined as games within 5 points."
- [PAGE 2] "the L2M reports do not have information with regards to which referee made the call."
- [PAGE 2] "only 3% of the foul calls (a total of 210) is incorrect."
- [PAGE 2] "there are more incorrect non-calls when it comes to fouls (a total of 1,399 for approximately 12% of all fouls)"
- [PAGE 2] "during the 2015 season there were 6.4 CNC entries per game, while during the 2022 season there were almost 14 CNC entries per game."
- [PAGE 6] "the home court referee bias appears to have disappeared during these seasons!"
- [PAGE 6] "The NBA finished the 2020 season in a bubble with no fans, and started the 2021 season in empty arenas."
- [PAGE 6] "introduction of coaches challenge"
- [PAGE 7] "there are 12 players that exhibit a statistically significant positive net whistle gain"
- [PAGE 7] "the probability of all of these 7 instances being false positives is non-negligible and equal to 28%."
- [PAGE 7] "the probability that all of these cases are false positives, is non-negligible as well (19%)."
- [PAGE 7] "referees called 0.0022 more technical fouls per 48 minutes to players of the opposite race as compared to players the same race as them."
- [PAGE 7] "we obtained a value of Δτ > 0.0022 in 33% of the cases"
- [PAGE 8] "an alternative is to use the Bayesian average for the decision boundaries."
- [PAGE 8] "These base rates might be noisy when we have very little data points for a given type of violation."
- [PAGE 9] "Huther and Kleiner [2] by analyzing bankruptcy filings between 2010-2020 found that judge assignment is predicted by the lending decisions of hedge funds." Maybe quote exact? It says "Huther and Kleiner [2] by analyzing bankruptcy ﬁllings between 2010-2020 found that judge assignment is predicted by the lending decisions of hedge funds." Use maybe.

Need "retrocausal genealogy" include "Pope, Price, and Wolfers [6]" etc. Use exact quotes.

Need "RECURSIVE_THEORY_OF_MIND" include crisis habit regression vs counter-trap vs clock. Need maybe define:
- Crisis habit regression: under high time pressure and ambiguity, decision policy \(D_t\) has heavier weight on habitual/affective cues \(H_t\): \(D_t=1[\sigma(\theta_0+\theta_H H_t+\theta_C C_t+\theta_R R_t+\epsilon_t)>0]\), with \(\theta_H\) increasing as available time decreases. This isn't fake ratio; it's a formal logistic. Units: latent utility dimensionless. Assumptions. Breakdown: if \(H_t\) unobserved.
- Counter-trap: public L2M, replay, coach challenge, awareness can shift \(\theta_H\) downward; but counter-trap can overcorrect. 
- Clock: L2M window selects last two minutes; clock pressure increases variance; home/playoff effects larger. Need quote [PAGE 6] playoffs. 
- Recursive ToM: \(R_t\) beliefs about player/team expectations; star players may benefit because referee anticipates contact or reputation; but not all stars [PAGE 7]. 
- Need mention "crisis habit regression" as "crisis habit regression vs counter-trap vs clock" in that exact wording. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": formal necessary condition:
Let \(D\) be decision, \(X\) protected/context variable (home/race/star), \(V\) violation type, \(P\) physical sightline/biomechanical, \(B\) referee body state, \(W\) weather. Causal implicit-bias effect \(\tau = E[D(1)-D(0)]\). Observed association \(\alpha = E[D|X=1]-E[D|X=0]\). If \(\alpha \ne 0\) but \(E[D|X,V,P,B,W]\) has no X effect, then \(\alpha\) is confounded. Veto if conditioning on P/B reduces effect. For weather, \(W\) has no support variation indoor; if \(P(W)\) constant, cannot explain. Need mention "weather veto proof": In NBA, \(W\) is constant/irrelevant, so \(W\) cannot be a confounder; any weather-based explanation is non-identifiable. But "proof" maybe too strong; state "domain proof". 
- Physical/biomechanical: referee angle/occlusion can produce false negatives; not random across home/away if crowd? Actually crowd may affect referee position? Not likely. But physical variables could correlate with player size/position, which may correlate with race/star. Need veto. 
- Use quote [PAGE 2] L2M no referee identity; [PAGE 3] play-by-play has ref for technicals. Thus race analysis can condition on referee but not position. 
- Need mention "weather" not in source; we can state "The source provides no weather variable; NBA is indoor." This is not a quote but logical.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. Need make them "verifiable" with metrics and predictions. Could be:
1. Referee-position conditioning veto.
2. Temporal stability/CNC-definition veto.
3. Placebo-label veto.
Need include predictions with specific p-thresholds and effect sizes. Avoid "odds". Use "95% interval", "p<0.05" not odds. Good.

Need maybe mention "No betting lines" but not state "no betting lines" because that mentions? The invariant says never mention betting lines. We can simply avoid.

Need final answer with XML sections. Need no preamble. Let's write.

Need ensure total word count. We'll aim ~2500 words. Let's draft in sections.

Potential concern: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." Our equations are from source or formal logistic. Fine. "Force/Fatigue" not used.

Need "information/probability units" - mention bits? We can mention probabilities dimensionless, counts, techs per 48 player-minutes. Maybe "information units: nats/bits not used; p-values are probabilities." Fine.

Need "SI units" - counts and minutes. We can state "time in minutes; rates per 48 player-minutes." Good.

Need exact page citations. Use [PAGE 1] etc. For quotes, ensure verbatim. I need check exact quote: Page 1 abstract: "Implicit biases occur automatically and unintentionally and are particularly present when we have to make split second decisions." Exact? Source: "Implicit biases occur automatically and unintentionally and are particularly present when we have to make split
second decisions." Yes line break. We can quote with "split second" and cite.
Page 1: "The L2M reports include a detailed break down of the events that took place during the last 2 minutes of close games, deﬁned as games within 5 points." Yes. 
Page 2: "the L2M reports do not have information with regards to which referee made the call." Exact? It says "the L2M reports do not have information with regards to which referee made the call." Yes.
Page 2: "only 3% of the foul calls (a total of 210) is incorrect." Exact? Source: "only 3% of the foul calls (a total of 210) is incorrect." Yes.
Page 2: "there are more incorrect non-calls when it comes to fouls (a total of 1,399 for approximately 12% of all fouls)" exact? It says "while there are more incorrect non-calls when it comes to fouls (a total of 1,399 for approximately 12% of all fouls)" yes.
Page 2: "during the 2015 season there were 6.4 CNC entries per game, while during the 2022 season there were almost 14 CNC entries per game." Exact? It says "In fact, during the 2015 season there were 6.4 CNC entries per game, while during the 2022 season there were almost 14 CNC entries per game." Yes.
Page 6: "the home court referee bias appears to have disappeared during these seasons!" Exact? It says "As we can see from Table 2 the home court referee bias appears to have disappeared during these seasons!" Yes.
Page 6: "The NBA ﬁnished the 2020 season in a bubble with no fans, and started the 2021 season in empty arenas." Exact? It says "The NBA ﬁnished the 2020 season in a bubble with no fans, and started the 2021 season in empty arenas." Yes.
Page 6: "introduction of coaches challenge" exact? It says "One other change that took place during the 2020 season, was the introduction of coaches challenge, where a coach can contest one call per game." We can quote "introduction of coaches challenge". Good.
Page 7: "there are 12 players that exhibit a statistically signiﬁcant positive net whistle gain" exact? It says "there are 12 players that exhibit a statistically signiﬁcant positive net whistle gain (at the 5% signiﬁcance level)." Good.
Page 7: "the probability of all of these 7 instances being false positives is non-negligible and equal to 28%." Exact? It says "However, the probability of all of these 7 instances being false positives is non-negligible and equal to 28%." Good.
Page 7: "the probability that all of these cases are false positives, is non-negligible as well (19%)." Exact? It says "However, the probability that all of these cases are false positives, is non-negligible as well (19%)." Good.
Page 7: "referees called 0.0022 more technical fouls per 48 minutes to players of the opposite race as compared to players the same race as them." Exact? It says "So overall, referees called 0.0022 more technical fouls per 48 minutes to players of the opposite race as compared to players the same race as them." Yes.
Page 7: "we obtained a value of ∆τ > 0.0022 in 33% of the cases" exact? It says "In our simulations, we obtained a value of ∆τ > 0.0022 in 33% of the cases" yes.
Page 8: "an alternative is to use the Bayesian average for the decision boundaries." Exact? It says "Nevertheless, an alternative is to use the Bayesian average for the decision boundaries." Yes.
Page 8: "These base rates might be noisy when we have very little data points for a given type of violation." Exact? It says "These base rates might be noisy when we have very little data points for a given type of violation." Yes.
Page 1: "players get called for more fouls when ofﬁciated by an opposite-race crew as compared to when being ofﬁciated by a same-race crew." Exact? Source: "found that on average players get called for more fouls when ofﬁciated by an opposite-race crew as compared to when being ofﬁciated by a same-race crew." We'll quote phrase.
Page 1: "during the ﬁrst period there was still a signiﬁcant racial bias in calling fouls, while this bias was no longer present in the second period." Exact? Yes.
Page 1: "did not ﬁnd any biases with regards to incorrectly called fouls, but there were signiﬁcant in-group biases with regards to non-called fouls." Exact? Source: "did not ﬁnd any biases with regards to incorrectly called fouls, but there were signiﬁcant in-group biases with regards to non-called fouls." Good.
Page 1: "baseball umpires exhibit the gambler’s fallacy in the call of pitches, showing a negative auto-correlation in their calls of consecutive ambiguous pitches" exact? Yes.
Page 1: "impact aversion, which is essentially a bias towards doing nothing" exact? It says "This is a result of another cognitive shortcut, namely, impact aversion, which is essentially a bias towards doing nothing." Good.
Page 5: "affect bias/heuristic" quote? It says "which, is an instance of the affect bias/heuristic [10]." Good.
Page 9: "Huther and Kleiner [2] by analyzing bankruptcy ﬁllings between 2010-2020 found that judge assignment is predicted by the lending decisions of hedge funds." Exact? Yes. Use maybe.

Need "retrocausal genealogy" maybe include "retrocausal" means how future findings revise past. We can discuss publication effect: Pope et al. found bias before publication and not after; this is a retrocausal loop: research changes behavior. Also L2M reports may change referee behavior. Need mention "multi-week traps": if you run a study after awareness, you may find null and incorrectly conclude bias never existed. That's a retrocausal trap. Good.

Need "Recursive theory of mind" maybe more philosophical. We'll write.

Need "Cross-layer veto adjudication" maybe include table? No need.

Let's write final only XML. Use no markdown? XML can contain LaTeX. Fine.

Need ensure no "odds" word. We can mention "probability" and "p-value". Good.

Need check "betting lines" not mentioned. We won't.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source is an observational study of NBA refereeing that combines Last Two Minutes (L2M) reports with play-by-play technical-foul data. The first multi-hop step is to separate the paper’s three estimands: (i) home-versus-away net whistle gain, (ii) player/team-specific net whistle gain, and (iii) same-race versus different-race technical-foul call rates. The paper defines the L2M window as “the last 2 minutes of close games, defined as games within 5 points” [PAGE 1], and it explicitly warns that “the L2M reports do not have information with regards to which referee made the call” [PAGE 2]. That missing referee identifier is a structural limit: home and player/team analyses can be run on L2M decisions, but race analysis must switch to play-by-play technical fouls because those records include the calling referee. The paper states this switch: play-by-play data “provide information for the referee calling it and of course the player receiving it” [PAGE 3].

The home-bias derivation is count-based. For the home team, whistle benefit is incorrect non-calls favoring the home side plus incorrect calls against the visitor; whistle detriment is the reverse. The net whistle gain is their difference. Under the null, if home and visiting teams are exchangeable conditional on violation type and exposure, the expected net gain is zero. The paper does not rely on a normal approximation; it simulates decisions using violation-specific precision and recall. Precision is \(CC/(CC+IC)\) and recall is \(CC/(CC+INC)\) [PAGE 3], so the simulation preserves the “difficulty” of the violation mix a team faces. This is important because the source reports large heterogeneity: “almost none of the defensive 3 seconds violations is being called in the last 2 minutes of close contests (low recall), while about 15% of traveling calls are incorrect (precision \(\approx 85\%\))” [PAGE 3]. A naïve pooled simulation would therefore mix violation types and could manufacture or erase a home effect.

The player/team analysis is a multiple-testing problem. The source reports “there are 12 players that exhibit a statistically significant positive net whistle gain” [PAGE 7], but also that the negative-direction result is fragile: “the probability of all of these 7 instances being false positives is non-negligible and equal to 28%” [PAGE 7]. For teams, “the probability that all of these cases are false positives, is non-negligible as well (19%)” [PAGE 7]. The key audit point is that the binomial meta-test assumes independent tests; player tests are not obviously independent because players share teams, referees, seasons, and playoff exposure. The paper’s “star” interpretation is also explicitly cautious: the significant-player composition “points to a bias towards ‘star’ players,” yet “there are other star players that do not experience the same net benefit” [PAGE 7]. Thus the safe inference is a positive player-specific association, not a proven star-status causal mechanism.

The race analysis uses personal technical fouls because foul-call errors are rare and referee identity is unavailable in L2M. The paper notes “only 3% of the foul calls (a total of 210) is incorrect” while “there are more incorrect non-calls when it comes to fouls (a total of 1,399 for approximately 12% of all fouls)” [PAGE 2]. Technicals are more subjective and include a referee identifier, but they are rare. The observed race gap is “0.0022 more technical fouls per 48 minutes” [PAGE 7], and the simulation finds “a value of \(\Delta\tau > 0.0022\) in 33% of the cases” [PAGE 7], so the observed gap is not statistically distinguishable from the null. The gray-zone is that a null result with rare events is not proof of no bias; it is a power-limited non-rejection. Also, the L2M CNC category is not stable: “during the 2015 season there were 6.4 CNC entries per game, while during the 2022 season there were almost 14 CNC entries per game” [PAGE 2]. Any analysis that treats CNC entries as a fixed sampling frame is therefore invalid. The home-bias decline after 2020 is confounded with the pandemic and rule changes: “The NBA finished the 2020 season in a bubble with no fans, and started the 2021 season in empty arenas” [PAGE 6], and the same season saw the “introduction of coaches challenge” [PAGE 6]. The source itself says “the home court referee bias appears to have disappeared during these seasons!” [PAGE 6], but that is a temporal association, not an isolated causal effect of crowd absence. Finally, the simulation remains sensitive to sparse cells: “These base rates might be noisy when we have very little data points for a given type of violation” [PAGE 8], and the paper suggests “an alternative is to use the Bayesian average for the decision boundaries” [PAGE 8]. Those are the principal derivation and audit paths.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define the home-team net whistle gain as a count-valued operator. Let \(c\in\{h,a\}\) denote committing side, \(N_{\mathrm{INC}}(c)\) the number of incorrect non-calls by committing side, and \(N_{\mathrm{IC}}(c)\) the number of incorrect calls by committing side. Then
\[
\beta_h=N_{\mathrm{INC}}(c=h)+N_{\mathrm{IC}}(c=a),\qquad
\delta_h=N_{\mathrm{INC}}(c=a)+N_{\mathrm{IC}}(c=h),
\]
\[
wg_h=\beta_h-\delta_h.
\]
Units: counts per game, season, or pooled sample; \(wg_h\) is dimensionless as an integer count. The null is \(\mathbb{E}_{0}[wg_h]=0\) conditional on violation type and exposure. The empirical p-value is
\[
p_h=\Pr_{\hat f_{wg}}\left(|wg_h^{*}|\ge |wg_h^{\mathrm{obs}}|\right),
\]
where \(\hat f_{wg}\) is the Monte Carlo distribution. The paper’s source definition is: “The net whistle gain for the home team is simply \(wg=\beta-\delta\)” [PAGE 3]. Assumptions: exchangeability of home and away sides under the null, stable base rates within violation type, independent events conditional on type, and no informative selection from the L2M window. Breakdown: if home and away teams face different violation mixes and the simulation pools types, the estimate is confounded; if \(\hat f_{wg}\) is generated from a nonstationary process, the null distribution is wrong.

The simulation uses violation-specific precision and recall:
\[
\pi_v=\frac{CC_v}{CC_v+IC_v},\qquad
\rho_v=\frac{CC_v}{CC_v+INC_v},
\]
where \(CC_v,IC_v,INC_v\) are counts for violation type \(v\). Both are probabilities in \([0,1]\). Let
\[
S_v=IC_v+INC_v+CC_v.
\]
For each simulated event of type \(v\), draw \(r\sim U(0,1)\) and apply
\[
\text{IC if }0\le r<\frac{IC_v}{S_v},\qquad
\text{INC if }\frac{IC_v}{S_v}\le r<\frac{IC_v+INC_v}{S_v},\qquad
\text{CC if }\frac{IC_v+INC_v}{S_v}\le r\le 1.
\]
This is the source’s decision-boundary rule [PAGE 3–4]. Singularities: if \(S_v=0\), the boundary is \(0/0\) and undefined; if \(CC_v+IC_v=0\), precision is undefined; if \(CC_v+INC_v=0\), recall is undefined. Sparse violation types with tiny \(N\) produce noisy boundaries; the paper notes “These base rates might be noisy when we have very little data points for a given type of violation” [PAGE 8] and suggests “the Bayesian average for the decision boundaries” [PAGE 8]. A second breakdown is nonstationarity of CNC: “during the 2015 season there were 6.4 CNC entries per game, while during the 2022 season there were almost 14 CNC entries per game” [PAGE 2], so CNC cannot be treated as a stable denominator.

For multiple testing, let \(M\) be the number of tests, \(\alpha\) the per-test false-positive rate, and \(r\) the number of significant tests. The paper uses
\[
P_{\mathrm{meta}}=\sum_{p=r}^{M}\binom{M}{p}\alpha^p(1-\alpha)^{M-p}.
\]
Units: probability. Assumptions: independent tests, fixed \(\alpha\), valid nulls, and no selection on the same data. The source reports \(r=12\) positive player tests and a “7-in-1,000 chance that all of these 12 instances are false positives” [PAGE 6–7], but the negative-direction and team tests are not significant at the meta level: 28% and 19% respectively [PAGE 7]. Breakdown: correlated tests due to shared teams/referees/seasons violate the binomial independence assumption; selecting the top 10th percentile by exposure also induces selection effects; and heterogeneity in \(\alpha\) across violation types invalidates a single \(\alpha\).

For race, define
\[
\tau_g=\frac{48\,N_g}{E_g},\qquad
\Delta\tau=\tau_{\mathrm{diff}}-\tau_{\mathrm{same}},
\]
where \(N_g\) is the number of personal technical fouls called on players of race group \(g\), \(E_g\) is total player-minutes of exposure for that group with the relevant referees, and \(\tau_g\) is technical fouls per 48 player-minutes. Units: technical fouls per 48 player-minutes. The null is \(\Delta\tau=0\). The source reports \(\tau_{\mathrm{diff}}-\tau_{\mathrm{same}}=0.0022\) technical fouls per 48 minutes [PAGE 7]. The simulation draws a referee’s game-level technical-foul call, then assigns the recipient with probability proportional to playing time [PAGE 5]. The observed value is not significant: “we obtained a value of \(\Delta\tau > 0.0022\) in 33% of the cases” [PAGE 7]. Singularities: \(E_g=0\) makes \(\tau_g\) undefined; if a race group has no same-race or different-race exposure, \(\Delta\tau\) is undefined; if technical fouls are too rare, the Bernoulli simulation has low power. Additional breakdown: only 92% of referees and players are white or African American [PAGE 7], 3.6% of games lack complete referee information [PAGE 7], and technical fouls are a selected, subjective proxy rather than a general foul-call measure.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage runs through the racial-bias controversy in NBA officiating. Price and Wolfers found that “players get called for more fouls when officiated by an opposite-race crew as compared to when being officiated by a same-race crew” [PAGE 1]. Pope, Price, and Wolfers then revisited the question and found “during the first period there was still a significant racial bias in calling fouls, while this bias was no longer present in the second period” [PAGE 1]. That is a retrocausal loop: the earlier publication changed awareness, and the later null cannot be read as proof that bias never existed. Mocan and Osborne-Christenson “did not find any biases with regards to incorrectly called fouls, but there were significant in-group biases with regards to non-called fouls” [PAGE 1]. The present paper extends that lineage by using L2M decisions for home and player/team effects and technical fouls for race.

The cognitive genealogy is also explicit. The paper cites baseball umpires who “exhibit the gambler’s fallacy in the call of pitches, showing a negative auto-correlation in their calls of consecutive ambiguous pitches” [PAGE 1], and umpires who show “impact aversion, which is essentially a bias towards doing nothing” [PAGE 1]. The race mechanism is framed as “an instance of the affect bias/heuristic” [PAGE 5]. The broader lesson is that split-second decisions recruit heuristics; the paper opens with “Implicit biases occur automatically and unintentionally and are particularly present when we have to make split second decisions” [PAGE 1]. The judicial analogy is also genealogical: the paper warns that “Huther and Kleiner [2] by analyzing bankruptcy filings between 2010-2020 found that judge assignment is predicted by the lending decisions of hedge funds” [PAGE 9]. The transfer claim is not that referees and judges are identical, but that institutional assignment and review rules can either expose or mask bias.

The multi-week traps are several. First, publication/awareness can attenuate the phenomenon being studied, so a later null is not a historical null. Second, the 2020–2022 window is not a clean “no-crowd” experiment: “The NBA finished the 2020 season in a bubble with no fans, and started the 2021 season in empty arenas” [PAGE 6], and fans returned at limited capacity midseason. Third, the “introduction of coaches challenge” [PAGE 6] is a simultaneous institutional change; attributing the home-bias decline solely to crowd absence is unsupported. Fourth, L2M CNC definitions drift, so pooling CNC entries across seasons is a trap; the source documents the 6.4-to-14 per-game shift [PAGE 2]. Fifth, technical fouls are rare and subjective; a null race result may reflect low power, not absence of bias. Sixth, the player/team meta-test is vulnerable to correlated tests and selection on exposure. Seventh, the “star” narrative is tempting but the paper itself notes that not all stars show the effect [PAGE 7]. The defensible genealogy is therefore a sequence of associational findings under changing institutions, not a fixed natural constant.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the referee’s latent decision utility at time \(t\) as
\[
U_t=\theta_0+\theta_H H_t+\theta_C C_t+\theta_R R_t+\theta_T T_t+\varepsilon_t,
\]
where \(H_t\) is habitual/heuristic cue strength, \(C_t\) is crowd/context pressure, \(R_t\) is the referee’s recursive belief about player/team expectations, \(T_t\) is clock pressure, and \(\varepsilon_t\) is idiosyncratic noise. The decision is \(D_t=\mathbf{1}[U_t>0]\). Units: latent utility is dimensionless; coefficients are utility weights per unit of cue. This is not a claim that the paper estimated this model; it is a formal way to organize the paper’s mechanisms. “Crisis habit regression” means that as available time shrinks and ambiguity rises, \(\theta_H\) and \(\theta_C\) increase relative to deliberative processing. That predicts larger home effects in high-pressure contexts; the paper indeed finds the home bias is “even more pronounced during the playoffs” [PAGE 2] and reports playoff estimates with stronger significance [PAGE 6–7]. It also predicts that removing crowd pressure should reduce \(\theta_C\); the paper observes that “the home court referee bias appears to have disappeared during these seasons!” [PAGE 6], but that is confounded with the coach challenge and other 2020 changes.

The “counter-trap” is the reflexive correction: public L2M reports, replay, and the coaches challenge create a second-order loop in which referees know their calls are audited, players know referees know, and crowds condition on both. Awareness can reduce bias, as the Pope–Price–Wolfers sequence suggests, but it can also produce overcorrection or strategic behavior. The paper’s institutional discussion of the coaches challenge is a counter-trap example: a coach can contest one call per game, triggering review [PAGE 6]. The “clock” is both a causal pressure and a sampling frame. The L2M window is the last two minutes of close games [PAGE 1], so the estimates are local to high-clock-pressure, high-stakes moments; they do not automatically generalize to the first quarter. The recursive theory of mind also explains why player-specific effects could be positive-only: referees may model star players as likely to absorb contact or as socially costly to whistle against, but the paper’s own caution that “there are other star players that do not experience the same net benefit” [PAGE 7] blocks a simple reputation story. The race null is likewise a recursive equilibrium: if referees are aware of the earlier Price–Wolfers findings, the observed \(\Delta\tau\) may be attenuated; but the technical-foul proxy is too rare to distinguish true absence from awareness-driven suppression.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical/biomechanical layer can veto a strong causal interpretation even when the statistical association is real. Let \(D\) be the call, \(X\) the context variable (home, player identity, race), \(V\) violation type, \(P\) referee position/sightline/occlusion, \(B\) referee biomechanical state (fatigue, reaction time, visual angle), and \(W\) weather. The observed association is
\[
\alpha=\mathbb{E}[D\mid X=1]-\mathbb{E}[D\mid X=0].
\]
A causal implicit-bias reading requires that \(X\) still predicts \(D\) after conditioning on \(V,P,B,W\):
\[
\mathbb{E}[D\mid X=1,V,P,B,W]-\mathbb{E}[D\mid X=0,V,P,B,W]\neq 0.
\]
If the conditional difference collapses to zero, the observed \(\alpha\) is a physical/positional artifact, not an implicit-bias effect. The source cannot fully test this: L2M “do not have information with regards to which referee made the call” [PAGE 2], so referee position and identity are unavailable for home/player L2M analyses. Play-by-play technical fouls do identify the referee [PAGE 3], but they still lack camera geometry, occlusion, distance, and fatigue. Therefore the home and player results are associational; a referee-position audit is a necessary veto test before mechanistic claims.

The biomechanical veto is especially relevant for race because technical fouls are behavioral events. If player behavior, playing style, position, or verbal protest correlates with race and with technical-foul risk, then \(\Delta\tau\) is not a clean referee-bias estimand. The source’s simulation controls for playing time and racial composition [PAGE 5], but not for behavior. The observed gap is tiny: “referees called 0.0022 more technical fouls per 48 minutes to players of the opposite race as compared to players the same race as them” [PAGE 7], and the simulation finds that gap in 33% of null runs [PAGE 7]. A biomechanical/behavioral confound of that size is plausible, so the null should be read as “no detectable race effect under this proxy,” not “no race effect exists.”

The weather veto is cleaner. The NBA is an indoor, climate-controlled setting; the source provides no precipitation, wind, temperature, or solar-glare variable, and no weather channel is modeled. In an outdoor sport, weather could directly alter ball flight, footing, and visibility, and would be a first-order confounder. In this indoor design, \(W\) has no operative variation, so weather cannot explain the home, player, or race associations. The correct cross-layer adjudication is therefore asymmetric: weather is vetoed as a causal channel by domain constraint; physical/biomechanical variables remain live confounders because they are unobserved and plausibly correlated with player identity, position, and referee sightline. The statistical layer can report the associations, but the cross-layer veto blocks strong “referee bias caused this” language until position, occlusion, and behavioral covariates are added.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Referee-position/occlusion conditioning veto. Verifiable test: match each L2M call to the calling referee and to broadcast/camera geometry, then estimate the home net whistle gain \(wg_h\) with and without referee fixed effects, distance-to-play, angle, and occlusion indicators. Prediction: if the home effect survives with a 95% interval excluding zero and an effect size above 0.2 count per game, the implicit-bias interpretation passes; if the effect collapses to an interval containing zero, the home-bias causal claim is vetoed as a sightline/position artifact. This directly addresses the missing-referee limitation in L2M [PAGE 2] and the need to separate physical from cognitive channels.

2. Temporal-stability/CNC-definition veto. Verifiable test: re-estimate the home and player effects on seasons with stable CNC entry criteria, exclude CNC entirely, and replace boundary estimates with Bayesian averages for sparse violation types. Prediction: the 2015–2019 home effect should remain positive and significant, while the 2020–2022 effect should be statistically indistinguishable from zero, matching the source’s reported reduction [PAGE 6–7]. If the home effect vanishes even in the stable pre-2020 window, the pooled home-bias claim is vetoed. For players, if the set of 12 positive players changes by more than half under the stable-window/Bayesian specification, the player-specific claim is vetoed as boundary-noise-driven.

3. Placebo-label/negative-control veto. Verifiable test: permute race labels within the same game, referee, and playing-time strata; recompute \(\Delta\tau\). Separately, permute player identities within the same exposure and team strata; recompute the count of positive net-whistle players. Prediction: the observed race gap of 0.0022 should fall below the 95th percentile of the placebo distribution, consistent with the source’s 33% null exceedance [PAGE 7]; if it exceeds the 95th percentile, the “no racial bias” conclusion is vetoed. The observed 12 positive players should exceed the placebo count at a stringent threshold; if the placebo produces a comparable count, the positive player-specific effect is vetoed. These three counterfactuals are verifiable because each specifies the covariate, the estimand, and a pre-registered decision rule rather than a narrative interpretation.
</RLVR_COUNTERFACTUAL_VETOES>