import React from "react";
import Card from "./Card";
import Pic1 from "../../img/bag1.webp";
import Pic2 from "../../img/bag2.webp";
import Pic3 from "../../img/bag3.jpeg";
import Pic4 from "../../img/bag4.jpg";
import Pic5 from "../../img/bag5.jpg";

const CartList = () => {
  return (
    <div className="container my-10 grid grid-cols-4 gap-4 ">
      <Card img={Pic1} />
      <Card img={Pic2} />
      <Card img={Pic3} />
      <Card img={Pic4} />
      <Card img={Pic5} />
    </div>
  );
};

export default CartList;
