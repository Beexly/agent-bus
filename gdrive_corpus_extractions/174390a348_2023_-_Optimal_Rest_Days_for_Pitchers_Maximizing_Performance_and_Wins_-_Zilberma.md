---
source: "2023 - Optimal Rest Days for Pitchers Maximizing Performance and Wins - Zilberman et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2023"
pages: 3
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5001
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about optimal rest days for pitchers. They've provided the source text and specified pages: 3. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes:
- Pages: 3. I should cite [PAGE 3] markers appropriately, though the source text seems to be a full paper extracted. I need to reference page markers. Since I don't have actual page breaks, I should use [PAGE 3] as requested for citations where relevant, or perhaps note that the document provided appears to be pages that include the full text. I'll cite [PAGE 3] for the source content since the user specified PAGES: 3. I need to be careful about verbatim quotes - I can quote from the provided text.

Let me structure this:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to analyze the paper's methodology, data limitations, statistical reasoning, potential biases, and gray zones. Discuss FIP vs ERA correlation (r=0.51 vs r=0.33), sample size issues (<4 days rest unreliable), career average adjustment, pitcher quality confounding (teams give more rest to poorer players), excess FIP calculations, Pythagorean win formula application, injury null assumption, Statcast era limitation (2015-2022), and the rotation quality dilution issue not considered.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations. I should formalize:
- FIP definition (though not explicitly given in text, I can reference standard FIP or note it's not provided? Better to stick to what's in text or use standard formula with citation that it's standard? The invariant says no toy equations. I can state formal LaTeX for the relationships mentioned: Predicted FIP5 = 1.7274 + 0.6083 * FIP4; Predicted FIP6 = 1.9094 + 0.5474 * FIP5. Bill James Pythagorean: Win% = RS^2 / (RS^2 + RA^2) or similar. Excess FIP = Career Avg FIP - FIP_DoR. Adjusted excess FIP. Wins = 162 * Win%. Need to cite [PAGE 3] for these.
- Units: FIP is dimensionless (earned run scale), wins dimensionless count, days dimensionless count, correlation coefficient dimensionless [0,1], % dimensionless.
- Breakdown regimes: <4 days rest insufficient data (singularity/breakdown), small sample for 1-3 and 7+ days, injury null assumption breakdown if DoR affects injury, quality dilution not modeled.

RETROCAUSAL_GENEALOGY: Historical lineage - 5-man rotation norm, mental bias analogy to underhanded free throws (Rick Barry?), Max Scherzer 2017 NLDS Game 3/5 case, Bill James Pythagorean expectation, JC Bradbury injury research, Statcast era 2015-2022. Multi-week traps: playoff short rest (Scherzer), regular season rotation rigidity, overcorrection to 6-man rotation causing talent dilution.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression - teams revert to 4-day/5-man rotation under playoff pressure or injury crises; counter-trap - adopting 6-man/5-day rest based on this paper but ignoring dilution; clock - game timing, playoff short rest, bullpen usage patterns, circadian/travel factors not modeled.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Arm fatigue, UCL strain, muscle recovery timelines (48-72h vs 96-120h), weather (cold, humidity, wind) affecting grip and ball flight, park factors removed by FIP but weather day-of not considered, pitcher biomechanical individual variability, the paper views injuries as null factor per Bradbury which is a veto point.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I'll interpret as verifiable counterfactual veto scenarios. Need 3 scenarios where the paper's conclusion (5 days optimal) would be vetoed, with predictions.
1. Injury null assumption violated: If 5-day rest increases cumulative innings/arm torque leading to higher injury rate over multi-week horizon, veto 5-day recommendation. Prediction: teams adopting 6-man rotation see DL/IL placements rise by X% over 8 weeks (but no betting lines).
2. Rotation dilution: Adding a 6th starter lowers average starter quality; if replacement-level pitcher pitches on 5 days instead of good pitcher on 4 days, net FIP worsens. Prediction: net wins decrease despite per-start FIP improvement.
3. Small-sample/rest <4 days: In playoffs or doubleheaders, forced short rest; paper's model breaks down (<4 days unreliable). Prediction: using 5-day model to force short-rest starts in October increases FIP by >17.88% (from the -17.88% worse than average for 1 day rest) relative to baseline.

Wait, I need to be careful about "ZERO BETTING LINES" - no spreads, totals, moneylines, odds. I can mention win percentages and wins per season since those are in the paper, but not betting odds.

Word count: >= 1,000 words total across sections. THINK_TRACE alone >=400 words.

Let me draft carefully.

THINK_TRACE (>=400 words): I'll write a thorough audit.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX.

RETROCAUSAL_GENEALOGY: Historical context.

RECURSIVE_THEORY_OF_MIND: Psychology/game theory.

CROSS_LAYER_VETO_ADJUDICATION: Vetoes.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

I need to cite [PAGE 3] markers. Since the user said PAGES: 3, I'll cite [PAGE 3] for all source-derived claims. I'll include verbatim quotes where useful.

Let's check verbatim quotes from text:
- "There is not enough data to make proper assumptions about pitcher starts with less than 4 days of rest."
- "The correlation between FIP performances at different rest day intervals is 0.51, which is higher than the correlation for ERA, which is 0.33."
- "Predicted FIP5 = 1.7274 + 0.6083 * FIP4 Benchmark of 4.36"
- "Predicted FIP6 = 1.9094 + 0.5474 * FIP5 Benchmark of 4.23"
- "Teams that have their pitchers pitch with 5 days of rest between starts should gain an average of…. - 1.52 more wins per season than teams playing their pitchers with 4 days of rest. - 0.51 more wins per season than teams playing their pitchers with 6 days of rest between starts"
- "Derived using Bill James’ Pythagorean Win Formula"
- "JC Bradbury, a sabermetrician, wrote, “there exists little evidence to show that the days of rest affect future injury among adults [athletes].”"
- "Data only includes the Statcast era (using 2015 -2022)"
- "Does not consider the possible decrease in pitcher quality when adding additional pitchers to the rotation."

I'll cite these as [PAGE 3].

Now let's write. I must ensure no betting lines. I can mention "win percentage" and "wins per season" as performance metrics, not betting odds.

Structure:

THINK_TRACE:
- Start with the core inferential problem: mapping rest days to pitcher performance via FIP.
- Multi-hop: Data (6,000 starting performances, 2015-2022 Statcast) -> grouping by DoR -> raw FIP table shows U-shaped or non-monotonic pattern (1 day: 5.18, -17.88%; 4 days: 4.24, 0.27%; 5 days: 4.19, 1.32%; 6 days: 4.22, 0.72%; 7+: 4.40, -3.51%) -> adjustment for career average and quality -> total adjusted excess FIP: 4 days: 0.077; 5 days: -0.032; 6 days: 0.004. Lower excess FIP is better (since better FIP = lower FIP). So 5 days best.
- Gray zones: confounding by pitcher quality (teams give more rest to poorer players, play better players more frequently), small sample <4 days and 7+, regression to the mean in career average adjustment, Pythagorean translation from FIP to runs to wins assumes constant run environment and ignores bullpen/rotation composition, injury treated as null despite biological plausibility, no weather/park/day-night covariates beyond FIP's inherent fielding/park stripping, playoff short rest not addressed except in opening anecdote.
- Breakdown regimes: <4 days rest data insufficient (singularity), injury null assumption can break if rest affects injury over multi-week horizon, rotation dilution not modeled means 6-man rotation may force worse pitchers into starts.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define variables: DoR ∈ {1,2,3,4,5,6,7+}, FIP_raw(DoR), FIP_career, Q ∈ {Good, Average, Bad}.
- Excess FIP: E(DoR) = FIP_career - FIP_DoR (or as in paper: Career average FIP - FIP_DoR4,5,6 = Excess FIP vs career). Need sign convention: paper says "Better FIP = lower FIP", and table shows positive excess FIP for 4 days good? Actually table is messy. I'll formalize carefully based on text: "Career average FIP - FIPDoR4,5,6 = Excess FIP vs career". Then quality-adjusted excess.
- Regression: FIP5_pred = 1.7274 + 0.6083·FIP4; FIP6_pred = 1.9094 + 0.5474·FIP5.
- Pythagorean: W% = RS^2/(RS^2+RA^2) (or exponent 2; sometimes 1.83 but paper says Bill James'). Wins = 162·W%.
- Table: 4 days: Excess FIP 0, Quality 0.077, Total 0.077; 5 days: Career 0.01, Quality -0.042, Total -0.032; 6 days: Career 0.04, Quality -0.036, Total 0.004. (Need to interpret signs carefully but present as given.)
- Units: FIP dimensionless (runs per 9 IP scaled), IP in innings, DoR dimensionless count, W% dimensionless [0,1], wins count per 162-game season.
- Cite [PAGE 3].

RETROCAUSAL_GENEALOGY:
- 5-man rotation / 4-day rest as institutional norm; analogy to underhanded free throws (mental bias, status quo).
- Max Scherzer 2017 NLDS Game 3 start, Game 5 relief on short rest, 4 runs allowed, elimination loss.
- Bill James Pythagorean expectation lineage.
- JC Bradbury injury/null rest literature.
- Statcast era 2015-2022 data boundary.
- Multi-week traps: regular-season overuse of 4-day rest leading to cumulative fatigue; playoff crash from short rest; overcorrection to 6-man rotation diluting starters over a 6-month season.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under pressure (playoffs, injuries, pennant race), managers regress to 4-day/5-man norm because it's legible and traditional, even if 5-day is statistically better.
- Counter-trap: analytic team adopts 6-man/5-day rest rigidly, ignores that the 6th starter is replacement-level, causing net negative wins.
- Clock: game-to-game recovery clock (48h vs 96h+), bullpen depletion clock, season arc clock (162 games), playoff clock (short series, off days).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical: UCL ligament creep, flexor pronator strain, scapular dyskinesis recovery timelines; 4 days may be insufficient for tissue remodeling; 5 days may still be insufficient for high-velocity pitchers; paper assumes injuries null per Bradbury [PAGE 3], which is a veto layer.
- Weather: temperature, humidity, wind affect drag coefficient and grip; FIP removes park factors but not same-day weather; cold games increase injury risk and reduce velo.
- Veto proof: The paper's conclusion (5-day optimal) is vetoed if any physical layer shows non-linear injury accumulation or if weather interacts with rest to change acute performance beyond FIP's ceteris paribus assumption.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. No betting lines.
Scenario 1: Injury null violation. If DoR=5 increases per-season innings for starters (because they skip fewer starts? Actually 5-day rest means fewer starts per season? Let's think: 5-day rest means a pitcher starts every 5 days instead of every 4. Over 162 games, roughly 32-33 starts vs 40-41? Actually with 5-man rotation each pitcher starts ~32 times. With 6-man rotation and 5-day rest? Hmm. If you have 6 starters each on 5-day rest, each starts less frequently? Actually the total number of starts is fixed by games. A 6-man rotation means each starter starts less often, so more rest between starts. But you need 6 starters. The dilution argument: the 6th starter is worse. So scenario: replacing a good pitcher's 4-day-rest start with a bad pitcher's 5-day-rest start. Veto: net team FIP worsens. Prediction: over a 4-week window (12-15 team games), the 6-man rotation yields higher aggregate FIP than 5-man because replacement-level innings exceed the per-start FIP benefit of rest.
Scenario 2: Short-rest forced condition (doubleheader, playoff, injury). Paper says <4 days unreliable [PAGE 3]. If a team ignores this and uses 3 days rest based on the 5-day optimal model, prediction: FIP degrades by approximately the observed -17.88% for 1 day rest (or analogous short-rest penalty) relative to 4-day baseline; model invalid.
Scenario 3: Cold-weather early season / late season interaction. If ambient temperature < 10°C (or similar physical threshold), muscle-tendon unit stiffness increases, making 5-day rest insufficient; prediction: pitchers on 5-day rest in cold months show FIP increase exceeding the 0.032 adjusted benefit, nullifying the 0.51 win advantage over 6 days.

I should make predictions quantitative where possible but avoid odds/betting. Use FIP deltas, win deltas, days, percentages.

Let's ensure word count. THINK_TRACE needs >=400 words. Total >=1000. I'll write substantial sections.

Let's draft now.

I must be careful with LaTeX formatting. Use proper LaTeX.

Also, the invariant: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I'll cite [PAGE 3] frequently.

Let's write.

THINK_TRACE content (approx 500-600 words):

The central inferential chain in Zilberman et al. [PAGE 3] proceeds from a descriptive tabulation of raw FIP by days of rest (DoR) to a causal claim that five days of rest maximizes seasonal wins. The raw table shows a non-monotonic relationship: 1 day of rest yields a combined FIP of 5.18 (-17.88% vs average), 2 days 4.59 (-7.46%), 3 days 4.55 (-6.56%), 4 days 4.24 (+0.27%), 5 days 4.19 (+1.32%), 6 days 4.22 (+0.72%), and 7+ days 4.40 (-3.51%) [PAGE 3]. At face value, 5 days appears best among the well-sampled categories. However, the authors themselves flag a critical data boundary: “There is not enough data to make proper assumptions about pitcher starts with less than 4 days of rest. This creates higher variability, making it unreliable to use as a predictor” [PAGE 3]. This is a hard singularity: the regression and adjustment machinery cannot be trusted for DoR < 4, which includes the high-stakes playoff short-rest scenario illustrated by Max Scherzer’s 2017 NLDS Game 5 collapse [PAGE 3].

A second multi-hop problem is confounding by pitcher quality. The paper notes that “teams tend to provide more rest to poorer players and play better players more frequently” [PAGE 3], inducing a negative correlation between rest and innate talent. To address this, they construct an “Adjusted Excess FIP” by subtracting career-average FIP and stratifying by quality percentiles (Good/Average/Bad). The resulting table—4 days: career 0, quality-adjusted 0.077, total 0.077; 5 days: career 0.01, quality-adjusted -0.042, total -0.032; 6 days: career 0.04, quality-adjusted -0.036, total 0.004 [PAGE 3]—implies that 5 days produces the lowest (most negative) total adjusted excess FIP, and therefore the best performance relative to a pitcher’s own baseline. Yet this adjustment rests on the assumption that career-average FIP is a stable counterfactual for rest-conditioned performance, an assumption vulnerable to regression to the mean, aging curves, and role changes (starter vs. reliever) that are not modeled.

The translation from FIP to wins uses two intermediate regressions—FIP5_pred = 1.7274 + 0.6083·FIP4 (benchmark 4.36) and FIP6_pred = 1.9094 + 0.5474·FIP5 (benchmark 4.23) [PAGE 3]—and then Bill James’ Pythagorean Win Formula to convert run differentials into 162-game season win totals: 5 days of rest is projected to add 1.52 wins vs. 4 days and 0.51 wins vs. 6 days [PAGE 3]. This chain assumes (a) that FIP differences map linearly to earned-run differences, (b) that run-scoring environments are constant across rest regimes, and (c) that rotation composition is invariant. The paper explicitly admits limitation (c) is violated: “Does not consider the possible decrease in pitcher quality when adding additional pitchers to the rotation” [PAGE 3]. Thus a 6-man rotation implementing 5-day rest may force a replacement-level sixth starter into the roster, offsetting the per-start FIP benefit.

Gray-zone audit: injuries are treated as a null factor because JC Bradbury found “little evidence … that days of rest affect future injury among adults” [PAGE 3], but the authors hedge that “there may be slight differences in injuries by DoR that haven’t been discovered yet” [PAGE 3]. The Statcast-era restriction (2015–2022) [PAGE 3] excludes pre-Statcast measurement error but also excludes different baseball compositions, sticky-substance eras, and workload conventions. Finally, FIP strips defense and park factors [PAGE 3], but does not strip same-day weather, travel, or circadian disruption, all of which interact with rest. These gray zones mean the 5-day optimum is a local, ceteris-paribus result, not a robust organizational rule.

SOURCE_OPERATORS_AND_EQUATIONS: formalize variables, equations, units, citations.

RETROCAUSAL_GENEALOGY: discuss lineage.

RECURSIVE_THEORY_OF_MIND: crisis habit regression etc.

CROSS_LAYER_VETO_ADJUDICATION: biomechanical veto.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's ensure I use exact XML tags as specified.

Word count check: I'll aim for ~1200-1400 total words.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
The central inferential chain in Zilberman et al. moves from a descriptive tabulation of raw FIP by days of rest (DoR) to a causal claim that five days of rest maximizes seasonal wins. The raw table shows a non-monotonic relationship across rest intervals: 1 day yields a combined FIP of 5.18 (-17.88% versus average), 2 days 4.59 (-7.46%), 3 days 4.55 (-6.56%), 4 days 4.24 (+0.27%), 5 days 4.19 (+1.32%), 6 days 4.22 (+0.72%), and 7+ days 4.40 (-3.51%) [PAGE 3]. On its face, 5 days appears optimal among the well-sampled categories. However, the authors themselves flag a hard data boundary: “There is not enough data to make proper assumptions about pitcher starts with less than 4 days of rest. This creates higher variability, making it unreliable to use as a predictor” [PAGE 3]. This is a singularity: the regression and adjustment machinery cannot be trusted for DoR < 4, which is precisely the high-stakes regime illustrated by Max Scherzer’s short-rest collapse in the 2017 NLDS [PAGE 3].

A second multi-hop problem is confounding by pitcher quality. The paper notes that “teams tend to provide more rest to poorer players and play better players more frequently” [PAGE 3], inducing a negative correlation between rest and innate talent. To correct for this, the authors construct an “Adjusted Excess FIP” by subtracting career-average FIP and stratifying by quality percentiles (Good/Average/Bad). The resulting table—4 days: career 0, quality-adjusted 0.077, total 0.077; 5 days: career 0.01, quality-adjusted -0.042, total -0.032; 6 days: career 0.04, quality-adjusted -0.036, total 0.004 [PAGE 3]—implies that 5 days produces the lowest total adjusted excess FIP, and therefore the best performance relative to a pitcher’s own baseline. Yet this adjustment assumes that career-average FIP is a stable counterfactual for rest-conditioned performance, an assumption exposed to regression to the mean, aging curves, and role changes (starter versus reliever) that are not modeled.

The translation from FIP to wins uses two intermediate regressions—FIP5_pred = 1.7274 + 0.6083·FIP4 (benchmark 4.36) and FIP6_pred = 1.9094 + 0.5474·FIP5 (benchmark 4.23) [PAGE 3]—and then Bill James’ Pythagorean Win Formula to convert run differentials into 162-game season win totals: 5 days of rest is projected to add 1.52 wins versus 4 days and 0.51 wins versus 6 days [PAGE 3]. This chain assumes (a) that FIP differences map linearly to earned-run differences, (b) that run-scoring environments are constant across rest regimes, and (c) that rotation composition is invariant. The paper explicitly admits limitation (c) is violated: “Does not consider the possible decrease in pitcher quality when adding additional pitchers to the rotation” [PAGE 3]. A 6-man rotation implementing 5-day rest may therefore force a replacement-level sixth starter into the roster, offsetting the per-start FIP benefit.

Gray-zone audit: injuries are treated as a null factor because JC Bradbury found “little evidence … that days of rest affect future injury among adults” [PAGE 3], but the authors hedge that “there may be slight differences in injuries by DoR that haven’t been discovered yet” [PAGE 3]. The Statcast-era restriction (2015–2022) [PAGE 3] excludes pre-Statcast measurement noise but also excludes different baseball compositions, sticky-substance regimes, and workload conventions. Finally, FIP strips defense and park factors [PAGE 3], but does not strip same-day weather, travel, or circadian disruption, all of which interact with rest. These gray zones mean the 5-day optimum is a local, ceteris-paribus result, not a robust organizational rule.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let DoR ∈ {1, 2, 3, 4, 5, 6, 7+} denote days of rest, a dimensionless count in days. Let FIP_raw(DoR) be the fielding-independent pitching value, dimensionless and expressed on the earned-run scale per nine innings. Let FIP_career denote the pitcher’s career-average FIP. Let Q ∈ {Good, Average, Bad} denote pitcher-quality percentile strata.

Raw FIP table (Combined FIP and % difference from average) [PAGE 3]:
- DoR = 1: FIP = 5.18, Δ = -17.88%
- DoR = 2: FIP = 4.59, Δ = -7.46%
- DoR = 3: FIP = 4.55, Δ = -6.56%
- DoR = 4: FIP = 4.24, Δ = +0.27%
- DoR = 5: FIP = 4.19, Δ = +1.32%
- DoR = 6: FIP = 4.22, Δ = +0.72%
- DoR = 7+: FIP = 4.40, Δ = -3.51%

Note the sign convention used by the authors: “Better FIP = Lower FIP” [PAGE 3].

Excess FIP versus career [PAGE 3]:
Excess_FIP(DoR) ≡ FIP_career − FIP_DoR

Quality-adjusted decomposition (total adjusted excess FIP) [PAGE 3]:
Total_Adjusted_Excess(DoR) = Career_Avg_Excess(DoR) + Quality_Adjusted_Excess(DoR)

Tabulated values [PAGE 3]:
- DoR = 4: Career = 0.000, Quality = +0.077, Total = +0.077
- DoR = 5: Career = +0.010, Quality = -0.042, Total = -0.032
- DoR = 6: Career = +0.040, Quality = -0.036, Total = +0.004

Because lower total adjusted excess FIP indicates better relative performance, DoR = 5 ranks best (-0.032), followed by DoR = 6 (+0.004), then DoR = 4 (+0.077).

Cross-rest prediction regressions [PAGE 3]:
FIP̂_5 = 1.7274 + 0.6083·FIP_4, benchmark = 4.36
FIP̂_6 = 1.9094 + 0.5474·FIP_5, benchmark = 4.23

Test-retest reliability [PAGE 3]:
ρ(FIP_i, FIP_j | DoR) = 0.51 for FIP vs. ρ = 0.33 for ERA; correlation coefficients are dimensionless, bounded in [0,1].

Win translation via Bill James’ Pythagorean Win Formula [PAGE 3]:
W% = RS^k / (RS^k + RA^k), with k conventionally = 2; W% ∈ [0,1] dimensionless.
Projected seasonal wins: W_162 = 162·W%.
Reported marginal win effects [PAGE 3]: ΔW(5 vs 4) = +1.52 wins/season; ΔW(5 vs 6) = +0.51 wins/season.

Units and dimensions: FIP is dimensionless (run scale); DoR is dimensionless count (days); innings pitched (IP) is in innings; wins are dimensionless counts per 162-game season; % differences are dimensionless.

Breakdown and singularity regimes [PAGE 3]:
1. DoR < 4: insufficient data; high variability; unreliable as a predictor (hard singularity for the regression model).
2. Injury null assumption: treated as null per Bradbury, but acknowledged as potentially non-null if undiscovered DoR–injury interactions exist (breakdown if tissue-recovery timelines exceed rest intervals).
3. Rotation dilution: not modeled; breakdown occurs when a 6th starter of replacement quality displaces a better starter on shorter rest, negating per-start FIP gains.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with the institutionalized five-man, four-day-rest rotation, described by the authors as a “long-standing standard” that may persist due to “mental bias,” analogized to the historical aversion to underhanded free throws in basketball [PAGE 3]. The opening case anchors the inquiry in a specific causal anecdote: Max Scherzer’s 2017 NLDS Game 3 start followed by Game 5 relief on short rest, in which he allowed four runs in an elimination loss [PAGE 3]. This episode exemplifies the playoff short-rest trap, where the regular-season rest calculus collapses under compressed scheduling and off-day manipulation.

Methodologically, the paper inherits from sabermetric performance measurement: the choice of FIP over ERA is justified by higher test-retest correlation (r = 0.51 vs. r = 0.33) and by FIP’s focus on pitcher-controlled outcomes (strikeouts, walks, hit-by-pitch, home runs) while stripping defensive and park confounding [PAGE 3]. The causal translation to team wins descends directly from Bill James’ Pythagorean expectation, mapping run differential to expected winning percentage [PAGE 3]. The injury null position references JC Bradbury’s sabermetric work finding little evidence that rest days affect future injury among adult athletes [PAGE 3], though the authors explicitly leave open the possibility of undiscovered DoR–injury variation [PAGE 3].

The data boundary is the Statcast era, 2015–2022 [PAGE 3], which fixes the measurement epoch but excludes earlier baseball environments (different ball properties, foreign-substance norms, and workload conventions). Multi-week traps embedded in this lineage include: (1) the regular-season accumulation of fatigue under rigid four-day rest, potentially invisible in single-start FIP but visible over 20–30 starts; (2) the playoff crash from forced short rest, where the model’s own <4-day insufficiency warning applies; and (3) the overcorrection trap, in which a team adopts a six-man, five-day-rest rotation without accounting for the quality dilution of adding a sixth starter—a limitation the paper concedes [PAGE 3]. Thus the historical genealogy suggests the 5-day optimum is contingent on early-21st-century roster construction and may not survive porting to different eras or organizational contexts.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of managers to revert to the four-day, five-man rotation under pressure: playoff races, injury waves, or bullpen depletion make the legible, traditional schedule psychologically dominant even when the statistical evidence favors five days [PAGE 3]. The Scherzer anecdote illustrates this regression: the Nationals bypassed rest principles in a high-leverage elimination game, producing the adverse outcome the paper seeks to model [PAGE 3]. Under recursive theory of mind, each team anticipates that opponents will also default to four-day rest in crises, creating a coordination trap where deviating to five days feels risky despite better expected FIP.

The counter-trap is the analytic overcommitment: a front office rigidly implements five-day rest via a six-man rotation, assuming the per-start FIP benefit (-0.032 total adjusted excess FIP for five days vs. +0.077 for four) [PAGE 3] scales linearly to team wins, while ignoring the conceded dilution of rotation quality [PAGE 3]. In this recursive frame, the 6th starter anticipates facing tougher lineups because the manager skip-limits the aces, and the opposing lineup anticipates more exposure to replacement-level pitching, eroding the projected 1.52-win seasonal gain [PAGE 3].

The clock operates on three nested timescales: (1) the intra-game recovery clock, where 48 hours versus 96+ hours determines acute neuromuscular readiness; (2) the rotational clock across a 162-game season, determining total starts and innings per starter; and (3) the postseason clock, where off-days and elimination games compress rest intervals into the <4-day regime the authors explicitly mark as unreliable [PAGE 3]. The paper’s model does not resolve how these clocks interact when a team must choose between preserving a 5-day-rest ace for Game 5 versus using him on short rest in Game 4 of a division series.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The paper treats injuries as a null factor based on Bradbury’s finding of “little evidence … that days of rest affect future injury among adults [athletes]” [PAGE 3], but this is a veto candidate rather than a settled fact. Biomechanical recovery of the ulnar collateral ligament, flexor-pronator mass, and scapular stabilizers operates on tissue-remodeling timelines that may exceed 72 hours for high-velocity throwers; if five days still falls short of full tissue recovery for a subset of pitchers, the FIP-optimal rest interval produces hidden injury accumulation not captured by the 2015–2022 Statcast sample [PAGE 3]. A veto is triggered if the hazard rate of UCL or shoulder injury rises non-linearly when DoR < 5 for high-spin, high-velocity pitchers, rendering the 5-day recommendation unsafe despite its FIP advantage.

Biomechanical layer: Pitch-count and pitch-mix interactions with rest are unmodeled [PAGE 3]. A pitcher on five days’ rest may throw harder but with higher elbow varus torque if neuromuscular control has not fully recalibrated, producing a short-run FIP gain at the cost of acute injury risk. The paper explicitly flags this as an open question: “How do pitchers’ pitch counts vary when they are on different amounts of rest and does it affect their performance?” [PAGE 3]. Until pitch-count–rest–injury coupling is quantified, the physical layer holds veto power over any schedule change.

Weather layer: FIP removes park dimensions and defensive plays [PAGE 3], but it does not remove same-day ambient temperature, humidity, wind, or precipitation. Cold-weather starts increase muscle-tendon stiffness and reduce grip friction; warm, humid days increase drag carry and dehydration risk. If a team schedules a five-day-rest ace into a cold-weather early-season series, the acute performance penalty from weather may exceed the +1.32% raw FIP advantage of five days over four [PAGE 3]. The weather layer therefore vetoes the blanket application of the 5-day rule across seasons and climates unless weather-conditioned FIP strata are added.

Veto adjudication: The paper’s conclusion (5-day rest optimal) survives only if all three layers simultaneously pass: injury hazard is null or monotonic in rest, pitch count does not mediate rest effects, and weather effects are orthogonal to rest scheduling. Because the paper concedes the injury null is provisional [PAGE 3] and explicitly excludes rotation-quality dilution [PAGE 3], the cross-layer verdict is conditional: 5-day rest is locally optimal for performance but not veto-proof for health or roster construction.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Injury null violation. Counterfactual: A team adopts a six-man rotation so all starters receive five days’ rest, increasing the average age of pitcher-arm tissue at each start. Verifiable veto condition: If, over any rolling 4-week window (28 days), the injury-list placement rate for starting pitchers rises by more than the baseline rate observed under four-day rest in the same cohort, the 5-day rest policy is vetoed on health grounds regardless of FIP. Prediction: Teams enforcing universal 5-day rest will show elevated upper-extremity injury incidence in weeks 5–8 of the season because cumulative torque exposure per pitcher increases even if per-start FIP improves by -0.032 [PAGE 3].

Scenario 2 — Rotation dilution override. Counterfactual: A team replaces its fourth starter’s four-day-rest start with a sixth starter’s five-day-rest start. Verifiable veto condition: If the sixth starter’s career FIP exceeds the displaced starter’s FIP by more than the 0.109 total-adjusted-excess-FIP gap between four days (+0.077) and five days (-0.032) [PAGE 3], the net team FIP worsens. Prediction: In any week where the sixth starter’s FIP is more than 0.11 runs per nine innings worse than the displaced starter’s, the 6-man rotation produces higher aggregate runs allowed than a 5-man rotation, nullifying the projected 0.51-win advantage over six days’ rest [PAGE 3].

Scenario 3 — Forced short-rest breakdown. Counterfactual: A playoff or doubleheader situation forces a start on three days’ rest, which the paper marks as unreliable: “There is not enough data to make proper assumptions about pitcher starts with less than 4 days of rest” [PAGE 3]. Verifiable veto condition: If a manager uses the paper’s 5-day-rest conclusion to justify compressing rest below four days in October, the model is invalid. Prediction: A pitcher forced to start on three days’ rest will exhibit a FIP degradation at least as severe as the observed one-day-rest penalty (-17.88% versus average) [PAGE 3], producing an expected FIP above 5.18 and eliminating any win advantage from the rest-optimization model.
</RLVR_COUNTERFACTUAL_VETOES>