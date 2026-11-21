import React from 'react';
import { EyeOff, Shuffle, MessageSquareDashed, ArrowDown } from 'lucide-react';
import { PROBLEM_CARDS } from '../data/siteData';

interface RealityCheckProps {
  onSeeHowClick: () => void;
}

export const RealityCheck: React.FC<RealityCheckProps> = ({ onSeeHowClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'EyeOff':
        return <EyeOff className="w-5 h-5 text-primary" />;
      case 'Shuffle':
        return <Shuffle className="w-5 h-5 text-primary" />;
      case 'MessageSquareDashed':
      default:
        return <MessageSquareDashed className="w-5 h-5 text-primary" />;
    }
  };

  return (
    <section id="about" className="py-16 lg:py-24 border-t border-outline/40">
      <div className="max-w-7xl mx-auto px-page-margin flex flex-col gap-gutter-xl">
        <div className="flex flex-col gap-gutter-sm max-w-2xl">
          <span className="font-mono text-mono-md text-primary font-semibold">
            THE REALITY CHECK
          </span>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface text-balance font-extrabold tracking-tight">
            Achha dhanda hai.
            <br />
            <span className="text-on-surface-muted font-bold">
              Par logon ko pata hai?
            </span>
          </h2>
        </div>

        {/* 3 Clean Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-lg items-stretch">
          {PROBLEM_CARDS.map((card) => (
            <article
              key={card.id}
              className="glass-panel h-full rounded-lg p-gutter-lg flex flex-col gap-gutter-md transition-all duration-card-hover ease-card-hover hover:-translate-y-1"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-surface-container-high border border-outline-green text-primary">
                {getIcon(card.iconName)}
              </div>
              <h3 className="font-title text-title-lg text-on-surface font-bold">
                {card.title}
              </h3>
              <p className="font-body text-body-md text-on-surface-muted text-pretty">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        {/* Solution Bridge */}
        <div className="glass-panel rounded-lg px-gutter-lg py-gutter-lg flex flex-col sm:flex-row sm:items-center justify-between gap-gutter-md">
          <p className="font-headline text-headline-md text-on-surface font-bold">
            Dhandha.online turns{' '}
            <span className="text-primary">attention into action</span>.
          </p>
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              onSeeHowClick();
            }}
            className="inline-flex items-center gap-gutter-xs font-label text-label-lg text-primary hover:text-primary-glow shrink-0 transition-colors font-semibold cursor-pointer"
          >
            <span>See how we do it</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
