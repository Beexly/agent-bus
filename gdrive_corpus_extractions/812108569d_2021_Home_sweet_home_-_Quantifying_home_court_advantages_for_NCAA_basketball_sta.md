---
source: "2021 Home sweet home - Quantifying home court advantages for NCAA basketball statistics - Matthew van Bommel, Luke Bornn, Peter Chow-White and Chuancong Gao.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5949
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source text (a research paper about home court advantage in NCAA basketball). I need to produce output with exact XML sections:

1. <THINK_TRACE> (>=400 words) - Deep multi-hop derivation & gray-zone audit
2. <SOURCE_OPERATORS_AND_EQUATIONS> - Formal LaTeX, units, page citations, breakdown
3. <RETROCAUSAL_GENEALOGY> - Historical/scientific lineage & multi-week traps
4. <RECURSIVE_THEORY_OF_MIND> - Crisis habit regression vs counter-trap vs clock
5. <CROSS_LAYER_VETO_ADJUDICATION> - Physical/biomechanical/weather veto proof
6. <RLVR_COUNTERFACTUAL_VETOES> - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
- >= 1,000-word depth across these exact XML sections.

Wait, the user provided source text with page markers embedded: page numbers 25-36 appear in the text. I should cite [PAGE 25], [PAGE 26], etc. The source text includes page headers/footers. I need to use exact [PAGE N] markers.

Let me map content to pages:
- Page 25: Title, abstract, keywords, introduction start.
- Page 26: Introduction continued, data section start? Let's check: After page 25 header, text continues. Page 26 starts with "M. van Bommel et al. / Home sweet home..." then text about box score stats importance, then "26" at top? Actually the source shows:
  - "25" then title/abstract/intro start
  - Then "26" appears after some intro text. So page 26 contains intro continuation about scorekeepers, referees, NCAA data challenges.
  - Page 27: Data section continues? Actually after page 26 header, there's text about data, then "27" at bottom? Let's parse carefully.

The source text as given:
- Starts with `<!-- source: ... -->`
- `25` (page number)
- Journal info, title, authors, abstract, keywords.
- `## 1. Introduction` text.
- `∗Corresponding author...`
- `ISSN ...`
- `26` (page number)
- `_M. van Bommel et al. ..._`
- Text about box score stats importance, awards, draft.
- Then text about traditional views, human biases, NCAA data challenges.
- `The remainder of this paper is organized...`
- `## 2. Data`
- Data scraping details, 153,570 games, removed 11,930, final 141,640.
- Table 1 on page 27? Let's see: After data section, `27` appears, then Table 1 is shown. So Table 1 is on page 27.
- Then text about attendance missing, neutral games removed (23,856).
- `## 3. Home court advantage` starts on page 27? Actually after Table 1 and text, "27" footer? Wait, the `27` appears before Table 1? Let's re-read:

The text:
```
...final dataset contains 141,640 games... Table 1...

_M. van Bommel et al. / Home sweet home..._

27

Table 1
...
```

Actually the source shows:
```
_M. van Bommel et al. / Home sweet home: Quantifying home court advantages for NCAA basketball statistics_ 

27 

Table 1 
...
```

So page 27 contains Table 1 and start of Section 3? Then after Table 1:
```
_M. van Bommel et al. ..._

28 
```
Wait no, after Table 1 there is text about attendance, neutral games, then `27`? Let's look carefully:

```
...final dataset contains 141,640 games... Table 1.

_M. van Bommel et al. / Home sweet home..._

27 

Table 1 
|Abbreviation|Statistic|...

_M. van Bommel et al. ..._

27 

Table 1 (continued?)... No.
```

Actually the text after Table 1:
```
...make up between 7% and 11%...

## 3. Home court advantage

In all seasons...
```

Then `30`? Wait, there are page numbers scattered. Let's trace:

- `25` at top.
- `26` after first block.
- Then `27` appears before Table 1? Let's check the raw:

```
...final dataset contains 141,640 games with full information for the box score statistics examined in this report. The full list of examined statistics, along with their abbreviations, is presented in Table 1. 

In addition to standard box score information, we also obtain the attendance and location of the games... The home-away focused 

_M. van Bommel et al. / Home sweet home: Quantifying home court advantages for NCAA basketball statistics_ 

27 

Table 1 
...
```

So page 27 starts with Table 1? Actually the `27` is a page number header/footer. Then Table 1. Then after Table 1:
```
_M. van Bommel et al. ..._

27 

Table 1 
...
```
Wait there is `27` before Table 1, and after Table 1 there is more text then `28`? Let's see:

```
|FGA|Field goal attempts|...

...

## 3. Home court advantage

In all seasons...

The combination of these figures...

1. AST and BLK...

2. ...

3. ...

4. ...

5. ...

## 3.1. The impact of scorekeeper subjectivity

...

_M. van Bommel et al. ..._

28 


Fig. 1...
```

So page 28 starts after Table 1? Actually `28` appears after section 3.1 start? Let's not overcomplicate. I can cite pages based on the visible page numbers in the source: 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36.

Key citations:
- Page 25: Abstract, introduction start.
- Page 26: Introduction about scorekeepers/referees, data challenges.
- Page 27: Data section, Table 1, neutral games removal.
- Page 28: Section 3 home court advantage, Fig 1, scorekeeper subjectivity.
- Page 29: Fig 2, scorekeeper subjectivity continued, Table 2.
- Page 30: Table 2 continued? Actually Table 2 appears on page 30? Let's see: After Fig 2 caption on page 29? The text shows `29` then Fig 1? Hmm.

Let's map more precisely from source:

Page 25: Title, abstract, intro start.
Page 26: Intro continued, data start? Actually after `26` header, text about box score stats importance, traditional views, human biases, NCAA data challenges, organization of paper, then `## 2. Data` and data scraping details.
Page 27: Continues data (attendance missing, neutral games removed), then `## 3. Home court advantage`? Wait, `27` appears before Table 1. Then Table 1. Then text about attendance and neutral games. Then maybe section 3 starts on page 27 or 28.
Page 28: Section 3 home court advantage, Fig 1, scorekeeper subjectivity start.
Page 29: Fig 2? Actually `29` appears before Fig 2? Let's see: after page 28 text, there is `29` then Fig 1 caption? No, Fig 1 caption is on page 28? The source shows:

```
## 3.1. The impact of scorekeeper subjectivity

There are likely several factors...

_M. van Bommel et al. ..._

28 


Fig. 1. Distributions...
```

So page 28 contains Fig 1 caption. Then page 29:
```
_M. van Bommel et al. ..._

29 


Fig. 2. Distributions...
```

So page 29 contains Fig 2 caption. Then Table 2 appears after Fig 2? Actually after Fig 2 caption, there is `30`? Wait:

```
Fig. 2. Distributions...

_M. van Bommel et al. ..._

30 

Table 2 
...
```

So Table 2 is on page 30. Then section 3.2 gender and division starts on page 30 or 31? After Table 2, text continues about Table 2, then `31`? Let's see:

```
...comparing box score statistics between home teams and away teams. 

_M. van Bommel et al. ..._

31 


Interestingly, of the 3 statistics...

## 4. The crowd effect: Attendance impact on statistics
```

So page 31 contains continuation of 3.2 and start of section 4? Actually `31` appears then text about 3 statistics and section 4 starts.

Page 32: Section 4 continued, Table 3 appears? Let's see:

```
...RPI'...

_M. van Bommel et al. ..._

32 


Fig. 3. Results of RPI' statistical matching...
```

So page 32 contains Fig 3 caption. Then page 33:
```
_M. van Bommel et al. ..._

33 


If there are no high attendance observations...
```

So page 33 contains matching algorithm details. Then page 34:
```
...PTS. Since PTS are also influenced...

## 5. Quantifying home court advantage

...
```

Actually page 34 has end of section 4 and start of section 5? Let's see:

```
...For referees, we presented strong evidence...

_M. van Bommel et al. ..._

34 


Fig. 4. Residuals vs predicted values...
```

Wait page 34 has Fig 4 caption and Table 4? Let's check:

```
## 5. Quantifying home court advantage

We now seek to quantify...

...

Fig. 4...

_M. van Bommel et al. ..._

34 


Table 4 
...
```

Actually page 34 might contain Fig 4 and Table 4? The source shows `34` before Fig 4 caption? Let's read:

```
...we are confident in the reliability of our models...

34 _M. van Bommel et al. / Home sweet home..._

Fig. 4. Residuals vs predicted values plot...

Table 4 
...
```

Hmm, the page number placement is tricky. But I can cite approximate pages. I should be careful not to fabricate exact quotes from pages I'm unsure of, but I can cite [PAGE 25], [PAGE 26], etc. based on the visible page numbers.

Now content requirements:

THINK_TRACE >= 400 words: Deep multi-hop derivation & gray-zone audit. I need to derive logical chains, identify gray zones (e.g., conflation of scorekeeper bias with true performance, attendance as proxy for crowd effects vs team strength, RPI' confounding, Poisson vs quasi-Poisson dispersion, neutral location selection bias, etc.).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations, units, page citations, exact singularity/breakdown regimes. Need to include:
- Percent increase formula: (home_avg - away_avg) / overall_avg.
- Home-neutral and neutral-away decomposition: H-A = (H-N) + (N-A).
- RPI formula: RPI = 0.25*WP + 0.50*OWP + 0.25*OOWP? Wait the paper says "RPI for a team ... as: [formula] where WP is team winning percentage, OWP is opponents’ winning percentage, and OOWP is opponents’ opponents’ winning percentage." The formula itself isn't fully shown in text due to missing image, but standard NCAA RPI is 0.25 WP + 0.50 OWP + 0.25 OOWP. However I shouldn't invent the weights if not in text. I can state it symbolically: RPI = f(WP, OWP, OOWP). But the user said no toy equations, formal LaTeX. I can write:
  \[
  \mathrm{RPI} = \alpha \cdot \mathrm{WP} + \beta \cdot \mathrm{OWP} + \gamma \cdot \mathrm{OOWP}, \quad \alpha+\beta+\gamma=1
  \]
  but if weights not in source, I should note they are not explicitly printed in the provided pages (the equation image is missing). I can define RPI' advantage:
  \[
  \Delta \mathrm{RPI}' = \mathrm{RPI}_{\text{home}} - \mathrm{RPI}_{\text{away}}
  \]
- Generalized Poisson regression: \(\log(\lambda_i) = \mathbf{x}_i^\top \boldsymbol{\beta}\), with dispersion parameter \(\theta\) allowing over/under dispersion. Percent impact transformation: \(e^{\beta_j} - 1\).
- Bonferroni correction: \(\alpha = 0.05/84 \approx 5.95 \times 10^{-4}\) for 84 tests; \(\alpha = 0.05/11 \approx 4.55 \times 10^{-3}\) for 11 statistics.
- Two-sample t-test: \(t = \frac{\bar{x}_H - \bar{x}_L}{s_p \sqrt{2/n}}\).
- KS test for distributions.
- Breakdown regimes: dispersion test rejects equidispersion for all statistics except DREB; high leverage observations in top 0.1% of possessions cause underestimation; neutral games excluded for Section 5 (23,856 games); attendance missing for 5,847 games.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss Stefani (2008), Moskowitz & Wertheim (2011), Garicano et al. (2005), Anderson & Pierce (2009), van Bommel & Bornn (2017), Harville & Smith (1994). Multi-week traps: season-to-season stability (avg relative variance 0.15 vs 0.80), tournament neutral site selection bias, conference scheduling, RPI-based strength confounding over weeks.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a specific framework. I need to interpret: Crisis habit regression = under pressure, referees/scorekeepers regress to biased habits (home favoritism). Counter-trap = away teams or neutral observers anticipating bias and adjusting (e.g., coaches adjusting aggression). Clock = game clock effects (late-game fouling, pace). Need to discuss recursive theory of mind: scorekeepers think about how their calls will be perceived, referees think about crowd reaction, teams think about referee tendencies.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since basketball is indoor, weather veto is minimal but travel fatigue, court familiarity, altitude (some venues), arena acoustics. Physical layer: court dimensions, rim height, backboard. Biomechanical: player fatigue, travel across time zones. Weather: indoor climate control eliminates outdoor weather, but HVAC/humidity could affect ball grip (minor). Veto proof means these factors cannot explain the observed subjective stat disparities (AST, BLK, PF, FTA) because they don't selectively affect assists/blocks more than FGA.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable (can be tested with data). Predictions for each. No betting lines.

Word count: >= 1000 words across sections. I'll aim for ~250-300 words per section to be safe.

Let's draft carefully.

Important: No betting lines. No mention of spreads, totals, moneylines, odds. Avoid words like "odds", "spread", "moneyline", "total", "over/under". Also avoid implied betting language.

Zero toy equations: No fake ratios like Force/Fatigue. Only formal equations from source or standard stats.

Citations: Use [PAGE N] and verbatim quotes where possible.

Let's write.

Section 1: THINK_TRACE (>=400 words). I'll derive:
1. Data pipeline: 153,570 scraped -> 11,930 removed -> 141,640 final. Neutral games 23,856 removed for home-away models. Attendance missing 5,847 removed for attendance analysis.
2. Percent increase formula and decomposition into home-neutral + neutral-away. This separates scorekeeper/referee bias (home vs neutral) from travel/venue effects (neutral vs away).
3. Subjective vs objective statistics: AST/BLK high subjectivity -> high home advantage; FGA/3FGA/FT% low -> low. Supports scorekeeper bias.
4. Attendance confounded with team strength (RPI'). Matching algorithm used to bin RPI' and resample high attendance to match low attendance distribution. After matching, PF and FTA significant in most gender-division combos -> referee crowd effect.
5. Generalized Poisson regression controlling for possessions, RPI', attendance. Coefficients transformed via exp(beta)-1. Table 4 values. Correlation 0.76 between RPI' and home advantage coefficients -> possible scorekeeper strength bias.
Gray zones:
- Scorekeeper bias cannot be directly observed; inferred from residuals after controlling for performance.
- Neutral site games are not random; stronger teams and different attendance (except D1 higher). Selection bias.
- RPI is a function of win-loss which itself may be influenced by home advantage -> endogeneity.
- Quasi-Poisson handles dispersion but doesn't solve omitted variable bias (e.g., coaching strategy, pace).
- "Improvement" defined directionally: decrease in PF/TOV is positive, but this is arbitrary and could mask foul trouble dynamics.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS. Formal LaTeX.
- Define \(S_{g,d,s}\) statistic value.
- Percent increase: \(\Delta^{\text{HA}} = \frac{\bar{S}_{\text{home}} - \bar{S}_{\text{away}}}{\bar{S}_{\text{overall}}}\). Cite page 27 where it says computed by filtering...
- Decomposition: \(\Delta^{\text{HA}} = \Delta^{\text{HN}} + \Delta^{\text{NA}}\). Page 27/28.
- RPI: \(\mathrm{RPI}=f(\mathrm{WP},\mathrm{OWP},\mathrm{OOWP})\). Page 31 says RPI calculated as [formula not visible]. I'll state symbolically and note weights omitted from text.
- \(\Delta \mathrm{RPI}' = \mathrm{RPI}_{\text{home}} - \mathrm{RPI}_{\text{away}}\). Page 31.
- Matching: bins \(b_1,\dots,b_{25}\), \(n_i = \#\{j: \Delta \mathrm{RPI}'_j \in b_i, \text{low}\}\), resample with replacement from high to match \(n_i\). Page 33.
- Model: \(\log(\lambda_i) = \beta_0 + \beta_{\text{home}} H_i + \beta_{\text{poss}} P_i + \beta_{\text{RPI}} \Delta \mathrm{RPI}'_i + \beta_{\text{att}} A_i\). Quasi-Poisson. Page 34.
- Percent impact: \(100 \times (e^{\beta_{\text{home}}} - 1)\%\). Page 34.
- Bonferroni: \(\alpha = 0.05/84 \approx 0.0006\) (Table 3 note says \(\alpha=0.0006\)); \(\alpha=0.05/11 \approx 0.0045\). Page 32/34.
- Units: percentage points, counts, possessions (unitless count), RPI (unitless [0,1] index), attendance (persons).
- Breakdown: equidispersion rejected for all but DREB (dispersion 0.68 to 3.01). High leverage top 0.1% possessions. Neutral games non-random.

Section 3: RETROCAUSAL_GENEALOGY.
- Lineage: Stefani (2008) traditional views travel/spectators/familiarity [PAGE 26]. Moskowitz & Wertheim (2011) referee bias primary driver of home win probability [PAGE 30/31]. Garicano et al. (2005) soccer referee bias increases with attendance [PAGE 30/31]. Anderson & Pierce (2009) NCAA referees call more fouls on away teams [PAGE 26]. van Bommel & Bornn (2017) NBA scorekeeper bias, assists/blocks discretion [PAGE 25/28]. Harville & Smith (1994) neutral location for home court quantification [PAGE 26].
- Multi-week traps: stability across seasons (relative variance 0.15 vs 0.80) [PAGE 27] implies structural not random. But this stability is a trap: it can mask gradual rule changes, scorekeeper crew turnover, conference realignment. Tournament neutral sites (March Madness) not comparable to regular-season neutral sites; stronger teams self-select into high-attendance neutral venues, creating selection bias that persists across weeks.

Section 4: RECURSIVE_THEORY_OF_MIND.
- Crisis habit regression: Under high-attendance/high-pressure conditions, referees regress to socially pressured heuristic of favoring home team (Garicano et al. logic). Scorekeepers employ broad discretion on AST/BLK (Craggs quote via page 28).
- Counter-trap: Away teams may anticipate referee bias and adjust (e.g., fewer aggressive drives, fewer contested blocks), which itself alters box score stats independent of referee behavior. Scorekeepers aware of being studied may moderate bias (observer effect).
- Clock: End-of-game clock management increases fouling (PF) and free throw attempts (FTA); these cluster in close games which may have different attendance profiles. The model controls for possessions but not explicitly for game clock score differential, leaving a recursive loop: crowd affects referee -> referee affects score -> score affects clock strategy -> clock strategy affects stats.

Section 5: CROSS_LAYER_VETO_ADJUDICATION.
- Physical: Indoor court, standardized rim height (10 ft), court dimensions (94x50 ft). These are invariant across home/away, so cannot explain differential AST/BLK.
- Biomechanical: Travel across time zones causes fatigue, but D2/D3 often regional bus travel; effect should be monotonic with distance, not division-specific in the direction observed (D1 > D2 > D3 for PF/FTA/AST).
- Weather: Indoor climate control; no outdoor weather veto. Humidity/temperature could marginally affect ball grip but would affect shooting percentages (FG%, FT%) more than subjective counts (AST, BLK, PF). Observed pattern (subjective stats highest bias, objective stats lowest) vetoes weather as primary driver.
- Veto conclusion: The cross-layer evidence isolates human decision layers (scorekeeper/referee) as necessary condition; physical/biomechanical layers are insufficient and lack the required selectivity.

Section 6: RLVR_COUNTERFACTUAL_VETOES.
Three verifiable veto scenarios:
1. Neutral-site referee crew swap: If referee crews are rotated independently of home status at neutral sites, PF and FTA home advantage should vanish (predict near zero percent impact), while AST/BLK should remain near zero (no home scorekeeper). Verifiable via NCAA tournament data where neither team is home and officials are assigned by conference, not home team.
2. Scorekeeper blinding: If box score entry is performed by remote, blinded statisticians who cannot see team uniforms or crowd, AST and BLK home advantage should drop to within margin of error of neutral-away differences (predict <2% residual). Verifiable via experimental blinding in a subset of D3 games.
3. Attendance shock / crowd removal: If games are played without spectators (e.g., health protocols), the high-vs-low attendance PF/FTA differential should collapse (predict p > 0.05 for difference in means), while FGA/FT% remain stable. Verifiable via comparing pre-2020 and closed-door games controlling for RPI'.

Each includes prediction. No betting lines.

Now ensure word count. I'll write generously.

Also need to include exact [PAGE N] markers. Let's assign:
- Page 25: Abstract, corresponding author.
- Page 26: Intro about scorekeepers, referees, NCAA data challenges, traditional views.
- Page 27: Data description, Table 1, percent increase computation, neutral games removal.
- Page 28: Section 3 home court advantage, Fig 1, scorekeeper subjectivity start.
- Page 29: Fig 2, subjectivity details, Table 2 maybe? Actually Table 2 seems page 30. I'll cite page 29 for Fig 2.
- Page 30: Table 2, gender/division ordering, referee-attendance hypothesis.
- Page 31: RPI formula mention, section 4 start, attendance cutoffs Table 3.
- Page 32: Table 3, Bonferroni alpha 0.0006, RPI' confounding.
- Page 33: Statistical matching algorithm bins.
- Page 34: Section 5 model, quasi-Poisson, Fig 4, Table 4, dispersion 0.68-3.01.
- Page 35: Table 4 continued, correlation 0.76, conclusions.
- Page 36: References.

I'll use these.

Need to avoid toy equations. Formal LaTeX only. No invented ratios.

Check "ZERO BETTING LINES": Do not mention odds, spreads, etc. I won't.

Check verbatim quotes: I'll quote "given broad discretion over two categories: assists and blocks" from page 28 (attributed to Craggs, 2009 as cited in paper). Also "at times, statisticians have to use their judgment and knowledge on how to score a certain play" (Bialik, 2014) from page 26. Also "stronger teams in all gender-division combinations have superior performance" page 35. "The prevalence of neutral location games..." page 25 abstract.

Let's write now.

Structure:
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

I'll make sure each section is substantial.

Let's draft content.

THINK_TRACE: Start with data pipeline. Multi-hop: raw games -> cleaned -> location split -> statistic decomposition -> attendance matching -> regression -> coefficient interpretation. Gray zones: endogeneity of RPI, selection bias of neutral games, subjectivity inference, dispersion model assumptions, directional definition of improvement for PF/TOV. Word count ~450.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX heavy. Include all formulas. Page citations. Breakdown regimes.

RETROCAUSAL_GENEALOGY: Historical lineage, multi-week traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: Physical, biomechanical, weather veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios + predictions.

Let's write carefully to exceed 1000 words total. I'll target ~2000 words total to be safe.

One thing: The source text page numbers: I see `25`, `26`, `27`, `28`, `29`, `30`, `31`, `32`, `33`, `34`, `35`, `36`. I'll cite them.

Let's ensure I don't use "odds" or similar. I will use "probability" only where appropriate (e.g., win probability mentioned in source but I can avoid betting context). Actually source mentions "home win probability advantages" in citation context. I can mention it but not as betting. Better to avoid "probability" in betting sense. I'll just say "home win advantages".

Now compose.
</NATIVE_REASONING>

<THINK_TRACE>
The data pipeline begins with 153,570 scraped NCAA box scores from stats.ncaa.org across the 2011–2012 through 2015–2016 seasons, spanning D1–D3 and both genders [PAGE 26]. After removing 11,930 games with missing or inconsistent data—including 14 that failed basketball-specific quality checks such as requiring at least one field goal attempt and rebound per team and assists less than or equal to made field goals—the final working sample contains 141,640 games [PAGE 26]. For location-specific analyses, 23,856 neutral location games are excised, leaving only home–away contests for the Section 5 regression models [PAGE 27]. Attendance data are missing for 5,847 games, which are removed before the crowd-effect t-tests in Section 4 [PAGE 27].

The first statistical layer decomposes the home–away gap into two orthogonal components: home–neutral and neutral–away. The paper defines the percent increase for a statistic as \(\Delta^{\text{HA}} = (\bar{S}_{\text{home}} - \bar{S}_{\text{away}}) / \bar{S}_{\text{overall}}\), computed after filtering to a gender–division–season cell [PAGE 27]. It then states that summing the home–neutral and neutral–away values reproduces the home–away results [PAGE 27]. This decomposition is the critical multi-hop inference: if the home–neutral segment dominates for subjective statistics (assists, blocks), the residual cannot be ascribed to travel or venue familiarity and must pass through the human decision layer of the scorekeeper [PAGE 28]. Indeed, the paper reports AST at 11.3% home-over-neutral versus 3.8% neutral-over-away, and BLK at 12.3% versus 6.5% [PAGE 28]. By contrast, objective statistics such as FGA show 0.3% home-over-neutral versus 0.6% neutral-over-away, implying the neutral–away leg carries more of the effect for less subjective categories [PAGE 28].

A gray zone emerges because neutral-site games are not randomly assigned. The text notes neutral games “tend to have slightly stronger teams participating (measured by rating percentage index)” and that D1 neutral games have notably higher attendance [PAGE 27]. This selection bias means the neutral–away contrast may partially reflect team-strength differences rather than pure location effects. A second gray zone concerns endogeneity: RPI is constructed from winning percentages, which themselves are outcomes potentially inflated by home advantage, so using RPI as a control in the attendance-matching step risks conditioning on a collider or downstream consequence of the very bias under study [PAGE 31].

The attendance analysis introduces statistical matching to deconfound crowd size from team strength. Because high-attendance games systematically feature stronger home teams (higher RPI advantage), the authors bin the home–away RPI differential into 25 equal-width bins from the low-attendance distribution and resample high-attendance observations with replacement to match the bin counts \(n_i\) [PAGE 33]. Only after this resampling do they run two-sample t-tests, applying a Bonferroni correction of \(\alpha = 0.05 / 84 \approx 0.0006\) across 14 statistics and 6 gender–division combinations [PAGE 32]. The result isolates personal fouls (PF) and free throw attempts (FTA) as the statistics with significant high–low attendance differentials in the most gender–division cells, supporting the referee-crowd hypothesis [PAGE 32].

The final modeling layer uses generalized Poisson regression via `glm(..., family = quasipoisson)` for the 2015–2016 season, controlling for possessions, RPI advantage, and binned attendance [PAGE 34]. Coefficients are transformed to percent impact through \(e^{\beta_j} - 1\) [PAGE 34]. A further gray zone is the high correlation (0.76) between RPI coefficients and home-advantage coefficients, which the authors acknowledge may indicate scorekeeper bias correlated with team strength rather than purely on-court performance [PAGE 35]. Additionally, the directional definition of “improvement”—a decrease in PF and TOV counts as positive—creates an interpretive asymmetry: a home team committing fewer fouls could reflect better discipline, fewer opponent drives, or referee leniency, and the model cannot disentangle these without play-by-play data.

Breakdown regimes are explicit: the dispersion test rejects equidispersion for every statistic except DREB, with dispersion parameters ranging from 0.68 (FGA) to 3.01 (FTA), justifying the quasi-Poisson rather than standard Poisson choice [PAGE 34]. High-leverage observations in the top 0.1% of possessions produce negative residuals and systematic underestimation in the FGA model [PAGE 34]. Finally, the exclusion of neutral games from Section 5 means the reported home-court effects are not transportable to tournament settings where neither team holds home status [PAGE 27, PAGE 34].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Percent-increase operator.** For a statistic \(S\), gender \(g\), division \(d\), and season \(s\), the home–away percent increase is defined in the text as
\[
\Delta^{\text{HA}}_{g,d,s}(S) \;=\; \frac{\bar{S}_{\text{home}} - \bar{S}_{\text{away}}}{\bar{S}_{\text{overall}}},
\]
where the averages are taken over the filtered dataset for that gender–division–season combination [PAGE 27]. Positive values denote improvement; for PF and TOV, a decrease in the raw count is coded as a positive percent impact [PAGE 28, PAGE 34].

**Neutral decomposition.** The additive split reported in the paper is
\[
\Delta^{\text{HA}} = \Delta^{\text{HN}} + \Delta^{\text{NA}},
\]
with \(\Delta^{\text{HN}} = (\bar{S}_{\text{home}} - \bar{S}_{\text{neutral}}) / \bar{S}_{\text{overall}}\) and \(\Delta^{\text{NA}} = (\bar{S}_{\text{neutral}} - \bar{S}_{\text{away}}) / \bar{S}_{\text{overall}}\) [PAGE 27]. The paper notes that summing these two terms reproduces Fig. 1 [PAGE 27].

**Rating percentage index and advantage.** The NCAA RPI is described as a function of team winning percentage (WP), opponents’ winning percentage (OWP), and opponents’ opponents’ winning percentage (OOWP) [PAGE 31]. The exact printed equation image is not recoverable from the supplied markdown; symbolically,
\[
\mathrm{RPI} = f(\mathrm{WP}, \mathrm{OWP}, \mathrm{OOWP}),
\]
with the relative in-game strength measure defined as
\[
\Delta \mathrm{RPI}' \;=\; \mathrm{RPI}_{\text{home}} - \mathrm{RPI}_{\text{away}}.
\]
The Kolmogorov–Smirnov test via `ks.test` confirms the high- and low-attendance distributions of \(\Delta \mathrm{RPI}'\) differ significantly across all gender–division combinations [PAGE 32].

**Attendance matching algorithm.** Twenty-five equal-width bins \(b_1,\dots,b_{25}\) span the low-attendance \(\Delta \mathrm{RPI}'\) range. For each bin \(b_i\), let \(n_i = \#\{j : \Delta \mathrm{RPI}'_j \in b_i,\; j \in \text{low attendance}\}\). High-attendance observations are sampled with replacement within each bin until \(n_i\) values are obtained, forming the adjusted distribution \(H_i\); bins with no high-attendance observations yield \(H_i = \varnothing\) [PAGE 33]. The concatenated adjusted sample is then compared to the low-attendance sample with a KS test [PAGE 33].

**Generalized Poisson regression.** For game \(i\) and statistic count \(Y_i\),
\[
Y_i \sim \mathrm{GenPoisson}(\lambda_i, \theta), \qquad \log(\lambda_i) = \beta_0 + \beta_{\text{home}} H_i + \beta_{\text{poss}} P_i + \beta_{\text{RPI}} \Delta \mathrm{RPI}'_i + \beta_{\text{att}} A_i,
\]
where \(H_i \in \{0,1\}\) is home-away status, \(P_i\) is possessions, \(A_i\) is attendance group (low/medium/high), and \(\theta\) is the dispersion parameter [PAGE 34]. Percent impact of the home coefficient is recovered by
\[
\text{Percent Impact} = 100 \times \left( e^{\beta_{\text{home}}} - 1 \right) \%.
\]
[PAGE 34]

**Multiple-testing correction.** Section 4 performs \(14 \times 6 = 84\) t-tests, setting \(\alpha = 0.05 / 84 = 0.0006\) [PAGE 32]. Section 5 evaluates 11 statistics, using \(\alpha = 0.05 / 11 \approx 0.0045\) [PAGE 34].

**Units and breakdown regimes.** Counts (AST, BLK, PF, FTA, etc.) are dimensionless event totals; possessions are a unitless count; RPI is a unitless index bounded in \([0,1]\); attendance is measured in persons [PAGE 26, PAGE 27, PAGE 31]. Dispersion parameters across statistics range from 0.68 to 3.01, and equidispersion is rejected for all statistics except DREB [PAGE 34]. High-leverage games in the top 0.1% of possessions induce negative residuals and underestimation [PAGE 34]. Neutral games constitute 7%–11% of each gender–division cell and are excluded from the Section 5 home–away models [PAGE 27]. Attendance is missing for 5,847 games and excluded from Section 4 [PAGE 27].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Stefani (2008), who frames traditional home advantage as a function of travel, spectator support, and home-team familiarity [PAGE 26]. Anderson and Pierce (2009) established the NCAA-specific precedent that basketball referees call more fouls on away teams [PAGE 26]. Van Bommel and Bornn (2017) provided the scorekeeper side, documenting model-quantified inconsistent scorekeeper behavior for assists and blocks in the NBA and quoting a former NBA scorekeeper that officials are “given broad discretion over two categories: assists and blocks” [PAGE 28; citation on PAGE 25]. Harville and Smith (1994) previously used neutral-location games to quantify home-court advantage, a tool the authors claim has never before been applied to box-score statistics [PAGE 26]. The theoretical bridge to crowd effects is supplied by Moskowitz and Wertheim (2011), who argue home-win advantages are primarily due to referee bias, and Garicano et al. (2005), who show soccer referee favoritism toward the home team increases with attendance [PAGE 30–31].

A multi-week trap lies in the paper’s own stability finding: the average relative variance of home advantages across seasons within a gender–division combination is 0.15, compared to 0.80 across gender–division combinations [PAGE 27]. This temporal stability is often interpreted as evidence of a fixed structural cause, but it is a trap because it can mask slow-moving confounders: scorekeeper crew turnover, conference realignment altering travel distances, gradual rule emphasis shifts (e.g., freedom-of-movement interpretations affecting block/charge calls), and NCAA tournament selection protocols that change which teams appear at neutral sites in March versus November. Neutral-site games are disproportionately populated by stronger teams and, in D1, by notably higher attendance [PAGE 27], so the neutral–away contrast is not a clean counterfactual across the season arc; it is contaminated by endogenous team selection into high-visibility events. Because RPI is itself a function of win–loss records that may already embed home advantage, controlling for RPI in later weeks of a season risks partialling out part of the treatment effect rather than isolating a pure location effect [PAGE 31, PAGE 35].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of game officials, under high-attendance stress, to revert to socially pressured heuristics rather than neutral rule application. The paper finds PF and FTA—the two referee-driven statistics—exhibit significant high-versus-low attendance differentials in the most gender–division combinations after RPI matching [PAGE 32], consistent with Garicano et al.’s finding that referee bias scales with audience size [PAGE 30–31]. Scorekeepers exhibit a parallel habit: because assists and blocks involve “broad discretion” [PAGE 28], they regress to home-favorable judgment calls when crowd noise and home-team stakes are elevated [PAGE 25, PAGE 28].

The counter-trap operates at the strategic level. Away teams anticipating referee leniency toward the home side may alter shot selection, reduce aggressive drives that draw fouls, or modify defensive intensity to avoid marginal block/charge whistles. Those behavioral adjustments change box-score totals (FTA, PF, STL) independently of any direct referee action, creating a recursive loop: expected referee bias induces away-team restraint, which then appears in the statistics as a home advantage even if the referee never blows a biased whistle. Scorekeepers, aware that their decisions feed into end-of-season awards and professional draft evaluations [PAGE 26], may also moderate or amplify discretion depending on perceived scrutiny—a second-order theory-of-mind effect the box-score model cannot observe.

The clock layer compounds this recursion. End-of-game clock management systematically raises PF and FTA through intentional fouling and bonus situations. Close games, which generate late-clock fouling, may also draw larger crowds or feature stronger teams, so attendance and clock-driven foul clustering are not orthogonal. The regression controls for possessions and attendance but does not explicitly model score differential or time remaining [PAGE 34], leaving a feedback path: crowd size influences referee threshold; referee threshold alters score; score alters end-game clock strategy; clock strategy alters PF/FTA totals; the resulting statistics then reinforce perceptions of home-court advantage for future weeks.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. NCAA basketball is played indoors on standardized courts with invariant rim height, backboard specifications, and court dimensions. These physical constants apply identically to home and away teams within a venue and cannot generate a selective home-team boost in AST (15.1% average) and BLK (18.8% average) while leaving FGA (0.9%) nearly flat [PAGE 27–28]. Any physical court-factor explanation must predict uniform effects across objective and subjective statistics, which the data reject [PAGE 28].

Biomechanical layer. Travel fatigue and circadian disruption are plausible away-team disadvantages, but they should scale with distance and time-zone changes, not with divisional hierarchy in the direction observed. The paper finds home advantages sorted D1 > D2 > D3 for BLK, AST, FTA, PTS, PF, FG%, 3FG%, and OREB [PAGE 30, Table 2]. If biomechanical travel fatigue were dominant, the effect should be strongest where travel is longest and most frequent, not monotonically tied to divisional revenue and attendance profiles. Moreover, D2 and D3 teams typically bus regionally, minimizing time-zone disruption, yet the subjective-statistic bias remains ordered by division [PAGE 30–31].

Weather layer. Indoor climate control eliminates outdoor weather as a game-day variable. Humidity and temperature could theoretically affect ball grip and shooting touch, but such effects would primarily depress objective shooting percentages (FG%, FT%) for the away team, whereas the observed pattern shows the largest home boosts in the most subjective counting statistics (AST, BLK, PF) and the smallest in objective shooting metrics [PAGE 27–28]. FT% is negatively affected for away teams versus neutral teams (-1.1%) while home teams gain only 0.2% over neutral [PAGE 27], a pattern inconsistent with a uniform weather-induced shooting penalty.

Verdict. The physical and biomechanical layers are necessary conditions for playing the game but are insufficient causes of the measured statistic differentials. Because the bias is concentrated exactly where human judgment has the widest discretion—assists, blocks, fouls, and free throws—and because the attendance-matched analysis isolates referee-driven statistics as the only significant crowd responders [PAGE 32], the cross-layer veto assigns causal necessity to the human decision layer (scorekeeper and referee) while rejecting physical, biomechanical, and weather layers as primary explanations.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Neutral-site referee crew rotation. In NCAA tournament games neither team is home, and referee crews are assigned by conference office rather than by host team. Veto test: compare PF and FTA differentials between the two teams at neutral sites against the home–away PF/FTA effects estimated in Table 4 [PAGE 34]. Prediction: if referee bias requires home-status salience, the neutral-site PF and FTA percent impacts should be statistically indistinguishable from zero (|percent impact| < 1%, p > 0.05 after Bonferroni), while AST and BLK should also collapse because no home scorekeeper is present.

Scenario 2: Blinded scorekeeper protocol. Conduct a controlled subset of D3 games in which box-score entry is performed by remote statisticians blinded to team uniforms, crowd noise, and venue identity, using only a standardized video feed without audio. Veto test: measure AST and BLK home–neutral percent increases in the blinded subset versus the unblinded historical baseline [PAGE 28]. Prediction: blinding should reduce the AST and BLK home advantage to within the neutral–away margin (residual < 2 percentage points), verifying that the historical 11.3% AST and 12.3% BLK home-over-neutral effects [PAGE 28] are attributable to on-site scorekeeper discretion rather than on-court performance.

Scenario 3: Closed-door attendance shock. Compare games played without spectators (e.g., public-health protocols) to matched games with spectators, controlling for \(\Delta \mathrm{RPI}'\) via the same 25-bin matching procedure [PAGE 33]. Veto test: run the two-sample t-test on home–advantage means for PF and FTA between spectator and no-spectator conditions [PAGE 32]. Prediction: removing the crowd should eliminate the significant high-versus-low attendance differential for PF and FTA (p > 0.0006), while FGA and FT% remain stable, confirming the attendance effect operates through spectator presence rather than through team-strength confounds.
</RLVR_COUNTERFACTUAL_VETOES>