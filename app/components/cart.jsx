"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Emptycart from "../../public/images/illustration-empty-cart.svg";
import { removefroncart } from "@/store/cartreducer";
import Singlecartitem from "./singlecartitem";
import carbon from "../../public/images/icon-carbon-neutral.svg";
import Orderconfirmcomp from "./confirmOrdercomp";

export default function Cart({ className }) {
  const [confirm, setconfirm] = useState(false);
  const cartitem = useSelector((store) => store.cart);
  const totalprice = cartitem.reduce((acc, currentitem) => {
    return acc + currentitem.price * currentitem.qnty;
  }, 0);

  const dispatch = useDispatch();
  const handleremoveitem = (id) => {
    dispatch(removefroncart(id));
  };
  return (
    <div className={`${className}card p-3 rounded-lg sm:my-24 bg-white`}>
      {confirm && <Orderconfirmcomp />}

      <div className="cart_head">
        <h1 className="text-red-500 my-5 md:my-4 text-lg md:text-sm font-bold">
          Your Cart ({cartitem.length})
        </h1>
      </div>
      {/* ---------------------- cartitems ------------------- */}
      <div className="cart_body">
        {cartitem.length == 0 ? (
          <div className="flex justify-center items-center">
            <Image src={Emptycart} width={150} height={150} alt="empty cart" />
          </div>
        ) : (
          <div className="cart_item_container border   max-h-60 overflow-auto">
            {cartitem.map((item) => {
              return (
                <Singlecartitem
                  handleremoveitem={handleremoveitem}
                  item={item}
                />
              );
            })}
          </div>
        )}
      </div>
      {/* -------------------------------------------- end -------------------------- */}
      <div className="cart_footer    p-3 ">
        <div className="total flex items-center justify-between">
          <p className="text-sm">Order Total</p>
          <p className="font-bold text-lg ">${totalprice}</p>
        </div>

        <div className="subinfo bg-red-50 rounded-lg mt-2 py-2">
          <p className="text-sm flex px-5 md:px2 justify-center items-center text-center">
            <span>
              <Image src={carbon} />
            </span>
            This is a <span className="font-bold">carbon-neutral</span>
            delivery
          </p>
        </div>

        <div className="confirmorder">
          <button
            onClick={() => setconfirm(true)}
            disabled={cartitem.length === 0}
            className={` ${
              cartitem.length === 0
                ? `bg-red-400 rounded-full hover:bg-red-500 text-center w-full p-3`
                : `bg-red-700 rounded-full hover:bg-red-500 text-center w-full p-3`
            } text-white my-3`}
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
}
