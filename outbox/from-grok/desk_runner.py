"""Order station. Reads the latest card. Sends an order only when both are true:
the gate is OPEN, and an Alpaca key is already in the environment.

The key is never read from a file in this repo and never printed.
No key means exit 2. A shut gate means exit 0 and no order.
"""
from __future__ import annotations

import json
import os
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

HERE = Path(__file__).resolve().parent
CARD = HERE / "cards" / "LATEST.md"
STATUS = HERE / "dashboard" / "order_station.json"


def key_present() -> bool:
    pairs = (
        ("APCA_API_KEY_ID", "APCA_API_SECRET_KEY"),
        ("ALPACA_API_KEY", "ALPACA_SECRET_KEY"),
    )
    return any(os.environ.get(a) and os.environ.get(b) for a, b in pairs)


def gate_open() -> bool:
    text = CARD.read_text(encoding="utf-8") if CARD.exists() else ""
    return "Gate: OPEN" in text


def write(state: str, detail: str) -> None:
    STATUS.parent.mkdir(parents=True, exist_ok=True)
    STATUS.write_text(
        json.dumps(
            {
                "at": datetime.now(timezone.utc).isoformat(),
                "state": state,
                "detail": detail,
                "orders_sent": 0,
            },
            indent=2,
        ),
        encoding="utf-8",
    )


def main() -> int:
    has_key = key_present()
    open_gate = gate_open()
    if not has_key:
        why = "No Alpaca key in the environment. Plaid cannot send an order."
        if not open_gate:
            why += " Gate is also SHUT."
        write("BLOCKED_NO_KEY", why)
        print("BLOCKED_NO_KEY")
        return 2
    if not open_gate:
        write("NO_TRADE", "Key is present. Gate is SHUT, so no order.")
        print("NO_TRADE")
        return 0
    # Key exists and the gate is open. Confirm the account answers before any order.
    key = os.environ.get("APCA_API_KEY_ID") or os.environ.get("ALPACA_API_KEY")
    secret = os.environ.get("APCA_API_SECRET_KEY") or os.environ.get("ALPACA_SECRET_KEY")
    paper = os.environ.get("ALPACA_PAPER", "true").lower() != "false"
    host = "https://paper-api.alpaca.markets" if paper else "https://api.alpaca.markets"
    req = urllib.request.Request(
        host + "/v2/account",
        headers={"APCA-API-KEY-ID": key or "", "APCA-API-SECRET-KEY": secret or ""},
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            account = json.loads(resp.read().decode())
    except Exception as exc:  # noqa: BLE001
        write("KEY_REJECTED", type(exc).__name__)
        print("KEY_REJECTED")
        return 3
    # Buying power is a number, not a secret. Do not write the key.
    bp = account.get("buying_power")
    write("KEY_OK_NO_ORDER_YET", f"Alpaca answered. Buying power {bp}. Gate is open but this build does not auto-fire a live ticket.")
    print("KEY_OK", bp)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
