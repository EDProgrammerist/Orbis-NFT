"use client";

import LazyVideo from "./LazyVideo";

const decorativeParagraph =
  "A digital object fixed beyond time and place. An exploration of distance, form and silence in space";

export default function AboutSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <LazyVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_151551_992053d1-3d3e-4b8c-abac-45f22158f411.mp4"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1831px] px-4 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-24 flex flex-col min-h-screen">
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Left heading */}
          <div className="relative">
            <h2 className="font-grotesk text-cream uppercase text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.1]">
              Hello!
              <br />
              I&apos;m orbis
            </h2>
            <span className="absolute bottom-0 right-0 translate-x-2 translate-y-1 font-condiment text-neon text-[36px] sm:text-[48px] md:text-[58px] lg:text-[68px] -rotate-1 mix-blend-exclusion">
              Orbis
            </span>
          </div>

          {/* Top-right paragraph — only one instance */}
          <p className="font-mono text-[14px] sm:text-[16px] uppercase text-cream max-w-[266px]">
            {decorativeParagraph}
          </p>
        </div>
      </div>
    </section>
  );
}
