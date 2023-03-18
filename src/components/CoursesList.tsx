import React, { useState, useEffect, useMemo } from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Pagination,
  Typography,
} from "@mui/material";
import { useAppSelector } from "../services/hooks/reduxHooks";
import useMediaScreen from "../services/hooks/useMediaScreen";
import { ICourse } from "../types/courses";

const CoursesList: React.FunctionComponent = () => {
  const { items } = useAppSelector((state) => state.courses);
  const isLargeScreen = useMediaScreen("lg");

  const [currentPage, setCurrentPage] = useState(1);
  const [availablePages, setAvailablePages] = useState(1);
  const perPage = 10;

  useEffect(() => {
    if (items.length === 0) return;
    setAvailablePages(Math.ceil(items.length / perPage));
  }, [items]);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  const currentItems = useMemo(() => {
    return items.slice(currentPage * perPage - perPage, currentPage * perPage);
  }, [items, currentPage]);

  const showPagination = useMemo(() => {
    return items.length !== 0 && availablePages > 1;
  }, [items, availablePages]);

  return (
    <>
      <Grid container spacing={3}>
        {currentItems &&
          currentItems.map((i: ICourse) => (
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
                      <b>Skills:</b>
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
      {showPagination && (
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            count={availablePages}
            page={currentPage}
            onChange={handleChange}
            shape="rounded"
            color="primary"
          />
        </Box>
      )}
    </>
  );
};

export default CoursesList;
