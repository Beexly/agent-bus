---
source: "smartmoney.pdf"
folder: "/CorpusRoot"
pages: 56
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6013
---

<NATIVE_REASONING>
The user has provided a source PDF (Smart Money Playbook by Edward Croft and Ben Hobson, 56 pages) and expects me to produce a response with specific XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. (This is a stock investing book, not sports betting, so easy to avoid.)
- ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-WORD DEPTH across exact XML sections.

I need to treat this as a "GSE + GSI Frontier Reasoning Foundry" task. It seems like they want a rigorous, structured analysis of the source text using these specific sections. I must cite page numbers with [PAGE N] markers and use verbatim quotes where appropriate. No fake toy equations. Use formal LaTeX with proper units and assumptions.

Let's plan each section:

### THINK_TRACE (>=400 words)
Deep multi-hop derivation and gray-zone audit.
I should analyze the book's claims:
- Director dealings: cluster buying >3 directors in 3 months -> 2% per month higher returns [PAGE 9, 14]. Half of profits in first 60 days, quarter in first 10 days [PAGE 15].
- Insider buying in small cap value stocks [PAGE 16-17], defensive sectors better than cyclicals [PAGE 17].
- Analyst recommendations are biased (only ~10% sells) [PAGE 20]. Bold vs herding revisions [PAGE 24]. Earnings revisions: top 20% net upward revisions outperformed bottom 20% by >16% annually [PAGE 26]. Post-earnings announcement drift up to 3 months [PAGE 27-28]. Earnings+sales surprises -> 5.3% over six months [PAGE 27-28].
- Institutional best ideas: top 25% highest conviction positions outperform by up to 23% annually [PAGE 9, 33]. Top 5 ideas matter; beyond top 5 underperform [PAGE 33]. Freshness, boldness, uniqueness (>70% non-overlap, only 8% overlap over 3 managers) [PAGE 34-35]. Concentrated funds (30 stocks or less) outperformed by ~4% annualised [PAGE 35]. Shared ideas across multiple funds at same firm: ~6% per year outperformance, stronger with 3+ funds, strongest with 4+ [PAGE 37]. Institutional ownership increase: top 10% largest increase outperformed bottom 10% decrease by >31% per year [PAGE 38].
- Short selling: high short interest red flag [PAGE 44]. Days to Cover = shorted shares / avg daily volume [PAGE 46]. Short squeeze Ocado case [PAGE 47-48]. Short interest + low institutional ownership = vulnerable [PAGE 48-49]. Analysts vs shorts: when heavily shorted stock highly rated by analysts, analysts wrong [PAGE 49-50]. Falling short interest = short squeeze, rally [PAGE 50, 51-52].
- Value + Momentum core; Smart Money overlay -> 23.7% annualised 1995-2008 [PAGE 54-55].

Gray zones / audit:
- Survivorship bias in studies (1994-2006 UK insider dealings, 1975-2005 Lakonishok & Lee).
- Delay in reporting holdings (13-F quarterly, delayed) means signals are stale [PAGE 32-33].
- Transaction costs not included in Giamouridis et al. 23.7% [PAGE 54-55].
- "Cluster buying" definition varies (net purchase ratio vs buyers > sellers + 2) [PAGE 14-15].
- Analyst herding vs bold revisions; career risk [PAGE 24].
- Short interest data arcane, UK spreadsheet on FCA site [PAGE 44].
- Ethical questions about copying [PAGE 39-40].

Multi-hop: Combine insider cluster buying + value/momentum + earnings surprise + institutional best ideas overlap = composite signal. But note breakdown regimes: cyclical sectors (energy/mining) worse for insider trades [PAGE 17]; high valuation stocks where insider selling matters [PAGE 12-13]; low institutional ownership + high short interest = dangerous [PAGE 48-49]; glamour stocks dangerous [PAGE 22-23].

Need >=400 words here.

### SOURCE_OPERATORS_AND_EQUATIONS
Formal LaTeX, units, page citations, breakdown.
Define operators:
- Let \( \mathcal{D}_t \) be director dealings signal at time \( t \).
- Cluster buying indicator: \( C_t = \mathbb{I}(N_{\text{buyers}}^{(3\text{m})} > 3) \).
- Abnormal return: \( R_{i,t} - R_{m,t} \).
- Claim: \( \mathbb{E}[R_{i,t} - R_{m,t} \mid C_t] \approx 2\% \text{ per month} \) [PAGE 14].
- Half-life of profit capture: \( \tau_{1/2} \approx 60 \) days, \( \tau_{25\%} \approx 10 \) days [PAGE 15].
- Earnings revision signal: \( \Delta \text{EPS}^{\text{est}}_{i,t} \). Top quintile net upward revisions vs bottom quintile: \( \Delta R \approx 16\% \text{ annualized} \) [PAGE 26].
- Post-earnings drift: \( \text{drift} \approx 3 \) months [PAGE 27-28].
- Combined earnings + sales surprise: \( \Delta R \approx 5.3\% \) over 6 months [PAGE 27-28].
- Institutional best ideas: \( \text{Tilt}_{i,f} = w_{i,f} - w_{i,\text{benchmark}} \). Top 25% highest tilt -> \( \alpha \approx 23\% \text{ annualized} \) [PAGE 33].
- Concentrated funds (\(N \le 30\)): \( \alpha \approx 4\% \text{ annualized} \) [PAGE 35].
- Firm-level shared ideas: \( N_{\text{funds}} \ge 4 \) strongest; \( \alpha \approx 6\% \text{ per year} \) [PAGE 37].
- Institutional ownership delta: \( \Delta \text{IO}_{i} \). Top 10% increase vs top 10% decrease: \( \Delta R > 31\% \text{ per year} \) [PAGE 38].
- Short interest: \( SI_i = \frac{N_{\text{short},i}}{N_{\text{outstanding},i}} \) (dimensionless, percent) [PAGE 44].
- Days to Cover: \( DTC_i = \frac{N_{\text{short},i}}{V^{\text{avg}}_{\text{daily},i}} \) (units: days) [PAGE 46].
- Short squeeze condition: price rise forces cover, positive feedback \( \frac{dP}{dt} > 0 \Rightarrow \text{buy-to-cover} \Rightarrow \frac{dP}{dt} \uparrow \).
- Value + Momentum + Smart Money overlay: \( \alpha_{\text{overlay}} \approx 23.7\% \text{ annualized} \) (1995-2008) [PAGE 54-55], transaction costs excluded.

Assumptions: semi-strong form inefficiency, public disclosure latency, no transaction costs, capacity constraints in small caps, regulatory disclosure (13-F), etc.
Breakdown regimes: cyclical sectors, high valuation, low institutional ownership + high SI, analyst herding, delayed reporting.

Need LaTeX, units, citations [PAGE N].

### RETROCAUSAL_GENEALOGY
Historical/scientific lineage & multi-week traps.
Lineage:
- Zulu Principle (Jim Slater) - CEO/FDC buying [PAGE 11].
- One Up on Wall Street (Peter Lynch) - insiders buy for one reason [PAGE 12-13].
- Giamouridis, Liodakis, Moniz (2008) SSRN 1160305 - insiders smart [PAGE 12].
- Gregory, Tharyan, Tonks (2011) - contrarians, insider trading in glamour/value [PAGE 12-13].
- Seyhun (1986) JFE - insiders' profits, costs, market efficiency [PAGE 14-15].
- Lakonishok & Lee (2001) RFS - 1 million trades 1975-2005, small cap value [PAGE 16-17].
- Womack (1996) JF - brokerage recommendations investment value [PAGE 24].
- Barber (2010) - Can investors profit from prophets? [PAGE 22].
- Jegadeesh et al. (2004) JF - Analyzing the analysts [PAGE 22].
- McKnight & Todd (2006) - European earnings revisions, >16% annual [PAGE 26].
- Jegadeesh & Livnat (2006) JAE - Revenue surprises, 5.3% [PAGE 27-28].
- Cohen, Polk, Silli (2005/2010) HBS working paper - Best ideas, top 25%, 23% [PAGE 33].
- Baks et al. (2006) - concentrated managers, 4% [PAGE 35].
- Pomorski (2009) SSRN 1108186 - best idea trades across funds, 6% [PAGE 37].
- Nofsinger & Sias (1999) JF - herding and feedback trading, 31% [PAGE 38].
- Sias, Starks, Titman (2006) JB - changes in institutional ownership [PAGE 38-39].
- Asquith, Pathak, Ritter (2005) JFE - short interest, institutional ownership [PAGE 48-49].
- Drake, Rees, Swanson (2010) TAR - prophets or bears [PAGE 49-50].
- Boehmer, Huszar, Jordan (2010) JFE - good news in short interest [PAGE 44].
- Xu (2013) - Short Squeezes [PAGE 50-51].
- James Montier / GMO - analysts lag [PAGE 21-22].
- AQR "Value and Momentum Everywhere" [PAGE 54].
- James O'Shaughnessy "What Works on Wall Street" [PAGE 54].

Multi-week traps:
- Insider signals decay: half profits in 60 days, quarter in 10 days [PAGE 15] -> multi-week trap if you enter after week 8-9.
- Earnings drift lasts up to 3 months [PAGE 27-28] -> trap if you chase after drift is priced in.
- Institutional holdings delayed quarterly (13-F) [PAGE 32] -> trap: data is stale by weeks/months.
- Best ideas portfolio outperforms month by month up to 12 months [PAGE 33-34] -> but second-third-fourth-fifth ideas decay; top 5 only.
- Short squeeze Ocado: price up 200% through year, short interest fell from 15% to <4% [PAGE 47-48] -> trap: being short into squeeze, or being long after squeeze exhausts.
- Analyst herding revisions drive ongoing drift but bold revisions have initial impact [PAGE 24-25] -> trap: following herding after initial move.

Need to frame as "retrocausal genealogy": how past academic work causally informs present signals, and where the causal chain breaks down over time (multi-week traps).

### RECURSIVE_THEORY_OF_MIND
Crisis habit regression vs counter-trap vs clock.
This is about the psychology/game theory of market participants.
- Crisis habit regression: Under stress, investors revert to heuristics. Analysts herd to consensus for job safety [PAGE 24-25]. Fund managers closet-index to avoid career risk [PAGE 33]. Short sellers face daily negative reinforcement [PAGE 42-43]. In crisis, these habits regress: analysts issue positive notes due to investment banking conflicts [PAGE 20-21, 49-50]; shorts may be forced to cover causing squeeze [PAGE 46-48].
- Counter-trap: Smart money signals exploit these regressions. Example: when analysts say buy but shorts disagree, trust shorts [PAGE 51-52, Rule 3]. Cluster buying by directors exploits market undervaluation [PAGE 12-13]. Earnings surprise exploits slow institutional reaction [PAGE 27-28].
- Clock: Time decay of signals. Insider trade half-life 60 days [PAGE 15]. Earnings drift 3 months [PAGE 27-28]. Best ideas work up to 12 months [PAGE 33-34]. Days to Cover measures unwind time in days [PAGE 46]. The "clock" is the window before signal arbitrage decays.

Theory of mind recursion:
Level 0: Company fundamentals.
Level 1: Directors/traders act on private info.
Level 2: Observers infer info from trades (insider signal).
Level 3: Analysts anticipate observer inference and may herd or issue bold revisions strategically [PAGE 24].
Level 4: Fund managers anticipate Level 3 and closet-index or make high-conviction tilts [PAGE 33-35].
Level 5: Retail/smart money follower anticipates Level 4 and copies best ideas, but latency and crowding erode alpha [PAGE 32-34, 54-55].

Crisis habit regression: under market stress, participants revert to career-protecting behavior (herding, closet indexing, analyst bullish bias), which creates predictable mispricing that smart money signals capture. Counter-trap: when everyone knows the smart money signal, it gets arbitraged away; the book admits pure insider tracking can underperform for years [PAGE 11-12]. Clock: the window closes as more participants adopt the signal.

### CROSS_LAYER_VETO_ADJUDICATION
Physical/biomechanical/weather veto proof.
This section is a bit odd for a financial text, but I need to interpret "veto" as conditions that invalidate the signal, and "cross-layer" as across different layers of analysis (fundamental, ownership, short interest, analyst). "Physical/biomechanical/weather" might be metaphorical or literal constraints.
- Physical layer: Market microstructure, liquidity, trading costs, capacity. Small cap value stocks where insider signals are strong are also hard for hedge funds to trade in size [PAGE 16-17]. This is a physical capacity constraint (market impact). Veto: if position size > available liquidity, signal invalid.
- Biomechanical layer: Human decision-making limits. Analysts suffer career risk, herding [PAGE 24]. Directors sell for personal reasons (house, tax, diversify) not signal [PAGE 12-13]. Short sellers need deep pockets, infinite loss risk [PAGE 42-43]. These are biomechanical/cognitive constraints.
- Weather layer: Macro regime, cyclical sectors. Energy and mining tied to macroeconomic factors; insider trades in cyclicals have worse returns [PAGE 17]. Exuberant markets post-2009 can stretch valuations and make short sellers wrong for protracted periods [PAGE 47-48]. Glamour stocks expensive [PAGE 22-23].

Veto adjudication rules:
1. Liquidity veto: If \( \text{position size} > \epsilon \cdot \text{ADV} \), veto (market impact).
2. Sector veto: Cyclical sectors (energy, mining) veto insider buy signals due to macro dependency [PAGE 17].
3. Valuation veto: High valuation stocks weaken insider sell signal link; but buying signals still valid especially in value [PAGE 12-13]. Actually rule: insider sells weak except high valuations; buying signals strong in value.
4. Ownership veto: High short interest + low institutional ownership = avoid [PAGE 48-49].
5. Analyst conflict veto: If analysts are bullish but short interest high, trust shorts (analyst conflict of interest) [PAGE 49-50].
6. Timing veto: If signal age > 60 days for insider trades, decayed [PAGE 15]; if holdings data delayed > 1 quarter, stale [PAGE 32].

Proof style: show that each layer independently can veto the trade. Cross-layer requires all layers to pass.

### RLVR_COUNTERFACTUAL_VETOES
3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need 3 scenarios where a counterfactual veto would have prevented a bad trade, with predictions.

Scenario 1: Blinkx short interest surge [PAGE 45-46].
- Counterfactual: Veto long position if short interest surges >2x in <1 month AND price >200p. Verifiable: short interest data from FCA, price data.
- Prediction: Stock tanks 40% in a day on Jan 30 [PAGE 45]. Veto would have avoided 40% drawdown.

Scenario 2: Ocado short squeeze [PAGE 47-48].
- Counterfactual: Veto short position if Days to Cover > threshold (e.g., >5 days) AND short interest >10% AND positive news catalyst (Morrisons deal). Verifiable: days to cover = shorted shares / ADV [PAGE 46].
- Prediction: Short squeeze drives price +200% through year; short sellers forced to cover [PAGE 47-48]. Veto prevents infinite-loss scenario.

Scenario 3: Director sell in high valuation / cyclical sector [PAGE 12-13, 17].
- Counterfactual: Veto "sell on insider selling" signal if sector is cyclical (energy/mining) OR valuation is not extreme. Verifiable: sector classification, valuation ratios.
- Prediction: Insider sells are weakly predictive except at high valuations; in cyclicals, insider trade returns are worst [PAGE 12-13, 17]. Following sell signal in cyclical would be false positive; veto preserves capital.

Need to state predictions clearly and verification method.

Word count: Need >=1000 words total across XML sections. I'll make sure each section is substantial.

Also must avoid betting lines. No spreads, totals, moneylines, odds. This is about stocks, so fine.

Let's draft carefully with [PAGE N] citations and verbatim quotes.

I need to ensure LaTeX is formal and not "toy equations". All equations should be grounded in the text claims.

Let's write.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I'll aim for roughly 200-250 words per section to exceed 1000 total, with THINK_TRACE being >400.

Let's write THINK_TRACE first (~450 words).
Include quotes:
- "When more than three directors in the previous three months have bought a stock, returns on average are 2% per month higher than the market." [PAGE 14]
- "about half of the profits are made within the first 60 days and a quarter are made in the first 10 days." [PAGE 15]
- "Insiders might sell their shares for any number of reasons, but they buy them for only one: they think the price will rise." [PAGE 12-13, quoting Peter Lynch]
- "analysts are terribly good at telling us what has just happened but of little use in telling us what is going to happen in the future." [PAGE 22, James Montier]
- "portfolios comprising the top 25% highest conviction positions held by fund managers outperformed the market by up to 23% excess annually." [PAGE 33]
- "the 10% of stocks with the largest increase in institutional ownership outperformed the 10% of stocks with the largest decrease by more than 31% per year." [PAGE 38]

Gray-zone audit: transaction costs excluded [PAGE 54-55], delayed 13-F [PAGE 32], definitional ambiguity of cluster buying [PAGE 14-15], cyclical sector underperformance [PAGE 17].

Now SOURCE_OPERATORS_AND_EQUATIONS (~200 words + equations).
Define:
\[
\mathcal{I}_t = \mathbb{I}\left(N_{\text{director buyers}}^{(t-3\text{m},t)} > 3\right)
\]
\[
\mathbb{E}[R_{i} - R_{m} \mid \mathcal{I}_t=1] \approx 0.02 \text{ month}^{-1} \quad \text{[PAGE 14]}
\]
Units: dimensionless indicator, return per month.
Decay:
\[
P(\text{capture} \mid \tau) = \begin{cases} 0.25 & \tau \le 10 \text{ days} \\ 0.50 & \tau \le 60 \text{ days} \\ \dots \end{cases}
\]
from [PAGE 15].

Earnings revision:
\[
\Delta \text{EPS}^{\text{net}}_{i,t} = \text{up revisions} - \text{down revisions}
\]
Top quintile vs bottom quintile: \( \Delta R_{\text{annual}} > 0.16 \) [PAGE 26].
Combined earnings+sales surprise: \( \Delta R_{6\text{m}} \approx 0.053 \) [PAGE 27-28].

Institutional tilt:
\[
\text{Tilt}_{i,f} = w_{i,f} - w_{i,\text{bm}}
\]
Top 25% tilt: \( \alpha \approx 0.23 \text{ yr}^{-1} \) [PAGE 33].
Concentrated: \( N \le 30 \Rightarrow \alpha \approx 0.04 \text{ yr}^{-1} \) [PAGE 35].
Firm shared: \( N_{\text{funds}} \ge 4 \Rightarrow \alpha \approx 0.06 \text{ yr}^{-1} \) [PAGE 37].
IO delta: top 10% increase vs top 10% decrease: \( \Delta R > 0.31 \text{ yr}^{-1} \) [PAGE 38].

Short:
\[
SI_i = \frac{N^{\text{short}}_i}{N^{\text{out}}_i} \in [0,1]
\]
[PAGE 44].
\[
DTC_i = \frac{N^{\text{short}}_i}{\bar{V}^{\text{daily}}_i} \quad [\text{days}]
\]
[PAGE 46].

Breakdown regimes: cyclicals, high valuation, low institutional ownership + high SI, delayed data.

RETROCAUSAL_GENEALOGY (~200 words).
Trace from Slater, Lynch, Seyhun (1986), Lakonishok & Lee (2001), Womack (1996), McKnight & Todd (2006), Cohen et al. (2005), Pomorski (2009), Nofsinger & Sias (1999), Asquith et al. (2005), Drake et al. (2010).
Multi-week traps: signal half-life, 13-F lag, earnings drift window, short squeeze exhaustion.

RECURSIVE_THEORY_OF_MIND (~180 words).
Levels 0-5. Crisis habit regression: career risk herding, closet indexing, analyst bullish bias, short seller forced cover. Counter-trap: trust shorts over analysts, cluster buying, earnings surprise drift. Clock: 60-day half-life, 3-month drift, 12-month best ideas, DTC days.

CROSS_LAYER_VETO_ADJUDICATION (~180 words).
Layers: physical (liquidity/capacity), biomechanical (human career/cognitive constraints), weather (macro/sector regime).
Veto rules:
- Liquidity veto: \( \text{Notional} > \lambda \cdot \text{ADV} \).
- Sector veto: cyclical (energy/mining) invalidates insider signal [PAGE 17].
- Ownership veto: \( SI > SI_{\text{high}} \land IO < IO_{\text{low}} \) => avoid [PAGE 48-49].
- Analyst conflict veto: bullish analyst + high short interest => trust shorts [PAGE 49-50].
- Timing veto: signal age > 60 days => decayed [PAGE 15].
All must pass.

RLVR_COUNTERFACTUAL_VETOES (~180 words).
3 scenarios:
1. Blinkx long veto: short interest surge 2%->10% in <1 month, price >200p. Verifiable via FCA short interest + price. Prediction: -40% in one day Jan 30 [PAGE 45].
2. Ocado short veto: SI ~15%, DTC high, positive catalyst (Morrisons deal). Prediction: price +200% via short squeeze, short interest falls to <4% [PAGE 47-48].
3. Cyclical insider sell veto: insider sell in energy/mining, not high valuation. Prediction: weak signal, false positive; do not sell [PAGE 12-13, 17].

Make sure no betting language.

Let's draft full text now. I'll be careful with word count and citations.

Word count check: THINK_TRACE needs >=400 words. Others can be shorter but total >=1000.

Let's write.

One issue: the user says "STRICT INVARIANTS" including "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes."

So I must not invent Force/Fatigue. My equations must be formal, tied to source claims, with units and assumptions. Good.

Also cite exact [PAGE N] markers and verbatim quotes when source pages are provided. I have pages 2-56 content.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The book’s central multi-hop claim is that public disclosure trails left by company executives, institutional fund managers, and research analysts contain exploitable alpha because these actors possess private information and face different incentive structures than retail investors. The first hop is director dealings: the text states that “when more than three directors in the previous three months have bought a stock, returns on average are 2% per month higher than the market” [PAGE 14], and quotes Peter Lynch that “insiders might sell their shares for any number of reasons, but they buy them for only one: they think the price will rise” [PAGE 12-13]. The second hop is temporal decay: “about half of the profits are made within the first 60 days and a quarter are made in the first 10 days” [PAGE 15]. This creates a multi-week trap: a retail investor who acts after week 8 captures only the residual tail of the signal, while the front-loaded capture is structurally inaccessible to large funds because of capacity constraints in small-cap value stocks where insider signals are strongest [PAGE 16-17].

The third hop crosses into analyst research. The source documents a severe optimism bias: “only around 10% ever advise selling a stock” [PAGE 20], and cites James Montier that analysts “are terribly good at telling us what has just happened but of little use in telling us what is going to happen in the future” [PAGE 22]. However, changes—not levels—carry information. Bold revisions (moving away from consensus) signal new information, whereas herding revisions (moving toward consensus) signal career protection [PAGE 24-25]. Earnings revisions produce a multi-month drift: a pan-European study found the top 20% of net upward revisions outperformed the bottom 20% by “more than 16% annually” [PAGE 26], and post-earnings-announcement drift can last “up to three months” [PAGE 27-28]. The fourth hop is institutional ownership. Portfolios of the “top 25% highest conviction positions held by fund managers return beyond 23% per year” [PAGE 9, 33], concentrated funds (30 stocks or less) outperformed by “around 4% annualised” [PAGE 35], and stocks with the largest increase in institutional ownership outperformed those with the largest decrease by “more than 31% per year” [PAGE 38].

Gray-zone audit. The causal chain breaks down in several regimes. (1) Transaction costs are excluded from the 23.7% annualised value-and-momentum-plus-insider result [PAGE 54-55], which is a singularity for small-cap strategies where bid-ask spreads and market impact dominate. (2) US 13-F holdings are reported on a “delayed quarterly basis” [PAGE 32], meaning the signal is stale by weeks or months at the moment of public observation. (3) Cluster buying lacks a single rigorous definition; the text contrasts “net purchase ratio” with the heuristic “number of buyers is greater than the number of sellers plus 2” [PAGE 14-15], introducing measurement noise. (4) Cyclical sectors—energy and mining—produce “some of the worst returns from insider trades” because profits are tied to macroeconomic factors rather than idiosyncratic director insight [PAGE 17]. (5) Insider selling is weakly predictive except at very high valuations [PAGE 12-13], so a sell signal in a fairly valued defensive stock is a false positive. A valid composite signal therefore requires intersection: director cluster buying in small-cap value, non-cyclical sectors, confirmed by earnings revisions and institutional tilt, executed within the 60-day half-life window, while vetoing on low liquidity, high short interest with low institutional ownership, and analyst-herding regimes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(i\) index a stock, \(t\) calendar time, and \(R\) arithmetic return. All returns are dimensionless probability-weighted expectations unless otherwise noted.

\textbf{Director cluster-buying operator.} Define the three-month director buying count
\[
N^{\mathrm{buy}}_{i}(t) = \sum_{d \in \text{directors}} \mathbb{I}\left(\text{director } d \text{ purchased shares of } i \text{ in } [t-3\mathrm{m}, t]\right).
\]
The cluster indicator is
\[
\mathcal{C}_{i}(t) = \mathbb{I}\left(N^{\mathrm{buy}}_{i}(t) > 3\right).
\]
Source claim: conditional on \(\mathcal{C}_{i}(t)=1\),
\[
\mathbb{E}[R_{i} - R_{m} \mid \mathcal{C}_{i}(t)=1] \approx 0.02\ \text{month}^{-1},
\]
where \(R_m\) is the market return [PAGE 14]. Assumptions: public disclosure latency is negligible relative to the holding period; no transaction costs; the director trades are not motivated by liquidity needs, tax, or diversification [PAGE 12-13].

\textbf{Signal decay (clock) operator.} From [PAGE 15], the profit capture probability as a function of delay \(\tau\) after disclosure satisfies
\[
P(\text{capture} \mid \tau \le 10\ \text{days}) = 0.25, \qquad
P(\text{capture} \mid \tau \le 60\ \text{days}) = 0.50.
\]
Units: days. Singularity/breakdown: if \(\tau > 90\) days, the insider signal is considered statistically exhausted for practical retail capture [PAGE 15].

\textbf{Analyst earnings-revision operator.} Let \(U_{i}(t)\) and \(D_{i}(t)\) be the count of upward and downward earnings estimate revisions over the recent window. Define net revision intensity
\[
\Delta\mathrm{EPS}^{\mathrm{net}}_{i}(t) = U_{i}(t) - D_{i}(t).
\]
Source claim: the top quintile by \(\Delta\mathrm{EPS}^{\mathrm{net}}\) outperforms the bottom quintile by
\[
\Delta R_{\text{annual}} > 0.16\ \text{yr}^{-1}
\]
[PAGE 26]. Combined earnings and sales surprises yield
\[
\Delta R_{6\mathrm{m}} \approx 0.053
\]
over six months [PAGE 27-28]. Post-announcement drift persists for up to \(\tau_{\text{drift}} \approx 3\) months [PAGE 27-28].

\textbf{Institutional conviction tilt operator.} Let \(w_{i,f}\) be fund \(f\)'s weight in stock \(i\), and \(w_{i,\mathrm{bm}}\) the benchmark weight. Define tilt
\[
\mathcal{T}_{i,f} = w_{i,f} - w_{i,\mathrm{bm}}.
\]
Source claim: portfolios of the top 25% highest-tilt positions generate
\[
\alpha \approx 0.23\ \text{yr}^{-1}
\]
[PAGE 9, 33]. Only the top five ideas per manager are high-conviction; ideas beyond rank five decay toward underperformance [PAGE 33-34]. Assumptions: holdings data are observed with the regulatory disclosure lag (US 13-F is quarterly and delayed) [PAGE 32].

\textbf{Concentrated-fund and firm-level shared-idea operators.} For funds holding \(N \le 30\) stocks,
\[
\alpha_{\text{conc}} \approx 0.04\ \text{yr}^{-1}
\]
[PAGE 35]. For \(N_{\text{funds}}\) funds at the same firm sharing a best idea,
\[
\alpha_{\text{shared}}(N_{\text{funds}}) \approx
\begin{cases}
0.06\ \text{yr}^{-1}, & N_{\text{funds}} \ge 4 \text{ (strongest)},\\
\text{weaker}, & N_{\text{funds}} < 4,
\end{cases}
\]
[PAGE 37]. Overlap constraint: more than 70% of best ideas do not overlap across managers; only 8% overlap across three or more managers [PAGE 34-35].

\textbf{Institutional-ownership delta operator.} Let \(\Delta\mathrm{IO}_{i}\) be the change in the percentage of free float held by institutions. Source claim:
\[
\mathbb{E}[R \mid \Delta\mathrm{IO}_{i} \in \text{top }10\%] -
\mathbb{E}[R \mid \Delta\mathrm{IO}_{i} \in \text{bottom }10\%] > 0.31\ \text{yr}^{-1}
\]
[PAGE 38]. The number of institutions is less predictive than the change in their count [PAGE 39].

\textbf{Short-selling operators.} Short interest is dimensionless:
\[
\mathrm{SI}_{i} = \frac{N^{\mathrm{short}}_{i}}{N^{\mathrm{outstanding}}_{i}} \in [0,1],
\]
e.g., 12.5 million shorted of 100 million outstanding gives \(\mathrm{SI}_{i} = 0.125\) [PAGE 44]. Days to cover, in days, is
\[
\mathrm{DTC}_{i} = \frac{N^{\mathrm{short}}_{i}}{\bar{V}^{\mathrm{daily}}_{i}},
\]
where \(\bar{V}^{\mathrm{daily}}_{i}\) is average daily trading volume; example: 10 million shorted divided by 2 million daily volume gives \(\mathrm{DTC}_{i}=5\) days [PAGE 46]. High \(\mathrm{DTC}_{i}\) implies short-squeeze risk: a price rise forces buy-to-cover, increasing \(dP/dt\) and inducing further covering [PAGE 46-48].

\textbf{Value–Momentum–Smart Money overlay.} The base strategy blends value and momentum; overlaying insider trades produced 23.7% annualised performance between 1995 and 2008, with transaction costs excluded [PAGE 54-55]. Breakdown regimes: cyclical sectors (energy, mining) weaken insider signals [PAGE 17]; high valuations weaken insider sell signals but not buy signals [PAGE 12-13]; high short interest combined with low institutional ownership is an avoid regime [PAGE 48-49].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage is explicitly academic and historical, stretching from practitioner texts into peer-reviewed finance. Jim Slater’s “Zulu Principle” instructs attention to CEO and finance-director buying because they “ought to know exactly what is happening within the business” [PAGE 11]. Peter Lynch’s “One Up on Wall Street” supplies the axiom that insiders buy for only one reason [PAGE 12-13]. The empirical backbone begins with Seyhun (1986), cited for insider profits, trading costs, and market efficiency [PAGE 14-15], and Lakonishok and Lee (2001), who scrutinised one million trades from 1975 to 2005 and found director dealings especially informative in small-cap value stocks [PAGE 16-17]. UK contrarian evidence comes from Gregory, Tharyan, and Tonks (2011) [PAGE 12-13], and Giamouridis, Liodakis, and Moniz (2008) on insiders as smart investors [PAGE 12].

On the analyst side, Womack (1996) establishes that brokerage recommendations have investment value, but Barber (2010) and Jegadeesh et al. (2004) document optimism bias and the weakness of absolute recommendation levels [PAGE 20-22]. The revision and drift literature is anchored by McKnight and Todd (2006) on European earnings revisions (>16% annual spread between top and bottom quintiles) [PAGE 26], and Jegadeesh and Livnat (2006) on combined earnings and sales surprises (5.3% over six months) [PAGE 27-28]. Post-earnings-announcement drift is tied to the tardiness of institutional analysts in updating models, sometimes taking six months [PAGE 27-28].

Institutional best-idea research descends from Cohen, Polk, and Silli (2005/2010), who found the top 25% highest-conviction positions outperformed by up to 23% annually [PAGE 33]. Baks et al. (2006) show concentrated managers outperformed diversified peers by around 4% annualised [PAGE 35]. Pomorski (2009) demonstrates that best ideas shared across multiple funds at the same firm yield almost 6% per year, strongest when at least four funds trade the same stock [PAGE 37]. Nofsinger and Sias (1999) and Sias, Starks, and Titman (2006) establish that changes in institutional ownership—more than levels—predict returns, with top-decile increases beating top-decile decreases by more than 31% per year [PAGE 38-39].

Short-selling genealogy includes Boehmer, Huszar, and Jordan (2010) on short interest [PAGE 44], Asquith, Pathak, and Ritter (2005) on short interest, institutional ownership, and returns [PAGE 48-49], Drake, Rees, and Swanson (2010) showing analysts can be wrong when heavily shorted stocks are bullishly rated [PAGE 49-50], and Xu (2013) on short squeezes [PAGE 50-51].

Multi-week traps are embedded in this genealogy. (1) Insider signal half-life: half the profits arrive within 60 days, a quarter within 10 days [PAGE 15]; a multi-week delay destroys most capture. (2) Disclosure lag: US 13-F data are delayed quarterly [PAGE 32], so the “best idea” portfolio is observed weeks after formation; post-formation outperformance persists month by month for up to 12 months [PAGE 33-34], but second-through-fifth ideas decay faster [PAGE 33]. (3) Earnings drift lasts up to three months [PAGE 27-28], so entering after the drift is priced in is a value trap. (4) Short-squeeze dynamics: Ocado short interest fell from ~15% to under 4% as price rose 200% through 2013 [PAGE 47-48]; shorting into a rising squeeze is an infinite-loss trap. (5) Analyst herding produces ongoing drift after bold revisions [PAGE 24-25], but following herding revisions after the initial move chases already-diffused information.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The market is modeled as a recursive hierarchy of beliefs about information. Level 0 is firm fundamentals. Level 1 consists of directors, fund managers, and analysts acting on private or proprietary information. Level 2 is the public observer who infers Level 1 intentions from disclosed trades, holdings, and recommendations. Level 3 is the strategic analyst who anticipates Level 2 inference and chooses between a bold revision (career-risking, information-led) and a herding revision (career-safe, consensus-seeking) [PAGE 24-25]. Level 4 is the fund manager who anticipates Level 3 and either closet-indexes to protect against benchmark divergence or constructs high-conviction tilts in small numbers of stocks [PAGE 33-35]. Level 5 is the smart-money follower who attempts to piggyback Levels 1–4 but faces disclosure latency, capacity constraints, and crowding [PAGE 32-34, 54-55].

Crisis habit regression occurs when stress triggers reversion to career-protective heuristics at each level. Analysts issue positively biased notes because of investment-banking conflicts and the “strong buy” imbalance (only ~10% of recommendations are sells) [PAGE 20-21]. Fund managers avoid concentrated bets to prevent career-threatening divergence from the benchmark [PAGE 33]. Directors sell for personal reasons—house purchase, diversification, tax—unrelated to company prospects, creating noise in Level 1 sells [PAGE 12-13]. Short sellers face daily negative reinforcement and infinite-loss risk, making them prone to forced cover when prices rise [PAGE 42-43]. Under crisis conditions, these habits regress into predictable mispricing: glamour stocks become overpriced [PAGE 22-23], heavily shorted stocks with low institutional ownership become fragile [PAGE 48-49], and analyst bullishness coincides with short-seller conviction [PAGE 49-50].

The counter-trap is to reverse the inference at moments of maximal regression. When analysts say buy but shorts disagree, trust the shorts [PAGE 51-52, Rule 3]. When directors cluster-buy in cheap, non-cyclical stocks, treat it as contrarian information rather than noise [PAGE 12-13, 17]. When earnings surprise positively, exploit post-announcement drift before institutions reallocate capital over six months [PAGE 27-28]. The counter-trap fails when the signal itself becomes common knowledge; the book admits pure insider tracking can underperform for years before mean-reverting [PAGE 11-12], so the alpha window is finite.

The clock is the hard constraint on the recursive loop. Insider trades decay with a 60-day half-life [PAGE 15]. Earnings drift lasts up to three months [PAGE 27-28]. Best-idea portfolios work for up to 12 months post-construction, but the best ideas dominate [PAGE 33-34]. Days to Cover measures the short-unwind window in days [PAGE 46]. The recursive system is stable only if the follower’s reaction time is shorter than the signal’s half-life and if capacity constraints prevent arbitrage from collapsing the edge. Once the clock expires, Level 5 participation becomes adverse selection.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A trade signal is admitted only if it passes all three layers; any single layer issues a hard veto.

Layer 1 — Physical / market microstructure (liquidity and capacity). Small-cap value stocks generate the strongest insider signals, but “it’s much harder for hedge funds to deal effectively and in size” [PAGE 16-17]. Let \(A_i\) be the available daily liquidity and \(S_i\) the proposed position notional. The physical veto is
\[
\mathcal{V}_{\text{phys}} = \mathbb{I}\left(S_i > \lambda \, A_i\right) = 1 \quad \Rightarrow \quad \text{reject},
\]
with \(\lambda\) a participation cap (e.g., 5–10% of average daily volume). Breaking this regime causes market impact that consumes the 2% monthly cluster-buying edge [PAGE 14]. Transaction costs are excluded from published backtests [PAGE 54-55], making the veto strict for illiquid names.

Layer 2 — Biomechanical / cognitive (human incentive constraints). Analysts herd for job safety and issue optimistic recommendations due to investment-banking conflicts [PAGE 20-21, 24-25]. Directors sell for liquidity or personal reasons [PAGE 12-13]. Short sellers require deep pockets and face theoretical infinite losses on rising prices [PAGE 42-43]. The biomechanical veto triggers when the signal source is compromised: an insider sell in a non-extreme valuation environment [PAGE 12-13]; an analyst “strong buy” without a bold revision or earnings upgrade [PAGE 20-22, 24]; or a short position in a stock where borrow supply is constrained by low institutional ownership [PAGE 48-49].

Layer 3 — Weather / macro regime. Cyclical sectors (energy, mining) tie profits to macroeconomic factors, producing “some of the worst returns from insider trades” [PAGE 17]. Exuberant post-2009 markets can keep junk stocks expensive and defy short sellers for protracted periods [PAGE 47-48]. Glamour stocks are expensive and prone to negative surprises [PAGE 22-23]. The weather veto rejects insider buy signals in cyclicals regardless of director conviction, and rejects short-squeeze longs in momentum-extreme regimes where sentiment can remain irrational longer than the solver’s horizon.

Adjudication rule: \(\text{Admit} = 1\) iff \(\mathcal{V}_{\text{phys}} = 0 \land \mathcal{V}_{\text{bio}} = 0 \land \mathcal{V}_{\text{weather}} = 0\). Empirically, the strongest admitted case is small-cap, non-cyclical, value-oriented director cluster buying confirmed by earnings upgrades and institutional tilt, executed within 60 days, with \(\mathrm{SI}\) low or falling and institutional ownership rising [PAGE 14-17, 26-28, 38-39]. Any layer failure collapses the position to zero weight.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Blinkx long-position veto. Observable pre-event state: short interest surged from ~2% to 10% in less than a month while price rocketed beyond 200p [PAGE 45]. Verifiable data: FCA short-interest spreadsheet and daily price [PAGE 44]. Counterfactual RLVR veto: reject any new long if \(\Delta \mathrm{SI} > 5\) percentage points within 30 days and \(P > 200\text{p}\). Prediction conditional on no veto: on January 30 a Harvard academic’s critical blog triggered a 40% single-day tank [PAGE 45]. Prediction conditional on veto: avoids the 40% drawdown; the position remains flat or is reallocated to low-short-interest names, which research shows can outperform [PAGE 44].

Scenario 2 — Ocado short-squeeze veto. Observable pre-event state: Ocado was ~15% shorted (one of the most heavily shorted stocks) in March 2013, then signed a Morrisons delivery deal and rose 200% through the year as short interest fell to under 4% [PAGE 47-48]. Verifiable data: \(\mathrm{SI}_{i}\approx0.15\), \(\mathrm{DTC}_{i}=N^{\mathrm{short}}/\bar{V}^{\mathrm{daily}}\) [PAGE 46], plus public contract news. Counterfactual RLVR veto: reject any new short if \(\mathrm{SI}_{i}>0.10\), \(\mathrm{DTC}_{i}>5\) days, and a positive fundamental catalyst is announced. Prediction conditional on no veto: short squeeze forces buy-to-cover, creating a feedback loop where rising price generates more covering and further price increases, producing theoretically unbounded mark-to-market losses before the short interest collapses to <4% [PAGE 46-48]. Prediction conditional on veto: avoids the squeeze leg; capital preserved for post-squeeze mean reversion or long-side participation.

Scenario 3 — Cyclical-sector insider-sell veto. Observable pre-event state: a director sells shares in an energy or mining company at a moderate (not extreme) valuation [PAGE 12-13, 17]. Verifiable data: sector classification, director transaction RNS, and trailing valuation multiples. Counterfactual RLVR veto: reject any “sell on insider selling” signal if sector \(\in\) {energy, mining} and valuation is not in the extreme decile. Prediction conditional on no veto: insider sells have a weak link to lower future returns except at very high valuations, and cyclical-sector insider trades produce some of the worst returns because profits are macro-driven [PAGE 12-13, 17]; the sell signal is a false positive and the investor crystallizes an unnecessary loss or misses a rebound. Prediction conditional on veto: position held; because insider buying, not selling, has widespread predictive value especially in value shares [PAGE 12-13], avoiding the false sell preserves exposure to potential upside.
</RLVR_COUNTERFACTUAL_VETOES>