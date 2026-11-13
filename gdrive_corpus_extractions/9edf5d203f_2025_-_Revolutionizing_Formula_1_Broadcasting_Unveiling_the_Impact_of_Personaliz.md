---
source: "2025 - Revolutionizing Formula 1 Broadcasting Unveiling the Impact of Personalized Virtual Advertising on Brand Recall through eyetracking - Konstantinos et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2025"
pages: 25
model: deepseek/deepseek-v4.1-flash-1017
words: 9521
---

<NATIVE_REASONING>
We need answer to user. Need comply with GSE+GSI Frontier Reasoning Foundry. They provided source text pages 1-25 of MIT Sloan paper. Need produce analysis with exact XML sections, >=1000 words total. Must zero betting lines. Zero toy equations. Need formal LaTeX, units, citations [PAGE N], verbatim quotes when source pages. Need discuss source operators and equations, ret causal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes with 3 verifiable scenarios + predictions. Need likely evaluate research paper: personalized virtual advertising F1 eye-tracking. Need incorporate "DRIVE SOURCE" maybe task is to analyze source. We need not make sports prediction. Need maybe identify methodological issues, equations formal. Need exact page markers and quotes. Need deep multi-hop derivation and gray-zone audit >=400 words. Need 1000+ words across sections. Need no fake ratios. Formal LaTeX equations with units, assumptions, singularities/breakdown. Need not mention betting lines. Need avoid odds. We can discuss no betting. Need maybe "drive source" implies an analytical drive. Need produce comprehensive frontier reasoning. Need mention source claims and quote exact. Need use page citations.

Need be careful: no invented fake ratios. We can formalize visibility percentage as area ratio defined by paper: Visibility Percentage = (Signage Size / Image Size) * 100. Units dimensionless percent. Cite [PAGE 7]. Need discuss assumptions: planar image area, signage fully visible, no perspective correction? Actually paper formula. Need breakdown when image size = 0; nonvisible; occlusion; AOI segmentation. Also eye tracking metrics: Time to First Fixation (seconds), Average Time Spent (s), Number of Fixations (count), Ratio (%) average? Table IV? Need formal equations. Need not invent equations? We can state formal metrics from source: TTFF, dwell time, fixation count, revisits. For correlations perhaps not exact. Need mention sample n=10 per group, total 20; preliminary; 3 personalized virtual ads designed by authors; 20 frames each 3s = 60s total; dummy brands; real Formula E sponsors as controls. Need audit.

Need maybe identify contradictions/gray zones:
- Paper says "personalized messages used did not include individual participants' names" [PAGE 17] but earlier gives example "such as signage featuring a viewer's name" [PAGE 7/8] and RQ2 personalized messages. Also intro example birthday message. Need quote. This is important trap.
- Brand recall: Qatar Airways highest unaided 17.88% with stronger Survey A 21.88 vs B 13.89; but personalized in Survey B included low-visibility size. Paper says included personalized message in Survey B within Qatar frame positioning in low-visibility size to evaluate impact [PAGE 14]. So personalization effect confounded with size/placement. Need note.
- Table III: PVAB TTFF 0.79 s, time spent 0.69, fixations 31, ratio 46.67, avg fixation duration 0.69, revisits 0.40, attention 0.20. Compare Virtual Advertising Billboard Survey B TTFF 1.04, time 0.65, etc. Paper conclusion says "personalized ads significantly reduced Time to First Fixation to 0.79 seconds compared to 1.35 seconds for non-personalized ads" [PAGE 14]. But Table III non-personalized Virtual Advertising Billboard Survey B average is 1.04 s, and Survey A 1.04; 1.35 is maybe Left Hand Side Standing Graph in Survey B (1.35) or? Need verify. This is a major inconsistency. Page 14 quote: "personalized ads significantly reduced Time to First Fixation to 0.79 seconds compared to 1.35 seconds for non-personalized ads" But Table III survey A and B virtual advertising billboard average TTFF is 1.04 both; non-virtual billboard 1.16/1.11; racing cars 0.96/1.06; left graph 1.09/1.35; F1 TV logo 2.45/1.81; race info 1.19/1.40; PVAB 0.79. The 1.35 is Left Hand Side Standing Graph in Survey B. So conclusion misattributes. Need audit and cite exact [PAGE 10, PAGE 14]. That's a key gray-zone. Need maybe highlight "significantly" unsupported: no inferential statistics, no p-values, no confidence intervals, no effect sizes. n=10. Need formal equation for standard error? Could state if estimating proportion recall, binomial standard error $\mathrm{SE}(\hat p)=\sqrt{p(1-p)/n}$ with n=10 gives huge uncertainty, e.g. p=0.5 -> 0.158. But that's not toy? It's formal, units proportion. Need maybe cite assumption independent Bernoulli. However "ZERO TOY EQUATIONS": not invent fake ratios. Binomial SE is valid. We can use to demonstrate uncertainty. Need maybe mention no explicit equation in source for stats. Good.

Need formulate with LaTeX. Need cite exact quotes. Need include "singularity/breakdown regimes": For visibility percentage denominator image area -> 0; if signage overlaps/occluded not captured; AOI geometry; if frame standardized 1440x900, denominator fixed 1,296,000 px? Let's compute: 1440*900=1,296,000 pixels. But not necessary. Could mention units px^2. Visibility % = (A_s/A_f) * 100% (dimensionless), A_s, A_f in px^2 or physical. Singular at A_f = 0. If segmentation error, false positives. Need maybe derive average visibility from 22 frames: mean 7.63%. We can formalize $\bar V = (1/N)\sum V_i$, N=22. Cite [PAGE 8]. Could compute? They list values. We can verify mean maybe 7.63? Let's check quickly maybe not necessary. But could be useful to audit. Let's sum values? list: 4.95, 7.03, 5.07, 0.86, 4.91, 6.13, 6.98, 5.33, 4.94, 1.42, 8.48, 2.61, 6.06, 14.78, 3.39, 5.51, 23.64, 16.89, 7.37, 10.67, 0.50, 20.31. Sum: let's calculate. 4.95+7.03=11.98; +5.07=17.05; +0.86=17.91; +4.91=22.82; +6.13=28.95; +6.98=35.93; +5.33=41.26; +4.94=46.20; +1.42=47.62; +8.48=56.10; +2.61=58.71; +6.06=64.77; +14.78=79.55; +3.39=82.94; +5.51=88.45; +23.64=112.09; +16.89=128.98; +7.37=136.35; +10.67=147.02; +0.50=147.52; +20.31=167.83. /22 = 7.6286. yes.

Need maybe formalize eye tracking:
- TTFF $\tau_{i,k}$ seconds for participant i AOI k.
- Dwell $D_{i,k} = \sum_{f\in F_{i,k}} \delta_{f}$ s.
- Fixation count $N_{i,k}=|F_{i,k}|$.
- Revisit $R_{i,k}$ count/rate? Paper reports average revisits 0.40, 0.17 etc. It's average count? It says measure how often returned gaze. Units count, not rate. Need state.
- Attention average? Table III attention average values 0.35, 0.20, -2.08 etc. Unclear; paper doesn't define. Need flag. This is important: undefined metric "Attention (Average)" in Table III. Need cite [PAGE 10]. Gray zone: attention values negative for F1 TV logo, undefined formula. Need state cannot reproduce.
- Ratio (%) - Average: unclear; likely average ratio? Undefined. Need flag.
- Correlation heatmaps described [PAGE 14, 15] but no numeric matrix in text; cannot verify. Need flag.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include formal LaTeX. Need page citations and breakdown. Need maybe quote exact "Visibility Percentage = (Signage Size / Image Size) * 100." [PAGE 7]. And "average visibility ... 7.63% of the total frame size" [PAGE 8]. And "race standings ... 10.81%" [PAGE 8]. Quote "Qatar Airways ... 20.31%" [PAGE 8-9]. Need exact.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Need discuss lineage: virtual advertising mid-1990s USA, 2006 FIFA World Cup, 2024 UEFA, F1 TV Pro 2018, Liberty Media 2017. Eye tracking methods from vision science/consumer neuroscience Duchowski 2007, Wedel & Pieters 2012, Orquin & Holmqvist 2018. Advertising effectiveness: Aaker, Keller brand recall vs recognition, sleeper effect, Gerber & Terblanche-Smit 2014 two-thirds appearance, embedded advertising, overload theory Ha & McCann 2008. "multi-week traps" likely means methodological traps that manifest over multiple weeks of study? Need adapt: temporal confounds, novelty effect, sleeper effect, repeated exposure, learning, serial position, ad fatigue. Need mention multi-week trap: personalization novelty may decay; single 60-s exposure cannot infer long-term memory; sleeper effect can reverse delayed recall; repeated exposures and ad blindness. Need cite [PAGE 3] sleeper effect Cardwell 1999, [PAGE 14] long-term memory future research. Need maybe "multi-week traps" include experiment not longitudinal; no delayed recall; no within-subject randomization; survey A/B different participants. Need exact.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. This is weird. Need interpret: model viewers/advertisers/broadcasters mental states, recursive ToM. Crisis habit regression: under high cognitive load/race action, viewers revert to habitual gaze/attention; counter-trap: personalization may draw attention but reduce recall due to attentional capture; clock: timing/TTFF and exposure duration. Need discuss recursive beliefs: advertiser believes viewer attends, viewer believes ad targeted, broadcaster believes personalization improves; recursion. Need cite eye-tracking and brand recall. Need mention "fans' deep connection" [PAGE 5] and "personalized birthday message" [PAGE 1]. Need formal maybe Bayesian belief update? Could use probability. But avoid toy. We can state a belief state $b_t(s)$ probability over viewer state; not necessarily equation? Formal LaTeX okay. Need not overdo.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need interpret as cross-layer veto: physiological eye-tracking validity constraints, biomechanical viewing posture, webcam calibration, lighting, glasses, screen size, weather/broadcast visual conditions (rain, glare, Monaco tunnel lighting) could veto inference. Need cite: webcam calibration, RealEye grade [PAGE 7]; standardized 1440x900 16-inch laptop [PAGE 7]; static frames limitation [PAGE 16-17]. Physical: F1 track 5-7 km [PAGE 4], camera angles, tunnel, bridge banners [PAGE 8]; weather/lighting not controlled. Biomechanical: head movement, posture, viewing distance, blink, webcam sampling. Need "veto proof": if calibration grade below threshold or gaze completeness low, data invalid; if static frame lacks motion, cannot generalize to live; if ad placed in low-visibility size, personalization effect confounded. Need maybe proof by contradiction: If the claimed TTFF 1.35 vs 0.79 were true, Table III should show 1.35 for non-personalized VAB or PVAB comparator; it does not, so conclusion is vetoed unless a different comparator is specified. That's a formal cross-layer veto. Need include.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning from verifiable rewards? Need propose three counterfactual experiments with verifiable outcomes. Need no betting. Need predictions. Scenarios:
1. Replicate TTFF personalization contrast with within-subject randomized AOI-matched PVAB vs non-personalized VAB, equal area/placement/contrast, n=100, preregistered; primary outcome TTFF; prediction: if effect real, PVAB TTFF lower by prespecified threshold e.g. >=0.15 s with 95% CI excluding 0; otherwise veto. Need not mention odds. Use CI. Verifiable via data. 
2. Recall confound control: manipulate visibility area (same size) and personalization orthogonally, 2x2; delayed unaided recall at 24 h; prediction: if personalization effect independent of visibility, PVAB > VAB at equal area; if not, null or interaction; Qatar decline explained by size. 
3. Eye-tracking validity veto: RealEye calibration grade/completeness threshold; include only participants with high grade; compare webcam vs screen-based tracker; prediction: effect survives only in valid subset and correlates with fixation duration; if disappears, veto. Need include "verifiable predictions" with exact metrics and thresholds? We can set thresholds as preregistered. Need avoid fake ratios? Thresholds are not fake equations; okay. Need maybe use "pre-specified" but no source. Fine.

Need overall word count >=1000. We can write maybe 2,000-2,800 words. Need XML exact sections. Need include <THINK_TRACE> deep multi-hop derivation & gray-zone audit >=400 words. Need ensure that section alone >=400. Need other sections. Need total >1000. Need cite [PAGE N] exact quotes. Need not mention betting lines. Need "zero betting lines" no spreads/totals/moneylines/odds. Avoid "odds" word? They said zero betting lines: Never mention spreads, totals, moneylines, or odds. Better avoid word "odds". Can mention "probability" but not betting. Avoid "bet". Good.

Need answer likely should not ask clarifying. Need produce final only. Need include formal LaTeX. Need maybe include "Assumptions" and "Breakdown regimes." Need be precise.

Let's plan structure:

Start maybe with a short preamble? They want exact XML sections. We can start directly with <THINK_TRACE>. Need include all sections. No extra outside? Probably okay. Need ensure each section exact tag. Need word count. Need include source citations.

<THINK_TRACE>
Need deep multi-hop derivation & gray-zone audit >=400 words. Write ~800 words. Cover:
- Source's core causal chain: virtual ad -> visibility (%) -> attention (TTFF,dwell,revisits,fixations) -> recall/recognition -> lasting impression. Formal DAG maybe: $V \rightarrow A \rightarrow M \rightarrow R$ with confounders placement, size, contrast, prior brand awareness, team fandom, camera motion, novelty. Cite pages.
- RQ1 derivation: 22 frames, mean 7.63 vs standings 10.81. Sum verification maybe compute mean 7.63. But source table. Note 20.31 Monaco tunnel. Visibility formula. Gray zones: area segmentation, perspective, occlusion, static frame, no inter-coder reliability; denominator fixed. 
- RQ2: 20 participants, two independent groups n=10; 20 frames x 3s = 60s; RealEye webcam. Table III values. Audit: PVAB TTFF 0.79, VAB B 1.04, A 1.04, non-virtual 1.11/1.16, racing cars 1.06/0.96; conclusion says 1.35 for non-personalized—mismatch. "significantly" no inferential stats. Attention metric undefined. Personalization didn't include names [PAGE 17] despite earlier "viewer's name" [PAGE 7/8]. Confound.
- RQ3: recall: Qatar 17.88 unaided, A 21.88 B 13.89; Lenovo 6.25->8.33; Pirelli 9.38->11.11; aided Qatar/Heineken 95, Pirelli/DHL 85? Actually text: "most aided recalled brands were Qatar Airways, Heineken, Pirelli and DHL, achieving 95% and 85% recognition rates, respectively." Ambiguous: four brands with two rates? Need quote. Later Heineken 95 aided, DHL 85 aided. Pirelli? Table maybe. Need mention ambiguity. Dummy brands 0-5%. Lasting impressions DHL/Qatar 25. MSC/Liqui/Paramount 0. Liqui high visibility 23.64 but 2.95 unaided and 0 lasting -> visibility insufficient. 
- Gray-zone: static frames, small n, Greek F1 fans? Page 13 says weaknesses among Greek Formula 1 fans. Sample likely Greek? Need mention. No random assignment described? "divided into two groups" not random. 
- Need "multi-hop": visibility alone not sufficient; personalization may reduce TTFF but recall depends on size; attention can be captured but not encoded; recall vs recognition; aided vs unaided. 
- Need quote exact.

<SOURCE_OPERATORS_AND_EQUATIONS>
Need formal LaTeX equations. Include:
1. Visibility percentage:
$V_{j} = \frac{A_{s,j}}{A_{f,j}} \times 100\%$, $A$ in px^2 or m^2, dimensionless %. Assumptions. Breakdown: $A_f \to 0$; $A_s/A_f >1$ invalid; occlusion; segmentation error. Average $\bar V = (1/N)\sum_{j=1}^{N} V_j$, $N=22$ [PAGE 8]. Cite source formula [PAGE 7]. 
2. Eye tracking:
$\tau_{i,k} = \min\{t: g_i(t)\in \mathcal{A}_k\}$ seconds; $D_{i,k} = \sum_{f\in F_{i,k}} \Delta t_f$ seconds; $N_{i,k}=|F_{i,k}|$ count; $R_{i,k}$ revisits count. Cite [PAGE 7, 10]. Assumptions: AOIs mutually exclusive? Not necessarily. Breakdown: AOI overlap, gaze loss, calibration failure. 
3. Recall:
$\hat{p}_{b,g} = \frac{n_{b,g}}{N_g}$ proportion; N_g=10 per survey [PAGE 9-10]. Binomial SE $\mathrm{SE}=\sqrt{\hat p(1-\hat p)/N_g}$ proportion; with N=10 huge. If comparing two groups, diff SE $\sqrt{p_A(1-p_A)/n_A + p_B(1-p_B)/n_B}$; no p-values reported. Need cite no inferential stats? We can say source reports no p-values/CIs. 
4. Correlations: $\rho_{XY}$ maybe source mentions correlation matrix but no matrix values; cannot verify. Use Pearson correlation if normal? No numeric. Breakdown: small n, multiple comparisons, aggregation across brands/frames. 
5. Need page citations and verbatim quotes. Quote visibility formula [PAGE 7]. Quote "average visibility ... 7.63%" [PAGE 8]. Quote "shortest Average Time to First Fixation at 0.79 seconds" [PAGE 10]. Quote "personalized ads significantly reduced Time to First Fixation to 0.79 seconds compared to 1.35 seconds for non-personalized ads" [PAGE 14]. Quote "personalized messages used in this study did not include individual participants’ names" [PAGE 17]. 
Need maybe include exact table values. 
Need "singularity/breakdown regimes" explicitly.
Need not mention fake ratios. Formal equations only.

<RETROCAUSAL_GENEALOGY>
Need ~250-400 words. Cover historical lineage:
- Virtual advertising mid-1990s USA, 2006 FIFA World Cup region-specific, 2024 UEFA Coca-Cola, F1 2B viewers 180 countries, F1 TV Pro 2018, Liberty 2017, 294 sponsorships across 10 teams avg 30 [PAGE 1,6]. 
- Eye-tracking lineage: vision science Palmer 2002 relative size, Duchowski 2007, Wedel & Pieters 2012, Orquin & Holmqvist 2018; sports marketing gap Dos Santos 2019, Yoshida 2017; Porter 2022 virtual ads capture attention but less memorable [PAGE 6]. 
- Advertising theory lineage: Aaker brand recall, Keller recognition, sleeper effect, Gerber & Terblanche-Smit two-thirds, embedded ads and overload theory [PAGE 3,15]. 
- "multi-week traps": novelty effect, sleeper effect, repeated exposure, ad fatigue, learning, long-term recall not measured. Single 60-s exposure; static frames; no longitudinal; no delayed recall. Need maybe mention F1 season 2023 frames from 10 races; multiple weeks across season but not longitudinal participant exposure. 
- Retro causal: current personalization claims reverse-engineered from visibility/attention metrics; historical virtual ads justified by cost/market targeting; recall data may be retrofitted. 
Need citations exact. 
Need maybe quote "sleeper effect" [PAGE 3]. 

<RECURSIVE_THEORY_OF_MIND>
Need ~250-400 words. Discuss recursive beliefs:
- Advertiser/broadcaster model: sponsor believes broadcaster believes viewer will attend to personalized ad; viewer may infer targeting and react (privacy, persuasion knowledge). Paper doesn't measure privacy/persuasion knowledge or perceived creepiness. 
- Crisis habit regression: During live F1, high arousal and fast motion [PAGE 4] cause viewers to rely on habitual gaze to cars/race info; personalized ad may capture reflexive attention (lower TTFF) but not deep encoding; recall may fall if message competes with action. Cite race standings 10.81% visibility vs virtual ads 7.63 [PAGE 8], racing cars dwell 0.69 vs PVAB 0.69 [PAGE 10]. 
- Counter-trap: if personalization is too subtle or low-visibility (Qatar low-visibility personalized message), it can backfire; Qatar recall decline [PAGE 11/14]. 
- Clock: TTFF is early clock, but recall requires dwell and revisits; PVAB TTFF 0.79 but time spent 0.69 and fixations 31 vs VAB B 446? Wait PVAB fixations 31 vs VAB B 446; huge disparity due to fewer AOIs? Need note. PVAB had 31 fixations because PVAB appears only in some frames? Actually Table III sums across all? PVAB only in Survey B; 31 total fixations. That is low compared to VAB 446. But average time spent 0.69. Need careful: PVAB fixations sum 31, not average. Since PVAB may be present in only 3 frames? Paper says three personalized virtual advertisements. So total fixations 31 across 3? VAB across 20 frames. Cannot compare sums. Good gray-zone: Table III "Number of Fixations (SUM)" not normalized by exposure count; PVAB appears in 3 frames vs VAB 20, so sum not comparable. Important. Need include in THINK_TRACE and maybe recursive. 
- Recursive ToM: viewer knows ad may be personalized, may allocate attention strategically; sponsor assumes attention equals memory; broadcaster assumes personalization improves engagement; recursive loop. Need mention no measurement of perceived personalization or privacy. 
Need maybe formal belief update? Could write $b_t(s)$ but not necessary. But section required "Crisis habit regression vs counter-trap vs clock." Use these terms explicitly. 
Need citations.

<CROSS_LAYER_VETO_ADJUDICATION>
Need ~300-500 words. Physical/biomechanical/weather veto proof. Need discuss:
- Physical layer: F1 tracks 5-7 km [PAGE 4], camera angles, occlusions, tunnel/bridge, motion blur; static frames standardized 1440x900 on 16-inch laptop [PAGE 7]; webcam eye-tracking not lab-grade; calibration grade [PAGE 7]. 
- Biomechanical layer: head pose, blink, saccades, fatigue, glasses, viewing distance; RealEye sampling rate/completeness; no mention of exclusion criteria, calibration thresholds, or gaze quality grades. Need cite "Realeye.io assigns a grade..." [PAGE 7]. 
- Weather/lighting: rain, glare, shadows, tunnel transitions; Monaco tunnel Qatar 20.31 visibility could be high due to dark background/contrast, not ad effectiveness; no control for luminance/contrast. 
- Cross-layer veto proof: The causal claim "personalization -> recall" requires that eye-tracking data are valid and that AOIs comparable. If calibration grade low, invalid; if AOI sizes differ, visibility confound; if static frame, ecological validity veto. 
- Veto adjudication: A physical/biomechanical/weather layer can veto the inference even if statistical effect exists; e.g., lower TTFF could result from high contrast or luminance, not personalization. Need control. 
- Use exact quote "static frame analysis and an online eye-tracking tool may not fully capture the dynamic and immersive nature of live broadcasts" [PAGE 16-17]. 
- Need "proof" maybe formal: Let $\theta$ be personalization effect; observation $Y = \theta + \beta X + \epsilon$, where X includes luminance/area/motion/calibration. If X not randomized, $\hat\theta$ biased. Veto if $\mathrm{Cov}(X,\text{personalization})\neq0$. But maybe too equation? It's formal and valid. Units not relevant? Could include in SOURCE operators instead. In cross-layer, maybe no equations. But can mention estimand. 
Need avoid toy. 

<RLVR_COUNTERFACTUAL_VETOES>
Need 3 scenarios. Each with prediction. Need verifiable. Write ~400-600 words. 
Scenario 1: Preregistered within-subject AOI-matched TTFF experiment. n=100, 20 frames? Primary TTFF. Need exact: same chassis, same location, same area/contrast; personalize vs neutral message. Randomize order; counterbalance. Prediction: if true, PVAB TTFF reduction >=0.15 s with 95% CI excluding 0 and survives correction; if not, veto claim. 
Scenario 2: Orthogonal personalization x visibility 2x2 with delayed recall at 24h/1 week. Prediction: significant personalization main effect on unaided recall at equal area; if only visibility main effect, veto personalization recall claim; Qatar decline predicted to follow area. 
Scenario 3: Eye-tracking validity/weather/lighting counterfactual. Compare webcam RealEye vs screen-based tracker or manipulate luminance/contrast; include calibration grade threshold. Prediction: personalization effect persists after excluding low-grade and controlling luminance; if effect vanishes or is explained by contrast/area/calibration, veto. 
Need mention verifiable: data, preregistration, CI, manipulation checks. 
Need no betting. 
Need maybe "RLVR" as reward for verifiable outcomes: define reward? Could say "RLVR-style verification: reward if hypothesis test passes prespecified criterion; otherwise veto." But keep concise. 
Need include source citations? Maybe cite pages for metrics and limitations.

Need total >=1000. We can write maybe 2,500 words. Need ensure no mention "odds" etc. Avoid "betting" word? They said zero betting lines. We can mention "no betting lines are used" maybe okay? Better not.

Need exact XML tags. Need not include markdown? XML sections with LaTeX. Fine.

Need "exact [PAGE N] markers and verbatim quotes" throughout. Need quote exact. Let's collect exact quotes:

- [PAGE 1]: "This paper examines virtual advertising in Formula 1, a global sport with over 2 billion viewers across 180 countries" and "a Formula 1 TV Pro subscriber might receive a personalized birthday message, fostering a deeper emotional connection with the sport." 
- [PAGE 2]: market $12.9 billion to $31.1 billion CAGR 19.3%; "77.5% of participants acknowledged the presence of virtual advertising signage"; "55.6% did not perceive this technology as irritating" [PAGE 2].
- [PAGE 3]: "Brand recall is defined as the ability of consumers to accurately retrieve the brand from memory when prompted with a relevant cue"; "sleeper effect, which proposes that an advertisement may not immediately impact consumer behavior after the exposure, but forces its influence over time"; "a brand achieves optimal recognition if it appears around two-thirds of the way through the advertisement".
- [PAGE 4]: "Directors can dynamically insert virtual signage, which is challenging in Formula 1 due to 5 to 7-kilometer tracks"; "attention to sponsor brands is higher in the first half of the game than in the second half."
- [PAGE 6]: "Porter (2022) discovered that while virtual ads capture more visual attention than traditional in-stadium ads during NBA broadcasts, they tend to be less memorable."
- [PAGE 7]: "Visibility Percentage = (Signage Size / Image Size) * 100."; "The final frames, standardized to 1440 x 900 pixels, were captured on a 16-inch laptop display"; "The participants were divided into two groups of 10."; "Time to First Fixation, Time Spent, and Revisits"; "each featuring a virtual advertisement displayed for 3 seconds, amounting to a total exposure time of 60 seconds."; "Realeye.io assigns a grade to assess the quality of eye-tracking data for each participant".
- [PAGE 8]: "average visibility of these signages was calculated to be 7.63% of the total frame size. In comparison, race standings ... covered an average of 10.81% of the frame."; "Qatar Airways advertisement in Monaco’s tunnel, which reached a visibility rate of 20.31%"; "personalized virtual advertising, such as signage featuring a viewer’s name, increases attention".
- [PAGE 9]: Table I values. "In Survey B, the introduction of PVABs resulted in increased viewer interaction"
- [PAGE 10]: "achieving the shortest Average Time to First Fixation at 0.79 seconds"; "The average Time Spent on PVABs was 0.69 seconds, comparable to the Time Spent on racing cars, which was 0.69 seconds in Survey A and 0.68 seconds in Survey B"; Table III. 
- [PAGE 11]: Qatar Airways decline? Actually page 11 has per-frame details; Qatar one: "personalized virtual billboard had an Average Time to First Fixation of 0.72 seconds and an Average Time Spent of 1.01 seconds, with 6 fixations, suggesting that despite increased time spent, personalization did not effectively drive viewers to engage with the advertisement as often."; brand recall page 11: "Qatar Airways achieved the highest average unaided recall rate at 17.88% with stronger recall in Survey A (21.88%) than in Survey B (13.89%)." "Lenovo’s recall increased from 6.25% in Survey A to 8.33% in Survey B"; "Pirelli’s unaided recall rose from 9.38% to 11.11%"; "Qatar Airways’ unaided recall declined from 21.88% to 13.89%".
- [PAGE 12]: "DHL and Qatar Airways were the top performers, each scoring 25%." "MSC Cruises, Liqui Moly, and Paramount+ failed to make any measurable impact, scoring 0% in lasting impressions across both surveys." "Liqui Moly (23.64% visibility, 70% aided recall, 2.95% unaided recall). However, Liqui Moly’s failure to generating lasting impressions (0%) despite high visibility."
- [PAGE 13]: "Dummy brands such as ABB, Julius Bär, and Panasonic, which lack any type of advertising in Formula 1, recorded minimal aided recall rates (0%-5%) validating the survey’s control methodology." "weaknesses in branding execution among Greek Formula 1 fans" 
- [PAGE 14]: "personalized ads significantly reduced Time to First Fixation to 0.79 seconds compared to 1.35 seconds for non-personalized ads"; "The authors included a personalized message in Survey B within the Qatar Airways frame, positioning it in a low-visibility size to evaluate its impact."; "visibility alone is insufficient for driving brand recall"; "metrics like Fixation Duration and Revisit Rates are pivotal ensuring that ads leave a lasting impression".
- [PAGE 15]: "This study extends research on brand recall by demonstrating that personalized virtual ads not only capture immediate attention but also enhance memory retention."; "overload theory" quote.
- [PAGE 16-17]: "reliance on static frame analysis and an online eye-tracking tool may not fully capture the dynamic and immersive nature of live broadcasts experience."; "relatively small sample size of 20 participants in the preliminary experiment limits the generalizability"; "personalized messages used in this study did not include individual participants’ names, potentially limiting the strength of the personal connection"; "targeting 100 participants to validate our dataset"; "solely on static virtual advertisements, leaving other formats... unexplored."
- [PAGE 6]: "F1 TV" launched 2018? Page 6: "In 2018, Formula 1 launched F1 TV, its official OTT platform"; "accessible in 118 territories, with live streaming available in six languages across 85 regions"; "500 million loyal fans, 24 races, and over 1.5 billion viewers".
- [PAGE 1]: "Virtual Advertising, first introduced in the mid-1990s in the USA"; "2006 FIFA World Cup in Germany marked a pivotal moment"; "2024 UEFA European Championship highlighted virtual advertising's success".

Need maybe mention exact table values. Need ensure "verbatim quotes" use exact punctuation. Good.

Need maybe check "Time to First Fixation to 0.79 seconds compared to 1.35 seconds for non-personalized ads" exact. Page 14: "This is reinforced by eye-tracking data showing that personalized ads significantly reduced Time to First Fixation to 0.79 seconds compared to 1.35 seconds for non-personalized ads, demonstrating the effectiveness that personalization in sports broadcasting will have in immediately engaging viewers." Good.

Need maybe mention "Average Time to First Fixation at 0.79 seconds" page 10. Good.

Need maybe mention "Number of Fixations (SUM)" page 10. Good. Use quote.

Need formal equations with units. Let's craft carefully.

Potential issue: They require "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We must not invent fake ratios. Our equations are formal metrics from paper and standard stats. Need label assumptions. Good.

Need maybe mention "visibility percentage is not an SI unit; it is percent, dimensionless." Good. "A_s and A_f in px^2 if image-plane; if physical area, m^2." Good. "Breakdown at A_f=0; if A_s>A_f due to segmentation error; if overlay partially occluded; if AOI double-counts." Good.

Need maybe mention "Time to First Fixation" units seconds; "Dwell time" seconds; "Fixation count" count; "Revisit count" count. Good.

Need maybe mention "Ratio (%) - Average" in Table III not defined; cannot write equation. Important to avoid inventing. State "The source does not define the column labeled 'Ratio (%) - Average'; therefore no formal operator can be reconstructed without invention." Cite [PAGE 10]. Good.

Need maybe mention "Attention (Average)" undefined; negative values. Good.

Need maybe mention "correlation matrix" not numeric. Good.

Need maybe mention "CAGR 19.3%" [PAGE 2] not used? Could mention lineage. Fine.

Need "Crisis habit regression vs counter-trap vs clock." Let's elaborate:
- Crisis habit regression: Under live race stress, viewers' gaze returns to cars/race info; ad attention is opportunistic. The paper's own data: racing cars dwell 0.69 s in A and 0.68 in B, PVAB 0.69; VAB 0.68/0.65. This suggests personalization equalized dwell but not superior. Need cite [PAGE 10]. 
- Counter-trap: If personalization is too low visibility or too intrusive, it can fail or annoy; Qatar low-visibility size reduced recall [PAGE 14]; 2002 study found frustration when ads appeared directly on playing field [PAGE 2-3]. 
- Clock: TTFF only early; recall at end depends on dwell/revisits/fixation duration. PVAB TTFF 0.79 but total fixations 31 vs VAB 446 (not comparable because PVAB in 3 frames) [PAGE 10]. Need mention the sum not normalized. 
- Recursive ToM: sponsor's model of viewer's model of sponsor. Need mention "viewer's name" not used [PAGE 17], so personalization was weak; participants may not have perceived personalization. This is recursive: if viewer doesn't detect personalization, no persuasion knowledge or emotional connection; sponsor's belief is unfounded. Good.

Need "RETROCAUSAL_GENEALOGY" maybe include "retrocausal" meaning tracing current claims back to historical assumptions. We can say the paper's causal claim is retrofitted to older findings: virtual ads recall advantages (Psyma 1999; Pyun et al. 2004) and Sander & Altobelli 2011 acceptance; but Porter 2022 warns virtual ads less memorable. The paper's own data echo Porter: PVAB reduces TTFF but recall mixed. Need cite [PAGE 2,6,11]. Good.

Need "multi-week traps": We can phrase: "Multi-week trap 1: novelty/learning effect; one 60-s exposure cannot model season-long exposure. Multi-week trap 2: sleeper effect; immediate recall may not predict delayed recall, and source cites sleeper effect [PAGE 3]. Multi-week trap 3: repetition/fatigue; embedded ads repeated within content [PAGE 4], but personalization could become wearing. Multi-week trap 4: selection/season drift; frames from 10 races across 2023 season, but participants saw static frames; brand salience may be driven by real-season campaigns." Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe include "weather veto": Monaco tunnel dark, Qatar 20.31% visibility could be due to luminance contrast. Need cite [PAGE 8-9]. Physical: bridge banners in Abu Dhabi, tunnel in Monaco [PAGE 8]. "5 to 7-kilometer tracks" [PAGE 4]. Biomechanical: webcam calibration, RealEye grade [PAGE 7]. Weather: no mention of rain/lighting; F1 races vary; static frames from 10 races. Need state if any layer fails, causal inference vetoed. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" three scenarios with predictions. Need maybe use "verifiable reward" language. Need ensure not too long. We can use numbered list. Need mention "prediction" for each. Good.

Need final length. Let's draft.

Need use "GSE + GSI Frontier Reasoning Foundry" maybe not necessary. But can set analytical tone.

Need be mindful: "ZERO BETTING LINES" - avoid "odds", "spread", "total", "moneyline". We won't.

Need maybe mention "CAGR" okay. 

Need maybe include exact quote "over 2 billion viewers" vs "over 1.5 billion viewers" inconsistency? Page 1 says over 2 billion across 180 countries; page 6 says over 1.5 billion viewers. This is a gray-zone audit. Need include? It is a source inconsistency. Add in THINK_TRACE: source gives two audience scales: "over 2 billion viewers across 180 countries" [PAGE 1] vs "over 1.5 billion viewers" [PAGE 6]. Not central but audit. Good. Need maybe mention 500 million loyal fans, 24 races. Good.

Need maybe include "22 frames from 10 different races" [PAGE 7]. Good.

Need maybe include "average visibility 7.63 vs race standings 10.81" [PAGE 8]. Good.

Need maybe include "sample 20 participants, divided into two groups of 10" [PAGE 7]. Good.

Need maybe include "Survey A 20% aged 18-22 and 80% 23+; Survey B 30% younger and 70% older" [PAGE 9]. But sample n=10; age groups not equal. Good.

Need maybe mention "Greek Formula 1 fans" [PAGE 13] indicates sample context but not stated in methods; potential generalizability. Good.

Need maybe mention "dummy brands ABB, Julius Bär, Panasonic are actual Formula E sponsors" [PAGE 8] but page 13 says "lack any type of advertising in Formula 1" and "0%-5%" validates. Good.

Need maybe mention "brand recall vs recognition" distinction: paper defines recall vs recognition [PAGE 3]; RQ3 uses unaided and aided recall; "aided recall" is closer to recognition but paper labels aided recall. Need note in THINK_TRACE maybe. Good.

Need maybe mention "Qatar 95% aided, Heineken 95? Pirelli and DHL 85?" Ambiguity. Quote: "The most aided recalled brands were Qatar Airways, Heineken, Pirelli and DHL, achieving 95% and 85% recognition rates, respectively." This is ambiguous: four brands, two rates. Later: "Heineken ... 95% aided recall" [PAGE 12], "DHL ... 85% aided recall" [PAGE 12]. Table VIII likely has values but not included. Need flag in audit. Good.

Need no mention "odds". Good.

Need maybe mention "statistical significance" but not odds. Good.

Need maybe include "CAGR 19.3%" as historical lineage. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" should be formal and concise but include all equations. Use \begin{aligned} maybe. Need not overdo.

Need "THINK_TRACE" >=400 words. We can write ~700. Need ensure total >1000. Final answer maybe 2,500 words. Good.

Let's compose.

Need exact XML tags. The user requested exact XML sections: <THINK_TRACE>...</THINK_TRACE> etc. We can include LaTeX inside. Good.

Need no markdown headings outside? Fine.

Let's draft final:

<THINK_TRACE>
The paper's implicit causal model is ... DAG. Multi-hop derivation: ... 
Cite quotes. 
Audit: visibility formula; 22 frames; mean; Qatar; RQ2; Table III; mismatch; no stats; personalization not names; PVAB fixations not normalized; attention metric undefined; RQ3 recall; Qatar decline confounded; Liqui high visibility no lasting; dummy controls; sample; Greek fans; audience scale inconsistency; static frames; no delayed recall; no privacy/persuasion. 
</THINK_TRACE>

Need include >=400 words. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
Use equations. Include quotes. 
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
~350 words.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
~350 words.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
~450 words.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
~500 words.
</RLVR_COUNTERFACTUAL_VETOES>

Need maybe total 2,400. Good.

Need ensure "verbatim quotes" exact. Let's verify quotes:
- "average visibility of these signages was calculated to be 7.63% of the total frame size." exact? Page 8: "Analyzing 22 screenshots from various 2023 Formula 1 races, each featuring at least one virtual advertisement, the average visibility of these signages was calculated to be 7.63% of the total frame size." Good.
- "race standings -a common graphical element in Formula 1 broadcasts- covered an average of 10.81% of the frame." exact.
- "Qatar Airways advertisement in Monaco’s tunnel, which reached a visibility rate of 20.31%" exact.
- "shortest Average Time to First Fixation at 0.79 seconds" exact? Page 10: "achieving the shortest Average Time to First Fixation at 0.79 seconds". Good.
- "The average Time Spent on PVABs was 0.69 seconds, comparable to the Time Spent on racing cars, which was 0.69 seconds in Survey A and 0.68 seconds in Survey B" exact.
- "personalized ads significantly reduced Time to First Fixation to 0.79 seconds compared to 1.35 seconds for non-personalized ads" exact.
- "The authors included a personalized message in Survey B within the Qatar Airways frame, positioning it in a low-visibility size to evaluate its impact." exact? Page 14: "The authors included a personalized message in Survey B within the Qatar Airways frame, positioning it in a low-visibility size to evaluate its impact." Good.
- "personalized messages used in this study did not include individual participants’ names, potentially limiting the strength of the personal connection such messaging could evoke." exact page 17. Good.
- "static frame analysis and an online eye-tracking tool may not fully capture the dynamic and immersive nature of live broadcasts experience." exact page 16. Good.
- "relatively small sample size of 20 participants in the preliminary experiment limits the generalizability of the results" exact page 17. Good.
- "Realeye.io assigns a grade to assess the quality of eye-tracking data for each participant" exact page 7. Good.
- "The final frames, standardized to 1440 x 900 pixels, were captured on a 16-inch laptop display" exact page 7. Good.
- "each featuring a virtual advertisement displayed for 3 seconds, amounting to a total exposure time of 60 seconds" exact page 7-8? Page 7 end: "Participants then viewed 20 frames from the 2023 Formula 1 season, each featuring a virtual" Page 8: "advertisement displayed for 3 seconds, amounting to a total exposure time of 60 seconds." Good cite [PAGE 7-8].
- "The participants were divided into two groups of 10." exact page 7. Good.
- "DHL and Qatar Airways were the top performers, each scoring 25%." exact page 12.
- "MSC Cruises, Liqui Moly, and Paramount+ failed to make any measurable impact, scoring 0% in lasting impressions across both surveys." exact page 12.
- "Liqui Moly (23.64% visibility, 70% aided recall, 2.95% unaided recall). However, Liqui Moly’s failure to generating lasting impressions (0%) despite high visibility." exact? Page 12: "Liqui Moly (23.64% visibility, 70% aided recall, 2.95% unaided recall). However, Liqui Moly’s failure to generating lasting impressions (0%) despite high visibility." Yes.
- "Dummy brands such as ABB, Julius Bär, and Panasonic, which lack any type of advertising in Formula 1, recorded minimal aided recall rates (0%-5%) validating the survey’s control methodology." exact page 13.
- "weaknesses in branding execution among Greek Formula 1 fans" exact page 13.
- "This study extends research on brand recall by demonstrating that personalized virtual ads not only capture immediate attention but also enhance memory retention." exact page 15.
- "Porter (2022) discovered that while virtual ads capture more visual attention than traditional in-stadium ads during NBA broadcasts, they tend to be less memorable." exact page 6.
- "Virtual Advertising, first introduced in the mid-1990s in the USA" exact page 1.
- "2006 FIFA World Cup in Germany marked a pivotal moment" exact page 1.
- "2024 UEFA European Championship highlighted virtual advertising's success" exact page 1.
- "In 2018, Formula 1 launched F1 TV, its official OTT platform" exact page 6.
- "500 million loyal fans, 24 races, and over 1.5 billion viewers" exact page 6.
- "over 2 billion viewers across 180 countries" exact page 1.
- "5 to 7-kilometer tracks" exact page 4: "challenging in Formula 1 due to 5 to 7-kilometer tracks". Good.
- "attention to sponsor brands is higher in the first half of the game than in the second half." exact page 5? Page 5? Actually page 4-5: "Additionally, attention to sponsor brands is higher in the first half of the game than in the second half." It's page 5? The text at end of page 4: "Research by Bruer et al. (2021)... finding that attention declines when the game's outcome appears predictable and increases if a favoured" then page 5 "team is likely to lose. Additionally, attention to sponsor brands is higher in the first half of the game than in the second half." So cite [PAGE 4-5]. Good.

Need maybe avoid "significantly" as source claim vs our wording. Use quote.

Need maybe mention "statistical significance" not reported. Good.

Need "RLVR" scenarios maybe include "pre-registered" etc. Good.

Let's write final now. Ensure XML tags exactly. Use no extra sections? We can include all. Good.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s implicit causal chain is multi-hop rather than single-step: virtual/ad format and placement determine visibility, visibility and personalization determine early attention (Time to First Fixation, dwell, fixations, revisits), attention determines memory encoding, and memory encoding determines unaided recall, aided recall/recognition, and “lasting impressions.” Formally, the source is testing something like \(V \rightarrow A \rightarrow M \rightarrow R\), where \(V\) is visibility/format, \(A\) is eye-tracking attention, \(M\) is memory, and \(R\) is recall/recognition. The paper states the visibility operator explicitly: “Visibility Percentage = (Signage Size / Image Size) * 100” [PAGE 7]. It then reports that across 22 frames “the average visibility of these signages was calculated to be 7.63% of the total frame size,” while “race standings -a common graphical element in Formula 1 broadcasts- covered an average of 10.81% of the frame” [PAGE 8]. The Monaco tunnel case is the key positive outlier: “Qatar Airways advertisement in Monaco’s tunnel, which reached a visibility rate of 20.31%” [PAGE 8-9]. This supports a placement/visibility pathway, but not by itself a personalization pathway.

For RQ2, the preliminary experiment uses 20 participants “divided into two groups of 10” [PAGE 7], with 20 frames “each featuring a virtual advertisement displayed for 3 seconds, amounting to a total exposure time of 60 seconds” [PAGE 7-8]. The headline result is that personalized virtual advertising billboards achieved “the shortest Average Time to First Fixation at 0.79 seconds” [PAGE 10], and “The average Time Spent on PVABs was 0.69 seconds, comparable to the Time Spent on racing cars, which was 0.69 seconds in Survey A and 0.68 seconds in Survey B” [PAGE 10]. However, the conclusion overstates the contrast: it says “personalized ads significantly reduced Time to First Fixation to 0.79 seconds compared to 1.35 seconds for non-personalized ads” [PAGE 14], but Table III reports Virtual Advertising Billboard at 1.04 s in both Survey A and Survey B; 1.35 s is the Left Hand Side Standing Graph in Survey B [PAGE 10]. That mismatch is a gray-zone veto unless the authors meant a different comparator, which they do not specify. Also, “significantly” is unsupported by reported inferential statistics: no p-values, confidence intervals, effect sizes, or preregistered primary outcome are visible. With \(n=10\) per group, binomial uncertainty for any recall proportion is large; for example, a proportion near 0.5 has standard error \(\sqrt{0.5(1-0.5)/10}\approx0.158\) under independent Bernoulli sampling. The source’s recall percentages often differ by only a few percentage points, so the design is underpowered for the strength of the causal language.

RQ3 has the same confound. Qatar Airways “achieved the highest average unaided recall rate at 17.88% with stronger recall in Survey A (21.88%) than in Survey B (13.89%)” [PAGE 11]. But the authors also state: “The authors included a personalized message in Survey B within the Qatar Airways frame, positioning it in a low-visibility size to evaluate its impact” [PAGE 14]. Therefore the Qatar decline cannot be attributed to personalization per se; visibility, area, and placement changed simultaneously. The paper itself concedes that “visibility alone is insufficient for driving brand recall” [PAGE 14]. The Liqui Moly case reinforces this: “Liqui Moly (23.64% visibility, 70% aided recall, 2.95% unaided recall). However, Liqui Moly’s failure to generating lasting impressions (0%) despite high visibility” [PAGE 12]. Meanwhile “DHL and Qatar Airways were the top performers, each scoring 25%” for lasting impressions, and “MSC Cruises, Liqui Moly, and Paramount+ failed to make any measurable impact, scoring 0% in lasting impressions across both surveys” [PAGE 12]. The dummy-brand control is one of the stronger design elements: “Dummy brands such as ABB, Julius Bär, and Panasonic, which lack any type of advertising in Formula 1, recorded minimal aided recall rates (0%-5%) validating the survey’s control methodology” [PAGE 13].

A major construct-validity trap is that the paper repeatedly implies name-based personalization—“personalized virtual advertising, such as signage featuring a viewer’s name, increases attention” [PAGE 8]—but later admits: “personalized messages used in this study did not include individual participants’ names, potentially limiting the strength of the personal connection such messaging could evoke” [PAGE 17]. Thus the manipulation may not have been perceived as personalization at all. Another trap is the unreported/undefined Table III columns: “Ratio (%) - Average” and “Attention (Average)” are not defined, and “Number of Fixations (SUM)” is a sum, not a normalized rate; PVAB appears in only three personalized frames, so its sum of 31 fixations cannot be compared directly with 446 fixations for Virtual Advertising Billboard across many more frames [PAGE 10]. The paper also reports “Greek Formula 1 fans” [PAGE 13], but the methods do not justify that sampling frame, and the source gives inconsistent audience scales: “over 2 billion viewers across 180 countries” [PAGE 1] versus “over 1.5 billion viewers” [PAGE 6]. These are not peripheral; they govern whether the claimed ad-effectiveness pathway generalizes.

The strongest audit conclusion is therefore layered. Visibility is measurable and the 7.63% average is internally reproducible from the listed 22 values, but attention is not cleanly isolated from area, contrast, placement, motion, and luminance; recall is not cleanly isolated from prior brand salience, aided-versus-unaided differences, and personalization visibility; and the conclusion’s 1.35 s comparator is not supported by Table III [PAGE 10, PAGE 14]. The paper’s own limitations section says “static frame analysis and an online eye-tracking tool may not fully capture the dynamic and immersive nature of live broadcasts experience” [PAGE 16], and “relatively small sample size of 20 participants in the preliminary experiment limits the generalizability of the results” [PAGE 17]. Those admissions are decisive: the causal claim “personalized virtual ads ... enhance memory retention” [PAGE 15] is a hypothesis worth testing, not an established result from this preliminary design.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source gives one explicit equation, the visibility operator:
\[
V_j=\frac{A_{s,j}}{A_{f,j}}\times 100\%,
\]
where \(A_{s,j}\) is signage area in the image plane and \(A_{f,j}\) is frame area, both in the same units, e.g. \(\mathrm{px}^2\) if measured digitally or \(\mathrm{m}^2\) if geometrically projected. The output \(V_j\) is dimensionless percent. The source states verbatim: “Visibility Percentage = (Signage Size / Image Size) * 100” [PAGE 7]. The average over frames is
\[
\bar V=\frac{1}{N}\sum_{j=1}^{N}V_j,
\]
with \(N=22\) frames [PAGE 8]. The reported value is “7.63% of the total frame size” [PAGE 8]. Assumptions: planar frame area, legible signage boundary, no double-counted AOI overlap, and comparable perspective/segmentation across frames. Breakdown regimes: \(A_{f,j}\to0\) makes \(V_j\) singular; \(A_{s,j}>A_{f,j}\) implies segmentation or projection error; partial occlusion, motion blur, or overlay transparency breaks the area interpretation; and using different camera distances makes \(V_j\) incomparable unless perspective is corrected. The source does not report inter-coder reliability for signage masks, so the operator is reproducible only if the segmentation rule is fixed.

For eye tracking, the source reports Time to First Fixation, Time Spent, Number of Fixations, Revisits, and an undefined “Attention (Average)” [PAGE 10]. A formal reading is:
\[
\tau_{i,k}=\min\{t:g_i(t)\in\mathcal{A}_k\},
\]
where \(\tau_{i,k}\) is time to first fixation in seconds for participant \(i\) on AOI \(k\), \(g_i(t)\) is gaze location, and \(\mathcal{A}_k\) is the AOI region. Dwell time is
\[
D_{i,k}=\sum_{f\in F_{i,k}}\Delta t_f,
\]
in seconds, where \(F_{i,k}\) is the set of fixations inside \(\mathcal{A}_k\) and \(\Delta t_f\) is fixation duration. Fixation count is
\[
N_{i,k}=|F_{i,k}|,
\]
in count units, and revisits are a count of re-entries into \(\mathcal{A}_k\). The source’s personalized billboard result is \(\tau=0.79\ \mathrm{s}\) and \(D=0.69\ \mathrm{s}\) [PAGE 10]. Assumptions: AOIs are non-overlapping or otherwise assigned by a pre-specified rule; calibration is valid; gaze samples are not missing at random. Breakdown regimes: AOI overlap, webcam calibration failure, head movement, blink/occlusion, and gaze loss can produce undefined or biased \(\tau\) and \(D\). The source itself notes that “Realeye.io assigns a grade to assess the quality of eye-tracking data for each participant” [PAGE 7], but it does not report the grade distribution or exclusion threshold.

For recall, if \(n_{b,g}\) participants in group \(g\) recall brand \(b\) out of \(N_g=10\), then
\[
\hat p_{b,g}=\frac{n_{b,g}}{N_g}
\]
is a proportion in \([0,1]\). Under independent Bernoulli sampling, the standard error is
\[
\mathrm{SE}(\hat p_{b,g})=\sqrt{\frac{\hat p_{b,g}(1-\hat p_{b,g})}{N_g}},
\]
and the two-group difference standard error is
\[
\mathrm{SE}(\hat p_{b,B}-\hat p_{b,A})=
\sqrt{\frac{\hat p_{b,A}(1-\hat p_{b,A})}{N_A}+
\frac{\hat p_{b,B}(1-\hat p_{b,B})}{N_B}}.
\]
The source does not report these or any inferential test. The relevant recall values are Qatar Airways \(21.88\%\to13.89\%\), Lenovo \(6.25\%\to8.33\%\), and Pirelli \(9.38\%\to11.11\%\) [PAGE 11]. The source also claims “personalized ads significantly reduced Time to First Fixation to 0.79 seconds compared to 1.35 seconds for non-personalized ads” [PAGE 14], but Table III gives 1.04 s for Virtual Advertising Billboard in both surveys, and 1.35 s for Left Hand Side Standing Graph in Survey B [PAGE 10]. That is a formal breakdown: the stated comparator is not the operator’s own non-personalized billboard level unless a different table or model is supplied. The paper’s correlation claims are also not reconstructible: it mentions “correlation matrixes” and “correlation heatmaps” [PAGE 14, PAGE 15], but no numeric matrix is present in the provided text, so \(\rho_{XY}\) cannot be audited. The columns “Ratio (%) - Average” and “Attention (Average)” are undefined [PAGE 10], so no additional equation should be invented for them.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is a layered retrocausal chain. First, virtual advertising is traced to “the mid-1990s in the USA” and then to the “2006 FIFA World Cup in Germany,” which “marked a pivotal moment” by enabling region-specific ads; the “2024 UEFA European Championship highlighted virtual advertising's success” [PAGE 1]. Second, the motorsport case is built on F1’s global reach: “over 2 billion viewers across 180 countries” [PAGE 1], with “500 million loyal fans, 24 races, and over 1.5 billion viewers” [PAGE 6], and F1 TV launched in 2018: “In 2018, Formula 1 launched F1 TV, its official OTT platform” [PAGE 6]. Third, the measurement lineage is consumer neuroscience and vision science: relative size affects attention, eye tracking reveals fixation and dwell, and sports marketing has underused neurophysiological methods. The paper cites the classic warning from Porter: “Porter (2022) discovered that while virtual ads capture more visual attention than traditional in-stadium ads during NBA broadcasts, they tend to be less memorable” [PAGE 6]. That warning is crucial because it predicts the paper’s own pattern: faster fixation is not the same as stronger memory.

The advertising-theory lineage also has built-in traps. Brand recall is defined as retrieval “when prompted with a relevant cue,” while recognition is confirming prior exposure [PAGE 3]. The paper cites the sleeper effect: an ad “may not immediately impact consumer behavior after the exposure, but forces its influence over time” [PAGE 3]. It also cites Gerber and Terblanche-Smit’s claim that “a brand achieves optimal recognition if it appears around two-thirds of the way through the advertisement” [PAGE 3]. These are multi-week traps: a 60-second static-frame experiment cannot model delayed effects, repeated exposure, or ad fatigue. The paper mentions repeated embedded exposure and reduced fatigue [PAGE 4], but it does not test a longitudinal schedule. The historical justification for virtual ads—regional targeting, cost reduction, extra inventory—does not automatically transfer to personalized memory effects. The retrocausal error would be to read the current 0.79 s fixation result back into a long-run brand-equity claim. The paper itself concedes the need to study “whether its effects persist beyond the immediate viewing experience” [PAGE 15] and that static frames “may not entirely reflect how viewers interact with personalized virtual ads in real-time environments” [PAGE 17]. Thus the genealogy supports a plausible attention mechanism but not a settled recall mechanism; the safer historical analogy is that virtual advertising changes inventory and targeting, while memory remains conditional on placement, salience, repetition, and prior brand knowledge.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive model has three agents: the sponsor, the broadcaster/streaming platform, and the viewer. The sponsor believes the broadcaster believes the viewer will attend to a personalized overlay; the broadcaster believes the sponsor will pay for targeted inventory; the viewer may infer that the overlay is targeted and may respond with either engagement or persuasion-knowledge resistance. The paper does not measure perceived personalization, privacy concern, or persuasion knowledge, yet it claims personalization can create “a deeper emotional connection with the sport” [PAGE 1]. That is a recursive belief claim without a recursive measurement. The manipulation is further weakened because “personalized messages used in this study did not include individual participants’ names” [PAGE 17]; if the viewer does not detect personalization, the sponsor’s second-order belief is false and the causal pathway collapses.

Crisis habit regression is the first failure mode. During live F1, viewers are under high visual load from cars, race graphics, and track motion; the paper notes that F1 tracks are “5 to 7-kilometer” and dynamically branded [PAGE 4]. Under that load, gaze may regress to habitual targets—cars and race info—rather than encode an ad. The paper’s own data show racing cars at 0.69 s dwell in Survey A and 0.68 s in Survey B, while PVABs also show 0.69 s [PAGE 10]. Equal dwell is not evidence of deeper encoding; it may be attentional capture without consolidation. The counter-trap is the opposite: a personalized message that is too small, too subtle, or too low in the frame can fail to enter the gaze path. The Qatar Airways case is exactly this: the authors “positioning it in a low-visibility size” and recall fell from 21.88% to 13.89% [PAGE 14]. The counter-trap is that making personalization less intrusive can also make it less memorable.

The clock is the third failure mode. Time to First Fixation is an early-clock metric; recall requires later dwell, revisits, and fixation duration. The paper reports PVAB TTFF at 0.79 s, but its fixation sum is only 31, versus 446 for Virtual Advertising Billboard [PAGE 10]; those sums are not comparable because PVAB appears in only three personalized frames, while the billboard category spans many frames. The paper’s own conclusion that “metrics like Fixation Duration and Revisit Rates are pivotal” [PAGE 14] implies that the early clock alone cannot carry the memory claim. Recursively, the sponsor’s model should be: viewer notices ad quickly, viewer infers personalization, viewer elaborates, viewer retrieves brand later. The source only verifies the first step, and even that is confounded by area and placement. The correct counter-trap is a within-subject clock design that holds area, contrast, location, and motion constant while varying personalization; without that, the recursive belief “personalization caused recall” is underdetermined.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer vetoes any claim that treats visibility as a pure creative effect. F1 broadcasts are camera-mediated, with bridge banners, tunnel placements, and track corners; the paper notes that “Directors can dynamically insert virtual signage, which is challenging in Formula 1 due to 5 to 7-kilometer tracks” [PAGE 4]. The Monaco tunnel’s 20.31% visibility [PAGE 8-9] may reflect dark background and luminance contrast as much as personalization. The study standardizes frames to “1440 x 900 pixels” captured on a “16-inch laptop display” [PAGE 7], but it does not control display luminance, viewing distance, ambient light, or compression artifacts across participants. A physical veto applies if the ad’s contrast or size differs between personalized and non-personalized conditions: lower TTFF could be a luminance/area effect, not a personalization effect.

The biomechanical layer vetoes inference if webcam eye-tracking quality is inadequate. The source says “Realeye.io assigns a grade to assess the quality of eye-tracking data for each participant” [PAGE 7], but it does not report grade thresholds, exclusion counts, head-pose stability, blink rates, or sampling completeness. Webcam tracking is sensitive to glasses, posture, screen distance, and head movement. A biomechanical veto applies if participants with low calibration grades remain in the analysis or if gaze loss is correlated with AOI location. The paper’s own limitation is explicit: “static frame analysis and an online eye-tracking tool may not fully capture the dynamic and immersive nature of live broadcasts experience” [PAGE 16]. That is a biomechanical/ecological-validity veto, not a minor caveat.

The weather/lighting layer vetoes generalization from a small frame set. The paper analyzes 22 frames from 10 races [PAGE 7], but it does not stratify by rain, glare, shadow, tunnel transition, or time of day. A tunnel frame with high contrast can dominate the average and the recall narrative. Cross-layer adjudication therefore requires a hierarchy: first, validity of the eye-tracking signal; second, equality of AOI area/contrast/location across conditions; third, control of scene luminance and motion; fourth, only then interpretation of personalization. If any earlier layer fails, the later memory claim is vetoed. The strongest concrete veto is the comparator mismatch: the conclusion says “personalized ads significantly reduced Time to First Fixation to 0.79 seconds compared to 1.35 seconds for non-personalized ads” [PAGE 14], but Table III shows Virtual Advertising Billboard at 1.04 s in both surveys and 1.35 s only for Left Hand Side Standing Graph in Survey B [PAGE 10]. Unless the authors identify a different non-personalized comparator, the physical/methodological layer vetoes the stated effect size. The correct adjudication is not “personalization failed” or “personalization succeeded”; it is “the current design cannot separate personalization from area, placement, luminance, and calibration.”
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. **AOI-matched, within-subject TTFF counterfactual.** Preregister a within-subject experiment with \(n=100\), counterbalanced frame order, and the same ad location, area, contrast, and motion across conditions; only the personalization cue varies. Primary outcome: \(\tau\), Time to First Fixation in seconds. Verifiable prediction: if the source’s effect is real, personalized AOIs should reduce \(\tau\) by at least a prespecified \(0.15\ \mathrm{s}\) with a 95% confidence interval excluding zero, and the effect should survive correction for AOI area and luminance. Veto prediction: if the 95% interval includes zero, or if the effect disappears after area/contrast adjustment, the source’s headline “0.79 s versus 1.35 s” claim [PAGE 14] is not verifiable and should be rejected as stated.

2. **Personalization × visibility factorial with delayed recall.** Randomize a 2×2 design: personalization present/absent crossed with high/low visibility, holding brand, frame, and placement constant. Measure unaided recall immediately and at 24 hours and one week. Verifiable prediction: if personalization has an independent memory effect, the personalization main effect on unaided recall should be positive at equal visibility, and the Qatar Airways decline from 21.88% to 13.89% [PAGE 11] should be explained by the low-visibility size manipulation rather than by personalization. Veto prediction: if only the visibility main effect is significant, or if the personalization effect is confined to the immediate aided-recognition task, then the paper’s claim that personalized ads “enhance memory retention” [PAGE 15] is vetoed; the result would instead support the paper’s own admission that “visibility alone is insufficient” [PAGE 14] but not that personalization is sufficient.

3. **Calibration/weather/luminance veto test.** Replicate with RealEye webcam tracking plus a screen-based tracker as a criterion, stratify by calibration grade, and manipulate scene luminance/contrast in a tunnel-like frame. Verifiable prediction: if the personalization effect is robust, it should persist after excluding low-grade participants and after controlling for luminance and AOI size; the effect should correlate with fixation duration and revisits, as the paper claims [PAGE 14]. Veto prediction: if the effect vanishes in high-grade calibration participants, or if the Monaco tunnel advantage disappears when luminance contrast is matched, then the 20.31% visibility result [PAGE 8-9] and the recall interpretation are vetoed as physical-layer artifacts. A further verifiable check is normalization: report fixation counts per frame-exposure rather than “Number of Fixations (SUM)” [PAGE 10], because PVAB’s 31 fixations cannot be compared with 446 billboard fixations without exposure normalization. If the normalized PVAB rate is not superior, the attention-to-memory bridge is not verifiable.
</RLVR_COUNTERFACTUAL_VETOES>