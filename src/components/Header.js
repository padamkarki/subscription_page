import React from "react";
import Navbar from "./Navbar";
import SearchIcon from "@mui/icons-material/Search";
import LOGO from "../assets/LOGO.svg";

import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.left_container}>
        <img src={LOGO} alt="logo" />
        <Navbar />
      </div>
      <div className={styles.right_container}>
        <SearchIcon />
        <button className={`${styles.text} ${styles.link}`}>Log in</button>
        <button className={`${styles.text} ${styles.button}`}>JOIN NOW</button>
      </div>
    </header>
  );
};

export default Header;
