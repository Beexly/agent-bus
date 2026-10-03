# dfs/research/2026-09-25/creator-intel/creator-intel/README.md
## What it is (1-2 sentences)
A README documenting the Creator Intel Pipeline: a whole-account creator reverse-engineering system (per the Artem/JeV reel Garrett flagged on 2026-09-25) that pulls every reel from an Instagram creator, transcribes them, labels topic/hook/structure/CTA per sentence, and charts hook patterns against engagement. This is content-creator intelligence tooling, not sports analytics - relevant to the GSE social/creator-intel lane, not to engine modeling.

## Key metrics/methods (formulas where given, else "not specified")
- Pipeline CLI: `.venv/bin/python pipeline/run.py --creator USERNAME [--limit N] [--skip-steps download,transcribe,label]`
- Five stages: 1) fetch - `instagram-cli posts` (via galaxysportsnetwork) -> reel URLs, likes, comments, captions; 2) download - `yt-dlp` audio-only DASH track (~10x smaller than video, all Whisper needs); 3) transcribe - local `faster-whisper` base model (`models/faster-whisper-base/`), CPU int8; 4) label - text LLM via Garrett's AI/ML API key (reads `~/workspace/jev-ultrafast/.env`; curl-based to dodge the sandbox httpx/proxy bug) -> topic, hook_type, hook_text, structure, cta, per-sentence hook/setup/payoff/pitch tags; 5) chart - `work/<creator>/index.html` dashboard: hook pattern counts, avg likes per hook, clickable reel archive with sentence-level tag view.
- Outputs resumable: existing audio/transcripts/labels skipped on rerun.
- Sandbox quirks: `yt-dlp` needs `--no-check-certificate` (proxy MITMs cert chain); faster-whisper needs proxy env for model download but model already vendored in `models/` (transcription fully local); text-model HTTP via curl, not Python httpx (URL parsing bug under proxy).
- Reference: Artem's reel https://instagram.com/p/Ddov4NYPVdb/ (~8s screen demo; real content is the caption + on-screen dashboard: 178/447 scripts classified, $0.0680 Jev cost, hook categories Curiosity/Recognition/Result). Jev use-case playbook: `~/workspace/jev-ultrafast/docs/jev-use-case-playbook.md`.
- No formulas; numbers are pipeline reference stats, not research results.

## Data sources named
Instagram (via instagram-cli, authenticated as galaxysportsnetwork); yt-dlp; faster-whisper (local base model); Garrett's AI/ML API key text LLM (env at `~/workspace/jev-ultrafast/.env`); Artem Novitckii's Instagram reel (https://instagram.com/p/Ddov4NYPVdb/); Jev use-case playbook (`~/workspace/jev-ultrafast/docs/jev-use-case-playbook.md`).

## Findings (numbers and facts, not vibes)
- The pipeline exists and is documented as runnable: five stages (fetch, download, transcribe, label, chart) with a single CLI entry point and resume support.
- Per-reel labeling schema: topic, hook_type, hook_text, structure, cta, plus per-sentence hook/setup/payoff/pitch tags.
- Dashboard outputs: hook pattern counts, average likes per hook, clickable reel archive with sentence-level tag view.
- Reference benchmark from Artem's reel: 178/447 scripts classified, $0.0680 Jev cost, hook categories Curiosity/Recognition/Result.
- Authentication notes: instagram-cli runs via the galaxysportsnetwork account; the text-labeling LLM reads its API key from `~/workspace/jev-ultrafast/.env`.
- The only sandbox-specific facts: yt-dlp requires `--no-check-certificate`; faster-whisper model is vendored locally; HTTP to the text model must go through curl due to an httpx/proxy URL-parsing bug.
- No sports findings in this file.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None of the six core intelligence tags apply directly - this file is social/creator-intel tooling, not player/coach/scheme intelligence. Closest mapping:
- OTHER (creator-intel lane): serves Garrett's creator-intel program (the Artem/JeV method he singled out on 2026-09-25: "This is what I was talking about") - the pipeline operationalizes his directive to pull whole creator accounts, transcribe every reel, and chart hook patterns against engagement. If the hook-pattern outputs (avg likes per hook type, topic/CTA distributions) are ingested anywhere, they belong in the social/content-calibration lane, not the prediction engine.
- Note: the file confirms the creator-intel lane is tooled and runnable; any downstream hook-pattern findings would arrive as separate files worth briefing.

## Engine-actionable? (yes/no + one-line what)
**No** - this is pipeline documentation for creator content reverse-engineering; nothing in it feeds player projections, matchup modeling, or calibration. (The outputs it produces - hook patterns vs engagement - would be actionable for the social/content lane if briefed separately.)
