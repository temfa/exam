import React from "react";
// import styles from "./styles.module.css";
import ColorFacebook from "@/svgs/colorFacebook";
import ColorInsta from "@/svgs/colorInsta";
import ColorTwitter from "@/svgs/colorTwitter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import ContainerLayout from "@/utils/container";
import { footerLinks } from "@/utils/data";

const Footer = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box sx={{ width: "100%", backgroundColor: "#FAFAFA", py: "40px" }}>
        <ContainerLayout type={true}>
          <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography
              variant="h2"
              color="#252B42"
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "32px",
                letterSpacing: 0.1,
              }}>
              Bandage
            </Typography>
            <Box sx={{ display: "flex", gap: "20px" }}>
              <ColorFacebook />
              <ColorInsta />
              <ColorTwitter />
            </Box>
          </Box>
        </ContainerLayout>
      </Box>
      <ContainerLayout type={true}>
        <Box sx={{ py: "50px", display: "flex", gap: "30px", flexDirection: { xs: "column", sm: "row" } }}>
          {footerLinks?.map((iteem, index) => {
            return (
              <Box sx={{ display: "flex", gap: "20px", flexDirection: "column", width: { xs: "unset", sm: "180px" } }} key={index}>
                <Typography variant="h2" color="#252B42" sx={{ fontSize: 16, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.1 }}>
                  {iteem.title}
                </Typography>
                <Box sx={{ display: "flex", gap: "10px", flexDirection: "column" }} key={index}>
                  {iteem.subItems?.map((subItem, index2) => {
                    return (
                      <Link key={index2} href={subItem.link} underline="none" color="#737373" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
                        {subItem.title}
                      </Link>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
          <Box sx={{ display: "flex", gap: "20px", flexDirection: "column", width: { xs: "unset", sm: "180px" } }}>
            <Typography variant="h2" color="#252B42" sx={{ fontSize: 16, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.1 }}>
              Get In Touch
            </Typography>
            <Box>
              <Box sx={{ display: "flex", border: "1px solid #E6E6E6", width: "321px" }}>
                <TextField
                  id="outlined-basic"
                  label="Your Email"
                  variant="outlined"
                  sx={{
                    width: "204px",
                    borderRadius: " 5px",
                    background: "#F9F9F9",
                    border: "none",
                  }}
                />
                <Button
                  size="small"
                  sx={{
                    color: "#fff",
                    textTransform: "capitalize",
                    fontSize: 14,
                    fontWeight: 400,
                    width: "117px",
                    backgroundColor: "#23A6F0",
                    borderRadius: "0px 5px 5px 0px",
                    border: "1px solid #E6E6E6",
                  }}>
                  Subscribe
                </Button>
              </Box>
              <Typography variant="h6" color="#737373" sx={{ fontSize: 12, fontWeight: 400, lineHeight: "28px", letterSpacing: 0.2 }}>
                Lore imp sum dolor Amit
              </Typography>
            </Box>
          </Box>
        </Box>
      </ContainerLayout>
    </Box>
  );
};

export default Footer;
