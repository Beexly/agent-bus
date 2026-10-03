# docs/arxiv-program/research/2026-09-21/arxiv-deep/0296-sportsgrounder-proposalaided-interleaved-grounding-for-dense.md
## What it is (1-2 sentences)
Deep read of Li et al. (2026, arXiv:2608.07932v2, ACM MM '26): SportsGrounder, a proposal-aided interleaved-grounding architecture for dense sports video VQA — OV-DINO object proposals with domain-guided top-K selection, Interleaved Grounding Fusion (IGF) weaving bbox coordinates + visual semantics into global frame features, and Action-Aware Supervision (AAS) regularizing against language bias, trained with Mixed Preference Optimization (MPO). Verdict ADAPT — adapt the IGF design for NFL All-22 video Q&A ("who blew the coverage"), do not adopt the LMM weights.
## Key metrics/methods (formulas where given, else "not specified")
- IGF: hybrid entity token = text-embedding of bbox string concatenated with projected semantic vector; interleaved frame-by-frame H_vis = [Z_t^vit + Z_t^obj per frame], avoiding naive-fusion O((T(N+K*L_box))^2) explosion.
- Eq. 10: L_SFT = L_vqa + lambda*L_act (lambda=0.1); Eq. 12: L_p = -log sigma(tau log(pi_theta(y_c)/pi_ref(y_c)) - tau log(pi_theta(y_r)/pi_ref(y_r))); K=15 proposals, backbone InternVL3.5-2B, LoRA SFT 3 epochs + MPO 1 epoch.
- Metric: top-1 accuracy (%) on 4-option multiple-choice QA.
## Data sources named
Newly curated: SoccerNet (26k QA, 17 action categories, 25k train / 1k test) and FineSports basketball (24k QA, 24 action labels, 23k train / 1k test). No NFL data; no American football coverage.
## Findings (numbers and facts, not vibes)
- SoccerNet overall: SportsGrounder 51.8 vs MiniCPM-V 4.0 47.5, InternVL3.5-2B 43.7, Qwen3-VL-2B 42.3, VideoLLaMA3-2B 38.6; bbox prompt injection on MiniCPM-V 49.1 (below IGF's 51.8).
- FineSports overall: 53.6 vs MiniCPM-V 48.2, InternVL3.5 44.8. Subtasks SoccerNet: Action 42.5, Team 71.2, Jersey 33.4 (MiniCPM-V wins at 37.8 — OCR scales with params), Spatial 54.2.
- Ablation: IGF-only baseline 47.2 overall / 38.4 Action; +AAS -> 48.9 / 40.8 (+2.4 Action); +MPO -> 49.6, Spatial 53.0 (+4.4 vs baseline); full 51.8 / 42.5.
- Absolute accuracies 38-54% show dense sports VQA is hard — SOTA still wrong nearly half the time; production use requires human-in-the-loop.
- Prompt injection (bboxes as text) consistently degrades Action accuracy across baselines (temporal-attention distraction); visual-level fusion avoids this.
- No code link or released weights confirmed in the extracted text; conference is MM '26 (Nov 2026) — treat as preprint.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- IGF-style grounded video QA over All-22 could auto-tag plays / auto-generate analytical narration for telestrated breakdowns (COACHING — film-analysis content lane)
- ~50% accuracy ceiling + Jersey OCR 33.4% means any deployment must be human-in-the-loop (TRUST-SIGNAL — honest deployment gate)
- No football evaluation; NFL line-of-scrimmage bunching is denser than anything in the training data (OTHER — CV/film lane)
## Engine-actionable? (yes/no + one-line what)
Yes — pilot an NFL port: IGF architecture with open LMM backbone, domain vocabulary for football, NFL-VQA set generated from charting data (coverage ID, route ID, responsible defender); accept only if IGF beats prompt injection by >=5 pp on coverage/route ID AND action accuracy >= 55%.
