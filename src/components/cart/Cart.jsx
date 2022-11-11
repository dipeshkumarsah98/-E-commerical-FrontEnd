import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
import Bill from "./Bill";
import Coupon from "./Coupon";
import cartStore from "../../store/CartStore";
import { toJS } from "mobx";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const items = toJS(cartStore.cartItem);
    console.log(items);
    setProducts(items);
  }, []);

  const clearCart = () => {
    cartStore.clearCart();
    setProducts([]);
  };

  return (
    <div className="container my-3">
      {/* heading */}
      <div className="heading flex justify-between place-item-center py-3 bg-slate-200 px-2 ">
        <p className="">Product</p>
        <p>Price</p>
        <p>Quality</p>
        <p>Total</p>
        <p></p>
      </div>
      {/* cart items */}
      {products?.map((product, index) => (
        <CartItem
          key={index}
          id={product.id}
          title={product.title}
          img={product.img}
          price={product.price}
        />
      ))}

      <hr className="h-2" />

      {/* buttons */}
      <div className="flex justify-between  my-5 mx-3 md:mx-0 ">
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 bg-gray-900 text-white border-2 border-black transition-colors hover:bg-white hover:text-black"
        >
          Continue Shopping
        </button>
        <button
          onClick={clearCart}
          className="px-5 py-2 border-2 border-black transition-colors hover:bg-gray-900 hover:text-white"
        >
          Clear Cart
        </button>
      </div>

      <div className="flex flex-col mx-3 space-y-5 md:justify-between my-5 md:flex-row">
        {/* coupon section */}
        <Coupon />

        {/* Bill Section */}
        <Bill subTotal={toJS(cartStore.total)} total={toJS(cartStore.total)} />
      </div>
    </div>
  );
};

export default observer(Cart);
