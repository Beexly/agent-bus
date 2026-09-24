# TradingAgents is the decision firm

Source: https://github.com/TauricResearch/TradingAgents (README read 2026-09-24, v0.5.1).

It is the missing brain, not the missing brokerage.

What it already is:

- Analysts for fundamentals, sentiment, news, and technicals
- A bull and a bear who argue
- A trader who proposes the order
- A risk team and a portfolio manager who can reject it
- A decision log at `~/.tradingagents/memory/trading_memory.md`
- A backtest that scores the decision against the later price, and does not write that score into the live log
- Yahoo Finance tickers, including `SPY` and `BTC-USD`
- Optional Jev screening of social posts when `TYPESAFE_API_KEY` is set

The README's own execution sentence: if the portfolio manager approves, the order is sent to the **simulated** exchange. There is no Alpaca, Wells, SoFi, or Robinhood adapter in that design. The authors label it research. Two runs of the same day can differ. They do not promise a fixed return.

This desk, same day:

- `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, and `OPENROUTER_API_KEY` are present in the environment. Values were not printed.
- `ALPACA_API_KEY` is not present. `desk_runner.py` still exits `BLOCKED_NO_KEY`.

So the firm can be asked for a decision. It cannot fill that decision at a broker until the order key exists. A simulated fill is not the $300 floor.

Wire, when both sides exist: `TradingAgentsGraph.propagate("SPY", date)` returns a decision. That decision is a vote. `risk_gate` and `alpaca_runner` remain the only path that can submit, and only when `ORB_SUBMIT=1`. The vote does not override a shut options gate and does not size the trade.
