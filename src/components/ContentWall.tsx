import React from 'react';
import { PlayCircle } from 'lucide-react';
import { REELS_PORTFOLIO } from '../data/siteData';

export const ContentWall: React.FC = () => {
  return (
    <section id="work" className="py-16 lg:py-24 border-t border-outline/40">
      <div className="max-w-7xl mx-auto px-page-margin flex flex-col gap-gutter-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-gutter-md">
          <div className="flex flex-col gap-gutter-sm max-w-2xl">
            <span className="font-mono text-mono-md text-primary font-semibold">
              CONTENT WALL &amp; CASE STUDIES
            </span>
            <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface text-balance font-extrabold tracking-tight">
              Kaam aisa, <span className="text-primary">results waise</span>.
            </h2>
          </div>
          <span className="font-label text-label-sm text-on-surface-muted select-none">
            Scroll Reels horizontally →
          </span>
        </div>

        {/* Horizontal Momentum Reels Content Wall */}
        <div className="reels-strip flex gap-gutter-lg overflow-x-auto pb-gutter-sm pt-2">
          {REELS_PORTFOLIO.map((reel) => (
            <article
              key={reel.id}
              className="glass-panel shrink-0 w-64 sm:w-72 rounded-lg p-gutter-xs snap-start transition-transform duration-card-hover hover:-translate-y-1"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-md bg-surface-container">
                <img
                  src={reel.imageUrl}
                  alt={reel.altText}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-x-0 bottom-0 reel-scrim p-gutter-md border-t border-outline-green/30 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-mono-md text-primary font-semibold">
                      {reel.category}
                    </span>
                    <PlayCircle className="w-4 h-4 text-primary shrink-0 opacity-80" />
                  </div>
                  <p className="font-title text-title-lg text-on-surface font-semibold text-pretty">
                    {reel.title}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
