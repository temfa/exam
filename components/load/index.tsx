import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/material";

const Load = () => {
  return (
    <Container sx={{ width: "100%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <CircularProgress disableShrink />
    </Container>
  );
};

export default Load;
