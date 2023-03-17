import { useMemo } from "react";
import { useAppSelector } from "../hooks/reduxHooks";
import { LessonsList, VideoPlayer } from "./";

const CourseDetails: React.FunctionComponent = () => {
  const { currentCourse } = useAppSelector((state) => state.courses);

  const videoLink = useMemo(() => {
    return currentCourse?.lessons[0].link;
  }, [currentCourse]);

  if (!currentCourse) return null;
  return (
    <div>
      <div>
        <h1>{currentCourse.title}</h1>
        {videoLink && <VideoPlayer link={videoLink} />}
        <p>{currentCourse.description}</p>
        <ul>
          {currentCourse.meta?.skills && (
            <li>
              <p>Skills:</p>
              <p>
                {currentCourse.meta.skills?.length > 0 &&
                  currentCourse.meta.skills.join(", ")}
              </p>
            </li>
          )}
          {currentCourse.tags && (
            <li>
              <p>Tags:</p>
              <p>
                {currentCourse.tags?.length > 0 &&
                  currentCourse.tags.join(", ")}
              </p>
            </li>
          )}
          <li>
            <p>Rating:</p>
            <p>{currentCourse.rating}</p>
          </li>
        </ul>
        <div></div>
      </div>
      <LessonsList />
    </div>
  );
};

export default CourseDetails;
