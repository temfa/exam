import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import ContainerLayout from "@/utils/container";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import Image from "next/image";
import Load from "../load";
import SampleBody, { colors } from "@/utils/data";
import Ellipse from "@/svgs/ellipse";
import Love2 from "@/svgs/love2";
import Cart2 from "@/svgs/cart2";
import Eye from "@/svgs/eye";
import { useAppSelector } from "@/redux/store/store";
import { setCart } from "@/redux/slice/cart";
import { useDispatch } from "react-redux";
import { setWaitlist } from "@/redux/slice/waitlist";

const SingleProducts = ({ product }: { product: any }) => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  let cart = useAppSelector((store) => store.cart);
  let wishlist = useAppSelector((store) => store.waitlist);
  let newCart: SampleBody[] = cart;
  let newWishList: SampleBody[] = wishlist;

  const addtoCart = () => {
    let itemInCart = cart.find((item) => item.id === product.id);
    if (itemInCart) {
      newCart = cart?.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            count: item.count + 1,
          };
        } else {
          return item;
        }
      });
    } else {
      newCart = [
        ...newCart,
        {
          id: product?.id,
          title: product?.title,
          price: product?.price,
          img: product?.thumbnail,
          count: 1,
          brand: product?.brand,
          stock: product?.stock,
          category: product?.category,
        },
      ];
    }
    dispatch(setCart(newCart));
    setOpen(true);
  };
  const addtoWishList = () => {
    let itemInWishList = wishlist.find((item) => item.id === product.id);
    if (itemInWishList) {
      newWishList = wishlist?.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            count: item.count + 1,
          };
        } else {
          return item;
        }
      });
    } else {
      newWishList = [
        ...newWishList,
        {
          id: product?.id,
          title: product?.title,
          price: product?.price,
          img: product?.thumbnail,
          count: 1,
          brand: product?.brand,
          stock: product?.stock,
          category: product?.category,
        },
      ];
    }
    dispatch(setWaitlist(newWishList));
    setOpen(true);
  };
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <Load />
      ) : (
        <Paper sx={{ width: "100%", pb: "48px", backgroundColor: "#FAFAFA", boxShadow: "none" }}>
          <ContainerLayout type={true}>
            <Box sx={{ display: "flex", gap: "30px", flexDirection: { xs: "column", sm: "row" } }}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "21px" }}>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Image src={product?.images[active]} width={506} height={450} alt="Single Product" />
                </Box>
                <Box sx={{ display: { xs: "block", sm: "none" } }}>
                  <Image src={product?.images[active]} width={348} height={247} alt="Single Product" />
                </Box>
                <Box sx={{ display: "flex", gap: "19px", overflowX: "scroll" }}>
                  {product?.images?.slice(0, 4)?.map((item: any, index: number) => {
                    return <Image src={item} width={100} height={75} alt="Gallery" key={index} onClick={() => setActive(index)} />;
                  })}
                </Box>
              </Box>
              <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: { xs: "16px", sm: "119px" } }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "25px" }}>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Typography variant="h2" color="#252B42" sx={{ fontSize: 20, fontWeight: 400, lineHeight: "30px", letterSpacing: 0.2 }}>
                      {product?.title}
                    </Typography>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <Rating name="read-only" value={product?.rating} precision={0.5} readOnly />
                      <Box sx={{ ml: 1.25 }}>{product?.rating} Reviews</Box>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <Typography variant="h2" color="#252B42" sx={{ fontSize: 24, fontWeight: 700, lineHeight: "32px", letterSpacing: 0.1 }}>
                      ${product?.price}
                    </Typography>
                    <Box sx={{ display: "flex", gap: "5px" }}>
                      <Typography variant="h2" color="#737373" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
                        Availability :
                      </Typography>
                      <Typography variant="h2" color="#23A6F0" sx={{ fontSize: 14, fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
                        {product?.stock > 0 ? "In Stock" : "Out of Stock"}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "19px", sm: "29px" } }}>
                  <Divider />
                  <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: "48px", sm: "67px" } }}>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      {colors?.map((item, index) => {
                        return <Ellipse key={index} color={item} />;
                      })}
                    </Box>
                    <Box sx={{ display: "flex", gap: "10px" }}>
                      <Button variant="contained" sx={{ backgroundColor: "#23A6F0", boxShadow: "none", textTransform: "capitalize" }}>
                        Select Options
                      </Button>
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#ff",
                          border: "1px solid #E8E8E8",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                        }}>
                        <Love2
                          action={() => {
                            addtoWishList();
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#ff",
                          border: "1px solid #E8E8E8",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                        }}>
                        <Cart2
                          action={() => {
                            addtoCart();
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          backgroundColor: "#ff",
                          border: "1px solid #E8E8E8",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          cursor: "pointer",
                        }}>
                        <Eye />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: 500 }}>
              <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
                message="Added Successfully"
                // key={vertical + horizontal}
              />
            </Box>
          </ContainerLayout>
        </Paper>
      )}
    </>
  );
};

export default SingleProducts;
