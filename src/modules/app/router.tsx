import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { WelcomeScreen } from 'src/modules/welcome-screen/welcome-screen';
import { ErrorPage } from 'src/modules/error/error-page';
import { CounterPage } from 'src/modules/counter/counter-page';
import { DoggiesPage } from 'src/modules/doggies/doggies-page';

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
    element: <DoggiesPage />,
  },
  {
    path: '/about',
    element: <div>This is react boilerplate</div>,
  },
];

const router = createBrowserRouter(ROUTES);

export const AppRouter = () => <RouterProvider router={router} />;
