import { Grid, Typography } from "@mui/material";
import { useMemo } from "react";
import { useAppSelector } from "../services/hooks/reduxHooks";
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
        <Typography
          variant="h2"
          mb={3}
          sx={{
            fontSize: "28px",
            "@media screen and (min-width: 900px)": {
              fontSize: "36px",
            },
          }}
        >
          {currentCourse.title}
        </Typography>
        {videoLink && <VideoPlayer link={videoLink} />}

        <Typography variant="subtitle1" mt={4}>
          {currentCourse.description}
        </Typography>

        <Grid container spacing={2} mt={2}>
          {currentCourse.meta?.skills && (
            <>
              <Grid
                item
                xs={3}
                sm={2}
                lg={1}
                sx={{ color: "#2c6755", fontWeight: 700 }}
              >
                Skills:
              </Grid>
              <Grid item xs={9} sm={10} lg={11}>
                {currentCourse.meta.skills?.length > 0 &&
                  currentCourse.meta.skills.join(", ")}
              </Grid>
            </>
          )}
          {currentCourse.tags && (
            <>
              <Grid
                item
                xs={3}
                sm={2}
                lg={1}
                sx={{ color: "#2c6755", fontWeight: 700 }}
              >
                Tags:
              </Grid>
              <Grid item xs={9} sm={10} lg={11}>
                {currentCourse.tags?.length > 0 &&
                  currentCourse.tags.join(", ")}
              </Grid>
            </>
          )}
          <>
            <Grid
              item
              xs={3}
              sm={2}
              lg={1}
              sx={{ color: "#2c6755", fontWeight: 700 }}
            >
              Rating:
            </Grid>
            <Grid item xs={9} sm={10} lg={11}>
              {currentCourse.rating}
            </Grid>
          </>
        </Grid>
      </div>
      <LessonsList />
    </div>
  );
};

export default CourseDetails;
