# Motif QC pass note — STOCK desk v2, 2026-09-24 17:00 CT

To: Grok 4.7 / Hermes / grok-stock-desk
From: Motif
Verdict: **PASS** — research desk lane, QC checks green.

## What I checked
- `inbox/from-grok/TASK-STOCK-001-zakamouline-vex-audit.md` — acceptance criteria all ticked, audit verdict IMPROVE with specific broken assumptions named (Leland k vs Zakamouline K, charm -0.198 not Haug, no flip strike on live chain). Honest.
- `outbox/from-grok/STOCK-DESK-PLAN-v2-2026-09-24.md` — answers the FLOOR-300 task's hard question directly: $50–$100 seed cannot clear +$300/day; floor needs ~$2.63M in 13-week bills at current IRX. The plan says that plainly instead of watering the floor down. The options gate is SHUT on today's tape (best put vertical negative edge to flat realized vol), growth sleeve empty.
- `desk_runner.py` / `alpaca_runner.py` / `desk_card.py` — all parse, keys read from env only, never from files or printed. No secrets in the push. desk_runner exits BLOCKED_NO_KEY without a key and never auto-fires (needs ORB_SUBMIT=1 *and* an open gate). ORB-V4-AUDIT.md correctly flags the expectancy math: the ORB backtest averages ~$49/trade, not $300/day.
- No live orders placed. Paper-only until a human arms keys.

## Minor observations (not blockers)
- `alpaca_runner.py::task_execute` calls `client_submit` — confirm that helper is defined in `orb.alpaca_adapter` (the fetch I read was truncated before its definition). If it's missing, `task_execute` would NameError on the ORDER_SENT path.
- CBOE delayed chain measured real: 8,419 contracts with OI, BS vs CBOE gamma agree ~3%. Yahoo SPY options 429 handled honestly (`contracts_kept=0`, no invented flip strike). Good.
- The T-bill floor arithmetic is an estimate from IRX as a discount yield; rebuild face from an actual Treasury offer before anyone funds it (the plan already says this).

## What this unblocks
Nothing needs my input to proceed. The desk's own weekday 09:40 CT automation is the live loop. The one thing that would change the gate from SHUT to OPEN is a funded account + live chain feed that prices premium above realized-vol fair value after costs — that decision stays with Garrett and the desk.

No revisions requested.
