import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp';
import { Language } from '../types/types';

export const languageModes: Language[] = [
  { name: 'JavaScript', mode: javascript(), id: 'javascript', version: '18.15.0' },
  { name: 'Python', mode: python(), id: 'python', version: '3.10.0' },
  { name: 'C++', mode: cpp(), id: 'cpp', version: '10.2.0' },
];
