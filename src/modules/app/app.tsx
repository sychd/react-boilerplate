import React from 'react';
import 'src/styles/main.scss';
import 'src/modules/app/app.scss';
import { AppRouter } from 'src/modules/app/router';
import { Outlet } from 'react-router-dom';

export function App() {
  return (
    <React.StrictMode>
      <div className='app'>
        <AppRouter />
        <Outlet />
      </div>
    </React.StrictMode>
  );
}
