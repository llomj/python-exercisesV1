import React from 'react';
import { PersonaStage } from '../types';

/** Animal icons as emojis: 🦠🦐🦀🐟🐙🦭🐬🦈🐋🌍 (Level 0 = egg). */
const PERSONA_EMOJI: Record<PersonaStage, string> = {
  [PersonaStage.TADPOLE]: '🥚',
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

export const PersonaIcon: React.FC<PersonaIconProps> = ({ persona, size = 'md', className = '', muted }) => {
  const sizeClass = sizeClasses[size];
  const mutedClass = muted ? 'opacity-60 grayscale' : '';
  const emoji = PERSONA_EMOJI[persona] ?? '❓';
  return (
    <span className={`inline-flex items-center justify-center ${sizeClass} ${mutedClass} ${className}`} role="img" aria-label={persona}>
      {emoji}
    </span>
  );
};
