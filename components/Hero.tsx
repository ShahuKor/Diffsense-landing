export default function Hero() {
  return (
    <section className="relative overflow-hidden px-10 py-8 sm:px-15 sm:py-24 md:px-20 md:py-32  ">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(139,92,246,0.28)_0%,transparent_75%)]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:64px_64px]"
      />

      <div className="relative flex flex-col gap-6 sm:gap-8 pt-20">
        <h1 className="text-[2rem] font-black leading-[1.07] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem]">
          AI Code Reviews That{" "}
          <span className="text-white">Learn Your Standards</span> —{" "}
          <span className="bg-linear-to-t from-[#693cf2a6] via-neutral-200 to-white bg-clip-text text-transparent">
            Deploy Anywhere.
          </span>
        </h1>

        <div className="h-px w-40 bg-linear-to-r from-violet-500 to-transparent sm:w-60" />

        <p className="max-w-3xl text-sm leading-relaxed text-white/55 sm:text-base md:text-lg">
          Diffsense plugs into your GitHub repos and reviews every Pull Request
          with Claude AI, and gets smarter from your team's feedback over time.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-5">
          <a
            href="#how-it-works
          "
          >
            <button className="group relative border border-white bg-white px-6 py-3.5 text-[9px] font-semibold uppercase tracking-widest text-black transition-colors duration-150 hover:bg-black hover:text-white sm:py-3 sm:text-[10px]">
              How It Works
            </button>
          </a>

          <button className="group border border-white/20 bg-transparent px-6 py-3.5 text-[9px] font-semibold uppercase tracking-widest text-white/60 transition-colors duration-150 hover:border-white/50 hover:text-white sm:py-3 sm:text-[10px]">
            Self-Host
            <span className="ml-2 inline-block transition-transform duration-150 group-hover:translate-x-0.5">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
