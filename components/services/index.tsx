import ContainerLayout from "@/utils/container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import { services } from "@/utils/data";

const Services = () => {
  return (
    <ContainerLayout type={false}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "80px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontSize: 20,
              fontWeight: 400,
              lineHeight: "30px",
              letterSpacing: 0.2,
            }}>
            Featured Products
          </Typography>
          <Typography
            variant="h1"
            align="center"
            sx={{
              fontSize: 24,
              fontWeight: 700,
              lineHeight: "32px",
              letterSpacing: 0.1,
            }}>
            THE BEST SERVICES
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "20px",
              letterSpacing: 0.2,
              width: {
                xs: "45%",
                sm: "unset",
              },
              mx: "auto",
            }}>
            Problems trying to resolve the conflict between
          </Typography>
        </Box>
        <Box sx={{ display: "grid", gridTemplateColumns: { xm: "repeat(1, 1fr)", sm: "repeat(3, 1fr)" }, columnGap: 3 }}>
          {services?.map((item, index) => {
            return (
              <Box key={index} sx={{ px: 5, py: 4.375, display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
                {item.icon}
                <Typography variant="h2" color="#252B42" align="center" sx={{ fontSize: 24, fontWeight: 700, lineHeight: "32px", letterSpacing: 0.1 }}>
                  {item.title}
                </Typography>
                <Typography align="center" color="#737373" variant="h6" sx={{ fontSize: 14, fontWeight: 400, lineHeight: "20px", letterSpacing: 0.2, width: "70%", mx: "auto" }}>
                  {item.text}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </ContainerLayout>
  );
};

export default Services;
