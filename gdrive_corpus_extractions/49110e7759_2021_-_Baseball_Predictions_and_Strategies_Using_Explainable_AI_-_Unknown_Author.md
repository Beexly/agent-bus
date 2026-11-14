---
source: "2021 - Baseball Predictions and Strategies Using Explainable AI - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6686
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about baseball predictions using explainable AI. I need to produce a response with specific XML sections:

1. THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words)
2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
- >= 1,000-WORD DEPTH across sections.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

The source text provided is from pages 1-20 (though the user says PAGES: 14, the text seems to go up to page 20 based on content markers). I need to cite exact page markers from the text. The text has page numbers like 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. But user says PAGES: 14. Maybe they mean the PDF has 14 pages? But the text shows up to 20. Wait, looking at the text, there are page markers embedded: "1 ", "2 ", etc. Actually looking carefully, after section text there are numbers like "1 " on page 1, "2 " on page 2, etc. The last page marker is "20". But the user explicitly says PAGES: 14. I should probably cite using the page numbers visible in the text. Since the text goes up to page 20, I'll cite those exact numbers where relevant. But the user said PAGES: 14—maybe they mean the source document is 14 pages? However the text includes pages up to 20. I will cite page numbers as they appear in the text (e.g., [PAGE 5], [PAGE 10], etc.) because the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes."

Wait, looking at the raw text, there are page breaks indicated by numbers alone on lines:
- After Abstract/Intro: "1 "
- After Section 3: "2 "
- After Section 4.2 Table 1: "3 "
- After Section 4.3 footnote: "4 "
- After Section 5 start: "5 "
- After Section 6 start: "6 "
- After Section 6.1: "7 "
- After Section 6.2 Figure 4: "8 "
- After Section 7.2 footnote 4: "9 "
- After Section 7.3: "10 "
- After Table 3: "11 "? Actually after Table 3 it says "10 " then Table 3 then "11 "? Let me look: "10 " appears before Table 3. Then after Table 3 maybe "11"? Actually text says:
"Calculating the RMSE of our predictions vs. actual runs scored for each of the last five MLB seasons, we get the following results (the lower, the better): 


10 


**_Table 3: ...**"

Then after Table 3 discussion:
"11 "? Let's see: "This lineup projects for 0.54493 runs in the inning..." then "11 "? Actually the text says:
"This lineup projects for 0.54493 runs in the inning, an increase of 6.7%... 


11 


## **8. Open Source Code and Demos**"

Then "12 " before Section 9.
Then "13 " before Section 10.
Then "14 " before References.
Then "15 " before Appendix Table 5 details.
Then "16 " after Exit Velocity.
Then "17 " after Figures 5-8.
Then "18 " after Figures 9-10.
Then "19 " after Table 6.
Then "20 " after Figure 11.

So pages go up to 20. The user says PAGES: 14 but maybe that's a mistake or refers to something else. I will cite pages as they appear in the provided text. Since I must cite exact [PAGE N] markers, I will use [PAGE 5], [PAGE 10], etc.

Important: No betting lines. No toy equations. Use formal LaTeX equations with units and assumptions.

Structure:
- THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive things logically, audit assumptions, note gray zones (e.g., imputation thresholds, Markov adjustments, undershoot scaling, SHAP limitations).
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Include cross-entropy loss, wOBA definition maybe, log5/Haechrel equation? The paper gives Haechrel's equation but it's not fully shown in text (it says "Haechrel’s equation is:" but then blank? Actually the text says "Haechrel’s equation is:" then nothing visible? Looking: "Haechrel’s equation is: \n\n\n\nHaechrel’s version..." So equation is missing from text extraction. I should not invent it. I can mention it's absent from extracted text (gray zone). I can define categorical cross-entropy: $H(p,q) = -\sum_{i=1}^{21} p_i \log q_i$. Units: nats or bits? Typically nats with natural log. wOBA is dimensionless (weighted average). RMSE in runs. Transition matrix $P_{ij}$. Markov chain state space size: $3 \times 2^3 = 24$ states. Plate appearance outcome space: 21 classes. Temperature in °F (79°F) but SI would be Kelvin or Celsius; I can convert 79°F ≈ 299.26 K or 26.11°C. Pitch count dimensionless count. Inning dimensionless ordinal. Net score dimensionless runs.

- RETROCAUSAL_GENEALOGY: Historical lineage: Bill James log5, Haechrel 2014, Shapley 1953 Nobel 1992, Lundberg & Lee 2017, Pankin 1987, Bukiet 1997, Tango RE24, The Book 2006. Multi-week traps: imputation based on 365-day/21-day windows causing look-ahead or staleness; 60/20/20 split by calendar date (temporal leakage?); undershoot adjustment using previous year (retro-causal scaling).

- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret: How managers/analysts regress to crisis habits (over-reliance on log5 for everyday players), counter-trap (Singlearity-PA's explainability as a counter to black-box distrust), clock (game context: inning, pitch count, base state as temporal constraints).

- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Weather: only temperature (1 input), no humidity/wind (noted as future work). Biomechanical: exit velocity (max and avg), GB/FB, position as speed proxy. Physical: park factors (Coors vs Citi 40% more hits). Veto conditions: missing minor league stats, fielding quality, stolen bases/wild pitches not in Markov transitions.

- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or just counterfactual vetoes. I need 3 scenarios where the model would be vetoed, with predictions.

Word count: >=1000 words total across sections. I'll aim for ~200-300 words per section to be safe.

Let's draft carefully.

Section 1: THINK_TRACE (>=400 words)
- Multi-hop derivation: Start from input space (87 features), through 2 hidden layers of 80 nodes each (footnote page 4), output 21 probabilities via softmax (implied by categorical cross-entropy). Loss: categorical cross-entropy.
- Derive parameter count roughly: Input 87 -> hidden1 80: 87*80 + 80 = 7040. Hidden1 80 -> hidden2 80: 80*80 + 80 = 6480. Hidden2 80 -> output 21: 80*21 + 21 = 1701. Total ~15,221 trainable parameters. This is a formal derivation, not a toy equation. It's architecture math.
- Data: 1.72M PAs, 22,740 games, 1,694 dates. Split 60/20/20 by date. Temporal split avoids leakage but creates distribution shift if roster changes.
- Gray zones: Imputation booleans with minima (40/20/10 PAs). If below threshold, league average imputed. This creates a discontinuity at exactly 40 PAs. The "Everyday players" category requires >=502 PAs in last 365 days, yet imputation minimum is 40. Mismatch between model's imputation floor and log5's 502 floor.
- Markov adjustment: systematic undershoot 12-15%. Scaled by previous year's undershoot (e.g., 2016 undershoot 15.3% applied to 2017). This is a retro-causal correction; assumes stationarity of offensive context year-over-year. Breaks down if rule changes, ball changes, or shift restrictions alter run environment.
- SHAP: local and global importance. Shapley values require exponential coalition evaluations; approximations used (KernelSHAP or DeepSHAP not specified). Gray zone: exact SHAP approximation method not stated.
- RE24 baseline: uses prior season's RE24 matrix. Singlearity-MarkovAdjusted beats RE24 overall (0.98192 vs 0.98412 RMSE) but margin is tiny (~0.22%). Gray zone: practical significance vs statistical significance; RMSE in runs per half-inning.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS
- Define spaces:
  - Input feature vector $\mathbf{x} \in \mathbb{R}^{87}$.
  - Output probability simplex $\Delta^{20} = \{ \mathbf{p} \in [0,1]^{21} : \sum_{k=1}^{21} p_k = 1\}$.
  - Categorical cross-entropy: $L(\mathbf{y}, \mathbf{p}) = -\sum_{k=1}^{21} y_k \ln p_k$, where $\mathbf{y}$ is one-hot.
  - Architecture: $f(\mathbf{x}) = W_2 \sigma(W_1 \mathbf{x} + \mathbf{b}_1) + \mathbf{b}_2$ with two hidden layers? Actually with activation between. Let's say two hidden layers of 80 nodes each with ReLU (or unspecified activation). Footnote page 4: "2 hidden layers of 80 nodes each".
  - Parameter count derivation: $N_{\theta} = (87 \times 80 + 80) + (80 \times 80 + 80) + (80 \times 21 + 21) = 15,221$.
  - wOBA: dimensionless, typically scaled to resemble OBP. Not given exact formula in text, but we can note it's an aggregated statistic computed from predicted PA outcomes.
  - RMSE: $\text{RMSE} = \sqrt{\frac{1}{N}\sum_{n=1}^{N} (\hat{R}_n - R_n)^2}$ in units of runs.
  - Markov transition matrix: $\mathbf{P} \in [0,1]^{24 \times 24}$, rows sum to 1. State space $\mathcal{S} = \{0,1,2\} \times \{0,1\}^3$ (outs $\times$ base occupancy), cardinality 24.
  - Temperature: 79°F = 26.11°C = 299.26 K (SI conversion). Single weather input.
  - Page citations: [PAGE 4] for architecture/loss, [PAGE 5] for data split and categories, [PAGE 10] for RMSE table and undershoot, [PAGE 3] for feature table, [PAGE 14] for imputation minima, [PAGE 9] for Markov assumptions.
  - Breakdown regimes: log5 breaks down when either player <502 PAs (82.1% of PAs 2011-2020 per [PAGE 2]). Singlearity-PA imputation breaks down below 40/20/10 PA minima [PAGE 14]. Markov adjustment breaks down under non-stationary run environments.

Section 3: RETROCAUSAL_GENEALOGY
- Lineage: Bill James log5 [PAGE 2]; Haechrel 2014 extension to 7 outcomes [PAGE 2]; Shapley 1953, Nobel 1992 [PAGE 6]; Lundberg & Lee 2017 SHAP [PAGE 6, Reference 5]; Pankin 1987 Markov [PAGE 9, Reference 10]; Bukiet et al. 1997 [PAGE 9, Reference 11]; Tango RE24 [PAGE 9, Reference 6]; Tango et al. 2006 The Book [PAGE 11, Reference 12].
- Multi-week traps: The 365-day/21-day rolling windows create a "staleness trap" where injuries or recent performance shifts are not captured until windows refresh. The calendar-date split (60/20/20) creates a "temporal leakage-adjacency trap": validation and test dates are contiguous blocks, so if a player gets injured or traded mid-block, the model trains on future information relative to that player's timeline? Actually split by date means train dates are before validation dates? It says 60% dates for training, 20% validation, 20% test. Likely chronological. So no look-ahead across dates, but within-date roster changes are not modeled.
- Retro-causal adjustment: scaling 2017 predictions by 2016 undershoot [PAGE 10]. This assumes the 2016 error structure is causally relevant to 2017, which is a retro-causal assumption (using future-to-past relative to model training? Actually using past to adjust future predictions, but the error metric itself is derived from actuals known only after the season).

Section 4: RECURSIVE_THEORY_OF_MIND
- Crisis habit regression: Managers under pressure revert to RE24 or log5 because they are interpretable and legacy-validated, even when Singlearity-PA outperforms [PAGE 5, 10]. This is habit regression under crisis (close game, late inning).
- Counter-trap: SHAP explanations are the counter-trap to black-box distrust; by providing local feature importance (e.g., Judge vs. Miley [PAGE 7]), the model becomes defensible to management/fans/press [PAGE 6].
- Clock: Game context inputs (inning, pitch count, base state, net score) form a temporal clock. The Markov chain operates on half-inning transitions; the first-inning focus [PAGE 10] avoids pinch-hitter/relief complications, effectively stopping the clock at inning 1 to reduce state-space explosion.

Section 5: CROSS_LAYER_VETO_ADJUDICATION
- Physical layer: Park factors [PAGE 3, 15]. Coors Field 40% more hits than Citi Field [PAGE 2]. Veto: if park factor data is stale (>3 years average used), predictions vetoed for extreme venues.
- Biomechanical layer: Exit velocity max and average [PAGE 3, 16]; GB/FB ratio [PAGE 3]; position one-hot as speed proxy [PAGE 3, 4]. Veto: no sprint speed, no spin rate of batted ball, no pitcher release metrics in input list. Model may misuse fielding position as speed proxy (learned double play/triple propensity [PAGE 4]), which is a confounded physical signal.
- Weather layer: Only temperature (1 input) at game start [PAGE 3, 16]. No humidity, wind direction, or wind speed despite being listed as missing factors [PAGE 2]. Veto: games with high wind or extreme humidity are not physically adjusted; temperature-only input is a broken veto regime for windy days at Wrigley or Oracle Park.
- Breakdown: If temperature is missing, what imputation? Not specified. If park factor missing, not specified.

Section 6: RLVR_COUNTERFACTUAL_VETOES
Need 3 verifiable veto scenarios + predictions.
Scenario 1: Infrequent player with <10 PA head-to-head and <20 recent PAs. Imputation triggers. Veto: model output should be flagged because league-average imputation dominates. Prediction: wOBA error will exceed 0.0600 (based on infrequent players log5 0.5120 vs Singlearity-PA 0.4925; imputation risk adds error).
Scenario 2: High-wind game at Wrigley Field with temperature 65°F but wind blowing out >15 mph. Model has no wind input. Veto: park-factor-only adjustment insufficient. Prediction: HR rate will be under-predicted relative to actual because wind-assisted HRs omitted; error > 0.0100 absolute on HR RMSE (baseline HR RMSE ~0.05439 [PAGE 5]).
Scenario 3: Extra-innings or late-game pinch-hitter scenario where base state changes due to substitution not captured by single-PA model. Veto: Markov chain only models half-inning and assumes no substitutions mid-inning [PAGE 10]. Prediction: expected runs for innings 8-9 will be off by >0.10 runs because bench deployment and platoon switches are unmodeled.

I need to ensure no betting lines. No mention of odds, spreads, moneylines, totals. Fine.

Word count: Need >=1000 words. Let's estimate. I'll write substantial content.

Citations: Use [PAGE N] exactly. Also verbatim quotes where relevant. I should include a few verbatim quotes from the text.

Let's start writing.

THINK_TRACE needs to be >=400 words. I'll write ~500.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.

RETROCAUSAL_GENEALOGY: ~200 words.

RECURSIVE_THEORY_OF_MIND: ~200 words.

CROSS_LAYER_VETO_ADJUDICATION: ~250 words.

RLVR_COUNTERFACTUAL_VETOES: ~250 words.

Total >1000.

Let's ensure I don't use toy equations. The parameter count is architecture math, not a toy ratio. The cross-entropy is formal. RMSE is formal. Markov transition matrix formal. All good.

Let's write.

Be careful with verbatim quotes: Use exact text from source.

Quote examples:
- [PAGE 2]: "most PAs from 2011–2020 (82.1%) featured matchups where at least one of the players did not have at least 502 PAs."
- [PAGE 2]: "Ballpark factors (e.g. in the last five years, Coors Field, home to the Colorado Rockies, has seen 40% more hits (on average) than the New York Mets’ Citi Field in the same period...)"
- [PAGE 4]: "We used categorical cross-entropy as our loss function and used Tensorflow for our machine learning platform. We used 2 hidden layers of 80 nodes each..."
- [PAGE 5]: "Everyday players: Both batter and pitcher had >=502 PAs in the last 365 days"
- [PAGE 10]: "Our first attempt at measuring Singlearity-Markov’s ability to predict run expectation revealed that our predictions were consistently undershooting actual runs by 12-15%."
- [PAGE 14]: "The minimum values are 40 PAs for batter and pitcher historical data, 20 PAs for batter and pitcher recent data, and 10 PAs for batter and pitcher head-to-head data."

Good.

Now compose final answer. Must be in XML sections exactly.

Let's draft THINK_TRACE:

```
<THINK_TRACE>
...
</THINK_TRACE>
```

I'll write it now, checking word count mentally.

I will ensure no fake ratios like Force/Fatigue. All equations are from the paper or standard definitions.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs Singlearity-PA as a supervised neural network mapping an 87-dimensional floating-point input vector to a 21-dimensional probability simplex over MLB plate-appearance (PA) outcomes. The first hop is the feature layer: Table 1 ([PAGE 3]) partitions inputs into batter/pitcher historical (365-day), recent (21-day), head-to-head (3-year), park factor, base state, batting position one-hot, platoon, exit velocity, inning, home/away, net score, pitch count, temperature, ground-ball/fly-ball ratios, and temporal identifiers. The second hop is the architecture: footnote 3 on [PAGE 4] specifies categorical cross-entropy loss, TensorFlow, and two hidden layers of 80 nodes each, with train/validation/test splits drawn from 1,694 unique calendar dates (60/20/20). A formal parameter bound follows directly: input-to-hidden-1 is (87 × 80) + 80 = 7,040; hidden-1-to-hidden-2 is (80 × 80) + 80 = 6,480; hidden-2-to-output is (80 × 21) + 21 = 1,701; total is 15,221 trainable scalar parameters. This is architecture bookkeeping, not a toy physical ratio.

The third hop is the data regime. The training corpus comprises 1.72 million PAs across 22,740 games from 2011–2020 ([PAGE 4]). Because the split is by calendar date rather than by player, temporal contiguity creates a gray zone: a player injured on the first date of the validation block may appear in training data from earlier dates, but the model never sees that player’s post-injury trajectory inside the same date block. The fourth hop is the comparison logic. Table 2 ([PAGE 5]) evaluates wOBA, home-run, and walk error across three historical-data strata: everyday (both ≥502 PAs/365 days), occasional, and infrequent (either <100 PAs/365 days). The paper notes log5’s domain collapse—82.1% of 2011–2020 PAs involved at least one player below the 502-PA threshold ([PAGE 2])—and Singlearity-PA dominates log5 in every cell, especially infrequent players where log5 BB error is 0.1383 versus Singlearity-PA’s 0.1145.

Gray zones accumulate at the imputation boundary. Appendix Table 5 ([PAGE 14]) defines boolean imputation flags with minima of 40 PAs (historical), 20 PAs (recent), and 10 PAs (head-to-head); below these, all category values are replaced with league averages. This creates a hard discontinuity at exactly 40/20/10 PAs that is distinct from log5’s 502-PA everyday-player requirement, meaning the neural network and log5 fail in different, non-overlapping regions of player-activity space. A second gray zone is the Markov adjustment. Section 7.4 ([PAGE 10]) reports systematic 12–15% undershoot of actual first-inning runs and applies a multiplicative correction derived from the prior year’s error (e.g., 2016’s 15.3% undershoot inflates 2017 predictions). This is a retro-causal stationarity assumption: it presumes the 2016 run environment error structure is causally relevant to 2017, which breaks under rule changes, ball deformation, or shift restrictions. A third gray zone is SHAP estimation: Section 6 ([PAGE 6]) invokes Shapley values and cites Lundberg & Lee (2017) but never states whether KernelSHAP, DeepSHAP, or another approximation was used, so the exact local attribution algorithm is underspecified.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Define the input feature vector as \(\mathbf{x} \in \mathbb{R}^{87}\), drawn from the groups in Table 1 ([PAGE 3]) and detailed in Appendix Table 5 ([PAGE 14]–[PAGE 16]). Define the output as \(\mathbf{p} \in \Delta^{20}\), the 21-simplex of PA-outcome probabilities (single, double, triple, home run, walk, hit-by-pitch, out, etc.), with \(\sum_{k=1}^{21} p_k = 1\) and \(p_k \ge 0\). Let \(\mathbf{y} \in \{0,1\}^{21}\) be the one-hot realized PA outcome. The supervised loss on [PAGE 4] is categorical cross-entropy:
\[
\mathcal{L}(\mathbf{y},\mathbf{p}) = -\sum_{k=1}^{21} y_k \ln p_k \quad \text{[nats]},
\]
evaluated with TensorFlow over 1.72 million PAs ([PAGE 4]). The network contains two hidden layers of 80 nodes each ([PAGE 4]); with ReLU-type nonlinearities, the forward map is \(\mathbf{p} = \mathrm{softmax}\big(W_2 \sigma(W_1 \sigma(W_0\mathbf{x} + \mathbf{b}_0) + \mathbf{b}_1) + \mathbf{b}_2\big)\), where \(W_0 \in \mathbb{R}^{80\times 87}\), \(W_1 \in \mathbb{R}^{80\times 80}\), \(W_2 \in \mathbb{R}^{21\times 80}\). Trainable parameter count: \((87\cdot 80 + 80) + (80\cdot 80 + 80) + (80\cdot 21 + 21) = 15{,}221\).

Weighted on-base average (wOBA) is a dimensionless aggregated statistic computed by re-weighting predicted PA outcome probabilities; the paper does not print its exact linear weights, so no numerical wOBA equation is asserted. Error is reported as RMSE in units of runs:
\[
\mathrm{RMSE} = \sqrt{\frac{1}{N}\sum_{n=1}^{N} \big(\widehat{R}_n - R_n\big)^2} \quad \text{[runs]}.
\]
Table 3 ([PAGE 10]) gives overall RMSE values: RE24 = 0.98412, Singlearity-Markov = 0.98644, Singlearity-MarkovAdjusted = 0.98192 runs.

The Markov state space is \(\mathcal{S} = \{0,1,2\}\times\{0,1\}^{3}\), cardinality \(3 \times 2^{3} = 24\) base-out states ([PAGE 9], Section 7.1 cites RE24’s 24 states). The transition matrix \(\mathbf{P} \in [0,1]^{24\times 24}\) satisfies \(\sum_{j} P_{ij} = 1\) for every origin state \(i\); entries are constructed from Singlearity-PA’s 21 PA-outcome probabilities plus historical baserunner-advancement assumptions ([PAGE 9], footnote 4). Temperature is a single scalar input at game start ([PAGE 3]); the example on [PAGE 4] uses 79°F, which converts to \(26.11\,^{\circ}\mathrm{C}\) or \(299.26\,\mathrm{K}\) in SI units. Pitch count is a dimensionless non-negative integer; inning is a dimensionless ordinal; net score is in runs.

Breakdown and singularity regimes: log5 is singular when either participant has \(<502\) PAs in the prior 365 days, excluding 82.1% of 2011–2020 PAs ([PAGE 2]). Singlearity-PA imputation is singular below 40/20/10 PAs for historical/recent/head-to-head categories ([PAGE 14]), forcing league-average substitution and erasing player-specific signal. The MarkovAdjusted scaling factor is singular under non-stationary run environments because it regresses the current season on the previous season’s 12–15% undershoot ([PAGE 10]). Park-factor inputs use previous 3-year averages ([PAGE 3], [PAGE 15]); venues with recent structural changes or extreme microclimates (e.g., Coors Field showing 40% more hits than Citi Field over five years, [PAGE 2]) lie outside the stationarity assumption.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage descends from Bill James’s log5, extended by Matt Haechrel to seven PA outcomes using 365-day average rates ([PAGE 2], reference [3]). The neural-network layer replaces log5’s parametric restrictions with a function approximator, following general AI trends in image, game, and language domains ([PAGE 4]). Explainability is grafted on via Shapley values: Lloyd Shapley’s 1953 game-theoretic contribution, later recognized with the 1992 Nobel in Economics, and the 2017 unification by Lundberg and Lee ([PAGE 6], references [4]–[5]). The Markov-chain integration reaches back to Pankin (1987) and Bukiet et al. (1997), whose Operations Research paper lacked sufficient data to populate full transition matrices ([PAGE 9], references [10]–[11]); RE24 (Tango, reference [6]) supplies the 24-state run-expectancy baseline ([PAGE 9]). The Book (Tango et al., 2006, reference [12]) supplies the normative claim that optimal ordering can be worth up to 50 runs per season ([PAGE 11]).

Multi-week traps are embedded in the temporal feature engineering. The 365-day historical window and 21-day recent window create a staleness trap: a batter returning from the injured list, as in the Aaron Judge example ([PAGE 4], [PAGE 7]), carries few recent PAs and is partially imputed toward league average until the rolling window refreshes. The calendar-date 60/20/20 split ([PAGE 4]) avoids look-ahead across dates but produces a roster-churn trap: trades, injuries, and call-ups inside a validation block are not re-sequenced, so the model is evaluated on players whose current context differs from their training-date context. The retro-causal adjustment—multiplying 2017 predictions by 2016’s observed 15.3% undershoot ([PAGE 10])—is a one-season feedback trap that assumes the offensive error process is stationary year-over-year; it cannot absorb mid-decade rule or ball changes without re-estimation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of managers and analysts to revert to RE24 or log5 under pressure because those tools are legacy-legible and organizationally defended, even when Table 2 and Table 3 show Singlearity-PA and Singlearity-MarkovAdjusted achieve lower error ([PAGE 5], [PAGE 10]). In a close game, the cognitive cost of defending a neural-network recommendation to fans, players, or press exceeds the expected value of the marginal accuracy gain, so the decision-maker regresses to the familiar base-out matrix.

The counter-trap is SHAP-based explainability. By producing local feature-importance plots—for example, showing that Judge’s elevated exit velocity and the righty/lefty platoon boost raised his projected wOBA against Wade Miley while his thin recent IL-return sample depressed it ([PAGE 7])—the model converts black-box outputs into a narrative a manager can defend. Section 6 explicitly lists trust, insight, and debuggability as the managerial payoff ([PAGE 6]).

The clock is the game-state input vector: inning, pitch count, base state, outs, net score, and home/away ([PAGE 3], [PAGE 16]). These variables are temporal and irreversible; once an out is recorded or a runner advances, the state cannot retreat. The Markov chain operationalizes this clock at the half-inning level, but the authors deliberately restrict evaluation to the first inning ([PAGE 10]) to avoid pinch-hitters, relief pitchers, and shortened games. That restriction stops the clock at inning 1, trading strategic completeness for computational tractability. In later innings, the clock accelerates via substitutions and bullpen deployment, which the current Markov transition matrix does not model.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: Park factors are included as four inputs (3-year average single, double, triple, and HR factors; [PAGE 3], [PAGE 15]). The paper notes Coors Field produced 40% more hits than Citi Field over five years ([PAGE 2]). Veto condition: if a venue’s park-factor reference window is older than three years or the venue has undergone physical alteration (fence movement, altitude change), the park-factor input is stale and the prediction must be vetoed or re-calibrated.

Biomechanical layer veto: Exit velocity enters as two scalars (3-year max and average; [PAGE 3], [PAGE 16]); ground-ball/fly-ball ratios enter for both batter and pitcher ([PAGE 3]); batting position is one-hot encoded and is explicitly acknowledged to function as a speed proxy for double-play and triple propensity ([PAGE 4]). Missing biomechanical inputs include sprint speed, batted-ball spin, launch-angle distribution beyond GB/FB, and pitcher release/spin metrics. Veto condition: when a play outcome depends on a biomechanical variable not in the 87-vector—such as a racing double-play turn or an outfield arm hold—the model’s learned position-as-speed proxy confounds identity with athleticism, producing a silent bias rather than a quantifiable uncertainty.

Weather layer veto: Weather is represented by exactly one input: game-time temperature at start ([PAGE 3], [PAGE 16]). Humidity, wind direction, and wind speed are listed as known-absent factors in Section 3 ([PAGE 2]) and Section 9 ([PAGE 12]) but are not in the feature table. Veto condition: for games with material wind (e.g., Wrigley Field lake breeze) or extreme humidity, the temperature-only input cannot adjust carry or drag; HR and fly-ball outcomes are physically under-predicted relative to actuals.

Breakdown regime: The Markov chain further assumes baserunner advancement is historical and stationary ([PAGE 9]), omitting stolen bases, wild pitches, and advancement on plays at home ([PAGE 10]). Any veto at the physical or biomechanical layer propagates into the transition matrix, invalidating the half-inning run expectation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) counterfactual veto scenarios with falsifiable predictions:

Scenario 1 — Infrequent-player imputation boundary. Construct a counterfactual plate appearance in which the batter has 19 recent PAs (below the 20-PA imputation minimum) and 9 head-to-head PAs (below the 10-PA minimum), while the pitcher has 41 historical PAs (above the 40-PA floor). Because the recent and head-to-head categories trigger boolean imputation to league average ([PAGE 14]), the model’s output is dominated by population priors rather than player signal. Veto: flag the prediction as low-confidence. Prediction: wOBA RMSE on this stratum will exceed 0.0600, bracketed by the paper’s infrequent-player errors of 0.4925 (Singlearity-PA) and 0.5120 (log5) on [PAGE 5], with the excess attributable to imputation leakage.

Scenario 2 — Windy Coors Field counterfactual. Hold temperature fixed at 79°F ([PAGE 4]) but impose a 15 mph wind blowing out to center field at Coors Field, where park factors already indicate elevated offense ([PAGE 2]). Because wind is not an input ([PAGE 2], [PAGE 3], [PAGE 12]), the model cannot distinguish a wind-aided fly ball from a calm night. Veto: override the HR probability when wind vector magnitude exceeds a safety threshold. Prediction: the absolute HR-probability error will exceed 0.0100 relative to actual wind-aided home-run rates, degrading the Table 2 HR error baseline of 0.05439 ([PAGE 5]) for Coors home games.

Scenario 3 — Late-inning pinch-hitter Markov failure. Simulate the top of the 8th inning with a trailing team, two outs, runner on second, and a pinch-hitter available off the bench. The Markov chain is validated only on first innings and explicitly avoids pinch-hitters and relief pitchers ([PAGE 10]); it also excludes stolen bases and wild pitches ([PAGE 10]). Veto: refuse to emit a run-expectancy value for innings 8–9 unless a substitution-aware transition layer is added. Prediction: expected-run error for these innings will exceed 0.10 runs because bench-deployment and platoon-switch dynamics are outside the 24-state transition matrix.
</RLVR_COUNTERFACTUAL_VETOES><THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs Singlearity-PA as a supervised neural network mapping an 87-dimensional floating-point input vector to a 21-dimensional probability simplex over MLB plate-appearance (PA) outcomes. The first hop is the feature layer: Table 1 ([PAGE 3]) partitions inputs into batter/pitcher historical (365-day), recent (21-day), head-to-head (3-year), park factor, base state, batting position one-hot, platoon, exit velocity, inning, home/away, net score, pitch count, temperature, ground-ball/fly-ball ratios, and temporal identifiers. The second hop is the architecture: footnote 3 on [PAGE 4] specifies categorical cross-entropy loss, TensorFlow, and two hidden layers of 80 nodes each, with train/validation/test splits drawn from 1,694 unique calendar dates (60/20/20). A formal parameter bound follows directly: input-to-hidden-1 is (87 × 80) + 80 = 7,040; hidden-1-to-hidden-2 is (80 × 80) + 80 = 6,480; hidden-2-to-output is (80 × 21) + 21 = 1,701; total is 15,221 trainable scalar parameters. This is architecture bookkeeping, not a toy physical ratio.

The third hop is the data regime. The training corpus comprises 1.72 million PAs across 22,740 games from 2011–2020 ([PAGE 4]). Because the split is by calendar date rather than by player, temporal contiguity creates a gray zone: a player injured on the first date of the validation block may appear in training data from earlier dates, but the model never sees that player’s post-injury trajectory inside the same date block. The fourth hop is the comparison logic. Table 2 ([PAGE 5]) evaluates wOBA, home-run, and walk error across three historical-data strata: everyday (both ≥502 PAs/365 days), occasional, and infrequent (either <100 PAs/365 days). The paper notes log5’s domain collapse—82.1% of 2011–2020 PAs involved at least one player below the 502-PA threshold ([PAGE 2])—and Singlearity-PA dominates log5 in every cell, especially infrequent players where log5 BB error is 0.1383 versus Singlearity-PA’s 0.1145.

Gray zones accumulate at the imputation boundary. Appendix Table 5 ([PAGE 14]) defines boolean imputation flags with minima of 40 PAs (historical), 20 PAs (recent), and 10 PAs (head-to-head); below these, all category values are replaced with league averages. This creates a hard discontinuity at exactly 40/20/10 PAs that is distinct from log5’s 502-PA everyday-player requirement, meaning the neural network and log5 fail in different, non-overlapping regions of player-activity space. A second gray zone is the Markov adjustment. Section 7.4 ([PAGE 10]) reports systematic 12–15% undershoot of actual first-inning runs and applies a multiplicative correction derived from the prior year’s error (e.g., 2016’s 15.3% undershoot inflates 2017 predictions). This is a retro-causal stationarity assumption: it presumes the 2016 run environment error structure is causally relevant to 2017, which breaks under rule changes, ball deformation, or shift restrictions. A third gray zone is SHAP estimation: Section 6 ([PAGE 6]) invokes Shapley values and cites Lundberg & Lee (2017) but never states whether KernelSHAP, DeepSHAP, or another approximation was used, so the exact local attribution algorithm is underspecified.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Define the input feature vector as \(\mathbf{x} \in \mathbb{R}^{87}\), drawn from the groups in Table 1 ([PAGE 3]) and detailed in Appendix Table 5 ([PAGE 14]–[PAGE 16]). Define the output as \(\mathbf{p} \in \Delta^{20}\), the 21-simplex of PA-outcome probabilities (single, double, triple, home run, walk, hit-by-pitch, out, etc.), with \(\sum_{k=1}^{21} p_k = 1\) and \(p_k \ge 0\). Let \(\mathbf{y} \in \{0,1\}^{21}\) be the one-hot realized PA outcome. The supervised loss on [PAGE 4] is categorical cross-entropy:
\[
\mathcal{L}(\mathbf{y},\mathbf{p}) = -\sum_{k=1}^{21} y_k \ln p_k \quad \text{[nats]},
\]
evaluated with TensorFlow over 1.72 million PAs ([PAGE 4]). The network contains two hidden layers of 80 nodes each ([PAGE 4]); with ReLU-type nonlinearities, the forward map is \(\mathbf{p} = \mathrm{softmax}\big(W_2 \sigma(W_1 \sigma(W_0\mathbf{x} + \mathbf{b}_0) + \mathbf{b}_1) + \mathbf{b}_2\big)\), where \(W_0 \in \mathbb{R}^{80\times 87}\), \(W_1 \in \mathbb{R}^{80\times 80}\), \(W_2 \in \mathbb{R}^{21\times 80}\). Trainable parameter count: \((87\cdot 80 + 80) + (80\cdot 80 + 80) + (80\cdot 21 + 21) = 15{,}221\).

Weighted on-base average (wOBA) is a dimensionless aggregated statistic computed by re-weighting predicted PA outcome probabilities; the paper does not print its exact linear weights, so no numerical wOBA equation is asserted. Error is reported as RMSE in units of runs:
\[
\mathrm{RMSE} = \sqrt{\frac{1}{N}\sum_{n=1}^{N} \big(\widehat{R}_n - R_n\big)^2} \quad \text{[runs]}.
\]
Table 3 ([PAGE 10]) gives overall RMSE values: RE24 = 0.98412, Singlearity-Markov = 0.98644, Singlearity-MarkovAdjusted = 0.98192 runs.

The Markov state space is \(\mathcal{S} = \{0,1,2\}\times\{0,1\}^{3}\), cardinality \(3 \times 2^{3} = 24\) base-out states ([PAGE 9], Section 7.1 cites RE24’s 24 states). The transition matrix \(\mathbf{P} \in [0,1]^{24\times 24}\) satisfies \(\sum_{j} P_{ij} = 1\) for every origin state \(i\); entries are constructed from Singlearity-PA’s 21 PA-outcome probabilities plus historical baserunner-advancement assumptions ([PAGE 9], footnote 4). Temperature is a single scalar input at game start ([PAGE 3]); the example on [PAGE 4] uses 79°F, which converts to \(26.11\,^{\circ}\mathrm{C}\) or \(299.26\,\mathrm{K}\) in SI units. Pitch count is a dimensionless non-negative integer; inning is a dimensionless ordinal; net score is in runs.

Breakdown and singularity regimes: log5 is singular when either participant has \(<502\) PAs in the prior 365 days, excluding 82.1% of 2011–2020 PAs ([PAGE 2]). Singlearity-PA imputation is singular below 40/20/10 PAs for historical/recent/head-to-head categories ([PAGE 14]), forcing league-average substitution and erasing player-specific signal. The MarkovAdjusted scaling factor is singular under non-stationary run environments because it regresses the current season on the previous season’s 12–15% undershoot ([PAGE 10]). Park-factor inputs use previous 3-year averages ([PAGE 3], [PAGE 15]); venues with recent structural changes or extreme microclimates (e.g., Coors Field showing 40% more hits than Citi Field over five years, [PAGE 2]) lie outside the stationarity assumption.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage descends from Bill James’s log5, extended by Matt Haechrel to seven PA outcomes using 365-day average rates ([PAGE 2], reference [3]). The neural-network layer replaces log5’s parametric restrictions with a function approximator, following general AI trends in image, game, and language domains ([PAGE 4]). Explainability is grafted on via Shapley values: Lloyd Shapley’s 1953 game-theoretic contribution, later recognized with the 1992 Nobel in Economics, and the 2017 unification by Lundberg and Lee ([PAGE 6], references [4]–[5]). The Markov-chain integration reaches back to Pankin (1987) and Bukiet et al. (1997), whose Operations Research paper lacked sufficient data to populate full transition matrices ([PAGE 9], references [10]–[11]); RE24 (Tango, reference [6]) supplies the 24-state run-expectancy baseline ([PAGE 9]). The Book (Tango et al., 2006, reference [12]) supplies the normative claim that optimal ordering can be worth up to 50 runs per season ([PAGE 11]).

Multi-week traps are embedded in the temporal feature engineering. The 365-day historical window and 21-day recent window create a staleness trap: a batter returning from the injured list, as in the Aaron Judge example ([PAGE 4], [PAGE 7]), carries few recent PAs and is partially imputed toward league average until the rolling window refreshes. The calendar-date 60/20/20 split ([PAGE 4]) avoids look-ahead across dates but produces a roster-churn trap: trades, injuries, and call-ups inside a validation block are not re-sequenced, so the model is evaluated on players whose current context differs from their training-date context. The retro-causal adjustment—multiplying 2017 predictions by 2016’s observed 15.3% undershoot ([PAGE 10])—is a one-season feedback trap that assumes the offensive error process is stationary year-over-year; it cannot absorb mid-decade rule or ball changes without re-estimation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of managers and analysts to revert to RE24 or log5 under pressure because those tools are legacy-legible and organizationally defended, even when Table 2 and Table 3 show Singlearity-PA and Singlearity-MarkovAdjusted achieve lower error ([PAGE 5], [PAGE 10]). In a close game, the cognitive cost of defending a neural-network recommendation to fans, players, or press exceeds the expected value of the marginal accuracy gain, so the decision-maker regresses to the familiar base-out matrix.

The counter-trap is SHAP-based explainability. By producing local feature-importance plots—for example, showing that Judge’s elevated exit velocity and the righty/lefty platoon boost raised his projected wOBA against Wade Miley while his thin recent IL-return sample depressed it ([PAGE 7])—the model converts black-box outputs into a narrative a manager can defend. Section 6 explicitly lists trust, insight, and debuggability as the managerial payoff ([PAGE 6]).

The clock is the game-state input vector: inning, pitch count, base state, outs, net score, and home/away ([PAGE 3], [PAGE 16]). These variables are temporal and irreversible; once an out is recorded or a runner advances, the state cannot retreat. The Markov chain operationalizes this clock at the half-inning level, but the authors deliberately restrict evaluation to the first inning ([PAGE 10]) to avoid pinch-hitters, relief pitchers, and shortened games. That restriction stops the clock at inning 1, trading strategic completeness for computational tractability. In later innings, the clock accelerates via substitutions and bullpen deployment, which the current Markov transition matrix does not model.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: Park factors are included as four inputs (3-year average single, double, triple, and HR factors; [PAGE 3], [PAGE 15]). The paper notes Coors Field produced 40% more hits than Citi Field over five years ([PAGE 2]). Veto condition: if a venue’s park-factor reference window is older than three years or the venue has undergone physical alteration (fence movement, altitude change), the park-factor input is stale and the prediction must be vetoed or re-calibrated.

Biomechanical layer veto: Exit velocity enters as two scalars (3-year max and average; [PAGE 3], [PAGE 16]); ground-ball/fly-ball ratios enter for both batter and pitcher ([PAGE 3]); batting position is one-hot encoded and is explicitly acknowledged to function as a speed proxy for double-play and triple propensity ([PAGE 4]). Missing biomechanical inputs include sprint speed, batted-ball spin, launch-angle distribution beyond GB/FB, and pitcher release/spin metrics. Veto condition: when a play outcome depends on a biomechanical variable not in the 87-vector—such as a racing double-play turn or an outfield arm hold—the model’s learned position-as-speed proxy confounds identity with athleticism, producing a silent bias rather than a quantifiable uncertainty.

Weather layer veto: Weather is represented by exactly one input: game-time temperature at start ([PAGE 3], [PAGE 16]). Humidity, wind direction, and wind speed are listed as known-absent factors in Section 3 ([PAGE 2]) and Section 9 ([PAGE 12]) but are not in the feature table. Veto condition: for games with material wind (e.g., Wrigley Field lake breeze) or extreme humidity, the temperature-only input cannot adjust carry or drag; HR and fly-ball outcomes are physically under-predicted relative to actuals.

Breakdown regime: The Markov chain further assumes baserunner advancement is historical and stationary ([PAGE 9]), omitting stolen bases, wild pitches, and advancement on plays at home ([PAGE 10]). Any veto at the physical or biomechanical layer propagates into the transition matrix, invalidating the half-inning run expectation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-via-verifiable-rewards (RLVR) counterfactual veto scenarios with falsifiable predictions:

Scenario 1 — Infrequent-player imputation boundary. Construct a counterfactual plate appearance in which the batter has 19 recent PAs (below the 20-PA imputation minimum) and 9 head-to-head PAs (below the 10-PA minimum), while the pitcher has 41 historical PAs (above the 40-PA floor). Because the recent and head-to-head categories trigger boolean imputation to league average ([PAGE 14]), the model’s output is dominated by population priors rather than player signal. Veto: flag the prediction as low-confidence. Prediction: wOBA RMSE on this stratum will exceed 0.0600, bracketed by the paper’s infrequent-player errors of 0.4925 (Singlearity-PA) and 0.5120 (log5) on [PAGE 5], with the excess attributable to imputation leakage.

Scenario 2 — Windy Coors Field counterfactual. Hold temperature fixed at 79°F ([PAGE 4]) but impose a 15 mph wind blowing out to center field at Coors Field, where park factors already indicate elevated offense ([PAGE 2]). Because wind is not an input ([PAGE 2], [PAGE 3], [PAGE 12]), the model cannot distinguish a wind-aided fly ball from a calm night. Veto: override the HR probability when wind vector magnitude exceeds a safety threshold. Prediction: the absolute HR-probability error will exceed 0.0100 relative to actual wind-aided home-run rates, degrading the Table 2 HR error baseline of 0.05439 ([PAGE 5]) for Coors home games.

Scenario 3 — Late-inning pinch-hitter Markov failure. Simulate the top of the 8th inning with a trailing team, two outs, runner on second, and a pinch-hitter available off the bench. The Markov chain is validated only on first innings and explicitly avoids pinch-hitters and relief pitchers ([PAGE 10]); it also excludes stolen bases and wild pitches ([PAGE 10]). Veto: refuse to emit a run-expectancy value for innings 8–9 unless a substitution-aware transition layer is added. Prediction: expected-run error for these innings will exceed 0.10 runs because bench-deployment and platoon-switch dynamics are outside the 24-state transition matrix.
</RLVR_COUNTERFACTUAL_VETOES>