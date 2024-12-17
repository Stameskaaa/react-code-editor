import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CodeOutputState {
  state: {
    isOpen: boolean;
    executeFlag: boolean; //Флаг для выполнения запроса
  };
}

const initialState: CodeOutputState = {
  state: {
    isOpen: false,
    executeFlag: false,
  },
};

const codeOutputSlice = createSlice({
  name: 'CodeOutput',
  initialState,
  reducers: {
    toggleCodeOutput(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        state.state.isOpen = true;
      } else {
        state.state.isOpen = false;
      }
    },
    doExecute(state) {
      state.state.executeFlag = !state.state.executeFlag;
    },
  },
});

export const { toggleCodeOutput, doExecute } = codeOutputSlice.actions;
export const codeOutputReducer = codeOutputSlice.reducer;
