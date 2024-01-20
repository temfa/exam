import React from "react";
// import styles from "./styles.module.css";
import PhoneSvg from "@/svgs/phone";
import Envelope from "@/svgs/envelope";
import Instagram from "@/svgs/instagram";
import Youtube from "@/svgs/youtube";
import Facebook from "@/svgs/facebook";
import Twitter from "@/svgs/twitter";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Follow = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "none", sm: "flex" },
        backgroundColor: "#23856D",
        px: "24px",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
      }}>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Box sx={{ display: "flex", padding: "10px", gap: "5px", alignItems: "center" }}>
          <PhoneSvg />
          <Typography variant="h6" color="#FFF" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
            (225) 555-0118
          </Typography>
        </Box>
        <Box sx={{ display: "flex", padding: "10px", gap: "5px", alignItems: "center" }}>
          <Envelope />
          <Typography variant="h6" color="#FFF" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
            michelle.rivera@example.com
          </Typography>
        </Box>
      </Box>
      <Typography variant="h6" color="#FFF" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
        Follow Us and get a chance to win 80% off
      </Typography>
      <Box sx={{ display: "flex", gap: "10px", alignItems: "center", padding: "10px" }}>
        <Typography variant="h6" color="#FFF" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
          Follow Us :
        </Typography>
        <Box sx={{ display: "flex", gap: "5.5px" }}>
          <Link href="#" sx={{ padding: "5px" }}>
            <Instagram />
          </Link>
          <Link href="#" sx={{ padding: "5px" }}>
            <Youtube />
          </Link>
          <Link href="#" sx={{ padding: "5px" }}>
            <Facebook />
          </Link>
          <Link href="#" sx={{ padding: "5px" }}>
            <Twitter />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Follow;
