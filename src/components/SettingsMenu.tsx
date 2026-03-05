import React from 'react';
import { PersonaStage } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface SettingsMenuProps {
  isOpen: boolean;
  onClose: () => void;
  view: 'hub' | 'quiz' | 'log' | 'glossary' | 'methods' | 'flow';
  randomMode?: boolean;
  anchorBottom?: boolean; // When true, menu opens near top-right (mobile-friendly placement)
  onToggleRandomMode?: () => void;
  onShowGlossary?: () => void;
  onShowIdSearch?: () => void;
  onShowIdLog?: () => void;
  onShowLearningLog?: () => void;
  onShowOperations?: () => void;
  onShowMethods?: () => void;
  onShowFlow?: () => void;
  onShowLevelSelector?: () => void;
  onToggleLanguage?: () => void;
  onRefreshApp?: () => void;
  onResetApp?: () => void;
}

export const SettingsMenu: React.FC<SettingsMenuProps> = ({
  isOpen,
  onClose,
  view,
  randomMode = false,
  anchorBottom = false,
  onToggleRandomMode,
  onShowGlossary,
  onShowIdSearch,
  onShowIdLog,
  onShowLearningLog,
  onShowOperations,
  onShowMethods,
  onShowFlow,
  onShowLevelSelector,
  onToggleLanguage,
  onRefreshApp,
  onResetApp
}) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const menuItems: Array<{
    icon: string;
    label: string;
    onClick: () => void;
    active?: boolean;
    highlight?: boolean;
  }> = [];

  // Hub view items: Random Mode on top, Select Level under it, then Methods, Flow, then rest
  if (view === 'hub') {
    if (onToggleRandomMode) {
      menuItems.push({
        icon: 'fa-shuffle',
        label: randomMode ? t('settings.switchToLevelMode') : t('settings.switchToRandomMode'),
        onClick: () => {
          onToggleRandomMode();
          onClose();
        }
      });
    }
    if (onShowLevelSelector) {
      menuItems.push({
        icon: 'fa-layer-group',
        label: t('settings.selectLevel'),
        onClick: () => {
          onShowLevelSelector();
          onClose();
        }
      });
    }
    if (onShowMethods) {
      menuItems.push({
        icon: 'fa-code',
        label: t('app.methods'),
        onClick: () => {
          onShowMethods();
          onClose();
        }
      });
    }
    if (onShowFlow) {
      menuItems.push({
        icon: 'fa-diagram-project',
        label: t('app.flow'),
        onClick: () => {
          onShowFlow();
          onClose();
        }
      });
    }
    if (onShowIdSearch) {
      menuItems.push({
        icon: 'fa-hashtag',
        label: t('settings.searchById'),
        onClick: () => {
          onShowIdSearch();
          onClose();
        }
      });
    }
    if (onShowIdLog) {
      menuItems.push({
        icon: 'fa-list',
        label: t('settings.idLog'),
        onClick: () => {
          onShowIdLog();
          onClose();
        }
      });
    }
    if (onShowLearningLog) {
      menuItems.push({
        icon: 'fa-book-open',
        label: t('app.learningLog'),
        onClick: () => {
          onShowLearningLog();
          onClose();
        }
      });
    }
  }

  // Quiz view items: Random Mode then Select Level
  if (view === 'quiz') {
    if (onToggleRandomMode) {
      menuItems.push({
        icon: 'fa-shuffle',
        label: randomMode ? t('settings.switchToLevelMode') : t('settings.switchToRandomMode'),
        onClick: () => {
          onToggleRandomMode();
          onClose();
        }
      });
    }
    if (onShowLevelSelector) {
      menuItems.push({
        icon: 'fa-layer-group',
        label: t('settings.selectLevel'),
        onClick: () => {
          onShowLevelSelector();
          onClose();
        }
      });
    }
  }

  // Common items (Methods/Flow already in hub list when view === 'hub')
  if (onShowOperations) {
    menuItems.push({
      icon: 'fa-calculator',
      label: t('app.operations'),
      onClick: () => {
        onShowOperations();
        onClose();
      }
    });
  }
  if (onShowMethods && view !== 'hub') {
    menuItems.push({
      icon: 'fa-code',
      label: t('app.methods'),
      onClick: () => {
        onShowMethods();
        onClose();
      }
    });
  }
  if (onShowFlow && view !== 'hub') {
    menuItems.push({
      icon: 'fa-diagram-project',
      label: t('app.flow'),
      onClick: () => {
        onShowFlow();
        onClose();
      }
    });
  }
  if (onShowLevelSelector && view !== 'hub' && view !== 'quiz') {
    menuItems.push({
      icon: 'fa-layer-group',
      label: t('settings.selectLevel'),
      onClick: () => {
        onShowLevelSelector();
        onClose();
      }
    });
  }

  if (onToggleLanguage) {
    menuItems.push({
      icon: 'fa-language',
      label: language === 'en' ? 'Français' : 'English',
      onClick: () => {
        onToggleLanguage();
        onClose();
      }
    });
  }
  if (onShowGlossary) {
    menuItems.push({
      icon: 'fa-circle-info',
      label: t('app.glossary'),
      onClick: () => {
        onShowGlossary();
        onClose();
      }
    });
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Menu - near top-right on mobile, below trigger on desktop */}
      <div className={`z-50 min-w-[200px] ${anchorBottom ? 'fixed top-[max(4rem,env(safe-area-inset-top))] right-4' : 'absolute top-full right-0 mt-2'}`}>
        <div className="glass-settings rounded-2xl p-2 shadow-2xl border border-white/10 animate-in slide-in-from-top-2 duration-200">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={item.onClick}
              className={`
                w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left
                ${item.active
                  ? 'bg-indigo-500/20 text-indigo-400'
                  : item.highlight
                    ? 'bg-green-500/10 text-green-400 hover:bg-green-500/20'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <i className={`fas ${item.icon} text-sm w-5 flex-shrink-0`}></i>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}

          {/* Refresh App - reloads UI, keeps scoring & progress */}
          {onRefreshApp && (
            <>
              <div className="my-2 border-t border-white/10" />
              <button
                onClick={() => {
                  onRefreshApp();
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-slate-300 hover:bg-white/10 hover:text-white"
              >
                <i className="fas fa-arrows-rotate text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('settings.refreshApp')}</span>
              </button>
            </>
          )}

          {/* Reset App button - at bottom with warning styling */}
          {onResetApp && (
            <>
              <div className="my-2 border-t border-white/10" />
              <button
                onClick={() => {
                  onResetApp();
                  onClose();
                }}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left text-amber-400 hover:bg-amber-500/10 hover:text-amber-300"
              >
                <i className="fas fa-rotate-left text-sm w-5 flex-shrink-0"></i>
                <span className="text-sm font-medium">{t('settings.resetApp')}</span>
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
