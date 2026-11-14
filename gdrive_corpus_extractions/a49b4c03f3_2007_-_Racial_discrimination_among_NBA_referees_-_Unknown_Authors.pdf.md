---
source: "2007 - Racial discrimination among NBA referees - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2007"
pages: 24
model: deepseek/deepseek-v4.1-flash-1017
words: 7771
---

<NATIVE_REASONING>
The user wants a deep, multi-section analytical response grounded in the provided source pages (Price & Wolfers 2007, "Racial Discrimination Among NBA Referees"). I must follow strict invariants:

1. No betting lines/odds/spreads/totals/moneylines. I can discuss winning margins, win probabilities, foul rates — these are game outcomes, not betting lines. Must be careful not to phrase anything as a betting recommendation or mention point spreads. The paper discusses "winning margin" as a statistical outcome variable — that's fine, it's not a betting line. But I should avoid saying "spread" or "over/under" etc.

2. Formal LaTeX equations with units, assumptions, singularity/breakdown regimes. Cite [PAGE N] markers and verbatim quotes.

3. >= 1,000 words across the exact XML sections.

Sections required:
<THINK_TRACE> >=400 words deep multi-hop derivation & gray-zone audit
<SOURCE_OPERATORS_AND_EQUATIONS> formal LaTeX, units, page citations, breakdown
<RETROCAUSAL_GENEALOGY> historical/scientific lineage & multi-week traps
<RECURSIVE_THEORY_OF_MIND> crisis habit regression vs counter-trap vs clock
<CROSS_LAYER_VETO_ADJUDICATION> physical/biomechanical/weather veto proof
<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions

Note: This is a sports statistics research paper about referee racial bias — not a sports prediction task per se. The "frontier reasoning foundry" framing suggests I should treat this as a research synthesis with rigorous derivation. The CROSS_LAYER_VETO_ADJUDICATION asks for "physical/biomechanical/weather veto proof" — in this context, I should adapt: referee assignment randomization, biomechanical confounds (height/weight/position), environmental/venue factors (stadium, attendance, home), and other layers that could veto the causal claim. Weather isn't really applicable to indoor NBA, but I can address venue/environment and note the indoor-climate invariance.

I should be careful and accurate with the numbers from the paper. Let me pull key figures:

- 12,263 games; 266,984 player-games (1991/92-2003/04) [PAGE 6]
- Recent update 2004/05-2006/07 seasons
- Players 83% black, referees 68% white [PAGE 3]
- Foul rate black 4.33, white 4.97, diff -0.640*** [PAGE 7]
- Summary stats table page 7
- Randomization table page 8: black starters per team vs # white refs; chi-square p-values mostly high; 1992 p=.03, 1999 p=.07 — flags
- Diff-in-diff page 9: majority white refs: black 4.330 (.008), white 4.954 (.018), diff -0.623*** (.020); majority black refs: black 4.329 (.015), white 5.023 (.032), diff -0.94*** (.036); diff-in-diff 0.070* (.041) p=.084
- Page 10: slope analysis, diff-in-diff 0.182*** (.066) p=.006
- Page 11 recent data: diff-in-diff 0.243** (.116) p=.035; n=71,759
- Page 13: regression specification
- Page 14: main table, coefficient 0.182*** down to 0.188** (0.078) with full FE; R2 up to 0.28
- Page 15: further outcomes: fouls 0.188**, technical 0.016 (0.014), flagrant 0.009 (0.006), minutes -0.403*** (0.155), fouled out 0.002, FT attempts -0.034
- Page 16: FT% placebo +0.4% (0.8), points -0.430* (0.221), steals -0.053, blocks -0.022, turnovers +0.091
- Page 17: indirect effects, IV using 10-game lag
- Page 18: team-level: total effect on fouls 1.911* to 1.671; direct 0.816..., indirect -1.095**; points total -4.094** to -6.287***, direct -0.415..., indirect 3.678***
- Page 19: game-level spec
- Page 20: kernel graphs bandwidth 0.4
- Page 21: probability of winning: -0.139 to -0.226**; margin -4.020* to -6.574***
- Page 22: magnitudes: 15% more playing time to blacks → win 48.6%; all white refs 47.6%, all black refs 51.0%; 3.4% of games could change; race-norming 83% black → 50.5%, 1.8% of games; Szymanski 2003 wage equation: Win% = 0.21 + 0.29*(wage bill ratio)
- Page 23: referee-level: white refs vs black refs distributions
- Page 24: conclusion, IAT next steps

Now let me construct formal equations.

Define foul rate:
R_{i,g} = 48 * F_{i,g} / M_{i,g}  [fouls per 48 minutes], units fouls·(48 min)^{-1}

Baseline DiD:
R_{igrt} = β1 (W_g · B_i) + β2 W_g + β3 B_i + ε
where W_g = fraction of white referees in crew g ∈ {0, 1/3, 2/3, 1}, B_i ∈ {0,1} black indicator.

Estimand: τ = ∂²E[R]/∂W∂B = β1. Units: fouls per 48 min per unit white-referee share.

Note the sign convention: positive β1 means black players' foul rate rises relative to white as white ref share rises — i.e., black players are penalized more (fewer fouls earned? wait). Careful: "fouls" here are personal fouls committed by the player. The paper says "Players earn fewer fouls under own-race referees" [PAGE 12] — meaning black players commit fewer fouls when refs are black. Positive coefficient on Black×%White refs (0.188) means black players commit more fouls when more white refs. Yes: black players' foul rate is lower under black refs.

So β1 ≈ 0.188 fouls per 48 min per unit of white-ref share.

Magnitude: moving from 0% to 100% white refs changes black-white foul differential by 0.182–0.188 fouls/48min. Compare to mean 4.43, SD 3.34.

Standardized effect: 0.188/3.34 = 0.056 SD — small.

Team-level: total effect 2.148** fouls per team-game for a unit change... actually the coefficient is on %Black playing time × %White refs, so per 100 percentage points of black playing time and full white crew: ~2.1 fouls per team-game on a base of 22.4 (SD 4.65). That's ~9.6% of mean. Points: -5.7 per game on 98.4 base.

Win probability: coefficient -0.226 on %White refs × (Black_home − Black_away). With a 0.15 difference and full-white crew: -0.226*0.15 = -0.0339 ≈ 3.4 percentage points. Matches page 22's 3.4%.

Margin: -6.574*0.15 ≈ -0.99 points. Consistent with ~3.4% win prob change.

Szymanski: Win% = 0.21 + 0.29*(wage bill/Ave). So 0.034 win prob ≈ 0.034/0.29 = 0.117 → 11.7% of league average wage bill. That's the financial translation.

Now singularity/breakdown regimes: 
- W_g ∈ {0,1/3,2/3,1} discrete; the linear extrapolation to intermediate values assumes linearity; page 10 shows slope is non-monotone (0.455, 0.064, 0.240) — so linearity is questionable, which is a breakdown of the linear-in-W model.
- %Black playing time is endogenous — IV needed (page 17).
- Perfect collinearity: game fixed effects absorb anything common to both teams; identification comes only from Black×White-ref interaction. If a game had all-black or all-white players, the interaction would be unidentified — a rank-deficiency/singularity regime. Indeed referee fixed effects + game FE + player FE → the interaction term needs within-game variation.
- Small-sample: 668 team-games with 0 white refs (2.7%) → cell is thin; that's near a singularity in the design matrix for crew-composition splits.
- Multiple testing across 9 columns, 24-ish outcomes.

Units: foul rate in fouls per 48 minutes; win probability dimensionless in [0,1]; margin in points; minutes in minutes.

Let me also address the "gray zone audit": the p=.084 vs p=.006 discrepancy (majority-white/majority-black split vs linear slope). The binary split gives marginal significance; the slope gives p=.006. That's a specification-sensitivity gray zone. Also 1992 χ² p=.03 — a randomization failure in one year out of 13; with 13 tests, ~1 expected at 5%.

Also the referee-level analysis page 23: heterogeneous effects across individual referees — suggests the effect isn't a uniform "white referee bias" but driven by a subset.

Also: the placebo FT% (+0.4%, SE 0.8) is a strong falsification — FT% is a purely mechanical act with no referee discretion. Good.

Counter-interpretations: redistribution within team (page 12), omitted referee-style × player-style interactions (addressed partly by player-char × %white refs interactions in column 5-9), player behavior response.

Now: RETROCAUSAL_GENEALOGY — lineage: Becker (1957) taste-based discrimination; Arrow; statistical discrimination (Phelps 1972); audit studies; criminal justice (Donohue & Levitt 2001), Antonovics & Knight (2005) vehicle searches, Abrams/Bertrand/Mullainathan (2005) judicial, Schanzenbach (2005), Stoll/Raphael/Holzer (2004) hiring. Later lineage: the NBA's own rebuttal, and the 2011 "reversal" — I should be careful. There is a well-known follow-up literature. I recall Pope, Price, Wolfers (2018, JPE?) "Awareness reduces racial bias" — which found the bias disappeared after the 2007 publicity, and that it was concentrated in the highest-pressure situations before. Actually: Pope, Price, and Wolfers, "Awareness Reduces Racial Bias" (Management Science 2018). They found the bias fell by roughly two-thirds after the paper's release and the 2007 media attention. Also earlier: a 2010 paper by Gregoriou? Hmm. There's also the critique that the effect was driven by "close calls" and that the original paper's early version vs later published version had a correction. I should be careful about asserting specific facts not on the page. I can frame these as lineage claims with hedging ("the subsequent literature, outside these pages, reports..."), and label confidence. Better: mark clearly as "beyond-page" extrapolation with uncertainty flags. The invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So for the source-grounded claims I cite pages; for lineage I can note it's external knowledge.

Multi-week traps: The "recency/awareness" trap — an effect measured over 1991–2007 may decay once subjects know they're measured (Hawthorne/reflexivity). So any forward extrapolation of the 0.188 coefficient assumes stationarity that is psychologically implausible. That's a key "trap."

RECURSIVE_THEORY_OF_MIND — "crisis habit regression vs counter-trap vs clock." I interpret: model the referee as an agent under time pressure making split-second subjective calls; the recursive layer is how the referee models the player's intent. "Crisis habit regression" = under load, agents regress to automatized (habitual, implicit) classifications rather than deliberative ones — the paper's own framing: "Quick decisions / Subjective evaluation" [PAGE 3]. "Counter-trap" = a player who anticipates bias may adapt (e.g., change aggression) — page 16 checks aggression proxies (steals, blocks, turnovers) and finds none, which counters the player-behavior trap. "Clock" = the decision clock — the 0.5–1 s window of a foul call; also the game clock/score-pressure. Also the season clock: awareness intervention post-2007.

CROSS_LAYER_VETO_ADJUDICATION — layering:
- Layer 1 (physics/geometry): the foul call is a judgment about contact force and displacement; contact mechanics are invariant to race. Veto test: FT% placebo (pure mechanics, no discretionary judgment) shows null → the bias is not in the physical layer.
- Layer 2 (biomechanical): body mass, height, position confound foul rates (centers foul more; black players are 22.2% less likely to be centers, 2.13 in shorter, 11.7 lb lighter [PAGE 7]). Veto check: player characteristics interacted with %white refs in columns 5–9 keep the coefficient at 0.188–0.215 [PAGE 14]. So biomechanics does not veto but the residual could still be style.
- Layer 3 (environment/venue): stadium × black player FE; team×home FE; attendance; out-of-contention [PAGE 14, 21]. Weather: NBA is indoor — climate is a non-operative layer; but travel/back-to-back is a real environmental confound not fully addressed — flag as a residual open channel.
- Layer 4 (institutional/assignment): randomization table [PAGE 8] with two sub-5% years; a veto if assignment were non-random.

I should give a formal "veto" logic: if confounder C satisfies (i) correlated with W_g, (ii) correlated with R conditional on controls, (iii) not a descendant of the treatment, then τ̂ is biased. Provide the omitted-variable bias formula: plim τ̂ = τ + γ·δ where γ is C's effect on R and δ is the coefficient of C on the interaction.

Actually let me do the OVB properly:
Suppose true model R = τ(W·B) + γC + u, and we estimate without C. Then plim τ̂ = τ + γ · Cov(W·B, C)/Var(W·B) = τ + γ·δ.

RLVR_COUNTERFACTUAL_VETOES — 3 verifiable scenarios with predictions. RLVR = reinforcement learning with verifiable rewards — so scenarios should be checkable/falsifiable tests. I'll design three pre-registered counterfactual tests:

1. **Pure-mechanic placebo expansion**: extend the FT% placebo to other referee-discretion-free outcomes (e.g., free-throw percentage, jump-ball outcomes, shot-clock violations? those are judgment). Prediction: null (|β| < 0.003 per unit W). Veto condition: if a nonzero effect emerges in a no-discretion outcome, the whole design is contaminated.

2. **Referee-blindness / awareness intervention (temporal regression discontinuity)**: post-publicity games. Prediction: |τ̂_post| < |τ̂_pre|; specifically the 0.188 coefficient should attenuate by ≥50% under increased monitoring. Veto condition: if unchanged, then the mechanism is not implicit-attitude-driven but something structural (e.g., style).

3. **Crew-composition randomization placebo**: replace %white refs with a random pseudo-treatment (e.g., referee tenure, height, or a permuted race label) and re-estimate. Prediction: τ̂_pseudo = 0 within ±0.05 at 95%. Veto: nonzero pseudo-effect indicates specification mining / overfitting with 9 specifications and 24 outcomes.

Maybe also a fourth: within-player, cross-season reversal using referee crew changes; or a "same-player, different-crew" within-game test exploiting substitution.

Also should give specific numeric predictions and thresholds.

Word counts: I need ≥1000 words total across sections, with THINK_TRACE ≥400. Let me aim for ~1800-2200 words total. Let me write dense, technical prose.

Careful on the betting line invariant: I must not mention spreads/totals/moneylines. The paper discusses "winning margin" — that's a game outcome statistic, not a betting line. I'll refer to it as "realized point differential" or "winning margin (a game outcome, not a market quantity)". I could add a one-line disclaimer that I'm treating margin purely as an ex-post outcome variable. That's fine as long as I don't frame any bet. Actually I'll just not mention markets at all, and maybe explicitly note "no market quantities appear in this analysis."

Let me write.

Structure with XML tags exactly as specified. Note the tags in the prompt: <RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES> — closing tag appears as </RLVR_COUNTERFACTUAL_VETOES>. Yes.

Now write.

THINK_TRACE — deep multi-hop derivation and gray-zone audit, ≥400 words.

Let me draft equation set.

(1) Foul rate functional:
R_{ig} = 48 · F_{ig} / M_{ig}, units: fouls·min⁻¹×48 → "fouls per 48 minutes"; dimensional note: 48 min is the normalization constant, so R has units of min⁻¹·fouls·48min per 48 min... better: R is dimensionless count-rate scaled; formally R = 2880·F/M where M in seconds → fouls per 48 min.

(2) Baseline 2×2:
E[R_{igrt} | W_g, B_i] = α + β1 (W_g B_i) + β2 W_g + β3 B_i

(3) Full spec [PAGE 13]:
R_{igrt} = β1 W_g·B_i + β2 W_g + β3 B_i + β4' (X_i ⊗ W_g) + β5 Z_{gt} + δ_r + η_i + θ_{ty} + ζ_{gt} + ε

where δ_r referee FE (135), η_i player FE (1190), θ team×season (339), player×season (5037), game FE (13,326), game×team (26,647).

(4) DiD estimator:
τ̂_DiD = [R̄_{B,W>1/2} − R̄_{W,W>1/2}] − [R̄_{B,W<1/2} − R̄_{W,W<1/2}] = 0.070 (0.041)

Wait — sign. Page 9: black players majority white refs 4.330, white players 4.954, diff −0.623. Majority black refs: black 4.329, white 5.023, diff −0.94. Difference (Maj White − Maj Black) for black players = 0.001; for white players = −0.069***; DiD = 0.070*. Yes.

(5) Slope version:
τ̂_slope = ∂/∂W [E(R|B=1) − E(R|B=0)] = (−0.022) − (−0.204) = 0.182*** (0.066), p=.006.

(6) Standardized effect size: 0.182/3.34 = 0.0545 SD.

(7) Team-level:
F_{tg} = ... + λ1 (W_g · s_{tg}) + λ2 (W_g · s_{og}) + ...; total = λ1 − λ2 ≈ 2.15 fouls/team-game on mean 22.4 → 9.6%.

Points: −6.287 on 98.4 → −6.4%.

(8) Win probability:
P(win) = ... + κ W_g (s_h − s_a); κ̂ = −0.226 (0.092). ΔP for Δs = 0.15, W=1: −0.0339.

Cross-check with page 22: 48.6% baseline; all-white → 47.6% (Δ −1.0 pp); all-black → 51.0% (Δ +2.4 pp); total swing 3.4 pp. Note: −0.226*0.15 = −3.39pp relative to... yes roughly matches the 3.4 pp swing (from 47.6 to 51.0).

(9) Financial translation [PAGE 22]:
Win% = 0.21 + 0.29·(wage bill ratio)
ΔWin% = 0.034 → Δwage ratio = 0.034/0.29 = 0.117 → 11.7% of league-average wage bill.

(10) OVB:
plim τ̂ = τ + γ_C · δ_C where δ_C = Cov(W·B, C)/Var(W·B).

(11) Singularity/breakdown regimes:
- Rank deficiency when W_g ∈ {0,1} only and game FE included → W·B collinear with B within game if W is constant across all observations of that game; identification requires within-game variation in B and across-game variation in W. Actually with game FE, W_g is absorbed; only interaction survives. If a game's W is 0 or 1, fine. The singularity is when B_i is constant within a team-game — e.g., a lineup of five black players → the within-team contrast vanishes and only cross-team contrast identifies, confounded with team FE.
- Cell sparsity: 668 team-games with zero white refs = 2.7% [PAGE 8]; extrapolation of the slope to W=0 rests on 2.7% of data → high-leverage region.
- Multiple testing: 9 columns × ~20 outcomes ≈ 180 estimates; at α=.05, ~9 false positives expected.
- Linear-in-W misspecification: page 10 slopes 0.455, 0.064, 0.240 are non-monotone → linear model is a smoothed approximation; the "singularity" is the sign flip / non-monotonicity.

Good.

Now write the actual prose. Need verbatim quotes with page markers:
- [PAGE 3] "NBA referees 'are the most ranked, rated, reviewed, statistically analyzed and mentored group of employees of any company in any place in the world.' (David Stern, NBA commissioner)"
- [PAGE 3] "Players: 83% black" / "Referees: 68% white"
- [PAGE 12] "Our fact:" "Players earn fewer fouls under own-race referees"
- [PAGE 12] "Legal interpretation – 'Disparate impact' on black players of hiring mainly white referees (Title VII, Civil Rights Act)"
- [PAGE 3] "Quick decisions" "Subjective evaluation (interpretation of physical contact)"
- [PAGE 9] "Diff-in-diff 0.070* (.041) [p=.084]"
- [PAGE 10] "Diff-in-diff 0.182*** (.066) [p=.006]"
- [PAGE 11] "Diff-in-diff 0.243** (0.116) [p=.035]"
- [PAGE 15] "Technical Fouls 0.08 (0.38) 0.016 (0.014)" and "Minutes played 30.13 (10.1) -0.403*** (0.155)"
- [PAGE 16] "Placebo: No Effects — Free Throw % 74.6% (23.3) +0.4% (0.8)"
- [PAGE 20] "Line shows running mean calculated using epanechnikov kernel with bandwidth=0.4"
- [PAGE 22] "Implies: Outcomes of 3.4% of games could change if the racial composition of the refereeing crew changed"
- [PAGE 24] "Next steps: – Unlikely (but still hoping): Get NBA referees to perform 'Implicit Association Test'"
- [PAGE 8] χ² p-values: 1992 p=.03, 1999 p=.07, rest ≥.12

Let me now write it all out. Keep it tight but rich.

For the RECURSIVE_THEORY_OF_MIND section, I'll build a three-model stack: (a) habit-regression under decision-clock compression; (b) the counter-trap (player adaptation and referee anticipation of player adaptation); (c) the clock itself as the moderator variable. Include a formal statement:

Bias(Δt) = Bias_max · exp(-Δt/τ_c) + Bias_delib, where Δt is deliberation time, τ_c a characteristic relaxation constant (units: seconds). Testable prediction: technical/flagrant fouls (long deliberation, replay review) show attenuated bias relative to shooting fouls (fast). Data: technical 0.016 (0.014) ns, flagrant 0.009 (0.006) ns — consistent with the deliberation-attenuation prediction, and this is a real in-paper test I can cite [PAGE 15]. That's a genuinely nice multi-hop derivation: the paper's own null on technical/flagrant fouls is *predicted* by the deliberation-clock model, converting an apparent weakness into confirmatory evidence. Good.

Also note the counter-trap: page 16 checks aggression proxies (steals −0.053, blocks −0.022, turnovers +0.091) → "Player aggression: No visible increase" [PAGE 16] — rules out the behavioral-response channel partially.

Now CROSS_LAYER_VETO_ADJUDICATION — I'll structure as an explicit pipeline of veto gates with pass/fail and a formal criterion.

Gate 1 — Physical/mechanical invariance: foul rate is a supervisory label on contact events. The physical contact distribution is race-invariant conditional on mass/height/position/velocity. Veto requires that any measured differential survive conditioning on measured mechanics. FT% placebo passes as mechanical null [PAGE 16].
Gate 2 — Biomechanical: mass, height, position. Black players: Center 11.4% vs 33.6% (Δ −22.2 pp), height 78.4 vs 80.54 in (Δ −2.13), weight 211.5 vs 223.2 lb (Δ −11.7) [PAGE 7]. Foul rate is mechanically increasing in mass and decreasing in height-for-position (post play). So raw black-white foul gap (−0.640) is *opposite* in sign to what mechanics alone would predict→ suggests mechanics suppressed the gap, and controlling for them should widen it. Check: coefficient 0.182 (col 1) grows to 0.215 (col 4) with controls → consistent with suppression. That's a strong internal-consistency argument. 
Wait: white players are heavier and more often centers, and centers foul more → whites should have higher foul rate. Observed: white 4.97 vs black 4.33, whites indeed higher. So the raw gap is mechanically expected. The question is whether the *interaction* survives. Column 1 (0.182) has no controls; columns 4-9 add player chars × %white refs and coefficient rises to 0.215/0.188. So controls don't kill it. Good.
Gate 3 — Environmental/venue: stadium×black player FE, team×home FE, attendance controls [PAGE 14, 21]. Indoor sport → meteorological layer is formally inoperative; no weather covariate can enter a closed-roof arena's foul-call generating function. Veto by weather is structurally impossible; residual environmental channels are travel/schedule/rest, which the paper does not fully close — flag as an open gate (fail-to-test, not fail).
Gate 4 — Assignment/institutional: randomization χ² [PAGE 8]. 11 of 13 years p ≥ .12; 1992 p=.03 violates at 5% — one expected false positive in 13 tests. Overall design is not vetoed but the 1992 (and 1999 p=.07) years are flagged as gray-zone.

Verdict: no gate produces a hard veto; gates 1, 2, 4 pass; gate 3 passes on meteorology but is open on scheduling.

RLVR_COUNTERFACTUAL_VETOES — three verifiable reward scenarios. Each with: observable, decision rule, numeric prediction, veto condition, and what it would falsify.

Scenario A: "No-discretion placebo battery." Predictions: β on (W×B) for FT% ∈ [−0.8, +0.8] pp; for jump-ball recoveries and inbound violations ~0. Veto if |β_FT%| > 1.5 pp with 95% CI excluding 0.
Actually the observed FT% estimate is +0.4% (0.8) — already inside.

Scenario B: "Pseudo-race permutation / negative control." Randomly permute referee race labels within season, re-estimate τ̂_pseudo 1,000 times. Prediction: mean ≈ 0, SD ≈ 0.066, so 95% of |τ̂_pseudo| < 0.13. Veto: observed 0.182 falls at the ~99.4th percentile under the null — that's the actual p=.006, so it should pass; but if the permutation SD is materially larger than the analytic SE (e.g., >0.09), the analytic inference is anticonservative → veto of the inference, not the effect.

Scenario C: "Awareness discontinuity." Post-2007 games as held-out test. Prediction: |τ̂_post| ≤ 0.5|τ̂_pre| i.e., ≤ 0.094, and the 95% CI on the difference excludes zero. Veto: if τ̂_post ≥ 0.16, the implicit-attitude mechanism is falsified and a structural/strategic explanation must be preferred.

Optionally a Scenario D on the deliberation clock: technical/flagrant should be ≤ 25% of the shooting-foul coefficient. Observed 0.016/0.188 = 8.5% and 0.009/0.188 = 4.8% — consistent.

Good, I'll include 3 primary + a bonus.

Now word budget. Let me write ~2000-2400 words.

Let me be careful to keep LaTeX readable in plain text.

Write it now.

One more: I should include the "gray-zone audit" of the discrepancy between 0.070 (p=.084) and 0.182 (p=.006) — that's a real tension. The binary majority split discards information (it bins W into {0,1/3,2/3} vs {1}) — wait, majority white = W ∈ {2/3, 1}; majority black = W ∈ {0, 1/3}. So the binary split collapses 0 and 1/3 together and 2/3 and 1 together. The slope uses all four points. The slope is more efficient if linear; the split is robust to nonlinearity. The fact that the slope is significant but the split is marginal is a signature of *non-monotonicity* — the per-step slopes on page 10 (0.455, 0.064, 0.240) are non-monotone, so the linear slope is an average that the binned estimator dilutes. This is a genuine gray zone: the dose-response is not monotone, which is odd for a bias mechanism and suggests either noise or a threshold effect. Flag it.

Also gray zone: minutes played coefficient −0.403*** — black players play ~0.4 fewer minutes per 48 under white refs. But if fouls are *higher* under white refs, minutes should *fall* (foul trouble) — which is consistent. But note: foul rate is normalized per 48 min; if minutes fall mechanically due to fouls, the denominator shrinks and R is biased upward — a "denominator endogeneity" trap. Formally, if F is unchanged but M falls, R rises. So the estimated 0.188 could partly be a denominator artifact. However, the paper also reports "Fouls 4.44 (3.34) → 0.188** (0.078)" on the *level* of fouls, not the rate — which sidesteps the denominator. Good catch, include it. Also fouled out 0.002 (0.004) ns — that's a check against foul-trouble mechanics; if black players really accrued meaningfully more fouls, fouling out should rise. The null there *bounds* the effect size: with base rate 2.5%, and the coefficient 0.002, a true effect of 0.188/48min × 30 min ≈ 0.118 fouls/game → ~0.2 pp on fouled-out probability at most. So the effect is small in absolute terms. Nice.

That's a real multi-hop derivation. Include in THINK_TRACE.

Alright, writing.

I'll make sure everything is well-formed XML-ish. No markdown headers inside? I can use markdown lightly but the tags should be exact.

Let me write final.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain has to be rebuilt from the estimand outward, because the paper's headline number (a differential-in-differences coefficient) is not self-interpreting. Step 1: define the outcome. A personal foul is a supervisory label attached to a contact event, not a physical quantity. The paper normalizes it as a rate, "Foul Rate = 48*fouls/minutes" [PAGE 9], which is dimensionally fouls per 48 minutes of participation — a *conditional intensity*, not an event count. This normalization matters enormously: if fouls mechanically reduce minutes (foul trouble), the denominator shrinks and the rate inflates without any change in the numerator. So the correct first audit is whether the paper's own level regression corroborates the rate regression. It does — "Fouls 4.44 (3.34) / 0.188** (0.078)" [PAGE 15] is reported on the *level*, and it survives to the fullest fixed-effects specification (referee effects, player\*year, team\*year, team\*game). That single line substantially defuses the denominator-endogeneity trap.

Step 2: identify the estimand. Let $W_g$ be the fraction of white referees in crew $g$ and $B_i$ a black-player indicator. The target is the cross-partial $\tau = \partial^2 \mathbb{E}[R]/\partial W \partial B$, in fouls per 48 minutes per unit of white-referee share. The 2×2 "Difference in Difference Analysis of Foul Rate" [PAGE 9] gives $\hat\tau = 0.070$ (SE 0.041, $p = .084$) — marginal. The four-point slope version [PAGE 10] gives $\hat\tau = 0.182$ (SE 0.066, $p = .006$) — strong. These two are *the same estimand under different weighting*, and their divergence (one fails at 5%, one clears at 1%) is the central gray zone of the entire paper, and it is almost never mentioned in secondary commentary.

Step 3: diagnose *why* they diverge. The binary split bins $W \in \{0, 1/3\}$ against $W \in \{2/3, 1\}$; the slope uses all four cells. If the dose-response were linear, the slope is more efficient and the binary split merely loses power. But the per-step slopes on [PAGE 10] are 0.455, 0.064, and 0.240 — non-monotone, with the middle step nearly zero. A non-monotone dose-response is a *disconfirmation* of a simple linear bias mechanism and a confirmation of either threshold behavior, small-cell noise, or a specification that is averaging across heterogeneous referees. The referee-level dispersion plot on [PAGE 23] ("Referee-specific Black-White Differences in Foul Calling") supports heterogeneity: the effect is not a uniform white-referee shift but a distribution with a long average. So $\hat\tau = 0.182$ is best read as a mean over a heterogeneous population, not as a structural constant.

Step 4: cross-check the magnitude externally. The game-level estimate is $\hat\kappa = -0.226$ (0.092) on the win-probability scale [PAGE 21]; an average inter-team racial gap in playing time of 0.15 gives $\Delta P = -0.226 \times 0.15 = -0.034$, i.e. 3.4 percentage points, which reconciles *exactly* with the paper's own statement that "Outcomes of 3.4% of games could change if the racial composition of the refereeing crew changed" [PAGE 22]. That three-way internal consistency (slope → win probability → stated magnitude) is the strongest single piece of evidence in the paper and is independent of the fragile 2×2 estimate.

Step 5: gray-zone audit of the identification. The design claims random crew assignment; the $\chi^2$ table [PAGE 8] shows 11 of 13 seasons with $p \geq .12$, but 1992 has $p = .03$ and 1999 has $p = .07$. With 13 independent tests at $\alpha = .05$, roughly 0.65 false positives are expected; observing two sub-.10 years is unremarkable. But the design is also *thin* in exactly the region where its linear extrapolation is most load-bearing: zero-white-referee crews constitute "668 (2.7%)" of team-games [PAGE 8]. The slope's 0% intercept is therefore estimated off 2.7% of the sample — high leverage, low mass.

Step 6: multiple-comparison exposure. Nine columns in [PAGE 14], plus 5 outcomes on [PAGE 15], 3 on [PAGE 16], and 7 specifications × 2 panels on [PAGE 18] and [PAGE 21] — approaching two hundred reported estimates. At nominal 5%, ~10 spurious rejections are expected. The protection is that the coefficient is *stable* across specifications (0.182 → 0.215 → 0.188), not that any one is significant. Stability is the correct defense; the $p$-values are not.

Step 7: bound the effect against a hard mechanical check. "Fouled out 0.025 (0.16) / 0.002 (0.004)" [PAGE 15]. A coefficient of 0.188 fouls/48min over ~30 minutes implies roughly 0.118 extra fouls per game, which should raise the foul-out probability by well under a percentage point given a 2.5% base rate. The observed 0.2 pp null is therefore *consistent* with the small effect, and simultaneously caps it. Any claim that this bias is large in absolute terms is inconsistent with the foul-out null. The effect size is 0.188/3.34 ≈ 0.056 standard deviations. It is real, small, and consequential only in aggregate.

Step 8: temperature check. The paper's own summary of the fact is modest: "Players earn fewer fouls under own-race referees" [PAGE 12]. The legal framing is explicitly impact-based, not intent-based: "'Disparate impact' on black players of hiring mainly white referees (Title VII, Civil Rights Act)" [PAGE 12]. The mechanism question is bracketed by the authors themselves, which makes the later debate over implicit attitudes a debate the paper invited rather than settled.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Unit conventions.** Foul rate $R$ in fouls per 48 minutes of playing time; playing time $M$ in minutes; point differential in points per game; win probability dimensionless on $[0,1]$; referee-share $W_g \in \{0, 1/3, 2/3, 1\}$ dimensionless; racial share $s$ dimensionless on $[0,1]$.

**Eq. 1 — Rate normalization.**
$$R_{ig} = \frac{48\,F_{ig}}{M_{ig}},\qquad [R] = \text{fouls}\cdot(48\,\text{min})^{-1}$$
Assumption: $\Pr(\text{foul} \mid \text{contact})$ is constant per unit exposure; breakdown when $M_{ig}\to 0$ (rate undefined / infinite, requiring the minutes-weighting the paper uses throughout). This is exactly why the *level* replication on [PAGE 15] — "Fouls 4.44 (3.34) / 0.188** (0.078)" — is essential and not redundant.

**Eq. 2 — Baseline cross-partial estimand.**
$$\mathbb{E}[R_{igrt}\mid W_g, B_i] = \alpha + \beta_1 (W_g B_i) + \beta_2 W_g + \beta_3 B_i,\qquad \tau \equiv \beta_1$$
Assumption: linearity in $W$. **Breakdown regime:** non-monotone step slopes of 0.455, 0.064, 0.240 [PAGE 10] directly falsify linearity; the slope is an average, not a local derivative.

**Eq. 3 — Saturated specification.** Following [PAGE 13]:
$$R_{igrt} = \beta_1 W_g B_i + \beta_2 W_g + \beta_3 B_i + \beta_4'(X_i\otimes W_g) + \beta_5 Z_{gt} + \delta_r + \eta_i + \theta_{t\cdot yr} + \zeta_{gt} + \varepsilon_{igrt}$$
with the paper's fixed-effect cardinalities: "1190 players", "135 referees", "339 team-seasons", "5037 player-seasons", "13,326 games", "26,647 team-games" [PAGE 13]. **Singularity regime:** introducing $\zeta_{gt}$ (game FE) absorbs $W_g$ entirely, so $\beta_1$ is identified *only* from within-game cross-team variation in $B_i$. If a team-game features a homogeneous lineup, the within-team contrast vanishes and the interaction collinearizes with $\eta_i$; the estimate then rests on cross-team contrast alone. This is a rank-deficiency condition, not a nuisance — it is why the sample is 266,984 but the effective identifying variation is far smaller.

**Eq. 4 — Two consistent estimators of the same $\tau$.**
$$\hat\tau_{\text{DiD}} = \left[\bar R_{B,W>1/2}-\bar R_{W,W>1/2}\right]-\left[\bar R_{B,W\leq 1/2}-\bar R_{W,W\leq 1/2}\right] = 0.070\ (0.041),\ p=.084 \text{ [PAGE 9]}$$
$$\hat\tau_{\text{slope}} = \frac{\Delta(\text{Black}-\text{White})}{\Delta\%\text{White Refs}} = (-0.022)-(-0.204) = 0.182\ (0.066),\ p=.006 \text{ [PAGE 10]}$$
Replication on new data: $0.243\ (0.116)$, $p=.035$ [PAGE 11]. The three values are mutually consistent within ~2 SE; the divergence in significance is a power/weighting artifact plus genuine non-monotonicity.

**Eq. 5 — Standardized effect.** $d = \hat\tau/\sigma_R = 0.182/3.34 = 0.055$ SD.

**Eq. 6 — Team-level net effect (direct + indirect).**
$$\text{Fouls}_{tg} = \dots + \lambda_1 (W_g s_{tg}) + \lambda_2 (W_g s_{og}) + \dots,\qquad \text{Total} = \lambda_1-\lambda_2$$
Estimated "Total effect (β1-β2) 22.4 (4.65) … 2.148** (0.965)" [PAGE 18], i.e. 9.6% of the mean; "Points Scored by Team 98.4 (12.4) … -6.287*** (2.222)" [PAGE 18], i.e. −6.4%. **Breakdown regime:** $s_{tg}$ is endogenous by construction — the paper concedes "%black playing time is endogenous" [PAGE 17] and instruments with "average %black playing time over previous 10 games" [PAGE 17]. The IV column attenuates the total fouls effect to "1.671 (1.043)" [PAGE 18] — losing significance, a real fragility.

**Eq. 7 — Win-probability and magnitude reconciliation.**
$$\Pr(\text{home wins}) = \dots + \kappa\, W_g (s_h-s_a),\qquad \hat\kappa = -0.226\ (0.092)\ \text{[PAGE 21]}$$
$$\Delta P = \hat\kappa \cdot \Delta s = -0.226 \times 0.15 = -0.034$$
Reconciles with "Outcomes of 3.4% of games could change" and the 47.6% → 51.0% bracket [PAGE 22]. **Breakdown regime:** linear extrapolation to $W=0$ and $W=1$ from a design whose 0-white cell is 2.7% of observations [PAGE 8].

**Eq. 8 — Welfare translation.** From [PAGE 22], "Win Percentage = 0.21 + 0.29\*(Team wage bill / League ave. wage bill)"; hence $\Delta(\text{wage ratio}) = 0.034/0.29 = 0.117$, i.e. ~12% of a league-average payroll. Units: dimensionless probability per dimensionless wage ratio.

**Eq. 9 — Omitted-variable bias bound.** For any confounder $C$:
$$\operatorname{plim}\hat\tau = \tau + \gamma_C\,\delta_C,\qquad \delta_C = \frac{\operatorname{Cov}(W_gB_i, C)}{\operatorname{Var}(W_gB_i)}$$
Veto requires $\gamma_C \neq 0$ *and* $\delta_C \neq 0$ jointly. Player mass, height, and position satisfy both prima facie (see veto section), which is why the interacted specifications on [PAGE 14] — "Player characteristics \*%White refs" — are load-bearing rather than cosmetic.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The lineage runs backward through four distinct research programs, each of which supplied a component the others lacked. First, the taste-based discrimination tradition descending from Becker's employer-preference model supplies the *theoretical* claim that own-race preference is not reducible to statistical discrimination — the paper states this explicitly: "Own-race bias cannot be statistical discrimination" [PAGE 2]. That is the load-bearing theoretical move: because referees observe nothing about player productivity that race could proxy for, any own-race effect must be preference-based or implicit rather than inferential. Second, the audit-study tradition supplies the method — matched-pair, randomized-exposure designs. Third, the criminal-justice and labor-economics literature supplies the *comparators* the paper explicitly names: "Employer hiring: Stoll, Raphael, and Holzer (2004)"; "Police arrests: Donohue and Levitt (2001)"; "Police vehicle search: Antonovics and Knight (2005)"; "Judicial sentencing: Abrams, Bertrand, & Mullianathan (2005); Schanzenbach (2005)" [PAGE 2]. The NBA study's contribution to that lineage is not the finding but the *identification*: in judges, police, and employers, caseload is non-randomly sorted to decision-makers, whereas here there is "(Essentially) random assignment of referee crews to games" and "No sorting of players to referees" [PAGE 3]. Fourth, the sports-analytics program supplies the outcome variable and its unusually high measurement quality, captured in Commissioner Stern's description quoted on [PAGE 3]: referees "are the most ranked, rated, reviewed, statistically analyzed and mentored group of employees of any company in any place in the world."

The retrocausal insight is the paper's own inverted premise: the design was chosen precisely because it is "An unlikely place to find discrimination" [PAGE 3], with "High levels of transparency and monitoring," "Continual feedback on accuracy of evaluation," and "Incentives to make the right decision." Finding an effect in a setting optimized *against* the effect is what gives the result its weight, and it is also what makes the result fragile — the same monitoring apparatus that makes the null surprising makes the estimate non-stationary.

**Multi-week and multi-year traps.** Four are foreseeable from the pages alone.

(a) *Instrument reactivity.* The paper's closing ambition — "Get NBA referees to perform 'Implicit Association Test'" [PAGE 24] — introduces the measurement itself as a treatment. Any post-publication replication window is contaminated by the awareness the original study generated. A naive extrapolation of $\hat\tau = 0.188$ into post-2007 seasons assumes a stationary data-generating process in an environment where the agents are, by construction, among the most monitored in any industry. This is the single largest forward trap.

(b) *The 1991/92–2003/04 window is not one regime.* Crews, replay rules, and the league's officiating directives changed repeatedly across thirteen seasons; the paper handles this with "Team\*Year fixed effects" and "Player\*Year fixed effects" [PAGE 14], which absorbs level shifts but not changes in the *slope* on $W_g B_i$. A pooled $\hat\tau$ is a season-average of a potentially time-varying parameter.

(c) *Publication and rebuttal dynamics.* The paper is framed as a pre-emptive strike — "Likely: Rebuttal to NBA analysis" [PAGE 24] — meaning the estimate enters a contested institutional arena where selective reanalysis is a foreseeable response. The defense is pre-registration, not rhetoric.

(d) *Extrapolation to "disparate impact."* The legal reading in [PAGE 12] requires only that hiring be correlated with impact; the econometric reading requires a causal mechanism. These are different claims with different burdens, and conflating them across time is a classic category error. The paper is careful; many readers are not.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Model the referee as a Bayesian classifier operating under a hard decision clock. The paper's own context section supplies the two structural parameters: "Quick decisions" and "Subjective evaluation (interpretation of physical contact)" [PAGE 3]. Both are necessary for the effect; neither alone is sufficient.

**Layer 1 — Habit regression under clock compression.** Let $\Delta t$ be available deliberation time and let $\pi$ denote the referee's deliberative (slow, individuating) classification and $\pi_0$ the automatized, category-based prior. A standard dual-process collapse:
$$\text{Bias}(\Delta t) = \beta_{\max}\, e^{-\Delta t/\tau_c} + \beta_{\text{delib}},\qquad [\tau_c]=\text{s}$$
Prediction: calls with *long* deliberation — replay-reviewed technical and flagrant fouls — should show near-zero own-race bias relative to fast shooting fouls. This is directly testable within the paper, and it holds: "Technical Fouls 0.08 (0.38) / 0.016 (0.014)" and "Flagrant Fouls 0.012 (0.17) / 0.009 (0.006)" [PAGE 15] against a personal-foul coefficient of 0.188. Ratios of 8.5% and 4.8%. What looks like a null result is actually the model's *confirmation*: an apparent weakness in the paper converts to evidence under the clock hypothesis, because the no-bias cells are precisely the high-$\Delta t$ cells.

**Layer 2 — The counter-trap (player adaptation).** A sophisticated player who anticipates a crew-composition-dependent whistle should re-optimize aggressiveness. If players adapted, the estimated $\hat\tau$ would be a *behavioral* equilibrium object, not a referee-behavior object, and the paper flags this: "Correlation reflects player behavior, not referee behavior" [PAGE 12]. The paper's counter-trap test is the aggression battery: "Player aggression: No visible increase — Steals per 48 min −0.053 (0.046); Blocks per 48 min −0.022 (0.038); Turnovers per 48 min +0.091 (0.063)" [PAGE 16]. All null. The absence of a behavioral response is what licenses reading $\hat\tau$ as a officiating-side parameter. Note the recursion this creates: the referee's model of the player's intent is itself the object being biased, so any second-order adaptation by players would feed back into the referee's prior — a genuine closed loop that the data reject only weakly.

**Layer 3 — The clock as moderator.** Three clocks operate simultaneously: the ~0.5 s perceptual clock of the foul call, the 48-minute game clock (foul trouble, substitution patterns), and the multi-season awareness clock. The paper exploits the first via the technical/flagrant contrast, the second via "Minutes played 30.13 (10.1) / -0.403*** (0.155)" [PAGE 15] and the null on "Fouled out 0.002 (0.004)", and is silent on the third — which is where the retrodictive risk lives. The critical structural observation: the effect is *bounded above* by the foul-out null. Any theory of the bias that predicts large behavioral consequences is falsified by that 0.2 pp estimate, regardless of how significant the 0.188 coefficient is.

**Counter-trap for the analyst.** The temptation is to reify $\hat\tau$ as "white referees penalize black players." The referee-level dispersion on [PAGE 23] shows a distribution, not a shift — some referees near zero, some large, with widely overlapping 95% intervals. A theory of mind that models referees as a homogeneous biased class is therefore a modeling error at the population level, even if the mean is nonzero.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

Four veto gates are adjudicated. A gate produces a *hard veto* only if a confounder $C$ simultaneously satisfies $\gamma_C \neq 0$ and $\delta_C \neq 0$ in Eq. 9 and survives the paper's conditioning set.

**Gate 1 — Physical/mechanical invariance (PASS).** Foul calls are supervisory labels on contact events. The physical contact distribution, conditional on mass, velocity, and position, is race-invariant. The decisive test is a no-discretion outcome: free-throw percentage is a solo, unopposed, mechanically determined act with zero referee latitude. "Placebo: No Effects — Free Throw % 74.6% (23.3) / +0.4% (0.8)" [PAGE 16]. An 0.8 pp standard error brackets the estimate tightly at zero. Because the placebo outcome shares the same players, the same games, and the same crews, a mechanical or measurement channel cannot generate the main result without also generating a spurious FT% effect. It does not. **Gate 1 passes cleanly** — this is the strongest single falsification test in the paper.

**Gate 2 — Biomechanical confounding (PASS, with a suppression diagnostic).** Body mechanics mechanically drive foul rates: mass and post position increase contact frequency. The summary statistics on [PAGE 7] show large racial gaps in exactly these variables — "Center 11.4% / 33.6% / −22.2%\*\*\*"; "Height (inches) 78.4 / 80.54 / −2.13\*\*\*"; "Weight (lbs) 211.5 / 223.2 / −11.7\*\*\*". White players are heavier, taller, and three times more likely to play center, so raw foul rates *should* favor higher white foul counts — and they do: "Foul rate (per 48 min) 4.33 / 4.97 / −0.640\*\*\*" [PAGE 7]. The sign is mechanically expected. This makes the interaction test a *suppression* test, not a standard confounding test: conditioning on mechanics should *increase* the black-white differential if a bias component exists. It does — the coefficient rises from "0.182\*\*\* (0.066)" in column (1) to "0.215\*\*\* (0.071)" in column (4) with "Player characteristics \*%White refs" included [PAGE 14]. **Gate 2 passes**, and the direction of movement is corroborative rather than merely non-vetoing.

**Gate 3 — Environmental/venue (PASS on meteorology; OPEN on scheduling).** Stadium and venue effects are absorbed by "Stadium\*Black player fixed effects" and "Team\*Home fixed effects" [PAGE 14], plus attendance and out-of-contention controls from [PAGE 21]. On the meteorological layer specifically: the NBA plays in closed arenas, so ambient temperature, wind, precipitation, and humidity are *structurally non-operative* — they cannot enter the foul-call generating function because no player or referee is exposed to them. A weather veto is impossible by construction, not merely untested. The residual open channel is schedule-environment: rest days, travel distance, back-to-backs, and altitude — none of which appear in the specification. This gate is **pass-on-meteorology, untested-on-scheduling**, and should be flagged as the one legitimate remaining confounder family.

**Gate 4 — Institutional assignment (PASS with flags).** The randomization table [PAGE 8] reports $\chi^2$ independence tests per season; values run $p = .82, .03, .80, .26, .60, .97, .98, .99, .07, .99, .82, .79, .12$. Eleven of thirteen clear at 10%; 1992 ($p=.03$) and 1999 ($p=.07$) flag. Under a global null with 13 independent tests, $\mathbb{E}[\#\{p<.05\}] = 0.65$; observing one is unremarkable and observing two below .10 is within binomial expectation. **No hard veto.** The caveat is cell sparsity: "668 (2.7%)" team-games with zero white referees [PAGE 8] carry the entire 0% endpoint of the dose-response, and the paper's own step slopes there are the largest (0.455) and least precise (0.331).

**Adjudication:** No layer produces a hard veto. Gate 1 (mechanical placebo) is dispositive; Gate 2 is corroborative in direction; Gate 3 is structurally closed on weather and open only on schedule; Gate 4 is statistically clean but sparse at the endpoint. The surviving threat is *referee-style × player-style interaction* — the paper's own listed alternative, "Different refereeing styles interacting with different playing styles" [PAGE 12] — which the "Playing 'style' … all interacted with %white referees" controls [PAGE 13] attenuate but do not eliminate, because style is measured by the same box-score that generates the outcome.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Each scenario specifies an observable, a reward/decision rule, a numeric prediction, and an explicit veto condition. All are checkable against a held-out sample; none require new theory.

**Scenario A — No-discretion placebo battery (mechanical falsification).**
*Observable:* coefficient on $W_g B_i$ for outcomes with zero referee latitude — free-throw percentage, jump-ball possession recovery, five-second inbound violations, and administrative violations — estimated on the identical design matrix from [PAGE 14].
*Prediction:* $\hat\beta_{\text{FT\%}} \in [-0.8, +0.8]$ percentage points at 95%; the paper's point estimate is "+0.4% (0.8)" [PAGE 16]. Extend to the other three outcomes; predict all are $|{\hat\beta}| < 0.02$ in probability units.
*Decision rule (verifiable reward):* +1 if all four placebos bracket zero; −1 otherwise.
*Veto:* any no-discretion outcome with a 95% interval excluding zero and $|{\hat\beta}| > 1.5$ pp. A hit falsifies the entire identification — it would mean the "treatment" is correlated with something mechanically different about the players or games, not with officiating judgment. This is the highest-priority test because it is the only one that can kill the result outright.

**Scenario B — Permutation negative control (inference falsification).**
*Observable:* the sampling distribution of $\hat\tau$ under 1,000 within-season random permutations of referee race labels.
*Prediction:* mean $\approx 0$, permutation SD $\approx 0.066$ (matching the analytic SE on [PAGE 10]); the observed 0.182 sits at roughly the 99.4th percentile, i.e. $p \approx .006$, reproducing the paper's stated $p=.006$.
*Decision rule:* +1 if the permutation SD is within $[0.055, 0.080]$ of the analytic SE.
*Veto:* if the permutation SD exceeds 0.090, the analytic standard errors are anticonservative (clustering by game is insufficient — referee and team-season dependence leaks), and the $p=.006$ claim is void even though the point estimate stands. This veto attacks the *inference*, not the effect, and is the correct response to the two-hundred-odd estimates reported across [PAGE 14], [PAGE 15], [PAGE 16], [PAGE 18], and [PAGE 21].

**Scenario C — Awareness discontinuity (mechanism falsification).**
*Observable:* $\hat\tau$ estimated separately on pre-publication and post-publication seasons, using the identical specification as column (9) of [PAGE 14].
*Prediction:* $|{\hat\tau_{\text{post}}}| \leq 0.5\,|{\hat\tau_{\text{pre}}}|$, i.e. $\leq 0.094$, with a 95% interval on $(\hat\tau_{\text{post}} - \hat\tau_{\text{pre}})$ excluding zero.
*Decision rule:* +1 if the attenuation exceeds 50%; 0 if attenuation is between 0% and 50%; −1 if the post-period coefficient is unchanged or larger.
*Veto:* if $\hat\tau_{\text{post}} \geq 0.16$, the implicit-attitude / automatized-classification mechanism is falsified. The residual explanation must then be structural — referee-style × player-style interaction, or a stable institutional pattern — because an implicit association that survives intense public monitoring and direct feedback is not plausibly "implicit" in the dual-process sense. Note that the paper's own "Continual feedback on accuracy of evaluation" [PAGE 3] makes this the *expected* failure mode if the effect is real-but-malleable, and the expected survival mode if it is real-but-structural.

**Bonus Scenario D — Deliberation-clock dissociation (mechanism confirmation).**
*Observable:* the ratio of the coefficient on replay-reviewed calls (technical, flagrant) to the coefficient on fast calls (personal shooting fouls).
*Prediction:* ratio $\leq 0.25$. Observed: $0.016/0.188 = 0.085$ and $0.009/0.188 = 0.048$ [PAGE 15].
*Veto:* if the technical-foul coefficient exceeded 0.10 with a 95% interval excluding zero, the clock model is wrong and deliberation time does not moderate the bias — which would force the mechanism toward a deliberative rather than automatized account, contradicting the paper's closing hypothesis on [PAGE 24].

</RLVR_COUNTERFACTUAL_VETOES>