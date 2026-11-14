---
source: "2021 - Which Teams Would Have Won the 2020 NCAA Men's and Women's Basketball Tournaments - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2021"
pages: 6
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5281
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about NCAA basketball tournament win probabilities. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "DRIVE SOURCE" and provided the text. They didn't explicitly ask a question, but given the context of GSE + GSI Frontier Reasoning Foundry, they likely want a deep analysis following the strict format. I need to produce all XML sections with >=1000 words total, and THINK_TRACE >=400 words.

Key constraints:
- NO betting lines (spreads, totals, moneylines, odds). Even though the paper mentions "Apply to betting scenarios" in future work, I must not mention betting lines. I can discuss win probabilities but not frame them as odds or betting.
- No toy equations. Use formal LaTeX from the paper or proper statistical formalism. Cite page markers [PAGE N] and verbatim quotes.
- The source text has page markers like "1 / 28", "2 / 28" etc. I should cite these as [PAGE 1], [PAGE 2], etc. Or maybe the user wants exact [PAGE N] markers based on the provided pagination. Let's use [PAGE N] corresponding to the "/ 28" numbers.

Let me map content to pages:
- Page 1: Title, authors, date, Background (2020 cancelled due to COVID-19)
- Page 2: Question of Interest (win probabilities from game-by-game win probs)
- Page 3: Knockout Tournament Win Probability, Edwards 1991
- Page 4: 8-team example bracket
- Page 5: Table 1 win probability matrix
- Page 6: Table 2 probability of winning each round
- Page 7: Question of Interest (MOV estimation)
- Page 8: Harville Method, Harville 1977
- Page 9: Four Team Example MOV table
- Page 10: Example Data Team Strengths (H=5.75, S1=-6.125, etc.)
- Page 11: 2019-2020 Regular Season Team Strengths (Table 3, 4)
- Page 12: Question of Interest (MOV to win probabilities)
- Page 13: Win Probabilities Through Conformal Prediction (steps 1-4)
- Page 14: Picture text residuals
- Page 15: Example with 2019-2020 data (Connecticut vs South Carolina etc.)
- Page 16: Other Win Probability Methods (Linear regression, Logistic regression)
- Page 17: March Madness 2020 (20 unfinished men's, 18 women's conference tournaments, 5 situations)
- Page 18: S-curve Bracket Simplification Table 5
- Page 19: Situations for NCAA Teams (1-5)
- Page 20: Probabilities of Making Tournament Tables 6, 7
- Page 21: Tournament Win Probabilities Table 8 (women's top teams)
- Page 22: Win Probability Calibration (images)
- Page 23: Win Probability Calibration by Season Table 9 (ECE, MCE)
- Page 24: Issues (Data, Model)
- Page 25: Future Work
- Page 26: Questions?
- Page 27: References (Edwards 1991, Harville 1977, Vovk et al. 2019)
- Page 28: Conformal Predictive Distributions formula
- Page 29: CPD Four Team Example Figure 3
- Page 30: 2020 Conference Champions Tables 10, 11
- Page 31: NCAA Men's Situations Table 12
- Page 32: Men's Probabilities of Making Tournament Tables 13, 14
- Page 33: Men's Basketball Example Bracket Table 15
- Page 34: Men's Basketball Tournament Win Probabilities Table 16
- Page 35: Probability of Being At-Large Bid
- Page 36: (cut off)

Wait, the user said PAGES: 6 but the text goes up to page 36/28? That's odd. The text says "PAGES: 6" but the document has 36 pages labeled "/ 28" then continues to 29/28 etc. Actually looking closely, pages 1-28 are labeled / 28, then page 29 says 29 / 28 (probably a typo in the OCR or the original), up to 36. But user says PAGES: 6. Hmm. Maybe they only provided 6 pages worth? No, they provided the whole text. The "PAGES: 6" might be a mistake or refer to something else. I should cite based on the visible page markers in the text. Since the text has markers like "1 / 28" through "36 / 28" (with some duplicates/typo at 29+), I'll cite as [PAGE N] where N is the first number.

Wait, user said "PAGES: 6" but provided text spanning 36 pages. Maybe they mean 6 pages were supposed to be provided but more got pasted? Regardless, I should work with what's given. I will cite page markers exactly as they appear: e.g., [PAGE 1], [PAGE 3], etc. For the 29/28 anomaly, I'll use [PAGE 29] etc. since that's what's printed.

Now, I need to produce >=1000 words across the sections, with THINK_TRACE >=400 words.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit.
- Discuss the problem: 2020 NCAA tournaments cancelled due to COVID-19 [PAGE 1].
- Need to estimate counterfactual tournament win probabilities [PAGE 2].
- Two-stage pipeline: (1) estimate team strength / MOV via Harville linear model [PAGE 8-10], (2) convert MOV to win probabilities via conformal prediction / logistic / linear [PAGE 13-16], (3) propagate through single-elimination bracket using Edwards 1991 combinatorial theory [PAGE 3].
- Gray zones: bracket simplification (S-curve) assumes fixed seeding structure [PAGE 18]; double-dipping on team strength [PAGE 24]; ignores momentum, injuries, matchups [PAGE 24]; women's data harder to obtain [PAGE 24]; at-large bid enumeration is combinatorially explosive [PAGE 35-36]; conformal calibration ECE/MCE varies by season [PAGE 23].
- Multi-hop: team strength -> MOV distribution -> win prob per game -> round win probs -> tournament champion prob.
- Breakdown: when conference tournament outcomes are unresolved (Situations 2-5) [PAGE 19]; when N is small for conformity scores [PAGE 13]; when home advantage H is confounded with strength [PAGE 8].

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, citations.
- Harville model: M_ij = H + S_i - S_j + e_ij [PAGE 8]. Units: points (MOV).
- Estimated strengths from page 10: H-hat=5.75, S1-hat=-6.125, S2-hat=9.375, S3-hat=-3.375, S4-hat=0.125.
- Table 3/4 theta hats: e.g., men Kansas 25.25, women Connecticut 27.35 [PAGE 11]. Units: likely points per game or rating units.
- Conformal prediction steps [PAGE 13].
- Conformal predictive distribution formula [PAGE 28]: involving R_i(y_c) = y_i - y_hat_i(y_c), tau ~ U(0,1).
- Edwards 1991 knockout tournament probability recursion [PAGE 3].
- ECE/MCE definitions implied from Table 9 [PAGE 23]. Expected Calibration Error, Maximum Calibration Error.
- Breakdown/singularity: if P(win)=0 or 1, log-likelihood singular; if conference tournament unresolved, P(make tournament) must be marginalized over 2^K outcomes [PAGE 35].
- No betting lines.

<RETROCAUSAL_GENEALOGY>: Historical lineage & multi-week traps.
- Edwards 1991 PhD thesis on combinatorial theory of single-elimination tournaments [PAGE 3, 27].
- Harville 1977 JASA linear model for rating football teams [PAGE 8, 27].
- Vovk et al. 2019 Machine Learning conformal predictive distributions [PAGE 28, 27].
- Multi-week traps: regular season strength estimated from games weeks 1-N; conference tournaments in March; at-large bids depend on other conferences' results happening simultaneously [PAGE 17, 19, 35]. The "counterfactual" is retro-causal because we ask what would have happened in a tournament that never occurred, using data truncated by cancellation.
- Selection Sunday S-curve simplification [PAGE 18].

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: teams revert to mean strength under pressure; model assumes static strength [PAGE 24 issues].
- Counter-trap: conformal prediction assumes exchangeability; if team composition changes (injuries, momentum), exchangeability breaks [PAGE 13, 24].
- Clock: tournament is single-elimination, no regression to series; one game variance dominates [PAGE 3, 4]. The clock is the bracket clock—round J probability depends on surviving previous rounds.
- Theory of mind: the selection committee's behavior (S-curve) is modeled as deterministic simplification, but in reality it's adaptive [PAGE 18, 24].

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Indoor basketball: weather veto is null (climate-controlled arenas) [implicit, but I must be careful not to invent]. Actually the paper doesn't discuss weather. I should state that the model has no weather layer because games are indoors; thus no meteorological veto applies. Physical layer: player fatigue/biomechanics not modeled [PAGE 24 issues: momentum, injuries]. Veto: if a key player is injured, the strength parameter S_i is invalid; the model lacks injury covariates, so prediction must be vetoed.
- Biomechanical: MOV model ignores matchup-specific defensive/ offensive efficiency; assumes transitive strength [PAGE 24 double-dip].

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning via Verifiable Rewards? Or just verifiable counterfactual vetoes. I'll create 3 scenarios that are verifiable from the paper's data/logic.
  1. Injury veto: If Kansas's key player (e.g., Devon Dotson) was injured before tournament, Harville strength S=25.25 [PAGE 11] overestimates win probability. Prediction: model's 0.269 [PAGE 34] collapses; actual counterfactual champion probability < 0.10. Verifiable by comparing to post-injury regular season MOV distribution (not in paper, but the veto condition is verifiable: injury report exists).
  2. Conference tournament upset veto: If a Situation 4 team (must win conference tournament) wins unexpectedly, the at-large bubble shifts. Example: Yale P(make)=0.464 [PAGE 32] but if they lose, they're out; this changes bracket composition. Prediction: teams on bubble face stronger opponents; win probability recalculated downward.
  3. Exchangeability breakdown veto: Conformal prediction requires exchangeability between training MOV residuals and hypothetical MOV [PAGE 13]. If 2019-2020 season had late-season COVID disruptions (some teams paused), residuals are non-exchangeable. Prediction: ECE for 2019-2020 men's conformal is 0.121 [PAGE 23], higher than prior seasons (0.067-0.077), signaling breakdown; veto tournament win probs for that season.

Wait, I must ensure no betting lines. "Odds" is banned. I will avoid "odds" entirely. Use "probability" only.

Also, I need to cite exact [PAGE N] markers and verbatim quotes where source pages are provided. I should include quotes like "In 2020, the NCAA Division 1 Basketball tournaments (along with several conference tournaments) were cancelled due to COVID-19." [PAGE 1].

Let's count words. Need >=1000 total across sections. THINK_TRACE >=400. I'll aim for ~1800-2200 total to be safe.

Let's draft carefully.

Structure:

<THINK_TRACE>
(>=400 words) Deep multi-hop derivation & gray-zone audit.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions.
</RLVR_COUNTERFACTUAL_VETOES>

No other text outside these tags? The user said "across these exact XML sections". I should output only these sections, or can I have an intro? Better to output exactly these sections to be safe. Maybe a brief preamble is okay but to strictly follow, I'll just output the sections.

Let me write each section.

THINK_TRACE content plan:
- Start with the cancellation context [PAGE 1].
- Explain the inference chain: team strength theta-hat [PAGE 11] -> MOV linear model [PAGE 8] -> conformal predictive distribution [PAGE 13, 28] -> pairwise win probability -> Edwards 1991 bracket recursion [PAGE 3] -> tournament win probability [PAGE 21, 34].
- Gray-zone audit: (a) S-curve simplification fixes bracket topology [PAGE 18] but real selection is adaptive; (b) double-dip on team strength [PAGE 24] means strength used both for at-large probability and game win probability; (c) omitted variables: momentum, injuries, matchups [PAGE 24]; (d) women's data scarcity [PAGE 24]; (e) at-large enumeration requires summing over 2^K conference outcomes [PAGE 35], computationally and informationally intensive; (f) calibration drift: men's ECE 0.121 in 2019-2020 vs 0.067 in 2018-2019 [PAGE 23], suggesting distribution shift near cancellation; (g) Situation 2-5 ambiguity [PAGE 19] creates missing data mechanisms that are not ignorable.
- Multi-hop: If team i must win conference tournament (Situation 4) [PAGE 19], P(champion) = P(win conf tourney) * P(win NCAAT | in). This is a product of two conditionals; error propagates multiplicatively.
- Breakdown/singularity: If P(win any game) = 0, tournament probability collapses to 0; if conformity scores have zero variance, conformal intervals degenerate [PAGE 13].
- Word count target: ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- Harville: M_ij = H + S_i - S_j + e_ij [PAGE 8], e_ij unobserved random error. H home advantage parameter [PAGE 8]. Estimated values [PAGE 10]: H-hat = 5.75, S-hat_1 = -6.125, etc. Units: points (MOV).
- Table 3/4: theta-hat values [PAGE 11]: Kansas 25.25 (men), Connecticut 27.35 (women). Units: strength/rating points.
- Knockout recursion [PAGE 3]: probability team i wins in round J. Reference Edwards 1991.
- Conformal steps [PAGE 13]: 1) hypothesize response y_c (e.g., MOV -25); 2) retrain model; 3) conformity scores; 4) compare. Higher magnitude conformity score = less likely.
- CPD formula [PAGE 28]: R_i(y_c) = y_i - y_hat_i(y_c), R_{n+1}(y_c) = y_c - y_hat_{n+1}(y_c), tau ~ U(0,1).
- Calibration metrics [PAGE 23]: ECE, MCE. Example: men's 2019-2020 Conformal ECE = 0.121 (bold), Linear 0.147, Logistic 0.134.
- Tournament win probs [PAGE 21, 34]: women Connecticut 0.289; men Kansas 0.269.
- Breakdown regime: When n is small for conformity set [PAGE 13]; when home advantage H collinear with S_i [PAGE 8]; when bracket simplification ignores selection committee stochasticity [PAGE 18, 24].

RETROCAUSAL_GENEALOGY:
- Edwards 1991 PhD thesis, Montana State, combinatorial theory of single-elimination tournaments [PAGE 3, 27].
- Harville 1977 JASA, linear-model methodology to rate college football teams [PAGE 8, 27].
- Vovk et al. 2019, Machine Learning, nonparametric predictive distributions based on conformal prediction [PAGE 28, 27].
- Multi-week traps: Regular season data used to estimate theta-hat [PAGE 11]; conference championships occur in March [PAGE 30]; at-large bids depend on results from other conferences happening in same window [PAGE 17, 35]; selection committee meets after conference tournaments [PAGE 18]. The retro-causal question: given truncated season, what would have happened in April? This is a counterfactual over a collapsed temporal structure.
- Ivy League peculiarity: Princeton awarded bid based on regular season, not tournament [PAGE 30].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under single-elimination pressure, teams regress to season mean strength; model assumes static S_i [PAGE 24 issues: does not account for momentum]. The "habit" is relying on regular-season strength in a winner-take-all context.
- Counter-trap: Conformal prediction assumes exchangeability of residuals [PAGE 13]. If late-season COVID disruptions altered team rosters or motivation, exchangeability fails. This is the counter-trap: the method's own assumption becomes the failure mode.
- Clock: Single-elimination bracket imposes a hard clock—no best-of series, no regression to the mean over multiple games [PAGE 3, 4]. Round J probability is conditional on survival through rounds 1..J-1 [PAGE 6 Table 2]. This creates a "clock" where variance accumulates and one game decides elimination.
- Theory of mind: The selection committee's S-curve is modeled as deterministic [PAGE 18], but the committee's actual behavior is strategic and reactive to other conferences' results [PAGE 35], a second-order theory-of-mind failure.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Games are indoors; meteorological veto (weather) is null/not applicable. The paper contains no weather covariates [PAGE 24 issues list does not include weather].
- Biomechanical/physiological layer: Injuries and fatigue are omitted [PAGE 24: "Does not account for: momentum, injuries, match-ups, etc."]. If a primary ball-handler is injured, S_i is invalid. Veto condition: injury report changes effective roster; model must be re-estimated or vetoed.
- Matchup layer: Double-dip on overall team strength [PAGE 24] ignores stylistic matchups (e.g., pace, defensive scheme). Veto if matchup-specific efficiency differential deviates > X from transitive strength difference.
- Adjudication: Since no biomechanical or weather data are in the source, any prediction for a team with a known injury or unusual matchup must be vetoed. The model is valid only for healthy, transitive-strength regimes in climate-controlled venues.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Injury veto. Verifiable condition: Kansas men's team [PAGE 11] theta=25.25, tournament win prob 0.269 [PAGE 34]. If a key player is injured before tournament, effective S drops. Prediction: win probability falls below 0.10; conformal residuals from post-injury games would show systematic bias (mean shift), violating exchangeability [PAGE 13].
- Scenario 2: Conference tournament at-large veto. Verifiable condition: Situation 4 men's teams must win conference tournament [PAGE 19, 31]. Example: Connecticut overall rank 64, P(win conf tourney)=0.070 [PAGE 32]. If they unexpectedly win, they take an auto-bid, displacing a bubble team. Prediction: bubble team's tournament win probability goes to 0; Connecticut's P(champion) is product 0.070 * conditional bracket prob, likely < 0.01.
- Scenario 3: Calibration breakdown veto. Verifiable condition: Men's 2019-2020 conformal ECE = 0.121 [PAGE 23], highest among recent seasons (0.052-0.103 range). This signals non-exchangeability of residuals likely due to COVID-truncated season [PAGE 1]. Prediction: All 2020 tournament win probabilities (Tables 8, 16) are overconfident; recalibrated probabilities would be flatter (closer to uniform) and ECE would remain > 0.10 if applied naively.

Need to ensure no mention of "odds", "spread", "moneyline", "total". Check.

Also, ensure verbatim quotes where citing pages. I'll include some quotes.

Let's write.

Word count estimation:
THINK_TRACE: I'll write ~550 words.
SOURCE_OPERATORS: ~350 words.
RETROCAUSAL: ~250 words.
RECURSIVE: ~250 words.
CROSS_LAYER: ~200 words.
RLVR: ~250 words.
Total ~1850. Good.

I must not say "odds" anywhere. Check for "odds" in my draft. None.

Check for "betting lines", "spreads", "totals", "moneylines". None.

Check for toy equations: I will only use equations from the paper or standard definitions (ECE/MCE). No invented Force/Fatigue ratios.

Citations: Use [PAGE N] exactly. For page 28 which is actually labeled 28/28 then 29/28 etc., I'll use [PAGE 28], [PAGE 29], etc. based on the printed number before "/ 28". Actually page 28 says "28 / 28" then next is "29 / 28". I'll cite [PAGE 28] for references, [PAGE 29] for conformal formula, [PAGE 30] for conference champions, etc.

Wait, page 14 and 15 have picture text but no page number in the text? Actually they have "14 / 28" and "15 / 28" headers. Yes.

Let's write carefully with quotes.

Quotes:
- Page 1: "In 2020, the NCAA Division 1 Basketball tournaments (along with several conference tournaments) were cancelled due to COVID-19."
- Page 2: "Given a collection of game-by-game win probabilities, can we generate tournament win probabilities for each team?"
- Page 8: "Mij = observed margin of victory (MOV) for team i playing at − home against team j ... H = home field advantage parameter."
- Page 10: "H = 5.75 , S1 = −6.125 , S2 = 9.375 , S3 = −3.375 , S4 = 0.125 ."
- Page 11: Kansas 25.25, Connecticut 27.35.
- Page 13: "Conformal prediction is an inference methodology based on how well incoming observations conform to previously seen observations."
- Page 24: "Does not account for: momentum, injuries, match-ups, etc."
- Page 23: Men's 2019-2020 conformal ECE 0.121.
- Page 34: Kansas 0.269.
- Page 32: Connecticut 0.070.

Alright, let's compose the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core inference problem is a counterfactual tournament projection under an exogenous truncation: the 2020 NCAA Division 1 Basketball tournaments were cancelled due to COVID-19 [PAGE 1], so the authors ask, “Given a collection of game-by-game win probabilities, can we generate tournament win probabilities for each team?” [PAGE 2]. The derivation proceeds in three nested hops. First, team strength is estimated from regular-season margin-of-victory (MOV) data using the Harville linear model, where Mij = observed MOV for team i at home against team j, H = home-field advantage parameter, and Si, Sj = team strengths [PAGE 8]. The fitted values reported for the four-team example are H-hat = 5.75, S-hat1 = -6.125, S-hat2 = 9.375, S-hat3 = -3.375, S-hat4 = 0.125 [PAGE 10], and the 2019-2020 regular-season strength estimates include Kansas at theta-hat = 25.25 (men) and Connecticut at theta-hat = 27.35 (women) [PAGE 11].

Second, MOV is converted to win probabilities. The authors evaluate conformal prediction, linear regression under normality, and logistic regression [PAGE 12-13]. Conformal prediction is described as “an inference methodology based on how well incoming observations conform to previously seen observations,” requiring a hypothesized response value (e.g., MOV of -25), model retraining with that observation appended, conformity-score calculation, and comparison where “higher magnitude conformity scores correspond to hypothesized responses that are less likely” [PAGE 13]. The formal conformal predictive distribution appears on [PAGE 28], defining conformity scores Ri(yc) = yi - y-hat i(yc) and Rn+1(yc) = yc - y-hat n+1(yc) with tau ~ U(0,1).

Third, pairwise win probabilities are propagated through a single-elimination bracket using the combinatorial theory of single-elimination tournaments [Edwards, 1991] [PAGE 3]. Table 2 demonstrates the recursion for an eight-team bracket, showing probability of winning Round 1 and the Final for each seed [PAGE 6]. For the actual 2020 field, the authors must first handle unfinished conference tournaments—20 men’s and 18 women’s [PAGE 17]—by assigning each team to one of five situations, ranging from already in to cannot make it [PAGE 19]. Tournament win probability is therefore a product: P(champion) = P(make tournament) × P(win bracket | in the bracket). For example, the women’s top projected champion is Connecticut at 0.289 [PAGE 21], and the men’s top is Kansas at 0.269 [PAGE 34].

Gray-zone audit reveals several structural fragilities. (1) Bracket generation is simplified to a fixed S-curve [PAGE 18], which “over-simplif[ies] the bracket generation process” [PAGE 24]; real selection committee behavior is adaptive and reactive to other conferences’ outcomes [PAGE 35], creating a missing-data mechanism that is not ignorable. (2) The model “double-dip[s] on overall team strength” [PAGE 24], using strength both to estimate at-large inclusion and to calculate game win probabilities, which double-counts uncertainty. (3) Omitted variables include momentum, injuries, and match-ups [PAGE 24], violating the transitive-strength assumption when rosters change late in the season. (4) Women’s data are “much more to obtain” [PAGE 24], reducing effective sample size for conformity scores and widening prediction intervals. (5) Calibration drifts: men’s conformal ECE is 0.121 in 2019-2020 versus 0.067 in 2018-2019 [PAGE 23], suggesting distribution shift near the COVID-19 cancellation. (6) At-large probability requires enumerating all possible combinations of conference outcomes for every team below a given rank [PAGE 35-36], a combinatorial burden that grows exponentially with the number of unresolved conferences. Singularity regimes include any game win probability collapsing to 0 or 1, which forces the tournament probability to 0, and small-n conformity sets where exchangeability cannot be empirically verified [PAGE 13].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Harville MOV model [PAGE 8]:
M_{ij} = H + S_i - S_j + e_{ij},
where M_{ij} is observed margin of victory (MOV) in points for team i playing at home against team j, H is the home-field advantage parameter, S_i and S_j are team strengths in points, and e_{ij} is unobserved random error. Parameters H, S_i, S_j are estimated from game-outcome data [PAGE 8]. Example estimates: H-hat = 5.75, S-hat_1 = -6.125, S-hat_2 = 9.375, S-hat_3 = -3.375, S-hat_4 = 0.125 [PAGE 10].

Team-strength table [PAGE 11]: Kansas men theta-hat = 25.25, Rank 1; Connecticut women theta-hat = 27.35, Rank 1. Units are strength-rating points, not probabilities.

Knockout tournament recursion [PAGE 3; Edwards, 1991]: P(team i wins in round J) is computed recursively from pairwise game win probabilities over the bracket topology. For the 8-team example, Table 2 gives Round 1 and Final probabilities [PAGE 6]; e.g., team 1 has P(Round 1)=0.99 and P(Final)=0.60, while team 8 has P(Round 1)=0.01 and P(Final)=0.00.

Conformal prediction algorithm [PAGE 13]: (1) specify hypothesized response y_c, e.g., MOV = -25; (2) retrain model on training data plus (new observation, y_c); (3) calculate conformity score for each observation; (4) compare new conformity score to all others, where higher magnitude implies less likely. This generates prediction intervals around a predicted response value.

Conformal predictive distribution [PAGE 28; Vovk et al., 2019]: R_i(y_c) = y_i - y-hat_i(y_c), R_{n+1}(y_c) = y_c - y-hat_{n+1}(y_c), with index i representing the i-th order statistic of conformity scores and tau ~ U(0,1).

Calibration metrics [PAGE 23; Table 9]: Expected Calibration Error (ECE) and Maximum Calibration Error (MCE). Men’s 2019-2020: Conformal ECE = 0.121, Linear ECE = 0.147, Logistic ECE = 0.134; Women’s 2019-2020: Conformal ECE = 0.052, Linear ECE = 0.098, Logistic ECE = 0.114.

Tournament win probabilities [PAGE 21; Table 8 women]: Connecticut 0.289, South Carolina 0.127, Stanford 0.104, Oregon 0.094, Princeton 0.064. [PAGE 34; Table 16 men]: Kansas 0.269, Gonzaga 0.144, Duke 0.123, Michigan State 0.067, Baylor 0.063.

Breakdown/singularity conditions: (a) If P(win any bracket game) = 0, then P(champion) = 0 by recursive multiplication; (b) If conformity-score variance is zero, conformal prediction intervals degenerate and exchangeability cannot be assessed [PAGE 13]; (c) If home advantage H is collinear with team strength S_i, the Harville design matrix is rank-deficient and strength estimates are not identifiable [PAGE 8]; (d) If conference tournaments remain unresolved (Situations 2-5) [PAGE 19], P(make tournament) must be marginalized over 2^K possible conference-outcome combinations [PAGE 35-36], which is computationally intractable without the S-curve simplification [PAGE 18].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage combines three distinct statistical traditions. Edwards (1991) supplies the combinatorial skeleton: “The combinatorial theory of single-elimination tournaments” provides the recursion for converting pairwise win probabilities into full-tournament champion probabilities [PAGE 3; PAGE 27]. Harville (1977) supplies the rating engine: “The use of linear-model methodology to rate high school or college football teams,” adapted here to basketball MOV with a home-advantage intercept [PAGE 8; PAGE 27]. Vovk et al. (2019) supplies the uncertainty layer: “Nonparametric predictive distributions based on conformal prediction,” used to turn MOV point estimates into win-probability distributions [PAGE 28; PAGE 27].

The retro-causal structure is imposed by the COVID-19 cancellation [PAGE 1]. Because the tournament never occurred, the authors must estimate “what would have happened” from a truncated information set ending at the 2019-2020 regular season [PAGE 11]. This creates a multi-week trap: team strengths are estimated from games played over a multi-month regular season [PAGE 11], but tournament entry depends on conference tournaments that were unfinished in March [PAGE 17], and at-large bids depend on simultaneous outcomes across independent conferences [PAGE 35]. The temporal order is collapsed: regular-season performance (weeks 1-N) must predict March performance (conference tournaments) which must predict April performance (NCAA tournament), but the March and April layers are unobserved.

The S-curve bracket simplification [PAGE 18] attempts to make this tractable by freezing the selection topology, but the actual selection committee operates reactively after conference championships conclude [PAGE 35]. The Ivy League case illustrates the anomaly: Princeton was awarded the automatic bid based on regular-season performance rather than winning the conference tournament [PAGE 30], violating the assumption that conference-tournament victory is the sole gatekeeper. Thus the genealogy is retro-causal in the strict sense: it projects backward from an unobserved termination point (the cancelled tournament) through a partially observed selection process (unfinished conference tournaments) to a fully observed training period (regular season), with no validation set available from the target event itself.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression refers to the tendency to weight regular-season strength as if it were invariant under tournament pressure. The model explicitly does not account for momentum, injuries, or match-ups [PAGE 24], so it assumes each team’s estimated strength theta-hat carries forward unchanged into single-elimination play [PAGE 11]. This is a habit-regression failure: under crisis conditions (winner-take-all, neutral-site, high-stakes), teams do not regress to a stable mean; instead, roster health, tactical adjustments, and psychological variance dominate, and the static Harville strength parameter cannot capture regime shifts.

The counter-trap is conformal prediction’s reliance on exchangeability [PAGE 13]. Conformal validity requires that the hypothetical MOV residual be exchangeable with previously observed residuals. In the 2019-2020 season, late-season disruptions from COVID-19 [PAGE 1] likely altered team rotations, motivation, and game contexts, breaking exchangeability between early-season training residuals and late-season hypothetical residuals. The method’s own assumption thus becomes the trap: it appears distribution-free, but its exchangeability precondition is exactly what the crisis invalidates. This is consistent with the calibration evidence: men’s conformal ECE rose to 0.121 in 2019-2020, the highest in the displayed span [PAGE 23].

The clock is the single-elimination bracket itself. Unlike a best-of series, there is no opportunity for regression to the mean across multiple games; one MOV draw determines survival [PAGE 3, 4]. Round J probability is conditional on surviving rounds 1 through J-1 [PAGE 6 Table 2], so variance accumulates multiplicatively. A team with a 0.75 game-win probability faces P(win 6 games) ≈ 0.75^6 ≈ 0.18 even before accounting for opponent strength variation. This creates a hard temporal clock: the bracket eliminates half the field each round, and no statistical habit can recover a team after a single adverse MOV draw.

Recursive theory of mind enters at the selection-committee layer. The authors simplify bracket generation to a deterministic S-curve [PAGE 18], effectively assuming the committee does not react to other conferences’ results. In reality, the committee’s at-large decisions are second-order: they depend on what other selection committees (conference tournaments) do [PAGE 35]. Modeling the committee as a fixed S-curve ignores this recursive strategic layer, producing overconfident at-large probabilities for bubble teams [PAGE 20, Table 6-7].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The source text contains no meteorological variables, and NCAA basketball is played in climate-controlled indoor arenas; therefore a weather veto is null by domain, not by omission in this specific model. No temperature, wind, or precipitation operator appears in [PAGE 1]-[PAGE 36].

Biomechanical/physiological layer: The model omits injuries, fatigue, and matchup-specific effects [PAGE 24: “Does not account for: momentum, injuries, match-ups, etc.”]. The Harville strength S_i is a team-level scalar [PAGE 8], so it cannot represent the loss of a primary ball-handler or a protective rim defender. Veto condition: if a verified injury report changes the effective roster before tournament play, the strength parameter S_i is invalid and the prediction must be vetoed or re-estimated with an injury covariate; the current formalism has no such operator.

Matchup layer: The model “double-dip[s] on overall team strength” [PAGE 24], meaning it uses transitive strength differences for both inclusion and game win probability without stylistic interaction terms (pace, defensive scheme, size mismatch). Veto condition: if the matchup-specific efficiency differential deviates materially from the transitive strength difference implied by S_i - S_j + H [PAGE 8], the win-probability output is not biomechanically grounded and must be vetoed.

Adjudication: Because the source provides no weather, injury, or matchup covariates, any prediction for a team with a known roster disruption or an extreme stylistic mismatch is inadmissible under the model’s own stated limitations [PAGE 24]. The valid regime is healthy, transitive-strength teams in indoor venues with exchangeable residuals; outside that regime, the output is a vetoed counterfactual rather than a probability.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Injury veto): Verifiable condition: Kansas men’s team has regular-season strength theta-hat = 25.25 and tournament win probability 0.269 [PAGE 11, PAGE 34]. If a key player is injured before the tournament, the effective strength S_Kansas falls below the estimated 25.25. Prediction: The model’s 0.269 champion probability collapses; post-injury conformity residuals would exhibit a systematic mean shift, violating exchangeability [PAGE 13], and recalibrated win probability falls below 0.10.

Scenario 2 (Conference-tournament at-large veto): Verifiable condition: Connecticut men’s team is overall rank 64 with P(win conference tournament) = 0.070 [PAGE 32, Table 13] and is in Situation 2 (must win conference tournament or rely on others) [PAGE 31, Table 12]. If Connecticut unexpectedly wins its conference tournament, it claims an automatic bid and displaces an at-large bubble team. Prediction: The displaced bubble team’s tournament win probability becomes 0; Connecticut’s champion probability is bounded above by 0.070 × P(win bracket | in), likely under 0.01 given its low seed and weak conference profile.

Scenario 3 (Calibration-breakdown veto): Verifiable condition: Men’s 2019-2020 conformal ECE = 0.121 [PAGE 23], exceeding every prior season’s conformal ECE in the table (0.057-0.103 range) and signaling non-exchangeable residuals from the truncated COVID-19 season [PAGE 1]. Prediction: Naive application of Tables 8 and 16 win probabilities is overconfident; recalibrated 2020 champion probabilities would be flatter (closer to uniform across the top 10) and any out-of-sample application of the 2019-2020 conformal model to a later season would retain ECE > 0.10, failing verification.
</RLVR_COUNTERFACTUAL_VETOES>