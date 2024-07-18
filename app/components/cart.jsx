import React from "react";

export default function Cart() {
  return (
    <div>
      <div className="card p-3 rounded-lg sm:my-24 bg-white">
        <div className="cart_head">
          <h1 className="text-red-500 font-bold"> Your Cart (7)</h1>
        </div>
        <div className="cart_body"></div>
        <div className="cart_footer">
          <div className="total flex items-center justify-between">
            <p className="text-sm">Order Total</p>
            <p className="font-bold ">$46.90</p>
          </div>
          <div className="subinfo bg-red-50 rounded-lg mt-2 py-2">
            <p className="text-sm text-center">
              This is a <span className="font-bold">carbon-neutral</span>
              delivery
            </p>
          </div>

          <div className="confirmorder">
            <button className="bg-red-700 rounded-full text-center w-full p-3 text-white my-3">
              Confirm Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
