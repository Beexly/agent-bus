# docs/arxiv-program/research/2026-09-21/arxiv-deep/0315-when-metropolis-and-hastings-meet-bradley.md
## What it is (1-2 sentences)
Proves an impossibility result (no fixed-budget method can reproduce oracle Bradley-Terry MH acceptance from binary preferences alone) and constructs the exact N-vote Metropolis-Hastings rule that is exact for any N ≥ 1 and Peskun–Tierney optimal among exact fixed-budget preference-only samplers. The ledger verdict is ADAPT: port it as a diverse-portfolio/lineup sampler driven by analyst pairwise preferences, not as a probability estimator.
## Key metrics/methods (formulas where given, else "not specified")
- BT model: pJ(x≺x′) = σ(s(x′) − s(x)); odds pJ/(1−pJ) = exp(s(x′) − s(x)).
- Exact N-vote acceptance: α_N(x,x′;K) = min{1, r0(x,x′)·K/(N−K+1)}, K ~ Binomial(N, pJ(x≺x′)); r0(x,x′) = p0(x′)q(x|x′)/[p0(x)q(x′|x)].
- Multi-judge: α = min{1, r0(x,x′)·∏ᵢ₌₁ᵐ Kᵢ/(N−Kᵢ+1)}; targets π(x) ∝ p0(x)·pJ(M|x) or πm(x) ∝ p0(x)∏ᵢ pJi(Mi|x).
- Theorem 1 (impossibility): marginal acceptance AN(p) is a polynomial of degree ≤ N and cannot match min{1, c·p/(1−p)} for all p ∈ (0,1). Theorem 2: detailed balance holds for every N ≥ 1. Theorem 3: Peskun–Tierney optimality among exact fixed-budget rules.
## Data sources named
Synthetic (X = {0,…,240}, 150,000 MH steps); multi-condition text (50 prompts, Llama-3.1-8B-Instruct); image (SDXL-Turbo, Qwen3-VL-8B-Instruct judge); molecules (ChEMBL/MARS, ≤10 heavy-atom fragments, 200 chains × 1,000 steps × 5 seeds); MT (WMT23 de→en 549 sentences, en→de 557, TowerInstruct-7B base, Qwen2.5-32B judge, CometKiwi-XL).
## Findings (numbers and facts, not vibes)
- Synthetic: Pref-MH TV distance → 0 like oracle MH; the invalid plug-in rule plateaus away from zero (OTHER).
- Text (BT coefficients, higher better): Pref-MH (sep.) 0.703/0.755/0.639 (elevated/gothic/dialogue) vs. base LLM −0.841/−0.902/−0.413 vs. pointwise-MH −0.361/−0.474/−0.161 (OTHER).
- Image: all-three-constraints satisfaction 63.6% (Pref-MH) vs. 7.4% (pointwise-MH) vs. 4.5% (base); aesthetics 6.395 vs. 6.289 vs. 6.287 (OTHER).
- Molecules: Pref-MH QED .698±.002, SA .781±.001, diversity .899±.001, MolSkill −1.432±.398 (lower better) vs. MARS −0.226±.544 and pointwise-MH −0.098±.261 (OTHER).
- MT (BLEU): Pref-MH 39.59 (de→en) / 34.09 (en→de) vs. pointwise-MH 37.44/31.46; significant at 95% via 10,000-resample paired bootstrap; QUEST wins XCOMET only at small β (OTHER).
- Cost: MT ~15h per direction on 6×H200; molecules ~48h — judge queries dominate; multi-judge experiments use N=3–9 votes per judge per step (OTHER).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: New capability for GSE — exact sampling from a preference-tilted distribution with fixed judge budget; ledger's scoped application is preference-guided diverse DFS lineup portfolios (analyst pairwise preferences as judges over optimizer-generated lineups).
- TRUST-SIGNAL: The BT assumption is load-bearing and unverified for real judges — human analysts show intransitivity, position bias, prompt sensitivity; judge self-consistency (repeat-pair agreement) must be measured and abort at <70%; judge independence across the m judges is also assumed, and correlated judges double-count evidence.
- OTHER: The sampler produces samples from a tilted distribution — it does not estimate probabilities, so it cannot calibrate or validate the engine. INFERENCE: this is a diversification/portfolio tool, not a signal.
## Engine-actionable? (yes/no + one-line what)
Yes — preference-guided diverse DFS lineup portfolios: run Pref-MH over the optimizer's lineup distribution with 2–4 LLM-as-judge preference prompts (stacks, contrarian ownership), accepting only if judge self-consistency ≥70% and realized best lineup beats baseline by ≥10 percentile points on ≥3 of 4 completed slates.
