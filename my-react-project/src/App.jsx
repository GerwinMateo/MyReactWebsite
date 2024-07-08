import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/ProjectPage";
import ResumePage from "./Pages/ResumePage";
import ErrorPage from "./Pages/404Page"
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App
