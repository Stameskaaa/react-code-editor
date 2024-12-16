import { languageModes } from './../../constants/languageModes';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Language } from '../../types/types';

interface LanguageState {
  currentLang: Language;
}

const initialState: LanguageState = {
  currentLang: languageModes[0],
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<number>) {
      //   state.currentLang = languageModes[0];
    },
  },
});

export const { setTheme } = langSlice.actions;
export const themeReducer = langSlice.reducer;
