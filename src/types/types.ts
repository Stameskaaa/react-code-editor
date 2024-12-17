import { LanguageSupport } from '@codemirror/language';

export interface Language {
  name: string;
  mode: LanguageSupport;
  id: string;
  version: string;
}

export interface ExecuteCodeResponse {
  language: string;
  version: string;
  run: {
    output: string;
  };
}
