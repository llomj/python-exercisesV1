import React from 'react';
import { PersonaStage } from '../types';
import { TadpoleSvg } from './PersonaIcon';

interface PersonaBadgeProps {
  stage: PersonaStage;
  size?: 'sm' | 'md' | 'lg';
}

// Font Awesome 6 Free: animal icons. Tadpole = custom SVG. Many animals are Regular (far).
const personaIconStyle: Record<PersonaStage, 'fas' | 'far'> = {
  [PersonaStage.TADPOLE]: "fas",
  [PersonaStage.PLANKTON]: "fas",
  [PersonaStage.SHRIMP]: "far",
  [PersonaStage.CRAB]: "far",
  [PersonaStage.SMALL_FISH]: "fas",
  [PersonaStage.OCTOPUS]: "far",
  [PersonaStage.SEAL]: "far",
  [PersonaStage.DOLPHIN]: "far",
  [PersonaStage.SHARK]: "far",
  [PersonaStage.WHALE]: "far",
  [PersonaStage.GOD_WHALE]: "fas",
};
const personaIcons: Record<PersonaStage, string> = {
  [PersonaStage.TADPOLE]: "",
  [PersonaStage.PLANKTON]: "fa-microbe",
  [PersonaStage.SHRIMP]: "fa-shrimp",
  [PersonaStage.CRAB]: "fa-crab",
  [PersonaStage.SMALL_FISH]: "fa-fish",
  [PersonaStage.OCTOPUS]: "fa-octopus",
  [PersonaStage.SEAL]: "fa-seal",
  [PersonaStage.DOLPHIN]: "fa-dolphin",
  [PersonaStage.SHARK]: "fa-shark",
  [PersonaStage.WHALE]: "fa-whale",
  [PersonaStage.GOD_WHALE]: "fa-globe",
};

const tadpoleSizes = { sm: 20, md: 28, lg: 40 };

export const PersonaBadge: React.FC<PersonaBadgeProps> = ({ stage, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-12 h-12 text-xl',
    lg: 'w-20 h-20 text-4xl',
  };
  const style = personaIconStyle[stage] || 'fas';
  const icon = personaIcons[stage] || 'fa-fish';
  const isTadpole = stage === PersonaStage.TADPOLE;

  return (
    <div className={`flex flex-col items-center justify-center`}>
      <div className={`${sizeClasses[size]} rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20`}>
        {isTadpole ? (
          <TadpoleSvg size={tadpoleSizes[size]} className="text-white" />
        ) : (
          <i className={`${style} ${icon} text-white`}></i>
        )}
      </div>
    </div>
  );
};