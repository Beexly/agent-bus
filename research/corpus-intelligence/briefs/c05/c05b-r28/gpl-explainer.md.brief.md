# research/2026-09-28/orchestration/gpl-explainer.md
## What it is (1-2 sentences)
Plain-language engineering guide to GPL-family licensing for GSE (explicitly not legal advice), setting the safe-operating rules that gate every GitHub sweep verdict — the standing rule the coding agent and all repo ingestion work operates under.
## Key metrics/methods (formulas where given, else "not specified")
- Copyleft core: MIT/Apache-2.0/BSD = "do whatever, keep my name"; GPL = "if you ship it, you ship your source too" (copyleft = share-back obligation on distributed derivatives); GPL-2.0 vs GPL-3.0 behave the same for our purposes (3.0 adds express patent grant, anti-Tivoization; check "or later" vs version-pinned).
- AGPL-3.0: §13 closes the ASP loophole — network-served modified code must offer corresponding source; for a web product, running AGPL code server-side for user-facing output = owe the combined work's source. Verdict: method-only, full stop (PanopticPigskin case).
- LGPL: safe as unmodified dependency (dynamic linking / npm install); must NOT fork-and-vendor or copy src/ into the monorepo (derivative → share-back). Concrete case: `espn-fantasy-football-api` (LGPL-3.0-only) safe to npm-install unmodified; sweep found LGPL-3.0-only on the ESPN package.
- Dataset GPL: binds the compilation, not the facts inside — reading ECR ranks/snap counts out of GPL'd CSVs into our own schema is fine; committing their files verbatim or copying the generating workflows is not. Separate trap: repo license doesn't override upstream ToS (DynastyProcess ECR is scraped from FantasyPros — FantasyPros ToS is a separate question if ECR becomes load-bearing).
- Clean-room protocol: (1) read method, (2) close repo, (3) write design doc in own words (inputs/outputs/stages), (4) implement from doc, never side-by-side, (5) don't mirror file/function/stage structure or names, (6) provenance header: source, license, "independently implemented". Facts free (Feist v. Rural, 1991); expression not.
- 30-day cure: GPL-3.0 has a formal 30-day cure provision for first-time violators; SFC-style enforcement starts with comply-or-share letters.
- Risk ordering: AGPL contamination forcing engine-source publication would destroy the moat — strictest rule on AGPL.
## Data sources named
None (no datasets; references the github-nfl-sweep verdicts and DynastyProcess/nflverse-pfr dataset cases).
## Findings (numbers and facts, not vibes)
- 9 standing safe-operating rules: MIT/Apache/BSD/CC-BY-4.0 = free with attribution; LGPL = unmodified dependency only; GPL-3.0 code = study only, zero porting, no R→TypeScript line-by-line translation; GPL-3.0 data = facts into our own schema, never vendor files; AGPL-3.0 = method-only, never port, never server-side for user-facing outputs; no-license = all-rights-reserved, method only; provenance headers everywhere; upstream ToS checked separately when a source becomes load-bearing.
- Standing guidance: if any licensed item becomes structurally load-bearing for a commercial product, a one-hour IP-attorney review of that integration is cheap insurance; caught-early remedy = remove and clean-room rewrite before it ships or spreads.
- One-hour IP review trigger documented for load-bearing integrations.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: provenance headers and license gates are early-detection instruments — the paper trail that makes every license verdict defensible (protects the engine moat, which is the trust asset).
- OTHER: standing IP operating policy — governs every sweep verdict and all ingestion/wiring work; AGPL strictness rule protects GSE from source-publication exposure.
## Engine-actionable? (yes/no + one-line what)
Yes — enforce as gate policy: provenance headers on every ingestion module, zero GPL/AGPL code in the repo, AGPL never server-side, and a one-hour attorney review before any copyleft-licensed item becomes load-bearing on a revenue surface.
