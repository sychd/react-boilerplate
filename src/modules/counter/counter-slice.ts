import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterSlice {
  value: number;
}

const initialState: CounterSlice = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incremented(state) {
      state.value++;
    },
    decremented(state) {
      state.value--;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { actions: counterActions, reducer: counterReducer } = counterSlice;
