"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import ContainerLayout from "@/utils/container";
import Products from "../products";

const FeaturedProducts = () => {
  return (
    <ContainerLayout type={false}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontSize: 20,
              fontWeight: 400,
              lineHeight: "30px",
              letterSpacing: 0.2,
              display: {
                xs: "none",
                sm: "block",
              },
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
              width: {
                xs: "50%",
                sm: "unset",
              },
              mx: "auto",
            }}>
            BESTSELLER PRODUCTS
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
                xs: "70%",
                sm: "unset",
              },
              mx: "auto",
            }}>
            Problems trying to resolve the conflict between
          </Typography>
        </Box>
        <Products single={false} />
      </Box>
    </ContainerLayout>
  );
};

export default FeaturedProducts;
