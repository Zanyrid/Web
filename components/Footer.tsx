"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="relative bg-[#050806] text-white border-t border-neutral-900/80 overflow-hidden pt-12 sm:pt-16 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-emerald-950/20 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-10 md:px-14 lg:px-20">
        {/* Top Credit / Studio Sub-bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-10 mb-12 sm:mb-16 border-b border-white/[0.08] text-xs text-neutral-400 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white">
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5zm4 4h-2v-2h2v2zm0-4h-2V7h2v5z" />
              </svg>
            </div>
            <div>
              <span className="text-neutral-500 block text-[10px] uppercase tracking-wider">
                Designed by
              </span>
              <span className="font-semibold text-white tracking-wide">
                Blueprint Studio
              </span>
            </div>
          </div>

          <a
            href="https://blueprint.agency"
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-white transition font-mono text-[11px] tracking-tight hover:underline underline-offset-4"
          >
            https://blueprint.agency/
          </a>
        </div>

        {/* Main 5-Column Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16">
          {/* Column 1: Brand & Contact Info (Span 4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-white shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-emerald-400"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 4h7a4 4 0 0 1 0 8H5V4zm0 8h8a4 4 0 0 1 0 8H5v-8z" />
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white">
                Blueprint
              </span>
            </div>

            {/* Tagline */}
            <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed max-w-xs">
              Designing digital experiences that inspire, engage, and create a lasting impact.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 pt-2 text-xs sm:text-[13px] text-neutral-300">
              <a
                href="mailto:hello@blueprint.agency"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <span className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 transition">
                  <Mail className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-400 transition" />
                </span>
                <span>hello@blueprint.agency</span>
              </a>

              <a
                href="tel:+18002468100"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <span className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-emerald-500/50 transition">
                  <Phone className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-400 transition" />
                </span>
                <span>+1 (800) 246-8100</span>
              </a>

              <div className="flex items-center gap-3 text-neutral-400">
                <span className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                </span>
                <span>New York · London · Tokyo</span>
              </div>
            </div>
          </div>

          {/* Column 2: CAPABILITIES / SERVICES (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-400">
              <li>
                <a href="#branding" className="hover:text-white transition">
                  All Collections
                </a>
              </li>
              <li>
                <a href="#digital" className="hover:text-white transition">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#strategy" className="hover:text-white transition">
                  Product Design
                </a>
              </li>
              <li>
                <a href="#art" className="hover:text-white transition">
                  Art Direction
                </a>
              </li>
              <li>
                <a href="#systems" className="hover:text-white transition">
                  Design Systems
                </a>
              </li>
              <li>
                <a href="#spatial" className="hover:text-white transition">
                  Spatial Design
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: ABOUT US (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
              About Us
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-400">
              <li>
                <a href="#story" className="hover:text-white transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#craftsmanship" className="hover:text-white transition">
                  Craftsmanship
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-white transition">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition flex items-center gap-1.5">
                  Careers
                  <span className="text-[9px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">
                    Hiring
                  </span>
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-white transition">
                  Press &amp; Media
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: HELP & SUPPORT (Span 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
              Help &amp; Support
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-neutral-400">
              <li>
                <a href="#faqs" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-white transition">
                  Client Portal
                </a>
              </li>
              <li>
                <a href="#track" className="hover:text-white transition">
                  Track Your Project
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: NEWSLETTER (Span 2 cols / remaining) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Subscribe to get updates on new case studies, design insights &amp; exclusive perspectives.
            </p>

            <form onSubmit={handleSubscribe} className="pt-1">
              <div className="flex items-center border border-white/15 rounded-md overflow-hidden bg-black/60 focus-within:border-emerald-500/80 transition shadow-inner">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  aria-label="Email address"
                  className="w-full bg-transparent px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="bg-emerald-950 hover:bg-emerald-900 border-l border-white/10 px-3.5 py-2.5 text-white transition flex items-center justify-center shrink-0 cursor-pointer"
                >
                  {subscribed ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 mt-2 font-medium">
                  Thank you for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* =========================================================================
            PANORAMIC LANDSCAPE ARTWORK (MATCHING THEME)
            Intricate oriental & architectural zen illustration styled in dark emerald
            ========================================================================= */}
        <div className="relative w-full my-6 sm:my-10 rounded-2xl overflow-hidden border border-emerald-950/50 bg-gradient-to-b from-[#020905] via-[#05140d] to-[#020905] shadow-[0_0_60px_rgba(4,26,17,0.35)]">
          {/* Ambient lighting inside illustration */}
          <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />

          {/* SVG Panoramic Artwork */}
          <svg
            viewBox="0 0 1440 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto max-h-[340px] object-cover block"
          >
            <defs>
              <linearGradient id="skyGlow" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#0b2b1d" stopOpacity="0.4" />
                <stop offset="60%" stopColor="#04120c" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#020805" stopOpacity="1" />
              </linearGradient>

              <linearGradient id="riverGrad" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#0f442d" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#155d3e" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#0a2a1c" stopOpacity="0.7" />
              </linearGradient>

              <linearGradient id="lineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#34d399" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Background Sky & Distant Mountains */}
            <rect width="1440" height="380" fill="url(#skyGlow)" />

            {/* Soft Distant Mountain Ridges */}
            <path
              d="M0 240 Q160 170 340 210 T720 180 T1100 210 T1440 190 L1440 380 L0 380 Z"
              fill="#061a12"
              opacity="0.6"
            />
            <path
              d="M0 260 Q240 210 520 250 T1040 230 T1440 240 L1440 380 L0 380 Z"
              fill="#082218"
              opacity="0.7"
            />

            {/* Distant Minimal Pagoda on Mountain (Far Left) */}
            <g opacity="0.4">
              <path d="M120 200 L140 185 L160 200 Z" fill="#34d399" />
              <rect x="135" y="195" width="10" height="20" fill="#34d399" />
              <path d="M115 215 L140 205 L165 215 Z" fill="#34d399" />
            </g>

            {/* S-Curved Winding Stream (The River Pathway) */}
            <path
              d="M380 380 C440 310 500 290 620 280 C760 270 820 240 850 200 C870 175 900 170 940 170"
              stroke="url(#riverGrad)"
              strokeWidth="58"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />
            {/* River fine flow lines */}
            <path
              d="M390 380 C450 315 510 295 625 285 C755 275 815 245 845 205"
              stroke="#6ee7b7"
              strokeWidth="1.5"
              strokeDasharray="8 6"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M410 380 C465 320 520 300 630 290 C750 280 810 250 840 210"
              stroke="#a7f3d0"
              strokeWidth="0.8"
              fill="none"
              opacity="0.3"
            />

            {/* Foreground Left: Ornate Luxury Vases & Arched Moon Gate */}
            {/* Vase 1 (Leftmost large vase with delicate botanical contour) */}
            <g transform="translate(60, 210)" opacity="0.9">
              {/* Vase body */}
              <path
                d="M35 150 C10 130 5 90 20 60 C28 42 32 30 30 15 L50 15 C48 30 52 42 60 60 C75 90 70 130 45 150 Z"
                fill="#072b1d"
                stroke="#34d399"
                strokeWidth="1.5"
              />
              {/* Vase neck and rim */}
              <ellipse cx="40" cy="15" rx="12" ry="4" fill="#0c422e" stroke="#34d399" strokeWidth="1.2" />
              <ellipse cx="40" cy="150" rx="10" ry="3" fill="#04140e" stroke="#34d399" strokeWidth="1" />
              {/* Vase internal patterns (Chinese ceramic motifs) */}
              <circle cx="40" cy="80" r="14" stroke="#6ee7b7" strokeWidth="1" strokeDasharray="3 3" fill="none" opacity="0.6" />
              <path d="M30 80 Q40 70 50 80 Q40 90 30 80" stroke="#a7f3d0" strokeWidth="1" fill="none" opacity="0.7" />
            </g>

            {/* Traditional Pavilion / Moon Gate Architecture (Left) */}
            <g transform="translate(170, 220)" opacity="0.9">
              {/* House / Wall */}
              <rect x="20" y="40" width="120" height="90" fill="#072218" stroke="#34d399" strokeWidth="1.2" />
              {/* Tiled Roof */}
              <path d="M10 40 Q80 15 150 40 L140 45 Q80 25 20 45 Z" fill="#0d3d29" stroke="#6ee7b7" strokeWidth="1.5" />
              {/* Arched Moon Gateway */}
              <path d="M60 130 A20 20 0 0 1 100 130 Z" fill="#030d09" stroke="#34d399" strokeWidth="1.2" />
              {/* Bonsai / Willow branch over gate */}
              <path d="M140 40 Q180 10 200 50 Q190 70 170 80" stroke="#34d399" strokeWidth="2" fill="none" />
              <circle cx="180" cy="30" r="12" fill="#0d3b27" opacity="0.7" />
              <circle cx="195" cy="50" r="10" fill="#0d3b27" opacity="0.7" />
              <circle cx="165" cy="65" r="9" fill="#0d3b27" opacity="0.7" />
            </g>

            {/* Pine & Blossom Trees Left */}
            <g transform="translate(300, 200)" opacity="0.85">
              <path d="M50 140 Q45 80 60 50 Q70 30 80 10" stroke="#064e3b" strokeWidth="4" strokeLinecap="round" fill="none" />
              {/* Cloud pine foliage layers */}
              <ellipse cx="80" cy="15" rx="35" ry="12" fill="#0c3b28" stroke="#34d399" strokeWidth="1" />
              <ellipse cx="50" cy="45" rx="30" ry="11" fill="#0c3b28" stroke="#34d399" strokeWidth="1" />
              <ellipse cx="95" cy="60" rx="32" ry="11" fill="#0c3b28" stroke="#34d399" strokeWidth="1" />
            </g>

            {/* Traveler / Sage on Path (Left riverbank) */}
            <g transform="translate(460, 240)" opacity="0.85">
              {/* Conical hat */}
              <path d="M10 12 L18 5 L26 12 Z" fill="#34d399" />
              {/* Robe */}
              <path d="M14 12 L12 28 L24 28 L22 12 Z" fill="#0d3f2b" stroke="#34d399" strokeWidth="0.8" />
              {/* Walking staff */}
              <line x1="25" y1="8" x2="27" y2="30" stroke="#6ee7b7" strokeWidth="1" />
            </g>

            {/* Foreground Center-Right: Fisherman in Wooden Sampan Boat */}
            <g transform="translate(610, 290)">
              {/* Boat water ripple */}
              <ellipse cx="45" cy="32" rx="55" ry="8" fill="none" stroke="#6ee7b7" strokeWidth="1" opacity="0.4" />
              {/* Wooden Sampan Boat */}
              <path
                d="M5 25 Q45 35 90 22 Q50 32 15 26 Z"
                fill="#072218"
                stroke="#34d399"
                strokeWidth="1.5"
              />
              <path d="M12 24 L85 22" stroke="#6ee7b7" strokeWidth="1" />
              {/* Fisherman with Conical Hat & Oar */}
              <path d="M52 10 L60 3 L68 10 Z" fill="#a7f3d0" />
              <path d="M56 10 L54 24 L66 24 L64 10 Z" fill="#0b3826" stroke="#34d399" strokeWidth="0.8" />
              {/* Oar in water */}
              <line x1="50" y1="12" x2="35" y2="35" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* Center Landmark: Traditional Octagonal Pavilion on Stone Base */}
            <g transform="translate(720, 160)" opacity="0.95">
              {/* Stone platform */}
              <polygon points="20,120 120,120 110,135 30,135" fill="#061f15" stroke="#34d399" strokeWidth="1" />
              {/* Pavilion pillars */}
              <line x1="35" y1="75" x2="35" y2="120" stroke="#34d399" strokeWidth="2.5" />
              <line x1="60" y1="75" x2="60" y2="120" stroke="#34d399" strokeWidth="2" />
              <line x1="80" y1="75" x2="80" y2="120" stroke="#34d399" strokeWidth="2" />
              <line x1="105" y1="75" x2="105" y2="120" stroke="#34d399" strokeWidth="2.5" />
              {/* Intricate pagoda roof with upturned eaves */}
              <path
                d="M10 75 Q70 45 130 75 Q110 55 70 30 Q30 55 10 75 Z"
                fill="#0c422e"
                stroke="#6ee7b7"
                strokeWidth="1.5"
              />
              {/* Top spire */}
              <path d="M70 30 L70 12" stroke="#a7f3d0" strokeWidth="2" strokeLinecap="round" />
              <circle cx="70" cy="12" r="3" fill="#34d399" />
              {/* Figure standing inside pavilion */}
              <path d="M78 105 L82 100 L86 105 Z" fill="#6ee7b7" />
              <rect x="80" y="105" width="4" height="12" fill="#6ee7b7" />
            </g>

            {/* Right Side: Courtyard Houses, Peony Garden, Ornate Vase */}
            <g transform="translate(980, 210)" opacity="0.9">
              {/* Main traditional residence building */}
              <rect x="40" y="45" width="130" height="95" fill="#072218" stroke="#34d399" strokeWidth="1.2" />
              {/* Two-tier curved tile roofs */}
              <path d="M25 45 Q105 18 185 45 L175 52 Q105 30 35 52 Z" fill="#0d3b28" stroke="#6ee7b7" strokeWidth="1.5" />
              {/* Upper dormer / second story */}
              <rect x="70" y="10" width="70" height="35" fill="#092d1f" stroke="#34d399" strokeWidth="1" />
              <path d="M60 10 Q105 -5 150 10 Z" fill="#0e4731" stroke="#6ee7b7" strokeWidth="1.2" />
              {/* Windows with traditional lattice grid */}
              <rect x="60" y="65" width="22" height="30" fill="#03100a" stroke="#34d399" strokeWidth="0.8" />
              <line x1="71" y1="65" x2="71" y2="95" stroke="#34d399" strokeWidth="0.8" />
              <line x1="60" y1="80" x2="82" y2="80" stroke="#34d399" strokeWidth="0.8" />

              <rect x="120" y="65" width="22" height="30" fill="#03100a" stroke="#34d399" strokeWidth="0.8" />
              <line x1="131" y1="65" x2="131" y2="95" stroke="#34d399" strokeWidth="0.8" />
              <line x1="120" y1="80" x2="142" y2="80" stroke="#34d399" strokeWidth="0.8" />
            </g>

            {/* Giant Ceramic Peonies & Ornate Vase (Right foreground) */}
            <g transform="translate(1200, 230)" opacity="0.9">
              {/* Ornate porcelain vase */}
              <path
                d="M45 130 C20 110 15 75 30 45 C38 32 40 20 38 8 L58 8 C56 20 58 32 66 45 C81 75 76 110 51 130 Z"
                fill="#072b1d"
                stroke="#34d399"
                strokeWidth="1.5"
              />
              <ellipse cx="48" cy="8" rx="10" ry="3.5" fill="#0e422f" stroke="#34d399" strokeWidth="1.2" />
              {/* Peony blossom flowers surrounding vase */}
              <circle cx="95" cy="85" r="18" fill="#0d3b28" stroke="#6ee7b7" strokeWidth="1" />
              <circle cx="95" cy="85" r="11" fill="#104e35" stroke="#a7f3d0" strokeWidth="0.8" />
              <circle cx="120" cy="100" r="14" fill="#0d3b28" stroke="#6ee7b7" strokeWidth="1" />
            </g>

            {/* Tiny Birds in Flight (Sky) */}
            <g stroke="#34d399" strokeWidth="1" fill="none" opacity="0.5">
              <path d="M880 120 Q885 116 890 120 Q895 116 900 120" />
              <path d="M910 110 Q914 107 918 110 Q922 107 926 110" />
              <path d="M935 125 Q938 122 942 125 Q945 122 949 125" />
            </g>
          </svg>
        </div>

        {/* Bottom Bar: Social Icons Left + Legal & Copyright Right */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t border-white/[0.08] gap-4 text-xs text-neutral-400">
          {/* Social Icons */}
          <div className="flex items-center gap-2.5">
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 hover:border-emerald-500/50 hover:text-white transition flex items-center justify-center cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 hover:border-emerald-500/50 hover:text-white transition flex items-center justify-center cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 hover:border-emerald-500/50 hover:text-white transition flex items-center justify-center cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/10 hover:border-emerald-500/50 hover:text-white transition flex items-center justify-center cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] text-neutral-400">
            <a href="#privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-white transition">
              Cookie Policy
            </a>
            <span className="text-neutral-600 hidden md:inline">|</span>
            <span className="text-neutral-500">
              © 2026 Blueprint Agency. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
