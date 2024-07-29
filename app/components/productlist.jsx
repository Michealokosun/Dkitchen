import { productdata } from "@/data";
import Productcard from "./Productcard";

export default function Productlist() {
  return (
    <div className="">
      <div className="mx-auto px-4 py-16 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className=" text-4xl font-bold mb-3">Desserts</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {productdata.map((product, index) => (
            <Productcard key={product.id} index={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
