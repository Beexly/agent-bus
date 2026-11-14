---
source: "2020 - Running it Twice (or Thrice) Double-Header and Triple-Header Baseball Arbitration - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2020"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 8121
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about MLB arbitration ("Running it Twice (or Thrice): Double-Header and Triple-Header Baseball Arbitration" by Michael J. Hasday) using the strict formatting invariants of the GSE + GSI Frontier Reasoning Foundry.

Requirements:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting terminology whatsoever. No spreads, totals, moneylines, odds.
- Must use formal LaTeX equations.
- Must cite [PAGE N] markers and verbatim quotes.
- Must be 1000+ words total across sections.
- Each section has its own thematic focus.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words here alone probably, but total >=1000 words across all sections. I'll analyze the paper's mechanics: FOA binary choice, variance reduction via Law of Large Numbers, DHBA and THBA mechanics, the Betances example ($5M vs $3M), average error calculations, risk aversion asymmetry between players and teams, file-and-trial strategy, settlement rates (89% in 2018, 95% in 2019), Epstein's findings ($150k less in 2018, $90k less in 2019), Table 1 player "wins" below projected salary, optimal bidding strategy ($2.9M vs $1.5M example), poker "running it twice" analogy, cost savings (2 arbitrators vs 3), breakdown regimes (when arbitrator pool preferences are perfectly correlated, when team/player bids converge, when independence assumption fails).

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define FOA award A ∈ {p_t, p_p}. DHBA: two independent arbitrators i,j. Award = p_t if both choose team, p_p if both choose player, (p_t+p_p)/2 if split. THBA: three arbitrators. Award = unanimous choice, or 2/3 point: if 2 team 1 player: award = (1/3)p_t + (2/3)p_p? Wait, let's check paper. Paper says "applicable two-thirds point between the parties’ numbers." In example: Team $3M, Player $5M. 2-1 Yankees -> $3.67M. That's (1/3)*3 + (2/3)*5? No: (1/3)*3 + (2/3)*5 = 1 + 3.333 = 4.333. That's the Betances-favorable 2/3 point. Wait: $3.67M is closer to team. Let's compute: if 2 arbitrators side with Yankees ($3M) and 1 with Betances ($5M), the "applicable two-thirds point" — two-thirds of the way from player to team? From 5 to 3, two-thirds point is 5 - (2/3)(2) = 5 - 1.333 = 3.667. Yes. So if majority team: award = (2/3)p_t + (1/3)p_p. If majority player: award = (1/3)p_t + (2/3)p_p. Let me verify with table: THBA outcomes: $4.33M (30%), $3.67M (60%), $3.00M (10%). Average error $320,000. Let's check: $4.33M is 2/3 toward player from team: 3 + (2/3)*2 = 4.333. $3.67M is 2/3 toward team from player: 5 - (2/3)*2 = 3.667. Yes.

Error metric: E = |award - μ| where μ = average of five arbitrators' preferred awards = (3*3 + 2*5)/5 = 3.8M.

Single arbitrator average error: [3(|3-3.8|) + 2(|5-3.8|)]/5 = [3(0.8) + 2(1.2)]/5 = [2.4+2.4]/5 = 4.8/5 = 0.96M = $960,000.

Three-arbitrator panel majority vote: 10 panels. 7 Yankees panels error 0.8M, 3 Betances panels error 1.2M. Avg = [7(0.8)+3(1.2)]/10 = [5.6+3.6]/10 = 9.2/10 = 0.92M = $920,000.

DHBA: 10 pairs. 3 both-Yankees (error 0.8M), 1 both-Betances (error 1.2M), 6 split (award $4M, error |4-3.8|=0.2M). Avg = [3(0.8)+1(1.2)+6(0.2)]/10 = [2.4+1.2+1.2]/10 = 4.8/10 = 0.48M = $480,000.

THBA: 10 triples. 1 unanimous Yankees (error 0.8M), 6 majority Yankees (award 3.667M, error |3.667-3.8|=0.133M), 3 majority Betances (award 4.333M, error |4.333-3.8|=0.533M). Avg = [1(0.8)+6(0.133)+3(0.533)]/10 ≈ [0.8+0.8+1.6]/10 = 3.2/10 = 0.32M = $320,000. Paper uses 133,333 and 533,333.

Law of Large Numbers: binomial distribution. Coin flip probabilities: P(400k-600k) for n flips. Paper says 0% for n=1, 50% for n=2, 66% for n=10, 96% for n=100. Wait, for n=2, payout between 400k and 600k means exactly one head (500k), probability 50%. Yes.

Risk aversion: players less willing to take risk, teams deeper pockets, repeat player effect.

File-and-trial strategy: refuse to negotiate ~1 month between submission and hearing.

Settlement rates: 89% eligible cases 2018, 95% eligible cases 2019.

Epstein findings: 2018 avg $150k less than projected (163 players), 2019 avg $90k less (191 players).

Table 1: 9 player "wins" where award <= projected salary.

Optimal bidding example: pool of 3 arbitrators, two value player at 1.3M, one at 2M. Team asks 1M. Increments 100k. Each picks closest to true value. Optimal player number 2.9M. Results: 1M, 1M, 2.9M -> avg 1.63M. Safe number 1.5M -> wins all three, avg 1.5M, which is 130k less.

DHBA with same: submissions 2.9M, awards: 1M, 1.95M (midpoint of 1 and 2.9), 1.95M. Same average 1.63M but less disparity.

Poker: well-resourced pros decline running it twice because it reduces their risk advantage.

Cost: DHBA less expensive (2 arbitrators vs 3).

Breakdown/singularity: independence assumption among arbitrators is critical. If arbitrators are perfectly correlated, DHBA/THBA collapse to FOA. If p_t = p_p, no variance anyway. If the pool has extreme skew (all arbitrators side with one party), averaging doesn't help accuracy relative to true value, only relative to pool mean. The "true value" vs "average award" distinction: paper defines error relative to average award of five arbitrators, not an objective true value. This is a gray zone—accuracy is defined as consistency with panel mean, not correctness relative to market value.

Pages: The source text has page numbers 1-11. I need to cite [PAGE N]. Let me map content to pages:
- Page 1: Abstract, intro start.
- Page 2: Introduction continued (Heads or Tails, coin flips, Running it Twice poker).
- Page 3: Section 3 (Unlevel Playing Field), FOA description, Berry memo, Clark, Swartz/Epstein findings ($150k, $90k).
- Page 4: Section 4 (Double-Header), Betances example, five arbitrators A-E, single arbitrator error $960k, three-arbitrator panel error $920k, footnotes 8-11.
- Page 5: DHBA pairs error $480k, subtle player confidence, optimal number example ($2.9M vs $1.5M), Table 1 intro.
- Page 6: Table 1 (player wins below projected), DHBA risk spreading, poker pros quote.
- Page 7: Section 5 (Triple-Header), THBA mechanics, average error $320k, ties vs winner/loser.
- Page 8: Section 6 Summary, Table 2, assumptions, footnote 15.
- Page 9: Conclusion, references start.
- Page 10-11: References continued.

Wait, looking at the text, page numbers appear at bottom: "1", "2", "3", etc. Let me trace:
- Abstract ends, then "1" -> Page 1.
- Introduction starts on Page 1? Actually Abstract is page 1. Then "1" appears after abstract. Then Introduction section. Then "2" appears after footnote 5. So Introduction spans pages 1-2.
- Section 3 starts after page 2 marker. "3" appears after Epstein paragraph. So Section 3 is page 3.
- Section 4 starts after page 3. "4" appears after footnote 7. So Section 4 starts page 4.
- "5" appears after footnote 12. Page 5.
- "6" appears after Table 1? Let's see: Table 1 is on page 6? The text shows Table 1 then "6" then continues. Actually looking carefully: after Table 1, there's "6" then text continues "DHBA should give players..." So Table 1 might be on page 6 or end of 5. Let me look: "...as Table 1 shows." then Table 1, then "6" then "DHBA should give players..." So page 6 contains end of Table 1 discussion? Or Table 1 is on page 5 and page marker 6 is after. Hard to know exactly but I can cite pages approximately based on where markers appear.

Actually the text has page numbers embedded:
- After abstract: "1"
- After intro footnote 5: "2"
- After Epstein paragraph: "3"
- After footnote 7: "4"
- After footnote 12: "5"
- After Table 1: "6"
- After footnote 14/references? Let's see: after footnote 14 URLs: "7"
- After THBA section: "8" then Table 2? Actually Table 2 appears after "8"? Let's trace: Section 5 ends, then "8" then Section 6 starts? The text: "## **6. Summary and Conclusion**" appears, then Table 2, then "9" then references start? Wait: after Table 2 and assumptions, there's "9" then "To be sure..." then "## **6. Summary and Conclusion**"? No, the ordering in the markdown is:

After page 5 marker: text continues DHBA optimal example, Table 1, then page 6 marker, then DHBA should give players..., poker pros, cost savings.

Then Section 5 Let's Play Three.

Then page 7 marker? Let me look: after Section 5 text, there's no explicit page number until after THBA paragraph: "...ties are probably beneficial for team-player relations." Then "## **6. Summary and Conclusion**". Wait, looking at raw text:

"## **5. Let’s Play Three**" ... ends with "...ties are probably beneficial for team-player relations."

Then "## **6. Summary and Conclusion**" ... Table 2 ... then "9" then "To be sure..." then conclusion paragraph.

Wait, actually in the text provided:

After Section 5 ends: "## **6. Summary and Conclusion**" immediately? Let me check the provided text:

"...Some poker players like to run it three times, as opposed to twice, to avoid ties; however, in the MLB context, ties are probably beneficial for team-player relations.

## **6. Summary and Conclusion**"

So no page number between 5 and 6? Actually earlier I saw "7" after footnote 14. Let me re-scan:

After footnote 14 URLs: "> 14 _See_ Projected Arbitration Salaries..." then "7" appears? Let's look:

"> 14 _See_ Projected Arbitration Salaries for 2018 – MLB Trade Rumors, https://www.mlbtraderumors.com/2017/10/projected-arbitration-salaries-for-2018.html and Projected Arbitration Salaries for 2019 – 

https://www.mlbtraderumors.com/2018/10/mlb-arbitration-salaries-2019.html.


7

## **5. Let’s Play Three**"

So page 7 is before Section 5. Then Section 5. Then Section 6. Then Table 2. Then "9"? Let's check:

"**Average“Error”**|$920,000|$480,000|$320,000|


<u><mark>Assumptions: ...</mark></u> 

15 Since the error ... 


8

## **6. Summary and Conclusion**"

Wait, the text shows:

"**Table 2:** _Comparison of FOA used in MLB with DHBA and THBA_ 

...

**Average“Error”**|$920,000|$480,000|$320,000|


<u><mark>Assumptions: ...</mark></u> 

15 Since the error ... 


8

## **6. Summary and Conclusion**"

Hmm, actually looking carefully:

"...illustrates: 

**Table 2:** ...

**Average“Error”**|$920,000|$480,000|$320,000|


<u><mark>Assumptions: ...</mark></u> 

15 Since the error ... 


8

## **6. Summary and Conclusion**"

Wait the user text shows:

"## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021, this paper presents a new option to address player concerns about the fairness of MLB Arbitration. DHBA and THBA will substantially lessen the variance and improve the accuracy of the outcomes compared to FOA used in MLB Arbitration, as Table 2 (summarizing the above discussion) illustrates: 

**Table 2:** _Comparison of FOA used in MLB with DHBA and THBA_ 

...

**Average“Error”**|$920,000|$480,000|$320,000|


<u><mark>Assumptions: ...</mark></u> 

15 Since the error ... 


8

## **6. Summary and Conclusion**"

Actually, I see the text says:

"...as Table 2 (summarizing the above discussion) illustrates: 

**Table 2:** ...

[table]

<u><mark>Assumptions: ...</mark></u> 

15 Since the error ... 


8

## **6. Summary and Conclusion**"

Wait, there's a duplicate Section 6 header? Let me look at the raw provided text again:

"## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021, this paper presents a new option to address player concerns about the fairness of MLB Arbitration. DHBA and THBA will substantially lessen the variance and improve the accuracy of the outcomes compared to FOA used in MLB Arbitration, as Table 2 (summarizing the above discussion) illustrates: 

**Table 2:** _Comparison of FOA used in MLB with DHBA and THBA_ 

||**FOA used in MLB**|**DHBA**|**THBA**|
|---|---|---|---|
|**Award Outcomes**|$5 million (30%)|$5 million (10%)|$4.33 million (30%)|
|**and Probabilities**|--<br>|$4 million (60%)<br>|$3.67 million (60%)<br>|
||$3 million (70%)|$3 million (30%)|$3.00 million (10%)|
|**Average“Error”**|$920,000|$480,000|$320,000|


<u><mark>Assumptions: Team Bid: $3 million; Player Bid: $5 million</mark></u> 

15 Since the error ... 


8

## **6. Summary and Conclusion**"

No, actually after Table 2 and footnote 15, there's "8" then "To be sure, it may be a battle..." then final paragraph. Wait:

"15 Since the error of the one unanimous Yankee panel ... average error is $320,000 ([1($800,000) + 6($133,333) + 3($533,333)] / 10). 


8

## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021..."

Ah, I see. The section 6 header appears before Table 2 in the user text? Let me re-read carefully:

User text:

"## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021, this paper presents a new option to address player concerns about the fairness of MLB Arbitration. DHBA and THBA will substantially lessen the variance and improve the accuracy of the outcomes compared to FOA used in MLB Arbitration, as Table 2 (summarizing the above discussion) illustrates: 

**Table 2:** ...

[table]

<u><mark>Assumptions...</mark></u> 

15 Since the error ... 


8

## **6. Summary and Conclusion**"

Wait, there is no second header. Let me just parse what's there:

After Section 5 ends, the text goes to Section 6. Then Table 2. Then footnote 15. Then page marker "8"? Actually looking at the exact user text:

"...average error is $320,000 ([1($800,000) + 6($133,333) + 3($533,333)] / 10). 


8

## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement..."

No wait, the header 6 is BEFORE the table. The page marker 8 might be after footnote 15. Let me look at the sequence:

"## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021... as Table 2 ... illustrates: 

**Table 2:** ...

[table content]

<u><mark>Assumptions...</mark></u> 

15 Since the error ... 


8

## **6. Summary and Conclusion**"

This is confusing because the text provided seems to have the header twice or I'm misreading. Let me look at the actual pasted text near the end:

"## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021, this paper presents a new option to address player concerns about the fairness of MLB Arbitration. DHBA and THBA will substantially lessen the variance and improve the accuracy of the outcomes compared to FOA used in MLB Arbitration, as Table 2 (summarizing the above discussion) illustrates: 

**Table 2:** _Comparison of FOA used in MLB with DHBA and THBA_ 

||**FOA used in MLB**|**DHBA**|**THBA**|
|---|---|---|---|
|**Award Outcomes**|$5 million (30%)|$5 million (10%)|$4.33 million (30%)|
|**and Probabilities**|--<br>|$4 million (60%)<br>|$3.67 million (60%)<br>|
||$3 million (70%)|$3 million (30%)|$3.00 million (10%)|
|**Average“Error”**|$920,000|$480,000|$320,000|


<u><mark>Assumptions: Team Bid: $3 million; Player Bid: $5 million</mark></u> 

15 Since the error ... 


8

## **6. Summary and Conclusion**"

Actually, I think the user text has:

After Section 5: "...ties are probably beneficial for team-player relations."

Then page marker? Let me look: after Section 5 paragraph ends, the next line is "## **6. Summary and Conclusion**". So maybe page 7 is missing or I missed it.

Wait, I see "> 14 _See_ Projected Arbitration Salaries..." then "7" then "## **5. Let’s Play Three**". So page 7 is right before Section 5.

Then Section 5 runs. Then after Section 5 ends, next is "## **6. Summary and Conclusion**". But where is page 8? Looking at the text, after footnote 15 there's "8" then "To be sure..." but in the user text, footnote 15 appears right after Table 2 assumptions. Let me re-read the exact tail:

"...||$3 million (70%)|$3 million (30%)|$3.00 million (10%)|
|**Average“Error”**|$920,000|$480,000|$320,000|


<u><mark>Assumptions: Team Bid: $3 million; Player Bid: $5 million</mark></u> 

15 Since the error of the one unanimous Yankee panel is $800,000 ($3.8 million - $3 million), the error of each of the six majority Yankees panels is $133,333 ($3.8 million - $3,666,667), and the error of each of the three majority Betances panels is $533,333 ($4,333,333 - $3.8 million), the average error is $320,000 ([1($800,000) + 6($133,333) + 3($533,333)] / 10). 


8

## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021..."

Wait, the header "## **6. Summary and Conclusion**" appears BEFORE Table 2 in the user's text? Let me scroll up in the user message:

Yes: "## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021... as Table 2 ... illustrates: 

**Table 2:** ...

[table]

<u><mark>Assumptions...</mark></u> 

15 Since ... 


8

## **6. Summary and Conclusion**"

No, the user message shows:

"## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021..."

only once, and it's followed by Table 2. Then after footnote 15 there's page "8"? Actually no, I see "8" then "To be sure, it may be a battle..." Let me check:

After footnote 15: "...average error is $320,000 ([1($800,000) + 6($133,333) + 3($533,333)] / 10). 


8

## **6. Summary and Conclusion**"

This doesn't make sense if header 6 is already above. Unless the page marker 8 is actually between Table 2 and the conclusion text? No, looking at the user message very carefully:

The user message ends with:

"15 Since the error ... average error is $320,000 ([1($800,000) + 6($133,333) + 3($533,333)] / 10). 


8

## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021, this paper presents a new option..."

Wait, I think I misread earlier. Let me look at the actual provided text block:

The user provided:

"## **5. Let’s Play Three** 

As you may be thinking... ties are probably beneficial for team-player relations.

## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021... as Table 2 ... illustrates: 

**Table 2:** ...

[table]

<u><mark>Assumptions...</mark></u> 

15 Since ... 


8

## **6. Summary and Conclusion**"

No, there's definitely only one Section 6 header. The page number "8" appears after footnote 15 and before... actually, looking at the raw text:

"15 Since the error of the one unanimous Yankee panel is $800,000 ($3.8 million - $3 million), the error of each of the six majority Yankees panels is $133,333 ($3.8 million - $3,666,667), and the error of each of the three majority Betances panels is $533,333 ($4,333,333 - $3.8 million), the average error is $320,000 ([1($800,000) + 6($133,333) + 3($533,333)] / 10). 


8

## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement..."

This means the Section 6 header appears TWICE? No, looking again at the user message, I see:

First occurrence: "## **6. Summary and Conclusion**" right after Section 5.
Then Table 2.
Then footnote 15.
Then page "8".
Then "To be sure..."? No, after page 8 it says "## **6. Summary and Conclusion**" again?

Actually, I think the user message has a formatting quirk where page 8 is inserted, and then the continuation of section 6 ("To be sure...") follows. But in the text provided to me, after page 8 it says:

"## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement..."

Wait, I need to just accept the text as given and cite pages where markers appear. The markers are:
- Page 1: after abstract
- Page 2: after intro/footnote 5
- Page 3: after Epstein paragraph
- Page 4: after footnote 7
- Page 5: after footnote 12
- Page 6: after Table 1
- Page 7: after footnote 14, before Section 5
- Page 8: after footnote 15
- Page 9: after To be sure paragraph? Let's see: after Table 2/footnote 15, page 8, then "To be sure..."? Actually after page 8 marker, the text says "To be sure..."? Let me look:

After footnote 15: "...average error is $320,000 ([1($800,000) + 6($133,333) + 3($533,333)] / 10). 


8

To be sure, it may be a battle for the players to get teams to agree to DHBA or THBA... hard to score if you are afraid to swing and miss.


9

## References"

Ah! Yes. That makes sense. Page 8 is after footnote 15. Then "To be sure..." conclusion paragraph. Then page 9. Then References.

So:
- Section 6 starts on page 8? Or page 7? The header 6 appears before Table 2. Table 2 is on page 8? Actually the header 6 is right before Table 2 in the text. Then Table 2 and footnote 15 are on page 8. Then page marker 8 appears after footnote 15? That would mean footnote 15 is on page 8, then page marker 8 is at bottom of page 8. Then "To be sure..." is on page 9? But page marker 9 appears after "swing and miss." Then References.

Wait, looking at the exact user text near end:

"...average error is $320,000 ([1($800,000) + 6($133,333) + 3($533,333)] / 10). 


8

## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement..."

No, I see now. The user text actually has:

"## **6. Summary and Conclusion** 

With the MLB Collective Bargaining Agreement set to expire in 2021... Table 2...

[table]

<u><mark>Assumptions...</mark></u> 

15 Since ... 


8

## **6. Summary and Conclusion**"

This is definitely garbled in my reading. Let me just use the page markers I can clearly identify from the text provided:
- [PAGE 1]: Abstract area
- [PAGE 2]: Introduction, coin flip example
- [PAGE 3]: Section 3, Epstein findings
- [PAGE 4]: Section 4 start, Betances example, single arbitrator error
- [PAGE 5]: DHBA error, optimal bidding example
- [PAGE 6]: Table 1, DHBA confidence
- [PAGE 7]: Section 5 start (after footnote 14)
- [PAGE 8]: Section 5 end / Section 6 start? Actually footnote 15 then page 8 then "To be sure" then page 9 then references.

I'll cite pages conservatively based on the visible page number markers in the text. I'll say e.g. "As detailed on [PAGE 4]..." etc.

Now for the sections:

<SOURCE_OPERATORS_AND_EQUATIONS>: Need formal LaTeX. I'll define:
- Let \(p_T \in \mathbb{R}^+\) be team bid, \(p_P \in \mathbb{R}^+\) be player bid, currency unit: USD ($).
- FOA award: \(A_{\text{FOA}} \in \{p_T, p_P\}\), binary random variable.
- Arbitrator pool \(\mathcal{K} = \{1,\dots,K\}\), each \(k\) has deterministic preference \(d_k \in \{T,P\}\).
- Pool mean award \(\mu = \frac{1}{K}\sum_{k=1}^K a_k\), where \(a_k = p_T\) if \(d_k=T\), else \(p_P\).
- Error operator: \(\varepsilon = |A - \mu|\), units: USD.
- Expected error: \(\mathbb{E}[\varepsilon] = \frac{1}{N}\sum_{c=1}^N |A_c - \mu|\), where \(N\) is number of arbitrator configurations (subsets or panels).
- DHBA: two independent arbitrators \(i,j \sim \text{Unif}(\mathcal{K})\), \(i \neq j\). Award:
  \[
  A_{\text{DHBA}} = \begin{cases}
  p_T & d_i=T \land d_j=T \\
  p_P & d_i=P \land d_j=P \\
  \frac{p_T+p_P}{2} & d_i \neq d_j
  \end{cases}
  \]
- THBA: three independent arbitrators. Award:
  \[
  A_{\text{THBA}} = \begin{cases}
  p_T & \text{unanimous } T \\
  p_P & \text{unanimous } P \\
  \frac{2}{3}p_T + \frac{1}{3}p_P & \text{majority } T (2T,1P) \\
  \frac{1}{3}p_T + \frac{2}{3}p_P & \text{majority } P (1T,2P)
  \end{cases}
  \]
  Wait, need to check direction. If majority team (2 team, 1 player), paper example: award $3.67M which is closer to team $3M. Formula: \(\frac{2}{3}p_T + \frac{1}{3}p_P = \frac{2}{3}(3) + \frac{1}{3}(5) = 2 + 1.667 = 3.667\). Yes.
  If majority player: \(\frac{1}{3}p_T + \frac{2}{3}p_P = 1 + 3.333 = 4.333\). Yes.

- Breakdown regimes: independence assumption \(I_{ij} = 0\) (covariance of decisions zero). If \(\text{Cov}(\mathbb{I}(d_i=T), \mathbb{I}(d_j=T)) > 0\), variance reduction diminishes. Singularity: if \(p_T = p_P\), \(\varepsilon = 0\) for all mechanisms; if all \(d_k\) identical, DHBA/THBA reduce to FOA with respect to pool mean (no accuracy gain relative to \(\mu\), though still deterministic).
- Law of Large Numbers: for \(n\) independent trials with success prob \(q\), \(\frac{1}{n}\sum X_i \to q\) as \(n \to \infty\). Binomial tail bounds: \(P(|\hat{q} - q| < \delta)\) increases with \(n\). Paper's specific numbers: 0%, 50%, 66%, 96% for n=1,2,10,100 within ±$100k of $500k EV.

- Units: USD for salaries/errors; dimensionless for probabilities; count for arbitrators.

Need to cite [PAGE N] for the Betances example [PAGE 4], error calculations [PAGE 4]-[PAGE 5], THBA [PAGE 7]-[PAGE 8], Table 2 [PAGE 8].

<RETROCAUSAL_GENEALOGY>: Historical lineage: FOA / baseball arbitration origins (Monhait 2013, Tulis 2010, Chetwynd 2009), "Running it Twice" poker (High Stakes Poker GSN 2006-2011, Negreanu/Harman clip 2007), Law of Large Numbers (Bernoulli, binomial), final offer arbitration literature (Nedelescu 2013: Combined Arbitration, Double Offer, Amended FOA, Alpha-FOA), MLB CBA 2017-2021 Article VI Part E(13), 2021 expiration. Multi-week traps: file-and-trial ~1 month window, settlement rates 89%/95%, agents' coordination impractical (30 teams vs 150+ players/60 agents), CBA expiration 2021 as clock.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: players "playing it safe," submitting suboptimal low numbers (Table 1), risk aversion asymmetry. Counter-trap: DHBA/THBA reduces variance so players submit optimal numbers ($2.9M example), teams lose profit center. Clock: 2021 CBA expiration, settlement pressure before hearings, repeat player dynamics. Teams as repeat players with deeper pockets can absorb variance; players cannot. Theory of mind: teams model players as risk-averse and submit low offers; players anticipate team file-and-trial and regress to safe bids. DHBA changes the payoff matrix.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Hmm, this is about baseball arbitration, not physical sports performance. But I need to interpret "veto proof" as factors that could veto the proposal. Physical layer: none directly (it's a labor economics mechanism), but scheduling constraints (salaries must be determined before season start [PAGE 3], Tulis 2010). Biomechanical: player performance/injury risk affects value but not arbitration mechanism directly; however, injury risk increases variance in player value, making risk aversion more salient. Weather: none. Veto points: MLB and Players Association must agree; teams have incentive to reject because they benefit from status quo variance (paper acknowledges this [PAGE 8]-9). Administrative cost: THBA costs extra arbitrator; DHBA saves cost (2 vs 3). The "tie" outcome in DHBA may be beneficial for relations. Breakdown: if arbitrator decisions are not independent (shared biases), variance reduction fails.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable veto scenarios + predictions. RLVR = Reinforcement Learning via Verifiable Rewards? I need to create counterfactual scenarios that are verifiable (can be tested).
1. Scenario: Arbitrator pool preferences are perfectly correlated (all arbitrators have identical leanings). Prediction: DHBA and THBA collapse to FOA outcomes; average error remains $920K (or single arbitrator $960K); no variance reduction. Verifiable by checking historical arbitrator voting records for correlation.
2. Scenario: Team and player bids converge (\(|p_T - p_P| < \delta\)). Prediction: Midpoint/two-thirds awards converge to bids; DHBA/THBA provide negligible improvement over FOA because outcome space is narrow. Verifiable via settlement data where bids are within 5%.
3. Scenario: MLB adopts DHBA but teams refuse to negotiate during file-and-trial window, increasing hearings to 100% (eliminating settlements). Prediction: With more hearings, DHBA's variance reduction becomes more valuable ex ante, but teams may still prefer FOA if they can exploit risk aversion in bilateral negotiations outside arbitration. Verifiable by tracking hearing rates and settlement amounts pre/post rule change in a pilot league (e.g., AFL or minor leagues).
Need predictions as exact numbers where possible.

Total word count >= 1000 words across sections. <THINK_TRACE> alone needs >=400 words. I'll aim for ~2000 words total to be safe.

ZERO BETTING LINES: Must not mention spreads, totals, moneylines, odds. I can mention "probability" because that's math, not betting lines. But avoid "odds" entirely. Use "probability", "likelihood", "chance". Avoid "spread", "total", "moneyline". Also avoid "wager", "bet", "bookmaker", etc.

ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. All equations must be formal and derived from the paper. Use LaTeX.

Let me draft each section carefully.

THINK_TRACE (>=400 words):
I will discuss the multi-hop derivation:
1. FOA binary award creates high variance because award is discontinuous in arbitrator preference.
2. Players are less risk-tolerant than teams due to shallower pockets and single-shot exposure.
3. Teams exploit this via file-and-trial and aggressive lowballing, driving settlements below projected value (Epstein: -$150K 2018, -$90K 2019).
4. Hasday's proposal applies Law of Large Numbers via independent arbitrator draws.
5. DHBA: convert binary to ternary outcome (p_T, midpoint, p_P). THBA: convert to 5-point outcome? Actually THBA has outcomes: p_T (unanimous team), 2/3 point, 1/3 point? Wait table shows $5M (10%), $4.33M (30%), $3.67M (60%), $3M (10%). Wait table for THBA: $4.33 million (30%), $3.67 million (60%), $3.00 million (10%). Where is $5M? Table 2 shows THBA: $4.33 million (30%), $3.67 million (60%), $3.00 million (10%). No $5M. Let's check: With 5 arbitrators (A,B,C team; D,E player), all 10 triples:
- ABC: unanimous team -> $3M (10%)
- ABD, ABE, ACD, ACE, BCD, BCE: 2 team, 1 player -> $3.67M (60%)
- ADE, BDE, CDE: 1 team, 2 player -> $4.33M (30%)
- No triple is unanimous player because only 2 player arbitrators exist. So max is $4.33M. Correct.

So THBA outcomes are bounded by the pool composition; if pool is skewed, extreme outcomes disappear. This is important: the "average award of five arbitrators" $3.8M is the reference, but the true market value might differ. The paper defines accuracy relative to pool mean, not objective value. Gray zone: if all 5 arbitrators are biased toward team, pool mean is low, and DHBA/THBA just consistently produce low awards with low error relative to that biased mean. This is a key epistemic limitation.

Also, the independence assumption: arbitrators selected from pool of ~15 [PAGE 4 footnote 8]. If decisions are correlated due to shared ideology or MLB/Players Association influence, the variance reduction formula breaks down.

Settlement dynamics: 89% (2018) and 95% (2019) settle [PAGE 3]. DHBA changes the threat point in negotiation, making player's optimal bid credible.

I'll write this in detail.

SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX with citations.

RETROCAUSAL_GENEALOGY: trace from Bernoulli/LLN -> poker run-it-twice -> FOA -> Hasday's DHBA/THBA. Also Nedelescu's literature review of FOA variants [PAGE 4 footnote 7]. CBA 2021 expiration [PAGE 8/9]. Multi-week traps: file-and-trial month [PAGE 3], settlement cliff before hearings.

RECURSIVE_THEORY_OF_MIND: model the strategic interaction. Teams know players are risk averse. Players know teams use file-and-trial. Both submit numbers anticipating the other. Under FOA, player's dominant strategy may be safe low bid (regret minimization). Under DHBA, the payoff function smooths, making optimal bid a Nash equilibrium or at least less dominated. Counter-trap: teams may respond by submitting even lower bids knowing players will bid optimally? Actually if both bid optimally, the midpoint is closer to true value. Teams lose their "profit center" [PAGE 6]. Clock: CBA expiration 2021 creates window for change.

CROSS_LAYER_VETO_ADJUDICATION: Veto layers:
- Institutional: MLBPA and MLB must jointly agree; teams benefit from status quo, likely veto [PAGE 8-9].
- Administrative: THBA adds cost; DHBA reduces cost (2 arbitrators vs 3) [PAGE 6-7].
- Physical/scheduling: salaries must be set before season [PAGE 3 Tulis 2010]; adding arbitrators could delay, but DHBA is fast.
- Biomechanical: player health/injury risk is exogenous to arbitration but affects underlying value variance; not a veto of mechanism itself.
- Weather: null set.
- Epistemic veto: independence assumption failure; if arbitrators are correlated, no variance reduction.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Perfect correlation veto: If \(\text{Corr}(d_i,d_j)=1\), DHBA error = FOA error. Prediction: no improvement; average error stays $920K for panels. Verifiable via arbitrator voting record analysis (Kappa statistic).
2. Bid convergence veto: If \(|p_T - p_P| \to 0\), all mechanisms yield nearly identical awards. Prediction: DHBA/THBA error reduction approaches zero; variance reduction irrelevant. Verifiable by stratifying cases by bid spread (<5% vs >20%).
3. Settlement elimination veto: If file-and-trial is banned and 100% of cases go to hearing. Prediction: DHBA's ex ante value increases because more cases realize the variance reduction; however, teams may still prefer FOA if they can exploit risk aversion in pre-hearing negotiations. Verifiable by pilot in Arizona Fall League or minor league arbitration with DHBA vs FOA arms, measuring award dispersion and settlement rates.

I need to ensure no betting language. "Odds" is banned. I'll use "probability" or "likelihood". "Spread" banned. "Total" banned in betting context (but "total" as in sum is okay? Better avoid ambiguous "total" as betting term; use "sum"). "Moneyline" banned.

Word count: I'll write generously.

Let me draft now, ensuring LaTeX formatting is clean.

For citations, I'll use [PAGE N] exactly. Verbatim quotes: I'll quote short phrases from the paper with page markers.

Let's begin.

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
</RLVR_COUNTERFACTORY_VETOES>

Wait, tag name is <RLVR_COUNTERFACTUAL_VETOES>.

Need to be careful with LaTeX in XML. Use standard LaTeX, no issues with < > in equations (avoid using raw < inside text). Use \lt or words.

Let's write.

THINK_TRACE content (approx 500-600 words):
- Start with the core problem: FOA binary award creates discontinuity. Award \(A \in \{p_T, p_P\}\). Variance is high because small preference shifts flip the entire award.
- Risk asymmetry: players less risk tolerant, single case vs repeat player teams. Source: paper [PAGE 3].
- Empirical evidence: Epstein found settlements $150K and $90K below projections [PAGE 3]. Table 1 shows half of player "wins" were at or below projected salary [PAGE 6].
- Mechanism: Law of Large Numbers applied to independent arbitrator draws. Coin flip analogy: n=1 gives 0% chance within $100K of EV; n=100 gives 96% [PAGE 2].
- DHBA math: two independent arbitrators, ternary outcome. Error drops from $960K (single) to $480K [PAGE 4-5].
- THBA: three independent arbitrators, error drops to $320K [PAGE 7-8].
- Gray zone: Accuracy is defined relative to pool mean \(\mu = \$3.8M\), not objective market value. If pool is biased, all mechanisms are precisely wrong. Independence assumption is critical; correlated arbitrators nullify gains.
- Settlement dynamics: file-and-trial ~1 month [PAGE 3]; DHBA changes threat point, encouraging optimal bids ($2.9M example) [PAGE 5-6].
- Multi-week clock: CBA expiration 2021 [PAGE 8/9].

SOURCE_OPERATORS_AND_EQUATIONS: Formal definitions, LaTeX, units, page citations for each numeric claim.

RETROCAUSAL_GENEALOGY: Bernoulli, LLN, binomial; High Stakes Poker 2006-2011 [PAGE 2 footnote 5]; FOA history Monhait 2013, Tulis 2010, Chetwynd 2009 [PAGE 3 references]; Nedelescu 2013 variants [PAGE 4 footnote 7]; CBA 2017-2021 Article VI Part E(13) [PAGE 4 footnote 10]; 2021 expiration [PAGE 8/9].

RECURSIVE_THEORY_OF_MIND: Habit regression (players bid safe), counter-trap (DHBA makes optimal bid credible), clock (CBA, settlement window). Nested modeling: team models player as risk averse -> lowballs; player anticipates -> bids safe; DHBA breaks cycle.

CROSS_LAYER_VETO_ADJUDICATION: Veto layers as above. Physical: none direct, but pre-season deadline [PAGE 3]. Biomechanical: injury risk raises value variance. Weather: null. Institutional veto: teams likely oppose [PAGE 8-9]. Administrative cost: THBA vs DHBA [PAGE 7].

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with exact predictions.

Let's write it out fully now. I'll monitor word count mentally. Need >=1000 words total. I'll write substantial content.

One thing: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must include [PAGE N] and some verbatim quotes.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central derivation proceeds from a binary discontinuity to a smoothed stochastic mechanism. Under MLB’s current final-offer arbitration (FOA), the award is a discontinuous random variable \(A_{\text{FOA}} \in \{p_T, p_P\}\), where \(p_T\) and \(p_P\) are the team and player salary bids in U.S. dollars. Because the arbitrator must select exactly one submitted number with no compromise, an infinitesimal shift in an arbitrator’s preference can flip the award by millions of dollars. Hasday identifies this high variance as structural disadvantage to players, who are “generally less willing than teams to take risk” because teams possess “deeper pockets” and can “spread risk over arbitrations with multiple players over multiple years” [PAGE 3]. The empirical anchor is Epstein’s finding that in 2018, 163 settling players received an average of \$150,000 less than projected, and in 2019, 191 settling players received an average of \$90,000 less [PAGE 3]. Table 1 further shows that roughly half of player “wins” in 2018–2019 produced awards at or below projected salary, confirming regression to safe, suboptimal bids [PAGE 6].

Hasday’s counter-mechanism imports the “Running it Twice” poker procedure, itself justified by the Law of Large Numbers. The paper’s coin-flip illustration shows that with one flip, the probability of landing within \$100,000 of the \$500,000 expected value is 0%; with two flips it rises to 50%; with ten flips to 66%; and with one hundred flips to 96% [PAGE 2]. This maps directly onto independent arbitrator draws: increasing the number of independent decision-makers concentrates the realized award around the pool mean \(\mu\).

The multi-hop error calculation is the paper’s analytical core. Using the Betances–Yankees example (\(p_T = \$3\) million, \(p_P = \$5\) million) and a five-arbitrator pool where A, B, C favor the team and D, E favor the player, the pool mean is \(\mu = \$3.8\) million [PAGE 4]. A single arbitrator produces an average absolute error of \$960,000; the existing three-arbitrator majority-vote panel produces \$920,000 [PAGE 4–5]. Double-Header Baseball Arbitration (DHBA) samples two arbitrators independently without replacement. If they agree, that bid wins; if they split, the award is the midpoint \((p_T + p_P)/2 = \$4\) million. Across the ten possible pairs, three yield \$3 million (error \$800,000), one yields \$5 million (error \$1.2 million), and six yield \$4 million (error \$200,000), for an average error of \$480,000 [PAGE 5]. Triple-Header Baseball Arbitration (THBA) samples three arbitrators. Unanimous team panels pay \$3 million; 2–1 team panels pay the two-thirds point \(\frac{2}{3}p_T + \frac{1}{3}p_P = \$3.667\) million; 2–1 player panels pay \(\frac{1}{3}p_T + \frac{2}{3}p_P = \$4.333\) million. Across the ten triples, the average error falls to \$320,000 [PAGE 7–8].

Gray-zone audit: the paper defines “accuracy” as proximity to the five-arbitrator average \(\mu\), not to an objective market value. If the arbitrator pool is systematically biased toward either party, DHBA and THBA become precision machines for a biased mean—accurate relative to \(\mu\), but not necessarily correct relative to true economic value. The entire variance-reduction theorem collapses if arbitrator decisions are correlated rather than independent; the paper assumes independence but acknowledges arbitrators are drawn from a mutually agreed pool of roughly fifteen [PAGE 4, footnote 8]. A second gray zone is the settlement shadow: 89% of eligible cases settled in 2018 and 95% in 2019 under a “file-and-trial” regime that bars negotiation for roughly one month between submission and hearing [PAGE 3]. DHBA alters the threat point in that shadow, but the paper does not model how teams might adjust their bids or file-and-trial behavior endogenously in response. Finally, the institutional clock is the 2021 expiration of the MLB Collective Bargaining Agreement, which creates a finite legislative window for rule change [PAGE 8–9].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(p_T, p_P \in \mathbb{R}_{>0}\) denote team and player salary bids in USD. Let \(\mathcal{K} = \{1,\dots,K\}\) be the arbitrator pool, with each \(k \in \mathcal{K}\) possessing a deterministic preference \(d_k \in \{T,P\}\). The realized award of arbitrator \(k\) is \(a_k = p_T\) if \(d_k = T\), else \(a_k = p_P\). The pool reference mean is
\[
\mu = \frac{1}{K}\sum_{k=1}^{K} a_k \quad [\text{USD}],
\]
which for the paper’s Betances–Yankees example with \(K=5\), three team-leaning and two player-leaning arbitrators, is \(\mu = (3 \cdot 3 + 2 \cdot 5)/5 = 3.8\) million USD [PAGE 4–5].

The FOA error operator for a realized award \(A\) is
\[
\varepsilon(A) = |A - \mu| \quad [\text{USD}].
\]
The expected error over a set of \(N\) equiprobable arbitrator configurations \(\mathcal{C}\) is
\[
\mathbb{E}[\varepsilon] = \frac{1}{N}\sum_{c \in \mathcal{C}} |A_c - \mu| \quad [\text{USD}].
\]

Single-arbitrator FOA (\(N=K=5\)): three arbitrators yield \$3 million (\(\varepsilon = \$0.8\) million) and two yield \$5 million (\(\varepsilon = \$1.2\) million), giving \(\mathbb{E}[\varepsilon] = [3(0.8) + 2(1.2)]/5 = \$0.96\) million [PAGE 4–5].

Three-arbitrator majority-vote FOA (\(N=10\) panels): seven panels favor the Yankees (\(\varepsilon = \$0.8\) million) and three favor Betances (\(\varepsilon = \$1.2\) million), giving \(\mathbb{E}[\varepsilon] = [7(0.8) + 3(1.2)]/10 = \$0.92\) million [PAGE 5].

DHBA samples two distinct arbitrators \(i,j \sim \text{Unif}(\mathcal{K})\), \(i \neq j\), independently. The award map is
\[
A_{\text{DHBA}} =
\begin{cases}
p_T, & d_i = T \land d_j = T,\\[2pt]
p_P, & d_i = P \land d_j = P,\\[2pt]
\dfrac{p_T + p_P}{2}, & d_i \neq d_j.
\end{cases}
\quad [\text{USD}]
\]
For the example, \(p_T = 3\), \(p_P = 5\) [USD millions]. Three pairs (AB, AC, BC) pay \$3 million (\(\varepsilon = 0.8\)); one pair (DE) pays \$5 million (\(\varepsilon = 1.2\)); six mixed pairs pay \$4 million (\(\varepsilon = |4 - 3.8| = 0.2\)). Thus
\[
\mathbb{E}[\varepsilon_{\text{DHBA}}] = \frac{3(0.8) + 1(1.2) + 6(0.2)}{10} = \$0.48\text{ million} \quad [\text{PAGE 5}].
\]

THBA samples three distinct arbitrators. The award map is
\[
A_{\text{THBA}} =
\begin{cases}
p_T, & \text{unanimous } T,\\[2pt]
p_P, & \text{unanimous } P,\\[2pt]
\dfrac{2}{3}p_T + \dfrac{1}{3}p_P, & \text{majority } T\;(2T,1P),\\[6pt]
\dfrac{1}{3}p_T + \dfrac{2}{3}p_P, & \text{majority } P\;(1T,2P).
\end{cases}
\quad [\text{USD}]
\]
With only two player-leaning arbitrators in the pool, no unanimous player panel exists. One panel (ABC) is unanimous team (\(\varepsilon = 0.8\)); six panels are 2–1 team, paying \(3.666\ldots\) million (\(\varepsilon = |3.666\ldots - 3.8| \approx 0.1333\) million); three panels are 2–1 player, paying \(4.333\ldots\) million (\(\varepsilon = |4.333\ldots - 3.8| \approx 0.5333\) million). Therefore
\[
\mathbb{E}[\varepsilon_{\text{THBA}}] = \frac{1(0.8) + 6(0.1333) + 3(0.5333)}{10} \approx \$0.32\text{ million} \quad [\text{PAGE 8, footnote 15}].
\]

Breakdown and singularity regimes: (i) if \(p_T = p_P\), then \(\varepsilon = 0\) for all mechanisms and no differentiation exists; (ii) if all \(d_k\) are identical, DHBA and THBA degenerate to FOA with respect to \(\mu\), eliminating the variance-reduction benefit; (iii) if \(\text{Cov}(\mathbb{I}[d_i = T], \mathbb{I}[d_j = T]) > 0\), the independence assumption underlying the Law of Large Numbers concentration fails and the error reductions above are not achieved. Units throughout: currency in USD; probabilities dimensionless; arbitrator counts in integers. The paper’s binomial probabilities for the coin-flip analogy—0% for one flip, 50% for two, 66% for ten, 96% for one hundred, of falling within \$100,000 of the \$500,000 expected value—are taken from [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage stacks three layers. Bottom layer: the Law of Large Numbers and binomial convergence, traced to Bernoulli’s weak law and formalized through the binomial distribution; the paper explicitly frames repeated coin tosses as a binomial experiment with independent trials and constant success probability [PAGE 2, footnote 3]. Middle layer: the “Running it Twice” poker procedure, documented in televised high-stakes cash games on GSN’s _High Stakes Poker_ (2006–2011), including the October 5, 2007 Negreanu–Harman hand [PAGE 2, footnote 5]. In poker, running the board multiple times reduces variance without changing expected value, exactly the property Hasday transplants to arbitration. Top layer: final-offer arbitration (FOA), or “baseball arbitration,” with scholarly precedents including Monhait (2013), Tulis (2010), and Chetwynd (2009) [PAGE 3, references 7, 12, 2]. Nedelescu (2013) reviews prior FOA variants—Combined Arbitration, Double Offer Arbitration, Amended Final-Offer Arbitration, and Alpha-Final-Offer Arbitration—none of which use the repeated-draw structure [PAGE 4, footnote 7].

The procedural genealogy inside MLB is equally important. Salaries must be fixed before the season opens, creating a hard temporal deadline (Tulis, 2010) [PAGE 3]. The 2017–2021 Collective Bargaining Agreement governs arbitrator selection, panel announcements within 24 hours, and delayed vote disclosure [PAGE 4, footnote 10]. The CBA’s 2021 expiration generates a multi-week political trap: reform must be negotiated before the agreement lapses, yet teams, as the repeat players with deeper pockets, have little incentive to surrender a variance advantage they currently exploit through file-and-trial tactics [PAGE 3, 8–9]. The file-and-trial window—roughly one month between number submission and the hearing—functions as a seasonal trapdoor that pressures players into pre-hearing settlements on team terms [PAGE 3]. Historical player resistance is documented: agent Jeff Berry’s August 2018 memo urging players to “attack” arbitration, and MLBPA Executive Director Tony Clark’s March 2019 statement that the league made “sport” of the process [PAGE 3]. These retro-causal pressures mean the proposal is not merely a mathematical improvement but an intervention in an ongoing labor negotiation with a fixed calendar endpoint.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The strategic structure is a nested model of risk preferences. Layer zero: teams model players as risk-averse, single-shot agents with shallow pockets relative to the club’s multi-year, multi-player portfolio [PAGE 3]. Layer one: players anticipate team file-and-trial aggression and the million-dollar downside of a hearing loss, so they regress from optimal bids to safe bids. Hasday’s numerical illustration makes this explicit: with team bid \$1 million, two arbitrators valuing the player at \$1.3 million, and one at \$2 million, the player’s optimal bid is \$2.9 million, yielding an average \$1.63 million across three arbitrator draws despite losing two of them [PAGE 5–6]. The safe bid of \$1.5 million wins all three draws but yields only \$1.5 million, a \$130,000 sacrifice to variance avoidance [PAGE 6]. Empirically, Table 1 confirms that about half of player “wins” in 2018–2019 were at or below projected salary [PAGE 6], evidence of this crisis-habit regression.

DHBA is the counter-trap. By converting the binary all-or-nothing payoff into a smoothed ternary outcome, it reduces the dispersion of awards around the same mean. In the same arbitrator-preference scenario, submitting \$2.9 million under DHBA yields awards of \$1 million, \$1.95 million, and \$1.95 million—preserving the \$1.63 million average while narrowing the range [PAGE 6]. Because downside variance is compressed, the player’s optimal bid becomes credible, stripping the team of its “profit center” derived from the player’s risk aversion [PAGE 6]. The recursive layer is that teams may anticipate this shift and adjust their own bids downward, knowing the player will now bid closer to true value; however, the midpoint and two-thirds rules mechanically bound the award between the bids, so the team cannot exploit the mechanism unilaterally without moving its own bid closer to the player’s.

The clock layer is the settlement window and the 2021 CBA expiration [PAGE 3, 8–9]. Under FOA, the threat of a high-variance hearing forces early capitulation. Under DHBA or THBA, the hearing threat is less fearsome for the player, which should lengthen negotiations and push settlements closer to projected value. The theory-of-mind loop closes only if both parties recognize that the variance reduction is symmetric: it helps the risk-constrained party (the player) more than the risk-absorbing repeat player (the team), which is precisely why, as Hasday notes, well-resourced poker professionals decline “running it twice” with less-resourced peers [PAGE 6]. Teams therefore have a recursive incentive to veto the change even while publicly endorsing fairness.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Veto Layer 1 — Institutional / Labor: MLB and the MLB Players Association must jointly consent to any arbitration reform. Because teams currently capture the variance advantage—evidenced by settlements running \$90,000–\$150,000 below projections and high settlement rates of 89%–95% under file-and-trial [PAGE 3]—team owners hold a structural veto over DHBA/THBA adoption. Hasday concedes it “may be a battle for the players to get teams to agree” [PAGE 8–9]. This is not a physical or biomechanical constraint; it is a bargaining-power constraint.

Veto Layer 2 — Administrative / Cost: THBA requires three arbitrators per case instead of MLB’s current three-panel collective vote; DHBA requires only two arbitrators, making it “less expensive for MLB” because “each hearing would require only two arbitrators instead of three” [PAGE 6–7]. The marginal cost of THBA may be vetoed by league budget offices even if DHBA is cost-neutral or cost-saving.

Veto Layer 3 — Scheduling / Physical: Salaries must be determined before the season begins (Tulis, 2010) [PAGE 3]. Adding independent arbitrator hearings introduces scheduling load, though DHBA’s two-arbitrator format is faster than a three-person collective deliberation and introduces no weather-dependent or biomechanical dependency. There is no weather variable in this mechanism; the sport’s outdoor setting is irrelevant to the arbitration chamber. Biomechanically, player injury risk affects the underlying value \(p_P\) but does not alter the arbitration algebra; health variance is exogenous to the mechanism and therefore not a veto point.

Veto Layer 4 — Epistemic / Independence: The proof requires \(\text{Cov}(d_i,d_j) = 0\). If arbitrators share correlated ideologies, league alignments, or repeat-player relationships, the Law of Large Numbers concentration fails and DHBA/THBA provide no error reduction relative to FOA [see breakdown regimes, SOURCE_OPERATORS_AND_EQUATIONS]. This is the strongest technical veto: if the arbitrator pool is not independent, the entire accuracy claim collapses.

Veto Layer 5 — Tie Outcomes: DHBA permits split awards (midpoint), whereas THBA always yields a winner and loser [PAGE 7]. Some poker players prefer three runs to avoid ties; Hasday argues ties are “probably beneficial for team-player relations” in MLB [PAGE 7]. Owners who prefer clear winners may veto DHBA on relational grounds despite its cost savings.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Perfect Arbitrator Correlation Veto. Suppose the arbitrator pool exhibits \(\text{Corr}(\mathbb{I}[d_i = T], \mathbb{I}[d_j = T]) = 1\) for all \(i \neq j\); all arbitrators lean identically. Then every DHBA pair and THBA triple returns the same bid as FOA. Prediction: average error remains at the single-arbitrator level of \$960,000 or the three-panel collective level of \$920,000, not \$480,000 or \$320,000; the variance-reduction term vanishes because independent samples no longer exist. Verification: compute Fleiss’ Kappa or Cohen’s Kappa on historical MLB arbitrator voting records; if Kappa \(\approx 1\), the mechanism is vetoed by correlation.

Scenario 2 — Bid-Convergence Veto. Suppose \(|p_T - p_P| < 0.05 \cdot p_P\) (bids within 5%). Then the midpoint and two-thirds points lie within a narrow band of the bids themselves. Prediction: \(\mathbb{E}[\varepsilon_{\text{DHBA}}]\) and \(\mathbb{E}[\varepsilon_{\text{THBA}}]\) converge to near zero regardless of mechanism, so the absolute error improvement over FOA falls below \$50,000 and the reform has no material distributional effect. Verification: stratify settled cases by bid spread; for the narrow-spread stratum, compare award dispersion under FOA versus simulated DHBA/THBA using the same bids.

Scenario 3 — Settlement-Elimination Veto. Suppose file-and-trial is prohibited and 100% of eligible cases proceed to hearing (eliminating the 89%–95% settlement rate [PAGE 3]). Prediction: DHBA’s ex ante value rises because more cases realize the variance reduction; expected player award error falls from \$920,000 (FOA panel) to \$480