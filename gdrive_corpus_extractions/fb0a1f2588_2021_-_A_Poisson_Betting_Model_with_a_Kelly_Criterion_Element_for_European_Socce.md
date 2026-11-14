---
source: "2021 - A Poisson Betting Model with a Kelly Criterion Element for European Soccer - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5235
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper provided in the source text. They've given me the full text of the paper "A Poisson Betting Model with a Kelly Criterion Element for European Soccer" with 10 pages mentioned but the text shows page markers up to 16 in the PDF rendering (the source text has page breaks at 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 - wait, let me look more carefully. The source text shows page markers like "1", "2", "3" etc. interspersed. Let me count the explicit page markers:

- Page 1: after Introduction section
- Page 2: after Crystal Palace example in 2.1
- Page 3: after Crystal Palace xG example in 2.2
- Page 4: after Poisson formula (8)
- Page 5: after Score Line Matrix discussion
- Page 6: after total probability distributions
- Page 7: after calibration graphs
- Page 8: after Kelly Criterion optimization image
- Page 9: after graph about objective cell
- Page 10: after KCO density plot introduction? Wait, let me look again.

Actually the text has explicit page number markers:
- "1" after section 2 intro
- "2" after Crystal Palace goals example
- "3" after Crystal Palace xG example
- "4" after Poisson formula (8)
- "5" after score line matrix
- "6" after total probability distribution discussion
- "7" after calibration results
- "8" after Kelly Criterion optimization image description
- "9" after graph about objective cell
- "10" after KCO density plot intro
- "11" after 2019 La Liga season discussion
- "12" after Bundesliga 2019 26 bets discussion
- "13" after results table
- "14" after Future Research 7.3 Premier League discussion
- "15" after Conclusion
- "16" after References

But the user said PAGES: 10. Hmm. The user might be referring to the PDF having 10 pages but the text extraction shows page markers differently. Or maybe they mean the document has 10 pages of content? Actually looking at the structure, the explicit page numbers in the text go up to 16. But the user explicitly stated PAGES: 10. I should cite page markers from the provided source text. Since the source text contains explicit page number markers (1 through 16), I can cite those. However, the user said "PAGES: 10" which might be a constraint or instruction about how many pages to consider? Or maybe they mean the source document is 10 pages but the OCR/extraction has page markers up to 16 because it's a PDF with page numbers? Wait, looking again: the source text has HTML comments at the top saying it's a PDF. The page numbers visible in the text are likely the actual page numbers of the PDF. The user said PAGES: 10, but the text clearly has markers up to 16. I should use the exact [PAGE N] markers from the source text as they appear. I will cite the page markers that are visible in the text.

Wait, I need to be careful. The user said "PAGES: 10" - this might mean they want me to treat it as 10 pages, but the source text has markers 1-16. I think the safest approach is to cite the exact page markers visible in the source text. Since the text has explicit numbers like "1", "2", etc. that appear to be page breaks, I'll cite those as [PAGE N].

Now, let me plan the response according to the strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
   - The paper talks about betting odds frequently. I must NOT mention spreads, totals, moneylines, or odds as betting lines. Wait, invariant says "Never mention spreads, totals, moneylines, or odds." Does "odds" refer to betting odds specifically? Yes, betting lines. But the paper uses "odds" in the context of betting odds. I need to avoid mentioning betting odds/spreads/totals/moneylines. I can discuss probabilities, but not betting odds as lines. Actually, the paper discusses "betting odds" explicitly. I should avoid mentioning them or refer to them only as implied probabilities without calling them odds? The invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This is strict. So I cannot use the word "odds" in the betting sense. But the paper uses it. I can discuss the model's probabilities and expected values without referencing market odds. I'll be careful to avoid the word "odds" entirely when referring to betting markets. I can mention "implied probabilities" or "market prices" but better to just avoid it. Actually, I can talk about the Poisson probabilities, Kelly criterion, bankroll, etc., but not "odds".

2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
   - I need to use formal LaTeX. I should reproduce the equations from the paper properly in LaTeX.
   - Cite exact page markers.
   - Verbatim quotes where appropriate.
   - State assumptions and breakdown regimes.

3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>

Total must be >= 1000 words across these sections.

Let me draft each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words).
- Discuss the derivation from lambda to Poisson to score matrix to probabilities to Brier score to Kelly optimization.
- Gray zones: data leakage prevention (rolling window), the assumption of independence between home and away goals (product of marginals), the capped score line 0-5 to 5-5 truncation, the Kelly objective using log(bankroll) with three outcomes, the KCO value baseline of 2 (weird because log(100) is not 2, the paper says "objective cell when placing no bet is 2 since there is a 100% chance of ending with $100 and log(2) = 100" - this is mathematically nonsensical as written in the paper; log(100) ≈ 4.605, not 2. This is a gray zone/audit point). Also the table formatting issues in the paper (merged cells). The claim of 119.48% profit vs table values. The Brier score calibration best at game week 13 but Random Forest used. The fact that bankroll is reset to $100 each game (independent bets) which violates Kelly's sequential bankroll compounding assumption. The hedging behavior (betting on multiple outcomes). The "KCO value over 2 having confidence" - baseline confusion.
- Multi-hop: goals/xG -> strengths -> lambda -> Poisson PMF -> joint score matrix -> marginal event probabilities -> Brier calibration -> model selection (RF after GW13) -> Kelly objective maximization -> KCO filtering -> profit percentage.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Reproduce equations (3), (4), (8), (14) in LaTeX.
- Poisson PMF: P(X=x) = (λ^x e^{-λ}) / x!
- Home goals λ_H = HomeAttackingStrength × AwayDefendingStrength × AverageLeagueHomeGoals
- Away goals λ_A = AwayAttackingStrength × HomeDefendingStrength × AverageLeagueAwayGoals
- Score line probability: P(HomeGoals=h, AwayGoals=a) = Pois(h; λ_H) × Pois(a; λ_A)
- Event probabilities: sum over matrices.
- Brier Score: BS = (1/N) Σ (f_i - o_i)^2 where f_i is predicted probability, o_i is indicator (0/1).
- Kelly objective: KCO = p_H ln(W_H) + p_A ln(W_A) + p_D ln(W_D). Ending bankrolls depend on bets.
- Units: λ in goals/match (dimensionless rate), probabilities dimensionless [0,1], bankroll in currency (USD), Brier score in squared probability units.
- Breakdown regimes: independence assumption breaks if game state affects scoring (red cards, etc.); truncated at 5-5 loses tail probability; log utility undefined for bankroll ≤ 0; Kelly fraction can exceed 1 or be negative requiring constraints; KCO baseline claim is mathematically inconsistent (paper says log(2)=100 which is false).
- Cite pages: [PAGE 3] for equations (3)-(4), [PAGE 4] for eq (8), [PAGE 5] for score line matrix, [PAGE 7] for Brier, [PAGE 8] for eq (14), [PAGE 9] for graph discussion, [PAGE 10] for KCO density.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Poisson distribution (Siméon Denis Poisson, 1837), applied to football by Maher (1982), Dixon & Coles (1997) time-weighted bivariate Poisson, expected goals (xG) modernOpta/Smacroft, Kelly Criterion (John Kelly Jr., 1956), horse racing/gambling, Thorp (1962) blackjack, Markowitz portfolio logic, Haghani & Dewey (2016) biased coin experiment cited in paper.
- Multi-week traps: rolling window data leakage (using only data through week 12 to predict week 13), but retraining weekly creates look-ahead if not careful; season progression means early-season λ is noisy (small sample), late-season λ may reflect squad changes/injuries not modeled; game week 13 calibration cutoff is arbitrary; the paper's claim of improvement as season progresses ignores fixture difficulty variance.
- Multi-week trap: using cumulative season stats means early games have few observations, causing unstable strength estimates; also relegation battles / European qualification incentives change team effort late season (non-stationarity), violating Poisson λ stationarity.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: When a bettor faces a losing streak, they may abandon KCO filtering and bet on highest-probability outcomes (the naive baseline the paper critiques), regressing to the 26.22% profit percentage strategy.
- Counter-trap: The market adapts; if many bettors use Poisson+Kelly, odds adjust and inefficiencies disappear. The paper assumes market inefficiency is static (oddsmakers effective but not adaptive enough).
- Clock: The rolling game-week clock means model value decays after GW13 unless constantly recalibrated; the "optimal time to begin" is context-dependent. Also bankroll reset to $100 per game ignores compounding clock (time value of money). The psychological clock of a bettor seeing KCO peak near 2 may lead to overbetting on values just above 2 due to weak correlation.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Soccer is low-scoring, Poisson assumes independent rare events; goals are not independent (scoring changes game state, tactics shift). Red cards (physical event) violate Poisson stationarity.
- Biomechanical: Player fatigue, injury, lineup changes (paper's own limitation in section 7.2) mean attacking strength λ is not constant across a match or season; xG captures shot quality but not player availability.
- Weather: Rain/wind affect passing and shot xG; not modeled in any of the four λ generators.
- Veto: Any match with extreme weather, red card before kickoff (suspension), or key player absence invalidates the Poisson λ assumption; model should be vetoed. The paper lacks these features (Future Research 7.2 acknowledges lineup limitation).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: If a key striker (top 10% xG contributor) is absent from home team lineup, the model's λ_H based on season average overestimates scoring. Veto: match excluded. Prediction: home win probability drops by ≥0.10, KCO value falls below 2.0, bet suppressed.
- Scenario 2: If matchweek < 5 (paper starts predictions at game week 5), rolling sample too small for strength estimates. Veto: all matches before GW5 excluded. Prediction: Brier score degradation >15% relative to GW13+ calibration, profit percentage negative.
- Scenario 3: If zero-inflated regime (e.g., defensive derby with both teams averaging <0.8 xG), standard Poisson overestimates 0-0 and underestimates draw; Zero-Inflated Poisson (future research 7.1) required. Veto: matches where λ_H × λ_A < 0.64. Prediction: draw probability understated by ≥0.05, KCO filter >2.1 admits false positives.
- Each must have verifiable prediction.

Word count: Need >=1000 words total. Think trace alone needs >=400. I'll aim for ~1800-2200 total words.

Important: I must not mention betting odds/spreads/totals/moneylines. The paper itself mentions odds extensively. I will paraphrase around this. I can say "market prices" or "bookmaker implied probabilities" but better to avoid "odds" entirely. However, the source text uses "odds". I can quote it? The invariant says never mention odds. I think quoting the source might violate if I reproduce the word "odds". I'll avoid quoting the word "odds" and instead refer to "market-implied probabilities" or just "prices." I need to be extremely careful.

Also "Kelly Criterion" is fine. "Bankroll" is fine.

Let me write the response.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I'll include LaTeX with proper formatting.

Let me draft content now, watching word counts.

THINK_TRACE target: 450-600 words.

Key points:
- Derivation: four lambda models -> Poisson PMF -> independent product -> score line matrix 0-5 x 0-5 -> marginal event probabilities -> Brier score calibration -> RF best after GW13 -> Kelly objective maximization over three outcomes -> KCO filter -> profit percentage.
- Gray zones: (1) Paper claims no-bet objective is 2 because log(2)=100 (page 9? actually page 9 text: "objective cell when placing no bet is 2 since there is a 100% chance of ending with $100 and log(2) = 100"). This is mathematically false: ln(100)≈4.605, log10(100)=2. They appear to conflate log base 10 with natural log or misuse the objective. (2) Independence assumption: P(score line) = P(home) × P(away) assumes conditional independence of goal counts given lambdas, violated by game-state effects (red card, score effects). (3) Truncation at 5-5 discards tail mass; they claim most sums >0.9 but not exactly 1, so probabilities are renormalized implicitly or not. (4) Bankroll reset to $100 per game breaks Kelly's sequential compounding and makes each bet isolated, destroying the long-run growth rationale. (5) Hedging on multiple outcomes in same match is unusual for Kelly and dilutes edge. (6) Data leakage avoided via rolling window (page 2), but small early-season samples create unstable strengths.
- Multi-hop chain detail.

SOURCE_OPERATORS_AND_EQUATIONS: Formal equations.

RETROCAUSAL_GENEALOGY: Poisson (1837), Maher 1982, Dixon-Coles 1997, xG, Kelly 1956, Thorp, Haghani & Dewey 2016. Multi-week traps: rolling window start at GW5, early season noise, late season non-stationarity (relegation/EU spots), GW13 cutoff arbitrariness.

RECURSIVE_THEORY_OF_MIND: Bettor psychology under drawdown, market adaptation counter-trap, clock effects (recalibration, compounding ignored).

CROSS_LAYER_VETO_ADJUDICATION: Physical (independence, low score), Biomechanical (injuries, lineup - paper limitation 7.2), Weather (not modeled), Veto conditions.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with verifiable predictions.

I must cite page markers. The source text page markers visible are 1-16. I'll cite them as [PAGE 3], etc.

Let's start writing. I need to ensure no mention of "odds" as betting lines. I'll use "market-implied probabilities" where needed, but the paper's Kelly inputs include "odds". I'll say "the model inputs market prices" without using the forbidden word. Actually I can say "the optimization inputs include the market-implied win/draw/loss probabilities and the corresponding returns." Avoid "odds".

Also avoid "moneyline", "spread", "total".

Let's write.

Word count check: I'll write generously.

One more thing: The user said "PAGES: 10". I will treat the provided text as having page markers 1-16 but perhaps I should only cite up to page 10? The text clearly shows page markers beyond 10. I'll cite exact markers that appear. The user might have meant the PDF is 10 pages but the extraction has more? Actually looking at the text, page marker "10" appears before section 6.1, then "11", "12", "13", "14", "15", "16". So it's a 16-page document. I'll cite the exact markers present.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's core derivation proceeds through four chained stages, each introducing assumptions that must be audited. Stage one generates four candidate λ values per team per match: (i) raw goals, (ii) expected goals (xG), (iii) multiple linear regression on seven match metrics, and (iv) random forest regression on the same seven metrics [PAGE 2]. Each λ is decomposed into home/away attacking and defending strength, multiplied by opponent strength and league average home/away goals, producing equations (3) and (4) on [PAGE 3]. A rolling-window protocol is enforced to prevent data leakage: predictions for game week 13 use only data through week 12, and strengths update as the season progresses [PAGE 2]. The gray zone here is sample stability: early-season λ estimates rest on few observations, so attacking/defending strengths are noisy before game week 5, which is precisely where the authors begin evaluation [PAGE 6].

Stage two converts λ pairs into match outcome probabilities. The authors assume conditional independence of home and away goal counts given their respective λ values, so the joint probability of a score line factors as P(home goals = h) × P(away goals = a) [PAGE 5]. They truncate the score-line matrix at 5–5 and claim most games have total probability mass above 0.9, approaching 0.99 later in the season [PAGE 6]. This truncation discards tail probability (6–6 and higher), violating exact normalization unless an implicit renormalization occurs, which the paper does not state. The independence assumption itself is biomechanically fragile: a goal changes tactical state, and events such as red cards induce score dependence that a product of marginal Poissons cannot capture.

Stage three calibrates the four λ generators with a Brier score, defined as the mean squared error between predicted probability and the binary outcome indicator [PAGE 7]. The authors select the random forest model after game week 13 as optimal because its calibration curve lies closest to the perfect-calibration dashed red line for both home and away wins [PAGE 7]. The choice of week 13 is an empirical cutoff with no theoretical justification; it privileges mid-season sample size over early-season opportunity and ignores non-stationarity from relegation battles, European qualification incentives, and managerial changes late in the campaign.

Stage four applies a three-outcome Kelly optimization. Rather than the two-outcome simplified formula, the authors maximize the expected logarithm of ending bankroll across home win, away win, and draw, producing the KCO objective in equation (14) on [PAGE 8]: KCO = p_H·ln(W_H) + p_A·ln(W_A) + p_D·ln(W_D), where W_* are ending bankrolls contingent on the result. The authors then report a baseline anomaly on [PAGE 9]: they claim that with no bet placed on a $100 bankroll, the objective cell equals 2 because “log(2) = 100.” This is mathematically incoherent—natural log of 100 is approximately 4.605, and base-10 log of 100 is 2, but neither equals “log(2).” The KCO value of 2 is therefore not a principled no-bet baseline; it appears to be a unit or scaling artifact. The gray zone deepens because the bankroll is reset to $100 for every match, destroying the sequential compounding that justifies Kelly growth-optimal betting in the first place. Hedging across multiple outcomes in the same match further dilutes the single-edge logic.

The profit claims rest on KCO filtering: bets are stratified by KCO > 2, > 2.05, and > 2.1, with profit percentage rising as the filter tightens but bet count collapsing [PAGE 11–12]. The paper reports 119.48% aggregate profit across 2018–2019 seasons and a peak of 226.68% in Bundesliga 2019 [PAGE 1], yet the table on [PAGE 13] shows internal inconsistencies (e.g., Serie A 2019 amount profited under KCO > 2.1 exceeds amount risked only marginally, while Premier League 2019 KCO > 2.1 profits are just $176.17 on $897.53 risked). A naive “bet the highest probability outcome” baseline yields $62,340 profit on $237,800 risked, or 26.22% [PAGE 13], which the authors dismiss despite its larger absolute profit because they normalize by per-game bankroll rather than total capital at risk. This normalization choice is itself a modeling assumption that favors high-turnover, low-conviction betting.

Overall, the chain is: rolling-window λ estimation → independent Poisson factorization → 0–5 score truncation → Brier model selection → log-bankroll optimization over three outcomes → KCO-based bet filtering. Each link carries a breakdown regime: small-sample instability early in the season, score dependence after in-game events, tail truncation above 5–5, arbitrary calibration cutoff at week 13, logarithmic domain collapse if ending bankroll reaches zero, and market efficiency erosion if the inefficiency is arbitraged away. The model also omits lineup injuries, weather, and zero-inflation, which the authors themselves flag as future work in sections 7.1–7.3 [PAGE 14–15].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The formal operators and equations from the source are as follows.

Poisson probability mass function for goals x in a match interval [PAGE 4, equation (8)]:

\[
P(X=x;\lambda) = \frac{\lambda^x e^{-\lambda}}{x!}, \qquad x \in \{0,1,2,\dots\}, \quad \lambda > 0
\]

Units: λ is a rate in goals per match (dimensionless count intensity); x is a dimensionless count; probability is dimensionless on [0,1].

Home and away λ generators from goals strengths [PAGE 3, equations (3)–(4)]:

\[
\lambda_H = S^{\text{att}}_{H} \times S^{\text{def}}_{A} \times \overline{G}^{\text{league}}_{H}
\]
\[
\lambda_A = S^{\text{att}}_{A} \times S^{\text{def}}_{H} \times \overline{G}^{\text{league}}_{A}
\]

where \(S^{\text{att}}_{H}\) is home attacking strength, \(S^{\text{def}}_{A}\) is away defending strength, and \(\overline{G}^{\text{league}}_{H}\) is average league home goals. The xG variant substitutes expected goals for observed goals on [PAGE 3]. The linear regression and random forest variants use seven covariates: goals, shots, shots on target, fouls, corners, yellow cards, red cards [PAGE 3–4].

Score-line joint probability under the conditional-independence assumption [PAGE 5]:

\[
P(H=h, A=a \mid \lambda_H,\lambda_A) = P(X=h;\lambda_H)\,P(Y=a;\lambda_A)
\]

Event probabilities are marginal sums over the 0–5 × 0–5 score matrix:

\[
P(\text{Home Win}) = \sum_{h>a} P(H=h,A=a), \quad
P(\text{Away Win}) = \sum_{h<a} P(H=h,A=a), \quad
P(\text{Draw}) = \sum_{h=a} P(H=h,A=a)
\]

Brier score for probabilistic calibration over N matches [PAGE 7]:

\[
\mathrm{BS} = \frac{1}{N}\sum_{i=1}^{N} \left( f_i - o_i \right)^2
\]

where \(f_i\) is the predicted probability of the realized event and \(o_i \in \{0,1\}\) is the outcome indicator. Units: squared probability, dimensionless. Lower is better; perfect calibration has BS = 0 for deterministic outcomes but the proper scoring rule is minimized when predicted probabilities equal long-run frequencies.

Three-outcome Kelly objective (KCO value) [PAGE 8, equation (14)]:

\[
\mathrm{KCO} = p_H \ln(W_H) + p_A \ln(W_A) + p_D \ln(W_D)
\]

where \(p_H,p_A,p_D\) are model probabilities for home win, away win, draw, and \(W_H,W_A,W_D\) are ending bankrolls under each result. Units: log-currency; the argument of the logarithm must be strictly positive, so the breakdown regime is \(W_* \le 0\) (bankroll ruin), where \(\ln(W_*)\) is undefined. A flat (no-bet) reference would be \(W_H=W_A=W_D=B_0\), yielding \(\mathrm{KCO}=\ln(B_0)\), not the paper’s asserted value of 2 for \(B_0=100\) [PAGE 9]. Because \(\ln(100)\approx 4.605\), the paper’s baseline claim is off by more than a factor of two and appears to conflate base-10 and natural logarithms or an unstated scaling constant.

Assumptions and exact breakdown regimes:
1. Conditional independence of home/away goal counts; breaks when in-game events (red cards, penalties, score effects) couple the two scoring processes.
2. Stationary team strength over the rolling estimation window; breaks across injuries, suspensions, and fixture congestion.
3. Truncation at 5–5 goals per team; discards tail mass and means reported probabilities need not sum to exactly 1 unless renormalized, which is not specified [PAGE 6].
4. Logarithmic utility domain \(W_*>0\); Kelly stakes that imply possible bankruptcy are outside the model’s domain.
5. Per-game $100 bankroll reset [PAGE 11]; breaks sequential compounding and invalidates long-run growth-rate interpretation of Kelly.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of this paper reaches back to the Poisson distribution itself, formalized by Siméon Denis Poisson in 1837 for rare-event counts, and its first major football application by Maher (1982), who modeled home and away goals as independent Poissons. The paper’s strength-adjustment structure echoes Dixon and Coles (1997), who introduced time-dependent weights to attenuate the influence of older matches and a bivariate adjustment for low-score dependence—features this paper omits. The substitution of expected goals (xG) for raw goals draws on the modern Opta/StatsBomb lineage of shot-quality modeling, where xG represents the probability-weighted sum of shot locations and contexts. The Kelly Criterion component descends from John Larry Kelly Jr. (1956), who derived logarithmic growth-optimal betting for horse racing and information channels, later popularized in gambling by Thorp (1962) for blackjack and in portfolio theory by MacLean, Thorp, and Ziemba. The paper explicitly cites Haghani and Dewey (2016) on biased-coin betting behavior to justify the log-maximization graph on [PAGE 9], linking it to experimental decision-making under uncertainty.

Retrocausal traps emerge when projecting this model forward across weeks. The rolling-window protocol begins predictions at game week 5 [PAGE 6], but early-season λ estimates rest on three or four matches, so attacking and defending strengths have high variance; a team’s true quality is not yet separated from schedule difficulty. By game week 13, where the authors claim calibration peaks [PAGE 7], the sample is larger, but the season’s causal structure has already shifted: relegation-threatened teams alter tactical risk, Champions League squads rotate players for domestic matches, and managerial dismissals reset team strength mid-stream. These are retrocausal in the sense that the outcome distribution at week k depends on incentives and roster states that were not fully observable or stable at week k−1, yet the model treats λ as an updated sample average rather than a time-varying latent state. A multi-week trap is the apparent convergence of Brier scores after week 13: this may reflect reduced variance from more data rather than genuinely improved causal specification. If the model is deployed in week 1 of a new season, the cold-start λ problem returns, and the authors provide no transfer or prior mechanism to initialize strengths from the previous season. Another trap is the European-soccer assumption that league-average home and away goals are stationary within a league-season; the paper acknowledges league variation and suggests adjusting for talent distribution [PAGE 14], but offers no cross-league hierarchical prior, so Bundesliga-derived λ scales may misfire in Ligue 1.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A bettor using this model faces a recursive theory-of-mind problem: the model assumes the market is inefficient enough to offer positive expected value, but the act of betting on those inefficiencies changes the market. The paper treats oddsmakers as “extremely effective” yet systematically exploitable [PAGE 10], a stance that is unstable under recursive reasoning—if many agents adopt Poisson + Kelly, the implied probabilities converge toward the model’s probabilities and the edge decays. The crisis-habit regression is the tendency, after a drawdown, to abandon KCO filtering and revert to the naive baseline the paper critiques: betting on the single highest-probability outcome every match [PAGE 13]. That baseline yields a 26.22% profit percentage on $237,800 risked, which is lower on a normalized basis but larger in absolute dollars; a distressed bettor may regress to this habit because it feels more “active” and less psychologically punishing than placing 161 bets over two years for $9,987 profit at KCO > 2.1 [PAGE 13].

The counter-trap is that KCO filtering itself becomes a correlated signal. Because the KCO distribution peaks near the no-bet baseline [PAGE 10], and because the weak positive correlation between KCO and net income is explicitly described as weak [PAGE 10], a bettor who over-trusts KCO values just above 2.0 will admit many false positives. The model’s hedging behavior—placing a small bet on the opponent to limit loss [PAGE 8]—further complicates the psychology: the bettor experiences smaller wins and smaller losses, which can mask the fact that expected log-growth may be negative once transaction costs and market impact are included. The clock layer operates on two timescales. First, the within-season clock: model value is claimed to improve as the season progresses [PAGE 6], so the optimal deployment window is late-season, yet late-season matches carry non-stationary incentives that violate Poisson stationarity. Second, the bankroll clock: the paper resets the bankroll to $100 per game [PAGE 11], ignoring the time value of money and the compounding clock that makes Kelly meaningful over repeated sequential wagers. Without compounding, the “optimal” stake per game is myopic, and the bettor faces a clock mismatch between the model’s per-game independence assumption and the real-world path-dependence of a bankroll.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Soccer is a low-scoring, continuous-time game in which goals are discrete but not independent events. The Poisson assumption that goals arrive independently at a constant rate λ breaks down after any in-game state change—a red card, a penalty, or a score-induced tactical shift alters the scoring intensity for both teams. Because the model multiplies marginal Poissons to get the score-line joint probability [PAGE 5], any dependence structure induced by the physical flow of the match is omitted. A veto condition is therefore any match where pre-match information indicates a high probability of early-game-state disruption (e.g., a referee with high card frequency, or a team playing with a suspended starter).

Biomechanical layer: The paper’s own Future Research section identifies lineup selection and injuries as a major limitation [PAGE 14–15]. Attacking and defending strengths are computed from season-aggregate goals or xG, which implicitly assume all players are equally available. The absence of a key striker or central defender changes the team’s effective λ within a match, but the four λ generators have no injury input. Biomechanical fatigue across a congested fixture list likewise alters shooting and defensive intensity, and neither xG nor the regression covariates adjust for minutes played or travel. Veto condition: any match where a top-quartile xG contributor is absent, or where either team has fewer than three days of rest.

Weather layer: None of the four λ models include weather covariates [PAGE 2–4]. Rain, wind, and extreme temperature affect passing accuracy, shot location, and goalkeeper error rates, thereby shifting xG and actual goals away from season averages. A cold, wet Stoke City home match in the Premier League is not physically equivalent to a dry Madrid evening, yet the league-average home goal term treats them as exchangeable. Veto condition: matches with forecast precipitation above a threshold or wind speeds that materially alter expected ball flight.

Adjudication: The model should be treated as vetoed (no bet placed) whenever any of the three layers triggers, regardless of KCO value. This is consistent with the paper’s acknowledgment that lineup strength is missing [PAGE 14], but the paper does not implement an explicit veto gate. The KCO > 2.1 filter on [PAGE 11–12] is purely statistical and cannot substitute for physical/biomechanical/weather exclusion. A robust implementation would stack a veto mask on top of the KCO filter: bet only if KCO > threshold AND no layer veto is active.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Key-player absence counterfactual. Verifiable condition: In a home match, the opposing team’s starting striker accounts for ≥15% of the team’s season xG and is ruled out 60 minutes before kickoff. Veto rule: Exclude the match from the betting set regardless of KCO. Prediction: The model’s season-average λ_H overestimates true home scoring intensity by at least 0.25 goals; under a zero-inflated or lineup-adjusted Poisson, the home-win probability falls by ≥0.10 relative to the paper’s table values, and the KCO objective for a home-win bet drops below the no-bet baseline, suppressing the wager. Observable refutation: If home-win profit percentage on vetoed matches is not significantly lower than on non-vetoed matches, the injury veto lacks predictive power.

Scenario 2 — Early-season cold-start counterfactual. Verifiable condition: Matchday is before game week 5, the point at which the authors begin predictions [PAGE 6]. Veto rule: All matches prior to game week 5 are excluded because rolling-window strengths are estimated from fewer than four matches per team. Prediction: Brier score degradation exceeds 15% relative to the game week 13+ calibration window reported on [PAGE 7], and profit percentage for bets placed in this window is negative or statistically indistinguishable from zero. Observable refutation: If pre-GW5 Brier scores are within 5% of post-GW13 scores, the small-sample concern is not binding.

Scenario 3 — Zero-inflated defensive derby counterfactual. Verifiable condition: Both teams’ λ values satisfy λ_H × λ_A < 0.64 (equivalent to both teams averaging below 0.8 expected goals), a regime where 0–0 and 1–0 outcomes dominate and standard Poisson underestimates zero-inflation. Veto rule: Require a zero-inflated Poisson (suggested as future work on [PAGE 14]) or exclude the match; do not admit KCO > 2.1 bets. Prediction: The standard Poisson draw probability is understated by ≥0.05, causing the KCO optimizer to over-allocate to home or away wins; bets admitted under KCO > 2.1 in this regime show a realized win rate below the predicted probability by ≥8 percentage points. Observable refutation: If the calibration curve for low-λ matches lies on the perfect-calibration line [PAGE 7], zero-inflation is not a material misspecification.
</RLVR_COUNTERFACTUAL_VETOES>