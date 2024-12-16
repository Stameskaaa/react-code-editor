import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LanguageState {
  activeLangIndex: number;
}

const initialState: LanguageState = {
  activeLangIndex: 0,
};

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLangIndex(state, action: PayloadAction<number>) {
      state.activeLangIndex = action.payload;
    },
  },
});

export const { setLangIndex } = langSlice.actions;
export const languageReducer = langSlice.reducer;
