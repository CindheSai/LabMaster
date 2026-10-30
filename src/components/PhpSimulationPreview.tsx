import React, { useState } from 'react';
import { 
  Play, 
  RotateCw, 
  Server, 
  FileText, 
  Database, 
  HardDrive, 
  Cookie as CookieIcon, 
  Clock, 
  Upload, 
  CheckCircle, 
  Info, 
  Terminal, 
  AlertCircle,
  ExternalLink,
  Trash2,
  Plus,
  RefreshCw,
  Layers,
  ArrowRight
} from 'lucide-react';
import { ProgramData } from '../types';

interface PhpSimulationPreviewProps {
  program: ProgramData;
}

export const PhpSimulationPreview: React.FC<PhpSimulationPreviewProps> = ({ program }) => {
  const [activeTab, setActiveTab] = useState<'interactive' | 'sample-output' | 'xampp-guide'>('interactive');

  // Simulation states
  // P1 Fibonacci
  const [fibCount, setFibCount] = useState<number>(8);
  
  // P2 Swap
  const [swapA, setSwapA] = useState<number>(10);
  const [swapB, setSwapB] = useState<number>(20);

  // P3 Array Playground
  const [arrayItems, setArrayItems] = useState<string[]>(['Apple', 'Banana', 'Cherry']);
  const [arrayInput, setArrayInput] = useState<string>('Date');
  const [arrayLog, setArrayLog] = useState<string[]>(['Original array: Apple, Banana, Cherry']);

  // P4 Vowels & Consonants
  const [inputText, setInputText] = useState<string>('The future belongs to those who prepare for its today!');

  // P5 Employee Form
  const [empName, setEmpName] = useState<string>('Sai Mukesh');
  const [empId, setEmpId] = useState<string>('EMP101');
  const [empDept, setEmpDept] = useState<string>('Computer Science');
  const [empEmail, setEmpEmail] = useState<string>('sai@example.com');
  const [empSubmitted, setEmpSubmitted] = useState<boolean>(true);

  // P6 Student Registration
  const [regName, setRegName] = useState<string>('Sai Mukesh');
  const [regDob, setRegDob] = useState<string>('2005-06-15');
  const [regEmail, setRegEmail] = useState<string>('sai@example.com');
  const [regGender, setRegGender] = useState<string>('Male');
  const [regCourses, setRegCourses] = useState<string[]>(['Maths', 'Science']);
  const [regDept, setRegDept] = useState<string>('Computer Science');
  const [regSubmitted, setRegSubmitted] = useState<boolean>(true);

  // P7 Upload
  const [uploadedFileName, setUploadedFileName] = useState<string>('photo.jpg');
  const [uploadSize, setUploadSize] = useState<number>(24576);
  const [uploadStatus, setUploadStatus] = useState<string | null>('The file photo.jpg has been uploaded.');

  // P8 Cookies
  const [cookieValue, setCookieValue] = useState<string>('Sai');
  const [cookieStep, setCookieStep] = useState<number>(2);

  // P9 Sessions
  const [sessionCount, setSessionCount] = useState<number>(3);
  const [sessionStarted, setSessionStarted] = useState<boolean>(true);

  // P10 MySQL
  const [studentDb, setStudentDb] = useState<{ id: number; name: string; marks: number }[]>([
    { id: 1, name: 'Ravi', marks: 85 },
    { id: 2, name: 'Priya', marks: 92 },
    { id: 3, name: 'Anand', marks: 78 }
  ]);
  const [newStudentName, setNewStudentName] = useState<string>('Sai');
  const [newStudentMarks, setNewStudentMarks] = useState<number>(88);
  const [dbLog, setDbLog] = useState<string[]>([
    'Database connected successfully',
    'INSERT INTO students (name, marks) VALUES (\'Ravi\', 85) -> Success'
  ]);

  // Fibonacci Generator
  const computeFibonacci = (n: number) => {
    let a = 0;
    let b = 1;
    const series = [0, 1];
    for (let i = 1; i <= n; i++) {
      const c = a + b;
      series.push(c);
      a = b;
      b = c;
    }
    return series;
  };

  // Vowel & Consonant counter
  const analyzeString = (str: string) => {
    let v = 0;
    let c = 0;
    let s = 0;
    const lower = str.toLowerCase();
    for (let i = 0; i < lower.length; i++) {
      const ch = lower[i];
      if ('aeiou'.includes(ch)) {
        v++;
      } else if (ch === ' ') {
        s++;
      } else if (/[a-z]/.test(ch)) {
        c++;
      }
    }
    return { vowels: v, consonants: c, spaces: s, total: str.length };
  };

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs flex flex-col min-h-[460px]">
      {/* Top Preview Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200 gap-2">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
          </div>
          <span className="text-xs font-semibold text-slate-700 pl-2">PHP Output Environment</span>
          <span className="text-[11px] font-mono text-blue-700 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
            Server-Side Language
          </span>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1 p-0.5 bg-slate-200/70 rounded-lg text-xs">
          <button
            onClick={() => setActiveTab('interactive')}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              activeTab === 'interactive' 
                ? 'bg-white text-blue-700 shadow-2xs font-semibold' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Interactive Concept Simulation
          </button>
          <button
            onClick={() => setActiveTab('sample-output')}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              activeTab === 'sample-output' 
                ? 'bg-white text-slate-900 shadow-2xs font-semibold' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Raw PDF Output
          </button>
          <button
            onClick={() => setActiveTab('xampp-guide')}
            className={`px-3 py-1 rounded-md font-medium transition-all ${
              activeTab === 'xampp-guide' 
                ? 'bg-white text-emerald-700 shadow-2xs font-semibold' 
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Run on XAMPP (Local)
          </button>
        </div>
      </div>

      {/* Server Notice Banner */}
      <div className="px-4 py-2 bg-slate-50/80 border-b border-slate-200 text-xs text-slate-600 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Server className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>
            <strong>Note:</strong> PHP executes on the server (e.g. Apache/XAMPP). This panel provides a functional client simulation of the program's logic and server behavior.
          </span>
        </div>
      </div>

      {/* Tab 1: Interactive Simulation */}
      {activeTab === 'interactive' && (
        <div className="p-6 flex-1 bg-white">
          {/* P1: Fibonacci */}
          {program.simulationType === 'fibonacci' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Interactive Fibonacci Recurrence Generator</h3>
                <p className="text-xs text-slate-500">
                  Simulates the PHP loop: <code>$c = $a + $b; $a = $b; $b = $c;</code>
                </p>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <label className="text-xs font-semibold text-slate-700">Loop Iterations ($i &lt;=):</label>
                <input
                  type="range"
                  min="3"
                  max="15"
                  value={fibCount}
                  onChange={(e) => setFibCount(Number(e.target.value))}
                  className="flex-1 accent-blue-600"
                />
                <span className="font-mono text-xs font-bold px-2 py-1 bg-white border border-slate-200 rounded">
                  {fibCount} cycles ({fibCount + 2} terms)
                </span>
              </div>

              <div className="p-4 bg-slate-900 text-slate-100 rounded-lg font-mono text-xs space-y-1">
                <div className="text-slate-400 font-sans text-[11px] mb-2 font-semibold">Simulated Server HTML Output:</div>
                <div className="text-emerald-400">Fibonacci Series:</div>
                {computeFibonacci(fibCount).map((val, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="text-slate-500 text-[10px] w-6 text-right select-none font-sans">
                      {idx === 0 || idx === 1 ? 'seed' : `iter ${idx - 1}`}:
                    </span>
                    <span className="font-bold text-white">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* P2: Swap (Pass by Value vs Reference) */}
          {program.simulationType === 'swap' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Variable Memory &amp; Reference Visualizer</h3>
                <p className="text-xs text-slate-500">
                  Observe how Pass by Value modifies only local copies, while Pass by Reference mutates caller memory.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Caller Variable $x:</label>
                  <input
                    type="number"
                    value={swapA}
                    onChange={(e) => setSwapA(Number(e.target.value))}
                    className="w-full p-2 border border-slate-200 rounded bg-white font-mono"
                  />
                </div>
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">Caller Variable $y:</label>
                  <input
                    type="number"
                    value={swapB}
                    onChange={(e) => setSwapB(Number(e.target.value))}
                    className="w-full p-2 border border-slate-200 rounded bg-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Value Box */}
                <div className="p-4 rounded-lg border border-slate-200 bg-white space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">(a) Pass by Value</span>
                    <span className="text-[10px] font-mono text-slate-500">function($a, $b)</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded text-xs space-y-1 font-mono text-slate-700 leading-relaxed">
                    <div>Before: x={swapA}, y={swapB}</div>
                    <div className="text-blue-600 font-semibold">Inside: a={swapB}, b={swapA}</div>
                    <div className="text-slate-900 font-bold">After: x={swapA}, y={swapB}</div>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    Values of $x and $y remain unchanged outside because only isolated copies were swapped inside function scope.
                  </p>
                </div>

                {/* Reference Box */}
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-blue-900">(b) Pass by Reference</span>
                    <span className="text-[10px] font-mono text-blue-600">function(&amp;$a, &amp;$b)</span>
                  </div>
                  <div className="p-3 bg-white rounded border border-blue-200 text-xs space-y-1 font-mono text-slate-700 leading-relaxed">
                    <div>Before: x={swapA}, y={swapB}</div>
                    <div className="text-emerald-600 font-bold">After: x={swapB}, y={swapA}</div>
                  </div>
                  <p className="text-[11px] text-blue-800">
                    Values swapped in place because the ampersand (&amp;) passed the actual memory pointers to the function.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* P3: Array Playground */}
          {program.simulationType === 'array-funcs' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Interactive Array Mutation Sandbox</h3>
                <p className="text-xs text-slate-500">
                  Test the exact built-in PHP array functions demonstrated in Program 3.
                </p>
              </div>

              {/* Current Array View */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Current Array Elements:</span>
                  <span className="font-mono text-blue-700 font-bold">{arrayItems.length} items (count)</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {arrayItems.map((item, idx) => (
                    <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200 rounded-md text-xs font-mono font-medium shadow-2xs">
                      <span className="text-slate-400 text-[10px]">[{idx}]</span>
                      <span>{item}</span>
                    </span>
                  ))}
                  {arrayItems.length === 0 && (
                    <span className="text-xs text-slate-400 italic">Array is empty.</span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  onClick={() => {
                    const next = [...arrayItems, 'Date'];
                    setArrayItems(next);
                    setArrayLog(prev => [`array_push($fruits, "Date") -> count: ${next.length}`, ...prev]);
                  }}
                  className="px-3 py-2 text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-700 transition-colors shadow-2xs"
                >
                  array_push()
                </button>

                <button
                  onClick={() => {
                    if (arrayItems.length === 0) return;
                    const popped = arrayItems[arrayItems.length - 1];
                    const next = arrayItems.slice(0, -1);
                    setArrayItems(next);
                    setArrayLog(prev => [`array_pop($fruits) removed "${popped}"`, ...prev]);
                  }}
                  className="px-3 py-2 text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-700 transition-colors shadow-2xs"
                >
                  array_pop()
                </button>

                <button
                  onClick={() => {
                    if (arrayItems.length === 0) return;
                    const shifted = arrayItems[0];
                    const next = arrayItems.slice(1);
                    setArrayItems(next);
                    setArrayLog(prev => [`array_shift($fruits) removed "${shifted}"`, ...prev]);
                  }}
                  className="px-3 py-2 text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-700 transition-colors shadow-2xs"
                >
                  array_shift()
                </button>

                <button
                  onClick={() => {
                    const next = ['Apricot', ...arrayItems];
                    setArrayItems(next);
                    setArrayLog(prev => [`array_unshift($fruits, "Apricot")`, ...prev]);
                  }}
                  className="px-3 py-2 text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-700 transition-colors shadow-2xs"
                >
                  array_unshift()
                </button>

                <button
                  onClick={() => {
                    const next = [...arrayItems, 'Carrot', 'Beetroot'];
                    setArrayItems(next);
                    setArrayLog(prev => [`array_merge($fruits, ["Carrot", "Beetroot"])`, ...prev]);
                  }}
                  className="px-3 py-2 text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-700 transition-colors shadow-2xs"
                >
                  array_merge()
                </button>

                <button
                  onClick={() => {
                    const next = [...arrayItems].reverse();
                    setArrayItems(next);
                    setArrayLog(prev => [`array_reverse($fruits)`, ...prev]);
                  }}
                  className="px-3 py-2 text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 rounded-lg text-slate-700 transition-colors shadow-2xs"
                >
                  array_reverse()
                </button>

                <button
                  onClick={() => {
                    setArrayItems(['Apple', 'Banana', 'Cherry']);
                    setArrayLog(['Reset to original: Apple, Banana, Cherry']);
                  }}
                  className="col-span-2 px-3 py-2 text-xs font-semibold bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-lg text-blue-700 transition-colors"
                >
                  Reset to Original 3 Items
                </button>
              </div>

              {/* Execution Log */}
              <div className="p-3 bg-slate-900 text-slate-100 rounded-lg font-mono text-[11px] max-h-36 overflow-y-auto space-y-1">
                <div className="text-slate-400 font-sans text-[10px] uppercase font-bold">Operation Log:</div>
                {arrayLog.map((log, idx) => (
                  <div key={idx} className="text-emerald-400">&gt; {log}</div>
                ))}
              </div>
            </div>
          )}

          {/* P4: Vowels & Consonants */}
          {program.simulationType === 'vowels-consonants' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Live String Character Classification</h3>
                <p className="text-xs text-slate-500">
                  Tests <code>strpos("aeiou", $ch) !== false</code> and <code>ctype_alpha($ch)</code> on any sentence.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-700">Test Input String ($str):</label>
                <textarea
                  rows={2}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full p-3 border border-slate-200 rounded-lg font-mono text-xs focus:outline-none focus:border-blue-500"
                />
              </div>

              {(() => {
                const res = analyzeString(inputText);
                return (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                      <span className="text-[11px] font-semibold text-blue-900 block">Vowels (aeiou)</span>
                      <span className="text-2xl font-bold font-mono text-blue-700">{res.vowels}</span>
                    </div>

                    <div className="p-3 rounded-lg bg-indigo-50 border border-indigo-200">
                      <span className="text-[11px] font-semibold text-indigo-900 block">Consonants</span>
                      <span className="text-2xl font-bold font-mono text-indigo-700">{res.consonants}</span>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-100 border border-slate-200">
                      <span className="text-[11px] font-semibold text-slate-700 block">Spaces</span>
                      <span className="text-2xl font-bold font-mono text-slate-800">{res.spaces}</span>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200">
                      <span className="text-[11px] font-semibold text-emerald-900 block">Total Characters</span>
                      <span className="text-2xl font-bold font-mono text-emerald-700">{res.total}</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* P5: Employee Details Form */}
          {program.simulationType === 'employee-form' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Self-Processing Form Simulation (employee.php)</h3>
                <p className="text-xs text-slate-500">
                  Submits to itself via POST and reads values from <code>$_POST</code> with <code>htmlspecialchars()</code>.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Form Input */}
                <form 
                  onSubmit={(e) => { e.preventDefault(); setEmpSubmitted(true); }}
                  className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-3 text-xs"
                >
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Name:</label>
                    <input
                      type="text"
                      value={empName}
                      onChange={(e) => setEmpName(e.target.value)}
                      required
                      className="w-full p-2 border border-slate-200 rounded bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Employee ID:</label>
                    <input
                      type="text"
                      value={empId}
                      onChange={(e) => setEmpId(e.target.value)}
                      required
                      className="w-full p-2 border border-slate-200 rounded bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Department:</label>
                    <input
                      type="text"
                      value={empDept}
                      onChange={(e) => setEmpDept(e.target.value)}
                      required
                      className="w-full p-2 border border-slate-200 rounded bg-white"
                    />
                  </div>
                  <div>
                    <label className="font-semibold text-slate-700 block mb-1">Email:</label>
                    <input
                      type="email"
                      value={empEmail}
                      onChange={(e) => setEmpEmail(e.target.value)}
                      required
                      className="w-full p-2 border border-slate-200 rounded bg-white"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors shadow-2xs"
                  >
                    Submit Form (POST)
                  </button>
                </form>

                {/* Rendered Result Output */}
                <div className="p-4 border border-slate-200 rounded-lg bg-white space-y-3">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-blue-600" />
                    <span>PHP POST Output:</span>
                  </div>

                  {empSubmitted ? (
                    <div className="space-y-2 text-xs text-slate-800 font-mono bg-slate-50 p-3 rounded border border-slate-200">
                      <div className="font-sans font-bold text-sm text-slate-900 border-b border-slate-200 pb-1 mb-2">
                        Employee Details Entered:
                      </div>
                      <div>Name: <span className="font-bold text-blue-700">{empName}</span></div>
                      <div>Employee ID: <span className="font-bold text-blue-700">{empId}</span></div>
                      <div>Department: <span className="font-bold text-blue-700">{empDept}</span></div>
                      <div>Email: <span className="font-bold text-blue-700">{empEmail}</span></div>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-400 italic py-8 text-center">
                      Fill out the form and click Submit to trigger the PHP $_POST processing block.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* P6: Student Registration Form */}
          {program.simulationType === 'student-registration' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Two-File Form Submission (student.php &rarr; display.php)</h3>
                <p className="text-xs text-slate-500">
                  Demonstrates sending multi-type inputs including array checkboxes (<code>name="course[]"</code>) to a secondary display page.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* student.php form */}
                <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-3 text-xs">
                  <div className="font-bold text-slate-900 border-b border-slate-200 pb-1 flex items-center justify-between">
                    <span>student.php</span>
                    <span className="text-[10px] font-mono text-slate-400">Client Form</span>
                  </div>

                  <div>
                    <label className="font-medium text-slate-700 block mb-1">Name:</label>
                    <input
                      type="text"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      className="w-full p-1.5 border border-slate-200 rounded bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="font-medium text-slate-700 block mb-1">DOB:</label>
                      <input
                        type="date"
                        value={regDob}
                        onChange={(e) => setRegDob(e.target.value)}
                        className="w-full p-1.5 border border-slate-200 rounded bg-white text-[11px]"
                      />
                    </div>
                    <div>
                      <label className="font-medium text-slate-700 block mb-1">Gender:</label>
                      <div className="flex gap-2 pt-1">
                        <label className="flex items-center gap-1">
                          <input
                            type="radio"
                            name="demo_gender"
                            value="Male"
                            checked={regGender === 'Male'}
                            onChange={() => setRegGender('Male')}
                          /> Male
                        </label>
                        <label className="flex items-center gap-1">
                          <input
                            type="radio"
                            name="demo_gender"
                            value="Female"
                            checked={regGender === 'Female'}
                            onChange={() => setRegGender('Female')}
                          /> Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="font-medium text-slate-700 block mb-1">Courses (course[] checkboxes):</label>
                    <div className="flex gap-3">
                      {['Maths', 'Science', 'English'].map(c => (
                        <label key={c} className="flex items-center gap-1">
                          <input
                            type="checkbox"
                            checked={regCourses.includes(c)}
                            onChange={(e) => {
                              if (e.target.checked) setRegCourses([...regCourses, c]);
                              else setRegCourses(regCourses.filter(x => x !== c));
                            }}
                          /> {c}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="font-medium text-slate-700 block mb-1">Department:</label>
                    <select
                      value={regDept}
                      onChange={(e) => setRegDept(e.target.value)}
                      className="w-full p-1.5 border border-slate-200 rounded bg-white"
                    >
                      <option>Computer Science</option>
                      <option>Electronics</option>
                      <option>Mechanical</option>
                    </select>
                  </div>

                  <button
                    onClick={() => setRegSubmitted(true)}
                    className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors shadow-2xs"
                  >
                    Submit to display.php &rarr;
                  </button>
                </div>

                {/* display.php output */}
                <div className="p-4 border border-blue-200 rounded-lg bg-blue-50/20 space-y-3 text-xs">
                  <div className="font-bold text-blue-900 border-b border-blue-200 pb-1 flex items-center justify-between">
                    <span>display.php</span>
                    <span className="text-[10px] font-mono text-blue-600">Handler Page</span>
                  </div>

                  {regSubmitted ? (
                    <div className="font-mono text-xs space-y-1.5 leading-relaxed text-slate-800">
                      <div className="font-sans font-bold text-sm text-slate-900">Student Details Submitted</div>
                      <div>Name: {regName}</div>
                      <div>DOB: {regDob}</div>
                      <div>Email: {regEmail}</div>
                      <div>Gender: {regGender}</div>
                      <div>Department: {regDept}</div>
                      <div className="pt-1 font-semibold text-blue-900">Selected courses:</div>
                      {regCourses.length > 0 ? (
                        regCourses.map((c, i) => (
                          <div key={i} className="pl-3 text-emerald-700">&bull; {c}</div>
                        ))
                      ) : (
                        <div className="pl-3 text-slate-400 italic">None selected</div>
                      )}
                    </div>
                  ) : (
                    <div className="text-slate-400 italic py-8 text-center">
                      Click Register to dispatch the POST request to display.php.
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* P7: File Upload */}
          {program.simulationType === 'file-upload' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Multipart File Upload Simulation</h3>
                <p className="text-xs text-slate-500">
                  Inspect how <code>$_FILES["uploaded_file"]</code> is structured and how <code>move_uploaded_file()</code> executes.
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-700">Simulate Uploading File:</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={uploadedFileName}
                      onChange={(e) => setUploadedFileName(e.target.value)}
                      placeholder="e.g. photo.jpg"
                      className="flex-1 p-2 border border-slate-200 rounded bg-white font-mono text-xs"
                    />
                    <button
                      onClick={() => setUploadStatus(`The file ${uploadedFileName} has been uploaded.`)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded transition-colors shadow-2xs"
                    >
                      Upload File
                    </button>
                  </div>
                </div>

                {/* $_FILES inspection dump */}
                <div className="p-3 bg-slate-900 text-slate-100 rounded-lg font-mono text-xs space-y-1">
                  <div className="text-slate-400 font-sans text-[11px] font-semibold mb-1">Simulated $_FILES["uploaded_file"] Array:</div>
                  <div className="text-amber-300">$_FILES["uploaded_file"]["name"] = "{uploadedFileName}";</div>
                  <div className="text-slate-400">$_FILES["uploaded_file"]["type"] = "image/jpeg";</div>
                  <div className="text-slate-400">$_FILES["uploaded_file"]["tmp_name"] = "C:\\xampp\\tmp\\php7F3A.tmp";</div>
                  <div className="text-emerald-400">$_FILES["uploaded_file"]["error"] = 0 (UPLOAD_ERR_OK);</div>
                  <div className="text-slate-400">$_FILES["uploaded_file"]["size"] = {uploadSize} bytes;</div>
                </div>

                {uploadStatus && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-800 font-mono flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{uploadStatus}</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* P8: Cookies */}
          {program.simulationType === 'cookies' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">HTTP Cookie Lifecycle Demonstration</h3>
                <p className="text-xs text-slate-500">
                  Follow the 3-step lifecycle: Set-Cookie Header &rarr; Browser Storage &rarr; Subsequent Request via <code>$_COOKIE</code>.
                </p>
              </div>

              {/* Step indicator */}
              <div className="grid grid-cols-3 gap-2 text-xs font-semibold">
                <button
                  onClick={() => setCookieStep(1)}
                  className={`p-2.5 rounded-lg border text-center transition-all ${
                    cookieStep === 1 ? 'bg-blue-50 border-blue-300 text-blue-700' : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  1. setcookie.php
                </button>
                <button
                  onClick={() => setCookieStep(2)}
                  className={`p-2.5 rounded-lg border text-center transition-all ${
                    cookieStep === 2 ? 'bg-blue-50 border-blue-300 text-blue-700' : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  2. Browser Cookie Jar
                </button>
                <button
                  onClick={() => setCookieStep(3)}
                  className={`p-2.5 rounded-lg border text-center transition-all ${
                    cookieStep === 3 ? 'bg-blue-50 border-blue-300 text-blue-700' : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  3. get-cookie.php
                </button>
              </div>

              {/* Step 1 Content */}
              {cookieStep === 1 && (
                <div className="p-4 border border-slate-200 rounded-lg space-y-3 bg-slate-50/50 text-xs">
                  <div className="font-bold text-slate-900">Step 1: Setting Cookie on Server</div>
                  <div className="p-3 bg-slate-900 text-slate-100 rounded font-mono text-[11px]">
                    <div>&lt;?php</div>
                    <div>setcookie("username", "{cookieValue}", time() + 3600, "/");</div>
                    <div>?&gt;</div>
                    <div className="text-slate-400 mt-2">// Sent in HTTP Response Header:</div>
                    <div className="text-amber-400">Set-Cookie: username={cookieValue}; Max-Age=3600; Path=/</div>
                  </div>
                  <button
                    onClick={() => setCookieStep(2)}
                    className="px-3 py-1.5 bg-blue-600 text-white font-semibold rounded text-xs"
                  >
                    Next: View Browser Storage &rarr;
                  </button>
                </div>
              )}

              {/* Step 2 Content */}
              {cookieStep === 2 && (
                <div className="p-4 border border-slate-200 rounded-lg space-y-3 bg-white text-xs">
                  <div className="font-bold text-slate-900 flex items-center justify-between">
                    <span>Step 2: Client Browser Storage</span>
                    <span className="text-[11px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      1 Cookie Active
                    </span>
                  </div>
                  <div className="p-3 bg-slate-50 border border-slate-200 rounded font-mono text-xs">
                    <div>Cookie Name: <strong>username</strong></div>
                    <div>Value: <strong>{cookieValue}</strong></div>
                    <div>Expires: in 3600 seconds (1 hour)</div>
                    <div>Path: /</div>
                  </div>
                  <div className="p-2 bg-blue-50 text-blue-900 rounded text-[11px]">
                    On setcookie.php, user sees: <a href="#p8" onClick={(e) => { e.preventDefault(); setCookieStep(3); }} className="text-blue-600 underline font-bold">Click here</a>
                  </div>
                </div>
              )}

              {/* Step 3 Content */}
              {cookieStep === 3 && (
                <div className="p-4 border border-emerald-200 bg-emerald-50/30 rounded-lg space-y-3 text-xs">
                  <div className="font-bold text-emerald-900">Step 3: get-cookie.php (Subsequent Request)</div>
                  <div className="p-3 bg-slate-900 text-slate-100 rounded font-mono text-[11px]">
                    <div className="text-slate-400">// Browser automatically sent request header:</div>
                    <div className="text-amber-400">Cookie: username={cookieValue}</div>
                    <div className="text-slate-400 mt-2">// PHP reads superglobal:</div>
                    <div className="text-white">$user = $_COOKIE["username"];</div>
                  </div>
                  <div className="p-3 bg-white border border-emerald-300 rounded font-bold text-sm text-emerald-800">
                    Welcome back, {cookieValue}!
                  </div>
                </div>
              )}
            </div>
          )}

          {/* P9: Session Counter */}
          {program.simulationType === 'sessions' && (
            <div className="space-y-6 max-w-2xl">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">Session Counter Simulator</h3>
                <p className="text-xs text-slate-500">
                  Simulates reloading the page within the same server session (<code>session_start()</code>).
                </p>
              </div>

              <div className="p-4 border border-slate-200 rounded-lg bg-slate-50/50 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-xs">
                    <span className="font-semibold text-slate-700">Simulated PHPSESSID:</span>{' '}
                    <code className="bg-white px-2 py-0.5 border rounded font-mono text-blue-700">sess_9a8b7c6d5e4f</code>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSessionCount(prev => prev + 1)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded transition-colors shadow-2xs"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Reload Page (Refresh)</span>
                    </button>
                    <button
                      onClick={() => setSessionCount(1)}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs rounded transition-colors"
                    >
                      Reset Session
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-slate-900 text-slate-100 rounded-lg font-mono text-xs space-y-2">
                  <div className="text-slate-400 font-sans text-[11px] font-semibold">Rendered Browser Output for Visit #{sessionCount}:</div>
                  {sessionCount === 1 ? (
                    <div className="text-amber-400 text-sm font-bold">Session does not exist</div>
                  ) : (
                    <div className="text-emerald-400 text-sm font-bold">
                      Your session count: {sessionCount - 1}
                    </div>
                  )}
                </div>

                <div className="text-[11px] text-slate-500 space-y-1">
                  <div><strong>Visit 1:</strong> Session counter is initialized to 1; displays "Session does not exist".</div>
                  <div><strong>Visit 2:</strong> Existing count (1) is echoed; counter increments to 2 for next load.</div>
                  <div><strong>Visit 3+:</strong> Counter continues to increment with each reload.</div>
                </div>
              </div>
            </div>
          )}

          {/* P10: MySQL Database CRUD Operations */}
          {program.simulationType === 'mysql-crud' && (
            <div className="space-y-6 max-w-3xl">
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">MySQL Database Operations Simulator</h3>
                <p className="text-xs text-slate-500">
                  Simulates <code>mysqli_connect</code>, <code>INSERT</code>, <code>SELECT</code>, and <code>DELETE</code> operations on the <code>students</code> table.
                </p>
              </div>

              {/* Architecture Diagram */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                <div className="font-semibold text-slate-700 mb-2">PHP &amp; MySQL Request Lifecycle:</div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
                  <span className="px-2.5 py-1 bg-white border rounded shadow-2xs font-sans font-semibold">1. Browser Client</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                  <span className="px-2.5 py-1 bg-blue-50 border border-blue-200 text-blue-800 rounded font-sans font-semibold">2. PHP Script (students.php)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                  <span className="px-2.5 py-1 bg-indigo-50 border border-indigo-200 text-indigo-800 rounded font-sans font-semibold">3. MySQL Server (college DB)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                  <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded font-sans font-semibold">4. HTML Response</span>
                </div>
              </div>

              {/* Simulated Database Records Table */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-bold text-slate-800">MySQL Table: students (Database: college)</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">{studentDb.length} rows returned</span>
                </div>

                <table className="w-full text-xs text-left">
                  <thead className="bg-slate-100 text-slate-600 border-b border-slate-200">
                    <tr>
                      <th className="py-2 px-4 font-semibold">id (INT PK)</th>
                      <th className="py-2 px-4 font-semibold">name (VARCHAR)</th>
                      <th className="py-2 px-4 font-semibold">marks (INT)</th>
                      <th className="py-2 px-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {studentDb.map(row => (
                      <tr key={row.id} className="hover:bg-slate-50">
                        <td className="py-2 px-4 font-mono font-bold text-slate-700">{row.id}</td>
                        <td className="py-2 px-4 font-medium text-slate-900">{row.name}</td>
                        <td className="py-2 px-4 font-mono text-blue-700">{row.marks}</td>
                        <td className="py-2 px-4 text-right">
                          <button
                            onClick={() => {
                              setStudentDb(studentDb.filter(s => s.id !== row.id));
                              setDbLog(prev => [`DELETE FROM students WHERE id = ${row.id} -> Success`, ...prev]);
                            }}
                            className="p-1 text-rose-600 hover:text-rose-800 hover:bg-rose-50 rounded transition-colors"
                            title="Delete this record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {studentDb.length === 0 && (
                      <tr>
                        <td colSpan={4} className="py-4 text-center text-slate-400 italic">
                          No records in table. Insert a student below.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Add Record Form */}
              <div className="flex items-center gap-2 p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs">
                <input
                  type="text"
                  placeholder="Student Name"
                  value={newStudentName}
                  onChange={(e) => setNewStudentName(e.target.value)}
                  className="p-1.5 border border-slate-200 rounded bg-white flex-1"
                />
                <input
                  type="number"
                  placeholder="Marks"
                  value={newStudentMarks}
                  onChange={(e) => setNewStudentMarks(Number(e.target.value))}
                  className="p-1.5 border border-slate-200 rounded bg-white w-24"
                />
                <button
                  onClick={() => {
                    if (!newStudentName) return;
                    const nextId = studentDb.length > 0 ? Math.max(...studentDb.map(s => s.id)) + 1 : 1;
                    setStudentDb([...studentDb, { id: nextId, name: newStudentName, marks: newStudentMarks }]);
                    setDbLog(prev => [`INSERT INTO students (name, marks) VALUES ('${newStudentName}', ${newStudentMarks}) -> ID: ${nextId}`, ...prev]);
                  }}
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors flex items-center gap-1 shadow-2xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Insert (mysqli_query)</span>
                </button>
              </div>

              {/* SQL Execution Log */}
              <div className="p-3 bg-slate-900 text-slate-100 rounded-lg font-mono text-[11px] max-h-32 overflow-y-auto space-y-1">
                <div className="text-slate-400 font-sans text-[10px] uppercase font-bold">SQL Query Log:</div>
                {dbLog.map((log, idx) => (
                  <div key={idx} className="text-emerald-400">&gt; {log}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Sample Output from PDF */}
      {activeTab === 'sample-output' && (
        <div className="p-6 flex-1 bg-white space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
              Official PDF Expected Output
            </h3>
            <span className="text-[11px] font-mono text-slate-400">Verbatim from Lab Manual</span>
          </div>

          <pre className="font-mono text-xs sm:text-sm text-slate-800 whitespace-pre-wrap leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-200">
            {program.sampleOutputText || program.outputExplanation.description}
          </pre>
        </div>
      )}

      {/* Tab 3: Local XAMPP Setup & Run Guide */}
      {activeTab === 'xampp-guide' && (
        <div className="p-6 flex-1 bg-white space-y-6 max-w-3xl">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Running This Program Locally with XAMPP
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Step-by-step instructions for running server-side PHP scripts on Windows/macOS.
              </p>
            </div>
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
              XAMPP Guide
            </span>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 leading-relaxed">
              <strong>Why doesn't double-clicking work?</strong> Browsers only understand client files (HTML/CSS/JS). PHP requires an active HTTP web server (Apache) with the PHP Zend Engine installed to parse the code and return HTML before sending it to the browser.
            </div>

            <div className="space-y-3">
              <span className="font-bold text-slate-900 text-xs block">Execution Steps:</span>
              <ol className="space-y-2.5 list-decimal pl-5 text-slate-700 leading-relaxed">
                <li>
                  <strong>Install and Open XAMPP Control Panel:</strong> Start Apache. If this is a database program (e.g. Program 10), also start <strong>MySQL</strong>.
                </li>
                <li>
                  <strong>Save File in htdocs:</strong> Navigate to your XAMPP installation directory:
                  <code className="block bg-slate-100 p-2 rounded mt-1 font-mono text-slate-800 border border-slate-200">
                    C:\xampp\htdocs\phplab\{program.runLocallyGuide?.fileName || 'program.php'}
                  </code>
                </li>
                <li>
                  <strong>Open in Browser via localhost:</strong> Do NOT use <code>file://</code>. Open your web browser and navigate to:
                  <code className="block bg-blue-50 p-2 rounded mt-1 font-mono text-blue-800 font-bold border border-blue-200">
                    {program.runLocallyGuide?.localhostUrl || 'http://localhost/phplab/'}
                  </code>
                </li>
                {program.technologies.includes('MySQL') && (
                  <li>
                    <strong>Execute Database Setup First:</strong> Navigate to <a href="http://localhost/phpmyadmin" target="_blank" rel="noreferrer" className="text-blue-600 underline">http://localhost/phpmyadmin</a>, select the <em>SQL</em> tab, paste the SQL setup code (<code>CREATE DATABASE college; ...</code>), and click <em>Go</em>.
                  </li>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
