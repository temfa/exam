import React from "react";
import Paper from "@mui/material/Paper";
import ContainerLayout from "@/utils/container";
import Box from "@mui/material/Box";
import Brand1 from "@/svgs/brand1";
import Brand2 from "@/svgs/brand2";
import Brand3 from "@/svgs/brand3";
import Brand4 from "@/svgs/brand4";
import Brand5 from "@/svgs/brand5";
import Brand6 from "@/svgs/brand6";

const Brands = () => {
  return (
    <Paper sx={{ width: "100%", py: "50px", backgroundColor: "#FAFAFA", boxShadow: "none" }}>
      <ContainerLayout type={true}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: { xs: "60px", sm: "30px" }, alignItems: "center" }}>
          <Box sx={{ px: "25px" }}>
            <Brand1 />
          </Box>
          <Box sx={{ px: "25px" }}>
            <Brand2 />
          </Box>
          <Box sx={{ px: "25px" }}>
            <Brand3 />
          </Box>
          <Box sx={{ px: "25px" }}>
            <Brand4 />
          </Box>
          <Box sx={{ px: "25px" }}>
            <Brand5 />
          </Box>
          <Box sx={{ px: "25px" }}>
            <Brand6 />
          </Box>
        </Box>
      </ContainerLayout>
    </Paper>
  );
};

export default Brands;
