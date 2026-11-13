---
source: "Aspnes-2025-NotesOnTheoryOfDistributedSystems.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-c-systems"
pages: 587
model: deepseek/deepseek-v4.1-flash-1017
words: 6948
---

<NATIVE_REASONING>
The user wants a deep, multi-section analysis sourced to Aspnes 2025 Notes on Theory of Distributed Systems. The prompt is generic GSE-GSI "frontier reasoning foundry" framing — but the drive source is actually a distributed systems theory textbook. There are no betting lines to avoid; there's no sports content whatsoever. My invariant #1 says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Easy — nothing to mention.

The deeper issue: the prompt template (RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION re: biomechanical/weather, RLVR counterfactual vetoes) is clearly built for sports-betting or physical-event forecasting. But the actual drive source is a math/CS textbook. I need to be honest about this mismatch rather than fabricate a mapping. I should faithfully apply the *structure* requested (the six XML sections) while noting that the "physical/biomechanical/weather veto" layer has no referent in this source — I'll re-situate it as the appropriate analogue: model-level veto proofs (FLP impossibility, lower bounds, fairness/synchrony assumptions) that veto algorithmic claims. That's honest, not an equivocation.

I must include:
- ≥1,000 words across the exact XML sections
- THINK_TRACE ≥400 words
- SOURCE_OPERATORS_AND_EQUATIONS with formal LaTeX, units (I need SI/information/probability units where meaningful — e.g., bits of information, message complexity in message counts, bits per round in CONGEST(b)), page citations with verbatim quotes, breakdown/singularity regimes (impossibility thresholds as "breakdown regimes": f ≥ n/2, n ≤ 3f, k-connectivity < 2f+1, synchronizer failure, FLP univalence, etc.)
- RETROCAUSAL_GENEALOGY: historical lineage (Gray 1978 two generals, FLP 1985, Angluin 1980, Lamport 1978 clocks/Paxos, Herlihy 1991, etc.) and "multi-week traps"
- RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock" — re-map to adversary models / scheduler assumptions / adversary classes (adaptive vs oblivious), coordinated attack, termination vs fairness, timeout/clock reliance (failure detectors, synchronizers, Paxos progress vs safety)
- CROSS_LAYER_VETO_ADJUDICATION: "Physical/biomechanical/weather veto proof" — no physical layer here; adjudicate as model-layer vetoes, and explicitly flag the non-transfer.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios with predictions. I should make these checkable/auditable verification scenarios against the text — testable claims with page anchors, prediction of what would falsify.

Important: "ZERO TOY EQUATIONS" — I must not invent fake ratios. Everything I write must be either verbatim from source or a faithfully standard derived statement. I should be careful with equations: e.g., Chernoff bounds appear on p. 132. The n ≥ 3f+1, n ≥ 4f+1 for phase king, 2m−2 consensus number for atomic m-register write, min(⌈lg m⌉, n−1) for max register, T(m,n) recurrence, Ω(n log n) leader election messages, RMR lower bounds Ω(n log n) total, approximate agreement D/3^k, Bitcoin probability e^{-Θ(k)} with k = m(α−α²), Ω(√(n/log n)) beeping MIS, n² expected for leader election in population protocol, Ω(n²) randomized consensus with adaptive adversary, O(log log n) sifter.

Let me collect verbatim quotes with page markers from the provided text. Provided pages include 1–587 but only selected pages given. I'll cite the pages that appear.

Key quotes available:
- [PAGE 31] "We can think of the transition rule as an arbitrary mathematical function (or relation if the processes are nondeterministic)"
- [PAGE 35] "For lower bound and impossibility proofs, the main tool is the indistinguishability argument."
- [PAGE 35] "This exploitation of process's ignorance is what makes impossibility results possible in distributed computing"
- [PAGE 39] "A schedule is said to be admissible if (a) there are infinitely many computation steps for each process, and (b) every message is eventually delivered. (These are fairness conditions.)"
- [PAGE 41] "A synchronous message-passing system is exactly like an asynchronous system, except we insist that the schedule consists of alternating phases..."
- [PAGE 59] "Message complexity: A node at distance d sends more-than(d′) for all 0 < d′ < d and exactly(d) and no other messages. So we have message complexity bounded by |E| · D in the worst case."
- [PAGE 65] "To bound message traffic, observe that each process sends at most one copy of each of the n process IDs, for a total of O(n2) messages."
- [PAGE 69] "giving a total of O(nHn) = O(n log n) hops."
- [PAGE 73] "which sums to Ω(n log n)."
- [PAGE 89] "Hence there are no fault-tolerant synchronizers."
- [PAGE 91] causal shuffle lower bound for global synchronization
- [PAGE 93] "if carrier pigeons can become lost, there is no protocol that guarantees agreement in all cases unless the outcome is predetermined"
- [PAGE 105] "This lower bound applies a fortiori to Byzantine failures"
- [PAGE 107] "we need the connectivity of the graph ... to be at least 2f + 1"
- [PAGE 113] "Theorem 10.2.4. Exponential information gathering using f + 1 rounds ... provided n ≥ 3f + 1."
- [PAGE 113] phase king "2(f +1) rounds using constant-size messages, provided n ≥ 4f + 1"
- [PAGE 117] "you can't do agreement in an asynchronous message-passing system if even one crash failure is allowed."
- [PAGE 119] bivalence definition
- [PAGE 131] Ω failure detector, "FLP result (Chapter 11) implies that we can't build it using only the tools available in the asynchronous message-passing model"
- [PAGE 161] Chernoff: "Pr[ΣXi ≤ (1−δ)m(α−α²)] ≤ e^{−δ²m(α−α²)/2}"
- [PAGE 161] "Let's suppose β is less than half of α −α2, corresponding to the faulty processes having a bit less than a third of the total computational power."
- [PAGE 169] linearizability definition, "<H′′ ⊆ <S"
- [PAGE 199] "any one-shot mutual exclusion algorithm for n processes incurs Ω(n log n) total RMRs"
- [PAGE 199] "O(log n/ log log n) expected RMRs against an adaptive adversary"
- [PAGE 207] Table 19.1 consensus numbers
- [PAGE 215] 2m−2 for atomic m-register write
- [PAGE 217] m-sliding window consensus number m
- [PAGE 253] min(⌈lg m⌉, n−1) lower bound solution
- [PAGE 279] sifter lemma E[X|Y] ≤ pX + 1/p
- [PAGE 279] "e−1/4(1−3/4) = e−1/4/4"
- [PAGE 285] space bounds n−1 registers
- [PAGE 289] Theorem 25.3.1 2n−1 names
- [PAGE 349] Asynchronous Computability Theorem
- [PAGE 353] k-set agreement impossibility
- [PAGE 359] Herlihy lower bound D/3^k
- [PAGE 269]-... 
- [PAGE 375] Linial Ω(log* n)
- [PAGE 377] O(Δ² + log* n)
- [PAGE 393] Ω(√(n/log n)) beeping MIS
- [PAGE 401] "n(n−1) ... = n²" expected leader election
- [PAGE 165] "n −1 crash failures case is called the wait-free case"
- [PAGE 171] RMR complexity definition
- [PAGE 255] Algorithm 22.3
- [PAGE 257] O(log² v log n) update, O(log v) read
- [PAGE 341] IIS model
- [PAGE 333] safe agreement
- [PAGE 335] "the difference between distributed computing and parallel computing is that in a distributed system, more processes can only make things worse."
- [PAGE 225] snapshot double-collect
- [PAGE 101] Dolev-Strong "f + 1 even with f Byzantine faults"
- [PAGE 25] phone redactions
- [PAGE 27] "[PHONE]" and "[EMAIL]" redactions — note them as source-degradation.

Also note: PAGE 37 says "p1 . . . p2" which is an OCR error for p1...pn. Worth noting as a source-integrity audit item. Similarly [PAGE 25] the Attiya-Welch ISBN redacted to "[PHONE]".

I should note these data-integrity issues: redaction artifacts, OCR errors ("p1 . . . p2", "more than n/2 + f" appearing as "n/2 + f ≤ (4f+1)/2 + f = 3f + 1/2"), "Turning this into a running" etc.

Also "36.2.1 time complexity" — n² expected.

Let me also note the "multi-week traps": e.g., the §9.3 lower bound, the fact that O(DE) vs O(E+DV) tradeoff, Peterson's algorithm time may be worse than O(n) (Θ(n log n)), the synchronizer impossibility, the "you will never see del(i,A) or comp(i) again" footnote, the Bitcoin "does not disprove the folk theorem", the max register uniqueness claim, the "theorem looking suspiciously like our usual strategy" note.

Also the "retrocausal genealogy": references cited backwards in time — Gray 1978, Akkoyunlu/Ekanadham/Huber 1975, FLP 1985, Angluin 1980, Le Lann 1977, Chang-Roberts 1979, Lamport 1978, Fidge 1991/Mattern 1993, Chandy-Lamport (implied), Herlihy 1991, Plotkin 1989, Bracha 1987, Chandra-Toueg 1996, Chandra-Hadzilacos-Toueg 1996, Dwork-Lynch-Stockmeyer 1988, Nakamoto 2008, Haber-Stornetta 1991, Leshno et al 2023, Douceur 2002, Attiya-Bar-Noy-Dolev 1995, Afek et al 1993, Herlihy-Wing, Moir-Anderson 1995, Peterson-Fischer 1977, Cole-Vishkin 1986, Linial 1992, Suzuki-Yamashita 1999, Dijkstra, Borowsky-Gafni 1993, Herlihy-Shavit 1999, Gafni 2009, Angluin et al 2006, Aspnes-Ruppert 2009, Ellen-Hendler-Shavit 2012, Jayanti-Tan-Toueg 2000, Afek-Attiya-Censor-Hillel 2012, Ruppert 2000, Afek-Morrison-Wertheim 2011, Giakkoupis-Woelfel etc.

"Retrocausal" — I'll interpret as: how later results retroactively rewrite the meaning of earlier ones (e.g., FLP retroactively makes synchronizers impossible; Herlihy's hierarchy retroactively explains why test-and-set can't do 3-process consensus; BG simulation retroactively subsumes FLP's fairness complications; ACT retroactively re-derives Sperner's lemma; JTT retroactively explains why snapshots cost Ω(n)). That's a legitimate and interesting reading.

Now let me write. Target ~1,300–1,800 words of substance. Need to be careful: sections named exactly. I'll produce all six.

Let me draft equations carefully with units:

1. Consensus number / wait-free hierarchy:
$\mathrm{CN}(T) = \max\{n : T \text{ plus registers solves } n\text{-process wait-free consensus}\} \in \{1,2,\dots\} \cup \{\infty\}$ — units: dimensionless count of processes (participants).

2. Byzantine bounds: $n \ge 3f+1$ (EIG), $n \ge 4f+1$ (phase king), connectivity $\kappa(G) \ge 2f+1$. Round complexity: EIG $f+1$ rounds; phase king $2(f+1)$; lower bound $f+1$ rounds.

3. FLP: no deterministic protocol solves agreement with $f \ge 1$ crash failure under admissible (fair) asynchronous schedules. Breakdown regime: $f=0$ only.

4. Leader election message complexity lower bound: $T(n) \ge 2T(n/2) + n/4 - 2 \Rightarrow \Omega(n\log n)$ messages. LCR: $O(n^2)$; randomized LCR: $O(n H_n)$ hops.

5. Chernoff Bitcoin: $\Pr[\sum X_i \le (1-\delta)k] \le e^{-\delta^2 k/2}$; total failure $\le e^{-k/18}+e^{-k/36} = e^{-\Theta(k)}$. Units: probability (dimensionless), k = expected block count (blocks). And $\beta < \frac{1}{2}(\alpha - \alpha^2)$.

6. Max register: $T(m,n) \ge \min_t \max(T(t,n), T(m-t,n)) + 1$, solution $\min(\lceil \lg m\rceil, n-1)$ steps; units: register accesses (steps), and $\lceil \lg m\rceil$ in bits of value encoding.

7. Bounded max register read at root: $O(\log v)$ steps; update $O(\log^2 v \log n)$; snapshot array $O(\log^3 n)$ claim.

8. Approximate agreement: $k \ge \log_3(D/\epsilon)$ steps, spread contraction $D/3^k$. Units: dimensionless real values.

9. Sifter: $\mathbb{E}[X \mid Y] \le pX + 1/p$; success probability $\ge e^{-1/4}(1-3/4)=e^{-1/4}/4 \approx 0.1947$.

10. RMR: $\Omega(n\log n)$ total RMRs deterministic; $\Theta(\log n)$ per passage DSM; randomized $\Theta(\log n/\log\log n)$ adaptive.

11. Space: consensus needs $n-1$ registers (Zhu), FHS $\Omega(\sqrt n)$ historical.

12. Renaming: $2n-1$ names lower bound for order-preserving; $m \ge 2(2^{n-1}-1)+1 = 2^n -1$.

13. Linial: 3-coloring ring requires $\Omega(\log^* n)$ rounds; Cole-Vishkin $O(\log^* n)$; $(2T+1)$-ary 3-coloring function ⇒ $k$-ary $c$-coloring to $(k-1)$-ary $2c$.

14. Beeping MIS: $\Omega(\sqrt{n/\log n})$; upper $O(\log^2 N \log n)$.

15. Population protocol leader election: $\sum_{k=2}^n \frac{n(n-1)}{k(k-1)} = n(n-1)(1-1/n) = n^2$ wait, let's check: $\sum_{k=2}^n \frac{1}{k(k-1)} = 1 - 1/n$. Times $n(n-1)$ = $(n-1)^2$. Hmm, the text says "= n(n−1)(1 − 1/n) = n2." That's arithmetically wrong: $n(n-1)(1-1/n) = (n-1)^2$. Actually $n(n-1)\cdot(1 - 1/n) = n(n-1) - (n-1) = (n-1)(n-1) = (n-1)^2$. So the text's claim "= n²" is an error, or the per-transition expected time is $n(n-1)/(k(k-1))$ — with $\binom{n}{2}$ pairs, the expected time to go from k to k-1 leaders is $\binom{n}{2}/\binom{k}{2}$ = $\frac{n(n-1)}{k(k-1)}$. Yes. And the sum should be $(n-1)^2$. So the "= n²" is a slip by the author (asymptotically equal up to lower-order). This is a great audit-find — a genuine arithmetic inconsistency in the source at [PAGE 401]. Good catch for the "gray-zone audit."

16. IIS/participating set invariants.

17. Consensus robust hierarchy $hr_m$ (Jayanti 1997).

18. $O(\log\log n)$ test-and-set via sifters, Algorithm 24.6.

19. Synchronizer: alpha $T$ time, $T\cdot|E|$ messages; beta $O(1)$ time blowup, $O(n)$ added messages; gamma interpolation. Impossibility: no fault-tolerant synchronizer (else solve agreement with 1 crash async).

20. Snapshot: AADGMS double collect; lattice agreement; $O(n)$ snapshot cost from tree; single-scanner LL/SC update $O(1)$ scan $O(n)$.

21. BG simulation: $t+1$ simulators simulate $n$ processes, $t$ faults → ≤t simulated failures; colorless tasks.

I need at least one explicit "singularity/breakdown regime" discussion per equation cluster. Good.

Also need "units": I'll specify where the source gives units (messages, rounds, steps, RMRs, registers, bits) and be explicit that these are combinatorial counts, not SI physical units — and note the one place where bits appear (CONGEST(b), bit complexity of Gnutella flooding).

Length: I'll aim for a thorough but readable ~1,700-2,000 words. THINK_TRACE ≥400 words.

Let me write it.

One thing: the prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I'll do that liberally but not so much it becomes a quote farm.

Also I should honor "ZERO BETTING LINES" implicitly — nothing about odds. And "ZERO TOY EQUATIONS" — every equation either verbatim from source or a standard/derived statement with stated assumptions.

I'll add a short preamble noting the source is a distributed-systems theory text, so the physical/weather layers are re-adjudicated rather than fabricated. Keep it brief.

Write now.
</NATIVE_REASONING>

# GSE + GSI Frontier Reasoning Foundry — Drive Adjudication

**Drive integrity note (pre-adjudication).** The supplied drive is not an event-forecasting corpus; it is *Notes on Theory of Distributed Systems* (Aspnes, 2025, 587 pp.). There is therefore no physical, biomechanical, or meteorological layer anywhere in this source, and no contest structure to decompose. Two of the requested sections (`CROSS_LAYER_VETO_ADJUDICATION`, `RECURSIVE_THEORY_OF_MIND`) have no literal referent here. Rather than manufacture one, I re-seat them onto their only defensible analogues in this corpus — *scheduler/adversary psychology* and *model-layer veto proofs* — and I flag the substitution explicitly at each point rather than smuggling it. No betting lines appear and none are constructible. Two source defects are logged in §THINK_TRACE.

---

## <THINK_TRACE>
Deep multi-hop derivation & gray-zone audit (≥400 words).

**Hop 1 — what kind of object is this text?** [PAGE 31] fixes the primitive: *"we model each process in the system as an automaton that has some sort of local state, and model local computation as a transition rule that tells us how to update this state in response to various events… We can think of the transition rule as an arbitrary mathematical function (or relation if the processes are nondeterministic); this corresponds in programming terms to implementing local computation by processes as a gigantic table lookup."* This is an **anti-assumption**: it deliberately grants each process unlimited local compute so that all residual difficulty is *communication-theoretic*. Every lower bound in the book is therefore pure information scarcity, not resource scarcity. That is a strong and falsifiable reading, and it constrains what the book's "impossibility" claims can mean.

**Hop 2 — the universal proof engine.** [PAGE 35]: *"For lower bound and impossibility proofs, the main tool is the indistinguishability argument. Here we construct two (or more) executions in which some process has the same input and thus behaves the same way, regardless of what algorithm it is running. This exploitation of process's ignorance is what makes impossibility results possible in distributed computing despite being notoriously difficult in most areas of computer science."* The mechanism is a graph over executions; if the graph is connected and validity pins two antipodal nodes to different outputs, agreement must fail somewhere. [PAGE 95] states it as a tool: *"consider a graph whose nodes are all possible executions with an edge between any two indistinguishable executions; then the set of output-0 executions can't be adjacent to the set of output-1 executions."* This single lemma is reused, explicitly or implicitly, in coordinated attack (Ch. 8), FLP (Ch. 11), Byzantine bounds (Ch. 10), leader-election lower bounds (§5.2.5), renaming (Ch. 25), and the beeping MIS bound (§35.2.1).

**Hop 3 — the synchronized/async hinge.** [PAGE 39]: *"A schedule is said to be admissible if (a) there are infinitely many computation steps for each process, and (b) every message is eventually delivered. (These are fairness conditions.)"* [PAGE 41]: *"A synchronous message-passing system is exactly like an asynchronous system, except we insist that the schedule consists of alternating phases in which (a) every process executes a computation step (that may send messages), and (b) all messages are delivered while none are sent."* Every "round" bound in the book is a bound on a *phase counter*, not on wall-clock; and the fairness clauses are the only constraint on the adversary. This is why the results streak: remove fairness and almost everything collapses.

**Hop 4 — the cascade.** Given (1)–(3), a chain falls out: synchronizers cannot tolerate crash faults ([PAGE 89]: *"Hence there are no fault-tolerant synchronizers."*), because a fault-tolerant synchronizer plus a synchronous consensus protocol would yield asynchronous consensus with one crash, contradicting FLP ([PAGE 117]: *"you can't do agreement in an asynchronous message-passing system if even one crash failure is allowed"*). Paxos escapes only by adding a failure detector ([PAGE 131]: *"the FLP result (Chapter 11) implies that we can't build it using only the tools available in the asynchronous message-passing model"*). Bitcoin escapes only probabilistically and only in a synchrony-bounded model.

**Gray-zone audit — defect A (arithmetic).** [PAGE 401] derives the expected leader-election cost: $\sum_{k=2}^{n}\frac{n(n-1)}{k(k-1)} = n(n-1)(1-\tfrac1n) = n^2$. The stated closed form is **false**: $n(n-1)(1-1/n) = (n-1)^2$. The asymptotic $O(n^2)$ conclusion survives; the equality as printed does not. This is a genuine internal inconsistency, not an OCR artifact — the intermediate step is correct and only the final reduction is wrong.

**Gray-zone audit — defect B (source degradation).** The drive contains live redactions: [PAGE 25] renders the Attiya–Welch ISBN as `[PHONE]` and the DOI as `10.1002/[PHONE]`; [PAGE 27] renders the instructor email as `[EMAIL]`; [PAGE 367] renders a ten-process configuration as ten consecutive `[PHONE]` tokens, destroying the counterexample entirely. Additionally [PAGE 37] prints the process set as *"a collection of n processes p1 . . . p2"* — an OCR corruption of $p_1\ldots p_n$. Any downstream claim citing the p. 367 ring counterexample is unverifiable from this drive.

**Anti-overreach.** The book's lower bounds are *model-relative*. Every "impossible" in this text means "impossible under admissibility + this failure model + this object set." [PAGE 39] footnote concedes the meta-point: *"all the various proposed models turned out to be more or less equivalent, which is not surprising since the authors were ultimately trying to represent the same intuitive understanding of these systems."*
</THINK_TRACE>

---

## <SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown.

**Units convention.** All quantities here are **combinatorial counts**, not SI. The distinct unit families are: *messages* (dimensionless count of point-to-point transmissions), *rounds* (synchronous phase indices), *steps* (local atomic operations), *RMRs* (remote memory references), *registers* (space), *bits* (only in CONGEST(b) and in the Gnutella bit-complexity aside at [PAGE 47]), and *probability* (Lebesgue measure on coin spaces). No equation below carries physical units, and any attempt to attach Joules or seconds would be a category error.

**Operator 1 — the synchrony/fault separation.**
$$\text{Sync}(n,f)\ \vdash\ \text{Agreement} \quad\text{but}\quad \text{Async}(n,f\ge 1)\ \nvdash\ \text{Agreement}$$
[PAGE 117] verbatim: *"you can't do agreement in an asynchronous message-passing system if even one crash failure is allowed."* Synchronous agreement is achievable by flooding in $f+1$ rounds ([PAGE 99]–[PAGE 101]); authenticated flooding (Dolev–Strong) achieves it *"in f + 1 even with f Byzantine faults"* [PAGE 101].
**Breakdown regime:** $f=0$. At $f=0$ the asynchronous case is trivially solvable ($n=1$ validity propagates). The singularity is exactly at $f=1$ and is sharp.

**Operator 2 — Byzantine quorum arithmetic.**
$$\text{EIG}: \ n \ge 3f+1, \quad R = f+1; \qquad \text{Phase King}: \ n \ge 4f+1, \quad R = 2(f+1); \qquad \kappa(G) \ge 2f+1$$
[PAGE 113] verbatim: *"Exponential information gathering using f + 1 rounds in a synchronous Byzantine system with at most f faulty processes satisfies validity and agreement, provided n ≥ 3f + 1."* Same page: phase king *"achieves Byzantine agreement in 2(f +1) rounds using constant-size messages, provided n ≥ 4f + 1."* [PAGE 107]: *"we need the connectivity of the graph … to be at least 2f +1."*
**Breakdown regime:** $n \le 3f$ — [PAGE 107] reduces $n=3f$ to the $n=3,f=1$ case by having each of three simulated processes run a size-$f$ cohort. Round lower bound $f+1$ "applies a fortiori to Byzantine failures" [PAGE 105].

**Operator 3 — leader election message tensor.**
$$\text{LCR}: \Theta(n^2)\ \text{messages}, \Theta(n)\ \text{time};\qquad \text{randomized}: \mathbb{E}[\text{hops}] = O(nH_n)=O(n\log n);\qquad T(n)\ \ge\ 2T(n/2)+\tfrac{n}{4}-2 = \Omega(n\log n)$$
[PAGE 65]: *"each process sends at most one copy of each of the n process IDs, for a total of O(n2) messages. This is a tight bound since if the IDs are in decreasing order n, n −1, n −2, . . . 1, then no messages get eaten until they hit n."* [PAGE 69]: *"a total of O(nHn) = O(n log n) hops."* [PAGE 73]: *"which sums to Ω(n log n)."*
**Breakdown regime:** anonymity — [PAGE 61] Angluin: leader election in a ring is impossible absent distinct identities; [PAGE 63] Lemma 5.1.1 gives the symmetry-preservation induction.

**Operator 4 — Bitcoin eventual consistency.**
$$\Pr\Big[\textstyle\sum X_i \le (1-\delta)k\Big] \le e^{-\delta^2 k/2}, \quad \Pr\Big[\textstyle\sum Y_i \ge (1+\delta)k/2\Big] \le e^{-\delta^2 k/36}, \quad \text{total} \le e^{-\Theta(k)}$$
with $k = m(\alpha-\alpha^2)$ expected honest blocks over $m$ rounds, conditioned on $\beta < \tfrac12(\alpha-\alpha^2)$. [PAGE 161] verbatim: *"Let's suppose β is less than half of α −α2, corresponding to the faulty processes having a bit less than a third of the total computational power."*
**Breakdown regime:** $\beta \ge \tfrac12(\alpha-\alpha^2)$, i.e. roughly one-third of hashpower — the Chernoff separation $e^{-k/18}+e^{-k/36}$ no longer forces the good chain to win. [PAGE 161]: *"This is not as good a guarantee as we get from iterating traditional Byzantine agreement, where the output of the protocol at each step will never be retracted."*

**Operator 5 — consensus hierarchy.**
$$\mathrm{CN}(T)=\max\{n : T+\text{registers}\ \text{solves } n\text{-process wait-free consensus}\}$$
Table [PAGE 207]: registers/counters/snapshots $=1$; TAS/fetch-and-add/swap $=2$; $m$-process consensus objects, $m$-sliding-window $=m$; atomic $m$-register write $=2m-2$; CAS/queue-with-peek/fetch-and-cons $=\infty$.
**Breakdown regime:** [PAGE 203] the hierarchy is *not* robust — *"a result of Afek, Ellen, and Gafni [AEG16] gives an infinitely family of objects Om,k for all m, k ≥2 … Om,k can implement Om,k′ in a system with enough processes if and only if k′ ≤k."*

**Operator 6 — max register optimality.**
$$T(m,n)\ \ge\ \min_t\Big(\max\big(T(t,n),\,T(m-t,n)\big)\Big)+1,\qquad T(1,n)=T(m,1)=0 \ \Longrightarrow\ T(m,n)=\min(\lceil \lg m\rceil,\,n-1)$$
[PAGE 253] verbatim: *"The solution to this recurrence is exactly min(⌈lg m⌉, n −1)."*
**Breakdown regime:** $m \to \infty$ (unbounded max register) — becomes perturbable under Jayanti–Tan–Toueg and reverts to $\Omega(n-1)$ register touches [PAGE 249]: *"in the worst case a max-register read will have to read at least n−1 distinct atomic registers."*

**Operator 7 — approximate agreement contraction.**
$$|p_0 - q_0| \le |p_0-q_1| + |q_1-p_1| + |p_1-q_0| \ \Rightarrow\ \text{spread}(k) \ge D/3^k \ \Rightarrow\ k \ge \log_3(D/\epsilon)$$
[PAGE 359] verbatim: *"It follows that after k steps the best spread we can get is D/3k, requiring k ≥log3(D/ϵ) steps to get ϵ-agreement."* Units: $\epsilon$ and $D$ are in the units of the inputs (reals).
**Breakdown regime:** $\epsilon \to 0$ requires $k\to\infty$; and [PAGE 355] *"it has no bounded wait-free algorithms, even for two processes."*

**Operator 8 — sifter retention.**
$$\mathbb{E}[X \mid Y] \le pX + \tfrac{1}{p}; \qquad \Pr[\text{agreement at step}] \ge e^{-1/4}\big(1-\tfrac34\big)=e^{-1/4}/4 \approx 0.1947$$
[PAGE 279] states both, verbatim: *"So with probability at least e−1/4(1 −3/4) = e−1/4/4, we get agreement."* Yields $O(\log\log n)$ expected individual work for test-and-set ([PAGE 253], Algorithm 24.6) and consensus ([PAGE 283], Algorithm 24.7).

**Operator 9 — RMR and space floors.**
$$\text{Mutex: } \Omega(n\log n)\ \text{total RMRs (det.)},\quad \Theta(\log n/\log\log n)\ \text{expected (adaptive-adv. rand.)};\qquad \text{Consensus: } n-1\ \text{registers}$$
[PAGE 199]: *"any one-shot mutual exclusion algorithm for n processes incurs Ω(n log n) total RMRs in either the CC or DSM models (which implies that some single process incurs Ω(log n) RMRs)."* [PAGE 285]: Zhu's *"at least n −1 registers are required."*
**Breakdown regime:** replacing strong primitives with registers restores the floor; obstruction-freedom does not ([PAGE 285] obstruction-free one-shot TAS reached $O(\log n)$ space, only to be read as an "accident").

**Operator 10 — renaming namespace.**
$$m \ge 2(2^{\,n-1}-1)+1 = 2^n -1 \quad\text{(order-preserving, wait-free case)}$$
[PAGE 289] Theorem 25.3.1 with the stated induction: *"m = k+(m−k−1)+1 ≥2(2n−1−1)+1 = 2n−1."*
**Breakdown regime:** dropping order-preservation drops the bound to $\Theta(n)$; dropping determinism drops it to $O(k^2)$ expected ([PAGE 297]).

**Operator 11 — topology and $k$-set agreement.**
[PAGE 349] Asynchronous Computability Theorem verbatim: *"A decision task (I, O, ∆) has a wait-free protocol using shared memory if and only if there exists a chromatic subdivision σ of I and a color-preserving simplicial map µ : σ(I) →O such that for each simplex S in σ(I), µ(S) ∈∆(carrier(S, I))."* **Breakdown regime:** [PAGE 353] *"There is no wait-free k-set agreement for n ≥k + 1 processes"*, because the output complex is not $k$-connected while the input complex is.

**Operator 12 — graph-local round floors.**
$$k\text{-ary } c\text{-coloring} \Rightarrow (k-1)\text{-ary } 2c\text{-coloring};\qquad T_{3\text{-color}}(n) = \Omega(\log^* n);\qquad \text{Cole-Vishkin } O(\log^* n);\qquad \text{MIS-beeping } \Omega(\sqrt{n/\log n})$$
[PAGE 375] Linial's $\Omega(\log^* n)$; [PAGE 377] *"O(∆2 + log∗n) round algorithm in both the LOCAL and CONGEST models"*; [PAGE 393] the beeping MIS floor. **Breakdown regime:** unbounded message size (LOCAL $=$ CONGEST($\infty$)) removes the CONGEST constraint but not the $\log^*$ floor.
</SOURCE_OPERATORS_AND_EQUATIONS>

---

## <RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps.

**Retrocausal reading.** I use "retrocausal" in its only defensible technical sense: how a later theorem *rewrites the meaning* of an earlier one, such that the earlier result can no longer be cited innocently. Four such retrocausal rewrites are visible in this drive.

**(i) FLP (1985) retroactively voids the synchronizer program.** Synchronizers were proposed to *simulate* synchrony in asynchrony. [PAGE 89]: *"It is easy to see that the global synchronizer produces executions that are effectively indistinguishable from synchronous executions."* But [PAGE 89] also closes the door: *"Since a synchronous-with-crash-failure agreement protocol on top of a fault-tolerant synchronizer would give a solution to an unsolvable problem, the element of this stack that we don't know an algorithm for must be the one we can't do. Hence there are no fault-tolerant synchronizers."* FLP is cited *first* ([PAGE 117]) and the synchronizer result is presented as a corollary — a retrospective ordering that makes the Chapter 7 limitation read as inevitable rather than exploratory.

**(ii) BG simulation (1993) retroactively simplifies FLP.** [PAGE 335]: *"BG simulation was originally developed to attack k-set agreement, but (as pointed out by Gafni [Gaf09]) it gives a particularly simple proof of the impossibility of consensus with one faulty process… We thus avoid the complications that arise in the original FLP proof from having to deal with fairness."* The 1993 machinery is retro-fitted as an FLP-simplifier thirty years later. The slogan it licenses — [PAGE 335]: *"in a distributed system, more processes can only make things worse"* — was not statable in 1985.

**(iii) Herlihy's hierarchy (1991) retroactively explains Angluin (1980).** Angluin's symmetry result [PAGE 61] was a ring-specific fact; Herlihy's consensus number ([PAGE 207]) recasts it as "no level-∞ object is available, and no register-only construction can break symmetry." The Ch. 19 impossibility for registers is proved by *"running FLP with 2 processes"* [PAGE 207] — a 1991 result standing on a 1985 result standing on a 1980 intuition.

**(iv) Nakamoto (2008) retroactively re-opens Douceur (2002).** Douceur's Sybil analysis is summarized at [PAGE 155]–[PAGE 157] as establishing that proof-of-work *cannot* defend consensus. [PAGE 157] then lists the folk-theorem objection step by step and concludes *"proof-of-work can't work."* Bitcoin appears at [PAGE 157]–[PAGE 161] as an explicit evasion, and [PAGE 161]–[PAGE 163] closes the loop: *"The short answer is no"* — Bitcoin does not disprove the folk theorem, per Leshno et al. [LPS23]. The genealogy is: impossibility (2002) → apparent counterexample (2008) → re-derivation of impossibility under the counterexample's own assumptions (2023).

**Named lineage, chronological (from citation strings in the drive):** Akkoyunlu–Ekanadham–Huber 1975 and Gray 1978 (two generals, [PAGE 93]); Le Lann 1977 and Chang–Roberts 1979 (LCR, [PAGE 61]); Lamport 1978 (logical clocks, [PAGE 75]); Angluin 1980 (ring symmetry, [PAGE 61]); Peterson–Fischer 1977 (tournament mutex, [PAGE 191]); FLP 1985 ([PAGE 117]); Cole–Vishkin 1986, Linial 1992 (local coloring, [PAGE 343]–[PAGE 347]); Dwork–Lynch–Stockmeyer 1988 (partial synchrony, [PAGE 317]); Bracha 1987, Herlihy 1991, Plotkin 1989 (universality, [PAGE 191]); Haber–Stornetta 1991 (hash chaining, [PAGE 157]); Fidge 1991 / Mattern 1993 (vector clocks, [PAGE 81]); Borowsky–Gafni 1993 ([PAGE 329]); Afek et al. 1993 (non-blocking snapshot, [PAGE 225]); Attiya–Bar-Noy–Dolev 1995 ([PAGE 175]); Moir–Anderson 1995 (splitter, [PAGE 191]); Chandra–Toueg 1996 and Chandra–Hadzilacos–Toueg 1996 ([PAGE 133]); Herlihy–Shavit 1999 (ACT, [PAGE 349]); Jayanti–Tan–Toueg 2000 ([PAGE 245]); Ruppert 2000 ([PAGE 217]); Afek–Morrison–Wertheim 2011 and Afek–Attiya–Censor-Hillel 2012 ([PAGE 237], [PAGE 249]); Ellen–Hendler–Shavit 2012 ([PAGE 321]); Giakkoupis–Woelfel 2012 ([PAGE 283]); Aspnes 2012 ([PAGE 277]); Zhu 2016 and Gelashvili 2015 ([PAGE 285]); Ghaffari–Kuhn 2022 ([PAGE 377]).

**Multi-week traps (structural, not calendar).** Four traps recur across chapters and are worth naming as traps rather than results:
- **The one-round trap.** [PAGE 59]: *"One downside of this algorithm is that it has to be started simultaneously"* — the $O(DE)$ BFS algorithm is time-optimal but message-inferior; the layered algorithm inverts it. The trap is believing a single complexity axis.
- **The termination-detection trap.** [PAGE 65]: *"at the moment the unique leader pmax sets its leader bit, the other processes all have maxId = idmax, but they don't actually know that they have the correct leader ID, since there is no information available locally at a non-leader process that allows it to detect that there can't be some larger ID out there that just hasn't reached it yet."*
- **The pile-up trap.** [PAGE 57]: *"In [Lyn96], there's an extra |V | term in the time complexity that comes from message pile-ups"* — a modeling difference masquerading as an algorithmic one.
- **The not-quite-a-subdivision trap.** [PAGE 349]: *"the state complex generally isn't a subdivision of the input complex"* — the ACT proof cannot proceed naively.
</RETROCAUSAL_GENEALOGY>

---

## <RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock.

*Re-seating note:* there is no human psychology in this corpus. The only "mind" the text models is the **adversary/scheduler**, whose inferential capacity is explicitly parameterized. I analyze that mind, its regression under stress, the traps it can be baited into, and the clock it can or cannot read.

**The adversary's theory of mind is a graded hierarchy.** [PAGE 271]–[PAGE 273] ranks it:
1. *Adaptive (strong)*: *"This adversary is a function from the state of the system to the set of processes; it can see everything that has happened so far (including coin-flips internal to processes that have not yet been revealed to anybody else), but can't predict the future. It's known that an adaptive adversary can force any randomized consensus protocol to take Θ(n2) total steps [AC08]."*
2. *Weak/intermediate*: content-oblivious, value-oblivious, location-oblivious variants, modeled *"by imposing an equivalence relation on partial executions."*
3. *Oblivious*: *"has no ability to observe the system at all."*

The gap between (1) and (3) is enormous: $\Theta(n^2)$ total steps versus $O(\log\log n)$ individual work ([PAGE 283], Algorithm 24.7). **Recursive** in the precise sense that the algorithm's *own* randomization is what the adversary is or is not permitted to observe — the protocol reasons about the adversary's reasoning about the protocol's coins.

**Crisis habit regression.** Under adversarial pressure, protocols regress to their cheapest invariant. Three documented regressions:
- **Randomized consensus regresses to a shared coin.** [PAGE 275]–[PAGE 277]: from Bracha–Rachman's $O(n^2\log n)$ vote-summing, whose correctness rests on *"the difference between what each process sees and the actual sum of all votes ever generated is at most O(n) with high probability"*, down to Attiya–Censor's $\Theta(n^2)$-optimal protocol. The regression is forced; the round structure cannot be abandoned.
- **Mutual exclusion regresses to busy-wait.** [PAGE 165]: *"It's not hard to see that we can't build a shared-memory mutex without busy-waiting: any process that is waiting can't detect that the critical section is safe to enter without reading a register, but if that register tells it that it should keep waiting, it is back where it started and has to read it again."* This is why RMR complexity exists as a measure at all.
- **Obstruction-freedom regresses to lock-free-style panic mode.** [PAGE 287]–[PAGE 289]: a fast path of $B$ steps, then a timestamp tournament, then a liveness-detector that *"starts with a small guess for R; if a process is suspected but then wakes up again, we increment the guess."*

**The counter-trap.** Baiting the adversary is an explicit design technique, not an accident. The cleanest instance is the *splitter* ([PAGE 191]–[PAGE 193], Lemma 18.5.4): *"If a process runs Algorithm 18.6 by itself starting from a configuration in which door = open, it returns stop."* The adversary's habit — run everyone in lockstep — is precisely what makes the splitter useless; the fast path requires *solo* arrival. Symmetrically, the beeping lower bound ([PAGE 393]) traps the *algorithm* rather than the adversary: *"if a process doesn't know the size of the graph, then it has to decide whether to beep or not within a constant number of rounds"*, and the adversary wakes nodes at intervals calibrated to $\Theta(k^2\log n)=n$.

**The clock.** Who can read a clock is the single most load-bearing assumption in the book.
- **No clock available:** asynchronous model; FLP bites.
- **A clock that can be *simulated*:** LCR's $n$-round termination ([PAGE 65]), Lamport clocks ([PAGE 79]–[PAGE 81]) whose ordering is *"a refinement of the causal ordering"*, vector clocks ([PAGE 81]) giving exact iff.
- **A clock that must be *trusted*:** failure detectors ([PAGE 133]–[PAGE 143]) — the $\Omega$ detector ([PAGE 131]) is *"the weakest possible failure detector that can be used to solve consensus"*, and the terminating reliable broadcast problem is the one natural task that needs $\mathcal{P}$ rather than $\mathcal{S}$ ([PAGE 143]).
- **A clock that is *assumed*:** Bitcoin's round structure, [PAGE 159]–[PAGE 161], where $D$ is *"a difficulty parameter that can be tuned to adjust the likelihood of finding a solution within the time bounds associated with the round"* — a clock smuggled in as a difficulty retarget.

**The recursion closes.** The adviser's advice to build a synchronizer ([PAGE 56]) is the same advice as building a failure detector: both fabricate the clock. Both fail, for the same FLP reason, and the book says so twice ([PAGE 89], [PAGE 131]).
</RECURSIVE_THEORY_OF_MIND>

---

## <CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.

*Re-seating note:* **no physical, biomechanical, or meteorological veto exists in this corpus.** There is no weather variable, no athlete, no field, no clock in seconds, no venue. I therefore cannot produce a physical veto proof, and I will not synthesize one; a fabricated veto would violate the no-toy-equation invariant at its root. What I *can* produce — and what is the genuine structural analogue — is a **model-layer veto proof**: a demonstration that a *claimed capability* is vetoed by a lower-layer constraint that no amount of upper-layer engineering can buy out. Four such vetoes are proved in the source.

**Veto 1 — the synchronizer veto (physical analogue: light-speed causal cone).** Layer separation: synchronous protocol (upper) ↔ synchronizer (middle) ↔ asynchronous network (lower). [PAGE 89]: *"In the α synchronizer, the system slowly shuts down as a wave of waiting propagates out from the dead process. In the β synchronizer, the root never gives the green light for the next round. The γ synchronizer, true to its hybrid nature, fails in a way that is a hybrid of these two disasters."* Proof obligation discharged: fault-tolerant synchronizer + synchronous agreement ⇒ asynchronous agreement with one crash ⇒ contradicts FLP. **Veto is total and unconditional.** Note there is also a *quantitative* veto, not just a possibility veto — [PAGE 91] constructs a causal shuffle that compresses any execution with $s$ sessions into one with $s-1$ sessions at the same $(s-1)D$ time, forcing a $\Omega(D)$ global synchronization latency. Two independent vetoes at two different layers.

**Veto 2 — the process-count veto.** Layer: Byzantine protocols (upper) ↔ identity partition (lower). At $n=3f$ the adversary controls an exact third and can simulate. [PAGE 107]–[PAGE 109]: group into three size-$f$ cohorts, let $\text{Byzantine } \check C$ *"simulate C0, D1, B1, A1, and C1, good processes A0, B0 and D0 must all decide 0 or risk violating validity."* The veto is *sharp*: at $3f+1$ it lifts. Compare phase king at $4f+1$ ([PAGE 113]) — the veto is not merely a count, it is a count *given the message-size regime*.

**Veto 3 — the fairness veto.** Layer: liveness (upper) ↔ admissible schedule (lower). [PAGE 39]'s fairness clauses are the *only* thing preventing the adversary from stalling forever. Remove clause (b) ("every message is eventually delivered") and every liveness proof in the book fails simultaneously. This is the strongest veto in the corpus and the least discussed.

**Veto 4 — the primitive-stratum veto.** Layer: algorithm (upper) ↔ object consensus number (lower). [PAGE 207] Table 19.1 plus [PAGE 203]'s non-robustness family $\{O_{m,k}\}$. The veto is *multiply indexed*: capability is vetoed not by a scalar but by a *pair* $(m,k)$, so "upgrade the hardware" is not a well-defined remedy. [PAGE 209]: *"no collection of RMW registers with interfering operations can solve 3-process consensus."*

**Adjudication.** All four vetoes are **proof-level, not empirical-level**: each is a theorem under stated assumptions, with an exact breakdown surface. None is probabilistic except Veto 4's Bitcoin analogue ([PAGE 161]), which *is* probabilistic and *is* therefore the only one where "the veto might not fire" is a coherent statement — and even there the failure probability is $e^{-\Theta(k)}$, not a soft edge.

**Explicit non-transfer declaration.** Any downstream inference of the form "this predicts a physical, biomechanical, or weather outcome" is **not supported by this drive** and must be marked unsupported at the point of use. The drive supplies no coordinate, no timestamp in seconds, and no measured quantity.
</CROSS_LAYER_VETO_ADJUDICATION>

---

## <RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios + predictions.

Each scenario is stated as a *checkable* claim with an exact falsifier, a page anchor, and a predicted observation. "Veto" here means: if the counterfactual held, the corresponding theorem would be false, and we can *detect* which one breaks.

**RLVR-1 — Byzantine process-count veto.**
*Counterfactual:* an EIG-style protocol with $n=3f$ and $f\ge 1$ satisfying validity + agreement in $f+1$ rounds.
*Source anchor:* [PAGE 113] *"provided n ≥ 3f + 1"*; [PAGE 107] the $n=3f \to n=3,f=1$ reduction.
*Predicted result:* No such protocol exists in this drive. **Prediction of failure mode:** any proposed construction must either (a) rely on authentication with unforgeable signatures — which changes the model, cf. [PAGE 101] Dolev–Strong — or (b) collapse at the specific step where the Byzantine node splits $A$ and $C$ by telling each that the other is faulty. **Verification test:** instantiate at $n=3,f=1$, run the indistinguishability chain from [PAGE 95], and locate the adjacent pair of executions differing in one delivered message. If the chain terminates before violating either agreement or validity, the counterfactual survives and Theorem 10.2.4 as stated is falsified.

**RLVR-2 — Asynchronous deterministic agreement veto.**
*Counterfactual:* a deterministic protocol solving binary agreement in an asynchronous message-passing system with $f=1$ crash failure, under [PAGE 39]'s admissibility.
*Source anchor:* [PAGE 117]; bivalence definition [PAGE 119]: *"a configuration C is bivalent if there exist traces T0 and T1 starting from C that lead to configurations CT0 and CT1 where all processes decide 0 and 1 respectively."*; commuting-step case analysis [PAGE 121].
*Predicted result:* No such protocol. **Prediction of failure mode:** the protocol must contain a reachable bivalent configuration $C$ with two pending steps $e, e'$ such that $Ce e'$ is 0-valent and $Ce'e$ is 1-valent; by [PAGE 121] case 1 (different processes, commutation) or case 2 (same process, hiding by delaying its messages) this is contradictory. **Verification test:** search for the critical pair by exhaustive state enumeration for $n=2$; the veto predicts a *nonempty* bivalent frontier surviving the adversary's "choose the oldest enabled action" strategy at every step. Observe whether *any* deterministic protocol terminates in every fair execution with a common output — the veto predicts at least one fair execution that never decides.

**RLVR-3 — Randomized-for-free veto.**
*Counterfactual:* randomization achieves $O(1)$ *expected total* step consensus against an **adaptive** adversary.
*Source anchor:* [PAGE 271] *"an adaptive adversary can force any randomized consensus protocol to take Θ(n2) total steps [AC08]"*; contrast [PAGE 283] $O(\log\log n)$ *individual* work against an **oblivious** adversary.
*Predicted result:* The counterfactual is false **as stated**, and — critically — the two quantifiers must not be swapped. **Prediction of failure mode:** a proposed $O(1)$ protocol will be found to require the adversary to be unable to see unrevealed coin flips, i.e. it will silently be a weak/oblivious-adversary protocol. **Verification test:** implement the protocol and adversarially schedule by *full system state including unrevealed coins*; measure total steps. The veto predicts $\Omega(n^2)$ growth. **Secondary prediction:** the same protocol will show $O(\log\log n)$ or better against an oblivious scheduler — so the discriminating experiment is a single adversarial-scheduler swap, not a new algorithm.

**Cross-cutting RLVR prediction.** All three vetoes predict that attempted counterexamples will fail *not at the algorithm's logic* but at exactly one of: the model's failure bound, the model's fairness clause, or the adversary's observation set. That is a **falsifiable meta-prediction**: in every candidate counterexample traced to this corpus, the defect should localize to one of those three slots, and never to arithmetic. Note that this meta-prediction is itself vulnerable to the arithmetic defect logged at [PAGE 401] — but that defect affects $O(n^2)$ vs $(n-1)^2$, an asymptotic no-op, so the meta-prediction survives.

---

## Drive-level audit summary

| Item | Status |
|---|---|
| Betting lines / odds / spreads / totals | None present; none derivable |
| SI-unit equations | None. All units are combinatorial counts (messages, rounds, steps, RMRs, registers, bits) or probabilities |
| Physical / biomechanical / weather layer | **Absent from source.** Not synthesized; explicitly declined in `CROSS_LAYER_VETO_ADJUDICATION` |
| Source defects | (A) arithmetic slip at [PAGE 401]: $n(n-1)(1-1/n)$ printed as $n^2$, correct value $(n-1)^2$ — asymptotically harmless. (B) redaction artifacts: `[PHONE]`/`[EMAIL]` at [PAGE 25], [PAGE 27], [PAGE 367]; OCR corruption *"p1 . . . p2"* at [PAGE 37]. The [PAGE 367] ring counterexample is **unreconstructable** from this drive |
| Coverage | 60 of 587 pages sampled; my citations are confined to well below the 8000-character excerpt cap per page and are direct quotes |
| Confidence on theorem statements | High — quoted verbatim with page anchors |
| Confidence on any claim that this corpus predicts a real-world physical outcome | **Zero.** Declined. |