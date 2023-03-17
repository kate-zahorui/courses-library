import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getCourseById } from "../redux/courses/coursesOperations";
import { CourseDetails } from "../components";

const CourseDetailsPage: React.FunctionComponent = () => {
  const { token, currentCourse, isLoading, error } = useAppSelector(
    (state) => state.courses
  );
  const { courseId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!courseId || !token) return;
    dispatch(getCourseById(courseId));
    // eslint-disable-next-line
  }, [token, courseId]);

  const showDetails = currentCourse && !error && !isLoading && token;

  return (
    <div>
      <h1>Course details</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error. {error}</p>}

      {showDetails && <CourseDetails />}
    </div>
  );
};

export default CourseDetailsPage;
