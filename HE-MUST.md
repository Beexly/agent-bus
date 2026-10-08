# HE-MUST

Only the steps this session could not finish. Do not paste tokens into the repo.

1. Telegram. `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` were unset. `scripts/freeze.py` writes `bus/FREEZE` and stops. Set those two env vars on the Windows box if you want a notify. Do not commit them.

2. Hindsight. Not started. On the Motif VM, pin `ghcr.io/vectorize-io/hindsight:0.4.9` only after `docker inspect` records a digest. Require a named volume `hindsight-data:/home/hindsight/.pg0`. No `:latest`. No `--pull always`. This session did not run Docker against that host.

3. Windows clone. Run `sh scripts/install-local.sh` once. That sets `core.hooksPath .githooks` and `core.autocrlf false`. This sandbox is not the Windows box.

4. Commit signing. Production identity is `git commit -S` plus a server that rejects unsigned commits. No signing key is on this machine. Not marked done.

5. Branch protection. If the API call in this session failed, run:

```
gh api -X PUT repos/Beexly/agent-bus/branches/main/protection \
  -H "Accept: application/vnd.github+json" \
  --input - << 'EOF'
{
  "required_status_checks": null,
  "enforce_admins": false,
  "required_pull_request_reviews": null,
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "block_creations": false,
  "required_conversation_resolution": false,
  "lock_branch": false,
  "allow_fork_syncing": false
}
EOF
```

Secret scanning push protection is a GitHub plan feature. If the API refuses it, the pre-commit hook is the control that exists today.
