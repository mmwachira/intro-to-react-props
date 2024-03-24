import React from "react";
import { useState } from "react";
//import Audi from "./Audi";

const PropDrilling = () => {
  const [car, setCar] = useState("Coupe");

  return <Audi car={car} />;
};


const Audi = ({ car }: CarProps) => {
  return <Mercedes car={car} />;
};

const Mercedes = ({ car }: CarProps) => {
  return <BMW car={car} />;
};

const BMW = ({ car }: CarProps) => {
  return <div>{car}</div>;
};

export default PropDrilling;