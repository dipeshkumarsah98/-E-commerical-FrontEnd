import React from "react";

const Bill = (props) => {
  const { subTotal, total } = props;

  return (
    <div className="space-y-3 md:w-2/6">
      {/* total price */}
      <div className="border border-gray-400 px-4 py-5 bg-slate-100 space-y-2">
        <span className="flex justify-between">
          <p>Subtotal: </p> ${subTotal}
        </span>
        <hr className="" />
        <span className="flex justify-between">
          <p>Total: </p> ${total}
        </span>
      </div>
      {/* checkout button */}
      <div className="flex justify-between md:justify-start">
        <span></span>
        <button className="px-5 py-2 bg-gray-900 text-white  border-2 border-black transition-colors hover:bg-white hover:text-black">
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default Bill;
