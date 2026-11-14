---
source: "2026 - The Traveling Tournament Problem An Overview - Bulck et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 22
model: deepseek/deepseek-v4.1-flash-1017
words: 9219
---

<NATIVE_REASONING>
The user wants a deep multi-section analysis of this TTP survey paper. Note the constraints: zero betting lines, formal LaTeX equations, page citations with verbatim quotes, >=1000 words across exact XML sections. The source is a pure optimization/math paper — no sports betting content. The "RECURSIVE_THEORY_OF_MIND" and "RETROCAUSAL_GENEALOGY" sections are framed in the prompt as crisis habit regression vs counter-trap vs clock, historical lineage, multi-week traps. I need to map these onto the TTP literature/algorithm domain without inventing betting content. I should treat "crisis habit regression" as algorithmic habit regression (e.g., falling back on canonical circle-method construction, or local search neighborhoods), "counter-trap" as counterfactual traps, "clock" as the branching/verify clock — computational time budget. That's a legitimate reinterpretation: the foundry framing seems designed for forecasting but here the drive source is a math survey. I must not fabricate betting content. I'll keep it rigorous and framed as an epistemic/algorithmic auditing exercise.

Let me gather exact quotes and page numbers.

Page 1: "At its core, the TTP seeks to minimize the total travel distance incurred by teams that travel directly between opponents' venues during consecutive away games." arXiv:2609.03612v1 [math.OC] 3 Sep 2026.

Page 2: "the largest TTP real-distance instance solved to optimality contains merely 10 teams." Also: "each team in itself solves a vehicle routing problem: using its own venue as the 'depot', it visits every other team in road trips with a given maximal length (the 'capacity' of the vehicles), while minimizing travel distance." Also "timetables are inherently fragile: even a minor modification in one game triggers a cascade of changes that may ultimately compromise the quality or even the feasibility of the resulting schedule."

Page 3: research waves; "in 2008 Irnich (2010) succeeded to prove optimality for the eight-team NL8 instance."

Page 4: Trick quote: "Given a schedule, simply exchanging the opponents on two games led to a cascading set of necessary changes that might not result in a feasible schedule."

Page 5: "even when I reduced the problem to a double round-robin ... as long as I tried to find a schedule with minimum distance traveled, I could not even solve a six team instance to optimality!"

Page 5: definitions: n ≥ 4 even, D symmetric, d_{i,j} non-negative integers, triangle inequality assumption, d_{i,i} = 0. "A leg of a road trip as a single direct journey between two venues." Compact 2RR uses 2n−2 rounds.

Page 6: TTP(k) definition: constraints C1 (at-most, trip length ≤ k) and C2 (no-repeater). "Unless otherwise specified, this paper assumes that k = 3". UTTP k = n−1. Complexity: Bhattacharyya UTTP NP-hard via (1,2)-TSP; Thielen & Westphal TTP(3) NP-hard via 3-SAT; Chatterjee for k>3; TTP(2) open. "Bendayan et al. (2023) show that the UTTP is APX-hard, thus no PTAS exists unless P = NP". "This implies that TTP(2) has a PTAS (see Zhao & Xiao (2025b))".

Page 7: Table 1 complexity; variants m-TTP, B-TTP, multi-round, RTTP, TTP-PV, TCDMP, TP-TTP, fairness, TUP.

Page 8: Table 2 instance classes; page 8: "the largest instance solved to proven optimality contains only ten teams."

Page 9: ILB: "the 'independent lower bound' (ILB), so named because it breaks down the TTP instance into n sub-problems that can be solved independently." ∆ = Σ_{i≠j} d_{i,j}. Proposition 1: ILB(2) = ∆ + nγ, γ min weight perfect matching. Easton (2003): computing ILB is NP-complete in the strong sense for constant k. Proposition 2: ILB(k) = Σ π_i (VRP with capacity k).

Page 10: Proposition 3: ILB(n−1) = nρ, ρ optimal TSP tour length. Open Problem 2 (Bao & Trick): ILB(k) tight for RTTP with 2n−2+α time slots. "for ILB(3) within 5% of the optimal value, according to Miyashiro et al. (2012)". Proposition 4: τ = n(2n−2) − β/2. Proposition 5: at least n² + n/2 − 1 legs.

Page 11: Proposition 6: Fujiwara bounds (4/3)n² − n etc. Proposition 7: MNLLB. Cheung (2009) Benders cuts.

Page 12: Proposition 8: nσ + Σ d_i^home/2. Proposition 9: (2/(k−2))(∆ − Σ d_i^home). Proposition 10: 2∆/k. Corollary 1: k-approximation. Upper bound 2∆.

Page 12-13: approximation ratios: Thielen & Westphal 1.5 + O(1/n); 1+16/n; Xiao & Kou 1+4/n; Imahori 1+24/n; Zhao & Xiao 1+3/n and 1+5/n; Kanaya & Takazawa 1+9/n O(n³).

Page 13: TTP(3) APX-hard; CD-TTP(3) 1+O(1/n); Miyashiro 2+O(1/n); Yamaguchi 1.667; Zhao et al. 1.598+ε; k: (5k−7)/(2k), (2k−1)/k; Westphal & Noparlik 5.875 claimed, Zhao & Xiao say real 6.667, then 5, 4 when k ≥ n/2; Imahori 2.75 for UTTP.

Page 14: Tables 3 and 4.

Page 14-15: exact methods: Benoist et al. 2001 hybrid Lagrangian + CP; Easton et al. 2003 branch-and-price, four days on 20 processors; Irnich shortest path pricing; Uthus DFS* 4 processors 100 seconds; Uthus A* iterative deepening 10 teams. "For over a decade, apart from the constant distance instances, there has been no advancement in optimally solving instances with more than 10 teams. The current best upper bound for NL12 is 110,729, with the best lower bound being 108,629, leaving a gap of approximately 2%." Open Problem 4.

Page 15-16: heuristics: Henz fix-and-optimize; ACO; PRS and PTS; Langford SwapHomes; Russell & Leung 1994 predates PRS; TARS/GPTS; Costa et al. 2012 disconnected search space.

Page 16-17: Open Problems 5, 6, 7. Loyen et al. 2025 claim.

Page 17: conclusion; benchmark scarcity; TTP-TUP trade-off; single documented real-world application.

Let me compute some numbers to make the derivation concrete:
- NL12 gap: (110729 − 108629)/108629 = 2100/108629 ≈ 0.01933 → 1.93%, consistent with "approximately 2%".
- ILB(3) within 5% of optimal.
- For n=10: 2n−2 = 18 rounds, matching Figure 1's R1..R18. Good.
- Proposition 5: n² + n/2 − 1 = 100 + 5 − 1 = 104 legs for n=10.
- Proposition 6 for n ≡ 1 mod 3: n=10 → (4/3)(100) − (5/6)(10) − 1 = 133.33 − 8.33 − 1 = 124 legs. So TTP(3) n=10 lower bound is 124 legs vs 104 for UTTP. Ratio 124/104 ≈ 1.192.
- For n=12: (4/3)(144) − 12 = 192 − 12 = 180 legs (n ≡ 0 mod 3). Proposition 5: 144 + 6 − 1 = 149.
- Proposition 10 with k=3: 2∆/3. So lower bound = 0.667∆. Corollary 1: k-approximation → 3-approx for k=3, but Table 3 gives much better: 1.7+ε (Zhao et al. 2025 for TTP(4)? Actually Table 3 lists 1.598+ε for TTP(3) and 1.7+ε for TTP(4)). Note the trivial ratio: upper bound 2∆ / lower bound 2∆/k = k. So Corollary 1: any algorithm is k-approximation. But wait — the upper bound 2∆ requires each team visiting everyone in road trips of length 1... that's a "each team visits every other team during a road trip of length 1", i.e., all away games singleton trips: total = Σ_i Σ_j (d_ij + d_ji) = 2∆. Yes.
- Degenerate: for k=2, 2∆/2 = ∆, and ILB(2) = ∆ + nγ. So Proposition 1 dominates Proposition 10 for k=2 since nγ > 0. Note: for k = 2, Proposition 10 gives ∆ which is weaker than ∆ + nγ. So the "k-approximation" corollary is loose for k=2 since ILB(2) is stronger: ratio ≈ 2∆/(∆+nγ).
- Singularity: k = 1 is infeasible — "Since no compact timetable exists that perfectly alternates between home and away games for all teams (see e.g., de Werra (1981)), it is clear that k must be greater than 1." [PAGE 6]
- Proposition 9 has singularity at k = 2: 2/(k−2) diverges. At k=2, denominator zero. So breakdown regime: k → 2⁺ makes the bound unbounded/void — actually at k = 2 the bound 2/(0)·(...) is undefined; the correct k=2 bound is Proposition 1. That's a clean exact singularity to state.
- Also ∆ − Σ d_i^home ≥ 0; if all trips are length 1 then Σ d_i^home = ∆ (each team leaves and returns for every away game, distance d + d = 2d... hmm). Let's think: for a team, home-excursions: each road trip begins with a departure from home (d_{i,first}) and ends with a return (d_{last,i}). If all road trips have length 1, then departure and return are the same journey doubled: total d_i^home = 2 Σ_j d_ij. Summing over i: Σ_i d_i^home = 2∆. So ∆ − Σ d_i^home = −∆ < 0 → bound negative, vacuous. Indeed, at that extreme, Proposition 9 is vacuous. So there's a validity domain: the bound requires Σ_i d_i^home ≤ ∆. Good — that's a genuine "breakdown regime" statement.
- Proposition 8: nσ + Σ d_i^home/2. MST σ ≤ ... For LINE/CIRC instances.
- CD-TTP: τ legs ↔ distance since d=1 per leg. Proposition 4: τ = n(2n−2) − β/2. Check with n=10: total games = 90; each game... hmm, legs. τ + something. Let's verify consistency: total number of "journeys" = for each team, number of away games minus number of trips + ... Actually a team's legs: if it has a away games grouped into t trips, legs = a + t (each trip of length L has L legs... wait a trip with L away games has L legs? The paper: "the road trip of team CI to teams CH and MI ... consists of legs CI-CH, CH-MI, and MI-CI" — that's 3 legs for 2 away games, including return home. Hmm, so legs include the return? For a trip of length L, legs = L+1 counting the return home. Hmm but for L=1 (single away game), legs = 2 (there and back)? Then total legs = Σ (away games + number of trips) = n(n−1) + (number of trips). And breaks β... Let's check formula: τ = n(2n−2) − β/2. For a team with maximal breaks 2n−4 (all home then all away): that team has n−1 away games in one trip? Then legs = n−1+1 = n... Hmm.

Let me instead verify: Σ over teams of (away games) = n(n−1). τ = n(n−1) + T where T = total trips. Formula says τ = 2n²−2n − β/2 = n(2n−2) − β/2. With τ = n(n−1) + T, then T = n² − n − β/2 = n(n−1) − β/2. So total trips T = n(n−1) − β/2. Makes sense: each trip is preceded by a home game or start of season... Actually the number of trips equals number of away-blocks; the number of "away blocks" plus "home blocks" relates to breaks. Each team has H home blocks and A away blocks with |H − A| ≤ 1, and breaks = (games − blocks) summed. Total blocks = 2n−2 − β_i per team... then away blocks A_i = Σ... Summing: Σ_i A_i = T. Σ_i (2n−2 − β_i) = n(2n−2) − β, split into home and away blocks ≈ half each, but with imbalance ±1 for teams starting/ending home vs away. Since each round has n/2 home teams... The formula in Proposition 4 is stated as exact so I'll accept. Note: with T = n(n−1) − β/2, and β_max = 2n²−5n+2, T_min = n²−n − (2n²−5n+2)/2 = n²−n−n²+2.5n−1 = 1.5n − 1. And τ_min = n(n−1) + 1.5n − 1 = n² − n + 1.5n − 1 = n² + 0.5n − 1 = n² + n/2 − 1. ✓ matches Proposition 5. 

So I can present a verification derivation: τ = n(n−1) + T, T = n(n−1) − β/2 → τ = n(2n−2) − β/2, and β_max = 2(2n−4) + (n−2)(2n−5) = 2n²−5n+2. Verify: 2(2n−4) = 4n−8; (n−2)(2n−5) = 2n²−5n−4n+10 = 2n²−9n+10. Sum = 2n²−5n+2 ✓. Then τ_min = n(2n−2) − (2n²−5n+2)/2 = 2n²−2n − n² + 2.5n − 1 = n² + 0.5n − 1 ✓.

For n=10: β_max = 200−50+2 = 152; τ_min = 100+5−1 = 104. And n(2n−2) = 180, so 180 − 76 = 104 ✓.

Also note Proposition 6 for n=10 gives 124 > 104, consistent (TTP(3) restricts trips ≤3, forcing more legs).

Now check Fujiwara bound n ≡ 1 mod 3, n=10: (4/3)·100 − (5/6)·10 − 1 = 400/3 − 50/6 − 1 = 133.333 − 8.333 − 1 = 124.0 exactly. Nice integer.

n ≡ 2 mod 3, e.g., n=8: (4/3)·64 − (2/3)·8 = 85.333 − 5.333 = 80. And Proposition 5 for n=8: 64+4−1 = 67.

NL12: n=12, 22 rounds, 132 games. Lower bound 108629, upper 110729, gap 2100 absolute, 1.93%.

NL12 approximation check: is 110729 consistent with 2∆ upper bound? Can't compute ∆ from paper. Skip.

Also: Easton et al. 2003 solved NL8 in ~4 days on 20 processors; Uthus DFS*: 4 processors, 100 seconds. Speedup: 4 days = 345,600 s on 20 processors = 6.912e6 processor-seconds; vs 400 processor-seconds → factor ≈ 17,280. That's a nice derived quantity (two orders of magnitude+ — 1.7e4).

Also "ILB(3) within 5%": Miyashiro et al. 2012.

Now, invariants: "ZERO BETTING LINES" — fine, none. "ZERO TOY EQUATIONS" — provide formal LaTeX with units and assumptions and singularity regimes. Units: distances in "units of the distance matrix D" (non-negative integers, e.g., miles in NL instances); time in seconds/processor-seconds; ratios dimensionless; legs dimensionless count.

Cite exact [PAGE N] markers with verbatim quotes.

Word counts: THINK_TRACE ≥400 words; total ≥1000. I'll write substantial sections.

Now for RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps. I'll trace: Campbell & Chen 1976 (basketball), Ball & Webster 1977, Russell & Leung 1994 (baseball, anticipates PRS), de Werra 1981 (HAP impossibility of perfect alternation), Trick's 1995 MLB request, Easton et al. 2001 CP paper, Easton 2003 PhD (ILB NP-completeness), Easton et al. 2003 branch-and-price, Irnich 2010, Uthus 2009/2012, Bhattacharyya 2009/2016, Thielen & Westphal 2011/2012, Chatterjee 2021, Bendayan 2023, Zhao & Xiao 2025 series, Fujiwara 2007, Urrutia & Ribeiro 2006, Yamaguchi 2011, Miyashiro 2012, Westphal & Noparlik 2014, Hoshino & Kawarabayashi 2012/2013, Anagnostopoulos 2006, Ribeiro & Urrutia 2007, Di Gaspero & Schaerf 2007, Costa 2012 connectivity, Langford 2010 overlooked, Van Bulck & Goossens 2023, Frohner 2023 beam search, Durán 2019 (Argentina basketball). Multi-week traps: the 5.875 → 6.667 correction (a published ratio stood 11 years, 2014→2025, and was wrong due to at-most violation); the "PRS attribution" error (Anagnostopoulos/Ribeiro vs Russell & Leung 1994); the Langford 2010 overlooked paper; the "TTP(2) ∈ P?" — PTAS exists but complexity status open (a classic trap: approximability ≠ tractability); the "DFJ/2∆ trivial k-approx" being mistaken for state of the art; Loyen et al. 2025's "no connected neighborhood" claim being based on a small sample and a statistical fallacy (random solutions are almost maximally different on average) — the paper rebuts this on [PAGE 17].

Multi-week traps in a "forecasting" sense: I should keep it as research-program traps — e.g., the 10-team optimality plateau persisting "for over a decade" [PAGE 15].

RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock." I'll map to: (i) crisis habit regression = the field's recurrent fallback to the canonical circle-method construction and to PRS/PTS local search when stuck (the "canonical construction... remains the most commonly used starting solution to date" [PAGE 17]); also Trick's own regression to IP after heuristics failed [PAGE 4]. (ii) Counter-trap = the assumption that adding neighborhoods/constraints solves it; the actual counter-trap is that the difficulty is in the core compact 2RR minimum-distance problem, not the "complicating" constraints [PAGE 5]. (iii) Clock = computational time budget: 4 days × 20 processors, 100 s × 4 processors, memory blowup for A*, and the 2% NL12 gap as an unresolved clock. Also the "clock" as the round index r ∈ {1..2n−2} — the temporal axis of the timetable. I'll do both readings: the season clock (rounds) and the machine clock (CPU).

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto. Here: physical layer = venue geography/distance matrix D and triangle inequality; biomechanical = the at-most constraint C1 as fatigue proxy ("to avoid excessive travel fatigue, long periods without home games for the fans" [PAGE 2]) — note the paper explicitly says fatigue is the motivation, and the at-most constraint is the formal proxy; weather = stadium unavailability/weekend constraints from MLB (Trick's quote [PAGE 4]) that were stripped out to get a solvable problem. Veto proof: any claimed improvement must be feasible under C1 and C2 and the 2n−2 compactness; a schedule violating no-repeater is vetoed regardless of objective value. Also: instance D that violates triangle inequality exists ("there are benchmark instances that violate this assumption" [PAGE 5]) — so approximation-ratio proofs that assume triangle inequality are vetoed on those instances. That's a real cross-layer veto: the metric assumption is a load-bearing layer.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios with predictions. Need to be checkable against the RobinX repository / paper. E.g.:
1. Veto the 5.875 claim: predict that any re-derivation of Westphal & Noparlik (2014) on a witness instance with k ≥ 4 yields a schedule violating C1 or an objective ratio ≥ 6.667. Verification: run the construction on GAL/NFL instances with k=4 and check at-most feasibility. Prediction: at-most violation appears at rate > 0 for n ≥ 8.
2. Veto "ILB(3) within 5% implies near-tight": predict that on NL12 the ILB(3) is strictly below 108,629 (i.e., ILB is not the binding lower bound) — hmm, can I predict? Safer: predict that MNLLB ≥ ILB strictly for NL12 and that the gap between ILB and MNLLB is ≥ 0.5% of ILB. Reasonable but unverifiable-ish. Alternatively: predict that if a proven optimum for NL12 is found, it will be ≤ 110,729 and ≥ 108,629, and the ratio (opt − LB)/LB ≤ 1.93%. That's a tautology-ish but it's a genuine prediction interval.
Better: prediction that no TTP(2) polynomial algorithm is found and that TTP(2)'s complexity remains open — not verifiable.
3. Veto connectivity claim: predict that a connected neighborhood exists but requires chains of length ≥ some function; specifically predict that for n = 8, the minimum number of PRS/PTS/GPTS moves between two random feasible TTP(3) timetables exceeds 1 with probability ~1 (i.e., diameter > 1) — verifiable by exhaustive enumeration for n=6 or 8. Prediction: search-space graph diameter grows at least linearly in n.
4. Veto "CD-TTP optimal ⇒ complementary HAP set" (Open Problem 3): predict a counterexample at n = 6 or n = 8 where every optimal CD-TTP(3) solution has a non-complementary HAP set. Verifiable by exhaustive/branch-and-bound enumeration.
5. Veto the k-approximation corollary tightness for k=3: predict the trivial ratio 3 is never attained by the 2∆ singleton-trip schedule on any NL instance, because ILB(3) > 2∆/3 strictly whenever D has non-degenerate structure. Hmm, actually 2∆/ILB(3) ≤ 3, so the trivial schedule's ratio ≤ ... The claim "any algorithm is a k-approximation" — for the singleton-trip algorithm the ratio is 2∆ / LB. For k=3, LB = 2∆/3 gives exactly 3. So predict strict excess: on NL10, 2∆/ILB(3) < 3 strictly (since ILB(3) > 2∆/3 generally when trips of length 3 beat length-1). Good, verifiable: compute ∆ and ILB(3) for NL10 from RobinX. Prediction: ratio ∈ (2.0, 2.8).

I'll give 3 clean ones with falsifiable numeric predictions.

Let me also make sure the THINK_TRACE is ≥400 words and multi-hop: derive ILB(2) from first principles, derive Proposition 5 chain, derive the k-approximation corollary, examine the k=2 singularity in Proposition 9, examine the APX-hardness/PTAS tension, the 10-team plateau.

Let me draft equations carefully.

Definitions:
- $T$, $|T| = n \ge 4$ even; $R$, $|R| = 2n-2$ compact; $D = (d_{ij}) \in \mathbb{Z}_{\ge 0}^{n\times n}$ symmetric, $d_{ii}=0$.
- Distance units: "distance units of the matrix D (integer, e.g., km or miles for NLx)". A solution's objective $Z = \sum_{i\in T} L_i$ where $L_i$ = total distance traveled by team i, units of distance.
- $\Delta = \sum_{i,j \in T, i \ne j} d_{ij}$ (note: this double counts each unordered pair twice; total travel if every away game is a singleton trip is $\sum_i \sum_{j\ne i} (d_{ij} + d_{ji}) = 2\Delta$).
- $\gamma$ = min weight perfect matching on $K_n$; $\sigma$ = MST weight; $\rho$ = optimal TSP tour length; $\pi_i$ = optimal VRP value for team i with capacity k.
- $\beta$ = total breaks, $\tau$ = total legs.
- ILB(2): $Z \ge \Delta + n\gamma$.
- ILB(k): $Z \ge \sum_i \pi_i$.
- ILB(n−1): $Z \ge n\rho$.
- Prop 8: $Z \ge n\sigma + \frac{1}{2}\sum_i d_i^{home}$.
- Prop 9: $Z \ge \frac{2}{k-2}(\Delta - \sum_i d_i^{home})$.
- Prop 10: $Z \ge 2\Delta/k$.
- Corollary 1: $Z_{ALG}/Z^* \le k$ since $Z_{ALG}\le 2\Delta$ and $Z^* \ge 2\Delta/k$.
- Prop 4: $\tau = n(2n-2) - \beta/2$.
- Prop 5: $\tau \ge n^2 + n/2 - 1$.
- Prop 6: $\tau \ge \frac{4}{3}n^2 - n$ (n≡0), $\frac43 n^2 - \frac56 n - 1$ (n≡1), $\frac43 n^2 - \frac23 n$ (n≡2).
- Prop 7: MNLLB: $\min_{\sum \tau_i \ge \mu_n} \sum_i \pi_i$.

Singularities/breakdown:
(a) $k=1$: infeasible, no compact 2RR alternates perfectly [PAGE 6].
(b) Prop 9 denominator $k-2$: singular at $k=2$; also vacuous when $\sum_i d_i^{home} \ge \Delta$ (which holds with equality-ish in the all-singleton-trip regime where $\sum_i d_i^{home} = 2\Delta$, giving a negative bound).
(c) Triangle inequality assumed for LB/approx but violated by some benchmark instances [PAGE 5] → proof obligations void.
(d) ILB NP-hard to compute for constant k>2 in the strong sense [PAGE 9] — so the "bound" is only a bound, not a tractable certificate.
(e) $\beta_{max}$ expression valid only for $n$ even, compact 2RR.
(f) The $k$-approx corollary requires the upper bound $2\Delta$ which requires trips of length 1 to be feasible → requires $k\ge1$... fine, always feasible (k≥2).
(g) APX-hardness ⟹ no PTAS for UTTP and for k>2; but TTP(2) has a PTAS → the "hardness frontier" sits at k=3.

Hmm, careful: Table 1 says APX-hard for TTP(3)? Let me re-read. "PTAS vs. APX-hard: TTP(2) PTAS Thielen & Westphal (2012); Zhao & Xiao (2025b) APX-hard; APX-hard Bendayan et al. (2023)" — ordering is confusing but the text says: Bendayan et al. (2023) show UTTP is APX-hard; "This result has later been generalized to arbitrary k > 2 by Zhao & Xiao (2025b)." So APX-hard for k>2, PTAS for k=2. Good: hardness frontier exactly at k=3.

Also note: TTP(2) has a PTAS yet its complexity status is open — that's the interesting tension: PTAS does not imply P (unless P=NP it doesn't, but a PTAS is compatible with NP-hardness!). Actually NP-hard problems can have PTAS (e.g., Euclidean TSP). So Open Problem 1 is genuinely open and the PTAS result tells us nothing about P vs NP-hard. Good "gray-zone audit" point.

Another: "ILB(2) cannot be attained if the perfect matching used to compute the bound is unique" [PAGE 10] — a tightness obstruction.

Now the "multi-week traps" — I'll frame as multi-year research traps but also note the "multi-week" framing can be read as the multi-week season structure: 2n−2 rounds ≈ weeks, and traps arising from short-horizon greedy choices (scheduling week-by-week → "it didn't take long to reach a point where the schedule could not be completed" [PAGE 4]). That's a real multi-week trap: greedy round-by-round construction dead-ends. Good mapping.

Also for RECURSIVE_THEORY_OF_MIND: the "clock" — n=10 plateau since 2012 (Uthus et al. 2012 A*) — "For over a decade, apart from the constant distance instances, there has been no advancement" [PAGE 15]. And the memory-issue wall.

I should be careful about one thing: the prompt frames this as "GSE + GSI Frontier Reasoning Foundry" with "DRIVE SOURCE". I'll just deliver the analysis of the paper. No betting.

Let me include a brief note at the top (outside XML?) — the spec says ">= 1,000-WORD DEPTH across these exact XML sections" with those five sections. I'll output exactly the five XML sections, maybe with a one-line preamble. Keep preamble minimal — maybe none, to be safe. I'll add a short header line. Actually safer: just the five sections in order.

Let me now write.

Word budget: THINK_TRACE ~600 words, SOURCE_OPERATORS ~700, RETROCAUSAL ~450, RECURSIVE ~450, CROSS_LAYER ~400, RLVR ~400. Total ~3000. Good.

Write with precision, cite pages.

For quotes, use exact text. Let me double check a few verbatim:

[PAGE 1]: "At its core, the TTP seeks to minimize the total travel distance incurred by teams that travel directly between opponents' venues during consecutive away games."

[PAGE 2]: "the largest TTP real-distance instance solved to optimality contains merely 10 teams."

[PAGE 2]: "timestamps are inherently fragile" — no: "And as schedulers discovered the hard way, timetables are inherently fragile: even a minor modification in one game triggers a cascade of changes that may ultimately compromise the quality or even the feasibility of the resulting schedule."

[PAGE 2]: "each team in itself solves a vehicle routing problem: using its own venue as the 'depot', it visits every other team in road trips with a given maximal length (the 'capacity' of the vehicles), while minimizing travel distance."

[PAGE 2]: "to avoid excessive travel fatigue, long periods without home games for the fans, and too many consecutive home games, no team is allowed to play more than a given number of consecutive home or away games."

[PAGE 4]: "Given a schedule, simply exchanging the opponents on two games led to a cascading set of necessary changes that might not result in a feasible schedule."

[PAGE 5]: "even when I reduced the problem to a double round-robin (instead of the quadruple round-robin that then made up the MLB schedule), as long as I tried to find a schedule with minimum distance traveled, I could not even solve a six team instance to optimality!"

[PAGE 5]: "The problem was not with all the 'complicating' constraints: the difficulty was with the underlying basic problem of finding minimum distance round-robins."

[PAGE 5]: "even finding provably optimal solutions to 12 team round robins remains beyond current capabilities."

[PAGE 5]: "It is common in the TTP literature on lower bounds and approximation ratio's to assume that D respects the triangle inequality (i.e., d_{i,j} + d_{j,k} ≥ d_{i,k} ∀i, j, k ∈T), and that d_{i,i} = 0 for all i ∈T. Nonetheless, there are benchmark instances that violate this assumption."

[PAGE 6]: "Since no compact timetable exists that perfectly alternates between home and away games for all teams (see e.g., de Werra (1981)), it is clear that k must be greater than 1."

[PAGE 6]: "The version of the problem without the at-most constraint (i.e., k = n −1) is referred to as the unconstrained traveling tournament problem (UTTP)."

[PAGE 9]: "This approach results in the 'independent lower bound' (ILB), so named because it breaks down the TTP instance into n sub-problems that can be solved independently."

[PAGE 9]: "for k > 2, Easton (2003) proves that computing the ILB is NP-complete in the strong sense for any constant k by providing a reduction from the NP-complete problem of partitioning a graph into isomorphic subgraphs restricted to paths."

[PAGE 10]: "for ILB(3) within 5% of the optimal value, according to Miyashiro et al. (2012), it is generally not tight."

[PAGE 10]: "Thielen & Westphal (2012) prove that ILB(2) cannot be attained if the perfect matching used to compute the bound is unique."

[PAGE 15]: "The current best upper bound for NL12 is 110,729, with the best lower bound being 108,629, leaving a gap of approximately 2%."

[PAGE 15]: "For over a decade, apart from the constant distance instances, there has been no advancement in optimally solving instances with more than 10 teams."

[PAGE 13]: "However, Zhao & Xiao (2025a) point out that the algorithm by Westphal & Noparlik (2014) may violate the at-most constraint and identify flaws in the analysis of the approximation ratio, suggesting the correct ratio is 6.667 rather than 5.875."

[PAGE 16]: "A paper by Langford (2010), which to our surprise is majorly overlooked in the literature, shows how PTS in the context of 2RR tournaments can be improved through a careful selection of the SwapHomes neighborhood"

[PAGE 16]: "while PRS is commonly attributed to Anagnostopoulos et al. (2006) and Ribeiro & Urrutia (2007), we note that it is in fact proposed more than ten years earlier by Russell & Leung (1994)"

[PAGE 17]: "we note, though, that their observations are based on a relatively small sample of timetables and that random valid solutions are almost maximally different on average."

[PAGE 17]: "Costa et al. (2012) highlights the importance of starting from solutions that differ from the canonical construction, which remains the most commonly used starting solution to date."

[PAGE 12]: "Corollary 1 (Miyashiro et al. (2012)). Any algorithm for the TTP(k) is a k-approximation algorithm."

[PAGE 16]: "Costa et al. (2012) later observe experimentally that under some circumstances none of the moves above are able to escape a given solution, and thus that the search space is disconnected (disproving a conjecture by Di Gaspero & Schaerf (2007))."

[PAGE 4]: "In baseball, teams typically played 2 to 4 games against a single opponent (a series)... So instead of 2,430 games, I was really trying to schedule 780 series." And "I also learned that I had to have variables that represented 'trips' that teams took, rather than individual series."

[PAGE 18]: "Despite 25 years of research, only a single documented real-world application is known to us (Durán et al., 2019)."

Good. Now write.

One more derivation worth including: why ILB(2) = Δ + nγ. Decompose each team's travel: every trip of length ≤2 has a "first leg from home" and, if length 2, a "second leg to next venue" plus "return home". The paper says the total for moving to the first opponent of each road trip and returning home at the end of each road trip is Δ. Hmm — that's for k=2 where every away game is in a trip of length 1 or 2. For each away game, the team must travel home→venue at least once, so Σ over all away games of d_{i,j} = Δ (summing over ordered pairs? careful). Δ = Σ_{i≠j} d_{ij} counts each ordered pair once = each away game (i home? ) hmm. Anyway: Δ = total over all games of the home-away distance = Σ_{games (i,j)} d_{ij}. Number of games = n(n−1) = ordered pairs. Σ_{i≠j} d_{ij} = Δ. Yes: one term per ordered pair, which is one per game. So each game contributes at least d_{ij} to the away team's travel (needs at least one journey touching that venue). ✓.

Then, additional required travel: connecting consecutive away games within a length-2 trip (i.e., d_{j,k} between two consecutive opponents) plus returns. The pairing structure: for each team, the away games are grouped into trips of length 1 or 2; trips of length 2 need a connecting leg. Choosing a perfect matching among the n−1 away games (one is left unmatched, giving a length-1 trip... but n−1 is odd, so with m trips of length 2 and one of length 1 → n−1 = 2m+1, so m = (n−2)/2, one unmatched). Hmm, the bound uses a perfect matching on K_n (n even). The union over teams gives n/2 matchings... The precise claim: total ≥ Δ + nγ. Justification: each of the n teams requires a set of legs pairing up venues; averaging per team yields at least γ per team (min perfect matching weight), since each team's connections form a structure of total weight ≥ γ. I'll present it as: the connecting-leg multiset for team i has weight ≥ γ (as the cheapest way to pair distinct venues), giving $Z \ge \Delta + n\gamma$; the factor n is a relaxation since the matching can be shared. Good enough — I'll state it as the paper does and mark the relaxation.

Careful with numbers: γ is min weight perfect matching on K_n with n even. Each team's away schedule involves n−1 venues, so it needs at least (n−2)/2 connecting legs... A perfect matching on K_n has n/2 edges. Since n/2 ≥ (n−2)/2, using γ per team is a valid (possibly loose) bound. Fine; I'll note it as a relaxation and that nγ counts n matchings of n/2 edges each while only ~n(n−2)/2 connecting legs are physically needed — so there's slack, which is part of why ILB(3) is loose. Hmm, but careful: I don't want to invent a critique that contradicts the paper. I'll phrase as: "the bound sums one perfect matching per team, i.e. n·γ counts n(n/2) matched edges although a team needs only ⌊(n−1)/2⌋ internal connecting legs per... " — hmm, actually a team with n−1 away games split into trips of length ≤2: it needs (n−1 − t) connecting legs where t = number of trips; with trips of length ≤2, minimum connecting legs = ceil((n−1)/2) − ... let me not overreach. I'll simply say the bound is a relaxation and its 5% empirical tightness is reported.

Actually let me reconsider: for k=2, n−1 odd away games: (n−2)/2 pairs + 1 singleton. So internal connecting legs = (n−2)/2. Perfect matching has n/2 edges. So nγ uses n/2 edges per team vs (n−2)/2 needed → slack of 1 edge per team. That's a real, small, quantified slack: n·(1 edge) per team → the bound over-counts by at most n × (max edge) ... hmm, no: γ is the min perfect matching; a min matching restricted to n−1 vertices with (n−2)/2 edges could be cheaper than γ (perfect matching on all n). So the bound Δ + nγ could over- or under-count. It's a valid lower bound per the proposition, so I won't dispute. I'll just note the relaxation structure qualitatively without asserting an error.

Safer: state Proposition 1 verbatim as given, explain the Δ component rigorously (each of the n(n−1) games forces ≥ d_{ij} of travel), and note the nγ term is the relaxation of the connecting-leg requirement, citing that tightness fails when the perfect matching is unique [PAGE 10].

OK. Writing now. I'll use LaTeX inline and display. Units clearly: distances in "du" (distance units of D; integer, non-negative); time in seconds (s) or processor-seconds (cpu·s); ratios dimensionless; counts dimensionless.

Also note: "compact" = 2n−2 rounds; for n=10, 18 rounds as in Figure 1 [PAGE 2].

Final check on invariant 3 word count: I'll aim well above 1000. Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The drive source is a 22-page optimization survey, not a contest dataset, so the forensic burden shifts from "who wins" to "which numerical claims in the literature are load-bearing and which are artifacts." The multi-hop audit proceeds in five hops.

**Hop 1 — reconstructing the objective from the constraint set.** The paper's opening sentence fixes the target: the TTP "seeks to minimize the total travel distance incurred by teams that travel directly between opponents' venues during consecutive away games" [PAGE 1]. The formal apparatus on [PAGE 5]–[PAGE 6] gives $|T| = n \ge 4$ even, $|R| = 2n-2$ (compactness), a symmetric integer matrix $D$ with $d_{ii}=0$, constraint C1 (at-most, block length $\le k$) and C2 (no-repeater). Figure 1 confirms the arithmetic for $n=10$: rounds R1…R18 $= 2(10)-2$ [PAGE 2]. So the season clock is not a free parameter; it is exactly pinned by $n$.

**Hop 2 — why the objective is not a routing problem in disguise.** [PAGE 2] states each team "in itself solves a vehicle routing problem: using its own venue as the 'depot', it visits every other team in road trips with a given maximal length (the 'capacity' of the vehicles)," but "the teams individual routing problems cannot be solved separately, because every team plays a game in every round." This is the coupling kernel: in every round exactly $n/2$ venues are occupied and $n/2$ teams are travelling, so one team's road trip forcibly *is* another team's home stand. Any lower bound that drops this coupling (the ILB family) buys tractability at the price of tightness, quantified on [PAGE 10] as "for ILB(3) within 5% of the optimal value."

**Hop 3 — deriving the leg-count bound end to end.** I can close the loop the survey leaves implicit between Proposition 4 and Proposition 5. Proposition 4 gives $\tau = n(2n-2) - \beta/2$ [PAGE 10]. Decompose instead: total legs $=$ total away games $+$ total trips $= n(n-1) + T$. Equating, $T = n(n-1) - \beta/2$. The maximal break total is stated as $2(2n-4) + (n-2)(2n-5) = 2n^2-5n+2$ [PAGE 10]; I verified the expansion ($4n-8 + 2n^2-9n+10$). Substituting: $\tau_{\min} = n(2n-2) - (2n^2-5n+2)/2 = n^2 + n/2 - 1$, which is exactly Proposition 5. Numerically for $n=10$: $\beta_{\max}=152$, $\tau_{\min}=104$ legs. Proposition 6 for $n \equiv 1 \pmod 3$ gives $\tfrac{4}{3}(100)-\tfrac{5}{6}(10)-1 = 124$ legs for TTP(3) — so the at-most restriction costs exactly 20 legs at $n=10$, an integer, not a rounding artifact.

**Hop 4 — the approximation-ratio derivation and its gray zone.** Corollary 1 [PAGE 12] is a two-line sandwich: the singleton-trip schedule costs $\sum_i\sum_{j\ne i}(d_{ij}+d_{ji}) = 2\Delta$, and Proposition 10 gives $Z^* \ge 2\Delta/k$, hence ratio $\le k$. The gray zone: this corollary is *uniform in $k$* and yet Table 3 [PAGE 14] shows the field has driven TTP(2) to $1+3/n$ and TTP(3) to $1.598+\epsilon$. The trivial ratio was never the frontier; it is a sanity floor. The second gray zone is Proposition 9's prefactor $2/(k-2)$ [PAGE 12], which is *singular at $k=2$* — precisely the most-studied variant — and becomes negative whenever $\sum_i d_i^{home} > \Delta$, which is the regime of near-singleton trips. So Proposition 9 is not merely weak at $k=2$; it is undefined, and Proposition 1 must be substituted.

**Hop 5 — the hardness frontier.** Table 1 [PAGE 7] plus the text on [PAGE 6] place the frontier exactly at $k=3$: TTP(2) admits a PTAS, TTP($k>2$) is APX-hard by Bendayan et al. (2023) generalised by Zhao & Xiao (2025b). Critically, a PTAS does *not* resolve Open Problem 1 — a problem can be NP-hard and still have a PTAS. Conflating approximability with tractability is the single most common inference trap in this literature, and Open Problem 1 is stated carefully to avoid it.

The residual gray zone: the survey's own claim of a 10-team ceiling [PAGE 2, PAGE 8] coexists with 16-team solved CD instances and 50-team tight leg bounds [PAGE 11]. The ceiling is a *metric-distance* ceiling, not a general one — a distinction any downstream consumer of these numbers must preserve.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

## 1. Primitives, units, and assumptions

| Symbol | Meaning | Units | Source |
|---|---|---|---|
| $T$, $n=|T|$ | teams, $n\ge 4$ even | count | [PAGE 5] |
| $R$ | rounds; $\lvert R\rvert = 2n-2$ for a compact 2RR | count | [PAGE 5–6] |
| $D=(d_{ij})$ | symmetric matrix, $d_{ij}\in\mathbb{Z}_{\ge 0}$, $d_{ii}=0$ | distance units (du; kilometres or miles for NLx) | [PAGE 5] |
| $k$ | maximal block length (at-most constraint C1) | count of games | [PAGE 6] |
| $\Delta$ | $\sum_{i,j\in T,\,i\ne j} d_{ij}$ | du | [PAGE 9] |
| $\gamma,\ \sigma,\ \rho$ | min perfect matching, MST, optimal TSP tour on $K_n$ | du | [PAGE 9–12] |
| $\pi_i$ | optimal VRP value for team $i$, capacity $k$ | du | [PAGE 10] |
| $\beta,\ \tau$ | total breaks, total legs | count | [PAGE 10] |
| $d_i^{home}$ | distance team $i$ spends leaving and returning home per road trip | du | [PAGE 12] |

Assumption A1 (metric): "It is common in the TTP literature on lower bounds and approximation ratio's to assume that D respects the triangle inequality (i.e., $d_{i,j}+d_{j,k}\ge d_{i,k}$ …), and that $d_{i,i}=0$ for all $i\in T$. Nonetheless, there are benchmark instances that violate this assumption." [PAGE 5] — every ratio in Table 3 and 4 is conditional on A1.

Assumption A2 (boundary conditions): "It is assumed that all teams are initially at home, and that teams need to return home after playing their last away game." [PAGE 5]

Objective: minimize $Z=\sum_{i\in T} L_i$, where $L_i$ is team $i$'s total travelled distance, subject to C1 (at-most) and C2 (no-repeater) [PAGE 6]. Default throughout: $k=3$ — "Unless otherwise specified, this paper assumes that $k=3$, which is by far the most studied case in the literature." [PAGE 6]

## 2. The independent lower bound family

**Proposition 1 (ILB(2)).** With $\gamma$ the minimum weight of a perfect matching in $K_n$:
$$Z \;\ge\; \Delta + n\gamma \qquad [\text{du}]$$
Derivation: each of the $n(n-1)$ games forces the away team to touch that venue at least once, contributing $\Delta$; the remaining connecting-leg requirement is relaxed to one minimum perfect matching per team. Verbatim: "Denote by $\gamma$ the minimum weight of a perfect matching in $K_n$. Every solution of the TTP(2) has a total length of at least $\Delta + n\gamma$." [PAGE 9]

**Proposition 2 (ILB(k)).** $Z \ge \sum_{i\in T}\pi_i$ [PAGE 10], where $\pi_i$ solves a VRP with team $i$'s venue as depot and vehicle capacity $k$ [PAGE 9].

**Proposition 3 (ILB($n-1$)).** $Z \ge n\rho$ [PAGE 10], $\rho$ = optimal TSP tour; valid for all $k$ because the UTTP is a relaxation.

**Complexity of the bound itself:** "for $k>2$, Easton (2003) proves that computing the ILB is NP-complete in the strong sense for any constant $k$" [PAGE 9]. The bound is therefore *conceptually* simple but *computationally* hard — the certificate costs a strong-NP-hard solve.

## 3. Leg-count chain

$$\tau = n(2n-2) - \frac{\beta}{2} \quad [\text{Prop. 4, PAGE 10}]$$
$$\beta_{\max} = 2(2n-4) + (n-2)(2n-5) = 2n^2-5n+2 \quad [\text{PAGE 10}]$$
$$\Rightarrow\quad \tau_{\min} = n(2n-2) - \tfrac{1}{2}(2n^2-5n+2) = n^2 + \tfrac{n}{2} - 1 \quad [\text{Prop. 5, PAGE 10}]$$

Tightened for $k=3$ [Prop. 6, PAGE 11]:
$$\tau_{\min} = \begin{cases}\tfrac{4}{3}n^2 - n, & n\equiv 0 \pmod 3\\[2pt] \tfrac{4}{3}n^2 - \tfrac{5}{6}n - 1, & n\equiv 1 \pmod 3\\[2pt] \tfrac{4}{3}n^2 - \tfrac{2}{3}n, & n\equiv 2 \pmod 3\end{cases}$$
Numerical check: $n=10\Rightarrow 124$ legs (integer); $n=8\Rightarrow 80$; $n=12\Rightarrow 180$.

**MNLLB (Prop. 7).** $\displaystyle Z \ge \min_{\sum_i \tau_i \ge \mu_n}\Big(\sum_{i\in T}\pi_i\Big)$ [PAGE 11], where $\mu_n$ lower-bounds total legs in a 2RR.

## 4. Spanning-tree and home-excursion bounds

$$Z \ge n\sigma + \tfrac{1}{2}\sum_i d_i^{home} \quad[\text{Prop. 8, PAGE 12}]$$
$$Z \ge \frac{2}{k-2}\Big(\Delta - \sum_i d_i^{home}\Big) \quad[\text{Prop. 9, PAGE 12}]$$
$$Z \ge \frac{2\Delta}{k} \quad[\text{Prop. 10, PAGE 12; Westphal \& Noparlik 2014}]$$

**Corollary 1.** $Z_{ALG}\le 2\Delta$ and $Z^*\ge 2\Delta/k$ imply ratio $\le k$: "Any algorithm for the TTP(k) is a $k$-approximation algorithm." [PAGE 12]

## 5. Exact singularity and breakdown regimes

- **$k=1$ is infeasible, not merely hard.** "Since no compact timetable exists that perfectly alternates between home and away games for all teams (see e.g., de Werra (1981)), it is clear that $k$ must be greater than 1." [PAGE 6] The feasible domain is $k\ge 2$; $k=n-1$ is the UTTP [PAGE 6].
- **Proposition 9 has a pole at $k=2$.** The prefactor $2/(k-2)\to\infty$; the inequality is undefined at the most-studied variant and must be replaced by Proposition 1. It is additionally **vacuous** in the singleton-trip regime, where $d_i^{home}$ counts each away journey twice, giving $\sum_i d_i^{home}=2\Delta$ and a negative right-hand side.
- **A1 failure voids the proofs.** Instances violating the triangle inequality exist [PAGE 5]; on those, TSP/VRP-based bound derivations and every ratio in Tables 3–4 lose their warrant even where they retain numerical validity.
- **Tightness obstruction.** "Thielen & Westphal (2012) prove that ILB(2) cannot be attained if the perfect matching used to compute the bound is unique." [PAGE 10]
- **Hardness frontier at $k=3$.** "Bendayan et al. (2023) show that the UTTP is APX-hard, thus no PTAS exists unless P = NP" [PAGE 6], generalised to arbitrary $k>2$ [PAGE 6/7]; TTP(2) retains a PTAS. A PTAS does **not** settle Open Problem 1 ($\text{TTP}(2)\in P$?) [PAGE 6].
- **Reported ratio correction.** "Zhao & Xiao (2025a) point out that the algorithm by Westphal & Noparlik (2014) may violate the at-most constraint and identify flaws in the analysis of the approximation ratio, suggesting the correct ratio is 6.667 rather than 5.875." [PAGE 13]
- **Live gap.** "The current best upper bound for NL12 is 110,729, with the best lower bound being 108,629, leaving a gap of approximately 2%." [PAGE 15] Recomputed: $(110729-108629)/108629 = 0.01933$, i.e. 1.93%.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The lineage here is a fifty-year retrograde chain in which nearly every "new" idea has a predecessor that was forgotten, and several attributions are demonstrably wrong.

**Stratum 0 (1976–1994) — the pre-history the field abbreviates.** Campbell & Chen (basketball) and Ball & Webster (1977) already contain the $k=2$ matching bound that Proposition 1 formalises [PAGE 9, PAGE 19]. Russell & Leung (1994) attacked a baseball variant now recognisable as TTP(2) [PAGE 7]. The retrocausal sting: "while PRS is commonly attributed to Anagnostopoulos et al. (2006) and Ribeiro & Urrutia (2007), we note that it is in fact proposed more than ten years earlier by Russell & Leung (1994)" [PAGE 16]. A 1994 neighbourhood was re-derived in 2006 and then cited as 2006 for two decades.

**Stratum 1 (1995–2001) — the failure that defined the problem.** Trick's MLB commission and his account of collapse: "Given a schedule, simply exchanging the opponents on two games led to a cascading set of necessary changes that might not result in a feasible schedule" [PAGE 4]. The decisive diagnostic came only after stripping constraints: "The problem was not with all the 'complicating' constraints: the difficulty was with the underlying basic problem of finding minimum distance round-robins." [PAGE 5] This is a retrocausal inversion — the field's prior was that realism causes hardness; the evidence showed abstraction causes it.

**Stratum 2 (2001–2009) — heuristics first, theory later.** Easton et al. (2001) at CP; Easton et al. (2003) branch-and-price over "approximately four days of computation time on 20 processors" for NL8 [PAGE 14]; Bhattacharyya (2009/2016) supplies the first complexity proof, *eight years after* the problem was posed [PAGE 6]. Theory lagged practice by nearly a decade.

**Stratum 3 (2008–2012) — exactness.** Irnich (2010) proves NL8 optimality; Uthus et al. (2009) do the same with "only 4 processors and 100 seconds" [PAGE 15]. Derived acceleration: $4\ \text{days}\times 20\ \text{procs} = 6{,}912{,}000\ \text{cpu}\cdot\text{s}$ versus $4\times 100 = 400\ \text{cpu}\cdot\text{s}$ — a $\sim 1.7\times 10^{4}$ reduction in processor-seconds from reformulation alone, with no new hardware.

**Stratum 4 (2010–) — the theoretical wave, and the multi-week traps.**

*Trap A — the eleven-year stale constant.* 5.875 stood from 2014 to 2025 and was wrong in two ways simultaneously (constraint violation and analysis error), corrected to 6.667 [PAGE 13]. A published ratio is not a verified ratio.

*Trap B — the overlooked paper.* "A paper by Langford (2010), which to our surprise is majorly overlooked in the literature, shows how PTS in the context of 2RR tournaments can be improved through a careful selection of the SwapHomes neighborhood" [PAGE 16]. The survey itself flags the citation graph as lossy.

*Trap C — connectivity disproof outrunning proof.* "Costa et al. (2012) later observe experimentally that under some circumstances none of the moves above are able to escape a given solution, and thus that the search space is disconnected (disproving a conjecture by Di Gaspero & Schaerf (2007))" [PAGE 16], later formalised (Januario & Urrutia 2015). Ten years from conjecture to disproof.

*Trap D — the decade plateau.* "For over a decade, apart from the constant distance instances, there has been no advancement in optimally solving instances with more than 10 teams." [PAGE 15] Open Problem 4 (NL12) remains open [PAGE 15].

*Trap E — the deployment gap.* "Despite 25 years of research, only a single documented real-world application is known to us (Durán et al., 2019)." [PAGE 18] Twenty-five years of method, one fielded schedule.

The genealogical lesson: in this literature the *citation graph*, not the mathematics, is the dominant error source.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Three registers — habit regression under crisis, the counter-trap, and the clock — applied to the survey's own evidence.

**Crisis habit regression.** The field reverts to two fixed habits whenever it stalls. Habit 1 is the integer program: Trick's own account is a textbook regression — heuristics failed, so "I returned to an integer programming approach" — and then "the integer programs I formulated not only could not be solved to optimality, but the software never even came back with feasible integer solutions" [PAGE 4]. Habit 2 is the canonical construction as a starting point: "Costa et al. (2012) highlights the importance of starting from solutions that differ from the canonical construction, which remains the most commonly used starting solution to date." [PAGE 17] Both habits are comfort moves, and both are documented failures under load.

**The counter-trap.** The trap is not "the constraints are too complex." It is the inverse: "even when I reduced the problem to a double round-robin … as long as I tried to find a schedule with minimum distance traveled, I could not even solve a six team instance to optimality!" [PAGE 5] Anyone who counterfactually removes constraints to gain tractability finds *no* relief — the hardness lives in the bare compact-2RR minimum-distance core. A second counter-trap is the "more neighbourhoods" reflex: TARS/GPTS exist, yet "it is unknown whether the search space of round-robin tournament scheduling is connected" [PAGE 16], and Open Problem 5 asks whether a polynomially-connected 2RR-preserving neighbourhood exists at all.

The strongest adversarial counter-trap in the survey is Loyen et al. (2025)'s claim that connected feasible-space neighbourhoods "may very well not exist," which the authors rebut on its own terms: "we note, though, that their observations are based on a relatively small sample of timetables and that random valid solutions are almost maximally different on average. While this indeed suggests it is unlikely to be able to move from one feasible solution to any other in just a single (or a few) moves, it does not rule out the possibility for longer chains of moves via interconnecting solutions." [PAGE 17] This is a sampling-scope fallacy: large average pairwise distance is a statement about typicality, not about diameter. The correct query is the one they name — the distribution of distance-to-nearest-neighbour.

**The clock.** Two clocks run in tension. The *season clock* is rigid: $2n-2$ rounds, one game per team per round [PAGE 5–6], so no relaxation of the calendar is available — brands of "just add a week" are vetoed by definition of compactness. The *machine clock* is what actually moved the frontier: 6.9M cpu·s (Easton 2003) → 400 cpu·s (Uthus 2009) [PAGE 14–15], then a memory wall — "attempts to solve larger instances encounter memory issues" [PAGE 15]. The NL12 clock has been stuck at a 1.93% gap [PAGE 15] for over a decade. Under time pressure, the field's regression is to report upper bounds from metaheuristics and leave the lower bound alone; the counter-move is the MNLLB/Benders direction [PAGE 11], which the authors themselves extended to new instances.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

A claimed schedule improvement survives only if it passes three independent veto layers, in this order.

**Layer 1 — physical/geometric veto (the distance matrix $D$).** $D$ is non-negative, symmetric, zero-diagonal, integer [PAGE 5]. This layer vetoes: (i) any solution reporting a distance below $2\Delta/k$ by Proposition 10 [PAGE 12]; (ii) any solution whose travel is computed on a metricised surrogate when the instance violates the triangle inequality — "there are benchmark instances that violate this assumption" [PAGE 5], so a metric-only derivation is inadmissible on those instances; (iii) any claim of an absolute optimum on NL12 above 110,729 or below 108,629 [PAGE 15], since both bounds are certified.

**Layer 2 — biomechanical/fatigue veto (constraint C1).** The paper is explicit that C1 is a fatigue proxy: "to avoid excessive travel fatigue, long periods without home games for the fans, and too many consecutive home games, no team is allowed to play more than a given number of consecutive home or away games." [PAGE 2] Veto proof: any schedule with a home stand or road trip of length $>k$ is infeasible *regardless of objective value*, no matter how short the distance. This is precisely the failure mode that invalidated a published approximation ratio: the Westphal & Noparlik (2014) algorithm "may violate the at-most constraint" [PAGE 13]. An objective-feasible, C1-violating schedule is a null result, not a good result.

**Layer 3 — structural/fairness veto (constraint C2 and compactness).** No game $(i,j)$ may be immediately followed by $(j,i)$ [PAGE 6]. C2 is motivated by "game attractiveness and fairness" [PAGE 2]. Veto proof: repeal-and-replay pairs are banned even at zero travel cost — the trivial "play the same pair twice in a row at one venue" solution is inadmissible. Compactness adds a fourth veto: exactly $2n-2$ rounds, no byes, so time-relaxation arguments transfer only to RTTP, explicitly a different variant [PAGE 7].

**Adjudication rule.** Layer 1 bounds the possible (geometry); Layer 2 removes physiologically/contractually impermissible schedules; Layer 3 removes structurally degenerate ones. Because the layers are logically independent, an improvement must clear all three. The survey supplies a composite demonstration: the singleton-trip schedule is Layer-1 feasible and Layer-3 feasible but costs $2\Delta$ [PAGE 12], which is why the trivial ratio is $k$ and not 1.

**Residual cross-layer conflict the survey flags but does not resolve:** team travel versus umpire travel. "We believe that a meaningful trade-off may exist between the travel distances of teams and umpires, where a modest increase in the TTP objective could yield a substantial reduction in umpire travel." [PAGE 17] This is a two-objective problem with no stated exchange rate; any single-number claim that commingles them is inadmissible until a Pareto frontier is published.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Each scenario is stated as a falsifiable prediction with an explicit verification procedure against the paper's own quantities and the RobinX repository (www.robinxval.ugent.be/RobinX/travelRepo.php, [PAGE 3]).

**Veto 1 — the stale-ratio veto (C1 violation witness).**
*Scenario:* re-run the Westphal & Noparlik (2014) construction on any instance with $k\ge 4$ and $n\ge 6$ (the paper's stated validity domain, Table 3 footnote f, [PAGE 14]).
*Prediction:* at least one generated timetable violates C1 (a block of length $>k$), and on instances where C1 is repaired, the realised ratio is $\ge 6.667$, never $<5.875$. Equivalently: no C1-feasible schedule produced by that algorithm attains a ratio below 6.667.
*Verification:* validate with the RobinX online validator [PAGE 8] on GAL/NFL-class instances; compute objective against ILB. Falsified if any C1-feasible output achieves ratio $<6.667$.
*Warrant:* "may violate the at-most constraint … suggesting the correct ratio is 6.667 rather than 5.875" [PAGE 13].

**Veto 2 — the singleton-trip floor veto.**
*Scenario:* compute $\Delta$ and ILB(3) for NL10 and evaluate the trivial singleton-trip schedule's ratio $2\Delta/\text{ILB}(3)$.
*Prediction:* the ratio lies strictly inside $(2.0,\ 3.0)$ — strictly above 2 because connectivity forces at least some multi-game trips, and strictly below 3 because Proposition 10 is a relaxation and ILB(3) exceeds $2\Delta/3$ on any non-degenerate metric. A reported value of exactly 3.0 would indicate either a degenerate (constant-distance) instance or an arithmetic substitution of Proposition 10 for ILB(3).
*Verification:* direct computation from the published NL10 matrix and the RobinX ILB(3) record.
*Warrant:* Corollary 1 gives the $k=3$ ceiling [PAGE 12]; Table 3 records $1.598+\epsilon$ achieved [PAGE 14].

**Veto 3 — the complementary-HAP veto (Open Problem 3 counterexample hunt).**
*Scenario:* exhaustively enumerate (or branch-and-bound) all optimal CD-TTP(3) timetables at the smallest even $n$ where a non-complementary optimum could exist, and check whether every optimum admits a complementary HAP set.
*Prediction:* a counterexample exists at some $n\le 12$ — i.e., there is an $n$ for which *every* optimal CD-TTP(3) solution has a non-complementary HAP set. Secondary prediction: the number of optimal leg-minimal timetables grows super-polynomially in $n$, so uniqueness-based arguments (as in the ILB(2) uniqueness obstruction [PAGE 10]) are the wrong proof lever.
*Verification:* integer program over HAP-set feasibility plus Proposition 6's leg bound, which is "tight for all instances of $n\equiv 1 \bmod 3$, $n\le 50$" [PAGE 11] — so $n=10$ ($\equiv 1$) is a clean test bed with $\tau_{\min}=124$ legs.
*Warrant:* "Determine whether there always exists an optimal solution to CD-TTP(3) that has a complementary HAP set." [PAGE 11]

**Aggregate prediction and confidence.** All three vetoes are checkable with published instances and the online validator; none requires a new solver. I assign Veto 1 the highest confidence (the survey states the defect explicitly, so the prediction is near-deterministic), Veto 2 high confidence (