import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({ img }) => {
  return (
    <div className="flex items-center justify-center flex-col space-y-2 cursor-pointer transition-colors hover:bg-slate-50 hover:rounded-sm hover:shadow-sm py-3">
      <img src={img} className="h-[300px] w-[300px]" alt="bag" />
      <p className="font-thin text-sm">Female</p>
      <p className="text-ellipsis mx-2">Lorem ipsum dolor sit amet.</p>
      <p className="text-blue-500">$75 - $100</p>
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
