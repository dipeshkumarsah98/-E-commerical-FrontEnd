import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const Card = ({ id, img, title, category, price, index, addToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className="flex items-center justify-center flex-col space-y-2 cursor-pointer transition-colors hover:bg-slate-50 hover:rounded-sm hover:shadow-sm py-3"
    >
      <img src={img} className="h-[300px] w-[300px]" alt="bag" />
      {isHovered && (
        <p
          className="capitalize py-2 px-10 fixed flex gap-3 text-blue-500 items-center bg-white translate-y-20 "
          onClick={() => addToCart(id)}
        >
          <MdOutlineAddShoppingCart fontSize={20} /> Add to Cart
        </p>
      )}
      <p className="font-thin text-sm">{category}</p>
      <p className="text-center px-2">{title}</p>
      <p className="text-blue-500">${price}</p>
      <div className="flex justify-center ">
        <AiFillStar color="orange" />
        <AiFillStar color="orange" />
        <AiFillStar color="orange" />
        <AiFillStar color="orange" />
        <AiFillStar color="orange" />
        <p className="ml-2 text-gray-500 text-sm">(3 review)</p>
      </div>
    </div>
  );
};

export default Card;
