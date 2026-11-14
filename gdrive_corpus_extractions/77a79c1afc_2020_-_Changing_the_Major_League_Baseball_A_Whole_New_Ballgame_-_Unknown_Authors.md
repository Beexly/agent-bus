---
source: "2020 - Changing the Major League Baseball A Whole New Ballgame - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2020"
pages: 20
model: deepseek/deepseek-v4.1-flash-1017
words: 9353
---

<NATIVE_REASONING>
We need answer. Need follow strict invariants. Need produce >=1000 words across exact XML sections. Need analyze source as DRIVE SOURCE. We must not mention betting lines/odds/spreads/totals/moneylines. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes, cite exact [PAGE N] and verbatim quotes when source pages provided. Need source pages? PDF pages 20 but provided text has page numbers at bottom: 1,2,...20. We can cite [PAGE 1] etc. Need be careful exact page mapping. We have page markers in text? There are page numbers at bottom. Need map quotes to page. Let's derive page numbers.

Text begins title page 1. PAGE 1 includes title Intro, mention Section 2-6, footnote. It has "1" at bottom after footnote? The text shows "> i This was known... \n\n\n\n1". So page 1 is intro. [PAGE 1] quote "Three changes in the last five seasons is, to say the least, uncharacteristic." etc.

Page 2: Figure 1, Section 2 beginning, theories, MLB committee lower drag coefficient unable physical difference. "2" at bottom. [PAGE 2] quotes.

Page 3: Section 2.1.1 Data methodology; ball construction; 12 from 2014 and 14 2016-2017; 16 variables. [PAGE 3]

Page 4: Findings, 9.0% thicker laces; Figure 3; wraps per cm; thickness 0.78±0.030mm and 0.85±0.023mm. [PAGE 4].

Page 5: 2.2 Effect pitchers blisters; 2.3 aerodynamics; 2.3.1 methodology; Figure 5. [PAGE 5].

Page 6: Findings seam bulging 0.66% (~0.5mm), 2018 0.19% (~0.15mm); discussion manufacturing wet leather/cotton; conclusion unintentional. [PAGE 6].

Page 7: Section 3 2019 regular season; four aspects; Figure 7; footnote pill. [PAGE 7].

Page 8: 3.1 Data; 3.2 Methods; size; friction method; Figure 8. [PAGE 8].

Page 9: leather smoothness coefficients; 27.6% lower; seam height method; Figure 10. [PAGE 9].

Page 10: roundness; 2019 -0.04% ±0.31%; 2000-2014 0.66±0.34%; 2018 0.28±0.33%; lace thickness; Figure 12. [PAGE 10].

Page 11: lace thickness continuation; 2019 decreased to pre-2015; Figure 13; 3.3 source; Marinak quote; recommendations; leather smoothness; lace thickness. [PAGE 11].

Page 12: 3.3.3 roundness and seam height; drying process; hot air; ~20% production; lower seams decrease drag; conclusion process improvement; Section 4 postseason; MLB statement quote; follow-up studies. [PAGE 12].

Page 13: data acquisition; purchased 36; batches; methodology; Figure 14. [PAGE 13].

Page 14: findings quality control; BEBRBSR seven failed; date manufacture; batch codes; Figure 15. [PAGE 14].

Page 15: Figure 16; 4.4 Reevaluation; MLB statement Pat Courtney/Morgan Sword; Rawlings Dennis Sollberger quote; commercial balls. [PAGE 15].

Page 16: 4.5 implications; Mike Thompson quote; 5 Discussion; messaging; Manfred/Rawlings "within specifications"; 2019 regular season Manfred "haven't changed process..." [PAGE 16].

Page 17: discussion continuation; Home Run Committee changes to yarn/pill/leather/drying; "largely technical..." quote; postseason statement; Thompson; 5.2 2019 committee; 60%; seam height 35%, 65%; alternate hypotheses. [PAGE 17].

Page 18: 2019 committee continuation; recommendations track manufacturing; conclusions; standardization; quote "It is the understanding..." [PAGE 18].

Page 19: conclusions continuation? Actually page 18 includes "6. Conclusions" and quote; page 19? Let's check: after quote and discussion, "Unfortunately..." likely page 18? Page number 18 appears after Crash Davis quote? Let's map: Text around: "## 6. Conclusions" then paragraphs. At bottom after Crash Davis quote:
```
_“I don’t know where it’s gonna go.”_ 



18
```
So page 18 includes Section 6 conclusion through Crash Davis. Then references start page 19 with [1]-[16]. Page 20 references [17]-[28]. Good.

Need answer with sections:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit. Must include derivation? Need maybe formal reasoning and citations. We can mention physical equations: drag force F_D = 1/2 rho v^2 C_D A; ballistic range sensitivity; Reynolds number; Magnus; static friction mu_s = tan theta; seam bulging percent; lace thickness wraps/cm relation; manufacturing drying/cotton tensile. Need zero toy ratios. We can use formal equations with SI units. We can discuss causal chain and breakdown regimes: low Re? Baseball Re ~ 1e5? Need accurate? A baseball diameter 0.073 m, v 40 m/s, nu air ~1.5e-5 m2/s => Re ~ 2e5. Drag crisis around Re ~1e5-2e5; seam height relative to boundary layer; surface roughness. We need avoid fake ratios. Equations okay. Need exact singularity/breakdown regimes: e.g. mu_s=tan theta valid at impending slip, breakdown if theta >=90 or surfaces adhere/viscoelastic; seam-adjacent diameter difference percentage not valid if seam measurement within 2mm overlaps; batch code inference not deterministic; drag force equation assumes constant C_D over trajectory, breakdown at transonic? For baseball no. We can state regimes. Need "gray-zone audit" maybe distinguish measured quantities from inferred effects. Must cite [PAGE N] and verbatim quotes. Need use quotes exact.

Sections:
<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown. Need include source operator? Maybe operators: structural disassembly, caliper diameter, wraps-per-cm, friction angle, seam height, batch code. Equations with units. Cite pages. Include exact quotes. At least 1,000 words across sections. Need likely 1500+. Need no betting lines. Need no "toy equations" - but equations formal. We can use source equations? The source has µs = tanθ. Also circumference, wraps per cm. Need not invent fake ratios. But can define percent difference: (D_avg - D_seam)/D_avg ×100%. That's formal. Lace thickness from wraps per cm: t = 1/(n/L)? Actually source: wraps per cm value lower for thicker laces. They measured 40 wraps over 3 cm vs 36 over 3 cm. If wraps per cm = N/L. Thickness t ≈ 1/(N/L) = L/N (assuming one wrap per thickness). For 2014: 3/40 cm =0.075 cm=0.75mm? They state 0.78±0.030mm. For 2017: 3/36=0.0833cm=0.833mm, stated 0.85±0.023. So t = L/N with calibration. Use this equation. Need mention not exact due compressibility. Good.

Need <RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps. Need discuss lineage: 150 years, 2015 home run surge, 2017 record, 2018 drop, 2019 regular/postseason, MLB committee, The Athletic, Rawlings purchase, batch codes, previous research Kensrud 2015, Nathan 2014, Smith baseballaero. Multi-week traps: assuming "within specifications" means no change; conflating lace thickness with seam height; treating batch codes as public rubric; assuming postseason balls same batch/season; assuming ball-to-ball variation impossible to regulate; assuming smoothness lowers drag (disproven [PAGE 11? ref 16]); assuming roundness isolated vs effective seam height convolved. Need mention "multi-week traps" maybe temporal traps across weeks: 2015 midseason change; 2019 postseason day-to-day drag; 2020 unknown. We can cite pages.

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. Need interpret: Recursive theory of mind: modeling MLB/Rawlings/committee beliefs, crisis habit regression (stakeholders default to "within specifications", "same process", "same batches"), counter-trap (if MLB admits manufacturing changes then liability/standardization; if committee admits unknown drag sources then regulatory vacuum), clock (season timeline, production schedules, 2020 uncertainty; decisions under time pressure). Need cite pages. Maybe discuss nested beliefs: author expects MLB to address standardization; MLB expects public to accept "within specs"; Rawlings says commercial balls; committee assumes same process. Need mention "clock" as manufacturing drying one week/two days, Q1 production, postseason stamping, previous-year inventory. Need formal? This section can be narrative. Must include >=? Overall 1000 words. Need no betting. Good.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need adjudicate whether physical evidence vetoes claims. Physical: lace thickness 9% thicker, seam bulge 0.66 vs 0.19, friction 27.6% lower, seam height 54.6%, roundness -0.04; drag lower. Biomechanical: pitcher blisters from prouder/bumpier seams; grip; not direct home run. Weather: climate change cited as theory [PAGE 2] but report found lower C_D; weather not necessary. Need "veto proof": if ball structural data show no change, then manufacturing explanation vetoed; but here changes. Need note aerodynamic causality: leather smoothness effect disproven [PAGE 11/ref 16? Actually page 11 "recent work has shown that smoothness...does not contribute to lower drag" [PAGE 11]. Seam height lower -> drag. Lace thickness itself unconnected with aerodynamics [PAGE 17]. Roundness perhaps convolved. Weather veto: no evidence in source; climate change mentioned as theory, not measured; cannot veto manufacturing because controlled structural measurements. Biomechanical veto: blisters don't cause home runs; separate outcome; thicker laces plausibly blister. Need exact quotes.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning from Verifiable Rewards? Need 3 counterfactual veto scenarios. Need make verifiable predictions. No betting. Scenarios: (1) If 2019 postseason balls were truly from 2019 regular-season batches, then lace thickness distribution should match 2019 regular season and batch codes should show 2019 B[x]BR[x][x] / SL codes; observed ERBSLAK etc thicker laces veto same-batch claim. Prediction: audit batch records, measure laces; if >? Need specific thresholds? Use source numbers: 2019 regular laces pre-2015 thin, late-2015-2018 thick. Postseason ERBSLAK/ERBSLAO/EOBSLAO thick. Veto if measured mean lace thickness of on-field postseason balls equals 2019 regular within uncertainty. But source says preliminary actual game balls show some pre-2019 inventory [PAGE 16? "preliminary work involving actual 2019 postseason game balls shows that some part of the postseason population was taken from pre-2019 inventory" [PAGE 16? Actually page 16 under 4.5]. Good.
(2) If leather smoothness caused lower drag, then 2019 balls' 27.6% lower mu_s should correlate with lower C_D; independent research says smoothness at MLB level not contribute [PAGE 11]. Veto: wind tunnel measure C_D vs mu_s across balls; prediction no significant correlation after controlling seam height. 
(3) If thicker laces directly increase carry via aerodynamics, then lace thickness should correlate with C_D after controlling seam height/roundness; source says lace thickness in-and-of-itself unconnected with aerodynamics [PAGE 17], and 2019 thin laces with low drag vs 2000-2014 thin laces with high drag due shape. Veto: if C_D vs lace thickness no correlation. Prediction.
Could include (4) batch code date inference: if batch codes don't map to date, then inference invalid; verify with Rawlings rubric not public. But need exactly 3. Need "verifiable RLVR veto scenarios + predictions". Need formal thresholds? Could use predicted sign and statistical significance? RLVR verifiable means can be checked. We can state "reject if ... within 1 SD" etc. But source uncertainties. Need be precise. Avoid fake ratios? We can use hypothesis tests. For lace thickness: predicted mean wraps/cm for postseason transition batches closer to late-2015–2018 than 2019; if 95% CI overlaps 2019 regular mean, veto. Good.

Need ensure no betting lines. No mention. Need cite [PAGE N] with exact quotes. Must not fabricate quotes. Use exact verbatim from source. Need quotes carefully.

Let's list exact quotes and page mapping.

Page 1:
"Three changes in the last five seasons is, to say the least, uncharacteristic." [PAGE 1]
"Beginning in the second half of the 2015 season, home run rates began to rise, hitting an all-time high in 2017." [PAGE 1]
"MLB rules consider a blister an injury, requiring a player to go on the Injured List." [PAGE 1]
"2019 also marked the first year that the Major League baseball was used in Triple-A, where the change was so dramatic that home runs increased by 60%." [PAGE 1]
"Then, at the start of the 2019 MLB postseason, the ball changed again—this time deadened, producing a sudden drop in offense." [PAGE 1]

Page 2:
"the committee found that the increase in home runs was the result of a ball with a lower drag coefficient." [PAGE 2]
"However, they were unable to find a physical difference that could account for this change." [PAGE 2]
"climate change" in theories [PAGE 2].
"pre-2015 balls were structurally different than those from 2016-2017" [PAGE 2]

Page 3:
"twelve from 2014 and fourteen from 2016-2017" [PAGE 3]
"five layers" etc [PAGE 3]
"I recorded sixteen independent variables" [PAGE 3]

Page 4:
"the red cotton laces; those used to stitch the seams on the 2016-2017 balls were 9.0% thicker than those on the 2014 balls." [PAGE 4]
"2014 baseballs have laces with a thickness of 0.78±0.030mm, while 2017 laces are 0.85±0.023mm thick." [PAGE 4]
"thicker laces will produce a lower value" [PAGE 4].

Page 5:
"A likely consequence of thicker laces may be the “epidemic” of pitcher blisters that occurred during 2016-2018." [PAGE 5]
"Increased lace thickness will produce slightly prouder stitches, creating a “bumpier” seam." [PAGE 5]
"Since blisters are often associated with tightly gripping or rubbing the seams, the rougher texture could be a strong factor in higher blister rates." [PAGE 5]
"Based on my structural findings, I postulated that thicker laces might lead to a more spherically symmetric ball." [PAGE 5]

Page 6:
"All of the 2000-2014 baseballs had greater diameters near the seams, with an average difference of 0.66% (~0.5mm)." [PAGE 6]
"While those in the 2018 sample also showed a larger average seam-adjacent diameter, it was less pronounced (0.19%, or roughly ~0.15mm) and not systematic." [PAGE 6]
"the change that produced the 2017 Home Run Surge was probably unintentional." [PAGE 6]
"wet cotton dried under tension will remain stretched." [PAGE 6]

Page 7:
"At the start of the 2019 regular season, the ball changed again, and home runs skyrocketed" [PAGE 7]
"lower seams and leather so smooth that the mud used to “rub up” the balls before a game didn’t stick." [PAGE 7]
"Although pill-centeredness was also suggested by the committee, I did not have access..." [PAGE 7] footnote. Actually page 7.

Page 8:
"no systematic difference" size [PAGE 8]
"coefficient of static friction (µs = tanθ) as a proxy for relative smoothness" [PAGE 8]

Page 9:
"the coefficient of static friction for the 2019 balls was 27.6% lower, a statistically significant result." [PAGE 9]
"the seams on the 2019 balls were only 54.6% ± 15.0% that of the average from previous seasons" [PAGE 9]
"While these data cannot measure the extent of the effect, it is likely that lower seams would improve aerodynamics." [PAGE 9]

Page 10:
"those from 2019 deviated from spherical by only -0.04% ± 0.31%." [PAGE 10]
"Not only were the 2019 balls virtually round, what bulging they did show was slightly negative, suggesting that some seams could be slightly “embedded” in the leather." [PAGE 10]
"the 2019 baseballs were markedly different, with lace thickness decreasing to that of pre-2015" [PAGE 10? The sentence starts page 11? Let's check: Page 10 has "As with the other measurements, the 2019 baseballs were markedly different, with lace thickness decreasing to that of pre-2015 (Figure 13)." Actually after Figure 12 on page 10? The text: "As with the other measurements, the 2019 baseballs were markedly different, with lace thickness decreasing to that of pre-2015 (Figure 13)." appears just before page 10 bottom? It is after "However, the 2000-2014 laces were..." Wait text order: Page 10 includes Figure 12 and paragraph "The previous results... The spread in lace thicknesses... However, the 2000-2014 laces were, on average, thinner than those from late 2015-2018." Then page 11 begins "As with the other measurements, the 2019 baseballs were markedly different..." Actually the page number 10 appears before that? Let's inspect original: 
```
10



As with the other measurements, the 2019 baseballs were markedly different, with lace thickness decreasing to that of pre-2015 (Figure 13). This result was inconsistent...
```
The "10" is at bottom after preceding paragraph. The sentence after "10" likely starts page 11. Wait in Markdown, page number appears then blank then text. In source, after "Figure 12... [page 10]" then "10" then "As with..." So yes "As with..." is page 11. Need map carefully. Page 11 includes "As with..." and Figure 13 and 3.3. Page 11 quote "the 2019 baseballs were markedly different, with lace thickness decreasing to that of pre-2015" [PAGE 11]. Good.
Page 11:
"the 2019 laces were comparable to those used pre-2015, it is entirely possible that this change was an attempt to mitigate pitcher blisters caused by thicker laces." [PAGE 11]
"recent work has shown that smoothness—particularly at the level typical of Major League baseballs—does not contribute to lower drag." [PAGE 11]
"MLB announced that it was purchasing part of the baseball manufacturer, Rawlings." [PAGE 11]
"“We are particularly interested in providing even more input and direction on the production of the official ball.”" [PAGE 11] (Chris Marinak)
"MLB should reevaluate the specifications on parameters of the baseball that affect the game" [PAGE 11]

Page 12:
"Pre-2019, making a single baseball took approximately one week, two days of which were dedicated to air-drying." [PAGE 12]
"cotton dried under a hot air flow shrinks back to original shape." [PAGE 12]
"Were hot air introduced to the drying process, even thin laces would no longer stretch, producing a rounder ball." [PAGE 12]
"the new policy would still require a ~20% increase in production." [PAGE 12]
"studies have shown that lower seams do, in fact, decrease drag." [PAGE 12]
"the improved aerodynamics of the 2019 regular season ball are most consistent with a manufacturing change." [PAGE 12]
MLB statement: "The baseballs used in Major League Baseball are manufactured in batches. Balls that are used in the Postseason are pulled from the same batches as balls used in the regular season. Regular season and Postseason balls are manufactured with the same materials and under the same processes. The only difference is the Postseason stamp that is placed on the ball. As has been previously acknowledged, however, the drag on the baseball can vary over different time periods." [PAGE 12]
"follow-up studies found that not only was the postseason drag higher, it changed day-to-day." [PAGE 12]

Page 13:
"purchased 36 baseballs—12 stamped “2019 Postseason” and 24 stamped “2019 World Series.”" [PAGE 13]
"four batches, each identified by a seven-letter designation stamped on the inside of a leather cover." [PAGE 13]
"BEBRBSR, ERBSLAK, ERBSLAO, and EOBSLAO" [PAGE 13]
"Balls with stitches going in the opposite direction have been stamped upside-down and are disqualified from on-field use." [PAGE 13]

Page 14:
"of twelve baseballs in question, seven would likely have failed Rawlings’ game-ball quality control standards." [PAGE 14]
"the entire sample had laces with thicknesses consistent with late-2015 – 2018 construction, rather than 2019 construction" [PAGE 14]
"the higher drag observed during the postseason was due to the presence of game balls manufactured for previous seasons" [PAGE 14] (actually page 14 bottom? Yes "Based on these findings..." before page 15? Let's check: page 14 includes Figure 15 and 4.3.2, Figure 16? Wait page 14 has Figure 15, then page 14 number? Text: "Figure 15... [page 14?]" then "older balls contain six characters..." then "Figure 16... [page 15?]" Hmm need map. The source:
```
14



Figure 16: Leather covers from 2019 postseason balls...
```
Actually after "Based on these findings, it seemed likely..." there is blank and "14" maybe? Let's re-evaluate: At top of page 14? The page number 14 appears after Figure 15? Source segment:
```
Figure 15: Average lace thickness... 



14



Figure 16: ...
```
Wait source shows "14" after Figure 15? Let's scroll: In user text:
```
Figure 15: Average lace thickness, represented as wraps-per-cm. The data are the same as for Figure 13, with the removal of the 2000-2014 sample and the addition of lace thicknesses derived from Postseason Batches ERBSLAK, ERBSLAO, and EOBSLAO. 



14



Figure 16: Leather covers from 2019 postseason balls. Character combinations in red appear elsewhere on 2018 balls...
```
Then after Figure 16 and paragraph, "15" appears. So page 14 includes Figure 15 and maybe text before it? Actually page 14 includes "4.3.2 Date of Manufacture" and Figure 15? The page number 14 is after Figure 15. The batch code paragraph likely page 14? Let's map: Page 13 ends with Figure 14 and page number 13? Source:
```
Figure 14: Baseballs from Postseason Batch BEBRBSR...
13



### 4.3. Findings
### 4.3.1. Quality Control
...
```
So page 13 includes Figure 14 and page number 13, then page 14 starts 4.3 Findings. Page 14 includes 4.3.1, 4.3.2 start, Figure 15, and page number 14. Then page 15 starts Figure 16 and batch code paragraph? Wait after page number 14, "Figure 16..." and paragraph "older balls contain six characters..." and "Based on these findings..." then "15" appears. So page 15 includes Figure 16, batch code paragraph, and 4.4 Reevaluation? Actually page 15 number at bottom after Sollberger quote? Let's see:
```
Figure 16... 
### 4.4. Reevaluation
...
15
```
So page 15 includes Figure 16, batch paragraph, 4.4. Yes. Page 14 includes Figure 15 and 4.3.1/4.3.2 up to "In order to verify production date, I compared..."? Wait the text "In order to verify production date, I compared the Batch Designation Codes..." appears before Figure 15? Source order:
```
### 4.3.2. Date of Manufacture
The remaining three batches... [PAGE 14]
...
Figure 15...
14
Figure 16...
... codes on older balls...
```
So "In order to verify production date" also page 14? It appears before Figure 15? Let's see source around:
```
The remaining three batches (ERBSLAK, ERBSLAO, and EOBSLAO) were stamped correctly. However, the entire sample had laces with thicknesses consistent with late-2015 – 2018 construction, rather than 2019 construction (Figure 15). This suggested they were not taken from 2019 regular season batches. 

In order to verify production date, I compared the Batch Designation Codes with samples from previous years (Figure 16). Despite the fact that manufacturing information can be easily obtained and verified through Rawlings’ Batch Designation rubric, it is not made available to the public. Fortunately, it is possible to spot patterns that are consistent with date of manufacture. For instance, codes on 



Figure 15: ...
14



Figure 16...
```
Interesting: "codes on" at end of page 14? Actually page break splits sentence "codes on" then Figure 15? Hmm page number 14 appears after Figure 15, but "codes on" before Figure 15? It says "For instance, codes on" then blank then Figure 15 then 14. That seems weird: Figure 15 inserted mid-sentence? Maybe source PDF has figure placement. The page number 14 likely at bottom of page 14, but Figure 15 may be on page 14? The sentence continues page 15 "older balls contain six characters..." So page 14 ends with "codes on" and page 15 starts "older balls contain six characters". Figure 15 may be placed on page 14 or 15? The page number 14 after Figure 15 suggests Figure 15 is on page 14. Fine. Quote "the entire sample had laces..." [PAGE 14]. "Based on these findings..." likely page 15. Need cite [PAGE 15] for that.

Page 15:
"older balls contain six characters, with a transition to seven characters in 2017." [PAGE 15] (starts with "older balls..." after page break; previous "codes on" page 14. We can quote full "older balls contain six characters, with a transition to seven characters in 2017." [PAGE 15])
"the middle character changes from O to R to S, with each letter roughly corresponding to the years 2017-2019." [PAGE 15]
"the batch-code prefixes and thicker laces suggested that these balls may have been manufactured at the very end of 2018 regular season production, and thus were intended for use during 2018." [PAGE 15]
"Based on these findings, it seemed likely that the higher drag observed during the postseason was due to the presence of game balls manufactured for previous seasons." [PAGE 15]
Pat Courtney/Morgan Sword quote: "confirmed with Rawlings prior to the beginning of this postseason that all of the game balls…used in the postseason were produced in the first quarter of 2019." [PAGE 15]
Sollberger quote: "commercial balls are inventoried as ‘blanks’ so that [Rawlings] can stamp-manage variability in customer demand. It is entirely possible that commercial balls produced in 2018 would be stamped for the 2019 postseason sales." [PAGE 15]

Page 16:
"preliminary work involving actual 2019 postseason game balls shows that some part of the postseason population was taken from pre-2019 inventory." [PAGE 16] (yes page 16 starts 4.5? Actually page 16 number after Thompson quote? Let's see source: after page 15 number, "4.5 Implications and Ongoing Work" and Thompson quote. Then "5. Discussion" etc. Page 16 number at bottom after Manfred quote? Let's map: Page 15 ended with Sollberger quote and page number 15. Page 16 starts 4.5, includes Thompson quote, 5.1, Manfred "within specifications", "haven't changed process..." maybe page 16 ends after "The key word..."? Actually page 16 number at bottom after "The key word here may be “meaningful.”"? Let's see source:
```
15

### 4.5. Implications and Ongoing Work
...
[Thompson quote]
...
### 5. Discussion
### 5.1. Official Statements...
...
Commissioner Rob Manfred... “within specifications,”...
...
While Manfred did acknowledge... “[t]hey [Rawlings] haven’t changed their process in any meaningful way. They haven’t changed their materials,”... The key word here may be “meaningful.” The original Home Run Committee found...
...
16
```
Yes page 16 includes 4.5 Thompson, 5.1 up to "The key word..." maybe. Quote "preliminary work..." [PAGE 16]. Thompson: "It is common and perfectly normal for baseballs to be produced in the previous year but not reach the field of play until the following year." [PAGE 16]. Manfred "within specifications" [PAGE 16]. Manfred quote "They haven’t changed their process in any meaningful way. They haven’t changed their materials" [PAGE 16].

Page 17:
"Rawlings regularly implements production improvements, including changes to the yarn (February 2014), the pill (March 2014, May 2015), the leather (June 2014, February 2017, August 2017) and the drying process (March 2016, February 2018)." [PAGE 17]
"largely technical in nature and very unlikely to be in any way related to the (2017) home run increase." [PAGE 17]
"MLB’s official statement said that, “[b]alls that are used in the Postseason are pulled from the same batches as balls used in the regular season.”" [PAGE 17] (quote in source page 17)
"60% of the 2019 Home Run Surge could be accounted for by baseballs with lower drag." [PAGE 17]
"this accounted for only 35% of Cd, with “factors other than seam height account[ing] for roughly 65% of the ball-to-ball differences.”" [PAGE 17]
"Other physical components—described as “alternate hypotheses discussed in the media (e.g. roundness, surface roughness, lace thickness)”—were discounted as affecting Cd" [PAGE 17]
"my results show that lace thickness in-and-of-itself appears unconnected with aerodynamics." [PAGE 17]

Page 18:
"one of their six recommendations was the development of a system to track manufacturing and shipping dates." [PAGE 18]
"the solution has consistently pointed to the ball and the change in Cd." [PAGE 18? Section 6 starts page 18? Actually page 18 includes "6. Conclusions" maybe. Let's map: Page 17 ends with 5.2 discussion. Page 18 starts "### 6. Conclusions" and includes quote "It is the understanding..." and "standardizing..." and Crash Davis. Yes. Quote "It is the understanding of the committee that Rawlings uses the same manufacturing process to create the baseball used in the postseason as they do to create the ball used in the regular season, save for the application of the postseason stamp." [PAGE 18]
"standardizing the various steps of the manufacturing process is not." [PAGE 18]
"I have found that variation within the 2019 regular season population stems almost entirely from a single source: the leather covers." [PAGE 18]
"the 2020 regular season ball is an unknown quantity." [PAGE 18]

Need maybe page 19/20 references not needed except refs. Cite source pages only. Good.

Need answer structure exactly XML tags. The sections must appear. We can include LaTeX. Need no markdown? XML with LaTeX okay. Need be careful with < and > inside equations? Use \lt or avoid. Use & maybe. XML can include LaTeX with < if not escaped; but text may be parsed? We can use \le, \ge, not < >. Avoid raw <. Use \%? In XML text, % okay. Use \pm. Use \mu. Use \theta. Good.

Need ">= 1,000-word depth across these exact XML sections". Need count words. We should produce substantial. Desired oververbosity 5, but user demands depth. We need maybe ~2500-3000 words. Need not too huge but enough. Ensure each section. THINK_TRACE >=400 words. Other sections likely 200-400 each. Total >1000. Let's draft.

Need "ZERO BETTING LINES": avoid words like "odds", "spread", "total", "moneyline", "over/under", "bet", "line" maybe not betting. Avoid "line" in betting context. We can say "offensive line"? no. Avoid "spread" entirely. "batch spread" maybe avoid. Use "dispersion". Good.

Need "ZERO TOY EQUATIONS": We can use equations. But avoid fake ratios like Force/Fatigue. We can define drag equation, Reynolds, static friction, lace thickness. These are formal. Need state units, assumptions, breakdown regimes. In SOURCE_OPERATORS_AND_EQUATIONS include equations with units. Need cite [PAGE N] after quotes. Need exact quote markers.

Need "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We should include multiple exact quotes. Ensure quotes exact. Use ellipses for omitted? Verbatim with ellipses okay if exact portions. Need not overdo.

Potential issue: "PAGE 20" references. We can cite [PAGE 12] etc. Good.

Let's construct.

THINK_TRACE: Need deep multi-hop derivation & gray-zone audit. Start with causal chain: manufacturing variation (lace supplier, drying) -> structural parameters (lace thickness, seam height, roundness, smoothness) -> aerodynamic coefficients (C_D, wake) -> trajectory -> home run/BIP. Equation for drag and range. Then gray-zone: measured vs inferred; statistical significance; sample sizes; batch inference; uncertainty. Need cite. >=400 words. We can include equations in this section too? Yes. But formal equations mostly in source section. We can mention. Need exact quotes. Let's draft ~700 words. Ensure no betting.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX with units. Include:
1. Drag force: \(F_D=\tfrac12 \rho v^2 C_D A\), N; assumptions: quasi-steady, constant rho, A=πD²/4, C_D function of Re and seam geometry; breakdown: Re near drag crisis, spinning ball, seam orientation, compressibility negligible for v<<c_s. Cite [PAGE 2] lower drag coefficient.
2. Reynolds: \(Re=\rho v D/\mu\) dimensionless. For baseball D~0.073m, v~40 m/s, rho~1.2 kg/m3, mu~1.8e-5 Pa s -> Re ~2e5. Breakdown: laminar/turbulent transition, surface roughness; not source quote but formal. Need not fake? Fine.
3. Static friction: \(\mu_s=\tan\theta\), dimensionless; page 8 exact quote. Assumptions: impending slip on inclined plane, uniform normal force, no adhesion; breakdown if theta>=90°, viscoelastic cover, moisture/mud.
4. Lace thickness from wraps: \(t = L/N\) (m) with N wraps over length L, page 4. Assumptions: one wrap per thickness, no compression; breakdown if nonuniform, oval, tension. Source gives 2014 40 wraps over 3 cm -> 0.75 mm ideal; reported 0.78±0.030 mm; 2017 36 over 3 cm -> 0.833 mm ideal; reported 0.85±0.023 mm. Need include exact quote.
5. Seam-adjacent diameter percent: \(\delta = 100(D_{\text{seam}}-D_{\text{avg}})/D_{\text{avg}}\) %; page 6, 10. Assumptions: caliper points ~2mm from seam; same ball. Breakdown if seam height/roundness convolved, hand variability.
6. Seam height: \(h_s = \bar t_{\text{edge}} - \bar t_{\text{center}}\) (m); page 9. Assumptions: inner surface smooth; two covers. Breakdown if cover puckering.
7. Maybe drag coefficient change and range: Range sensitivity \(\partial R/\partial C_D <0\); can state \(R\) decreases monotonically with \(C_D\) for fixed launch. Not exact. Use no toy ratio? It's formal derivative. Good.
Need cite exact quotes with page.

RETROCAUSAL_GENEALOGY: Historical lineage: 150 years [PAGE 1], steroid era [PAGE 2? Figure 1], 2015 surge, 2017 committee lower C_D but no physical difference [PAGE 2], author's disassembly [PAGE 3-4], 2019 regular season [PAGE 7-12], postseason [PAGE 12-16], 2019 committee [PAGE 17-18], Rawlings purchase [PAGE 11], batch codes [PAGE 13-15], Smith/Kensrud/Nathan refs [PAGE 5, 17, 12?]. Multi-week traps: 
- "within specifications" trap: specs are broad and don't address changes [PAGE 16].
- "same batches" trap: wording doesn't specify season [PAGE 17]; Rawlings blanks stamped later [PAGE 15].
- "lace thickness equals seam height" trap: source says conflation mistaken [PAGE 6].
- "smoothness lowers drag" disproven [PAGE 11].
- "roundness isolated" convolved with effective seam height [PAGE 17? Actually page 12? Let's cite [PAGE 12]? Source says "With a disassembled ball... with an intact ball, the two variables are convolved, and are sometimes defined as 'effective seam height.'" [PAGE 12]. Good.
- "ball-to-ball variability impossible to regulate" challenged by leather covers source [PAGE 18].
- "batch code inference" not public rubric, transition designations. [PAGE 14-15].
Need mention multi-week traps maybe "week-scale production and postseason timeline": one week production, two days drying [PAGE 12]; 2019 postseason day-to-day drag [PAGE 12]; 2020 unknown [PAGE 18]. Good.

RECURSIVE_THEORY_OF_MIND: Nested beliefs. Crisis habit regression: MLB/Rawlings default to "within specifications", "same process", "same materials", "same batches" [PAGE 16-17], committee assumes same process [PAGE 18]. Counter-trap: if admit "meaningful" changes, then standards/liability; if say "unknown drag sources", then regulatory failure; if blame batch mixing, then Rawlings inventory practice exposed. Clock: production schedule one week/two days air dry [PAGE 12]; ~20% production increase [PAGE 12]; Q1 2019 statement [PAGE 15]; previous-year inventory [PAGE 16]; 2020 unknown [PAGE 18]; teams unable roster decisions [PAGE 18]. Need discuss recursive ToM: author models MLB modeling public; Rawlings models commercial vs game balls; committee models Rawlings process. Use "crisis habit regression" meaning under scrutiny they retreat to familiar phrases. "counter-trap" maybe author's evidence traps them: if they say same batches, batch codes show transition; if say same materials/process, drying change; if say commercial balls not representative, Thompson admits previous-year inventory. "clock" time pressure: postseason begins Oct 1, day-to-day drag, production/drying. Need cite.

CROSS_LAYER_VETO_ADJUDICATION: Need physical/biomechanical/weather veto proof. We can structure as adjudication table? Use paragraphs. Physical veto: structural measurements veto "no physical difference" claim: 9.0% thicker laces [PAGE 4], seam bulging 0.66 vs 0.19 [PAGE 6], friction 27.6% lower [PAGE 9], seam height 54.6% [PAGE 9], roundness -0.04 [PAGE 10]. But need note not all are causal: smoothness not drag [PAGE 11], lace thickness not direct aero [PAGE 17]. Aerodynamic veto: lower seams reduce drag [PAGE 12]; lower C_D accounts 60% [PAGE 17]; seam height only 35% of C_D [PAGE 17]. Biomechanical veto: blisters from thicker laces plausible [PAGE 5]; but blisters do not explain home runs; they are separate health outcome. Weather veto: climate change was a considered theory [PAGE 2]; no measured weather variable in source; structural changes and batch evidence are sufficient to veto weather as sole explanation. Need "proof" maybe "veto proof" means if cross-layer claims conflict. State: physical layer vetoes pure weather or pure PED/hitting approach? Source mentions PED, hitting approach, exit velocity, decreased drag, climate change [PAGE 2]. The committee found lower C_D [PAGE 2]. Structural data support manufacturing. Weather not measured; cannot be excluded as modifier but not necessary. Biomechanical: pitcher blisters could be caused by thicker laces; not a veto on drag. Need mention "weather veto proof" maybe weather cannot veto manufacturing because ball changes are epoch-specific and batch-specific, not ambient. Good.

RLVR_COUNTERFACTUAL_VETOES: Need 3 scenarios. Use "RLVR" as verifiable reward? We can define "counterfactual veto" = evidence that would falsify. Need predictions. Make them checkable with source measurements. Scenario 1: same-batch claim. If true, postseason balls should have 2019 regular lace thickness and 2019 batch codes. Observed transition codes + thick laces [PAGE 14-15]. Prediction: on-field postseason sample with pre-2019 inventory will show mean lace thickness closer to late-2015–2018 and batch codes ER/EO with SL; if 95% CI overlaps 2019 regular mean, veto. Need avoid fake ratios. Use wraps/cm. Good.
Scenario 2: leather smoothness causal. If true, lower mu_s should predict lower C_D. Independent work says smoothness at MLB level does not contribute [PAGE 11]. Prediction: wind tunnel across balls, regression C_D on mu_s controlling h_s and roundness; if coefficient not significant, veto. Need no p-value? Can say "no statistically significant coefficient". Good.
Scenario 3: lace thickness direct aerodynamic. If true, thicker laces should increase carry via C_D. Source says lace thickness in-and-of-itself appears unconnected with aerodynamics [PAGE 17]; 2019 thin laces with low drag and pre-2015 thin laces with high drag due shape. Prediction: regression C_D on lace t controlling seam height/roundness; if no significant association, veto. Or batch code date: if Rawlings rubric maps ERBSLAK to 2019 not 2018, then date-of-manufacture claim veto. But need 3. We can include batch code as scenario 1.

Need "predictions" maybe include expected outcomes. Make explicit: "Prediction: ..." for each. Good.

Need be careful with XML: Use tags exactly. We can include LaTeX inside; no raw ampersand? Avoid. Use "\&" maybe not. Use "and" instead.

Need no "source page markers" missing. We should cite [PAGE N] frequently. Good.

Let's write final. Need ensure word count. I will aim ~2500 words. Let's draft in final only.

Check exact quotes: Need quote "Major League Baseball (MLB) has a long and storied history, going back 150 years." [PAGE 1]. Good.

Need maybe mention "home runs per ball-in-play (BIP)" [PAGE 2? Figure 1 page 2]. Source says "Figure 1: Regular season home runs per ball-in-play (BIP) from 1990 through 2019." [PAGE 2]. Good.

Need no betting line terms. "line" appears in "lineage" okay? "guideline"? Avoid "line" as betting. "lineage" not betting. "statistical line"? no.

Potential issue "RLVR" maybe user expects "RLVR counterfactual vetoes" no need define. But we can say "verifiable reward check". Good.

Need "THINK_TRACE" >=400 words. We'll ensure.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s causal chain is not “home runs rose, therefore the ball changed.” It is a layered inference: manufacturing variation changes structural geometry, geometry changes boundary-layer separation and wake structure, wake structure changes the drag coefficient \(C_D\), and \(C_D\) changes carry distance and home-run probability per ball-in-play. The formal aerodynamic core is \(F_D=\tfrac12\rho v^2 C_D A\), where \(F_D\) is drag force in newtons, \(\rho\) is air density in \(\mathrm{kg\,m^{-3}}\), \(v\) is ball speed in \(\mathrm{m\,s^{-1}}\), \(C_D\) is dimensionless, and \(A=\pi D^2/4\) is cross-sectional area in \(\mathrm{m^2}\). The source states the 2017 committee found “the increase in home runs was the result of a ball with a lower drag coefficient” but “were unable to find a physical difference that could account for this change” [PAGE 2]. That is the key gray zone: aerodynamic inference can be correct while structural causality remains unidentified.

The author’s first multi-hop move is structural disassembly. Twelve 2014 balls and fourteen 2016–2017 balls were taken apart, with “sixteen independent variables” recorded [PAGE 3]. The only statistically significant difference was red cotton lace thickness: 2016–2017 laces were “9.0% thicker” than 2014 laces [PAGE 4], with reported values of “0.78±0.030mm” versus “0.85±0.023mm” [PAGE 4]. The wraps-per-centimeter measurement is not a toy ratio; it is an inverse-length proxy: \(t \approx L/N\), where \(N\) wraps over length \(L\) give thickness \(t\) in metres. Its breakdown regime is compressibility, non-circular lace cross-section, and tension-dependent packing; the source itself notes that “thicker laces will produce a lower value” [PAGE 4].

The second hop is geometric: thicker, stronger laces could reduce seam bulging during wet-leather construction. The source reports pre-2015 balls had “greater diameters near the seams, with an average difference of 0.66% (~0.5mm),” while 2018 balls showed “0.19%, or roughly ~0.15mm” [PAGE 6]. The mechanism is air-dried cotton: “wet cotton dried under tension will remain stretched” [PAGE 6], whereas hot-air drying shrinks cotton back [PAGE 12]. This is the strongest manufacturing link, but it is also a gray-zone inference: roundness and seam height are convolved on intact balls, and “effective seam height” can blur independent effects [PAGE 12]. The source later states that lace thickness “in-and-of-itself appears unconnected with aerodynamics” [PAGE 17], so the correct causal statement is not “thick laces reduce drag directly”; it is “thick laces may alter seam/roundness under a particular drying regime.”

The third hop is the 2019 regular-season ball. The author measures size, leather smoothness, seam height, and roundness. Size shows “no systematic difference” [PAGE 8]. Static friction falls: “the coefficient of static friction for the 2019 balls was 27.6% lower, a statistically significant result” [PAGE 9]. Seam height is “only 54.6% ± 15.0% that of the average from previous seasons” [PAGE 9]. Roundness deviates by “only -0.04% ± 0.31%” [PAGE 10]. But the source also warns that leather smoothness “does not contribute to lower drag” at MLB-typical levels [PAGE 11], so the friction result is a structural finding, not automatically an aerodynamic cause. The aerodynamic veto is therefore selective: lower seam height and roundness are plausible drag reducers; smoothness is not.

The fourth hop is the 2019 postseason. MLB’s statement says postseason balls “are pulled from the same batches as balls used in the regular season” [PAGE 12], yet the author finds four batch codes and laces “consistent with late-2015 – 2018 construction, rather than 2019 construction” [PAGE 14]. Rawlings later says “commercial balls are inventoried as ‘blanks’ so that [Rawlings] can stamp-manage variability in customer demand” and “commercial balls produced in 2018 would be stamped for the 2019 postseason sales” [PAGE 15]. This creates the central gray-zone audit question: is the purchased sample representative of on-field postseason balls? The author admits the commercial/game distinction and that postseason study is ongoing [PAGE 16], but also reports “preliminary work involving actual 2019 postseason game balls shows that some part of the postseason population was taken from pre-2019 inventory” [PAGE 16]. The inference is therefore plausible but not closed; the batch-code rubric is not public [PAGE 15], and date-of-manufacture inference depends on pattern matching.

The final audit is statistical and temporal. Sample sizes are small by industrial standards—12, 14, 20, 39, 36 balls—and ball-to-ball variation is large because construction is hand-influenced. The source explicitly says the 2019 committee’s seam-height correlation “accounted for only 35% of Cd,” with “factors other than seam height account[ing] for roughly 65% of the ball-to-ball differences” [PAGE 17]. Thus no single structural variable can be treated as sufficient. The correct multi-hop conclusion is probabilistic: manufacturing changes can shift \(C_D\) and carry, but the exact decomposition among seam height, roundness, lace tension, leather covers, and batch mixing remains underdetermined. That is why the paper’s strongest claim is procedural—standardize manufacturing and track dates—not a single-variable aerodynamic law [PAGE 18].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
1. Drag force and aerodynamic sensitivity. The source’s central aerodynamic quantity is \(C_D\). Formal expression:
\[
F_D=\frac12\,\rho\,v^2\,C_D\,A,\qquad A=\frac{\pi D^2}{4},
\]
with \(F_D\) in \(\mathrm{N}\), \(\rho\) in \(\mathrm{kg\,m^{-3}}\), \(v\) in \(\mathrm{m\,s^{-1}}\), \(D\) in \(\mathrm{m}\), and \(C_D\) dimensionless. Assumptions: quasi-steady flow, fixed air density over the trajectory, negligible compressibility for baseball speeds, and \(C_D\) treated as a function of Reynolds number, seam geometry, surface roughness, spin, and orientation. Breakdown regimes: transonic/compressible flow is irrelevant here; the important breakdown is the drag-crisis regime where boundary-layer transition makes \(C_D\) sensitive to small roughness and seam changes. The source states the 2017 committee found “the increase in home runs was the result of a ball with a lower drag coefficient” [PAGE 2].

2. Reynolds-number scaling:
\[
\mathrm{Re}=\frac{\rho v D}{\mu},
\]
dimensionless, with dynamic viscosity \(\mu\) in \(\mathrm{Pa\,s}\). For a baseball-scale object at typical pitch-exit speeds, \(\mathrm{Re}\) is order \(10^5\), near regimes where seam height and surface condition can affect separation. Breakdown: the formula assumes a characteristic length \(D\) and uniform freestream; spinning seams, seam orientation, and turbulent intensity invalidate a single-\(C_D\) assumption.

3. Static friction as a smoothness proxy. The source measures “the coefficient of static friction (µs = tanθ) as a proxy for relative smoothness” [PAGE 8]. Formally:
\[
\mu_s=\tan\theta,
\]
dimensionless, where \(\theta\) is the critical incline angle in radians or degrees. Assumptions: rigid cover sample, impending slip, uniform normal force, negligible adhesion, and dry contact. Breakdown: \(\theta \to 90^\circ\) makes the tangent singular; wet/muddy leather, viscoelastic cover deformation, and magnetic clamping artifacts break the simple Coulomb model. The source reports “the coefficient of static friction for the 2019 balls was 27.6% lower, a statistically significant result” [PAGE 9], but later notes that smoothness at MLB-typical levels “does not contribute to lower drag” [PAGE 11].

4. Lace thickness from wraps. The source uses “Wraps per Centimeter” and notes “thicker laces will produce a lower value” [PAGE 4]. A formal proxy is:
\[
t \approx \frac{L}{N},
\]
with \(t\) in metres, \(L\) in metres, and \(N\) the number of wraps. Assumptions: one wrap per lace thickness, uniform tension, circular cross-section, and negligible compression. Breakdown: oval lace, variable packing, and tension-dependent compressibility bias the estimate. Source values: 2014 laces at “40 times over 3 cm” and 2017 laces at “36 times over 3 cm,” yielding “0.78±0.030mm” and “0.85±0.023mm” [PAGE 4].

5. Seam-adjacent diameter and bulging. The source compares “average diameter” with “seam-adjacent diameter.” A formal percent difference is:
\[
\delta = 100\,\frac{D_{\text{seam}}-D_{\text{avg}}}{D_{\text{avg}}}\;\%,
\]
with diameters in metres. Assumptions: caliper points are within about \(2\,\mathrm{mm}\) of the seam, the same ball is measured at both locations, and hand-made ball-to-ball variation is averaged. Breakdown: if seam height and roundness are convolved, or if caliper pressure deforms leather, \(\delta\) is not a pure roundness measure. The source reports “0.66% (~0.5mm)” for 2000–2014 and “0.19%, or roughly ~0.15mm” for 2018 [PAGE 6], and 2019 at “-0.04% ± 0.31%” [PAGE 10].

6. Seam height by cover edges. The source measures “first the average thickness of each leather cover and then the average thickness at its edges” [PAGE 9]. Formally:
\[
h_s=\bar t_{\text{edge}}-\bar t_{\text{center}},
\]
with thicknesses in metres. Assumptions: the interior cover surface is smooth, each ball has two covers, and edge thickness is measured away from puckering. Breakdown: glued-down or puckered covers make removal alter texture, and seam height becomes an effective rather than geometric quantity. The source reports 2019 seams “only 54.6% ± 15.0% that of the average from previous seasons” [PAGE 9].

7. Batch-code inference. The source uses seven-character codes “stamped on the inside of a leather cover” [PAGE 13] and pattern rules such as “older balls contain six characters, with a transition to seven characters in 2017” [PAGE 15]. This is a categorical operator, not a physical equation. Its breakdown regime is overfitting: the rubric is not public [PAGE 15], and “transition designations” can share traits from two years [PAGE 15]. The source concludes “it seemed likely that the higher drag observed during the postseason was due to the presence of game balls manufactured for previous seasons” [PAGE 15], but this remains an inference unless Rawlings’ production records are audited.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage begins with the source’s claim that MLB “has a long and storied history, going back 150 years” [PAGE 1]. The modern problem is not novelty of ball changes but their frequency: “Three changes in the last five seasons is, to say the least, uncharacteristic” [PAGE 1]. The 2015–2017 surge, the 2019 regular-season ball, and the 2019 postseason deadening are treated as separate episodes, but they share a genealogy of manufacturing and governance. The source notes that in 2017 the committee found lower \(C_D\) but “were unable to find a physical difference that could account for this change” [PAGE 2]. That gap invited independent structural work: disassembly of “twelve from 2014 and fourteen from 2016-2017” [PAGE 3], leading to the lace-thickness finding [PAGE 4] and the seam-bulging hypothesis [PAGE 6].

The scientific lineage is explicitly cross-disciplinary. The source cites the Home Run Committee [PAGE 2], Kensrud et al. on seam height and carry [PAGE 5], later aerodynamic work on wake and seam height [PAGE 12], and independent work showing leather roughness does not explain laminar separation [PAGE 11]. The 2019 ball then produced a second structural cluster: lower static friction [PAGE 9], lower seam height [PAGE 9], and near-zero roundness deviation [PAGE 10]. The postseason introduced a batch-analysis lineage: codes BEBRBSR, ERBSLAK, ERBSLAO, and EOBSLAO [PAGE 13], seven upside-down balls in one batch [PAGE 14], and laces matching “late-2015 – 2018 construction, rather than 2019 construction” [PAGE 14].

The multi-week traps are several. First, the “within specifications” trap: MLB and Rawlings repeatedly say balls fall “within specifications” [PAGE 16], but the source argues this “fails to address any manufacturing changes, let alone those that might affect drag” [PAGE 16]. Second, the “same batches” trap: MLB says postseason balls “are pulled from the same batches as balls used in the regular season” [PAGE 12], but the statement “does not specify the season for which such batches are made” [PAGE 16–17]. Rawlings’ “blanks” inventory practice makes previous-year production compatible with later stamping [PAGE 15]. Third, the “lace equals seam” trap: the source says lace thickness is “generally—and mistakenly—conflated with seam height” [PAGE 6]. Fourth, the “smoothness lowers drag” trap: independent work shows smoothness at MLB levels “does not contribute to lower drag” [PAGE 11]. Fifth, the “roundness is independent” trap: intact-ball measurements convolve roundness and seam height into “effective seam height” [PAGE 12]. Sixth, the “ball-to-ball variation is unregulatable” trap: the source’s later work finds variation “stems almost entirely from a single source: the leather covers” [PAGE 18].

The clock matters genealogically. Pre-2019 production took “approximately one week, two days of which were dedicated to air-drying” [PAGE 12]; introducing the Major League ball at Triple-A required a “~20% increase in production” [PAGE 12]. A drying-process change could be a efficiency decision, not an intentional offensive lever. The 2019 postseason then showed drag that “changed day-to-day” [PAGE 12], which pushed the author toward batches rather than a single seasonal ball. Finally, the 2020 ball is “an unknown quantity,” leaving teams unable to make roster decisions [PAGE 18]. This is the retrocausal sequence: an efficiency or supplier change in one production window becomes a measurable aerodynamic change in a later competitive window, and then becomes a governance crisis when the postseason reveals mixed inventory.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The crisis-habit regression is visible in official language. MLB and Rawlings retreat to “within specifications” [PAGE 16], “haven’t changed their process in any meaningful way” and “haven’t changed their materials” [PAGE 16], and “same batches” [PAGE 12]. These are not measurements; they are institutional habits that model the audience as satisfied by procedural compliance. The author’s counter-trap is to show that “meaningful” is doing hidden work: the original committee itself found production improvements in yarn, pill, leather, and drying [PAGE 17], and described them as “largely technical in nature and very unlikely to be in any way related to the (2017) home run increase” [PAGE 17]. If “technical” changes are excluded from “meaningful,” then the official denial survives only by definition.

The recursive theory-of-mind layer is nested. The author models MLB modeling the public: MLB expects “within specifications” to close the question. MLB models Rawlings as a supplier whose process changes are not league business until drag becomes public. Rawlings models the market by distinguishing “commercial” balls from on-field balls and by using “blanks” so it can “stamp-manage variability in customer demand” [PAGE 15]. The 2019 committee models Rawlings as using “the same manufacturing process” for regular and postseason balls “save for the application of the postseason stamp” [PAGE 18]. The author then models the committee’s model and notices that the phrasing is “identical to that of MLB’s Official Statement” [PAGE 18]. That is the recursive trap: the committee’s assumption is not independent verification; it is a restatement of the league’s public position.

The counter-trap is evidentiary. If MLB says “same batches,” the author can ask which season’s batches [PAGE 16–17]. If Rawlings says commercial balls are not representative, its own COO concedes that “commercial balls produced in 2018 would be stamped for the 2019 postseason sales” [PAGE 15]. If the committee says “no reason to suspect a change” [PAGE 18], the author can point to preliminary actual game-ball evidence that “some part of the postseason population was taken from pre-2019 inventory” [PAGE 16]. Each official move creates a new question rather than closing the loop.

The clock pressure is decisive. The postseason begins October 1st [PAGE 12], and drag can change “day-to-day” within it [PAGE 12]. Manufacturing runs on a one-week cycle with two days of air-drying [PAGE 12], and the Triple-A rollout required a “~20% increase in production” [PAGE 12]. Under that clock, a league that wants uniform balls must choose between rapid production and stringent standardization. The author’s conclusion is that MLB has focused “more on scientific solutions than practical ones,” even though “standardizing the various steps of the manufacturing process is not” difficult [PAGE 18]. The deepest recursive failure is that MLB’s crisis habit—deny meaningful change—prevents the one practical intervention that would resolve the uncertainty: direct process control and date tracking.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical-layer veto. The claim “there was no physical difference” is vetoed by the author’s structural data: 2016–2017 laces were “9.0% thicker” [PAGE 4]; pre-2015 seam-adjacent bulging averaged “0.66% (~0.5mm)” versus “0.19%, or roughly ~0.15mm” in 2018 [PAGE 6]; 2019 static friction was “27.6% lower” [PAGE 9]; 2019 seam height was “only 54.6% ± 15.0%” of prior seasons [PAGE 9]; 2019 roundness deviation was “-0.04% ± 0.31%” [PAGE 10]. However, the physical layer does not veto every official statement wholesale: the source itself says leather smoothness “does not contribute to lower drag” [PAGE 11], and lace thickness “in-and-of-itself appears unconnected with aerodynamics” [PAGE 17]. So the physical veto is selective: structural changes are real, but not every structural change is a proven aerodynamic cause.

Aerodynamic-layer veto. Lower seam height is the strongest aerodynamic mediator: the source states “studies have shown that lower seams do, in fact, decrease drag” [PAGE 12], and the 2019 committee found “60% of the 2019 Home Run Surge could be accounted for by baseballs with lower drag” [PAGE 17]. Yet the committee’s own data show seam height “accounted for only 35% of Cd,” with “factors other than seam height account[ing] for roughly 65% of the ball-to-ball differences” [PAGE 17]. This vetoes any single-variable explanation. It also vetoes the idea that roundness or smoothness can be dismissed without measurement: the source notes that “alternate hypotheses” including “roundness, surface roughness, lace thickness” were discounted, but only lace-thickness results were presented [PAGE 17]. Aerodynamic causality remains a multi-factor problem.

Biomechanical-layer veto. The thicker-lace mechanism has a plausible biomechanical consequence: “Increased lace thickness will produce slightly prouder stitches, creating a ‘bumpier’ seam,” and “blisters are often associated with tightly gripping or rubbing the seams” [PAGE 5]. This supports the author’s blister hypothesis, but it does not explain home runs; blisters are an injury outcome, not a launch-condition variable. The biomechanical layer therefore vetoes the claim that lace changes were irrelevant to players, while it does not veto the aerodynamic story. It also clarifies why 2019 thinner laces could be an attempt “to mitigate pitcher blisters caused by thicker laces” [PAGE 11]. The two layers are orthogonal: a ball can be better for pitcher skin and worse for pitcher run prevention.

Weather-layer veto. The source lists “climate change” among theories considered for the home run surge [PAGE 2], but provides no measured weather variable. The committee instead found lower drag [PAGE 2], and the author’s structural measurements are epoch-specific and batch-specific. Weather cannot be the sole explanation because the 2019 postseason ball changed within a single calendar window while ambient climate did not change discontinuously, and because batch codes and lace thickness differ across balls [PAGE 13–15]. Weather can be a modifier of air density and carry, but it is not a sufficient veto of the manufacturing hypothesis. The cross-layer verdict is: manufacturing variation is physically real; seam height is a plausible aerodynamic mediator; smoothness and lace thickness are not direct aerodynamic causes; blisters are a biomechanical side effect; weather is a background variable, not the primary explanation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: “Postseason balls came from 2019 regular-season batches.” This is verifiable by batch-code audit and lace-thickness measurement. If the claim were true, postseason on-field balls should match the 2019 regular-season population in both batch designations and lace thickness. The source found batches “ERBSLAK, ERBSLAO, and EOBSLAO” with laces “consistent with late-2015 – 2018 construction, rather than 2019 construction” [PAGE 14], and inferred “the higher drag observed during the postseason was due to the presence of game balls manufactured for previous seasons” [PAGE 15]. Prediction: on-field 2019 postseason balls sampled by batch should show a statistically distinguishable lace-thickness distribution from 2019 regular-season balls, with transition-code batches closer to late-2015–2018. Veto condition: if a representative on-field sample’s mean wraps-per-cm and batch codes are statistically indistinguishable from 2019 regular-season production, the previous-season-inventory hypothesis is vetoed.

Scenario 2: “Lower leather friction caused lower drag.” This is verifiable by wind-tunnel or equivalent aerodynamic measurement plus friction measurement on the same balls. The source found “the coefficient of static friction for the 2019 balls was 27.6% lower” [PAGE 9], but also reports that “smoothness—particularly at the level typical of Major League baseballs—does not contribute to lower drag” [PAGE 11]. Prediction: in a regression of \(C_D\) on \(\mu_s\) controlling for seam height and roundness, the \(\mu_s\) coefficient should be statistically insignificant. Veto condition: if lower \(\mu_s\) robustly predicts lower \(C_D\) after controlling for seam height and roundness, the “smoothness is not causal” claim is vetoed.

Scenario 3: “Thicker laces directly increased carry through aerodynamics.” This is verifiable by measuring lace thickness, seam height, roundness, and \(C_D\) on the same disassembled or matched balls. The source states “lace thickness in-and-of-itself appears unconnected with aerodynamics” [PAGE 17], and the contrast between thin-laced 2000–2014 balls with high drag and thin-laced 2019 balls with low drag supports an indirect, manufacturing-regime explanation rather than a direct lace effect [PAGE 10–11]. Prediction: \(C_D\) should not be significantly associated with lace thickness once seam height and roundness are included; the apparent lace effect should vanish or weaken when drying process and batch are controlled. Veto condition: if lace thickness remains a significant predictor of \(C_D\) after controlling for seam height, roundness, and batch, the “lace thickness is indirect” claim is vetoed.
</RLVR_COUNTERFACTUAL_VETOES>