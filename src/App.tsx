import React from "react";
import { Route, Routes } from "react-router-dom";
import { CourseDetailsPage, CoursesCataloguePage } from "./pages";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<CoursesCataloguePage />} />
      <Route path="/:courseId" element={<CourseDetailsPage />} />
    </Routes>
  );
};

export default App;
