import React from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-outline/60 bg-surface-container/40 py-12">
      <div className="max-w-7xl mx-auto px-page-margin flex flex-col gap-gutter-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-gutter-lg">
          {/* Supplied Logo + Tagline */}
          <div className="flex flex-col gap-gutter-sm">
            <a href="#top" className="inline-flex self-start" aria-label="Back to top">
              <BrandLogo />
            </a>
            <p className="font-body text-body-md text-on-surface-muted">
              <span className="font-devanagari text-primary font-bold">धंधा</span>
              .online — {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Contact & Social Links */}
          <div className="flex flex-wrap items-center gap-gutter-lg">
            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-label text-label-sm text-primary hover:text-primary-glow font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center gap-1.5 font-label text-label-sm text-on-surface-muted hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>{SITE_CONFIG.email}</span>
            </a>
            <span className="inline-flex items-center gap-1.5 font-label text-label-sm text-on-surface-muted">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{SITE_CONFIG.locations}</span>
            </span>
          </div>
        </div>

        <div className="pt-gutter-md border-t border-outline/40 flex flex-col sm:flex-row sm:items-center justify-between gap-gutter-sm text-xs">
          <div className="flex items-center gap-gutter-md">
            <a
              href="#work"
              className="font-label text-label-sm text-on-surface-muted hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="#work"
              className="font-label text-label-sm text-on-surface-muted hover:text-primary transition-colors"
            >
              YouTube
            </a>
            <a
              href="#work"
              className="font-label text-label-sm text-on-surface-muted hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <p className="font-label text-label-sm text-on-surface-muted">
            Built for Indian local businesses ready to grow. © {new Date().getFullYear()} Dhandha.online
          </p>
        </div>
      </div>
    </footer>
  );
};
