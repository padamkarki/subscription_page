import React, { useState, useEffect } from "react";
import styles from "./PriceList.module.css";
import offerclock from "../../../assets/Icon_offer_clock.svg";

const PriceList = () => {
  const [plan, setPlan] = useState("12");
  const [discount, setDiscount] = useState("");

  const plans = [
    { id: "disabled", months: 12, total: 99, pricePerMonth: 8, disabled: true },
    { id: "12", months: 12, total: 179, pricePerMonth: 15 },
    { id: "6", months: 6, total: 149, pricePerMonth: 25 },
    { id: "3", months: 3, total: 99, pricePerMonth: 33 },
  ];

  const subscriptionFee = 18500;

  const handlePlanChange = (event) => {
    const selectedPlan = event.target.value;
    setPlan(selectedPlan);

    const selectedOption = plans.find((option) => option.id === selectedPlan);
    if (selectedOption) {
      setDiscount(subscriptionFee - selectedOption.total);
    } else {
      setDiscount(0);
    }
  };

  useEffect(() => {
    const selectedOption = plans.find((option) => option.id === plan);
    if (selectedOption) {
      setDiscount(subscriptionFee - selectedOption.total);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* PLAN LIST -------------------------------------------------------------------------------------*/}

      {plans.map((option, index) => (
        <div
          key={option.id}
          className={`${styles.option} ${
            plan === option.id ? styles.selected : ""
          } ${option.disabled ? styles.disabled : ""}`}
        >
          <label className={styles.label}>
            <div className={styles.leftContent}>
              <input
                type="radio"
                value={option.id}
                checked={plan === option.id}
                onChange={handlePlanChange}
                disabled={option.disabled}
                className={styles.radio}
              />
              <p className={styles.text1}>
                {option.months} Months Subscription
              </p>
            </div>
            <div className={styles.rightContent}>
              <p className={styles.text2}>
                Total &nbsp;{" "}
                <span className={styles.text1}>₹{option.total}</span>
              </p>

              <p className={styles.text2}>
                ₹{option.pricePerMonth}&nbsp;&nbsp;
                <span className={styles.text3}> / mo</span>
              </p>
            </div>
          </label>
          {index === 0 && (
            <div className={styles.background}>
              <p className={styles.backgroundText}>Offer expired</p>
            </div>
          )}
          {index === 1 && (
            <div className={styles.background2}>
              <p className={styles.backgroundText}>Recommended</p>
            </div>
          )}
        </div>
      ))}
      {plan && (
        <div className={styles.line}>
          <div className={styles.container}>
            <div className={styles.left}>
              <p className={styles.text4}>Subscription Fee </p>
            </div>
            <div className={styles.right}>
              <p className={styles.text7}>
                ₹ {subscriptionFee.toLocaleString()}
              </p>
            </div>
          </div>

          {/* CARD -------------------------------------------------------------------------------------*/}
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.container1}>
                <div className={styles.left}>
                  <p className={styles.text5}>Limited time offer</p>
                </div>
                <div className={styles.right}>
                  <p className={styles.text7}>-{discount.toLocaleString()}</p>
                </div>
              </div>
              <div className={styles.container1}>
                <div className={styles.left}>
                  <span>
                    <img
                      src={offerclock}
                      width={20}
                      height={20}
                      alt="icon"
                      className={styles.offer_icon}
                    />
                  </span>
                  <p className={styles.text6}>
                    Offer valid till 25th March 2023
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Total -------------------------------------------------------------------------------------*/}

          <div className={styles.container3}>
            <div className={styles.left}>
              <p className={styles.text1}>
                Total <span className={styles.text4}>(Incl. of 18% GST)</span>
              </p>
            </div>
            <div className={styles.right}>
              <p className={styles.text8}>₹{subscriptionFee - discount}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceList;
