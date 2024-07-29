import React from "react";
import remveimg from "../../public/images/icon-remove-item.svg";
import Image from "next/image";

export default function Singlecartitem({ item, handleremoveitem, className }) {
  return (
    <div className="single_item py-3 space-x-10 px-4 mt-2 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="cartitemimages">
          <Image width={45} height={45} src={item.image.desktop} />
        </div>
        <div className="cartitemdetails">
          <h1 className="font-bold mb">{item.name}</h1>
          <p className="flex  text-gray-500  gap-3 items-center ">
            <span className="text-red-600 font-bold">{item.qnty}x</span>
            <span>@${item.price}</span>
            <span>${item.price * item.qnty}</span>
          </p>
        </div>
      </div>
      <div
        className={`${className} cursor-pointer p-2`}
        onClick={() => handleremoveitem(item.id)}
      >
        <Image width={10} alt="cancle btn" height={10} src={remveimg} />
      </div>
    </div>
  );
}
