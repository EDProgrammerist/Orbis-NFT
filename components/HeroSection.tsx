"use client";

import { Mail, X as Twitter, GitBranch as Github } from "lucide-react";
import LazyVideo from "./LazyVideo";

const navLinks = ["Homepage", "Gallery", "Buy NFT", "FAQ", "Contact"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden rounded-b-[32px]">
      {/* Video Background — hero is above fold so eager-load it */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_045634_e1c98c76-1265-4f5c-882a-4276f2080894.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1831px] px-4 sm:px-8 lg:px-12 min-h-screen flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <span className="font-grotesk text-[16px] uppercase text-cream tracking-wider">
            Orbis.Nft
          </span>

          <nav className="hidden lg:block liquid-glass rounded-[28px] px-[52px] py-[24px]">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-grotesk text-[13px] uppercase text-cream hover:text-neon transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-[80px] hidden lg:block" />
        </header>

        {/* Hero Content */}
        <div className="flex-1 flex items-end pb-16 sm:pb-24 lg:pb-32">
          <div className="relative lg:ml-32 max-w-[780px]">
            <h1 className="font-grotesk text-cream uppercase text-[40px] sm:text-[60px] md:text-[75px] lg:text-[90px] leading-[1.05] sm:leading-[1]">
              Beyond earth
              <br />
              and ( its ) familiar boundaries
            </h1>

            <span className="absolute right-0 top-0 sm:-right-4 sm:top-2 font-condiment text-neon text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] -rotate-1 mix-blend-exclusion opacity-90">
              Nft collection
            </span>

            <div className="flex lg:hidden items-center justify-center gap-4 mt-8">
              {[Mail, Twitter, Github].map((Icon, i) => (
                <button
                  key={i}
                  className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <Icon className="text-cream" size={20} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop social icons */}
        <div className="hidden lg:flex flex-col gap-3 absolute top-1/3 right-12">
          {[Mail, Twitter, Github].map((Icon, i) => (
            <button
              key={i}
              className="liquid-glass w-[56px] h-[56px] rounded-[1rem] flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Icon className="text-cream" size={20} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
