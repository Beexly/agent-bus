#!/usr/bin/env python3
"""Read-only fleet board. No claim, accept, or spend. Lead line is fixed."""
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PROJECTS = ("signal-origin", "gse", "framefit", "desk")
STATES = ("inbox", "claimed", "done", "failed", "quarantine")
COLUMNS = (
    ("open", "inbox"),
    ("claimed", "claimed"),
    ("blocked_on_garrett", None),
    ("capped", None),
    ("quarantined", "quarantine"),
)

def load_status(path: Path) -> dict:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return {}

def buckets() -> dict:
    out = {name: [] for name, _ in COLUMNS}
    bus = ROOT / "bus"
    for project in PROJECTS:
        for state in STATES:
            base = bus / project / state
            if not base.is_dir():
                continue
            for task in sorted(p for p in base.iterdir() if p.is_dir()):
                status = load_status(task / "status.json")
                row = f"{project}/{task.name}"
                if status.get("needs_human") or status.get("blocked_on") == "garrett":
                    out["blocked_on_garrett"].append(row)
                elif status.get("capped") or status.get("state") == "capped":
                    out["capped"].append(row)
                elif state == "inbox":
                    out["open"].append(row)
                elif state == "claimed":
                    out["claimed"].append(row)
                elif state == "quarantine":
                    out["quarantined"].append(row)
                elif state == "failed":
                    out["quarantined"].append(row + " (failed)")
    return out

def harness_rows() -> list:
    path = ROOT / "agents" / "orca-harness.yaml"
    text = path.read_text(encoding="utf-8") if path.exists() else ""
    rows = []
    current = {}
    for line in text.splitlines():
        if line.startswith("  - id:"):
            if current:
                rows.append(current)
            current = {"id": line.split(":", 1)[1].strip()}
        elif current and line.startswith("    ") and ":" in line:
            key, val = line.strip().split(":", 1)
            current[key] = val.strip()
    if current:
        rows.append(current)
    return rows

def pills(rows: dict) -> str:
    parts = []
    for name, _ in COLUMNS:
        items = rows.get(name, [])
        lis = "".join(f"<li>{item}</li>" for item in items) or "<li>none</li>"
        parts.append(f"<section><h2>{name} <span>{len(items)}</span></h2><ul>{lis}</ul></section>")
    return "".join(parts)

def harness_table(rows: list) -> str:
    body = []
    for row in rows:
        claim = row.get("may_claim", "false")
        body.append(
            "<tr><td>{id}</td><td>{bin}</td><td>{to}</td><td>{claim}</td><td>{bill}</td><td>{skip}</td></tr>".format(
                id=row.get("id", ""),
                bin=row.get("binary", ""),
                to=row.get("reports_to", ""),
                claim=claim,
                bill=row.get("billing_path", "unknown"),
                skip=row.get("skip_permissions", ""),
            )
        )
    return "".join(body)

def render() -> str:
    rows = buckets()
    digest = hashlib.sha256(json.dumps(rows, sort_keys=True).encode()).hexdigest()
    return f"""<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Fleet board</title>
<style>
body {{ font: 15px/1.4 ui-sans-serif, system-ui; margin: 0; background: #0b0d10; color: #e7e5e4; }}
header {{ padding: 16px 20px; border-bottom: 1px solid #27272a; }}
main {{ display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; padding: 16px; }}
section {{ background: #14161a; border: 1px solid #27272a; border-radius: 8px; padding: 12px; }}
h2 span {{ color: #6ee7b7; }}
ul {{ padding-left: 16px; }}
table {{ width: calc(100% - 32px); margin: 0 16px 24px; border-collapse: collapse; }}
td, th {{ border-bottom: 1px solid #27272a; text-align: left; padding: 6px; }}
</style></head><body>
<header><h1>Lead: Motif</h1><p>Read-only. No claim, accept, or spend. Board digest {digest[:12]}.</p></header>
<main>{pills(rows)}</main>
<h2 style="padding:0 16px">Orca harnesses</h2>
<table><thead><tr><th>id</th><th>binary</th><th>reports_to</th><th>may_claim</th><th>billing</th><th>skip_permissions</th></tr></thead>
<tbody>{harness_table(harness_rows())}</tbody></table>
</body></html>
"""

def main() -> None:
    out = ROOT / "viewer" / "index.html"
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(render(), encoding="utf-8", newline="\n")
    print(out)

if __name__ == "__main__":
    main()
