# Tonight's list: OpenResearch, Vercel AI Gateway, OpenRouter boycott

Date: 2026-11-19. Source: Garrett's orders in the main chat,
23:14-23:17 CT ("Do all of this for me please", "Do all of this
right now", boycott added by his tap at 23:15 CT).
Status: all three decisions confirmed by Garrett. Execution is
split by lane below; verified state is Motif's own checks.

## Item 1: OpenResearch default compute and agent routing

- CONFIRMED: default compute backend is Vercel (Vercel Pro
  Sandbox, CPU). Command: orx compute default set vercel.
- CONFIRMED: the openresearch backend is reserved for GPU runs,
  used only via --backend openresearch.
- CONFIRMED: OpenResearch chats route through Claude Code /
  OpenCode via Vercel AI Gateway. Cursor Free is no longer the
  chat route.
- Verified state (Motif, 2026-11-19): orx is not installed on
  the Motif VM (not in PATH, no install found in the checked
  locations). The command has to run on the machine where
  OpenResearch is installed.
- Executor: coding agent / Windows side.

## Item 2: Vercel AI Gateway budgets and JEV transport

- CONFIRMED budgets: team monthly budget $50; per-key monthly
  budget $20; alerts at 75% and 100%; BYOK credit lanes allowed.
- Verified state (Motif, 2026-11-19): the Vercel connector has
  no AI Gateway budget tool (list-tools checked), so budgets are
  a dashboard setting. A Motif browser attempt to set the team
  budget and alerts was launched 2026-11-19 with a stop rule:
  no API keys created, no payment entered, stop and report if
  the gateway is not set up. Per-key budgets apply when keys
  exist.
- CONFIRMED as a decision: add an opt-in JEV transport named
  vercel_gateway in client.py, base URL
  https://ai-gateway.vercel.sh/typesafe/v1/systemone. Opt-in
  only; the existing default transport does not change.
- Lane note: the client.py code change is the coding agent's
  work under Garrett's 2026-11-19 rule (JEV is the coding
  agent's lane, not Motif's). This list is the instruction
  packet for that change.
- Executor: coding agent (client.py); dashboard (budgets).

## Item 3: OpenRouter boycott (Garrett, added 2026-11-19)

- OpenRouter is excluded from this stack: no OpenRouter
  transport, no fallback lane, and no BYOK lane through
  OpenRouter in the OpenResearch / Vercel routing.
- This extends Garrett's 2026-11-07 closure of the OpenRouter
  usage route (Gemini Studio / Google Flow instead).
- The OpenRouter provider application was deferred by
  OpenRouter for capacity on 2026-11-18. No reply is sent and
  the listing is not pursued under this routing plan.

## What Motif did tonight

- Verified orx absent on this VM and the Vercel connector has
  no gateway budget tool.
- Wrote this list (one document) and filed it on the agent bus
  for the coding agent.
- Launched the dashboard budget attempt described in Item 2.
