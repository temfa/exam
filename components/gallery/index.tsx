import ContainerLayout from "@/utils/container";
import { galleryItem } from "@/utils/data";
import Box from "@mui/material/Box";
import Image from "next/image";
import React from "react";

const Gallery = () => {
  return (
    <ContainerLayout type={false}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: "15px",
        }}>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Image src={galleryItem[0].link} width={galleryItem[0].width} height={galleryItem[0].height} alt="furniture" />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Image src="/images/mobile1.png" width={331} height={300} alt="furniture" />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "8px",
            flexDirection: "column",
          }}>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Image src={galleryItem[1].link} width={galleryItem[1].width} height={galleryItem[1].height} alt="furniture" />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Image src="/images/mobile2.png" width={331} height={300} alt="furniture" />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Image src="/images/mobile3.png" width={331} height={300} alt="furniture" />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <Image src="/images/mobile4.png" width={331} height={300} alt="furniture" />
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "15px",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}>
            {galleryItem
              ?.filter((item, index2) => index2 > 1)
              .map((item, index) => (
                <Box sx={{ display: { xs: "none", sm: "block" } }} key={index}>
                  <Image src={item.link} width={item.width} height={item.height} alt="furniture" />
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </ContainerLayout>
  );
};

export default Gallery;
