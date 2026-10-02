# docs/arxiv-program/research/2026-09-21/arxiv-deep/0335-dreampose3d-hallucinative-diffusion-with-prompt-learning.md
## What it is (1-2 sentences)
Diffusion-based 3D human pose estimation from monocular video that resolves "intent ambiguity" (similar 2D motion from different actions, e.g. waving vs. throwing) by inferring an action intent prompt from the 2D sequence via a vision-language model, modulating joint kinematics through a learned affinity matrix, and enforcing temporal coherence with a "hallucinative" multi-frame pose decoder during training. Validated on broadcast baseball footage (MLBPitchDB); the ledger verdict is ADAPT as the 2D→3D front-end primitive for GSE's video lane.
## Key metrics/methods (formulas where given, else "not specified")
- Prompt: P = ϕ(E(X)); context Ec = MLPp[CLIP(tk(P))] (frozen CLIP, 77 tokens partitioned 40 subject / 37 action).
- Denoiser: Ẑ = D(Yt, X, Ec, t); affinity matrix Aj = ((AL + AG) + (AL + AG)^T)/2 (AL local hand-crafted, AG global learnable); SRE output ZS = MultiHead(Qs, Ks, Vs) + XA + Ec, XA = Ct·Aj.
- Total loss: Lnet = L′3D + λact Lact + λBL LBL; hallucinative loss L′3D = Σ_{k} λ_{f3D+k} L3D_{f+k} over n consecutive poses, weights decay 1/(1+|k|).
- DDPM forward: q(Yt|Y0) = √ᾱ Y0 + ε√(1−ᾱ); two-stage curriculum n=1 → n=3 (n=3 optimal).
- Training: PyTorch, AdamW, lr 1e-5, batch 4, 100 epochs on 3× A6000 (~2 days); N=243-frame sequences.
## Data sources named
Human3.6M (3.6M images, 11 subjects, train S1/S5/S6/S7/S8, test S9/S11); MPI-INF-3DHP (>1.3M images); MLBPitchDB (30,000 images, 150 pitch sequences from diverse MLB broadcast games, 30 fps, motion blur + occlusions); 2D inputs from CPN/HRNet/ViTPose/stacked-hourglass detectors.
## Findings (numbers and facts, not vibes)
- Human3.6M: 29.5 mPJPE / 23.4 P-mPJPE (CPN) vs. prior SOTA FinePOSE 31.9/25.0 — margins −2.4/−1.6 mm (7.5%/6.4% relative); GT 2D: 15.9/12.2 vs. 16.7/12.7; wins on all 15 action classes, largest on Directions −3.6, Sit −3.2, Phone −2.7 (OTHER).
- MPI-INF-3DHP: PCK 99.1 (+0.2), AUC 84.5 (+0.1), mPJPE 18.9 (−0.3) vs. KTPFormer — SOTA on all three (OTHER).
- MLBPitchDB (broadcast baseball): GT 2D 21.8 vs. 23.9 (−2.1, 8.7%); ViTPose 53.5 vs. 57.3 (−3.8, 6.6%) — strong robustness on motion-blurred, occluded broadcast footage (OTHER).
- Ablations: full model 29.5/23.4 vs. denoiser-only 37.4/30.7; removing APL → 31.9/24.9; removing SRE → 32.2/24.8; removing HPD → 30.1/24.2 — every module contributes; network fails to converge without L′3D (OTHER).
- n=3 optimal (29.5/23.4) vs. n=1 (30.1/24.2), n=5 (29.9/23.7), n=7 (30.0/23.9) (OTHER).
- Prompt quality: no-CLIP 31.9/24.9; random prompts 31.2/24.0; learned prompts 29.5/23.4 — CLIP helps (+0.7), relevance adds (+1.7/+0.6) (OTHER).
- Diffusion inference is slow (60.67 s vs. 85.62 s for the hallucinator-free variant; hallucinative design is 24.95 s faster and −1.2/−0.7 mm better) (OTHER).
- TRUST-SIGNAL: occlusion ceiling — the authors' own appendix (Figure 9) shows persistent misalignment on self-occluded joints; NFL pile-ups and line-of-scrimmage occlusion are worse than tested cases.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: The "intent ambiguity" concept is the formal version of GSE's play-action problem — PA and dropback passes share 2D kinematics over short windows; the APL-style intent classifier, retrained on an NFL intent vocabulary (run/pass/PA/screen/RPO/scramble/sack/punt/kick), directly attacks that ambiguity.
- SCHEME: Proposal to condition the diffusion on nflverse play context (down, distance, field position, personnel) as the prompt rather than action names — play context is a stronger intent prior (3rd-and-12 shotgun constrains the pose distribution more than the word "Passing"). INFERENCE: this would be a football-native pose lifter with no published equivalent if it works.
- COACHING: Temporally coherent 3D pose sequences from broadcast film enable QB mechanics analysis (throwing motion, drop depth) and would sit between the 2D detector stage and event-spotting in the film pipeline.
- OTHER: Input primitive for the video lane — complements ledgers 0332/0333 (2D poses → intent-conditioned 3D lift → unified multi-entity graph → event spotting). TRUST-SIGNAL: single-person method (22-player NFL scenes need tracking/association first); no football data (closest sport is baseball pitching); compute needs distillation for real-time; no 3D NFL pose ground truth exists.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt as GSE's intent-conditioned 2D→3D pose lifter for broadcast film: build an NFL intent vocabulary + train on broadcast clips, gated on beating the intent-free variant by ≥2 mm mPJPE and cutting trajectory jitter ≥15% on held-out broadcast sports footage.
