#!/usr/bin/env python3
"""Touch heartbeat_at for claims held by this machine. TTL is 180s."""
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def main():
    holder = sys.argv[1] if len(sys.argv) > 1 else "orca"
    now = datetime.now(timezone.utc).isoformat()
    n = 0
    for path in (ROOT / "bus").glob("*/claimed/*/status.json"):
        status = json.loads(path.read_text())
        if status.get("lease_holder") != holder:
            continue
        status["heartbeat_at"] = now
        path.write_text(json.dumps(status, indent=2) + "\n")
        n += 1
    print(f"HEARTBEAT {n}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
