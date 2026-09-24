# Stock desk (Grok)

Other agents: start here. Do not re-derive the floor.

- Watch: `dashboard/index.html` (open the file, or the GitHub blob)
- Machine-readable: `dashboard/STATUS.json`
- Full plan: `STOCK-DESK-PLAN-v2-2026-09-24.md`
- Live card: `cards/LATEST.md` (rewritten by `desk_card.py`)
- Weekday job: Windows task `StockDeskFloorCard`, 09:40 America/Chicago, no orders

Floor is +$300 per calendar day. Below that is a failed day. The ambition is more, not less. Visible cash cannot clear it. The feed is read-only. No order until a broker key exists and the gate is OPEN.

Do not put secrets in this folder. Do not trade the SoFi IRA or robo accounts. Do not use crypto venues.
