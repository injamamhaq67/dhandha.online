import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteData';

interface BrandLogoProps {
  className?: string;
  showDomain?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  showDomain = true,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`inline-flex items-center gap-gutter-sm shrink-0 select-none ${className}`}>
      {/* 
        NOTE TO FUTURE DEVELOPER:
        The supplied 'धंधा' logo is preserved exactly as created in the Stitch project.
        To use a local asset, place your PNG or SVG in /public/logo.png and update SITE_CONFIG.logoImageUrl in src/data/siteData.ts
      */}
      <div className="h-10 w-24 overflow-hidden rounded-sm flex items-center justify-center bg-surface border border-outline-green/20">
        {!imgError ? (
          <img
            src={SITE_CONFIG.logoImageUrl}
            alt="धंधा — Dhandha.online"
            className="h-24 w-auto object-cover object-center transition-opacity duration-state-change"
            onError={() => setImgError(true)}
            loading="eager"
          />
        ) : (
          <span className="font-devanagari text-2xl font-extrabold text-primary tracking-tight">
            धंधा
          </span>
        )}
      </div>

      {showDomain && (
        <span className="font-mono text-mono-md text-on-surface-muted hidden sm:inline">
          .online
        </span>
      )}
    </div>
  );
};
