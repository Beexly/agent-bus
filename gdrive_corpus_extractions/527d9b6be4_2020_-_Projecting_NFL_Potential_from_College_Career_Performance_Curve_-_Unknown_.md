---
source: "2020 - Projecting NFL Potential from College Career Performance Curve - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2020"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5369
---

<NATIVE_REASONING>
The user wants me to analyze a research paper from the MIT Sloan Sports Analytics Conference 2020 about projecting NFL potential from college career performance curves using Elo ratings.

I need to:
1. Follow strict invariants:
   - Zero betting lines (no spreads, totals, moneylines, odds)
   - Zero toy equations (no fake ratios like Force/Fatigue). Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
   - Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
   - >= 1,000-word depth across exact XML sections.

2. XML sections required:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Let me carefully analyze the source text and page numbers.

Source: Brian Lehman, "Projecting NFL Potential from College Career Performance Curve", MIT Sloan 2020.

Key content by page:
- Page 1: Abstract, Introduction, Background start
- Page 2: Background continued, Methodology start, 3.1 Player Elo Ratings
- Page 3: 3.1.1 Standard Elo Rating System with equations (1), (2), (3). 3.1.2 Adapting for Player Ratings
- Page 4: Adapting continued, draw lines, median, data 2000-2019 Sports Reference, FCS missing
- Page 5: 3.2 College Career Performance Curve, Figure 1 (Bryce Love vs Alexander Mattison), baseline 1300, X-axis games played right justified
- Page 6: Figure 2 (Stefon Diggs vs Jeremy Maclin), 3.3 Curve Similarity, R2, Google Correlate, aligning at end of career, prepend baseline, only previous years
- Page 7: 3.4 Projection Framework, AV metric, average AV per year, threshold R2 > 0.5, Monte Carlo simulation, 10,000 simulated careers, gaussian distribution centered about AV/year with std dev based on similarity, Figure 3 Baker Mayfield, Table 1 categories
- Page 8: Table 1 (Franchise player 8+, Starter 4-8, Backup 2-4, Practice squad 0-2), Results start, 4.1 Projection from Elo Ratings Alone, 2016 draft Hackenberg vs Prescott, Figure 4, 2008-2017 draft classes, Figure 5
- Page 9: Figure 5, undrafted players identified, quarterback false positives (Kellen Moore, Colt Brennan, Aaron Murray, Graham Harrell)
- Page 10: 4.2 Projection from Performance Curve Similarity, 4.2.1 QBs, Table 2 top 15 QBs (Mayfield 12/15 80%, Mariota 16/20 80%, RG3 9/13 69.2%, Luck 8/12 66.7%, etc.), Table 3 projections (Mayfield, Watson, Wilson, Carr, Goff, Darnold, Murray, Mahomes, Prescott, Winston, Trubisky, Jackson, Ryan)
- Page 11: Table 2 continued? Actually page 11 seems to continue Table 2 with Watson, Wilson, Murray, Hall, Carr, Harrell. Then 4.2.2 RBs, Table 4 top 5 RBs (LaMichael James 4/4 100%, Toby Gerhart 29/33 87.9%, Henry 68/81 84%, Elliott 48/55 87.3%, Cook 23/26 88.5%). Table 5 RB projections (Henry, Elliott, Cook, Gurley, Fournette, Gordon, Ingram, Barkley, Bell, McCaffrey)
- Page 12: Table 4 continued? Actually page 12 has Table 4 continued (Gurley, Lynch, Bell, Ingram, Hyde, Drew* for Henry; etc.), then 4.2.3 WRs, Table 6 (Williams, Cooper, Hopkins, Jones, Watkins, Ridley)
- Page 13: 5. Discussion, Lamar Jackson vs Mayfield, Graham Harrell vs Patrick Mahomes, Figure 6, Table 7 (Harrell 2009, Mahomes, Harrell 2017 projection)
- Page 14: 6. Conclusion, 7. Acknowledgements, References

Equations from source:
Equation (1): E_A = 1 / (1 + 10^((R_B - R_A)/400))
Equation (2): E_B = 1 / (1 + 10^((R_A - R_B)/400))
Equation (3): R'_A = R_A + K(G_A - E_A)

Where G_A = 1 if win, 0 if loss. K-factor.

Player adaptation: classify raw statistics into win/loss per game. Draw line/threshold derived for each statistic. If performance exceeds draw line = win, else loss. Same formula as team Elo.

Opponent: position vs position (RB vs rush defense, receiver vs pass defense). Team rush offense/defense, pass offense/defense evaluated with same statistical Elo method.

Composite player Elo: evenly weights individual statistics for position.

Draw lines: median basis, historic 2000-2019 team game statistics from Sports Reference. Fixed draw line for each statistic.

Baseline Elo: 1300. Updated after every game. X-axis games played, right justified. Season breaks indicated by dot. Y-axis labels omitted (relative rating matters).

Curve similarity: R^2 worked best. Google Correlate. Varied career lengths: extend shorter curve to match longest by prepending baseline Elo. Align at end of career. Only consider players from previous years (no forward-looking).

Projection framework: AV (Approximate Value) from Sports Reference. Average AV per year to normalize. Threshold 0.5 for R^2 matching. Group size = confidence metric. Percentage that made NFL. Monte Carlo: virtual hat, names appear proportional to similarity score (e.g., 82 times for R^2=0.82). 10,000 simulated careers. Random Gaussian distribution centered about selected player's AV/year, standard deviation based on similarity score (higher similarity = tighter distribution). Output: projected AV/year distribution. Categories: Practice squad (0-2), Backup (2-4), Starter (4-8), Franchise player (8+).

Table 1 percentages by position:
QB: Franchise 7%, Starter 17%, Backup 16%, Practice 60%
RB: Franchise 2%, Starter 9%, Backup 14%, Practice 75%
WR: Franchise 2%, Starter 10%, Backup 14%, Practice 74%
TE: Franchise 4%, Starter 6%, Backup 6%, Practice 84%

Table 3 QB projections (selected):
Baker Mayfield: Sim 12, All 15, NFL/All 80.0%, Practice 37.7%, Backup 12.3%, Starter 13.6%, Franchise 27.7%
Deshaun Watson: 20/24, 83.3%, Practice 50.5%, Backup 13.4%, Starter 7.8%, Franchise 19.2%
Russell Wilson: 11/17, 64.7%, Practice 39.8%, Backup 9.8%, Starter 16.3%, Franchise 21.8%
Derek Carr: 16/20, 80.0%, Practice 38.0%, Backup 15.2%, Starter 19.8%, Franchise 16.7%
Jared Goff: 23/39, 59.0%, Practice 27.1%, Backup 22.3%, Starter 23.2%, Franchise 24.9%
Sam Darnold: 28/51, 54.9%, Practice 28.9%, Backup 19.2%, Starter 15.5%, Franchise 29.7%
Kyler Murray: 14/32, 43.8%, Practice 22.0%, Backup 15.4%, Starter 12.0%, Franchise 38.4%
Patrick Mahomes: 28/50, 56.0%, Practice 28.1%, Backup 20.1%, Starter 16.2%, Franchise 30.9%
Dak Prescott: 30/56, 53.6%, Practice 35.4%, Backup 17.7%, Starter 16.8%, Franchise 20.4%
Jameis Winston: 21/33, 63.6%, Practice 29.4%, Backup 16.5%, Starter 25.4%, Franchise 18.2%
Mitch Trubisky: 12/34, 35.3%, Practice 36.0%, Backup 11.3%, Starter 18.0%, Franchise 24.1%
Lamar Jackson: 25/44, 56.8%, Practice 24.1%, Backup 18.3%, Starter 15.1%, Franchise 35.1%
Matt Ryan: 9/17, 52.9%, Practice 21.5%, Backup 6.3%, Starter 27.0%, Franchise 38.4%

Table 5 RB projections:
Derrick Henry: 68/81, 84.0%, Practice 31.8%, Backup 23.4%, Starter 35.8%, Franchise 9.1%
Ezekiel Elliott: 48/55, 87.3%, Practice 29.4%, Backup 25.7%, Starter 34.8%, Franchise 10.1%
Dalvin Cook: 23/26, 88.5%, Practice 21.9%, Backup 16.5%, Starter 43.2%, Franchise 18.5%
Todd Gurley: 31/37, 83.8%, Practice 36.9%, Backup 21.1%, Starter 38.0%, Franchise 4.0%
Leonard Fournette: 43/48, 89.6%, Practice 26.3%, Backup 24.7%, Starter 34.9%, Franchise 14.1%
Melvin Gordon: 57/71, 80.3%, Practice 33.8%, Backup 24.2%, Starter 33.7%, Franchise 8.4%
Mark Ingram: 21/27, 77.8%, Practice 19.6%, Backup 19.5%, Starter 47.0%, Franchise 14.0%
Saquon Barkley: 25/35, 71.4%, Practice 31.6%, Backup 23.4%, Starter 36.5%, Franchise 8.5%
LeVeon Bell: 34/50, 68.0%, Practice 44.2%, Backup 22.2%, Starter 27.0%, Franchise 6.6%
Christian McCaffrey: 61/79, 77.2%, Practice 32.0%, Backup 28.9%, Starter 30.4%, Franchise 8.7%

Table 6 WR projections:
Mike Williams: 160/246, 65.0%, Practice 42.8%, Backup 21.7%, Starter 27.5%, Franchise 8.0%
Amari Cooper: 77/115, 67.0%, Practice 42.4%, Backup 17.2%, Starter 30.5%, Franchise 10.0%
Deandre Hopkins: 82/136, 60.3%, Practice 46.1%, Backup 21.7%, Starter 26.7%, Franchise 5.5%
Julio Jones: 20/36, 55.6%, Practice 46.3%, Backup 15.5%, Starter 30.1%, Franchise 8.1%
Sammy Watkins: 56/87, 64.4%, Practice 45.9%, Backup 17.1%, Starter 28.8%, Franchise 8.2%
Calvin Ridley: 10/21, 47.6%, Practice 43.6%, Backup 20.0%, Starter 24.8%, Franchise 11.5%

Table 7:
Graham Harrell (2009): 3/5, 60.0%, Practice 77.1%, Backup 22.7%, Starter 0.2%, Franchise 0.0%
Patrick Mahomes: 28/50, 56.0%, Practice 28.1%, Backup 20.1%, Starter 16.2%, Franchise 30.9%
Graham Harrell (2017): 24/32, 75.0%, Practice 40.7%, Backup 15.7%, Starter 14.0%, Franchise 25.3%

Now, I need to write the response. Since the user said "DRIVE SOURCE" and provided pages, I need to cite exact [PAGE N] markers and verbatim quotes.

Important constraints:
- No betting lines. I must not mention spreads, totals, moneylines, or odds. I can mention probabilities but not betting odds.
- No toy equations. I must use formal LaTeX equations from the source or standard formalism. I should not invent fake ratios.
- Must state assumptions and exact singularity/breakdown regimes.

Structure:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Total >= 1000 words. THINK_TRACE >= 400 words.

Let me draft each section carefully.

THINK_TRACE: Need deep multi-hop derivation and gray-zone audit. I should discuss:
- The Elo adaptation from team zero-sum to individual statistical win/loss.
- The draw line as median (50% classification) creating a Bernoulli-like outcome per game per stat.
- Opponent construction: player vs positional unit Elo (rush defense, pass defense), which creates a graph of interdependent ratings (offense/defense ratings feed each other).
- Curve similarity via R^2 with endpoint alignment and baseline prepending for shorter careers—this induces look-ahead/survivorship constraints because only past players are used.
- Monte Carlo with similarity-weighted sampling and Gaussian perturbation around historical AV/year.
- Breakdown regimes: FCS missing (selection bias), small similarity groups (Kellen Moore, Colt Brennan n=1), air raid regime shift (Harrell 2009 vs 2017), non-normal AV distributions, baseline 1300 arbitrary scale, Y-axis omitted.
- Gray zones: evenly weighted composite statistics (arbitrary equal weights), draw lines fixed from 2000-2019 median (stationarity assumption), Gaussian assumption on AV/year despite acknowledged non-normal distributions, R^2 threshold 0.5 arbitrary, 10,000 simulations arbitrary.
- No betting lines mentioned.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Expected score: \(E_A = \frac{1}{1 + 10^{(R_B - R_A)/400}}\)
- \(E_B = \frac{1}{1 + 10^{(R_A - R_B)/400}}\)
- Update: \(R'_A = R_A + K(G_A - E_A)\), \(G_A \in \{0,1\}\)
- Player classification: \(y_{i,g} = \mathbb{I}(s_{i,g} > \tau_s)\) where \(\tau_s\) is median draw line from 2000-2019.
- Composite: \(E^{comp}_p = \frac{1}{N_{stat}} \sum_{k} E_{p,k}\) (equal weights).
- Similarity: \(R^2\) between time series, endpoint aligned, shorter prepended with baseline \(E_0 = 1300\).
- Projection: \(\widehat{AV/year} \sim \mathcal{N}(\mu_j, \sigma_j)\) where \(\mu_j = AV/year_j\), \(\sigma_j \propto 1/R^2_j\) or tighter with higher similarity.
- Monte Carlo: \(N_{sim} = 10,000\), sampling with replacement proportional to similarity score.
- Categories: Practice \(0 \le AV/year < 2\), Backup \(2 \le AV/year < 4\), Starter \(4 \le AV/year < 8\), Franchise \(AV/year \ge 8\).
- Units: AV/year is dimensionless index (Sports Reference Approximate Value per season averaged). Elo points arbitrary (baseline 1300). R^2 dimensionless [0,1]. K-factor dimensionless points per game.

Citations: [PAGE 3] for equations, [PAGE 4] for draw lines/median, [PAGE 5] for baseline 1300, [PAGE 6] for R^2 and alignment, [PAGE 7] for Monte Carlo and AV, [PAGE 8] for Table 1 categories.

RETROCAUSAL_GENEALOGY: Historical lineage from Arpad Elo (1978) chess ratings, team sports Elo adaptation, Google Correlate (Mohebbi et al. 2011) for R^2 time series, Sports Reference AV methodology. Multi-week traps: league regime shifts (air raid QBs, pass-prolific NFL), forward-looking similarity leakage (Mahomes cannot be in Harrell's list because Harrell is earlier), FCS exclusion, draft class window 2008-2017, combine/pro day ignored despite physical attributes.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Teams regress to familiar heuristics under draft pressure (combines, film) rather than algorithmic curves. The paper explicitly says not suggesting scouts be replaced.
- Counter-trap: Opponents (other GMs) may adopt similar Elo/curve methods, arbitraging the signal; as more teams use it, the edge decays (market efficiency).
- Clock: The alignment at end of career and backward-only similarity creates a temporal asymmetry—projections for current draft class depend on historical window; as the league evolves (2009 Harrell vs 2017 Harrell), projections change. The "clock" is the draft cycle and regime shift.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: Methodology explicitly ignores combine numbers, pro day, size, speed (Page 2). Veto: great athletes who didn't play to potential fail; physical attributes must translate to game performance.
- Biomechanical: Position-specific statistics (rush yards, yards per carry) capture output but not injury mechanics; baseline 1300 and game-by-game updates may miss acute injury trajectories (Bryce Love dipped final season due to injury).
- Weather: Not addressed in source; game-level statistics don't condition on weather, creating an unmodeled environmental confound. Veto: outdoor vs dome games, cold-weather passing stats not adjusted.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll interpret as verifiable counterfactual veto scenarios.

Scenario 1: FCS player exclusion. If an FCS player (e.g., Carson Wentz, Jimmy Garoppolo mentioned as missing) enters draft, model cannot rate them. Veto triggers when player has no FBS game statistics. Prediction: projection null or default baseline; false negative risk for late-round gems.

Scenario 2: Small similarity group (n < 5). Graham Harrell 2009 had 3 similar QBs, 5 total. Confidence low. Veto triggers when similarity group size below threshold or NFL/All % unstable. Prediction: projection distribution collapses to prior (Table 1 base rates) or high variance; Harrell's actual projection 77.1% practice squad vs Mahomes 28.1%.

Scenario 3: Regime shift / non-stationarity. 2009 air raid vs 2017 pass-prolific NFL. Veto triggers when league offensive statistics shift outside 2000-2019 draw line stationarity or when player era differs from similarity pool era. Prediction: Harrell's 2017 projection improves drastically (Practice 40.7% vs 77.1%), showing era-dependence.

Need to ensure no betting lines. I won't mention odds/spreads. I can mention probabilities but frame as model outputs, not betting.

Word count: Need >= 1000 words total. THINK_TRACE >= 400. I'll aim for substantial each section.

Let me write carefully with citations.

I need to use verbatim quotes where citing pages. Let me collect some quotes:

Page 3: "Given Team A and Team B with Elo ratings RA and RB, the formula for the expected score of Team A is:" followed by equation. "R′A = RA + K(GA − EA)" "GA= 1 if Team A wins and GA = 0 if Team A loses."

Page 4: "We use the median as the basis for our statistical draw lines. We want a fixed draw line for each statistic, so we use historic (2000 – 2019) team game statistics to derive our initial median values."

Page 4: "We used team and player game statistics from the 2000-2019 college football seasons from Sports Reference."

Page 5: "Each player starts their college career at the baseline Elo rating, in our case 1300. Their rating is updated after every game that player participates in based on their performance and the strength of their opponent."

Page 6: "We found R2 worked best for our purposes. It is also used by Google Correlate for comparing time series in search query volume."

Page 6: "we align the performance curves at the end of their career (see Figure 1). We prepend the shorter curve with the baseline Elo for comparison purposes."

Page 6: "To ensure the integrity of our projections, we only consider players from previous years when running our R2 similarity."

Page 7: "We use Approximate Value (AV) as our metric for value in the NFL. AV attempts to quantify a player’s value at the end of every season."

Page 7: "We set a threshold of 0.5 to limit our R2 matching criteria."

Page 7: "We perform ten thousand simulated careers by selecting a random name with uniform probability."

Page 7: "For each selection we use a random gaussian probability distribution centered about the selected player’s AV/year and a standard deviation based on the similarity score; the higher the similarity, the tighter the distribution."

Page 8: Table 1 categories.

Page 10: "Harrell did not project well in 2009. The NFL has changed significantly since then."

Page 13: "Harrell’s 2017 projection is much better. He likely would have been drafted, even though he wasn’t in 2009."

Now let's compose the XML. I'll make sure not to use markdown code blocks that break XML, but the user asked for XML sections. I'll just output the XML tags with content.

Need to be careful: The content inside XML should not contain unescaped & or < unless in LaTeX. I'll avoid raw < in text. LaTeX equations can contain ^ and _ but those are fine. I'll avoid < and > characters in text (use "less than" or words). Actually I can use LaTeX with 	? No, I'll just write equations plainly.

Let me draft.

THINK_TRACE (>=400 words):

I'll write about the derivation chain:
1. Team Elo zero-sum -> expected score equation.
2. Player adaptation: replace team win/loss with statistical win/loss per game per stat using median draw line.
3. Opponent graph: player vs positional unit Elo (rush defense etc.), which creates mutual recursion because team rush defense Elo is evaluated against opposing rush offense.
4. Composite aggregation: equal weighting across stats (arbitrary but simple).
5. Performance curve: baseline 1300, updated game-by-game, right-justified X-axis, season breaks as dots, Y-axis omitted because relative rating matters.
6. Similarity: R^2, endpoint alignment, prepending baseline for shorter careers (survivorship/start approximation).
7. Backward-only constraint: only previous players to avoid look-ahead bias and regime leakage.
8. Projection: AV/year, average to normalize career length, Monte Carlo 10k, Gaussian perturbation with similarity-dependent sigma.
9. Gray zones / breakdown: equal weights, fixed median draw lines assume stationarity across 2000-2019, Gaussian assumption contradicted by non-normal AV distributions, R^2=0.5 threshold arbitrary, baseline 1300 scale arbitrary, FCS exclusion selection bias, small-n similarity groups (Harrell n=3), air raid regime shift, missing weather/biomechanical conditioning.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.

RETROCAUSAL_GENEALOGY: Elo 1978, chess, team sports, Google Correlate 2011, Sports Reference AV, DraftGeM reference [7]. Multi-week traps: draft cycle clock, regime shift, backward-only similarity, market adoption counter-trap.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (GMs revert to combine/film under pressure), counter-trap (arbitrage decay if adopted widely), clock (career endpoint alignment and backward-looking window create temporal boundary condition).

CROSS_LAYER_VETO_ADJUDICATION: Physical (combine ignored), biomechanical (injury not modeled, Love dip), weather (unmodeled environmental confound).

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with verifiable conditions and predictions.

Let's write it out fully now. I'll watch word count. I'll probably write around 250-350 words for SOURCE_OPERATORS, 300 for RETROCAUSAL, 250 for RECURSIVE, 200 for CROSS_LAYER, 250 for RLVR, and 450+ for THINK_TRACE. Total should exceed 1000.

I need to include exact page citations like [PAGE 3] and verbatim quotes.

Let's begin.

Actually, I need to be careful about LaTeX in XML. I'll write equations inline. Since XML text can contain backslashes and braces fine. I'll avoid using & in LaTeX alignment environments; just simple equations.

Let's draft the content.

Section 1: THINK_TRACE

I'll aim for ~500 words.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS

Section 3: RETROCAUSAL_GENEALOGY

Section 4: RECURSIVE_THEORY_OF_MIND

Section 5: CROSS_LAYER_VETO_ADJUDICATION

Section 6: RLVR_COUNTERFACTUAL_VETOES

Let's write.

I'll make sure to not mention betting odds/spreads/moneylines/totals.

Drafting THINK_TRACE:

"The paper’s core derivation begins with the standard Elo expected-score operator..." etc.

I'll include quotes.

Let's go.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s core derivation begins with the standard Elo expected-score operator on [PAGE 3]: “Given Team A and Team B with Elo ratings RA and RB, the formula for the expected score of Team A is: E_A = 1 / (1 + 10^((R_B − R_A)/400)).” The symmetric opponent expression follows on the same page, and the update rule is R′_A = R_A + K(G_A − E_A), where G_A = 1 if Team A wins and G_A = 0 if Team A loses. This establishes a zero-sum, opponent-conditioned recursion in which rating changes are bounded by the K-factor and proportional to surprise relative to expected score.

The first gray zone is the translation from team zero-sum games to individual player space. On [PAGE 4], the authors state: “Our method for player ratings merges the two concepts. We simply classify raw statistics into a win or loss per game. A draw line, or win/loss threshold, is derived for each evaluated statistic. If a player’s performance exceeds the statistical draw line, it is considered a win. Otherwise, it is classified as a loss.” The draw line is explicitly the median: “We use the median as the basis for our statistical draw lines. We want a fixed draw line for each statistic, so we use historic (2000 – 2019) team game statistics to derive our initial median values.” This imposes a stationarity assumption: the 2000–2019 median is treated as a fixed decision boundary across all future games, which breaks if college football scoring or pace shifts materially outside that window.

The second gray zone is the opponent graph. A running back is not evaluated against “the opposing team” but against “the opposing team’s rush defense,” and that defensive unit’s own Elo is derived from its opposition’s rush offense. This creates a mutually recursive system of team-component ratings (rush offense, rush defense, pass offense, pass defense) that feed individual player ratings. No convergence proof or spectral radius condition is supplied for this coupled update system, so the singularity regime—where offensive and defensive component ratings chase one another without settling—is unexamined.

Curve similarity uses R^2, described on [PAGE 6] as “also used by Google Correlate for comparing time series in search query volume.” To handle unequal career lengths, shorter curves are prepended with the baseline Elo (1300, per [PAGE 5]) and aligned at career end. This endpoint alignment introduces a look-ahead structural assumption: it treats missing early games as average starts rather than censored data, and it privileges players with longer observable careers in the similarity pool. The backward-only restriction—“we only consider players from previous years when running our R2 similarity” ([PAGE 6])—avoids future leakage but creates a regime-shift trap: as the NFL evolves, historical similarity pools become less representative. The paper itself demonstrates this with Graham Harrell versus Patrick Mahomes on [PAGE 13]: “Harrell did not project well in 2009. The NFL has changed significantly since then,” yet his 2017 counterfactual projection is substantially better.

The Monte Carlo projection layer on [PAGE 7] samples from a virtual hat where each similar player’s name appears proportional to its R^2 score (e.g., 82 times for R^2 = 0.82), runs ten thousand simulated careers, and perturbs each draw with “a random gaussian probability distribution centered about the selected player’s AV/year and a standard deviation based on the similarity score.” This is a Gaussian assumption imposed on Approximate Value per year despite the authors’ own admission on [PAGE 7] that “distributions tend to be non-normal.” The R^2 > 0.5 threshold and equal-weight composite aggregation are additional unvalidated hyperparameters. Selection bias enters via FCS exclusion ([PAGE 4]): “Many FCS players have been drafted and have had rich NFL careers. We dropped these players from the analysis of our results, since we lacked the input data to evaluate them.”

Breakdown regimes are therefore: (1) FCS or small-sample players with no FBS game history; (2) similarity groups below effective sample size, exemplified by Kellen Moore (n = 1 similar QB) and Colt Brennan (n = 1) on [PAGE 10]; (3) era mismatch, where pre-2000 or post-2019 rule changes invalidate the fixed median draw lines; and (4) non-Gaussian AV/year tails, where the Gaussian perturbation under-represents franchise-player outliers. No betting lines, spreads, totals, or moneylines appear in the source or in this trace.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown.

Team Elo expected score (Team A vs Team B), [PAGE 3]:
E_A = \frac{1}{1 + 10^{(R_B - R_A)/400}}, \qquad E_B = \frac{1}{1 + 10^{(R_A - R_B)/400}}
Units: dimensionless probability in [0, 1]. R_A, R_B are Elo rating points (arbitrary scale, baseline 1300 per [PAGE 5]).

Elo rating update, [PAGE 3]:
R'_A = R_A + K(G_A - E_A), \qquad G_A \in \{0,1\}
Units: rating points per game. K is the K-factor (maximum adjustment per game); G_A = 1 for win, 0 for loss.

Player statistical classification, [PAGE 4]:
y_{i,g,s} = \mathbb{I}(x_{i,g,s} > \tau_s), \qquad \tau_s = \operatorname{median}_{t \in [2000,2019]}(x_{team,s})
Units: binary win/loss per game per statistic s; \tau_s is fixed historic median, dimensionless in the statistic’s native units (yards, completions, etc.).

Composite player Elo for position p with N_s statistics, [PAGE 4]:
E^{comp}_{p} = \frac{1}{N_s}\sum_{s=1}^{N_s} E_{p,s}
Units: Elo points; equal weighting is an arbitrary but explicit assumption.

Opponent construction, [PAGE 4]: Player vs positional unit (e.g., running back vs opposing rush defense; receiver vs pass defense). Team component ratings (rush offense, rush defense, pass offense, pass defense) are computed with the same statistical Elo method, forming a coupled update graph.

Career curve baseline and update, [PAGE 5]:
E_{i,0} = 1300; \qquad E_{i,g} = E_{i,g-1} + K(y_{i,g,s} - E_{opp,g,s})
Units: arbitrary Elo points; X-axis is games played (right justified), Y-axis labels omitted because “the relative rating is what matters.”

Curve similarity, [PAGE 6]:
R^2(\text{curve}_i, \text{curve}_j), with shorter curve prepended by E_0 = 1300 and curves aligned at career end. Acceptance threshold R^2 > 0.5 ([PAGE 7]). Units: dimensionless coefficient of determination.

Projection distribution, [PAGE 7]:
\widehat{AV/year} \sim \mathcal{N}\bigl(\mu_j, \sigma_j\bigr), \qquad \mu_j = (AV/year)_j,\quad \sigma_j \propto 1/R^2_j
Units: Approximate Value per season (AV/year), a dimensionless index from Sports Reference; ten thousand Monte Carlo simulations ([PAGE 7]).

NFL classification bands (Table 1, [PAGE 8]):
Practice squad: 0 \le AV/year < 2; Backup: 2 \le AV/year < 4; Starter: 4 \le AV/year < 8; Franchise player: AV/year \ge 8.

Singularity/breakdown regimes: fixed median \tau_s assumes distributional stationarity over 2000–2019; FCS players are excluded ([PAGE 4]); small similarity groups produce low-confidence projections ([PAGE 10]); R^2 > 0.5 and K-factor are unvalidated hyperparameters; Gaussian perturbation contradicts acknowledged non-normal AV distributions ([PAGE 7]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage and multi-week traps.

The methodological genealogy traces to Arpad Elo’s 1978 chess-rating framework, cited as reference [3] on [PAGE 14]: “Elo, A. E. (1978) The Rating of Chess Players, Past and Present.” The paper adapts a zero-sum, opponent-conditioned rating system from chess to team sports and then to individual player statistics, a lineage that presumes transitive skill across heterogeneous opponents. The time-series similarity layer cites Google Correlate (Mohebbi et al., 2011, reference [5]) for using R^2 to compare search-query volume time series, transplanting a web-scale correlation tool into sparse college-football career curves. The value target is Sports Reference Approximate Value (reference [6]), which attempts to “quantify a player’s value at the end of every season” ([PAGE 7]). A related prior tool, DraftGeM (reference [7]), is acknowledged on [PAGE 8] as prior work comparing college and pro players.

Multi-week traps arise from the draft cycle’s temporal structure. Because curves are aligned at career end and only previous players are eligible for similarity matching ([PAGE 6]), the model enforces a strict causal boundary: Patrick Mahomes (2017) cannot appear in Graham Harrell’s (2009) similarity list. This prevents look-ahead leakage but creates a regime-shift trap when the NFL changes between comparison epochs. The paper documents this explicitly on [PAGE 13]: “Harrell and Mahomes may look similar from their Elo ratings, but their projections are significantly different,” and “Harrell’s 2017 projection is much better. He likely would have been drafted, even though he wasn’t in 2009.” The league’s evolution toward pass-prolific offenses means historical similarity pools decay in relevance over multi-year windows, a trap the paper mitigates only by re-running projections against updated cohorts rather than by modeling regime change explicitly.

Another trap is the exclusion of FCS data ([PAGE 4]): players such as Carson Wentz and Jimmy Garoppolo are noted as missing ([PAGE 10]), producing a survivorship window limited to FBS. Because the evaluation window spans draft classes 2008–2017 ([PAGE 8]), older veterans (Brady, Brees, Rodgers, Roethlisberger, Rivers) lack college curve data in this system, creating a left-censoring trap for established stars. The multi-week implication is that the model’s confidence is conditional on era, competition level, and data availability, not absolute.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: Under draft pressure, general managers revert to familiar heuristics—combine numbers, pro day metrics, film study, and reputation—rather than algorithmic curves. The paper anticipates this on [PAGE 9]: “We are not suggesting scouts and GMs be replaced by an algorithm.” Under crisis (a high-stakes first-round pick), human decision-makers overweight recent, vivid, and physical signals, regressing to the habit of valuing athleticism over on-field performance curves even though the paper argues athleticism “must translate to game performance” ([PAGE 2]). The counter-trap is market arbitrage: if multiple NFL teams adopt Elo/curve projection, the informational edge decays as draft prices adjust to the same signals, nullifying the first-mover advantage. The clock is the temporal boundary condition built into the model: curves are right-justified on games played ([PAGE 5]), similarity is anchored at career end ([PAGE 6]), and the backward-only rule ([PAGE 6]) means the projection window slides with each new draft class. As the “air raid” example shows ([PAGE 13]), the same player (Graham Harrell) shifts from a 77.1% practice-squad projection in 2009 to a 40.7% practice-squad projection in 2017 purely because the league’s similarity pool changed. The recursive theory of mind thus nests three layers: (1) the team’s internal regression to scouting habit under draft stress; (2) the competitive counter-trap of rival teams adopting identical analytics, compressing alpha; and (3) the exogenous clock of league rule changes and data-window staleness that invalidates historical similarity over multi-year horizons.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer veto: The methodology explicitly excludes physical attributes. On [PAGE 2]: “Our methodology focuses on actual game performance rather than physical attributes, combine numbers, pro day data, school, or any other player metrics.” This is a hard veto against draft-board bias toward measurables; the model assumes athleticism must already be expressed in game statistics. The veto is conditional: a great athlete who did not produce in college is correctly downweighted, but a late-blooming physical specimen whose college stats were suppressed by scheme or injury may be falsely rejected.

Biomechanical layer veto: Game-by-game Elo updates capture statistical output but not injury mechanics or workload durability. Bryce Love’s curve dips in his final season “as he struggled with injury” ([PAGE 5]), yet the model treats that decline as skill regression rather than a biomechanical shock. There is no injury state variable, snap-count weighting, or toughness adjustment in the Elo recursion, so the veto triggers when a player’s curve is distorted by acute injury rather than true skill decay.

Weather and environmental layer veto: The source makes no mention of weather conditioning, dome versus outdoor splits, or altitude adjustments. Game-level statistics are used raw, with opponent strength as the sole contextual modifier ([PAGE 3]). This creates an unmodeled confound: a quarterback’s passing statistics in cold-weather outdoor games are not separated from dome or warm-weather performances, and the draw lines derived from 2000–2019 aggregate data do not condition on environmental regime. The veto passes only if one assumes weather effects average out across a career; they do not for players with limited samples or weather-biased schedules.

Adjudication: The physical veto is strongest because the paper deliberately excludes combine data; the biomechanical veto is medium because injury-driven curve dips are indistinguishable from skill decline in the Elo time series; the weather veto is weakest in the source’s own framing but represents the largest unquantified environmental confound for outdoor skill-position projections.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions.

Scenario 1 (FCS exclusion veto): Condition: a draft-eligible player has zero FBS game statistics in the 2000–2019 Sports Reference dataset (e.g., Carson Wentz or Jimmy Garoppolo, noted as missing on [PAGE 10]). Veto: the model cannot generate a college Elo curve or similarity set; projection is null or defaults to position prior. Prediction: the system will systematically under-project late-round FCS successes relative to the Table 1 base rates (e.g., QB franchise-player prior of 7% on [PAGE 8]), producing a measurable false-negative gap for FCS draftees who become NFL starters.

Scenario 2 (Small-similarity-group veto): Condition: a candidate’s R^2 > 0.5 similarity group contains fewer than five comparable prior players, as with Graham Harrell (3 similar QBs, 5 total) and Kellen Moore (1 similar QB) on [PAGE 10]. Veto: confidence metric (group size) falls below a reliability threshold; the model should default to the position-specific Table 1 distribution rather than a tailored Monte Carlo. Prediction: projections for low-n players will collapse toward high practice-squad probability (Harrell’s actual 2009 projection: 77.1% practice squad, 0.0% franchise on [PAGE 13]), while high-n players (e.g., Derrick Henry, n = 68 similar RBs on [PAGE 11]) retain differentiated distributions.

Scenario 3 (Regime-shift veto): Condition: league offensive statistics shift outside the stationarity window used for fixed median draw lines (2000–2019, [PAGE 4]), or the player’s draft era differs materially from the similarity-pool era. Veto: suspend historical similarity projection and apply an era-adjustment factor or declare the projection invalid. Prediction: demonstrated by Graham Harrell—his 2009 projection is 77.1% practice squad / 0.0% franchise, but his counterfactual 2017 projection improves to 40.7% practice squad / 25.3% franchise ([PAGE 13], Table 7). The veto predicts that any air-raid or pre-spread-era quarterback evaluated against a modern pass-prolific pool will be systematically under-projected unless the era veto is triggered.
</RLVR_COUNTERFACTUAL_VETOES>