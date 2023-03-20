import { configureStore } from '@reduxjs/toolkit';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { authReducer } from 'src/modules/auth/auth-slice';
import { counterReducer } from 'src/modules/counter/counter-slice';
import { doggieApiSlice } from 'src/modules/doggies/doggies-slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    [doggieApiSlice.reducerPath]: doggieApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    return getDefaultMiddleware().concat(doggieApiSlice.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const StoreProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);
