---
source: "_OceanofPDF.com_Predictive_Modelling_for_Football_Analytics_-_Leonardo_Egidi.pdf"
folder: "/CorpusRoot"
pages: 262
model: baidu/ernie-5.5-flash-preview:free
words: 7135
---

<NATIVE_REASONING>
Let me start by understanding what's being asked. The user has provided a large source text from a book "Predictive Modelling for Football Analytics" and wants me to produce a structured analysis following a very specific XML template with these sections:

- `<THINK_TRACE>` (Deep multi-hop derivation & gray-zone audit, >=400 words)
- `<SOURCE_OPERATORS_AND_EQUATIONS>` (Formal LaTeX, units, page citations, breakdown)
- `<RETROCAUSAL_GENEALOGY>` (Historical/scientific lineage & multi-week traps)
- `<RECURSIVE_THEORY_OF_MIND>` (Crisis habit regression vs counter-trap vs clock)
- `<CROSS_LAYER_VETO_ADJUDICATION>` (Physical/biomechanical/weather veto proof)
- `<RLVR_COUNTERFACTUAL_VETOES>` (3 verifiable RLVR veto scenarios + predictions)

STRICT INVARIANTS:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections.

Let me think about this carefully. This is a legitimate request to produce a deep technical analysis of football/soccer predictive modeling based on the actual academic source provided. There's no betting advice requested (in fact invariant 1 forbids betting lines), and the content is a statistics textbook. This is entirely legitimate analytical work.

The task is essentially: produce a rigorous, deeply-cited technical analysis of the statistical models in this book, following a specific structured format. The "GSE + GSI Frontier Reasoning Foundry" framing and the elaborate section names are just a scaffold for producing rigorous analysis.

Let me note: The invariant about "ZERO BETTING LINES" is important — the book does have a chapter on betting (Chapter 7), but I must not mention spreads, totals, moneylines, or odds. I should focus on the statistical/probabilistic modeling content. Actually, I need to be careful — the book discusses odds in the context of Chapter 7 and implied probabilities. But the invariant says never mention spreads, totals, moneylines, or odds. I'll avoid discussing betting lines/odds specifically. I can discuss the statistical concepts.

Wait — but actually I should think about whether this instruction conflicts with anything. The user is asking me to analyze a statistics textbook and produce structured reasoning. The betting invariant is a self-imposed constraint by the user's system prompt that actually aligns with responsible behavior (not giving gambling advice). So I'll honor it.

Let me focus on the substance. The key models in the book:

1. **Double Poisson model** (Maher 1982, Lee 1997):
   - $Y_{i\ell} \sim \text{Poisson}(\lambda_{i\ell})$
   - $\log \lambda_{i1} = \mu + \text{home} + \text{att}_{hi} + \text{def}_{ai}$
   - $\log \lambda_{i2} = \mu + \text{att}_{ai} + \text{def}_{hi}$
   - Sum-to-zero constraints: $\sum_k \text{att}_k = \sum_k \text{def}_k = 0$
   - Reparameterization: $\lambda_{i1} = \delta \gamma^{\alpha_{hi}} \beta_{ai}$ etc.

2. **Bivariate Poisson** (Karlis & Ntzoufras 2003):
   - $Y_1 = X_1 + X_3$, $Y_2 = X_2 + X_3$
   - $\text{Cov}(Y_1, Y_2) = \lambda_3$
   - Joint pmf with modified Bessel function

3. **Skellam / Poisson-difference** (Karlis & Ntzoufras 2009):
   - $Z = Y_1 - Y_2 \sim \text{PD}(\lambda_1, \lambda_2)$
   - $f_Z(z) = \exp\{-(\lambda_1+\lambda_2)\} (\lambda_1/\lambda_2)^{z/2} I_z\{2\sqrt{\lambda_1\lambda_2}\}$
   - Modified Bessel function $I_r(x)$

4. **Diagonal-inflated bivariate Poisson** (Karlis & Ntzoufras 2003)

5. **Bradley-Terry / Davidson models** for paired comparisons:
   - $P_{ij} = B_i/(B_i + B_j)$
   - Rao-Kupper, Davidson extensions for ties

6. **Ordered multinomial logistic** with home advantage (Davidson & Beaver 1977)

7. **Dynamic abilities** (Rue & Salvesen 2000, Owen 2011):
   - $\text{att}_{k,t} \sim N(\text{att}_{k,t-1}, \sigma_a^2)$
   - Gaussian processes (Egidi et al 2018)
   - Autoregressive (Koopman & Lit 2015): $\text{att}_{k,t} = \gamma_k + \phi_k \text{att}_{k,t-1} + \eta_{k,t}$

8. **Student-t goal difference model** (Gelman 2014, Kharratzadeh 2017)

9. **Count Weibull model** (Boshnakov et al 2017)

10. **Copula models** (McHale & Scarf 2011) — Frank copula

11. **Dixon-Coles** low-score correction $\tau_{\lambda_1,\lambda_2}(y_1,y_2)$

12. **Scaled double Poisson** with time weighting $\phi(t) = \exp(-\xi t)$

13. **Estimation**: MLE, Newton-Raphson, EM, MCMC (Metropolis-Hastings, Gibbs, HMC)

14. **Model comparison**: AIC, BIC, DIC, WAIC, LOOIC, Bayes factors

15. **Evaluation metrics**: RMSE, MAE, Brier score, RPS, pseudo-R², Cohen's Kappa

Now, the format requires several "creative" reasoning sections. Let me interpret them:

- `<THINK_TRACE>`: Deep multi-hop derivation & gray-zone audit. I should derive things like the overdispersion, the correlation structure, the identifiability issues, the draw probability behavior. Multi-hop = connect multiple concepts. Gray-zone audit = examine edge cases and ambiguities.

- `<SOURCE_OPERATORS_AND_EQUATIONS>`: Formal LaTeX with units, page citations, verbatim quotes, breakdown regimes (where models break down / singularities).

- `<RETROCAUSAL_GENEALOGY>`: Historical/scientific lineage (Moroney 1956 → Maher 1982 → Dixon-Coles 1997 → Karlis-Ntzoufras 2003/2009 → dynamic → modern). "Multi-week traps" — I think this refers to temporal modeling traps (the dynamic models, temporal correlation issues).

- `<RECURSIVE_THEORY_OF_MIND>`: "Crisis habit regression vs counter-trap vs clock." This is about modeling the psychological effects (Rue-Salvesen psychological effect parameter ζ), the red card momentum, in-play dynamics, game state dependence. The "clock" = time within match, substitutions timing, etc. Recursive theory of mind = modeling how teams anticipate each other (game theory of scoring/correlation).

- `<CROSS_LAYER_VETO_ADJUDICATION>`: "Physical/biomechanical/weather veto proof." Here I discuss the physical constraints — altitude (Bolivia 2500m/3000m), artificial turf, weather covariates, tracking data at 20-30 Hz, the low-scoring nature. This is about how physical layer can veto a purely statistical prediction.

- `<RLVR_COUNTERFACTUAL_VETOES>`: "3 verifiable RLVR veto scenarios + predictions." RLVR = Reinforcement Learning from Verifiable Rewards. I need to produce 3 concrete, testable/counterfactual scenarios with predictions. These should be falsifiable claims grounded in the book's models.

Let me make sure I hit >= 1000 words total across sections. That's very achievable given the depth.

Let me be rigorous about the math. Let me carefully reproduce equations with proper LaTeX.

Let me think about the singularity/breakdown regimes carefully:

**Double Poisson breakdown:**
- Overdispersion: Var > mean. The Poisson assumes Var(Y) = E(Y) = λ. The book [PAGE 27] Figure 1.1 shows EPL data mean-variance. When overdispersion present, need negative binomial or generalized Poisson.
- Independence assumption fails: Cov(Y1,Y2) ≠ 0.
- Excess of draws: The probability of a draw under equal expected goals. [PAGE 78-79] Figure 2.5 shows P(draw) as high as 80% for low expected scoring, ~20% for λ=3.

**Bivariate Poisson singularity:**
- $\lambda_3 \geq 0$ always (it's a Poisson rate = covariance). So BP can only model non-negative correlation. This is a fundamental constraint. When true correlation is negative (e.g., international mismatches, Bundesliga), BP fails. [PAGE 11] notes Bundesliga negative correlations. [PAGE 142] the San Marino-England example.
- The pmf involves an infinite... no, it's a finite sum to min(y1,y2). The Bessel function representation.

**Skellam:**
- $I_z$ modified Bessel function. As $\lambda_1, \lambda_2 \to 0$... The Skellam is independent of $\lambda_3$, so it discards correlation info but that means estimating marginals as if double Poisson overestimates parameters [PAGE 164]. 
- Breakdown: draws. Zero-inflated Skellam adds p at z=0.

**Dixon-Coles τ:**
- $\tau$ constraint: $\max(-1/\lambda_1, -1/\lambda_2) \leq \rho \leq \min(1/\lambda_1\lambda_2, 1)$. If violated, negative probabilities. This is the breakdown regime. [PAGE 198]

**Identifiability:**
- Without $\mu$, when two equal teams on neutral ground with compensating skills, $\log\lambda \to 0$, $\lambda \to 1$, model non-identifiable, and P(0-0) forced to specific value. [PAGE 120-121]

**Bivariate Poisson log(λ3) linear predictor** (Eq 4.17): with dummy indicators ω.

**Dynamic abilities:**
- Random walk prior $\text{att}_{k,t} \sim N(\text{att}_{k,t-1}, \sigma_a^2)$. 
- AR(1) stationarity requires $|\phi_k| < 1$ [PAGE 132]. Breakdown when $\phi \to 1$ (unit root, non-stationary). The unconditional variance $\sigma^2/(1-\phi^2) \to \infty$ as $|\phi| \to 1$. This is a singularity.
- Convergence issues: the Rhat values in the outputs (e.g., 1.42, 2.27, 2.01) show the dynamic models don't converge well for sigma parameters. [PAGE 141, 158, 169]

**FIFA SUM ranking** (Eq 6.1): $We = 1/(10^{-dr/600}+1)$. This is an Elo-type expected result. Breakdown: dr = 0 gives We = 0.5. As dr → ±∞, We → 0 or 1. 

Let me also discuss the Brier score, RPS as proper scoring rules with units (dimensionless probability errors).

Information units: The log predictive density (lppd), LPS $-\log f(y_V|\theta_T)$ — this is in nats (natural log) or bits (log2). WAIC, LOOIC in deviance scale (nats, scaled by -2).

Let me now think about the "cold open" — I should probably not add much preamble. The user wants the XML sections. Let me produce a brief intro then the sections. Actually, given the response style guidance (concise), and the very structured request, I'll just produce the XML sections directly, maybe with a one-line intro. Actually, the format is strict, so I'll lead with the XML sections.

Let me now write each section carefully with real citations from the provided text.

Let me gather exact page quotes I can use:

[PAGE 2]: "the inherently fluid and low-scoring nature of football has posed unique challenges" (actually that's preface PAGE 12)

[PAGE 18]: "One of the most important aspects about football is its inherent uncertainty leading to unpredictability (Scarf et al., 2022), which is the result of the fact that football is, in fact, a low-score sport. Typically we expect, depending on the tournament or league, around two or three goals per match, while other popular sports like basketball have scores up to 200 per match in total."

[PAGE 21]: Moroney (1956) Poisson. Reep and Benjamin (1968) negative binomial.

[PAGE 23]: Bradley-Terry $P_{ij} = \Pr(i>j) = B_i/(B_i+B_j)$, and $\log \frac{\Pr(i>j)}{\Pr(j>i)} = \beta_i - \beta_j$ (Eq 1.1).

[PAGE 24]: Rao-Kupper, Davidson models.

[PAGE 24-25]: ordered multinomial logistic Eq 1.2 with cutpoints δ.

[PAGE 27]: overdispersion. "the observed variance in goals scored in each match exceeds the expected variance under a Poisson assumption."

[PAGE 28]: Figure 1.1 EPL mean-variance.

[PAGE 29-30]: correlation, Bundesliga negative, Karlis-Ntzoufras 2003 "even minor correlations can significantly impact predicted win probabilities."

[PAGE 43]: Double Poisson Eq 2.2, 2.3.

[PAGE 44]: vanilla model Eq 2.3. Maher 1982.

[PAGE 45]: sum-to-zero constraints, Eq 2.4 (ability = att - def).

[PAGE 60]: overdispersion, bivariate Poisson.

[PAGE 78-79]: Figure 2.5 P(draw).

[PAGE 81]: dynamic abilities.

[PAGE 118]: Bivariate Poisson general def, San Marino-England example, "San Marino scored after eight seconds!"

[PAGE 124]: Bivariate Poisson pmf Eq 4.15, BP(λ1,λ2,λ3), Cov(Y1,Y2)=λ3.

[PAGE 126-127]: model spec Eq 4.16, 4.17.

[PAGE 128-129]: Dixon-Coles weighting, Eq 4.19, 4.20.

[PAGE 129]: Rue-Salvesen truncated Poisson, psychological effect.

[PAGE 130]: dynamic abilities Eq 4.22, 4.23 (ζ psychological), 4.24 (random walk prior).

[PAGE 131]: Gaussian processes Eq 4.27, Koopman-Lit AR Eq 4.29, 4.31 (stationarity |φ|<1).

[PAGE 132]: unconditional variance.

[PAGE 163-164]: Skellam Eq 5.2, Bessel function Eq 5.3.

[PAGE 168-169]: zero-inflated Skellam Eq 5.5.

[PAGE 170]: student-t Eq 5.6, 5.7.

[PAGE 181]: Dixon-Coles scaled Poisson Eq 5.12, 5.13, τ constraint.

[PAGE 182-184]: count Weibull Eq 5.16, hazard h(t) = λct^{c-1}.

[PAGE 186-187]: copula, Frank copula.

[PAGE 195]: FIFA SUM Eq 6.1.

[PAGE 206]: international modeling challenges.

Let me also note the empirical numbers from the case study (Serie A 2009/2010):
- home = 0.41 (double Poisson), exp(0.41) ≈ 1.51
- home = 0.34 (bivariate Poisson), exp(0.34) ≈ 1.40
- λ3 = exp(-2.36) ≈ 0.094 (bivariate Poisson correlation)
- LOOIC: vanilla DP 2138.7 (best), dynamic DP 2143.2, dynamic BP 2145.8
- Serie A underdispersion: avg home goal 1.54 variance 1.34, avg away 1.07 sd 0.99 [PAGE 158]
- Student-t LOOIC 1328.6 (best among goal-difference models)

Now let me write.

For the THINK_TRACE, I want to do multi-hop derivation. Let me derive:
1. Why double Poisson independence → over/under-dispersion of goal difference and total.
2. Var(Y1+Y2) = λ1 + λ2 + 2λ3 under BP. So correlation affects total goals variance.
3. Var(Z) = Var(Y1-Y2) = λ1 + λ2 - 2λ3 under BP. Skellam (independent) gives λ1+λ2, so ignores -2λ3.
4. The draw probability derivation: P(Z=0) = P(Y1=Y2). For Skellam, $P(Z=0) = e^{-(\lambda_1+\lambda_2)} I_0(2\sqrt{\lambda_1\lambda_2})$.
5. Gray-zone: the confounding of λ3 in Skellam — the book notes that if true model is BP but we fit Skellam, we assume $Z \sim PD(\lambda_1+\lambda_3, \lambda_2+\lambda_3)$.

Let me verify: If $Y_1 = X_1 + X_3$, $Y_2 = X_2 + X_3$ with $X_i$ independent Poisson. Then $Z = Y_1 - Y_2 = X_1 - X_2$. So $Z \sim PD(\lambda_1, \lambda_2)$ exactly (the $X_3$ cancels). The Skellam for Z is exact regardless of λ3. BUT the point the book makes [PAGE 164] is about parameter estimation: if you estimate a double Poisson (ignoring λ3) and then compute the implied draw probability, you overestimate. Actually let me re-read.

[PAGE 164]: "treating the number of goals independently for each team leads to an over-estimation of model parameters... if the true underlying model is the bivariate Poisson model, but we use instead the double Poisson model, we assume that the difference follows $Z = Y_1 - Y_2 \sim PD(\lambda_1 + \lambda_3, \lambda_2 + \lambda_3)$ instead of the correct $Z \sim PD(\lambda_1, \lambda_2)$."

Hmm, so the marginal of Y1 under BP is Poisson(λ1 + λ3) and Y2 is Poisson(λ2 + λ3). If you fit double Poisson to the marginals, you'd estimate marginal means λ1+λ3 and λ2+λ3. Then the "double Poisson" implied difference would be PD(λ1+λ3, λ2+λ3), which has larger parameters. And "the probability of a draw under a bivariate Poisson model is larger than the corresponding probability under the double Poisson model even if λ3 is quite small." So BP captures more draws. Good — this is the multi-hop: BP marginals are inflated by λ3, and the difference distribution being PD(λ1, λ2) (not the inflated version) is what makes draws more probable. Let me double check: P(Z=0) for PD(a,b) = e^{-(a+b)} I_0(2√{ab}). Is this larger for (λ1, λ2) vs (λ1+λ3, λ2+λ3)? Since a+b is smaller for the non-inflated, e^{-(a+b)} is larger. And I_0 term... The draw probability e^{-(a+b)}I_0(2√{ab}) is decreasing in (a+b) roughly. So yes PD(λ1,λ2) has higher P(Z=0) than PD(λ1+λ3, λ2+λ3). So BP (correct) has more draws than double Poisson (misspecified). Good, this confirms the book's claim. Nice multi-hop.

For the gray-zone audit, I should note ambiguities: e.g., the sign of correlation, the identification of draw probability, the choice of g in Hosmer-Lemeshow, the choice of ξ in Dixon-Coles weighting, Lindley-Bartlett paradox.

For SOURCE_OPERATORS_AND_EQUATIONS: I'll present the core equations with LaTeX, units, page cites, verbatim quotes, and breakdown regimes. I'll organize as a formal catalog.

Let me structure:
- Double Poisson (Eq 2.2, 2.3, 2.4)
- Bivariate Poisson (Eq 4.15, Cov = λ3)
- Skellam (Eq 5.2, 5.3)
- Dixon-Coles τ (Eq 5.13) + constraint
- Dynamic random walk (Eq 4.24) + AR(1) stationarity (Eq 4.29, 4.31)
- Psychological effect (Eq 4.23)
- FIFA SUM (Eq 6.1)
- Scoring rules: Brier (Eq 3.9), RPS (Eq 3.12), LPS
- Information criteria: WAIC (Eq 2.16), LOOIC (Eq 2.18)
- Weibull count hazard h(t) = λct^{c-1}

Breakdown regimes for each.

For RETROCAUSAL_GENEALOGY: the lineage and "multi-week traps" (temporal modeling pitfalls):
- Moroney 1956 → Reep-Benjamin 1968 → Maher 1982 → Lee 1997 → Dixon-Coles 1997 → Karlis-Ntzoufras 2000a/2003/2009 → Rue-Salvesen 2000 → Baio-Blangiardo 2010 → Owen 2011 → McHale-Scarf 2007/2011 → Koopman-Lit 2015/2019 → Egidi et al 2018 → Boshnakov 2017 → current book 2026.
- Bradley-Terry 1952 → Rao-Kupper 1970 → Davidson 1970 → Davidson-Beaver 1977 → Hvattum-Arntzen 2010 (Elo covariates).
- Multi-week traps: temporal dependence (Harvey-Fernandes 1989, Angelini-De Angelis 2017, Mattera 2023). Dynamic abilities. The trap: using future data to predict past (train/test split must respect time order [PAGE 92]). The "winter champion" fallacy [PAGE 94]. Random walk vs mean-reversion.

For RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.
- The psychological effect ζ (Eq 4.23): the favorite team's mental state.
- The correlation ρ/λ3 as a game-theoretic response: when a team concedes, opponent's behavior changes. Titman et al 2015 red card effects. 
- "Crisis habit regression": teams revert to habitual behavior under crisis. Red card → tactical adjustment.
- Counter-trap: the away team late red card can be advantageous [PAGE 20] "ten do it better myth."
- Clock: substitution timing (Myers 2012: 58th, 73rd, 79th minutes; Silva-Swartz 2016 Bayesian logistic regression found no clear advantage). In-play models. Time-dependent hazard.
- Recursive: teams model each other → correlation structure. The BP λ3 "reflects game conditions, such as the speed of the game, the weather, the climate, the stadium" [PAGE 126].

For CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof.
- Altitude: FIFA 2007 ban >2500m, raised to 3000m, lifted May 2008 [PAGE 19]. Chumacero 2009 found no significant effect (bivariate Poisson); Casas-Fawaz 2016 found effect. So physical layer (altitude) can veto the home-advantage statistical estimate — but empirically ambiguous.
- Artificial turf: ball travels faster, bounces higher; injury risk; fatigue [PAGE 19]. Barnett-Hilditch 1993, Trombley 2016 found no significant evidence.
- Weather: not in vanilla model; would be a covariate. The bivariate Poisson λ3 "reflects game conditions, such as the speed of the game, the weather."
- Tracking data 20-30 Hz [PAGE 3, PAGE 21]. xG model.
- Low-scoring nature (Poisson breakdown) is a physical/biomechanical constraint: 2-3 goals/match [PAGE 18].
- The veto logic: a purely statistical ability estimate (att, def) can be "vetoed" by an unmodeled physical shock (altitude, red card, weather). The CROSS_LAYER proof: show that the model's predictive distribution must be conditioned on these physical covariates to avoid bias.

For RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
I need falsifiable, testable claims grounded in the models. E.g.:
1. Overdispersion veto: For a league where the mean-variance plot lies above the Poisson CI band (overdispersion), a double Poisson will be rejected in favor of negative binomial / BP by LOOIC. Verifiable: Serie A 2009/2010 is UNDER-dispersed (var 1.34 < mean 1.54 for home) → Poisson/BP fits well, DP wins LOOIC (2138.7). Prediction: In an over-dispersed league (e.g., international matches [PAGE 10]), the negative binomial will beat double Poisson on LOOIC.
2. Correlation-sign veto: BP assumes λ3 ≥ 0 (Cov ≥ 0). For a league/match-type with negative correlation (Bundesliga, international mismatches), the BP model is misspecified; copula (Frank) with negative θ will win. Verifiable via the estimated ρ. In Serie A, ρ̂ = -2.36 → λ3 = exp(-2.36) ≈ 0.094 > 0, small positive. Prediction: For Bundesliga, ρ < 0 will be estimated; copula will outperform BP.
3. Dynamic-vs-static veto: If team abilities are non-stationary (roster churn, e.g., national teams at World Cup), the static model's LOOIC will be worse than dynamic. But the book found static beat dynamic for Serie A 2009/2010 (2138.7 vs 2143.2). Prediction: For a tournament with high roster volatility (World Cup), dynamic abilities will beat static on out-of-sample RPS/LPS. Counter-prediction: Rhat for dynamic σ params > 1.1 (non-convergence), so the dynamic advantage may be nominal.

Let me make these concrete and "verifiable" — i.e., state a measurement that would confirm/refute.

Now let me also make sure I don't mention betting odds. The FIFA ranking is fine (it's a rating, not betting odds). I'll avoid Chapter 7 betting content entirely, or mention only that the book connects to market-based implied probabilities without giving lines. Actually the invariant is "never mention spreads, totals, moneylines, or odds." I'll avoid odds. I can mention "implied probabilities" as a concept abstractly but I'll be careful. Better to just steer clear.

Let me write this out now. I need >= 1000 words total across the sections. Let me aim for ~2000-2500 words to be safe and thorough.

Let me be careful with LaTeX formatting — use proper notation.

Let me draft.

Actually, let me reconsider the tone. The system prompt has a very particular "foundry" persona with elaborate section names. But my core identity guidance says to be direct and concise, prioritize actionable info, match format to task. The user explicitly wants these XML sections with depth. So I'll produce them, with genuine technical rigor, no fluff, no fabricated content. I'll cite real page markers and real equations from the provided text.

One thing: invariant 2 says "cite exact [PAGE N] markers and verbatim quotes" when source pages are provided. They are provided. So I must use [PAGE N] and verbatim quotes. Good, I have many.

Let me make sure my verbatim quotes are actually verbatim from the text. Let me pick carefully:

[PAGE 18]: "One of the most important aspects about football is its inherent uncertainty leading to unpredictability" and "football is, in fact, a low-score sport" and "around two or three goals per match, while other popular sports like basketball have scores up to 200 per match in total."

[PAGE 30]: "As highlighted by Karlis and Ntzoufras (2003), even minor correlations can significantly impact predicted win probabilities." — let me check exact. [PAGE 30]: "As highlighted by Karlis and Ntzoufras (2003), even minor correlations can significantly impact predicted win probabilities. This limitation necessitates careful interpretation..." Yes.

[PAGE 60]: "the observed variance in goals scored in each match exceeds the expected variance under a Poisson assumption." Let me check — that's actually [PAGE 27]: "This implies that the observed variance in goals scored in each match exceeds the expected variance under a Poisson assumption." Yes [PAGE 27].

[PAGE 78]: "the probability of a draw is as high as 80% for teams with very low expected scoring ability and decreases around to 20% for teams with expected number of goals equal to three" — [PAGE 78-79]. Let me check: [PAGE 79] "As you can see from this figure, the probability of a draw is as high as 80% for teams with very low expected scoring ability and decreases around to 20% for teams with expected number of goals equal to three (which is quite high and unrealistic for most games)." Yes.

[PAGE 120-121]: "by removing this parameter we would get in fact log(λi1) ≈ log(λi2) = 0, then λi1 ≈ λi2 ≈ 1, which would make the resulting model non-identifiable." Yes [PAGE 121].

[PAGE 118]: "San Marino scored after eight seconds!" and the whole England 7-1. Actually [PAGE 142] has this. Let me recheck. It's [PAGE 142]: "San Marino scored after eight seconds!—and the scorer, Davide Gualtieri, became a local hero" and "the match finished 7-1 for England". Yes [PAGE 142].

[PAGE 126]: "λ1 and λ2 represent, as for the double Poisson model, the "net" scoring strengths for each team, whereas λ3 reflects game conditions, such as the speed of the game, the weather, the climate, the stadium, and so on." Yes [PAGE 126].

[PAGE 164]: "we assume that the difference follows Z = Y1 − Y2 ∼ PD(λ1 + λ3, λ2 + λ3) instead of the correct Z ∼ PD(λ1, λ2)." Yes.

[PAGE 19]: "FIFA, in 2007, banned World Cup qualifiers from being played in stadiums exceeding 2500 meters above sea level... The limit was subsequently raised to 3000 meters, ultimately affecting only Bolivia... the ban was lifted in May 2008." And "Chumacero (2009) examined this using a bivariate Poisson model for international match outcomes but found no significant effect. However, Casas and Fawaz (2016) reported evidence of an altitude effect for some South American national teams." Yes [PAGE 19].

[PAGE 132]: Koopman-Lit "The authors assume a stationary process for the team-specific abilities by requiring the conditions |ϕ·k| < 1." Yes.

[PAGE 158]: "the average home goal per match is 1.54, with a variance of 1.34, whereas the average away goal per match is 1.07 with a standard deviation of 0.99". Yes.

[PAGE 143]: LOOIC table. "the static vanilla double Poisson model attains the lowest LOOIC value (2138.7)". Yes [PAGE 143]. Actually the LOOIC table 4.3 is on [PAGE 143]. Let me recheck — the text at end of [PAGE 142] / [PAGE 143]. The table 4.3 shows Vanilla DP 2138.7, Biv Poisson (student-t) 2139.7, Biv Poisson default 2139.9, Dynamic DP 2143.2, Dynamic BP 2145.8. Yes.

[PAGE 92]: "When the data are time dependent, then we should be careful with the selection of the train and the dataset since future data cannot be used to train a model for prediction in the past." Yes [PAGE 92].

[PAGE 94]: winter champion. "The most common prediction scenario, from the perspective of the fans, is the prediction of the winner in the middle of the season (sometimes called the first round of the league)... the informal title of the "winter champion"." Yes [PAGE 94].

[PAGE 129]: Rue-Salvesen psychological. Actually the psychological effect ζ is [PAGE 130] Eq 4.23. And Rue-Salvesen truncated Poisson [PAGE 129].

[PAGE 20]: red card. "the results suggest that a late red card for the away team can even be advantageous. This potentially suggests that the "ten do it better" myth holds some truth for guest teams to some extent." Yes [PAGE 20].

[PAGE 21-22]: substitutions. Myers 2012: "making the first substitution by the 58th minute, the second by the 73rd minute, and the third by the 79th minute". Silva-Swartz 2016 Bayesian logistic regression "did not identified any specific time point where substitutions offered a clear advantage." [PAGE 22].

[PAGE 182]: Weibull count. hazard $h(t) = \lambda c t^{c-1}$, c=1 recovers Poisson. "It can be monotonically increasing for c > 1, monotonically decreasing for c < 1, or constant (and equal to λ) for c = 1." [PAGE 182].

[PAGE 198]: Dixon-Coles τ constraint. "$\max(−1/λ1, −1/λ2) ≤ ρ ≤ \min(1/λ1λ2, 1)$" [PAGE 198].

[PAGE 195]: FIFA SUM. Eq 6.1: Points = Points_before + I × (W − We), We = 1/(10^{−dr/600}+1). [PAGE 195].

Good, I have plenty of verbatim quotes.

Now let me also derive the Brier score example and RPS numbers. Brier [PAGE 103-104]: BS = 0.205 (binary), BS(3) = 0.648. RPS = 0.158 [PAGE 105]. These are concrete verifiable numbers.

Let me write now. I'll aim for rigor and cite properly.

Let me write the THINK_TRACE with genuine multi-hop derivations:

Derivation 1: Variance decomposition under BP.
Under BP(λ1,λ2,λ3): Y1 = X1+X3, Y2 = X2+X3, Xi ~ indep Poisson(λi).
- E[Y1] = λ1+λ3, E[Y2] = λ2+λ3
- Var(Y1) = λ1+λ3, Var(Y2) = λ2+λ3
- Cov(Y1,Y2) = Var(X3) = λ3
- Total goals T = Y1+Y2: Var(T) = Var(Y1)+Var(Y2)+2Cov = λ1+λ2+4λ3. Wait: Var(Y1)+Var(Y2)+2Cov(Y1,Y2) = (λ1+λ3)+(λ2+λ3)+2λ3 = λ1+λ2+4λ3. Hmm, but also T = X1+X2+2X3, Var(T) = λ1+λ2+4λ3. Yes consistent. So over-dispersion in total is amplified by 4λ3. Actually the double Poisson would give Var(T)=λ1+λ2. So BP total variance exceeds by 4λ3. Multi-hop: positive correlation → over-dispersion in total goals.
- Goal difference Z = Y1-Y2 = X1-X2: Var(Z) = λ1+λ2 (independent of λ3!). E[Z] = λ1-λ2. So Z ~ Skellam(λ1,λ2) exactly. Multi-hop: the difference distribution is invariant to λ3; correlation only shows in the sum.

This is a beautiful multi-hop: same data, correlation manifests in T not Z. So a modeler who models Z (Skellam) is blind to λ3, and one who models marginals as double Poisson mis-attributes λ3 into inflated marginal means.

Derivation 2: draw probability.
P(draw) = P(Z=0) = e^{-(λ1+λ2)} I_0(2√(λ1λ2)) for Skellam.
Using series I_0(x) = Σ_k (x²/4)^k/(k!)². 
For λ1=λ2=λ: P(Z=0) = e^{-2λ} I_0(2λ). As λ→0, I_0(2λ)→1, P→1. As λ→∞, I_0(2λ) ~ e^{2λ}/(2√(πλ)), so P(Z=0) ~ 1/(2√(πλ)) → 0. This matches the book's Figure 2.5 [PAGE 78]: P(draw) ~ 80% at low λ, ~20% at λ=3. Let me verify at λ=3: P ≈ 1/(2√(3π)) = 1/(2·3.07) = 1/6.14 ≈ 0.163 ≈ 16%. Close to 20%. At λ=0.5: 1/(2√(0.5π)) = 1/(2·1.253) = 1/2.506 ≈ 0.40. Hmm the book says 80% at very low. At λ=0.1: 1/(2√(0.1π))=1/(2·0.56)=0.89. So ~80-90% at very low. Good, consistent with the asymptotic. Multi-hop verified.

Now the misspecification: if true BP, correct P(draw) uses PD(λ1,λ2). Double Poisson fit estimates marginals λ1+λ3, λ2+λ3 and if you naively compute draw prob from those inflated means you'd get e^{-(λ1+λ2+2λ3)}I_0(2√((λ1+λ3)(λ2+λ3))) < correct. So double Poisson underestimates draws. Hence diagonal inflation / BP corrects the excess-of-draws. This is the gray-zone the book flags [PAGE 78-79].

Derivation 3: AR(1) stationarity singularity.
att_{k,t} = γ_k + φ_k att_{k,t-1} + η, η~N(0,σ²). 
Unconditional mean = γ/(1-φ), variance = σ²/(1-φ²). As |φ|→1⁻, variance → ∞ (unit root, random walk recovered). The random-walk prior (Eq 4.24) is the φ=1 boundary — non-stationary, no unconditional distribution. So the model interpolates between stationary AR (φ<1) and RW (φ=1). Breakdown: at φ=1 the unconditional moments diverge; estimation must condition on initial state.

Good. Now gray-zone audit points:
- Sign of correlation unidentified in BP (only λ3≥0).
- Draw probability weakly identified (book: "the probability of a draw is not clearly identified" [PAGE 78]).
- Choice of ξ in Dixon-Coles exponential weight (profile over predictive accuracy) — no closed form.
- Hosmer-Lemeshow g sensitivity [PAGE 82].
- Lindley-Bartlett/Jeffreys paradox: Bayes factors sensitive to prior dispersion [PAGE 74].

Let me confirm [PAGE 78]: "the probability of a draw is not clearly identified." Yes: "So in practice the probability of a draw is not clearly identified."

And [PAGE 74]: "marginal likelihoods and the resulting Bayes factors are sensitive on the dispersion parameters of the priors f(βM|M). This problem is widely known as the Lindley–Bartlett or Jeffreys paradox". Yes.

Great. Now let me write. I'll keep it tight but hit all sections with real content. Let me write each section thoroughly.

I'll make sure the total is well over 1000 words. Let me write.

For units: 
- λ (rate) is dimensionless expected goals per match (goals·match⁻¹), or a Poisson rate. 
- LPS/lppd in nats (nats·observation⁻¹) if natural log. 
- WAIC/LOOIC/DIC in deviance units (nats, scaled ×(-2)). 
- Brier score dimensionless (probability²), range [0,2] or [0,1] halved. 
- RPS dimensionless, [0,1]. 
- κ dimensionless. 
- FIFA SUM: We dimensionless probability. 
- σ_a, σ_d: log-goals standard deviation (dimensionless, since log scale). 
- ξ: time⁻¹ (per match-day). 
- Weibull: λ rate per match (match⁻¹), c shape dimensionless, h(t) hazard in match⁻¹.

OK writing now.

Let me make the RLVR predictions crisp and falsifiable with a measurable.

I'll produce the final answer now. I'll include a very short intro line then the sections. Given the format demand, I'll lead directly with sections.

Let me write out the full thing.
</NATIVE_REASONING>

Below is the frontier analysis of Egidi, Karlis & Ntzoufras, *Predictive Modelling for Football Analytics* (CRC/Chapman-Hall, 2026), grounded strictly in the supplied pages, with formal operators, breakdown regimes, and page-anchored quotes. No market/betting-line content is included by construction; the analysis is confined to the statistical-mechanical and physical layers of the model stack.

<THINK_TRACE>
Multi-hop derivation 1 — Where correlation "lives." The bivariate Poisson is defined by the additive latent construction $Y_1=X_1+X_3$, $Y_2=X_2+X_3$ with $X_r\sim\text{Poisson}(\lambda_r)$ independent [PAGE 124, Eq. 4.15]. From this, $\operatorname{Cov}(Y_1,Y_2)=\operatorname{Var}(X_3)=\lambda_3\ge 0$ — the covariance equals the shared latent rate, so the model can only represent *non-negative* dependence. Two derived quantities expose the internal geometry. For total goals $T=Y_1+Y_2=X_1+X_2+2X_3$: $\operatorname{Var}(T)=\lambda_1+\lambda_2+4\lambda_3$. For the goal difference $Z=Y_1-Y_2=X_1-X_2$: $\operatorname{Var}(Z)=\lambda_1+\lambda_2$, and $Z\sim\text{Skellam}(\lambda_1,\lambda_2)$ *exactly, independent of* $\lambda_3$. The multi-hop consequence: correlation is invisible in the difference but amplified fourfold in the sum. A modeler working on $Z$ (Skellam) is structurally blind to $\lambda_3$; a modeler fitting independent Poissons to the marginals mis-attributes $\lambda_3$ into inflated means. This is precisely the book's warning that "even minor correlations can significantly impact predicted win probabilities" [PAGE 30, quoting Karlis & Ntzoufras (2003)].

Multi-hop derivation 2 — The excess-of-draws mechanism. Under $\text{Skellam}$, $P(Z{=}0)=e^{-(\lambda_1+\lambda_2)}I_0(2\sqrt{\lambda_1\lambda_2})$. For equal teams $\lambda_1=\lambda_2=\lambda$, the large-$\lambda$ asymptotics $I_0(2\lambda)\sim e^{2\lambda}/(2\sqrt{\pi\lambda})$ give $P(\text{draw})\sim 1/(2\sqrt{\pi\lambda})$: at $\lambda=0.1$ this is $\approx0.89$; at $\lambda=3$ it is $\approx0.16$. This reproduces the book's Figure 2.5 claim that "the probability of a draw is as high as 80% for teams with very low expected scoring ability and decreases around to 20% for teams with expected number of goals equal to three" [PAGE 79]. Chaining to derivation 1: if the true model is BP but one fits double Poisson, the marginal means are estimated as $(\lambda_1+\lambda_3,\lambda_2+\lambda_3)$, and the implied draw probability $e^{-(\lambda_1+\lambda_2+2\lambda_3)}I_0(2\sqrt{(\lambda_1+\lambda_3)(\lambda_2+\lambda_3)})$ is *strictly smaller* than the correct value. Hence double Poisson systematically under-produces draws — the exact defect that motivates diagonal inflation and the DIBP model.

Multi-hop derivation 3 — The stationarity singularity. The Koopman–Lit autoregressive ability $\text{att}_{k,t}=\gamma_k+\phi_k\,\text{att}_{k,t-1}+\eta_{k,t}$ [PAGE 131, Eq. 4.29] has unconditional moments $\mathbb{E}=\gamma_k/(1-\phi_k)$ and $\operatorname{Var}=\sigma_k^2/(1-\phi_k^2)$ [Eq. 4.31]. As $|\phi_k|\to1^-$ the variance diverges; at $\phi_k=1$ the process is the pure random walk $\text{att}_{k,t}\sim N(\text{att}_{k,t-1},\sigma_a^2)$ [Eq. 4.24], which possesses *no* unconditional distribution and must be conditioned on an initial state [Eq. 4.26]. So the dynamic-ability family interpolates across a genuine phase boundary between stationary mean-reversion and non-stationary diffusion.

Gray-zone audit. (i) Sign identification: BP admits only $\lambda_3\ge0$; the book documents negative correlation "in most years" for the Bundesliga and in mismatched internationals [PAGE 11], a regime BP cannot represent without a copula. (ii) Weak draw identifiability: "the probability of a draw is not clearly identified" [PAGE 78] because equal-strength teams pin $\mathbb{E}[Y_1]=\mathbb{E}[Y_2]$ but leave $P(\text{draw})$ under-determined. (iii) The Dixon–Coles time-decay $\xi$ has no closed form and is chosen by predictive-accuracy profiling [PAGE 129]. (iv) Bayes-factor model selection inherits the Lindley–Bartlett/Jeffreys sensitivity to prior dispersion [PAGE 74]. These are the load-bearing ambiguities.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All rates $\lambda$ carry units of expected goals per match (goals·match⁻¹); ability parameters $\text{att},\text{def}$ and $\mu,\text{home}$ live on the log-rate scale (dimensionless); information criteria are on the deviance scale (nats, multiplied by $-2$).

1. Double Poisson (vanilla) [PAGE 44, Eqs. 2.2–2.4]:
$$Y_{i\ell}\sim\text{Poisson}(\lambda_{i\ell}),\quad \log\lambda_{i1}=\mu+\text{home}+\text{att}_{h_i}+\text{def}_{a_i},\quad \log\lambda_{i2}=\mu+\text{att}_{a_i}+\text{def}_{h_i}.$$
Identifiability via sum-to-zero $\sum_{k=1}^K\text{att}_k=\sum_{k=1}^K\text{def}_k=0$ [PAGE 45]. Overall ability $\text{ability}_k=\text{att}_k-\text{def}_k$ [Eq. 2.4]. Breakdown: equi-dispersion $\operatorname{Var}(Y)=\mathbb{E}[Y]=\lambda$ is violated under over-dispersion — "the observed variance in goals scored in each match exceeds the expected variance under a Poisson assumption" [PAGE 27].

2. Bivariate Poisson [PAGE 124, Eq. 4.15]:
$$f(y_1,y_2)=e^{-(\lambda_1+\lambda_2+\lambda_3)}\frac{\lambda_1^{y_1}}{y_1!}\frac{\lambda_2^{y_2}}{y_2!}\sum_{k=0}^{\min(y_1,y_2)}\binom{y_1}{k}\binom{y_2}{k}k!\left(\frac{\lambda_3}{\lambda_1\lambda_2}\right)^k,$$
with $\operatorname{Cov}(Y_1,Y_2)=\lambda_3$. Singularity: $\lambda_3\to0$ collapses to the double Poisson; $\lambda_3<0$ is inadmissible, so negative dependence is unrepresentable. $\lambda_3$ "reflects game conditions, such as the speed of the game, the weather, the climate, the stadium" [PAGE 126].

3. Skellam / Poisson-difference [PAGE 163–164, Eqs. 5.2–5.3]:
$$f_Z(z)=e^{-(\lambda_1+\lambda_2)}\left(\frac{\lambda_1}{\lambda_2}\right)^{z/2} I_z\!\big(2\sqrt{\lambda_1\lambda_2}\big),\quad I_r(x)=\Big(\tfrac{x}{2}\Big)^r\sum_{k=0}^\infty\frac{(x^2/4)^k}{k!\,\Gamma(r+k+1)}.$$
Breakdown: parameter estimates are inflated because "we assume that the difference follows $Z=Y_1-Y_2\sim PD(\lambda_1+\lambda_3,\lambda_2+\lambda_3)$ instead of the correct $Z\sim PD(\lambda_1,\lambda_2)$" [PAGE 164].

4. Dixon–Coles low-score scaling [PAGE 181, Eqs. 5.12–5.13]:
$$\tau_{\lambda_1,\lambda_2}(y_1,y_2)=\begin{cases}1-\lambda_1\lambda_2\rho & y_1=y_2=0\\ 1+\lambda_1\rho & y_1=0,y_2=1\\ 1+\lambda_2\rho & y_1=1,y_2=0\\ 1-\rho & y_1=y_2=1\\ 1 & \text{otherwise}\end{cases}$$
Feasibility (non-negativity) breakdown: $\max(-1/\lambda_1,-1/\lambda_2)\le\rho\le\min(1/(\lambda_1\lambda_2),1)$ [PAGE 198]; outside this box the pmf goes negative.

5. Time-weighted (pseudo-)likelihood [PAGE 128–129, Eqs. 4.19–4.20]: $L=\prod_{i\in A_t}\{\tau\,\lambda_{i1}^{y_{i1}}e^{-\lambda_{i1}}\lambda_{i2}^{y_{i2}}e^{-\lambda_{i2}}\}^{\phi(t-t_i)}$, $\phi(t)=e^{-\xi t}$, $\xi>0$ (units match⁻¹). Singularity: $\xi\to0$ recovers the static model; large $\xi$ discards history.

6. Dynamic abilities. Random-walk prior $\text{att}_{k,t}\sim N(\text{att}_{k,t-1},\sigma_a^2)$, $\text{def}_{k,t}\sim N(\text{def}_{k,t-1},\sigma_d^2)$ [PAGE 130, Eq. 4.24]. Psychological coupling $\log\lambda_{i1}=\mu_h+\text{home}+\text{att}_{h_i,t}+\text{def}_{a_i,t}-\zeta\Delta_{12,t}$, with $\Delta_{12,t}=\tfrac12(\text{att}_{h_i,t}-\text{def}_{h_i,t}-\text{att}_{a_i,t}+\text{def}_{a_i,t})$ [Eq. 4.23]. AR(1) stationarity requires $|\phi_k|<1$; $\operatorname{Var}=\sigma_k^2/(1-\phi_k^2)\to\infty$ as $|\phi_k|\to1$ [Eq. 4.31].

7. Weibull count process [PAGE 182, Eq. 5.16; hazard]: $h(t)=\lambda c\,t^{c-1}$; $c=1$ recovers the homogeneous Poisson (equi-dispersion), $c<1$ over-dispersed, $c>1$ under-dispersed — the only listed model that natively spans both dispersion regimes.

8. FIFA SUM ranking [PAGE 195, Eq. 6.1]: $\text{Points}=\text{Points}_{\text{before}}+I\,(W-W_e)$, $W_e=1/(10^{-dr/600}+1)$; $W_e\in(0,1)$ dimensionless, $W_e=0.5$ at $dr=0$, $W_e\to\{0,1\}$ as $dr\to\pm\infty$.

9. Proper scoring rules (dimensionless). Brier $BS=\frac1n\sum_i\sum_{j=1}^J(p_{ij}-a_{ij})^2$ [PAGE 103, Eq. 3.9]; ranked probability $RPS_i=\frac{1}{J-1}\sum_{j=1}^J\big(\sum_{l\le j}p_l-\sum_{l\le j}a_l\big)^2\in[0,1]$ [Eq. 3.12]. Log predictive score $\text{LPS}=-\log f(y_V\mid\theta_T)$ in nats [PAGE 76]. WAIC $=-2\,\text{lppd}+2\tilde d$ and LOOIC $=-2\,\text{lppd}_{\text{loo-cv}}$ [Eqs. 2.16, 2.18].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Scientific lineage (each node solves the prior node's residual defect):
- Moroney (1956) posits a single homogeneous Poisson for goals — an illustration, "rather than a deep data-based study" [PAGE 21].
- Reep & Benjamin (1968) introduce the negative binomial to admit heterogeneity beyond chance [PAGE 21].
- Maher (1982) supplies the attack/defence log-linear decomposition; Lee (1997) and Karlis–Ntzoufras (2000a) operationalize it; the constraint-based reparameterization $\lambda_{i1}=\delta\gamma^{\alpha_{h_i}}\beta_{a_i}$ [PAGE 120, Eq. 4.3] dates to here.
- Bradley–Terry (1952) → Rao–Kupper (1970) → Davidson (1970) → Davidson–Beaver (1977) form the paired-comparison / ordinal-logit branch [PAGE 23–25], later fused with Elo ratings as covariates (Hvattum–Arntzen 2010) [PAGE 26].
- Dixon–Coles (1997) patch the low-score dependence and add exponential time decay; Karlis–Ntzoufras (2003, 2009) generalize to the diagonal-inflated bivariate Poisson and the Skellam difference; Rue–Salvesen (2000) and Owen (2011) make abilities dynamic; Koopman–Lit (2015, 2019) cast dynamics as AR(1) under MLE; Egidi et al. (2018) use Gaussian-process abilities; Boshnakov et al. (2017) and McHale–Scarf (2011) reach for Weibull-count and Frank-copula dependence.

Multi-week traps (temporal failure modes the genealogy repeatedly springs):
1. Non-separable train/test in time. "future data cannot be used to train a model for prediction in the past" [PAGE 92]; random $k$-fold splits are invalid for sequential fixtures, so the book mandates mid-season, one-week-ahead, and next-round splits [PAGE 93–94].
2. The "winter champion" heuristic — treating the mid-season leader as champion — is a base-rate trap whose validity is "extremely strong in some countries" but statistically unfounded [PAGE 94].
3. Dynamic-ability churn: the same club's abilities diffuse across weeks (transfers, injuries, dismissals; [PAGE 127]), so a static estimate lag-biases; yet over-parameterized dynamics can *underperform* — for Serie A 2009/2010 the static vanilla DP wins LOOIC 2138.7 versus dynamic DP 2143.2 and dynamic BP 2145.8 [PAGE 143, Table 4.3]. The trap is bidirectional: ignore dynamics and you lag; over-fit them and you inflate $\tilde d$.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis-habit regression vs counter-trap vs clock. Football dependence is partly a recursive-belief object: each side conditions on its read of the other, and the reduced-form imprint of that recursion is the correlation term $\lambda_3$ (BP) or $\zeta$ (dynamic psychology).

Crisis-habit regression. Under scoreboard stress a team reverts to trained habit; the model encodes this as the psychological pull $-\zeta\Delta_{12,t}$ on the leader and $+\zeta\Delta_{12,t}$ on the trailer [PAGE 130, Eq. 4.23], with $\zeta>0$ expected within a single league and $\zeta<0$ admitted only under extreme mismatch ("inferiority complex") [PAGE 130]. The Titman et al. (2015) eight-dimensional counting-process reading finds yellow cards immaterial to scoring rate while red cards materially shift it [PAGE 17], consistent with a habit-disruption rather than a smooth-incentive response.

Counter-trap. The naive crisis model predicts the numerically-and-mentally dominant side always benefits from an opponent's red card. The counter-trap, empirically documented, is that "a late red card for the away team can even be advantageous," lending partial support to the "ten do it better" myth [PAGE 20]: the trailing side's forced forward commitment can raise its own scoring intensity even at a numerical deficit. A recursive-belief model must therefore allow the sign of the red-card effect to flip with residual time and score state.

Clock. Time-within-match is the third axis. The substitution literature is a clean falsification arena: Myers (2012) prescribes first/second/third substitutions "by the 58th minute, the second by the 73rd minute, and the third by the 79th minute," whereas Silva & Swartz (2016), via Bayesian logistic regression, "did not identify any specific time point where substitutions offered a clear advantage" [PAGE 22]. The Weibull-count hazard $h(t)=\lambda c t^{c-1}$ [PAGE 182] is the principled clock object: $c<1$ (front-loaded hazard) would validate the "score early, sit deep" habit; $c>1$ (back-loaded hazard) would validate the "teams chase late" narrative. Estimating $c$ per league adjudicates the crisis-clock rather than assuming it.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Claim: a purely statistical ability estimate $(\text{att}_k,\text{def}_k)$ is admissible for prediction *only* conditional on the physical covariate layer; an unmodeled physical shock can veto the sign of the predicted home advantage.

Proof sketch. The vanilla log-rate $\log\lambda_{i1}=\mu+\text{home}+\text{att}_{h_i}+\text{def}_{a_i}$ [PAGE 44] absorbs every unmodeled match-condition effect into $\text{home}$ and the abilities. If a physical factor $W_i$ (altitude, surface, weather) is correlated with venue assignment and omitted, the estimated $\widehat{\text{home}}$ is biased by $\mathbb{E}[\beta_W W_i\mid \text{home}]$; the omission is a classic confounders-in-the-error problem, so the marginal ability ranking is not invariant to the physical layer. Three documented veto channels:

1. Altitude. FIFA "in 2007, banned World Cup qualifiers from being played in stadiums exceeding 2500 meters above sea level," raised the limit to 3000 m, then "lifted [it] in May 2008" [PAGE 19]. Critically, the empirical verdict is unresolved: Chumacero (2009) "using a bivariate Poisson model … found no significant effect," whereas Casas & Fawaz (2016) "reported evidence of an altitude effect for some South American national teams" [PAGE 19]. The same estimator under two data-generating regimes returns opposite signs — a demonstrated veto of any altitude-blind home estimate for Andean hosts (Bolivia, Ecuador, Colombia).

2. Surface/biomechanics. Artificial turf allegedly makes "the ball … travel faster and bounce higher," alters fatigue, and shifts injury risk, yet Barnett & Hilditch (1993) and Trombley (2016) "did not find significant evidence" [PAGE 19] — a case where the hypothesized physical veto is *not* empirically licensed, so the modeler must not add it reflexively.

3. Environmental coupling into the joint law. The BP covariance explicitly "reflects game conditions, such as the speed of the game, the weather, the climate, the stadium" [PAGE 126]; hence weather does not merely shift $\lambda_1,\lambda_2$ but perturbs $\lambda_3$, i.e., the dependence structure itself. A model that fixes $\lambda_3$ constant across venues is therefore misspecified whenever weather co-varies with venue.

Corollary (biomechanical floor). The sport is intrinsically "a low-score sport … around two or three goals per match, while other popular sports like basketball have scores up to 200" [PAGE 18]. This discreteness floor is itself a physical constraint: it forces the count/Weibull/copula apparatus and caps achievable discrimination (empirically, Cohen's $\kappa$ and pseudo-$R^2$ near the naive classifier's baseline). The veto adjudication: physical-layer covariates are admissible-necessary, but each must clear an empirical significance test before inclusion, or the model inherits a phantom effect.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three falsifiable veto scenarios, each with a measurable that confirms/refutes, and a point prediction anchored to the source numbers.

Veto 1 — Over-dispersion veto of the double Poisson. Trigger: a competition whose per-team $(\text{mean},\text{variance})$ points lie above the Poisson equidispersion band [PAGE 28, Fig. 1.1]. Measurable: LOOIC comparison of double Poisson vs negative-binomial/generalized-Poisson/Weibull-count. Verifiable anchor: Serie A 2009/2010 is *under*-dispersed — home "1.54, with a variance of 1.34" and away "1.07 with a standard deviation of 0.99" [PAGE 158] — so DP is not vetoed and indeed wins (LOOIC 2138.7, [PAGE 143]). Prediction: in over-dispersed international data (the book notes internationals "exhibit higher level of overdispersion," [PAGE 10]), the negative binomial or Weibull-count ($c<1$) will beat double Poisson by a LOOIC margin $>5$ nats. Refutation: if double Poisson remains within $2$ nats of the best over-dispersion model, the veto fails.

Veto 2 — Correlation-sign veto of the bivariate Poisson. Trigger: a league/match-type with genuinely negative goal dependence (Bundesliga "negative correlations in most years," [PAGE 11]). Measurable: sign and magnitude of $\hat\lambda_3=\exp(\hat\rho)$ and out-of-sample RPS of BP vs a Frank-copula model with $\theta<0$ [PAGE 186]. Verifiable anchor: Serie A estimates $\hat\rho=-2.36\Rightarrow\hat\lambda_3=e^{-2.36}\approx0.094>0$ [PAGE 135], i.e., weak positive dependence — BP admissible, and diagonal inflation is *not* warranted (DIBP LOOIC $\approx2541.8$, far above plain models, [PAGE 162]). Prediction: for Bundesliga seasons the copula selects $\hat\theta<0$ and lowers RPS by $\ge0.005$ versus BP; for Serie A it will not. Refutation: $\hat\theta\ge0$ persistently in the Bundesliga would falsify the sign-veto.

Veto 3 — Non-stationarity veto (dynamic vs static) under roster churn. Trigger: populations with high roster volatility where abilities are non-stationary (national teams; "a national roster in 2018 could be dramatically different from a roster … in 2020," [PAGE 192]). Measurable: out-of-sample one-week-ahead LPS/RPS of static vs dynamic (weekly) abilities, plus the AR diagnostics $\hat\phi_k$ and Rhat of $\sigma_{\text{att}},\sigma_{\text{def}}$. Verifiable anchor: for stable Serie A 2009/2010 the static model wins and the dynamic fits fail to converge cleanly — $\widehat{R}$ up to $1.42$ (DP) and $2.27$ (student-t) on the evolution SDs [PAGE 141, 172]. Prediction: at a World/Euro Cup, dynamic abilities will beat static by $\ge0.01$ in held-out RPS *and* yield $\hat\phi_k$ bounded away from 1; but if the dynamic $\sigma$ posteriors again show $\widehat{R}>1.1$, the apparent dynamic gain is a non-convergence artifact and the veto should be scored inconclusive, not confirmed. Refutation: static $\le$ dynamic RPS at a high-churn tournament would falsify the non-stationarity veto.

Cross-veto invariant: in every scenario the deciding statistic is a proper scoring rule (LOOIC/RPS/LPS) on a time-ordered holdout, never an in-sample fit — because "Goodness-of-fit measures can often overestimate a model's predictive ability" [PAGE 99].
</RLVR_COUNTERFACTUAL_VETOES>