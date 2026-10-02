# arxiv-program/research/2026-09-21/arxiv-deep/2104-flamingo-a-visual-language-model-for-few-shot-learning.md
## What it is (1-2 sentences)
Flamingo (DeepMind, 2022): a visual-language model achieving GPT-3-style few-shot learning over interleaved images/videos and text — frozen NFNet vision encoder + frozen Chinchilla LM bridged by a Perceiver Resampler and gated cross-attention-dense layers (initialized to identity via tanh(α), α=0), trained on massive web interleaved corpora. Sets few-shot SOTA on numerous benchmarks without task-specific fine-tuning.
## Key metrics/methods (formulas where given, else "not specified")
- Perceiver Resampler: learned latent queries cross-attend to variable-size visual features → fixed 64 visual tokens (beats plain Transformer/MLP resamplers)
- Gated xattn-dense layers between frozen LM layers; output × tanh(α), α init 0 → model = pretrained LM at init
- Per-image attention masking: at token ℓ attend only the immediately preceding image (generalizes to 32 shots despite ≤5 images/sequence in training)
- Eq. 1 (image-causal LM): p(y|x) = Π_ℓ p(y_ℓ | y_{<ℓ}, x_{≤ℓ}); Eq. 2: Σ_m λ_m E[−Σ_ℓ log p(y_ℓ|y_{<ℓ},x_{≤ℓ})] with dataset weights λ_m "key to performance"
- Sizes: 3B / 9B / 80B; video = 1 FPS frames + learned temporal embeddings
## Data sources named
Proprietary web-scraped: M3W (~43M pages, interleaved), ALIGN (1.8B image/alt-text pairs), LTIP (312M long-text/image pairs), VTP (27M short videos); eval on 16 public benchmarks; no code/data release (open re-implementations exist, verify before use)
## Findings (numbers and facts, not vibes)
- OKVQA: Flamingo-80B 0-shot 50.6 (SOTA 43.3 16-shot); VQAv2: 80B 0-shot 56.3 (SOTA 38.2 4-shot); COCO CIDEr: 80B 0-shot 84.3 (SOTA 32.2); MSVDQA: 80B 0-shot 35.6 (SOTA 35.2)
- Fine-tuned Flamingo sets new SOTA on VQAv2, VATEX, VizWiz, MSRVTTQA, HatefulMemes
- Limitations: dev-set model-selection bias disclosed (5/16 benchmarks); web-noise unquantified; likelihood-scored close-ended eval can flatter; zero sports data in training — NFL film transfer untested
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: few-shot film reasoning — prompt with 4–8 labeled (clip, analyst-note) pairs + query clip → scheme label, coverage call, or injury-mechanism note; build "M3W-sports" (broadcast clips interleaved with analyst notes/play-by-play) and train an open-VLM bridge (frozen vision + frozen 7B LM + gated xattn-dense); analyst-in-the-loop (outputs are notes, never auto-published picks); improvement: tracking-conditioned visual prompting — prepend discretized trajectory token streams so the LM cross-attends to pixels AND trajectories (disguised-coverages case)
## Engine-actionable? (yes/no + one-line what)
Yes — build sports interleaved corpus + open-VLM bridge (3–5 weeks); gate: 4-shot prompting beats a fine-tuned video-classifier baseline by ≥5pp accuracy on 500 labeled clips (disjoint games per fold) AND likelihood scores rank-calibrated; reject if it fails to beat the cheap specialist.
