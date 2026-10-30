import Prism from 'prismjs';

// Polyfill global Prism so language definition extensions (such as markup-templating, php, etc.)
// can safely attach themselves without crashing with "ReferenceError: Prism is not defined".
if (typeof window !== 'undefined') {
  (window as any).Prism = Prism;
}
if (typeof globalThis !== 'undefined') {
  (globalThis as any).Prism = Prism;
}

// Safely load standard syntax highlighters
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-markup-templating';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-python';

export default Prism;
