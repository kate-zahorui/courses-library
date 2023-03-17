import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../hooks/reduxHooks";
import { getCourses } from "../redux/courses/coursesOperations";
import { CoursesList } from "../components";

const CoursesCataloguePage: React.FunctionComponent = () => {
  const { token, items, isLoading, error } = useAppSelector(
    (state) => state.courses
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(getCourses());
    // eslint-disable-next-line
  }, [token]);

  const showCourses = items.length > 0 && !error && !isLoading;
  const noCourses = items.length === 0 && !error && !isLoading && token;

  return (
    <div>
      <h1>Courses Catalogue</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error. {error}</p>}

      {showCourses && <CoursesList />}
      {noCourses && <p>There're no jobs.</p>}
    </div>
  );
};

export default CoursesCataloguePage;
