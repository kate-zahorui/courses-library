import { useAppSelector } from "../hooks/reduxHooks";
import { ILesson } from "../types/courses";

const LessonsList: React.FunctionComponent = () => {
  const { currentCourse } = useAppSelector((state) => state.courses);
  if (!currentCourse) return null;

  return (
    <ul>
      {currentCourse.lessons &&
        currentCourse.lessons.map((i: ILesson) => (
          <li key={i.id}>
            <h2>
              Lesson {i.order}. {i.title}
            </h2>
            <img
              src={`${i.previewImageLink}/lesson-${i.order}.webp`}
              alt={`${i.title}`}
            />
          </li>
        ))}
    </ul>
  );
};

export default LessonsList;
