"""0DTE SPY opening-range breakout. One trade. ATM. Mon, Wed, Fri."""
from __future__ import annotations

import math
from datetime import date, datetime

TRADE_WEEKDAYS = {0, 2, 4}  # Monday, Wednesday, Friday


def atm_strike(price: float) -> int:
    if price <= 0:
        raise ValueError("price must be positive")
    return int(math.floor(price + 0.5))


def trade_day(when: date) -> bool:
    return when.weekday() in TRADE_WEEKDAYS


def opening_range(bars: list[tuple[datetime, float, float]]) -> tuple[float, float] | None:
    """bars are (timestamp, high, low) inside 09:30-09:35 ET. Returns (high, low)."""
    if not bars:
        return None
    return max(high for _, high, _ in bars), min(low for _, _, low in bars)


def first_breakout(range_high: float, range_low: float, price: float) -> str | None:
    if price > range_high:
        return "C"
    if price < range_low:
        return "P"
    return None


def vix_size_multiplier(vix: float | None) -> float:
    """Optional. None means the backtest path: full size, no VIX gate."""
    if vix is None:
        return 1.0
    if vix < 12 or vix > 35:
        return 0.0
    if vix < 20:
        return 1.0
    if vix < 30:
        return 0.5
    return 0.25


def exit_reason(entry_price: float, mid: float) -> str | None:
    if entry_price <= 0 or mid <= 0:
        return None
    if mid >= entry_price * 2.0:
        return "PROFIT_TARGET"
    if mid <= entry_price * 0.5:
        return "STOP_LOSS"
    return None
