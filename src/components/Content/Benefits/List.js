import React from "react";
import styles from "./List.module.css";

import book from "../../../assets/Icon_book.svg";
import clock from "../../../assets/Icon_clock.svg";
import live from "../../../assets/Icon_live.svg";
import scholar from "../../../assets/Icon_scholar.svg";
import adfree from "../../../assets/Icon_adfree.svg";

const List = () => {
  return (
    <ul className={styles.content}>
      <li className={styles.item}>
        <img src={book} alt="icon" className={styles.icon} />
        <p>
          <span className={styles.textcolor}>100+</span> Job relevant courses
        </p>
      </li>

      <li className={styles.item}>
        <img src={clock} alt="icon" className={styles.icon} />
        <p>
          <span className={styles.textcolor}>20,000+</span> Hours of content
        </p>
      </li>
      <li className={styles.item}>
        <img src={live} alt="icon" className={styles.icon} />
        <p>
          <span className={styles.textcolor}>Exclusive</span> webinar access
        </p>
      </li>
      <li className={styles.item}>
        <img src={scholar} alt="icon" className={styles.icon} />
        <p>
          Scholarship worth <span className={styles.textcolor}>₹94,500</span>
        </p>
      </li>

      <li className={styles.item}>
        <img src={adfree} alt="icon" className={styles.icon} />
        <p>
          <span className={styles.textcolor}>Ad Free</span> learning experience
        </p>
      </li>
    </ul>
  );
};

export default List;
