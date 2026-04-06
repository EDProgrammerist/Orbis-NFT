"use client";

import { ChevronRight } from "lucide-react";
import LazyVideo from "./LazyVideo";

const nftCards = [
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4",
    score: "8.7/10",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4",
    score: "9/10",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4",
    score: "8.2/10",
  },
];

export default function CollectionSection() {
  return (
    <section className="bg-[#010828] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1831px] px-4 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 sm:mb-16 gap-8">
          <h2 className="font-grotesk text-cream uppercase text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.1]">
            Collection of
            <br />
            <span className="ml-12 sm:ml-24 lg:ml-32">
              <span className="font-condiment text-neon normal-case">Space</span>{" "}
              objects
            </span>
          </h2>

          <button className="flex flex-col items-start group">
            <div className="flex items-end gap-2">
              <span className="font-grotesk text-cream uppercase text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-none">
                SEE
              </span>
              <div className="flex flex-col font-grotesk text-cream uppercase text-[20px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-none pb-1">
                <span>ALL</span>
                <span>CREATORS</span>
              </div>
            </div>
            <div className="w-full h-[6px] sm:h-[8px] lg:h-[10px] bg-neon mt-2" />
          </button>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nftCards.map((card, i) => (
            <div
              key={i}
              className="liquid-glass rounded-[32px] p-[18px] hover:bg-white/10 transition-colors"
            >
              {/* Aspect-ratio video wrapper */}
              <div className="relative w-full pb-[100%] rounded-[24px] overflow-hidden">
                <LazyVideo src={card.video} fill />
              </div>

              {/* Rarity bar */}
              <div className="liquid-glass rounded-[20px] px-5 py-4 mt-4 flex items-center justify-between">
                <div>
                  <span className="font-grotesk text-[11px] text-cream/70 uppercase tracking-wider">
                    RARITY SCORE:
                  </span>
                  <span className="font-grotesk text-[16px] text-cream ml-2">
                    {card.score}
                  </span>
                </div>
                <button className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-[#b724ff] to-[#7c3aed] flex items-center justify-center shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform">
                  <ChevronRight className="text-cream" size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
