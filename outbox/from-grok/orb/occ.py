"""OCC option symbols. Roots may be adjusted (SPY1), up to 6 characters."""
from __future__ import annotations

from datetime import date


def build_symbol(root: str, expiry: date, right: str, strike: float) -> str:
    if not root or len(root) > 6 or not root.isalnum():
        raise ValueError("root must be 1 to 6 letters or digits")
    side = right.upper()
    if side not in ("C", "P"):
        raise ValueError("right must be C or P")
    if strike <= 0:
        raise ValueError("strike must be positive")
    return f"{root.upper()}{expiry:%y%m%d}{side}{int(round(strike * 1000)):08d}"


def parse_symbol(symbol: str) -> dict:
    if len(symbol) < 16:
        raise ValueError("symbol too short")
    root = symbol[:-15]
    yymmdd = symbol[-15:-9]
    right = symbol[-9]
    strike_raw = symbol[-8:]
    if not (1 <= len(root) <= 6) or not root.isalnum():
        raise ValueError("root must be 1 to 6 letters or digits")
    if right not in ("C", "P") or not yymmdd.isdigit() or not strike_raw.isdigit():
        raise ValueError("symbol is not OCC")
    return {
        "root": root,
        "expiry": date(2000 + int(yymmdd[0:2]), int(yymmdd[2:4]), int(yymmdd[4:6])),
        "right": right,
        "strike": int(strike_raw) / 1000.0,
    }
