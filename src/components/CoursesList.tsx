import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../services/hooks/reduxHooks";
import useMediaScreen from "../services/hooks/useMediaScreen";
import { ICourse } from "../types/courses";

const CoursesList: React.FunctionComponent = () => {
  const { items } = useAppSelector((state) => state.courses);
  const isLargeScreen = useMediaScreen("lg");

  return (
    <Grid container spacing={3}>
      {items &&
        items.map((i: ICourse) => (
          <Grid
            item
            xs={isLargeScreen ? 6 : 12}
            key={i.id}
            sx={{ flexGrow: 1 }}
          >
            <Card sx={{ height: "100%" }}>
              <CardHeader title={i.title} />
              <CardMedia
                component="img"
                height="200"
                image={`${i.previewImageLink}/cover.webp`}
                alt={`${i.title}`}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <b>Lessons:</b> {i.lessonsCount}
                </Typography>
                {i.meta?.skills && (
                  <Typography variant="body2" color="text.secondary">
                    <b>Skills:</b>{" "}
                    {i.meta.skills?.length > 0 && i.meta.skills.join(", ")}
                  </Typography>
                )}
                <Typography variant="body2" color="text.secondary">
                  <b>Rating:</b> {i.rating}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default CoursesList;
