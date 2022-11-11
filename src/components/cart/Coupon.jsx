import React from "react";

const Coupon = () => {
  return (
    <div className="space-y-3">
      <p className="font-semibold text-lg">Coupon Discount</p>
      <p>Enter your coupon code if you have one</p>
      <input
        type="text"
        name="coupon"
        className="border border-black h-10 pl-2"
        placeholder="Enter your coupon..."
      />
      <br />
      <button className="px-5 py-2 border-2 border-black transition-colors hover:bg-gray-900 hover:text-white">
        Apply Coupon
      </button>
    </div>
  );
};

export default Coupon;
