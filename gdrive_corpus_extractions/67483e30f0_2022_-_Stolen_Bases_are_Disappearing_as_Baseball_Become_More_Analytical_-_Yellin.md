---
source: "2022 - Stolen Bases are Disappearing as Baseball Become More Analytical - Yellin et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2022"
pages: 6
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6194
---

<NATIVE_REASONING>
The user wants me to analyze a source document (a Wharton Sports Analytics Journal paper about stolen bases disappearing as baseball becomes more analytical). They want a structured response with specific XML sections, strict invariants (no betting lines, no toy equations, formal LaTeX, SI/information/probability units, assumptions, singularity/breakdown regimes, cite [PAGE N] markers and verbatim quotes when source pages provided), and >=1,000-word depth across specific XML sections.

The sections required:
1. <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
2. <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
3. <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "STRICT INVARIANTS" including ZERO BETTING LINES and ZERO TOY EQUATIONS. They want formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

I need to write >=1000 words total across sections. The THINK_TRACE alone must be >=400 words.

Let me plan the content.

First, understand the source:
- Title: "Stolen Bases are a Bad Value Proposition, a 2019 Update" by Yellin, Chen, Coker, Shariff. Wharton Moneyball Academy Training Camp 2020, Sports Analytics Student Research Journal.
- 6 pages provided.
- Page 1: Title/authors.
- Page 2: Overview: wSB (weighted stolen bases estimates runs contributed), Speed score (Spd) 0-10 league avg 4.5, steal success percentage SB/SB attempts. Correlation definition. Why: understand decline of steals in MLB. Risk of stealing using 2019 season data.
- Page 3: Scatterplots: success % vs wSB correlation 0.5816242 (decently correlated, clear trendline). Success % vs Spd correlation 0.37617 (very light). Success % vs R (runs scored) correlation 0.1553179 (almost not correlated). Surprising because expected efficient stealers score more. Sources: Fangraphs, BaseballSavant, Lahman Database. Filter: players >100 PA.
- Page 4: Analysis/conclusions: positive somewhat strong correlation ~0.58 between success % and wSB. Players caught stealing at low rate contribute positively. Low correlation ~0.38 between success % and speed—more than pure speed (pitcher delivery, runner's jump, catcher's arm). Very low correlation ~0.16 between success % and runs scored. Even successful stealers didn't significantly contribute to run total/ability to win. Main objective advance bases/score more runs, surprised by low correlation.
- Page 5: Online Sources: stealing worth risk if safe ~70% of time (required success rate). Exact % depends on base, outs, batting order (don't steal if Trout batting). Over time attempts down, success rates skyrocketed. In 2015 actual success rate (67) higher than required (65). Required rate lowers to about 60% late in game (home team down by 1, speedster on first, decent hitter up, less than 2 outs).
- Page 6: Final Conclusion: Some successful base stealers contribute decent amount, majority relatively low. Speed not as correlated as thought. Depends on host factors out of runner's control. Billy Beane and Paul DePodesta right: outs precious, stealing jeopardizes them. Takes prolific base stealer (Henderson) to make significant contribution to wins. Station to station safe and usually smart.

I must not mention betting lines (spreads, totals, moneylines, odds). The source mentions "worth the risk" and "required success rate" but I must frame in probability/decision-theoretic terms, not betting odds. I can discuss expected run value, break-even probability, etc., using formal probability.

I must avoid toy equations like Force/Fatigue. I can use formal LaTeX for expected runs, break-even success rate, correlation coefficients, etc., with proper units (runs, dimensionless correlation, probability [0,1], PA count).

Singularity/breakdown regimes: e.g., when sample size <100 PA (filter excluded), when success rate p < break-even p* (negative expected run value), when correlation approaches zero (runs scored vs SB success), when speed score Spd is insufficient because other factors dominate, late-game state with home team down by 1 lowers required rate to ~0.60 (contextual singularity where conventional station-to-station advice may flip under specific leverage states).

Let's structure.

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive expected run value of a stolen base attempt.
- Let R_1 be expected runs with runner on first, no outs (or relevant base/out state), R_2 expected runs with runner on second, same outs, R_out expected runs with runner out and one additional out (or bases empty with out).
- Attempt success probability p. Expected value EV = p * (R_2 - R_1) + (1-p) * (R_out - R_1). Break-even p* = (R_1 - R_out) / [(R_2 - R_1) + (R_1 - R_out)]? Let's derive carefully.
- Actually standard: EV = p * ΔR_success + (1-p) * ΔR_failure. Set EV=0 => p* = -ΔR_failure / (ΔR_success - ΔR_failure). Where ΔR_success = R_after_success - R_before, ΔR_failure = R_after_failure - R_before (negative).
- Connect to source: Page 5 says worth risk if safe ~70% (required success rate), exact depends on base/outs/batting order. Page 5 says 2015 actual 67% > required 65%. Page 5 late game required rate lowers to ~60%.
- Gray-zone audit: The paper filters >100 PA (Page 3), which truncates low-volume runners and may bias wSB correlation. Correlation ≠ causation; wSB is itself derived from SB/CS so correlation with success % is mechanically inflated (same numerator). Runs scored correlation ~0.155 is ecological: team context, batting order, park effects confound. Speed score 0-10 league avg 4.5 (Page 2) is a composite, not raw sprint speed; correlation 0.376 means jump, pitcher delivery, catcher arm matter (Page 4). Gray zone: "don't steal if Trout's batting" (Page 5) implies opportunity cost of outs depends on downstream batter quality—a state variable not in the simple bivariate correlations.
- Word count target: 400+.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Define variables with units.
- wSB: runs (dimensionless run units). Spd: unitless index 0-10, mean 4.5. p_SB = SB / (SB+CS), unitless probability [0,1]. R: runs scored, count.
- Correlation ρ ∈ [-1,1]. Report exact values from text: ρ(wSB,p)=0.5816242 [PAGE 3]; ρ(Spd,p)=0.37617 [PAGE 3]; ρ(R,p)=0.1553179 [PAGE 3]. Rounded in Page 4: ~0.58, ~0.38, ~0.16.
- Expected runs operator: Let V(b,o) be expected runs in remainder of inning from base-out state (b,o), measured in runs. V: {0,1,2,3}×{0,1,2} → ℝ⁺. For a steal of second with no one else on: before state (1B, o), after success (2B, o), after failure (∅, o+1) if out recorded (or runner out, batter? actually caught stealing removes runner and adds out). EV_steal(o) = p·[V(2B,o) − V(1B,o)] + (1−p)·[V(∅,o+1) − V(1B,o)]. Units: runs per attempt.
- Break-even p*(o) = [V(1B,o) − V(∅,o+1)] / { [V(2B,o) − V(1B,o)] + [V(1B,o) − V(∅,o+1)] }.
- Source-implied p* ≈ 0.70 generically [PAGE 5], p* ≈ 0.65 in 2015 [PAGE 5], p* ≈ 0.60 late-game specific state [PAGE 5]. Actual 2015 p_actual = 0.67 > 0.65 [PAGE 5].
- Sample filter: N_P A > 100 [PAGE 3]. Breakdown regime: p < p* ⇒ negative expected runs; ρ → 0 ⇒ no linear predictive signal (R vs p); Spd alone insufficient because conditional variance from pitcher/catcher/jump; small PA (<100) excluded causing survivorship bias.
- Citations [PAGE N] and verbatim quotes.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Bill James, Pete Palmer (The Hidden Game of Baseball), expected run matrix (24 base-out states). Billy Beane & Paul DePodesta / Moneyball (outs precious) [PAGE 6]. Rickey Henderson as outlier [PAGE 6]. Evolution from station-to-station to analytical aversion to steals, but recent rule changes (bigger bases, pickoff limits, pitch clock) altering p* dynamically. Multi-week traps: early-season small-sample wSB noise; pitcher/catcher battery adaptation over a series; stolen-base rate spikes after rule changes then defensive adjustment; regression of speedsters who rely on jump vs catcher pop-time. 24 base-out entropy, leverage index. The "disappearing" trend is not uniform across game states (late-game p* lower [PAGE 5]).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Managerial theory of mind: crisis habit = station-to-station conservatism (avoid outs) vs counter-trap = aggressive running when defense expects station-to-station (surprise element), vs clock = pitch clock / pickoff limits reducing time between pitches, compressing decision window for pitcher and runner.
- Recursive layers: L0 runner decides jump; L1 pitcher/catcher anticipate runner; L2 manager anticipates defensive adjustment; L3 league rule change alters payoff matrix. Crisis regression: after a costly CS, manager reverts to station-to-station even when p > p* (Page 6: outs precious). Counter-trap: steal when defense sets for conservative running, exploiting the lower effective catcher throw probability. Clock: pitch clock reduces pitcher's ability to vary hold times, potentially increasing p and lowering effective p* for speedsters; but pickoff limits may reduce pickoff attempts, changing runner's lead optimization.
- Mention verbatim from Page 6: "outs are precious, and stealing bases jeopardizes them" and "Station to station baseball is the safe option-and usually the smart one."

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: base path 90 ft (27.432 m), catcher pop-time ~2.0 sec, pitcher delivery to plate ~1.25-1.4 sec, runner first-to-second ~3.3-3.5 sec for elite. Biomechanics: jump reaction time, acceleration, slide biomechanics. Weather: wind, temperature, precipitation affecting ball grip, field traction, pitcher viscosity? Actually MLB games are outdoor; weather affects ball flight less for stolen bases (not a batted ball) but affects traction (wet grass/dirt), cold reducing muscle elasticity, wind maybe negligible. Umpires' strike zone? Not relevant. Veto conditions: if catcher pop-time + throw time < runner's lead + jump + sprint time ⇒ veto steal. Rain delay / wet conditions ⇒ increased slip risk ⇒ raise effective p* (biomechanical failure mode). Extreme cold ⇒ reduced grip on ball for catcher transfer? Might help runner slightly but hurt throw. Breakdown: if surface coefficient of friction μ < threshold, slide overshoot or inability to push off ⇒ p collapses independent of speed score. The paper notes "host of other factors, some out of runner's control" [PAGE 4]—pitcher delivery, runner's jump, catcher's arm. These are physical layer variables not captured by Spd (correlation only 0.376 [PAGE 3]).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some evaluation framework. Need 3 verifiable counterfactual veto scenarios with predictions.
  1. Scenario: A runner with Spd > 7 attempts a steal of second with 0 outs in the 1st inning against a catcher with pop-time < 1.9s and pitcher delivery > 1.4s. Veto: physical model predicts catcher release-to-tag < runner arrival ⇒ p < p* ≈ 0.70. Prediction: attempt suppressed or results in CS; expected run value negative.
  2. Scenario: Late game (8th+), home team down by 1, runner on first, <2 outs, decent hitter (not Trout) up. Source Page 5 says p* ≈ 0.60. Counterfactual: if manager applies blanket station-to-station veto from Page 6 despite p > 0.60, that's a decision error. Prediction: suppressing the steal forfeits positive EV; win probability increases if attempt occurs given p > 0.60.
  3. Scenario: Early season (Week 1-2), PA < 100 filter means wSB unstable; a player with high small-sample wSB is given green light. Veto: statistical singularity—low PA => high variance in wSB, correlation ρ=0.5816 [PAGE 3] not reliable for individual inference. Prediction: regression to mean; wSB contribution decays, steal attempts based on small-sample wSB underperform break-even p*.
- Each must be verifiable (can be checked with Statcast data: pop times, pitcher times, sprint speed, base-out run expectancy matrix). Provide predictions.

Need to ensure total words >= 1000 across sections. THINK_TRACE >= 400. I'll aim for ~1300-1500 total.

Check invariants:
- Zero betting lines: avoid "spread", "total", "moneyline", "odds". I can say "expected run value", "break-even probability", "probability", "runs per attempt". That's fine.
- Zero toy equations: no invented fake ratios like Force/Fatigue. My equations are formal decision-theoretic / run expectancy. I must state assumptions and singularity/breakdown regimes explicitly.
- Cite [PAGE N] markers and verbatim quotes when source pages provided. I will quote exact phrases with [PAGE N].
- LaTeX: use \( ... \) or $$ ... $$.
- SI/information/probability units: runs (dimensionless but unit), probabilities [0,1], PA count (dimensionless count), seconds for physical times, meters for distance, correlation coefficient dimensionless.

I need to be careful: The source text uses percentages like 67 and 65 without explicit % signs but context implies percentage points. I should write p_actual = 0.67, p* = 0.65 to be formal.

Word count: Let's draft carefully.

Structure:
```xml
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
```

I need to make sure THINK_TRACE is at least 400 words. I'll write substantial content.

Let's draft THINK_TRACE:

Start with multi-hop derivation:
- Source establishes three metrics: wSB (runs contributed), Spd (0-10, mean 4.5), p_SB = SB/attempts [PAGE 2].
- Correlation table: ρ(wSB,p)=0.5816242, ρ(Spd,p)=0.37617, ρ(R,p)=0.1553179 [PAGE 3].
- The paper infers that stealing is generally a bad value because outs are precious [PAGE 6].
- Derivation: Let V(b,o) be expected runs. For steal of second: EV = p·ΔV_success + (1−p)·ΔV_failure. ΔV_success = V(2B,o) − V(1B,o) > 0. ΔV_failure = V(∅,o+1) − V(1B,o) < 0. Break-even p* solves EV=0.
- Source says generic required success rate ~70% [PAGE 5], 2015 actual 67% vs required 65% [PAGE 5], late-game specific state p* ~ 60% [PAGE 5]. These are point estimates from a run-expectancy framework not fully reproduced in the text but implied.
- Gray-zone audit: (1) Mechanical correlation inflation: wSB is computed from SB and CS outcomes, so ρ(wSB,p) shares numerator with p_SB; cannot be interpreted as independent validation. (2) Selection filter >100 PA [PAGE 3] excludes September call-ups and low-usage pinch runners, truncating the left tail of p_SB distribution and potentially biasing ρ upward. (3) Runs scored R is a team-context variable (batting order, park, teammate quality), explaining near-zero ρ with p_SB [PAGE 3]. (4) Spd is a composite index (0-10, mean 4.5) [PAGE 2], not raw sprint speed; ρ=0.37617 [PAGE 3] confirms that pitcher delivery, jump, catcher arm dominate [PAGE 4]. (5) The "don't steal if Trout is batting" statement [PAGE 5] introduces an opportunity-cost state variable (downstream batter wOBA) absent from bivariate correlations, creating an omitted-variable bias in any model that omits batting-order position. (6) Temporal non-stationarity: attempts down, success rates up [PAGE 5], meaning p* and actual p drift across eras; a static 70% threshold is a breakdown regime when defensive pop-times improve or rule changes alter pitcher holds.
- Multi-hop conclusion: The paper's normative claim ("station to station ... usually the smart one" [PAGE 6]) follows only if p < p* for the marginal attempt. Because p* is state-dependent (base, outs, inning, score, batter) [PAGE 5], a blanket veto is a category error; the correct decision rule is attempt iff p_hat(b,o,inning,score,battery) > p*(b,o,inning,score,battery). Breakdown regimes: p < p* (negative EV), N_PA < 100 (excluded sample), ρ ≈ 0 (no linear signal), weather/biomechanical failure (surface friction, cold), and late-game leverage states where p* drops to ~0.60 [PAGE 5].

That's maybe ~450 words. Good.

Now SOURCE_OPERATORS_AND_EQUATIONS:
- Variables table with units.
- Equations: EV, p*, correlations quoted verbatim with [PAGE].
- Assumptions: run expectancy matrix stationary within game state; catcher throw and runner arrival independent of batter identity; wSB linear in runs; no defensive indifference.
- Breakdown regimes: p < p*; ρ→0; sample filter; state-dependence; omitted batter quality.
- Citations and quotes.

RETROCAUSAL_GENEALOGY:
- Historical lineage: Palmer & Hidden Game expected runs; Bill James; Moneybean/Beane & DePodesta outs precious [PAGE 6]; Rickey Henderson outlier [PAGE 6]; timeline: analytical decline of attempts, success rates skyrocketed [PAGE 5]; multi-week traps: early-season small-sample wSB; pitcher/catcher battery adaptation across series; rule changes (bases, pickoff, pitch clock) altering physical payoff matrix; defensive indifference late in games; regression of speedsters after league adjusts to jump; leadoff hitter construction changes (fewer pure speed, more OBP) reducing opportunity set.
- Use verbatim: "Over time stolen base attempts have gone down, but the success rates have skyrocketed" [PAGE 5]; "Billy Beane and Paul DePodesta were right: outs are precious" [PAGE 6].

RECURSIVE_THEORY_OF_MIND:
- L0-L3 as above. Crisis habit regression: after CS, manager reverts to station-to-station [PAGE 6]. Counter-trap: surprise steal when defense expects conservative. Clock: pitch clock compresses pitcher's hold-time variance, pickoff limits reduce pickoff attempts, both affect p. The paper's own conclusion endorses crisis habit regression ("safe option-and usually the smart one" [PAGE 6]), but the counter-trap is to exploit states where p* is lower (late game, home down by 1, speedster, decent hitter, <2 outs) [PAGE 5]. Recursive trap: defense learns manager's crisis habit and holds runners closer, lowering p for everyone, which then justifies the habit—a self-fulfilling equilibrium unless a counter-trap breaks it.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical dimensions: 90 ft = 27.432 m. Time scales: pitcher to plate ~1.25-1.40 s, catcher pop-time ~1.9-2.1 s, runner first-to-second ~3.3-3.5 s. Veto: t_catcher_transfer + t_throw < t_lead + t_jump + t_sprint ⇒ CS likely. Weather: precipitation lowers ground friction coefficient μ, increasing slip probability during slide/raise; temperature below ~10°C reduces muscle-tendon stiffness and grip; high wind negligible for pure steal but affects pitcher grip? Keep conservative: wind not primary. Veto condition: if μ < μ_crit or T < T_crit ⇒ raise p* by Δp_weather (biomechanical failure probability). The paper: "depends on a host of other factors, some of which are out of the runner’s control" [PAGE 4] and lists pitcher's delivery, runner's jump, catcher's arm [PAGE 4]. Spd correlation only 0.37617 [PAGE 3] means speed score cannot override physical veto.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Verifiable via Statcast: Runner sprint speed > 30 ft/s, attempts steal of 2nd, 0 outs, top of 1st. Catcher pop-time 1.85 s, pitcher delivery 1.45 s. Veto: arrival time advantage to defense ⇒ p_hat < p* ≈ 0.70. Prediction: EV < 0 runs per attempt; if attempt occurs, CS probability > 0.30; wSB contribution negative for that attempt.
- Scenario 2: Bottom 8th, home team down by 1, runner on first, <2 outs, #6 hitter (average) up. Source Page 5 says p* ≈ 0.60. Veto: if manager applies blanket station-to-station [PAGE 6] despite measured p_hat = 0.68 from battery tendencies, that is a counterfactual decision error. Prediction: suppressing the steal lowers win expectancy relative to attempting; over 10 such counterfactual states, attempting yields +ΔWE (positive) while veto yields station-to-station stagnation.
- Scenario 3: Weeks 1-2, PA < 100. Filter excluded these [PAGE 3]. A player with wSB outlier due to small sample is given running green light. Veto: statistical singularity N_PA < 100 ⇒ high variance in wSB, ρ(wSB,p)=0.5816242 [PAGE 3] is population-level not individual-level. Prediction: regression to mean; future attempts show p_hat near league-average break-even or below, causing negative cumulative wSB; the veto (do not act on small-sample wSB) preserves expected runs.

I need to ensure predictions are framed as verifiable (can be checked with data). Avoid betting terms.

Let's now write full response with attention to word count and formatting.

Need to include verbatim quotes with [PAGE N]. Example: "outs are precious, and stealing bases jeopardizes them" [PAGE 6]. "Over time stolen base attempts have gone down, but the success rates have skyrocketed" [PAGE 5]. "don’t steal if Trout’s batting" [PAGE 5]. "Station to station baseball is the safe option-and usually the smart one" [PAGE 6]. "requires a prolific base stealer (think Henderson)" [PAGE 6] roughly. Exact: "It takes a prolific base stealer (think Henderson) to make a significant contribution to wins." [PAGE 6].

Check exact quotes from source:
- Page 5: "The data shows that stealing bases is only worth the risk if the base stealer is safe ~70% of the time (called the required success rate)"
- Page 5: "don’t steal if Trout’s batting"
- Page 5: "Over time stolen base attempts have gone down, but the success rates have skyrocketed"
- Page 5: "In 2015 the actual success rate(67) was higher than the the required success rate(65)"
- Page 5: "The required rate lowers to about 60% late in the game (home team down by 1 with a speedster on first and a decent, but not spectacular hitter up and of course less than 2 outs)"
- Page 6: "While some successful base stealers may contribute a decent amount to their teams, the majority of them make a relatively low contribution."
- Page 6: "Billy Beane and Paul DePodesta were right: outs are precious, and stealing bases jeopardizes them."
- Page 6: "It takes a prolific base stealer (think Henderson) to make a significant contribution to wins. Station to station baseball is the safe option-and usually the smart one."
- Page 4: "We found a very low correlation (~0.16) between successful stealing percentage and runs scored."
- Page 3: "This is surprising because you would expect players who steal very efficiently to score more, on average, but this is clearly not the case."
- Page 3: "Note: We filtered our dataset for players who had >100 PA"

Good.

Now word count. I'll aim for about 1400+ words total. THINK_TRACE ~500 words. Others ~200 each.

I must not mention "odds" or betting lines. I will say "break-even probability" and "expected run value". The source's "worth the risk" is okay if reframed as expected value.

I should not say "moneyline", "spread", "total". Avoid entirely.

Let's draft carefully.

One thing: The system says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." So I need explicit assumptions and breakdown regimes. I'll include them.

I will write in a formal analytical tone.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source document constructs its case against the stolen base through three bivariate correlations and a normative appeal to run expectancy. On Page 2, the authors define the core statistics: weighted stolen bases (wSB) as an estimate of runs contributed, Speed score (Spd) on a 0–10 index with league average 4.5, and steal success percentage p_SB = SB / (SB + CS), a probability in [0,1]. The explicit motivation is to explain “the decline of steals in the MLB” and to measure “the risk of stealing bases using data from the 2019 season” [PAGE 2]. Page 3 reports exact correlation coefficients: ρ(wSB, p_SB) = 0.5816242, described as “pretty decently correlated” with “a clear trendline”; ρ(Spd, p_SB) = 0.37617, “very light correlation”; and ρ(R, p_SB) = 0.1553179 between success percentage and runs scored, which the authors call “almost not correlated at all” and “surprising” given the expectation that efficient base stealers should score more [PAGE 3]. The dataset is filtered for players with >100 PA [PAGE 3], a sample-selection rule that truncates the low-usage tail.

The multi-hop derivation proceeds as follows. Let V(b,o) denote expected runs remaining in the inning from base-out state (b,o), measured in runs. For a stolen-base attempt of second base with no other runners, the pre-attempt state is (1B,o). A successful transition lands at (2B,o); a failure (caught stealing) lands at (∅,o+1), because an out is recorded and the runner is removed. The expected run value per attempt is therefore EV(p,o) = p · [V(2B,o) − V(1B,o)] + (1 − p) · [V(∅,o+1) − V(1B,o)]. The first bracketed term is positive; the second is negative. Setting EV = 0 yields the break-even probability p*(o) = [V(1B,o) − V(∅,o+1)] / { [V(2B,o) − V(1B,o)] + [V(1B,o) − V(∅,o+1)] }. This is the formal analogue of the source’s “required success rate.” Page 5 states that stealing is “only worth the risk if the base stealer is safe ~70% of the time,” that “the exact percentage … depends on what base and how many outs are in the inning, and where the team is in the batting order,” and that in 2015 “the actual success rate(67) was higher than the required success rate(65)” [PAGE 5]. Page 5 further identifies a state-contingent exception: “The required rate lowers to about 60% late in the game (home team down by 1 with a speedster on first and a decent, but not spectacular hitter up and of course less than 2 outs)” [PAGE 5].

Gray-zone audit. First, the correlation ρ(wSB, p_SB) = 0.5816242 [PAGE 3] is mechanically inflated because wSB is itself computed from SB and CS outcomes; it shares the same numerator structure as p_SB, so the correlation cannot be read as independent validation of steal value. Second, the >100 PA filter [PAGE 3] imposes a survivorship boundary: pinch-runners, September call-ups, and injured speedsters are excluded, biasing the observed p_SB distribution upward and narrowing variance. Third, ρ(R, p_SB) ≈ 0.16 [PAGE 3] is an ecological correlation; runs scored R is confounded by batting-order position, park effects, teammate quality, and total plate appearances, so the near-zero coefficient does not prove that steals lack run value in specific high-leverage states. Fourth, Spd is a composite index (0–10, mean 4.5) [PAGE 2], not raw sprint speed; its light correlation ρ = 0.37617 [PAGE 3] confirms the authors’ own point that “a lot more goes into successfully stealing a base than pure speed (pitcher’s delivery, runner’s jump, catcher’s arm, etc.)” [PAGE 4]. Fifth, the instruction “don’t steal if Trout’s batting” [PAGE 5] introduces downstream batter quality as an omitted state variable; any model that conditions only on p_SB and Spd omits the opportunity cost of an out when a high-wOBA hitter follows. Sixth, the observation that “stolen base attempts have gone down, but the success rates have skyrocketed” [PAGE 5] implies temporal non-stationarity: p* and the actual p drift across eras as defensive pop-times improve and pitcher hold-times change. A static 70% threshold therefore breaks down precisely in late-game leverage states where p* falls toward 0.60 [PAGE 5], and it breaks down in small-sample regimes where N_PA < 100. The correct decision rule is attempt iff the state-conditioned estimate p̂(b,o,inning,score,battery,batter) exceeds p*(b,o,inning,score,battery); a blanket station-to-station veto is valid only when p̂ < p* for the marginal attempt, which the source’s own state-dependent evidence suggests is not universally true.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units:

- wSB: weighted stolen bases, unit = runs (expected run contribution, dimensionless run scale). Definition: estimate of runs a player contributes by stealing bases [PAGE 2].
- Spd: Speed score, unit = index points on [0,10], population mean μ = 4.5 [PAGE 2].
- p_SB: steal success probability, unit = probability in [0,1], estimator p̂_SB = SB / (SB + CS) [PAGE 2].
- R: runs scored, unit = count of runs, confounded team-level outcome [PAGE 3].
- ρ: Pearson correlation coefficient, unit = dimensionless, range [-1,1]. Exact reported values [PAGE 3]: ρ(wSB, p_SB) = 0.5816242; ρ(Spd, p_SB) = 0.37617; ρ(R, p_SB) = 0.1553179. Rounded in Page 4 as ~0.58, ~0.38, ~0.16.

Run-expectancy operator. Let the base-out state space be S = {∅,1B,2B,3B,1B&2B,…} × {0,1,2 outs}. Let V: S → ℝ⁺ be expected runs in the remainder of the inning, unit = runs per state. For a steal of second base with no runner on third and no runner on second:

EV_steal(p,o) = p · ΔV_success(o) + (1 − p) · ΔV_failure(o),

where ΔV_success(o) = V(2B,o) − V(1B,o) > 0 and ΔV_failure(o) = V(∅,o+1) − V(1B,o) < 0. Units: runs per attempt.

Break-even operator:

p*(o) = −ΔV_failure(o) / [ΔV_success(o) − ΔV_failure(o)] = [V(1B,o) − V(∅,o+1)] / { [V(2B,o) − V(1B,o)] + [V(1B,o) − V(∅,o+1)] }.

Decision rule: attempt iff p̂ > p*. Units: p̂ and p* are probabilities in [0,1].

Source-implied parameter estimates [PAGE 5]: generic p* ≈ 0.70; 2015 p* ≈ 0.65 with p_actual ≈ 0.67; late-game specific state p* ≈ 0.60 (home team down by 1, runner on first, <2 outs, non-elite batter). Verbatim: “The data shows that stealing bases is only worth the risk if the base stealer is safe ~70% of the time (called the required success rate)” [PAGE 5]; “In 2015 the actual success rate(67) was higher than the the required success rate(65)” [PAGE 5]; “The required rate lowers to about 60% late in the game…” [PAGE 5].

Assumptions: (1) V(b,o) is stationary within the game state and estimated from historical run-expectancy matrices; (2) runner jump, pitcher delivery, and catcher pop-time are conditionally independent of batter identity given the state; (3) wSB is linear in runs and additive across attempts; (4) defensive indifference is excluded (the defense attempts to throw the runner out).

Singularity / breakdown regimes: (A) p̂ < p* ⇒ EV_steal < 0 runs per attempt; the steal is a negative-value proposition. (B) ρ → 0 ⇒ no linear predictive signal; specifically ρ(R,p_SB) = 0.1553179 [PAGE 3] implies runs scored cannot be linearly predicted from steal success. (C) N_PA < 100 ⇒ outside the filtered sample [PAGE 3]; wSB and p̂_SB have high variance, invalidating individual-level inference. (D) State-dependent p* shift: late-game leverage reduces p* to ~0.60 [PAGE 5], so a static 70% veto rule is a breakdown regime. (E) Omitted-variable regime: batter quality downstream (e.g., “don’t steal if Trout’s batting” [PAGE 5]) changes the opportunity cost of an out and is not represented in bivariate correlations.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from Palmer and Thorn’s *The Hidden Game of Baseball* (24 base-out run expectancy) through Bill James’s run-value framing, to the Oakland Athletics’ Moneyball era associated with Billy Beane and Paul DePodesta. The source explicitly anchors itself in this genealogy: “Billy Beane and Paul DePodesta were right: outs are precious, and stealing bases jeopardizes them” [PAGE 6]. It further names Rickey Henderson as the exceptional outlier: “It takes a prolific base stealer (think Henderson) to make a significant contribution to wins” [PAGE 6]. The historical arc described is one of analytical substitution: “Over time stolen base attempts have gone down, but the success rates have skyrocketed” [PAGE 5], meaning the marginal steal became riskier in expectation as managers attempted fewer but better-timed attempts, while the break-even threshold and defensive battery metrics improved.

Multi-week traps embedded in this lineage. Week 1–2 small-sample trap: the >100 PA filter [PAGE 3] means early-season wSB leaders are often statistical artifacts; acting on them commits a regression-to-the-mean error. Week 3–6 battery-adaptation trap: catcher pop-times and pitcher delivery times converge toward scouting reports across a series, eroding the runner’s jump advantage; because ρ(Spd,p_SB) = 0.37617 [PAGE 3] is light, speed alone cannot compensate once the battery adjusts. Mid-season leverage trap: Page 5 notes the required rate falls to ~60% in specific late-game states [PAGE 5], so a manager who applies the blanket Page 6 dictum (“Station to station baseball is the safe option-and usually the smart one” [PAGE 6]) systematically forfeits positive expected runs in those windows. Rule-change trap: the source was written before the widespread adoption of larger bases, pitch-clock, and pickoff limits; those changes alter the physical payoff matrix (lead distance, hold-time variance, disengagement limits) and therefore shift p* dynamically. The 2015 comparison [PAGE 5] shows that when p_actual (0.67) exceeds p* (0.65), the analytic environment briefly favors the attempt; when defensive technology improves such that p* rises above actual success, the steal disappears. The trajectory is not monotonic across game states, which is why the source’s aggregate conclusion (“stolen bases are a bad value proposition” [PAGE 1]) masks state-contingent regimes where the expected value is positive.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three recursive layers govern the manager–runner–defense interaction. Layer 0 (L0): the runner chooses jump timing and lead distance based on pitcher delivery and catcher pop-time. Layer 1 (L1): the pitcher–catcher battery chooses hold-time variation, pickoff frequency, and throw cadence based on the runner’s observed tendencies. Layer 2 (L2): the manager chooses the steal sign based on the battery’s L1 posture, the downstream batter, inning, score, and outs.

Crisis habit regression. After a visible caught-stealing event, managers exhibit availability bias and revert to the station-to-station heuristic codified on Page 6: “outs are precious, and stealing bases jeopardizes them” and “Station to station baseball is the safe option-and usually the smart one” [PAGE 6]. This regression raises the effective p* used in the manager’s internal decision rule above the analytical p*, suppressing attempts even when p̂ > p*.

Counter-trap. The counter-trap exploits the manager’s crisis habit: when the defense expects station-to-station conservatism, the pitcher may shorten his slide-step variation and the catcher may relax transfer urgency, lowering the realized p* for a well-timed attempt. Page 5’s late-game state (home down by 1, speedster on first, decent hitter up, <2 outs, p* ≈ 0.60) [PAGE 5] is precisely the recursive niche where the counter-trap has highest expected value because the defense is playing to prevent the big inning rather than to suppress the running game.

Clock. The pitch clock and pickoff-limit rules compress the pitcher’s hold-time distribution and reduce disengagement opportunities. In the formal model this shrinks the variance of the pitcher’s delivery time, which raises p̂ for elite jumpers and lowers the effective p* by reducing ΔV_failure (fewer pickoff outs). However, the clock also reduces the runner’s ability to read the pitcher, creating a new source of variance. The recursive equilibrium is therefore: crisis habit → conservative running → defense over-adjusts to the strike zone rather than the running game → counter-trap steal succeeds → defense re-adjusts → manager regresses to crisis habit. The source’s conclusion endorses the crisis habit as the default [PAGE 6], but its own Page 5 evidence implies the equilibrium is unstable whenever p̂ exceeds the state-dependent p*.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. A stolen base of second base spans 90 ft = 27.432 m. Relevant time scales: pitcher delivery to home plate ≈ 1.25–1.45 s; catcher pop-time (glove to release) ≈ 1.90–2.10 s; catcher throw to second ≈ 1.75–1.95 s; elite runner first-to-second ≈ 3.30–3.55 s from first movement. The physical veto condition is:

t_lead + t_jump + t_sprint > t_pitcher_to_plate + t_catcher_pop + t_catcher_throw + t_tag

If this inequality holds, the defense arrives at the bag before the runner, and p̂ collapses toward the failure outcome ΔV_failure. Because ρ(Spd,p_SB) = 0.37617 [PAGE 3] is light, Spd cannot veto the physical layer; the source explicitly states success depends on “pitcher’s delivery, runner’s jump, catcher’s arm” [PAGE 4], “some of which are out of the runner’s control” [PAGE 4].

Biomechanical layer. The slide introduces a coefficient-of-friction dependency μ between cleat and infield dirt. If precipitation lowers μ below a critical threshold μ_crit, the runner cannot convert horizontal velocity into a stable reach, producing overshoot or inability to break the tag plane. Ambient temperature T < 10°C reduces muscle-tendon stiffness and grip strength, degrading the catcher’s transfer and the runner’s initial acceleration. These are exogenous biomechanical failure modes that raise the effective break-even probability by Δp_weather > 0, independent of Spd.

Weather layer. Wind has minimal first-order effect on a pure stolen base (no batted-ball flight), but rain and cold directly alter μ and T. A veto proof requires: if (μ < μ_crit) ∨ (T < T_crit) ⇒ p̂_adj = p̂ − Δp_weather; attempt only if p̂_adj > p*. The source’s reliance on aggregate correlations cannot resolve these within-game physical vetoes, which is why its Page 4 caveat about factors “out of the runner’s control” [PAGE 4] is a necessary but insufficient qualifier; it does not quantify the singularity regime where μ or T forces p̂_adj < p* regardless of speed score.

Breakdown regimes: (1) μ < μ_crit (wet/slippery infield) ⇒ slide failure probability rises, p̂_adj drops below p*. (2) T < T_crit (cold) ⇒ reduced acceleration and transfer speed ⇒ p̂_adj < p*. (3) Pop-time + throw < runner arrival ⇒ deterministic physical veto independent of statistical correlation. (4) ρ(Spd,p_SB) ≈ 0.38 [PAGE 3] ⇒ speed score cannot override the physical veto.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Verifiable via Statcast: runner sprint speed > 30 ft/s attempts a steal of second with 0 outs in the top of the 1st. Catcher pop-time = 1.85 s, pitcher delivery = 1.45 s, average catcher throw = 1.85 s, tag time = 0.5 s. Total defensive time ≈ 4.15 s from first movement; elite runner time ≈ 3.45 s + 0.5 s lead-read ≈ 3.95 s. Physical layer indicates defense arrives first. Veto rule: p̂ < p* ≈ 0.70 [PAGE 5]. Prediction: expected run value EV_steal < 0 runs per attempt; if attempted, caught-stealing probability > 0.30; cumulative wSB for such attempts trends negative over a 30-game sample. Verification: filter Statcast for second-steal attempts with catcher pop-time < 1.90 s and pitcher delivery > 1.40 s; compare observed p_SB against p*.

Scenario 2 — Verifiable via play-by-play: bottom of the 8th, home team down by 1, runner on first, less than 2 outs, #6 hitter (average wOBA) at plate. Page 5 identifies this exact state as having p* ≈ 0.60 [PAGE 5]. Suppose measured battery tendencies imply p̂ = 0.68. Counterfactual veto: manager applies Page 6’s blanket “outs are precious” [PAGE 6] and station-to-station default [PAGE 6], suppressing the attempt. Prediction: suppressing the steal lowers win expectancy relative to attempting; over 10 such counterfactual states, the attempting strategy yields positive ΔWE while the veto yields stagnation. Verification: use run-expectancy matrix to compute EV at p̂ = 0.68 vs p* = 0.60; compare actual win outcomes in similar states where steals were attempted vs held.

Scenario 3 — Verifiable via seasonal PA filter: Weeks 1–2, player with N_PA < 100 records 3-for-3 on steals (p̂ = 1.00) and elevated wSB. Because the source’s sample excludes N_PA < 100 [PAGE 3], this observation lies outside the validated domain. Veto rule: statistical singularity; ρ(wSB,p_SB) = 0.5816242 [PAGE 3] is a population coefficient, not an individual license. Prediction: regression to the mean; over the subsequent 100 PA, p̂ falls toward league average and wSB contribution decays toward zero or negative; attempts authorized by small-sample wSB underperform break-even p*. Verification: track all players with N_PA < 100 in April who had p̂ > 0.80; measure their p_SB and wSB over the following 150 PA; predict mean reversion below p* ≈ 0.70.
</RLVR_COUNTERFACTUAL_VETOES>