# docs/arxiv-program/research/2026-09-21/arxiv-program/phase2/AUDIT-2026-09-21-tracker.md

## What it is (1-2 sentences)
A post-wave-2 integrity audit of the arXiv-750 program tracker: all 772 `arxiv-deep/*.md` ledger files were parsed and reconciled against the 750-line JSONL tracker, catching one REJECT that was counted as valuable and a wave-2 commit that never actually updated the tracker file.

## Key metrics/methods (formulas where given, else "not specified")
- Parsed all 772 ledger files across every verdict format found (`**Verdict:** X`, `**Verdict: X**`, `**X**` after `## Verdict`, bare `X` after `## Verdict`, `**X.**`); arXiv IDs version-normalized; reconciled against `arxiv-program/state/ledger-tracker-750.jsonl`.
- No formulas — not specified (bookkeeping audit, not a paper).

## Data sources named
- `arxiv-deep/*.md` ledger files (772 total).
- `arxiv-program/state/ledger-tracker-750.jsonl` (the 750-line tracker).
- Wave-2 reader reports (three different report schemas: `id` / `arxiv_id` / `arxiv` keys).
- Wave-2 commit `13b6a27c2`; audit commit `86f76c7` on Beexly/Sports@main.

## Findings (numbers and facts, not vibes)
- 755/772 files have a parseable verdict; 17 are notes/index files without verdicts. [TRUST-SIGNAL, OTHER]
- Wave-2 commit `13b6a27c2` claimed "tracker 485 → 605" but the tracker file was never updated — only 485 lines were on disk; rebuilt from wave-2 reader reports. [TRUST-SIGNAL]
- 11 valuable ledgers were missing from the tracker — added (program_phase 2). [OTHER]
- Integrity catch: tracker entry `2603.04864v1` (recorded ADAPT) pointed at ledger `0212`, whose actual verdict is REJECT (BRIDGE CHI accessibility paper, arXiv:2602.23288v1) and whose paper ID didn't even match — a REJECT was counted as valuable; removed; per the replace-on-REJECT rule the slot needs a fresh replacement read in wave 3. [TRUST-SIGNAL]
- 2 lanes fixed: `2209.08778` → markets, `2402.16300` → abstention. [OTHER]
- 3 reader-20 ledgers (1087–1089) use `**ADAPT.**` (trailing period); verified genuine ADAPT and kept. [TRUST-SIGNAL]
- Verified count after audit: 579 valuable (365 phase 1 + 214 phase 2); 171 remain to reach 750. Commit `86f76c7`. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- The audit is itself a TRUST-SIGNAL artifact: it proves the corpus's valuable-counts can only be trusted after verification against the actual ledger files, never the tracker summary — TRUST-SIGNAL, OTHER.
- The 2603.04864v1/0212 REJECT-counted-as-ADAPT incident: any engine claim or wiring decision citing a ledger must re-verify the verdict at the source file — TRUST-SIGNAL.
- The "485 → 605" claim with only 485 lines on disk is a landed-counts-don't-spend example directly relevant to Garrett's audit-receipts posture (his 17:34 challenge) — TRUST-SIGNAL.
- Reader-20 trailing-period verdicts verified genuine ADAPT: verdict parsing must tolerate format drift; silent format mismatches drop real finds — OTHER.

## Engine-actionable? (yes/no + one-line what)
Yes — governance: treat the JSONL tracker as untrusted for counts; any wiring decision citing a ledger must re-open the ledger file to confirm verdict and ID match (the 0212 incident).
