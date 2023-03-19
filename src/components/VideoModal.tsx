import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useAppDispatch, useAppSelector } from "../services/hooks/reduxHooks";
import { updateModalStatus } from "../redux/courses/coursesSlice";
import { VideoPlayer } from "./";
import { ILesson } from "../types/courses";
import Typography from "@mui/material/Typography";

interface IProps {
  lesson: ILesson;
}

const VideoModal: React.FunctionComponent<IProps> = ({ lesson }) => {
  const { isModalShown } = useAppSelector((state) => state.courses);
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(updateModalStatus(false));
  };

  return (
    <Dialog onClose={handleClose} open={isModalShown} fullWidth maxWidth="md">
      <Box
        sx={{
          paddingRight: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DialogTitle>
          Lesson {lesson.order}. {lesson.title}
        </DialogTitle>
        <IconButton
          onClick={handleClose}
          aria-label="close modal"
          color="primary"
          sx={{ borderRadius: "15%" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <DialogContent
        sx={{
          padding: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <VideoPlayer link={lesson.link} videoId={lesson.id} />
        <Typography
          sx={{
            padding: "12px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Press <ArrowDropUpIcon fontSize="large" /> ArrowUp to increase speed
          and <ArrowDropDownIcon fontSize="large" /> ArrowDown to reduce it
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
