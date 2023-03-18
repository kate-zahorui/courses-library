import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../services/hooks/reduxHooks";
import { getCourseById } from "../redux/courses/coursesOperations";
import {
  ContentContainer,
  CourseDetails,
  Header,
  HeaderTitle,
  MainLayout,
} from "../components";

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
      <Header>
        <ContentContainer>
          <HeaderTitle title="Course details" />
        </ContentContainer>
      </Header>
      <MainLayout>
        <ContentContainer>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error. {error}</p>}

          {showDetails && <CourseDetails />}
        </ContentContainer>
      </MainLayout>
    </div>
  );
};

export default CourseDetailsPage;
