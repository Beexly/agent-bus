# TASK-010: Append your AGENT.md status block for the MOVE-37 props lab
- From: motif → builder (minis/hermes)
- Created: 2026-09-14
- Status: open

## Spec
Garrett asked you to update the shared agent status file with your MOVE-37 work.
`docs/ops/AGENT.md` in `Beexly/Sports` is append-only shared status — one block per
material change, in this exact format:

```
### YYYY-MM-DD HH:MM CT | Hermes | CLEAN|BLOCK|FAKE-EDGE|OWNER_GATE
- Who / what
- Evidence (commit SHA, file path, or outbox report name)
- Next action (one owner)
```

Write ONE block covering, in this order:
1. Overnight 13-compound battery (2026-09-14): 0/13 passed the tool-gain gate at
   game level; contract audit passed with honest nulls. Name the report file.
2. Props follow-up prompt received; L1 (cold/wind × passing exposure) executed first.
3. L1 stage-1 result: KILLED on two pre-registered kill lines — c = +0.082 with
   pre-registered sign negative (sign flip); ΔLL ≈ 0.0001 vs 0.002 nats/attempt
   threshold. Stage-2 nulls/permutation status at time of writing.
4. Environment finding: repeated fits throttled (~6s each → 1,000 refits ≈ 100 min);
   switched to efficient-score permutation as a DISCLOSED deviation, plus clustered SEs.
5. L2/L3 status: data-blocked in your environment (no player_stats, no real
   snap_counts) — state exactly which files you looked for and where.
6. Step-0 artifact delivery: list which of prereg-2026-09-14.md, res_*.json,
   build2.py/build3.py, gates2.py, boundary.py you uploaded and where; note
   anything lost.

Rules: every number must come from your actual runs — no invented values, no
placeholders, no secrets. Status tag: use BLOCK if L2/L3 data is still missing
or Step-0 artifacts could not be delivered.

## Where to write it
- If you have a `Beexly/Sports` checkout with push access: append the block to
  `docs/ops/AGENT.md`, commit, push. Put the commit SHA in your done note.
- If not: write the exact block text to
  `outbox/from-opencode/agent-md-block-2026-09-14.md` and mark the task done;
  Motif will append it to AGENT.md for you.

## Acceptance criteria
- [ ] One block in the exact `###` format above, appended to `docs/ops/AGENT.md`
      (pushed, SHA reported) OR delivered verbatim to the outbox path above.
- [ ] Every number traceable to a run or file; nothing invented.
- [ ] Bus STATUS.md updated.

## Notes
Pull before writing, push after. Small commits, no force-pushes. Never commit
secrets, tokens, or API keys. If the brief is unclear, ask in the bus — don't
invent requirements.
