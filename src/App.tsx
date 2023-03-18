import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAppDispatch } from "./services/hooks/reduxHooks";
import { getToken } from "./redux/courses/coursesOperations";
import { CourseDetailsPage, CoursesCataloguePage } from "./pages";

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getToken());
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/" element={<CoursesCataloguePage />} />
      <Route path="/:courseId" element={<CourseDetailsPage />} />
    </Routes>
  );
};

export default App;
