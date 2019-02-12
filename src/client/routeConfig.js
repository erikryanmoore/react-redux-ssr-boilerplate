import App from './App.react';
import Home from './pages/home/Home.react';
import NotFound from './pages/notFound/NotFound.react';

export const routeConfig = [
  {
    ...App,
    routes: [
      {
        ...Home,
        exact: true,
        path: '/',
        title: 'Home',
      },
      {
        ...NotFound,
        title: 'Not Found',
      },
    ],
  },
];
