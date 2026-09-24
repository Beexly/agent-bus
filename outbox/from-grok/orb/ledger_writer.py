"""Append-only JSONL ledger. Never rewrites a prior line."""
from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

LEDGER_DIR = Path(__file__).resolve().parents[1] / "ledger"


def _path(day: str) -> Path:
    LEDGER_DIR.mkdir(parents=True, exist_ok=True)
    return LEDGER_DIR / f"{day}.jsonl"


def write_ledger(entry: dict, day: str | None = None) -> None:
    stamp = datetime.now(timezone.utc)
    row = {"timestamp": stamp.isoformat(), **entry}
    target_day = day or stamp.date().isoformat()
    with _path(target_day).open("a", encoding="utf-8") as handle:
        handle.write(json.dumps(row, separators=(",", ":")) + "\n")


def session_start_equity(equity: float, day: str) -> float:
    path = _path(day)
    if path.exists():
        for line in path.read_text(encoding="utf-8").splitlines():
            if not line.strip():
                continue
            entry = json.loads(line)
            if entry.get("action") == "SESSION_START":
                return float(entry["equity"])
    write_ledger({"action": "SESSION_START", "equity": equity}, day)
    return equity


def daily_pnl_from_equity(equity: float, session_start: float) -> float:
    return equity - session_start


def consecutive_losses(day: str) -> int:
    path = _path(day)
    if not path.exists():
        return 0
    streak = 0
    for line in path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        entry = json.loads(line)
        if entry.get("action") != "POSITION_CLOSED":
            continue
        pnl = float(entry.get("pnl", 0))
        streak = streak + 1 if pnl < 0 else 0
    return streak
