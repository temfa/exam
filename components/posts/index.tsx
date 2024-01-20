import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { posts } from "@/utils/data";
import PostsCards from "../postsCards";

const Posts = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 14 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "80px", alignItems: "center" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
          <Typography variant="h5" color="#23A6F0" align="center" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
            Practice Advice
          </Typography>
          <Typography
            variant="h2"
            color="#252B42"
            align="center"
            sx={{ fontSize: 40, display: { xs: "none", sm: "block" }, fontWeight: 700, lineHeight: "50px", letterSpacing: 0.2 }}>
            Featured Posts
          </Typography>
          <Typography
            variant="h2"
            color="#252B42"
            align="center"
            sx={{
              fontSize: 40,
              display: { xs: "block", sm: "none" },
              fontWeight: 700,
              lineHeight: "50px",
              letterSpacing: 0.2,
              width: {
                xs: "50%",
                sm: "unset",
              },
              mx: "auto",
            }}>
            Featured Products
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            gap: { xs: "30px", sm: "15px" },
            alignItems: "center",
          }}>
          {posts?.map((items: string, index: number) => {
            return <PostsCards image={items} key={index} />;
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Posts;
