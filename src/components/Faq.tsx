import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_DATA } from '../data/siteData';

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_DATA[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 lg:py-24 border-t border-outline/40">
      <div className="max-w-4xl mx-auto px-page-margin flex flex-col gap-gutter-xl">
        <div className="flex flex-col gap-gutter-sm text-center items-center">
          <span className="font-mono text-mono-md text-primary font-semibold">
            SAWAAL &amp; JAWAAB • FAQ
          </span>
          <h2 className="font-headline text-headline-lg-mobile md:text-headline-lg text-on-surface text-balance font-extrabold tracking-tight">
            Aapke sawaal, <span className="text-primary">seedhe jawaab</span>.
          </h2>
          <p className="font-body text-body-lg text-on-surface-muted text-pretty max-w-prose">
            Clear, transparent answers for business owners ready to take their dhandha online.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-gutter-md">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="glass-panel rounded-lg overflow-hidden transition-colors duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full flex items-center justify-between gap-gutter-md p-gutter-lg text-left cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
                  <span className="font-title text-title-lg text-on-surface font-semibold">
                    {item.question}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full border border-outline-green flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-primary/20 text-primary' : 'text-on-surface-muted'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  className={`transition-all duration-300 ease-in-out px-gutter-lg ${
                    isOpen
                      ? 'max-h-96 pb-gutter-lg opacity-100'
                      : 'max-h-0 pb-0 opacity-0 overflow-hidden'
                  }`}
                >
                  <p className="font-body text-body-md text-on-surface-muted leading-relaxed border-t border-outline/40 pt-gutter-md">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
