---
source: "2023 - Analytics, have some humility a statistical view of fourth down decision making - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 4
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4346
---

<NATIVE_REASONING>
The user wants a rigorous, reasoning-foundry-style analysis of the provided NESSIS 2023 paper ("Analytics, have some humility: a statistical view of fourth down decision making" by Ryan Brill and Abraham Wyner). 

Constraints:
1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>

I need to produce all six sections with substantive content. The source text has page markers implicitly (pages 1-28 based on the content). I should cite [PAGE N] where relevant. The source is provided as text with page-like breaks indicated by slide numbers (1, 2, 3... up to 28). I'll treat those as page markers.

Key content from source:
- Value function V(x) for game state x.
- EP (Expected Points) and WP (Win Probability).
- Fourth down decisions: Go, FG, Punt.
- Problem 1: EP models don't adjust for team quality; selection bias; base rates.
- Problem 2: Too many variables, bias-variance tradeoff, overfitting, catalytic priors inspired by Sam Kou's catalytic prior, Laplace smoothing tree ML models.
- Problem 3: Highly autocorrelated data in WP models; ~500,000 plays but effective sample size ~4,000 games.
- WP Simulation: Random Walk football; bootstrapped WP CIs need to be wide (8% WP on average for 90% coverage).
- Boot % for fourth down decisions via randomized cluster bootstrap.
- Examples: CHI @ NYJ Week 12 2022; WAS @ IND Week 8 2022; LV @ LA Week 14 2022.
- Conclusion: humility, team quality, shrinkage, not enough games.

Structure:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the statistical mechanics: value function, Bellman-like recursion implicitly, EP as expectation over next score outcomes, WP as probability of winning, fourth down as discrete action maximizing WP. Then analyze the selection bias: good teams have more plays, score more points, so random draw isn't average team. Team quality metrics (8 metrics). Predictive importance ranking. Catalytic priors. Autocorrelation and effective sample size. Random walk simulation. Bootstrapped CIs. Gray zones: overconfidence in point estimates, coach's discretion vs. strong recommendations. I'll write >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define state space S = (yardline, down, ydstogo, time, timeouts, home, roof, era, team quality covariates). EP model: EP(s) = sum_{o in O} v(o) P(o|s) where O = {TD, FG, safety, ...}. WP recursion: WP(s,a) = E[WP(s') | s,a] with terminal WP=1 if win, 0 if loss. Fourth down policy: pi*(s) = argmax_{a in {Go, FG, Punt}} WP(s,a). Team quality adjustment: q_off, q_def as 8-dimensional vector q = (QB_off, nonQB_off, def_pass, def_run, ...). Catalytic prior: shrinkage towards simpler model; Laplace smoothing for XGBoost leaf weights. Effective sample size: N_eff ≈ 4000 games vs N_plays ≈ 500,000 plays; autocorrelation rho. Bootstrap CI width: average 8% WP for 90% coverage. Breakdown regimes: when N_eff too small to resolve nonlinear interactions; when team quality omitted causing omitted-variable bias; when bootstrap distribution over decisions is diffuse (low boot %). Cite pages.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Romer (2006) instrumental variables [PAGE 4], Burke (2009) linear regression spline [PAGE 4], Yurko et al. (2018) multinomial logistic [PAGE 4], Baldwin (2021) XGBoost [PAGE 4], Sam Kou catalytic prior [PAGE 13], Brian Burke quote [PAGE 13]. Multi-week traps: recursive application of EP models across weeks without adjusting for roster changes/injuries; overfitting to historical play-by-play and deploying in-season; assuming stationarity of team quality across a season. Gray-zone trap: analysts treating point estimates as certain (Examples 1-3 [PAGES 21-27]).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Coach under pressure reverts to conservative punt (crisis habit regression). Counter-trap: analytics model says Go but uncertainty high; coach's discretion. Clock: end-of-game scenarios where time remaining interacts nonlinearly; two-minute drill. Theory of mind: coach models opponent's model; if opponent knows you are risk-averse, they adjust. The paper's "humility" means acknowledging model uncertainty; recursive doubt: I think that he thinks that I am following analytics. [PAGES 21-27].

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Justin Tucker 70-yard FG thought experiment [PAGE 6] - physical limit of kicker range, biomechanical. Weather: neutral conditions assumed but real games have wind, precipitation, roof type (Baldwin includes roof type [PAGE 4]). Team quality is a layer; physical layer: kicker leg strength, snap-hold-kick timing. Veto: if physical layer (e.g., 70-yard FG) has near-zero probability regardless of EP model, veto the analytics recommendation. Exact singularity: distance > max range => P(FG made) ~ 0 => WP(FG) collapses to punt/go value.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable counterfactuals. I'll create 3 scenarios that are verifiable from the paper's logic:
 1. Omitted team quality veto: if offensive QB quality is top decile and defensive opponent is bottom decile, EP model without team quality underestimates Go value; prediction: model without team quality recommends Punt when Go is optimal; verifiable via MAE table (Catalytic 3.744 vs Baldwin no team quality 3.803 [PAGE 14]).
 2. Autocorrelation/effective sample size veto: in late-game, close-score, rare yardline-distance combos, bootstrap CI width > decision margin; prediction: boot % distribution flat across {Go, FG, Punt}; coach's discretion (Example 1 [PAGES 21-22]).
 3. Physical range veto: 70-yard FG attempt (Justin Tucker thought experiment [PAGE 6]); even best kicker has low probability; EP model without physical range constraint might assign nonzero value; veto => Punt or Go; prediction: for distances beyond ~60+ yards, FG expected value collapses nonlinearly due to biomechanical limits.

Need >=1000 words total. Ensure no betting lines. No fake equations like Force/Fatigue. Use formal LaTeX.

Let's draft carefully.

Word count check: THINK_TRACE alone needs >=400 words. Total across all sections >=1000. I'll aim for ~1500-2000 words total.

Citations: [PAGE 1], [PAGE 4], etc.

Let's write.

THINK_TRACE content:
- Start with value function V(x) [PAGE 1].
- Define EP and WP [PAGE 1].
- Fourth down action set A = {Go, FG, Punt} [PAGE 1].
- Model land: state-space vs statistical [PAGE 2].
- EP model table [PAGE 4].
- Team quality omitted variable bias: selection bias [PAGES 7-8]. Good teams have more plays and score more points [PAGE 7]. Base rates across yardlines [PAGE 8].
- Thought experiments: average vs Justin Tucker vs random kicker [PAGE 6].
- 8 aspects of team quality [PAGE 9-10]. QB quality of both teams matters most [PAGE 10].
- Problem 2: high-dimensional function, overfitting, bias-variance [PAGES 12-13]. Burke quote [PAGE 13].
- Catalytic prior solution [PAGE 13-14].
- EP Model Comparison table [PAGE 14]: MAE values.
- Problem 3: autocorrelation, effective sample size 4000 games [PAGE 16].
- WP simulation: random walk, bootstrapped CI 8% width [PAGES 17-18].
- Boot % [PAGE 19].
- Examples [PAGES 21-27].
- Gray-zone audit: the gap between point estimate and decision certainty; when to defer to coach; the danger of overconfident analytics.

SOURCE_OPERATORS_AND_EQUATIONS:
- State vector s_t.
- V(s) = max_a E[ V(s_{t+1}) | s_t, a ] (Bellman optimality, though paper doesn't explicitly write Bellman, it's implied by "maximizes value of next game-state" [PAGE 1]). I can present as formal operator without claiming it's verbatim from paper, but grounded in paper's description. The invariant says "State formal LaTeX equations... When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I can write equations derived from the paper's concepts and cite pages.
- EP(s) = Σ_{k∈{7,3,2,0,-2,-3,-7}} k · P(next score = k | s) [PAGE 4 Romer outcome variable]. For Yurko: EP = 7·P(TD) + 3·P(FG) + ... [PAGE 4].
- WP(s,a) = P(win | s, do(a)).
- Policy π*(s) = argmax_{a∈{Go,FG,Punt}} WP(s,a) [PAGE 1].
- Team quality vector q ∈ R^8 [PAGE 9-10].
- Augmented EP: EP(s; q_off, q_def).
- Selection bias: E[EP | random team] ≠ EP(average team) because P(team selected) ∝ plays ∝ quality [PAGE 7-8].
- Effective sample size: N_eff ≈ N_games / (1 + 2Σρ_k) ≈ 4,000 vs N_plays ≈ 500,000 [PAGE 16].
- Bootstrap CI: width w_90 ≈ 0.08 WP [PAGE 18].
- Boot %: boot_d = (1/B) Σ_{b=1}^B 1{argmax_a WP_b(s,a) = d} [PAGE 19].
- Breakdown regimes: (i) omitted variable bias when ||q|| large but excluded; (ii) overfitting when model complexity ≫ N_eff; (iii) decision indistinguishability when max_d boot_d - second_max_d boot_d < ε.

RETROCAUSAL_GENEALOGY:
- Romer (2006) IV regression [PAGE 4].
- Burke (2009) spline [PAGE 4].
- Yurko et al. (2018) multinomial logistic [PAGE 4].
- Baldwin (2021) XGBoost [PAGE 4].
- Sam Kou catalytic prior [PAGE 13].
- Brian Burke Wharton Moneyball quote [PAGE 13].
- Multi-week traps: in-season deployment without refitting; roster churn invalidates team quality covariates; ignoring autocorrelation across weeks treats plays as independent [PAGE 16].
- Example sequence [PAGES 21-27] shows how point-estimate certainty fluctuates week-to-week.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under clock pressure, coaches regress to punt (status quo bias).
- Counter-trap: analytics says Go, but coach knows opponent expects Go, so opponent blitzes; the model assumes fixed transition probabilities, but opponent adapts (game-theoretic layer absent from EP/WP [PAGE 1]).
- Clock: time remaining as covariate [PAGE 4]; late-game scenarios compress decision tree; two-minute drill changes EP to WP primarily.
- Theory of mind: coach models opponent's model; if analytics is public, opponent anticipates fourth down aggressiveness and adjusts defensive alignment. Paper recommends humility because model cannot capture this recursive layer [PAGE 28].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: kicker range. Thought experiment: average kicker vs Justin Tucker vs random kicker at 70 yards [PAGE 6]. Biomechanical singularity: as distance → max range, P(made) → 0 nonlinearly. Veto: if distance > D_max(kicker, weather), FG branch pruned regardless of WP point estimate.
- Weather/roof: Baldwin includes roof type [PAGE 4]; paper's thought experiment assumes neutral weather [PAGE 6], a breakdown regime when weather is non-neutral.
- Team quality layer: 8 metrics [PAGE 10].
- Adjudication order: Physical feasibility → Team-quality-adjusted EP/WP → Bootstrap uncertainty → Coach discretion.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. I'll phrase them as counterfactual interventions verifiable from paper's reported numbers.
Scenario 1: Omitted team quality. Counterfactual: Fit EP without team quality (Baldwin 2021 [PAGE 4, 14]) vs with (Catalytic [PAGE 14]). Veto: when |q_off - q_def| > threshold (e.g., elite offense vs weak defense), the no-quality model's MAE 3.803 vs catalytic 3.744 [PAGE 14] implies systematic undervaluation of aggressive decisions. Prediction: On subsets with large team-quality gaps, the catalytic model's EP advantage over no-quality model is "much better" [PAGE 14], and fourth-down recommendations flip from Punt to Go relative to no-quality baseline.
Scenario 2: Autocorrelation/effective sample size. Veto: when bootstrapped decision distribution is diffuse (max boot % < 0.60 or CI width > decision gap), the model cannot distinguish actions. Verifiable via Example 1: FG +2% point estimate but "don't have enough data to trust" [PAGE 22], coach's discretion. Prediction: In such cases, a randomized cluster bootstrap yields boot % near-uniform across {Go, FG, Punt}, and following the point estimate is overconfident.
Scenario 3: Physical range. Veto: 70-yard FG [PAGE 6]. Even Justin Tucker's probability is not 1; random kicker near zero. EP model that treats FG as fixed 3 points without distance-kicker interaction violates physical layer. Prediction: For yardline > own 45 (approx > 63-yard attempt), P(FG) drops below the break-even threshold where Go's expected value dominates; the model must veto FG even if EP point estimate suggests it.

Make sure not to mention betting lines.

Let's write it all out with proper XML tags. Need >=1000 words total. I'll write substantial text.

Check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't.

Check: "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I'll include units (probability dimensionless, points, seconds, yards).

Check: cite exact [PAGE N] markers. The source text has slide numbers. I'll cite those.

Check: verbatim quotes. I'll quote short phrases.

Now, produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core statistical object is a value function \(V(x)\) over game-state \(x\), which for American football is instantiated as Expected Points (EP) or Win Probability (WP). The decision problem is a discrete finite-horizon control: on fourth down the coach chooses \(a \in \{\text{Go}, \text{FG}, \text{Punt}\}\) to maximize the value of the next game-state, specifically WP [PAGE 1]. The first multi-hop derivation is therefore a Bellman-style recursion implied by the paper’s language: \(V^*(s) = \max_{a \in \{\text{Go},\text{FG},\text{Punt}\}} \mathbb{E}[V(s_{t+1}) \mid s_t=s, a]\), where the expectation is taken over play outcomes and subsequent game-states. The paper does not write this equation verbatim, but it states “Make the decision which maximizes the value of the next game-state” and “Make the fourth down decision in Go FG Punt which { , , } maximizes win probability” [PAGE 1].

The gray zone opens immediately with model specification. The paper contrasts probabilistic state-space models, which “require detailed specification of all game-states, actions, and their transition probabilities; incredibly hard,” with statistical, data-driven regression/ML models [PAGE 2]. The latter are what dominate public analytics, yet the authors identify three structural failures. First, EP models condition on yardline, down, yards-to-go, time, timeouts, etc., but do not adjust for team quality [PAGE 5]. The justification offered is that they represent EP for an average offense versus an average defense [PAGE 5], but the authors show this is incoherent: because good teams run more plays and score more points, a random draw from play-by-play data is not a draw from average teams [PAGE 7]. This induces selection bias and omitted-variable bias; EP is reported for “randomly drawn teams,” a regime no coach actually faces [PAGE 7].

The second failure is the curse of dimensionality interacting with overfitting. Adding eight team-quality covariates to yardline, down, distance, clock, and timeouts yields a high-dimensional function with nonlinearities and interactions [PAGE 11-12]. Machine learning models such as XGBoost “tend to aggressively overfit (play-by-play) data” [PAGE 12], and the paper notes most public models are XGBoost rather than Bayesian shrinkage models, citing Brian Burke [PAGE 13]. Their solution is catalytic priors, inspired by Sam Kou, to Laplace-smooth tree models [PAGE 13-14]. The EP Model Comparison table shows the payoff: Catalytic XGBoost with team quality achieves out-of-sample MAE 3.744, versus 3.864 for Romer (2006) without team quality [PAGE 14], a non-trivial reduction in expected-points error that the authors argue “can make a huge difference in decision making” on subsets [PAGE 14].

The third failure is specific to WP. Play-by-play contains roughly 500,000 plays, but because every game has exactly one winner, the outcomes are autocorrelated; the effective sample size is closer to 4,000 games over fifteen years [PAGE 16]. This is far too few observations to resolve the joint distribution of score differential, time remaining, team quality, yardline, down, distance, and timeouts [PAGE 16]. Their random-walk football simulation demonstrates the point: even in a vastly simplified game, bootstrapped 90% confidence intervals for WP must be about 8 percentage points wide on average to achieve coverage, and real football is exponentially more complex [PAGE 17-18]. Consequently, WP point estimates are highly uncertain [PAGE 19].

This uncertainty propagates directly to fourth-down advice. The authors propose a randomized cluster bootstrap to account for autocorrelation and compute “boot %” — the fraction of bootstrapped models selecting each of Go, FG, or Punt [PAGE 19]. The examples illustrate the gray zone: CHI @ NYJ (Week 12, 2022) shows FG with a +2% WP point estimate but insufficient data to trust it, yielding “Coach’s discretion” [PAGE 21-22]; WAS @ IND (Week 8, 2022) shows Punt with only a +0.05% edge but high confidence in that edge, yielding “Punt (but not a tragedy if the coach overrides)” [PAGE 24]; LV @ LA (Week 14, 2022) shows Go with +3.5% and certainty, yielding “Strong Go!” though LV punted and lost after a 98-yard game-winning drive [PAGE 26-27]. The gray-zone audit is therefore: many fourth-down decisions are far less obvious than analysts claim, and the model’s epistemic state — wide bootstrap intervals, diffuse boot % distributions — should dictate when to defer to coach’s discretion rather than issue overconfident prescriptions [PAGE 28].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations, grounded in the source text:

State space and value:
Let \(s_t = (\text{yardline}, \text{down}, \text{yards-to-go}, \text{time remaining}, \text{timeouts}, \text{home}, \text{roof}, \text{era}, \mathbf{q}_{\text{off}}, \mathbf{q}_{\text{def}})\) denote the game-state, where \(\mathbf{q}_{\text{off}}, \mathbf{q}_{\text{def}} \in \mathbb{R}^4\) are offensive and defensive quality covariates [PAGE 4, PAGE 9-10]. The value function is \(V(s)\) [PAGE 1].

Expected points operator:
For outcome set \(\mathcal{O} = \{\text{TD}, \text{FG}, \text{safety}, \text{no score}, \dots\}\) with point values \(v(o) \in \{7,3,2,0,-2,-3,-7\}\) [PAGE 4, Romer (2006) outcome variable],
\[
\text{EP}(s) = \sum_{o \in \mathcal{O}} v(o) \, \mathbb{P}(o \mid s).
\]
For the multinomial logistic specification of Yurko et al. (2018) [PAGE 4],
\[
\text{EP}(s) = 7\mathbb{P}(\text{TD}\mid s) + 3\mathbb{P}(\text{FG}\mid s) + \cdots
\]
Units: expected points (dimensionless points per possession).

Win probability operator:
\[
\text{WP}(s,a) = \mathbb{P}(\text{win} \mid s, a), \qquad a \in \{\text{Go}, \text{FG}, \text{Punt}\} \quad [\text{PAGE 1}].
\]
Optimal fourth-down policy:
\[
\pi^*(s) = \arg\max_{a \in \{\text{Go},\text{FG},\text{Punt}\}} \text{WP}(s,a).
\]

Team-quality augmentation:
The authors construct 8 measures of offensive and defensive quality, controlling for data bleed [PAGE 10], and rank predictive importance: quarterback quality of both teams dominates [PAGE 10]. Omitting \(\mathbf{q}\) induces omitted-variable bias: \(\mathbb{E}[\text{EP} \mid \text{random team}] \neq \text{EP}(\text{average team})\), because good teams contribute more plays and score more points [PAGE 7-8].

Catalytic prior / shrinkage:
To mitigate XGBoost overfitting on play-by-play data [PAGE 12-13], the authors apply a catalytic prior in the spirit of Sam Kou [PAGE 13], effectively Laplace-smoothing leaf predictions toward simpler structure.

Effective sample size and autocorrelation:
With \(N_{\text{plays}} \approx 500{,}000\) plays but only \(N_{\text{games}} \approx 4{,}000\) independent games [PAGE 16], the effective sample size is approximately
\[
N_{\text{eff}} \approx \frac{N_{\text{games}}}{1 + 2\sum_{k=1}^{K} \rho_k} \approx 4{,}000,
\]
where \(\rho_k\) are lag autocorrelations of the binary win/loss response [PAGE 16]. Breakdown regime: when model complexity (number of interacting covariates and tree depth) exceeds information recoverable from \(N_{\text{eff}}\), WP point estimates are statistically underidentified.

Bootstrapped decision uncertainty:
Using a randomized cluster bootstrap to respect autocorrelation [PAGE 19],
\[
\text{boot}_d(s) = \frac{1}{B}\sum_{b=1}^{B} \mathbf{1}\{\arg\max_{a} \text{WP}_b(s,a) = d\}, \qquad d \in \{\text{Go},\text{FG},\text{Punt}\}.
\]
Decision is “uncertain” when \(\max_d \text{boot}_d(s)\) is not separated from the runner-up by a meaningful margin; “confident” when one action dominates the bootstrap distribution [PAGE 21-27].

Out-of-sample EP error (from Table, [PAGE 14]):
\[
\text{MAE}_{\text{Catalytic}} = 3.744 < \text{MAE}_{\text{Yurko+}} = 3.749 < \text{MAE}_{\text{Baldwin+}} = 3.753 < \text{MAE}_{\text{Baldwin (no quality)}} = 3.803 < \dots < \text{MAE}_{\text{Romer}} = 3.864.
\]

Breakdown/singularity regimes:
1. Omitted team quality: \(\|\mathbf{q}_{\text{off}} - \mathbf{q}_{\text{def}}\|\) large but excluded from covariates \(\Rightarrow\) systematic EP/WP miscalibration [PAGE 5-8].
2. Overfitting: model VC dimension / effective parameters \(\gg N_{\text{eff}} \approx 4{,}000\) [PAGE 12-13, PAGE 16].
3. Decision indistinguishability: \(\text{WP}(s,\text{Go}) - \text{WP}(s,\text{FG}) < \text{half-width of 90\% bootstrap CI}\) [PAGE 18-19, PAGE 21-22].
4. Physical range: field-goal distance \(D\) beyond kicker-specific maximum range \(D_{\max}\) under prevailing weather \(\Rightarrow \mathbb{P}(\text{FG made}) \to 0\), pruning the FG branch regardless of EP point estimate [PAGE 6 thought experiment; PAGE 4 roof/weather covariates].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a direct methodological lineage. Romer (2006) used instrumental-variables regression with yardline as the state and points of the next score as outcome [PAGE 4]. Burke (2009) used linear regression with a spline on first-down plays [PAGE 4]. Yurko et al. (2018) used multinomial logistic regression over yardline, down, log yards-to-go, time remaining, goal-to-go, and under-two-minutes indicators, mapping categorical next-score outcomes to EP via \(7\mathbb{P}(\text{TD}) + 3\mathbb{P}(\text{FG}) + \cdots\) [PAGE 4]. Baldwin (2021) used XGBoost over an expanded feature set including timeouts, home, roof type, and era [PAGE 4]. The Brill-Wyner contribution adds team-quality covariates and catalytic priors inspired by Sam Kou’s catalytic prior, explicitly rejecting the “not Bayesian” character of most public XGBoost models [PAGE 13, quoting Brian Burke on Wharton Moneyball, 19 Sept. 2023].

The multi-week trap is structural. EP/WP models fit on historical play-by-play assume stationarity of team quality and coaching tendencies across the sample window [PAGE 16]. In-season, rosters change through injury, bye weeks, and mid-season acquisitions; a model fit on Weeks 1-8 does not necessarily transfer to Week 12 because \(\mathbf{q}_{\text{off}}\) and \(\mathbf{q}_{\text{def}}\) are time-varying. The paper’s emphasis on controlling for data bleed [PAGE 10] is directly relevant: using future information to construct team-quality covariates leaks information backward in time and corrupts prospective decision-making. A second recursive trap is treating plays as independent when they are nested within games and teams; applying standard i.i.d. regularization to play-by-play data overstates effective sample size and produces falsely narrow confidence intervals [PAGE 16-18]. Finally, there is an analyst-overconfidence trap: traditional recommendations present fourth-down choices as crisp (strong field goal, tossup punt, strong go) [PAGE 21-26], while the authors demonstrate that the bootstrap distribution over decisions is often diffuse, meaning the “obvious” analytic answer is not statistically identifiable [PAGE 28].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under clock pressure, coaches tend to regress to the conservative status quo — punting — because the reputational cost of a failed fourth-down conversion is salient and immediate. This is a habit-regression mode that operates independently of the EP/WP value function.

Counter-trap: the analytics model may prescribe Go, but if the opposing coaching staff publicly knows the model’s tendencies, they can adjust defensive alignment, blitz rates, and coverage to punish the expected aggressiveness. The EP/WP framework as described treats transition probabilities as exogenous to the decision [PAGE 1-2]; it does not model the opponent’s model of the decision-maker. This creates a recursive theory-of-mind gap: the offense thinks the defense thinks the offense will go on fourth down, so the defense sells out, changing the actual conversion probability away from the historical estimate used in the model.

Clock layer: time remaining is a covariate in every EP/WP specification [PAGE 4], and its interaction with score differential is nonlinear and state-dependent [PAGE 11-12]. In the final two minutes, EP ceases to be the relevant objective; WP dominates, and the value of preserving timeouts, stopping the clock, and field-position trade-offs changes discontinuously. The paper’s examples occur in specific game contexts (Week 12, Week 8, Week 14) [PAGE 21-26], but the model’s uncertainty quantification is most critical precisely when the clock compresses the decision tree and bootstrap intervals widen [PAGE 18].

The paper’s recommended resolution is epistemic humility: when \(\text{boot}_d(s)\) is diffuse, the rational response is not to override the coach with a point estimate, but to grant coach’s discretion [PAGE 22, PAGE 24]. This acknowledges that the coach’s recursive model of the opponent, the clock, and sideline information contains variables the statistical model cannot observe.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Adjudication proceeds layer by layer, with hard vetoes at the physical and biological layers before statistical inference is consulted.

Physical/biomechanical layer: The paper’s thought experiment contrasts an “average” NFL kicker, Justin Tucker, and a randomly drawn kicker on a 70-yard field goal in neutral weather [PAGE 6]. This is a physical singularity: as kick distance approaches the biomechanical limit of the snap-hold-kick chain, \(\mathbb{P}(\text{FG made})\) collapses nonlinearly toward zero regardless of the statistical EP model’s point estimate. If the yardline implies a distance \(D > D_{\max}(\text{kicker}, \text{weather})\), the FG action is vetoed outright; the optimization reduces to \(\arg\max_{a \in \{\text{Go}, \text{Punt}\}} \text{WP}(s,a)\).

Weather and venue layer: Baldwin (2021) includes roof type as a covariate [PAGE 4], yet the 70-yard thought experiment explicitly assumes neutral weather [PAGE 6]. The breakdown regime is non-neutral weather — wind, precipitation, extreme temperature — which alters kicker range and passing efficiency and is not fully captured by the statistical covariates unless explicitly modeled.

Team-quality layer: The 8 covariates (quarterback and non-quarterback offense, pass and run defense for both sides) [PAGE 9-10] must be included; omitting them produces the selection bias described at [PAGE 7-8]. If \(\mathbf{q}_{\text{off}}\) indicates an elite offense and \(\mathbf{q}_{\text{def}}\) indicates a weak opponent defense, the statistical prior shifts mass toward Go.

Statistical layer: Only after physical feasibility and team-quality adjustment does the bootstrap decision distribution \(\text{boot}_d(s)\) inform the recommendation. If \(\max_d \text{boot}_d(s)\) is not separated from alternatives by more than the bootstrap CI width (~8 percentage points in the simulation [PAGE 18]), the model issues no veto and defers to coach’s discretion [PAGE 22, PAGE 24].

Veto order: Physical range \(\to\) Weather adjustment \(\to\) Team-quality-adjusted EP/WP \(\to\) Bootstrap uncertainty \(\to\) Coach discretion. Any upstream veto prunes the action set downstream.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios derived from the paper’s reported statistics:

Veto Scenario 1 — Omitted team quality on skewed matchups. Counterfactual: re-run fourth-down advice using Baldwin (2021) without team quality (MAE 3.803) versus the authors’ Catalytic model with team quality (MAE 3.744) [PAGE 14]. Veto condition: when \(\|\mathbf{q}_{\text{off}} - \mathbf{q}_{\text{def}}\|\) is large (e.g., top-decile offense vs. bottom-decile defense), the no-quality model systematically undervalues aggressive decisions. Prediction: on subsets with large team-quality differentials, the no-quality model’s EP error exceeds the catalytic model’s by the reported 0.059-point gap, and its fourth-down prescriptions flip from Go to Punt relative to the quality-adjusted model; this is verifiable by comparing out-of-sample MAE on stratified subsets [PAGE 14].

Veto Scenario 2 — Autocorrelation-induced overconfidence in close games. Counterfactual: apply the randomized cluster bootstrap to CHI @ NYJ, Week 12, 2022, where the FG point estimate was +2% WP [PAGE 21-22]. Veto condition: when the bootstrap 90% CI width (~8 points in the simulation [PAGE 18]) exceeds the point-estimate gap between actions, the decision is statistically unidentified. Prediction: \(\text{boot}_{\text{FG}}\), \(\text{boot}_{\text{Go}}\), and \(\text{boot}_{\text{Punt}}\) will be diffuse (no action above ~40%), validating the paper’s “Coach’s discretion” ruling [PAGE 22]; any analytics system issuing a strong FG recommendation here is overconfident and should be vetoed.

Veto Scenario 3 — Physical range violation on extreme-distance field goals. Counterfactual: the 70-yard field-goal thought experiment comparing average kicker, Justin Tucker, and random kicker in neutral weather [PAGE 6]. Veto condition: if \(D > D_{\max}\) for the available kicker under current weather, \(\mathbb{P}(\text{FG made}) \approx 0\), so \(\text{EP}(s, \text{FG})\) collapses and the FG branch must be pruned even if a naïve point-estimate model assigns it positive value. Prediction: beyond approximately a 63-yard attempt (roughly beyond the opponent’s 45-yard line), the expected value of FG falls below that of Go or Punt for all but elite kickers; a model recommending FG in this regime without a kicker-specific physical constraint violates the biomechanical layer and should be overridden.
</RLVR_COUNTERFACTUAL_VETOES>