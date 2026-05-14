import { RiClaudeFill } from "react-icons/ri";
export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "PR Opened",
      description:
        "A Pull Request is opened or updated. GitHub sends a webhook to your ReviewBot server.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="18" cy="18" r="3" />
          <circle cx="6" cy="6" r="3" />
          <path d="M6 21V9a9 9 0 0 0 9 9" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Job Queued",
      description:
        "The event is validated and a review job is queued via BullMQ.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 6h18M3 12h18M3 18h18" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Agent Reviews",
      description:
        "Claude reads diffs, full file contents, commit history, and past review patterns via MCP tools.",
      icon: <RiClaudeFill className="size-5" />,
    },
    {
      number: "04",
      title: "Comments Posted",
      description: "Inline comments appear on the PR with severity tags.",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden px-10 py-16 sm:px-15 sm:py-24"
    >
      <div className="relative">
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
            From push to review{" "}
            <span className="bg-linear-to-t from-[#693cf2a6] via-neutral-200 to-white bg-clip-text text-transparent">
              in seconds.
            </span>
          </h2>
          <div className="mt-4 h-px w-40 bg-linear-to-r from-violet-500 to-transparent sm:w-60" />
        </div>

        <div className="relative grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative flex flex-col border border-dashed border-white/10"
            >
              <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8 lg:p-6">
                <span className="font-mono text-[0.65rem] font-semibold tracking-widest text-white/20">
                  {step.number}
                </span>
                <div className="flex items-center">
                  <div className="relative flex h-[3.2rem] w-[3.2rem] shrink-0 items-center justify-center border border-violet-500/25 bg-white/[0.03] text-violet-300/80 backdrop-blur-sm transition-colors duration-300 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:text-violet-200">
                    {step.icon}
                    <span className="pointer-events-none absolute -right-px -top-px h-2 w-2 border-r border-t border-violet-400/60" />
                    <span className="pointer-events-none absolute -bottom-px -left-px h-2 w-2 border-b border-l border-violet-400/60" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white/90 sm:text-[0.8rem]">
                    {step.title}
                  </h3>
                  <p className="text-[0.78rem] leading-relaxed text-white/40 sm:text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 sm:px-8 lg:px-6">
                <div className="h-px w-8 bg-violet-500/40 transition-all duration-300 group-hover:w-14 group-hover:bg-violet-400/70" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
