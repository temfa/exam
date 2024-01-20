import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import React from "react";

const Design = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        backgroundImage: `url(${"/images/bg.png"})`,
        pt: "160px",
        pb: "112px",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        alignItems: "center",
      }}>
      <Typography variant="h5" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }} color="#23A6F0">
        Designing Better Experience
      </Typography>
      <Typography
        variant="h2"
        sx={{ fontSize: 40, fontWeight: 700, lineHeight: "50px", letterSpacing: 0.2, width: { xs: "90%", sm: "35%" }, mx: "auto" }}
        align="center"
        color="#252B42">
        Problems trying to resolve the conflict between
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontSize: 14, fontWeight: 400, lineHeight: "20px", letterSpacing: 0.2, width: { xs: "75%", sm: "27%" }, mx: "auto" }}
        align="center"
        color="#737373">
        Problems trying to resolve the conflict between the two major realms of Classical physics:{" "}
      </Typography>
      <Typography variant="h5" sx={{ fontSize: 24, fontWeight: 700, lineHeight: "32px", letterSpacing: 0.1 }} color="#23856D">
        $16.48
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: "#23A6F0", boxShadow: "none" }}>
        ADD YOUR CALL TO ACTION
      </Button>
    </Paper>
  );
};

export default Design;
