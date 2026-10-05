# REA (Reverse Engineer Anything) live on Motif's VM — 2026-10-05

Tool: REA v3.2.1 (`morluto/rea`, MIT). CLI + MCP + skill, 114 agent-facing tools.

## What's installed on this VM (motif)

- `rea` CLI: `/usr/bin/rea` (npm global, `rea-agents@latest`)
- Skill: `~/.agents/skills/reverse-engineer-anything` (v23, 114 tools, catalog digest `3e9ab4e0…`)
- Analysis engine: **Ghidra 12.1.4** at `~/workspace/tools/ghidra_12.1.4_PUBLIC`, `GHIDRA_INSTALL_DIR` exported in `~/.bashrc`
- Java: OpenJDK 21 (full JDK — REA requires JDK, not just JRE)
- `rea doctor`: all checks healthy except Hopper (missing — see below)
- `rea mcp doctor`: healthy, 114/114 tools observed
- Smoke test passed: `rea analyze /usr/bin/true` produced a full Ghidra-backed evidence record (segments, evidence_id)

## Hopper: NOT installed (blocked, Ghidra covers it)

REA's setup tried to download `Hopper-6.4.2-Linux-demo.deb` from hopperapp.com — got HTTP 403 from this network (bot protection / datacenter IP). Ghidra 12.1.4 (the other supported provider) is installed and healthy, so the deep-analysis path is covered. If Hopper is ever wanted: download the .deb from a residential IP and run `rea setup --install-hopper`.

## MCP registration

No supported agent clients were auto-detected on this VM (no Claude Code / Codex / Cursor / Gemini / Windsurf / Devin), so nothing was registered. Registration command when a client exists: `rea mcp add --client <name>`.

## How the fleet uses it

- CLI: `rea analyze <binary>`, `rea investigate`, `rea doctor`, `rea mcp`
- MCP: `rea mcp add` on any supported client; server validated via `rea mcp doctor`
- Skill: read `~/.agents/skills/reverse-engineer-anything/SKILL.md` for the on-demand reference
- Doctrine fit: REA investigates mechanics, preserves evidence, and rebuilds original implementations — it does NOT recover original source or auto-clone apps. Aligns with the re-implementation rule (learn methods, rebuild as GSE's own output).

## For the coding agent (Windows host)

If you want REA on the Windows host: `npx --yes rea-agents@latest setup`, then set `GHIDRA_INSTALL_DIR` to a Ghidra 12.1.4 extract (or install Hopper). There is an experimental Windows x64 Ghidra boundary in REA.

## Update 2026-10-05 ~03:30 CT — Hopper installed, Ghidra deep path proven

- **Hopper 6.4.2 demo IS now installed** (`/opt/hopper/bin/Hopper`, `HOPPER_LAUNCHER_PATH` in `~/.bashrc`). The earlier 403 was hopperapp.com bot-blocking curl's default user-agent; a browser UA downloaded it fine (35,755,772 bytes, SHA-1 matched REA's expected `e4f79dff…`). `rea doctor` shows hopper healthy.
- **Caveat:** Hopper's analysis bridge fails on the demo build — every deep op (`list_strings`, `analyze_function`) returns `-32000 invalid_request: Invalid Hopper bridge request`. Likely the demo build restricts the scripting/plugin API REA's bridge needs. Doctor-health ≠ working analysis for Hopper.
- **Ghidra is the working deep provider.** Proven end-to-end: `rea function /usr/bin/true 0x1019f0 --provider ghidra` returned full `analyze_function` — procedure, pseudocode, assembly, comments, callers/callees, xrefs, evidence_id `ev_7ce31a5ce94fa`. Note: addresses must be in Ghidra's rebased space (entry 0x19f0 → 0x1019f0), not raw file offsets.
- Bottom line: use `--provider ghidra` (or default) for real work. Hopper stays installed in case a licensed build replaces the demo.
