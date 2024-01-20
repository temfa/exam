import React from "react";
import styles from "./styles.module.css";
import Follow from "../follow";
import Navbar from "../navbar";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Follow />
      <Navbar />
    </div>
  );
};

export default Header;
