import React from 'react';
import { ArrowRight, PlayCircle, TrendingUp } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onViewPlansClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewPlansClick }) => {
  return (
    <section id="top" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Soft moving green radial light background */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[520px] w-[520px] rounded-full hero-glow z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-page-margin grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl lg:gap-gutter-lg items-center">
        {/* Left: Bilingual Editorial Copy */}
        <div className="lg:col-span-7 flex flex-col gap-gutter-lg">
          {/* Prominent Supplied Brand Mark in Hero */}
          <div className="animate-fade-rise inline-flex items-center gap-gutter-md self-start rounded-lg glass-panel px-gutter-md py-2.5">
            <BrandLogo showDomain={false} />
            <div className="h-6 w-px bg-outline-green" />
            <span className="font-mono text-mono-md text-primary font-semibold">
              bado • बढ़ो
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="animate-fade-rise delay-1 font-display text-display-xl-mobile md:text-display-xl text-on-surface text-balance font-extrabold tracking-tight">
            Aapka{' '}
            <span className="font-devanagari text-primary font-extrabold">धंधा</span>.
            <br />
            Ab online bhi chalega.
          </h1>

          {/* Supporting Copy */}
          <p className="animate-fade-rise delay-2 font-body text-body-lg text-on-surface-muted text-pretty max-w-prose">
            We help local businesses get noticed, earn trust, and turn social
            media into real enquiries through Reels, content, Meta ads, and
            Google growth.
          </p>

          {/* Hero CTAs */}
          <div className="animate-fade-rise delay-3 flex flex-col sm:flex-row sm:items-center gap-gutter-md pt-gutter-xs">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-gutter-sm rounded-full bg-primary px-gutter-xl py-4 text-on-primary transition-all duration-state-change ease-state-change hover:-translate-y-0.5 hover:bg-primary-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer shadow-lg shadow-primary/10"
            >
              <span className="font-label text-label-lg font-bold">
                Get a Free Growth Audit
              </span>
              <ArrowRight className="w-5 h-5 transition-transform duration-state-change group-hover:translate-x-1" />
            </a>

            <button
              type="button"
              onClick={onViewPlansClick}
              className="inline-flex items-center justify-center gap-gutter-sm rounded-full border border-outline-green bg-surface-container/60 backdrop-blur-md px-gutter-xl py-4 text-on-surface transition-colors duration-state-change ease-state-change hover:border-primary hover:bg-surface-container-high focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary cursor-pointer font-label text-label-lg font-semibold"
            >
              <span>View Plans</span>
            </button>
          </div>

          {/* Trust line underneath */}
          <div className="animate-fade-rise delay-3 flex items-center gap-gutter-sm pt-gutter-xs">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            <p className="font-label text-label-sm text-on-surface-muted">
              For local businesses ready to grow.
            </p>
          </div>
        </div>

        {/* Right: Layered Glass Composition (Reels + Enquiry Notification + Local Growth Visual) */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Two staggered 9:16 Reel cards */}
            <div className="grid grid-cols-2 gap-gutter-md items-center">
              {/* Card 1: Local Cafe */}
              <div className="glass-panel rounded-lg p-gutter-xs transition-transform duration-card-hover hover:-translate-y-1">
                <div className="relative aspect-[9/16] overflow-hidden rounded-md bg-surface-container">
                  <img
                    src="https://lh3.googleusercontent.com/aida/ALJJyrBNstDTH8CedYLHk8wn0BLm80Aj2CluJWL026yDVeKFA-Yjs2iuJ0o6TPiWLg6u4AykDxujkOzQ3x_EiMe1jsZdKNbE7KRMz4MQfO9vL0SjTQG9WY0vUhD8Tmz4ERdhEjiDtQUv7Zt_Stid5CEuCW-m9dXsKyFh53lpu4XO8oS9hsRgPwZGUnM5kjkdJA8VCv7pv_MLs647tGVfZPQ9vQsKGHhbLEYixYzLOyMw4krGEA-6kipOzlbqeaQEO1eKRMTcEA"
                    alt="Local specialty café Reel preview"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 reel-scrim px-gutter-sm py-2.5 border-t border-outline-green/30">
                    <span className="inline-flex items-center gap-1.5 font-label text-label-sm text-on-surface font-medium">
                      <PlayCircle className="w-4 h-4 text-primary shrink-0" />
                      <span>Local Café Reel</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Fitness Studio */}
              <div className="glass-panel rounded-lg p-gutter-xs translate-y-6 transition-transform duration-card-hover hover:-translate-y-1">
                <div className="relative aspect-[9/16] overflow-hidden rounded-md bg-surface-container">
                  <img
                    src="https://lh3.googleusercontent.com/aida/ALJJyrBGRKRCWdoLu_2cx5rxtkHPyX7jeVbdrKBZHDea04ObAEtfS1cSLrd8R7dAYLyr_dWYSrW9lp2hdOFPbcPaHBFfrUu2KIvC9p3KkWsTwQnLxPGavW8_3bVGpbSxIBWZdWEtHUcneob_vht5IVkXOU7E407FqnXqXlz9XPVBVlLgONx-Q_WRl3aKK8bqcNy15P5a5tvdkNB4aVTvCCLcsJfeMiNReSpwbkgu6zbDB1BnodusL03WD6II7LbRBeliEr5MsDS_Gg"
                    alt="Local fitness studio Reel preview"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 reel-scrim px-gutter-sm py-2.5 border-t border-outline-green/30">
                    <span className="inline-flex items-center gap-1.5 font-label text-label-sm text-on-surface font-medium">
                      <PlayCircle className="w-4 h-4 text-primary shrink-0" />
                      <span>Fitness Studio</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Enquiry Notification */}
            <div className="glass-panel rounded-lg p-gutter-md mt-gutter-lg sm:mt-0 sm:absolute sm:-left-6 sm:top-6 sm:max-w-xs z-10">
              <div className="flex items-center gap-gutter-sm mb-1">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-soft-lime" aria-hidden="true" />
                <span className="font-mono text-mono-md text-primary font-semibold">
                  नया ग्राहक • Enquiry
                </span>
              </div>
              <p className="font-body text-body-md text-on-surface">
                “Saw your Reel — can we book a table for 6 tonight?”
              </p>
            </div>

            {/* Local Growth Visual Card */}
            <div className="glass-panel rounded-lg p-gutter-md mt-gutter-md sm:mt-0 sm:absolute sm:-bottom-4 sm:right-2 sm:w-72 z-10">
              <div className="flex items-center justify-between gap-gutter-sm mb-gutter-xs">
                <span className="font-label text-label-sm text-on-surface-muted">
                  Local Search &amp; Maps
                </span>
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <p className="font-label text-label-lg text-on-surface font-semibold">
                Calls • Directions • DMs
              </p>
              <div className="mt-gutter-sm flex items-center gap-1.5">
                <span className="h-1.5 w-8 rounded-full bg-primary/40" />
                <span className="h-1.5 w-12 rounded-full bg-primary/70" />
                <span className="h-1.5 flex-1 rounded-full bg-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
