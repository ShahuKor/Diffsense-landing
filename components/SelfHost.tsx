const commands = [
  { prompt: true, text: "git clone https://github.com/ShahuKor/review-bot" },
  { prompt: true, text: "cd review-bot && pnpm install" },
  { prompt: true, text: "cp .env.example .env" },
  { prompt: true, text: "docker-compose up -d postgres redis" },
  { prompt: true, text: "pnpm db:migrate" },
  { prompt: true, text: "pnpm dev:server" },
  { prompt: true, text: "pnpm dev:worker" },
];

const requirements = [
  {
    name: "GitHub App",
    detail: "Created in your GitHub settings",
  },
  {
    name: "Anthropic API key",
    detail: "Used for the Claude review agent",
  },
  {
    name: "OpenAI API key",
    detail: "Used for text-embedding-3-small for RAG",
  },
  {
    name: "Docker",
    detail: "Runs Postgres with pgvector and Redis locally",
  },
  {
    name: "ngrok or Cloudflare Tunnel",
    detail: "Exposes localhost for GitHub webhooks",
  },
];

export default function SelfHost() {
  return (
    <section id="self-host" className="relative px-10 py-16 sm:px-15 sm:py-24">
      <div className="pointer-events-none absolute -top-8 right-0 left-0 h-px border-t border-dashed border-white/30 sm:top-0" />
      <div className="pointer-events-none absolute right-0 -bottom-8 left-0 h-px border-b border-dashed border-white/30 sm:bottom-0" />
      <div className="mb-12 sm:mb-16">
        <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
          Self-host in{" "}
          <span className="bg-linear-to-t from-[#693cf2a6] via-neutral-200 to-white bg-clip-text text-transparent">
            minutes.
          </span>
        </h2>
        <div className="mt-4 h-px w-40 bg-linear-to-r from-violet-500 to-transparent sm:w-60" />
      </div>

      <div className="flex flex-col gap-10 ">
        <div className="w-full flex flex-col items-center">
          <div className="overflow-hidden border rounded-md border-white/20 max-w-2xl md:w-150">
            <div className="flex items-center gap-3 border-b border-white/10 bg-[#1c1c1e] px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="mx-auto font-mono text-[0.6rem] tracking-widest text-white/30">
                zsh — review-bot
              </span>
            </div>
            <div className="bg-[#0d0d0d] px-5 py-5 font-mono text-[0.72rem] leading-7">
              {commands.map((cmd, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span
                    className={
                      cmd.prompt
                        ? "text-violet-400 shrink-0"
                        : "text-white/0 shrink-0 select-none"
                    }
                  >
                    ›
                  </span>
                  <span
                    className={cmd.prompt ? "text-white/80" : "text-white/45"}
                  >
                    {cmd.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 max-w-2xl">
          <span className="font-mono text-[0.65rem] font-semibold tracking-widest text-white/40">
            WHAT YOU NEED
          </span>
          <div className="flex flex-col">
            {requirements.map((req, i) => (
              <div
                key={i}
                className="flex items-baseline gap-3 border-b border-dashed border-white/10 py-3 first:border-t"
              >
                <div className="mt-1.5 h-1 w-1 shrink-0 bg-violet-400" />
                <span className="text-[0.78rem] font-semibold text-white/80 sm:text-sm">
                  {req.name}
                </span>
                <span className="ml-auto text-right text-[0.72rem] text-white/35 sm:text-[0.78rem]">
                  {req.detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
