---
source: "2024 - A Holistic Examination of Streakiness and Consistency in Major League Baseball - Feder.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2024"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5392
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about streakiness and consistency in MLB baseball. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- Formal LaTeX equations only, no invented toy ratios.
- Cite page markers [PAGE N] based on the source text provided. The source text has line numbers embedded in comments (e.g., 14, 16, etc.) but they look like page/line markers from pdftotext. I should treat numbers like [PAGE 14], [PAGE 177] etc. as page citations. The text shows numbers at line starts that seem to be page numbers or line numbers. Looking at the source, numbers like 14, 16, 17... appear at the beginning of lines in the raw text, likely page numbers from the PDF extraction. I should cite them as [PAGE 14], [PAGE 177], etc. when referencing content near those numbers.
- Verbatim quotes where appropriate.

Let me structure this carefully.

First, understand the paper:
- Title: A Holistic Examination of Streakiness and Consistency in Major League Baseball by Ryan Feder, Wharton Sports Analytics Journal, Spring 2024.
- Studies 136 batters and 127 pitchers in 2023 MLB season.
- Four outcomes: on-base events, extra base hits (XBH), strikeouts, swing contact.
- Granularity: plate appearance level for first three, swing level for swing contact.
- Metrics: Streak Score (sum of squared streak lengths) and Spacing Score (sum of squared gaps between successes).
- Permutation test: 1,000 permutations, block permutation for pitchers (innings) and swing-level (at-bats), naive for hitter at-bats.
- Internal Streakiness Percentile (ISP): percentile of observed score among permuted scores. Closer to 0 = consistent, closer to 1 = streaky.
- Simulation study: random, streaky, consistent hitters at 0.3 and 0.1 baseline rates.
- Results: League-wide, pitchers streakier than hitters on swing contact and strikeouts. Consistency moderately correlated with traditional success. Ronald Acuña identified as model of consistency.

Now I need to write each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the math, discuss assumptions, gray zones (e.g., block permutation validity, ISP comparability across players, residual dependence, rare vs common outcomes, singularity when no successes, edge cases in S_i(a) and G_i(a) definitions). Must be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I need to write out the equations from the paper in LaTeX, cite pages like [PAGE 107], [PAGE 128], [PAGE 138], [PAGE 149], [PAGE 180], [PAGE 206], etc. Also discuss units (dimensionless probabilities, counts, percentiles), breakdown regimes (m > n, zero successes, block size mismatch, etc.).

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss Albert (2008), McCotter (2008), Albright (1993), Bock et al., Reifman (2012), Bar-Eli et al. (2006), Cohen (2020), Gamble (2015), Arthur & Matthews (2017), Evanko (2020). Multi-week traps: Albright found streakiness didn't last over 4 years; Gamble found previous 3 starts no predictive value; the paper's focus on single season 2023 may suffer from short-window overfitting; survivorship bias (qualified players only); selection bias toward successful players.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a more abstract section. "Crisis habit regression" could refer to players regressing under pressure; "counter-trap" could be the permutation null; "clock" could be the rolling window of 25 observations or the season clock. Need to discuss how a player's mental model of their own streakiness affects subsequent performance (reflexivity), how the ISP itself might create a counter-trap (players labeled streaky may be pitched to differently), and the temporal clock (rolling mean m=25, season length).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Discuss physical constraints: pitch velocity, spin, release point; biomechanical fatigue over a season; weather (wind, temperature, humidity) affecting fly balls and contact; umpire strike zone variance; park factors. How these veto or confound the binary outcome sequences assumed independent/exchangeable within blocks. The paper's block permutation attempts to handle game-state but not weather/biomechanical drift across non-contiguous blocks.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning from Verifiable Rewards? Or some evaluation framework. I need to propose 3 counterfactual veto scenarios that are verifiable (can be tested/falsified) with predictions. Example: (1) If a pitcher has ISP > 0.9 for strikeouts but next-game K% does not correlate, veto the streakiness signal. (2) If block permutation is invalid because residuals across innings are correlated, then ISP distribution for random hitters should deviate from Uniform(0,1). (3) If Acuña's consistency is driven by BABIP luck rather than skill, then his ISP should regress in 2024 while his wOBA stays high. Provide predictions for each.

Word count: Total >= 1,000 words across sections. THINK_TRACE alone >= 400 words.

Let me start drafting.

Important: Do not mention betting lines. Avoid "spread", "moneyline", "odds", "total", "over/under". I can mention probability units but not betting odds.

Citations: Use [PAGE N] format. The source text has page-like numbers at line beginnings. I'll reference them contextually.

Let's map content to page markers:
- Abstract: [PAGE 14]-[PAGE 29]
- Introduction: [PAGE 29]-[PAGE 92]
- Methods 2.1: [PAGE 93]-[PAGE 155] (equations around 107-148)
- 2.2 Outcome Definitions: [PAGE 156]-[PAGE 179]
- Table 1: [PAGE 177]
- 2.3 Permutational Inference: [PAGE 180]-[PAGE 220] (ISP formula at 206)
- 2.4 Data: [PAGE 221]-[PAGE 227]
- 3 Simulation: [PAGE 228]-[PAGE 265]
- 4 Results: [PAGE 266]-[PAGE 412]
- 5 Discussion: [PAGE 413]-[PAGE 470]

I will cite these.

Now, writing the sections.

THINK_TRACE (>=400 words):
Derive Streak Score and Spacing Score from binary sequence Y_ij. Define rolling mean. Discuss the indicator product in S_i(a): max over b>a of (b-a) * product of equality indicators from j=a to b, times start indicator. This is essentially run-length encoding. The product term kills the value once a different outcome appears. The second factor 1[Y_i(a-1) != Y_ia] ensures only streak starts count. However, there is a subtle gray zone: if a=1, Y_i(0) is undefined. The paper doesn't specify boundary handling. Similarly, G_i(a) counts zeros between ones but is zeroed if Y_ia=0, meaning it only counts gaps initiated at a success. Squared sums emphasize long runs/gaps quadratically, which is sensitive to outliers but also means a single very long streak dominates the metric.

Permutation: 1,000 block permutations. For pitchers at-bat level, permute innings, keep at-bats within inning fixed. For swing-level, permute at-bats, keep pitches within at-bat fixed. For hitter at-bat level, naive permutation. Gray zone: the assumption that consecutive at-bats for hitters are independent is strong; game-state dependence (pitcher fatigue, leverage) is ignored. Block permutation preserves within-inning dependence but assumes exchangeability of innings, which may fail due to pitcher-batter matchup rotation, platoon advantages, or weather changes across the game.

ISP: percentile rank among 1,000 simulated scores. If observed score is at 95th percentile, only 5% of permutations were streakier. Boundaries: ISP = 0 or 1 possible with discrete permutations; resolution is 1/1000 = 0.001. Singularity: if a player has zero successes in a season (e.g., no XBH), Streak Score is trivially zero? Actually if all zeros, Streak Score would be n^2 (one streak of length n). Spacing Score would be undefined or zero because no successes to gap between. The paper excludes such extreme cases via PA/IP cutoffs but rare outcomes like XBH for weak hitters may have few successes, making Spacing Score noisy.

Breakdown regimes: m > n (rolling window larger than sequence); n small (<50); p near 0 or 1 (degenerate Bernoulli); block size 1 reduces to naive permutation; block size = n reduces to no permutation.

I'll write this in detail, aiming for 400+ words.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal LaTeX equations:
Rolling mean:
\[ \text{RM}_i(m,k) = \frac{1}{m} \sum_{j=k}^{k+m-1} Y_{ij} \]

Streak length:
\[ S_i(a) = \max_{b>a} (b-a) \prod_{j=a}^{b} \mathbf{1}[Y_{ia} = Y_{ij}] \mathbf{1}[Y_{ia} \neq Y_{i(a-1)}] \]
Wait, looking at source: product from j=a to b of 1[Y_ia = Y_ij] 1[Y_ia != Y_i(a-1)]. Actually the source text has:
\[ S_i(a) = \max_{b > a} (b - a) \prod_{j=a}^{b} \mathbf{1}[Y_{ia} = Y_{ij}] \mathbf{1}[Y_{ia} \neq Y_{i(a-1)}] \]
Wait the formatting in source:
\[
S_i(a) = \max_{b > a} (b - a) \prod_{j=a}^{b} 1[Y_{ia} = Y_{ij}] 1[Y_{ia} \neq Y_{i(a-1)}]
\]
Actually the product term: 1[Y_ia = Y_ij] for j=a to b, times 1[Y_ia != Y_i(a-1)]. But the second indicator doesn't depend on j, so it's outside effectively. Anyway, I'll reproduce faithfully.

Gap:
\[ G_i(a) = \max_{b > a} (b - a) \prod_{j=a}^{b} Y_{ia} (1 - Y_{ib}) \]
Wait source:
\[ G_i(a) = \max_{b > a} (b - a) \prod_{j=a}^{b} Y_{ia}(1 - Y_{ib}) \]
Hmm that seems odd because product over j includes Y_ia which is constant wrt j. I'll write as presented but maybe note it. Actually looking carefully at source text rendering:
\[
G_i(a) = \max_{b > a} (b - a) \prod_{j=a}^{b} Y_{ia}(1 - Y_{ib})
\]
This looks like a transcription artifact; probably intended as something else. But I must cite verbatim or formalize sensibly. I'll present it as in the paper and note the interpretation.

Streak Score:
\[ \text{Streak Score}_i = \sum_{j=1}^{n} S_i(j)^2 \]
Spacing Score:
\[ \text{Spacing Score}_i = \sum_{j=1}^{n} G_i(j)^2 \]

ISP:
\[ \text{ISP}_i = \frac{1}{1000} \sum_{k=0}^{999} \mathbf{1}[\text{Sim Streak Score}_{ik} \le \text{Streak Score}_i] \]
(Note: source has typo with k=0 to 1? It says sum k=0=001 which is likely k=0 to 999 or k=1 to 1000. I'll write k=1 to 1000.)

Units: Y_ij ∈ {0,1} dimensionless Bernoulli indicator. Scores are counts squared, so units of "outcome-count squared" (dimensionless). ISP is a percentile in [0,1]. Rolling mean is a proportion in [0,1]. m is in observations (at-bats or pitches). n is total observations.

Page citations for each equation block.

Breakdown: exact singularity regimes:
- S_i(a) undefined if Y_i(0) missing at a=1.
- G_i(a) = 0 if Y_ia = 0 by definition, so only successes seed gaps.
- If n_successes = 0, Spacing Score has no positive terms; Streak Score = n^2 (all failures one streak).
- If n_successes = n, Streak Score = n^2, Spacing Score undefined/zero.
- Permutation p-value granularity: 1/1000; cannot resolve below 0.001.

RETROCAUSAL_GENEALOGY:
Lineage: Albert (2008) permutational inference for hitting streaks; Albert (2013, 2014) spacings for rare events; McCotter (2008) game-level streaks > chance; Albright (1993) streakiness not persistent over 4 years; Bock et al. (2012) contagion; Arthur & Matthews (2017) HMM on fastball velocity; Evanko (2020) no pitcher streakiness at sample level; Gamble (2015) previous 3 starts no predictive value. Feder extends to pitch/swing granularity and both hitters/pitchers with block permutation.

Multi-week traps: 
1. Single-season window (2023) captures within-season volatility but cannot separate skill from luck; a "streaky" April may regress by September.
2. Survivorship: only qualified hitters (500 PA) and pitchers (100 IP) included; excludes September call-ups and injured players, biasing toward established players whose streakiness may differ.
3. Cross-season instability: Albright found no persistence over 4 years; thus labeling a player "consistent" in 2023 does not predict 2024.
4. The "hot hand" fallacy vs actual streakiness: fans may perceive momentum where none exists; ISP controls for own baseline but not league context.
5. Multi-week trap: rolling mean m=25 is roughly one month of at-bats; a player can look streaky due to a 2-week slump followed by a 2-week hot streak, which the metric captures but may not reflect underlying skill changes.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: When a player is identified as streaky (ISP near 1), opposing teams may adjust (pitch around them, shift), inducing a regression to the mean not captured by internal permutation. Conversely, consistent players (ISP near 0) may be attacked differently.
Counter-trap: The ISP itself is a counter-factual null (compare to self-permuted sequences). If a player believes they are "hot," they may alter approach (swing at worse pitches), creating a self-fulfilling streak that the metric detects but the permutation null cannot reject because the null breaks temporal order. This is a reflexive trap: the measurement changes the behavior it measures.
Clock: Rolling window m=25 observations acts as a temporal clock. At-bat level, 25 PAs ≈ 1 week. Swing level, 25 swings ≈ 1-2 games. The clock's granularity determines what counts as a streak. If the true habit regression timescale is longer (e.g., mechanical slump over 3 weeks), m=25 may split it into artificial streaks.
Recursive ToM: Pitcher and batter model each other's streakiness. If batter thinks pitcher is streaky (high swing-contact ISP), they may be more selective; pitcher may exploit perceived batter cold streak. This second-order reasoning is outside the binary Y_ij model.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: Pitch velocity, spin rate, release point, extension vary within and across games. These are continuous physical drivers of binary contact/strikeout outcomes. Block permutation assumes innings are exchangeable, but a pitcher's velocity may decline over the game (time-through-the-order penalty), violating exchangeability across early vs late innings.
Biomechanical layer: Batter swing mechanics, fatigue, micro-injuries over a 162-game season. A hitter's contact rate may drift due to cumulative load, making non-adjacent at-bats non-exchangeable even within the same day.
Weather layer: Wind, temperature, humidity, air density affect fly ball distance and XBH probability. A game in Coors Field vs. Citi Field changes the base rate of XBH independently of player streakiness. Permuting at-bats across games (or innings) ignores stadium fixed effects.
Umpire layer: Strike zone variability by umpire affects strikeout and walk rates. If an umpire has a wide zone for a 3-game series, strikeouts cluster; block permutation at inning level may preserve this but naive hitter permutation does not.
Veto proof: To veto a streakiness claim, one must show the binary sequence's clustering is fully explained by these exogenous layers. The paper acknowledges residual dependence [PAGE 449-450] but does not model weather or biomechanical covariates. Therefore ISP reflects "residual streakiness after controlling for own success rate and block structure," not pure skill consistency.

RLVR_COUNTERFACTUAL_VETOES:
3 verifiable scenarios with predictions.

Scenario 1: Permutation null validity.
Veto condition: If outcomes within permuted blocks are not exchangeable (e.g., pitcher velocity decays across innings), then ISP for random-like players should deviate from Uniform(0,1). 
Test: Apply the same block permutation to simulated i.i.d. sequences with a deterministic velocity decay trend embedded. 
Prediction: ISP distribution will skew away from 0.5 (e.g., mode near 0.8), producing false streakiness. If empirical top pitchers' ISP skew persists after regressing out velocity decay, the veto fails.

Scenario 2: Rare outcome spacing singularity.
Veto condition: For XBH with very few successes (e.g., <20 in a season), Spacing Score is dominated by a single gap; ISP resolution is coarse and sensitive to one at-bat reordering.
Test: Compute Spacing Score ISP for hitters with <15 XBH vs >40 XBH using bootstrap resampling of at-bats within season.
Prediction: Low-XBH hitters will show bimodal ISP (0 or 1) with high variance; veto applies to any XBH streakiness claim below n_XBH threshold.

Scenario 3: Cross-season consistency persistence.
Veto condition: If ISP in 2023 does not predict ISP in 2024, then "consistency" is a within-season descriptive statistic, not a trait.
Test: Match qualified 2023 hitters/pitchers to 2024 season; correlate 2023 ISP with 2024 ISP for same outcome.
Prediction: Correlation near zero (consistent with Albright 1993). If |r| < 0.10, veto the use of 2023 ISP as a predictive consistency trait; it remains only a descriptive label for 2023.

Need to ensure total words >= 1000. Let's estimate. THINK_TRACE 400+. SOURCE_OPERATORS 300+. RETROCAUSAL 200+. RECURSIVE 150+. CROSS_LAYER 200+. RLVR 150+. Total ~1400. Good.

No betting lines. Check for "odds", "spread", etc. None.

Verbatim quotes: I'll include a few short quotes from source with page markers.

Let's draft carefully.

One thing: The prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include verbatim quotes where useful, with [PAGE N].

Let's write the final response in the exact XML structure. No markdown outside? The user wants exact XML sections. I'll output just the XML sections.

Let's compose.

THINK_TRACE content (aiming 450 words):

Start: The paper formalizes streakiness as deviation from exchangeability in a binary sequence...

Include equations inline? The THINK_TRACE can reference them but formal LaTeX goes in SOURCE_OPERATORS. I can mention them conceptually.

Gray-zone audit: boundary condition Y_i(0), product term, rare outcomes, block exchangeability, ISP resolution.

Let's write.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page cites.

RETROCAUSAL_GENEALOGY: Cite authors and pages where they are mentioned in source: Albert 2008 [PAGE 44-48], McCotter [PAGE 53-54], Albright [PAGE 55-56], Bock [PAGE 57-58], Arthur & Matthews [PAGE 66-70], Evanko [PAGE 71-72], Gamble [PAGE 64-65].

RECURSIVE_THEORY_OF_MIND: Discuss reflexivity.

CROSS_LAYER_VETO_ADJUDICATION: Discuss veto layers.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.

I need to be careful not to mention betting. Words like "probability" are fine. "Odds" is banned. "Spread" banned. "Moneyline" banned. "Total" in betting context banned, but "total outcomes" is okay maybe. I'll avoid "total" as a noun for betting.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central mathematical object is a binary sequence \(Y_{ij} \in \{0,1\}\) for player \(i\) at observation \(j\), where \(j\) indexes plate appearances or swings depending on outcome. Streakiness is operationalized through two functionals of this sequence: Streak Score and Spacing Score. The first step is the rolling mean \(\text{RM}_i(m,k) = \frac{1}{m}\sum_{j=k}^{k+m-1}Y_{ij}\) [PAGE 107], which provides a local success-rate estimate over a window of \(m\) observations. Intuitively, large fluctuations in \(\text{RM}_i(m,k)\) across \(k\) signal streakiness; small fluctuations signal consistency. However, visual inspection is insufficient, so the paper defines run-length statistics.

The streak-length operator \(S_i(a)\) [PAGE 128] takes the maximum over \(b>a\) of \((b-a)\) multiplied by a product of equality indicators from \(j=a\) to \(b\) and a start-of-streak indicator \(\mathbf{1}[Y_{ia} \neq Y_{i(a-1)}]\). This construction has an important gray zone at the left boundary: \(Y_{i(0)}\) is undefined, so the paper does not specify how \(a=1\) is handled. If the first observation is treated as a streak start by default, edge effects can inflate Streak Score for players whose season begins with a run. Conversely, if \(a=1\) is excluded, initial streaks are silently dropped. The gap operator \(G_i(a)\) [PAGE 134] counts zeros between consecutive successes, but is defined to be zero whenever \(Y_{ia}=0\); thus only successes seed gaps, and the squared sum \(\sum G_i(j)^2\) is dominated by the single longest gap in rare-outcome settings.

Streak Score \(\sum S_i(j)^2\) and Spacing Score \(\sum G_i(j)^2\) are absolute, not relative, measures. To obtain relative streakiness, the paper runs 1,000 permutations and computes the Internal Streakiness Percentile (ISP) [PAGE 206] as the fraction of simulated scores at or below the observed score. The permutation scheme is stratified: naive shuffling of at-bats for hitters [PAGE 192], block permutation of innings for pitcher at-bat outcomes [PAGE 188], and block permutation of at-bats for swing-level outcomes [PAGE 190]. The critical assumption is exchangeability within blocks. For hitters, the paper assumes consecutive at-bats are sufficiently independent [PAGE 192], ignoring leverage, pitcher fatigue, and game-state dependence. For pitchers, inning-level blocking preserves within-inning at-bat ordering but assumes innings are exchangeable, which fails if velocity decays across the game or if platoon advantages rotate non-randomly.

Breakdown regimes are exact. If \(m > n\), the rolling mean is undefined. If a player records zero successes (e.g., no XBH), Spacing Score degenerates because no gap can be initialized at a success, while Streak Score collapses to \(n^2\) (one failure streak of length \(n\)). If all observations are successes, Spacing Score is undefined and Streak Score again equals \(n^2\). ISP resolution is limited to \(1/1000 = 0.001\); percentile ranks of 0.000 or 1.000 are possible but carry discrete granularity. The simulation study [PAGE 232-265] validates the metric against random, streaky, and consistent hitter types at baseline rates of 0.3 and 0.1, but it does not test the boundary case where \(n_{\text{successes}} < 10\), a regime relevant to XBH for weak hitters. Finally, ISP is internal: each player is compared only to permuted versions of himself [PAGE 215], so cross-player comparisons of ISP are not statistically calibrated against a common null. This creates a gray zone when declaring Acuña "the most consistent" hitter: his ISP is low relative to his own permuted sequences, but we cannot infer he is more consistent than another player whose ISP is slightly higher yet drawn from a different baseline distribution.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators from Feder (2024), Wharton Sports Analytics Journal. Page markers reference the pdftotext line/page headers in the supplied source.

Binary outcome model: Let \(Y_{ij}\) denote a binary outcome for player \(i\) during observation \(j\), with 1 indicating success and 0 indicating failure. For hitters, \(j\) indexes plate appearances; for swing contact, \(j\) indexes swings; for pitchers, \(j\) indexes at-bats or pitches by outcome. Source: [PAGE 100-105]. Verbatim: "let \(Y_{ij}\) denote a binary outcome for player \(i\) during observation \(j\), with 1 indicating a success and 0 indicating a failure."

Rolling mean of size \(m\) beginning at observation \(k\):
\[
\text{RM}_i(m,k) = \frac{1}{m} \sum_{j=k}^{k+m-1} Y_{ij}
\]
Units: dimensionless proportion in \([0,1]\); \(m\) is measured in observations (plate appearances or swings). Source: [PAGE 107-109].

Streak length beginning at observation \(a\):
\[
S_i(a) = \max_{b > a} (b - a) \left( \prod_{j=a}^{b} \mathbf{1}[Y_{ia} = Y_{ij}] \right) \mathbf{1}[Y_{ia} \neq Y_{i(a-1)}]
\]
Units: count of consecutive observations, dimensionless integer \(\ge 0\). The product enforces run contiguity; the second indicator forces \(S_i(a)=0\) for non-initial observations inside an existing streak. Source: [PAGE 128-132].

Gap between consecutive successes beginning at \(a\):
\[
G_i(a) = \max_{b > a} (b - a) \prod_{j=a}^{b} Y_{ia}(1 - Y_{ib})
\]
As transcribed in the source; operationally this counts the number of failures between success \(a\) and the next success \(b\), and is zero if \(Y_{ia}=0\). Source: [PAGE 133-136].

Streak Score:
\[
\text{Streak Score}_i = \sum_{j=1}^{n} S_i(j)^2
\]
Spacing Score:
\[
\text{Spacing Score}_i = \sum_{j=1}^{n} G_i(j)^2
\]
Units: squared observation counts; dimensionless but heavily weighted toward long runs or long gaps because of the quadratic. Source: [PAGE 141-147].

Permutation distribution and ISP. Let \(\text{Sim Streak Score}_{ik}\) denote the score on permuted sequence \(k\), \(k=1,\dots,1000\). Then:
\[
\text{ISP}_i = \frac{1}{1000} \sum_{k=1}^{1000} \mathbf{1}[\text{Sim Streak Score}_{ik} \le \text{Streak Score}_i]
\]
with an analogous definition for Spacing Score. ISP is a percentile in \([0,1]\); values near 0 indicate abnormal consistency, values near 1 indicate streakiness relative to the player's own permuted sequences. Source: [PAGE 204-215]. Verbatim: "Percentile numbers closer to zero mean that the player is more consistent while a number closer to one (100%) would mean that the player is streakier." [PAGE 213-214].

Sampling scheme. For at-bat-level outcomes for hitters, naive permutation of the full sequence is used [PAGE 192-193]. For pitcher at-bat-level outcomes, innings are permuted while within-inning at-bat order is fixed [PAGE 188-190]. For swing-level outcomes for both batters and pitchers, at-bats are permuted while within-at-bat pitch order is fixed [PAGE 190-191]. 1,000 permutations are run per player per outcome [PAGE 183-184].

Data filters: batters with \(\ge 500\) plate appearances; pitchers with \(\ge 100\) innings pitched; final sample 136 batters and 127 pitchers, 2023 MLB season. Source: [PAGE 224-226].

Breakdown / singularity regimes:
1. \(m > n\): rolling mean undefined.
2. \(n_{\text{successes}} = 0\): Spacing Score has no positive gap terms; Streak Score \(= n^2\).
3. \(n_{\text{successes}} = n\): Spacing Score undefined/degenerate; Streak Score \(= n^2\).
4. ISP granularity: minimum non-zero increment is \(0.001\); cannot distinguish evidence below \(p=0.001\) or above \(p=0.999\) with this simulation count.
5. Block-permutation size \(=1\) recovers naive exchangeability; block size \(=n\) recovers the identity permutation (no test power).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits inside a long statistical lineage of streakiness research. Albert (2008) introduced permutational inference for 2005 MLB hitting streaks across hits/outs, home runs, and strikeouts, concluding some players exceeded random-exchangeability expectations [PAGE 44-49]. Albert (2013, 2014) extended this to spacings for rare outcomes such as home runs, precisely the motivation for using Spacing Score on extra-base hits here [PAGE 141-143, References 4-5]. McCotter (2008) found more game-level hitting streaks than chance over 1957–2006 [PAGE 53-54], while Albright (1993) found streakiness within a season but not persistent across a four-year window [PAGE 55-56]. Bock et al. (2012) proposed contagion: teammates of a streaky hitter perform better [PAGE 57-58]. The hot-hand literature more broadly includes Reifman (2012), Bar-Eli et al. (2006), and Cohen (2020) [PAGE 60-61].

For pitchers, the literature is thinner and more conflicted. Gamble (2015) found a pitcher's previous three starts had little predictive value for the next start [PAGE 64-65], a direct multi-week trap: short-form streakiness does not project forward. Arthur and Matthews (2017) used a Hidden Markov Model on fastball velocity to classify hot/normal/cold states, notable because the outcome is pitch-level rather than binary at-bat or game-level [PAGE 66-70]. Evanko (2020) studied 50 pitchers from 2019 and found little evidence of a hot hand [PAGE 71-72]. Feder's contribution is to apply permutational inference—previously reserved for hitters—to pitchers and to more granular pitch/swing outcomes [PAGE 74-77].

Multi-week traps specific to this paper: (1) The sample is a single season, 2023. A player flagged as streaky in April may regress by September; the metric cannot separate a persistent habit from a transient month-long slump. (2) The qualified-player cutoffs (500 PA, 100 IP) induce survivorship bias, excluding rookies, injured players, and September call-ups whose streakiness profiles may differ systematically [PAGE 224-226]. (3) Albright's four-year non-persistence result implies that labeling Acuña "consistent" in 2023 does not imply 2024 consistency [PAGE 55-56]. (4) The rolling window \(m=25\) is roughly one month of plate appearances; a two-week cold snap followed by a two-week hot stretch generates a high Streak Score even if the underlying skill is constant, creating a within-season false positive for streakiness. (5) Because ISP is internal, a player with a low true success rate but clustered successes may rank streakier than a high-success player with dispersed outcomes, confounding base-rate differences with genuine temporal dependence.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression refers to the tendency for a player identified as streaky to undergo strategic adjustment by opponents. If a hitter's ISP for swing contact is near 1 (streaky contact), opposing pitchers may pitch around him or exploit perceived chase windows; if a pitcher's strikeout ISP is near 1, batters may sit on specific pitches in perceived "cold" windows. These adaptations create an exogenous regression-to-the-mean pressure that the internal permutation null cannot see, because the null only reshuffles the player's own sequence and holds the competitive environment fixed.

The counter-trap is reflexive: the ISP itself becomes part of the information environment. If a coaching staff labels a pitcher as "streaky" based on a high ISP, they may alter usage (skip starts, shorten hook), changing the very at-bat sequences that generated the ISP. The metric therefore measures residual temporal clustering after self-permutation, not the causal stability of a trait. A player who believes he is "hot" may swing at worse pitches, mechanically increasing variance and confirming the streak ex post; a player labeled "cold" may over-correct mechanically, inducing a slump that the rolling mean \(m=25\) then registers as a new streak regime.

The clock is the rolling window and the season calendar. With \(m=25\) observations, one "tick" is approximately one week of plate appearances for a regular hitter or one to two games of swings. The clock's resolution determines what counts as a streak: a mechanical flaw that unfolds over three weeks may be sliced into two artificial 25-observation regimes, one cold and one hot, inflating Streak Score. Conversely, a true habit regression that operates over a single game is invisible to a 25-observation window because the signal is averaged out.

Recursive theory of mind enters the pitcher-batter dyad. A batter models the pitcher's stuff state (streaky vs. consistent) and adjusts selectivity; the pitcher models the batter's contact streakiness and adjusts sequencing. This second-order reasoning lies outside the binary \(Y_{ij}\) framework, which treats each outcome as an exchangeable draw conditional only on the player's marginal rate. The paper's block permutation acknowledges game-state dependence [PAGE 186-195], but it does not model the strategic update rule of opposing agents, so the ISP captures "streakiness relative to self-shuffled history," not "streakiness relative to an adversarial equilibrium."
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. Pitch outcomes are driven by continuous physical variables: release velocity, spin rate, release-point extension, approach angle, and break. These vary within a game (time-through-the-order fatigue) and across games (biomechanical load). Block permutation of innings assumes innings are exchangeable, but a pitcher's velocity often declines from the first to the fifth inning, violating exchangeability across blocks. If early-inning and late-inning at-bats are permuted into each other, the null destroys a real physical trend and may artificially inflate the observed Streak Score relative to the null, producing a false streakiness signal.

Biomechanical layer. Hitters accumulate micro-fatigue and mechanical drift over a 162-game season. Swing mechanics in April differ from September due to cumulative load, minor injuries, and workload management. Naive permutation of hitter at-bats [PAGE 192] assumes a April at-bat is exchangeable with a September at-bat, which is biomechanically implausible. Consecutive at-bats may be more similar than distant ones not because of streakiness but because of shared biomechanical state. This residual dependence [PAGE 449-450] is acknowledged but not modeled.

Weather layer. Wind velocity and direction, temperature, humidity, and air density alter carry distance and thus the probability of extra-base hits and fly-ball outs. A Coors Field home game has a different XBH base rate than a Citi Field night game. Permuting plate appearances across games without stadium fixed effects mixes regimes with different physical base rates, making the null too wide or too narrow depending on scheduling. The same applies to swing contact: cold temperatures reduce batted-ball exit velocity and contact quality independently of hitter approach.

Umpire layer. Strike-zone size varies by umpire and by count, affecting strikeout and walk rates. A three-game series with a wide-zone umpire produces strikeout clusters that look streaky but are environmentally driven. Inning-level blocking for pitchers may partially preserve this if the same umpire works consecutive innings, but cross-game permutation does not.

Veto adjudication rule: A streakiness claim is vetoed if the clustering of \(Y_{ij}\) is fully explained by any one of these exogenous layers after conditioning on the player's marginal success rate. The paper's ISP measures residual streakiness relative to block-permuted history; it does not partial out velocity decay, weather, or umpire effects. Therefore a high ISP should be interpreted as "unexplained by own success rate and block structure," not as "proof of psychological momentum or persistent skill consistency." To vindicate the metric, one must show that physical, biomechanical, and weather covariates do not account for the observed run-length excess.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions.

Veto Scenario 1 — Permutation null validity under physical decay.
Null condition: If pitcher outcomes exhibit deterministic velocity decay across innings, then blocks are not exchangeable, and ISP will be biased toward streakiness even for a constant-talent pitcher.
Test: Simulate 1,000 pitcher seasons with constant strikeout probability \(p=0.25\) but embedded velocity decay that reduces contact quality linearly across innings; apply the paper's inning-block permutation.
Prediction: The empirical ISP distribution for these null pitchers will skew right (mode > 0.70), generating false streakiness. If real 2023 pitcher strikeout ISPs remain skewed after regressing out measured fastball velocity decay, the veto fails and the streakiness signal is robust to this physical confound.

Veto Scenario 2 — Rare-outcome spacing singularity.
Null condition: For extra-base hits, hitters with fewer than 15 XBH in a season have spacing distributions dominated by a single gap; Spacing Score ISP becomes discontinuous and non-identifiable.
Test: Stratify the 136 qualified hitters by XBH count (<15 vs >40) and compare ISP variance and bootstrap confidence intervals for Spacing Score.
Prediction: Low-XBH hitters will show bimodal ISP mass near 0 and 1 with wide bootstrap intervals, while high-XBH hitters show diffuse Uniform-like distributions. Veto: any league-wide claim about XBH streakiness [PAGE 273-276] is invalid unless restricted to hitters above a minimum XBH threshold (e.g., ≥25).

Veto Scenario 3 — Cross-season trait persistence.
Null condition: If ISP is a within-season descriptive statistic rather than a stable trait, then 2023 ISP should not predict 2024 ISP for the same player and outcome.
Test: Match qualified 2023 players to qualified 2024 seasons; compute Spearman correlation between 2023 ISP and 2024 ISP for strikeouts (pitchers) and on-base events (hitters).
Prediction: Consistent with Albright (1993) [PAGE 55-56], correlation will be near zero (|r| < 0.10). Veto: 2023 ISP cannot be used as a predictive consistency trait for roster construction; it remains only a retrospective label for the 2023 season unless persistence is demonstrated.
</RLVR_COUNTERFACTUAL_VETOES>