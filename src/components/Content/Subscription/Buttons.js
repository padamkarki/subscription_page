import React from "react";
import Razor from "../../../assets/Razor.png";

import styles from "./Buttons.module.css";

const Buttons = () => {
  return (
    <>
      <div className={styles.buttonContainer}>
        <button className={styles.cancelButton}>CANCEL</button>
        <button className={styles.proceedButton}>PROCEED TO PAY</button>
      </div>
      <img src={Razor} alt="razor" className={styles.img} />
    </>
  );
};

export default Buttons;
