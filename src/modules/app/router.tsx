import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';

import { store } from 'src/modules/app/store';
import { CounterPage } from 'src/modules/counter/counter-page';
import { ErrorPage } from 'src/modules/error/error-page';
import { WelcomeScreen } from 'src/modules/welcome-screen/welcome-screen';

const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <WelcomeScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/counter',
    element: <CounterPage />,
  },
  {
    path: '/doggies',
    loader() {
      // feels that it is better to have <Protected /> wrapper to use hooks inside
      const { isAuthorized } = store.getState().auth;
      if (!isAuthorized) {
        throw new Response('Not Authorized', { status: 401 });
      }

      return null;
    },
    lazy() {
      return import('../doggies/doggies-page').then(({ DoggiesPage }) => {
        return {
          Component: DoggiesPage,
        };
      });
    },
  },
  {
    path: '/about',
    element: <div>This is react boilerplate</div>,
  },
];

const router = createBrowserRouter(ROUTES);

export const AppRouter = () => <RouterProvider router={router} />;
