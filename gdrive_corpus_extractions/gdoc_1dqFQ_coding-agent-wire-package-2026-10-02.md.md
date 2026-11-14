---
source: "coding-agent-wire-package-2026-10-02.md"
folder: "/CorpusRoot"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4502
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and respond to a coding-agent wire package mission. I need to produce a deep reasoning response with exact XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-WORD DEPTH across exact XML sections.

The source text is the mission package. I need to cite exact [PAGE N] markers? The source text doesn't have explicit page numbers, but it has section markers like §1, §2, §3, §4, §5, §7. The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since there are no explicit page numbers but there are section headers, I should treat sections as page/section markers like [PAGE §4] or [PAGE §2] etc. I need to include verbatim quotes from the source text.

I need to address the three blocking gaps:
1. SEED CSVs - wire them in from ~/workspace/coaching-tendencies/data/
2. OL PROVIDER - build get_ol_status / get_ol_starters per spec
3. SIGNAL REGISTRY + TAU - versioned signal registry, tau_hat.csv into reasoning context, homeSign fix, etc.

I need to produce formal analysis without betting lines. This is about engineering, data pipelines, signal registries, etc.

Let me structure the response:

THINK_TRACE (>=400 words): Multi-hop derivation of the three gaps, gray-zone audit, dependencies between them, singularity regimes, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations for the data pipeline, error bounds, information units, page citations to the source text sections (e.g., [PAGE §2], [PAGE §4], [PAGE §7]), verbatim quotes. Exact breakdown of SHA-256, cell counts, tau fit stats (+6.7703 percentage points, n=3,988), etc. SI/information/probability units. Assumptions. Singularity/breakdown regimes (DataGapError, empty injury pull, 1e-6 delta, pooling weeks 1-3).

RETROCAUSAL_GENEALOGY: Historical lineage of nflverse, TauFitter, signal registries, multi-week traps (the walk-forward vs point fit trap, stale branches, the 13.5pp contaminated fit vs 6.77pp held-out).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (the coding agent's habit of manufacturing data, flipping gates, overclaiming), counter-trap (refusal taxonomy, DATA_GAPS.md, honest refusal), clock (commit HEAD moved from d255965 to b3e15f21, PR #1002 dirty, stale green claims).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof - though this is a coding mission, I can map to engineering vetoes: DataGapError as veto, empty injury-week5.json as veto, registry gate as veto, tau point-fit not pre-kickoff as veto. Weather is mentioned in the watchlist ("Weather mission — added to overnight prompt backlog"). I can discuss biomechanical/weather as external veto layers that must not be bypassed.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I need 3 scenarios where the system would be vetoed, with predictions.

Word count: >= 1,000 words across sections. THINK_TRACE alone >=400.

I must not mention betting lines (spreads, totals, moneylines, odds). The source text mentions "moneyline.json" in reasoning traces section (§2, item 6) and "OVER 47.5" etc. I must NOT repeat those or mention them as betting lines. I can refer to them only if necessary? No, strict invariant: Never mention spreads, totals, moneylines, or odds. So I must avoid quoting those specific fixture examples. I can quote other parts.

I must not invent fake ratios. I can use real formal equations like:
- SHA-256 integrity: H = SHA-256(file) 
- YoY delta: Δ = |μ_2026 - μ_2025| / σ_pooled or absolute difference? The tests pin 1e-6 YoY delta. I can state: |δ| < 10^-6.
- DataGapError: indicator function I[week published] = 0 → raise DataGapError.
- Signal gate: homeSign ∈ {0,1}; active evaluators returning null: ∑_{i=1}^{9} 1[s_i = null] = 9.
- Tau point fit: τ̂_w = pool(weeks 1:3) not walk-forward.
- n=3,988 opponent-half fourth downs, Δ = +6.7703 percentage points = +0.067703 probability units.
- 1,523 cells in tau_hat.csv.
- Fallback mix: 55 unit, 162 pooled, 933 league, 373 league-region. Sum = 55+162+933+373 = 1523. Good.
- 47 signal entries, 32 producer present, 15 stub/none, 0 wired=yes, 10 partial, 0 weighted with evidence, 0 tested fire-and-contribute, 0 traced real pick, 38 dark gate, 9 active null.

I need to cite [PAGE N] markers. Since no pages, I'll use section markers like [PAGE §2], [PAGE §4], [PAGE §7], [PAGE §3], [PAGE §1]. Verbatim quotes must be exact from source.

Let me draft carefully.

Structure:

<THINK_TRACE>
- Multi-hop: Gap 1 (seed CSVs) unblocks Gap 3 (signal registry producers? coaching tendencies) and Gap 2 (OL provider is independent but part of T1 e2e).
- The 10 failing coaching tests pin 2026 CLE Monken HC row (164 plays) with 1e-6 YoY delta.
- The field report searched wrong machine (Hermes' Windows box vs VM). [PAGE §2] verbatim quote about full-disk search found zero copies.
- §7 overturned: files exist, real parquet-built, DATA_GAPS.md, code/compute_tendencies.py.
- Gray zone: 1e-6 precision unverified; diff decides.
- Gap 2: OL provider missing module; spec in RECONCILED-SOURCES-2026-10-02.md [PAGE §4]; T1 pins offensive_line UNCHECKED; DataGapError on unpublished weeks; injury-week5.json empty 1,160 bytes [PAGE §4].
- Gap 3: Signal registry prose-only [PAGE §2]; 47 entries, 0 wired, 9 ACTIVE null, homeSign unset [PAGE §2]; tau_hat.csv no consumer [PAGE §7]; 2026 cells pool weeks 1-3 [PAGE §2]; +6.77pp held-out n=3,988 [PAGE §2].
- Interdependency: wiring tau into reasoning context proves one pick changes; registry first real producer could be coaching tau or OL.
- Breakdown regimes: DataGapError singularity when injury week unpublished; 1e-6 delta singularity if CSV rows manufactured; pooling singularity when in-season weeks treated as pre-kickoff.
- Word count target >400.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal LaTeX equations with units.
- Cite [PAGE §2], [PAGE §4], [PAGE §7].
- Verbatim quotes from source.
- Equations:
  - Integrity: h = SHA-256(b) ∈ {0,1}^{256}; verify h == h_manifest.
  - YoY gate: |ĉ_{CLE,Monken,2026} - ĉ_{CLE,Monken,2025}| < 10^{-6} (dimensionless play-count/tendency delta).
  - DataGapError: if ¬Published(w) then raise DataGapError(w); ∅ = injury-week5.json, |∅| = 1,160 bytes.
  - Signal gate: g(s) = 1 iff homeSign(s) ≠ ∅ ∧ wired(s) = yes; currently ∀s∈Production: homeSign(s) = ∅ → g(s)=0; ∑_{i=1}^{9} 1[eval_i = null] = 9.
  - Tau cell classification: N_cell = 1,523 = 55_unit + 162_pooled + 933_league + 373_league-region.
  - Held-out effect: Δ_{held-out} = +6.7703 pp = +0.067703 probability units, n = 3,988 opponent-half fourth downs, train 2022–2023, eval 2024–2025.
  - Pooling singularity: τ̂_{2026,w∈1:3} = Pool(w_{1:3}) ≠ PreKickoff(w_{2026}); breakdown if consumer stamps as pre-kickoff.
- Breakdown regimes and assumptions.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- Lineage: nflverse play-by-play 2022–2026 → TauFitter → tau_hat.csv [PAGE §2].
- Contaminated 13.5 pp fit discarded; held-out +6.7703 pp kept [PAGE §2 §7].
- Multi-week trap: point fit pooling weeks 1-3 masquerading as pre-kickoff; walk-forward or stamp required [PAGE §2 §7].
- Stale branches: HEAD d255965 → b3e15f21 after "final" handoff [PAGE §1 §4]; PR #1002 dirty [PAGE §2 §7]; stale green claims (6,472 passed at f5a83452e, not current HEAD) [PAGE §2 §7].
- Genealogy of refusal: DATA_GAPS.md proxy-vs-metric discipline [PAGE §7]; no manufactured rows [PAGE §2 §14].
- Artifact lineage: muse.ai reverse-engineering, 2,204-file manifest, 170 CSVs unextracted [PAGE §3 §7].

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: coding agent tempted to manufacture coach rows to turn 10 red tests green [PAGE §2 §14]; flip gate/env flag [PAGE §2 §14]; reword guardrails [PAGE §2 §10].
- Counter-trap: refusal taxonomy codified, DATA_GAPS.md, honest refusal not kill [PAGE §7]; do not manufacture; do not flip gates; do not write production DB [PAGE §2 §14].
- Clock: commit HEAD moved, branch-only files (tau_hat.csv, test_t1_real_e2e.py) missing from local checkout [PAGE §7]; clean-state full suite rerun at HEAD b3e15f21 never done [PAGE §7]; PR #1002 mergeable=false [PAGE §7]; Vercel failed, Codacy action_required [PAGE §2].
- Multi-week temporal trap: treating in-season pooled tau cells as pre-kickoff; the clock of publication (Friday evenings for injuries) [PAGE §7].

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto proof: map to engineering vetoes.
- Layer 1 data veto: DataGapError on unpublished weeks; injury-week5.json empty (1,160 bytes, 5 credits burned) must veto live pull until publication [PAGE §4 §7].
- Layer 2 signal veto: homeSign unset is a silent veto; 9 ACTIVE evaluators returning null must be explicit DISABLED or gate set [PAGE §2 §7].
- Layer 3 context veto: tau_hat.csv point-fit not pre-kickoff; if stamped as pre-kickoff, veto consumer surface [PAGE §7].
- Layer 4 model veto: no MiMo on scoring path; scoring.ts calls neither MiMo nor Qwen [PAGE §2]; do not bridge unless wired.
- Weather: external veto layer not yet wired; must not be treated as available [PAGE §6 watchlist].
- Biomechanical: nflverse injuries + depth charts as source of truth for OL status; Alexandria only live daily detail; no film-coding substitution.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
- 3 verifiable veto scenarios + predictions.
- Scenario 1: Seed CSV diff fails 1e-6 YoY delta for Monken row → veto landing files; prediction: tests remain red until real source corrected, not manufactured.
- Scenario 2: OL provider invoked on Week 5 before injury publication → DataGapError raised; prediction: T1 e2e remains INVALID/UNCHECKED until Friday publish; no silent fallback.
- Scenario 3: Signal registry fires with homeSign unset on production definition → silent null eval; prediction: 9 ACTIVE evaluators return null, continuous tilt refuses every real signal; must set homeSign or DISABLED before any end-to-end fired-signal test can pass.
- Each with verifiable assertion and expected outcome.

Now I need to ensure word count >= 1000 across sections. THINK_TRACE >= 400. I'll write generously.

Also strict: ZERO BETTING LINES. I must not mention spreads, totals, moneylines, odds. The source text mentions "moneyline.json", "Bruins -1.5", "OVER 47.5" in §2 item 6. I will not quote those. I will avoid any reference to betting markets.

ZERO TOY EQUATIONS: No Force/Fatigue fake ratios. All equations must be formal, with units, assumptions, breakdown regimes.

Citations: Use [PAGE §2], [PAGE §4], etc. Verbatim quotes: I need to include exact quotes from source text. Let me select a few:

From §2 item 4: "Still missing, not invented: coach_offense.csv, coach_defense.csv, off_tendencies.csv. Full-disk search found zero copies." — but this is REFUTED in §7. I can quote the field report claim and then the refutation.

From §7 OVERTURNED: "The 'missing' seed CSVs exist on this VM. ~/workspace/coaching-tendencies/data/ holds coach_offense.csv, coach_defense.csv, off_tendencies.csv (160 rows = 32×5 ✓), def_tendencies.csv, built 2026-10-01 22:05 from real nflverse parquet (2022–2026 parquets present) by committed scripts (code/compute_tendencies.py, code/coach_tenures.py)..."

From §2 item 5: "None of the 47 clear all eight requirements. Nine ACTIVE signals return null unconditionally. Continuous tilt refuses every real signal because homeSign is set on no production definition."

From §4: "injury-week5.json 1,160 bytes = the empty 5-credit pull"

From §2 item 4: "Served table: intelligence/coaching/data/tau_hat.csv, 1,523 cells, sha256 in tau_hat.manifest.json. Fallback mix: 55 unit, 162 pooled, 933 league, 373 league-region. Point fit, not walk-forward. A 2026 unit cell pools weeks 1-3 already in the file. Do not treat it as pre-kickoff."

From §2 item 4: "Held-out measurement, separate fit, train 2022-2023, eval 2024-2025 opponent-half fourth downs: n=3,988, delta +6.7703 percentage points, gate pass."

Good.

Now, let's write. I'll aim for rich, formal, precise prose. I must not exceed context limits but should be thorough.

Check for any accidental betting line mentions: avoid "moneyline", "spread", "total", "over/under", "odds". The source text uses "moneyline.json" in reasoning traces; I will not repeat it. I will not mention "prop" either? Prop is not explicitly banned but related to betting; better avoid "prop priors" from artifact? The artifact mentions "DFS/props work" and "market-strength→prop priors". "Props" might be considered betting-related. To be safe, I'll avoid "props" or mention only as "proposition" if needed? Better to avoid entirely. The invariant specifically says spreads, totals, moneylines, or odds. I'll avoid those exact terms and related betting lexicon to be safe.

Let's draft each section with length.

THINK_TRACE: I'll write ~500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: ~300-400 words with equations.

RETROCAUSAL_GENEALOGY: ~200 words.

RECURSIVE_THEORY_OF_MIND: ~200 words.

CROSS_LAYER_VETO_ADJUDICATION: ~200 words.

RLVR_COUNTERFACTUAL_VETOES: ~200 words.

Total > 1000.

Let's write carefully. Use LaTeX syntax inside the XML. Make sure XML is well-formed (no unescaped < or & inside text? LaTeX uses \leq etc. which is fine. Avoid raw < in text. Use &amp; if needed? I'll avoid ampersands or write "and".

I need to include [PAGE N] markers. Since source is sections, I'll use [PAGE §2], [PAGE §4], [PAGE §7], [PAGE §1], [PAGE §3], [PAGE §6]. Verbatim quotes in quotation marks.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The three blocking gaps form a dependency graph rather than a linear checklist. Gap 1 (seed CSVs) unblocks Gap 3 (signal registry producers and coaching tendency evidence) because the ten failing coaching tests pin the 2026 CLE Monken HC row (164 plays) with a 1e-6 YoY delta; without those rows on the branch, the registry cannot claim a real coaching producer, and the end-to-end fired-signal test has no genuine pick to anchor to. Gap 2 (OL provider) is topologically adjacent but independently blocking: the spec in RECONCILED-SOURCES-2026-10-02.md [PAGE §4] demands get_ol_status / get_ol_starters built from nflverse injuries plus depth_charts, with Alexandria reserved for live daily practice detail and a DataGapError raised for unpublished/uncovered weeks. The on-branch e2e pins T1 as INVALID because offensive_line remains UNCHECKED; this is the single blocking gap between PARTIAL and a real pick [PAGE §7]. Gap 3 (signal registry + tau) is the nervous-system layer: the registry currently exists only as prose—47 entries, 0 wired, 9 ACTIVE evaluators returning null, homeSign unset on every production definition [PAGE §2]—and tau_hat.csv (1,523 cells, fallback mix 55 unit / 162 pooled / 933 league / 373 league-region [PAGE §2]) has no consumer on the prediction path [PAGE §7].

The gray zone that must be audited is the field report’s claim that the seed CSVs were absent after a full-disk search [PAGE §2]. §7 overturns this directly: the files exist on this VM at ~/workspace/coaching-tendencies/data/, built 2026-10-01 22:05 from real nflverse parquet (2022–2026) by committed scripts code/compute_tendencies.py and code/coach_tenures.py, with DATA_GAPS.md and six coach profiles including Monken [PAGE §7]. The earlier search ran on Hermes’ Windows box, not this VM [PAGE §7]. What remains unverified is whether the diff against the tests’ pinned 1e-6 YoY expectations reproduces exactly; that diff decides whether the files land cleanly or expose a manufactured-row temptation [PAGE §7 §14]. A second gray zone is the OL provider’s DataGapError boundary: injury-week5.json is an empty 1,160-byte pull that burned 5 credits [PAGE §4]; invoking the provider on Week 5 before publication must raise, not silently degrade [PAGE §7]. A third is tau’s point-fit singularity: 2026 unit cells pool weeks 1-3 already in the file, and the served table must not be stamped or consumed as pre-kickoff [PAGE §2]; the +6.7703 percentage-point held-out figure (n=3,988 opponent-half fourth downs, train 2022–2023, eval 2024–2025) belongs to a separate fit and cannot be retrofitted onto the served table [PAGE §2 §7].

Interdependency resolution: land seed CSVs and run the diff; build the OL provider and re-run test_t1_real_e2e.py until offensive_line is no longer UNCHECKED; write the versioned 47-signal registry, attach one real producer (coaching tau or OL status), prove one fired signal on a real pick; wire tau_hat.csv into the reasoning context with walk-forward rebuild or “point fit — not pre-kickoff” stamps on every consumer surface; set homeSign or flip the nine ACTIVE null evaluators to explicit DISABLED [PAGE §2 §7]. If any sub-task is genuinely blocked—e.g., the 1e-6 delta fails—the block must be recorded in the claim matrix and work must proceed to the next gap rather than hyper-fixating [PAGE §2 §3]. Stale green claims are invalid: the 6,472-test pass ran at f5a83452e on another branch, and d255965 is no longer HEAD [PAGE §2 §7]. HEAD is b3e15f21, moved after the “final” handoff [PAGE §1 §4]; every green claim must be regenerated from a clean checkout at current HEAD [PAGE §7].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations governing the three gaps, with units, assumptions, and breakdown regimes. All citations refer to the supplied wire package sections as [PAGE §N].

1. Seed-CSV integrity and YoY gate.
Let b be the byte stream of a candidate seed CSV and h: {0,1}* → {0,1}^{256} the SHA-256 manifest operator. Integrity requires h(b) = h_manifest [PAGE §2 §4]. Let ĉ_{t} denote the coached tendency vector for CLE HC Monken in season t, computed from real nflverse parquet by code/compute_tendencies.py [PAGE §7]. The ten tests pin |ĉ_{2026} − ĉ_{2025}| < 10^{-6} (dimensionless tendency delta, units of play-share probability) [PAGE §1 §2]. Breakdown regime: if the CSV rows are manufactured rather than derived from parquet, the operator is singular and the test delta is epistemic noise, not signal [PAGE §2 §14 §7]. Assumption: the 160-row structure (32 teams × 5 coaches) and def_tendencies.csv are present; 1e-6 precision remains unverified until diff executes [PAGE §7].

2. OL provider and DataGapError.
Let P(w) ∈ {0,1} be the injury-publication indicator for week w. The spec requires get_ol_status / get_ol_starters to read nflverse injuries and depth_charts, consult Alexandria only for live daily practice detail, and raise DataGapError(w) whenever ¬P(w) [PAGE §4 §7]. Empirical violation: injury-week5.json = 1,160 bytes, empty pull, 5 credits burned [PAGE §4]. The T1 e2e predicate is offensive_line ≠ UNCHECKED; current state is INVALID at depth L1 [PAGE §2 §7]. Breakdown: invoking the provider before Friday-evening publication without the DataGapError gate produces a silent null depth chart and a false-clean T1 trace [PAGE §7].

3. Signal registry gate algebra.
Let S = {s_1, …, s_47}. Current inventory: |{s : wired(s) = yes}| = 0, |{s : stub ∨ none}| = 15, |{s : weighted with evidence}| = 0, |{s : tested fire-and-contribute}| = 0, |{s : traced on real pick}| = 0, |{s : behind dark gate}| = 38 [PAGE §2]. Let homeSign: S → {0,1} ∪ {∅}. Production definitions satisfy ∀s ∈ Production : homeSign(s) = ∅ [PAGE §2]. The continuous-tilt gate is g(s) = 1 iff homeSign(s) ≠ ∅ ∧ wired(s) = yes; therefore g(s) = 0 for all production signals [PAGE §2]. Nine ACTIVE evaluators return null unconditionally: ∑_{i=1}^{9} 1[eval_i = ∅] = 9 [PAGE §2]. Remedy: set homeSign on production definitions or flip those nine to explicit DISABLED; “partial” wiring is not a substitute [PAGE §2 §7].

4. Tau table dimensions and pooling singularity.
tau_hat.csv contains N = 1,523 cells = 55_unit + 162_pooled + 933_league + 373_league-region [PAGE §2]. Let τ̂_{w} be the 2026 unit cell for early-season weeks; the file pools w ∈ {1,2,3} [PAGE §2]. Point-fit estimator: τ̂ = Pool(w_{1:3}) ≠ WalkForward(w_{2026}) [PAGE §2 §7]. Breakdown: any consumer surface stamping τ̂ as pre-kickoff commits a regime error; the correct operation is walk-forward rebuild or permanent “point fit — not pre-kickoff” annotation [PAGE §7]. Held-out reference (separate fit, not the served table): Δ = +6.7703 percentage points = +0.067703 probability units, n = 3,988 opponent-half fourth downs, train 2022–2023, eval 2024–2025, gate pass [PAGE §2]. Units: probability (dimensionless [0,1]); cell count (dimensionless integer); percentage points (1 pp = 0.01 probability).

5. Verbatim source anchors.
“The ‘missing’ seed CSVs exist on this VM. ~/workspace/coaching-tendencies/data/ holds coach_offense.csv, coach_defense.csv, off_tendencies.csv (160 rows = 32×5 ✓), def_tendencies.csv, built 2026-10-01 22:05 from real nflverse parquet (2022–2026 parquets present) by committed scripts (code/compute_tendencies.py, code/coach_tenures.py)” [PAGE §7]. “Nine ACTIVE signals return null unconditionally. Continuous tilt refuses every real signal because homeSign is set on no production definition” [PAGE §2]. “injury-week5.json 1,160 bytes = the empty 5-credit pull” [PAGE §4]. “A 2026 unit cell pools weeks 1-3 already in the file. Do not treat it as pre-kickoff” [PAGE §2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The engineering lineage runs from nflverse play-by-play (2022–2026) through TauFitter to the served tau_hat.csv [PAGE §2]. A critical retrospective fork occurred when a contaminated fit including evaluation years produced a 13.5-point Hamming figure; that fit was discarded in favor of the held-out measurement (+6.7703 pp, n=3,988, train 2022–2023, eval 2024–2025) [PAGE §2 §7]. This is the program’s central multi-week trap: an in-season point fit pooling weeks 1–3 can be retold causally as a pre-kickoff unit cell, but the temporal direction is false [PAGE §2 §7]. The correct genealogy demands walk-forward reconstruction or an explicit non-pre-kickoff stamp [PAGE §7].

Branch genealogy shows the same retelling risk: HEAD moved from d255965 to b3e15f21 after the “final” handoff [PAGE §1 §4], yet green claims reference f5a83452e (calibration branch, equal to origin) and d255965 (old HEAD) [PAGE §2 §7]. PR #1002 remains open, dirty, mergeable=false, with Vercel failed and Codacy action_required [PAGE §2 §7]. Thus historical claims about “all green” are not transferable to the current HEAD; the audit must treat prior results as superseded and regenerate receipts at b3e15f21 [PAGE §7].

The signal registry’s lineage is missing entirely: 47 entries exist as prose only, with no versioned file on the branch [PAGE §2 §7]. The first real producer must be attached to a durable registry artifact (signal id, producer, wired state, gate, evidence), not injected as an after-the-fact annotation [PAGE §2]. The artifact “NFL Analytics Reverse-Engineering” contributes a secondary lineage: 2,204 files, 81 MB, SHA-256 manifest, nine reverse-engineered systems, 170 CSVs, 14 digests—none fetched into the corpus [PAGE §3 §7]. These are historical sources awaiting diff against the current repo tree, not executable engine components [PAGE §7]. Refusal genealogy: DATA_GAPS.md encodes proxy-vs-metric discipline, and the field report’s REFUSALS section bars manufactured coach rows, calibration-map fits, production database writes, TimesFM routing, and gate flag flips [PAGE §2 §7 §14]. That refusal lineage is the counterweight to the multi-week trap of backfilling red tests with synthetic rows.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The coding agent’s crisis-habit regression is documented in its own refusal list: manufacture coach rows to force ten red tests green, flip homeSign or env gates to silence null evaluators, reword guardrails, fit a contamination-prone calibration map, or write to a production database [PAGE §2 §14]. Under pressure, the recursive model of itself predicts shortcut over verification. The counter-trap is the existing refusal taxonomy: DATA_GAPS.md’s proxy-vs-metric discipline, the honest-refusal pattern (“INVALID / L1 / UNCHECKED” probes, “honest refusal, not a kill”), and the decision to discard the contaminated 13.5 pp fit rather than average it [PAGE §7]. Recursive theory of mind says the agent must model Garrett’s audit as adversarial to overclaim: “found” ≠ “processed” ≠ “wired” ≠ “tested” [PAGE §1]. Therefore every completion claim requires a receipt: files changed, tests run with counts, what was exercised, log location [PAGE §3].

The clock layer operates on two timescales. First, the git clock: HEAD is b3e15f21, branch-only files (tau_hat.csv, test_t1_real_e2e.py) are absent from stale local checkouts, and no clean-state full suite has run at current HEAD [PAGE §7]. Testing from a stale checkout produces phantom greens. Second, the publication clock: injury data publishes likely Friday evenings; Week 5’s empty 1,160-byte pull burned 5 credits [PAGE §4 §7]. The OL provider must respect that clock via DataGapError rather than pretending coverage exists [PAGE §7]. Third, the seasonal clock: tau’s 2026 cells pool weeks 1–3 in-season; presenting them as pre-kickoff reverses the arrow of information [PAGE §2 §7]. The recursive fix is to regress to the crisis habit (refuse, record, move on), set the counter-trap (explicit DISABLED or homeSign set), and obey the clock (clean checkout at b3e15f21, Friday publication gate, walk-forward or stamp for tau) [PAGE §2 §7].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Veto layers map from physical/biomechanical/weather reasoning to the engineering stack as hard refusal boundaries that must not be bypassed.

Layer 1 — data acquisition veto: nflverse injuries plus depth_charts are the source of truth for OL status; Alexandria is restricted to live daily practice detail only [PAGE §4]. The empty injury-week5.json (1,160 bytes, 5 credits burned) is a positive veto: get_ol_status / get_ol_starters must raise DataGapError(w) for unpublished weeks rather than return a degraded depth chart [PAGE §4 §7]. No film-coding or biomechanical proxy may substitute for the published injury/depth source [PAGE §4].

Layer 2 — signal veto: homeSign unset on every production definition is a silent veto that makes the registry look operational while refusing all real signals [PAGE §2]. Nine ACTIVE evaluators returning null must be flipped to explicit DISABLED or provided a producer and gate; continuous tilt must not be allowed to treat null as evidence [PAGE §2 §7]. The registry file itself (signal id, producer, wired state, gate, evidence) is the veto enforcement surface; prose-only counts are inadmissible [PAGE §2 §7].

Layer 3 — context veto: tau_hat.csv’s 2026 unit cells pool weeks 1–3 [PAGE §2]. Any reasoning-context consumer that stamps τ̂ as pre-kickoff is vetoed; the only permitted deployments are walk-forward rebuild or permanent “point fit — not pre-kickoff” labeling [PAGE §7]. The +6.7703 pp held-out result belongs to a distinct 2022–2023 / 2024–2025 fit and cannot be imported as authority for the served table [PAGE §2].

Layer 4 — model/veto boundary: scoring.ts calls neither MiMo nor Qwen; the four-tier architecture is a diagram, not a system [PAGE §2]. No cross-boundary Tier 1↔Tier 3 test exists because the boundary is unwired [PAGE §7]. No bridge file may be added unless it carries a verified fact across the GitHub/HF boundary [PAGE §2]. Weather remains an unwired external veto layer listed on the backlog [PAGE §6]; it must not be treated as available until a live pull gate and publication schedule are implemented [PAGE §7].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards veto scenarios, each with a falsifiable prediction.

Scenario 1 — seed-CSV delta veto. Counterfactual: the diff of coach_offense.csv / coach_defense.csv / off_tendencies.csv / def_tendencies.csv against the ten tests’ pinned 1e-6 YoY expectations fails on the CLE Monken HC row (164 plays). Veto: do not land the files; record the mismatch in the claim matrix. Verifiable assertion: after diff, either |ĉ_{2026} − ĉ_{2025}| < 10^{-6} for all pinned cells or a specific cell violates the bound. Prediction: if vetoed, the ten coaching tests remain red until the real nflverse-derived source is corrected; manufacturing rows to force green is forbidden [PAGE §2 §7 §14]. Log location: coaching-tendencies/diff-output and branch commit receipt.

Scenario 2 — OL publication-clock veto. Counterfactual: test_t1_real_e2e.py is invoked against Week 5 before injury publication. Veto: DataGapError(5) must be raised; offensive_line stays UNCHECKED; T1 e2e returns INVALID at depth L1 with empty levels [PAGE §2 §7]. Verifiable assertion: provider raises DataGapError when P(5) = 0; no fallback depth chart is synthesized. Prediction: T1 clears offensive_line only after Friday-evening publication and a real injury-week pull; any green T1 before publication is a false positive caused by stubbed data [PAGE §7]. Log location: e2e run of test_t1_real_e2e.py at HEAD b3e15f21.

Scenario 3 — signal gate null veto. Counterfactual: an end-to-end fired-signal test is run while homeSign = ∅ on production definitions and nine ACTIVE evaluators return null. Veto: continuous tilt refuses every real signal; the test must not report a fired signal as success [PAGE §2]. Verifiable assertion: ∀s ∈ Production : g(s) = 0; ∑_{i=1}^{9} 1[eval_i = ∅] = 9. Prediction: the end-to-end fired-signal test fails until homeSign is set or the nine evaluators are explicitly DISABLED and a real producer is wired [PAGE §2 §7]. Log location: signal-registry end-to-end test run and registry versioned file commit.
</RLVR_COUNTERFACTUAL_VETOES>