# HE-MUST

Only the steps this session could not finish. Do not paste tokens into the repo.

1. Telegram. `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` were unset here. `scripts/freeze.py` writes `bus/FREEZE` and stops. Set those two env vars on the Windows box if you want a notify. Do not commit them.

2. Hindsight image is pinned. The container was not started. On the Motif VM only, from a current clone: `docker compose -f hindsight/docker-compose.yml up -d` after exporting `HINDSIGHT_API_LLM_API_KEY` in the shell. Digest `sha256:d1840062a5b79940ab7a9f4809ceb90fc776d4ad737cd9329e9b5836cc64ab70` (tag 0.10.2, resolved 2026-10-08). Named volume `hindsight-data` at `/home/hindsight/.pg0`. No `:latest`. No `--pull always`. Then `docker inspect` the running container and confirm the RepoDigest matches. This sandbox is not the Motif VM.

3. Windows clone. `sh scripts/install-local.sh` was run on the setup clone in this session (`core.hooksPath=.githooks`, `core.autocrlf=false`). Run it once on the Windows box too. This sandbox is not that box.

4. Commit signing. Production identity is `git commit -S` plus a server that rejects unsigned commits. No signing key is on this machine.

5. Branch protection is on for `main` as of 2026-10-08. Force-push disabled. Branch deletion disabled.

## Secret scanning, explained

The earlier HTTP 404 was the wrong URL. `PUT /repos/Beexly/agent-bus/secret-scanning` is not the switch. Enabling is `PATCH /repos/{owner}/{repo}` with `security_and_analysis`. Listing alerts with the wrong path also 404s. The alerts list on the correct path returned 0.

Checked 2026-10-08 on the public repo:

| Control | Status |
|---|---|
| secret_scanning | enabled |
| secret_scanning_push_protection | enabled |
| dependabot_security_updates | enabled this session |
| secret_scanning_non_provider_patterns | stays disabled. PATCH is accepted and GitHub leaves it off. That toggle is the paid Secret Protection add-on. |
| secret_scanning_validity_checks | stays disabled. Same reason. |

Partner-pattern push protection was already on. It does not see a secret until `git push`. The pre-commit hook rejects `bus/` secrets before the commit, including OpenRouter `sk-or-`, Anthropic `sk-ant-`, and `github_pat_`, which is the gap the paid non-provider toggle would have covered. `.github/workflows/bus-secret-scan.yml` runs the same scanner on pull requests that touch `bus/`.
