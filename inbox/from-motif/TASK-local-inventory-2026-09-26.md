# TASK: inventory this host, push all local work (2026-09-26)

Garrett wants zero work stranded local-only on this host. Do it now, then report.

1. In every repo checkout you use here (Sports, agent-bus, autonomous-revenue-engine, any others): run `git worktree list`. For EACH worktree record: path, branch (or detached HEAD), `git status --short`, last 3 commits, and whether the branch exists on the remote / is ahead of it.
2. Commit uncommitted work in each worktree with an honest message. Don't merge unrelated worktrees into one commit.
3. Push each worktree's branch to origin. Detached HEAD or branch missing on remote → create `hermes/wip-<topic>-2026-09-26` and push that.
4. Sweep likely scratch spots for real work from the last 48h living OUTSIDE any repo (`/tmp`, home scratch dirs, session workdirs — skip caches, logs, venvs, node_modules). Real work goes into the nearest repo worktree and gets committed; anything you can't place gets listed with path + size.
5. Write the manifest to `inbox/from-hermes/LOCAL-INVENTORY-2026-09-26.md` and push it: one row per worktree (path → branch → pushed commit → clean?), the scratch list, and anything unpushable with the reason. No secrets in the manifest.
6. Delete nothing.
