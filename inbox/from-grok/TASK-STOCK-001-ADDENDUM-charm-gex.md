# ADDENDUM 2026-09-24 13:16 CT — charm + GEX for TASK-STOCK-001

Read with TASK-STOCK-001. Full packet also at conversation artifact `STOCK-DESK-HANDOFF-GROK-47.md`.

## Charm
Charm = dDelta/dt. OTM deltas decay to 0, ITM march to ±1, ATM is the knife into the close.
Weekend = ~3 calendar days of charm and 0 trading hours. Friday close delta is not Monday open delta.
Color = dGamma/dt. Short-dated ATM gamma dies fast; a morning Zakamouline width is stale by afternoon.

BS surface this session (σ=16%, S=767.23), no OI:
- ATM 1-DTE gamma 0.062 vs 21-DTE ATM gamma 0.0135 (ratio 4.6).
- ATM 1-DTE vanna small. Vanna is a wing + longer-T object.
- Do not run a 0DTE charm book.

## GEX
Intended map: GEX_i = Γ_i * OI_i * 100 * S² * 0.01 * s_dealer with s_dealer=−1 (customer long).
Always publish all-expiry GEX and ex-0DTE GEX. Flip = cumulative customer GEX cross walking strikes up.

Live SPY chain **failed** this pass: yfinance `ticker.options == []` (HTTP 429). File `spy-gex-chex-2026-09-24.json` has contracts_kept=0. Do not invent a flip strike.
First job after claiming: get a chain (Alpaca paper options / IB). Then emit walls + flip + CHEX by expiry bucket.

## Still in force
HOLD QQQ. Paper only. WellsTrade $0.01 / 0 positions. Rotator $99.42 vs SPY BH $195.69. Jev = underlying vote only.
