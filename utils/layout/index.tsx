import React from "react";
import styles from "./styles.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.layoutContainer}>{children}</div>;
};

export default Layout;
