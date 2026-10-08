# HE-MUST

Only the steps this session could not finish. Do not paste tokens into the repo.

1. Telegram. `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` were unset in the Orca PowerShell session on 2026-10-08. Chat id already named by Garrett: 8426108345. `scripts/freeze.py` writes `bus/FREEZE` and stops. Set the two env vars in that session. Do not commit them. Do not print the token.

2. Hindsight image is pinned. The container was not started. On the Motif VM only, from a current clone: `docker compose -f hindsight/docker-compose.yml up -d` after exporting `HINDSIGHT_API_LLM_API_KEY` in the shell. Digest `sha256:d1840062a5b79940ab7a9f4809ceb90fc776d4ad737cd9329e9b5836cc64ab70` (tag 0.10.2, resolved 2026-10-08). Named volume `hindsight-data` at `/home/hindsight/.pg0`. No `:latest`. No `--pull always`. Then `docker inspect` the running container and confirm the RepoDigest matches. This machine is not the Motif VM.

3. Windows clone. Repo `core.hooksPath=.githooks` and `core.autocrlf=false` were set on the Windows clone (global `autocrlf=true` remains and is overridden). `scripts/fleet_view.py` has not been run on that box. Pull `fleet-view-2026-10-08` after it merges, then `python scripts/fleet_view.py`.

4. Commit signing. Production identity is `git commit -S` plus a server that rejects unsigned commits. No signing key is on this machine.

5. Together dashboard, Jules connection, and which Dots product. Not reachable here. See `docs/EXTERNAL-PLAYERS.md`. Do not start a training job or a Jules task.

6. Hermes inventory `outbox/from-hermes/antigravity-inventory-2026-10-08.md` was left unpushed on the Windows box. This session cannot read that file. Push only that file after a secret scan. Do not push the 1.53 GB GSE zip.

## Secret scanning

Checked 2026-10-08 on the public repo. Secret scanning and push protection are enabled. Non-provider patterns and validity checks stay off (paid Secret Protection). The pre-commit hook rejects `bus/` secrets before the commit.
