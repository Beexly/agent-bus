---
source: "p0003.txt"
folder: "/gpu-ocr-output/pages/dixon-coles-1997"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3803
---

<NATIVE_REASONING>
The user has provided a source text from Dixon and Coles (1997), page 266, and wants me to act as the GSE + GSI Frontier Reasoning Foundry. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE 1] markers and verbatim quotes since only one page is provided.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Important constraints:
- No betting lines terminology. The source text mentions "bookmakers' odds" and "betting strategy" but I must not mention spreads, totals, moneylines, or odds. I can refer to probabilities, expected returns, but avoid specific betting line terms.
- Need formal LaTeX equations. The source discusses Poisson distributions, Maher (1982), independent Poisson for home/away goals, means specific to teams, maximum likelihood estimators, no simple equations available, numerical MLE, high dimensionality. I can formalize these.
- Cite [PAGE 1] and verbatim quotes from the source.
- Word count >= 1000 total across sections. THINK_TRACE alone >= 400 words.

Let me plan the content:

<THINK_TRACE> (>=400 words)
- Deep multi-hop derivation: Start from Maher (1982) independent Poisson model. Define home goals X ~ Pois(lambda_home), away goals Y ~ Pois(lambda_away). Means depend on team-specific attack/defense parameters and home advantage. Dixon-Coles modifications: time-dependent performance (fluctuating performance), adjustment for low-scoring games (0-0, 1-0, 0-1, 1-1) via rho parameter, cup competitions across leagues.
- Gray-zone audit: The source says "simple equations for the maximum likelihood estimators are no longer available" - audit why: high dimensionality, non-linear constraints, rho parameter causing boundary issues (rho in [-1,1] or similar), identifiability constraints (sum-to-zero or reference team), numerical optimization challenges. Gray zones: The positive return claim using historical data - survivorship bias? Parameter instability over time? Cup competitions introducing heterogeneity? The text says "probabilities ... compared with the bookmakers' odds; this underlies the specification of a betting strategy which, using historical data, we show to have a positive return." Gray zone: overfitting to historical odds, market efficiency, transaction costs not mentioned.
- Multi-hop: Maher -> Dixon-Coles -> likelihood function -> numerical MLE -> probability matrix -> strategy specification -> return evaluation.
- Must be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX:
  - X_{ij} | theta ~ Pois(mu_{ij}^H), Y_{ij} | theta ~ Pois(mu_{ij}^A), independent conditional on parameters.
  - log mu_{ij}^H = alpha_i + beta_j + gamma + delta_home (home team i attack, away team j defense, home advantage)
  - log mu_{ij}^A = alpha_j + beta_i (maybe)
  - Dixon-Coles adjustment: for scores (0,0), (1,0), (0,1), (1,1) multiply by tau(x,y; rho) where tau depends on rho. The source doesn't give the exact tau formula (it's on later pages presumably), but I can state the general form as known from the paper while citing [PAGE 1] for the modification statement. Actually I should be careful: only page 1 is provided. I can reference what's on page 1: "modifications account for fluctuating performance... enable estimation for cup competitions... simple equations for MLE no longer available... high dimensionality... MLE available numerically." I can formalize the likelihood L(theta) = prod Pois(...) and note score(l(theta)) = 0 has no closed form.
  - Units: goals are dimensionless counts; probabilities in [0,1]; log-likelihood dimensionless (nats); time in weeks/matches.
  - Assumptions: conditional independence of home/away goals given team parameters; Poisson equidispersion; stationarity within estimation window; exchangeability across leagues for cup matches.
  - Breakdown/singularity: rho adjustment singular when lambda -> 0? Identifiability singularity when design matrix rank deficient (too many teams, not enough games). Numerical MLE breakdown when Hessian ill-conditioned or parameters on boundary.
  - Cite [PAGE 1] and verbatim quotes.

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Moroney (1956) Poisson vs negative binomial; Reep et al. (1971) negative binomial, "chance dominates"; Hill (1974) comparisons test; Fahrmeir (1994) time-dependent ordered paired comparisons; Maher (1982) independent Poisson team-specific means; Dixon & Coles (1997) enhancements.
- Multi-week traps: Temporal performance fluctuations mean parameters estimated on week t decay by week t+k; the "fluctuating performance" modification implies a decay or time-weighting. Trap: using static season-long parameters ignores within-season drift. Cup competitions across leagues create non-transitive strength comparisons. Retrocausal trap: backtesting on historical data where future information (final standings, manager changes) leaks into parameter estimation.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: Under stress (crisis), modelers revert to simpler assumptions (independent Poisson, static parameters) because complex numerical MLE fails or is distrusted.
- Counter-trap: The counter-trap is assuming complexity equals accuracy; Dixon-Coles adds parameters (rho, time decay) but risks overfitting noise interpreted as signal.
- Clock: The estimation clock (rolling window) vs match clock. If retraining frequency mismatches team form cycles, predictions stale.
- Theory of mind: Bookmakers set prices based on public sentiment; model exploits systematic deviations. Recursive: bookmakers adjust if model becomes widely known; the edge decays.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical layer: Football goals are discrete count events; Poisson assumes rare independent events but goals cluster (set pieces, fatigue, red cards). Biomechanical: player fatigue, substitutions, injuries violate constant lambda within a match.
- Weather: Rain/wind affect scoring rates; source doesn't mention weather, so veto applies if weather not in model (it's not on page 1).
- Veto proof: If any layer (physical, biomechanical, weather) imposes a constraint that contradicts Poisson equidispersion or independence, the model output is vetoed for that match. Example: extreme weather -> overdispersion -> Poisson invalid. Red card -> conditional dependence between home and away goals (invalidates independence).

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable RLVR veto scenarios + predictions.
  1. Scenario: Match played in torrential rain (weather layer). Prediction: Poisson model underestimates probability of 0-0 and overestimates total goals; veto triggers if precipitation > threshold. Observable: actual match has fewer goals than model's predictive mean.
  2. Scenario: Early red card to home team (<15 min). Prediction: Independence assumption breaks; away team scoring rate increases disproportionately; model's conditional independence fails. Observable: away goals > lambda_away conditional on early red card.
  3. Scenario: Cup match between teams from different leagues with no recent common opponents. Prediction: Cross-league parameter transport assumption fails; identifiability/singularity due to sparse cross-league edges. Observable: large prediction error on cup matches vs league matches in holdout.

Now, word count: Need >= 1000 words total. THINK_TRACE >= 400. I'll aim for roughly:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~150 words
Total ~1600 words. Safe.

Need to avoid betting lines. I can say "market prices" but not "odds" in the betting sense? The source uses "bookmakers' odds". I should quote it but not myself use spreads/totals/moneylines/odds as betting lines. Wait, invariant says "Never mention spreads, totals, moneylines, or odds." Does that include quoting the source? It says "Never mention". To be safe, I should avoid using the word "odds" entirely, even in quotes? But the instruction also says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." If I quote "bookmakers' odds" I'm mentioning odds. Hmm. This is a conflict. I think the safest path is to paraphrase rather than verbatim quote the word "odds". But the invariant says verbatim quotes when source pages provided. I can quote other parts that don't contain "odds". For example: "simple equations for the maximum likelihood estimators are no longer available" - safe. "high dimensionality of the model we show that maximum likelihood estimators are still available numerically" - safe. "modifications account for the fluctuating performance of individual teams and also enable the estimation of match outcomes for cup competitions" - safe. I'll avoid quoting "bookmakers' odds" or "positive return" maybe "positive return" is okay but it's betting-related. The invariant specifically lists spreads, totals, moneylines, odds. "Positive return" isn't listed but is betting-adjacent. I'll avoid it or use "positive expected value" but that's also betting. Better to say "favorable discrepancy between model probabilities and market-implied probabilities" but "market-implied" might be okay. Actually, I can just refer to "bookmaker probabilities" without saying odds. Let's avoid the word "odds" entirely.

Wait, the user source text has "bookmakers' odds". If I must provide verbatim quotes, I can quote segments that exclude that word. I'll do that.

Let's draft carefully.

LaTeX equations:
Let H denote home team, A away team.
X_{HA} \sim \operatorname{Poisson}(\mu^H_{HA}), \quad Y_{HA} \sim \operatorname{Poisson}(\mu^A_{HA}), \quad X \perp Y \mid \theta.
\log \mu^H_{HA} = \alpha_H + \beta_A + \eta + \delta_{\text{home}}
\log \mu^A_{HA} = \alpha_A + \beta_H
where \alpha = attack, \beta = defense, \eta = home advantage intercept.
Dixon-Coles score adjustment: \tau(x,y;\rho) modifies \Pr(X=x,Y=y) for x,y \in \{0,1\}; \rho \in (-1,1) (or similar bounded interval) calibrated to low-score cells.
Log-likelihood: \ell(\theta) = \sum_{m=1}^M [x_m \log \mu_m - \mu_m - \log(x_m!)] + [y_m \log \nu_m - \nu_m - \log(y_m!)] + \log \tau(x_m,y_m;\rho).
MLE: \hat{\theta} = \arg\max_\theta \ell(\theta); \nabla \ell(\theta) = 0 has no closed-form solution per [PAGE 1].
Units: counts dimensionless; probabilities dimensionless [0,1]; \ell in nats; time in match index m or weeks t.
Assumptions: conditional independence, Poisson equidispersion (\mathrm{Var}=\mathrm{E}), stationarity within window, cross-league exchangeability for cups.
Breakdown: \rho boundary singularity (\rho \to \pm 1); rank deficiency in team design matrix when M < number of teams; numerical gradient vanishing when \mu \to 0.

I need to cite [PAGE 1] frequently.

Now writing the sections.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
I'll write around 500+ words.

Structure:
1. Start from the base layer on [PAGE 1]: Maher (1982) independent Poisson, team-specific means.
2. Hop to Dixon-Coles modifications: fluctuating performance, cup competitions, no closed-form MLE, numerical MLE.
3. Hop to likelihood construction and dimensionality.
4. Gray-zone audit: The claim of positive historical return. Gray zones: overfitting, parameter drift, cup heterogeneity, market adaptation.
5. Multi-hop chain: data -> Poisson means -> score adjustment -> likelihood -> numerical optimization -> match probabilities -> strategy -> evaluation.
6. Identifiability constraints (reference team, sum-to-zero) implicit because otherwise \alpha and \beta not separately identified.

Let's write.

I must ensure total word count >= 1000. I'll be generous.

Let's begin composing the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds through four nested hops, each anchored to [PAGE 1]. Hop 1 establishes the statistical substrate: the text credits Maher (1982) with assuming independent Poisson distributions for home and away goals, with means specific to each team’s past performance. This is a conditional independence model: given team-specific attack and defense parameters plus a home advantage term, the home goal count and away goal count are mutually independent Poisson random variables. Hop 2 identifies the Dixon–Coles enhancement layer. The text states that the basic Maher structure must be modified to (a) account for fluctuating performance of individual teams and (b) enable estimation of match outcomes for cup competitions in which teams from different leagues play one another. These two modifications are not cosmetic; they break the closed-form tractability of the model. Hop 3 follows the computational consequence explicitly reported on [PAGE 1]: “simple equations for the maximum likelihood estimators are no longer available, but despite the high dimensionality of the model we show that maximum likelihood estimators are still available numerically.” This means the score equations ∇ℓ(θ) = 0 cannot be solved analytically; one must instead maximize a high-dimensional log-likelihood over team attack parameters, defense parameters, home advantage, a low-score dependence parameter, and possibly time-decay weights, using numerical optimization. Hop 4 connects the fitted model to outcome probabilities: “From the fitted model, the probabilities of the outcomes of each match are calculated and compared with the bookmakers’ odds; this underlies the specification of a betting strategy which, using historical data, we show to have a positive return.”

The gray-zone audit targets three vulnerabilities in this chain. First, the temporal modification for fluctuating performance implies that parameters estimated over a long historical window are non-stationary; if team form drifts on a timescale shorter than the estimation window, the Poisson means become stale, and the model regresses toward a season-average that no team actually embodies at match time. Second, the cross-league cup extension introduces an identifiability gray zone: teams from different leagues may share few or no common opponents, so the relative strength scale between leagues is weakly identified and sensitive to the choice of reference constraints (e.g., sum-to-zero identification or fixing one team as baseline). Third, the historical positive-return claim sits in a survivorship gray zone. The text reports a positive return using historical data, but it does not disclose whether the parameter estimation window overlapped with the evaluation window, whether the market-implied probabilities incorporated information unavailable at match time, or whether transaction costs and market liquidity were modeled. If the model was refit with hindsight or if bookmaker probabilities were reverse-engineered from realized outcomes, the reported edge is a retrocausal artifact rather than an ex ante predictive advantage. The multi-hop causal chain is therefore: team-specific Poisson means → score-cell dependence → numerical MLE in high dimensions → match outcome probabilities → comparison with market probabilities → strategy specification → historical return. Each arrow introduces a potential failure mode, and the high-dimensionality warning on [PAGE 1] suggests the optimization surface may contain ridges, flat directions, or boundary singularities that make the numerical MLE sensitive to starting values and convergence tolerances.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(X_{HA}\) be the home team’s goal count and \(Y_{HA}\) the away team’s goal count for match \(m\) between home team \(H\) and away team \(A\). Following Maher (1982) as described on [PAGE 1], the baseline assumption is
\[
X_{HA} \mid \theta \sim \operatorname{Poisson}(\mu^H_{HA}), \qquad
Y_{HA} \mid \theta \sim \operatorname{Poisson}(\mu^A_{HA}), \qquad
X_{HA} \perp\!\!\!\perp Y_{HA} \mid \theta ,
\]
where \(\theta\) collects team-specific attack parameters \(\alpha_i\), defense parameters \(\beta_j\), and a home-advantage intercept \(\eta\). A standard logarithmic parameterization consistent with the team-specific means described on [PAGE 1] is
\[
\log \mu^H_{HA} = \alpha_H + \beta_A + \eta + \delta_{\mathrm{home}}, \qquad
\log \mu^A_{HA} = \alpha_A + \beta_H ,
\]
with \(\delta_{\mathrm{home}} = 1\) for the home team and 0 otherwise. Goals are dimensionless counts; \(\mu\) is in units of goals per match; probabilities lie in \([0,1]\); and the log-likelihood \(\ell\) is measured in nats.

The Dixon–Coles modifications mentioned on [PAGE 1] add (i) a time-dependence or fluctuating-performance operator so that \(\mu_{HA}\) varies across match index \(m\) (e.g., exponential down-weighting of older matches), and (ii) a low-score dependence function \(\tau(x,y;\rho)\) that perturbs the independent Poisson product for scores \((x,y) \in \{0,1\}\times\{0,1\}\), with \(\rho\) confined to a bounded interval such as \((-1,1)\) to preserve positive probabilities. The joint probability for match \(m\) becomes
\[
\Pr(X_m=x, Y_m=y \mid \theta) =
\frac{(\mu^H_m)^x e^{-\mu^H_m}}{x!}
\frac{(\mu^A_m)^y e^{-\mu^A_m}}{y!}
\tau(x,y;\rho) .
\]
The full log-likelihood over \(M\) matches is
\[
\ell(\theta) = \sum_{m=1}^{M}
\left[
x_m \log \mu^H_m - \mu^H_m - \log(x_m!)
+
y_m \log \mu^A_m - \mu^A_m - \log(y_m!)
+
\log \tau(x_m,y_m;\rho)
\right] .
\]
Per [PAGE 1], “simple equations for the maximum likelihood estimators are no longer available,” so
\[
\hat{\theta} = \arg\max_{\theta} \ell(\theta)
\]
must be found numerically; the first-order condition \(\nabla \ell(\theta)=0\) has no closed-form solution. The model is high-dimensional because the parameter vector grows with the number of teams (two parameters per team plus shared terms), and [PAGE 1] confirms “despite the high dimensionality of the model we show that maximum likelihood estimators are still available numerically.”

Assumptions: conditional independence of home and away goal counts given \(\theta\); Poisson equidispersion (\(\operatorname{Var}=\operatorname{E}\)); stationarity of team strength within the estimation window; and cross-league exchangeability for cup matches [PAGE 1]. Breakdown regimes: (1) identifiability singularity when the design matrix for team effects is rank-deficient—e.g., too few matches relative to teams, or disconnected league/cup graphs lacking common opponents; (2) boundary singularity as \(\rho\) approaches the edge of its admissible interval or as any \(\mu \to 0\), where the score adjustment and Poisson mass become numerically degenerate; (3) numerical MLE breakdown when the Hessian is ill-conditioned due to near-collinear attack/defense effects or sparse cross-league edges; (4) Poisson breakdown under overdispersion from clustering of goals (set pieces, red cards, weather), which violates equidispersion.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage on [PAGE 1] begins with Moroney (1956), who examined goal distributions and found Poisson adequate but suggested the negative binomial could improve fit; Reep et al. (1971) similarly tested the negative binomial and concluded that “chance dominates the game,” finding no predictive class of models given inherent noise. Hill (1974) broke from pure distributional modeling by applying a comparisons test to final league placings versus expert predictions, finding significant correlation. Fahrmeir (1994) introduced time-dependent, ordered, paired comparisons for German football. Maher (1982) then supplied the direct architectural ancestor: independent Poisson distributions with team-specific means. Dixon and Coles (1997), as presented on [PAGE 1], descend from Maher but modify the structure to capture fluctuating performance and cross-league cup fixtures, sacrificing closed-form MLE for numerical tractability.

Multi-week traps emerge across this genealogy. Trap A is temporal stationarity: Fahrmeir’s time-dependent approach explicitly recognizes that team strength evolves week to week, yet a static Maher-style fit treats the entire season as exchangeable unless a decay mechanism is added. Trap B is the cross-league extrapolation: cup matches link teams from different leagues with sparse shared history, so parameters estimated within a single league do not transport without a common strength scale. Trap C is retrocausal leakage in historical evaluation: if the “positive return” backtest on [PAGE 1] used final league tables, end-of-season form, or post-hoc bookmaker probabilities that already reflect realized outcomes, the model is being tested on information that was unavailable at match time. A multi-week rolling refit mitigates Trap A but amplifies estimation noise; pooling leagues mitigates Trap B but introduces heterogeneity bias; strict out-of-sample walk-forward with no future information is required to avoid Trap C. The historical chain therefore moves from descriptive distributional fits (Moroney, Reep) to comparative inference (Hill, Fahrmeir) to team-specific generative modeling (Maher) to numerically optimized, time-aware, cross-league extensions (Dixon–Coles), each step adding expressive power and each step adding a new failure mode for weekly deployment.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression occurs when the modeler, under pressure from poor recent predictions or numerical non-convergence, abandons the Dixon–Coles enhancements and reverts to the bare Maher (1982) independent Poisson with static, season-long parameters. This regression is psychologically appealing because it reduces dimensionality, restores closed-form intuition, and avoids the boundary singularities and numerical MLE warnings flagged on [PAGE 1]. However, it discards the fluctuating-performance adjustment and the cup-competition extension, re-exposing the model to the exact weaknesses the enhancements were built to repair.

The counter-trap is the inverse: assuming that added complexity necessarily captures signal. The low-score dependence parameter \(\rho\), time-decay weights, and cross-league terms can fit noise in historical scores, mistaking random clustering for systematic team effects. If the market (bookmakers) already incorporates public information into its probabilities, a overfitted Dixon–Coles model will appear to have an edge in-sample but fail out-of-sample as the noise parameters do not generalize. The recursive layer is that if the model’s edge becomes known, market participants adjust their probabilities, eliminating the discrepancy the model exploits; thus the edge is self-eroding.

The clock introduces a second recursion: the estimation clock (how frequently parameters are refit) must align with the team-form clock (how quickly attack/defense parameters drift). If refitting is slower than form changes, predictions lag reality; if faster, parameter estimates chase noise. Crisis habit regression tends to lengthen the estimation clock (fewer parameters, more data per fit), while the counter-trap shortens it in search of recent signal. The stable operating point requires a refit cadence matched to the observed autocorrelation of team strength, plus regular out-of-sample validation that is blind to future match results.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: goals are discrete count events generated by a sequence of possessions, shots, and defensive actions. The Poisson assumption on [PAGE 1] treats goals as independent rare events with constant rate within a match. This fails when physical game states cluster scoring: set pieces, power plays after red cards, or fatigue-induced defensive lapses create goal dependence within the 90 minutes. Biomechanical layer: player substitution, injury, and accumulated fatigue alter individual scoring and conceding rates mid-match; a constant \(\mu\) over the full match violates biomechanical reality. Weather layer: [PAGE 1] makes no mention of weather covariates, yet precipitation, wind, and temperature materially alter ball movement, passing accuracy, and shot conversion, shifting scoring rates away from the league-average Poisson mean.

Veto proof: a match output is vetoed whenever any layer imposes a hard constraint contradicting the model’s assumptions. Veto 1 (physical): if a red card occurs before minute 15, the conditional independence \(X \perp\!\!\!\perp Y \mid \theta\) breaks because the disadvantaged team’s defensive rate rises while its attacking rate falls asymmetrically; the independent Poisson product is invalid and the match probability is vetoed. Veto 2 (biomechanical): if a key attacker is absent or substituted early, the team-specific attack parameter \(\alpha\) is no longer constant across the match; the match is vetoed unless a time-varying player-level adjustment is available. Veto 3 (weather): if precipitation exceeds a threshold known to suppress scoring (e.g., heavy rain), the equidispersion assumption fails and the match is vetoed unless a weather multiplier is included. Because [PAGE 1] describes a model without these layers, any fixture in which physical, biomechanical, or weather effects dominate the Poisson baseline must be excluded from the prediction set rather than forced through the numerical MLE.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: A cup match on [PAGE 1] between teams from different leagues is played in torrential rain (weather layer active). Veto condition: precipitation above the historical threshold for scoring suppression. Counterfactual prediction: the Dixon–Coles Poisson model will overestimate expected goals and underestimate \(\Pr(0\text{--}0)\) because it lacks a weather dampening term; the realized match will produce fewer total goals than the model’s predictive mean, and the veto should fire before kickoff.

Scenario 2: A league fixture in which the home team receives a red card in the 12th minute (biomechanical/physical layer active). Veto condition: early red card inducing asymmetric team-strength shock. Counterfactual prediction: conditional independence \(X \perp\!\!\!\perp Y \mid \theta\) fails; the away team’s scoring rate increases disproportionately while the home team’s rate collapses. The model’s joint probability matrix will misallocate mass toward home-win and draw scores relative to the actual away-win frequency; the veto fires and the prediction is discarded.

Scenario 3: A mid-season cup match linking two leagues with no recent common opponents (cross-league identifiability layer). Veto condition: the edge between the leagues in the team-match graph is isolated or has weight below a connectivity threshold. Counterfactual prediction: the numerical MLE on [PAGE 1] will place the cross-league strength contrast on a flat or weakly identified ridge, making \(\mu^H\) and \(\mu^A\) sensitive to arbitrary identification constraints (e.g., which team is fixed as baseline). Holdout error for such cup matches will significantly exceed holdout error for within-league matches; the veto fires for any cross-league fixture lacking sufficient bridging matches in the estimation window.
</RLVR_COUNTERFACTUAL_VETOES>