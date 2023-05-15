import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={styles.container}>
        <li className={styles.item}>
          <span className={styles.nav_text}>Courses</span>
          <KeyboardArrowDownIcon
            sx={{ marginTop: -0.3 }}
            className={styles.nav_icon}
          />
        </li>
        <li>
          <span className={styles.nav_text}>Programs</span>
          <KeyboardArrowDownIcon
            sx={{ marginTop: -0.3 }}
            className={styles.nav_icon}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
