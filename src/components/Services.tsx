import React from 'react';
import { Film, Calendar, MousePointerClick, MapPin } from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Film':
        return <Film className="w-6 h-6 text-primary" />;
      case 'Calendar':
        return <Calendar className="w-6 h-6 text-primary" />;
      case 'MousePointerClick':
        return <MousePointerClick className="w-6 h-6 text-primary" />;
      case 'MapPin':
      default:
        return <MapPin className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 border-t border-outline/40">
      <div className="max-w-7xl mx-auto px-page-margin flex flex-col gap-gutter-xl">
        <div className="flex flex-col gap-gutter-sm max-w-2xl">
          <span className="font-mono text-mono-md text-primary font-semibold">
            WHAT WE DO
          </span>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface text-balance font-extrabold tracking-tight">
            Online growth, seedha aapke{' '}
            <span className="text-primary">dhande</span> ke liye.
          </h2>
        </div>

        {/* Four Large Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-lg items-stretch">
          {SERVICES_DATA.map((service) => (
            <article
              key={service.id}
              className="glass-panel h-full rounded-lg p-gutter-xl flex flex-col justify-between gap-gutter-lg transition-transform duration-card-hover ease-card-hover hover:-translate-y-1"
            >
              <div className="flex flex-col gap-gutter-md">
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-surface-container-high border border-outline-green text-primary">
                    {getServiceIcon(service.iconName)}
                  </span>
                  <span className="font-mono text-mono-md text-on-surface-muted tabular-nums font-semibold">
                    {service.number}
                  </span>
                </div>
                <h3 className="font-headline text-headline-md text-on-surface font-bold">
                  {service.title}
                </h3>
                <p className="font-body text-body-lg text-on-surface-muted text-pretty">
                  {service.description}
                </p>
              </div>

              <div className="pt-gutter-md border-t border-outline/50 flex flex-wrap gap-gutter-sm">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-outline-green/60 px-3 py-1 font-label text-label-sm text-on-surface-muted font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
