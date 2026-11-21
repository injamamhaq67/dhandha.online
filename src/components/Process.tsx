import React from 'react';
import { PROCESS_STEPS } from '../data/siteData';

export const Process: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 border-t border-outline/40">
      <div className="max-w-7xl mx-auto px-page-margin flex flex-col gap-gutter-xl">
        <div className="flex flex-col gap-gutter-sm max-w-2xl">
          <span className="font-mono text-mono-md text-primary font-semibold">
            HOW IT WORKS
          </span>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface text-balance font-extrabold tracking-tight">
            Simple process. <span className="text-primary">Solid growth.</span>
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-lg">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="glass-panel rounded-lg p-gutter-lg flex flex-col gap-gutter-md transition-transform duration-card-hover hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-headline-md text-primary tabular-nums font-bold">
                  {step.number}
                </span>
                {idx < PROCESS_STEPS.length - 1 && (
                  <span
                    className="h-px flex-1 mx-gutter-md bg-outline-green/60 hidden lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="font-label text-label-lg text-on-surface font-bold">
                {step.title}
              </h3>
              <p className="font-body text-body-md text-on-surface-muted text-pretty">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
