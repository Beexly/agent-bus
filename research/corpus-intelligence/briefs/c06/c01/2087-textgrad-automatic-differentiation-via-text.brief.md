# arxiv-program/research/2026-09-21/arxiv-deep/2087-textgrad-automatic-differentiation-via-text.md
## What it is (1-2 sentences)
TextGrad treats a compound AI system (prompts → code → evaluation) as a computation graph and does "textual backpropagation": a backward-engine LLM turns a downstream loss into natural-language criticism (the analogue of ∂L/∂x) for each upstream variable, and a TGD.step prompt incorporates the criticism — optimizing prompts and code jointly with PyTorch-like syntax. LeetCode Hard 0.26→0.36, GPQA 51%→55%.
## Key metrics/methods (formulas where given, else "not specified")
- Variable wraps any value with requires_grad + predecessor list; forward = LLM call registers predecessors
- Backward: backward-engine LLM (fixed glossary system prompt) produces per-predecessor criticism; chain rule = passing gradients to predecessors
- TGD.step (Eq. 9): x_new = LLM("Below are the criticisms on {x}: {∂L/∂x}. Incorporate the criticisms, and produce a new variable.")
- Composability: textgrad.autograd.Function; tg.sum for minibatch losses; same backward engine across all applications "without modifying the framework"
- 3 LLM calls per iteration per variable; 5-iteration budget in experiments
## Data sources named
LeetCode Hard (39 problems re-extracted; GPT-4 baseline ≈7% completion); GPQA; MMLU subsets (Machine Learning, College Physics); druglikeness/binding-affinity (molecules); prostate radiotherapy plans; framework released (exact repo URL in published paper)
## Findings (numbers and facts, not vibes)
- LeetCode Hard (gpt-4o, 5 seeds): zero-shot 0.26; Reflexion 0.31±0.012; TextGrad (0 demos, 5 iters) 0.36±0.018 — 20% relative gain over best existing method, no demonstrations
- GPQA: 51% → 55% ("best known result"); MMLU ML 85.7% → 88.4%; College Physics 91.2% → 95.1%
- Limitations: no convergence theory (metaphorical differentiation); backward engine is same LLM family as forward (self-critique bias); LeetCodeHard re-extraction disclosed (Reflexion comparison not on identical data); gradients only as good as the loss — with LLM-judged loss the system hill-climbs the judge's biases
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: optimize the signal-discovery pipeline itself — graph: SignalCode = LLM(IdeaPrompt + SignalHypothesis) → BacktestResult = Executor(SignalCode) → Loss = −ΔBrier (deterministic, never an LLM judge); backward-engine produces criticisms for BOTH SignalCode and IdeaPrompt from backtest diagnostics (chain rule through the discovery loop); minibatch mode (tg.sum) improves IdeaPrompt across ideas; improvement: gradient-clip analogue (cap lines/tokens changed per TGD.step) to reduce iteration-trajectory variance
## Engine-actionable? (yes/no + one-line what)
Yes — wrap the signal-discovery harness in the Variable/backward/TGD abstraction (2–3 days); gate: TextGrad arm clears 0.002 ΔBrier on ≥5/8 ideas vs ≤3/8 Reflexion arm AND transferred IdeaPrompt improves first-attempt ΔBrier ≥0.001 on 4 held-out hypotheses AND ≤20 LLM calls/idea; reject if ≈Reflexion, if prompt bloats with no transfer, or if gradients hallucinate vs deterministic backtest numbers.
