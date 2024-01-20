"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { mobileNav, navbarLinks } from "@/utils/data";
import Link from "next/link";
import Down from "@/svgs/down";
import UserSvg from "@/svgs/user";
import Search from "@/svgs/search";
import CartSvg from "@/svgs/cart";
import Love from "@/svgs/love";
import Cart from "../cart";
import { useAppSelector } from "@/redux/store/store";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Bars from "@/svgs/bars";
import Wishlist from "../wishlist";

const Navbar = ({ page }: { page: string }) => {
  const cart = useAppSelector((store) => store.cart);
  const waitlist = useAppSelector((store) => store.waitlist);
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(windowSize < 600 ? true : false);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pr: "17px",
        pl: "38px",
        flexDirection: { xs: "column", sm: "row" },
        gap: "21px",
      }}>
      <Box sx={{ display: "flex", gap: "40px", alignItems: "center", flexDirection: { xs: "column", sm: "row", width: "100%" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: { xs: "100%", sm: "unset" },
            pr: { xs: "35px", sm: "0px" },
            py: { xs: "23px", sm: "0px" },
          }}>
          <Typography variant="h2" color="#252B42" sx={{ py: "13px", fontSize: 24, fontWeight: 700, lineHeight: "32px", letterSpacing: 0.1 }}>
            Bandage
          </Typography>
          <Box sx={{ display: { xs: "block", sm: "none", cursor: "pointer" } }} component="span" onClick={() => setMobile(!mobile)}>
            <Bars />
          </Box>
        </Box>
        {mobile ? null : windowSize < 600 && page === "home" ? (
          <Box className={styles.navbarLinks}>
            {mobileNav?.map((items, index) => {
              return (
                <Link href={items.link} key={index}>
                  {items.title}
                </Link>
              );
            })}
          </Box>
        ) : (
          <Box className={styles.navbarLinks}>
            {navbarLinks?.map((items, index) => {
              if (items.dropdown) {
                return (
                  <div key={index}>
                    <p>{items.title}</p>
                    <Down />
                  </div>
                );
              } else {
                return (
                  <Link href={items.link} key={index}>
                    {items.title}
                  </Link>
                );
              }
            })}
          </Box>
        )}
      </Box>
      {mobile ? null : windowSize < 600 && page === "home" ? null : (
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "row" }, width: { xs: "100%", sm: "30%" } }}>
          <Box sx={{ display: "flex", gap: "5px", padding: "15px", alignItems: "center" }}>
            <UserSvg />
            <Typography variant="h2" color="#23A6F0" sx={{ fontSize: "14px", fontWeight: 700, lineHeight: "24px", letterSpacing: 0.2 }}>
              Login / Register
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "5px", padding: "15px", alignItems: "center" }}>
            <Search />
          </Box>
          <Box
            sx={{ display: "flex", gap: "5px", padding: "15px", alignItems: "center", cursor: "pointer" }}
            onClick={() => {
              setState(true);
            }}>
            <CartSvg />
            <Typography variant="h2" color="#23A6F0" sx={{ fontSize: "12px", fontWeight: 400, lineHeight: "16px", letterSpacing: 0.2 }}>
              {cart?.length}
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", gap: "5px", padding: "15px", alignItems: "center", cursor: "pointer" }}
            onClick={() => {
              setState2(true);
            }}>
            <Love />
            <Typography variant="h2" color="#23A6F0" sx={{ fontSize: "12px", fontWeight: 400, lineHeight: "16px", letterSpacing: 0.2 }}>
              {waitlist?.length}
            </Typography>
          </Box>
        </Box>
      )}
      <Cart state={state} action={() => setState(false)} />
      <Wishlist state={state2} action={() => setState2(false)} />
    </Box>
  );
};

export default Navbar;
