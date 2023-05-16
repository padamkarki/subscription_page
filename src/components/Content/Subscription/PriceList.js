import React, { useState } from "react";

const SubscriptionForm = () => {
  const [plan, setPlan] = useState("");
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);

  const plans = [
    { id: "disabled", months: 12, total: 99, pricePerMonth: 8, disabled: true },
    { id: "12", months: 12, total: 179, pricePerMonth: 15 },
    { id: "6", months: 6, total: 149, pricePerMonth: 25 },
    { id: "3", months: 3, total: 99, pricePerMonth: 33 },
  ];

  const subscriptionFee = 18000;

  const handlePlanChange = (event) => {
    const selectedPlan = event.target.value;
    setPlan(selectedPlan);

    const selectedOption = plans.find((option) => option.id === selectedPlan);
    if (selectedOption) {
      setPrice(selectedOption.total);
      setDiscountedPrice(selectedOption.pricePerMonth);
    } else {
      setPrice(0);
      setDiscountedPrice(0);
    }
  };

  const calculateTotalPrice = () => {
    const selectedOption = plans.find((option) => option.id === plan);
    if (selectedOption) {
      const limitedTimeOffer = subscriptionFee - selectedOption.total;
      return selectedOption.total - limitedTimeOffer;
    }
    return 0;
  };

  return (
    <div>
      <h1>Subscription Plan</h1>
      {plans.map((option) => (
        <div
          key={option.id}
          style={{
            backgroundColor: plan === option.id ? "#e6f7ff" : "white",
            border: plan === option.id ? "1px solid blue" : "1px solid gray",
            padding: "10px",
            marginBottom: "5px",
          }}
        >
          <label>
            <input
              type="radio"
              value={option.id}
              checked={plan === option.id}
              onChange={handlePlanChange}
              disabled={option.disabled}
            />
            {option.months} month subscription - Total ${option.total} ($
            {option.pricePerMonth} per month)
          </label>
        </div>
      ))}
      {plan && (
        <div>
          <p>Total Price: ${calculateTotalPrice()}</p>
          <p>Discounted Price: ${discountedPrice}</p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionForm;
