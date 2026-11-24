import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_ITEMS, SITE_CONFIG } from '../data/siteData';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onAuditClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onAuditClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (href === '#contact') {
      onAuditClick();
      return;
    }

    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-surface-enter ${
        isScrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-page-margin h-20 flex items-center justify-between gap-gutter-md">
        {/* Left: धंधा Logo (Unaltered) */}
        <a
          href="#top"
          onClick={(e) => handleNavLinkClick(e, '#top')}
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-md"
          aria-label="Dhandha.online home"
        >
          <BrandLogo />
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Primary" className="hidden lg:flex items-center gap-gutter-xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavLinkClick(e, item.href)}
              className="font-label text-label-lg text-on-surface-muted hover:text-primary transition-colors duration-state-change focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary rounded-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right: Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-gutter-sm">
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden sm:inline-flex items-center justify-center gap-gutter-xs rounded-full bg-primary px-gutter-lg py-2.5 text-on-primary transition-all duration-state-change ease-state-change hover:-translate-y-0.5 hover:bg-primary-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:translate-y-0 cursor-pointer"
          >
            <span className="font-label text-label-lg font-semibold">Free Growth Audit</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-state-change group-hover:translate-x-1" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-outline bg-surface-container/75 text-on-surface backdrop-blur-md transition-colors duration-state-change hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden transition-all duration-300 ease-in-out border-t border-outline-green/40 bg-surface-container/95 backdrop-blur-xl px-page-margin py-gutter-lg ${
          mobileMenuOpen ? 'block opacity-100 max-h-[500px]' : 'hidden opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        <nav aria-label="Mobile Navigation" className="flex flex-col gap-gutter-md">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavLinkClick(e, item.href)}
              className="font-title text-title-lg text-on-surface hover:text-primary py-1 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-gutter-sm inline-flex items-center justify-center gap-gutter-sm rounded-full bg-primary px-gutter-lg py-3.5 text-on-primary font-label text-label-lg font-semibold w-full cursor-pointer hover:bg-primary-glow transition-colors"
          >
            <span>Free Growth Audit</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  );
};
