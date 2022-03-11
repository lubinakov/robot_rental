import React from "react";
import Card from "../components/Card.js";
import { isMobile } from "react-device-detect";

const CardList = ({ robots }) => {
  return (
    <div className={isMobile ? "" : "grid grid-cols-4 gap-0.9"}>
      {robots.map((el) => {
        return <Card key={el.id} name={el.name} email={el.email} id={el.id} />;
      })}
    </div>
  );
};

export default CardList;
