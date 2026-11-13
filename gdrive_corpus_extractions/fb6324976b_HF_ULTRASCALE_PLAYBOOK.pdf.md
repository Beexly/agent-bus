---
source: "HF_ULTRASCALE_PLAYBOOK.pdf"
folder: "/CorpusRoot"
pages: 246
model: baidu/ernie-5.5-flash-preview:free
words: 5073
---

<NATIVE_REASONING>
The user is asking me to analyze a technical document — the Hugging Face "Ultra-Scale Playbook: Training LLMs on GPU Clusters." They've provided the full source text with page markers.

Now, let me look at the instruction I was given. It's a "GSE + GSI Frontier Reasoning Foundry" prompt with various invariants about betting lines, toy equations, LaTeX depth, retro-causal genealogy, recursive theory of mind, cross-layer veto adjudication, and RLVR counterfactual vetoes. It mentions "crisis habit regression," "clock," "physical/biomechanical/weather veto proof."

This is interesting. The instruction is a strange meta-prompt that appears designed for sports betting analysis or some kind of predictive reasoning about competitive events ("betting lines," "crisis habit regression," "biomechanical," "weather veto"). But the actual task is analyzing a technical PDF about distributed LLM training on GPU clusters.

There's a fundamental mismatch here. The formatting template (THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES) is designed for a completely different domain than the content.

Let me think about what's actually being asked. The system prompt establishes a persona and strict output format. The user provides a technical document. There's no explicit question in the user message — just the document dump with "DRIVE SOURCE" and "PAGES: 246".

So the implicit task is: analyze this document according to the foundry framework.

Now, the invariants are genuinely useful constraints for a technical analysis:
1. No betting lines — trivially fine, this is a tech document.
2. No toy equations — use real formal math with proper citations. This is GOOD and appropriate for a technical document.
3. >= 1,000 words across specific XML sections.

The XML section names are weird for this content:
- THINK_TRACE — deep multi-hop derivation & gray-zone audit — OK, this can work.
- SOURCE_OPERATORS_AND_EQUATIONS — formal LaTeX, units, page citations, breakdown — GREAT for this document, which has actual equations.
- RETROCAUSAL_GENEALOGY — historical/scientific lineage & multi-week traps — I can do scientific lineage of the techniques.
- RECURSIVE_THEORY_OF_MIND — "Crisis habit regression vs counter-trap vs clock" — this is odd, but I can reinterpret as analyzing failure modes/reasoning about the document's guidance.
- CROSS_LAYER_VETO_ADJUDICATION — "Physical/biomechanical/weather veto proof" — doesn't apply at all. Biomechanical/weather veto is meaningless for GPU training. I should note this.
- RLVR_COUNTERFACTUAL_VETOES — 3 verifiable veto scenarios + predictions — I can do counterfactuals about training configurations.

Here's my dilemma: The template is partly sensible (equations, citations, lineage) and partly nonsensical for this content (biomechanical/weather veto, crisis habit regression, clock). 

Let me think about how to handle this honestly. The best approach: I should produce a genuinely useful technical analysis of this document, following the SPIRIT of the invariants (formal equations, exact page citations, verbatim quotes, no fabrication), and use the XML section structure. But where a section's framing (like "biomechanical/weather veto") is nonsensical for GPU training, I should honestly say so rather than inventing fake biomechanics. That aligns with invariant #2 (never invent fake ratios/equations) — inventing a "biomechanical veto proof" for a GPU document would itself be a form of fabrication.

Actually, let me reconsider. The invariant says "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof." The "physical" part IS applicable — there are real physical constraints in GPU training: memory bandwidth, interconnect bandwidth, thermal/power limits, NVLink vs EFA bandwidth. The "biomechanical/weather" part is not. I can interpret this section as a physical-constraints veto analysis and explicitly note that biomechanical/weather vetoes are category-inapplicable to this domain (honesty over forced metaphor).

This is actually the honest and useful path. The user clearly wants a rigorous, deep technical analysis with real equations and citations. The foundry framework, stripped of its betting-sports baggage, is a reasonable scaffold for that. I'll follow it faithfully but not fabricate domain-inapplicable content.

Let me now actually do the analysis. This is a rich technical document. Let me extract the key formal content with page citations.

Key equations and facts from the document (with page markers):

PAGE 26: Number of parameters for transformer. The formula is referenced [C] but the actual formula got dropped in the text extraction (it shows "the following formula [C]:" then blank). The standard formula is N ≈ 2·d_model·n_layers·(2·d_model + ...) — actually the classic one is:
N = 12·L·d² (roughly), or more precisely the vocab term. The text says "the term that will dominate with large hidden dimensions is the [d²] term, since it's the only one growing quadratically."

The standard approximation (from the counting params reference): 
N ≈ 12 · n_layers · d_model² (for the transformer body) plus embeddings 2·V·d_model.

Actually let me be careful. The document references the param count formula but the extraction dropped it. I should state the standard form and flag that the exact expression was not preserved in the provided text but the dominant term is d².

PAGE 26-27: Memory bytes per parameter:
- FP32: params 4 bytes, gradients 4 bytes, Adam optimizer 8 bytes (momentum 4 + variance 4) = 16 bytes/param.
- Mixed precision BF16: 2 bytes params + 2 bytes grads + 4 bytes FP32 master copy... wait let me re-read.

PAGE 27: "we often don't use full low precision training but a mix... use BF16 for most of the computations—requiring 2 bytes per parameter and gradient—as well as storing an additional copy of the model weights and gradients in FP32, making 12 bytes per parameter in total."

So mixed precision: 2 (BF16 param) + 2 (BF16 grad) + 4 (FP32 master param) + 4 (FP32 grad, in nanotron case) = 12 bytes. Then optimizer states Adam: momentum 4 + variance 4 = 8 bytes. Total = 16 bytes without FP32 grad accum, 20 with.

PAGE 28 table: 
- 1B: 16 GB (FP32 or BF16 w/o FP32 grad acc), 20 GB (BF16 w/ FP32 grad acc)
- 7B: 112 GB, 140 GB
- 70B: 1120 GB, 1400 GB
- 405B: 6480 GB, 8100 GB

So the model uses 16 bytes/param baseline (2+2+4+4+4 = 16? Let me check: BF16 params 2 + BF16 grads 2 + FP32 optimizer (momentum 4 + variance 4 = 8) + FP32 master weights 4 = 16). Yes 16 bytes/param. And 20 with FP32 grad accumulation (+4).

PAGE 28-29: Activation memory. The formula is referenced from NVIDIA recomputation paper [4] (Korthikanti et al). The classic formula:
Activation memory per layer (without recomputation) = s·b·h·(34 + 5·a·s/h) bytes... 

The Korthikanti formula for activations per transformer layer:
Activations per layer = sbh(34 + 5·(a·s)/h) — in bytes, assuming mixed precision (2 bytes) with certain assumptions. Actually the full formula from the paper:
Activation memory per layer = sbh (34 + 5 as/h). The document says "memory scales linearly with the batch size and quadratically with the sequence length." The as/h term gives quadratic in s (because a·s·... times s). Yes: the term 5·a·s²·b (the attention score matrix) scales as s². That's the quadratic term.

Let me state this: total activation memory ≈ L · s · b · h · (34 + 5·a·s/h) bytes, where the 5·a·s²·b·L term is quadratic in s. This is from Korthikanti et al. 2022.

PAGE 31: Selective recomputation: "For a GPT-3 (175B) model, this means a 70% activation memory reduction at a 2.7% compute cost." Full recomputation "increases the compute cost and time by up to 30–40%."

PAGE 35: Gradient accumulation. Global batch size:
b_global = micro_batch_size × grad_accum_steps × DP_degree (page 53 gives the full form).
Actually page 35: "the global batch size will be eight times the micro-batch size" for 8 forward/backward. Page 53: b = mbs × grad_accum_steps × DP.

PAGE 59: ZeRO memory. With mixed precision + Adam:
- params (BF16): 2Ψ
- gradients (BF16): 2Ψ
- params FP32 + optimizer states: 4Ψ + K·4Ψ where K=12 for Adam (momentum + variance + fp32 master... actually K=12). The document says "denotes the memory multiplier of optimizer states ( for Adam)". For Adam, optimizer states = momentum (4) + variance (4) = 8 bytes, plus FP32 param copy (4) = 12 bytes = 4Ψ·3. So the "optimizer states" block is 4Ψ + K·4Ψ where K=12. Hmm, the standard ZeRO notation: total = 2Ψ + 2Ψ + K·Ψ where K=12 for Adam mixed precision (2 for fp16 params handled separately). Let me use the standard ZeRO paper form:

ZeRO paper: (4 + K)Ψ where K=12 for Adam. So per-parameter 16 bytes = (4+12)Ψ... that's 16Ψ. With mixed precision the fp16 param and grad are 2Ψ + 2Ψ = 4Ψ, and (K)Ψ = 12Ψ for fp32 params+momentum+variance. Total (4+K)Ψ = 16Ψ. Yes.

ZeRO memory per device:
- Baseline: (4 + K)Ψ = 16Ψ bytes
- ZeRO-1: 4Ψ + K·Ψ/N_d
- ZeRO-2: 2Ψ + 2Ψ/N_d + K·Ψ/N_d
- ZeRO-3: (2Ψ + 2Ψ + K·Ψ)/N_d = 16Ψ/N_d

Where K=12 for Adam, N_d = DP degree. These match page 60-68.

PAGE 61: ZeRO-1 = 4Ψ + K·Ψ/N_d.
PAGE 65: ZeRO-2 = 2Ψ + 2Ψ/N_d + K·Ψ/N_d.
PAGE 67: ZeRO-3 = (2Ψ+2Ψ+K·Ψ)/N_d.

Communication: 
- Vanilla DP: all-reduce = 2·(reduce-scatter + all-gather) cost.
- ZeRO-1/2: reduce-scatter + all-gather = 1× (equivalent to DP). Actually the doc says reduce-scatter is 2× faster than all-reduce (page 63 note). And ZeRO-2 comm = same as vanilla DP.
- ZeRO-3: 3× communication (all-gather fwd + all-gather bwd + reduce-scatter) = 1.5× that of ZeRO-2. Page 67: "total communication cost of [3×], compared to [2×] for ZeRO-2."

PAGE 73-74: Tensor parallelism math. Y = XW. 
- Column parallel: Y = X·[W1|W2|...], split W by columns, all-gather output.
- Row parallel: split W by rows and X, all-reduce output.
The two fundamental equations (page 73): 
Splitting A by columns: [A1, A2] then A·B — actually the equations show A = [A1, A2], and AB = A1·B1 + A2·B2 (row split of B). These got dropped in extraction but are the standard block-matrix identities.

PAGE 82: TP degree should not exceed num attention heads. Llama-3 8B: 32 query heads, 8 KV heads.

PAGE 87: LayerNorm formula: mean μ and variance σ² computed across hidden dim H. y = (x - μ)/√(σ²+ε) · γ + β.

PAGE 90: SP activation shape: TP only stores (b, s, h); TP+SP max activation reduced to (b, s/t, h) or (b, s, h/t) → so max is b·s·h/t.

PAGE 113-115: Pipeline bubble. 
- Naive PP: bubble fraction = (p-1)/m where p = PP degree, m = number of micro-batches. Actually page 115 gives bubble ratio = (p-1)/m.
- Time = (m + p - 1)·t (page 117 for AFAB ideal time (m+p-1)·t, plus bubble).
- AFAB bubble reduced by factor of m (more microbatches). 
- 1F1B: activation memory ~ p microbatches instead of m.
- Interleaved: bubble reduced by factor v (number of model chunks/stages per GPU), comm increased by v.

Bubble fraction formula: bubble time / ideal time = (p-1)/m. With interleaving v: (p-1)/(m·v).

PAGE 129: Zero bubble — split backward into B (input grad, "dgrad"/B) and W (weight grad, "Wgrad"). W can be scheduled flexibly.

PAGE 197: FP8. H100 FP8 GEMM = 2× BF16 FLOPS.

PAGE 199 TABLE.I: memory budgets for FP8 variants:
- BF16 baseline with FP32: 20 bytes
- without FP32 grad accum: 16 bytes (20% reduction)
- Transformer engine FP8: 16 bytes (20% reduction)
- FP8-LM O3: 9 bytes (55% reduction)
- DeepSeek-V3: 15 bytes (25% reduction)
- Nanotron FP8: 10 bytes (50% reduction)

PAGE 174-180: Memory coalescing — coalesced access gave ~10× throughput improvement. Tiling: memory throughput 410 GB/s, execution time decreased ~43%, ~6.6 TFLOPS.

PAGE 240-241: FLOPS estimates.
- Forward pass FLOPS ≈ 2·N·tokens = 6·N per parameter? Actually forward ≈ 2 FLOPs per param per token. The appendix: forward FLOPS ≈ 2·(#params)·(tokens). Backward = 2× forward = 4·params·tokens. Total fwd+bwd = 6·params·tokens.
- More accurate: 6·N + attention quadratic term.

PAGE 242-245: Overlap math.
- DP overlap ratio: compute_time / comm_time; overlap effective when ratio... "When the ratio is less than 1, communication can be fully overlapped with computation."
- ZeRO-3 overlap ratio depends on hidden size and DP.
- TP overlap: "the ratio only depends on the hidden size h and tensor parallelism degree t, not on sequence length or batch size."
- PP overlap: independent of seq length and batch size; depends on h, layers in next stage, compute-to-P2P-bandwidth ratio.

Communication primitives (Appendix A1):
- All-reduce = reduce-scatter + all-gather, each ~ half cost. Total AllReduce comm ≈ 2Ψ(N-1)/N · (bytes). Page 229-230: each GPU sends/receives ~2Ψ(N-1)/N values; total ≈ 2Ψ when N large.
- Ring AllReduce cost ≈ 2·(N-1)/N · K where K = total values.

MFU vs HFU (page 33):
- HFU = hardware FLOPS achieved / max accelerator FLOPS (includes recomputation).
- MFU = model FLOPS / (max × time) (excludes recomputation, model-specific).

GPU architecture (page 165): H100 = 132 SMs × 128 cores = 16,896 cores. Memory hierarchy: registers > shared/L1 (per SM) > L2 (all SMs) > global HBM (80GB, slowest).

Float formats (page 191):
- float32: 1 sign, 8 exp, 23 mantissa
- float16: 1, 5, 10
- bfloat16: 1, 8, 7
- float8 e4m3: 1, 4, 3
- float8 e5m2: 1, 5, 2

Epsilon (page 194): float32 ε ≈ 1.19e-7, float16 ε ≈ 9.77e-4, bfloat16 ε ≈ 7.79e-3 (10× float16... actually ~0.0078). The doc says bfloat16 epsilon 10× higher than float16.

Now I have plenty of rigorous material. Let me construct the response.

Word count: need >= 1,000 words across the six XML sections. THINK_TRACE >= 400 words. Let me make sure each section is substantive.

Let me plan the six sections:

1. THINK_TRACE (>=400 words): Multi-hop derivation. Walk through the memory-first constraint hierarchy, the derivation connecting param count → memory → parallelism choice. Gray-zone audit: where the document's claims have boundary conditions. Multi-hop: e.g., 405B model memory → why single GPU fails → ZeRO/TP/PP decision tree.

2. SOURCE_OPERATORS_AND_EQUATIONS: The formal LaTeX. Parameter count, memory per param, ZeRO stage formulas, activation memory, TP block decomposition, pipeline bubble, FLOPS, overlap ratios. With units and page citations. Breakdown regimes.

3. RETROCAUSAL_GENEALOGY: Scientific lineage — Korthikanti (recomputation), Rajbhandari (ZeRO), Shoeybi (Megatron TP), Narayanan (PTD/3D), Huang (GPipe), Fan/Qi (Zero Bubble), Liu (Ring Attention), Dao (FlashAttention), Micikevicius (mixed precision), DeepSeek-V3. Multi-week traps: the "efficiency regression" claims.

4. RECURSIVE_THEORY_OF_MIND: Reinterpret "crisis habit regression vs counter-trap vs clock" as: the reasoning traps a practitioner falls into (crisis = OOM debugging; habit regression = reverting to naive DP; counter-trap = premature TP scaling; clock = the throughput-vs-time tradeoff / wall-clock as the true arbiter). Model the "adversary" as the optimizer's misreadings.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical veto proof — memory bandwidth (HBM vs SRAM), interconnect bandwidth (NVLink intra-node vs EFA inter-node), the TP>8 cliff. Note honestly that "biomechanical/weather" vetoes are category-inapplicable to a GPU-training corpus; the operative physical vetoes are thermodynamic/power (rack power limits) and interconnect latency. Cite pages 55, 84, 94-95, 110-111, 122.

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable counterfactuals with predictions. E.g., (a) If you set TP=16 on a single-node-8-GPU cluster → prediction: throughput drops ~43% per page 122. (b) If you use pure ZeRO-3 at 512+ GPUs → prediction: comm-bound, MFU falls (page 68, 155). (c) If sequence length 128k with only TP+SP → OOM because attention activations quadratic (page 99). These are "verifiable" against the document's benchmarks.

Let me be careful about the invariant "cite exact [PAGE N] markers and verbatim quotes." I'll include verbatim quotes where possible.

Let me also make sure I don't fabricate. The param-count formula and activation formula were dropped in extraction — I'll flag this and give the canonical published forms with a note that the exact rendered equation was not preserved in the provided text.

Let me write this now. I need to be rigorous and honest. I'll open with a brief framing note about the template/domain mismatch, then deliver.

Actually, the instructions say to be direct and skip filler. But there's a genuine issue I should flag concisely: the foundry template has domain-specific hooks (biomechanical/weather/crisis) that don't map to a GPU-training corpus, and invariant #2 forbids fabricating. So I'll note I'm mapping those to the nearest physically-meaningful analogs and will not invent biomechanics. One or two sentences, then the analysis.

Let me draft.

For the equations, let me use proper notation:
- Ψ or N = parameter count
- L = layers (I'll use L or n_layers)
- h or d = hidden dim
- s = sequence length
- b = batch size (samples)
- a = num attention heads
- V = vocab size
- p = pipeline degree
- t = TP degree
- N_d or D = DP degree
- m = number of micro-batches
- K = optimizer state multiplier (12 for Adam)

Parameter count canonical: N ≈ 12·L·h² + 2·V·h (transformer body + embeddings). The doc says the h² term dominates. Let me note the 12·L·h² comes from: per layer, QKV+O projections ≈ 4h², MLP (with 4h intermediate) ≈ 8h², total 12h². (With GLU/8-8-3 it's different — page 240 mentions GLU gives different counts.)

Activation memory (Korthikanti): per layer ≈ s·b·h·(34 + 5·a·s/h) bytes. Total ≈ L·s·b·h·(34 + 5as/h). The quadratic term: 5·L·a·s²·b.

ZeRO:
- Baseline: (2 + 2 + K)Ψ = (4+K)Ψ = 16Ψ (K=12)
- ZeRO-1: (2 + 2)Ψ + KΨ/D = 4Ψ + KΨ/D
- ZeRO-2: 2Ψ + (2+K)Ψ/D
- ZeRO-3: (4+K)Ψ/D = 16Ψ/D

TP column/row:
Y = XW. Column: W = [W₁ | W₂ | ... | W_t], Y_i = X·W_i, then all-gather (concat) → Y = [Y₁|...|Y_t].
Row: W = [W₁; W₂; ...; W_t], X = [X₁,...,X_t], Y = Σ X_i·W_i, via all-reduce.

Pipeline bubble:
- Naive/AFAB: bubble fraction = (p-1)/m. Ideal time per stage-step... 
Actually page 113-115: with t_f forward, t_b backward (t_b=t_f assumed), naive total = ... the bubble time = (p-1)·(t_f+t_b), ideal = m·(t_f+t_b). Bubble ratio = (p-1)/m.
- Interleaved (v chunks): bubble = (p-1)/(m·v).

FLOPS: forward ≈ 2N per token; total fwd+bwd ≈ 6N per token. Per step: C ≈ 6·N·D_tokens where D_tokens = b·s. More accurate adds attention term ∝ s².

Overlap (page 242): overlap feasible when t_comm/t_compute < 1. For DP: t_comm = 2Ψ·bytes/BW (all-reduce), t_compute = backward compute. For TP, ratio depends only on h and t.

Let me write everything now. I'll aim for well over 1,000 words total, with THINK_TRACE over 400.

Let me count roughly as I go and make sure THINK_TRACE is substantial.

I'll write the response now.
</NATIVE_REASONING>

Note on framing: this corpus is a distributed-systems text (Hugging Face's *Ultra-Scale Playbook*), so several template hooks — "biomechanical/weather veto," "crisis habit regression," "clock" — have no literal referent here. Per invariant #2 (no fabrication), I map those to their nearest physically-meaningful analogs (thermodynamic/interconnect vetoes; practitioner failure-mode loops; wall-clock as the true objective) and say so explicitly rather than inventing biomechanics for GPUs. Where an equation was dropped in the provided text extraction, I flag it and supply the canonical published form.

<THINK_TRACE>
The document is organized around one dominant inequality: a training step's peak memory must fit in aggregate accelerator HBM, and everything else (throughput, scaling efficiency) is subordinate to that feasibility gate. This gives a clean multi-hop derivation chain I can reconstruct and stress-test.

Hop 1 — Parameter footprint. Page 26 states the transformer parameter count is dominated by a hidden-dimension-quadratic term ("the term that will dominate with large hidden dimensions is the [d²] term, since it's the only one growing quadratically as we scale the parameters"). Canonical form: $N \approx 12 L h^2 + 2Vh$. This is the root node of the whole tree.

Hop 2 — Byte budget. Page 27: BF16 mixed precision yields "12 bytes per parameter in total" before optimizer states, and Adam adds momentum+variance in FP32. The page-28 table is the ground truth: 1B→16 GB, 7B→112 GB, 70B→1120 GB, 405B→6480 GB (without FP32 grad accumulation). Cross-checking: 7B×16 bytes = 112 GB ✓. This confirms 16 bytes/param as the working constant, i.e., $(4+K)\Psi$ with $K=12$.

Hop 3 — The 80 GB wall. Page 28: "as soon as we reach 7B(!), the memory requirements... already start to add up significantly and exceed the size of a typical GPU's memory (e.g., 80 GB for an H100)." So 7B×(16 bytes)=112 GB > 80 GB. Feasibility fails at ~5B for full training on one H100. This is the first gray-zone: the threshold depends on whether optimizer offload/recomputation is allowed; the document deliberately fixes the "vanilla" case to motivate parallelism.

Hop 4 — Activation scaling. Page 29: activation memory "scales linearly with the batch size and quadratically with the sequence length." The quadratic term is the attention-score matrix $\propto L a s^2 b$. This is why recomputation (page 31) and gradient accumulation (page 35) target activations specifically, and why context parallelism (page 99) exists for 128k+ sequences.

Hop 5 — Which axis to shard. Page 70 forces the transition: "DP only works if a layer of the model fits in a single GPU, and ZeRO can only partition the parameters, gradients, and optimizer states, not the activation memory." This is the pivot from sharding (ZeRO) to true parallelism (TP), because activations — unlike params/grads/optimizer — are per-replica and non-duplicated (page 58: "they are not duplicated and thus can't be sharded").

Gray-zone audit: The document repeatedly flags where its own formulas break. (a) "Mixed precision training itself doesn't save memory; it just distributes the memory differently" (page 27) — a subtle trap; the savings come from activation reduction in half precision, not from the param bytes. (b) ZeRO-3 prefetch overlap "only works as long as we don't scale DP too much (as a rule of thumb, DP shouldn't exceed 512)" (page 68). (c) TP overlap degrades sharply past node boundaries (pages 84, 94). (d) The whole overlap analysis "relied on a critical assumption: that computation and communication can be efficiently overlapped... The reality is more nuanced" because "communication kernels will usually make use of the same GPU streaming multiprocessors" (page 162) — an SM-contention caveat that invalidates naive roofline optimism. These are the boundary conditions the practitioner must audit before trusting any single formula.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Parameter count [PAGE 26] (rendered equation not preserved in extraction; canonical form):
$$N \approx 12 L h^2 + 2 V h$$
Units: dimensionless parameters. The $12Lh^2$ term = per-layer QKV+O ($4h^2$) + MLP ($\approx 8h^2$).

Memory per parameter [PAGES 26–27]:
- FP32: $4_{\text{param}} + 4_{\text{grad}} + 8_{\text{Adam}} = 16$ bytes.
- BF16 mixed precision: $2_{\text{param}} + 2_{\text{grad}} + 4_{\text{FP32 master}} + (4_{\text{grad,FP32 opt}}) + 8_{\text{Adam}} = 16$–$20$ bytes.
Ground truth [PAGE 28]: 7B→112/140 GB, 70B→1120/1400 GB, 405B→6480/8100 GB.

Activation memory per layer [PAGES 28–29] (Korthikanti et al. [4]; exact equation dropped, canonical):
$$M_{\text{act}} \approx L\, s\, b\, h\left(34 + \frac{5\,a\,s}{h}\right)\ \text{bytes}$$
The quadratic-in-$s$ term is $5 L a s^2 b$ (attention scores). Selective recomputation: GPT-3 175B → "70% activation memory reduction at a 2.7% compute cost" [PAGE 31]; full recompute → "up to 30–40%" added compute.

ZeRO memory (bytes/device), $\Psi$=params, $K=12$ (Adam), $D$=DP degree [PAGES 59–68]:
$$\text{Baseline} = (4+K)\Psi = 16\Psi$$
$$\text{ZeRO-1} = 4\Psi + \frac{K\Psi}{D},\quad \text{ZeRO-2} = 2\Psi + \frac{(2+K)\Psi}{D},\quad \text{ZeRO-3} = \frac{(4+K)\Psi}{D}=\frac{16\Psi}{D}$$
Communication: vanilla DP = all-reduce ($\approx 2\times$ reduce-scatter); ZeRO-1/2 = reduce-scatter + all-gather (comm-equivalent to DP); ZeRO-3 = 3× (fwd all-gather + bwd all-gather + reduce-scatter) = 1.5× ZeRO-2 [PAGE 67].

Tensor-parallel block algebra [PAGES 73–74], $Y=XW$:
$$\text{Column: } W=[W_1|\dots|W_t],\; Y_i=XW_i,\; Y=\text{all-gather}(\{Y_i\})$$
$$\text{Row: } W=[W_1;\dots;W_t],\; X=[X_1,\dots,X_t],\; Y=\sum_i X_iW_i \;\text{via all-reduce}$$
Constraint: $t \le$ num attention heads; Llama-3 8B has 32 Q / 8 KV heads [PAGE 82].

Pipeline bubble [PAGES 113–117, 125]: with $p$=PP degree, $m$=micro-batches, $v$=interleaved chunks:
$$\text{bubble fraction} = \frac{p-1}{m}\quad(\text{AFAB/1F1B}),\qquad \frac{p-1}{m\,v}\quad(\text{interleaved})$$
1F1B activation memory $\propto p$ micro-batches vs $m$ for AFAB [PAGE 119]. Zero-bubble splits backward into $B$ (input-grad) and $W$ (weight-grad), scheduling $W$ to fill bubbles [PAGE 129].

Compute [PAGES 240–241]: forward $\approx 2N$ FLOPs/token, fwd+bwd $\approx 6N$ FLOPs/token. FP8 GEMM = 2× BF16 FLOPS on H100 [PAGE 197]. FP8 byte budgets [PAGE 199]: DeepSeek-V3 15 B (25%↓), Nanotron 10 B (50%↓), FP8-LM O3 9 B (55%↓).

Overlap feasibility [PAGES 242–244]: overlap holds when $t_{\text{comm}}/t_{\text{compute}} < 1$. For TP the ratio "only depends on the hidden size $h$ and tensor parallelism degree $t$, not on sequence length or batch size." MFU vs HFU [PAGE 33]: MFU excludes recompute FLOPs; HFU includes them.

Breakdown regimes: memory formula diverges from reality once "CUDA kernels typically require 1–2 GB" and fragmentation are added [PAGE 23]; overlap ratios assume zero SM contention, which fails at scale [PAGE 162].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The book is a synthesis node in a lineage that runs: Micikevicius et al. (mixed precision, 2018, ref [3]) → Korthikanti et al. (recomputation, 2022, ref [4]) establish the memory levers; Rajbhandari et al. (ZeRO, 2020, ref ch.3 [1]) establishes sharding; Shoeybi/Megatron-LM (TP, arxiv 1909.08053, [PAGE 206]) establishes intra-layer splitting; Narayanan et al. ("Tensor and sequence parallelism + selective recomputation," arxiv 2205.05198, [PAGE 210]) fuses TP+SP; Huang/GPipe and the breadth-first work (Lamy-Poirier, arxiv 2211.05953, [PAGE 132]) establish pipeline scheduling; Qi et al. (Zero Bubble, [PAGE 132]) and DeepSeek-V3's DualPipe extend to near-zero bubble; Liu et al. (Ring Attention, 2023, [PAGE 108]) and Dao (FlashAttention, 2022, [PAGE 200]) handle sequence/compute IO. The document's own claim to novelty is empirical: "We ran over 4,100 distributed experiments (over 16k including test runs) with up to 512 GPUs" [PAGE 15] — a benchmarking corpus rather than a new primitive.

Multi-week traps embedded in this genealogy: (1) The "TP beats PP then PP beats TP then TP will beat PP again" oscillation [PAGE 160] — a moving-target trap where benchmark conclusions invert as implementation maturity changes, so any multi-week optimization campaign can chase a lead that evaporates. (2) The ZeRO-3-vs-PP equivalence trap [PAGE 142–143]: they solve the same problem (partition weights over the depth axis) but communicate different objects (weights vs activations); teams that switch representations mid-campaign silently change their communication volume. (3) The mixed-precision "savings" illusion [PAGE 27] that misleads capacity planning for weeks.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Reframing "crisis habit regression vs counter-trap vs clock" for this domain: the "adversary" is the engineer's own debugging reflex under an OOM crisis, and the model must predict how that reflex mis-selects a parallelism axis.

Crisis-habit regression: When a run OOMs, the instinctive move is to crank recomputation to "full" [PAGE 31] or add ZeRO-3 sharding. But page 99 shows full recompute "incurs a heavy compute overhead of ~30%," and page 68 caps ZeRO-3 prefetch overlap at DP≤512. The regressed habit (max sharding) trades a feasibility win for a throughput collapse — the crisis reflex optimizes the wrong invariant (fit) against the real objective (time).

Counter-trap: The sophisticated over-correction is premature TP scaling. Page 84 warns "significant drops when moving from TP=8 to TP=16, and an even steeper decline from TP=16 to TP=32" because TP crosses NVLink→EFA. The counter-trap is believing "shard activations harder" is free when TP communication is on the critical path and un-hideable (page 82: "hard to fully hide/overlap").

Clock (the true arbiter): The document is explicit that "what really matters at the end of the day is the total time needed to train a model on a given dataset" [PAGE 33]. Any configuration that fits but runs slow is dominated. The recursive model: predict the engineer's crisis move → check it against the fit-inequality AND the throughput ceiling → flag when the move satisfies fit but violates the wall-clock objective. The document's decision tree (pages 155–157) is precisely this ordered counter-trap: fit first, batch second, throughput third — because reversing the order optimizes throughput for a config that never launches.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Biomechanical and meteorological vetoes are category-inapplicable to a GPU-training corpus; I do not fabricate them (invariant #2). The operative physical vetoes are thermodynamic/power and interconnect-latency, both grounded in the text:

1. Interconnect-bandwidth veto (hard): Page 122 — pipeline parallelism sees "performance only drops by 14% when scaling from one node (p=8) to two nodes (p=16)... a much better scaling than we achieve with tensor parallelism, which typically sees around 43% performance degradation in similar cross-node scenarios." This is a decisive physical veto on TP>8: NVLink intra-node bandwidth ≫ EFA inter-node bandwidth (page 95: "the biggest performance drop when we move from TP=8 to TP=16, because that's when we move from only communicating within a single node (NVLink) to... between nodes (EFA)"). Proof: TP places all-reduce on the compute critical path (page 82); crossing the node boundary multiplies $t_{\text{comm}}$ while $t_{\text{compute}}$ is fixed → ratio $>1$ → overlap impossible.

2. Latency/ring-propagation veto (hard): Page 55 — "at the 512+ GPU scale, depending on the network used, the communication operations will start to be bound by ring latency... which means we can no longer fully overlap the DP communications." This vetoes pure DP/ZeRO-3 beyond ~512 GPUs (reinforced page 68: "DP shouldn't exceed 512").

3. SM-contention veto (soft but real): Page 162 — overlapping comm with compute "leads to decreased throughput when communication is overlapped with computation" because NCCL kernels and compute kernels contend for the same streaming multiprocessors. This vetoes any roofline model that assumes free overlap.

4. Power/thermal: not quantified in the corpus (only referenced via cluster references [PAGE 212]), so I flag it as an out-of-corpus physical constraint rather than asserting numbers.

Adjudication: the physical vetoes are bandwidth/latency-ranked; PP is the lowest-bandwidth-tolerant axis and thus the cross-node workhorse; TP is node-bound; DP/ZeRO-3 is latency-bound at extreme scale.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactuals, each checkable against the corpus's own benchmarks:

1. CF-1: Set TP=16 on an 8-GPU-per-node cluster. Prediction (verifiable, page 84/122): throughput drops sharply — "significant drops when moving from TP=8 to TP=16" — on the order of the ~43% cross-node degradation, because the TP all-reduce now traverses EFA. Veto condition: overlap ratio $t_{\text{comm}}/t_{\text{compute}}>1$ becomes unavoidable.

2. CF-2: Run pure ZeRO-3 (no PP/TP) at 512+ GPUs. Prediction (verifiable, pages 55/68/155): communication becomes latency-bound and MFU falls; page 155 explicitly: "At 512+ GPU scale, pure data parallelism/ZeRO-3 will start to becomes inefficient due to communication cost." The recommended counter is TP=8 + ZeRO-2 + PP at 1024+.

3. CF-3: Train at 128k sequence length with TP+SP only, no context parallelism. Prediction (verifiable, page 99): OOM in the TP region, since "we still have to process a full sequence when we're inside the TP region" and attention activations scale as $5Las^2b$ (page 29). The fix is CP/Ring Attention (page 99–101). Falsifiable test: measure peak memory vs sequence length; if it grows quadratically, CP is required.

Each counterfactual is falsifiable by running the corresponding Nanotron configuration [PAGE 158] and observing either throughput or peak memory — satisfying the RLVR verifiability criterion.
</RLVR_COUNTERFACTUAL_VETOES>

Bottom line: the corpus reduces to a strict feasibility-then-throughput ordering. Fit gates everything ($(4+K)\Psi/D + M_{\text{act}} \le \text{HBM}$); then choose the sharding axis by bandwidth rank (TP node-bound, PP/ZeRO cross-node-tolerant, DP latency-bound past ~512); and never trust overlap ratios without the SM-contention caveat on page 162.