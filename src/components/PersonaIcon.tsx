import React from 'react';
import { PersonaStage } from '../types';

/** Inline SVG tadpole (body + tail). Use for TADPOLE persona when emoji isn't suitable. */
export const TadpoleSvg: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} role="img" aria-label="Tadpole">
    <circle cx="15" cy="12" r="5" fill="currentColor" />
    <path d="M10 11 L2 12 L10 13 Z" fill="currentColor" />
  </svg>
);

/** Animal icons as emojis; Level 0 = tadpole (custom SVG). */
const PERSONA_EMOJI: Record<PersonaStage, string> = {
  [PersonaStage.TADPOLE]: '', // rendered as TadpoleSvg below
  [PersonaStage.PLANKTON]: '🦠',
  [PersonaStage.SHRIMP]: '🦐',
  [PersonaStage.CRAB]: '🦀',
  [PersonaStage.SMALL_FISH]: '🐟',
  [PersonaStage.OCTOPUS]: '🐙',
  [PersonaStage.SEAL]: '🦭',
  [PersonaStage.DOLPHIN]: '🐬',
  [PersonaStage.SHARK]: '🦈',
  [PersonaStage.WHALE]: '🐋',
  [PersonaStage.GOD_WHALE]: '🌍',
};

interface PersonaIconProps {
  persona: PersonaStage;
  /** sm = 1rem, md = 1.5rem, lg = 2rem */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  /** Slightly dim for locked/secondary state */
  muted?: boolean;
}

const sizeClasses = {
  sm: 'w-4 h-4 text-base',
  md: 'w-6 h-6 text-xl',
  lg: 'w-8 h-8 text-2xl',
};

const sizePx = { sm: 16, md: 24, lg: 32 };

export const PersonaIcon: React.FC<PersonaIconProps> = ({ persona, size = 'md', className = '', muted }) => {
  const sizeClass = sizeClasses[size];
  const mutedClass = muted ? 'opacity-60 grayscale' : '';
  const isTadpole = persona === PersonaStage.TADPOLE;
  const emoji = PERSONA_EMOJI[persona] ?? '❓';
  return (
    <span className={`inline-flex items-center justify-center ${sizeClass} ${mutedClass} ${className}`} role="img" aria-label={persona}>
      {isTadpole ? <TadpoleSvg size={sizePx[size]} className="text-current" /> : emoji}
    </span>
  );
};
