import React, { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useSound } from '../contexts/SoundContext';
import { CONCEPTS_SECTIONS, ConceptEntry, ConceptSection } from '../data/conceptsData';
import { getConceptTextFr } from '../data/conceptsDataFr';

/** Theme class for concept terms (syntax-highlight style). */
const CONCEPT_TERM_CLASS = 'text-indigo-400 font-semibold';

interface ConceptsViewProps {
  onBack: () => void;
}

type Tier = 'beginner' | 'intermediate' | 'expert';

/** Localize section title and concept texts for display (FR when language is fr). */
function localizeSections(
  sections: ConceptSection[],
  language: string
): ConceptSection[] {
  const isFr = language === 'fr';
  return sections.map(sec => ({
    ...sec,
    title: isFr && sec.titleFr ? sec.titleFr : sec.title,
    concepts: sec.concepts.map(c => {
      if (!isFr) return c;
      const fr = getConceptTextFr(c.term);
      return {
        ...c,
        term: fr?.termFr ?? c.term,
        beginner: fr?.beginnerFr ?? c.beginner,
        intermediate: fr?.intermediateFr ?? c.intermediate,
        expert: fr?.expertFr ?? c.expert,
      };
    }),
  }));
}

export const ConceptsView: React.FC<ConceptsViewProps> = ({ onBack }) => {
  const { t, language } = useLanguage();
  const { playCutSound } = useSound();
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<ConceptEntry | null>(null);
  const [tier, setTier] = useState<Tier>('beginner');

  const sectionsLocalized = useMemo(
    () => localizeSections(CONCEPTS_SECTIONS, language),
    [language]
  );

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = 'hidden';
      setTier('beginner');
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selected]);

  const searchLower = search.toLowerCase().trim();
  const sections: ConceptSection[] = searchLower
    ? sectionsLocalized.map(sec => ({
        ...sec,
        concepts: sec.concepts.filter(c =>
          c.term.toLowerCase().includes(searchLower) ||
          c.beginner.toLowerCase().includes(searchLower) ||
          c.intermediate.toLowerCase().includes(searchLower) ||
          c.expert.toLowerCase().includes(searchLower)
        ),
      })).filter(sec => sec.concepts.length > 0)
    : sectionsLocalized;

  const tierLabel = (tierKey: Tier) => {
    switch (tierKey) {
      case 'beginner': return t('operations.beginnerExplanation');
      case 'intermediate': return t('operations.intermediateExplanation');
      case 'expert': return t('operations.expertExplanation');
      default: return tierKey;
    }
  };

  const tierContent = selected
    ? tier === 'beginner'
      ? selected.beginner
      : tier === 'intermediate'
        ? selected.intermediate
        : selected.expert
    : '';

  return (
    <div className="relative min-h-[400px] animate-in slide-in-from-left duration-300 pb-12">
      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain flex justify-center items-start sm:items-center p-4">
          <div
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
            onClick={() => { playCutSound(); setSelected(null); }}
          />
          <div
            className="glass w-full max-w-2xl my-4 sm:my-8 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 border-indigo-500/30 animate-in fade-in zoom-in duration-300"
            onClick={e => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => { playCutSound(); setSelected(null); }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors border border-white/10"
              aria-label={t('flow.close')}
            >
              <i className="fas fa-times" />
            </button>

            <div className="space-y-6 pt-2">
              <h3 className={`text-2xl sm:text-3xl font-black ${CONCEPT_TERM_CLASS}`}>
                {selected.term}
              </h3>

              {/* Tier tabs */}
              <div className="flex gap-2 border-b border-white/10 pb-2">
                {(['beginner', 'intermediate', 'expert'] as Tier[]).map(tierKey => (
                  <button
                    key={tierKey}
                    type="button"
                    onClick={() => { playCutSound(); setTier(tierKey); }}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                      tier === tierKey
                        ? 'bg-indigo-500/30 text-indigo-300 border border-indigo-500/50'
                        : 'bg-white/5 text-slate-400 hover:text-white border border-transparent'
                    }`}
                  >
                    {tierLabel(tierKey)}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-book-open text-indigo-400" /> {tierLabel(tier)}
                </h4>
                <div className="text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-wrap">
                  {tierContent}
                </div>
              </div>

              <button
                type="button"
                onClick={() => { playCutSound(); setSelected(null); }}
                className="w-full py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-2xl font-black transition-all shadow-xl shadow-indigo-500/20 active:scale-95"
              >
                {t('operations.gotIt')}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <i className="fas fa-lightbulb text-amber-400" /> {t('app.concepts')}
        </h2>
        <button
          type="button"
          onClick={() => { playCutSound(); onBack(); }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
        >
          <i className="fas fa-arrow-left" /> <span>{t('operations.back')}</span>
        </button>
      </div>

      <p className="text-slate-400 text-sm mb-4">
        {t('concepts.intro')}
      </p>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
          <i className="fas fa-search" />
        </div>
        <input
          type="text"
          placeholder={t('concepts.searchPlaceholder')}
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-slate-900 border border-white/5 rounded-xl text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 transition-colors text-sm"
        />
      </div>

      <div className="space-y-8 max-h-[60vh] overflow-y-auto pr-1">
        {sections.map(sec => (
          <section key={sec.title} className="space-y-3">
            <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <i className="fas fa-book text-indigo-400" /> {sec.title}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {sec.concepts.map(c => (
                <li key={c.term}>
                  <button
                    type="button"
                    onClick={() => { playCutSound(); setSelected(c); }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors border border-white/10 bg-slate-800/60 hover:bg-slate-700/80 hover:border-indigo-500/40 ${CONCEPT_TERM_CLASS}`}
                  >
                    {c.term}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
        {sections.length === 0 && (
          <div className="py-12 text-center text-slate-500">
            <i className="fas fa-search-minus text-4xl mb-4 block opacity-20" />
            {t('concepts.noResults')}
          </div>
        )}
      </div>
    </div>
  );
};
