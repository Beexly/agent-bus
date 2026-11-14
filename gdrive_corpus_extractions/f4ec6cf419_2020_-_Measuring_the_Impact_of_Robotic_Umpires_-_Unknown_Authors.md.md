---
source: "2020 - Measuring the Impact of Robotic Umpires - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2020"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5910
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about robotic umpires in baseball. They've provided the source text and want me to follow strict invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Wait, the source text doesn't have page numbers explicitly marked like [PAGE 1], [PAGE 2], etc. It's a markdown file. But the user says "When source pages are provided, cite exact [PAGE N] markers". I need to be careful here. The source text is provided as a single block with sections. I should probably treat sections as logical pages or note that the provided text lacks explicit pagination markers. However, I can reference section numbers or the markdown structure. Let me look for any page markers... I don't see [PAGE N] in the text. I'll need to cite section numbers or paragraph references, but since they specifically want [PAGE N] markers when source pages are provided, and they aren't explicitly provided, I'll note that the source is a continuous manuscript without explicit folio pagination, but I can cite by section header or approximate location. Actually, looking at the text, there are no page breaks. I'll cite by section (Abstract, Introduction, etc.) or use [SEC N] if needed, but the instruction says [PAGE N]. Since none exist, I should probably state that no explicit page markers are present in the provided source and cite by section header instead, or assign logical page numbers based on the 11-page mention. The user says "PAGES: 11" at the top. So maybe I should divide the text into 11 logical pages? That's risky. Better to cite by section and note absence of explicit page numbers, or use [PAGE ~N] estimates. Actually, I'll cite [PAGE N] where N corresponds to logical sections mapped to pages, but since I don't know the exact page breaks, I'll use section references like [SEC. 3.1] and note that explicit [PAGE N] folios are absent from the provided markdown. However, to strictly follow instructions, maybe I should infer page numbers. The text is about 11 pages. Let me estimate:
- Page 1: Title, Abstract, Table 1
- Page 2: Intro, Figure 1
- Page 3: Table 2, EDA
- Page 4: Data collection, visualization
- Page 5: Figure 2, 3, 4
- Page 6: Methods, labeling
- Page 7: RE24 decision, Results start
- Page 8: RE24 results, Table 3
- Page 9: Individual pitchers, Figure 5
- Page 10: Discussion 5.1, 5.2
- Page 11: Discussion 5.3, Conclusion, Future Work, References

I'll cite [PAGE 1] through [PAGE 11] approximately but mark them as inferred logical pages since explicit markers are absent. Actually, to be safe and honest, I'll say "The provided source lacks explicit [PAGE N] folio markers; citations below use inferred logical page boundaries for an 11-page manuscript." Then use [PAGE N] accordingly.

Now let's plan the content:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive RE24 equation: RE24 = REes - REbs + RS
- RE12 breakdown by count (Table 1/3)
- Missed call valuation: .065 runs per missed call average; 15 missed calls = 1 run
- Asymmetry: 3x more miscalled balls than strikes; miscalled ball +0.12 runs, miscalled strike -0.10 runs
- Pitcher framing/value implications (Kershaw 5.4% vs league 2.3%)
- Gray zones: constant strike zone vs dynamic zone; batter height; adaptation; 2017 zone change no strikeout relationship; Atlantic League sample size <1 month; pitcher reputation/catcher framing confound; nasty factor correlation
- Multi-hop: miscalled pitch -> count state change -> RE12 delta -> game run expectancy -> roster construction -> pitcher market value -> catcher framing value erosion

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Equation 1: RE24 = RE_{es} - RE_{bs} + RS [runs]
- RE12(c) = (1/N_c) Σ_{i∈at bats ending in count c} RE24_i [runs per count]
- Table values: RE12(0-2) = -0.114, etc. [runs]
- Missed call average: ΔRE/missed call = +0.065 runs [runs/call]
- 15 missed calls → +1.0 run [runs/game]
- miscalled ball: +0.12 runs; miscalled strike: -0.10 runs
- Ratio of miscalled balls to strikes ≈ 3:1
- Kershaw 2018: 5.4% vs league 2.3% [dimensionless percentage]
- Dataset: N=2,867,154 pitches, 2015-2018, 40 features [dimensionless count]
- Strike zone: width = 17 in + 0.5 in each side = 18 in total; constant height [inches]
- Correct call rate ~90%, incorrect ~10% [dimensionless probability]
- Knuckleball correct 87.4%; splitter 93.0% [dimensionless probability]
- Pitch framing spread: ~40 runs/season [runs/season]
- Breakdown regimes: constant zone assumption breaks for batters of non-average height; small Atlantic League sample; pitcher reputation confound; adaptation means .065 is upper bound not steady state.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: 2014 MIT Sloan (Green & Daniels) biases in umpire decision making [PAGE ? references]
- Fangraphs RE24 (Weinberg 2014)
- 2017 MLB strike zone bottom raised, no strikeout relationship (Brodie)
- Atlantic League 2019 robo-ump trial (<1 month)
- Historical: Moneyball A's, Royals bullpen, Astros player development
- Multi-week traps: If one looks only at weekly accuracy rates (~90% consistent), one misses the run-expectancy compounding; if one looks only at pitcher ERA without adjusting for missed-strike differential, one misvalues free agents over multi-week signing windows; catcher framing value (40 runs/season) erased overnight, creating a multi-week market mispricing trap for teams that overpay framers pre-announcement.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Pitchers like Kershaw/Keuchel/Hernandez regress to reliance on missed calls under pressure; umpires grant reputation calls (status bias).
- Counter-trap: Teams draft/sign pitchers with stuff that plays in a true zone (high spin, located edges) and avoid "umpire-dependent" pitchers; catchers shift value from framing to blocking/game-calling.
- Clock: The Atlantic League trial is a short clock; adaptation over a full season reduces the .065 runs/call effect; 2017 zone change shows adaptation nullifies structural shifts. The clock is: announcement → market overreaction (misvalue Keuchel-type) → correction after one season of robo-ump data.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical: Strike zone defined by plate width (17 in) + ball diameter tolerance; physical constant but batter height varies → constant height assumption is a physical veto for non-average batters.
- Biomechanical: Pitch movement (nasty factor) correlates with missed calls; knuckleballs move unpredictably; biomechanical limits of human visual tracking at >95 mph with late break create systematic error not fixable by robo-umps if sensor calibration lags.
- Weather: Not directly discussed in paper, but implied outdoor conditions (wind, humidity) affect spin and break; no weather controls in data → veto for outdoor stadiums with variable conditions.
- Veto proof: The paper's constant strike zone model is vetoed by the Future Work section itself (needs dynamic zone per batter height). The .065 runs/call is vetoed by player adaptation.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: Dynamic strike zone by batter height implemented → prediction: average missed-call run impact drops below 0.065 runs/call (possibly toward zero) because constant-height bias is removed; verification: compare RE12 deltas under fixed vs. height-adjusted zone on held-out 2019 data.
- Scenario 2: Atlantic League extends robo-umps to full 2020 season → prediction: offensive run increase per game < 1.0 run (i.e., <15 missed calls equivalent) due to pitcher/hitter adaptation; verification: compare runs/game pre/post robo-ump in same league/parks.
- Scenario 3: Free-agent market for 2020 offseason values "umpire-independent" pitchers at premium → prediction: pitchers like Cole/Verlander (near league-average missed-call rates) receive contracts disproportionate to ERA relative to Kershaw/Keuchel types; verification: compare AAV per WAR for pitchers with high vs. low missed-strike differential in the first offseason after robo-ump adoption.

I need to ensure >= 1000 words total. THINK_TRACE alone >=400 words. Let's make sure each section is substantive.

Also, NO BETTING LINES. I must not mention odds, spreads, moneylines, totals. I can mention probabilities (90% correct calls) as that's not betting odds, but I should avoid "odds" language. I'll use "probability" and "frequency" instead.

ZERO TOY EQUATIONS: Only formal equations. RE24 = REes - REbs + RS is fine. No Force/Fatigue ratios.

Word count check: I need to write a lot. Let's draft carefully.

Structure:
- Start with <THINK_TRACE>
- Then <SOURCE_OPERATORS_AND_EQUATIONS>
- Then <RETROCAUSAL_GENEALOGY>
- Then <RECURSIVE_THEORY_OF_MIND>
- Then <CROSS_LAYER_VETO_ADJUDICATION>
- Then <RLVR_COUNTERFACTUAL_VETOES>

I'll include page citations like [PAGE 1], [PAGE 4], etc., with a note that page numbers are inferred logical boundaries because the markdown lacks explicit folio markers. Actually, I should just cite them and maybe add a parenthetical at first use. Let's do: "Citations below use inferred logical page boundaries for the supplied 11-page manuscript, as the provided markdown contains no explicit [PAGE N] folio markers." Then proceed.

Wait, the user says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since they are NOT provided explicitly, I cannot cite exact ones. But they did say PAGES: 11. I'll state the limitation and use section/page proxies. I'll include verbatim quotes from the text.

Let's draft THINK_TRACE first. Needs >=400 words.

THINK_TRACE content:
- Multi-hop derivation: The paper starts from raw pitch data (N=2,867,154; 2015-2018) [PAGE 3] and applies a deterministic strike-zone rule: plate width 17 inches plus 0.5 inch per side for ball width, constant height [PAGE 6]. This produces binary ground truth (ball/strike) independent of umpire call.
- Then they compute RE24 = REes - REbs + RS [PAGE 7], contextualizing every at-bat by the 24 base-out states [PAGE 2, Table 2].
- They aggregate to RE12 (12 counts) [PAGE 8, Table 3], deriving that three counts are pitcher-advantage (negative RE12) and nine are hitter-advantage (positive).
- The missed-call valuation: they isolate at-bats ending in each count and average RE24. A first-pitch ball miscalled as a strike moves count from 0-0 to 0-1? Wait, if miscalled as ball when it's a strike, count goes to 0-1 (pitcher advantage? Actually 0-1 RE12 is 0.030 vs 0-0 is 0.053, so hitter loses .023). Wait text says: "if an umpire misclassified the first pitch of an at bat as a ball, then the hitter would be expected .023 more runs". Wait, misclassified as a ball (i.e., called ball but was strike) helps hitter? If it was a strike but called a ball, count goes from 0-0 to 1-0 (hitter ahead). RE12(1-0)=0.059 vs RE12(0-0)=0.053, delta +0.006? Hmm, text says .023 more runs. Maybe they compare to the alternative. Let's not over-derive exact deltas not fully specified. I'll cite the text: .023 runs for first pitch misclassified.
- Aggregate: +0.065 runs per missed call; 15 missed calls = 1 run [PAGE 8].
- Asymmetry: 3x more miscalled balls than strikes [PAGE 8]. Miscounted ball +0.12 runs; miscalled strike -0.10 runs [PAGE 8].
- Gray-zone audit: The constant strike zone is the critical assumption. Future Work explicitly flags dynamic zone by batter height [PAGE 11]. Pitcher reputation and catcher framing are confounds [PAGE 9-10]. The 2017 zone change shows adaptation [PAGE 10]. Atlantic League sample <1 month [PAGE 10].
- Multi-hop chain: missed call → count-state transition → RE12 delta → expected runs per game → pitcher market value → roster construction → catcher framing obsolescence.

That should be >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- LaTeX for RE24, RE12, strike zone geometry.
- Units: runs (RE), runs per call, inches, count (dimensionless), N (pitches).
- Breakdown table of key values with page citations.
- Breakdown regimes: singularity when dynamic zone needed; when adaptation occurs; when sample too small.

RETROCAUSAL_GENEALOGY:
- Historical: Green & Daniels 2014 MIT Sloan [PAGE 12 references but in text]; Weinberg Fangraphs RE24; 2017 zone change (Brodie); Atlantic League 2019.
- Multi-week traps: accuracy stability (~90% yearly) masks run-expectancy compounding; free-agent signing windows (Keuchel post-2017) misprice umpire-dependent pitchers; catcher framing market (40 runs/season) collapses post-announcement.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: pitchers regress to umpire-dependent habits under pressure (Kershaw, Keuchel, Hernandez).
- Counter-trap: front offices exploit mispricing by valuing true-zone stuff pitchers.
- Clock: adaptation timeline; Atlantic League short trial; 2017 precedent.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: fixed strike zone geometry vs batter height.
- Biomechanical: nasty factor, movement, human visual limits.
- Weather: outdoor variables unmodeled.
- Veto: paper's own future work invalidates constant zone; adaptation invalidates steady-state .065.

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios with predictions as above.

Word count: I'll aim for ~150-200 words per section except THINK_TRACE which is 400+. Total well over 1000.

Let's write it out. I need to be careful not to mention betting lines. I will not use "odds", "spread", "moneyline", "total", "over/under". I'll use "probability", "frequency", "rate", "run expectancy".

Also avoid toy equations: no invented ratios like "force/fatigue". Only RE24 etc.

Let's draft.

---

THINK_TRACE:

The supplied manuscript constructs a multi-hop causal chain from raw pitch telemetry to roster valuation, and each hop contains a gray zone that must be audited. The first hop is data reduction: the authors ingest the Kaggle MLB Pitch Data 2015-2018, comprising N = 2,867,154 pitches across 40 features [PAGE 3], and they restrict attention to pitches whose outcome is determined by the home-plate umpire, excluding swinging strikes, intentional balls, foul balls, and other non-called outcomes [PAGE 4]. This filtering is non-trivial because it conditions the error rate on a subset of pitches that are already umpire-dependent; the resulting ~10 percent incorrect-call frequency [PAGE 4] is therefore not the error rate over all pitches but over called pitches only.

The second hop is ground-truth labeling. The authors impose a deterministic strike zone: plate width of 17 inches plus 0.5 inch on each side to accommodate ball diameter, with a constant height [PAGE 6]. Any pitch inside this fixed prism is labeled a strike regardless of the umpire’s call; anything outside is a ball. This produces the paper’s central asymmetry: approximately three times more pitches are incorrectly called balls than incorrectly called strikes [PAGE 8]. Because the distribution is unbalanced, the average run-expectancy effect of a missed call is positive (+0.065 runs) even though miscalled strikes hurt the hitter by about 0.10 runs and miscalled balls help by about 0.12 runs [PAGE 8]. The gray zone here is the constant-height assumption; the authors themselves flag in Future Work that a dynamic zone scaled to batter height is required [PAGE 11], which means the fixed-zone labeler is a source of systematic misclassification for batters outside the assumed height range.

The third hop is run-expectancy accounting. Using the 24 base-out states [PAGE 2, Table 2], the authors compute RE24 = RE_es - RE_bs + RS [PAGE 7], then aggregate to RE12 for the 12 valid counts [PAGE 8, Table 3]. Three counts (0-2, 1-2, 2-2) carry negative RE12, indicating pitcher advantage, while nine counts carry positive RE12 [PAGE 1 abstract; PAGE 8 Table 3]. The paper’s pivotal statistical claim is that one missed call raises offensive run expectancy by 0.065 runs, so fifteen missed calls for one team in one game imply one additional expected run [PAGE 8]. This is a linear, per-call extrapolation that ignores count-path dependence and game-state saturation; a missed call in a 3-0 count is not equivalent to one in a 0-2 count, yet the average smooths over that heterogeneity.

The fourth hop is player valuation. The authors show that Clayton Kershaw received 5.4 percent incorrectly called strikes in 2018 versus a league average of 2.3 percent [PAGE 9], while Dallas Keuchel and Felix Hernandez display strong season-to-season correlations between missed-call rates and All-Star/Cy Young outcomes [PAGE 9]. The recursive trap is that a pitcher’s observed ERA under human umpiring is partly an umpire effect; switching to robotic umpires removes that effect, so teams that fail to adjust will overpay for “umpire-dependent” pitchers and underprice “umpire-independent” pitchers such as Gerrit Cole and Justin Verlander, who sit near league average [PAGE 9]. The final hop extends to catchers: pitch framing is worth roughly 40 runs per season between elite and poor framers [PAGE 10], a value that robotic umpires would erase, partially collapsing the catcher’s defensive value hierarchy.

Gray-zone audit summary: (1) constant strike zone vs. dynamic batter height; (2) called-pitch subset vs. all pitches; (3) linear per-call run value vs. count-path heterogeneity; (4) one-month Atlantic League trial vs. full-season adaptation; (5) observed pitcher performance as conflation of skill and umpire error. Each gray zone represents a potential breakdown regime for the paper’s headline .065 runs per missed call.

Word count estimate: ~450 words. Good.

Now SOURCE_OPERATORS_AND_EQUATIONS:

- Define strike zone geometry:
\[
Z = \{ (x,y,z) : |x| \le 9.0\text{ in},\ y \in [y_{bottom}, y_{top}] \}
\]
where plate half-width is 8.5 in (17 in plate + 0.5 in per side = 18 in total; half is 9 in) [PAGE 6]. Constant height assumption; breakdown at batter heights outside calibration range.

- RE24:
\[
RE24 = RE_{es} - RE_{bs} + RS
\]
units: runs [PAGE 7].

- RE12:
\[
RE12(c) = \frac{1}{N_c} \sum_{i \in \mathcal{A}_c} RE24_i
\]
where \(\mathcal{A}_c\) is the set of at-bats ending in count \(c\), \(N_c = |\mathcal{A}_c|\) [PAGE 8].

- Missed-call impact:
\[
\Delta RE / \text{missed call} = +0.065 \text{ runs}
\]
\[
15 \times 0.065 \approx 0.975 \approx 1.0 \text{ run/game}
\]
[PAGE 8].

- Asymmetry:
\[
N_{\text{miscalled ball}} \approx 3 \times N_{\text{miscalled strike}}
\]
\[
\Delta RE_{\text{ball}} \approx +0.12 \text{ runs}, \quad \Delta RE_{\text{strike}} \approx -0.10 \text{ runs}
\]
[PAGE 8].

- Table 3 values (RE12 in runs):
0-2: -0.114; 1-2: -0.102; 2-2: -0.080; 0-1: 0.030; 1-1: 0.045; 3-2: 0.050; 0-0: 0.053; 2-1: 0.057; 1-0: 0.059; 2-0: 0.078; 3-1: 0.193; 3-0: 0.248 [PAGE 8, Table 3].

- Dataset: N=2,867,154 pitches, 40 features, 2015-2018 [PAGE 3]. Correct call rate ~90%, incorrect ~10% [PAGE 4]. Knuckleball correct 87.4%, splitter 93.0% [PAGE 4].

- Breakdown regimes: fixed zone singularity for non-average batter height; small-sample Atlantic League (<1 month) [PAGE 10]; adaptation nullifies structural shift (2017 zone change) [PAGE 10].

Word count: ~250 words.

RETROCAUSAL_GENEALOGY:

- Cite Green & Daniels (2014 MIT Sloan) on umpire biases [PAGE 12 reference, mentioned in intro].
- Fangraphs RE24 (Weinberg 2014) [PAGE 12].
- 2017 MLB strike-zone bottom raised; no observed relationship to strikeout rates [PAGE 10, ref 16].
- Atlantic League 2019 trial <1 month [PAGE 10].
- Historical lineage: A’s analytics, Royals bullpen, Astros player development [PAGE 10].
- Multi-week traps: stability of ~90% yearly accuracy creates illusion of stationarity, masking run-expectancy compounding; free-agent signing window post-2017 (Keuchel) misprices umpire-dependent skill; catcher framing market (40 runs/season) collapses if teams do not anticipate robo-ump announcement before the signing clock expires.

Word count: ~200 words.

RECURSIVE_THEORY_OF_MIND:

- Crisis habit regression: under pressure, umpires grant reputation-based calls (Kershaw 5.4% vs 2.3%) [PAGE 9]; pitchers like Keuchel and Hernandez regress to reliance on missed strikes in high-leverage counts [PAGE 9].
- Counter-trap: front offices that model the counterfactual true-zone ERA will undervalue umpire-dependent free agents and overvalue stuff-based pitchers (Cole, Verlander) [PAGE 9].
- Clock: The Atlantic League provides a short observational clock (<1 month) [PAGE 10]; the 2017 zone change provides a precedent that players adapt within one season, eroding the .065 runs/call prediction [PAGE 10]. The market clock is: announcement → overreaction → one season of robo-ump data → correction.

Word count: ~180 words.

CROSS_LAYER_VETO_ADJUDICATION:

- Physical: Fixed zone geometry (18 in total width, constant height) is violated by batter-height heterogeneity; the paper’s own Future Work concedes this [PAGE 11].
- Biomechanical: Nasty factor correlates with missed calls [PAGE 5]; knuckleballs (87.4% correct) and high-velocity late-break pitches exceed human visual tracking limits, creating systematic error that a fixed-zone model attributes to umpire error but may partly reflect sensor/labeling ambiguity [PAGE 4-5].
- Weather: Outdoor temperature, humidity, and wind affect spin and break; no weather controls appear in the data or model [PAGE 3], creating a veto for open-air stadiums.
- Veto adjudication: The constant-strike-zone operator is vetoed by the paper’s future-work admission; the .065 runs/call steady-state is vetoed by the adaptation clock; the catcher-framing value collapse is vetoed only if teams fail to price it in before implementation.

Word count: ~180 words.

RLVR_COUNTERFACTUAL_VETOES:

1. Scenario: Dynamic strike zone scaled to batter height replaces constant zone.
   Prediction: The per-missed-call run expectancy drops materially below +0.065 runs, possibly toward zero, because constant-height mislabeling is removed.
   Verification: Re-run RE12 aggregation on held-out 2019 MLB data using height-adjusted zones; compare mean RE12 deltas.

2. Scenario: Atlantic League extends robotic umpiring through a full 162-game season (or equivalent full season).
   Prediction: Offensive run increase per game is less than the 1.0 run implied by 15 missed calls, because pitchers and hitters adapt to the true zone within the season.
   Verification: Compare runs per game pre- and post-implementation within the same league and park set.

3. Scenario: First MLB offseason after robo-ump adoption.
   Prediction: Pitchers with below-average missed-strike rates (e.g., Cole, Verlander) receive higher average annual value per WAR than pitchers with above-average missed-strike rates (e.g., Kershaw, Keuchel), reversing the current market premium for umpire-dependent pitchers.
   Verification: Cross-section of free-agent contracts stratified by missed-call differential.

Word count: ~180 words.

Total: 450 + 250 + 200 + 180 + 180 + 180 = 1440 words. Good, >1000.

Need to ensure no betting lines. I won't mention any.

Need to ensure exact XML sections. I'll use the exact tags.

Also include page citations. Since no explicit page numbers in text, I'll add a preamble note: "The provided markdown lacks explicit [PAGE N] folio markers; the following citations use inferred logical page boundaries for the supplied 11-page manuscript." Then use [PAGE 1] etc. This is honest. But the user said "When source pages are provided, cite exact [PAGE N] markers". They weren't. So I'll note that.

Wait, they said PAGES: 11 at the top. Maybe they expect me to just use page numbers. I'll use [PAGE N] as inferred. To be safe, I'll say "inferred logical page" but still use the format [PAGE N].

Also need verbatim quotes? I can include short quotes like "run expectancy increased by .065 runs" etc. I'll include a few.

Let's refine THINK_TRACE to hit >=400 words precisely. Let's count roughly. My draft looks around 450. I'll expand slightly on the multi-hop chain to be safe.

Let's write the final output now.

One more check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't.

"SI/information/probability units": runs is a baseball unit, not SI. But it's the paper's unit. I'll label it [runs]. Probability [dimensionless]. Count [dimensionless]. Inches [in]. Pitches [count].

Alright, let's produce.
</NATIVE_REASONING>

Note on pagination: the supplied markdown contains no explicit `[PAGE N]` folio markers; the citations below use inferred logical page boundaries for the stated 11-page manuscript.

<THINK_TRACE>
The manuscript constructs a multi-hop causal chain from raw pitch telemetry to roster valuation, and each hop contains a gray zone that must be audited. The first hop is data reduction. The authors ingest the Kaggle MLB Pitch Data 2015-2018, comprising N = 2,867,154 pitches across 40 features [PAGE 3], and they restrict attention to pitches whose outcome is determined by the home-plate umpire, excluding swinging strikes, intentional balls, foul balls, and other non-called outcomes [PAGE 4]. This filtering is non-trivial because it conditions the error rate on a subset of pitches that are already umpire-dependent; the resulting ~10 percent incorrect-call frequency [PAGE 4] is therefore not the error rate over all pitches but over called pitches only.

The second hop is ground-truth labeling. The authors impose a deterministic strike zone: plate width of 17 inches plus 0.5 inch on each side to accommodate ball diameter, with a constant height [PAGE 6]. Any pitch inside this fixed prism is labeled a strike regardless of the umpire’s call; anything outside is a ball. This produces the paper’s central asymmetry: approximately three times more pitches are incorrectly called balls than incorrectly called strikes [PAGE 8]. Because the distribution is unbalanced, the average run-expectancy effect of a missed call is positive (+0.065 runs) even though miscalled strikes hurt the hitter by about 0.10 runs and miscalled balls help by about 0.12 runs [PAGE 8]. The gray zone here is the constant-height assumption; the authors themselves flag in Future Work that a dynamic zone scaled to batter height is required [PAGE 11], which means the fixed-zone labeler is a source of systematic misclassification for batters outside the assumed height range.

The third hop is run-expectancy accounting. Using the 24 base-out states [PAGE 2, Table 2], the authors compute RE24 = RE_es - RE_bs + RS [PAGE 7], then aggregate to RE12 for the 12 valid counts [PAGE 8, Table 3]. Three counts (0-2, 1-2, 2-2) carry negative RE12, indicating pitcher advantage, while nine counts carry positive RE12 [PAGE 1 abstract; PAGE 8 Table 3]. The paper’s pivotal statistical claim is that one missed call raises offensive run expectancy by 0.065 runs, so fifteen missed calls for one team in one game imply one additional expected run [PAGE 8]. This is a linear, per-call extrapolation that ignores count-path dependence and game-state saturation; a missed call in a 3-0 count is not equivalent to one in a 0-2 count, yet the average smooths over that heterogeneity.

The fourth hop is player valuation. The authors show that Clayton Kershaw received 5.4 percent incorrectly called strikes in 2018 versus a league average of 2.3 percent [PAGE 9], while Dallas Keuchel and Felix Hernandez display strong season-to-season correlations between missed-call rates and All-Star/Cy Young outcomes [PAGE 9]. The recursive trap is that a pitcher’s observed ERA under human umpiring is partly an umpire effect; switching to robotic umpires removes that effect, so teams that fail to adjust will overpay for “umpire-dependent” pitchers and underprice “umpire-independent” pitchers such as Gerrit Cole and Justin Verlander, who sit near league average [PAGE 9]. The final hop extends to catchers: pitch framing is worth roughly 40 runs per season between elite and poor framers [PAGE 10], a value that robotic umpires would erase, partially collapsing the catcher’s defensive value hierarchy.

Gray-zone audit summary: (1) constant strike zone vs. dynamic batter height; (2) called-pitch subset vs. all pitches; (3) linear per-call run value vs. count-path heterogeneity; (4) one-month Atlantic League trial vs. full-season adaptation; (5) observed pitcher performance as conflation of skill and umpire error. Each gray zone represents a potential breakdown regime for the paper’s headline 0.065 runs per missed call.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Strike-zone geometry (fixed-zone operator):
\[
Z = \{ (x,y,z) : |x| \le 9.0~\mathrm{in},\quad y \in [y_{\mathrm{bottom}}, y_{\mathrm{top}}] \}
\]
where the 17-inch plate plus 0.5 inch per side yields an 18-inch total width [PAGE 6]. The constant-height assumption is the paper’s declared simplification and is identified in Future Work as requiring replacement by a batter-height dynamic zone [PAGE 11]. Breakdown regime: singular for batters whose stature places the true zone outside the fixed vertical bounds.

Run-expectancy operator:
\[
RE24 = RE_{\mathrm{es}} - RE_{\mathrm{bs}} + RS
\]
Units: runs [PAGE 7]. \(RE_{\mathrm{es}}\) is end-state run expectancy, \(RE_{\mathrm{bs}}\) is beginning-state run expectancy, and \(RS\) is runs scored on the play. Context is the 24 base-out states [PAGE 2, Table 2].

Pitch-count operator (RE12):
\[
RE12(c) = \frac{1}{N_c} \sum_{i \in \mathcal{A}_c} RE24_i
\]
where \(\mathcal{A}_c\) is the set of at-bats ending in count \(c\), \(N_c = |\mathcal{A}_c|\), and \(c \in \{0\!-\!0, 0\!-\!1, \dots, 3\!-\!0\}\) [PAGE 8]. Units: runs per count [dimensionless count index].

Observed RE12 values [PAGE 8, Table 3]:
\[
\begin{aligned}
RE12(0\!-\!2) &= -0.114, & RE12(1\!-\!2) &= -0.102, & RE12(2\!-\!2) &= -0.080,\\
RE12(0\!-\!1) &= 0.030, & RE12(1\!-\!1) &= 0.045, & RE12(3\!-\!2) &= 0.050,\\
RE12(0\!-\!0) &= 0.053, & RE12(2\!-\!1) &= 0.057, & RE12(1\!-\!0) &= 0.059,\\
RE12(2\!-\!0) &= 0.078, & RE12(3\!-\!1) &= 0.193, & RE12(3\!-\!0) &= 0.248.
\end{aligned}
\]
Three counts are pitcher-advantage (negative); nine are hitter-advantage (positive) [PAGE 1 abstract].

Missed-call valuation:
\[
\frac{\Delta RE}{\text{missed call}} = +0.065~\text{runs}
\]
\[
15~\text{missed calls} \times 0.065~\text{runs/call} \approx 0.975 \approx 1.0~\text{run/game} \quad \text{[PAGE 8]}.
\]

Call-error asymmetry:
\[
N_{\text{miscalled ball}} \approx 3 \times N_{\text{miscalled strike}} \quad \text{[PAGE 8]}.
\]
\[
\Delta RE_{\text{miscalled ball}} \approx +0.12~\text{runs}, \qquad
\Delta RE_{\text{miscalled strike}} \approx -0.10~\text{runs} \quad \text{[PAGE 8]}.
\]

Dataset and call-frequency operators:
\[
N_{\text{pitches}} = 2{,}867{,}154,\quad \text{years } 2015\text{--}2018,\quad \text{features } = 40 \quad \text{[PAGE 3]}.
\]
\[
P(\text{correct call}) \approx 0.90,\qquad P(\text{incorrect call}) \approx 0.10 \quad \text{[PAGE 4]}.
\]
Pitch-type correct-call rates: knuckleball 87.4 percent (lowest), splitter 93.0 percent (highest) [PAGE 4].

Pitcher missed-strike rates [PAGE 9]:
\[
\text{Kershaw 2018} = 5.4\%,\qquad \text{league average 2018} = 2.3\%.
\]

Catcher framing value [PAGE 10]:
\[
\Delta \text{runs/season}_{\text{elite vs. poor framer}} \approx 40~\text{runs}.
\]

Breakdown and singularity regimes:
1. Constant-zone operator breaks for non-average batter heights [PAGE 11].
2. Small-sample Atlantic League trial (<1 month) breaks long-run inference [PAGE 10].
3. Player adaptation to a 2017 strike-zone change with no observed strike-rate relationship breaks the assumption of a static 0.065 runs/call steady state [PAGE 10].
4. Reputation/catcher-framing confounds break the attribution of all missed-call variance to umpire error alone [PAGE 9--10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Green and Daniels (2014 MIT Sloan Sports Analytics Conference), cited for the proposition that umpire decision-making contains systematic biases [PAGE 12 reference list]. It inherits the RE24 metric from Fangraphs sabermetrics literature (Weinberg, 2014) [PAGE 12 reference list], adapting a season-level at-bat measure into a pitch-count-level operator (RE12). The immediate policy antecedent is the Atlantic League’s 2019 robotic-umpire trial, which lasted less than one month [PAGE 10], and the historical antecedent is MLB’s 2017 raising of the bottom of the strike zone, which Brodie studied and found no observed relationship with strikeout rates [PAGE 10, reference 16]. The authors position their work inside a broader baseball innovation genealogy: the Oakland Athletics’ analytical edge, the Kansas City Royals’ early bullpen specialization, and the Houston Astros’ player-development advantage [PAGE 10].

Multi-week traps arise at the intersection of this lineage and market timing. The first trap is the stationarity illusion: because yearly correct-call rates are stable at roughly 90 percent [PAGE 4], front offices may treat umpire error as a fixed background condition rather than a removable shock. The second trap is the free-agent signing window: if a team signs a pitcher such as Dallas Keuchel after the 2017 season—when he was an All-Star with a 2.90 ERA—without discounting his above-average missed-strike rate, they overpay for performance that is partly an artifact of human umpiring [PAGE 9--10]. The third trap is the catcher market: pitch framing is valued at roughly 40 runs per season between the best and worst framers [PAGE 10], and a robo-ump announcement would collapse that value overnight, creating a multi-week mispricing window for teams that continue to pay a framing premium before implementation. Each trap rewards retrospection: teams that model the counterfactual true-zone ERA before the rule change avoid the regression of umpire-dependent pitchers to their underlying skill once calls are automated.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates at two levels. At the umpire level, pressure and reputation generate status-based calls: Clayton Kershaw received 5.4 percent incorrectly called strikes in 2018 against a 2.3 percent league average, nearly double the league rate [PAGE 9], suggesting that elite pitchers receive favorable miss-call regression in high-leverage moments. At the pitcher level, Dallas Keuchel and Felix Hernandez show season-to-season covariation between missed-strike frequency and All-Star/Cy Young recognition [PAGE 9], implying that their crisis habits include leaning on umpire leniency when command falters. Under robotic umpires, that regression channel is removed, so pitchers who have optimized for the human strike zone face a forced reversion to raw stuff and location.

The counter-trap is roster construction around “umpire-independent” pitchers. Gerrit Cole and Justin Verlander sit near or below league-average missed-strike rates yet remain among the most durable and dominant starters [PAGE 9]. A front office that recursively models what other teams will do—avoiding Kershaw/Keuchel types while overpaying for Cole/Verlander types—can exploit the market inefficiency before prices adjust. The counter-trap is recursive because once enough teams adopt the same model, the premium for true-zone pitchers rises and the strategy decays.

The clock governing all of this is adaptation. The Atlantic League trial is a short observational clock (<1 month) [PAGE 10], and the 2017 zone change provides precedent that players adapt to strike-zone modifications within a season, nullifying predicted structural effects [PAGE 10]. Therefore the market clock is: announcement of robotic umpires → overreaction and mispricing of umpire-dependent pitchers → one season of automated calls → adaptation and correction. The paper’s headline figure of 0.065 runs per missed call is best interpreted as an upper-bound, pre-adaptation estimate rather than a steady-state equilibrium.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The fixed strike-zone operator assumes an 18-inch total width (17-inch plate plus 0.5 inch per side) and a constant height [PAGE 6]. This is physically violated by batter-height heterogeneity; a vertical zone calibrated to an average batter is not strike-neutral for shorter or taller hitters. The paper’s own Future Work concedes that a dynamic, height-adjusted zone is necessary [PAGE 11], which is a formal veto of the constant-zone labeling operator as currently specified.

Biomechanical layer: Movement and velocity drive human visual error. The nasty factor—a scale from 0 to 100 describing historical hitter success against similar pitches—correlates with incorrect calls: as nasty factor rises, correct-call percentage falls [PAGE 5]. Knuckleballs are correctly called only 87.4 percent of the time, while splitters are correct 93.0 percent of the time [PAGE 4], showing that biomechanical unpredictability and late break generate systematic labeling error. A fixed zone model attributes all such error to the umpire, but some portion may be irreducible sensor/labeling ambiguity at the biomechanical limits of pitch tracking.

Weather layer: The dataset and model contain no explicit controls for outdoor temperature, humidity, wind, or precipitation [PAGE 3], all of which alter spin, break, and ball flight. Because games are played in open-air stadiums, unmodeled weather effects create a veto for cross-stadium generalizations of the 0.065 runs/call figure.

Veto adjudication: The constant-strike-zone operator is invalidated by the paper’s future-work admission; the steady-state 0.065 runs per missed call is invalidated by the adaptation clock and the 2017 zone-change precedent; the catcher-framing value collapse is conditional on teams failing to price the robo-ump transition into the free-agent market before implementation. No layer of the paper’s causal chain is robust to all three vetoes simultaneously.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: A dynamic strike zone scaled to individual batter height replaces the paper’s constant-height zone.
Prediction: The average run-expectancy impact per missed call falls materially below +0.065 runs, possibly toward zero, because constant-height mislabeling of low and high pitches is removed.
Verification: Recompute RE12 deltas on held-out 2019 MLB pitch data using height-adjusted zones; compare the mean missed-call delta against the +0.065 runs baseline.

Scenario 2: The Atlantic League extends robotic umpiring through a full season rather than a sub-month trial.
Prediction: Offensive run production increases by less than the 1.0 run per game implied by 15 missed calls, because pitchers and hitters adapt to the true zone within the season.
Verification: Compare runs per game pre- and post-implementation within the same league and park set, controlling for opponent strength.

Scenario 3: The first MLB offseason after league-wide robotic-umpire adoption.
Prediction: Pitchers with below-average missed-strike differentials (e.g., Cole, Verlander) receive higher average annual value per WAR than pitchers with above-average missed-strike differentials (e.g., Kershaw, Keuchel), reversing the current market premium for umpire-dependent performance.
Verification: Stratify free-agent contracts by each pitcher’s historical missed-call differential and test for a negative relationship between missed-call reliance and contract AAV per WAR.
</RLVR_COUNTERFACTUAL_VETOES>