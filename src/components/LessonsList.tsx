import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../services/hooks/reduxHooks";
import { ILesson } from "../types/courses";

const LessonsList: React.FunctionComponent = () => {
  const { currentCourse } = useAppSelector((state) => state.courses);

  if (!currentCourse) return null;

  return (
    <Grid container spacing={3} mt={3}>
      {currentCourse.lessons &&
        currentCourse.lessons.map((i: ILesson) => (
          <Grid item key={i.id} xs={12}>
            <Card>
              <CardContent>
                <Typography>
                  Lesson {i.order}. {i.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default LessonsList;
