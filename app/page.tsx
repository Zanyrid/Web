"use client";

import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#000000] text-white selection:bg-neutral-800 selection:text-white">
      {/* =========================================================================
          SECTION 1: HERO SECTION
          ========================================================================= */}
      <section className="relative w-full min-h-[820px] sm:min-h-[920px] lg:min-h-[1020px] flex flex-col justify-between overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <Image
            src="/images/hero.jpg"
            alt="Design That Captivates Today & Inspires Tomorrow"
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-[50%_18%] brightness-[0.92] contrast-[1.08] scale-105"
          />
          {/* Subtle vignette and cinematic shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/60" />
          {/* Bottom fade into section 2 */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/80 to-[#000000]" />
        </div>

        {/* Navigation Bar */}
        <header className="relative z-30 pt-6 sm:pt-8 px-4 sm:px-10 md:px-14 flex items-center justify-between gap-3">
          {/* Frosted Glass Navigation Pill */}
          <nav
            aria-label="Main Navigation"
            className="inline-flex items-center gap-0.5 sm:gap-1 p-1 rounded-full bg-black/50 backdrop-blur-xl border border-white/15 shadow-[0_8px_30px_rgb(0,0,0,0.5)] max-w-[calc(100vw-70px)]"
          >
            <button className="px-3 sm:px-4 py-1.5 rounded-full bg-white text-black font-semibold text-[11px] sm:text-xs tracking-tight shadow transition hover:bg-neutral-200 cursor-pointer">
              Home
            </button>
            <a
              href="#cases"
              className="px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs text-white/80 hover:text-white transition font-medium flex items-center gap-1 cursor-pointer"
            >
              Cases <span className="text-[10px] text-white/60 font-mono">18</span>
            </a>
            <a
              href="#service"
              className="px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs text-white/80 hover:text-white transition font-medium cursor-pointer"
            >
              Service
            </a>
            <a
              href="#about"
              className="px-2.5 sm:px-3 py-1.5 text-[11px] sm:text-xs text-white/80 hover:text-white transition font-medium cursor-pointer"
            >
              About
            </a>
          </nav>

          {/* Right Hamburger Icon */}
          <button
            aria-label="Toggle Menu"
            className="p-2 flex flex-col justify-center items-end gap-1.5 cursor-pointer group shrink-0"
          >
            <span className="w-5 sm:w-6 h-[1.75px] bg-white transition-all group-hover:w-7" />
            <span className="w-5 sm:w-6 h-[1.75px] bg-white transition-all group-hover:w-5" />
          </button>
        </header>

        {/* Hero Middle Content: Headline Left + Categories Right */}
        <div className="relative z-20 px-4 sm:px-10 md:px-14 pt-12 sm:pt-20 lg:pt-28 flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
          {/* Left Column: Agency Tag + Giant Headline */}
          <div className="max-w-2xl">
            {/* Category tag */}
            <div className="flex items-center gap-2 text-xs tracking-wider text-white/70 uppercase font-light mb-3 sm:mb-4">
              <span className="text-white/40 font-mono text-sm leading-none">|</span>
              <span>Creative agency</span>
            </div>

            {/* Main Headline with round arrow button */}
            <h1 className="text-[32px] min-[390px]:text-[38px] sm:text-5xl md:text-6xl lg:text-[72px] font-extrabold uppercase tracking-tight text-white leading-[1.04]">
              DESIGN THAT<br />
              CAPTIVATES TODAY<br />
              &amp; INSPIRES<br />
              <span className="inline-flex items-center flex-wrap">
                TOMORROW.
                <button
                  aria-label="Explore Projects"
                  className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full border border-white/40 bg-black/30 backdrop-blur-md ml-2.5 sm:ml-3 align-middle transition-all duration-300 hover:scale-110 hover:border-white hover:bg-white/10 cursor-pointer"
                >
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white stroke-[1.75]" />
                </button>
              </span>
            </h1>
          </div>

          {/* Right Column: Upper Stacked Services list */}
          <div className="lg:text-left pt-0 lg:pt-6 self-start lg:self-auto">
            <div className="space-y-1 text-xs md:text-sm font-bold tracking-wider text-white uppercase">
              <p>BRANDING</p>
              <p>ART DIRECTION</p>
              <p>DIGITAL IDENTITY</p>
            </div>
            <p className="text-xs text-neutral-400 mt-2 sm:mt-3 leading-relaxed max-w-[210px]">
              Architecting bold visual languages for growth
            </p>
          </div>
        </div>

        {/* Hero Bottom Row: Frosted Badges Left + Social Capsule Right */}
        <div className="relative z-20 px-4 sm:px-10 md:px-14 pb-10 sm:pb-14 pt-10 sm:pt-16 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-5 sm:gap-6">
          {/* Left: Two Frosted Glass Pill Badges */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            {/* Badge 1: Define your identity */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/15 w-[calc(50%-6px)] sm:w-[168px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] flex flex-col justify-between h-[96px] sm:h-[100px] transition hover:bg-white/[0.12]">
              <div className="flex items-start justify-between">
                <span className="text-[10px] text-white/70 leading-snug max-w-[85px] tracking-tight">
                  Define<br />your identity
                </span>
                {/* 8-Petal Geometric Asterisk / Flower Icon */}
                <svg
                  className="w-4 h-4 text-white/90 shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <line x1="12" y1="2" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                  <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-white/90 leading-tight">
                Evolving design intelligence
              </p>
            </div>

            {/* Badge 2: 95% Conversion-led design */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.08] backdrop-blur-xl border border-white/15 w-[calc(50%-6px)] sm:w-[168px] shadow-[0_8px_32px_rgba(0,0,0,0.37)] flex flex-col justify-between h-[96px] sm:h-[100px] transition hover:bg-white/[0.12]">
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-none">
                  95%
                </span>
                <span className="text-white/60 text-xs">↗</span>
              </div>
              <p className="text-[10px] sm:text-[11px] font-medium text-white/90 leading-tight">
                Conversion-led design
              </p>
            </div>
          </div>

          {/* Right: Frosted Social Media Pill */}
          <div className="inline-flex items-center gap-4 px-4 py-2 sm:py-2.5 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.37)] text-white/80 self-end sm:self-auto">
            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="hover:text-white transition cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Dribbble / Basketball Sphere */}
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Dribbble"
              className="hover:text-white transition cursor-pointer"
            >
              <svg
                className="w-3.5 h-3.5 stroke-current fill-none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white transition cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>

            {/* End dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: MIDDLE SECTION (DARK / BLACK GRID)
          ========================================================================= */}
      <section className="bg-[#000000] text-white pt-16 sm:pt-24 pb-20 sm:pb-32 px-4 sm:px-10 md:px-14 lg:px-20 relative z-20">
        <div className="max-w-[1360px] mx-auto">
          {/* Main Headline Center */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold uppercase tracking-tight text-white mb-1">
              <span>LET’S MOVE</span>
              {/* White Blueprint Badge */}
              <span className="inline-flex items-center gap-1.5 bg-white text-black px-2.5 sm:px-3.5 py-1 rounded-[3px] shadow-sm align-middle select-none">
                <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-black" viewBox="0 0 24 24">
                  <path d="M4 4h7v7H4zm9 0h7v7h-7zm-9 9h7v7H4zm9 0h7v7h-7z" />
                </svg>
                <span className="text-[10px] sm:text-[11px] md:text-xs font-black tracking-widest uppercase">
                  BLUEPRINT
                </span>
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold uppercase tracking-tight text-white">
              DESIGN FOR THE NEXT ERA
            </h2>
          </div>

          {/* 3-Column Card Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 items-start">
            {/* Card 1: Left Model Profile */}
            <div className="flex flex-col">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl group">
                <Image
                  src="/images/profile.jpg"
                  alt="Visual worlds portrait"
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start gap-3 mt-5 sm:mt-6 px-1">
                <span className="text-3xl font-extralight text-white leading-none shrink-0 select-none">
                  +
                </span>
                <p className="text-xs md:text-[13px] text-neutral-300 font-normal leading-relaxed max-w-xs">
                  We create visual worlds that captivate today and define tomorrow.
                </p>
              </div>
            </div>

            {/* Card 2: Center Dark Green Fluted Ribbed Glass */}
            <div className="flex flex-col">
              <div className="fluted-glass rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-between border border-emerald-900/40 relative overflow-hidden shadow-2xl aspect-[4/5]">
                <div>
                  {/* Blueprint stylized "B" monogram */}
                  <div className="w-7 h-7 mb-8 sm:mb-10 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-6 h-6 text-white"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 4h7a4 4 0 0 1 0 8H5V4zm0 8h8a4 4 0 0 1 0 8H5v-8z" />
                    </svg>
                  </div>

                  {/* Heading */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight leading-snug">
                    Bring Your Ideas to Life<br />with Blueprint —
                  </h3>

                  {/* Subtext */}
                  <p className="text-xs text-emerald-100/75 mt-3 leading-relaxed max-w-xs">
                    We turn ideas into bold campaigns that connect with audiences everywhere.
                  </p>
                </div>

                {/* Bottom link */}
                <div className="mt-6">
                  <a
                    href="#work"
                    className="text-xs text-neutral-200 hover:text-white transition font-medium underline underline-offset-4 cursor-pointer"
                  >
                    Work with Blueprint
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Right White Balaclava Model */}
            <div className="flex flex-col md:col-span-2 lg:col-span-1">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl group">
                <Image
                  src="/images/balaclava.jpg"
                  alt="Explore Now portrait"
                  fill
                  quality={90}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex justify-end mt-5 sm:mt-6 px-1">
                <a
                  href="#explore"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-white/40 text-white text-[11px] font-semibold tracking-wider hover:bg-white hover:text-black transition uppercase cursor-pointer"
                >
                  <span>EXPLORE NOW</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: LOWER SECTION (CLEAN CRISP WHITE)
          ========================================================================= */}
      <section className="bg-white text-black pt-20 sm:pt-28 pb-24 sm:pb-36 px-4 sm:px-10 md:px-14 lg:px-20 relative z-20">
        <div className="max-w-[1360px] mx-auto">
          {/* Header Row: Title & Button Left, Statement & Description Right */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-10 mb-14 sm:mb-20">
            {/* Left Header */}
            <div>
              <h2 className="text-3xl min-[390px]:text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.08]">
                Brand Strategy &amp;<br />
                Product Design.
              </h2>
              <a
                href="#case-studies"
                className="mt-5 sm:mt-6 inline-flex items-center gap-2.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-black text-white hover:bg-neutral-800 transition text-xs font-semibold tracking-tight shadow-md cursor-pointer"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Right Sub-Heading & Paragraph */}
            <div className="max-w-lg lg:pt-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-neutral-900 leading-snug">
                Case studies - showing how we craft strong brands that harness the power of social media with cutting-edge strategy
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-3 sm:mt-4 leading-relaxed max-w-md">
                We design clear visual systems and strong identities for modern ambitious brands everywhere
              </p>
            </div>
          </div>

          {/* Bottom 4 Case Study Cards (Staggered Heights on Desktop, Fluid on Mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            {/* Card 1: Strategy (Tall Dark Card) */}
            <div className="bg-[#111111] text-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between h-[360px] sm:h-[440px] lg:h-[480px] shadow-sm relative overflow-hidden border border-neutral-900 transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="inline-block bg-white text-black text-[11px] font-semibold px-4 py-1.5 rounded-full">
                  Strategy
                </span>
              </div>
              <div>
                <div className="text-xl font-light text-white mb-2 leading-none select-none">+</div>
                <h4 className="text-sm md:text-[15px] font-bold text-white leading-snug">
                  Strategies that define the new standard
                </h4>
                <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed">
                  We don&apos;t just follow trends, we build the foundational identities that lead industries.
                </p>
              </div>
            </div>

            {/* Card 2: Growth (Dark Emerald Green with Water Splash Cosmetic Product) */}
            <div className="bg-[#092218] text-white rounded-3xl p-5 flex flex-col justify-between h-[330px] sm:h-[400px] lg:h-[420px] shadow-sm relative overflow-hidden border border-emerald-900/60 transition-transform duration-300 hover:-translate-y-1 group">
              {/* Product Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/product.jpg"
                  alt="Product High-Velocity Growth"
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center opacity-85 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092218] via-[#092218]/40 to-transparent" />
              </div>

              {/* Top Tag */}
              <div className="relative z-10">
                <span className="inline-block bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium px-4 py-1.5 rounded-full">
                  Growth
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <div className="text-xl font-light text-white mb-2 leading-none select-none">+</div>
                <h4 className="text-sm md:text-[15px] font-bold text-white leading-snug">
                  High-velocity growth, backed by data
                </h4>
                <p className="text-[11px] text-neutral-300 mt-2 leading-relaxed">
                  Moving beyond vanity metrics to deliver scalable reach and tangible revenue.
                </p>
              </div>
            </div>

            {/* Card 3: Creative (Full Portrait in Water with Sunglasses) */}
            <div className="rounded-3xl p-5 sm:p-6 flex flex-col justify-between h-[380px] sm:h-[460px] lg:h-[490px] shadow-sm relative overflow-hidden border border-neutral-800 transition-transform duration-300 hover:-translate-y-1 group">
              {/* Cover Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/creative.jpg"
                  alt="Radical creativity"
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Dark Vignette Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20" />
              </div>

              {/* Top Tag */}
              <div className="relative z-10">
                <span className="inline-block bg-black/40 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium px-4 py-1.5 rounded-full">
                  Creative
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10">
                <div className="text-xl font-light text-white mb-2 leading-none select-none">+</div>
                <h4 className="text-sm md:text-[15px] font-bold text-white leading-snug">
                  Radical creativity at the speed of light
                </h4>
                <p className="text-[11px] text-white/80 mt-2 leading-relaxed">
                  Bold visual storytelling and rapid execution that keeps your brand ahead of the curve.
                </p>
              </div>
            </div>

            {/* Card 4: Powerful (Dark Card) */}
            <div className="bg-[#111111] text-white rounded-3xl p-5 sm:p-6 flex flex-col justify-between h-[340px] sm:h-[420px] lg:h-[440px] shadow-sm relative overflow-hidden border border-neutral-900 transition-transform duration-300 hover:-translate-y-1">
              <div>
                <span className="inline-block bg-white text-black text-[11px] font-semibold px-4 py-1.5 rounded-full">
                  Powerful
                </span>
              </div>
              <div>
                <div className="text-xl font-light text-white mb-2 leading-none select-none">+</div>
                <h4 className="text-sm md:text-[15px] font-bold text-white leading-snug">
                  Unstoppable talent, unified vision
                </h4>
                <p className="text-[11px] text-neutral-400 mt-2 leading-relaxed">
                  A collective of specialists dedicated to navigating your brand from inception to global scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ENDING PAGE FOOTER (PAGE MENU & PANORAMIC ARTWORK)
          ========================================================================= */}
      <Footer />
    </main>
  );
}
