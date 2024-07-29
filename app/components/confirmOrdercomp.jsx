"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Singlecartitem from "./singlecartitem";

import confirm from "../../public/images/icon-order-confirmed.svg";

import Image from "next/image";
import { emptycart } from "@/store/cartreducer";
export default function Orderconfirmcomp() {
  const cartitem = useSelector((store) => store.cart);
  const totalprice = cartitem.reduce((acc, currentitem) => {
    return acc + currentitem.price * currentitem.qnty;
  }, 0);

  const dispatch = useDispatch();
  const handleconfirm = () => {
    // submit to backend here
    // empty the cart

    dispatch(emptycart());
    // go to home page
    window.location.reload();
  };
  return (
    <div className="overlay w-full left-0 h-screen    top-0   flex justify-center items-center  z-10 fixed">
      <div className="   w-96  ">
        <div className={`card p-3 rounded-lg sm:my-24 bg-white`}>
          <div className="cart_head">
            <Image src={confirm} width={30} height={30} />
            <h1 className="text-black text-2xl  my-2 font-extrabold">
              Order Confirmed
            </h1>
            <p className="text-xs text-gray-500 mb-2">
              We hop you enjoyed your food!
            </p>
          </div>
          {/* ---------------------- cartitems ------------------- */}
          <div className="cart_body">
            {cartitem.length == 0 ? (
              <div className="flex justify-center items-center">
                <Image
                  src={confirm}
                  width={150}
                  height={150}
                  alt="empty cart"
                />
              </div>
            ) : (
              <div className="cart_item_container    max-h-60 overflow-auto">
                {cartitem.map((item) => {
                  return <Singlecartitem className="hidden" item={item} />;
                })}
              </div>
            )}
          </div>
          {/* -------------------------------------------- end -------------------------- */}
          <div className="cart_footer    p-3 rounded-lg">
            <div className="total flex items-center justify-between">
              <p className="text-sm">Order Total</p>
              <p className="font-bold text-xl ">${totalprice}</p>
            </div>

            <div className="confirmorder">
              <button
                onClick={handleconfirm}
                className={`bg-orange-700 text-sm rounded-full hover:bg-orange-600 text-center w-full p-3 text-white my-3`}
              >
                Start New Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
