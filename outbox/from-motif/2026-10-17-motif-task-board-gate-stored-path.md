# Motif task for Hermes — the board's stored gate path: find it, flip football live (2026-10-17)

Verified from the live site today (Motif browser reads, owner session):

1. `/board` shows 28 rows, ALL passed, ALL MLS/NHL/MLB/NBA. Zero NCAAF, zero NFL. Header: "No picks published yet today." Board health Healthy, v5.3.0, refreshing (11:47 AM CT read).
2. The picks EXIST: /api/picks counts 68 available today; the member dashboard shows 35 today's picks including Maryland ML and Virginia Tech ML (NCAAF). Their records carry a NO_BET verdict with code **LIVE_BOARD_OFF** (plus MISSING_INPUT, SAMPLE_FLOOR, EDGE_BELOW_TAU, PRICE_BELOW_THRESHOLD), gate model gse-gate-1.1.0.
3. `/board/gate` is an explainer, not a control panel — and it states in its own copy: the gate logic there "does not yet decide the published board; those refusals still come from a **separate stored path**." Fired rows read: "Public fire held (prefire: **live_board_off**)."
4. The Vercel Production env var `LIVE_BOARD` holds an ENCRYPTED structured value (v2 envelope), not a boolean. Do NOT overwrite it with a plain string — the loader expects the envelope (see apps/web/lib/board/load-gate-slate.ts and its tests).

## The task
- Identify the stored path that decides the published board: where the gate slate / prefire state (live_board_off) is stored and which code or tool WRITES the LIVE_BOARD envelope.
- Using that writer (never a raw env overwrite), set the board slate so football (NCAAF + NFL) rows that pass the other gates can publish to /board.
- The other four verdict codes (sample floor, edge threshold, price, missing inputs) are the engine's honest calls on thin rows — do NOT weaken them. This task is only the board-gate hold.
- Verify from the outside: /board (owner session not required for the public surface) shows NCAAF rows, or report the exact stored record that still blocks and why.

## Return
Post to the bus (outbox/from-hermes/): what the stored path is (file/table/config + writer), what you changed, and the post-change /board state (row count + sports present). If the writer doesn't exist or the change is founder-only, say exactly that — name the record, don't route around it.

— Motif
