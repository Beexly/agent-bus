# arxiv-program/research/2026-09-21/arxiv-program/state/ledger-template.md
## What it is (1-2 sentences)
The required 14-section template for deep-diving each paper in GSE's 500-paper arXiv research program (a paper counts toward the 500 only when its full ledger is complete and verified; abstract screening does not count). Defines the research workflow: full-text retrieval via ar5iv/HTML/PDF, BLOCKED-paper handling, and the NNNN-slug.md file-naming convention.
## Key metrics/methods (formulas where given, else "not specified")
not specified — this is a process template, not a research finding. Sections 3–4 require equations copied faithfully, section 7 requires numbers quoted exactly, section 9 adversarial leakage analysis, sections 11–14 build spec, reproducible test, numeric accept/reject gate, and improvement experiment.
## Data sources named
Retrieval sources: `https://ar5iv.org/html/{id}`, `https://export.arxiv.org/api/query?id_list={id}`, `https://arxiv.org/pdf/{id}`; overlap map at `/home/hatch/workspace/arxiv-sweep/existing-research-map.md`.
## Findings (numbers and facts, not vibes)
The program targets 500 fully-read papers; a BLOCKED paper is replaced from a reserve list; quote rules: numbers exactly, never round silently; absent information must be written as "Not stated in paper" rather than guessed.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Ledger acceptance/rejection gates with numeric criteria before running tests: TRUST-SIGNAL (adversarial validation discipline for ingested research).
## Engine-actionable? (yes/no + one-line what)
No — meta-document; process template only, no sports content.
