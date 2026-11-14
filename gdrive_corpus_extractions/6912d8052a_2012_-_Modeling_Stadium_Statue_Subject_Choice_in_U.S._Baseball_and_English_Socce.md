---
source: "2012 - Modeling Stadium Statue Subject Choice in U.S. Baseball and English Soccer - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 39
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6300
---

<NATIVE_REASONING>
The user has provided a source text (a research paper about modeling stadium statue subject choice in US baseball and English soccer) and wants me to act as the GSE + GSI Frontier Reasoning Foundry. I need to produce a response with specific XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. (Note: the paper uses odds ratios exp(B), but I must not mention betting lines. I can discuss statistical odds ratios in the context of the model, but not betting lines/spreads/totals/moneylines.)
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
- >= 1,000-WORD DEPTH across these exact XML sections.

Wait, the user said "STRICT INVARIANTS" and listed sections. I need to ensure >=1000 words total across sections. The source text has page markers? Looking at the source text, it has page numbers embedded: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34. The paper itself is 39 pages according to the user, but the text provided shows pages up to 34 maybe? Actually the text ends at page 34 (references). Wait, the user said PAGES: 39 but the text provided ends around page 34? Let me check the end: "http://bepress.com/jqas 34" then more references? Actually looking at the text, after page 34 there are more references continuing but no page markers after that? The last visible page marker is 34. But I should cite page numbers where available in the text.

I need to be careful: The paper is about statue subject choice, NOT about sports betting or game outcomes. So "zero betting lines" is easy—just don't mention betting. But the paper does discuss odds ratios (exp(B)). I should clarify these are statistical odds ratios from logistic regression, not betting odds, and avoid any betting terminology.

Let me structure the response:

**THINK_TRACE (>=400 words):** Deep multi-hop derivation and gray-zone audit. I need to derive the logistic regression model from the paper, discuss the causal propositions P1-P9, the sample selection (FL100, HOF), the variables, the piecewise modeling approach, the optimal models, the curvilinear era effect, loyalty effect, franchise relocation effect, ballpark age effect, All-Star appearances, top-3 goalscorers, 1966 World Cup, etc. Also audit gray zones: range restriction, small sample, misclassification, multi-subject statues, X-factor/charisma, era effect shifting over time, control for number of legends at club, franchise-specific controls (Yankees, Orioles, Cardinals), etc. Must be >=400 words.

**SOURCE_OPERATORS_AND_EQUATIONS:** Formal LaTeX equations. The logistic regression: log(p/(1-p)) = B0 + sum BiXi. Odds ratio exp(Bj). Specific coefficients from Table 1a and 2a. Variables definitions. Units: probability (dimensionless [0,1]), years, percentage (0-100 or proportion), count (integer), dummy (0/1), log(age). Page citations: [PAGE 15] for equation (1), [PAGE 17-18] for soccer model, [PAGE 20-21] for baseball model, [PAGE 13-14] for data measures, [PAGE 23] for figure 2, etc. Exact singularity/breakdown regimes: perfect separation (e.g., Yankees control B=-7.169 with exp(B)=0.001 near zero), small cell counts (7 England 1966 players), range restriction in club success, era effect apex moving forward, multicollinearity (Spearman's rho > 0.85 leading to dropping variables), etc.

**RETROCAUSAL_GENEALOGY:** Historical lineage: Osmond et al. 2006, Russell 2006, Holt 2006, Seifried and Meyer 2010, Camden Yards 1992, Cialdini BIRGing 1976, Tuan 1974, Bale 1994, Bosman ruling 1995, etc. Multi-week traps: the era effect is non-stationary; as time passes, the nostalgia window shifts (30-40 year distance from 1990s statue boom), so players from 1950s/60s are optimal now but will age out; pre-WWII players get "marooned"; baseball franchises exhausting suitable players from optimum period move forward in time. Multi-week trap: if you evaluate statue probability statically, you miss the temporal drift; counter-trap: model era as time-varying covariate or dummy bins rather than fixed quadratic centered on 2011.

**RECURSIVE_THEORY_OF_MIND:** Crisis habit regression vs counter-trap vs clock. Crisis habit regression: clubs revert to safe nostalgia subjects (one-club men, dead legends) during identity crises (new stadium, relocation). Counter-trap: fan-led campaigns (e.g., Sproson Fund, Bartram) bypass club branding logic and select subjects outside model predictions (charisma, X-factor). Clock: the 30-40 year nostalgia clock means the model's era apex is a moving target; predictions for recent players (e.g., post-2000) are systematically undervalued by a model fitted on 1950s-60s apex. Recursive ToM: supporters model what other supporters will venerate; clubs anticipate fan campaigns; statue becomes a signal in a signaling game.

**CROSS_LAYER_VETO_ADJUDICATION:** Physical/biomechanical/weather veto proof. This is tricky because the paper is about statues, not athletes. But I can interpret "cross-layer veto" as factors that veto statue selection regardless of statistical model. Physical layer: stadium exists, space, structural capacity for statue, weather exposure (bronze corrosion, inclement weather in soccer vs baseball summer game). Biomechanical: pose, sculptability, multi-subject statue composition (e.g., 'Champions' statue including Ray Wilson who didn't play for West Ham). Weather veto: English soccer inclement weather vs baseball 4-hour summer game affects secondary revenue and heritage marketing logic; statue as distinguishing feature in new grounds; McDonaldisation of sports buildings. Veto proof: franchise relocation vetoes depiction (e.g., Jackie Robinson, Brooklyn Dodgers -> LA; none at MLB ballpark); multi-subject statue scenes include players to "complete the picture" overriding performance credentials; X-factor/charisma vetoes pure stats (Stanley Matthews, George Best, Frank Howard). Need to cite pages.

**RLVR_COUNTERFACTUAL_VETOES:** 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need 3 counterfactual veto scenarios that are verifiable (can be checked against data or logic). Examples:
1. If a franchise relocates (city changes) after a player's career, the model vetoes depiction regardless of All-Star count or loyalty. Prediction: A Hall of Famer whose primary franchise moved cities (e.g., Brooklyn Dodgers player) will have near-zero probability of statue at the new city's ballpark unless fan-funded exception (Warren Spahn). Verifiable: check statues at relocated franchises vs non-relocated.
2. If a player's career midpoint is outside the living-memory nostalgia window (e.g., pre-1930 or post-2000 relative to 2011), the quadratic era term drives probability toward zero even for Hall of Famers. Prediction: Tris Speaker, Nap Lajoie, Sam Crawford, Charles Buchan have low predicted probability despite elite status. Verifiable: check Table 1b/2b misclassified or absence of statues.
3. If a subject is included only to complete a multi-subject commemorative scene (not primary club affiliation), the individual-selection model vetoes them. Prediction: Ray Wilson (Champions statue, West Ham) excluded from analysis because not primary club; multi-subject statues produce outliers with low individual credentials. Verifiable: footnote 4 [PAGE 13] and discussion [PAGE 28].

Also mention that I will not provide betting lines.

Word count: Need >=1000 words across sections. I'll aim for substantial depth in each.

Let me draft carefully, ensuring page citations [PAGE N] match the text. I'll use the page numbers visible in the source text.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should quote verbatim where useful and cite page numbers.

Let's map page numbers to content:
- Page 2: Abstract, intro, counts (33 soccer, 67 MLB by Sept 1 2011).
- Page 3: Introduction continued, motivations, sympathy P1.
- Page 4: Marketing via built heritage, BIRGing, P2a, P2b, P3.
- Page 5: P4 era non-linear.
- Page 6: A better past, fan-led, loyalty/locality P5/P6.
- Page 7: P7 role/position.
- Page 8: A desire for identity and sense of place, P8 stadium age.
- Page 9: Franchising barrier, P9 franchise location history.
- Page 10: Methodology sample selection.
- Page 11: Sample description soccer (FL100), 23% depicted.
- Page 12: Baseball sample (202 HOF), 24% depicted, Negro Leagues note.
- Page 13: Data and measures, sympathy coding, soccer performance measures, baseball HR/AVG/W/ERA, ranks, All-Star, era midpoint, years since 2011, squared effect. Loyalty, longevity, locality, role. Footnote 4 Ray Wilson.
- Page 14: Club success measures, average league position, franchise success, history/tradition, stadium age coding, data sources.
- Page 15: Analysis, equation (1), logistic regression, piecewise 3 stages, control variables (number of HOF/legends at club, Yankees/Orioles/Cardinals dummies), p<0.05 one-tailed, cut-point 0.5.
- Page 16: (continuation of analysis? Actually page 16 text is brief then Results start). Wait page 16 shows end of analysis and start of results summary statistics.
- Page 17: Soccer model results, piecewise significant predictors, optimal model table 1a discussion, odds ratios.
- Page 18: Soccer model classification 87%, misclassified table 1b, non-legends table 1c.
- Page 19: Table 1b continued? Actually page 19 has table 1b continuation and table 1c. Then baseball results start.
- Page 20: Baseball model results, optimal model table 2a discussion, loyalty exp(20*B)=4.055, career length 1.313, era max 1963, All-Star 1.325.
- Page 21: Table 2a, franchise moved exp(B)=41.657, ballpark age exp(B)=0.340, classification 90.6%.
- Page 22: Table 2b misclassified baseball, table 2c non-HOF baseball 44%.
- Page 23: Figure 2 description.
- Page 24: Discussion, era effect, 30-40 year distance, pre-WWII marooned, Tris Speaker etc.
- Page 25: Fan-instigated soccer projects, Supporters Trust, baseball no fan ownership.
- Page 26: Club success lack of effect, range restriction.
- Page 27: Franchise movement negative effect, Jackie Robinson, Warren Spahn fan-funded exception, ballpark age effect.
- Page 28: Multi-subject statues, X-factor, Stanley Matthews.
- Page 29: George Best, Frank Howard quote.
- Page 30: Charitable causes, McGwire statue declined, conclusion.
- Page 31-34: References.

Okay, I'll cite these.

Now, I must not mention betting lines. The paper uses "odds" in statistical sense. I will refer to "statistical odds ratios" and explicitly note these are not wagering odds. Avoid words like spread, total, moneyline, odds (in betting context). I can use "odds ratio" as it's a statistical term from the paper, but to be safe I'll phrase as "model-implied odds ratio exp(B)" and clarify it's a statistical measure from logistic regression, not a betting line.

Let's start writing.

THINK_TRACE: Deep derivation.
- Start with the generative process: clubs/supporters choose subjects based on motivations (sympathy, heritage marketing, loyalty, locality, identity, nostalgia).
- Operationalize as binary outcome Y_i = 1 if statue present at primary club ballpark/stadia.
- Sample: elite performers only (FL100 N=100 soccer; MLB HOF N=202 baseball after exclusions). This creates range restriction (all are already high performance).
- Predictors grouped by propositions P1-P9.
- Piecewise selection: run separate regressions per proposition subset, retain significant, then combine, drop non-significant. This is a forward-stepwise-like procedure within proposition blocks.
- Logistic link: logit(p_i) = ln(p_i/(1-p_i)) = β0 + Σβ_j x_ij.
- Interpretation: one-unit increase in x_j multiplies odds by exp(β_j).
- Soccer optimal model (Table 1a [PAGE 18]): control (number of legends at club, β=-0.264), top-3 goalscorer (β=1.457, OR=4.291), 1966 World Cup honor (β=3.059, OR=21.304), loyalty % appearances (β=0.043, OR per 20 points = exp(20*0.043)=2.363), years since midpoint (β=0.142), squared (β=-0.001). Apex at years since midpoint = -0.142/(2*-0.001)=71 years before 2011 => 1940? Wait, let's calculate: career midpoint year m. Years since = 2011 - m. The quadratic in years since midpoint: 0.142*(2011-m) - 0.001*(2011-m)^2. Derivative w.r.t. m: Let y = 2011 - m. f(y) = 0.142 y - 0.001 y^2. df/dy = 0.142 - 0.002 y = 0 => y = 71. So 71 years before 2011 = 1940. But the text says apex at 1954. Hmm, maybe they parameterize differently? Let's read: "The curvilinear playing era effect was maximized when a player's career mid point was 1954 (main effect: B = 0.142, p < 0.05; squared effect: B = -0.001, p < 0.05)." If years since midpoint = 2011 - midpoint. At midpoint 1954, years since = 57. Plug derivative: 0.142 - 2*0.001*57 = 0.142 - 0.114 = 0.028 > 0, not zero. Maybe they mean the quadratic is in terms of midpoint year directly? Or maybe years since career midpoint is coded differently? The text says "This variable was transformed into years since career midpoint by subtracting from 2011." So x = 2011 - midpoint. Then squared effect. If apex at midpoint 1954, x=57. For a quadratic ax + bx^2 with a=0.142, b=-0.001, apex at x = -a/(2b) = -0.142/(2*-0.001) = 71. That corresponds to midpoint 1940. There's a discrepancy. But I should report what the paper says (apex 1954) and note the mathematical parameterization as stated, perhaps pointing out the gray zone: the exact apex depends on whether the quadratic is entered in years-since or midpoint-year and the centering; the paper reports 1954 for soccer and 1963 for baseball. For baseball: B=0.194, squared=-0.002. Apex in years since = -0.194/(2*-0.002)=48.5 years before 2011 => 1962.5, close to 1963. So for baseball it matches. For soccer, if apex is 1954, years since=57. Then -0.142/(2*-0.001)=71, not 57. Maybe the soccer main effect is different? The table says B=0.142 and squared=-0.001. If apex is 1954, years since=57, derivative zero would require 0.142 - 0.002*57 = 0.028, not zero. So there's an internal inconsistency or the variable is mean-centered before squaring. This is a gray zone/audit point worth noting: the reported apex (1954) may imply centering or a different scaling than the raw coefficients suggest; the baseball coefficients are internally consistent with apex ~1963, but the soccer coefficients as printed imply an apex near 1940 unless the predictor was centered. I should mention this as a breakdown/singularity regime: mis-specified centering of quadratic terms shifts the estimated nostalgia window and thus predictions for boundary eras.

Gray zones:
- Range restriction: sample is HOF/FL100 only, so performance variance is truncated; club success effect weakened because all clubs in sample are relatively successful [PAGE 26].
- Small sample / rare events: only 7 England 1966 players in sample; perfect-ish separation for Yankees/Orioles dummies leading to huge coefficients (Yankees B=-7.169, OR=0.001) [PAGE 21]. This is near-singularity: the control dummies absorb franchise-specific commemoration protocols, effectively vetoing Yankees/Orioles players from the model's baseline.
- Misclassification: Table 1b/2b show high-probability non-statues and low-probability statues; driven by online campaigns, busts, multi-subject statues, X-factor [PAGE 18-19, 22].
- Temporal non-stationarity: the era effect is a moving window tied to living memory (~30-40 years from statue boom); apex shifts forward, so model fitted on 2011 data mispredicts future subjects [PAGE 24].
- Multi-subject statues: subjects included to complete a scene violate individual-credential assumptions [PAGE 13 footnote 4, PAGE 28].
- Omitted variable: charisma/style/X-factor not quantified [PAGE 28-29].

SOURCE_OPERATORS_AND_EQUATIONS: Write formal LaTeX.

Equation (1) from [PAGE 15]:
\[
\operatorname{logit}(p_i) = \ln\left(\frac{p_i}{1-p_i}\right) = \beta_0 + \sum_{j=1}^{J} \beta_j x_{ij}
\]
where p_i = Pr(Y_i=1 | X_i), Y_i ∈ {0,1} statue presence at primary club's stadium/ballpark. Odds ratio for x_j: OR_j = exp(β_j). Units: p dimensionless [0,1]; x_j in years, proportion (0–100 or 0–1), counts (All-Star selections), dummy {0,1}, log(years) for ballpark age.

Soccer optimal model (Table 1a [PAGE 18]):
\[
\ln\frac{p}{1-p} = \beta_0 -0.264 C_{\text{legends}} + 1.457 I_{\text{top3}} + 3.059 I_{\text{1966WC}} + 0.043 L + 0.142 Y - 0.001 Y^2
\]
where L = % appearances for primary club (0–100), Y = 2011 − career midpoint year. OR per +20 loyalty points: exp(20×0.043) ≈ 2.363. N=100.

Baseball optimal model (Table 2a [PAGE 21]):
\[
\ln\frac{p}{1-p} = \beta_0 -0.009 C_{\text{HOF}} -7.169 I_{\text{Yankees}} -4.480 I_{\text{Orioles}} + 0.224 I_{\text{Cardinals}} + 0.281 A_{\text{AllStar}} + 0.194 Y -0.002 Y^2 + 0.272 T_{\text{career}} + 0.070 L -1.080 \ln(A_{\text{ballpark}}) + 3.729 I_{\text{sameCity}}
\]
OR for franchise not moved vs moved: exp(3.729) ≈ 41.657. OR per career year: exp(0.272) ≈ 1.313. OR per All-Star: exp(0.281) ≈ 1.325. Ballpark age OR: exp(-1.080) ≈ 0.340 per log-year. N=202.

Breakdown/singularity regimes:
- Complete/quasi-complete separation: Yankees dummy β=-7.169 (OR≈0.001, CI 0.000–0.030) implies near-zero baseline odds for Yankees players relative to reference once franchise protocol controlled; Orioles β=-4.480 (OR≈0.011). This is not a betting line but a statistical separation regime where the control perfectly or nearly perfectly predicts absence/presence conditional on other covariates [PAGE 21].
- Range restriction: Spearman's ρ > 0.85 among club success metrics forced dropping two of three [PAGE 14]; range-restricted club success nullified P3 [PAGE 26].
- Era quadratic centering ambiguity: soccer apex reported 1954 but raw coefficients imply vertex at Y≈71 (midpoint≈1940) unless mean-centered; baseball apex Y≈48.5 (midpoint≈1962.5) consistent with reported 1963 [PAGE 20]. Mis-centering breaks extrapolation to pre-WWII or post-2000 careers.
- Small-cell bias: 7/100 soccer legends are 1966 World Cup members; OR=21.304 with wide CI (2.344–93.608) [PAGE 18].

RETROCAUSAL_GENEALOGY:
- Lineage: Osmond et al. (2006) [PAGE 3] on statues as social memory; Russell (2006) [PAGE 3] grammar of mourning; Cialdini et al. (1976) BIRGing [PAGE 4]; Holt (2006) myth markets [PAGE 4]; Seifried & Meyer (2010) heritage marketing [PAGE 4]; Camden Yards 1992 watershed [PAGE 4]; Tuan (1974) topophilia [PAGE 8]; Bale (1994) stadium as home [PAGE 8]; Bosman ruling 1995 / contract freedom [PAGE 6, 26]; Football League 100 Legends (1998) [PAGE 10]; MLB HOF est. 1936 [PAGE 10].
- Multi-week traps: (1) Nostalgia window trap: the era effect is not fixed to 1950s–60s intrinsically but to a ~30–40 year lag from the 1990s statue boom [PAGE 24]; evaluating a static model across weeks/season without updating the apex commits a retrospective trap. (2) Franchise exhaustion trap: baseball franchises exhausting 1950s–60s candidates move forward to near-contemporary players, creating "future nostalgia" [PAGE 24]; a model fitted in week 1 will under-predict recent players in week 10 if it assumes a fixed apex. (3) Pre-WWII marooning trap: early pioneers fall beyond living/televisual memory and are unlikely to be selected regardless of credentials [PAGE 24].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: When a club faces identity disruption (new stadium, relocation, stadium McDonaldisation [PAGE 8]), it regresses to safe, legible subjects: one-club loyal men, deceased legends, trophied winners—because these minimize supporter backlash and maximize BIRGing [PAGE 4]. This is a habit regression to high-familiarity, low-risk nostalgia objects.
- Counter-trap: Fan-led projects bypass club branding calculus. Ron Knuszka's Ivor Allchurch statue at Swansea's Liberty Stadium [PAGE 8] explicitly frames the statue as carrying history into a new ground; supporter trusts at less wealthy clubs erect subjects beyond televisual memory (Steve Bloomer, Fred Keenor [PAGE 25]). The counter-trap defeats the club-level P8/P9 logic because the initiator is not the club.
- Clock: The 30–40 year nostalgia clock means the optimal era is a moving boundary condition. A recursive theory of mind must model supporters modeling other supporters' memories: a statue of a 1970s player becomes thinkable only once enough supporters have aged into nostalgic consumption. The model's fixed quadratic [PAGE 20] treats the clock as static; a recursive model would let β_era(t) drift with t.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer veto: Statue requires physical space at ballpark/stadia and structural siting; English soccer stadia in inner city are older and space-constrained; new out-of-town grounds lack distinguishing features until fan campaigns add statues [PAGE 27]. Baseball retro ballparks (Houston, Detroit) sometimes include statues in the architect's package [PAGE 27].
- Biomechanical/sculptural veto: Multi-subject "scene" statues (e.g., England 1966 Champions statue [PAGE 13 footnote 4]) include players like Ray Wilson who never played for the host club; individual selection model vetoes them because they are compositional filler, not primary-club subjects [PAGE 28]. Pose and recognizability matter.
- Weather/environment layer: Soccer matches are 90 minutes often in inclement weather; baseball is ~4-hour summer game enabling secondary revenue and heritage environment investment [PAGE 25]. This makes built-heritage statues more congruent with baseball's revenue logic than soccer's, partially explaining lower soccer statue counts [PAGE 25].
- Veto proof (non-negotiable): Franchise relocation veto—players whose franchise moved cities post-career have OR multiplier exp(3.729)⁻¹ ≈ 0.024 (i.e., ~41x lower odds) unless fan-funded exception (Warren Spahn [PAGE 27]). Jackie Robinson has six US/Canada statues but none at an MLB ballpark because Brooklyn→LA [PAGE 27]. This is a structural veto overriding performance and loyalty.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Scenario 1: Relocation veto. Counterfactual: Take a Hall of Famer with high All-Star count and 100% loyalty whose primary franchise relocated after his career (e.g., Brooklyn/Los Angeles Dodgers pre-move player). The model's I_sameCity=0 switches the franchise term from +3.729 to 0 (or rather the moved category vs same city). Prediction: Predicted probability of a statue at the current franchise ballpark collapses by factor ≈1/41.657 ≈ 0.024 relative to an identical player at a non-moved franchise, ceteris paribus. Verifiable: Compare statue counts at franchises that moved (Dodgers, Giants, Braves, Athletics, etc.) vs stable franchises, controlling for HOF representation [PAGE 9, 20-21].
Scenario 2: Nostalgia window veto. Counterfactual: A pre-WWII Hall of Famer (career midpoint ≤1930) with top-tier stats but outside living memory. The quadratic era term drives Y large, making 0.194Y − 0.002Y² negative and large. Prediction: Probability approaches zero even for elite performance; e.g., Tris Speaker, Nap Lajoie, Sam Crawford remain without stadium statues despite credentials [PAGE 24]. Verifiable: Check absence of statues for listed pre-WWII players at current MLB ballparks [PAGE 24].
Scenario 3: Multi-subject compositional veto. Counterfactual: A player depicted only in a multi-subject scene commemorating an event, not as a primary-club individual (e.g., Ray Wilson in West Ham's Champions statue though he played for Huddersfield/Everton [PAGE 13 footnote 4]). The individual-level model (which requires primary-club affiliation and codes Y_i=1 only for subject-specific statues at primary club) vetoes inclusion. Prediction: Such players will be systematically misclassified as non-statues or excluded from the analysis sample; their presence is uncorrelated with personal performance/loyalty metrics. Verifiable: Footnote 4 explicitly excludes Ray Wilson [PAGE 13]; Table 2c misclassifications include multisubject statue participants [PAGE 28].

I should also ensure no betting lines. I will not mention spreads/totals/moneylines. I'll avoid using "odds" alone without qualification; I'll say "statistical odds ratio".

Word count check: I need >=1000 words. Let's aim for roughly 200-300 words per section across 6 sections = 1200-1800 words. I'll write generously.

Let's write it out.

Need to ensure XML sections are exactly as named. No extra text outside? The user didn't say only XML, but likely expects just the sections. I'll output only the XML sections.

Let's draft carefully.

THINK_TRACE:

Word target >=400. I'll write about 500.

SOURCE_OPERATORS_AND_EQUATIONS: Include equations and page citations. About 250-300 words.

RETROCAUSAL_GENEALOGY: About 250 words.

RECURSIVE_THEORY_OF_MIND: About 250 words.

CROSS_LAYER_VETO_ADJUDICATION: About 250 words.

RLVR_COUNTERFACTUAL_VETOES: About 250 words.

Total ~1750 words. Good.

Now, writing style: formal, analytical, no betting.

Double-check verbatim quotes:
- "every TV feature on Charlton Athletic starts with a shot of the statue… every TV interview takes place in front of it… all the club’s brochures feature an image of the statue" [PAGE 3] (actually page 3 in the source text says page 3? Let's check: the Sutherland quote is on page 3? The text shows page number 3 at top? Actually after page 2, the next page marker is 3. The Sutherland quote appears after page 3 header? Let's see: "Steve Sutherland... describes how... (Sutherland, 2011)." This is on page 3. Good.
- "let's not forget amidst all this that this doubles the real estate value of the land around it" [PAGE 4]? The text shows page 4 after page 3. The sculptor quote is on page 4. Yes.
- "We were looking for that X-factor as well as pure achievement" [PAGE 10].
- "Well, kid, you had to be there..." Frank Howard quote [PAGE 29].
- "The years Frank Howard was good..." etc.

I'll include a few verbatim quotes with page citations.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The generative process in Stride et al. (2012) is a club- or supporter-driven selection mechanism: a binary outcome Y_i = 1 if a subject-specific statue of player i exists at the stadium or ballpark of his primary club/franchise, and 0 otherwise. The paper restricts inference to elite samples—100 Football League “Legends” (FL100) [PAGE 10-11] and 202 MLB Hall of Famers after excluding Negro League and non-lineage cases [PAGE 12]—which imposes severe range restriction on performance: every case is already an outlier, so raw performance cannot separate subjects from non-subjects within the sample [PAGE 26]. The model is therefore a conditional selector among the already-elite, not a predictor of elite status itself.

Causal propositions P1–P9 [PAGE 3-9] map motivations to variables: sympathy via early death (P1); personal performance, team success, and club size (P2a–P3); curvilinear nostalgia era (P4); loyalty, longevity, and locality (P5–P6); playing role (P7); stadium age (P8); and franchise location stability (P9). Analysis proceeds piecewise: separate regressions per proposition subset [PAGE 15], retain significant predictors, combine, then drop non-significant terms to reach the optimal models [PAGE 17-20]. This is a hierarchical screening procedure, not a simultaneous causal identification strategy, so omitted-variable bias and post-selection inference are live gray zones.

The soccer optimum [PAGE 18] retains club-legend count as a negative control (more eligible legends at a club reduces any single player’s depiction odds), top-3 club goalscorer status (statistical odds ratio exp(1.457) ≈ 4.29), 1966 World Cup membership (exp(3.059) ≈ 21.3), loyalty as percentage of career appearances at the primary club (exp(0.043) per point; per 20 points ≈ 2.36), and a quadratic in years since career midpoint (Y = 2011 − midpoint), maximized at a reported 1954 midpoint. The baseball optimum [PAGE 20-21] adds franchise-specific controls (Yankees β = −7.169; Orioles β = −4.480; Cardinals β = 0.224), All-Star appearances (exp(0.281) ≈ 1.33 per selection), career length (exp(0.272) ≈ 1.31 per year), loyalty (exp(0.070) per point; per 20 points ≈ 4.06), log ballpark age (exp(−1.080) ≈ 0.34), and a same-city-as-last-appearance dummy (exp(3.729) ≈ 41.66). Classification accuracy is 87% (soccer) and 90.6% (baseball) [PAGE 18, 21], yet misclassification tables reveal systematic error: high-probability non-statues (e.g., Carl Yastrzemski 0.967, Jimmy McIlroy 0.735) and low-probability statues (e.g., George Best 0.058, Honus Wagner 0.057) [PAGE 18-19, 22]. These residuals are driven by charisma/X-factor not captured by statistics [PAGE 28-29], multi-subject “scene” statues that include players for compositional completeness rather than individual credentials [PAGE 13 footnote 4, PAGE 28], fan-led campaigns that bypass club marketing logic [PAGE 8, 25], and the non-stationarity of the nostalgia window: the apex era is fixed relative to the 1990s statue boom (~30–40 years of lived memory), so the model’s era coefficients will drift as time passes [PAGE 24].

Audit flags: (i) the soccer quadratic coefficients as printed (β = 0.142, β² = −0.001) imply a vertex at Y ≈ 71 years (midpoint ≈ 1940), yet the text reports 1954, suggesting mean-centering or rescaling not fully disclosed—this breaks extrapolation to pre-WWII or post-2000 careers; (ii) the Yankees/Orioles dummies exhibit near-complete separation (OR ≈ 0.001 and 0.011), absorbing franchise commemoration protocols and producing extreme coefficients [PAGE 21]; (iii) club-success variables were dropped due to Spearman’s ρ > 0.85 multicollinearity [PAGE 14], weakening P3; (iv) small-cell inference for the seven 1966 World Cup players yields a wide confidence interval (2.344–93.608) [PAGE 18]. All references to “odds” below denote statistical odds ratios from logistic regression, not wagering lines, spreads, totals, or moneylines.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Binary outcome and logistic link, equation (1) [PAGE 15]:
\[
\operatorname{logit}(p_i) \equiv \ln\!\left(\frac{p_i}{1-p_i}\right)
= \beta_0 + \sum_{j=1}^{J} \beta_j x_{ij}, \qquad
p_i = \Pr(Y_i = 1 \mid \mathbf{x}_i) \in [0,1],
\]
where \(Y_i = 1\) denotes a statue of player \(i\) at the primary club’s stadium/ballpark. A one-unit increase in \(x_j\) multiplies the statistical odds \(\frac{p}{1-p}\) by \(\exp(\beta_j)\); this is a model coefficient, not a betting line.

Unit/measurement register [PAGE 13-14]: career midpoint year \(m \in \mathbb{Z}\); years since midpoint \(Y = 2011 - m \in \mathbb{R}_{+}\); loyalty \(L \in [0,100]\) as percentage of senior appearances at primary club; career length \(T \in \mathbb{R}_{+}\) years; All-Star count \(A \in \mathbb{N}_0\); dummy variables \(D \in \{0,1\}\) for same-city franchise, 1966 World Cup membership, top-3 club goalscorer, Yankees/Orioles/Cardinals; ballpark age entered as \(\ln(\text{age})\) [PAGE 14].

English soccer optimal model, Table 1a [PAGE 18], \(N=100\):
\[
\ln\frac{p}{1-p} =
\beta_0 - 0.264\,C_{\text{legends}} + 1.457\,D_{\text{top3}} + 3.059\,D_{\text{1966WC}}
+ 0.043\,L + 0.142\,Y - 0.001\,Y^{2}.
\]
Statistical odds ratios: \(\exp(1.457) \approx 4.291\) (95% CI 1.154–15.965); \(\exp(3.059) \approx 21.304\) (2.344–93.608); loyalty per 20 points \(\exp(20 \times 0.043) \approx 2.363\). The control \(C_{\text{legends}}\) has \(\beta = -0.264\) (\(\exp \approx 0.768\)). Curvilinear vertex is reported at career midpoint 1954 [PAGE 18]; raw coefficients imply \(Y^{*} = -\frac{0.142}{2(-0.001)} \approx 71\) years before 2011 unless mean-centering was applied—a centering ambiguity that shifts the nostalgia window and breaks boundary-era extrapolation.

US baseball optimal model, Table 2a [PAGE 21], \(N=202\):
\[
\begin{aligned}
\ln\frac{p}{1-p} = {}&
\beta_0 - 0.009\,C_{\text{HOF}} - 7.169\,D_{\text{Yankees}} - 4.480\,D_{\text{Orioles}} + 0.224\,D_{\text{Cardinals}} \\
&+ 0.281\,A + 0.194\,Y - 0.002\,Y^{2} + 0.272\,T + 0.070\,L
- 1.080\,\ln(\text{ballpark age}) + 3.729\,D_{\text{sameCity}} .
\end{aligned}
\]
Statistical odds ratios: franchise not moved vs moved \(\exp(3.729) \approx 41.657\) (3.317–123.136); per career year \(\exp(0.272) \approx 1.313\) (1.090–1.581); per All-Star \(\exp(0.281) \approx 1.325\) (1.129–1.554); ballpark age \(\exp(-1.080) \approx 0.340\) (0.170–0.679) per log-year; Yankees dummy \(\exp(-7.169) \approx 0.001\) (0.000–0.030), Orioles \(\exp(-4.480) \approx 0.011\) (0.000–0.406). The baseball vertex is at \(Y^{*} = -\frac{0.194}{2(-0.002)} \approx 48.5\), i.e. midpoint \(\approx 1962.5\), consistent with the reported 1963 apex [PAGE 20].

Singularity / breakdown regimes: (1) quasi-complete separation for Yankees/Orioles controls, producing near-zero baseline odds and infinite-standard-error risk [PAGE 21]; (2) range restriction because all candidates are HOF/FL100, nullifying club-success effects [PAGE 26]; (3) multicollinearity \(\rho > 0.85\) among club honors, league position, and attendance forced dropping two variables [PAGE 14]; (4) era quadratic non-stationarity: the 30–40 year nostalgia lag from the 1990s boom means the apex is a moving target, so fixed coefficients mispredict future subjects [PAGE 24]; (5) small-cell bias for the seven 1966 World Cup players, wide CI [PAGE 18]. No spreads, totals, moneylines, or wagering odds are used or implied anywhere in this derivation.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Osmond et al. (2006), who frame public athlete statues as “pervasive and influential forms of social memory” [PAGE 3]. Russell (2006) supplies the “grammar of mourning” and sympathy mechanism for recently deceased players [PAGE 3]; Cialdini et al. (1976) and Heider (1958) underpin basking in reflected glory (BIRGing) [PAGE 4]; Holt (2006) and Seifried & Meyer (2010) supply brand myth markets and heritage-based marketing through facilities [PAGE 4]; Camden Yards (1992) is identified as the watershed that made retro-styled, heritage-referencing ballparks commercially legible [PAGE 4]. Tuan (1974) and Bale (1994) ground the “desire for identity and sense of place” in stadium attachment and the ground as home [PAGE 8]. The Bosman ruling and the end of maximum wages are cited as historical shocks that reduced one-club loyalty and locality in soccer [PAGE 6, 26].

Historical/scientific lineage produces three multi-week traps. First, the nostalgia-window trap: the era effect is not an eternal preference for 1950s–60s players but a ~30–40 year lag from the modern statue boom of the 1990s [PAGE 24]. A model fitted in 2011 treats 1954 (soccer) and 1963 (baseball) as fixed apices; evaluated weeks or months later without time-varying coefficients, it systematically under-weights 1970s–1990s careers as they enter living memory and over-weights pre-WWII careers that are already marooned beyond televisual memory [PAGE 24]. Second, the franchise-exhaustion trap: baseball clubs that have depicted all suitable 1950s–60s candidates move forward in time to near-contemporary players, generating “future nostalgia” for younger fans [PAGE 24]. A static model commits a retrospective trap by assuming the same optimum era applies across expansion franchises with different statue inventory histories. Third, the pioneer-marooning trap: pre-WWII figures such as Tris Speaker, Nap Lajoie, Sam Crawford, Charles Buchan, Bob Crompton, and Billy Bassett possess loyalty and performance credentials yet fall outside the nostalgia window and are unlikely to be selected in greater numbers regardless of model covariates [PAGE 24]. These traps are retrocausal because the present-day statue boom (the 1990s–2010s) reaches backward to select subjects whose careers maximize nostalgic distance, not because those eras were intrinsically more statue-worthy.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression occurs when a club experiences identity disruption—new stadium construction, relocation, or the “McDonaldisation” of grounds after safety-driven redevelopment [PAGE 8-9]. Under such stress, the club regresses to a safe, high-familiarity subject set: one-club loyal men, deceased legends, and trophy-winning players. These choices minimize supporter backlash and maximize BIRGing because they rest on already-legible narratives rather than contested contemporary assessments [PAGE 4]. The loyalty effect (P5) is precisely this regression: supporters prize the player who rejected rival offers, especially after contract liberalization made such loyalty rarer [PAGE 6, 26].

The counter-trap is fan-initiated commemoration, which bypasses club branding calculus entirely. Ron Knuszka’s Ivor Allchurch project at Swansea’s Liberty Stadium was explicitly framed as carrying history into a new ground after relocation [PAGE 8]; supporter trusts at less wealthy clubs erect statues of subjects beyond televisual memory, such as Steve Bloomer at Derby County and the commissioned Fred Keenor at Cardiff City [PAGE 25]. Because the initiator is a supporter group rather than the club, P8 (new stadium increases selection probability) and P9 (franchise location stability) are systematically violated: fan-funded statues can appear at recently built or relocated grounds and honor players from defunct local incarnations. Warren Spahn’s fan-funded Atlanta Braves statue—honoring a Boston/Milwaukee pitcher at the Atlanta ballpark—is the canonical baseball exception [PAGE 27].

The clock is the non-stationary nostalgia boundary: a recursive theory of mind must model supporters modeling other supporters’ memories. A statue of a 1970s player becomes thinkable only once a sufficient cohort has aged into nostalgic consumption; before that threshold, even a statistically qualified player receives low predicted probability because the fixed quadratic era term assigns low weight to that midpoint [PAGE 20-21]. The paper’s optimal models treat the clock as exogenous and fixed at 2011; a recursive model would let \(\beta_{\text{era}}(t)\) drift with calendar time and allow fan campaigns to shift the social acceptability of otherwise low-credential subjects (e.g., George Best’s charisma overcoming weak club and era statistics [PAGE 29]).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: statue subject selection is vetoed by stadium siting, available space, and structural capacity. English inner-city grounds are older and space-constrained; post-1990 out-of-town stadia lack distinguishing features until fan campaigns add external decoration [PAGE 27]. Baseball’s retro ballparks sometimes integrate statues into the architect’s package (e.g., Houston, Detroit), whereas English clubs have not generally followed this trans-Atlantic design policy [PAGE 27]. Absence of physical space is a hard veto independent of any statistical predictor.

Biomechanical/sculptural layer: multi-subject “scene” statues override individual-credential logic. The England 1966 “Champions” statue at West Ham includes Ray Wilson, who never played for West Ham; he was included only to complete a famous celebration scene and is explicitly excluded from the analysis [PAGE 13 footnote 4]. Multi-subject statues are “club specific rather than subject specific monuments,” producing outliers whose depiction is uncorrelated with personal performance, loyalty, or locality [PAGE 28]. Pose recognizability and compositional completeness therefore veto the individual-level model.

Weather/environmental layer: soccer’s ~90-minute matches are often played in inclement weather, making secondary revenue and heritage-environment investment less obvious than in baseball’s ~4-hour summer ballpark experience [PAGE 25]. This partially explains the lower density of English soccer statues (33 players across 32 stadia) versus MLB (67 players across 30 ballparks) [PAGE 2]. The built-heritage marketing rationale is thus weaker in soccer, vetoing club-initiated statue projects even when a player meets statistical criteria.

Veto proof (structural, non-negotiable): franchise relocation. Players whose primary franchise moved cities after their careers have odds multiplied by \(\exp(-3.729) \approx 0.024\), i.e. roughly 41-fold lower odds than players at stable franchises [PAGE 21]. Jackie Robinson has six statues across the US and Canada but none at an MLB ballpark because the Brooklyn Dodgers moved to Los Angeles [PAGE 27]. This relocation veto overrides performance, All-Star count, and loyalty unless a fan-funded exception intervenes (Warren Spahn) [PAGE 27]. It is a binding institutional constraint, not a probabilistic soft factor.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Relocation veto (verifiable via franchise geography). Counterfactual: two Hall of Famers identical in All-Star count, career length, loyalty (100%), and era midpoint, but Player A’s primary franchise remained in the same city while Player B’s franchise relocated after B’s last appearance. Setting \(D_{\text{sameCity}} = 0\) for B removes the \(+\exp(3.729) \approx 41.657\) multiplier [PAGE 21]. Prediction: B’s predicted probability of a statue at the current franchise ballpark collapses by a factor of roughly \(1/41.657 \approx 0.024\) relative to A, ceteris paribus; B should appear in misclassification tables as a low-probability statue subject or a high-probability non-subject depending on observed outcome. Verification: compare statue prevalence at moved franchises (Dodgers, Giants, Braves, Athletics, etc.) versus stable franchises, controlling for HOF representation [PAGE 9, 20-21].

Scenario 2 — Nostalgia-window veto (verifiable via pre-WWII absence). Counterfactual: a pre-WWII Hall of Famer with elite career statistics (career midpoint \(\le 1930\), so \(Y \ge 81\)). In the baseball model, the era terms \(0.194Y - 0.002Y^2\) become strongly negative for large \(Y\), driving log-odds downward regardless of All-Star count or loyalty [PAGE 20]. Prediction: predicted probability approaches zero even for elite performance; such players should be absent from current MLB ballpark statues despite Hall of Fame credentials. Verification: the paper explicitly names Tris Speaker, Nap Lajoie, and Sam Crawford as pre-WWII players “marooned beyond living (and televisual) memory” and unlikely to be selected [PAGE 24]; confirm absence of stadium statues for these players at current MLB ballparks.

Scenario 3 — Multi-subject compositional veto (verifiable via footnote and misclassification). Counterfactual: a player depicted solely in a multi-subject commemorative scene at a club where he never played as primary subject (e.g., Ray Wilson in West Ham’s “Champions” statue, although he played for Huddersfield Town and Everton [PAGE 13 footnote 4]). The individual-selection model requires \(Y_i = 1\) only for subject-specific statues at the primary club; compositional filler is excluded from the analysis sample. Prediction: such players will be systematically excluded or misclassified, with predicted probabilities uncorrelated with personal performance or loyalty metrics. Verification: footnote 4 explicitly excludes Wilson [PAGE 13]; Table 2c discussion notes that five misclassified non-HOF baseball players are united by presence in multi-subject statues [PAGE 28].

Each scenario produces a falsifiable directional prediction about statue presence/absence at the primary club’s facility, derived from the model’s coefficients and structural controls, with no reference to betting lines, spreads, totals, or moneylines.
</RLVR_COUNTERFACTUAL_VETOES>