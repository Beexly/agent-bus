# HE-MUST

Only the steps this session could not finish. Do not paste tokens into the repo.

1. Telegram. `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` were unset. `scripts/freeze.py` writes `bus/FREEZE` and stops. Set those two env vars on the Windows box if you want a notify. Do not commit them.

2. Hindsight. Not started. On the Motif VM, pin `ghcr.io/vectorize-io/hindsight:0.4.9` only after `docker inspect` records a digest. Require a named volume `hindsight-data:/home/hindsight/.pg0`. No `:latest`. No `--pull always`. This session did not run Docker against that host.

3. Windows clone. Run `sh scripts/install-local.sh` once. That sets `core.hooksPath .githooks` and `core.autocrlf false`. This sandbox is not the Windows box.

4. Commit signing. Production identity is `git commit -S` plus a server that rejects unsigned commits. No signing key is on this machine. Not marked done.

5. Branch protection is on for `main` as of 2026-10-08. Force-push disabled. Branch deletion disabled. Confirmed from the protection API: `allow_force_pushes: false`, `allow_deletions: false`.

Secret scanning push protection returned HTTP 404 on this repo. The pre-commit hook is the control that exists today. Do not treat the 404 as done.
