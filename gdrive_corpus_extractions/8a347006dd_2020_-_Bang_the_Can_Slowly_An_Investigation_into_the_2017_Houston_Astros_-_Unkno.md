---
source: "2020 - Bang the Can Slowly An Investigation into the 2017 Houston Astros - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Carnegie Mellon Sports Analytics Conference/2020"
pages: 28
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6143
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about the 2017 Houston Astros sign-stealing scandal. They've provided the full text of a 28-page paper "Bang the Can Slowly: An Investigation into the 2017 Houston Astros" by Ryan Elmore and Gregory J. Matthews.

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. (Wait - "odds ratio" is in the paper, but betting odds are different. I should avoid betting terminology like spreads/totals/moneylines. Odds ratios are statistical, not betting lines, but I should be careful not to frame them as betting odds.)
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "ZERO BETTING LINES" and "ZERO TOY EQUATIONS". The paper discusses odds ratios, which are statistical odds ratios, not betting lines. I can mention statistical odds ratios (OR) as they appear in the paper, but I must not mention betting spreads, totals, moneylines, or betting odds. I need to be careful about the word "odds" - statistical odds ratios are fine since they're in the source, but I shouldn't present them as betting lines.

Let me structure this carefully.

First, let me understand the paper:
- 2017 Houston Astros sign stealing scandal
- Used camera in center field, bang on trash can to signal off-speed pitch
- Data: Statcast, Pitch Info, Bangs data (Tony Adams)
- n = 8274 original, n = 8201 after cleaning [PAGE 7]
- Three GLMM models:
  1. Swing model: logit link, binary response swinging. Covariates: bang indicator, pitch type (fastball/not), CSP, pitch count factor, random slope per batter [PAGE 11-12]
     - Bang coefficient: -0.3219 (95% CI: -0.482, -0.163), p = 7.59 × 10^-5 [PAGE 13]
     - OR: 0.725 (95% CI: 0.618, 0.850) - ~27.5% reduction in odds of swinging [PAGE 13]
     - Table 3 [PAGE 25]
  2. Contact model: Given swing, binary contact. Logit link. Covariates: CSP, fastball indicator, bang indicator, fastball*bang interaction. Random intercepts pitcher/batter, random slope for bangs for batter [PAGE 12]
     - n = 3725 observations [PAGE 15]
     - Off-speed: bang effect 0.591 (95% CI: 0.294, 0.984), OR 1.805 (bootstrapped 95% CI: 1.342, 2.675) [PAGE 15]
     - Fastball: bang coeff -0.603, OR 0.547 (bootstrapped 95% CI: 0.227, 1.774), not significant [PAGE 16]
     - Table 4 [PAGE 26]
     - Player-specific ORs in Table 5 [PAGE 27], Springer OR 3.810 (2.042, 12.864) [PAGE 16-17]
  3. Exit velocity model: Continuous EV, identity link, linear mixed effects. Covariates: CSP, fastball indicator, bang indicator. Random intercepts pitcher/batter [PAGE 13]
     - n = 2272 observations [PAGE 17]
     - Bang coefficient: 2.386 mph (95% CI: 0.334, 4.451) [PAGE 17-18]
     - Physics: 100 mph at 30° = 385.3 ft; 102.386 mph at 30° = 397.9 ft, +12.6 ft [PAGE 20]
     - Table 6 [PAGE 28]

Important caveats/gray zones:
- Bangs data only covers subset of home games [PAGE 6]
- Absence of bang inconclusive (could be fastball or undecoded sign) [PAGE 4]
- Bang prevalence by pitch type: off-speed 23.7-27.6%, fastball only 2.3% [PAGE 7]
- Chi-square p < 2.2 × 10^-16 [PAGE 7]
- Table 2 raw association: swing 40.5% with bang vs 46.2% without, OR 0.793 [PAGE 10]
- Player variability: 10 of 20 players not significant for contact [PAGE 16]
- Lindbergh (2019) found little evidence overall [PAGE 5]
- Confounding factors acknowledged [PAGE 10, 20-21]

Now I need to write the response with the exact XML sections.

Let me plan each section:

<THINK_TRACE> (>=400 words)
- Deep multi-hop derivation: Chain from bang presence -> pitch expectation -> swing suppression -> contact enhancement -> exit velocity boost -> physical distance -> game outcome.
- Gray-zone audit: selection bias in Bangs data (subset of home games, audio detection limits), inconclusive absence of bang, pitch classification reliance on Pitch Info over Statcast, CSP as covariate, player heterogeneity, multiple comparisons across 20 players, temporal deployment curve (Figure 1), possible placebo/ Hawthorne effects, alternative explanations (Lindbergh 2019), endogeneity of swing decision (batters may not swing at pitches they know are bad), the "mistake" bang on fastballs creating negative contact effect.
- Cite pages.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX equations for the three GLMMs.
- Units: mph for exit velocity, feet for distance, probability units, log-odds.
- Page citations for every coefficient.
- Breakdown/singularity regimes: when contact model restricted to swingers (n=3725), when EV restricted to contact+launch speed (n=2272), when bang absent is uninformative, small cell counts for some players.
- No toy equations. Use real equations from paper: η = Xβ + Zb, logit(π), etc.

<RETROCAUSAL_GENEALOGY>
- Historical lineage: sign stealing in baseball (manual vs electronic), 2017 season, Mike Fiers whistleblower 2019, MLB penalties (suspensions, $5M fine, draft picks) [PAGE 4].
- Precedents: Red Sox/Alex Cora [PAGE 4 footnote], prior analytics (Sawchik 2019, Stark & Sarris 2020, Arthur 2019, Lindbergh 2019) [PAGE 5].
- Multi-week traps: monthly bang proportion increase through first five months, drop in September [PAGE 7]; intraseason implementation May 19th [PAGE 5]; 2017 vs 2018 career highs for Springer [PAGE 16-17]; 2019 regression after scandal broke [PAGE 16-17].

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: How players/betters (not betting, but teams/analysts) regress under crisis; batter expectations vs sign-thief expectations; fastball vs off-speed mismatch.
- Counter-trap: If opponent knows Astros are stealing signs, they can pitch accordingly (e.g., throw fastballs when bang expected, or use dummy signs), creating a second-order deception layer.
- Clock: Game-state clock (pitch count, innings), season clock (May refinement, September drop-off), scandal clock (2019 revelation, 2020 paper publication).
- No betting references.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical: Exit velocity physics (Nathan 2020, trajectory calculator), launch angle 30°, 100 vs 102.386 mph, 385.3 vs 397.9 feet, Fenway Park center field 389'9" [PAGE 20].
- Biomechanical: Swing decision timing, contact mechanics, swing-and-miss rates (Springer 32.63% vs 5%) [PAGE 17].
- Weather: Not explicitly in paper - I should note absence of weather covariates as a limitation/veto layer, or discuss how weather isn't modeled but could be a confounder (though indoor/dome games minimal for Astros? Minute Maid has roof). Actually, the paper doesn't model weather, so I can note this as an unadjudicated veto layer or discuss it as outside scope.
- Veto proof: What would falsify the claims? If bangs were random, effects would vanish; if pitch classification wrong, interaction term collapses; if CSP absorbs bang information, coefficient attenuates.

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) counterfactual veto scenarios + predictions. RLVR likely means some kind of verifiable counterfactual. I'll interpret as verifiable counterfactual veto scenarios—situations where the model's causal claim would be vetoed/falsified.
- Scenario 1: Pitches with bangs that are actually fastballs (sign-stealer error). Paper notes this yields OR 0.547 (not significant) for contact on fastballs [PAGE 16]. Veto: If contact rate on "bang+fastball" matches or exceeds no-bang fastballs, the information-value mechanism is falsified. Prediction: contact suppression or no improvement.
- Scenario 2: Games without bangs data / away games where no center-field camera scheme exists. Veto: If home/away performance differential disappears in 2018-2019 after scheme dismantled, supports causal role. Prediction: effects attenuate to null post-scandal.
- Scenario 3: Batters who opt out/not prefer bangs (Altuve, Reddick) [PAGE 7]. Veto: If players who avoid bangs show no contact improvement despite bangs, the batter-specific compliance mechanism is required; absence of effect in non-preference players would veto a universal team effect. Prediction: heterogeneous treatment effects align with player preference.
- Or a counterfactual where CSP is permuted: if shuffling CSP labels removes significance, CSP is doing the work not bangs.
- Need predictions for each.

Word count: Must be >= 1000 words total across sections. THINK_TRACE >= 400 words.

Let me make sure I don't mention betting lines. I will not use "spread," "total," "moneyline," or betting "odds." I will use "odds ratio" only in the statistical sense as it appears in the paper, but maybe I should clarify it's statistical, not wagering. Actually, to be safe, I can refer to them as "statistical odds ratios" or just "OR" and describe as multiplicative change in odds (probability-based), not betting odds.

Let me draft carefully.

THINK_TRACE: I'll write about 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal equations. I'll write:
- General GLMM: η = Xβ + Zb [PAGE 11]
- Swing model: logit(π_ij) = ... with covariates [PAGE 11-12]
- Contact model: logit(π_ij) = β0 + β1 CSP + β2 I{FA} + β3 I{Bang} + β4 I{FA}*I{Bang} + random effects [PAGE 12]
- Exit velocity: Y_ij = β0 + β1 CSP + β2 I{FA} + β3 I{Bang} + u_pitcher + u_batter + ε [PAGE 13]
- Coefficient values with CIs and pages.
- Units: mph, feet, dimensionless probabilities/logits.
- Breakdown regimes: n reductions (8201 -> 3725 -> 2272), sparse player cells, bang absence uninformative, CI containing 1.

RETROCAUSAL_GENEALOGY: 200-300 words.

RECURSIVE_THEORY_OF_MIND: 200-300 words.

CROSS_LAYER_VETO_ADJUDICATION: 200-300 words.

RLVR_COUNTERFACTUAL_VETOES: 200-300 words with 3 scenarios.

Total should be well over 1000 words.

Let me write now, being precise with page citations and verbatim quotes where appropriate.

I need to include exact [PAGE N] markers. The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should quote sparingly but cite every major claim.

Let me draft the content.

Section 1: THINK_TRACE

I'll discuss the causal chain:
1. Bang presence encodes off-speed pitch (Table 1, p<2.2e-16) [PAGE 7].
2. Batters suppress swings on bangs because they know off-speed is harder to hit or they wait for favorable counts? Actually paper says they swing less (OR 0.725) [PAGE 13]. Why? If they know off-speed, they might be more selective, or they might take pitches they think are balls. Verducci says fastballs easier to hit [PAGE 14].
3. When they do swing on off-speed with bang, contact increases 80% [PAGE 15].
4. Exit velocity increases 2.386 mph [PAGE 17-18], translating to +12.6 ft [PAGE 20].

Gray zones:
- Bangs data only subset of home games [PAGE 6].
- No bang is inconclusive [PAGE 4].
- Audio detection false negatives/positives.
- Pitch Info vs Statcast classification [PAGE 6].
- Player heterogeneity (Table 5) [PAGE 27].
- Multiple testing across 20 players.
- Temporal confounding (team got better anyway).
- Selection into swing model (only pitches in dataset).
- Post-selection inference.

I'll write this in a flowing multi-hop derivation.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS

Formal LaTeX. Units. Page citations.

I need to be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I will only use equations actually in or directly implied by the paper.

Equation (1): η = Xβ + Zb [PAGE 11].
Swing model link: logit(π_ij) = log(π_ij / (1 - π_ij)) [PAGE 11-12].
Covariates: bang indicator, fastball indicator, CSP, pitch count factor, random slope per batter [PAGE 11-12].
Estimate: β_bang = -0.3219, 95% CI (-0.482, -0.163), p = 7.59 × 10^-5 [PAGE 13].
OR = exp(-0.3219) = 0.725, CI (0.618, 0.850) [PAGE 13].
Interpretation: ~27.5% reduction in odds of swinging [PAGE 13].

Contact model: given swing, n=3725 [PAGE 15].
logit(π_ij) = β0 + β1 CSP + β2 I{FA} + β3 I{Bang} + β4 (I{FA} × I{Bang}) + random intercepts (pitcher, batter) + random slope bang for batter [PAGE 12].
Off-speed: β3 = 0.591 (95% CI: 0.294, 0.984), OR = 1.805, bootstrapped CI (1.342, 2.675) [PAGE 15].
Fastball: β3 + β4 = -0.603, OR = 0.547, bootstrapped CI (0.227, 1.774), not significant [PAGE 16].
Springer player-specific OR = 3.810 (2.042, 12.864) [PAGE 16-17, Table 5 PAGE 27].

Exit velocity model: n=2272 [PAGE 17].
Y_ij = β0 + β1 CSP + β2 I{FA} + β3 I{Bang} + u_pitcher + u_batter + ε_ij, identity link [PAGE 13].
β3 = 2.386 mph, 95% CI (0.334, 4.451), p = 0.0230 [PAGE 17-18, Table 6 PAGE 28].
Physics: Δd ≈ 12.6 feet for Δv = 2.386 mph at 30° launch angle [PAGE 20].

Breakdown/singularity:
- Contact model conditions on Y_swing=1, truncating sample [PAGE 15].
- EV model conditions on contact and recorded launch speed, n drops to 2272 [PAGE 17].
- Bang=0 is uninformative (could be FA or undecoded) [PAGE 4].
- Player-level cells sparse; 10/20 players CI contains 1 [PAGE 16].
- Small sample for fastball+bang interaction leads wide CI crossing 1 [PAGE 16].

Section 3: RETROCAUSAL_GENEALOGY

Historical lineage: sign stealing is old (manual, runner on second base). Electronic sign stealing in 2017 via center field camera and trash can [PAGE 3-4]. Mike Fiers disclosure 2019 [PAGE 3]. MLB penalties: Hinch/Lunhow suspended 1 year, $5M fine, loss of 2020/2021 first/second round picks [PAGE 4]. Red Sox/Alex Cora connection [PAGE 4 footnote].

Prior literature conflict: Sawchik (2019) strikeout decrease; Stark & Sarris (2020) home/away splits, slugging increases; Arthur (2019) intraseason break after May 19; Lindbergh (2019) little overall evidence [PAGE 5]. This paper attempts to resolve ambiguity [PAGE 5].

Multi-week traps: Monthly bang proportion rises through first five months, drops September [PAGE 7, Figure 1 PAGE 8]. Suggests learning/refinement curve and possible end-of-season caution. Intraseason implementation around May 19 [PAGE 5]. Springer career contact % peaks 2017/2018 (78.7/78.5%), swinging strike career lows same years, 2019 rebounds [PAGE 16-17]. This creates a temporal fingerprint: treatment onset, persistence during scandal window, regression after exposure.

Section 4: RECURSIVE_THEORY_OF_MIND

This is about strategic reasoning layers.
Layer 0: Batter doesn't know pitch; pitcher exploits uncertainty.
Layer 1: Astros know pitch via bang; batter adjusts swing/contact.
Layer 2: Opponent infers sign stealing; can counter by throwing unexpected pitch type (fastball when bang expected) or using decoy signs. Paper acknowledges bang on fastball is a "mistake" by sign thief and contact drops (OR 0.547) [PAGE 16]. This is a counter-trap: the information is only valuable if the signal is trusted; if opponents poison the signal, bang+fastball becomes a trap.
Layer 3: Batter heterogeneity—some players (Altuve, Reddick) prefer no bang [PAGE 7], suggesting idiosyncratic priors about signal reliability or swing mechanics.
Crisis habit regression: Under scandal pressure (2019 exposure), team-level performance may regress as the scheme is removed; Springer's 2019 rebound in swinging strike rate [PAGE 16-17] suggests habit regression when the informational crutch is removed.
Clock: Season clock (May refinement, September drop-off) [PAGE 7]; game clock (pitch count factors in swing model) [PAGE 11-12]; scandal clock (2017 commission, 2019 exposure, 2020 publication) [PAGE 4, 22].

Section 5: CROSS_LAYER_VETO_ADJUDICATION

Physical veto: Exit velocity claim rests on Nathan (2020) trajectory physics [PAGE 20]. If launch angle distribution differs systematically between bang and no-bang contact, the 12.6 ft gain at fixed 30° may not generalize. The model holds launch angle constant implicitly by modeling EV directly, but EV is a function of swing path and contact point—unmeasured biomechanical confounders could veto.
Biomechanical veto: Swing-and-miss rates for Springer: 32.63% no-bang vs 5% bang on off-speed [PAGE 17]. This is an extreme effect; if measurement error in bang detection (audio spectrogram false positives) is non-random with respect to contact quality, the contact OR is biased. Veto condition: if bang detection sensitivity/specificity < ~90%, the OR 1.805 could be attenuated or manufactured.
Weather veto: The paper includes CSP (called strike probability) but no explicit weather, temperature, humidity, or roof-open/closed covariates for Minute Maid Park [PAGE 6-7]. Since air density affects exit velocity and ball flight, omission of weather is an unadjudicated layer. However, because the comparison is within home games (bangs only occur at home), weather is partially controlled by game fixed effects implicitly? Not modeled. I should note this as a limitation.
Veto proof summary: The causal chain is vetoed if (a) bangs are not actually associated with off-speed pitches (Table 1 refutes this, p<2.2e-16), (b) the bang coefficient vanishes when CSP is interacted or when pitch-count strata are examined, or (c) exit velocity gains disappear when launch angle and spin are included.

Section 6: RLVR_COUNTERFACTUAL_VETOES

Three verifiable counterfactual veto scenarios:

Scenario 1: Fastball betrayal counterfactual.
Setup: Compare contact rate on pitches where bang occurred but pitch was a fastball (sign-stealer error) vs fastballs with no bang.
Paper evidence: OR 0.547 (95% CI: 0.227, 1.774) for contact on fastball+bang [PAGE 16].
Veto rule: If contact on bang+fastball ≥ contact on no-bang fastball, the premise that the batter is preparing for off-speed is falsified; the bang would not systematically induce miss.
Prediction: Contact and swing rates on mis-signed fastballs remain suppressed or unchanged relative to no-bang fastballs because the batter expects off-speed and is fooled.

Scenario 2: Removal-of-treatment counterfactual (post-scandal).
Setup: Compare 2017 home bang-affected plate appearances vs 2018-2019 home plate appearances after electronic system dismantled, for same players.
Veto rule: If off-speed contact advantage and EV boost persist at 2017 magnitudes after scheme removal, the effect is not causally tied to the bang mechanism.
Prediction: Springer's contact % and EV on off-speed swings regress toward career norms (as seen in 2019 swinging strike increase) [PAGE 16-17]; the 2.386 mph EV differential collapses to null.

Scenario 3: Signal-absence incongruence counterfactual.
Setup: Compare plate appearances with no bang where the pitch was off-speed (undetected or withheld signal) vs no-bang fastballs.
Veto rule: If batters perform equally well on no-bang off-speed pitches as on bang off-speed pitches, the bang itself is not the active ingredient; rather, pitch selection or batter quality confounds.
Prediction: No-bang off-speed swings show lower contact and lower EV than bang off-speed swings, because the batter lacks advance information [consistent with Table 2 baseline swing rate 46.2% no-bang vs 40.5% bang, and swing suppression implying selectivity] [PAGE 10, 13].

I should ensure word count. Let me estimate:
THINK_TRACE: ~550 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words.
RETROCAUSAL_GENEALOGY: ~250 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~250 words.
RLVR_COUNTERFACTUAL_VETOES: ~300 words.
Total ~2000 words. Good.

Now I'll write the final response. I must not mention betting lines. I'll avoid all gambling terminology. I'll use "statistical odds ratio" or just "odds ratio (OR)" carefully, noting it's a measure of association, not a wagering line.

Let me check: The user said "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Wait, does "odds" mean I can't say "odds ratio"? That would be difficult because the paper is full of odds ratios. But the invariant says "betting lines" and lists "spreads, totals, moneylines, or odds." In context, "odds" likely means betting odds. However, to be extremely safe, I might avoid the word "odds" entirely when referring to the statistical measure, or qualify it as "statistical odds ratio (OR)" and explicitly distinguish from wagering odds. But the instruction says "Never mention ... odds." That's ambiguous. Given the source text heavily uses "odds ratio," and the invariant is under "ZERO BETTING LINES," I think it means betting odds. I will use "statistical odds ratio" but perhaps minimize the standalone word "odds." Actually, looking again: "Never mention spreads, totals, moneylines, or odds." It literally says odds. But then "Zero toy equations" etc. This is a strict constraint. However, the paper itself reports ORs. If I cannot say "odds," I cannot accurately report the paper's findings. But I can say "multiplicative change in the probability ratio" or "exp(β)" or "likelihood ratio" to avoid the word "odds." Hmm.

To be safe and compliant, I will avoid the word "odds" entirely and instead use "OR" with expansion "multiplicative likelihood ratio" or just refer to the coefficient exponentiated. Actually, "odds ratio" is standard statistical terminology. The constraint is about betting. I'll use "statistical odds ratio (OR)" once to define, then use OR. But the literal rule says never mention odds. I think it's safer to avoid the word. Let me use "exponentiated coefficient" or "relative likelihood ratio" or simply report the OR values without the word "odds." Wait, that's awkward.

Let me re-read: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Given the context of sports analytics and betting, this clearly refers to betting odds. Using "odds ratio" in a statistical sense is not a betting line. I will use "statistical odds ratio (OR)" and it should be fine. If I'm paranoid, I can say "log-odds coefficient" which contains "odds" but is statistical. I think it's acceptable.

Actually, to be maximally compliant with the literal text while still being useful, I will use "OR" and describe it as "the exponentiated log-odds coefficient" and avoid the standalone phrase "betting odds." I won't mention spreads, totals, or moneylines at all.

Now let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper establishes a four-hop causal chain from sensory signal to physical outcome. Hop 1: the trash-can bang is not random noise but a structured signal conditioned on pitch class. Table 1 shows off-speed pitches (change-up, curveball, slider) carry bang rates of 23.7%, 27.6%, and 26.8% respectively, while fastballs carry only 2.3%; a chi-square test of independence rejects the null with p < 2.2 × 10^-16 [PAGE 7]. This means the bang functions as a high-specificity indicator for off-speed offerings. Hop 2: batters who receive the signal alter their swing propensity. The swing model, a generalized linear mixed model with logit link, estimates the bang indicator coefficient at -0.3219 (95% CI: -0.482, -0.163; p = 7.59 × 10^-5), which exponentiates to a statistical odds ratio of 0.725 (95% CI: 0.618, 0.850), roughly a 27.5% reduction in the odds of swinging when a bang precedes the pitch [PAGE 13]. The raw table association is smaller (OR 0.793) because it does not control for pitch type, called-strike probability (CSP), or pitch count [PAGE 10], demonstrating confounding in the unadjusted comparison.

Hop 3: conditional on swinging, the signal improves contact quality on off-speed pitches. The contact model, restricted to the 3,725 swinging observations, includes an interaction between fastball indicator and bang indicator [PAGE 12]. For off-speed pitches the bang coefficient is 0.591 (95% CI: 0.294, 0.984), exponentiating to OR 1.805 (bootstrapped 95% CI: 1.342, 2.675), about an 80% increase in contact odds [PAGE 15]. For fastballs the combined coefficient is -0.603 (OR 0.547; bootstrapped 95% CI: 0.227, 1.774), statistically indistinguishable from one [PAGE 16], consistent with the interpretation that a bang preceding a fastball is a sign-stealer error that leaves the batter preparing for the wrong pitch class. Player-level heterogeneity is substantial: of 20 players, ten have confidence intervals containing unity, while George Springer shows a player-specific OR of 3.810 (95% CI: 2.042, 12.864), reducing his swing-and-miss rate on off-speed pitches from 32.63% to 5% [PAGE 16-17, Table 5 PAGE 27].

Hop 4: conditional on contact, exit velocity rises. The exit-velocity linear mixed-effects model uses an identity link on 2,272 contact observations with recorded launch speed [PAGE 17]. The bang coefficient is 2.386 miles per hour (95% CI: 0.334, 4.451; p = 0.0230) [PAGE 17-18, Table 6 PAGE 28]. Using Nathan’s trajectory physics, a 100 mph ball at 30 degrees travels 385.3 feet, while 102.386 mph travels 397.9 feet, a 12.6-foot difference sufficient to turn a long fly out at Fenway Park center field (389' 9") into a home run [PAGE 20].

Gray-zone audit: (1) the Bangs data cover only a subset of Astros home games and rely on audio spectrogram detection, so false-negative bangs are possible and absence of a bang is explicitly inconclusive [PAGE 4, 6]; (2) pitch classification comes from Pitch Info rather than Statcast V1.0, introducing a measurement layer not fully cross-validated [PAGE 6]; (3) the contact and exit-velocity models are sequential truncations of the same sample (8,201 → 3,725 → 2,272), creating collider-style conditioning on swing and contact decisions [PAGE 10, 15, 17]; (4) multiple comparisons across 20 player-specific odds ratios risk false positives, though bootstrapping mitigates interval calibration [PAGE 16, 27]; (5) temporal confounding exists because the team improved for many reasons in 2017, though the monthly bang-proportion curve (rising through May, falling in September) suggests an internal learning/adoption trajectory rather than a static team effect [PAGE 7, Figure 1 PAGE 8].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The general estimating framework is the generalized linear mixed model from McCulloch & Neuhaus (2014):

Equation (1): η = Xβ + Zb
where η is the linear predictor, X is the fixed-effects covariate matrix, β is the fixed-effects vector, Z is the random-effects design matrix, and b is the random-effects vector [PAGE 11]. All models use the logit link g(π) = log(π / (1 - π)) for binary responses and the identity link for continuous exit velocity [PAGE 11-13].

Swing model (Section 3.1): Let Y_ij be the swing indicator for player j on pitch i, π_ij = P(Y_ij = 1). Covariates: indicator for bang presence, indicator for fastball, called-strike probability (CSP), pitch count as a factor with reference category 0-0, and a random slope for each batter [PAGE 11-12].
Fixed-effect estimate for I{Bang}: β_bang = -0.3219, standard error 0.08, z = -3.96, p = 7.59 × 10^-5, 95% CI (-0.482, -0.163) [PAGE 13, Table 3 PAGE 25]. Exponentiated: OR = 0.725, 95% CI (0.618, 0.850), approximately 27.5% reduction in swing propensity [PAGE 13]. Units: dimensionless log-odds and dimensionless probability ratio.

Contact model (Section 3.2): Conditional on Y_ij = 1 (swing), n = 3,725 after removing non-swings and rare interference events [PAGE 15]. Covariates: CSP, I{Fastball}, I{Bang}, and interaction I{Fastball} × I{Bang}; random intercepts for pitcher and batter, random slope for bang by batter [PAGE 12].
Fixed effects [PAGE 26, Table 4]: β_CSP = 1.90 (z = 16.37), β_I{Fastball} = 0.97 (z = 9.61), β_I{Bang} = 0.59 (z = 2.68, p = 0.01), β_I{Fastball}×I{Bang} = -1.19 (z = -2.64, p = 0.01).
Off-speed interpretation: β_bang = 0.591 (95% CI: 0.294, 0.984); exponentiated OR = 1.805, bootstrapped 95% CI (1.342, 2.675) [PAGE 15].
Fastball interpretation: combined effect = -0.603; exponentiated OR = 0.547, bootstrapped 95% CI (0.227, 1.774), not significantly different from unity [PAGE 16].
Player-specific example [PAGE 16-17, Table 5 PAGE 27]: Springer OR = 3.810, 95% CI (2.042, 12.864). Observed miss rates: 95 of 95 no-bang off-speed swings? Actually text: 95 swings at off-speed not preceded by bangs, 31 no contact (32.63%; 95% CI: 23.57%, 43.12%); 40 swings preceded by bangs, 2 no contact (5%; 0.87%, 18.21%) [PAGE 17].

Exit velocity model (Section 3.3): Conditional on contact with recorded launch speed, n = 2,272 [PAGE 17]. Identity link linear mixed model: Y_ij = β_0 + β_1·CSP + β_2·I{Fastball} + β_3·I{Bang} + u_pitcher + u_batter + ε_ij [PAGE 13].
Fixed effects [PAGE 28, Table 6]: intercept 76.00 mph (SE 0.94), β_CSP = 8.36 (SE 0.91, z = 9.18), β_I{Fastball} = 2.20 mph (SE 0.70, z = 3.15, p = 0.00165), β_I{Bang} = 2.39 mph (SE 1.05, z = 2.27, p = 0.0230), 95% CI (0.334, 4.451) [PAGE 17-18].
Physical translation [PAGE 20]: at launch angle 30°, v = 100 mph gives d ≈ 385.3 feet; v = 102.386 mph gives d ≈ 397.9 feet; Δd ≈ 12.6 feet.

Breakdown / singularity regimes: The bang-absence condition is uninformative because it could denote either a fastball or an undecoded sign [PAGE 4]. The fastball-by-bang interaction cell is small, producing a bootstrapped CI that crosses 1 (0.227, 1.774), so the null of no fastball effect cannot be rejected [PAGE 16]. Player-specific estimates suffer sparse-cell bias; ten of twenty players have CIs containing unity [PAGE 16]. The exit-velocity model excludes all swings-and-misses and all contacts without Statcast launch-speed measurement, truncating the inference to a selected contact subpopulation [PAGE 17].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage begins with conventional sign stealing in baseball, where a runner at second base relays catcher signals to the batter, and advances to electronic theft in 2017 via a center-field camera feeding a monitor, with decoded off-speed pitches announced by banging a bat on a metal trash can [PAGE 3-4]. The scheme became public through Mike Fiers’ November 2019 disclosure to The Athletic, confirmed by Rosenthal & Drellich (2019) [PAGE 3]. MLB discipline included one-year suspensions for manager A.J. Hinch and general manager Jeff Lunhow, a $5 million fine, and forfeiture of the 2020 and 2021 first- and second-round draft picks [PAGE 4]. The Boston Red Sox were implicated separately through Alex Cora, former Astros bench coach and 2018 Red Sox manager [PAGE 4 footnote].

Pre-existing analytics literature is divided. Sawchik (2019) noted a large decrease in Astros strikeout rates from 2016 to 2017; Stark & Sarris (2020) documented home/away splits, slugging increases, and player-specific strikeout drops (Springer, Correa, Gattis, Marisnick); Arthur (2019) identified an intraseason break after May 19, 2017 in swinging-strike rates and called-strike behavior, plus exit-velocity gains [PAGE 5]. By contrast, Lindbergh (2019) found little evidence of overall benefit [PAGE 5]. The present manuscript positions itself as resolving this ambiguity through conditioned causal modeling [PAGE 5].

Multi-week traps appear in the temporal deployment of the scheme. Figure 1 shows the proportion of bangs per month increasing steadily through the first five months of 2017 and dropping off in September, which the authors interpret as growing confidence or refinement of the system, possibly followed by end-of-season caution [PAGE 7, Figure 1 PAGE 8]. Arthur’s May 19 intraseason breakpoint [PAGE 5] aligns with this adoption curve. At the player level, Springer’s contact percentage reached career highs in 2017 and 2018 (78.7% and 78.5%), while his swinging-strike percentage hit career lows in those same years (9.5% and 9.6%), followed by a 2019 rebound [PAGE 16-17, Figure 4 PAGE 18]. This pattern creates a treatment-window fingerprint: onset during the 2017 season, persistence through 2018, and partial regression after public exposure in 2019, consistent with an informational crutch whose removal induces habit regression.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The strategic structure contains at least three recursively nested theory-of-mind layers. Layer 0 is the baseline pitcher-batter game: the pitcher relies on the batter’s uncertainty about pitch class to generate swings-and-misses and weak contact [PAGE 3]. Layer 1 is the Astros’ sign-stealing layer: the batter receives the bang signal and forms a posterior belief that an off-speed pitch is coming, adjusting swing timing and selectivity accordingly [PAGE 3-4, 7]. Layer 2 is the counter-trap: an opposing team that suspects electronic sign stealing can poison the signal by throwing fastballs in bang-count situations or by using decoy catcher signs. The paper’s contact-model result for fastballs precisely instantiates this trap: when a bang precedes a fastball (a sign-stealer error), the batter expecting off-speed contact fares worse, with OR 0.547 and a confidence interval (0.227, 1.774) that includes but trends below unity [PAGE 16]. The authors describe this explicitly: “A bang prior to a pitch that turns out to be a fastball is actually a mistake on the part of the sign thief,” and it would not be surprising if contact suffers because the batter expects a different pitch [PAGE 16].

Layer 3 is individual heterogeneity in signal priors. Altuve and Reddick appear to prefer not hearing the bang at the same rate as teammates [PAGE 7], implying player-specific weighting of signal reliability versus mechanical rhythm. Some batters may dislike the cognitive load of re-timing their swing on an off-speed cue, or may have swing planes optimized for fastballs such that advance knowledge of off-speed disrupts rather than helps. This produces heterogeneous treatment effects visible in Table 5: Springer benefits enormously (OR 3.810), while ten of twenty players show no statistically significant contact gain [PAGE 16, Table 5 PAGE 27].

Crisis habit regression operates at the team level. Once the scheme was exposed and dismantled, the informational crutch vanished. Springer’s 2019 increase in swinging-strike percentage and decline in contact percentage relative to 2017-2018 [PAGE 16-17, Figure 4 PAGE 18] is consistent with regression of contact habits when advance pitch information is removed. The “clock” operates on three scales: the game-state clock (pitch count included as a factor in the swing model) [PAGE 11-12]; the season clock (monthly bang-proportion buildup and September drop-off) [PAGE 7]; and the scandal clock (2017 commission, November 2019 exposure, October 2020 publication) [PAGE 4, 22]. A counter-trap sustained across the scandal clock would require opponents to exploit the Astros’ known reliance on the bang; the absence of a publicly documented counter-signaling campaign does not veto the mechanism, but it does mean the Layer 2 trap remains theoretically possible rather than empirically confirmed in this dataset.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The exit-velocity claim rests on the mapping from launch speed to batted-ball distance. The paper invokes Nathan (2020) trajectory physics: at 30 degrees launch angle, 100 mph carries 385.3 feet and 102.386 mph carries 397.9 feet [PAGE 20]. A veto at this layer would arise if launch angle or spin rate differed systematically between bang and no-bang contact such that identical exit velocities produced different distances. Because the model conditions only on exit velocity and not on launch angle or spin, an unmeasured interaction between bang status and launch-angle distribution could bias the 12.6-foot extrapolation. However, the physics calculation itself is not a toy ratio; it is an external engineering relationship applied to the estimated marginal effect [PAGE 20].

Biomechanical layer: The contact model’s extreme Springer effect (swing-and-miss falling from 32.63% to 5%) [PAGE 17] depends on the validity of the bang-detection pipeline. The Bangs data are derived from YouTube video synchronized to Statcast timestamps via audio spectrograms [PAGE 6]. If audio detection has non-random false positives—for example, crowd noise misclassified as bangs precisely on well-hit balls—the contact odds ratio is biased. A veto condition is: if bang-detection sensitivity and specificity fall below roughly 90%, the estimated OR 1.805 could be substantially attenuated or even manufactured by measurement error. The model does not report detection error rates, so this layer is partially unadjudicated by the text.

Weather layer: Minute Maid Park has a retractable roof, and air density, temperature, and humidity influence exit velocity and ball flight. The models include CSP, pitch type, pitch count, and random effects for pitcher and batter [PAGE 12-13], but they do not include weather, roof-open/closed status, or time-of-day covariates [PAGE 6-7]. Because all bangs occur at home games, weather is partially nested within the home-game subset, but cross-game weather variation remains a possible confounder for exit velocity specifically. A veto at this layer would be demonstrated if the bang coefficient on exit velocity (2.386 mph) attenuated to null after adding temperature or air-density controls.

Composite veto proof: The causal chain is vetoed if any of the following hold: (a) bangs are not associated with pitch class—refuted by Table 1 (chi-square p < 2.2 × 10^-16) [PAGE 7]; (b) the bang coefficient in the swing model vanishes when conditioning on finer pitch-count strata or when CSP is interacted with bang—the current model already controls for CSP and pitch count, and the effect remains significant (p = 7.59 × 10^-5) [PAGE 13]; (c) the exit-velocity gain is explained entirely by launch-angle differences rather than raw speed—the model does not test this, leaving it an open veto layer [PAGE 20].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Fastball betrayal counterfactual. Construct the subset of pitches where a bang occurred but the delivered pitch was a fastball (sign-stealer error). Compare contact rate and swing rate on bang+fastball versus no-bang fastball. The paper’s contact-model interaction implies the batter prepares for off-speed and is mismatched when a fastball arrives, yielding OR 0.547 with bootstrapped 95% CI (0.227, 1.774) [PAGE 16]. Veto rule: if contact on bang+fastball is statistically indistinguishable from or greater than contact on no-bang fastball, the premise that the batter is actively preparing for off-speed is falsified, and the bang cannot be treated as a reliable pitch-class signal. Prediction: contact and swing rates on mis-signed fastballs remain suppressed relative to no-bang fastballs because the batter’s off-speed timing produces poor contact on fastball velocity, preserving the negative interaction sign.

Scenario 2 — Removal-of-treatment counterfactual. Compare 2017 home plate appearances with bangs to 2018-2019 home plate appearances for the same players after the electronic system was dismantled. Veto rule: if the off-speed contact advantage (OR ≈ 1.805) and exit-velocity boost (2.386 mph) persist at 2017 magnitudes after scheme removal, the effect is not causally tied to the bang mechanism and likely reflects player development or park effects. Prediction: Springer’s contact percentage and exit velocity on off-speed swings regress toward pre-2017 career norms; the 2019 increase in his swinging-strike percentage [PAGE 16-17] supports this attenuation. The post-treatment period should show the bang coefficient collapsing to null in any re-estimated model on 2018-2019 data.

Scenario 3 — Signal-absence congruence counterfactual. Identify no-bang pitches that were actually off-speed (either the sign was not decoded or the bang was withheld). Compare these to no-bang fastballs and to bang off-speed pitches. Veto rule: if batters perform equally well on no-bang off-speed pitches as on bang off-speed pitches, the bang itself is not the active ingredient; pitch selection or batter quality confounds the association. Prediction: no-bang off-speed swings show lower contact probability and lower exit velocity than bang off-speed swings, because the batter lacks advance information and must rely on visual recognition. This is consistent with the observed baseline: without bangs batters swung 46.2% of the time versus 40.5% with bangs [PAGE 10], and the controlled swing model shows bangs suppress swings by roughly 27.5% [PAGE 13], implying selectivity only when the signal is present.
</RLVR_COUNTERFACTUAL_VETOES>