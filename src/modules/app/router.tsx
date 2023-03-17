import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { WelcomeScreen } from 'src/modules/welcome-screen/welcome-screen';
import { ErrorPage } from 'src/modules/error/error-page';

const ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <WelcomeScreen />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <div>This is react boilerplate</div>,
  },
];

const router = createBrowserRouter(ROUTES);

export const AppRouter = () => <RouterProvider router={router} />;
