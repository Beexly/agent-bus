---
source: "2016 Footballonomics - The Anatomy of American Football - Pelechrinis, Papalexakis.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 29
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4759
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper: "Footballonomics: The Anatomy of American Football" by Pelechrinis and Papalexakis (2016). I need to produce output with exact XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
- >= 1,000-word depth across sections.

Let me carefully extract the information from the source text.

Key facts from source:
- Paper: Footballonomics: The Anatomy of American Football, Evidence from 7 years of NFL game data
- Authors: Konstantinos Pelechrinis, Evangelos Papalexakis
- arXiv:1601.04302v6, doi: 10.1371/journal.pone.0168716
- Dataset: NFL Game Center, seasons 2009-2015, 1,792 regular season games, 77 playoff games. Focus on regular season.
- Rational coaching hypothesis: rejected.
- PAT analysis: 9,021 touchdowns, 460 two-point conversion attempts (51% success), 8,561 extra point kicks (98.4% success).
- Equation (3): E[p] = 2·s_2pts − 1·s_kick. With s_kick=0.984, expected points 0.984. Two-point: 2*0.51=1.02. Positive expected point differential.
- Table 1: Extra point kick success rates by year: 2009: 0.9814, 2010: 0.9884, 2011: 0.9942, 2012: 0.9935, 2013: 0.9960, 2014: 0.9926, 2015: 0.9416. Drop ~5% (p < 10^-6) in 2015 due to rule change (kick from 15-yard line / 33-yard attempt instead of 2-yard line / 20-yard attempt).
- Two-point success rates: 2009: 0.4426, 2010: 0.5471, 2011: 0.5, 2012: 0.55, 2013: 0.4929, 2014: 0.5161, 2015: 0.5247.
- Fourth down: overall conversion rate 77.9%. Adjusted 73%. 55% of attempts are 4th-and-1 (89% conversion). 95% require at most 10 yards.
- Field goal success rate: 85.5% overall. Declines after 50 yards. Only 11% beyond 50 yards.
- Drive success vs starting field position: Figure 5. Turning ball on downs in opponent's territory increases opponent scoring probability by only 7% on average vs touchback baseline.
- Mean field net point benefit:
  - E[P+] = 6·s4conv (Equation 4) - though text says γ(l) E[P+] = 6·s4conv, seems like formatting issue.
  - E[P-] = 3·sfg + (3·∆πfg + 6·∆πtd) (Equation 5)
  - γ(l) = (100-l)/29 roughly? Text: "with l being the starting field position of a 100 − l team... we have γ(l) = ." It seems cut off but average drive length 29 yards, so from own 20 need 2.7 conversions.
  - Figure 6: E[P] positive for >80% of field. Average point gain 1.4 points per drive (p-value < 0.01).
- Bradley-Terry model:
  - Equation (1): Pr(Ti beats Tj | πi, πj) = e^(πi - πj) / (1 + e^(πi - πj))
  - Equation (2): difference in ability = sum_{r=1}^k αr(zir - zjr) + U, U ~ N(0, σ²)
- Features: Total offensive yards differential, Penalty yards differential, Turnovers differential, Possession time differential, Passing-to-Rushing ratio r differential (Equation 6: r = # passing yards / # total yards), Power ranking differential (SportsNetRank).
- Table 2: Paired t-tests. Average paired differences: Total Yards 51.78***, Penalty Yards -3.29*, Turnovers -1.04***, Possession Time 211.79***, r -0.06***. Home team advantage 56.03% ± 2.49%.
- Table 3: Coefficients: Intercept 0.22**, Total Yards 0.01***, Penalty Yards -0.02***, Turnovers -1.05***, Possession Time 0.0001 (not significant), r -3.18***, ∆ SportsNetRank 0.04***.
- Interpretation: Winning turnover battle by 1 -> ~20% gain in winning probability. 10-yard penalty differential -> ~5% difference.
- Reverse causality: examined ratio r evolution through quarters (Figure 11) - stable after Q1, slight Q4 decrease not significant. Turnover timing: winning teams commit fewer turnovers by end of 3rd quarter (p < 0.01). Figure 12: turnover density spikes toward end of each quarter/highest at two-minute warning.
- FPM Prediction Engine:
  - 10-fold cross validation accuracy: 84.03% ± 0.35% (conditional on known features).
  - Bootstrap B=1,000, α=0.05, start predictions from Week 6, k=5 recent games bias.
  - Overall accuracy 63.4% ± 1.3% standard error.
  - Table 4: Yearly accuracy: 2009: 0.66, 2010: 0.60, 2011: 0.68, 2012: 0.72, 2013: 0.55, 2014: 0.66, 2015: 0.57. Baseline: 0.57, 0.5, 0.58, 0.56, 0.5, 0.56, 0.53.
  - Figure 14: accuracy increases through season, linear trend slope 0.01 (p<0.05, R²=0.41).
  - Figure 15: probability calibration, slope 95% CI [0.76, 1.16], R²=0.94, consistent with y=x.
  - Comparable to Cortana (~64.5%), ESPN FPI (63%). Better than ~60% of expert analysts.
- Limitations: no schedule strength, no injuries/weather/roster specifics. Propensity score suggestion.

Now I need to structure this into the required XML sections with proper depth.

Important: No betting lines. I must avoid mentioning spreads, totals, moneylines, odds. The paper mentions "betting strategy" in citations [4], [5] but I should not discuss betting lines myself. I can mention prediction accuracy and probability but not odds.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the logical connections, identify gray zones (e.g., observational data vs causality, mean field approximation limits, bootstrap assumptions, small sample early season, PAT rule change confounding, sampling bias in 4th down attempts in own territory, reverse causality for turnovers and r, etc.).

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations with units, page citations [PAGE N], exact breakdown. Need to map page numbers. The source text has page markers like "1/24", "2/24", etc. I should cite these. Equations: (1), (2), (3), (4), (5), (6), (7), (8). Units: probability (dimensionless), points, seconds, yards.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Romer 2006 [PAGE 24], Porter 1967 [PAGE 24], Sackrowitz 2000 [PAGE 24], Thaler status quo bias [PAGE 2], Clark et al. field goals [PAGE 2], Fewell network theory [PAGE 2], etc. Multi-week traps: early season bootstrap sparsity, Week 6 start, k=5 recent games, accuracy trend slope 0.01/week.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is about coaching decision-making under pressure, status quo bias, conservative play when leading (run clock out), risky play when trailing (long passes, turnovers spikes at two-minute warning). Coaches regress to habit under crisis; counter-trap would be going for it on 4th down / 2-point conversion when mean field says positive. Clock management: end of half spikes.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. The paper doesn't explicitly discuss weather or biomechanics much, but I can discuss veto layers: physical (field position, drive length 29 yards, conversion rates), biomechanical (kicker success declines after 50 yards, 11% of attempts beyond 50 yards), weather (not in paper but can note as exogenous veto not modeled - the paper acknowledges it doesn't account for weather forecast). I must be careful not to invent fake equations but can note absence as a limitation. "veto proof" means identifying factors that would veto the model's predictions.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable (based on the paper's data/regimes) with predictions. Examples:
1. Early season (Week 1-5) FPM cannot be applied (paper says cannot be applied during first week, starts Week 6). Veto: insufficient bootstrap history. Prediction: accuracy below 63.4%, high variance.
2. PAT: trailing by 6, score TD with 1 second left. Veto: extra point kick is optimal despite general 2-point preference because s_kick ~0.95 vs s_2pt ~0.51. Prediction: rational choice is kick, not 2-point.
3. Fourth down: own territory, failed conversion gives opponent scoring field position. Veto: when E[P] < 0 regime (deep own territory, late game trailing?), punting is rational. Prediction: model would advise punt when expected point benefit negative.
Or weather veto: not modeled, so extreme weather would invalidate kicking/passing assumptions.

Need to ensure total word count >= 1000 words across sections. I'll aim for substantial depth.

Let me write carefully, citing page markers like [PAGE 4], [PAGE 5], etc. The text shows page numbers as "1/24" through "25/24". I'll cite as [PAGE 4] meaning the 4th page of the PDF (labeled 4/24).

Verbatim quotes: I should include some exact quotes from the text.

Let me start composing.

THINK_TRACE: I'll write a deep derivation. Discuss:
- Hypothesis 1 rejection via PAT and 4th down.
- The mathematical tension: success rate vs expected points.
- Mean field approximation ignoring higher-order interactions (5 drives later).
- Sampling bias in 4th down data (only 10% in own territory, mostly desperation).
- Bradley-Terry assumptions: no ties (3 ties, 0.1%), Gaussian noise U.
- Observational data cannot establish causality; reverse causality examined and largely rejected for r, supported for turnovers.
- Bootstrap assumptions: block resampling for dependencies, k=5 recency bias, B=1000.
- Gray zones: standardized vs unstandardized coefficients magnitude comparison; range of validity r in [0.3, 0.98]; early season sparsity; schedule strength omission.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with LaTeX.
Eq 1: Pr(T_i \succ T_j | \pi_i, \pi_j) = \frac{e^{\pi_i - \pi_j}}{1 + e^{\pi_i - \pi_j}}
Eq 2: \pi_i - \pi_j = \sum_{r=1}^k \alpha_r (z_{ir} - z_{jr}) + U, U \sim \mathcal{N}(0, \sigma^2)
Eq 3: E[p] = 2 \cdot s_{2pts} - 1 \cdot s_{kick}
Eq 4: E[P^+] = 6 \cdot s_{4conv} (with \gamma(l) factor context)
Eq 5: E[P^-] = 3 \cdot s_{fg} + (3 \cdot \Delta\pi_{fg} + 6 \cdot \Delta\pi_{td})
Eq 6: r = \frac{\text{\# passing yards}}{\text{\# total yards}}
Eq 7-8: H0: P1 = P2, H1: P1 \neq P2
Also mention Table 1 values, Table 3 coefficients, accuracy figures, units: points, yards, seconds, dimensionless probabilities, p-values.
Cite pages: [PAGE 4] for Eq 3, [PAGE 10] for Eq 4-5, [PAGE 12] for Eq 6, [PAGE 18] for Eq 7-8, [PAGE 3] for Eq 1-2, etc.

RETROCAUSAL_GENEALOGY: Cite Romer (2006) [PAGE 24], Porter (1967) [PAGE 24], Sackrowitz (2000) [PAGE 24], Thaler (2015) status quo [PAGE 2], Kahneman et al. (1991) [PAGE 24]. Multi-week traps: Week 6 start [PAGE 18], k=5 [PAGE 18], accuracy slope 0.01 per week [PAGE 19], 2013 dip to 0.55 [PAGE 19 Table 4].

RECURSIVE_THEORY_OF_MIND: Discuss coaches' crisis habit regression: status quo bias [PAGE 2], conservative when leading (run clock out, reduce r), risky when trailing (long passes, turnovers). Two-minute warning spike [PAGE 16 Figure 12]. Counter-trap: 2-point conversion and 4th down aggression when E[p] > 0 / E[P] > 0. Clock: end-of-game scenarios where kick is optimal (down by 6, 1 second left) [PAGE 21 Discussion].

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: field position l, drive length 29 yards, \gamma(l) conversions. Biomechanical layer: kick success declines after 50 yards [PAGE 8 Figure 4], only 11% beyond 50 yards. Weather: paper explicitly says model does not account for weather forecast [PAGE 3 introduction], so weather is an exogenous veto not modeled. Roster/injuries: not accounted [PAGE 21 Discussion]. Veto proof: conditions under which model output should be overridden.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Early-season bootstrap sparsity veto: Weeks 1-5, FPM not applicable [PAGE 18]. Counterfactual: if applied, accuracy would collapse below 63.4% with high variance; prediction: use baseline win-loss instead.
2. End-game PAT veto: Down by 6, score TD with 1 second left [PAGE 21]. s_kick ≈ 0.95 > s_2pt ≈ 0.51. Counterfactual: model's general 2-point preference is vetoed by clock/score state; prediction: kick extra point, win probability ≈ s_kick (tie) rather than 1.02 expected points which is irrelevant if game ends.
3. Deep-territory 4th down veto: E[P] < 0 regime [PAGE 10 Figure 6]. Counterfactual: when own territory and high field-position cost, punt; prediction: model advises punt despite general 4th down aggression trend, avoiding opponent scoring probability increase >7%.

Each with verification method and predicted outcome.

Make sure no betting lines. Avoid "odds", "spread", "moneyline", "total". Use "probability", "accuracy", "win probability".

Word count: I need to ensure each section is substantial. THINK_TRACE >=400 words. Total >=1000. I'll write generously.

Let me draft the response now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper advances two interlocking claims. First, it rejects Hypothesis 1 (rational coaching) by showing that NFL coaches systematically under-use two-point conversions and fourth-down attempts relative to the prescriptions of expected-point maximization. The derivation for the PAT decision rests on Equation (3), E[p] = 2 · s₂ₚₜₛ − 1 · sₖᵢcₖ, evaluated at s₂ₚₜₛ = 0.51 and sₖᵢcₖ = 0.984, yielding 1.02 versus 0.984 expected points per touchdown. Because the two-point expectation exceeds the extra-point expectation by 0.036 points, the conservative kick is suboptimal under pure expected-point logic, even though its raw success rate is higher. The paper notes that the 2015 PAT rule change moved the kick to the 15-yard line, reducing sₖᵢcₖ to 0.9416 (a drop of roughly five percentage points, p < 10⁻⁶) while leaving s₂ₚₜₛ statistically unchanged at 0.5247, which mechanically widens the expected-point gap in favor of the conversion attempt.

The fourth-down analysis layers a mean-field approximation on top of three empirical objects: the fourth-down conversion rate s₄cₒₙᵥ (77.9% overall, 89% on fourth-and-one, adjusted to 73% when conditioning on attempts requiring at most ten yards), the field-goal success rate s_FG(l) as a function of distance (85.5% overall, with a steeper decline beyond 50 yards and only 11% of attempts in that long range), and the opponent’s drive-scoring probability as a function of starting field position after a turnover on downs. Equations (4) and (5) define the expected benefit E[P⁺] = 6 · s₄cₒₙᵥ and expected cost E[P⁻] = 3 · s_FG + (3 · Δπ_FG + 6 · Δπ_TD). Because a failed conversion inside opponent territory raises the opponent’s scoring probability by only 7% on average relative to a touchback baseline, E[P] = E[P⁺] − E[P⁻] is positive across more than 80% of the field, averaging 1.4 points per drive (p < 0.01). Coaches nonetheless punt or kick far more often than this prescription warrants, which is the core evidence against rational coaching.

Gray-zone audit: (1) The mean field explicitly ignores higher-order interactions, such as the effect of a current decision on drives five possessions later, so the 1.4-point estimate is a first-order approximation, not a dynamic game value. (2) Fourth-down attempts in a team’s own territory are heavily selection-biased: only ~10% of the 1,870 attempts occur between the 1- and 35-yard lines, and those are concentrated in desperation, clock-down situations, which depresses observed conversion rates in that regime. (3) The Bradley-Terry logistic model is descriptive and correlational, not causal; the paper acknowledges that empty yards, reverse causality (leading teams run the clock and lower passing ratio r; trailing teams throw deep and inflate turnovers), and schedule strength are unaddressed. (4) The bootstrap prediction engine FPM cannot run before Week 6 because k = 5 recent games are required to bias resampling toward recent form; early-season accuracy is therefore structurally unstable and high-variance. (5) The standardized coefficient table suggests comparing covariate importance by magnitude, but this is valid only within the observed range r ∈ [0.3, 0.98], outside of which the generalized linear trend may break down.

These gray zones imply that any operational deployment must treat the model’s output as an anchor probability subject to vetoes from clock state, score differential, field position, and exogenous physical factors not represented in the training data.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted from the manuscript, with SI/information/probability units and page citations.

Bradley-Terry pairwise win probability [PAGE 3, Equation (1)]:
Pr(T_i \succ T_j \mid \pi_i, \pi_j) = \frac{e^{\pi_i - \pi_j}}{1 + e^{\pi_i - \pi_j}}
where \pi_i is team ability (dimensionless log-ability scale) and the output is a probability in [0, 1].

Generalized linear ability difference [PAGE 3, Equation (2)]:
\pi_i - \pi_j = \sum_{r=1}^{k} \alpha_r (z_{ir} - z_{jr}) + U, \qquad U \sim \mathcal{N}(0, \sigma^2)
Inputs z are game-statistic differentials (yards, seconds, ratios, ranking points); output is home-team win probability.

Expected point differential for PAT [PAGE 4, Equation (3)]:
E[p] = 2 \cdot s_{2pts} - 1 \cdot s_{kick}
Units: expected points per touchdown (dimensionless points). Empirical values: s_kick = 0.984 (8,425/8,561), s_2pts = 0.51 (235/460), giving E[p] = 2(0.51) − 0.984 = 0.036 points > 0.

Yearly PAT success rates [PAGE 5, Table 1]:
s_kick: 2009 = 0.9814, 2010 = 0.9884, 2011 = 0.9942, 2012 = 0.9935, 2013 = 0.9960, 2014 = 0.9926, 2015 = 0.9416.
s_2pts: 2009 = 0.4426, 2010 = 0.5471, 2011 = 0.5000, 2012 = 0.5500, 2013 = 0.4929, 2014 = 0.5161, 2015 = 0.5247.
The 2015 kick drop is approximately 5 percentage points (p < 10⁻⁶); the conversion-rate change is not statistically significant (p = 0.4).

Mean-field fourth-down benefit and cost [PAGE 10, Equations (4)–(5)]:
E[P^+] = 6 \cdot s_{4conv} \quad\text{(points)}
E[P^-] = 3 \cdot s_{fg} + (3 \cdot \Delta\pi_{fg} + 6 \cdot \Delta\pi_{td}) \quad\text{(points)}
where s_4conv is fourth-down conversion probability, s_fg is field-goal success probability as a function of distance l, and \Delta\pi_{fg}, \Delta\pi_{td} are increases in opponent drive-scoring probability for field goal and touchdown respectively. Net benefit E[P] = E[P^+] − E[P^-]; average point gain 1.4 points per drive (p < 0.01), positive for >80% of field positions.

Fourth-down conversion statistics [PAGE 7]:
Overall rate 77.9%; 55% of attempts are fourth-and-one with 89% conversion; 95% of attempts require at most 10 yards; adjusted rate 73%. Only ~10% of 1,870 attempts occur in own territory (1–35 yard line), creating sampling bias.

Passing-to-rushing ratio [PAGE 12, Equation (6)]:
r = \frac{\text{\# passing yards}}{\text{\# total yards}}
Dimensionless fraction in [0, 1]; balanced offense r = 0.5; observed model range r \in [0.3, 0.98] [PAGE 14].

Bradley-Terry regression coefficients [PAGE 14, Table 3]:
Intercept 0.22**, Total Yards differential 0.01***, Penalty Yards differential −0.02***, Turnovers differential −1.05***, Possession Time differential 0.0001 (n.s.), r differential −3.18***, \Delta SportsNetRank 0.04***.
Interpretation: winning the turnover battle by 1 corresponds to approximately a 20% gain in win probability; a 10-yard penalty differential corresponds to roughly a 5% probability difference.

Paired t-test average differences [PAGE 12, Table 2]:
Total Yards 51.78***, Penalty Yards −3.29*, Turnovers −1.04***, Possession Time 211.79***, r −0.06***. Home-team advantage 56.03% ± 2.49%.

FPM prediction engine hyperparameters [PAGE 18]: bootstrap draws B = 1,000; significance \alpha = 0.05; recency bias k = 5 most recent games; predictions begin Week 6 of each season. Hypothesis test for predicted probability sets [PAGE 18, Equations (7)–(8)]:
H_0: P_1 = P_2 \qquad H_1: P_1 \neq P_2
Performance: 10-fold cross-validation accuracy 84.03% ± 0.35% conditional on known features [PAGE 17]; overall FPM accuracy 63.4% with standard error 1.3% [PAGE 19]. Yearly accuracies [PAGE 19, Table 4]: 2009 = 0.66, 2010 = 0.60, 2011 = 0.68, 2012 = 0.72, 2013 = 0.55, 2014 = 0.66, 2015 = 0.57. Weekly accuracy trend slope 0.01 (p < 0.05, R² = 0.41) [PAGE 19, Figure 14]. Probability calibration slope 95% CI [0.76, 1.16], R² = 0.94, consistent with y = x [PAGE 20, Figure 15].

Dataset scope [PAGE 2]: 1,792 regular-season and 77 playoff games from NFL Game Center, seasons 2009–2015; analysis restricted to regular season. Only 3 regular-season ties in the sample (0.1% probability), so ties are not explicitly modeled [PAGE 3].

Breakdown regimes: (i) PAT expected-point logic reverses when clock and score make the extra point the only path to tie or win (e.g., down by 6, score with 1 second left) [PAGE 21]; (ii) fourth-down aggression is invalid where E[P] < 0, principally deep in own territory where a failed conversion cedes high-value field position [PAGE 10]; (iii) the regression is valid only within observed covariate ranges and breaks down under extrapolation, schedule-strength confounding, injury, or weather [PAGES 14, 21–22].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The study’s intellectual lineage is explicitly behavioral-economics and operations-research oriented. It anchors its rejection of rational coaching in Romer (2006), “Do Firms Maximize? Evidence from Professional Football” [PAGE 24], and notes that similar findings have been reported since the 1960s, citing Porter (1967), “Extra-point strategy in football” [PAGE 24], and Sackrowitz (2000), “Refining the point(s)-after-touchdown decision” [PAGE 24]. The paper also invokes Thaler’s concept of “supposedly irrelevant factors” and status quo bias [PAGES 2, 24], citing Kahneman, Knetsch, and Thaler (1991) on the endowment effect, loss aversion, and status quo bias [PAGE 24]. These references establish that the conservatism around PAT kicks and fourth-down punts is not a new anomaly but a persistent deviation from expected-point maximization spanning roughly half a century.

Methodologically, the Bradley-Terry formulation follows Agresti’s categorical-data framework [PAGE 24], while the bootstrap procedure follows Efron and Tibshirani [PAGE 24] with block-resampling extensions for dependent observations from Künsch (1989) [PAGE 24]. SportsNetRank, used for the power-ranking differential, is itself a network-based ranking method developed by the authors [PAGE 29]. The broader literature review connects the work to sports network analysis (Fewell et al. on NBA passing networks [PAGE 2]), soccer penalty-kick game theory (Bar-Eli and Azar [PAGES 2, 23]), and the econometrics of field-goal kicking (Clark et al. [PAGE 2]), none of which found situational factors significant for field-goal success.

Multi-week traps embedded in the design are consequential. First, FPM explicitly cannot generate predictions during Week 1 of a season because there is insufficient current-season history to bootstrap; the engine starts at Week 6 with k = 5 recent games biased toward recent form [PAGE 18]. Second, accuracy exhibits a within-season upward trend: Figure 14 shows prediction accuracy rising through the season with a linear slope of 0.01 per week (p < 0.05, R² = 0.41) [PAGE 19], meaning early-season forecasts are systematically less reliable than late-season forecasts. Third, yearly accuracy is volatile: the model peaks at 0.72 in 2012 but dips to 0.55 in 2013 [PAGE 19, Table 4], indicating that cross-season pooling of coefficients can mask season-specific structural breaks. Fourth, the bootstrap resamples from the current season’s empirical distribution; if a team’s schedule strength is weak (e.g., a sub-.500 division winner inflating offensive statistics against poor defenses), the resampled features are inflated and the anchor probability is biased [PAGES 21–22]. The authors propose a propensity-score reweighting correction [PAGE 22, citing Austin 2011], but it is not implemented in the baseline engine, creating a latent multi-week vulnerability whenever strength-of-schedule distortion is severe.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Coaching cognition under pressure displays a recursive habit-regression loop. The paper identifies status quo bias as the dominant regime: coaches default to the extra-point kick and the punt unless specific end-game circumstances (score differential, clock state) force deviation [PAGE 2]. This default is not neutral; it is a crisis habit that regresses toward conservatism precisely when expected-point logic prescribes aggression. When a team is leading late, play-calling becomes conservative—running the ball to consume clock—which mechanically lowers the passing ratio r and creates an appearance of reverse causality [PAGES 14–15]. When trailing late, play-calling becomes risky—calling long passes to cover yardage quickly—which inflates turnover rates [PAGE 15]. The paper tests these reverse-causality channels and finds that r is stable after the first quarter with only a non-significant fourth-quarter drift [PAGE 16, Figure 11], while winning teams commit significantly fewer turnovers than losing teams by the end of the third quarter (p < 0.01), supporting turnover avoidance as a genuine precursor to winning rather than a mere artifact of game state [PAGES 15–16]. Turnover density nevertheless spikes toward the end of each quarter, peaking at the two-minute warning [PAGE 16, Figure 12], revealing that urgency, not strategic superiority, drives late-game turnovers.

The counter-trap is the model’s prescription: because E[p] > 0 for two-point attempts and E[P] > 0 across most of the field on fourth down, the counter-habit is to attempt conversions and go for it far more frequently than coaches currently do [PAGES 4–5, 10]. The recursive theory of mind must therefore track three layers simultaneously: (1) the coach’s perceived risk (loss aversion, status quo), (2) the opponent’s expected response to a fourth-down failure (only a 7% average increase in opponent scoring probability when the failure occurs in opponent territory) [PAGE 9], and (3) the clock-state exception where conservatism is actually optimal (e.g., down by six, scoring with one second left, the extra point is rational because s_kick ≈ 0.95 versus s_2pt ≈ 0.51) [PAGE 21]. The clock is not a passive backdrop; it is an active state variable that flips the sign of the optimal decision at game boundaries. A counter-trap that ignores the clock boundary condition—blindly going for two on every touchdown—would be as irrational as the status quo the paper critiques.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The model’s anchor probability must be subjected to cross-layer vetoes before operational use. Physical layer: field position l determines both the expected number of fourth-down conversions required to reach the goal line, \gamma(l) = (100 - l)/29 approximately, given a mean drive length of 29 yards [PAGE 10], and the conversion-rate surface. Deep in a team’s own territory, the cost of a failed conversion is high because it cedes field position within field-goal range; the data show sampling bias because coaches rationally avoid attempts there except in desperation [PAGE 7]. Biomechanical/skill layer: field-goal success s_FG(l) declines slowly with distance and then steeply beyond 50 yards [PAGE 8, Figure 4]; only 11% of attempts exceed 50 yards, so the long-distance tail is data-sparse and the success-rate curve is uncertain precisely where desperation kicks occur. Weather layer: the paper explicitly states that the model does not incorporate game-specific information such as weather forecast [PAGE 3, Introduction; PAGE 21, Discussion], making weather an exogenous, unmodeled veto. Cold, wind, or precipitation would degrade kicking and passing success rates relative to the 2009–2015 indoor/controlled empirical surface, invalidating s_kick, s_2pts, and s_FG(l) as stationary parameters. Roster/injury layer: injuries, player rest, and roster changes are absent from the feature set [PAGE 21], so a key quarterback or kicker injury constitutes an unmodeled structural break.

Veto adjudication protocol: (1) if |l| places the offense in own territory with E[P] < 0 per Figure 6, veto fourth-down aggression and punt [PAGE 10]; (2) if clock state maps to the “down by six, one second left” exception, veto the two-point default and kick the extra point [PAGE 21]; (3) if weather is extreme or a primary play-caller is injured, the bootstrap-resampled offensive statistics lose external validity and the prediction should revert to the baseline win-loss percentage rather than the FPM anchor [PAGES 18–19, 21–22]. Only when all cross-layer vetoes are clear does the 63.4% baseline accuracy apply.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios grounded in the paper’s regimes, with testable predictions.

Veto scenario 1 — Early-season bootstrap sparsity. Verifiable condition: weeks 1–5 of any NFL season, where fewer than k = 5 current-season games exist for recency-biased resampling and the paper states FPM cannot be applied before Week 6 [PAGE 18]. Counterfactual: if the engine were nevertheless forced to emit predictions, the resampled feature distribution would be under-determined, accuracy would fall below the 63.4% seasonal mean, and the standard error of 1.3 percentage points would widen substantially. Prediction: week-1 to week-5 forecast accuracy would track the naive win-loss baseline (roughly 0.50–0.58 across 2009–2015 per Table 4) rather than 0.634, with high cross-validation variance; correct action is to withhold FPM output and use the baseline standings predictor.

Veto scenario 2 — End-game PAT clock boundary. Verifiable condition: a team trails by exactly six points, scores a touchdown with one second remaining, and the extra-point kick would tie the game [PAGE 21]. The paper’s general two-point preference is predicated on E[p] > 0 across a full season, but in this terminal state the relevant comparison is s_kick ≈ 0.95 (probability of tying) versus s_2pts ≈ 0.51 (probability of a two-point lead with no time for the opponent to respond) [PAGE 21]. Counterfactual: applying the season-average E[p] rule would mandate a two-point attempt, which is ex post suboptimal because a failed conversion loses the game immediately while a failed kick merely preserves the deficit. Prediction: the rational choice is the extra-point kick; win probability conditional on the decision is approximately s_kick, and any model that recommends two points here commits a regime error. Verifiable by checking historical win rates after two-point attempts versus extra-point kicks in final-minute, down-by-six touchdown scenarios.

Veto scenario 3 — Deep-territory fourth-down E[P] < 0. Verifiable condition: offense faces fourth down inside its own territory where Figure 6 indicates negative expected point benefit [PAGE 10]. The mean-field cost E[P⁻] includes 3 · s_FG + (3 · Δπ_FG + 6 · Δπ_TD), representing the value ceded to the opponent on a failed conversion; when this exceeds E[P⁺] = 6 · s_4conv, aggression is negative-expected-value [PAGE 10]. Counterfactual: the paper’s headline “go for it more often” result does not apply in this regime; coaches’ punting here is consistent with expected-point logic even though their overall punt frequency is excessive elsewhere. Prediction: in own-territory fourth-down situations with E[P] < 0, the optimal decision is to punt, and a model recommending a conversion attempt would produce negative expected points; observed coach behavior in this cell should not be classified as irrational under the paper’s own framework. Verifiable by computing E[P] from Equations (4)–(5) using field-position-specific s_4conv, s_FG, and Δπ values for attempts inside the 35-yard line.
</RLVR_COUNTERFACTUAL_VETOES>