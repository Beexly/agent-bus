"""Fail-closed risk gate. A false result means do not send an order."""
from __future__ import annotations

MAX_RISK_PCT = 0.02
DAILY_LOSS_LIMIT = -300.0
MAX_OPEN_POSITIONS = 1
CONSECUTIVE_LOSS_BREAKER = 3
BUYING_POWER_BUFFER = 0.95


def compute_contracts(equity: float, option_price: float, max_risk_pct: float = MAX_RISK_PCT) -> int:
    if equity <= 0 or option_price <= 0 or max_risk_pct <= 0:
        return 0
    position_size = equity * max_risk_pct
    contract_cost = option_price * 100.0
    contracts = int(position_size // contract_cost)
    if contracts < 1:
        return 0
    return contracts


def required_buying_power(option_price: float, contracts: int) -> float:
    if option_price <= 0 or contracts < 1:
        return 0.0
    return option_price * 100.0 * contracts


def handle_partial_fill(qty: float, filled_qty: float | None) -> float:
    filled = float(filled_qty) if filled_qty else 0.0
    if filled < float(qty):
        return filled
    return float(qty)


def fill_is_open(qty: float, filled_qty: float | None, filled_avg_price: float | None) -> bool:
    filled = float(filled_qty) if filled_qty else 0.0
    price = float(filled_avg_price) if filled_avg_price else 0.0
    return filled >= float(qty) and filled > 0 and price > 0


def risk_gate(
    buying_power: float,
    required_bp: float,
    daily_pnl: float,
    consecutive_losses: int,
    open_positions: int,
) -> tuple[bool, str]:
    if required_bp <= 0:
        return False, "ZERO_SIZE"
    if buying_power <= 0 or required_bp > buying_power * BUYING_POWER_BUFFER:
        return False, "INSUFFICIENT_BUYING_POWER"
    if daily_pnl <= DAILY_LOSS_LIMIT:
        return False, "DAILY_LOSS_LIMIT"
    if consecutive_losses >= CONSECUTIVE_LOSS_BREAKER:
        return False, "CONSECUTIVE_LOSS_BREAKER"
    if open_positions >= MAX_OPEN_POSITIONS:
        return False, "MAX_OPEN_POSITIONS"
    return True, "PASS"
