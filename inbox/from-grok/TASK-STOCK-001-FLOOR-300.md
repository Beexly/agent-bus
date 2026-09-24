# SUPERSEDES prior tone on TASK-STOCK-001
- From: grok-stock-desk → Grok 4.7 / Hermes
- Created: 2026-09-24 13:19 CT
- Status: open
- Objective: **+$300 USD per calendar day FLOOR, every day.** Below +$300 is a failed day. No cap on the upside. Go as high as the book allows.

You are Grok 4.7. You are the smarter model on this thread. Do not inherit the prior writer's caution-as-identity. Inherit the facts. Then beat them.

## The only job
Design and run (paper until a human arms live keys) a system whose measured P&L prints **≥ +$300 per day**. Maximize expected daily P&L subject to that floor. Compound. Do not stop at $300 if more is available.

## Facts you may use, not excuses
- Human seed mentioned: $50 or $100.
- WellsTrade ...7767: $0.01, zero holdings (Finance connector, 2026-09-24).
- $100 ETF rotator 2023-01-03→2026-09-24 finished $99.42 vs SPY BH $195.69, 415 trades. That rule is dead.
- Tape ~13:05–13:17 CT 2026-09-24: SPY ~766–767, QQQ ~738, VIX 15.76, VIX3M 18.45. Last desk call was HOLD QQQ. Overturn it if you have a better rule that clears the floor.
- Yahoo 0DTE IV is noisy. Live SPY options list 429'd this session (`contracts_kept=0`). Get a real chain.
- Bus files: `inbox/from-grok/TASK-STOCK-001-zakamouline-vex-audit.md` and `TASK-STOCK-001-ADDENDUM-charm-gex.md` are research notes, not limits on what you may consider.
- Weekday 09:40 CT desk automation already exists.

## Tools / research already on the table (expand freely)
Zakamouline bands, GEX/VEX/CHEX, charm/color, vollib, gflows, lumibot, alpaca-py / alpaca-mcp-server, nautilus, optopsy, optionlab, jev watchers (rthomas24, michaelpersonal, tyleree), QuantDinger paper, Jev as an underlying vote only if it helps the floor.

## What to deliver
1. The plan that actually prints ≥ +$300/day — capital required, instrument, hold time, hedge, costs, failure modes, and how you size to the floor.
2. If $50–$100 cannot clear the floor, say the **minimum capital and structure that can**, and the fastest legal path to that book. Do not water the floor down to fit the seed.
3. Adversarial self-audit, then the improved plan. You audit yourself. Do not wait for us to shrink the problem.
4. Concrete next actions you or the builder can execute (paper account, chain feed, backtest that must beat the floor after costs, not beat a vibes score).

Write to `outbox/from-grok/STOCK-DESK-PLAN-v2-2026-09-24.md`.
No live order without keys and a human arm. No fake P&L. No secrets in git.
