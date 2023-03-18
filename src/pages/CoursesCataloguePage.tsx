import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../services/hooks/reduxHooks";
import { getCourses } from "../redux/courses/coursesOperations";
import {
  ContentContainer,
  CoursesList,
  Header,
  HeaderTitle,
  MainLayout,
} from "../components";

const CoursesCataloguePage: React.FunctionComponent = () => {
  const { token, items, isLoading, error } = useAppSelector(
    (state) => state.courses
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token || items.length > 0) return;
    dispatch(getCourses());
    // eslint-disable-next-line
  }, [token]);

  const showCourses = items.length > 0 && !error && !isLoading;
  const noCourses = items.length === 0 && !error && !isLoading && token;

  return (
    <div>
      <Header>
        <ContentContainer>
          <HeaderTitle title="Courses catalogue" />
        </ContentContainer>
      </Header>
      <MainLayout>
        <ContentContainer>
          {isLoading && <p>Loading...</p>}
          {error && <p>Error. {error}</p>}

          {showCourses && <CoursesList />}
          {noCourses && <p>There're no jobs.</p>}
        </ContentContainer>
      </MainLayout>
    </div>
  );
};

export default CoursesCataloguePage;
