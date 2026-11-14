---
source: "2019 - Home Sweet Home Quantifying Home Court Advantages for NCAA Basketball Statistics - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2019"
pages: 1
model: deepseek/deepseek-v4.1-flash-1017
words: 6461
---

<NATIVE_REASONING>
We need answer user asks: They provided drive source and pages. Need produce structured XML sections exact. Need follow invariants: no betting lines. Need 1000+ words depth across exact sections. Need cite [PAGE 1] markers and verbatim quotes from source text. Need not mention spreads/totals/moneylines/odds. Need formal LaTeX equations, units, assumptions, singularities/breakdown regimes. Source is one-page poster about NCAA basketball home court advantages. Need derive multi-hop, gray-zone audit. Need include source operators/equations. Need ret causal genealogy. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need likely no betting lines. Need carefully avoid betting terms. Even "odds" not use. "point totals" source says point totals—allowed? It says zero betting lines never mention spreads, totals, moneylines, or odds. The source mentions "point totals"; if I quote verbatim maybe "point totals" includes totals? Hmm invariant says never mention spreads, totals, moneylines, or odds. But source has "point totals"—must cite verbatim. Conflict? We can avoid quoting that phrase or use brackets? Need cite exact markers and verbatim quotes. We can quote other phrases. Avoid word "totals" outside quote. Maybe don't quote "point totals." Need not mention. In equations, can have y_i counts. Use "score differential" maybe not betting. Avoid "total" maybe use "score sums" but source says point totals; to avoid invariant, we can say "scoring aggregates" and not quote that phrase. But if need cite, quote "Referee bias appears to have a greater impact on point totals in D2 and D3, compared to D1." Contains "totals." Zero betting lines: mentioning point totals in a statistical sense might violate literal? Better avoid entirely. Could paraphrase and quote other sentences.

Need produce at least 1000 words. Need exact XML sections. Let's plan robust response.

Need include:
- THINK_TRACE >=400 words. Multi-hop derivation, gray-zone audit. Discuss units, model.
- SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX, units, page citations, breakdown. Include:
  - Home/away/neutral contrast: Δ_H = E[Y|home] - E[Y|neutral]; Δ_A = E[Y|neutral] - E[Y|away]? Source defines (A) – neutral teams' advantage over away teams; (H) – home teams' advantage over neutral teams. So define A = μ_N - μ_A, H = μ_H - μ_N maybe. Actually "neutral teams’ advantage over away teams" means neutral minus away; home advantage over neutral = home minus neutral. So D_home-away = H + A = μ_H - μ_A. Units: count per game for AST, BLK, OREB, FGA, FG%, 3FG%, FT%, PF, FTA; percentages as proportion or percentage points. Need be careful.
  - RPI formula exact: RPI = 0.25*Team Win% + 0.50*Opponents' Win% + 0.25*Opponents' Opponents' Win%; RPI' = Home RPI - Away RPI.
  - Matching/bootstrap: repeat 1000 times, 1000 tests, average p-values. Alpha=0.0006 Bonferroni. Two-sample t-tests.
  - LASSO Poisson: \hat\beta = argmin_{β0,β} -1/N Σ [ y_i(β0+β x_i) - exp(β0+β x_i)] + λ Σ |β_j|. Need perhaps include correct index. Source formula has missing exp? It shows −1/N ∑( yi(β0+β xi)−e^{β0+βxi}) + λ∑|βj|. Use that. Percentage impact = e^{β_j}-1. Units: multiplicative ratio dimensionless; if multiplied by 100, percent. Poisson intensity counts per game/possession? Predict statistic counts controlling for RPI', possessions, gender/division. Need state assumption log link, independent counts conditional on covariates, no overdispersion? Breakdown: quasi-complete separation, zero counts, perfect collinearity, lambda selection, nonrandom scorekeeping, matching overlap violation, bootstrap failure, multiple testing.
  - Home boosts equivalent to 12 and 43 additional possessions for AST/BLK. Need cite quote exact: "The home court boosts for AST and BLK were equivalent to having 12 and 43 additional possessions in a game respectively" [PAGE 1]. Units: possessions/game. Could derive possession-equivalent: Δ count = exp(β_poss) *? Wait if model predicts counts with possessions coefficient, equivalent additional possessions = Δ_hat / β_poss? Need specify if linearized on log scale: Δlog μ = β_poss * ΔPoss; so ΔPoss_equiv = β_home/β_poss. But source just gives. Need mention sign and units.
  - Correlation 0.85 between team strength advantage coefficients and home advantage coefficients; scorekeepers may be biased in favor of stronger teams. Quote exact: "Team strength advantage coefficients were highly correlated (0.85) with home advantage coefficients, thus scorekeepers may have been more biased in favor of stronger teams" [PAGE 1].
  - Other quotes: "Home teams outperformed away (and neutral location) teams in nearly all statistics across every gender-division-season combination" [PAGE 1]; "AST and BLK (the most subjective statistics) had the greatest home advantages and much of the advantages remained when compared to neutral location teams" [PAGE 1]; "Scorekeepers tended to have greater home team biases when observing men compared to women or higher divisions compared to lower divisions" [PAGE 1]; "Referee decisions appear to be affected by crowd size: both PF and FTA have significantly different home team advantages in high attendance games compared to low attendance games in 5 of the 6 gender-division combinations (all but D2 Women)." [PAGE 1] This quote has PF and FTA; no betting. Good.
  - "No evidence of attendance impact on FT% was discovered." and "No evidence of attendance impact on scorekeepers was discovered." Good.
  - Could quote "The matching algorithm has a random component, so we repeat the process 1000 times for each statistic, performing 1000 distinct tests, and display the average p-value results in the following table:" [PAGE 1].
- Need maybe include "negative values – p-values multiplied by -1 when away teams had advantage" but not necessary.
- Need cite [PAGE 1] exact.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Discuss home advantage literature, crowd effects, referee bias, scorekeeper bias, RPI, LASSO, bootstrap, Bonferroni. Multi-week traps: confounding team strength, schedule, neutral-site selection, attendance endogeneity, scorekeeper subjectivity, gender/division heterogeneity, repeated tests, p-value averaging, matching algorithm stochasticity, RPI' imperfect, possessions mediator, etc. Need 150+ words maybe.
- "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Need interpret. Could be about modeling opponent/scorekeeper/referee theory of mind. Crisis habit regression: teams under pressure revert to habits; counter-trap: overadjusting to perceived bias; clock: time remaining / late-game. Need tie to source: subjective stats AST/BLK, scorekeeper bias, referee decisions PF/FTA, attendance. Need discuss recursive beliefs: players/refs/scorekeepers infer intent. Need no betting. Need maybe "clock" as game clock late-game pressure. Need mention not use as betting. Need 150+.
- "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need prove veto conditions. For basketball indoor sport, weather veto unlikely except travel/arena conditions. Physical: fatigue, injury, altitude? Biomechanical: shooting mechanics, jump, landing, foul contact. Need state if these veto statistical home advantage: e.g., if high-attendance games differ by venue acoustics, travel, altitude, injury status, then causal claim vetoed. Need "proof" maybe formal conditional independence: H advantage not identified if attendance A depends on unmeasured U and U affects Y. Need state cross-layer veto: physical/biomechanical/weather variables must be controlled or shown no association. Use equations: Y ⊥ A | (RPI', Poss, Gender, Division, X_phys, X_bio, X_weather) needed; else veto. Need mention indoor weather minimal, but travel delays, HVAC, court conditions, altitude, back-to-back. Biomechanics: free-throw percentage, 3FG% mechanics, block/rebound. Physical: fatigue, injury. Need "proof" via DAG: A ← U → Y; matching on RPI' not enough. Need no fake ratios. Good.
- "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need likely RLVR = reinforcement learning from verifiable rewards? Provide 3 counterfactual veto scenarios: (1) Re-run matching with equal RPI' and venue covariates; if home advantage for AST/BLK vanishes when scorekeeper identity included, veto subjective-stat causal claim. Prediction: AST/BLK home coefficients shrink to near zero or nonsignificance, while objective stats remain. (2) Randomize attendance? Not feasible; use exogenous attendance shocks (weather? no; ticket promotions, opponent star, venue capacity). If high attendance no effect after controlling for team strength and venue fixed effects, veto crowd/referee causal claim. Prediction: PF/FTA home differences attenuate. (3) Pre-register Bonferroni alpha and independent replication; if p-values not below 0.0006 after correcting for all stats/gender/division, veto significance. Prediction: some D2 women etc. fail. Need "verifiable" with metrics. Use exact predictions: coefficients, p-values, CI. Need not mention betting. Could specify "AST and BLK home boost equivalent to 12 and 43 possessions" as target; if counterfactual removes scorekeeper bias, those equivalents should drop below say <5 possessions. Need be careful not invent too precise? It's okay predictions. Need label as predictions.

Need overall >=1000 words. Need likely 2000+ words. Need include exact XML tags. No extra outside? User asked exact XML sections. We can output only XML sections. Need ensure opening/closing tags exactly. Need word count. Let's craft around 2500 words.

Need avoid betting words: no "spread", "total", "moneyline", "odds". But "point totals" source phrase—avoid. "score differential" okay? It might be betting-ish but not line. Use "scoring aggregates" or "score margin"? No lines. Avoid "over/under". "home advantage" okay. "attendance" okay. "FTA" free throw attempts. "PF" personal fouls. Good.

Need not mention "betting" at all. Invariant says zero betting lines, not zero word betting? Better don't mention. Avoid "line". "lineage" contains line? Hmm "lineage" okay? It says betting lines. But to be safe? Section title requires RETROCAUSAL_GENEALOGY; no line. "linear" contains line? Could be okay. But avoid "line" as standalone. "lineage" not line. Fine.

Need include "SI/information/probability units". Need specify units:
- Counts: count game^{-1}
- Percentages: proportion or percentage points
- RPI: dimensionless in [0,1]
- β: log-count per unit covariate; eβ−1 dimensionless multiplicative factor.
- p-values: probability in [0,1]. α=0.0006 dimensionless probability.
- Possessions: possession game^{-1}.
- Correlation: dimensionless.
- Attendance: persons game^{-1}? Actually attendance count per game.
- Information: maybe p-value as evidence? Could mention -log10 p as information? Need not fake. Could state likelihood ratio in nats? Maybe not necessary. "SI/information/probability units" requirement. Include p-values as probability; log-likelihood nats if used; Poisson deviance. Need mention not using fake ratios. Good.

Need source page citations exact [PAGE 1] markers. Every quote with [PAGE 1]. Need verbatim. Let's list quotes:
1. "Home teams outperformed away (and neutral location) teams in nearly all statistics across every gender-division-season combination" [PAGE 1]
2. "AST and BLK (the most subjective statistics) had the greatest home advantages and much of the advantages remained when compared to neutral location teams" [PAGE 1]
3. "Home teams experienced a big boost in FG% and 3FG%, while away teams performed slightly worse than neutral location teams" [PAGE 1]
4. "FT% was negatively impacted for away teams compared to neutral location teams but home teams did not receive an additional boost" [PAGE 1]
5. "Scorekeepers tended to have greater home team biases when observing men compared to women or higher divisions compared to lower divisions" [PAGE 1]
6. "Referee decisions appear to be affected by crowd size: both PF and FTA have significantly different home team advantages in high attendance games compared to low attendance games in 5 of the 6 gender-division combinations (all but D2 Women)." [PAGE 1]
7. "No evidence of attendance impact on FT% was discovered." [PAGE 1]
8. "No evidence of attendance impact on scorekeepers was discovered." [PAGE 1]
9. "The home court boosts for AST and BLK were equivalent to having 12 and 43 additional possessions in a game respectively" [PAGE 1]
10. "Team strength advantage coefficients were highly correlated (0.85) with home advantage coefficients, thus scorekeepers may have been more biased in favor of stronger teams" [PAGE 1]
11. "The matching algorithm has a random component, so we repeat the process 1000 times for each statistic, performing 1000 distinct tests, and display the average p-value results in the following table:" [PAGE 1]
12. "RPI = (0.25 * Team Win %) + (0.50 * Opponents’ Win %) + (0.25 * Opponents’ Opponents’ Win %)" [PAGE 1]
13. "RPI' = Home RPI - Away RPI" [PAGE 1]
14. "Statistical matching and bootstrap sampling used to construct new high attendance (High*) distributions, with equal RPI’ distributions to low attendance." [PAGE 1] (Note source has High* distributions and High* samples; quote one)
15. "Bold p-values – significant home advantage at α = 0.0006 (Bonferroni correction)" [PAGE 1]
16. "Using over 100,000 games between the 2011-2012 and 2015-2016 seasons..." quote maybe.
Need exact punctuation. Use ellipsis if truncated but verbatim segments okay. Need not overquote.

Need equations:
- Define H_g = μ_H,g - μ_N,g; A_g = μ_N,g - μ_A,g; D_g = μ_H,g - μ_A,g = H_g + A_g. g indexes gender-division-season-stat.
- Units: counts game^{-1} or percentage points.
- For percentage stats, μ as proportion; D as proportion, can convert ×100 to pp.
- Attendance high/low: Δ_att = [μ_H−μ_A | high] - [μ_H−μ_A | low]. Test two-sample t with p. Need p averaged over 1000 stochastic matching runs. α_adj = 0.05 / m? Source says α=0.0006 Bonferroni. Need maybe m≈83? 0.05/0.0006=83.3. But not necessary. Use α=0.0006 probability. Bold significant.
- RPI formula dimensionless.
- LASSO Poisson objective. Need write:
\[
(\hat\beta_0,\hat\beta)=\arg\min_{\beta_0,\beta}\left[-\frac1N\sum_{i=1}^N\{y_i(\beta_0+\beta^\top x_i)-\exp(\beta_0+\beta^\top x_i)\}+\lambda\sum_{j=1}^p|\beta_j|\right]
\]
Units: y_i counts per game/season? Actually counts; x_i includes RPI', possessions, gender/division dummies. β_j log-count per unit x_j; exp(β_j)-1 multiplicative. λ units? log-likelihood penalty in nats per count? λ has units of nats per coefficient? Counts dimensionless. Could say objective in log-likelihood units (nats) plus penalty in same units. η_i = β0 + β^T x_i log mean count. μ_i = exp η_i count. Assumption: Poisson variance=mean; if overdispersed, quasi-Poisson/negative binomial needed. Need mention breakdown if overdispersion. Good.
- Possession equivalent:
\[
\Delta \hat y_{\text{home}} \approx \hat\mu(\eta+\beta_{\text{home}})-\hat\mu(\eta)
\]
and equivalent possessions:
\[
\Delta P_{\rm eq} = \hat\beta_{\rm home}/\hat\beta_{\rm poss}
\]
if log-linear with possessions and no interactions; units possession game^{-1}. Source reports 12 and 43 possessions for AST/BLK [PAGE 1]. If interactions or nonlinearity, approximate; exact solve \(\exp(\beta_{\rm home}) = \exp(\beta_{\rm poss}\Delta P_{\rm eq})\). But if both on log scale: \Delta P_eq = β_home/β_poss. Need mention assumption no other covariates change and same scale. Good.

Need "singularity/breakdown regimes" exact:
- Matching: no overlap in RPI' distributions -> matching impossible; positivity violation.
- Bootstrap: degenerate distributions, zero variance -> bootstrap CI fails.
- Poisson LASSO: complete separation or zero counts for gender/division cells -> coefficient diverges/penalized to zero; λ=0 with collinearity -> nonunique; λ→∞ -> all β=0.
- RPI: if opponents' win % all zero? no; denominator? RPI bounded. If win % undefined at no games. Possessions zero or missing -> log link okay but equivalence division by β_poss=0 singular; if β_poss=0, possession-equivalent undefined/infinite. Need mention.
- Alpha Bonferroni: if m large, α_adj too small; p average across stochastic matching is not a valid p-value? Breakdown: averaging p-values over random matching can distort uniform distribution; not a formal p-value unless corrected. Good.
- Attendance endogeneity: high attendance correlated with team quality, venue capacity, opponent, schedule; matching on RPI' only not enough. Need mention.
- Scorekeeper subjectivity: AST/BLK subjective; not objective physical performance; home advantage may be measurement bias, not causal crowd effect.
- "No evidence of attendance impact on scorekeepers" conflicts with "scorekeepers may have been more biased in favor of stronger teams" not necessarily attendance. Gray zone.

Need "cross-layer veto proof": We can state a causal DAG and identification condition:
Let T = home status, A = attendance, S = scorekeeper, R = referee, V = venue/weather, P = physical load, B = biomechanical state, Y = statistic. Need estimate ATE:
\[
\mathrm{ATE} = \mathbb E[Y|do(T=home)] - \mathbb E[Y|do(T=away)].
\]
Observational contrast identifies ATE if \(Y(t) \perp T | X\) and positivity. With unmeasured U (team strength, injury, travel, weather), need \(T \perp Y(t)|X,U\). Cross-layer veto if \(U\) affects both T and Y and is not controlled. Physical/biomechanical/weather veto variables: injury/fatigue, minutes, altitude, HVAC, court surface, travel, sleep. If one of these differs by home/away/neutral and is associated with outcome, then home coefficient is confounded. "Proof" by conditional independence test. Need maybe write:
\[
\text{Veto}_{phys} = 1\{\hat\beta_{T}\text{ changes sign or loses significance when }X_{phys}\text{ included}\}
\]
and similarly. But "proof" maybe not formal. Use "falsification criterion." Good.

Need "Recursive theory of mind": maybe discuss players' beliefs about referee bias:
- Referee/scorekeeper is an agent with latent bias b; home team/away team infer b from early calls; adjust behavior. Recursive: players model ref's model of them. Crisis habit regression: under high attendance/late clock, players revert to trained habits (e.g., fouling, shot selection), not strategic adjustment. Counter-trap: if away team expects bias, it may overcorrect (avoid contact, rush shots), which can worsen FG%/FT% or alter PF/FTA. Clock: late-game fouls and free throws, time remaining creates nonstationarity; referee bias and scorekeeper subjectivity may concentrate. Source: PF/FTA attendance effects, no FT% attendance effect. Need say "clock" as game clock not betting. Use no betting. Mention "multi-week traps" maybe in genealogy: weekly aggregation can hide scheduling and fatigue; repeated tests inflate false positives; "trap" of treating average p-values as independent evidence. Good.

Need "RLVR counterfactual vetoes": Maybe "RLVR" as "reinforcement learning with verifiable rewards" not in source. Need produce 3 scenarios with predictions. Could structure:
1. Scorekeeper-identity ablation. Counterfactual: re-estimate Poisson LASSO with scorekeeper fixed effects and randomized audit of AST/BLK. Veto if adjusted eβ−1 for home is <5% and CI includes 0 for AST/BLK. Prediction: source's 12/43 possession equivalents shrink; objective stats remain. (But 12/43 are possessions equivalents not percentages.)
2. Attendance exogenous shock. Use ticket promotions/venue capacity as instruments or matched high/low attendance within same home team, opponent, division, date. Veto if Δ_att(p PF/FTA) not significant at α=0.0006 and |Δ|<0.2 counts/game. Prediction: D1 men's effect persists? Need align source says 5 of 6 except D2 women. Prediction: D2 women null remains; D1 smaller; D2/D3 scoring aggregates effects? Hmm avoid "point totals." Say "score aggregates" maybe. But source says referee bias greater impact on point totals in D2/D3. Could mention "scoring aggregates" not quote. Prediction: D2/D3 effects attenuate after venue fixed effects. Good.
3. Independent replication with pre-registered Bonferroni across all gender-division-statistic cells and no p-value averaging. Veto if fewer than X cells significant. Prediction: AST/BLK and PF/FTA survive for men, FT% no attendance effect; some cells fail. Need be verifiable. Maybe specify "at α=0.0006, at least 5 of 6 gender-division combinations for PF/FTA show significant high-vs-low attendance difference" matches source. Veto if <5. Prediction: 5/6 replicate; D2 women fail. That's verifiable. Good.

Need "THINK_TRACE" deep multi-hop derivation. Need be at least 400 words. Could write:
1. Start from source design: 100,000 games, 2011-12 to 2015-16, three divisions, both genders. Compare home/away/neutral. Decompose H and A.
2. Need control team strength via RPI' because home teams may be stronger. RPI formula. But RPI' is not perfect: RPI includes win % which is affected by home advantage—endogeneity loop. Multi-hop: RPI uses Team Win% which includes games being analyzed; home advantage affects win%; controlling for RPI' may partially control away the effect of interest (overcontrol) and induce collider bias if RPI' is a descendant of home status. This is key gray-zone. Need discuss. Good.
3. Attendance matching: high vs low attendance; matching on RPI' only. Attendance may be endogenous to team quality, opponent, venue, promotions. Matching stochastic, 1000 repeats; averaging p-values. Need not treat as independent. Bonferroni α=0.0006.
4. Poisson LASSO: counts AST, BLK, OREB, FGA etc. Log link; controlling RPI', possessions, gender/division. Possessions is mediator? Home advantage may operate through possessions; controlling possessions could block causal pathway, yielding direct effect not total. Need audit. Also LASSO selection instability; empty cells. Need mention.
5. Subjective stats AST/BLK: scorekeeper bias; coefficient correlation 0.85 with team strength suggests measurement bias, not physical. Need distinguish referee vs scorekeeper.
6. Conclusion: evidence supports descriptive home-neutral-away contrasts, crowd association with PF/FTA, but causal identification limited; physical/biomechanical/weather vetoes needed; clock and recursive behavior could confound late-game stats. Need no betting. Good.

Need maybe mention "A" and "H" definitions: Source says "(A) – neutral teams’ advantage over away teams; (H) – home teams’ advantage over neutral teams" [PAGE 1]. Use exactly. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS": Formal. Need include citations. Need maybe "Operators" like difference operator, expectation, matching operator, bootstrap, LASSO, Poisson, Bonferroni. Use notation. Need cite exact.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Need maybe 200-300 words. Discuss lineage from home advantage literature: crowd noise, referee bias, social facilitation, venue familiarity, travel, scorekeeper bias. Methods lineage: RPI (Sagarin-like), matching, bootstrap, LASSO Poisson (Tibshirani, Friedman et al.), multiple comparisons (Bonferroni). Multi-week traps: small weekly samples, schedule imbalance, conference play, exam periods, injuries, weather/travel; averaging p-values over repeated stochastic matching; peeking; "hot hand" like streak fallacies; treating neutral-site games as random (they are selected). Need not mention betting. Good.

Need "RECURSIVE_THEORY_OF_MIND": Need at least 150 words. Discuss agents: players, referees, scorekeepers. Recursive beliefs:
- Player believes referee has bias b; referee believes player will test contact; scorekeeper believes home crowd expects assist. This recursive loop can create behavioral shifts.
- Crisis habit regression: under high attendance or late clock, players revert to habitual motor patterns (e.g., free-throw routine, shot selection) rather than deliberative adjustment. This predicts FT% stability (source no attendance impact on FT%) but PF/FTA changes due to contact behavior/referee decisions.
- Counter-trap: away team overcorrects against perceived bias, avoids contact -> fewer FTA, more passive; home team exploits expected leniency -> more contact -> more FTA/PF. But if both anticipate, effects may cancel. Need state testable implications.
- Clock: late-game intentional fouling changes PF/FTA and FT% denominators; need clock-stratified analysis. Source uses game-level counts; late-game behavior can confound attendance effects. Need mention "clock" as game clock, not betting. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": Need physical/biomechanical/weather veto proof. Could write:
- Define cross-layer covariates X_C = {travel distance, rest days, altitude, injury/minutes, HVAC/temperature/humidity, court surface, back-to-back, sleep}. For indoor basketball, weather direct effect small but travel delays and arena climate possible. Physical: fatigue/injury affect FG%, 3FG%, FT%, OREB, BLK. Biomechanical: shooting mechanics, jump landing, contact balance affect FT%, 3FG%, BLK, PF. If these differ systematically by home/away/neutral or high/low attendance and are not controlled, the estimated home coefficient is a composite. Veto if including X_C changes sign or removes significance. Need formal:
\[
\hat\tau_{\text{adj}} = \hat E[Y|T=home,X] - \hat E[Y|T=away,X]
\]
and veto if \(|\hat\tau_{\text{adj}} - \hat\tau_{\text{unadj}}| > \delta\) or CI includes 0. Need "proof" maybe "falsification proof": cross-layer veto is established by conditional independence test \(Y \perp T | X_{\text{core}}, X_C\) vs \(Y \not\perp T | X_{\text{core}}\). If not rejected, no veto. But absence of evidence not proof. Need state. Use no fake ratios. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. Need maybe include "verifiable" with measurable outcomes. Good.

Need final answer only XML. Need maintain exact section tags. Need enough words. Let's draft carefully.

Need check word count. Aim 2200. Let's write.

Potential issue: "source pages provided" only PAGE 1. Cite all with [PAGE 1]. Good.

Need not mention "odds". Avoid "total" word? Source phrase "point totals" not use. Use "scoring aggregates" or "score sums" maybe. "totals" appears in section title? No. Avoid "total" entirely? It may appear in "total effect" if I write. Avoid. Use "overall effect". Avoid "spread" (could appear "spread" not). Avoid "line" in "lineage"? Section title has GENEALOGY, no line. "linear" contains line but not betting line. It's okay. But if strict, avoid "linear" maybe. Use "log link" no "linear". "baseline" contains line? "baseline" has line? It contains "line" as substring. Hmm not betting line. Fine.

Need maybe mention "odds" not. Good.

Need exact source quotes. Ensure quote punctuation exactly. Use double quotes. Source uses curly apostrophes. We can use straight? Verbatim enough. Need maybe "Opponents’" curly. Fine.

Let's write with LaTeX. Need ensure XML doesn't interpret? Fine.

Need maybe not include markdown outside. Use XML.

Let's formulate.

Word count estimate:
THINK_TRACE ~550
SOURCE ~650
RETRO ~250
RECURSIVE ~250
CROSS ~250
RLVR ~300 = 2250. Good.

Need include "SI/information/probability units" in SOURCE. Good.

Let's now compose final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a one-page poster, so the derivation must be reconstructed from the displayed claims and equations rather than from a full methods section. The core comparison is a three-level location contrast: home, away, and neutral. The poster defines two operators: “(A) – neutral teams’ advantage over away teams” and “(H) – home teams’ advantage over neutral teams” [PAGE 1]. That means the home-versus-away contrast is not a single coefficient but the sum of a neutral-site baseline shift and a home-site increment. If \(\mu_H,\mu_N,\mu_A\) are expected per-game statistic values for home, neutral, and away teams, then \(A=\mu_N-\mu_A\), \(H=\mu_H-\mu_N\), and \(D=\mu_H-\mu_A=H+A\). The units are count per game for AST, BLK, OREB, FGA, PF, FTA, and proportion or percentage points for FG%, 3FG%, and FT%. This decomposition matters because a home advantage that remains versus neutral is harder to explain by travel alone; it points toward venue, crowd, referee, scorekeeper, or routine effects.

The first multi-hop step is the source’s broad claim: “Home teams outperformed away (and neutral location) teams in nearly all statistics across every gender-division-season combination” [PAGE 1]. That is a descriptive statement about observed box-score values, not yet a causal statement about crowd size. The second step is the subjectivity audit: “AST and BLK (the most subjective statistics) had the greatest home advantages and much of the advantages remained when compared to neutral location teams” [PAGE 1]. This is a gray-zone warning. Assists and blocks require scorer judgment, so a home advantage in AST and BLK can be partly a measurement process rather than a purely physical performance process. The poster also states: “Scorekeepers tended to have greater home team biases when observing men compared to women or higher divisions compared to lower divisions” [PAGE 1]. Therefore any model that pools gender and division without scorer or division heterogeneity is vulnerable to composition bias.

The third step is the team-strength control. The poster uses \(RPI' = Home RPI - Away RPI\), with \(RPI = (0.25 * Team Win %) + (0.50 * Opponents’ Win %) + (0.25 * Opponents’ Opponents’ Win %)\) [PAGE 1]. This is a dimensionless index in \([0,1]\), and \(RPI'\) is its home-minus-away difference. The audit problem is that RPI contains Team Win%, which is itself affected by home advantage. Controlling for \(RPI'\) may therefore be an over-control or collider-like adjustment if the goal is the overall home effect; it may also leave residual confounding because RPI is coarse and does not measure injuries, rest, travel, or roster changes. The matching procedure tries to equalize \(RPI'\) distributions between high- and low-attendance games, but the poster notes: “Statistical matching and bootstrap sampling used to construct new high attendance (High*) distributions, with equal RPI’ distributions to low attendance” [PAGE 1]. Equal RPI distributions do not guarantee exchangeability on unmeasured physical, biomechanical, or administrative variables.

The fourth step is attendance. The poster reports: “Referee decisions appear to be affected by crowd size: both PF and FTA have significantly different home team advantages in high attendance games compared to low attendance games in 5 of the 6 gender-division combinations (all but D2 Women).” [PAGE 1]. The inference is an interaction: the home-minus-away contrast for PF and FTA differs by attendance stratum. But attendance is endogenous: high-attendance games may feature stronger teams, rivals, promotions, larger arenas, different officiating crews, and different scorekeepers. The stochastic matching is repeated: “The matching algorithm has a random component, so we repeat the process 1000 times for each statistic, performing 1000 distinct tests, and display the average p-value results in the following table:” [PAGE 1]. Averaging p-values across 1000 stochastic matching runs is a stability diagnostic, not independent evidence; the Bonferroni threshold “α = 0.0006” [PAGE 1] is the appropriate guard against multiplicity.

The fifth step is the Poisson LASSO model. The model predicts statistic counts while controlling for \(RPI'\), possessions, and gender/division [PAGE 1]. The percentage impact is computed as \(e^{\beta_j}-1\). The poster’s possession-equivalence claim is: “The home court boosts for AST and BLK were equivalent to having 12 and 43 additional possessions in a game respectively” [PAGE 1]. That equivalence is only well-defined under a log-link model with a stable possessions coefficient and no strong interactions; otherwise it is an approximation. The gray-zone conclusion is that the source supports descriptive location contrasts and a crowd-associated referee pattern, but the causal chain from crowd to statistic is not fully identified. The strongest vulnerabilities are scorekeeper subjectivity, RPI endogeneity, attendance endogeneity, possession mediation, and unmodeled physical or biomechanical covariates.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(g\) index gender-division-season-statistic cells. Define expected per-game counts or proportions:
\[
\mu_{H,g}=\mathbb E[Y_g\mid \text{home}],\quad
\mu_{N,g}=\mathbb E[Y_g\mid \text{neutral}],\quad
\mu_{A,g}=\mathbb E[Y_g\mid \text{away}].
\]
The source’s operators are:
\[
A_g=\mu_{N,g}-\mu_{A,g},\qquad
H_g=\mu_{H,g}-\mu_{N,g},\qquad
D_g=\mu_{H,g}-\mu_{A,g}=H_g+A_g,
\]
where [PAGE 1] defines “(A) – neutral teams’ advantage over away teams” and “(H) – home teams’ advantage over neutral teams.” Units: \(A_g,H_g,D_g\) are count per game for AST, BLK, OREB, FGA, PF, and FTA; for FG%, 3FG%, and FT%, they are proportions, convertible to percentage points by multiplying by 100. The source conclusion “Home teams outperformed away (and neutral location) teams in nearly all statistics across every gender-division-season combination” [PAGE 1] is the empirical statement \(D_g>0\) in most cells.

Attendance interaction. Let \(A_i\in\{\text{high},\text{low}\}\) denote attendance stratum, with high defined as Top 25% and low as Bottom 25% [PAGE 1]. The attendance contrast is:
\[
\Delta_{\text{att},g}
=
\left(\mu_{H,g}- \mu_{A,g}\mid A_i=\text{high}\right)
-
\left(\mu_{H,g}- \mu_{A,g}\mid A_i=\text{low}\right).
\]
The source tests this with “Two-sample t-tests” and reports that “both PF and FTA have significantly different home team advantages in high attendance games compared to low attendance games in 5 of the 6 gender-division combinations (all but D2 Women)” [PAGE 1]. The probability threshold is \(\alpha=0.0006\), a dimensionless probability: “Bold p-values – significant home advantage at α = 0.0006 (Bonferroni correction)” [PAGE 1]. The matching operator is:
\[
\text{High}^{*}\sim \text{High}\quad\text{subject to}\quad
F_{RPI'}(\text{High}^{*})=F_{RPI'}(\text{Low}),
\]
where \(F_{RPI'}\) is the empirical distribution. The poster states: “Statistical matching and bootstrap sampling used to construct new high attendance (High*) distributions, with equal RPI’ distributions to low attendance” [PAGE 1]. The stochastic matching is repeated 1000 times per statistic [PAGE 1].

Team-strength control. The source gives:
\[
RPI = 0.25\,(\text{Team Win \%}) + 0.50\,(\text{Opponents’ Win \%}) + 0.25\,(\text{Opponents’ Opponents’ Win \%}),
\]
\[
RPI' = RPI_{\text{home}}-RPI_{\text{away}}.
\]
\(RPI\) is dimensionless in \([0,1]\), and \(RPI'\) is dimensionless in \([-1,1]\). [PAGE 1] The Poisson LASSO objective is:
\[
(\hat\beta_0,\hat\beta)
=
\arg\min_{\beta_0,\beta}
\left[
-\frac{1}{N}\sum_{i=1}^{N}
\left\{
y_i(\beta_0+\beta^\top x_i)
-
\exp(\beta_0+\beta^\top x_i)
\right\}
+
\lambda\sum_{j=1}^{p}|\beta_j|
\right],
\]
with \(y_i\) a statistic count, \(x_i\) containing \(RPI'\), possessions, and gender/division indicators [PAGE 1]. Here \(\eta_i=\beta_0+\beta^\top x_i\) is a log-mean, \(\mu_i=\exp(\eta_i)\) is a count, and \(\beta_j\) has units of log-count per unit of \(x_j\). The percentage impact is:
\[
\text{impact}_j=e^{\beta_j}-1,
\]
dimensionless, or \(100(e^{\beta_j}-1)\) percent. The possession-equivalence operator is:
\[
\Delta P_{\text{eq},j}
=
\frac{\hat\beta_{\text{home},j}}{\hat\beta_{\text{possessions}}}
\]
under a log-link model with a stable possessions coefficient; the source reports “The home court boosts for AST and BLK were equivalent to having 12 and 43 additional possessions in a game respectively” [PAGE 1]. Units: possessions per game.

Assumptions and breakdown regimes. The matching estimator requires positivity/overlap: if high- and low-attendance groups have disjoint \(RPI'\) support, matching is undefined and the estimate is not identified. Bootstrap inference fails with degenerate or zero-variance matched samples. The Poisson model assumes conditional mean-variance equality; overdispersion or zero inflation breaks the likelihood and requires quasi-Poisson, negative binomial, or zero-inflated alternatives. LASSO is unstable under collinearity, and if \(\lambda\to\infty\), all \(\hat\beta_j\to0\); if \(\lambda=0\) with collinear covariates, the solution is non-unique. The possession-equivalence ratio is singular when \(\hat\beta_{\text{possessions}}=0\), and it is not causally interpretable if possessions are a mediator of home advantage. The RPI control is endogenous because Team Win% is affected by the same home/away process being studied. The source’s correlation check is also a warning: “Team strength advantage coefficients were highly correlated (0.85) with home advantage coefficients, thus scorekeepers may have been more biased in favor of stronger teams” [PAGE 1]. A correlation of 0.85 is dimensionless, but it does not identify whether strength causes bias, bias mimics strength, or both are driven by scorer/team composition. Finally, the source reports “No evidence of attendance impact on FT% was discovered” and “No evidence of attendance impact on scorekeepers was discovered” [PAGE 1]; these nulls are evidence of absence only within the model’s power and matching assumptions.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is home-advantage research joined to modern causal-inference tooling. Earlier home-advantage work separated venue familiarity, travel, crowd noise, referee bias, and team quality; this poster operationalizes those ideas in NCAA basketball with over 100,000 games from 2011-2012 through 2015-2016 [PAGE 1]. Its RPI control descends from strength-of-schedule indices; its matching and bootstrap descend from observational causal-inference practice; its Poisson LASSO descends from regularized count regression; and its Bonferroni threshold descends from multiple-testing correction. The poster’s own decomposition into home-versus-neutral and neutral-versus-away is a useful retrocausal move: it asks whether the home effect is just the absence of travel or an additional venue effect. The source’s subjective-stat finding is genealogically important because scorekeeping bias has often been treated as measurement noise rather than a substantive mechanism; here “AST and BLK (the most subjective statistics) had the greatest home advantages” [PAGE 1] forces measurement into the causal diagram.

Multi-week traps appear at several levels. First, week-to-week scheduling is not random: conference travel, rest days, exam periods, injuries, and neutral-site tournaments can cluster. A multi-week aggregate can therefore mix home advantage with schedule density and roster availability. Second, repeated stochastic matching across 1000 runs creates a temptation to treat repeated p-values as independent evidence; the poster’s own language—1000 distinct tests and average p-value results [PAGE 1]—is a stability audit, not 1000 independent replications. Third, the Bonferroni threshold \(\alpha=0.0006\) [PAGE 1] is severe; if the family of tests grows, a true small effect can be missed, while if the family is misdefined, the correction is too weak. Fourth, RPI’ is a coarse multi-week summary; it can absorb the very home advantage being estimated and can miss midseason roster shocks. Fifth, attendance is not a randomized weekly treatment: promotions, opponent quality, and venue capacity can create multi-week confounding. The correct lineage is therefore not “home advantage is caused by crowd” but “home advantage is a composite whose components must be separated by design, matching, and measurement audits.”
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer treats players, referees, and scorekeepers as agents with beliefs about one another. A player may believe the referee is crowd-influenced; the referee may believe the player will test contact; the scorekeeper may believe the home crowd expects an assist. This recursion can change behavior before any box-score count is recorded. Crisis habit regression predicts that under high attendance or late-game pressure, players revert to trained motor habits rather than deliberative adjustment: free-throw routines remain stable, while contact-seeking and foul-drawing behavior shifts. That is consistent with the source’s pattern that “Referee decisions appear to be affected by crowd size: both PF and FTA have significantly different home team advantages in high attendance games” [PAGE 1] while “No evidence of attendance impact on FT% was discovered” [PAGE 1]. The counter-trap is overcorrection: an away team that expects bias may avoid contact, become passive, and thereby reduce its own FTA or alter shot selection; a home team that expects leniency may initiate more contact. If both sides anticipate symmetrically, the observed effect can shrink, so the net sign is an empirical question. The clock layer matters because late-game intentional fouling changes PF, FTA, and FT% denominators; game-level counts can mix strategic clock behavior with crowd effects. A recursive model should therefore stratify by game clock, score state, and possession type. The source’s scorekeeper finding—“Scorekeepers tended to have greater home team biases when observing men compared to women or higher divisions compared to lower divisions” [PAGE 1]—adds a third agent: the scorer’s expectation can co-produce AST and BLK. The testable implication is that subjective-stat home advantages should shrink when scorer identity or replay audit is included, whereas objective physical counts should be more stable.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Cross-layer veto adjudication asks whether physical, biomechanical, or weather variables can explain away the reported home and attendance effects. For an indoor sport, direct weather exposure is limited, but weather can still act through travel delays, arena HVAC, court condensation, and schedule disruption. Physical covariates include rest days, travel distance, injury status, minutes load, altitude, and back-to-back scheduling. Biomechanical covariates include shooting mechanics, jump-landing balance, contact balance, and fatigue-related changes in FG%, 3FG%, FT%, OREB, and BLK. The veto criterion is conditional independence:
\[
Y \perp T \mid X_{\text{core}}, X_{\text{cross}}
\]
where \(T\) is home/away/neutral status and \(X_{\text{cross}}\) contains physical, biomechanical, and weather variables. If including \(X_{\text{cross}}\) removes the home coefficient, changes its sign, or makes the attendance interaction non-significant, the cross-layer veto is established. If the coefficient remains stable, the veto is not established—but that is not proof of no effect, only absence of detected confounding. The source’s controls are \(RPI'\), possessions, and gender/division [PAGE 1]; they do not include injury, rest, travel, HVAC, or biomechanical load. A physical veto is therefore plausible for FG%, 3FG%, FT%, OREB, and BLK, because fatigue and landing mechanics can shift those counts. A biomechanical veto is especially plausible for BLK and FT%, where contact balance and routine matter. A weather veto is weaker indoors but not zero, because travel disruption and arena climate can alter shooting and fatigue. The source’s own null on FT% attendance impact [PAGE 1] is evidence against a strong crowd-to-free-throw-mechanics path, but it does not rule out a physical load path. The adjudication rule should be: report both unadjusted and cross-layer-adjusted home coefficients; if the adjusted interval excludes zero and is materially similar, the effect survives; if not, the causal claim is vetoed.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Scorekeeper-identity ablation. Counterfactual: re-estimate the Poisson LASSO with scorer fixed effects and an independent replay audit of AST and BLK. Veto prediction: if the source’s subjective-stat home advantage is substantially scorer-generated, the adjusted \(e^{\beta_{\text{home}}}-1\) for AST and BLK should shrink toward zero, and the reported possession-equivalents of 12 and 43 [PAGE 1] should fall below 5 possessions per game. Objective counts such as OREB and FGA should be more stable. The veto is triggered if the adjusted AST/BLK intervals include zero while objective counts retain their home coefficients.

2. Attendance-exogeneity shock. Counterfactual: compare high- and low-attendance games within the same home team, same opponent tier, same venue, and same gender/division, using exogenous attendance shifters such as ticket promotions or capacity changes. Veto prediction: if attendance is endogenous, the PF/FTA attendance interaction should attenuate. The source reports significance in 5 of 6 gender-division combinations except D2 Women [PAGE 1]; the counterfactual predicts that D2 Women remains null, while D1 men’s PF/FTA effect shrinks but may persist. Veto is triggered if fewer than 5 of 6 combinations remain significant at \(\alpha=0.0006\) after within-venue matching, or if the high-minus-low attendance contrast for PF and FTA has an interval containing zero.

3. Pre-registered independent replication with no p-value averaging. Counterfactual: replicate the full gender-division-statistic grid on a new season, pre-register the Bonferroni family, and use a single deterministic matching seed rather than averaging 1000 stochastic p-values [PAGE 1]. Veto prediction: the strongest claims should survive—home-versus-neutral advantages for FG% and 3FG%, and crowd-associated PF/FTA differences for most gender-division cells. The claims most likely to fail are the smallest division-specific cells and the subjective AST/BLK effects after scorer controls. Veto is triggered if the pre-registered replication yields fewer than 5 of 6 significant PF/FTA attendance interactions, or if the AST/BLK home coefficients are non-significant under the corrected family. These three counterfactuals are verifiable because each specifies the model, the adjustment, the threshold, and the predicted direction of attenuation.
</RLVR_COUNTERFACTUAL_VETOES>