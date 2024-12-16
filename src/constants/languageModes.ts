import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { Language } from '../types/types';

export const languageModes: Language[] = [
  { name: 'JavaScript', mode: javascript(), id: 'javascript' },
  { name: 'Python', mode: python(), id: 'python' },
  { name: 'C++', mode: cpp(), id: 'cpp' },
];
