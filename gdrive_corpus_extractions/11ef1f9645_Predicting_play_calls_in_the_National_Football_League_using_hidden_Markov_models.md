---
source: "Predicting play calls in the National Football League using hidden Markov models.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4627
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about predicting NFL play calls using hidden Markov models. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, looking at the source text, it seems like pages are embedded but the page markers in the text are things like "1", "2", etc. Let me look for explicit page numbers. The text shows page breaks with numbers like "1", "2", "3", etc. But I need to cite exact [PAGE N] markers. Looking at the markdown, I see:
- Page 1 starts after title/abstract/intro
- Page 2 has data description
- Page 3 has table 1
- Page 4 has modeling section start
- Page 5 has table 2
- Page 6 has figure 2
- Page 7 has figure 3
- Page 8 has figure 4 and modeling continued
- Page 9 has results start
- Page 10 has figure 5
- Page 11 has discussion
- Page 12 has references start
- Page 13 has references end

But wait, the user said "PAGES: 9" but the text goes up to page 13. Let me re-read carefully. The text has page numbers embedded. I should cite based on the visible page numbers in the text. Since the user said "PAGES: 9" maybe they mean 9 pages provided? But I see up to page 13. Anyway, I'll cite the page numbers as they appear in the source text (e.g., [PAGE 2], [PAGE 3], etc.).

Important constraints:
- No betting lines whatsoever.
- Formal LaTeX equations. The source has some equations but they are garbled in markdown (missing actual formulas due to image/picture text). I need to reconstruct formal HMM equations properly based on what's described, citing the source where the description appears.
- SI/information/probability units: probabilities are unitless [0,1], accuracy is proportion, etc.
- Exact singularity/breakdown regimes: e.g., N=2 states selected to avoid numerical instability due to parameter count vs observations per team; AIC forward selection; initial distribution not stationary; observations with >25 yards to go excluded (<100 observations); down4 rare (mean 0.015); goal-to-go rare (0.057); yardline90 rare (0.033).
- Verbatim quotes where possible from source pages.

Structure:
1. THINK_TRACE (>=400 words): deep multi-hop derivation, gray-zone audit. Discuss HMM math, covariate-dependent transitions, forward algorithm, prediction accuracy vs precision/recall, team heterogeneity, limitations (no player personnel data, static model fit to 2017 not updated during 2018 season), gray zones: Bernoulli assumption, Markov assumption (first-order), independence between matches, initial distribution estimation vs stationary assumption, small sample issues for rare covariates, etc.
2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define HMM: observed process y_p ∈ {0,1} (run/pass), hidden state s_p ∈ {1,...,N}, transition γ_ij^(p) = Pr(s_p = j | s_{p-1} = i) via multinomial logit link with covariates x^(p), state-dependent Bernoulli probabilities δ_i = Pr(y_p = 1 | s_p = i) perhaps. Forward algorithm likelihood recursion. Likelihood for match m: L_m = δ' * [product over p of ...] * 1. Full likelihood product over matches assuming independence. Forecast distribution formula. Units: probabilities dimensionless, accuracy in [0,1], plays count dimensionless, yards in yards, score difference in points. Breakdown regimes: N=2 to avoid overparameterization; >25 ydstogo excluded; down4 mean 0.015; goal-to-go 0.057; yardline90 0.033; training 2009-2017, test 2018.
3. RETROCAUSAL_GENEALOGY: Historical lineage: Heiny and Blevins 2011 (relative frequencies), Teich et al. 2016, Lee et al. 2017, Joash Fernandes et al. 2019 (player ratings/Madden), Zucchini et al. 2016 (HMM textbook), applications in stock markets, environmental science, political conflicts. Multi-week traps: static model fitted through 2017 applied to 2018 without in-season updating; roster changes; substitutions; scheme changes; predictive decay over a season.
4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Offense coordinators know model predicts them; they can intentionally break patterns (counter-trap). Defense coordinators use predictions. Clock management (no-huddle, score difference) as covariates. Habit regression under crisis (trailing teams pass more, Figure 2). The model itself is a second-order theory of mind: defense models offense's propensity; offense knows defense models them.
5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. The paper ignores weather, personnel, player ratings, fatigue, injuries, substitutions. These are cross-layer vetoes: e.g., a rainy/windy game (biomechanical/physical) vetoes pass propensity; goal-line stands (physical) veto run/pass probabilities; player substitutions invalidate team-level fixed parameters. Weather not in covariates. Personnel not included. Injuries not included.
6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? I need to construct 3 scenarios where the HMM would fail/vetoed, with verifiable predictions.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400 words.

Let me draft carefully.

THINK_TRACE:
Need deep multi-hop derivation. Start from raw play-by-play binary sequence y_p. First-order Markov hidden states. Covariates modulate transitions via multinomial logit. The state is "propensity to pass." Because teams have heterogeneous play-calling, fit per team. N=2 selected because AIC-based covariate selection explodes parameters with more states and limited per-team observations (~130 plays per team per season? 289,191 plays / 32 teams / 9 seasons ≈ 1000 plays per team over training? Actually 289,191 plays across all teams 2009-2017. Per team roughly 289191/32 ≈ 9037 plays over 9 seasons, ~1000 per season per team. Still, with many covariates and interactions, N>2 causes numerical instability). Forward algorithm computes likelihood recursively. Prediction: forecast distribution = ratio of likelihoods. Accuracy 71.5% weighted average. Range 60.2% (Seattle) to 77.9% (New England). Precision/recall asymmetry: Rams pass precision 90%, recall 66.4%; Seahawks pass precision 55.9%. Gray zones: Bernoulli emission assumes conditional independence of plays given state, but plays within a drive are strategically linked (e.g., setup plays). First-order Markov may be insufficient; play-calling may have longer memory. Covariate independence between matches ignored (likelihood product over matches). Initial distribution estimated rather than stationary, acknowledging non-stationarity at game start. Missing variables: down-and-distance interactions included, but personnel groupings, weather, quarterback identity, defensive alignment omitted. Breakdown: rare events (down4, yardline90, goal-to-go) have high variance; >25 yards to go excluded due to n<100. The model is static across 2018 season; no dynamic updating, so concept drift (injuries, scheme adjustments) degrades out-of-sample accuracy as season progresses.

I need to write >=400 words here.

SOURCE_OPERATORS_AND_EQUATIONS:
Need formal LaTeX.

Let y_p ∈ {0,1} indicate pass (1) or run (0) at play p within match m. Hidden state s_p ∈ {1,...,N}. Transition:
γ_{ij}^{(p)} = Pr(s_p = j | s_{p-1} = i; x^{(p)})
Multinomial logit link (for N=2, effectively binary logit for transitions):
log(γ_{ij}^{(p)} / γ_{iN}^{(p)}) = β_{ij0} + β_{ij}' x^{(p)} for j = 1,...,N-1, with row-stochasticity constraint ∑_j γ_{ij}^{(p)} = 1.

Emission: Bernoulli with state-dependent probability:
Pr(y_p = 1 | s_p = i) = δ_i, so f(y_p | s_p = i) = δ_i^{y_p} (1-δ_i)^{1-y_p}.

Diagonal matrix P(y_p) = diag(f(y_p | s_p = 1), ..., f(y_p | s_p = N)).

Initial distribution π (they call it δ but I'll use π or δ_0): π_i = Pr(s_1 = i), estimated not stationary.

Likelihood for match m via forward algorithm:
α_1 = π ⊙ f(y_1) (elementwise), or in matrix form L_m = π' P(y_1) Γ^{(2)} P(y_2) ... Γ^{(P_m)} P(y_{P_m}) 1.
Actually source says likelihood given by vector/matrix product with forward algorithm. I'll write:
L_m(θ) = π' [∏_{p=1}^{P_m} P(y_p) Γ^{(p+1)}] 1 with appropriate indexing (need to be careful). Standard HMM likelihood: L = π diag(f(y_1)) Γ_2 diag(f(y_2)) ... Γ_T diag(f(y_T)) 1.

Full likelihood: L(θ) = ∏_{m=1}^M L_m(θ), assuming match independence.

Forecast distribution for next play P+1 given history y^{(P)}:
Pr(y_{P+1} = 1 | y^{(P)}, x^{(P+1)}) = [α_P diag(...) Γ^{(P+1)} ... ] normalized. Source says forecast distribution considered as ratio of likelihoods. I can express:
ω_{P+1} = (α_P' Γ^{(P+1)} ⊙ f(y_{P+1})) / (α_P' Γ^{(P+1)} 1) perhaps. Actually predictive distribution for observation: Pr(y_{P+1}|y_{1:P}) ∝ α_P Γ^{(P+1)} f(y_{P+1}). Then take argmax.

Units: probabilities unitless in [0,1]; accuracy = (1/N_test)∑ 1{ŷ = y} unitless proportion; ydstogo in yards (1 to 50); scorediff in points (-59 to 59); play count dimensionless.

Breakdown regimes:
- N > 2: numerical instability due to parameter proliferation vs per-team observations (cite Section 4, page 9).
- ydstogo > 25 yards: excluded, n < 100 (page 6, Figure 2 caption).
- down4: mean 0.015, st.dev. 0.121 (rare).
- goal-to-go: mean 0.057 (rare).
- yardline90: mean 0.033 (rare).
- Match independence assumption may break if plays within a match are not independent across teams? They model each team's offense separately, but assume independence between matches for likelihood product.
- Stationary initial distribution rejected (unrealistic), so they estimate it.

Cite pages: I need to map content to pages.
- Page 2: data description, m=2,526 matches, 5,052 time series, 318,691 plays, training 2009-2017 (2,302 matches, 289,191 plays), test 2018 (224 matches, 29,500 plays), pass proportion 58.4%.
- Page 3: Table 1 descriptive stats.
- Page 4: HMM definition, Bernoulli, transition prob matrix, initial distribution estimated.
- Page 5: Table 2 (duplicate), covariates.
- Page 6: Figure 2, yards to go, >25 excluded n<100.
- Page 7: Figure 3 example time series.
- Page 8: Figure 4 dependence structure, forward algorithm, likelihood, forecasting, per-team fitting.
- Page 9: Results, N=2 selected, AIC forward selection, interactions, accuracy 0.715, team range 0.602 to 0.779, 7 hours for selection, <1 second prediction.
- Page 10: Figure 5 team accuracies, discussion of precision 90% Rams, 55.9% Seahawks.
- Page 11: Discussion, limitations: personnel, Madden ratings, dynamic updating.
- Page 12: References start.
- Page 13: References end.

I will cite [PAGE N] accordingly.

RETROCAUSAL_GENEALOGY:
Historical/scientific lineage: Heiny & Blevins (2011) simple relative frequencies (discriminant analysis for Atlanta Falcons) accuracy ~0.67 play-by-play only. Teich et al. (2016) similar. Lee et al. (2017) and Joash Fernandes et al. (2019) include player ratings (Madden), ~0.75. HMM lineage from Zucchini et al. (2016), applications in stock markets (De Angelis & Paas 2013; Dias et al. 2015), environmental science (Chambers et al. 2012; Tseng et al. 2020), political conflict (Schrodt 2006). Multi-week traps: model static through 2017, tested on 2018; no in-season re-estimation; roster churn, injuries, coaching adjustments create concept drift; weeks 1-4 vs weeks 13-17 accuracy likely diverges; opponent-specific game planning not modeled (only own team's history). Also the counter-trap: offense can use model predictions against defense by intentionally becoming predictable then switching.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure (trailing, late game), teams regress to high-frequency passing habits (score diff negative -> pass more likely, Figure 2). The HMM captures this via scorediff covariate and state transitions.
- Counter-trap: If defensive coordinator relies on HMM output, offense can feign a propensity (e.g., shotgun formation increases pass proportion, Figure 1) then run; or use no-huddle to prevent defensive substitution/adjustment. The model itself does not model the offense's knowledge of being modeled (no adversarial layer).
- Clock: play clock, game clock, score differential drive tempo. No-huddle dummy (mean 0.087) and shotgun (mean 0.525) are temporal compressors. The Markov chain assumes discrete play steps p, not continuous clock time; clock exhaustion is not a state variable.

CROSS_LAYER_VETO_ADJUDICATION:
Physical/biomechanical/weather veto proof.
The paper's covariate set excludes weather (temperature, wind, precipitation), surface (turf vs grass), personnel groupings (11, 12, 21 personnel), injuries, quarterback mobility, defensive alignment. These are veto layers:
- Physical layer: wind > threshold vetoes deep passing; cold affects ball grip; precipitation changes surface friction.
- Biomechanical layer: player fatigue (not modeled), snap count, substitution patterns; offensive line freshness affects pass protection vs run blocking.
- Weather: not in Table 1. Thus the HMM's pass propensity is conditional only on game-state covariates, not environmental state. In a high-wind game, the model may overpredict passes because it learned from all-weather data.
- Breakdown: If a game is played in extreme conditions outside the covariate range, the emission probabilities δ_i and transition coefficients β have no physical grounding to adjust.

RLVR_COUNTERFACTUAL_VETOES:
3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning via Verifiable Rewards or just verifiable reward-based scenarios. I'll frame as counterfactual interventions that would veto the HMM prediction.

Scenario 1: Weather veto. Condition: Game-time wind speed ≥ 20 mph with precipitation. Counterfactual: HMM predicts pass (state 1, high δ_i) based on down/distance/shotgun. Verifiable prediction: Actual pass rate drops by ≥15 percentage points relative to model forecast; HMM accuracy for that game falls below 60% (vs season average 71.5%). Verification: compare model forecast vs play-by-play in Week X windy game.

Scenario 2: Personnel veto. Condition: Opponent replaces starting QB with backup known for run-first style, or offense switches to 22 personnel (2 RB, 2 TE, 1 WR). HMM was trained on all plays including starters. Verifiable prediction: Model overestimates pass probability by ≥0.20; recall for runs drops below 0.50 for that team in that game. Verification: personnel snap counts from NFL Next Gen Stats vs model predictions.

Scenario 3: In-season concept drift / injury veto. Condition: Week 12 onward, key offensive play-caller (OC) or starting QB injured mid-season; model still uses parameters estimated through 2017 (static). Verifiable prediction: Out-of-sample accuracy in Weeks 13-17 2018 degrades to ≤65%, while Weeks 1-4 remains ≥72%; dynamic re-estimation would recover ≥3 percentage points. Verification: rolling-window refit vs static model comparison on 2018 test set.

Need to ensure no betting lines. None mentioned. Good.

Word count check: THINK_TRACE needs >=400 words. Total across sections >=1000. I'll write substantial content.

Let's draft. Ensure exact XML tags. No markdown code blocks outside? I can use LaTeX inline inside sections.

Need to cite verbatim quotes where possible. I'll include short quotes with [PAGE N].

Let's write the response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source paper constructs a discrete-time hidden Markov model (HMM) over binary play calls y_p ∈ {0,1}, where 1 denotes a pass and 0 denotes a run. The hidden state process s_p ∈ {1,...,N} is interpreted as the offense’s latent “propensity to pass.” Because play calls exhibit within-game clustering—runs cluster with runs, passes with passes—the first-order Markov assumption on s_p induces temporal correlation in y_p that static relative-frequency models (Heiny & Blevins, 2011; Teich et al., 2016) cannot capture. The paper fits a separate HMM per team rather than pooling all 32 franchises, which is a heterogeneity correction: New England’s play-calling process is not exchangeable with Seattle’s.

The critical gray zone lies in the transition specification. The paper allows γ_{ij}^{(p)} = Pr(s_p = j | s_{p-1} = i) to depend on covariates x^{(p)} through a multinomial logit link. This means the hidden-state transition matrix Γ^{(p)} is time-varying within a match, driven by down, yards-to-go, shotgun, no-huddle, score difference, goal-to-go, and yardline90. The emission distribution is Bernoulli: Pr(y_p = 1 | s_p = i) = δ_i. A first-order Markov chain with N=2 states is selected explicitly “to avoid numerical instability” [PAGE 9], because the parameter count grows with N and with the covariate/interaction set, while per-team observations are finite (289,191 training plays spread across 32 teams and nine seasons). This is a breakdown regime: N > 2 risks overparameterization relative to per-team information.

Another gray zone is the independence assumption across matches. The full likelihood is the product of per-match likelihoods [PAGE 8], treating each contest as an independent experimental unit. This ignores cross-game carryover (e.g., a defensive adjustment in Week 5 that persists into Week 6) and treats plays within a match as conditionally independent given the hidden state and covariates. Yet Figure 3 shows clustered runs and passes within a single drive, suggesting that the Bernoulli emission may be misspecified: plays are not independent trials but sequential strategic moves within a drive context.

The initial distribution is estimated rather than fixed at stationarity, because “assuming a team to start in its stationary distribution at the beginning of an American football match is fairly unrealistic” [PAGE 4]. This is a non-stationarity acknowledgment, but the model still lacks within-season dynamic updating. It is fitted on 2009–2017 and applied statically to all of 2018 [PAGE 9], creating a concept-drift exposure: injuries, coordinator changes, and opponent-specific game planning evolve over the season, yet parameters remain frozen.

Rare-event breakdowns are explicit in the data. Down 4 has mean 0.015 [PAGE 3]; goal-to-go mean 0.057; yardline90 mean 0.033. Observations with more than 25 yards to go are excluded because each category contains fewer than 100 observations [PAGE 6]. These sparse cells make the multinomial logit transition coefficients high-variance exactly in high-leverage situations.

Prediction quality is asymmetric. Weighted accuracy is 0.715 [PAGE 9], but team-level accuracy spans 0.602 (Seattle) to 0.779 (New England) [PAGE 9]. Pass precision for the Los Angeles Rams is 0.900, while for Seattle it is only 0.559 [PAGE 10]. Run recall for Baltimore is 0.324 versus 0.886 for the Rams [PAGE 9]. A defense coordinator using this model would face very different false-alarm costs depending on which team is offense, which the paper acknowledges but does not resolve with a decision-theoretic threshold.

Finally, the model omits physical and personnel layers: weather, personnel groupings (11/12/21), quarterback identity, defensive alignment, and fatigue are absent from Table 1 [PAGE 3]. The Discussion notes future work could add personnel and Madden ratings [PAGE 11], but as specified the HMM is a game-state-only predictor. Its latent “propensity” is therefore a compressed statistic of down-distance-score context, not a causal model of play generation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, page citations, and breakdown regimes.

Let p index plays within match m, and let y_p ∈ {0,1} be the observed play call, with y_p = 1 for pass and y_p = 0 for run [PAGE 2]. The hidden state is s_p ∈ {1,...,N}, interpreted as the offense’s latent pass propensity [PAGE 4].

Transition operator (covariate-dependent):
γ_{ij}^{(p)} ≡ Pr(s_p = j | s_{p-1} = i; x^{(p)}), for i,j ∈ {1,...,N},
linked to covariates x^{(p)} = (home, ydstogo, down1..down4, shotgun, no-huddle, scorediff, goaltogo, yardline90) via a multinomial logit:
log [ γ_{ij}^{(p)} / γ_{iN}^{(p)} ] = β_{ij,0} + β_{ij}^{⊤} x^{(p)},  j = 1,...,N-1,
with row-stochasticity constraint ∑_{j=1}^N γ_{ij}^{(p)} = 1 for every i and p [PAGE 4–7].

Emission operator (Bernoulli, state-dependent):
f(y_p | s_p = i) = δ_i^{y_p} (1 − δ_i)^{1 − y_p}, where δ_i ≡ Pr(y_p = 1 | s_p = i) ∈ [0,1].
Diagonal emission matrix **P**(y_p) = diag( f(y_p | s_p = 1), ..., f(y_p | s_p = N) ) [PAGE 4].

Initial distribution (estimated, not stationary):
π_i ≡ Pr(s_1 = i), estimated from data because stationarity at kickoff is unrealistic [PAGE 4].

Forward-algorithm likelihood for match m:
L_m(θ) = π′ **P**(y_1) Γ^{(2)} **P**(y_2) ... Γ^{(P_m)} **P**(y_{P_m}) **1**,
where **1** = (1,...,1)′ ∈ ℝ^N, Γ^{(p)} is the covariate-dependent transition matrix at play p, and P_m is the total plays in match m [PAGE 7–8].

Full-data likelihood under match independence:
L(θ) = ∏_{m=1}^{M} L_m(θ),
M = total matches, with training M corresponding to 2,302 matches and 289,191 plays for seasons 2009–2017 [PAGE 2].

One-step-ahead forecast distribution:
Pr(y_{P+1} = y | y^{(P)}, x^{(P+1)}) ∝ α_P′ Γ^{(P+1)} f(y | s_{P+1}),
where α_P is the forward vector after P plays; the predicted class is argmax over y ∈ {0,1} [PAGE 8].

Units:
- Probabilities, accuracy, precision, recall: unitless, range [0,1].
- ydstogo: yards, observed min 1, max 50, mean 8.634, st.dev. 3.931 [PAGE 3].
- scorediff: points (own − opponent), range [−59, 59], mean −1.458, st.dev. 10.84 [PAGE 3].
- Play counts: dimensionless; test set 2018 has 224 matches, 29,500 plays [PAGE 2].
- Covariate dummies (home, shotgun, no-huddle, goaltogo, yardline90, downs): unitless Bernoulli indicators [PAGE 3].

Breakdown / singularity regimes:
1. N > 2: numerical instability due to parameter proliferation versus per-team observations; hence N = 2 is fixed [PAGE 9].
2. ydstogo > 25 yards: excluded from Figure 2 analysis because fewer than 100 observations per category [PAGE 6].
3. down4 indicator: mean 0.015, st.dev. 0.121 [PAGE 3]; sparse fourth-down transitions inflate variance of γ coefficients.
4. goaltogo: mean 0.057, st.dev. 0.232 [PAGE 3]; rare regime with limited support.
5. yardline90: mean 0.033, st.dev. 0.178 [PAGE 3]; rare deep-own-territory regime.
6. Match-independence assumption: breaks if cross-game strategic carryover exists; not modeled.
7. Static parameter regime: parameters estimated through 2017 and held fixed for all 2018 plays; no in-season re-estimation, creating exposure to concept drift from injuries and coaching changes [PAGE 9, 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The paper descends from a sequence of NFL play-call prediction studies. Heiny & Blevins (2011) used simple arithmetic—relative frequencies of runs and passes from previous matches—and report prediction accuracy of about 0.67 using play-by-play data only [PAGE 1]. Teich et al. (2016) occupy the same play-by-play-only stratum. Lee et al. (2017) and Joash Fernandes et al. (2019) add player-level information (e.g., number of offensive players by position and player ratings such as Madden) and report accuracy of about 0.75 [PAGE 1]. Otting’s contribution sits between these: using play-by-play covariates only, the HMM reaches 0.715 weighted accuracy, “substantially higher” than play-by-play-only predecessors and only slightly below the player-informed studies, “notably without taking into account information about the players on the field” [PAGE 9].

Beyond sports analytics, the HMM methodology draws from Zucchini, MacDonald & Langrock (2016) and prior applications to stock markets (De Angelis & Paas, 2013; Dias et al., 2015), environmental science (Chambers et al., 2012; Tseng et al., 2020), and political conflict forecasting (Schrodt, 2006) [PAGE 1]. The intellectual thread is that categorical time series are generated by an unobserved regime process; in football, that regime is “pass propensity.”

Multi-week traps:
- Static-fit trap: The model is trained on 2009–2017 and applied unchanged to every 2018 game [PAGE 9]. Over a 17-week season, offensive coordinators install new concepts, quarterbacks incur injuries, and defensive coordinators accumulate film. A model frozen at the 2017 boundary cannot track week-to-week scheme evolution. Accuracy in Week 1–4 likely differs systematically from Week 13–17; the paper reports only a season-aggregate 0.715 [PAGE 9].
- Opponent-neglect trap: Each team’s HMM is fit to that team’s own history only. It does not condition on the opposing defense’s personnel or tendencies, so it cannot capture matchup-specific play-calling (e.g., attacking a weak cornerback).
- Substitution trap: Players are substituted frequently during a match [PAGE 11], yet team-level parameters assume a representative offense. A backup quarterback entering mid-game invalidates the stationary emission probabilities δ_i learned from starter-heavy data.
- Weather/personnel trap: No weather, personnel grouping, or injury covariates are included [PAGE 3, 11]. A late-season cold-weather game or a rushing-heavy personnel package can override the learned down-distance-score pass propensity.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

The HMM is itself a recursive theory-of-mind device: the defense models the offense’s hidden pass-propensity state, while the offense, aware of being modeled, may manipulate that state. Three recursive layers interact.

Crisis habit regression: Under negative scorediff (trailing), the empirical pass probability rises [PAGE 3, Figure 2]. The HMM encodes this via the scorediff covariate and its interaction with ydstogo [PAGE 9]. In crisis situations, offenses regress to high-frequency passing habits; the model captures the population average of that regression but not individual coordinator idiosyncrasy.

Counter-trap: If a defensive coordinator trusts the HMM output, the offense can run a second-order bluff. Because shotgun increases observed pass proportion substantially [PAGE 3, Figure 1], an offense may motion into shotgun to induce a pass prediction from the defense, then run. Or it may use no-huddle (mean 0.087 [PAGE 3]) to prevent the defense from substituting based on the model’s forecast. The paper’s HMM has no adversarial layer: it does not model the offense’s knowledge that its own play calls are being predicted. This is an open-loop model in a closed-loop game.

Clock: The Markov chain indexes discrete plays p, not continuous game clock. The no-huddle dummy compresses the inter-play interval, and score difference changes as the clock winds down, but clock time itself is not a covariate. Late-game clock management (two-minute drill, kneel-downs, spikes) creates non-stationary play-calling regimes that a play-indexed HMM may miss if the hidden state does not explicitly track game-clock segments.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The covariate table contains no meteorological, surface, personnel, or injury variables [PAGE 3]. Therefore three exogenous veto layers can override the HMM’s predicted pass propensity without the model being able to adjust:

Physical layer: Wind speed, precipitation, and temperature alter ball aerodynamics and grip. A high-wind game physically suppresses deep-pass viability regardless of down-and-distance. Because the emission probabilities δ_i are estimated across all weather conditions, a windy contest will systematically bias pass predictions upward relative to physical reality. The model has no veto mechanism for wind thresholds.

Biomechanical layer: Player fatigue, offensive-line freshness, and snap counts affect run-blocking versus pass-protection effectiveness. Frequent substitutions [PAGE 11] mean the personnel executing a “propensity” state changes within a game. A tired offensive line may veto a pass play even when the hidden state indicates high pass propensity; the model cannot observe fatigue.

Weather layer: Precipitation changes surface friction and cutting ability, affecting route running and run-game blocking. No weather variable appears in Table 1 [PAGE 3] or in the selected interaction set [PAGE 9]. A snow or rain game is therefore processed by the same transition coefficients as a dome game, violating physical conditioning.

Adjudication: The HMM’s forecast is valid only under the ceteris paribus condition that physical and personnel context matches the training distribution. Any extreme weather, significant personnel departure from starter norms, or mid-game injury is an unmodeled veto. The model outputs a probability, but the physical layer can render that probability moot.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios and predictions.

RLVR = verifiable counterfactual interventions that invalidate the HMM forecast. Each scenario specifies a condition, a counterfactual perturbation, and a verifiable prediction testable against play-by-play data.

Scenario 1: Weather veto.
Condition: Kickoff wind speed ≥ 20 mph with measurable precipitation in a 2018 outdoor game.
Counterfactual: Hold all model covariates (down, ydstogo, shotgun, scorediff, etc.) fixed at their observed values; remove the weather effect that is absent from the model.
Verifiable prediction: The HMM will forecast a pass probability above its season mean for that down-distance state, but the observed pass rate in that game will fall by at least 15 percentage points relative to the model’s weighted forecast, and the game-level prediction accuracy will drop below 0.60 (versus the 0.715 season average) [PAGE 9]. Verification: compare model forecast vs. actual play calls in Week X high-wind games using official gamebook weather data.

Scenario 2: Personnel-grouping veto.
Condition: The offense deploys heavy personnel (e.g., 22 or 13 personnel: multiple tight ends/running backs, fewer wide receivers) in a game where the model was trained predominantly on 11-personnel snaps.
Counterfactual: The HMM’s emission probability δ_i for the pass-propensity state remains anchored to starter, 11-personnel frequencies.
Verifiable prediction: For that team-game, the model’s pass precision will fall below 0.55 (the Seattle low-water mark [PAGE 10]) and run recall will exceed 0.80, because the personnel constraint mechanically limits passing options. Verification: cross-reference NFL Next Gen Stats personnel snap counts with model output for the same team-game.

Scenario 3: In-season concept-drift / injury veto.
Condition: Week 12 onward of the 2018 season, after a starting quarterback or offensive coordinator change for a given team, while the model still uses parameters estimated through the 2017 season [PAGE 9].
Counterfactual: A dynamically re-estimated HMM using a rolling window of 2018 plays.
Verifiable prediction: Static-model accuracy for that team in Weeks 13–17 will fall to ≤ 0.65, while Weeks 1–4 accuracy remains ≥ 0.72; a rolling re-fit will recover at least 3 percentage points of accuracy relative to the static model. Verification: refit the HMM on expanding 2018 windows and compare out-of-sample one-step-ahead accuracy against the fixed 2009–2017 parameter vector.
</RLVR_COUNTERFACTUAL_VETOES>