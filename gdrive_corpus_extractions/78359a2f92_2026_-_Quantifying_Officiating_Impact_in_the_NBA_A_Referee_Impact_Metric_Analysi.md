---
source: "2026 - Quantifying Officiating Impact in the NBA A Referee Impact Metric Analysis Using ESPN Win-Probability Data - Duma et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 16
model: deepseek/deepseek-v4.1-flash-1017
words: 8646
---

<NATIVE_REASONING>
We need answer user asks? They provided source and instructions. Need produce analysis likely on sports research? Need infer task: "DRIVE SOURCE: ... PAGES:16 SOURCE TEXT..." No explicit question. System says GSE+GSI Frontier Reasoning Foundry strict invariants, sections. Need answer with analysis of source perhaps derive metrics, audit. Must not mention betting lines/odds. Need zero betting lines no spreads totals moneylines odds. Avoid sports betting. Need formal LaTeX, units, page citations exact [PAGE N] markers and verbatim quotes. Pages 16? Source text shows page numbers 1-23? User says PAGES: 16 maybe pages? Need cite exact [PAGE N] markers. We need use source pages provided. Need be careful: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We have page markers embedded: at bottom 1, 2... up to 23. User says PAGES:16 maybe means 16 pages? But source text includes 23 page numbers. Need cite exact [PAGE N] markers, likely [PAGE 3], [PAGE 4], etc. Need quote verbatim exactly. Need sections exact XML. >=1000 words total; THINK_TRACE >=400. Need no fake ratios. Need formal equations with units, assumptions, singularities/breakdown regimes. Need retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes 3 scenarios predictions. Need perhaps analyze "RIM" as impact metric, no betting. Need maybe address "DRIVE SOURCE" as research paper. Need produce structured report. Need possibly mention source limitations, causal claims, crew-level attribution, ESPN WP black box, robustness rho. Need page citations. Need exact quotes verbatim. Need maybe use [PAGE 3], [PAGE 4], etc.

Need identify equations:
ℓ_eg = w^+_eg - w^-_eg. Units: win probability (dimensionless probability, [0,1] or percentage points if scaled). It is signed directional change for event? Actually RIM uses absolute win-prob movement? Abstract says absolute; but equation says signed ℓ; then r_g = sum ℓ_eg? Wait source: event leverage ℓ = w+ - w−; game-level RIM r_g = sum ℓ_eg. If not absolute, cancellation possible. Abstract says aggregates absolute win-prob movement. Inconsistency! Need gray-zone audit. Important. The equation as written sums signed differences, not absolute. They define signed team RIM q similarly. But abstract says absolute. The figures "average absolute game RIM". Could be absolute per event? We need flag discrepancy: formal equation lacks absolute value; if w+−w− can be negative, sum can cancel. The paper says "absolute" in abstract and "average absolute game RIM"; but metric definition uses signed. Need cite exact quote [PAGE 1] abstract: "aggregates the absolute win-probability movement attached to foul events" and [PAGE 3/4] "Define event leverage as ... ℓeg = ..." no abs. Need point out. Need maybe derive corrected absolute variant: R_g^{abs} = Σ |w+−w−|. But paper's r_g = Σ (w+−w−). Could be they intend w as probability for team? But "absolute" not in equation. We must flag as breakdown. Need maybe mention RIM in abstract "absolute" vs equations. Also "average percent swing per call" c_g = r_g/n_g; if signed, can be negative; "percent swing" maybe percentage points? Need units. We can state dimensionless probability, or percentage points if multiplied by 100. Need assumptions: w− and w+ sampled immediately before/after foul; no other events; same win probability model; event ordering; foul attribution to crew only; no individual whistle. Break down when n_g=0 (c_g undefined/infinite? c_g=r_g/n_g division by zero); when w+ or w− missing; when model updates between samples; when foul event includes free throws? The source says "immediately before and after each foul"; if after includes made free throws and possession changes, attribution issue. Need mention.

Equations:
s_ig = o_ig - f_ig (foul counts dimensionless counts; positive favors team i).
q_ig = Σ_{e=1}^{n_g} (u^+_{ieg} - u^-_{ieg}). Units probability. It is signed team RIM.
Excess x_ij = y_ij - (a_i + b_j - m). Units same as y. Singularities: no games for pair? five-game min; additive baseline ill-defined if a_i, b_j, m estimated with small samples; if y_ij is average with varying n; if team/referee effects not additive. Need mention.

Regression: y_ig = α + β h_ig + τ_i + ω_{j(i,g)} + λ_t + π_p + ε_ig. Units y probability or counts; h binary; fixed effects. Cluster by game. Assumptions: exogeneity conditional on controls; no omitted variables; cluster robust. Breakdown: collinearity (home status within team? maybe team fixed effects and home? Not necessarily); small series-state cells; multiple comparisons; nonrandom assignment; crew-level aggregation; outsized influence.

Robustness ρ formula: ρ = (-t^2 + sqrt(t^4 + 4ν t^2))/(2ν). Need units: ρ is partial association (correlation-like dimensionless). Wait formula is from Cinelli/Hazlett? Actually robustness value RV_q? Formula maybe for "equal-strength robustness value" for regression coefficient with t-stat and df. Need check: For OLS coefficient, robustness value RV = [sqrt(t^4 + 4ν t^2) - t^2]/(2ν)? That is same. It is a partial R^2-like quantity? Actually "common partial association" dimensionless. Need state. Singularity: ν=0 -> division by zero; t=0 -> ρ=0; as ν→∞, ρ→? expand: sqrt(t^4+4νt^2)=2√(ν) t sqrt(1 + t^2/(4ν))? Actually leading =2 t sqrtν; numerator ~2t sqrtν - t^2; denominator 2ν -> t/√ν ->0. So large ν small ρ. If t negative squared. t^2. ρ in [0,?]. Need maybe if t large and ν small? ρ can >1? But as partial association likely bounded. Need state domain and breakdown.

Need cite exact [PAGE N]. Page numbers mapping:
- PAGE 1 abstract and start background.
- PAGE 2 continues background.
- PAGE 3 Introduction RIM and 2.1 context? Actually page 2 has section 2 intro; page 3 has 2.1 and 2.2? Let's map:
Page 1: title abstract background start.
Page 2: background continuation, section 2 Intro.
Page 3: 2.1 Operational Context and Data Limitations, 2.2 Interpreting RIM, start 3 Metric Definition.
Page 4: equations and 3.2 validity? Let's inspect source: Page 3 includes "2.1 ...", "2.2 ...", "3 Metric Definition and Validation", "3.1 Data and notation", "For foul event e ... Define event leverage as" at bottom? Actually source text:
Page 3 begins 2.1, then 2.2, then 3 Metric Definition and Validation, 3.1 Data and notation, then paragraph, then "For foul event e in game g, let ... Define event leverage as
ℓeg = ...
3"
Wait page 3 ends with equation? The text shows after equation "                                                   3" then page 4 starts "If game g contains..." Actually yes page 3 has event leverage equation. Page 4 has r_g, c_g, s_ig, q_ig, 3.2. Page 5 Figure 1. Page 6 Figure 2 and section 4. Page 7 figures 3/4. Page 8 figures 5/6. Page 9 section 5. Page 10 section 6. Page 11 section 7. Page 12 figure 11. Page 13 figure 12 and section 8. Page 14 regression and rho. Page 15 figure 13. Page 16 figure 14/15? Actually page 16 has figure 15. Page 17 conclusion. Page 18 appendix. Page 19 figure A2. Page 20 A3. Page 21 A4. Page 22 references. Page 23 references. User says PAGES:16 maybe only first 16? But source text includes more. Need cite within. Could use [PAGE 1], [PAGE 3], [PAGE 4], [PAGE 13], [PAGE 14], [PAGE 17]. Need exact quotes. Need not overdo citations but enough.

Need produce sections:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit. Include derivation, audit, contradictions.
<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown.
<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps.
<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock.
<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof.
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.

Need make answer self-contained. The "GSE + GSI Frontier Reasoning Foundry" maybe expects analysis of source as if sports research? Could be "DRIVE SOURCE" = analyze paper. Need not provide betting picks. Need mention no betting lines.

Need avoid "odds" word? Invariant says never mention spreads, totals, moneylines, or odds. We can mention "win probability" yes. Avoid "odds" entirely. Avoid "betting" maybe okay? Better avoid betting-related terms. Must not mention any betting lines. No "moneyline". Fine.

Need likely produce "RIM audit". Need title maybe "RIM Source Audit". Need not ask clarifying. Need include exact XML sections. Need total ≥1000 words. We can write ~2000-2500. Desired oververbosity 5. Need ensure sections exact. Need THINK_TRACE >=400 words. We'll count approximate.

Need include "source pages provided" citations. Need exact verbatim quotes. Ensure quotes exactly match source. Need quote with punctuation. We can quote:
- [PAGE 1]: "aggregates the absolute win-probability movement attached to foul events"
- [PAGE 3]: "public play-by-play feeds record only the assigned crew for the game and do not reliably attribute individual foul calls to the specific referee who blew the whistle."
- [PAGE 3]: "RIM acts as a macro-level diagnostic tool to identify high-leverage referee-game associations"
- [PAGE 4]: "ℓeg = w+eg − w−eg" maybe hard due formatting; quote "If game g contains ng foul events, the game-level RIM statistic is denoted by" maybe.
- [PAGE 4]: "Thus rg measures total foul-related win-probability movement, while cg isolates leverage per whistle."
- [PAGE 13]: "This specification should be read as a conditioning exercise."
- [PAGE 17]: "RIM measures impact: the size and direction of win-probability movement associated with foul events. Bias is a separate causal and normative claim"
- [PAGE 14]: "ρ is the common partial association an omitted variable would need with both the treatment and the outcome, conditional on the included controls, to move the estimate to zero."
Need exact quote from page 14: "Here ρ is the common partial association an omitted variable would need with both the treatment and the outcome, conditional on the included controls, to move the estimate to zero." Yes.

Need mention "PAGES:16" mismatch? The source text has 23 pages but user says pages 16. Could note "the supplied text carries page markers through [PAGE 23]; I cite the markers present." But maybe not necessary. Might mention in audit: "The caller's PAGES:16 does not match the embedded page markers, which run to 23; I treat [PAGE N] as authoritative." Is that useful? It is a gray-zone audit. But maybe avoid confusing. Could mention in THINK_TRACE: "Metadata says PAGES:16, but source text embeds [PAGE 23], so I use embedded markers." This is a source-integrity audit. Good.

Need handle units: Win probability is dimensionless in [0,1] but NBA WP feeds often percent. "average percent swing per call" maybe percentage points. Need state if w expressed in percentage points, ℓ has percentage points. If w in [0,1], ℓ dimensionless probability. To avoid fake ratio, state exact units.

Need discuss "absolute" inconsistency:
Abstract [PAGE 1] "aggregates the absolute win-probability movement attached to foul events" vs [PAGE 3-4] ℓ signed, r_g sum signed. Need say this is not a cosmetic issue. If event leverage can be negative, r_g can cancel. The "absolute game RIM" in Figure 7 [PAGE 9] may use |r_g| or sum |ℓ|; source doesn't define. Need propose exact disambiguation:
Let a_{eg} = |w^+_{eg} - w^-_{eg}|. Then R^{abs}_{g}=Σ a_{eg}. If paper uses r_g as signed, then should name S_g, not RIM. If uses absolute of total, then R^{totabs}_g = |Σ ℓ_{eg}|. These differ: Σ|ℓ| ≥ |Σℓ|. The abstract likely intends Σ|ℓ|; Figure 7 says average absolute game RIM likely |r_g|. That's a serious gray-zone. Need mention "breakdown regime: offsetting fouls cancel; RIM understates churn." This is important.

Need derive from q_ig: q uses team-specific u, not same as ℓ? If w is home/away? For team RIM, u for team i. Sum over fouls. But if a foul by opponent increases team i's win probability, etc. It's signed. Need mention q not absolute. "Positive values indicate... coincided with net win-probability movement toward team i." [PAGE 4]. Need exact.

Need discuss "impact vs bias": RIM not correctness. Source says "does not, by itself, determine whether a call was correct, whether a team was unfairly advantaged, or whether any referee acted with bias or intent." [PAGE 3]. Use exact quote. This is central.

Need "retrocausal genealogy": historical lineage from rate-stat era (Chadwick 1867, BAA FG% 1946-47), efficiency era (Oliver, Kubatko), deep context era (optical tracking 2013-14, expected values, WPA), officiating stuck in rate-stat. Cite [PAGE 1-2]. Multi-week traps: proprietary WP model version drift; public PBP lacks whistle attribution; referee assignment nonrandom; multiple comparisons; small postseason sample; team-side confounds (pace, style, defensive aggressiveness, shot selection). Need mention "multi-week traps" maybe temporal: four seasons, season fixed effects; "multi-week" in betting? No. We can interpret as longitudinal traps over weeks: model updates, crew rotations, schedule. Need not mention betting. Good.

Need "recursive theory of mind": Crisis habit regression vs counter-trap vs clock. This is strange. Need craft around officiating behavior: under crisis, crews may regress to habitual whistle patterns; counter-trap is if teams/refs adapt to metric; clock is late-game leverage. Need connect to RIM: RIM is not intent; high RIM can be due to game script. Need discuss recursive ToM: analysts infer referee intent; referees may infer team/player expectations; teams adapt to perceived whistle patterns; public discourse creates scrutiny and behavior changes. Need state no intent evidence. The source says "screening signals rather than evidence of intent, misconduct, or whistle-level responsibility" [PAGE 1 abstract]. Use exact. Need "crisis habit regression" = under high leverage, crews revert to base rates; "counter-trap" = if RIM becomes target, officials/teams change behavior, Goodhart; "clock" = late-game WP changes dominate. Need mention "clock" not a variable in paper; quarter-specific RIM [PAGE 8] shows Eric Lewis elevated across quarters, weakening pure endgame explanation. Exact quote [PAGE 8] "Eric Lewis remains elevated across all four quarters, so his season-level profile is not explained solely by fourth-quarter foul volume." Use.

Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. Need apply to NBA indoor sport. Physical: fatigue, injury, player size, pace, contact; biomechanical: jumping, landing, foul contact, optical tracking; weather: indoor arena, travel, schedule, humidity? Weather mostly vetoed because indoor controlled; but travel/altitude? NBA arenas climate-controlled; weather not a direct mechanical variable, except travel delays. Need "veto proof": RIM cannot claim intent because physical/biomechanical factors and schedule can produce foul events. Need state physical/biomechanical/weather layers veto causal interpretations. Need "proof" maybe formal: For RIM to support bias, need rule out physical contact profile, player aggressiveness, matchup, referee assignment, weather/travel. Public data lacks these. Since indoor, weather direct effect veto but travel/schedule residual. Need cite source: "Because crew assignment, matchup style, and game script can all contribute to these residuals" [PAGE 11/12? Actually page 11 text: "Because crew assignment, matchup style, and game script can all contribute to these residuals, the results should be treated as candidates for review rather than as standalone findings." [PAGE 11]. Use exact. Also "play style, matchup profile, defensive aggressiveness, and possession-level shot selection as plausible omitted explanations" [PAGE 15]. Use exact.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need create 3 scenarios that would veto/validate claims. Need "veto scenarios" meaning if metric claims fail under counterfactual. Need verifiable predictions. Since no betting lines, predictions about metric. Scenarios:
1. Absolute-vs-signed RIM disambiguation test: Recompute R^{abs}_g = Σ|ℓ| and R^{signed}_g = Σℓ. Prediction: if abstract's "absolute" is correct, distribution will show higher mean and reduced cancellation; top referees rankings may change. Veto: if rankings are unchanged, cancellation negligible; if they change, the signed equation cannot support absolute claims. Need specify threshold? Verifiable: compute Spearman rank correlation; if <0.8, veto. Use no betting.
2. Whistle attribution/optical tracking test: Replace crew-level with individual referee whistle assignment in a subset. Prediction: crew-level RIM outliers shrink toward zero or redistribute; if high RIM persists after individual attribution, support crew-level effect. Veto if no individual data? Verifiable with internal data.
3. Win-probability model replication: Recompute RIM with open-source WP model; prediction: macro-level outlier status stable (e.g., top/bottom decile overlap) but precise rankings vary. Veto if top decile overlap below chance/≤? Need say pre-register threshold. Use exact. Maybe also assignment randomization test: condition on pregame competitiveness/stakes; if high RIM refs assigned to closer games, RIM association attenuates. Prediction: controlling for pregame spread? Can't mention spread! Avoid "spread". Use "pregame competitiveness/stakes" no odds. But "spread" is betting line? Avoid. Use "pregame competitiveness proxy" not odds. Need no betting terms. Could use "pregame team-strength differential" (not odds). Good.

Need "multi-week traps" maybe in RETROCAUSAL: seasons 2021-22 to 2024-25, ESPN model updates, referee roster changes, COVID? Source says 2021-22 through 2024-25. Need mention "multi-week" as repeated weekly data ingestion can create model drift and crew assignment changes. Fine.

Need "CROSS_LAYER_VETO_ADJUDICATION" proof: We need maybe state "weather veto is nearly total for indoor NBA; physical/biomechanical not total." Need formulate with layers:
- L0 rule layer: foul definition, crew, replay.
- L1 physical: contact force, velocity, acceleration, impulse (N·s), body mass, landing angle. Foul probability not deterministic.
- L2 biomechanical: jump/landing, fatigue, injury, reach. 
- L3 environmental: indoor arena, travel, schedule, humidity/temperature controlled; weather only via travel delays.
- L4 measurement: ESPN WP black box, missing whistle attribution.
For RIM to adjudicate bias, need L1-L4 exclusions. Public data lacks L1-L3; so veto. Need maybe "proof" as logical:
Claim C: referee bias causes RIM outlier.
Evidence E: RIM outlier.
Necessary condition: P(E|bias) > P(E|no bias) after conditioning on physical/biomechanical/environment. Data don't include those; no identification. Therefore C not established. That's not fake ratio; it's probability. Good.

Need include formal equations with assumptions and singularities. Need ensure no fake ratios like Force/Fatigue. We can mention impulse = ∫F dt (N·s) but not use as metric. It says never invent fake ratios (Force / Fatigue). We can state physical variables but not fake equations? Formal equations okay. Better avoid unnecessary biomech equations. But "cross-layer" maybe mention impulse without ratio. Need not formalize. If mention impulse, units N·s. But don't invent ratios. Fine.

Need "SOURCE_OPERATORS_AND_EQUATIONS" include all formal LaTeX. Need exact page citations. Need quote exact. Let's plan:

Start with a short header? The required XML sections exact. We can include only those sections. Need no extra? We can include within THINK_TRACE. Must include all six sections. Use exact tags. Inside, use Markdown. Need no outside sections? Fine.

Need word count. Let's draft.

<THINK_TRACE>
- Begin: "The source is a statistical paper, not a causal audit. The core object is RIM."
- Multi-hop derivation: Start from WP w(t) ∈ [0,1]; event e at time; ℓ = w+ - w−; game RIM r=Σℓ; per call c=r/n; team signed q. Abstract says absolute; equation signed. Derive abs variants. Then validity checks: foul volume vs swing; RIM vs foul disparity. Then excess x. Then regression and rho. 
- Audit: 1) absolute/signed inconsistency; 2) crew-level not whistle-level; 3) nonrandom assignment; 4) ESPN black box; 5) postseason sample and 0-3/1-2 vs 3-3 odd; 6) multiple comparisons; 7) "percent swing" not defined; 8) "average absolute game RIM" ambiguous; 9) linear controls stress tests not causal; 10) PAGES mismatch.
- Need ≥400 words. Write ~550 words.
- Include exact quotes. [PAGE 1], [PAGE 3], [PAGE 4], [PAGE 13], [PAGE 14]. Good.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Define notation with units.
- Equations:
w^-_{eg}, w^+_{eg} ∈ [0,1] (dimensionless) or percentage points.
ℓ_{eg}=w^+_{eg}-w^-_{eg}
r_g=Σ ℓ; c_g=r_g/n_g; n_g>0.
Absolute variants: a=|ℓ|; R^{Σabs}=Σa; R^{|Σ|}=|Σℓ|. Note not in paper.
s_ig=o_ig-f_ig (counts)
q_ig=Σ(u^+ - u^-)
x_ij=y_ij-(a_i+b_j-m)
Regression equation.
rho formula.
- Assumptions.
- Breakdown/singularities:
n_g=0; missing w; sample timing; event bundled; signed cancellation; absolute ambiguity; crew aggregation; nonrandom assignment; fixed effects collinearity; cluster by game; small pair n; rho ν=0; t=0; model drift.
- Citations with quotes.

Need exact quotes:
[PAGE 3] "The unit of analysis is therefore the crew-game or referee-game association, not whistle-by-whistle attribution to a specific referee."
[PAGE 4] "Thus rg measures total foul-related win-probability movement, while cg isolates leverage per whistle."
[PAGE 4] "Positive values indicate that the observed sequence of foul events coincided with net win-probability movement toward team i."
[PAGE 11] "Because crew assignment, matchup style, and game script can all contribute to these residuals"
[PAGE 14] rho quote.
Good.

Need maybe cite page 3 for "RIM should be read as an impact metric rather than a bias metric." Exact: "Throughout the paper, RIM should be read as an impact metric rather than a bias metric." [PAGE 3]. Use.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Chadwick 1867 safe-hit/total-base averages; BAA FG% 1946-47; Oliver/Kubatko possession efficiency; 2013-14 optical tracking deep context; WPA. Officiating stuck in rate-stat. Source cites. 
- Retrocausal genealogy: current RIM retrofits deep-context logic onto foul events; earlier metrics (foul rates, L2M correctness) were necessary precursors; "impact" is not "bias". 
- Multi-week traps: 4-season window, ESPN model updates, referee roster 65-75, 1,230 regular-season games, crew rotation; weekly ingestion can create model drift; postseason sample 356/332; small cells; assignment nonrandom. 
- Cite [PAGE 1-2], [PAGE 3], [PAGE 9], [PAGE 14].
Need exact quotes maybe [PAGE 2] "While player and team evaluation has transitioned into the context era, public and academic evaluation of officiating has largely remained closer to the rate-stat era." [PAGE 2]. Use. [PAGE 3] "During the sample period, the league employed a rotating roster of roughly 65 to 75 officials each season, deployed across 1,230 regular-season games in three-person crews." [PAGE 3]. Good.
- Mention "multi-week traps" explicitly: "Weekly model refresh trap", "crew rotation trap", "postseason cell trap", "multiple comparison trap". Good.

<RECURSIVE_THEORY_OF_MIND>
- Define three modes: crisis habit regression, counter-trap, clock.
- Crisis habit regression: under high leverage, crews revert to habitual whistle thresholds; RIM spikes. But RIM cannot identify intent. 
- Counter-trap: if RIM is public and used as screening, refs/teams adapt; Goodhart; rankings unstable; need pre-registration and blind validation. 
- Clock: late-game WP is convex; a foul in tie final minute has large |ℓ|; but paper quarter analysis [PAGE 8] says Eric Lewis elevated across all quarters; so not solely clock. 
- Recursive ToM: analysts model referee intent; referees model team/player expectations; teams model referee tendencies; this recursive loop creates reactive effects. Need source says "screening signals rather than evidence of intent" [PAGE 1]. Use exact.
- Predictions: if counter-trap active, RIM outliers should shrink after public scrutiny or after metric adoption; if crisis habit, high-leverage quarters show higher variance but not necessarily bias; if clock, fourth-quarter RIM dominates. Need no betting.

<CROSS_LAYER_VETO_ADJUDICATION>
- Layers: physical, biomechanical, weather/environment, measurement. 
- Physical: contact impulse, body mass, velocity, acceleration; fouls are partly physical; public data lacks tracking. 
- Biomechanical: landing, fatigue, injury, reach; can alter foul probability. 
- Weather: NBA indoor; direct weather vetoed, but travel/schedule/altitude/humidity? Arena climate controlled. Weather not primary. 
- Measurement: ESPN WP black box; no whistle attribution; crew-level. 
- Veto proof: For RIM outlier to be evidence of referee bias, need condition on these layers; source explicitly says not causal. Quotes: [PAGE 3] "It does not, by itself, determine whether a call was correct, whether a team was unfairly advantaged, or whether any referee acted with bias or intent." [PAGE 15] "play style, matchup profile, defensive aggressiveness, and possession-level shot selection as plausible omitted explanations." 
- Adjudication: physical/biomechanical layers veto strong individual claims; weather layer vetoes direct environmental claims; measurement layer vetoes whistle-level claims. Only crew-level screening survives. 
- Need "proof" maybe: "Necessary-condition veto: if L1-L4 not measured, no causal attribution." Good.

<RLVR_COUNTERFACTUAL_VETOES>
- Define RLVR maybe "verifiable reward" not needed. We can say "Three counterfactual tests with pre-registered veto predicates." 
Scenario 1: Signed vs absolute RIM. Recompute both. Prediction: R^{Σabs} ≥ |R^{signed}|; top-decile overlap. Veto if abstract's absolute claim is central and rank correlation <0.8 or mean absolute > mean signed by material amount. Need formal: "If Spearman ρ_s < 0.80 between signed and absolute rankings, the paper must relabel r_g as signed net RIM and cannot use it as absolute impact." Good. Verifiable.
Scenario 2: Model replication with open-source WP. Prediction: macro outlier status stable (top/bottom decile overlap ≥70% maybe). Veto if overlap ≤50% or sign reversals for named outliers (Eric Lewis, Nick Buchert, Tom Washington). Need cite [PAGE 6] maybe. This is verifiable.
Scenario 3: Assignment/context stress test. Add pregame competitiveness, rest, travel, crew experience, team pace/style proxies. Prediction: high-RIM referee associations attenuate; if residual top-decile persists after these, stronger screening. Veto if attenuation >50% or CIs include zero. Need no betting. Use "pregame team-strength differential" not odds. 
Need "predictions" for each. Good.
- Maybe mention "whistle-level attribution" test: If internal optical data assign whistles, crew-level RIM should decompose into individual contributions. Prediction: some crew outliers become individual; if not, crew-level effect. Veto if individual attribution shows no concentration. But need exactly 3 scenarios. Could combine assignment and attribution? We need 3. Choose absolute/signed, WP model, whistle attribution or assignment. Maybe assignment more multi-week. But whistle attribution is central. Need 3 verifiable. Let's choose:
1 Absolute/signed disambiguation.
2 WP model replication.
3 Whistle-level attribution + assignment? Can't combine? Could be one scenario: "Individual-attribution subset" with internal data. Prediction: crew RIM attenuates or concentrates. Veto if no concentration. But assignment nonrandom is also important. Maybe scenario 3: "Assignment-selection counterfactual" using pregame competitiveness and rest/travel controls. Prediction: named outliers attenuate. This is verifiable with public data plus team strength. But whistle attribution not included? Could include in scenario 2? Hmm.
Need 3 verifiable RLVR veto scenarios. Maybe:
1 Metric-definition veto (absolute vs signed).
2 Measurement-model veto (ESPN vs open-source WP).
3 Attribution/assignment veto (crew vs individual whistle; add assignment controls). That's one combined but verifiable. Good.

Need ensure no "odds" word. Avoid "spread". Avoid "moneyline". Avoid "totals". Use "pregame team-strength differential" and "competitiveness proxy". Fine.

Need "zero betting lines" no mention. Good.

Need answer not too long but ≥1000. We'll write ~2500. Need maybe not mention "betting" at all. Good.

Need exact XML tags. The section names are exact: <THINK_TRACE>...</THINK_TRACE>, etc. The user wrote "<RLVR_COUNTERFACTUAL_VETOES>3 verifiable..." but tag missing closing? They wrote `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.` Actually in prompt: `<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.` then no closing? It lists:
<THINK_TRACE>...
<SOURCE_OPERATORS_AND_EQUATIONS>...
<RETROCAUSAL_GENEALOGY>...
<RECURSIVE_THEORY_OF_MIND>...
<CROSS_LAYER_VETO_ADJUDICATION>...
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.
Need close tag. Use `</RLVR_COUNTERFACTUAL_VETOES>`.

Need maybe cite exact [PAGE N] markers in each section. The invariant says when source pages provided, cite exact [PAGE N] markers and verbatim quotes. Need not cite every sentence, but enough. Include quotes exact. Need be careful quotes exact punctuation. Let's verify quotes:

From abstract [PAGE 1]: "aggregates the absolute win-probability movement attached to foul events" yes.
"observational screening signals rather than evidence of intent, misconduct, or whistle-level responsibility by any single official" yes.
From page 2: "While player and team evaluation has transitioned into the context era, public and academic evaluation of officiating has largely remained closer to the rate-stat era." yes (source has "While player and team evaluation has transitioned into the context era, public and academic evaluation of officiating has largely remained closer to the rate-stat era." exactly).
Page 3: "Throughout the paper, RIM should be read as an impact metric rather than a bias metric." yes.
Page 3: "It does not, by itself, determine whether a call was correct, whether a team was unfairly advantaged, or whether any referee acted with bias or intent." Yes.
Page 3: "The unit of analysis is therefore the crew-game or referee-game association, not whistle-by-whistle attribution to a specific referee." yes.
Page 4: "Thus rg measures total foul-related win-probability movement, while cg isolates leverage per whistle." Source uses `rg` and `cg` without subscript formatting. Exact: "Thus rg measures total foul-related win-probability movement, while cg isolates leverage per whistle." Good.
Page 4: "Positive values indicate that the observed sequence of foul events coincided with net win-probability movement toward team i." yes.
Page 6? Figure 3: "Eric Lewis and Nick Buchert appear on the high end, while Tom Washington appears on the low end." Page 6. Good.
Page 8: "Eric Lewis remains elevated across all four quarters, so his season-level profile is not explained solely by fourth-quarter foul volume." yes.
Page 11: "Because crew assignment, matchup style, and game script can all contribute to these residuals, the results should be treated as candidates for review rather than as standalone findings." yes.
Page 13: "This specification should be read as a conditioning exercise." yes.
Page 14: "Here ρ is the common partial association an omitted variable would need with both the treatment and the outcome, conditional on the included controls, to move the estimate to zero." yes.
Page 15: "play style, matchup profile, defensive aggressiveness, and possession-level shot selection as plausible omitted explanations." The exact sentence: "Instead, these team-side patterns survive a first-pass stress test while still leaving play style, matchup profile, defensive aggressiveness, and possession-level shot selection as plausible omitted explanations." Page 15. Use.
Page 17: "RIM measures impact: the size and direction of win-probability movement associated with foul events. Bias is a separate causal and normative claim requiring evidence about call correctness, comparable game context, and decision-making mechanisms beyond the public data used here." yes.
Page 17: "A structural limitation of this framework is its reliance on ESPN’s proprietary win-probability model." yes. "black box" quote: "Because the exact algorithmic weights that ESPN uses are not public, the model acts as a “black box” measurement instrument." [PAGE 17]. Good.
Page 3: "During the sample period, the league employed a rotating roster of roughly 65 to 75 officials each season, deployed across 1,230 regular-season games in three-person crews." yes.
Page 9: "The series-score table shows that postseason leverage does not move in a simple straight line with game number." yes.
Page 9: "Average absolute game RIM is higher in several later-series states, including 0–3 and 1–2, while 3–3 is lower in this grouping despite being the most decisive series state." yes.
Page 9: "The postseason RIM distribution uses 356 postseason games. The series-score summaries use the 332 postseason games with complete pregame series-state information, corresponding to 664 team-game observations." yes.

Need maybe mention "PAGES:16 vs [PAGE 23]" in THINK_TRACE. Exact quote? No need. But if citing [PAGE 23] maybe not. We can avoid.

Need formulate equations with LaTeX. Need units. Let's write polished.

Potential issue: "RIM" in abstract absolute; equations signed. Need state "paper's `r_g` is signed net movement, not absolute." But source says "game-level RIM statistic is denoted by r_g = Σℓ". Then "Thus rg measures total foul-related win-probability movement" not "absolute". We can say "The literal equation does not contain an absolute value." This is valid.

Need mention "ℓ" is "leverage" but if w is probability for a fixed team (e.g., home), a foul that helps home positive, hurts negative. If they plot average percent swing per call, if w in percent, ℓ percent. Need define.

Need "exact singularity/breakdown regimes." We'll list:
- n_g=0 -> c_g undefined; RIM not defined if no fouls.
- w^+ or w^- missing / timestamp mismatch -> no event leverage.
- simultaneous events (foul + free throws + substitution) -> w+ includes non-foul effects.
- signed cancellation -> r_g can be zero despite large absolute churn.
- absolute vs total absolute ambiguity.
- crew-level aggregation -> no whistle attribution.
- nonrandom assignment -> confounding.
- fixed effects: if a team never plays away? no; but home status collinear with team? not generally; but if all games for team? For pair with 5 min; small n -> wide intervals.
- rho: ν=0 division by zero; t undefined if SE=0; t=0 -> rho=0; model misspecification.
- ESPN model update -> nonstationary measurement.
- postseason cells 0-3/1-2 small -> unstable.
Need include.

Need "CROSS_LAYER_VETO_ADJUDICATION" weather: "Weather is an indoor-veto layer: direct rain/wind does not enter NBA shot/foul mechanics in a climate-controlled arena; only travel disruptions and schedule compression are plausible. Thus weather cannot be used to explain a whistle, but it also cannot be invoked as a direct causal confound. The physical/biomechanical layer remains non-vetoed because public data lack contact force, player tracking, fatigue, injury status." Need wording.

Need "RECURSIVE_THEORY_OF_MIND" with "crisis habit regression vs counter-trap vs clock" exact headings maybe. Need explicitly compare:
- Crisis habit regression: Under high leverage, referees may default to habitual thresholds, increasing variance; RIM spikes due to context. Prediction: high-leverage quarters show more RIM dispersion; but quarter analysis [PAGE 8] contradicts pure clock for Eric Lewis.
- Counter-trap: Once RIM is used as screening, officials/teams may adapt; metric becomes reactive; rankings unstable. Prediction: post-publication replications show attenuation for named outliers. Need "counter-trap" is a trap where trying to avoid bias creates new pattern. 
- Clock: WP convexity near end; a foul in final minute has larger |ℓ|. Prediction: fourth-quarter RIM dominates. But paper shows elevated across quarters for one referee; not general. Need "clock is a measurement confound, not intent."
Need mention recursive ToM: "analyst models referee; referee models player; player models referee; league models analysts." Good.

Need "RETROCAUSAL_GENEALOGY" maybe "retrocausal" odd. Need discuss lineage from past to present and how present metric retroactively reinterprets past. Good.

Need ensure total word count >1000. We'll likely be ~2500. Good.

Need maybe answer with a title? The six sections enough. We can start directly with `<THINK_TRACE>`. Good.

Need avoid "odds". Check draft for "odds" no. Avoid "spread" no. Avoid "betting" no. "pregame team-strength differential" okay. "money" no.

Need avoid "toy equations" e.g., "Force/Fatigue" no. Use formal equations. Good.

Need "SI/information/probability units" mention:
- w: dimensionless probability in [0,1], or percentage points if ×100.
- foul counts: dimensionless counts (or count per game).
- t-statistic dimensionless; ν degrees of freedom dimensionless; ρ dimensionless partial association.
- fixed effects: same units as y.
- impulse if mention: N·s; no ratio. But maybe avoid physical equations to not complicate. If mention "contact impulse" state units N·s but no equation. That's fine.

Need include "information units" maybe not necessary? System says "SI/information/probability units". We use probability dimensionless; counts; degrees of freedom. Good.

Need maybe mention "win probability added (WPA)" but not define. Fine.

Need "zero betting lines" no mention.

Need "exact [PAGE N] markers and verbatim quotes." We'll include quotes in quotation marks. Need ensure not paraphrase inside quotes. Good.

Need maybe include block quotes? Fine.

Let's write final. Need be concise but deep. Ensure all sections present. Let's draft carefully.

We need maybe include "The caller's `PAGES:16` conflicts with the embedded page markers through [PAGE 23]; I use embedded [PAGE N]." Should we? It might be seen as not following. But it's a source audit. Include one sentence in THINK_TRACE. Good.

Need no mention "source pages provided" maybe. OK.

Let's compose final answer.

Potential issue: "PAGES: 16" but source text includes page 23. If I cite [PAGE 23] references maybe beyond 16. But I won't cite beyond 17. Cite pages 1,2,3,4,6,8,9,11,13,14,15,17. All within 17, but user says 16. Hmm. Maybe they intended 16 pages but source has more. We can cite [PAGE 1]-[PAGE 16] only? Need page 17 conclusion quotes maybe important. But if PAGES 16, maybe [PAGE 17] not allowed? However source text has [PAGE 17] conclusion. The instruction says pages provided. It may be an inconsistency. To be safe, cite up to [PAGE 16]? But key conclusion quotes on page 17. Maybe use page 3 and 15 instead. But exact quote "RIM measures impact... Bias is separate..." is page 17. Could cite [PAGE 17] because present. The user said PAGES:16 but source text page 17 present. Hmm. I'll include a note: "I use the embedded page markers; they extend beyond the caller's PAGES count." That resolves. But maybe not needed. I can cite [PAGE 17] and note. Good.

Need exact quote "public and academic evaluation of officiating has largely remained closer to the rate-stat era." Page 2. Good.

Need "RIM acts as a macro-level diagnostic tool to identify high-leverage referee-game associations" page 3. Good.

Need maybe "RIM should be read as an impact metric rather than a bias metric" page 3. Good.

Need "The primary contribution of this work is foundational" page 17? Not necessary.

Need "absolute win-probability movement" quote in THINK_TRACE. Good.

Need "signed cancellation" explanation. Good.

Need "RIM distribution top high end..." cite page 6. Good.

Need "Figure 7 average absolute game RIM" cite page 9. Good.

Need "regression stress test" cite page 13. Good.

Need "robustness value" cite page 14. Good.

Need "omitted variable" quote page 15. Good.

Need "black box" quote page 17. Good.

Need "weather" no source quote; it's cross-layer audit not source. Fine.

Need "RLVR" scenarios include predictions. Good.

Need "verifiable" thresholds. Good.

Need no "betting lines". Good.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central object is the Ref Impact Metric (RIM), a win-probability-weighted summary of foul events. The multi-hop derivation is straightforward but not internally clean. First, for foul event \(e\) in game \(g\), the paper defines event leverage as \(\ell_{eg}=w^{+}_{eg}-w^{-}_{eg}\), where \(w^{-}_{eg}\) and \(w^{+}_{eg}\) are the win probabilities immediately before and after the event. Then it defines the game-level statistic \(r_g=\sum_{e=1}^{n_g}\ell_{eg}\), and the average swing per call \(c_g=r_g/n_g\). The paper states: “Thus rg measures total foul-related win-probability movement, while cg isolates leverage per whistle.” [PAGE 4]. For team-level analysis it defines signed foul disparity \(s_{ig}=o_{ig}-f_{ig}\) and signed team RIM \(q_{ig}=\sum_e(u^{+}_{ieg}-u^{-}_{ieg})\). The paper states: “Positive values indicate that the observed sequence of foul events coincided with net win-probability movement toward team i.” [PAGE 4]. The referee-team excess is then \(x_{ij}=y_{ij}-(a_i+b_j-m)\), and the controlled association is \(y_{ig}=\alpha+\beta h_{ig}+\tau_i+\omega_{j(i,g)}+\lambda_t+\pi_p+\varepsilon_{ig}\). The robustness diagnostic is the equal-strength omitted-variable value \(\rho=(-t^2+\sqrt{t^4+4\nu t^2})/(2\nu)\). That is the formal chain.

The gray-zone audit has several serious items. The first is a definitional inconsistency: the abstract says RIM “aggregates the absolute win-probability movement attached to foul events” [PAGE 1], but the literal equation defines \(\ell_{eg}=w^{+}_{eg}-w^{-}_{eg}\) without an absolute value, and \(r_g=\sum \ell_{eg}\). A signed sum can cancel: a foul that moves win probability up and another that moves it down can produce a small \(r_g\) even when the absolute churn is large. The paper later refers to “average absolute game RIM” [PAGE 9], which is not formally defined in the equation block. This is not cosmetic. If the intended object is \(\sum |\ell_{eg}|\), the paper should say so; if the intended object is \(|\sum \ell_{eg}|\), that is different again. The literal signed \(r_g\) supports “net movement,” not “absolute impact.” This is the largest internal breakdown regime.

The second audit item is attribution. The paper is explicit: “The unit of analysis is therefore the crew-game or referee-game association, not whistle-by-whistle attribution to a specific referee.” [PAGE 3]. It also says public feeds “do not reliably attribute individual foul calls to the specific referee who blew the whistle” [PAGE 3]. So every named referee result is a crew-association screening result, not an individual-whistle result. The paper acknowledges nonrandom assignment: “A high RIM profile can therefore reflect the types of games assigned to a referee as well as anything about the referee’s own officiating environment.” [PAGE 3]. This weakens any intent reading.

The third audit item is measurement. The win-probability model is proprietary: “Because the exact algorithmic weights that ESPN uses are not public, the model acts as a ‘black box’ measurement instrument.” [PAGE 17]. Model updates, timestamp alignment, and bundled events such as foul-plus-free-throw-plus-possession can contaminate \(w^{+}_{eg}-w^{-}_{eg}\). The fourth item is causal overreach. The paper repeatedly frames the regressions as stress tests: “This specification should be read as a conditioning exercise.” [PAGE 13]. It also states that “RIM should be read as an impact metric rather than a bias metric” and that it “does not, by itself, determine whether a call was correct, whether a team was unfairly advantaged, or whether any referee acted with bias or intent.” [PAGE 3]. The conclusion is consistent: “RIM measures impact: the size and direction of win-probability movement associated with foul events. Bias is a separate causal and normative claim” [PAGE 17].

The fifth audit item is sample and multiplicity. The regular-season panel has 4,876 games and the postseason has 356 games; the series-state summaries use 332 postseason games with complete pregame series-state information [PAGE 9]. The paper itself notes that “postseason leverage does not move in a simple straight line with game number” [PAGE 9]. With many referee-team pairs, 2,175 qualified pairings, and many displayed figures, selection of “largest” outliers is a screening exercise, not a pre-registered confirmatory test. The sixth item is metadata: the caller says PAGES:16, but the supplied text embeds page markers through [PAGE 23]; I treat the embedded markers as authoritative. Finally, the paper’s own language is careful: “observational screening signals rather than evidence of intent, misconduct, or whistle-level responsibility by any single official” [PAGE 1]. The correct reading is therefore a measurement and triage framework, not a bias verdict.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Notation and units.** Let \(w^{-}_{eg},w^{+}_{eg}\in[0,1]\) be win probabilities immediately before and after foul event \(e\) in game \(g\). They are dimensionless probabilities; if expressed as percentages, the same equations carry percentage-point units. Let \(n_g\) be the number of foul events in game \(g\), a dimensionless count. The event leverage is
\[
\ell_{eg}=w^{+}_{eg}-w^{-}_{eg},
\]
with units of win probability, not points. The literal game-level RIM is
\[
r_g=\sum_{e=1}^{n_g}\ell_{eg},
\]
and the average swing per call is
\[
c_g=\frac{r_g}{n_g}.
\]
The source states: “Thus rg measures total foul-related win-probability movement, while cg isolates leverage per whistle.” [PAGE 4]. However, the abstract’s “absolute win-probability movement” [PAGE 1] is not represented by this equation. The two possible absolute variants are
\[
R^{\Sigma|\cdot|}_{g}=\sum_{e=1}^{n_g}\left|\ell_{eg}\right|,\qquad
R^{|\Sigma|}_{g}=\left|\sum_{e=1}^{n_g}\ell_{eg}\right|.
\]
These are not equivalent; \(\sum|\ell_{eg}|\ge|\sum\ell_{eg}|\). The paper’s Figure 7 reference to “average absolute game RIM” [PAGE 9] does not disambiguate them.

For team-side analysis, let \(f_{ig}\) and \(o_{ig}\) be foul counts charged to team \(i\) and its opponent, respectively. These are dimensionless counts. Signed foul disparity is
\[
s_{ig}=o_{ig}-f_{ig}.
\]
Signed team RIM is
\[
q_{ig}=\sum_{e=1}^{n_g}\left(u^{+}_{ieg}-u^{-}_{ieg}\right),
\]
where \(u^{-}_{ieg},u^{+}_{ieg}\) are team \(i\)’s win probabilities before and after event \(e\). The source states: “Positive values indicate that the observed sequence of foul events coincided with net win-probability movement toward team i.” [PAGE 4]. This is directional association, not proof of favoritism.

For referee-team excess, let \(y_{ij}\) be the observed average outcome for referee \(i\) and team \(j\), \(a_i\) the referee average, \(b_j\) the team average, and \(m\) the global average. The excess is
\[
x_{ij}=y_{ij}-(a_i+b_j-m).
\]
Positive values mean the team performs better with that referee than the additive baseline predicts, not that the referee caused the improvement.

The controlled team-side model is
\[
y_{ig}=\alpha+\beta h_{ig}+\tau_i+\omega_{j(i,g)}+\lambda_t+\pi_p+\varepsilon_{ig},
\]
where \(h_{ig}\) is a home-status indicator, \(\tau_i\) are team fixed effects, \(\omega_{j(i,g)}\) are opponent fixed effects, \(\lambda_t\) are season fixed effects, and \(\pi_p\) are playoff series-state controls when applicable. Standard errors are clustered by game. The source states: “This specification should be read as a conditioning exercise.” [PAGE 13].

The omitted-variable robustness value is
\[
\rho=\frac{-t^2+\sqrt{t^4+4\nu t^2}}{2\nu},
\]
where \(t\) is the coefficient’s \(t\)-statistic and \(\nu\) is residual degrees of freedom. Both \(t\) and \(\nu\) are dimensionless; \(\rho\) is a dimensionless partial-association measure. The source states: “Here ρ is the common partial association an omitted variable would need with both the treatment and the outcome, conditional on the included controls, to move the estimate to zero.” [PAGE 14].

**Assumptions.** The equations assume that \(w^{-}\) and \(w^{+}\) are sampled immediately around the foul event; that no intervening event contaminates the post-event probability; that the same win-probability model is used throughout; that foul events are correctly ordered; and that the crew assignment is the relevant unit. The regressions assume conditional ignorability given home status, team, opponent, season, and series state, plus correct fixed-effect specification and cluster-robust inference. The excess model assumes an additive referee-plus-team baseline.

**Singularities and breakdown regimes.** (i) \(n_g=0\) makes \(c_g\) undefined. (ii) Missing or misaligned \(w^{-}\) or \(w^{+}\) makes \(\ell_{eg}\) undefined. (iii) Bundled events—foul plus free throws, substitutions, replay, possession changes—can make \(w^{+}\) reflect more than the foul. (iv) Signed cancellation makes \(r_g\) near zero despite large absolute churn; this is the core ambiguity between “absolute” and “net” RIM. (v) Crew-level aggregation prevents whistle-level attribution: “The unit of analysis is therefore the crew-game or referee-game association, not whistle-by-whistle attribution to a specific referee.” [PAGE 3]. (vi) Nonrandom referee assignment confounds high RIM with game competitiveness and stakes. (vii) Small referee-team cells make \(x_{ij}\) unstable; the five-game minimum does not eliminate small-sample intervals. (viii) In \(\rho\), \(\nu=0\) is a division-by-zero singularity; \(t=0\) gives \(\rho=0\); misspecified fixed effects can make \(\rho\) meaningless. (ix) ESPN model updates create nonstationary measurement: “Because the exact algorithmic weights that ESPN uses are not public, the model acts as a ‘black box’ measurement instrument.” [PAGE 17].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is explicitly a progression from rate statistics to efficiency statistics to deep-context statistics. It dates the rate-stat era to Henry Chadwick’s 1867 safe-hit and total-base averages and to the 1946–47 BAA introduction of field-goal percentage [PAGE 1]. It then places Dean Oliver and possession-based offensive/defensive ratings in the efficiency era, where “volume without the context of opportunity is inherently misleading” [PAGE 2]. The deep-context era follows optical tracking in 2013–14 and expected-value measures, where events are weighted by leverage. The retrocausal move is to apply that later logic backward to officiating: fouls are no longer counted as volume; they are weighted by win-probability movement.

The paper’s historical diagnosis is that officiating analysis never made the same transition: “While player and team evaluation has transitioned into the context era, public and academic evaluation of officiating has largely remained closer to the rate-stat era.” [PAGE 2]. Earlier officiating work used foul rates, reviewed-call labels, and Last Two Minute Reports. RIM retrofits the deep-context frame onto those older objects. The retrogenealogy is therefore not “RIM discovered bias”; it is “RIM changes the unit of officiating impact from whistle count to leverage-weighted movement.”

The multi-week traps are longitudinal. The sample spans 2021–22 through 2024–25, with a rotating roster of “roughly 65 to 75 officials each season, deployed across 1,230 regular-season games in three-person crews” [PAGE 3]. Weekly ingestion can mix model-version drift, crew rotation, schedule compression, and playoff-state changes. The postseason sample is smaller, and the paper warns that “postseason leverage does not move in a simple straight line with game number” [PAGE 9]. A second trap is assignment selection: high-profile crews may be assigned to more competitive or higher-stakes games. A third is multiple comparison: many referee-team pairs are screened, so “largest excess” rankings are exploratory. A fourth is metric reactivity: once RIM is used for review, crews and teams may adapt, making later weekly windows non-exchangeable with earlier ones. A fifth is the absolute/signed ambiguity: if the metric definition changes across a season boundary or figure, weekly comparisons are not apples-to-apples.

The paper’s own guardrail is that the framework is “foundational” and should be tested with different win-probability models and further causal inference [PAGE 1]. That is the correct genealogical status: RIM is a bridge from rate-era officiating summaries to context-era screening, not a terminal causal instrument.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind problem is that analysts, referees, players, teams, and leagues are all modeling one another. The analyst sees a high-RIM crew and infers intent; the referee knows crews are monitored and may adjust thresholds; players know referees are monitored and may dramatize or suppress contact; teams know tendencies and may game the expected whistle environment. RIM can therefore become a reactive measurement.

**Crisis habit regression.** Under high leverage, crews may regress to habitual whistle thresholds rather than deliberate bias. A late-game foul in a one-possession context has a large win-probability derivative, so a normal habitual call can produce a large \(|\ell_{eg}|\). This predicts higher RIM dispersion in high-leverage states without any intent. The paper’s quarter check partially counters a pure clock story: “Eric Lewis remains elevated across all four quarters, so his season-level profile is not explained solely by fourth-quarter foul volume.” [PAGE 8]. But that is one referee profile, not a general disproof of clock effects.

**Counter-trap.** If RIM is used as a public screening statistic, the counter-trap is Goodhartian adaptation: crews or teams alter behavior around the metric, and the original outlier ranking decays. The paper’s language blocks the intent inference: RIM is “observational screening signals rather than evidence of intent, misconduct, or whistle-level responsibility by any single official” [PAGE 1]. A counter-trap prediction is that post-publication or post-review replications should show attenuation for the most scrutinized referee-team pairs, especially where intervals are already wide.

**Clock.** The clock is a measurement confound, not a mental-state variable. Near the end of a close game, win probability is convex in score and time, so a single foul can move \(w\) sharply. A clock-heavy RIM profile can therefore reflect game state rather than officiating disposition. The correct comparison is within-quarter and within-leverage-state, not raw season averages. The paper’s quarter decomposition is a first step, but it does not fully separate clock, score margin, possession, and foul type.

The recursive ToM adjudication is therefore: crisis-habit regression predicts context-driven variance; counter-trap predicts metric reactivity and attenuation; clock predicts late-game dominance. None of the three establishes bias. The paper’s controlled models are “stress tests” [PAGE 13], not mental-state identification.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is a necessary-condition test. For a RIM outlier to support a claim of referee bias, the analyst must rule out physical contact, biomechanical state, environmental schedule, and measurement artifacts. Public ESPN data do not carry those layers.

**Physical layer.** Fouls are contact events shaped by player mass, velocity, acceleration, and impulse. A crew can call more fouls in a game because the teams generate more contact, not because the crew has a different threshold. The paper acknowledges omitted explanations: “play style, matchup profile, defensive aggressiveness, and possession-level shot selection as plausible omitted explanations.” [PAGE 15]. This vetoes strong individual-intent claims from RIM alone.

**Biomechanical layer.** Jumping, landing, reach, fatigue, injury status, and balance affect whether contact occurs and how it appears. These are not in the public play-by-play feed. A high-RIM crew-game can be a high-contact game. The paper’s own caveat— “Because crew assignment, matchup style, and game script can all contribute to these residuals, the results should be treated as candidates for review rather than as standalone findings.” [PAGE 11]—is a cross-layer veto.

**Weather/environmental layer.** The NBA is indoor and climate-controlled, so direct rain, wind, and temperature do not mechanically enter shot or foul geometry. Weather is therefore a near-total direct veto: it cannot explain a whistle, and it cannot be invoked as a direct causal confound. Residual environmental effects are travel delays, schedule compression, altitude, and arena-specific factors, not outdoor weather. Those remain possible but are not measured here.

**Measurement layer.** The win-probability model is a “black box” [PAGE 17], and the public feed lacks whistle-level attribution [PAGE 3]. A crew-level RIM outlier cannot identify which official made which call. This layer vetoes whistle-level responsibility claims.

**Adjudication.** The physical and biomechanical layers veto strong causal attribution; the weather layer vetoes direct environmental attribution; the measurement layer vetoes individual-whistle attribution. What survives is a crew-game screening association. The paper says exactly that: RIM “acts as a macro-level diagnostic tool to identify high-leverage referee-game associations” [PAGE 3]. Any stronger claim fails the cross-layer veto.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1: Signed-versus-absolute RIM disambiguation.** Recompute both \(R^{\Sigma|\cdot|}_{g}=\sum|\ell_{eg}|\) and \(r_g=\sum\ell_{eg}\) on the same event set, then compare rankings and distributions. Prediction: \(R^{\Sigma|\cdot|}_{g}\ge|r_g|\), and if cancellation is material, the top/bottom referee rankings will change. Veto predicate: if the paper’s “absolute” language is central and the Spearman rank correlation between signed and absolute rankings is below a pre-registered threshold such as \(0.80\), then \(r_g\) cannot be presented as absolute impact; it must be relabeled signed net RIM. This is verifiable directly from the event-level data.

**Scenario 2: Alternative win-probability model replication.** Recompute RIM with an open-source, reproducible state-transition win-probability model and compare named outlier status (for example, high-side and low-side regular-season profiles such as Eric Lewis, Nick Buchert, and Tom Washington [PAGE 6]). Prediction: macro-level outlier status should be more stable than exact ranks, but some named profiles may attenuate. Veto predicate: if top-decile overlap falls to chance or if the sign of the named outlier reverses under the alternative model, the ESPN-model result is not robust enough for screening. This is verifiable by pre-registering the overlap metric and model specification.

**Scenario 3: Whistle-attribution and assignment-selection counterfactual.** On an internal subset with individual whistle attribution and pregame assignment covariates, decompose crew RIM into official-level contributions and condition on pregame competitiveness, rest, travel, and crew experience. Prediction: some crew-level outliers will concentrate on one official, while others will dissolve into game-context effects; assignment controls should attenuate high-RIM associations if selection is the driver. Veto predicate: if the named high-RIM crew associations remain after individual attribution and assignment controls, the screening signal is stronger; if they attenuate by more than a pre-registered margin or their intervals cross zero, the original crew-level claim is vetoed as a selection/aggregation artifact. This is verifiable with internal tracking data and public schedule data, without any betting-line input.
</RLVR_COUNTERFACTUAL_VETOES>