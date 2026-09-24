# STOCK DESK PLAN v2, 2026-09-24

Watch the desk at `outbox/from-grok/dashboard/index.html`. Machine-readable state is `dashboard/STATUS.json`. Agents start at `outbox/from-grok/README.md`.

- From: Grok 4.7
- Task: `inbox/from-grok/TASK-STOCK-001-FLOOR-300.md` (supersedes the earlier tone)
- Audit input: `TASK-STOCK-001-zakamouline-vex-audit.md`, `TASK-STOCK-001-ADDENDUM-charm-gex.md`
- Verdict: **IMPROVE.** Then this plan.
- Live orders: none. Paper until a human arms keys.
- Account check this session: WellsTrade mask 7767, balance **$0.01**, no holdings used.

+$300 is the floor. A day under $300 is a failed day. The desk does not stop at $300. It compounds above it. The seed cannot clear the floor. Selling today's hedged put spread would make the expected day worse, not better. The book that can clear the floor, and the only honest way to push past it on this tape, is below.

## 1. The objective, stated so it can be run

Maximize expected dollars per calendar day after costs, subject to a floor of +$300.

Two different sentences hide inside that:

1. **Expectation.** E[dollars per calendar day] ≥ 300, and as far above 300 as the funded book can support without spending the floor.
2. **Scoreboard.** Any marked day under +$300 is a failed day. It is logged. It is not a reason to lever up the next morning.

No traded book of finite Sharpe prints +$300 of mark-to-market on every calendar day. Daily index volatility is about 70 basis points. Daily equity drift is about 4 basis points if you assume a 10% year, and that 10% is an assumption, not a print. Half a quiet day of noise is larger than a year of drift divided by 252. Adding capital moves the mean. It does not turn a 70 bp day into a 4 bp day. The hit rate on "today's mark ≥ $300" stays near a coin flip for any long-equity book sized so that $300 is the mean.

The structure that actually contracts the floor is the one whose cash flow does not depend on today's tape: Treasury bills held to maturity. The structure that pushes **above** the floor is extra bill face, plus a separate growth sleeve that is allowed to open only when the live chain pays more than a realized-vol fair value **after** the hedge. That sleeve is flat today.

## 2. Seed arithmetic. $50 and $100 are not a book.

| Book | One day | What $300 would require |
|---|---|---|
| $100 of QQQ at 740.63 | 0.135 shares. A 1% day is about $1. | +300% in a day |
| $100 of SPY at 767.76 | same shape | +300% in a day |
| One SPY option contract | multiplier 100. A $1.00 option costs $100 and can lose $100. | A repeatable $300 day, which a single defined-risk contract does not have |

WellsTrade ...7767 is $0.01. It cannot buy one share of QQQ or one SPY contract. **HOLD QQQ stands for that account.** Overturning it does not create $300. The dead rotator stays dead: $100 from 2023-01-03 to 2026-09-24 finished $99.42 against SPY buy-and-hold $195.69 across 415 trades. That rule is not resized. It is not rerun.

Pattern day trader: no same-day stock round trip under $25,000. This plan does not day-trade shares. The bill sleeve is held to maturity. The option sleeve, when it is on, is opened and held. It is not closed the same day.

## 3. Tape and chain actually read

Yahoo chart, `regularMarketTime` 1790274485 = 2026-09-24 18:28:05 UTC (13:28 CT):

| Symbol | Last | 20-day realized vol |
|---|---|---|
| SPY | 767.759 | 10.84% |
| QQQ | 740.63 | 16.22% |
| VIX | 15.73 | not a tradable RV |
| VIX3M | 18.43 | term structure in contango |

`chartPreviousClose` on a 6-month Yahoo range is the start of the window, not yesterday. It is not used.

CBOE delayed chain, public CDN `https://cdn.cboe.com/api/global/delayed_quotes/options/SPY.json`:

- HTTP 200, 5,790,871 bytes, stamp `2026-09-24 18:28:34`, `current_price` 766.74
- 13,028 contracts listed, 8,419 with positive open interest used in the greek sum
- CBOE gamma and a Black-Scholes gamma from CBOE's own IV agree within about 3% on the 16 Oct 764/765/766 strikes. The dollar figures below use the BS gamma. They are not a vendor GEX print.

Dealer signs, held fixed:

- **Customer-long:** dealers short calls and short puts. Sign = −1 on every contract. Dollar gamma per 1% move = Γ × OI × 100 × S² × 0.01 × sign.
- **Squeeze:** dealers long calls (+1) and short puts (−1). This is the only one of the two that can cross zero.

Measured on this snapshot, S = 766.82 on the first pass:

| Quantity | Value | What it is |
|---|---|---|
| Customer-long GEX | −$43.80B per 1% | whole SPY book |
| Same, excluding under 1.5 days | −$36.53B per 1% | 0DTE-ish stripped |
| Squeeze GEX | −$2.58B per 1% | calls and puts opposite |
| Customer-long VEX | +$588M per +1 vol point | vanna × OI × 100 × S × 0.01 × sign |
| Customer-long CHEX | −$4.88M per calendar day | charm per year ÷ 365.25, same sign, times shares times S |

Vanna used: e^(−qT) n(d1) d2 / σ, with the sign that falls out of d2. Units are dollars of underlying per +1.00 vol point (0.01 in decimal vol), not per 1% of vol.

**No flip strike is published.** Under customer-long the sum is negative at every strike, so a cumulative walk cannot cross zero. That sign convention cannot have a flip. Under squeeze, inside ±$80 of spot, the cumulative walk was still about −$1.9B at the top of the window and about −$11.2B at 766. It did not cross zero. The toy VEX of +1.17e6 on three strikes with made-up open interest is not a market number and is not traded.

VIX 15.73 versus SPY RV20 10.84% is a 4.9 point gap on the index. VIX3M 18.43 above VIX is contango, which is the calm regime, not a stress regime. The gap is not yet an edge in the structure we can hedge. Section 5 shows why.

## 4. Zakamouline audit

Citation for the fitted band: Zakamouline, "Efficient analytic approximation of the optimal hedging strategy for a European call option with transaction costs," Quantitative Finance 6(5), 435–445, 2006. The coefficients below are the ones Sinclair prints and `sweliam/zakamouline.py` implements (`getH0`, `getH1`, `getK`). They are a numerical fit to the Hodges-Neuberger utility hedge, not a theorem.

λ = proportional cost, so cost = λ × S × |shares|. γ = risk aversion, not Black-Scholes gamma. Γ = Black-Scholes gamma.

```
H0 = λ / (γ S σ² T)
H1 = 1.12 λ^0.31 T^0.05 (e^(−rT) / σ)^0.25 (|Γ| / γ)^0.5
K  = −4.76 (λ^0.78 / T^0.02) (e^(−rT) / σ)^0.25 (γ S² |Γ|)^0.15
σ_m² = σ² (1 + K)   if long the option
σ_m² = σ² (1 − K)   if short the option
band = delta(σ_m) ± (H0 + H1)
```

K is negative. Long options get a **lower** modified vol. Short options get a **higher** one. Hedge to the nearest band, not to flat delta.

Whalley-Wilmott 1997 half-width, the looser comparator:

```
(1.5 e^(−rT) λ S Γ² / γ)^(1/3)
```

Leland 1985 is a different adjustment. His k uses the **rehedge interval** δt, not expiry T:

```
k = sqrt(2/π) λ / (σ sqrt(δt))
```

The prior desk put T in that slot and centered the band on Leland instead of on K. H0 and H1 themselves were right.

Recompute of their worked example (S = K = 766, σ = 0.16, T = 30/365, r = 0, λ = 5 bp, γ = 1), long call:

| Piece | Prior note | Recomputed |
|---|---|---|
| Gamma | 0.0113 | 0.01135 |
| Delta at r = 0 | 0.526 | 0.509 (0.526 needs a rate near 4%, not zero) |
| H0 + H1 | 0.016 | 0.01609 |
| WW half-width | 0.042 | 0.042 |
| Leland k using T | (they used this) | 0.0087 |
| Zakamouline K | not used | −0.0789 |
| σ_m long, from K | not used | 0.154 |
| Charm, Haug, per year | −0.198 | −0.0556 |

Charm at r = 0, q = 0, ATM, reduces to −n(d1) σ / (4 √T) ≈ −0.056 per year, about −0.00015 of delta per calendar day. Their −0.198 is not this formula. Do not hedge off it. A morning band is recomputed when spot, vol, or T moves. It is not a 10:00 order left up until 15:30.

Same formulas on the live 30-day ATM call, S = 766.82, IV taken from the rich 16 Oct put near the money (12.53%), λ = 5 bp, γ = 1, r = 4.5%: half-width 0.0194, K = −0.0868, band on the modified-vol delta about 0.530 to 0.569.

Zakamouline is a hedge of an option with shares. The vertical's long wing is already the hedge. This desk does not also sell shares against it. Under $25k that stock hedge would be the day-trade we are not doing. Above the funded floor, a naked short is still not share-hedged inside the band. The wing, or no trade, is the hedge.

## 5. Today's chain does not pay us to sell the hedge

16 Oct 2026, about 21.2 calendar days, S = 766.74, r = 4.5%, q = 1.2%. Quotes are the CBOE bid and ask. Fair values are Black-Scholes at SPY's trailing 20-day realized vol, 10.84%, flat across strikes. That flat-vol model ignores the crash skew on purpose: it is the hurdle, not a forecast.

10-wide put vertical, short the ~30 delta, long $10 lower. Best credit in the sample:

- Short 756 put, bid 5.29 / ask 5.32, IV 13.95%, OI 2,296, model delta about −0.31
- Long 746 put, bid 3.46 / ask 3.49, OI 2,330
- Credit if we sell the bid and buy the ask: **$1.80** ($180 max profit)
- Buying power: **$820** per spread. Max loss $820.
- Black-Scholes value of that same spread at 10.84% flat vol: **$1.98**

We would be paid $1.80 for something the quiet-vol model says is worth $1.98. The short is minus $0.18 a share, about **−$18 a contract over the life, −$0.87 a day**, before any extra fee. Thirty-six of those spreads, which is what it takes to make the *full credit* look like $300 a day if every one expires worthless and the credit accrues in a straight line, is about −$31 a day of model value and $29,520 of max loss, all on one index. That is a theta costume on a negative edge. It is off.

The naked 756 put is the other way around. Bid $5.29 versus a 10.84% flat-vol value of $3.28. Selling the bid is **+$2.02 a share, about +$201 over 21 days, +$9.50 a day per contract**, if the next 21 days realize 10.84% and the put is held, and if the left tail does not show up. The wing is what deletes the edge: the 746 put is rich to the flat vol, so buying it costs more than the quiet model allows.

Thirty-two naked 756 puts would be about +$304 a day of that model edge. Assignment notional is 32 × 756 × 100 ≈ **$2.42M**. A drop from 756 to 650 is about $10,100 a contract after the premium, about **$322,000** on 32 lots. That is more than a thousand floor-days. The model edge is real against trailing realized vol. The sizing that "hits $300" with it spends the floor on one stress week. We do not put that on.

Call this the gate, and keep it:

> Sell premium only when the **hedged** price we can actually deal is above the flat realized-vol value by more than round-trip costs. Naked premium is a research number, not a position, until the max loss of the sleeve is prepaid by capital that is not the floor.

Today the gate is shut. VIX in contango does not open it.

## 6. The book

Two sleeves. They do not share cash. The growth sleeve is not allowed to margin the floor sleeve.

### Floor sleeve: this is the $300, not the ambition

13-week bills, priced off the discount convention, not off a dealer offer we did not request.

Yahoo `^IRX` 4.068 at 2026-09-24 18:16 UTC. Treated as a discount yield. For a 91-day bill:

```
discount per $100 face = 100 × 0.04068 × 91/360 = $1.0283
price = $98.9717
accretion per calendar day per $100 face = 1.0283 / 91 = $0.01130
```

Face that accretes **$300 per calendar day**, if held and if the rate stays the purchase rate: **$2,654,867 face**, cash about **$2,627,567**.

That is the minimum capital that clears the floor without a forecast. It is an estimate from the discount formula. A live Treasury offer will differ by a few cents per hundred. Rebuild the face from the offer before anyone buys.

Mark-to-market is not the accrual. Duration of a 91-day bill is about 0.25 year, so 1 bp is about $66 on this face, and 50 bp is about $3,300. A rate-up day can mark the account under $300 even while the held-to-maturity accretion is intact. The floor is the accretion of bills we do not sell. We do not sell them to "fix" a mark.

Ladder: four bills, one maturing each month-ish inside the 13-week sector, so principal returns on a schedule and is rolled. No single maturity larger than half the sleeve.

### Growth sleeve: this is the push above $300

Empty today. Cash for it sits in the same kind of bills, in a separate lot, until the gate in section 5 opens.

When the gate opens, size in this order:

1. Defined-risk vertical only. 21 to 45 DTE. Short strike near 30 delta. Wing $10 wide on SPY unless the credit survives a $5 wing, which is checked, not assumed.
2. Contracts = min( edge_dollars_per_day_target / model_edge_per_contract_per_day , prepaid_loss_budget / max_loss_per_spread ).
3. Prepaid loss budget starts at **20 floor-days = $6,000**, and only if that $6,000 is growth capital, not floor capital. On today's $820 spread that is 7 contracts. They are not opened, because the model edge is negative.
4. The edge target above the floor is not capped. Raise it by raising growth capital and by taking the next vertical that clears the gate. Do not raise it by widening into naked premium inside the floor account.

Menu if the operator wants a higher **contracted** run rate and will fund it. Same IRX math, same caveat that this is not a live offer:

| Contracted accretion | Face | Cash outlay |
|---|---|---|
| $300 / calendar day | $2.65M | $2.63M |
| $450 | $3.98M | $3.94M |
| $600 | $5.31M | $5.26M |
| $1,000 | $8.85M | $8.76M |

Each extra $1M of face at this discount rate adds about **$113 per calendar day**. That is the clean compounder. It does not need a signal. It does not use Jev. It does not use the chain.

A higher ambition than the bill rate has to come from the growth sleeve on days the chain is rich after the hedge, or from more face. It does not come from the $100 rotator, from HOLD QQQ, or from 36 cheap put spreads.

### What "more" means on a day the sleeve is on

Expected day = bill accretion + model edge of the open verticals − commissions.

Commissions are small next to the spread we already crossed (sell bid, buy ask). A $0.65 per contract figure is a parameter, not a measured Alpaca schedule. At 7 spreads, 2 legs, open and close, $0.65 is about $18 a round trip over three weeks. The bid-ask is the cost that matters, and the $1.80 credit is already after it.

If the model edge per spread per day is $2 after costs, 7 spreads add $14 a day. The day is then about $314, not because we forced a theta costume, but because the chain paid for the risk. If the edge is $0, the day is the bill accretion and nothing is forced.

## 7. Hold, hedge, failure

- **Hold time, bills:** to maturity. Roll on the maturity date. No view.
- **Hold time, verticals:** to 21 DTE minimum remaining at entry, exit at 50% of the credit, or exit if the short strike is touched, whichever comes first. No same-day round trip.
- **Hedge:** the long wing. Zakamouline bands are recomputed for the residual if, later, a naked short is ever approved in the growth account. They are not a reason to trade stock against this vertical.
- **Hedge costs:** the wing premium. Today that cost is larger than the variance risk premium in the short strike. That is why the sleeve is flat.
- **Failure mode, bills:** a rate spike marks the day as failed and does not change the maturity payoff. Selling the bill turns a mark into a realized loss. Don't.
- **Failure mode, verticals:** one index gap hits every contract. They are one position. The prepaid $6,000 is the loss we already decided we can have. Past that, the sleeve is shut for the rest of the cycle.
- **Failure mode, naked puts:** a 15% drop on the 32-lot illustration is about $322k. That sleeve is not approved.
- **Failure mode, signal layer:** Jev, an LLM, or a scanner says buy or sell. That is an underlying vote. It does not pick a strike, a size, or an override of a shut gate. No vote is a HOLD, not a pass.

## 8. Kill list

The desk does nothing, and cancels an unfilled paper ticket, if any one of these is true:

1. The chain request returns no contracts, a 429, or open interest all zeros.
2. The hedged credit is less than or equal to the flat RV20 value plus costs.
3. VIX > VIX3M. Contango broke. No new short premium.
4. The order would share buying power with the floor bills.
5. Max loss of the new ticket is above the prepaid growth budget.
6. The account is under $25,000 and the order is a stock day trade.
7. Anyone asks for a live order and the human arm is off.
8. A number in the ticket cannot be pointed at the chain file, the IRX print, or the formula in this note.

## 9. Repos. What they are for, and what they are not.

| Source | Use |
|---|---|
| `http://127.0.0.1:8766/` and `browser-use/jev-ultrafast` | Local Jev is a browser that picks a next action. It may vote buy, sell, or hold on SPY or QQQ only. It does not see strikes. A down or empty vote is HOLD. No token from that page is written here or into git. |
| `OpenBB-finance/OpenBB` | Fallback chain client if the CBOE CDN is dark. Not required today. The CDN answered. |
| `kernc/backtesting.py` | Harness for the underlying rule and for keeping the rotator dead on paper. It does not create an options edge. The next backtest has to beat **$300 a day after costs**, or it does not get growth capital. A backtest that only beats SPY buy-and-hold is not enough. |
| `OpenByteInc/QuantDinger` | Possible later paper shell. Alpaca and IBKR are in it. Its Jev filter **fails open** when the model is down, so an outage becomes an order. This desk fails closed. Do not install it, do not enable live, do not point it at the floor account. |
| `NoFxAiOS/nofx` | Crypto perps and an LLM autopilot. Out. The lane is US bills and SPY options. No crypto, no wallet, no USDC fee wallet. |
| `StockSharp/StockSharp` | Full terminal. Not the shortest path. A CBOE read and a broker ticket are enough. |
| `sweliam/zakamouline` | Formula source for H0, H1, K. Use K. Do not substitute Leland. |

Weekday 09:40 CT automation stays the clock. It logs. It does not order.

## 10. Self-audit, then what changed

First cut: sell about 36 of the 756/746 spreads so the full credit, smeared across 21 days, looks like $300 a day, on ~$30k of buying power. That cut treats a ceiling as an expectation. The chain kills it. Credit $1.80 versus fair $1.98 at the vol we just realized. Scaling a negative edge misses the floor by more, not by less.

Second cut: sell 32 naked 756 puts. The model edge against trailing RV is about +$9.50 a day each, so the floor appears inside the growth sleeve. A 15% drop is about $322k. That buys a few calm weeks with the next stress month. Rejected for the floor account. Kept as the illustration of why the wing has to be affordable before we sell.

Third cut, this plan: contract the floor with bills at the discount we can see, keep that cash unmargined, and leave the option sleeve empty until a hedged credit is actually rich. Push above $300 by adding face at about $113 a day per extra $1M, and by turning the sleeve on only when section 5 says the chain is paying us. The floor number was not reduced to fit $100.

What I could not verify, and did not invent:

- No dealer Treasury offer. Face and cash are the discount formula on Yahoo IRX 4.068.
- No historical option backtest. One chain snapshot is not a track record. The rotator result is the only multi-year P&L in the file, and it lost to buy-and-hold.
- No Alpaca fee schedule measured this session. The spread cost is measured. The $0.65 is a knob.
- Trailing 20-day RV is a quiet window. It is a hurdle, not a promise that the next 21 days realize 10.84%.
- Customer-long and squeeze GEX are our sums, not SpotGamma or SqueezeMetrics publications.

## 11. Next actions

Paper, in order. No live ticket until a human arms the account in writing.

1. **Closed 2026-09-24.** `outbox/from-grok/desk_card.py` writes the card. Windows task `StockDeskFloorCard` runs it Monday through Friday at 09:40 local, and this machine is Central time. Next run 2026-09-25 09:40. The task does not order.
2. **Closed for today, re-measured after the plan.** Card `outbox/from-grok/cards/2026-09-24.md`. Gate **SHUT**. Fresh print: SPY 767.51, QQQ 740.46, VIX 15.57, VIX3M 18.33, IRX 4.07, RV20 10.84%. Best vertical is 23 Oct 759/749, credit $2.14 versus fair $2.52, edge **−$0.38 a share, −$1.35 a day**. Action **NO_TRADE**. Underlying **HOLD**. Orders sent: 0.
3. **Open, blocked.** Twenty paper cycles cannot start while the gate is shut. Count is 0 of 20. Opening a paper short today would be a negative-edge trade. The sleeve stays off until a card prints gate OPEN.
4. **Open, human only.** Fund a brokerage that holds T-bills to about **$2.63M cash** (IRX 4.07 discount math: cash for $300/day is $2,626,263) or to the row in the menu. An agent cannot move that cash. WellsTrade ...7767 is still $0.01. Do not margin the bills. Do not point a live bot at them.
5. **Closed as a standing rule.** K, H0, H1 are in section 4. They are recomputed only if a naked short is later approved. The old charm of −0.198 stays unused.

The $0.01 account stays untouched. The floor is still $300. The way above it, on this tape, is more face, and a growth sleeve that is allowed to be flat.

## 12. Repo pass, 2026-09-24 afternoon

None of these change the capital, the chain, or the shut gate. None were installed.

| Repo | What it is | Desk decision |
|---|---|---|
| achannarasappa/ticker | Terminal Yahoo/Coinbase quote watcher | Redundant. The card already reads Yahoo. No options open interest, no bills. |
| Mathieu2301/TradingView-API | Unofficial TradingView websocket | Not used. It presents itself as the TradingView site. The public CBOE file is the chain. |
| sam72x1/Super_Stocks | Nasdaq "pivot stock" Telegram screener | Different market, different bet. Not a $300 floor. |
| anthropics/financial-services | Claude plugin of finance workflows | A prompt pack, not a broker and not capital. |
| strands-agents/harness-sdk | Agent harness | Orchestration shell. It does not price a spread. |
| superdesigndev/treg | Tool registry and credential proxy | Secret-adjacent. Not installed. Not a market. |
| TauricResearch/TradingAgents | LLM analyst committee | A vote, same class as Jev. It does not override a shut gate and it is not sized. |
| freqtrade/freqtrade | Crypto bot | Out. No crypto. |
| ccxt/ccxt | Crypto exchange clients | Out. No crypto. |
| HKUDS/Vibe-Trading | Agent trading OS with live brokers | Not installed. An agent that can send orders does not belong on the floor account. Their "no number without a source" rule is already how this desk writes. |

## 13. What is still open, on purpose

- The $2.63M bill purchase. Only a human can fund it. Until that cash is in the brokerage, the contracted floor does not exist, and no script will pretend it does.
- Paper cycles 0 of 20. The clock for that starts on the first gate-OPEN card, not on a forced trade.
- A live Treasury offer. The cash figures are the discount formula on Yahoo IRX, refreshed by the card, not a dealer bid.
- SoFi and Robinhood balances. They are not on the connected feed.

## 14. Brokers, measured 2026-09-24

Three venues are allowed. Only Wells is connected, and the new cash is not in the brokerage yet.

| Venue | Role | Measured this session |
|---|---|---|
| WellsTrade ...7767 | Floor sleeve, once funded. Bills and, later, the hedged vertical. | Balance $0.01. Holdings: none. |
| Wells checking ...4708 | Bank cash. Not a trading account. | Posted ledger −$124.66. A $3,000 inbound credit is pending (bank category: loan disbursement). Available $2,771.72 only if that credit settles. Pending card charges sit on top of the overdraft. |
| Wells savings ...2360 | Not used by the desk. | Posted −$5.00. |
| Robinhood individual ...7505 | Growth sleeve only, after cash has settled and the gate is open. Not the bill floor. Pattern-day-trader rule still applies under $25,000. Crypto ...0867 is out of this desk. | Connected 2026-09-24 19:07 UTC. Individual $0. Crypto $0. No holdings. The stated $50 deposit is not in the feed. |
| SoFi self-directed ...1332 | Same rule as Robinhood. Do not touch the IRA accounts (...4052, ...0655) or the robo account (...6428). | Connected 2026-09-24 19:10 UTC. Self-directed cash $6.02, no shares. Robo $0.03. IRA cash $1.00. Roth $0. The stated $50 deposit is not in the feed. |

Do not transfer, and do not trade, against the pending $3,000. If it posts, the checking surplus is about $2,700. At the 4.07% discount rate that accretes about **$0.30 a calendar day**. The floor is still $300. The gap is about $299.70 a day, and the cash multiple versus the $2.63M bill sleeve is still on the order of 1,000 to 1.

After the credit posts, the human move that matches the plan is a transfer from checking into WellsTrade ...7767, then a 13-week bill or a Treasury-bill ETF for that small lot only. That parks the cash. It does not clear the floor. The option gate stays shut, so none of the three brokers gets a spread. Robinhood and SoFi get a job when their balances are on the feed or stated, and only for capital that is not the floor sleeve.

Screen read, broker not named on the page: Total Value $100.01, today's change $0, priced as of 03:02 ET on 2026-09-24. Cash, no position. WellsTrade ...7767 on the feed is still $0.01, so that screen has not become buying power.

Start attempt, 2026-09-24, after the user funded $100 Wells brokerage, $50 SoFi, and $50 Robinhood. All three institutions are now connected. Visible settled cash: WellsTrade $0.01, SoFi self-directed $6.02, Robinhood individual $0. No shares anywhere. The $200 is not in the feed, so no order was sent. This link is read-only. It cannot buy. When the deposits post, $200 at a 4.07% rate accretes about $0.02 a calendar day. One share of SPY is still about $767. The option gate stays shut. The floor is still the $2.63M bill ladder.

Second repo pass, same day. None installed. The ones that actually send orders do it with a key this desk does not have: a Hyperliquid wallet (`jev-trade`, `jev-trader`), a Zerodha or Kotak session (`warrenduffer`), or a crypto exchange key (`freqtrade`, `ccxt`, `hummingbot`, `OctoBot`, `gekko`, `zenbot`, `crypto-trader`). `yfinance` is a price library we already use. `daily_stock_analysis`, `OpenStock`, `LLM-Trading-Lab`, `smart-money-concepts`, `Stock-Prediction-Models`, and `trump2cash` do not reach WellsTrade, SoFi, or Robinhood. Jev in those bots is the vote. The order is the broker key. We still have no broker key.

## 15. What the repos are for, once the filter is not "can it buy SPY today"

Every serious bot in the pile is the same six stations. The venue changes. The stations do not.

1. Data router. More than one source, next source if the first 429s.
2. Vote. A model, a rule, or both. Allowed to say hold.
3. Sizer. Code, not the model. Turns a vote into a quantity and a stop.
4. Halt. Kill file, daily loss cap, flatten time. This is what makes autonomy safe.
5. Broker adapter. The only station that can send an order. Missing key means the same binary writes a paper line.
6. Ledger. Append-only. Replay reads it and is not allowed to write the live book.

What we take from each repo, and the station it improves:

| Repo | Station | What we keep |
|---|---|---|
| jev-ultrafast | Vote, and a reader | A browser that chooses a next click. Use it on public pages when CBOE or Yahoo 429s. Do not hand it a brokerage password. Hold is a legal answer. |
| jev-trader, jev-trade | Vote plus adapter | One tick: read book, vote, quote or do nothing. Dry run when the key is empty. Their venues are Monad and Hyperliquid. The split is the lesson. Their wallets are not. |
| warrenduffer | Sizer plus halt | Best operator design in the set. Jev ranks. Code sizes. Exchange stop. Daily loss cap flattens. Kill file. Replay cannot touch the live database. First week is one share. No paper mode on their side, so we do not run their binary. We copy the governor. |
| freqtrade, OctoBot, QuantDinger | Adapter ladder | Same strategy file runs backtest, then dry run, then live. QuantDinger fails open if the model is down. Ours fails closed. |
| hummingbot, jev-trader | How the money is made | Quote a rich price. Do not predict a direction. That is already our option gate: sell the vertical only when the credit beats realized-vol fair value. Otherwise flat. |
| ccxt, StockSharp | Adapter shape | One interface, many venues. We write that interface now. The first real key, when it exists, drops in. ccxt's crypto exchanges stay unused. |
| nofx, gekko, zenbot, crypto-trader | Loop shape only | Read, decide, journal, repeat. gekko and zenbot are abandoned. The loop is already our 09:40 card. |
| yfinance, OpenBB, ticker | Data | Yahoo is source two. CBOE is source one for the chain. OpenBB is the fallback client if both fail. ticker is the idea of a position diff: alert when cash actually posts, so a chat message is not the sensor. |
| daily_stock_analysis | Data plus ledger | Several free sources in a row, a dry-run flag, and a scheduled note that arrives without anyone asking. Our card is that note. |
| TradingAgents | Vote, veto only | A committee. The risk seat can only say no. It cannot open a shut gate. |
| anthropics/financial-services | Work product | Memos, reconciliations, and a rule that a draft is not an order. We use the reconciliation idea: every morning the feed balance is tied to the ledger. Their agents are not allowed to bind risk. Same rule here. |
| LLM-Trading-Lab | Ledger | A forward-only public log. Decisions are not rewritten after the close. Stop is code. Benchmark sits next to the result. Their experiment started at $100 and measured the model. That is a research record, not a claim that $100 prints $300. |
| OpenStock | Sensor | Watchlist, alert, cron email. Finnhub and TradingView widgets. A dashboard, not a broker. Useful later as the screen. Not needed to decide. |
| backtesting.py | Halt before live | A rule has to beat the floor after costs on past data, or it does not get a key. The rotator already failed that test. |
| smart-money-concepts, Stock-Prediction-Models, Super_Stocks | Features, not orders | Order blocks, neural nets, and the "rip then collapse" screen are hypotheses. They enter the book only after a backtest clears the floor. Until then they are notes. |
| TradingView-API | Not taken | Unofficial socket that pretends to be the TradingView site. Indicators we need can be computed from prices we already have. |
| treg, strands harness | Key handling | Keys live outside the repo. A harness runs the loop. Neither one is a market. |
| trump2cash | The path we will not copy | It removed the human by calling Robinhood's private site API. That breaks on the next app change and is not a broker contract. |
| warrenduffer again, on money | Sizing math | Risk per trade is the greater of a dollar floor and a percent of capital, then capped. Applied here: the dollar floor is $300 of expected accretion from bills, and the risk percent is what the growth sleeve may lose in a day without touching that floor. |

The creative part that is still true: autonomy is the halt plus the adapter, not a smarter vote. More money is more bill face, plus a quote we only sell when it is rich. The repos do not replace either. They are the factory layout for the day a real order key exists.
