import { createSlice } from '@reduxjs/toolkit';

interface AuthSlice {
  isAuthorized: boolean;
}

const initialState: AuthSlice = {
  isAuthorized: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorized(state) {
      state.isAuthorized = true;
    },
  },
});

export const { actions: authActions, reducer: authReducer } = authSlice;
