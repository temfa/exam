import ContainerLayout from "@/utils/container";
import { testi } from "@/utils/data";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <ContainerLayout type={false}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          px: { xs: 3.5, sm: 6 },
          py: 6,
          width: "100%",
          gap: {
            xs: "37px",
            sm: "unset",
          },
        }}>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px", width: { xs: "60%", sm: "40%" }, mx: "auto" }}>
          <Typography variant="h2" color="#252B42" align="center" sx={{ fontSize: 28, fontWeight: 700, lineHeight: "32px", letterSpacing: 0.1 }}>
            What they say about us
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px", py: "30px" }}>
            <Image src="/images/user.jpg" alt="user" width={90} height={90} />
            <Typography variant="h2" color="#737373" align="center" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
              Slate helps you see how many more days you need to work to reach your financial goal.
            </Typography>
            <Rating name="read-only" value={4} readOnly />
            <Box>
              <Typography variant="h2" color="#23A6F0" align="center" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
                Regina Miles
              </Typography>
              <Typography variant="h2" color="#252B42" align="center" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
                Designer
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "grid" },
            columnGap: { xs: "14px", sm: "17.85px" },
            rowGap: { xs: "12.44px", sm: "15.86px" },
            gridTemplateColumns: "repeat(3, 3fr)",
            gridTemplateRows: "auto",
          }}>
          {testi?.map((items, index) => {
            return <Image src={items} alt="Testimonials" width={142.769} height={142.769} key={index} />;
          })}
        </Box>
        <Box
          sx={{
            display: { xs: "grid", sm: "none" },
            columnGap: { xs: "14px", sm: "17.85px" },
            rowGap: { xs: "12.44px", sm: "15.86px" },
            gridTemplateColumns: "repeat(3, 3fr)",
            gridTemplateRows: "auto",
            overflow: "hidden",
          }}>
          {testi?.map((items, index) => {
            return <Image src={items} alt="Testimonials" width={112} height={112} key={index} />;
          })}
        </Box>
      </Box>
    </ContainerLayout>
  );
};

export default Testimonials;
