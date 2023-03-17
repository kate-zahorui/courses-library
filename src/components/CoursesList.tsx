import { useAppSelector } from "../hooks/reduxHooks";
import { ICourse } from "../types/courses";

const CoursesList: React.FunctionComponent = () => {
  const { items } = useAppSelector((state) => state.courses);

  return (
    <ul>
      {items &&
        items.map((i: ICourse) => (
          <li key={i.id}>
            <div>
              <h2>{i.title}</h2>
              <img
                src={`${i.previewImageLink}/cover.webp`}
                alt={`${i.title}`}
              />
            </div>
            <ul>
              <li>
                <p>Lessons:</p>
                <p>{i.lessonsCount}</p>
              </li>
              {i.meta?.skills && (
                <li>
                  <p>Skills:</p>
                  <p>{i.meta.skills?.length > 0 && i.meta.skills.join(", ")}</p>
                </li>
              )}
              <li>
                <p>Rating:</p>
                <p>{i.rating}</p>
              </li>
            </ul>
          </li>
        ))}
    </ul>
  );
};

export default CoursesList;
