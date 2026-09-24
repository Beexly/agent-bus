# TASK-STOCK-001: Grok 4.7 / Hermes adversarial pass on the stock desk
- From: grok-stock-desk → motif + hermes/opencode (Grok 4.7)
- Created: 2026-09-24
- Status: done
- Claimed: Grok 4.7, 2026-09-24
- Result: outbox/from-grok/STOCK-DESK-PLAN-v2-2026-09-24.md
- Audit verdict: IMPROVE. Leland k is not Zakamouline K. Charm -0.198 does not match Haug. No flip strike on the live chain.
- Lane: STOCK. Not GSE. Not Origin. Not sports.

## Job
1. Write a plan for a paper-only QQQ/SPY desk that can be armed after a human green light.
2. Adversarial-audit that plan. Attack every assumption. Output HOLD / IMPROVE / CLEAR with evidence.
3. Rewrite the plan after the audit. Do not ship live orders.
4. Explore Zakamouline bands + VEX. Implement or correct the calculator if the formulas below are wrong versus Zakamouline 2006 QF / 2009 IJTAF / Sinclair Volatility Trading ch. on hedging.

## Hard constraints
- Paper first. Alpaca paper is the venue. WellsTrade ...7767 is $0.01 / 0 holdings. No live stock or option order.
- No 0DTE. No PDT day-trading of US stocks under $25k. No crypto. No wallet keys. No secrets in git.
- Jev may vote buy/sell/hold on the underlying only. Jev does not pick strikes or size.
- $300/day is a target, not a claim. A $100 rotating ETF book 2023-01→2026-09 finished $99.42 vs SPY BH $195.69 (415 trades). Overtrading lost.
- Do not touch Stripe, Origin offers, GSE, or Sports engine files.

## Facts already measured (2026-09-24 ~13:05 CT)
- SPY 765.79 / QQQ 737.93 / VIX 15.76 / VIX3M 18.45
- Regime: large-cap risk-on, IWM/HYG/TLT/GLD weak. Paper action: HOLD QQQ.
- 0DTE SPY 766 call 1.31-1.32, put 0.68-0.69. Yahoo 0DTE IV is garbage. Do not price off it.
- Weekday 09:40 America/Chicago automation `Stock desk weekday open` is live. Next run 2026-09-25 09:40 CT.

## Zakamouline implementation used today (attack this)
Sinclair / sweliam style, not claimed as a line-by-line 2006 reprint.

- lambda = proportional TC, tc = lambda * spot * |shares|
- gamma_ra = risk aversion (NOT BS gamma). Higher => tighter bands.
- k = sqrt(2/pi) * lambda / (sigma * sqrt(T))   # Leland
- sigma_m = sigma * sqrt(1+k) if long option else sigma * sqrt(1-k)
- h0 = lambda / (gamma_ra * S * sigma^2 * T)
- h1 = 1.12 * lambda^0.31 * T^0.05 * (exp(-rT)/sigma)^0.25 * sqrt(|Gamma_BS| / gamma_ra)
- bands around delta(sigma_m): [d_m - (h0+h1), d_m + (h0+h1)]
- Hedge TO THE NEAREST BAND, not to 0. If delta = -0.70 and lo = -0.55, buy 15 shares/contract, stop at the band.
- WW 1997 half-width kept as a comparator: (1.5 * e^{-rT} * lambda * S * Gamma^2 / gamma_ra)^(1/3)

Worked 30DTE ATM call, S=K=766, sigma=0.16, lambda=5bps, gamma_ra=1:
- delta_bs 0.526, gamma 0.0113, vanna 0.053, charm_call -0.198
- width 0.016 (h0 0.00031 + h1 0.016). WW half-width 0.042 (looser).
- If short-call delta marked 0.70: SELL ~16 shares/contract to 0.542 (nearest high band).

## VEX used today (attack this)
Vanna = exp(-qT) n(d1) d2 / sigma
Toy VEX_i = vanna_i * OI_i * 100 * S * 0.01 * dealer_sign
dealer_sign = -1 means assume dealers short that contract (customer long).
Toy net VEX on 760/766/780 with fake OI was +1.17e6. That number is NOT market data. Real VEX needs a full chain + a dealer-sign convention that is written down and held fixed.

GEX / VEX / CHEX reading:
- +GEX above flip: dealers buy dips / sell rips (pin).
- VEX: IV crush after an event can force dealer stock buys (vanna rally) if they were short puts.
- CHEX: overnight and late-day delta drift from charm. 0DTE ATM charm is why a 10:00 hedge is wrong at 15:30.

## Repos to use / audit, not clone-spam
Must-read: sweliam/zakamouline, nisgemML/options-market-maker (band/periodic/Zakamouline triggers), aaguiar10/gflows, vollib/vollib, jasonstrimpel/volatility-trading, goldspanlabs/optopsy, Lumiwealth/lumibot, alpacahq/alpaca-py, alpacahq/alpaca-mcp-server, rthomas24/jev-realtime-trading, michaelpersonal/jev-trade-cc, tyleree/jevbot, YichengYang-Ethan/0dte-strategy (research only).
Skip live: OctoBot, AutoHedge, aowang-ai/jev-trade, MoneyPrinterTurbo.

## Acceptance criteria
- [x] Plan v2 after audit, paper-only until a human arms live keys.
- [x] Audit verdict IMPROVE. Broken assumptions are in the plan.
- [x] Corrected Zakamouline formulas with citations.
- [x] VEX spec: dealer-sign rule, units, toy figure rejected.
- [x] Kill list.
- [x] No live order. No secret. No second product.

## Deliverable path
Write the result to `outbox/from-grok/STOCK-DESK-PLAN-v2-2026-09-24.md` (or from-opencode if Hermes is the builder). Keep this task file Status updated.
