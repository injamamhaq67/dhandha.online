import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      /* 
        WhatsApp Business number and prefilled message are configured in src/data/siteData.ts
        Link: https://wa.me/917869817961?text=Hi%20Dhandha.online%2C%20I%20want%20to%20grow%20my%20business%20online.
      */
      href={SITE_CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Quick contact on WhatsApp (opens in new tab)"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-gutter-xs rounded-full bg-primary px-4 py-3 text-on-primary font-bold shadow-lg shadow-primary/20 transition-all duration-state-change hover:-translate-y-0.5 hover:bg-primary-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary cursor-pointer active:translate-y-0"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="font-label text-label-sm">WhatsApp</span>
    </a>
  );
};
