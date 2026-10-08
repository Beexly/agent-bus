#!/bin/sh
# Scan bus payloads only. This file is not under bus/, so it can name the patterns.
# Usage: scan-secrets.sh --cached [files...] | scan-secrets.sh --tree
set -eu
mode=${1:-}
shift || true
pat='sk_live_|sk_test_|sk-or-|sk-ant-|sk-proj-|AKIA[0-9A-Z]{16}|ghp_[A-Za-z0-9]{20,}|github_pat_|xox[baprs]-|BEGIN PRIVATE KEY|AIza[0-9A-Za-z_-]{20,}|xai-[A-Za-z0-9]{16,}|hf_[A-Za-z0-9]{20,}|glpat-|rk_live_'

scan_blob() {
  label=$1
  if git show ":$label" | grep -nE "$pat"; then
    echo "REJECT secret in $label" >&2
    return 1
  fi
  return 0
}

scan_file() {
  label=$1
  if grep -nE "$pat" "$label"; then
    echo "REJECT secret in $label" >&2
    return 1
  fi
  return 0
}

fail=0
case "$mode" in
  --cached)
    for f in "$@"; do
      scan_blob "$f" || fail=1
    done
    ;;
  --tree)
    for f in $(find bus -type f ! -name .gitkeep 2>/dev/null); do
      scan_file "$f" || fail=1
    done
    ;;
  *)
    echo "usage: scan-secrets.sh --cached <files> | --tree" >&2
    exit 2
    ;;
esac
exit "$fail"
