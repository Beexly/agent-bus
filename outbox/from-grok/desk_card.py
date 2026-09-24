"""Weekday floor card. Reads public quotes. Writes a card. Never orders.

Gate: a 21-45 DTE SPY put vertical is sellable only when the credit
(short bid minus long ask) exceeds the Black-Scholes value of that
spread at trailing 20-day realized vol, after a 2 cent cost hurdle,
and VIX is not above VIX3M.
"""
from __future__ import annotations

import json
import math
import urllib.parse
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

HERE = Path(__file__).resolve().parent
CARDS = HERE / "cards"
UA = {"User-Agent": "gse-stock-desk-card/1.0", "Accept": "application/json"}
R = 0.045
Q = 0.012
COST_HURDLE = 0.02  # dollars per share on top of the crossed spread
WIDTH = 10.0


def get(url: str, timeout: int = 60) -> tuple[int, bytes]:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.status, resp.read()


def yahoo(symbol: str) -> dict:
    url = (
        "https://query1.finance.yahoo.com/v8/finance/chart/"
        + urllib.parse.quote(symbol)
        + "?interval=1d&range=6mo"
    )
    status, raw = get(url, 30)
    result = json.loads(raw)["chart"]["result"][0]
    meta = result["meta"]
    closes = [c for c in result["indicators"]["quote"][0].get("close") or [] if c is not None]
    return {
        "http": status,
        "symbol": meta.get("symbol"),
        "price": meta.get("regularMarketPrice"),
        "time": meta.get("regularMarketTime"),
        "closes": closes,
    }


def rv20(closes: list[float]) -> float | None:
    if len(closes) < 21:
        return None
    window = closes[-21:]
    rets = [math.log(window[i] / window[i - 1]) for i in range(1, len(window))]
    mu = sum(rets) / len(rets)
    var = sum((x - mu) ** 2 for x in rets) / (len(rets) - 1)
    return math.sqrt(var) * math.sqrt(252)


def cdf(x: float) -> float:
    return 0.5 * (1.0 + math.erf(x / math.sqrt(2.0)))


def put_price(s: float, k: float, t: float, sigma: float) -> float:
    vol = sigma * math.sqrt(t)
    d1 = (math.log(s / k) + (R - Q + 0.5 * sigma * sigma) * t) / vol
    d2 = d1 - vol
    return k * math.exp(-R * t) * cdf(-d2) - s * math.exp(-Q * t) * cdf(-d1)


def put_delta(s: float, k: float, t: float, sigma: float) -> float:
    vol = sigma * math.sqrt(t)
    d1 = (math.log(s / k) + (R - Q + 0.5 * sigma * sigma) * t) / vol
    return -math.exp(-Q * t) * cdf(-d1)


def parse_option(sym: str) -> tuple[datetime, str, float]:
    i = 0
    while i < len(sym) and not sym[i].isdigit():
        i += 1
    yymmdd = sym[i : i + 6]
    exp = datetime(2000 + int(yymmdd[0:2]), int(yymmdd[2:4]), int(yymmdd[4:6]), tzinfo=timezone.utc)
    return exp, sym[i + 6], int(sym[i + 7 :]) / 1000.0


def bill_menu(discount_yield: float) -> dict:
    days = 91
    disc = 100.0 * discount_yield * days / 360.0
    price = 100.0 - disc
    per_day = disc / days
    out = {"discount_yield": discount_yield, "days": days, "price_per_100": round(price, 4)}
    for target in (300, 450, 600, 1000):
        hundreds = target / per_day
        out[f"face_for_{target}"] = round(hundreds * 100, 0)
        out[f"cash_for_{target}"] = round(hundreds * price, 0)
    out["extra_dollars_per_day_per_1m_face"] = round(10000 * per_day, 2)
    return out


def main() -> int:
    now = datetime.now(timezone.utc)
    card: dict = {
        "generated_at_utc": now.isoformat(),
        "orders": 0,
        "underlying": "HOLD",
    }
    tape = {}
    for sym in ("SPY", "QQQ", "^VIX", "^VIX3M", "^IRX"):
        try:
            tape[sym] = yahoo(sym)
        except Exception as exc:  # noqa: BLE001
            tape[sym] = {"error": f"{type(exc).__name__}: {exc}"[:240]}
    spy = tape.get("SPY") or {}
    closes = spy.get("closes") or []
    realized = rv20(closes) if closes else None
    card["tape"] = {
        k: {kk: vv for kk, vv in v.items() if kk != "closes"} if isinstance(v, dict) else v
        for k, v in tape.items()
    }
    card["spy_rv20"] = realized
    irx = (tape.get("^IRX") or {}).get("price")
    if isinstance(irx, (int, float)) and irx > 1:
        card["bills"] = bill_menu(float(irx) / 100.0)
    elif isinstance(irx, (int, float)) and irx > 0:
        card["bills"] = bill_menu(float(irx))

    vix = (tape.get("^VIX") or {}).get("price")
    vix3m = (tape.get("^VIX3M") or {}).get("price")
    contango = isinstance(vix, (int, float)) and isinstance(vix3m, (int, float)) and vix <= vix3m
    card["vix_contango"] = contango

    s = spy.get("price")
    spreads: list[dict] = []
    chain_error = None
    try:
        status, raw = get("https://cdn.cboe.com/api/global/delayed_quotes/options/SPY.json", 90)
        payload = json.loads(raw)
        data = payload["data"]
        if data.get("current_price"):
            s = float(data["current_price"])
        opts = data["options"]
        card["chain"] = {
            "http": status,
            "bytes": len(raw),
            "n": len(opts),
            "cboe_timestamp": payload.get("timestamp"),
            "spot": s,
        }
        puts = []
        for o in opts:
            try:
                exp, right, k = parse_option(o["option"])
                if right != "P":
                    continue
                t = (exp - now).total_seconds() / (365.25 * 24 * 3600)
                dte = t * 365.25
                if not (18 <= dte <= 50):
                    continue
                iv = float(o.get("iv") or 0)
                if iv > 3:
                    iv = iv / 100.0
                bid = float(o.get("bid") or 0)
                ask = float(o.get("ask") or 0)
                if bid <= 0 or ask <= 0 or iv <= 0.02:
                    continue
                puts.append(
                    {
                        "exp": exp.date().isoformat(),
                        "k": k,
                        "t": t,
                        "dte": dte,
                        "iv": iv,
                        "bid": bid,
                        "ask": ask,
                        "oi": float(o.get("open_interest") or 0),
                    }
                )
            except Exception:
                continue
        if isinstance(s, (int, float)) and realized and realized > 0:
            for short in puts:
                delta = put_delta(float(s), short["k"], short["t"], short["iv"])
                if not (0.20 <= abs(delta) <= 0.35):
                    continue
                wing = None
                best_gap = 0.51
                for leg in puts:
                    if leg["exp"] != short["exp"]:
                        continue
                    gap = abs(leg["k"] - (short["k"] - WIDTH))
                    if gap < best_gap:
                        best_gap = gap
                        wing = leg
                if wing is None:
                    continue
                credit = short["bid"] - wing["ask"]
                if credit <= 0.05:
                    continue
                fair = put_price(float(s), short["k"], short["t"], realized) - put_price(
                    float(s), wing["k"], short["t"], realized
                )
                edge = credit - fair
                spreads.append(
                    {
                        "exp": short["exp"],
                        "short_k": short["k"],
                        "long_k": wing["k"],
                        "dte": round(short["dte"], 1),
                        "short_delta": round(delta, 3),
                        "credit": round(credit, 2),
                        "fair_at_rv20": round(fair, 3),
                        "edge_per_share": round(edge, 3),
                        "edge_per_day": round(edge * 100 / short["dte"], 2),
                        "max_loss": round((WIDTH - credit) * 100, 2),
                        "short_oi": short["oi"],
                        "long_oi": wing["oi"],
                    }
                )
    except Exception as exc:  # noqa: BLE001
        chain_error = f"{type(exc).__name__}: {exc}"[:300]
        card["chain"] = {"error": chain_error}

    spreads.sort(key=lambda row: row["credit"], reverse=True)
    best = spreads[0] if spreads else None
    card["spread"] = best
    card["spreads_seen"] = len(spreads)
    gate = bool(
        best
        and contango
        and chain_error is None
        and best["edge_per_share"] > COST_HURDLE
    )
    card["gate"] = "OPEN" if gate else "SHUT"
    card["action"] = "PAPER_SELL_ALLOWED" if gate else "NO_TRADE"
    reasons = []
    if chain_error:
        reasons.append("chain_failed")
    if not contango:
        reasons.append("vix_not_in_contango")
    if not best:
        reasons.append("no_quoted_vertical")
    elif best["edge_per_share"] <= COST_HURDLE:
        reasons.append("credit_not_above_rv20_fair")
    card["gate_reasons"] = reasons

    CARDS.mkdir(parents=True, exist_ok=True)
    day = datetime.now().astimezone().date().isoformat()
    (CARDS / f"{day}.json").write_text(json.dumps(card, indent=2), encoding="utf-8")
    lines = [
        f"# Floor card {day}",
        "",
        f"- Generated: {card['generated_at_utc']}",
        f"- Orders sent: 0",
        f"- Underlying: HOLD",
        f"- Gate: {card['gate']}",
        f"- Action: {card['action']}",
        f"- Reasons: {', '.join(reasons) if reasons else 'none'}",
        "",
        "## Tape",
        "",
    ]
    for sym in ("SPY", "QQQ", "^VIX", "^VIX3M", "^IRX"):
        row = tape.get(sym) or {}
        lines.append(f"- {sym}: {row.get('price', row.get('error'))}")
    lines.append(f"- SPY RV20: {None if realized is None else round(realized, 4)}")
    if best:
        lines += [
            "",
            "## Best 10-wide put vertical",
            "",
            f"- {best['exp']} short {best['short_k']} / long {best['long_k']}, {best['dte']} DTE",
            f"- Credit {best['credit']} vs fair at RV20 {best['fair_at_rv20']}",
            f"- Edge per share {best['edge_per_share']}, per day {best['edge_per_day']}",
            f"- Max loss {best['max_loss']}",
        ]
    if card.get("bills"):
        b = card["bills"]
        lines += [
            "",
            "## Bill menu (discount formula, not a dealer offer)",
            "",
            f"- IRX used as discount yield {b['discount_yield']}",
            f"- Cash for $300/day: {b['cash_for_300']}",
            f"- Cash for $600/day: {b['cash_for_600']}",
            f"- Extra $ per day per $1M face: {b['extra_dollars_per_day_per_1m_face']}",
        ]
    text = "\n".join(lines) + "\n"
    (CARDS / f"{day}.md").write_text(text, encoding="utf-8")
    (CARDS / "LATEST.md").write_text(text, encoding="utf-8")
    print(card["gate"], card["action"], "spot", s, "spread", best["credit"] if best else None, "edge", best["edge_per_share"] if best else None)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
