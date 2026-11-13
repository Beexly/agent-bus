---
source: "2021 - Quantifying Hitter Plate Discipline in Major League Baseball - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Carnegie Mellon Sports Analytics Conference/2021"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3364
---

<NATIVE_REASONING>
The user wants a deep analytical response based on a provided PDF about "Quantifying Hitter Plate Discipline in Major League Baseball" introducing the EAGLE metric. I must follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Need to be careful: The user says "DRIVE SOURCE" and provides text. I should treat this as source material. I need to cite exact [PAGE N] markers. The text has page markers like [PAGE 1 of 10], etc.

Structure:
- THINK_TRACE: >=400 words. Deep multi-hop derivation & gray-zone audit. Discuss EAGLE derivation, run expectancy, xgboost, logistic strike model, decision tree, limitations (run expectancy doesn't account for current hitter ability, full-season stats vs trailing 100 games, stability, correlation coefficients, etc.). Gray zones: conflation of decision quality with outcome quality, selection bias in swing outcomes (only observed for swung pitches), counterfactual missingness for take pitches (we never observe what would have happened if swung), strike zone model AUC 0.976 but not perfect, eye quality fatigue after 2005 stimulant ban, etc.
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations. Define run expectancy RE(state), change in run expectancy ΔRE, expected runs swing vs take, EAGLE pitch-level and season average. Define logistic regression for strike probability with features x, z, x^2, z^2, xz, top/bottom. Define xgboost classifier for 7 swing outcomes + 2 take outcomes = 9 outcomes. Mention units: runs (dimensionless expected runs), probabilities [0,1], AUC unitless, correlation coefficients unitless, OPS decimal. Page citations for each. Exact breakdown regimes: small sample early season, non-stationarity, pitcher-hitter handedness, etc.
- RETROCAUSAL_GENEALOGY: Historical lineage: expected points added in football [8] nflwar (Yurko et al. 2019) cited on page 3/10; baseballR package [9]; O-Swing%/Z-Swing%; McShane et al. 2011 hierarchical Bayesian; Vock & Vock 2018 causal inference g-computation; Laby et al. 2019 visual function; Liu et al. 2020 visual/oculomotor; Kutscher et al. 2013 fatigue after stimulant ban 2005; Franks et al. 2016 meta-analytics stability. Multi-week traps: fatigue accumulates over season, eye-quality declines pronounced after 2005, late-season plate discipline decay; using full-season stats for prediction leaks future information if used in-season; trailing 100 games suggestion is a partial fix but still has look-ahead if not careful.
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Hitters regress to chase habits under crisis (two strikes, late innings), pitchers exploit by throwing chase pitches; counter-trap is hitter adjusting based on pitcher's exploitation; clock = game situation (count, outs, inning) and season clock (fatigue over months). EAGSE (EAGLE) is decision-theoretic not outcome-theoretic, but hitters may misperceive pitcher's theory of mind. Need to discuss recursive beliefs: batter believes pitcher believes batter will chase, etc.
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: pitch velocity, spin rate, movement, effective velocity; biomechanical: hitter visual function, ocular motor, fatigue, strike zone top/bottom by batter height; weather: not explicitly in paper but implied as external veto (wind, temperature, humidity affecting ball flight and movement); umpire strike zone variability (not modeled explicitly, logistic model estimates average strike zone). Veto conditions: if visual function degraded (fatigue), EAGLE may misattribute decision quality; if pitch classification wrong, xgboost inputs garbage; if run expectancy table assumes league-average hitter not current batter, misestimates value for good/bad hitters (stated limitation page 9).
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning Verifiable Rollouts? Or just counterfactual veto scenarios). Need 3 verifiable scenarios + predictions. For example:
  1. Veto: early-season EAGLE (< 50 PAs) used for trade prediction -> high variance, prediction breakdown. Prediction: correlation with future OPS drops below .2.
  2. Veto: applying EAGLE model trained on 2019-2020 to 2021 shifted ball/aerodynamics or rule changes -> distribution shift. Prediction: AUC of strike model falls below 0.90, calibration error increases.
  3. Veto: pitcher-batter handedness mismatch or extreme platoon advantage not fully captured -> EAGLE misestimates swing value. Prediction: EAGLE-OPS correlation weakens for same-side matchups.

Need word count >= 1000 across sections. THINK_TRACE alone >=400. Let's ensure total > 1000.

No betting lines. No toy equations. Use real formalism.

Let's draft carefully.

Important: cite exact page markers. The text uses [PAGE 1 of 10] etc. I should reference [PAGE N] maybe just [PAGE 3] style. The instruction says cite exact [PAGE N] markers. I'll use [PAGE 1], [PAGE 2], etc.

Verbatim quotes: include short quotes where appropriate.

Let's outline equations:

Let \(s_t = (c_t, o_t, r_t)\) be state: count, outs, runners.
Run expectancy: \(V(s_t) = \mathbb{E}[R_{t:\text{end}} \mid s_t]\).
For each pitch \(p\), two actions \(a \in \{\text{swing}, \text{take}\}\).

Take action:
Outcomes \(y \in \{B, S\}\) (ball, called strike).
\(P(y \mid p, a=\text{take})\) estimated by logistic model (page 4): \(\text{logit}(P(\text{strike})) = \beta_0 + \beta_x x + \beta_z z + \beta_{x^2} x^2 + \beta_{z^2} z^2 + \beta_{xz} xz + \beta_{\text{top}} z_{\text{top}} + \beta_{\text{bottom}} z_{\text{bottom}}\).
AUC = 0.976 (page 4).
Expected runs if take: \(Q(s_t,p,\text{take}) = \sum_y P(y\mid \cdot) [V(s_t') + \Delta R_y]\), where \(s_t'\) updates count/outs.

Swing action:
Outcomes \(y \in \{\text{miss, foul, out, 1B, 2B, 3B, HR}\}\).
Probabilities via xgboost (page 5): \(\hat{\pi}_y = \text{XGB}(p; \theta)\), features include pitch location/movement/type/velocity/effective velocity/spin, situational (count, outs, handedness), hitter/pitcher basic stats and zone-grouped Statcast metrics (page 4).
\(Q(s_t,p,\text{swing}) = \sum_y \hat{\pi}_y [V(s_t'') + \Delta R_y]\).

EAGLE pitch-level:
\(\text{EAGLE}(p) = Q(a^*) - Q(a_{\text{taken}})\), where \(a^* = \arg\max Q\). Actually the paper says "player's EAGLE for that pitch is the difference between the decision taken and the other choice" and "correct decision as the change in run expectancy that is the larger". Let's parse: If estimated expected runs gained from swinging is 0.2 and taking is -0.05, EAGLE for swing would be 0.25, and EAGLE for a take would be -0.25. So \(\text{EAGLE}(p, a) = Q(a) - Q(a_{\text{other}})\). Positive means the taken action was better than alternative by that amount? Wait, example: swinging 0.2, taking -0.05. EAGLE for swing = 0.25, EAGLE for take = -0.25. So EAGLE is assigned to the decision taken: if you swing, EAGLE = Q(swing) - Q(take) = 0.25. If you take, EAGLE = Q(take) - Q(swing) = -0.25. So it's the advantage of the chosen action over the foregone action. Season average: \(\overline{\text{EAGLE}}_h = \frac{1}{N_h} \sum_{p \in h} \text{EAGLE}(p)\) (page 6).

Stability: Figure 5 year-to-year correlation (page 7).
Correlation with walk rate r = 0.563 (page 6).
Correlation with O% r = 0.683 (page 6).
Correlation with OPS r = .461 (page 7); O% vs OPS r = -.104.
10th vs 90th percentile EAGLE OPS .705 vs .808 current year; next year .739 vs .795 (page 7).

Limitations: run expectancy doesn't account for current hitter ability (page 9); prediction models use full-season stats, for predictive use need trailing 100 games (page 9). Eye-quality declines over season, pronounced after stimulants banned 2005 (page 2, ref [7]).

Now, write the sections.

Need to ensure no toy equations. The equations above are formal and grounded.

Word count: aim for ~1300-1500 total.

Let's write.

THINK_TRACE (>=400 words): I'll write a thorough derivation and audit. Need to be careful not to mention betting. Focus on decision theory, counterfactuals, stability, limitations.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX heavy, with page citations.

RETROCAUSAL_GENEALOGY: lineage and multi-week traps.

RECURSIVE_THEORY_OF_MIND: crisis habit regression etc.

CROSS_LAYER_VETO_ADJUDICATION: veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's draft now.

Check word count as I go mentally. THINK_TRACE needs >=400 words. I'll write maybe 500.

Let's ensure verbatim quotes: e.g., "The point of hitting is not simply not to strike out, but to hit the ball hard." (page 8). "EAGLE does not measure hitting ability, simply the ability to swing at the best pitches." (page 6). "the run expectancy metric doesn’t account for current hitter ability" (page 9). Good.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The EAGLE metric constructs a pitch-level decision-theoretic object: for every pitch, the hitter faces a binary action space, swing versus take, and each action branches into a distribution over run-relevant outcomes. The take branch is parsimonious—ball or called strike—while the swing branch expands to seven outcomes (miss, foul, out, single, double, triple, home run), yielding nine terminal leaves in the decision tree described on [PAGE 3]. The paper’s core derivation is to compute, for each action, the expected change in run expectancy from the pre-pitch state \(s=(c,o,r)\) (count, outs, runners) to the post-action state, then weight each terminal run-expectancy shift by the modeled probability of that outcome. The season-level EAGLE for a hitter is the average over all pitches of the advantage of the chosen action over the unchosen alternative: if \(Q(s,p,\text{swing})\) exceeds \(Q(s,p,\text{take})\), a taken swing receives \(+\Delta\) and a hypothetical take would have received \(-\Delta\), as illustrated on [PAGE 5] with the numerical example \(0.2\) versus \(-0.05\).

Multi-hop gray zones emerge immediately. First, the take-action strike probability is estimated with a logistic regression on pitch location coordinates \((x,z)\), their polynomial and interaction terms, and batter-specific strike-zone top/bottom; this achieves AUC 0.976 on [PAGE 4], but an AUC below 1.0 implies residual misclassification of called strikes versus balls, which propagates linearly into the take-action value. Second, the swing-action probabilities come from an xgboost classifier trained only on observed swings; the counterfactual distribution of what would have happened had a taken pitch been swung at is never directly observed, so the swing branch rests on a modeling extrapolation rather than a randomized experiment. Third, run expectancy is drawn from the baseballR package using league-average state values, not the specific hitter’s talent; the authors acknowledge on [PAGE 9] that this underestimates run expectancy for good hitters and overestimates it for bad hitters, creating a systematic ability-dependent bias in the very quantity EAGLE purports to isolate as pure decision quality. Fourth, the predictive models merge full-season 2019–2020 hitter and pitcher statistics into each pitch row [PAGE 4], which introduces look-ahead leakage if EAGLE is deployed in-season before those season totals exist; the authors themselves concede on [PAGE 9] that a predictive deployment requires trailing-window averages, e.g., the last 100 plate appearances.

The validity chain also depends on biological and temporal stationarity. The paper cites visual-function research showing plate discipline and eye-quality are related but distinct from contact skill [PAGE 2], and that eye-quality declines over the season, an effect accentuated after the 2005 stimulant ban [PAGE 2, ref 7]. This implies EAGLE is not a time-invariant skill parameter: late-season observations may reflect fatigue-driven ocular decline rather than a stable plate-discipline trait, threatening year-to-year stability claims even though Figure 5 on [PAGE 7] shows respectable year-over-year consistency. Finally, the correlation architecture reveals EAGLE’s niche: it tracks walk rate at \(r=0.563\), chase rate \(O\%\) at \(r=0.683\), and OPS at \(r=0.461\), while \(O\%\) alone correlates with OPS at only \(-0.104\) [PAGES 6–7]. EAGLE therefore captures power-relevant pitch selection that traditional discipline metrics miss, but its predictive edge for next-year OPS (10th percentile .739 vs. 90th percentile .795) is modest in absolute terms, and the metric remains vulnerable to distributional shift when pitch mixtures, ball aerodynamics, or umpire strike-zone calling change across seasons.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let a plate-appearance pitch \(p\) arrive in game state \(s=(c,o,r)\), where \(c\) is the ball-strike count, \(o\) is outs, and \(r\) is the runner configuration. Let \(V(s)\) denote run expectancy, the expected runs scored from state \(s\) to inning end, sourced from the baseballR package [PAGE 3].

For the take action \(a=\text{take}\), outcomes \(y\in\{B,S\}\) (ball, called strike) are modeled by a logistic regression whose independent variables are the plate-crossing coordinates \(x,z\), strike-zone shape terms \(x^2,z^2,xz\), and the batter-specific top and bottom of the strike zone [PAGE 4]:
\[
\operatorname{logit}\bigl(P(y=S\mid p,a=\text{take})\bigr)
= \beta_0+\beta_x x+\beta_z z+\beta_{x^2}x^2+\beta_{z^2}z^2+\beta_{xz}xz+\beta_{\text{top}}z_{\text{top}}+\beta_{\text{bottom}}z_{\text{bottom}} .
\]
The fitted classifier reports AUC \(=0.976\) [PAGE 4]. The take-action value is
\[
Q(s,p,\text{take})=\sum_{y\in\{B,S\}} P(y\mid p,\text{take})\Bigl[V(s'_y)+\Delta R_y\Bigr],
\]
where \(s'_y\) updates the count (and possibly outs on a third strike) and \(\Delta R_y\) is the immediate run change (zero for ball/strike unless the strike ends the plate appearance). Units are expected runs (dimensionless run units).

For the swing action \(a=\text{swing}\), outcomes \(y\in\{\text{miss},\text{foul},\text{out},\text{1B},\text{2B},\text{3B},\text{HR}\}\) receive probabilities from an xgboost classifier [PAGE 5]:
\[
\hat{\pi}_y(p)=\text{XGB}_y\!\bigl(\text{pitch }x,z,\text{movement},\text{type},v_{\text{pitch}},v_{\text{eff}},\text{spin},\text{count},o,\text{handedness},\text{hitter stats},\text{pitcher stats},\text{zone-grouped Statcast}\bigr).
\]
Training features include pitch location and movement, type, velocity, effective velocity, spin rate; situational count, outs, handedness; hitter season PA, BA, OBP, SLG; pitcher IP, ERA, GB/FB, WHIP, K%, BB%; and zone-grouped Barrel%, exit velocity, launch angle, xBA, xwOBA, wOBA, ISO for batters and overall velocity/spin for pitchers [PAGE 4]. The swing value is
\[
Q(s,p,\text{swing})=\sum_{y\in\mathcal{Y}_{\text{swing}}}\hat{\pi}_y(p)\Bigl[V(s''_y)+\Delta R_y\Bigr].
\]

The pitch-level EAGLE assigned to the actually taken action \(a_{\text{taken}}\) is the decision advantage over the foregone alternative [PAGE 5]:
\[
\text{EAGLE}(p)=Q(s,p,a_{\text{taken}})-Q(s,p,a_{\text{other}}),\qquad a_{\text{other}}\neq a_{\text{taken}}.
\]
A season average over \(N_h\) pitches for hitter \(h\) is
\[
\overline{\text{EAGLE}}_h=\frac{1}{N_h}\sum_{p\in h}\text{EAGLE}(p)\quad\text{[expected runs per pitch]}. \text{[PAGE 6]}
\]
Reported validity statistics: \(\text{corr}(\overline{\text{EAGLE}},\text{BB\%})=0.563\), \(\text{corr}(\overline{\text{EAGLE}},O\%)=0.683\), \(\text{corr}(\overline{\text{EAGLE}},\text{OPS})=0.461\), versus \(\text{corr}(O\%,\text{OPS})=-0.104\) [PAGES 6–7]. Current-year OPS expectation at the 10th vs. 90th EAGLE percentile: .705 vs. .808; next-year: .739 vs. .795 [PAGE 7].

Singularity and breakdown regimes: (i) small-\(N_h\) early-season samples produce high-variance \(\overline{\text{EAGLE}}\); (ii) AUC \(<1\) in the called-strike model and unobserved swing counterfactuals induce propagated probability error; (iii) using full-season merged statistics for in-season prediction leaks future information [PAGE 9]; (iv) run expectancy’s league-average hitter assumption misprices extreme talents [PAGE 9]; (v) seasonal ocular fatigue after the 2005 stimulant ban creates non-stationarity within a season [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
EAGLE descends from the expected-points-added tradition in football, explicitly citing the nflwar framework of Yurko, Ventura, and Horowitz (2019) as inspiration for measuring predicted change in scoring total [PAGE 3, ref 8]. Its statistical ancestry includes McShane et al.’s hierarchical Bayesian variable-selection approach to MLB hitting metrics (2011) [PAGE 2, ref 3] and Vock & Vock’s causal-inference application of g-computation to plate discipline (2018) [PAGE 2, ref 4], which estimated that improving O% and Z% could add 0.068 to average OPS [PAGE 2]. The visual-science branch is represented by Laby et al. (2019) linking visual function to batting productivity but not contact rates [PAGE 2, ref 5], Liu et al. (2020) on visual and oculomotor prediction of performance [PAGE 2, ref 6], and Kutscher et al. (2013) documenting within-season plate-discipline decline tied to fatigue after the 2005 stimulant ban [PAGE 2, ref 7]. Franks et al. (2016) supply the meta-analytic stability lens: a genuine skill metric should be year-to-year stable, whereas chance-driven metrics fluctuate [PAGE 6, ref 10].

The multi-week trap is embedded in the paper’s own data pipeline. Models are trained on 2019–2020 Statcast and season-level statistics and then applied to 2016–2019 hitter evaluations [PAGE 6, Tables 2–3], collapsing across seasonal ecological shifts. Because plate discipline decays over the course of a season as visual function fatigues [PAGE 2], an early-season EAGLE observation is not exchangeable with a late-September observation. A hitter evaluated in May under fresh ocular conditions may receive a high EAGLE that regresses toward the mean by September not because decision quality changed, but because the biological substrate degraded. Conversely, using full-season 2019–2020 pitcher and hitter aggregates as features for every pitch [PAGE 4] means the model “knows” end-of-season talent when scoring April pitches; any prospective use must substitute trailing-window statistics, as the authors concede [PAGE 9], or risk look-ahead contamination that inflates apparent predictive accuracy for future OPS.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Plate discipline is a recursive game of partial information: the batter forms a belief about the pitcher’s pitch-selection strategy, the pitcher forms a belief about the batter’s swing/take threshold, and each conditions on the other. EAGLE treats the hitter’s decision as a response to an objective pitch-state distribution, but in equilibrium the pitch distribution is endogenous to the hitter’s observed EAGLE-type. A hitter with high measured EAGLE—patient, power-selective—induces pitchers to throw more edge-of-zone and chase-inducing offerings, which mechanically raises the value of swinging at borderline pitches and can create a crisis-habit regression: under two-strike counts or late-inning leverage, the hitter reverts to a lower-quality swing heuristic because the take option’s run expectancy collapses with a called third strike.

The counter-trap is the pitcher’s recursive exploitation: if the pitcher believes the batter will regress to chasing under pressure, the pitcher optimally mixes in more chase pitches precisely in those high-leverage states, rendering the batter’s pre-season EAGLE an out-of-equilibrium predictor. The clock operates on two timescales: the within-game clock (count, outs, inning) enters the xgboost situational features [PAGE 4], and the seasonal clock (fatigue-induced visual decline after the 2005 stimulant ban [PAGE 2]) shifts the batter’s reaction function across months. A counter-trap to the pitcher’s exploitation is batter adaptation—laying off the chase pitch and taking the strike—but this adaptation is only valuable if the run expectancy of taking is accurately priced, which fails for extreme hitters under the paper’s league-average run-expectancy assumption [PAGE 9]. Thus the recursive loop is batter EAGLE \(\to\) pitcher pitch mix \(\to\) batter count-state stress \(\to\) habit regression \(\to\) pitcher re-exploitation, with the seasonal fatigue clock degrading the batter’s ability to sustain the adaptive response.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: pitch velocity, effective velocity, spin rate, and horizontal/vertical movement are direct xgboost inputs [PAGE 4]. A veto triggers if pitch-classification or Statcast telemetry is corrupted (mislabeled spin axis, bad velocity reading), because the swing-outcome probabilities condition on these continuous physical covariates; garbage physical inputs shift the predicted \(\hat{\pi}_y\) distribution and therefore \(Q(s,p,\text{swing})\).

Biomechanical/visual layer: the strike-zone top and bottom are batter-specific [PAGE 4], and the paper cites evidence that visual function predicts discipline but not contact [PAGE 2]. A veto triggers under documented ocular fatigue (late season, post-2005 stimulant-ban era [PAGE 2]), when the batter’s perceptual strike-zone boundary drifts away from the logistic model’s fixed \(z_{\text{top}},z_{\text{bottom}}\) inputs. EAGLE would then misattribute fatigue-driven misperception to stable decision quality.

Environmental layer: although not modeled explicitly in the source, wind, temperature, humidity, and altitude alter pitch movement and ball flight after contact, invalidating the stationarity of both the strike-zone logistic model and the swing-outcome xgboost, which were trained on 2019–2020 mixed-venue data [PAGE 4]. A veto triggers when extreme environmental deviation changes the physical mapping from release to plate crossing beyond the training distribution.

Umpire/institutional layer: the called-strike model estimates an average strike zone with AUC 0.976 [PAGE 4], implying residual error. A veto triggers under umpire crews with systematic zone expansion or contraction, because the take-action value \(Q(s,p,\text{take})\) is directly sensitive to \(P(\text{strike})\). The paper’s own limitation—run expectancy ignores current hitter ability, underpricing good hitters and overpricing bad ones [PAGE 9]—is a structural veto: for a true outlier (e.g., a .340 hitter or a .210 hitter), EAGLE’s run-expectancy baseline is miscalibrated, so the metric no longer isolates pure swing/take decision quality.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 (small-sample early-season rollout): Use \(\overline{\text{EAGLE}}\) computed on fewer than 50 plate appearances to predict a hitter’s next-30-day OPS. Breakdown regime: high parameter variance because \(N_h\) is small and pitch-level outcomes are sparse; the year-to-year stability evidence [PAGE 7] does not extend to sub-monthly windows. Verifiable prediction: the out-of-sample correlation between early-season EAGLE and subsequent OPS falls below \(r=0.20\), significantly under the full-season \(r=0.461\) reported on [PAGE 7], and the mean absolute error exceeds that of a trailing-OPS baseline.

Veto scenario 2 (distribution shift across ball/aerodynamic regimes): Apply the 2019–2020-trained strike-zone logistic model and swing-outcome xgboost to a season with a modified baseball drag profile or humidor adjustment. Breakdown regime: covariate shift in \(x,z\), movement, and spin distributions; the paper reports AUC \(=0.976\) only for the training era [PAGE 4]. Verifiable prediction: strike-classifier AUC drops below 0.90 and expected-calibration error on called strikes rises by more than 30%, causing systematic over- or under-valuation of take decisions and degrading EAGLE’s OPS correlation below \(r=0.30\).

Veto scenario 3 (platoon / handedness mismatch extreme): Evaluate EAGLE for extreme same-handed batter-pitcher matchups where the training data’s handedness interaction is thin. Breakdown regime: situational handedness is a model input [PAGE 4], but small-cell sparse data produce unreliable \(Q(s,p,\cdot)\) estimates; the feature set does not include a batter-specific swing-and-miss rate by pitch type. Verifiable prediction: for same-side matchups with fewer than 100 historical observations in the training fold, EAGLE’s predicted swing value has a sign error (recommending swing when take is optimal) at a rate exceeding 25%, and the EAGLE–OPS correlation within that subgroup is statistically indistinguishable from zero.
</RLVR_COUNTERFACTUAL_VETOES>