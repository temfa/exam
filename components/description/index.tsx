import React from "react";
import Paper from "@mui/material/Paper";
import ContainerLayout from "@/utils/container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Image from "next/image";

const Description = ({ product }: { product: any }) => {
  return (
    <Paper sx={{ width: "100%", backgroundColor: "#FFF", boxShadow: "none", display: { xs: "none", sm: "block" } }}>
      <ContainerLayout type={true}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "17px" }}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pt: "10px", width: "100%" }}>
              <Typography variant="h2" color="#737373" sx={{ fontSize: 14, fontWeight: 600, lineHeight: "24px", letterSpacing: 0.2, padding: "24px" }}>
                Description
              </Typography>
              <Typography variant="h2" color="#737373" sx={{ fontSize: 14, fontWeight: 600, lineHeight: "24px", letterSpacing: 0.2, padding: "24px" }}>
                Additional Information
              </Typography>
              <Typography variant="h2" color="#737373" sx={{ fontSize: 14, fontWeight: 600, lineHeight: "24px", letterSpacing: 0.2, padding: "24px" }}>
                Reviews (0)
              </Typography>
            </Box>
            <Divider />
          </Box>
          <Box sx={{ display: "flex", gap: "30px", pb: "48px", pt: "24px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <Typography variant="h2" color="#252B42" sx={{ fontSize: 24, fontWeight: 700, lineHeight: "32px", letterSpacing: 0.1, textTransform: "capitalize" }}>
                {product?.category}
              </Typography>
              <Typography variant="h2" color="#737373" sx={{ fontSize: 14, fontWeight: 600, lineHeight: "24px", letterSpacing: 0.2 }}>
                {product?.description}
              </Typography>
            </Box>
            <Image src={product?.thumbnail} alt="Thumbnail" width={413} height={372} />
          </Box>
        </Box>
      </ContainerLayout>
    </Paper>
  );
};

export default Description;
