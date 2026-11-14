---
source: "Strategies_for_Pulling_the_Goalie_in_Hoc.md"
folder: "/GSE-Research/sports-research-papers/md/randoms"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3808
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source text (a paper about pulling the goalie in hockey). I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- No fake toy equations. Use real equations from the paper (Poisson, Exponential, Bayesian hierarchical model, MCMC, etc.) with proper units.
- Cite page markers [PAGE N] and verbatim quotes where source pages provided. The text has page numbers embedded (1-27). I should reference them like [PAGE 4], etc.
- Word count >= 1000 across sections. THINK_TRACE alone >=400 words.
- XML sections exactly as named.

Let me structure the response.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to discuss the simulation model, exponential waiting times, Bayesian constrained estimation, MCMC, the 25 game situations, constraints in Table 3, home-ice fraction f=0.95, scenario analysis (A-D), Table 8 season impact, gray zones (QMJHL vs NHL, proprietary λ estimates not released, small sample for 6-on-4 etc., exponential assumption breakdown when penalties expire or goals cluster, shootout p=0.5 assumption, "optimality is misguided" because complete strategy space is infinite, current strategy conservatism, etc.).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- X_i ~ Exp(λ_{i,s}) where λ in goals/minute or penalties/minute. Mean 1/λ minutes.
- Poisson(n_{is}^h θ_{is}) etc.
- θ_is ~ Gamma(a_s, b_s) or similar hierarchical.
- f ~ Uniform(0,1), posterior mean 0.95.
- Constraints: max(λ_6-on-5, λ_4-on-4) ≤ λ_5-on-4 ≤ min(λ_6-on-4, λ_4-on-3). [PAGE 16]
- Table 2 sample mean times: 5-on-5 road goal 28.6 min, home goal 26.2 min; 6-on-5 road goal 8.5 min, home goal 3.1 min; etc. [PAGE 11]
- ANP = (2 n_2 + 1 n_1 + 0 n_0)/M. Points values 0,1,2. [PAGE 14]
- M = 150 million simulated games, CI half-length < 1.96/√M. [PAGE 19]
- Exponential assumption and Poisson process justification. [PAGE 12-13]
- Penalty expiration: if all five random variables > 2.0, penalty expires. [PAGE 13]
- Shootout Bernoulli p=0.5. [PAGE 14]

RETROCAUSAL_GENEALOGY: Morrison (1976) flaw, Morrison & Wheat (1986), Erkut (1987), Nydick & Weiss (1989), Washburn (1991) dynamic programming, Berry (2000) exponential, Zaman (2001) Markov chain 7 states, this paper extends Berry (2000). Multi-week traps: coaches sticking to conventional wisdom (1 minute for 1-goal deficit, 1:30 for 2-goal), media/fan pressure, results-oriented evaluation despite sensible strategy, evolutionary copying (Lewis 2006 blind side). Page citations.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (coaches fall back to current strategy under pressure), counter-trap (pulling goalie earlier especially on power-play, even shorthanded in some scenarios), clock (time remaining as state variable, 3 min vs 1:30 thresholds, 12:22 left in scenario D). Discuss Patrick Roy example, QMJHL vs NHL scoring rates. Page citations.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is tricky because hockey is indoor, weather is not a direct factor (arena climate controlled). But physical layer: ice time < 1 minute shifts due to exhaustive fast-paced style [PAGE 2], goaltender replacement mechanics, 6-on-5 empty net vulnerability, penalty expiration mechanics, overtime 4-on-4, shootout. Biomechanical: player fatigue (shifts <1 min), goalie reaction to extra attacker. Weather: indoor arena, negligible; however home-ice crowd/referee influence (Remark #2 11:10 penalty ratio) is a socio-physical veto layer. Need to be careful not to invent fake equations. State assumptions: arena controlled temperature/humidity, ice quality affects puck movement but not modeled; no weather veto because indoor. Physical veto: empty-net goal rates (every 3.1 min home, 8.5 road in 6-on-5 [PAGE 11]) can overwhelm scoring benefit.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
R = Replay? RLVR = Reinforcement Learning from Verifiable Rewards? Or just "RLVR counterfactual vetoes". I need 3 scenarios that are verifiable (can be checked against data or simulation logic) and predictions.
Scenario 1: If a road team trails by 1 with 3:00 left at 5-on-5 and pulls goalie immediately (all-in until tied), ANP = 0.2527 vs current 0.2045 [PAGE 20 Table 4]. Veto: if league scoring rates drop such that 6-on-5 scoring rate no longer exceeds 5-on-5 by sufficient margin (constraint breakdown), the all-in strategy is vetoed. Prediction: under current 2007-08 rates, all-in dominates; under lower scoring environment (e.g., dead-puck era), the benefit shrinks and current strategy may be preferable.
Scenario 2: Home team trailing by 2 with 6:00 left at 5-on-5. Strategy 1 (aggressive) ANP = 0.0798 vs current 0.0512 [PAGE 21 Table 5]. Veto: if home team is shorthanded for the next 2:00, pulling goalie during shorthanded play is vetoed because empty-net risk while down two men is catastrophic; Table 5 strategy 1 excludes shorthanded pulling. Prediction: ANP improvement of ~0.0286 points/game translates to ~2.3 points over 82 games (0.0286*82 = 2.3452). Actually Table 8 shows bigger season effects.
Scenario 3: Scenario D (Patrick Roy) trailing by 3 with 12:22 left, 5-on-3 power-play. Strategy 2 (Roy-like) ANP = 0.0614 vs strategy 1 (pull until tied) ANP = 0.0761 [PAGE 22 Table 7]. Veto: QMJHL scoring rates are higher than NHL, so waiting longer is recommended; in NHL context Roy's move was good, but in QMJHL it may be premature. Prediction: if QMJHL scoring rate λ scales up by factor κ > 1, the optimal pull time shifts later; the exact break-even requires QMJHL-specific λ_s which are unavailable (gray zone).

Need to ensure no betting lines. No mention of odds, spreads, etc.

Need to cite page markers and verbatim quotes. Since I'm generating from the provided text, I can quote and cite pages. The text shows page numbers at bottom/top. I'll use [PAGE N] format.

Word count: Need >=1000 total. THINK_TRACE >=400. I'll aim for ~1500+ total to be safe.

Let's draft carefully.

THINK_TRACE (>=400 words): I'll write a dense multi-hop derivation.

Start: The paper models NHL games as a continuous-time Markov jump process with 25 game situations... Each situation s has five exponential clocks X_1..X_5 with rates λ_{i,s} in events per minute. Mean waiting time 1/λ minutes. The process is memoryless, so after any event the clock resets. Penalty expiration is deterministic after 2 minutes unless a goal ends minor penalty early; simulation approximates by checking if all X_i > 2.0 [PAGE 13].

Bayesian layer: goals scored by team i in situation s ~ Poisson(n_{is} θ_{is}) [PAGE 15 Eq 2]. Home/away ratio f constant across situations; f ~ Uniform(0,1), posterior mean 0.95 [PAGE 18]. Team effects θ_is drawn from population Gamma(a_s, b_s) with hyperparameters empirical Bayes [PAGE 15]. Constraints imposed logically: e.g., scoring rate must increase with skater advantage. Table 3 constraints [PAGE 16]. MCMC samples full conditionals, rejecting draws violating constraints [PAGE 17].

Gray zones: (1) λ estimates proprietary, not released [PAGE 17], so external validation impossible; (2) exponential assumption may break down when goals arrive in clusters or when line changes induce non-Poisson dependence; (3) sample mean times for rare situations like 6-on-4 are based on only 55.9 minutes [PAGE 11 Table 2], high posterior variance; (4) QMJHL vs NHL scoring rates differ, so Roy's QMJHL decision cannot be directly ported [PAGE 22]; (5) "optimality" is ill-defined because the strategy space is effectively infinite [PAGE 6]; the paper evaluates only a finite list of plausible strategies. (6) The shootout is modeled as fair coin flip p=0.5, ignoring team-specific shootout talent [PAGE 14].

That's plenty of words.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with LaTeX and page cites.

RETROCAUSAL_GENEALOGY: Morrison 1976 flaw [PAGE 4], Morrison & Wheat 1986 correction [PAGE 4], Erkut 1987 unequal strengths [PAGE 4], Nydick & Weiss 1989 situational rates [PAGE 4], Washburn 1991 DP and "scoring first is neither necessary nor sufficient" [PAGE 4], Berry 2000 exponential and missing NHL data on pulled goalie [PAGE 5], Zaman 2001 7-state Markov chain [PAGE 5]. Multi-week traps: conventional wisdom thresholds (1 min / 1:30) [PAGE 20], result-oriented media pressure [PAGE 25], evolutionary copying [PAGE 25], Lewis 2006 blind side analogy [PAGE 25].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: coaches revert to current strategy under pressure [PAGE 20]. Counter-trap: pull earlier, especially on power-play; scenario D Roy's move validated in NHL [PAGE 22]. Clock: time remaining as state, 3:00 and 1:30 thresholds [PAGE 20], 1:54 shorthanded scenario C [PAGE 21]. Theory of mind: coach must model opponent's likely response; if both teams adopt aggressive strategies, advantage dissipates [PAGE 25].

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: shifts <1 min due to fatigue [PAGE 2]; 6-on-5 empty net concedes goals every 3.1 min (home) / 8.5 min (road) [PAGE 11 Table 2]; penalty draw rate increases when goalie pulled (1:2 ratio) [PAGE 11 Remark #6]. Biomechanical: goalie pull changes shooting angles and defensive coverage; not explicitly modeled but captured in λ_s. Weather: none—indoor arena; home-ice advantage is captured by f=0.95 and penalty differential 11:10 [PAGE 10 Remark #2], but no outdoor weather variables enter the simulator. Veto proof: The model assumes no simultaneous goalie pulls and never fewer skaters than opponent [PAGE 8]; if either assumption is violated by rule change, the model breaks down. Ice temperature/humidity held constant; not a veto factor.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.

I need to be careful with "verifiable". I can say they are verifiable against the published Tables 4-8 and the model assumptions.

Let's write it all out. Ensure word count.

I will now produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The simulator in Beaudoin and Swartz treats an NHL game as a continuous-time, finite-state Markov jump process over m = 25 game situations [PAGE 8]. At any instant, five exponential clocks race: road goal, home goal, road minor penalty, home minor penalty, and offsetting minors [PAGE 12]. If X_i ~ Exp(λ_{i,s}) with λ in units of events per minute, then E[X_i] = 1/λ_{i,s} minutes, and the next event is argmin_i X_i. After a goal, penalty, or expiration, the state s updates and the clocks are reset, preserving the memoryless property. This is the direct extension of Berry (2000), which the authors cite as relying on the exponential time-between-goals hypothesis [PAGE 12].

The estimation layer is hierarchical and constrained. Goals for team i in situation s are modeled as X_{is} ~ Poisson(n_{is} θ_{is}), where n_{is} is minutes of exposure and θ_{is} is the team-situation scoring rate [PAGE 15]. Team effects are drawn from a league-wide population indexed by situation-specific hyperparameters a_s and b_s, with empirical-Bayes hyperpriors set from sample scoring rates [PAGE 15]. A single home-ice fraction f scales road versus home rates; f ~ Uniform(0,1) and the posterior mean is f̂ = 0.95 [PAGE 18]. Because raw sample rates can violate logical ordering (e.g., 5-on-3 should score faster than 5-on-4), the posterior is constrained: max(λ_{6-on-5}, λ_{4-on-4}) ≤ λ_{5-on-4} ≤ min(λ_{6-on-4}, λ_{4-on-3}) [PAGE 16]. The MCMC sampler draws from full conditionals and rejects any λ_s violating its constraint [PAGE 17].

Gray zones are substantial. First, the λ posterior means are proprietary and not released [PAGE 17], so an external auditor cannot reproduce the exact ANP rankings without re-running the constrained MCMC. Second, rare-situation exposure is thin: 6-on-4 road-team data rest on only 55.9 minutes [PAGE 11, Table 2], inflating posterior standard deviations exactly where decisions are most aggressive. Third, the exponential assumption may break down under goal clustering, line-change fatigue, or strategic stoppages; the paper itself notes shifts are typically under one minute because of the exhaustive pace [PAGE 2]. Fourth, scenario D concerns the QMJHL, where scoring rates are higher than the NHL; the paper explicitly states Roy’s 12:22 pull “cannot be supported in the QMJHL context until we obtain scoring and penalty rates from this league” [PAGE 22]. Fifth, optimality is declared “somewhat misguided” because the complete strategy space—every combination of score, time, skaters, and penalty state—is effectively infinite [PAGE 6]; the paper therefore evaluates only a finite menu of plausible rules rather than a true dynamic-programming optimum. Sixth, the shootout is modeled as Bernoulli(p = 0.5), suppressing team-specific shootout talent [PAGE 14]. Seventh, the 2007-2008 season is the sole calibration window; parameter drift across eras is not modeled. These gray zones bound any claim of universal optimality: the results are conditional on the stated Bayesian priors, the 2007-08 NHL rate environment, and the exponential/Poisson mechanics.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and page-cited breakdown.

State space and clocks [PAGE 12-13]:
Let s ∈ {1,...,25} index the game situation (a-on-b skaters). For each s define five waiting times in minutes:
X_{1,s} ~ Exp(λ_{1,s}) road-team goal,
X_{2,s} ~ Exp(λ_{2,s}) home-team goal,
X_{3,s} ~ Exp(λ_{3,s}) road-team minor penalty,
X_{4,s} ~ Exp(λ_{4,s}) home-team minor penalty,
X_{5,s} ~ Exp(λ_{5,s}) offsetting minors.
Units: λ has dimension [events·min⁻¹]; E[X_{i,s}] = 1/λ_{i,s} [minutes]. The realized next event is i* = argmin_i X_{i,s}. If a minor penalty is called and all five X_{i,s} exceed 2.0 minutes, the penalty expires and the state reverts to 5-on-5 [PAGE 13].

Goal-count model and Bayesian hierarchy [PAGE 15]:
X_{is}^{(h)} ~ Poisson(n_{is}^{(h)} θ_{is}) for home goals,
X_{is}^{(r)} ~ Poisson(n_{is}^{(r)} f θ_{is}) for road goals,
where n is exposure minutes, θ_{is} is the team-situation rate, and f is the constant home/away scoring ratio. Team rates θ_{is} are drawn from a situation-level population with hyperparameters a_s, b_s; hyperparameters α_{a_s}, β_{a_s}, α_{b_s}, β_{b_s} are empirical-Bayes calibrated to sample scoring rates [PAGE 15]. Prior: f ~ Uniform(0,1) [PAGE 18].

Logical constraints [PAGE 16]:
For the 12 situations with both goaltenders present, parameters are constrained from above by parameters to the left/above and from below by parameters to the right/below in Table 3. Example:
max(λ_{6-on-5}, λ_{4-on-4}) ≤ λ_{5-on-4} ≤ min(λ_{6-on-4}, λ_{4-on-3}).
A separate constraint set applies to the 8 situations where the opponent has no goaltender [PAGE 16].

Posterior computation [PAGE 17]:
Full conditionals for f and θ_{is} are sampled directly; a_s and b_s use Metropolis-within-Gibbs within a constrained Gibbs sampler. Any proposed λ_s violating its Table 3 constraint is resampled. Outputs: posterior means and standard deviations of λ_s; posterior standard deviations grow with λ magnitude and shrink with exposure minutes [PAGE 17].

Home-ice estimate [PAGE 18]:
Posterior mean f̂ = 0.95; road-team λ values are scaled by 0.95 in the simulator.

Empirical event times from 2007-08 NHL data [PAGE 11, Table 2]:
5-on-5: road goal mean 28.6 min; home goal mean 26.2 min.
6-on-5 (road goalie pulled): road goal mean 8.5 min; home (empty-net) goal mean 3.1 min.
6-on-4: goal mean 5.1 min (road); empty-net goal mean 5.6 min (home).
Penalty draw when goalie pulled: 44 penalties on pulling team vs. 84 on opponent over 652.4 minutes, approximately 1:2 [PAGE 11, Remark #6].

Objective function [PAGE 14, 19]:
ANP = (2·n_2 + 1·n_1 + 0·n_0) / M, where n_2 wins, n_1 overtime/shootout losses (1 point), n_0 regulation losses (0 points). y_i ∈ {0,1,2}. With M = 150 million simulated games, the 95% CI half-length is < 1.96 / √M because max(s²) ≤ 1²/(M−1), giving precision typically to three decimal places [PAGE 19].

Shootout [PAGE 14]:
Bernoulli(p = 0.5); no home/road advantage modeled.

Scenario definitions [PAGE 19-20]:
A: road team trails by 1 with 3:00 left, 5-on-5.
B: home team trails by 2 with 6:00 left, 5-on-5.
C: home team trails by 1 with 1:54 left, shorthanded 4-on-5.
D: road team trails by 3 with 12:22 left, 5-on-3 power-play with 2:00 and 1:16 on the penalty clocks.

Breakdown regimes: exponential clock independence fails under non-Poisson goal clustering; small-n situations (6-on-4, 4-on-6) have high posterior variance; QMJHL vs. NHL scoring-rate mismatch invalidates direct parameter transfer; simultaneous goalie pulls are forbidden by assumption [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The literature genealogy begins with Morrison (1976), which compared pulling at time t against never pulling and thereby omitted later pull times t_1 > t; Morrison and Wheat (1986) corrected this and derived the optimal pull time for equal-strength teams under a proportional scoring-rate assumption [PAGE 4]. Erkut (1987) generalized to unequal team strengths [PAGE 4]. Nydick and Weiss (1989) challenged the proportional assumption and recommended situational rates constant across teams [PAGE 4]. Washburn (1991) introduced dynamic programming and warned that “scoring first is neither necessary nor sufficient for victory,” solving via a recursive equation [PAGE 4]. Berry (2000) assumed exponential goal times and noted the NHL does not publish goals scored while a goalie is pulled [PAGE 5]. Zaman (2001) used a seven-state Markov chain (Goal A, Shot A, Zone B, Neutral, Zone A, Shot B, Goal B) and recommended pulling when trailing by one with five to eight minutes left depending on puck location [PAGE 5]. Beaudoin and Swartz extend Berry (2000) by adding penalties, home-ice advantage, overtime/shootouts, distinct situation-specific rates, and constrained Bayesian MCMC estimation [PAGE 5].

Multi-week traps: NHL coaches conventionally pull at roughly one minute when down by one and 1:30 when down by two, regardless of situation except shorthanded play [PAGE 20]. This “current strategy” is outcome-evaluated by media and fans even when analytically sensible [PAGE 25]. Because coaches face intense pressure, they regress to conservative habits week after week. The paper notes an evolutionary dynamic: if all teams adopt improved strategies, the advantage vanishes, mirroring the left-tackle innovation chronicled in Lewis (2006) [PAGE 25]. The recursive trap is that a coach cannot condition on a future pull time t_1 if the state may change before then; optimality must be defined over a finite list of pre-planned rules rather than a complete contingent plan [PAGE 6].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock structure.

Crisis habit regression: under time pressure, coaches revert to the current strategy (pull at ~1:00 or 1:30) because deviation invites second-guessing after a bad outcome, even when the ex ante decision is favorable [PAGE 20, 25]. This is a principal-agent problem: the coach’s career risk is asymmetric, so conservative failure is socially cheaper than aggressive failure.

Counter-trap: the simulation shows aggression dominates. In scenario A, pulling until tied yields ANP = 0.2527 versus current-strategy 0.2045 [PAGE 20, Table 4]. In scenario C, with only 1:54 left and shorthanded, the all-in pull-until-tied rule yields ANP = 0.0771 versus current-strategy 0.0512 [PAGE 21, Table 6]. In scenario D, Patrick Roy’s QMJHL 5-on-3 pull at 12:22 corresponds to a strategy that beats never pulling and the current strategy in the NHL calibration, though a stricter “pull until tied” rule still dominates it [PAGE 22, Table 7]. The counter-trap is therefore: pull earlier, pull on power-plays, and in some scenarios pull even while shorthanded.

Clock: time remaining is a continuous state variable, not a fixed threshold. Scenario A re-evaluates at 3:00; scenario B at 1:30; scenario C starts at 1:54. The optimal policy is a function of (score differential, time, skater count, penalty state), which is why a single clock rule cannot be universally optimal [PAGE 6]. Theory of mind enters because both teams use the same simulator; if both adopt aggression, the first-mover advantage erodes over a season (Table 8 shows only 1.0 to 1.5 extra points over 82 games) [PAGE 23-24].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer: games are played indoors, so outdoor weather exerts no direct veto on the simulator; arena temperature and humidity are held constant and are not model inputs. The sole environmental effect modeled is home-ice advantage, summarized by f̂ = 0.95 and by the penalty differential—road teams drew penalties at an 11:10 ratio versus home teams (5,433 to 4,939) [PAGE 10, Remark #2]. This is a referee/crowd socio-physical layer rather than meteorology.

Biomechanical layer: shifts are typically under one minute because of the exhaustive, fast-paced style [PAGE 2]. Pulling the goalie replaces a specialized defender with an extra skater, changing shooting lanes, defensive coverage, and empty-net exposure. Empirically, 6-on-5 play yields a goal for the pulling team every 8.5 minutes (road) but concedes an empty-net goal every 3.1 minutes when the home goalie is pulled [PAGE 11, Table 2]. This asymmetric empty-net risk is the physical veto: if the opponent’s empty-net scoring rate rises above the pulling team’s 6-on-5 scoring rate, the strategy flips sign. The constrained Bayesian model enforces logical ordering of λ_s precisely to prevent such inversions in estimation [PAGE 16].

Veto conditions and breakdown: (1) The model forbids simultaneous goalie pulls and forbids pulling when it yields fewer skaters than the opponent [PAGE 8]; any rule change permitting either breaks the state space. (2) The 2:00 minor-penalty clock and the approximation “if all five X_i > 2.0, penalty expires” [PAGE 13] break down if major penalties (5 minutes) or double-minors become common; the paper omits 4- and 5-minute penalties as rare [PAGE 9]. (3) If scoring rates shift regime (e.g., dead-puck era), the exponential means from 2007-08 no longer apply and the ANP rankings may invert. (4) QMJHL scoring rates exceed NHL rates, so a pull time optimal in one league is a veto in the other until local λ_s are estimated [PAGE 22].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios and predictions.

Veto scenario 1 (scoring-rate regime shift): Verifiable condition: if league-wide 6-on-5 scoring intensity λ_{6-on-5} falls to at or below the 5-on-5 intensity λ_{5-on-5} for either team, the necessary condition for pulling (Remark #4, [PAGE 10]) fails. Prediction: under a lower-scoring NHL regime where the 6-on-5 advantage disappears, the all-in rule in scenario A (ANP 0.2527 vs. current 0.2045 [PAGE 20, Table 4]) is vetoed, and the current conservative timing becomes weakly preferable. The simulator can re-verify this by re-running scenario A with λ_{6-on-5} constrained ≤ λ_{5-on-5}.

Veto scenario 2 (shorthanded empty-net exposure): Verifiable condition: in scenario B (home team down 2 with 6:00 left, 5-on-5), if the home team incurs a penalty and must play shorthanded while trailing by two, pulling the goalie creates a 5-on-4 empty-net exposure (home goalie pulled vs. 4 skaters). Table 5’s best strategy explicitly excludes pulling while shorthanded [PAGE 21, Table 5]. Prediction: if a coach ignores this veto and pulls while shorthanded down by two, the expected empty-net goals against (rate ~1 per 5.6 to 6.0 minutes in 4-on-6 / 5-on-6 cells, [PAGE 11, Table 2]) will dominate the marginal scoring gain, reducing ANP below the current-strategy baseline of 0.0512.

Veto scenario 3 (QMJHL vs. NHL transfer): Verifiable condition: scenario D occurred in the QMJHL, where scoring rates are higher than the NHL; the paper states Roy’s decision “cannot be supported in the QMJHL context until we obtain scoring and penalty rates from this league” [PAGE 22]. Prediction: if QMJHL λ_s are uniformly scaled up by factor κ > 1 relative to NHL posterior means, the optimal pull time in scenario D shifts later than 12:22 because the expected goal arrival rate under 5-on-3 rises faster than the empty-net risk justifies early exposure. The break-even pull time is not identifiable from the published NHL λ_s alone; it requires QMJHL-specific constrained MCMC estimation [PAGE 15-17].
</RLVR_COUNTERFACTUAL_VETOES>