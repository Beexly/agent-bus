---
source: "ask-the-brain.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/docs/brain"
pages: 3
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5132
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and produce a deep analysis based on the provided source text. There are strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines (spreads, totals, moneylines, odds). Even though the source mentions "pick implication" and "market context" and "line movement", I must avoid mentioning spreads, totals, moneylines, odds. I should probably refer to "market context" generically or avoid it entirely, or discuss market movement without using forbidden terms. The source mentions "Why did this strikeout prop line move 1.5 points" - I cannot discuss that specifically with numbers or betting terminology. I must be careful.
- No toy equations. Must use formal LaTeX, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Must cite exact [PAGE N] markers and verbatim quotes since source pages are provided. The source text is labeled "PAGES: 3" but it's one document. I should treat sections as pages or use [PAGE 1], [PAGE 2], [PAGE 3] markers based on the document structure. Let's map:
  - Page 1: Title, Purpose, Example Questions, BrainAnswer Schema (TypeScript)
  - Page 2: Required Answer Fields table, Confidence Level Definitions, Public Safety Gate, What the Brain Does Not Do
  - Page 3: Launch Sequence, Cross-Reference

Actually the source is one markdown doc. I'll assign page markers logically:
[PAGE 1] covers header through BrainAnswer Schema code block.
[PAGE 2] covers Required Answer Fields table through "What the Brain Does Not Do".
[PAGE 3] covers Launch Sequence through Cross-Reference.

I need to use verbatim quotes. Let me extract some:
- "Every Brain answer is traceable to evidence. Every answer states its confidence level. Every answer states what would weaken it. No Brain answer fabricates data or implies certainty it cannot support."
- "HIGH confidence on Tier-4-only evidence is forbidden."
- "It does not produce pick recommendations directly — picks flow through Component 1 (Picks Intelligence) with the Brain as one input"
- Launch sequence phases.

I need to generate >=1000 words total across sections. THINK_TRACE alone >=400 words.

Let's plan each section:

THINK_TRACE (>=400 words):
- Deep multi-hop derivation of the BrainAnswer schema requirements.
- Audit gray zones: schema is PROPOSAL, not implemented; requires Evidence Vault, Entity Graph, Signal Ledger; cockpit-only until gates pass.
- Confidence level definitions and the prohibition on HIGH with Tier-4-only.
- Public Safety Gate: 6 conditions, forbidden language (casino, guaranteed, locked).
- The tension between optional marketContext/pickImplication/fantasyImplication and the "does not produce pick recommendations directly" rule.
- Multi-hop: question -> entity resolution -> evidence retrieval -> tier classification -> confidence -> public safe gate -> output.
- Gray zones: sourceTier 1-6 not defined in this doc (cross-ref to evidence-vault.md); "recent verification" undefined TTL; "material weakening signals" undefined; "claim governance Component 12" referenced but not present; staleAt undefined.
- Singularity/breakdown: if Evidence Vault absent, schema cannot be populated; if Tier 5 only, no user surface; if public-safe status not PUBLIC_SAFE, withheld.

SOURCE_OPERATORS_AND_EQUATIONS:
- Formal LaTeX equations. No toy ratios. Use information theory / probability units.
- Define evidence quality as a random variable or set. Let E = {e_i} with tier t_i ∈ {1,...,6}. Source quality Q ∈ {OFFICIAL, LICENSED, TRUSTED_SECONDARY, MARKET, WEAK_SIGNAL, MIXED}.
- Confidence score C ∈ [0,100]. Confidence level L ∈ {LOW, MEDIUM, HIGH}.
- Define L as function of max tier, weakening signals W, staleness Δt.
- Inequality: HIGH ⇒ (maxTier ≤ 2) ∧ (W = ∅) ∧ (recent verification). Actually sources say HIGH = Multiple Tier 1-2 agree, no material weakening, recent. So formalize.
- Tier 4 requires market-context caveat for public.
- Entropy of missing data: H(M) where M is missing data set.
- Public safety gate as Boolean predicate P_safe(answer).
- Units: confidenceScore dimensionless [0,100], timestamp in ISO 8601 / Unix epoch seconds (SI second), evidenceId UUID, tier dimensionless ordinal.
- Assumptions: source tiers are ordinal and mutually exclusive; evidence retrieval is timestamped; weakening signals are binary or weighted.
- Breakdown regimes: Tier-5 only → cannot answer on user surface; missing Evidence Vault → schema unpopulable → answer withheld; staleAt < now → unverified; forbidden language → publicSafeStatus ≠ PUBLIC_SAFE.

Need page citations: [PAGE 1], [PAGE 2], [PAGE 3] with verbatim quotes.

RETROCAUSAL_GENEALOGY:
- Historical/scientific lineage: evidence-based QA, structured schema (TypeScript), confidence levels, source tiering. Lineage to intelligence analysis, evidence-based medicine (levels of evidence), journalism source verification, intelligence community sourcing (Tier 1-6 similar to classification or source reliability).
- Multi-week traps: stale data TTL; injury rehab timeline (where is player in injury rehab) changes week-over-week; offensive scheme changes over offseason; hard-hit percentage trend over last 30 games (rolling window); target share trend since WR1 went on IR (event-driven regime shift). These are multi-week temporal traps where a snapshot decays.
- The launch sequence itself is multi-week: cockpit → beta → public, with gates. Trap: launching before claim governance (Component 12) creates liability. Trap: 30 settled picks per model version before accuracy claim—survivorship bias / small sample.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under pressure (e.g., injury rumor, line move), operators may regress to heuristic shortcuts: skipping weakening signals, fabricating evidence, assigning HIGH confidence without Tier 1-2.
- Counter-trap: the schema forces weakeningSignals, missingData, publicSafeStatus; the public-copy scanner and brand-voice tests act as external recursion.
- Clock: staleAt, lastUpdated, TTL. The clock enforces re-verification. Recursive ToM: operator models what the Brain will output, Brain models operator's trust, public surface models regulatory/brand risk. Crisis compresses clock, increasing regression risk; counter-trap is mandatory schema completion before display.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: player availability (injury rehab), weather (though not explicitly in doc, physical/biomechanical/weather veto proof—maybe map to physical constraints on data freshness? The doc doesn't mention weather. I should stick to doc but frame veto layers: data layer (Evidence Vault absent), entity layer (Entity Graph unresolved), signal layer (Signal Ledger missing). The prompt asks physical/biomechanical/weather veto proof. Since doc is about sports OS, physical layer = player physical state (injury rehab status), biomechanical = batter hard-hit, receiver target share (usage biomechanics?), weather = not in doc. I can say weather is not present in source text, so no weather veto can be adjudicated from this document alone; this is a missing-data / breakdown regime. But I need to cover it. Better: define veto predicates V_phys (player injury rehab not verified by official source), V_bio (hard-hit trend based on weak signal only), V_weather (no weather data source in doc → automatic veto for weather-dependent queries). Adjudication: if any veto fires, publicSafeStatus = WITHHELD or COCKPIT_ONLY.

RLVR_COUNTERFACTUAL_VETOES:
- 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) veto scenarios + predictions.
- Scenario 1: Answer requested with only Tier-5 evidence (e.g., Reddit injury rumor). Veto: Brain does not answer questions with Tier-5-only evidence on any user surface [PAGE 2]. Prediction: system returns WITHHELD, missingData = ["official injury report"], confidence = LOW.
- Scenario 2: Attempt to assign HIGH confidence on Tier-4-only evidence. Veto: HIGH confidence on Tier-4-only evidence is forbidden [PAGE 2]. Prediction: confidenceLevel downgraded to MEDIUM or LOW, weakeningSignals includes "Tier-4-only corroboration".
- Scenario 3: Public release before claim governance (Component 12) operational. Veto: Claim governance must be in place before any public answers are published [PAGE 2/PAGE 3]. Prediction: publicSafeStatus remains COCKPIT_ONLY, launch sequence stalls at Phase 1.
- Each scenario needs verifiable conditions and predictions.

Word count: Need >=1000 words total. THINK_TRACE >=400. I'll aim for roughly:
- THINK_TRACE: ~450-500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~250-300 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~150-200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1400+ words. Good.

Must avoid betting lines. I will not use "spread", "total", "moneyline", "odds". I can refer to "market context" as a field but not give values. I should avoid "line move" specifics. The source mentions "strikeout prop line move 1.5 points" — I can reference it as an example question without repeating the numeric betting context, or just say it queries market movement. Actually better to avoid repeating "1.5 points" because that's a betting line detail. I'll refer to it generically as "market movement inquiry" or quote the example question but not emphasize the numeric line. Hmm, verbatim quotes are required. If I quote "Why did this strikeout prop line move 1.5 points in the last 4 hours?" that includes "prop line" and "1.5 points". The invariant says never mention spreads, totals, moneylines, or odds. "Prop line" might be borderline but not explicitly forbidden (prop line is not spread/total/moneyline/odds). "1.5 points" is a number but not a betting line term per se. To be safe, I can quote it but not discuss it as a betting line. Or I can paraphrase. The instruction says cite verbatim quotes when source pages are provided. I think quoting the example question is okay as long as I don't elaborate on betting lines. I'll include it in quotes but keep analysis on the epistemic process, not the betting content.

Also "pick implication" and "fantasy implication" are optional fields. "Pick recommendations directly" is prohibited by the Brain. I can discuss this without betting terms.

Now write the response with exact XML tags.

Let's draft carefully.

THINK_TRACE:

Start with multi-hop derivation.
Hop 1: Question intake -> entity resolution (Entity Graph cross-ref).
Hop 2: Evidence retrieval (Evidence Vault) -> each evidenceRef gets sourceTier 1-6 and sourceLabel.
Hop 3: SourceQuality classification and highest/lowest tier.
Hop 4: Confidence assignment per definitions table (HIGH requires Tier 1-2 agreement, no weakening, recent; MEDIUM Tier 1-3 with some weakening or approaching TTL; LOW Tier 3-4 or significant weakening/stale). Constraint: HIGH on Tier-4-only is forbidden [PAGE 2].
Hop 5: Public Safety Gate predicate. Six conditions: publicSafeStatus=PUBLIC_SAFE; highestSourceTier ∈ {1,2,3} (Tier 4 needs market-context caveat); weakeningSignals displayed; public-copy scanner; no forbidden language; claim governance Component 12 [PAGE 2].
Hop 6: Output withholding if any required field missing or gate fails.

Gray-zone audit:
- Schema marked PROPOSAL, not implemented [PAGE 1]. Requires Evidence Vault, Entity Graph, Signal Ledger. Until then cockpit-only [PAGE 1].
- Tier definitions 1-6 not elaborated in this doc; cross-referenced to evidence-vault.md [PAGE 3]. This is a referential singularity: without the child doc, tier semantics are undefined.
- "recent verification" and "approaching TTL" lack numeric TTL values; staleAt is optional but semantically required for freshness.
- "material weakening signals" undefined; no weighting function supplied.
- Component 12 (claim governance) referenced but not included [PAGE 2].
- Optional fields marketContext, fantasyImplication, pickImplication create a partial-information zone: an answer can be public-safe while omitting these, but pickImplication must not become a direct pick recommendation because Brain does not produce picks directly [PAGE 2].
- Breakdown regimes: if Evidence Vault missing, evidenceUsed cannot be populated, violating required-field rule, so answer is withheld. If only Tier-5 evidence, no user surface [PAGE 2]. If staleAt < current time, verification lapsed.

I'll make sure this is >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:

Define formal notation.
Let answer a be a tuple. Let E(a) = {e_1 ... e_n} be evidence set. Each e_i has tier τ(e_i) ∈ {1,2,3,4,5,6}, label λ(e_i), retrieval timestamp ρ(e_i) ∈ ℝ (Unix seconds, SI unit s).
Source quality σ(a) ∈ {OFFICIAL, LICENSED, TRUSTED_SECONDARY, MARKET, WEAK_SIGNAL, MIXED}.
Highest tier T_max(a) = max_i τ(e_i); lowest T_min(a) = min_i τ(e_i).
Confidence score γ(a) ∈ [0,100] ⊂ ℝ, dimensionless.
Confidence level Λ(a) ∈ {LOW, MEDIUM, HIGH}.

Formal rule for HIGH:
Λ(a)=HIGH ⇒ [T_max(a) ≤ 2] ∧ (∃ e_i,e_j : τ≤2, i≠j, agreement) ∧ (W(a)=∅) ∧ (t_now - ρ_max < TTL_recent)
Where W(a) is weakening-signal set. From [PAGE 2]: "HIGH confidence on Tier-4-only evidence is forbidden." Formalized: ¬[Λ=HIGH ∧ T_min=4 ∧ T_max=4].

MEDIUM: [1 ≤ T_max ≤ 3] ∨ (W ≠ ∅) ∨ (TTL_approaching).
LOW: [T_min ≥ 3 ∧ T_max ≥ 3] ∨ (|W| significant) ∨ (stale).

Public safety predicate:
Ψ(a) = [publicSafeStatus=PUBLIC_SAFE] ∧ [T_max ≤ 3 ∨ (T_max=4 ∧ marketContext caveat)] ∧ [W displayed] ∧ [scanner passed] ∧ [¬forbiddenLanguage] ∧ [claimGovernance active].
If Ψ=false → publicSafeStatus ∈ {COCKPIT_ONLY, WITHHELD}.

Missing data entropy: Let M(a) = missingData set. Information deficit I_miss = H(M) measured in bits (Shannon). If H(M) > threshold, confidence cannot be HIGH.

Units: timestamps in ISO-8601 or epoch seconds; confidenceScore dimensionless 0-100; tier dimensionless ordinal; evidenceId UUID (128-bit).

Assumptions: tiers are ordinal and strictly ordered by reliability; sourceLabel is human-readable; retrievedAt is monotonic.

Breakdown/singularity:
- τ undefined if Evidence Vault unavailable → schema unpopulable → answer withheld.
- T_max=5 → no user surface [PAGE 2].
- t_now > staleAt → verification expired.

Cite [PAGE 1], [PAGE 2], [PAGE 3] with quotes.

RETROCAUSAL_GENEALOGY:
Lineage: structured QA with evidence traceability descends from intelligence-analysis source documentation, evidence-based medicine hierarchies (Tier 1-2 analogous to RCTs/meta-analyses), and journalistic verification standards. The BrainAnswer schema mirrors typed interface contracts (TypeScript) used in safety-critical systems.
Multi-week traps:
1. Injury rehabilitation state is a time-decaying variable; "where is this player in injury rehabilitation" [PAGE 1] requires weekly re-verification or answer goes stale.
2. Hard-hit percentage over last 30 games [PAGE 1] uses a rolling window; the 31st game drops out, causing a regime shift in the metric not captured unless recomputed.
3. Target share trend since WR1 went on IR [PAGE 1] is an event-conditioned series; the IR event is a structural break, so pre-IR and post-IR data are non-stationary relative to each other.
4. Offensive scheme changes this offseason [PAGE 1] are offseason-phase data; in-season personnel changes can invalidate the scheme baseline mid-season.
Launch sequence multi-week trap: Phase 1 cockpit → Phase 2 beta → Phase 3 public. Each phase has a gate. Skipping claim governance (Component 12) before public launch creates a governance singularity. Requiring 30 settled picks per model version before accuracy claims [PAGE 3] imposes a survivorship/sampling delay trap: a model could be deployed but unable to claim accuracy until 30 outcomes accumulate, during which operators may over-rely on unverified outputs.

RECURSIVE_THEORY_OF_MIND:
Operator mental model under crisis (injury rumor, sudden market move) tends to regress to heuristic completion: fill weakeningSignals with boilerplate, skip missingData, assert HIGH confidence from a single trusted secondary source. This is crisis habit regression.
Counter-trap: the schema is mandatory; answer with missing required fields is withheld [PAGE 1]. Public-copy scanner and brand-voice tests are external recursive checks that model the regulator/audience and veto non-compliant outputs.
Clock recursion: lastUpdated and staleAt create a time-coupled self-reference; the answer must model its own expiration. As staleAt approaches, confidence must degrade even if evidence is unchanged, because temporal uncertainty grows.
Recursive ToM loop: Operator asks Brain → Brain models operator's trust threshold → Operator models Brain's source constraints → Public surface models brand risk. Under time pressure (compressed clock), the inner loop (operator) may skip the weakening-signal display, but the outer gate (public safety) prevents release. The counter-trap wins only if the schema enforcement is hard-coded, not advisory.

CROSS_LAYER_VETO_ADJUDICATION:
Veto layers:
- Physical layer (player state): Injury rehab status must be confirmed by official source; a Reddit rumor alone triggers V_phys = 1 (veto). [PAGE 1 example: injury rumor from Reddit confirmed by official source?]
- Biomechanical/performance layer: Hard-hit percentage trend or target share trend must be based on Tier 1-3 data; weak-signal-only trend triggers V_bio = 1.
- Weather layer: This source document contains no weather data source or tier definition for meteorological inputs. Therefore any query whose directAnswer depends on weather conditions is automatically vetoed (V_weather = 1) due to missing evidence tier; missingData must list "weather observation source". This is a breakdown regime, not an assumption.
Adjudication rule: If V_phys ∨ V_bio ∨ V_weather = 1, then publicSafeStatus := WITHHELD, confidenceLevel := LOW, and weakeningSignals must cite the layer-specific failure. An answer may proceed only if all layer vetoes are cleared and Ψ(a)=true.

RLVR_COUNTERFACTUAL_VETOES:
Three verifiable scenarios.
Scenario 1: Tier-5-only injury rumor. Input: "Is this injury rumor from Reddit confirmed by any official source?" Evidence: only Reddit (Tier 5/WEAK_SIGNAL). Rule: does not answer Tier-5-only on user surface [PAGE 2]. Veto fires. Prediction: answer withheld; publicSafeStatus = WITHHELD; missingData includes official team/league injury report; confidenceLevel = LOW.
Scenario 2: FORBIDDEN HIGH confidence. Input yields evidence set where T_max=4 only, but operator attempts to set Λ=HIGH and γ=90. Rule: HIGH confidence on Tier-4-only evidence is forbidden [PAGE 2]. Veto fires. Prediction: system auto-downgrades to Λ=MEDIUM or LOW; weakeningSignals appends "Tier-4-only corroboration; no Tier 1-2 agreement"; publicSafeStatus remains COCKPIT_ONLY until higher-tier evidence added.
Scenario 3: Pre-governance public release. Input: operator requests public beta launch before Component 12 claim governance is operational. Rule: claim governance must be in place before any public answers are published [PAGE 2]. Veto fires. Prediction: Phase 2 gated public beta does not activate; publicSafeStatus remains COCKPIT_ONLY for all answers; launch sequence stalls at Phase 1 until governance gate passes. Verifiable by checking operator-cockpit-governance.md and claim-governance.md cross-refs [PAGE 3].

Each scenario includes prediction of state transition.

Now, word count check. I need to write it out fully.

I need to ensure I don't mention forbidden terms. I'll avoid "spread", "total", "moneyline", "odds". I might mention "market context" but not values. I won't mention "prop line move" specifics. I might quote the example question but not analyze the numeric.

Let's write.

Need verbatim quotes and page markers. I will embed quotes like:
[PAGE 1] "Every Brain answer is traceable to evidence. Every answer states its confidence level. Every answer states what would weaken it."
[PAGE 2] "HIGH confidence on Tier-4-only evidence is forbidden."
[PAGE 2] "It does not produce pick recommendations directly — picks flow through Component 1 (Picks Intelligence) with the Brain as one input"
[PAGE 3] "Minimum 30 settled picks per model version before any accuracy claim is shown"

Also schema quotes.

Let's draft the final output. Ensure XML tags exact. No markdown outside tags? The user asked for exact XML sections. I'll provide only the tagged sections. But I can use markdown inside? Probably plain text inside tags is fine, with LaTeX. I'll use LaTeX inline.

Word count: Let's estimate as I write. I'll aim for substantial.

I'll now produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The BrainAnswer schema mandates a six-hop epistemic pipeline before any answer may be displayed. Hop 1 is question intake coupled to entity resolution; the document cross-references `docs/brain/entity-graph.md` for entities resolved in every answer [PAGE 3]. Hop 2 is evidence retrieval into `evidenceUsed`, where each `EvidenceRef` carries a `sourceTier` in {1,2,3,4,5,6} and a `sourceLabel` [PAGE 1]. Hop 3 computes `sourceQuality` across the six-point classification {OFFICIAL, LICENSED, TRUSTED_SECONDARY, MARKET, WEAK_SIGNAL, MIXED} and records `highestSourceTier` and `lowestSourceTier` [PAGE 1]. Hop 4 assigns `confidenceLevel` per the definitions table: HIGH requires multiple Tier 1–2 sources in agreement, no material weakening signals, and recent verification; MEDIUM admits Tier 1–3 with some weakening signals or data approaching TTL; LOW is reserved for Tier 3–4 only, significant weakening signals, or stale/unverifiable data [PAGE 2]. The document explicitly forbids `HIGH` confidence on Tier-4-only evidence [PAGE 2]. Hop 5 evaluates the Public Safety Gate, a compound predicate requiring `publicSafeStatus` = PUBLIC_SAFE, `highestSourceTier` in {1,2,3} (Tier 4 only with a market-context caveat), visible `weakeningSignals`, passage of the public-copy scanner, absence of forbidden language such as "casino," "guaranteed," or "locked," and active claim governance under Component 12 [PAGE 2]. Hop 6 is output control: any missing required field causes the answer to be withheld, and the Brain never produces pick recommendations directly because picks flow through Component 1 (Picks Intelligence) with the Brain as only one input [PAGE 2].

Gray-zone audit reveals multiple singularities. The schema is marked PROPOSAL and is not implemented; full operation requires the Evidence Vault, Entity Graph, and Signal Ledger to exist, and the system remains cockpit-only until those components are in place [PAGE 1]. The tier semantics 1–6 are not defined in this document and are delegated to `docs/brain/evidence-vault.md`, creating a referential breakdown regime: without that child document, `sourceTier` is an ungrounded ordinal [PAGE 3]. Temporal terms are under-specified: "recent verification," "approaching TTL," and `staleAt` carry no numeric seconds or ISO-8601 bounds, so freshness cannot be algorithmically enforced from this text alone [PAGE 2]. "Material weakening signals" has no weighting function, so `LOW` vs `MEDIUM` depends on operator judgment rather than a computable threshold. Component 12 (claim governance) is referenced but not included, so the public-launch precondition is externally deferred [PAGE 2]. Optional fields `marketContext`, `fantasyImplication`, and `pickImplication` introduce a partial-information zone: an answer can be public-safe while omitting them, yet `pickImplication` must not collapse into a direct pick recommendation, or the Brain violates its own architectural boundary [PAGE 2].

Exact breakdown regimes are therefore: (a) Evidence Vault absent ⇒ `evidenceUsed` cannot be populated ⇒ required-field violation ⇒ answer withheld; (b) `lowestSourceTier` = 5 or `highestSourceTier` = 5 only ⇒ no user surface permitted [PAGE 2]; (c) `t_now` > `staleAt` ⇒ verification lapsed ⇒ confidence cannot exceed MEDIUM and likely degrades to LOW; (d) claim governance inactive ⇒ `publicSafeStatus` cannot be PUBLIC_SAFE ⇒ launch stalls at Phase 1 cockpit-only [PAGE 2][PAGE 3]. Multi-hop failure cascades when a single Tier-5 source substitutes for Tier 1–2 corroboration: confidence is capped, weakening signals must be displayed, and public release is blocked until higher-tier evidence arrives.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let an answer be denoted by \(a\). Define the evidence set \(E(a) = \{e_1,\dots,e_n\}\). Each evidence item \(e_i\) is a tuple
\[
e_i = \langle \text{evidenceId}_i,\; \tau(e_i),\; \lambda(e_i),\; \rho(e_i) \rangle
\]
where \(\tau(e_i) \in \{1,2,3,4,5,6\}\) is the dimensionless source-tier ordinal, \(\lambda(e_i)\) is the human-readable source label, and \(\rho(e_i) \in \mathbb{R}\) is the retrieval timestamp in SI seconds (Unix epoch). The source-quality classification is
\[
\sigma(a) \in \{ \text{OFFICIAL},\; \text{LICENSED},\; \text{TRUSTED\_SECONDARY},\; \text{MARKET},\; \text{WEAK\_SIGNAL},\; \text{MIXED} \}.
\]
Aggregate tier operators are
\[
T_{\max}(a) = \max_i \tau(e_i), \qquad T_{\min}(a) = \min_i \tau(e_i).
\]
The confidence score is a dimensionless real \(\gamma(a) \in [0,100]\), and the confidence level is
\[
\Lambda(a) \in \{ \text{LOW},\; \text{MEDIUM},\; \text{HIGH} \}.
\]
Formal level rules, consistent with [PAGE 2], are:
\[
\Lambda(a)=\text{HIGH} \;\Rightarrow\; \bigl[T_{\max}(a) \le 2\bigr] \;\wedge\; \bigl[\exists\, e_i,e_j \in E(a): \tau(e_i)\le 2,\ \tau(e_j)\le 2,\ i\neq j,\ \text{agreement}(e_i,e_j)\bigr] \;\wedge\; \bigl[W(a)=\emptyset\bigr] \;\wedge\; \bigl[t_{\text{now}} - \max_i \rho(e_i) < \text{TTL}_{\text{recent}}\bigr],
\]
where \(W(a)\) is the weakening-signal set. The prohibition on unsupported certainty is encoded as
\[
\neg \bigl[ \Lambda(a)=\text{HIGH} \;\wedge\; T_{\min}(a)=4 \;\wedge\; T_{\max}(a)=4 \bigr],
\]
verbatim from [PAGE 2]: "HIGH confidence on Tier-4-only evidence is forbidden."

The Public Safety Gate is the Boolean predicate
\[
\Psi(a) = \bigl[\text{publicSafeStatus}(a)=\text{PUBLIC\_SAFE}\bigr] \;\wedge\; \bigl[T_{\max}(a) \le 3 \;\lor\; (T_{\max}(a)=4 \wedge \text{marketContext caveat})\bigr] \;\wedge\; \bigl[W(a)\text{ is displayed}\bigr] \;\wedge\; \bigl[\text{scanner passed}\bigr] \;\wedge\; \bigl[\neg \text{forbiddenLanguage}(a)\bigr] \;\wedge\; \bigl[\text{claimGovernance active}\bigr].
\]
If \(\Psi(a) = \text{false}\), then \(\text{publicSafeStatus}(a) \in \{ \text{COCKPIT\_ONLY},\; \text{WITHHELD} \}\). Missing data is quantified by the information deficit
\[
I_{\text{miss}}(a) = H\bigl(\text{missingData}(a)\bigr)
\]
measured in Shannon bits; if \(I_{\text{miss}}(a)\) exceeds the operational threshold, \(\Lambda(a)\) cannot be HIGH.

Assumptions: tiers are ordinal and strictly ordered by reliability; `retrievedAt` is monotonic; `sourceLabel` is display-safe; timestamps use SI seconds. Units: `confidenceScore` is dimensionless on [0,100]; tier is dimensionless ordinal; `evidenceId` is a 128-bit UUID. Breakdown/singularity regimes: if the Evidence Vault is unavailable, \(\tau(e_i)\) is undefined and the schema cannot be populated, forcing withholding [PAGE 1]; if \(T_{\max}(a)=5\) only, no user surface is permitted [PAGE 2]; if \(t_{\text{now}} > \text{staleAt}(a)\), verification has expired and the answer must be re-verified before display. Verbatim gate language from [PAGE 2]: "Claim governance must be in place (Component 12) before any public answers are published."
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The Brain’s doctrine descends from three lineages: intelligence-analysis source documentation, evidence-based medicine hierarchies, and journalistic verification standards. The tiered source model (1–6) mirrors reliability gradings used in intelligence communities, while the confidence definitions (HIGH/MEDIUM/LOW) parallel evidence grades in clinical reasoning. The TypeScript `BrainAnswer` contract reflects safety-critical interface design: every field is required, missing fields cause withholding, and the schema is versioned under `modelVersion` [PAGE 1]. The launch sequence—internal cockpit, limited public beta, public launch—is a staged rollout common to high-stakes decision-support systems, but here each stage is gated by documentation dependencies (`Evidence Vault`, `Entity Graph`, `Signal Ledger`, `Claim Governance`) that are cross-referenced but not yet delivered [PAGE 1][PAGE 3].

Multi-week traps are embedded in the example questions themselves. "Where is this player in injury rehabilitation?" [PAGE 1] queries a time-decaying physical state; without weekly re-verification, the answer’s `lastUpdated` becomes stale and `staleAt` is risked. "What is this batter's hard-hit percentage trend over the last 30 games?" [PAGE 1] relies on a rolling 30-game window; on game 31 the oldest observation drops out, causing a metric regime shift that is invisible unless the trend is recomputed. "What is this receiver's target share trend since the WR1 went on IR?" [PAGE 1] is an event-conditioned series: the injured-reserve event is a structural break, so pre-IR and post-IR target-share distributions are non-stationary relative to one another, and a naive trend across the break is epistemically invalid. "What offensive scheme changes happened for this team this offseason?" [PAGE 1] captures offseason-phase scheme data, but in-season personnel changes or mid-game adjustments can invalidate the offseason baseline before the answer reaches a user.

The launch sequence contains its own multi-week governance trap. Phase 3 requires "Minimum 30 settled picks per model version before any accuracy claim is shown" [PAGE 3]. This creates a sampling-delay singularity: a model may be technically live but epistemically barred from claiming accuracy until thirty outcomes accumulate, during which operators may over-rely on unverified outputs. Skipping claim governance (Component 12) before Phase 2 public beta creates a liability gate failure [PAGE 2]. Each trap is retro-causal in the sense that the present schema must anticipate future decay: `staleAt`, `lastUpdated`, and weakening signals are all forward-looking guards against the obsolescence of today’s answer.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression occurs when an operator, under time pressure from an injury rumor or sudden market event, collapses the recursive epistemic loop into a heuristic: assert HIGH confidence from a single trusted secondary source, leave `weakeningSignals` boilerplate-thin, omit `missingData`, and rush toward `PUBLIC_SAFE` status. This regression violates the document’s core rule that every answer states what would weaken it and never fabricates certainty [PAGE 1].

The counter-trap is the mandatory `BrainAnswer` schema itself: an answer with missing required fields is withheld [PAGE 1]. The public-copy scanner and brand-voice tests act as external recursive validators that model the regulator and audience, vetoing non-compliant outputs before release [PAGE 3]. The clock layer is `lastUpdated` and `staleAt`: the answer must model its own expiration. As `staleAt` approaches, temporal uncertainty grows even if the underlying evidence is unchanged, forcing a confidence downgrade. This is a self-referential time constraint: the answer contains a prediction of its own future invalidity.

The recursive theory of mind unfolds across three layers. Layer 1 (operator) models the Brain’s trust threshold and may try to push a weak-signal answer through by softening `weakeningSignals`. Layer 2 (Brain) models the operator’s credibility constraints and enforces tier-based confidence caps, forbidding HIGH on Tier-4-only evidence [PAGE 2]. Layer 3 (public surface) models brand risk and legal exposure, requiring claim governance and visible weakening signals before publication [PAGE 2]. Under a compressed clock—such as a breaking injury report—the innermost layer is most likely to skip verification, but the outermost gate prevents public release unless \(\Psi(a)=true\). The counter-trap wins only if schema enforcement is hard-coded rather than advisory; the document’s statement that the Brain "does not omit weakening signals to make an answer appear stronger" [PAGE 2] is the design intent, but it is operative only when deployment tooling rejects incomplete `BrainAnswer` objects at the schema boundary.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Three veto layers are defined by the source text and its cross-references.

Physical layer (player state): Query "Is this injury rumor from Reddit confirmed by any official source?" [PAGE 1] requires physical-state verification. If the only evidence is a Reddit rumor (WEAK_SIGNAL/Tier 5) and no official team or league injury report exists, the physical veto \(V_{\text{phys}} = 1\) fires. The answer cannot confirm physical availability on weak evidence; `missingData` must include an official injury-report source, and `confidenceLevel` collapses to LOW.

Biomechanical/performance layer: Query "What is this batter's hard-hit percentage trend over the last 30 games?" [PAGE 1] requires performance evidence. If the trend is built solely from Tier 4 or weaker sources, the biomechanical veto \(V_{\text{bio}} = 1\) fires because `HIGH` confidence is forbidden on Tier-4-only evidence [PAGE 2] and Tier-5-only evidence cannot appear on any user surface [PAGE 2]. The trend may remain in cockpit-only status with Tier 1–3 sourcing missing.

Weather layer: This document contains no weather data source, weather tier definition, or meteorological evidence type. Any query whose direct answer depends on weather conditions therefore triggers an automatic weather veto \(V_{\text{weather}} = 1\) due to undefined evidence tier; `missingData` must list "weather observation source." This is a breakdown regime, not an assumption.

Adjudication rule:
\[
V_{\text{total}} = V_{\text{phys}} \;\lor\; V_{\text{bio}} \;\lor\; V_{\text{weather}}.
\]
If \(V_{\text{total}} = 1\), then `publicSafeStatus` := WITHHELD, `confidenceLevel` := LOW, and `weakeningSignals` must cite the failing layer. An answer proceeds to public release only if all layer vetoes are cleared and the Public Safety Gate \(\Psi(a)\) from [PAGE 2] evaluates true. Unadjudicated physical or biomechanical uncertainty cannot be converted into public output by lowering confidence alone; the missing higher-tier evidence is a hard precondition.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Tier-5-only injury rumor. Counterfactual input: "Is this injury rumor from Reddit confirmed by any official source?" [PAGE 1]. Evidence set contains only a Reddit post; \(\tau = 5\), \(\sigma = \text{WEAK\_SIGNAL}\), \(T_{\max}=5\). Rule: "It does not answer questions with Tier-5-only evidence on any user surface" [PAGE 2]. Verifiable veto: \(\Psi(a)=\) false because \(T_{\max}>3\) and no Tier 1–3 corroboration exists. Prediction: `publicSafeStatus` := WITHHELD; `confidenceLevel` := LOW; `missingData` appends "official team or league injury report"; the answer never reaches a public or premium surface.

Scenario 2 — Forbidden HIGH confidence on Tier-4-only evidence. Counterfactual input yields an evidence set where \(T_{\min}=4\) and \(T_{\max}=4\), but the operator attempts \(\Lambda=\text{HIGH}\), \(\gamma=90\). Rule: "HIGH confidence on Tier-4-only evidence is forbidden" [PAGE 2]. Verifiable veto: the system auto-downgrades \(\Lambda\) to MEDIUM or LOW regardless of operator intent. Prediction: `confidenceScore` is capped below the HIGH threshold; `weakeningSignals` appends "Tier-4-only corroboration; no Tier 1–2 agreement"; `publicSafeStatus` remains COCKPIT_ONLY until a Tier 1–2 source is added to \(E(a)\).

Scenario 3 — Public release before claim governance. Counterfactual input: operator requests Phase 2 limited public beta activation while `docs/brain/claim-governance.md` (Component 12) is not operational. Rule: "Claim governance must be in place (Component 12) before any public answers are published" [PAGE 2], and the launch sequence requires governance before beta [PAGE 3]. Verifiable veto: the launch FSM cannot transition from Phase 1 cockpit-only to Phase 2 beta. Prediction: all answers retain `publicSafeStatus` := COCKPIT_ONLY; `lastUpdated` may advance but `staleAt` is not honored for public release; the Brain remains internal-only until the governance cross-reference is satisfied and the public-copy scanner and brand-voice tests pass [PAGE 3].
</RLVR_COUNTERFACTUAL_VETOES>