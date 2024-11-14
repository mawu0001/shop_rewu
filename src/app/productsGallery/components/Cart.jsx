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
    const cartData = items.map((item) => ({
      id: item.id,
      count: item.count,
      price: item.price,
      title: item.title,
      image: item.image,
    }));

    const searchParams = new URLSearchParams();
    searchParams.set("cart", JSON.stringify(cartData));
    searchParams.set("total", calculateTotal().toFixed(2));

    router.push(`/payment?${searchParams.toString()}`);
  };

  return (
    <section className="top-0 right-0 absolute md:relative  bg-saddle50 dark:bg-saddle900 text-saddle900 dark:text-saddle50 stroke-saddle900 dark:stroke-saddle50 border p-6 rounded-lg h-fit w-full lg:w-full xl:w-full">
      <header
        className="flex place-content-center place-items-center place-self-center p-2 md:hidden transition duration-200 ease-linear "
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen && <RiShoppingCart2Line />}
      </header>

      <div
        className={`absolute inset-0  md:hidden ${isOpen ? "block" : "hidden"}`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`m-5 p-6 rounded-lg relative md:static md:min-w-80 ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        {isOpen && (
          <BsFullscreenExit
            className="absolute right-2 top-2 text-saddle50 dark:text-saddle900"
            onClick={() => setIsOpen(false)}
          />
        )}
        <p className="text-center font-semibold">Cart</p>
        <ul className=" flex flex-col gap-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="my-2 grid text-xs  sm:text-sm md:text-base l:text-l"
            >
              {/* <Image
                src={item.image}
                width={250}
                height={250}
                alt={item.title}
              /> */}
              <div className="flex place-content-between gap-2">
                <p className="col-start-1">{item.title}</p>
                <p>${item.price}</p>
              </div>
              <div className="flex gap-2 place-items-start align-middle">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-saddle50 p-1"
                  title="Remove one from cart"
                >
                  <BsTrash3 />
                </button>
                <p className=" text-saddle900 dark:text-saddle50 stroke-saddle900 border w-fit rounded-3xl px-8 py-1.5 ">
                  {item.count}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <p className="text-center font-semibold">
            Total: ${calculateTotal().toFixed(2)}
          </p>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full hover:bg-green border stroke-green hover:text-saddle50 text-saddle900 dark:text-saddle50 py-2 px-4 rounded-3xl transition-colors mt-4"
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
};

export default Cart;
