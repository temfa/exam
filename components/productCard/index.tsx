import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";

const ProductCard = ({ image, title, category, price, discount, action }: { image: string; title: string; category: string; price: number; discount: number; action: any }) => {
  return (
    <Card sx={{ maxWidth: { xs: 295, sm: 183 }, boxShadow: "none" }}>
      <CardMedia component="img" alt="green iguana" height="238" image={image} />
      <CardActionArea onClick={action}>
        <CardContent sx={{ px: "25px", pt: "25px", pb: "35px", display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
          <Typography variant="h5" component="div" sx={{ fontSize: 16, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.1 }} align="center" color="#252B42">
            {title}
          </Typography>
          <Typography variant="body2" color="#737373">
            {category}
          </Typography>
          <Box sx={{ display: "flex", gap: "5px" }}>
            <Typography variant="h4" color="#BDBDBD" sx={{ fontSize: 16, fontWeight: 700 }}>
              ${price}
            </Typography>
            <Typography variant="h4" color="#23856D" sx={{ fontSize: 16, fontWeight: 700 }}>
              $ {Math.ceil(price - discount)}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
