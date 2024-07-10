import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import ResumePage from "./Pages/ResumePage";
import ErrorPage from "./Pages/404Page"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from "react";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/project", element: <ProjectPage /> },
  { path: "/resume", element: <ResumePage /> },
  { path: "*", element: <ErrorPage /> },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;