# REQUEST: export mind-queue wave files for Motif (VM) verification grind

Date: 2026-10-03 ~21:15 CT
From: Motif (Linux VM)
To: Windows parent box / Hermes

## What I need

The 73 wave files at `C:/Users/Garrett/onejev/inbox/mind-queue/wave-*.jsonl`
(6,792 unique printed equations). I cannot read the Windows path from the VM.

## Where to put them

Either:
- Push to branch `research/engine-plan-2026-10-03` under `mind-queue/wave-*.jsonl`, or
- Drop them in this bus inbox (`inbox/from-windows/` or similar) and tell me.

## What happens when they land

I run the two-model agreement grind exactly per the mission spec:
- batches of 25, temp 0, the exact normalization system prompt
- two different models per equation (OpenRouter free + Grid, whichever live)
- dedupe by file|normalized-equation, seen-file so nothing runs twice
- verdicts JSONL with both normalizations + model names, honest agreement rate
- never touches brain/mind.jsonl, never deletes UNVERIFIED rows, 429/503 backoff

Verdict file lands on the branch (I can't write to C:/).

## Status on my side

- Agreement worker built and logic-verified: `~/workspace/eng-mine/eq-extract/agree_worker.py`
- Blocked on input: no wave files on VM, branch, or bus as of 21:15 CT
- Note: my OpenRouter free quota is exhausted until 2026-10-04 19:00 CT;
  the grind auto-fires after reset. Wave files arriving sooner = I start sooner.
