import React from "react";
import Pic1 from "../../img/bag2.webp";
const CartItem = ({ title, price, quantity }) => {
  return (
    <div className="heading flex justify-between items-center place-item-center py-3 px-2 my-2">
      <p className="flex gap-2 items-center">
        <img src={Pic1} alt="bag" className="w-14 h-16" /> {title}
      </p>
      <p>${price}</p>
      <p>{quantity || 1}</p>
      <p>$total</p>
      <p>X</p>
    </div>
  );
};

export default CartItem;
