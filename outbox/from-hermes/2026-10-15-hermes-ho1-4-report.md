# Hermes — HO-1/2/3/4 report, 2026-10-15 (Windows host)

## HO-1 — DONE. Champion v3 artifacts land on `grok/walk-forward-2026-10-14`.
Commit `0c00d5c4d`, pushed and remote-verified (ls-remote confirms branch tip contains all
eight files):

- `research/gate_hunt_champion_v2_2026-10-15.json` — champion **v3 full frozen config**
  (sigma cascade |move|bin×rest2 → |move|bin → flat 13.45, min_prior 40, clip [10.5,16.5];
  atom_key spread_bin_fine × epa_diff<0.13 × vig_lvl{<2,≥2}; atom priors 90/50,
  fallbacks .075/.045) + holdout block (fit 2017–2023 n=1839 / score 2024–2026W5 n=623:
  champion 6.985187 vs flat 7.009786) + beat ladder + this-pass negatives.
- `research/gate_hunt_new_best_2026-10-15.json`, `research/gate_hunt_hybrid_cascade_2026-10-15.json` — v1/v2 configs.
- `references/gate-hunt-crps-constructions.md` — the full construction census 7.154021 →
  7.133199, refusals, multiplicity warning (~50 variants, true skill 7.134–7.139), freeze rule.
- `research/gate_hunt_champion.py` — champion v1 scoring code (runs through the location lock).
- **The three data planes the code reads, pinned on-branch** (this is what Motif could not
  reach): `research/espn_rows.json` (2,397 games real open→close movement, ESPN teamrankings
  harvest), `research/gatehunt_master2.json` (rolling prior EPA diff, 2,462 rows),
  `research/gatehunt_feat.json` (feature matrix).

Honest limitation, recorded in the census doc: **v3 has no standalone script on this host** —
the final variant chain ran interactively; the config JSON is the reproduction spec. Motif
can re-express it from config + planes (v1's script is the scaffold: same cascade, same
atom machinery, vig branch = the one delta) and re-run. Promotion state per your ruling is
unchanged until that re-run prints: v3 = CLAIMED [7.134, 7.139]; verified best = family 2
7.133199, DIAGNOSTIC; gate 7.099 uncleared (gap 0.0342); emission ZERO_OBJECT.

## HO-2 — BLOCKED ON HARDWARE, not on me. This host has no NVIDIA GPU.
Evidence: `nvidia-smi` not present; `Win32_VideoController` = **Intel(R) Iris(R) Xe Graphics**
(integrated). Openjev self-host needs ≥24 GB VRAM; this box has 0 NVIDIA VRAM. Free disk is
also 6–7 GB (99% used) — no room to even run a CPU-resident 18 GB model without swap death.
I will NOT fake a run or CPU-grind a broken proxy of the arms. **Action for fleet:** the
GPU host designation was wrong — name a real ≥24 GB box (Motif's VM has none either; does
Garrett have a rig elsewhere / rent for one afternoon?) or restate which host runs Laya+Verdict.
The on-disk CSV arms are otherwise fully specified (3,081 rows; frozen rule PASS ≥0.50 /
REJECT ≤0.35; deterministic baselines −0.0859 / −0.1249 recorded). Standing correction
acknowledged: DATABASE_URL gates only the optional completion pull, not the eval.

## HO-3 — Tonight's SEA@DEN (kickoff 19:15 CT), host-side status at 12:30 CT
(a) Settlement: canonical key `2026_06_SEA_DEN` confirmed present in `data/gse-dataset/games.jsonl`
(week=6 internal; ESPN display 7 noted display-only). Row exists with null lines — I am NOT
hand-writing tonight's spread_line/total_line into the file: the sign convention (mu=+spread_line,
away-team number, verified in sign_convention_authoritative.json) plus the pipeline's own close
capture is the safe path; Motif's archiver holds the hourly interim stamps under the same key.
Post-final my settlement probes (`settle_probe*.py`, ESPN finals verified this session for
event 401872995) join the watch. Close on file: SEA −2.5 / 40.5.
(b) Vision lane: the Space is healthy and READY (re-checked: `{"status":"ok","model":"yolov8n.pt",
"games_tracked":0}`; `/process-frame` answered with a correct schema 422 for a probe — the route
is live and expects frame+game_id+ts). **The box-side watcher is NOT armable yet:**
- watcher code: PASS — `Sports/watcher/watcher.py` md5-identical to origin/main (also to Sports-live copy).
- config: **FAIL — no config.json anywhere** (only `config.example.json`). Missing values
  (SET/MISSING, none printed): space_url SET-in-example-only→**MISSING** in real config;
  **space_token MISSING**; **ingest_secret MISSING**; **ingest_url MISSING (placeholder)**;
  scheduler_url MISSING; priority/mode config MISSING; **homography seed MISSING** → field
  positions will come back null tonight; detections/tracks still flow once armed.
- signed-in YouTube TV / NFL app session: no capture browser is running (only Chrome Remote
  Desktop host; no --remote-debugging-port listener on 9222). Cannot verify sign-in.
- ARM RULE per the order: **STOP — the blocking fixes are config values only Garrett can
  supply**: the Space API token, the Vercel ingest secret/URL, then launch the capture browser
  signed into YouTube TV before ~18:45 CT. Until config.json exists, the watcher cannot POST
  a single frame tonight. Disk (6 GB free) also flagged: a 720p capture night plus Space
  retries can hit the wall — say the word and I run the cleanup skill first.
- Time budget: 6h45m until kickoff. If config lands by ~18:00 CT I can run the token-match
  single-frame test and confirm games_tracked ≥ 1 before the arm window.

## HO-4 — Debt paid, evidence
`scripts/ops/test_mind_guardian.py` exists, committed (89dec598c), present on
**origin/grok/walk-forward-2026-10-14** and the galaxy-odds branch; re-ran live on this host:
**40 passed in 1.51s** (hermes-agent venv, pytest). The 36/36 claim is now 40/40 — four tests
were added after the commit message was written; both files are on the remote.
Week-label rule accepted: games.jsonl convention internal everywhere on this host from today;
external display labels never enter a key/stamp/join.

— Hermes, Windows host, 2026-10-15 12:35 CT
