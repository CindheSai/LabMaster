import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  RotateCcw, 
  Terminal, 
  Sliders, 
  HelpCircle, 
  CheckCircle2, 
  AlertCircle,
  Database,
  Layers,
  ArrowRight,
  Plus,
  Trash2,
  Cpu,
  Clock,
  Sparkles,
  FileText,
  Calculator
} from 'lucide-react';
import { ProgramData } from '../types';

interface PythonAppDevSimulationProps {
  program: ProgramData;
}

export const PythonAppDevSimulationPreview: React.FC<PythonAppDevSimulationProps> = ({ program }) => {
  const simulationType = program.simulationType;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg flex flex-col">
      {/* Simulation Top Bar */}
      <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 ml-2">
            Major 15 Interactive Simulation · {program.title.split('(')[0]}
          </span>
        </div>
        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
          Client-Side Python Simulation
        </span>
      </div>

      {/* Interactive Body */}
      <div className="p-4 sm:p-6 bg-slate-900 text-slate-100">
        {simulationType === 'temp-converter' && <TempConverterSim />}
        {simulationType === 'student-grade' && <StudentGradeSim />}
        {simulationType === 'sequence-types' && <SequenceTypesSim />}
        {simulationType === 'fibonacci-while' && <FibonacciWhileSim />}
        {simulationType === 'file-last-lines' && <FileLastLinesSim />}
        {simulationType === 'matrix-ops' && <MatrixOpsSim />}
        {simulationType === 'exception-handling' && <ExceptionHandlingSim />}
        {simulationType === 'multithreading' && <MultithreadingSim />}
        {simulationType === 'tkinter-calc' && <TkinterCalcSim />}
        {simulationType === 'tkinter-db' && <TkinterDbSim />}
      </div>
    </div>
  );
};

// =========================================================================
// 1. Temperature Converter Simulation
// =========================================================================
function TempConverterSim() {
  const [choice, setChoice] = useState<1 | 2>(1);
  const [tempInput, setTempInput] = useState<number>(37);

  const fahrenheitResult = (9 * tempInput) / 5 + 32;
  const celsiusResult = (5 * (tempInput - 32)) / 9;

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 p-1 bg-slate-800 rounded-lg text-xs font-medium max-w-sm">
        <button
          onClick={() => { setChoice(1); setTempInput(37); }}
          className={`flex-1 py-1.5 px-3 rounded-md transition-all ${
            choice === 1 ? 'bg-blue-600 text-white font-semibold shadow-xs' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          1. Celsius to Fahrenheit
        </button>
        <button
          onClick={() => { setChoice(2); setTempInput(98.6); }}
          className={`flex-1 py-1.5 px-3 rounded-md transition-all ${
            choice === 2 ? 'bg-blue-600 text-white font-semibold shadow-xs' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          2. Fahrenheit to Celsius
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Card */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-3">
          <label className="text-xs font-mono text-slate-400 block">
            {choice === 1 ? 'Enter temperature in Celsius (°C):' : 'Enter temperature in Fahrenheit (°F):'}
          </label>
          <div className="flex items-center gap-3">
            <input
              type="number"
              step="0.1"
              value={tempInput}
              onChange={(e) => setTempInput(parseFloat(e.target.value) || 0)}
              className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-sm text-slate-100 font-mono focus:border-blue-500 focus:outline-none"
            />
            <span className="text-lg font-bold text-blue-400 font-mono">
              {choice === 1 ? '°C' : '°F'}
            </span>
          </div>

          {/* Quick Presets */}
          <div className="pt-2 border-t border-slate-800/80">
            <span className="text-[11px] text-slate-500 block mb-1.5">Common Presets:</span>
            <div className="flex flex-wrap gap-1.5 text-xs">
              {choice === 1 ? (
                <>
                  <button onClick={() => setTempInput(0)} className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300">0°C (Freezing)</button>
                  <button onClick={() => setTempInput(22)} className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300">22°C (Room)</button>
                  <button onClick={() => setTempInput(37)} className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300">37°C (Body)</button>
                  <button onClick={() => setTempInput(100)} className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300">100°C (Boiling)</button>
                </>
              ) : (
                <>
                  <button onClick={() => setTempInput(32)} className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300">32°F (Freezing)</button>
                  <button onClick={() => setTempInput(71.6)} className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300">71.6°F (Room)</button>
                  <button onClick={() => setTempInput(98.6)} className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300">98.6°F (Body)</button>
                  <button onClick={() => setTempInput(212)} className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300">212°F (Boiling)</button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Output Card */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-3 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-slate-400 block mb-1">
              Active Calculation Formula:
            </span>
            <code className="text-xs font-mono text-amber-400 bg-slate-900/80 px-2 py-1 rounded block">
              {choice === 1 
                ? `f = 9 * ${tempInput} / 5 + 32` 
                : `c = 5 * (${tempInput} - 32) / 9`}
            </code>
          </div>

          <div className="p-3 bg-blue-950/40 border border-blue-900/60 rounded-lg">
            <span className="text-[11px] text-blue-400 font-mono uppercase tracking-wider block">
              {choice === 1 ? 'Temperature in Fahrenheit Scale:' : 'Temperature in Celsius Scale:'}
            </span>
            <div className="text-2xl font-bold font-mono text-emerald-400 mt-1">
              {choice === 1 ? `${fahrenheitResult.toFixed(2)} °F` : `${celsiusResult.toFixed(2)} °C`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 2. Student Grade Calculator Simulation
// =========================================================================
function StudentGradeSim() {
  const [marks, setMarks] = useState<number[]>([85, 78, 92, 65, 88]);
  const [mode, setMode] = useState<'5-subjects-pdf' | '3-subjects-question'>('5-subjects-pdf');

  const activeMarks = mode === '5-subjects-pdf' ? marks : marks.slice(0, 3);
  const total = activeMarks.reduce((a, b) => a + b, 0);
  const maxMarks = mode === '5-subjects-pdf' ? 500 : 300;
  const percentage = (total / maxMarks) * 100;
  const average = total / activeMarks.length;

  let grade = 'E';
  if (average >= 80) grade = 'A';
  else if (average >= 70) grade = 'B';
  else if (average >= 60) grade = 'C';
  else if (average >= 40) grade = 'D';

  const updateMark = (index: number, val: number) => {
    const clamped = Math.max(0, Math.min(100, val));
    setMarks(prev => {
      const copy = [...prev];
      copy[index] = clamped;
      return copy;
    });
  };

  return (
    <div className="space-y-5">
      {/* Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2 p-1 bg-slate-800 rounded-lg text-xs font-medium">
          <button
            onClick={() => setMode('5-subjects-pdf')}
            className={`py-1.5 px-3 rounded-md transition-all ${
              mode === '5-subjects-pdf' ? 'bg-blue-600 text-white font-semibold shadow-xs' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            5 Subjects (Exact PDF Code)
          </button>
          <button
            onClick={() => setMode('3-subjects-question')}
            className={`py-1.5 px-3 rounded-md transition-all ${
              mode === '3-subjects-question' ? 'bg-blue-600 text-white font-semibold shadow-xs' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            3 Subjects (PDF Question Match)
          </button>
        </div>

        <span className="text-[11px] font-mono text-slate-400">
          Max Marks: <strong className="text-white">{maxMarks}</strong>
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Subject Inputs */}
        <div className="lg:col-span-7 space-y-3 bg-slate-950 p-4 rounded-lg border border-slate-800">
          <span className="text-xs font-mono text-slate-400 block mb-2">Adjust Subject Marks (0 - 100):</span>
          {activeMarks.map((m, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-300 w-24 shrink-0">Subject {idx + 1}:</span>
              <input
                type="range"
                min="0"
                max="100"
                value={m}
                onChange={(e) => updateMark(idx, parseInt(e.target.value) || 0)}
                className="w-full accent-blue-500 cursor-pointer"
              />
              <span className="text-xs font-mono font-bold text-blue-400 w-10 text-right">{m}</span>
            </div>
          ))}
        </div>

        {/* Results Card */}
        <div className="lg:col-span-5 bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-slate-400 font-mono">The Total marks is:</span>
              <span className="font-mono font-bold text-white text-sm">{total} / {maxMarks}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-slate-400 font-mono">The Percentage is:</span>
              <span className="font-mono font-bold text-blue-400 text-sm">{percentage.toFixed(1)}%</span>
            </div>
            <div className="flex justify-between text-xs items-center pt-2 border-t border-slate-800">
              <span className="text-slate-400 font-mono">The Grade is:</span>
              <span className={`text-xl font-bold font-mono px-3 py-0.5 rounded ${
                grade === 'A' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                grade === 'B' ? 'bg-blue-950 text-blue-400 border border-blue-800' :
                grade === 'C' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                grade === 'D' ? 'bg-orange-950 text-orange-400 border border-orange-800' :
                'bg-rose-950 text-rose-400 border border-rose-800'
              }`}>
                Grade {grade}
              </span>
            </div>
          </div>

          {/* Grading Ladder Reference */}
          <div className="text-[11px] font-mono bg-slate-900 p-2.5 rounded border border-slate-800 space-y-1">
            <div className={`flex justify-between px-1.5 py-0.5 rounded ${grade === 'A' ? 'bg-emerald-900/50 text-emerald-300 font-bold' : 'text-slate-500'}`}>
              <span>average &gt;= 80</span>
              <span>Grade A</span>
            </div>
            <div className={`flex justify-between px-1.5 py-0.5 rounded ${grade === 'B' ? 'bg-blue-900/50 text-blue-300 font-bold' : 'text-slate-500'}`}>
              <span>average 70 - 79</span>
              <span>Grade B</span>
            </div>
            <div className={`flex justify-between px-1.5 py-0.5 rounded ${grade === 'C' ? 'bg-amber-900/50 text-amber-300 font-bold' : 'text-slate-500'}`}>
              <span>average 60 - 69</span>
              <span>Grade C</span>
            </div>
            <div className={`flex justify-between px-1.5 py-0.5 rounded ${grade === 'D' ? 'bg-orange-900/50 text-orange-300 font-bold' : 'text-slate-500'}`}>
              <span>average 40 - 59</span>
              <span>Grade D</span>
            </div>
            <div className={`flex justify-between px-1.5 py-0.5 rounded ${grade === 'E' ? 'bg-rose-900/50 text-rose-300 font-bold' : 'text-slate-500'}`}>
              <span>average &lt; 40</span>
              <span>Grade E</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 3. Sequence Data Types Simulation
// =========================================================================
function SequenceTypesSim() {
  const [byte0Val, setByte0Val] = useState<number>(68); // 68 is 'D' in ASCII

  const my_string = "Welcome to Python Programming";
  const my_list = [25, "Hello", 2.5, true];
  const my_tuple = ["Apple", "Banana", "Cherry"];
  const my_bytes = [65, 66, 67]; // 'ABC'
  const my_byte_array = [byte0Val, 66, 67];

  const byteToStr = (arr: number[]) => String.fromCharCode(...arr);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* String */}
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-mono font-bold text-amber-400">1. String (str)</span>
            <span className="text-[10px] text-rose-400 font-mono">Immutable</span>
          </div>
          <div className="font-mono text-xs text-slate-300 truncate">"{my_string}"</div>
          <div className="text-[11px] font-mono text-slate-500 mt-2">
            my_string[0] = <strong className="text-emerald-400">"{my_string[0]}"</strong>
          </div>
        </div>

        {/* List */}
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-mono font-bold text-blue-400">2. List (list)</span>
            <span className="text-[10px] text-emerald-400 font-mono">Mutable</span>
          </div>
          <div className="font-mono text-xs text-slate-300 truncate">[25, 'Hello', 2.5, True]</div>
          <div className="text-[11px] font-mono text-slate-500 mt-2">
            my_list[1] = <strong className="text-emerald-400">"{my_list[1]}"</strong>
          </div>
        </div>

        {/* Tuple */}
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-mono font-bold text-purple-400">3. Tuple (tuple)</span>
            <span className="text-[10px] text-rose-400 font-mono">Immutable</span>
          </div>
          <div className="font-mono text-xs text-slate-300 truncate">('Apple', 'Banana', 'Cherry')</div>
          <div className="text-[11px] font-mono text-slate-500 mt-2">
            my_tuple[-1] = <strong className="text-emerald-400">"{my_tuple[my_tuple.length - 1]}"</strong>
          </div>
        </div>

        {/* Range */}
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-mono font-bold text-emerald-400">4. Range (range)</span>
            <span className="text-[10px] text-slate-400 font-mono">Lazy Object</span>
          </div>
          <div className="font-mono text-xs text-slate-300 truncate">range(1, 10, 2)</div>
          <div className="text-[11px] font-mono text-slate-500 mt-2">
            list(my_range) = <strong className="text-emerald-400">[1, 3, 5, 7, 9]</strong>
          </div>
        </div>

        {/* Bytes */}
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-mono font-bold text-cyan-400">5. Bytes (bytes)</span>
            <span className="text-[10px] text-rose-400 font-mono">Immutable</span>
          </div>
          <div className="font-mono text-xs text-slate-300 truncate">b'{byteToStr(my_bytes)}' ([65, 66, 67])</div>
          <div className="text-[11px] font-mono text-slate-500 mt-2">
            my_bytes[:2] = <strong className="text-emerald-400">b'{byteToStr(my_bytes.slice(0, 2))}'</strong>
          </div>
        </div>

        {/* Bytearray with interactive mutation */}
        <div className="p-3 bg-slate-950 border border-blue-900/60 rounded-lg">
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-mono font-bold text-blue-300">6. Bytearray (bytearray)</span>
            <span className="text-[10px] text-emerald-400 font-mono">Mutable</span>
          </div>
          <div className="font-mono text-xs text-slate-300 truncate">
            bytearray(b'{byteToStr(my_byte_array)}')
          </div>
          <div className="text-[11px] font-mono text-slate-500 mt-2">
            my_byte_array[0] = <strong className="text-amber-400">{byte0Val} ('{String.fromCharCode(byte0Val)}')</strong>
          </div>
        </div>
      </div>

      {/* Interactive In-Place Mutation Controller */}
      <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold text-white block">
            Test Mutability: Change bytearray[0] in real time
          </span>
          <span className="text-[11px] text-slate-400">
            Initial ASCII was 65 ('A'). Notice how bytearray modifies in-place without error, whereas bytes would raise TypeError!
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setByte0Val(68)}
            className={`px-2.5 py-1 text-xs font-mono rounded ${byte0Val === 68 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            68 ('D') [Lab PDF]
          </button>
          <button
            onClick={() => setByte0Val(88)}
            className={`px-2.5 py-1 text-xs font-mono rounded ${byte0Val === 88 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            88 ('X')
          </button>
          <button
            onClick={() => setByte0Val(90)}
            className={`px-2.5 py-1 text-xs font-mono rounded ${byte0Val === 90 ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'}`}
          >
            90 ('Z')
          </button>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 4. Fibonacci While Loop Simulation with Step Tracer
// =========================================================================
function FibonacciWhileSim() {
  const [numTerms, setNumTerms] = useState<number>(7);
  const [currentStep, setCurrentStep] = useState<number>(7);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  // Generate sequence states for tracing
  const states = React.useMemo(() => {
    const list: { step: number; t1: number; t2: number; nextTerm: number; i: number }[] = [];
    let t1 = 0;
    let t2 = 1;
    let i = 1;
    while (i <= numTerms) {
      const nextTerm = t1 + t2;
      list.push({ step: i, t1, t2, nextTerm, i });
      t1 = t2;
      t2 = nextTerm;
      i = i + 1;
    }
    return list;
  }, [numTerms]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= numTerms) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 700);
    return () => clearInterval(interval);
  }, [isPlaying, numTerms]);

  return (
    <div className="space-y-5">
      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-950 rounded-lg border border-slate-800">
        <div className="flex items-center gap-3">
          <label className="text-xs font-mono text-slate-400">Terms to generate (num):</label>
          <input
            type="number"
            min="1"
            max="12"
            value={numTerms}
            onChange={(e) => {
              const val = Math.max(1, Math.min(12, parseInt(e.target.value) || 1));
              setNumTerms(val);
              setCurrentStep(val);
            }}
            className="w-16 bg-slate-900 border border-slate-700 rounded px-2 py-1 text-xs font-mono text-white text-center"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setCurrentStep(1);
              setIsPlaying(true);
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-medium"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Trace While Loop</span>
          </button>
          <button
            onClick={() => {
              setCurrentStep(prev => Math.min(numTerms, prev + 1));
            }}
            disabled={currentStep >= numTerms}
            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 rounded text-xs font-medium"
          >
            Next Step
          </button>
          <button
            onClick={() => {
              setIsPlaying(false);
              setCurrentStep(numTerms);
            }}
            className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded"
            title="Reset to full"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Terminal Output */}
        <div className="lg:col-span-5 bg-slate-950 p-4 rounded-lg border border-slate-800 font-mono text-xs space-y-1">
          <span className="text-slate-500 block pb-2 border-b border-slate-800">Console Standard Output:</span>
          <div className="text-amber-400 pt-1">Enter How many Terms you want : {numTerms}</div>
          <div className="text-cyan-400">Fibinocci Series</div>
          <div className="space-y-0.5 pt-1">
            {states.slice(0, currentStep).map((s, idx) => (
              <div key={idx} className="text-emerald-400 font-bold flex items-center justify-between">
                <span>{s.t1}</span>
                <span className="text-[10px] text-slate-600 font-normal">iteration {idx + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* State Machine Trace Table */}
        <div className="lg:col-span-7 bg-slate-950 p-4 rounded-lg border border-slate-800 overflow-x-auto">
          <span className="text-xs font-mono text-slate-400 block mb-2">Variable State Tracing Table:</span>
          <table className="w-full text-left font-mono text-xs">
            <thead className="text-slate-500 border-b border-slate-800 pb-1">
              <tr>
                <th className="py-1">Iter (i)</th>
                <th className="py-1 text-emerald-400">Printed (t1)</th>
                <th className="py-1 text-blue-400">t2</th>
                <th className="py-1 text-amber-400">nextTerm (t1+t2)</th>
                <th className="py-1 text-purple-400">Next (t1, t2)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {states.slice(0, currentStep).map((s) => (
                <tr key={s.step} className={s.step === currentStep ? 'bg-blue-950/40' : ''}>
                  <td className="py-1.5 text-slate-400">i = {s.i}</td>
                  <td className="py-1.5 text-emerald-400 font-bold">{s.t1}</td>
                  <td className="py-1.5 text-blue-400">{s.t2}</td>
                  <td className="py-1.5 text-amber-400">{s.nextTerm}</td>
                  <td className="py-1.5 text-purple-300">({s.t2}, {s.nextTerm})</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 5. File Last 5 Lines Simulator
// =========================================================================
function FileLastLinesSim() {
  const [fileContent, setFileContent] = useState<string>(
`Line 1: St. Joseph's Degree College Kurnool
Line 2: Department of Computer Science
Line 3: Practical Lab Examination 2025-2026
Line 4: Course: Application Development using Python
Line 5: Semester V practical syllabus
Line 6: Unit 1: Python Basics & Sequences
Line 7: Unit 2: File Handling & Exception Handling
Line 8: Unit 3: Multithreading & Concurrency
Line 9: Unit 4: Tkinter GUI Programming
Line 10: Unit 5: SQLite Database Integration`
  );

  const [loopMode, setLoopMode] = useState<'corrected' | 'pdf-bug'>('corrected');

  const lines = fileContent.split('\n');
  const lastFive = lines.slice(-5);
  const displayedLines = loopMode === 'corrected' ? lastFive : lines;

  return (
    <div className="space-y-4">
      {/* Discrepancy Toggle Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 bg-amber-950/30 border border-amber-800/60 rounded-lg text-xs">
        <div className="flex items-start gap-2">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <span className="text-amber-200">
            <strong>Examine Loop Variable:</strong> The PDF code defines <code className="text-white bg-slate-900 px-1 rounded">last_five = lines[-5:]</code> but loops over <code className="text-white bg-slate-900 px-1 rounded">lines</code>!
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setLoopMode('corrected')}
            className={`px-2.5 py-1 rounded font-mono text-[11px] ${
              loopMode === 'corrected' ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
            }`}
          >
            Corrected: for line in last_five
          </button>
          <button
            onClick={() => setLoopMode('pdf-bug')}
            className={`px-2.5 py-1 rounded font-mono text-[11px] ${
              loopMode === 'pdf-bug' ? 'bg-rose-600 text-white font-bold' : 'bg-slate-800 text-slate-400'
            }`}
          >
            PDF Bug: for line in lines
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Simulated Text File */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-400 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              sample.txt ({lines.length} lines total)
            </span>
            <span className="text-[11px] text-slate-500">Highlighted = lines[-5:]</span>
          </div>

          <div className="space-y-1 font-mono text-xs max-h-60 overflow-y-auto p-2 bg-slate-900 rounded border border-slate-800">
            {lines.map((l, idx) => {
              const isTail = idx >= lines.length - 5;
              return (
                <div
                  key={idx}
                  className={`px-2 py-0.5 rounded flex items-center justify-between ${
                    isTail ? 'bg-emerald-950/60 text-emerald-300 font-semibold' : 'text-slate-400'
                  }`}
                >
                  <span className="truncate">{l}</span>
                  {isTail && <span className="text-[10px] text-emerald-400 font-mono">[-{lines.length - idx}]</span>}
                </div>
              );
            })}
          </div>
        </div>

        {/* Python Terminal Output */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-xs font-mono mb-2">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                Terminal Output ({displayedLines.length} lines printed)
              </span>
            </div>

            <div className="p-3 bg-black rounded border border-slate-800 font-mono text-xs space-y-1 max-h-56 overflow-y-auto text-emerald-400">
              {displayedLines.map((l, idx) => (
                <div key={idx}>{l}</div>
              ))}
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-400 pt-2 border-t border-slate-800">
            {loopMode === 'corrected' 
              ? '✅ Correctly displays only the last 5 lines using lines[-5:].' 
              : '⚠️ As written in the PDF, prints ALL lines because of "for line in lines:".'}
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 6. Matrix Operations Simulation
// =========================================================================
function MatrixOpsSim() {
  const [matrixA, setMatrixA] = useState<number[][]>([[1, 2], [3, 4]]);
  const [matrixB, setMatrixB] = useState<number[][]>([[5, 6], [7, 8]]);
  const [multFormula, setMultFormula] = useState<'standard-dot-product' | 'pdf-assignment-bug'>('standard-dot-product');

  // Matrix Addition
  const addResult = [
    [matrixA[0][0] + matrixB[0][0], matrixA[0][1] + matrixB[0][1]],
    [matrixA[1][0] + matrixB[1][0], matrixA[1][1] + matrixB[1][1]]
  ];

  // Matrix Multiplication
  // Correct standard dot product:
  const standardMult = [
    [
      matrixA[0][0] * matrixB[0][0] + matrixA[0][1] * matrixB[1][0],
      matrixA[0][0] * matrixB[0][1] + matrixA[0][1] * matrixB[1][1]
    ],
    [
      matrixA[1][0] * matrixB[0][0] + matrixA[1][1] * matrixB[1][0],
      matrixA[1][0] * matrixB[0][1] + matrixA[1][1] * matrixB[1][1]
    ]
  ];

  // PDF bug: result[i][j] = A[i][k] * B[k][j] (overwrites k=0 with k=1!)
  const bugMult = [
    [matrixA[0][1] * matrixB[1][0], matrixA[0][1] * matrixB[1][1]],
    [matrixA[1][1] * matrixB[1][0], matrixA[1][1] * matrixB[1][1]]
  ];

  const activeMult = multFormula === 'standard-dot-product' ? standardMult : bugMult;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Matrix A */}
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
          <span className="text-xs font-mono text-blue-400 block mb-2 font-bold">Matrix A (2x2):</span>
          <div className="grid grid-cols-2 gap-2">
            {[0, 1].map(r => [0, 1].map(c => (
              <input
                key={`${r}-${c}`}
                type="number"
                value={matrixA[r][c]}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  setMatrixA(prev => {
                    const copy = prev.map(row => [...row]);
                    copy[r][c] = val;
                    return copy;
                  });
                }}
                className="bg-slate-900 border border-slate-700 rounded py-1 px-2 text-center font-mono text-sm text-white"
              />
            )))}
          </div>
        </div>

        {/* Matrix B */}
        <div className="p-3 bg-slate-950 border border-slate-800 rounded-lg">
          <span className="text-xs font-mono text-amber-400 block mb-2 font-bold">Matrix B (2x2):</span>
          <div className="grid grid-cols-2 gap-2">
            {[0, 1].map(r => [0, 1].map(c => (
              <input
                key={`${r}-${c}`}
                type="number"
                value={matrixB[r][c]}
                onChange={(e) => {
                  const val = parseInt(e.target.value) || 0;
                  setMatrixB(prev => {
                    const copy = prev.map(row => [...row]);
                    copy[r][c] = val;
                    return copy;
                  });
                }}
                className="bg-slate-900 border border-slate-700 rounded py-1 px-2 text-center font-mono text-sm text-white"
              />
            )))}
          </div>
        </div>
      </div>

      {/* Output Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Addition Result */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg">
          <span className="text-xs font-mono text-slate-400 block mb-2">Addition of Matrix-A and Matrix-B:</span>
          <div className="font-mono text-sm text-emerald-400 space-y-1 bg-slate-900 p-3 rounded border border-slate-800 text-center">
            <div>[{addResult[0][0]}, {addResult[0][1]}]</div>
            <div>[{addResult[1][0]}, {addResult[1][1]}]</div>
          </div>
        </div>

        {/* Multiplication Result */}
        <div className="p-4 bg-slate-950 border border-slate-800 rounded-lg space-y-2">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-slate-400">Multiplication of A &amp; B:</span>
            <button
              onClick={() => setMultFormula(prev => prev === 'standard-dot-product' ? 'pdf-assignment-bug' : 'standard-dot-product')}
              className="text-[10px] text-blue-400 underline hover:text-blue-300"
            >
              Toggle += vs = bug
            </button>
          </div>

          <div className="font-mono text-sm text-cyan-400 space-y-1 bg-slate-900 p-3 rounded border border-slate-800 text-center">
            <div>[{activeMult[0][0]}, {activeMult[0][1]}]</div>
            <div>[{activeMult[1][0]}, {activeMult[1][1]}]</div>
          </div>
          <span className="text-[10px] font-mono text-slate-500 block text-right">
            Mode: {multFormula === 'standard-dot-product' ? 'Mathematical Dot Product (+=)' : 'PDF Original Overwrite (=)'}
          </span>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 7. Exception Handling Simulation
// =========================================================================
function ExceptionHandlingSim() {
  const [numVal, setNumVal] = useState<string>('10');
  const [denVal, setDenVal] = useState<string>('2');
  const [traceLogs, setTraceLogs] = useState<string[]>([]);
  const [activeStep, setActiveStep] = useState<'idle' | 'try' | 'zero-error' | 'value-error' | 'else' | 'finally'>('idle');

  const runTest = (num: string, den: string) => {
    setNumVal(num);
    setDenVal(den);
    const logs: string[] = [];
    logs.push(`divide_numbers(${num}, ${den}) called.`);

    // Simulate Python Exception Handling Logic
    if (isNaN(Number(num)) || isNaN(Number(den))) {
      setActiveStep('value-error');
      logs.push(`try block: attempted division.`);
      logs.push(`caught TypeError / ValueError: invalid operand types.`);
      logs.push(`else block: SKIPPED.`);
      logs.push(`finally block: "Division attempt complete." (ALWAYS RUNS).`);
    } else if (Number(den) === 0) {
      setActiveStep('zero-error');
      logs.push(`try block: attempted division by 0.`);
      logs.push(`caught ZeroDivisionError: "Error: Cannot divide by zero!".`);
      logs.push(`else block: SKIPPED.`);
      logs.push(`finally block: "Division attempt complete." (ALWAYS RUNS).`);
    } else {
      setActiveStep('else');
      const res = Number(num) / Number(den);
      logs.push(`try block: computed ${num} / ${den} = ${res}.`);
      logs.push(`else block: "Division successful. Result: ${res}".`);
      logs.push(`finally block: "Division attempt complete." (ALWAYS RUNS).`);
    }
    setTraceLogs(logs);
  };

  return (
    <div className="space-y-5">
      {/* Test Case Triggers */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          onClick={() => runTest('10', '2')}
          className="px-3 py-1.5 bg-emerald-950 border border-emerald-800 text-emerald-300 rounded text-xs font-mono hover:bg-emerald-900"
        >
          Case 1: (10, 2) [Valid Division]
        </button>
        <button
          onClick={() => runTest('10', '0')}
          className="px-3 py-1.5 bg-rose-950 border border-rose-800 text-rose-300 rounded text-xs font-mono hover:bg-rose-900"
        >
          Case 2: (10, 0) [ZeroDivisionError]
        </button>
        <button
          onClick={() => runTest('10', '"abc"')}
          className="px-3 py-1.5 bg-amber-950 border border-amber-800 text-amber-300 rounded text-xs font-mono hover:bg-amber-900"
        >
          Case 3: (10, "abc") [Invalid Type]
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Visual Pipeline */}
        <div className="lg:col-span-7 bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-2.5 font-mono text-xs">
          <div className="text-slate-400 font-bold mb-2">Block Execution Status:</div>

          <div className={`p-2 rounded border transition-all ${activeStep !== 'idle' ? 'bg-blue-950/40 border-blue-700 text-blue-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            1. <strong>try:</strong> result = {numVal} / {denVal}
          </div>

          <div className={`p-2 rounded border transition-all ${activeStep === 'zero-error' ? 'bg-rose-950/60 border-rose-600 text-rose-200 font-bold' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            2. <strong>except ZeroDivisionError:</strong> print("Error: Cannot divide by zero!")
          </div>

          <div className={`p-2 rounded border transition-all ${activeStep === 'value-error' ? 'bg-amber-950/60 border-amber-600 text-amber-200 font-bold' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            3. <strong>except ValueError / TypeError:</strong> print("Error: Invalid input type")
          </div>

          <div className={`p-2 rounded border transition-all ${activeStep === 'else' ? 'bg-emerald-950/60 border-emerald-600 text-emerald-200 font-bold' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            4. <strong>else:</strong> print("Division successful. Result: ...")
          </div>

          <div className={`p-2 rounded border transition-all ${activeStep !== 'idle' ? 'bg-purple-950/60 border-purple-600 text-purple-200 font-bold' : 'bg-slate-900 border-slate-800 text-slate-500'}`}>
            5. <strong>finally:</strong> print("Division attempt complete.") [Guaranteed]
          </div>
        </div>

        {/* Execution Logs */}
        <div className="lg:col-span-5 bg-slate-950 p-4 rounded-lg border border-slate-800 flex flex-col justify-between font-mono text-xs">
          <div>
            <span className="text-slate-400 block mb-2 font-bold">Execution Output:</span>
            {traceLogs.length > 0 ? (
              <div className="space-y-1.5 text-slate-300">
                {traceLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-400">›</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            ) : (
              <span className="text-slate-600 italic">Click one of the test cases above to trigger exception handling.</span>
            )}
          </div>

          <div className="p-2 bg-slate-900 rounded border border-slate-800 text-[11px] text-slate-400 mt-4">
            Notice that the <strong className="text-purple-400">finally</strong> clause executes regardless of whether an exception was raised, caught, or clean!
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 8. Multithreading Simulation
// =========================================================================
function MultithreadingSim() {
  const [thread1Logs, setThread1Logs] = useState<string[]>([]);
  const [thread2Logs, setThread2Logs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const startThreads = () => {
    setIsRunning(true);
    setIsFinished(false);
    setThread1Logs([]);
    setThread2Logs([]);

    const letters = ['A', 'B', 'C', 'D', 'E'];
    for (let i = 1; i <= 5; i++) {
      setTimeout(() => {
        setThread1Logs(prev => [...prev, `Number: ${i}`]);
      }, i * 600);

      setTimeout(() => {
        setThread2Logs(prev => [...prev, `Letter: ${letters[i - 1]}`]);
      }, i * 600 + 150); // Slight concurrent offset
    }

    setTimeout(() => {
      setIsRunning(false);
      setIsFinished(true);
    }, 5 * 600 + 300);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between p-3 bg-slate-950 border border-slate-800 rounded-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={startThreads}
            disabled={isRunning}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded text-xs font-semibold"
          >
            <Play className="w-3.5 h-3.5" />
            <span>{isRunning ? 'Threads Running Concurrently...' : 'Start thread1 and thread2'}</span>
          </button>
        </div>

        <span className="text-xs font-mono text-slate-400">
          Sync status: <strong className={isFinished ? 'text-emerald-400' : isRunning ? 'text-amber-400' : 'text-slate-500'}>
            {isFinished ? 'join() unblocked' : isRunning ? 'Concurrent Execution' : 'Idle'}
          </strong>
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Thread 1 */}
        <div className="p-4 bg-slate-950 border border-blue-900/60 rounded-lg space-y-2">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-blue-400 font-bold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Thread 1: print_numbers()
            </span>
            <span className="text-[10px] text-slate-500">time.sleep(1)</span>
          </div>

          <div className="h-40 bg-slate-900 rounded p-3 font-mono text-xs space-y-1 overflow-y-auto border border-slate-800">
            {thread1Logs.map((l, idx) => (
              <div key={idx} className="text-blue-300 font-semibold">{l}</div>
            ))}
          </div>
        </div>

        {/* Thread 2 */}
        <div className="p-4 bg-slate-950 border border-amber-900/60 rounded-lg space-y-2">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-amber-400 font-bold flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" />
              Thread 2: print_letters()
            </span>
            <span className="text-[10px] text-slate-500">time.sleep(1)</span>
          </div>

          <div className="h-40 bg-slate-900 rounded p-3 font-mono text-xs space-y-1 overflow-y-auto border border-slate-800">
            {thread2Logs.map((l, idx) => (
              <div key={idx} className="text-amber-300 font-semibold">{l}</div>
            ))}
          </div>
        </div>
      </div>

      {isFinished && (
        <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-lg text-xs font-mono text-emerald-300 flex items-center justify-between animate-in fade-in duration-300">
          <span>Finished executing both threads. (join() completed)</span>
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
        </div>
      )}
    </div>
  );
}

// =========================================================================
// 9. Tkinter Calculator GUI Simulation
// =========================================================================
function TkinterCalcSim() {
  const [display, setDisplay] = useState<string>('');

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+']
  ];

  const handleBtnClick = (val: string) => {
    if (val === '=') {
      try {
        if (!display) return;
        // Safe evaluation
        const sanitized = display.replace(/[^0-9+\-*/.]/g, '');
        // eslint-disable-next-line no-eval
        const evaluated = Function(`'use strict'; return (${sanitized})`)();
        setDisplay(String(evaluated));
      } catch {
        setDisplay('Error');
      }
    } else if (val === 'C') {
      setDisplay('');
    } else {
      if (display === 'Error') {
        setDisplay(val);
      } else {
        setDisplay(prev => prev + val);
      }
    }
  };

  return (
    <div className="flex justify-center p-2">
      {/* Tkinter Window Container */}
      <div className="w-72 bg-slate-200 text-slate-900 rounded-lg shadow-2xl overflow-hidden border-2 border-slate-400 font-sans">
        {/* Window Title Bar */}
        <div className="bg-slate-300 px-3 py-1.5 border-b border-slate-400 flex items-center justify-between select-none">
          <span className="text-xs font-semibold text-slate-700">Calculator</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" />
          </div>
        </div>

        {/* Tkinter Entry Screen */}
        <div className="p-3 bg-slate-200">
          <div className="bg-white border-2 border-slate-400 rounded px-3 py-3 text-right font-mono text-xl text-slate-900 shadow-inner h-12 overflow-x-auto flex items-center justify-end">
            {display || '0'}
          </div>

          {/* Keypad Grid */}
          <div className="grid grid-cols-4 gap-1.5 mt-3">
            {buttons.map((row, rIdx) => 
              row.map((btn, cIdx) => (
                <button
                  key={`${rIdx}-${cIdx}`}
                  onClick={() => handleBtnClick(btn)}
                  className={`py-3 text-base font-bold rounded shadow-xs active:translate-y-0.5 transition-all select-none ${
                    btn === '=' ? 'bg-blue-600 text-white hover:bg-blue-700' :
                    btn === 'C' ? 'bg-rose-100 text-rose-800 hover:bg-rose-200' :
                    ['+', '-', '*', '/'].includes(btn) ? 'bg-slate-300 hover:bg-slate-400 text-slate-800' :
                    'bg-slate-100 hover:bg-white text-slate-900'
                  }`}
                >
                  {btn}
                </button>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 10. Tkinter + SQLite Database Application Simulation
// =========================================================================
function TkinterDbSim() {
  const [nameInput, setNameInput] = useState<string>('Suresh');
  const [ageInput, setAgeInput] = useState<string>('21');
  const [records, setRecords] = useState<{ name: string; age: number }[]>([
    { name: 'Kiran', age: 20 },
    { name: 'Anitha', age: 21 },
    { name: 'Ravi', age: 22 }
  ]);
  const [textViewContent, setTextViewContent] = useState<string>('');

  const handleAdd = () => {
    if (!nameInput.trim()) return;
    const newAge = parseInt(ageInput) || 18;
    setRecords(prev => [...prev, { name: nameInput.trim(), age: newAge }]);
    setNameInput('');
    setAgeInput('');
  };

  const handleView = () => {
    const formatted = records.map(r => `${r.name}, ${r.age}`).join('\n');
    setTextViewContent(formatted);
  };

  return (
    <div className="flex justify-center p-2">
      {/* Tkinter Window Container */}
      <div className="w-full max-w-md bg-slate-200 text-slate-900 rounded-lg shadow-2xl overflow-hidden border-2 border-slate-400 font-sans">
        {/* Title Bar */}
        <div className="bg-slate-300 px-3 py-1.5 border-b border-slate-400 flex items-center justify-between select-none">
          <span className="text-xs font-semibold text-slate-700">Simple DB App (SQLite3)</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block" />
          </div>
        </div>

        {/* Tkinter Form Layout */}
        <div className="p-4 bg-slate-200 space-y-3">
          {/* Row 0: Name */}
          <div className="flex items-center gap-3">
            <label className="text-xs font-bold text-slate-700 w-16">Name:</label>
            <input
              type="text"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              placeholder="e.g. Ramesh"
              className="w-full bg-white border border-slate-400 rounded px-2.5 py-1 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Row 1: Age */}
          <div className="flex items-center gap-3">
            <label className="text-xs font-bold text-slate-700 w-16">Age:</label>
            <input
              type="number"
              value={ageInput}
              onChange={(e) => setAgeInput(e.target.value)}
              placeholder="e.g. 21"
              className="w-full bg-white border border-slate-400 rounded px-2.5 py-1 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
            />
          </div>

          {/* Row 2: Add and View Buttons */}
          <div className="flex items-center gap-2 pt-1">
            <button
              onClick={handleAdd}
              className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded shadow-xs active:translate-y-0.5"
            >
              Add Record
            </button>
            <button
              onClick={handleView}
              className="flex-1 py-1.5 bg-slate-700 hover:bg-slate-800 text-white text-xs font-bold rounded shadow-xs active:translate-y-0.5"
            >
              View (SELECT *)
            </button>
          </div>

          {/* Row 3: Multiline Text Widget Display */}
          <div className="space-y-1">
            <span className="text-[11px] font-mono text-slate-600">t = tk.Text(root, height=10, width=40)</span>
            <div className="bg-white border-2 border-slate-400 rounded p-2.5 h-36 font-mono text-xs text-slate-800 shadow-inner overflow-y-auto whitespace-pre-line">
              {textViewContent || <span className="text-slate-400 italic">Click "View" to query data.db and display records...</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
