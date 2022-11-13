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

  const cartItem = toJS(cartStore.cartItem);

  useEffect(() => {
    const fetchData = () => {
      setProducts(cartItem);
    };
    fetchData();
  }, []);

  const clearCart = () => {
    cartStore.clearCart();
    setProducts([]);
  };
  const removeItemFromCart = (id) => {
    const items = products.filter((item) => item.id !== id);
    cartStore.removeItem(id);
    setProducts(items);
  };
  const increase = (id) => {
    const index = products.findIndex((item) => item.id === id);
    products[index].quantity += 1;
    cartStore.updateQuantity(index, 1);
  };
  const decrease = (id) => {
    const index = products.findIndex((item) => item.id === id);
    products[index].quantity -= 1;
    cartStore.updateQuantity(index, -1);
  };

  return (
    <div className="container my-3">
      {/* heading */}
      <table className="w-full">
        <thead>
          <tr className="h-16 font-mono bg-slate-50 text-gray-600 font-base text-sm md:text-lg">
            <th className=" md:w-[10%]"></th>
            <th className="w-2/12 md:w-2/12">Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* cart items */}
          {products?.map((product, index) => (
            <CartItem
              increase={increase}
              decrease={decrease}
              remove={removeItemFromCart}
              key={index}
              id={product.id}
              quantity={product.quantity}
              title={product.title}
              img={product.img}
              price={product.price}
            />
          ))}
        </tbody>
      </table>

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
