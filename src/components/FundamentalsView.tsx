import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSound } from '../contexts/SoundContext';
import {
  FUNDAMENTALS_SECTIONS,
  type FundamentalsSectionId,
  type FundamentalsSectionContent,
} from '../data/fundamentalsData';

interface FundamentalsViewProps {
  onBack: () => void;
  initialSection?: FundamentalsSectionId | null;
}

const SECTION_ICONS: Record<FundamentalsSectionId, string> = {
  builtins: 'fa-bolt',
  syntax: 'fa-braille',
  errors: 'fa-triangle-exclamation',
  datatypes: 'fa-cubes',
  logic: 'fa-code-branch',
};

export const FundamentalsView: React.FC<FundamentalsViewProps> = ({ onBack, initialSection }) => {
  const { t } = useLanguage();
  const { playCutSound } = useSound();
  const [selectedSection, setSelectedSection] = useState<FundamentalsSectionContent | null>(null);

  // Open the requested section once when we have initialSection (e.g. from Settings or Level Selector).
  useEffect(() => {
    if (initialSection) {
      const section = FUNDAMENTALS_SECTIONS.find((s) => s.id === initialSection);
      if (section) setSelectedSection(section);
    }
  }, [initialSection]);

  const handleSelect = (section: FundamentalsSectionContent) => {
    playCutSound();
    setSelectedSection(section);
  };

  const handleCloseOverlay = () => {
    playCutSound();
    setSelectedSection(null);
  };

  return (
    <div className="relative min-h-[400px] animate-in slide-in-from-left duration-300 pb-12">
      {/* Overlay for selected section (same pattern as OperationsView) */}
      {selectedSection && (
        <div className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain flex justify-center items-start sm:items-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
            onClick={handleCloseOverlay}
          />
          <div className="glass w-full max-w-2xl my-4 sm:my-8 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 border-indigo-500/30 animate-in fade-in zoom-in duration-300">
            <button
              onClick={handleCloseOverlay}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors border border-white/10"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 pt-2">
                <span className="inline-block text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] px-3 py-1 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                  {t('levelSelector.fundamentals')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                  <i className={`fas ${SECTION_ICONS[selectedSection.id]} text-indigo-400`}></i>
                  {t(`fundamentals.sectionTitle.${selectedSection.id}`)}
                </h3>
              </div>

              <div className="space-y-4">
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-book-open text-indigo-400"></i> {t('fundamentals.keyConcepts')}
                </h4>
                <div className="text-slate-300 leading-relaxed font-medium text-sm sm:text-base">
                  {selectedSection.definition}
                </div>
              </div>

              {selectedSection.subsections.map((sub, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                    <i className="fas fa-layer-group text-indigo-400"></i> {sub.heading}
                  </h4>
                  <ul className="space-y-2 list-none">
                    {sub.body.map((line, i) => (
                      <li key={i} className="text-slate-300 text-sm leading-relaxed flex gap-2">
                        <span className="text-indigo-400/80 font-bold shrink-0">•</span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="space-y-4">
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-code text-indigo-400"></i> {t('fundamentals.examples')}
                </h4>
                <div className="bg-slate-900 rounded-2xl p-4 sm:p-6 border border-white/5 shadow-inner max-h-[300px] overflow-y-auto">
                  <div className="space-y-2">
                    {selectedSection.examples.map((example, idx) => (
                      <div
                        key={idx}
                        className="text-xs sm:text-sm text-indigo-300 leading-relaxed font-mono whitespace-pre-wrap break-words"
                      >
                        {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <button
                  onClick={handleCloseOverlay}
                  className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-black transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
                >
                  {t('operations.gotIt')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-white flex items-center gap-3">
          <i className="fas fa-graduation-cap text-indigo-400"></i> {t('fundamentals.title')}
        </h2>
        <button
          onClick={() => {
            playCutSound();
            onBack();
          }}
          className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl text-sm font-bold transition-colors"
        >
          {t('operations.back')}
        </button>
      </div>

      <p className="text-slate-400 text-sm mb-6">{t('fundamentals.intro')}</p>

      <div className="grid gap-4 sm:grid-cols-2">
        {FUNDAMENTALS_SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => handleSelect(section)}
            className="glass p-5 rounded-2xl space-y-2 hover:border-indigo-500/40 hover:bg-slate-800/80 transition-all cursor-pointer group active:scale-[0.98] text-left"
          >
            <div className="flex justify-between items-start">
              <h4 className="font-bold text-slate-100 group-hover:text-white transition-colors flex items-center gap-2">
                <i className={`fas ${SECTION_ICONS[section.id]} text-indigo-400`}></i>
                {t(`fundamentals.sectionTitle.${section.id}`)}
              </h4>
              <i className="fas fa-chevron-right text-[10px] text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all"></i>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">{section.definition}</p>
            <span className="inline-block text-[8px] font-black text-indigo-500 uppercase px-2 py-0.5 bg-indigo-500/10 rounded">
              {t('levelSelector.fundamentals')}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
