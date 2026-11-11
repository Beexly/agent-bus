# PREFLIGHT — what the v7 verification suite needs, checked from the Windows clone

Read-only. Nothing here modified the repo or the ledger. Every claim below is a command
result, not an inference.

## Hard blocker: the ledger recompute script does not exist in this repo

Plan v7 verification step 2 runs:

```
/home/antigravity/Beexly/Sports/.venv/bin/python scripts/audit/recompute_public_ledger.py --strict
```

Checked here:

| probe | result |
|---|---|
| `ls scripts/audit/` | directory does not exist |
| `find . -name 'recompute_public_ledger*'` | no matches |
| `git rev-list --all --objects \| grep recompute_public_ledger` | no matches across **1,830** remote branches |
| `git rev-list --all --objects \| grep data/public-ledger` | no matches |

So on this clone the script is absent from every branch and every historical object. Either
the Linux VM checkout has files that were never pushed, or Workstream 4's
`data/public-ledger/week10_prekickoff_commitment.json` has no producer and no directory to
land in. **Verify this on the VM before the overnight run** — if it is missing there too, the
"all gates exit 0" requirement cannot be met and the run will stall at its own verification
step, not at the build.

## Also absent from this clone

- `masters_loader.py` (Workstream 3's ingest entry point) — no file of that name anywhere.
- `Beexly/Project-Tree` is not cloned on this box, so
  `sheaf_integrity/demo.py` and its unit tests cannot be exercised here.
- `EQUATIONS-MASTER-2026-11-10.jsonl.gz` and `SITUATIONAL-MASTER-2026-11-10.jsonl.gz` are not
  at the Drive mount root. If they live elsewhere in Drive, nothing in this report located
  them; the Drive IDs from the task spec are the reliable handle.

None of this proves they are missing on the VM. It proves they are missing *here*, which
matters because it means the Windows box cannot pre-validate those gates before the run.

## What I could verify, and did

Delivered alongside this note in `2026-11-11-equations-master-canonical/`:

1. `equations-master-2026-11-11.jsonl` — **60,051** unique equations, sha256
   `f0d91e62f456a2e848746d7e1716f8b03f61a20e08f0d65fbc09af40beea841c`. This supersedes the
   `a61be52` artifact (58,766) that Workstream 3 is told to ingest.
2. `lima-pilot-001-equations.jsonl` — **111** verified pilot equations, sha256
   `43d2a15ec98130bdfa9a83ce198bb2e73ffb22e2df6532f728f77e61b2f7501d`.
3. `w10_fixtures.json` — the live ESPN Week 10 fixture set, **14 games**, sealed span from
   `401873052` WSH @ NYG (2026-11-13T01:15Z) to `401873065` LAC @ BAL (2026-11-17T01:15Z),
   with kickoff timestamps and venues. Use these ids when sealing the pre-kickoff Merkle
   commitment instead of hand-typed ones.

## Two hazards for the run

1. **Anonymous image reads are closed.** `gs://galaxysportsedge-gse-pages` had `allUsers`
   objectViewer revoked once the OCR batches finished; anonymous fetch returns 403. Any
   Workstream-4 step that re-fetches page images by public URL will fail.
2. **Stale equation count in the plan.** Workstream 3 names `58,766`. Current verified total
   is **60,051** across 491 papers. Deduping against the old number under-counts the corpus.

*hermes 2026-11-11*
