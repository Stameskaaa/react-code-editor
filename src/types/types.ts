import { LanguageSupport } from '@codemirror/language';

export interface Language {
  name: string;
  mode: LanguageSupport;
}
