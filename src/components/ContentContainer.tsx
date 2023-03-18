import React from "react";
import { Container } from "@mui/material";

interface IProps {
  children: any;
}

const ContentContainer: React.FunctionComponent<IProps> = ({ children }) => {
  return <Container sx={{ padding: "0 16px" }}>{children}</Container>;
};

export default ContentContainer;
