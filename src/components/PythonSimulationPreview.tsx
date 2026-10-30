import React, { useState, useMemo } from 'react';
import { 
  Play, 
  RotateCcw, 
  Sparkles, 
  FileText, 
  Table, 
  Terminal, 
  Info, 
  CheckCircle2, 
  BarChart2, 
  TrendingUp, 
  Database,
  ArrowRight,
  Filter,
  Download
} from 'lucide-react';
import { ProgramData } from '../types';

interface PythonSimulationPreviewProps {
  program: ProgramData;
}

export const PythonSimulationPreview: React.FC<PythonSimulationPreviewProps> = ({ program }) => {
  const [activeTab, setActiveTab] = useState<'simulator' | 'dataset' | 'raw_output' | 'run_guide'>('simulator');

  // Program 1 states
  const [p1ArangeStep, setP1ArangeStep] = useState(2);
  const [p1LinspaceCount, setP1LinspaceCount] = useState(5);
  const [p1RandSeed, setP1RandSeed] = useState(42);

  // Program 2 states
  const [p2SelectedIndex, setP2SelectedIndex] = useState(2);
  const [p2SliceStart, setP2SliceStart] = useState(1);
  const [p2SliceEnd, setP2SliceEnd] = useState(4);
  const [p2ReshapeShape, setP2ReshapeShape] = useState<'2x3' | '3x2'>('2x3');

  // Program 3 states
  const [p3Arr1, setP3Arr1] = useState<number[]>([6, 3, 9, 16, 20]);
  const [p3Arr2, setP3Arr2] = useState<number[]>([1, 2, 7, 3, 15]);

  // Program 5 states (CSV Analysis)
  const [p5ActiveView, setP5ActiveView] = useState<'all' | 'head' | 'tail' | 'filter' | 'drop_city' | 'sorted' | 'ranked' | 'stats'>('all');

  // Program 6 states (Missing data)
  const [p6Mode, setP6Mode] = useState<'original' | 'null_summary' | 'dropna' | 'fillna_mean'>('original');

  // Program 7 states (Transformation)
  const [p7ActiveTransform, setP7ActiveTransform] = useState<'all' | 'apply_age' | 'map_city' | 'str_upper'>('all');

  // Program 8 states (Bar & Line plot)
  const [p8Sales, setP8Sales] = useState<number[]>([10, 15, 12, 18, 20]);
  const [p8PlotType, setP8PlotType] = useState<'both' | 'bar_only' | 'line_only'>('both');

  // Program 9 states (Hist & Box plot)
  const [p9Bins, setP9Bins] = useState<number>(15);
  const [p9Mean, setP9Mean] = useState<number>(50);
  const [p9Std, setP9Std] = useState<number>(10);

  // Program 10 states (Scatter & KDE)
  const [p10ActivePlot, setP10ActivePlot] = useState<'scatter' | 'density'>('scatter');

  // Program 5 dataset records
  const myfileData = [
    { Name: 'Akash', Age: 25, City: 'Kurnool' },
    { Name: 'Balu', Age: 30, City: 'Ananthapur' },
    { Name: 'Charlie', Age: 35, City: 'Nandyal' },
    { Name: 'Dally', Age: 40, City: 'Hyderabad' },
    { Name: 'Evangilin', Age: 45, City: 'Chennai' },
    { Name: 'Florence', Age: 36, City: 'Bangalore' }
  ];

  // Program 6 dataset records
  const empData = [
    { Name: 'Aarav', Age: 25, City: 'Mumbai', Salary: 50000 },
    { Name: 'Bhavna', Age: 30, City: 'New Delhi', Salary: 55000 },
    { Name: 'Chirag', Age: 35, City: 'Bangalore', Salary: 60000 },
    { Name: 'Deepak', Age: 40, City: 'Hyderabad', Salary: null },
    { Name: 'Esha', Age: null, City: 'Kolkata', Salary: 80000 },
    { Name: 'Farhan', Age: 45, City: 'Mumbai', Salary: 52000 },
    { Name: 'Gauri', Age: 32, City: 'Bangalore', Salary: 59000 },
    { Name: 'Harsh', Age: null, City: 'New Delhi', Salary: 65000 },
    { Name: 'Ishita', Age: 50, City: 'Hyderabad', Salary: 75000 },
    { Name: 'Jayant', Age: 36, City: null, Salary: 72000 }
  ];

  // Program 7 dataset records
  const cityData = [
    { Name: 'Aarav', Age: 25, City: 'Mumbai', Salary: 50000 },
    { Name: 'Bhavna', Age: 30, City: 'New Delhi', Salary: 55000 },
    { Name: 'Chirag', Age: 35, City: 'Bangalore', Salary: 60000 },
    { Name: 'Deepak', Age: 40, City: 'Hyderabad', Salary: 56000 },
    { Name: 'Esha', Age: 30, City: 'Kolkata', Salary: 80000 },
    { Name: 'Farhan', Age: 45, City: 'Mumbai', Salary: 52000 },
    { Name: 'Gauri', Age: 32, City: 'Bangalore', Salary: 59000 },
    { Name: 'Harsh', Age: 29, City: 'New Delhi', Salary: 65000 },
    { Name: 'Ishita', Age: 50, City: 'Hyderabad', Salary: 75000 },
    { Name: 'Jayant', Age: 36, City: 'Kolkata', Salary: 72000 }
  ];

  const cityAbbrMap: Record<string, string> = {
    'Mumbai': 'MUM',
    'New Delhi': 'ND',
    'Bangalore': 'BAN',
    'Hyderabad': 'HYD',
    'Kolkata': 'KOL'
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs flex flex-col">
      {/* Simulation Top Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-slate-200 bg-slate-50/80 px-4 py-2.5 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-bold text-slate-800">
            Python &amp; Data Science Runtime Simulator
          </span>
          <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-800 border border-blue-200">
            Interactive Frontend Model
          </span>
        </div>

        {/* View mode tabs */}
        <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-lg text-xs">
          <button
            onClick={() => setActiveTab('simulator')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-all ${
              activeTab === 'simulator' 
                ? 'bg-white text-blue-700 shadow-2xs' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Play className="w-3.5 h-3.5" />
            <span>Interactive Demo</span>
          </button>

          {program.dataset && (
            <button
              onClick={() => setActiveTab('dataset')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-all ${
                activeTab === 'dataset' 
                  ? 'bg-white text-blue-700 shadow-2xs' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Dataset Explorer</span>
            </button>
          )}

          <button
            onClick={() => setActiveTab('raw_output')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-all ${
              activeTab === 'raw_output' 
                ? 'bg-white text-blue-700 shadow-2xs' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>PDF Output</span>
          </button>

          <button
            onClick={() => setActiveTab('run_guide')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-all ${
              activeTab === 'run_guide' 
                ? 'bg-white text-blue-700 shadow-2xs' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Run Locally</span>
          </button>
        </div>
      </div>

      {/* Notice Banner */}
      <div className="px-4 py-2 bg-blue-50/60 border-b border-blue-100 flex items-center justify-between text-[11px] text-blue-900">
        <div className="flex items-center gap-1.5">
          <Info className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>
            <strong>Educational Simulation:</strong> Models identical NumPy, Pandas &amp; Matplotlib logic in real-time. Full Python scripts run locally via terminal.
          </span>
        </div>
        <span className="font-mono text-[10px] text-blue-700 hidden sm:inline">
          Python 3.11+ / NumPy 1.26 / Pandas 2.2
        </span>
      </div>

      {/* Main Tab Content */}
      <div className="p-5 flex-1 bg-white">
        {/* ========================================================= */}
        {/* TAB 1: INTERACTIVE SIMULATORS                             */}
        {/* ========================================================= */}
        {activeTab === 'simulator' && (
          <div className="space-y-6">
            {/* PROGRAM 1: NUMPY CREATION */}
            {program.simulationType === 'numpy-creation' && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Card 1: From Python List */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800">1. Array from Python List</span>
                      <span className="font-mono text-slate-400 text-[10px]">np.array([1, 2, 3, 4, 5])</span>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs text-blue-700">
                      [1 2 3 4 5]
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Shape: (5,) · dtype: int64 · ndim: 1
                    </div>
                  </div>

                  {/* Card 2: np.arange */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800">2. np.arange(0, 10, {p1ArangeStep})</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-slate-500">Step:</span>
                        {[1, 2, 3].map(s => (
                          <button
                            key={s}
                            onClick={() => setP1ArangeStep(s)}
                            className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                              p1ArangeStep === s ? 'bg-blue-600 text-white font-bold' : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs text-blue-700">
                      [{Array.from({ length: Math.ceil(10 / p1ArangeStep) }, (_, i) => i * p1ArangeStep).join(' ')}]
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Range [0, 10) with step {p1ArangeStep}. Upper bound 10 is excluded.
                    </div>
                  </div>

                  {/* Card 3: np.linspace */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800">3. np.linspace(0, 1, {p1LinspaceCount})</span>
                      <div className="flex items-center gap-1">
                        <span className="text-[10px] text-slate-500">Points:</span>
                        {[3, 5, 9].map(cnt => (
                          <button
                            key={cnt}
                            onClick={() => setP1LinspaceCount(cnt)}
                            className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                              p1LinspaceCount === cnt ? 'bg-blue-600 text-white font-bold' : 'bg-slate-200 text-slate-700'
                            }`}
                          >
                            {cnt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs text-blue-700 overflow-x-auto">
                      [{Array.from({ length: p1LinspaceCount }, (_, i) => (i / (p1LinspaceCount - 1)).toFixed(2)).join('  ')}]
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Closed interval [0, 1] divided into {p1LinspaceCount} equidistant points.
                    </div>
                  </div>

                  {/* Card 4: np.random.randint */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-800">4. np.random.randint(1, 11, size=(2, 4))</span>
                      <button
                        onClick={() => setP1RandSeed(s => s + 1)}
                        className="flex items-center gap-1 px-2 py-0.5 text-[10px] text-blue-600 bg-blue-50 border border-blue-200 rounded hover:bg-blue-100"
                      >
                        <RotateCcw className="w-2.5 h-2.5" /> Re-sample
                      </button>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs text-blue-700 leading-relaxed">
                      [[ 2 10 10  8]<br/>
                      &nbsp;[ 8  1  1  9]]
                    </div>
                    <div className="text-[11px] text-slate-500">
                      2 rows, 4 columns of discrete integers from 1 up to 10 (11 is exclusive).
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROGRAM 2: NUMPY MANIPULATION */}
            {program.simulationType === 'numpy-manipulation' && (
              <div className="space-y-6">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">Source Array: arr</span>
                    <span className="text-[11px] font-mono text-slate-500">Length: 6 elements</span>
                  </div>
                  {/* Interactive element blocks */}
                  <div className="grid grid-cols-6 gap-2">
                    {[10, 20, 30, 40, 50, 60].map((val, idx) => (
                      <button
                        key={idx}
                        onClick={() => setP2SelectedIndex(idx)}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          p2SelectedIndex === idx
                            ? 'bg-blue-600 text-white font-bold border-blue-700 shadow-sm scale-105'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
                        }`}
                      >
                        <div className="text-sm font-mono">{val}</div>
                        <div className={`text-[10px] mt-1 ${p2SelectedIndex === idx ? 'text-blue-100' : 'text-slate-400'}`}>
                          idx: {idx} ({idx - 6})
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs flex items-center justify-between">
                    <span>Selected Element: <strong>arr[{p2SelectedIndex}]</strong> or <strong>arr[{p2SelectedIndex - 6}]</strong></span>
                    <span className="font-mono font-bold text-blue-700 text-sm">Value: {[10, 20, 30, 40, 50, 60][p2SelectedIndex]}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Slicing */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                    <span className="text-xs font-bold text-slate-800">Slicing Demonstration</span>
                    <div className="flex items-center gap-3 text-xs">
                      <label className="flex items-center gap-1">
                        Start:
                        <input
                          type="number"
                          min={0}
                          max={5}
                          value={p2SliceStart}
                          onChange={(e) => setP2SliceStart(Number(e.target.value))}
                          className="w-12 px-2 py-0.5 border rounded bg-white font-mono"
                        />
                      </label>
                      <label className="flex items-center gap-1">
                        Stop:
                        <input
                          type="number"
                          min={1}
                          max={6}
                          value={p2SliceEnd}
                          onChange={(e) => setP2SliceEnd(Number(e.target.value))}
                          className="w-12 px-2 py-0.5 border rounded bg-white font-mono"
                        />
                      </label>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs text-blue-700">
                      arr[{p2SliceStart}:{p2SliceEnd}] = [{[10, 20, 30, 40, 50, 60].slice(p2SliceStart, p2SliceEnd).join(' ')}]
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Negative slice: arr[-3:-1] = [40 50] (indices -3 and -2; -1 is excluded).
                    </div>
                  </div>

                  {/* Reshaping & Splitting */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-800">Reshaping &amp; Splitting</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => setP2ReshapeShape('2x3')}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded ${
                            p2ReshapeShape === '2x3' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          2x3
                        </button>
                        <button
                          onClick={() => setP2ReshapeShape('3x2')}
                          className={`px-2 py-0.5 text-[10px] font-mono rounded ${
                            p2ReshapeShape === '3x2' ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          3x2
                        </button>
                      </div>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs text-blue-700">
                      {p2ReshapeShape === '2x3' ? (
                        <>[[10 20 30]<br/>&nbsp;[40 50 60]]</>
                      ) : (
                        <>[[10 20]<br/>&nbsp;[30 40]<br/>&nbsp;[50 60]]</>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      Joined: [1 2] + [3 4] = [1 2 3 4] · Split (3 chunks): [10 20], [30 40], [50 60]
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROGRAM 3: UFUNCS & MATH */}
            {program.simulationType === 'numpy-ufuncs' && (
              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-slate-800">Array 1: arr1</span>
                    <div className="font-mono text-xs text-blue-700 bg-white p-2.5 rounded-lg border">
                      [{p3Arr1.join(' ')}]
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-slate-800">Array 2: arr2</span>
                    <div className="font-mono text-xs text-blue-700 bg-white p-2.5 rounded-lg border">
                      [{p3Arr2.join(' ')}]
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                    <span className="text-[11px] font-semibold text-slate-500">Sum: np.add(arr1, arr2)</span>
                    <div className="font-mono text-xs font-bold text-blue-700">
                      [{p3Arr1.map((v, i) => v + p3Arr2[i]).join(' ')}]
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                    <span className="text-[11px] font-semibold text-slate-500">Difference: np.subtract</span>
                    <div className="font-mono text-xs font-bold text-blue-700">
                      [{p3Arr1.map((v, i) => v - p3Arr2[i]).join(' ')}]
                    </div>
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-lg space-y-1">
                    <span className="text-[11px] font-semibold text-slate-500">Product: np.multiply</span>
                    <div className="font-mono text-xs font-bold text-blue-700">
                      [{p3Arr1.map((v, i) => v * p3Arr2[i]).join(' ')}]
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                  <div className="p-2.5 bg-slate-50 border rounded-lg text-center">
                    <span className="text-[10px] text-slate-400 block uppercase">arr1.sum()</span>
                    <span className="text-base font-bold text-slate-900 font-mono">
                      {p3Arr1.reduce((a, b) => a + b, 0)}
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg text-center">
                    <span className="text-[10px] text-slate-400 block uppercase">arr1.mean()</span>
                    <span className="text-base font-bold text-slate-900 font-mono">
                      {(p3Arr1.reduce((a, b) => a + b, 0) / p3Arr1.length).toFixed(1)}
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg text-center">
                    <span className="text-[10px] text-slate-400 block uppercase">arr1.max()</span>
                    <span className="text-base font-bold text-slate-900 font-mono">
                      {Math.max(...p3Arr1)}
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg text-center">
                    <span className="text-[10px] text-slate-400 block uppercase">Powers (^2)</span>
                    <span className="text-xs font-bold text-slate-900 font-mono block truncate">
                      [36 9 81 256 400]
                    </span>
                  </div>
                  <div className="p-2.5 bg-slate-50 border rounded-lg text-center">
                    <span className="text-[10px] text-slate-400 block uppercase">Std Deviation</span>
                    <span className="text-base font-bold text-slate-900 font-mono">
                      6.31
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* PROGRAM 4: PANDAS SERIES & DATAFRAME */}
            {program.simulationType === 'pandas-series-df' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Series from List */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-slate-800">Series from List: pd.Series([10, 20, 30, 40, 50])</span>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs text-slate-800">
                      0 &nbsp; 10<br/>
                      1 &nbsp; 20<br/>
                      2 &nbsp; 30<br/>
                      3 &nbsp; 40<br/>
                      4 &nbsp; 50<br/>
                      <span className="text-slate-400">dtype: int64</span>
                    </div>
                  </div>

                  {/* Series from Dict */}
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <span className="text-xs font-bold text-slate-800">Series from Dictionary: pd.Series(&#123;"A": 100, ...&#125;)</span>
                    <div className="p-3 bg-white border border-slate-200 rounded-lg font-mono text-xs text-slate-800">
                      A &nbsp; 100<br/>
                      B &nbsp; 200<br/>
                      C &nbsp; 300<br/>
                      <span className="text-slate-400">dtype: int64</span>
                    </div>
                  </div>
                </div>

                {/* DataFrame from Dictionary */}
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <span className="text-xs font-bold text-slate-800">DataFrame from Dictionary / 2D NumPy Array</span>
                  <div className="overflow-x-auto bg-white border border-slate-200 rounded-lg">
                    <table className="w-full text-xs font-mono">
                      <thead className="bg-slate-100 text-slate-700 border-b">
                        <tr>
                          <th className="px-4 py-2 text-left">Index</th>
                          <th className="px-4 py-2 text-left">Name</th>
                          <th className="px-4 py-2 text-left">Age</th>
                          <th className="px-4 py-2 text-left">City</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        <tr>
                          <td className="px-4 py-1.5 text-slate-400">0</td>
                          <td className="px-4 py-1.5 font-semibold text-slate-900">Alice</td>
                          <td className="px-4 py-1.5 text-blue-700">25</td>
                          <td className="px-4 py-1.5 text-slate-600">New York</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-1.5 text-slate-400">1</td>
                          <td className="px-4 py-1.5 font-semibold text-slate-900">Bob</td>
                          <td className="px-4 py-1.5 text-blue-700">30</td>
                          <td className="px-4 py-1.5 text-slate-600">Los Angeles</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-1.5 text-slate-400">2</td>
                          <td className="px-4 py-1.5 font-semibold text-slate-900">Charlie</td>
                          <td className="px-4 py-1.5 text-blue-700">35</td>
                          <td className="px-4 py-1.5 text-slate-600">Chicago</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* PROGRAM 5: CSV ANALYSIS (myfile.csv) */}
            {program.simulationType === 'pandas-csv-analysis' && (
              <div className="space-y-4">
                {/* Actions filter buttons */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs">
                  <button
                    onClick={() => setP5ActiveView('all')}
                    className={`px-2.5 py-1 rounded font-medium ${p5ActiveView === 'all' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    All Records (6)
                  </button>
                  <button
                    onClick={() => setP5ActiveView('head')}
                    className={`px-2.5 py-1 rounded font-medium ${p5ActiveView === 'head' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    df.head(5)
                  </button>
                  <button
                    onClick={() => setP5ActiveView('tail')}
                    className={`px-2.5 py-1 rounded font-medium ${p5ActiveView === 'tail' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    df.tail(5)
                  </button>
                  <button
                    onClick={() => setP5ActiveView('filter')}
                    className={`px-2.5 py-1 rounded font-medium ${p5ActiveView === 'filter' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    df[Age &gt; 30]
                  </button>
                  <button
                    onClick={() => setP5ActiveView('drop_city')}
                    className={`px-2.5 py-1 rounded font-medium ${p5ActiveView === 'drop_city' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    drop('City', axis=1)
                  </button>
                  <button
                    onClick={() => setP5ActiveView('sorted')}
                    className={`px-2.5 py-1 rounded font-medium ${p5ActiveView === 'sorted' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    sort_values('Age')
                  </button>
                  <button
                    onClick={() => setP5ActiveView('ranked')}
                    className={`px-2.5 py-1 rounded font-medium ${p5ActiveView === 'ranked' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    df['Age'].rank()
                  </button>
                  <button
                    onClick={() => setP5ActiveView('stats')}
                    className={`px-2.5 py-1 rounded font-medium ${p5ActiveView === 'stats' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    Statistics Summary
                  </button>
                </div>

                {/* Display Area */}
                {p5ActiveView === 'stats' ? (
                  <div className="p-4 bg-slate-50 border rounded-xl space-y-3">
                    <span className="text-xs font-bold text-slate-800">Statistical Operations on 'Age' Column</span>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                      <div className="bg-white p-3 border rounded-lg text-center">
                        <span className="text-[10px] text-slate-400 block uppercase">Mean</span>
                        <span className="text-base font-bold text-blue-700 font-mono">35.17</span>
                      </div>
                      <div className="bg-white p-3 border rounded-lg text-center">
                        <span className="text-[10px] text-slate-400 block uppercase">Median</span>
                        <span className="text-base font-bold text-blue-700 font-mono">35.50</span>
                      </div>
                      <div className="bg-white p-3 border rounded-lg text-center">
                        <span className="text-[10px] text-slate-400 block uppercase">Std Dev</span>
                        <span className="text-base font-bold text-blue-700 font-mono">7.08</span>
                      </div>
                      <div className="bg-white p-3 border rounded-lg text-center">
                        <span className="text-[10px] text-slate-400 block uppercase">Min</span>
                        <span className="text-base font-bold text-blue-700 font-mono">25</span>
                      </div>
                      <div className="bg-white p-3 border rounded-lg text-center">
                        <span className="text-[10px] text-slate-400 block uppercase">Max</span>
                        <span className="text-base font-bold text-blue-700 font-mono">45</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto bg-white border border-slate-200 rounded-lg">
                    <table className="w-full text-xs font-mono">
                      <thead className="bg-slate-100 text-slate-700 border-b">
                        <tr>
                          <th className="px-4 py-2 text-left">Index</th>
                          <th className="px-4 py-2 text-left">Name</th>
                          <th className="px-4 py-2 text-left">Age</th>
                          {p5ActiveView !== 'drop_city' && <th className="px-4 py-2 text-left">City</th>}
                          {p5ActiveView === 'ranked' && <th className="px-4 py-2 text-left text-blue-700">Age Rank</th>}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {(() => {
                          let rows = [...myfileData];
                          if (p5ActiveView === 'head') rows = rows.slice(0, 5);
                          else if (p5ActiveView === 'tail') rows = rows.slice(1, 6);
                          else if (p5ActiveView === 'filter') rows = rows.filter(r => r.Age > 30);
                          else if (p5ActiveView === 'sorted') rows.sort((a, b) => a.Age - b.Age);

                          return rows.map((r, i) => (
                            <tr key={i} className="hover:bg-slate-50">
                              <td className="px-4 py-1.5 text-slate-400">{i}</td>
                              <td className="px-4 py-1.5 font-semibold text-slate-900">{r.Name}</td>
                              <td className="px-4 py-1.5 text-blue-700 font-bold">{r.Age}</td>
                              {p5ActiveView !== 'drop_city' && <td className="px-4 py-1.5 text-slate-600">{r.City}</td>}
                              {p5ActiveView === 'ranked' && (
                                <td className="px-4 py-1.5 font-bold text-blue-700">
                                  {r.Age === 25 ? '1.0' : r.Age === 30 ? '2.0' : r.Age === 35 ? '3.0' : r.Age === 36 ? '4.0' : r.Age === 40 ? '5.0' : '6.0'}
                                </td>
                              )}
                            </tr>
                          ));
                        })()}
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono px-1">
                  <span>df.shape: (6, 3)</span>
                  <span>df.columns: ['Name', 'Age', 'City']</span>
                </div>
              </div>
            )}

            {/* PROGRAM 6: HANDLING MISSING DATA (Emp.csv) */}
            {program.simulationType === 'pandas-missing-data' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-2 p-1 bg-slate-100 rounded-lg text-xs">
                  <button
                    onClick={() => setP6Mode('original')}
                    className={`px-3 py-1.5 rounded font-medium ${p6Mode === 'original' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    Raw Dataset (with NaNs)
                  </button>
                  <button
                    onClick={() => setP6Mode('null_summary')}
                    className={`px-3 py-1.5 rounded font-medium ${p6Mode === 'null_summary' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    df.isnull().sum()
                  </button>
                  <button
                    onClick={() => setP6Mode('dropna')}
                    className={`px-3 py-1.5 rounded font-medium ${p6Mode === 'dropna' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    df.dropna() (Drop Missing)
                  </button>
                  <button
                    onClick={() => setP6Mode('fillna_mean')}
                    className={`px-3 py-1.5 rounded font-medium ${p6Mode === 'fillna_mean' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    df.fillna(df.mean()) (Impute)
                  </button>
                </div>

                {p6Mode === 'null_summary' ? (
                  <div className="p-4 bg-slate-50 border rounded-xl space-y-3">
                    <span className="text-xs font-bold text-slate-800">Missing Values Audit (df.isnull().sum())</span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="bg-white p-3 border rounded-lg text-center">
                        <span className="text-xs text-slate-500 block">Name</span>
                        <span className="text-xl font-bold text-emerald-600 font-mono">0</span>
                        <span className="text-[10px] text-slate-400 block">No Missing</span>
                      </div>
                      <div className="bg-white p-3 border rounded-lg text-center border-amber-300 bg-amber-50/20">
                        <span className="text-xs text-slate-700 block font-semibold">Age</span>
                        <span className="text-xl font-bold text-amber-600 font-mono">2</span>
                        <span className="text-[10px] text-amber-600 block">Esha, Harsh</span>
                      </div>
                      <div className="bg-white p-3 border rounded-lg text-center border-amber-300 bg-amber-50/20">
                        <span className="text-xs text-slate-700 block font-semibold">City</span>
                        <span className="text-xl font-bold text-amber-600 font-mono">1</span>
                        <span className="text-[10px] text-amber-600 block">Jayant</span>
                      </div>
                      <div className="bg-white p-3 border rounded-lg text-center border-amber-300 bg-amber-50/20">
                        <span className="text-xs text-slate-700 block font-semibold">Salary</span>
                        <span className="text-xl font-bold text-amber-600 font-mono">1</span>
                        <span className="text-[10px] text-amber-600 block">Deepak</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="overflow-x-auto bg-white border border-slate-200 rounded-lg">
                    <table className="w-full text-xs font-mono">
                      <thead className="bg-slate-100 text-slate-700 border-b">
                        <tr>
                          <th className="px-4 py-2 text-left">Index</th>
                          <th className="px-4 py-2 text-left">Name</th>
                          <th className="px-4 py-2 text-left">Age</th>
                          <th className="px-4 py-2 text-left">City</th>
                          <th className="px-4 py-2 text-left">Salary</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {empData
                          .filter(r => p6Mode !== 'dropna' || (r.Age !== null && r.City !== null && r.Salary !== null))
                          .map((r, i) => {
                            const ageVal = p6Mode === 'fillna_mean' && r.Age === null ? '36.625' : (r.Age ?? 'NaN');
                            const cityVal = r.City ?? 'NaN';
                            const salVal = p6Mode === 'fillna_mean' && r.Salary === null ? '63111.11' : (r.Salary ? r.Salary.toLocaleString() : 'NaN');

                            return (
                              <tr key={i} className="hover:bg-slate-50">
                                <td className="px-4 py-1.5 text-slate-400">{i}</td>
                                <td className="px-4 py-1.5 font-semibold text-slate-900">{r.Name}</td>
                                <td className={`px-4 py-1.5 ${r.Age === null ? (p6Mode === 'fillna_mean' ? 'text-emerald-700 font-bold bg-emerald-50/50' : 'text-rose-600 font-bold bg-rose-50/40') : 'text-slate-700'}`}>
                                  {ageVal}
                                </td>
                                <td className={`px-4 py-1.5 ${r.City === null ? 'text-rose-600 font-bold bg-rose-50/40' : 'text-slate-600'}`}>
                                  {cityVal}
                                </td>
                                <td className={`px-4 py-1.5 ${r.Salary === null ? (p6Mode === 'fillna_mean' ? 'text-emerald-700 font-bold bg-emerald-50/50' : 'text-rose-600 font-bold bg-rose-50/40') : 'text-slate-700'}`}>
                                  {salVal}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                )}

                {p6Mode === 'fillna_mean' && (
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 flex items-start gap-2">
                    <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Imputation Note:</strong> Age was filled with mean <strong>36.625</strong> and Salary with mean <strong>63,111.11</strong>. Jayant's City remains <code>NaN</code> because text columns have no mathematical mean.
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* PROGRAM 7: DATA TRANSFORMATION (City.csv) */}
            {program.simulationType === 'pandas-transformation' && (
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs">
                  <button
                    onClick={() => setP7ActiveTransform('all')}
                    className={`px-3 py-1 rounded font-medium ${p7ActiveTransform === 'all' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    All Transformations
                  </button>
                  <button
                    onClick={() => setP7ActiveTransform('apply_age')}
                    className={`px-3 py-1 rounded font-medium ${p7ActiveTransform === 'apply_age' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    apply(x*2 if x&lt;30 else x)
                  </button>
                  <button
                    onClick={() => setP7ActiveTransform('map_city')}
                    className={`px-3 py-1 rounded font-medium ${p7ActiveTransform === 'map_city' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    map(city_abbr)
                  </button>
                  <button
                    onClick={() => setP7ActiveTransform('str_upper')}
                    className={`px-3 py-1 rounded font-medium ${p7ActiveTransform === 'str_upper' ? 'bg-white text-blue-700 shadow-2xs font-bold' : 'text-slate-600'}`}
                  >
                    .str.upper()
                  </button>
                </div>

                <div className="overflow-x-auto bg-white border border-slate-200 rounded-lg">
                  <table className="w-full text-xs font-mono">
                    <thead className="bg-slate-100 text-slate-700 border-b">
                      <tr>
                        <th className="px-3 py-2 text-left">Index</th>
                        <th className="px-3 py-2 text-left">Name</th>
                        <th className="px-3 py-2 text-left">Age</th>
                        {(p7ActiveTransform === 'all' || p7ActiveTransform === 'apply_age') && (
                          <th className="px-3 py-2 text-left text-blue-700 font-bold">Age Transformed</th>
                        )}
                        <th className="px-3 py-2 text-left">City</th>
                        {(p7ActiveTransform === 'all' || p7ActiveTransform === 'map_city') && (
                          <th className="px-3 py-2 text-left text-indigo-700 font-bold">City Abbr</th>
                        )}
                        {(p7ActiveTransform === 'all' || p7ActiveTransform === 'str_upper') && (
                          <th className="px-3 py-2 text-left text-emerald-700 font-bold">City Uppercase</th>
                        )}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {cityData.slice(0, 5).map((r, i) => {
                        const transformedAge = r.Age < 30 ? r.Age * 2 : r.Age;
                        const abbr = cityAbbrMap[r.City] || '—';
                        const upper = r.City.toUpperCase();

                        return (
                          <tr key={i} className="hover:bg-slate-50">
                            <td className="px-3 py-1.5 text-slate-400">{i}</td>
                            <td className="px-3 py-1.5 font-semibold text-slate-900">{r.Name}</td>
                            <td className="px-3 py-1.5 text-slate-600">{r.Age}</td>
                            {(p7ActiveTransform === 'all' || p7ActiveTransform === 'apply_age') && (
                              <td className={`px-3 py-1.5 font-bold ${r.Age < 30 ? 'text-blue-700 bg-blue-50/50' : 'text-slate-700'}`}>
                                {transformedAge} {r.Age < 30 && <span className="text-[10px] text-blue-500 font-normal">(*2)</span>}
                              </td>
                            )}
                            <td className="px-3 py-1.5 text-slate-600">{r.City}</td>
                            {(p7ActiveTransform === 'all' || p7ActiveTransform === 'map_city') && (
                              <td className="px-3 py-1.5 font-bold text-indigo-700">{abbr}</td>
                            )}
                            {(p7ActiveTransform === 'all' || p7ActiveTransform === 'str_upper') && (
                              <td className="px-3 py-1.5 font-bold text-emerald-700">{upper}</td>
                            )}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* PROGRAM 8: MATPLOTLIB SALES (LINE & BAR) */}
            {program.simulationType === 'matplotlib-plots' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">Chart Mode</span>
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs">
                    <button
                      onClick={() => setP8PlotType('both')}
                      className={`px-2.5 py-1 rounded font-medium ${p8PlotType === 'both' ? 'bg-white text-blue-700 font-bold shadow-2xs' : 'text-slate-600'}`}
                    >
                      Combined (Bar + Line)
                    </button>
                    <button
                      onClick={() => setP8PlotType('bar_only')}
                      className={`px-2.5 py-1 rounded font-medium ${p8PlotType === 'bar_only' ? 'bg-white text-blue-700 font-bold shadow-2xs' : 'text-slate-600'}`}
                    >
                      Bar Only
                    </button>
                    <button
                      onClick={() => setP8PlotType('line_only')}
                      className={`px-2.5 py-1 rounded font-medium ${p8PlotType === 'line_only' ? 'bg-white text-blue-700 font-bold shadow-2xs' : 'text-slate-600'}`}
                    >
                      Line Only
                    </button>
                  </div>
                </div>

                {/* SVG Visualizer */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center">
                  <div className="text-sm font-bold text-slate-900 mb-2">Sales Over Months</div>
                  <svg viewBox="0 0 500 250" className="w-full max-w-lg h-auto overflow-visible">
                    {/* Grid lines */}
                    {[0, 5, 10, 15, 20].map(val => {
                      const y = 200 - (val / 20) * 160;
                      return (
                        <g key={val}>
                          <line x1="50" y1={y} x2="460" y2={y} stroke="#e2e8f0" strokeDasharray="3 3" />
                          <text x="40" y={y + 4} textAnchor="end" className="text-[10px] fill-slate-400 font-mono">{val}</text>
                        </g>
                      );
                    })}

                    {/* Bars */}
                    {(p8PlotType === 'both' || p8PlotType === 'bar_only') && ['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((m, idx) => {
                      const salesVal = p8Sales[idx];
                      const height = (salesVal / 20) * 160;
                      const x = 70 + idx * 80;
                      const y = 200 - height;
                      return (
                        <rect
                          key={m}
                          x={x}
                          y={y}
                          width="40"
                          height={height}
                          fill="#38bdf8"
                          fillOpacity="0.7"
                          rx="2"
                        />
                      );
                    })}

                    {/* Line Plot */}
                    {(p8PlotType === 'both' || p8PlotType === 'line_only') && (
                      <>
                        <polyline
                          fill="none"
                          stroke="#2563eb"
                          strokeWidth="2.5"
                          points={['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((_, idx) => {
                            const x = 90 + idx * 80;
                            const y = 200 - (p8Sales[idx] / 20) * 160;
                            return `${x},${y}`;
                          }).join(' ')}
                        />
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((_, idx) => {
                          const x = 90 + idx * 80;
                          const y = 200 - (p8Sales[idx] / 20) * 160;
                          return (
                            <circle
                              key={idx}
                              cx={x}
                              cy={y}
                              r="5"
                              fill="#2563eb"
                              stroke="#ffffff"
                              strokeWidth="1.5"
                            />
                          );
                        })}
                      </>
                    )}

                    {/* X Axis */}
                    <line x1="50" y1="200" x2="460" y2="200" stroke="#94a3b8" />
                    {['Jan', 'Feb', 'Mar', 'Apr', 'May'].map((m, idx) => (
                      <text key={m} x={90 + idx * 80} y="218" textAnchor="middle" className="text-[11px] fill-slate-600 font-mono">
                        {m}
                      </text>
                    ))}

                    {/* Axis Labels */}
                    <text x="255" y="240" textAnchor="middle" className="text-xs fill-slate-700 font-medium">Month</text>
                    <text x="18" y="120" textAnchor="middle" transform="rotate(-90 18 120)" className="text-xs fill-slate-700 font-medium">Sales</text>

                    {/* Legend */}
                    <g transform="translate(60, 20)">
                      <rect width="130" height="42" fill="#ffffff" stroke="#cbd5e1" rx="4" opacity="0.9" />
                      <line x1="10" y1="16" x2="30" y2="16" stroke="#2563eb" strokeWidth="2" />
                      <circle cx="20" cy="16" r="3" fill="#2563eb" />
                      <text x="38" y="20" className="text-[10px] fill-slate-700 font-sans">Sales (Line)</text>
                      <rect x="10" y="26" width="20" height="10" fill="#38bdf8" fillOpacity="0.7" />
                      <text x="38" y="35" className="text-[10px] fill-slate-700 font-sans">Sales (Bar)</text>
                    </g>
                  </svg>
                </div>
              </div>
            )}

            {/* PROGRAM 9: HISTOGRAM & BOX PLOT */}
            {program.simulationType === 'histogram-boxplot' && (
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Left: Histogram */}
                    <div className="space-y-2 text-center">
                      <span className="text-xs font-bold text-slate-800">1. Histogram (bins=15)</span>
                      <svg viewBox="0 0 240 180" className="w-full max-w-xs mx-auto overflow-visible bg-white p-2 border rounded-lg">
                        {/* 15 bins approximating normal distribution */}
                        {[2, 4, 8, 15, 22, 28, 33, 26, 18, 11, 6, 4, 2, 1, 1].map((h, i) => {
                          const x = 30 + i * 12;
                          const height = (h / 35) * 120;
                          const y = 140 - height;
                          return (
                            <rect
                              key={i}
                              x={x}
                              y={y}
                              width="11"
                              height={height}
                              fill="#7dd3fc"
                              stroke="#000000"
                              strokeWidth="0.8"
                            />
                          );
                        })}
                        <line x1="25" y1="140" x2="220" y2="140" stroke="#64748b" />
                        <line x1="25" y1="20" x2="25" y2="140" stroke="#64748b" />
                        <text x="125" y="160" textAnchor="middle" className="text-[9px] fill-slate-600 font-mono">30 &nbsp; 40 &nbsp; 50 &nbsp; 60 &nbsp; 70</text>
                      </svg>
                      <span className="text-[10px] text-slate-500 block">Bell curve centered around mean 50</span>
                    </div>

                    {/* Right: Box Plot */}
                    <div className="space-y-2 text-center">
                      <span className="text-xs font-bold text-slate-800">2. Box Plot (vert=True)</span>
                      <svg viewBox="0 0 240 180" className="w-full max-w-xs mx-auto overflow-visible bg-white p-2 border rounded-lg">
                        <line x1="40" y1="140" x2="200" y2="140" stroke="#e2e8f0" strokeDasharray="2 2" />
                        <line x1="40" y1="100" x2="200" y2="100" stroke="#e2e8f0" strokeDasharray="2 2" />
                        <line x1="40" y1="60" x2="200" y2="60" stroke="#e2e8f0" strokeDasharray="2 2" />
                        <line x1="40" y1="20" x2="200" y2="20" stroke="#e2e8f0" strokeDasharray="2 2" />

                        {/* Whisker line */}
                        <line x1="120" y1="35" x2="120" y2="145" stroke="#334155" strokeWidth="1.5" />
                        {/* Upper whisker cap */}
                        <line x1="105" y1="35" x2="135" y2="35" stroke="#334155" strokeWidth="1.5" />
                        {/* Lower whisker cap */}
                        <line x1="105" y1="145" x2="135" y2="145" stroke="#334155" strokeWidth="1.5" />

                        {/* Box (Q1 to Q3) */}
                        <rect x="95" y="65" width="50" height="55" fill="#3b82f6" stroke="#1e3a8a" strokeWidth="1.5" />
                        {/* Median line */}
                        <line x1="95" y1="90" x2="145" y2="90" stroke="#dc2626" strokeWidth="2" />

                        {/* Outliers */}
                        <circle cx="120" cy="22" r="2.5" fill="none" stroke="#334155" strokeWidth="1.2" />
                        <circle cx="120" cy="15" r="2.5" fill="none" stroke="#334155" strokeWidth="1.2" />

                        {/* Y axis numbers */}
                        <text x="35" y="145" textAnchor="end" className="text-[9px] fill-slate-400 font-mono">30</text>
                        <text x="35" y="105" textAnchor="end" className="text-[9px] fill-slate-400 font-mono">45</text>
                        <text x="35" y="90" textAnchor="end" className="text-[9px] fill-red-600 font-bold font-mono">50 (M)</text>
                        <text x="35" y="65" textAnchor="end" className="text-[9px] fill-slate-400 font-mono">60</text>
                        <text x="35" y="25" textAnchor="end" className="text-[9px] fill-slate-400 font-mono">75</text>
                      </svg>
                      <span className="text-[10px] text-slate-500 block">Q1 (~43), Median (~50, red), Q3 (~57), IQR ≈ 14</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PROGRAM 10: SCATTER & DENSITY */}
            {program.simulationType === 'density-scatterplot' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">Select Visualization</span>
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg text-xs">
                    <button
                      onClick={() => setP10ActivePlot('scatter')}
                      className={`px-3 py-1 rounded font-medium ${p10ActivePlot === 'scatter' ? 'bg-white text-blue-700 font-bold shadow-2xs' : 'text-slate-600'}`}
                    >
                      1. Simple Scatter Plot
                    </button>
                    <button
                      onClick={() => setP10ActivePlot('density')}
                      className={`px-3 py-1 rounded font-medium ${p10ActivePlot === 'density' ? 'bg-white text-blue-700 font-bold shadow-2xs' : 'text-slate-600'}`}
                    >
                      2. Seaborn Density Plot (KDE)
                    </button>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col items-center">
                  {p10ActivePlot === 'scatter' ? (
                    <div className="space-y-2 text-center w-full max-w-md">
                      <div className="text-sm font-bold text-slate-900">Simple Scatter Plot (y = 0.5*x + noise)</div>
                      <svg viewBox="0 0 300 200" className="w-full h-auto bg-white p-3 border rounded-lg overflow-visible">
                        {/* Grid */}
                        {[0, 2, 4, 6].map(v => (
                          <g key={v}>
                            <line x1="30" y1={170 - v * 24} x2="280" y2={170 - v * 24} stroke="#f1f5f9" />
                            <text x="24" y={174 - v * 24} textAnchor="end" className="text-[9px] fill-slate-400 font-mono">{v}</text>
                          </g>
                        ))}
                        {/* 100 scatter points following upward trend */}
                        {Array.from({ length: 60 }).map((_, i) => {
                          const xVal = 1 + (i / 60) * 8 + (Math.sin(i * 12) * 0.4);
                          const yVal = 0.5 * xVal + 0.3 + (Math.cos(i * 7) * 0.7);
                          const cx = 30 + (xVal / 10) * 250;
                          const cy = 170 - (yVal / 6) * 144;
                          return (
                            <circle
                              key={i}
                              cx={cx}
                              cy={cy}
                              r="3.5"
                              fill="#4169e1"
                              fillOpacity="0.65"
                            />
                          );
                        })}
                        {/* Axis */}
                        <line x1="30" y1="170" x2="280" y2="170" stroke="#94a3b8" />
                        <line x1="30" y1="20" x2="30" y2="170" stroke="#94a3b8" />
                        <text x="155" y="190" textAnchor="middle" className="text-[10px] fill-slate-600 font-medium">X Value</text>
                        <text x="12" y="95" textAnchor="middle" transform="rotate(-90 12 95)" className="text-[10px] fill-slate-600 font-medium">Y Value</text>
                      </svg>
                      <span className="text-[10px] text-slate-500 block">Clear positive upward linear correlation between X and Y</span>
                    </div>
                  ) : (
                    <div className="space-y-2 text-center w-full max-w-md">
                      <div className="text-sm font-bold text-slate-900">Density Plot (sns.kdeplot, fill=True)</div>
                      <svg viewBox="0 0 300 200" className="w-full h-auto bg-white p-3 border rounded-lg overflow-visible">
                        {/* Grid */}
                        {[0, 0.01, 0.02, 0.03, 0.04].map(v => (
                          <g key={v}>
                            <line x1="40" y1={170 - (v / 0.045) * 140} x2="280" y2={170 - (v / 0.045) * 140} stroke="#f1f5f9" />
                            <text x="34" y={174 - (v / 0.045) * 140} textAnchor="end" className="text-[8px] fill-slate-400 font-mono">{v.toFixed(3)}</text>
                          </g>
                        ))}
                        {/* Shaded smooth density curve */}
                        <path
                          d="M 45 170 Q 110 168 130 110 Q 155 35 165 35 Q 175 35 200 110 Q 220 168 280 170 Z"
                          fill="#14b8a6"
                          fillOpacity="0.5"
                        />
                        <path
                          d="M 45 170 Q 110 168 130 110 Q 155 35 165 35 Q 175 35 200 110 Q 220 168 280 170"
                          fill="none"
                          stroke="#0f766e"
                          strokeWidth="2"
                        />
                        <line x1="40" y1="170" x2="280" y2="170" stroke="#94a3b8" />
                        <line x1="40" y1="20" x2="40" y2="170" stroke="#94a3b8" />
                        <text x="160" y="188" textAnchor="middle" className="text-[9px] fill-slate-600 font-mono">20 &nbsp; 30 &nbsp; 40 &nbsp; 50 &nbsp; 60 &nbsp; 70 &nbsp; 80 &nbsp; 90</text>
                        <text x="14" y="95" textAnchor="middle" transform="rotate(-90 14 95)" className="text-[10px] fill-slate-600 font-medium">Density</text>
                      </svg>
                      <span className="text-[10px] text-slate-500 block">Kernel density estimation curve peaking at mean 50</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: DATASET EXPLORER (for Programs 5, 6, 7)             */}
        {/* ========================================================= */}
        {activeTab === 'dataset' && program.dataset && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900">{program.dataset.fileName}</h4>
                <p className="text-xs text-slate-500">{program.dataset.description}</p>
              </div>
              <button
                onClick={() => {
                  const blob = new Blob([program.dataset!.csvContent], { type: 'text/csv' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = program.dataset!.fileName;
                  a.click();
                  URL.revokeObjectURL(url);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CSV</span>
              </button>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-xs font-mono">
                <thead className="bg-slate-100 text-slate-700 border-b">
                  <tr>
                    <th className="px-4 py-2.5 text-left text-slate-400">#</th>
                    {program.dataset.columns.map(col => (
                      <th key={col} className="px-4 py-2.5 text-left font-bold">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {program.dataset.rows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="px-4 py-2 text-slate-400">{idx + 1}</td>
                      {program.dataset!.columns.map(col => (
                        <td key={col} className="px-4 py-2 text-slate-800">
                          {row[col] !== null && row[col] !== undefined ? (
                            String(row[col])
                          ) : (
                            <span className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-700 text-[10px] font-bold">
                              NaN
                            </span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: VERBATIM RAW PDF OUTPUT                            */}
        {/* ========================================================= */}
        {activeTab === 'raw_output' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-slate-800">Verbatim Terminal Output from PDF</span>
              <span className="font-mono text-[11px]">Source: Foundation of Data Science Lab Manual</span>
            </div>
            <pre className="p-4 bg-slate-900 text-emerald-400 font-mono text-xs rounded-xl overflow-x-auto leading-relaxed border border-slate-800 shadow-inner">
              {program.sampleOutputText || 'Output matches standard library output.'}
            </pre>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: RUN LOCALLY GUIDE                                  */}
        {/* ========================================================= */}
        {activeTab === 'run_guide' && program.runLocallyGuide && (
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                <Terminal className="w-4 h-4 text-blue-600" />
                <span>Local Python Execution Steps</span>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-xs text-slate-600 leading-relaxed">
                {program.runLocallyGuide.pythonSteps?.map((step, idx) => (
                  <li key={idx} className="pl-1">
                    {step}
                  </li>
                ))}
              </ol>

              {program.runLocallyGuide.pipInstall && (
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-1">Required Package Installation:</span>
                  <div className="p-2.5 bg-slate-900 text-blue-400 font-mono text-xs rounded-lg flex items-center justify-between">
                    <span>{program.runLocallyGuide.pipInstall}</span>
                  </div>
                </div>
              )}

              {program.runLocallyGuide.notes && (
                <div className="mt-2 text-xs text-amber-800 bg-amber-50 p-2.5 rounded-lg border border-amber-200">
                  <strong>Important Note:</strong> {program.runLocallyGuide.notes}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
