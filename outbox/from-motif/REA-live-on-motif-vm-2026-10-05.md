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
