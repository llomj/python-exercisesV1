import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useLanguage } from '../contexts/LanguageContext';
import { useSound } from '../contexts/SoundContext';

interface MarkdownDetailViewProps {
  title: string;
  markdown: string;
  onBack: () => void;
}

const codeBlockStyle: React.CSSProperties = {
  padding: '0.75rem 1rem',
  margin: 0,
  background: 'transparent',
  fontSize: '0.85rem',
  lineHeight: '1.6',
  fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace",
  borderRadius: '0.75rem',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
};

const codeTagStyle: React.CSSProperties = {
  fontFamily: "'Fira Code', 'Monaco', 'Consolas', monospace",
  whiteSpace: 'pre-wrap',
  display: 'block',
};

// Align markdown highlighting with the app's dark / blue-yellow theme
const markdownTheme = {
  ...oneDark,
  // Headings / titles / sections closer to cyan/indigo instead of harsh red
  title: { ...(oneDark as any).title, color: '#7dd3fc' },        // light cyan
  section: { ...(oneDark as any).section, color: '#7dd3fc' },
  // Links and URLs use the same cyan tone
  url: { ...(oneDark as any).url, color: '#7dd3fc' },
  link: { ...(oneDark as any).link, color: '#7dd3fc' },
  // Emphasised markdown syntax (strong/em) slightly warmer but still on-theme
  important: { ...(oneDark as any).important, color: '#fbbf24' }, // amber
  bold: { ...(oneDark as any).bold, color: '#fbbf24' },
};

export const MarkdownDetailView: React.FC<MarkdownDetailViewProps> = ({ title, markdown, onBack }) => {
  const { t } = useLanguage();
  const { playCutSound } = useSound();

  return (
    <div className="relative min-h-[400px] animate-in slide-in-from-left duration-300 pb-12">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => { playCutSound(); onBack(); }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors border border-white/10"
        >
          <i className="fas fa-arrow-left"></i>
          <span>{t('operations.back')}</span>
        </button>
        <h2 className="text-xl font-black text-white flex items-center gap-2">
          <i className="fas fa-file-lines text-indigo-400"></i>
          {title}
        </h2>
      </div>

      <div className="glass rounded-3xl p-6 max-h-[70vh] overflow-y-auto border border-white/10">
        <SyntaxHighlighter
          language="markdown"
          style={markdownTheme as any}
          customStyle={codeBlockStyle}
          codeTagProps={{ style: codeTagStyle }}
          PreTag="div"
          showLineNumbers={false}
        >
          {markdown}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

