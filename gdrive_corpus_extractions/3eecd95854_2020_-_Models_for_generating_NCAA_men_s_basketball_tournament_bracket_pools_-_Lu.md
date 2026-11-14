---
source: "2020 - Models for generating NCAA men s basketball tournament bracket pools - Ludden et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2020"
pages: 27
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4971
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about NCAA men's basketball tournament bracket pools using strict constraints:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful about:
- No betting lines/spreads/totals/moneylines/odds mentions
- Formal LaTeX equations only (no fake ratios like Force/Fatigue)
- Cite [PAGE N] markers with verbatim quotes from the source
- Minimum 1000 words total across sections
- THINK_TRACE >= 400 words

The source text provided is the full paper. Pages seem to be marked in the text with bold page numbers like **2**, **3**, etc. I need to reference exact page numbers.

Let me structure my response:

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit. I'll analyze:
- The power model derivation from odds ratio to logit
- The truncation issue with alpha values at K=2
- The sample size problem in later rounds (Round 5 has only 68 games but 120 possible match-ups)
- The implicit PMF over 2^63 brackets
- ESPN scoring system geometry (doubling points each round, max 1920)
- Sample size vs pool size tradeoffs (N=50,000 vs N_ESPN millions)
- MCB statistical method limitations

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations with units, page citations.
- Odds ratio model (power model)
- Logit equivalent
- Bradley-Terry comparison
- Alpha estimation formula
- Weighted average alpha
- Truncated geometric PMF
- Chi-square goodness of fit
- Bracket probability PMF
- Region decomposition
- ESPN scoring points
- MCB confidence intervals
- Scaled ESPN count

RETROCAUSAL_GENEALOGY: Historical lineage and multi-week traps.
- Bradley-Terry 1952
- Jacobson et al. 2009, 2011
- Hsu 1984 MCB
- Lopez & Mathews 2015 (but can't mention betting lines/spreads)
- Kaplan & Garstka 2001
- Wright & Wiens 2016 ESPN data
- Multi-week trap: training data from 1985 to y-1 creates look-ahead/stationarity assumptions

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is a meta-cognitive section about how participants/modelers think under pressure
- Pick favorite as crisis habit (regression to deterministic favorite)
- Counter-trap: randomized pools with upset injection
- Clock: round-dependent alpha values and late-round scoring weights

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- The model assumes seed equivalence, ignores venue, victory margin, player health, travel, weather
- These are physical/biomechanical vetoes that the model explicitly excludes
- Round 1 fixed seeds vs sampled later rounds introduces structural veto

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios.
- Scenario 1: 16-seed beats 1-seed (2018 UMBC) - alpha bound K=2 prevents modeling before it happened
- Scenario 2: Round 4 upsets cascade - alpha_4 near zero means seed independence, vetoes structural bracket logic
- Scenario 3: Pool size threshold crossover around 5000 brackets between MLR100 and R64

Let me start writing, ensuring I don't mention betting lines, spreads, totals, moneylines, or odds. Wait - the paper itself mentions "odds ratio" in the mathematical sense. Is that a betting line? The constraint says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." The word "odds" might be tricky. The paper uses "odds ratio" in a probabilistic/statistical sense (odds ratio for seed s1 is modeled as...). I should probably avoid the word "odds" entirely to be safe, or refer to it as "likelihood ratio" if needed. Actually, the constraint says never mention odds. So I must avoid saying "odds ratio" even though it's in the paper. I can describe it as the power model's multiplicative likelihood formulation without using the forbidden word.

Let me carefully draft each section with page citations. The text has page markers like **2**, **3**, **4**, etc. I'll cite those.

Word count check: I need >=1000 words total. THINK_TRACE alone >=400.

Let me write carefully.

THINK_TRACE content:
- Start with the core epistemological problem: single bracket vs pool.
- Power model: p_j(s1,s2) as function of seed ratio and alpha.
- Derive alpha from observed proportion: alpha_hat = log( p/(1-p) ) / log(s2/s1). Actually from the paper: the odds ratio formulation. If p/(1-p) = (s2/s1)^alpha, then alpha = log(p/(1-p)) / log(s2/s1). I need to express this without saying "odds". Let's call it the likelihood ratio or probability ratio. Actually I can write: "the model posits [p/(1-p)] = (s2/s1)^alpha_j". That's formal LaTeX.
- Gray zone: small sample sizes cause alpha = ±infinity. Bound K=2 clips extreme values.
- Round 5 data sparsity: 68 games but 120 possible seed match-ups; 11 of 20 occurred once, guaranteeing observed proportions in {0,1}. This is a breakdown regime.
- Weighted average alpha_j for rounds with missing data.
- ESPN scoring: 10 points round 1, doubling each round, max 1920. Correct champion pick secures 630 points (10+20+40+80+160+320 = 630).
- Implicit PMF over 2^63 ≈ 9×10^18 brackets. Naïve sorting infeasible.
- Region decomposition: 2^15 region outcomes, sample top T=100.
- MCB method: compares treatments, CIs, no strictly positive CIs found, so no generator conclusively best.
- N=50,000 vs N_ESPN millions; scaled count n_hat_ESPN = n_ESPN * (N_ESPN/N).

I'll write this in a dense, analytical style.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with page citations.
- Page 3-4: power model equation.
- Page 4: alpha estimation from observed proportion.
- Page 5: weighted average alpha.
- Page 5-6: Algorithm 1.
- Page 6: truncated geometric PMF.
- Page 7: bracket PMF and region decomposition.
- Page 3: ESPN scoring.
- Page 9-10: MCB and metrics.

RETROCAUSAL_GENEALOGY:
- Bradley & Terry 1952
- Jacobson & King 2009; Jacobson et al. 2011
- Hsu 1984 MCB
- Training data 1985 to y-1 creates a retrocausal stationarity trap: assumes past tournament seed behavior predicts future bracket pools.
- Multi-week trap: the tournament unfolds over weeks; early-round errors propagate (mentioned page 3: "incorrect picks of earlier rounds propagate through the tournament").

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under pressure, participants regress to pick-favorite (deterministic chalk).
- Counter-trap: power model injects controlled upset variance via alpha and sampling functions.
- Clock: round-dependent scoring weights create time pressure; later rounds worth exponentially more.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: player health, fatigue, travel, venue ignored (model uses only seed number).
- Biomechanical layer: individual athlete performance variance not modeled.
- Weather layer: not applicable to indoor arena but game conditions ignored.
- Structural veto: pick-favorite pool earns zero of 640 points in last two rounds if no 1-seed in championship (page 8).

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
1. 2018 16-over-1 upset: Before 2018, alpha_1,(1,16) hit +infinity bound K=2, making 16-seed win probability effectively capped but not zero? Actually if p=0, alpha = -infinity? Let's see: if weaker seed always won, p=0 for stronger seed, alpha = -infinity. If stronger always won, p=1, alpha = +infinity. For 1 vs 16, 1-seed always won before 2018, so alpha_1,(1,16) = +infinity, clipped to K=2. After 2018 UMBC win, alpha dropped to 1.77 (2019) and 1.78 (2020). Prediction: any generator using pre-2018 parameters would assign near-deterministic 1-seed advancement, vetoing the actual tournament path.
2. Round 4 (Elite Eight) sample sparsity: only 20 of 120 match-ups occurred in 68 games; 11 occurred once. Prediction: weighted average alpha_4 near zero forces coin-flip behavior, vetoing any seed-based structural advantage in Elite Eight regardless of actual team quality.
3. Pool size crossover at ~5,000: MLR100 beats R64 for small pools (<5000), R64 wins for large pools (>5000). Prediction: for a submission cap of N=10 brackets, pick favorite or MLR100 is preferable; for N=50,000, R64/E8/F4A dominate. This is a verifiable threshold veto.

I must ensure no banned words. "Odds" appears in the paper. I will avoid writing it. If I need to reference the formula, I'll write the ratio of probabilities directly: \frac{p}{1-p}.

Let me now compose the final output with exact XML tags. I need to count words roughly. I'll aim for substantial depth.

Check: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I will not use the word "odds" at all. I'll use "probability ratio" or just write the equation.

Let me draft.

---

<THINK_TRACE>
The paper's central tension is between deterministic chalk and stochastic pool construction. A single bracket, however sophisticated, almost surely errs because 63 games produce 2^63 ≈ 9×10^18 possible outcomes, yet the modern era (1985–2019) contains only a few hundred observed tournament games. Therefore the authors shift the objective from maximizing one bracket's score to maximizing the probability that a pool of N brackets contains at least one high scorer.

The power model estimates the win probability of seed s1 over seed s2 in round j as p̂_j(s1,s2) = 1 / (1 + (s1/s2)^{α̂_j(s1,s2)}) when s1 < s2, derived from the probability-ratio relation [p_j/(1−p_j)] = (s2/s1)^{α_j}. This is where the first gray zone appears: α̂ is computed by substituting the observed historical proportion p̄_j(s1,s2) = n_j(s1,s2) / [n_j(s1,s2) + n_j(s2,s1)]. If a match-up has never occurred, or occurred with a 0–1 or 1–0 record, the proportion is exactly 0 or 1, forcing α̂ → ±∞. The authors impose a hard cap K = 2 on |α̂|, which clips these infinities. This cap is not merely technical; it changes behavior. For example, before the 2018 tournament no 16-seed had defeated a 1-seed, so α̂_1,(1,16) was pinned at +2, rendering the weaker seed's win probability small but non-zero under the cap. After UMBC's win, the estimate fell to 1.77 (2019) and 1.78 (2020), showing that one game materially altered a parameter used for all future 1-vs-16 match-ups.

A second gray zone is data sparsity in later rounds. Round 5 has 120 possible distinct seed match-ups but only 68 historical games; 11 of the 20 observed match-ups happened exactly once, guaranteeing p̄ ∈ {0,1}. Consequently the authors replace match-specific α̂ with a round-level weighted average α̂_j for rounds 2–6. This is a bias-variance trade: it prevents infinite parameters but assumes exchangeability across seed pairings within a round, an assumption that breaks when a particular seed (e.g., 11-seeds reaching the Final Four more often than expected) is overrepresented.

The ESPN scoring geometry amplifies these statistical fragilities. Round 1 correct picks earn 10 points; each subsequent round doubles, so the final game is worth 320 points, and correctly picking the champion implicitly secures 630 points (10+20+40+80+160+320). Errors in early rounds propagate because a wrong Round 1 winner eliminates all downstream paths through that team. The MCB comparison (Hsu 1984) across R = 25 replications of N = 50,000 brackets finds no generator with a strictly positive confidence interval for max score or ESPN count in any year; it only excludes generators as "not best." This is a severe epistemic limit: with N ≪ N_ESPN (millions of public brackets), the scaled count n̂_ESPN = n_ESPN × (N_ESPN / N) extrapolates from tiny pools to the public population, assuming proportionality that may not hold at scale.

Finally, the implicit PMF over all 2^63 brackets is computationally intractable. The authors exploit regional independence to reduce the problem to 2^15 region outcomes and sample from the top T = 100 most likely regions. MLR100 restricts Final Four participants to seeds 1–3, which fails in years where lower seeds reach the final weekend (e.g., 7-seed vs 8-seed championship in 2014). The crossover in Table 10—MLR100 superior for small pools, R64 superior for large pools near N ≈ 5,000—reveals that generator diversity must scale with pool size to explore the bracket search space adequately.
</THINK_TRACE>

That's probably around 500 words. Good.

Now SOURCE_OPERATORS_AND_EQUATIONS. I need formal LaTeX, units, page citations, breakdown.

I'll write equations with page numbers like [PAGE 4], etc. Let me map pages from the text:
- Page 2-3: introduction, 63 games, 9 quintillion.
- Page 3: ESPN scoring, 1920 max, champion 630 points.
- Page 3-4: power model definition, odds/probability ratio, alpha.
- Page 4: alpha estimation formula, p_bar, K=2 bound.
- Page 5: weighted average alpha, Algorithm 1, truncated geometric.
- Page 6: chi-square = 18.321, p=0.246, 15 dfs.
- Page 7: bracket PMF, region decomposition, MLR100 T=100.
- Page 8: max score, ESPN count, pick favorite, Table 3 benchmarks.
- Page 9-10: MCB, Tables 6-9.
- Page 11-12: MLR100 vs R64, Table 10.
- Page 13: conclusions.

I need to avoid saying "odds". I'll write the probability ratio \frac{p_j(s_1,s_2)}{1-p_j(s_1,s_2)}.

Let me write this section.

RETROCAUSAL_GENEALOGY:
- Bradley & Terry (1952) paired comparisons.
- Jacobson & King (2009) seed strength.
- Jacobson et al. (2011) truncated geometric seed distribution.
- Hsu (1984) MCB.
- Training set 1985 to y−1: retrocausal assumption that historical seed performance is stationary and predictive.
- Multi-week trap: tournament unfolds over weeks, early errors propagate (page 3), late-round scoring weights create clock pressure.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under uncertainty, human brackets revert to pick-favorite (deterministic chalk), which is optimal only if higher seeds dominate all rounds.
- Counter-trap: power model injects stochastic upset variance via α and Sample functions, deliberately diversifying against chalk.
- Clock: exponential point doubling means mistakes in Round 6 cost 320 points vs 10 in Round 1; participants must manage a temporal risk budget where late-round accuracy dominates expected score.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical: model reduces teams to seed numbers only; ignores player health, injury, fatigue, venue, travel, margin of victory.
- Weather: indoor dome/arena neutralizes weather, but game-specific conditions (referee style, altitude) unmodeled.
- Structural veto (page 8): if neither championship finalist is a 1-seed, all pick-favorite brackets earn zero of 640 points in Rounds 5–6. This is a hard logical veto on deterministic chalk in upset-heavy years.
- Round 4 veto: α̂_4 near 0.12–0.36 implies near-coin-flip seed independence in Elite Eight, vetoing any seed-based structural prediction for that round regardless of team quality.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
I'll phrase as:
Scenario 1: Pre-2018 1-vs-16 parameter lock. Verifiable: Tables 4 & 5 show α̂_1,(1,16)=2 (capped at K=2) for 2013–2018; post-2018 drops to 1.77. Prediction: any generator using 2013–2017 training data assigns P(16 beats 1) = 1/(1+16^2) ≈ 0.00388 in Round 1, systematically vetoing the 2018 UMBC path and over-allocating expected score to 1-seed advancement.
Scenario 2: Round 4 match-up sparsity. Verifiable: page 5 states only 20 of 120 possible Round 5 seed match-ups occurred in 68 games; 11 occurred once. Prediction: the round-level α̂_4 weighted average (Table 5: 0.11–0.36) forces near-uniform win probabilities across all Elite Eight seed match-ups, vetoing any model-based discrimination between, say, a 2-seed and a 7-seed in that round even when team-specific strength differs.
Scenario 3: Pool-size regime switch at N≈5,000. Verifiable: Table 10 shows MLR100 > R64 for pool sizes 10–1000 in most years, but R64 > MLR100 at 50,000 in 2013, 2016–2019. Prediction: for a submission cap of N=10 brackets, MLR100 or pick-favorite dominates; for N=50,000, R64/E8/F4A dominate; running MLR100 at N=50,000 is a vetoed configuration because its low variance under-explores the 2^63 space.

I need to make sure total word count >= 1000. Let me estimate:
- THINK_TRACE: ~550 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~400 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total ≈ 1850 words. Good.

Now I need to include verbatim quotes with page citations in SOURCE_OPERATORS_AND_EQUATIONS. Let me find exact quotes:
- Page 3: "The maximum total score, which is achieved by correctly picking the winner in all 63 games of the tournament, is 1920."
- Page 3: "Therefore, correctly picking the champion team secures 630 points since at least one winner is correctly picked in each of the six rounds."
- Page 4: "Note that setting α_j(s1,s2) = 0 is equivalent to estimating a 0.5 winning probability for each seed"
- Page 5: "Every possible match-up in Round 1 always occurs four times per year, yielding 140 games each since 1985. However, there are C(16,2) = 120 possible match-ups in Round 5 between distinct seeds, and the 68 Round 5 games in the modern era have only included 20 of these."
- Page 7: "where Pr(bi | bi−1) is the product of the estimated probabilities for each game in Round i (by an assumption of independence)."
- Page 8: "The MCB method compares different treatments (in this case, bracket generators)..."

I'll incorporate these.

Let me finalize the writing, being careful with LaTeX formatting and not using banned words.

Wait, I need to double check: does the source text actually have page numbers? It shows bold numbers like **2**, **3**, **4** etc. embedded. These correspond to PDF pages. I'll cite them as [PAGE 3], etc.

One concern: The user said "DRIVE SOURCE: /GSE-Research/... PAGES: 27". But the source text provided seems to be the full paper (15 pages of content plus references/appendix). The page markers in the text go up to 15. I'll cite based on those visible page markers.

Let me write the final output now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central epistemological problem is that a single NCAA tournament bracket almost certainly contains incorrect picks because 63 games generate 2^63 ≈ 9×10^18 possible outcomes, while the modern-era training record (1985–2019) supplies only a few hundred observed games. The authors therefore abandon the objective of optimizing one bracket and instead seek a pool of N brackets such that at least one member is likely to score highly under the ESPN system.

The power model formalizes win probability for seed s1 over seed s2 in round j (s1 < s2) through the probability-ratio relation \frac{p_j(s_1,s_2)}{1-p_j(s_1,s_2)} = \left(\frac{s_2}{s_1}\right)^{\alpha_j(s_1,s_2)}, which inverts to p̂_j(s_1,s_2) = 1 / \left(1 + (s_1/s_2)^{\hat{\alpha}_j}\right). The first gray zone is parameter estimation: \hat{\alpha}_j is obtained by substituting the observed historical proportion \bar{p}_j(s_1,s_2) = n_j(s_1,s_2) / [n_j(s_1,s_2) + n_j(s_2,s_1)]. When a match-up is absent from the training set, or its record is 0–1 or 1–0, \bar{p} ∈ {0,1}, driving \hat{\alpha} → ±∞. The authors cap |\hat{\alpha}| at K = 2, which materially changes predictions. Before 2018 no 16-seed had defeated a 1-seed, so \hat{\alpha}_1,(1,16) was pinned at +2; after UMBC’s victory the estimate fell to 1.77 (2019) and 1.78 (2020), proving that one game re-calibrates a parameter applied to all future 1-vs-16 match-ups.

A second gray zone is late-round data sparsity. Round 5 offers C(16,2) = 120 distinct seed match-ups but only 68 historical games, and 11 of the 20 observed match-ups occurred exactly once, guaranteeing \bar{p} ∈ {0,1}. To avoid infinite parameters, the authors replace match-specific estimates with a round-level weighted average \hat{\alpha}_j for rounds 2–6. This induces an exchangeability assumption across seed pairs within a round, which breaks when particular seeds are systematically overrepresented—for example, 11-seeds reaching the Final Four more often than the truncated geometric fit predicts.

The ESPN scoring geometry amplifies these statistical fragilities. Round 1 correct picks earn 10 points; each later round doubles, so the final game is worth 320 points and the maximum tournament score is 1920. Correctly picking the champion implicitly secures 630 points (10 + 20 + 40 + 80 + 160 + 320). Errors in early rounds propagate because an incorrect Round 1 winner eliminates every downstream path through that team.

Evaluation employs Hsu’s multiple comparisons with the best (MCB) method across R = 25 replications of N = 50,000 brackets per year. No generator produced a strictly positive MCB confidence interval for max score or ESPN count in any year; the method only excludes generators as “not best.” Because N ≪ N_ESPN (millions of public submissions), the scaled count \hat{n}^{ESPN} = n^{ESPN} × (N_ESPN / N) extrapolates from small pools to the public population under a proportionality assumption that may not hold.

Finally, the implicit PMF over all 2^63 brackets is computationally intractable. The authors exploit regional independence to reduce the problem to 2^15 region outcomes and sample from the top T = 100 most likely regions. MLR100 restricts Final Four participants to seeds 1–3, which fails in years such as 2014, when the championship featured a 7-seed versus an 8-seed. Table 10 shows MLR100 outperforms R64 for small pools but loses to R64 at N = 50,000 in most years, revealing a crossover near N ≈ 5,000: generator diversity must scale with pool size to adequately explore the bracket search space.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and exact page citations:

[PAGE 3] — ESPN scoring system:
\text{Points}_j = 10 \cdot 2^{j-1}, \quad j \in \{1,\dots,6\},
so Round 1 = 10 pts, Round 6 (championship) = 320 pts, \text{Max total} = 1920 pts.
Verbatim: “The maximum total score, which is achieved by correctly picking the winner in all 63 games of the tournament, is 1920.” Correct champion pick secures 630 points because \sum_{j=1}^{6} 10\cdot2^{j-1} = 630.

[PAGE 4] — Power model probability ratio and logit form:
\frac{p_j(s_1,s_2)}{1-p_j(s_1,s_2)} = \left(\frac{s_2}{s_1}\right)^{\alpha_j(s_1,s_2)}, \qquad s_1 < s_2,
equivalently \text{logit}(p_j) = \alpha_j \log(s_2/s_1).
Bradley–Terry comparison: \text{logit}(p) = \beta_{s_1} - \beta_{s_2}, with seed-strength baseline \beta_s = \log(1/s).

[PAGE 4] — Alpha estimation from observed proportions:
\hat{\alpha}_j(s_1,s_2) = \frac{\log\!\left(\frac{\bar{p}_j(s_1,s_2)}{1-\bar{p}_j(s_1,s_2)}\right)}{\log(s_2/s_1)}, \qquad \bar{p}_j(s_1,s_2) = \frac{n_j(s_1,s_2)}{n_j(s_1,s_2)+n_j(s_2,s_1)}.
Singularity: if \bar{p} \in \{0,1\}, then \hat{\alpha} \to \pm\infty; hard cap |\hat{\alpha}| \le K = 2 is imposed.
Verbatim: “Note that setting \alpha_j(s_1,s_2) = 0 is equivalent to estimating a 0.5 winning probability for each seed.”

[PAGE 5] — Round-level weighted average for sparse rounds:
\hat{\alpha}_j = \frac{\sum_{(s_1,s_2)\in S} n_j(s_1,s_2) \hat{\alpha}_j(s_1,s_2)}{\sum_{(s_1,s_2)\in S} n_j(s_1,s_2)}, \quad S = \{(s_1,s_2): 1 \le s_1 < s_2 \le 16\}.
Breakdown regime: Round 5 has 120 possible match-ups but only 68 historical games; 11 of 20 observed match-ups occurred once, so \bar{p} \in \{0,1\} is guaranteed.

[PAGE 5] — Algorithm 1 bracket generation:
For each game g in round j with seeds s1, s2, draw u \sim \text{Uniform}(0,1); if u < \hat{p}_j(s_1,s_2) pick team 1, else pick team 2. Output: predicted winners of all 63 games. Round index r \in \{1,\dots,6\} determines which later-round seeds are pre-sampled by Sample.

[PAGE 6] — Truncated geometric PMF for Final Four seeds:
\Pr[X=i] = k q (1-q)^{i-1}, \quad i=1,\dots,16, \quad k = \frac{1}{1-(1-q)^{16}},
with q estimated as reciprocal of average seed number. Goodness-of-fit: \chi^2 = 18.321, p = 0.246 at 15 degrees of freedom; null not rejected, yet 11-seeds are overrepresented relative to the fit.

[PAGE 7] — Implicit bracket PMF and region decomposition:
\Pr(\mathbf{b}) = \prod_{i=1}^{6} \Pr(b_i \mid b_{i-1}), \quad \text{where } \Pr(b_i \mid b_{i-1}) \text{ is the product of game probabilities in round } i \text{ (conditional independence).}
Region form: \Pr(\text{bracket}) = \prod_{r=1}^{4} \Pr(\text{region } r) \times \Pr(\text{Final Four and championship winners}). Naïve enumeration of 2^63 \approx 9\times10^{18} brackets is infeasible; MLR100 samples from top T = 100 region outcomes out of 2^{15} = 32,768.

[PAGE 8–10] — Evaluation metrics and MCB:
s_{\max} = \max_{b \in \text{pool}} \text{ESPN score}(b); \quad n^{ESPN} = |\{b \in \text{pool}: \text{score}(b) \ge l^{ESPN}\}|; \quad \hat{n}^{ESPN} = n^{ESPN} \cdot \frac{N_{ESPN}}{N}.
MCB constructs confidence intervals for \mu_t - \max_{t' \ne t} \mu_{t'}; a strictly positive lower bound certifies “best,” a strictly negative upper bound certifies “not best.” In Tables 6–7 no generator achieved a strictly positive CI for any year.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage runs backward from Bradley and Terry (1952), whose paired-comparison model supplies the seed-strength parameterization \beta_s that the power model generalizes by adding round-dependent scaling \alpha_j(s_1,s_2). Jacobson and King (2009) established that seed advantage is not uniform across rounds, and Jacobson et al. (2011) fitted the truncated geometric distribution to historical Final Four seed frequencies, which the authors adopt for SampleF4A, SampleF4B, SampleNCG, and SampleE8. Hsu (1984) supplies the MCB decision framework used to compare generators across replications.

A retrocausal stationarity trap is embedded in the training design: parameters for predicting year y are estimated exclusively from tournaments 1985 through y−1. This assumes that the relative performance of seed numbers is ergodic across decades and that the modern era’s limited sample is representative of the target tournament. The 2018 16-over-1 upset demonstrates the trap’s cost: pre-2018 parameters had \hat{\alpha}_1,(1,16) pinned at the cap K=2 because no such upset existed in the lookback window, so the model could not anticipate the event that subsequently altered the parameter itself.

A multi-week trap operates within each tournament: because the bracket is single-elimination and points double each round, an error in Round 1 eliminates a team and forfeits all downstream scoring paths through that team, while a Round 6 error costs 320 points outright. The authors note verbatim that “as the incorrect picks of the earlier rounds propagate through the tournament, the best generated bracket must also correctly pick many of the winners in the beginning rounds.” Thus the generator must balance early-round upset injection against late-round structural fidelity, a trade mediated by the round-dependent \alpha_j estimates and the sampling functions that fix seeds at rounds 4, 5, or 6 before randomizing the remainder.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Under forecast crisis—when the true bracket is unknown and upsets are frequent—human participants regress to a crisis habit: the pick-favorite approach, which deterministically selects the lower seed in every game and advances all four 1-seeds to the Final Four. This habit is optimal only under the strong assumption that higher seeds dominate in every round; it collapses when the championship lacks a 1-seed, as in 2014 (7-seed vs. 8-seed), where all pick-favorite brackets earn zero of the 640 points available in Rounds 5 and 6.

The counter-trap is stochastic pool construction: rather than regressing to chalk, the power model injects controlled upset variance through \alpha_j and through the Sample functions that pre-select later-round seeds from truncated-geometric or two-value distributions. This creates bracket diversity specifically to capture upset paths that deterministic chalk cannot. The recursion lies in the modeler’s second-order belief: the participant must guess not only who will win, but how the public will misprice upsets, and then construct a pool whose upper tail exceeds the public’s upper tail.

The clock is the exponential scoring schedule. Round 1 mistakes cost 10 points each; Round 6 mistakes cost 320 points. Therefore the optimal habit under time pressure is not uniform accuracy but late-round concentration: correctly picking the champion implicitly validates at least one correct pick in each prior round, worth 630 points. Generators that fix Elite Eight or Final Four seeds (E8, F4A, F4B, NCG) attempt to reduce error propagation by locking structurally important nodes before randomizing earlier rounds, whereas R64 randomizes from Round 1 and lets early errors cascade. MCB results show no generator is conclusively best, which is consistent with a recursive theory of mind in which each generator exploits a different temporal niche of the upset clock.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The model reduces each team to its seed number only. It explicitly ignores player health, injury status, fatigue, travel distance, venue effects, and margin of victory. These are physical/biomechanical variables that can veto a seed-based probability in any individual game, yet they are absent from \alpha_j(s_1,s_2).

Biomechanical layer: Individual athlete performance variance, matchup-specific defensive schemes, and roster availability are not represented. The model assumes exchangeability of all teams sharing a seed, an assumption that is violated whenever a lower-seed team possesses a player or tactical advantage uncorrelated with seeding.

Weather layer: Tournament games are held in controlled indoor arenas, so meteorological vetoes are neutralized; however, arena-specific conditions (altitude, crowd noise, referee crew tendencies) are unmodeled and can act as implicit vetoes on seed-neutral probabilities.

Structural veto (hard logical boundary): [PAGE 8] states that “if neither team in the National Championship Game is a 1-seed, then all pick favorite brackets have the same score and are guaranteed to earn zero of 640 points in the last two rounds.” This is a deterministic veto on the pick-favorite habit in upset-heavy years.

Round-specific veto: [PAGE 5] shows Round 4 (\hat{\alpha}_4 \approx 0.11\text{–}0.36 across 2013–2020) is near zero, implying win probabilities close to 0.5 regardless of seed. Any generator relying on seed strength to discriminate Elite Eight match-ups is vetoed by the data sparsity and the round-level averaging that forces near-coin-flip behavior in that round.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Pre-2018 16-over-1 parameter lock. Verifiable condition: [PAGE 4, Table 4] shows \hat{\alpha}_1,(1,16) = 2 (at cap K=2) for 2013–2018, dropping to 1.77 (2019) and 1.78 (2020) after the 2018 upset entered the training set. Counterfactual: A generator trained only through 2017 assigns P(16 defeats 1) = 1 / (1 + 16^2) \approx 0.00388 in Round 1. Prediction: It systematically vetoes the actual 2018 championship path and over-allocates expected score to 1-seed advancement, producing a brittle upper tail in years with historically unprecedented low-seed wins.

Scenario 2 — Round 4 match-up sparsity veto. Verifiable condition: [PAGE 5] states that Round 5 (Elite Eight) has 120 possible seed match-ups but only 68 historical games, with 11 of 20 observed match-ups occurring once, forcing \bar{p} \in \{0,1\}; the response is the round-level weighted average \hat{\alpha}_4, which Table 5 places between 0.11 and 0.36. Counterfactual: Any model attempting seed-specific discrimination in Elite Eight match-ups is overruled by the pooled estimate. Prediction: For any year in which a 7-seed or 8-seed reaches the championship, seed-based Elite Eight probabilities are miscalibrated because the model treats all Round 4 match-ups as nearly exchangeable regardless of actual team quality.

Scenario 3 — Pool-size regime crossover at N \approx 5,000. Verifiable condition: [PAGE 12, Table 10] shows MLR100 exceeds R64 for pool sizes 10–1,000 in most years (e.g., 2013: 1141 vs. 1018 at N=10), while R64 exceeds MLR100 at N=50,000 in 2013, 2016–2019 (e.g., 2019: 1708 vs. 1744). Counterfactual: Deploying MLR100 at N=50,000 or R64 at N=10 mismatches generator variance to pool capacity. Prediction: For submission caps of N \le 1,000, MLR100 or pick-favorite dominates because low variance concentrates score in the upper tail; for N \ge 5,000, high-variance generators (R64, E8, F4A) dominate because they explore more of the 2^63 space. Running MLR100 at large N is a vetoed configuration that under-explores the bracket distribution.
</RLVR_COUNTERFACTUAL_VETOES>