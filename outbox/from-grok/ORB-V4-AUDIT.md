# ORB v4 audit, 2026-09-24

The pasted plan stopped at section 2.3. This file checks that text. It does not place an order. Options Cafe's 303-trade figure was not re-run here. Alpaca's missing 0DTE Greeks match Alpaca staff on their forum (Black-Scholes divides by zero when time to expiry is zero). Public options bots on Alpaca exit with `close_position()`, not a broker stop. Treat both as constraints until a live key proves the current docs.

## Where v4 is right

- Long ATM 0DTE is not the bull-put backtest. Do not cite 91.7% for this book.
- Do not read Greeks from Alpaca on expiry day. ATM from the underlying price avoids that.
- Do not send a stop order and assume the broker will hold it. The process must watch the quote and call a close.
- A fill is open only when `filled_qty` covers the order and `filled_avg_price` is positive. Paper's partial fills are real.
- One breakout, one trade. The simplest rule is the one the cited backtest says won.
- Tuesday and Thursday are a filter only if that backtest is accepted. It was not re-measured here.

## Where v4 still misses $300

Cited stats, used as given, not re-measured: win rate 41.25%, payoff 1.99 (average win divided by average loss).

Expectancy per trade = `0.4125 × 1.99 − 0.5875 = 0.233` loss-units.

Their dollar figures are 2.046% of the premium paid:

| Premium paid | Their expectancy |
|---|---|
| $500 | $10.23 |
| $2,000 (2% of $100,000) | $40.92 |

One trade per day, and only Monday, Wednesday, Friday, is about three trades a week, not seven or eight.

| What you average | At $2,000 premium |
|---|---|
| Per trade | $40.92 |
| Per weekday, if you also traded Tue and Thu | $29 |
| Per calendar day, MWF only | about $18 |

$300 is not in that table.

To make the **average** calendar day $300 at their expectancy, MWF only, the premium paid each trade is about **$34,000**. At a 2% cap that is a **$1.7 million** account. One trade every weekday, ignoring their own filter, still needs about **$14,700** of premium per trade, a **$733,000** account at 2%.

That is an average. A 41% win rate means about six trade-days in ten lose. A −50% stop on a $34,000 premium is a **$17,000** down day. If the process dies before the close, the long 0DTE can go to **zero**, and the loss is the whole premium, not half of it. The every-day floor is still not what this strategy pays. The average can be sized toward $300. The floor cannot, not with a coin-flip win rate.

## Two execution gaps the paste still has

1. The time stop at 15:30 ET may be after Alpaca stops taking the order. Public notes put the broad-ETF cutoff near 15:15 ET, with a later auto-liquidation. Flatten by 15:00 ET, on a timer that does not depend on the quote stream being up.
2. A client-side stop is down when the PC is down. The halt has to be a second process, or the position is not protected. There is still no server-side stop.

## What this desk can run today

No Alpaca key is in the environment. The feed shows about $6 of settled cash. One SPY option contract is priced in hundreds of dollars. `desk_runner.py` already exits `BLOCKED_NO_KEY`. This strategy does not change that.

Do not turn the runner live on this plan until three things exist: a key, an account large enough for the row in the table above, and our own paper fills, because the 303-trade study was not repeated here.
