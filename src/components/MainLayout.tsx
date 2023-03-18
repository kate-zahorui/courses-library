import React from "react";
import { Box } from "@mui/material";

interface IProps {
  children: any;
}

const MainLayout: React.FunctionComponent<IProps> = ({ children }) => {
  return (
    <Box component="main" sx={{ padding: "32px 0" }}>
      {children}
    </Box>
  );
};

export default MainLayout;
