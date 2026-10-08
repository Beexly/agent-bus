#!/usr/bin/env python3
"""Claim an inbox task. Motif is the only lead. Players report to Motif."""
import json
import subprocess
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SCHEMA = 1


def load_yaml_min(path):
    data = {}
    for line in Path(path).read_text().splitlines():
        if not line.strip() or line.strip().startswith("#") or ":" not in line:
            continue
        k, v = line.split(":", 1)
        data[k.strip()] = v.strip().strip("\"'")
    return data


def main():
    if len(sys.argv) < 3:
        print("usage: claim.py <agent-id> <project/id>", file=sys.stderr)
        return 2
    agent_id, task = sys.argv[1], sys.argv[2]
    if (ROOT / "bus" / "FREEZE").exists():
        print("REFUSE freeze", file=sys.stderr)
        return 1
    agent = load_yaml_min(ROOT / "agents" / f"{agent_id}.yaml")
    if agent.get("reports_to") != "motif":
        print("REFUSE reports_to is not motif", file=sys.stderr)
        return 1
    project, tid = task.split("/", 1)
    allowed = agent.get("projects_allowed", "")
    if project not in allowed:
        print("REFUSE project not allowed", file=sys.stderr)
        return 1
    src = ROOT / "bus" / project / "inbox" / tid
    status_path = src / "status.json"
    if not status_path.exists():
        print("REFUSE missing inbox", file=sys.stderr)
        return 1
    claimed = ROOT / "bus" / project / "claimed" / tid / "status.json"
    if claimed.exists():
        est = json.loads(claimed.read_text())
        hb = est.get("heartbeat_at")
        if hb:
            ts = datetime.fromisoformat(hb)
            if ts.tzinfo is None:
                ts = ts.replace(tzinfo=timezone.utc)
            if datetime.now(timezone.utc) - ts < timedelta(seconds=180):
                print("REFUSE heartbeat inside 180s", file=sys.stderr)
                return 1
    status = json.loads(status_path.read_text())
    if status.get("schema_version") != SCHEMA:
        status["state"] = "needs_human"
        status_path.write_text(json.dumps(status, indent=2) + "\n")
        print("PARK needs_human")
        return 0
    dest = ROOT / "bus" / project / "claimed" / tid
    dest.parent.mkdir(parents=True, exist_ok=True)
    src.rename(dest)
    status["state"] = "claimed"
    status["fence"] = int(status.get("fence") or 0) + 1
    status["lease_holder"] = agent_id
    status["heartbeat_at"] = datetime.now(timezone.utc).isoformat()
    (dest / "status.json").write_text(json.dumps(status, indent=2) + "\n")
    if (ROOT / ".git").exists():
        rel_old = f"bus/{project}/inbox/{tid}"
        rel_new = f"bus/{project}/claimed/{tid}"
        pull = subprocess.run(["git", "pull", "--ff-only"], cwd=ROOT, capture_output=True, text=True)
        if pull.returncode != 0 and "no tracking" not in (pull.stderr + pull.stdout).lower() and "there is no tracking" not in (pull.stderr + pull.stdout).lower():
            print(pull.stderr, file=sys.stderr)
            return 1
        subprocess.run(["git", "add", "-A", rel_old, rel_new], cwd=ROOT, check=False)
        commit = subprocess.run(["git", "commit", "-m", f"claim {project}/{tid} fence={status['fence']}"], cwd=ROOT, capture_output=True, text=True)
        if commit.returncode != 0:
            print(commit.stderr or commit.stdout, file=sys.stderr)
            return 1
        push = subprocess.run(["git", "push"], cwd=ROOT, capture_output=True, text=True)
        if push.returncode != 0:
            print(push.stderr or push.stdout, file=sys.stderr)
            print("ABORT push rejected", file=sys.stderr)
            return 1
    print(f"CLAIMED {project}/{tid} fence={status['fence']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
