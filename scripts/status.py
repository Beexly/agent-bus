#!/usr/bin/env python3
"""Write STATUS.md. Header always names Motif as lead."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BUCKETS = ("inbox", "claimed", "blocked_on_garrett", "capped", "quarantine")


def main():
    found = {b: [] for b in BUCKETS}
    bus = ROOT / "bus"
    for project in ("signal-origin", "gse", "framefit", "desk"):
        base = bus / project
        if not base.exists():
            continue
        for bucket in ("inbox", "claimed", "failed", "quarantine", "done"):
            for status_path in (base / bucket).glob("*/status.json"):
                status = json.loads(status_path.read_text())
                state = status.get("state") or bucket
                key = bucket
                if state in ("needs_human", "blocked_on_garrett"):
                    key = "blocked_on_garrett"
                elif state == "capped" or status.get("capped"):
                    key = "capped"
                elif bucket == "inbox":
                    key = "inbox"
                elif bucket == "claimed":
                    key = "claimed"
                elif bucket == "quarantine":
                    key = "quarantine"
                else:
                    continue
                if key in found:
                    found[key].append(f"{project}/{status_path.parent.name}")
    lines = ["# STATUS", "", "Lead: Motif", ""]
    labels = {
        "inbox": "open",
        "claimed": "claimed",
        "blocked_on_garrett": "blocked_on_garrett",
        "capped": "capped",
        "quarantine": "quarantined",
    }
    for bucket in BUCKETS:
        lines.append(f"## {labels[bucket]}")
        rows = found[bucket] or ["- none"]
        lines.extend(rows if rows == ["- none"] else [f"- {r}" for r in rows])
        lines.append("")
    out = ROOT / "STATUS.md"
    if out.exists() and "Lead: Motif" not in out.read_text()[:800]:
        out = ROOT / "FLEET-STATUS.md"
    out.write_text("\n".join(lines))
    print("STATUS written")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
