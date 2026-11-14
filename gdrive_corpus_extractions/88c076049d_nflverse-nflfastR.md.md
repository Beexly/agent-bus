---
source: "nflverse-nflfastR.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3430
---

<NATIVE_REASONING>
The user wants me to analyze a source text about nflverse/nflfastR and produce a structured response with specific XML sections, each meeting certain criteria. Let me break down the requirements:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit
   - <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown
   - <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps
   - <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock
   - <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof
   - <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions

Wait, the source text only has 1 page (PAGES: 1). I need to cite exact [PAGE N] markers. Since it's just "SOURCE TEXT: /CorpusRoot/Sports-deploy-fix/nflverse-nflfastR.md PAGES: 1", I should cite [PAGE 1] for any quotes from this source.

Let me plan the content:

<THINK_TRACE>: Need >=400 words. Deep multi-hop derivation about nflfastR's role in GSE training corpus, model lifecycle discipline, ordinal logistic EP variant that was dropped, coaching tau table (+6.77pp held-out) not consumed, wiring-bookkeeping gap, etc. Gray-zone audit: license ambiguity, upstream fragility, R-centric vs Python via parquet, scraped vs frozen files.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations related to Expected Points, Win Probability, Completion Probability, xYAC, CPOE. Units: probability (dimensionless, [0,1]), Expected Points (points), yards. Assumptions: stationarity of NFL play distributions, JSON feed stability, ordinal logistic calibration requirements. Singularity/breakdown regimes: NFL JSON feed shape change, small-sample ordinal logistic calibration failure, database update_db() assumption violation. Page citations [PAGE 1].

<RETROCAUSAL_GENEALOGy>: Historical lineage: nflscrapR -> nflfastR -> nflverse-data. ryurko/nflscrapR-models ordinal-logistic EP variant tried and dropped. Scientific lineage: EP models from Carter & Machol (1971), Romer (2006), WP models. Multi-week traps: 2022-2025 + 2026 W1-4 walk-forward set, frozen season files avoiding re-scraping, star history verification dates.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: teams/coaches reverting to conservative play-calling under pressure. Counter-trap: aggressive 4th down decisions based on EP/WP. Clock: game clock management, win probability curves. The coaching tau table (+6.77pp) as un-consumed model. How GSE might misattribute model consumption.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Since this is about data engineering/model discipline, I need to map to physical layers: scraping layer (NFL JSON feeds), data layer (parquets), model layer (EP/WP/CP/xYAC), deployment layer (update_db, local DB). Weather veto: outdoor stadiums affecting EP/WP (wind, precipitation). Biomechanical: player tracking not in nflfastR play-by-play (it's event data not tracking). Physical: surface, stadium altitude. Need to show veto conditions where the data/model breaks down.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) veto scenarios + predictions. Need to define scenarios where the system would veto a prediction or action. E.g.:
1. NFL JSON feed schema change -> veto re-scrape, fall back to frozen parquet.
2. Ordinal logistic EP calibration drift (Brier score increase) -> veto model consumption, revert to discarded model or baseline.
3. Coaching tau table (+6.77pp) not on prediction path -> veto using it in production until wiring bookkeeping confirms liveness.
Predictions for each.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial depth in each.

Important: No betting lines. No toy equations. Use real formal LaTeX. Units must be SI/information/probability. Citations [PAGE 1].

Let me draft carefully.

Structure:
```xml
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
```

I need to ensure no markdown outside these? The user asked for exact XML sections. I'll provide only these sections.

Let's write content.

THINK_TRACE (>=400 words):
- Discuss nflfastR as engine for GSE training corpus (2022-2025 + 2026 W1-4 walk-forward).
- Multi-hop: Source data from NFL JSON -> nflfastR scraper -> nflverse-data parquets -> GSE training corpus -> model predictions.
- Gray zones: License "Other"/NOASSERTION means code reuse rights unclear even though data is free. R-centric vs Python via parquet creates a boundary where Python shops might mishandle schema. Upstream fragility: NFL.com JSON feeds can change shape silently.
- Model lifecycle: nflfastR ships consumed models or discards them. Example: ordinal-logistic EP variant tried and dropped for bad calibration (from ryurko/nflscrapR-models). GSE has coaching tau table (+6.77pp held-out) with no consumer on prediction path — dead weight vs live component uncertainty.
- The "rebuild discipline" verdict: one document per model stating purpose, consumption status, keep/kill rationale.
- Gray-zone audit: What happens if update_db() assumes local DB maintenance but user doesn't maintain it? Data staleness. Frozen season files avoid re-scraping but introduce version pinning risk.

SOURCE_OPERATORS_AND_EQUATIONS:
Formal LaTeX:
Expected Points: \( EP(s) = \sum_{k} p_k \cdot \text{points}_k \) where \( s \) is game state (down, distance, yardline, score, time), \( p_k \) is probability of scoring outcome \( k \). Units: points (dimensionless score units).
Win Probability: \( WP(t) = P(\text{win} \mid \mathcal{F}_t) \in [0,1] \), a conditional probability given filtration \( \mathcal{F}_t \) of game state up to time \( t \).
Completion Probability: \( CP = P(\text{complete} \mid \text{pass attempt}, \text{features}) \).
CPOE: \( \text{CPOE} = CP_{\text{actual}} - CP_{\text{model}} \), probability points (pp).
xYAC: expected yards after catch in yards (yd).
Ordinal logistic EP variant: \( \log \frac{P(Y \le j)}{P(Y > j)} = \alpha_j - \beta^T x \), dropped for bad calibration (Brier score or calibration curve deviation).
Singularity/breakdown: when NFL JSON feed schema changes, scraper returns null or malformed rows; when \( n_{\text{cell}} < n_{\min} \) for state-space binning, EP estimates have high variance; when ordinal logistic proportional odds assumption violated, model miscalibrates.
Units: probability (dimensionless), Expected Points (pts), yards (yd), time (s).
Citations: [PAGE 1] for all source claims.

RETROCAUSAL_GENEALOGY:
Historical: nflscrapR (2016-ish) -> nflfastR (created 2020-04-25, pushed 2026-10-02). Stars 546 verified 2026-10-02. Underlying data free to use; code license unclear.
Scientific lineage: EP from Carter & Machol (1971), Romer (2006) 4th down, WP models. nflfastR built-in EP/WP/CP/xYAC/CPOE back to 2006.
Multi-week traps: walk-forward set 2022-2025 + 2026 W1-4. Frozen season files vs re-scraping. Star history trap: 546 stars is vanity metric, doesn't indicate code health. Pushed date same as verified date (alive) but could be superficial.
Trap: assuming data access equals method rigor. nflfastR's discipline vs GSE's un-consumed tau table.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under high WP leverage (late game, close score), coaches regress to conservative punts/FG despite EP model suggesting 4th down attempts. This is a habit loop: fear of immediate negative outcome (turnover on downs) overweighted vs long-term EP.
Counter-trap: analytics teams may over-correct by always trusting model EP without considering defensive personnel packages, weather, or quarterback state. The model is consumed but context is dropped.
Clock: game clock \( t \) enters WP nonlinearly; near \( t=0 \), WP becomes a step function (win/loss) with singularity-like sensitivity. Coaching tau table (+6.77pp) sits unconsumed, so in a crisis the system may default to either raw instinct or uncalibrated model without knowing which component is live.
Recursive ToM: GSE thinks nflfastR is just data; nflfastR thinks every model ships or dies; the mismatch causes misattribution of prediction sources.

CROSS_LAYER_VETO_ADJUDICATION:
Layers:
1. Scraping layer: NFL JSON feeds. Veto if feed unreachable or schema mismatch. Physical layer dependency: internet, server uptime.
2. Data layer: nflverse-data parquets. Veto if schema drift between frozen season files and live scrape.
3. Model layer: EP/WP/CP/xYAC. Veto if calibration drift (e.g., EP Brier score > threshold) or small-sample cells.
4. Deployment layer: update_db() assumes local DB maintenance. Veto if DB not maintained or connection fails.
Weather veto: Outdoor stadiums — wind speed \( > \) threshold alters pass CP and EP; precipitation affects surface friction and xYAC. nflfastR play-by-play may lack granular weather per play, causing model input missingness.
Biomechanical: nflfastR is event data, not player tracking. No separation, speed, or acceleration features. Veto for models requiring micro-movement context (e.g., route separation).
Physical: Stadium altitude (Denver), turf vs grass, temperature. These alter ball flight and player performance but are coarse in PBP.
Veto proof: formalize a veto function \( V(\mathbf{x}) = \mathbb{1}\{ \text{layer}_i \text{ fails precondition} \} \).

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Scenario 1: NFL JSON feed schema change. Verifiable: scraper returns HTTP 200 but JSON keys missing expected fields (e.g., `playId` absent). Prediction: pipeline auto-vetoes re-scrape, falls back to frozen nflverse-data parquet; prediction staleness bounded by last frozen release.
Scenario 2: Ordinal logistic EP calibration drift. Verifiable: held-out calibration slope deviates from 1.0 by >0.15 or Brier score increases >10% vs baseline. Prediction: model vetoed from consumption path; system reverts to multinomial/logistic EP or discards variant, matching nflfastR's "ships consumed or discarded" posture.
Scenario 3: Coaching tau table liveness unknown. Verifiable: no record of tau table in prediction-path dependency graph for 2 consecutive weeks. Prediction: +6.77pp held-out gain is not realized in production; system flags as dead weight and removes or documents it before next walk-forward cycle.

Word count check: I need to write enough. Let's aim for ~200-250 words per section except THINK_TRACE which is 400+. Total >1000.

Let me write carefully, ensuring formal LaTeX and no betting language.

I should not mention spreads, totals, moneylines, odds. Avoid "odds" entirely. Use probability instead.

Let's draft.

THINK_TRACE content (approx 450 words):
Start with multi-hop derivation. NFL JSON -> nflfastR -> nflverse-data -> GSE corpus. Discuss license ambiguity. Discuss model lifecycle discipline. Contrast ordinal logistic EP dropped vs GSE tau table unconsumed. Gray-zone audit: upstream fragility, R vs Python boundary, update_db assumptions, frozen file version pinning. The wiring-bookkeeping gap.

SOURCE_OPERATORS_AND_EQUATIONS:
Equations with units. Assumptions. Breakdown regimes. Citations [PAGE 1].

RETROCAUSAL_GENEALOGY:
Historical/scientific lineage. Multi-week traps.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION:
Physical/biomechanical/weather veto proof.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios + predictions.

Let me write the final output. Ensure XML tags are exact. No extra text outside.

Need to be careful: "odds" appears in betting context. I won't use it. I might say "odds ratio" in logistic regression context? That could be seen as betting-related? The invariant says "Never mention spreads, totals, moneylines, or odds." It's safer to avoid "odds" entirely, even in statistical contexts. I'll use "log-odds" -> maybe avoid. I can use "logit" instead of log-odds. For ordinal logistic, I can write the cumulative logit without saying the word "odds". I'll say "cumulative logit" or just show equation.

Also "zero toy equations": no Force/Fatigue ratios. I will only use real formal equations tied to the source.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The multi-hop derivation begins at the source: nflfastR is an R package that scrapes NFL JSON feeds and compiles play-by-play data back to 1999, with built-in Expected Points (EP), Win Probability (WP), Completion Probability (CP), Yards-After-Catch (xYAC), and CPOE models [PAGE 1]. The data flows into GSE's training corpus—the 2022–2025 plus 2026 W1–4 walk-forward set—meaning nflfastR is not a peripheral tool but the engine of record for GSE's historical feature construction [PAGE 1]. The first gray zone is licensing: the API carries "Other"/NOASSERTION with no explicit SPDX identifier, so code reuse rights are legally unclear even though the underlying data is free to use [PAGE 1]. This creates an audit risk where a downstream Python shop might consume parquet outputs without realizing the scraper code itself lacks a MIT-style declaration.

The second hop concerns model lifecycle discipline. nflfastR publishes model write-ups and adheres to a strict posture: every shipped model is either consumed in production or discarded [PAGE 1]. The source explicitly cites an ordinal-logistic EP variant that was tried and dropped for bad calibration, traced to ryurko/nflscrapR-models [PAGE 1]. GSE, by contrast, maintains a coaching tau table with a +6.77pp held-out improvement that sits with no consumer on any prediction path [PAGE 1]. This is a wiring-bookkeeping gap: GSE cannot assert which components are live and which are dead weight. The derivation therefore identifies a structural asymmetry—nflfastR's release-notes discipline exposes GSE's lack of a single-document-per-model registry stating purpose, consumption status, and keep/kill rationale [PAGE 1].

The third hop identifies operational failure modes. `update_db()` assumes the user maintains a local database [PAGE 1]; if that assumption is violated, the pipeline silently serves stale state. Heavy pulls are discouraged in favor of frozen season files from nflverse-data [PAGE 1], which avoids scraper fragility but introduces version-pinning risk: if the frozen file schema drifts relative to the live NFL JSON feed, downstream features break without a scraper error to signal it. The scraping layer is upstream-fragile, depending on NFL.com JSON feeds remaining reachable and shaped identically [PAGE 1]. Because GSE's corpus is drawn from this engine, any silent schema change propagates into model inputs with no intrinsic alarm. The gray-zone audit concludes that GSE's problem is not data access but method rigor: it must rebuild the discipline of model provenance, not the scraper itself [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let game state be \(s \in \mathcal{S}\), where \(\mathcal{S}\) is the discrete space defined by down, distance-to-go, yardline, score differential, time remaining, and possession. The Expected Points operator is
\[
EP(s) = \sum_{k \in \mathcal{K}} p_k(s) \cdot \Pi_k,
\]
where \(p_k(s)\) is the modeled probability of scoring outcome \(k\) (touchdown, field goal, safety, no score, turnover) from state \(s\), and \(\Pi_k\) is the point value of outcome \(k\) in points (dimensionless score units). Units: EP is measured in expected points (pts).

Win Probability at game time \(t\) is the conditional probability
\[
WP(t) = P\bigl(W \mid \mathcal{F}_t\bigr) \in [0,1],
\]
where \(W\) is the win event and \(\mathcal{F}_t\) is the filtration of observed game states through time \(t\), measured in seconds (s). Completion Probability is
\[
CP = P\bigl(C \mid A, \mathbf{x}\bigr) \in [0,1],
\]
conditional on pass attempt \(A\) and feature vector \(\mathbf{x}\). CPOE is the probability-point difference
\[
\mathrm{CPOE} = CP_{\text{observed}} - CP_{\text{model}},
\]
reported in probability points (pp). xYAC is measured in yards (yd).

The dropped ordinal-logistic EP variant used a cumulative-link form
\[
g\bigl(P(Y \le j)\bigr) = \alpha_j - \boldsymbol{\beta}^\top \mathbf{x}, \quad j = 1,\dots,J-1,
\]
with \(g\) the logit link, \(Y\) the ordinal scoring outcome, cutpoints \(\alpha_j\), and coefficients \(\boldsymbol{\beta}\); it was discarded for bad calibration on held-out data [PAGE 1].

Assumptions: (1) NFL JSON feed schema remains stationary across pulls; (2) play-level state space \(\mathcal{S}\) is sufficiently populated that cell counts \(n_s\) support stable probability estimates; (3) ordinal proportional-odds assumption holds for any cumulative-link variant. Breakdown/singularity regimes: if \(n_s < n_{\min}\) for a state bin, EP variance diverges; if the JSON feed changes shape, the scraper returns malformed or null rows; if the proportional-odds assumption fails, calibration error grows without bound and the model must be killed rather than shipped [PAGE 1]. All citations refer to [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The historical lineage runs nflscrapR \(\rightarrow\) nflfastR \(\rightarrow\) nflverse-data frozen parquets. nflfastR was created 2020-04-25, pushed 2026-10-02, and verified at 546 stars on that same date [PAGE 1]. Scientifically, it descends from the Expected Points framework of Carter and Machol (1971), the fourth-down decision analysis of Romer (2006), and subsequent win-probability and completion-probability literatures, compressed into a single R package with models back to 2006 [PAGE 1]. The genealogical trap is multi-week: GSE's walk-forward set spans 2022–2025 plus 2026 W1–4 [PAGE 1], which means any silent break in the scraper or schema drift in frozen season files corrupts not one week but a contiguous multi-season block. A secondary trap is vanity metric confusion: 546 stars and an "alive" push status do not certify methodological soundness or scraper robustness [PAGE 1].

Another lineage trap is the confusion of data access with method rigor. nflfastR's value is not that it makes data free—nflverse-data already does that—but that it ships a published model construction write-up and enforces a consume-or-discard rule [PAGE 1]. GSE inherits the data pipeline but not the discipline; the +6.77pp coaching tau table is a genealogical artifact with no known consumer, breaking the chain of accountability that nflfastR enforces through release notes [PAGE 1]. The multi-week risk is therefore not access but provenance: without a one-document-per-model registry, GSE cannot trace whether a prediction in week 4 of 2026 used a live EP model, a discarded ordinal-logistic variant, or an unconsumed tau adjustment.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of coaching staffs to revert to conservative play-calling—punts and field goals—under high win-probability leverage late in close games, even when the EP model indicates a fourth-down attempt has positive expected value. This regression is recursive: the coach models the opponent as risk-averse, the opponent models the coach as risk-averse, and both converge on suboptimal conservative equilibria that the raw EP surface would exploit.

The counter-trap is analytic over-correction: a prediction system may treat the EP/WP model as context-free truth and ignore roster state, quarterback health, or weather-driven shifts in pass-completion probability. Because nflfastR ships consumed models without tagging their input assumptions [PAGE 1], a downstream system can consume EP while silently dropping the preconditions under which EP was calibrated.

The clock introduces a nonlinear singularity near \(t = 0\): as game time expires, WP approaches a step function over the score differential, making small time-keeping errors disproportionately consequential. GSE's unconsumed coaching tau table (+6.77pp held-out) [PAGE 1] represents a counter-factual coach model that is not on the prediction path. In a crisis, the system therefore regresses to either raw coaching habit or an uncalibrated model, and because GSE cannot state which components are live [PAGE 1], it cannot tell whether the +6.77pp adjustment would have altered the decision. The recursive theory of mind is thus: GSE believes nflfastR is merely a data source; nflfastR's design philosophy assumes every model is either live or dead; the mismatch means GSE operates a hybrid system where dead models may still exert latent influence through undocumented wiring.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Four layers admit formal veto conditions. (1) Scraping layer: internet access and NFL JSON feed reachability. Veto \(V_{\text{scrape}} = \mathbb{1}\{\text{feed unreachable} \lor \text{schema mismatch}\}\); physical dependency on upstream server uptime and DNS resolution [PAGE 1]. (2) Data layer: nflverse-data frozen parquets. Veto \(V_{\text{data}} = \mathbb{1}\{\text{schema drift between frozen release and live scrape}\}\); avoids re-scraping but risks version pinning [PAGE 1]. (3) Model layer: EP/WP/CP/xYAC. Veto \(V_{\text{model}} = \mathbb{1}\{\text{calibration drift} \lor n_s < n_{\min}\}\); e.g., ordinal-logistic EP killed for bad calibration [PAGE 1]. (4) Deployment layer: `update_db()` assumes a locally maintained database [PAGE 1]; veto \(V_{\text{deploy}} = \mathbb{1}\{\text{DB unmaintained} \lor \text{connection failure}\}\).

Weather veto proof: outdoor stadiums introduce wind velocity \(w\) (m/s) and precipitation indicators that alter pass completion probability and xYAC. nflfastR play-by-play lacks granular per-play weather features in the base scrape, so if \(w > w_{\text{thresh}}\) or precipitation is present, the model input vector \(\mathbf{x}\) is missing a physical confounder and the CP/EP prediction should be vetoed until weather covariates are joined. Biomechanical veto proof: nflfastR is event-level play-by-play, not player tracking; it contains no separation, speed, or acceleration features. Any model requiring micro-movement context (e.g., route-snap separation) is vetoed at the biomechanical layer because the input space lacks the necessary degrees of freedom. Physical venue factors (stadium altitude, turf versus grass, temperature) alter ball flight and surface friction but are only coarsely encoded, if at all, in the source data [PAGE 1]. The veto proof therefore holds: the system is sound only if each layer's precondition is checked before consumption; nflfastR's discipline of discarding uncalibrated models provides the model-layer veto, but GSE must supply the data-layer and deployment-layer vetoes explicitly.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: NFL JSON feed schema change. Verifiable trigger: the scraper receives HTTP 200 but expected JSON keys (e.g., play identifiers or drive fields) are absent or retyped for two consecutive pulls. RLVR veto: automatic fallback to the most recent frozen nflverse-data parquet; prediction path is marked stale with a bounded horizon equal to the last frozen release date. Prediction: no live predictions are generated from malformed JSON; production EP/WP outputs use the frozen snapshot until schema is re-mapped, preventing silent feature corruption.

Scenario 2: Ordinal-logistic EP calibration drift. Verifiable trigger: held-out calibration slope deviates from unity by >0.15 or Brier score rises >10% relative to the baseline multinomial EP model over a rolling four-week window. RLVR veto: the ordinal-logistic variant is removed from the consumption path and either discarded or archived, mirroring nflfastR's historic drop of the variant for bad calibration [PAGE 1]. Prediction: production Expected Points revert to the last calibrated model; no predictions are served using the drifting ordinal form, preserving calibration integrity.

Scenario 3: Coaching tau table liveness unknown. Verifiable trigger: the +6.77pp held-out tau table [PAGE 1] has no entry in the prediction-path dependency graph for two consecutive walk-forward weeks. RLVR veto: the tau table is flagged as dead weight and excluded from all prediction outputs until a model document states its purpose, consumption status, and keep/kill rationale. Prediction: the held-out gain is not realized in production; the system either wires the tau table into the path with documentation or retires it, eliminating the wiring-bookkeeping gap identified in the source [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>