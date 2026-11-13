---
source: "2026 - Comparing wins above replacement across baseball history - Doane.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 75
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4474
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided PDF source text about comparing wins above replacement across baseball history. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the sections seem adapted from some sports reasoning framework but applied to baseball WAR analysis. I need to interpret them faithfully to the content while using the exact XML tags.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I should analyze:
- The paper's claims about iWAR RA vs bWAR/fWAR
- The common sample: 1,471 team-seasons, 79 years, 1,441 franchise pairs
- MAE reductions: 21.793% vs bWAR, 22.112% vs fWAR
- Paired differences: -1.030, intervals [-1.367, -0.706] and [-1.398, -0.725]
- Calibration preserved advantages
- PythagenPat better than all WAR
- Next-season replay ordering changed
- Neural RMSE 10.163 vs Ridge 9.946, difference +0.217
- Gray zones: display precision bounds, calibration intervals, era effects, missing fWAR years, numerical defect in learned model (constant detector), amended historical evidence not untouched holdout
- Assumptions: fixed conversion RPW formula, replacement 0.206 wins/team-game, centering
- Breakdown regimes: fewer than 10 nonempty blocks withholds intervals, modern era differences smaller/reversed, provider rounding bounds

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Cite pages [PAGE 1], [PAGE 9], [PAGE 10], [PAGE 15], [PAGE 47], [PAGE 51], etc.
- Equations:
  - y_i = (W_i + 0.5 T_i)/G_i
  - \hat{y}_i = 0.294 + WAR_i / G_i
  - Primary error: 162(\hat{y}_i - y_i) in credited wins per 162 played games
  - RPW = 10 sqrt(R_adj / G_team)^{4.5} — wait, looking at page 9: RPW = 10√(R_adj / G_team)^{4.5}? Let me re-read. Page 9 says: RPW =10√ R_adj / G_team 4 .5 . Actually formatting is weird: "RPW =10√ Radj / Gteam 4 .5 ." This likely means RPW = 10 * (R_adj / G_team)^0.285? No, wait. Page 10 PythagenPat gamma = [(RS+RA)/G]^0.285. Page 9 RPW formula looks like RPW = 10 * (R_adj / G_team)^{0.285}? Let's look: "RPW =10√ Radj / Gteam 4 .5 ." That's garbled. In baseball, RPW is often 10 * RPG^0.285 or similar. Actually standard PythagenPat RPW is 2 * RPG^(1-γ) or something. Let me check page 43 supplement S2.7: "RPW =10√ Radj / Gteam 4 .5" — same garbled. Probably RPW = 10 * (R_adj / G_team)^{0.285}? Wait, "4 .5" might be exponent 0.285? No. Let's look carefully: "RPW =10√ R_adj / G_team 4 .5 ." Could be RPW = 10 * (R_adj / G_team)^{0.285}? No, standard is RPW = 10 * RPG^0.285 where RPG = runs per game. But the text says G_team counts each covered game once for each participating team. Actually standard formula: RPW = 10 * RPG^0.285. Let me just quote it as it appears but note it's from page 9/43. I'll write: RPW = 10 (R_adj / G_team)^{0.285}? Hmm, but the text literally shows "4 .5" which might be a formatting artifact of "0.285"? No. Let's not over-interpret. I'll write the equation as presented in source: \text{RPW} = 10 \sqrt{R_{\text{adj}}/G_{\text{team}}}^{4.5}? That seems wrong dimensionally. Let's look at page 9 text exactly: "RPW =10√ R adj / Gteam 4 .5 ." Maybe it's RPW = 10 × (R_adj / G_team)^{0.285} and "4 .5" is something else? Actually wait — in standard baseball, Runs Per Win (RPW) = 10 * RPG^0.285. The text might be "RPW = 10√[4.5]{R_adj/G_team}"? No.

I'll quote the equation as it appears: $\text{RPW} = 10\sqrt{R_{\text{adj}}/G_{\text{team}}}^{4.5}$? That's weird. Better to say "RPW = 10 \times (R_{\text{adj}}/G_{\text{team}})^{0.285}"? But I shouldn't invent. Let's look again at page 9: "RPW =10√ Radj / Gteam 4 .5 ." Could be "RPW = 10 \sqrt[4.5]{R_{adj}/G_{team}}"? That would be the 4.5th root? Actually 1/4.5 ≈ 0.222. Not 0.285. Hmm.

Wait, maybe the OCR/parsing of the PDF lost superscripts. "RPW =10√ R_adj / G_team 4 .5" — maybe it's RPW = 10 * (R_adj / G_team)^0.285 and the "4 .5" is actually "0.285" misrendered? No. I'll just present it as: $\text{RPW} = 10 \sqrt{R_{\text{adj}}/G_{\text{team}}}$ with exponent context from page 10 gamma = 0.285. Actually page 9 says: "Runs above average are converted using a common league-season runs-per-win value," then equation. I'll write it as shown but note units are runs per win.

- Replacement: 0.206 wins per covered team-game, allocated 57% batting exposure, 43% pitching outs.
- Fixed map adds 0.294: $\hat{y}_i = 0.294 + \text{WAR}_i / G_i$.
- Identity: $\sum_{\text{teams}} \text{WAR} = 0.206 \sum_{\text{teams}} G$.
- PythagenPat: $\gamma = [(R_S + R_A)/G]^{0.285}$, $p_{PP} = R_S^\gamma / (R_S^\gamma + R_A^\gamma)$.
- Pythagorean exponent 2: $p_2 = R_S^2 / (R_S^2 + R_A^2)$.
- Calibration: $y_i = \alpha + \beta x_i + \varepsilon_i$.
- MSE identity: $MSE_{WAR} - MSE_{PP} = E_w[d^2] + 2 E_w[e_R d]$.
- FIP numerator: $N_j = 13 HR_j + 3(BB_j + HBP_j) - 2 K_j$.
- Pitching RA: $PITCH_{j,RA} = grossRA_j - support_j$.
- $grossRA_j = \sum eouts_j e \lambda_{\ell t P Fe} - chargedRuns_{adj,j}$? Let's get from page 41: $grossRA_j = \sum eouts_j e \lambda_{\ell t P Fe} - chargedRuns_{adj,j}$? Actually equation S7: $grossRA_j = \sum eouts_j e \lambda_{\ell t P Fe} - chargedRuns_{adj,j}$? Let's read page 41: "grossRA j=∑eouts j e λℓt P Fe-chargedRuns j adj," This is garbled but it's expected runs minus charged runs. I'll write formal version: $grossRA_j = \sum eouts_j \cdot e \lambda_{\ell t P Fe} - chargedRuns_{adj,j}$? Hmm, maybe: $grossRA_j = (\sum \text{outs}_j) \lambda_{\ell t} PF_e - chargedRuns^{adj}_j$? Let's just say expected runs minus charged runs per equation S7 on page 41.

Units: credited wins per 162 played games; MAE/RMSE in wins per 162; squared wins per 162 for MSE.

Breakdown/singularity:
- Fewer than 10 nonempty five-year calendar blocks → interval withheld (page 12, 49).
- Zero-out appearances defined for FIP (page 42).
- Both-zero, negative, nonfinite, or nonpositive-game inputs unavailable for run comparators (page 47).
- Missing core inputs propagate; assumed-average incremental convention (page 7).
- Display precision bounds: FanGraphs combined total adds batting and pitching half-step bounds (page 50).
- Modern era (2015-2025) differences tiny: RA-bWAR -0.058, within ±0.050 display bound; RA-fWAR -0.046 within ±0.100 bound (page 19).
- Neural network numerical defect: exact-zero constant detector failed on float64 residuals ~1e-17 to 1e-17 (page 59-60).

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Wins Above Replacement concept (Slowinski, 2010); openWAR (Baumer et al. 2015); Grid WAR (Brill & Wyner 2024); Full House Modeling (Yan et al. 2025); Fort et al. (2025) team-level bWAR/fWAR; Hall & Seaman (2009) neural nets; Farrell (2019); Lee et al. (2020) LSTM/ARIMA/Grey; Miller (2007) Pythagorean derivation; Künsch (1989) block bootstrap; Tashman (2000) out-of-sample; Shmueli (2010) explain vs predict; Gneiting (2011) point forecasts.
- Multi-week traps: The "multi-week" analog here is multi-season / multi-era traps. The paper warns that results depend on historical intersection (1908-1967 gaps, missing fWAR years 1968-1974, 1976-1987, 1998-2016, 2020). The broader bWAR analysis was designed after primary findings known (retrospective contamination). Amended learned-model study: initial evaluation exposed numerical defect, repair frozen after inspection — amended historical evidence, not untouched holdout (page 14, 28, 60).
- Chronological calibration expanding window (page 11, 48).
- Provider revisions: FanGraphs 2024 Statcast changes retroactive to 2016 (page 6).
- The trap: assuming pooled historical advantage applies uniformly across eras; contemporary differences smaller/reversed.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This is a strange section title but I need to interpret it. "Crisis habit regression" = tendency to revert to familiar habits under pressure/crisis. In this context: researchers regressing to standard WAR conversions or provider methods when facing novel iWAR. "Counter-trap" = the paper's design to avoid traps (matched rows, calibration, block resampling). "Clock" = chronological ordering, expanding window, target years vs origin years.
- Crisis habit regression: When evaluation target shifts from same-season reconstruction to next-season replay, analysts might habitually keep fixed conversion; the paper shows calibration reverses RA-fWAR ordering. The crisis is the change in ordering; the habit regression is assuming reconstruction superiority implies replay superiority.
- Counter-trap: Using identical evaluation rows for fixed and calibrated effects; leave-one-year-out calibration; not clipping predictions; retaining original 1,089 maps vs 1,450 secondary training cohorts.
- Clock: Strictly earlier target years for replay calibration; at least 10 earlier target years and 150 pairs; target-year blocks for resampling; origin years vs target years distinction; 1970-2025 cut for neural study; post-1969 evaluation cut.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Applied to baseball: physical layer = player physical skills (range, arm strength, framing) not measured by coarse fielding (page 8, 40). Biomechanical/weather = park factors, automatic runners, run environment. Veto proof = what can veto the team-level reconstruction claims?
- Veto 1: Coarse fielding cannot measure physical range/arm strength; iWAR fielding limited to recorded opportunities (page 8, 40). Therefore team-level reconstruction advantage cannot establish individual defensive attribution accuracy.
- Veto 2: Park factor is descriptive same-season adjustment; can reflect teams/opponents/schedules (page 8). Vetoes portability of park adjustments to other seasons.
- Veto 3: Conservation of pitching-fielding transfer (page 27, 41): additional run to fielding subtracted from pitching; team total unchanged. Team-win loss cannot determine which allocation is accurate.
- Veto 4: Provider rounding bounds — tiny paired differences (±0.104) can be within display precision (page 16, 50).
- Veto 5: Missing fWAR years occupy identifiable stretches, not random omissions (page 28).
- Veto 6: Neural model constant-defect repair means initial catastrophic errors were invalid software output, not evidence about model quality (page 59-60).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios: scenarios where if condition X holds, the paper's conclusion is vetoed/invalidated. Need 3 scenarios with predictions.
  1. If provider display rounding bounds exceed observed paired differences, the contemporary era ordering (RA vs bWAR/fWAR) is vetoed. Prediction: In 2015-2025, RA-bWAR advantage 0.058 is within ±0.050 bound; thus the era-specific superiority claim for RA over bWAR in contemporary baseball is not verifiable at display precision.
  2. If calendar-block resampling has fewer than 10 nonempty blocks, interval withheld and era conclusion vetoed. Prediction: For 1969-1993 (3 blocks) and 1994-2014 (1 block), no conditional 95% interval can be claimed; any assertion of era-specific RA advantage in these periods is vetoed by the block-support rule.
  3. If calibration training rows differ between common and broader samples, the neural learned-model comparator cannot borrow intervals from provider intersections. Prediction: The neural-Ridge RMSE difference +0.217 on 1,552 pairs is conditional on fixed predictions and saved intervals; on the provider-matched 504-pair subset, neural-Ridge ordering reverses (neural 10.297 vs Ridge 10.316), vetoing generalization of the full-cohort neural disadvantage to the four-WAR overlap.

Now I need to ensure >=1,000 words total across sections. Let's draft carefully with citations [PAGE N].

Word count plan:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1700 words. Good.

Need to avoid betting lines. No spreads, totals, moneylines, odds. This is baseball analysis, so easy to avoid.

Need formal LaTeX equations. Use proper LaTeX.

Need verbatim quotes where citing pages. I'll include short quotes.

Let's write.

Important: The sections must be exactly those XML tags. I will output only the XML sections, no extra text outside? The user says "across these exact XML sections". I'll provide the sections.

Let me draft THINK_TRACE:

Start with deep multi-hop derivation. The paper compares iWAR (runs-allowed and FIP variants) against bWAR and fWAR on 1,471 team-seasons. The fixed conversion is $\hat y_i = 0.294 + WAR_i/G_i$, yielding MAE 3.695 for iWAR RA vs 4.724 bWAR and 4.744 fWAR. That's a reduction of ~1.03 wins per 162. Paired differences and intervals given. Gray zones: The effect is concentrated in early periods (1908-1945: -1.525 vs bWAR) and nearly vanishes in contemporary era (2015-2025: -0.058, within display bound). Calibration preserves same-season advantage but changes replay ordering: fixed RA-fWAR +0.231 MAE becomes calibrated -0.148. This shows the conclusion is conditional on the conversion map. Another gray zone: the learned-model study suffered a numerical defect where an exact-zero constant detector treated floating-point residuals (~1e-17) as meaningful variation, producing unstable standardized inputs; the repair was applied after initial inspection, making the results "amended historical evidence, rather than an untouched holdout" (page 14). The block-resampling intervals withhold when fewer than 10 nonempty five-year blocks exist, so era-specific claims for 1969-1993 (3 blocks) and 1994-2014 (1 block) lack interval support. Provider rounding bounds can swamp small paired differences (e.g., FIP-fWAR fixed replay MAE -0.043 vs bound ±0.104).

Need >=400 words. Let's expand.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX with page citations.

RETROCAUSAL_GENEALOGY: lineage and traps.

RECURSIVE_THEORY_OF_MIND: interpret.

CROSS_LAYER_VETO_ADJUDICATION: vetoes.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's write it out fully now, watching word count.

I need to be careful with LaTeX syntax. Use $$ or \( \). Since it's XML, backslashes are fine.

Let me write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit. The paper constructs iWAR from Retrosheet play-by-play records and evaluates it against Baseball-Reference WAR (bWAR) and FanGraphs WAR (fWAR) on a matched common sample of 1,471 team-seasons across 79 observed years (1908–1967, 1975, 1988–1997, 2017–2019, 2021–2025), plus 1,441 consecutive franchise replay pairs in 78 target years [PAGE 1, PAGE 5]. The core estimator maps credited wins via \hat{y}_i = 0.294 + WAR_i/G_i and scores error as 162(\hat{y}_i - y_i) credited wins per 162 played games [PAGE 10]. On reconstruction, iWAR RA achieves MAE 3.695 versus 4.724 (bWAR) and 4.744 (fWAR), proportional reductions of 21.793% and 22.112% [PAGE 1, PAGE 15]. The paired RA-minus-bWAR MAE difference is -1.030 with conditional 95% calendar-block interval [-1.367, -0.706]; against fWAR, -1.049 with interval [-1.398, -0.725] [PAGE 15]. RMSE also favors RA: 4.654 versus 5.864 and 5.941 [PAGE 15]. After estimating a separate intercept and slope per measure (leave-one-year-out calibration), RA differences remain -1.027 and -1.025, so most of the pooled reconstruction advantage survives scalar recalibration [PAGE 16].

Gray-zone audit reveals that this advantage is not era-invariant. Table 3 shows RA-bWAR fixed-map MAE differences of -1.525 (1908–1945), -1.017 (1946–1968), -0.750 (1969–1993), -1.117 (1994–2014), and only -0.058 (2015–2025) [PAGE 18]. The contemporary advantage of 0.058 wins per 162 is only slightly above the ±0.050 display-precision bound, and RA-fWAR at -0.046 lies inside the ±0.100 bound; in RMSE the ordering even reverses locally [PAGE 19]. Because fewer than ten nonempty five-year blocks exist in several era groups, conditional intervals are withheld for 1969–1993 (three blocks) and 1994–2014 (one block), so era-specific superiority claims there lack the paper’s own interval support [PAGE 18, PAGE 49].

A second gray zone concerns replay. Fixed-map iWAR RA improves on bWAR by 0.295 MAE but loses to fWAR by 0.268 [PAGE 16]. After chronological scalar calibration on identical 1,282 replay rows, the RA-minus-fWAR sign flips from +0.231 to -0.148 [PAGE 16]. Thus the reconstruction conclusion does not transport to next-season persistence without specifying the conversion map. A third gray zone is the amended learned-model study: an exact-zero constant detector mishandled floating-point residuals of magnitude roughly 10^-17 to 10^-17 in a pre-DH position feature, producing standardized inputs near 10^16; the repair was frozen after initial inspection, so the reported neural RMSE of 10.163 versus Ridge 9.946 (difference +0.217, interval [0.015, 0.474]) is explicitly "amended historical evidence, rather than an untouched holdout" [PAGE 14, PAGE 25, PAGE 59, PAGE 60]. Finally, provider rounding bounds can swallow small paired effects: the fixed replay FIP-fWAR MAE difference of -0.043 is smaller than its ±0.104 display bound and its interval spans zero [PAGE 16, PAGE 50]. Any claim that iWAR universally dominates provider WARs is therefore conditional on era, task, conversion, and display precision.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and exact page citations. Credited winning fraction for team-season i:
\[
y_i = \frac{W_i + 0.5T_i}{G_i}, \qquad G_i = W_i + L_i + T_i
\]
[PAGE 10, PAGE 47]. Fixed WAR map:
\[
\hat{y}_i = 0.294 + \frac{\text{WAR}_i}{G_i}.
\]
Primary per-162 error:
\[
e_i = 162(\hat{y}_i - y_i) \quad \text{[credited wins per 162 played games]}.
\]
[PAGE 10]. Runs-per-win conversion used by iWAR:
\[
\text{RPW} = 10\sqrt{R_{\text{adj}}/G_{\text{team}}}^{\,4.5} \quad \text{[runs per win]},
\]
where R_adj is adjusted league scoring and G_team counts team-games [PAGE 9, PAGE 43]. Replacement budget:
\[
\sum_{\text{teams}}\text{WAR} = 0.206 \sum_{\text{teams}}G,
\]
with 0.206 wins per covered team-game allocated 57% through ordinary batting exposure and 43% through pitching outs; adding the fixed 0.294 win fraction makes implied league wins sum to half of both-teams games [PAGE 9, PAGE 43]. PythagenPat:
\[
\gamma = \left(\frac{R_S+R_A}{G}\right)^{0.285}, \qquad
p_{PP} = \frac{R_S^\gamma}{R_S^\gamma + R_A^\gamma},
\]
using reconciled unadjusted game-log runs [PAGE 10, PAGE 47]. Pythagorean exponent two:
\[
p_2 = \frac{R_S^2}{R_S^2 + R_A^2}.
\]
[PAGE 10]. Scalar calibration:
\[
y_i = \alpha + \beta x_i + \varepsilon_i,
\]
fit by ordinary least squares with equal row weights, predictions unclipped; same-season calibration leaves the scored year out, replay calibration uses an expanding window of strictly earlier target years requiring at least ten such years and 150 pairs [PAGE 10, PAGE 11, PAGE 48]. MSE accounting identity:
\[
\text{MSE}_{\text{WAR}} - \text{MSE}_{PP}
= E_w[d^2] + 2E_w[e_R d],
\]
where e_R is run-based prediction error and d is WAR minus run-based prediction, both in wins per 162 [PAGE 12, PAGE 51]. FIP pitching numerator:
\[
N_j = 13\,HR_j + 3(BB_j + HBP_j) - 2K_j,
\]
with no infield-fly addition, no defensive-support subtraction, and no park factor [PAGE 8, PAGE 42]. RA pitching credit:
\[
\text{PITCH}_{j,RA} = \text{grossRA}_j - \text{support}_j,
\]
with gross RA from expected runs over literal integer outs minus charged runs [PAGE 8, PAGE 41]. Calendar-block intervals use 5,000 paired draws of nonoverlapping five-year blocks anchored at 1908, linear 2.5th/97.5th percentiles; intervals withheld below ten nonempty blocks [PAGE 12, PAGE 49]. Provider display half-step bound on fixed-map error: 162b_i/G_i [PAGE 50]. Singularity/breakdown regimes: both-zero, negative, nonfinite, or nonpositive-game inputs make run comparators unavailable [PAGE 47]; zero-out FIP appearances remain defined [PAGE 42]; missing core inputs propagate under an assumed-average incremental convention [PAGE 7]; and numerical constant detection fails below a range of 16 × float64 epsilon × max(1,|min|,|max|), triggering the repaired guard [PAGE 59, PAGE 60].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. The study descends from the Wins Above Replacement concept articulated by Slowinski (2010), the openWAR public-event-data conservation-of-runs framework of Baumer, Jensen and Matthews (2015), and Grid WAR by Brill and Wyner (2024), which demonstrated that nonlinear game-level valuation reassigns pitcher credit [PAGE 2]. It also engages Fort, McMichael and Rucker (2025), who directly examine team-level bWAR and fWAR in wins-production estimation [PAGE 2]. Earlier neural team-performance precedents include Hall and Seaman (2009), Farrell (2019), and Lee et al. (2020), whose LSTM, ARIMA and Grey models use different information and evaluation targets, so this paper compares retained predictions on explicit shared rows rather than importing reported accuracies [PAGE 2, PAGE 32, PAGE 33]. The Pythagorean foundation rests on Miller (2007), and block resampling follows Künsch (1989) for dependent observations [PAGE 3, PAGE 12, PAGE 32, PAGE 50]. Forecast-evaluation framing invokes Shmueli (2010) on description versus prediction and Gneiting (2011) on matching forecast evaluation to the assessed quantity [PAGE 3, PAGE 32]. Tashman (2000) underpins the chronological expanding-window replay calibration [PAGE 11, PAGE 33].

Multi-week (multi-season / multi-era) traps. The central trap is assuming a pooled historical advantage applies uniformly across baseball’s timeline. The paper explicitly shows the opposite: early periods (1908–1945) yield RA-bWAR differences of -1.525 wins per 162, whereas the contemporary common sample (2015–2025) shrinks to -0.058, within provider display bounds [PAGE 18, PAGE 19]. Missing fWAR years occupy identifiable stretches—1968–1974, 1976–1987, 1998–2016, and 2020—not random omissions, and adding them in the broader bWAR sample cuts the pooled RA advantage from -1.030 to -0.697 [PAGE 18, PAGE 21, PAGE 22]. A retrospective-contamination trap exists because the broader bWAR protocol was specified after the primary findings were known, though frozen before new losses were computed [PAGE 5, PAGE 28]. The learned-model section contains an amended-evidence trap: initial post-1969 evaluation was inspected before a numerical constant-detection defect was diagnosed, and the repair was frozen afterward, so corrected results carry prior-development knowledge and cannot be treated as a fresh holdout [PAGE 14, PAGE 28, PAGE 59, PAGE 60]. Provider revision risk is concrete: FanGraphs’ 2024 Statcast-based fielding and baserunning changes were applied retroactively to 2016, and archived season-end vintages were unavailable, so comparisons use values observed at collection time [PAGE 6].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock. Crisis habit regression describes the tendency, under evaluative pressure, to revert to familiar WAR conventions—here, the fixed linear map \hat{y} = 0.294 + WAR/G and the assumption that same-season reconstruction superiority implies next-season predictive superiority. The paper’s crisis occurs when the target shifts from reconstructing completed seasons to forecasting the following season: fixed-map iWAR RA beats bWAR by 0.295 MAE but loses to fWAR by 0.268, and after chronological calibration the RA-fWAR ordering reverses sign on identical rows [PAGE 16]. An analyst regressing to crisis habit would report only the reconstruction MAE (3.695 versus 4.724/4.744) and generalize it to replay; the data forbid that leap.

The counter-trap is the study’s matched-row design: fixed and calibrated effects are computed on identical evaluation rows, so any sign change is attributable to the estimated conversion, not sample drift [PAGE 16, PAGE 17]. Additional counter-traps include leave-one-year-out same-season calibration that separates the scored year from scalar estimation [PAGE 10], unclipped predictions to expose level/scale error independently [PAGE 10], preservation of original 1,089 calibration maps alongside 1,450 secondary training cohorts to prevent confusing sample-size change with population change [PAGE 11], and retention of pre-repair neural outputs beside corrected ones to document the numerical-defect chronology [PAGE 14, PAGE 60].

The clock is the strict chronological ordering enforced throughout: replay pairs connect consecutive calendar years through verified continuing franchises; target-year WAR is unnecessary because the predictor comes entirely from the origin year [PAGE 5]; replay calibration trains only on strictly earlier completed target years with at least ten years and 150 pairs [PAGE 11]; resampling blocks are assigned by target year [PAGE 49]; and the learned-model evaluation applies a post-1969 cut with annual fits using only earlier completed target years [PAGE 60]. Violating this clock—e.g., allowing later target outcomes into an earlier conversion fit, or bridging missing franchise years—would contaminate the persistence estimate. The paper’s refusal to infer repairs for the 14 reconciled-record exclusions and its treatment of missing years as gaps rather than bridges are further clock-preserving rules [PAGE 5, PAGE 47].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof of team-level claims. The physical layer veto: iWAR’s conventional defensive allocation uses eligible balls in play and active fielding positions but provides "limited information about physical range, arm strength or other specific defensive abilities" [PAGE 8]; unknown responsibility is allocated fractionally and flagged [PAGE 8, PAGE 40]. Because every signed fielding contribution is also defensive support assigned to the active pitcher, the team RA total is conserved under equal-and-opposite pitching-fielding transfers [PAGE 41, PAGE 27]. Therefore improved team reconstruction cannot veto or validate any individual defensive attribution—it establishes only that the conserved team total tracks observed wins more closely than provider WARs.

The biomechanical/weather layer veto: the park factor compares adjusted runs per out at a site with road games of its home clubs, shrinks the log ratio by home-game exposure, and normalizes to a pitching-out-weighted league mean of one [PAGE 8, PAGE 41]. It is explicitly a descriptive same-season adjustment that "can reflect the teams, opponents and schedules represented at that park," so it cannot be ported as a stable physical constant across eras or used to claim park-caused causality [PAGE 8]. Automatic-runner resolution removes scored runs only when every placement in a season is fully resolved; otherwise all runs are retained under a flagged convention [PAGE 8, PAGE 41], meaning the estimator’s weather- and rule-era assumptions are embedded in the input convention and cannot be isolated post hoc.

Aggregate vetoes from measurement precision: provider display rounding implies bounded perturbations; for the common fixed replay FIP-fWAR contrast, the MAE difference of -0.043 is smaller than the ±0.104 paired display-rounding bound and the conditional interval spans zero [PAGE 16, PAGE 50]. The contemporary 2015–2025 RA-bWAR advantage of 0.058 sits barely above the ±0.050 bound, and the RA-fWAR advantage of 0.046 is inside the ±0.100 bound, while local RMSE ordering reverses [PAGE 19]. Finally, the learned-model numerical defect produced catastrophic errors of order 10^16 from float64 residuals near 10^-17; those were invalid software output, not evidence about model quality, and veto any interpretation of pre-repair annual comparisons (first affected: R1973 and F1974) [PAGE 59, PAGE 60].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with predictions.

Veto scenario 1 (display-precision veto). Condition: In the contemporary 2015–2025 stratum, the absolute provider rounding bound exceeds the observed paired MAE difference. Verifiable bound: RA-bWAR fixed-map advantage is 0.058 wins per 162 against a ±0.050 display bound; RA-fWAR is -0.046 against ±0.100; local RMSE even favors bWAR over RA by 0.078 [PAGE 19]. Prediction: Any claim that iWAR RA strictly dominates both providers in contemporary baseball is vetoed at display precision, because the observed differences are not separable from provider rounding artifacts. Calibrated contemporary differences (-0.181 vs bWAR, -0.352 vs fWAR) are larger but derive from estimated slopes on this same narrow stratum and do not rescue the fixed-map claim.

Veto scenario 2 (block-support veto). Condition: An era group contains fewer than ten nonempty five-year calendar blocks, so the paper’s conditional 95% interval is withheld. Verifiable support: Table 3 reports eight blocks for 1908–1945, five for 1946–1968, three for 1969–1993, one for 1994–2014, and three for 2015–2025; intervals are explicitly withheld under the unchanged rule when blocks are insufficient [PAGE 18, PAGE 49]. Prediction: Any era-specific inference of RA superiority for 1969–1993 or 1994–2014 is vetoed; the pooled interval [-1.367, -0.706] against bWAR cannot be decomposed into separately resolved era conclusions, and descriptive point estimates there carry no interval warranty.

Veto scenario 3 (learned-model cohort-transfer veto). Condition: A neural-network result is generalized from the full 1,552-pair internal replay cohort to the provider-matched four-WAR subset. Verifiable evidence: On the original 1,552 pairs, neural AUGMENTED RMSE is 10.163 versus Ridge 9.946 (difference +0.217, interval [0.015, 0.474]) [PAGE 25]. On the identical provider-matched 504-pair subset, fixed-map fWAR RMSE is 11.291, iWAR FIP 11.287, Ridge AUGMENTED 10.316, and neural AUGMENTED 10.297, reversing the neural–Ridge point ordering [PAGE 25]. Prediction: The claim that neural networks are uniformly worse than ridge for next-season replay is vetoed on the four-WAR overlap; the full-cohort neural disadvantage is conditional on cohort membership, saved fixed predictions, and interval applicability, and does not transfer to the smaller compatible provider intersection.
</RLVR_COUNTERFACTUAL_VETOES>