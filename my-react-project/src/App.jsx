import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const LandingPage = lazy(() => import('./Pages/LandingPage'));
const AboutPage = lazy(() => import('./Pages/HomePage'));
const ProjectPage = lazy(() => import('./Pages/ProjectPage'));
const ResumePage = lazy(() => import('./Pages/ResumePage'));
const ErrorPage = lazy(() => import('./Pages/404Page'));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={
        <div style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.5rem',
          color: '#ffefe3'
        }}>
          Loading...
        </div>
      }>
        <LandingPage />
      </Suspense>
    ),
  },
  { path: "/about", element: <AboutPage /> },
  { path: "/project", element: <ProjectPage /> },
  { path: "/resume", element: <ResumePage /> },
  { path: "*", element: <ErrorPage /> }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;