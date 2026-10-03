# Grok Heavy Prompts — GSE Document Ingestion

*Written 2026-10-02 by Motif. Run in order. Prompt 1 is the money — one Heavy run, maximum yield. Prompt 2 is optional, only if quota allows.*

*Prerequisite: `Beexly/agent-bus@main` must show 5,102 files under `research/` (3,728 corpus-intelligence + 1,374 arxiv-sweep, verified 2026-10-02, main SHA `aa0f9169`). Verify the count before running.*

---

## PROMPT 1 — Full ingestion (run this first, and if quota is tight, run ONLY this)

```
You are running as Grok Heavy: up to 16 parallel agents that work independently,
then debate toward a final answer. Use that structure deliberately.

MISSION
Ingest every document in these two directories and turn them into an
actionable build list for the Galaxy Sports Edge (GSE) NFL prediction engine:

- https://github.com/Beexly/agent-bus/tree/main/research/corpus-intelligence (~3,728 files: research briefs, metric catalogs, method writeups, digests)
- https://github.com/Beexly/agent-bus/tree/main/research/arxiv-sweep (~1,374 files: arXiv paper extractions on sports prediction, ML, calibration, causal inference)

CURRENT REPO STATE — Beexly/Sports, main @ 2026-10-02 (so you don't recommend what's already built)
- PR #1020 MERGED (merge 651f51f7a6fbb4d330c1c54f8f470de75fb661d7): head 9c7c7ac3 passed Test, Model freeze, Build. 6 files, +90 lines, no MODEL_VERSION change.
- PR #1018 OPEN (OL deadline + GSI): Test, Build, Model freeze passed; Codacy failed. Not merged.
- PR #1019 OPEN (DARK evaluators): Test failed (tsc exit 2 in worker-pick-generation). Not merged.
- PR #1016 OPEN (trueProb quarantine): Test still running.
- PR #860 OPEN ([cat:C5] edge-rank + offline bake-off): Test failed. The only C5-tagged PR; no C6 PR exists.
- Signal registry: 47 signals, 46 no / 1 partial. T1 partial, analyze() returns INVALID. Props are the open frontier.
- Do NOT recommend rebuilding bridge-model.ts (Brier 0.2237 vs spread-bucket 0.2120 on 285 sealed 2025 games) or re-litigating paper 1704.00197 (in-game logistic, not our least-squares rating model).
- Rank your build list AFTER this state: skip anything already merged, flag anything that collides with an open PR.

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

---

## PROMPT 3 — Second Heavy run: promote-or-kill (run this next, then hand the result to the builder)

```
You are running as Grok Heavy. This is a second pass. The first pass is in this
conversation — its Phase 5 build list has 7 items, ALL marked shadow because the
underlying source files were never opened. Your job: open them, and for each
item either PROMOTE it to a measured build or KILL it with cause. No item stays
in limbo.

ACCESS RULE — the first pass got rate-limited by the GitHub API. Do NOT use
api.github.com. Fetch every file via raw.githubusercontent.com, e.g.
https://raw.githubusercontent.com/Beexly/agent-bus/main/research/corpus-intelligence/maps/c02-map.md
That path pattern works for every file. If a fetch fails, retry once, then list
the file as unread — never silently skip.

PHASE 1 — READ THE UNREAD MAPS (all agents, divided)
Open all 8 unread slice maps:
- research/corpus-intelligence/maps/c02-map.md
- research/corpus-intelligence/maps/c03-map.md
- research/corpus-intelligence/maps/c06-map.md
- research/corpus-intelligence/maps/c07-map.md
- research/corpus-intelligence/maps/c07d-map.md
- research/corpus-intelligence/maps/c08-map.md
- research/corpus-intelligence/maps/c09-map.md
- research/corpus-intelligence/maps/c10-map.md
Extract every actionable claim the same way the first pass did: method in one
sentence, math/estimator, dataset and sample size, claimed result with metric,
license, GSE relevance HIGH/MEDIUM/LOW/NONE. Flag anything that contradicts or
outranks the first pass's top 13.

PHASE 2 — PROMOTE OR KILL (statisticians + skeptics)
For each of the 7 shadow items in the first pass's build list, resolve the cited
source file from the maps (ledgers are under the Sports docs tree — search the
repo file listing for the ledger number or filename), open it, and rule:
- PROMOTE if the numbers check out: state the exact metric, sample, and protocol
  from the source. It becomes a measured build.
- KILL with cause if: the sport isn't NFL, the sample is unstated, there's no
  out-of-sample result, or the map misattributed the claim.
The 7 items: (1) conformal publication gate [ledger 0743], (2) per-QB
EPA/dropback [handoff-indie-builders-v2-fullspec-2026-09-25.md], (3) QB
pressure-to-sack residual [sweep-2026-09-21.md], (4) trust-target props stack
[CARDS_SHARE_CORE_WIRING.md, arxiv-deep/0912], (5) injury/QB-change provenance
[signal-staleness-gate.md], (6) within-player scale-fit [signal-ledger-scale-fit.md],
(7) moderate-favorite leaf audit [MARKET_CALIBRATION_2026-09-04.md].
Also re-examine the 4 demoted items — coverage transformer [ledger 0489],
soft-Elo [ledger 0540], ensemble [ledger 0797], OpenSkill bake-off — and say
plainly whether any deserves resurrection.

PHASE 3 — BUILDER HANDOFF (synthesizers, final)
This goes to a builder agent tonight. For every PROMOTED item, write:
1. What to build, in one sentence
2. Exact repo paths to read first (Sports repo, Beexly/Sports@main)
3. Exact files to create or modify, with the function/module names
4. The test that proves it works: data in, held-out metric, pass/fail bar
5. What NOT to touch (open PRs #1016, #1018, #1019, #860 own their lanes)
6. Shadow or publish-ready, and why
Order by expected value. If fewer than 3 items promote, say so explicitly and
say what the second-best use of the builder's night is.

RULES
- Never invent a number, a file path, or a citation. Unread = unread.
- The do-not-rebuild list stands: bridge-model.ts, 1704.00197, market-moneyline
  recalibration, team-level pressure-to-sack, per-QB uncertainty bands.
- A killed claim is a correct output. Do not protect the first pass's list.
```

*Note: Prompt 2 (generic deep dive) is superseded by Prompt 3 for tonight. Prompt 2 remains valid for a future quota cycle.*
