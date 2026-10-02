# docs/arxiv-program/research/2026-09-21/arxiv-deep/2110-deepsport-multimodal-llm-agentic-rl.md
## What it is (1-2 sentences)
DeepSport (arXiv:2511.12908v2, Rice / UC Irvine / Georgia Tech, 2025) is the first end-to-end trained multi-sport multimodal LLM that reasons agentically over video — "thinking with videos" by iteratively calling a frame-extraction tool — trained by SFT cold-start plus GRPO reinforcement learning with a gated tool-use reward. File verdict: ADAPT — the transferable machinery is the reward design: reward the agent for pulling extra evidence only when it helps, with a small curiosity bonus for exploration.

## Key metrics/methods (formulas where given, else "not specified")
- Reasoning paradigm: trajectory τ = ((F_1,T_1,A_1),…,(F_n,T_n,A_n)) (Eq. 1). Start: k=8 uniformly sampled frames with frame indices. Per step: <think> reasoning, then either <tool_call>frame_extraction_tool(idx_start, idx_end)</tool_call> (fetch new frames from a temporal window) or terminal <answer>. Redundant same-interval tool calls = format error (Cognitive Consistency Verification).
- Stage 1 — SFT cold start: fine-tune Qwen2.5-VL-7B on DeepSport-CoT-15k for 1 epoch to learn tag syntax and multi-turn patterns.
- Stage 2 — Agentic RL with GRPO: group of G trajectories per prompt; advantage A_i = (r_i − μ_r)/σ_r (Eq. 2); GRPO objective with clipped ratio + β·KL(π_θ‖π_ref) (Eq. 3).
- Gated tool-use reward (Eqs. 4–8): R_acc(τ) = acc(τ) ∈ [0,1] (Eq. 4); g_tool = 1 if tool used ≥ once; g_acc = 1 if acc ≥ 0.5 (Eq. 5); R_tool = 0.5·acc if g_tool=1 ∧ g_acc=1 (successful tool use), 0.03 if g_tool=1 ∧ g_acc=0 (curiosity bonus), 0 if no tool use (Eq. 6); P_format = −0.05·(1 − g_fmt); R = g_fmt·(R_acc + R_tool) + P_format (Eq. 7–8); invalid format collapses reward to −0.05.
- Training: video at 640×360, batch 32, 8 rollouts, 300 RL steps, up to 12,800 tokens/response, 8×H20 GPUs, 796 GPU-hours total.
- Assumptions recorded in file: SFT cold-start is needed to stabilize RL (standard but unablated); tool use worth rewarding only when acc ≥ 0.5; 0.03 curiosity bonus small enough not to reward useless exploration; LLM-as-judge filtering produces genuinely high-quality CoT; video-level splitting suffices for leakage control.

## Data sources named
Distillation pipeline over 9 existing works → 10 data sources, 12 sports (soccer, basketball, volleyball, American football, ice hockey, baseball, table tennis, badminton, fencing, boxing, diving, gymnastics). Non-QA sources (FineDiving, SoccerReplay-1988, FACTS, T3-Set) converted to QA via task-specific templates. Splits with strict video-level splitting (SoccerBench test clips excluded from SoccerReplay-1988 train): DeepSport-CoT-15k (15k LLM-filtered CoT trajectories; teacher Qwen3-VL-235B-A22B-Thinking; judge DeepSeek-V3.2-Exp), DeepSport-RL-63k (63k QA pairs as RL prompts), test benchmark 6.7k QA pairs across four dimensions: Fine-Grained Recognition, Rule & Procedural Logic, Assessment & Coaching, Live Commentary & Reporting. No code/repo URL stated in extracted text.

## Findings (numbers and facts, not vibes)
- Table 2 (accuracy %, avg frames): DeepSport 14.39 frames — 51.09 (recognition) / 43.82 (rules) / 24.74 (coaching) / 24.60 (commentary) / 40.08 overall; GPT-5 (16f) 46.50 / 32.89 / 27.01 / 22.76 / 35.70; Qwen3-VL-235B-A22B-Thinking (16f) 44.96 / 31.03 / 28.72 / 25.59 / 35.36; Qwen3-VL-8B-Thinking 34.83 overall; backbone Qwen2.5-VL-7B-Instruct 16.98 overall → DeepSport is a +23.1-point lift on the same 7B backbone. [COACHING, OTHER]
- Largest gains in Rule & Procedural Logic (43.82 vs 32.89 GPT-5) — agentic re-watching helps rule application most; coaching/commentary remain weakest (24.74/24.60) — generation quality lags recognition. [COACHING, OTHER]
- DeepSport averages 14.39 frames vs 16 fixed for baselines — uses FEWER frames via selective re-watching. Zero-shot transfer to unseen sports reported. [OTHER]
- File's limitation facts: American football is one of 12 sports but results are not broken out per sport — NFL-specific capability is unproven; the 0.5 accuracy gate and 0.03 curiosity bonus are asserted, not ablated; LLM-as-judge (DeepSeek-V3.2-Exp) filtering may select for judge-pleasing rather than correct reasoning; 300-step RL phase is short enough to question convergence; 796 GPU-hours on H20s is a real cost. [TRUST-SIGNAL, OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- +23.1-point lift on the same backbone (16.98 → 40.08) and beating GPT-5 overall (40.08 vs 35.70) with fewer frames → OTHER (agentic tool-use beats bigger passive models — a data-interrogation recipe, not a scale recipe)
- Rule & Procedural Logic gain (43.82 vs 32.89 GPT-5) and weak coaching/commentary scores (24.74/24.60) → COACHING, OTHER (film-room officiating-decision and coaching-error analysis potential; generation still weak)
- Gated tool-use reward recipe (bonus only when acc ≥ 0.5, 0.03 curiosity bonus, −0.05 format collapse) → OTHER (trainable policy for GSE agents that query tracking/video/pbp tools — "pull film only when the question needs it")
- No per-sport breakout (NFL capability unproven), unablated reward constants, judge-pleasing risk → TRUST-SIGNAL
- No QB-BEHAVIOR, OL, or SCHEME content.

## Engine-actionable? (yes/no + one-line what)
Yes — train (or prompt-distill) a GSE film-analyst agent with DeepSport's gated tool-use reward over GSE "tools" (tracking_window, video_clip, pbp_lookup, stat_query), Phase 1 SFT-distillation from a strong teacher then GRPO-lite on verifiable 2024 NFL questions (score predictions vs actuals), accepted only if the tool-using agent beats one-shot by ≥10 points accuracy at ≤3 tool calls/question, with the beyond-paper addition of a per-call cost penalty so the agent learns cheap-first escalation (stat lookup before video decode).
