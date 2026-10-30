import React, { useState, useEffect } from 'react';
import { Copy, Check, Maximize2, Minimize2, FileCode, Layers } from 'lucide-react';
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-python';
import { Download } from 'lucide-react';
import { CodeFile } from '../types';

interface CodeViewerProps {
  code?: string;
  language?: 'html' | 'css' | 'javascript' | 'php' | 'sql' | 'python' | 'csv';
  fileName?: string;
  files?: CodeFile[];
  maxHeight?: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({
  code,
  language = 'html',
  fileName,
  files,
  maxHeight = 'max-h-[500px]'
}) => {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const currentFile = files && files.length > 0 ? files[activeFileIndex] : null;
  const activeCode = currentFile ? currentFile.code : (code || '');
  const activeLanguage = currentFile ? currentFile.language : language;
  const activeFileName = currentFile ? currentFile.fileName : (fileName || (activeLanguage === 'php' ? 'index.php' : activeLanguage === 'sql' ? 'schema.sql' : activeLanguage === 'html' ? 'index.html' : activeLanguage === 'css' ? 'styles.css' : 'script.js'));

  useEffect(() => {
    Prism.highlightAll();
  }, [activeCode, activeLanguage]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = activeCode;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const lines = activeCode.trim().split('\n');

  // Map language to prism token grammar
  const getPrismGrammar = (lang: string) => {
    switch (lang) {
      case 'python':
        return Prism.languages.python || Prism.languages.markup;
      case 'php':
        return Prism.languages.php || Prism.languages.markup;
      case 'sql':
        return Prism.languages.sql || Prism.languages.markup;
      case 'javascript':
        return Prism.languages.javascript;
      case 'css':
        return Prism.languages.css;
      default:
        return Prism.languages.markup;
    }
  };

  const handleDownload = () => {
    const blob = new Blob([activeCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = activeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50/50 shadow-xs">
      {/* Multi-file tabs if present */}
      {files && files.length > 1 && (
        <div className="flex items-center gap-1 px-3 pt-2.5 pb-0 bg-slate-100/90 border-b border-slate-200 overflow-x-auto">
          {files.map((file, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFileIndex(idx)}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-mono rounded-t-lg transition-all border-t border-x ${
                activeFileIndex === idx
                  ? 'bg-white text-blue-700 font-bold border-slate-200 border-b-white -mb-px shadow-2xs z-10'
                  : 'text-slate-600 hover:text-slate-900 border-transparent hover:bg-slate-200/60'
              }`}
            >
              <FileCode className={`w-3.5 h-3.5 ${activeFileIndex === idx ? 'text-blue-600' : 'text-slate-400'}`} />
              <span>{file.fileName}</span>
              {file.label && (
                <span className="text-[10px] text-slate-400 font-sans hidden sm:inline">
                  ({file.label.split(':')[0]})
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-slate-200">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-700">
          <FileCode className="w-4 h-4 text-blue-600" />
          <span className="font-semibold">{activeFileName}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500 uppercase">{activeLanguage}</span>
          <span className="text-slate-300">·</span>
          <span className="text-slate-500 tabular-nums">{lines.length} lines</span>
          {currentFile?.description && (
            <span className="text-slate-400 font-sans hidden md:inline truncate max-w-xs">
              — {currentFile.description}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-md transition-colors"
            title={isExpanded ? "Collapse code window" : "Expand code window"}
            aria-label={isExpanded ? "Collapse code window" : "Expand code window"}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all active:scale-95 shadow-2xs"
            title={`Download ${activeFileName}`}
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden sm:inline">Download</span>
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-md transition-all active:scale-95 shadow-2xs"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Body with Line Numbers */}
      <div 
        className={`overflow-x-auto overflow-y-auto font-mono text-xs leading-relaxed bg-[#fbfcfd] ${
          isExpanded ? 'max-h-[85vh]' : maxHeight
        }`}
      >
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => {
              const highlightedLine = Prism.highlight(
                line || ' ',
                getPrismGrammar(activeLanguage),
                activeLanguage
              );

              return (
                <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                  <td className="w-12 py-0.5 pr-4 pl-3 text-right text-slate-400 select-none border-r border-slate-200 bg-slate-50/70 font-mono text-[11px] tabular-nums">
                    {idx + 1}
                  </td>
                  <td className="py-0.5 px-4 whitespace-pre text-slate-800 font-mono">
                    <span dangerouslySetInnerHTML={{ __html: highlightedLine }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
