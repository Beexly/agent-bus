---
source: "WHITEPAPER_DITO_Quantum_computing_guide_navigating_future_2024.pdf"
folder: "/CorpusRoot"
pages: 105
model: deepseek/deepseek-v4.1-flash-1017
words: 8835
---

<NATIVE_REASONING>
The user has provided a source document (a 105-page VTT guidebook on quantum computing) and wants me to produce a response in a specific XML-structured format with sections:
- <THINK_TRACE> (>=400 words)
- <SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>

Total >= 1000 words. But the DRIVE SOURCE is this quantum computing guidebook — which is not a sports betting document at all. The system prompt mentions "ZERO BETTING LINES," "crisis habit regression," "clock," "physical/biomechanical/weather veto proof," "RLVR veto scenarios" — these sound like sports-betting trap detection. Yet the actual document is a corporate foresight guide on quantum computing.

I need to reconcile: The frame is "GSE + GSI Frontier Reasoning Foundry." I should treat the document as the drive source and produce the required sections, but adapted to the actual content — a quantum computing technology-readiness analysis. The prompt's categories (retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactuals) can be meaningfully repurposed to analyze the document's claims about quantum readiness, hype cycles, time horizons, and falsifiable signposts.

I must NOT mention betting lines/odds. I should cite exact [PAGE N] markers and verbatim quotes. I need formal LaTeX equations with units and breakdown regimes.

Let me plan the analysis:

Core analytical object: The VTT guide defines "quantum readiness" as multifaceted (hardware, software/algorithms, talent, ecosystems) [PAGE 38]. It gives a 2D readiness plane: physical qubit number (x-axis, 1 to 100M) vs. two-qubit gate fidelity expressed in "nines" (5 nines = 99.999%, up to 20 nines) [PAGE 39, Figure 3]. Zones: unusable, classically simulable, "utility scale applications," "broadly useful QC." Current hardware sits at ~99.9% fidelity (3 nines) with 1,121 physical qubits (IBM Condor 2023) [PAGE 18, PAGE 19].

Key quantitative claims to formalize:
- Fidelity = 100% − error rate [PAGE 19, footnote ii]. "Currently, the fidelities of best computers hovers around 99,9%, allowing for 2,000–3,000 gate operations" [PAGE 19]. Roadmaps: 10,000 gate operations by 2027 [PAGE 19].
- Exponential speedup: T vs 2^T; T=100 gives 2^100 ≈ 1.2676×10^30 [PAGE 29].
- Polynomial speedup: T vs T^2 or T^k; 1,000 steps vs 1,000,000 [PAGE 30].
- Grover: quadratic, √N [PAGE 35].
- Energy claim: 10 MW supercomputer vs 10 kW quantum = 3 orders of magnitude; "However, these claims have been challenged and remain speculative" [PAGE 31-32].
- RSA-2048 breaking: "millions or even tens of millions of physical qubits," expert range 5–40 years; migration 3–12 years [PAGE 77].
- Global computing energy doubles every 3.4 months [PAGE 31].
- 90%+ drug candidate failure [PAGE 61, PAGE 65]; 10-12 years per molecule [PAGE 65].

I can derive:
- Logical error rate per gate: ε_L, and the sequential depth before failure: N_max ≈ 1/ε (order of magnitude). With ε = 10^-3, N ≈ 10^3; matches "2,000–3,000 gate operations" [PAGE 19].
- Error-correcting threshold theorem: need physical error rate below threshold p_th; surface code overhead ~ O(d^2) physical qubits per logical qubit, with d ~ log(1/ε_L)/log(1/p/p_th). Logical error ε_L ≈ (p/p_th)^{(d+1)/2}.
- Define the readiness-plane coordinate: f = 1 − ε (dimensionless), n_q = physical qubit count. "nines" k = −log10(ε).
- Classical simulability boundary: state vector memory S = 2^{n_q} × 16 bytes for complex128 amplitude; at n_q = 50, 2^50 × 16 B = 1.8×10^16 B = 18 PB. That's the "classically simulable" boundary — beyond ~50 qubits full statevector becomes infeasible but tensor-network/stabilizer methods extend. This is my own derivation, clearly labeled.
- Utility threshold: the document gives no closed-form; I should note the singularity/breakdown regimes: (a) p ≥ p_th → error correction fails, logical qubit undefined (variance divergence); (b) n_q ≪ data size → data-loading bottleneck dominates, speedup → 0; (c) T_theory/T_practical → ∞ as overhead grows.
- The "1000x" claims: the document uses "1000x faster," "1000x less energy" [PAGE 10, 11, 12] — I should treat these as rhetorical anchors, not equations, and note the document itself does not derive them.

Breakdown regimes (singularities):
1. Fidelity threshold: as ε → p_th^-, required code distance d → ∞, so physical qubit overhead N_phys → ∞. Divergence.
2. Practical speedup S_practical = S_theory / (1 + C_overhead) where C_overhead includes state prep, readout, error correction, and hybrid round-trips; as C_overhead → ∞, S_practical → 1 (no advantage). Document: "the practical speedup is often much smaller than theoretical predictions or, for small-scale problems, non-existent" [PAGE 30].
3. Data loading: S_eff = S_alg · (T_alg / (T_load + T_alg + T_read)). If T_load > T_alg·S_alg, no advantage. Document: "delays in data loading... offset some of the computational gains" [PAGE 30, 45].

Retrocausal genealogy: history of quantum computing — Feynman 1982 (simulation), Benioff 1980, Deutsch 1985 (universal quantum computer), Shor 1994, Grover 1996, Preskill 2018 (NISQ). The document cites Preskill 2018 [PAGE 102], Nielsen & Chuang 2010 [PAGE 102], Arute et al. 2019 (quantum supremacy) [PAGE 100/96], Ewin Tang dequantization [PAGE 96 fn 12, PAGE 92]. Also IBM "quantum utility" 2023 [PAGE 31, fn 13]. I should build the genealogy with the trap that "quantum supremacy" claims get dequantized retroactively — the classical algorithm improves after the quantum claim, which retroactively annuls the "advantage." That's a genuinely retrocausal structure: the meaning of a 2019 claim is revised by 2023 classical algorithms. Also Pasqal "business utility" [PAGE 96 fn 3].

Multi-week traps: I need to interpret "multi-week traps" — in the original betting frame this would be injury news windows. Here I can map to: the lag between a press release and peer review; the lag between NIST standardization (Aug 2024) and enterprise migration (3-12 years); the "harvest now, decrypt later" window. Also the hype-cycle trap where each new qubit-count record resets the narrative for weeks.

Recursive theory of mind: "Crisis habit regression vs counter-trap vs clock." Map to: organizational behavior under hype — the "crisis habit" of buying qubit counts (regression to the misleading metric), the counter-trap of "do nothing" strategy [PAGE 84 Table 6], and the clock = the three time horizons / decision clock. Also the document's own reflexivity: it acknowledges communicators have goals [PAGE 6-7] — consultants oversell, vendors oversell, researchers are cautious. That's a theory-of-mind model of the information sources. I can formalize a simple Bayesian-ish source-reliability model: each source s has bias b_s and the reader must infer. Actually, better: model the reader's posterior over "time to practical advantage" T as a mixture over source types, and show that the mixture's mean is dragged by the loudest, highest-variance source. That's a legitimately formalizable claim.

Cross-layer veto adjudication: "Physical/biomechanical/weather veto proof." In this document's domain, the physical veto layers are:
- Thermodynamic/cryogenic: superconducting qubits require mK temperatures; dilution refrigeration capacity is a hard physical constraint on qubit count per fridge (cooling power at 20 mK ~ 10s of µW). Document: "Requires cryogenic cooling to near absolute zero" [PAGE 18].
- Decoherence/coherence time T2: gate time t_g must satisfy N_gates × t_g < T2 (roughly), so depth is bounded.
- Photon loss: "Noise from photon loss" [PAGE 18].
- Manufacturing/material defects at millions of qubits [PAGE 48].
- QRAM does not exist: "QRAM does not exist, and the quantum states collapse after measurement" [PAGE 49]. This is a veto on a whole class of algorithms that assume QRAM input.
- "Biomechanical" → map to the pharmacological/human-biology veto: 90% failure rate, 10-12 year timelines, in vitro-in vivo correlation gaps [PAGE 61, 65]. The biological substrate vetoes simulation-only claims.
- "Weather" → climate/energy: grid constraints, energy claims speculative [PAGE 31-32]; the 10 MW vs 10 kW claim challenged.

So the cross-layer veto adjudication: for each claimed advantage, identify which layer can veto it and whether the document supplies evidence of the veto being cleared. Verdict: no layer cleared; hence all "advantage" claims remain conditional.

RLVR counterfactual vetoes: 3 verifiable scenarios with predictions.
RLVR = reinforcement learning with verifiable rewards. So: design 3 checks that a grader could verify against the document and against future evidence, each of which would veto a claim.

Scenario 1: Fidelity/depth veto. Claim: "10,000 gate operations by 2027" [PAGE 19]. Verifiable test: measure two-qubit gate fidelity ε on the vendor's flagship device; compute N_max = 1/ε; if ε ≥ 10^-4 then N_max ≤ 10^4 and the claim requires ε ≤ 10^-4 sustained across the full register (not just best pair). Prediction: median across-qubit fidelity will remain below the best-pair figure, so effective depth will be ~10^3, not 10^4. Falsifiable by published calibration data.

Scenario 2: QRAM/data-loading veto. Claim: QML/database search speedups. Test: check whether the algorithm's input model assumes QRAM or qRAM-like persistent quantum state. Document says QRAM does not exist [PAGE 49]. Prediction: any claimed QML advantage that assumes QRAM is not practically realizable; end-to-end benchmark will show no advantage until a QRAM demonstrator at ≥10^3 logical addresses exists.

Scenario 3: Dequantization veto. Claim: exponential QML speedup. Test: check for a classical counterpart. Document cites Ewin Tang [PAGE 96 fn12] and "dequantisation" [PAGE 92]. Prediction: within the evaluation window, at least one new dequantized classical algorithm will match or beat the claimed quantum runtime on the same input model, converting the claim from "exponential" to "polynomial-or-none." The document states the pattern: "claims of advantage often spur developers to rethink classical algorithms... making the quantum advantage claim quickly outdated" [PAGE 31].

Could add a 4th: RSA timeline veto — but 3 required.

Now the word count: I need ≥1000 words total, with THINK_TRACE ≥400 words. I'll aim for ~2500-3200 words total to be safe. Let's be thorough but not bloated.

Citation discipline: exact [PAGE N] markers and verbatim quotes. I must be careful to quote accurately from the provided text. Let me collect accurate quotes:

- [PAGE 8]: "Currently, no quantum application has yet demonstrated to be faster than best-in-class classical methods in practical settings."
- [PAGE 8]: "Actually, increasing the number of qubits without improving the quality of qubits can lead to worse performance (more noise)."
- [PAGE 8]: "There are no currently known ways to break quantum-proof cryptography, but it's impossible to guarantee its long-term invulnerability against future advances."
- [PAGE 9]: "Short-term: Race to develop quantum computers that can solve real-life business problems." "Mid-term: Era of increasing business benefits" "Long-term: Era of broad commercial adoption"
- [PAGE 11]: "the simulation of quantum systems offers an exponential advantage over classical simulations."
- [PAGE 19]: "This is measured by fidelity, which tells the probability of whether one gate operation on a qubit will succeed without error" and "Currently, the fidelities of best computers hovers around 99,9%, allowing for 2,000–3,000 gate operations." and "According to some roadmaps, this figure could reach 10,000 gate operations by 2027."
- [PAGE 19 fn ii]: "Mathematically fidelity = 100% - error rate"
- [PAGE 19]: "When millions of sufficiently high-quality physical qubits exist, it will be possible to create hundreds or thousands of sufficiently high-quality logical qubits"
- [PAGE 20]: "logical qubits can still have some errors but are far more stable than physical qubits."
- [PAGE 26]: "in the near term, quantum computers are most effective for 'big compute' problems with small data"
- [PAGE 26]: "this 'need for structure' has essentially limited the biggest potential of quantum computing to certain specific areas of mathematics."
- [PAGE 29]: "imagine a quantum computer solving a problem in time T, while a classical computer takes time 2T"
- [PAGE 29]: "1 267 600 000 000 000 000 000 000 000 000"
- [PAGE 30]: "Practical speedup refers to actual performance improvement observed when running a quantum algorithm on a real-world quantum system."
- [PAGE 30]: "the practical speedup is often much smaller than theoretical predictions or, for small-scale problems, non-existent."
- [PAGE 31]: "claims of advantage often spur developers to rethink classical algorithms. This has led to breakthroughs in classical computing, where problems once considered extremely difficult to solve have been tackled with much faster classical solutions, making the quantum advantage claim quickly outdated."
- [PAGE 31]: "global energy consumption on computing doubles every 3.4 months"
- [PAGE 31]: "a supercomputer might require around 10 MW of power to complete a task, a quantum computer with comparable computational capacity could accomplish the same task with just 10 kW"
- [PAGE 32]: "these claims have been challenged and remain speculative."
- [PAGE 39]: "Adding more qubits can even worsen the situation by increasing noise."
- [PAGE 42]: "so far, there has not been proof that quantum computers would perform better than the best classical computers in any practical problem."
- [PAGE 48]: "the hardware in this era is generally expected to scale up to millions of physical qubits while maintaining very low error rates."
- [PAGE 49]: "QRAM does not exist, and the quantum states collapse after measurement."
- [PAGE 61]: "Reduce failure rate (>90%)" (table cell, clinical trials)
- [PAGE 65]: "Currently, it takes approximately 10-12 years to develop a single molecule into a treatment for the patients."
- [PAGE 65]: "Currently, over 90% of new drug candidates fail, often during expensive late-stage trials."
- [PAGE 77]: "Some quantum applications, such as using Shor's algorithm to break a 2048-bit RSA key, require extremely high-performance hardware. Estimates suggest this could necessitate millions or even tens of millions of physical qubits."
- [PAGE 77]: "expert opinions ranging widely—between 5 to 40 years"
- [PAGE 77]: "Transitioning to quantum-safe encryption algorithms is a complex and time-consuming process, estimated to take 3 to 12 years, depending on the industry."
- [PAGE 78]: "New methods for breaking even the most robust PQC algorithms could emerge as quantum computing evolves."
- [PAGE 81]: "For most companies, a dedicated quantum strategy is not essential at this stage."
- [PAGE 84]: "This approach works well for industries like traditional construction, where quantum computing is not expected to disrupt the market in the near or mid-term."
- [PAGE 84]: "Quantum is not for everyone. Not yet." — Aparna Prabhakar, Schneider Electric
- [PAGE 105]: "The answer is to start now."
- [PAGE 6]: "Some large management consulting firms list use cases and give the impression that quantum applications are just around the corner"
- [PAGE 7]: "No single qubit technology has emerged as the dominant design."
- [PAGE 9]: "With fast-evolving technology, we must work on shaping the future rather than forecasting."
- [PAGE 40]: "Rather than make specific predictions about when certain milestones will be reached, given the wide range of guesses in the field, we instead offer a more flexible framework"
- [PAGE 41]: "Identifying the first practical NISQ algorithms is one of the most critical challenges of our time."
- [PAGE 46]: "So far, no heuristic quantum algorithm has demonstrated a clear advantage over the best classical algorithms."
- [PAGE 34]: "it is still too early to say whether quantum annealing will achieve practical, large-scale advantages over classical methods in real-world applications."
- [PAGE 18]: "Requires cryogenic cooling to near absolute zero" / "Prone to decoherence and noise" / "Noise from photon loss"
- [PAGE 18]: "Photons: 215 modes GBS (Xanadu, 2023)"
- [PAGE 36]: "a recent claim by Chinese researchers suggested they had developed a quantum algorithm capable of breaking encryption... they had decrypted only a 50-bit encryption, a far cry from the 1024- and 2048-bit encryption widely used today."
- [PAGE 12]: "local minimums"
- [PAGE 15]: "qubits that can exist in multiple states at once"
- [PAGE 25]: superposition, entanglement, interference, unitarity, linearity, parallelism, measurement.
- [PAGE 25]: "Quantum parallelism allows a vast number of operations to be performed parallel... Classical parallelism increases proportionally with system size, while quantum parallelism increases exponentially."

Good.

Now formal equations. Let me define carefully with units.

1. Fidelity / error rate:
ε ≡ 1 − F, F ∈ [0,1] dimensionless. Document: "fidelity = 100% - error rate" [PAGE 19 fn ii].

2. Sequential depth budget. Assume independent gate errors, success probability of a depth-d circuit P_s(d) = F^d = (1−ε)^d. Define N_max(δ) = ln(1−δ)/ln(1−ε) ≈ δ/ε for ε≪1, where δ is the tolerated total failure probability. With ε = 10^-3 and δ = 1 (i.e., order-unity), N_max ≈ 10^3, consistent with the document's "2,000–3,000 gate operations" [PAGE 19]. Note: the document's figure implies δ ≈ 0.86–0.95 at ε = 10^-3, i.e., an order-of-magnitude budget, not a high-success budget. This is a real finding: the quoted 2,000–3,000 gate operations corresponds to near-certain overall failure if taken as "successful computation." Actually careful — 0.999^3000 = e^{3000·ln0.999} = e^{-3.0015} ≈ 0.0497. So only ~5% success. Hmm, that's an important quantitative catch. And 0.999^2000 = e^{-2.001} ≈ 0.135. So 5–13.5% success probability. So the document's "2,000-3,000 gate operations" is the depth at which ~90-95% of runs fail. That's a legitimate derived critique and I should present it as a derivation with the assumption stated (uniform, independent, worst-case-per-qubit ε). Good — this is exactly the kind of gray-zone audit wanted.

3. Threshold theorem / surface code overhead:
p = physical error rate per operation; p_th = threshold (~10^-2 for surface code, order of magnitude). If p < p_th, logical error rate ε_L ≈ A(p/p_th)^{(d+1)/2} for code distance d odd. Required d ≈ 2·log(ε_L^target)/log(p_th/p) − 1. Physical qubit overhead N_phys ≈ c·d^2 per logical qubit (c ≈ 1–2 for planar surface code, order unity). Singularity: as p → p_th^−, d → ∞ and N_phys → ∞. Breakdown regime: p ≥ p_th, ε_L has no power-law suppression, fault tolerance undefined. Document supports: "millions of sufficiently high-quality physical qubits" → "hundreds or thousands of ... logical qubits" [PAGE 19], i.e., an overhead ratio of order 10^3–10^4, consistent with d~30 and c~1.

Let me check: if p/p_th = 0.1, and target ε_L = 10^-6, then (0.1)^{(d+1)/2} = 10^{-6} → (d+1)/2 = 6 → d = 11. d^2 = 121 physical per logical. For ε_L = 10^-15, (d+1)/2 = 15 → d=29, d^2=841. So 10^3 overhead → matches "millions → hundreds or thousands." Good, self-consistent. I'll state d=29, N_phys ≈ 841·(number of logical qubits). To get 1000 logical qubits at 10^-15: 8.4×10^5 ≈ 10^6 physical. That is exactly "millions of physical qubits → hundreds or thousands of logical." Excellent — I can show the document's statement is arithmetically coherent under surface-code assumptions. That's a strong audit finding.

4. Speedup definitions:
S(n) = T_classical(n)/T_quantum(n).
Polynomial: S = Θ(n^k) for some constant k, k ≥ 1. Grover k gives S = Θ(√N).
Exponential: S = Θ(2^{n}) or Θ(exp(c·n)).
Superpolynomial: S grows faster than any polynomial but not exponentially, e.g., exp(O(n^a)) with 0<a<1.
Document's worked example: T_q = T, T_c = 2^T; at T = 100, 2^100 = 1.2676506×10^30. Document prints "1 267 600 000 000 000 000 000 000 000 000" which is 1.2676×10^30 ✓.

5. End-to-end speedup with overheads:
S_e2e = S_alg / (1 + τ_load/τ_q + τ_read/τ_q + τ_ec/τ_q + η·τ_net/τ_q)
where all τ in seconds. As any overhead term → ∞, S_e2e → 0 relative to S_alg; advantage requires S_alg > 1 + Σ overhead ratios. This formalizes [PAGE 30] and [PAGE 45].

6. Data-loading bound: if the algorithm requires b bits of input encoded into n qubits, the encoding time is at least τ_load ≥ b/B_link (B_link in bits/s), and the state preparation depth must satisfy d_prep ≤ N_max. Veto condition: τ_load · S_alg > τ_classical → no advantage. Document: "big compute problems with small data" [PAGE 26].

7. Classical simulability boundary: full statevector requires M = 2^{n_q} · 16 bytes for complex128. At n_q = 50, M ≈ 1.8×10^16 B = 18 PB. At n_q = 40, M ≈ 17.6 TB. This defines the "classically simulable / unusable zone" boundary of Figure 3 qualitatively. I must flag this as my own order-of-magnitude derivation, not from the document.

8. Energy: E_ratio = P_super/P_q = 10 MW / 10 kW = 10^3. Document [PAGE 31]. Note it is a power ratio, not energy ratio, and assumes equal task completion — document itself says "comparable computational capacity" and then "these claims have been challenged and remain speculative" [PAGE 32]. Good audit point: the document conflates power (W) with energy (J); a fair comparison is E = P·t, and if the quantum machine takes longer, E_ratio could be < 1 or > 1. That's a genuine units critique.

9. RSA resource estimate: N_phys ~ 10^6–10^7 for 2048-bit RSA [PAGE 77]. Define required time as a random variable T_RSA with expert-elicited support [5, 40] years. Migration time T_mig ∈ [3, 12] years [PAGE 77]. Risk exposure condition: data confidentiality lifetime L (years) > T_RSA − T_mig → act now. That's the "Mosca inequality" — the document doesn't name it but the logic is exactly there. Actually Mosca's inequality is X + Y > Z. Here: if L + T_mig > T_RSA, vulnerable. I can present it as: vulnerability iff L + T_mig > T_RSA. Good — I'll note the document implies this without naming it (avoid over-claiming; but Mosca is cited in the references: "Mosca & Piani, 2023" [PAGE 96 fn 30]).

10. Bias model for information sources: Let θ be true time-to-practical-advantage. Source s reports r_s = θ + b_s + σ_s·ξ. Document asserts b_consulting < 0 (too early), b_vendor < 0, b_academic ≈ 0 or > 0 (cautious). "Some large management consulting firms... give the impression that quantum applications are just around the corner" [PAGE 6]; "researchers often take a cautious stance" [PAGE 7]. Formalize the aggregate estimate as a precision-weighted or attention-weighted mean; show that attention-weighting over-weights the loudest source and biases the estimate negative (too optimistic). This is the "recursive theory of mind" formalism.

Now let me think about the "three distinct time horizons" as a clock: [PAGE 9]. I can define a decision clock with epochs E0 (NISQ), E1 (early fault-tolerant), E2 (FTQC), E3 (routine adoption) [PAGE 41 Figure 4]. Transition events: first NISQ algorithm beating best classical on a useful task (boundary E0→E1 per some), or first provably-superior algorithm executed on FTQC (boundary per sceptics). [PAGE 41].

"Multi-week traps" — I'll define: the interval between a vendor announcement and independent replication is typically weeks-to-months; during that window, narrative momentum is maximal and evidence is minimal. The document's own counterexample: the 50-bit "encryption breaking" claim [PAGE 36]. Also "record of +1000 qubits. 24.10.2023" [PAGE 96 fn 15] — a single-day record that dominated coverage for weeks while the fidelity axis went unmentioned. Good.

Now let me write. I should be careful with the XML tags — exactly as specified. And I must produce ≥1000 words. Let me write substantively.

I'll structure:

<THINK_TRACE> — 500-600 words. Multi-hop derivation and gray-zone audit. Walk through: what the document claims, what it measures, what the metric misses, the two-axis readiness plane, the arithmetic check on gate depth, the threshold-theorem check on overhead, the speedup decomposition, the source-bias mixture, and the identification of the gray zone (claims that are neither confirmable nor refutable from the text).

<SOURCE_OPERATORS_AND_EQUATIONS> — formal LaTeX, units, page cites, breakdown regimes.

<RETROCAUSAL_GENEALOGY> — lineage from Feynman/Benioff/Deutsch/Shor/Grover/Preskill through Arute 2019, IBM quantum utility 2023, Ewin Tang dequantization, Pasqal business utility 2024, NIST 2024. Trap: retroactive revision of "advantage."

<RECURSIVE_THEORY_OF_MIND> — three source classes with different loss functions; organizational crisis-habit regression (buying qubit counts); counter-trap ("do nothing" strategy as a genuine optimum for some, [PAGE 84]); the clock (three horizons) as the disciplining device.

<CROSS_LAYER_VETO_ADJUDICATION> — layer-by-layer: cryogenic/thermal, coherence/gate-time, photonic loss, manufacturing defect, QRAM absence, biological substrate (90% failure, 10-12 yr), energy/grid, geopolitical/standards. Verdict per layer: cleared / not cleared / unadjudicable.

<RLVR_COUNTERFACTUAL_VETOES> — 3 scenarios with verifiable reward signals and predictions.

Let me be careful not to mention betting. The words "spread," "total," "moneyline," "odds" must not appear. I'll avoid "odds" — use "probability." Avoid "line." Hmm "line" appears in "timeline" — I'll avoid standalone "line." Also "spread" — avoid. Use "dissemination" if needed.

Also "physical/biomechanical/weather veto proof" — I'll interpret "biomechanical" as biological/biophysical substrate and "weather" as climate/energy-environmental layer, and say so explicitly so the mapping is transparent rather than forced.

Let me now draft.

Word count target: I'll write generously.

Draft:

<THINK_TRACE>
...

Let me write it out.

For the gate-depth arithmetic, present:
P_success(d) = (1−ε)^d. ε = 10^-3 → d = 2000: 0.999^2000 = exp(2000 × ln 0.999) = exp(−2.0010) = 0.1352. d = 3000: exp(−3.0015) = 0.0497. So 5.0%–13.5%. Correct.

For threshold: p/p_th = 0.1, ε_L = 10^-15 → (d+1)/2 · log10(0.1) = −15 → (d+1)/2 = 15 → d = 29. d² = 841. For 10^3 logical qubits: 8.41×10^5 physical. Document says "millions... → hundreds or thousands of logical qubits" [PAGE 19]. Consistent within a factor of ~1.2–12. Good.

RSA: 2048-bit → ~4096-bit modulus arithmetic; document says 10^6–10^7 physical qubits [PAGE 77]. At 841:1 overhead at ε_L=10^-15, 10^7 physical → ~1.2×10^4 logical. Shor on 2048-bit needs ~2n+3 ≈ 4099 logical qubits (rough, ignoring routing). So 10^7 physical is generous by ~2.4x at that distance, i.e., consistent order of magnitude. I'll note this as a check that the document's estimate is arithmetically defensible under surface-code assumptions. Actually I should be careful about asserting exact logical qubit counts for Shor — it's widely cited as ~2n+3 logical qubits for the circuit but with error correction the space-time volume is large. I'll present it as an order-of-magnitude cross-check with the assumption stated.

Let me also address the "1000x" rhetorical numbers on [PAGE 10-12]: "1000x faster," "1000x less energy." The document never derives them; they're framing devices. I'll say so and note that the only worked numeric example in the book is the 2^T example [PAGE 29].

Also note [PAGE 8] table: "Speed is the only benefit" — reality includes accuracy and energy. And "Quantum computers solve problems exponentially faster" — reality: "Speedup varies based on the type of problem; improvements can be exponential in certain cases."

Alright. Also the gray zone: the document never defines "quantum advantage" operationally beyond "solves a problem faster than the best-in-class classical solution" [PAGE 29] — and simultaneously admits classical algorithms are a moving target [PAGE 31]. That makes "advantage" a moving-frame quantity, i.e., not an invariant. This is a real, deep critique: the predicate "advantage" has no fixed reference class because the classical baseline is time-indexed. Formalize: A(t) = 1[T_q(t) < min_{c ∈ C(t)} T_c(t)] where C(t) is the set of classical algorithms known at time t, and C(t) is expanding. So A(t) can flip from 1 to 0 without any change in the quantum system. That's the retrocausal structure too. Good — this links THINK_TRACE to RETROCAUSAL_GENEALOGY.

Great. Write it.

I'll aim for precision and avoid filler.

Let me write the final answer now.

One more: units. I'll state dimensionless for fidelity, seconds for time, joules/watts for energy, qubits (count) for n_q, bytes for memory.

Also the breakdown regimes must be "exact singularity/breakdown regimes." I'll give:
- R1: p ≥ p_th → ε_L undefined/supercritical, d → ∞ as p → p_th^−.
- R2: ε → 1 → N_max = ln(1−δ)/ln(1−ε) → 0.
- R3: τ_overhead → ∞ → S_e2e → 1 (definitional: S_e2e − 1 → 0).
- R4: n_q < log2(bits of input) → data cannot be encoded; algorithm undefined.
- R5: T2/t_g → N_max^coh; when d > N_max^coh the circuit cannot complete → logical qubit never measured.
- R6: T_load·S_alg ≥ T_classical → advantage ≤ 1.
- R7: p → 0 and n_q → ∞ but c·d²·n_L > N_phys^available → no logical qubits; system remains "unusable zone" [PAGE 39].

Good.

Write now. Keep it under control in length but rich.
</NATIVE_REASONING>

<THINK_TRACE>
The drive source is a 105-page corporate-foresight guidebook, not a physics monograph, and that distinction governs the entire audit. The document's own methodological admission is the first thing a multi-hop derivation must absorb: the authors state they deliberately avoid deep physics, that "we do not answer the question 'WHEN', this book helps you define 'HOW' you should prepare" [PAGE 6], and that they "instead offer a more flexible framework to understand the development phases ahead" rather than predictions [PAGE 40]. So the object under analysis is a *readiness ontology*, not a performance claim. Every quantitative assertion in the book must therefore be read as a coordinate on that ontology rather than as a measured result.

Hop one: what is the primary metric? The book spends Chapter 2 dismantling the qubit count as a proxy. "By 2024, a shift in narrative appears to be underway," and "the era of merely adding qubits has reached its limit" [PAGE 19]; the myth table is blunt — "Actually, increasing the number of qubits without improving the quality of qubits can lead to worse performance (more noise)" [PAGE 8]. The replacement coordinate is fidelity, defined in footnote as "fidelity = 100% - error rate" [PAGE 19]. Hop two: Figure 3 [PAGE 39] plots physical qubit number on a logarithmic x-axis (1 to 100 M) against fidelity expressed in "nines" (5 nines = 99,999%, ascending to 20 nines), with four labelled regions: "Unusable zone," "Classically simulable," "Utility scales applications," "Broadly useful QC." That is a two-dimensional phase space, and the book's entire readiness argument collapses into a claim about which quadrant current hardware occupies and which direction the trajectory points.

Hop three: the arithmetic check. The book asserts best fidelities "hovers around 99,9%, allowing for 2,000–3,000 gate operations" [PAGE 19]. Under the standard independent-error model, the probability that a depth-d circuit completes without error is P_s(d) = (1−ε)^d. Setting ε = 10⁻³, d = 2000 yields exp(−2.001) ≈ 0.135; d = 3000 yields exp(−3.002) ≈ 0.050. So the book's cited depth corresponds to a *5–14% success probability per shot*, not a reliable computation. This is not a refutation of the book — it is a unit-of-meaning correction: "allowing for 2,000–3,000 gate operations" is a statement about the depth at which signal is still extractable with repetition, not about algorithmically useful depth. The gray-zone finding is that the guidebook never disambiguates these two senses, and a non-specialist reader will over-read the number by roughly one order of magnitude in effective reliability.

Hop four: the fault-tolerance overhead check. The book claims "When millions of sufficiently high-quality physical qubits exist, it will be possible to create hundreds or thousands of sufficiently high-quality logical qubits" [PAGE 19]. Under surface-code assumptions with physical error rate p at one-tenth of threshold and target logical error ε_L = 10⁻¹⁵, the required distance satisfies (d+1)/2 = ln(ε_L)/ln(p/p_th) = 15, giving d = 29 and roughly d² ≈ 841 physical qubits per logical qubit. One thousand logical qubits then demand ≈ 8.4 × 10⁵ physical qubits. The book's ratio of "millions → hundreds or thousands" is therefore arithmetically coherent to within a factor of a few. This is a genuine credibility marker: the guidebook's qualitative overhead claim survives a quantitative stress test it never performed.

Hop five: the speedup decomposition. The book distinguishes "Theoretical speedup" from "Practical speedup," warning that "the practical speedup is often much smaller than theoretical predictions or, for small-scale problems, non-existent" [PAGE 30], and identifies the mechanisms — data loading, "the time needed to encode input data into a quantum state," and "the increased running time introduced by using error correction techniques" [PAGE 30]. Chapter 4 adds "communication bottlenecks" where "this back-and-forth exchange offsets some of the computational gains offered by quantum speedups" [PAGE 45]. Formally this is a multiplicative discount on the algorithmic speedup, and the gray zone is that the book never assigns magnitudes to the discount terms. Its only worked numeric example is the exponential illustration T vs 2^T at T = 100 [PAGE 29]; the "1000x faster" and "1000x less energy" figures on [PAGE 10]–[PAGE 12] are rhetorical framings with no derivation anywhere in 105 pages.

Hop six: the moving-baseline problem. "Claims of advantage often spur developers to rethink classical algorithms," producing classical breakthroughs that leave "the quantum advantage claim quickly outdated" [PAGE 31]. This makes "advantage" a time-indexed predicate against an expanding comparison set, not an invariant property of a device. That is the deepest structural finding and it propagates into both the retrocausal and the counterfactual sections below.

Hop seven: source calibration. The book explicitly models its informants as agents with divergent objectives — consultants who "give the impression that quantum applications are just around the corner" [PAGE 6], vendors who "publish ambitious technology roadmaps," and researchers who "often take a cautious stance" [PAGE 7]. The authors are therefore handing the reader a bias-correction instruction without ever formalizing it.

The gray zone, finally, is the set of propositions the document asserts but cannot adjudicate from within: whether any NISQ-era advantage exists ("So far, no heuristic quantum algorithm has demonstrated a clear advantage over the best classical algorithms" [PAGE 46]), whether quantum annealing is a "low-hanging fruit" (the book answers "it is still too early to say" [PAGE 34]), and whether energy savings are real ("these claims have been challenged and remain speculative" [PAGE 32]). Three explicit non-answers in a document whose closing line is "The answer is to start now" [PAGE 105]. The asymmetry between the epistemic caution of the body and the decisional confidence of the conclusion is the primary internal tension a rigorous audit must surface.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**E1 — Fidelity / error-rate duality.** Dimensionless, F ∈ [0,1].
$$\varepsilon \equiv 1 - F, \qquad F = 1 - \varepsilon$$
Verbatim: "Mathematically fidelity = 100% - error rate" [PAGE 19, footnote ii]. Units: dimensionless probability.

**E2 — Sequential depth budget.** Assume uniform, independent, per-gate error ε.
$$P_{s}(d) = (1-\varepsilon)^{d} = \exp\!\big[d\ln(1-\varepsilon)\big], \qquad N_{\max}(\delta) = \frac{\ln(1-\delta)}{\ln(1-\varepsilon)}$$
where δ is total tolerated failure probability (dimensionless) and d is circuit depth in gate-count units. For ε = 10⁻³ the document's own figure of "2,000–3,000 gate operations" [PAGE 19] inverts to δ ∈ [0.865, 0.950].
*Breakdown regime R1:* ε → 1 ⇒ N_max → 0. *R2:* ε ≥ 10⁻² with no error correction ⇒ N_max < 10², below the depth of any non-trivial algorithm.

**E3 — Threshold theorem and code-distance divergence.** Let p be physical error rate per operation, p_th the code threshold (order 10⁻² for planar surface codes).
$$\varepsilon_{L} \approx A\left(\frac{p}{p_{th}}\right)^{(d+1)/2}, \qquad d \approx \frac{2\ln \varepsilon_L}{\ln(p/p_{th})} - 1, \qquad N_{phys} \approx c\,d^{2}n_{L}$$
with c of order unity (dimensionless layout factor), n_L the logical qubit count.
*Exact singularity:* as p → p_th⁻, d → ∞ and N_phys → ∞. For p ≥ p_th the power-law suppression vanishes entirely; fault tolerance is undefined, not merely degraded. This is the single hard wall in the document's Figure 3 "Unusable zone" boundary [PAGE 39]. Cross-check: p/p_th = 0.1, ε_L = 10⁻¹⁵ ⇒ d = 29, N_phys ≈ 841·n_L, consistent with "millions of sufficiently high-quality physical qubits" producing "hundreds or thousands" of logical qubits [PAGE 19].

**E4 — Speedup taxonomy.** n = problem size (dimensionless input parameter); T in seconds.
$$S(n) = \frac{T_{classical}(n)}{T_{quantum}(n)}$$
Polynomial: S = Θ(n^k), k ≥ 1 (Grover: S = Θ(√N) [PAGE 35]). Exponential: S = Θ(2^{cn}), c > 0. Superpolynomial: S = exp(O(n^a)), 0 < a < 1 — a class the book names but notes has "relatively few known algorithms" [PAGE 30]. Document's worked instance: T_q = T, T_c = 2^T; at T = 100, 2^100 = 1.2676 × 10³⁰, matching the printed expansion "1 267 600 000 000 000 000 000 000 000 000" [PAGE 29].

**E5 — End-to-end speedup with hybrid overheads.** All τ in seconds.
$$S_{e2e} = \frac{S_{alg}}{1 + \tau_{load}/\tau_{q} + \tau_{read}/\tau_{q} + \tau_{ec}/\tau_{q} + \eta\,\tau_{net}/\tau_{q}}$$
This formalizes "delays in data loading, such as the time needed to encode input data into a quantum state and the increased running time introduced by using error correction techniques" [PAGE 30].
*Breakdown regime R3:* any τ_overhead → ∞ ⇒ S_e2e → 1; advantage vanishes identically. Advantage requires the strict inequality S_alg > 1 + Στ_overhead/τ_q.

**E6 — Data-loading veto.** b = input bits, B_link = ingestion rate (bits·s⁻¹), d_prep = state preparation depth.
$$\tau_{load} \ge b/B_{link}, \qquad \text{no advantage if } \tau_{load}\,S_{alg} \ge T_{classical}$$
Document support: near-term machines are "most effective for 'big compute' problems with small data" [PAGE 26].
*Breakdown regime R4:* if b > 2^{n_q} the input cannot be injected into the register at all; the algorithm is not merely slow but undefined.

**E7 — Classical-simulability boundary** (auditor's derivation, not the document's). Full statevector memory for complex128 amplitudes:
$$M(n_q) = 2^{n_q} \times 16\ \text{bytes}$$
n_q = 40 ⇒ 17.6 TB; n_q = 50 ⇒ 1.81 × 10¹⁶ B ≈ 18 PB. This gives a physical reason for the left-hand "Classically simulable" boundary in Figure 3 [PAGE 39].

**E8 — Energy accounting, with unit correction.** The document's claim is a *power* ratio, not an energy ratio:
$$\frac{P_{super}}{P_{q}} = \frac{10\ \text{MW}}{10\ \text{kW}} = 10^{3}$$
Verbatim: "a supercomputer might require around 10 MW of power to complete a task, a quantum computer with comparable computational capacity could accomplish the same task with just 10 kW" [PAGE 31]. But energy is E = P·t (joules); the fair ratio is
$$\frac{E_{super}}{E_{q}} = \frac{P_{super}\,t_{super}}{P_{q}\,t_{q}}$$
If the quantum device is slower (t_q > 10³ t_super), the energy advantage inverts to a penalty. The document itself concedes the claim "remains speculative" [PAGE 32]. The "3.4 months" doubling of global computing energy [PAGE 31] is a growth-rate figure, not a per-task figure, and cannot be used as a denominator here.

**E9 — Cryptographic exposure inequality.** L = required confidentiality lifetime (years); T_mig = migration duration; T_RSA = time to a cryptographically relevant machine.
$$\text{Vulnerability} \iff L + T_{mig} > T_{RSA}$$
Document inputs: T_mig "estimated to take 3 to 12 years, depending on the industry" and T_RSA with "expert opinions ranging widely—between 5 to 40 years" [PAGE 77]. The book reasons in exactly this shape — "you must account for how long your data needs to remain confidential" [PAGE 77] — without naming the inequality (Mosca & Piani, 2023 is cited at [PAGE 96, fn. 30]).

**E10 — Moving-baseline predicate.** Let C(t) be the set of classical algorithms known at time t.
$$A(t) = \mathbb{1}\!\left[T_q(t) < \min_{c \in C(t)} T_c(t)\right], \quad \text{with } C(t) \subsetneq C(t+\Delta)$$
Because C(t) expands, A(t) can flip 1 → 0 with zero change in the quantum system. Verbatim: classical breakthroughs make "the quantum advantage claim quickly outdated" [PAGE 31]. "Advantage" is therefore not an invariant of hardware; it is a relation indexed to an evolving comparison set.

**E11 — Source-bias mixture.** r_s = reported time-to-advantage (years); b_s = directional bias; σ_s = variance; w_s = reader attention weight.
$$r_s = \theta + b_s + \sigma_s\,\xi_s, \qquad \hat\theta = \sum_s w_s r_s = \theta + \sum_s w_s b_s$$
The document's own taxonomy implies sign(b_consulting) < 0 ("give the impression that quantum applications are just around the corner" [PAGE 6]), sign(b_vendor) < 0 ("publish ambitious technology roadmaps"), sign(b_researcher) ≥ 0 ("researchers often take a cautious stance" [PAGE 7]). Because attention weights track narrative volume rather than precision, \hatθ is biased low — toward optimism — independent of θ.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage the document presupposes is standard and can be reconstructed from its reference list [PAGE 100]–[PAGE 103]: Feynman's simulation argument, Benioff's reversible-machine construction, Deutsch's universal quantum computer, Shor's factoring algorithm, Grover's unstructured search, and Preskill's 2018 framing of the NISQ era — cited explicitly as "Preskill, J. (2018). Quantum computing in the NISQ era and beyond" [PAGE 102], with Nielsen & Chuang's canonical text alongside it.

The retrocausal structure begins at the moment "advantage" enters the vocabulary. The document records three successive renamings, each of which retroactively rewrote the meaning of the previous one. Footnote iv: "Also concepts of quantum supremacy and quantum utility are used with slightly different emphasis" [PAGE 29]. Endnote 3 lists the lineage of coinages: "IBM's quantum utility (IBM Quantum Research Blog, 2023), Pasqal's business utility (Pasqal Blog, 2024), and Google's quantum supremacy (Arute et al., 2019)" [PAGE 96]. Each term was introduced when the prior term's burden of proof became unmet. The document states the IBM case plainly: the claim "does not, however, mean that there would be speedup over all known classical methods" [PAGE 31]. So a 2019 announcement, once read as a threshold crossing, is re-read in 2023 as a weaker class of achievement — the historical claim is not falsified, it is *re-described*, and the re-description is authored by the same class of actor that made the original claim.

The sharpest retrocausal mechanism the book documents is dequantisation. Endnote 12: "Ewin Tang, a computer scientist and PhD student, developed a classical alternative to a QML algorithm that was believed to offer exponential speedup, proving it could be done with classical methods" [PAGE 96]. Chapter 9 generalizes it: "The concept of 'dequantisation' is important... to identify conditions under which quantum algorithms offer genuine speedups over classical approaches" [PAGE 92]. The epistemic consequence is asymmetric and irreversible: an exponential claim is a universal negative over classical algorithms, and a single counterexample destroys it, whereas its absence at time t proves nothing. Quantum claims are therefore permanently hostage to future classical work — the direction of revision runs backward through the record.

The multi-week trap is the interval between announcement and replication. The document supplies a clean specimen: "a recent claim by Chinese researchers suggested they had developed a quantum algorithm capable of breaking encryption. Some media outlets sensationalised this, but the reality was far less dramatic—they had decrypted only a 50-bit encryption, a far cry from the 1024- and 2048-bit encryption widely used today" [PAGE 36]. Fifty bits versus 2048 bits is not a gap of degree; it is a gap across E9's feasibility boundary by roughly forty orders of magnitude in search space. Yet the announcement cycle and the correction cycle are asymmetric in duration — the first travels in hours, the second in months. A second specimen: endnote 15 records a single-day citation, "a record of +1000. 24.10.2023. (Wilkins, 2023)" [PAGE 96] — a qubit-count milestone that, per E1 and Figure 3, moves the system along the axis the book explicitly deems misleading while leaving the fidelity axis untouched. The trap is structural: the announcement metric and the readiness metric are orthogonal, and only one of them generates headlines.

A third trap is the standards lag. NIST "released the first three standardised algorithms for quantum-safe encryption" in 2024 [PAGE 77], yet migration is estimated at 3–12 years, and the European Union "has been slower, recently issuing a recommendation in April 2024" which is "still in the recommendation stage" [PAGE 78]. Between standardization and deployment sits a decade in which E9 holds with L large and T_mig growing.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three informant classes, three loss functions. The consultant minimizes perceived distance-to-value, because the saleable product is urgency; hence "they give the impression that quantum applications are just around the corner" [PAGE 6]. The vendor minimizes perceived technical risk, because the saleable product is a roadmap; hence "ambitious technology roadmaps to accelerate investor and adopter companies' interest" [PAGE 6]. The researcher minimizes the probability of being wrong in print, because the saleable product is reputation; hence "researchers often take a cautious stance when discussing quantum computing's progress and potential advantages" [PAGE 7]. A reader who averages these three without weighting by loss function inherits the consultant's and vendor's bias at equal weight to the researcher's, which under E11 shifts \hatθ optimistic. The recursive step is that each class knows the others exist and prices them in — vendors discount academic caution as conservatism, academics discount vendor claims as marketing — so the biases do not cancel; they entrench.

**Crisis-habit regression.** Under narrative pressure, organizations revert to the metric that is legible rather than the metric that is valid. The document identifies the legible one explicitly: "Too often, this single measurement unit (number of physical qubits) has been regarded as a measure of the readiness of quantum computers, which provides a false hope of the actual usefulness of state-of-the-art computers" [PAGE 39]. The regression signature is that the same organization that knows fidelity matters will still cite qubit counts in its board deck, because counts are comparable across vendors and fidelity figures are not (they are per-device, per-calibration-cycle, and per-qubit-pair). Regression is thus driven by commensurability, not ignorance.

**Counter-trap.** The symmetric failure is reflexive abstention. The document legitimizes it in specific cases: "This approach works well for industries like traditional construction, where quantum computing is not expected to disrupt the market in the near or mid-term" [PAGE 84], and quotes "Quantum is not for everyone. Not yet." — Aparna Prabhakar, Schneider Electric [PAGE 84]. Yet the same chapter warns that "even if your industry is not an early adopter, you should remain aware of decryption risks and potential long-term implications" [PAGE 84]. So the "Do nothing" strategy is a *bounded* optimum: it is rational on the opportunity axis and irrational on the threat axis. The counter-trap is adopting it wholesale when only half of it is licensed. The book's summary judgment — "For most companies, a dedicated quantum strategy is not essential at this stage" [PAGE 81] — sits directly against its closing "The answer is to start now" [PAGE 105]; the reconciliation is that "start now" refers to awareness and cryptographic migration, not to a hardware strategy.

**The clock.** The disciplining device is the three-horizon structure: "Short-term: Race to develop quantum computers that can solve real-life business problems. Mid-term: Era of increasing business benefits... Long-term: Era of broad commercial adoption" [PAGE 9], mapped onto the era diagram of Figure 4 — "NISQ era / Fault tolerant era," with stages "Learning and testing," "Early commercial adoption," "Broadening commercial adoption," "Routine adoption" [PAGE 41]. Crucially the document offers *two competing* boundary definitions and does not choose between them: the first boundary could be "the first NISQ algorithm that beats the best classical algorithms in a useful task," or, per sceptics, "the first algorithm, which is theoretically proven to beat the best classical algorithm, can be successfully executed on a fault-tolerant quantum computer" [PAGE 41]. Two clocks running at different rates over the same interval is not a defect of the framework; it is the framework's honest admission that the epoch boundary is contested. The correct reader behavior is to hold both clocks and act on the union of their trigger conditions, not the intersection — because the cryptographic clock in E9 is running regardless of which boundary definition eventually wins.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Each claimed advantage is adjudicated against the physical substrate that could veto it. "Cleared" means the document supplies evidence the constraint is retired; "not cleared" means the constraint stands; "unadjudicable" means the document's own text forbids a verdict.

**Layer 1 — Cryogenic/thermal (superconducting).** Constraint: "Requires cryogenic cooling to near absolute zero" [PAGE 18]. Veto mechanism: dilution-stage cooling power is finite, so qubit count per refrigerator is bounded by heat load, not by lithography. Verdict: **not cleared**. The document lists "Complex and expensive physical infrastructure" and "cryogenic cooling systems and ultra-stable environments" as persisting into the mid-term fault-tolerant era [PAGE 48], meaning the constraint is expected to survive the transition that is supposed to lift it.

**Layer 2 — Coherence time vs gate time.** Constraint: circuit duration must satisfy N_gates × t_gate < T₂. The document lists "Prone to decoherence and noise" [PAGE 18] and calls for "drastically improving coherence times (how long qubits can keep their quantum state)" [PAGE 48]. Verdict: **not cleared**; it is the binding constraint for mid-term hardware per the document's own text.
*Breakdown regime R5:* if required depth d exceeds T₂/t_gate, the logical qubit is never measured and E3 is vacuous.

**Layer 3 — Photonic loss.** "Noise from photon loss" and "Two-photon interactions (required for gates) are difficult to implement," with "Limiting scalability" [PAGE 18]. Verdict: **not cleared**. Note the modality asymmetry: photons offer "Room temperature operations" and "Minimal decoherence over long distances" but pay for it at the gate layer — the constraint migrates rather than disappears.

**Layer 4 — Manufacturing and material defect.** "Building quantum processors with millions of qubits will require highly precise manufacturing processes, and any defects in the materials or design could cause errors. Maintaining consistent quality in manufacturing at large scales will be difficult" [PAGE 48]. Verdict: **not cleared**, and it is the layer with the weakest published evidence base in the document.

**Layer 5 — Memory (QRAM).** This is the hardest veto in the book. "QRAM does not exist, and the quantum states collapse after measurement" [PAGE 49], and "Many of these algorithms assume that your input for the algorithm comes from QRAM (or similar persistent quantum state), which is currently impossible" [PAGE 49]. Verdict: **veto active**. Any claimed advantage whose input model presupposes QRAM is not merely unrealized — it is undefined at the resource level. This single sentence invalidates a large fraction of the QML literature the book surveys in Chapter 3.

**Layer 6 — Biological substrate (the biomechanical layer).** Drug discovery advantages must clear human biology, not just molecular simulation. The document's own numbers veto the strong form: "Currently, over 90% of new drug candidates fail, often during expensive late-stage trials" [PAGE 65], and "it takes approximately 10-12 years to develop a single molecule into a treatment for the patients" [PAGE 65]. The table of pharmaceutical needs lists gaps the quantum layer cannot touch — absorption, distribution, metabolism, excretion, toxicity, in vitro–in vivo correlation [PAGE 61]. Verdict: **partially cleared at the chemistry layer, not cleared at the trial layer**. The document concedes the transition "would necessitate significant investments in IT infrastructure, capabilities building, data management, and cybersecurity" [PAGE 65], i.e., the binding constraint after quantum chemistry improves is organizational, not physical.

**Layer 7 — Energy/grid (the environmental-weather layer).** E8 governs. Verdict: **unadjudicable**. The document asserts the 10 MW / 10 kW comparison and immediately withdraws it: "However, these claims have been challenged and remain speculative. Accurately predicting the future energy requirements of quantum computing is difficult, particularly because the nature of future quantum hardware is still unknown" [PAGE 32].

**Layer 8 — Geopolitical and standards.** "The first countries to achieve advanced quantum capabilities could gain a significant geopolitical advantage" and protectionist policies "could further hinder international cooperation" [PAGE 79]. Verdict: **not cleared**; this layer can veto a technically viable advantage by fragmenting the interoperability surface that PQC migration requires.

**Aggregate adjudication:** of eight layers, zero are cleared for the strong claim that quantum advantage is presently realizable; two are affirmatively vetoing (QRAM, biology at the trial layer); one is unadjudicable by the source's own admission. The document's balanced position — "so far, there has not been proof that quantum computers would perform better than the best classical computers in any practical problem" [PAGE 42] — is therefore not modesty; it is the correct output of the veto stack.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Each scenario specifies a machine-checkable reward signal, a falsification predicate, and a directional prediction. A veto fires when the reward signal returns below the stated threshold.

**Scenario 1 — Depth-budget veto (E2).** Reward signal: take the vendor's published calibration set for the flagship device; compute ε per qubit pair and the median (not the best) across pairs; evaluate N_max(δ = 0.5) = ln(0.5)/ln(1−ε_median). Veto predicate: N_max < 10⁴. *Prediction:* against the roadmap claim that fidelity "could reach 10,000 gate operations by 2027" [PAGE 19], the median-pair depth will land in the low 10³ range because best-pair and median-pair fidelity diverge by roughly an order of magnitude in error rate on current hardware. The claim is defeated not by slower improvement but by the best-vs-median gap. Verifiable from published calibration JSON without access to hardware.

**Scenario 2 — QRAM-input veto (E5, Layer 5).** Reward signal: parse the algorithm's input model; flag any dependence on persistent quantum-addressable memory or superposition loading. Veto predicate: flagged = true AND no demonstrated QRAM with ≥ 10³ addressable logical locations. *Prediction:* every QML or database-search speedup claim surveyed in Chapter 3 [PAGE 36] that shows exponential or quadratic advantage will be flagged, because the document states the assumption explicitly — "Many of these algorithms assume that your input for the algorithm comes from QRAM" [PAGE 49]. The end-to-end benchmark will show S_e2e ≤ 1 once E6's loading term is included. This veto is fully mechanical and requires only reading the input model.

**Scenario 3 — Dequantisation veto (E10).** Reward signal: within a fixed evaluation window, search for a classical algorithm matching the quantum algorithm's asymptotic runtime under the same input model. Veto predicate: counterexample found. *Prediction:* at least one new dequantized result will appear per window, on the precedent of endnote 12 [PAGE 96] and Chapter 9's explicit dequantisation program [PAGE 92], because the document itself states the causal mechanism — advantage claims "spur developers to rethink classical algorithms," producing classical solutions that leave "the quantum advantage claim quickly outdated" [PAGE 31]. The prediction is directional and falsifiable: if two consecutive windows pass with zero dequantizations across the surveyed algorithm families, the mechanism described at [PAGE 31] is not operative at the claimed rate and the book's own framing requires revision.

**Cross-scenario consequence.** All three vetoes are *retroactive* rather than prospective — they can invalidate a claim already announced, which is the correct reward shape for a domain whose announcements outrun its replications. A system that scores only forward-looking predictions will systematically over-credit this literature. The document's closing instruction, "The answer is to start now" [PAGE 105], survives all three vetoes precisely because it is not a performance claim: cryptographic migration under E9 is warranted by T_mig alone, and awareness-building is warranted by E11's bias structure. What does not survive is any reading in which starting now implies that advantage has arrived.
</RLVR_COUNTERFACTUAL_VETOES>