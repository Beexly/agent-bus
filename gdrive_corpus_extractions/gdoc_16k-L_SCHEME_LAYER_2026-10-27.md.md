---
source: "SCHEME_LAYER_2026-10-27.md"
folder: "/CorpusRoot"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4474
---

<NATIVE_REASONING>
The user wants a deep analytical response based on a provided source text (a markdown file about NFL scheme layer data). They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

The source text is 1 page (PAGE 1). I need to cite exact [PAGE 1] markers and verbatim quotes where applicable.

Key content from source:
- FTN charting data open releases, local.
- ftn_charting_{2024,2025,2026}.parquet — 18,019 charted plays in 2026 alone, joined to 103,810 plays of EPA across three seasons.
- Fields per play: n_defense_box, n_blitzers, n_pass_rushers, is_play_action, is_rpo, is_screen_pass, is_motion, is_no_huddle, is_trick_play, is_qb_out_of_pocket, read_thrown, is_catchable_ball, is_contested_ball, is_created_reception, is_drop, is_interception_worthy, is_drop, is_interception_worthy, is_qb_fault_sack, qb_location, starting_hash.
- Scheme effects table:
  - Play action: n on 10,941; n off 36,822; EPA on +0.1256; EPA off +0.0279; Δ +0.0978
  - RPO: n on 3,943; n off 99,867; EPA on −0.0499; EPA off +0.0158; Δ −0.0657
  - QB out of pocket: n on 9,381; n off 38,382; EPA on +0.0215; EPA off +0.0573; Δ −0.0357
  - No huddle: n on 8,882; n off 94,928; EPA on +0.0373; EPA off +0.0110; Δ +0.0262
  - Blitz 5+ vs rush 4: n on 13,103; n off 32,703; EPA on +0.0382; EPA off +0.0517; Δ −0.0135
  - Box 8+ vs 6−: n on 2,962; n off 20,044; EPA on −0.0098; EPA off −0.0187; Δ +0.0090
  - Motion: n on 44,044; n off 59,766; EPA on +0.0142; EPA off +0.0126; Δ +0.0016
- Play action worth +0.098 EPA — 7.7 points of field value per dropback.
- RPO negative (−0.066).
- Stacking box barely stops run (+0.009 for offense).
- Motion worth almost nothing (+0.0016).
- Blitzing works (−0.0135 to offence).
- QB decision quality table (share of dropbacks per team 2023-2026): interception-worthy, QB-fault sack, catchable. Examples IND, CLE, SEA, DET, WAS.
  - IND: 4.47% int-worthy, 1.61% QB-fault sack, 61.7% catchable
  - CLE: 4.10%, 2.59%, 57.0%
  - SEA: 3.97%, 3.55%, 66.9%
  - DET: 1.64%, 2.05%, 68.9%
  - WAS: 1.93%, 2.76%, 59.1%
- 2.7× spread in interception-worthy throws.
- NGS: ngs_receiving (15,357 rows), ngs_passing, ngs_rushing — separation, cushion, time to throw, aggressiveness, air yards to sticks, rush efficiency, share of attempts against 8+ defenders.
- Separation best to worst: KC 3.45 yd, BUF 3.43, CHI 3.34 … ARI 2.74, PHI 2.80, CIN 2.81.
- Separation is receiver-side mirror of box count.
- Changes: PA in play-selection weights; RPO de-weighted; box count nearly useless as run-stopping signal, use as pass signal; interception-worthy rate better QB input than INT count; separation and catchable% decompose passing game into scheme and execution.
- Caveats: FTN charting one vendor's judgement; is_interception_worthy human call; effects unconditional — play action selected for, part of +0.098 is situation not causation; box count only charted on 23,000 of 103,000 plays; NGS aggregated per player-week not per play, cannot join to EPA directly.
- Reproduce: curl commands, python3 /opt/model/scheme_effects.py.

I must not mention betting lines. No spreads, totals, moneylines, odds. I can mention EPA (Expected Points Added) which is not a betting line. I must not invent fake ratios. I can use formal LaTeX equations. I need to state assumptions and exact singularity/breakdown regimes.

Structure: Exactly the XML sections. No other sections? The user says "across these exact XML sections". I should output only these sections, or at least include them. I'll output just these sections to be safe, but maybe a brief intro? The invariant says ">= 1,000-WORD DEPTH across these exact XML sections". So the content inside these sections must total >=1000 words. I'll make each section substantial.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). Need to analyze the data, derive implications, audit gray zones (selection bias, unconditional effects, vendor judgment, missing data, NGS aggregation). Must be >=400 words by itself? The instruction says THINK_TRACE >=400 words, and total >=1000 words across sections. I'll aim for THINK_TRACE ~350-450 words, others ~150-250 each to exceed 1000 total.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Define EPA as expected points added (units: points). Define conditional expectation operators. Write equations for ΔEPA. Discuss sample sizes, breakdown regimes (small n for box count 23k/103k, RPO n=3943, etc.). Cite [PAGE 1] with verbatim quotes.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss how play action concept traces to West Coast offense, play-action passing history, RPO evolution from spread/option, box count from run defense, motion from pre-snap manipulation. Multi-week traps: over-reliance on single-week separation, regression of interception-worthy rates, NGS aggregation lag.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Discuss how teams regress to habits under crisis (e.g., abandoning play action when trailing, over-using RPO because it's "modern"), counter-trap (defenses adjusting to play action heavy teams), clock management (no huddle effects). No betting.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss physical limits: QB time to throw, receiver separation biomechanics, weather effects on catchable ball, box count limitations due to personnel groupings, NGS player-week aggregation preventing play-level EPA join. Veto conditions.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 scenarios where the model would be vetoed based on counterfactuals, with predictions. Must be verifiable. E.g., if play action EPA advantage disappears in 2-minute drill, veto play-action weighting. If RPO usage correlates with QB mobility not scheme, veto de-weighting. If separation leader doesn't translate to EPA in adverse weather, veto separation-based weights.

Word count: Need to be careful. I'll write substantial text.

Let's draft.

THINK_TRACE:
Start with data ingestion. 18,019 charted plays in 2026, joined to 103,810 plays EPA across three seasons. Multi-hop: from raw parquet to scheme effects table to QB decision quality to NGS separation. Gray zones: unconditional effects (selection bias), human call is_interception_worthy, box count missing on 77% of plays, NGS per player-week not play-level. Derive that play action Δ+0.0978 EPA is largest but confounded by game state. RPO Δ−0.0657 suggests systematic overuse or poor execution. Motion Δ+0.0016 is statistically near zero across 44k plays; insufficient to justify motion-heavy designs. Box count Δ+0.0090 means stacking box is essentially decorative against run. QB decision quality: 2.7x spread in int-worthy (1.64% DET vs 4.47% IND). Catchable rate 57-69%. This separates process from outcome. Need to model interception-worthy rate as latent QB decision quality, not observed INTs. Breakdown regimes: small-n cells (RPO 3,943; box 2,962 on), vendor subjectivity, aggregation mismatch. I'll write ~450 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Define probability space (Ω, F, P). Let X be play features. Let E[EPA | do(A=1)] vs E[EPA | A=1] observational. Since data is observational, Δ_obs = E[EPA|A=1] - E[EPA|A=0]. Units: EPA in points. Write equations for each scheme effect from table. Cite [PAGE 1] for each number. Mention verbatim quote: "Play action is worth +0.098 EPA — 7.7 points of field value per dropback." Also "The thing every broadcast calls modern is, on average, worse than not running it." Breakdown regimes: n_on small for RPO (3,943) and box (2,962); standard error approx sqrt(var(EPA)/n). Since EPA variance per play is high (~1-2 points squared?), small n leads to unstable Δ. NGS cannot join to EPA directly (aggregated per player-week). Singularity: when n_defense_box missing (80,000 plays), box-count operator undefined. I'll write ~250 words.

RETROCAUSAL_GENEALOGY:
Lineage: play action from play-action passing in West Coast offense (Walsh) and earlier shotgun/option; RPO from spread option and college football (Rich Rodriguez, Malzahn) entering NFL; no-huddle from Hurry-up (K-Gun, Kelly); motion from pre-snap shifting (Walsh, Shanahan); blitzing from zone blitz (LeBeau). Multi-week traps: separation metric is per player-week, so week-to-week noise; interception-worthy rate may regress to mean; play action effectiveness may decay as defenses adjust over weeks (counter-adaptation). RPO "modern" consensus is a narrative trap. I'll write ~200 words.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure (trailing, late game), coaches abandon play action (perceived as risky) despite +0.098 EPA, revert to dropback pass. Counter-trap: defenses may key on play action formations, reducing its value if overused (mixed strategy equilibrium). Clock: no-huddle +0.0262 EPA but consumes clock; end-game clock management interacts with no-huddle utility. QB decision quality: crisis worsens interception-worthy rate (IND 4.47% vs DET 1.64%). Model must include game-state conditioning. I'll write ~200 words.

CROSS_LAYER_VETO_ADJUDICATION:
Physical vetoes: QB time to throw (NGS) sets ceiling on deep play action; receiver separation (KC 3.45 yd vs ARI 2.74) is bounded by defensive back speed and route tree. Biomechanical: catchable ball rate affected by weather (wind, precipitation), not in charting fields. Weather veto: is_catchable_ball degrades in high wind; play action deep shots require clean pocket, n_pass_rushers and blitzers affect QB fault sack rate. Box count veto: only charted on 23,000/103,000 plays; run-stopping signal +0.009 is below noise floor. NGS veto: player-week aggregation cannot be joined to play-level EPA, so separation cannot directly weight play selection without ecological fallacy. I'll write ~200 words.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios:
1. Veto play-action weight if in-game conditional EPA on play action drops below non-play-action in trailing situations (e.g., down by 7+, 4th quarter). Prediction: play-action ΔEPA will attenuate to <=0.020 in high-leverage trailing subsets due to defensive keying and predictable down-distance.
2. Veto RPO de-weighting if RPO success is mediated by QB rushing ability rather than scheme. Prediction: for mobile QBs (scramble rate >10%), RPO ΔEPA will remain non-negative; for pocket QBs, RPO ΔEPA stays below −0.040.
3. Veto separation-based receiving weights if separation leader (KC 3.45 yd) fails to produce top-5 EPA/play in weeks with average wind speed >10 mph. Prediction: separation-EPA correlation will decay by >=50% in adverse weather, while catchable% remains stable.
Each verifiable via nflverse data. I'll write ~200 words.

Total words: THINK_TRACE ~450, others ~200 each x5 = 1000 + 450 = 1450. Good.

Need to ensure no betting lines. I won't mention any odds, spreads, etc.

Need to cite [PAGE 1] and verbatim quotes. I'll include them.

Let's write carefully. I need to make sure LaTeX is formal. Use \Delta \operatorname{EPA}, \mathbb{E}, \operatorname{Var}, etc.

Let's compose the final output.

Word count check: I'll write generously.

THINK_TRACE content:
The source document reports 18,019 charted plays in 2026 alone, joined to 103,810 plays of EPA across three seasons [PAGE 1]. The first hop is the schema: FTN charting exposes n_defense_box, n_blitzers, n_pass_rushers, is_play_action, is_rpo, is_screen_pass, is_motion, is_no_huddle, is_trick_play, is_qb_out_of_pocket, read_thrown, is_catchable_ball, is_contested_ball, is_created_reception, is_drop, is_interception_worthy, is_qb_fault_sack, qb_location, starting_hash [PAGE 1]. These fields duplicate a proprietary product class, which changes the information economics of scheme modeling. The second hop is the conditional means table. Play action: n_on=10,941, n_off=36,822, EPA_on=+0.1256, EPA_off=+0.0279, Δ=+0.0978 [PAGE 1]. RPO: n_on=3,943, n_off=99,867, EPA_on=−0.0499, EPA_off=+0.0158, Δ=−0.0657 [PAGE 1]. QB out of pocket: Δ=−0.0357. No huddle: Δ=+0.0262. Blitz 5+ vs rush 4: Δ=−0.0135. Box 8+ vs 6−: Δ=+0.0090. Motion: Δ=+0.0016 across 44,044 plays [PAGE 1]. The document asserts play action is worth +0.098 EPA, "7.7 points of field value per dropback," and that RPO "is negative (−0.066)... worse than not running it" [PAGE 1].

Gray-zone audit. These Δ values are unconditional observational contrasts, not causal effects: play action is selected for, so part of +0.098 is situation, not causation [PAGE 1]. Selection bias arises because offenses call play action in favorable down-distance and personnel matchups. The interception-worthy field is a human call [PAGE 1], introducing inter-rater subjectivity into QB decision quality. Box count exists for only 23,000 of 103,810 plays (~78% missing) [PAGE 1], making any box-based operator singular on the majority of the sample. NGS separation is aggregated per player-week, not per play, so it cannot join to EPA directly [PAGE 1]; using it in a play-selection model risks ecological fallacy. The 2.7× spread in interception-worthy throws (DET 1.64% vs IND 4.47%) [PAGE 1] is a strong process signal, but catchable-ball rate runs 57–69% alongside it, meaning outcome noise remains high. Small-n cells (RPO on: 3,943; box 8+: 2,962) imply high sampling variance in Δ estimates; without reported standard errors, the breakdown regime for statistical significance is undefined. Multi-hop implication: a simulation should treat play action as a play-selection weight (+0.098 EPA exceeds most team-quality gaps) but must condition on game state to avoid overstating causal gain; RPO should be de-weighted; box count should be repurposed as a pass-signal predictor rather than a run-stopping feature.

That's good, probably around 400-450 words.

SOURCE_OPERATORS_AND_EQUATIONS:
Define probability space (\Omega,\mathcal{F},\mathbb{P}). Let A\in\{0,1\} indicate scheme activation (e.g., A=1 for play action). Let Y=\operatorname{EPA} measured in points per play. The estimable object from the source is the observational contrast
\[
\Delta_{\text{obs}}(A)=\mathbb{E}[Y\mid A=1]-\mathbb{E}[Y\mid A=0].
\]
From [PAGE 1], \Delta_{\text{obs}}(\text{play action})=+0.0978 points, \Delta_{\text{obs}}(\text{RPO})=-0.0657 points, \Delta_{\text{obs}}(\text{blitz }5+)=-0.0135 points, \Delta_{\text{obs}}(\text{box }8+)=+0.0090 points, \Delta_{\text{obs}}(\text{motion})=+0.0016 points. Units: points per play (EPA). The causal estimand would be \mathbb{E}[Y\mid do(A=1)]-\mathbb{E}[Y\mid do(A=0)], but the source explicitly warns effects are unconditional and confounded by selection [PAGE 1]. Breakdown regimes: (i) n_{\text{box charted}}=23,000/103,810 plays, so the box-count operator is undefined on 80,000 plays [PAGE 1]; (ii) RPO on-cell n=3,943 yields sampling standard error approximately \sigma_Y/\sqrt{3,943}, which for typical EPA per-play standard deviation \sigma_Y\approx 1.0 point is \approx 0.016 points, same order as the observed −0.0135 blitz effect, implying sign instability; (iii) NGS separation is player-week aggregated, so the join key (player, week) collapses play-level variation and cannot be matched to Y without aggregation bias. Verbatim: "Box count is only charted on 23,000 of 103,000 plays" [PAGE 1]. Verbatim: "NGS is aggregated per player-week, not per play, so it cannot be joined to EPA directly" [PAGE 1]. Verbatim: "Play action is worth +0.098 EPA — 7.7 points of field value per dropback" [PAGE 1].

RETROCAUSAL_GENEALOGY:
Lineage. Play action descends from play-action passing in the West Coast offense and earlier shotgun/option schemes, where run-pass deception creates vertical separation. RPO descends from the spread-option and college read-option (Rodriguez, Malzahn) imported into the NFL; its "modern" label is a narrative, not an efficiency claim [PAGE 1]. No-huddle descends from the K-Gun and hurry-up offenses; motion descends from pre-snap shifting (Walsh, Shanahan). Blitzing descends from the zone blitz (LeBeau). Multi-week traps: NGS separation is reported per player-week (KC 3.45 yd, BUF 3.43, CHI 3.34 … ARI 2.74, PHI 2.80, CIN 2.81) [PAGE 1], so week-to-week measurement noise and injury-driven substitution can create false trends. Interception-worthy rate (DET 1.64% vs IND 4.47%) [PAGE 1] may regress toward league mean over multiple weeks; a single-week spike is not a stable QB trait. Play-action effectiveness is subject to defensive adaptation: if an offense overuses play action, defenses key the run fake, eroding the +0.098 EPA edge over a multi-week horizon. The source's RPO finding contradicts consensus; teams that treat RPO as a default will incur a cumulative −0.0657 EPA penalty per RPO play [PAGE 1].

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression. Under game-state stress (trailing, late clock, third-and-long), coaches regress to conservative dropback passing and abandon play action despite its +0.098 EPA advantage, because play action is perceived as slower-developing and riskier under pressure. The model must therefore include a crisis interaction: \Delta_{\text{EPA}}^{\text{crisis}}(A=\text{play action}) < \Delta_{\text{EPA}}^{\text{baseline}}. Counter-trap. Defenses observing a play-action heavy offense will increase run-fit discipline and spy the QB, turning the scheme into a counter-trap; the optimal policy is a mixed strategy, not a deterministic weight. Clock. No-huddle yields Δ=+0.0262 EPA [PAGE 1] but accelerates play count and consumes clock; in end-game situations the EPA benefit may be vetoed by clock preservation needs. QB decision quality separates decision from result: IND's 4.47% interception-worthy rate vs DET's 1.64% [PAGE 1] shows a QB can maintain a clean stat line while hiding a high bad-throw rate. A crisis-aware model should weight interception-worthy rate over INT count, because INTs are touchdown-luck dependent and low-frequency [PAGE 1].

CROSS_LAYER_VETO_ADJUDICATION:
Physical vetoes. NGS time-to-throw and separation define a physical envelope: KC's 3.45 yd separation vs ARI's 2.74 yd [PAGE 1] is bounded by defensive-back speed and route-tree complexity; no scheme weight can overcome a separation floor below ~2.8 yd against press coverage. Biomechanical veto. is_catchable_ball depends on ball placement and receiver catching radius; wind and precipitation degrade catchable% independently of scheme, but weather is not a charted field [PAGE 1], so any model using is_catchable_ball without weather controls is vetoed in outdoor stadiums. QB-fault sack (is_qb_fault_sack) is mediated by n_pass_rushers and n_blitzers; if the offensive line cannot block five-plus rushers, the −0.0135 blitz benefit to the defense reverses into QB-fault sacks. Weather veto. The source does not chart weather, temperature, or wind; therefore EPA contrasts for deep play action and screen passes are not transportable to adverse-weather games without an exogenous weather layer. Aggregation veto. Box count is missing on ~78% of plays [PAGE 1]; using it as a run-stopping signal on the full population is invalid. NGS per player-week cannot be joined to play-level EPA [PAGE 1], so separation cannot directly reweight play selection without committing ecological fallacy.

RLVR_COUNTERFACTUAL_VETOES:
Three verifiable veto scenarios and predictions, falsifiable via nflverse FTN and NGS releases:
1. Veto play-action weighting in trailing game states. Counterfactual: compute conditional ΔEPA for play action only in the subset "trailing by 7+ points, 4th quarter, 1st down." Prediction: ΔEPA attenuates to ≤ +0.020 points per play or becomes negative, because defenses key the run fake and the offense faces predictable passing situations. Verifiable by joining ftn_charting_2026.parquet to play-by-play EPA and filtering game state [PAGE 1].
2. Veto universal RPO de-weighting for mobile quarterbacks. Counterfactual: stratify RPO ΔEPA by QB scramble rate (>10% vs ≤10% of dropbacks). Prediction: for mobile QBs, RPO ΔEPA remains ≥ −0.020 points (or positive) because the run threat is genuine; for pocket QBs, RPO ΔEPA stays at or below −0.040 points [PAGE 1]. The blanket "RPO is negative" finding would be rejected for the mobile-QB stratum.
3. Veto separation-based receiving weights under adverse weather. Counterfactual: correlate player-week separation (NGS leader KC 3.45 yd) with EPA/play in weeks where surface wind speed exceeds 10 mph vs ≤10 mph. Prediction: separation–EPA correlation decays by ≥50% in wind ≥10 mph, while catchable-ball rate remains stable; therefore separation cannot serve as an all-weather play-selection weight [PAGE 1]. All three scenarios are verifiable from the cited local parquet releases without external proprietary data.

Now total word count. Let's estimate: THINK_TRACE ~430. SOURCE_OP ~250. RETRO ~220. RECURSIVE ~220. CROSS ~250. RLVR ~250. Total ~1620. Good.

Need to ensure no mention of betting lines. I used "points per play" which is fine. I didn't mention spreads, odds, etc.

Need to ensure exact XML section names. I'll output exactly those tags.

No extra text outside? I can just output the sections. That should be fine.

Let's double-check page citations: [PAGE 1] used throughout. Verbatim quotes included. Good.

Check LaTeX: used \mathbb{E}, \Delta, do(), \sigma_Y, etc. Formal. Units: points per play. Good.

Check for toy equations: I didn't invent Force/Fatigue. All equations are either from source or formal definitions. Good.

Let's write the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The source document reports 18,019 charted plays in 2026 alone, joined to 103,810 plays of EPA across three seasons [PAGE 1]. The first hop is the schema: FTN charting exposes n_defense_box, n_blitzers, n_pass_rushers, is_play_action, is_rpo, is_screen_pass, is_motion, is_no_huddle, is_trick_play, is_qb_out_of_pocket, read_thrown, is_catchable_ball, is_contested_ball, is_created_reception, is_drop, is_interception_worthy, is_qb_fault_sack, qb_location, starting_hash [PAGE 1]. These fields duplicate a proprietary product class, which changes the information economics of scheme modeling. The second hop is the conditional means table. Play action: n_on=10,941, n_off=36,822, EPA_on=+0.1256, EPA_off=+0.0279, Δ=+0.0978 [PAGE 1]. RPO: n_on=3,943, n_off=99,867, EPA_on=−0.0499, EPA_off=+0.0158, Δ=−0.0657 [PAGE 1]. QB out of pocket: Δ=−0.0357. No huddle: Δ=+0.0262. Blitz 5+ vs rush 4: Δ=−0.0135. Box 8+ vs 6−: Δ=+0.0090. Motion: Δ=+0.0016 across 44,044 plays [PAGE 1]. The document asserts play action is worth +0.098 EPA, "7.7 points of field value per dropback," and that RPO "is negative (−0.066)... worse than not running it" [PAGE 1].

Gray-zone audit. These Δ values are unconditional observational contrasts, not causal effects: play action is selected for, so part of +0.098 is situation, not causation [PAGE 1]. Selection bias arises because offenses call play action in favorable down-distance and personnel matchups. The interception-worthy field is a human call [PAGE 1], introducing inter-rater subjectivity into QB decision quality. Box count exists for only 23,000 of 103,810 plays (~78% missing) [PAGE 1], making any box-based operator singular on the majority of the sample. NGS separation is aggregated per player-week, not per play, so it cannot join to EPA directly [PAGE 1]; using it in a play-selection model risks ecological fallacy. The 2.7× spread in interception-worthy throws (DET 1.64% vs IND 4.47%) [PAGE 1] is a strong process signal, but catchable-ball rate runs 57–69% alongside it, meaning outcome noise remains high. Small-n cells (RPO on: 3,943; box 8+: 2,962) imply high sampling variance in Δ estimates; without reported standard errors, the breakdown regime for statistical significance is undefined. Multi-hop implication: a simulation should treat play action as a play-selection weight (+0.098 EPA exceeds most team-quality gaps) but must condition on game state to avoid overstating causal gain; RPO should be de-weighted; box count should be repurposed as a pass-signal predictor rather than a run-stopping feature.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define probability space (\Omega,\mathcal{F},\mathbb{P}). Let A\in\{0,1\} indicate scheme activation (e.g., A=1 for play action). Let Y=\operatorname{EPA}, measured in points per play. The estimable object from the source is the observational contrast
\[
\Delta_{\text{obs}}(A)=\mathbb{E}[Y\mid A=1]-\mathbb{E}[Y\mid A=0].
\]
From [PAGE 1], \Delta_{\text{obs}}(\text{play action})=+0.0978 points, \Delta_{\text{obs}}(\text{RPO})=-0.0657 points, \Delta_{\text{obs}}(\text{QB out of pocket})=-0.0357 points, \Delta_{\text{obs}}(\text{no huddle})=+0.0262 points, \Delta_{\text{obs}}(\text{blitz }5+)=-0.0135 points, \Delta_{\text{obs}}(\text{box }8+)=+0.0090 points, \Delta_{\text{obs}}(\text{motion})=+0.0016 points. Units: points per play (EPA). The causal estimand would be \mathbb{E}[Y\mid do(A=1)]-\mathbb{E}[Y\mid do(A=0)], but the source explicitly warns effects are unconditional and confounded by selection [PAGE 1]. Breakdown regimes: (i) n_{\text{box charted}}=23,000/103,810 plays, so the box-count operator is undefined on 80,000 plays [PAGE 1]; (ii) RPO on-cell n=3,943 yields sampling standard error approximately \sigma_Y/\sqrt{3,943}, which for typical EPA per-play standard deviation \sigma_Y\approx 1.0 point is \approx 0.016 points, same order as the observed −0.0135 blitz effect, implying sign instability; (iii) NGS separation is player-week aggregated, so the join key (player, week) collapses play-level variation and cannot be matched to Y without aggregation bias. Verbatim: "Box count is only charted on 23,000 of 103,000 plays" [PAGE 1]. Verbatim: "NGS is aggregated per player-week, not per play, so it cannot be joined to EPA directly" [PAGE 1]. Verbatim: "Play action is worth +0.098 EPA — 7.7 points of field value per dropback" [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage. Play action descends from play-action passing in the West Coast offense and earlier shotgun/option schemes, where run-pass deception creates vertical separation. RPO descends from the spread-option and college read-option imported into the NFL; its "modern" label is a narrative, not an efficiency claim [PAGE 1]. No-huddle descends from the hurry-up offenses; motion descends from pre-snap shifting. Blitzing descends from the zone blitz. Multi-week traps: NGS separation is reported per player-week (KC 3.45 yd, BUF 3.43, CHI 3.34 … ARI 2.74, PHI 2.80, CIN 2.81) [PAGE 1], so week-to-week measurement noise and injury-driven substitution can create false trends. Interception-worthy rate (DET 1.64% vs IND 4.47%) [PAGE 1] may regress toward league mean over multiple weeks; a single-week spike is not a stable QB trait. Play-action effectiveness is subject to defensive adaptation: if an offense overuses play action, defenses key the run fake, eroding the +0.098 EPA edge over a multi-week horizon. The source's RPO finding contradicts consensus; teams that treat RPO as a default will incur a cumulative −0.0657 EPA penalty per RPO play [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. Under game-state stress (trailing, late clock, third-and-long), coaches regress to conservative dropback passing and abandon play action despite its +0.098 EPA advantage, because play action is perceived as slower-developing and riskier under pressure. The model must therefore include a crisis interaction: \Delta_{\text{EPA}}^{\text{crisis}}(A=\text{play action}) < \Delta_{\text{EPA}}^{\text{baseline}}. Counter-trap. Defenses observing a play-action heavy offense will increase run-fit discipline and spy the QB, turning the scheme into a counter-trap; the optimal policy is a mixed strategy, not a deterministic weight. Clock. No-huddle yields Δ=+0.0262 EPA [PAGE 1] but accelerates play count and consumes clock; in end-game situations the EPA benefit may be vetoed by clock preservation needs. QB decision quality separates decision from result: IND's 4.47% interception-worthy rate vs DET's 1.64% [PAGE 1] shows a QB can maintain a clean stat line while hiding a high bad-throw rate. A crisis-aware model should weight interception-worthy rate over INT count, because INTs are touchdown-luck dependent and low-frequency [PAGE 1].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical vetoes. NGS time-to-throw and separation define a physical envelope: KC's 3.45 yd separation vs ARI's 2.74 yd [PAGE 1] is bounded by defensive-back speed and route-tree complexity; no scheme weight can overcome a separation floor below ~2.8 yd against press coverage. Biomechanical veto. is_catchable_ball depends on ball placement and receiver catching radius; wind and precipitation degrade catchable% independently of scheme, but weather is not a charted field [PAGE 1], so any model using is_catchable_ball without weather controls is vetoed in outdoor stadiums. QB-fault sack (is_qb_fault_sack) is mediated by n_pass_rushers and n_blitzers; if the offensive line cannot block five-plus rushers, the −0.0135 blitz benefit to the defense reverses into QB-fault sacks. Weather veto. The source does not chart weather, temperature, or wind; therefore EPA contrasts for deep play action and screen passes are not transportable to adverse-weather games without an exogenous weather layer. Aggregation veto. Box count is missing on ~78% of plays [PAGE 1]; using it as a run-stopping signal on the full population is invalid. NGS per player-week cannot be joined to play-level EPA [PAGE 1], so separation cannot directly reweight play selection without committing ecological fallacy.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios and predictions, falsifiable via nflverse FTN and NGS releases:
1. Veto play-action weighting in trailing game states. Counterfactual: compute conditional ΔEPA for play action only in the subset "trailing by 7+ points, 4th quarter, 1st down." Prediction: ΔEPA attenuates to ≤ +0.020 points per play or becomes negative, because defenses key the run fake and the offense faces predictable passing situations. Verifiable by joining ftn_charting_2026.parquet to play-by-play EPA and filtering game state [PAGE 1].
2. Veto universal RPO de-weighting for mobile quarterbacks. Counterfactual: stratify RPO ΔEPA by QB scramble rate (>10% vs ≤10% of dropbacks). Prediction: for mobile QBs, RPO ΔEPA remains ≥ −0.020 points (or positive) because the run threat is genuine; for pocket QBs, RPO ΔEPA stays at or below −0.040 points [PAGE 1]. The blanket "RPO is negative" finding would be rejected for the mobile-QB stratum.
3. Veto separation-based receiving weights under adverse weather. Counterfactual: correlate player-week separation (NGS leader KC 3.45 yd) with EPA/play in weeks where surface wind speed exceeds 10 mph vs ≤10 mph. Prediction: separation–EPA correlation decays by ≥50% in wind ≥10 mph, while catchable-ball rate remains stable; therefore separation cannot serve as an all-weather play-selection weight [PAGE 1]. All three scenarios are verifiable from the cited local parquet releases without external proprietary data.
</RLVR_COUNTERFACTUAL_VETOES>