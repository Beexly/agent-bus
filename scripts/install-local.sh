#!/bin/sh
# Run once per clone. Does not touch GitHub, Telegram, or Hindsight.
cd "$(dirname "$0")/.." || exit 1
git config core.hooksPath .githooks
git config core.autocrlf false
echo "hooksPath=.githooks autocrlf=false"
