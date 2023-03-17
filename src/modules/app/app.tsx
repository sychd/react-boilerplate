import React from 'react';
import 'src/styles/main.scss';
import 'src/modules/app/app.scss';
import { AppRouter } from 'src/modules/app/router';
import { Outlet } from 'react-router-dom';
import { StoreProvider } from 'src/modules/app/store';

export function App() {
  return (
    <React.StrictMode>
      <StoreProvider>
        <div className='app'>
          <AppRouter />
          <Outlet />
        </div>
      </StoreProvider>
    </React.StrictMode>
  );
}
