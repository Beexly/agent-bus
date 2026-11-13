---
source: "ReddiEtAl-2026-MachineLearningSystems-Vol2-AtScale.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-d-models"
pages: 1690
model: deepseek/deepseek-v4.1-flash-1017
words: 8420
---

<NATIVE_REASONING>
The user wants a deep, multi-section analysis of this book excerpt (Reddi et al. 2026, Machine Learning Systems, Vol 2 at Scale). The prompt has strict invariants: zero betting lines, formal LaTeX equations with units, page citations with verbatim quotes where possible, minimum 1000 words across specific XML sections.

But wait — this is a strange request. The "DRIVE SOURCE" is a textbook, not a sports event. The GSE + GSI Frontier Reasoning Foundry framing usually analyzes sports matchups. But here the source is ML systems engineering. The sections requested (retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes) are framed for competitive contests (crisis habits, traps, clock management). 

I should interpret this charitably: the user wants the analytical framework applied to the *content* of the book — treating the fleet/system behaviors as the "contest," the failure modes as "traps," etc. Or perhaps they want me to produce the analysis as if the book's scenarios are the "game." I'll adapt: treat the ML fleet's distributed training/serving as the "contest," the physical constraints and failure modes as the veto layers, the "crisis habit regression" as a system regressing to bad defaults under stress, etc. This is the only coherent reading.

Alternatively, the user may have pasted the wrong source and wants a general deep analysis. But I must follow the instructions: cite pages, use LaTeX, structure with those exact XML sections, ≥1000 words.

I should probably note upfront (briefly) the reframing: since no competitive sporting event exists in this source, I'll apply the GSE/GSI adjudication to the *fleet-as-contestant* and the *constraint stack as opponents/veto layers*, which keeps the invariants (no betting lines, formal equations, page citations).

Actually, re-reading: "DRIVE SOURCE: /GSE-GSI-Mega-Sweep-2026-11-06/books-d-models/..." — this looks like a corpus of books being swept. The prompt may be a generic template applied to whatever source is loaded. In that case, I should analyze the book content in the requested framework, mapping the "multi-week traps," "crisis habit regression," "clock," etc., onto the systems engineering content. That's the sensible interpretation.

Let me plan the sections:

1. **THINK_TRACE** (≥400 words): Multi-hop derivation and gray-zone audit. Derive from physical constraints → C3 taxonomy → Fleet Law → goodput factorization → failure MTBF math → publication. Audit gray zones: where the book itself labels numbers as "illustrative" or "assumed" (e.g., Napkin Math scenarios, synthetic loss curves, MLPerf emulated accelerators). Cite pages.

2. **SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX with units, page citations, breakdown regimes. Key equations:
   - Iron law: T = D_vol/BW + O/(R_peak·η_hw) + L_lat [PAGE 715]
   - Roofline: attainable = min(R_peak, BW·I) [PAGE 148], I_ridge = R_peak/BW = 295 FLOP/byte for H100
   - Fleet Law: T_step(N) = T_compute/N + T_comm(N) + T_sync(N) − T_overlap [PAGE 99, 120, 827]
   - Scaling efficiency: η = T_compute/(N·T_step(N)) [PAGE 442]
   - Ring AllReduce bytes: 2(N−1)/N · M, time 2(N−1)α + 2(N−1)M/(Nβ) [PAGE 365, 407]
   - α-β model T(n) = α + n/β; crossover n* = αβ [PAGE 225]
   - Young-Daly: T*_ckpt = sqrt(2·T_write·MTBF_system) [PAGE 533]
   - Reliability: R(t) = e^{−λt}; MTBF_system = MTTF/N [PAGE 505, 582]
   - Goodput: MPG = η_sched · η_runtime · η_program [PAGE 757 / 9.2]
   - KV cache: M_KV = B·S·m_token; m_token = 2·N_L·H_KV·d_head·s_elem [PAGE 799]
   - River: Little's law Q = λ_arr·T_lat [PAGE 50, 778]
   - Pipeline bubble: (N_PP −1)/(m + N_PP −1) [PAGE 463]
   - Power-of-two-choices: E[max] = Θ(log log R) [PAGE 841]
   - Bisection: fat-tree N = k³/4 hosts [PAGE 232]
   
   Units: seconds, bytes/s, FLOP/byte, dimensionless, failures/hour (FIT), etc.
   Breakdown/singularity regimes: ridge point crossings; N→∞ scaling efficiency → 0; α-dominated regime when n < n* ; MTBF collapse as N grows; checkpoint interval divergence when T_write grows; bandwidth walls.

3. **RETROCAUSAL_GENEALOGY**: Lineage — systolic arrays (Kung & Leiserson 1979, Kung 1982), TSVs (image sensors → HBM), PAM4/NRZ signaling, Young (1974)/Daly (2006) checkpointing, LogP (Culler et al. 1993), ring AllReduce (Baidu, Gibiansky 2017), ZeRO/FSDP (Rajbhandari 2020; Zhao 2023), Little's law, Shewhart SPC (1931), CAP theorem, Chinchilla (2022) correcting Kaplan (2020), Black's electromigration equation (1969), SUTVA (Rubin 1980). Multi-week traps: thermal cycling TIM pump-out; checkpoint storms shared across 10 jobs; silent data corruption that accumulates; rereading shards; elevator pitch: retraining frequency vs evaluation; network PFC storms; straggler persistence; Jevons-style efficiency paradox on accelerators.

4. **RECURSIVE_THEORY_OF_MIND**: Crisis habit regression vs counter-trap vs clock. Framing: under failure, systems regress to bad defaults — e.g., "restart from checkpoint for every failure" [PAGE 582], "every 15 minutes checkpoint" false comfort [PAGE 582], "just add bandwidth" [PAGE 260], "continuous batching solves everything" [PAGE 876], "more GPU memory = larger batch" [PAGE 876]. The counter-trap: what an adversary (or the physical world) does in response: straggler, PFC storm, membership churn, data drift. The clock: step time, or the MTBF clock, or the "efficiency frontier" time-to-result. Model the "opponent's" beliefs: a scheduler that assumes static resources [PAGE 596] vs. failure as scheduling input. Recursive: the release contract, the operator's mental model vs. deployed population [principle 20, PAGE 673, 904].

5. **CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof. Here: physical vetoes = HBM capacity wall, power/TDP (B200 1000 W, 2.25 TFLOP/s/W), rack 33.5 kW, 7 MW for 10,000 GPUs [PAGE 176], coolant leaks, bend radius of fiber, cable plant weeks to install [PAGE 183], thermal throttling as gray failure [PAGE 176]. "Biomechanical" analog = device-class constraints at edge (2–10 W, 15 Wh battery → 1.5 h) [PAGE 890], SRAM 192 KB microcontroller, thermal envelope. Weather analog = correlated failures: shared power shelf, cooling loop, rack-level blast radius [PAGE 169, 582]; power transients at MW scale [PAGE 176]. Formal adjudication: include the safety invariants: P_device ≤ P_thermal, E_update ≤ E_slack [eq 11.2, PAGE 890], M_peak ≤ allowance.

6. **RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable RLVR veto scenarios with predictions. These should be testable falsifiable claims. E.g.:
   - Scenario 1: cluster where someone doubles bandwidth and expects 2× — RLVR prediction: for 10 KB control messages (n < n*≈75 KB), improvement is ~10.5% not 2× [PAGE 260]. Testable.
   - Scenario 2: exception "just restart" — RLVR prediction: for SDC, restart reproduces error on same device → must roll back to pre-corruption checkpoint and quarantine [PAGE 519, 526]. Prediction: repeat failure rate high; measurement of success/failure.
   - Scenario 3: FSDP universally applied — RLVR prediction: if full state fits (7B under 80 GB? no, 112 GB overflows, so it's needed) — better scenario: adding GPUs beyond critical batch size lowers goodput [PAGE 645, 757]. Prediction: throughput saturates, quality-per-example falls; reject.
   - Maybe also: Young-Daly interval false comfort prediction; or pipeline bubble with N_PP=16, m=32 = 31.9% waste [PAGE 484].

I need to cite pages accurately. Let me verify the page numbers for the quotes I want:

- [PAGE 715]: iron law eq 9.5. "𝑇= 𝐷vol / BW + 𝑂/(𝑅peak ⋅𝜂hw) + 𝐿lat (9.5)"
- [PAGE 148]: "Achievable FLOP/s = min(𝑅peak, BW×𝐼) (2.1)" and ridge point 295 FLOP/byte for H100.
- [PAGE 225]: "The α-β model... crossover (𝑛∗= 𝛼𝛽) near 75 KB." Also T(n)=α+n/β.
- [PAGE 365]: ring allreduce "each GPU sends 2 (𝑁−1)/𝑁 𝑀 bytes in total, while the 2(𝑁−1) steps each pay one startup latency 𝛼."
- [PAGE 407]: "for a ring AllReduce over 𝑁ranks and an 𝑀-byte tensor, the first-order cost is 2(𝑁−1)𝛼+ 2(𝑁−1)𝑀/(𝑁𝛽)"
- [PAGE 442]: "𝜂scaling = 𝑇compute/(𝑁×𝑇step(𝑁)) = 1/(1+ 𝑁(𝑇comm(𝑁)+𝑇sync(𝑁)−𝑇overlap)/𝑇compute) (6.2)"
- [PAGE 533]: "𝑇∗ckpt = √(2⋅𝑇write ⋅MTBFsystem) (7.7)" — actually ∝ sqrt(T_write · MTBF).
- [PAGE 505]: R_single(t) = e^{−λt} (7.1); FIT = 20,000 for 50,000 h; 10,000 GPUs → 5 h.
- [PAGE 582]: sqrt formula: "√𝑇write ⋅MTBFsystem, so an hour is too long when a 24.5 s write meets a full-system MTBF of 3.87 hours, yet too short when a 5-minute write meets a GPU-only MTBF of 50 hours."
- [PAGE 484]: bubble "15/47 ≈31.9%".
- [PAGE 463]: bubble fraction (N_PP−1)/(m+N_PP−1).
- [PAGE 757]: MPG product; example MPG 0.28, cost 3.5×.
- [PAGE 701 / 736 / 757]: goodput. PAGE 736: "0.90 of its held time as retained steps, runs those steps at 0.48 of the ideal rate, and draws its nodes from a pool that holds 0.65 of its capacity in complete allocations."
- [PAGE 799]: KV cache estimator; m_token = 2×80×8×128×2 = 327,680 bytes.
- [PAGE 778]: Little's law Q = λ_arr T_lat; PAGE 50: "𝑄req = 𝜆arr ⋅𝑇lat via Little's Law".
- [PAGE 841]: power of two choices Θ(loglog R) (10.15).
- [PAGE 232]: fat-tree k³/4 = 16 GPUs, k=4; k²/2 = 2048 for radix-64.
- [PAGE 176]: 33.5 kW rack; 7 MW for 10,000 GPUs; thermal throttling gray failure.
- [PAGE 890]: Archetype C 2–10 W; 15 Wh battery → 1.5 hours.
- [PAGE 582]: "Every failure should be handled as a full restart" fallacy; "Component MTTF values predict individual failure timing" fallacy; correlation pitfall.
- [PAGE 519]: permanent/intermittent faults: "The fleet must stop trusting the component, quarantine it, and restore from a checkpoint that predates its first bad write."
- [PAGE 526]: DMR/TMR 100/200% overhead; SDC illustration.
- [PAGE 260]: "More bandwidth always means faster training" fallacy; 10 KB message 1.90 µs → 1.70 µs, 10.5%.
- [PAGE 260] also "Lossless Ethernet is as reliable as InfiniBand."
- [PAGE 876]: fallacies: continuous batching, load balancing, more GPU memory.
- [PAGE 883]: on-device learning vs inference; 4–12× footprint.
- [PAGE 967]: "Learning multiplies the footprint: 4–12×".

OK. Now the "formal" section needs LaTeX with units and singularity/breakdown regimes. I should explicitly state assumptions.

For the RLVR scenarios, "RLVR" presumably = Reinforcement Learning with Verifiable Rewards — meaning each scenario must be checkable by an automated verifier. I'll design 3 scenarios, each with: setup, decision under test, verifiable predicate, prediction, and what refutes it. Predictions must follow from the equations with page citations.

Word count: need ≥1000 words total across sections. I'll aim for ~1800-2200 words to be safe, since the THINK_TRACE alone needs ≥400.

Let me be careful about quotes — I should use verbatim quotes with [PAGE N]. I have the source text, so I can quote exactly.

Let me draft.

---

**THINK_TRACE** (≥400 words)

Start: The source is not a sporting contest; it's a 1690-page engineering volume. The "contest" is between a workload's demand and the fleet's physical capacity, adjudicated by the Fleet Law and the goodput product. Derivation chains:

Hop 1: arithmetic ceiling. Roofline [PAGE 148] gives achievable = min(R_peak, BW·I). For H100: ridge = 989 TFLOP/s ÷ 3.35 TB/s ≈ 295 FLOP/byte. Decode at ~1 FLOP/byte sits 295× below ridge — so decode is a bandwidth probe, not a compute probe. This is a physical veto that no kernel optimization can remove; only fewer bytes (quantization, GQA, batching) move it.

Hop 2: distributing decode. Fleet Law T_step(N) = T_compute/N + T_comm + T_sync − T_overlap [PAGE 827]. Sharding divides only the first term; the rest are added. So sharding helps iff ΔT_compute/N > ΔT_comm. At 175B with 350 GB gradients and 50 GB/s InfiniBand per GPU, ring AllReduce = 2(N−1)α + 2(N−1)M/(Nβ) → as N→∞ the byte term approaches 2M/β (2 GB / 50 GB/s ≈ 40 ms) and never vanishes [PAGE 379, 407]. That's the scaling wall: efficiency → 0 as denominator dominated [PAGE 442].

Hop 3: coordination adds failure. MTBF_system = MTTF/N [PAGE 582] → 10,000 GPUs at 50,000 h → 5 h [PAGE 505]. So a "step" is not the only clock; the MTBF clock runs concurrently. Young-Daly T* = sqrt(2 T_write MTBF) [PAGE 533] gives the optimal checkpoint spacing; but a fixed "every 15 minutes" policy is provably wrong at both ends [PAGE 582].

Hop 4: goodput factorizes three boundaries: scheduling × runtime × program. Running example: 0.65 × 0.90 × 0.48 = 0.28 MPG, cost 3.5× raw [PAGE 736, 757]. This is the "score" — not utilization, not MFU.

Gray-zone audit: many numbers in the text are explicitly labeled as *assumed*, *illustrative*, or *model* — I must not treat them as measurements. Examples: "The two AllReduce durations are illustrative inputs... not values derived from the link rates above" [PAGE 211]. "The curves are synthetic illustrations of each pattern, not logs from a training run" [PAGE 547]. "Accelerators are emulated with a fixed per-sample compute time" [PAGE 302]. Napkin Math 3.1's "assumed path parameters" [PAGE 225]. The $142.1M idle-capacity figure is "an equivalent-capacity comparison under the stated schedule, not an equipment loss" [PAGE 260]. The Llama 3 interruption counts are real measurements (419 over 54 days) [PAGE 512] — those are load-bearing. So the audit rule: cite measured quantities as measurements, and model outputs as conditional predictions on stated assumptions.

Second gray zone: the book repeatedly warns against transferring a benchmark. Pollux's 37–50% "belongs to that testbed and trace" [PAGE 645]. The MLPerf inference 2.7× is software-only on fixed hardware [PAGE 694]. The 44× H100→GB200 gap is not apportioned by the benchmark [PAGE 778]. So any claim I make must carry its configuration.

Third gray zone: silent data corruption. Only 6 of 419 interruptions were SDC, "and that count includes only corruption that was caught" [PAGE 512]. This is a censored observation — the denominator is unknown. The 10⁻⁶/GPU-hour illustrative rate yields ~1 event per 10 hours on 100k GPUs [PAGE 526], but that's "an illustrative generic SDC-rate assumption." So SDC is a gray-zone risk that cannot be closed by the log; it can only be bounded by verification coverage.

That's the audit. ~500 words. Good.

---

**SOURCE_OPERATORS_AND_EQUATIONS**

Present each with LaTeX, units, citation, breakdown regime. Include:

1. Roofline / ridge.
2. Iron law.
3. Fleet Law + scaling efficiency.
4. α–β and crossover.
5. Ring AllReduce cost.
6. Pipeline bubble.
7. Young-Daly.
8. Reliability / FIT / MTBF composition.
9. Goodput product.
10. KV cache + Little's law.
11. Power-of-two choices.

Also units table: s, B/s, FLOP/byte, dim'less, failures/h, FIT, bytes.

Breakdown/singularity regimes explicitly:
- I < I_ridge: bandwidth ceiling binds; I > I_ridge: compute binds. I_ridge → ∞ if BW → 0.
- n ≪ αβ: latency-dominated; n ≫ αβ: bandwidth.
- N → ∞: η_scaling → 0; ring byte term → 2M/β (finite asymptote), so time does not go to zero.
- T_write → ∞: T*_ckpt → ∞ (checkpoint interval diverges; the sqrt dampens but doesn't bound).
- MTBF_system → 0 as N → ∞: T*_ckpt → 0 (checkpoint continuously, no progress) — a genuine singularity: there is an N beyond which no checkpoint policy yields positive goodput.
- Pipeline: m → N_PP−1? bubble = (N_PP−1)/(m+N_PP−1) → 1 as m → 0.
- KV: M_KV linear in B, S; batch max = floor(free / per-request) → 0 as S → ∞.

Good.

---

**RETROCAUSAL_GENEALOGY**

Lineage items with dates/attributions and "multi-week traps."

- Systolic array: Kung & Leiserson 1979, Kung 1982 — memory-access-limited VLSI [PAGE 127 footnote 1]. Lineage → TPU, XLA.
- TSV: CMOS image sensors → HBM; ~1000× shorter path [PAGE 141 footnote 4].
- NRZ→PAM4: doubling rate at cost of 1/3 noise margin, requiring FEC which adds to α [PAGE 218]. Trap: link upgrades that add latency.
- LogP: Culler et al. 1993 [PAGE 400] — separates o from L. Trap: buying bandwidth for latency-bound phases.
- Ring AllReduce: Baidu 2017 [PAGE 428].
- ZeRO 2019/2020, FSDP 2023 [PAGE 435 footnote 3; PAGE 435].
- Young 1974 / Daly 2006 [PAGE 533 footnote 12].
- Black 1969 electromigration [PAGE 519 footnote 7].
- Shewhart 1931 SPC [PAGE 1044 footnote 10].
- Rubin 1980 SUTVA [PAGE 1023].
- Kaplan 2020 → Chinchilla correction (22 tokens/param) [PAGE 85].
- Little's law.
- CAP theorem mention [PAGE 92].

Multi-week traps: 
(a) TIM pump-out under minute-scale thermal cycling [PAGE 176] — degrades over weeks; looks like a software regression.
(b) Checkpoint storms on shared PFS: 10 concurrent jobs → 10× slower saves and burst slows others' reads [PAGE 316].
(c) Warm-cache restage: ~1 node failure/day at 256 nodes [PAGE 309]; contended restage idles whole job.
(d) Silent corruption accumulation across iterations degrading convergence without explicit failure [PAGE 519].
(e) Non-IID drift and participation bias: the model learns from admitted population, not deployed population [PAGE 673, 904] — a weeks-long skew.
(f) Retraining frequency adds to C_train; only helps if eval/release controls produce timely updates [PAGE 1086].

---

**RECURSIVE_THEORY_OF_MIND**

Structure: (i) the system's crisis habit regression; (ii) the counter-party's/ world's counter-trap; (iii) the clock.

Crisis habit regression: under stress, operators and systems revert to defaults the book explicitly names as fallacies/pitfalls:
- "Every failure should be handled as a full restart" [PAGE 582] — regresses to restart for transient, permanent, SDC, OOM alike.
- "Component MTTF values predict individual failure timing" [PAGE 582] — plans per-device replacement cadence, ignores fleet aggregation.
- "More bandwidth always means faster training" [PAGE 260].
- "Continuous batching solves the whole LLM serving problem" [PAGE 876].
- "More GPU memory always means larger batch size and higher throughput" [PAGE 876].
- "Lossless Ethernet is as reliable as InfiniBand" [PAGE 260].
- Applying FSDP without measuring [PAGE 498].
- Treating scaling efficiency as a hardware constant [PAGE 498].
- Locking checkpoint interval at "every 15 minutes to stay safe" [PAGE 582].

Counter-trap: what the environment does in response. The straggler: one device at 2× slow halves cluster throughput and wastes $1,024/h [PAGE 554]. The PFC storm: a single slow drainer propagates PAUSE across tiers until unrelated pairs stall [PAGE 246]. Membership churn: rendezvous waits for membership policy; elastic resize transitions cost [PAGE 547, 631]. The "hot expert"/popularity skew [PAGE 477, 834]. The adversary who adapts to norm/distance checks [PAGE 1156].

The clock: three concurrent clocks — step time (ms), MTBF (hours), and the release/evaluation window (weeks). A policy tuned to one clock mis-times the others. Example: a checkpoint interval tuned to step time ignores the MTBF clock; a rollout tuned to the release clock ignores the diurnal serving clock and cold start 6.7 min [PAGE 855].

Recursive layer: the operator's model of the system vs. the deployed population. Principle 20: admission is a fairness/sampling decision [PAGE 673]. The devices reporting health ≠ deployed fleet [PAGE 972]. So the theory of mind must be *two-level*: what the operator believes about the fleet, and what the fleet's admitted subpopulation actually is.

---

**CROSS_LAYER_VETO_ADJUDICATION**

Physical vetoes with proof:
- Power/thermal: B200 1000 W, 2.25 TFLOP/s/W [PAGE 134]; DGX H100 node ~8.4 kW [PAGE 183]; 4-node rack 33.5 kW [PAGE 176]; 10,000 GPUs → 7 MW before hosts/network/cooling [PAGE 176]. Veto: any plan whose power envelope exceeds facility capacity is infeasible regardless of software.
- Memory: 175B at 16 B/param = 2.8 TB training state; 14 B/param checkpoint = 2.45 TB [PAGE 106]. H100 80 GB → ≥5 devices for weights alone (350 GB FP16) [PAGE 155]. CXL 64 GB/s vs HBM 3.35 TB/s = 52× gap → capacity tier only [PAGE 197].
- Cooling/cabling: fiber bend radius 10–15× OD [PAGE 183]; cable plant weeks to install; 40+ high-speed cables per rack.
- Edge energy: 2–10 W; 15 Wh / 15 W ≈ 1 h [PAGE 890]; E_update ≤ E_slack, P ≤ P_thermal, latency deadline [eq 11.2].
- Correlated "weather": shared power shelf, ToR, cooling loop take whole rack [PAGE 169]; correlated incidents can be 10× the independent rate and take out 10 GPUs at once [PAGE 582].
- Network physics: PAM4 noise margin 1/3 → FEC → α; 16× wider HBM interface vs 64-bit DDR5 [PAGE 141]; transceiver degradation 21.8%/day at 24,576 transceivers [PAGE 246].

Adjudication rule: a claim survives only if it passes all three veto layers (energy/power, memory/bandwidth, reliability/correlation) at the stated configuration. I can state that formally as a feasibility predicate.

---

**RLVR_COUNTERFACTUAL_VETOES**

3 scenarios with verifiable predictions.

Scenario A: "Upgrade 200G→400G and expect ~2× on pipeline control messages."
Verifier: measure T(10 KB) before/after.
Prediction: 1.90 µs → 1.70 µs ≈ 10.5%, not 2×, because n=10 KB ≪ n*=αβ≈75 KB [PAGE 260, 225]. Falsified if measured ΔT ≥ 1.5×.
Also predict: gradients (350 MB shard) do improve ~2× since β doubles — so the same upgrade helps the data-parallel path and not the pipeline-coordination path. That's a nice discriminating prediction.

Scenario B: "Restart the node on any failure."
Verifier: for a suspected SDC or intermittent fault, does the same step fail again on the same device within k restarts?
Prediction: permanent datapath fault reproduces error on every retry [PAGE 519]; intermittent fault passes reboot and recurs under load [PAGE 519]. So restart-only policy yields ≥1 repeat failure for permanent faults, ~1 for intermittent, and cannot distinguish from transient. Required fix: quarantine + rollback to checkpoint predating first bad write [PAGE 519]. Verifiable by counting repeat-failure rate per device.

Scenario C: "Add GPUs to a job; throughput will rise proportionally."
Verifier: measure samples/s and quality-per-sample (statistical efficiency) as N grows.
Prediction: past critical batch size, statistical efficiency falls; Pollux-style goodput can *decrease*; also ring AllReduce's byte term saturates at 2M/β so scaling efficiency → 0 [PAGE 442, 645]. Specifically for the 175B DP example, efficiency ≈15% [PAGE 442]. Falsified if measured product N×η_program keeps rising monotonically. Also predict: at N_PP=16, m=32, bubble wastes 31.9% [PAGE 484], so adding pipeline stages without microbatch scaling can *lower* throughput.

Maybe I'll add a fourth optional but the prompt says 3.

Each scenario needs "predictions" that are checkable, ideally with a numeric threshold.

Let me also make sure to state units carefully in LaTeX: e.g. $T$ in seconds, $BW$ in bytes/s, $I$ in FLOP/byte, $\lambda$ in failures/hour, FIT = failures per $10^9$ device-hours.

I should write this out now, aiming for quality and correct citations. I'll keep the prose dense but readable.

One more thing: the invariant says "ZERO BETTING LINES" — I won't mention odds/spreads at all. Good.

Also "ZERO TOY EQUATIONS" — every equation must be from the source or a faithful restatement. I'll only use source equations.

Let me write.

For word count: THINK_TRACE ~550, SOURCE ~450, GENEALOGY ~350, ToM ~350, VETO ~300, RLVR ~350. Total ~2350. Good.

Let me double check a few quotes for verbatim accuracy:

PAGE 148: "Achievable FLOP/s = min(𝑅peak, BW×𝐼)" ✓. "For an H100 (989 TFLOP/s FP16, 3.35 TB/s HBM), the ridge point is about 295 FLOP/byte." ✓

PAGE 715: "𝑇= 𝐷vol/BW + 𝑂/(𝑅peak ⋅𝜂hw) + 𝐿lat (9.5)" ✓

PAGE 442: equation 6.2 ✓; "The 175B data-parallel example below reaches only 15 percent" ✓

PAGE 225: "This scenario places the crossover (𝑛∗= 𝛼𝛽) near 75 KB." ✓

PAGE 407: "2(𝑁−1)𝛼+ 2(𝑁−1)𝑀/(𝑁𝛽)" ✓

PAGE 365: "each GPU sends 2 (𝑁−1)/𝑁 𝑀 bytes in total, while the 2(𝑁−1) steps each pay one startup latency 𝛼." ✓

PAGE 533: "𝑇∗ckpt = √2⋅𝑇write ⋅MTBFsystem (7.7)" — written as sqrt(2·T_write·MTBF). ✓

PAGE 505: "𝑅single(𝑡) = 𝑒−𝜆𝑡 (7.1)" ✓ ; "a cluster with 10,000 GPUs accumulates 200,000,000 FITs from GPUs alone, translating to an expected GPU failure every 5 hours." ✓

PAGE 582: "√𝑇write ⋅MTBFsystem, so an hour is too long when a 24.5 s write meets a full-system MTBF of 3.87 hours, yet too short when a 5-minute write meets a GPU-only MTBF of 50 hours." ✓

PAGE 484: "𝑁PP = 16 stages with 𝑚= 32 microbatches waste 15/47 ≈31.9%" ✓

PAGE 736: "keeps 0.90 of its held time as retained steps, runs those steps at 0.48 of the ideal rate, and draws its nodes from a pool that holds 0.65 of its capacity in complete allocations." ✓

PAGE 757: "MPG of 0.28 and a cost per useful accelerator-hour equal to 3.5× the raw capacity price." ✓

PAGE 799: "𝑚token = 2×80×8×128×2 = 327,680 bytes ≈0.33 MB/token" ✓

PAGE 841: "𝔼[max bin occupancy]two choices = Θ(loglog𝑅)" ✓ and theorem.

PAGE 232: "A fat-tree built from switches with radix 𝑘supports 𝑁hosts = 𝑘3/4 hosts at three tiers." ✓

PAGE 211: "The two AllReduce durations are illustrative inputs chosen to show the effect, not values derived from the link rates above" ✓

PAGE 547: "The curves are synthetic illustrations of each pattern, not logs from a training run." ✓

PAGE 302: "Accelerators are emulated with a fixed per-sample compute time" ✓

PAGE 260: "the resulting idle-capacity estimate exceeds $142.1M. This is an equivalent-capacity comparison under the stated schedule, not an equipment loss" ✓

PAGE 260: "On 200 Gb/s InfiniBand, it takes 1.90 μs. Upgrading to 400 Gb/s reduces this to 1.70 μs, a 10.5 percent improvement despite doubling the link rate." ✓

PAGE 512: "Only 6 interruptions were attributed to silent data corruption, and that count includes only corruption that was caught." ✓ ; "419 unexpected interruptions" over "54-day period" on 16,384 H100s ✓

PAGE 526: "10−6 per GPU-hour (an illustrative generic SDC-rate assumption)" and "a 100k-GPU fleet expects one SDC event every 18,000 steps (roughly every 10 hours)" ✓

PAGE 519: "The fleet must stop trusting the component, quarantine it, and restore from a checkpoint that predates its first bad write." ✓ ; intermittent: "A node may pass a reboot test, rejoin the fleet, and fail again only when the next job drives the package into the same thermal, voltage, or communication regime." ✓

PAGE 554: "A single failing device (0.1 percent of the hardware) has reduced the throughput of the entire cluster by 50 percent. At $2/GPU-hour, this straggler wastes $1,024/hour" ✓

PAGE 246: "a 21.8 percent daily chance of at least one degraded transceiver" ✓

PAGE 176: "A four-node DGX H100 rack already draws 33.5 kW" ; "The accelerators of a 10,000-GPU cluster... alone draw 7 MW" ✓ ; "the result is a gray failure" ✓

PAGE 134: "B200 (2024) 2250 TFLOP/s (FP16) 1000 W 2.25 TFLOP/s/W 5.4×" ✓

PAGE 183: "A DGX H100 node dissipates approximately 8.4 kW" ✓ ; bend radius "10–15× the outer diameter" ✓ ; "over 40 high-speed cables" ✓

PAGE 197: "A representative CXL memory path over PCIe Gen5 x16 provides 64 GB/s, while H100 HBM provides 3.35 TB/s. That 52× gap" ✓

PAGE 890: "power budget spans roughly 2–10 W" ✓ ; "an idealized 15 Wh battery would be exhausted in about 1.5 hours" ✓

PAGE 106: "Its training state occupies 16 bytes per parameter... or 2.8 TB. A resumable checkpoint omits the gradients and needs 14 bytes per parameter, or 2.45 TB." ✓

PAGE 155: "The 175B model's weights span at least five accelerators" ✓

PAGE 645: "The Pollux evaluation reports average job completion times 37 to 50 percent lower... The number belongs to that testbed and trace." ✓

PAGE 498: "Pitfall: Applying FSDP or ZeRO without measuring efficiency trade-offs." ✓ ; "Treating scaling efficiency as a property of the hardware alone" ✓

PAGE 876: fallacies. ✓

PAGE 883: "single-machine iron-law terms, each update adds backward and optimizer work" ✓

PAGE 967: "Learning multiplies the footprint: Full-model backpropagation can require 4–12× the memory occupied by inference weights alone" ✓

PAGE 673: Principle 20 — "the admission policy that protects each device also selects the training population" ✓

PAGE 904: "the population a federated model learns from is the admitted population rather than the deployed one (principle 20)" ✓

PAGE 972: "why the devices that report health do not represent the deployed fleet" ✓

PAGE 855: "The scenario's sequential startup estimate is 6.7 minutes" ✓

PAGE 631: elastic resize granularity, 64-GPU replica. ✓

PAGE 1091: "Because standard ring AllReduce averages worker contributions with a breakdown point of zero, a single compromised node submitting an arbitrarily large gradient vector can corrupt the global step for all 1,024 GPUs." ✓

PAGE 85: Chinchilla 22 tokens per parameter. ✓ Actually "1.4T tokens for 63B parameters, or about 22 tokens per parameter" ✓

PAGE 127: Kung and Leiserson (1979) / Kung (1982) ✓

PAGE 141: TSV footnote ✓

PAGE 218: PAM4 ✓

PAGE 400: LogP Culler et al. 1993 ✓

PAGE 435: ZeRO footnote, Rasley et al. 2020; FSDP Zhao et al. 2023 ✓

PAGE 533 footnote 12: Young (1974), Daly (2006) ✓

PAGE 519 footnote 7: Black (1969) ✓

PAGE 1044: Shewhart (1931) ✓

PAGE 1023: SUTVA Rubin (1980) ✓

PAGE 316: checkpoint storm / shared PFS ✓

PAGE 309: "At a per-GPU mean time between failures of 50,000 hours, the 256-node cluster sees about 1 node failure per day" ✓

PAGE 169: failure domain hierarchy ✓

PAGE 582: correlated failures pitfall ✓

PAGE 141: HBM 1024-bit vs 64-bit, 16× ✓

PAGE 477: hot expert / capacity factor ✓

PAGE 834: "Expert parallelism trades AllToAll communication for per-GPU parameter memory." ✓

PAGE 890: eq 11.2 mention ✓

Good. Now write it.

I should include a short framing sentence at the top noting the reframing, but keep it brief — the sections carry the content.

Format: Use the exact XML tags. Keep each section self-contained. Use LaTeX inline with $...$ and display with $$...$$ (or \[ \]). I'll use $$ for display equations.

Length check — I'll write generously.
</NATIVE_REASONING>

# GSE/GSI Frontier Adjudication — Reddi et al. (2026), *Machine Learning Systems, Vol. 2: At Scale*

Framing note: this drive source is a 1,690-page systems-engineering volume, not a contest. The "matchup" adjudicated below is the one the book itself stages — a submitted workload (demand) against the fleet's physical, logical, and reliability stack (veto layers), scored by the multiplicative goodput identity rather than by utilization. The "crisis habits" are the book's own *Fallacies and Pitfalls* sections; the "clock" is the three-clock collision of step time, MTBF, and release window.

---

<THINK_TRACE>
**Multi-hop derivation.** Hop 1 is the arithmetic ceiling. The Roofline relation is stated as `Achievable FLOP/s = min(𝑅peak, BW×𝐼)` [PAGE 148], with the ridge point defined as `𝐼ridge = 𝑅peak/BW` and instantiated as "about 295 FLOP/byte" for an H100 at 989 TFLOP/s FP16 and 3.35 TB/s [PAGE 148]. Single-request decode is placed at "an arithmetic intensity of about 1 FLOP/byte, far below the H100's ridge point of 295 FLOP/byte" [PAGE 148]. This is a *physical veto*: no kernel rewrite moves a 1 FLOP/byte workload above a 295 FLOP/byte ridge; only moving fewer bytes can.

Hop 2 distributes the workload. The Fleet Law `𝑇step(𝑁) = 𝑇compute/𝑁 + 𝑇comm(𝑁) + 𝑇sync(𝑁) − 𝑇overlap` [PAGE 827] divides only the first term. The ring cost is `2(𝑁−1)𝛼 + 2(𝑁−1)𝑀/(𝑁𝛽)` [PAGE 407], which asymptotes to `2𝑀/𝛽` and therefore does not vanish. The resulting efficiency `𝜂scaling = 𝑇compute/(𝑁×𝑇step(𝑁)) = 1/(1 + 𝑁(𝑇comm+𝑇sync−𝑇overlap)/𝑇compute)` [PAGE 442] drives toward zero as 𝑁 grows — the book's explicit statement that "Eventually, the denominator is dominated by overhead, driving efficiency toward zero" [PAGE 442]. The 175B data-parallel instance reaches "only 15 percent" [PAGE 442].

Hop 3 layers coordination and failure. Failure is exponential and aggregates: `𝑅single(𝑡) = 𝑒−𝜆𝑡` [PAGE 505], and `MTBFsystem = MTTFcomponent/𝑁` [PAGE 582], so "a cluster of ten thousand GPUs loses a device every few hours" [PAGE 596], concretely "an expected GPU failure every 5 hours" [PAGE 505]. The checkpoint clock is then set by `𝑇*ckpt = √(2⋅𝑇write⋅MTBFsystem)` [PAGE 533].

Hop 4 converts all of it into one score. The running Llama 2 70B job "keeps 0.90 of its held time as retained steps, runs those steps at 0.48 of the ideal rate, and draws its nodes from a pool that holds 0.65 of its capacity in complete allocations" [PAGE 736], giving "an MPG of 0.28 and a cost per useful accelerator-hour equal to 3.5× the raw capacity price" [PAGE 757]. That product, not utilization, is the adjudication surface.

**Gray-zone audit.** First zone — *modeled vs. measured*. The source repeatedly flags its own numbers. The 1 ms / 30 ms AllReduce panels are "illustrative inputs chosen to show the effect, not values derived from the link rates above" [PAGE 211]. The four loss signatures are "synthetic illustrations of each pattern, not logs from a training run" [PAGE 547]. MLPerf Storage throughput is emulated: "Accelerators are emulated with a fixed per-sample compute time" [PAGE 302]. The $142.1M oversubscription penalty "is an equivalent-capacity comparison under the stated schedule, not an equipment loss or a universal penalty for every collective" [PAGE 260]. By contrast, the 419 interruptions over 54 days on 16,384 H100s are measured field data [PAGE 512]. Adjudication rule: measured quantities carry weight as evidence; scenario outputs are conditional predictions that must travel with their assumed inputs.

Second zone — *transfer of benchmark*. Pollux's "37 to 50 percent" is qualified: "The number belongs to that testbed and trace" [PAGE 645]. The 2.7× software-only gain is fixed-hardware, fixed-stack [PAGE 694]. The 44× H100→GB200 measured gap is explicitly "beyond peak arithmetic" and "The benchmark does not apportion the gap" [PAGE 778]. Third zone — *censored observation*. Only "6 interruptions were attributed to silent data corruption, and that count includes only corruption that was caught" [PAGE 512]; the illustrative `10−6 per GPU-hour` rate yields "one SDC event every 18,000 steps" at 100k GPUs [PAGE 526], but it is labeled "an illustrative generic SDC-rate assumption." The SDC denominator is therefore unknowable from logs; it can only be bounded by verification coverage, which is precisely why the book shifts the problem "from being a restart problem to a verification problem" [PAGE 526].
</THINK_TRACE>

---

<SOURCE_OPERATORS_AND_EQUATIONS>

**Operator 1 — Roofline / ridge.** Units: $R_{\text{peak}}$ [FLOP·s⁻¹], $BW$ [B·s⁻¹], $I$ [FLOP·B⁻¹].
$$R_{\text{attain}} = \min\!\left(R_{\text{peak}},\; BW \times I\right), \qquad I_{\text{ridge}} = \frac{R_{\text{peak}}}{BW}\ \ [\text{FLOP/byte}] \tag{2.1}$$
Assumption: one memory boundary, one precision. Breakdown: $I \ll I_{\text{ridge}}$ → bandwidth ceiling binds (decode at 1 FLOP/byte vs. ridge 295 [PAGE 148]); $I \gg I_{\text{ridge}}$ → compute binds. Singularity: $I_{\text{ridge}} \to \infty$ as $BW \to 0$; and "it varies by precision: because 𝑅peak is higher for INT8 than FP32 while BW is constant, the ridge point for INT8 is much higher" [PAGE 148].

**Operator 2 — Iron law (single device).** Units: s, B, B·s⁻¹, dimensionless, s.
$$T = \frac{D_{\text{vol}}}{BW} + \frac{O}{R_{\text{peak}}\cdot \eta_{\text{hw}}} + L_{\text{lat}} \tag{9.5}$$
with $D_{\text{vol}}$ the data volume crossing a chosen memory boundary, $O$ the operation count, $\eta_{\text{hw}}$ realized efficiency [PAGE 715]. Breakdown: the three terms are additive only with no overlap; Section A.2 supplies the overlapped form.

**Operator 3 — Fleet Law and scaling efficiency.**
$$T_{\text{step}}(N) = \frac{T_{\text{compute}}}{N} + T_{\text{comm}}(N) + T_{\text{sync}}(N) - T_{\text{overlap}} \tag{1.3/10.12}$$
$$\eta_{\text{scaling}} = \frac{T_{\text{compute}}}{N \times T_{\text{step}}(N)} = \frac{1}{1 + \dfrac{N\left(T_{\text{comm}}(N)+T_{\text{sync}}(N)-T_{\text{overlap}}\right)}{T_{\text{compute}}}} \tag{6.2}$$
Assumption: synchronous BSP with $\tau_{\text{stale}}=0$. Breakdown regime: as $N \to \infty$, $\eta_{\text{scaling}} \to 0$; "perfect linear scaling ($\eta_{\text{scaling}} = 1.0$) is a theoretical limit, not a practical target" [PAGE 442].

**Operator 4 — $\alpha$–$\beta$ point-to-point and crossover.** Units: s, s, B, B·s⁻¹.
$$T(n) = \alpha + \frac{n}{\beta}; \qquad n^{*} = \alpha\beta$$
"This scenario places the crossover ($n^{*} = \alpha\beta$) near 75 KB" [PAGE 225]. Breakdown: $n \ll n^{*}$ → latency-dominated; $n \gg n^{*}$ → bandwidth-dominated. Corollary: "On 200 Gb/s InfiniBand, it takes 1.90 μs. Upgrading to 400 Gb/s reduces this to 1.70 μs, a 10.5 percent improvement despite doubling the link rate" [PAGE 260].

**Operator 5 — Ring AllReduce.**
$$\text{bytes/rank} = 2\frac{N-1}{N}M; \qquad T \approx 2(N-1)\alpha + 2\frac{N-1}{N}\frac{M}{\beta}$$
"each GPU sends 2 (𝑁−1)/𝑁 𝑀 bytes in total, while the 2(𝑁−1) steps each pay one startup latency 𝛼" [PAGE 365]; the combined first-order form appears at [PAGE 407]. Breakdown: the byte term saturates at $2M/\beta$ — a finite asymptote, so adding ranks cannot drive communication time to zero.

**Operator 6 — Pipeline bubble.**
$$f_{\text{bubble}} = \frac{N_{\text{PP}}-1}{m + N_{\text{PP}}-1}$$
"𝑁PP = 16 stages with 𝑚 = 32 microbatches waste 15/47 ≈ 31.9% of theoretical compute capacity" [PAGE 484]. Breakdown: $m \to 0$ → $f \to 1$; every added stage raises the fraction unless $m$ scales proportionally [PAGE 463].

**Operator 7 — Young–Daly checkpoint interval.** Units: s, s, h.
$$T^{*}_{\text{ckpt}} = \sqrt{2 \cdot T_{\text{write}} \cdot \text{MTBF}_{\text{system}}} \tag{7.7}$$
Calibration example: "an hour is too long when a 24.5 s write meets a full-system MTBF of 3.87 hours, yet too short when a 5-minute write meets a GPU-only MTBF of 50 hours" [PAGE 582]. Singularity: as $\text{MTBF}_{\text{system}} \to 0$ under $N \to \infty$, $T^{*}_{\text{ckpt}} \to 0$; there exists a fleet size beyond which no interval yields positive retained progress.

**Operator 8 — Reliability composition and FIT.** Units: h, h⁻¹, failures per $10^{9}$ device-hours.
$$R_{\text{single}}(t) = e^{-\lambda t}, \qquad \mathbb{E}[t] = \frac{1}{\lambda}, \qquad \text{MTBF}_{\text{system}} = \frac{\text{MTTF}_{\text{component}}}{N}$$
"A data center GPU with a 50,000-hour mean time to failure has FIT = 20,000, corresponding to $\lambda_{\text{hour}} = 2.0\times 10^{-5}$ failures/hour" [PAGE 505]. Breakdown: the $1/N$ law assumes independence; "production failures correlate through the shared power, switches, software, and cooling" [PAGE 582], and a correlated incident "may take out 10 GPUs at once."

**Operator 9 — Goodput product.**
$$\text{MPG} = \eta_{\text{scheduling}} \times \eta_{\text{runtime}} \times \eta_{\text{program}}$$
Instantiated as $0.65 \times 0.90 \times 0.48 = 0.28$ [PAGE 736, 757]. Boundary rule: "every lost interval is charged once, at the first boundary it fails to cross" [PAGE 757].

**Operator 10 — KV cache and Little's law.**
$$m_{\text{token}} = 2\,N_{L}\,H_{\text{KV}}\,d_{\text{head}}\,s_{\text{elem}}\ [\text{bytes/token}], \qquad M_{\text{KV}} = B\,S\,m_{\text{token}}$$
$$Q_{\text{req}} = \lambda_{\text{arr}} \cdot T_{\text{lat}}$$
Worked value: "$m_{\text{token}} = 2\times 80 \times 8 \times 128 \times 2 = 327{,}680$ bytes ≈ 0.33 MB/token," giving ≈42.9 GB per 128K-context request and a max batch of 12 [PAGE 799]. Breakdown: max batch $\to 0$ as $S \to \infty$ at fixed HBM.

**Operator 11 — Power-of-two-choices.**
$$\mathbb{E}\left[\max \text{ occupancy}\right]_{2\text{ choices}} = \Theta(\log\log R) \tag{10.15}$$
"The bound shows that limited probing substantially improves maximum occupancy in this static model" — and explicitly does not establish latency optimality for changing queues or heterogeneous replicas [PAGE 841].

**Operator 12 — Fat-tree capacity.** $N_{\text{hosts}} = k^{3}/4$ at three tiers; $k^{2}/2 = 2{,}048$ host ports at radix-64 for a two-tier non-blocking fabric [PAGE 232]. Breakdown: at 4,096 GPUs "every spine port is already occupied by a leaf connection," forcing the three-tier construction [PAGE 232].
</SOURCE_OPERATORS_AND_EQUATIONS>

---

<RETROCAUSAL_GENEALOGY>

**Lineage of the compute substrate.** The systolic array is traced to Kung and Leiserson (1979) and Kung (1982), motivated by "VLSI chips whose limiting resource was memory access rather than logic," with "each operand fetched once… reused by every cell it passes" [PAGE 127]. The reuse ratio the array rewards is the same arithmetic intensity the Roofline scores two chapters later — the 1979 memory wall and the 2026 ridge point are one argument. The HBM packaging lineage runs through through-silicon vias "originally developed for CMOS image sensors in smartphone cameras," replacing "centimeters of PCB trace with tens of micrometers of vertical silicon, roughly a 1,000× shorter signal path" [PAGE 141]. Signaling lineage: NRZ → PAM4 doubles bits per symbol "without raising the symbol rate," but "adjacent PAM4 levels sit one third as far apart," forcing FEC, "which adds to the fabric's fixed 𝛼 latency" [PAGE 218] — a direct historical explanation for why link upgrades do not deliver proportional latency gains.

**Lineage of the coordination models.** LogP (Culler et al. 1993) separates network transit from processor overhead, making $o$ "the nonoverlappable cost" [PAGE 400] — the reason a bandwidth purchase cannot buy back dispatch time. Ring AllReduce is attributed to Baidu's implementation [PAGE 428]. Sharded data parallelism descends from ZeRO (Rasley et al. 2020) into FSDP (Zhao et al. 2023), with the footnote warning that "the shared partitioning principle does not imply identical implementations or communication schedules" [PAGE 435]. Checkpointing descends from Young (1974) and Daly (2006) [PAGE 533]. Electromigration from Black (1969) [PAGE 519]. SPC from Shewhart (1931), with the explicit caution that "3-sigma control limit produces a false-alarm probability of only 0.27 percent for a stable process" but "even small per-test false-alarm rates compound across many models and metrics" [PAGE 1044]. SUTVA from Rubin (1980) [PAGE 1023]. Scaling-law lineage includes the Kaplan-to-Chinchilla correction: "1.4T tokens for 63B parameters, or about 22 tokens per parameter… corrected earlier guidance that favored making models larger while training them on comparatively fewer tokens" [PAGE 85].

**Multi-week traps.** (a) *TIM pump-out.* "Training alternates compute-dense phases with communication phases, so the die heats and cools many times per minute; under that cycling, a phase-change or paste TIM can pump out… or crack" [PAGE 176] — a weeks-scale degradation that presents as a performance regression. (b) *Checkpoint storm contention.* The PFS-direct save "holds only while its assumptions do. The job has the whole 1 TB/s file system to itself; shared among the ten concurrent jobs… the same save takes ten times as long, and its burst slows the other jobs' reads" [PAGE 316]. (c) *Restage amplification.* "At a per-GPU mean time between failures of 50,000 hours, the 256-node cluster sees about 1 node failure per day, and each contended restage idles the whole synchronous job" [PAGE 309]. (d) *Silent accumulation.* "Sporadic errors of this kind can accumulate across iterations and degrade convergence without any explicit failure" [PAGE 519]. (e) *Participation skew.* "the population a federated model learns from is the admitted population rather than the deployed one (principle 20)" [PAGE 904] — a bias that only surfaces over deployment cycles, not in a single round. (f) *Retraining payoff.* "Retraining frequency adds to 𝐶train and 𝐶total; it can reduce emergency work charged to 𝐶iter only when evaluation and release controls produce timely, useful updates" [PAGE 1086].
</RETROCAUSAL_GENEALOGY>

---

<RECURSIVE_THEORY_OF_MIND>

**Crisis-habit regression.** Under incident pressure, operators and control planes revert to defaults the source names as fallacies. The canonical regression: *"Every failure should be handled as a full restart"* — but "transient stalls… can permit a bounded wait or safe retry," "permanent device loss requires replacement," "silent corruption requires a trusted recovery point, which may precede the latest checkpoint," and "persistent resource exhaustion (OOM, memory fragmentation) needs reconfiguration before restart; otherwise the job can crash again immediately" [PAGE 582]. A second regression is the fixed "every 15 minutes" checkpoint: with a 24.5 s write against a 3.87 h full-system MTBF, an hour is too long; with a 5-minute write against 50 h GPU-only MTBF, an hour is too short [PAGE 582]. A third is capacity habits — "More bandwidth always means faster training" [PAGE 260], "More GPU memory always means larger batch size and higher throughput" [PAGE 876], "Continuous batching solves the whole LLM serving problem" [PAGE 876], "Applying FSDP or ZeRO without measuring efficiency trade-offs" [PAGE 498], and "Treating scaling efficiency as a property of the hardware alone" [PAGE 498].

**Counter-trap.** The environment answers the habit. The straggler is the exact counter to "utilization is fine": "A single failing device (0.1 percent of the hardware) has reduced the throughput of the entire cluster by 50 percent. At $2/GPU-hour, this straggler wastes $1,024/hour in idle compute" [PAGE 554]. The PFC cascade is the counter to "lossless Ethernet is as reliable as InfiniBand": one slow drainer fills a ToR buffer, PAUSE propagates tier by tier, "until traffic between node pairs that never communicated with the stalled worker also stops" [PAGE 246], and at 24,576 transceivers there is "a 21.8 percent daily chance of at least one degraded transceiver" [PAGE 246]. The adversarial counter to robust aggregation: "An intentional adversary can adapt its update to the deployed norm or distance checks and repeat the attempt across steps" [PAGE 1156], because "standard ring AllReduce averages worker contributions with a breakdown point of zero" [PAGE 1091]. The routing counter to hot-key assumptions: "Popularity skew concentrates lookups on the shards that own hot keys, and under a latency SLO the slowest of those shards sets the tail of every request that touches it" [PAGE 834].

**The clock.** Three clocks run concurrently and a policy tuned to one mis-times the others. The *step clock* (milliseconds) is what a kernel or collective optimization moves. The *MTBF clock* (hours) is what checkpoint and spare-capacity policy must meet; the scheduler "uses two failure rates" — GPU-only for spares, full-system for interruptions [PAGE 596]. The *release clock* (weeks) is what canary windows and evaluation contracts govern, and a 70B replica's "sequential startup estimate is 6.7 minutes" [PAGE 855] means a burst exhausting serving headroom in seconds cannot be covered by any forecast-driven reclaim. A resize policy that ignores the transition window "thrashes" — elastic scaling moves at the granularity of a whole 64-GPU replica [PAGE 631].

**Recursive layer.** The operator's mental model and the fleet's actual composition diverge structurally: admission is a sampling decision, so the model trains on the admitted subpopulation, and "loosening admission is not a remedy, because it spends the energy, thermal, and latency budgets the policy exists to protect" [PAGE 673]. The observability trap compounds this: telemetry comes from "the devices that report health," which "do not represent the deployed fleet" [PAGE 972]. Any theory of mind about the fleet must therefore be two-level — belief about the reported population, and belief about the admitted population — and the gap between them is a measurable quantity, not an epistemic accident.
</RECURSIVE_THEORY_OF_MIND>

---

<CROSS_LAYER_VETO_ADJUDICATION>

**Tier 1 — energy and power veto.** A B200 sits at "2250 TFLOP/s (FP16)… 1000 W… 2.25 TFLOP/s/W" [PAGE 134], a "5.4×" gain over V100 in seven years, but a DGX H100 node "dissipates approximately 8.4 kW" [PAGE 183], a four-node rack "already draws 33.5 kW including its allocated cooling overhead," and "the accelerators of a 10,000-GPU cluster… alone draw 7 MW before hosts, network, and cooling are counted" [PAGE 176]. Any design whose sustained power envelope exceeds facility capacity is infeasible independent of software; the NVSwitch fabric alone "consume[s] approximately 200 W each (800 W total)," more than an entire V100 [PAGE 162].

**Tier 2 — memory and bandwidth veto.** For 175B at 16 B/parameter, training state is 2.8 TB; the resumable checkpoint at 14 B/parameter is 2.45 TB [PAGE 106]. Weights alone span "at least five accelerators" [PAGE 155]. The CXL alternative is adjudicated and rejected for the hot path: "A representative CXL memory path over PCIe Gen5 x16 provides 64 GB/s, while H100 HBM provides 3.35 TB/s. That 52× gap means weights and activations for the forward and backward passes still belong in HBM" [PAGE 197]. HBM's own advantage is a *packaging* fact — "a 1024-bit-wide interface per stack, compared to 64 bits for a DDR5 channel," a 16× widening, with transfer energy dropping "by roughly 5×, from approximately 20 pJ/bit… to about 4 pJ/bit" [PAGE 141] — and it "does not by itself imply that complete HBM load latency is only a few nanoseconds."

**Tier 3 — facility-mechanical veto.** "For installed fiber optic cable, typically 10–15× the outer diameter" minimum bend radius [PAGE 183]; "A fully populated rack contains over 40 high-speed cables"; "In large installations, the cable plant alone can take weeks to install and test, and cable routing errors are one of the most common causes of post-installation debugging delays" [PAGE 183]. Thermal throttling that "reduce[s] clocks without stopping execution… is a gray failure" [PAGE 176] — physically adjudicated but software-visible.

**Tier 4 — device-budget (edge) veto.** Archetype C's envelope is "roughly 2 W to 10 W… a few watts sustained, with brief bursts" and "an idealized 15 Wh battery would be exhausted in about 1.5 hours" at the burst ceiling [PAGE 890]. The joint predicate is $\;E_{\text{update}} \le E_{\text{slack}} \;\wedge\; P_{\text{sustained}} \le P_{\text{thermal}} \;\wedge\; T_{\text{update}} \le T_{\text{foreground deadline}}$ [PAGE 890], and the memory analogue is $M_{\text{peak}} \le$ allowance (a 50–100 MB update against a 200–300 MB background allowance is "25 percent of the allowance before the keyboard's own state is counted") [PAGE 904]. Microcontroller scale — "192 KB SRAM" on an STM32F4 with a 1,000×10 dense layer consuming "approximately 40 KB" [PAGE 897] — is a hard veto, not a tuning knob.

**Tier 5 — correlated "weather."** Failure domains nest: "A failed GPU breaks its tensor-parallel group, which usually spans its node. The node sits in a rack whose shared power shelf, top-of-rack switch, and cooling loop can take every node in it down at once" [PAGE 169]. Formally, independence is violated: if "a shared power, cooling, or software hazard adds an incident rate 10 times larger than that independent first-failure rate, the effective incident MTBF drops to about 5 hours" and "a correlated incident may take out 10 GPUs at once" [PAGE 582]. A coolant leak "threatens $1.4 million in hardware" [PAGE 183]. **Adjudication rule:** a proposal survives only if it passes Tiers 1–5 *at its stated configuration*; a claim that passes the compute roofline but fails the power envelope, the capacity envelope, or the independence assumption is vetoed regardless of its modeled speedup.
</CROSS_LAYER_VETO_ADJUDICATION>

---

<RLVR_COUNTERFACTUAL_VETOES>

**Scenario 1 — "Double the link rate from 200 Gb/s to 400 Gb/s and pipelines will train ~2× faster."**
*Verifier:* timed $T(n)$ for a 10 KB pipeline-control message and a 350 MB gradient shard, before and after the upgrade, on the same process group and topology.
*Prediction:* the control message improves **≈10.5%, not 2×** — "On 200 Gb/s InfiniBand, it takes 1.90 μs. Upgrading to 400 Gb/s reduces this to 1.70 μs, a 10.5 percent improvement despite doubling the link rate" [PAGE 260] — because 10 KB sits far below "the crossover ($n^{*}=\alpha\beta$) near 75 KB" [PAGE 225]. The *large* gradient shard, by contrast, should improve near-linearly since $\beta$ doubles and the message is bandwidth-dominated. **Discriminating prediction:** the same upgrade must produce two very different ratios on two message sizes in the same job. **Refuted if** both sizes move by the same factor, or if the 10 KB ratio exceeds ~1.15×.

**Scenario 2 — "Any node failure → restart the job on the same node."**
*Verifier:* for each failure event, count repeat failures of the identical step on the same device within $k$ restarts, and compare to the alternative path (quarantine plus rollback to a checkpoint predating the device's first bad write).
*Prediction:* a permanent datapath fault "keeps producing wrong gradients until the device is drained from the cluster… rerunning the computation on the same device reproduces the error instead of exposing it" [PAGE 519], and "The fleet must stop trusting the component, quarantine it, and restore from a checkpoint that predates its first bad write" [PAGE 519]. An intermittent fault "may pass a reboot test, rejoin the fleet, and fail again only when the next job drives the package into the same thermal, voltage, or communication regime" [PAGE 519] — so restart-only should show a nonzero repeat rate *and* should be unable to distinguish transient from intermittent from permanent. **Refuted if** restart-only yields zero repeat failures across the failure population; **confirmed** by any repeat failure on the same device at the same step under the same load.

**Scenario 3 — "Add accelerators to a training job; throughput rises proportionally."**
*Verifier:* measure (i) samples/s, (ii) scaling efficiency via $\eta_{\text{scaling}} = T_{\text{compute}}/(N\,T_{\text{step}}(N))$, and (iii) statistical efficiency (progress per example) as $N$ grows at fixed tokens per update.
*Prediction (three-part, independently checkable):* (a) the goodput product, not throughput, governs — "a larger batch can raise throughput while lowering goodput" [PAGE 645], and "Additional GPUs are valuable only when their throughput gain survives the corresponding change in statistical efficiency" [PAGE 645]; (b) the byte term of the ring schedule saturates at $2M/\beta$ rather than vanishing [PAGE 407], so $\eta_{\text{scaling}} \to 0$ and the 175B data-parallel instance "reaches only 15 percent" [PAGE 442]; (c) if the added devices are pipeline stages rather than data-parallel replicas, the bubble $\frac{N_{\text{PP}}-1}{m+N_{\text{PP}}-1}$ rises — "$N_{\text{PP}} = 16$ stages with $m = 32$ microbatches waste $15/47 \approx 31.9\%$" [PAGE 484]. **Refuted if** the measured $N \times \eta_{\text{program}}$ product remains monotonically increasing across the tested range *and* per-example progress is flat; **confirmed** by any regime where the product falls while samples/s rises.
</RLVR_COUNTERFACTUAL_VETOES>