# docs/research/2026-09-24/brev-skills-dossier/lane-2-video-audio.md
## What it is (1-2 sentences)
A 2026-09-24 read-only research dossier evaluating six NVIDIA/Brev video/audio AI skills (VSS summarize-video, ask-video, VSS launchable blueprint, DeepStream dev, DeepStream vision-model import, nemotron-speech) for use in GSE game-film operations and the Kit revenue engine, with a cost/cap-discipline review and a recommended sequencing plan.

## Key metrics/methods (formulas where given, else "not specified")
Not specified as formulas. Operational metrics quoted: VSS summarization up to 100× faster than manual review (NVIDIA claim); build.nvidia.com free tier community-reported ~40 RPM rate limit (quota UNVERIFIED); Brev base ~$0.04/hr platform/CPU pricing (per-GPU-hour rates UNVERIFIED); VSS launchable provisions 2× RTX PRO 6000 (AWS) or 8× L40S (Crusoe); remote-offload VSS profile needs only an 8GB-VRAM GPU (T4/L4 class); DeepStream YOLO+nvtracker pipelines run real-time on T4/L4/A10.

## Data sources named
NVIDIA-AI-Blueprints/video-search-and-summarization GitHub repo and skills tree; NVIDIA/skills repo (vss-summarize-video, vss-ask-video, nemotron-speech); NVIDIA/DeepStream monorepo; nvidia-ai-iot/deepstream_coding_agent; nvidia-riva/nemotron-speech-skills; build.nvidia.com hosted NIM endpoints (Nemotron-ASR, Parakeet-family ASR/TTS, VLMs, LLMs, embeddings); Brev launchables; docs.nvidia.com VSS documentation.

## Findings (numbers and facts, not vibes)
- Six skills assessed; none is generative-video, so no hard-video-rule exclusions needed for the assigned set.
- vss-ask-video rated strongest GSE fit: natural-language visual Q&A grounded in actual pixels via VLM ("what coverage is the safety in?") to shortlist clips and verify clip contents before posting.
- vss-summarize-video produces timestamped narrative summaries of recorded clips via the LVS microservice, with HITL gating on the LVS path (no HITL on the VLM fallback path); explicitly does NOT do live RTSP captioning.
- Flagged a real doc bug: the skill catalog describes vss-ask-video as calling the agent's /generate endpoint, but the actual SKILL.md has a hard rule "never call /generate" — NVIDIA's docs were being corrected (Sep 2026).
- Nine missed-but-relevant skills flagged, including vss-search-archive (natural-language search over video archives, called the single highest-value VSS skill for GSE) and vss-manage-video-io-storage (clip extraction for the telestration pipeline).
- Recommended sequencing: (1) nemotron-speech immediately via free build.nvidia.com endpoints (commentary transcription, voice-DM transcription, no GPU), (2) VSS base profile PoC on smallest Brev GPU with remote-offload VLM, (3) DeepStream detection/tracking pipeline hardening on T4/L4 spot instances, (4) skip 8-GPU local topologies and the RTX PRO 6000 launchable except short sandbox sessions.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- vss-ask-video "what coverage is the safety in?" / "what formation is the offense in?" visual Q&A over game film — SCHEME
- Player/ball detection+tracking on game film via DeepStream (nvinfer YOLO → nvtracker), per-frame tracks for automated stat extraction (routes, separation, yards-after-catch proxies) — OTHER (tracking-data engine inputs)
- Broadcast commentary transcription + coach/player press-conference mining for injury/status language — COACHING (injury/status signals), OTHER (content ops)
- Sortformer diarization to separate play-by-play from color commentary for cleaner quote extraction — OTHER
- GroundingDINO/OWL-ViT zero-shot detectors ("find the quarterback") inside the clip pipeline — OTHER
- Clip-bounding pipeline: automated play segmentation and timestamped event lists feeding telestration prep and X content-op packets — OTHER

## Engine-actionable? (yes/no + one-line what)
Yes — stand up the VSS search+Q&A stack on the cheap remote-offload profile to auto-segment and query archived game broadcasts (coverage/formation identification, clip shortlisting) for the prediction engine's tracking lanes and content ops.
