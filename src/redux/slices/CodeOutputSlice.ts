import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CodeOutputState {
  isOpen: boolean;
}

const initialState: CodeOutputState = {
  isOpen: false,
};

const codeOutputSlice = createSlice({
  name: 'CodeOutput',
  initialState,
  reducers: {
    toggleCodeOutput(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        state.isOpen = true;
      } else {
        state.isOpen = false;
      }
    },
  },
});

export const { toggleCodeOutput } = codeOutputSlice.actions;
export const codeOutputReducer = codeOutputSlice.reducer;
