"use client";
import { Montserrat } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const monteserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: monteserrat.style.fontFamily,
  },
});

export default theme;
