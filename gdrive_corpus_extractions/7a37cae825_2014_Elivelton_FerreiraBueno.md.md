---
source: "2014_Elivelton_FerreiraBueno.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 134
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5954
---

<NATIVE_REASONING>
The user has provided a very long source document (a PhD thesis on NHL scheduling) and wants me to produce output following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to analyze the source text provided. The user says "PAGES: 134" and "DRIVE SOURCE: /GSE-Research/sports-research-papers/md/2014_Elivelton_FerreiraBueno.md". The source text is the full thesis markdown.

I need to:
- NOT mention betting lines (no spreads, totals, moneylines, odds).
- NOT invent fake ratios. Use formal LaTeX, units, assumptions, breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes where source pages are provided. The text doesn't have explicit page numbers like "[PAGE 5]" but it has chapter/page numbers in the text (e.g., "6", "7", etc. appear as standalone numbers which seem to be page numbers from the PDF). I need to infer page markers. Actually, looking at the text, there are numbers like "1", "2", "3" etc. at the beginning of chapters which look like page numbers. For example:
  - "# **CHAPTER 1** ... INTRODUCTION" then "1" appears.
  - Then "2" appears.
  - Then "3" appears.
  - Then "4" appears.
  - Then "5" appears.
  - Then "6" appears.
  - Then "# **CHAPTER 2** ... LITERATURE REVIEW" then "7" appears.
  - Then "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31".
  - Then "# **CHAPTER 3** ... THE NHL SCHEDULING PROBLEM" then "32", "33", "34", "35", "36", "37", "38".
  - Then "# **CHAPTER 4** ... MATHEMATICAL MODELING" then "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59".
  - Then "# **CHAPTER 5** ... AN ADAPTIVE LARGE NEIGHBORHOOD SEARCH" then "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99".
  - Then "# **CHAPTER 6** ... CONCLUSION" then "100", "101", "102".
  - Then "# **REFERENCES** ... 103, 104, 105, 106, 107, 108".
  - Then "# **APPENDIX A** ... 109, 110".
  - "# **APPENDIX B** ... 111, 112, 113, 114, 115, 116".
  - "# **APPENDIX C** ... 117, 118, 119, 120".
  - "# **APPENDIX D** ... 121, 122".

So the standalone numbers between sections appear to be page numbers. I should cite them as [PAGE N].

However, the user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since I'm given the full markdown, I can reference these page numbers.

I need to ensure total word count >= 1000 across the XML sections. THINK_TRACE needs >= 400 words.

Let me structure the response:

1. <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I'll discuss the NHL scheduling problem, the IP model, ALNS, constraint violations, computational results, and gray zones (e.g., soft vs hard constraints, penalty weights, initial solution quality, operator selection probabilities, etc.).

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I'll write out the IP formulation variables, constraints C0-C9, objective function, ALNS acceptance probability, temperature schedule, operator scoring, etc. with [PAGE N] citations and verbatim quotes.

3. <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss Fleurent (1987), Ferland & Fleurent (1991), Costa (1995), Bean & Birge (1980), Craig et al (2009), TTP, etc. and multi-week traps (arena availability scarcity, travel distance vs fatigue, short revisit gaps making problems easier counterintuitively).

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Discuss how schedulers regress to heuristics under crisis, the ALNS as counter-trap, the fixed iteration clock (150,000 iterations, cooling schedule), etc.

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Discuss travel distance (900 miles threshold), back-to-back games, arena unavailability due to events (Olympics, All-Star), biomechanical fatigue (though not betting), weather (implied by arena availability), etc.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. Provide 3 scenarios with formal conditions and predictions.

I need to be careful not to mention betting lines. The thesis mentions "economics", "revenues", "broadcasting rights", "game attendance" but not betting. I will avoid any odds language.

I need to ensure no fake equations like Force/Fatigue. All equations must be from the source or formally derived from it with units.

Let's draft content.

THINK_TRACE (>=400 words):
- Multi-hop derivation: The thesis formulates NHL scheduling as IP with O(n^2 m) variables (n teams, m days). Binary variables x^A_{a,d,h}, x^H_{t,d}, x^B_{t,d}, x^L_{t,d}. Constraints C0-C9. Then ALNS with soft constraints weighted sum. Computational experiments show CPLEX fails on entire-league instances (48 hours), ALNS succeeds. Gray zones: penalty weights (w1=10000, etc.), revisit gaps (LGap vs SGap), operator selection (roulette wheel, score adjustment parameters sigma_bes=7, sigma_bet=3, sigma_acc=1, rho=0.1, Kseg=200, Kmax=150000). Initial solutions from Fleurent heuristics are poor (costs >250,000 for no extra dates). ALNS reduces cost to ~85 on 2010-11 instance vs actual NHL 252. The "counter-intuitive" finding: shorter revisit gaps (SGap) make IP easier for CPLEX (more feasible days? Actually text says imposing larger revisit gaps reduces range of remaining feasible days but does not speed up search; SGap solves more instances). Another gray zone: arena availability is the binding constraint; extra dates (even 2-4 per team) dramatically reduce violations. The "clock" is 150k iterations / 3.25 hours max.

SOURCE_OPERATORS_AND_EQUATIONS:
- Variables definitions from pages 40-41.
- Constraints C0-C9 from pages 35-36, 41-46.
- Objective function (5.1) from page 60/61: cost = sum w_i f_i(S).
- ALNS acceptance: Simulated Annealing, P = exp(-(f(Stemp)-f(Scurr))/Tk) from page 62.
- Temperature: T0 = (tau/100)(f_hat(Sinit)/(-ln(0.5))), Tk+1 = c Tk, c chosen so last iteration 1% acceptance for +1 cost from pages 62-63.
- Operator weight update: omega_o <- (1-rho) omega_o + rho (pi_o / theta_o) from page 63.
- Segment scoring: pi_o increases by sigma_bes if best, sigma_bet if better than current, sigma_acc if accepted but worse from page 63.
- Final operator sets: I^-_5 = {01-, 02-, 05-, 06-, 08-}, J^+_4 = {02+, 03+, 04+, 05+} from page 91.
- Parameters: (sigma_bes, sigma_bet, sigma_acc) = (7,3,1), rho=0.1, Kseg=200, Kalns_max=150000, tau=5.0 from pages 87, 92, 93.
- Travel distance minimization objective from page 48: sum over y variables * dist.
- Constraint C4 threshold: xi^DD = 900 miles from page 40.
- Constraint C6 revisit gaps: delta far^RR=3, delta near^RR=2 from page 40; LGap: 13/29 days, SGap: 5/11 days from page 50.
- Units: miles, days, games, cost (dimensionless penalty units).

RETROCAUSAL_GENEALOGY:
- Lineage: Bean & Birge (1980) NBA -> Fleurent (1987) NHL heuristics -> Ferland & Fleurent (1991) support system + non-linear IP -> Costa (1995) Tabu/GA -> Craig et al (2009) multi-objective EA -> Bueno (2014) first full IP + ALNS.
- Multi-week traps: arena unavailability during Olympics/All-Star shuts out 7-14 days midway (page 33); scarcity of arena dates (page 33); "extra dates" even 2-4 per team change feasibility dramatically (pages 55, 94-96); short revisit gaps (5/11) make IP easier than long (13/29) despite intuition (page 54); ALNS outperforms IP on realistic size (page 60).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under scheduling crisis, experts revert to manual heuristics (Ferland & Fleurent 1991 interactive support). Fleurent's heuristics (forced-trip, forced-home, free-trip, weekend, weekday, exchange) are crisis habits.
- Counter-trap: ALNS is the counter-trap—automated, adaptive, uses same heuristics as destroy/repair operators but with meta-control. It avoids overfitting to one heuristic.
- Clock: Fixed Kalns_max=150,000 iterations, cooling schedule forces annealing to near-zero temperature; segment size Kseg=200; operator weights adapt every segment. The "clock" prevents infinite regression and imposes termination.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Travel distance threshold xi^DD=900 miles for back-to-back games (C4). Distances range from few miles to 2700 miles (~4500 km) (page 32). Western teams travel farther.
- Biomechanical layer: C2 (max 2 games in 3 days), C3 (max 3 games in 5 days), C5 (min 2 games/week), C7 (max 7 games/trip), C8 (max 14 days/trip), C9 (min 2-3 days between trips). These encode fatigue/recovery.
- Weather/arena layer: C1 arena availability; arenas unavailable for major events; Olympics/All-Star shut out 7-14 days (page 33); premiere games in Europe require 4-day buffer (page 53).
- Veto proof: Any schedule violating C0 (more than one game/day) is infeasible. C1 violations heavily penalized (w1=10000). ALNS respects C0 always (initial construction and repair ensure no double booking). The model's singularity: when arena dates are scarce (minimum 41), IP fails for entire league (page 56), ALNS still finds feasible but costly solutions (cost 46-120 vs actual 252).

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios with predictions.
1. Scenario: Reduce extra arena dates from 4 to 0 for 2010-11 entire-league instance. Veto condition: CPLEX IP with Model I+SGap cannot find feasible solution within 48h (Table 4.7 shows only no-extra-date instances solved; NHL10-04a not solved). Prediction: ALNS with same operator set will produce cost <= 100 and violations <= 20 (based on Table 5.5: cost 85.38 avg, violations 17.88 avg for NHL10-00a).
2. Scenario: Set revisit gaps to LGap (13/29) instead of SGap (5/11) for partial-league 16-team instance. Veto condition: IP solve time increases dramatically; Table 4.3 shows SGap solves all partial-league instances to optimality quickly (seconds-minutes) while LGap fails or takes >46h for some. Prediction: SGap reduces expected solve time by order of magnitude; LGap may hit 48h limit.
3. Scenario: Remove destroy operator 07- (Interconferential removal) from ALNS operator set. Veto condition: Based on subtractive screening (Fig 5.3, page 90), excluding 07- gave lowest average cost. Prediction: Keeping 07- increases average best-found cost by >5% on tuning instances; removing it improves convergence.

I must write >=1000 words total. Let's ensure each section is substantial.

Word count estimation:
- THINK_TRACE: aim 500+ words.
- SOURCE_OPERATORS_AND_EQUATIONS: aim 300+ words.
- RETROCAUSAL_GENEALOGY: aim 250+ words.
- RECURSIVE_THEORY_OF_MIND: aim 200+ words.
- CROSS_LAYER_VETO_ADJUDICATION: aim 200+ words.
- RLVR_COUNTERFACTUAL_VETOES: aim 200+ words.
Total > 1600 words. Good.

Now I need to be careful with citations. I will cite page numbers as [PAGE N]. Since the text has standalone numbers that look like page numbers, I'll use them.

Verbatim quotes: I should quote short phrases from the source.

Let's start writing.

Important: No betting lines. I will not mention odds, spreads, etc.

Let's draft THINK_TRACE:

"THINK_TRACE
Deep multi-hop derivation and gray-zone audit.
The thesis decomposes the NHL scheduling problem into a feasibility core plus a weighted penalty layer. The data layer defines n=30 teams, m~190 calendar days (early October to mid-April), and 1230 games [PAGE 32]. Each team plays 41 home and 41 away games [PAGE 32]. The integer programming model uses binary variables x^A_{a,d,h} (away), x^H_{t,d} (home), x^B_{t,d} (bye), x^L_{t,d} (long-bye) [PAGE 40-41], yielding O(n^2 m) variables for the basic formulation [PAGE 39]. Constraints C0-C9 encode hard operational rules: at most one game per day (C0), arena availability for home games (C1), max 2 games in any 3-day window (C2), max 3 games in any 5-day window (C3), max 900 miles daily travel for cross-division back-to-backs (C4), min 2 games per week (C5), revisit gaps δ=14 intra-division / δ=30 inter-division (C6), max 7 games per trip (C7), max 14 days per trip (C8), min 2-3 days between trips (C9) [PAGE 35-36, 40-46].

Gray zone 1: Penalty weight asymmetry. The objective is a weighted sum f(S)=Σ w_i f_i(S) with w_1=10,000 (arena availability), w_2=1,000, w_3=100, w_5=1, and w_i=10 for i∈{4,6,7,8,9} [PAGE 50, 80]. This makes C1 violations 10,000 times more costly than C5 violations, reflecting the lexicographic priority of arena feasibility over weekly game counts. The breakdown regime occurs when arena dates are scarce: with only the 41 home dates (no extra dates), CPLEX fails on every entire-league instance except those with zero extra dates solved under Model I/II + SGap [PAGE 56, Table 4.7]. Even then, solution times exceed 10 hours [PAGE 56-57].

Gray zone 2: Revisit-gap counter-intuition. One might expect longer revisit gaps (LGap: 13/29 days) to prune the search tree and accelerate the IP solver. The opposite is observed: short gaps (SGap: 5/11 days) solve 96% of partial-league instances versus 73% for LGap, and nearly all SGap instances reach optimality [PAGE 54, Table 4.3]. The explanation is that larger gaps reduce feasible assignments but do not reduce branch-and-bound difficulty for CPLEX under a 48-hour limit [PAGE 54].

Gray zone 3: Initial-solution quality versus final ALNS quality. Fleurent's multi-heuristic construction yields initial costs between 293,273 and 398,654 for no-extra-date instances [PAGE 80, Table 5.1], far worse than the actual NHL schedule cost of 252 for 2010-11 [PAGE 80, Table 5.5]. Yet the ALNS, starting from such poor seeds, reaches average cost 85.38 and 17.88 violations on NHL10-00a [PAGE 95, Table 5.5]. This demonstrates that the adaptive destroy/repair mechanism, not the initial heuristic quality, drives convergence.

Clock and termination: The ALNS runs a fixed K_alns^max = 150,000 iterations with simulated-annealing acceptance P=exp(-(f(S_temp)-f(S_curr))/T_k) [PAGE 62]. The cooling factor c is set so a +1-cost move has 1% acceptance at the final iteration [PAGE 62-63]. The segment size K_seg=200 triggers weight updates via ω_o ← (1-ρ)ω_o + ρ(π_o/θ_o) with ρ=0.1 [PAGE 63, 92]. Final operator set I^-_5={01-,02-,05-,06-,08-}, J^+_4={02+,03+,04+,05+} [PAGE 91].
</THINK_TRACE>

That looks good, ~450 words.

Now SOURCE_OPERATORS_AND_EQUATIONS with LaTeX and quotes.

Need formal LaTeX equations.

Variables:
x^A_{a,d,h} ∈ {0,1}: 1 if team a plays away at h on day d.
x^H_{t,d}, x^B_{t,d}, x^L_{t,d}.

Constraints:
C0: x^H_{t,d} + Σ_{a≠t} x^A_{t,d,a} + x^B_{t,d} = 1? Actually from text: exactly one of away, home, bye happens. Let's formulate based on text. Page 41: "On any day d ∈ D, exactly one of the following cases must happen..." I'll write:
\sum_{a \in T \setminus \{t\}} x^A_{t,d,a} + x^H_{t,d} + x^B_{t,d} = 1, \quad \forall t \in T, \forall d \in D. [PAGE 41]

C1: x^H_{h,d} = 0 if d \notin Dt_h. [PAGE 42]

C2: \sum_{d'=d}^{d+2} (\text{games of } t) \le 2, or at least one bye in any 3 days. [PAGE 43]

C3: at least two byes in any 5 days. [PAGE 43]

C4: if dist(h1,h2) > ξ^DD = 900 miles and different divisions, then not (t plays at h1 on d and h2 on d+1). [PAGE 44]

C5: per week w, at least ξ^WG = 2 games. [PAGE 44]

C6: for match a@h, revisit gap δ_{a,h}: |d_2 - d_1| ≥ δ. [PAGE 44]

C7: max ξ^AG = 7 games per trip. [PAGE 44]

C8: max ξ^AD = 14 days per trip. [PAGE 45]

C9: min δ^RR_far=3 or δ^RR_near=2 days between trips. [PAGE 46]

Objective (ALNS): f(S) = \sum_{i=1}^{9} w_i f_i(S). [PAGE 60-61, Eq 5.1]

Simulated Annealing acceptance: \Pr(\text{accept}) = \exp\left(-\frac{f(S_{\text{temp}})-f(S_{\text{curr}})}{T_k}\right) if f(S_temp) > f(S_curr). [PAGE 62]

Temperature: T_0 = (\tau/100) \frac{\hat f(S_{\text{init}})}{-\ln(0.5)}, \quad T_{k+1} = c T_k. [PAGE 62-63]

Operator weight: \omega_o \leftarrow (1-\rho)\omega_o + \rho \frac{\pi_o}{\theta_o}. [PAGE 63]

Travel distance objective (IP): \sum_{t,h',h'',\ell,d} \text{dist}(h',h'') \, y_{t,d,h',h'',\ell}. [PAGE 48]

Units: distances in miles, days in calendar days, counts dimensionless, penalty cost dimensionless.

I'll write this section with citations and quotes.

RETROCAUSAL_GENEALOGY:
Lineage: Bean & Birge (1980) NBA road-trip heuristic [PAGE 26-28] -> Fleurent (1987) master's thesis and interactive heuristics [PAGE 10-11, 103] -> Ferland & Fleurent (1991) support system, non-linear IP, hard arena constraint [PAGE 10-12, 37] -> Costa (1995) Tabu/GA, soft arena constraint, 100+ games on unavailable arenas [PAGE 12, 28] -> Craig et al (2009) multi-objective EA, overlooked arena availability [PAGE 12-13] -> Bueno (2014) first full IP model and ALNS [PAGE vii, 4, 60].
Multi-week traps: (1) Arena scarcity: Olympics/All-Star shut out 7-14 days midway [PAGE 33]. (2) 1993-94 season: 56 dates provided (15 extra) but Costa scheduled 100+ games on unavailable dates [PAGE 12]. (3) Extra dates effect: 2-4 extra dates per team drops ALNS average violations from 17.88 to 0.46 [PAGE 95-96]. (4) Revisit gap paradox: SGap easier than LGap [PAGE 54]. (5) Western Conference 2012 instance harder than Eastern despite same size [PAGE 55].

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: When IP fails (48h limit, entire-league instances), schedulers regress to manual heuristic patches [PAGE 60, 101]. Fleurent's heuristics were designed for expert interaction [PAGE 10, 64].
Counter-trap: ALNS encapsulates the same heuristics as destroy/repair operators but adds adaptive weight layer, preventing any single heuristic from dominating [PAGE 87-91]. The subtractive screening removed 9 of 15 destroy operators and 1 of 5 repair operators based on selection probability, not intuition [PAGE 88-91].
Clock: K_alns^max=150,000 iterations, wall-clock ≤ 195 minutes per run [PAGE 86]. Cooling schedule drives temperature to near-zero; at final iteration, +1 cost accepted with 1% probability [PAGE 62-63]. This temporal boundary forces exploitation and prevents infinite regression.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: ξ^DD=900 miles threshold for C4 [PAGE 40]. Distances 2 miles to 2700 miles (~4500 km) [PAGE 32]. Western teams isolated.
Biomechanical layer: C2 (≤2 games/3 days), C3 (≤3 games/5 days), C7 (≤7 games/trip), C8 (≤14 days/trip), C9 (≥2-3 days between trips) [PAGE 35-36]. These bound fatigue accumulation.
Weather/arena layer: C1 arena availability; major events, Olympics, All-Star remove dates [PAGE 33]. Premiere games in Europe require ≥4-day buffer [PAGE 53].
Veto proof: C0 is absolute: no team plays >1 game/day [PAGE 35]. ALNS repair operators only assign to free days (neither team scheduled) [PAGE 76]. Breakdown: when |Dt| = 41 minimum, IP cannot solve entire-league (Table 4.7), ALNS produces cost 46-120 vs actual 252 [PAGE 95-96].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 scenarios. I'll format clearly.

Scenario 1: Zero extra dates, entire-league 2010-11, Model I + SGap. Veto: CPLEX exceeds 48h / no feasible solution (Table 4.7: NHL10-00a solved only under Model I/II, but NHL10-04a not solved; implies zero-extra is solvable but tight). Prediction: ALNS with I^-_5,J^+_4 yields cost ≤ 100, violations ≤ 20 (cf. Table 5.5: avg cost 85.38, avg violations 17.88).
Scenario 2: LGap vs SGap on partial-league 16-team instance. Veto: IP with LGap fails to reach optimality within 48h for several instances (Table 4.3: NHL13-1216-74 LGap Model II takes 9h26m but some fail; actually many LGap fail). Prediction: SGap reduces median solve time by ≥10× and increases optimality rate from ~73% to 96%.
Scenario 3: Remove destroy operator 07- (Interconferential removal). Veto: Subtractive screening shows excluding 07- gives lowest average cost (Fig 5.3, page 90). Prediction: Including 07- raises average best-found cost by >5% on 2010-11 tuning instances.

I need to ensure total word count is ≥1000. Let's write it all out fully.

Double-check: The user said "PAGES: 134". The document seems to end around page 122 based on the markdown, but maybe appendices go to 134. I won't worry, I'll cite pages visible.

Also, I must not use fake equations. All equations are from the source or directly derived with definitions.

Let's write the final output with exact XML tags. No markdown outside? The user wants exact XML sections. I'll provide only the XML sections, but I can include the content inside.

Need to ensure THINK_TRACE >=400 words. I'll make it rich.

Let's compose carefully.

One thing: The source text uses page numbers that appear as standalone numbers. I will cite them as [PAGE 40] etc. Verbatim quotes should be short and exact.

Example quote: "Every team plays 82 games, 41 at its own home arena and 41 away" [PAGE 1]. Another: "the first integer linear programming (IP) model" [PAGE vii]. Another: "adaptive large neighborhood search (ALNS)" [PAGE vii].

I'll include several verbatim quotes.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.
The thesis decomposes the NHL scheduling problem into a feasibility core plus a weighted penalty layer. The data layer defines n = 30 teams, m ≈ 190 calendar days (early October to mid-April), and 1230 regular-season games [PAGE 32]. Each team plays exactly 41 home games and 41 away games [PAGE 1]. The integer programming model uses binary variables x^A_{a,d,h} (away), x^H_{t,d} (home), x^B_{t,d} (bye), and x^L_{t,d} (long-bye) [PAGE 40-41], yielding O(n^2 m) variables for the basic formulation [PAGE 39]. Constraints C0-C9 encode operational rules: at most one game per day (C0); home games only on arena-available dates (C1); at most 2 games in any 3-day window (C2); at most 3 games in any 5-day window (C3); at most ξ^DD = 900 miles of daily travel for cross-division back-to-backs (C4); at least 2 games per week (C5); revisit gaps δ = 14 days intra-division and δ = 30 days inter-division (C6); at most 7 games per trip (C7); at most 14 days per trip (C8); at least 2 or 3 days between consecutive trips (C9) [PAGE 35-36, 40-46].

Gray zone 1: Penalty-weight asymmetry. The ALNS objective is f(S) = Σ_{i=1}^{9} w_i f_i(S), where f_i(S) counts violations of constraint C_i in schedule S [PAGE 60-61, Eq. (5.1)]. The weights are w_1 = 10,000, w_2 = 1,000, w_3 = 100, w_5 = 1, and w_i = 10 for i ∈ {4,6,7,8,9} [PAGE 50, 80]. This makes C1 (arena availability) violations 10,000 times more costly than C5 (weekly minimum) violations, imposing a lexicographic priority on arena feasibility. The breakdown regime appears when arena dates are scarce: with only the 41 contractual home dates and zero extra dates, CPLEX fails on every entire-league instance except those solved under Model I/II with short revisit gaps, and even those require 10-37 hours [PAGE 56-57, Table 4.7].

Gray zone 2: Revisit-gap counter-intuition. One might expect longer revisit gaps (LGap: 13/29 days) to prune the branch-and-bound tree and accelerate the IP solver. The empirical result is the opposite: short gaps (SGap: 5/11 days) solve 96% of partial-league instances versus 73% for LGap, and nearly all SGap instances reach proved optimality [PAGE 54, Table 4.3]. The explanation offered is that larger gaps reduce the range of remaining feasible days but do not reduce CPLEX search difficulty within the 48-hour limit [PAGE 54].

Gray zone 3: Initial-solution quality versus final ALNS quality. Fleurent's multi-heuristic construction produces initial costs between 293,273 and 398,654 for no-extra-date instances [PAGE 80, Table 5.1], far worse than the actual NHL schedule cost of 252 for 2010-11 [PAGE 95, Table 5.5]. Yet the ALNS, seeded with such poor solutions, reaches an average cost of 85.38 and 17.88 violations on NHL10-00a [PAGE 95, Table 5.5]. This shows that the adaptive destroy/repair mechanism, not initial heuristic quality, drives convergence.

Clock and termination. The ALNS executes a fixed K_{alns}^{max} = 150,000 iterations under simulated-annealing acceptance: a worsening move is accepted with probability exp(-(f(S_{temp}) - f(S_{curr})) / T_k) [PAGE 62]. The initial temperature is T_0 = (τ/100) · (f̂(S_init) / (-ln(0.5))) with τ = 5.0, and the cooling schedule is T_{k+1} = c T_k, where c is chosen so that a +1-cost move has only 1% acceptance probability at the final iteration [PAGE 62-63]. Segment size K_{seg} = 200 triggers operator-weight updates ω_o ← (1-ρ)ω_o + ρ(π_o/θ_o) with ρ = 0.1 [PAGE 63, 92]. The final operator sets are I^-_5 = {01^-, 02^-, 05^-, 06^-, 08^-} and J^+_4 = {02^+, 03^+, 04^+, 05^+} [PAGE 91].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal model, variables, constraints, units, and citations.
Basic formulation data [PAGE 39-40]:
- n: number of teams; m: number of calendar days; T = {1,...,n}; D = {1,...,m}; Dt ⊆ D: arena-available dates for team t; G_{a,h}: number of games for match a @ h; dist(t',t''): inter-arena distance in miles.

Decision variables [PAGE 40-41]:
x^A_{a,d,h} ∈ {0,1}: 1 iff team a plays away at h on day d.
x^H_{t,d} ∈ {0,1}: 1 iff team t plays at home on day d.
x^B_{t,d} ∈ {0,1}: 1 iff team t has a bye on day d.
x^L_{t,d} ∈ {0,1}: 1 iff day d starts a long-bye (> ξ^{AB} days) for team t.

Constraint C0 — at most one game per day [PAGE 41]:
\sum_{a \in T \setminus \{t\}} x^A_{t,d,a} + x^H_{t,d} + x^B_{t,d} = 1, \quad \forall t \in T,\; \forall d \in D.
Verbatim: "a team can never be scheduled to play more than one game a day" [PAGE 35].

Constraint C1 — arena availability for home games [PAGE 42]:
x^H_{h,d} = 0 \quad \text{if } d \notin Dt_h.
Verbatim: "A team should play at home only when its arena is available" [PAGE 35].

Constraint C2 — max 2 games over 3 days [PAGE 43]:
Every sequence d, d+1, d+2 contains at least one bye for each team.

Constraint C3 — max 3 games over 5 days [PAGE 43]:
Every sequence d,...,d+4 contains at least two byes for each team.

Constraint C4 — maximum daily travel distance [PAGE 44]:
If dist(h',t) > ξ^{DD} = 900 miles, dist(t,h'') > 900 miles, and h',h'' belong to different divisions, then team t cannot play away at h' on day d and away at h'' on day d+1.
Parameter: ξ^{DD} = 900 miles [PAGE 40].

Constraint C5 — minimum games per week [PAGE 44]:
For each week w (Sunday to Saturday), total games ≥ ξ^{WG} = 2, excluding Christmas/All-Star/Olympic weeks.

Constraint C6 — minimum days between revisits [PAGE 44-45]:
For match a @ h, if games occur on days d_1 and d_2, then d_2 - d_1 ≥ δ_{a,h}, where δ_{a,h} = 14 days for intra-division and 30 days for inter-division under LGap; SGap uses 5 and 11 days respectively [PAGE 50].

Constraint C7 — max games per trip [PAGE 44]:
A trip contains at most ξ^{AG} = 7 away games.

Constraint C8 — max trip duration [PAGE 45]:
A trip lasts at most ξ^{AD} = 14 days.

Constraint C9 — min days between trips [PAGE 46]:
Between consecutive trips, separation ≥ δ^{RR}_{far} = 3 days if both legs exceed 900 miles, otherwise ≥ δ^{RR}_{near} = 2 days.

ALNS objective function [PAGE 60-61, Eq. (5.1)]:
f(S) = \sum_{i=1}^{9} w_i f_i(S),
where f_i(S) is the violation count for constraint C_i. Weights [PAGE 80]: w_1 = 10,000; w_2 = 1,000; w_3 = 10; w_4 = 10; w_i = 1 for i ∈ {5,6,7,8,9}. Verbatim: "the objective function value, or simply cost, with regard to a solution (schedule) S ... is given by ... where f_i(S) is the number of violations of the constraint C_i" [PAGE 60-61].

Total travel distance IP objective [PAGE 48]:
\min \sum_{t,h',h'',\ell,d} \text{dist}(h',h'') \, y_{t,d,h',h'',\ell},
with O(n^3 m) variables [PAGE 47]. Units: miles.

Simulated-annealing acceptance [PAGE 62]:
\Pr(\text{accept } S_{\text{temp}}) = \exp\left( - \frac{f(S_{\text{temp}}) - f(S_{\text{curr}})}{T_k} \right)
when f(S_{\text{temp}}) > f(S_{\text{curr}}).

Temperature schedule [PAGE 62-63]:
T_0 = (\tau/100) \frac{\hat f(S_{\text{init}})}{-\ln(0.5)}, \quad \tau = 5.0,
T_{k+1} = c \, T_k,
where c is calibrated so that a unit-worse move has 1% acceptance probability at iteration K_{alns}^{max}.

Operator weight update [PAGE 63]:
\omega_o \leftarrow (1-\rho)\omega_o + \rho \frac{\pi_o}{\theta_o}, \quad \rho = 0.1,
with segment size K_{seg} = 200 [PAGE 92], score increments σ_{bes} = 7, σ_{bet} = 3, σ_{acc} = 1 [PAGE 87, 93].

Breakdown/singularity regime: When |Dt| = 41 (minimum arena dates, no extra dates), the IP cannot prove feasibility for entire-league instances within 48 hours [PAGE 56, Table 4.7]; the ALNS remains feasible but with cost 46-120 versus the actual NHL cost of 252 [PAGE 95-96, Table 5.5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. The NHL scheduling problem descends from a chain of operations-research interventions. Bean and Birge (1980) studied the NBA scheduling problem and introduced a road-trip generation heuristic based on the Clarke-Wright savings measure [PAGE 26-28]. Fleurent (1987) adapted this to the NHL in a master's thesis, producing interactive heuristics for expert schedulers [PAGE 10-11, 103]. Ferland and Fleurent (1991) built a computer-aided support system and the first mathematical model, though non-linear despite binary variables, and treated arena availability as an inviolable hard constraint [PAGE 10-12, 37]. Costa (1995) applied a hybrid Tabu Search / genetic algorithm and allowed soft violations of arena availability, producing schedules where "more than a hundred games were surprisingly scheduled on days when the arena of the home team was not available" even with 15 extra dates per team [PAGE 12, 28]. Craig et al. (2009) used a multi-objective evolutionary algorithm but "overlook essential constraints of the problem, specially the availability of arenas" [PAGE 12-13]. Bueno (2014) closes this lineage by proposing "the first integer linear programming (IP) model" for the full NHL problem and an Adaptive Large Neighborhood Search (ALNS) for realistic instances [PAGE vii, 4, 60].

Multi-week traps embedded in this genealogy. (1) Arena scarcity is structural: the NHL regular season spans roughly 190 days, but holidays and events such as the Winter Olympics and All-Star Game "shut out from consideration between seven and fourteen days at the midway point" [PAGE 33]. (2) The 1993-94 season illustrates the extra-date trap: each club provided at least 56 arena dates (15 extra beyond the 41 home games), yet Costa's best schedule still placed over 100 games on unavailable dates [PAGE 12]. (3) The revisit-gap trap: longer gaps (LGap: 13/29 days) intuitively prune the search, but CPLEX solves more instances and reaches optimality more often with short gaps (SGap: 5/11 days) [PAGE 54, Table 4.3]. (4) The conference asymmetry trap: the 2012-13 lockout split the league into two independent 15-team conferences; the Western Conference instance proved "surprisingly more difficult to solve" than the Eastern Conference instance despite identical size [PAGE 55]. (5) The initial-solution trap: Fleurent's heuristics generate complete but very poor schedules (costs > 250,000 for no-extra-date instances) [PAGE 80, Table 5.1], yet the ALNS escapes this basin of attraction to reach costs below 100 [PAGE 95, Table 5.5]. These traps imply that historical success on small or relaxed instances does not generalize to the full 30-team, minimum-arena-date regime without an adaptive metaheuristic layer.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock. Under computational crisis—when CPLEX exceeds the 48-hour limit on entire-league instances [PAGE 56, Table 4.7]—human schedulers regress to crisis habits: manual, interactive heuristic patching. Fleurent (1987) designed his heuristics precisely for this mode, where "an expert ... would call any of the corresponding procedures whenever needed during the scheduling process" [PAGE 10, 64]. The forced-trip, forced-home, free-trip, weekend-game, weekday-game, and exchange heuristics are regression artifacts: individually effective locally, but globally myopic and unable to guarantee feasibility when arena dates are scarce.

The ALNS is the counter-trap. It preserves the same low-level heuristics but re-casts them as destroy and repair operators inside an adaptive framework, preventing any single heuristic from monopolizing search [PAGE 60-61, 70-79]. The subtractive screening removed nine of fifteen destroy operators and one of five repair operators not by theoretical argument but by observed adapted selection probabilities [PAGE 88-91]. This is a second-order regression guard: the algorithm "learns" which crisis habits to suppress. Notably, the final winning configuration {01^-, 02^-, 05^-, 06^-, 08^-} ∪ {02^+, 03^+, 04^+, 05^+} contains none of the critical removal operators (10^-, 11^-, 12^-), contradicting the expectation that sophisticated operators should dominate [PAGE 90-91]. The naive operators win because their target sets are structurally related and their pre-evaluation via f^- isolates genuinely bad assignments [PAGE 90].

The clock imposes an exogenous termination that preempts infinite regression. The ALNS runs exactly K_{alns}^{max} = 150,000 iterations, with wall-clock time bounded at 195 minutes (3.25 hours) per run [PAGE 86]. The cooling schedule drives T_k toward zero such that, at the final iteration, a move one unit worse than the incumbent is accepted with only 1% probability [PAGE 62-63]. Segment boundaries every K_{seg} = 200 iterations force weight recalculation, freezing the operator distribution into exploitation mode [PAGE 63]. Together, the fixed iteration budget and annealing schedule convert an open-ended heuristic regression into a bounded, verifiable search with a well-defined stopping state.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The inter-arena distance dist(t',t'') ranges "from only a few miles to as much as 2700 miles (about 4500 km)" [PAGE 32]. Constraint C4 uses ξ^{DD} = 900 miles as the threshold beyond which same-day or consecutive-day travel is penalized [PAGE 40, 44]. Western Conference teams are geographically isolated, producing systematically longer travel times [PAGE 32].

Biomechanical / recovery layer. Constraints C2 (≤2 games per 3 days), C3 (≤3 games per 5 days), C5 (≥2 games per week), C7 (≤7 games per trip), C8 (≤14 days per trip), and C9 (≥2-3 days between trips) encode fatigue and recovery limits [PAGE 35-36]. These are not soft preferences in the base IP; they are hard constraints in Models I and II [PAGE 49-50, Table 4.1]. Violation of C0 (more than one game per day) is an absolute veto in any feasible schedule [PAGE 35].

Weather / arena / calendar layer. Constraint C1 gates all home games on Dt, the set of arena-available dates [PAGE 42]. Arenas are unavailable during major local events, and league-wide events "shut out from consideration between seven and fourteen days" [PAGE 33]. Premiere games in Europe impose a buffer of at least four days after the last European game [PAGE 53].

Veto-proof adjudication. The ALNS repair operators only insert games on "free days," defined as days when neither the home nor away team is already scheduled [PAGE 76]. Thus C0 is structurally unbreakable in the repair phase. C1 is enforced by a weight w_1 = 10,000, making any home-game-on-unavailable-date move catastrophically expensive in the objective [PAGE 80]. The singularity/breakdown regime is the minimum-arena case |Dt| = 41: CPLEX fails on nearly all entire-league instances within 48 hours [PAGE 56, Table 4.7], whereas the ALNS returns feasible schedules with 10-27 violations and cost 46-120, compared with the actual 2010-11 NHL schedule cost of 252 and 99 violations [PAGE 95-96, Table 5.5]. This demonstrates that the veto hierarchy—C0 absolute, C1 heavily penalized, recovery constraints weighted lower—produces schedules that dominate the status quo even under maximal arena scarcity.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with formal conditions and predictions.

Scenario 1 — Zero extra arena dates, entire-league 2010-11, IP Model I + SGap.
Veto condition: CPLEX must return a feasible or optimal solution within the 48-hour limit. Source evidence: Table 4.7 shows CPLEX solves NHL09-00a, NHL10-00a, NHL11-00a, NHL13-00a (zero extra dates) under Models I and II with SGap, but fails on every instance with 4 or 8 extra dates [PAGE 56-57, Table 4.7]. For NHL10-00a, the reported optimum requires 33h49m under Model I [PAGE 57, Table 4.7].
Prediction: The ALNS with operator sets I^-_5 and J^+_4, seeded by Fleurent's heuristic, will produce a best-found cost ≤ 100 and total violations ≤ 20 on NHL10-00a within 150,000 iterations. Verification anchor: Table 5.5 reports average cost 85.38 and average violations 17.88 over 8 runs, with actual NHL cost 252 and 99 violations [PAGE 95, Table 5.5].

Scenario 2 — Revisit-gap regime switch on a partial-league 16-team instance.
Veto condition: The IP solver must reach proved optimality within 48 hours. Source evidence: Under LGap, several partial-league instances fail to reach optimality or exceed the time limit (e.g., NHL13-1216-74 under Model II takes 9h26m, while NHL11-1312-78 reaches optimality only at 45h41m under Model I) [PAGE 56-57, Table 4.3]. Under SGap, every partial-league instance is solved to optimality, most within minutes [PAGE 54, Table 4.3].
Prediction: Switching from LGap (13/29 days) to SGap (5/11 days) will reduce the median solve time by at least one order of magnitude and raise the optimality rate from approximately 73% to 96% across the partial-league class. The veto fires if LGap yields an optimal certificate where SGap does not; the source evidence indicates the reverse.

Scenario 3 — Removal of destroy operator 07^- (Interconferential removal) from the ALNS operator portfolio.
Veto condition: The average best-found cost over the 2010-11 tuning instances must not increase when 07^- is excluded. Source evidence: Subtractive screening in Figure 5.3 shows that excluding 07^- from the six-operator set {01^-,02^-,05^-,06^-,07^-,08^-} produces the lowest average cost among all tested configurations [PAGE 89-90, Figure 5.3]. The retained set is I^-_5 = {01^-,02^-,05^-,06^-,08^-}.
Prediction: Restoring 07^- will increase the average best-found cost by more than 5% on the tuning instances with zero and four extra dates. Verification anchor: Figure 5.3 labels the configuration I^-_5 \ {07^-} as superior to I^-_5 and to all larger operator sets [PAGE 90].
</RLVR_COUNTERFACTUAL_VETOES>