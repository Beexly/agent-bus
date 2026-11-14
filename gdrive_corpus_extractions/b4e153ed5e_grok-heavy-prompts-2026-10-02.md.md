---
source: "grok-heavy-prompts-2026-10-02.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5294
---

<NATIVE_REASONING>
The user is asking me to run as the GSE + GSI Frontier Reasoning Foundry and process a document called "Grok Heavy Prompts — GSE Document Ingestion" (Prompts 1-4 v2). They want me to act as if I'm executing these prompts on a corpus at /CorpusRoot/Sports-deploy-fix/grok-heavy-prompts-2026-10-02.md with PAGES: 9.

However, I need to be careful here. The user has provided a SOURCE TEXT that is itself a set of instructions for an AI agent (Grok Heavy) to ingest a research corpus. The actual corpus files (3,728 + 1,374 files) are NOT provided to me. I only have the prompt document itself (9 pages, but here it's all in one text block).

Key constraints from my system prompt:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
- THINK_TRACE (>=400 words)
- SOURCE_OPERATORS_AND_EQUATIONS
- RETROCAUSAL_GENEALOGY
- RECURSIVE_THEORY_OF_MIND
- CROSS_LAYER_VETO_ADJUDICATION
- RLVR_COUNTERFACTUAL_VETOES

Wait, the user says "DRIVE SOURCE: /CorpusRoot/Sports-deploy-fix/grok-heavy-prompts-2026-10-02.md PAGES: 9". So they are telling me to treat this text as the source. But I cannot actually execute the Grok Heavy prompts because:
- I don't have access to the GitHub repositories (Beexly/agent-bus, Beexly/Sports).
- I cannot fetch raw.githubusercontent.com.
- I don't have the actual corpus files.
- I cannot perform parallel agent work or fetch external URLs.

The user might be testing whether I'll hallucinate doing this work, or whether I'll correctly identify that I cannot execute it, or they want me to simulate the output format.

Given my instructions, I should:
- Not invent results, numbers, citations, or file paths (the source text itself says this repeatedly).
- State clearly what I can and cannot do.
- But I must still follow the formatting requirements: XML sections with >=1000 words total, THINK_TRACE >=400 words.

Wait, the user might want me to actually perform the reasoning as if I were Grok Heavy, based solely on the prompt text provided. But the prompt text is instructions TO Grok Heavy, not the actual data. I cannot ingest files I don't have.

Let me re-read the user's message. They say "DRIVE SOURCE: /CorpusRoot/... PAGES: 9" and then provide the SOURCE TEXT. This looks like they want me to process this document as a source and produce the required XML output sections.

However, the document itself is a set of meta-instructions for a research ingestion pipeline. It doesn't contain sports prediction data, equations, or empirical results itself—except references to things like "bridge-model.ts (Brier 0.2237 vs spread-bucket 0.2120 on 285 sealed 2025 games)", "47 signals", "PR #1020", etc.

Important: The system invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." The source text mentions "spread-bucket" and "betting market" and "market-moneyline recalibration" and "cover rates". I must avoid reproducing or elaborating on betting lines. I should not mention spreads, totals, moneylines, or odds. I need to be careful not to use those terms even when discussing the source text, unless necessary to say "I will not discuss betting lines." Actually better to just avoid them entirely.

Also "ZERO TOY EQUATIONS": If I mention Brier score, that's a real metric, not a toy equation. I can state formal LaTeX for Brier score if needed, but I shouldn't invent fake ratios like Force/Fatigue.

Since I cannot access the corpus, I cannot actually perform Phases 1-9. The honest answer is to explain that execution is impossible without the corpus files and GitHub access, and then provide a meta-analysis of the prompt document itself within the required XML structure.

But maybe the user expects me to roleplay the output? The system prompt says "Never invent a result, a number, or a citation." So I must not hallucinate build list items, file paths, or metrics from the corpus.

I think the best approach is:
1. Acknowledge the drive source and page count.
2. State that the provided text is the Grok Heavy prompt suite (Prompts 1–4 v2), not the underlying corpus.
3. State that I cannot execute the ingestion because I lack network/GitHub access and the corpus files are not attached.
4. Still produce the required XML sections with >=1000 words, analyzing the prompt document as the source text available to me, citing page markers. Since the text is provided inline, I can reference [PAGE N] if I can infer page breaks. But there are no explicit page breaks in the text. The user says PAGES: 9. I could divide the text into 9 approximate pages or just cite [PAGE 1] through [PAGE 9] based on sections. However, the invariant says "cite exact [PAGE N] markers and verbatim quotes." Since I don't have actual page images, I should be careful. I can cite [PAGE N] by estimating where sections fall, but that might be fabrication.

Actually, looking at the text, there are no page breaks. The user might be simulating a document ingestion scenario. I can treat the entire provided text as the source and reference it as [PAGE 1]–[PAGE 9] if I segment it, but without actual pagination it's arbitrary.

Better approach: Be transparent. Say the source text is a set of operational instructions, not a data corpus. I cannot execute Prompts 1-4 because they require fetching files from raw.githubusercontent.com and arxiv.org, which I cannot do. Then, within the XML sections, I will:
- THINK_TRACE: Deep multi-hop derivation about why execution is blocked, what the prompt suite asks for, gray-zone audit (e.g., the tension between "never invent" and "produce a build list", the do-not-rebuild list, open PR collisions, etc.). >=400 words.
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX for Brier score (since it's mentioned), calibration, probability units, assumptions, breakdown regimes. Cite verbatim quotes from the source text with approximate page markers or just say [PAGE N] where N corresponds to the section in the provided text. Since I don't know exact pages, I'll note that pagination is not provided in the text block and cite section headers instead? But the invariant demands [PAGE N] markers. I could assign pages based on the 9-page estimate: e.g., Prompt 1 spans pages 1-3, Prompt 2 pages 3-4, Prompt 3 pages 4-6, Prompt 4 v1/v2 pages 6-9. This is an assumption I must state clearly.
- RETROCAUSAL_GENEALOGY: Historical lineage of the prompts (Prompt 1 -> 2 -> 3 -> 4 -> 4 v1 -> 4 v2), multi-week traps (rate limiting, shadow vs publish, open PRs).
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression (what happens when builder gets a kill list), counter-trap (don't protect first pass), clock (run order tonight).
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof — well, this is about research pipeline, not physical sports. I can adapt: veto layers are PR #1018/1019/860/1016, do-not-rebuild list, license restrictions, shadow-only rule. Weather isn't in text but injuries/weather are signals in GSE. I'll discuss veto layers.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. E.g., (1) if builder tries to rebuild bridge-model.ts -> veto, prediction: Brier 0.2237 vs 0.2120 means worse; (2) if builder touches open PR #1019 -> veto, prediction: tsc exit 2 blocks merge; (3) if builder publishes uncalibrated signal -> veto, prediction: shadow rule violation.

Word count: Need >=1000 words across sections. THINK_TRACE alone >=400.

I must avoid betting lines. I will not use "spread", "total", "moneyline", "odds". The source text uses "spread-bucket" and "betting market" and "market-moneyline". I should avoid quoting those exact phrases or paraphrase without using banned terms? The invariant says "Never mention spreads, totals, moneylines, or odds." So I cannot even quote them? To be safe, I will not include those words. If I need to reference the Brier comparison, I'll say "spread-bucket model" — wait, that contains "spread". I should avoid it. I can refer to it as "the bucket-calibrated baseline" or just avoid the comparison details. Actually, I can say "bridge-model.ts versus the existing baseline on 285 sealed 2025 games" without naming the baseline type. But the source text says "spread-bucket 0.2120". I must not write "spread-bucket". I'll paraphrase as "the current production bucket model" and avoid the banned word.

Also "cover rates" in Phase 5 — avoid "cover". Use "win-probability calibration" or similar.

Let's plan the XML output.

Structure:
```
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

I need to ensure total words >= 1000. THINK_TRACE >= 400.

Let's draft content.

THINK_TRACE (>=400 words):
- State that the drive source is the Grok Heavy Prompts document (9 pages estimated), not the corpus itself.
- The corpus (3,728 + 1,374 files) is not attached; no network access to raw.githubusercontent.com or arxiv.org.
- Therefore, Phases 1-9 cannot be executed as specified. No file counts, no extractions, no build list can be truthfully produced.
- Gray-zone audit: The prompt suite demands "never invent a result, number, or citation" but also demands a ranked build list. These are mutually exclusive without source access. Any build list would violate the invariant.
- The do-not-rebuild list (bridge-model.ts, 1704.00197, etc.) constrains output even in a simulated run.
- Open PR state (#1018, #1019, #860, #1016) creates collision constraints.
- Multi-hop derivation: Prompt 4 v2 supersedes all; run order is 4 v2 only. Prior passes are complete. The builder handoff depends on coverage ledger, which requires reading 4,571+ files. I have read 1 file (the prompt doc).
- Exact singularity: If repo file count < ~5,000 under research/, stop. I cannot verify count, so I must stop/report incomplete upload.
- Gray zones: "shadow vs publish-ready" distinction cannot be adjudicated without calibration data. "Props unwired" is a frontier but no props data is present.

SOURCE_OPERATORS_AND_EQUATIONS:
- Formal LaTeX: Brier score definition: BS = (1/N) Σ (f_i - o_i)^2, where f_i ∈ [0,1] is forecast probability, o_i ∈ {0,1} is binary outcome, N is sample size. Units: probability squared (dimensionless). Lower is better. Breakdown: N=0 undefined; o_i not binary invalidates metric; f_i outside [0,1] invalid probability axiom.
- Calibration: reliability diagram bins, expected calibration error ECE = Σ |B_k/N_k - avg(f in bin k)| * (N_k/N). Units: probability. Breakdown: empty bins.
- Mention the source text states Brier 0.2237 vs baseline 0.2120 on 285 sealed 2025 games. But don't mention "spread-bucket". I can say "the documented production baseline" and cite [PAGE 1] or wherever Prompt 1 says it. Looking at source text, Prompt 1 CURRENT REPO STATE says "bridge-model.ts (Brier 0.2237 vs spread-bucket 0.2120 on 285 sealed 2025 games)". I need to avoid "spread-bucket". I'll write "bridge-model.ts (Brier 0.2237 versus the production baseline at 0.2120 on 285 sealed 2025 games)". That avoids the banned word.
- Page citations: Since I don't have real pages, I'll state an assumed pagination scheme: [PAGE 1] = Prompt 1 header through PR list; [PAGE 2] = WHAT GSE IS through AGENT ROLES; [PAGE 3] = PHASE 1 through PHASE 5; [PAGE 4] = RULES through PROMPT 2; [PAGE 5] = PROMPT 2 through PROMPT 3; [PAGE 6] = PROMPT 3 PHASE 1 through PHASE 2; [PAGE 7] = PROMPT 3 PHASE 3 through PROMPT 4; [PAGE 8] = PROMPT 4 v1 through PROMPT 4 v2 header; [PAGE 9] = PROMPT 4 v2 body through end. This is a reasonable assumption given 9 pages and ~sections. I must state this assumption explicitly so it's not presented as fact.
- Verbatim quotes: "Run in order. Prompt 1 is the money — one Heavy run, maximum yield." etc.

RETROCAUSAL_GENEALOGY:
- Lineage: Prompt 1 (Full ingestion) -> Prompt 2 (Deep dive, optional) -> Prompt 3 (Promote-or-kill) -> Prompt 4 (Floodgates) -> Prompt 4 v1 -> Prompt 4 v2 (ABYSSAL, supersedes v1).
- Each pass narrows scope: 5,102 files -> maps only -> unread maps -> full corpus + open arXiv -> full corpus + citation chaining + meta-analysis + adversarial replication.
- Multi-week traps: rate limiting by GitHub API (forced raw.githubusercontent.com), shadow-only limbo (Prompt 3: first pass had 7 shadow items because source files never opened), open PR collisions (#1018 OL/GSI blocks QB-identity work), do-not-rebuild list calcifies prior kills (soft-Elo, coverage transformer, CMP-SAS, Ising/KellyBoost).
- The "run order tonight: Prompt 4 v2 → hand build list to builder" creates a hard deadline trap: if coverage <100%, must say what remains.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: When faced with incomplete data, agents tend to hallucinate build lists to satisfy "deliverable" pressure. The prompt explicitly says "A killed claim is a correct output. Do not protect the first pass's list." This is an anti-regression instruction.
- Counter-trap: The builder expects promoted items; if fewer than 3 promote, must say so and name second-best use of builder's night. This forces honesty over compliance.
- Clock: Run order is strict. Prompt 4 v2 must run before builder handoff. No re-running 1-3. Time-test: track claim history 2020→2026 (from prompt text).

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Not applicable (no biomechanics/weather data in prompt doc), but GSE signals include injuries, weather, rest. Since no data, veto all physical-signal builds.
- Biomechanical layer: No player-level biomechanics in corpus text. Veto.
- Weather layer: No weather data. Veto.
- Pipeline vetoes: Open PRs #1018, #1019, #860, #1016 own their lanes; nothing colliding gets recommended. Do-not-rebuild list: bridge-model.ts, 1704.00197, market recalibration, team-level pressure-to-sack, per-QB uncertainty bands. Restrictive licenses = learn method only.
- Proof: Since corpus unread, every proposed build lacks source file path, violating "Never invent a file path." Therefore all builds are vetoed by default.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Builder attempts to rebuild bridge-model.ts. Veto cause: explicitly on do-not-rebuild list; documented Brier 0.2237 vs baseline 0.2120 on 285 sealed 2025 games indicates inferior calibration. Prediction: Any rebuild would regress Brier relative to baseline and violate frozen model policy. Verifiable: check git blame/merged PR #1020.
- Scenario 2: Builder attempts to merge or modify code in open PR #1019 (worker-pick-generation, tsc exit 2). Veto cause: collision with open PR; test failed. Prediction: Build pipeline breaks at TypeScript compile; no measurable pick generation until tsc resolved. Verifiable: PR #1019 status.
- Scenario 3: Builder publishes an uncalibrated signal as publish-ready. Veto cause: GSE rule "Anything uncalibrated runs in shadow, never published." Prediction: Calibration failure on held-out data; shadow deployment required until held-out metric passes bar. Verifiable: shadow vs publish rule in Prompt 1 WHAT GSE IS.
- Maybe a 4th? User asked for 3. I'll do 3.

Now word count. I need to write extensively.

Let's estimate words. THINK_TRACE needs >=400. I'll aim for ~500 there. Other sections ~150-200 each. Total ~1200-1400. Good.

I must not mention banned terms. I'll scan for "spread", "total", "moneyline", "odds", "cover". The source text has them; I will not repeat them.

Also, the invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since pages are not actually provided with markers, I'll adopt the assumed pagination and state it as an assumption. That is honest.

Let's write.

I need to be careful with LaTeX. Use \( ... \) or \[ ... \]. The prompt says formal LaTeX equations.

Brier score:
\[
\operatorname{BS} = \frac{1}{N}\sum_{i=1}^{N} (f_i - o_i)^2
\]
where \(f_i \in [0,1]\) is the forecast win probability, \(o_i \in \{0,1\}\) is the realized binary outcome, and \(N\) is the number of sealed games. Units: probability-squared (dimensionless). Singularity: \(N=0\) makes BS undefined; non-binary \(o_i\) or \(f_i \notin [0,1]\) violates the probability axioms and invalidates the metric.

ECE:
\[
\operatorname{ECE} = \sum_{k=1}^{K} \frac{n_k}{N} \left| \bar{o}_k - \bar{f}_k \right|
\]
where bin \(k\) contains \(n_k\) forecasts, \(\bar{f}_k\) is mean forecast in bin, \(\bar{o}_k\) is mean outcome. Units: probability. Breakdown: empty bins \(n_k=0\) require smoothing or exclusion.

I'll cite [PAGE 1] for the Brier mention in Prompt 1. Actually the Brier numbers are in Prompt 1 CURRENT REPO STATE. I'll put that on [PAGE 1] under my assumed scheme.

Now let's draft full response.

I'll start with a brief sentence outside XML? The user wants the exact XML sections. I should probably just output the XML sections. Maybe a short preamble is okay but better to go straight to sections to satisfy format.

Let's write THINK_TRACE first.

THINK_TRACE content:
- Drive source is the Grok Heavy Prompts document (9 pp.), not the corpus.
- No network/GitHub access. Cannot fetch raw.githubusercontent.com or arxiv.org.
- Corpus file count unverified. Prompt 1 Rule: if branch has fewer than ~5,000 files under research/, say so and stop. I cannot verify count, so I must report incomplete upload and halt extraction.
- The prompt suite is self-referential: it instructs Grok Heavy to read maps, briefs, fulltext, waves, scored batches, then cite-chain, meta-analyze, and adversarially replicate. Each phase assumes physical possession of files I do not have.
- Gray-zone audit: The instruction "Never invent a result, a number, or a citation" conflicts with any attempt to produce a ranked build list from this prompt alone. Producing one would be fabrication. Therefore the only truthful output is a veto of all build items pending corpus access.
- Multi-hop derivation: Prompt 4 v2 requires coverage ledger (read/unread per directory). I have read exactly 1 file (this prompt). Unread: 3,457 briefs, 1,115 fulltext, waves, deep, handoff, scored batches, intake, plus arXiv exclusion map. Coverage: 0.02% of corpus. Breakdown regime: cannot proceed to Phase 2 citation chaining because no HIGH-rated items exist yet.
- Open PR state creates hard constraints: #1018 (OL/GSI, QB-identity waits), #1019 (tsc exit 2), #860 (test failed, C5 only), #1016 (merged). Nothing colliding may be recommended.
- Do-not-rebuild list calcifies: bridge-model.ts, 1704.00197, market recalibration, team-level pressure-to-sack, per-QB uncertainty bands, plus settled kills (soft-Elo, coverage transformer, CMP-SAS, Ising/KellyBoost).

That's >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- Include Brier and ECE equations.
- Mention verbatim quotes from source with [PAGE N] markers under assumed pagination.
- Assumed pagination note.
- Units and breakdown regimes.

RETROCAUSAL_GENEALOGY:
- Chain: Prompt 1 -> 2 -> 3 -> 4 -> 4 v1 -> 4 v2.
- Traps: rate limit, shadow limbo, open PR collision, do-not-rebuild calcification.

RECURSIVE_THEORY_OF_MIND:
- Habit regression: hallucinating build list.
- Counter-trap: kill with cause, fewer than 3 promote -> say so.
- Clock: run 4 v2 tonight, then builder handoff.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical/biomechanical/weather: no data -> veto all.
- Pipeline: open PRs, do-not-rebuild, licenses.
- Proof: no file paths -> no builds.

RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios with predictions.

Make sure no banned words. Avoid "spread", "total", "moneyline", "odds", "cover".

Let's write carefully.

Word count check: I'll write generously.

I will not use the banned words anywhere.

Let's compose.

Note: The user said "PAGES: 9". I'll reference that.

I should not say "betting market" because "betting" might be okay but "market" with betting lines... The invariant specifically says spreads, totals, moneylines, odds. "Betting market" isn't explicitly banned but is adjacent. I'll avoid it to be safe. Use "market calibration" or just "calibration close" if needed, but better avoid.

Alright, writing now.
</NATIVE_REASONING>

<THINK_TRACE>
The drive source is the Grok Heavy Prompts document (reported as 9 pages), not the GSE research corpus itself. The corpus—approximately 3,728 corpus-intelligence files plus 1,374 arXiv-sweep files under Beexly/agent-bus@main—is not attached to this conversation, and I have no network or GitHub API access to fetch files via raw.githubusercontent.com or arxiv.org. Consequently, Phases 1 through 9 of Prompt 4 v2 cannot be executed as specified. No file-by-file extraction, no coverage ledger, no citation chain, and no ranked build list can be truthfully produced from the prompt text alone.

Gray-zone audit: The prompt suite contains an explicit, self-contradictory demand under incomplete access. It instructs the agent to "Never invent a result, a number, or a citation," while simultaneously demanding a "RANKED BUILD LIST" with implementation sketches, tests, and shadow/publish rulings. These two requirements are mutually exclusive without source-file possession. Any build list generated now would violate the zero-invention invariant. The only defensible output is a total veto of all build items pending corpus access, with an honest statement that the upload is incomplete.

Multi-hop derivation of the blockage: Prompt 1 contains a hard stop rule: "If the branch has fewer than ~5,000 files under research/, say so and stop — the upload is incomplete." I cannot verify the file count because I cannot list the repository. Prompt 4 v2 requires a COVERAGE LEDGER with read/unread counts per directory before any build list may be delivered. I have read exactly one file (this prompt document). The unread set includes 3,457 briefs, 1,115 arXiv fulltext extractions, waves, deep analyses, handoff documents, scored batches, intake queues, and the existing-research-map exclusion set. Coverage is therefore approximately 0.02 percent of the corpus, which places the run in a breakdown regime: Phase 2 citation chaining cannot begin because no HIGH-rated items have been extracted, and Phase 5 meta-analysis has no pooled effects to compute.

Open-PR state imposes additional hard constraints that further narrow the permissible output space. Prompt 4 v2 states the Sports repo state as: PR #1020 merged; #1018 open (OL/GSI, QB-identity work waits for it); #1019 open; #860 open; #1016 merged. Nothing colliding with an open PR may be recommended. The do-not-rebuild list is also calcified across prompts: bridge-model.ts, paper 1704.00197 as anything other than an in-game logistic, market recalibration, team-level pressure-to-sack, per-QB uncertainty bands, and settled kills including soft-Elo, coverage transformer, CMP-SAS, and Ising/KellyBoost. These are not negotiable vetoes; they are structural constraints on any future builder handoff.

The run order is also a temporal trap: "Run order for tonight: Prompt 4 v2 → hand its build list to the builder. Prompts 1–3 and Prompt 4 v1 are complete/superseded; do not re-run them." Because Prompt 4 v2 cannot be completed without the corpus, the builder handoff cannot occur tonight under honest conditions. A crisis habit regression would be to hallucinate a plausible build list to satisfy the deliverable shape; the prompt explicitly forecloses that by stating "A killed claim is a correct output. Do not protect the first pass's list." I therefore treat all prior-pass shadow items—conformal publication gate, per-QB EPA/dropback, QB pressure-to-sack residual, trust-target props stack, injury/QB-change provenance, within-player scale-fit, moderate-favorite leaf audit—as unextracted and unresolved, not as promoted candidates.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Assumed pagination for the 9-page drive source (no physical page breaks were supplied in the text block; this scheme is an explicit assumption, not an observed fact): [PAGE 1] contains Prompt 1 header through the CURRENT REPO STATE list; [PAGE 2] contains WHAT GSE IS through AGENT ROLES; [PAGE 3] contains PHASE 1 through PHASE 5 and RULES; [PAGE 4] contains PROMPT 2 through PROMPT 3 header; [PAGE 5] contains PROMPT 3 PHASE 1 through PHASE 2; [PAGE 6] contains PROMPT 3 PHASE 3 through PROMPT 4 header; [PAGE 7] contains PROMPT 4 v1 body; [PAGE 8] contains PROMPT 4 v2 header through PHASE 2; [PAGE 9] contains PHASE 3 through end.

Formal operators available in the source text:

Brier score for calibrated win probabilities, as implicitly referenced in Prompt 1 CURRENT REPO STATE [PAGE 1]:
\[
\operatorname{BS} = \frac{1}{N}\sum_{i=1}^{N} (f_i - o_i)^2
\]
where \(f_i \in [0,1]\) is the forecast probability, \(o_i \in \{0,1\}\) is the realized binary outcome, and \(N\) is the number of sealed games. Units: probability-squared (dimensionless). Lower is better. Singularity/breakdown: \(N=0\) makes BS undefined; \(o_i \notin \{0,1\}\) or \(f_i \notin [0,1]\) violates probability axioms and invalidates the metric. The source text documents bridge-model.ts at Brier 0.2237 versus the production baseline at 0.2120 on 285 sealed 2025 games; per the do-not-rebuild list, this model shall not be rebuilt or re-litigated.

Expected calibration error across \(K\) probability bins:
\[
\operatorname{ECE} = \sum_{k=1}^{K} \frac{n_k}{N} \left| \bar{o}_k - \bar{f}_k \right|
\]
where bin \(k\) holds \(n_k\) forecasts, \(\bar{f}_k\) is the mean forecast in the bin, and \(\bar{o}_k\) is the mean realized outcome in the bin. Units: probability. Breakdown: empty bins (\(n_k=0\)) require exclusion or smoothing; an uncalibrated model must run in shadow only per the GSE pipeline rule quoted on [PAGE 2]: "Anything uncalibrated runs in shadow, never published."

Verbatim quote from Prompt 1 RULES [PAGE 3]: "Never invent a result, a number, or a citation. If a document doesn't state it, say so." Verbatim quote from Prompt 4 v2 RULES [PAGE 9]: "Never invent a result, number, citation, or file path. Unread = unread."

No other equations, estimators, or metrics appear in the drive source text. The document references a 47-signal registry with props unwired, a MODEL_VERSION freeze, and a signal registry where 46 of 47 signals are "no / 1 partial" with T1 partial and analyze() returning INVALID, but it provides no mathematical form for those signals. All proposed builds in SOURCE_OPERATORS_AND_EQUATIONS are therefore limited to the two formal probability metrics above; every other claimed operator in the prompt suite is an instruction, not an extracted result.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of the drive source moves backward through successive narrowing of scope. Prompt 1 (Full ingestion) establishes the mission: ingest every document in corpus-intelligence (~3,728 files) and arXiv-sweep (~1,374 files) and produce an actionable build list. Prompt 2 (Deep dive) was optional and generic; Prompt 3 (Promote-or-kill) then superseded Prompt 2 for the immediate cycle, forcing a second pass over only the unread slice maps and the seven shadow items from an earlier build list. Prompt 4 (Floodgates) expanded scope again to the full corpus plus an open arXiv scrape. Prompt 4 v1 was superseded by Prompt 4 v2 (ABYSSAL), which is the current governing run.

Each pass adds a deeper verification layer. Prompt 1 required file-tree mapping and duplicate detection (known duplicates: arXiv 1704.00197 appears twice; 2603.09896 appears three times). Prompt 3 added the rule that all fetches must use raw.githubusercontent.com because api.github.com is rate-limited, and it introduced the concept of shadow limbo: the first pass build list had seven items all marked shadow because source files were never opened. Prompt 4 v2 adds citation chaining across two hops, reviewer-grade deep reads of the top 50 items, meta-analysis of pooled effects (home-field edge, pressure-to-sack conversion, EPA/dropback stability), adversarial replication, and a misattribution log.

Multi-week traps embedded in the genealogy: (1) GitHub API rate limiting forces raw file fetches, creating a single point of failure if raw.githubusercontent.com is unreachable; (2) shadow limbo can persist indefinitely if source files are never opened, as happened with Prompt 3's seven items; (3) open PR collisions create hard lanes that cannot be crossed—QB-identity work waits on #1018, #1019 is blocked by tsc exit 2, #860 is the only C5-tagged PR with no C6 equivalent, and #1016 is merged; (4) the do-not-rebuild list calcifies prior kills across time, meaning even if new evidence appears, soft-Elo, coverage transformer, CMP-SAS, and Ising/KellyBoost stay dead unless genuinely new evidence is found and explicitly documented. The run order instruction ("Prompt 4 v2 → hand its build list to the builder") creates a hard deadline trap: if coverage cannot reach 100 percent, the agent must say exactly what remains unread and what the single most valuable next read is, rather than delivering a partial list.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: When an agent with a build-list mandate lacks source data, the default failure mode is to fabricate a plausible ranked list, invent file paths, and assign HIGH/MEDIUM relevance to satisfy the user's expectation of a deliverable. The prompt suite contains explicit counter-instructions against this regression: "Never invent a result, a number, or a citation," "Unread = unread," and "A killed claim is a correct output. Do not protect the first pass's list." The correct recursive stance is to model the builder as an agent who will execute exactly what is handed to them; if I hand them a hallucinated build list, they will waste engineering time on unimplementable items and violate open-PR lanes.

Counter-trap: Prompt 3 Phase 3 forces a branch point. If fewer than three items promote, I must say so explicitly and name the second-best use of the builder's night. This prevents the builder from being handed an empty or padded list. In the current state, with zero corpus files read, the number of promotable items is provably zero; the second-best use of the builder's night is therefore to obtain corpus access and run the map phase, not to begin implementation.

Clock layer: The run order is strict and non-reentrant. Prompts 1–3 and Prompt 4 v1 are complete or superseded and must not be re-run. Prompt 4 v2 must run first, and its output goes to the builder tonight. Time-test from Prompt 4 v2 Phase 3 requires tracking claim history from 2020 to 2026, but no claim history can be audited without reading the corpus. The recursive theory of mind therefore terminates in a veto: I cannot simulate the builder's expected input because the input depends on file reads I cannot perform, and simulating it would produce the exact counter-trap the prompt forbids.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: No biomechanical, player-tracking, or weather data appears in the drive source. GSE signals include injuries, weather, and rest per the Prompt 1 description [PAGE 2], but no measurements are present. All physical-layer builds are vetoed for absence of source data.

Biomechanical layer: No player-level biomechanics, pressure-to-sack residuals at the individual level, or per-QB uncertainty bands are extractable from the prompt text. The do-not-rebuild list explicitly bars team-level pressure-to-sack and per-QB uncertainty bands. Veto stands.

Weather layer: No weather variables, stadium conditions, or rest differentials are quantified in the source text. Veto stands.

Pipeline and policy vetoes: (1) Open PRs #1018, #1019, #860, and #1016 own their lanes; nothing colliding with them may be recommended. #1018 is open for OL/GSI with QB-identity work blocked; #1019 has a TypeScript compile failure (tsc exit 2) in worker-pick-generation; #860 is the only C5-tagged PR and its test failed. (2) The do-not-rebuild list bars bridge-model.ts, paper 1704.00197 as anything other than an in-game logistic, market recalibration, team-level pressure-to-sack, and per-QB uncertainty bands. (3) Restrictive licenses mean learn-the-method only, not copy-the-code; no licenses are visible in the drive source, so no code can be copied. (4) GSE pipeline rule [PAGE 2]: uncalibrated signals run in shadow only.

Proof of total veto: Every proposed build in Prompt 4 v2 requires a source file path, an exact metric, a sample size, and an out-of-sample test. Because the corpus is unread, no file path can be stated without invention. Since invention is forbidden, no build passes the veto layer. The adjudication output is: zero promoted items; all items remain unread; the builder receives a coverage ledger showing 0.02 percent read and a directive to secure corpus access before any nightly build begins.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: The builder attempts to rebuild or replace bridge-model.ts. Veto cause: bridge-model.ts is on the explicit do-not-rebuild list across Prompts 1, 3, and 4 v2. The source text documents its performance as Brier 0.2237 versus the production baseline at 0.2120 on 285 sealed 2025 games [PAGE 1], indicating inferior calibration relative to the existing model. Prediction: Any rebuild would regress the Brier metric relative to the baseline and violate the model-freeze policy associated with PR #1020. Verifiable by checking the merged PR #1020 head commit 9c7c7ac3 and the sealed-game test set.

Scenario 2: The builder attempts to merge or modify code owned by open PR #1019 (worker-pick-generation, DARK evaluators). Veto cause: #1019 is open and its test failed with tsc exit 2; it owns its lane and cannot be collided with. Prediction: The TypeScript compile error will block the pick-generation worker; no measurable predictions can ship until the tsc failure is resolved and the PR is merged or closed. Verifiable by PR #1019 status and the worker-pick-generation build log.

Scenario 3: The builder attempts to publish an uncalibrated signal as publish-ready rather than shadow. Veto cause: Prompt 1 WHAT GSE IS states [PAGE 2] that anything uncalibrated runs in shadow and is never published. Prediction: The signal will fail held-out calibration (e.g., ECE above the publish bar) and must be demoted to shadow; publishing it would violate the GSE pipeline contract and corrupt the production probability output. Verifiable by the shadow/publish rule and any held-out calibration test on the 285 sealed games.
</RLVR_COUNTERFACTUAL_VETOES>