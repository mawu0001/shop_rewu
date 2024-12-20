"use client";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsFullscreenExit, BsTrash3 } from "react-icons/bs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Cart = ({ items, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.count, 0);
  };

  const handleCheckout = () => {
    const ids = items.map((item) => ({ id: item.id, count: item.count }));

    const searchParams = new URLSearchParams();
    searchParams.set("cartIds", JSON.stringify(ids));

    router.push(`/payment?${searchParams.toString()}`);
  };

  return (
    <section className="top-0 right-0 absolute md:relative bg-saddle900 md:bg-saddle100 md:text-saddle900 text-saddle50 p-6 rounded-lg h-fit w-full lg:w-full xl:w-full">
      <header
        className="flex place-content-center place-items-center place-self-center p-2 md:hidden transition duration-200 ease-linear "
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen && <RiShoppingCart2Line />}
      </header>

      <div
        className={`absolute inset-0 md:hidden ${isOpen ? "block" : "hidden"}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={` rounded-lg relative md:static md:min-w-80 flex flex-col  ${
          isOpen ? "block" : "hidden"
        } md:flex md:place-content-center`}
      >
        {isOpen && (
          <BsFullscreenExit
            className="absolute right-2 top-2 text-saddle50 "
            onClick={() => setIsOpen(false)}
          />
        )}
        <p className="text-center font-semibold">Cart</p>
        <ul className="flex flex-col gap-4">
          {items.map((item) => {
            return (
              <li
                key={item.id}
                className="my-2 flex sm:text-sm md:text-base l:text-l w-full gap-3 place-items-center"
              >
                <Image
                  src={item.thumbnail}
                  width={100}
                  height={100}
                  alt={item.title}
                />
                <div>
                  <div className="flex place-content-between gap-2 w-full">
                    <p className="col-start-1">{item.title}</p>
                    <p>${item.price}</p>
                  </div>
                  <div className="flex gap-2 place-items-start align-middle">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-saddle50 md:text-saddle900 p-1 place-self-center"
                      title="Remove one from cart"
                    >
                      <BsTrash3 />
                    </button>
                    <p className="md:text-saddle900 text-saddle50 stroke-saddle900 border w-fit rounded-3xl px-8 py-1.5">
                      {item.count}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="mt-4">
          <p className="text-center font-semibold">
            Total: ${calculateTotal().toFixed(2)}
          </p>
        </div>
        <button
          onClick={handleCheckout}
          className=" hover:bg-green border stroke-green md:text-saddle900 text-saddle50 hover:text-saddle50 py-2 px-4 rounded-3xl transition-colors mt-4 w-fit place-self-center "
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
