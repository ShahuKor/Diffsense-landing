export default function Footer() {
  return (
    <div className="flex justify-between px-6 h-80 py-20 sm:py-10 relative">
      <div
        aria-hidden
        className="pointer-events-none absolute top-8 sm:top-0 inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(139,92,246,0.28)_0%,transparent_75%)]"
      />

      <div className="flex flex-col gap-8">
        <h3 className="text-6xl font-bold text-neutral-200/20">DiffSense</h3>
        <div className="flex flex-col gap-2">
          <div className="text-neutral-100/60 sm:hidden font-medium text-xs sm:text-sm">
            <a href="https://github.com/ShahuKor/DiffSense">
              <h3>Github</h3>
            </a>
          </div>
          <h3 className="text-neutral-100/60 font-medium text-xs sm:text-sm">
            Made By Shahu Kor
          </h3>
          <a
            href="https://www.shahukor.com
      "
          >
            <p className="text-neutral-100/60 font-medium text-xs sm:text-sm underline underline-offset-4">
              www.shahukor.com
            </p>
          </a>
        </div>
      </div>
      <div className="text-neutral-100/60 hidden sm:block font-medium text-xs sm:text-sm underline underline-offset-4">
        <a href="https://github.com/ShahuKor/DiffSense">
          <h3>Github</h3>
        </a>
      </div>
    </div>
  );
}
