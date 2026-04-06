"use client";

import { Mail, X, GitBranch } from "lucide-react";
import LazyVideo from "./LazyVideo";

const socialIcons = [
  { Icon: Mail, label: "Email" },
  { Icon: X, label: "X (Twitter)" },
  { Icon: GitBranch, label: "GitHub" },
];

export default function CtaSection() {
  return (
    <section className="relative bg-[#010828]">
      <LazyVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055729_72d66327-b59e-4ae9-bb70-de6ccb5ecdb0.mp4"
        className="w-full h-auto block"
      />

      {/* Text overlay — right-aligned */}
      <div className="absolute inset-0 flex items-center justify-end lg:pr-[20%] lg:pl-[15%] px-4 sm:px-8">
        <div className="relative">
          <span className="absolute -top-6 sm:-top-8 lg:-top-12 left-0 font-condiment text-neon text-[17px] sm:text-[32px] md:text-[48px] lg:text-[68px] mix-blend-exclusion">
            Go beyond
          </span>
          <h2 className="font-grotesk text-cream uppercase text-[16px] sm:text-[28px] md:text-[40px] lg:text-[60px] leading-[1.15]">
            <span className="block mb-4 sm:mb-6 md:mb-8 lg:mb-12">JOIN US.</span>
            REVEAL WHAT&apos;S HIDDEN.
            <br />
            DEFINE WHAT&apos;S NEXT.
            <br />
            FOLLOW THE SIGNAL.
          </h2>
        </div>
      </div>

    {/* Social Icons - Moved Higher */}
<div className="absolute left-[19%] -translate-x-1/2 bottom-[40%] sm:bottom-[30%] lg:bottom-[30%] flex flex-col gap-10 items-center">
  {socialIcons.map(({ Icon, label }) => (
    <button
      key={label}
      aria-label={label}
      className="w-9 h-7 flex items-center justify-center hover:opacity-70 transition-opacity"
    >
      <Icon className="w-9 h-9 text-white" />
    </button>
  ))}
</div>
    </section>
  );
}
