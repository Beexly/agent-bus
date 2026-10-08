#!/usr/bin/env python3
"""Accept a result. Only the lead may accept. Missing evidence goes to quarantine."""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NEED = ("receipt", "action_dependence", "response_validity")


def load_yaml_min(path):
    data = {}
    for line in Path(path).read_text().splitlines():
        if not line.strip() or line.strip().startswith("#") or ":" not in line:
            continue
        k, v = line.split(":", 1)
        data[k.strip()] = v.strip().strip("\"'")
    return data


def fields(text):
    out = {}
    for line in text.splitlines():
        if ":" not in line:
            continue
        k, v = line.split(":", 1)
        out[k.strip()] = v.strip()
    return out


def main():
    if len(sys.argv) < 3:
        print("usage: accept.py <agent-id> <project/id>", file=sys.stderr)
        return 2
    agent_id, task = sys.argv[1], sys.argv[2]
    agent = load_yaml_min(ROOT / "agents" / f"{agent_id}.yaml")
    if agent.get("role") != "lead":
        print("REFUSE caller is not lead", file=sys.stderr)
        return 1
    project, tid = task.split("/", 1)
    src = ROOT / "bus" / project / "claimed" / tid
    result = src / "RESULT.md"
    if not result.exists():
        print("REFUSE missing RESULT.md", file=sys.stderr)
        return 1
    got = fields(result.read_text())
    missing = [k for k in NEED if not got.get(k)]
    if missing:
        dest = ROOT / "bus" / project / "quarantine" / tid
        dest.parent.mkdir(parents=True, exist_ok=True)
        src.rename(dest)
        print(f"QUARANTINE missing {','.join(missing)}")
        return 1
    dest = ROOT / "bus" / project / "done" / tid
    dest.parent.mkdir(parents=True, exist_ok=True)
    src.rename(dest)
    log = ROOT / "bus" / "priors" / "handoffs.jsonl"
    log.parent.mkdir(parents=True, exist_ok=True)
    row = {
        "from": got.get("from", "unknown"),
        "to": agent_id,
        "project": project,
        "task_type": got.get("task_type", "unknown"),
        "passed": True,
        "accepted_by": "motif",
    }
    with log.open("a") as fh:
        fh.write(json.dumps(row) + "\n")
    print("ACCEPTED")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
