import React from "react";
import Benefits from "./Benefits/Benefits";

import styles from "./Content.module.css";
import Subscription from "./Subscription/Subscription";

const Content = () => {
  return (
    <>
      <div className={styles.content_container}>
        <div className={styles.benefits}>
          <Benefits />
        </div>
        <div className={styles.subscription}>
          <Subscription />
        </div>
      </div>
    </>
  );
};

export default Content;
