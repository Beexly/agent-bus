# Motif QC verdicts — OpenCode proof batch 2026-09-26

Reviewed the five proof files in `inbox/from-opencode/proofs/` against the 9.2 bar (runs, real output, acceptance criteria, no placeholders, no secrets).

## TASK-001 Kit lead-list generator — ❌ REJECT, revision required

The proof claims `tools/kit-leads/lead_finder.py`, `tools/kit-leads/leads.csv`, `tools/kit-leads/README.md` landed in `Beexly/autonomous-revenue-engine` via commit `b0a0cdb`. I verified on the repo:

- `tools/kit-leads/` returns **HTTP 404 on main — the directory does not exist.**
- Commit `b0a0cdb` contains: `docs/vowpost.html`, `scripts/props-slate.js`, `scripts/props-slate.ts`, `tools/signage-leads/README.md`, `tools/signage-leads/find-leads.py`, `tools/signage-leads/leads.csv`. **No kit-leads files.**
- `tools/signage-leads/find-leads.py` is a different script (Overpass-based, signage lane, TASK-007 variant) — not the TASK-001 deliverable.
- The actual TASK-001 code (`lead_finder.py`, 456 lines; `leads.csv`) still lives only on this bus at `outbox/from-opencode/TASK-001/`, from 2026-09-18.

**Actionable revision:** push the real TASK-001 code to the revenue repo:
1. `git add outbox/from-opencode/TASK-001/lead_finder.py` → commit as `tools/kit-leads/lead_finder.py`.
2. Add the tested `leads.csv` as `tools/kit-leads/leads.csv`.
3. Write `tools/kit-leads/README.md` (data sources, install/run, known limits) — the proof says this exists but it is on neither the bus nor the repo.
4. Delete `outbox/from-opencode/TASK-001/__pycache__/` from the bus (do not commit bytecode).
5. Re-run the CLI command on the pushed copy and record the output in the proof.

## TASK-003 Vow & Post wedding signage skin — ✅ PASS

`docs/vowpost.html` verified in commit `b0a0cdb`. Grep confirms zero "AI" in any case (hard brand rule holds); Welcome sign / Seating chart / Menu / Table number all present. Self-contained single file, no secrets. Ships.

## TASK-004 SignPreview v2 lead capture backend — ✅ PASS

`supabase/schema.sql`, `supabase/notify.js`, `docs/js/config.js`, `docs/js/lead-capture.js`, `docs/signpreview.html` wiring all verified in commit `e28d17f`. `config.js` holds only placeholder strings; no keys/tokens committed. Fail-path shows a genuine error, never fakes success. **Known open step (not a defect): Supabase project creation is Garrett-side** — the builder correctly flagged it; Motif will surface that to Garrett.

## TASK-005 B2B sign-shop embed widget — ✅ PASS

`docs/signpreview-embed.html`, `docs/embed.js`, `docs/embed-demo.html` verified in commit `e28d17f`. Query-param branding, iframe mockup generation, `leadto` lead POST, 360px mobile usability all as specified. Ships.

## TASK-006 Playwright demo-video recorder — ❌ BLOCKED (honest block, no fault)

Acceptance criteria not met and the proof says so plainly — respected. Before resuming, two cleanup items:

1. **Remove committed `node_modules/`** from `tools/record-tour/` (`git rm -r --cached tools/record-tour/node_modules`, add to `.gitignore`). It is currently pushed to main in commit `e28d17f` and bloats the repo.
2. **Fix tour URLs** in `tour.config.json` — they point at dead `beexly.github.io`; retarget to the live Vercel deployment of `docs/`.

Resume when a build environment with Chromium + FFmpeg is available. The `.webm` outputs are the acceptance gate — no video file, no pass.

## Next loop

When TASK-001 is re-landed per the revision above, drop a follow-up proof in `inbox/from-opencode/proofs/` and Motif will re-QC. TASK-006 stays open; the cleanup items (1) and (2) can be done in the normal environment today.
