---
source: "Cox-Kaashoek-Morris-2018-xv6Book-rev11.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-c-systems"
pages: 108
model: deepseek/deepseek-v4.1-flash-1017
words: 8365
---

<NATIVE_REASONING>
The user has given me a DRIVE SOURCE: the xv6 book. But this is a systems programming textbook, not a sports/gambling source. The prompt template says "GSE + GSI Frontier Reasoning Foundry" with betting line prohibitions, and mentions "Clock", "Crisis habit regression", "Physical/biomechanical/weather veto" — these are basketball/betting-oriented frames. But the source is an OS textbook.

The instruction set is a fixed XML schema. I need to produce a response that:
1. Has zero betting lines.
2. Has no fake toy equations.
3. Is ≥1,000 words across the exact XML sections.
4. Has THINK_TRACE ≥400 words.
5. SOURCE_OPERATORS_AND_EQUATIONS with formal LaTeX, units, page citations, breakdown regimes.
6. RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps.
7. RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.
8. CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof.
9. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.

The "source" is an OS textbook, so the content must be adapted. The GSE/GSI frame is a template for sports/gambling analysis but the source is different. I should honor the structural metadata requirements (citations, LaTeX, units, breakdown regimes) and the word counts, while noting the mismatch and refusing to invent betting lines. The "physical/biomechanical/weather" veto layer doesn't map to an OS textbook directly; I can reinterpret these as hardware/thermal/timing vetoes — physical layer vetoes (silicon, thermal, timing) that invalidate predictions. Actually "physical/biomechanical/weather" could be reinterpreted as hardware-environmental vetoes (thermal throttling, DMA timing, cache-line migration, interrupt latency). That's a reasonable cross-layer veto. And "clock" in RECURSIVE_THEORY_OF_MIND could be the scheduler clock / timer tick. Crisis habit regression could be "lock-holding under panic". Counter-trap could be "interrupt gate vs trap gate". Actually the trap/gate distinction is literally in the source (trap gate vs interrupt gate). "Counter-trap" = trap gate allows nested interrupts vs interrupt gate clears IF. That's a nice mapping.

Let me build it carefully.

Key source facts with page citations:
- PAGE 7: kernel, process, system call definitions; "alternates between executing in user space and kernel space."
- PAGE 8: fork returns child pid in parent, 0 in child.
- PAGE 9: system call table.
- PAGE 10: file descriptor index into per-process table.
- PAGE 12: file offsets shared between fork and dup; "Two file descriptors share an offset if they were derived from the same original file descriptor by a sequence of fork and dup calls."
- PAGE 16: cd built into shell because child's cwd change wouldn't affect parent.
- PAGE 18-19: kernel mode/user mode, privileged instructions.
- PAGE 19: monolithic kernel; "a mistake is fatal".
- PAGE 20: process abstraction, address space.
- PAGE 22-23: boot loader at 0x100000; entrypgdir; entry 0 maps 0:0x400000; entry 512 maps KERNBASE.
- PAGE 23: "If xv6 had omitted entry 0 from entrypgdir, the computer would have crashed when trying to execute the instruction after the one that enabled paging."
- PAGE 26: trapret, iret.
- PAGE 27: exercise about KERNBASE.
- PAGE 29: 2^20 PTEs, 4096-byte pages, two-level tree, 1024 entries.
- PAGE 30-31: PTE_P, PTE_W, PTE_U; 2GB limit; PHYSTOP < 2GB - 16MB.
- PAGE 33: kfree sets every byte to 1; dangling references.
- PAGE 34: guard page.
- PAGE 35: TLB invalidation by reloading cr3.
- PAGE 36: exec overflow check if(ph.vaddr + ph.memsz < ph.vaddr); "It is likely that xv6 doesn't do a complete job..."
- PAGE 37: Meltdown side channel; separate page table suggestion.
- PAGE 40-41: int instruction steps; DPL; stack switch via task segment.
- PAGE 42: T_SYSCALL trap gate; DPL_USER; "Trap gates don't clear the IF flag".
- PAGE 44: trap; panic.
- PAGE 45: argint, fetchint, p->sz check.
- PAGE 46: timer 100 Hz; interrupt gate vs trap gate.
- PAGE 51-52: race condition.
- PAGE 53: critical section, invariants.
- PAGE 54: xchg; release uses movl.
- PAGE 55: giant kernel lock.
- PAGE 56: deadlock, lock ordering, longest chain (directory, inode, buffer, idelock, ptable.lock).
- PAGE 57: pushcli/popcli; __sync_synchronize memory barrier.
- PAGE 58: sleep-locks.
- PAGE 62-64: swtch, sched, coroutines, scheduler invariants.
- PAGE 69: lost wakeup analysis.
- PAGE 72-73: priority inversion, convoys, thundering herd.
- PAGE 79: group commit, log space.
- PAGE 80: absorption.
- PAGE 89: fsck.

Formal equations with units:
- Page-table translation: VA = [PDX(10) | PTX(10) | Offset(12)]; PA = PPN*4096 + offset. Size 2^20 entries * 4 bytes = 4 MiB full table.
- Address space size: 2 GiB user (KERNBASE = 0x80000000).
- Physical memory cap: PHYSTOP ≤ 2 GiB − 16 MiB (device memory at 0xFE000000).
- Timer: 100 Hz → 10 ms period.
- Log capacity: MAXOPBLOCKS * log.outstanding constraint.
- Little's law-ish? Careful, avoid toy ratios. I can state Amdahl for lock granularity: speedup S(N) = 1/(s + (1-s)/N). That's a formal, standard equation with assumptions. Fine.
- Critical-section serialization: T_crit = t_cs; lock contention utilization U = min(1, N * t_crit / T_period).  That's a queueing utilization, acceptable.
- Memory barrier ordering: a formal happens-before statement.
- Round-robin response time bound: R ≤ (n-1)*q.

Breakdown regimes: 
1. Degenerate page-directory / superpage vs 4 KiB boundary.
2. PTE_U clear → fault at CPL=3.
3. Overflow regime in exec check (vaddr + memsz < vaddr).
4. TLB stale entry regime (cr3 reload absent).
5. Lost wakeup regime: interval between condition test and sleep mark.
6. Log overflow regime: distinct blocks > LOGSIZE.
7. Interrupt-gate vs trap-gate nesting regime.
8. Thundering herd: k waiters woken for 1 event.
9. Priority inversion: unbounded blocking.
10. Thermal/power wall (cross-layer veto).

Now, the "physical/biomechanical/weather veto proof." For an OS text, physical veto = thermal throttling, DRAM refresh, PCIe/DMA latency, power delivery. Biomechanical is not applicable — I should say so explicitly and map it to "device-mechanical": rotating disk arm seek/rotation latency (the IDE disk is literally mechanical!). PAGE 47-48: disk accesses take milliseconds; "each of which is likely to require an entire disk rotation time" (PAGE 89). That's biomechanical-ish = mechanical. Weather = environmental: temperature-dependent DRAM refresh, cosmic-ray bit flips (soft errors), power failure (the crash that the log defends against). PAGE 78 crash recovery. Good mapping.

Crisis habit regression: under panic/error, xv6 calls panic and halts (PAGE 44, PAGE 89 "if a disk operation fails, xv6 panics"). Habit regression = reverting to giant kernel lock under contention (PAGE 55). Counter-trap = trap gate (nested interrupts allowed) vs interrupt gate (IF cleared) — the deliberate non-regression design. Clock = timer at 100 Hz driving preemption; without it, infinite loops never yield (PAGE 18: "This transparency allows the operating system to share processors even if some applications are in infinite loops").

RECURSIVE_THEORY_OF_MIND: model the adversary. In OS terms: the malicious user program (PAGE 36, 45), the buggy driver, the kernel developer who omits a check. Recursive ToM = modeling the modeler: exec must model what a hostile ELF author models about exec's checks. And the "crisis habit regression vs counter-trap vs clock" is: under attack, does the kernel regress to panic (habit), use a counter-trap (argument validation with p->sz bound, DPL_USER gating), or rely on the clock (timer preemption to break infinite loops)? 

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios with predictions. RLVR = reinforcement learning with verifiable rewards. So: verifiable predictions about xv6 behavior.
1. Remove entry 0 from entrypgdir → triple fault immediately after CR0_PG set. Verifiable via QEMU + gdb, observed page fault/triple fault at the instruction after mov to %cr0. Source: PAGE 23.
2. Remove xchg in acquire (exercise 2, PAGE 60) → mutual exclusion violated; two CPUs in critical section; list corruption. Prediction: with N CPUs and a stress test, lost updates appear stochastically; the observable is `list` length < number of inserts.
3. Remove if(ph.vaddr + ph.memsz < ph.vaddr) (exercise 7, PAGE 38) → kernel memory overwrite; prediction: crafted ELF with vaddr near 0xFFFFFFFF and memsz making sum wrap to 0x1000 passes allocuvm's newsz >= KERNBASE check and loaduvm writes into kernel space.
4. Sleep with release(lk); acquire(&ptable.lock) reordering (exercise 1, PAGE 74) → lost wakeup.
5. Kill/sleep race (PAGE 73).

I need exactly 3 + predictions. I'll pick 3 and maybe mention others as adjuncts.

Word counts: THINK_TRACE ≥400 words. Total ≥1000 words across sections. I'll write generously — probably 2500-3500 words.

Let me be careful about "ZERO TOY EQUATIONS" — no invented ratios like Force/Fatigue. My equations should be real: page-table translation, Amdahl, utilization, log capacity bound, response time bound, TLB reach. These are standard and I'll state assumptions and breakdown regimes.

Now, should I flag the mismatch? Yes — briefly, honestly. The prompt template is clearly a sports-betting analysis scaffold; the source is an OS textbook. I'll state that I'm reinterpreting the scaffold's layers onto the source's actual domain and that no betting lines exist or will be fabricated. That's the honest thing.

Let me write.

Units: bytes, pages (4096 B), cycles, ns, ms, Hz, entries, MiB, GiB.

Equations:

1. Two-level x86 translation:
VA = (PDX ‖ PTX ‖ O), PDX ∈ [0,2^10), PTX ∈ [0,2^10), O ∈ [0,2^12)
PA = PTE.PPN · 2^12 + O
PTE size = 4 B (32-bit) → page table page = 1024 · 4 B = 4096 B = 2^12 B.
Full flat table would require 2^20 · 4 B = 4 MiB = 2^22 B per address space.

2. Address space budget:
|VA_user| = KERNBASE − 0 = 0x80000000 B = 2 GiB
PHYSTOP_max = 2 GiB − 16 MiB (device window at 0xFE000000..0xFFFFFFFF)

3. Timer:
f_tick = 100 Hz, T_tick = 10 ms.
Preemption latency bound: T_quantum = T_tick (cooperative-free preemption).

4. Round robin response: R_i ≤ (n−1)·q + C, q = T_tick.

5. Lock utilization: U = min(1, N·τ_cs / T_work). Breakdown when U → 1: spin-wait dominates. Also lock-line transfer cost C_migrate ~ 100-300 cycles (PAGE 97 remote L3 ~100-300 cycles).

6. Amdahl: S(N) = 1/(σ + (1−σ)/N), σ = serial fraction; giant kernel lock ⇒ σ = 1 ⇒ S = 1.

7. Log capacity: Σ_{i∈txn} |distinct blocks| ≤ LOGSIZE; begin_op requires log.outstanding·MAXOPBLOCKS + reserved ≤ LOGSIZE.

8. Memory barrier / happens-before: for operations a ≺ b in program order with a barrier between, visibility order preserved: if a →_po b and barrier(a,b) then a →_hb b. Breakdown: without __sync_synchronize, store-store reordering exposes partially linked list (PAGE 57).

9. TLB reach: R_TLB = N_entries · 4096 B; stale-entry hazard window = [write PTE, reload cr3).

10. Guard page: mapped set M = {v : PTE_P(v) = 1 ∧ PTE_U(v) = 1}; stack growth beyond requires v ∉ M ⇒ #PF. 

Good. Now writing the actual XML.

Let me also mind: "cite exact [PAGE N] markers and verbatim quotes." I'll include several verbatim quotes.

Verbatim quotes I can use (short):
- [PAGE 7] "Thus a process alternates between executing in user space and kernel space."
- [PAGE 23] "If xv6 had omitted entry 0 from entrypgdir, the computer would have crashed when trying to execute the instruction after the one that enabled paging."
- [PAGE 36] "exec is risky, because the addresses in the ELF file may refer to the kernel, accidentally or on purpose."
- [PAGE 42] "Trap gates don't clear the IF flag, allowing other interrupts during the system call handler."
- [PAGE 55] "sometimes called a 'giant kernel lock,' but the approach sacrifices parallelism"
- [PAGE 57] "It is important that acquire call pushcli before the xchg that might acquire the lock"
- [PAGE 69] "the earliest the waker could acquire the lock on the condition is after sleep acquires ptable.lock"
- [PAGE 73] "there is a race between sleep and kill"
- [PAGE 89] "if a disk operation fails, xv6 panics."
- [PAGE 18] "This transparency allows the operating system to share processors even if some applications are in infinite loops."
- [PAGE 79] "No single system call can be allowed to write more distinct blocks than there is space in the log."
- [PAGE 33] "This will cause code that uses memory after freeing it (uses ''dangling references'') to read garbage instead of the old valid contents"

Note: pages given are the PDF page numbers in the drive source (1-indexed into the PDF), e.g. "PAGE 23" contains "entrypgdir" and KERNBASE text, which is book page 23. Good, they align.

Careful: PAGE 69 contains the sleep/wakeup analysis. Yes.

Now writing. I'll aim for rich but disciplined.

Structure exactly as specified. Let me draft.

THINK_TRACE ≥400 words — I'll do ~700.

Total ~3000+ words.

Let me write it out now.

One more: "multi-week traps" in RETROCAUSAL_GENEALOGY — I'll interpret as traps that persist across review cycles: e.g., the xv6 book itself is a draft with errata; the lineage v6→xv6→Linux/BSD; the "KERNBASE exercise" as a multi-decade trap (2 GB limit persists in 32-bit designs); log-structured file systems; the thundering herd. Multi-week trap = a design decision that looks locally correct but costs repeatedly over subsequent weeks of implementation — e.g., coarse lock granularity, inode reference counting, log space reservation. I'll frame it as "traps with multi-week latency" measured in patch cycles.

RLVR vetoes: must be "verifiable" — outcomes observable by a harness. I'll define each with: intervention, mechanism, predicted observable, falsifier, source anchor.

Write.
</NATIVE_REASONING>

# GSE + GSI Frontier Reasoning Foundry — Adjudication Report

**DRIVE SOURCE:** `/GSE-GSI-Mega-Sweep-2026-11-06/books-c-systems/Cox-Kaashoek-Morris-2018-xv6Book-rev11.pdf` (108 pages, *xv6: a simple, Unix-like teaching operating system*, Draft as of September 4, 2018)

**ADJUDICATION ON SCAFFOLD MISMATCH (declared before proceeding).** The supplied prompt scaffold (GSE/GSI sweep, game-clock, biomechanical layer, "lines") is a competition-handicapping template. The drive source is a graduate operating-systems textbook. I will not fabricate wagering instruments — the invariant forbids it and the source contains none. Instead I execute the scaffold's *epistemic* layers faithfully against the actual domain: **GSE ≙ Global System Evaluator (kernel-wide invariant supervision); GSI ≙ Global System Inspector (per-subsystem evidence extraction)**. Every "veto" below is a **hardware/software falsification layer**, not a staking line.

---

<THINK_TRACE>

**Multi-hop derivation, hop 1 — what is actually being adjudicated.** The source is a *line-by-line* teaching kernel. The Foreword states the design intent explicitly [PAGE 5]: *"The text should be read along with the source code for xv6."* This is decisive for the whole run: claims in this document are falsifiable only by joint reading of prose + source line numbers (the text is saturated with anchors like `acquire (1574)`, `walker (1735)`, `swtch (3059)`). Any adjudication that treats the prose as self-sufficient is a category error. GSI must therefore treat each prose assertion as a *pointer* to a binary-verifiable predicate.

**Hop 2 — the isolation invariant is the spine.** Chapter 1 states the three requirements [PAGE 17]: *"an operating system must fulfil three requirements: multiplexing, isolation, and interaction."* Everything downstream is a consequence. Multiplexing → Chapter 5 (scheduling, swtch, sleep/wakeup). Isolation → Chapter 2 (page tables, PTE_U) and Chapter 3 (CPL, IDT, DPL). Interaction → Chapter 0 (file descriptors, pipes) and Chapter 6 (file system + logging). Retrocausally, the *first* chapter's `fork`/`exec` split [PAGE 10] is the reason interaction is possible without kernel special-cases: *"If fork and exec were combined into a single system call, some other (probably more complex) scheme would be required for the shell to redirect standard input and output."* This is a design choice with a **multi-week latency trap** (see genealogy section).

**Hop 3 — the gray zone: what the authors themselves concede is unproven.** Three explicit self-indictments must be carried forward as active uncertainty, not buried:
1. [PAGE 36]: *"It is likely that xv6 doesn't do a complete job of validating user-level data supplied to the kernel, which a malicious user program might be able to exploit to circumvent xv6's isolation."*
2. [PAGE 55]: *"It is not unlikely that xv6 has some races."*
3. [PAGE 73]: *"Xv6's support for kill is not entirely satisfactory: there are sleep loops which probably should check for p->killed."*

These are not rhetorical. They localize the three genuine breakdown regimes: **argument-validation regime**, **critical-section regime**, and **asynchronous-termination regime**. The GSE must refuse to certify xv6 as "correct"; the correct verdict is "correct-by-construction on the covered invariants, open on these three."

**Hop 4 — the trap/gate distinction is the counter-trap mechanism.** On [PAGE 42]: *"Tvinit handles T_SYSCALL, the user system call trap, specially: it specifies that the gate is of type 'trap' by passing a value of 1 as second argument. Trap gates don't clear the IF flag, allowing other interrupts during the system call handler."* Contrast [PAGE 46]: *"The only difference between vector 32 and vector 64 (the one for system calls) is that vector 32 is an interrupt gate instead of a trap gate. Interrupt gates clear IF."* This is the single most elegant decision in the book — a **deliberate asymmetry**: syscalls re-enable interrupts because they may run for tens of milliseconds and blocking the timer would destroy the scheduler; device interrupts disable them because their handlers touch lock-protected structures. The counter-trap is domain-segmentation of the *same* hardware primitive.

**Hop 5 — the clock is load-bearing, not decorative.** [PAGE 18]: *"This transparency allows the operating system to share processors even if some applications are in infinite loops."* The 100 Hz timer [PAGE 45–46] is the only thing preventing a user program from monopolizing a core. Therefore the clock is a **veto layer**: any claim of "multiplexing" collapses if f_tick → 0. Conversely, advancing f_tick → ∞ converts the system into interrupt-dominated non-progress (the "swamping the processor" regime the authors name at [PAGE 45]).

**Hop 6 — deadlock ordering is a global, non-local invariant.** [PAGE 56]: *"creating a file requires simultaneously holding a lock on the directory, a lock on the new file's inode, a lock on a disk block buffer, idelock, and ptable.lock."* A five-deep chain. This means lock order is a property of the **whole program**, not any function — hence [PAGE 56]: *"locks are effectively part of each function's specification."* Any refactor (e.g., the Exercise 8 split of `p->lock` [PAGE 74]) must re-verify the global partial order or it silently induces a cycle.

**Hop 7 — the physical veto is mechanical and thermal.** The IDE disk is a *rotating* device; [PAGE 47]: *"Disk accesses typically take milliseconds, a long time for a processor."* and [PAGE 89]: *"It performs synchronous log writes, a block at a time, each of which is likely to require an entire disk rotation time."* Latency hierarchy from [PAGE 97]: register 1 cycle / 64 B; L1 ~4 cycles / 64 KiB; L2 ~10 cycles / 4 MiB; L3 ~40–75 cycles / 8 MiB; remote L3 ~100–300 cycles; local DRAM ~60 ns; remote DRAM ~100 ns. The lock-migration cost cited at [PAGE 59] — *"Fetching a cache line from another processor's cache can be orders of magnitude more expensive than fetching a line from a local cache"* — is bounded below by the remote-L3/remote-DRAM rows. That is the quantitative basis for the spin-lock veto.

**Hop 8 — synthesis.** Nine hop-layers converge on one adjudication: xv6's correctness is *conditional on a set of environmental and architectural preconditions* (paging enabled with entry 0 mapped; PHYSTOP ≤ 2 GiB − 16 MiB; unique lock order; f_tick > 0; non-reordering memory model or barriers; non-failing disk). Strip any precondition and you get a *named, page-anchored* failure mode. The three RLVR scenarios below are the three preconditions with the cleanest binary observables.

</THINK_TRACE>

---

<SOURCE_OPERATORS_AND_EQUATIONS>

**Notation.** All symbols carry SI or information units. `B` = bytes, `p` = pages of 4096 B, `cyc` = processor cycles, `s` = seconds, `Hz` = s⁻¹, `bit` = information bits, `ent` = table entries.

### E1 — Two-level x86 address translation (information-theoretic split)

A 32-bit virtual address is partitioned into three fields:

$$
\text{VA} \;=\; \underbrace{\text{PDX}}_{10\ \text{bit}}\,\Vert\,\underbrace{\text{PTX}}_{10\ \text{bit}}\,\Vert\,\underbrace{O}_{12\ \text{bit}},\qquad \text{PDX},\text{PTX}\in[0,2^{10}),\ O\in[0,2^{12})
$$

$$
\text{PA} \;=\; \text{PTE.PPN}\cdot 2^{12} \;+\; O \quad [\text{B}]
$$

[PAGE 29] verbatim: *"An x86 page table is logically an array of 2^20 (1,048,576) page table entries (PTEs). Each PTE contains a 20-bit physical page number (PPN) and some flags."* And: *"a page table gives the operating system control over virtual-to-physical address translations at the granularity of aligned chunks of 4096 (2^12) bytes. Such a chunk is called a page."*

**Flat-table information cost.** A fully populated single-level table would require

$$
I_{\text{flat}} = 2^{20}\ \text{ent}\times 4\ \text{B/ent} = 4\ \text{MiB} = 2^{22}\ \text{B}
$$

per address space. The two-level tree is exactly the mechanism that lets unused 4 MiB regions be *omitted*: [PAGE 29] *"This two-level structure allows a page table to omit entire page table pages in the common case in which large ranges of virtual addresses have no mappings."* Each page-table page costs exactly 1024 × 4 B = 4096 B = 1 p.

**Breakdown regime B1 (PTE_P clear).** If PTE_P = 0 at either level, [PAGE 29–30]: *"If either the page directory entry or the PTE is not present, the paging hardware raises a fault."* This is not an error path — it is a *designed* mechanism (guard page, [PAGE 34]).

**Breakdown regime B2 (PTE_U clear, CPL = 3).** [PAGE 30]: *"PTE_U controls whether user programs are allowed to use the page; if clear, only the kernel is allowed to use the page."* Formally, the permitted set is

$$
M_{\text{user}} = \{\,v : \text{PTE\_P}(v)=1 \wedge \text{PTE\_U}(v)=1\,\}
$$

and any v ∉ M_user accessed at CPL = 3 is a protection violation.

### E2 — Address-space and physical-memory budget

$$
|\text{VA}_{\text{user}}| = \text{KERNBASE} - 0 = \texttt{0x80000000}\ \text{B} = 2\ \text{GiB}
$$

[PAGE 30–31]: *"a process's user memory starts at virtual address zero and can grow up to KERNBASE, allowing a process to address up to 2 gigabytes of memory."*

$$
\text{PHYSTOP}_{\max} = 2\ \text{GiB} - 16\ \text{MiB}
$$

[PAGE 32]: *"PHYSTOP must be smaller than two gigabytes - 16 megabytes (for the device memory)."* Reason: *"Some devices that use memory-mapped I/O appear at physical addresses starting at 0xFE000000."*

**Breakdown regime B3 (KERNBASE ceiling).** Exceeding PHYSTOP_max is not a soft failure; it aliases kernel virtual range onto device space. The book's own Exercise 2 [PAGE 27] probes this: *"KERNBASE limits the amount of memory a single process can use, which might be irritating on a machine with a full 4 GB of RAM."*

### E3 — Timer-drive preemption

$$
f_{\text{tick}} = 100\ \text{Hz} \;\Rightarrow\; T_{\text{tick}} = \frac{1}{f_{\text{tick}}} = 10\ \text{ms}
$$

[PAGE 45]: *"We would like the timer hardware to generate an interrupt, say, 100 times per second so that the kernel can track the passage of time and so the kernel can time-slice among multiple running processes."* Rationale verbatim: *"The choice of 100 times per second allows for decent interactive performance while not swamping the processor with handling interrupts."*

**Round-robin response-time bound.** With n runnable processes and quantum q = T_tick, and context-switch cost C_sw:

$$
R_i \;\le\; (n-1)\,q \;+\; C_{sw} \quad [\text{s}]
$$

Assumption: no blocking, uniform quantum, no priority. Breakdown: as n→∞ at fixed q, R grows linearly — the reason [PAGE 72] notes real systems introduce priorities and the reason priority inversion / convoys are named there.

**Breakdown regime B4 (f_tick → 0).** Multiplexing fails entirely; a user infinite loop monopolizes the core. The book's guarantee at [PAGE 18] — *"This transparency allows the operating system to share processors even if some applications are in infinite loops"* — is *entirely* contingent on f_tick > 0.

### E4 — Spin-lock contention and the Amdahl bound

Let τ_cs = critical-section duration [s], T_work = per-thread inter-acquisition period [s], N = cores, C_mig = cache-line migration cost [cyc].

$$
U = \min\!\left(1,\; \frac{N\,\tau_{cs}}{T_{work}}\right),\qquad
W_{\text{spin}} \approx \max\!\left(0,\; \frac{N\,\tau_{cs}}{T_{work}} - 1\right)\cdot C_{mig}\ \ [\text{cyc}]
$$

**Amdahl (giant-lock limit).** With serial fraction σ:

$$
S(N) = \frac{1}{\sigma + (1-\sigma)/N}
$$

The "giant kernel lock" is the σ → 1 case:

$$
\lim_{\sigma\to 1} S(N) = 1 \quad \forall N
$$

[PAGE 55] verbatim: *"Many uniprocessor operating systems have been converted to run on multiprocessors using this approach, sometimes called a ''giant kernel lock,'' but the approach sacrifices parallelism: only one CPU can execute in the kernel at a time."*

**Breakdown regime B5 (U → 1).** Spin-waiting dominates; [PAGE 59]: *"Locks can be expensive if many processors try to acquire the same lock at the same time... the atomic instruction to update the cache line that holds the lock must move the line from the one processor's cache to the other processor's cache."* Bounded below by the remote-L3 row (~100–300 cyc) or remote-DRAM row (~100 ns) at [PAGE 97].

### E5 — Memory-ordering constraint (barrier semantics)

Define program order →_po and visibility order →_vis. The required constraint is:

$$
\forall a,b:\; \big(a \to_{po} b \;\wedge\; \text{barrier}(a,b)\big) \;\Rightarrow\; a \to_{vis} b
$$

[PAGE 57] verbatim: *"__sync_synchronize() is a memory barrier: it tells the compiler and CPU to not reorder loads or stores across the barrier."* And the failure illustration: *"it would be a disaster if the compiler or processor caused the effects of line 4 (or 2 or 5) to be visible to other cores after the effects of line 6."*

**Breakdown regime B6 (no barrier).** Store-store reordering exposes a partially-linked list: a second core observes `list == l` but `l->next` stale, so the remainder of the list is unreachable. This is a *silent* corruption, not a fault.

### E6 — Sleep/wakeup atomicity and the lost-wakeup window

Let `test` = the condition evaluation, `mark` = the state transition SLEEPING, and `wake` = the waker's scan. Correctness requires:

$$
\text{test} \to_{hb} \text{mark} \quad\text{under a lock that the waker must also acquire before } \text{wake}
$$

[PAGE 69] verbatim: *"the earliest the waker could acquire the lock on the condition is after sleep acquires ptable.lock, so that wakeup's acquisition of ptable.lock must wait until sleep has completely finished putting the sleeper to sleep."*

**Breakdown regime B7 (lost wakeup).** If `mark` is not ordered before the waker's scan, the wake is delivered to an empty wait set and the sleeper blocks indefinitely. [PAGE 67]: *"recv is asleep waiting for a pointer that has already arrived... at which point the system will be deadlocked."* This is exactly what Exercise 1 [PAGE 74] weaponizes by rewriting `release(lk); acquire(&ptable.lock);` — the swap widens the window to a full critical section.

### E7 — Log capacity and commit atomicity

Let `LOGSIZE` = log blocks, `MAXOPBLOCKS` = conservative per-op reservation, `log.outstanding` = in-flight op count. The admission condition is:

$$
\text{reserved} = \text{log.outstanding} \times \text{MAXOPBLOCKS} \;\le\; \text{LOGSIZE}
$$

[PAGE 79] verbatim: *"No single system call can be allowed to write more distinct blocks than there is space in the log."* And: *"the logging system cannot allow a system call to start unless it is certain that the system call's writes will fit in the space remaining in the log."*

**Atomicity statement.** For a transaction T with write set W(T):

$$
\text{recover}(\text{crash}) \;\Rightarrow\; \big(\text{disk} \models W(T)\big) \;\oplus\; \big(\text{disk} \models \varnothing\big)
$$

[PAGE 79]: *"the log makes operations atomic with respect to crashes: after recovery, either all of the operation's writes appear on the disk, or none of them appear."* The single-bit discriminator is the header count [PAGE 79]: *"The count in the header block on disk is either zero... or non-zero."*

**Absorption** (a genuine, non-toy optimization) [PAGE 80]: *"log_write notices when a block is written multiple times during a single transaction, and allocates that block the same slot in the log."* This reduces |W(T)| from a multiset cardinality to a set cardinality — the exact inequality |W(T)|_set ≤ |W(T)|_multiset is what preserves E7's admission test.

**Breakdown regime B8 (log overflow).** A single `write` exceeding LOGSIZE distinct blocks. Mitigation [PAGE 79]: *"Xv6's write system call breaks up large writes into multiple smaller writes that fit in the log."*

### E8 — TLB staleness window

$$
R_{\text{TLB}} = N_{\text{ent}} \times 4096\ \text{B}
$$

[PAGE 35] verbatim: *"The x86 hardware caches page table entries in a Translation Look-aside Buffer (TLB), and when xv6 changes the page tables, it must invalidate the cached entries."* And the hazard: *"at some point later the TLB might use an old mapping, pointing to a physical page that in the mean time has been allocated to another process, and as a result, a process might be able to scribble on some other process's memory."*

**Breakdown regime B9 (missing cr3 reload).** A stale TLB entry converts a *correct* page table into an *incorrect* translation — a cross-process write primitive. The mitigation is a full flush by cr3 reload [PAGE 35].

### E9 — Timer-gate vs trap-gate nesting policy (counter-trap operator)

$$
\text{gate} = \begin{cases}
\text{trap gate} & \Rightarrow \text{IF preserved (nested interrupts permitted)}\\
\text{interrupt gate} & \Rightarrow \text{IF cleared (nesting blocked)}
\end{cases}
$$

[PAGE 42] and [PAGE 46] as quoted above. Policy: `T_SYSCALL` (vector 64) = trap gate; IRQ_TIMER (vector 32) = interrupt gate. Assigned rationale: syscalls may block on disk (ms-scale) and must not suppress the clock; interrupt handlers touch shared structures and must not re-enter.

### E10 — Interrupt-vs-lock deadlock avoidance

[PAGE 57] verbatim: *"It is important that acquire call pushcli before the xchg that might acquire the lock (1581). If the two were reversed, there would be a few instruction cycles when the lock was held with interrupts enabled, and an unfortunately timed interrupt would deadlock the system."*

Formally, the invariant is:

$$
\text{held}(L) \;\Rightarrow\; \neg\text{IF} \quad\text{(on the holding processor)}
$$

and the nesting counter `pushcli`/`popcli` restores the outermost saved IF state [PAGE 57].

**Breakdown regime B10 (ordering inversion).** If acquire's `pushcli` and `xchg` are reversed, a self-deadlock window of "a few instruction cycles" exists per acquisition — statistically rare, non-deterministically reproducible, and fatal.

</SOURCE_OPERATORS_AND_EQUATIONS>

---

<RETROCAUSAL_GENEALOGY>

**Lineage, first remove — Ritchie/Thompson v6 → xv6.** [PAGE 5]: *"xv6 is a re-implementation of Dennis Ritchie's and Ken Thompson's Unix Version 6 (v6). xv6 loosely follows the structure and style of v6, but is implemented in ANSI C for an x86-based multiprocessor."* And the explicit pedagogical ancestor: *"This approach is inspired by John Lions's Commentary on UNIX 6th Edition."* The genealogy is therefore **textbook-as-instrument**: Lions (1977) established that an OS can be taught by exhaustive annotation of a small complete kernel; xv6 inherits that method and swaps PDP-11 for x86 multiprocessor.

**Second remove — v6's single-CPU sleep is the ancestor of the lost-wakeup fix.** [PAGE 72]: *"The original Unix kernel's sleep simply disabled interrupts, which sufficed because Unix ran on a single-CPU system. Because xv6 runs on multiprocessors, it adds an explicit lock to sleep. FreeBSD's msleep takes the same approach."* This is the retrocausal key: **the lost-wakeup problem did not exist in the ancestor because the ancestor's primitive (disable interrupts) was globally sufficient.** Multiprocessor hardware *created* the problem class. Any adjudication that treats lost-wakeup as an original design flaw is anachronistic.

**Third remove — the lock-free / lock-based fork in the road.** [PAGE 59–60]: *"To avoid the expenses associated with locks, many operating systems use lock-free data structures and algorithms... Lock-free programming is more complicated, however, than programming locks; for example, one must worry about instruction and memory reordering. Programming with locks is already hard, so xv6 avoids the additional complexity of lock-free programming."* Note the direction: xv6 *deliberately* chooses the ancestor's simpler branch, conceding performance. This is an explicit, costed, reversible choice — not a hidden defect.

**Fourth remove — the on-disk layout is nearly 50 years old and still shipping.** [PAGE 89]: *"Xv6 uses the same basic on-disk layout of inodes and directories as early UNIX; this scheme has been remarkably persistent over the years. BSD's UFS/FFS and Linux's ext2/ext3 use essentially the same data structures."* The named successor technologies — NTFS, HFS, ZFS balanced-tree directories [PAGE 89]; soft-updates and journaling as replacements for fsck scavenging [PAGE 89] — are all *retrocausal corrections* to the linear-scan directory and reboot-scavenger model. xv6 deliberately retains the ancestor to keep the layer count at seven [PAGE 75–76].

**Fifth remove — the modern security retrofit.** [PAGE 37]: *"It is probably better for security, however, to have a separate page table for the kernel and switch to that page table when entering the kernel from user mode, so that the kernel and user processes are more separated from each other. This design, for example, would help mitigating side-channels that are exposed by the Meltdown vulnerability and that allow a user process to read arbitrary kernel memory."* This is a **retroactive indictment**: xv6's shared kernel-in-every-address-space design [PAGE 32] — chosen for syscall convenience — became a vulnerability class 20+ years later. The genealogy is not monotone progress; it is a sequence of locally-rational decisions later revealed as attack surface.

**MULTI-WEEK TRAPS (measured in patch/review cycles, not days).**

- **T-A: The KERNBASE ceiling.** A 2 GiB cap chosen to keep user and kernel in one 4 GiB space [PAGE 30–32]. Exercise 2 [PAGE 27] asks whether raising KERNBASE helps — the honest answer is *no*, because PHYSTOP_max is separately bounded by the device window. This trap costs an implementer **weeks** because the two bounds look independent and are not.
- **T-B: The `fork`/`exec` split.** [PAGE 10]: *"because if they are separate, the shell can fork a child, use open, close, dup in the child to change the standard input and output file descriptors, and then exec. No changes to the program being exec-ed... are required."* Any implementer who "simplifies" by merging them pays for weeks rebuilding redirection semantics.
- **T-C: Global lock ordering as an unwritten spec.** [PAGE 56]: *"The need for a global lock acquisition order means that locks are effectively part of each function's specification."* A new contributor adds one function that takes idelock while holding an inode lock and induces a five-cycle deadlock that reproduces once per ~10⁶ operations. Detection latency: weeks.
- **T-D: `iput()` can write.** [PAGE 83]: *"iput() can write to the disk. This means that any system call that uses the file system may write the disk, because the system call may be the last one having a reference to the file. Even calls like read() that appear to be read-only, may end up calling iput(). This, in turn, means that even read-only system calls must be wrapped in transactions if they use the file system."* An implementer who omits `begin_op()` around a nominally read-only path discovers it only under crash-injection — a trap whose latency is exactly the interval between "tests pass" and "power-fail test runs."
- **T-E: Orphaned inodes / disk leak.** [PAGE 84]: *"Xv6 implements neither solution, which means that inodes may be marked allocated on disk, even though they are not in use anymore. This means that over time xv6 runs the risk that it may run out of disk space."* A slow, silent, calendar-scale failure.
- **T-F: `kill` vs `sleep` race.** [PAGE 73]: *"there is a race between sleep and kill; the latter may set p->killed and try to wake up the victim just after the victim's loop checks p->killed but before it calls sleep."* Consequence verbatim: the victim won't notice *"until the condition it is waiting for occurs. This may be quite a bit later... or never."* "Never" is the multi-week trap.

</RETROCAUSAL_GENEALOGY>

---

<RECURSIVE_THEORY_OF_MIND>

**The modeled adversary, level 1: the hostile user program.** [PAGE 36]: *"Users or processes can place whatever addresses they want into an ELF file. Thus exec is risky, because the addresses in the ELF file may refer to the kernel, accidentally or on purpose."*

**Level 2: the adversary models the kernel's checks.** The book reconstructs the attacker's reasoning *explicitly* [PAGE 36]: *"The danger is that a user could construct an ELF binary with a ph.vaddr that points into the kernel, and ph.memsz large enough that the sum overflows to 0x1000. Since the sum is small, it would pass the check if(newsz >= KERNBASE) in allocuvm."* This is recursive ToM in its purest form: the attacker models what `allocuvm` models about `ph.vaddr + ph.memsz`. The counter-measure is a *second* model — the explicit overflow guard `if(ph.vaddr + ph.memsz < ph.vaddr)`.

**Level 3: the kernel protects against its own modeler failing.** [PAGE 36]: *"It is easy for a kernel developer to omit a crucial check, and real-world kernels have a long history of missing checks whose absence can be exploited by user programs to obtain kernel privileges."* The recursive structure bottoms out in the admission that the *defender's* model is fallible. GSE must therefore never certify; it must only enumerate surviving checks.

**Level 4: page-level enforcement as a model-free backstop.** [PAGE 45]: *"The kernel has set up the page-table hardware to make sure that the process cannot access memory outside its local private memory... The kernel, however, can derefence any address that the user might have passed, so it must check explicitly that the address is below p->sz."* Here the defender models: *the check itself is user-visible*, so it is attacked; the hardware check (`PTE_U`) is not user-visible, so it is the anchor. The recursive reasoning terminates at `p->sz`.

---

**CRISIS HABIT REGRESSION.** Under fault, xv6 regresses to `panic`:

- [PAGE 44]: *"If it was the kernel running, there must be a kernel bug: trap prints details about the surprise and then calls panic."*
- [PAGE 89]: *"Xv6 is naive about disk failures: if a disk operation fails, xv6 panics."*
- [PAGE 77]: *"If all the buffers are busy, then too many processes are simultaneously executing file system calls; bget panics."*

The regression is *habitual* — the same verb, `panic`, appears at every layer (trap, IDE, buffer cache, and via `create` [PAGE 90] Exercise 6). This is the crisis habit: rather than model a degraded-but-live state, the system collapses to a halt. The book acknowledges the cost explicitly for the disk case [PAGE 89–90]: *"operating systems using plain disks should expect failures and handle them more gracefully, so that the loss of a block in one file doesn't affect the use of the rest of the file system."*

**COUNTER-TRAP.** The counter-trap is **domain-segmented privilege**: instead of a single "trusted/untrusted" boundary, xv6 layers several narrow ones, each cheap and independently verifiable:

1. **Gate type** (trap vs interrupt) [PAGE 42, 46] — re-entrancy policy per vector.
2. **DPL_USER on T_SYSCALL only** [PAGE 42]: *"xv6 doesn't allow processes to raise other interrupts (e.g., device interrupts) with int; if they try, they will encounter a general protection exception, which goes to vector 13."*
3. **PTE_U per page** [PAGE 30] — fine-grained user/kernel memory split.
4. **`p->sz` bound in `argptr`/`argstr`** [PAGE 45] — explicit pointer validation because the kernel shares the page table.
5. **`pushcli` before `xchg`** [PAGE 57] — interrupt suppression window closed *before* the lock is held.

Each is a trap the attacker can step into, individually cheap, collectively deep.

**CLOCK.** The clock is the *anti-regression* actuator: it forces the system out of any state where a process would otherwise never yield.

- [PAGE 46]: *"Trap for a timer interrupt does just two things: increment the ticks variable (3417), and call wakeup. The latter... may cause the interrupt to return in a different process."*
- [PAGE 46]: *"Interrupt gates clear IF, so that the interrupted processor doesn't receive interrupts while it is handling the current interrupt."* The clock is therefore *self-protecting* against recursive preemption.
- [PAGE 64]: *"The reason to enable interrupts periodically on an idling CPU is that there might be no RUNNABLE process because processes (e.g., the shell) are waiting for I/O; if the scheduler left interrupts disabled all the time, the I/O would never arrive."* Without the clock, an all-sleeping system deadlocks permanently.

**Adjudication:** habit regression (panic) is the *failure* mode; the counter-trap (layered gates) is the *design* mode; the clock is the *liveness guarantee* that makes the interaction layer meaningful. All three are simultaneously present in xv6. The GSE verdict is that survivability rests on (3) and (5) counter-traps, not on (1) panic.

</RECURSIVE_THEORY_OF_MIND>

---

<CROSS_LAYER_VETO_ADJUDICATION>

The scaffold's three veto layers are re-mapped to the source's real physical stack. **No betting instrument is computed or implied.**

### VETO 1 — PHYSICAL (silicon, thermal, electrical)

**V1.1 Bootstrap ordering veto.** [PAGE 23] verbatim: *"The processor is still executing instructions at low addresses after paging is enabled, which works since entrypgdir maps low addresses. If xv6 had omitted entry 0 from entrypgdir, the computer would have crashed when trying to execute the instruction after the one that enabled paging."* This is an **unconditional veto**: no software recovery exists, because the faulting instruction is the *first* instruction after `CR0_PG` is set, before any handler is installed. Prediction: triple fault → reboot loop.

**V1.2 Memory-hierarchy veto on spin-locks.** Quantified at [PAGE 97]: L3 ~40–75 cyc / 8 MiB; remote L3 ~100–300 cyc; local DRAM ~60 ns; remote DRAM ~100 ns. Combined with [PAGE 59] (*"Fetching a cache line from another processor's cache can be orders of magnitude more expensive than fetching a line from a local cache"*), the @-level veto is: **any design whose lock-acquisition rate exceeds roughly one per C_mig cycles cannot scale**, regardless of algorithm. Amdahl (E4) then pins S(N) ≤ 1/σ.

**V1.3 TLB-coherence veto.** [PAGE 35]: missing cr3 reload → stale translation → cross-process write. This is a hardware-coherence requirement the software must actively satisfy; the hardware will not do it.

**V1.4 Power-failure veto.** The entire Chapter 6 logging layer exists solely because power can fail mid-write [PAGE 78]. *"The problem arises because many file system operations involve multiple writes to the disk, and a crash after a subset of the writes may leave the on-disk file system in an inconsistent state."* Without the log, the veto is unbounded inconsistency (double-allocated blocks, security-relevant per [PAGE 78]).

**V1.5 Thermal/interrupt-storm veto.** [PAGE 45]: *"The choice of 100 times per second allows for decent interactive performance while not swamping the processor with handling interrupts."* Raising f_tick degrades toward interrupt-livelihood collapse. The book's f_tick = 100 Hz is a **fixed, costed compromise**, not a law.

### VETO 2 — "BIOMECHANICAL" → MECHANICAL (rotating-media kinematics)

The source's only moving-part subsystem is the IDE disk. **Veto proof:**

- **Seek/rotation floor.** [PAGE 47]: *"Disk accesses typically take milliseconds, a long time for a processor."*
- **Commit cost = one rotation.** [PAGE 89]: *"It performs synchronous log writes, a block at a time, each of which is likely to require an entire disk rotation time."*
- **Arm-contention serialization.** [PAGE 48]: *"the simple IDE disk controller can only handle one operation at a time. The disk driver maintains the invariant that it has sent the buffer at the front of the queue to the disk hardware; the others are simply waiting their turn."*
- **Successor technology and its non-elimination.** [PAGE 49]: *"although a solid-state disk works very differently from a traditional mechanical disk, both devices provide block-based interfaces and reading/writing blocks on a solid-state disk is still more expensive than reading/writing RAM."*

**Veto:** the drive's mechanical period sets a hard lower bound on `iderw` latency, which sets a hard lower bound on how long `idelock` is held, which under E4 caps achievable U and therefore caps scalability of *any* file-system-intensive workload. This is a physically-derived veto, not a ratio.

### VETO 3 — "WEATHER" → ENVIRONMENTAL (soft errors, firmware, failure injection)

- **Cosmic-ray / bit-flip class.** The book's defense-in-depth is `kfree`'s poisoning [PAGE 33]: *"kfree (3164) begins by setting every byte in the memory being freed to the value 1. This will cause code that uses memory after freeing it (uses ''dangling references'') to read garbage instead of the old valid contents; hopefully that will cause such code to break faster."* This is a *probabilistic* detector, not a guarantee — a genuine gray zone.
- **Firmware/BIOS variability.** [PAGE 37]: *"Xv6 should determine the actual RAM configuration, instead of assuming 224 MB."* The book names three PC algorithms and concedes: *"Reading the memory layout table is complicated."* The environmental veto is that the hardcoded PHYSTOP may exceed or undershoot actual RAM.
- **Virtualization.** [PAGE 101]: *"If the boot loader is running inside a PC simulator, port 0x8a00 is connected to the simulator itself and can transfer control back to the simulator."* The environment can hijack an I/O port.
- **Crash-injection as the only true test.** The logging layer's correctness is only observable under induced power-fail. Absent that, `recover_from_log` [PAGE 80] is untested code.

**Aggregate cross-layer verdict:** physical (bootstrap, coherence, hierarchy) vetoes are *deterministic*; mechanical (disk) vetoes are *bounded but large*; environmental (soft-error, firmware, power) vetoes are *probabilistic and partially defended*. xv6 is safe on layer 1, slow on layer 2, and only probabilistically defended on layer 3.

</CROSS_LAYER_VETO_ADJUDICATION>

---

<RLVR_COUNTERFACTUAL_VETOES>

Three counterfactual interventions, each with a **binary-perceptible observable**, a **falsifier**, and a **source anchor**. All are sourced from the book's own Exercises or stated self-critiques, so the reward signal is genuinely verifiable rather than stipulated.

### RLVR-1 — Delete `entry 0` from `entrypgdir`

- **Intervention:** remove the low-memory PDE (index 0) from the entry page table so that only PDE 512 (KERNBASE) remains.
- **Source anchor:** [PAGE 23]: *"The entry page table is defined in main.c (1306)... entry 0 maps virtual addresses 0:0x400000 to physical addresses 0:0x400000. This mapping is required as long as entry is executing at low addresses, but will eventually be removed."* And the counterfactual: *"If xv6 had omitted entry 0 from entrypgdir, the computer would have crashed when trying to execute the instruction after the one that enabled paging."*
- **Mechanism:** at the instant `CR0_PG` is set, `%eip` is still a *low* physical address; with no PDE 0 the next fetch faults; no IDT is installed (IDT is built much later in `tvinit` [PAGE 42]); therefore **triple fault → hardware reset**.
- **Binary observable:** QEMU emits a reset/reboot cycle; gdb attached to the kernel never reaches `main`. Under the control (PDE 0 present), gdb reaches `main` (1217).
- **Prediction:** 100 % deterministic, 0 % stochastic. Fail-to-pass delta is a single instruction.
- **Falsifier:** if the harness reaches `main` after deletion, the stated mechanism is wrong and PDE 0 is redundant on that emulator (possible only if the emulator aliases low memory into high, which would itself be a finding).

### RLVR-2 — Replace `xchg` with the naive test-and-set in `acquire`

- **Intervention:** implement `acquire` as the book's illustrative-but-broken loop (`if(!lk->locked){ lk->locked = 1; break; }`) instead of the atomic `xchg`.
- **Source anchor:** [PAGE 54]: *"this implementation does not guarantee mutual exclusion on a multiprocessor. It could happen that two CPUs simultaneously reach line 25, see that lk->locked is zero, and then both grab the lock by executing line 26. At this point, two different CPUs hold the lock, which violates the mutual exclusion property."* Exercise 2 [PAGE 60]: *"Remove the xchg in acquire. Explain what happens when you run xv6?"*
- **Mechanism:** E5/E4 breakdown — the load (line 25) and store (line 26) are separate memory operations; two cores interleave them. Mutual exclusion fails; the `list` invariant [PAGE 53] is violated; nodes are lost.
- **Binary observable:** run the linked-list insertion stress under N CPUs and count nodes; under `xchg` the count equals insertions; under naive TAS it is strictly less (lost updates). Second observable: `release`'s debugging fields show two distinct CPUs for one critical section.
- **Prediction:** stochastic — expected loss rate grows with core count and shrinks with added `printf` (the book warns: *"adding print statements while debugging insert might change the timing of the execution enough to make the race disappear"* [PAGE 52–53]). With 4 vCPUs and 10⁵ insertions, predict >0 losses in ≥90 % of runs, and 0 losses in 1-vCPU runs.
- **Falsifier:** zero losses across 10⁶ insertions at N ≥ 2 core is a refutation (would suggest the emulator serializes the instruction stream).

### RLVR-3 — Delete the overflow guard `if(ph.vaddr + ph.memsz < ph.vaddr)`

- **Intervention:** remove the arithmetic-overflow check in `exec` and craft an ELF header with `ph.vaddr` near the top of the address space and `ph.memsz` chosen so the 32-bit sum wraps below `KERNBASE`.
- **Source anchor:** [PAGE 36] verbatim: *"consider what could happen if xv6 didn't check if(ph.vaddr + ph.memsz < ph.vaddr). This is a check for whether the sum overflows a 32-bit integer. The danger is that a user could construct an ELF binary with a ph.vaddr that points into the kernel, and ph.memsz large enough that the sum overflows to 0x1000. Since the sum is small, it would pass the check if(newsz >= KERNBASE) in allocuvm. The subsequent call to loaduvm passes ph.vaddr by itself, without adding ph.memsz and without checking ph.vaddr against KERNBASE, and would thus copy data from the ELF binary into the kernel. This could be exploited by a user program to run arbitrary user code with kernel privileges."* And Exercise 7 [PAGE 38] instructs exactly this deletion and exploit.
- **Mechanism:** the two check sites disagree on the quantity being checked — `allocuvm` checks `newsz` (the wrapped sum) while `loaduvm` uses `ph.vaddr` (unwrapped). Let v = `ph.vaddr`, m = `ph.memsz` with (v + m) mod 2³² = 0x1000. Then `newsz = 0x1000 < KERNBASE`, check passes; `loaduvm` writes to v, which is in the kernel range.
- **Binary observable:** after the crafted `exec`, a known sentinel (e.g., a magic word) written from the ELF segment appears at a kernel virtual address; `exec` returns success rather than −1. Under the guard present, `exec` returns −1 and no sentinel appears.
- **Prediction:** 100 % deterministic *given* the crafted ELF; the only variance is in constructing the wrap. This is the cleanest binary reward in the set.
- **Falsifier:** if the sentinel does not land in kernel space with the guard removed, then `allocuvm`'s separate `newsz` check is doing independent work the source does not credit, and the [PAGE 36] analysis is incomplete.

### Adjunct (declared, not counted) — RLVR-3b: `sleep` lock-release reordering

[PAGE 74] Exercise 1 replaces the special-cased `lk != &ptable.lock` block with `release(lk); acquire(&ptable.lock);`. Observable: a pipe reader that never wakes. Prediction: hangs under concurrent `pipewrite`/`piperead`; 0 hangs under the source form. This is listed as a fourth scenario only because it shares RLVR-2's stochastic character and would dilute the three-scenario budget.

---

**FINAL GSE/GSI ADJUDICATION.** The source is a *self-critical* artifact: the authors name their own three open regimes ([PAGE 36] argument validation, [PAGE 55] races, [PAGE 73] kill/sleep), their own physical ceilings ([PAGE 29–32] 2 GiB / PHYSTOP / 4 MiB entry mapping), their own mechanical floor ([PAGE 47, 89] millisecond disk, rotation-time commits), and their own missing recovery mechanisms ([PAGE 84] orphaned inodes). The GSE therefore issues **no certification of correctness** — only a map of nine named breakdown regimes (B1–B10, with B10 as the ordering-inversion case), three deterministic/discriminating RLVR vetoes, and the explicit statement that **no wagering instrument exists in or is derivable from this source**. GSI's evidence chain is 100 % page-anchored; every claim above is traceable to a bracketed page marker and, in most cases, to a source line number the book itself supplies.