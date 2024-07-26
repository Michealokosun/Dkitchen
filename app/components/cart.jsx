"use client";
import React from "react";
import { useSelector } from "react-redux";
import remveimg from "../../public/images/icon-remove-item.svg";
import Image from "next/image";

export default function Cart() {
  const cartitem = useSelector((store) => store.cart);
  console.log(cartitem);
  return (
    <div>
      <div className="card p-3 rounded-lg sm:my-24 bg-white">
        <div className="cart_head">
          <h1 className="text-red-500 my-4 font-bold">
            Your Cart ({cartitem.length})
          </h1>
        </div>
        <div className="cart_body">
          <div className="cart_item_container shadow-inner  h-48 overflow-y-scroll">
            {cartitem.map((item) => {
              return (
                <div className="single_item space-x-10 px-4 mt-2 flex justify-between items-center">
                  <div>
                    <h1 className="font-bold mb-1">{item.name}</h1>
                    <p className="flex  text-gray-500  gap-3 items-center ">
                      <span className="text-red-600 font-bold">1x</span>
                      <span>@${item.price}</span>
                      <span>$5.50</span>
                    </p>
                  </div>
                  <div className="closebtn">
                    <Image
                      width={10}
                      alt="cancle btn"
                      height={10}
                      src={remveimg}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
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
