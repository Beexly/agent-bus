# Grok Heavy Prompts — GSE Document Ingestion

*Written 2026-10-02 by Motif. Run in order. Prompt 1 is the money — one Heavy run, maximum yield. Prompt 2 is optional, only if quota allows.*

*Prerequisite: the `motif/research-push-all` branch on `Beexly/agent-bus` must show 5,102 files under `research/`. Verify the count before running.*

---

## PROMPT 1 — Full ingestion (run this first, and if quota is tight, run ONLY this)

```
You are running as Grok Heavy: up to 16 parallel agents that work independently,
then debate toward a final answer. Use that structure deliberately.

MISSION
Ingest every document in these two directories and turn them into an
actionable build list for the Galaxy Sports Edge (GSE) NFL prediction engine:

- https://github.com/Beexly/agent-bus/tree/motif/research-push-all/research/corpus-intelligence (~3,728 files: research briefs, metric catalogs, method writeups, digests)
- https://github.com/Beexly/agent-bus/tree/motif/research-push-all/research/arxiv-sweep (~1,374 files: arXiv paper extractions on sports prediction, ML, calibration, causal inference)

WHAT GSE IS (so you can judge what matters)
GSE is an NFL prediction engine. It reasons over game signals (quarterback play,
coaching schemes, offensive line, injuries, weather, rest) and outputs calibrated
win probabilities. Its pipeline is: research → wire the signal in → weight it →
calibrate it → test it → polish. Anything uncalibrated runs in shadow, never
published. "Actionable" means: a signal we can wire, a method we can implement,
a calibration technique we can use, or a dataset we can train on.

AGENT ROLES — assign your parallel agents as follows
- 4 agents as STATISTICIANS: read for methods, math, estimators, calibration techniques
- 4 agents as FOOTBALL ANALYSTS: read for domain insight — what actually wins games
- 4 agents as SKEPTICS: read to attack — which claims are unproven, overfit, or misapplied
- 4 agents as SYNTHESIZERS: do not read raw docs; they only read the other agents' outputs

WORK IN FIVE INTERNAL PHASES. Do not skip phases. Each phase's output feeds the next.

PHASE 1 — MAP (statisticians + analysts)
Walk the full file tree of both directories. Produce a catalog: total files read,
categories found, and duplicates flagged (known: arXiv 1704.00197 appears twice,
2603.09896 appears three times — find all others). Report counts per category.
If you cannot read a file, list it as unread — never silently skip.

PHASE 2 — EXTRACT (statisticians + analysts, divided by category)
For every document, extract: (a) the method or signal in one sentence,
(b) the math/estimator if any, (c) the dataset and sample size, (d) the claimed
result with its metric, (e) the license or provenance if stated,
(f) GSE relevance: HIGH / MEDIUM / LOW / NONE with one-line justification.
Be terse. One tight paragraph per document, not essays.

PHASE 3 — SYNTHESIZE (synthesizers read Phase 2 output only)
Across all extractions: (a) which signals/methods compound — i.e., combine into
something stronger than any piece alone, (b) which claims contradict each other
and which side has the stronger evidence, (c) rank the top 25 by expected GSE
value, (d) list what is already standard practice (not an edge).

PHASE 4 — CHALLENGE (skeptics read the Phase 3 top-25 only)
Attack each of the 25: is the result overfit? Was it tested out-of-sample?
Does the method transfer to NFL, or was it built for another sport/domain?
Would it survive the admission test: shuffled-time placebo, adds value beyond
the betting market, threshold tuned on a disjoint fold? Kill anything that
doesn't survive. Be ruthless — a killed claim is a correct output.

PHASE 5 — DELIVER (synthesizers, final)
The build list, ordered by expected value. For each surviving item:
1. What to build (one sentence)
2. Source file path(s) on the branch
3. Implementation sketch (what code, what data in, what number out)
4. The test that proves it works (what held-out check, what metric, what bar)
5. Shadow or publish-ready, and why

RULES
- Never invent a result, a number, or a citation. If a document doesn't state it, say so.
- A restrictive license means learn-the-method, not copy-the-code. Flag licenses.
- Duplicates get extracted once and flagged, not double-counted.
- If the branch has fewer than ~5,000 files under research/, say so and stop — the upload is incomplete.
```

---

## PROMPT 2 — Deep dive (optional; only run if quota allows after Prompt 1)

```
You are running as Grok Heavy. This is a follow-up to a prior ingestion run over
the GSE research corpus (Beexly/agent-bus, branch motif/research-push-all).

The prior run produced a ranked build list. Take the TOP 10 items from that list
and go deeper on each, using your parallel agents as follows:
- Half your agents: find every corroborating or contradicting source — inside the
  corpus AND on the open web. Does the wider literature support this?
- Half your agents: steelman the strongest objection to each item, then answer it.

For each of the 10, deliver:
1. The item and its rank from the prior run
2. Corroboration: what supports it (with sources)
3. Strongest objection and your answer to it
4. Revised rank — did it move up, down, or off the list?
5. The single experiment that would settle it, specified exactly:
   data in, method, held-out metric, pass/fail bar

RULES
- If the evidence got weaker on review, say so and downrank. Do not protect prior outputs.
- Never invent sources. Every claim needs a file path or a URL.
```
