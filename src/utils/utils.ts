import { languageModes } from '../constants/languageModes';

export function getLangIdByIndex(index: number) {
  const currentLang = languageModes[index];
  if (currentLang) {
    return currentLang.id;
  }
  return '';
}
