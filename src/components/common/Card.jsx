import React, { useState } from "react";
import { AiFillStar, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { SlEyeglass } from "react-icons/sl";
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
        <span className="absolute translate-x-20 md:translate-x-28 -translate-y-10 space-y-3">
          <AiOutlineHeart
            fontSize={40}
            className="bg-white text-blue-500 p-2 rounded-full hover:bg-blue-400 hover:text-white"
          />
          <SlEyeglass
            fontSize={40}
            className="bg-white text-blue-500 p-2 rounded-full hover:bg-blue-400 hover:text-white"
          />
          <AiOutlineShareAlt
            fontSize={40}
            className="bg-white text-blue-500 p-2 rounded-full hover:bg-blue-400 hover:text-white"
          />
        </span>
      )}

      <span
        className={
          isHovered
            ? "capitalize absolute flex gap-3 px-[5.5rem] py-1 rounded-sm transition-colors translate-y-[5rem] bg-white items-center text-blue-500 hover:bg-blue-400 hover:text-white"
            : "lg:hidden capitalize absolute flex gap-3 px-[5.5rem] py-1 rounded-sm transition-colors translate-y-[5rem] bg-white items-center text-blue-500 hover:bg-blue-400 hover:text-white"
        }
        onClick={() => addToCart(id)}
      >
        <MdOutlineAddShoppingCart fontSize={20} />
        <p>Add to Cart</p>
      </span>
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
