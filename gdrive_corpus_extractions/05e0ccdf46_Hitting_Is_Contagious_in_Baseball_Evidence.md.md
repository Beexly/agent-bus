---
source: "Hitting_Is_Contagious_in_Baseball_Evidence.md"
folder: "/GSE-Research/sports-research-papers/md/randoms"
pages: 20
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 9231
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper "Hitting Is Contagious in Baseball" with strict formatting constraints. I need to produce:

1. THINK_TRACE (>=400 words) - Deep multi-hop derivation & gray-zone audit
2. SOURCE_OPERATORS_AND_EQUATIONS - Formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY - Historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND - Crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION - Physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes since source pages provided.
- >= 1,000-word depth across sections.

Let me analyze the source carefully.

Source paper details:
- Bock, Maewal, Gough (2012), PLoS ONE 7(12): e51367.
- 28 streaks L >= 30 games, 4,496 observations.
- Treatment and control n~151 each (core lineups).
- Bootstrap percentile method, B=2000 replicates, alpha=0.05.
- Mean BA treatment 1.6 to 20 percentage points higher (mean diff 11 points). BA CI (0.0016, 0.020) around TBA=0.011.
- Batting heat index Q increased by 32 points. TQ CI (0.0157, 0.047), mean TQ=0.032.
- Delayed recognition Dg: BA fails for Dg>=1; Q persists up to Dg=5, fails at Dg=7.
- Table 2 shows Dg=0: TBA=0.011 Y, TQ=0.032 Y; Dg=1: TBA=0.009 N, TQ=0.025 Y; Dg=3: TBA=0.005 N, TQ=0.018 Y; Dg=5: TBA=0.005 N, TQ=0.018 Y; Dg=7: TBA=0.000 N, TQ=0.011 N.
- Individual streak stats in Table 3: DBA and DQ per streak.
- Latent variables discussed: batting order position (ruled out via Figs 5-6), streak recognition delay (time latency), opposing pitching quality (beyond scope), overall team skill (mean finish 3.2/6.03, ruled out).
- Mechanisms: emotional contagion (Hatfield, Barsade), mirror neurons (Rizzolatti), action induction (Gray & Beilock), observational learning (Cross), positive contagion golf (Lee).
- Causal inference difficult; homophily vs influence (Shalizi & Thomas).
- Streaks: only 46 in Modern Era 1901-present; 28 post-WWII in sample.
- Core lineup threshold: average AB/game > 2 (t~AB/game ~ 2).
- Same individuals in treatment and control reduces selection bias.
- Bootstrap percentile method: 2.5 and 97.5 percentiles.
- Streaks spanning two seasons: only season with majority games considered.
- Post-Lively Ball Era (1920-1945).
- Equations referenced but not fully rendered in markdown: Eqn 1-6 for Q, TBA, TQ. Need to reconstruct formal LaTeX from context.
- Q definition: q_k = l_k * BA^i_k (roughly). Overall Q normalized over interval L.
- BA = H/AB.
- Hypotheses: H0: no difference; HA: difference. Symbolically TBA != 0, TQ != 0.

I need to be careful with page citations. The source text has page headers: "PLOS ONE | www.plosone.org December 2012 | Volume 7 | Issue 12 | e51367" followed by page numbers 1-9 visible in the text. Let me map content to pages:

Page 1: Title, abstract, citation, editor, dates, copyright, introduction start, previous work start (streakiness, Bar-Eli, Gilovich, Raab, Ribeiro, Yaari, Albright, Albert, Quintana).
Page 2: Previous work cont. (epidemiological contagion, Surgeon General, Hill, Parascandola, Hatfield, Barsade, Moll, Totterdell, Lee, Rizzolatti, Cross, Gray & Beilock, Shalizi & Thomas, homophily, contribution).
Page 3: Methods - Population and Sample, Box Scores Database, Table 1, Analysis start (hot hitting statistics, BA definition, microstreaks, Q definition start, illustration).
Page 4: Analysis cont. (Q illustration cont., hypothesis tests, TBA/TQ definitions, bootstrap CIs, Efron, percentile method, B=2000, simpleboot, steps 1-4).
Page 5: Results start (Fig 3 TBA CI (0.0016,0.020) mean 0.011; Fig 4 TQ CI (0.0157,0.047) mean 0.032). Discussion start.
Page 6: Discussion cont. (reject null, latent factors, batting order position Figs 5-6, streak recognition delay).
Page 7: Table 2 recognition delay, opposing pitching quality, overall team skill (mean finish 3.2/6.03).
Page 8: Mechanisms of contagion (action induction, mirror neurons, Lee golf), concluding remarks, Table 3 streak batters.
Page 9: Supporting info, acknowledgments, author contributions, references.

Wait, looking at the text markers:
- After abstract, page 1 header appears.
- Then "PLOS ONE ... December 2012 ... 1" then "Hitting Is Contagious in Baseball" - this suggests page 1.
- Then later "PLOS ONE ... 2" then title again - page 2.
- Then "PLOS ONE ... 3" - page 3.
- Then "PLOS ONE ... 4" - page 4.
- Then "PLOS ONE ... 5" - page 5.
- Then "PLOS ONE ... 6" - page 6.
- Then "PLOS ONE ... 7" - page 7.
- Then "PLOS ONE ... 8" - page 8.
- Then "PLOS ONE ... 9" - page 9.

I need to cite [PAGE N] markers. I'll assign based on the visible page numbers in the source text.

Now let's construct each section.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit.
- Derive the statistical model: BA = H/AB, treatment vs control same individuals, paired design reducing selection bias.
- Bootstrap percentile method: B=2000, alpha=0.05, empirical percentiles.
- Compute effect sizes: TBA = 0.011 (1.1 percentage points? Wait, text says 11 percentage points and CI (0.0016, 0.020). 0.011 = 1.1 percentage points if BA is proportion. But text says "1:6 to 20 percentage points" (OCR for 1.6 to 20 percentage points?) and mean difference increased 11:1 points (11.1 points?). Actually text says "Mean BA for the treatment group was found to be 1:6 to 20 percentage points higher during hot streaks (mean difference increased 11:1 points)". This is OCR artifact. Likely 1.6 to 20 percentage points? Or 0.016 to 0.020? CI is (0.0016, 0.020). Mean difference 0.011 = 1.1 percentage points if BA scale 0-1. But they say percentage points. If BA .250 to .261 that's 11 points (where 1 point = 0.001). In baseball, "points" of BA usually means 0.001. So 0.011 = 11 points. CI (0.0016, 0.020) = 1.6 to 20 points. Yes. So 1.6 to 20 points, mean 11 points. Good.
- Q: TQ = 0.032 = 32 points. CI (0.0157, 0.047) = 15.7 to 47 points.
- Delayed recognition: Dg>=1 kills BA significance; Q robust to Dg=5 but not Dg=7. This implies the BA effect is contemporaneous/recognition-dependent; Q captures persistence/density and survives short latency.
- Gray zones: causal inference impossible from observational data; homophily vs influence confounding (Shalizi & Thomas); lineup position ruled out but not perfectly (LOESS with high variance); team skill ruled out via standings but streak teams mean finish 3.2/6.03 (slightly worse than middle); opposing pitching quality not analyzed; streak recognition delay assumes immediate recognition which is unrealistic (media attention after 5-10 games); small n per streak (#CL as low as 3-9), aggregate n=151 but clustered by streak (28 clusters), potential pseudoreplication/intrastrat correlation not addressed; bootstrap assumes exchangeability within groups; streaks are non-stationary; selection bias from threshold AB/game > 2; surviving streaks (only successful 30+ game streaks) are a selected sample; no correction for multiple comparisons across 28 streaks or two statistics; Table 3 individual streak heterogeneity (DBA ranges 0.0389 to 0.1654; DQ 0.0221 to 0.3488) suggests high variance, some streaks negative? No, all positive but variable.
- Breakdown regimes: If recognition delay Dg >= 1 for BA, CI includes zero -> H0 not rejected. If Dg=7 for Q, TQ=0.000 -> fail. If AB/game threshold changes, core lineup composition changes. If streak definition changes (L >= 30 only), generalizability to shorter streaks unknown.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define BA^i = H^i / AB^i.
- Microstreak heat: q_k = l_k * BA^i_k (if hits, else 0). Units: games * (hits/at-bat) = dimensionless? BA is dimensionless ratio, l_k is games, so q_k has units of games? Actually Q is an index, dimensionless composite. Need to state units carefully.
- Overall Q: normalized sum over K microstreaks over interval L. Q = (1/L) * sum_{k=1}^K q_k ? Or similar. The text shows Eqn 3 but not rendered. I'll reconstruct with assumptions and state singularity: if l_k=0 or no hits, q_k=0; if L=0 undefined.
- TBA = mean(BA_treatment) - mean(BA_control). Units: proportion (or "points" where 1 point = 0.001 BA).
- TQ = mean(Q_treatment) - mean(Q_control).
- Bootstrap: resample with replacement nt, nc; compute statistic; B=2000; percentile CI = [2.5th, 97.5th] empirical quantiles.
- Hypothesis: H0: Delta = 0 vs HA: Delta != 0 (or >0? Text says no difference vs contagious; likely two-sided but effect positive). Reject at alpha=0.05 if 0 not in CI.
- Delayed recognition operator: Dg in {0,1,3,5,7}; treatment window shifted by Dg games; effect ends at streak end.
- Table 2 values.
- Table 3 values ranges.
- Citations: [PAGE 3] for BA definition, Q; [PAGE 4] for hypothesis tests and bootstrap; [PAGE 5] for results CIs; [PAGE 6] for delay analysis; [PAGE 7] for Table 2 and team skill; [PAGE 8] for Table 3 and mechanisms; [PAGE 1] for abstract and streaks count; [PAGE 2] for homophily.

RETROCAUSAL_GENEALOGY:
- Historical lineage: Gilovich et al. 1985 hot hand (random sequences misperception); Bar-Eli 2006 review; Albright 1993 baseball streakiness (randomness); Albert 2008 consistent-p model; Quintana 2008 Bayesian semi-parametric; epidemiological causality (Surgeon General 1964; Hill 1965; Parascandola 2006); emotional contagion (Hatfield 1993; Barsade 2002); sports contagion (Moll soccer; Totterdell cricket; Lee golf); mirror neurons (Rizzolatti 2002); observational learning (Cross 2009); action induction (Gray & Beilock 2011). Social networks homophily/contagion confounding (Shalizi & Thomas 2011).
- Multi-week traps: The "hot hand" fallacy vs actual streakiness; streak recognition latency (5-10 games media attention) means effect may be detected after the fact; if one bets on "contagion" mid-streak, by the time it's statistically identifiable the streak may be near termination; selection bias toward completed long streaks (survivor bias); the 30-game threshold is arbitrary and rare (46 in Modern Era), so small-n inference; retroactive designation of treatment window creates look-ahead bias if streak endpoint known ex ante.
- Temporality issue: Hill's criterion; cause must precede effect; but recognition delay means teammates may not know early, so BA effect disappears with Dg>=1, Q persists to Dg=5 but dies at Dg=7. This suggests a ~week-long window of social transduction.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under pressure (streak continuation), hitters may regress to mechanistic habits or, alternatively, emulate the streak hitter (action induction). Teammates observe hot hitter; mirror neuron system activates; implicit imitation of approach, timing, pitch selection.
- Counter-trap: The belief that contagion is real may be a homophily artifact or managerial lineup construction (better hitters earlier, more PAs). However, study controls for same individuals and lineup position (Figs 5-6). Still, unobserved covariates (pitching quality, park, opponent) remain.
- Clock: Streak duration L >= 30; recognition latency Dg up to 7 games; BA effect is immediate (dies at Dg=1), Q effect lasts to Dg=5 but not 7. This defines a temporal clock: contagion window is roughly 1 week; beyond 7 days post-streak onset without recognition, signal decays. If streak is ongoing and unrecognized for >1 game, BA-based inference fails; Q-based inference survives up to ~5 games but collapses by 7.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Baseball physics (ball-bat collision, exit velocity, launch angle) unaffected by teammate's streak. No direct physical transmission. Veto: any claimed physical mechanism (e.g., altered ball liveliness) is invalid because same game conditions, same ball, same park factors within a given game. Weather/veto: not directly studied, but box scores include home/away; park effects not controlled beyond league-year stratification.
- Biomechanical layer: Swing mechanics are individual; mirror neuron/observational learning may alter approach but not gross biomechanics acutely. Veto: no evidence of swing redesign mid-streak; data are aggregate BA/Q, not kinematic.
- Weather veto: Not in source; cannot claim weather effects. State absence of data.
- Statistical veto: Clustered data (28 streaks) with n=151 aggregate but not independent; bootstrap resamples individuals but ignores streak-level clustering -> potential underestimation of variance; if intra-class correlation >0, CI too narrow. This is a veto on strong causal claims.
- Latent variable veto: Opposing pitching quality not measured; team skill ruled out only by division finish (mean 3.2/6.03); batting order ruled out by LOESS but high variance; recognition delay modeled ex post.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR (Reinforcement Learning Verifiable Reward? Or just counterfactual veto scenarios). "RLVR_COUNTERFACTUAL_VETOES" likely means counterfactual scenarios that would veto the hypothesis. Provide 3 scenarios with predictions.
1. Counterfactual: Randomly permute streak assignment dates among core lineups while preserving team-season structure. Prediction: Bootstrap CI for TBA/TQ should include zero; observed effect (TBA=0.011, TQ=0.032) should fall outside permuted null distribution <5% of the time. If it doesn't, contagion claim is vetoed.
2. Counterfactual: Extend recognition delay to Dg=14 for Q. Prediction: Based on Dg=7 yielding TQ=0.000 and fail to reject, Dg=14 should also fail (CI includes zero). If significance returns at Dg=14, model misspecification/non-monotonic latency is indicated, vetoing simple contagion clock.
3. Counterfactual: Restrict to streaks where streak hitter's own BA during streak <= .250 (weak "hot" streak by BA but still 30 games with hit). Prediction: If contagion is driven by perceived hotness/emotional contagion rather than mere streak length, effect should attenuate or vanish; TBA/TQ CIs should include zero. If effect remains identical, the driver is not "hotness" but streak duration/attention, vetoing psychological contagion mechanism.
Alternatively use individual streak heterogeneity: Counterfactual: Exclude top 5 streaks by DQ. Prediction: Aggregate TQ should drop below significance if driven by outliers (e.g., W. Davis DQ=0.3488, G. Brett 0.3332, M. Alou 0.3384). Given n=151 and 28 clusters, removal of 5 streaks may or may not veto; but we can state prediction.
I'll write these as formal veto scenarios with pass/fail criteria and predictions.

Need to ensure no betting lines. No spreads, totals, moneylines, odds. Avoid words like "spread", "moneyline", "total", "odds". Use probability, significance, confidence intervals instead.

Need >=1000 words total. I'll aim for substantial length in each section.

Need verbatim quotes and exact [PAGE N] markers. I'll quote short phrases and cite page numbers.

Let's draft carefully.

I need to be careful: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include quotes like [PAGE 3] and perhaps quote text. Since the markdown doesn't have explicit page break markers but has page numbers in headers, I'll reference them as [PAGE 3] etc.

Let's structure:

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

Word count: I'll write generously.

Let's write.

THINK_TRACE content:
- Start with the study design: retrospective box scores, 28 streaks L>=30, 1945-2011, 4496 observations.
- Derivation of BA and Q.
- Treatment/control same individuals: paired design.
- Bootstrap mechanics.
- Results and CIs.
- Delayed recognition analysis: multi-hop from Dg to CI inclusion.
- Gray-zone audit: clustering, selection, latent variables, causal limits.

I need to include verbatim quotes. For example:
- Page 3: "The batting average, the ratio of number of hits H to at-bats AB, is the most widely understood and fundamental measure of hit production by a player."
- Page 4: "The null hypothesis H0 assumed no difference between groups. In this investigation, the interpretation of the null hypothesis was that hitting is not contagious."
- Page 5: "The estimated limits of the 95% confidence interval for this statistic are (0:0016,0:020) around a mean difference of TBA~0:011."
- Page 6: "For the BA statistic, a recognition time delay of any number of games results in failure to reject H0 at the a~0:05 significance level."
- Page 7: "The mean finishing position for the streak teams was 3:2 out of 6:03 teams/division..."
- Page 2: "Under social influence (or contagion), The diffusion of behaviors corresponds to the idea of contagion... Homophily, on the other hand, suggests the formation of social connections due to pre-existing similar attributes among individuals."

Now SOURCE_OPERATORS_AND_EQUATIONS:
Formal LaTeX. Define variables:
- H^i: hits for player i; AB^i: at-bats.
- BA^i = H^i / AB^i.
- Microstreak k: run length l_k in consecutive games with H >= 1.
- q_k^i = l_k * BA^i_k if l_k > 0, else 0.
- Q^i = (1/L) * sum_{k=1}^K q_k^i (normalized by streak length L; assumption from text "compiled and normalized as").
- TBA = (1/n_t) sum BA_t - (1/n_c) sum BA_c.
- TQ analogous.
- Bootstrap: draw resamples with replacement; B=2000; percentile CI = [Q_{0.025}, Q_{0.975}].
- Units: BA dimensionless proportion; "points" = 10^-3 BA units. Q index units arbitrary composite (games * proportion), normalized by L -> proportion-like? Actually q_k = l_k * BA has units games. Dividing by L (games) yields dimensionless. So Q dimensionless.
- Significance: alpha = 0.05; reject H0 if 0 notin CI.
- Breakdown/singularity: L=0 undefined; l_k=0 => q_k=0; AB=0 => BA undefined (excluded by AB/game > 2 threshold); recognition delay Dg such that shifted window empty or overlaps termination.
- Table 2 numerical operator: Dg mapping.

RETROCAUSAL_GENEALOGY:
- Cite Gilovich, Bar-Eli, Albright, Albert, Quintana, Surgeon General, Hill, Hatfield, Barsade, Moll, Totterdell, Lee, Rizzolatti, Cross, Gray & Beilock, Shalizi & Thomas.
- Multi-week traps: survivor bias (only 30+ game streaks), recognition latency (media after 5-10 games), retroactive treatment window assignment, clock of effect decay (BA dies at Dg=1, Q at Dg=7).

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression vs action induction; mirror neuron simulation; counter-trap (homophily/lineup); clock (Dg windows).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: same ball, park, pitcher-batter dyad not independent; no physical contagion vector.
- Biomechanical: no swing data; mirror neuron plausible but unmeasured.
- Weather: absent from source; cannot adjudicate.
- Statistical: clustering veto; n=151 aggregate but 28 clusters; bootstrap ignores cluster structure; multiple testing (2 statistics x 5 delays = 10 tests) without correction; selection threshold AB/game > 2.
- Verdict: statistical contagion signal exists under assumptions; causal claim vetoed by latent confounding and clustered design.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Permuted streak labels. Prediction: Null CI contains observed T statistic; effect size falls within central 95% of permutation distribution. Veto if p_perm > 0.05.
- Scenario 2: Dg=14 extension for Q. Prediction: CI includes zero; TQ ~ 0. If significance reappears, non-stationary latency invalidates simple contagion model.
- Scenario 3: Low-BA streak hitter subset (streak BA <= .250). Prediction: Effect attenuates to zero; CI includes zero. If unchanged, driver is streak length/attention not perceived hotness.
- Scenario 4 maybe: leave-one-streak-out (delete top 3 DQ outliers). Prediction: TQ loses significance. I'll do 3 as requested, maybe add a 4th but user said 3. I'll do exactly 3 to be safe, or say "3 verifiable" and provide 3.

Make sure no betting language. Avoid "odds", "spread", "total", "moneyline". Use probability, confidence, significance.

Let's write now, ensuring word count >=1000. I'll write each section thoroughly.

Check for any accidental toy equations: I won't invent Force/Fatigue. All equations are from paper or formal definitions.

Need to mention exact singularity/breakdown regimes: AB=0 undefined BA; L=0 undefined Q normalization; q_k=0 for hitless microstreaks; bootstrap invalid if samples not exchangeable; Dg such that treatment window has no games post-delay (but streak is 30+ games so Dg up to 7 still leaves games). Also significance breakdown when CI includes 0.

Word count target: Each section 200-300 words, total >1000.

Let's compose carefully with [PAGE N] markers and quotes.

I will now produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The study constructs a retrospective, paired, case–control design around 28 MLB consecutive-game hitting streaks of length L ≥ 30 games from the post-WWII era (1945–2011), comprising 4,496 box-score observations [PAGE 1] and [PAGE 3]. The population is all active MLB players since 1945; the sample is restricted to “core lineup” teammates of the streak batter, defined by average at-bats per game exceeding a threshold t ≈ 2 AB/game [PAGE 3]. Because the same individuals are observed both during the active streak (treatment) and when the streak is inactive (control), the design reduces selection bias relative to independent samples [PAGE 3].

The first formal hop is the construction of the batting average BA^i = H^i / AB^i for each core lineup member i [PAGE 3]. The second hop recognizes that BA alone may be an insufficiently sensitive contagion indicator, so the authors define a batting heat index Q. For the k^th microstreak of player i, with run length l_k in consecutive games with at least one hit, the microstreak heat is q_k^i = l_k · BA^i_k when hits are produced, and q_k^i = 0 for hitless microstreaks [PAGE 3]. The overall index Q^i is compiled and normalized over the streak interval L [PAGE 3]. Thus Q integrates both persistence (run length) and density (BA during hot bursts), whereas BA is a simple ratio.

The third hop is the two-sample group-mean difference operator. TBA = mean(BA_treatment) − mean(BA_control) and TQ = mean(Q_treatment) − mean(Q_control) [PAGE 4]. The null hypothesis H0 states no difference between groups (hitting is not contagious); the alternative H_A states a difference exists [PAGE 4]. Significance is assessed nonparametrically using the percentile bootstrap with B = 2,000 resamples drawn with replacement from each group; the 2.5th and 97.5th empirical percentiles define the 95% confidence interval (CI) at α = 0.05 [PAGE 4]. The observed bootstrap results are TBA ≈ 0.011 with 95% CI (0.0016, 0.020), and TQ ≈ 0.032 with 95% CI (0.0157, 0.047) [PAGE 5]. In baseball “points” where 1 point = 10^−3 BA units, these correspond to mean gains of roughly 11 points for BA and 32 points for Q [PAGE 5] and [PAGE 1].

The gray-zone audit begins with the recognition-delay analysis. The authors simulate delayed teammate awareness by shifting the treatment-window onset by Dg ∈ {1, 3, 5, 7} games after the streak actually began, while keeping the termination fixed at the streak’s end [PAGE 6]. For BA, any delay Dg ≥ 1 causes failure to reject H0; even Dg = 1 shifts the bootstrap distribution left enough that zero falls inside the CI [PAGE 6]. For Q, significance persists through Dg = 5 but collapses at Dg = 7, where TQ ≈ 0.000 and H0 is not rejected [PAGE 6] and [PAGE 7], Table 2. This implies a temporal transduction window of roughly one week: BA-level contagion is contemporaneous with recognition, while Q-level microstreak density survives short latency but not a full week of unrecognized streak activity.

Additional gray zones include latent-variable confounding. Batting-order position is examined via LOESS curves and dismissed as an explanatory factor because both groups show the expected decline in BA and Q from top to bottom of the order [PAGE 6]. Overall team skill is ruled out using divisional finish; streak teams averaged 3.2 out of 6.03 teams per division, slightly worse than the middle [PAGE 7]. Opposing pitching quality is acknowledged as potentially important but explicitly excluded from scope [PAGE 7]. The deepest epistemological gray zone is causal identification: the authors concede that rejecting H0 does not prove a direct causal relationship, and they invoke Shalizi & Thomas’s result that influence and latent homophily are generically confounded in observational social-network studies [PAGE 2] and [PAGE 8]. Because the same individuals appear in both treatment and control, the paired structure mitigates selection bias, but the data are clustered by streak (28 clusters, n_t = n_c = 151 aggregate) and the percentile bootstrap resamples individuals without explicit streak-level blocking, which risks underestimating variance if intra-streak correlation is positive.

Breakdown regimes: BA is undefined when AB = 0 (excluded by the AB/game > 2 core-lineup threshold); Q is undefined when L = 0; q_k = 0 for any hitless microstreak; the bootstrap CI collapses to include zero when Dg ≥ 1 for BA or Dg = 7 for Q, which is the exact empirical breakdown of the claimed contagion signal under delayed recognition.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let i index a core-lineup batter, g index a game, and s index one of the 28 streaks with length L_s ≥ 30 games.

Batting average for player i over a specified interval:
\[
\mathrm{BA}^i = \frac{H^i}{AB^i}, \qquad [\text{dimensionless proportion}]
\]
where H^i is hits and AB^i is at-bats. Undefined if AB^i = 0; the study excludes players with average AB/game ≤ 2 [PAGE 3].

Microstreak k for player i is a maximal run of l_k consecutive games with H ≥ 1. Microstreak heat:
\[
q_k^i =
\begin{cases}
l_k \cdot \mathrm{BA}^i_k, & l_k > 0 \text{ and at least one hit in the run},\\
0, & \text{hitless microstreak}.
\end{cases}
\]
Units: l_k is in games; BA is dimensionless; q_k carries composite “game·proportion” units before normalization.

Overall batting heat index over streak interval L, compiled over K microstreaks and normalized (Eqn. 3 in source; exact rendering omitted from markdown but described as normalized over L) [PAGE 3]:
\[
Q^i = \frac{1}{L}\sum_{k=1}^{K} q_k^i \qquad [\text{dimensionless index after normalization by } L].
\]
Breakdown: Q is singular if L = 0; q_k = 0 precludes heat accumulation over hitless stretches, so Q is zero if a player records no microstreaks during L.

Treatment–control contrast statistics (Eqn. 5 and Eqn. 6 in source) [PAGE 4]:
\[
T_{\mathrm{BA}} = \overline{\mathrm{BA}}_{G_t} - \overline{\mathrm{BA}}_{G_c}, \qquad
T_{Q} = \overline{Q}_{G_t} - \overline{Q}_{G_c}.
\]
Units: proportion (reported in “points,” where 1 point = 10^−3).

Hypotheses [PAGE 4]:
\[
H_0: \Delta = 0 \quad \text{vs.} \quad H_A: \Delta \neq 0,
\]
where \Delta \in \{T_{\mathrm{BA}}, T_Q\}. Rejection at \alpha = 0.05 occurs when 0 \notin 95\% CI.

Bootstrap percentile operator [PAGE 4]: draw distinct resamples of size n_t = n_c = 151 with replacement from treatment and control; compute T^*(b) for b = 1,\dots,B with B = 2,000; the 95% CI is [Q_{0.025}(T^*), Q_{0.975}(T^*)]. Assumes exchangeability within groups and ignores cross-streak clustering.

Empirical results [PAGE 5]:
\[
T_{\mathrm{BA}} \approx 0.011,\quad 95\%\text{ CI} = (0.0016,\; 0.020);
\]
\[
T_Q \approx 0.032,\quad 95\%\text{ CI} = (0.0157,\; 0.047).
\]
Both intervals exclude 0, so H0 is rejected for both statistics at \alpha = 0.05 [PAGE 5].

Delayed-recognition operator [PAGE 6] and [PAGE 7], Table 2: shift treatment onset by Dg games after streak start; treatment ends at streak termination. Results:
\[
\begin{array}{c|c|c|c|c}
Dg & \overline{T}_{\mathrm{BA}} & \text{Reject }H_0? & \overline{T}_{Q} & \text{Reject }H_0?\\ \hline
0 & 0.011 & Y & 0.032 & Y\\
1 & 0.009 & N & 0.025 & Y\\
3 & 0.005 & N & 0.018 & Y\\
5 & 0.005 & N & 0.018 & Y\\
7 & 0.000 & N & 0.011 & N
\end{array}
\]
Singularity/breakdown: for BA, any Dg ≥ 1 moves the CI to include 0; for Q, Dg = 7 yields \overline{T}_Q \approx 0.000 and failure to reject, defining an approximate one-week upper bound on the detectable contagion window under this model.

Latent-variable controls [PAGE 6] and [PAGE 7]: batting-order position modeled via LOESS; team skill proxied by mean division finish 3.2/6.03; opposing pitching quality not modeled due to conditional dependence of hitting and pitching.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage extends backward through multiple, occasionally contradictory, research programs. On the statistical side, it descends from the “hot hand” debate initiated by Gilovich, Vallone, and Tversky (1985), who argued that success in basketball is independent of prior shots and that streak perception is a cognitive misperception of random sequences [PAGE 1]. Bar-Eli et al. (2006) reviewed the broader sports literature and found most empirical hot-hand work aligned with that independence conclusion, although simulation studies suggested non-stationarity in success rates [PAGE 1]. In baseball specifically, Albright (1993) used runs tests and logistic regression on four years of MLB data and concluded batting is better explained by randomness than by objective streakiness [PAGE 1]. Albert (2008) modeled each at-bat as a constant-probability Bernoulli trial and found the consistent-p model explained most intra-seasonal streaky variation [PAGE 1]. Quintana et al. (2008) used Bayesian semi-parametric models over four seasons and found no season-to-season persistence in individual streakiness, identifying situational covariates such as outs, runners on base, home field, and opposing pitcher ERA instead [PAGE 1].

The contagion framework imports epidemiological causal criteria from the 1964 Surgeon General’s report on smoking and lung cancer, as operationalized by Hill (1965): consistency, strength of association, specificity, temporality, and coherence [PAGE 2]. Parascandola et al. (2006) observed that in practice, strength and coherence dominate causal inference while temporality and specificity are often neglected [PAGE 2]. Bock et al. explicitly grapple with temporality: if teammates must “notice” the streak before performance changes, then cause must precede effect, yet media attention typically accrues only after 5–10 games of a streak [PAGE 6].

The psychological lineage includes emotional contagion (Hatfield, Cacioppo, & Rapson, 1993), group mood propagation (Barsade, 2002), soccer penalty-shootout celebration effects (Moll et al., 2010), cricket “mood linkage” (Totterdell, 2000), and positive contagion in golf via equipment belief (Lee et al., 2011) [PAGE 2]. Neurobiologically, the paper cites mirror-neuron research (Rizzolatti et al., 2002) and observational-learning neural substrates (Cross et al., 2009), culminating in Gray and Beilock’s (2011) “action induction” mechanism—observation of a hot hitter improving the observer’s batting [PAGE 2], [PAGE 5], and [PAGE 8].

The critical counter-lineage is Shalizi and Thomas (2011), who demonstrate that influence and latent homophily are generically confounded in observational network studies [PAGE 2]. Bock et al. acknowledge this but argue the baseball setting differs because lineups are manager-controlled rather than self-organized, making homophily-vs-influence tests inapplicable [PAGE 2]. This leaves an unclosed causal loop: better hitters may be clustered by team construction, and streak occurrence may correlate with unobserved opponent or park factors.

Multi-week traps embedded in this genealogy: (1) Survivor bias—only 46 streaks of 30+ games exist in the Modern Era (1901–present), and the sample conditions on streaks already completed, so inference does not generalize to ongoing or shorter streaks [PAGE 1]; (2) Recognition latency—by the time a streak is statistically visible and socially recognized, 5–10 games may have elapsed, meaning the BA contagion effect is already statistically dead (Dg ≥ 1 fails to reject H0) [PAGE 6]; (3) Retroactive windowing—treatment and control periods are defined after knowing the streak’s start and end dates, introducing look-ahead bias if a model were applied prospectively; (4) Clock decay—Q survives to Dg = 5 but not Dg = 7, so any decision rule predicated on “hot teammate” must operate within roughly one week of streak onset or the signal is lost [PAGE 6] and [PAGE 7].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here concerns what teammates believe about the streak hitter, what they infer about their own hitting, and how those beliefs recursively alter behavior under crisis conditions. When a teammate enters a 30+ game hitting streak, the streak hitter becomes a high-salience model. Under the action-induction account (Gray & Beilock, 2011), observers automatically simulate the recently observed actions of the hot hitter; mirror-neuron resonance (Rizzolatti et al., 2002) and observational learning (Cross et al., 2009) provide a plausible sensorimotor pathway by which a batter might adopt timing, pitch recognition, or approach tendencies associated with the streak hitter’s success [PAGE 2], [PAGE 8]. This is not conscious imitation of mechanics but a low-level transduction of observed performance into altered motor preparation.

Crisis habit regression operates in the opposite direction. A hitter in a slump or under pressure to maintain a streak may regress to over-learned, rigid swing habits or, conversely, may become more exploratory. If teammates see the streak hitter succeed repeatedly, their own crisis-response hierarchy shifts from defensive, out-avoidance habits toward approach-oriented habits. The data show BA improves by roughly 11 points only when treatment is recognized immediately (Dg = 0); a one-game recognition delay eliminates BA significance [PAGE 6]. This suggests the BA-level effect is tightly coupled to the moment of social recognition, consistent with a rapid, automatic theory-of-mind update: “he is hot; therefore the situation rewards aggression.” The heat index Q, which captures microstreak density and persistence, survives recognition delays up to Dg = 5 but not Dg = 7 [PAGE 6] and [PAGE 7]. Q therefore indexes a slower, more durable consolidation of hot-hitting behavior—perhaps repeated observation over several games embeds the approach change more deeply—whereas BA reflects an immediate, fragile expectancy effect.

The counter-trap is that this entire recursive loop may be epiphenomenal. If the manager constructs lineups so that more productive hitters bat earlier and receive more plate appearances, and if the streak hitter happens to bat in a high-leverage position, then teammates’ improvements could reflect lineup construction, opposing-pitcher quality, or park factors rather than social contagion. The authors test batting-order position with LOESS curves and find no differential pattern between treatment and control [PAGE 6], and they rule out overall team skill via divisional finish (mean 3.2/6.03) [PAGE 7]. However, they explicitly exclude opposing pitching quality from scope [PAGE 7], and Shalizi & Thomas’s homophily/independence confound remains logically possible even in manager-assigned networks because the manager may assign positions based on unobserved matchup expectations [PAGE 2].

The clock imposes a hard boundary on the recursive theory: the contagion window is approximately one week. Beyond Dg = 7, Q no longer rejects H0 (TQ ≈ 0.000) [PAGE 7]. Any model of teammate inference that assumes a season-long or streak-long social influence is falsified by the delay analysis; the effect is transient and recognition-gated. A prospective theory-of-mind model must therefore treat streak awareness as a time-limited state variable with a half-life of roughly five to seven games, after which the behavioral cascade reverts to baseline unless re-triggered by new streak events.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The source contains no physics of ball–bat collision, exit velocity, launch angle, or atmospheric effects. Because all observations occur within actual MLB games under standard equipment rules, there is no physical vector by which one batter’s hit changes the ball, bat, or strike zone for a teammate. Any claim of physical contagion (e.g., altered ball liveliness transmitted through the dugout) is vetoed by the shared-game condition; the only physical layer variable present is game location (home/away), which is not explicitly modeled beyond league-year stratification intended to mitigate strike-zone differences [PAGE 3]. Weather is absent from the source text entirely; no temperature, wind, humidity, or precipitation covariates appear, so no weather veto can be confirmed or denied from this document.

Biomechanical layer: Mirror-neuron and action-induction mechanisms are neurobiologically plausible but unmeasured. The study uses only box-score aggregates (BA, Q); no swing kinematics, bat speed, or eye-tracking data exist in the source. Therefore a biomechanical veto is provisional: the data cannot confirm that teammates physically imitate the streak hitter’s swing, but they also cannot rule out subtle approach changes (pitch selection, timing) that operate below the resolution of BA and Q. Because Q is designed to capture microstreak persistence and density [PAGE 3], it is more sensitive to behavioral consolidation than BA, yet both remain outcome statistics, not process measures.

Weather veto: Not present in source. The document does not report weather data, park factors beyond league stratification, or day/night effects. Any causal claim that attributes the BA/Q improvement to weather-driven homogeneous conditions (e.g., all treatment games occurring in warm weather) cannot be evaluated and must be treated as an unexamined latent confounder.

Statistical vetoes: (1) Clustered design—n_t = n_c = 151 is an aggregate across 28 streaks; individual players are nested within streak teams. The percentile bootstrap resamples individuals with replacement but does not appear to block by streak [PAGE 4]. If intra-streak correlation in BA or Q is positive, the nominal 95% CI is too narrow and the Type I error rate exceeds α = 0.05. (2) Selection threshold—the core-lineup criterion (average AB/game > 2) excludes weaker hitters and may induce collider bias if streak status and playing time are jointly determined by unobserved team quality [PAGE 3]. (3) Multiple comparisons—two primary statistics (BA, Q) plus five recognition-delay conditions (Dg ∈ {0,1,3,5,7}) produce ten hypothesis tests without reported familywise correction [PAGE 6] and [PAGE 7]. (4) Multiple testing across 28 individual streaks in Table 3 shows heterogeneous DBA (0.0389 to 0.1654) and DQ (0.0221 to 0.3488), indicating the aggregate effect may be driven by a subset of streaks [PAGE 8].

Verdict: The statistical contagion signal (BA 11 points; Q 32 points; both CIs excluding zero at α = 0.05) is real under the study’s assumptions [PAGE 5], but the causal claim is vetoed at the statistical layer by unblocked clustering and at the latent-variable layer by unmeasured pitching quality and homophily. The recognition-delay results further constrain the effect to a sub-week window, undermining any season-long contagion narrative.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios. Each specifies an intervention, a pass/fail decision rule, and a prediction grounded in the source statistics.

Veto Scenario 1 — Permuted streak-label counterfactual.
Intervention: Randomly permute the assignment of “streak active” versus “streak inactive” dates among core-lineup players within each team-season, preserving the total number of treatment and control observations per streak but destroying the temporal alignment with the actual hitting streak. Recompute TBA and TQ with B = 2,000 bootstrap replicates and construct 95% percentile CIs.
Decision rule: Veto the contagion claim if the observed statistics (TBA ≈ 0.011; TQ ≈ 0.032) fall within the central 95% of the permuted null distribution, or if the permuted CI for either statistic includes zero at a rate exceeding 5% across repeated permutations.
Prediction: Under the null of no contagion, permuted CIs should center near zero; the observed TBA = 0.011 (CI 0.0016–0.020) and TQ = 0.032 (CI 0.0157–0.047) [PAGE 5] should lie in the extreme tails (< 2.5% or > 97.5% percentile) of the null. If they do not, the observed effect is attributable to exchangeable within-team variance rather than streak timing.

Veto Scenario 2 — Extended recognition-delay counterfactual (Q statistic).
Intervention: Extend the delayed-recognition operator beyond the source’s maximum Dg = 7 to Dg = 14 games, maintaining the rule that treatment ends at streak termination [PAGE 6] and [PAGE 7], Table 2. Recompute TQ and its 95% bootstrap CI.
Decision rule: Veto the simple one-week contagion clock if H0 is rejected at Dg = 14 (TQ CI excludes zero), because that would imply a non-monotonic or re-emergent latency structure inconsistent with the observed decay from Dg = 5 (reject) to Dg = 7 (fail to reject, TQ ≈ 0.000).
Prediction: Based on the monotonic decay in Table 2 (TQ: 0.032 at Dg = 0; 0.025 at Dg = 1; 0.018 at Dg = 3 and 5; 0.000 at Dg = 7) [PAGE 7], TQ at Dg = 14 should be approximately zero with a CI including zero. A re-emergence of significance at Dg = 14 would veto the transient-transduction model and suggest model misspecification.

Veto Scenario 3 — Low-“hotness” streak-hitter counterfactual.
Intervention: Restrict the sample to streaks in which the streak hitter’s own BA during the streak is at or below .250 (a “weak” hot streak by conventional BA standards but still satisfying L ≥ 30 games with a hit in each game). Recompute aggregate TBA and TQ for teammates during those streaks only.
Decision rule: Veto the psychological-contagion mechanism (action induction driven by perceived hotness) if the restricted-sample CIs for TBA and TQ include zero or if effect sizes drop by more than 50% relative to the full-sample estimates (TBA ≈ 0.011; TQ ≈ 0.032) [PAGE 5].
Prediction: If contagion is driven by the perception that the teammate is “hot,” weak-BA streaks should generate attenuated or null effects because teammates have less basis to infer a transmissible hot hand. If, instead, the effect remains at roughly 11 BA points and 32 Q points, the driver is streak duration/attention rather than perceived hitting quality, vetoing the Gray & Beilock action-induction account as the primary explanation [PAGE 2] and [PAGE 8].

Additional implied boundary from Table 3: Individual-streak heterogeneity is substantial (DQ ranges from 0.0221 for Pujols to 0.3488 for Davis; DBA ranges from 0.0389 for Pujols to 0.1654 for Davis) [PAGE 8]. A leave-one-out sensitivity analysis removing the top three DQ outliers (Davis, Alou, Brett) would test whether the aggregate Q effect is outlier-driven; prediction is that TQ would attenuate materially if those streaks dominate the bootstrap mean.
</RLVR_COUNTERFACTUAL_VETOES><THINK_TRACE>
The study constructs a retrospective, paired, case–control design around 28 MLB consecutive-game hitting streaks of length L ≥ 30 games from the post-WWII era (1945–2011), comprising 4,496 box-score observations [PAGE 1] and [PAGE 3]. The population is all active MLB players since 1945; the sample is restricted to “core lineup” teammates of the streak batter, defined by average at-bats per game exceeding a threshold t ≈ 2 AB/game [PAGE 3]. Because the same individuals are observed both during the active streak (treatment) and when the streak is inactive (control), the design reduces selection bias relative to independent samples [PAGE 3].

The first formal hop is the construction of the batting average BA^i = H^i / AB^i for each core lineup member i [PAGE 3]. The second hop recognizes that BA alone may be an insufficiently sensitive contagion indicator, so the authors define a batting heat index Q. For the k^th microstreak of player i, with run length l_k in consecutive games with at least one hit, the microstreak heat is q_k^i = l_k · BA^i_k when hits are produced, and q_k^i = 0 for hitless microstreaks [PAGE 3]. The overall index Q^i is compiled and normalized over the streak interval L [PAGE 3]. Thus Q integrates both persistence (run length) and density (BA during hot bursts), whereas BA is a simple ratio.

The third hop is the two-sample group-mean difference operator. TBA = mean(BA_treatment) − mean(BA_control) and TQ = mean(Q_treatment) − mean(Q_control) [PAGE 4]. The null hypothesis H0 states no difference between groups (hitting is not contagious); the alternative H_A states a difference exists [PAGE 4]. Significance is assessed nonparametrically using the percentile bootstrap with B = 2,000 resamples drawn with replacement from each group; the 2.5th and 97.5th empirical percentiles define the 95% confidence interval (CI) at α = 0.05 [PAGE 4]. The observed bootstrap results are TBA ≈ 0.011 with 95% CI (0.0016, 0.020), and TQ ≈ 0.032 with 95% CI (0.0157, 0.047) [PAGE 5]. In baseball “points” where 1 point = 10^−3 BA units, these correspond to mean gains of roughly 11 points for BA and 32 points for Q [PAGE 5] and [PAGE 1].

The gray-zone audit begins with the recognition-delay analysis. The authors simulate delayed teammate awareness by shifting the treatment-window onset by Dg ∈ {1, 3, 5, 7} games after the streak actually began, while keeping the termination fixed at the streak’s end [PAGE 6]. For BA, any delay Dg ≥ 1 causes failure to reject H0; even Dg = 1 shifts the bootstrap distribution left enough that zero falls inside the CI [PAGE 6]. For Q, significance persists through Dg = 5 but collapses at Dg = 7, where TQ ≈ 0.000 and H0 is not rejected [PAGE 6] and [PAGE 7], Table 2. This implies a temporal transduction window of roughly one week: BA-level contagion is contemporaneous with recognition, while Q-level microstreak density survives short latency but not a full week of unrecognized streak activity.

Additional gray zones include latent-variable confounding. Batting-order position is examined via LOESS curves and dismissed as an explanatory factor because both groups show the expected decline in BA and Q from top to bottom of the order [PAGE 6]. Overall team skill is ruled out using divisional finish; streak teams averaged 3.2 out of 6.03 teams per division, slightly worse than the middle [PAGE 7]. Opposing pitching quality is acknowledged as potentially important but explicitly excluded from scope [PAGE 7]. The deepest epistemological gray zone is causal identification: the authors concede that rejecting H0 does not prove a direct causal relationship, and they invoke Shalizi & Thomas’s result that influence and latent homophily are generically confounded in observational social-network studies [PAGE 2] and [PAGE 8]. Because the same individuals appear in both treatment and control, the paired structure mitigates selection bias, but the data are clustered by streak (28 clusters, n_t = n_c = 151 aggregate) and the percentile bootstrap resamples individuals without explicit streak-level blocking, which risks underestimating variance if intra-streak correlation is positive.

Breakdown regimes: BA is undefined when AB = 0 (excluded by the AB/game > 2 core-lineup threshold); Q is undefined when L = 0; q_k = 0 for any hitless microstreak; the bootstrap CI collapses to include zero when Dg ≥ 1 for BA or Dg = 7 for Q, which is the exact empirical breakdown of the claimed contagion signal under delayed recognition.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let i index a core-lineup batter, g index a game, and s index one of the 28 streaks with length L_s ≥ 30 games.

Batting average for player i over a specified interval:
\[
\mathrm{BA}^i = \frac{H^i}{AB^i}, \qquad [\text{dimensionless proportion}]
\]
where H^i is hits and AB^i is at-bats. Undefined if AB^i = 0; the study excludes players with average AB/game ≤ 2 [PAGE 3].

Microstreak k for player i is a maximal run of l_k consecutive games with H ≥ 1. Microstreak heat:
\[
q_k^i =
\begin{cases}
l_k \cdot \mathrm{BA}^i_k, & l_k > 0 \text{ and at least one hit in the run},\\
0, & \text{hitless microstreak}.
\end{cases}
\]
Units: l_k is in games; BA is dimensionless; q_k carries composite “game·proportion” units before normalization.

Overall batting heat index over streak interval L, compiled over K microstreaks and normalized (Eqn. 3 in source; exact rendering omitted from markdown but described as normalized over L) [PAGE 3]:
\[
Q^i = \frac{1}{L}\sum_{k=1}^{K} q_k^i \qquad [\text{dimensionless index after normalization by } L].
\]
Breakdown: Q is singular if L = 0; q_k = 0 precludes heat accumulation over hitless stretches, so Q is zero if a player records no microstreaks during L.

Treatment–control contrast statistics (Eqn. 5 and Eqn. 6 in source) [PAGE 4]:
\[
T_{\mathrm{BA}} = \overline{\mathrm{BA}}_{G_t} - \overline{\mathrm{BA}}_{G_c}, \qquad
T_{Q} = \overline{Q}_{G_t} - \overline{Q}_{G_c}.
\]
Units: proportion (reported in “points,” where 1 point = 10^−3).

Hypotheses [PAGE 4]:
\[
H_0: \Delta = 0 \quad \text{vs.} \quad H_A: \Delta \neq 0,
\]
where \Delta \in \{T_{\mathrm{BA}}, T_Q\}. Rejection at \alpha = 0.05 occurs when 0 \notin 95\% CI.

Bootstrap percentile operator [PAGE 4]: draw distinct resamples of size n_t = n_c = 151 with replacement from treatment and control; compute T^*(b) for b = 1,\dots,B with B = 2,000; the 95% CI is [Q_{0.025}(T^*), Q_{0.975}(T^*)]. Assumes exchangeability within groups and ignores cross-streak clustering.

Empirical results [PAGE 5]:
\[
T_{\mathrm{BA}} \approx 0.011,\quad 95\%\text{ CI} = (0.0016,\; 0.020);
\]
\[
T_Q \approx 0.032,\quad 95\%\text{ CI} = (0.0157,\; 0.047).
\]
Both intervals exclude 0, so H0 is rejected for both statistics at \alpha = 0.05 [PAGE 5].

Delayed-recognition operator [PAGE 6] and [PAGE 7], Table 2: shift treatment onset by Dg games after streak start; treatment ends at streak termination. Results:
\[
\begin{array}{c|c|c|c|c}
Dg & \overline{T}_{\mathrm{BA}} & \text{Reject }H_0? & \overline{T}_{Q} & \text{Reject }H_0?\\ \hline
0 & 0.011 & Y & 0.032 & Y\\
1 & 0.009 & N & 0.025 & Y\\
3 & 0.005 & N & 0.018 & Y\\
5 & 0.005 & N & 0.018 & Y\\
7 & 0.000 & N & 0.011 & N
\end{array}
\]
Singularity/breakdown: for BA, any Dg ≥ 1 moves the CI to include 0; for Q, Dg = 7 yields \overline{T}_Q \approx 0.000 and failure to reject, defining an approximate one-week upper bound on the detectable contagion window under this model.

Latent-variable controls [PAGE 6] and [PAGE 7]: batting-order position modeled via LOESS; team skill proxied by mean division finish 3.2/6.03; opposing pitching quality not modeled due to conditional dependence of hitting and pitching.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage extends backward through multiple, occasionally contradictory, research programs. On the statistical side, it descends from the “hot hand” debate initiated by Gilovich, Vallone, and Tversky (1985), who argued that success in basketball is independent of prior shots and that streak perception is a cognitive misperception of random sequences [PAGE 1]. Bar-Eli et al. (2006) reviewed the broader sports literature and found most empirical hot-hand work aligned with that independence conclusion, although simulation studies suggested non-stationarity in success rates [PAGE 1]. In baseball specifically, Albright (1993) used runs tests and logistic regression on four years of MLB data and concluded batting is better explained by randomness than by objective streakiness [PAGE 1]. Albert (2008) modeled each at-bat as a constant-probability Bernoulli trial and found the consistent-p model explained most intra-seasonal streaky variation [PAGE 1]. Quintana et al. (2008) used Bayesian semi-parametric models over four seasons and found no season-to-season persistence in individual streakiness, identifying situational covariates such as outs, runners on base, home field, and opposing pitcher ERA instead [PAGE 1].

The contagion framework imports epidemiological causal criteria from the 1964 Surgeon General’s report on smoking and lung cancer, as operationalized by Hill (1965): consistency, strength of association, specificity, temporality, and coherence [PAGE 2]. Parascandola et al. (2006) observed that in practice, strength and coherence dominate causal inference while temporality and specificity are often neglected [PAGE 2]. Bock et al. explicitly grapple with temporality: if teammates must “notice” the streak before performance changes, then cause must precede effect, yet media attention typically accrues only after 5–10 games of a streak [PAGE 6].

The psychological lineage includes emotional contagion (Hatfield, Cacioppo, & Rapson, 1993), group mood propagation (Barsade, 2002), soccer penalty-shootout celebration effects (Moll et al., 2010), cricket “mood linkage” (Totterdell, 2000), and positive contagion in golf via equipment belief (Lee et al., 2011) [PAGE 2]. Neurobiologically, the paper cites mirror-neuron research (Rizzolatti et al., 2002) and observational-learning neural substrates (Cross et al., 2009), culminating in Gray and Beilock’s (2011) “action induction” mechanism—observation of a hot hitter improving the observer’s batting [PAGE 2], [PAGE 5], and [PAGE 8].

The critical counter-lineage is Shalizi and Thomas (2011), who demonstrate that influence and latent homophily are generically confounded in observational network studies [PAGE 2]. Bock et al. acknowledge this but argue the baseball setting differs because lineups are manager-controlled rather than self-organized, making homophily-vs-influence tests inapplicable [PAGE 2]. This leaves an unclosed causal loop: better hitters may be clustered by team construction, and streak occurrence may correlate with unobserved opponent or park factors.

Multi-week traps embedded in this genealogy: (1) Survivor bias—only 46 streaks of 30+ games exist in the Modern Era (1901–present), and the sample conditions on streaks already completed, so inference does not generalize to ongoing or shorter streaks [PAGE 1]; (2) Recognition latency—by the time a streak is statistically visible and socially recognized, 5–10 games may have elapsed, meaning the BA contagion effect is already statistically dead (Dg ≥ 1 fails to reject H0) [PAGE 6]; (3) Retroactive windowing—treatment and control periods are defined after knowing the streak’s start and end dates, introducing look-ahead bias if a model were applied prospectively; (4) Clock decay—Q survives to Dg = 5 but not Dg = 7, so any decision rule predicated on “hot teammate” must operate within roughly one week of streak onset or the signal is lost [PAGE 6] and [PAGE 7].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind here concerns what teammates believe about the streak hitter, what they infer about their own hitting, and how those beliefs recursively alter behavior under crisis conditions. When a teammate enters a 30+ game hitting streak, the streak hitter becomes a high-salience model. Under the action-induction account (Gray & Beilock, 2011), observers automatically simulate the recently observed actions of the hot hitter; mirror-neuron resonance (Rizzolatti et al., 2002) and observational learning (Cross et al., 2009) provide a plausible sensorimotor pathway by which a batter might adopt timing, pitch recognition, or approach tendencies associated with the streak hitter’s success [PAGE 2], [PAGE 8]. This is not conscious imitation of mechanics but a low-level transduction of observed performance into altered motor preparation.

Crisis habit regression operates in the opposite direction. A hitter in a slump or under pressure to maintain a streak may regress to over-learned, rigid swing habits or, conversely, may become more exploratory. If teammates see the streak hitter succeed repeatedly, their own crisis-response hierarchy shifts from defensive, out-avoidance habits toward approach-oriented habits. The data show BA improves by roughly 11 points only when treatment is recognized immediately (Dg = 0); a one-game recognition delay eliminates BA significance [PAGE 6]. This suggests the BA-level effect is tightly coupled to the moment of social recognition, consistent with a rapid, automatic theory-of-mind update: “he is hot; therefore the situation rewards aggression.” The heat index Q, which captures microstreak density and persistence, survives recognition delays up to Dg = 5 but not Dg = 7 [PAGE 6] and [PAGE 7]. Q therefore indexes a slower, more durable consolidation of hot-hitting behavior—perhaps repeated observation over several games embeds the approach change more deeply—whereas BA reflects an immediate, fragile expectancy effect.

The counter-trap is that this entire recursive loop may be epiphenomenal. If the manager constructs lineups so that more productive hitters bat earlier and receive more plate appearances, and if the streak hitter happens to bat in a high-leverage position, then teammates’ improvements could reflect lineup construction, opposing-pitcher quality, or park factors rather than social contagion. The authors test batting-order position with LOESS curves and find no differential pattern between treatment and control [PAGE 6], and they rule out overall team skill via divisional finish (mean 3.2/6.03) [PAGE 7]. However, they explicitly exclude opposing pitching quality from scope [PAGE 7], and Shalizi & Thomas’s homophily/independence confound remains logically possible even in manager-assigned networks because the manager may assign positions based on unobserved matchup expectations [PAGE 2].

The clock imposes a hard boundary on the recursive theory: the contagion window is approximately one week. Beyond Dg = 7, Q no longer rejects H0 (TQ ≈ 0.000) [PAGE 7]. Any model of teammate inference that assumes a season-long or streak-long social influence is falsified by the delay analysis; the effect is transient and recognition-gated. A prospective theory-of-mind model must therefore treat streak awareness as a time-limited state variable with a half-life of roughly five to seven games, after which the behavioral cascade reverts to baseline unless re-triggered by new streak events.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The source contains no physics of ball–bat collision, exit velocity, launch angle, or atmospheric effects. Because all observations occur within actual MLB games under standard equipment rules, there is no physical vector by which one batter’s hit changes the ball, bat, or strike zone for a teammate. Any claim of physical contagion (e.g., altered ball liveliness transmitted through the dugout) is vetoed by the shared-game condition; the only physical layer variable present is game location (home/away), which is not explicitly modeled beyond league-year stratification intended to mitigate strike-zone differences [PAGE 3]. Weather is absent from the source text entirely; no temperature, wind, humidity, or precipitation covariates appear, so no weather veto can be confirmed or denied from this document.

Biomechanical layer: Mirror-neuron and action-induction mechanisms are neurobiologically plausible but unmeasured. The study uses only box-score aggregates (BA, Q); no swing kinematics, bat speed, or eye-tracking data exist in the source. Therefore a biomechanical veto is provisional: the data cannot confirm that teammates physically imitate the streak hitter’s swing, but they also cannot rule out subtle approach changes (pitch selection, timing) that operate below the resolution of BA and Q. Because Q is designed to capture microstreak persistence and density [PAGE 3], it is more sensitive to behavioral consolidation than BA, yet both remain outcome statistics, not process measures.

Weather veto: Not present in source. The document does not report weather data, park factors beyond league stratification, or day/night effects. Any causal claim that attributes the BA/Q improvement to weather-driven homogeneous conditions (e.g., all treatment games occurring in warm weather) cannot be evaluated and must be treated as an unexamined latent confounder.

Statistical vetoes: (1) Clustered design—n_t = n_c = 151 is an aggregate across 28 streaks; individual players are nested within streak teams. The percentile bootstrap resamples individuals with replacement but does not appear to block by streak [PAGE 4]. If intra-streak correlation in BA or Q is positive, the nominal 95% CI is too narrow and the Type I error rate exceeds α = 0.05. (2) Selection threshold—the core-lineup criterion (average AB/game > 2) excludes weaker hit