---
source: "2026 - Auditing Contextual Bias in Human Ball-Strike Calls Using KBO's Automated Umpiring Transition - Lee et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5001
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about auditing contextual bias in human ball-strike calls using KBO's Automated Umpiring Transition. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
   - <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.

Let me carefully extract information from the source text to ground each section.

Key facts from paper:
- Paper: Lee & Ko, Yonsei University. KBO ABS transition.
- Data: 1,216,246 pitch rows from 2021-2026 (partial). 2022-2023 primary human baseline. ABS 2024 onward.
- Boundary band: 0.25 ft of nearest rule-zone boundary.
- Logistic model: Pr(Yi=1) = logit^{-1}(α + f_zone(xi,yi;bi,hi) + λ^T Ci + γ^T Xi + δ_s(i))
- f_zone basis: [xi, yi, x_i^2, y_i^2, xi yi, di, d_i^2, ri, bi, hi]^T
- ci context, xi controls (pitch-type, speed, stance, hand, count-pressure controls when count not treatment), season fixed effects.
- Results:
  - Audit 1 (Count): Human: 3-0 +6.61 pp; 0-2 -17.17 pp; 1-2 -14.92 pp; 2-2 -11.94 pp; 3-2 -10.49 pp; 2-0 +5.14 pp; 1-0 +1.80 pp; 3-1 ~0. ABS: 3-0 +0.37 pp; 0-2 +0.33 pp (near zero, no FDR).
  - Audit 2 (Status/Salary): Batter human all players -1.50 pp (p=0.496); excluding Choo -3.82 pp (95% CI -6.25 to -1.39, p=0.002). Pitcher top-bottom +1.62 to +2.30 pp at 20/30/35/40% cutoffs under human; ABS ~0.
  - Audit 3 (Game phase): Human early innings 1-3: -0.72 pp (q=0.0018); late 7-9+: +0.69 pp (q=0.0033). All innings 7+: +1.02 pp (q=0.0082). Late-close: +1.38 pp (q=0.0069). Late-large-margin: -0.27 pp not sig. ABS: 1-3: 0.00 pp; 4-6: -0.12 pp; 7-9+: +0.12 pp. Early trailing: -1.94 pp (q=0.00049); late trailing: +1.01 pp (q=0.025). Early tied: -1.35 pp (q=0.0077).
  - Audit 4 (Catcher/Pitcher identity): Catcher shrinkage SD human 1.13 pp (p=2.24e-15); ABS 0.00 pp (p=0.774). Pitcher human 1.39 pp (p=1.29e-14); ABS 0.12 pp (p=0.075).
  - Audit 5 (Home): U1 Park Jong-chul -4.80 pp called strike for home batters = +4.80 pp home-favoring (q=0.014, N=2,890, 46 games). Localized lower boundary +7.99 pp, left side +6.08 pp. Exploratory screen: 212 cells, 15 nominal, none FDR. U4 split: HT -11.36 pp, LT +11.77 pp; gap 23.13 pp (7.61 to 37.57 pp, p=0.002), direct logit 28.50 pp (p<0.001).
- Model details: logistic regression, average marginal effects in percentage points, FDR q-values.
- Limitations: observational, not randomized, taken-pitch conditioning, salary proxy, batter-specific zone fields not direct observations.

Now I need to write the response. I must avoid betting lines entirely. No mention of spreads, moneylines, odds, totals. I must use formal LaTeX equations and specify SI/information/probability units. Exact singularity/breakdown regimes: e.g., logistic link saturation at p→0 or p→1, sparse cells causing empirical Bayes shrinkage instability, FDR breakdown under dependence, boundary band truncation at 0.25 ft, taken-pitch selection bias (collider/selection on outcome downstream of swing decision).

Let's plan each section:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Discuss identification problem: context not randomly assigned. Pitchers throw different pitches in different counts; batters take different pitches; catchers paired with pitchers. This is confounding by indication/selection.
- The ABS transition as a diagnostic benchmark (not causal). Difference-in-differences-like logic but not randomized: compare human vs ABS for same context contrasts.
- Count balancing: logistic model with count dummies. Why 0-0 baseline? Initial state. Ordered pattern implies utility maximization or loss aversion (end plate appearance vs walk). The attenuation under ABS suggests human perceptual threshold shift under consequence pressure (prospect theory / reference dependence).
- Status: salary as noisy proxy. Choo case (reputation-salary mismatch). Measurement error in proxy attenuates coefficient toward zero (classical measurement error) but removing a high-leverage mismatch can either increase or decrease estimated slope depending on correlation structure. Here removing Choo increased magnitude from -1.50 to -3.82 pp, suggesting Choo was a leverage point pulling toward null.
- Game phase: go-home zone vs close-game pressure. The fact that late blowouts were NOT more strike-prone (-0.27 pp) falsifies simple fatigue/go-home model. Supports context-specific accountability (late-close scrutiny) or strategic selection into taken pitches.
- Catcher/pitcher identity: shrinkage-adjusted residual dispersion. Empirical Bayes shrinkage SD. Under ABS goes to ~0, meaning catcher framing was a real human-perception channel, not just pitch selection correlated with catcher identity.
- Home: mostly null, localized U1/U4. Multiple testing problem: 212 cells, 15 nominal, none FDR. U4 post-selection inference problem (selected after screen, then targeted follow-up p<0.001 but selection bias invalidates nominal p).
- Gray zones: boundary band choice 0.25 ft is arbitrary; too wide dilutes signal, too narrow reduces sample and increases boundary misclassification error. Season fixed effects absorb league shifts but cannot separate ABS from time trends. Taken-pitch conditioning: swing decision is downstream of count and game state, creating selection bias (Heckman-type). If batters swing more at borderline pitches in 0-2 under human umpires, the taken sample is selected.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations.
- Write out the logistic model exactly as in paper.
- Define f_zone basis vector.
- Define average marginal effect (AME) in percentage points: Δpp = 100 × [E(Pr|context=c) - E(Pr|context=0-0)].
- FDR: Benjamini-Hochberg q < 0.05.
- Table values: effect sizes, q-values, sample sizes.
- Units: percentage points (pp), ft for distance, won for salary (but don't bet), innings.
- Breakdown regimes: logistic saturation (p near 0 or 1), sparse cells (catcher N>=100, pitcher N>=200), boundary band truncation d ∈ [-0.25, 0.25] ft, FDR breakdown under arbitrary dependence, selection on taken pitches (collider bias).
- Cite [PAGE 1], [PAGE 3], etc. for exact claims.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: PITCHf/x, Statcast, camera/sensor infrastructure [PAGE 10 refs 9-11]. Strike-zone modeling from rectangular to probabilistic/geometric/hierarchical [PAGE 10 refs 5-8].
- Umpire accuracy vs contextual bias [PAGE 10 refs 16-18]. Catcher framing [PAGE 10 refs 6, 19-20]. Status/home advantage [PAGE 10 refs 21, 18, 17].
- Automated officiating as audit infrastructure [PAGE 10 refs 22-26].
- Multi-week traps: In baseball, contexts are not randomly assigned across a week/homestand. Pitcher usage rotates over a week (5-man rotation), catcher rest patterns, umpire travel schedules. If ABS rolled out over time, calendar confounds with ABS. The paper notes rosters, strategies, player behavior change across seasons [PAGE 11]. Retrocausal genealogy: we infer human bias by comparing to a future/automated benchmark; the "counterfactual" is not observed under human umpires, so any league-wide trend (e.g., pitch clock implementation 2023-2024) is confounded with ABS adoption.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure (late-close, two-strike), umpires revert to heuristic/default boundary. Count balancing = crisis habit: avoid ending PA on marginal pitch (0-2) or avoid walk (3-0).
- Counter-trap: Batters/pitchers anticipate umpire context sensitivity and adjust swing/take decisions. If batters know umpires are stingy in 0-2, they may swing more at borderline pitches, changing the composition of taken pitches. This is a counter-trap: the observed taken-pitch effect is partly strategic response by players, not pure umpire bias.
- Clock: Pitch clock (mentioned refs 1, 2) and ABS challenge system (MLB hybrid). Time pressure changes cognitive load; umpires under time pressure may rely more on priors/status/catcher framing. The KBO introduced pitch clock rules alongside ABS [PAGE 1 ref 1]. In hybrid ABS challenge systems, players choose when to challenge; this creates a game-theoretic loop where umpires know calls can be reviewed, potentially altering context sensitivity [PAGE 11 discussion].
- Recursive ToM: Umpire thinks batter thinks umpire will expand zone late; batter swings early; pitcher nibbles; umpire adjusts. Infinite regress bounded by clock/pitch clock.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Pitch trajectory physics. Rule zone approx horizontal −0.9 to 0.9 ft [PAGE 3]. Signed distance to boundary d(x,y;b,h). Vertical zone batter-specific. Physical constraint: ball must cross plate; biomechanical limits of pitcher command and catcher receiving.
- Biomechanical layer: Catcher glove movement (framing) can shift perceived location by small inches but not physics. Umpire visual acuity and head position. No weather data in paper, but outdoor stadiums (KBO) imply temperature/humidity effects on air density and pitch movement (Magnus force), though not modeled here. Weather veto: If temperature affects pitch movement and umpire calls, and temperature correlates with inning (night games cooler), could confound inning effects. Paper does not control weather [limitations]. Veto condition: weather must correlate with both context (inning/count) and called-strike probability conditional on location. Not addressed -> potential omitted variable bias.
- Veto proof structure: For an effect to survive, it must be robust to (a) boundary band width, (b) season FE, (c) taken-pitch selection, (d) proxy validity. Count effect survives all except selection ambiguity; catcher effect survives ABS attenuation; home effect fails FDR and localization.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I need to create 3 counterfactual veto scenarios that are verifiable (can be tested with data) and give predictions.
  1. Veto: If count balancing were purely pitch-selection (batters take different pitches in different counts), then under ABS the count effect should persist because ABS doesn't change pitch selection. Prediction: ABS count effect ≈ 0 (observed +0.37/+0.33 pp, not FDR sig). Veto passes: human-specific effect confirmed, selection-only hypothesis vetoed. But selection could still interact with human umpire.
  2. Veto: If catcher residual heterogeneity were due to catcher-pitcher pairing quality rather than receiving, then under ABS pitcher-catcher pairing still exists but catcher effect should vanish. Prediction: catcher shrinkage SD under ABS ≈ 0 (observed 0.00 pp). Veto passes: pairing-only hypothesis vetoed; receiving channel supported.
  3. Veto: If home-field effect were crowd-driven and umpire-independent, then under ABS (same crowds, same parks) home effect should persist. Prediction: no umpire-level home contrast under ABS (observed none significant). Veto passes: crowd-only hypothesis vetoed; localized umpire-specific effect remains possible (U1).
- Alternatively, veto scenarios based on counterfactual interventions:
  - Scenario A: Randomly assign counts to pitches (impossible, but counterfactual). If count effect disappears under randomization, it's selection. Prediction: human count effect would attenuate toward zero.
  - Scenario B: Blind umpires to count (audio only). Prediction: count effect vanishes.
  - Scenario C: Automated calls with catchers unaware of automation. Prediction: catcher effect vanishes (observed under ABS).
- Need to make them "verifiable RLVR veto scenarios." RLVR might mean Reinforcement Learning Verifiable Rewards. I'll frame as verifiable counterfactuals with testable predictions and observed outcomes from the paper serving as verification/falsification.

Word count: Must be >= 1,000 words total across sections. I'll aim for ~200-300 words per section to be safe, with THINK_TRACE being longest (~450 words).

Let's start writing. I need to ensure no betting language. No "spread," "moneyline," "odds," "total," "over/under," "vig," "juice," "handicap." I'll avoid all gambling terminology.

Use exact page citations: [PAGE 1], [PAGE 3], [PAGE 4], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 10], [PAGE 11], [PAGE 12].

Formal LaTeX:
- Logistic model: \(\Pr(Y_i = 1) = \text{logit}^{-1}\left( \alpha + f_{\text{zone}}(x_i,y_i;b_i,h_i) + \lambda^\top C_i + \gamma^\top X_i + \delta_{s(i)} \right)\)
- Basis: \(g_i = [x_i, y_i, x_i^2, y_i^2, x_i y_i, d_i, d_i^2, r_i, b_i, h_i]^\top\)
- Signed distance: \(d_i = d(x_i,y_i;b_i,h_i)\), rule-zone indicator \(r_i\).
- AME: \(\Delta_{\text{pp}} = 100 \times \left( \mathbb{E}[\hat{p}_i | C_i=c] - \mathbb{E}[\hat{p}_i | C_i=0\text{-}0] \right)\).
- FDR: Benjamini-Hochberg \(q < 0.05\).
- Empirical Bayes shrinkage SD: \(\sigma_{\text{EB}}\).

Singularity/breakdown:
- Logistic link saturation as \(p \to 0\) or \(p \to 1\), AME non-collapsibility.
- Boundary band truncation: \(d_i \in [-0.25, 0.25]\) ft; too narrow → sparse cells, too wide → boundary misclassification.
- Taken-pitch conditioning: sample is downstream of swing decision \(S_i\), so \(\Pr(Y_i=1 | S_i=1, C_i)\) is selected; if \(S_i \perp\!\!\!\perp C_i | \text{location}\) fails, selection bias (Heckman).
- FDR breakdown under arbitrary dependence across 212 umpire-team cells.
- Salary proxy measurement error: classical error attenuates \(\lambda\) toward zero; Choo is high-leverage mismatch.

Now let's draft each section carefully.

THINK_TRACE: I'll write about identification, the five audits, gray zones, and why ABS is diagnostic not causal. Multi-hop: from raw rate differences -> location-controlled logistic -> context contrasts -> ABS attenuation -> human-specific context sensitivity -> mechanisms (prosocial threshold shift, framing, accountability). Gray zones: 0.25 ft band, season FE confounding with ABS, taken-pitch selection, salary proxy, post-selection inference for U4.

SOURCE_OPERATORS_AND_EQUATIONS: Write equations, list parameter values from tables, define units, breakdown regimes. Cite pages.

RETROCAUSAL_GENEALOGY: Cite refs from paper, trace lineage from PITCHf/x to ABS audit. Multi-week traps: rotation, rest, travel, calendar confounding with ABS rollout, pitch clock.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap (strategic swing/take), clock (pitch clock, challenge system). Infinite regress.

CROSS_LAYER_VETO_ADJUDICATION: Physical zone geometry, biomechanical framing, weather omitted variable, veto conditions for each audit.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with counterfactual intervention, verifiable prediction, and observed verdict.

I must ensure the total is >= 1000 words. Let's aim for roughly:
- THINK_TRACE: 500 words
- SOURCE_OPERATORS_AND_EQUATIONS: 350 words
- RETROCAUSAL_GENEALOGY: 250 words
- RECURSIVE_THEORY_OF_MIND: 250 words
- CROSS_LAYER_VETO_ADJUDICATION: 250 words
- RLVR_COUNTERFACTUAL_VETOES: 250 words
Total ~1850 words. Good.

Let's write.

Double-check no betting terms. Words like "stake," "bet," "wager," "line," "spread," "total," "over," "under," "moneyline," "odds," "probability" is okay (it's not betting per se, it's statistical probability). I'll avoid "odds" in betting context but can use "odds ratio"? Better avoid "odds" entirely to be safe. Use "probability" or "log-odds" is technical but maybe risky. I'll use "logit" and "probability" but avoid "odds."

Also avoid "handicap."

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The identification problem in this audit is fundamentally non-random: count, inning, score, batter, pitcher, catcher, and home context are not randomly assigned to pitches [PAGE 2]. Pitchers throw different pitch types in different counts; batters elect to take or swing selectively; catchers are paired with specific pitchers and umpires; and high-salary players appear in strategic contexts. Consequently, a raw difference in called-strike rates across contexts is a composite of pitch selection, pitch location, pitch type, player quality, and game state [PAGE 1]. The paper’s first multi-hop move is to strip away geometry by estimating a local strike-zone surface with signed distance to the nearest rule-zone boundary, then testing whether a context variable shifts calls among otherwise comparable taken pitches [PAGE 3]. This yields a diagnostic, not causal, comparison: the KBO’s ABS transition was not randomized, so any league-wide change between 2022–2023 and 2024–2026 (rosters, strategies, pitch clock adoption, player adaptation) is confounded with automation [PAGE 11].

The count-pressure audit [PAGE 4] is the clearest signature. Relative to 0–0, human umpires called 0–2 pitches 17.17 percentage points less likely to be strikes, 1–2 at −14.92 pp, 2–2 at −11.94 pp, and 3–2 at −10.49 pp, while 3–0 was +6.61 pp and 2–0 at +5.14 pp. Under ABS, the analogous 3–0 and 0–2 effects were +0.37 pp and +0.33 pp, neither surviving FDR correction. The ordered pattern—extending the plate appearance rather than letting a borderline pitch end it—is consistent with a consequence-dependent perceptual threshold shift under human umpires. A gray zone remains: the sample is conditioned on taken pitches, and the swing decision is downstream of count and game state. If batters swing more freely at borderline 0–2 pitches because they expect a stingy zone, the taken-pitch sample is selected, and the umpire effect is partly a strategic echo of player expectations rather than pure adjudication bias.

Audit 2 on status [PAGE 4–5] exposes proxy fragility. Salary is an imperfect reputation measure; Shin-soo Choo earned the KBO minimum despite All-Star reputation, creating a high-leverage mismatch. Including him, the batter salary slope was −1.50 pp (p = 0.496); excluding him, it became −3.82 pp (95% CI −6.25 to −1.39, p = 0.002). This is exactly the direction expected if classical measurement error in a noisy proxy attenuates toward zero and removing a leverage point realigns the estimator with the true reputation gradient. Pitcher top-versus-bottom salary contrasts were stable at +1.62 to +2.30 pp across cutoffs under human umpires, attenuating to near zero under ABS [PAGE 5]. The gray zone is construct validity: salary conflates contract timing, career stage, and team finances, so the batter result is suggestive, not confirmatory.

Audit 3 [PAGE 6–7] rejects a blunt “go-home” theory. Early innings 1–3 were −0.72 pp (q = 0.0018); late innings 7–9+ were +0.69 pp (q = 0.0033). All innings 7+ were +1.02 pp (q = 0.0082), and late-close +1.38 pp (q = 0.0069), but late-large-margin was −0.27 pp and null. A simple fatigue or game-ending hurry would predict strikes rising in all late contexts, including blowouts; the absence of that pattern falsifies the monotonic go-home model and supports a narrower accountability or pressure effect concentrated in close games. Under ABS the phase surface is flat (+0.12 pp late innings), indicating the human drift was not a structural feature of the pitch distribution alone.

Audit 4 [PAGE 7–8] shows catcher residual dispersion of 1.13 pp shrinkage SD under human umpires (p = 2.24×10⁻¹⁵) collapsing to 0.00 pp under ABS (p = 0.774). Pitcher dispersion fell from 1.39 pp to 0.12 pp. This is a strong secondary signal that catcher presentation, not merely catcher-pitcher pairing quality, contributed to human called-strike variation. Audit 5 [PAGE 8–9] is mostly null at the umpire level, with one FDR-significant human exception (U1, Park Jong-chul: −4.80 pp called strike for home batters, i.e., +4.80 pp home-favoring, q = 0.014). The U4 exploratory screen (212 cells, 15 nominal, none FDR) produced a post-selection targeted gap of 23.13 pp (bootstrap 7.61 to 37.57 pp, p = 0.002), which is an audit lead, not a confirmed league-wide bias, because post-screen inference invalidates nominal p-values.

The deepest gray zone is the boundary band itself: 0.25 ft truncation admits boundary misclassification error if too narrow and dilutes contextual sensitivity if too wide. Season fixed effects absorb league-level shifts but cannot separate ABS from contemporaneous rule changes (e.g., strike-zone expansion announced alongside automation) [PAGE 1 ref 1]. Taken-pitch conditioning introduces a selection-collider problem analogous to Heckman bias: because the outcome is observed only when a batter does not swing, and swing propensity varies with count, score, and catcher, the estimated context effects are bounded by the unobserved swing margin. These limitations are why the paper distinguishes strong (count), secondary (catcher, game phase), proxy-sensitive (status), and exploratory/null (home) findings rather than issuing a blanket condemnation of human umpiring.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The core estimand is a logistic regression for taken pitch \(i\):

\[
\Pr(Y_i = 1) = \text{logit}^{-1}\Bigl(\alpha + f_{\text{zone}}(x_i,y_i;b_i,h_i) + \lambda^\top C_i + \gamma^\top X_i + \delta_{s(i)}\Bigr),
\]

where \(Y_i = 1\) denotes a called strike. The local zone surface is a basis expansion [PAGE 3]:

\[
f_{\text{zone}}(x_i,y_i;b_i,h_i) = \theta^\top g_i,\qquad
g_i = \bigl[x_i,\; y_i,\; x_i^2,\; y_i^2,\; x_i y_i,\; d_i,\; d_i^2,\; r_i,\; b_i,\; h_i\bigr]^\top .
\]

Here \(x_i\) and \(y_i\) are normalized horizontal and vertical locations in feet; \(b_i\) and \(h_i\) are batter-specific zone bottom and height; \(d_i = d(x_i,y_i;b_i,h_i)\) is signed distance to the nearest rule-zone boundary in ft; and \(r_i = r(x_i,y_i;b_i,h_i)\) indicates inside-versus-outside rule-zone status [PAGE 3]. The horizontal rule-zone approximation spans \(-0.9\) to \(0.9\) ft [PAGE 3]. The main estimation sample restricts to boundary-band taken pitches with \(|d_i| \le 0.25\) ft [PAGE 1]. Context \(C_i\) varies by audit: count state, salary percentile or top/bottom cutoff, inning phase, catcher/pitcher identity, or home context. Controls \(X_i\) include pitch-type group, standardized pitch speed, batter stance, pitcher hand, and count-pressure controls when count is not the treatment. Season fixed effects \(\delta_{s(i)}\) absorb league-wide shifts. Reported quantities are average marginal effects in percentage points:

\[
\Delta_{\text{pp}}(c) = 100 \times \Bigl\{ \mathbb{E}[\hat p_i \mid C_i = c] - \mathbb{E}[\hat p_i \mid C_i = \text{0--0}] \Bigr\}.
\]

Inference uses false-discovery-rate (Benjamini–Hochberg) adjusted q-values with threshold \(q < 0.05\) [PAGE 3]. Empirical-Bayes shrinkage standard deviations \(\sigma_{\text{EB}}\) are reported in percentage points for identity-level residuals [PAGE 7, Table 2].

Key estimated effects [PAGE 4–9]:
- Count: human 3–0 \(+6.61\) pp; human 0–2 \(-17.17\) pp, 1–2 \(-14.92\) pp, 2–2 \(-11.94\) pp, 3–2 \(-10.49\) pp, 2–0 \(+5.14\) pp, 1–0 \(+1.80\) pp; ABS 3–0 \(+0.37\) pp, 0–2 \(+0.33\) pp (not FDR-significant).
- Status: human batter salary slope \(-1.50\) pp (\(p=0.496\), all players); excluding Choo, \(-3.82\) pp (95% CI \(-6.25\) to \(-1.39\), \(p=0.002\)); pitcher top–bottom contrasts \(+1.62\) to \(+2.30\) pp (FDR-supported at 20/30/35/40% cutoffs); ABS slopes approximately zero.
- Game phase: human innings 1–3 \(-0.72\) pp (\(q=0.0018\)); innings 7–9+ \(+0.69\) pp (\(q=0.0033\)); all innings 7+ \(+1.02\) pp (\(q=0.0082\)); late-close \(+1.38\) pp (\(q=0.0069\)); late-large-margin \(-0.27\) pp (null); ABS phases \(0.00\), \(-0.12\), \(+0.12\) pp (no FDR support).
- Identity: catcher shrinkage SD human \(1.13\) pp (\(p=2.24\times10^{-15}\)), ABS \(0.00\) pp (\(p=0.774\)); pitcher human \(1.39\) pp (\(p=1.29\times10^{-14}\)), ABS \(0.12\) pp (\(p=0.075\)).
- Home: U1 home-favoring contrast \(+4.80\) pp (\(q=0.014\), \(N=2{,}890\) called pitches, 46 games); U1 localized lower boundary \(+7.99\) pp and left side \(+6.08\) pp; U4 exploratory HT \(-11.36\) pp vs LT \(+11.77\) pp, targeted gap \(23.13\) pp (bootstrap 7.61 to 37.57 pp, \(p=0.002\)), direct logit \(28.50\) pp (\(p<0.001\)).

Breakdown and singularity regimes: (1) Logistic link saturation as \(\hat p_i \to 0\) or \(\hat p_i \to 1\), with non-collapsible average marginal effects; (2) boundary-band truncation at \(0.25\) ft creates sparse cells near corners and amplifies measurement error in batter-specific zone fields; (3) taken-pitch conditioning means the sample is downstream of the swing decision \(S_i\), so \(\Pr(Y_i=1 \mid S_i=1, C_i)\) is selected and context effects are biased if swing propensity is context-dependent conditional on location; (4) FDR control breaks down under arbitrary dependence across the 212 umpire–team cells in the exploratory home screen; (5) salary is a noisy proxy with classical measurement error attenuating coefficients toward zero, and the Choo exclusion is a high-leverage sensitivity choice rather than a randomized correction; (6) season fixed effects cannot separate the ABS transition from contemporaneous league trends because ABS adoption was not a randomized experiment [PAGE 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with pitch-tracking infrastructure—PITCHf/x, Statcast, and camera/sensor systems—that converted the strike zone into a pitch-level measurement problem [PAGE 10, refs 9–11]. Strike-zone modeling evolved from simple rectangular lookups to probabilistic, geometric, and hierarchical surfaces [PAGE 10, refs 5–8], which this study adopts via the signed-distance basis expansion. The broader officiating literature divides into accuracy studies (agreement with a rule-zone benchmark) and decision-context studies (non-location features affecting calls after geometry is controlled) [PAGE 10, refs 16–18]. This paper belongs to the latter. Catcher framing research establishes that receiver identity covaries with called-strike probability on similar pitches [PAGE 10, refs 6, 19–20], while sports-officiating work examines status, reputation, crowd pressure, and home advantage [PAGE 10, refs 21, 18, 17]. The novelty here is the use of automated ball-strike (ABS) not as a replacement accuracy claim but as audit infrastructure: the KBO’s 2024 transition supplies a diagnostic benchmark against which human-period contextual signatures can be contrasted [PAGE 10, refs 22–26].

A retrocausal feature of the design is that the “counterfactual” human zone under ABS is never observed; we infer human context sensitivity by comparing human estimates to an automated future that was not available during 2022–2023. This generates multi-week temporal traps. Baseball seasons unfold over weekly rhythms: five-man pitching rotations, catcher rest cycles, umpire travel schedules, and series-length home stands. If ABS adoption coincided with other calendar changes—pitch clock implementation, roster turnover, or strategic shifts—then inning-phase or count effects could be confounded with time rather than umpire cognition [PAGE 11]. The paper mitigates this with season fixed effects and by using complete ABS seasons 2024–2025 as the primary benchmark for game progression, treating partial 2026 as sensitivity [PAGE 1]. However, because the ABS transition was league-wide and synchronous, no within-season cross-ABS control group exists; any league-wide drift in pitch selection or umpire behavior across 2023–2024 is absorbed into the human–ABS contrast. The multi-week trap is therefore that a short homestand or road swing could produce localized umpire–team cells (as in the U4 exploratory screen) that look like bias but reflect scheduling, fatigue, or matchup clustering rather than a stable home-zone effect [PAGE 9].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The cognitive structure of the count effect is best described as crisis habit regression: under consequence pressure, umpires regress from a neutral geometric boundary to a heuristic that preserves option value. In a 0–2 count, a called strike ends the plate appearance; in a 3–0 count, a called ball ends it with a walk. The human data show umpires become less strike-prone when the call could terminate the at-bat immediately and more strike-prone when the alternative is a walk [PAGE 4]. This is consistent with loss aversion or reference-dependence in high-speed perceptual decisions: the threshold shifts to avoid the more salient immediate termination.

The counter-trap is strategic anticipation by players. If batters perceive that umpires are stingy in two-strike counts, they may swing more often at borderline pitches, removing those pitches from the taken-pitch sample on which the umpire effect is estimated. Conversely, if batters expect a generous 3–0 zone, they may take more borderline pitches, inflating the taken sample in exactly the contexts where umpires are most generous. This creates a recursive loop: umpire expectations about batter behavior shape the called-strike surface, and batter expectations about umpire behavior shape the composition of taken pitches. The paper cannot fully disentangle this because it conditions on taken pitches [PAGE 11]; the observed context effect is therefore a joint function of umpire judgment and upstream swing selection.

The clock introduces a hard boundary on this recursion. The KBO adopted pitch clock rules alongside ABS [PAGE 1, ref 1], and MLB has since moved toward an ABS challenge system rather than full automation [PAGE 11, refs 25–26]. In a hybrid challenge system, players decide when to appeal a call, which means umpires know their calls can be selectively reviewed. This alters the incentive gradient: context-sensitive drift may migrate from routine calls to high-leverage calls where challenges are unlikely or costly, and catchers may adjust framing knowing the automated benchmark exists. The recursive theory of mind thus closes with an institutional clock: pitch clocks bound deliberation time, challenge rights bound reviewability, and ABS bounds the automation frontier, but none eliminate the strategic interaction between umpire, batter, pitcher, and catcher around the boundary.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The rule-zone geometry is fixed by horizontal bounds \(-0.9\) to \(0.9\) ft and batter-specific vertical top/bottom fields [PAGE 3]. The signed-distance transform \(d_i\) aligns the model with the physical boundary, so a context effect inside the \(|d_i| \le 0.25\) ft band represents a shift in the effective decision boundary rather than a change in pitch location distribution. A physical veto would require that pitch movement (Magnus force, air density, release consistency) vary systematically with context and remain unmodeled. The paper controls pitch-type group and standardized speed, but does not model weather, temperature, or humidity; in outdoor KBO stadiums, air density changes across a game could alter pitch break and correlate with inning, producing an omitted-variable confound for the game-phase effect. This veto is not discharged by the paper.

Biomechanical layer: Catcher receiving can shift perceived location by small angular displacements at the plate but cannot alter the physical trajectory. The catcher result—residual dispersion of 1.13 pp under human umpires collapsing to 0.00 pp under ABS [PAGE 7]—passes the biomechanical veto for catcher framing as a human-perception channel: if catcher identity mattered only through pitch selection correlated with receiving, the ABS era (same catchers, same pitchers, same pairings) should preserve some dispersion, yet it vanishes. Pitcher identity retains residual dispersion under ABS (0.12 pp, \(p=0.075\)), suggesting pitcher-specific command or movement signatures persist independently of the umpire, as expected.

Veto conditions by audit: Count balancing survives the ABS-attenuation veto (+0.37/+0.33 pp under ABS, not FDR-significant) but fails the taken-pitch selection veto unless one assumes swing propensities are context-independent conditional on location. Catcher heterogeneity survives the ABS veto and the proxy-sensitivity veto (no salary analogue needed), but individual catcher rankings are unstable under shrinkage and sparse cells. Game-phase drift survives the flat-ABS veto but fails the simple go-home veto because late-large-margin was null (−0.27 pp), narrowing the effect to close-game contexts. Status evidence fails the construct-validity veto because salary is a noisy reputation proxy; it passes the direction veto only after the Choo stress test. Home context fails the league-wide veto (mostly null, no ABS counterpart) and the multiple-testing veto (15 nominal cells among 212, none FDR), but passes the localized-anomaly veto for U1 and U4 as prospective monitoring leads.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios are proposed, each with a testable prediction and an observed verdict from the paper:

1. Pitch-selection-only veto for count balancing. Counterfactual: If the human count effect were entirely generated by batters and pitchers selecting different pitch types and locations across counts (with umpires applying a constant boundary), then the same count-state contrasts should appear under ABS, because ABS does not alter the pitch-selection process. Prediction: ABS 3–0 and 0–2 effects should equal human effects (approximately +6.61 pp and −17.17 pp). Observed: ABS effects were +0.37 pp and +0.33 pp, neither FDR-significant [PAGE 4]. Verdict: Veto sustained; the human count effect is not reducible to pitch selection alone, though taken-pitch selection remains a partial confound.

2. Pairing-quality-only veto for catcher heterogeneity. Counterfactual: If catcher residual variation under human umpires were solely a byproduct of non-random catcher–patcher pairings and team contexts rather than receiving, then under ABS—where pairings persist but the call is automated—the catcher shrinkage SD should remain near its human level. Prediction: ABS catcher \(\sigma_{\text{EB}} \approx 1.13\) pp. Observed: ABS catcher \(\sigma_{\text{EB}} = 0.00\) pp (\(p=0.774\)) [PAGE 7]. Verdict: Veto sustained; catcher identity effects are consistent with a receiving-related human-perception channel rather than static pairing composition.

3. Crowd-pressure-only veto for home context. Counterfactual: If the home-field effect were driven by crowd noise influencing umpires independently of umpire identity, then under ABS—with identical crowds and parks—the home/away residual contrast should persist at the umpire level. Prediction: FDR-significant umpire-level home contrasts under ABS. Observed: No umpire-level home/away contrast was significant under ABS; only one human-period exception (U1) survived FDR [PAGE 8]. Verdict: Veto sustained for a general crowd-driven home zone; localized umpire-specific leads (U1, U4) remain unverified audit targets requiring prospective monitoring rather than confirmatory inference.
</RLVR_COUNTERFACTUAL_VETOES>