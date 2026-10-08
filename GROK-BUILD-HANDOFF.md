# Grok Build handoff

Paste this into Grok Build from the root of the Beexly agent-bus repo. Plan mode first. Do not execute until the plan is approved.

---

You are setting up the Beexly agent bus. Read BEEX-AGENT-TEAM.md and treat it as law. Do not reopen the org chart. Do not install Paperclip, Eyrie, AI Maestro, Slaw, Hindsight Cloud, CrewAI, Agno, AutoGen, or LangGraph. Do not migrate to A2A. Do not publish, merge to main, spend money, or call Stripe, Alpaca, or X. Do not create a new agent file because a task looks uncovered.

Motif is Muse, renamed. Motif is the only lead. Orca is the hands. Hermes is a player. This repo is the buffer. You are the setup agent. Every agent file you write must name Motif as the lead and must refuse work that does not. You create files and prove them with local tests. You stop at any step that needs Garrett's GitHub toggle, a Telegram token, the Motif VM, or the Hindsight host.

## Create

1. `BEEX-AGENT-TEAM.md` if it is not already in the repo. Copy the control document Garrett provides. Do not rewrite the locked decisions.

2. `AGENTS.md` at the repo root. First lines, verbatim:

```
Motif is the lead. Motif is Muse, renamed. Do not relitigate this.
Read BEEX-AGENT-TEAM.md before any claim, accept, or spend.
Orca executes. Hermes plays. Neither leads.
If this file and a chat disagree, BEEX-AGENT-TEAM.md wins.
```

3. Layout, empty except for `.gitkeep`:
   - `bus/signal-origin/{inbox,claimed,done,failed,quarantine}`
   - `bus/gse/{inbox,claimed,done,failed,quarantine}`
   - `bus/framefit/{inbox,claimed,done,failed,quarantine}`
   - `bus/desk/{inbox,claimed,done,failed,quarantine}`
   - `bus/priors/handoffs.jsonl` empty

4. `agents/motif.yaml`, `agents/orca.yaml`, `agents/hermes.yaml`. Required fields: `id`, `role`, `reports_to`, `projects_allowed`, `tools_allowed`, `max_budget_usd`, `can_publish: false`, `must_read: BEEX-AGENT-TEAM.md`.
   - Motif: `role: lead`, `reports_to: garrett`, may write tasks for all four projects, may not publish.
   - Orca: `role: hands`, `reports_to: motif`, may claim all four, may not publish, may not accept.
   - Hermes: `role: player`, `reports_to: motif`, may claim `signal-origin` and `framefit` only, may not publish, may not accept.
   A yaml with `reports_to` other than `motif` (or `garrett` for Motif) is invalid.

5. `.githooks/pre-commit` that scans only paths under `bus/`. Reject `sk_live_`, `sk_test_`, `AKIA`, `ghp_`, `xox`, `BEGIN PRIVATE KEY`. Do not scan the hook file. A hook that scans itself cannot be committed. Also reject a `status.json` that contains a CR (`\r`).

6. `.gitattributes` exactly as in the control copy Garrett provides (or the block below). Do not replace it with only `* text=auto eol=lf`. That line is necessary and not sufficient: Git skips eol conversion on files it guesses are binary. Explicit `eol=lf` on `bus/**`, `*.json`, `*.jsonl`, `*.yaml`, `*.py`, and `STATUS.md linguist-generated=true`. Mark images and archives `binary`. `export-ignore` on `.env` and `.env.*`.

7. `.editorconfig` with `end_of_line = lf`, `insert_final_newline = true`, `charset = utf-8` for the same text globs. This is the editor half. `.gitattributes` is the Git half. Both are required.

8. `scripts/claim.py`. Pull. Refuse if `bus/FREEZE` exists. Refuse if the runner's yaml `reports_to` is not `motif`. Refuse if `TASK.project` is not in that agent's `projects_allowed`. Refuse if `schema_version` is not `1` (park as `needs_human`, do not claim). Refuse if heartbeat of an existing claim is inside 180 seconds. `git mv` inbox to claimed, increment `fence`, set `lease_holder` and `heartbeat_at`, commit, push. On push reject, abort. No force-push. No agent except Motif writes a new inbox task.

9. `scripts/heartbeat.py`. Touch `heartbeat_at` every 60 seconds for claims held by this machine.

10. `scripts/status.py`. Write `STATUS.md` with open, claimed, blocked_on_garrett, capped, quarantined. Header line: `Lead: Motif`.

11. `scripts/freeze.py`. Write `bus/FREEZE` and push. Wire it to Telegram only if `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are already in the environment. If they are absent, print the missing vars and stop. Do not ask Garrett to paste a token into the repo.

12. `scripts/accept.py`. Only a caller with `role: lead` may accept. On accept, require `receipt`, `action_dependence`, and `response_validity` in `RESULT.md`. If any is missing, move the task to quarantine. If all are present, append one JSON line to `bus/priors/handoffs.jsonl` with `from`, `to`, `project`, `task_type`, `passed`, `accepted_by: motif`. Do not promote Hindsight from this script.

13. `scripts/spend_guard.py`. Read `usage.cost`. Soft-stop new calls at 80% of `budget_usd`. Hard-stop at 100%. Lint and format refuse a frontier model. Unit-test with a fake response. No network.

## Prove, against a scratch bare remote

Write each result to `PROOF.md` with the exit code. If a proof fails, stop. Do not mark it passed.

- Clean bus commit exits 0.
- Commit that adds `sk_live_` under `bus/` exits 1.
- Commit of a `status.json` containing a CR exits 1.
- `git check-attr eol -- bus/framefit/inbox/t1/status.json` prints `lf` after a file that was written with CRLF is added. `git show HEAD:that-file` contains no CR.
- Two clones claim the same inbox item. First push exits 0. Second exits non-zero. Remote shows one claimed item.
- Diverging `git push --force` against a bare remote with `receive.denyNonFastForwards=true` exits 1.
- `scripts/claim.py` refuses a desk task when run as Hermes.
- `scripts/claim.py` refuses a new claim when `bus/FREEZE` exists.
- `scripts/claim.py` refuses a runner whose yaml `reports_to` is not `motif`.
- `scripts/claim.py` parks `schema_version: 2` as `needs_human` and does not claim it.
- `scripts/accept.py` quarantines a RESULT.md missing `receipt`.
- `scripts/accept.py` refuses a caller whose role is not `lead`, and on a valid accept appends one line to `bus/priors/handoffs.jsonl` with `accepted_by: motif`.
- `scripts/status.py` emits all five buckets and the header `Lead: Motif`.
- `scripts/spend_guard.py` fake response at 100% of budget exits non-zero and does not record a second call.
- `agents/orca.yaml` and `agents/hermes.yaml` both contain `reports_to: motif`. `AGENTS.md` contains the line `Motif is the lead.`

## Do not do

- Do not run `curl | sh` for anything except the Grok Build client Garrett already installed.
- Do not `docker run` Hindsight. Pinning and the volume restore happen on the Motif VM in a later pass.
- Do not enable branch protection yourself unless `gh auth status` succeeds. If it does, protect the default branch: block force-push, enable secret scanning push protection if the plan allows it. If `gh` is not authenticated, write the exact `gh` command into `HE-MUST.md` and stop.
- Do not wrap live OpenRouter keys.

## Done when

`PROOF.md` shows every proof above passed, `HE-MUST.md` lists only the steps you could not run, and `STATUS.md` generates with `Lead: Motif`. Then stop. Garrett's remaining steps should be the GitHub toggle if `gh` is not logged in, the Telegram env vars if unset, and the Hindsight pin on the VM. Nothing else.
