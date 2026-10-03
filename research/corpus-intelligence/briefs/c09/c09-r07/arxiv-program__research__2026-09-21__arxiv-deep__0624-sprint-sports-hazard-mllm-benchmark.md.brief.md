# arxiv-program/research/2026-09-21/arxiv-deep/0624-sprint-sports-hazard-mllm-benchmark.md
## What it is (1-2 sentences)
Deep-read ledger of SPRINT (arXiv:2608.05560v1), a benchmark testing whether multimodal LLMs can proactively warn of imminent physical danger in sports videos before accidents happen. Verdict: ADAPT the annotation schema (T1 earliest-cue / T2 obvious-moment timestamps, H1 macro / H2 direct causes) and the LoRA fine-tuning recipe as a template for an experimental NFL pre-injury hazard-detection video lane.

## Key metrics/methods (formulas where given, else "not specified")
- Three hierarchical binary dimensions: D1 (hazard detection), D2 (factor coverage — H1 macro factor match), D3 (cause identification — H2 direct cause); D_i requires all D_j for j<i.
- Evaluation: full-video under 3 prompt explicitness levels; temporal-window truncation (Window A: start→T1, B: start→midpoint(T1,T2), C: start→T2); safe-video false-alarm diagnostics.
- Fine-tuning: Qwen3-VL-8B-Instruct + LoRA (r=16, α=32, dropout 0.05), 2×RTX A6000, batch 1×accum 8, lr 2×10⁻⁵, BF16, 2 epochs, 71,249 GPT-5-generated samples (56,994 train / 7,127 val / 7,128 test).
- Formalism: response R = M(V_{:T}, P); no model equations. Annotator disagreement >0.5s triggers re-annotation/discarding.

## Data sources named
2,888 real-world sports videos (2,440 accidents + 448 safe controls), 14 sports, 3 environments, sourced from public YouTube (identifiers only). Annotations at https://github.com/DawnGavial/SPRINT (CC BY-NC 4.0, non-commercial). Models tested: Doubao-seed-1.8, Gemini-3 Flash/Pro, GPT-4o, GPT-5, InternVL3.5-8B, Qwen3-VL-8B. Videos sampled at 2 fps (max 64 frames closed-source, 32 open-source).

## Findings (numbers and facts, not vibes)
- Best model exceeds 95% on D1 but stays below 50% on D3 — detection without understanding.
- Prompt sensitivity: Doubao-seed-1.8 drops 88% → 59% on D1 moving from explicit to neutral prompt in the earliest window; open-source models fall below 9%.
- False alarms: explicit prompting pushes GPT-5's FPR 0.28 → 0.59 and Doubao's 0.13 → 0.88 on safe videos; even a static first frame triggers warnings.
- After fine-tuning Qwen3-VL-8B: full-video D1 0.48 → 0.99, D3 0.16 → 0.52; hardest case (Window A, neutral prompt) D1 0.09 → 0.84, D3 0.02 → 0.32; first-frame FPR 0.18 → 0.00 (truncated-video neutral-prompt FPR rose 0.09 → 0.20).
- Automatic evaluator (Gemini-3 Flash) validated vs blind human review: 94% agreement D1, 91% D2, 83% D3.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: injury-forecasting lane — pre-injury hazard detection from practice/game footage (T1 cues: awkward landings, leg whip, pile-up geometry) as an offline research input to injury forecasting.
- OTHER: methodology template — the D1/D2/D3 hierarchical evaluation and prompt-sensitivity ablations are a reusable template for evaluating any vision model GSE uses (e.g., auto-charting).

## Engine-actionable? (yes/no + one-line what)
Yes (experimental) — run a pilot annotating 300 NFL plays (150 injury-adjacent, 150 clean) with the SPRINT schema, replicate the LoRA recipe, and gate the video lane on D1 ≥ 0.80 at FPR ≤ 0.25 on held-out plays; note CC BY-NC 4.0 bars commercial reuse of the annotations themselves.
