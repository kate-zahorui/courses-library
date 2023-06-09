import { Box, Grid, Typography } from "@mui/material";
import { useMemo } from "react";
import { useAppSelector } from "../services/hooks/reduxHooks";
import useMediaScreen from "../services/hooks/useMediaScreen";
import { LessonsList, ReturnButton, VideoPlayer } from "./";

const CourseDetails: React.FunctionComponent = () => {
  const { currentCourse } = useAppSelector((state) => state.courses);
  const isMediumScreen = useMediaScreen("md");

  const firstVideo = useMemo(() => {
    if (!currentCourse) return null;
    const firstVideo = currentCourse.lessons.find((i) => i.order === 1);
    return firstVideo;
  }, [currentCourse]);

  if (!currentCourse) return null;
  return (
    <>
      <div>
        <Box
          mb={3}
          sx={{
            "@media screen and (min-width: 900px)": {
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              gap: "16px",
            },
          }}
        >
          <Box mb={isMediumScreen ? 0 : 2}>
            <ReturnButton />
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontSize: "28px",
              "@media screen and (min-width: 900px)": {
                fontSize: "36px",
              },
            }}
          >
            {currentCourse.title}
          </Typography>
        </Box>
        {firstVideo && (
          <Box width={isMediumScreen ? 700 : "100%"}>
            <VideoPlayer link={firstVideo.link} videoId={firstVideo.id} />
          </Box>
        )}

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
      <Box mt={4} display="flex" justifyContent="center">
        <ReturnButton />
      </Box>
    </>
  );
};

export default CourseDetails;
