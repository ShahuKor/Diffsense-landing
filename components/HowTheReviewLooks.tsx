import Image from "next/image";

function BrowserFrame({
  src,
  alt,
  url,
  title,
  description,
}: {
  src: string;
  alt: string;
  url: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5 px-1">
        <h3 className="text-sm font-bold  tracking-wider text-white/90 sm:text-md">
          {title}
        </h3>
        <p className="text-[0.78rem] leading-relaxed text-white/40 sm:text-[14px]">
          {description}
        </p>
      </div>

      <div className="overflow-hidden border rounded-lg border-white/20 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-3 border-b border-white/10 bg-[#1c1c1e] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 bg-[#ff5f57] rounded-full" />
            <div className="h-3 w-3 bg-[#ffbd2e] rounded-full" />
            <div className="h-3 w-3 bg-[#28c840] rounded-full" />
          </div>

          <div className="mx-auto flex w-full max-w-xs items-center gap-2 border border-white/10 bg-white/5 px-3 py-1">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shrink-0 text-white/30"
            >
              <rect x="3" y="11" width="18" height="11" rx="0" ry="0" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span className="truncate font-mono text-[0.58rem] text-white/35 tracking-wide">
              {url}
            </span>
          </div>
        </div>

        <div className="flex items-end gap-0 border-b border-white/10 bg-[#161618] px-3 pt-2">
          <div className="flex items-center gap-2 border border-b-0 border-dashed border-white/15 bg-[#1c1c1e] px-4 py-2">
            <svg
              width="10"
              height="10"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
            >
              <circle cx="12" cy="12" r="10" fill="#24292f" />
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.091-.646.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                fill="white"
                fillOpacity="0.8"
              />
            </svg>
            <span className="font-mono text-[0.58rem] text-white/50 tracking-wide truncate max-w-32">
              {alt}
            </span>
          </div>
          <div className="h-8 w-4 border-b border-white/10" />
        </div>
        <div className="relative bg-[#0d1117]">
          <Image
            src={src}
            alt={alt}
            width={900}
            height={560}
            className="block w-full object-cover object-top"
            quality={90}
          />
        </div>
      </div>
    </div>
  );
}

export default function HowTheReviewLooks() {
  return (
    <section
      id="how-the-review-looks"
      className="relative overflow-hidden px-10 py-16 sm:px-15 sm:py-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_100%,rgba(139,92,246,0.18)_0%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_0%_0%,rgba(139,92,246,0.18)_0%,transparent_70%)]"
      />

      <div className="relative">
        <div className="mb-16 sm:mb-20">
          <h2 className="text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">
            What the review actually looks like.
          </h2>
          <div className="mt-4 h-px w-40 bg-linear-to-r from-violet-500 to-transparent sm:w-60" />
        </div>

        <div className="grid grid-cols-1 gap-12  lg:gap-10">
          <BrowserFrame
            src="/inlinecomment.png"
            alt="Inline Comment — GitHub PR Review"
            url="github.com/org/repo/pull/42/files"
            title="Inline Comment"
            description="Line-level feedback posted directly on the diff. Each comment includes a severity tag and a clear explanation."
          />
          <BrowserFrame
            src="/summary.png"
            alt="PR Summary — GitHub PR Review"
            url="github.com/org/repo/pull/42"
            title="PR Summary"
            description="A high-level overview posted at the end of the PR. Covers critical issues, suggestions, and an overall assessment."
          />
        </div>
      </div>
    </section>
  );
}
