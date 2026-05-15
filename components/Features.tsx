import { FaGithub } from "react-icons/fa";
import {
  RiCodeSSlashLine,
  RiAlertLine,
  RiToolsLine,
  RiDatabase2Line,
  RiLoopRightLine,
  RiShieldCheckLine,
} from "react-icons/ri";

function CardCorners() {
  return (
    <>
      <span className="pointer-events-none absolute -right-px -top-px h-2 w-2 border-r border-t border-violet-400/60" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-2 w-2 border-b border-l border-violet-400/60" />
    </>
  );
}

function CardIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[3.2rem] w-[3.2rem] shrink-0 items-center justify-center border border-violet-500/25 bg-white/[0.03] text-violet-300/80 backdrop-blur-sm transition-colors duration-300 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:text-violet-200">
      {children}
      <CardCorners />
    </div>
  );
}

function CardFooter() {
  return (
    <div className="px-6 pb-6 sm:px-8">
      <div className="h-px w-8 bg-violet-500/40 transition-all duration-300 group-hover:w-14 group-hover:bg-violet-400/70" />
    </div>
  );
}

const mcpTools = [
  "read_file",
  "get_diff",
  "list_commits",
  "file_history",
  "search_code",
  "past_reviews",
  "post_comment",
];

const patternWeights = [
  { label: "Missing error handling", weight: 0.88, up: true },
  { label: "Unhandled promise rejection", weight: 0.72, up: true },
  { label: "Magic numbers in config", weight: 0.28, up: false },
];

const vectorDots = [
  [12, 28],
  [22, 62],
  [38, 18],
  [52, 48],
  [64, 22],
  [74, 68],
  [82, 38],
  [44, 74],
  [58, 52],
  [28, 54],
  [68, 44],
  [18, 44],
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative px-10 py-16 sm:px-15 sm:py-24 bg-[#0e0d0d]"
    >
      <div className="mb-16 sm:mb-20 ">
        <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
          Built for teams that take{" "}
          <span className="bg-linear-to-t from-[#693cf2a6] via-neutral-200 to-white bg-clip-text text-transparent">
            code quality seriously.
          </span>
        </h2>
        <div className="mt-4 h-px w-40 bg-linear-to-r from-violet-500 to-transparent sm:w-60" />
      </div>

      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3">
        <div className="group relative flex flex-col border border-dashed border-white/30 sm:col-span-2 lg:col-span-2">
          <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
            <span className="font-mono text-[0.65rem] font-semibold tracking-widest text-white/40">
              01
            </span>
            <CardIcon>
              <RiCodeSSlashLine className="size-5" />
            </CardIcon>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 sm:text-[0.8rem]">
                Inline Comments
              </h3>
              <p className="max-w-md text-[0.78rem] leading-relaxed text-white/40 sm:text-sm">
                Comments land directly on the specific file and line, exactly
                like a human reviewer would.
              </p>
            </div>

            <div className="mt-2 overflow-hidden border border-dashed border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2 border-b border-dashed border-white/10 px-4 py-2">
                <div className="h-1.5 w-1.5 bg-white/20" />
                <span className="font-mono text-[0.6rem] text-white/30 tracking-wide">
                  src/auth/middleware.ts
                </span>
              </div>
              <div className="flex gap-0">
                <div className="select-none border-r border-dashed border-white/10 bg-white/[0.01] px-3 py-3 text-right font-mono text-[0.6rem] leading-5 text-white/20">
                  <div>42</div>
                  <div>43</div>
                  <div>44</div>
                </div>
                <div className="flex-1 px-4 py-3 font-mono text-[0.65rem] leading-5">
                  <div className="text-violet-300/70">
                    const token = req.headers.auth;
                  </div>
                  <div className="text-white/45">
                    if (!token) return next();
                  </div>
                  <div className="bg-red-500/8 text-white/45">
                    const user = jwt.verify(token);
                  </div>
                </div>
              </div>
              <div className="border-t border-dashed border-red-500/25 bg-red-500/5 px-4 py-3">
                <div className="mb-1.5 flex items-center gap-2">
                  <span className="font-mono text-[0.6rem] font-bold tracking-widest text-red-400/90">
                    ⚠ CRITICAL · line 44
                  </span>
                </div>
                <p className="font-mono text-[0.62rem] leading-relaxed text-white/35">
                  Unhandled exception if token is malformed. Wrap jwt.verify in
                  a try/catch or validate first.
                </p>
              </div>
            </div>
          </div>
          <CardFooter />
        </div>

        <div className="group relative flex flex-col border border-dashed border-white/30">
          <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
            <span className="font-mono text-[0.65rem] font-semibold tracking-widest text-white/40">
              02
            </span>
            <CardIcon>
              <RiAlertLine className="size-5" />
            </CardIcon>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 sm:text-[0.8rem]">
                Severity Levels
              </h3>
              <p className="text-[0.78rem] leading-relaxed text-white/40 sm:text-sm">
                Every comment is tagged CRITICAL, SUGGESTION, or NITPICK.
                Low-confidence comments are suppressed entirely.
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <div className="flex items-center gap-3 border border-dashed border-red-500/25 bg-red-500/5 px-3 py-2.5">
                <div className="h-1.5 w-1.5 shrink-0 bg-red-400" />
                <span className="font-mono text-[0.62rem] font-bold tracking-widest text-red-400/90">
                  CRITICAL
                </span>
                <span className="ml-auto font-mono text-[0.55rem] text-red-400/40">
                  blocks merge
                </span>
              </div>
              <div className="flex items-center gap-3 border border-dashed border-yellow-500/25 bg-yellow-500/5 px-3 py-2.5">
                <div className="h-1.5 w-1.5 shrink-0 bg-yellow-400" />
                <span className="font-mono text-[0.62rem] font-bold tracking-widest text-yellow-400/90">
                  SUGGESTION
                </span>
                <span className="ml-auto font-mono text-[0.55rem] text-yellow-400/40">
                  informational
                </span>
              </div>
              <div className="flex items-center gap-3 border border-dashed border-white/10 bg-white/[0.02] px-3 py-2.5">
                <div className="h-1.5 w-1.5 shrink-0 bg-white/30" />
                <span className="font-mono text-[0.62rem] font-bold tracking-widest text-white/40">
                  NITPICK
                </span>
                <span className="ml-auto font-mono text-[0.55rem] text-white/20">
                  style only
                </span>
              </div>
              <div className="flex items-center gap-2 px-1 pt-1">
                <div className="h-px flex-1 bg-white/10" />
                <span className="font-mono text-[0.55rem] tracking-widest text-white/20">
                  LOW CONFIDENCE → SUPPRESSED
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
            </div>
          </div>
          <CardFooter />
        </div>

        <div className="group relative flex flex-col border border-dashed border-white/30">
          <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
            <span className="font-mono text-[0.65rem] font-semibold tracking-widest text-white/40">
              03
            </span>
            <CardIcon>
              <RiToolsLine className="size-5" />
            </CardIcon>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 sm:text-[0.8rem]">
                7 MCP Tools
              </h3>
              <p className="text-[0.78rem] leading-relaxed text-white/40 sm:text-sm">
                The agent reads files, diffs, commit history, and past reviews.
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-1.5">
              {mcpTools.map((tool, i) => (
                <div
                  key={tool}
                  className="flex items-center gap-1.5 border border-dashed border-violet-500/20 bg-violet-500/5 px-2 py-1 transition-colors duration-200 group-hover:border-violet-500/35"
                >
                  <span className="font-mono text-[0.5rem] text-violet-400/50">
                    {i + 1}
                  </span>
                  <span className="font-mono text-[0.58rem] tracking-wide text-white/35">
                    {tool}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <CardFooter />
        </div>

        <div className="group relative flex flex-col border border-dashed border-white/30">
          <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
            <span className="font-mono text-[0.65rem] font-semibold tracking-widest text-white/40">
              04
            </span>
            <CardIcon>
              <RiDatabase2Line className="size-5" />
            </CardIcon>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 sm:text-[0.8rem]">
                RAG Memory
              </h3>
              <p className="text-[0.78rem] leading-relaxed text-white/40 sm:text-sm">
                Past review comments are embedded and stored with pgvector. The
                bot surfaces historically relevant patterns on every PR.
              </p>
            </div>

            <div className="relative mt-2 h-24 overflow-hidden border border-dashed border-white/10 bg-white/[0.01]">
              <svg
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <line
                  x1="50%"
                  y1="48%"
                  x2="52%"
                  y2="54%"
                  stroke="rgba(139,92,246,0.4)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <line
                  x1="50%"
                  y1="48%"
                  x2="38%"
                  y2="18%"
                  stroke="rgba(139,92,246,0.2)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <line
                  x1="50%"
                  y1="48%"
                  x2="64%"
                  y2="22%"
                  stroke="rgba(139,92,246,0.15)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
              </svg>
              {vectorDots.map(([x, y], i) => (
                <div
                  key={i}
                  className="absolute h-1 w-1 bg-violet-400/30"
                  style={{ left: `${x}%`, top: `${y}%` }}
                />
              ))}

              <div
                className="absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 bg-violet-400/90 ring-4 ring-violet-500/20"
                style={{ left: "50%", top: "48%" }}
              />
              <div
                className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 bg-violet-300/60"
                style={{ left: "52%", top: "54%" }}
              />
              <span className="absolute bottom-2 right-2 font-mono text-[0.5rem] text-white/20 tracking-widest">
                pgvector
              </span>
              <span className="absolute left-2 top-2 font-mono text-[0.5rem] text-violet-400/40 tracking-widest">
                ● MATCH
              </span>
            </div>
          </div>
          <CardFooter />
        </div>

        <div className="group relative flex flex-col border border-dashed border-white/30">
          <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
            <span className="font-mono text-[0.65rem] font-semibold tracking-widest text-white/40">
              05
            </span>
            <CardIcon>
              <RiLoopRightLine className="size-5" />
            </CardIcon>
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 sm:text-[0.8rem]">
                Feedback Loop
              </h3>
              <p className="text-[0.78rem] leading-relaxed text-white/40 sm:text-sm">
                Resolving a thread increases that pattern&apos;s weight.
                Dismissing lowers it. Review quality improves over 20–30 PRs.
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-3">
              {patternWeights.map(({ label, weight, up }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.58rem] tracking-wide text-white/35 truncate pr-2">
                      {label}
                    </span>
                    <span
                      className={`shrink-0 font-mono text-[0.6rem] font-bold ${up ? "text-violet-400/80" : "text-white/25"}`}
                    >
                      {up ? "↑" : "↓"}
                    </span>
                  </div>
                  <div className="relative h-px w-full bg-white/10">
                    <div
                      className="absolute left-0 top-0 h-px bg-violet-500/60 transition-all duration-500 group-hover:bg-violet-400/80"
                      style={{ width: `${weight * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="mt-1 flex items-center gap-2">
                <div className="h-px flex-1 bg-white/8" />
                <span className="font-mono text-[0.52rem] tracking-widest text-white/20">
                  CONVERGES ~20–30 PRs
                </span>
                <div className="h-px flex-1 bg-white/8" />
              </div>
            </div>
          </div>
          <CardFooter />
        </div>

        <div className="group relative flex flex-col border border-dashed border-white/30 sm:col-span-2 lg:col-span-3">
          <div className="flex flex-1 flex-col gap-6 p-6 sm:flex-row sm:items-center sm:gap-12 sm:p-8">
            <div className="flex flex-1 flex-col gap-5">
              <span className="font-mono text-[0.65rem] font-semibold tracking-widest text-white/40">
                06
              </span>
              <CardIcon>
                <FaGithub className="size-5" />
              </CardIcon>
              <div className="flex flex-col gap-2">
                <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 sm:text-[0.8rem]">
                  GitHub App Auth
                </h3>
                <p className="max-w-lg text-[0.78rem] leading-relaxed text-white/40 sm:text-sm">
                  Installs as a GitHub App, works on any org or repo, no
                  personal tokens, no elevated permissions.
                </p>
              </div>
            </div>
          </div>
          <CardFooter />
        </div>
      </div>
    </section>
  );
}
