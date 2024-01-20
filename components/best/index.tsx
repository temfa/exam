import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ContainerLayout from "@/utils/container";
import Products from "../products";

const Best = () => {
  return (
    <Paper sx={{ width: "100%", py: "48px", backgroundColor: "#FAFAFA", boxShadow: "none", display: { xs: "none", sm: "block" } }}>
      <ContainerLayout type={true}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Typography variant="h2" color="#252B42" sx={{ fontSize: 24, fontWeight: 700, lineHeight: "32px", letterSpacing: 0.1 }}>
            BESTSELLER PRODUCTS
          </Typography>
          <Divider />
          <Products single={true} />
        </Box>
      </ContainerLayout>
    </Paper>
  );
};

export default Best;
