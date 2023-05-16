import React from "react";

import List from "./List";

import styles from "./Benefits.module.css";

const Benefits = () => {
  return (
    <>
      <section>
        <div className={styles.text1}>
          <h1>Access curated courses worth</h1>
          <h1>
            <span className={styles.text2}>₹</span>{" "}
            <span className={`${styles.text2} ${styles.dashed}`}>18,500</span>{" "}
            at just{" "}
            <span className={`${styles.text2} ${styles.textcolor}`}>₹ 99</span>{" "}
            per year!
          </h1>
        </div>
        <List />
      </section>
    </>
  );
};

export default Benefits;
