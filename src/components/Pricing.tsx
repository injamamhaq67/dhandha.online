import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/siteData';

interface PricingProps {
  onSelectPlan: (planId: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="plans" className="py-16 lg:py-24 border-t border-outline/40">
      <div className="max-w-7xl mx-auto px-page-margin flex flex-col gap-gutter-xl">
        <div className="flex flex-col gap-gutter-sm max-w-2xl">
          <span className="font-mono text-mono-md text-primary font-semibold">
            MONTHLY PLANS
          </span>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface text-balance font-extrabold tracking-tight">
            Choose how fast you want to <span className="text-primary">grow</span>.
          </h2>
        </div>

        {/* 3 Vertical Glass Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-lg items-stretch">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.isPopular;

            return (
              <article
                key={plan.id}
                className={`${
                  isFeatured ? 'glass-panel-featured' : 'glass-panel'
                } h-full rounded-lg p-gutter-xl flex flex-col justify-between gap-gutter-lg transition-transform duration-card-hover hover:-translate-y-1.5`}
              >
                <div className="flex flex-col gap-gutter-lg">
                  <header className="flex flex-col gap-gutter-xs">
                    <div className="flex items-center justify-between gap-gutter-sm min-h-[28px]">
                      <span
                        className={`font-label text-label-sm ${
                          isFeatured ? 'text-primary' : 'text-on-surface-muted'
                        } font-medium`}
                      >
                        {plan.tagline}
                      </span>
                      {isFeatured && (
                        <span className="rounded-full bg-primary px-3 py-1 font-label text-label-sm text-on-primary font-bold">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <h3 className="font-headline text-headline-md text-on-surface font-bold">
                      {plan.name}
                    </h3>
                    <div className="pt-gutter-sm flex items-baseline gap-1">
                      <span
                        className={`font-headline text-headline-lg-mobile md:text-headline-lg ${
                          isFeatured ? 'text-primary' : 'text-on-surface'
                        } tabular-nums font-extrabold`}
                      >
                        {plan.price}
                      </span>
                      <span className="font-body text-body-md text-on-surface-muted">
                        {plan.period}
                      </span>
                    </div>
                  </header>

                  <ul
                    className={`flex flex-col gap-gutter-md border-t ${
                      isFeatured ? 'border-outline-green/60' : 'border-outline/60'
                    } pt-gutter-lg`}
                  >
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-gutter-sm font-body text-body-md text-on-surface"
                      >
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <footer className="pt-gutter-md">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.name)}
                    className={`group w-full inline-flex items-center justify-center gap-gutter-sm rounded-full ${
                      isFeatured
                        ? 'bg-primary text-on-primary hover:bg-primary-glow'
                        : 'border border-outline-green bg-surface-container/80 text-on-surface hover:border-primary hover:bg-surface-container-high'
                    } px-gutter-lg py-3.5 font-label text-label-lg font-semibold transition-all duration-state-change hover:-translate-y-0.5 cursor-pointer`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-state-change group-hover:translate-x-1" />
                  </button>
                </footer>
              </article>
            );
          })}
        </div>

        <p className="font-label text-label-sm text-on-surface-muted text-center">
          Ad budget is separate and paid directly by the client.
        </p>
      </div>
    </section>
  );
};
