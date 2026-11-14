---
source: "GSE-REPO-INTELLIGENCE.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 8
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3780
---

<NATIVE_REASONING>
The user wants me to analyze a source document (GSE REPO INTELLIGENCE — Master Index, page 8) and produce a response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force / Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE 8] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis of the GSE repo intelligence document, focusing on the technical/infrastructure aspects without mentioning betting lines.

Let me plan:

THINK_TRACE: Multi-hop derivation about the GSE pipeline state, leakage, calibration, feed watchdogs, temporal safety. Gray-zone audit: honest rows, descriptive-only validation, BLOCKED-ON-PRECISION, unverified walk-forward numbers. Multi-hop: Wire 5 held-out checker -> leakage gate -> calibration rows -> convergence to no enforcement tooling -> weak point #1, #6. Must be >=400 words. Cite [PAGE 8] and quotes.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations. Define leakage predicate, temporal fencing, calibration error ECE, conformal prediction, PIT uniformity, NGBoost distribution, etc. Units: bits/nats, probability [0,1], epochs/weeks, SI seconds for Friday 18:00 ET. Breakdown regimes: small-n ECE noise, CI straddling zero, exchangeability failure, archived repos singularity. Page citations [PAGE 8].

RETROCAUSAL_GENEALOGY: Historical lineage: walk-forward calibration, leakage tests from solo repos (cbratkovics/fantasy-football-ai, jackc625/nfl-predict), NeMo Curator decontamination, verified_calibration, probmetrics, MAPIE, crepes, ngboost, uncertainty-toolbox, R1 staged reasoning, Optuna, Dolma data sheets, MATH-SHEPHERD. Multi-week traps: W1–4 live-check, drift, season-to-season variance, recalibrate per season never global map.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Agents cold-reading Sports repo every session (no repo memory, weak point #8). Crisis habit: rebuilding from scratch each session. Counter-trap: Cerebro-code-memory three-layer design. Clock: Friday 18:00 ET injury gate DataGapError, W1–4 live-check, August-9 stale branches, late-Sept signal-ledger freshness.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Weather prior labeled prior, no season fitted. Injury gate DataGapError before Friday 18:00 ET. Feed watchdog. Biomechanical? Not much in source, but I can discuss the veto layers: signal validity, temporal fencing, feed integrity, calibration CI lower bound refusal. Physical layer: data pipelines, CPU serving via ONNX, no A10G spend.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. Rule-based rewards, never learned judge. KL-control against honest-refusal reference policy. Scenarios: (1) leakage contamination in walk-forward fit -> veto training run; (2) calibration CI straddles zero -> signal unmeasured, no adjustment ships; (3) exchangeability martingale drift alarm on live-check -> discard isotonic map, never average. Predictions for each.

Word count >=1000 across sections. Let me make sure each section is substantial. THINK_TRACE needs >=400 words alone.

I must not mention betting lines, spreads, totals, moneylines, odds. I must avoid toy equations like Force/Fatigue. All equations must be formal LaTeX with proper definitions.

Cite exact [PAGE 8] markers and verbatim quotes. Since the source is labeled PAGE 8, I'll cite [PAGE 8] throughout.

Let me draft carefully.

Structure:

<THINK_TRACE>
(>=400 words) Deep multi-hop derivation. Start from Wire 5 held-out checker -> overlap gating -> leakage. Connect to calibration rows epa_facets "Descriptive. No map fitted." -> descriptive-only valid but unverified. Connect to weak point #1: no LeakageGate + as-of fencing, every walk-forward number unverified-until-proven-leak-free. Multi-hop to weak point #6: no enforcement tooling on feeds (nflverse, Sleeper, ESPN), manifest enforcer static half only, loud-failure watchdog owed. Gray-zone: tau_hat_served "BLOCKED-ON-PRECISION", weather_prior "labeled prior, no season fitted", Registry 46 no / 1 partial (was 47 null) but provenance honestly notes not fresh line-by-line re-read. Singularity: 8 tip commits bare main-sync merges hiding real content; duplicate pairs; module roles filename-derived where contents weren't read. This is a gray-zone audit: honesty vs completeness gap.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX. Define:
- Leakage predicate: L(g_train, g_eval) = 1 iff exists temporal overlap or future information in training features.
- As-of fence: A(t) = {d : timestamp(d) <= t} for feature construction at decision time t.
- ECE: ECE = sum_{m=1}^M (|B_m|/n) |acc(B_m) - conf(B_m)|, units probability [0,1].
- Calibration CI: if CI_ECE straddles zero on 2025 eval slice -> signal unmeasured. Refusal threshold on lower bound: r = ECE_lower_bound > tau_refusal.
- PIT uniformity: PIT(u) = F_Y(y; theta) ~ Uniform(0,1) under correct calibration.
- NGBoost: Y|X ~ D(theta(X)), theta = (mu, sigma), NLL = -log p(y|x).
- Conformal: 1-alpha coverage, exchangeability martingale M_t = prod (1 + lambda_t (Z_t - 1/2))? Maybe simpler: online drift alarm via martingale on p-values.
- ONNX parity: max_{x in V_2025} |f_ONNX(x) - f_PyTorch(x)|_infty < epsilon_parity.
- Registry: R = {r_i : status_i in {no, partial, null}}, count 46 no / 1 partial / was 47 null.
- Injury gate: DataGapError raised if injury feed unavailable before T_injury = Friday 18:00 ET (convert to UTC epoch seconds).
- Units: probability dimensionless [0,1], time in seconds since epoch (UTC), sample size n dimensionless count, ECE in probability units, bootstrap CI width in probability points.
- Breakdown regimes: small-n ECE noise (n < n_min), archived repo dependency singularity (text-generation-inference archived Mar 2026), exchangeability failure under non-stationary season shift, silent endpoint drift poisoning walk-forward.
Cite [PAGE 8] and quotes.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: NeMo Curator decontamination, verified_calibration, probmetrics (Apache-2.0), MAPIE exchangeability tests, crepes Mondrian conformal, ngboost, uncertainty-toolbox, R1 staged reasoning (SFT->DPO->RLVR), Optuna NSGA-II, Dolma data sheets, MATH-SHEPHERD process supervision, cerebro-code-memory three-layer. Multi-week traps: W1–4 live-check drift, recalibrate per season never global map (cross-season map = contaminated-fit failure mode), August-9 stale experimental branches (~12), duplicate pairs hiding real content, 8 bare main-sync merges, tau table with no consumer unnoticed (rot). [PAGE 8]
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: every session cold-reads Sports repo (weak point #8), fleet pays re-discovery tax. Counter-trap: cerebro-code-memory tree-sitter structural map + PageRank + SQLite cached summaries + hash-based staleness; agentic claim-verified wikis. Clock: Friday 18:00 ET injury gate DataGapError; W1–4 live-check; late-Sept signal-ledger freshness; build MCP/gse CLI before wiring more signals or every new signal only usable by schema readers. [PAGE 8]
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Layers: 
1. Physical/compute: ONNX Runtime CPU serving, numerical parity check, no A10G, archived repos scrubbed (text-generation-inference, AutoGPTQ, AutoAWQ), org moves fixed.
2. Biomechanical/agent surface: no MCP server, no gse CLI, agent-usable surface absent -> veto on wiring more signals until surface exists.
3. Weather: weather_prior "labeled prior, no season fitted" -> cannot support seasonal decision; veto until season-fitted.
4. Injury: DataGapError before Friday 18:00 ET -> hard veto if missing.
5. Feed: manifest enforcer static half, loud-failure watchdog owed -> veto on silent endpoint drift.
6. Calibration: CI lower bound refusal -> unmeasured signals not calibrated.
Formal veto composition: V = OR(v_physical, v_biomechanical, v_weather, v_injury, v_feed, v_calibration). If any = 1, pipeline halts.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable scenarios:
1. Leakage contamination: held-out checker detects season overlap in walk-forward fit. Veto: training run discarded, never averaged. Prediction: pipeline halts until LeakageGate + as-of fencing shipped; any 2025 eval slice number produced pre-gate marked unverified.
2. Calibration CI straddles zero: ECE CI on 2025 eval slice includes zero -> signal unmeasured, refusal threshold on lower bound not met. Veto: no adjustment ships. Prediction: descriptive-only rows remain descriptive; no map fitted until bootstrap CI excludes zero or sample size increases.
3. Exchangeability drift: MAPIE exchangeability test or online martingale alarm on W1–4 live-check fails. Veto: isotonic map discarded, never averaged; conformal-PID fallback engaged. Prediction: live predictions revert to temperature/Platt small-n method or refuse; drift logged.
All RLVR: rule-based rewards, verifiable, KL-control against honest-refusal reference policy so RL cannot train away INVALID honesty.
</RLVR_COUNTERFACTUAL_VETOES>

Need to ensure total word count >=1000. THINK_TRACE alone ~500. Others ~200-300 each. Should be fine.

No betting lines. Check: I won't mention spreads, totals, moneylines, odds. I might mention "prop pricing" but avoid odds. Actually source mentions "+EV loop" and "model and market agree" and "staking layer (Kelly-with-guardrails)". I should avoid repeating betting-specific terms like odds, edge, +EV, Kelly, staking, vig. I can talk about model probability, decision layer, scoring distributions, but avoid banned terms. Better to avoid market/prop talk entirely or keep it generic (decision thresholds, calibration). The user explicitly said zero betting lines. I'll avoid odds, spreads, totals, moneylines. I'll also avoid +EV, Kelly, vig, stake to be safe.

Let's write.

Need verbatim quotes from source:
- "point fit — not pre-kickoff" everywhere.
- "Train/eval overlap now gated."
- "The 2-byte stub problem is closed permanently."
- "DataGapError before Friday 18:00 ET."
- "Descriptive. No map fitted."
- "BLOCKED-ON-PRECISION"
- "labeled prior, no season fitted."
- "chain gaps no longer swallowed in pipeline.py."
- "46 no / 1 partial (was 47 null)"
- "provenance honestly notes it is not a fresh line-by-line re-read."
- "descriptive-only is valid, not a failure"
- "Rebuild the leakage test before trusting any calibration result."
- "The gap isn't modeling talent — it's the harness."
- "No claim-matrix, no manifest checks, no feed watchdog..."
- "the tau table with no consumer went unnoticed by any system."
- "recalibrate per season, never one global map (a cross-season map is exactly the contaminated-fit failure mode)"
- "Rule-based rewards, never a learned 'reasoning quality' judge first; KL-control against the honest-refusal reference policy so RL can't train away the INVALID honesty."
- "if the CI straddles zero on the 2025 eval slice, the signal is unmeasured, not calibrated — no adjustment ships."
- "Refusal thresholds get set on the lower bound of the calibration CI"
- "Scrub references to archived repos..."
- "every session cold-reads the Sports repo."

I'll include several verbatim quotes with [PAGE 8].

Now write final response with exact XML tags. No markdown outside? The user asked for exact XML sections. I'll output only the XML sections. Let's ensure well-formed XML (no unescaped & or < inside text? LaTeX has < sometimes. I'll avoid raw < in text or escape as &lt;). Use LaTeX inline with \). Avoid ampersands.

Let's compose carefully, checking word count mentally. THINK_TRACE needs >=400 words. I'll write generously.

Proceed.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of PAGE 8.

The document opens with a triggered build: 18 parallel workers, GitHub API read-only, 360 units across 17 Beexly repos, 224 Sports branches, 73 external repos, and 46 model repos [PAGE 8]. The first multi-hop begins at Wire 5, the held-out checker: `intelligence/gates/heldout_check.py` plus tests, with the explicit claim "Train/eval overlap now gated" [PAGE 8]. This is not merely a housekeeping item; it is the causal antecedent for weak point #1, which states that GSE has "No leakage/temporal-safety machinery — while walk-forward calibration is already running" [PAGE 8]. The hop is therefore: Wire 5 gates overlap, but the full LeakageGate and as-of fencing remain owed, meaning every walk-forward number currently produced is "unverified-until-proven-leak-free" [PAGE 8]. The logical consequence is an epistemic inversion: GSE possesses the honest instinct (the INVALID refusal) but lacks the artifact, so calibration rows such as epa_facets *"Descriptive. No map fitted."* [PAGE 8] are formally valid yet operationally unactionable because no temporal fence proves the descriptive slice was constructed with strictly-lagged features.

A second multi-hop chain runs through the registry and calibration rows. The registry was regenerated at 17:57Z showing "46 no / 1 partial (was 47 null)" [PAGE 8], but the provenance section honestly notes it "is not a fresh line-by-line re-read" [PAGE 8]. This creates a gray zone between machine-readable status and ground-truth verification. The calibration rows are the first honest rows: tau_hat_served *"BLOCKED-ON-PRECISION"*, weather_prior *"labeled prior, no season fitted"* [PAGE 8]. The breakdown regime here is precision-blocked service: a signal can be registered as present (no null) while its served estimator is blocked, and a prior can be labeled without a season-fitted map. If the pipeline consumes tau_hat_served before precision is unblocked, the system silently substitutes an uncalibrated point fit for a distributional output, violating the rule that recalibration must occur per season and never via a single cross-season map [PAGE 8].

A third hop connects feed enforcement to silent rot. Wire 4 (manifest enforcer) closed the "2-byte stub problem" [PAGE 8], but weak point #6 states there is "No claim-matrix, no manifest checks, no feed watchdog" while nflverse, Sleeper, and ESPN feeds are being wired [PAGE 8]. The document notes the tau table with no consumer "went unnoticed by any system" [PAGE 8]. This is a classic silent-failure mode: static manifest enforcement exists, but the scheduled loud-failure watchdog is still owed [PAGE 8]. The gray-zone audit therefore identifies three coexisting truths: (1) honest refusal language is present in docs; (2) enforcement tooling is absent on the critical feed path; (3) branch inference is filename-derived where contents were not read, and 8 tip commits are bare main-sync merges hiding real content [PAGE 8]. The singularity point is reached when a fresh-looking commit SHA masks a main-sync merge, causing an agent to treat stale August-9 experimental content as current signal-ledger wiring. Until the loud-failure watchdog and LeakageGate ship, the walk-forward calibration loop operates in an unverified regime where contamination is possible but undetectable by construction [PAGE 8].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and breakdown regimes extracted from PAGE 8.

Temporal as-of fence. Let a feature vector at decision time t be constructed only from observations d whose timestamp satisfies:
\[
\mathcal{A}(t) = \{ d \in \mathcal{D} : \tau(d) \le t \}
\]
where \(\tau(d)\) is the observation timestamp in UTC seconds since epoch. A leakage event occurs iff:
\[
\mathcal{L}(\mathcal{D}_{\text{train}}, \mathcal{D}_{\text{eval}}) = \mathbb{I}\big[ \exists d_{\text{train}} \in \mathcal{D}_{\text{train}}, d_{\text{eval}} \in \mathcal{D}_{\text{eval}} : \text{game\_id}(d_{\text{train}}) = \text{game\_id}(d_{\text{eval}}) \ \lor\ \tau(d_{\text{train}}) > \tau(d_{\text{eval}}) \big]
\]
GPE: Wire 5 gates train/eval overlap [PAGE 8], but the full LeakageGate and as-of fencing are still owed [PAGE 8].

Expected calibration error with bootstrap confidence interval. For M probability bins:
\[
\operatorname{ECE} = \sum_{m=1}^{M} \frac{|B_m|}{n} \left| \operatorname{acc}(B_m) - \operatorname{conf}(B_m) \right| \in [0,1]
\]
Units: probability points, dimensionless [0,1]. Sample size n is a dimensionless count. Ruling from PAGE 8: "if the CI straddles zero on the 2025 eval slice, the signal is unmeasured, not calibrated — no adjustment ships" [PAGE 8]. Refusal threshold is set on the lower bound of the calibration CI [PAGE 8]. Breakdown regime: small-n regime where bootstrap CI width exceeds the ECE point estimate; in this regime the signal must be labeled unmeasured, not adjusted.

PIT uniformity for probabilistic heads. For an NGBoost-style conditional distribution \(Y \mid X \sim D(\theta(X))\), the probability integral transform:
\[
u_i = F_Y(y_i \mid \theta(x_i))
\]
must be approximately Uniform(0,1) under correct calibration. A PIT-uniformity check on the 2025 validation season is required before publishing intervals [PAGE 8]. Breakdown regime: systematic PIT deviation indicates misspecified conditional variance; the parametric shape must never be trusted raw [PAGE 8].

Conformal and exchangeability. MAPIE exchangeability tests gate every 2026 live-check; a conformal-PID controller is the drift fallback [PAGE 8]. Every isotonic map must pass PIT-uniformity on the live-check slice or be discarded, never averaged [PAGE 8]. Breakdown regime: non-exchangeable live slice (season-to-season distribution shift) invalidates i.i.d. conformal coverage assumptions.

Served artifact parity. ONNX Runtime is the production serving answer: train, export ONNX, numerical-parity check on the 2025 validation season:
\[
\max_{x \in \mathcal{V}_{2025}} \| f_{\text{ONNX}}(x) - f_{\text{PyTorch}}(x) \|_{\infty} < \varepsilon_{\text{parity}}
\]
Units: output units of the prediction head (dimensionless probability or regression target). The served artifact, not merely the trained artifact, receives the calibration row [PAGE 8]. Archived-repo dependency singularity: text-generation-inference archived March 2026, AutoGPTQ archived, AutoAWQ archived; references must be scrubbed [PAGE 8].

Injury gate temporal boundary. Wire 16 raises DataGapError before Friday 18:00 ET if the injury feed is unavailable [PAGE 8]. In UTC seconds, this is a hard deadline \(T_{\text{injury}}\); pipeline halts if feed absence persists past \(T_{\text{injury}}\).

Registry state. \(R = \{r_i : s_i \in \{\text{no}, \text{partial}, \text{null}\}\}\), observed as 46 no / 1 partial, previously 47 null [PAGE 8]. Provenance caveat: not a fresh line-by-line re-read [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage of the GSE engineering posture, with multi-week trap identification.

The intellectual lineage on PAGE 8 traces several distinct traditions. The leakage/temporal-safety tradition descends from solo repositories such as cbratkovics/fantasy-football-ai and jackc625/nfl-predict, which ship `test_asof_no_leakage.py`, `as_of_datetime` fencing, and a LeakageGate keyword scan that hard-fails on season overlap [PAGE 8]. GSE adopts the honest refusal instinct but lacks the gate, harness, and artifact [PAGE 8]. The calibration tradition draws on verified_calibration (ECE with bootstrap CIs plus Platt-binner recalibration) [PAGE 8], probmetrics (Apache-2.0 temperature/vector/matrix scaling, beta, spline, Lp calibration-error estimators) [PAGE 8], MAPIE exchangeability tests [PAGE 8], crepes Mondrian conditional conformal prediction and conformal predictive systems [PAGE 8], ngboost probabilistic heads [PAGE 8], and uncertainty-toolbox regression metrics (calibration error, sharpness, NLL, CRPS) [PAGE 8]. The reasoning-layer tradition follows the R1 staged recipe: SFT on format citing only wired signals, DPO on mined preference pairs from in-band versus out-of-band traces, then RLVR with verifiable rule-based rewards and KL-control against an honest-refusal reference policy [PAGE 8]. The data-curation tradition follows NeMo Curator decontamination and Dolma-style versioned data sheets with source shares, QC taggers, and dedup statistics [PAGE 8]. Process supervision derives from MATH-SHEPHERD step-labeling and generative verification without hand-labeling [PAGE 8].

Multi-week traps are explicitly present. The W1–4 2026 live-check uses exchangeability martingales as an online drift alarm [PAGE 8]; failure here triggers the conformal-PID fallback [PAGE 8]. Recalibration must occur per season, never via one global map, because a cross-season map is exactly the contaminated-fit failure mode [PAGE 8]. Staleness traps include the August-9 calibration bake-off cluster (~12 stale experimental branches) [PAGE 8], duplicate branch pairs hiding real content [PAGE 8], and 8 tip commits that are bare main-sync merges [PAGE 8]. The freshest lanes are signal-ledger and total-signal wiring from late September [PAGE 8]. Silent rot is illustrated by the tau table with no consumer, which went unnoticed by any system [PAGE 8]. The registry regeneration was honest about not being a fresh line-by-line re-read [PAGE 8], which is itself a multi-week trap: status fields can drift from ground truth between regeneration events.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock pressure across agent sessions.

Crisis habit regression: Across two hosts and many agents, every session cold-reads the Sports repo; the fleet pays the re-discovery tax every session [PAGE 8]. Under crisis pressure, agents regress to re-deriving schema, file roles, and branch purposes from filenames and latest commit messages rather than from a persistent structural memory [PAGE 8]. This is the crisis habit: each new signal is wired by whoever can read the schema, because there is no agent-usable surface—no MCP server, no gse CLI, nothing cron-able [PAGE 8].

Counter-trap: cerebro-code-memory's three-layer design (tree-sitter structural map plus PageRank, SQLite cached summaries, hash-based staleness) is identified as the cheapest proven fix, with agentic claim-verified wikis as the deeper solution [PAGE 8]. The counter-trap is to build the agent-usable surface and repo memory before wiring more signals, so that every new signal is not trapped behind schema literacy [PAGE 8].

Clock: multiple temporal boundaries govern the system. Wire 16 imposes DataGapError before Friday 18:00 ET if injury data is absent [PAGE 8]. The W1–4 live-check runs an online drift alarm via exchangeability martingales [PAGE 8]. The freshest signal-ledger and total-signal wiring date from late September, while August-9 branches are stale [PAGE 8]. The registry was regenerated at 17:57Z [PAGE 8]. The clock therefore favors shipping MCP/CLI and enforcement tooling before the next live-check window, or else each session re-enters the crisis habit and the walk-forward loop runs unverified through the drift window.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, weather, and systemic veto composition.

Veto layer 1 — Physical/compute serving: ONNX Runtime is the production serving answer; train-to-ONNX export requires numerical-parity checks on the 2025 validation season with no A10G spend on the production path [PAGE 8]. Veto condition: any dependency on archived repos (text-generation-inference, AutoGPTQ, AutoAWQ) or unresolved org moves (ggml-org/llama.cpp, deepspeedai/DeepSpeed) halts the serving path until scrubbed [PAGE 8].

Veto layer 2 — Biomechanical/agent surface: the engine has no agent-usable surface; it is reachable only by agents reading code and databases [PAGE 8]. Veto condition: no new signal producer lands until an MCP server or gse CLI exists, because otherwise each signal remains usable only by schema readers [PAGE 8].

Veto layer 3 — Weather prior: weather_prior is "labeled prior, no season fitted" [PAGE 8]. Veto condition: no weather-derived decision input ships until a season-fitted map is available; labeled-only priors are descriptive and cannot support live adaptation [PAGE 8].

Veto layer 4 — Injury feed: Wire 16 raises DataGapError before Friday 18:00 ET [PAGE 8]. Veto condition: pipeline halts if the injury feed is unavailable at that boundary.

Veto layer 5 — Feed enforcement: the manifest enforcer closed the 2-byte stub problem [PAGE 8], but no loud-failure watchdog exists for nflverse, Sleeper, or ESPN drift [PAGE 8]. Veto condition: silent endpoint drift poisons walk-forward calibration; the watchdog is a prerequisite for producer landing.

Veto layer 6 — Calibration refusal: if the ECE CI straddles zero on the 2025 eval slice, the signal is unmeasured and no adjustment ships; refusal thresholds sit on the lower bound of the calibration CI [PAGE 8]. Veto condition: unmeasured signals cannot be promoted to calibrated outputs.

Composite veto: let \(V = \bigvee_{k=1}^{6} v_k\) where each \(v_k \in \{0,1\}\). If \(V=1\), the pipeline halts. The system is currently operating with several vetoes uninstrumented (feed watchdog, full LeakageGate), meaning the composite veto is under-reported rather than absent [PAGE 8].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions. All rewards are rule-based; no learned reasoning-quality judge is used first; KL-control is applied against the honest-refusal reference policy so RL cannot train away INVALID honesty [PAGE 8].

Scenario 1 — Leakage contamination in walk-forward fit. Verifiable condition: the held-out checker (Wire 5) detects train/eval overlap or an as-of fence violation in a 2025 eval slice. Veto: the training run is discarded, never averaged; no calibration row is emitted for that signal. Prediction: pipeline halts until LeakageGate plus as-of fencing ships; all pre-gate walk-forward numbers are marked unverified and excluded from promotion [PAGE 8].

Scenario 2 — Calibration confidence interval straddles zero. Verifiable condition: bootstrap CI for ECE on the 2025 eval slice includes zero for a candidate signal. Veto: the signal is labeled unmeasured, not calibrated; refusal threshold on the lower bound is not met, so no adjustment ships [PAGE 8]. Prediction: descriptive-only rows remain descriptive; no map is fitted until sample size grows or the CI excludes zero [PAGE 8].

Scenario 3 — Exchangeability drift on live-check. Verifiable condition: MAPIE exchangeability test or the online exchangeability martingale alarm fails during the W1–4 live-check [PAGE 8]. Veto: any isotonic map is discarded, never averaged; the conformal-PID controller engages as fallback and small-n temperature/Platt methods are used instead [PAGE 8]. Prediction: live predictions either revert to the small-n calibrated band or refuse; drift is logged and the season-fitted map is not reused across seasons [PAGE 8].
</RLVR_COUNTERFACTUAL_VETOES>