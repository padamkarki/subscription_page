import React from "react";
import Card from "../../Cards/WhiteCard";
import Heading from "./Heading";
import PriceList from "./PriceList";
import Buttons from "./Buttons";

const Subscription = () => {
  return (
    <>
      <Card>
        <Heading />
        <PriceList />
        <Buttons />
      </Card>
    </>
  );
};

export default Subscription;
