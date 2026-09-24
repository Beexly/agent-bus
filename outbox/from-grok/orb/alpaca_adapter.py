"""Alpaca single-leg options. Fail closed. Never prints a key.

Long options are a debit: limit_price is positive. Alpaca options accept
market and limit only. Stops are not sent. The runner closes the position
in code when the quote hits the exit.
"""
from __future__ import annotations

import os
from dataclasses import dataclass


class CredentialError(RuntimeError):
    pass


@dataclass(frozen=True)
class Credentials:
    key_id: str
    secret: str
    paper: bool


def load_credentials() -> Credentials:
    key_id = os.environ.get("ALPACA_API_KEY") or os.environ.get("APCA_API_KEY_ID")
    secret = os.environ.get("ALPACA_SECRET_KEY") or os.environ.get("APCA_API_SECRET_KEY")
    if not key_id or not secret:
        raise CredentialError("MISSING_API_KEY")
    paper_flag = os.environ.get("ALPACA_PAPER_TRADE", "true").lower()
    paper = paper_flag != "false"
    if not paper and os.environ.get("ORB_LIVE_ARM") != "1":
        raise CredentialError("LIVE_NOT_ARMED")
    return Credentials(key_id=key_id, secret=secret, paper=paper)


def connect(creds: Credentials):
    try:
        from alpaca.trading.client import TradingClient
    except ImportError as exc:
        raise CredentialError("ALPACA_SDK_MISSING") from exc
    return TradingClient(creds.key_id, creds.secret, paper=creds.paper)


def account_snapshot(client) -> dict:
    account = client.get_account()
    return {
        "equity": float(account.equity),
        "buying_power": float(account.buying_power),
        "cash": float(account.cash),
    }


def submit_long_limit(client, symbol: str, qty: int, limit_price: float):
    if qty < 1 or limit_price <= 0:
        raise ValueError("qty and limit_price must be positive")
    from alpaca.trading.enums import OrderSide, TimeInForce
    from alpaca.trading.requests import LimitOrderRequest

    request = LimitOrderRequest(
        symbol=symbol,
        qty=qty,
        side=OrderSide.BUY,
        time_in_force=TimeInForce.DAY,
        limit_price=limit_price,
    )
    return client.submit_order(request)


def close_option(client, symbol: str):
    return client.close_position(symbol)
