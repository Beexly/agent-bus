"""ORB runner. Default is no order.

--task scan     record session equity if a key exists
--task execute  check the gate, then submit only when ORB_SUBMIT=1
--task monitor  exit check requires a quote the caller passes later
--task flatten  close an open SPY option if a key exists and ORB_SUBMIT=1

No key: exit 1. Shut rules: exit 0 and write a ledger line. This file does
not claim a $300 day. The cited backtest averages about $49 a trade.
"""
from __future__ import annotations

import argparse
import os
import sys
from datetime import datetime
from zoneinfo import ZoneInfo

from orb.alpaca_adapter import CredentialError, account_snapshot, close_option, connect, load_credentials
from orb.ledger_writer import consecutive_losses, daily_pnl_from_equity, session_start_equity, write_ledger
from orb.occ import build_symbol
from orb.risk_gate import compute_contracts, required_buying_power, risk_gate
from orb.strategy_orb import atm_strike, trade_day

CT = ZoneInfo("America/Chicago")


def _today() -> str:
    return datetime.now(CT).date().isoformat()


def task_scan() -> int:
    try:
        creds = load_credentials()
        client = connect(creds)
        snap = account_snapshot(client)
    except CredentialError as exc:
        print(str(exc))
        return 1
    equity = session_start_equity(snap["equity"], _today())
    write_ledger({"action": "SCAN", "equity": equity, "paper": creds.paper})
    print(f"SCAN equity={equity}")
    return 0


def task_execute(spy_price: float, option_price: float, right: str) -> int:
    when = datetime.now(CT).date()
    if not trade_day(when):
        write_ledger({"action": "SKIP", "reason": "DAY_FILTER"})
        print("SKIP DAY_FILTER")
        return 0
    try:
        creds = load_credentials()
        client = connect(creds)
        snap = account_snapshot(client)
    except CredentialError as exc:
        print(str(exc))
        return 1
    start = session_start_equity(snap["equity"], _today())
    pnl = daily_pnl_from_equity(snap["equity"], start)
    contracts = compute_contracts(snap["equity"], option_price)
    needed = required_buying_power(option_price, contracts)
    ok, reason = risk_gate(
        snap["buying_power"],
        needed,
        pnl,
        consecutive_losses(_today()),
        0,
    )
    if not ok:
        write_ledger({"action": "SKIP", "reason": reason})
        print(f"SKIP {reason}")
        return 0
    symbol = build_symbol("SPY", when, right, atm_strike(spy_price))
    if os.environ.get("ORB_SUBMIT") != "1":
        write_ledger({"action": "WOULD_BUY", "symbol": symbol, "qty": contracts, "limit": option_price})
        print(f"WOULD_BUY {symbol} qty={contracts}")
        return 0
    order = client_submit(client, symbol, contracts, option_price)
    write_ledger({"action": "ORDER_SENT", "symbol": symbol, "qty": contracts, "id": str(getattr(order, "id", ""))})
    print(f"ORDER_SENT {symbol}")
    return 0


def client_submit(client, symbol: str, qty: int, limit_price: float):
    from orb.alpaca_adapter import submit_long_limit

    return submit_long_limit(client, symbol, qty, limit_price)


def task_flatten() -> int:
    if os.environ.get("ORB_SUBMIT") != "1":
        write_ledger({"action": "FLATTEN_SKIPPED", "reason": "NOT_ARMED"})
        print("FLATTEN_SKIPPED")
        return 0
    try:
        creds = load_credentials()
        client = connect(creds)
        positions = client.get_all_positions()
    except CredentialError as exc:
        print(str(exc))
        return 1
    closed = 0
    for position in positions:
        symbol = str(position.symbol)
        if symbol.startswith("SPY") and len(symbol) >= 16:
            close_option(client, symbol)
            write_ledger({"action": "EOD_FLATTEN", "symbol": symbol})
            closed += 1
    print(f"FLATTEN closed={closed}")
    return 0


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--task", required=True, choices=("scan", "execute", "monitor", "flatten"))
    parser.add_argument("--spy", type=float, default=0.0)
    parser.add_argument("--premium", type=float, default=0.0)
    parser.add_argument("--right", choices=("C", "P"), default="C")
    args = parser.parse_args(argv)
    if args.task == "scan":
        return task_scan()
    if args.task == "execute":
        if args.spy <= 0 or args.premium <= 0:
            print("EXECUTE_NEEDS_SPY_AND_PREMIUM")
            return 0
        return task_execute(args.spy, args.premium, args.right)
    if args.task == "flatten":
        return task_flatten()
    print("MONITOR_REQUIRES_QUOTE_STREAM")
    return 0


if __name__ == "__main__":
    sys.exit(main())
