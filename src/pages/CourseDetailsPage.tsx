import React from "react";
import { useParams } from "react-router-dom";

const CourseDetailsPage: React.FunctionComponent = () => {
  const { courseId } = useParams();

  return (
    <div>
      <h1>Course {courseId} Details</h1>
    </div>
  );
};

export default CourseDetailsPage;
