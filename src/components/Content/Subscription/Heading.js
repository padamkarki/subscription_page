import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles.circle1}>
            <span className={styles.text}>1</span>
          </div>
          <p className={styles.label}>Sign Up</p>
        </div>
        <div>
          <div className={styles.circle2}>
            <span className={styles.text}>2</span>
          </div>
          <p className={styles.label}>Subscribe</p>
        </div>
      </div>
      <h2 className={styles.heading}>Select your subcription plan</h2>
    </>
  );
};

export default Heading;
