import { Box, CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center" padding="15%">
      <CircularProgress
        color="primary"
        style={{ width: "60px", height: "60px" }}
      />
    </Box>
  );
};

export default Loader;
