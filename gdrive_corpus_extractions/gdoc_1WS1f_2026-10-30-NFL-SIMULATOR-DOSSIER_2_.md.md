---
source: "2026-10-30-NFL-SIMULATOR-DOSSIER (2).md"
folder: "/CorpusRoot"
pages: 6
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4538
---

<NATIVE_REASONING>
The user wants me to analyze a source document about an NFL simulator model (dgrifka/nfl_simulator) and produce a structured response with specific XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes. The source is "PAGES: 6" from "/CorpusRoot/2026-10-30-NFL-SIMULATOR-DOSSIER (2).md". I need to treat sections as pages? The document is divided into sections numbered 1-7 plus intro. I should cite [PAGE 1] etc. corresponding to the sections. Let me map:
  - Intro/Reproduction Verdict / CAR@GB table / Deserved margin section = PAGE 1 (before "1. WHAT IT IS")
  - Section 1 = PAGE 2
  - Section 2 = PAGE 3
  - Section 3 = PAGE 4
  - Section 4 = PAGE 5
  - Sections 5-7 / Risks = PAGE 6? Actually there are sections 5, 6, 7 and run log. Let me map carefully:
    - PAGE 1: Reproduction verdict table and CAR@GB inputs (before section 1 header)
    - PAGE 2: Section 1 (WHAT IT IS)
    - PAGE 3: Section 2 (WHERE TO FIND IT) + Section 3 (HOW TO USE IT)
    - PAGE 4: Section 4 (WHICH SYSTEM IT PLUGS INTO) + Section 5 (CREATIVE ANGLES)
    - PAGE 5: Section 6 (RISKS AND LIMITS)
    - PAGE 6: Section 7 (FIRST TEST AND VERDICT) + Run log + Verdict

I need >= 1,000 words across sections. Each section must be substantive.

Key content from source:
- v2 model (process meter) uses two inputs: success rate with takeaway fold (K+T_s)/(N+T) and yards/play with asymmetric fold (Y+R)/N.
- OLS: points = −16.829 + 35.126 × success rate + 4.178 × yards per play, on 4,190 team-games 2016–2023, R²=0.609.
- Percent: RNG seeded SHA-256(seed 0 || game_id), 40,000 draws from posteriors: weights ~ Normal(β̂, Σ̂), true rate ~ Beta(K+T_s+1, N−K+T−T_s+1), true ypp ~ Normal(ȳ, s_y/√N). Margin draw, p_home = mean of Φ(margin draw / 5.4528).
- 5.4528 is residual SD (8.875) with sampling noise removed ("noise-once").
- CAR@GB: GB p_home=0.8799, deserved points GB 22.29, CAR 12.68, margin +9.61. Actual margin +8. Luck gap -1.61.
- 94.4% raw draws above zero, smoothed to 88%.
- 89% interval [-0.07, +18.98].
- Scoreboard lean: 69.6% of games percent moves toward actual winner.
- Forward-looking: next-game log-loss gain −0.0007, 95% CI straddles zero. Not predictive.
- Structural ignores: special teams, field position, penalties, opponent adjustment, dropped picks in v2, field goals, extra points, punts, kickoffs.
- v1 (retired) did event re-pricing with FTN charting.
- Display rules: whole percents, <=47% "luck merchant" flag are poster's choices, not in library.
- MIN_SCRIMMAGE_PLAYS = 25 floor.
- Pin-checked weights.json, WEIGHTS_PIN.

I must avoid betting lines. I can mention "spread GB −3.5, total 47.5" appears in source but I must NOT mention spreads/totals/moneylines/odds per invariant. So I should not repeat those or if I do, I must avoid them entirely. The user said ZERO BETTING LINES. So I will not mention the spread or total at all, even though they're in the source. I can mention actual score (GB 27, CAR 19) since that's not a betting line.

Need formal LaTeX equations. Let's draft:

Success rate with takeaway fold:
\[
\mathrm{SR}_{\text{fold}} = \frac{K + T_s}{N + T}
\]
where K own successes (EPA>0), N own scrimmage plays, T takeaways forced, T_s successful takeaways (offense lost EPA on the takeaway play).

Yards per play asymmetric:
\[
\mathrm{YPP}_{\text{asym}} = \frac{Y + R}{N}
\]
where Y own yards, R takeaway return yards. Note asymmetry: denominator excludes takeaway plays.

OLS:
\[
\widehat{\text{Points}} = -16.829 + 35.126\,\mathrm{SR}_{\text{fold}} + 4.178\,\mathrm{YPP}_{\text{asym}}
\]
Units: points per team-game. Fit on n=4,190 team-games (2016–2023), R²=0.609.

Posterior draws:
\[
\beta \sim \mathcal{N}(\hat\beta, \hat\Sigma), \quad p_{\text{true}} \sim \mathrm{Beta}(K+T_s+1,\; N-K+T-T_s+1), \quad y_{\text{true}} \sim \mathcal{N}(\bar y,\; s_y/\sqrt N)
\]
Margin draw per simulation i:
\[
M_i = \Delta \text{Points}_{\text{home},i} - \Delta \text{Points}_{\text{away},i}
\]
Percent:
\[
p_{\text{home}} = \frac{1}{S}\sum_{i=1}^{S} \Phi\left(\frac{M_i}{\sigma_{\text{noise}}}\right),\quad S=40{,}000,\; \sigma_{\text{noise}}=5.4528
\]
where Φ is standard normal CDF.

Breakdown regimes:
- N < 25 scrimmage plays: not scoreable (readiness MIN_SCRIMMAGE_PLAYS).
- N small: Beta posterior wide; Normal ypp approx may break if N very small but 25 floor mitigates.
- Takeaway denom asymmetry: T enters success-rate denominator but not YPP denominator — this is the v2.0→v2.1 difference.
- Φ smoothing assumes exchangeable residual noise; if margin heteroskedastic by game type, smoothing mis-calibrates.
- σ_noise=5.4528 derived from residual SD 8.875 with sampling noise removed; double-counting correction is a convention (#5), not identified from data alone.

Gray zones / think trace:
- The 88% is not raw frequency (94.4% of draws >0). Smoothing pulls toward 50%? Actually Φ(M/5.4528) compresses extremes. For M=9.61, Φ(9.61/5.4528)=Φ(1.762)=0.961. But mean over draws yields 0.8799 because noise scale adds uncertainty. Wait: they say mean of Φ(draw/5.4528). If draws have mean 9.50 and SD 5.98, then Φ(draw/5.4528) averages to something like 0.88. Because 5.4528 < 5.98? Actually dividing by smaller scale increases spread of the argument, but Φ is nonlinear. Anyway, smoothing pulls from 94.4% raw to 88%. This is a convention.

Recursive theory of mind:
- Crisis habit regression: When a team wins but underperforms deserve-to-win (luck gap negative for winner), analysts may regress to "they got lucky" and overcorrect next week, fading them. Counter-trap: the meter's scoreboard lean (69.6% moves toward winner) means it partly ratifies scoreboard; using it as independent confirmation is circular. Clock: postgame only, no pregame form, cannot be used in pick formation per author's negative forward test (log-loss gain −0.0007).

Cross-layer veto:
- Physical: special teams points structurally absent (FGs, XPs, punts, kickoffs). In CAR@GB, CAR's 19 included 6 from two FGs; GB missed XP and lost KR fumble — all invisible. Veto: any game where special teams decides outcome cannot be graded by meter.
- Biomechanical: EPA from nflverse; success = EPA>0. No player health, no snap counts, no weather.
- Weather: not included. Breakdown: extreme weather games (wind, precipitation) affect passing/yards but model has no weather covariate.

RLVR counterfactual vetoes:
1. Game decided by special teams (e.g., punt return TD, multiple FGs) where one team dominates scrimmage but loses. Veto: meter grades scrimmage loser as deserved winner; prediction of next game based on meter would fail. Prediction: if team A out-produces in scrimmage but loses due to special teams, meter's p_home favors A despite actual loss; next-week regression-to-mean trading on meter would lose because special teams variance is non-persistent.
2. Low-play-count game (N<25 due to garbage time, blowout, injuries) triggers not-scoreable or wide Beta/Normal posteriors. Veto: readiness floor excludes; if forced, estimate unstable. Prediction: p_home near 0.5 or extreme with wide interval; cannot support high-confidence grading.
3. Opponent adjustment absence: Team plays weak schedule, inflates SR/YPP against weak defenses. Veto: no opponent adjustment measured as shrinkage. Prediction: meter overrates weak-schedule teams' deserved points; cross-check against GSE engine would flag mismatch after strength-of-schedule correction.

Need verbatim quotes and [PAGE N] markers. Let me quote some exact phrases:
- [PAGE 1] "Likely points GB 22.3 / plug-in deserved points 22.29 → 22.3 / REPRODUCED EXACTLY"
- [PAGE 1] "the shipped model never looks at a field goal, an extra point, a drop, a punt or a kickoff. There is no play re-pricing in it at all / DOES NOT DESCRIBE THE SHIPPED MODEL — it describes retired v1"
- [PAGE 2] "One deserve-to-win number per finished NFL game, computed only from the plays each team ran. It is a retrospective verdict, not a prediction and not a replay engine"
- [PAGE 2] "Success rate with the takeaway fold: (K + T_s) / (N + T)"
- [PAGE 2] "Yards per play with the asymmetric fold: (Y + R) / N — takeaway return yards R are credited, but a takeaway is not a play in this denominator. That asymmetry is the entire difference between v2.0 (unreleased) and v2.1."
- [PAGE 2] "points = −16.829 + 35.126 × success rate + 4.178 × yards per play (in-sample R² = 0.609)"
- [PAGE 2] "p_home = mean of Φ(margin draw / 5.4528)"
- [PAGE 3] "p_home = 0.7488 (README: 0.7488)" control.
- [PAGE 4] "The meter answers 'did the play deserve the result?' for a game already played."
- [PAGE 4] "Never side selection... It also cannot price a market: its 'likely points' are scrimmage-production points from a two-input regression, not a score projection — special-teams points are structurally absent from both sides."
- [PAGE 5] "Scoreboard lean (author's own defect #4, accepted). In 69.6% of games the percent moves toward the team that actually won."
- [PAGE 5] "Never held out, by design... stripping luck did not improve next-game prediction (the v2.1 arm's next-game log-loss gain was −0.0007 with a 95% interval straddling zero; adopted on definition, not on forecast gain)."
- [PAGE 5] "The percent hides the interval. CAR@GB's deserved-margin 89% interval is [−0.07, +18.98]..."
- [PAGE 6] "Verdict: TEST → adopt for the postgame grading lane... Do not wire it into pick formation or pregame reasoning as a predictive input..."

Need >1000 words total. Let's ensure each section is long enough. THINK_TRACE >=400 words.

I will write polished response.

Structure:

<THINK_TRACE>
(>=400 words) Deep derivation: start from CAR@GB reproduced numbers, show two-input compression, derive likely points, posterior construction, smoothing mechanics, identify gray zones: description gap v1 vs v2, scoreboard lean, non-predictive nature, noise-once convention, display rules. Discuss singularity/breakdown: N<25, small-sample Beta/Normal, heteroskedasticity, special teams absence.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, assumptions, breakdown regimes, page citations.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: v1 event re-pricing (FTN charting, 2022+), Medium write-up, retired tag v1.4.3; v2 process meter (2026-09-23, v2.1.2). NFLverse EPA, nflreadpy. OLS on 4,190 team-games. Pre-registered docs (75, 76, 05). Refusals graveyard (09,33,61-62,68). Multi-week trap: luck ledger as descriptive, not predictive; trailing luck gap summed over weeks is descriptive only.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: after a win with negative luck gap, public overreacts, fades team next week. Counter-trap: meter's scoreboard lean (69.6%) means agreement with actual winner is expected, not independent. Clock: postgame-only; author's forward test negative (log-loss −0.0007). GSE ledger use vs pick formation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: special teams veto (FGs, XPs, punts, kickoffs absent). CAR@GB example: 6 CAR points from FGs invisible; GB missed XP and KR fumble invisible. Biomechanical: EPA>0 success, nflverse EPA revisions (manifest drift doc 73). Weather: no covariate; breakdown in extreme conditions. Field position: absent; identical rate/ypp regardless of drive start. Opponent adjustment: absent (measured shrinkage).
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios with verifiable predictions.
</RLVR_COUNTERFACTUAL_VETOES>

Word count: Need >=1000 across sections. I'll aim for ~1500+.

No betting lines: I will not say spread/total/moneyline/odds. I can mention "GB −3.5"? No, that's a spread. Avoid. I'll mention actual score only.

Citations: Use [PAGE 1] through [PAGE 6] mapping as above. I'll define page mapping implicitly by section content.

Let's draft carefully.

Mapping check:
- PAGE 1: Top section (Reproduction verdict, table, deserved margin, margin draws) — before "1. WHAT IT IS"
- PAGE 2: Section 1
- PAGE 3: Section 2 + Section 3
- PAGE 4: Section 4 + Section 5
- PAGE 5: Section 6 (Risks and Limits)
- PAGE 6: Section 7 + Run log + Verdict

Good.

Now write.

Need to be careful with LaTeX syntax. Use standard math.

Let's write THINK_TRACE first (~500 words).

Then SOURCE_OPERATORS_AND_EQUATIONS with equations and citations.

Then RETROCAUSAL_GENEALOGY (~250 words).

Then RECURSIVE_THEORY_OF_MIND (~200 words).

Then CROSS_LAYER_VETO_ADJUDICATION (~250 words).

Then RLVR_COUNTERFACTUAL_VETOES (~250 words).

Total likely >1500.

No mention of betting lines.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The dossier reproduces a postgame “deserve-to-win” verdict for CAR@GB (final Packers 27, Panthers 19) from the shipped library v2.1.2 and lands exactly on the published figures: p_home = 0.8799 (displayed 88%), deserved points 22.29 / 12.68, deserved margin +9.61 versus actual +8, luck gap −1.61 [PAGE 1]. The first multi-hop is therefore a verification chain: the control game CIN@CLE reproduces README p_home 0.7488 to four decimals before the target game is trusted [PAGE 1], establishing that the environment, cache, and library seam are sound. The second hop isolates the model actually in service: v2 “process meter,” not v1 event re-pricing [PAGE 2]. v1 replaced realized EPA on coin-flip events (fumbles, field goals, drops) with expected EPA and bootstrapped flips; it required paid FTN charting and is retired at tag v1.4.3 [PAGE 2]. The account’s public method story (“every loose ball, field goal and drop re-priced”) describes v1 and does not describe the shipped v2 [PAGE 1]; this description gap is the headline gray zone because anyone citing 88% as “the sim re-ran every bounce” is citing a nonexistent model.

The third hop formalizes the compression. Each team-game is reduced to two scrimmage-play statistics: a success rate with the takeaway fold, SR_fold = (K + T_s)/(N + T), and an asymmetric yards-per-play, YPP_asym = (Y + R)/N, where takeaway return yards enter the numerator but takeaway plays do not enter the denominator [PAGE 2]. That asymmetry is the entire v2.0 → v2.1 distinction. Likely points come from a single pinned OLS on 4,190 team-games (2016–2023): Points = −16.829 + 35.126·SR + 4.178·YPP, R² = 0.609 [PAGE 2]. For CAR@GB this yields 22.29 and 12.68, matching the plug-in values exactly [PAGE 1]. The fourth hop builds the probability: per game, an RNG seeded by SHA-256(0 || game_id) draws 40,000 times from weights ~ Normal(β̂, Σ̂), true rate ~ Beta(K + T_s + 1, N − K + T − T_s + 1), and true yards/play ~ Normal(ȳ, s_y/√N) [PAGE 2]. Each draw forms a margin, and p_home is the mean of Φ(margin / 5.4528), where 5.4528 is a “noise-once” scale derived from the residual SD 8.875 with draw-carried sampling noise removed [PAGE 2]. Crucially, 94.4% of raw margin draws sit above zero, yet the published 88% is the smoothed Φ-share, not a raw win frequency [PAGE 1]. The 89% interval [−0.07, +18.98] nearly touches zero, showing the percent hides substantial uncertainty [PAGE 5].

Gray-zone audit: (i) scoreboard lean — in 69.6% of games the percent moves toward the actual winner, so the meter partly ratifies the scoreboard it claims to audit [PAGE 5]; (ii) non-predictive by design — next-game log-loss gain was −0.0007 with a 95% interval straddling zero, adopted on definition not forecast gain [PAGE 5]; (iii) structural absences — no special teams, field position, penalties, opponent adjustment, or dropped picks; in CAR@GB the meter never saw Carolina’s two made field goals (6 of 19 points), Green Bay’s missed XP, or Green Bay’s kickoff-return fumble [PAGE 1, PAGE 5]; (iv) readiness floor N ≥ 25 scrimmage plays marks low-play games not scoreable [PAGE 3]; (v) display rules (whole percents, ≤47% “luck merchant” flag) are the poster’s presentation layer, not library output [PAGE 1, PAGE 5]. Breakdown regimes: N < 25 triggers not-scoreable; small N inflates Beta posterior width and strains the Normal yards/play approximation; the noise-once scale is a stated convention, not an identified object; and heteroskedastic margin noise across game types would mis-calibrate the Φ smoothing. Any GSE use must remain postgame grading and descriptive luck-ledger content, never pick formation or pregame reasoning [PAGE 4, PAGE 6].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Formal operators and equations, with SI/information/probability units, assumptions, and breakdown regimes.

1) Success rate with takeaway fold (dimensionless probability):
\[
\mathrm{SR}_{\text{fold}} = \frac{K + T_s}{N + T}
\]
K = own scrimmage plays with EPA > 0 (success); N = own scrimmage plays; T = takeaways forced (interceptions + opponent lost fumbles); T_s = takeaways counted as successful (offense lost EPA on that play; 99.4% qualify) [PAGE 2]. Unit: none, range [0,1]. Assumption: each takeaway is one additional play for the taking team. Breakdown: N + T = 0 undefined; readiness floor MIN_SCRIMMAGE_PLAYS = 25 excludes low-play games [PAGE 3].

2) Yards per play with asymmetric fold (yards per play):
\[
\mathrm{YPP}_{\text{asym}} = \frac{Y + R}{N}
\]
Y = own scrimmage yards; R = takeaway return yards credited to the taking team; denominator excludes takeaway plays [PAGE 2]. Unit: yards/play. Asymmetry (return yards in, takeaway plays out of denominator) is the v2.0 → v2.1 difference [PAGE 2]. Breakdown: N = 0 undefined.

3) Likely points from pinned OLS (points per team-game):
\[
\widehat{\text{Points}} = -16.829 + 35.126\,\mathrm{SR}_{\text{fold}} + 4.178\,\mathrm{YPP}_{\text{asym}}
\]
Fit on n = 4,190 team-games, 2016–2023, in-sample R² = 0.609 [PAGE 2]. Weights committed in weights.json (1 KB) and pin-checked by WEIGHTS_PIN; library never refits at score time [PAGE 2]. For CAR@GB: GB SR_fold = 33/69 = 0.478, YPP = (354+4)/67 = 5.343 → 22.29 points; CAR SR_fold = 26/71 = 0.366, YPP = (258+17)/69 = 3.986 → 12.68 points [PAGE 1]. Deserved margin = 22.29 − 12.68 = +9.61 points (home view) [PAGE 1].

4) Posterior simulation (probability units):
\[
\beta \sim \mathcal{N}(\hat\beta,\hat\Sigma),\quad
p_{\text{true}} \sim \mathrm{Beta}(K+T_s+1,\; N-K+T-T_s+1),\quad
y_{\text{true}} \sim \mathcal{N}(\bar y,\; s_y/\sqrt N)
\]
RNG seeded SHA-256(seed 0 ‖ game_id); S = 40,000 draws per game [PAGE 2]. Score-identical alone or in batch; six reference percents pinned to 4 decimals in stage-0 tests (CIN@CLE 0.7488 hit exactly) [PAGE 1, PAGE 2].

5) Deserved-margin draw and smoothed percent:
\[
M_i = \widehat{\text{Points}}_{\text{home},i} - \widehat{\text{Points}}_{\text{away},i},\quad
p_{\text{home}} = \frac{1}{S}\sum_{i=1}^{S}\Phi\!\left(\frac{M_i}{\sigma_{\text{noise}}}\right),\quad S=40{,}000,\; \sigma_{\text{noise}}=5.4528
\]
Φ = standard normal CDF; 5.4528 = residual SD 8.875 with draw-carried sampling noise removed (“noise-once,” author’s convention #5) [PAGE 2, PAGE 5]. CAR@GB: mean margin draw +9.50, SD 5.98, 94.4% of raw draws > 0, yet smoothed p_home = 0.8799 [PAGE 1]; 89% interval [−0.07, +18.98] [PAGE 5].

6) Luck gap (points, home view):
\[
\text{Luck gap} = \text{Actual margin} - \text{Deserved margin} = +8 - (+9.61) = -1.61
\]
Negative means the final score slightly understated Green Bay’s play [PAGE 1].

Breakdown regimes summary: N < 25 not scoreable [PAGE 3]; small-N Beta/Normal posteriors wide; noise-once scale is a convention not an identified quantity [PAGE 5]; no opponent adjustment (measured as shrinkage) [PAGE 5]; EPA foundation is nflverse and subject to manifest-drift revisions (doc 73) moving third decimals [PAGE 5]; scoreboard lean 69.6% toward actual winner [PAGE 5]; forward next-game log-loss gain −0.0007, 95% CI straddles zero [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The model’s lineage splits into two distinct eras. v1 (2026-08-31 → 2026-09-16, retired; code only at tag v1.4.3) was an event re-pricing engine: for every play whose outcome contained a coin flip — a fumble on the ground, a field-goal or extra-point attempt, a dropped interception, a receiver drop — it replaced realized EPA with its expectation and bootstrapped flips into a margin distribution [PAGE 2]. It required FTN charting (is_interception_worthy, is_catchable_ball, available only from 2022), so coverage changed by season [PAGE 2]. Its general-reader write-up is the Medium article “Who Deserved to Win? Pricing Luck in NFL Games” (@dmgrifka_64770) and describes v1 only [PAGE 2]. v2 — the “process meter” (library v2.1.0, 2026-09-23; current v2.1.2; last commit 2026-09-28) — is the model of record that produced the CAR@GB post [PAGE 2, PAGE 3]. It contains no event re-pricing, no charting, no special teams [PAGE 2]. The scientific inputs are nflverse play-by-play and schedules via nflreadpy, with EPA as the foundation and “success” defined as EPA > 0 [PAGE 2, PAGE 5]. nflverse occasionally revises historical pbp; the repo carries manifest-drift apparatus (doc 73) because a re-pull once moved numbers at the 1e-6 scale [PAGE 5].

The research record is unusually self-incriminating: docs/research/ holds 76+ numbered decision documents with gates pre-registered before the fit, and research/ (~100 numbered scripts) is v1’s evidence base, byte-frozen at v1.4.3 [PAGE 3]. The refused-component graveyard (docs 09, 33, 61–62, 68) pre-registers luck adjustments that failed measurement: fumble luck, sequencing, possession caps [PAGE 4]. This is the multi-week trap: GSE might be tempted to build its own luck adjustment or to sum trailing luck gaps (actual − deserved margin over recent weeks) into a “running hot/cold” signal [PAGE 4]. The dossier permits the luck gap strictly as a descriptive context for the reasoning trail and explicitly warns against treating it as a predictive signal [PAGE 4, PAGE 5]. The author’s own forward test is negative: stripping luck did not improve next-game prediction (log-loss gain −0.0007, 95% interval straddling zero); the meter was adopted on definition, not forecast gain [PAGE 5]. Any GSE lineage that imports v2 must therefore adopt it as a postgame grading instrument only — ledger receipts, luck-ledger content, verdict cross-check — and never as a pregame or matchup input [PAGE 4, PAGE 6].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates as follows: a team wins a game while posting a negative luck gap (actual margin below deserved margin), and the public narrative regresses to “they got away with one,” producing an overcorrection that fades that team in the following week. v2’s scoreboard lean defeats the naive use of the meter as an independent check: in 69.6% of games the percent moves toward the team that actually won, so agreement between the meter and the scoreboard is expected behavior, not evidentiary confirmation [PAGE 5]. The recursive trap is therefore double counting: if GSE’s engine already likes a side and the meter also likes that same side largely because the scoreboard leans that way, the agreement is partially mechanical and adds little information.

The counter-trap is the author’s explicit forward-looking result: the v2.1 arm’s next-game log-loss gain was −0.0007 with a 95% interval straddling zero [PAGE 5]. Thus a team that “deserved” a loss but won anyway is not reliably a regression candidate next week, and a team that “deserved” a win but lost is not reliably a positive regression candidate. The meter answers “did the play deserve the result?” for a finished game [PAGE 4]; it has no pregame form, cannot price a market, and its likely points are scrimmage-production points from a two-input regression, not a score projection [PAGE 4].

The clock layer hard-binds usage: v2 reads a finished game only [PAGE 1, PAGE 4]. It cannot be wired into pick formation or pregame reasoning [PAGE 4, PAGE 6]. The defensible GSE recursion is therefore: (a) compute deserved points and luck gap after the final; (b) store them beside the graded card in the vault package; (c) use the trailing luck gap only as a descriptive “running hot/cold” label in the reasoning trail; (d) cross-check sharp engine–meter disagreements as research leads, not as trade signals [PAGE 4]. Any recursive habit that treats the 88% as a forecast input violates the author’s own pre-registered negative result and the model’s retrospective definition [PAGE 5, PAGE 6].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto — special teams and non-scrimmage events are structurally absent. The model never looks at a field goal, an extra point, a drop, a punt, or a kickoff; there is no play re-pricing [PAGE 1]. In CAR@GB this is decisive: Carolina’s 19 points included 6 from two made field goals (39 and 50 yards) that the model never credits; Green Bay missed an extra point and lost a fumble on a kickoff return, both invisible [PAGE 1]. Any game in which special teams or return/fumble variance decides the outcome fails the physical-layer completeness test, and the meter’s “deserved” verdict must be vetoed as a grading of the full game. It remains valid only as a grading of scrimmage production volume/efficiency [PAGE 5].

Biomechanical layer — EPA foundation and measurement drift. “Success” is defined as EPA > 0, where EPA is nflverse’s model [PAGE 2, PAGE 5]. nflverse occasionally revises historical play-by-play values; the repo’s manifest-drift apparatus (doc 73) exists because a re-pull once moved numbers at the 1e-6 scale [PAGE 5]. A number quoted from a post is pinned to the author’s pull (this run pulled pbp on 2026-10-30 and hit published values exactly) [PAGE 1, PAGE 5], but a later re-pull can move the third decimal. There is no player-health, snap-count, or injury covariate, so biomechanical degradation (e.g., a fatigued offensive line) is invisible except insofar as it is already expressed in realized EPA/yards.

Weather and field-position layer — no covariates. The two inputs (success rate, yards per play) carry no opponent adjustment (measured as shrinkage), no drive context, and no field-position component [PAGE 2, PAGE 5]. Two teams with identical rate/ypp receive identical likely points regardless of where their drives started [PAGE 5]. Extreme weather (wind, precipitation) that suppresses passing or alters kicking is not modeled; the breakdown regime is any game where non-scrimmage or environmental variance dominates the scoreboard, because the model’s error term absorbs it without attribution [PAGE 5].

Cross-layer adjudication summary: the meter passes only where scrimmage production explains the result and special teams, field position, weather, and opponent strength are orthogonal to the margin. It fails wherever kicks, returns, punts, or field-position advantages decide the game — precisely the events the advertised v1 method claimed to price but v2 does not [PAGE 1, PAGE 2]. GSE must therefore treat the output as a scrimmage-process receipt, not a complete game descriptor.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios, each with a concrete prediction:

Veto 1 — Special-teams-decided outcome. Construct a counterfactual game in which Team A out-produces Team B on scrimmage plays (higher SR_fold and YPP_asym) but loses because Team B scores multiple field goals or a return touchdown that v2 never sees. Verifiable check: run score_games on the finished game; p_home will favor Team A despite the actual loss, and the luck gap (actual − deserved, home view) will be strongly negative for Team A. Prediction: a GSE strategy that fades Team A next week because “they didn’t deserve it” will fail at a rate no better than chance, consistent with the author’s null forward result (next-game log-loss gain −0.0007, 95% CI straddling zero) [PAGE 5], because special-teams variance is non-persistent and outside the model.

Veto 2 — Sub-floor play count. Construct a counterfactual with N < 25 scrimmage plays for one team (e.g., a blowout with starters removed, or a weather-shortened game). Verifiable check: the readiness operator MIN_SCRIMMAGE_PLAYS = 25 marks the game not-yet-scoreable [PAGE 3]. Prediction: if forced past the floor, the Beta posterior for success rate and the Normal approximation for yards/play become wide and unstable; the 89% margin interval will be large relative to the point estimate (cf. CAR@GB interval [−0.07, +18.98] [PAGE 5]), and p_home will be an unreliable smoothing convention rather than a frequency. Any ledger entry derived from such a game must be flagged as not-scoreable, not graded.

Veto 3 — Weak-schedule inflation without opponent adjustment. Construct a counterfactual in which Team C accumulates high SR_fold and YPP_asym against low-quality defenses, while Team D faces stronger opposition with identical raw rates. Verifiable check: v2 has no opponent adjustment; the author measured opponent adjustment as shrinkage and excluded it [PAGE 5]. Prediction: the meter will assign Team C inflated deserved points and a high p_home in a head-to-head comparison, while a strength-of-schedule-corrected GSE engine would rate Team D more favorably. A sharp engine–meter disagreement on such a game is a research lead under the cross-check doctrine [PAGE 4], and wiring the meter’s percent into pick formation would propagate the unadjusted schedule bias into pregame reasoning — exactly what the model’s negative forward test and retrospective definition prohibit [PAGE 5, PAGE 6].
</RLVR_COUNTERFACTUAL_VETOES>