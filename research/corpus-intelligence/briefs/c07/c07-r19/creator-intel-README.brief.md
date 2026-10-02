# dfs/research/2026-09-25/creator-intel/creator-intel/README.md
## What it is (1-2 sentences)
Pipeline README for the Creator Intel pipeline: whole-account Instagram reel reverse-engineering — fetch reels via instagram-cli, download audio with yt-dlp, transcribe with local faster-whisper, label hook/structure/CTA per sentence with a text LLM, and chart patterns against engagement in an HTML dashboard.
## Key metrics/methods (formulas where given, else "not specified")
Per-sentence hook/setup/payoff/pitch tags; hook pattern counts; average likes per hook; clickable reel archive with sentence-level tag view. No formulas. Tooling: `instagram-cli posts` (via galaxysportsnetwork), yt-dlp audio-only DASH (~10x smaller), faster-whisper base model (CPU int8, vendored), curl-based text-model HTTP to dodge a sandbox httpx/proxy bug, `--no-check-certificate` for yt-dlp under proxy MITM.
## Data sources named
Instagram reels (via instagram-cli with the galaxysportsnetwork account); Artem's reel (instagram.com/p/Ddov4NYPVdb — ~8s screen demo; on-screen dashboard: 178/447 scripts classified, $0.0680 Jev cost, hook categories Curiosity/Recognition/Result); Jev use-case playbook at `~/workspace/jev-ultrafast/docs/jev-use-case-playbook.md`; Garrett's AI/ML API key (`~/workspace/jev-ultrafast/.env`).
## Findings (numbers and facts, not vibes)
- Five-stage resumable pipeline: fetch → download → transcribe → label → chart; existing audio/transcripts/labels skipped on rerun.
- Reference data point: Artem's reel demo showed 178/447 scripts classified, $0.0680 Jev cost, hook categories Curiosity/Recognition/Result.
- Sandbox quirks documented: yt-dlp needs `--no-check-certificate`; faster-whisper model vendored in `models/` (transcription fully local); text-model HTTP via curl, not httpx.
- A separate creator-pipeline lane (full-account scrape → transcribe → classify) was PAUSED by Garrett ("forget jev for now") per the youtube-builder-research README status note — INFERENCE from cross-file status, flagged rather than asserted.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Hook classification (Curiosity/Recognition/Result) mapped to engagement — OTHER (content/creator-intel lane, sports-excluded per Signal Origin boundary)
- Per-sentence label + engagement charting pattern — OTHER (methodology for creator analysis)
## Engine-actionable? (yes/no + one-line what)
No — content-marketing lane (creator reels/hook analysis), not the GSE engine; paused by Garrett; no prediction methodology.
