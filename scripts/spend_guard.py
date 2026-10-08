#!/usr/bin/env python3
"""Spend circuit. Reads usage.cost. Soft 80. Hard 100. No network."""
import json
import os
import sys
from pathlib import Path


def decide(spent, budget, kind="work"):
    if kind in ("lint", "format"):
        return "hard"
    if budget <= 0:
        return "hard"
    ratio = spent / budget
    if ratio >= 1:
        return "hard"
    if ratio >= 0.8:
        return "soft"
    return "ok"


def main():
    payload = json.loads(sys.stdin.read() or "{}")
    usage = payload.get("usage") or {}
    cost = float(usage.get("cost") or 0)
    budget = float(payload.get("budget_usd") or 0)
    already = float(payload.get("spent_usd") or 0)
    kind = payload.get("kind") or "work"
    verdict = decide(already + cost, budget, kind)
    journal = Path(os.environ.get("BEEX_SPEND_JOURNAL", "bus/priors/spend.jsonl"))
    if verdict == "ok":
        journal.parent.mkdir(parents=True, exist_ok=True)
        with journal.open("a") as fh:
            fh.write(json.dumps({"cost": cost, "spent_usd": already + cost, "kind": kind}) + "\n")
    print(verdict)
    return 0 if verdict == "ok" else 1


if __name__ == "__main__":
    raise SystemExit(main())
