import { observer } from "mobx-react-lite";
import React from "react";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartItem = (props) => {
  const { id, title, price, quantity, img, remove, increase, decrease } = props;
  return (
    <tr className="text-sm font-mono  border-b border-gray-200  md:text-base text-center h-32">
      <td>
        <img src={img} alt="bag" className="w-20 md:w-28 h-auto" />
      </td>
      <td className="overflow-scroll pl-2 text-start md:overflow-hidden">
        {title}
      </td>
      <td>${price}</td>
      <td className="flex justify-center gap-2 h-32 md:gap-5 items-center text-center">
        <AiOutlineMinus
          className="cursor-pointer"
          onClick={() => decrease(id)}
        />
        {quantity}
        <AiOutlinePlus
          className="cursor-pointer"
          onClick={() => increase(id)}
        />
      </td>
      <td>${price * quantity}</td>
      <td>
        <MdOutlineRemoveShoppingCart
          onClick={() => remove(id)}
          className="cursor-pointer hover:text-red-700"
          fontSize={25}
        />
      </td>
    </tr>
  );
};

export default observer(CartItem);
