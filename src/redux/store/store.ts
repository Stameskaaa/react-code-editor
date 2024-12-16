import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '../slices/themeSlice';
import { languageReducer } from '../slices/languageSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    lang: languageReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
