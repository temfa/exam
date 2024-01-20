import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Arrow from "@/svgs/arrow";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import ContainerLayout from "@/utils/container";

const BreadCrumb = () => {
  return (
    <Paper sx={{ width: "100%", py: "24px", backgroundColor: "#FAFAFA", boxShadow: "none" }}>
      <ContainerLayout type={true}>
        <Breadcrumbs separator={<Arrow />} aria-label="breadcrumb" sx={{ mx: { xs: "auto", sm: "unset" }, width: "fit-content" }}>
          <Link key="1" color="#252B42" href="/" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2, textDecoration: "none" }}>
            Home
          </Link>
          <Typography key="3" color="#BDBDBD" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
            Shop
          </Typography>
        </Breadcrumbs>
      </ContainerLayout>
    </Paper>
  );
};

export default BreadCrumb;
