import Productlist from "./components/productlist";
import Cart from "./components/cart";
export default function Home() {
  return (
    <main className=" lg:p-10 sm:p-5">
      <div className="row flex   justify-center items-enter">
        <div className="col1 w-full md:w-9/12 ">
          <Productlist />
        </div>
        <div className="col1 hidden md:block w-4/12">
          <Cart />
        </div>
      </div>
    </main>
  );
}
