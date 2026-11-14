---
source: "2019 - The Evolution of Curling Analytics - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4530
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided curling analytics paper. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful not to mention betting lines. No spreads, totals, moneylines, odds. I can mention probabilities/win probability as that's from the paper, but not in a betting context. I should avoid "odds" entirely.

Word count: >=1000 words across sections. THINK_TRACE alone needs >=400 words. Let's plan each section carefully.

Source page citations: The PDF text shows page numbers 1-16. I need to cite exact [PAGE N] markers. The text has page breaks indicated by "2019 Research Papers Competition Presented by:" followed by page number. Let's map content to pages:

- Page 1: Introduction start, Datasets start (linescores, shooting percentages, Table 1 mention)
- Page 2: Table 1 caption, Influence of Scoreboard start
- Page 3: Scoreboard continued, Win Probability section start, Table 3/4 intro
- Page 4: Win Probability tables (men/women), example
- Page 5: Shot Tracking, Team Statistics start
- Page 6: Game Statistics, Point Differential, LSFE formula (2) mention, Figure 1
- Page 7: Hammer Efficiency, Figure 2, Steal Defence, Figure 3, Hammer Factor formula blank, Figure 4
- Page 8: Force Efficiency, Figure 5, Steal Efficiency formula (6), Figure 6
- Page 9: Analysis start, Pre-game, First End, Table 5 (Jones)
- Page 10: Table 6 (Homan), Table 7 (Sinclair), Change Analysis start, Table 8 (Shuster)
- Page 11: Table 9 (Gushue), Table 10 (Epping), In-game Decisions start
- Page 12: Scenario 1, Figure 7
- Page 13: Scenario 2, Figure 8, equations (7) and (8)
- Page 14: Scenario 3, Shot Tracking Analysis
- Page 15: Conclusion start, Hasselborg, Shuster quotes
- Page 16: Conclusion continued, References

Wait, the text says "PAGES: 14" but the content goes to page 16. The user says PAGES: 14 maybe meaning the source document is 14 pages? But the text shows up to page 16. I'll cite based on what's visible in the text markers. I'll cite [PAGE N] where N corresponds to the page numbers shown in the footer-like markers.

Important: No toy equations. The paper itself has some formulas missing (HF=, SE=). I should not invent fake ratios. I can state the formal LaTeX equations from the paper where available, or define them properly based on text descriptions without inventing ratios. For Hammer Factor, the paper shows "HF =" but blank. I can describe it as HF = HE - SD based on context ("By subtracting these results") but I need to be careful not to invent? Actually the text says "By subtracting these results, we can produce a Hammer Factor [7]". So HF = HE - SD is a reasonable formalization from the text, not a toy equation. But I should cite it as derived from [PAGE 7]. Similarly SE = ends stolen without hammer / total ends played without hammer [PAGE 8].

Equation (7): WPy = (.2)(.749)+(.8)(.587) = .620
Equation (8): WPy = (.4)(.413)+(.5)(.749)+(.1)(.867)= .627

These are explicit in the paper [PAGE 13].

Win probability example: Scenario 1 [PAGE 12]: WP tied without hammer one end remains: 25.1% men, 31.9% women. Threshold: better than 24% (30% women) chance of making double.

Now structure:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. >=400 words. I need to discuss the derivation from linescores to win probability, the conditional probability structure, the small-sample skepticism, manual judging subjectivity, blank-end strategy, the 5-rock FGZ rule change, etc. Gray zones: volunteer judges, varying schedule strength, conceded games not accounted for in point differential, missing HF formula, shot tracking limited to first few stones, AI curling physical accuracy problem.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define:
- Win Probability WP(s, e, h) where s = score differential, e = ends remaining, h = hammer state.
- Table lookup: WP(s, e, h) = N(s,e,h) / N_total(e,h) maybe empirical frequency.
- HE = (# ends scored >=2 with hammer) / (# non-blank ends with hammer).
- SD = (# ends stolen against) / (# ends with hammer). Blank included.
- HF = HE - SD (from text "By subtracting these results").
- FE = (# ends opponent forced to 1) / (# ends without hammer where opponent scores). Stolen and blank excluded.
- SE = (# ends stolen without hammer) / (# total ends without hammer). Blank included.
- Scenario 1 threshold: p_double > (WP_tied_noH - WP_loss_if_single?) Let's derive: If single made (p=0.95), go to extra end tied no hammer: WP_extra = 0.251 (men). If double made, win (WP=1). If double missed, likely steal? Actually paper says need better than 24% chance. Let's formalize: Expected WP of double attempt = p * 1.0 + (1-p) * WP_after_miss. They simplify threshold p > ~0.24. I can write the indifference equation: p * 1 + (1-p) * WP_fail = 0.95 * WP_extra + 0.05 * WP_fail_single? Need to be careful not to invent. Better to state the paper's derived threshold directly and cite [PAGE 12], and present the formal indifference condition symbolically without numeric toy assumptions beyond what's given.
- Scenario 2 equations (7) and (8) verbatim from [PAGE 13].

Units: dimensionless probabilities [0,1], counts dimensionless, ends count dimensionless, percentage points.

Breakdown regimes: small N (e.g., Table 5 n=76 ends, Table 6 n=32), manual judge inter-rater reliability unknown, 5-rock FGZ pre-2018/19 limited data, conceded games excluded from point differential [PAGE 6], final end excluded from weighted value [PAGE 2 Table 2 caption].

<RETROCAUSAL_GENEALOGY>: Historical lineage: chess analogy ("chess on ice"), Scotch Cup 1959 [PAGE 2], Palmer 2014 "The End Game" [PAGE 1 reference], CurlingZone Black Book 2005-07 [PAGE 1 refs], Scotties/Brier, five-rock FGZ rule change [PAGE 14], SportVu/Second Spectrum NBA analogy [PAGE 15], University of Alberta AI (Bowling & Ahmad) [PAGE 15], checkers/go/poker lineage [PAGE 15]. Multi-week traps: small sample over a week/event, recency bias in first-end tables, schedule strength variance across Grand Slams (6 events) vs regular tour [PAGE 5], Olympic quadrennial cycle.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: under pressure, skips revert to traditional center guard despite data suggesting partial hide or top rings [PAGE 4 shot tracking, PAGE 14 scenario 3]. Counter-trap: opponent anticipates your conservative blank, so you steal; they adjust, you blank. Clock: shot clock/timer ticking during pre-planning [PAGE 1], final shot of end [PAGE 11-12], extra end without hammer.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Ice conditions affect shot execution [PAGE 1, 11]. Sweeping factor in scoring [PAGE 1 Table 1]. Physical stone delivery variability vs deterministic card games [PAGE 15 AI discussion]. Temperature/humidity/pebble not in dataset but veto analytic recommendations. Biomechanical: release rotation, speed, direction [PAGE 15 goal of automated capture]. Weather: outdoor vs indoor, but major events indoor.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll frame as counterfactual vetoes:
1. If Hammer Factor formula truly HF = HE - SD, then a team with high HE but low SD (aggressive) vs low HE high SD (conservative) could have same HF but different risk profiles; veto any ranking that collapses them without variance term. Prediction: HF alone cannot order teams when ΔHE = ΔSD.
2. Win probability table lookup breaks down for n < 30 cells in Table 3/4 (e.g., rare score states); veto using Table 3 for down 3 with 1 end remaining if sample < threshold. Prediction: WP estimates have high variance and should be regularized toward league mean.
3. Conceded games excluded from Point Differential [PAGE 6] create survivorship bias; veto Point Differential as a standalone ranking metric in seasons with frequent early concessions. Prediction: teams conceding more will have inflated PF/G relative to full-game simulation.

Need to ensure no betting lines. I won't mention odds, spreads, etc. I might mention "probability" which is fine. I will avoid "odds" word entirely.

Word count check: I need >=1000 words total. THINK_TRACE >=400. Let's write generously.

Need to use exact XML section names.

Let's draft.

THINK_TRACE (>=400 words):
Start by tracing multi-hop: linescore -> end-state -> win probability table -> shot decision. The state space is (score differential, ends remaining, hammer possession). Empirical WP is a frequentist estimator: WP = count(team wins | state) / count(state). This is a conditional probability with domain [0,1]. The first hop: manual shooting percentages on 0-5 scale with difficulty and sweeping factors introduce inter-rater variance; because judges are volunteers, the same physical shot can receive different points across events. This corrupts the input to HE/SD/FE/SE because those statistics are end-outcome based, not shot-quality based, but they rely on the same event data ecosystem. Second hop: schedule imbalance. Teams self-select into Grand Slams (only 6 regular events) plus tour events; playing 50 vs 100 games against heterogeneous opposition means raw HE is confounded by opponent strength. The paper acknowledges a strength-of-schedule calculation is in development [PAGE 5], so current cross-team comparisons are an imperfect match. Third hop: concession rule. Teams may quit when victory is out of reach; Point Differential (PF/G - PA/G) does not account for truncated games [PAGE 6], creating a selection bias where teams that concede early avoid additional points against, inflating relative differential. Fourth hop: shot tracking is currently limited to early stones (TAP manual entry for first few stones) [PAGE 4, 14], so the decision tree beyond shot 3-4 remains modeled by skip estimation rather than observed frequencies. Gray zones: The Hammer Factor formula is printed as blank in the source [PAGE 7], though text says HE minus SD; without the exact expression, HF cannot be audited. The weighted value table excludes final-end results [PAGE 2 Table 2 caption], so late-game strategy is not grounded in the same valuation. The 5-rock FGZ rule changed after 2018/19 [PAGE 14], meaning historical line scores are drawn under a different constraint set than current play, a non-stationarity that invalidates direct temporal pooling. Finally, win-probability tables are sparse in extreme states (e.g., down 3+ with few ends); applying them to a specific skip requires assuming exchangeability across opponents and ice conditions, which is a strong assumption.

SOURCE_OPERATORS_AND_EQUATIONS:
Define formal notation. Use LaTeX.
Let state be \mathcal{S} = (d, e, h) \in \mathbb{Z} \times \mathbb{N} \times \{0,1\}, where d = score differential relative to decision-making team, e = ends remaining, h = 1 if hammer, 0 otherwise.
Empirical win probability: \widehat{WP}(d,e,h) = \frac{1}{N(d,e,h)} \sum_{i=1}^{N(d,e,h)} \mathbb{1}\{\text{team wins}\}, units: dimensionless probability \in [0,1].
Hammer Efficiency: HE = \frac{N(\text{score} \ge 2 \mid h=1, \text{end scored})}{N(h=1, \text{end scored})}.
Steal Defence: SD = \frac{N(\text{stolen against} \mid h=1)}{N(h=1)} (blank ends included).
Hammer Factor: HF = HE - SD (as stated by subtraction in source [PAGE 7]; exact printed formula omitted/blank).
Force Efficiency: FE = \frac{N(\text{opponent held to 1} \mid h=0, \text{opponent scores})}{N(h=0, \text{opponent scores})} (stolen and blank excluded).
Steal Efficiency: SE = \frac{N(\text{steal} \ge 1 \mid h=0)}{N(h=0)} (blank included).
Scenario 1 indifference: Let p be probability of making double takeout. If single taken with p_s=0.95, game proceeds to extra end tied without hammer with WP_{extra} = 0.251 (men) or 0.319 (women) [PAGE 12]. Attempt double if p \cdot 1 + (1-p) \cdot WP_{\text{after miss}} > p_s \cdot WP_{extra} + (1-p_s) \cdot WP_{\text{after single fail}}; paper derives break-even p > 0.24 (men) / 0.30 (women) [PAGE 12].
Scenario 2 [PAGE 13]: WPy = 0.2(0.749) + 0.8(0.587) = 0.620 (Eq. 7). WPy = 0.4(0.413) + 0.5(0.749) + 0.1(0.867) = 0.627 (Eq. 8).
Citations: [PAGE 1], [PAGE 2], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 12], [PAGE 13], [PAGE 14].
Breakdown regimes: N(d,e,h) < 30 yields high sampling variance; volunteer judge inter-rater reliability unstated; final end excluded from weighted value [PAGE 2]; conceded games excluded from Point Differential [PAGE 6]; pre-2018/19 FGZ rule non-stationarity [PAGE 14].

RETROCAUSAL_GENEALOGY:
Historical: "chess on ice" [PAGE 1]; 1959 Scotch Cup / first men's World Championship, blanking considered bad sportsmanship by Scotland fans [PAGE 2]; Palmer 2014 "The End Game" [PAGE 1 ref 2]; CurlingZone Black Book 2005-07 [PAGE 1 refs 1,3,6]; hammer determined by draw to button replacing coin flip [PAGE 6]; five-rock FGZ replacing four-rock FGZ [PAGE 14]; NBA SportVu/Second Spectrum automated tracking as aspirational analog [PAGE 15]; University of Alberta AI (Bowling & Ahmad) drawing on checkers, Go, poker [PAGE 15]. Multi-week traps: Grand Slam schedule only 6 events per season [PAGE 5]; Order of Merit ranking used to subset Top 20 teams [PAGE 5]; Olympic year (2018) creates quadrennial intensity and small-N event data; first-end tables over a single season (2017/18) with n=76, n=32, n=50 ends [PAGE 9-10] are vulnerable to recency and opponent-specific noise; a team losing round robin then winning final (Sweden vs Korea) shows within-tournament adaptation invalidates static preseason models [PAGE 15 quote].

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: Under shot-clock pressure [PAGE 1], skips revert to canonical center-guard despite shot-tracking evidence that partial hides reduce opponent aggression and steals [PAGE 4]. In tied-without-hammer, three ends remaining, first shot, tradition says center guard, but analysis suggests top rings above button [PAGE 14]. Counter-trap: If Yellow expects Red to blank rather than take one when facing blank-or-single on Red's last shot (noted as mathematically incorrect but common) [PAGE 14], Yellow can adjust first-stone placement to invite a blank with higher WP than a force. Clock: final shot of final end [PAGE 11-12]; second-last shot of penultimate end [PAGE 12-13]; every skip makes 80 decisions in 10-end game, 160 total [PAGE 1], so time pressure compounds across the game, making pre-computed decision trees necessary to avoid regression under the ticking chess timer.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: Stone delivery has continuous outcome distribution (direction, speed, rotation, final location) unlike discrete card plays [PAGE 15], so deterministic models fail without stochastic physical layer. Biomechanical: sweeping factor and degree of difficulty enter manual scoring [PAGE 1 Table 1]; sweep pressure, timing, and stone rotation affect curl and distance, variables absent from linescore-only datasets. Weather/ice: indoor major events control climate, but ice pebble and temperature vary by venue and within game; the paper notes ice conditions affect shot execution chances [PAGE 1, 11], yet no ice-state variable appears in WP tables. Veto rule: any analytic prescription that ignores stone position after release (currently untracked beyond early stones [PAGE 4]) is physically incomplete; shot tracking TAP captures only first few stones manually [PAGE 14], so veto applies to late-end decisions lacking observed stone-location likelihoods.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. I'll phrase as:
Scenario A: Rank inversion under HF degeneracy. If HF = HE - SD, Team X (HE=0.50, SD=0.20, HF=0.30) and Team Y (HE=0.40, SD=0.10, HF=0.30) tie on HF but differ in aggression/risk. Veto: any selection or preparation model that uses HF as a scalar without a variance or risk term misorders these teams. Prediction: In ends where trailing by 1 with hammer, Team X will generate more deuces but also more steals against; Team Y will blank more. Verifiable via Table 8/9/10 situational HE/SD splits.
Scenario B: Sparse-state WP table breakdown. Table 3/4 cells (e.g., down 3+ with 1 end remaining) have small N. Veto: using raw cell WP for in-game calls when N < 30 without shrinkage toward the row/column mean. Prediction: Out-of-sample calibration error spikes for rare states; teams relying on unsmoothed tables will overreact to transient score differentials.
Scenario C: Concession bias in Point Differential. Teams concede when out of reach; Point Differential excludes these truncated games [PAGE 6]. Veto: using Point Differential as a standalone team-strength metric across seasons with heterogeneous concession rates. Prediction: Teams with high concession frequency will show inflated PF/G relative to full-game expected differential; adjusting for conceded ends will re-rank mid-tier teams.

Need to ensure no betting terms. Check: I used "probability", "win probability", not odds. Good.

Word count estimate: THINK_TRACE ~450. SOURCE ~400. RETRO ~300. RECURSIVE ~250. CROSS ~250. RLVR ~300. Total ~1950. Good.

Need to be careful with citations format: [PAGE N] exactly. The source text has page markers like "2019 Research Papers Competition Presented by: 1" etc. I'll cite accordingly.

Let's write final output with exact XML tags. No extra sections. Ensure THINK_TRACE has >=400 words.

Double-check no fake ratios. I defined HF = HE - SD based on text "By subtracting these results". That's fine, not a toy equation, it's stated in source. I labeled it as derived from subtraction in source and noted exact printed formula blank. Good.

Double-check no "odds". I will search mentally: "break-even", "chance", "probability". Fine.

One concern: The user says "PAGES: 14". The document in text shows page 16. I'll just cite pages as they appear.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The multi-hop derivation begins with the raw observable: the linescore, which encodes score by end, hammer possession, and final result. From this, the paper constructs a frequentist win-probability lookup conditioned on the triple (score differential, ends remaining, hammer state). Each hop injects uncertainty. First, shooting percentages are manually judged on a 0-to-5 scale incorporating difficulty and sweeping factor, and because volunteers supply these numbers, inter-rater reliability is unstated and likely variable across events [PAGE 1]. Second, end-level statistics such as Hammer Efficiency, Steal Defence, Force Efficiency, and Steal Efficiency aggregate outcomes but inherit the same scheduling confound: teams self-select into a limited number of Grand Slams (six regular events) and play between roughly 50 and 100 games per season against heterogeneous opposition, so raw efficiency is confounded by opponent strength; the paper explicitly notes a strength-of-schedule adjustment is still in development [PAGE 5]. Third, Point Differential is defined as points for per game minus points against per game, yet curling permits concession when victory is out of reach, and the statistic does not account for truncated games, creating survivorship bias [PAGE 6]. Fourth, shot tracking via CurlingZone’s TAP currently captures only the first few stones manually, so the decision tree beyond early-end placement rests on skip estimation rather than observed stone-location frequencies [PAGE 4, 14]. Gray zones that must be audited include the Hammer Factor formula, which the text describes as a subtraction but prints as blank in the source [PAGE 7]; the exclusion of final-end results from the weighted-value table [PAGE 2 Table 2 caption]; the non-stationarity introduced by the move from a four-rock to a five-rock Free Guard Zone after 2018/19 [PAGE 14]; and sparse cells in the win-probability tables for rare states such as down three or more with one end remaining, where empirical frequencies are thin and unsmoothed estimates are unstable. Any analytic pipeline that treats these tables as stationary, fully observed, and judge-invariant risks propagating structured error into in-game shot calls.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the decision state be \(\mathcal{S} = (d, e, h) \in \mathbb{Z} \times \mathbb{N} \times \{0,1\}\), where \(d\) is the score differential relative to the deciding team, \(e\) is ends remaining, and \(h=1\) denotes hammer possession. The empirical win probability is a dimensionless quantity in \([0,1]\):

\[
\widehat{WP}(d,e,h) = \frac{1}{N(d,e,h)}\sum_{i=1}^{N(d,e,h)} \mathbb{1}\{\text{team wins}\}.
\]

End-level efficiency operators, all dimensionless ratios:

\[
\text{HE} = \frac{N(\text{score} \ge 2 \mid h=1,\ \text{end scored})}{N(h=1,\ \text{end scored})},
\qquad
\text{SD} = \frac{N(\text{stolen against} \mid h=1)}{N(h=1)}\quad(\text{blanks included}),
\]

\[
\text{FE} = \frac{N(\text{opponent held to 1} \mid h=0,\ \text{opponent scores})}{N(h=0,\ \text{opponent scores})}\quad(\text{steals and blanks excluded}),
\]

\[
\text{SE} = \frac{N(\text{steal} \ge 1 \mid h=0)}{N(h=0)}\quad(\text{blanks included}).
\]

The paper states Hammer Factor is produced “by subtracting these results” [PAGE 7], so \(\text{HF} = \text{HE} - \text{SD}\), though the printed formula is blank in the source and must be treated as a derived rather than explicitly audited expression.

Scenario 1, one down with hammer on the last shot of the final end [PAGE 12]: a routine hit or draw for one is assumed to succeed with probability \(p_s=0.95\), sending the game to an extra end tied without hammer, where \(\widehat{WP}_{\text{extra}} = 0.251\) for men and \(0.319\) for women [PAGE 12]. Let \(p\) be the probability of making the double takeout for an outright win. The break-even condition is

\[
p\cdot 1 + (1-p)\cdot WP_{\text{after miss}} \;\gtrsim\; p_s\cdot \widehat{WP}_{\text{extra}} + (1-p_s)\cdot WP_{\text{after single fail}},
\]

and the paper derives that Yellow should attempt the double when \(p > 0.24\) (men) or \(p > 0.30\) (women) [PAGE 12].

Scenario 2 [PAGE 13], equations as printed:

\[
WP_y = (0.2)(0.749) + (0.8)(0.587) = 0.620 \tag{7}
\]

\[
WP_y = (0.4)(0.413) + (0.5)(0.749) + (0.1)(0.867) = 0.627 \tag{8}
\]

Citations: [PAGE 1] for judging scale and manual shooting percentages; [PAGE 2] for weighted-value end exclusion; [PAGE 4] for TAP early-shot limitation; [PAGE 5] for schedule imbalance and strength-of-schedule gap; [PAGE 6] for concession exclusion from Point Differential; [PAGE 7] for Hammer Factor; [PAGE 8] for Force and Steal Efficiency definitions; [PAGE 12] for Scenario 1 win-probability thresholds; [PAGE 13] for Scenario 2 equations; [PAGE 14] for five-rock FGZ non-stationarity. Breakdown regimes: \(\widehat{WP}\) cells with \(N(d,e,h) < 30\) exhibit high sampling variance; volunteer-judge inter-rater error is unquantified; conceded games truncate the point-differential sample; pre-2018/19 line scores are drawn under a different FGZ constraint set and should not be pooled directly with current-season data.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage runs from curling’s “chess on ice” self-conception [PAGE 1] through the 1959 Scotch Cup, when blanking an end was already established practice yet viewed as poor sportsmanship by Scottish observers [PAGE 2], to Palmer’s 2014 “The End Game” [PAGE 1 reference 2] and the CurlingZone Black Book of 2005–07, which introduced manual shot judging and early win-probability writing [PAGE 1 references 1, 3, 6]. Methodologically, the paper descends from baseball win-probability thinking but diverges because curling’s scoreboard dominates strategy far more than in baseball: a team down 2–0 after the first inning does not change approach, whereas a curling team down two points calls an entirely different shot profile [PAGE 2]. The hammer possession mechanism itself evolved from coin flip or predetermined assignment to a pre-game draw-to-the-button contest [PAGE 6]. A crucial regime shift is the five-rock Free Guard Zone replacing the four-rock rule, adopted across World Curling Tour and Federation events for the 2018/19 season, meaning historical line scores are non-stationary relative to current play [PAGE 14]. The aspirational tracking layer references NBA transformations by SportVu and Second Spectrum, aiming for automated capture of every stone’s direction, speed, rotation, and final location [PAGE 15]. Parallel AI work at the University of Alberta by Bowling and Ahmad imports checkers, Go, and poker methods, but the authors note a fundamental distinction: card games have deterministic execution, whereas a delivered stone has many possible stopping locations [PAGE 15]. Multi-week traps include the six-event Grand Slam calendar [PAGE 5], which makes cross-team samples small and opponent-dependent; the 2017/18 first-end tables built from only 76 ends for Team Jones, 32 for Team Homan, and 50 for Team Sinclair [PAGE 9–10], vulnerable to recency and matchup noise; and the Olympic cycle, where Sweden lost round-robin to Korea yet won the final by exploiting statistical tendencies, demonstrating that within-tournament adaptation invalidates static preseason models [PAGE 15].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Under the ticking chess timer described in the introduction [PAGE 1], skips face 80 shot decisions in a ten-end game, 160 across both teams, producing acute decision pressure. Crisis habit regression manifests as reversion to canonical plays despite contradictory data: shot tracking showed teams that placed stones fully behind centre guards early gave up more steals, yet the fully hidden draw remains treated as the “best” shot [PAGE 4]. Similarly, in tied games without hammer with three ends remaining, tradition dictates a centre guard on the first shot, but the analysis recommends placing the stone into the top rings above the button to invite a blank with higher win probability than even a forced single [PAGE 14]. The counter-trap operates at the opponent-modelling level: teams facing blank-or-single on their last shot will nearly always blank even when mathematically incorrect [PAGE 14]; if Yellow anticipates this reflex, Yellow can adjust first-stone placement to manipulate Red into a blank that favors Yellow’s win probability more than a force would. The clock layer is explicit in the scenarios: final shot of the final end [PAGE 11–12], second-last shot of the penultimate end [PAGE 12–13], and first shot with three ends remaining [PAGE 14]. Because pre-planning occurs while a clock ticks, teams that do not internalize the win-probability decision tree in advance will regress to gut feel under time pressure, precisely when the expected-value calculation matters most.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: stone delivery produces a continuous distribution over direction, speed, rotation, and final location, unlike the discrete, always-successful card play assumed by checkers, Go, and poker models [PAGE 15]; therefore any analytic model that ignores post-release stone location is physically incomplete. Biomechanical layer: the manual 0–5 shooting scale incorporates sweeping factor and degree of difficulty [PAGE 1 Table 1], meaning sweep pressure, release rotation, and ice-read skill modulate shot success in ways invisible to linescore-only datasets. Weather/ice layer: although major events are indoors, ice pebble, temperature, and humidity vary by venue and within a game, and the paper explicitly states that ice conditions affect the chance of making each shot [PAGE 1, 11]; no ice-state variable appears in the win-probability tables. Veto rule: any shot-call recommendation generated from Table 3 or Table 4 without conditioning on observed stone position after early shots, sweep quality, or venue ice state is vetoed because CurlingZone’s TAP currently tracks only the first few stones manually and lacks automated capture of every shot [PAGE 4, 14]. The model is valid only for ends where early-stone placement has been recorded and where the five-rock FGZ constraint matches the historical sample; it breaks down for late-end decisions under unfamiliar ice conditions or with untracked stone trajectories.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario A (Hammer Factor degeneracy): Because \(\text{HF} = \text{HE} - \text{SD}\), Team X (\(\text{HE}=0.50,\ \text{SD}=0.20\)) and Team Y (\(\text{HE}=0.40,\ \text{SD}=0.10\)) can tie at \(\text{HF}=0.30\) while differing materially in risk exposure. Veto: any selection or preparation model that ranks teams on HF alone without a variance or aggression term misorders these teams. Prediction: in ends down one with hammer, Team X produces more deuces but concedes more steals; Team Y blanks more often. Verifiable from the situational HE/SD splits in Tables 8–10.

Scenario B (Sparse-state win-probability breakdown): Table 3/4 cells such as down three or more with one end remaining have small counts. Veto: using raw cell \(\widehat{WP}\) for in-game calls when \(N(d,e,h) < 30\) without shrinkage toward row or column means. Prediction: out-of-sample calibration error spikes for rare states, and teams relying on unsmoothed tables will overreact to transient score differentials, making suboptimal double-takeout or blank decisions.

Scenario C (Concession bias in Point Differential): Teams concede when victory is out of reach, and Point Differential excludes these truncated games [PAGE 6]. Veto: using Point Differential as a standalone strength metric across seasons with heterogeneous concession rates. Prediction: teams with high concession frequency show inflated points-for per game relative to full-game expected differential; adjusting for conceded ends will re-rank mid-tier teams and expose false positives in Top 20 Order of Merit comparisons.
</RLVR_COUNTERFACTUAL_VETOES>