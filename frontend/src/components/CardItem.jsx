import React from "react";
import CardList from "./CardList";

const CardItem = ({ data }) => {
  return (
    <>
      {data?.rides?.map((trip, idx) => (
        <CardList trip={trip} key={idx} />
      ))}
    </>
  );
};

export default CardItem;
