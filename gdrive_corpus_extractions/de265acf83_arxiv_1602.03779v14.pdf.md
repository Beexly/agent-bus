---
source: "arxiv_1602.03779v14.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3868
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about distributed multi-armed bandits for privacy-preserving edge computing. They want a very specific format with XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
- >= 1,000-word depth total across sections.

Let me carefully read the source material. It's a paper by Raphaël Féraud titled "Network of Bandits insure Privacy of end-users" (arXiv:1602.03779v14). 13 pages.

Key content:
- Distributed best arm identification on Mobile Edge Computing (MEC) servers
- Privacy by design: no data stored, only aggregated messages
- Players are MEC servers clustering end-users
- Active player n drawn from distribution P(n)
- Most active players Nγ = {i ≤ N, P(n=i) ≥ γ}
- Distributed Median Elimination (DME) algorithm
- Extended Distributed Median Elimination (EDME) runs M instances in parallel
- Communication cost: 2N(K-1)⌈log₂ K⌉ bits (Theorem 1 lower bound, Lemma 2 achieves it)
- Speed-up factor O(N/(1+ln K)) when Nγ=N (Theorem 2)
- Sample complexity per player: O(K/(ϵ²Nγ) ln(K/δ)) pulls (Lemma 3)
- Number of draws of players (Theorem 3): O(K/(ϵ²γNγ) + sqrt(K/(ϵ²Nγ)) ln(KNγ/δ)) 
- EDME communication: 2NM(K-1)⌈log₂ K⌉ bits (Theorem 4)

I need to map these abstract concepts to the required sections. The sections have somewhat poetic/metaphorical names but I need to ground them in the actual paper content while satisfying the format.

Let me plan each section:

**THINK_TRACE (>=400 words):**
Deep multi-hop derivation:
- Start from privacy motivation (no storage, MEC edge processing)
- To bandit formulation: active player drawn from P(n), not controlled
- Communication cost vs speed-up trade-off
- Lower bound Theorem 1: 2N(K-1)⌈log₂ K⌉ bits necessary for O(N) speed-up
- DME achieves this lower bound (Lemma 2) but has O(1/ln K) speed-up penalty
- EDME parallel instances to handle unknown Nγ
- Gray-zone audits: Assumption 1 (stationary mean rewards independent of player) breaks down in contextual/non-stationary settings; binary code assumption suboptimal vs prefix codes; Nγ knowledge required for DME; stopping condition |Kn_l|=1 means different players may output different arms

**SOURCE_OPERATORS_AND_EQUATIONS:**
Formal LaTeX equations with page citations:
- Page 4: Definition 4 speed-up factor S(A) = max T*_n / TNγ(A)
- Page 4: Proposition 1 S(A) ≥ t*/tNγ(A)
- Page 5: Theorem 1 lower bound 2N(K-1)⌈log₂ K⌉ bits
- Page 5: Mannor-Tsitsiklis lower bound Ω(K/(ϵ²) ln(1/δ))
- Page 6: Lemma 2 communication cost 2N(K-1)⌈log₂ K⌉
- Page 6: Lemma 3 pulls per player O(K/(ϵ²Nγ) ln(K/δ))
- Page 7: Theorem 3 draws of players formula
- Page 8: Theorem 4 EDME communication 2NM(K-1)⌈log₂ K⌉
- Page 4: Assumption 1 ∀n,k µn_k = µk
- Page 4: Assumption 2 binary code
- Page 4: Algorithm 1 stopping condition
- Page 5: Nγ definition

Units: bits, pulls/draws (dimensionless counts), probability δ, ϵ ∈ [0,1), time steps.

Breakdown regimes: when γ=0 (inactive player), when Nγ contains zero-probability player (Algorithm never stops), when K=1 (log₂1=0 trivial), when ϵ→0 (sample complexity blows up).

**RETROCAUSAL_GENEALOGY:**
Historical lineage:
- Median Elimination [Even-Dar et al (2002)] cited page 5/7
- UCB [Auer et al (2002)a] page 2
- PAC learning [Valiant (1984)] page 2
- Differential privacy [Sarwate and Chaudhuri (2013)] page 1
- k-anonymity [Sweeney (2002)] page 1
- MEC white paper (2014) page 2
- Distributed exploration [Hillel et al (2013)] page 2-3: √N speed-up with one round, N speed-up with O(ln 1/ϵ) rounds
- Mannor and Tsitsiklis (2004) sample complexity lower bound page 5
- Multi-week traps: Nγ misestimation over weeks causes persistent suboptimal speed-up; EDME M instances amortize cost but linear communication factor M accumulates; non-stationarity of P(n) in mobile networks violates Assumption 1 over multi-week horizons.

**RECURSIVE_THEORY_OF_MIND:**
Crisis habit regression vs counter-trap vs clock:
- Crisis habit: fallback to independent Median Elimination per player (zero communication) when distributed coordination fails or Nγ unknown/misestimated
- Counter-trap: EDME runs M parallel instances, selecting best; but server must maintain Mλ states and resolve conflicting downward messages (Algorithm 4 line 18-20)
- Clock: stopping condition ∀n |Kn_l|=1 (page 6-7); EDME stopping ∃i such that ∀n_i |K n_i_l|=1 (page 8 Algorithm 4). Time horizon T=10⁶ in experiments (page 9). Negative binomial waiting time for active players (Theorem 3 page 7).
- Recursive ToM: players model server's elimination threshold (Nγ/2 majority), server models players' empirical means; depth of reasoning limited by communication rounds.

**CROSS_LAYER_VETO_ADJUDICATION:**
Physical/biomechanical/weather veto proof:
- Physical layer: radio interception between device and MEC requires local deployment (page 2); MEC proximity reduces attack surface but introduces synchronization server as single point of observation for aggregated messages
- Biomechanical: user activity events (device switched on, app launched) are uncontrolled Bernoulli draws P(n) (page 3); human behavior introduces non-stationarity violating Assumption 1
- Weather: not directly in paper, but radio propagation/attenuation affects edge connectivity; I should note weather is not modeled in the paper but would veto real-time guarantees if MEC links fail
- Veto conditions: if any player in Nγ has P(n)=0, DME never stops (page 8); if downward message lost, players diverge on Kn (Algorithm 3 line 8-10); if upward message lost, λn_k never reaches Nγ/2 threshold.

**RLVR_COUNTERFACTUAL_VETOES:**
3 verifiable veto scenarios:
1. Veto: Nγ misestimated as N when true distribution is skewed (20/80). Prediction: speed-up factor <1 relative to independent Median Elimination (page 11: "when Nγ is overestimated, the speed-up factor ... can be lesser than one"). Verifiable via experiment Figure 6.
2. Veto: γ→0 or Nγ contains zero-probability player. Prediction: stopping time uncontrolled, algorithm may not stop (page 8). Verifiable by setting P(n)=0 for some n∈Nγ.
3. Veto: communication failure / lost messages. Prediction: if upward messages lost, λn_k < Nγ/2 forever, no downward elimination, algorithm reverts to local Median Elimination with no speed-up (communication cost zero but regret higher). Verifiable by packet drop simulation.

Word count check: I need >=1000 words total. Let me make sure each section is substantial.

I must NOT mention betting lines (spreads, totals, moneylines, odds). The paper mentions "regret" and "odds" in references maybe? I should avoid any gambling terminology. The paper uses "arms" and "rewards" which is standard bandit terminology, not betting. I should avoid "odds" entirely.

I must include [PAGE N] markers. Let me cite precisely.

Let me write this carefully.

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

I need to ensure LaTeX is formal. Use \[ \] or $ $. Mention SI units where applicable (bits, dimensionless counts, seconds not really used but time steps).

Let me draft content now.

THINK_TRACE: >400 words. I'll write maybe 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal equations with page citations. I'll include many equations.

RETROCAUSAL_GENEALOGY: Lineage and traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: Veto proof across layers.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Total >1000 words. Should be fine.

Let me write it out.

Important: no toy equations. All equations must be from the paper or formally derived, with assumptions and breakdown regimes.

I will cite [PAGE 1] through [PAGE 13] appropriately.

Let me check page numbers in the text:
- Page 1: title, abstract, intro, differential privacy, k-anonymity
- Page 2: MEC, related works, bandits, best arm identification, Hillel et al
- Page 3: problem setting, Figure 1, privacy, Assumption setup, Algorithm 1, Definitions 1-4, Proposition 1
- Page 4: Assumption 1, Assumption 2, Theorem 1 lower bound
- Page 5: Theorem 1 proof continued, Median Elimination, Algorithm 2, Algorithm 3
- Page 6: Algorithm 3 continued, Remark 1, Lemma 1 proof start
- Page 7: Lemma 1 proof continued, Lemma 2 communication, Lemma 3 pulls, Theorem 2
- Page 8: Theorem 2 proof, Theorem 3 draws of players
- Page 9: Extended DME, Theorem 4, Algorithm 4
- Page 10: Experiments, Problem 1, Problem 2, distributions
- Page 11: Experiments results, bits numbers, Figures 2-5
- Page 12: Figures 4-6, conclusion, future works
- Page 13: references

Wait, looking at the text markers:
--- [PAGE 1 of 13] --- ... page content ...
--- [PAGE 2 of 13] --- ...
...
--- [PAGE 13 of 13] --- ...

Yes.

Now let me compose.

I should be careful with the "ZERO TOY EQUATIONS" rule. I will not invent Force/Fatigue ratios. All equations are from the paper.

Let me write the response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit:

The paper's causal chain begins with a privacy requirement: end-user event streams must not be stored, because even anonymized patterns uniquely identify individuals via composition attacks [PAGE 1]. The architectural response is Mobile Edge Computing (MEC), where personal data are processed locally at the Radio Access Network edge, forcing an adversary to deploy local interception hardware rather than tapping a central core [PAGE 1-2]. On top of this, the learning problem is cast as distributed best-arm identification rather than regret minimization because explore-then-commit structure confines communication to the exploration phase, bounding both communication cost and the time interval during which bandwidth is consumed [PAGE 3].

The first multi-hop constraint is that players are not algorithm-controlled; each time step an active player n is drawn from an exogenous distribution P(n), modeling uncontrolled user events (device switched on, app launched, page connected) [PAGE 3]. This destroys synchronized communication rounds, so communication cost is measured in transmitted bits rather than rounds [PAGE 3]. The set of "most active" players Nγ = {i ≤ N : P(n=i) ≥ γ} becomes the effective coalition that drives elimination [PAGE 4].

Theorem 1 establishes a hard lower bound: any distributed algorithm achieving optimal speed-up O(N) must transmit at least 2N(K−1)⌈log₂ K⌉ bits [PAGE 5]. The proof proceeds by contradiction: if an algorithm sends fewer bits, either (1) a player withholds an action index, reducing the effective coalition to N−1 and capping speed-up below O(N); (2) the server withholds an action, isolating a player to O(1) speed-up; or (3) fewer than ⌈log₂ K⌉ bits encode an action index, violating the binary-code assumption [PAGE 5]. Distributed Median Elimination (DME) meets this bound exactly via Lemma 2: each action index is sent upward once per player except the player's final retained action, and downward once per eliminated action, yielding 2N(K−1)⌈log₂ K⌉ bits [PAGE 6].

Gray-zone audit reveals three brittle regimes. First, Assumption 1 requires mean rewards to be player-independent (∀n,k: µn_k = µk); in contextual or non-stationary mobile environments this assumption fails, and the paper explicitly defers contextual bandits to future work [PAGE 4-5, 12]. Second, DME requires prior knowledge of Nγ; if Nγ contains a zero-probability player or is misestimated, the stopping condition ∀n |Kn_l| = 1 may never trigger or may trigger only after excessive time [PAGE 8]. Third, the binary-code restriction (Assumption 2) is acknowledged as suboptimal versus prefix/Huffman codes, but retained for exposition [PAGE 5 footnote]. Extended DME (EDME) mitigates Nγ uncertainty by running M parallel instances with equally spread Nγi values, at the cost of linear communication growth 2NM(K−1)⌈log₂ K⌉ bits [PAGE 8-9]. The breakdown regime is therefore joint: high K, small ϵ, unknown P(n), and unreliable MEC backhaul simultaneously collapse the speed-up and privacy guarantees.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, and breakdown regimes:

Let N be the set of players, |N| = N players. Let n be the active-player random variable with distribution P(n). Let γ ∈ [0,1) and Nγ = {i ≤ N : P(n=i) ≥ γ}, with cardinality Nγ [PAGE 4]. Let K be the action set, |K| = K actions, rewards y ∈ [0,1]^K bounded in [0,1] (dimensionless reward units) [PAGE 4]. Let k* = arg max_{k∈K} µk [PAGE 4].

Definition 1 (ϵ-approximation, [PAGE 4]): arm k is an ϵ-approximation iff µ_{k*} ≤ µ_k + ϵ, with ϵ ∈ [0,1).

Definition 2 (sample complexity, [PAGE 4]): t(A) = number of samples from P(y) needed by algorithm A to obtain an ϵ-approximation with probability 1−δ, δ ∈ (0,1].

Definition 3 (distributed sample complexity, [PAGE 4]): t_N(A) = number of samples per player.

Definition 4 (speed-up factor, [PAGE 4]):
S(A) = max_{n∈{1,...,N}} T*_n / T Nγ(A),
where T*_n is the number of samples from P(y,n) needed to obtain on average t* draws of player n, and T Nγ(A) is the number of samples needed to obtain on average at least t_{Nγ}(A) draws of each player in Nγ. Unit: dimensionless ratio.

Proposition 1 ([PAGE 4]): S(A) ≥ t* / t_{Nγ}(A). Derivation: at horizon T, mean draws of player n equal P(n)·T, so max_n T*_n = t* / min_n P(n), and T Nγ(A) = t_{Nγ}(A)/γ ≤ t_{Nγ}(A)/min_n P(n). Breakdown: if min_n P(n) → 0, the bound diverges.

Assumption 1 ([PAGE 4]): ∀n∈{1,...,N}, ∀k∈{1,...,K}, µn_k = µk. Breakdown: contextual bandits, non-stationary rewards, or player-dependent arm distributions invalidate this.

Assumption 2 ([PAGE 4]): every transmitted message is coded with a binary code requiring ⌈log₂ K⌉ bits per action index. Footnote notes prefix/Huffman codes would be more efficient [PAGE 5].

Theorem 1 ([PAGE 5]): ∃ distribution P(y,n) such that any distributed algorithm on N players needs ≥ 2N(K−1)⌈log₂ K⌉ bits to find an ϵ-approximation with optimal speed-up O(N). Unit: bits. Breakdown: K=1 yields zero bits (trivial); ϵ→0 drives Mannor-Tsitsiklis sample lower bound Ω(K/ϵ² ln(1/δ)) to infinity [PAGE 5].

Algorithm 1 ([PAGE 4]): repeat until ∀n, ∀k∈Kn: µn_k ≥ µn_{k*} − ϵ. Draw n∼P(n); allow downward message; update Kn; play k∈Kn; receive reward yn_k ∈ [0,1]; allow upward message.

Algorithm 2 MedianElimination(n) ([PAGE 5-6]): elimination epoch l stops when ∀k, tn_k ≥ 4/(ϵn_l)² ln(3K/ηn_l); computes median mn_l of estimates; eliminates arms with ˆµn_k < mn_l; sends UpwardMessage(k,n); updates ϵn_{l+1} = 3/4·ϵn_l, ηn_{l+1} = ηn_l/2.

Algorithm 3 Distributed Median Elimination ([PAGE 6]): η = δ²/(2Nγ), ηn_1 = η/2, ϵn_1 = ϵ/4. Stops when ∀n, |Kn_l| = 1.

Lemma 2 ([PAGE 6]): DME transmits exactly 2N(K−1)⌈log₂ K⌉ bits. Unit: bits. Proof: N(K−1) upward messages (each player sends each non-final action once) plus N(K−1) downward messages (server sends each eliminated action once), each ⌈log₂ K⌉ bits.

Lemma 3 ([PAGE 6]): DME stops after each most-active player drawn at most O( K/(ϵ²Nγ) · ln(K/δ) ) pulls. Unit: pulls (dimensionless count). Derivation: tNγ = Σ_{l=1}^{log₂K} 4Kn_l/(ϵn_l)² · ln(3K/ηn_l), with Kn_l = K/2^{l−1}, ϵn_l = (3/4)^{l−1}·ϵ/4, ηn_l = η/2^l, yielding geometric series bounded by O( K/(ϵ²) · ln(K)/η ), then substituting η = δ²/Nγ [PAGE 6-7].

Theorem 2 ([PAGE 7]): when N = Nγ, speed-up ≥ O(N/(1 + ln K)), communication ≤ 2N(K−1)⌈log₂ K⌉ bits, pulls per player O( K/(ϵ²N) · ln(K/δ) ) [PAGE 7].

Theorem 3 ([PAGE 8]): number of player draws until all players find ϵ-approximation:
T Nγ ≤ O( K/(ϵ²γNγ) + sqrt( K/(ϵ²Nγ) ) · ln(KNγ/δ) ) draws of players.
Unit: time steps / draws (dimensionless count). Derivation via negative binomial waiting time for active players and Hoeffding concentration with α = δ/(2Nγ) [PAGE 7-8]. Breakdown: γ → 0 makes the first term diverge; a zero-probability player in Nγ prevents termination [PAGE 8].

Theorem 4 ([PAGE 8-9]): Extended DME with M parallel instances, Nγi = N·i/M, transmits 2NM(K−1)⌈log₂ K⌉ bits and uses O( min_i [ K/(ϵ²γiNγi) + sqrt( K/(ϵ²Nγi) ) · ln(KMNγi/δ) ] ) draws [PAGE 9]. Unit: bits and draws. Breakdown: communication scales linearly with M; if all instances fail to terminate, no output is produced.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage:

The algorithmic trunk is Median Elimination [Even-Dar et al (2002)], a rate-optimal explore-then-commit best-arm identification method whose PAC sample complexity matches the Ω(K/ϵ² ln(1/δ)) lower bound [PAGE 5, 7]. The distributed extension draws on Hillel et al (2013), who showed √N speed-up with one communication round and N speed-up with O(ln 1/ϵ) rounds under algorithm-controlled player draws [PAGE 2-3]. Féraud's contribution reverses the control assumption: players are drawn from P(n), modeling uncontrolled edge events, so communication cost is counted in bits rather than synchronized rounds [PAGE 3].

Privacy lineage traces to k-anonymity [Sweeney (2002)] and differential privacy [Sarwate and Chaudhuri (2013)], both rejected here because stored anonymized data remain vulnerable to composition attacks and eventual hacking [PAGE 1]. The paper adopts radical privacy-by-design: no storage, local MEC processing, and interception cost raised by requiring adversaries to deploy local radio interception devices [PAGE 1-2]. The MEC architecture itself follows the ETSI MEC white paper (2014) [PAGE 2].

Sample-complexity foundations invoke Mannor and Tsitsiklis (2004) for the single-player lower bound and Valiant (1984) PAC learning for the explore-then-commit analysis frame [PAGE 2, 5].

Multi-week traps: (1) P(n) in a live Radio Access Network is non-stationary—daily and weekly mobility cycles shift which cells are "most active," so a static Nγ set calibrated on one week becomes stale the next, causing DME's stopping condition to misfire [PAGE 8, 12]. (2) EDME's M parallel instances amortize Nγ uncertainty but accrue a linear communication factor M; over multi-week deployments with fixed backhaul budgets, this accumulated bit cost can saturate MEC-to-synchronization-server links [PAGE 9]. (3) Assumption 1's player-independent mean rewards almost certainly degrades over weeks as user behavior and context drift, inviting contextual-bandit extensions that the paper explicitly leaves to future work [PAGE 4, 12].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock:

Crisis habit regression: when coordination collapses—Nγ unknown, a player in Nγ drops to zero activity, or messages are lost—the rational fallback is independent Median Elimination per player with zero communication cost. This is the paper's zero-communication baseline, which DME outperforms only when N < 1024 players and when the distributed elimination actually completes its epochs [PAGE 10-11]. The regression is crisis-driven: agents revert to local, non-communicating explore-then-commit because the distributed protocol's stopping condition ∀n |Kn_l| = 1 cannot be verified without synchronized server feedback [PAGE 6].

Counter-trap: Extended DME is the deliberate counter-trap to Nγ misspecification. By running M instances in parallel with equally spread Nγi = N·i/M and selecting the first instance to converge, EDME converts structural ignorance into a communication-speed-up trade-off [PAGE 8-9]. The recursive layer is that each player maintains M independent elimination states (Kn_i, ˆµn_i, λn_i), and the synchronization server must resolve disjunctive downward messages: an action is broadcast downward if ∃i such that the majority threshold Σ_{n_i} λ^{n_i}_k ≥ Nγi/2 is met in any instance [PAGE 9, Algorithm 4 lines 18-20]. This creates nested beliefs: players model the server's instance-selection logic; the server models players' heterogeneous empirical medians across instances.

Clock: the hard stopping clock for DME is the epoch condition |Kn_l| = 1 for every player, bounded by log₂ K elimination epochs [PAGE 6]. For EDME the clock is disjunctive: ∃i such that ∀n_i, |K^{n_i}_l| = 1 [PAGE 9]. Wall-clock time is governed by Theorem 3's negative binomial waiting time for active players: if γ is small, expected idle draws scale as (1−γ)t/γ, stretching real-world latency [PAGE 7-8]. Experiments fix horizon T = 10⁶ decisions and δ = 0.05, ϵ = 0.5, showing that for 1024 uniform players, expected events per player fall below one thousand, so not even the first elimination epoch completes [PAGE 10]. The recursive theory-of-mind depth is therefore shallow: one level of player-to-server majority voting, with no modeling of other players' private reward histories beyond the aggregated upward bitstream.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof:

Physical layer (radio and network): The privacy model assumes an adversary cannot passively tap the core network and must instead locally deploy interception hardware between end-user devices and MEC servers [PAGE 2]. This veto holds only if the MEC-to-device radio link remains intact. If the synchronization server loses upward messages, λn_k never reaches Nγ/2, no downward elimination is issued, and players remain stuck in local Median Elimination with zero speed-up [PAGE 6, Algorithm 3 lines 13-18]. Conversely, lost downward messages leave Kn and Kn_l desynchronized across players, violating the joint stopping condition [PAGE 6, Algorithm 3 lines 8-10]. The synchronization server thus becomes a single point of failure for the communication-efficiency guarantee, even though it observes only aggregated bit indices [PAGE 4].

Biomechanical layer (human activity): Players are activated by uncontrolled events—device switched on, mobile app launched, web page connected—drawn from P(n) [PAGE 3]. Human behavior is not stationary; circadian and weekly patterns shift P(n), which can eject players from Nγ or admit zero-probability players into it [PAGE 8]. Assumption 1 (µn_k = µk) also assumes reward distributions do not depend on the player; in practice, user-specific context violates this, which the paper defers to future contextual-bandit work [PAGE 4, 12]. These biomechanical drifts veto the theoretical speed-up O(N/(1+ln K)) over multi-day horizons.

Weather/environment: The paper contains no atmospheric propagation model, but MEC edge links are subject to rain fade, multipath, and handover outages. A sustained link outage between a MEC server and the synchronization server vetoes both upward elimination votes and downward elimination broadcasts, reducing the system to the zero-communication baseline regret curve shown in Figures 2-5 [PAGE 10-11]. No weather-adaptive backoff is specified in Algorithms 1-4.

Adjudication: the veto hierarchy is (1) communication failure (immediate protocol stall), (2) Nγ/zero-probability player inclusion (non-termination), (3) Assumption 1 violation (suboptimal arm retention), with physical link integrity as the gatekeeper for all higher layers.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions:

Veto Scenario 1 — Nγ overestimation under skewed traffic.
Setup: 20% of players generate 80% of events; the operator sets Nγ = N (uniform assumption) instead of Nγ = 0.2N [PAGE 10-11].
Verification: run Figure 6 experiment with 256 players; compare regret of DME with Nγ = N against DME with Nγ = 0.2N and against independent Median Elimination [PAGE 11].
Prediction: when Nγ is overestimated, the speed-up factor relative to Median Elimination run on each player falls below 1, i.e., distributed execution incurs higher regret than local execution despite paying communication cost [PAGE 11]. Measurable via pseudo-regret R(T) = T·µ_{k*} − Σ_{t=0}^T ȳ^{n_t}_{k_t} at T = 10⁶ [PAGE 10].

Veto Scenario 2 — Zero-probability player admitted to Nγ.
Setup: Nγ contains a player i with P(n=i) = 0; γ > 0 so the player is classified as "most active" but never drawn [PAGE 8].
Verification: instrument Algorithm 3's stopping condition ∀n |Kn_l| = 1; log termination events over T = 10⁶ draws [PAGE 6, 10].
Prediction: the algorithm never stops because the silent player never confirms elimination of its remaining arms; the run exceeds the time horizon with |Kn_l| > 1 for player i and outputs no ϵ-approximation [PAGE 8]. Communication cost accumulates to 2N(K−1)⌈log₂ K⌉ bits without termination [PAGE 6].

Veto Scenario 3 — Upstream message loss on the MEC-to-server link.
Setup: simulate independent packet-drop probability p_drop on upward messages from players to the synchronization server [PAGE 6].
Verification: count downward messages issued; measure per-player pulls until stopping; compare against Lemma 3's O( K/(ϵ²Nγ) ln(K/δ) ) bound [PAGE 6-7].
Prediction: if p_drop is high enough that Σ_{n} λn_k < Nγ/2 for all suboptimal k, no downward elimination is ever sent; each player executes local Median Elimination alone, achieving zero communication cost but reverting to single-player sample complexity t* = Ω( K/ϵ² ln(1/δ) ), forfeiting the O(N/(1+ln K)) speed-up [PAGE 5, 7]. The veto is verifiable by observing regret curves matching the zero-communication baseline in Figures 2a/3a rather than the distributed curves [PAGE 10-11].
</RLVR_COUNTERFACTUAL_VETOES>