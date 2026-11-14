---
source: "WAVE2-ANNEX (1).md"
folder: "/CorpusRoot"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4932
---

<NATIVE_REASONING>
The user has provided a source text (WAVE 2 ANNEX — Deep Research Wave 2 results) and expects me to respond as the GSE + GSI Frontier Reasoning Foundry, following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>

Important constraints analysis:
- Source text provided: PAGES: 1, SOURCE TEXT is the WAVE 2 ANNEX. I must cite exact [PAGE 1] markers and verbatim quotes since source pages are provided.
- Zero betting lines: The text mentions "2,462 locked games", coverage, width, etc. I must NOT turn this into betting advice or mention odds/spreads/totals/moneylines. I can discuss coverage, conformal prediction, statistical guarantees, etc., but not in a betting context.
- Zero toy equations: No invented fake ratios. Use formal LaTeX. Units: SI/information/probability. Breakdown regimes.

Let me structure the response:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Discuss the Wave 1 to Wave 2 reversals, the dependency graph, the PINN Part I/II blocker, the conformal non-composition (R1), SINDy gates, ACI coverage bound ±67pp, Blei VI mean-field SD 0.44× truth at ρ=0.9, Petersen & Zech vacuous bounds ≈33 at season scale, etc. Gray zones: critic pass 2 not landed, Design 2-3 strong drafts not finals, §17.3 transformers owed full read, Part II dossier missing. Multi-hop: how R1 blocks joint guarantee -> affects honest-interval stack -> CQR + conformal on top -> ACI monitor only -> kill criteria. Derive implications.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define:
- Conformal coverage: P(Y_{n+1} ∈ C(X_{n+1})) ≥ 1 - α. CQR quantiles. Barber weighted conformal weights w_i. NUTS divergence, R̂, ESS. SINDy: Θ(X)Ξ = ∂X/∂T (discrete), planted-law gate: |supp(true) ∩ supp(est)|/|supp(true)| ≥ 0.80, |supp(est) \ supp(true)|/|supp(est)| ≤ 0.10. ACI coverage bound ±67pp = ±0.67. Blei VI: SD_VI / SD_true = 0.44 at ρ=0.9. Petersen & Zech bound ≈33 at season scale (vacuous). Kill numbers: subgroup coverage < 82% (0.82) when nominal 90% (0.90); width growth >25% (0.25) for <2pp (0.02) coverage gain. PINN compute >10× for parity. Citations: [PAGE 1] for the annex text. Verbatim quotes: e.g., "the critics converge — PINNs' only defensible use is inversion, not forward simulation", "ACI: ADAPT as drift diagnostic only — its coverage bound is ±67pp at season scale", etc.

Units: probability (dimensionless, [0,1]), percentage points (pp), compute dimensionless ratio, correlation ρ dimensionless, season scale dimensionless time index, ESS dimensionless count, R̂ dimensionless ≥1.

RETROCAUSAL_GENEALOGY: Historical lineage: conformal prediction (Vovk, Gammerman, Shafer; Barber et al. weighted conformal; Romano CQR; Gelman/Betancourt/Vehtari process gates; NUTS Hoffman & Gelman; Caron-Gibbs Bayesian trees; SINDy Brunton et al.; DeepONet Lu et al.; FNO; GNS; PINNs Raissi et al.; Neural ODEs; Pyro; ACI; Blei VI; Petersen & Zech). Multi-week traps: Wave 1 verdicts reversed (FNO ADOPT→REJECT etc.), missing asset field/trajectory corpus, critic pass 2 pending, Part II dossier missing, §17.3 transformers gap. How past decisions trap future builds: PINN arm blocked pending Part II; Design 2-3 not finals; title-page verification standard after six wrong arXiv IDs.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Model the critics, the synthesis author (Motif), QC/Jules, the corpus. Crisis habit regression: under pressure, revert to Wave 1 ADOPT verdicts (FNO, DeepONet, GNS, Pyro) despite Wave 2 REJECT. Counter-trap: the "strong drafts not finals" for Designs 2-3 lures teams into building prematurely; the PINN Part I/Part II citation error is a trap where Part I is cited for parameter discovery reserved to Part II. Clock: critic pass 2 lands at 04-CRITIC-PASS-2.md; build order RK harness → conformal layer → SINDy harness → fit-report gates. Theory of mind: what does QC believe? What does the critic believe? Second-order beliefs about dossier authority vs synthesis.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Although the source is about ML methods, I need to map to physical/biomechanical/weather vetoes. Since GSE likely relates to sports/physics (games, drag/Magnus, RK), I can discuss: physical layer (RK drag/Magnus core, Grossmann cost-accuracy gate, wake condition), biomechanical layer (maybe player/trajectory data missing — field/trajectory corpus GSE does not own), weather layer (not explicitly in text, but season-ordered data, environmental covariates). Veto conditions: missing field/trajectory corpus is a hard veto for operator learning (FNO, DeepONet, GNS). PINN forward simulation vetoed; only inversion allowed. SINDy planted-law gate veto if <80% true support or >10% false. ACI veto as coverage gate (±67pp too wide). Blei VI raw intervals banned (publication veto). Petersen & Zech numeric bounds banned as gates (≈33 vacuous). Weather veto: season-ordered data breaks conformal composition (R1) — non-exchangeability due to temporal/weather drift.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. Need 3 scenarios that are verifiable, with counterfactual vetoes and predictions.
Scenario 1: PINN arm builds forward simulation despite Part II missing -> veto -> prediction: fails no-initial-condition regime or >10× compute.
Scenario 2: Honest-interval stack quotes conformal theorems jointly on season-ordered data -> veto R1 -> prediction: joint guarantee collapses, subgroup coverage <82%.
Scenario 3: SINDy build proceeds without planted-law gate or publishes raw VI intervals / Petersen & Zech bounds -> veto -> prediction: vacuous bounds, false support >10%, coverage failure.
Each with verifiable condition, counterfactual, prediction.

Word count: Need >= 1,000 words total across sections, THINK_TRACE >= 400 words.

Citations: Use [PAGE 1] since only one page provided. Verbatim quotes from source.

No betting lines: Avoid words like spread, total, moneyline, odds, bet, wager, line. The text mentions "games" and "coverage" and "width" — I can discuss statistical coverage intervals but must not frame as betting. I'll refer to "2,462 locked games" as dataset units, not betting events.

Let me draft carefully.

THINK_TRACE: Start with deep multi-hop derivation. Word count target ~500-600 words.

Structure:
- The annex records 13 reversed/narrowed verdicts. Load-bearing reversals: FNO ADOPT→REJECT, DeepONet REJECT, GNS REJECT, all fail due to missing field/trajectory corpus (Register R2). Pyro REJECT; Neural ODE LEARN-ONLY. These are not isolated; they share a common cause: GSE lacks the asset required for operator learning. Multi-hop: missing corpus → operator learning methods cannot be trained/validated → REJECT → dependent designs (Design 1 operator learning parked behind wake condition) blocked.
- PINN: Register R3 critics converge — PINNs only defensible for inversion, not forward simulation. Design 1 PINN arm is BLOCKED pending Part II dossier because Part I is cited for parameter discovery that Part II reserves. This is a citation-order dependency trap. Kill: PINN fails to beat NLS in no-initial-condition regime, or >10× compute for parity.
- R1: conformal stack's four theorems do NOT compose into joint guarantee on season-ordered data. Quote separately, never jointly. This invalidates any naive stacking of Barber weighted conformal + CQR + NUTS/Caron-Gibbs as a single theorem. Honest-interval stack (Design 2) must treat them as separate layers; ACI only monitor. Kill: major subgroup <82% coverage on nominal 90% backtest; or >25% width growth for <2pp coverage gain.
- SINDy (Design 3): discrete form only, behind planted-law gate (≥80% true-support / ≤10% false) + coverage arm. Kill: failing plant or no OOS win vs ridge/persistence.
- Gray zones: Critic Pass 2 RUNNING, not landed; Designs 2-3 strong drafts not finals; §17.3 transformers owed full read (gap audit); six wrong arXiv IDs caught by title-page verification; now ingestion standard.
- Derive QC order: RK harness → conformal layer → SINDy harness → fit-report gates. Design 1 PINN waits on Part II.

I need verbatim quotes and [PAGE 1]. Let's include several.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal LaTeX block.
- Exchangeability/conformal: Let (X_i, Y_i) i.i.d. ~ P, i=1..n. Conformal set C(x) = {y: \bar F( (X_{n+1}, y) ) ≤ ... } maybe simpler: Coverage guarantee P(Y_{n+1} ∈ \hat C(X_{n+1})) ≥ 1 - α under exchangeability. On season-ordered data, exchangeability fails; R1 says theorems do not compose.
- Weighted conformal (Barber): weights w_i = \frac{dQ}{dP}(X_i) or similar; coverage \sum w_i 1{...}. I'll state generically.
- CQR: \hat C(x) = [\hat q_{\alpha/2}(x), \hat q_{1-\alpha/2}(x)] from quantile regression.
- NUTS/HMC: divergence D, R̂ = \sqrt{\frac{\hat V}{W}} (Gelman-Rubin), ESS = \frac{N}{1 + 2\sum_{t=1}^T \rho_t}. Promotion gates: no divergences, R̂ < threshold, ESS sufficient.
- SINDy: \dot X = \Theta(X)\Xi (continuous), discrete form X_{k+1} - X_k = \Theta(X_k)\Xi \Delta t. Planted-law gate: G_1 = \frac{|S^* \cap \hat S|}{|S^*|} ≥ 0.80; G_2 = \frac{|\hat S \setminus S^*|}{|\hat S|} ≤ 0.10.
- Kill thresholds: subgroup coverage \hat\gamma_g < 0.82 vs nominal \gamma = 0.90; width growth \Delta w / w > 0.25 for coverage gain \Delta\gamma < 0.02. PINN compute parity: T_PINN / T_NLS > 10.
- ACI bound: ±67pp = ±0.67 (dimensionless probability). Blei VI: \widehat{SD}_{VI} / SD_{true} = 0.44 at ρ=0.9. Petersen & Zech: bound ≈ 33 at season scale (vacuous; units dimensionless but vacuous means exceeds meaningful range). 2,462 locked games: n = 2462.
- Units: probabilities dimensionless [0,1], pp = 10^{-2}, correlation ρ dimensionless, compute ratio dimensionless, season scale index dimensionless, ESS count, R̂ ≥ 1 dimensionless, games count dimensionless.
- Breakdown regimes: season-ordered non-exchangeability breaks conformal composition (R1); mean-field VI collapses at high ρ (ρ→1); PINN forward simulation ill-posed without initial conditions / Part II; operator learning without field/trajectory corpus is undefined (missing data manifold).

RETROCAUSAL_GENEALOGY:
- Lineage: Vovk et al. conformal; Barber, Candès, etc. weighted conformal; Romano, Sesia, Candès CQR; Gelman, Carlin et al. Bayesian workflow; Betancourt NUTS; Vehtari et al. PSIS-LOSS/R̂; Caron & Fox / Caron-Gibbs Bayesian trees; Brunton, Proctor, Kutz SINDy; Lu et al. DeepONet; Li et al. FNO; Battaglia et al. GNS; Raissi et al. PINNs; Chen et al. Neural ODE; Bingham et al. Pyro; Blei et al. VI; Petersen & Zech distribution-free bounds; ACI (adaptive conformal inference? Tibshirani? Foygel Barber? Actually ACI might be "Adaptive Conformal Inference" by Gibbs & Candès or similar); Sullivan & Mackey proof discipline.
- Multi-week traps: Wave 1 → Wave 2 reversals show verdict instability under depth review. Missing asset (field/trajectory corpus) was present but unnoticed at Wave 1. Six wrong arXiv IDs show ingestion fragility. Critic pass 2 pending creates a decision trap: teams may treat Designs 2-3 as final. Part II dossier missing blocks PINN. §17.3 transformers gap owed full read. These are historical traps that propagate into current build queue.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under schedule pressure, QC/Jules may regress to Wave 1 ADOPT habits (revive FNO/DeepONet/GNS/Pyro from Wave-1 dossiers). Annex explicitly says "Do not revive from the Wave-1 dossiers."
- Counter-trap: The annex marks Designs 2-3 as "strong drafts, not finals." A team reading only the build list might start implementing conformal layer or SINDy harness before Critic Pass 2 lands, baking in unstable gates. Similarly, citing Part I for PINN parameter discovery (reserved to Part II) is a sourcing trap.
- Clock: Evidence order fixed: RK harness → conformal layer → SINDy harness → fit-report gates. Design 1 PINN arm waits on Part II. Critic Pass 2 lands at 04-CRITIC-PASS-2.md. The "clock" is the dependency: no pass 2, no finalized Design 2-3.
- Theory of mind nesting: QC believes dossiers are authority, synthesis is packet summary. Critic pass 1 verified 17 claims (9 HIT / 7 PARTIAL / 1 MISS). Critics converge on PINN inversion-only. Model what the critic believes about the synthesis addendum (9 amendments adopted). Model what Motif believes vs what the dossier text supports ("dossiers survived better than the synthesis").

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: RK drag/Magnus core is the trusted classical simulator; PINN-pattern inverse layer only for coefficient estimation behind Grossmann cost-accuracy gate. Operator learning parked behind restated wake condition. Physical veto: if field/trajectory corpus missing, operator learning (FNO/DeepONet/GNS) cannot be physically grounded → veto.
- Biomechanical layer: GSE does not own field/trajectory corpus (Register R2). This is a data-layer veto for any method requiring observed trajectories (operator learning, GNS). Without it, the state manifold is unobserved; any forward model is unidentifiable.
- Weather layer: Season-ordered data implies temporal drift / non-stationarity (weather, schedule, roster changes). This breaks exchangeability required for conformal composition (R1). Weather-driven covariate shift invalidates joint conformal guarantees; must monitor ACI as drift diagnostic only, not coverage gate.
- Veto register:
  V1: Operator learning without field/trajectory corpus → hard veto (R2).
  V2: PINN forward simulation → veto; inversion only (R3).
  V3: Joint conformal theorem on season-ordered data → veto (R1).
  V4: Raw VI intervals publication → veto (Blei rule; mean-field SD 0.44× truth at ρ=0.9).
  V5: Petersen & Zech numeric bounds as gates → veto (≈33 vacuous at season scale).
  V6: SINDy without planted-law gate (≥80%/≤10%) → veto.
  V7: ACI as coverage gate → veto; drift diagnostic only (±67pp).
- Breakdown: if any veto fires, the corresponding design halts; kill numbers trigger experiment termination.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. RLVR scenarios should be phrased as: if [verifiable condition], then veto [action]; counterfactual prediction: [outcome].
Scenario 1 (PINN citation trap): Condition: Design 1 PINN arm initiates forward-simulation training or cites Part I for parameter discovery before Part II dossier lands. Verifiable: Part II dossier absent; training logs show forward loss on trajectory prediction. Veto: halt PINN forward arm; restrict to inversion coefficient estimation. Counterfactual prediction: In no-initial-condition regime, PINN will fail to beat NLS on synthetic coefficient recovery, or require >10× compute for parity; experiment hits kill number.
Scenario 2 (Conformal composition): Condition: Honest-interval stack quotes the four conformal theorems jointly as a single season-ordered guarantee. Verifiable: proof text contains joint theorem statement applied to n=2,462 season-ordered games without exchangeability restoration. Veto: require separate theorem quotes; split conformal layer into weighted conformal + CQR + ACI monitor. Counterfactual prediction: At least one major subgroup will exhibit coverage <82% (nominal 90%) under temporal drift; joint guarantee will be empirically falsified by backtest.
Scenario 3 (SINDy / VI / Petersen gate collapse): Condition: SINDy harness proceeds without planted-law gate, or pipeline publishes raw VI intervals / Petersen & Zech ≈33 bound as a gate. Verifiable: gate fields show true-support <80% or false-support >10%; or mean-field SD ratio observed ≈0.44 at ρ=0.9; or bound ≈33 used in fit-report. Veto: block SINDy output and ban raw VI intervals/vacuous bounds from publication. Counterfactual prediction: Out-of-sample SINDy will not beat ridge/persistence; published intervals will undercover (mean-field SD 0.44× truth) and the ≈33 bound will be vacuous (exceeds meaningful parameter range).

Make sure no betting language. "Games" is fine as dataset units. Avoid "odds", "spread", etc.

Word count check: THINK_TRACE alone needs >=400 words. Total >=1000. I'll write generously.

Now compose final answer in XML sections exactly.

Ensure citations [PAGE 1] appear. Verbatim quotes: include quotes from source with [PAGE 1].

Let me pick verbatim quotes:
1. "Register R2: all three fail on one missing asset — a field/trajectory corpus GSE does not own."
2. "Register R3: the critics converge — PINNs' only defensible use is inversion, not forward simulation."
3. "R1: the conformal stack's four theorems do NOT compose into a joint guarantee on season-ordered data. Quote them separately, never jointly."
4. "ACI: ADAPT as drift diagnostic only — its coverage bound is ±67pp at season scale."
5. "raw VI intervals are banned from publication (mean-field SDs run 0.44× truth at ρ=0.9)."
6. "its numeric bounds are vacuous at GSE scale (≈33 at season scale), banned as gates."
7. "Do not revive from the Wave-1 dossiers."
8. "the PINN arm cites Part I for parameter discovery its own dossier reserves to Part II — the PINN arm is BLOCKED pending a Part II dossier."
9. "Kill: PINN fails to beat NLS in the no-initial-condition regime, or >10× compute for parity."
10. "Kill: any major subgroup <82% coverage, or >25% width growth for <2pp coverage gain."
11. "Until it lands, Designs 2-3 are strong drafts, not finals."
12. "Title-page verification is now the corpus ingestion standard."

Now write. Must be >=1000 words. I'll aim for ~1400-1600 total.

Check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." My equations are formal and sourced from the text concepts. Good.

Let's write.

One more check: "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I'll include assumptions and breakdown regimes explicitly.

Proceed to final.
</NATIVE_REASONING>

<THINK_TRACE>
The annex records a regime shift between Wave-1 and Wave-2 verdicts, and the depth of the reversal is load-bearing rather than cosmetic. Thirteen Wave-1 verdicts were reversed or narrowed; the signal methods FNO, DeepONet, and GNS (Learning to Simulate) moved from ADOPT/REJECT states to a unified REJECT because they share a single missing precondition: Register R2 identifies a field/trajectory corpus that GSE does not own [PAGE 1]. Multi-hop derivation proceeds as follows. Operator-learning architectures require observations of the state manifold they are meant to approximate; without the field/trajectory corpus, the training distribution is undefined, so any forward operator is unidentifiable. Because Design 1 parks operator learning behind a restated wake condition, the missing corpus does not merely narrow one method—it vetoes the entire operator-learning branch of the ARGON re-scope until the asset is acquired [PAGE 1].

The PINN dependency is more subtle and more dangerous. Register R3 records that critics converge on the position that PINNs' only defensible use is inversion, not forward simulation [PAGE 1]. Yet Design 1's PINN arm is currently BLOCKED because it cites Part I for parameter discovery that the dossier itself reserves to Part II [PAGE 1]. This is a citation-order trap: Part I does not license the parameter-discovery use the synthesis assigns to it, so the inverse layer cannot proceed on the evidence currently in hand. The kill criteria are explicit: PINN fails to beat NLS in the no-initial-condition regime, or requires more than 10× compute for parity [PAGE 1]. These are verifiable termination conditions, not vague aspirations.

The honest-interval stack (Design 2) rests on Register R1, which states that the conformal stack's four theorems do not compose into a joint guarantee on season-ordered data and must be quoted separately, never jointly [PAGE 1]. This breaks a naive stacking of NUTS/Caron-Gibbs hierarchical BT, Barber weighted conformal, Romano CQR, and ACI into one theorem. Season-ordered data violates exchangeability; therefore a joint coverage claim over n = 2,462 locked games [PAGE 1] is mathematically unsupported without an explicit restoration of exchangeability (e.g., via weighting or blocking). ACI is demoted to a drift diagnostic only, with a coverage bound of ±67pp at season scale—too wide to serve as a coverage gate [PAGE 1]. The kill criteria for Design 2 are quantitative: any major subgroup below 82% coverage on a nominal-90% backtest, or width growth above 25% for less than 2pp of coverage gain [PAGE 1].

Design 3 (MOVE-37 as a method) admits SINDy only in discrete form, behind a planted-law gate requiring at least 80% true-support recovery and at most 10% false-support inclusion, plus a coverage arm [PAGE 1]. The kill condition is failure of the planted law or no out-of-sample win against ridge/persistence. Several gray zones remain. Critic Pass 2 is still running and has not landed at 04-CRITIC-PASS-2.md, so Designs 2-3 are strong drafts, not finals [PAGE 1]. Section 17.3 on transformers is still owed a full read per the gap audit [PAGE 1]. Six hunt-list arXiv IDs were wrong and were caught only by title-page verification, which is now the corpus ingestion standard [PAGE 1]. The build order for QC/Jules is fixed: RK harness, conformal layer, SINDy harness, fit-report gate fields, with Design 1's PINN arm waiting on the Part II dossier [PAGE 1]. The instruction "Do not revive from the Wave-1 dossiers" [PAGE 1] is a standing veto against habit regression to the reversed FNO, DeepONet, GNS, and Pyro verdicts.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted from the Wave 2 Annex [PAGE 1], with units, assumptions, and breakdown regimes.

Conformal coverage (Design 2, R1). Let \((X_i,Y_i)\sim P\), \(i=1,\dots,n\), with \(n=2{,}462\) locked games [PAGE 1]. Under exchangeability, a conformal set satisfies
\[
\Pr\bigl(Y_{n+1}\in \widehat C(X_{n+1})\bigr)\ge 1-\alpha ,
\]
with nominal \(\alpha=0.10\) for 90% coverage. Register R1 asserts that the four conformal theorems do NOT compose into a joint guarantee on season-ordered data; they must be quoted separately, never jointly [PAGE 1]. Assumption: exchangeability or a valid reweighting. Breakdown regime: season-ordered temporal drift (weather, schedule, roster) destroys exchangeability, so any joint theorem statement over the full season is invalid.

Barber weighted conformal. Weights \(w_i\) import target-domain density; coverage is enforced through weighted empirical quantiles. No joint composition with other theorems is licensed [PAGE 1].

CQR (Romano). Conditional quantile interval
\[
\widehat C(x)=\bigl[\widehat q_{\alpha/2}(x),\ \widehat q_{1-\alpha/2}(x)\bigr]
\]
estimated by quantile regression. Deployable as the primary conformal layer in Design 2 [PAGE 1].

Hierarchical BT / NUTS / Caron-Gibbs (Design 2). Bayesian tree priors with NUTS sampling. Promotion gates: zero divergent transitions, \(\widehat R\) below threshold, and effective sample size
\[
\mathrm{ESS}=\frac{N}{1+2\sum_{t=1}^{T}\rho_t}
\]
sufficient for stable posterior intervals. \(\widehat R\ge1\) is dimensionless; ESS is a count [PAGE 1].

SINDy discrete form (Design 3). Continuous \(\dot X=\Theta(X)\Xi\) is discretized as
\[
X_{k+1}-X_k=\Theta(X_k)\,\Xi\,\Delta t .
\]
Planted-law gate [PAGE 1]:
\[
G_1=\frac{|S^*\cap \widehat S|}{|S^*|}\ge 0.80,\qquad
G_2=\frac{|\widehat S\setminus S^*|}{|\widehat S|}\le 0.10 ,
\]
where \(S^*\) is true support and \(\widehat S\) estimated support. Units: dimensionless proportions. Kill: failing the plant or no out-of-sample win versus ridge/persistence [PAGE 1].

ACI drift diagnostic. Coverage bound \(\pm 67\text{pp}=\pm 0.67\) at season scale [PAGE 1]. Unit: percentage points (\(1\text{pp}=10^{-2}\) probability). Too wide for a coverage gate; monitor only.

Blei VI restriction. Raw VI intervals banned from publication because
\[
\frac{\widehat{\mathrm{SD}}_{\mathrm{VI}}}{\mathrm{SD}_{\mathrm{true}}}=0.44\quad\text{at }\rho=0.9 .
\]
Unit: dimensionless SD ratio. Breakdown: high posterior correlation \(\rho\to1\) collapses mean-field uncertainty.

Petersen & Zech. Numeric bounds \(\approx 33\) at season scale are vacuous at GSE scale and banned as gates [PAGE 1]. Unit: dimensionless; breakdown: bound exceeds meaningful parameter range.

PINN / NLS kill criterion (Design 1). Synthetic coefficient recovery; PINN arm blocked pending Part II dossier [PAGE 1]. Kill if PINN fails to beat NLS in the no-initial-condition regime, or if
\[
\frac{T_{\mathrm{PINN}}}{T_{\mathrm{NLS}}}>10 .
\]
Unit: dimensionless compute ratio.

Design 2 kill criteria [PAGE 1]:
\[
\widehat\gamma_g<0.82\quad\text{(any major subgroup, nominal }0.90\text{)},
\]
or
\[
\frac{\Delta w}{w}>0.25\ \text{for}\ \Delta\gamma<0.02 .
\]
Units: coverage dimensionless probability; width growth dimensionless fraction.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methods in the annex trace to a specific scientific lineage. Conformal prediction descends from Vovk, Gammerman, and Shafer; weighted conformal from Barber et al.; CQR from Romano, Sesia, and Candès; Bayesian workflow and process gates from Gelman, Betancourt, and Vehtari; NUTS from Hoffman and Gelman; Caron-Gibbs Bayesian trees from Caron and Fox; SINDy from Brunton, Proctor, and Kutz; DeepONet from Lu et al.; FNO; GNS from Battaglia et al.; PINNs from Raissi et al.; Neural ODEs from Chen et al.; Pyro from Bingham et al.; Blei et al. variational inference; Petersen & Zech distribution-free bounds; and Sullivan & Mackey proof discipline. The Wave 1 → Wave 2 reversals are the critical historical event: FNO moved ADOPT to REJECT, DeepONet and GNS to REJECT, Pyro to REJECT, Neural ODE to LEARN-ONLY, SINDy to ADAPT-discrete-only, PINNs to ADAPT-narrow inversion-only, ACI to drift-diagnostic-only, Blei VI to ADAPT-with-banned-raw-intervals, and Petersen & Zech to ADAPT-structure-only-with-vacuous-bounds-banned [PAGE 1].

Multi-week traps are visible in the causal graph. First, the missing field/trajectory corpus (Register R2) was present at Wave 1 but not weighted heavily enough; three major operator-learning methods were advanced on an asset GSE does not own [PAGE 1]. Second, six wrong arXiv IDs entered the hunt list and were caught only by title-page verification, which is now the ingestion standard—evidence that prior corpus union metadata was unreliable [PAGE 1]. Third, Critic Pass 2 has not landed, yet the build list already names conformal layer and SINDy harness as fireable items, creating a trap where draft designs are treated as final [PAGE 1]. Fourth, Section 17.3 on transformers remains unread, a gap audit debt that could reverse future verdicts if transformer-based operator learning is reintroduced [PAGE 1]. Fifth, the PINN Part I / Part II citation error is a sourcing trap: Part I is being used to justify parameter discovery that the dossier reserves to Part II, blocking the Design 1 inverse arm until the missing dossier arrives [PAGE 1]. These traps are retro-causal in the sense that earlier shallow judgments (Wave 1) now constrain later build capacity unless explicitly overridden by the Wave 2 register.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the nested beliefs of the actors. Motif authored the annex as a packet-level summary, but explicitly states the dossiers are the authority and that "dossiers survived better than the synthesis" [PAGE 1]. Critic Pass 1 verified 17 claims—9 HIT, 7 PARTIAL, 1 MISS—against dossier text, and nine critic amendments were adopted into the synthesis addendum [PAGE 1]. QC/Jules are instructed to fire build items in evidence order: RK harness, conformal layer, SINDy harness, fit-report gate fields, with Design 1's PINN arm waiting on Part II [PAGE 1].

Crisis habit regression: under schedule pressure, the build team may regress to Wave 1 habits and "revive from the Wave-1 dossiers" the rejected FNO, DeepONet, GNS, or Pyro methods [PAGE 1]. The annex explicitly forbids this. A second-order belief is that QC trusts the register (R1-R14) over the synthesis summary, because the synthesis may compress or misstate critic findings.

Counter-trap: Designs 2 and 3 are labeled "strong drafts, not finals" until Critic Pass 2 lands at 04-CRITIC-PASS-2.md [PAGE 1]. The trap is that a team reading the build list will begin implementing the conformal layer or SINDy harness with gates that have not passed critic review, baking in unstable thresholds (e.g., the 82% subgroup coverage kill or the 25% width-growth rule) before they are finalized. Relatedly, citing Part I for PINN parameter discovery (reserved to Part II) is a documentation trap that makes the PINN arm appear ready when it is BLOCKED [PAGE 1].

Clock: the dependency clock is ordered. Critic Pass 2 must land before Designs 2-3 are treated as final; the Part II dossier must arrive before the PINN inversion arm proceeds; title-page verification must gate all new corpus ingestion. The "now" of the project is 2026-10-30 ~18:20 CT [PAGE 1], and the next state transition is the landing of 04-CRITIC-PASS-2.md, which collapses the superposition of draft/final for Designs 2-3.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The RK drag/Magnus core is the trusted classical simulator in Design 1. The PINN-pattern inverse layer is admitted only for coefficient estimation behind the Grossmann cost-accuracy gate; operator learning is parked behind a restated wake condition [PAGE 1]. Physical veto V1: without the field/trajectory corpus GSE does not own (Register R2), no operator-learning method (FNO, DeepONet, GNS) can be grounded in observed dynamics; hard veto [PAGE 1].

Biomechanical / data layer. GSE does not own the trajectory observations required to identify the state manifold [PAGE 1]. Veto V2: PINN forward simulation is banned; Register R3 converges that PINNs are defensible only for inversion [PAGE 1]. Veto V3: SINDy is admitted only in discrete form behind the planted-law gate \(G_1\ge0.80, G_2\le0.10\) [PAGE 1].

Weather / temporal layer. Season-ordered data implies non-stationarity from weather, schedule, and roster drift. Veto V4: Register R1 forbids composing the four conformal theorems into a joint guarantee on season-ordered data [PAGE 1]. Weather-driven covariate shift breaks exchangeability, invalidating any single-letter coverage claim over the 2,462-game season unless weighting or blocking restores it. ACI is limited to drift monitoring with a \(\pm 67\text{pp}\) season-scale bound; it cannot serve as a coverage gate [PAGE 1].

Publication / inference layer. Veto V5: raw VI intervals banned because mean-field SDs run \(0.44\times\) truth at \(\rho=0.9\) [PAGE 1]. Veto V6: Petersen & Zech numeric bounds \(\approx33\) at season scale are vacuous and banned as gates [PAGE 1]. Veto V7: ACI may not be used as a coverage gate [PAGE 1].

Breakdown and adjudication: if any veto fires, the corresponding design halts at the fit-report gate fields stage. Kill numbers are the empirical triggers: subgroup coverage below 82% on nominal 90%; width growth above 25% for under 2pp coverage gain; PINN compute ratio above 10×; SINDy planted-law failure or no out-of-sample win versus ridge/persistence [PAGE 1]. The veto stack is ordered: physical/data vetoes (V1-V2) are evaluated before temporal conformal vetoes (V3-V4), which are evaluated before publication vetoes (V5-V7).
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with counterfactual predictions.

Scenario 1 — PINN forward-simulation launch before Part II. Verifiable condition: Design 1's PINN arm initiates trajectory-prediction training or cites Part I for parameter discovery while the Part II dossier remains absent [PAGE 1]. Veto: halt the forward-simulation arm; restrict PINNs to inversion coefficient estimation behind the Grossmann gate [PAGE 1]. Counterfactual prediction: in the no-initial-condition regime, PINN will fail to beat NLS on synthetic coefficient recovery, or will require more than 10× compute for parity, triggering the stated kill number [PAGE 1].

Scenario 2 — Joint conformal theorem on season-ordered data. Verifiable condition: the honest-interval stack quotes the four conformal theorems jointly as a single season-ordered guarantee applied to the 2,462 locked games without exchangeability restoration [PAGE 1]. Veto: require separate theorem quotes (Barber weighted conformal, CQR, NUTS/Caron-Gibbs gates, ACI monitor) per Register R1 [PAGE 1]. Counterfactual prediction: under temporal drift, at least one major subgroup will exhibit coverage below 82% on the nominal-90% backtest, falsifying the joint guarantee and triggering Design 2's kill criterion [PAGE 1].

Scenario 3 — Ungated SINDy or banned interval publication. Verifiable condition: the SINDy harness proceeds without the planted-law gate (\(G_1<0.80\) or \(G_2>0.10\)), or the pipeline publishes raw VI intervals or the Petersen & Zech \(\approx33\) bound as a gate [PAGE 1]. Veto: block SINDy output until gate fields pass; ban raw VI intervals and vacuous bounds from publication [PAGE 1]. Counterfactual prediction: out-of-sample SINDy will not beat ridge/persistence; published mean-field intervals will undercover at the observed \(0.44\times\) SD ratio when \(\rho=0.9\); and the \(\approx33\) bound will be vacuous at GSE scale, producing no decision-relevant gate [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>