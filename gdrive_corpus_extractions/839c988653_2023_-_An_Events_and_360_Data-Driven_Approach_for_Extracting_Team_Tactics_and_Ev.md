---
source: "2023 - An Events and 360 Data-Driven Approach for Extracting Team Tactics and Evaluating Performance in Football - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2023"
pages: 22
model: deepseek/deepseek-v4.1-flash-1017
words: 7985
---

<NATIVE_REASONING>
We need answer to user. Need produce GSE+GSI Frontier Reasoning Foundry format exact XML sections. Need analyze paper. Must include >=1000 words depth, sections exact. Zero betting lines. No fake ratios. Need formal LaTeX equations, units, assumptions, singularity/breakdown regimes, cite exact [PAGE N] markers and verbatim quotes. Need likely evaluate source paper. User gave drive source and pages. Need produce derivation and audit. Need "deep multi-hop derivation & gray-zone audit >=400 words" THINK_TRACE. Need source operators and equations with formal LaTeX, units, page citations, breakdown. Retro causal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need not mention betting lines. Need likely no sports predictions? The prompt is strange GSE/GSI Frontier Reasoning Foundry. Need answer about paper not betting. We can discuss model.

Need ensure citations exact [PAGE N] and verbatim quotes. Need include equations from paper. Need formal LaTeX. Need units. Need discuss variables:
- PrefixSpan sequential pattern mining support threshold 0.3? Table: frequency N=12,812, patterns.
- NMSTPP+360 predicts interevent time, zone, action. Loss = 10*RMSE_interevent_time + CEL_zone + CEL_action [PAGE 8].
- HPUS:
HAS = E(Zone) E(Action|Zone)/E(Interevent time)
E(zone)=0 P(Area1)+5P(Area2)+10P(Area3)
E(Action|Zone)=0 P(Possession end)+5P(Dribble,Pass)+10P(Cross,Shot)
E(Interevent time)=max(1, Interevent time)
HPUS = sum_{i=1}^n \phi(n+1-i) HAS_i
\phi(x)=exp(-0.3(x-1))
HPUS+ equals HPUS if shot/cross else 0; HPUS ratio = sum HPUS+ / sum HPUS. Need units: HAS dimension? E(zone) has "threat value" maybe points 0,5,10 dimensionless; E(action|zone) same; divide by seconds? E(interevent time) seconds. HAS units points per second? But HPUS sum over actions weighted dimensionless. So HPUS units "score units" perhaps. Need mention not SI; paper's arbitrary ordinal scoring. We can state if using SI: E[interevent time] seconds; RMSE seconds; CEL nats (if natural log) or bits if base-2. Loss mixed units: 10 × seconds + nats + nats; scaling factor dimensionless, but adding not physically commensurable; breakdown. This is important. The paper says RMSE multiplied by factor 10 determined empirically [PAGE 8]. So loss is not dimensionally consistent. This is a gray zone. Need formal singularity/breakdown regimes. Singularity for HAS: denominator E(Interevent time)=max(1, interevent time); if interevent time ∈ (0,1), denominator clamped 1; if =0? max(1,0)=1, no singular. But if no clamp, division by zero at interevent time=0; paper clamps min 1. HPUS exp decay: φ(1)=1; φ(n) decays. HPUS+ zero if no shot/cross. HPUS ratio denominator zero if aggregate HPUS=0; undefined/infinite. N small. CEL if class probabilities zero or logits; numerical log(0). RMSE if time units mismatch.

Need discuss support threshold: patterns frequency ~30% "0.3 support" but table shows "frequency" not support. Need distinguish support = fraction of possession sequences containing pattern; N=12,812. Maybe [pass]*7 support 30%. The paper says "achieving a frequency level of approximately 30% (0.3 support)" [PAGE 10]. Need cite.

Need discuss validation: Table 3: NMSTPP+360 total loss 3.01 vs NMSTPP 3.11, zone CEL 1.59 vs 1.66, action CEL .68 vs .70, RMSE .07 same. Paper says reduction 0.09 total loss, zone CEL -0.07, action CEL -0.02, RMSE no change [PAGE 12]. Wait 3.11-3.01=0.10, but they say 0.09. Let's compute: 3.11-3.01=0.10. Their components: 10*RMSE same; zone -0.07; action -0.02 total -0.09. But table values: 3.11 to 3.01 is -0.10. Inconsistency. Need flag. Nice gray-zone audit. Also Table 3 total loss maybe 3.01 vs 3.11, components 10*.07=0.7 +1.59+0.68=2.97 (not 3.01); NMSTPP: .7+1.66+.70=3.06 (not 3.11). Differences due rounding? 0.07 maybe 0.071? Then 0.71 + 1.59 + 0.68 = 2.98. Not 3.01. Could be values rounded. Need say reported totals not exactly reproducible from displayed rounded components; residual 0.03-0.05. And text says 0.09 while table implies 0.10. This is audit.

Need discuss HPUS+ correlation: "substantial correlation with expected goals (xG), actual goals, and final team ranking of 0.87, 0.78, and -0.67" [PAGE 14]. Need note ranking negative because lower rank number better? 1st is better, so negative correlation with rank (if rank 1 best) means higher HPUS+ associated with lower numerical rank. Need cite. Need note n=20 EPL teams? It says teams in EPL 2022/2023. We can infer n=20? Paper doesn't explicitly in snippet maybe EPL teams. Need avoid unverified? It says "all teams in the EPL during 2022/2023" and table includes 20 teams? Let's count Table 4 teams: Liverpool, Man City, Brighton, Chelsea, Tottenham, Man United (6), Arsenal, Leeds, Wolves, Leicester (4 =>10), Aston Villa, Newcastle, Crystal Palace (3=>13), Fulham, West Ham, Brentford, Southampton, Everton, Bournemouth (6=>19), Nottingham Forest (1=>20). So N=20. Good.

Need "retrocausal genealogy" historical/scientific lineage & multi-week traps. Need trace: Gréhaigne tactics [4], Plakias review [5], VAEP [6], xG [20][21], xT etc, Seq2Event [31], NMSTPP [8], PrefixSpan [10], mean shift [9], Transformer [12]. Multi-week traps: support threshold instability across weeks, concept drift, fixture congestion, lineup changes, home/away, weather; using 2021/22 second half to train then apply 2022/23; split chronological to prevent look-ahead [PAGE 10]. But HPUS ratio uses aggregate across matches; if clustering by frequency and HPUS ratio over whole season can entangle schedule effects. Need discuss "retrocausal" as metrics built from future? Actually HPUS uses expected events from model trained on historical data; not look-ahead due sorted dates. But if applying to full 2022/23 and using season aggregates, retrospective. Need mention "look-ahead bias" quote.

Need recursive theory of mind: crisis habit regression vs counter-trap vs clock. Need map to football: teams under pressure revert to safe habits (own-half, pass-based), opponents counter-trap by ceding wing? The paper extracts tactics and HPUS; "clock" = score/time/interevent. Need discuss how recursive ToM applies: manager models opponent model; opposing team adapts; tactics not labeled; "subtly changed or created afresh in order not to be read by opponent" [PAGE 5]. Need quote. Crisis habit regression: high pressure/low HPUS ratio leads to possession-end. Counter-trap: opponent-wing tactics high HPUS but low conversion; teams may bait. Clock: interevent time and end-of-possession weighting φ(n+1-i); HPUS focuses closing actions [PAGE 8]. Need not overdo.

Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need show how weather/physical conditions veto claims from event/360 model. Source lacks weather, physical load, biomechanics. 360 freeze-frame only visible players, no tracking velocities? It has x,y, goalkeeper, actor, teammate; absent players zeros [PAGE 7]. Weather not included. Therefore cross-layer veto: any claim that tactic causes outcome across weeks is vetoed without weather/load/pitch condition. Need articulate proof: model only on-ball events, 360 freeze frames; no continuous tracking, no velocity/acceleration, no ground conditions. Physical veto: fatigue alters interevent time and action selection; if interevent time distribution shifts, HAS changes. Biomechanical: pass/dribble categorization hides body orientation, pressure, limb. Weather: wet pitch changes pass speed and dribble success; not in features. The paper's own note: no expert insights to confirm tactic labels [PAGE 11]; limitations. Need cite.

Need RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. "RLVR" maybe reinforcement learning with verifiable rewards? Need create counterfactual scenarios that would veto model claim if observed. Must be verifiable and predictions. No betting. Need likely:
1. 360 ablation counterfactual: If adding 360 features yields no improvement under matched training/seed/chronological split, NMSTPP+360 claim vetoed. Prediction: total loss difference ≤0 and zone/action CEL not lower; Table 3 reported -0.09/-0.10. Need specify metric.
2. HPUS+ ranking correlation null: If with full 20-team season, HPUS+ vs final rank correlation not significantly negative (e.g., Spearman ≥0 or p>0.05), claim "HPUS metric unveils offensive ability" vetoed. Prediction: reported r=-0.67; a null would produce near 0. Need note correlation type not stated; likely Pearson? Need exact quote.
3. PrefixSpan tactic stability: If support threshold 0.3 on held-out season does not recover five patterns at ≥30% or patterns not distinct, "five team tactics" vetoed. Prediction: [own-half]*5 support 43%, [dribble]*7 32%, etc. If held-out support drops below threshold or rank order flips. Could also test weather/load: if adding match-level weather/physical covariates eliminates HPUS+ correlation, cross-layer veto. Need 3 verifiable scenarios. Need "predictions" with exact expected values.

Need include "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX. Need cite pages. Need include verbatim quotes. Need exact [PAGE N] markers. Need include all required XML. No markdown? We can use XML sections. Need >=1000 words total; likely around 2500-3500. Need not include betting lines. Need not mention spreads etc.

Need ensure "ZERO TOY EQUATIONS": We can critique toy ratios but not invent fake ratios. We can state equations from paper. We may define support s(pattern)=count/N, but that's standard from sequential pattern mining, not fake. But if source doesn't explicitly define, can state assumption. Need formal units and assumptions.

Need "when source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Need include several verbatim quotes with [PAGE N]. Need exact wording. Let's extract quotes:
- Abstract: "the sequential pattern mining algorithm PrefixSpan to extract team tactics from possessions, the Neural Marked Spatio Temporal Point Process (NMSTPP) model to model expected team behaviour for a fair comparison between teams, and the Holistic Possession Utilisation Score (HPUS) metrics to evaluate teams’ possessions." [PAGE 1]
- PAGE 2: "The NMSTPP model predicts the action types, zones, and interevent times of the average team's subsequent events." [PAGE 2]
- PAGE 5: "Tactical movements are not something that is strictly labelled and identified because they are subtly changed or created afresh in order not to be read by the opponent." [PAGE 5]
- PAGE 5 Table 1 percentages. Page 5.
- PAGE 10: "achieving a frequency level of approximately 30% (0.3 support)" [PAGE 10].
- PAGE 10: "the match dates were meticulously sorted in ascending order to prevent any form of look-ahead bias" [PAGE 10].
- PAGE 8: loss formula.
- PAGE 8: "Actions that effectively contribute to an attack near the opponent's goal are attributed a maximum HAS of 10, while a minimum possible HAS that can be assigned is 0." [PAGE 8]
- PAGE 9: HPUS formula.
- PAGE 9: "HPUS+ matches HPUS if the possession encompasses a shot or cross; otherwise, HPUS+ takes on a value of 0." [PAGE 9]
- PAGE 12: "a reduction of 0.09 observed in the total loss" [PAGE 12]. And Table 3.
- PAGE 14: "HPUS+ metric exhibits substantial correlation with expected goals (xG), actual goals, and final team ranking of 0.87, 0.78, and -0.67" [PAGE 14].
- PAGE 11: "confirming such connections would necessitate an in-depth understanding of the game and the insights of experts, which were not accessible for this study." [PAGE 11]
- PAGE 7: "Any absent player features in the captured frame are substituted with zeros." [PAGE 7]
- PAGE 16: "Manchester City outshined Arsenal, which in turn surpassed the average team." [PAGE 16]
Need include exact quote markers.

Need formulate equations with units:
Let \(t_i\) be event time, \(\Delta t_i = t_i - t_{i-1}\) seconds, \(z_i \in \{1,\ldots,20\}\), \(a_i \in \{\text{pass},\text{dribble},\text{possession end},\text{cross},\text{shot}\}\).
Loss:
\[
\mathcal{L}=10 \cdot \mathrm{RMSE}(\Delta t)+ \mathrm{CEL}(z)+\mathrm{CEL}(a)
\]
Units: first term has scale of seconds if RMSE seconds; CEL in nats if natural log; if base-2 bits. The factor 10 dimensionless. Dimensionally heterogeneous; it is a weighted objective not physical energy. Breakdown: if time scale seconds vs minutes, factor changes; if class frequencies reweighted, CEL changes; if any class probability zero, CEL → ∞ without smoothing. If RMSE in seconds and CEL nats, cannot claim total loss improvement "0.09" has physical units. Need state.

HPUS:
\[
HAS_i = \frac{E[Z_i]\,E[A_i|Z_i]}{E[\Delta t_i]},\quad
E[Z_i]=0P(A_1)+5P(A_2)+10P(A_3),\quad
E[A_i|Z_i]=0P(\text{possession end})+5P(\text{dribble,pass})+10P(\text{cross,shot}),\quad
E[\Delta t_i]=\max(1,\Delta t_i)
\]
Units: numerator "threat points squared"? Wait E[Z] points, E[A|Z] points, denominator seconds -> points^2? Let's examine. E[Z] is expected area value (dimensionless points 0,5,10). E[A|Z] is expected action value (points). Product points^2. Divide seconds -> points^2/s. But paper likely doesn't care. HAS max? If E[Z]=10, E[A]=10, denom=1 -> 100. But paper says max HAS 10? Wait! It says "Actions that effectively contribute to an attack near the opponent's goal are attributed a maximum HAS of 10, while a minimum possible HAS that can be assigned is 0." But formula product 10*10/1=100. Contradiction. Need flag! This is important gray-zone. Let's verify: PAGE 8 formula: HAS = E(Zone) E(Action|Zone) / E(Interevent time). E(zone) = 0P(Area1)+5P(Area2)+10P(Area3). E(Action|Zone)=0P(Possession end)+5P(Dribble,Pass)+10P(Cross,Shot). E(Interevent time)=max(1, Interevent time). If both max 10, denominator min 1, HAS max 100. But text says maximum HAS 10. This is a major inconsistency. Maybe E(Action|Zone) is probability-weighted and E(Zone) is? Still max 100. If E(Action|Zone) normalized? It is expectation of action value conditional on zone, max 10. Product / min 1 = 100. Unless E(Zone) is probability? No. This is an excellent audit. Need include. Need say either formula or prose bounding is inconsistent; max under stated formula is 100 "score-points squared per second" (with min denominator 1), not 10. If the intended max is 10, one of the terms must be normalized or rescaled (e.g., divide by 10 or use probabilities not point assignments), but paper does not state. This is a "gray-zone audit." Need cite quote and formula [PAGE 8]. Great.

HPUS:
\[
HPUS = \sum_{i=1}^n \phi(n+1-i) HAS_i,\quad \phi(x)=\exp(-0.3(x-1)).
\]
Units: if HAS units points^2/s, HPUS same times dimensionless weights. But paper treats as score. φ∈(0,1] for x≥1; φ(1)=1, φ(2)=0.7408, etc. Weighted recency: last action i=n gets φ(1)=1; first action i=1 gets φ(n). Actually n+1-i for i=n =1, yes last highest. For i=1, φ(n)=e^{-0.3(n-1)}. Good.
HPUS+ \(=HPUS \cdot \mathbf{1}\{a_j\in\{\text{shot},\text{cross}\}\text{ for some }j\}\)? Paper says if possession encompasses shot or cross. Need define. HPUS ratio = \(\sum HPUS+ / \sum HPUS\). Units cancel dimensionless. Denominator zero breakdown.

Need mention support: \(s(P)=\frac{|\{q\in Q: P\sqsubseteq q\}|}{|Q|}\), with \(N=|Q|=12,812\)? Wait N=12,812 in Table 2. Is that number of possessions? "Frequency (N=12,812)" likely N possessions. Support 0.3. Units fraction dimensionless. Need note Table shows frequency as percent and N; exact count for [pass]*7 30% of 12,812 ≈ 3,843.6, rounding. [dribble]*7 32% ≈ 4,099.84; [own-half]*5 43% ≈ 5,509.16. [opponent-wing]*5 25% = 3,203 exactly. Good.

Need "exact singularity/breakdown regimes" list:
- HAS denominator: if \(\Delta t=0\), max(1,0)=1; no singularity due clamp. If clamp removed, undefined at 0. If \(\Delta t\) negative due clock issues, clamp 1; negative not allowed. If event time in minutes not seconds, denominator max(1, minute) changes.
- HPUS ratio: denominator \(\sum HPUS=0\) when all HAS=0 or no possessions; ratio undefined; if HPUS+ >0 impossible if HPUS=0? not necessarily? HPUS+ subset; if denominator zero, numerator zero too, 0/0.
- CEL: log 0 if predicted probability zero for true class; smoothing/class weights required. Class weights tuned on validation [PAGE 12].
- 360 absent players zeros: zeros are not missing-at-random; model may read zeros as coordinates (0,0) or absent; causes bias for frames with <22 players. [PAGE 7].
- PrefixSpan support threshold: if support too high, no patterns; if too low, combinatorial explosion and spurious patterns. At 0.3, five patterns. Breakdown under concept drift: support below 0.3 in new season.
- Mean shift: bandwidth unspecified; cluster number automatic but sensitive; if bandwidth too large one cluster; too small each point. Paper doesn't provide bandwidth. [PAGE 16-17?] It says mean shift clustering [9] used, but no bandwidth. Need note.
- Correlation n=20: Pearson/Spearman not specified; ranking correlation -0.67 with rank; small n and outlier sensitivity.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe need "Physical/biomechanical/weather veto proof." We need establish proof: The paper's feature set has no physical/biomechanical/weather variables. It uses StatsBomb event and 360 freeze-frame data; 360 includes "five features: (x,y) coordinates, and binary indicators for goalkeeper, actor ... and teammate" [PAGE 7]. No velocity, acceleration, HR, RPE, temperature, rain, pitch. Therefore any causal claim from HPUS/tactics to performance across conditions is underdetermined. Veto rule: A claim \(C\) that tactic T causes HPUS+ advantage is vetoed if observed match-level weather/physical covariates \(W\) are correlated with both T frequency and HPUS+ and adjusting for W removes the association. Need formal: \(HPUS+ = \beta T + \gamma W + \epsilon\); if \(\beta\) becomes non-significant/CI includes 0 after W, veto. Physical: interevent time in denominator, so fatigue/heat increases Δt -> decreases HAS and HPUS, but also may change action mix. Biomechanical: dribble/pass categories don't encode body orientation, pressure angle, limb; 360 gives positions but not kinematics. Weather: wet/cold changes pass speed, first touch, sprint; not in model. Thus cross-layer veto proof: source's strongest claim is predictive/descriptive, not causal. Need cite paper's own limitation [PAGE 11].

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need maybe define:
- Crisis habit regression: Under high opponent HPUS or low own HPUS ratio, teams regress to high-frequency low-risk habitual patterns: own-half (43%) and pass-based (30%). This is testable: HPUS ratio drop and own-half frequency increase in trailing/late-game states. But paper doesn't include score state; only 45-min halves and event data; no scoreline in features? StatsBomb events include? Paper says features exclude score. So cannot verify. Need note.
- Counter-trap: Opponent-wing tactics have high HPUS but not high HPUS+; "while the tactics exhibited substantial potential for an attack, their successful conversion into an attack might prove challenging" [PAGE 16]. So teams may bait opponent into wing possession, then defend box; HPUS overvalues potential. The recursive ToM: manager knows opponent's HPUS+ conversion is low, allows wing; opponent tries to break pattern. The model's "average team" baseline doesn't model opponent-specific reactive policy. It models average team's expected events; not game-theoretic best response. Need cite "average team" [PAGE 2, PAGE 6].
- Clock: φ weighting focuses possession end; interevent time denominator. Late-clock/score urgency can shift action values; paper excludes score/time except halves. HPUS+ counts cross/shot; a cross at end gets high weight. If teams park bus, clock effects. Need test: add match state/time remaining; if HPUS+ correlation attenuates, claim about offensive ability confounded. But no score data in features. Need state.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need include lineage:
- Game theory [1] Palacios-Huerta minimax; robotics [2]; sports analytics [3]; tactics definition [4]; review [5].
- Metrics lineage: xG [20][21], EGV [22], Dangerosity [23], xSOT [3], xA, xT, VAEP [6], OBV/G+, OBSO [26][27], C-OBSO [28], VDEP [29], GVDEP [30], Seq2Event [31], poss-util, NMSTPP [8], HPUS [8].
- Algorithms: PrefixSpan [10], PassVizor [11], Transformer [12], mean shift [9][14], Adam [32].
- Multi-week traps: 2021/22 second half train; 2022/23 apply. Chronological split prevents look-ahead [PAGE 10]. But season-to-season rule changes, transfers, manager changes, fixture congestion, weather. Support patterns may drift. HPUS baseline "average team" trained on 2021/22 may not represent 2022/23. Need test by rolling-origin validation. "Retrocausal" maybe because final rank correlation is retrospective; if used to rank teams after season, it's not prospective. Need say: HPUS+ vs final ranking is in-sample retrospective correlation, not a forecasting test. A multi-week trap is using end-of-season rank to validate a metric built from full-season events; need rolling weekly prediction to avoid leakage. The paper says match dates sorted ascending for modeling [PAGE 10], but HPUS ranking correlation uses 2022/23 as illustrative application, not necessarily out-of-sample? It says 2022/2023 employed as illustrative application; model trained on 2021/22 second half. So ranking correlation is out-of-sample season application. Still, final rank is future relative to early matches; if evaluating after season, uses future information for validation, acceptable for retrospective but not prospective. Need articulate.

Need "THINK_TRACE" >=400 words. Need write deep multi-hop derivation and gray-zone audit. Could be 600-800 words. Must include citations and quotes. Need not expose chain-of-thought? The user explicitly asks THINK_TRACE. We can provide a concise reasoning trace, not hidden chain-of-thought? As AI, we can provide summary reasoning. We should not reveal private chain-of-thought. But can provide "audit trace" with derivations. The prompt asks deep multi-hop derivation. We can give structured derivation. Fine.

Need total >=1000 words. We need ensure all XML sections present exact names. Use `<THINK_TRACE>` etc. No markdown code fences? We can just output XML. Need include LaTeX. Ensure no betting lines. Avoid "odds", "spread", "moneyline". Need not mention.

Need maybe "GSE + GSI Frontier Reasoning Foundry" no need.

Let's plan output structure:

<THINK_TRACE>
Paragraphs:
1. Goal and source mapping. Paper has three-stage pipeline: categorize actions Table 1; zone segmentation; PrefixSpan; NMSTPP+360; HPUS; radar/mean shift.
2. Derivation chain: event -> possession sequence -> support patterns -> expected event distribution -> HAS -> HPUS -> HPUS+ -> ratio -> clustering. Note "average team" baseline.
3. Gray-zone audit: HAS max inconsistency 10 vs 100. Loss total inconsistency 0.09 vs 0.10 and component sum mismatch. HPUS ratio denominator. 360 zero imputation. Support threshold. Correlation n=20. Mean shift bandwidth unspecified. 360 features limited.
4. What claims survive: descriptive extraction and predictive improvement likely; causal/ranking claims need veto. Include exact quotes.
Need >=400 words. We can do ~700.

<SOURCE_OPERATORS_AND_EQUATIONS>
List formal equations:
- Action set and possession sequence.
- PrefixSpan support.
- NMSTPP input/target features.
- Loss.
- HAS.
- HPUS.
- HPUS+ and ratio.
- Correlation? Maybe not equation. Include assumptions, units, breakdown regimes.

Need page citations and verbatim quotes. Use [PAGE 5] etc. Include "Table 1 percentages: Pass 48.06%, Dribble 42.39%, Possession End 8.30%, Cross 1.58%, Shot/Error 1.25%" [PAGE 5]. Note percentages sum? 48.06+42.39+8.30+1.58+1.25=101.58? Actually 48.06+42.39=90.45; +8.30=98.75; +1.58=100.33; +1.25=101.58. They exceed 100. Wait Table 1: Pass includes Half Start + Clearance + Pass (Not Corner/Cross) 48.06%; Dribble includes Carry Duel Dribble 50/50 42.39%; Possession End 8.30%; Cross 1.58%; Shot Error 1.25%. Sum 101.58? Yes. Could be rounding or categories overlap? Important gray-zone. Let's recalc: 48.06+42.39=90.45; +8.30=98.75; +1.58=100.33; +1.25=101.58. Indeed >100. Maybe "Shot Error" is 1.25% and "Shot" separate? Table says "Shot Error" maybe two rows? The text: "Shot Shot Error 1.25%" likely "Shot; Error" in same cell? Table row "Shot" with StatsBomb Event(s) "Shot Error" and percentage 1.25%. If error is a separate event but included? They said "remaining StatsBomb events not referenced excluded"; maybe percentages calculated from train set, not sum to 100 due overlapping? But categories should be exclusive. This is another audit. Need mention. But be careful: Table rendered "Shot Shot Error 1.25%" could mean two event types (Shot, Error) combined? If Error is a subset of shot? StatsBomb Error leads to shot. They might categorize Shot and Error together; percentages may overlap? But if exclusive, sum >100 impossible. Good gray-zone. Need include maybe in THINK_TRACE or SOURCE. Use cite PAGE 5. This is a strong audit point. Need not overstate; say "the displayed percentages sum to 101.58%, so either rounding, overlap, or a transcription/labeling issue must be resolved before using Table 1 as a mutually exclusive partition." Great.

Need include "N=12,812" and support.

Breakdown regimes:
- Support threshold: \(s(P) < 0.3\) not retained; if all \(s(P)<0.3\), empty tactic set.
- HPUS ratio denom 0.
- CEL log 0.
- HAS clamp and max.
- 360 zeros.
- Mean shift bandwidth (not equation).
- Correlation small n.

<RETROCAUSAL_GENEALOGY>
Historical lineage and multi-week traps. Include references in text. Page citations. Mention chronology split. Multi-week traps: season drift, schedule, weather, lineup, manager, rule changes; retrospective final rank; "illustrative application" [PAGE 10?]. Actually PAGE 10 says 2022/2023 season employed as illustrative application example. Need cite. Also "prevent look-ahead bias" [PAGE 10]. Mention using second half 2021/22 for training; may not capture 2022/23 tactical drift. Use rolling-origin. Good.

<RECURSIVE_THEORY_OF_MIND>
Define three mechanisms: crisis habit regression; counter-trap; clock. Use paper quotes. Discuss testability. Need maybe formal? Not necessarily. Mention model lacks scoreline, opponent-specific policy, manager intent. "average team" baseline. HPUS high for opponent wing but low conversion. Cite [PAGE 16]. Need say recursive ToM means teams alter tactics to avoid being read [PAGE 5]; static extracted patterns are equilibrium artifacts, not universal tactics. Crisis habit regression: own-half 43% and pass 30% are default habits; under pressure HPUS ratio drops. Counter-trap: opponent allows wing because HPUS+ conversion low; if HPUS+ used alone, trap. Clock: φ weights last actions; late possession actions dominate. Need predictions? Could include.

<CROSS_LAYER_VETO_ADJUDICATION>
Formal veto proof. State variables absent. Use quote [PAGE 7] about 360 features. No weather/physical. Give formal model: \(Y = \beta T + \gamma W + \epsilon\). Veto if \(\beta\) unstable. List physical/biomechanical/weather. Need "proof" that source cannot adjudicate: because feature set \(F = \{ \Delta t, z, a, \text{zone-derived}, 360_{x,y,gk,actor,teammate}\}\); \(W \notin F\). Therefore any claim \(T \to Y\) is not identified under omitted variable bias. Need cite [PAGE 7]. Also paper says expert insights not accessible [PAGE 11]. Good.

<RLVR_COUNTERFACTUAL_VETOES>
Three scenarios:
1. Ablation veto: matched seeds, chronological split, same architecture; if NMSTPP+360 total loss ≥ NMSTPP or zone/action CEL not lower. Prediction: reported Table 3: 3.01 vs 3.11; zone 1.59 vs 1.66; action .68 vs .70; RMSE .07 both [PAGE 12]. If replication gives ΔTotal ≥0 or CI includes 0, 360 claim vetoed. Also check total arithmetic.
2. Rank correlation veto: Full 20-team 2022/23; compute pre-specified correlation HPUS+ vs final rank; if correlation not negative or p>0.05, veto. Prediction: paper reports -0.67 [PAGE 14]; xG .87, goals .78. Need specify Spearman? Paper doesn't state; must pre-register. If Spearman with n=20 needs |r|>0.447 for p<0.05 two-tailed? Let's compute critical Spearman n=20 approx 0.447 at 0.05. -0.67 significant. Good. If adjusted for possession volume/strength of schedule/weather and falls below, veto.
3. Pattern stability veto: Re-run PrefixSpan with 0.3 support on held-out 2022/23 or rolling weeks; if five patterns not recovered at ≥30% or support rank order not stable, "five team tactics" vetoed. Prediction: Table 2 supports: pass 30%, dribble 32%, alternating 31/30, opponent-wing 25, own-half 43 [PAGE 10]. Note opponent-wing 25% below 0.3? Wait Table says opponent-wing 25% but text says "achieving a frequency level of approximately 30% (0.3 support)" then Table opponent-wing 25%. This is another inconsistency! They extracted opponent-wing at 25%, which is below 0.3 support. How? Maybe support threshold 0.25? Or 25% frequency and "approximately 30%"? The text says "Table 2 presents the tactics patterns that emerged with notable frequency, achieving a frequency level of approximately 30% (0.3 support)." But Table has 25% for opponent-wing. That's not 0.3. Good catch. Need include. It means either threshold is 0.25 or "approximately" broad. This is important. Need mention in gray-zone audit. Prediction: if strict 0.3 support, opponent-wing [opponent-wing]*5 at 25% should not be extracted; if it is, threshold not 0.30 or support definition different. Great.

Need maybe 3rd scenario can include this exact. Good.

Need not include betting lines. Good.

Need word count >=1000. We'll produce ~3000 words. Need ensure not too verbose? Desired oververbosity 5; user asks depth. Good.

Let's draft carefully. Need XML tags exactly. Use paragraphs. Include LaTeX. Avoid code fences. Need escape? XML with LaTeX has `<` maybe avoid or use \lt. Use `\in`. Use `\{ \}`. Fine. No `<` except tags. Use `\leq`. Use `\mathbb{1}`. Need not use `&`? XML okay if not raw? Ampersand in text can break XML. Avoid "&" or write "and". Since output is text, but tags exact. We should avoid raw `&` in content except maybe "Brighton & Hove Albion" quote. That has ampersand. To keep XML valid, use `&amp;`? But user wants quotes. We can write "Brighton and Hove Albion" or avoid. If quoting exact "Brighton & Hove Albion" need &amp;. Use `&amp;` if needed. But not necessary. In equations `&` not used. Avoid ampersands. Use "and". Good.

Need include quotes verbatim. If quote has apostrophe okay. If quote has ampersand, avoid that quote. Use quotes without &. Good.

Need exact quote "Manchester City outshined Arsenal, which in turn surpassed the average team." has no &. Good.

Need quote "the match dates were meticulously sorted in ascending order to prevent any form of look-ahead bias" exact. Good.

Need quote "HPUS+ matches HPUS if the possession encompasses a shot or cross; otherwise, HPUS+ takes on a value of 0." Good.

Need quote "Actions that effectively contribute to an attack near the opponent's goal are attributed a maximum HAS of 10, while a minimum possible HAS that can be assigned is 0." Good.

Need quote "The NMSTPP model predicts the action types, zones, and interevent times of the average team's subsequent events." Good.

Need quote "Any absent player features in the captured frame are substituted with zeros." Good.

Need quote "while the tactics exhibited substantial potential for an attack, their successful conversion into an attack might prove challenging." Need exact? PAGE 16 says "This implied that while the tactics exhibited substantial potential for an attack, their successful conversion into an attack might prove challenging." We can quote fragment. Good.

Need quote "Tactical movements are not something that is strictly labelled and identified because they are subtly changed or created afresh in order not to be read by the opponent." Exact [PAGE 5]. Good.

Need quote "the HPUS+ metric exhibits substantial correlation with expected goals (xG), actual goals, and final team ranking of 0.87, 0.78, and -0.67" Exact [PAGE 14] has "Notably, the HPUS+ metric exhibits substantial correlation with expected goals (xG), actual goals, and final team ranking of 0.87, 0.78, and -0.67, respectively". Good.

Need quote "a reduction of 0.09 observed in the total loss" [PAGE 12]. Good.

Need quote "achieving a frequency level of approximately 30% (0.3 support)" [PAGE 10]. Good.

Need quote "confirming such connections would necessitate an in-depth understanding of the game and the insights of experts, which were not accessible for this study." [PAGE 11]. Good.

Need quote "The 360 data captures player information present in the video frame for each event. This data includes five features: (x,y) coordinates, and binary indicators for goalkeeper, actor ... and teammate" [PAGE 7]. Exact? Page 7: "The 360 data10 captures player information present in the video frame for each event. This data includes five features: (x,y) coordinates, and binary indicators for goalkeeper, actor (the player executing the on-ball action), and teammate (associated with the player performing the on-ball action)." We can quote fragment. Good.

Need "source operators and equations" maybe "Operator" as transformation. Use "Operator: PrefixSpan support filtration". Fine.

Need maybe mention "N=12,812" support. Good.

Need "units" for CEL: nats. But paper doesn't state log base. We can say "assuming natural log; if base-2, bits". Good.

Need "singularity/breakdown regimes" exact. Good.

Need "formal LaTeX equations, SI/information/probability units, assumptions" done.

Need "retrocausal genealogy" maybe "retrocausal" means sources and future citations. We can write "Lineage moves backward from ... and forward to ...". Good.

Need "multi-week traps" explicitly. Good.

Need "recursive theory of mind" maybe "crisis habit regression vs counter-trap vs clock" exactly. Use those headings. Good.

Need "cross-layer veto adjudication" physical/biomechanical/weather veto proof. Use "Veto proof". Good.

Need "RLVR counterfactual vetoes" with 3 scenarios and predictions. Good.

Need no betting. Good.

Let's write final. Ensure word count. Need maybe not too long but enough. Let's count roughly. THINK_TRACE ~800; SOURCE ~900; others ~1500. Total ~3200. Good.

Potential issue: "HAS max 100" if denominator max(1, Δt) and E(Zone) and E(Action|Zone) each max 10. Yes. But if E(Zone) is expected zone value and E(Action|Zone) is expected action value conditional on zone, yes product. Paper says max HAS 10. We'll flag. Need maybe note "If the intended HAS is bounded to 10, the formula would require a normalization such as dividing by 10 or by max(E[Z]) max(E[A|Z]); the paper gives neither." This is not a fake equation? It's a conditional fix. We can state no invented ratio. Fine.

Need "Table 1 percentages sum >100" calculate. Need cite. Good.

Need "Table 2 opponent-wing 25% below 0.3 support" cite. Good.

Need "Table 3 total loss discrepancy" cite. Good.

Need "HPUS ratio denominator zero" no singularity due clamp. Good.

Need "mean shift bandwidth unspecified" cite [PAGE 9] and [PAGE 16-17]. Good.

Need "correlation type unspecified" cite [PAGE 14]. Good.

Need "action categories" Pass includes Half Start? The paper says Half Start followed by pass but categorized as Pass. Good. Percent sum. Fine.

Need "physical/biomechanical/weather" not in source. We can say "no variables for ..." with proof from feature list [PAGE 7]. Good.

Need "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" but we can treat as "rewardable, verifiable counterfactual tests". We can state "RLVR-style veto" not define. Good.

Need "predictions" in scenarios: include expected metric values. For scenario 1, if replication: total loss 3.01 vs 3.11; but note inconsistency. Prediction: if 360 truly adds info, \(\Delta L<0\), zone CEL and action CEL lower, RMSE unchanged. If not, veto. For scenario 2: correlation -0.67; Spearman critical n=20 ~0.447. If |r| < .447 or positive, veto. For scenario 3: support values: pass 30, dribble 32, alternation 31/30, own-half 43, opponent-wing 25. If strict 0.3, opponent-wing should not appear; if it does, support threshold not 0.30. Good.

Need maybe mention "multi-week traps" in retro: "training on second half 2021/22 and applying to 2022/23" [PAGE 10]. "match dates sorted ascending" [PAGE 10]. "season illustrative" [PAGE 10]. Good.

Need maybe mention "expected goals and actual goals correlations" not betting. Fine.

Let's produce final XML. Ensure no raw `&`. Use "and". Use "P(Action|Zone)" in LaTeX okay. Use `\text{}`. Use `\mathbb{1}`. Good.

Need maybe include a "Verdict" at end? Not required. But can include within sections. No extra section? The prompt says exact XML sections. We should only output those tags. Maybe include all sections. Good.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s pipeline is a three-layer transformation. First, StatsBomb events are collapsed into an action alphabet: Pass, Dribble, Possession End, Cross, Shot/Error, with Table 1 percentages [PAGE 5]. Second, each possession is represented as an action sequence and a zone sequence, and PrefixSpan extracts recurrent subsequences at a stated support level of about 0.3 [PAGE 10]. Third, the NMSTPP+360 model predicts the “action types, zones, and interevent times of the average team's subsequent events” [PAGE 2], and HPUS converts those predictions into a possession score. The stated loss is \(10 \times RMSE_{Interevent time} + CEL_{Zone} + CEL_{Action}\) [PAGE 8]. The stated HAS is \(E(Zone)E(Action|Zone)/E(Interevent time)\), and HPUS is an exponentially recency-weighted sum of HAS values [PAGE 8-9].

The first gray-zone audit is arithmetic and dimensional. The paper says “Actions that effectively contribute to an attack near the opponent's goal are attributed a maximum HAS of 10” [PAGE 8]. But under the printed formula, \(E(Zone)\) can reach 10, \(E(Action|Zone)\) can reach 10, and \(E(Interevent time)=max(1, interevent time)\) has minimum 1. The printed maximum is therefore 100, not 10, unless an unstated normalization exists. This is not a minor rounding issue: it changes the scale and interpretation of HPUS, HPUS+, and the HPUS ratio. A second audit is the loss total. Table 3 reports NMSTPP+360 total loss 3.01 and NMSTPP 3.11, while the text says “a reduction of 0.09 observed in the total loss” [PAGE 12]. The table implies 0.10; the component changes imply 0.09 if one subtracts 0.07 and 0.02. The displayed components also do not exactly reconstruct the displayed totals from the rounded values. A third audit is Table 1: the displayed percentages sum to 101.58 percent, so the categories are either overlapping, rounded in a non-exclusive way, or mislabeled; a mutually exclusive partition should sum to 100 percent [PAGE 5]. A fourth audit is support. The text says the extracted patterns achieve “approximately 30% (0.3 support)” [PAGE 10], but Table 2 lists opponent-wing at 25 percent. Under a strict 0.30 support threshold, a 25 percent pattern should not be retained unless the support definition or threshold differs from the prose. A fifth audit is the HPUS ratio: it is a ratio of aggregate HPUS+ to aggregate HPUS, so it is undefined when the denominator is zero; the paper gives no zero-denominator rule. A sixth audit is 360 imputation: “Any absent player features in the captured frame are substituted with zeros” [PAGE 7]. Zeros are then model inputs, not missing-data indicators, so a frame with fewer than 22 visible players is encoded as coordinates at the origin plus binary zeros. That can bias both zone and action predictions. A seventh audit is external validity: the final-rank correlation of -0.67 [PAGE 14] is a retrospective season-level correlation over roughly 20 teams; the paper does not state whether it is Pearson or Spearman, does not give a confidence interval, and does not adjust for squad strength, schedule, weather, or physical load. The strongest defensible claim is therefore descriptive and predictive-within-sample, not causal. The paper itself concedes that confirming tactic-to-style links “would necessitate an in-depth understanding of the game and the insights of experts, which were not accessible for this study” [PAGE 11].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define a possession sequence \(q=(e_1,\ldots,e_n)\), where \(e_i=(\Delta t_i,z_i,a_i)\). Here \(\Delta t_i=t_i-t_{i-1}\) is in seconds; \(z_i\in\{1,\ldots,20\}\) is the Juego de posición zone; \(a_i\) is the action category from Table 1 [PAGE 5, PAGE 7]. The paper states that the target features are “the interevent time, zone, and action of the event occurring at time \(t\)” and that inputs span \(t-1\) to \(t-40\) [PAGE 7].

Operator 1: PrefixSpan support filtration. For a pattern \(P\) and possession set \(Q\), the standard support is
\[
s(P)=\frac{|\{q\in Q: P\sqsubseteq q\}|}{|Q|},
\]
where \(\sqsubseteq\) denotes subsequence containment. Support is dimensionless. The paper reports \(N=12,812\) and patterns at about 0.3 support [PAGE 10]. Its Table 2 gives pass-based \([pass]^{*7}\) at 30 percent, dribble-based \([dribble]^{*7}\) at 32 percent, alternating pass-dribble at 31/30 percent, opponent-wing at 25 percent, and own-half at 43 percent [PAGE 10]. Breakdown regimes: if \(s(P)<\tau\), the pattern is excluded; if \(\tau\) is too high, the tactic set is empty; if \(\tau\) is too low, the pattern set explodes and becomes spurious. The prose threshold and the 25 percent opponent-wing row are not mutually consistent under a strict \(\tau=0.30\).

Operator 2: NMSTPP+360 loss. The printed cost is
\[
\mathcal{L}=10\,\mathrm{RMSE}_{\Delta t}+\mathrm{CEL}_{z}+\mathrm{CEL}_{a}.
\]
If \(\Delta t\) is in seconds, the RMSE term has seconds as its unit; CEL is in nats under natural log, or bits under base-2 log. The factor 10 is dimensionless and was “determined via empirical observation” [PAGE 8]. Assumption: the three terms are commensurable after scaling. Breakdown: if any true-class predicted probability is zero, CEL diverges without smoothing; if the time unit is changed from seconds to minutes, the effective weight of the RMSE term changes; if class weights are tuned on validation, as stated [PAGE 12], the CEL is no longer the unweighted cross-entropy. The reported totals in Table 3 are 3.01 and 3.11, while the text says a “reduction of 0.09” [PAGE 12]; the displayed rounded components do not exactly reconstruct the displayed totals.

Operator 3: Holistic Action Score. The paper defines
\[
HAS_i=\frac{E[Z_i]\,E[A_i\mid Z_i]}{E[\Delta t_i]},
\]
with
\[
E[Z_i]=0P(A_1)+5P(A_2)+10P(A_3),
\]
\[
E[A_i\mid Z_i]=0P(\text{possession end})+5P(\text{dribble},\text{pass})+10P(\text{cross},\text{shot}),
\]
\[
E[\Delta t_i]=\max(1,\Delta t_i).
\]
The constants 0, 5, and 10 are ordinal score points, not SI units. If one treats them as dimensionless points, HAS has units of points squared per second under the printed product. The paper instead says the maximum HAS is 10 [PAGE 8], which conflicts with the printed formula’s maximum of 100 when both expectations are 10 and the denominator is 1. Assumption for any use: either the formula is normalized elsewhere, or the prose bound is the intended scale. Breakdown: the clamp \(\max(1,\Delta t_i)\) prevents division by zero at \(\Delta t_i=0\), but it also makes all sub-second interevent times identical in the denominator. If the clamp were removed, HAS would be singular at \(\Delta t_i=0\). If \(\Delta t_i\) is recorded in minutes rather than seconds, the denominator changes by a factor of 60.

Operator 4: HPUS and HPUS+. The paper defines
\[
HPUS=\sum_{i=1}^{n}\phi(n+1-i)HAS_i,\qquad \phi(x)=\exp(-0.3(x-1)).
\]
The weights are dimensionless and satisfy \(\phi(1)=1\), \(\phi(2)=0.7408\), \(\phi(3)=0.5488\), so the last action receives weight 1 and earlier actions decay. The paper states that HPUS+ “matches HPUS if the possession encompasses a shot or cross; otherwise, HPUS+ takes on a value of 0” [PAGE 9]. Formally, \(HPUS+=HPUS\cdot\mathbb{1}\{\exists j:a_j\in\{\text{shot},\text{cross}\}\}\). The HPUS ratio is
\[
R=\frac{\sum_{\text{possessions}}HPUS+}{\sum_{\text{possessions}}HPUS}.
\]
If the denominator is zero, \(R\) is undefined; if \(HPUS+>0\) while the denominator is zero, the data are inconsistent. The ratio is dimensionless only if numerator and denominator share the same HAS scale. Because the HAS scale is ambiguous, the ratio inherits that ambiguity.

Operator 5: Visual and clustering operators. Radar plots compare HPUS and HPUS+ by tactic for Manchester City, Arsenal, and the average team [PAGE 14-15]. Mean shift clustering uses HPUS ratio and tactic frequency [PAGE 16-17]. The paper does not report the kernel bandwidth, so the cluster count is not reproducible from the text alone. Breakdown: too-large bandwidth collapses all teams into one cluster; too-small bandwidth yields singleton clusters. The final-rank correlations of 0.87 with xG, 0.78 with goals, and -0.67 with rank [PAGE 14] are season-level summaries over about 20 teams; the correlation type and uncertainty are not stated.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is explicit. The paper situates team tactics in game theory, robotics, and sports analytics [PAGE 1], then adopts Gréhaigne et al.’s definition of tactics as spatial management and adaptation to opponents [PAGE 2, reference 4]. It inherits the “Direct” versus “Possession-based” distinction and the review by Plakias et al. [PAGE 3, reference 5]. Its evaluation lineage runs from xG [PAGE 4, references 20-21] through EGV, Dangerosity, xSOT, xA, xT, VAEP, OBV, G+, OBSO, C-OBSO, VDEP, and GVDEP [PAGE 4]. The immediate model ancestors are Seq2Event, poss-util, NMSTPP, and HPUS [PAGE 4, reference 31 and reference 8]. The algorithmic ancestors are PrefixSpan [PAGE 6, reference 10], the Transformer encoder [PAGE 7, reference 12], and mean shift clustering [PAGE 9, reference 9]. This is a retrocausal chain: current HPUS is legible only because earlier metrics converted rare goals into expected-probability valuations, and current tactic mining is legible only because sequential pattern mining had already been applied to pass sequences.

The multi-week traps are serious. The paper trains on the second half of 2021/2022 and applies to 2022/2023 as an “illustrative application example” [PAGE 10]. It states that “the match dates were meticulously sorted in ascending order to prevent any form of look-ahead bias” [PAGE 10]. That prevents direct future leakage inside the training split, but it does not prevent seasonal concept drift: transfers, manager changes, fixture congestion, rule interpretations, pitch conditions, and weather can shift both action mix and interevent times. A pattern at 30 percent support in one half-season need not remain at 30 percent in the next season. A second trap is that the NMSTPP baseline is an “average team” model [PAGE 2, PAGE 6]; if the average changes across weeks, HPUS is a moving baseline masquerading as a fixed one. A third trap is retrospective validation: correlating HPUS+ with final rank after the season is useful description, but it is not a prospective forecast. A rolling-origin test—train through week \(k\), predict week \(k+1\), aggregate only past information—would be the correct multi-week test. A fourth trap is that tactic frequency and HPUS ratio are season aggregates; a team that adopts a tactic late in the season can look similar to a team that used it all season. The paper’s own caveat that expert game understanding was unavailable [PAGE 11] means the pattern labels are statistical, not tactical ground truth.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive problem is that tactics are deliberately unreadable. The paper says “Tactical movements are not something that is strictly labelled and identified because they are subtly changed or created afresh in order not to be read by the opponent” [PAGE 5]. That is a theory-of-mind statement: each team models the other’s model. Three mechanisms follow.

Crisis habit regression: under pressure, teams regress to high-frequency, low-risk habits. The extracted own-half pattern has 43 percent frequency and the pass-based pattern 30 percent [PAGE 10]. These are plausible default habits, but the paper does not include scoreline, time remaining, or pressure state in the feature list [PAGE 7]. So the claim “crisis causes own-half regression” is not identifiable from the published model. A testable prediction is that own-half frequency rises and HPUS ratio falls in trailing or late-game states; without score-state features, the paper cannot verify it.

Counter-trap: opponent-wing tactics have high HPUS but not proportionally high HPUS+. The paper notes “while the tactics exhibited substantial potential for an attack, their successful conversion into an attack might prove challenging” [PAGE 16]. Recursively, a defending team may rationally concede wing possession because the opponent’s conversion probability is low, then defend the box. If so, high HPUS on opponent-wing is a trap indicator, not an offensive-quality indicator. The model’s “average team” baseline does not represent a best-responding opponent, so it cannot distinguish “good wing play” from “allowed wing play.”

Clock: HPUS weights the end of possession through \(\phi(n+1-i)\), and the HAS denominator uses interevent time. The last action gets weight 1, earlier actions decay. This is a clock-like operator: late actions dominate. But the paper does not model match clock, score urgency, or stoppage time. A team that slows interevent time to protect a lead will mechanically lower HAS through the denominator, even if its tactical control is strong. The recursive ToM conclusion is that the extracted patterns are equilibrium artifacts: they describe what teams did against average opposition, not what they would do against an opponent that has adapted to their habits.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is straightforward: the source’s feature set cannot adjudicate physical, biomechanical, or weather causation. The 360 features are stated as “(x,y) coordinates, and binary indicators for goalkeeper, actor ... and teammate” [PAGE 7]. There is no velocity, acceleration, heart rate, RPE, sprint load, body orientation, limb configuration, pitch moisture, temperature, wind, or rain variable. The model therefore cannot separate a tactical effect from a physical or environmental effect.

Formal veto proof: let \(Y\) be HPUS+ or HPUS ratio, \(T\) a tactic frequency, and \(W\) a vector of physical, biomechanical, and weather covariates. The source estimates something like \(Y=\beta T+\epsilon\). If the true data-generating process is \(Y=\beta T+\gamma W+\epsilon\) and \(W\) is correlated with both \(T\) and \(Y\), then the source’s \(\hat\beta\) is biased. A claim that tactic \(T\) causes \(Y\) is vetoed if adding \(W\) makes the \(T\) coefficient statistically indistinguishable from zero, or if the sign reverses. Physical veto: heat, fatigue, and fixture congestion alter interevent time, which is in the HAS denominator; they also alter action selection. Biomechanical veto: pass and dribble categories do not encode body orientation, pressure angle, or first-touch quality; two identical event labels can have different mechanical difficulty. Weather veto: wet or windy conditions change pass speed, bounce, and dribble control, but no weather variable is in the model. The paper’s own limitation—expert insights were unavailable [PAGE 11]—reinforces that the tactic labels are not physically grounded. Therefore the only defensible cross-layer claim is conditional: given the observed event and freeze-frame distribution, the model describes associations. It does not prove that a tactic will survive a change in weather, pitch, or physical load.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: 360 ablation veto. Verifiable test: retrain NMSTPP and NMSTPP+360 with the same chronological 80/10/10 split, same seeds, same class-weight tuning, and same architecture. Prediction if the paper’s claim is true: NMSTPP+360 total loss is lower, zone CEL is lower, action CEL is lower, and RMSE is unchanged. The paper reports 3.01 versus 3.11 total loss, 1.59 versus 1.66 zone CEL, 0.68 versus 0.70 action CEL, and 0.07 versus 0.07 RMSE [PAGE 12]. Veto rule: if the replicated total-loss difference is zero or positive, or if the zone/action CEL differences are not negative, the 360-necessity claim is vetoed. Also veto if the reported 0.09 versus 0.10 arithmetic discrepancy cannot be resolved from the released code.

Scenario 2: season-rank correlation veto. Verifiable test: for the full 2022/2023 EPL team set, pre-register Pearson or Spearman correlation between HPUS+ and final rank. The paper reports -0.67, with xG at 0.87 and goals at 0.78 [PAGE 14]. Prediction if the metric captures offensive quality: the rank correlation is negative and materially stronger than zero. With roughly 20 teams, a two-sided Spearman test at 0.05 has a critical magnitude near 0.45; -0.67 would clear that bar. Veto rule: if the correlation is non-negative, weaker than the pre-registered critical value, or becomes non-significant after adjusting for squad strength, schedule, weather, or possession volume, the claim that HPUS+ “unveils teams' offensive ability” is vetoed.

Scenario 3: pattern-stability veto. Verifiable test: rerun PrefixSpan with the stated 0.3 support on a held-out season and on rolling four-week windows. Prediction if the five tactics are stable: pass-based near 30 percent, dribble-based near 32 percent, alternating near 31/30 percent, own-half near 43 percent, and opponent-wing near 25 percent [PAGE 10]. Veto rule: if the strict 0.30 threshold is used and opponent-wing at 25 percent is still extracted, then the stated support threshold is not the operative threshold; if the five patterns fail to recur at comparable support or their rank order is unstable across windows, the “five team tactics” claim is vetoed. A secondary veto: if adding weather and physical-load covariates removes the HPUS+ rank correlation, the cross-layer causal interpretation is vetoed even if the descriptive patterns remain.
</RLVR_COUNTERFACTUAL_VETOES>