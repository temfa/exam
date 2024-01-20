import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Right from "@/svgs/right";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Clock from "@/svgs/clock";
import Comments from "@/svgs/comments";

const PostsCards = ({ image }: { image: string }) => {
  return (
    <Card sx={{ maxWidth: 348 }}>
      <CardMedia component="img" alt="post cards" height="300" image={image} />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: "10px", px: "25px", pt: "25px" }}>
        <Box sx={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <Typography variant="body2" sx={{ fontSize: 12, fontWeight: 400, lineHeight: "16px", letterSpacing: 0.2 }} color="#8EC2F2">
            Google
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 12, fontWeight: 400, lineHeight: "16px", letterSpacing: 0.2 }} color="#737373">
            Trending
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 12, fontWeight: 400, lineHeight: "16px", letterSpacing: 0.2 }} color="#737373">
            New
          </Typography>
        </Box>
        <Typography variant="h5" component="div" color="#252B42" sx={{ fontSize: 20, fontWeight: 400, lineHeight: "30px", letterSpacing: 0.2 }}>
          Loudest à la Madison #1 (L&apos;integral)
        </Typography>
        <Typography variant="body2" color="#737373" sx={{ fontSize: 14, fontWeight: 400, lineHeight: "20px", letterSpacing: 0.2, width: "95%" }}>
          We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Stack direction="row" spacing={0.625} sx={{ alignItems: "center" }}>
            <Clock />
            <Typography variant="body2" sx={{ fontSize: 12, fontWeight: 400, lineHeight: "16px", letterSpacing: 0.2 }} color="#737373">
              22 April 2021
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.625} sx={{ alignItems: "center" }}>
            <Comments />
            <Typography variant="body2" sx={{ fontSize: 12, fontWeight: 400, lineHeight: "16px", letterSpacing: 0.2 }} color="#737373">
              10 comments
            </Typography>
          </Stack>
        </Box>
        <Button size="small" endIcon={<Right />} sx={{ color: "#737373", textTransform: "capitalize", fontSize: 14, fontWeight: 700, width: "124px", mb: "35px" }}>
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default PostsCards;
