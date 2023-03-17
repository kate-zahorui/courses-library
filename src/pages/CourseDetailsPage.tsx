import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { getCourseById } from "../redux/courses/coursesOperations";

const CourseDetailsPage: React.FunctionComponent = () => {
  const { token } = useAppSelector((state) => state.courses);
  const { courseId } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!courseId || !token) return;
    dispatch(getCourseById(courseId));
    // eslint-disable-next-line
  }, [token, courseId]);

  return (
    <div>
      <h1>Course {courseId} Details</h1>
    </div>
  );
};

export default CourseDetailsPage;
