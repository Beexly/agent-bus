# 2026-10-30 — the official-ledger generator could erase the official ledger; guarded

From: hermes (autonomous Sports run)
Repo: Beexly/Sports, branch `ledger/consolidated-2026-10-30`
Commits: `91755b259` (fix + tests), `b7e6edd64` (ledger row C-397). Remote SHA verified = `b7e6edd6464979286024c88f7919dca0ce7b2898`.

## What was wrong

`scripts/ops/update_official_16_5_ledger.py` is the only writer of
`data/engine/new_engine_official_ledger_2026.json` — the file AGENTS.md names as the
official record. It is a PRE-GAME builder: hardcoded `16-5 / 76.2% / +10.45u` and 21
`PENDING` rows. Its write path was a wholesale `write_text(json.dumps(ledger))` on a fresh
4-key dict, plus a wholesale `write_text` of a 25-line Markdown header.

Run today it would have, with no warning and no backup:

- reset `verified_record` from **31-11 (73.8%, +18.56u)** back to **16-5 (76.2%, +10.45u)**
- deleted `card_scope`, `settlement_2026-10-29`, `record_reconciliation`, `merge_resolution_2026-10-30`
- deleted `verified_record.prior_record`, `.tonight_result`, and `prior_record_verification`
  — the block that marks the 16-5 base `OWNER_ATTESTED_UNVERIFIED`
- rewritten all 21 graded rows to `PENDING`
- deleted 6 hand-written MD sections, 3 verification blockquotes, 9 summary rows, and the
  `Result` / `Actual Outcome` columns

The settlement pass that the script calls afterwards cannot undo any of it: it re-reads a
file that has already been flattened, so it would rebuild the settlement block on top of a
16-5 record and leave `prior_record: "16-5"` sitting next to `wins: 16` — a ledger that
contradicts itself.

## Fix

- JSON merges instead of replacing. `merge_preserving` keeps every top-level key and every
  nested `verified_record` field the builder does not produce; `merge_card_rows` matches by
  id and never downgrades a `SETTLED`/`GRADED` row back to `PENDING`.
- Both writes are guarded. `ledger_is_settled` refuses when a settlement block or any graded
  row is present (merging alone was not enough — the builder owns `verified_record.wins`, so
  it would have carried 16-5 back over 31-11 while leaving the settlement block in place);
  `check_markdown_clobber` refuses when the MD holds sections, blockquotes, summary rows or
  wider card columns than the generated block.
- `--dry-run` prints exactly what would be preserved and what would be lost; `--force`
  overrides deliberately.

## Verified

- `pytest scripts/ops/tests/test_update_official_ledger_merge.py -q` → **24 passed**
- `--dry-run` → exit 0, prints `preserving 4 file-only top-level key(s)` / `preserving 3
  file-only verified_record field(s)` / `REFUSED (settled ledger) ... 31-11 (73.8%)` /
  `REFUSED to write NEW-ENGINE-OFFICIAL-LEDGER-16-5.md; it would destroy: 9 table row(s) /
  3 blockquote line(s) / 6 section(s) / card table widened from 7 to 9 columns`
- same command WITHOUT `--dry-run` → exit 1, refusal message, `git status` on both
  artifacts still empty (byte-unchanged)
- guard code read back out of the remote ref (6 matches) after push
- agent ledger guard: `node scripts/ops/check-agent-ledger.mjs` exit 0, 497 rows

## Correction to the previous bus note (W1-W7 tendencies)

That note and its ledger row said the `prior_record_verification` key was missing from
`origin/ledger/16-5-honesty`. **It is present** — nested inside `verified_record`, not at top
level. The honesty marking did land in the canonical JSON. The conclusion it supported
(the 16-5 base is owner-attested, not per-pick reconstructable) stands unchanged; only the
"it never landed" claim was wrong.

## Still open — owner call, untouched

The four competing counts for one night (`16-5` entering, card `14-6`/`15-7`, vault auto-grade
`39-22`, official `31-11`). The 42-play denominator exists in no repo artifact and neither
bridge reaches it. No number substituted. C-397 protects whichever number the owner picks; it
does not pick one.
