---
source: "2017 - Bullpen Strategies for Major League Baseball - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2017"
pages: 19
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5467
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper "Bullpen Strategies for Major League Baseball" from the 2017 MIT Sloan Sports Analytics Conference. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully extract equations from the text. Let me look at what equations are explicitly shown:

Page 2-3:
- $s_{hi}$ = average number of runs scored by home team in inning $i$
- $s_{vi}$ = average number of runs scored by visiting team in inning $i$
- $d_i = s_{hi} - s_{vi}$ (inning-wise scoring differentials)
- First inning differential $d_1 = 0.09$ runs
- Overall scoring differential $0.133$ runs per game
- Home teams won 53.93% of 80,554 games
- Home runs: 370,331 (4.597 runs/game), Visitor runs: 359,589 (4.464 runs/game)
- $d_{ave} = 0.0419$ (average scoring differential using innings 3-8)
- Probability 9th inning played = 1
- Probability 10th inning played = 0.1973
- Plate appearances per inning: $\overline{PA}_h = 4.30$, $\overline{PA}_v = 4.21$
- Equation for PA: fraction of all plate appearances over three outs. The text shows: where AB, BB, IBB, HBP, SF, SH, CI, PO... but the actual formula is missing in the source text (shows blank math). I should note the missing formula as a breakdown regime / missing operator.
- $\hat{d}^{}_1 = 0.053$ runs/game (new value with first-batter starter)
- Removal of approximately 0.037 runs/game (about 8.6% of total HFA)
- Table 1: inning differentials: 1: 0.09 (21.0%), 2: 0.04 (8.6%), 3: 0.05 (12.2%), 4: 0.03 (7.8%), 5: 0.05 (11.7%), 6: 0.04 (9.1%), 7: 0.04 (8.9%), 8: 0.04 (9.0%), 9: 0.04 (9.8%), 10: 0.01 (1.9%), Total: 0.43 (100%)

Wait, the total differential in Table 1 is 0.43 runs/game, which matches the conclusion saying true home-field advantage is roughly 0.429 runs/game rather than 0.133.

Page 6-7:
- Figure 3: Jake Arrieta: $Y = 3.20 + 1.607*Balls$ (strikes vs balls linear regression)
- Figure 4: Arrieta $Y = 3.201 + 1.607*Balls$, Chen $Y = 4.689 + 1.843*Balls$
- Arrieta averaged 106 pitches/game, Chen averaged 97
- Chen's ERA 3.34, Arrieta's ERA 1.77 (for 2015)
- Figure 7: Non-starters (NS): $Y = 1.416 + 1.245*Balls$, Starters (S): $Y = 3.824 + 1.534*Balls$ (from picture text)
- Figure 6 Left: $Y = 1.687 + 1.603*Balls$ (all pitchers)
- Figure 6 Right: average STB = 1.32 across all 712 pitchers
- Figure 8: STB coefficients vs number of pitches

Page 9:
- Figure 5: Cubs pitchers equations:
  - Arrieta: $Y = 3.201 + 1.607*Balls$
  - Beeler: $Y = -1.967 + 1.511*Balls$
  - Coke: $Y = 0.9386 + 1.359*Balls$
  - Edwards: $Y = 2.169 + 0.9557*Balls$
  - Germen: $Y = 1.813 + 1.106*Balls$
  - Grimm: $Y = 0.7778 + 1.006*Balls$
  - Hammel: $Y = 0.5832 + 1.791*Balls$
  - Haren: $Y = 1.677 + 1.621*Balls$
  - Hendricks: $Y = 2.576 + 1.586*Balls$
  - Lester: $Y = 4.23 + 1.523*Balls$
  - Medina: $Y = 0.2807 + 1.293*Balls$
  - Motte: $Y = 1.859 + 1.129*Balls$
  - Ramirez: $Y = 2.105 + 0.771*Balls$
  - Richard: $Y = 1.518 + 1.874*Balls$
  - Roach: $Y = -2.605 + 1.48*Balls$
  - Rodney: $Y = 1.297 + 1.009*Balls$
  - Rondon: $Y = 1.622 + 1.245*Balls$
  - Rosscup: $Y = 1.61 + 1.031*Balls$
  - Russell: $Y = 0.6618 + 1.364*Balls$
  - Schlitter: $Y = 1.019 + 0.7777*Balls$
  - Soriano: $Y = 3.018 + 0.6845*Balls$
  - Strop: $Y = 2.039 + 0.8066*Balls$
  - Wada: $Y = 0.7513 + 1.81*Balls$
  - Wood: $Y = 1.576 + 1.642*Balls$

I need to cite page numbers. The text has page markers like "2017 Research Papers Competition Presented by: 1", "2", etc. Let me map content to pages:

Page 1: Introduction, Section 2 intro, Figure 1
Page 2: Section 2.1 Background, n=80,554, d1=0.09, 67.5%
Page 3: Section 2.2.1 Estimating 9th/10th, p(9th)=1, p(10th)=0.1973, d_ave=0.0419
Page 4: Section 2.2.2 First-Batter Starter Strategy, PA_h=4.30, PA_v=4.21, footnote 1
Page 5: Section 2.3 Results, d^_1 = 0.053, removal 0.037 runs (8.6%), Table 1, Section 3 intro, Figure 2
Page 6: Section 3.1 Methodology, 712 pitchers, 325 starters, 461,317 starter pitches, Figure 3 ($Y=3.20+1.607*Balls$)
Page 7: Section 3.2 Results, Figure 4 (Arrieta $Y=3.201+1.607*Balls$, Chen $Y=4.689+1.843*Balls$), ERA comparison
Page 8: Figure 5 (Cubs), Figure 6 left ($Y=1.687+1.603*Balls$), Figure 6 right (avg STB 1.32), Figure 7/8 discussion
Page 9: Figure 5 continued (all Cubs equations), Figure 9 discussion
Page 10: Figure 7 ($Y=1.416+1.245*Balls$ NS, $Y=3.824+1.534*Balls$ S)
Page 11: Figure 9, fatigue drops
Page 12: Rondon, Rosscup, Strop discussion
Page 13: Section 4 Conclusion, Summary of Strategies
Page 14: Section 4.2 Future Work (Closers as Starters, Three-Inning Pitchers, Pitch Once Through Lineup)
Page 15: References continued
Page 16: References end

Wait, looking at the source text page markers more carefully:
- After Figure 1 description: "2017 Research Papers Competition Presented by: 1" -> page 1
- Then "2017 Research Papers Competition Presented by: 2" -> page 2
- Then "2017 Research Papers Competition Presented by: 3" -> page 3
- Then "2017 Research Papers Competition Presented by: 4" -> page 4
- Then "2017 Research Papers Competition Presented by: 5" -> page 5
- Then "2017 Research Papers Competition Presented by: 6" -> page 6
- Then "2017 Research Papers Competition Presented by: 7" -> page 7
- Then "2017 Research Papers Competition Presented by: 8" -> page 8
- Then "2017 Research Papers Competition Presented by: 9" -> page 9
- Then "2017 Research Papers Competition Presented by: 10" -> page 10
- Then "2017 Research Papers Competition Presented by: 11" -> page 11
- Then "2017 Research Papers Competition Presented by: 12" -> page 12
- Then "2017 Research Papers Competition Presented by: 13" -> page 13
- Then "2017 Research Papers Competition Presented by: 14" -> page 14
- Then "2017 Research Papers Competition Presented by: 15" -> page 15
- Then "2017 Research Papers Competition Presented by: 16" -> page 16

Okay, I'll cite accordingly.

Now let's plan each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the home-field advantage correction, the first-batter starter math, the STB regression interpretation, and audit gray zones (missing PA formula in source text, the "toy" nature of STB vs actual run prevention, survivorship bias in extra-inning estimation, the assumption that cooling down causes first-inning bias vs velocity data, etc.). Must be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I'll list:
- $n = 80{,}554$ games [PAGE 2]
- $d_i = s_{hi} - s_{vi}$ [PAGE 2]
- $d_1 = 0.09$ runs [PAGE 2]
- Raw HFA = $4.597 - 4.464 = 0.133$ runs/game [PAGE 2]
- Corrected HFA $\approx 0.429$ runs/game [PAGE 13/Table 1]
- $p(\text{9th}) = 1$, $p(\text{10th}) = 0.1973$ [PAGE 3]
- $d_{\text{ave}} = 0.0419$ runs [PAGE 3]
- $\overline{PA}_h = 4.30$, $\overline{PA}_v = 4.21$ plate appearances/inning [PAGE 4]
- Missing PA formula operator (gray zone: formula omitted in source text) [PAGE 4]
- $\hat{d}^{}_1 = 0.053$ runs/game [PAGE 5]
- $\Delta = 0.037$ runs/game removed [PAGE 5]
- Table 1 values [PAGE 5]
- Arrieta regression: $\text{Strikes} = 3.20 + 1.607 \times \text{Balls}$ [PAGE 6]
- Chen regression: $\text{Strikes} = 4.689 + 1.843 \times \text{Balls}$ [PAGE 7]
- League aggregate: $\text{Strikes} = 1.687 + 1.603 \times \text{Balls}$ [PAGE 8]
- STB distribution mean $= 1.32$ [PAGE 8]
- NS vs S: $\text{Strikes} = 1.416 + 1.245 \times \text{Balls}$ (NS), $\text{Strikes} = 3.824 + 1.534 \times \text{Balls}$ (S) [PAGE 10]
- Cubs pitcher equations [PAGE 9]
- Units: runs/game, pitches, plate appearances/inning, dimensionless ratios (STB), probabilities (unitless)

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace from Birnbaum, Smith (Retrosheet), Moskowitz & Wertheim (Scorecasting), Lichtman (TTO penalty), Grosnick (openers), Keri & Paine (bullpen takeover), FiveThirtyEight 2016 postseason. Multi-week traps: over a 7-game playoff series, small run differentials compound; over a 162-game season, 3 runs ~ 1 win; the "three-inning pitcher" hybrid role as untapped niche; times-through-the-order penalty as a multi-batter exposure trap.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Manager's "gut instinct" vs data. Crisis habit: managers pull pitchers based on pitch count round numbers (100 pitches) rather than STB triggers. Counter-trap: relief pitchers allowed to exceed average if performing above line (Figure 7 logic). Clock: pitch count as time-like variable; STB ratio peak early then settles (Arrieta ~1.8); fatigue triggers at specific pitch counts (Lester ~100, Hendricks ~80, Hammel ~65/90).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: first-inning cooling effect (Smith [17]: extra run per 90 seconds beyond 6 minutes top of first; velocity higher at home vs road [19]); biomechanical: velocity decay, K/BB affected; weather: not explicitly discussed but can infer temperature/humidity effects on ball flight and grip (veto if not in data). Need to be careful not to invent. I can note that the paper does not model weather, temperature, or humidity, creating a veto layer for cross-layer application. The umpire bias [13] and travel schedules are acknowledged but not quantified in this paper.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll create 3 counterfactual veto scenarios:
1. Veto: First-batter starter strategy fails if the relief pitcher faces the leadoff hitter and allows a walk/hit, then the "effective starter" enters with runners on base, negating the warmup benefit. Prediction: net HFA reduction approaches 0 or becomes negative in high-leverage first-batter scenarios.
2. Veto: STB trigger-based removal fails during extra innings because position players may pitch or pitch counts reset in runner-on-second rule (though 2015 didn't have that rule, but extra innings exist). Prediction: STB-based pull decisions in innings 9+ have higher variance due to small sample and strategic bunting/intentionally walking.
3. Veto: Three-inning pitcher hybrid role fails due to roster construction constraints (13-man pitcher max, active roster rules) and injury risk from altered training. Prediction: without changes to IL rules and training load, hybrid pitchers accumulate arm injuries at 1.3x rate of traditional relievers over a multi-week sample.

Wait, I must avoid betting lines. None of these mention odds/spreads/moneylines/totals. Good.

Need to ensure >=1000 words total across sections. Each section should be substantial. THINK_TRACE >=400 words. Others should add up to >600 more words.

Let's write carefully.

THINK_TRACE content (planned ~500 words):
- Derive raw HFA: home 4.597 vs visitor 4.464 = 0.133 runs/game [PAGE 2].
- Note 53.93% win rate over 80,554 games [PAGE 2].
- First inning raw differential d1=0.09, claimed 67.5% of 0.133 [PAGE 2].
- Identify the sampling bias: home team doesn't bat bottom of last when leading, so sv9/sv10 are devalued [PAGE 3].
- Correction: use d_ave from innings 3-8 = 0.0419; apply to innings 9 and 10 weighted by p(9th)=1, p(10th)=0.1973 [PAGE 3].
- Result: total HFA = sum of corrected d_i = 0.43 runs/game (Table 1, [PAGE 5]); first inning becomes 0.09/0.43 = 21.0% not 67.5%.
- First-batter starter math: relief pitcher faces one batter at d1 disadvantage, then starter enters fresh at d_ave. PA per inning ~4.30 home / 4.21 visitor [PAGE 4]. New d^_1 = 0.053; removal 0.037 runs/game = 8.6% [PAGE 5]. Over 81 road games: ~3 runs, ~1 win given 17.8% of visiting team losses are by exactly one run [PAGE 5].
- Gray-zone audit: PA formula missing in source text (blank math on page 4); assumption that one batter exposure equals full d1 penalty is an upper bound; STB slope conflates called strikes with batted-ball strikes (hits counted as strikes per paper); extra-inning estimation assumes home-team advantage persists even when unobserved; no weather/temperature covariates; small-sample bias in per-pitcher STB tails (Figure 8 1,200-2,000 pitch gap). This is a deep multi-hop derivation.

SOURCE_OPERATORS_AND_EQUATIONS: List formal equations with pages.

RETROCAUSAL_GENEALOGY: Trace from Smith [16,17], Birnbaum [4], Moskowitz & Wertheim [13] (umpire bias), Lichtman [9,10] (TTO penalty), Grosnick [5] (opener), Keri & Paine [7] (bullpen takeover), FiveThirtyEight 2016 postseason [2,11]. Multi-week traps: over a playoff series, 0.037 runs/game compounds; over a month, relief workload clustering; the "third time through the order" penalty as a multi-exposure trap that the first-batter starter partially mitigates for visitors but not home starters.

RECURSIVE_THEORY_OF_MIND: Manager crisis habit regression = pulling at round-number pitch counts (100) despite STB evidence of earlier degradation (Lester at 100, Hendricks at 80). Counter-trap = leaving a reliever in if STB is above trend line even past normal hook point (Figure 7 logic: above-average relievers permitted to higher pitch counts). Clock = pitch count as temporal axis; STB ratio peaks early then settles to mean (~1.8 for Arrieta); fatigue triggers manifest as local drops in mean STB line.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: cooling-down mechanism (Smith [17] time correlation R^2=0.86; velocity differential home vs road [19]); biomechanical layer: K/BB suppression on road; weather veto: paper does not include temperature, humidity, wind, or park-specific air density, so any cross-layer deployment in cold early-season games or high-altitude parks (Coors) is vetoed absent external biomechanical/weather data; umpire bias [13] acknowledged but unmodeled.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios as above.

I need to watch word count. Let's draft.

Make sure no mention of "odds", "spread", "total", "moneyline". The paper itself mentions "altering the odds of winning" in the intro [PAGE 1]. I should not repeat that phrase or if I quote it, I must be careful. The user said "Never mention spreads, totals, moneylines, or odds." I can paraphrase without using the word "odds". Actually, the source text says "altering the odds of winning". I should avoid quoting that exact phrase or using the word "odds". I'll say "win probability" instead if needed, but better avoid.

Also avoid "betting lines". Good.

Let's ensure formal LaTeX is correct. Use inline math and maybe display. Cite [PAGE N] after equations or claims.

Let's write.

THINK_TRACE section:

The paper’s central statistical correction rests on a multi-hop derivation that begins with the raw scoring differential. Over the 1980–2015 Retrosheet sample of n = 80,554 games, home teams scored 4.597 runs per game while visiting teams scored 4.464 runs per game, yielding a raw differential of 0.133 runs per game [PAGE 2]. The authors then isolate the first-inning differential d₁ = sₕ₁ − sᵥ₁ = 0.09 runs [PAGE 2]. A naive ratio, 0.09 / 0.133 ≈ 67.5%, would assign the first inning roughly two-thirds of the entire home-field advantage [PAGE 2]. However, this is biased because the home team does not bat in the bottom of the final inning when leading; consequently, sᵥ₉ and sᵥ₁₀ are inflated relative to sₕ₉ and sₕ₁₀, producing spurious visitor advantages in innings 9 and 10 [PAGE 3]. The authors correct this by defining dₐᵥₑ as the mean differential across innings 3 through 8 (excluding the irregular first and second innings), obtaining dₐᵥₑ = 0.0419 runs [PAGE 3]. They weight the ninth inning by p(9th played) = 1 and the tenth by p(10th played) = 0.1973 (7,246 extra-inning games divided by 80,554 total games) [PAGE 3]. Summing the corrected inning-wise differentials yields a true home-field advantage of approximately 0.429 runs per game (Table 1 reports 0.43) [PAGE 5], after which the first inning accounts for 0.09 / 0.43 ≈ 21.0% of the total, not 67.5% [PAGE 5].

The first-batter starter strategy adds another layer. Because a visiting starter sits in the dugout during the top of the first inning, he may “cool down”; Smith shows the first-inning home advantage correlates with top-of-the-first duration (R² = 0.86, roughly one extra home run per 90 seconds beyond six minutes) [PAGE 2], and road pitchers exhibit lower velocity and K/BB in the first inning [PAGE 2]. The proposed rule uses a relief pitcher for exactly one batter at the elevated d₁ penalty, then inserts the regular starter fresh from the bullpen at the baseline dₐᵥₑ penalty [PAGE 4]. With mean plate appearances per inning of 4.30 (home) and 4.21 (visitor) [PAGE 4], the revised first-inning differential becomes d̂¹ = 0.053 runs per game, removing Δ = 0.037 runs per game, or 8.6% of the total advantage [PAGE 5]. Over 81 road games this accumulates to roughly 3 runs, and because 17.8% of visiting-team losses are by exactly one run, this can translate to approximately one additional road win per season [PAGE 5].

Gray-zone audit: the plate-appearance formula itself is omitted as a blank mathematical object in the source text [PAGE 4], so the exact mapping from outs to PĀ is not reproducible from the manuscript alone. Treating a single batter’s exposure as equivalent to a full-inning d₁ penalty is an upper-bound assumption. The strike-to-ball (STB) regression conflates called strikes with batted-ball outcomes that are recorded as strikes (hits), meaning a high STB slope does not guarantee run prevention [PAGE 7]. The extra-inning correction assumes the unobserved bottom-of-the-inning scoring potential equals the innings-3–8 average, an assumption that breaks down in blowouts or when managerial strategy changes in extra frames. Finally, the STB-per-pitcher analysis suffers from right-censoring: few pitchers appear in the 1,200–2,000 seasonal pitch range with STB between 1.0 and 1.25, creating a sparsity singularity that limits hybrid-role inference [PAGE 8].

That's good. Now source operators.

SOURCE_OPERATORS_AND_EQUATIONS: I'll format with LaTeX and page citations.

RETROCAUSAL_GENEALOGY: trace historical lineage.

RECURSIVE_THEORY_OF_MIND: crisis habit, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: veto layers.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Need to make sure total words >= 1000. Let's estimate. THINK_TRACE ~450. SOURCE ~250. RETRO ~200. RECURSIVE ~150. CROSS ~150. RLVR ~150. Total ~1350. Good.

Let's write carefully with exact page markers.

Double-check page numbers from text:
- Page 1: Intro, Section 2 start, Figure 1
- Page 2: Section 2.1 Background, n=80,554, d1=0.09, Smith R^2=0.86, velocity/K/BB
- Page 3: Section 2.2.1, p(9th)=1, p(10th)=0.1973, d_ave=0.0419
- Page 4: Section 2.2.2, PA_h=4.30, PA_v=4.21, footnote 1
- Page 5: Section 2.3 Results, Table 1, d^_1=0.053, removal 0.037 runs (8.6%), 81 road games, 17.8% one-run losses. Also Section 3 intro and Figure 2.
- Page 6: Section 3.1, 712 pitchers, Figure 3 Arrieta Y=3.20+1.607*Balls
- Page 7: Section 3.2, Figure 4 Chen Y=4.689+1.843*Balls, ERA comparison, hits counted as strikes
- Page 8: Figure 5, Figure 6 left Y=1.687+1.603*Balls, Figure 6 right avg STB 1.32, Figure 7/8 discussion
- Page 9: Figure 5 all Cubs equations, Figure 9 discussion
- Page 10: Figure 7 NS/S equations
- Page 11: Figure 9 fatigue drops
- Page 12: Rondon/Rosscup/Strop
- Page 13: Section 4 Conclusion, Summary strategies, 3 runs over 81 games, 18% one-run home wins (visiting team losses by one run?)
- Page 14: Section 4.2 Future Work
- Page 15: References
- Page 16: References end

Wait, on page 5 the text says "17.8% of the games in our database were lost by the visiting team by exactly one run". On page 13 it says "roughly 18% of games are won by home teams by only one run". Slight difference but consistent.

I'll cite [PAGE 5] for the first-batter starter math and Table 1. [PAGE 13] for conclusion summary.

Now writing the final response. Must be only the XML sections. No intro/outro outside tags.

Let's draft the content fully.

Be careful with LaTeX syntax. Use $$ for display or $ for inline. The user wants formal LaTeX equations. I'll use inline where appropriate and display for key ones.

I will not mention "odds" anywhere. I'll say "win probability" or just "winning".

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central statistical correction is a multi-hop derivation that begins with the raw scoring differential. Across the 1980–2015 Retrosheet sample of n = 80,554 games, home teams scored 4.597 runs per game while visiting teams scored 4.464 runs per game, producing a raw differential of 0.133 runs per game [PAGE 2]. The authors then isolate the first-inning differential d₁ = sₕ₁ − sᵥ₁ = 0.09 runs [PAGE 2]. A naive ratio of 0.09 / 0.133 ≈ 67.5% would assign the first inning roughly two-thirds of the entire home-field advantage [PAGE 2], but this is biased because the home team does not bat in the bottom of the final inning when leading; consequently, sᵥ₉ and sᵥ₁₀ are devalued relative to sₕ₉ and sₕ₁₀, producing spurious visitor advantages in innings 9 and 10 [PAGE 3]. The authors correct this by defining dₐᵥₑ as the mean differential across innings 3 through 8—excluding the irregular first and second innings—obtaining dₐᵥₑ = 0.0419 runs [PAGE 3]. They weight the ninth inning by p(9th played) = 1 and the tenth by p(10th played) = 0.1973 (7,246 extra-inning games divided by 80,554 total games) [PAGE 3]. Summing the corrected inning-wise differentials yields a true home-field advantage of approximately 0.429 runs per game (Table 1 reports 0.43) [PAGE 5], after which the first inning accounts for 0.09 / 0.43 ≈ 21.0% of the total, not 67.5% [PAGE 5].

The first-batter starter strategy adds a second derivation layer. Because a visiting starter sits in the dugout during the top of the first inning, he may “cool down”; Smith shows the first-inning home advantage correlates with top-of-the-first duration (R² = 0.86, roughly one additional home-team run per 90 seconds beyond six minutes) [PAGE 2], and road pitchers exhibit lower velocity and K/BB in the first inning [PAGE 2]. The proposed rule uses a relief pitcher for exactly one batter at the elevated d₁ penalty, then inserts the regular starter fresh from the bullpen at the baseline dₐᵥₑ penalty [PAGE 4]. With mean plate appearances per inning of 4.30 (home) and 4.21 (visitor) [PAGE 4], the revised first-inning differential becomes d̂¹ = 0.053 runs per game, removing Δ = 0.037 runs per game, or 8.6% of the total advantage [PAGE 5]. Over 81 road games this accumulates to roughly 3 runs, and because 17.8% of visiting-team losses are by exactly one run, this can translate to approximately one additional road win per season [PAGE 5].

Gray-zone audit: the plate-appearance formula itself is omitted as a blank mathematical object in the source text [PAGE 4], so the exact mapping from outs to PĀ is not reproducible from the manuscript alone. Treating a single batter’s exposure as equivalent to a full-inning d₁ penalty is an upper-bound assumption. The strike-to-ball (STB) regression conflates called strikes with batted-ball outcomes recorded as strikes (hits), meaning a high STB slope does not guarantee run prevention [PAGE 7]. The extra-inning correction assumes unobserved bottom-of-the-inning scoring potential equals the innings-3–8 average, an assumption that breaks down in blowouts or under altered managerial strategy in extra frames. Finally, the STB-per-pitcher analysis suffers from right-censoring: few pitchers appear in the 1,200–2,000 seasonal pitch range with STB between 1.0 and 1.25, creating a sparsity singularity that limits hybrid-role inference [PAGE 8].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let sₕᵢ denote average home-team runs in inning i and sᵥᵢ average visiting-team runs in inning i, for i = 1,...,10 [PAGE 2]. The inning-wise scoring differential is

dᵢ = sₕᵢ − sᵥᵢ [PAGE 2].

Sample statistics: n = 80,554 games; home win fraction 0.5393; home runs per game 4.597; visitor runs per game 4.464; raw home-field advantage 0.133 runs/game [PAGE 2]. First-inning differential d₁ = 0.09 runs [PAGE 2]. Naive first-inning share 0.09/0.133 ≈ 67.5% [PAGE 2]. Smith (2014, 2015) temporal correlation R² = 0.86 between top-of-first duration and home-team first-inning scoring [PAGE 2].

Correction for unplayed bottom-of-inning outs: p(9th inning played) = 1; p(10th inning played) = 0.1973 [PAGE 3]. Mean differential over innings 3–8: dₐᵥₑ = 0.0419 runs [PAGE 3]. Corrected total home-field advantage ≈ 0.429 runs/game [PAGE 5, Table 1].

Corrected inning-wise differentials dᵢ (runs/game) and percentage of total [PAGE 5, Table 1]:
Inning 1: 0.09 (21.0%); 2: 0.04 (8.6%); 3: 0.05 (12.2%); 4: 0.03 (7.8%); 5: 0.05 (11.7%); 6: 0.04 (9.1%); 7: 0.04 (8.9%); 8: 0.04 (9.0%); 9: 0.04 (9.8%); 10: 0.01 (1.9%); Total: 0.43 (100%).

Plate appearances per inning: PĀₕ = 4.30, PĀᵥ = 4.21 [PAGE 4]. The source text defines PĀ via AB, BB, IBB, HBP, SF, SH, CI, PO at the per-game level, but the explicit algebraic expression is omitted as a blank equation object [PAGE 4]—a reproducibility breakdown.

First-batter starter outcome: revised first-inning differential d̂¹ = 0.053 runs/game [PAGE 5]. Removal Δ = 0.037 runs/game = 8.6% of total advantage [PAGE 5]. Seasonal accumulation over 81 road games ≈ 3 runs; visiting-team one-run loss frequency 17.8% [PAGE 5].

Strike-to-ball regression operators: let Y = strikes and B = balls. Jake Arrieta 2015: Y = 3.20 + 1.607·B [PAGE 6]; expanded league view Y = 3.201 + 1.607·B [PAGE 7]. Wei-Yin Chen 2015: Y = 4.689 + 1.843·B [PAGE 7]. Arrieta mean 106 pitches/game; Chen mean 97 pitches/game; Chen ERA 3.34 vs Arrieta ERA 1.77 [PAGE 7]. The paper notes hits are counted as strikes, so STB excellence does not imply run prevention [PAGE 7].

League aggregate all 712 pitchers: Y = 1.687 + 1.603·B [PAGE 8]. Mean STB ratio across pitchers = 1.32 (dimensionless) [PAGE 8]. Starter vs non-starter collective fits: non-starters Y = 1.416 + 1.245·B; starters Y = 3.824 + 1.534·B [PAGE 10].

Individual 2015 Chicago Cubs strike-vs-ball fit lines (Y = intercept + slope·B) [PAGE 9]:
Arrieta 3.201 + 1.607; Beeler −1.967 + 1.511; Coke 0.9386 + 1.359; Edwards 2.169 + 0.9557; Germen 1.813 + 1.106; Grimm 0.7778 + 1.006; Hammel 0.5832 + 1.791; Haren 1.677 + 1.621; Hendricks 2.576 + 1.586; Lester 4.23 + 1.523; Medina 0.2807 + 1.293; Motte 1.859 + 1.129; Ramirez 2.105 + 0.771; Richard 1.518 + 1.874; Roach −2.605 + 1.48; Rodney 1.297 + 1.009; Rondon 1.622 + 1.245; Rosscup 1.61 + 1.031; Russell 0.6618 + 1.364; Schlitter 1.019 + 0.7777; Soriano 3.018 + 0.6845; Strop 2.039 + 0.8066; Wada 0.7513 + 1.81; Wood 1.576 + 1.642.

Units: runs/game (differential), plate appearances/inning, pitches (count), probabilities (unitless), STB slope (strikes per ball, dimensionless), R² (unitless).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage extends directly to David W. Smith’s Retrosheet research on first-inning scoring [16, 17], Phil Birnbaum’s syntheses of home-field advantage [4], and Moskowitz & Wertheim’s umpire-bias and behavioral analysis [13], all of which the authors cite to explain why the raw 0.133 runs/game figure understates true advantage. The temporal “cooling down” mechanism relies on Smith’s finding that every 90 seconds beyond a six-minute top of the first inning yields approximately one extra home-team run [PAGE 2], and on Zimmerman’s FanGraphs work showing road pitchers have lower first-inning velocity and K/BB [19]. The bullpen-role analysis inherits from Mitchel Lichtman’s “times through the order” penalty research [9, 10], which demonstrates that opposing batters perform better upon repeat plate appearances against the same pitcher. The “opener” concept echoes Bryan Grosnick’s earlier advocacy for relief pitchers to begin games [5], while the broader bullpen takeover narrative draws on Keri & Paine’s FiveThirtyEight documentation of rising relief workload [7] and Arthur’s postseason reliever-season observation [2].

Multi-week traps emerge when these findings are compounded across a schedule. Over a 162-game season, 0.037 runs/game saved by the first-batter starter strategy totals roughly 3 runs, which the authors equate to approximately one win given the frequency of one-run games [PAGE 5]. Over a short playoff series, however, the same per-game edge is both more volatile and more decisive; a single first-inning swing in a five-game series can alter series outcomes more than its seasonal expectation suggests. The “three-inning pitcher” hybrid proposal targets a structural gap visible in Figure 8: the absence of pitchers in the 1,200–2,000 pitch range with STB between 1.0 and 1.25 [PAGE 8], indicating that conventional role boundaries create an underutilized middle ground. A team that trains pitchers for exactly three-inning outings over a four-week spring ramp would need to manage altered throwing volume and arm-slot fatigue without the injury-surveillance infrastructure that exists for five-man rotations, creating a multi-week deployment trap if roster rules and IL placements are not simultaneously redesigned.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here concerns the manager’s model of the pitcher’s internal state versus the data’s model of that state. The paper documents that managers still privilege “gut instinct” over data when deciding whether to remove a pitcher [PAGE 5], which constitutes a crisis-habit regression: under pressure, decision-makers revert to salient, round-number heuristics (e.g., the 100-pitch hook) rather than continuous performance signals. The counter-trap is the STB-trigger framework itself. Figure 9 shows that starters such as Lester exhibit local STB drops near pitch 100, Hendricks near pitch 80, and Hammel near pitches 65 and 90 [PAGE 11], while relievers such as Rondon peak early and decay within 10–15 pitches [PAGE 12]. A manager operating with recursive theory of mind would model not only the pitcher’s fatigue curve but also the opposing manager’s expectation of when the hook will come; if the opposing lineup anticipates a third time through the order, the starter’s effectiveness degrades before the physical trigger arrives [PAGE 14].

The clock variable is pitch count, but it is not a uniform time axis. Figure 4 overlays pitch count on the strikes-vs-balls plane, revealing that Arrieta’s STB ratio peaks early and settles near 1.8, while Chen’s wider deviation band indicates less stable state estimation [PAGE 7–8]. Relief pitchers who are performing above their trend line are permitted to extend to higher pitch counts [PAGE 8], which is a counter-trap to the rigid hook: the manager recursively reasons that the pitcher’s current conditional state outweighs the prior role-based expectation. The failure mode occurs when the manager misreads noise as signal—pulling a pitcher during a random STB dip or leaving in a pitcher whose apparent superiority is regression-to-the-mean pending. The paper’s framework therefore replaces a scalar pitch-count clock with a vector-valued trigger: (pitch count, STB residual from personal trend, role class, times through order).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the first-batter starter strategy depends on the physiological mechanism that a visiting starter “cools down” in the dugout during the top of the first inning [PAGE 2]. This is supported by Smith’s duration correlation (R² = 0.86) [PAGE 2] and by Zimmerman’s velocity/K-BB road-vs-home splits [PAGE 2]. Biomechanical layer: the STB metric conflates called strikes with balls in play recorded as strikes, so a pitcher can exhibit an excellent STB slope while allowing hard contact [PAGE 7]; thus STB alone is insufficient as a removal trigger without batted-ball quality inputs.

Weather veto: the paper explicitly relies on Retrosheet game logs from 1980–2015 [PAGE 1] and 2015 play-by-play [PAGE 5], but it contains no covariates for temperature, humidity, wind, barometric pressure, or park-specific air density. Cold early-season games and high-altitude venues (e.g., Coors Field) alter ball flight, grip, and pitcher warm-up requirements, meaning any deployment of the first-batter starter strategy or STB trigger system in those environments is vetoed unless an external weather/biomechanical layer is added. Umpire bias is acknowledged as a possible HFA source [PAGE 2, citation 13] but is not modeled, creating a second unmodeled physical layer.

Roster rule layer: Official Baseball Rules permit mid-at-bat substitution only after the pitcher faces at least one complete batter or is injured [PAGE 4, citation 14]. The first-batter starter strategy is therefore rule-compliant only if the reliever faces exactly one full plate appearance; any injury or rule enforcement variation voids the tactical design. Cross-layer adjudication concludes that the strategy is sound in temperate-park, full-rule environments but vetoed in extreme weather, high-altitude, or small-sample bullpen-construct scenarios without supplemental data.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: First-batter starter faces a high-leverage leadoff hitter and issues a walk or allows a hit; the regular starter then enters with a runner on base and must pitch from the stretch, nullifying the freshness benefit. Verifiable condition: measure run expectancy in the first inning when a reliever faces one batter and is replaced versus when the starter begins the inning with no runners on. Prediction: the net HFA reduction collapses to ≤0.01 runs/game in games where the first batter reaches base, because the starter’s entry state degrades from bases-empty to runners-on.

Scenario 2: STB-trigger removal applied in extra innings. Verifiable condition: examine 9th- and 10th-inning STB deviations and removal decisions for the 7,246 extra-inning games in the sample [PAGE 3]. Prediction: because only 19.73% of games reach the 10th inning and bottom-of-inning outs are censored, STB-based pull decisions in extras will exhibit higher variance and a 20–30% wider confidence interval than innings 1–8, leading to premature hooks or over-extension in low-information states.

Scenario 3: Three-inning hybrid pitcher role under current roster constraints. Verifiable condition: track seasonal pitch counts and injury-list placements for pitchers groomed for 3-inning outings over a 4-week adaptation block versus traditional relievers with matched workload. Prediction: without changes to active-roster pitcher limits and training-load monitoring, hybrid pitchers will accumulate upper-arm or elbow injuries at a rate exceeding traditional relievers by a factor of 1.2–1.5 over an eight-week sample, because the acute intensity of relief pitching is combined with starter-like duration without the corresponding aerobic base.
</RLVR_COUNTERFACTUAL_VETOES>