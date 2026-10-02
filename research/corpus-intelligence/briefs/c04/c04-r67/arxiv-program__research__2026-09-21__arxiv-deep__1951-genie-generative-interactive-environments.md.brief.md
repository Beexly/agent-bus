# arxiv-program/research/2026-09-21/arxiv-deep/1951-genie-generative-interactive-environments.md
## What it is (1-2 sentences)
Google DeepMind's Genie paper (Bruce et al., 2024, arXiv:2402.15391): a three-component generative model (spatiotemporal video tokenizer + unsupervised Latent Action Model + MaskGIT dynamics model) scaled to 11B parameters on 30,000 hours of unlabeled gameplay video to produce frame-by-frame controllable virtual worlds with no action labels. Reader verdict is ADAPT, with the Latent Action Model identified as the portable gem for unsupervised play-concept discovery in football.
## Key metrics/methods (formulas where given, else "not specified")
- Video tokenizer: spatiotemporal (ST) transformers converting raw frames into discrete tokens z.
- Latent Action Model (LAM): encoder q(ã_{1:t} | x_{1:t}, x_{t+1}); decoder p(x̂_{t+1} | x_{1:t}, ã_{1:t}); VQ-VAE objective limits actions to a small discrete codebook |A|=8 (small vocab enforced for human playability/controllability); the decoder exists ONLY for the training signal and is discarded at inference, replaced with user actions.
- Dynamics model: MaskGIT-style masked-token prediction of z_{t+1} given (z_{≤t}, a_t); training = tokenizer first, then co-train LAM + dynamics.
- Scaling: analysis from 40M to 2.7B parameters, final model 11B; trained on 200,000+ hours of Internet gaming videos filtered to 30,000 hours; plus RT1 robot-video generality demo.
- No numeric quality metrics extracted (generative-interactive quality is qualitative + scaling-law based).
## Data sources named
- 200,000+ hours of publicly available Internet gaming videos (hundreds of 2D platformers), filtered to 30,000 hours; RT1 robot videos (action-free) for the generality demo. No code or public release mentioned in the paper (Google DeepMind).
## Findings (numbers and facts, not vibes)
- Scaling "gracefully" from 40M to 2.7B parameters → final 11B foundation world model.
- Controllable frame-by-frame generation from unlabeled video claimed as a first (Table 1: new model class vs world models/GameGAN which need actions or labels).
- Bonus result: latent actions learned from Internet videos enable inferring policies from unseen action-free videos of simulated RL environments.
- Limitations in file: |A|=8 codes suffice for platformers but football's action space is far richer (codebook sizing open); qualitative evaluation only; 11B parameters far beyond GSE's budget (though 40M–2.7B scaling suggests smaller models work); discovered codes may not align with football-meaningful concepts (could encode camera cuts).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Unsupervised action discovery over tracking/film data: the learned codebook becomes a play-concept vocabulary (route concepts, run schemes, blitz packages) instead of hand-engineered play-type labels — INFERENCE from the file's GSE spec; SCHEME (play/scheme concept discovery).
- Hierarchical LAM idea (coarse codebook |A|=8 run/pass-ish + fine codebook |A|=64 conditioned on coarse, mirroring play family → specific concept) — INFERENCE from the file's improvement experiment; SCHEME.
- The three-component architecture and 11B-scale replication — OTHER (file explicitly rejects pixel-level replication for GSE; structured-tracking LAM is the portable core).
## Engine-actionable? (yes/no + one-line what)
yes — Train a LAM on structured NGS tracking sequences (x, y, vx, vy per player) with codebooks {8,32,64,128} and audit code purity vs known play types; adopt the discovered codebook as the play-descriptor vocabulary for sequence models iff purity ≥80% on run/pass/play-action and downstream log-likelihood is within 5% of hand-labeled descriptors.
