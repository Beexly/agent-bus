---
source: "TASK-016-v3-consolidated-mission-2026-10-02 (1).md"
folder: "/CorpusRoot"
pages: 5
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5376
---

<NATIVE_REASONING>
The user is asking me to act as Hermes, a coding agent, processing a massive mission document (TASK-016 v3). They want me to begin with Step 0: report hostname, HEAD SHA, disk, timestamp, and git log --oneline -12.

However, I am an AI assistant without access to:
- The file system at /CorpusRoot/TASK-016-v3-consolidated-mission-2026-10-02 (1).md
- A terminal or shell to run hostname, git log, df, etc.
- The actual repository at Machine A (Beexly Windows)
- Any of the referenced files (tau_hat.csv, registry.json, etc.)

I cannot execute shell commands, access the corpus, or perform git operations. I must be honest about this limitation.

But wait — the user also included the SYSTEM prompt requirements about GSE + GSI Frontier Reasoning Foundry with strict invariants:
1. ZERO BETTING LINES
2. ZERO TOY EQUATIONS
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>

And cite exact [PAGE N] markers and verbatim quotes when source pages are provided.

The user provided SOURCE TEXT with PAGES: 5, but it appears to be one consolidated document rather than explicitly paginated. I need to treat it as the source and reference it appropriately, though exact page markers aren't visible in the text provided. I can reference sections like "TASK-016 v3 — CONSOLIDATED MISSION" or specific phase headers.

Since I cannot actually run Step 0 (hostname, git log, etc.), I must:
1. State clearly that I cannot execute host commands or access the filesystem.
2. Still fulfill the structural requirements of the system prompt (the XML sections with >= 1000 words total depth).
3. Provide a deep reasoning trace about what Step 0 would entail, what the mission document says, audit the gray zones, etc.
4. Not fabricate SHAs, hostnames, disk values, or git log output (that would be inventing facts, which violates the spirit of "ZERO TOY EQUATIONS" and general honesty).
5. Not mention betting lines (spreads, totals, moneylines, odds) — interestingly the source text mentions "moneyline.json, spread.json, total.json" in Wire 10, but I as the assistant should not mention betting lines per Invariant 1. I need to be careful: the source text references these filenames, but I should avoid discussing betting lines/odds/spreads/totals/moneylines in my output. I can reference the wire by number without naming the betting types, or if I must reference the file names, I should avoid elaborating on betting content. Actually, Invariant 1 says "Never mention spreads, totals, moneylines, or odds." The source text has "trace rebuild. Rebuild moneyline.json, spread.json, total.json from Kalshi + ESPN + pbp." I should avoid repeating those terms or discussing them. I can refer to "Wire 10 trace rebuild" generically or as "the three trace files" without naming the prohibited terms. Or I can mention the wire number but not the prohibited words.

Let me plan the response:

- Opening: Honest statement that I am a language model without terminal/filesystem access to Machine A or the CorpusRoot, so I cannot execute Step 0 (hostname, HEAD SHA, disk, timestamp, git log). I cannot fabricate these values.
- Then provide the required XML sections with deep, multi-hop reasoning based on the mission document provided.

Word count: >= 1,000 words across the XML sections. I need to ensure each section is substantial.

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Analyze the mission document's structure.
- Identify dependencies: Phase 0 gates live-check leg only; training/validation use 2022-2025 + 2026 W1-3.
- Gray zones: "published pick still static" separate problem; homeSign env key prohibition; ERA5 vs freeze-time; PR #1002 unmerged; tau stamp pools in-season weeks (walk-forward violation) until served number matches walk-forward number.
- Audit contradictions: Wire 9 says test a pick changes when tau included; Wire 5 held-out checker gates Phase 3; live-check abstention rate above base rate → BLOCKED-ON-PRECISION, no blending (Law 4).
- Gray zone: Phase 12 says Wire 17 parquet pins all 4 SHA-256 filled vs "<pin on first fetch>" — unverified.
- Gray zone: Phase 13 HF hardware re-query, hermes-second-wave.md — if on phone, mark UNKNOWN.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Since no actual pages are numbered in the source, I'll cite [TASK-016 v3, PHASE 3] etc. But the user said "cite exact [PAGE N] markers". The prompt says PAGES: 5 but doesn't give page breaks. I can use [PAGE 1]...[PAGE 5] approximating the document flow, or reference section headers. Better to be honest: "The source is delivered as one consolidated block without explicit folio numbers; I cite by phase/header and ordinal page estimate." But the system prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since I don't have explicit page markers, I'll use the section headers as anchors and maybe [PAGE 1]-[PAGE 5] as logical segments of the ~5 page document. I'll include verbatim quotes from the text.
- Formal content: set intersection for held-out gate: train_years ∩ eval_years = ∅. Walk-forward validation condition. Abstention rate condition: if abstention_rate(W1-3) > base_rate → BLOCKED-ON-PRECISION. No blending: fit_clean ∩ fit_contaminated = ∅ (never averaged).
- Units: SHA-256 hashes, 1e-6 pins, 237 plays, Pass EPA +11.91, Rush EPA −21.279, 3 TO −16.008 EPA, 48 games, 47 signals, 13.5pp discard, 2,204-file manifest, 1,449,267 bytes, 170 CSVs, 14 digests, 48 games.
- Breakdown regimes: held-out gate failure regime (non-empty intersection), live-check failure regime (abstention > base rate), registry null regime (wired_state == null), calibration absence regime (wired signal without calibration row = not wired).

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: nflverse play-by-play, Kalshi/ESPN trace reconstruction, conformal intervals (t10-conformal), ENBPI trust score, walk-forward validation (time-series cross-validation), refusal/abstention doctrine from 71e6fd9a2, GSE-MASTER-INVENTORY audit lineage.
- Multi-week traps: pooling in-season 2026 weeks (walk-forward violation), blending contaminated fits, relabeling fixture traces without rebuilding, using ERA5 reanalysis as freeze-time, waiting for season end to calibrate, publishing GSE skill.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: under pressure, Hermes might revert to pooling fits, averaging contaminated results, overwriting abstention.py instead of extending, stuffing homeSign through env key, editing AGENTS.md, using .github/workflows.
- Counter-trap: recognize these as mission-specific traps; enforce extend-not-overwrite, pre-commit hooks not workflows, docs/DOCTRINES.md not AGENTS.md, zero nulls in registry.
- Clock: SHAs rot within the hour; HEAD is truth; weekly W4+ refresh extends live-check; stamp comes off only when walk-forward number equals served number.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical: Machine A (Beexly Windows) vs Machine B motif coordinates; two-host rule — absence on one host ≠ absence on other.
- Biomechanical: not directly applicable, but can discuss data pipeline as biomechanical analog? Maybe skip forced biomechanical or interpret as provider layer (OL provider, injury gate). The injury gate requires_injury_published(week) → DataGapError before Friday 18:00 ET.
- Weather: priors wired (c72a46c7f), weights unset per total-signal backlog; ERA5 is reanalysis not freeze-time; freeze-time is what model sees at prediction time.
- Veto proof: any data file without sibling manifest with 10 required fields is vetoed by Wire 4 pre-commit hook.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
1. Scenario: held-out checker finds train_years ∩ eval_years ≠ ∅ (e.g., 2025 in both train and eval). Veto: contaminated fit discarded, never averaged. Prediction: Phase 3 blocked; no swap tonight; report BLOCKED-ON-PRECISION if live-check abstention > base rate.
2. Scenario: tau stamp applied but walk-forward number ≠ served number; or live-check W1-3 abstention rate above base rate. Veto: do not swap served table; stamp remains; fit not ready. Prediction: BLOCKED-ON-PRECISION reported; no blending with pooled fit.
3. Scenario: registry entry remains wired_state: null or signal wired without calibration row. Veto: zero nulls required; each no needs _blocked_reason; calibration row mandatory at wire time. Prediction: PHASE 5 fails verification; signal not considered wired.

I must ensure I don't mention betting lines. Wire 10 mentions moneyline.json, spread.json, total.json — I will refer to it as "Wire 10 trace rebuild" and avoid the prohibited words.

Also need to avoid fake equations like Force/Fatigue. I can use legitimate set theory and probability notation: train_years ∩ eval_years = ∅, P(hit | refusal) ≤ base_rate, etc. These are formal, not toy ratios.

Now word count: I need to write generously. Let's aim for ~250-300 words per section for 5 sections = 1250-1500 words, plus THINK_TRACE >= 400. Total > 1000.

Structure:
1. Brief honest preamble about lack of terminal access (outside XML sections? The user wants the report format starting with Step 0. I can put the disclaimer first, then the XML sections).
2. The six XML sections.

Let me draft carefully.

Preamble:
"I cannot execute host commands or access the filesystem at /CorpusRoot or Machine A. I am a language model without a terminal, shell, or git client. Therefore I cannot report hostname, HEAD SHA, disk usage, timestamp, or git log output. Fabricating those values would violate the mission's evidentiary standard. Below is the required reasoning architecture built strictly from the consolidated mission text provided (TASK-016 v3, ~5 pages). All citations refer to the document's phase/section headers; explicit folio page numbers were not present in the delivered block, so I anchor by phase and include verbatim quotes."

Then the sections.

Let me write the THINK_TRACE first, making it deep and >=400 words.

THINK_TRACE content:
- Mission reception: TASK-016 v3 supersedes wire prompt, training mission, v2. "If it is not in this document, it is not this session's work."
- Step 0 dependency: hostname, HEAD SHA, disk, timestamp, git log --oneline -12. SHAs rot within the hour; HEAD is truth.
- Phase 0: refresh play_by_play_2026.parquet through current week; freeze with SHA-256; commit manifest. Scope correction: frozen vintage gates live-check leg only, not training/validation. Training data: 2022–2025 PBP complete (weeks 1–22, 284–285 games); 2026 weeks 1–3 only (48 games).
- Phase 1: tau stamp. tau_hat.csv pools in-season 2026 weeks — walk-forward violation. Stamp text: "point fit — not pre-kickoff. 2026 unit cells pool in-season weeks." Stamp comes off when walk-forward number equals served number.
- Gray zone 1: homeSign wired on nfl_age_conditioned_rest (e28e4b80); tilt tests pass/fail; empty inputs → null; published pick still static; live slate passes process.env, keys have no writer — separate problem, not this session. Constraint: no stuffing homeSign through env key; unknown direction → homeSign: null, gate DISABLED.
- Gray zone 2: PIT@CLE Week 4 trace: 237 plays, Pass EPA +11.91, Rush EPA −21.279, 3 TO −16.008 EPA; analyze() → INVALID; qb_behavior + coaching_scheme DATA-GAP. This is a live-check failure signature.
- Gray zone 3: PR #1002 mapped read-only: 16 conflict paths, 5 doctrine reversals. Stays unmerged. Do not touch PR #1002 or #1012.
- Gray zone 4: Wire 5 held-out checker: train_years ∩ eval_years = ∅. Contaminated fits discarded, never averaged. Reference: 13.5pp discard. Walk-forward validation unverifiable without this — gates Phase 3.
- Gray zone 5: Law 4: if W1–3 live-check abstention rate above base rate → fit not ready → BLOCKED-ON-PRECISION. Do not blend with pooled fit. Do not average.
- Gray zone 6: Phase 7 calibration: refusal calibration based on historical frequency and expected hit rate without refusing. At or below base rate → refusal calibrated. Above → threshold moves.
- Gray zone 7: Wire 10 trace rebuild from Kalshi + ESPN + pbp. Do not relabel without rebuilding. (Avoid naming the three prohibited types; refer to "the three trace artifacts" or "Wire 10 artifacts".)
- Gray zone 8: Phase 12 verifications in-flight: Wire 8 OL provider (a704d0ca5) get_ol_state raises DataGapError; Wire 17 parquet pins (1fce7fb4c) all 4 SHA-256 filled; doctrines 6 remaining owed; weather priors wired weights unset; skill public surface only.

Good, that's rich.

SOURCE_OPERATORS_AND_EQUATIONS:
- Held-out gate operator: G_heldout(M) = 1 iff train_years(M) ∩ eval_years(M) = ∅; else 0 (discard). Units: boolean gate; years dimension.
- Contamination discard: if G_heldout = 0, fit_contaminated is discarded; ∄ average(fit_clean, fit_contaminated). Reference 13.5pp discard.
- Abstention veto: A(W1-3) = abstention_count / total_slates. If A(W1-3) > base_rate → status = BLOCKED-ON-PRECISION. No blending. Swap served table iff validate + live-check clear.
- Registry constraint: ∀ s ∈ S (|S| = 47), wired_state(s) ∈ {yes, partial, no}; ¬∃ s : wired_state(s) = null. If wired_state = no, then _blocked_reason(s) ≠ ∅.
- Calibration row schema: C_i = (train_years, eval_years, metric, n, live_check_2026_W1-3, vintage_SHA). Required at wire time; no batching.
- Refusal calibration: given historical refusal frequency f_ref, expected hit rate of non-refused picks H_nonref. If H_nonref ≤ base_rate → calibrated. If H_nonref > base_rate → threshold moves. Refusal never validated = intuition.
- Manifest enforcer: ∀ committed data file f, ∃ sibling manifest m with 10 required fields. Pre-commit hook in scripts/, not .github/workflows (forbidden).
- Breakdown regimes: (1) held-out intersection non-empty; (2) live-check abstention > base rate; (3) registry nulls; (4) wired signal lacking calibration row; (5) walk-forward number ≠ served number (stamp remains on).
- Verbatim quotes: "Contaminated fits are discarded, never averaged." "Do not blend with the pooled fit. Do not average. Law 4." "A refusal never validated against history is an intuition, not a refusal." "A wired signal without a calibration row is not wired."

Cite pages: I'll use [PAGE 1] through [PAGE 5] as logical segments corresponding to the document flow: Step 0/Phases 0-1 [PAGE 1], Phase 2 [PAGE 2], Phase 3 [PAGE 3], Phase 4-7 [PAGE 4], Phase 8-13 [PAGE 5]. Since actual page breaks aren't shown, I'll note this convention. Or better, just cite by phase names which are unambiguous. The system says "cite exact [PAGE N] markers". I'll do something like [TASK-016 v3, PHASE 3, p.3 estimate] but to strictly follow, I'll use [PAGE N] with a note that the source was delivered as a continuous block and I'm using ordinal page estimates. Hmm, the user might want exact markers. Since I don't have them, I'll use section headers as the primary citation and [PAGE 1]-[PAGE 5] as approximate locations, being transparent.

RETROCAUSAL_GENEALOGY:
- Lineage: nflverse PBP (2022–2025 complete, 2026 W1–3), Kalshi + ESPN + pbp trace reconstruction, conformal prediction intervals (intelligence/discovery/t10-conformal/intervals.json), ENBPI trust score, walk-forward time-series validation, refusal/abstention doctrine (honest-refusal at 71e6fd9a2), GSE-MASTER-INVENTORY 44-finding audit, dual sweeps, wire reconciliation.
- Historical figures/events implied: Garrett's directive (walk-forward tau rebuild, do not wait for season), Hermes prior work (refusal rules at 71e6fd9a2), PR #1002 doctrine reversals.
- Multi-week traps: pooling in-season 2026 weeks in tau_hat (walk-forward violation); waiting for season end to calibrate; blending contaminated fits; relabeling fixture traces without rebuild; using ERA5 reanalysis as freeze-time; publishing GSE skill; treating absence on Machine A as absence on Machine B.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under deadline pressure, Hermes may (a) overwrite trust/abstention.py instead of extending; (b) average contaminated and clean fits; (c) stuff homeSign via env key; (d) edit AGENTS.md for doctrines; (e) add .github/workflows CI; (f) declare phase complete without verification; (g) tell Motif "complete."
- Counter-trap: extend-not-overwrite (Wire 1, Wire 9); zero nulls registry; pre-commit hooks in scripts/; docs/DOCTRINES.md not AGENTS.md; no .github/workflows; report findings, never tell Motif complete; SHA freshness (rot within hour).
- Clock: HEAD is truth; SHAs rot within the hour; weekly W4+ refresh extends live-check; stamp removal condition (walk-forward = served); 2026 vintage gates only live-check leg.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Machine A (Beexly Windows, grok-4.7) vs Machine B (motif coordinates). Two-host rule: search on one host never establishes absence on other. intelligence/host_ledger.json one entry per host per search: hostname, path, date, tree SHA, scope.
- Biomechanical/provider layer: OL provider (a704d0ca5) PIT@CLE trace offensive_line CLEAR; get_ol_state raises DataGapError on unpublished weeks; injury_gate require_injury_published(week) → DataGapError before Friday 18:00 ET (empty Week-5 pull cost 5 credits).
- Weather/information layer: weather priors + public skill (c72a46c7f); weights unset per total-signal backlog; ERA5 is reanalysis, not freeze-time; freeze-time = what model sees at prediction time.
- Veto proof: Wire 4 manifest enforcer vetoes any committed data file lacking sibling manifest with 10 required fields; pre-commit hook, not workflow. Wire 5 vetoes held-out contamination. Wire 2 (enbpi) refuses to score when conformal absent → UNCHECKED abstention, not 0.5.
- No betting lines mentioned.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Held-out intersection violation: train_years ∩ eval_years ≠ ∅ (e.g., 2025 appears in both). Veto: contaminated fit discarded, never averaged (13.5pp precedent). Prediction: Phase 3 does not proceed to live-check; no served-table swap; report held-out gate failure.
2. Live-check abstention breach: abstention_rate(2026 W1–3) > base_rate. Veto: fit not ready; status BLOCKED-ON-PRECISION; no blending with pooled fit; stamp remains on tau_hat.csv. Prediction: served table not swapped tonight; walk-forward rebuild required.
3. Registry/calibration vacuum: any of 47 signals with wired_state: null, or wired signal without calibration row at wire time. Veto: zero nulls; each no carries _blocked_reason; calibration row required (train | eval | metric | n | W1–3 live-check | vintage SHA). Prediction: Phase 5 and Phase 7 verification fail; signal classified as not wired.

I need to ensure total words across XML sections >= 1000. Let me be verbose enough.

Also, I must not include betting lines. The source text mentions Kalshi + ESPN + pbp for Wire 10. I can say "Wire 10 requires rebuilding the three trace artifacts from market, broadcast, and play-by-play sources" — avoid moneyline/spread/total.

Also avoid "odds", "spreads", "totals", "moneylines".

Now let's write it out. I'll produce the preamble then the sections.

Word check estimate:
THINK_TRACE: ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words.
RETROCAUSAL_GENEALOGY: ~300 words.
RECURSIVE_THEORY_OF_MIND: ~300 words.
CROSS_LAYER_VETO_ADJUDICATION: ~300 words.
RLVR_COUNTERFACTUAL_VETOES: ~250 words.
Total ~2050 words. Good.

I'll include verbatim quotes in SOURCE_OPERATORS_AND_EQUATIONS and THINK_TRACE.

Let's compose.
</NATIVE_REASONING>

I cannot execute host commands or access the filesystem at `/CorpusRoot` or on Machine A. I have no terminal, shell, or git client, so I cannot report `hostname`, HEAD SHA, disk usage, timestamp, or `git log --oneline -12` output. Fabricating those values would violate the mission’s evidentiary standard (“Every SHA in this mission rots within the hour; your HEAD is the truth”). Below is the required reasoning architecture built strictly from the consolidated mission text provided (TASK-016 v3, delivered as a ~5-page block). Because explicit folio page numbers were not present in the delivered text, I anchor citations by phase/header and use ordinal page estimates [PAGE 1]–[PAGE 5] corresponding to the document’s sequence from Step 0 through Phase 13, and I include verbatim quotes from the source.

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The mission text (TASK-016 v3, consolidated mission, 2026-10-02 ~13:00 CT) supersedes the wire prompt, the training mission, and TASK-016 v2: “If it is not in this document, it is not this session’s work” [PAGE 1]. Step 0 requires measured host output—hostname, HEAD SHA, disk, timestamp—and `git log --oneline -12` on the branch, with the warning that every SHA rots within the hour and HEAD is the truth [PAGE 1]. I cannot produce these because I lack terminal access; any invented SHA would immediately violate the freshness invariant.

Phase 0 requires refreshing `play_by_play_2026.parquet` through the current week, freezing with SHA-256 hashes, and committing the manifest. The Grok 4.7 scope correction is load-bearing: “the frozen vintage gates the live-check leg only. It does NOT gate training or validation. 2022–2025 + 2026 W1–3 are committed and reproducible offline today” [PAGE 1]. This creates a clean epistemic boundary: training/validation use committed historical data; the live-check leg depends on the fresh 2026 freeze.

Phase 1 imposes zero-tolerance tau stamping. The served `tau_hat.csv` pools in-season 2026 weeks, which is a walk-forward violation. The stamp text is fixed: “point fit — not pre-kickoff. 2026 unit cells pool in-season weeks.” The stamp comes off only “when the walk-forward number is the served number. Not before” [PAGE 1]. This is a temporal gate: no walk-forward equivalence, no stamp removal.

Phase 2 orders Tier 0 wires strictly: Wire 9 (tau → DataContext via new `intelligence/context/tau_wire.py`), Wire 5 (held-out checker at `intelligence/gates/heldout_check.py` verifying `train_years ∩ eval_years = ∅`), Wire 4 (manifest enforcer at `intelligence/gates/manifest_check.py` requiring 10 manifest fields per committed file, enforced by pre-commit hook, not `.github/workflows`) [PAGE 2]. Wire 5’s held-out gate “gates Phase 3” and references a “13.5pp discard” precedent: “Contaminated fits are discarded, never averaged” [PAGE 2].

Phase 3 executes Garrett’s walk-forward tau rebuild: train on 2022–2024 all weeks, validate on 2025 all weeks under the Wire 5 gate, live-check on 2026 W1–3 (48 games, committed). The decision rule is stark: “If the W1–3 live-check abstention rate is above base rate → fit not ready → report BLOCKED-ON-PRECISION. Do not blend with the pooled fit. Do not average. Law 4” [PAGE 3]. If it clears, swap the served table tonight; the stamp comes off only when walk-forward equals served. W4+ refresh extends the live-check weekly and does not invalidate the fit.

Gray-zone audit. (1) PIT@CLE Week 4 trace: 237 plays, Pass EPA +11.91, Rush EPA −21.279, 3 TO −16.008 EPA; `analyze()` → INVALID; `qb_behavior` + `coaching_scheme` DATA-GAP [PAGE 1, ALREADY DONE]. This is a live-check failure signature and demonstrates that an INVALID engine on real game data triggers data-gap conditions, not silent continuation. (2) `homeSign` is wired on `nfl_age_conditioned_rest` (e28e4b80); tilt tests pass with it and fail without it; empty inputs → null; published pick remains static; the live slate passes `process.env` and keys have no writer—a separate problem, not this session [PAGE 1]. Constraint: “No stuffing homeSign through an env key. Unknown direction → homeSign: null, gate DISABLED” [PAGE 1, CONSTRAINTS]. (3) PR #1002 is mapped read-only with 16 conflict paths and 5 doctrine reversals; it stays unmerged, and PR #1012 must not be touched [PAGE 1, CONSTRAINTS]. (4) Doctrines 1/7 are done (refusal rules at 71e6fd9a2); weather priors plus public skill exist at c72a46c7f [PAGE 1].

Phase 4’s Wire 1 requires first reading `git show 71e6fd9a2 -- intelligence/trust/abstention.py` before extending `add_to_trace_row()` and `validate_abstention_in_trace`, with explicit prohibitions against overwrite or replacement [PAGE 3]. Phase 5 requires flipping all 47 registry entries from null to yes/partial/no, with each `no` carrying `_blocked_reason`, while preserving SURVEY provenance until regeneration from HEAD [PAGE 4]. Phase 7’s central rule: “A wired signal without a calibration row is not wired” [PAGE 4]. Refusal calibration must be historical: expected hit rate of non-refused picks versus base rate; at or below base rate is calibrated, above moves the threshold [PAGE 4]. “A refusal never validated against history is an intuition, not a refusal” [PAGE 4].

Phase 12 verifications are in-flight: Wire 8 OL provider (a704d0ca5) raises `DataGapError` on unpublished weeks; Wire 17 parquet pins (1fce7fb4c) require all 4 SHA-256 values filled; six doctrines remain owed; weather weights stay unset; skill exposure is public-surface only [PAGE 5, PHASE 12]. Phase 13 requires an HF hardware re-query and a `hermes-second-wave.md` documenting prior builds, marking UNKNOWN if the work exists only on a phone [PAGE 5, PHASE 13].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Held-out gate operator (Wire 5, [PAGE 2]):
\[
G_{\text{heldout}}(M) = 
\begin{cases}
1 & \text{if } \text{train\_years}(M) \cap \text{eval\_years}(M) = \varnothing \\
0 & \text{otherwise}
\end{cases}
\]
Units: boolean over year-set pairs. If \(G_{\text{heldout}} = 0\), the fit is contaminated and is discarded; there exists no averaging operator \(A(f_{\text{clean}}, f_{\text{contaminated}})\). Precedent: 13.5pp discard [PAGE 2]. Breakdown regime: non-empty intersection of train and eval years invalidates the walk-forward leg and blocks Phase 3.

Abstention veto (Phase 3, [PAGE 3]):
\[
A_{\text{W1-3}} = \frac{\text{abstention\_count}_{2026\,\text{W1--3}}}{\text{total\_slates}_{2026\,\text{W1--3}}}
\]
Units: dimensionless rate over 48 games. If \(A_{\text{W1-3}} > A_{\text{base}}\), status \(=\) BLOCKED-ON-PRECISION; no blending with pooled fit; no average; Law 4 [PAGE 3]. Swap of the served table occurs iff validation and live-check both clear. Breakdown regime: live-check abstention above base rate.

Registry constraint (Phase 5, [PAGE 4]):
\[
\forall s \in S,\ |S| = 47:\ \text{wired\_state}(s) \in \{\text{yes},\ \text{partial},\ \text{no}\},\quad \nexists s:\ \text{wired\_state}(s) = \text{null}
\]
If \(\text{wired\_state}(s) = \text{no}\), then \(\text{\_blocked\_reason}(s) \neq \varnothing\). SURVEY provenance (cc151ddd3) persists until file regeneration from HEAD. Breakdown regime: any null entry or missing `_blocked_reason`.

Calibration row schema (Phase 7, [PAGE 4]) for every signal wired this session:
\[
C_i = (\text{train\_years},\ \text{eval\_years},\ \text{metric},\ n,\ \text{live\_check}_{2026\,\text{W1--3}},\ \text{vintage\_SHA})
\]
Units: years (discrete), dimensionless metric, count \(n \in \mathbb{N}\), boolean live-check, SHA-256 digest. No batching to season’s end. Breakdown regime: wired signal lacking its calibration row at wire time is “a fixture wearing a producer’s coat” and is not wired [PAGE 4].

Refusal calibration (Phase 7, [PAGE 4]): given historical refusal frequency \(f_{\text{ref}}\), compute expected hit rate \(H_{\text{nonref}}\) of picks the engine would have made without refusing. If \(H_{\text{nonref}} \le H_{\text{base}}\), the refusal is calibrated; if \(H_{\text{nonref}} > H_{\text{base}}\), the threshold moves. Breakdown regime: unvalidated refusal threshold is intuition, not refusal.

Manifest enforcer (Wire 4, [PAGE 2]): for every committed data file \(f\), a sibling manifest \(m\) must exist with 10 required fields. Enforcement via pre-commit hook in `scripts/`; `.github/workflows/*.yml` is forbidden on this branch [PAGE 1, CONSTRAINTS]. Breakdown regime: 2-byte stub JSON or missing manifest.

Verbatim quotes: “Contaminated fits are discarded, never averaged” [PAGE 2]; “Do not blend with the pooled fit. Do not average. Law 4” [PAGE 3]; “A wired signal without a calibration row is not wired” [PAGE 4]; “A refusal never validated against history is an intuition, not a refusal” [PAGE 4]; “the frozen vintage gates the live-check leg only. It does NOT gate training or validation” [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The mission’s methodological genealogy draws on several distinct lineages. First, the nflverse play-by-play tradition: complete 2022–2025 PBP (weeks 1–22, 284–285 games) plus committed 2026 weeks 1–3 (48 games) [PAGE 1, ALREADY DONE]. Second, trace reconstruction from Kalshi, ESPN, and play-by-play sources for Wire 10, with an explicit prohibition on relabeling without rebuilding [PAGE 4, PHASE 9]. Third, conformal prediction intervals at `intelligence/discovery/t10-conformal/intervals.json`, consumed by Wire 2’s ENBPI trust score in \([0,1]\), which refuses to score when conformal is absent and returns UNCHECKED abstention rather than 0.5 [PAGE 4, PHASE 6]. Fourth, walk-forward time-series validation as the statistical backbone of Phase 3, distinct from pooled in-season fitting. Fifth, the refusal/abstention doctrine, with honest-refusal already committed at 71e6fd9a2 [PAGE 1, ALREADY DONE]. Sixth, the GSE-MASTER-INVENTORY audit lineage: coverage ledger, field report, artifact extraction, dual sweeps, 44-finding audit, and wire reconciliation [PAGE 1, REFERENCE].

Named actors and directives: Garrett’s directive authorizes the walk-forward tau rebuild today without waiting for the season [PAGE 3, PHASE 3]. Hermes previously recorded refusal rules at 71e6fd9a2 and wired `homeSign` on `nfl_age_conditioned_rest` (e28e4b80) [PAGE 1, ALREADY DONE]. PR #1002 contains 16 conflict paths and 5 doctrine reversals and must remain unmerged [PAGE 1, ALREADY DONE].

Multi-week traps explicitly guarded against: (1) pooling in-season 2026 weeks in `tau_hat.csv` is a walk-forward violation, stamped until walk-forward equals served [PAGE 1, PHASE 1]; (2) blending contaminated fits with clean ones is forbidden forever [PAGE 1, CONSTRAINTS]; (3) relabeling fixture traces without rebuilding from source is prohibited [PAGE 1, CONSTRAINTS]; (4) treating ERA5 reanalysis as freeze-time is invalid—freeze-time is what the model sees at prediction time [PAGE 1, CONSTRAINTS]; (5) waiting until season’s end to calibrate is rejected; calibration rows arrive at wire time [PAGE 4, PHASE 7]; (6) publishing GSE skill is forbidden [PAGE 1, CONSTRAINTS]; (7) assuming absence on Machine A establishes absence on Machine B is forbidden by the two-host rule [PAGE 5, PHASE 9].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: under deadline and session pressure, a coding agent operating as Hermes is likely to regress into several mission-specific failure modes. Overwriting `intelligence/trust/abstention.py` instead of extending it, contrary to the explicit “Do not overwrite. Do not replace” order [PAGE 3, PHASE 4]. Averaging a contaminated fit with a clean fit to “salvage” the walk-forward number, directly violating Law 4 and the 13.5pp discard precedent [PAGE 3, PHASE 3]. Stuffing `homeSign` through an environment key because the published pick is static, violating the env-key prohibition [PAGE 1, CONSTRAINTS]. Editing `AGENTS.md` to index doctrines, contrary to the `docs/DOCTRINES.md` routing rule [PAGE 1, CONSTRAINTS]. Adding `.github/workflows/*.yml` for CI, violating the scripts-only constraint [PAGE 1, CONSTRAINTS]. Declaring a phase complete without running `validate_abstention_in_trace` or confirming zero registry nulls. Telling Motif “complete,” which the mission forbids: “Report findings. Motif decides when it is complete” [PAGE 1, CONSTRAINTS].

Counter-trap: the correct recursive stance is to treat each constraint as a trap door that has already been sprung in prior sessions. Extend, never overwrite (Wire 1, Wire 9). Zero nulls in the registry; each `no` carries `_blocked_reason` [PAGE 4, PHASE 5]. Pre-commit hooks, never workflow files [PAGE 2, PHASE 2]. Doctrines indexed through `docs/DOCTRINES.md`, never `AGENTS.md` [PAGE 5, PHASE 8]. Report findings, never completion [PAGE 1, CONSTRAINTS]. Treat SHA freshness as a clock: “Every SHA in this mission rots within the hour; your HEAD is the truth” [PAGE 1, STEP 0], so Step 0 output must be captured live and cannot be reconstructed from memory.

Clock: the temporal structure of the mission has three layers. (1) Immediate: SHAs rot within the hour; Step 0 must be measured on the host, not copied [PAGE 1]. (2) Session: the tau stamp remains on `tau_hat.csv` until the walk-forward number equals the served number [PAGE 1]. (3) Weekly: the W4+ refresh extends the live-check weekly without invalidating the fit [PAGE 3]. The clock does not pause for incomplete training; training and validation proceed offline on committed data while the live-check leg waits for the 2026 vintage freeze [PAGE 1, PHASE 0].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, provider/biomechanical, and weather veto proof.

Physical layer / two-host rule: Machine A (Beexly Windows, grok-4.7) and Machine B (motif coordinates) maintain different workspaces. Wire 12 requires `intelligence/host_ledger.json` plus `doctrine/two-host-rule.md`, with one entry per host per search recording hostname, path, date, tree SHA, and scope. A search on one host never establishes absence on the other [PAGE 5, PHASE 9]. Veto: any absence claim rooted in a single-host search is invalid.

Provider/biomechanical layer: the OL provider (a704d0ca5) produced a PIT@CLE trace showing offensive_line CLEAR, and `get_ol_state` raises `DataGapError` on unpublished weeks; `analyze()` calls it so T1 end-to-end is no longer INVALID on OL [PAGE 1, ALREADY DONE; PAGE 5, PHASE 12]. Wire 16 adds `intelligence/providers/injury_gate.py` with `require_injury_published(week) → DataGapError` before Friday 18:00 ET, motivated by an empty Week-5 pull that cost 5 credits [PAGE 4, PHASE 9]. Veto: unpublished injury or OL weeks raise `DataGapError` before the pipeline can emit a pick on missing provider data.

Weather/information layer: weather priors and public skill exist at c72a46c7f, but weather weights remain unset per the total-signal backlog [PAGE 5, PHASE 12]. ERA5 is reanalysis, not freeze-time; freeze-time is strictly what the model sees at prediction time [PAGE 1, CONSTRAINTS]. Veto: using ERA5 as a freeze-time proxy invalidates the prediction conditioning set.

Wire-layer vetoes: Wire 4’s manifest enforcer vetoes any committed data file lacking a sibling manifest with 10 required fields, implemented as a pre-commit hook rather than a workflow [PAGE 2]. Wire 5’s held-out checker vetoes contaminated train/eval intersections [PAGE 2]. Wire 2’s ENBPI returns UNCHECKED abstention, not 0.5, when conformal intervals are absent [PAGE 4]. These vetoes compose: no manifest, no commit; no held-out separation, no validation; no conformal, no trust score. No betting lines, spreads, totals, moneylines, or odds are referenced in this veto architecture.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Scenario 1 — Held-out intersection violation. Counterfactual: the held-out checker evaluates a candidate split where `train_years ∩ eval_years ≠ ∅` (for example, 2025 appears in both training and evaluation). Veto: \(G_{\text{heldout}} = 0\); the contaminated fit is discarded and never averaged, per the 13.5pp precedent [PAGE 2]. Prediction: Phase 3 does not advance to live-check; the walk-forward rebuild halts; no served-table swap is considered; the session reports held-out gate failure rather than forcing a fit.

Scenario 2 — Live-check abstention breach. Counterfactual: the tau walk-forward fit is trained on 2022–2024 and validated on 2025, but on 2026 W1–3 (48 games) the abstention rate exceeds the base rate. Veto: fit not ready; status BLOCKED-ON-PRECISION; explicit prohibition on blending with the pooled fit and on averaging [PAGE 3]. Prediction: the tau stamp remains on `tau_hat.csv` with the fixed text (“point fit — not pre-kickoff…”) [PAGE 1]; the served table is not swapped tonight; a follow-up fit is required before any live-check activation.

Scenario 3 — Registry/calibration vacuum. Counterfactual: after Phases 2, 4, and 5, the registry at `intelligence/signals/registry.json` still contains `wired_state: null` entries, or a signal is marked wired without a calibration row at wire time. Veto: zero nulls are permitted [PAGE 4]; each `no` requires `_blocked_reason` [PAGE 4]; every wired signal requires \(C_i = (\text{train}|\text{eval}|\text{metric}|n|\text{W1--3 live-check}|\text{vintage SHA})\) [PAGE 4]. Prediction: Phase 5 and Phase 7 verification fail; the affected signals are classified as not wired (“a fixture wearing a producer’s coat”) [PAGE 4]; the session cannot report closure until all 47 entries are resolved and calibration rows are attached.
</RLVR_COUNTERFACTUAL_VETOES>