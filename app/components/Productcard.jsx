"use client";

import Image from "next/image";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { addtocart, decrementqnty, incrementqnty } from "@/store/cartreducer";
import { useState } from "react";
import plusicon from "../../public/images/icon-increment-quantity.svg";
import minusicon from "../../public/images/icon-decrement-quantity.svg";
export default function Productcard({ product }) {
  const [btnqnty, showqnty] = useState(false);
  const dispatch = useDispatch(addtocart);
  const handleaddtocartclick = () => {
    dispatch(addtocart(product));
    showqnty(product.active);
  };
  const handleincrement = () => {
    dispatch(incrementqnty(product));
  };
  const handledecrement = () => {
    dispatch(decrementqnty(product));
  };
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          height={500}
          width={500}
          alt="product image"
          src={product.image.desktop}
          className="h-full hover:scale-105 ease-in-out m-1 w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <p className=" text-xs mt-6 font-medium text-gray-500">
        {product.category}
      </p>
      <h3 className="mt-1 text-sm font-bold text-gray-700">{product.name}</h3>
      <p className="mt-1 text-sm  font-semibold text-red-500">
        ${product.price}
      </p>
      {/* -------------- ADD TO CART BUTTON ---------------------- */}
      <div className="addtobtn   w-full   ">
        {btnqnty ? (
          <div className="bg-red-600 flex justify-between items-center px-3 py-2 rounded-lg text-white">
            <button className="p-2" onClick={handledecrement}>
              <Image width={15} height={15} alt="plus" src={minusicon} />
            </button>

            <button className=" p-2" onClick={handleincrement}>
              <Image width={15} height={15} alt="plus" src={plusicon} />
            </button>
          </div>
        ) : (
          <button
            onClick={handleaddtocartclick}
            className="flex hover:bg-gray-50 border  text-red-700 border-red-700  hover:scale-105 items-center w-full text-xs justify-center gap-2 bg-white p-2  px-6 rounded-lg"
          >
            <span>
              <ShoppingCartIcon className="w-5 text-red-700" />
            </span>
            Add to cart
          </button>
        )}
      </div>
      {/*  -------------------- END ---------------------------- */}
    </div>
  );
}
