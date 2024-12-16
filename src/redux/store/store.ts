import { editorTextReducer } from './../slices/EditorTextSlice';
import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '../slices/ThemeSlice';
import { codeOutputReducer } from '../slices/CodeOutputSlice';
import { languageReducer } from '../slices/LanguageSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: languageReducer,
    editorText: editorTextReducer,
    codeOutput: codeOutputReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
