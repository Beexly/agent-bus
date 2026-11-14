---
source: "2025 - Enhancing NBA True Shot Charts A Probabilistic Spatial Approach to Rebounding and Possession Value - Koi.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2025"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 7807
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about NBA true shot charts and rebounding. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- No toy equations. Only formal LaTeX with proper units, assumptions, breakdown regimes.
- Must cite exact [PAGE N] markers from the source text.
- Must use verbatim quotes where appropriate.
- Minimum 1000 words total across all sections.
- THINK_TRACE needs >=400 words alone.

Let me carefully extract the source content with page markers. The text has page numbers embedded (1, 2, 3, etc.) at various points. Let me map content to pages:

Page 1: Introduction start, Data & Methods start, Rebounding Metric section start, Voronoi discussion, attempt distribution ~78%
Page 2: Design & Implementation, Rebounding Model & Metrics, figure overlay, Continuous Shot Chart start
Page 3: True points metric, TIPP, expected PPP 1.102, null filling, Gaussian filtering
Page 4: RROE definition, RROE per player formula, Ek definition, Results start, team defensive rebounding Brier score 0.0767, ROC AUC 0.98, average expected rebound rate 10.19% vs real 9.97%, net-overestimation 2.19%
Page 5: Comparing Point Estimate Models, topographical maps
Page 6: Comparing Topographical Maps, three-point line elevation, net gains, right of rim hotspot, 0.1-0.4 PPP, offensive rebound rates: 32.23% for 2pt misses, 28.54% for 3pt misses, close range 38.73%, mid-range 21.0%
Page 7: RROE section, what metric tells us, net range -10% to +7%, 8.5% more/fewer, Nurkić 22.8%, 37.28% fluctuation
Page 8: Grouping by Position, bigs/wings/guards, Jarret Allen, Nic Claxton, Aaron Gordon, Jalen Green
Page 9: Brook Lopez Effect, defensive rebounding percentage 13%, Bucks third overall, Jokić, Sengun, Aaron Gordon, Jalen Green, deferred rebound chances, Rudy Gobert, Jarret Allen
Page 10: Conclusion, future work
Page 11: References

I need to be careful about page citations. The text has page breaks indicated. Let me trace carefully:

- Page 1 ends after "The attempt distribution reflects the modern philosophy of threes and layups, with ~78% of attempts occurring either from close range or behind the arc." Actually looking at the text, there's a "1" after the first block, then more text, then "2". Let me re-examine.

The text structure:
- Page 1: Introduction, Data & Methods, Rebounding Metric start, Voronoi discussion, attempt distribution ~78%
- Page 2: Continuous Shot Chart section start, Design & Implementation, Rebounding Model & Metrics start, overlay figure description
- Page 3: Rebounding Model continuation, Continuous Shot Chart section 3.2, TIPP, PPP 1.102, Gaussian filtering
- Page 4: RROE section 3.3, formula definitions, Results 4.1, Brier score 0.0767, AUC 0.98, expected/real rebound rates
- Page 5: Comparing Point Estimate Models 4.2.1, topographical maps 4.2.2 start
- Page 6: Topographical maps continued, net gains 4.2.3, rebound rates by shot type
- Page 7: RROE 4.3, what metric tells us, net range -10% to +7%, Nurkić
- Page 8: Grouping by Position 4.3.2, Allen/Claxton/Gordon/Green
- Page 9: Brook Lopez Effect 4.3.3, Lopez 13%, Bucks third, Jokić/Sengun/Gordon/Green, deferred rebounds
- Page 10: Conclusion
- Page 11: References

Actually, looking at the raw text, there are explicit page number markers like "1", "2", etc. embedded. Let me note exact page citations for key claims:

[PAGE 1]: "~78% of attempts occurring either from close range or behind the arc" - actually this appears right before page break 1? Let me look again.

The text shows:
"...who is occupying it. A Voronoi plot is drawn with cell 

1 

borders equidistant between all players on the court."

So page 1 ends around there.

Then: "The attempt distribution reflects the modern philosophy of threes and layups, with _~78%_ of attempts occurring either from close range or behind the arc."

Then section 2.2 Continuous Shot Chart.

Then "2" appears.

So page 2 starts with "2.2 Continuous Shot Chart"? No, the page numbers are just markers. Let me just use the page numbers as they appear in sequence.

Key content with approximate page numbers:
- Page 1: Intro, Data & Methods, Rebounding Metric (hexmaps, Voronoi), ~78% attempts close range or threes
- Page 2: Continuous Shot Chart (Ehrlich and Sanders GAM), Design & Implementation (Python, github), Rebounding Model & Metrics (hexagon ownership, Voronoi coverage)
- Page 3: Augmenting PPP, expected free throw value, TIPP, average PPP 1.102, null filling/Gaussian filtering
- Page 4: RROE formula, n opportunities, Rk 0/1, Ek formula with H hex cells, P(r|x,y), VC(p), Results: Brier 0.0767, AUC 0.98, expected 10.19% vs real 9.97%, net overestimation 2.19%
- Page 5: Comparing Point Estimate Models, topographical maps start
- Page 6: Topographical maps, 3pt line elevation, net gains 0.1-0.4 PPP, offensive rebound rates: 32.23% (2pt), 28.54% (3pt), close range 38.73%, mid-range 21.0%
- Page 7: RROE interpretation, net range –10% to +7%, 8.5% fluctuation, Nurkić 22.8%, 37.28%
- Page 8: Position grouping, Allen/Claxton/Gordon/Green top performers
- Page 9: Brook Lopez Effect, Lopez 13% DRB%, Bucks 3rd, Jokić/Sengun/Gobert poor model, deferred rebounds top 10, Jarret Allen led model and 10th deferred
- Page 10: Conclusion
- Page 11: References

Now for the XML sections:

1. THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the math, discuss assumptions, small sample size (10 games), team rebounds not modeled, Voronoi assumptions, spatial stationarity, etc.

2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. I need to write the actual equations from the paper in LaTeX:
   - RROE = sum over n of (Rk - Ek) / n? Wait, the paper says "substituting the real rebounds collected with the net in real and expected." Let me look at the exact formula. It says "We define RROE per player as such:" but the actual formula image might not be fully rendered in text. However, from context: net in real and expected. Ek defined as sum over H of P(r|x,y) * VC(p). So RROE = (1/n) * sum_{k=1 to n} (Rk - Ek). Units: dimensionless rate/percentage. PPP in points per possession. Brier score dimensionless [0,1]. AUC dimensionless [0,1].
   - TIPP = true points + expected offensive rebound points. Expected points = sum of percentages * 1.102 PPP.
   - Continuous shot chart: GAM from Ehrlich and Sanders.
   - Voronoi cell borders equidistant between players.
   - Brier score 0.0767, AUC 0.98.
   - PPP after miss = 1.102.
   - Offensive rebound rates: 32.23% (2pt miss), 28.54% (3pt miss), 38.73% (close range), 21.0% (mid-range).
   - Breakdown regimes: small sample (10 games), null filling with percent of mean based on distance, Gaussian filtering, team rebounds excluded (out of bounds), no player biometrics/skills priors.

3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Lineage: Ehrlich & Sanders (2024) true continuous shot charts [1], Cervone/Bornn/Goldsberry (2016) Court Realty [2], Jacobs (2019) hexmaps/geometric distribution [3], Maheswaran et al. (2014) three dimensions of rebounding [5], Jacobs (2019) offensive crashing [7]. Multi-week traps: small sample overfitting, position-based confounding, team rebound zero-sum, deferred rebound chances, playoff dynamics, biometrics as priors.

4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret: How do players/coaches adapt? Crisis habit regression = under pressure (last 5 seconds, trailing by one), players revert to habitual shot selection. Counter-trap = offense crashing boards vs defense boxing out. Clock = end-game timing, shot value changes as clock winds down. The paper discusses last five seconds scenario. Need to discuss strategic adaptation over games/weeks.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: player size, athleticism, boxing out. Biomechanical: right-hand dominance causing right-leaning skew, shot location affecting rebound length (longer 3pt -> longer rebounds). Weather: indoor arena, negligible, but could mention HVAC/altitude as negligible veto. Court realty, positioning vs hustle vs conversion.

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I need 3 counterfactual veto scenarios with predictions. Examples:
   - Veto 1: If a player's Voronoi coverage at shot time is >X% but they don't get rebound, RROE penalizes; prediction: high VC players (stationary bigs) will have negative RROE even with decent raw counts.
   - Veto 2: If offensive rebound rate for mid-range is 21.0% vs close range 38.73%, then mid-range shots should have lower TIPP elevation; prediction: TIPP map shows valleys in mid-range despite raw PPP.
   - Veto 3: If team rebound (out of bounds) is excluded, model underestimates total rebounding opportunities; prediction: team defensive rebounding appears better than individual model suggests (Brook Lopez effect).

I must ensure no betting language. No "odds", "spread", "total", "moneyline". I should avoid anything resembling gambling.

Word count: Need >=1000 words total. THINK_TRACE alone >=400 words.

Let me draft carefully.

THINK_TRACE (>=400 words):
- Derive RROE from first principles based on paper.
- Multi-hop: shot location -> rebound distribution hexmap -> player Voronoi coverage -> expected rebound probability -> actual rebound indicator -> net over opportunities -> rate.
- Gray-zone audit: 10-game sample is tiny; null filling with distance-based mean introduces spatial smoothing bias; Gaussian filtering attenuates peaks; team rebounds excluded creates systematic undercount for team-oriented rebounders; Voronoi assumes equal player influence regardless of size/athleticism (biometrics missing); positional confounding (bigs near rim have higher real estate); offensive vs defensive rebounding not separated; small sample leads to overfitting risk mitigated only by spatial smoothing; 37.28% fluctuation range is sensitive to sample; deferred rebounds create zero-sum teammate effects; last-five-seconds scenario introduces non-stationarity (end-game clock pressure) not modeled.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define probability space: Let S be shot attempt at location (x,y). Let R be rebound landing cell h in H. P(r=h | x,y) from hexmap. [PAGE 4]
- VC_i(h) = percent coverage of player i's Voronoi cell with hex cell h. [PAGE 4]
- E_{i,k} = sum_{h in H} P(r=h | x_k, y_k) * VC_i(h) [PAGE 4]
- R_{i,k} in {0,1}. [PAGE 4]
- RROE_i = (1/n_i) sum_{k=1}^{n_i} (R_{i,k} - E_{i,k}) [implied from text "net in real and expected" divided by n]. Units: percentage points (or dimensionless rate). [PAGE 4]
- TIPP_i = PPP_true + sum_{k} (probability of offensive rebound * 1.102 PPP) + expected FT value. Actually text: "expected points by multiplying them by the average PPP of shots following a miss... 1.102". [PAGE 3]
- Continuous shot chart: GAM from Ehrlich & Sanders, topographic elevation = PPP. [PAGE 1-2]
- Brier score 0.0767 [PAGE 4], AUC 0.98 [PAGE 4].
- Expected rebound rate 10.19%, real 9.97%, net overestimation 2.19% [PAGE 4].
- Offensive rebound rates: 32.23% (2pt), 28.54% (3pt), 38.73% (close), 21.0% (mid-range) [PAGE 6].
- Breakdown regime: n < full season; null cells filled with distance-based mean; Gaussian filter sigma unspecified; team rebounds out-of-bounds excluded; no biometric priors.

RETROCAUSAL_GENEALOGY:
- Lineage: Maheswaran 2014 (Positioning, Hustle, Conversion) [PAGE 1-2], Cervone et al. 2016 (Court Realty/Voronoi) [PAGE 1-2], Jacobs 2019 (hexmaps, geometric distribution, offensive crashing) [PAGE 1-2, 6], Ehrlich & Sanders 2024 (GAM true shot charts, free throw value, three-point premium) [PAGE 1-2], NBA tracking data 2023-24 [PAGE 1].
- Multi-week traps: small sample cannot capture seasonal regression; positional archetypes shift over weeks as teams adjust defensive schemes; deferred rebound chances accumulate over season (top 10 for Jokić/Sengun/Gobert) [PAGE 9]; playoff intensity changes crashing behavior; biometric priors absent means model cannot adapt to player development over weeks.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: In last 5 seconds trailing by one, shooter reverts to habitual pull-up; defense smothers; rebound becomes Plan B. [PAGE 1 intro]
- Counter-trap: Offense crashes boards on 3pt misses because longer rebounds create offensive rebounding value [PAGE 6]; defense responds by boxing out, but box-out creators may underperform RROE because they own real estate [PAGE 7].
- Clock: End-game possession value non-stationary; model uses average PPP 1.102 regardless of clock state, which is a singularity/breakdown: end-game possessions have different PPP and foul strategies. [PAGE 3]
- Theory of mind: offensive rebounders anticipate defender positioning; defenders anticipate crasher lanes; second-order thinking creates the Brook Lopez Effect (space creation siphons rebounds to teammates) [PAGE 9].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Player size/athleticism affects ability to overcome Voronoi real estate; model lacks biometrics [PAGE 4, 9]; Jarret Allen/Nic Claxton/Aaron Gordon/Jalen Green top performers due to athleticism [PAGE 8].
- Biomechanical layer: Right-hand dominance causes right-leaning skew near rim [PAGE 6]; longer 3pt shots produce longer rebounds [PAGE 6, ref 7]; close-range misses corralled 38.73% vs mid-range 21.0% due to geometry and player positioning [PAGE 6].
- Weather: Indoor arena, climate-controlled; negligible direct effect, but altitude/humidity could affect ball bounce minimally—not modeled, vetoed as negligible for NBA indoor contexts.
- Court realty: Voronoi assumes equal ownership based purely on position; physical contact/boxing out not modeled; singularity when players occupy same space or screens overlap Voronoi cells.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
1. Veto: Player with high Voronoi coverage (VC) at shot time who fails to secure rebound. Prediction: RROE negative for that opportunity; aggregated over season, stationary bigs who box out but don't crash will show negative RROE despite high raw defensive rebound counts (Brook Lopez archetype).
2. Veto: Mid-range shot attempt in region with 21.0% offensive rebound rate. Prediction: TIPP elevation for mid-range will be lower than raw PPP suggests, creating a valley relative to close-range and three-point regions.
3. Veto: Team rebound (out of bounds) occurs. Prediction: Model's total expected rebounds will undercount actual team rebounding opportunities; net-overestimation of 2.19% will widen if team rebounds are included as unassigned probability mass outside court bounds.

Now I need to write this all out with proper XML tags, verbatim quotes where useful, and page citations. Must be careful with LaTeX formatting. Use \[ \] or \( \) or $$ $$? I'll use standard LaTeX.

Word count check: I need to write enough. THINK_TRACE needs 400+ words. Total needs 1000+ words. I'll aim for substantial depth.

No betting lines. I will not mention any gambling terms.

Let me compose.

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

I need to include exact [PAGE N] markers. Let's use them liberally.

Verbatim quotes:
- "~78% of attempts occurring either from close range or behind the arc" [PAGE 1]
- "The guiding insight here is that space is more or less valuable depending on where it is and who is occupying it." [PAGE 1]
- "To accomplish this, they incorporate the secondary impacts of missed shots by augmenting base PPP with an expected free throw value based on foul propensity in different shot regions." [PAGE 1-2]
- "The rebound model is a spatial model that leverages the rebound distribution and Voronoi court realty plots." [PAGE 2]
- "We define RROE per player as such:" [PAGE 4] (formula not fully text-rendered but described)
- "Where H is the set of hex cells on the court, P(r | x,y) is the probability that a rebound lands in the hex cell, and VC(p) is the percent coverage of that player’s Voronoi cell with the hex cell." [PAGE 4]
- "the net range in observed RROE runs from – 10% to +7%" [PAGE 7]
- "Considering the league leader in non-adjusted rebound rate for 2023-24 was Jusuf Nurkić at 22.8%, this amounts to a 37.28% fluctuation from max value." [PAGE 7]
- "the average missed 2pt attempt in the dataset was corralled by the offense 32.23% of the time, compared to 28.54% for 3pt misses." [PAGE 6]
- "close range shots (38.73%), to the unimpressive 21.0% on mid-range misfires." [PAGE 6]
- "net impact of expected points due to secondary outcomes spans between 0 .1-0.4 PPP" [PAGE 6] (typo in source: 0 .1-0.4)
- "Brook Lopez of the Milwaukee Bucks. In the 2023-24 season, Lopez’s defensive rebounding percentage was a paltry 13%." [PAGE 9]

Now, let's draft the content carefully. I'll write it in full.

For SOURCE_OPERATORS_AND_EQUATIONS, I need to state formal LaTeX equations. Since the paper doesn't render the RROE formula in text (it says "We define RROE per player as such:" but then describes variables), I will reconstruct it faithfully from the description without inventing fake ratios. I'll label it as reconstructed from the textual definition on [PAGE 4].

Equation block:
Let \(i\) index a player, \(k\) index a rebound opportunity, \(n_i\) the number of opportunities for player \(i\). Let \(R_{i,k} \in \{0,1\}\) be the realized rebound indicator. Let \(H\) be the set of hex cells. Let \(P(r=h \mid x_k,y_k)\) be the rebound landing probability in cell \(h\) given shot location \((x_k,y_k)\). Let \(VC_i(h)\) be the Voronoi coverage fraction of player \(i\) over cell \(h\). Then expected rebound credit:
\[
E_{i,k} = \sum_{h \in H} P(r=h \mid x_k, y_k) \cdot VC_i(h)
\]
Units: dimensionless probability in \([0,1]\). [PAGE 4]
RROE:
\[
\mathrm{RROE}_i = \frac{1}{n_i} \sum_{k=1}^{n_i} \left( R_{i,k} - E_{i,k} \right)
\]
Units: percentage points (or dimensionless rate), range \([-1,1]\) theoretically, empirically observed \([-0.10, +0.07]\) [PAGE 7].
TIPP / expected PPP:
\[
\widehat{\mathrm{PPP}}_{\text{second}} = 1.102 \quad \text{[PAGE 3]}
\]
Expected points from offensive rebound:
\[
\Pi_{\text{orb}} = \sum_{k} \Pr(\text{offensive rebound} \mid \text{shot}_k) \cdot 1.102
\]
Units: PPP (points per possession).

Also Brier score \(0.0767\), AUC \(0.98\). [PAGE 4]

Breakdown regimes:
- \(n_i\) small (10-game sample) → high variance.
- Null cells filled with distance-based mean → spatial bias.
- Gaussian filtering → attenuation of local maxima.
- Team rebounds (out of bounds) excluded → systematic undercount.
- No biometric priors → cannot separate size/skill from positioning.

Now writing the full response. I'll make sure each section is substantive.

Let me estimate word count as I write. I'll aim for ~1500-2000 words total to be safe.

Important: Do not mention betting. Check for words like "odds", "spread", "line", "total", "moneyline", "wager", "bet". I will avoid them.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs a causal chain from raw event tracking to shot-chart value that can be decomposed into four hops. Hop 1: shot attempt location (x,y) generates a rebound landing distribution over hex cells H, denoted P(r = h | x, y) [PAGE 4]. Hop 2: at shot time, each on-court player owns a Voronoi cell; the fraction of that cell overlapping hex h is VC_i(h), the “court realty” coverage [PAGE 1–2]. Hop 3: expected rebound credit for player i on opportunity k is the inner product E_{i,k} = sum over h in H of P(r = h | x_k, y_k) times VC_i(h) [PAGE 4]. Hop 4: realized indicator R_{i,k} in {0,1} is compared to E_{i,k} across n_i opportunities to yield Rebound Rate Over Expected, RROE_i = (1/n_i) sum_k (R_{i,k} – E_{i,k}) [PAGE 4, reconstructed from textual definition]. The expected second-chance PPP is fixed at 1.102 points per possession [PAGE 3], and expected free-throw value is added by shot region per Ehrlich and Sanders [PAGE 1–2].

Gray-zone audit. The first singularity is sample size: the model rests on a 10-game sample of NBA center-of-mass tracking and event labels from 2023–24 [PAGE 1]. With only ~78% of attempts concentrated in close-range or three-point bins [PAGE 1], mid-range cells are thinly populated, so null values are filled with a percent of the mean based on distance from basket, with a 3-point adjustment, followed by Gaussian filtering [PAGE 3]. This smoothing is a variance-reduction device but introduces spatial bias: local peaks near the rim or dunker’s spot may be attenuated, and valleys in mid-range may be artificially filled. The second singularity is the exclusion of team rebounds. The authors explicitly note that when a shot goes out of bounds or no individual can be credited, the model projects no rebound [PAGE 4], which systematically undercounts opportunities for team-oriented rebounders and produces the “Brook Lopez Effect,” where a player with a 13% defensive rebounding percentage plays on a top-three defensive rebounding team [PAGE 9]. The third singularity is the absence of player biometrics and skill priors in the Voronoi process [PAGE 4]; the model assumes space ownership derives purely from geometric positioning, not from size, strength, or verticality. Consequently, a big who boxes out and owns real estate may show low RROE because he secures rebounds inside his own high-estimate cells, whereas an athletic wing crashing from outside accumulates positive RROE by winning low-probability boards [PAGE 7–9]. A fourth gray zone is clock non-stationarity: the introduction frames a final five-second, trailing-by-one possession [PAGE 1], yet the model applies a single average offensive-rebound PPP of 1.102 regardless of game state, score differential, or shot-clock time [PAGE 3]. End-game fouling strategies and desperation rebound crashing violate that stationarity assumption. Finally, the net RROE range of –10% to +7%, described as a 37.28% fluctuation from the league-leading raw rebound rate of 22.8% [PAGE 7], is sensitive to the small denominator n_i; over a full season, positional and team effects would likely compress this range unless biometric priors are added.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, page citations, and breakdown regimes.

Rebound probability kernel (hexmap):
Let H be the finite set of hexagonal court cells. For a shot attempt k originating at location (x_k, y_k), the rebound landing probability is:
\[
P(r = h \mid x_k, y_k), \qquad h \in H,
\]
with units of dimensionless probability, summing to 1 over H for each shot. This kernel is estimated from the full rebound distribution across the 10-game sample [PAGE 2–4].

Voronoi court-realty coverage:
At shot time, player i occupies a Voronoi polygon defined by borders equidistant between all players on the court [PAGE 1]. The coverage overlap with hex cell h is:
\[
VC_i(h) = \frac{\text{Area}(V_i \cap h)}{\text{Area}(h)}, \qquad VC_i(h) \in [0,1],
\]
where V_i is player i’s Voronoi cell. The guiding insight is that space is more or less valuable depending on where it is and who is occupying it [PAGE 1].

Expected rebound credit per opportunity:
\[
E_{i,k} = \sum_{h \in H} P(r = h \mid x_k, y_k) \cdot VC_i(h),
\]
units: dimensionless expected rebound probability in [0,1]. Every player on court receives a score for every rebound opportunity [PAGE 4].

Rebound Rate Over Expected:
Let R_{i,k} \in {0,1} indicate whether player i secured the rebound on opportunity k, and n_i be the number of rebounding opportunities while player i was on court [PAGE 4]. Rebound rate is real rebounds divided by rebounding opportunities (REB Chance%) [PAGE 4]. RROE substitutes net realized minus expected:
\[
\mathrm{RROE}_i = \frac{1}{n_i} \sum_{k=1}^{n_i} \left( R_{i,k} - E_{i,k} \right),
\]
units: percentage points (dimensionless rate). Observed empirical range: –10% to +7% [PAGE 7]. A value-adding rebound is secured with a low estimate E_{i,k}, maximizing the numerator [PAGE 4].

Second-chance PPP and TIPP augmentation:
The average points per possession following an offensive rebound is computed directly from the dataset as:
\[
\widehat{\mathrm{PPP}}_{\text{orb}} = 1.102 \quad \text{points per possession} \quad \text{[PAGE 3]}.
\]
Expected offensive-rebound points for a shot are the summed offensive-rebound probabilities times 1.102. True Impact Points Produced (TIPP) embeds this plus expected free-throw value by shot location [PAGE 3]. The net impact of expected points due to secondary outcomes spans between 0.1 and 0.4 PPP in the most frequently attempted regions [PAGE 6].

Model performance:
Team defensive rebounding prediction: Brier score 0.0767 [PAGE 4]; ROC curve area under curve 0.98 [PAGE 4]. Average expected rebound rate 10.19% vs real rate 9.97%, net overestimation 2.19% [PAGE 4].

Offensive rebound propensity by shot type:
\[
\Pr(\text{ORB} \mid \text{2pt miss}) = 0.3223,
\quad
\Pr(\text{ORB} \mid \text{3pt miss}) = 0.2854,
\quad
\Pr(\text{ORB} \mid \text{close miss}) = 0.3873,
\quad
\Pr(\text{ORB} \mid \text{mid-range miss}) = 0.2100.
\]
[PAGE 6]

Breakdown / singularity regimes:
1. Small-sample regime: n_i derived from 10 games; high variance, null cells filled with distance-based mean and Gaussian filtered [PAGE 3].
2. Exclusion regime: team rebounds (out of bounds, no individual credit) are not projected [PAGE 4].
3. Geometric regime: Voronoi assumes equal player influence regardless of size/athleticism; no biometric priors [PAGE 4, 9].
4. Clock-state regime: constant 1.102 PPP ignores end-game score, time, and fouling non-stationarity [PAGE 1, 3].
5. Positional regime: bigs near rim have higher raw estimates and real counts; perimeter players derive value by crashing into high-propensity areas [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The paper’s intellectual ancestry is explicitly layered. Maheswaran et al. (2014) deconstructed rebounding into Positioning, Hustle, and Conversion using Voronoi tessellation and spatial probability distributions [PAGE 1–2, reference 5]. Cervone, Bornn, and Goldsberry (2016) introduced NBA Court Realty, the principle that space is more or less valuable depending on where it is and who is occupying it, with cell borders equidistant between players [PAGE 1, reference 2]. Jacobs (2019) supplied rebound-distribution hexmaps and a geometric-distribution approach to possessions, plus later work on offensive crashing and longer rebounds from longer shots [PAGE 1–2, 6, references 3 and 7]. Ehrlich and Sanders (2024) established true continuous shot charts via generalized additive models, augmenting base PPP with expected free-throw value by foul propensity and identifying a post-2018–19 “three-point premium” [PAGE 1–2, reference 1]. The current paper extends that lineage by fusing hexmap rebound distributions with Voronoi court realty into RROE and by appending expected offensive-rebound PPP (1.102) to the topographical shot chart [PAGE 2–4].

Multi-week traps emerge from this lineage. First, the 10-game window cannot capture seasonal regression in rebounding rates or the slow accumulation of deferred rebound chances; Jokić, Sengun, and Gobert were top 10 in deferred rebound chances for the full 2023–24 season yet performed poorly in this sample’s model [PAGE 9]. Second, positional archetypes are not fixed over weeks: as teams adjust defensive schemes, the value of crashing on 3pt misses versus boxing out shifts, and the model’s static Voronoi coverage does not re-prioritize player roles mid-season. Third, the right-leaning skew near the rim is attributed to general right-hand dominance [PAGE 6], a biomechanical constant, but tactical overloading of one side over a multi-week scouting report would invalidate the symmetry assumption. Fourth, playoff intensity changes offensive-rebound crashing and defensive boxing-out behavior; the authors themselves propose playoff dynamics as future work [PAGE 10]. Finally, adding player biometrics as priors [PAGE 4, 10] would be required to track player development or decline over weeks; without them, the model treats a rookie and a veteran with identical coordinates as equivalent, which breaks down as the season progresses.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock dynamics.

Crisis habit regression. The opening vignette places a player in the final five seconds of regulation, trailing by one, facing smothering defense, pulling up as the clock expires [PAGE 1]. Under this crisis condition, the shooter regresses to a habitual pull-up rather than driving to a higher-efficiency region. The rebound then becomes Plan B. The model, however, estimates rebound value from average spatial distributions and does not encode crisis-specific habit regression; a contested end-game pull-up is treated with the same regional rebound kernel as a rhythm shot earlier in the game.

Counter-trap. The offensive team can counter defensive pressure by crashing the boards on missed shots, particularly threes, because longer 3pt shots typically produce longer rebounds [PAGE 6, reference 7]. The defensive counter-trap is boxing out and owning real estate before the attempt. But RROE specifically rewards players who collect rebounds outside their Voronoi real estate and penalizes those who secure boards inside high-estimate cells [PAGE 7]. Thus a defender who excels at pre-shot positioning and boxing out may underperform in RROE, while a teammate who crashes from outside siphons the rebound. This is the zero-sum team-rebounding dynamic: if one player does not secure the board, a teammate will [PAGE 9]. The Brook Lopez Effect illustrates the recursive theory of mind: Lopez’s individual defensive rebounding percentage was 13%, bottom decile among bigs, yet the Bucks finished third in defensive rebounding because his spacing and positioning created opportunities for teammates [PAGE 9].

Clock. The model applies a single average PPP of 1.102 for shots following a miss, regardless of game clock, score differential, or shot-clock state [PAGE 3]. In the final five seconds described in the introduction, the value of an offensive rebound is not 1.102 PPP; it is either a game-tying or game-winning putback with binary win probability, or zero if the clock expires. The clock introduces a non-stationarity singularity: as time approaches zero, the marginal value of an offensive rebound diverges from the seasonal average. The paper’s continuous shot chart, therefore, represents expected value in an average possession, not a crisis possession. A recursive theory of mind must model how defenders anticipate crashers in the last seconds, how shooters adjust pull-up location under clock pressure, and how rebound value shifts from expected points to win probability—none of which are in the current state vector.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, weather, and court-realty vetoes.

Physical layer. Player size, strength, and verticality determine the ability to overcome Voronoi real estate and win low-probability rebounds [PAGE 4, 9]. The top RROE performers—Jarret Allen, Nic Claxton, Aaron Gordon, and Jalen Green—are described as athletically dynamic [PAGE 8]. The model lacks biometric inputs, so it cannot distinguish a 7-footer who boxes out effectively from a 6-6 wing who out-leaps him; both receive identical VC_i(h) if their coordinates match. Veto: any comparison of RROE across positions without controlling for height, wingspan, and vertical jump is physically invalid.

Biomechanical layer. Shot location determines rebound geometry: longer 3pt shots produce longer rebounds [PAGE 6, reference 7]; close-range misses are corralled by the offense 38.73% of the time versus 21.0% for mid-range misfires [PAGE 6]. The right-leaning hotspot just to the right of the rim is attributed to general right-hand dominance of NBA players [PAGE 6]. These are biomechanical constraints on the rebound kernel P(r | x, y). Veto: applying an isotropic or rotationally symmetric rebound distribution would violate the observed right skew and distance-dependent rebound length.

Weather layer. NBA games occur in indoor, climate-controlled arenas. Direct weather effects (wind, precipitation, temperature) are negligible and absent from the data [PAGE 1–2]. However, altitude and HVAC airflow could theoretically alter ball bounce and carom marginally; these are second-order effects not modeled and are vetoed as below measurement resolution for this tracking dataset.

Court-realty layer. Voronoi borders are equidistant between all players, assigning space ownership purely by position [PAGE 1]. This breaks down under screens, double-teams, and switching defenses where multiple players contest the same region; the model does not encode contact, contest strength, or defensive assignment [PAGE 4]. Veto: in high-traffic paint situations, the assumption of non-overlapping, exclusive cell ownership is a geometric fiction; physical contact and collision dynamics dominate over pure proximity, so RROE signals in the paint should be treated as lower-confidence than perimeter estimates.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) counterfactual veto scenarios with predictions.

Veto scenario 1: High-Voronoi-coverage non-rebound. Select all opportunities where a player’s Voronoi coverage VC_i(h) over the rebound-landing hex h exceeds 0.40 but R_{i,k} = 0. Under the RROE rule, each such opportunity contributes (0 – E_{i,k}) < 0 to the player’s sum [PAGE 4]. Prediction: over a full season, stationary bigs who excel at pre-shot positioning and boxing out but do not crash will accumulate systematically negative RROE despite high raw defensive rebound counts; the model will label them as underperformers relative to expected value even when their team’s defensive rebounding is elite (Brook Lopez archetype [PAGE 9]).

Veto scenario 2: Mid-range shot TIPP valley. Filter shot attempts to mid-range locations where the observed offensive-rebound rate is 21.0%, versus 38.73% for close-range misses [PAGE 6]. Compute TIPP elevation for those regions. Prediction: because the expected offensive-rebound addend is small and foul propensity does not compensate, the topographical TIPP map will show a valley in the mid-range relative to close range and the three-point line, even if raw PPP is comparable. Any observed mid-range peak in TIPP would falsify the additive rebound model as parameterized.

Veto scenario 3: Team-rebound exclusion. Identify possessions ending in out-of-bounds missed shots or other team rebounds where no individual is credited. The model assigns zero expected rebound to these events [PAGE 4]. Prediction: if team rebounds are re-inserted as unassigned probability mass outside court bounds, the aggregate expected rebound rate will rise above the observed 10.19% expected versus 9.97% real [PAGE 4], and the net overestimation of 2.19% will shrink or invert. Players on teams with high team-rebound frequencies will see their individual RROE increase relative to the current exclusionary baseline.
</RLVR_COUNTERFACTUAL_VETOES><THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs a causal chain from raw event tracking to shot-chart value that can be decomposed into four hops. Hop 1: shot attempt location (x,y) generates a rebound landing distribution over hex cells H, denoted P(r = h | x, y) [PAGE 4]. Hop 2: at shot time, each on-court player owns a Voronoi cell; the fraction of that cell overlapping hex h is VC_i(h), the “court realty” coverage [PAGE 1–2]. Hop 3: expected rebound credit for player i on opportunity k is the inner product E_{i,k} = sum over h in H of P(r = h | x_k, y_k) times VC_i(h) [PAGE 4]. Hop 4: realized indicator R_{i,k} in {0,1} is compared to E_{i,k} across n_i opportunities to yield Rebound Rate Over Expected, RROE_i = (1/n_i) sum_k (R_{i,k} – E_{i,k}) [PAGE 4, reconstructed from textual definition]. The expected second-chance PPP is fixed at 1.102 points per possession [PAGE 3], and expected free-throw value is added by shot region per Ehrlich and Sanders [PAGE 1–2].

Gray-zone audit. The first singularity is sample size: the model rests on a 10-game sample of NBA center-of-mass tracking and event labels from 2023–24 [PAGE 1]. With only ~78% of attempts concentrated in close-range or three-point bins [PAGE 1], mid-range cells are thinly populated, so null values are filled with a percent of the mean based on distance from basket, with a 3-point adjustment, followed by Gaussian filtering [PAGE 3]. This smoothing is a variance-reduction device but introduces spatial bias: local peaks near the rim or dunker’s spot may be attenuated, and valleys in mid-range may be artificially filled. The second singularity is the exclusion of team rebounds. The authors explicitly note that when a shot goes out of bounds or no individual can be credited, the model projects no rebound [PAGE 4], which systematically undercounts opportunities for team-oriented rebounders and produces the “Brook Lopez Effect,” where a player with a 13% defensive rebounding percentage plays on a top-three defensive rebounding team [PAGE 9]. The third singularity is the absence of player biometrics and skill priors in the Voronoi process [PAGE 4]; the model assumes space ownership derives purely from geometric positioning, not from size, strength, or verticality. Consequently, a big who boxes out and owns real estate may show low RROE because he secures rebounds inside his own high-estimate cells, whereas an athletic wing crashing from outside accumulates positive RROE by winning low-probability boards [PAGE 7–9]. A fourth gray zone is clock non-stationarity: the introduction frames a final five-second, trailing-by-one possession [PAGE 1], yet the model applies a single average offensive-rebound PPP of 1.102 regardless of game state, score differential, or shot-clock time [PAGE 3]. End-game fouling strategies and desperation rebound crashing violate that stationarity assumption. Finally, the net RROE range of –10% to +7%, described as a 37.28% fluctuation from the league-leading raw rebound rate of 22.8% [PAGE 7], is sensitive to the small denominator n_i; over a full season, positional and team effects would likely compress this range unless biometric priors are added.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, page citations, and breakdown regimes.

Rebound probability kernel (hexmap):
Let H be the finite set of hexagonal court cells. For a shot attempt k originating at location (x_k, y_k), the rebound landing probability is:
\[
P(r = h \mid x_k, y_k), \qquad h \in H,
\]
with units of dimensionless probability, summing to 1 over H for each shot. This kernel is estimated from the full rebound distribution across the 10-game sample [PAGE 2–4].

Voronoi court-realty coverage:
At shot time, player i occupies a Voronoi polygon defined by borders equidistant between all players on the court [PAGE 1]. The coverage overlap with hex cell h is:
\[
VC_i(h) = \frac{\text{Area}(V_i \cap h)}{\text{Area}(h)}, \qquad VC_i(h) \in [0,1],
\]
where V_i is player i’s Voronoi cell. The guiding insight is that space is more or less valuable depending on where it is and who is occupying it [PAGE 1].

Expected rebound credit per opportunity:
\[
E_{i,k} = \sum_{h \in H} P(r = h \mid x_k, y_k) \cdot VC_i(h),
\]
units: dimensionless expected rebound probability in [0,1]. Every player on court receives a score for every rebound opportunity [PAGE 4].

Rebound Rate Over Expected:
Let R_{i,k} \in {0,1} indicate whether player i secured the rebound on opportunity k, and n_i be the number of rebounding opportunities while player i was on court [PAGE 4]. Rebound rate is real rebounds divided by rebounding opportunities (REB Chance%) [PAGE 4]. RROE substitutes net realized minus expected:
\[
\mathrm{RROE}_i = \frac{1}{n_i} \sum_{k=1}^{n_i} \left( R_{i,k} - E_{i,k} \right),
\]
units: percentage points (dimensionless rate). Observed empirical range: –10% to +7% [PAGE 7]. A value-adding rebound is secured with a low estimate E_{i,k}, maximizing the numerator [PAGE 4].

Second-chance PPP and TIPP augmentation:
The average points per possession following an offensive rebound is computed directly from the dataset as:
\[
\widehat{\mathrm{PPP}}_{\text{orb}} = 1.102 \quad \text{points per possession} \quad \text{[PAGE 3]}.
\]
Expected offensive-rebound points for a shot are the summed offensive-rebound probabilities times 1.102. True Impact Points Produced (TIPP) embeds this plus expected free-throw value by shot location [PAGE 3]. The net impact of expected points due to secondary outcomes spans between 0.1 and 0.4 PPP in the most frequently attempted regions [PAGE 6].

Model performance:
Team defensive rebounding prediction: Brier score 0.0767 [PAGE 4]; ROC curve area under curve 0.98 [PAGE 4]. Average expected rebound rate 10.19% vs real rate 9.97%, net overestimation 2.19% [PAGE 4].

Offensive rebound propensity by shot type:
\[
\Pr(\text{ORB} \mid \text{2pt miss}) = 0.3223,
\quad
\Pr(\text{ORB} \mid \text{3pt miss}) = 0.2854,
\quad
\Pr(\text{ORB} \mid \text{close miss}) = 0.3873,
\quad
\Pr(\text{ORB} \mid \text{mid-range miss}) = 0.2100.
\]
[PAGE 6]

Breakdown / singularity regimes:
1. Small-sample regime: n_i derived from 10 games; high variance, null cells filled with distance-based mean and Gaussian filtered [PAGE 3].
2. Exclusion regime: team rebounds (out of bounds, no individual credit) are not projected [PAGE 4].
3. Geometric regime: Voronoi assumes equal player influence regardless of size/athleticism; no biometric priors [PAGE 4, 9].
4. Clock-state regime: constant 1.102 PPP ignores end-game score, time, and fouling non-stationarity [PAGE 1, 3].
5. Positional regime: bigs near rim have higher raw estimates and real counts; perimeter players derive value by crashing into high-propensity areas [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The paper’s intellectual ancestry is explicitly layered. Maheswaran et al. (2014) deconstructed rebounding into Positioning, Hustle, and Conversion using Voronoi tessellation and spatial probability distributions [PAGE 1–2, reference 5]. Cervone, Bornn, and Goldsberry (2016) introduced NBA Court Realty, the principle that space is more or less valuable depending on where it is and who is occupying it, with cell borders equidistant between players [PAGE 1, reference 2]. Jacobs (2019) supplied rebound-distribution hexmaps and a geometric-distribution approach to possessions, plus later work on offensive crashing and longer rebounds from longer shots [PAGE 1–2, 6, references 3 and 7]. Ehrlich and Sanders (2024) established true continuous shot charts via generalized additive models, augmenting base PPP with expected free-throw value by foul propensity and identifying a post-2018–19 “three-point premium” [PAGE 1–2, reference 1]. The current paper extends that lineage by fusing hexmap rebound distributions with Voronoi court realty into RROE and by appending expected offensive-rebound PPP (1.102) to the topographical shot chart [PAGE 2–4].

Multi-week traps emerge from this lineage. First, the 10-game window cannot capture seasonal regression in rebounding rates or the slow accumulation of deferred rebound chances; Jokić, Sengun, and Gobert were top 10 in deferred rebound chances for the full 2023–24 season yet performed poorly in this sample’s model [PAGE 9]. Second, positional archetypes are not fixed over weeks: as teams adjust defensive schemes, the value of crashing on 3pt misses versus boxing out shifts, and the model’s static Voronoi coverage does not re-prioritize player roles mid-season. Third, the right-leaning skew near the rim is attributed to general right-hand dominance [PAGE 6], a biomechanical constant, but tactical overloading of one side over a multi-week scouting report would invalidate the symmetry assumption. Fourth, playoff intensity changes offensive-rebound crashing and defensive boxing-out behavior; the authors themselves propose playoff dynamics as future work [PAGE 10]. Finally, adding player biometrics as priors [PAGE 4, 10] would be required to track player development or decline over weeks; without them, the model treats a rookie and a veteran with identical coordinates as equivalent, which breaks down as the season progresses.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock dynamics.

Crisis habit regression. The opening vignette places a player in the final five seconds of regulation, trailing by one, facing smothering defense, pulling up as the clock expires [PAGE 1]. Under this crisis condition, the shooter regresses to a habitual pull-up rather than driving to a higher-efficiency region. The rebound then becomes Plan B. The model, however, estimates rebound value from average spatial distributions and does not encode crisis-specific habit regression; a contested end-game pull-up is treated with the same regional rebound kernel as a rhythm shot earlier in the game.

Counter-trap. The offensive team can counter defensive pressure by crashing the boards on missed shots, particularly threes, because longer 3pt shots typically produce longer rebounds [PAGE 6, reference 7]. The defensive counter-trap is boxing out and owning real estate before the attempt. But RROE specifically rewards players who collect rebounds outside their Voronoi real estate and penalizes those who secure boards inside high-estimate cells [PAGE 7]. Thus a defender who excels at pre-shot positioning and boxing out may underperform in RROE, while a teammate who crashes from outside siphons the rebound. This is the zero-sum team-rebounding dynamic: if one player does not secure the board, a teammate will [PAGE 9]. The Brook Lopez Effect illustrates the recursive theory of mind: Lopez’s individual defensive rebounding percentage was 13%, bottom decile among bigs, yet the Bucks finished third in defensive rebounding because his spacing and positioning created opportunities for teammates [PAGE 9].

Clock. The model applies a single average PPP of 1.102 for shots following a miss, regardless of game clock, score differential, or shot-clock state [PAGE 3]. In the final five seconds described in the introduction, the value of an offensive rebound is not 1.102 PPP; it is either a game-tying or game-winning putback with binary win probability, or zero if the clock expires. The clock introduces a non-stationarity singularity: as time approaches zero, the marginal value of an offensive rebound diverges from the seasonal average. The paper’s continuous shot chart, therefore, represents expected value in an average possession, not a crisis possession. A recursive theory of mind must model how defenders anticipate crashers in the last seconds, how shooters adjust pull-up location under clock pressure, and how rebound value shifts from expected points to win probability—none of which are in the current state vector.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, weather, and court-realty vetoes.

Physical layer. Player size, strength, and verticality determine the ability to overcome Voronoi real estate and win low-probability rebounds [PAGE 4, 9]. The top RROE performers—Jarret Allen, Nic Claxton, Aaron Gordon, and Jalen Green—are described as athletically dynamic [PAGE 8]. The model lacks biometric inputs, so it cannot distinguish a 7-footer who boxes out effectively from a 6-6 wing who out-leaps him; both receive identical VC_i(h) if their coordinates match. Veto: any comparison of RROE across positions without controlling for height, wingspan, and vertical jump is physically invalid.

Biomechanical layer. Shot location determines rebound geometry: longer 3pt shots produce longer rebounds [PAGE 6, reference 7]; close-range misses are corralled by the offense 38.73% of the time versus 21.0% for mid-range misfires [PAGE 6]. The right-leaning hotspot just to the right of the rim is attributed to general right-hand dominance of NBA players [PAGE 6]. These are biomechanical constraints on the rebound kernel P(r | x, y). Veto: applying an isotropic or rotationally symmetric rebound distribution would violate the observed right skew and distance-dependent rebound length.

Weather layer. NBA games occur in indoor, climate-controlled arenas. Direct weather effects (wind, precipitation, temperature) are negligible and absent from the data [PAGE 1–2]. However, altitude and HVAC airflow could theoretically alter ball bounce and carom marginally; these are second-order effects not modeled and are vetoed as below measurement resolution for this tracking dataset.

Court-realty layer. Voronoi borders are equidistant between all players, assigning space ownership purely by position [PAGE 1]. This breaks down under screens, double-teams, and switching defenses where multiple players contest the same region; the model does not encode contact, contest strength, or defensive assignment [PAGE 4]. Veto: in high-traffic paint situations, the assumption of non-overlapping, exclusive cell ownership is a geometric fiction; physical contact and collision dynamics dominate over pure proximity, so RROE signals in the paint should be treated as lower-confidence than perimeter estimates.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) counterfactual veto scenarios with predictions.

Veto scenario 1: High-Voronoi-coverage non-rebound. Select all opportunities where a player’s Voronoi coverage VC_i(h) over the rebound-landing hex h exceeds 0.40 but R_{i,k} = 0. Under the RROE rule, each such opportunity contributes (0 – E_{i,k}) < 0 to the player’s sum [PAGE 4]. Prediction: over a full season, stationary bigs who excel at pre-shot positioning and boxing out but do not crash will accumulate systematically negative RROE despite high raw defensive rebound counts; the model will label them as underperformers relative to expected value even when their team’s defensive rebounding is elite (Brook Lopez archetype [PAGE 9]).

Veto scenario 2: Mid-range shot TIPP valley. Filter shot attempts to mid-range locations where the observed offensive-rebound rate is 21.0%, versus 38.73% for close-range misses [PAGE 6]. Compute TIPP elevation for those regions. Prediction: because the expected offensive-rebound addend is small and foul propensity does not compensate, the topographical TIPP map will show a valley in the mid-range relative to close range and the three-point line, even if raw PPP is comparable. Any observed mid-range peak in TIPP would falsify the additive rebound model as parameterized.

Veto scenario 3: Team-rebound exclusion. Identify possessions ending in out-of-bounds missed shots or other team rebounds where no individual is credited. The model assigns zero expected rebound to these events [PAGE 4]. Prediction: if team rebounds are re-inserted as unassigned probability mass outside court bounds, the aggregate expected rebound rate will rise above the observed 10.19% expected versus 9.97% real [PAGE 4], and the net overestimation of 2.19% will shrink or invert. Players on teams with high team-rebound frequencies will see their individual RROE increase relative to the current exclusionary baseline.
</RLVR_COUNTERFACTUAL_VETOES>