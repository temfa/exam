import React from "react";
import styles from "./styles.module.css";
import Follow from "../follow";
import Navbar from "../navbar";

const Header = ({ page }: { page: string }) => {
  return (
    <div className={styles.headerContainer}>
      <Follow />
      <Navbar page={page} />
    </div>
  );
};

export default Header;
