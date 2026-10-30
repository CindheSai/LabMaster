import React, { useState } from 'react';
import { RotateCw, Maximize2, Minimize2, ExternalLink, Info, Sparkles } from 'lucide-react';
import { ProgramData } from '../types';

interface LivePreviewProps {
  program: ProgramData;
  useCorrected?: boolean;
}

export const LivePreview: React.FC<LivePreviewProps> = ({ program, useCorrected = false }) => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [resolveImages, setResolveImages] = useState(true);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
  };

  // Generate safe HTML to load into iframe
  const prepareHtml = () => {
    let source = useCorrected && program.correctedCode ? program.correctedCode : program.originalCode;

    // If external CSS program (Program 9), inject styles.css into head
    if (program.id === 9 && program.cssCode) {
      source = source.replace(
        '<link rel="stylesheet" href="styles.css">',
        `<style>${program.cssCode}</style>`
      );
    }

    // If Program 4 and resolveImages is active: replace Windows XP sample paths with SVG data URIs
    if (program.id === 4 && resolveImages && !useCorrected) {
      const blueHillsSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 70 40"><rect width="70" height="40" fill="%2360a5fa"/><path d="M0 40 L20 18 L45 35 L60 12 L70 40 Z" fill="%231d4ed8"/><circle cx="55" cy="12" r="5" fill="%23fef08a"/></svg>`;
      const sunsetSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="70" height="40" viewBox="0 0 70 40"><rect width="70" height="40" fill="%23f97316"/><circle cx="35" cy="22" r="14" fill="%23fde047"/><path d="M0 40 L70 40 L70 32 L0 32 Z" fill="%239a3412"/></svg>`;

      source = source
        .replace(/C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\blue hills\.jpg/g, blueHillsSvg)
        .replace(/C:\\Documents and Settings\\All Users\\Documents\\My Pictures\\Sample Pictures\\sunset\.jpg/g, sunsetSvg);
    }

    // For Program 2 & 3 with src="URL", provide clean SVG sample image if resolveImages is checked
    if ((program.id === 2 || program.id === 3) && resolveImages && !useCorrected) {
      const sampleSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="90" height="60" viewBox="0 0 90 60"><rect width="90" height="60" rx="4" fill="%23f1f5f9" stroke="%23cbd5e1"/><circle cx="45" cy="24" r="10" fill="%233b82f6"/><path d="M25 50 C25 38 65 38 65 50 Z" fill="%231d4ed8"/></svg>`;
      source = source.replace(/src="URL"/g, `src="${sampleSvg}"`);
    }

    return source;
  };

  return (
    <div className={`border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs flex flex-col transition-all ${
      isExpanded ? 'fixed inset-4 z-50 shadow-2xl' : 'h-full min-h-[460px]'
    }`}>
      {/* Top Preview Toolbar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
          </div>
          <span className="text-xs font-medium text-slate-600 pl-2">Live Output Sandbox</span>
          {useCorrected && (
            <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-sm border border-blue-200">
              Modern / Corrected Version
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Resource resolver toggle for image-dependent programs */}
          {(program.id === 4 || program.id === 2 || program.id === 3) && !useCorrected && (
            <button
              onClick={() => setResolveImages(!resolveImages)}
              className={`flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md border transition-all ${
                resolveImages 
                  ? 'bg-blue-50 text-blue-700 border-blue-200 font-medium' 
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
              title="Toggle between simulation graphics and literal broken paths"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{resolveImages ? 'Visual Assets Simulated' : 'Literal PDF Paths'}</span>
            </button>
          )}

          <button
            onClick={handleRefresh}
            className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-md transition-colors"
            title="Refresh sandbox execution"
          >
            <RotateCw className="w-3.5 h-3.5 text-slate-500" />
            <span>Reset</span>
          </button>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1.5 text-slate-500 hover:text-slate-800 hover:bg-slate-200/60 rounded-md transition-colors"
            title={isExpanded ? "Exit Fullscreen" : "Fullscreen Preview"}
            aria-label={isExpanded ? "Exit Fullscreen" : "Fullscreen Preview"}
          >
            {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Resource explanation banner if applicable */}
      {program.id === 4 && (
        <div className="flex items-start gap-2 px-3 py-2 bg-amber-50/70 border-b border-amber-200/60 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            <strong>Exam Note:</strong> The original lab program references local Windows XP sample image paths (<code>C:\Documents and Settings\...</code>). In this live preview, we provide smart simulated graphics of Blue Hills &amp; Sunset so you can verify the exact table alignment shown in your practical manual.
          </span>
        </div>
      )}

      {/* Iframe Render Canvas */}
      <div className="flex-1 bg-white relative">
        <iframe
          key={`${program.id}-${useCorrected ? 'c' : 'o'}-${resolveImages ? 'res' : 'raw'}-${refreshKey}`}
          srcDoc={prepareHtml()}
          title={`Lab Program ${program.programNumber} Preview`}
          sandbox="allow-scripts allow-forms allow-modals"
          className="w-full h-full border-0 min-h-[380px]"
        />
      </div>
    </div>
  );
};
