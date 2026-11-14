---
source: "2019 - Predicting Major League Baseball Strikeout Rates from Differences in Velocity and Movement Among Player Pitch Types - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 13
model: deepseek/deepseek-v4.1-flash-1017
words: 7597
---

<NATIVE_REASONING>
We need answer user. Need follow invariants. They provided source pages 13, image includes MIT Sloan paper. Need produce XML sections exactly? They specify >=1000 words across exact XML sections. Need deep multi-hop derivation & gray-zone audit >=400 words. Also source operators/equations formal LaTeX, units, page citations, breakdown. Need cite [PAGE N] markers and verbatim quotes when source pages provided. Need page count 13. We don't see explicit page markers in pasted text, but PDF pages likely 1-13. Need infer page numbers from source content: page 1 title/intro? The text had "1" after header. Page 2 background/methods. Need map. We need cite exact [PAGE N] markers. Use page markers based on printed page numbers? Source pages: 13 pages. The pasted text has form feed? It shows numbers 1,2,... but not [PAGE]. Need cite [PAGE 1], [PAGE 2], etc. Need quote verbatim. Need avoid betting lines. No spreads/totals etc. This is baseball research, not betting. Must avoid any odds. We can mention strikeout percentage only. Need no fake ratios. Use formal equations. We can use their Mahalanobis, WMD, Shannon entropy. Need ensure not invent fake ratios. We can include exact equations, assumptions, units. Need mention source equations incomplete due to image? We can present formal versions. Need not mention betting. Need answer likely analysis of paper, with retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes. Need >=1000 words total. We need satisfy exact XML sections. Need likely no markdown outside? We can wrap sections in XML as requested. Need include all. The answer should be no betting lines. Need maybe no "odds" word? Invariant says never mention spreads, totals, moneylines, or odds. We can avoid those terms. Mention "no wagering" maybe not needed. Avoid "betting". Use "prediction" okay.

Need produce detailed. Need use source quotes. Need cite pages. Need exact verbatim quotes. Need page numbers. Let's map pages carefully.

The source text:
Page 1 likely title, author, abstract/introduction start? Let's parse. It begins title and author; then "Baseball Track Eric P. Martin^1". Then Introduction. At bottom "2019 Research Papers Competition Presented by: 1" -> printed page 1. So [PAGE 1] title, intro, maybe background. Page 2 includes Background and Methods start, bottom page 2. Page 3 includes 3.1 clustering, Table 1, bottom page 3. Page 4 includes Table 1 continuation, 3.2 Distance, Table 2, 3.3 start, bottom page 4. Page 5 includes independent variables equations, bottom page 5. Page 6 includes 3.4 models, 4 Results, 4.1 start, bottom page 6. Page 7 includes Table 3, Figure 1, bottom page 7. Page 8 includes Figure 2/3, Table 4, bottom page 8. Page 9 conclusions, bottom page 9. Page 10 references start, bottom 10. Page 11 references cont, bottom 11. Page 12 references cont, bottom 12. Page 13? The pasted text ends at 12? Wait PDF pages 13. At bottom after references page 12 maybe page 13 absent? The source text shows after page 12 final "2019 Research Papers Competition Presented by: 12" no more. But PDF pages 13 maybe page 13 blank? Hmm. We can cite up to 12. Need be careful: "PAGES: 13" means 13 source pages. The pasted text may not include final blank page. We can cite [PAGE 12] for references. Use [PAGE 13] only if necessary? Better avoid citing page 13 unless blank. Could mention source has 13 PDF pages; substantive text through 12. But exact markers? Use [PAGE 7] for Figure 1 etc. Need quote exact.

Need include equations:

Mahalanobis distance:
\(D(x,m,C) = \sqrt{(x-m)^\top C^{-1}(x-m)}\).
Actually paper text: "The result is a unitless measure of the Mahalanobis distance (D) for each point (x) defined as:" equation not visible. It probably \(D = \sqrt{(x-m)^T C^{-1} (x-m)}\). They cite [28]. Units: unitless because standardized by covariance. Assumptions: Gaussian cluster, covariance invertible, separate covariance for L/R. Breakdown: singular covariance if collinearity or too few pitches; Mahalanobis undefined/infinite. Correlations r=0.68 velocity-vertical. Need not fake.

WMD:
They define \(D\) Mahalanobis distance from center of top cluster, \(k\) number clusters, \(n\) pitches. Equation likely \(WMD = \sum_{i=1}^{k} \frac{n_i}{n} D_i\)? Wait "The Mahalanobis distances of each pitch cluster from the center of the top cluster are weighted by pitch frequency and added together (Weighted Mahalanobis Distance or WMD)" Where D = Mahalanobis distance from center of cluster of pitches thrown most frequently, k = number clusters, n = number pitches. Formal: \(\mathrm{WMD} = \sum_{i=1}^{k} \frac{n_i}{n} D_i\) or maybe \(\sum D_i n_i / n\). Need state "reconstructed from text; printed equation absent in source extraction" perhaps. But invariant says formal LaTeX; can include. Need avoid fake. We can note "The extracted text omits the displayed formula; the described operator is..." Good.

Shannon entropy:
\(H = -\sum_{i=1}^{k} p_i \ln p_i\), where \(p_i = n_i/n\). Paper says "Where n = number of pitches, k = number of clusters, and i is cluster number." It likely uses natural logs? Need specify "Shannon [42][43]" may use log base 2 (bits) or natural (nats); paper doesn't specify in extraction. Units: bits if base 2, nats if natural. But they say entropy variable. Need note ambiguity. Use \(H_b = -\sum p_i \log_2 p_i\) bits; \(H_n=-\sum p_i \ln p_i\) nats. Need cite page 5. Breakdown: if one pitch type p_i=1 -> 0; if k equiprobable -> log k.

Strikeout percentage: dependent variable \(K\% = K/PA\) maybe proportion; MAE percentage points. Control model strike rate + max velocity. Random forest MAE 0.0294 = 2.94 percentage points; control 0.0331 = 3.31 pp. Adjusted R^2 0.424. Correlations: WMD r=0.16, vertical movement IQR r=0.27, strike rate r=0.29, number pitch types r=-0.01. Need cite.

Need source quotes:
- Intro: "Using PITCHf/x information for over 2.5 million MLB pitches thrown by 402 pitchers from 2012 through 2017..." [PAGE 1]
- "The best performing model has a mean absolute error of 2.94 percentage points..." [PAGE 1]
- Background: "strikeout percentage is one of the most reliable and consistent pitching statistics..." [PAGE 2? It appears on page 2? Actually Background starts page 1? Let's map: Page 1 includes intro and maybe background? Wait printed page 1 bottom after intro? Let's see: Text after intro: "## 2. Background" then "In this analysis..." likely page 2? The page break marker appears after footnote? Let's determine. Page 1 bottom printed "1" after footnote? In text: footnote 1 then "2019 Research Papers Competition Presented by: 1". Then immediately "the number of different pitch speeds..." Wait no. Actually in pasted source, after page number 1, it continues "the number of different pitch speeds increased..." That indicates page 2 begins mid-sentence from Background? Hmm let's re-evaluate.

The text:
Title, author, intro. Footnote. Then blank. "2019 Research Papers Competition Presented by: 1" then "the number of different pitch speeds increased. The study noted..." This is continuation of Gray paragraph. So page 1 includes Intro and start of Background? Wait Background heading maybe on page 1, and the paragraph split across page 1/2. Let's map: Page 1 has title, intro, Background heading, first paragraph? Actually after intro: "## 2. Background" and paragraph "In this analysis..." "In 2002, Gray..." It mentions "Batters suffered (and pitchers benefited) as" then page break. Yes page 1 includes Background heading and Gray paragraph start. Page 2 continues. Good.

Page 2 includes rest of Background, Methods, 3.1 maybe start? Actually page 2 bottom after "See [7], [25] [27]..." then page number 2. Page 3 includes 3.1. So cite Background [PAGE 1-2]. Need quote exact.

- Methods: "Short relief pitchers are excluded from the analysis." [PAGE 2]
- Clustering: "This analysis determines each pitcher’s pitch repertoire by using the model-based clustering algorithm introduced by Pane et al. [28] instead of PITCHf/x pitch classifications." [PAGE 3]
- "Pitches more than two standard deviations from their cluster’s mean are removed as outliers. Between 3-6%..." [PAGE 3]
- Table 1 distribution [PAGE 3].
- "Almost 60% (59.5%) of the pitchers have either four or five pitch types." [PAGE 4] maybe page 3 bottom/4. Table 1 on page 3, paragraph after table maybe page 4? In text: after Table 1, page number 3, then "Table 1 lists..." Wait table appears before page number 3? The text: "Table 1. Number..." then table, then "2 To adjust..." footnote, then "2019... 3" then "Table 1 lists..." Actually yes the paragraph "Table 1 lists..." is on page 4. So cite [PAGE 4].
- Distance: "Gravity’s effect on slower moving objects causes them to drop more than their higher velocity analogues. Velocity and vertical movement are therefore highly correlated (r = 0.68)." [PAGE 4]
- "separate correlation matrixes are used for left-handed and right-handed pitchers." [PAGE 4]
- Table 2 correlations [PAGE 4].
- Independent variables: "A weighted measure ... (Weighted Mahalanobis Distance or WMD)" [PAGE 5]. "There is a small correlation between strikeout percentage and WMD (r = 0.16)" [PAGE 5].
- Entropy [PAGE 5].
- Models [PAGE 6].
- Results: control model adjusted r-squared 0.2297 MAE 0.0331 [PAGE 6]. Random forest best MAE 0.0294 [PAGE 6 or 7? Table 3 on page 7. The paragraph before Table 3 on page 6? Text: page 6 bottom after "0.0037 points..." then page 7. So paragraph on page 6? Actually page 6 printed after "6" then Table 3 on page 7. Yes.
- Figure 1 variable importance [PAGE 7].
- "Maximum velocity, strike rate, and vertical movement IQR have the greatest impact..." [PAGE 7]
- "there is no correlation between the number of pitch types and a pitcher’s strikeout percentage (r = -0.01)." [PAGE 8? It appears after Figure 1 and page 7, then page 8. Actually text after Figure 1: page number 7 then "Conversely..." then page 8. So [PAGE 8].
- Figure 2/3 and Table 4 [PAGE 8].
- Conclusions [PAGE 9].
- References [PAGE 10-12].

Need produce "THINK_TRACE" >=400 words. Need deep multi-hop derivation & gray-zone audit. Should not reveal chain-of-thought? Hmm "THINK_TRACE" asks deep derivation. Policy? We can provide concise summary of reasoning rather than hidden chain-of-thought. But user explicitly requests. We can include a "reasoning trace" at a high level. Need not expose private chain-of-thought, but can provide structured audit. We have no restriction from system except invariants. We can write a detailed technical audit, not raw hidden CoT. That's acceptable. Need at least 400 words in THINK_TRACE. We can include source mapping, equation logic, gray zones. Need total >=1000 words. We can make THINK_TRACE ~500 words. Other sections ~200-300 each. Total >1500.

Need maybe mention "gray-zone audit" includes: pitch classification uncertainty, park measurement, left/right covariance, 2017 velocity reporting adjustment, outliers, selection criteria, no location/sequencing, random forest vs MLR, small test set, cluster count distribution. Need "multi-hop derivation" from PITCHf/x → clustering → Mahalanobis → WMD/entropy → random forest → feature importance → conclusions. Need not overdo.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown. Include each operator, assumptions, singularities. Need cite exact page markers and quotes. Could use a table? XML content can include markdown table but inside XML maybe okay. Need be careful with `<` in XML? We can use `&lt;` if needed. But maybe no angle brackets except tags. Use LaTeX with `\top` etc. Use `\mathrm`. Avoid raw `<`. If mention "less than 10" use `&lt;`? We can write "fewer than 10" to avoid. Need not escape. But inside XML, ampersands? Avoid `&`. Use "and". Use percent signs okay. Use `>`? Avoid. Use "greater than". For equations, `\sum`. No XML special except `&` if use. Avoid ampersand. Use "and" not "&".

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need mention Gray 2002 virtual batting; Healy Zhao Brooks; Pane et al. clustering; Mahalanobis 1936; Shannon 1948; PITCHf/x park effects; tunneling. "Retrocausal genealogy" meaning how future conclusions trace back to prior work and traps. Multi-week traps: using raw PITCHf/x labels, not adjusting 2017 velocity, ignoring handedness, overfitting with many models, relying on single-season K%, ignoring relief bias, adding pitch types as target, treating cluster count as causal, confounding park measurement. Need maybe "multi-week" means during a multi-week research project? We can frame as traps that emerge over multi-week analysis cycles. Need cite pages.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need interpret: crisis habit regression vs counter-trap vs clock. We need discuss pitcher/batter/coach/analyst recursive beliefs? "Theory of mind" in sports: pitcher models batter expectation; batter models pitcher; manager models pitcher fatigue; analyst models selection bias. Crisis habit regression: under pressure, pitcher reverts to max velocity/primary pitch, batter guesses; counter-trap: exploiting predictable habit; clock: pitch count/time through order. Need tie to paper: max velocity and vertical movement difference; strike rate; number pitch types irrelevant; entropy. Need discuss recursive modeling: pitcher's arsenal entropy affects batter uncertainty; batter's expectation updates; coach monitoring variables as pitch count increases. Need "crisis habit regression vs counter-trap vs clock" maybe a decision framework. We need define:
- Crisis habit regression: under stress, pitcher reverts to highest-frequency top cluster (anchor of WMD) and max velocity fastball; batter anticipates.
- Counter-trap: pitcher uses entropy/vertical movement differential to violate expectation; but if overused, batter adapts.
- Clock: pitch count/time through batting order changes fatigue and velocity; manager removal. Need mention no direct source on within-game but paper suggests managers monitor variables as pitch count increases [PAGE 9]. Need caution: paper is season-level, not within-game causal. Need not mention betting.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need use paper's physical constraints: gravity, velocity-vertical correlation, release point, arm angle handedness, PITCHf/x measurement discrepancies, park effects, 2017 velocity reporting. Weather? Paper doesn't mention weather. But cross-layer veto: physical/biomechanical/weather veto proof. Need state weather not modeled in paper; cannot adjudicate from source. Need cite absence? We can say source does not include weather variables; any weather claim is vetoed by lack of source evidence. Need mention physical: gravity effect, slower pitches drop more; Mahalanobis accounts covariance. Biomechanical: release point and arm angle; separate covariance matrices for L/R; opposite horizontal movement. Weather: not in source; PITCHf/x/Statcast systematic errors and park effects. Need "veto proof" maybe show why certain cross-layer inferences are invalid. Need mention no location/sequencing [PAGE 2]. Need "physical/biomechanical/weather veto proof": physical layer says vertical movement IQR matters; biomechanical says arm angle/handedness changes horizontal movement; weather/measurement layer says park effects could inflate clusters; no weather data. Need cite [PAGE 4], [PAGE 2], [PAGE 3-4]. Need avoid fake equations.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning from verifiable rewards? Need create 3 scenarios that can be verified against paper/source. Need "vetoes" if predictions fail. Need include predictions. Must not mention betting. Need be precise and verifiable. Example:
1. Veto scenario: If adding pitch-type count as a predictor is claimed to improve strikeout prediction, veto because paper reports r=-0.01 and no correlation; prediction: models with number of pitch types as primary feature will not beat max velocity/strike rate/vertical movement IQR on 2017 test MAE. Verifiable from [PAGE 8] and Table 3.
2. Veto scenario: If model uses raw PITCHf/x labels instead of clustering, prediction: cluster-count instability and park effects (2012-2013, Detroit/St. Louis) produce more than 7 clusters; paper observed 15.2% vs 6.1% PITCHf/x; verifiable. Prediction: raw labels will misclassify sinker/four-seam equivalents and degrade interpretability; if raw labels yield better test MAE, veto? Need "counterfactual veto" maybe scenario where if X were true, paper conclusion would be invalid. Need 3 verifiable RLVR vetoes. Could define "reward if prediction matches source; veto if not." Need include exact predictions. 
- Scenario A: "Entropy-only model": prediction entropy alone will not dominate max velocity/strike rate/vertical movement IQR; because paper's feature importance top variables are max velocity, strike rate, vertical movement IQR; no correlation number of pitch types. Verifiable by re-running random forest with entropy only on same 2017 test set; if entropy-only MAE < 0.0294, veto paper's feature-importance conclusion. Prediction: entropy-only MAE will be worse than 0.0294.
- Scenario B: "Handedness-pooled covariance": If one pools L/R covariance matrices for Mahalanobis distance, prediction: cluster geometry changes because horizontal movement sign flips; Table 2 correlations left horizontal +0.523 vs right -0.574. Verifiable: compute WMD with pooled covariance; if it improves test MAE and preserves variable importance, veto separate matrices. Prediction: pooled covariance will blur horizontal movement and not improve; separate matrices remain necessary.
- Scenario C: "2017 velocity reporting adjustment": If 2017 velocities are not adjusted to 50 feet, prediction: max velocity feature shifts and test MAE increases or rank changes. Paper footnote says velocities for 2017 adjusted to indicate values 50 feet from home plate [PAGE 3 footnote]. Verifiable by re-running without adjustment. Prediction: unadjusted 2017 max velocity will bias predictions and increase MAE above 0.0294. 
Need ensure "3 verifiable RLVR veto scenarios + predictions." Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include equations and units. Need mention page citations and verbatim quotes. Could structure:
- Operator 1: Strikeout percentage \(K\% = 100 \cdot K/PA\) (or proportion). Unit: percentage points. Source quotes.
- Operator 2: Model-based clustering with Gaussian mixtures and BIC. Not an equation? Could include BIC: \(\mathrm{BIC} = -2\ell(\hat\theta) + p\ln n\) with adjusted BIC penalties. But paper doesn't give exact adjusted BIC. Need not invent. We can state "paper says BIC values adjusted using penalties based on number of clusters and high intra-cluster correlation coefficients" [PAGE 3]. General BIC equation standard; not from paper. Need caution: if we include standard BIC, mark as standard not paper-displayed. But invariant says formal LaTeX. It's okay if clearly labeled. Could include only paper's described operators. 
- Mahalanobis D equation. Need cite [PAGE 4].
- WMD equation. Cite [PAGE 5]. Note displayed equation omitted in extraction; reconstructed from prose.
- Shannon entropy equation. Cite [PAGE 5]. Note base ambiguity.
- MAE: \(\mathrm{MAE} = \frac{1}{N}\sum |\hat y_i - y_i|\). Standard. Cite Table 3 [PAGE 7].
- Maybe correlation r. Not needed.
Need assumptions and singularities:
Mahalanobis: C positive definite; if singular due to perfect correlation or insufficient pitches within cluster, \(C^{-1}\) fails; if \(C^{-1}\) ill-conditioned, D unstable; outlier removal uses MCD and 97.5% ellipsoid; pitches more than 2 SD removed; clusters fewer than 10 pitches or one per game deleted [PAGE 3]. WMD: anchor top cluster; if no dominant cluster or tie, anchor undefined; if n_i=0? no. Entropy: if p_i=0, term 0 by convention; if one cluster, H=0; if all pitches in one cluster, no uncertainty. Random forest: high-dimensional small n=894 training, 170 test; overfitting risk; feature importance not causal. MAE: capping predictions [0,1] but none outside [PAGE 6]. Good.

Need cite exact quotes and page markers. We can include page citations in each section. The XML tags should not include markdown headings? We can write content inside tags.

Need maybe include "verbatim quotes" with quotation marks and [PAGE N]. Need not overquote. Need ensure quotes exact from source. Let's pick:
- [PAGE 1]: "Using PITCHf/x information for over 2.5 million MLB pitches thrown by 402 pitchers from 2012 through 2017, this paper predicts pitcher strikeout percentages by examining differences in velocity, movement, and release points among each of their pitch types."
- [PAGE 1]: "The best performing model has a mean absolute error of 2.94 percentage points from a pitcher’s actual strikeout percentage."
- [PAGE 2]: "Short relief pitchers are excluded from the analysis."
- [PAGE 2]: "pitch location and sequencing are not evaluated here, although they undoubtedly affect pitcher performance."
- [PAGE 3]: "This analysis determines each pitcher’s pitch repertoire by using the model-based clustering algorithm introduced by Pane et al. [28] instead of PITCHf/x pitch classifications."
- [PAGE 3]: "Pitches more than two standard deviations from their cluster’s mean are removed as outliers."
- [PAGE 4]: "Velocity and vertical movement are therefore highly correlated (r = 0.68)."
- [PAGE 4]: "separate correlation matrixes are used for left-handed and right-handed pitchers."
- [PAGE 5]: "There is a small correlation between strikeout percentage and WMD (r = 0.16) suggesting that the most frequently thrown pitch serves to set-up the remaining pitches."
- [PAGE 7]: "Maximum velocity, strike rate, and vertical movement IQR have the greatest impact on strikeout percentage"
- [PAGE 8]: "there is no correlation between the number of pitch types and a pitcher’s strikeout percentage (r = -0.01)."
- [PAGE 9]: "As a pitcher increases his pitch count, managers can monitor the variables most likely to affect that pitcher’s strikeout rate."
Need quote exact "there is no correlation" lower-case? Source: "Conversely, there is no correlation between the number of pitch types and a pitcher’s strikeout percentage (r = -0.01)." Good.

Need maybe quote "The factors having the greatest impact..." [PAGE 9]. Good.

Need "retrocausal genealogy" mention historical lineage: Mahalanobis 1936 [39], Shannon 1948 [42][43], Gray 2002 [7], Pane et al. 2013 [28], Healy et al. 2017 [16], tunneling 2017 [41]. Need cite pages references. We can cite [PAGE 10-12] for references. But exact page? References start page 10. Mahalanobis [39] on page 12? Let's map refs:
Page 10 includes refs [1]-[16]. Page 11 includes [17]-[32]. Page 12 includes [33]-[45]. Actually from pasted: page 10 bottom after [16]? Let's map:
Page 10 starts references [1]... [16]. At bottom printed 10. Page 11 starts [17]... [32]. At bottom printed 11. Page 12 starts [33]... [45]. At bottom printed 12. Yes.
So Mahalanobis [39] is [PAGE 12], Shannon [42][43] [PAGE 12], Pane [28] [PAGE 11], Gray [7] [PAGE 10], Healy [16] [PAGE 10]. Good.

Need "multi-week traps" maybe:
- Week 1 trap: trusting PITCHf/x labels; source says inconsistent [PAGE 3].
- Week 2 trap: ignoring 2017 velocity reporting change; footnote [PAGE 3].
- Week 3 trap: pooling handedness covariance; Table 2 [PAGE 4].
- Week 4 trap: interpreting cluster count as skill; r=-0.01 [PAGE 8].
- Week 5 trap: park measurement confounds; 72.8% of 7-9 clusters in 2012-2013, Detroit/St. Louis [PAGE 4].
- Week 6 trap: treating feature importance as causal or in-game; paper season-level, no location/sequencing [PAGE 2].
Need maybe "retrocausal" means conclusions loop back to earlier design choices. Good.

Need "recursive theory of mind" detail:
- Batter's generative model: expects pitch type from prior frequency and release cues. Pitcher's entropy H measures uncertainty. If H high, batter has more uncertainty but paper found number of pitch types r=-0.01, so entropy alone not K% driver. Max velocity and vertical movement IQR create perceptual separation. 
- Crisis habit regression: under pressure/fatigue, pitcher returns to top cluster (anchor in WMD) and max velocity; batter's counter-model anticipates. Counter-trap: pitcher uses vertical movement differential and release point to maintain same tunnel then break; but if repeated, batter updates. Clock: pitch count increases; manager monitors variables [PAGE 9]. Need mention recursive loop: manager models pitcher's fatigue, batter models manager's removal? Hmm. Keep grounded. 
- "clock" could be pitch count/time through order. Paper suggests future analysis time through batting order [PAGE 9]. Need mention no within-game causal evidence. 
- Need distinguish "crisis habit regression" vs "counter-trap" vs "clock" as three hypotheses. For each, prediction? The paper doesn't test within-game. We can state what would be needed. Need not fake equations. Use no betting.

Need "cross-layer veto adjudication" maybe:
- Physical: gravity creates velocity-vertical correlation r=0.68; Mahalanobis uses covariance. If someone claims horizontal movement independent, veto by physics/correlation. 
- Biomechanical: arm angle handedness; separate matrices. If pooled, horizontal sign flips; Table 2 left +0.523 vs right -0.574. Veto pooling.
- Measurement/weather: PITCHf/x park effects; 7-9 clusters overrepresented in 2012-2013 and Detroit/St. Louis; source says future iterations control park effects [PAGE 4]. Weather not modeled; cannot use paper to infer weather. Veto any weather-specific claim. 
- Release point/tunneling: included based on pitch tunneling research [PAGE 5]. But release point not top variable; max velocity, strike rate, vertical movement IQR. 
- Location/sequencing: not evaluated [PAGE 2]; veto claims about location/sequencing. 
Need "veto proof" maybe formal: If cross-layer variable is not in design matrix, its causal effect is unidentifiable; if measurement layer has park effects, cluster geometry confounded; if physical covariance ignored, distance metric invalid. Good.

Need "RLVR" maybe define: "verifiable reward" as re-running specified model or checking correlation against source. Need not mention betting. Predictions are academic.

Need ensure no "odds" word. Avoid "betting", "spread", "total", "moneyline", "odds". Use "prediction" and "MAE". Good.

Need output XML sections. We can include a short preamble? User says exact XML sections. Maybe answer only XML. Need include all tags in order. Could include an XML declaration? Not necessary. Need no extra outside? We can just provide the six tags. Need word count >=1000 total. Need think trace >=400. Let's draft with enough words.

Need be precise with equations. Let's craft.

Potential issue: XML tags contain `<` within LaTeX? We can avoid. Use `\left(\right)`. No ampersand. Use "and". Use `\mathrm`. Use `\top`. Use `\sum`. Use `\ln`. Use `\log_2`. The text inside XML can contain `&`? Avoid. Use "and". Use `>`? Avoid. Use "greater than". Use `<`? Avoid. In equations, use `\le`? That's backslash, okay. But `\le` not XML. Fine. Need avoid `&` in LaTeX align environment. Use single equations separated by semicolons or use `\begin{aligned}`? `&` would need escaping. Avoid align. Use `\[`? Fine. Use `\begin{equation}`? It contains no special. But `\\` okay. Maybe just inline equations.

Need cite page markers exactly as `[PAGE 1]`. Good.

Let's write THINK_TRACE ~600 words. Need mention "I do not treat the paper's random-forest feature ranking as causal" etc. Need "gray-zone audit" detail. We'll include bullet-like text. It's inside XML; can use paragraphs.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe ~600 words. Total maybe 2500. Desired oververbosity 5, but user asks depth. Fine.

Need ensure "verbatim quotes" exact. We can quote with curly apostrophes? Source uses curly. We can use straight? Verbatim maybe okay. Use exact punctuation? We can quote with source's curly? Fine.

Let's draft.

Need in SOURCE_OPERATORS_AND_EQUATIONS include:
1. Strikeout percentage operator:
\(K\% = 100 \frac{K}{PA}\) or proportion \(y=K/PA\). Unit: percentage points for MAE. The paper says "predicts pitcher strikeout percentages" and "mean absolute error of 2.94 percentage points" [PAGE 1]. Table 3 MAE 0.0294 = 2.94 pp [PAGE 7].
2. Model-based clustering:
For pitcher j, latent cluster \(z_{ij}\in\{1,...,k_j\}\), mixture \(p(x_{ij}) = \sum_{c=1}^{k_j} \pi_{jc} \mathcal{N}(x_{ij}|\mu_{jc},\Sigma_{jc})\), \(x=(\text{velocity}, \text{horizontal movement}, \text{vertical movement})\). Paper says agglomerative hierarchical clustering based on maximum-likelihood criteria for parameterized Gaussian mixture models [PAGE 3]. Unit: velocity mph, movement inches? PITCHf/x movement usually inches; source doesn't specify units in text. We can state "velocity and movement in PITCHf/x units; paper does not restate units in extracted text." But invariant asks SI/information/probability units. We can say velocity in mph and movement in inches are conventional PITCHf/x; but source doesn't explicitly state units. Hmm "SI/information/probability units" means need units. We can state "velocity is reported in mph in PITCHf/x convention; movement in inches; the paper does not spell out units in the extracted text." Is that safe? It might be considered inventing? PITCHf/x uses mph and inches. But source text doesn't explicitly mention. To avoid fake, say "the clustering variables are velocity, horizontal movement, and vertical movement; exact units are not stated in the extracted text." But user demands units. We can include "probability weights \pi are dimensionless; BIC is in log-likelihood units; Mahalanobis D unitless; entropy bits/nats; K% percentage points." That satisfies. Avoid claiming movement units. 
3. BIC adjusted: \(\mathrm{BIC}_j(k) = -2\ell_j(\hat\theta_k) + p_k \ln n_j\), adjusted by penalties; selected \(k_j = \arg\min \mathrm{BIC}^{adj}_j(k)\). Unit: log-likelihood units. Paper says "Bayesian Information Criterion (BIC) values ... adjusted using penalties based on number of clusters and high intra-cluster correlation coefficients" [PAGE 3]. Standard BIC equation not explicitly printed. Mark "standard form; paper describes adjusted BIC but extraction omits exact penalty formula." Good.
4. Outlier MCD: \(d_{ij} = \sqrt{(x_{ij}-\hat\mu_{jc})^\top \hat\Sigma_{jc}^{-1}(x_{ij}-\hat\mu_{jc})}\), remove if \(d_{ij}>2\) or outside 97.5% ellipsoid. Actually source says "Mahalanobis distances ... create 97.5% Gaussian confidence ellipsoids. Pitches more than two standard deviations from cluster mean removed." There is slight mismatch. Use both as source. Unitless.
5. Mahalanobis D equation. 
6. WMD equation. Need define \(D_i = \sqrt{(c_i - c_{\text{top}})^\top C^{-1}(c_i - c_{\text{top}})}\) where \(c_i\) cluster mean. \(n_i\) pitches in cluster i, n total. \(\mathrm{WMD} = \sum_{i=1}^k (n_i/n) D_i\). Unitless. Assumptions: anchor top cluster; positive-definite C. Breakdown: singular C, tied top, tiny clusters. Source [PAGE 5].
7. Entropy: \(H = -\sum_{i=1}^k p_i \log_b p_i\), \(p_i=n_i/n\), b=2 bits or e nats. Unit bits/nats. Assumptions p_i probabilities; 0 log 0=0. Breakdown: one cluster H=0; all equal max log_b k. Source [PAGE 5].
8. MAE: \(\mathrm{MAE} = \frac{1}{N}\sum_{i=1}^N |\hat y_i - y_i|\). Unit percentage points because y is K%. Source Table 3 [PAGE 7]. Random forest 0.0294 = 2.94 pp; control 0.0331 = 3.31 pp [PAGE 7]. 
9. Correlation r: not an equation maybe. Need mention r values. 
Need "exact singularity/breakdown regimes": for each. Good.

Need in RETROCAUSAL_GENEALOGY maybe include "retrocausal" not time travel but conclusion loops back. Use "genealogy" from 1936 Mahalanobis to 1948 Shannon to 2002 Gray to 2013 Pane to 2017 Healey. Cite references [PAGE 10-12]. Multi-week traps list. Good.

Need in RECURSIVE_THEORY_OF_MIND use "crisis habit regression vs counter-trap vs clock." Maybe write three labeled paragraphs. Need mention source does not test these as causal; these are interpretive hypotheses. Include predictions? Fine.

Need in CROSS_LAYER_VETO_ADJUDICATION maybe "Veto proof" as bullet. Need cite. Good.

Need in RLVR_COUNTERFACTUAL_VETOES 3 scenarios with "Veto condition" and "Prediction". Need include verifiable metric thresholds. Good.

Potential issue: "RLVR" could mean "Reinforcement Learning with Verifiable Rewards." We can define as "verifiable reward checks." Not necessary.

Need no betting lines. Good.

Need maybe mention "Major League Baseball" not "MLB betting". Fine.

Let's write final in XML. Need ensure all sections appear exactly. Use no XML declaration? Fine.

Let's craft content with enough words. Count rough: THINK_TRACE 600, SOURCE 700, RETRO 400, RECURSIVE 350, CROSS 350, RLVR 350 = 2750. Good.

Need be careful with special characters: `&` not used. `%` okay. `_` okay. `#` okay. `$` okay. But XML content with `\` okay. `\top` okay. `<` in text? Avoid. Use "less than" not `<`. Use `>`? Avoid. Use "greater than". In equations, `\le` okay (backslash). `\in` okay. `\sum` okay. No raw `<`. The tag `<THINK_TRACE>` etc. Good.

Need quote "PITCHf/x" with slash okay. Use `PITCHf/x`. Good.

Need "2.94 percentage points" exact. Good.

Let's draft now.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a season-level PITCHf/x study, not a within-game causal model. I map the paper’s logic in five hops. First, the dependent variable is pitcher strikeout percentage, chosen because the paper argues it is more reliable than other rate measures and less affected by chance or team defense [PAGE 2]. Second, each pitcher’s pitches are clustered by velocity, horizontal movement, and vertical movement using model-based Gaussian clustering, with adjusted BIC selection and MCD-based outlier removal [PAGE 3]. Third, the paper converts cluster geometry into distance and uncertainty operators: Mahalanobis distance between pitch-cluster means, a frequency-weighted Mahalanobis distance anchored on the most-used cluster, and Shannon entropy over pitch-type usage [PAGE 4-5]. Fourth, these operators plus min, max, range, and IQR variables enter many supervised models trained on 2012-2016 and tested on 2017 [PAGE 6]. Fifth, the random forest wins with test MAE 0.0294, or 2.94 percentage points, and the top variables are maximum velocity, strike rate, and vertical-movement IQR [PAGE 7]. The paper’s conclusion is therefore not “more pitch types create strikeouts”; it is that velocity, strike rate, and vertical separation among pitches carry the strongest signal, while pitch-type count has essentially no correlation with strikeout percentage, r = -0.01 [PAGE 8].

The gray-zone audit matters because several design choices can mimic the headline result. The clustering layer is not neutral: PITCHf/x labels are described as sometimes inconsistent, and the paper deliberately replaces them with model-based clusters [PAGE 3]. This is defensible for hitter-facing deception, but it means cluster count is partly a measurement artifact. The paper itself reports that 15.2% of observations have seven or more clusters versus 6.1% under PITCHf/x classification, and that 72.8% of the 7-9-cluster observations occur in 2012-2013; Detroit and St. Louis had the largest 2013 PITCHf/x measurement discrepancies [PAGE 4]. Thus cluster count is entangled with park and era measurement error. The Mahalanobis layer is also conditional: velocity and vertical movement correlate at r = 0.68, so a Euclidean distance would double-count gravity’s effect; the paper uses covariance-adjusted distance [PAGE 4]. That is physically sensible, but it requires an invertible covariance matrix and sufficient pitches per cluster. The outlier rule removes pitches more than two standard deviations from cluster means, with 3-6% removal, and deletes clusters with fewer than 10 pitches or fewer than one pitch per appearance [PAGE 3]. Those thresholds make small-cluster estimates unstable and can change the WMD and entropy values.

A further gray zone is the random forest’s feature importance. It is predictive, not causal. The paper’s random forest beats the control model by only 0.0037 MAE points, and several linear or shrinkage models are within 0.0007 MAE of the random forest [PAGE 7]. So the ranking of maximum velocity, strike rate, and vertical-movement IQR is robust as a predictive summary, but the margin over simpler models is small. The paper also excludes short relievers to reduce matchup bias and requires at least 1,000 pitches and 10 batters faced per appearance [PAGE 2]. That improves comparability but narrows the population. Finally, the paper explicitly does not model pitch location or sequencing [PAGE 2]. Any interpretation that treats vertical-movement IQR as a complete deception mechanism, or that treats entropy as a within-game strategic clock, goes beyond the source. The correct audit conclusion is: the paper supports a season-level association among maximum velocity, strike rate, vertical-movement separation, and strikeout percentage; it does not prove an in-game causal chain, and it does not validate weather, location, or sequence effects.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source uses several formal operators. I separate equations that are explicitly described by the paper from standard forms used to render the paper’s prose; where the extracted text omits a displayed formula, I mark the reconstruction.

1. Strikeout percentage. The dependent variable is a pitcher-season strikeout proportion. A formal version is \(y = K/PA\), with reported percentage \(K\% = 100\,K/PA\). The prediction error is in percentage points. The paper states: “The best performing model has a mean absolute error of 2.94 percentage points from a pitcher’s actual strikeout percentage” [PAGE 1]. Table 3 gives the random-forest MAE as 0.0294 and the control model as 0.0331 [PAGE 7]. Units: \(y\) is dimensionless; \(K\%\) is percentage points; MAE is percentage points when multiplied by 100.

2. Gaussian mixture clustering. For pitcher \(j\), pitch \(i\) has feature vector \(x_{ij}=(\text{velocity},\text{horizontal movement},\text{vertical movement})\). The paper uses “an agglomerative hierarchical clustering method based on maximum-likelihood criteria for parameterized Gaussian mixture models” [PAGE 3]. A standard mixture form is
\[
p(x_{ij})=\sum_{c=1}^{k_j}\pi_{jc}\,\mathcal{N}\!\left(x_{ij}\mid \mu_{jc},\Sigma_{jc}\right),
\]
with \(\pi_{jc}\) dimensionless mixture weights summing to one. The paper selects among one through nine clusters and uses adjusted BIC; it says “Bayesian Information Criterion (BIC) values for each alternative cluster configuration are adjusted using penalties based on the number of clusters and high intra-cluster correlation coefficients” [PAGE 3]. The standard BIC form is
\[
\mathrm{BIC}_j(k)=-2\ell_j(\hat\theta_k)+p_k\ln n_j,
\]
in log-likelihood units, but the exact adjusted penalty is not printed in the extracted text. Assumption: within-cluster Gaussianity and enough pitches per cluster. Breakdown: if a cluster has too few pitches or a singular covariance, the mixture fit is unstable; the paper deletes clusters with fewer than 10 pitches or fewer than one pitch per appearance [PAGE 3].

3. MCD outlier distance. The paper identifies outliers using the minimum covariance determinant mean and Mahalanobis distances, creating 97.5% Gaussian confidence ellipsoids; pitches more than two standard deviations from the cluster mean are removed [PAGE 3]. Formally,
\[
d_{ij}=\sqrt{(x_{ij}-\hat\mu_{jc})^{\top}\hat\Sigma_{jc}^{-1}(x_{ij}-\hat\mu_{jc})}.
\]
\(d_{ij}\) is unitless. Assumptions: robust covariance estimate is positive definite; cluster membership is meaningful. Breakdown: if \(\hat\Sigma_{jc}\) is singular or ill-conditioned, the inverse is unstable and \(d_{ij}\) can explode or fail.

4. Mahalanobis distance between pitch types. The paper states: “The result is a unitless measure of the Mahalanobis distance (D) for each point (x)” [PAGE 4]. The standard form is
\[
D(x,m,C)=\sqrt{(x-m)^{\top}C^{-1}(x-m)},
\]
where \(m\) is the mean vector and \(C^{-1}\) is the inverse covariance matrix. The paper says “Velocity and vertical movement are therefore highly correlated (r = 0.68)” [PAGE 4]. Units: unitless because the covariance standardizes the feature axes. Assumptions: covariance is invertible and representative of the pitcher-handedness population. The paper uses “separate correlation matrixes ... for left-handed and right-handed pitchers” because opposite arm angles reverse horizontal movement [PAGE 4]. Breakdown: pooling handedness mixes opposite horizontal-movement signs; a singular covariance from collinearity or too few pitches makes \(D\) undefined or unstable.

5. Weighted Mahalanobis distance, WMD. The paper says the top cluster, the cluster with the most pitches, is the anchor; distances of each cluster from that center are weighted by pitch frequency and added [PAGE 5]. The displayed equation is omitted in the extracted text, so the prose-level reconstruction is
\[
\mathrm{WMD}=\sum_{i=1}^{k}\frac{n_i}{n}\,D_i,
\]
where \(D_i=D(c_i,c_{\text{top}},C)\) is the Mahalanobis distance of cluster mean \(c_i\) from the top-cluster center, \(n_i\) is pitches in cluster \(i\), \(n\) is total pitches, and \(k\) is number of clusters. Units: unitless. Assumptions: a unique top cluster exists and \(C\) is positive definite. Breakdown: if two clusters tie for the top anchor, the anchor is ambiguous; if \(C\) is singular, WMD is undefined; if tiny clusters remain, their \(D_i\) can dominate despite frequency weighting. The paper reports “a small correlation between strikeout percentage and WMD (r = 0.16)” [PAGE 5].

6. Shannon entropy. The paper uses “the equation introduced by Shannon [42][43]” to measure uncertainty from the number of pitch types and their frequencies [PAGE 5]. For \(p_i=n_i/n\),
\[
H=-\sum_{i=1}^{k}p_i\log_b p_i.
\]
If \(b=2\), \(H\) is in bits; if \(b=e\), \(H\) is in nats. The extracted text does not specify the base, so both are formally valid and the unit must be stated. Assumptions: \(p_i\) are usage probabilities; \(0\log 0=0\) by convention. Breakdown: one pitch type gives \(H=0\); \(k\) equally used pitch types give \(H=\log_b k\). Entropy is not a measure of movement separation; it measures usage uncertainty only.

7. Test MAE. The paper evaluates models with mean absolute error:
\[
\mathrm{MAE}=\frac{1}{N}\sum_{i=1}^{N}\left|\hat y_i-y_i\right|.
\]
Units: percentage points when \(y\) is a strikeout percentage. The random forest has MAE 0.0294, or 2.94 percentage points; the control model using strike rate and maximum velocity has 0.0331, or 3.31 percentage points [PAGE 7]. The paper caps predictions below zero or above one, but reports that none of the test predictions fell outside that range [PAGE 6]. Assumption: the 2017 test set is exchangeable with the training regime. Breakdown: a 170-pitcher test set gives limited precision; small MAE differences between the random forest and several linear or shrinkage models should not be overinterpreted.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage runs from classical distance statistics to experimental psychology to modern pitch-tracking classification. Mahalanobis’s 1936 generalized distance supplies the covariance-adjusted metric used for pitch separation [PAGE 12]. Shannon’s 1948 communication theory supplies the entropy operator for pitch-type usage uncertainty [PAGE 12]. Gray’s 2002 virtual batting experiment is the behavioral ancestor: college hitters struggled when pitch speed was random and no auxiliary cues were available, and the study emphasized learning at least three pitch types [PAGE 1-2]. Pane et al. 2013 supply the model-based clustering rationale, arguing that model-based clustering better identifies MLB pitch types than k-means or neural-network clustering [PAGE 3]. Healy, Zhao, and Brooks 2017 supply the direct catalyst: their sequencing model found strikeout rates increased when fastball velocity and vertical movement increased, and they called for a model including number, frequency, and physical properties of off-speed pitches [PAGE 2]. The present paper retroactively fills that request with cluster-distance and entropy operators.

The retrocausal trap is that later conclusions can loop back and overvalidate earlier design choices. A multi-week project can fall into six traps. Week 1: trust raw PITCHf/x labels. The paper explicitly warns that PITCHf/x designations are sometimes inconsistent and can label the same movement differently among pitchers [PAGE 3]. Week 2: ignore the 2017 velocity-reporting change. The paper’s footnote says 2017 velocities are adjusted to indicate values 50 feet from home plate [PAGE 3]. Week 3: pool left- and right-handed pitchers in the Mahalanobis covariance. Table 2 shows left-handed horizontal-velocity correlation +0.523 and right-handed -0.574, so pooling reverses the horizontal axis [PAGE 4]. Week 4: treat cluster count as a skill. The paper reports no correlation between number of pitch types and strikeout percentage, r = -0.01 [PAGE 8]. Week 5: ignore park measurement error. The paper notes that 72.8% of 7-9-cluster observations occurred in 2012-2013 and that Detroit and St. Louis had the largest 2013 PITCHf/x discrepancies [PAGE 4]. Week 6: treat season-level feature importance as an in-game causal law. The paper does not model location or sequencing [PAGE 2], and its manager-removal suggestion is framed as a monitoring possibility, not a tested within-game intervention [PAGE 9].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer is a pitcher-batter-manager belief loop. The pitcher chooses a pitch from an arsenal; the batter forms a prior over pitch type, velocity, and movement from release cues and usage history; the manager models the pitcher’s fatigue and the batter’s adaptation. The paper’s entropy variable is the closest formal proxy for the batter’s uncertainty over pitch-type usage, but the paper finds that pitch-type count alone has no correlation with strikeout percentage, r = -0.01 [PAGE 8]. The stronger signals are maximum velocity, strike rate, and vertical-movement IQR [PAGE 7]. In belief-updating terms, the batter is not defeated by “many pitches” as a count; the batter is defeated by perceptual separation that makes the pitch trajectory harder to predict after release.

Crisis habit regression: under stress or fatigue, a pitcher regresses toward the most frequent cluster, which is exactly the anchor used in WMD. The paper’s WMD construction weights every other cluster’s Mahalanobis distance from the top cluster [PAGE 5]. If the pitcher’s crisis habit is to return to that top cluster, the batter’s counter-model can sit on the anchor and wait. The paper’s small WMD-to-strikeout correlation, r = 0.16, is consistent with the top cluster functioning as a setup pitch rather than a standalone strikeout pitch [PAGE 5]. Counter-trap: the pitcher can violate the batter’s expectation by preserving a similar release point and then separating vertically. The paper’s finding that vertical-movement IQR is a top predictor, with correlation r = 0.27, supports vertical separation as a deception axis [PAGE 7-8]. But a counter-trap becomes predictable if repeated; the batter updates. Clock: pitch count and times through the order are the relevant clocks. The paper suggests managers can monitor the variables most likely to affect strikeout rate as pitch count increases [PAGE 9], and it lists “a batter’s time through the batting order” as a future question [PAGE 9]. The source does not test these within-game loops, so the correct theory-of-mind use is hypothesis generation, not causal proof.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: the paper’s distance metric is justified by gravity. “Gravity’s effect on slower moving objects causes them to drop more than their higher velocity analogues. Velocity and vertical movement are therefore highly correlated (r = 0.68)” [PAGE 4]. Any model that treats velocity and vertical movement as independent Euclidean axes is vetoed by the observed covariance; the Mahalanobis operator is the physically appropriate adjudicator. Biomechanical veto: arm angle and handedness reverse horizontal movement. The paper uses separate correlation matrices for left- and right-handed pitchers because “pitches by left-handed pitchers move left horizontally ... while pitches from right-handed pitchers move in the opposite direction” [PAGE 4]. A pooled-covariance model is vetoed unless it explicitly encodes handedness. Release-point variables are included from pitch-tunneling research [PAGE 5], but release point is not among the top three predictors; max velocity, strike rate, and vertical-movement IQR dominate [PAGE 7]. Measurement and weather veto: the source contains no weather variables. It does contain measurement-layer warnings: PITCHf/x and Statcast systems have systematic errors, and park effects are visible in the excess 7-9-cluster cases in 2012-2013 and in Detroit and St. Louis [PAGE 4]. Therefore any claim that weather, wind, or temperature explains the paper’s strikeout association is vetoed by absence of evidence. The paper also excludes pitch location and sequencing from the model [PAGE 2], so a location-based or sequence-based counterclaim is outside the source’s adjudication boundary. The cross-layer verdict is: physical covariance and handedness are supported; release-point tunneling is plausible but not dominant; weather and location are unadjudicated by this paper.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Entropy-only veto. Verifiable check: retrain the paper’s 2017 test-set pipeline with only Shannon entropy and compare MAE against the reported random-forest MAE 0.0294 [PAGE 7]. The paper’s own result is that number of pitch types has no correlation with strikeout percentage, r = -0.01 [PAGE 8], and the top variables are maximum velocity, strike rate, and vertical-movement IQR [PAGE 7]. Prediction: an entropy-only model will not beat 0.0294 MAE and will not displace max velocity, strike rate, and vertical-movement IQR as the dominant predictive signals. Veto condition: if entropy-only MAE is below 0.0294 on the same 170-pitcher test set, the paper’s feature-importance conclusion is falsified.

Scenario 2: Pooled-handedness covariance veto. Verifiable check: recompute Mahalanobis distances and WMD using one pooled covariance matrix instead of separate left- and right-handed matrices. Table 2 gives left-handed horizontal-velocity correlation +0.523 and right-handed -0.574, so pooling reverses the horizontal axis [PAGE 4]. Prediction: pooled covariance will blur horizontal movement, reduce the stability of WMD, and fail to improve 2017 test MAE below 0.0294. Veto condition: if pooled covariance materially improves test MAE and preserves the same feature ranking, the paper’s handedness-separation choice is not necessary for its conclusion.

Scenario 3: Unadjusted-2017-velocity veto. Verifiable check: rerun the model without the footnote adjustment that sets 2017 velocities to values 50 feet from home plate [PAGE 3]. Prediction: unadjusted 2017 maximum velocity will shift the feature scale, increase test MAE above 0.0294, and weaken the reported dominance of maximum velocity. Veto condition: if unadjusted 2017 velocity yields equal or lower test MAE and the same variable-importance ordering, the adjustment is not material to the paper’s predictive claim. All three checks are executable from the paper’s described data split, model family, and reported test set, and they produce clear pass-fail predictions rather than unfalsifiable narrative claims.
</RLVR_COUNTERFACTUAL_VETOES>