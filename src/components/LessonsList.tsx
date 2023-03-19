import React, { useState, useMemo } from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../services/hooks/reduxHooks";
import { ILesson } from "../types/courses";
import { updateModalStatus } from "../redux/courses/coursesSlice";
import { VideoModal } from "./";

const LessonsList: React.FunctionComponent = () => {
  const { currentCourse, isModalShown } = useAppSelector(
    (state) => state.courses
  );
  const [lesson, setLesson] = useState<ILesson | null>(null);
  const dispatch = useAppDispatch();

  const currentLessons = useMemo(() => {
    if (!currentCourse || !currentCourse.lessons) return null;
    const currentLessons = [...currentCourse.lessons].sort(
      (a, b) => a.order - b.order
    );
    return currentLessons;
  }, [currentCourse]);

  if (!currentCourse) return null;

  const handleLessonOpen = (id: string) => {
    const lesson = currentCourse.lessons.find((i) => i.id === id);
    if (!lesson) return;
    setLesson(lesson);
    dispatch(updateModalStatus(true));
  };

  return (
    <>
      <Grid container spacing={3} mt={3}>
        {currentLessons &&
          currentLessons.map((i: ILesson) => (
            <Grid item key={i.id} xs={12}>
              <Card onClick={() => handleLessonOpen(i.id)} sx={{}}>
                <CardContent>
                  <Typography>
                    Lesson {i.order}. {i.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>

      {isModalShown && lesson && <VideoModal lesson={lesson} />}
    </>
  );
};

export default LessonsList;
