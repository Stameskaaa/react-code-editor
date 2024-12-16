import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  activeLangIndex: number;
  activeLangId: string;
}

const initialState: LanguageState = {
  activeLangIndex: 0,
  activeLangId: 'javascript',
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLangLanguage(state, action: PayloadAction<{ index: number; id: string }>) {
      state.activeLangIndex = action.payload.index;
      state.activeLangId = action.payload.id;
    },
  },
});

export const { setLangLanguage } = langSlice.actions;
export const languageReducer = langSlice.reducer;
