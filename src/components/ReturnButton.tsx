import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const ReturnButton: React.FunctionComponent = () => {
  return (
    <Link to="/">
      <Button variant="outlined">Go back</Button>
    </Link>
  );
};

export default ReturnButton;
